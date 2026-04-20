import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

const showBackdrop = jest.fn();
const hideBackdrop = jest.fn();
const releaseBackdropContext = jest.fn();
const callAction = jest.fn();
const toggleBodyScroll = jest.fn();
const handlePopUpCards = jest.fn();
const restoreDetachedPopUpCards = jest.fn();
const setStandalonePopUpCardsActive = jest.fn();
const suspendStandalonePopUpCards = jest.fn();
const appendLegacyPopup = jest.fn();
const displayLegacyPopupContent = jest.fn();
const hideLegacyPopupContent = jest.fn();

function updateMockLocation(locationObject, url) {
    const nextUrl = new URL(url, locationObject.href || 'http://localhost/');
    locationObject.href = nextUrl.href;
    locationObject.hash = nextUrl.hash;
}

function createMockWindow() {
    const mockWindow = new EventTarget();
    const locationObject = {
        href: 'http://localhost/lovelace/test',
        hash: '',
    };

    const historyObject = {
        pushState: jest.fn((state, title, url) => updateMockLocation(locationObject, url)),
        replaceState: jest.fn((state, title, url) => updateMockLocation(locationObject, url)),
        back: jest.fn(),
    };

    Object.assign(mockWindow, {
        location: locationObject,
        history: historyObject,
    });

    return mockWindow;
}

function createMockClassList(initialClasses = []) {
    const classes = new Set(initialClasses);

    return {
        add: (...names) => names.forEach(name => classes.add(name)),
        remove: (...names) => names.forEach(name => classes.delete(name)),
        toggle: (name, force) => {
            const shouldAdd = force === undefined ? !classes.has(name) : force;
            if (shouldAdd) {
                classes.add(name);
            } else {
                classes.delete(name);
            }
            return classes.has(name);
        },
        contains: (name) => classes.has(name),
        replace: (oldName, newName) => {
            classes.delete(oldName);
            classes.add(newName);
        },
    };
}

function createMockElement(initialClasses = []) {
    const element = new EventTarget();
    element.style = {
        display: '',
        transition: '',
        visibility: '',
        willChange: '',
    };
    element.dataset = {};
    element.classList = createMockClassList(initialClasses);
    element.getBoundingClientRect = jest.fn(() => ({ height: 0, width: 0 }));
    return element;
}

const mockWindow = createMockWindow();
global.window = mockWindow;
global.location = mockWindow.location;
global.history = mockWindow.history;

window.__bubbleLocationDeduperAdded = true;
window.__bubbleDialogListenerAdded = true;

jest.unstable_mockModule('./backdrop.js', () => ({
    getBackdrop: jest.fn(() => ({
        showBackdrop,
        hideBackdrop,
    })),
    releaseBackdropContext,
}));

jest.unstable_mockModule('../../tools/tap-actions.js', () => ({
    callAction,
}));

jest.unstable_mockModule('../../tools/utils.js', () => ({
    toggleBodyScroll,
}));

jest.unstable_mockModule('./cards/index.js', () => ({
    handlePopUpCards,
    restoreDetachedPopUpCards,
    setStandalonePopUpCardsActive,
    suspendStandalonePopUpCards,
}));

jest.unstable_mockModule('./legacy.js', () => ({
    appendLegacyPopup,
    displayLegacyPopupContent,
    hideLegacyPopupContent,
}));

const { cleanupPopupRuntime, closePopup, navigateToPreviousPopup, openPopup, registerPopupContext, removeHash } = await import('./helpers.js');

function flushRafQueue() {
    const callbacks = [...global.requestAnimationFrame.mock.calls];
    global.requestAnimationFrame.mockClear();
    callbacks.forEach(([callback]) => callback());
}

function dispatchTransformTransitionEnd(element) {
    const event = new Event('transitionend');
    Object.defineProperty(event, 'propertyName', { value: 'transform' });
    element.dispatchEvent(event);
}

function createStandaloneContext(config = {}) {
    const popUp = createMockElement(['bubble-pop-up', 'is-popup-closed']);
    const popUpContainer = createMockElement(['bubble-pop-up-container']);
    popUpContainer.scrollHeight = 0;
    popUpContainer.clientHeight = 0;

    return {
        isStandalonePopUp: true,
        popUp,
        editor: false,
        config: {
            hash: '#standalone-popup',
            cards: [{ type: 'custom:bubble-card' }],
            auto_close: 0,
            background_update: false,
            ...config,
        },
        elements: {
            header: createMockElement(['bubble-header']),
            popUpContainer,
        },
        updatePopupColor: jest.fn(),
    };
}

function createStandaloneHost() {
    return {
        sectionRow: {
            tagName: 'HUI-CARD',
            hidden: true,
            style: {
                display: 'none',
            },
        },
        sectionRowContainer: {
            style: {
                display: 'none',
                position: '',
            },
            classList: {
                contains: jest.fn((name) => name === 'card'),
            },
        },
    };
}

function createMockContainer(initialChildren = []) {
    const children = new Set(initialChildren);

    return {
        contains: jest.fn((child) => children.has(child)),
        appendChild: jest.fn((child) => {
            children.add(child);
            return child;
        }),
        removeChild: jest.fn((child) => {
            children.delete(child);
            return child;
        }),
    };
}

function createLegacyContext(config = {}) {
    const popUp = createMockElement(['bubble-pop-up', 'is-popup-closed']);

    return {
        isStandalonePopUp: false,
        popUp,
        verticalStack: createMockContainer([popUp]),
        editor: false,
        config: {
            hash: '#legacy-popup',
            auto_close: 0,
            background_update: false,
            ...config,
        },
        updatePopupColor: jest.fn(),
    };
}

describe('standalone popup lifecycle', () => {
    const usedContexts = [];

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        restoreDetachedPopUpCards.mockReturnValue(false);

        window.history.replaceState({}, '', 'http://localhost/lovelace/test');
        window.__bubbleLocationDeduperAdded = true;
        window.__bubbleDialogListenerAdded = true;

        global.requestAnimationFrame = jest.fn((callback) => callback);
        global.cancelAnimationFrame = jest.fn();
    });

    afterEach(() => {
        usedContexts.forEach((context) => cleanupPopupRuntime(context));
        usedContexts.length = 0;
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    test('completes standalone open on transition end instead of a fixed timer', () => {
        const context = createStandaloneContext({ open_action: { action: 'none' } });
        usedContexts.push(context);

        openPopup(context);

        // Interaction frame: only the backdrop. INP-measurable work ends here.
        expect(showBackdrop).toHaveBeenCalledTimes(1);
        expect(setStandalonePopUpCardsActive).not.toHaveBeenCalled();
        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(toggleBodyScroll).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-opening')).toBe(false);

        // RAF1 (phase 1): setup — listeners, color, display. No transition yet.
        flushRafQueue();

        expect(setStandalonePopUpCardsActive).toHaveBeenCalledWith(context, true);
        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-opening')).toBe(false);

        // RAF2 (phase 2): card restore/build + transition start.
        flushRafQueue();

        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
        expect(context.popUp.classList.contains('is-opening')).toBe(true);

        dispatchTransformTransitionEnd(context.popUp);

        expect(toggleBodyScroll).not.toHaveBeenCalled();

        flushRafQueue();

        expect(toggleBodyScroll).toHaveBeenCalledWith(true);
        expect(callAction).toHaveBeenCalledWith(context.popUp, context.config, 'open_action');
        expect(context.popUp.classList.contains('is-opening')).toBe(false);
    });

    test('falls back when standalone transition end is missing', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);

        openPopup(context);
        flushRafQueue(); // RAF1: phase 1
        flushRafQueue(); // RAF2: phase 2, arms the transition fallback timer

        jest.advanceTimersByTime(359);
        expect(toggleBodyScroll).not.toHaveBeenCalled();

        jest.advanceTimersByTime(1);

        expect(toggleBodyScroll).not.toHaveBeenCalled();

        flushRafQueue();

        expect(toggleBodyScroll).toHaveBeenCalledWith(true);
    });

    test('defers hass sync to RAF when cards are already in the popup DOM', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);
        // Simulate the warm path where cards are already mounted in the popup DOM.
        context._cardsContainer = {};

        openPopup(context);

        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushRafQueue(); // RAF1: phase 1 — setup only, no cards

        expect(context.popUp.classList.contains('is-opening')).toBe(false);
        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushRafQueue(); // RAF2: phase 2 — _cardsContainer set, no fragment → deferred sync

        expect(context.popUp.classList.contains('is-opening')).toBe(true);
        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushRafQueue(); // RAF3: deferred hass sync

        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
    });

    test('restores a suspended standalone host on open and suspends it again on close', () => {
        const context = {
            ...createStandaloneContext(),
            ...createStandaloneHost(),
        };
        usedContexts.push(context);

        openPopup(context);

        expect(context.sectionRow.hidden).toBe(true);
        expect(context.sectionRow.style.display).toBe('none');

        flushRafQueue(); // RAF1: phase 1 restores the host and makes the shell visible

        expect(context.sectionRow.hidden).toBe(false);
        expect(context.sectionRow.style.display).toBe('');
        expect(context.sectionRowContainer.style.display).toBe('');
        expect(context.sectionRowContainer.style.position).toBe('absolute');

        flushRafQueue();
        dispatchTransformTransitionEnd(context.popUp);

        closePopup(context);
        dispatchTransformTransitionEnd(context.popUp);

        expect(context.sectionRow.hidden).toBe(true);
        expect(context.sectionRow.style.display).toBe('none');
        expect(context.sectionRowContainer.style.display).toBe('none');
        expect(context.sectionRowContainer.style.position).toBe('');
    });

    test('primes cold standalone content in RAF2, popup animates with cards built', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);

        openPopup(context);

        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-opening')).toBe(false);

        flushRafQueue(); // RAF1: phase 1 — setup only

        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-opening')).toBe(false);

        flushRafQueue(); // RAF2: phase 2 — cold build + transition start

        // Cards are built BEFORE the transition class is set, so popup slides up
        // with content already in place — no empty-shell flash.
        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
        expect(context.popUp.classList.contains('is-opening')).toBe(true);
    });

    test('marks only the standalone popup being restored for deferred child updates', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);

        handlePopUpCards.mockImplementationOnce((activeContext) => {
            expect(activeContext.popUp.dataset.bubblePopupOpening).toBe('true');
        });

        openPopup(context);
        flushRafQueue();
        flushRafQueue();

        expect(context.popUp.dataset.bubblePopupOpening).toBeUndefined();
    });

    test('keeps popup background blur disabled for two frames after open settles', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);

        openPopup(context, true);

        expect(context.popUp.dataset.bubblePopupBlurGuard).toBe('true');

        flushRafQueue();

        expect(context.popUp.dataset.bubblePopupBlurGuard).toBe('true');

        flushRafQueue();

        expect(context.popUp.dataset.bubblePopupBlurGuard).toBe('true');

        flushRafQueue();

        expect(context.popUp.dataset.bubblePopupBlurGuard).toBeUndefined();
    });

    test('refreshes deferred standalone shell updates before opening', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);
        context._standaloneNeedsShellRefresh = true;
        context.refreshPopupShell = jest.fn(() => {
            context._standaloneNeedsShellRefresh = false;
        });

        openPopup(context);

        expect(context.refreshPopupShell).not.toHaveBeenCalled();

        flushRafQueue();

        expect(context.refreshPopupShell).toHaveBeenCalledTimes(1);
        expect(context._standaloneNeedsShellRefresh).toBe(false);
    });

    test('shows the backdrop before running deferred standalone shell refresh work', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);
        context._standaloneNeedsShellRefresh = true;
        context.refreshPopupShell = jest.fn(() => {
            context._standaloneNeedsShellRefresh = false;
        });

        openPopup(context);

        expect(showBackdrop).toHaveBeenCalledTimes(1);
        expect(context.refreshPopupShell).not.toHaveBeenCalled();

        flushRafQueue();

        expect(context.refreshPopupShell).toHaveBeenCalledTimes(1);
        expect(showBackdrop.mock.invocationCallOrder[0]).toBeLessThan(context.refreshPopupShell.mock.invocationCallOrder[0]);
    });

    test('primes the standalone popup header before deferred shell refresh work', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);
        context._standaloneNeedsShellRefresh = true;
        context.refreshPopupHeader = jest.fn();
        context.refreshPopupShell = jest.fn(() => {
            context._standaloneNeedsShellRefresh = false;
        });

        openPopup(context);

        expect(showBackdrop).toHaveBeenCalledTimes(1);
        expect(context.refreshPopupHeader).toHaveBeenCalledTimes(1);
        expect(context.refreshPopupShell).not.toHaveBeenCalled();
        expect(showBackdrop.mock.invocationCallOrder[0]).toBeLessThan(context.refreshPopupHeader.mock.invocationCallOrder[0]);

        flushRafQueue();

        expect(context.refreshPopupShell).toHaveBeenCalledTimes(1);
        expect(context.refreshPopupHeader.mock.invocationCallOrder[0]).toBeLessThan(context.refreshPopupShell.mock.invocationCallOrder[0]);
    });

    test('refreshes the legacy popup header before showing popup content', () => {
        const context = createLegacyContext();
        usedContexts.push(context);
        context.refreshPopupHeader = jest.fn();

        openPopup(context);

        expect(context.refreshPopupHeader).not.toHaveBeenCalled();
        expect(displayLegacyPopupContent).not.toHaveBeenCalled();

        flushRafQueue();

        expect(context.refreshPopupHeader).toHaveBeenCalledTimes(1);
        expect(displayLegacyPopupContent).toHaveBeenCalledTimes(1);
        expect(context.refreshPopupHeader.mock.invocationCallOrder[0]).toBeLessThan(displayLegacyPopupContent.mock.invocationCallOrder[0]);
    });

    test('defers standalone close cleanup until transition end', () => {
        const context = createStandaloneContext({
            background_update: true,
            close_action: { action: 'none' },
        });
        usedContexts.push(context);

        context.popUp.classList.remove('is-popup-closed');
        context.popUp.classList.add('is-popup-opened');

        closePopup(context);

        expect(toggleBodyScroll).not.toHaveBeenCalledWith(false);
        expect(hideBackdrop).not.toHaveBeenCalled();
        expect(setStandalonePopUpCardsActive).not.toHaveBeenCalledWith(context, false);
        expect(context.popUp.classList.contains('is-closing')).toBe(true);
        expect(context.popUp.classList.contains('is-switch-closing')).toBe(false);
        expect(context.popUp.classList.contains('is-popup-opened')).toBe(true);
        expect(context.popUp.classList.contains('is-popup-closed')).toBe(false);

        flushRafQueue();

        expect(hideBackdrop).toHaveBeenCalledTimes(1);

        dispatchTransformTransitionEnd(context.popUp);

        expect(toggleBodyScroll).toHaveBeenCalledWith(false);
        expect(setStandalonePopUpCardsActive).toHaveBeenCalledWith(context, false);
        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
    });

    test('force-closes a runtime-active standalone popup when hash removal finds a stale closed class', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        registerPopupContext(context);

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-a');
        window.dispatchEvent(new Event('location-changed'));
        flushRafQueue();
        flushRafQueue();
        dispatchTransformTransitionEnd(context.popUp);

        jest.clearAllMocks();

        context.popUp.classList.remove('is-popup-opened', 'is-opening', 'is-closing');
        context.popUp.classList.add('is-popup-closed');

        removeHash(true);

        expect(hideBackdrop).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-closing')).toBe(true);

        flushRafQueue();

        expect(hideBackdrop).toHaveBeenCalledTimes(1);

        dispatchTransformTransitionEnd(context.popUp);

        expect(toggleBodyScroll).toHaveBeenCalledWith(false);
        expect(setStandalonePopUpCardsActive).toHaveBeenCalledWith(context, false);
    });

    test('delays the next standalone popup open by one frame during popup-to-popup navigation', () => {
        const contextA = createStandaloneContext({ hash: '#popup-a' });
        const contextB = createStandaloneContext({ hash: '#popup-b' });
        usedContexts.push(contextA, contextB);

        registerPopupContext(contextA);
        registerPopupContext(contextB);

        openPopup(contextA, true);
        flushRafQueue();

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-b');
        window.dispatchEvent(new Event('location-changed'));

        expect(contextA.popUp.classList.contains('is-closing')).toBe(true);
        expect(contextA.popUp.classList.contains('is-switch-closing')).toBe(true);
        expect(contextA.popUp.classList.contains('is-popup-opened')).toBe(true);
        expect(contextA.popUp.classList.contains('is-popup-closed')).toBe(false);
        expect(contextB.popUp.classList.contains('is-opening')).toBe(false);
        expect(toggleBodyScroll).not.toHaveBeenCalledWith(false);
        expect(hideBackdrop).not.toHaveBeenCalled();
        expect(showBackdrop).toHaveBeenCalledTimes(1);
        expect(contextA.popUp.style.willChange).toBe('');

        flushRafQueue(); // RAF-switch: _standaloneOpenImmediateFrame=true → phase1() runs inline, schedules phase2

        expect(showBackdrop).toHaveBeenCalledTimes(1);

        flushRafQueue(); // phase2: card restore + is-opening

        expect(contextB.popUp.classList.contains('is-opening')).toBe(true);
        expect(showBackdrop).toHaveBeenCalledTimes(2);

        dispatchTransformTransitionEnd(contextA.popUp);

        expect(setStandalonePopUpCardsActive).not.toHaveBeenCalledWith(contextA, false);
        expect(suspendStandalonePopUpCards).not.toHaveBeenCalledWith(contextA);

        flushRafQueue();

        expect(setStandalonePopUpCardsActive).toHaveBeenCalledWith(contextA, false);
        expect(suspendStandalonePopUpCards).toHaveBeenCalledWith(contextA);
    });

    test('primes the scroll mask before a long popup becomes visible during popup-to-popup navigation', () => {
        const contextA = createStandaloneContext({ hash: '#popup-a' });
        const contextB = createStandaloneContext({ hash: '#popup-b' });
        usedContexts.push(contextA, contextB);

        contextB.elements.popUpContainer.scrollHeight = 900;
        contextB.elements.popUpContainer.clientHeight = 400;

        registerPopupContext(contextA);
        registerPopupContext(contextB);

        openPopup(contextA, true);
        flushRafQueue();

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-b');
        window.dispatchEvent(new Event('location-changed'));

        flushRafQueue();
        flushRafQueue();

        expect(contextB.popUp.classList.contains('is-opening')).toBe(true);
        expect(contextB.elements.popUpContainer.classList.contains('is-scrollable')).toBe(true);
    });

    test('navigates back to the previous popup when one opened the current popup', () => {
        const contextA = createStandaloneContext({ hash: '#popup-a' });
        const contextB = createStandaloneContext({ hash: '#popup-b' });
        usedContexts.push(contextA, contextB);

        registerPopupContext(contextA);
        registerPopupContext(contextB);
        contextB._previousPopupHash = '#popup-a';

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-b');
        jest.clearAllMocks();

        navigateToPreviousPopup(contextB);

        expect(window.history.back).toHaveBeenCalledTimes(1);
        expect(window.history.replaceState).not.toHaveBeenCalled();
    });

    test('falls back to closing when there is no previous popup to reopen', () => {
        const context = createStandaloneContext({ hash: '#popup-b' });
        usedContexts.push(context);

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-b');
        jest.clearAllMocks();

        navigateToPreviousPopup(context);

        expect(window.history.back).not.toHaveBeenCalled();

        jest.advanceTimersByTime(50);

        expect(window.history.replaceState).toHaveBeenCalledTimes(1);
        expect(window.location.hash).toBe('');
    });

    test('allows a direct outside click fallback once the popup has been settled briefly', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        registerPopupContext(context);
        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-a');

        openPopup(context, true);
        flushRafQueue();

        context._popupOpenSettledAt = Date.now() - 200;

        const clickEvent = new Event('click');
        Object.defineProperty(clickEvent, 'composedPath', {
            value: () => [window],
        });

        window.dispatchEvent(clickEvent);

        expect(window.location.hash).toBe('');
    });
});

describe('legacy popup location routing', () => {
    const usedContexts = [];

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();

        window.history.replaceState({}, '', 'http://localhost/lovelace/test');
        window.__bubbleLocationDeduperAdded = true;
        window.__bubbleDialogListenerAdded = true;

        global.requestAnimationFrame = jest.fn((callback) => callback);
        global.cancelAnimationFrame = jest.fn();
    });

    afterEach(() => {
        usedContexts.forEach((context) => cleanupPopupRuntime(context));
        usedContexts.length = 0;
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    test('opens legacy popup on the first routed frame when switching from another popup', () => {
        const contextA = createLegacyContext({ hash: '#popup-a' });
        const contextB = createLegacyContext({ hash: '#popup-b' });
        usedContexts.push(contextA, contextB);

        registerPopupContext(contextA);
        registerPopupContext(contextB);

        openPopup(contextA, true);
        flushRafQueue();
        flushRafQueue();
        flushRafQueue();

        jest.clearAllMocks();

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-b');
        window.dispatchEvent(new Event('location-changed'));

        expect(displayLegacyPopupContent).not.toHaveBeenCalled();

        flushRafQueue();

        expect(displayLegacyPopupContent).toHaveBeenCalledTimes(1);
    });

    test('keeps the legacy popup shell mounted during open', () => {
        const context = createLegacyContext({ hash: '#popup-a' });
        usedContexts.push(context);

        registerPopupContext(context);

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-a');
        window.dispatchEvent(new Event('location-changed'));

        expect(appendLegacyPopup).not.toHaveBeenCalled();

        flushRafQueue();

        expect(displayLegacyPopupContent).toHaveBeenCalledTimes(1);
        expect(appendLegacyPopup).not.toHaveBeenCalled();
    });

    test('marks only the legacy popup being appended for deferred child updates', () => {
        const context = createLegacyContext({ hash: '#popup-a' });
        usedContexts.push(context);

        context.verticalStack = createMockContainer([]);
        appendLegacyPopup.mockImplementationOnce((activeContext) => {
            expect(activeContext.popUp.dataset.bubblePopupOpening).toBe('true');
            activeContext.verticalStack.appendChild(activeContext.popUp);
        });

        registerPopupContext(context);

        window.location.hash = '#popup-a';
        window.dispatchEvent(new Event('hashchange'));
        flushRafQueue();

        expect(appendLegacyPopup).toHaveBeenCalledTimes(1);
        expect(context.popUp.dataset.bubblePopupOpening).toBeUndefined();
    });

    test('keeps the legacy popup shell mounted after close', () => {
        const context = createLegacyContext({ hash: '#popup-a' });
        usedContexts.push(context);

        context.popUp.classList.remove('is-popup-closed');
        context.popUp.classList.add('is-popup-opened');

        closePopup(context);

        jest.advanceTimersByTime(317);

        expect(hideLegacyPopupContent).toHaveBeenCalledWith(context, 0);
        expect(appendLegacyPopup).not.toHaveBeenCalledWith(context, false);
    });

    test('opens legacy popup when the hash changes without a location-changed event', () => {
        const context = createLegacyContext({ hash: '#popup-a' });
        usedContexts.push(context);

        registerPopupContext(context);

        window.location.hash = '#popup-a';
        window.dispatchEvent(new Event('hashchange'));

        expect(displayLegacyPopupContent).not.toHaveBeenCalled();

        flushRafQueue();

        expect(displayLegacyPopupContent).toHaveBeenCalledTimes(1);
    });

    test('removes the current hash immediately for direct closes', () => {
        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-a');
        jest.clearAllMocks();

        removeHash(true);

        expect(window.history.replaceState).toHaveBeenCalledTimes(1);
        expect(window.location.hash).toBe('');

        jest.advanceTimersByTime(50);

        expect(window.history.replaceState).toHaveBeenCalledTimes(1);
    });
});
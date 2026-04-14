import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

const showBackdrop = jest.fn();
const hideBackdrop = jest.fn();
const releaseBackdropContext = jest.fn();
const callAction = jest.fn();
const toggleBodyScroll = jest.fn();
const handlePopUpCards = jest.fn();
const restoreDetachedPopUpCards = jest.fn();
const setStandalonePopUpCardsActive = jest.fn();
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
    suspendStandalonePopUpCards: jest.fn(),
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
        },
        updatePopupColor: jest.fn(),
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
        expect(hideBackdrop).toHaveBeenCalledTimes(1);
        expect(setStandalonePopUpCardsActive).not.toHaveBeenCalledWith(context, false);
        expect(context.popUp.classList.contains('is-closing')).toBe(true);
        expect(context.popUp.classList.contains('is-popup-opened')).toBe(true);
        expect(context.popUp.classList.contains('is-popup-closed')).toBe(false);

        dispatchTransformTransitionEnd(context.popUp);

        expect(toggleBodyScroll).toHaveBeenCalledWith(false);
        expect(setStandalonePopUpCardsActive).toHaveBeenCalledWith(context, false);
        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
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
        expect(contextA.popUp.classList.contains('is-popup-opened')).toBe(true);
        expect(contextA.popUp.classList.contains('is-popup-closed')).toBe(false);
        expect(contextB.popUp.classList.contains('is-opening')).toBe(false);
        expect(toggleBodyScroll).not.toHaveBeenCalledWith(false);
        expect(hideBackdrop).not.toHaveBeenCalled();

        flushRafQueue(); // RAF-switch: _standaloneOpenImmediateFrame=true → phase1() runs inline, schedules phase2
        flushRafQueue(); // phase2: card restore + is-opening

        expect(contextB.popUp.classList.contains('is-opening')).toBe(true);
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
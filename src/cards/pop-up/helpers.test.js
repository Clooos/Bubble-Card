import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

const showBackdrop = jest.fn();
const hideBackdrop = jest.fn();
const releaseBackdropContext = jest.fn();
const callAction = jest.fn();
const toggleBodyScroll = jest.fn();
const handlePopUpCards = jest.fn();
const restoreDetachedPopUpCards = jest.fn();
const restoreWarmStandalonePopUpCards = jest.fn();
const setStandalonePopUpCardsActive = jest.fn();
const suspendStandalonePopUpCards = jest.fn();
const suspendWarmStandalonePopUpCards = jest.fn();
const appendLegacyPopup = jest.fn();
const displayLegacyPopupContent = jest.fn();
const hideLegacyPopupContent = jest.fn();
const quickOpenAnimationMs = 140;
const warmCardRetentionMs = 3200;

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
        transform: '',
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
global.document = {
    querySelectorAll: jest.fn(() => []),
};
global.localStorage = {
    getItem: jest.fn(() => null),
    setItem: jest.fn(),
    removeItem: jest.fn(),
};
window.localStorage = global.localStorage;
global.navigator = {
    hardwareConcurrency: 2,
    deviceMemory: 2,
};

window.__bubbleLocationDeduperAdded = true;
window.__bubbleDialogListenerAdded = true;

jest.unstable_mockModule('./backdrop.js', () => ({
    getBackdrop: jest.fn(() => ({
        showBackdrop,
        hideBackdrop,
    })),
    hideExistingBackdrop: hideBackdrop,
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
    restoreWarmStandalonePopUpCards,
    setStandalonePopUpCardsActive,
    suspendStandalonePopUpCards,
    suspendWarmStandalonePopUpCards,
}));

jest.unstable_mockModule('./legacy.js', () => ({
    appendLegacyPopup,
    displayLegacyPopupContent,
    hideLegacyPopupContent,
}));

const { cleanupPopupRuntime, closePopup, navigateToPreviousPopup, openPopup, registerPopupContext, removeHash } = await import('./helpers.js');

let rafCallbacks;
let nextRafId;

function flushRafQueue() {
    const callbacks = [...rafCallbacks.values()];
    rafCallbacks.clear();
    callbacks.forEach((callback) => callback());
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
    let idleCallbacks;
    let nextIdleCallbackId;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        restoreDetachedPopUpCards.mockReturnValue(false);
        restoreWarmStandalonePopUpCards.mockReturnValue(false);
        suspendWarmStandalonePopUpCards.mockReturnValue(false);

        window.history.replaceState({}, '', 'http://localhost/lovelace/test');
        window.__bubbleLocationDeduperAdded = true;
        window.__bubbleDialogListenerAdded = true;

        rafCallbacks = new Map();
        nextRafId = 1;
        global.requestAnimationFrame = jest.fn((callback) => {
            const id = nextRafId++;
            rafCallbacks.set(id, callback);
            return id;
        });
        global.cancelAnimationFrame = jest.fn((id) => {
            rafCallbacks.delete(id);
        });
        idleCallbacks = new Map();
        nextIdleCallbackId = 1;
        window.requestIdleCallback = jest.fn((callback) => {
            const id = nextIdleCallbackId++;
            idleCallbacks.set(id, callback);
            return id;
        });
        window.cancelIdleCallback = jest.fn((id) => {
            idleCallbacks.delete(id);
        });
        window.innerWidth = 1280;
        window.innerHeight = 720;
        document.querySelectorAll.mockReturnValue([]);
        global.localStorage.getItem.mockReturnValue(null);
    });

    afterEach(() => {
        usedContexts.forEach((context) => cleanupPopupRuntime(context));
        usedContexts.length = 0;
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    function flushIdleCallback(id = null, deadline = { didTimeout: true, timeRemaining: () => 50 }) {
        const callbackId = id ?? idleCallbacks.keys().next().value;
        if (callbackId === undefined) {
            return;
        }

        const callback = idleCallbacks.get(callbackId);
        idleCallbacks.delete(callbackId);
        callback?.(deadline);
    }

    test('completes standalone open on transition end instead of a fixed timer', () => {
        const context = createStandaloneContext({
            open_action: { action: 'none' },
            performance_mode: 'performance',
        });
        usedContexts.push(context);

        openPopup(context);

        // Interaction frame: phase 1 inline — setup (listeners, color, display).
        // Backdrop is deferred to phase 2 so the interaction task stays short.
        expect(showBackdrop).not.toHaveBeenCalled();
        expect(setStandalonePopUpCardsActive).toHaveBeenCalledWith(context, true);
        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(toggleBodyScroll).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-opening')).toBe(false);

        // RAF1 (phase 2): backdrop + transition start. Card sync is deferred until after the transition.
        flushRafQueue();

        expect(showBackdrop).toHaveBeenCalledTimes(1);

        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-opening')).toBe(true);

        // Transition ends: finalizeStandalonePopupOpen schedules card sync + deferred body scroll.
        dispatchTransformTransitionEnd(context.popUp);

        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(toggleBodyScroll).not.toHaveBeenCalled();

        // RAF3: transition-end callback finalizes the shell and schedules card sync.
        flushRafQueue();

        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(toggleBodyScroll).not.toHaveBeenCalled();

        // RAF4: post-transition card sync only.
        flushRafQueue();

        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
        expect(toggleBodyScroll).not.toHaveBeenCalled();

        // RAF5: global body scroll lock after standalone content has settled.
        flushRafQueue();

        expect(toggleBodyScroll).toHaveBeenCalledWith(true);
        expect(callAction).toHaveBeenCalledWith(context.popUp, context.config, 'open_action');
        expect(context.popUp.classList.contains('is-opening')).toBe(false);
    });

    test('falls back when standalone transition end is missing', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);

        openPopup(context);
        flushRafQueue(); // phase 2, arms the transition fallback timer

        jest.advanceTimersByTime(359);
        expect(toggleBodyScroll).not.toHaveBeenCalled();

        jest.advanceTimersByTime(1);

        expect(toggleBodyScroll).not.toHaveBeenCalled();

        flushRafQueue();

        expect(toggleBodyScroll).not.toHaveBeenCalled();

        flushRafQueue();

        expect(toggleBodyScroll).toHaveBeenCalledWith(true);
    });

    test('clears stale inline drag transform before reopening a standalone popup', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);

        context.popUp.style.transform = 'translateY(100%)';

        openPopup(context, true);

        flushRafQueue();

        expect(context.popUp.style.transform).toBe('');
    });

    test('defers hass sync to RAF when cards are already in the popup DOM', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);
        // Simulate the warm path where cards are already mounted in the popup DOM.
        context._cardsContainer = {};

        openPopup(context);

        // Phase 1 runs inline — setup only, no cards (deferred sync).
        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-opening')).toBe(false);

        flushRafQueue(); // phase 2 — _cardsContainer set, no fragment → deferred sync

        expect(context.popUp.classList.contains('is-opening')).toBe(true);
        expect(handlePopUpCards).not.toHaveBeenCalled();

        // Card sync is deferred until after the CSS transition to avoid frame drops.
        dispatchTransformTransitionEnd(context.popUp);
        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushRafQueue(); // transition-end callback
        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushRafQueue(); // post-transition hass sync

        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
    });

    test('restores a suspended standalone host on open and suspends it again on close', () => {
        const context = {
            ...createStandaloneContext(),
            ...createStandaloneHost(),
        };
        usedContexts.push(context);

        openPopup(context);

        // Phase 1 runs inline — host is restored in the interaction frame.
        expect(context.sectionRow.hidden).toBe(false);
        expect(context.sectionRow.style.display).toBe('');
        expect(context.sectionRowContainer.style.display).toBe('');
        expect(context.sectionRowContainer.style.position).toBe('absolute');

        flushRafQueue(); // phase 2 — animation start
        dispatchTransformTransitionEnd(context.popUp);

        closePopup(context);
        dispatchTransformTransitionEnd(context.popUp);

        expect(context.sectionRow.hidden).toBe(false);
        expect(context.sectionRow.style.display).toBe('');

        flushRafQueue();

        expect(context.sectionRow.hidden).toBe(false);

        flushRafQueue();

        expect(context.sectionRow.hidden).toBe(true);
        expect(context.sectionRow.style.display).toBe('none');
        expect(context.sectionRowContainer.style.display).toBe('none');
        expect(context.sectionRowContainer.style.position).toBe('');
    });

    test('primes cold default-mode standalone content before opening in the default performance mode', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);

        openPopup(context);

        // Phase 1 runs inline — default mode restores beta.4 behavior and primes content before open.
        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
        expect(context.popUp.classList.contains('is-opening')).toBe(false);

        flushRafQueue(); // phase 2 — transition start

        expect(context.popUp.classList.contains('is-opening')).toBe(true);

        dispatchTransformTransitionEnd(context.popUp);
        flushRafQueue(); // transition-end callback + deferred listeners/body-scroll setup

        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
    });

    test('defers cold default-mode standalone content until after opening in performance mode', () => {
        const context = createStandaloneContext({ performance_mode: 'performance' });
        usedContexts.push(context);

        openPopup(context);

        // Phase 1 runs inline — performance mode keeps the beta.5 deferred cold-open path.
        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-opening')).toBe(false);

        flushRafQueue(); // phase 2 — transition start; card sync deferred until after

        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-opening')).toBe(true);

        dispatchTransformTransitionEnd(context.popUp);
        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushRafQueue(); // transition-end callback
        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushRafQueue(); // post-transition card sync

        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
    });

    test('still primes cold non-default standalone content before opening', () => {
        const context = createStandaloneContext({ popup_mode: 'fit-content' });
        usedContexts.push(context);

        openPopup(context);

        // Phase 1 runs inline — non-default mode primes content before scheduling phase 2.
        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
        expect(context.popUp.classList.contains('is-opening')).toBe(false);

        flushRafQueue(); // phase 2 — animation starts

        expect(context.popUp.classList.contains('is-opening')).toBe(true);
    });

    test('idle-prewarms the most recent standalone popup on low-tier devices after registration', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        global.localStorage.getItem.mockReturnValue(JSON.stringify([
            { path: '/lovelace/test', hash: '#popup-a', openedAt: 10 },
            { path: '/lovelace/test', hash: '#popup-b', openedAt: 5 },
        ]));

        registerPopupContext(context);

        expect(window.requestIdleCallback).toHaveBeenCalledTimes(1);
        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushIdleCallback();

        expect(setStandalonePopUpCardsActive).toHaveBeenNthCalledWith(1, context, true);
        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
        expect(setStandalonePopUpCardsActive).toHaveBeenNthCalledWith(2, context, false);
        expect(suspendStandalonePopUpCards).toHaveBeenCalledWith(context);
    });

    test('idle prewarm prefers warm-suspended cards over cold detachment when available', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        global.localStorage.getItem.mockReturnValue(JSON.stringify([
            { path: '/lovelace/test', hash: '#popup-a', openedAt: 10 },
        ]));
        suspendWarmStandalonePopUpCards.mockImplementation((activeContext) => activeContext === context);

        registerPopupContext(context);
        flushIdleCallback();

        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
        expect(suspendWarmStandalonePopUpCards).toHaveBeenCalledWith(context);
        expect(suspendStandalonePopUpCards).not.toHaveBeenCalledWith(context);
    });

    test('idle prewarm also refreshes a hidden standalone shell before first open', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        global.localStorage.getItem.mockReturnValue(JSON.stringify([
            { path: '/lovelace/test', hash: '#popup-a', openedAt: 10 },
        ]));

        context._standaloneNeedsShellRefresh = true;
        context.refreshPopupShell = jest.fn(() => {
            context._standaloneNeedsShellRefresh = false;
        });

        registerPopupContext(context);
        flushIdleCallback();

        expect(context.refreshPopupShell).toHaveBeenCalledTimes(1);
        expect(context._standaloneNeedsShellRefresh).toBe(false);
        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
    });

    test('cancels scheduled popup prewarm after the first user interaction', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        global.localStorage.getItem.mockReturnValue(JSON.stringify([
            { path: '/lovelace/test', hash: '#popup-a', openedAt: 10 },
        ]));

        registerPopupContext(context);

        expect(window.requestIdleCallback).toHaveBeenCalledTimes(1);

        window.dispatchEvent(new Event('pointerdown'));

        expect(window.cancelIdleCallback).toHaveBeenCalledTimes(1);

        flushIdleCallback();

        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(suspendStandalonePopUpCards).not.toHaveBeenCalled();
    });

    test('deterministically prewarms a visible standalone popup when no usage history exists yet', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        document.querySelectorAll.mockReturnValue([
            {
                hidden: false,
                dataset: {
                    tapAction: JSON.stringify({ action: 'navigate', navigation_path: '#popup-a' }),
                },
                style: {
                    display: '',
                    visibility: '',
                },
                classList: {
                    contains: (name) => name === 'bubble-button' || name === 'bubble-action',
                },
                getBoundingClientRect: () => ({ top: 12, left: 12, right: 112, bottom: 56, width: 100, height: 44 }),
            },
        ]);

        registerPopupContext(context);

        expect(window.requestIdleCallback).toHaveBeenCalledTimes(1);
        expect(handlePopUpCards).not.toHaveBeenCalled();

        jest.advanceTimersByTime(95);
        expect(handlePopUpCards).not.toHaveBeenCalled();

        jest.advanceTimersByTime(1);

        expect(setStandalonePopUpCardsActive).toHaveBeenNthCalledWith(1, context, true);
        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
        expect(setStandalonePopUpCardsActive).toHaveBeenNthCalledWith(2, context, false);
        expect(suspendStandalonePopUpCards).toHaveBeenCalledWith(context);
    });

    test('records successful standalone opens for future prewarm prioritization', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        openPopup(context, true);
        flushRafQueue();
        flushRafQueue();
        flushRafQueue();

        expect(global.localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(global.localStorage.setItem).toHaveBeenCalledWith(
            'bubble-card-popup-prewarm-v1',
            expect.stringContaining('#popup-a')
        );
    });

    test('adds and clears a lightweight fast-open animation class for instant opens', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        openPopup(context, true);

        expect(context.popUp.classList.contains('is-fast-opening')).toBe(true);

        jest.advanceTimersByTime(quickOpenAnimationMs - 1);
        expect(context.popUp.classList.contains('is-fast-opening')).toBe(true);

        jest.advanceTimersByTime(1);
        expect(context.popUp.classList.contains('is-fast-opening')).toBe(false);
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

    test('reopens a standalone popup after runtime state drift leaves it active but visually closed', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        openPopup(context);
        flushRafQueue();
        flushRafQueue();
        dispatchTransformTransitionEnd(context.popUp);
        flushRafQueue();

        expect(context._popupOpenInProgress).toBe(false);

        jest.clearAllMocks();

        context.popUp.classList.remove('is-popup-opened', 'is-opening', 'is-closing');
        context.popUp.classList.add('is-popup-closed');

        openPopup(context);

        // Normalization rollback fires hideBackdrop immediately; showBackdrop is deferred to phase 2.
        expect(hideBackdrop).toHaveBeenCalledTimes(1);
        expect(showBackdrop).not.toHaveBeenCalled();
        expect(toggleBodyScroll).toHaveBeenCalledWith(false);

        flushRafQueue(); // phase 2 — backdrop + animation start (phase 1 runs inline)

        expect(showBackdrop).toHaveBeenCalledTimes(1);
        expect(context.popUp.classList.contains('is-opening')).toBe(true);
    });

    test('rolls back a failed standalone open and allows a later retry', () => {
        const context = createStandaloneContext({
            hash: '#popup-a',
            performance_mode: 'performance',
        });
        usedContexts.push(context);
        const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

        handlePopUpCards.mockImplementationOnce(() => {
            throw new Error('standalone open failed');
        });

        openPopup(context);
        flushRafQueue(); // phase 2 — starts transition, card sync deferred (phase 1 inline)
        dispatchTransformTransitionEnd(context.popUp); // finalize → schedules card sync
        flushRafQueue(); // transition-end callback
        flushRafQueue(); // card sync runs → handlePopUpCards throws → rollback

        expect(consoleError).toHaveBeenCalledTimes(1);
        expect(context.popUp.classList.contains('is-popup-opened')).toBe(false);
        expect(context.popUp.classList.contains('is-popup-closed')).toBe(true);
        expect(context._popupOpenInProgress).toBe(false);
        expect(hideBackdrop).toHaveBeenCalledTimes(1);
        expect(toggleBodyScroll).toHaveBeenCalledWith(false);

        jest.clearAllMocks();

        openPopup(context);
        flushRafQueue(); // phase 2 — transition starts (phase 1 inline)
        dispatchTransformTransitionEnd(context.popUp); // finalize → schedules card sync
        flushRafQueue(); // transition-end callback
        flushRafQueue(); // card sync (no throw)
        flushRafQueue(); // deferred body scroll

        expect(context.popUp.classList.contains('is-popup-opened')).toBe(true);
        expect(toggleBodyScroll).toHaveBeenCalledWith(true);

        consoleError.mockRestore();
    });

    test('refreshes deferred standalone shell updates before opening', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);
        context._standaloneNeedsShellRefresh = true;
        context.refreshPopupShell = jest.fn(() => {
            context._standaloneNeedsShellRefresh = false;
        });

        openPopup(context);

        // Phase 1 is inline — shell refresh runs immediately in the interaction frame.
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

        // Phase 1 is inline — shell refresh runs in the interaction frame, backdrop deferred to phase 2.
        expect(showBackdrop).not.toHaveBeenCalled();
        expect(context.refreshPopupShell).toHaveBeenCalledTimes(1);

        flushRafQueue(); // phase 2 — backdrop

        expect(showBackdrop).toHaveBeenCalledTimes(1);
        expect(context.refreshPopupShell.mock.invocationCallOrder[0]).toBeLessThan(showBackdrop.mock.invocationCallOrder[0]);
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

        // Phase 1 is inline — header then shell refresh in interaction frame, backdrop deferred to phase 2.
        expect(showBackdrop).not.toHaveBeenCalled();
        expect(context.refreshPopupHeader).toHaveBeenCalledTimes(1);
        expect(context.refreshPopupShell).toHaveBeenCalledTimes(1);
        expect(context.refreshPopupHeader.mock.invocationCallOrder[0]).toBeLessThan(context.refreshPopupShell.mock.invocationCallOrder[0]);

        flushRafQueue(); // phase 2 — backdrop

        expect(showBackdrop).toHaveBeenCalledTimes(1);
        expect(context.refreshPopupShell.mock.invocationCallOrder[0]).toBeLessThan(showBackdrop.mock.invocationCallOrder[0]);
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

        expect(toggleBodyScroll).not.toHaveBeenCalledWith(false);
        expect(setStandalonePopUpCardsActive).not.toHaveBeenCalledWith(context, false);

        flushRafQueue();

        expect(toggleBodyScroll).toHaveBeenCalledWith(false);
        expect(setStandalonePopUpCardsActive).not.toHaveBeenCalledWith(context, false);

        flushRafQueue();

        expect(setStandalonePopUpCardsActive).toHaveBeenCalledWith(context, false);
        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
        expect(context.popUp.style.transform).toBe('');
    });

    test('does not force a standalone close reflow when the popup is already visibly open', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);

        context.popUp.classList.remove('is-popup-closed');
        context.popUp.classList.add('is-popup-opened');
        context.popUp.getBoundingClientRect.mockClear();

        closePopup(context);

        expect(context.popUp.getBoundingClientRect).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-closing')).toBe(true);
    });

    test('still forces a standalone close reflow when the popup visual state is stale', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);

        context.popUp.classList.remove('is-popup-closed');
        context.popUp.classList.add('is-popup-opened', 'is-opening');
        context.popUp.getBoundingClientRect.mockClear();

        closePopup(context);

        flushRafQueue();

        expect(context.popUp.getBoundingClientRect).toHaveBeenCalledTimes(1);
        expect(context.popUp.classList.contains('is-closing')).toBe(true);
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

        expect(toggleBodyScroll).not.toHaveBeenCalledWith(false);
        expect(setStandalonePopUpCardsActive).not.toHaveBeenCalledWith(context, false);

        flushRafQueue();

        expect(toggleBodyScroll).toHaveBeenCalledWith(false);
        expect(setStandalonePopUpCardsActive).not.toHaveBeenCalledWith(context, false);

        flushRafQueue();

        expect(setStandalonePopUpCardsActive).toHaveBeenCalledWith(context, false);
    });

    test('retains the most recent popup warm across A to B navigation and evicts it on the next switch', () => {
        const contextA = createStandaloneContext({ hash: '#popup-a' });
        const contextB = createStandaloneContext({ hash: '#popup-b' });
        const contextC = createStandaloneContext({ hash: '#popup-c' });
        usedContexts.push(contextA, contextB, contextC);
        suspendWarmStandalonePopUpCards.mockImplementation((activeContext) => {
            const shouldSuspend = activeContext === contextA || activeContext === contextB;
            if (shouldSuspend) {
                activeContext._standaloneWarmCardsSuspended = true;
            }
            return shouldSuspend;
        });

        registerPopupContext(contextA);
        registerPopupContext(contextB);
        registerPopupContext(contextC);

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
        expect(suspendWarmStandalonePopUpCards).not.toHaveBeenCalledWith(contextA);
        expect(suspendStandalonePopUpCards).not.toHaveBeenCalledWith(contextA);

        flushRafQueue();

        expect(setStandalonePopUpCardsActive).not.toHaveBeenCalledWith(contextA, false);

        flushRafQueue();

        expect(setStandalonePopUpCardsActive).toHaveBeenCalledWith(contextA, false);
        expect(suspendWarmStandalonePopUpCards).toHaveBeenCalledWith(contextA);
        expect(suspendStandalonePopUpCards).not.toHaveBeenCalledWith(contextA);

        jest.advanceTimersByTime(warmCardRetentionMs);

        expect(suspendStandalonePopUpCards).not.toHaveBeenCalledWith(contextA);

        jest.clearAllMocks();

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-c');
        window.dispatchEvent(new Event('location-changed'));

        flushRafQueue();
        flushRafQueue();
        dispatchTransformTransitionEnd(contextB.popUp);
        flushRafQueue();
        flushRafQueue();

        expect(suspendWarmStandalonePopUpCards).toHaveBeenCalledWith(contextB);
        expect(suspendStandalonePopUpCards).toHaveBeenCalledWith(contextA);
        expect(suspendStandalonePopUpCards).not.toHaveBeenCalledWith(contextB);
    });

    test('restores retained warm standalone cards when reopening after the old cold suspend timeout', () => {
        const contextA = createStandaloneContext({ hash: '#popup-a' });
        const contextB = createStandaloneContext({ hash: '#popup-b' });
        usedContexts.push(contextA, contextB);

        suspendWarmStandalonePopUpCards.mockImplementation((activeContext) => activeContext === contextA);
        restoreWarmStandalonePopUpCards.mockImplementation((activeContext) => activeContext === contextA);

        registerPopupContext(contextA);
        registerPopupContext(contextB);

        openPopup(contextA, true);
        flushRafQueue();

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-b');
        window.dispatchEvent(new Event('location-changed'));
        flushRafQueue();
        flushRafQueue();
        dispatchTransformTransitionEnd(contextA.popUp);
        flushRafQueue();

        jest.advanceTimersByTime(warmCardRetentionMs);

        jest.clearAllMocks();

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-a');
        window.dispatchEvent(new Event('location-changed'));

        flushRafQueue();
        flushRafQueue();

        expect(restoreWarmStandalonePopUpCards).toHaveBeenCalledWith(contextA);
        expect(suspendStandalonePopUpCards).not.toHaveBeenCalledWith(contextA);
    });

    test('opens a primed centered standalone popup instantly during popup-to-popup navigation', () => {
        const contextA = createStandaloneContext({ hash: '#popup-a', popup_mode: 'centered' });
        const contextB = createStandaloneContext({ hash: '#popup-b', popup_mode: 'centered' });
        usedContexts.push(contextA, contextB);

        contextB._standaloneWarmCardsSuspended = true;
        restoreWarmStandalonePopUpCards.mockImplementation((activeContext) => activeContext === contextB);

        registerPopupContext(contextA);
        registerPopupContext(contextB);

        openPopup(contextA, true);
        flushRafQueue();

        jest.clearAllMocks();

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-b');
        window.dispatchEvent(new Event('location-changed'));

        flushRafQueue(); // switch handoff frame

        expect(contextB.popUp.classList.contains('is-popup-opened')).toBe(true);
        expect(contextB.popUp.classList.contains('is-opening')).toBe(false);
        expect(contextB.popUp.classList.contains('is-fast-opening')).toBe(true);
        expect(showBackdrop).not.toHaveBeenCalled();
        expect(restoreWarmStandalonePopUpCards).toHaveBeenCalledWith(contextB);
        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushRafQueue(); // instant-open settle frame

        expect(showBackdrop).toHaveBeenCalledTimes(1);
        expect(toggleBodyScroll).not.toHaveBeenCalledWith(true);

        flushRafQueue(); // deferred warm hass sync

        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
        expect(toggleBodyScroll).not.toHaveBeenCalledWith(true);

        flushRafQueue(); // deferred body scroll lock

        expect(toggleBodyScroll).toHaveBeenCalledWith(true);
    });

    test('keeps the first centered transition visible for an idle-prewarmed popup', () => {
        const contextA = createStandaloneContext({ hash: '#popup-a', popup_mode: 'centered' });
        const contextB = createStandaloneContext({ hash: '#popup-b', popup_mode: 'centered' });
        usedContexts.push(contextA, contextB);

        contextB._popupPrewarmPrimed = true;
        contextB._detachedCardsFragment = { firstChild: {} };
        restoreDetachedPopUpCards.mockImplementation((activeContext) => activeContext === contextB);

        registerPopupContext(contextA);
        registerPopupContext(contextB);

        openPopup(contextA, true);
        flushRafQueue();

        jest.clearAllMocks();

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-b');
        window.dispatchEvent(new Event('location-changed'));

        flushRafQueue();

        expect(contextB.popUp.classList.contains('is-popup-opened')).toBe(false);
        expect(contextB.popUp.classList.contains('is-opening')).toBe(false);

        flushRafQueue();

        expect(contextB.popUp.classList.contains('is-opening')).toBe(true);
        expect(contextB.popUp.classList.contains('is-popup-opened')).toBe(true);
        expect(restoreDetachedPopUpCards).toHaveBeenCalledWith(contextB);
    });

    test('reuses cached scrollability for a prewarmed popup during the opening frame', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        let layoutReads = 0;
        Object.defineProperty(context.elements.popUpContainer, 'scrollHeight', {
            configurable: true,
            get() {
                layoutReads += 1;
                return 900;
            },
        });
        Object.defineProperty(context.elements.popUpContainer, 'clientHeight', {
            configurable: true,
            get() {
                layoutReads += 1;
                return 400;
            },
        });

        context._popupPrewarmPrimed = true;
        context._cachedPopupScrollableState = true;
        context._standaloneWarmCardsSuspended = true;
        restoreWarmStandalonePopUpCards.mockImplementation((activeContext) => activeContext === context);

        openPopup(context);

        flushRafQueue();
        layoutReads = 0;

        flushRafQueue();

        expect(context.popUp.classList.contains('is-opening')).toBe(true);
        expect(context.elements.popUpContainer.classList.contains('is-scrollable')).toBe(true);
        expect(layoutReads).toBe(0);
    });

    test('does not read scrollability for a cold default-mode open before content is present in performance mode', () => {
        const context = createStandaloneContext({ performance_mode: 'performance' });
        usedContexts.push(context);

        let layoutReads = 0;
        Object.defineProperty(context.elements.popUpContainer, 'scrollHeight', {
            configurable: true,
            get() { layoutReads += 1; return 0; },
        });
        Object.defineProperty(context.elements.popUpContainer, 'clientHeight', {
            configurable: true,
            get() { layoutReads += 1; return 0; },
        });

        // Phase 1 runs inline — cold default mode defers content, so no scrollability reflow.
        openPopup(context);
        expect(layoutReads).toBe(0);

        // Phase 2 starts the animation — still no layout read before the paint.
        flushRafQueue();
        expect(layoutReads).toBe(0);
        expect(context.popUp.classList.contains('is-opening')).toBe(true);
    });

    test('keeps bottom-sheet standalone opening animation during popup-to-popup navigation even when content is primed', () => {
        const contextA = createStandaloneContext({ hash: '#popup-a' });
        const contextB = createStandaloneContext({ hash: '#popup-b' });
        usedContexts.push(contextA, contextB);

        contextB._standaloneWarmCardsSuspended = true;
        restoreWarmStandalonePopUpCards.mockImplementation((activeContext) => activeContext === contextB);

        registerPopupContext(contextA);
        registerPopupContext(contextB);

        openPopup(contextA, true);
        flushRafQueue();

        jest.clearAllMocks();

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-b');
        window.dispatchEvent(new Event('location-changed'));

        flushRafQueue(); // switch handoff frame -> phase1 scheduled

        expect(contextB.popUp.classList.contains('is-popup-opened')).toBe(false);
        expect(contextB.popUp.classList.contains('is-opening')).toBe(false);

        flushRafQueue(); // phase2

        expect(contextB.popUp.classList.contains('is-opening')).toBe(true);
        expect(restoreWarmStandalonePopUpCards).toHaveBeenCalledWith(contextB);
    });

    test('primes the scroll mask before a long popup becomes visible during popup-to-popup navigation', () => {
        const contextA = createStandaloneContext({ hash: '#popup-a' });
        const contextB = createStandaloneContext({ hash: '#popup-b' });
        usedContexts.push(contextA, contextB);

        // Popup B is warm (suspended cards) so phase 1 primes content and measures scrollability.
        contextB._standaloneWarmCardsSuspended = true;
        restoreWarmStandalonePopUpCards.mockImplementation((activeContext) => activeContext === contextB);
        contextB.elements.popUpContainer.scrollHeight = 900;
        contextB.elements.popUpContainer.clientHeight = 400;

        registerPopupContext(contextA);
        registerPopupContext(contextB);

        openPopup(contextA, true);
        flushRafQueue();

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-b');
        window.dispatchEvent(new Event('location-changed'));

        flushRafQueue(); // switch handoff RAF — phase 1 inline, scroll state read with warm content

        expect(contextB.elements.popUpContainer.classList.contains('is-scrollable')).toBe(true);
        expect(contextB.popUp.classList.contains('is-opening')).toBe(false);

        flushRafQueue(); // phase 2 — animation starts

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

    test('hides an orphaned backdrop during runtime cleanup even if the popup class is already closed', () => {
        const context = createStandaloneContext({ hash: '#popup-a' });
        usedContexts.push(context);

        registerPopupContext(context);

        openPopup(context, true);
        flushRafQueue();

        jest.clearAllMocks();

        context.popUp.classList.remove('is-popup-opened', 'is-opening', 'is-closing');
        context.popUp.classList.add('is-popup-closed');
        window.history.replaceState({}, '', 'http://localhost/lovelace/test');

        cleanupPopupRuntime(context);

        expect(hideBackdrop).toHaveBeenCalledTimes(1);
    });

    test('opens popup on second tap from a third-party card when globalLastKnownHash is stale', () => {
        // Regression: #2386 — ring-tile-card (or any third-party) uses HA navigate() which calls
        // history.pushState() and fires a bare `location-changed` (no event.detail).
        // After a previous close the global last-known hash is still '#popup-test', so
        // currentHash === previousHash. The old history-length branch incorrectly treated
        // pushState-driven same-hash events as toggle-close requests → popup never opened.
        const context = createStandaloneContext({ hash: '#popup-test' });
        usedContexts.push(context);

        registerPopupContext(context);

        // First open (normal path) → open + fully settle the popup.
        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-test');
        window.dispatchEvent(new Event('location-changed'));
        flushRafQueue();
        flushRafQueue();
        dispatchTransformTransitionEnd(context.popUp);
        flushRafQueue();

        expect(context.popUp.classList.contains('is-popup-opened')).toBe(true);

        // Close the popup (hash removed). globalLastKnownHash stays '#popup-test'.
        window.history.replaceState({}, '', 'http://localhost/lovelace/test');
        window.dispatchEvent(new Event('location-changed'));

        expect(context.popUp.classList.contains('is-closing')).toBe(true);

        dispatchTransformTransitionEnd(context.popUp);
        flushRafQueue();

        jest.clearAllMocks();

        // Second tap: HA navigate() pushes '#popup-test' again — bare event, no detail.
        // globalLastKnownHash is still '#popup-test' (stale from the first session),
        // and history.length increases because it is a pushState call.
        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-test');
        window.dispatchEvent(new Event('location-changed')); // no detail — HA native navigate

        // The popup must start opening, not be toggled closed.
        expect(window.history.replaceState).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-closing')).toBe(false);

        flushRafQueue(); // phase 1
        flushRafQueue(); // phase 2

        expect(context.popUp.classList.contains('is-popup-opened')).toBe(true);
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

        rafCallbacks = new Map();
        nextRafId = 1;
        global.requestAnimationFrame = jest.fn((callback) => {
            const id = nextRafId++;
            rafCallbacks.set(id, callback);
            return id;
        });
        global.cancelAnimationFrame = jest.fn((id) => {
            rafCallbacks.delete(id);
        });
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

    test('appends the legacy popup shell during open when it starts detached', () => {
        const context = createLegacyContext({ hash: '#popup-a' });
        usedContexts.push(context);
        context.verticalStack = createMockContainer([]);

        registerPopupContext(context);

        window.history.pushState({}, '', 'http://localhost/lovelace/test#popup-a');
        window.dispatchEvent(new Event('location-changed'));

        expect(appendLegacyPopup).not.toHaveBeenCalled();

        flushRafQueue();

        expect(displayLegacyPopupContent).toHaveBeenCalledTimes(1);
        expect(appendLegacyPopup).not.toHaveBeenCalled();

        flushRafQueue();

        expect(appendLegacyPopup).toHaveBeenCalledWith(context, true);
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
        flushRafQueue();

        expect(appendLegacyPopup).toHaveBeenCalledTimes(1);
        expect(context.popUp.dataset.bubblePopupOpening).toBeUndefined();
    });

    test('detaches the legacy popup shell after close', () => {
        const context = createLegacyContext({ hash: '#popup-a' });
        usedContexts.push(context);

        context.popUp.classList.remove('is-popup-closed');
        context.popUp.classList.add('is-popup-opened');

        closePopup(context);

        jest.advanceTimersByTime(300);

        expect(hideLegacyPopupContent).toHaveBeenCalledWith(context, 0);
        expect(appendLegacyPopup).toHaveBeenCalledWith(context, false);
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
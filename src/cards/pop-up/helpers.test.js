import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

const showBackdrop = jest.fn();
const hideBackdrop = jest.fn();
const releaseBackdropContext = jest.fn();
const callAction = jest.fn();
const toggleBodyScroll = jest.fn();
const handlePopUpCards = jest.fn();
const restoreDetachedPopUpCards = jest.fn();
const setStandalonePopUpCardsActive = jest.fn();

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
}));

jest.unstable_mockModule('./legacy.js', () => ({
    appendLegacyPopup: jest.fn(),
    displayLegacyPopupContent: jest.fn(),
    hideLegacyPopupContent: jest.fn(),
}));

const { cleanupPopupRuntime, closePopup, openPopup, registerPopupContext } = await import('./helpers.js');

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

        expect(showBackdrop).toHaveBeenCalledTimes(1);
        expect(setStandalonePopUpCardsActive).toHaveBeenCalledWith(context, true);
        expect(restoreDetachedPopUpCards).toHaveBeenCalledWith(context);
        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(toggleBodyScroll).not.toHaveBeenCalled();
        expect(context.popUp.classList.contains('is-opening')).toBe(false);

        flushRafQueue();

        expect(context.popUp.classList.contains('is-opening')).toBe(true);
        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushRafQueue();

        expect(handlePopUpCards).toHaveBeenCalledTimes(1);

        dispatchTransformTransitionEnd(context.popUp);

        expect(toggleBodyScroll).toHaveBeenCalledWith(true);
        expect(callAction).toHaveBeenCalledWith(context.popUp, context.config, 'open_action');
        expect(context.popUp.classList.contains('is-opening')).toBe(false);
    });

    test('falls back when standalone transition end is missing', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);

        openPopup(context);
        flushRafQueue();
        flushRafQueue();

        jest.advanceTimersByTime(359);
        expect(toggleBodyScroll).not.toHaveBeenCalled();

        jest.advanceTimersByTime(1);
        expect(toggleBodyScroll).toHaveBeenCalledWith(true);
    });

    test('restores detached cards before deferring the heavier standalone sync', () => {
        const context = createStandaloneContext();
        usedContexts.push(context);
        restoreDetachedPopUpCards.mockReturnValue(true);

        openPopup(context);

        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushRafQueue();

        expect(restoreDetachedPopUpCards).toHaveBeenCalledWith(context);
        expect(context.popUp.classList.contains('is-opening')).toBe(true);
        expect(handlePopUpCards).not.toHaveBeenCalled();

        flushRafQueue();

        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
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

        flushRafQueue();

        expect(contextB.popUp.classList.contains('is-opening')).toBe(true);
    });
});
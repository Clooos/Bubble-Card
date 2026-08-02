import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('./style.js', () => ({
    isColorCloseToWhite: jest.fn(() => false),
}));

jest.unstable_mockModule('../components/base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
}));

jest.unstable_mockModule('./icon.js', () => ({
    getIconColor: jest.fn(() => 'var(--primary-color)'),
}));

function createMockClassList(initialClasses = []) {
    const classes = new Set(initialClasses);

    return {
        add: (...names) => names.forEach((name) => classes.add(name)),
        remove: (...names) => names.forEach((name) => classes.delete(name)),
        contains: (name) => classes.has(name),
        toggle: (name, force) => {
            const shouldAdd = force === undefined ? !classes.has(name) : force;
            if (shouldAdd) {
                classes.add(name);
            } else {
                classes.delete(name);
            }
            return classes.has(name);
        },
    };
}

function createMockStyle() {
    const style = {};
    style.removeProperty = jest.fn((propertyName) => {
        delete style[propertyName];
    });
    return style;
}

function createMockElement(tagName = 'div', initialClasses = []) {
    const element = new EventTarget();

    element.tagName = tagName.toUpperCase();
    element.id = '';
    element.dataset = {};
    element.textContent = '';
    element.parentElement = null;
    element.style = createMockStyle();
    element.classList = createMockClassList(initialClasses);
    element.children = [];
    element.appendChild = jest.fn((child) => {
        element.children.push(child);
        child.parentNode = element;
        child.parentElement = element;
        return child;
    });
    element.setAttribute = jest.fn((name, value) => {
        element[name] = value;
    });

    return element;
}

function createMockDocument() {
    const elementsById = new Map();
    const documentElement = createMockElement('html');
    const head = createMockElement('head');
    const body = createMockElement('body');

    const appendAndTrackById = (parent, child) => {
        parent.children.push(child);
        child.parentNode = parent;
        if (child.id) {
            elementsById.set(child.id, child);
        }
        return child;
    };

    head.appendChild = jest.fn((child) => appendAndTrackById(head, child));
    body.appendChild = jest.fn((child) => appendAndTrackById(body, child));

    return {
        documentElement,
        head,
        body,
        createElement: jest.fn((tagName) => createMockElement(tagName)),
        getElementById: jest.fn((id) => elementsById.get(id) || null),
    };
}

function createMockWindow() {
    const listeners = new Map();

    return {
        scrollX: 12,
        scrollY: 240,
        scrollTo: jest.fn(),
        addEventListener: jest.fn((type, handler, options) => {
            if (options && typeof options === 'object') {
                void options.passive;
            }
            if (typeof handler !== 'function') {
                return;
            }
            const handlers = listeners.get(type) || [];
            handlers.push(handler);
            listeners.set(type, handlers);
        }),
        removeEventListener: jest.fn((type, handler, options) => {
            if (options && typeof options === 'object') {
                void options.passive;
            }
            const handlers = listeners.get(type) || [];
            listeners.set(type, handlers.filter((entry) => entry !== handler));
        }),
        dispatchEvent: jest.fn((event) => {
            const handlers = [...(listeners.get(event.type) || [])];
            handlers.forEach((handler) => handler(event));
            return !event.defaultPrevented;
        }),
    };
}

describe('toggleBodyScroll', () => {
    let utilsModule;

    beforeEach(async () => {
        jest.resetModules();

        global.window = createMockWindow();
        global.document = createMockDocument();

        utilsModule = await import('./utils.js');
    });

    afterEach(() => {
        delete global.window;
        delete global.document;
    });

    test('locks scroll with a transparent overlay instead of fixing the body', () => {
        utilsModule.toggleBodyScroll(true);

        const scrollLockLayer = document.getElementById('bubble-card-scroll-lock-layer');

        expect(document.body.classList.contains('bubble-body-scroll-locked')).toBe(true);
        expect(scrollLockLayer).toBeTruthy();
        expect(scrollLockLayer.classList.contains('bubble-scroll-lock-layer')).toBe(true);
        expect(scrollLockLayer.classList.contains('is-active')).toBe(true);
        expect(document.body.style.position).toBeUndefined();
        expect(document.body.style.top).toBeUndefined();
        expect(window.scrollTo).not.toHaveBeenCalled();
    });

    test('prevents touchmove and wheel scrolling on the lock layer without restoring scroll position', () => {
        utilsModule.toggleBodyScroll(true);

        const scrollLockLayer = document.getElementById('bubble-card-scroll-lock-layer');
        const touchMoveEvent = new Event('touchmove', { cancelable: true });
        const wheelEvent = new Event('wheel', { cancelable: true });

        scrollLockLayer.dispatchEvent(touchMoveEvent);
        scrollLockLayer.dispatchEvent(wheelEvent);

        expect(touchMoveEvent.defaultPrevented).toBe(true);
        expect(wheelEvent.defaultPrevented).toBe(true);

        utilsModule.toggleBodyScroll(false);

        expect(document.body.classList.contains('bubble-body-scroll-locked')).toBe(false);
        expect(scrollLockLayer.classList.contains('is-active')).toBe(false);
        expect(window.scrollTo).not.toHaveBeenCalled();
    });

    test('reuses the same lock layer across repeated locks', () => {
        utilsModule.toggleBodyScroll(true);
        utilsModule.toggleBodyScroll(true);

        const scrollLockLayers = document.body.children.filter((child) => child.id === 'bubble-card-scroll-lock-layer');

        expect(scrollLockLayers).toHaveLength(1);
    });

    test('keeps unlock no-op cheap when the body is already unlocked', () => {
        utilsModule.toggleBodyScroll(false);

        expect(document.getElementById('bubble-card-no-scroll-styles')).toBeNull();
        expect(document.getElementById('bubble-card-scroll-lock-layer')).toBeNull();
        expect(document.body.classList.contains('bubble-body-scroll-locked')).toBe(false);
    });
});

describe('timer intervals', () => {
    let utilsModule;

    function createTimerContext(entityState = 'active') {
        return {
            isConnected: true,
            _hass: {
                states: {
                    'timer.test': { state: entityState },
                },
            },
        };
    }

    beforeEach(async () => {
        jest.resetModules();
        jest.useFakeTimers();
        utilsModule = await import('./utils.js');
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('runs the update callback every second while the timer is active', () => {
        const context = createTimerContext();
        const updateCallback = jest.fn();

        utilsModule.startTimerInterval(context, 'timer.test', updateCallback);
        jest.advanceTimersByTime(3000);

        expect(updateCallback).toHaveBeenCalledTimes(3);
    });

    test('self-stops when the card left the DOM despite a frozen active snapshot', () => {
        const context = createTimerContext();
        const updateCallback = jest.fn();

        utilsModule.startTimerInterval(context, 'timer.test', updateCallback);
        jest.advanceTimersByTime(1000);
        expect(updateCallback).toHaveBeenCalledTimes(1);

        // Removing the card freezes its last hass snapshot: the timer entity
        // stays 'active' in it forever, so only the connectivity check can
        // stop the interval.
        context.isConnected = false;
        jest.advanceTimersByTime(5000);

        expect(updateCallback).toHaveBeenCalledTimes(1);
        expect(jest.getTimerCount()).toBe(0);
    });

    test('keeps running for contexts without a connectivity flag', () => {
        const context = createTimerContext();
        delete context.isConnected;
        const updateCallback = jest.fn();

        utilsModule.startTimerInterval(context, 'timer.test', updateCallback);
        jest.advanceTimersByTime(2000);

        expect(updateCallback).toHaveBeenCalledTimes(2);
    });

    test('stopTimerInterval with the element as key clears the interval', () => {
        const context = createTimerContext();
        const updateCallback = jest.fn();

        utilsModule.startTimerInterval(context, 'timer.test', updateCallback);
        utilsModule.stopTimerInterval(context);
        jest.advanceTimersByTime(3000);

        expect(updateCallback).not.toHaveBeenCalled();
        expect(jest.getTimerCount()).toBe(0);
    });

    test('stops itself once the timer entity is no longer active', () => {
        const context = createTimerContext();
        const updateCallback = jest.fn();

        utilsModule.startTimerInterval(context, 'timer.test', updateCallback);
        jest.advanceTimersByTime(1000);

        context._hass.states['timer.test'].state = 'idle';
        jest.advanceTimersByTime(3000);

        expect(updateCallback).toHaveBeenCalledTimes(1);
        expect(jest.getTimerCount()).toBe(0);
    });
});
// Contract test for the Home Assistant view-type probe. It exists so a HA
// release that restructures hui-root fails here instead of silently switching
// every masonry dashboard to the large layout.
describe('view type probe contract', () => {
    let utilsModule;

    function buildHuiRoot(viewMarkup) {
        // Minimal stand-in for the hui-root shadow root: only querySelector is
        // exercised by the probe.
        return {
            isConnected: true,
            shadowRoot: {
                querySelector: (selector) => {
                    if (selector === 'hui-masonry-view') return viewMarkup.masonry ? {} : null;
                    if (selector.startsWith('#view')) return viewMarkup.anyView ? {} : null;
                    return null;
                },
            },
        };
    }

    function mountDashboard(viewMarkup) {
        const huiRoot = buildHuiRoot(viewMarkup);
        const panel = { shadowRoot: { querySelector: () => huiRoot } };
        const main = { shadowRoot: { querySelector: () => panel } };
        const ha = { shadowRoot: { querySelector: () => main } };
        global.document = {
            querySelector: (selector) => (selector === 'body > home-assistant' ? ha : null),
        };
    }

    function createCardContext() {
        const classes = new Set();
        return {
            config: {},
            content: {
                classList: {
                    toggle: (name, force) => {
                        if (force) classes.add(name); else classes.delete(name);
                        return classes.has(name);
                    },
                    contains: (name) => classes.has(name),
                    add: (name) => classes.add(name),
                    remove: (name) => classes.delete(name),
                },
                querySelector: () => null,
            },
            elements: {},
        };
    }

    beforeEach(async () => {
        jest.resetModules();
        global.window = { isSectionView: undefined };
        utilsModule = await import('./utils.js');
    });

    afterEach(() => {
        delete global.window;
        delete global.document;
    });

    test('reports masonry dashboards as not section view', () => {
        mountDashboard({ masonry: true, anyView: true });
        utilsModule.setLayout(createCardContext());
        expect(window.isSectionView).toBe(false);
    });

    test('reports every non-masonry rendered view as section view', () => {
        // Sections, panel, sidebar and custom views all take the large
        // default: only masonry takes the normal one.
        mountDashboard({ masonry: false, anyView: true });
        utilsModule.setLayout(createCardContext());
        expect(window.isSectionView).toBe(true);
    });

    test('keeps the last known answer when no view element is recognisable', () => {
        mountDashboard({ masonry: true, anyView: true });
        utilsModule.setLayout(createCardContext());
        expect(window.isSectionView).toBe(false);

        // A HA release restructures hui-root so nothing is recognisable:
        // asserting "section view" here would silently switch every masonry
        // dashboard to the large layout.
        mountDashboard({ masonry: false, anyView: false });
        utilsModule.setLayout(createCardContext());
        expect(window.isSectionView).toBe(false);
    });
});

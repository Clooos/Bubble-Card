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

// --row-size used to be written at the very end of setLayout, after the early
// return that skips a reconfirmed layout. Anything that changed the row count
// without changing the layout class was therefore never applied (#2523).
describe('row size application', () => {
    let utilsModule;

    function createStyle() {
        const properties = new Map();
        return {
            properties,
            setProperty: jest.fn((name, value) => properties.set(name, String(value))),
            getPropertyValue: jest.fn((name) => properties.get(name) ?? ''),
            removeProperty: jest.fn((name) => properties.delete(name)),
        };
    }

    function createContext(config = {}) {
        const mainContainer = { style: createStyle(), classList: createMockClassList() };
        const content = { classList: createMockClassList(), querySelector: () => null };
        return { config, content, elements: { mainContainer } };
    }

    const rowSizeOf = (context) => context.elements.mainContainer.style.getPropertyValue('--row-size');

    beforeEach(async () => {
        jest.resetModules();
        global.window = { isSectionView: true };
        utilsModule = await import('./utils.js');
    });

    afterEach(() => {
        delete global.window;
    });

    test('applies the configured rows on the first layout pass', () => {
        const context = createContext({ rows: 1.676 });
        utilsModule.setLayout(context, null, 'large');
        expect(rowSizeOf(context)).toBe('1.676');
    });

    test('refreshes the row size when only the rows change', () => {
        const context = createContext({ card_layout: 'large', rows: 3 });
        utilsModule.setLayout(context, null, 'large');
        expect(rowSizeOf(context)).toBe('3');

        // Same layout class, new row count: the early return must not swallow it.
        context.config.rows = 2;
        utilsModule.setLayout(context, null, 'large');
        expect(rowSizeOf(context)).toBe('2');
    });

    test('reads the row count from grid_options as well', () => {
        const context = createContext({ grid_options: { rows: 4 } });
        utilsModule.setLayout(context, null, 'large');
        expect(rowSizeOf(context)).toBe('4');
    });

    test('leaves the row size alone for an auto height card', () => {
        const context = createContext({ rows: 'auto' });
        utilsModule.setLayout(context, null, 'large');
        expect(rowSizeOf(context)).toBe('');
        expect(context.elements.mainContainer.style.setProperty).not.toHaveBeenCalled();
    });

    test('keeps the separator default of 0.8 rows', () => {
        const context = createContext({ card_type: 'separator' });
        utilsModule.setLayout(context, null, 'large');
        expect(rowSizeOf(context)).toBe('0.8');
    });

    test('lets a separator with explicit rows override the default', () => {
        const context = createContext({ card_type: 'separator', rows: 2 });
        utilsModule.setLayout(context, null, 'large');
        expect(rowSizeOf(context)).toBe('2');
    });

    test('skips the style write when the row size is unchanged', () => {
        const context = createContext({ card_layout: 'large', rows: 2 });
        utilsModule.setLayout(context, null, 'large');
        utilsModule.setLayout(context, null, 'large');
        utilsModule.setLayout(context, null, 'large');
        expect(context.elements.mainContainer.style.setProperty).toHaveBeenCalledTimes(1);
    });

    test('does nothing when the card has no main container yet', () => {
        const context = createContext({ rows: 2 });
        context.elements = {};
        expect(() => utilsModule.setLayout(context, null, 'large')).not.toThrow();
    });
});

describe('theme color parsing', () => {
    let utilsModule;

    beforeEach(async () => {
        jest.resetModules();
        utilsModule = await import('./utils.js');
    });

    test('reads the shorthand hex Home Assistant ships in its default themes', () => {
        // #111 is the dark default background and #fff the light default card:
        // leaving them unparsed is what washed the active state out (#2536).
        expect(utilsModule.hexToRgb('#111')).toEqual([17, 17, 17]);
        expect(utilsModule.hexToRgb('#fff')).toEqual([255, 255, 255]);
        expect(utilsModule.hexToRgb('#E1E1E1')).toEqual([225, 225, 225]);
    });

    test('reads the hex forms carrying an alpha channel', () => {
        expect(utilsModule.hexToRgb('#1112')).toEqual([17, 17, 17]);
        expect(utilsModule.hexToRgb('#11223380')).toEqual([17, 34, 51]);
    });

    test('rejects what is not a hex color instead of guessing', () => {
        expect(utilsModule.hexToRgb('#11')).toBeNull();
        expect(utilsModule.hexToRgb('#12345')).toBeNull();
        expect(utilsModule.hexToRgb('#zzzzzz')).toBeNull();
        expect(utilsModule.hexToRgb('rgb(1, 2, 3)')).toBeNull();
        expect(utilsModule.hexToRgb(undefined)).toBeNull();
    });

    test('reads both the comma and the space separated rgb syntax', () => {
        expect(utilsModule.rgbStringToRgb('rgb(0, 145, 255)')).toEqual([0, 145, 255]);
        expect(utilsModule.rgbStringToRgb('rgba(57, 54, 70, 1)')).toEqual([57, 54, 70]);
        expect(utilsModule.rgbStringToRgb('rgb(0 145 255 / 50%)')).toEqual([0, 145, 255]);
        expect(utilsModule.rgbStringToRgb('rgb(0.5 145.4 254.6)')).toEqual([1, 145, 255]);
    });

    test('rejects percentage channels rather than reading them as 0-255', () => {
        expect(utilsModule.rgbStringToRgb('rgb(100%, 0%, 0%)')).toBeNull();
        expect(utilsModule.rgbStringToRgb('oklch(0.5 0.1 250)')).toBeNull();
        expect(utilsModule.rgbStringToRgb(null)).toBeNull();
    });
});

// Home Assistant stamps `{ root: true }` on its first history entry and reads it
// back to decide whether a page carries the sidebar button or a back arrow. It
// only ever stamps it while `history.length === 1`, so an entry that loses the
// mark never gets it again for the rest of the session.
describe('history state carried across a navigation', () => {
    let utilsModule;
    let historyObject;

    beforeEach(async () => {
        jest.resetModules();

        historyObject = {
            state: null,
            pushState: jest.fn(function (state) { this.state = state; }),
            replaceState: jest.fn(function (state) { this.state = state; }),
        };
        global.history = historyObject;
        global.window = new EventTarget();
        global.window.history = historyObject;

        utilsModule = await import('./utils.js');
    });

    afterEach(() => {
        delete global.history;
        delete global.window;
    });

    test('a replace keeps the root mark, because it reuses the entry holding it', () => {
        historyObject.state = { root: true };

        utilsModule.navigate(null, '/lovelace/test', true);

        expect(historyObject.replaceState).toHaveBeenCalledWith({ root: true }, '', '/lovelace/test');
        expect(historyObject.state).toEqual({ root: true });
    });

    test('a push starts empty, since a pushed entry is never the root one', () => {
        historyObject.state = { root: true };

        utilsModule.navigate(null, '/lovelace/test#salon', false);

        expect(historyObject.pushState).toHaveBeenCalledWith(null, '', '/lovelace/test#salon');
        // The root entry keeps its mark underneath, only the new one is empty.
        expect(historyObject.state).toBeNull();
    });

    test('a replace over an entry we pushed ourselves stays empty', () => {
        // This is the common path: nothing to carry over, so the written value
        // is the same null as before, and the behaviour is unchanged.
        historyObject.state = null;

        utilsModule.navigate(null, '/lovelace/test', true);

        expect(historyObject.replaceState).toHaveBeenCalledWith(null, '', '/lovelace/test');
    });

    test('an entry marked with anything else is not promoted to root', () => {
        historyObject.state = { dialog: 'more-info' };

        utilsModule.navigate(null, '/lovelace/test', true);

        expect(historyObject.replaceState).toHaveBeenCalledWith(null, '', '/lovelace/test');
    });

    test('keptHistoryState reads the mark rather than copying the whole entry', () => {
        historyObject.state = { root: true, scrollPosition: 420 };

        expect(utilsModule.keptHistoryState()).toEqual({ root: true });

        historyObject.state = undefined;

        expect(utilsModule.keptHistoryState()).toBeNull();
    });
});

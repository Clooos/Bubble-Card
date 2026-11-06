import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('./style.js', () => ({
    isColorCloseToWhite: jest.fn(() => false),
}));

jest.unstable_mockModule('../components/base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
    syncMainButtonsBottomClass: jest.fn(),
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
    const priorities = {};
    style.setProperty = jest.fn((propertyName, value, priority = '') => {
        style[propertyName] = value;
        priorities[propertyName] = priority;
    });
    style.removeProperty = jest.fn((propertyName) => {
        delete style[propertyName];
        delete priorities[propertyName];
    });
    style.getPropertyValue = jest.fn((propertyName) => style[propertyName] ?? '');
    style.getPropertyPriority = jest.fn((propertyName) => priorities[propertyName] ?? '');
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
        delete global.CSS;
    });

    test('locks the document itself, not only the area around the pop-up', () => {
        // The layer catches what happens outside the pop-up, but a gesture that
        // starts inside it never reaches that layer, and overscroll-behavior
        // only holds a chain back while the element is actually scrolling.
        // WebKit then hands a short pop-up straight to the document. The class
        // now carries the rules that stop the document scrolling at all.
        utilsModule.toggleBodyScroll(true);

        const styles = document.getElementById('bubble-card-no-scroll-styles');

        expect(document.documentElement.classList.contains('bubble-body-scroll-locked')).toBe(true);
        expect(styles.textContent).toContain('html.bubble-body-scroll-locked body');
        expect(styles.textContent).toContain('overflow: hidden !important;');
        // The gutter keeps the layout still when the scrollbar goes.
        expect(styles.textContent).toContain('scrollbar-gutter: stable !important;');
    });

    test('gives the document back when the last pop-up closes', () => {
        utilsModule.toggleBodyScroll(true);
        utilsModule.toggleBodyScroll(false);

        expect(document.documentElement.classList.contains('bubble-body-scroll-locked')).toBe(false);
        expect(document.body.classList.contains('bubble-body-scroll-locked')).toBe(false);
    });

    test('keeps the place of a scrollbar that was there', () => {
        window.innerWidth = 1280;
        document.documentElement.clientWidth = 1265;

        utilsModule.toggleBodyScroll(true);

        const styles = document.getElementById('bubble-card-no-scroll-styles');

        expect(document.documentElement.classList.contains('bubble-scroll-lock-gutter')).toBe(true);
        expect(styles.textContent).toContain('html.bubble-body-scroll-locked.bubble-scroll-lock-gutter {');
        // The fallback without scrollbar-gutter pads the body by the same width,
        // and reads it there. <html> carries the theme and is left alone.
        expect(document.body.style['--bubble-scroll-lock-size']).toBe('15px');
        expect(document.documentElement.style.setProperty).not.toHaveBeenCalled();
    });

    test('leaves the size out where the engine reserves the gutter itself', async () => {
        jest.resetModules();
        global.CSS = { supports: jest.fn((property, value) => property === 'scrollbar-gutter' && value === 'stable') };
        utilsModule = await import('./utils.js');
        window.innerWidth = 1280;
        document.documentElement.clientWidth = 1265;

        utilsModule.toggleBodyScroll(true);

        // Nothing reads it there, and writing an inherited property restyled
        // the whole page on every open and every close. The gutter itself is
        // the one thing written on <html>, and it is not inherited.
        expect(document.documentElement.classList.contains('bubble-scroll-lock-gutter')).toBe(true);
        expect(document.body.style.setProperty).not.toHaveBeenCalled();
        expect(document.documentElement.style.setProperty.mock.calls).toEqual([['scrollbar-gutter', 'stable', 'important']]);
    });

    describe('next to the locks of Home Assistant', () => {
        beforeEach(async () => {
            jest.resetModules();
            global.CSS = { supports: jest.fn((property, value) => property === 'scrollbar-gutter' && value === 'stable') };
            utilsModule = await import('./utils.js');
        });

        function rootGutter() {
            const style = document.documentElement.style;
            return [style.getPropertyValue('scrollbar-gutter'), style.getPropertyPriority('scrollbar-gutter')];
        }

        // Web Awesome locks the page behind a more-info with an !important rule
        // in a cascade layer, and opened over a pop-up it measures no scrollbar
        // and clears the gutter. Only a declaration on <html> itself outranks it.
        test('holds the gutter on <html> itself, where a Home Assistant dialog cannot clear it', () => {
            window.innerWidth = 1280;
            document.documentElement.clientWidth = 1265;

            utilsModule.toggleBodyScroll(true);

            expect(rootGutter()).toEqual(['stable', 'important']);
        });

        test('gives <html> back its gutter as it was', () => {
            window.innerWidth = 1280;
            document.documentElement.clientWidth = 1265;

            utilsModule.toggleBodyScroll(true);
            utilsModule.toggleBodyScroll(false);

            expect(rootGutter()).toEqual(['', '']);
        });

        test('keeps the scrollbar a Home Assistant dialog had already hidden when the pop-up opened', () => {
            // The more-info hid it, so clientWidth no longer counts it. Web
            // Awesome kept the width it measured before.
            window.innerWidth = 1280;
            document.documentElement.clientWidth = 1280;
            document.documentElement.style.setProperty('--wa-scroll-lock-size', '15px');

            utilsModule.toggleBodyScroll(true);

            expect(document.documentElement.classList.contains('bubble-scroll-lock-gutter')).toBe(true);
            expect(rootGutter()).toEqual(['stable', 'important']);
        });

        test('still reserves nothing where that dialog found no scrollbar either (#2629)', () => {
            window.innerWidth = 1280;
            document.documentElement.clientWidth = 1280;
            document.documentElement.style.setProperty('--wa-scroll-lock-size', '0px');

            utilsModule.toggleBodyScroll(true);

            expect(document.documentElement.classList.contains('bubble-scroll-lock-gutter')).toBe(false);
            expect(rootGutter()).toEqual(['', '']);
        });

        test('keeps the gutter Home Assistant\'s popover lock reserved, and hands it back', () => {
            window.innerWidth = 1280;
            document.documentElement.clientWidth = 1280;
            document.documentElement.style.setProperty('scrollbar-gutter', 'stable');

            utilsModule.toggleBodyScroll(true);
            expect(document.documentElement.classList.contains('bubble-scroll-lock-gutter')).toBe(true);
            expect(rootGutter()).toEqual(['stable', 'important']);

            utilsModule.toggleBodyScroll(false);
            expect(rootGutter()).toEqual(['stable', '']);
        });

        test('leaves the gutter to the popover lock that removed it in the meantime', () => {
            window.innerWidth = 1280;
            document.documentElement.clientWidth = 1280;
            document.documentElement.style.setProperty('scrollbar-gutter', 'stable');
            utilsModule.toggleBodyScroll(true);

            // The popover closes first and clears what it thinks is its own.
            document.documentElement.style.removeProperty('scrollbar-gutter');
            utilsModule.toggleBodyScroll(false);

            expect(rootGutter()).toEqual(['', '']);
        });

        test('clears the copy a popover lock wrote back over its own gutter', () => {
            window.innerWidth = 1280;
            document.documentElement.clientWidth = 1265;
            utilsModule.toggleBodyScroll(true);

            // A popover inside the pop-up saved this lock's gutter as the one it
            // found, and put it back without the priority when it closed.
            document.documentElement.style.setProperty('scrollbar-gutter', 'stable');
            utilsModule.toggleBodyScroll(false);

            expect(rootGutter()).toEqual(['', '']);
        });
    });

    test('pads the body by the width a Home Assistant dialog measured, where the engine has no gutter', () => {
        window.innerWidth = 1280;
        document.documentElement.clientWidth = 1280;
        document.documentElement.style.setProperty('--wa-scroll-lock-size', '15px');
        document.documentElement.style.setProperty.mockClear();

        utilsModule.toggleBodyScroll(true);

        expect(document.body.style['--bubble-scroll-lock-size']).toBe('15px');
        expect(document.documentElement.style.setProperty).not.toHaveBeenCalled();
    });

    test('reserves nothing on a page that has no scrollbar (#2629)', () => {
        // A page too short to scroll has no scrollbar to replace, and a gutter
        // reserved anyway pushed the whole dashboard aside by its width.
        window.innerWidth = 1280;
        document.documentElement.clientWidth = 1280;

        utilsModule.toggleBodyScroll(true);

        const styles = document.getElementById('bubble-card-no-scroll-styles');

        expect(document.documentElement.classList.contains('bubble-scroll-lock-gutter')).toBe(false);
        expect(styles.textContent).not.toMatch(/html\.bubble-body-scroll-locked\s*\{[^}]*scrollbar-gutter/);
    });

    test('drops the kept gutter with the lock', () => {
        window.innerWidth = 1280;
        document.documentElement.clientWidth = 1265;

        utilsModule.toggleBodyScroll(true);
        utilsModule.toggleBodyScroll(false);

        expect(document.documentElement.classList.contains('bubble-scroll-lock-gutter')).toBe(false);
        expect(document.body.style['--bubble-scroll-lock-size']).toBeUndefined();
    });

    test('never reaches for a listener or a preventDefault on the page', () => {
        // An earlier attempt did, and the cards inside a pop-up stopped
        // scrolling with it. The lock is CSS and nothing else.
        utilsModule.toggleBodyScroll(true);

        const styles = document.getElementById('bubble-card-no-scroll-styles');

        // The overlay legitimately uses touch-action for the area outside the
        // pop-up. What must stay clean is what the page itself is given.
        const pageRules = styles.textContent.slice(0, styles.textContent.indexOf('.bubble-scroll-lock-layer'));
        expect(pageRules).not.toContain('touch-action');
        expect(pageRules).toContain('overflow: hidden !important;');
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

    // home-assistant > home-assistant-main, isolated or not like Home Assistant
    // 2026.11 and the versions before.
    function mountHomeAssistant(isolation) {
        const main = createMockElement('home-assistant-main');
        main.shadowRoot = { querySelector: () => null };
        const homeAssistant = createMockElement('home-assistant');
        homeAssistant.shadowRoot = { querySelector: (selector) => (selector === 'home-assistant-main' ? main : null) };
        document.querySelector = (selector) => (selector === 'home-assistant' ? homeAssistant : null);
        global.getComputedStyle = (element) => ({ isolation: element === main ? isolation : 'auto' });
    }

    function popUpInParent() {
        const popUp = createMockElement('div');
        const parent = createMockElement('div');
        parent.insertBefore = jest.fn((child, reference) => {
            const index = parent.children.indexOf(reference);
            parent.children.splice(index, 0, child);
            child.parentNode = parent;
            return child;
        });
        parent.appendChild(popUp);
        return { popUp, parent };
    }

    test('keeps the lock layer on the body while Home Assistant does not isolate its panel', () => {
        mountHomeAssistant('auto');
        const { popUp, parent } = popUpInParent();

        utilsModule.toggleBodyScroll(true, popUp);

        const scrollLockLayer = document.getElementById('bubble-card-scroll-lock-layer');
        expect(document.body.children).toContain(scrollLockLayer);
        expect(parent.children).toEqual([popUp]);
        delete global.getComputedStyle;
    });

    test('mounts the lock layer right before the pop-up, in its stacking context (#2689)', () => {
        mountHomeAssistant('isolate');
        const { popUp, parent } = popUpInParent();

        utilsModule.toggleBodyScroll(true, popUp);

        const scrollLockLayer = parent.children[0];
        expect(scrollLockLayer.id).toBe('bubble-card-scroll-lock-layer');
        expect(parent.children[1]).toBe(popUp);
        expect(document.body.children).not.toContain(scrollLockLayer);
        // The rules in the head do not reach into a shadow root.
        expect(scrollLockLayer.style.position).toBe('fixed');
        expect(scrollLockLayer.style.zIndex).toBe('4');
        expect(scrollLockLayer.style.display).toBe('block');
        expect(scrollLockLayer.style.pointerEvents).toBe('auto');

        utilsModule.toggleBodyScroll(false);

        expect(scrollLockLayer.style.display).toBe('none');
        expect(scrollLockLayer.style.pointerEvents).toBe('none');
        delete global.getComputedStyle;
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

// Home Assistant applies a theme by writing it inline on <html>, and Bubble Card
// reads its colors again whenever that attribute moves. This style replays every
// write to the observers watching it, the way the browser does.
function createObservedStyle(element, observers) {
    const properties = new Map();
    const notify = () => observers
        .filter(({ target, options }) => target === element && options?.attributeFilter?.includes('style'))
        .forEach(({ callback }) => callback([{ type: 'attributes', attributeName: 'style', target: element }]));

    return {
        get length() {
            return properties.size;
        },
        getPropertyValue: (name) => properties.get(name) ?? '',
        setProperty: jest.fn((name, value) => {
            // An empty value removes the declaration, which is what the browser does
            // and how a scroll lock leaves out a gutter it has no use for.
            if (value === '') {
                if (properties.delete(name)) notify();
                return;
            }
            properties.set(name, value);
            notify();
        }),
        removeProperty: jest.fn((name) => {
            if (properties.delete(name)) notify();
        }),
    };
}

// A document whose root carries a theme and replays its inline writes.
function installThemedDocument() {
    const observers = [];
    global.MutationObserver = class {
        constructor(callback) {
            this.callback = callback;
        }
        observe(target, options) {
            observers.push({ target, options, callback: this.callback });
        }
        disconnect() {}
    };
    global.window = createMockWindow();
    global.document = createMockDocument();
    document.documentElement.style = createObservedStyle(document.documentElement, observers);
    document.documentElement.style.setProperty('--primary-background-color', '#111');
    document.documentElement.style.setProperty('--primary-text-color', '#e1e1e1');
}

describe('toggleBodyScroll and the theme', () => {
    let utilsModule;

    beforeEach(async () => {
        jest.resetModules();
        installThemedDocument();

        // A page that scrolls, so there is a gutter to keep.
        window.innerWidth = 1280;
        document.documentElement.clientWidth = 1265;

        utilsModule = await import('./utils.js');
    });

    afterEach(() => {
        delete global.MutationObserver;
        delete global.window;
        delete global.document;
    });

    test('never takes a pop-up opening or closing for a theme change', () => {
        // Every theme color was read again after each of them, and every
        // sub-button measured its background once more.
        const generation = utilsModule.getStyleGeneration();

        utilsModule.toggleBodyScroll(true);
        expect(utilsModule.getStyleGeneration()).toBe(generation);

        utilsModule.toggleBodyScroll(false);
        expect(utilsModule.getStyleGeneration()).toBe(generation);
    });

    test('still notices a theme applied while a pop-up is open', () => {
        utilsModule.toggleBodyScroll(true);
        const generation = utilsModule.getStyleGeneration();

        document.documentElement.style.setProperty('--primary-background-color', '#fafafa');

        expect(utilsModule.getStyleGeneration()).toBe(generation + 1);
    });
});

// Home Assistant locks the page the same way for its own dialogs, and it writes that
// lock inline on <html>, right where the theme lives.
describe('a Home Assistant dialog and the theme', () => {
    let utilsModule;

    beforeEach(async () => {
        jest.resetModules();
        installThemedDocument();
        utilsModule = await import('./utils.js');
    });

    afterEach(() => {
        delete global.MutationObserver;
        delete global.window;
        delete global.document;
    });

    // What a dialog and a bottom sheet write, on a page whose scrollbar takes room
    // and on one whose scrollbars are drawn over it, as phones and tablets do.
    test.each([
        ['a scrollbar that takes room', 'stable', '15px'],
        ['scrollbars drawn over the page', '', '0px'],
    ])('never takes a dialog opening or closing for a theme change, with %s', (_page, gutter, size) => {
        const rootStyle = document.documentElement.style;
        const generation = utilsModule.getStyleGeneration();

        rootStyle.setProperty('--wa-scroll-lock-gutter', gutter);
        rootStyle.setProperty('--wa-scroll-lock-size', size);
        expect(utilsModule.getStyleGeneration()).toBe(generation);

        // Closing takes the size back and leaves the gutter behind for good.
        rootStyle.removeProperty('--wa-scroll-lock-size');
        expect(utilsModule.getStyleGeneration()).toBe(generation);
    });

    test('never takes a popover opening or closing for a theme change', () => {
        // Home Assistant's own lock, the one its popovers use, keeps the place of the
        // scrollbar on the root itself.
        const rootStyle = document.documentElement.style;
        const generation = utilsModule.getStyleGeneration();

        rootStyle.setProperty('scrollbar-gutter', 'stable');
        expect(utilsModule.getStyleGeneration()).toBe(generation);

        rootStyle.removeProperty('scrollbar-gutter');
        expect(utilsModule.getStyleGeneration()).toBe(generation);
    });

    test('still notices a theme applied while a dialog is open', () => {
        const rootStyle = document.documentElement.style;
        rootStyle.setProperty('--wa-scroll-lock-gutter', 'stable');
        rootStyle.setProperty('--wa-scroll-lock-size', '15px');
        const generation = utilsModule.getStyleGeneration();

        rootStyle.setProperty('--card-background-color', '#1c1c1c');

        expect(utilsModule.getStyleGeneration()).toBe(generation + 1);
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

    test('an entry marked with something of our own is not promoted to root', () => {
        historyObject.state = { somethingElse: true };

        utilsModule.navigate(null, '/lovelace/test', true);

        expect(historyObject.replaceState).toHaveBeenCalledWith(null, '', '/lovelace/test');
    });

    test("carries over the marks Home Assistant puts on a dialog's entry", () => {
        // A pop-up closing on a click strips its hash from whatever entry is
        // current, and when a dialog opened in between that entry is HA's.
        // Blanking these leaves it unable to tell that going back should close
        // the dialog, and the pop-up comes back up underneath it.
        for (const mark of [{ dialog: 'ha-more-info-dialog' }, { opensDialog: true }, { dialogData: { x: 1 } }]) {
            historyObject.replaceState.mockClear();
            historyObject.state = mark;

            utilsModule.navigate(null, '/lovelace/test', true);

            expect(historyObject.replaceState).toHaveBeenCalledWith(mark, '', '/lovelace/test');
        }
    });

    test('keeps the dialog marks even when the entry is also the root one', () => {
        const mark = { root: true, dialog: 'ha-more-info-dialog' };
        historyObject.state = mark;

        utilsModule.navigate(null, '/lovelace/test', true);

        expect(historyObject.replaceState).toHaveBeenCalledWith(mark, '', '/lovelace/test');
    });

    test('keptHistoryState reads the mark rather than copying the whole entry', () => {
        historyObject.state = { root: true, scrollPosition: 420 };

        expect(utilsModule.keptHistoryState()).toEqual({ root: true });

        historyObject.state = undefined;

        expect(utilsModule.keptHistoryState()).toBeNull();
    });
});

// formatDateTime runs once per card and per sub-button on every hass tick. On a
// dashboard carrying a few dozen relative times it was the single biggest named
// cost at idle under CPU throttling, and all of it was rebuilding a formatter
// that depends on nothing but the locale.
describe('relative time formatting', () => {
    let utilsModule;

    beforeEach(async () => {
        jest.resetModules();
        utilsModule = await import('./utils.js');
    });

    test('still reads the same as before, from seconds to days', () => {
        const ago = (seconds) => new Date(Date.now() - seconds * 1000).toISOString();

        expect(utilsModule.formatDateTime(ago(5), 'en')).toBe('6 seconds ago');
        expect(utilsModule.formatDateTime(ago(120), 'en')).toBe('2 minutes ago');
        expect(utilsModule.formatDateTime(ago(7200), 'en')).toBe('2 hours ago');
        expect(utilsModule.formatDateTime(ago(172800), 'en')).toBe('2 days ago');
        // Beyond a week the unit keeps growing, the way Home Assistant reads it.
        expect(utilsModule.formatDateTime(ago(14 * 86400), 'en')).toBe('2 weeks ago');
        expect(utilsModule.formatDateTime(ago(90 * 86400), 'en')).toBe('3 months ago');
        expect(utilsModule.formatDateTime(ago(800 * 86400), 'en')).toBe('2 years ago');
        // A moment ahead reads as such, a sunrise or a calendar event is one.
        expect(utilsModule.formatDateTime(ago(-7200), 'en')).toBe('in 2 hours');
        expect(utilsModule.formatDateTime(ago(-30), 'en')).toBe('in 31 seconds');
    });

    test('builds one formatter per locale rather than one per call', () => {
        const Real = Intl.RelativeTimeFormat;
        const spy = jest.spyOn(Intl, 'RelativeTimeFormat').mockImplementation((...args) => new Real(...args));
        const stamp = new Date(Date.now() - 120000).toISOString();

        for (let i = 0; i < 50; i++) {
            utilsModule.formatDateTime(stamp, 'en');
        }

        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockRestore();
    });

    test('keeps one formatter per locale, so a mixed page still formats correctly', () => {
        const Real = Intl.RelativeTimeFormat;
        const spy = jest.spyOn(Intl, 'RelativeTimeFormat').mockImplementation((...args) => new Real(...args));
        const stamp = new Date(Date.now() - 120000).toISOString();

        utilsModule.formatDateTime(stamp, 'en');
        utilsModule.formatDateTime(stamp, 'fr');
        utilsModule.formatDateTime(stamp, 'en');
        utilsModule.formatDateTime(stamp, 'fr');

        expect(spy).toHaveBeenCalledTimes(2);
        expect(utilsModule.formatDateTime(stamp, 'fr')).toBe('il y a 2 minutes');
        spy.mockRestore();
    });

    test('returns nothing for a missing or unparsable stamp', () => {
        expect(utilsModule.formatDateTime('', 'en')).toBe('');
        expect(utilsModule.formatDateTime(undefined, 'en')).toBe('');
        expect(utilsModule.formatDateTime('not a date', 'en')).toBe('');
    });
});

// The cache key is the complete input to the formatter, and value/unit are
// recomputed from the clock on every call, so a cached string cannot be a stale
// one. These tests exist to keep that property true: the first one is the
// anti-regression test for #2572, the rest pin the saving.
describe('relative time formatting is cached without going stale', () => {
    let utilsModule;

    beforeEach(async () => {
        jest.resetModules();
        jest.useFakeTimers();
        utilsModule = await import('./utils.js');
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('the same timestamp still reads older as the clock moves on', () => {
        const stamp = new Date(Date.now() - 120000).toISOString();

        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('2 minutes ago');

        jest.advanceTimersByTime(60000);
        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('3 minutes ago');

        jest.advanceTimersByTime(3600000);
        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('1 hour ago');

        jest.advanceTimersByTime(86400000);
        // numeric: 'auto' words the nearest day, which is existing behaviour
        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('yesterday');

        jest.advanceTimersByTime(86400000);
        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('2 days ago');
    });

    test('crosses every unit boundary correctly rather than sticking on the cached one', () => {
        const stamp = new Date(Date.now()).toISOString();

        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('1 second ago');

        // Last second before the minute branch takes over
        jest.advanceTimersByTime(59000);
        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('60 seconds ago');

        jest.advanceTimersByTime(1000);
        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('1 minute ago');

        jest.advanceTimersByTime(3540000);
        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('1 hour ago');

        jest.advanceTimersByTime(82800000);
        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('yesterday');
    });

    test('formats once per distinct value, not once per call', () => {
        const Real = Intl.RelativeTimeFormat;
        let formats = 0;
        jest.spyOn(Intl, 'RelativeTimeFormat').mockImplementation((...args) => {
            const inst = new Real(...args);
            const original = inst.format.bind(inst);
            inst.format = (...f) => { formats++; return original(...f); };
            return inst;
        });

        // A hundred cards all showing an age of two minutes, as a dashboard does
        // on every hass tick.
        const stamps = Array.from({ length: 100 }, (_, i) => new Date(Date.now() - 120000 - i).toISOString());
        stamps.forEach((s) => utilsModule.formatDateTime(s, 'en'));

        expect(formats).toBe(1);
        jest.restoreAllMocks();
    });

    test('does not let one locale answer for another', () => {
        const stamp = new Date(Date.now() - 120000).toISOString();

        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('2 minutes ago');
        expect(utilsModule.formatDateTime(stamp, 'fr')).toBe('il y a 2 minutes');
        expect(utilsModule.formatDateTime(stamp, 'en')).toBe('2 minutes ago');
    });

    test('does not let one unit answer for another at the same value', () => {
        const twoMinutes = new Date(Date.now() - 120000).toISOString();
        const twoHours = new Date(Date.now() - 7200000).toISOString();
        const twoDays = new Date(Date.now() - 172800000).toISOString();

        expect(utilsModule.formatDateTime(twoMinutes, 'en')).toBe('2 minutes ago');
        expect(utilsModule.formatDateTime(twoHours, 'en')).toBe('2 hours ago');
        expect(utilsModule.formatDateTime(twoDays, 'en')).toBe('2 days ago');
    });
});

describe('isStateOn', () => {
    let utilsModule;

    beforeEach(async () => {
        jest.resetModules();
        utilsModule = await import('./utils.js');
    });

    function contextFor(entity, state) {
        return { config: { entity }, _hass: { states: { [entity]: { state, attributes: {} } } } };
    }

    test('a water heater runs an operation rather than being on (#2060)', () => {
        // Its state is the operation itself, so anything but off is running.
        // Home Assistant reads it the same way, in stateActive.
        for (const operation of ['eco', 'electric', 'gas', 'heat_pump', 'high_demand', 'performance']) {
            expect(utilsModule.isStateOn(contextFor('water_heater.boiler', operation))).toBe(true);
        }

        for (const state of ['off', 'unknown', 'unavailable']) {
            expect(utilsModule.isStateOn(contextFor('water_heater.boiler', state))).toBe(false);
        }

        // An entity that is not in hass at all reads as off, not as running.
        expect(utilsModule.isStateOn({ config: { entity: 'water_heater.gone' }, _hass: { states: {} } })).toBe(false);
    });

    test('the states of the other domains are read as they always were', () => {
        expect(utilsModule.isStateOn(contextFor('humidifier.bedroom', 'on'))).toBe(true);
        expect(utilsModule.isStateOn(contextFor('humidifier.bedroom', 'off'))).toBe(false);
        expect(utilsModule.isStateOn(contextFor('climate.living_room', 'heat'))).toBe(true);
        expect(utilsModule.isStateOn(contextFor('climate.living_room', 'off'))).toBe(false);
        // "eco" is a mode name a select can carry too, and it says nothing there.
        expect(utilsModule.isStateOn(contextFor('select.mode', 'eco'))).toBe(false);
    });
});

describe('getName with a Home Assistant template', () => {
    let utilsModule;
    let store;

    beforeEach(async () => {
        jest.resetModules();
        utilsModule = await import('./utils.js');
        store = await import('./render-template.js');
    });

    afterEach(() => {
        store._resetTemplateStore();
    });

    function makeHass() {
        const subscriptions = [];
        const hass = {
            connection: {
                subscribeMessage: jest.fn((callback, params) => {
                    subscriptions.push({ callback, params });
                    return Promise.resolve(() => {});
                }),
            },
            states: { 'light.a': { entity_id: 'light.a', state: 'on', attributes: { friendly_name: 'Lamp' } } },
            user: { name: 'Q' },
        };
        return { hass, subscriptions };
    }

    test('a templated name shows what the template renders, never the friendly name', async () => {
        const { hass, subscriptions } = makeHass();
        const context = { _hass: hass, config: { entity: 'light.a', name: "{{ states('sensor.t') }} °C" } };

        expect(utilsModule.getName(context)).toBe('');
        expect(context._templatePending).toBe(true);
        await Promise.resolve();
        expect(subscriptions[0].params.template).toBe("{{ states('sensor.t') }} °C");

        subscriptions[0].callback({ result: '21.5 °C' });
        expect(utilsModule.getName(context)).toBe('21.5 °C');

        subscriptions[0].callback({ result: '' });
        expect(utilsModule.getName(context)).toBe('');
    });

    test('the scrolling text path gets the rendered name escaped', async () => {
        const { hass, subscriptions } = makeHass();
        const context = { _hass: hass, config: { entity: 'light.a', name: '{{ x }}' } };
        utilsModule.getName(context);
        await Promise.resolve();

        subscriptions[0].callback({ result: '<img src=x onerror=alert(1)>' });

        expect(utilsModule.getName(context, true)).toBe('&lt;img src=x onerror=alert(1)&gt;');
        expect(utilsModule.getName(context)).toBe('<img src=x onerror=alert(1)>');
    });

    test('a plain name is untouched and the friendly name still stands in for a missing one', () => {
        const { hass } = makeHass();
        expect(utilsModule.getName({ _hass: hass, config: { entity: 'light.a', name: 'Kitchen' } })).toBe('Kitchen');
        expect(utilsModule.getName({ _hass: hass, config: { entity: 'light.a' } })).toBe('Lamp');
        expect(hass.connection.subscribeMessage).not.toHaveBeenCalled();
    });
});

// Home Assistant's Vibrate setting only silences haptics in a browser, its
// companion apps vibrate on every haptic event they get (#712, #2643).
describe('haptic feedback and the Vibrate setting', () => {
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

    const setVibrate = (vibrate) => {
        global.document.querySelector = jest.fn((selector) => (
            selector === 'home-assistant' ? { hass: { vibrate } } : null
        ));
    };

    test('vibrates while the setting is on', () => {
        setVibrate(true);
        utilsModule.forwardHaptic('selection');
        const event = global.window.dispatchEvent.mock.calls[0]?.[0];
        expect(event?.type).toBe('haptic');
        expect(event?.detail).toBe('selection');
    });

    test('stays still once the setting is off', () => {
        setVibrate(false);
        utilsModule.forwardHaptic('selection');
        expect(global.window.dispatchEvent).not.toHaveBeenCalled();
    });

    test('vibrates when Home Assistant has not set it or cannot be found', () => {
        setVibrate(undefined);
        utilsModule.forwardHaptic('light');
        global.document.querySelector = jest.fn(() => null);
        utilsModule.forwardHaptic('light');
        expect(global.window.dispatchEvent).toHaveBeenCalledTimes(2);
    });
});

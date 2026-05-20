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
});
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

function createWheelEvent(deltaY, path, deltaX = 0) {
    const event = new Event('wheel', { cancelable: true });
    Object.defineProperty(event, 'deltaX', { value: deltaX });
    Object.defineProperty(event, 'deltaY', { value: deltaY });
    Object.defineProperty(event, 'composedPath', { value: () => path });
    return event;
}

function createTouchEvent(type, touches, path) {
    const event = new Event(type, { cancelable: true });
    Object.defineProperty(event, 'touches', { value: touches });
    Object.defineProperty(event, 'targetTouches', { value: touches });
    Object.defineProperty(event, 'composedPath', { value: () => path });
    return event;
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

    test('locks background interactions with a transparent overlay without changing root scroll', () => {
        utilsModule.toggleBodyScroll(true);

        const scrollLockLayer = document.getElementById('bubble-card-scroll-lock-layer');

        expect(document.body.classList.contains('bubble-body-scroll-locked')).toBe(true);
        expect(document.documentElement.classList.contains('bubble-root-scroll-locked')).toBe(false);
        expect(scrollLockLayer).toBeTruthy();
        expect(scrollLockLayer.classList.contains('bubble-scroll-lock-layer')).toBe(true);
        expect(scrollLockLayer.classList.contains('is-active')).toBe(true);
        expect(document.documentElement.style.overflow).toBeUndefined();
        expect(document.body.style.position).toBeUndefined();
        expect(document.body.style.top).toBeUndefined();
        expect(window.scrollTo).not.toHaveBeenCalled();
    });

    test('blocks background scroll without mutating scrollable ancestors or nested scrollables', () => {
        const backgroundScroller = createMockElement('div');
        const shadowHost = createMockElement('bubble-card');
        const popup = createMockElement('div');
        const nestedScroller = createMockElement('div');
        const horizontalScroller = createMockElement('div');

        backgroundScroller.scrollHeight = 900;
        backgroundScroller.clientHeight = 400;
        backgroundScroller.scrollTop = 320;
        backgroundScroller.style.overflowY = 'auto';
        backgroundScroller.style.overscrollBehavior = 'contain';
        nestedScroller.scrollHeight = 1000;
        nestedScroller.clientHeight = 250;
        nestedScroller.scrollTop = 120;
        nestedScroller.style.overflowY = 'auto';
        horizontalScroller.scrollWidth = 1000;
        horizontalScroller.clientWidth = 250;
        horizontalScroller.scrollLeft = 120;
        horizontalScroller.style.overflowX = 'auto';
        document.body.appendChild(backgroundScroller);
        backgroundScroller.appendChild(shadowHost);
        popup.appendChild(nestedScroller);
        popup.appendChild(horizontalScroller);
        popup.getRootNode = jest.fn(() => ({ host: shadowHost }));

        utilsModule.toggleBodyScroll(true, popup);

        expect(backgroundScroller.scrollTop).toBe(320);
        expect(backgroundScroller.style.overflowY).toBe('auto');
        expect(backgroundScroller.style.overscrollBehavior).toBe('contain');
        expect(backgroundScroller.style.overscrollBehaviorY).toBeUndefined();

        const outsideWheelEvent = createWheelEvent(80, [backgroundScroller, document.body, document.documentElement]);
        window.dispatchEvent(outsideWheelEvent);

        expect(outsideWheelEvent.defaultPrevented).toBe(true);

        const nestedWheelEvent = createWheelEvent(80, [nestedScroller, popup, shadowHost, backgroundScroller, document.body, document.documentElement]);
        window.dispatchEvent(nestedWheelEvent);

        expect(nestedWheelEvent.defaultPrevented).toBe(false);

    const horizontalWheelEvent = createWheelEvent(0, [horizontalScroller, popup, shadowHost, backgroundScroller, document.body, document.documentElement], 80);
    window.dispatchEvent(horizontalWheelEvent);

    expect(horizontalWheelEvent.defaultPrevented).toBe(false);

    const horizontalTouchPath = [horizontalScroller, popup, shadowHost, backgroundScroller, document.body, document.documentElement];
    window.dispatchEvent(createTouchEvent('touchstart', [{ clientX: 200, clientY: 120 }], horizontalTouchPath));
    const horizontalTouchMoveEvent = createTouchEvent('touchmove', [{ clientX: 120, clientY: 118 }], horizontalTouchPath);
    window.dispatchEvent(horizontalTouchMoveEvent);

    expect(horizontalTouchMoveEvent.defaultPrevented).toBe(false);

        nestedScroller.scrollTop = 750;
        const nestedEdgeWheelEvent = createWheelEvent(80, [nestedScroller, popup, shadowHost, backgroundScroller, document.body, document.documentElement]);
        window.dispatchEvent(nestedEdgeWheelEvent);

        expect(nestedEdgeWheelEvent.defaultPrevented).toBe(true);

    horizontalScroller.scrollLeft = 750;
    const horizontalEdgeWheelEvent = createWheelEvent(0, [horizontalScroller, popup, shadowHost, backgroundScroller, document.body, document.documentElement], 80);
    window.dispatchEvent(horizontalEdgeWheelEvent);

    expect(horizontalEdgeWheelEvent.defaultPrevented).toBe(true);

        utilsModule.toggleBodyScroll(false);

        const unlockedWheelEvent = createWheelEvent(80, [backgroundScroller, document.body, document.documentElement]);
        window.dispatchEvent(unlockedWheelEvent);

        expect(unlockedWheelEvent.defaultPrevented).toBe(false);
        expect(backgroundScroller.style.overflowY).toBe('auto');
        expect(backgroundScroller.style.overscrollBehavior).toBe('contain');
        expect(backgroundScroller.style.overscrollBehaviorY).toBeUndefined();
    });

    test('allows Home Assistant sidebar scrolling while the popup lock is active', () => {
        const popup = createMockElement('div');
        const sidebar = createMockElement('ha-sidebar');

        utilsModule.toggleBodyScroll(true, popup);

        const sidebarWheelEvent = createWheelEvent(80, [sidebar, document.body, document.documentElement]);
        window.dispatchEvent(sidebarWheelEvent);

        expect(sidebarWheelEvent.defaultPrevented).toBe(false);
    });

    test('allows external horizontal-buttons-stack scrolling without unlocking dashboard scroll', () => {
        const popup = createMockElement('div');
        const hbsCard = createMockElement('ha-card', ['horizontal-buttons-stack-card']);
        const hbsContent = createMockElement('div');

        hbsContent.scrollWidth = 1000;
        hbsContent.clientWidth = 250;
        hbsContent.scrollLeft = 120;
        hbsContent.style.overflowX = 'scroll';

        utilsModule.toggleBodyScroll(true, popup);

        const horizontalWheelEvent = createWheelEvent(0, [hbsContent, hbsCard, document.body, document.documentElement], 80);
        window.dispatchEvent(horizontalWheelEvent);

        expect(horizontalWheelEvent.defaultPrevented).toBe(false);

        hbsContent.scrollLeft = 750;
        const horizontalEdgeWheelEvent = createWheelEvent(0, [hbsContent, hbsCard, document.body, document.documentElement], 80);
        window.dispatchEvent(horizontalEdgeWheelEvent);

        expect(horizontalEdgeWheelEvent.defaultPrevented).toBe(true);

        const dashboardWheelEvent = createWheelEvent(80, [document.body, document.documentElement]);
        window.dispatchEvent(dashboardWheelEvent);

        expect(dashboardWheelEvent.defaultPrevented).toBe(true);
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

    test('does not duplicate global scroll lock listeners across repeated locks', () => {
        window.addEventListener.mockClear();
        window.removeEventListener.mockClear();

        utilsModule.toggleBodyScroll(true);
        utilsModule.toggleBodyScroll(true);

        expect(window.addEventListener.mock.calls.filter(([eventName]) => eventName === 'wheel')).toHaveLength(1);
        expect(window.addEventListener.mock.calls.filter(([eventName]) => eventName === 'touchmove')).toHaveLength(1);

        utilsModule.toggleBodyScroll(false);
        utilsModule.toggleBodyScroll(false);

        expect(window.removeEventListener.mock.calls.filter(([eventName]) => eventName === 'wheel')).toHaveLength(1);
        expect(window.removeEventListener.mock.calls.filter(([eventName]) => eventName === 'touchmove')).toHaveLength(1);
    });
});
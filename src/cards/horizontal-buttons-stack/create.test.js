import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

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

function createMockElement(tag = 'div', classNames = '') {
    return {
        tagName: tag.toUpperCase(),
        children: [],
        listeners: {},
        style: {},
        classList: createMockClassList(classNames ? classNames.split(' ') : []),
        appendChild(child) {
            this.children.push(child);
            return child;
        },
        addEventListener(type, handler) {
            if (!this.listeners[type]) {
                this.listeners[type] = [];
            }
            this.listeners[type].push(handler);
        },
    };
}

const createElement = jest.fn((tag, classNames = '') => createMockElement(tag, classNames));
const forwardHaptic = jest.fn();
const navigate = jest.fn();
const addHash = jest.fn();
const removeHash = jest.fn();

jest.unstable_mockModule('./styles.css', () => ({
    default: '',
}));

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement,
    forwardHaptic,
    navigate,
}));

jest.unstable_mockModule('../pop-up/helpers.js', () => ({
    addHash,
    removeHash,
}));

const startContentInsetSync = jest.fn();
jest.unstable_mockModule('../../tools/content-inset.js', () => ({
    startContentInsetSync,
}));

const { createButton, enableMouseDragScroll } = await import('./create.js');

function buildContext(link) {
    return {
        config: {
            '1_name': 'Kitchen',
            '1_icon': 'mdi:home',
            '1_link': link,
        },
        elements: {
            buttons: [],
            cardContainer: createMockElement('div'),
        },
    };
}

function clickButton(button) {
    for (const listener of button.listeners.click || []) {
        listener();
    }
}

describe('horizontal buttons stack navigation', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.localStorage = {
            getItem: jest.fn(() => null),
            setItem: jest.fn(),
        };
        global.location = {
            hash: '',
            pathname: '/dashboard',
        };
        global.window = {
            addEventListener: jest.fn(),
            location: global.location,
        };
    });

    test('navigates to a Lovelace path without turning it into a hash', () => {
        const context = buildContext('/lovelace/');
        const button = createButton(context, 1);

        clickButton(button);

        expect(navigate).toHaveBeenCalledWith(button, '/lovelace/');
        expect(addHash).not.toHaveBeenCalled();
        expect(removeHash).not.toHaveBeenCalled();
        expect(forwardHaptic).toHaveBeenCalledWith('light');
    });

    test('keeps popup hash links on the popup hash flow', () => {
        const context = buildContext('#kitchen');
        const button = createButton(context, 1);

        clickButton(button);

        expect(addHash).toHaveBeenCalledWith('#kitchen');
        expect(navigate).not.toHaveBeenCalled();
        expect(forwardHaptic).toHaveBeenCalledWith('light');
    });

    test('uses the current button link after a live config change', () => {
        const context = buildContext('#kitchen');
        const button = createButton(context, 1);
        button.link = '/lovelace/';

        clickButton(button);

        expect(navigate).toHaveBeenCalledWith(button, '/lovelace/');
        expect(addHash).not.toHaveBeenCalled();
    });
});

function createScroller(scrollLeft = 0) {
    const scroller = createMockElement('div', 'card-content');
    scroller.scrollLeft = scrollLeft;
    scroller.setPointerCapture = jest.fn();
    enableMouseDragScroll(scroller);
    return scroller;
}

function fire(scroller, type, props = {}) {
    const event = {
        pointerType: 'mouse',
        button: 0,
        pointerId: 1,
        clientX: 0,
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        ...props,
    };
    for (const listener of scroller.listeners[type] || []) {
        listener(event);
    }
    return event;
}

describe('horizontal buttons stack mouse drag scrolling (#2522)', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('a mouse drag scrolls the row and swallows the click that ends it', () => {
        const scroller = createScroller(100);

        fire(scroller, 'pointerdown', { clientX: 300 });
        fire(scroller, 'pointermove', { clientX: 250 });
        expect(scroller.scrollLeft).toBe(150);
        expect(scroller.classList.contains('is-dragging')).toBe(true);
        expect(scroller.setPointerCapture).toHaveBeenCalledWith(1);

        fire(scroller, 'pointerup', { clientX: 250 });
        const click = fire(scroller, 'click');

        expect(click.stopPropagation).toHaveBeenCalled();
        expect(click.preventDefault).toHaveBeenCalled();
        expect(scroller.classList.contains('is-dragging')).toBe(false);
    });

    test('a click without movement past the slop still reaches the button', () => {
        const scroller = createScroller(100);

        fire(scroller, 'pointerdown', { clientX: 300 });
        fire(scroller, 'pointermove', { clientX: 297 });
        fire(scroller, 'pointerup', { clientX: 297 });
        const click = fire(scroller, 'click');

        expect(scroller.scrollLeft).toBe(100);
        expect(click.stopPropagation).not.toHaveBeenCalled();
    });

    test('leaves touch and pen to the browser', () => {
        const scroller = createScroller(100);

        fire(scroller, 'pointerdown', { pointerType: 'touch', clientX: 300 });
        const move = fire(scroller, 'pointermove', { pointerType: 'touch', clientX: 200 });
        fire(scroller, 'pointerup', { pointerType: 'touch', clientX: 200 });
        const click = fire(scroller, 'click');

        expect(scroller.scrollLeft).toBe(100);
        expect(move.preventDefault).not.toHaveBeenCalled();
        expect(click.stopPropagation).not.toHaveBeenCalled();
    });

    test('ignores buttons other than the primary one', () => {
        const scroller = createScroller(100);

        fire(scroller, 'pointerdown', { button: 2, clientX: 300 });
        fire(scroller, 'pointermove', { button: 2, clientX: 200 });

        expect(scroller.scrollLeft).toBe(100);
    });

    test('does not eat a later click when the drag ended without one', () => {
        const scroller = createScroller(100);

        fire(scroller, 'pointerdown', { clientX: 300 });
        fire(scroller, 'pointermove', { clientX: 200 });
        fire(scroller, 'pointerup', { clientX: 200 });
        jest.runAllTimers();
        const click = fire(scroller, 'click');

        expect(click.stopPropagation).not.toHaveBeenCalled();
    });

    test('moves with the pointer in RTL, where scrollLeft is negative', () => {
        const scroller = createScroller(-100);

        fire(scroller, 'pointerdown', { clientX: 300 });
        fire(scroller, 'pointermove', { clientX: 350 });

        expect(scroller.scrollLeft).toBe(-150);
    });
});

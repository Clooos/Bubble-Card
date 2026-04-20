import { describe, expect, jest, test } from '@jest/globals';

function createMockClassList(initialClasses = []) {
    const classes = new Set(initialClasses);

    return {
        add: (...names) => names.forEach((name) => classes.add(name)),
        remove: (...names) => names.forEach((name) => classes.delete(name)),
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
    };
}

function createStyleStore() {
    const values = new Map();

    return {
        setProperty(name, value) {
            values.set(name, value);
        },
        removeProperty(name) {
            values.delete(name);
        },
        getPropertyValue(name) {
            return values.get(name) || '';
        },
    };
}

function createMockElement(tagName = 'div', className = '') {
    const element = new EventTarget();
    const classes = className.split(/\s+/).filter(Boolean);

    element.tagName = tagName.toUpperCase();
    element.children = [];
    element.parentNode = null;
    element.dataset = {};
    element.style = createStyleStore();
    element.classList = createMockClassList(classes);
    element.getBoundingClientRect = jest.fn(() => ({ width: 0, height: 0 }));
    element.appendChild = jest.fn((child) => {
        element.children.push(child);
        child.parentNode = element;
        return child;
    });
    element.attachShadow = jest.fn(() => {
        const shadowRoot = {
            children: [],
            appendChild: jest.fn((child) => {
                shadowRoot.children.push(child);
                child.parentNode = shadowRoot;
                return child;
            }),
        };
        element.shadowRoot = shadowRoot;
        return shadowRoot;
    });

    return element;
}

const body = createMockElement('body');
body.style = createStyleStore();

const mockWindow = new EventTarget();
Object.assign(mockWindow, {
    matchMedia: jest.fn(() => ({
        addEventListener: jest.fn(),
    })),
    requestIdleCallback: undefined,
});

global.window = mockWindow;
global.document = { body };
global.requestAnimationFrame = jest.fn((callback) => {
    callback();
    return 1;
});

const createElement = jest.fn((tagName = 'div', className = '') => createMockElement(tagName, className));
const getCachedBodyStyles = jest.fn(() => ({
    getPropertyValue: (name) => {
        if (name === '--ha-card-background') {
            return '#111111';
        }
        if (name === '--card-background-color') {
            return '#222222';
        }
        return '';
    },
}));

jest.unstable_mockModule('../../tools/style.js', () => ({
    convertToRGBA: jest.fn((color) => `rgba(${color})`),
}));

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement,
    getCachedBodyStyles,
}));

jest.unstable_mockModule('../../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));

jest.unstable_mockModule('./backdrop.css', () => ({
    default: '',
}));

const { getBackdrop } = await import('./backdrop.js');
const { handleCustomStyles } = await import('../../tools/style-processor.js');

describe('backdrop transitions', () => {
    test('keeps the blur-enabled opening and closing states distinct without dropping blur mid-close', () => {
        jest.useFakeTimers();

        const context = {
            config: {
                backdrop_blur: 12,
            },
        };

        const { showBackdrop, hideBackdrop, backdropElement } = getBackdrop(context);

        showBackdrop(context);

        expect(backdropElement.getBoundingClientRect).toHaveBeenCalledTimes(1);
        expect(backdropElement.style.getPropertyValue('--custom-backdrop-filter')).toBe('blur(12px)');
        expect(backdropElement.classList.contains('is-opening')).toBe(true);
        expect(backdropElement.classList.contains('is-closing')).toBe(false);
        expect(backdropElement.classList.contains('is-transitioning')).toBe(true);

        hideBackdrop();

        expect(backdropElement.classList.contains('is-opening')).toBe(false);
        expect(backdropElement.classList.contains('is-closing')).toBe(true);
    expect(backdropElement.style.getPropertyValue('--custom-backdrop-filter')).toBe('blur(12px)');
        expect(backdropElement.classList.contains('is-transitioning')).toBe(true);

        jest.advanceTimersByTime(300);

        expect(backdropElement.classList.contains('is-opening')).toBe(false);
        expect(backdropElement.classList.contains('is-closing')).toBe(false);
        expect(backdropElement.classList.contains('is-transitioning')).toBe(false);

        jest.runOnlyPendingTimers();

        jest.useRealTimers();
    });

    test('does not let passive backdrop access steal the active popup styles', () => {
        jest.useFakeTimers();

        const contextA = {
            config: {
                hash: '#popup-a',
            },
        };
        const contextB = {
            config: {
                hash: '#popup-b',
            },
        };

        const sharedBackdrop = getBackdrop(contextA);
        sharedBackdrop.showBackdrop(contextA);
        handleCustomStyles.mockClear();

        getBackdrop(contextB);
        sharedBackdrop.updateBackdropStyles();

        jest.advanceTimersByTime(350);

        expect(handleCustomStyles).toHaveBeenCalledTimes(1);
        expect(handleCustomStyles).toHaveBeenLastCalledWith(contextA, sharedBackdrop.backdropCustomStyle);

        jest.runOnlyPendingTimers();

        jest.useRealTimers();
    });

    test('applies the active popup backdrop styles before the first visible open frame', () => {
        jest.useFakeTimers();

        const rafCallbacks = [];
        global.requestAnimationFrame = jest.fn((callback) => {
            rafCallbacks.push(callback);
            return rafCallbacks.length;
        });

        const contextA = {
            config: {
                hash: '#popup-a',
            },
        };
        const contextB = {
            config: {
                hash: '#popup-b',
            },
        };

        const sharedBackdrop = getBackdrop(contextA);
        handleCustomStyles.mockClear();

        sharedBackdrop.showBackdrop(contextB);

        expect(handleCustomStyles).toHaveBeenCalledTimes(1);
        expect(handleCustomStyles).toHaveBeenLastCalledWith(contextB, sharedBackdrop.backdropCustomStyle);
        expect(rafCallbacks).toHaveLength(0);

        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });
});
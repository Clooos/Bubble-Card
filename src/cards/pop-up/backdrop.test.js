import { describe, expect, jest, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

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

const mountPopUpOverlay = jest.fn();

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement,
    getCachedBodyStyles,
    mountPopUpOverlay,
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

        expect(backdropElement.getBoundingClientRect).not.toHaveBeenCalled();
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

    test('mounts the backdrop next to the pop-up it opens for', () => {
        const popUp = createElement('div', 'bubble-pop-up');
        const context = { config: {}, popUp };

        getBackdrop(context).showBackdrop(context);

        expect(mountPopUpOverlay).toHaveBeenLastCalledWith(expect.anything(), popUp);
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

    test('defers active popup backdrop styles on the first visible open frame', () => {
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
        sharedBackdrop.hideBackdrop();
        jest.advanceTimersByTime(300);
        handleCustomStyles.mockClear();

        sharedBackdrop.showBackdrop(contextB);

        expect(handleCustomStyles).not.toHaveBeenCalled();
        expect(rafCallbacks).toHaveLength(1);

        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    test('does not restart the backdrop opening transition during a visible popup handoff', () => {
        jest.useFakeTimers();
        global.requestAnimationFrame = jest.fn((callback) => {
            callback();
            return 1;
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
        const { backdropElement } = sharedBackdrop;

        sharedBackdrop.hideBackdrop();
        jest.advanceTimersByTime(300);
        backdropElement.getBoundingClientRect.mockClear();
        handleCustomStyles.mockClear();

        sharedBackdrop.showBackdrop(contextA);

        expect(backdropElement.classList.contains('is-opening')).toBe(true);
        expect(backdropElement.classList.contains('is-transitioning')).toBe(true);
        expect(backdropElement.getBoundingClientRect).not.toHaveBeenCalled();

        sharedBackdrop.showBackdrop(contextB);

        expect(handleCustomStyles).toHaveBeenLastCalledWith(contextB, sharedBackdrop.backdropCustomStyle);
        expect(backdropElement.classList.contains('is-visible')).toBe(true);
        expect(backdropElement.classList.contains('is-opening')).toBe(false);
        expect(backdropElement.classList.contains('is-transitioning')).toBe(false);
        expect(backdropElement.getBoundingClientRect).not.toHaveBeenCalled();

        jest.advanceTimersByTime(300);

        expect(backdropElement.classList.contains('is-transitioning')).toBe(false);

        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    test('reopens a backdrop taken out of rendering without a layout read', () => {
        jest.useFakeTimers();
        global.requestAnimationFrame = jest.fn((callback) => {
            callback();
            return 1;
        });

        const context = {
            config: {
                hash: '#popup-a',
            },
        };

        const sharedBackdrop = getBackdrop(context);
        const { backdropElement } = sharedBackdrop;
        const host = body.children[0];

        expect(host.shadowRoot.children[0]).toBe(backdropElement);

        sharedBackdrop.showBackdrop(context);
        sharedBackdrop.hideBackdrop();

        // The host stays rendered for the length of the fade out.
        jest.advanceTimersByTime(299);
        expect(host.style.display).toBe('');

        jest.advanceTimersByTime(1);
        expect(host.style.display).toBe('none');

        host.getBoundingClientRect.mockClear();
        backdropElement.getBoundingClientRect.mockClear();

        sharedBackdrop.showBackdrop(context);

        // Rendered again and visible in one task, so the first style the engine
        // computes is the visible one and the starting style of backdrop.css
        // is what the fade starts from.
        expect(host.style.display).toBe('');
        expect(backdropElement.classList.contains('is-visible')).toBe(true);
        expect(backdropElement.classList.contains('is-hidden')).toBe(false);
        expect(host.getBoundingClientRect).not.toHaveBeenCalled();
        expect(backdropElement.getBoundingClientRect).not.toHaveBeenCalled();

        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });
});

describe('backdrop styles', () => {
    const styles = readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'backdrop.css'), 'utf8');

    test('gives a backdrop that comes back into rendering a transparent style to fade from', () => {
        const baseRule = styles.match(/^\.bubble-backdrop\s*\{([^}]*)\}/m)?.[1] ?? '';
        const visibleRule = styles.search(/^\.bubble-backdrop\.is-visible\s*\{\s*opacity:\s*1;\s*\}/m);
        const startingRule = styles.search(/^@starting-style\s*\{\s*\.bubble-backdrop\.is-visible\s*\{\s*opacity:\s*0;\s*\}\s*\}/m);

        expect(baseRule).toContain('transition: opacity 0.3s;');
        expect(visibleRule).toBeGreaterThan(-1);
        // Same specificity as the visible rule, so it only wins when it comes after.
        expect(startingRule).toBeGreaterThan(visibleRule);
    });
});

import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('./styles.css', () => ({ default: '' }));

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement: jest.fn((tag, className = '') => new StubElement(className)),
    isEntityType: jest.fn(() => false),
    isStateOn: jest.fn(() => true),
    forwardHaptic: jest.fn(),
    throttle: jest.fn((fn) => fn),
}));

jest.unstable_mockModule('./changes.js', () => ({
    onSliderChange: jest.fn(() => 42),
    updateEntity: jest.fn(),
}));

jest.unstable_mockModule('./drag-click.js', () => ({
    createDragClickSwallow: jest.fn(() => ({ arm: jest.fn(), scheduleRelease: jest.fn() })),
}));

jest.unstable_mockModule('./helpers.js', () => ({
    getEntityMinValue: jest.fn(() => 0),
    getEntityMaxValue: jest.fn(() => 100),
    getEntityStep: jest.fn(() => 1),
    getCurrentPercentage: jest.fn(() => 40),
    clampPercentage: jest.fn((value) => value),
    formatDisplayValue: jest.fn((context, percentage) => `${percentage}%`),
    formatDisplayValueFromEntity: jest.fn(() => '40%'),
    toVisualPercentage: jest.fn((context, percentage) => percentage),
    getFillOrientation: jest.fn(() => 'left'),
    getSliderValuePosition: jest.fn(() => 'right'),
    setRangeFillTransform: jest.fn(),
    keepSliderWriteInstant: jest.fn(),
    isDocumentRTL: jest.fn(() => false),
    SLIDER_VALUE_POSITIONS: ['left', 'right', 'center', 'hidden'],
}));

class StubElement {
    constructor(classNames = '') {
        this.listeners = new Map();
        this.children = [];
        this.textContent = '';
        this.style = { setProperty: () => {}, removeProperty: () => {}, getPropertyValue: () => '' };
        const classes = new Set(classNames.split(' ').filter(Boolean));
        this.classList = {
            add: (...names) => names.forEach((name) => classes.add(name)),
            remove: (...names) => names.forEach((name) => classes.delete(name)),
            contains: (name) => classes.has(name),
        };
    }

    addEventListener(type, handler) {
        if (!this.listeners.has(type)) this.listeners.set(type, []);
        this.listeners.get(type).push(handler);
    }

    removeEventListener(type, handler) {
        const handlers = this.listeners.get(type) ?? [];
        const index = handlers.indexOf(handler);
        if (index >= 0) handlers.splice(index, 1);
    }

    dispatch(type, event) {
        [...(this.listeners.get(type) ?? [])].forEach((handler) => handler(event));
    }

    appendChild(child) { this.children.push(child); return child; }
    insertBefore(child) { this.children.push(child); return child; }
    contains() { return false; }
    setPointerCapture() {}
    releasePointerCapture() {}
    hasPointerCapture() { return false; }
    getBoundingClientRect() { return { top: 0, left: 0, width: 200, height: 40, right: 200, bottom: 40 }; }
}

function pointerEvent(overrides = {}) {
    return {
        pointerId: 1,
        clientX: 100,
        clientY: 20,
        pageX: 100,
        pageY: 20,
        target: { closest: () => null },
        composedPath: () => [],
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        stopImmediatePropagation: jest.fn(),
        ...overrides,
    };
}

async function buildSlider({ tapToSlide }) {
    const { createSliderStructure } = await import('./create.js');
    const targetElement = new StubElement('bubble-button-card-container');
    const context = {
        _hass: { states: { 'light.a': { entity_id: 'light.a', state: 'on', attributes: {} } } },
        config: { entity: 'light.a', tap_to_slide: tapToSlide },
        card: new StubElement('bubble-card'),
        elements: { mainContainer: targetElement, cardWrapper: null },
    };

    createSliderStructure(context, { targetElement, insertBefore: null, holdToSlide: true });
    return { context, targetElement };
}

describe('the number a slider shows while it is being dragged', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        global.window = new StubElement();
        global.document = new StubElement();
    });

    afterEach(() => {
        jest.useRealTimers();
        delete global.window;
        delete global.document;
    });

    // #2543: tap to slide had no equivalent of the hold that shows the value, so
    // the gesture whose whole point is the number it lands on never showed one.
    test('tap to slide shows it from the moment the gesture starts', async () => {
        const { context, targetElement } = await buildSlider({ tapToSlide: true });

        expect(context.elements.rangeValue.classList.contains('is-visible')).toBe(false);

        targetElement.dispatch('pointerdown', pointerEvent());

        expect(context.elements.rangeValue.classList.contains('is-visible')).toBe(true);
        expect(context.elements.rangeValue.textContent).toBe('40%');
    });

    test('hold to slide still shows it once the hold is recognised', async () => {
        const { context, targetElement } = await buildSlider({ tapToSlide: false });

        targetElement.dispatch('pointerdown', pointerEvent());
        expect(context.elements.rangeValue.classList.contains('is-visible')).toBe(false);

        jest.advanceTimersByTime(200);

        expect(context.elements.rangeValue.classList.contains('is-visible')).toBe(true);
    });

    // It belongs to the gesture, so releasing has to take it away again whichever
    // gesture put it there.
    test('releasing takes it away again, for either gesture', async () => {
        for (const tapToSlide of [true, false]) {
            const { context, targetElement } = await buildSlider({ tapToSlide });

            targetElement.dispatch('pointerdown', pointerEvent());
            if (!tapToSlide) jest.advanceTimersByTime(200);
            expect(context.elements.rangeValue.classList.contains('is-visible')).toBe(true);

            global.window.dispatch('pointerup', pointerEvent());

            expect(context.elements.rangeValue.classList.contains('is-visible')).toBe(false);
        }
    });
});

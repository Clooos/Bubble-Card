import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('../../../../tools/render-template.js', () => ({ resolveTemplate: jest.fn() }));
jest.unstable_mockModule('../../../../tools/jinja.js', () => ({ isTemplate: () => false }));
jest.unstable_mockModule('../../../../tools/utils.js', () => ({ createElement: jest.fn(), isEntityType: jest.fn() }));
jest.unstable_mockModule('../../create.js', () => ({ normalizeNameToClass: () => null }));
jest.unstable_mockModule('../../../slider/index.js', () => ({ createSliderStructure: jest.fn() }));
jest.unstable_mockModule('../../../slider/changes.js', () => ({ updateSlider: jest.fn() }));
jest.unstable_mockModule('../../../../tools/icon.js', () => ({ updateIconClasses: jest.fn() }));
jest.unstable_mockModule('../../utils.js', () => ({
    updateBackground: jest.fn(), setupActions: jest.fn(), buildDisplayedState: jest.fn(),
    updateElementVisibility: jest.fn(), applySubButtonScrollingEffect: jest.fn(),
}));

const { ensureSliderForSubButton } = await import('./index.js');

class Element {
    constructor() {
        this.listeners = new Map();
        this.dataset = {};
        this.style = { removeProperty: jest.fn() };
        const classes = new Set();
        this.classList = {
            add: (...names) => names.forEach(name => classes.add(name)),
            remove: (...names) => names.forEach(name => classes.delete(name)),
            contains: name => classes.has(name),
            toggle: (name, enabled) => enabled ? classes.add(name) : classes.delete(name),
        };
    }
    setAttribute() {}
    appendChild(child) { child.parentNode = this; }
    addEventListener(type, handler) {
        if (!this.listeners.has(type)) this.listeners.set(type, []);
        this.listeners.get(type).push(handler);
    }
    removeEventListener(type, handler) {
        this.listeners.set(type, (this.listeners.get(type) || []).filter(fn => fn !== handler));
    }
    dispatch(event) {
        for (const handler of this.listeners.get(event.type) || []) handler(event);
        if (!event.stopped) this.parentNode?.dispatch(event);
    }
}

function event(type, pointerType) {
    return {
        type, pointerType, stopped: false,
        stopPropagation: jest.fn(function () { this.stopped = true; }),
        stopImmediatePropagation: jest.fn(function () { this.stopped = true; }),
        preventDefault: jest.fn(),
    };
}

function fixture() {
    const parent = new Element();
    const button = new Element();
    button.sliderWrapper = new Element();
    button.sliderContainer = new Element();
    button.sliderCloseBtn = new Element();
    button.sliderWrapper.appendChild(button.sliderCloseBtn);
    button.sliderContext = {};
    const context = { config: {}, elements: { mainContainer: parent } };
    const options = { entity: 'input_number.test', subButton: {} };
    ensureSliderForSubButton(context, button, options);
    button.sliderOpen = true;
    const parentPointerDown = jest.fn();
    parent.addEventListener('pointerdown', parentPointerDown);
    return { button, context, options, parentPointerDown };
}

describe('sub-slider close button', () => {
    beforeEach(() => { global.document = { addEventListener: jest.fn(), removeEventListener: jest.fn() }; });
    afterEach(() => { delete global.document; });

    test.each(['mouse', 'pen', 'touch'])('%s press cannot start the parent slider', pointerType => {
        const { button, parentPointerDown } = fixture();
        const down = event('pointerdown', pointerType);
        button.sliderCloseBtn.dispatch(down);

        expect(parentPointerDown).not.toHaveBeenCalled();
        expect(down.preventDefault).not.toHaveBeenCalled();
        expect(button.sliderOpen).toBe(true);

        button.sliderCloseBtn.dispatch(event('click', pointerType));
        expect(button.sliderOpen).toBe(false);
        expect(button.sliderWrapper.classList.contains('is-hidden')).toBe(true);
    });

    test('touch still closes on release', () => {
        const { button } = fixture();
        const start = event('touchstart');
        button.sliderCloseBtn.dispatch(start);
        expect(start.preventDefault).toHaveBeenCalled();
        expect(start.stopped).toBe(true);
        button.sliderCloseBtn.dispatch(event('touchend'));
        expect(button.sliderOpen).toBe(false);
    });

    test('updating a sub-slider does not stack close-button handlers', () => {
        const { button, context, options } = fixture();
        ensureSliderForSubButton(context, button, options);
        const down = event('pointerdown', 'mouse');
        button.sliderCloseBtn.dispatch(down);
        expect(down.stopPropagation).toHaveBeenCalledTimes(1);
        const click = event('click', 'mouse');
        button.sliderCloseBtn.dispatch(click);
        expect(click.preventDefault).toHaveBeenCalledTimes(1);
        expect(button.sliderOpen).toBe(false);
    });
});

import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

// updateSlider decides one thing, whether the fill has to move, so the fakes
// only have to answer where the fill is and what the entity carries.

// Says which way a fill has to step, null when it has nothing to step away from.
const getSurfaceStep = jest.fn(() => null);
const isStateOn = jest.fn(() => true);

jest.unstable_mockModule('../../tools/utils.js', () => ({
    isStateOn,
    getStateSurfaceColor: jest.fn(() => 'rgb(1, 2, 3)'),
    getSurfaceStep,
}));

jest.unstable_mockModule('../../tools/icon.js', () => ({
    getLightColorSignature: jest.fn(() => 'signature'),
}));

const setRangeFillTransform = jest.fn((context, percentage) => {
    context._lastVisualFillPercentage = percentage;
});

// Every write is instant unless a test asks for the ramp.
const isInstantSliderWrite = jest.fn(() => true);

// An input_number from -10 to 10, so 0 sits at the middle of the rail.
const percentageOf = (context, entity) => ((Number(context._hass.states[entity].state) + 10) / 20) * 100;

jest.unstable_mockModule('./helpers.js', () => ({
    getEntityMinValue: jest.fn(() => -10),
    getEntityMaxValue: jest.fn(() => 10),
    getEntityStep: jest.fn(() => 1),
    getAdjustedValue: jest.fn((value) => value),
    clampPercentage: jest.fn((value) => value),
    fromPercentageToValue: jest.fn(() => 0),
    getCurrentPercentage: jest.fn(percentageOf),
    formatDisplayValue: jest.fn(() => ''),
    formatDisplayValueFromEntity: jest.fn(() => ''),
    toVisualPercentage: jest.fn((context, percentage) => percentage),
    toActualPercentage: jest.fn((context, percentage) => percentage),
    getFillOrientation: jest.fn(() => 'left'),
    setRangeFillTransform,
    isInstantSliderWrite,
}));

const { updateSlider } = await import('./changes.js');

function createFill() {
    const classes = new Set();
    return {
        classList: {
            add: (...names) => names.forEach((name) => classes.add(name)),
            remove: (...names) => names.forEach((name) => classes.delete(name)),
            contains: (name) => classes.has(name),
            toggle: (name, force) => (force ? classes.add(name) : classes.delete(name)),
        },
        style: { transform: '', setProperty: () => {}, removeProperty: () => {} },
    };
}

const state = (value) => ({ state: String(value), attributes: {} });

function createContext(value = 0) {
    const stateObj = state(value);
    return {
        config: { entity: 'input_number.test' },
        _hass: { states: { 'input_number.test': stateObj } },
        elements: { rangeFill: createFill() },
    };
}

beforeEach(() => {
    jest.clearAllMocks();
});

describe('what moves the fill of a slider', () => {
    test('draws it on the first pass', () => {
        const context = createContext(0);
        updateSlider(context);
        expect(setRangeFillTransform).toHaveBeenCalledWith(context, 50);
    });

    // The entity of #2493 is reset to 0 by an automation right after the slide,
    // so it comes back to the value it carried before it. Comparing values read
    // that as nothing to do and the fill stayed under the finger for good.
    test('pulls it back when the entity returns to the value it had before the slide', () => {
        const context = createContext(0);
        updateSlider(context);
        setRangeFillTransform.mockClear();

        // The slide left the fill at 75%, and the entity answers with 0 again.
        context._lastVisualFillPercentage = 75;
        context._hass = { states: { 'input_number.test': state(0) } };
        updateSlider(context);

        expect(setRangeFillTransform).toHaveBeenCalledWith(context, 50);
    });

    test('leaves it under the finger while the state has not moved', () => {
        const context = createContext(0);
        updateSlider(context);
        setRangeFillTransform.mockClear();

        // Same state object, so Home Assistant has not answered yet.
        context._lastVisualFillPercentage = 75;
        updateSlider(context);

        expect(setRangeFillTransform).not.toHaveBeenCalled();
    });

    test('writes nothing when the fill already shows what the entity carries', () => {
        const context = createContext(0);
        updateSlider(context);
        setRangeFillTransform.mockClear();

        // A new state object of the same value, as an attribute change makes one.
        context._hass = { states: { 'input_number.test': state(0) } };
        updateSlider(context);

        expect(setRangeFillTransform).not.toHaveBeenCalled();
    });

    test('follows the entity when it really changed', () => {
        const context = createContext(0);
        updateSlider(context);
        setRangeFillTransform.mockClear();

        context._hass = { states: { 'input_number.test': state(10) } };
        updateSlider(context);

        expect(setRangeFillTransform).toHaveBeenCalledWith(context, 100);
    });

    test('touches nothing while the finger is still down', () => {
        const context = createContext(0);
        context.dragging = true;
        updateSlider(context);
        expect(setRangeFillTransform).not.toHaveBeenCalled();
    });
});

// A light group going off reports a member first (the group a little dimmer),
// then the group off a few tens of ms later. The small step starts a ramp, and
// the ramp kept running under the fill the second report had just emptied.
describe('a state that arrives while the fill is still ramping', () => {
    let frames;
    let now;

    const runFrames = (ms) => {
        const end = now + ms;
        while (now < end) {
            now += 16;
            const due = [...frames.values()];
            frames.clear();
            due.forEach((callback) => callback(now));
        }
    };

    beforeEach(() => {
        frames = new Map();
        now = 1000;
        let id = 0;
        global.requestAnimationFrame = (callback) => { frames.set(++id, callback); return id; };
        global.cancelAnimationFrame = (handle) => { frames.delete(handle); };
        jest.spyOn(performance, 'now').mockImplementation(() => now);
        isInstantSliderWrite.mockImplementation(() => false);
    });

    afterEach(() => {
        delete global.requestAnimationFrame;
        delete global.cancelAnimationFrame;
        jest.restoreAllMocks();
        isInstantSliderWrite.mockImplementation(() => true);
    });

    const rampingContext = () => {
        const context = createContext(0);
        updateSlider(context);
        // A step of 2 %, small enough to be ramped.
        context._hass = { states: { 'input_number.test': state(0.4) } };
        updateSlider(context);
        runFrames(48);
        return context;
    };

    test('ramps a small step to its end when nothing else arrives', () => {
        const context = rampingContext();
        runFrames(400);
        expect(context._lastVisualFillPercentage).toBe(52);
        expect(frames.size).toBe(0);
    });

    test('keeps the fill where the new state put it', () => {
        const context = rampingContext();

        // The entity drops to its minimum before the ramp is over.
        context._hass = { states: { 'input_number.test': state(-10) } };
        updateSlider(context);
        expect(context._lastVisualFillPercentage).toBe(0);

        setRangeFillTransform.mockClear();
        runFrames(400);
        expect(setRangeFillTransform).not.toHaveBeenCalled();
        expect(context._lastVisualFillPercentage).toBe(0);
    });

    test('stops the ramp even when the new state asks for no move', () => {
        const context = rampingContext();
        const shown = context._lastVisualFillPercentage;

        // The entity lands exactly where the ramp has brought the fill so far.
        context._hass = { states: { 'input_number.test': state((shown / 100) * 20 - 10) } };
        updateSlider(context);

        setRangeFillTransform.mockClear();
        runFrames(400);
        expect(setRangeFillTransform).not.toHaveBeenCalled();
        expect(context._lastVisualFillPercentage).toBe(shown);
    });
});

// A sub-slider is laid over the slider of its card, and a slider card paints
// its fill, not its background. Two fills of the same color left nothing to
// show where the sub-slider's own one ended.
describe('a sub-slider fill over the fill of its card', () => {
    const cardFill = (color) => ({ style: { getPropertyValue: (name) => (name === '--bubble-slider-fill-color' ? color : '') } });

    const subSliderContext = (color) => {
        const context = createContext(0);
        context.getCardRangeFill = () => (color === undefined ? null : cardFill(color));
        return context;
    };

    afterEach(() => {
        getSurfaceStep.mockImplementation(() => null);
        isStateOn.mockImplementation(() => true);
    });

    test('steps the way it is told when both fills share a color', () => {
        getSurfaceStep.mockImplementation(() => 'darker');
        const context = subSliderContext('var(--bubble-icon-color)');
        updateSlider(context);

        expect(getSurfaceStep).toHaveBeenCalledWith(context, 'rgb(1, 2, 3)', 'var(--bubble-icon-color)');
        expect(context.elements.rangeFill.classList.contains('steps-darker')).toBe(true);
        expect(context.elements.rangeFill.classList.contains('steps-lighter')).toBe(false);
    });

    test('steps back once the colors differ', () => {
        getSurfaceStep.mockImplementation(() => 'lighter');
        const context = subSliderContext('var(--bubble-icon-color)');
        updateSlider(context);
        expect(context.elements.rangeFill.classList.contains('steps-lighter')).toBe(true);

        getSurfaceStep.mockImplementation(() => null);
        context._hass = { states: { 'input_number.test': state(1) } };
        updateSlider(context);
        expect(context.elements.rangeFill.classList.contains('steps-lighter')).toBe(false);
    });

    test('compares nothing when the card has no fill of its own, or one that is off', () => {
        const noFill = subSliderContext(undefined);
        updateSlider(noFill);
        const offFill = subSliderContext('');
        updateSlider(offFill);

        expect(getSurfaceStep).not.toHaveBeenCalled();
        expect(offFill.elements.rangeFill.classList.contains('steps-darker')).toBe(false);
    });

    test('drops the step when the sub-slider goes off', () => {
        getSurfaceStep.mockImplementation(() => 'darker');
        const context = subSliderContext('var(--bubble-icon-color)');
        updateSlider(context);

        isStateOn.mockImplementation(() => false);
        context._hass = { states: { 'input_number.test': state(1) } };
        updateSlider(context);
        expect(context.elements.rangeFill.classList.contains('steps-darker')).toBe(false);
    });

    test('leaves the slider of a card alone', () => {
        getSurfaceStep.mockImplementation(() => 'darker');
        const context = createContext(0);
        updateSlider(context);
        expect(getSurfaceStep).not.toHaveBeenCalled();
    });
});

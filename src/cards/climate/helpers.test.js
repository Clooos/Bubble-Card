import { describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('../../tools/utils.js', () => ({
    throttle: jest.fn((fn) => fn),
    getAttribute: jest.fn(),
    isEntityType: jest.fn(),
    formatNumericValue: jest.fn(),
    getTemperatureUnit: jest.fn(),
}));

const { getClimateColor } = await import('./helpers.js');

function climate(attributes, { stateColor = false, state = 'cool' } = {}) {
    return {
        _hass: { states: { 'climate.a': { state, attributes } } },
        config: { entity: 'climate.a', state_color: stateColor },
    };
}

const colorFor = (name) => `var(--bubble-state-climate-${name}-color, var(--state-climate-${name}-color, var(--state-climate-active-color, var(--state-active-color))))`;

describe('getClimateColor follows what the thermostat is doing', () => {
    test('an action the unit reports paints that mode, whatever the setting says', () => {
        expect(getClimateColor(climate({ hvac_action: 'cooling' }, { state: 'cool' }))).toBe(colorFor('cool'));
        expect(getClimateColor(climate({ hvac_action: 'heating' }, { state: 'heat' }))).toBe(colorFor('heat'));
    });

    // drying and fan were never read. A unit whose mode is dry or fan_only
    // painted anyway, which hid it; an auto thermostat reporting the same action
    // had nothing to paint from at all.
    test('drying and fan count as working too', () => {
        expect(getClimateColor(climate({ hvac_action: 'drying' }, { state: 'auto' }))).toBe(colorFor('dry'));
        expect(getClimateColor(climate({ hvac_action: 'fan' }, { state: 'auto' }))).toBe(colorFor('fan-only'));
        expect(getClimateColor(climate({ hvac_action: 'drying' }, { state: 'dry' }))).toBe(colorFor('dry'));
    });

    test('an idle unit stays dark unless a constant background is asked for', () => {
        expect(getClimateColor(climate({ hvac_action: 'idle' }, { state: 'cool' }))).toBe('');
        expect(getClimateColor(climate({ hvac_action: 'idle' }, { state: 'cool', stateColor: true }))).toBe(colorFor('cool'));
    });
});

describe('getClimateColor when the thermostat reports no action at all', () => {
    // #2503: an integration that never sets hvac_action left heat and cool with
    // nothing to go on, while dry and fan_only painted regardless. Same entity,
    // same setting, and no way to explain the difference.
    test('the mode is all there is to go on, for every mode alike', () => {
        expect(getClimateColor(climate({}, { state: 'cool' }))).toBe(colorFor('cool'));
        expect(getClimateColor(climate({}, { state: 'heat' }))).toBe(colorFor('heat'));
        expect(getClimateColor(climate({}, { state: 'dry' }))).toBe(colorFor('dry'));
        expect(getClimateColor(climate({}, { state: 'fan_only' }))).toBe(colorFor('fan-only'));
    });

    test('off and unknown paint nothing', () => {
        expect(getClimateColor(climate({}, { state: 'off' }))).toBe('');
        expect(getClimateColor(climate({}, { state: 'unknown' }))).toBe('');
    });
});

describe('getClimateColor with a constant background', () => {
    test('auto and heat_cool keep their own colors', () => {
        expect(getClimateColor(climate({ hvac_action: 'idle' }, { state: 'auto', stateColor: true }))).toBe(colorFor('auto'));
        expect(getClimateColor(climate({ hvac_action: 'idle' }, { state: 'heat_cool', stateColor: true }))).toBe(colorFor('heat-cool'));
    });

    test('a mode with no color of its own falls back to the accent', () => {
        expect(getClimateColor(climate({ hvac_action: 'idle' }, { state: 'eco', stateColor: true })))
            .toBe('var(--bubble-climate-accent-color, var(--bubble-accent-color, var(--accent-color)))');
    });
});

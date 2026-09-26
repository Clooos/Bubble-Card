import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

let attributes = {};

jest.unstable_mockModule('../../tools/utils.js', () => ({
    getState: jest.fn(() => 'heat'),
    getAttribute: jest.fn((context, attribute) => attributes[attribute] ?? ''),
    setLayout: jest.fn(),
    throttle: jest.fn((fn) => fn),
    isEntityType: jest.fn(() => false),
    formatNumericValue: jest.fn((value) => `${value}°`),
    getTemperatureUnit: jest.fn(() => '°C'),
}));

jest.unstable_mockModule('../../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));

const { changeTemperature } = await import('./changes.js');
const { markTargetPending } = await import('./helpers.js');

function buildContext() {
    return {
        _hass: { states: { 'climate.a': { state: 'heat', attributes } }, config: { unit_system: { temperature: '°C' } } },
        config: { entity: 'climate.a' },
        elements: {
            tempDisplay: { innerText: '' },
            temperatureContainer: { classList: { add: jest.fn(), remove: jest.fn() } },
        },
    };
}

describe('changeTemperature while a change of the user is still unconfirmed', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        attributes = { temperature: 20 };
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    // #2615: the tap writes what was asked for straight to the display and only
    // calls the service once the tapping stops, so every update in between still
    // carries the old target. Writing those walked the value backwards by itself.
    test('an update still carrying the old target does not move the display', () => {
        const context = buildContext();
        changeTemperature(context);
        expect(context.elements.tempDisplay.innerText).toBe('20°');

        markTargetPending(context, 'temperature', 22);

        attributes.temperature = 20.5;
        changeTemperature(context);
        expect(context.elements.tempDisplay.innerText).toBe('20°');

        attributes.temperature = 21;
        changeTemperature(context);
        expect(context.elements.tempDisplay.innerText).toBe('20°');
    });

    test('the display follows again once the thermostat reports what was asked', () => {
        const context = buildContext();
        changeTemperature(context);
        markTargetPending(context, 'temperature', 22);

        attributes.temperature = 21;
        changeTemperature(context);
        expect(context.elements.tempDisplay.innerText).toBe('20°');

        attributes.temperature = 22;
        changeTemperature(context);
        expect(context.elements.tempDisplay.innerText).toBe('22°');

        // Settled: a later change from anywhere else lands immediately.
        attributes.temperature = 18;
        changeTemperature(context);
        expect(context.elements.tempDisplay.innerText).toBe('18°');
    });

    // A thermostat that clamps what it was asked for never reports that value, so
    // holding on it forever would strand the display on a temperature never taken.
    test('a value the thermostat never confirms is let go of after a grace period', () => {
        const context = buildContext();
        changeTemperature(context);
        markTargetPending(context, 'temperature', 30);

        attributes.temperature = 24;
        changeTemperature(context);
        expect(context.elements.tempDisplay.innerText).toBe('20°');

        jest.advanceTimersByTime(6000);

        changeTemperature(context);
        expect(context.elements.tempDisplay.innerText).toBe('24°');
    });

    test('nothing is held back when the user has not touched the card', () => {
        const context = buildContext();
        changeTemperature(context);

        attributes.temperature = 23;
        changeTemperature(context);
        expect(context.elements.tempDisplay.innerText).toBe('23°');
    });
});

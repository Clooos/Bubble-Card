import { describe, expect, jest, test, beforeAll } from '@jest/globals';

// Only the Home Assistant version check is read from the tools, and importing
// them for real drags in the stylesheets of the base card.
jest.unstable_mockModule('../../tools/utils.js', () => ({
    isHomeAssistantVersionAtLeast: () => true,
}));

// getOptionIcon builds real elements; nothing else here touches the DOM.
beforeAll(() => {
    if (typeof globalThis.document === 'undefined') {
        globalThis.document = {
            createElement: (tag) => ({ tagName: String(tag).toUpperCase() }),
        };
    }
});

const { getSelectedAttribute, getTranslatedAttribute, getOptionIcon, callSelectService } =
    await import('./helpers.js');

function makeContext() {
    return {
        _hass: {
            callService: jest.fn(),
            formatEntityState: jest.fn((state, option) => `state:${option}`),
            formatEntityAttributeValue: jest.fn((state, attribute, option) => `${attribute}:${option}`),
        },
    };
}

const HUMIDIFIER = {
    entity_id: 'humidifier.bedroom',
    state: 'on',
    attributes: { mode: 'eco', available_modes: ['normal', 'eco'] },
};

const WATER_HEATER = {
    entity_id: 'water_heater.boiler',
    state: 'eco',
    attributes: { operation_list: ['eco', 'performance', 'off'] },
};

describe('the modes of a humidifier', () => {
    test('the selected option is the mode attribute, not the on/off state', () => {
        expect(getSelectedAttribute(HUMIDIFIER, 'available_modes')).toBe('eco');
    });

    test('an entity that reports no mode yet selects nothing', () => {
        const stateObj = { ...HUMIDIFIER, attributes: { available_modes: ['normal'] } };

        expect(getSelectedAttribute(stateObj, 'available_modes')).toBeNull();
    });

    test('options are read through the mode attribute of Home Assistant', () => {
        const context = makeContext();

        expect(getTranslatedAttribute(context, HUMIDIFIER, 'available_modes', 'eco')).toBe('mode:eco');
        expect(context._hass.formatEntityAttributeValue).toHaveBeenCalledWith(HUMIDIFIER, 'mode', 'eco');
    });

    test('the icon of an option comes from the mode attribute', () => {
        const icon = getOptionIcon(makeContext(), HUMIDIFIER, 'available_modes', 'eco');

        expect(icon).toMatchObject({ attribute: 'mode', attributeValue: 'eco', slot: 'graphic' });
    });

    test('picking an option calls humidifier.set_mode', () => {
        const context = makeContext();

        callSelectService(context, 'humidifier.bedroom', 'eco', { select_attribute: 'available_modes' });

        expect(context._hass.callService).toHaveBeenCalledWith('humidifier', 'set_mode', {
            entity_id: 'humidifier.bedroom',
            mode: 'eco',
        });
    });
});

describe('the operations of a water heater', () => {
    test('the selected option is the state itself, like an HVAC mode', () => {
        expect(getSelectedAttribute(WATER_HEATER, 'operation_list')).toBe('eco');
    });

    test('options are read as states, so they carry the wording of Home Assistant', () => {
        const context = makeContext();

        expect(getTranslatedAttribute(context, WATER_HEATER, 'operation_list', 'heat_pump')).toBe('state:heat_pump');
        expect(context._hass.formatEntityState).toHaveBeenCalledWith(WATER_HEATER, 'heat_pump');
    });

    test('the icon of an option comes from the operation mode attribute', () => {
        const icon = getOptionIcon(makeContext(), WATER_HEATER, 'operation_list', 'eco');

        expect(icon).toMatchObject({ attribute: 'operation_mode', attributeValue: 'eco', slot: 'graphic' });
    });

    test('picking an option calls water_heater.set_operation_mode', () => {
        const context = makeContext();

        callSelectService(context, 'water_heater.boiler', 'performance', { select_attribute: 'operation_list' });

        expect(context._hass.callService).toHaveBeenCalledWith('water_heater', 'set_operation_mode', {
            entity_id: 'water_heater.boiler',
            operation_mode: 'performance',
        });
    });
});

describe('what was already there', () => {
    test('an HVAC mode still calls climate.set_hvac_mode', () => {
        const context = makeContext();

        callSelectService(context, 'climate.living_room', 'heat', { select_attribute: 'hvac_modes' });

        expect(context._hass.callService).toHaveBeenCalledWith('climate', 'set_hvac_mode', {
            entity_id: 'climate.living_room',
            hvac_mode: 'heat',
        });
    });

    test('a preset mode is still read from its own attribute', () => {
        const stateObj = { entity_id: 'climate.living_room', state: 'heat', attributes: { preset_mode: 'eco' } };

        expect(getSelectedAttribute(stateObj, 'preset_modes')).toBe('eco');
    });
});

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

const { getSelectedAttribute, getTranslatedAttribute, getOptionIcon, callSelectService, callAlarmMode } =
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

const VACUUM = {
    entity_id: 'vacuum.robot',
    state: 'cleaning',
    attributes: { fan_speed: 'normal', fan_speed_list: ['quiet', 'normal', 'max'] },
};

const REMOTE = {
    entity_id: 'remote.living_room',
    state: 'on',
    attributes: { current_activity: 'Watch TV', activity_list: ['Watch TV', 'Listen to music'] },
};

const FAN = {
    entity_id: 'fan.ceiling',
    state: 'on',
    attributes: { direction: 'reverse', supported_features: 4 },
};

// The more info dialog of a vacuum has this menu, and a card had no way to
// offer it (#2644).
describe('the fan speeds of a vacuum', () => {
    test('the selected option is the fan speed, not the state of the robot', () => {
        expect(getSelectedAttribute(VACUUM, 'fan_speed_list')).toBe('normal');
        expect(getSelectedAttribute({ ...VACUUM, attributes: { fan_speed_list: ['quiet'] } }, 'fan_speed_list')).toBeNull();
    });

    test('options are read through the fan speed attribute of Home Assistant', () => {
        const context = makeContext();

        expect(getTranslatedAttribute(context, VACUUM, 'fan_speed_list', 'max')).toBe('fan_speed:max');
        expect(context._hass.formatEntityAttributeValue).toHaveBeenCalledWith(VACUUM, 'fan_speed', 'max');
    });

    // hui-vacuum-fan-speed-card-feature.ts turns the option icons off as well.
    test('an option has no icon of its own', () => {
        expect(getOptionIcon(makeContext(), VACUUM, 'fan_speed_list', 'max')).toBe(false);
    });

    test('picking an option calls vacuum.set_fan_speed', () => {
        const context = makeContext();

        callSelectService(context, 'vacuum.robot', 'max', { select_attribute: 'fan_speed_list' });

        expect(context._hass.callService).toHaveBeenCalledWith('vacuum', 'set_fan_speed', {
            entity_id: 'vacuum.robot',
            fan_speed: 'max',
        });
    });
});

describe('the activities of a remote', () => {
    test('the selected option is the current activity', () => {
        expect(getSelectedAttribute(REMOTE, 'activity_list')).toBe('Watch TV');
        expect(getSelectedAttribute({ ...REMOTE, attributes: { activity_list: ['Watch TV'] } }, 'activity_list')).toBeNull();
    });

    test('options are read the way the more info dialog reads them', () => {
        const context = makeContext();

        expect(getTranslatedAttribute(context, REMOTE, 'activity_list', 'Watch TV')).toBe('activity:Watch TV');
        expect(context._hass.formatEntityAttributeValue).toHaveBeenCalledWith(REMOTE, 'activity', 'Watch TV');
    });

    test('picking an option turns the remote on with that activity', () => {
        const context = makeContext();

        callSelectService(context, 'remote.living_room', 'Listen to music', { select_attribute: 'activity_list' });

        expect(context._hass.callService).toHaveBeenCalledWith('remote', 'turn_on', {
            entity_id: 'remote.living_room',
            activity: 'Listen to music',
        });
    });
});

describe('the direction of a fan', () => {
    test('the selected option is the direction attribute', () => {
        expect(getSelectedAttribute(FAN, 'direction')).toBe('reverse');
        expect(getSelectedAttribute({ ...FAN, attributes: { direction: null } }, 'direction')).toBeNull();
    });

    test('options are read through the direction attribute of Home Assistant', () => {
        const context = makeContext();

        expect(getTranslatedAttribute(context, FAN, 'direction', 'forward')).toBe('direction:forward');
    });

    test('the icon of an option comes from the direction attribute', () => {
        const icon = getOptionIcon(makeContext(), FAN, 'direction', 'forward');

        expect(icon).toMatchObject({ attribute: 'direction', attributeValue: 'forward', slot: 'graphic' });
    });

    test('picking an option calls fan.set_direction, and a preset still calls its own service', () => {
        const context = makeContext();

        callSelectService(context, 'fan.ceiling', 'forward', { select_attribute: 'direction' });
        callSelectService(context, 'fan.ceiling', 'sleep', { select_attribute: 'preset_modes' });

        expect(context._hass.callService.mock.calls).toEqual([
            ['fan', 'set_direction', { entity_id: 'fan.ceiling', direction: 'forward' }],
            ['fan', 'set_preset_mode', { entity_id: 'fan.ceiling', preset_mode: 'sleep' }],
        ]);
    });
});

const ALARM = {
    entity_id: 'alarm_control_panel.home',
    state: 'armed_home',
    attributes: { supported_features: 1 | 2, code_format: 'number', code_arm_required: false },
};

describe('the modes of an alarm panel', () => {
    function makeAlarmContext(state = ALARM) {
        const context = makeContext();
        context._hass.states = { 'alarm_control_panel.home': state };
        context._hass.callService.mockReturnValue(Promise.resolve());
        context._hass.localize = jest.fn((key) => ({ 'ui.card.alarm_control_panel.modes.armed_away': 'Away' })[key]);
        return context;
    }

    test('the selected option is the state of the panel', () => {
        expect(getSelectedAttribute(ALARM, 'alarm_modes')).toBe('armed_home');
    });

    test('options take the short names of Home Assistant, or the state name when it has none', () => {
        const context = makeAlarmContext();

        expect(getTranslatedAttribute(context, ALARM, 'alarm_modes', 'armed_away')).toBe('Away');
        expect(getTranslatedAttribute(context, ALARM, 'alarm_modes', 'armed_night')).toBe('state:armed_night');
    });

    test('the icon of an option is the one Home Assistant draws for that mode', () => {
        expect(getOptionIcon(makeAlarmContext(), ALARM, 'alarm_modes', 'armed_away')).toMatchObject({ icon: 'mdi:lock', slot: 'graphic' });
        expect(getOptionIcon(makeAlarmContext(), ALARM, 'alarm_modes', 'disarmed')).toMatchObject({ icon: 'mdi:shield-off' });
        expect(getOptionIcon(makeAlarmContext(), ALARM, 'alarm_modes', 'pending')).toBeNull();
    });

    test('a mode that needs no code is sent as it is picked', () => {
        const context = makeAlarmContext();

        callSelectService(context, 'alarm_control_panel.home', 'armed_away', { select_attribute: 'alarm_modes' });

        expect(context._hass.callService).toHaveBeenCalledWith('alarm_control_panel', 'alarm_arm_away', {
            entity_id: 'alarm_control_panel.home',
        });
    });

    // Sent from here it would go without its code, and Home Assistant would
    // refuse it. The dropdown asks for the code and sends both.
    test('a mode that needs a code is never sent from the plain pick', () => {
        const context = makeAlarmContext();

        callSelectService(context, 'alarm_control_panel.home', 'disarmed', { select_attribute: 'alarm_modes' });

        expect(context._hass.callService).not.toHaveBeenCalled();
    });

    test('the code travels with the mode once it has been typed', async () => {
        const context = makeAlarmContext();

        await callAlarmMode(context, 'alarm_control_panel.home', 'disarmed', '0000');

        expect(context._hass.callService).toHaveBeenCalledWith('alarm_control_panel', 'alarm_disarm', {
            entity_id: 'alarm_control_panel.home',
            code: '0000',
        });
    });

    test('a refusal from Home Assistant comes back to the caller', async () => {
        const context = makeAlarmContext();
        context._hass.callService.mockReturnValue(Promise.reject(new Error('Invalid code')));

        await expect(callAlarmMode(context, 'alarm_control_panel.home', 'disarmed', '0000')).rejects.toThrow('Invalid code');
    });

    test('something that is not a mode calls nothing', async () => {
        const context = makeAlarmContext();

        await callAlarmMode(context, 'alarm_control_panel.home', 'triggered');

        expect(context._hass.callService).not.toHaveBeenCalled();
    });
});

// A name added to the list without its service would give a menu that opens
// and does nothing. Every list is tried on a domain that carries it.
describe('every list the editor offers', () => {
    const DOMAIN_OF = {
        source_list: 'media_player', sound_mode_list: 'media_player',
        hvac_modes: 'climate', fan_modes: 'climate', swing_modes: 'climate', swing_horizontal_modes: 'climate',
        preset_modes: 'climate', effect_list: 'light', available_modes: 'humidifier', operation_list: 'water_heater',
        fan_speed_list: 'vacuum', activity_list: 'remote', direction: 'fan', alarm_modes: 'alarm_control_panel',
    };
    // An alarm mode stands in for the option, the others take any word.
    const OPTION_OF = { alarm_modes: 'armed_home' };

    test('has a service to call', async () => {
        const { SELECTABLE_ATTRIBUTES } = await import('./lists.js');

        for (const attribute of SELECTABLE_ATTRIBUTES) {
            const domain = DOMAIN_OF[attribute];
            expect(domain).toBeDefined();

            const context = makeContext();
            context._hass.states = { [`${domain}.test`]: { state: 'unknown', attributes: {} } };
            context._hass.callService.mockReturnValue(Promise.resolve());
            callSelectService(context, `${domain}.test`, OPTION_OF[attribute] ?? 'option', { select_attribute: attribute });

            expect(context._hass.callService).toHaveBeenCalledTimes(1);
            expect(context._hass.callService.mock.calls[0][0]).toBe(domain);
            expect(context._hass.callService.mock.calls[0][2].entity_id).toBe(`${domain}.test`);
        }
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

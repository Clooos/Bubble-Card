import { describe, expect, test } from '@jest/globals';
import { SELECTABLE_ATTRIBUTES, getSelectableAttributes, getSelectListLabel, getSelectOptions, hasSelectableAttribute } from './lists.js';

const VACUUM = {
    entity_id: 'vacuum.robot',
    state: 'docked',
    attributes: { fan_speed: 'normal', fan_speed_list: ['quiet', 'normal', 'max'], supported_features: 32 },
};

const REMOTE = {
    entity_id: 'remote.living_room',
    state: 'on',
    attributes: { current_activity: 'Watch TV', activity_list: ['Watch TV', 'Listen to music'], supported_features: 4 },
};

const FAN = {
    entity_id: 'fan.ceiling',
    state: 'on',
    attributes: { direction: 'forward', preset_mode: 'auto', preset_modes: ['auto', 'sleep'], supported_features: 4 | 8 },
};

describe('the lists a dropdown knows', () => {
    // Home Assistant offers these three as menus too, in the more info dialog
    // of a vacuum, a remote and a fan. They were missing here.
    test('include the fan speeds of a vacuum, the activities of a remote and the direction of a fan', () => {
        expect(SELECTABLE_ATTRIBUTES).toEqual(expect.arrayContaining(['fan_speed_list', 'activity_list', 'direction']));
    });

    test('keep every list that was already offered', () => {
        expect(SELECTABLE_ATTRIBUTES).toEqual(expect.arrayContaining([
            'source_list', 'sound_mode_list', 'hvac_modes', 'fan_modes', 'swing_modes',
            'swing_horizontal_modes', 'preset_modes', 'effect_list', 'available_modes', 'operation_list',
        ]));
    });
});

describe('what an entity offers as a menu', () => {
    test('a vacuum offers its fan speeds, a remote its activities', () => {
        expect(getSelectableAttributes('vacuum.robot', VACUUM)).toEqual(['fan_speed_list']);
        expect(getSelectableAttributes('remote.living_room', REMOTE)).toEqual(['activity_list']);
        expect(hasSelectableAttribute('vacuum.robot', VACUUM)).toBe(true);
        expect(hasSelectableAttribute('remote.living_room', REMOTE)).toBe(true);
    });

    test('a fan that can be reversed offers its direction next to its presets, in its own order', () => {
        expect(getSelectableAttributes('fan.ceiling', FAN)).toEqual(['direction', 'preset_modes']);
    });

    test('a fan that cannot be reversed does not', () => {
        const fixed = { ...FAN, attributes: { ...FAN.attributes, supported_features: 8 } };

        expect(getSelectableAttributes('fan.ceiling', fixed)).toEqual(['preset_modes']);
    });

    test('a fan that can be reversed offers it before it has reported a direction', () => {
        const silent = { ...FAN, attributes: { preset_modes: ['auto'], supported_features: 4 } };

        expect(getSelectableAttributes('fan.ceiling', silent)).toEqual(['preset_modes', 'direction']);
        expect(hasSelectableAttribute('fan.ceiling', { ...silent, attributes: { supported_features: 4 } })).toBe(true);
    });

    // The word sits on many entities that have nothing to turn round.
    test('a direction on anything but a fan is not a menu', () => {
        const wind = { entity_id: 'sensor.wind', state: '12', attributes: { direction: 'north', supported_features: 4 } };

        expect(getSelectableAttributes('sensor.wind', wind)).toEqual([]);
        expect(hasSelectableAttribute('sensor.wind', wind)).toBe(false);
    });

    // A television remote reports its activities as an empty list until some
    // are set up, and an empty menu is nothing to offer.
    test('a list with nothing in it is not offered', () => {
        const television = { ...REMOTE, attributes: { activity_list: [], current_activity: 'app', supported_features: 4 } };

        expect(getSelectableAttributes('remote.television', television)).toEqual([]);
        expect(hasSelectableAttribute('remote.television', television)).toBe(false);
        expect(hasSelectableAttribute('light.desk', { state: 'on', attributes: { effect_list: [] } })).toBe(false);
    });

    test('an entity with no list, or no state at all, offers nothing', () => {
        expect(getSelectableAttributes('light.desk', { state: 'on', attributes: { brightness: 255 } })).toEqual([]);
        expect(hasSelectableAttribute('light.desk', { state: 'on', attributes: { effect_list: ['Rainbow'] } })).toBe(true);
        expect(hasSelectableAttribute('light.desk', { state: 'on', attributes: { effect_list: null } })).toBe(false);
        expect(getSelectableAttributes('light.gone', undefined)).toEqual([]);
        expect(hasSelectableAttribute('light.gone', undefined)).toBe(false);
    });
});

describe('the modes of an alarm panel as a menu', () => {
    const ALARM = { state: 'disarmed', attributes: { friendly_name: 'Home', supported_features: 1 | 2, code_format: 'number' } };

    test('are offered on an alarm panel, after its real attributes', () => {
        expect(SELECTABLE_ATTRIBUTES).toContain('alarm_modes');
        expect(getSelectableAttributes('alarm_control_panel.home', ALARM)).toEqual(['alarm_modes']);
        expect(hasSelectableAttribute('alarm_control_panel.home', ALARM)).toBe(true);
    });

    test('are offered on nothing else', () => {
        expect(getSelectableAttributes('lock.front_door', { state: 'locked', attributes: { supported_features: 1 } })).toEqual([]);
        expect(hasSelectableAttribute('alarm_control_panel.gone', undefined)).toBe(false);
    });

    test('hold what the panel supports', () => {
        expect(getSelectOptions('alarm_control_panel.home', ALARM, 'alarm_modes')).toEqual(['armed_home', 'armed_away', 'disarmed']);
    });

    // There is no attribute to name the list after, so it takes the word of
    // Home Assistant, which every language already has.
    test('are named by Home Assistant in the editor, the other lists by their attribute', () => {
        const hass = {
            localize: (key) => (key === 'ui.card.alarm_control_panel.modes_label' ? 'Modes' : undefined),
            formatEntityAttributeName: (state, attribute) => `name:${attribute}`,
        };

        expect(getSelectListLabel(hass, ALARM, 'alarm_modes')).toBe('Modes');
        expect(getSelectListLabel({ ...hass, localize: () => '' }, ALARM, 'alarm_modes')).toBe('Modes');
        expect(getSelectListLabel(hass, VACUUM, 'fan_speed_list')).toBe('name:fan_speed_list');
    });
});

describe('the options of a menu', () => {
    test('come from the list attribute', () => {
        expect(getSelectOptions('vacuum.robot', VACUUM, 'fan_speed_list')).toEqual(['quiet', 'normal', 'max']);
        expect(getSelectOptions('remote.living_room', REMOTE, 'activity_list')).toEqual(['Watch TV', 'Listen to music']);
        expect(getSelectOptions('fan.ceiling', FAN, 'preset_modes')).toEqual(['auto', 'sleep']);
    });

    // more-info-fan.ts offers these two, a fan holding no list of its own.
    test('are forward and reverse for the direction of a fan', () => {
        expect(getSelectOptions('fan.ceiling', FAN, 'direction')).toEqual(['forward', 'reverse']);
    });

    test('are the options of a select entity whatever the attribute says', () => {
        const select = { state: 'b', attributes: { options: ['a', 'b'] } };

        expect(getSelectOptions('select.mode', select, undefined)).toEqual(['a', 'b']);
        expect(getSelectOptions('input_select.mode', select, 'effect_list')).toEqual(['a', 'b']);
    });

    test('are nothing to iterate when the fan cannot be reversed', () => {
        const fixed = { ...FAN, attributes: { ...FAN.attributes, supported_features: 8 } };

        expect(Array.isArray(getSelectOptions('fan.ceiling', fixed, 'direction'))).toBe(false);
    });
});

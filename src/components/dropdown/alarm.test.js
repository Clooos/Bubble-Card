import { describe, expect, test, jest } from '@jest/globals';
import { ALARM_MODES, formatAlarmMode, getAlarmModes, hasNumericAlarmCode, isAlarmPanel, needsAlarmCode } from './alarm.js';

const panel = (attributes = {}, state = 'disarmed') => ({ state, attributes });

describe('the modes of an alarm panel', () => {
    // In src/data/alarm_control_panel.ts disarmed has no feature bit, the others do.
    test('are the ones the panel supports, and disarmed whatever it supports', () => {
        expect(getAlarmModes(panel({ supported_features: 1 | 2 }))).toEqual(['armed_home', 'armed_away', 'disarmed']);
        expect(getAlarmModes(panel({ supported_features: 4 | 16 | 32 }))).toEqual(['armed_night', 'armed_vacation', 'armed_custom_bypass', 'disarmed']);
        expect(getAlarmModes(panel({}))).toEqual(['disarmed']);
        expect(getAlarmModes(undefined)).toEqual(['disarmed']);
    });

    // Bit 8 is the trigger, which is not a mode to choose.
    test('leave out what is not a mode', () => {
        expect(getAlarmModes(panel({ supported_features: 8 }))).toEqual(['disarmed']);
    });

    test('each have the service Home Assistant calls for them', () => {
        expect(Object.fromEntries(Object.entries(ALARM_MODES).map(([mode, { service }]) => [mode, service]))).toEqual({
            armed_home: 'alarm_arm_home',
            armed_away: 'alarm_arm_away',
            armed_night: 'alarm_arm_night',
            armed_vacation: 'alarm_arm_vacation',
            armed_custom_bypass: 'alarm_arm_custom_bypass',
            disarmed: 'alarm_disarm',
        });
    });

    test('belong to alarm panels only', () => {
        expect(isAlarmPanel('alarm_control_panel.home')).toBe(true);
        expect(isAlarmPanel('lock.front_door')).toBe(false);
        expect(isAlarmPanel(undefined)).toBe(false);
    });
});

// setProtectedAlarmControlPanelMode in the same file of Home Assistant.
describe('when a code has to be typed', () => {
    test('never on a panel that has no code', () => {
        const free = panel({ code_arm_required: true });

        expect(needsAlarmCode(free, 'disarmed')).toBe(false);
        expect(needsAlarmCode(free, 'armed_away')).toBe(false);
    });

    test('always to disarm a panel that has one', () => {
        expect(needsAlarmCode(panel({ code_format: 'number' }), 'disarmed')).toBe(true);
        expect(needsAlarmCode(panel({ code_format: 'text', code_arm_required: false }), 'disarmed')).toBe(true);
    });

    test('to arm it only when the panel says so', () => {
        expect(needsAlarmCode(panel({ code_format: 'number', code_arm_required: true }), 'armed_home')).toBe(true);
        expect(needsAlarmCode(panel({ code_format: 'number', code_arm_required: false }), 'armed_home')).toBe(false);
        expect(needsAlarmCode(panel({ code_format: 'number' }), 'armed_night')).toBe(false);
    });

    test('nothing is asked of an entity that is not there', () => {
        expect(needsAlarmCode(undefined, 'disarmed')).toBe(false);
    });

    test('only a code made of digits fits a keypad', () => {
        expect(hasNumericAlarmCode(panel({ code_format: 'number' }))).toBe(true);
        expect(hasNumericAlarmCode(panel({ code_format: 'text' }))).toBe(false);
        expect(hasNumericAlarmCode(panel({}))).toBe(false);
    });
});

describe('formatAlarmMode', () => {
    test('localizes alarm modes using ui.card.alarm_control_panel.modes.*', () => {
        const hass = {
            localize: jest.fn((key) => {
                const map = {
                    'ui.card.alarm_control_panel.modes.armed_away': 'Away',
                    'ui.card.alarm_control_panel.modes.armed_home': 'Home',
                    'ui.card.alarm_control_panel.modes.disarmed': 'Disarmed',
                    'ui.card.alarm_control_panel.modes.arming': 'Arming',
                };
                return map[key];
            }),
        };

        expect(formatAlarmMode(hass, { state: 'armed_away' })).toBe('Away');
        expect(formatAlarmMode(hass, { state: 'armed_home' })).toBe('Home');
        expect(formatAlarmMode(hass, { state: 'disarmed' })).toBe('Disarmed');
        expect(formatAlarmMode(hass, { state: 'arming' })).toBe('Arming');
        expect(formatAlarmMode(hass, null, 'armed_away')).toBe('Away');
    });

    test('falls back to formatEntityState when localized mode is missing', () => {
        const hass = {
            formatEntityState: jest.fn((state) => 'Armed Away Custom'),
        };

        expect(formatAlarmMode(hass, { state: 'armed_away' })).toBe('Armed Away Custom');
    });

    test('falls back to ALARM_MODE_LABELS when formatEntityState returns raw snake_case', () => {
        const hass = {
            formatEntityState: jest.fn((state, mode) => mode || state?.state),
        };

        expect(formatAlarmMode(hass, { state: 'armed_away' })).toBe('Away');
        expect(formatAlarmMode(hass, { state: 'armed_home' })).toBe('Home');
    });

    test('formats unknown raw underscore mode to Title Case when missing in dictionary', () => {
        const hass = {
            formatEntityState: jest.fn((state) => 'some_custom_mode'),
        };

        expect(formatAlarmMode(hass, { state: 'some_custom_mode' })).toBe('Some custom mode');
    });

    test('handles missing hass or empty state gracefully', () => {
        expect(formatAlarmMode(null, null)).toBe('');
        expect(formatAlarmMode({}, { state: 'armed_away' })).toBe('Away');
    });
});

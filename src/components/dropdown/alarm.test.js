import { describe, expect, test } from '@jest/globals';
import { ALARM_MODES, getAlarmModes, hasNumericAlarmCode, isAlarmPanel, needsAlarmCode } from './alarm.js';

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

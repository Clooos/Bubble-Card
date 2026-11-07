import { jest, test, expect, describe, beforeEach, afterEach } from '@jest/globals';

const changeState = jest.fn();
const changeIcon = jest.fn();
const changeName = jest.fn();
const changeStatus = jest.fn();
const changeSubButtons = jest.fn();
const changeDropdownList = jest.fn();
const changeStyle = jest.fn();
const createStructure = jest.fn();
const createDropdownStructure = jest.fn();
const createDropdownActions = jest.fn();
const applyScrollingEffect = jest.fn();

jest.unstable_mockModule('../../components/base-card/changes.js', () => ({
    changeState,
    changeIcon,
    changeName,
    changeStatus,
}));
jest.unstable_mockModule('../../components/sub-button/changes.js', () => ({
    changeSubButtons,
}));
jest.unstable_mockModule('../../components/dropdown/index.js', () => ({
    createDropdownStructure,
    createDropdownActions,
}));
jest.unstable_mockModule('../../components/dropdown/changes.js', () => ({
    changeDropdownList,
}));
jest.unstable_mockModule('./changes.js', () => ({
    changeStyle,
}));
jest.unstable_mockModule('./create.js', () => ({
    createStructure,
}));
jest.unstable_mockModule('../../tools/text-scrolling.js', () => ({
    applyScrollingEffect,
}));

const { handleSelect } = await import('./index.js');

describe('Select Card with alarm_control_panel countdown timers', () => {
    let mockContext;
    let stateElement;

    beforeEach(() => {
        jest.clearAllMocks();
        stateElement = {};

        mockContext = {
            cardType: 'select',
            config: {
                card_type: 'select',
                entity: 'alarm_control_panel.home',
            },
            elements: {
                state: stateElement,
            },
            _alarmCountdown: null,
            _hass: {
                states: {
                    'alarm_control_panel.home': {
                        state: 'arming',
                        attributes: {
                            delay: 45,
                        },
                        last_changed: new Date(Date.now() - 10000).toISOString(),
                    },
                },
            },
        };
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('calculates remaining seconds using entity.attributes.delay and last_changed', () => {
        const now = 1700000000000;
        jest.spyOn(Date, 'now').mockReturnValue(now);

        mockContext._hass.states['alarm_control_panel.home'].last_changed = new Date(now - 12000).toISOString();
        mockContext._hass.states['alarm_control_panel.home'].attributes.delay = 40;

        handleSelect(mockContext);

        expect(mockContext._alarmCountdown).toBe(28);
        expect(applyScrollingEffect).toHaveBeenCalledWith(mockContext, stateElement, 'Arming (28s)');
    });

    test('defaults delay to 30s when entity.attributes.delay is not set', () => {
        const now = 1700000000000;
        jest.spyOn(Date, 'now').mockReturnValue(now);

        delete mockContext._hass.states['alarm_control_panel.home'].attributes.delay;
        mockContext._hass.states['alarm_control_panel.home'].last_changed = new Date(now - 10000).toISOString();

        handleSelect(mockContext);

        expect(mockContext._alarmCountdown).toBe(20);
        expect(applyScrollingEffect).toHaveBeenCalledWith(mockContext, stateElement, 'Arming (20s)');
    });

    test('renders "Pending (Xs)" when entity state is pending', () => {
        const now = 1700000000000;
        jest.spyOn(Date, 'now').mockReturnValue(now);

        mockContext._hass.states['alarm_control_panel.home'].state = 'pending';
        mockContext._hass.states['alarm_control_panel.home'].attributes.delay = 30;
        mockContext._hass.states['alarm_control_panel.home'].last_changed = new Date(now - 15000).toISOString();

        handleSelect(mockContext);

        expect(mockContext._alarmCountdown).toBe(15);
        expect(applyScrollingEffect).toHaveBeenCalledWith(mockContext, stateElement, 'Pending (15s)');
    });

    test('displays existing _alarmCountdown if active', () => {
        mockContext._alarmCountdown = 19;
        handleSelect(mockContext);
        expect(applyScrollingEffect).toHaveBeenCalledWith(mockContext, stateElement, 'Arming (19s)');
    });

    test('does not show countdown string when countdown is null or reaches 0', () => {
        mockContext._alarmCountdown = null;
        mockContext._hass.states['alarm_control_panel.home'].last_changed = new Date(Date.now() - 50000).toISOString();
        mockContext._hass.states['alarm_control_panel.home'].attributes.delay = 30;

        handleSelect(mockContext);

        expect(applyScrollingEffect).not.toHaveBeenCalledWith(mockContext, stateElement, expect.stringMatching(/Arming \(\d+s\)/));
    });

    test('does not show countdown for non-alarm domains', () => {
        mockContext.config.entity = 'input_select.mode';
        mockContext._hass.states['input_select.mode'] = {
            state: 'arming',
            attributes: { delay: 30 },
            last_changed: new Date().toISOString(),
        };

        handleSelect(mockContext);
        expect(mockContext._alarmCountdown).toBeNull();
        expect(applyScrollingEffect).not.toHaveBeenCalled();
    });

    test('delegates state rendering to changeState when panel is armed_away (not arming/pending)', () => {
        mockContext._hass.states['alarm_control_panel.home'].state = 'armed_away';
        handleSelect(mockContext);
        expect(changeState).toHaveBeenCalledWith(mockContext);
        expect(applyScrollingEffect).not.toHaveBeenCalled();
    });
});

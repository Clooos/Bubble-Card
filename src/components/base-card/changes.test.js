import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('../../tools/style.js', () => ({
    isColorCloseToWhite: jest.fn(() => false),
}));

jest.unstable_mockModule('./index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
}));

jest.unstable_mockModule('../../tools/icon.js', () => ({
    getIcon: jest.fn(() => ''),
    getImage: jest.fn(() => ''),
    getIconColor: jest.fn(() => 'var(--primary-color)'),
}));

jest.unstable_mockModule('../../tools/text-scrolling.js', () => ({
    applyScrollingEffect: jest.fn(),
}));

jest.unstable_mockModule('../../cards/climate/helpers.js', () => ({
    getClimateColor: jest.fn(() => ''),
}));

const { ensureTimerCountdown } = await import('./changes.js');
const { hasTimerInterval, stopTimerInterval } = await import('../../tools/utils.js');

function createTimerCardContext() {
    return {
        config: { entity: 'timer.test', show_state: true },
        _hass: { states: { 'timer.test': { state: 'active' } } },
        isConnected: true,
    };
}

describe('ensureTimerCountdown', () => {
    const usedContexts = [];

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        usedContexts.forEach((context) => stopTimerInterval(context));
        usedContexts.length = 0;
        jest.useRealTimers();
    });

    test('re-arms the countdown after a disconnect cleared it', () => {
        const context = createTimerCardContext();
        usedContexts.push(context);

        ensureTimerCountdown(context);
        expect(hasTimerInterval(context)).toBe(true);

        // A disconnect (view switch, pop-up close) stops the interval while
        // the memoized state comparison of changeState stays unchanged: the
        // pre-memo hook must restart it or the countdown freezes on screen.
        stopTimerInterval(context);
        expect(hasTimerInterval(context)).toBe(false);

        ensureTimerCountdown(context);
        expect(hasTimerInterval(context)).toBe(true);
    });

    test('leaves an already-running countdown untouched', () => {
        // startTimerInterval resets any existing interval: re-arming on every
        // pass would keep the countdown from ever completing a full second.
        const context = createTimerCardContext();
        usedContexts.push(context);
        const setIntervalSpy = jest.spyOn(global, 'setInterval');

        ensureTimerCountdown(context);
        ensureTimerCountdown(context);

        expect(setIntervalSpy).toHaveBeenCalledTimes(1);
        setIntervalSpy.mockRestore();
    });

    test('does nothing for inactive timers, hidden state or non-timer entities', () => {
        const idle = createTimerCardContext();
        idle._hass.states['timer.test'].state = 'idle';
        ensureTimerCountdown(idle);
        expect(hasTimerInterval(idle)).toBe(false);

        const hidden = createTimerCardContext();
        hidden.config.show_state = false;
        ensureTimerCountdown(hidden);
        expect(hasTimerInterval(hidden)).toBe(false);

        const light = createTimerCardContext();
        light.config.entity = 'light.test';
        light._hass.states['light.test'] = { state: 'on' };
        ensureTimerCountdown(light);
        expect(hasTimerInterval(light)).toBe(false);
    });
});

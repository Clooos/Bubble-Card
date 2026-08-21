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

const applyScrollingEffect = jest.fn();
jest.unstable_mockModule('../../tools/text-scrolling.js', () => ({
    applyScrollingEffect,
}));

jest.unstable_mockModule('../../cards/climate/helpers.js', () => ({
    getClimateColor: jest.fn(() => ''),
}));

const { changeState, ensureTimerCountdown } = await import('./changes.js');
const { hasTimerInterval, stopTimerInterval, hasRelativeTimeInterval, stopRelativeTimeInterval } = await import('../../tools/utils.js');

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

function createClassList() {
    const classes = new Set();
    return {
        add: (...n) => n.forEach((c) => classes.add(c)),
        remove: (...n) => n.forEach((c) => classes.delete(c)),
        contains: (c) => classes.has(c),
        toggle: (c, force) => {
            const add = force === undefined ? !classes.has(c) : force;
            if (add) classes.add(c); else classes.delete(c);
            return classes.has(c);
        },
    };
}

function createRelativeCardContext(secondsAgo, config = {}) {
    const lastChanged = new Date(Date.now() - secondsAgo * 1000).toISOString();
    return {
        isConnected: true,
        card: { classList: createClassList() },
        config: { entity: 'sensor.test', button_type: 'state', show_state: false, show_last_changed: true, ...config },
        _hass: {
            locale: { language: 'en' },
            formatEntityState: () => 'on',
            formatEntityAttributeValue: () => '',
            states: { 'sensor.test': { state: 'on', last_changed: lastChanged, last_updated: lastChanged, attributes: {} } },
        },
        elements: {
            name: { classList: createClassList() },
            iconContainer: { classList: createClassList() },
            nameContainer: { classList: createClassList() },
            state: { classList: createClassList() },
        },
    };
}

const displayedText = () => {
    const call = applyScrollingEffect.mock.calls.at(-1);
    return call ? call[2] : undefined;
};

// A relative time goes stale on its own: the entity is not changing, which is
// exactly why the memo guard in changeState returns early. Without a beat of
// its own the text is frozen until something else about the entity moves.
describe('the relative time beat of #2572', () => {
    const usedContexts = [];

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
    });

    afterEach(() => {
        usedContexts.forEach((context) => stopRelativeTimeInterval(context));
        usedContexts.length = 0;
        jest.useRealTimers();
    });

    test('rewrites the relative time as it ages, with nothing about the entity changing', () => {
        const context = createRelativeCardContext(90);
        usedContexts.push(context);

        changeState(context);
        expect(displayedText()).toBe('2 minutes ago');

        // Not one state update in between: only time passed.
        jest.advanceTimersByTime(60000);
        expect(displayedText()).toBe('3 minutes ago');

        jest.advanceTimersByTime(60000);
        expect(displayedText()).toBe('4 minutes ago');
    });

    test('arms the beat for show_last_updated as well', () => {
        const context = createRelativeCardContext(90, { show_last_changed: false, show_last_updated: true });
        usedContexts.push(context);

        changeState(context);

        expect(hasRelativeTimeInterval(context)).toBe(true);
    });

    test('runs no beat when no relative time is shown', () => {
        const context = createRelativeCardContext(90, { show_last_changed: false });
        usedContexts.push(context);

        changeState(context);

        expect(hasRelativeTimeInterval(context)).toBe(false);
    });

    test('stops the beat once the option is turned off', () => {
        const context = createRelativeCardContext(90);
        usedContexts.push(context);

        changeState(context);
        expect(hasRelativeTimeInterval(context)).toBe(true);

        context.config.show_last_changed = false;
        changeState(context);

        expect(hasRelativeTimeInterval(context)).toBe(false);
    });

    test('arms the beat once, so a busy card still refreshes on time', () => {
        // startRelativeTimeInterval re-arming on every pass would keep pushing
        // the next tick away, and a card updated often would never refresh.
        const context = createRelativeCardContext(90);
        usedContexts.push(context);
        const setIntervalSpy = jest.spyOn(global, 'setInterval');

        changeState(context);
        changeState(context);
        changeState(context);

        expect(setIntervalSpy).toHaveBeenCalledTimes(1);
        setIntervalSpy.mockRestore();
    });

    test('stops beating once the card left the DOM', () => {
        const context = createRelativeCardContext(90);
        usedContexts.push(context);

        changeState(context);
        expect(hasRelativeTimeInterval(context)).toBe(true);

        // A removed card keeps its last hass snapshot, so nothing in the state
        // itself could ever tell the beat to stop.
        context.isConnected = false;
        jest.advanceTimersByTime(60000);

        expect(hasRelativeTimeInterval(context)).toBe(false);
    });
});

// The beat is shared on purpose: fifty relative times on a wall tablet must
// cost one wake-up a minute, not fifty. These pin that, and the fact that
// nothing beats while the page is hidden.
describe('the relative time beat is shared and idle-aware', () => {
    const usedContexts = [];
    let hidden = false;
    let visibilityHandler = null;
    let realDocument;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        hidden = false;
        visibilityHandler = null;
        realDocument = global.document;
        global.document = {
            get hidden() { return hidden; },
            addEventListener: (type, fn) => { if (type === 'visibilitychange') visibilityHandler = fn; },
        };
    });

    afterEach(() => {
        usedContexts.forEach((context) => stopRelativeTimeInterval(context));
        usedContexts.length = 0;
        global.document = realDocument;
        jest.useRealTimers();
    });

    test('runs one interval for many cards, not one each', () => {
        const setIntervalSpy = jest.spyOn(global, 'setInterval');

        for (let i = 0; i < 10; i++) {
            const context = createRelativeCardContext(90);
            usedContexts.push(context);
            changeState(context);
        }

        expect(setIntervalSpy).toHaveBeenCalledTimes(1);
        setIntervalSpy.mockRestore();
    });

    test('refreshes every subscriber on the one tick', () => {
        const a = createRelativeCardContext(90);
        const b = createRelativeCardContext(90);
        usedContexts.push(a, b);
        changeState(a);
        changeState(b);
        applyScrollingEffect.mockClear();

        jest.advanceTimersByTime(60000);

        const refreshed = applyScrollingEffect.mock.calls.map((c) => c[1]);
        expect(refreshed).toContain(a.elements.state);
        expect(refreshed).toContain(b.elements.state);
    });

    test('stops the interval once the last card drops out', () => {
        const clearIntervalSpy = jest.spyOn(global, 'clearInterval');
        const a = createRelativeCardContext(90);
        const b = createRelativeCardContext(90);
        usedContexts.push(a, b);
        changeState(a);
        changeState(b);

        stopRelativeTimeInterval(a);
        expect(clearIntervalSpy).not.toHaveBeenCalled();

        stopRelativeTimeInterval(b);
        expect(clearIntervalSpy).toHaveBeenCalled();
        clearIntervalSpy.mockRestore();
    });

    test('beats not at all while the page is hidden, and catches up on return', () => {
        const context = createRelativeCardContext(90);
        usedContexts.push(context);
        changeState(context);
        expect(displayedText()).toBe('2 minutes ago');

        hidden = true;
        visibilityHandler();

        // Three minutes away with nothing running.
        applyScrollingEffect.mockClear();
        jest.advanceTimersByTime(180000);
        expect(applyScrollingEffect).not.toHaveBeenCalled();

        hidden = false;
        visibilityHandler();

        // Back, and correct straight away rather than up to a minute later.
        expect(displayedText()).toBe('5 minutes ago');
    });

    test('drops a card that throws instead of losing the whole page beat', () => {
        const bad = createRelativeCardContext(90);
        const good = createRelativeCardContext(90);
        usedContexts.push(bad, good);
        changeState(bad);
        changeState(good);

        // A card whose hass went away mid-flight must not stop everyone else.
        Object.defineProperty(bad, '_hass', { get() { throw new Error('gone'); } });

        jest.advanceTimersByTime(60000);

        expect(hasRelativeTimeInterval(bad)).toBe(false);
        expect(hasRelativeTimeInterval(good)).toBe(true);
    });
});

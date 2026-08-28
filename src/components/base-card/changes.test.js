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
const { hasTimerInterval, stopTimerInterval, hasRelativeTimeInterval, stopRelativeTimeInterval, relativeTimeRefreshDelay } = await import('../../tools/utils.js');

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
        const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

        changeState(context);
        changeState(context);
        changeState(context);

        expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
        setTimeoutSpy.mockRestore();
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

    test('runs one timer for many cards, not one each', () => {
        for (let i = 0; i < 10; i++) {
            const context = createRelativeCardContext(90);
            usedContexts.push(context);
            changeState(context);
        }

        expect(jest.getTimerCount()).toBe(1);
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

    test('stops the timer once the last card drops out', () => {
        const a = createRelativeCardContext(90);
        const b = createRelativeCardContext(90);
        usedContexts.push(a, b);
        changeState(a);
        changeState(b);
        expect(jest.getTimerCount()).toBe(1);

        stopRelativeTimeInterval(a);
        expect(jest.getTimerCount()).toBe(1);

        stopRelativeTimeInterval(b);
        expect(jest.getTimerCount()).toBe(0);
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

// A relative time under a minute changes every second, so refreshing it once a
// minute leaves "now" sitting there while a sub-button next to it counts the
// seconds. Home Assistant's own ha-relative-time has the same flat 60 second
// interval, which is exactly what the report was about.
describe('the beat follows what is on screen', () => {
    const usedContexts = [];
    let realDocument;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        realDocument = global.document;
        global.document = { hidden: false, addEventListener: () => {}, removeEventListener: () => {} };
    });

    afterEach(() => {
        usedContexts.forEach((context) => stopRelativeTimeInterval(context));
        usedContexts.length = 0;
        global.document = realDocument;
        jest.useRealTimers();
    });

    test('rewrites a card that just changed every second', () => {
        const context = createRelativeCardContext(3);
        usedContexts.push(context);
        changeState(context);
        expect(displayedText()).toBe('4 seconds ago');

        jest.advanceTimersByTime(1000);

        expect(displayedText()).toBe('5 seconds ago');
    });

    test('does not leave it on the same text for a whole minute', () => {
        const context = createRelativeCardContext(0);
        usedContexts.push(context);
        changeState(context);
        const atFirst = displayedText();

        jest.advanceTimersByTime(5000);

        expect(displayedText()).not.toBe(atFirst);
    });

    test('settles back to the minute once past the first minute', () => {
        const context = createRelativeCardContext(90);
        usedContexts.push(context);
        changeState(context);
        applyScrollingEffect.mockClear();

        jest.advanceTimersByTime(30000);
        expect(applyScrollingEffect).not.toHaveBeenCalled();

        jest.advanceTimersByTime(30000);
        expect(applyScrollingEffect).toHaveBeenCalled();
    });

    // One fresh card must not be silent, and must not drag every other card
    // into a per-second refresh either
    test('the freshest card sets the pace without waking the others', () => {
        const fresh = createRelativeCardContext(2);
        const old = createRelativeCardContext(600);
        usedContexts.push(fresh, old);
        changeState(fresh);
        changeState(old);
        expect(jest.getTimerCount()).toBe(1);
        applyScrollingEffect.mockClear();

        jest.advanceTimersByTime(1000);

        const refreshed = applyScrollingEffect.mock.calls.map((c) => c[1]);
        expect(refreshed).toContain(fresh.elements.state);
        expect(refreshed).not.toContain(old.elements.state);
    });

    test('asks for the fast pace only while the time is under a minute', () => {
        const now = Date.now();
        expect(relativeTimeRefreshDelay(new Date(now - 3000).toISOString())).toBe(1000);
        expect(relativeTimeRefreshDelay(new Date(now - 59000).toISOString())).toBe(1000);
        expect(relativeTimeRefreshDelay(new Date(now - 61000).toISOString())).toBe(60000);
        expect(relativeTimeRefreshDelay(null)).toBe(60000);
        expect(relativeTimeRefreshDelay('pas une date')).toBe(60000);
    });
});

// The subscription outlives the card's own pace: a card subscribed while its
// entity was hours old still holds the slow cadence when that entity changes,
// and nothing else would ever tell the beat to hurry.
describe('a card that just changed speeds the beat back up', () => {
    const usedContexts = [];
    let realDocument;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        realDocument = global.document;
        global.document = { hidden: false, addEventListener: () => {}, removeEventListener: () => {} };
    });

    afterEach(() => {
        usedContexts.forEach((context) => stopRelativeTimeInterval(context));
        usedContexts.length = 0;
        global.document = realDocument;
        jest.useRealTimers();
    });

    test('picks up the fast pace when the entity changes under it', () => {
        const context = createRelativeCardContext(600);
        usedContexts.push(context);
        changeState(context);

        // The entity changes: the card now reads in seconds
        const now = new Date().toISOString();
        context._hass = {
            ...context._hass,
            states: { 'sensor.test': { state: 'off', last_changed: now, last_updated: now, attributes: {} } },
        };
        changeState(context);
        const atFirst = displayedText();

        jest.advanceTimersByTime(2000);

        expect(displayedText()).not.toBe(atFirst);
    });

    test('re-arming never pushes the next rewrite away', () => {
        const context = createRelativeCardContext(3);
        usedContexts.push(context);
        changeState(context);

        // A card updated often re-arms constantly, and must still refresh on time
        for (let i = 0; i < 20; i++) changeState(context);
        applyScrollingEffect.mockClear();

        jest.advanceTimersByTime(1000);

        expect(applyScrollingEffect).toHaveBeenCalled();
    });
});

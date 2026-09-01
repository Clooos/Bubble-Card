import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

// The gate is pure decision plus one proxy, so it drives entirely from fakes:
// a config, a hass, and control over the clock it reads for its skip bound.

let now = 1000;
const realPerformance = globalThis.performance;

beforeEach(() => {
    now = 1000;
    globalThis.performance = { now: () => now };
});

afterEach(() => {
    globalThis.performance = realPerformance;
    jest.resetModules();
});

const load = () => import('./render-gate.js');

// Entity states are compared by object identity, which is what Home Assistant
// guarantees: it replaces a state object only when that entity really changed.
const state = (value, attributes = {}) => ({ state: value, attributes });

// Home Assistant keeps these sub-objects stable across ticks and only replaces
// the ones that really changed, so the fakes have to share them too: rebuilding
// them every time would look like a theme change on every tick.
const SHARED = {
    themes: { darkMode: false },
    locale: { language: 'fr' },
    config: {},
    user: {},
    entities: {},
    devices: {},
    areas: {},
};

function makeHass(states = {}, extra = {}) {
    return { states, language: 'fr', ...SHARED, ...extra };
}

function makeCard(config, hass) {
    return { config, _hass: hass };
}

// Renders once so the gate has a snapshot to compare against, optionally
// letting a template read entities through the tracked hass first.
async function primed(config, hass, readIds = []) {
    const { trackedHass, noteRender } = await load();
    const card = makeCard(config, hass);
    if (readIds.length) {
        const proxy = trackedHass(card);
        for (const id of readIds) proxy.states[id];
    }
    noteRender(card);
    return card;
}

describe('what the gate refuses to decide', () => {
    test('never skips a card that has not rendered yet', async () => {
        const { shouldSkipRender } = await load();
        const hass = makeHass({ 'light.a': state('on') });
        expect(shouldSkipRender(makeCard({ card_type: 'button', entity: 'light.a' }, hass))).toBe(false);
    });

    // The pop-up shell drives its own open sequence off this same path.
    test('never skips a pop-up', async () => {
        const { shouldSkipRender } = await load();
        const hass = makeHass({ 'light.a': state('on') });
        const card = await primed({ card_type: 'pop-up', entity: 'light.a' }, hass);
        expect(shouldSkipRender(card)).toBe(false);
    });

    test('never skips in the editor or in a preview', async () => {
        const { shouldSkipRender } = await load();
        const hass = makeHass({ 'light.a': state('on') });
        for (const flag of ['editor', 'detectedEditor', '_preview']) {
            const card = await primed({ card_type: 'button', entity: 'light.a' }, hass);
            card[flag] = true;
            expect(shouldSkipRender(card)).toBe(false);
        }
    });

    test('never skips when there is no hass yet', async () => {
        const { shouldSkipRender } = await load();
        const card = await primed({ card_type: 'button', entity: 'light.a' }, makeHass({ 'light.a': state('on') }));
        card._hass = undefined;
        expect(shouldSkipRender(card)).toBe(false);
    });
});

describe('deciding on what the card declares', () => {
    test('skips when the declared entity is the very same state object', async () => {
        const { shouldSkipRender } = await load();
        const on = state('on');
        const card = await primed({ card_type: 'button', entity: 'light.a' }, makeHass({ 'light.a': on }));

        // A new hass object carrying the same state object: something else in
        // the installation moved, not this card's entity.
        card._hass = makeHass({ 'light.a': on });
        expect(shouldSkipRender(card)).toBe(true);
    });

    test('renders when the declared entity changed', async () => {
        const { shouldSkipRender } = await load();
        const card = await primed({ card_type: 'button', entity: 'light.a' }, makeHass({ 'light.a': state('on') }));
        card._hass = makeHass({ 'light.a': state('off') });
        expect(shouldSkipRender(card)).toBe(false);
    });

    test('follows entities named by sub-buttons, however deeply nested', async () => {
        const { shouldSkipRender, collectDeclaredEntities } = await load();
        const config = {
            card_type: 'button',
            entity: 'light.a',
            sub_button: { main: [{ group: [{ entity: 'switch.deep' }] }], bottom: [{ entity: 'fan.b' }] },
        };
        expect(collectDeclaredEntities(config).sort()).toEqual(['fan.b', 'light.a', 'switch.deep']);

        const shared = { 'light.a': state('on'), 'fan.b': state('off'), 'switch.deep': state('on') };
        const card = await primed(config, makeHass(shared));
        card._hass = makeHass({ ...shared, 'switch.deep': state('off') });
        expect(shouldSkipRender(card)).toBe(false);
    });

    test('renders when the theme changes, even with every entity untouched', async () => {
        const { shouldSkipRender } = await load();
        const on = state('on');
        const card = await primed({ card_type: 'button', entity: 'light.a' }, makeHass({ 'light.a': on }));
        card._hass = makeHass({ 'light.a': on }, { themes: { darkMode: true } });
        expect(shouldSkipRender(card)).toBe(false);
    });

    // Names, icons and areas are resolved through these registries, not through
    // the state table. Leaving them out let a person card render one pass stale.
    test.each(['entities', 'devices', 'areas', 'locale', 'config', 'user'])(
        'renders when hass.%s is replaced', async (key) => {
            const { shouldSkipRender } = await load();
            const on = state('on');
            const card = await primed({ card_type: 'button', entity: 'light.a' }, makeHass({ 'light.a': on }));
            const next = makeHass({ 'light.a': on });
            next[key] = { replaced: true };
            card._hass = next;
            expect(shouldSkipRender(card)).toBe(false);
        });
});

// The card's own config never mentions these entities: the only way to know a
// template depends on them is to watch it read them.
describe('deciding on what the templates actually read', () => {
    test('renders when an entity only a template reads has changed', async () => {
        const { shouldSkipRender } = await load();
        const shared = { 'light.a': state('on'), 'sensor.watched': state('21') };
        const card = await primed({ card_type: 'button', entity: 'light.a' }, makeHass(shared), ['sensor.watched']);

        card._hass = makeHass({ ...shared, 'sensor.watched': state('22') });
        expect(shouldSkipRender(card)).toBe(false);
    });

    test('skips when the entity a template read is unchanged', async () => {
        const { shouldSkipRender } = await load();
        const watched = state('21');
        const shared = { 'light.a': state('on'), 'sensor.watched': watched, 'sensor.other': state('5') };
        const card = await primed({ card_type: 'button', entity: 'light.a' }, makeHass(shared), ['sensor.watched']);

        // Only an entity nobody reads moved.
        card._hass = makeHass({ ...shared, 'sensor.other': state('6') });
        expect(shouldSkipRender(card)).toBe(true);
    });

    test('renders when a template read some other part of hass that changed', async () => {
        const { trackedHass, noteRender, shouldSkipRender } = await load();
        const on = state('on');
        const card = makeCard({ card_type: 'button', entity: 'light.a' }, makeHass({ 'light.a': on }));
        trackedHass(card).myExtension;
        noteRender(card);

        const next = makeHass({ 'light.a': on });
        next.myExtension = { changed: true };
        card._hass = next;
        expect(shouldSkipRender(card)).toBe(false);
    });

    // A template that walks the whole table depends on every entity there is,
    // and no dependency set can express that.
    test('never skips once a template has enumerated every state', async () => {
        const { trackedHass, noteRender, shouldSkipRender } = await load();
        const on = state('on');
        const card = makeCard({ card_type: 'button', entity: 'light.a' }, makeHass({ 'light.a': on }));
        Object.keys(trackedHass(card).states);
        noteRender(card);

        card._hass = makeHass({ 'light.a': on });
        expect(shouldSkipRender(card)).toBe(false);
    });

    test('hands the template the real values through the proxy', async () => {
        const { trackedHass } = await load();
        const card = makeCard({ card_type: 'button', entity: 'light.a' }, makeHass({ 'light.a': state('on') }));
        const proxy = trackedHass(card);
        expect(proxy.states['light.a'].state).toBe('on');
        expect(proxy.language).toBe('fr');
        expect('light.a' in proxy.states).toBe(true);
        expect(proxy.states['light.missing']).toBeUndefined();
    });
});

// A media player's progress bar moves while its state object stays identical.
// These were the only false skips the gate ever produced against the real DOM.
describe('renders that advance with the clock', () => {
    test.each([
        ['media-player', { card_type: 'media-player', entity: 'media_player.a' }],
        ['calendar', { card_type: 'calendar' }],
        ['a timer entity', { card_type: 'button', entity: 'timer.pasta' }],
        ['show_last_changed', { card_type: 'button', entity: 'light.a', show_last_changed: true }],
        ['a sub-button showing last_changed', {
            card_type: 'button',
            entity: 'light.a',
            sub_button: { main: [{ entity: 'light.b', show_last_updated: true }], bottom: [] },
        }],
        ['a timer in a sub-button', {
            card_type: 'button',
            entity: 'light.a',
            sub_button: { main: [{ group: [{ entity: 'timer.eggs' }] }], bottom: [] },
        }],
    ])('never skips %s', async (_label, config) => {
        const { shouldSkipRender, isClockDriven } = await load();
        expect(isClockDriven(config)).toBe(true);
        const shared = { 'light.a': state('on'), 'light.b': state('on'), 'media_player.a': state('playing'), 'timer.pasta': state('active'), 'timer.eggs': state('idle') };
        const card = await primed(config, makeHass(shared));
        card._hass = makeHass(shared);
        expect(shouldSkipRender(card)).toBe(false);
    });

    test('a plain button is not treated as clock driven', async () => {
        const { isClockDriven } = await load();
        expect(isClockDriven({ card_type: 'button', entity: 'light.a' })).toBe(false);
    });
});

describe('the bound on how long a card may skip', () => {
    test('renders once the skip window has run out, whatever the gate thinks', async () => {
        const { shouldSkipRender, noteRender } = await load();
        const on = state('on');
        const card = await primed({ card_type: 'button', entity: 'light.a' }, makeHass({ 'light.a': on }));

        card._hass = makeHass({ 'light.a': on });
        now += 9000;
        expect(shouldSkipRender(card)).toBe(true);

        now += 2000;
        expect(shouldSkipRender(card)).toBe(false);

        // That forced render restarts the window.
        noteRender(card);
        expect(shouldSkipRender(card)).toBe(true);
    });
});

describe('reconfiguration', () => {
    test('a new config drops the snapshot and the recorded reads', async () => {
        const { shouldSkipRender, resetRenderGate } = await load();
        const on = state('on');
        const card = await primed({ card_type: 'button', entity: 'light.a' }, makeHass({ 'light.a': on }));
        card._hass = makeHass({ 'light.a': on });
        expect(shouldSkipRender(card)).toBe(true);

        resetRenderGate(card);
        expect(shouldSkipRender(card)).toBe(false);
    });

    // The config object itself is the key, so a card re-configured in place
    // cannot go on being judged against the entities of the old one.
    test('swapping the config object alone re-opens the gate', async () => {
        const { shouldSkipRender } = await load();
        const on = state('on');
        const card = await primed({ card_type: 'button', entity: 'light.a' }, makeHass({ 'light.a': on }));
        card._hass = makeHass({ 'light.a': on });
        expect(shouldSkipRender(card)).toBe(true);

        card.config = { card_type: 'button', entity: 'light.b' };
        expect(shouldSkipRender(card)).toBe(false);
    });
});

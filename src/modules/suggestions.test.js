import { beforeEach, describe, expect, jest, test } from '@jest/globals';

const yamlKeysMap = new Map();
jest.unstable_mockModule('./registry.js', () => ({ yamlKeysMap, moduleSourceMap: new Map() }));

const getCachedAggregatedModules = jest.fn(() => null);
jest.unstable_mockModule('./bct-provider.js', () => ({ getCachedAggregatedModules }));

const getNativeEntitySuggestion = jest.fn();
jest.unstable_mockModule('../tools/entity-suggestion.js', () => ({
    getEntitySuggestion: getNativeEntitySuggestion,
}));

const dictionary = {};
const ensureEditorTranslations = jest.fn();
jest.unstable_mockModule('../tools/localize.js', () => ({
    default: jest.fn(() => (key) => dictionary[key] ?? key),
    ensureEditorTranslations,
}));

// Re-imported per test rather than once: the module keeps four caches keyed by
// module id and by source string (warned modules, warned quotas, compiled
// conditions, compiled hooks). Sharing them across tests would make every
// "warned exactly once" assertion depend on no other test ever reusing an id.
let getEntitySuggestion;

const ENTITY = 'light.salon';
const hass = {
    states: {
        [ENTITY]: { state: 'on', attributes: { brightness: 120 } },
        'weather.maison': { state: 'sunny', attributes: { temperature: 25 } },
    },
};

// Registries as Home Assistant exposes them, with every case the area
// helpers have to survive: area through a device, deleted area, hidden and
// diagnostic entities, and a registry entry whose entity has no state.
const registryHass = {
    locale: { language: 'en' },
    states: {
        [ENTITY]: { state: 'on', attributes: { brightness: 120, friendly_name: 'Ceiling' } },
        'light.salon_lamp': { state: 'off', attributes: { friendly_name: 'Amber lamp' } },
        'switch.salon_plug': { state: 'on', attributes: { friendly_name: 'Plug' } },
        'sensor.salon_battery': { state: '80', attributes: { friendly_name: 'Battery' } },
        'light.salon_strip': { state: 'off', attributes: { friendly_name: 'Hidden strip' } },
        'light.cuisine_spots': { state: 'on', attributes: { friendly_name: 'Spots' } },
        'light.living_room_lamp': { state: 'on', attributes: {} },
        'light.orphan': { state: 'on', attributes: { friendly_name: 'Orphan' } },
    },
    entities: {
        [ENTITY]: { entity_id: ENTITY, area_id: 'salon' },
        'light.salon_lamp': { entity_id: 'light.salon_lamp', device_id: 'device_1' },
        'switch.salon_plug': { entity_id: 'switch.salon_plug', area_id: 'salon' },
        'sensor.salon_battery': { entity_id: 'sensor.salon_battery', area_id: 'salon', entity_category: 'diagnostic' },
        'light.salon_strip': { entity_id: 'light.salon_strip', area_id: 'salon', hidden: true },
        'light.salon_ghost': { entity_id: 'light.salon_ghost', area_id: 'salon' },
        'light.cuisine_spots': { entity_id: 'light.cuisine_spots', area_id: 'cuisine' },
        'light.orphan': { entity_id: 'light.orphan', area_id: 'deleted_area' },
    },
    devices: { device_1: { area_id: 'salon' } },
    areas: {
        salon: { area_id: 'salon', name: 'Living room', icon: 'mdi:sofa' },
        cuisine: { area_id: 'cuisine', name: 'Kitchen' },
    },
};

// The sandbox has no access to the test scope, but it does receive the module
// object, which the test owns: the body hands the helpers back through it.
const CAPTURE = 'module.captured = helpers; return null;';
const captureHelpers = (target = registryHass) => {
    const module = { name: 'Probe', suggestions_code: CAPTURE };
    yamlKeysMap.set('probe', module);
    getEntitySuggestion(target, ENTITY);
    return module.captured;
};

const nativeBase = () => ({ config: { card_type: 'button', entity: ENTITY } });
const nativeVariant = () => ({
    label: 'Color temperature',
    config: { card_type: 'button', entity: ENTITY, sub_button: { bottom: [] } },
});

describe('module entity suggestions', () => {
    beforeEach(async () => {
        jest.clearAllMocks();
        // A fresh copy per test: see the note on getEntitySuggestion above.
        jest.resetModules();
        ({ getEntitySuggestion } = await import('./suggestions.js'));
        yamlKeysMap.clear();
        getNativeEntitySuggestion.mockReturnValue([nativeBase(), nativeVariant()]);
        getCachedAggregatedModules.mockReturnValue(null);
    });

    test('returns only the native suggestions when no module declares any', () => {
        yamlKeysMap.set('bubble_neon', { name: 'Neon', code: '...' });

        expect(getEntitySuggestion(hass, ENTITY)).toEqual([nativeBase(), nativeVariant()]);
    });

    test('extends: native twins every native suggestion with the module applied', () => {
        yamlKeysMap.set('bubble_light_card', {
            name: 'Bubble Light Card',
            supported: ['button'],
            suggestions: [{ extends: 'native' }],
        });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(4);
        expect(suggestions[2]).toEqual({
            label: 'Bubble Light Card',
            config: { ...nativeBase().config, modules: ['bubble_light_card'] },
        });
        expect(suggestions[3].label).toBe('Bubble Light Card · Color temperature');
        expect(suggestions[3].config.modules).toEqual(['bubble_light_card']);
        // The native entries are left untouched.
        expect(suggestions[0].config.modules).toBeUndefined();
    });

    test('extends: native respects the supported card types of the module', () => {
        getNativeEntitySuggestion.mockReturnValue([
            { config: { card_type: 'button', entity: ENTITY } },
            { config: { card_type: 'media-player', entity: ENTITY } },
        ]);
        yamlKeysMap.set('bubble_light_card', {
            name: 'Bubble Light Card',
            supported: ['media-player'],
            suggestions: [{ extends: 'native' }],
        });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(3);
        expect(suggestions[2].config.card_type).toBe('media-player');
    });

    test('extends: native merges the config patch over each twin', () => {
        yamlKeysMap.set('weather_forecast', {
            name: 'Weather Forecast',
            suggestions: [
                {
                    extends: 'native',
                    domains: ['light'],
                    config: { weather_forecast: { card_layout: 'background_only' } },
                },
            ],
        });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(4);
        expect(suggestions[2].config.weather_forecast).toEqual({ card_layout: 'background_only' });
        expect(suggestions[2].config.modules).toEqual(['weather_forecast']);
    });

    test('a patch names the picked entity through ${entity}, like a standalone config', () => {
        yamlKeysMap.set('bubble_badges', {
            name: 'Bubble Badges 2',
            suggestions: [
                {
                    extends: 'base',
                    config: {
                        bubble_badges: {
                            badges: [
                                {
                                    target: 'main_icon',
                                    icon: 'mdi:battery-alert',
                                    condition: [{ condition: 'numeric_state', entity_id: '${entity}', below: 20 }],
                                },
                            ],
                        },
                    },
                },
            ],
        });

        const [badge] = getEntitySuggestion(hass, ENTITY).slice(2);

        expect(badge.config.bubble_badges.badges[0].condition[0].entity_id).toBe(ENTITY);
    });

    test('domains and condition gate the rule', () => {
        yamlKeysMap.set('a', { name: 'A', suggestions: [{ extends: 'native', domains: ['weather'] }] });
        yamlKeysMap.set('b', {
            name: 'B',
            suggestions: [{ extends: 'native', condition: 'attributes.brightness > 200' }],
        });
        yamlKeysMap.set('c', {
            name: 'C',
            suggestions: [{ extends: 'native', condition: 'attributes.brightness > 100' }],
        });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        const labels = suggestions.map((s) => s.label);
        expect(labels).not.toContain('A');
        expect(labels).not.toContain('B');
        expect(labels).toContain('C');
    });

    test('a module whose condition throws is skipped without hiding the rest', () => {
        const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
        yamlKeysMap.set('broken', {
            name: 'Broken',
            suggestions: [{ extends: 'native', condition: 'missing.variable' }],
        });
        yamlKeysMap.set('fine', { name: 'Fine', suggestions: [{ extends: 'native' }] });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions.map((s) => s.label)).toContain('Fine');
        expect(suggestions.map((s) => s.label)).not.toContain('Broken');
        expect(warn).toHaveBeenCalledTimes(1);
        warn.mockRestore();
    });

    test('standalone suggestions substitute the entity and register the module', () => {
        yamlKeysMap.set('my_module', {
            name: 'My Module',
            suggestions: [
                {
                    label: 'Fancy tile',
                    domains: ['light'],
                    config: {
                        card_type: 'button',
                        tap_action: {
                            action: 'perform-action',
                            perform_action: 'light.toggle',
                            target: { entity_id: '${entity}' },
                        },
                    },
                },
            ],
        });

        const suggestions = getEntitySuggestion(hass, ENTITY);
        const standalone = suggestions.find((s) => s.label === 'My Module · Fancy tile');

        expect(standalone.config.type).toBe('custom:bubble-card');
        expect(standalone.config.entity).toBe(ENTITY);
        expect(standalone.config.tap_action.target.entity_id).toBe(ENTITY);
        expect(standalone.config.modules).toEqual(['my_module']);
    });

    test('standalone suggestions without a card_type are ignored', () => {
        yamlKeysMap.set('my_module', {
            name: 'My Module',
            suggestions: [{ label: 'Broken', config: { entity: '${entity}' } }],
        });

        expect(getEntitySuggestion(hass, ENTITY)).toEqual([nativeBase(), nativeVariant()]);
    });

    test('duplicated configurations are collapsed and nothing is globally capped', () => {
        yamlKeysMap.set('duplicate', {
            name: 'Duplicate',
            suggestions: [{ label: 'Copy', config: { ...nativeBase().config } }],
        });

        const withDuplicate = getEntitySuggestion(hass, ENTITY);
        // The standalone copy only differs by its modules key, the raw
        // duplicate of the native config would have been dropped.
        expect(withDuplicate.filter((s) => s.config.modules === undefined)).toHaveLength(2);

        yamlKeysMap.clear();
        const many = Array.from({ length: 25 }, (_, i) => ({ config: { card_type: 'button', entity: ENTITY, i } }));
        getNativeEntitySuggestion.mockReturnValue(many);
        expect(getEntitySuggestion(hass, ENTITY)).toHaveLength(25);
    });

    test('no global cap: every module keeps its own share of the list', () => {
        const build = (id) => `return Array.from({ length: 20 }, (_, i) => ({ config: { card_type: 'button', id: '${id}', i } }));`;
        yamlKeysMap.set('gen_a', { name: 'A', suggestions_code: build('a') });
        yamlKeysMap.set('gen_b', { name: 'B', suggestions_code: build('b') });
        yamlKeysMap.set('gen_c', { name: 'C', suggestions_code: build('c') });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(2 + 60);
        for (const id of ['a', 'b', 'c']) {
            expect(suggestions.filter((s) => s.config.id === id)).toHaveLength(20);
        }
    });

    test('extends: base twins only the first tile, once per rule', () => {
        yamlKeysMap.set('weather_forecast', {
            name: 'Bubble Weather',
            suggestions: [
                { extends: 'base', label: 'Default', config: { weather_forecast: { card_layout: 'default' } } },
                { extends: 'base', label: 'Square card', config: { weather_forecast: { card_layout: 'square' } } },
            ],
        });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(4);
        expect(suggestions[2].label).toBe('Bubble Weather · Default');
        expect(suggestions[2].config.weather_forecast).toEqual({ card_layout: 'default' });
        expect(suggestions[3].label).toBe('Bubble Weather · Square card');
        // Both clones derive from the base tile, never from the labeled variant.
        expect(suggestions[3].config.sub_button).toBeUndefined();
    });

    test('classic suggestions are never twinned and the marker never leaks', () => {
        getNativeEntitySuggestion.mockReturnValue([
            { config: { card_type: 'button', entity: ENTITY } },
            { label: 'Button', classic: true, config: { card_type: 'button', entity: ENTITY, button_type: 'state' } },
        ]);
        yamlKeysMap.set('bubble_light_card', {
            name: 'Bubble Light Card',
            suggestions: [{ extends: 'native' }],
        });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(3);
        expect(suggestions[2].label).toBe('Bubble Light Card');
        expect(suggestions.every((suggestion) => !('classic' in suggestion))).toBe(true);
    });

    test('falls back to the aggregated BCT cache when the registry is empty', () => {
        getCachedAggregatedModules.mockReturnValue({
            bubble_light_card: { name: 'Bubble Light Card', suggestions: [{ extends: 'native' }] },
        });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(4);
        expect(suggestions[2].config.modules).toEqual(['bubble_light_card']);
    });

    test('returns null without a state object or without any suggestion', () => {
        expect(getEntitySuggestion(hass, 'light.missing')).toBeNull();

        getNativeEntitySuggestion.mockReturnValue(null);
        expect(getEntitySuggestion(hass, ENTITY)).toBeNull();
    });
});

describe('the suggestions_code hook', () => {
    beforeEach(async () => {
        jest.clearAllMocks();
        // A fresh copy per test: see the note on getEntitySuggestion above.
        jest.resetModules();
        ({ getEntitySuggestion } = await import('./suggestions.js'));
        yamlKeysMap.clear();
        getNativeEntitySuggestion.mockReturnValue([nativeBase(), nativeVariant()]);
        getCachedAggregatedModules.mockReturnValue(null);
    });

    test('accepts an array, a single entry or nothing at all', () => {
        yamlKeysMap.set('gen_list', {
            name: 'List',
            suggestions_code: "return [{ config: { card_type: 'button', v: 1 } }, { config: { card_type: 'button', v: 2 } }];",
        });
        yamlKeysMap.set('gen_one', { name: 'One', suggestions_code: "return { config: { card_type: 'button', v: 3 } };" });
        yamlKeysMap.set('gen_null', { name: 'Null', suggestions_code: 'return null;' });
        yamlKeysMap.set('gen_void', { name: 'Void', suggestions_code: 'return;' });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(5);
        expect(suggestions.slice(2).map((s) => s.config.v)).toEqual([1, 2, 3]);
        expect(suggestions.map((s) => s.label)).not.toContain('Null');
        expect(suggestions.map((s) => s.label)).not.toContain('Void');
    });

    test('the returned config is typed and labeled, never given an entity or the module', () => {
        yamlKeysMap.set('bubble_popup_suggestions', {
            name: 'Auto Pop-up',
            suggestions_code: `return [
                { label: 'Room', config: { card_type: 'pop-up', hash: '#salon' } },
                { config: { card_type: 'button', styled: true } },
            ];`,
        });

        const [, , room, plain] = getEntitySuggestion(hass, ENTITY);

        expect(room.label).toBe('Auto Pop-up · Room');
        expect(room.config).toEqual({ type: 'custom:bubble-card', card_type: 'pop-up', hash: '#salon' });
        // A generated card is standalone: it must survive the module being
        // uninstalled, so nothing is injected behind the author's back.
        expect(room.config.entity).toBeUndefined();
        expect(room.config.modules).toBeUndefined();
        // Without a label of its own an entry carries the module name alone.
        expect(plain.label).toBe('Auto Pop-up');
    });

    test('an entry without an object config carrying a card_type is dropped', () => {
        yamlKeysMap.set('gen_junk', {
            name: 'Junk',
            suggestions_code: `return [
                null,
                'nope',
                { config: null },
                { config: [] },
                { config: { entity: 'light.salon' } },
                { config: { card_type: 'button', kept: true } },
            ];`,
        });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(3);
        expect(suggestions[2].config.kept).toBe(true);
    });

    test('nested cards are left exactly as the module authored them', () => {
        const authored = [
            { type: 'custom:bubble-card', card_type: 'separator', name: 'Lights' },
            { type: 'custom:bubble-card', card_type: 'button', entity: 'light.salon_lamp', modules: ['x'] },
        ];
        yamlKeysMap.set('bubble_popup_suggestions', {
            name: 'Auto Pop-up',
            suggestions_code: `return { config: { card_type: 'pop-up', hash: '#salon', cards: ${JSON.stringify(authored)} } };`,
        });

        const generated = getEntitySuggestion(hass, ENTITY)[2];

        expect(generated.config.cards).toEqual(authored);
        expect(JSON.stringify(generated.config.cards)).toBe(JSON.stringify(authored));
        // Normalization stops at the top level.
        expect(generated.config.cards[0].modules).toBeUndefined();
    });

    test('supported and unsupported are honored', () => {
        const code = `return [
            { config: { card_type: 'button' } },
            { config: { card_type: 'pop-up' } },
        ];`;
        yamlKeysMap.set('gen_supported', { name: 'Supported', supported: ['pop-up'], suggestions_code: code });
        yamlKeysMap.set('gen_unsupported', { name: 'Unsupported', unsupported: ['pop-up'], suggestions_code: code });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(4);
        expect(suggestions[2]).toEqual({
            label: 'Supported',
            config: { type: 'custom:bubble-card', card_type: 'pop-up' },
        });
        expect(suggestions[3].config.card_type).toBe('button');
    });

    test('a body that throws is warned once and never hides the other modules', () => {
        const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
        yamlKeysMap.set('hook_throws', { name: 'Throws', suggestions_code: "throw new Error('boom');" });
        yamlKeysMap.set('hook_fine', { name: 'Fine', suggestions_code: "return { config: { card_type: 'button' } };" });

        getEntitySuggestion(hass, ENTITY);
        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions.map((s) => s.label)).toContain('Fine');
        expect(suggestions.map((s) => s.label)).not.toContain('Throws');
        expect(warn).toHaveBeenCalledTimes(1);
        warn.mockRestore();
    });

    test('a body that does not even compile is warned once', () => {
        const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
        yamlKeysMap.set('hook_syntax', { name: 'Syntax', suggestions_code: 'return {' });
        yamlKeysMap.set('hook_ok', { name: 'Ok', suggestions_code: "return { config: { card_type: 'button' } };" });

        getEntitySuggestion(hass, ENTITY);
        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions.map((s) => s.label)).toContain('Ok');
        expect(warn).toHaveBeenCalledTimes(1);
        warn.mockRestore();
    });

    // Two modules, one unparseable source. warnOnce is keyed by module id so
    // both report, which is what makes the compile cache observable: a cached
    // failure hands the very same Error object to each, a recompile would build
    // a fresh one per module and per picked entity.
    test('a compile failure is produced once per source, not once per call', () => {
        const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
        yamlKeysMap.set('hook_syntax_a', { name: 'A', suggestions_code: 'return {' });
        yamlKeysMap.set('hook_syntax_b', { name: 'B', suggestions_code: 'return {' });

        getEntitySuggestion(hass, ENTITY);

        expect(warn).toHaveBeenCalledTimes(2);
        expect(warn.mock.calls[0][1]).toBeInstanceOf(SyntaxError);
        expect(warn.mock.calls[1][1]).toBe(warn.mock.calls[0][1]);
        warn.mockRestore();
    });

    test('suggestions and suggestions_code coexist, declarative rules first', () => {
        yamlKeysMap.set('both', {
            name: 'Both',
            suggestions: [{ extends: 'base', label: 'Tile' }],
            suggestions_code: "return { label: 'Generated', config: { card_type: 'pop-up' } };",
        });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(4);
        expect(suggestions[2].label).toBe('Both · Tile');
        expect(suggestions[2].config.modules).toEqual(['both']);
        expect(suggestions[3].label).toBe('Both · Generated');
        expect(suggestions[3].config.modules).toBeUndefined();
    });

    test('a module cannot exceed its own quota, and its author is warned once', () => {
        const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
        yamlKeysMap.set('greedy', {
            name: 'Greedy',
            suggestions: [{ extends: 'native' }],
            suggestions_code: "return Array.from({ length: 30 }, (_, i) => ({ config: { card_type: 'button', i } }));",
        });
        yamlKeysMap.set('modest', { name: 'Modest', suggestions_code: "return { config: { card_type: 'pop-up' } };" });

        getEntitySuggestion(hass, ENTITY);
        const suggestions = getEntitySuggestion(hass, ENTITY);

        const greedy = suggestions.filter((s) => (s.label || '').startsWith('Greedy'));
        expect(greedy).toHaveLength(24);
        // The quota counts the declarative rules and the code hook together,
        // and truncates the tail of that module only.
        expect(greedy.filter((s) => s.config.modules !== undefined)).toHaveLength(2);
        // Every other module keeps its own share.
        expect(suggestions.map((s) => s.label)).toContain('Modest');
        expect(warn).toHaveBeenCalledTimes(1);
        expect(warn.mock.calls[0][0]).toContain('"greedy"');
        warn.mockRestore();
    });

    test('the hook also runs for modules read from the aggregated BCT cache', () => {
        getCachedAggregatedModules.mockReturnValue({
            cached_module: { name: 'Cached', suggestions_code: "return { config: { card_type: 'pop-up' } };" },
        });

        const suggestions = getEntitySuggestion(hass, ENTITY);

        expect(suggestions).toHaveLength(3);
        expect(suggestions[2].label).toBe('Cached');
    });
});

describe('the helpers handed to a code hook', () => {
    beforeEach(async () => {
        jest.clearAllMocks();
        // A fresh copy per test: see the note on getEntitySuggestion above.
        jest.resetModules();
        ({ getEntitySuggestion } = await import('./suggestions.js'));
        yamlKeysMap.clear();
        getNativeEntitySuggestion.mockReturnValue([nativeBase(), nativeVariant()]);
        getCachedAggregatedModules.mockReturnValue(null);
    });

    test('t translates a key and substitutes its parameters', () => {
        dictionary['editor.test.room_controls'] = '{area} controls';
        const helpers = captureHelpers();

        expect(helpers.t('editor.test.room_controls', { area: 'Living room' })).toBe('Living room controls');
        expect(helpers.t('editor.test.room_controls')).toBe('{area} controls');
        expect(helpers.t('editor.test.unknown')).toBe('editor.test.unknown');
    });

    test('domainOf and friendlyName', () => {
        const helpers = captureHelpers();

        expect(helpers.domainOf(ENTITY)).toBe('light');
        expect(helpers.domainOf('no_domain')).toBe('');
        expect(helpers.domainOf(undefined)).toBe('');

        expect(helpers.friendlyName(ENTITY)).toBe('Ceiling');
        expect(helpers.friendlyName('light.living_room_lamp')).toBe('living room lamp');
        expect(helpers.friendlyName('light.not_here')).toBe('not here');
    });

    test('areaOf resolves through the device and never leaks a deleted area', () => {
        const helpers = captureHelpers();

        expect(helpers.areaOf(ENTITY)).toBe('salon');
        expect(helpers.areaOf('light.salon_lamp')).toBe('salon');
        expect(helpers.areaOf('light.orphan')).toBeNull();
        expect(helpers.areaOf('light.unknown')).toBeNull();
    });

    test('areaName and areas', () => {
        const helpers = captureHelpers();

        expect(helpers.areaName('salon')).toBe('Living room');
        expect(helpers.areaName('deleted_area')).toBe('deleted_area');
        expect(helpers.areas()).toEqual([
            { area_id: 'cuisine', name: 'Kitchen', icon: null },
            { area_id: 'salon', name: 'Living room', icon: 'mdi:sofa' },
        ]);
    });

    test('areaEntities filters and sorts by friendly name', () => {
        const helpers = captureHelpers();

        // Hidden, diagnostic and stateless entities are out by default.
        expect(helpers.areaEntities('salon')).toEqual(['light.salon_lamp', ENTITY, 'switch.salon_plug']);
        expect(helpers.areaEntities('salon', { domains: ['light'] })).toEqual(['light.salon_lamp', ENTITY]);
        expect(helpers.areaEntities('salon', { includeHidden: true })).toEqual([
            'light.salon_lamp',
            ENTITY,
            'light.salon_strip',
            'switch.salon_plug',
        ]);
        expect(helpers.areaEntities('salon', { includeDiagnostic: true })).toEqual([
            'light.salon_lamp',
            'sensor.salon_battery',
            ENTITY,
            'switch.salon_plug',
        ]);
        expect(helpers.areaEntities('cuisine')).toEqual(['light.cuisine_spots']);
        expect(helpers.areaEntities('deleted_area')).toEqual([]);
        expect(helpers.areaEntities()).toEqual([]);
    });

    test('nativeSuggestions returns a copy that keeps the classic marker', () => {
        getNativeEntitySuggestion.mockReturnValue([
            nativeBase(),
            { label: 'Button', classic: true, config: { card_type: 'button', button_type: 'state' } },
        ]);
        const helpers = captureHelpers();

        const recipes = helpers.nativeSuggestions(ENTITY);
        expect(recipes).toHaveLength(2);
        expect(recipes[1].classic).toBe(true);

        recipes[0].config.entity = 'light.mutated';
        expect(helpers.nativeSuggestions(ENTITY)[0].config.entity).toBe(ENTITY);
    });

    test('every helper survives the registries not being loaded yet', () => {
        const helpers = captureHelpers(hass);

        expect(helpers.areaOf(ENTITY)).toBeNull();
        expect(helpers.areaName('salon')).toBe('salon');
        expect(helpers.areas()).toEqual([]);
        expect(helpers.areaEntities('salon')).toEqual([]);
        expect(helpers.areaEntities('salon', { domains: ['light'], includeHidden: true })).toEqual([]);
        expect(helpers.friendlyName(ENTITY)).toBe('salon');
        expect(helpers.domainOf(ENTITY)).toBe('light');
        expect(helpers.t('editor.test.unknown')).toBe('editor.test.unknown');

        getNativeEntitySuggestion.mockReturnValue(null);
        expect(helpers.nativeSuggestions('light.missing')).toEqual([]);
    });

    // The registry keys modules by an id that lives outside the value, so a hook
    // has no other handle on its own identity. Without it the one documented way
    // for a styling module to apply itself emits `modules: [undefined]`.
    test('a hook knows the id it is registered under', () => {
        yamlKeysMap.set('my_module', {
            name: 'My Module',
            suggestions_code: "return { config: { card_type: 'button', entity, modules: [module.id] } };",
        });

        const suggestion = getEntitySuggestion(hass, ENTITY).find((s) => s.label === 'My Module');

        expect(suggestion.config.modules).toEqual(['my_module']);
    });

    test('a room pop-up generated from the area of the picked entity', () => {
        yamlKeysMap.set('bubble_popup_suggestions', {
            name: 'Auto Pop-up',
            suggestions_code: `
                const area = helpers.areaOf(entity);
                if (!area) return null;
                const ids = helpers.areaEntities(area, { domains: ['light', 'switch'] });
                return {
                    label: helpers.areaName(area),
                    config: {
                        card_type: 'pop-up',
                        hash: '#' + area,
                        name: helpers.areaName(area),
                        cards: ids.map((id) => ({
                            type: 'custom:bubble-card',
                            card_type: 'button',
                            entity: id,
                            name: helpers.friendlyName(id),
                        })),
                    },
                };
            `,
        });

        const generated = getEntitySuggestion(registryHass, ENTITY)[2];

        expect(generated.label).toBe('Auto Pop-up · Living room');
        expect(generated.config.type).toBe('custom:bubble-card');
        expect(generated.config.hash).toBe('#salon');
        expect(generated.config.cards.map((card) => card.entity)).toEqual([
            'light.salon_lamp',
            ENTITY,
            'switch.salon_plug',
        ]);
        expect(generated.config.cards[0].name).toBe('Amber lamp');
    });
});

import { beforeEach, describe, expect, jest, test } from '@jest/globals';

const yamlKeysMap = new Map();
jest.unstable_mockModule('./registry.js', () => ({ yamlKeysMap, moduleSourceMap: new Map() }));

const getCachedAggregatedModules = jest.fn(() => null);
jest.unstable_mockModule('./bct-provider.js', () => ({ getCachedAggregatedModules }));

const getNativeEntitySuggestion = jest.fn();
jest.unstable_mockModule('../tools/entity-suggestion.js', () => ({
    getEntitySuggestion: getNativeEntitySuggestion,
}));

const { getEntitySuggestion } = await import('./suggestions.js');

const ENTITY = 'light.salon';
const hass = {
    states: {
        [ENTITY]: { state: 'on', attributes: { brightness: 120 } },
        'weather.maison': { state: 'sunny', attributes: { temperature: 25 } },
    },
};

const nativeBase = () => ({ config: { card_type: 'button', entity: ENTITY } });
const nativeVariant = () => ({
    label: 'Color temperature',
    config: { card_type: 'button', entity: ENTITY, sub_button: { bottom: [] } },
});

describe('module entity suggestions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
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

    test('duplicated configurations are collapsed and the list is capped', () => {
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
        expect(getEntitySuggestion(hass, ENTITY)).toHaveLength(20);
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

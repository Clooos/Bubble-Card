import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// The generated configurations are validated against the real
// BubbleCard.setConfig, so the element module is imported with every card
// handler mocked, mirroring the harness of bubble-card.test.js.
jest.unstable_mockModule('../var/version.js', () => ({ version: 'test' }));
jest.unstable_mockModule('../tools/init.js', () => ({ initializeContent: jest.fn() }));
jest.unstable_mockModule('../tools/tap-actions.js', () => ({ cleanupTapActions: jest.fn() }));
jest.unstable_mockModule('../modules/registry.js', () => ({ preloadYAMLStyles: jest.fn() }));
jest.unstable_mockModule('../tools/style.js', () => ({ createBubbleDefaultColor: jest.fn() }));
jest.unstable_mockModule('../cards/pop-up/backdrop.js', () => ({ updateThemeBackgroundColor: jest.fn() }));
jest.unstable_mockModule('../tools/utils.js', () => ({ invalidateStyleCache: jest.fn(), stopTimerInterval: jest.fn() }));
jest.unstable_mockModule('../tools/text-scrolling.js', () => ({ cleanupScrollingEffects: jest.fn(), resumeScrollingEffects: jest.fn() }));
jest.unstable_mockModule('../components/sub-button/outline.js', () => ({
    cancelSubButtonOutlines: jest.fn(),
    scheduleSubButtonOutlines: jest.fn(),
}));
jest.unstable_mockModule('../modules/suggestions.js', () => ({ getEntitySuggestion: jest.fn() }));
jest.unstable_mockModule('../cards/pop-up/helpers.js', () => ({
    registerPopupContext: jest.fn(),
    shouldHoldDashboardHassUpdate: jest.fn(() => false),
}));
jest.unstable_mockModule('../cards/pop-up/migration.js', () => ({ maybeShowMigrationNotice: jest.fn() }));
jest.unstable_mockModule('../tools/icon.js', () => ({
    registerForIconRefresh: jest.fn(),
    unregisterForIconRefresh: jest.fn(),
}));
jest.unstable_mockModule('../editor/bubble-card-editor.js', () => ({ default: class {} }));
jest.unstable_mockModule('../cards/pop-up/index.js', () => ({ cleanupPopUp: jest.fn(), handlePopUp: jest.fn() }));
jest.unstable_mockModule('../cards/button/index.js', () => ({ handleButton: jest.fn() }));
jest.unstable_mockModule('../cards/sub-buttons/index.js', () => ({ handleSubButtons: jest.fn() }));
jest.unstable_mockModule('../cards/separator/index.js', () => ({ handleSeparator: jest.fn() }));
jest.unstable_mockModule('../cards/cover/index.js', () => ({ handleCover: jest.fn() }));
jest.unstable_mockModule('../cards/empty-column/index.js', () => ({ handleEmptyColumn: jest.fn() }));
jest.unstable_mockModule('../cards/horizontal-buttons-stack/index.js', () => ({ handleHorizontalButtonsStack: jest.fn() }));
jest.unstable_mockModule('../cards/calendar/index.js', () => ({ handleCalendar: jest.fn() }));
jest.unstable_mockModule('../cards/media-player/index.js', () => ({ handleMediaPlayer: jest.fn() }));
jest.unstable_mockModule('../cards/select/index.js', () => ({ handleSelect: jest.fn() }));
jest.unstable_mockModule('../cards/climate/index.js', () => ({ handleClimate: jest.fn() }));

global.HTMLElement = class {};
const definedElements = {};
global.customElements = { define: jest.fn((name, cls) => { definedElements[name] = cls; }) };
global.window = {
    customCards: [],
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    history: {},
};
global.document = {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    querySelector: jest.fn(() => null),
};

await import('../bubble-card.js');
const BubbleCard = definedElements['bubble-card'];

const { getEntitySuggestion } = await import('./entity-suggestion.js');

// A state fixture for every supported domain: getEntitySuggestion only looks
// at the entity id and its attributes.
const STATES = {
    'light.dimmable': { state: 'on', attributes: { supported_color_modes: ['brightness'] } },
    'light.onoff': { state: 'off', attributes: { supported_color_modes: ['onoff'] } },
    'light.full': {
        state: 'on',
        attributes: { supported_color_modes: ['color_temp', 'hs'], effect_list: ['rainbow'] },
    },
    'switch.a': { state: 'on', attributes: {} },
    'input_boolean.a': { state: 'on', attributes: {} },
    'automation.a': { state: 'on', attributes: {} },
    'remote.a': { state: 'on', attributes: {} },
    'siren.a': { state: 'off', attributes: {} },
    'humidifier.a': { state: 'off', attributes: {} },
    'fan.speed': { state: 'on', attributes: { supported_features: 1 } },
    'fan.basic': { state: 'on', attributes: { supported_features: 0 } },
    'cover.position': { state: 'open', attributes: { supported_features: 15 } },
    'cover.basic': { state: 'open', attributes: { supported_features: 11 } },
    'cover.tilt': { state: 'open', attributes: { supported_features: 255 } },
    'climate.basic': { state: 'heat', attributes: { hvac_modes: ['off', 'heat'] } },
    'climate.preset': { state: 'heat', attributes: { hvac_modes: ['off', 'heat'], preset_modes: ['eco'] } },
    'media_player.basic': { state: 'playing', attributes: {} },
    'media_player.source': { state: 'playing', attributes: { source_list: ['TV', 'HDMI'] } },
    'input_number.a': { state: '5', attributes: {} },
    'number.a': { state: '5', attributes: {} },
    'input_select.a': { state: 'x', attributes: { options: ['x', 'y'] } },
    'select.a': { state: 'x', attributes: { options: ['x', 'y'] } },
    'scene.a': { state: 'scening', attributes: {} },
    'script.a': { state: 'off', attributes: {} },
    'button.a': { state: 'unknown', attributes: {} },
    'input_button.a': { state: 'unknown', attributes: {} },
    'vacuum.battery': { state: 'docked', attributes: { battery_level: 80 } },
    'vacuum.nobattery': { state: 'docked', attributes: {} },
    'lawn_mower.a': { state: 'docked', attributes: { battery_level: 50 } },
    'timer.a': { state: 'idle', attributes: {} },
    'update.installable': { state: 'on', attributes: { supported_features: 1 } },
    'update.readonly': { state: 'on', attributes: { supported_features: 0 } },
    'sensor.a': { state: '21.5', attributes: {} },
    'binary_sensor.a': { state: 'off', attributes: {} },
    'person.a': { state: 'home', attributes: {} },
    'device_tracker.a': { state: 'home', attributes: {} },
    'input_text.a': { state: 'hello', attributes: {} },
    'input_datetime.a': { state: '2026-08-06', attributes: {} },
    'todo.a': { state: '3', attributes: {} },
    'weather.basic': { state: 'sunny', attributes: { temperature: 25 } },
    'weather.humidity': { state: 'sunny', attributes: { temperature: 25, humidity: 40 } },
    'lock.a': { state: 'locked', attributes: {} },
    'calendar.a': { state: 'off', attributes: {} },
};

const hass = { states: STATES };

function suggestionsFor(entityId) {
    const suggestions = getEntitySuggestion(hass, entityId);
    expect(suggestions).not.toBeNull();
    return suggestions;
}

// Collects every entity reference of a config: `entity`/`entity_id` keys and
// visibility conditions, wherever they sit.
function collectEntityRefs(value, refs = []) {
    if (Array.isArray(value)) {
        value.forEach((item) => collectEntityRefs(item, refs));
    } else if (value && typeof value === 'object') {
        for (const [key, item] of Object.entries(value)) {
            if ((key === 'entity' || key === 'entity_id') && typeof item === 'string') refs.push(item);
            else collectEntityRefs(item, refs);
        }
    }
    return refs;
}

describe('getEntitySuggestion', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('returns null for unknown entities and uncovered domains', () => {
        expect(getEntitySuggestion(hass, 'light.missing')).toBeNull();
        expect(getEntitySuggestion({ states: { 'zone.home': { state: '0', attributes: {} } } }, 'zone.home')).toBeNull();
        expect(getEntitySuggestion(undefined, 'light.dimmable')).toBeNull();
    });

    test('every suggestion of every domain passes setConfig', () => {
        for (const entityId of Object.keys(STATES)) {
            for (const { config } of suggestionsFor(entityId)) {
                const card = new BubbleCard();
                expect(() => card.setConfig(config)).not.toThrow();
            }
        }
    });

    test('every entity reference points to the picked entity', () => {
        for (const entityId of Object.keys(STATES)) {
            for (const { config } of suggestionsFor(entityId)) {
                const refs = collectEntityRefs(config);
                expect(refs.length).toBeGreaterThan(0);
                expect(new Set(refs)).toEqual(new Set([entityId]));
            }
        }
    });

    test('every suggestion ships the validated tile grid size', () => {
        for (const entityId of Object.keys(STATES)) {
            for (const { config } of suggestionsFor(entityId)) {
                expect(config.grid_options).toEqual({ rows: '1.656', columns: 6 });
                expect(config.type).toBe('custom:bubble-card');
            }
        }
    });

    test('base suggestions carry no label, variants carry one', () => {
        for (const entityId of Object.keys(STATES)) {
            const suggestions = suggestionsFor(entityId);
            expect(suggestions[0].label).toBeUndefined();
            suggestions.slice(1).forEach((variant) => expect(typeof variant.label).toBe('string'));
        }
    });

    test('lights follow their capabilities', () => {
        const dimmable = suggestionsFor('light.dimmable');
        expect(dimmable).toHaveLength(1);
        expect(dimmable[0].config.sub_button.bottom[0].group[0].sub_button_type).toBe('slider');

        const onoff = suggestionsFor('light.onoff');
        expect(onoff).toHaveLength(1);
        expect(onoff[0].config.sub_button.bottom[0].group[0].name).toBe('Power');

        const full = suggestionsFor('light.full');
        expect(full).toHaveLength(3);
        expect(full.map((s) => s.label)).toEqual([undefined, 'Color temperature', 'Effect']);
        expect(full[1].config.sub_button.bottom[0].group[1].light_slider_type).toBe('white_temp');
        expect(full[2].config.sub_button.bottom[0].group[0].select_attribute).toBe('effect_list');
    });

    test('covers expose position and tilt only when supported', () => {
        const basic = suggestionsFor('cover.basic');
        expect(basic).toHaveLength(1);
        expect(basic[0].config.sub_button).toBeUndefined();

        const position = suggestionsFor('cover.position');
        expect(position).toHaveLength(1);
        expect(position[0].config.sub_button.main[0].group[0].name).toBe('Position');

        const tilt = suggestionsFor('cover.tilt');
        expect(tilt).toHaveLength(2);
        expect(tilt[1].label).toBe('Tilt position');
        expect(tilt[1].config.tilt_buttons).toBe('hidden');
        expect(tilt[1].config.sub_button.main[0].group[0].cover_slider_type).toBe('tilt_position');
    });

    test('climate, media player and weather gate their variants on attributes', () => {
        expect(suggestionsFor('climate.basic')).toHaveLength(1);
        const preset = suggestionsFor('climate.preset');
        expect(preset).toHaveLength(2);
        expect(preset[1].label).toBe('Preset mode');
        expect(preset[1].config.sub_button.bottom[0].group[0].select_attribute).toBe('preset_modes');

        expect(suggestionsFor('media_player.basic')).toHaveLength(1);
        const source = suggestionsFor('media_player.source');
        expect(source).toHaveLength(2);
        expect(source[1].label).toBe('Source');
        expect(source[1].config.hide.volume_button).toBe(true);

        expect(suggestionsFor('weather.basic')).toHaveLength(1);
        const humidity = suggestionsFor('weather.humidity');
        expect(humidity).toHaveLength(2);
        expect(humidity[1].label).toBe('Humidity');
        expect(humidity[1].config.sub_button.main[0].group[0].attribute).toBe('humidity');
    });

    test('fans and updates degrade gracefully without the feature bit', () => {
        expect(suggestionsFor('fan.speed')[0].config.sub_button.bottom[0].group[0].sub_button_type).toBe('slider');
        expect(suggestionsFor('fan.basic')[0].config.sub_button.bottom[0].group[0].name).toBe('Power');

        expect(suggestionsFor('update.installable')[0].config.sub_button.bottom[0].group[0].name).toBe('Install');
        expect(suggestionsFor('update.readonly')[0].config.sub_button.bottom[0].group[0].name).toBe('Highlight');
    });

    test('vacuums only show the battery attribute when they report one', () => {
        expect(suggestionsFor('vacuum.battery')[0].config.attribute).toBe('battery_level');
        expect(suggestionsFor('vacuum.nobattery')[0].config.attribute).toBeUndefined();
    });

    test('calendars target the entities list instead of a single entity', () => {
        const [{ config }] = suggestionsFor('calendar.a');
        expect(config.card_type).toBe('calendar');
        expect(config.entity).toBeUndefined();
        expect(config.entities).toEqual([{ entity: 'calendar.a' }]);
    });
});

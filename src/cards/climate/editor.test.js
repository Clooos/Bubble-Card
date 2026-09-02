import { describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('lit', () => ({
    html: jest.fn(() => ''),
}));

jest.unstable_mockModule('../../tools/localize.js', () => ({
    default: () => (key) => key,
}));

const { renderClimateEditor } = await import('./editor.js');

const CLIMATE_ENTITY = 'climate.living_room';

function makeHass(attributes = { hvac_modes: ['off', 'heat', 'cool'] }) {
    return {
        states: {
            [CLIMATE_ENTITY]: { state: 'heat', attributes },
        },
    };
}

// Minimal stand-in for the Bubble Card editor element: only what the climate
// editor template touches while it is being evaluated.
function makeEditor(config, hass = makeHass()) {
    return {
        _config: { ...config },
        hass,
        cardTypeList: [],
        _computeLabelCallback: () => '',
        _optionalLabel: (label) => label,
        _valueChanged: jest.fn(),
        makeDropdown: jest.fn(),
        makeShowState: jest.fn(),
        makeSubButtonPanel: jest.fn(),
        makeActionPanel: jest.fn(),
        makeLayoutPanel: jest.fn(),
        makeStyleEditor: jest.fn(),
        makeModulesEditor: jest.fn(),
        makeVersion: jest.fn(),
    };
}

// Reopening a card always creates a fresh editor instance, so a new stub is the
// faithful way to replay "save, then edit the card again".
function reopenEditor(config, hass = makeHass()) {
    const editor = makeEditor(config, hass);
    renderClimateEditor(editor);
    return editor;
}

describe('climate editor default sub-button seeding', () => {
    test('seeds the HVAC modes menu on a card that has no sub_button key', () => {
        const editor = makeEditor({ card_type: 'climate', entity: CLIMATE_ENTITY });

        renderClimateEditor(editor);

        expect(editor._config.sub_button.main).toHaveLength(1);
        expect(editor._config.sub_button.main[0]).toMatchObject({
            select_attribute: 'hvac_modes',
        });
    });

    test('seeds as soon as the entity is picked, whenever that happens', () => {
        const editor = makeEditor({ card_type: 'climate' });

        // Card type picked first, no entity yet: nothing to seed.
        renderClimateEditor(editor);
        expect(editor._config.sub_button).toBeUndefined();

        editor._config.entity = CLIMATE_ENTITY;
        renderClimateEditor(editor);

        expect(editor._config.sub_button.main).toHaveLength(1);
    });

    test('seeds again if the editor config is replaced before the seed is saved', () => {
        // The dialog round-trips its own config back into the editor, which
        // drops anything the render pass added; the next render must restore it.
        const editor = makeEditor({ card_type: 'climate', entity: CLIMATE_ENTITY });

        renderClimateEditor(editor);
        editor._config = { card_type: 'climate', entity: CLIMATE_ENTITY };
        renderClimateEditor(editor);

        expect(editor._config.sub_button.main).toHaveLength(1);
    });

    test('does not seed anything when the entity has no hvac_modes', () => {
        const editor = makeEditor({ card_type: 'climate' }, makeHass({}));

        renderClimateEditor(editor);
        editor._config.entity = CLIMATE_ENTITY;
        renderClimateEditor(editor);

        expect(editor._config.sub_button).toBeUndefined();
    });

    test('keeps the list empty after the user removed every sub-button (#2176, #2456)', () => {
        // Saved config of a card emptied on purpose: the sub-button editor
        // leaves an explicit empty list behind on climate cards.
        const savedConfig = {
            card_type: 'climate',
            entity: CLIMATE_ENTITY,
            sub_button: { main: [] },
        };

        const editor = reopenEditor(savedConfig);

        expect(editor._config.sub_button).toEqual({ main: [] });
    });

    test('keeps the list empty across repeated edits and entity changes', () => {
        const hass = {
            states: {
                [CLIMATE_ENTITY]: { state: 'heat', attributes: { hvac_modes: ['off', 'heat'] } },
                'climate.bedroom': { state: 'off', attributes: { hvac_modes: ['off', 'cool'] } },
            },
        };
        const savedConfig = {
            card_type: 'climate',
            entity: CLIMATE_ENTITY,
            sub_button: { main: [] },
        };

        const editor = reopenEditor(savedConfig, hass);
        editor._config.entity = 'climate.bedroom';
        renderClimateEditor(editor);
        reopenEditor(editor._config, hass);

        expect(editor._config.sub_button).toEqual({ main: [] });
    });

    test('does not seed on top of sub-buttons the user configured', () => {
        const savedConfig = {
            card_type: 'climate',
            entity: CLIMATE_ENTITY,
            sub_button: { bottom: [{ name: 'Boost' }] },
        };

        const editor = reopenEditor(savedConfig);

        expect(editor._config.sub_button.main).toBeUndefined();
        expect(editor._config.sub_button.bottom).toHaveLength(1);
    });

    test('keeps sub-button indexes stable across two editing sessions (#2456)', () => {
        const savedConfig = {
            card_type: 'climate',
            entity: CLIMATE_ENTITY,
            sub_button: { bottom: [{ name: 'Boost' }, { name: 'Eco' }] },
        };

        const first = reopenEditor(savedConfig);
        const second = reopenEditor(savedConfig);

        expect(second._config.sub_button).toEqual(first._config.sub_button);
        expect(second._config.sub_button).toEqual(savedConfig.sub_button);
    });

    test('never fires a config change on its own', () => {
        const editor = makeEditor({ card_type: 'climate', entity: CLIMATE_ENTITY });

        renderClimateEditor(editor);

        expect(editor._valueChanged).not.toHaveBeenCalled();
    });
});

describe('the modes menu of the other domains the card drives', () => {
    function makeDomainEditor(entity, attributes) {
        return makeEditor(
            { card_type: 'climate', entity },
            { states: { [entity]: { state: 'on', attributes } } },
        );
    }

    test('a humidifier is seeded from its available modes (#2384, #936)', () => {
        const editor = makeDomainEditor('humidifier.bedroom', { available_modes: ['normal', 'eco'] });

        renderClimateEditor(editor);

        expect(editor._config.sub_button.main).toHaveLength(1);
        expect(editor._config.sub_button.main[0]).toMatchObject({
            select_attribute: 'available_modes',
        });
    });

    test('a water heater is seeded from its operation list (#2060)', () => {
        const editor = makeDomainEditor('water_heater.boiler', { operation_list: ['eco', 'off'] });

        renderClimateEditor(editor);

        expect(editor._config.sub_button.main).toHaveLength(1);
        expect(editor._config.sub_button.main[0]).toMatchObject({
            select_attribute: 'operation_list',
        });
    });

    test('an entity with no modes at all is left alone', () => {
        const editor = makeDomainEditor('humidifier.bedroom', { humidity: 50 });

        renderClimateEditor(editor);

        expect(editor._config.sub_button).toBeUndefined();
    });

    test('the hvac modes of a thermostat are not looked for on a humidifier', () => {
        // Nothing but hvac_modes, which a humidifier never has: seeding it would
        // build a dropdown calling a service the entity does not support.
        const editor = makeDomainEditor('humidifier.bedroom', { hvac_modes: ['off', 'heat'] });

        renderClimateEditor(editor);

        expect(editor._config.sub_button).toBeUndefined();
    });
});

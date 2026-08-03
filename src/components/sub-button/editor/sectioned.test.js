import { describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('lit', () => ({
    html: jest.fn(() => ''),
}));

jest.unstable_mockModule('../../../editor/utils.js', () => ({
    getLazyLoadedPanelContent: jest.fn(() => ''),
    renderDropdown: jest.fn(() => ''),
    tTemplate: jest.fn(() => ''),
}));

jest.unstable_mockModule('../../../tools/localize.js', () => ({
    default: () => (key) => key,
}));

jest.unstable_mockModule('./utils.js', () => ({
    makeUnifiedSubButtonEditor: jest.fn(() => ''),
    createCopyHandler: jest.fn(() => jest.fn()),
    createCutHandler: jest.fn(() => jest.fn()),
    createRemoveHandler: jest.fn(() => jest.fn()),
    createMoveHandler: jest.fn(() => jest.fn()),
    createPasteHandler: jest.fn(() => jest.fn()),
    createGroupButtonPasteHandler: jest.fn(() => jest.fn()),
    getPasteButtonText: jest.fn(() => ''),
    convertIndividualButtonsToGroup: jest.fn((arr) => arr),
}));

jest.unstable_mockModule('./clipboard.js', () => ({
    loadSubButtonClipboard: jest.fn(() => null),
    saveSubButtonClipboard: jest.fn(),
}));

// Real behaviour of the schema helpers: the panel logic depends on it.
jest.unstable_mockModule('../utils.js', () => ({
    isNewSubButtonsSchema: (raw) => !!raw && !Array.isArray(raw) && (Array.isArray(raw.main) || Array.isArray(raw.bottom)),
    convertOldToNewSubButtons: (raw) => ({ main: Array.isArray(raw) ? raw.map((i) => ({ ...i })) : [], bottom: [] }),
    ensureNewSubButtonsSchemaObject: (config) => {
        const raw = config?.sub_button;
        if (raw && !Array.isArray(raw) && (Array.isArray(raw.main) || Array.isArray(raw.bottom))) {
            return {
                main: Array.isArray(raw.main) ? [...raw.main] : [],
                bottom: Array.isArray(raw.bottom) ? [...raw.bottom] : [],
            };
        }
        return { main: Array.isArray(raw) ? [...raw] : [], bottom: [] };
    },
}));

global.window = { isSectionView: false };

const { getEmptySubButtonValue, makeSectionedSubButtonsPanel } = await import('./sectioned.js');
const { renderClimateEditor } = await import('../../../cards/climate/editor.js');

function makeEditor(config) {
    return {
        _config: { ...config },
        hass: { states: {} },
        _expandedPanelStates: {},
        _clipboardButton: null,
        _computeLabelCallback: () => '',
        _optionalLabel: (label) => label,
        _valueChanged: jest.fn(),
        _renderConditionalContent: jest.fn(() => ''),
        _removeRowsOverrideAndRecalculate: jest.fn(),
        makeDropdown: jest.fn(() => ''),
        requestUpdate: jest.fn(),
    };
}

describe('what an emptied sub-button list leaves in the config', () => {
    test('climate cards keep an explicit empty list (#2176, #2456)', () => {
        // Without it the editor cannot tell an emptied list from a brand new
        // card, and the default HVAC modes menu is added back on every edit.
        expect(getEmptySubButtonValue('climate')).toEqual({ main: [] });
    });

    test('other card types still drop the key entirely', () => {
        expect(getEmptySubButtonValue('button')).toBeUndefined();
        expect(getEmptySubButtonValue('sub-buttons')).toBeUndefined();
        expect(getEmptySubButtonValue(undefined)).toBeUndefined();
    });
});

describe('sub-button panel rendering', () => {
    test('does not add a sub_button key to a card that has none (#2176, #2456)', () => {
        // Rendering must not look like the user configured sub-buttons: the
        // climate editor reads that very key to decide whether the card is new.
        const editor = makeEditor({ card_type: 'climate', entity: 'climate.living_room' });

        makeSectionedSubButtonsPanel(editor);

        expect(editor._config.sub_button).toBeUndefined();
    });

    test('leaves an emptied list untouched', () => {
        const editor = makeEditor({
            card_type: 'climate',
            entity: 'climate.living_room',
            sub_button: { main: [] },
        });

        makeSectionedSubButtonsPanel(editor);

        expect(editor._config.sub_button).toEqual({ main: [] });
    });

    test('still migrates the legacy inline array schema', () => {
        const editor = makeEditor({
            card_type: 'button',
            entity: 'light.kitchen',
            sub_button: [{ name: 'Boost' }],
        });

        makeSectionedSubButtonsPanel(editor);

        expect(editor._config.sub_button).toEqual({ main: [{ name: 'Boost' }], bottom: [] });
    });

    test('normalizes a sub_button that is not in the sectioned schema', () => {
        const editor = makeEditor({
            card_type: 'button',
            entity: 'light.kitchen',
            sub_button: {},
        });

        makeSectionedSubButtonsPanel(editor);

        expect(editor._config.sub_button).toEqual({ main: [], bottom: [] });
    });
});

// The climate editor and the sub-button panel render together: the panel used
// to create the sub_button key first, which made every card look configured.
describe('climate card creation with the real sub-button panel', () => {
    const CLIMATE_ENTITY = 'climate.living_room';

    function makeClimateEditor(config) {
        const editor = makeEditor(config);
        editor.hass = {
            states: { [CLIMATE_ENTITY]: { state: 'heat', attributes: { hvac_modes: ['off', 'heat'] } } },
        };
        editor.cardTypeList = [];
        editor.makeShowState = jest.fn(() => '');
        editor.makeActionPanel = jest.fn(() => '');
        editor.makeLayoutPanel = jest.fn(() => '');
        editor.makeStyleEditor = jest.fn(() => '');
        editor.makeModulesEditor = jest.fn(() => '');
        editor.makeVersion = jest.fn(() => '');
        editor.makeSubButtonPanel = () => makeSectionedSubButtonsPanel(editor);
        return editor;
    }

    test('the default HVAC modes menu still appears on a new card (#2176, #2456)', () => {
        const editor = makeClimateEditor({ card_type: 'climate' });

        // Card type picked, entity not chosen yet.
        renderClimateEditor(editor);
        expect(editor._config.sub_button).toBeUndefined();

        // Entity picked: the menu is proposed on this render.
        editor._config.entity = CLIMATE_ENTITY;
        renderClimateEditor(editor);

        expect(editor._config.sub_button.main).toHaveLength(1);
        expect(editor._config.sub_button.main[0]).toMatchObject({ select_attribute: 'hvac_modes' });
    });

    test('an emptied card stays empty when reopened', () => {
        const savedConfig = {
            card_type: 'climate',
            entity: CLIMATE_ENTITY,
            sub_button: getEmptySubButtonValue('climate'),
        };
        const editor = makeClimateEditor(savedConfig);

        renderClimateEditor(editor);
        renderClimateEditor(editor);

        expect(editor._config.sub_button).toEqual({ main: [] });
    });
});

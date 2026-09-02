import { beforeEach, describe, expect, jest, test } from '@jest/globals';

const isHashOnCurrentPage = jest.fn(() => false);

jest.unstable_mockModule('lit', () => ({
    html: jest.fn(),
}));

jest.unstable_mockModule('../../tools/utils.js', () => ({
    fireEvent: jest.fn(),
}));

jest.unstable_mockModule('../button/editor.js', () => ({
    renderButtonEditor: jest.fn(),
}));

jest.unstable_mockModule('./navigation-picker-bridge.js', () => ({
    isHashOnCurrentPage,
    registerPopUpHash: jest.fn(),
}));

jest.unstable_mockModule('./migration.js', () => ({
    renderLegacyMigrationNotice: jest.fn(),
}));

jest.unstable_mockModule('../../tools/localize.js', () => ({
    default: () => (key) => key,
    ensureEditorTranslations: jest.fn(),
}));

jest.unstable_mockModule('../../editor/utils.js', () => ({
    tTemplate: jest.fn(),
}));

const {
    getPopupPerformanceModeValue,
    getPopUpHashInputState,
    normalizePopUpHashInputValue,
    renderPopUpEditor,
} = await import('./editor.js');

describe('pop-up editor hash input helpers', () => {
    beforeEach(() => {
        isHashOnCurrentPage.mockReset();
        isHashOnCurrentPage.mockReturnValue(false);
    });

    test('keeps a single non-removable hash prefix', () => {
        expect(normalizePopUpHashInputValue('')).toBe('#');
        expect(normalizePopUpHashInputValue('kitchen')).toBe('#kitchen');
        expect(normalizePopUpHashInputValue('##kitchen  ')).toBe('#kitchen');
    });

    test('treats the default prefix-only value as invalid', () => {
        const hashState = getPopUpHashInputState('#');

        expect(hashState).toEqual({
            normalizedValue: '#',
            isEmpty: true,
            isDuplicate: false,
            isValid: false,
        });
        expect(isHashOnCurrentPage).not.toHaveBeenCalled();
    });

    test('marks duplicate hashes as invalid after normalization', () => {
        isHashOnCurrentPage.mockReturnValue(true);

        const hashState = getPopUpHashInputState('kitchen', '#living-room');

        expect(isHashOnCurrentPage).toHaveBeenCalledWith('#kitchen', '#living-room');
        expect(hashState).toEqual({
            normalizedValue: '#kitchen',
            isEmpty: false,
            isDuplicate: true,
            isValid: false,
        });
    });

    test('accepts unique hashes once the placeholder has been replaced', () => {
        const hashState = getPopUpHashInputState('bedroom');

        expect(hashState).toEqual({
            normalizedValue: '#bedroom',
            isEmpty: false,
            isDuplicate: false,
            isValid: true,
        });
    });

    test('defaults the popup performance mode to default when unset', () => {
        expect(getPopupPerformanceModeValue({})).toBe('default');
    });

    test('returns the explicit popup performance mode when configured', () => {
        expect(getPopupPerformanceModeValue({ performance_mode: 'performance' })).toBe('performance');
    });
});

// html is mocked, but its interpolations are still evaluated, so rendering the
// whole editor is what catches a symbol that was never imported. One shipped:
// isHomeAssistantStyle was used in the mode dropdown without its import, and
// every test passed because nothing here had ever rendered the template.
describe('the pop-up editor renders', () => {
    beforeEach(() => {
        globalThis.window = globalThis.window || {};
        globalThis.document = globalThis.document || { querySelector: () => null };
    });

    function makeEditor(config) {
        return {
            _config: { card_type: 'pop-up', ...config },
            hass: { states: {}, formatEntityState: () => '', localize: () => '' },
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
            makeInteractionsPanel: jest.fn(),
        };
    }

    test.each([
        ['no style at all', {}],
        ['the bubble style', { popup_style: 'bubble' }],
        ['the classic style', { popup_style: 'classic' }],
        ['the Home Assistant style', { popup_style: 'home-assistant' }],
    ])('with %s', (_label, config) => {
        expect(() => renderPopUpEditor(makeEditor(config))).not.toThrow();
    });
});


// The styling fields show a default when the config leaves the key out, and the
// Home Assistant style changes three of those defaults. Showing 88 next to a
// surface that is opaque is the bug this holds shut.
describe('the styling defaults the editor shows', () => {
    test('follow the style that is actually in use', async () => {
        const { getPopupStyleDefault, getPopupStyleDisplayDefault } = await import('./style.js');
        const bubble = {};
        const ha = { popup_style: 'home-assistant' };

        expect(getPopupStyleDisplayDefault(bubble, 'bg_opacity')).toBe(88);
        expect(getPopupStyleDisplayDefault(ha, 'bg_opacity')).toBe(100);
        expect(getPopupStyleDisplayDefault(bubble, 'bg_blur')).toBe(10);
        expect(getPopupStyleDisplayDefault(ha, 'bg_blur')).toBe(0);
        expect(getPopupStyleDisplayDefault(bubble, 'width_desktop')).toBe('540px');
        // A text field wants a number someone can read, the card wants the token.
        expect(getPopupStyleDisplayDefault(ha, 'width_desktop')).toBe('580px');
        expect(getPopupStyleDefault(ha, 'width_desktop')).toBe('var(--ha-dialog-width-md, 580px)');
        // The dialog comes with its shadow, so the option starts where that
        // shadow is and fades it out on the way down.
        expect(getPopupStyleDisplayDefault(bubble, 'shadow_opacity')).toBe(0);
        expect(getPopupStyleDisplayDefault(ha, 'shadow_opacity')).toBe(100);
    });
});

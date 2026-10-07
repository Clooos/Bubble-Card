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
    applyPopupSlideToClose,
    getPopUpModeChoice,
    getPopUpModeOptions,
    getPopupPerformanceModeValue,
    getPopupSlideToCloseValue,
    getPopUpHashInputState,
    normalizePopUpHashInputValue,
    offersBottomOffset,
    renderPopUpEditor,
} = await import('./editor.js');
const { fireEvent } = await import('../../tools/utils.js');
const { html } = await import('lit');

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

    test.each([
        ['slide to close from the header only', { slide_to_close: 'header' }],
        ['slide to close disabled', { slide_to_close: false }],
    ])('with %s', (_label, config) => {
        expect(() => renderPopUpEditor(makeEditor(config))).not.toThrow();
    });
});

// The dropdown shows the three values slide_to_close takes, and writes back the
// YAML the README documents, with no key at all for the default (#2627).
describe('the slide to close dropdown', () => {
    beforeEach(() => {
        fireEvent.mockClear();
    });

    test('shows Auto for a missing key and for true', () => {
        expect(getPopupSlideToCloseValue({})).toBe('auto');
        expect(getPopupSlideToCloseValue({ slide_to_close: true })).toBe('auto');
        expect(getPopupSlideToCloseValue(undefined)).toBe('auto');
    });

    test('shows the header and the disabled choices for what they write', () => {
        expect(getPopupSlideToCloseValue({ slide_to_close: 'header' })).toBe('header');
        expect(getPopupSlideToCloseValue({ slide_to_close: false })).toBe('disabled');
    });

    test('writes header and false through the editor', () => {
        const editor = { _config: { card_type: 'pop-up' }, _valueChanged: jest.fn() };

        applyPopupSlideToClose(editor, 'header');
        applyPopupSlideToClose(editor, 'disabled');

        expect(editor._valueChanged.mock.calls.map(([event]) => [event.target.configValue, event.detail.value]))
            .toEqual([['slide_to_close', 'header'], ['slide_to_close', false]]);
        expect(fireEvent).not.toHaveBeenCalled();
    });

    test('leaves no key behind for Auto, and keeps the rest of the config', () => {
        const editor = { _config: { card_type: 'pop-up', hash: '#kitchen', slide_to_close: false }, _valueChanged: jest.fn() };

        applyPopupSlideToClose(editor, 'auto');

        expect(editor._valueChanged).not.toHaveBeenCalled();
        expect(fireEvent).toHaveBeenCalledWith(editor, 'config-changed', { config: { card_type: 'pop-up', hash: '#kitchen' } });
    });
});


// The Home Assistant style is the more info dialog, so it used to lock this
// dropdown on one entry. Its sheet now has the height of that dialog on a phone,
// and the dropdown is where the sheet that follows its content is asked for.
describe('the pop-up mode dropdown', () => {
    const t = (key) => key;
    const values = (config) => getPopUpModeOptions(t, config).map(({ value }) => value);

    test('offers the four modes to the bubble and classic styles', () => {
        const all = ['default', 'fit-content', 'centered', 'adaptive-dialog'];

        expect(values({})).toEqual(all);
        expect(values({ popup_style: 'bubble' })).toEqual(all);
        expect(values({ popup_style: 'classic' })).toEqual(all);
    });

    test('offers the Home Assistant style its two sheets, under the labels they already have', () => {
        expect(getPopUpModeOptions(t, { popup_style: 'home-assistant' })).toEqual([
            { label: 'editor.common.default', value: 'default' },
            { label: 'editor.popup.mode_adaptive', value: 'adaptive-dialog' },
        ]);
    });

    test('shows what the key says outside the Home Assistant style', () => {
        expect(getPopUpModeChoice({})).toBe('default');
        expect(getPopUpModeChoice({ popup_mode: 'fit-content' })).toBe('fit-content');
        expect(getPopUpModeChoice({ popup_style: 'classic', popup_mode: 'centered' })).toBe('centered');
        expect(getPopUpModeChoice({ popup_mode: 'adaptive-dialog' })).toBe('adaptive-dialog');
    });

    test('shows the sheet the Home Assistant style really draws', () => {
        const ha = (popup_mode) => ({ popup_style: 'home-assistant', ...(popup_mode ? { popup_mode } : {}) });

        expect(getPopUpModeChoice(ha())).toBe('default');
        expect(getPopUpModeChoice(ha('default'))).toBe('default');
        expect(getPopUpModeChoice(ha('adaptive-dialog'))).toBe('adaptive-dialog');
        // Both left there from another style. One means the sheet that follows
        // its content, the other is a shape this style does not have.
        expect(getPopUpModeChoice(ha('fit-content'))).toBe('adaptive-dialog');
        expect(getPopUpModeChoice(ha('centered'))).toBe('default');
    });

    // html is mocked, so the values handed to each template are what was
    // rendered. The dropdown is the one template holding the popup_mode schema.
    function renderedDropdown(config) {
        const editor = {
            _config: { card_type: 'pop-up', hash: '#kitchen', cards: [], ...config },
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
        html.mockClear();
        renderPopUpEditor(editor);
        const call = html.mock.calls.find(([, ...args]) => args.some((arg) => Array.isArray(arg) && arg[0]?.name === 'popup_mode'));
        const [, ...args] = call;
        return {
            editor,
            args,
            data: args.find((arg) => arg && typeof arg === 'object' && 'popup_mode' in arg),
            options: args.find((arg) => Array.isArray(arg))[0].selector.select.options.map(({ value }) => value),
            change: args.filter((arg) => typeof arg === 'function').pop(),
        };
    }

    beforeEach(() => {
        globalThis.window = globalThis.window || {};
        globalThis.document = globalThis.document || { querySelector: () => null };
    });

    test('is no longer locked in the Home Assistant style', () => {
        const dropdown = renderedDropdown({ popup_style: 'home-assistant' });

        expect(dropdown.data).toEqual({ popup_mode: 'default' });
        expect(dropdown.options).toEqual(['default', 'adaptive-dialog']);
        // `disabled` was the one boolean this template was handed.
        expect(dropdown.args.some((arg) => typeof arg === 'boolean')).toBe(false);
    });

    test('writes the chosen sheet to popup_mode', () => {
        const dropdown = renderedDropdown({ popup_style: 'home-assistant' });

        dropdown.change({ detail: { value: { popup_mode: 'adaptive-dialog' } } });
        dropdown.change({ detail: { value: { popup_mode: 'default' } } });

        expect(dropdown.editor._valueChanged.mock.calls.map(([event]) => [event.target.configValue, event.detail.value]))
            .toEqual([['popup_mode', 'adaptive-dialog'], ['popup_mode', 'default']]);
    });

    test('keeps its four entries and the key as it is in the bubble style', () => {
        const dropdown = renderedDropdown({ popup_mode: 'centered' });

        expect(dropdown.data).toEqual({ popup_mode: 'centered' });
        expect(dropdown.options).toEqual(['default', 'fit-content', 'centered', 'adaptive-dialog']);
    });
});

// The offset is for a footer card that covers the end of a sheet. The Home
// Assistant style is a sheet on a narrow screen whichever entry is chosen.
describe('the bottom offset option', () => {
    test('is offered with the modes that draw a sheet sized by its content', () => {
        expect(offersBottomOffset({ popup_mode: 'fit-content' })).toBe(true);
        expect(offersBottomOffset({ popup_mode: 'adaptive-dialog' })).toBe(true);
        expect(offersBottomOffset({})).toBe(false);
        expect(offersBottomOffset({ popup_mode: 'centered' })).toBe(false);
    });

    test('is offered with both sheets of the Home Assistant style', () => {
        expect(offersBottomOffset({ popup_style: 'home-assistant' })).toBe(true);
        expect(offersBottomOffset({ popup_style: 'home-assistant', popup_mode: 'adaptive-dialog' })).toBe(true);
        expect(offersBottomOffset({ popup_style: 'home-assistant', popup_mode: 'centered' })).toBe(true);
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

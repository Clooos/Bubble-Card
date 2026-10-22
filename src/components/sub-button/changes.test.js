import { describe, expect, jest, test } from '@jest/globals';

// Only the two readers of the sub-button list are under test here, so every
// module that draws or updates a button is stubbed out.
jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement: jest.fn(),
    getAttribute: jest.fn(),
    isStateOn: jest.fn(),
    isStateRequiringAttention: jest.fn(),
    formatDateTime: jest.fn(),
    getStateSurfaceColor: jest.fn(),
    getState: jest.fn(),
    getStyleGeneration: jest.fn(() => 1),
    getSurfaceIconTone: jest.fn(() => null),
    isTimerEntity: jest.fn(),
    timerTimeRemaining: jest.fn(),
    computeDisplayTimer: jest.fn(),
    startElementTimerInterval: jest.fn(),
    stopElementTimerInterval: jest.fn(),
    formatNumericValue: jest.fn(),
    getTemperatureUnit: jest.fn(),
}));
jest.unstable_mockModule('../../tools/jinja.js', () => ({ isTemplate: jest.fn(() => false) }));
jest.unstable_mockModule('../../tools/text-scrolling.js', () => ({ applyScrollingEffect: jest.fn() }));
jest.unstable_mockModule('../../tools/icon.js', () => ({
    getIcon: jest.fn(),
    getLightColorSignature: jest.fn(),
    getImage: jest.fn(),
}));
jest.unstable_mockModule('../../tools/tap-actions.js', () => ({
    addActions: jest.fn(),
    addFeedback: jest.fn(),
}));
jest.unstable_mockModule('../../tools/validate-condition.js', () => ({
    checkConditionsMet: jest.fn(),
    validateConditionalConfig: jest.fn(),
    ensureArray: jest.fn(),
}));
jest.unstable_mockModule('../../tools/render-template.js', () => ({ resolveTemplate: jest.fn() }));
jest.unstable_mockModule('../../tools/state-content.js', () => ({ resolveStateContent: jest.fn() }));
jest.unstable_mockModule('../base-card/state-line.js', () => ({ renderStateLine: jest.fn() }));
jest.unstable_mockModule('./create.js', () => ({
    createSubButtonElement: jest.fn(),
    normalizeNameToClass: jest.fn(),
    syncLaneFillStateForGroup: jest.fn(),
}));
jest.unstable_mockModule('../base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
    syncMainButtonsBottomClass: jest.fn(),
}));
jest.unstable_mockModule('./types/default/index.js', () => ({ handleDefaultSubButton: jest.fn() }));
jest.unstable_mockModule('./types/dropdown/index.js', () => ({ handleDropdownSubButton: jest.fn() }));
jest.unstable_mockModule('./types/slider/index.js', () => ({ handleSliderSubButton: jest.fn() }));
jest.unstable_mockModule('../slider/changes.js', () => ({ updateSlider: jest.fn() }));

const { getSubButtonsStates, initializesubButtonIcon } = await import('./changes.js');

// Four entities, each with a state of its own, so a missing or misplaced one is
// named by the assertion rather than hidden behind a repeated "on".
const HASS = {
    states: {
        'input_select.a': { state: 'Clair' },
        'input_select.b': { state: 'Vidéo' },
        'input_select.c': { state: 'Playlists' },
        'input_select.d': { state: 'Lofi' },
        'light.card': { state: 'on' },
    },
};

const a = { entity: 'input_select.a' };
const b = { entity: 'input_select.b' };
const c = { entity: 'input_select.c' };
const d = { entity: 'input_select.d' };
const group = (...buttons) => ({ name: 'g', buttons_layout: 'inline', group: buttons });

function buildContext(sub_button, extraConfig = {}) {
    return { _hass: HASS, config: { entity: 'light.card', sub_button, ...extraConfig } };
}

describe('getSubButtonsStates', () => {
    test('reads the bottom sub-buttons, which used to be skipped entirely (#2165)', () => {
        const context = buildContext({ main: [a, b], bottom: [c, d] });
        expect(getSubButtonsStates(context)).toEqual(['Clair', 'Vidéo', 'Playlists', 'Lofi']);
    });

    test('a card with bottom sub-buttons only still reports them', () => {
        const context = buildContext({ main: [], bottom: [c, d] });
        expect(getSubButtonsStates(context)).toEqual(['Playlists', 'Lofi']);
    });

    test('follows the display order when groups and single buttons are mixed', () => {
        // Displayed as A B C D, and used to report [A, B, D].
        const context = buildContext({ main: [a, group(b)], bottom: [c, group(d)] });
        expect(getSubButtonsStates(context)).toEqual(['Clair', 'Vidéo', 'Playlists', 'Lofi']);
    });

    test('a grouped bottom row keeps the order it already had', () => {
        const context = buildContext({ main: [a, b], bottom: [group(c, d)] });
        expect(getSubButtonsStates(context)).toEqual(['Clair', 'Vidéo', 'Playlists', 'Lofi']);
    });

    test('the legacy flat schema is unchanged', () => {
        expect(getSubButtonsStates(buildContext([a, b, c, d]))).toEqual(['Clair', 'Vidéo', 'Playlists', 'Lofi']);
    });

    test('a sub-button without an entity falls back to the card entity', () => {
        const context = buildContext({ main: [{ name: 'no entity' }], bottom: [c] });
        expect(getSubButtonsStates(context)).toEqual(['on', 'Playlists']);
    });

    test('an unknown entity reports unknown rather than a hole', () => {
        const context = buildContext({ main: [{ entity: 'light.gone' }], bottom: [c] });
        expect(getSubButtonsStates(context)).toEqual(['unknown', 'Playlists']);
    });

    test('empty slots and empty groups are skipped', () => {
        const context = buildContext({ main: [null, a, group()], bottom: [undefined, c] });
        expect(getSubButtonsStates(context)).toEqual(['Clair', 'Playlists']);
    });

    test('no sub-buttons at all gives an empty list', () => {
        expect(getSubButtonsStates(buildContext(undefined))).toEqual([]);
    });

    test('a sub-buttons card ignores a main section it never draws', () => {
        const context = buildContext({ main: [a, b], bottom: [c, d] }, { card_type: 'sub-buttons' });
        expect(getSubButtonsStates(context)).toEqual(['Playlists', 'Lofi']);
    });
});

// The container holds the icons of every group it renders, so the stub answers
// the query with the whole list, the way the DOM does.
function buildIconContext(icons) {
    return {
        _hass: HASS,
        config: { entity: 'light.card', sub_button: { main: [a], bottom: [c] } },
        elements: {
            groups: {
                // Implicit groups a card gets as soon as it has a bottom
                // section, whose containers repeat the icons the content
                // container holds.
                g_main_auto: { container: { querySelectorAll: () => icons.slice(0, 1) } },
                g_bottom_auto: { container: { querySelectorAll: () => icons.slice(1) } },
            },
        },
        content: { querySelectorAll: () => icons },
    };
}

describe('subButtonIcon', () => {
    test('holds each icon once, in DOM order', () => {
        const icons = [{ icon: 'mdi:alpha-a' }, { icon: 'mdi:alpha-c' }];
        const context = buildIconContext(icons);

        initializesubButtonIcon(context);

        expect(context.subButtonIcon).toEqual(icons);
    });

    test('does not grow when the card renders again', () => {
        const icons = [{ icon: 'mdi:alpha-a' }, { icon: 'mdi:alpha-c' }];
        const context = buildIconContext(icons);

        for (let pass = 0; pass < 5; pass++) initializesubButtonIcon(context);

        expect(context.subButtonIcon).toHaveLength(icons.length);
        expect(context.subButtonIcon).toEqual(icons);
    });

    test('shrinks when a sub-button goes away', () => {
        const icons = [{ icon: 'mdi:alpha-a' }, { icon: 'mdi:alpha-c' }];
        const context = buildIconContext(icons);
        initializesubButtonIcon(context);

        icons.pop();
        initializesubButtonIcon(context);

        expect(context.subButtonIcon).toEqual([{ icon: 'mdi:alpha-a' }]);
    });
});

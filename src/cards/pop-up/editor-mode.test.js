import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// changeEditor decides one thing this file cares about: whether a pop-up shown
// in an editor context mounts its real content or the performance placeholder.
let inPicker = false;
jest.unstable_mockModule('../../tools/lazy-preview.js', () => ({
    isSuggestionPickerPreview: jest.fn(() => inPicker),
}));

jest.unstable_mockModule('./backdrop.js', () => ({ getBackdrop: () => ({ hideBackdrop: jest.fn() }) }));
jest.unstable_mockModule('../../tools/ha-boundary.js', () => ({ isHaCardWrapper: jest.fn(() => false) }));
const handlePopUpCards = jest.fn();
const setStandalonePopUpCardsActive = jest.fn();
jest.unstable_mockModule('./cards/index.js', () => ({ handlePopUpCards, setStandalonePopUpCardsActive }));
jest.unstable_mockModule('./helpers.js', () => ({
    restorePopupHostLayout: jest.fn(),
    suspendPopupHostLayout: jest.fn(),
}));
jest.unstable_mockModule('./migration.js', () => ({ isLegacyPopUpConfig: jest.fn(() => false) }));
jest.unstable_mockModule('./legacy.js', () => ({
    appendLegacyPopup: jest.fn(),
    hideLegacyPopupContent: jest.fn(),
}));
jest.unstable_mockModule('../../tools/localize.js', () => ({
    default: () => (key) => key,
    getGlobalHass: () => ({}),
    ensureEditorTranslations: jest.fn(),
}));
jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement: (tag, className) => {
        const element = { tagName: String(tag).toUpperCase(), className: className ?? '', children: [] };
        element.appendChild = (child) => { element.children.push(child); return child; };
        element.querySelector = () => null;
        return element;
    },
    toggleBodyScroll: jest.fn(),
}));

const { changeEditor } = await import('./editor-mode.js');

function createContext() {
    const classes = new Set();
    const popUpContainer = {
        children: [],
        classList: { add: jest.fn(), remove: jest.fn() },
        appendChild(child) { this.children.push(child); },
        querySelector: () => null,
    };
    return {
        editor: true,
        detectedEditor: false,
        isStandalonePopUp: true,
        config: { card_type: 'pop-up', hash: '#salon', cards: [{}, {}] },
        elements: { popUpContainer, content: { classList: { add: jest.fn(), remove: jest.fn() } } },
        popUp: {
            classList: {
                add: (...names) => names.forEach((n) => classes.add(n)),
                remove: (...names) => names.forEach((n) => classes.delete(n)),
                contains: (n) => classes.has(n),
            },
            style: {},
            parentNode: {},
        },
    };
}

const placeholderShown = (context) =>
    context.elements.popUpContainer.classList.add.mock.calls.some(([name]) => name === 'has-placeholder');

beforeEach(() => {
    jest.clearAllMocks();
    inPicker = false;
    globalThis.window = { addEventListener: jest.fn() };
});

describe('what a pop-up shows in an editor context', () => {
    // The picker is where a user decides whether to add the pop-up at all, and
    // Home Assistant truncates a preview's cards to six and offers a "+ N more"
    // badge for the rest, which only makes sense if they render.
    test('mounts its real content in the suggestion picker', () => {
        inPicker = true;
        const context = createContext();

        changeEditor(context);

        expect(setStandalonePopUpCardsActive).toHaveBeenCalledWith(context, true);
        expect(handlePopUpCards).toHaveBeenCalledWith(context);
        expect(placeholderShown(context)).toBe(false);
    });

    // A dashboard in edit mode holds every pop-up of the view at once, which is
    // exactly the case the placeholder exists for.
    test('keeps the performance placeholder everywhere else', () => {
        const context = createContext();

        changeEditor(context);

        // Falsy rather than strictly false: the flag is the result of an `||`
        // chain over optional globals, and shouldRenderPopUpCards coerces it.
        expect(setStandalonePopUpCardsActive).toHaveBeenCalledTimes(1);
        expect(setStandalonePopUpCardsActive.mock.calls[0][0]).toBe(context);
        expect(setStandalonePopUpCardsActive.mock.calls[0][1]).toBeFalsy();
        expect(placeholderShown(context)).toBe(true);
    });

    test('a card that is not in an editor context is left alone', () => {
        const context = createContext();
        context.editor = false;

        expect(changeEditor(context)).toBe(false);
        expect(setStandalonePopUpCardsActive).not.toHaveBeenCalled();
    });
});

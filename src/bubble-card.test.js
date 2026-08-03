import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// The element module pulls in every card handler; everything is mocked so the
// tests can drive the custom-element lifecycle contract in isolation.
jest.unstable_mockModule('./var/version.js', () => ({ version: 'test' }));
jest.unstable_mockModule('./tools/init.js', () => ({ initializeContent: jest.fn() }));
jest.unstable_mockModule('./tools/tap-actions.js', () => ({ cleanupTapActions: jest.fn() }));
jest.unstable_mockModule('./modules/registry.js', () => ({ preloadYAMLStyles: jest.fn() }));
jest.unstable_mockModule('./tools/style.js', () => ({ createBubbleDefaultColor: jest.fn() }));
jest.unstable_mockModule('./cards/pop-up/backdrop.js', () => ({ updateThemeBackgroundColor: jest.fn() }));
const stopTimerInterval = jest.fn();
const invalidateStyleCache = jest.fn();
jest.unstable_mockModule('./tools/utils.js', () => ({ invalidateStyleCache, stopTimerInterval }));
jest.unstable_mockModule('./tools/text-scrolling.js', () => ({ cleanupScrollingEffects: jest.fn() }));
jest.unstable_mockModule('./tools/entity-suggestion.js', () => ({ getEntitySuggestion: jest.fn() }));
jest.unstable_mockModule('./cards/pop-up/helpers.js', () => ({
    registerPopupContext: jest.fn(),
    shouldHoldDashboardHassUpdate: jest.fn(() => false),
}));
jest.unstable_mockModule('./cards/pop-up/migration.js', () => ({ maybeShowMigrationNotice: jest.fn() }));
jest.unstable_mockModule('./tools/icon.js', () => ({
    registerForIconRefresh: jest.fn(),
    unregisterForIconRefresh: jest.fn(),
}));
jest.unstable_mockModule('./editor/bubble-card-editor.js', () => ({ default: class {} }));
jest.unstable_mockModule('./cards/pop-up/index.js', () => ({ cleanupPopUp: jest.fn(), handlePopUp: jest.fn() }));
jest.unstable_mockModule('./cards/button/index.js', () => ({ handleButton: jest.fn() }));
jest.unstable_mockModule('./cards/sub-buttons/index.js', () => ({ handleSubButtons: jest.fn() }));
jest.unstable_mockModule('./cards/separator/index.js', () => ({ handleSeparator: jest.fn() }));
jest.unstable_mockModule('./cards/cover/index.js', () => ({ handleCover: jest.fn() }));
jest.unstable_mockModule('./cards/empty-column/index.js', () => ({ handleEmptyColumn: jest.fn() }));
jest.unstable_mockModule('./cards/horizontal-buttons-stack/index.js', () => ({ handleHorizontalButtonsStack: jest.fn() }));
jest.unstable_mockModule('./cards/calendar/index.js', () => ({ handleCalendar: jest.fn() }));
jest.unstable_mockModule('./cards/media-player/index.js', () => ({ handleMediaPlayer: jest.fn() }));
jest.unstable_mockModule('./cards/select/index.js', () => ({ handleSelect: jest.fn() }));
jest.unstable_mockModule('./cards/climate/index.js', () => ({ handleClimate: jest.fn() }));

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

await import('./bubble-card.js');
const BubbleCard = definedElements['bubble-card'];

function createCard(config = { card_type: 'button' }) {
    const card = new BubbleCard();
    card.config = config;
    return card;
}

describe('BubbleCard editor detection memoization', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('memoizes the editor-detection walk per connected lifetime', () => {
        const card = createCard();
        card._isInsideCardEditor = jest.fn(() => false);

        expect(card.detectedEditor).toBe(false);
        expect(card.detectedEditor).toBe(false);
        expect(card._isInsideCardEditor).toHaveBeenCalledTimes(1);

        // A DOM move fires the lifecycle callbacks: the memo must reset so a
        // card moved into an editor preview is detected again.
        card.connectedCallback();
        expect(card.detectedEditor).toBe(false);
        expect(card._isInsideCardEditor).toHaveBeenCalledTimes(2);

        card.disconnectedCallback();
        card._isInsideCardEditor.mockReturnValue(true);
        expect(card.detectedEditor).toBe(true);
        expect(card._isInsideCardEditor).toHaveBeenCalledTimes(3);
        expect(card.detectedEditor).toBe(true);
        expect(card._isInsideCardEditor).toHaveBeenCalledTimes(3);
    });
});

describe('BubbleCard disconnect contract', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('stops the timer interval keyed on the element itself', () => {
        const card = createCard();

        card.disconnectedCallback();

        // The element IS the context registered by startTimerInterval: any
        // other key (the historical `this.context`) silently leaks the 1s
        // interval forever.
        expect(stopTimerInterval).toHaveBeenCalledWith(card);
    });

    test('runs the template-change unsubscribe once and clears it', () => {
        const card = createCard();
        const unsubscribe = jest.fn();
        card._templateChangeUnsubscribe = unsubscribe;
        card._templateChangeHandler = () => {};

        card.disconnectedCallback();

        expect(unsubscribe).toHaveBeenCalledTimes(1);
        expect(card._templateChangeUnsubscribe).toBeNull();
        expect(card._templateChangeHandler).toBeNull();

        // A second disconnect must not call a stale reference again.
        card.disconnectedCallback();
        expect(unsubscribe).toHaveBeenCalledTimes(1);
    });

    test('removes the module refresh listeners and resets the flag for re-registration', () => {
        const card = createCard();
        const handler = () => {};
        card._moduleChangeHandler = handler;
        card._moduleChangeListenerAdded = true;

        card.disconnectedCallback();

        expect(window.removeEventListener).toHaveBeenCalledWith('bubble-card-modules-changed', handler);
        expect(window.removeEventListener).toHaveBeenCalledWith('bubble-card-module-updated', handler);
        expect(document.removeEventListener).toHaveBeenCalledWith('yaml-modules-updated', handler);
        expect(card._moduleChangeListenerAdded).toBe(false);
        expect(card._moduleChangeHandler).toBeNull();
    });
});

import { beforeEach, describe, expect, jest, test } from '@jest/globals';

const createCardElements = jest.fn();
const removeCardElements = jest.fn();
const updateCardElements = jest.fn();
const createCardElementsProgressively = jest.fn((context, onDone) => {
    createCardElements(context);
    onDone();
});
const removeCardElementsProgressively = jest.fn((context, onDone) => {
    removeCardElements(context);
    onDone();
});
const settleProgressiveCardWork = jest.fn();
const resumeCardHydrationProgressively = jest.fn((context, onDone) => {
    if (typeof onDone === 'function') onDone();
});

jest.unstable_mockModule('./create.js', () => ({
    createCardElements,
    removeCardElements,
    updateCardElements,
    createCardElementsProgressively,
    removeCardElementsProgressively,
    resumeCardHydrationProgressively,
    settleProgressiveCardWork,
}));

const {
    handlePopUpCards,
    suspendStandalonePopUpCards,
} = await import('./index.js');

describe('standalone popup cards', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('cold-removes standalone cards when suspending an inactive popup', () => {
        const context = {
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: false,
            _cachedPopupScrollableState: true,
        };

        suspendStandalonePopUpCards(context);

        expect(removeCardElements).toHaveBeenCalledWith(context);
        expect(context._cachedPopupScrollableState).toBeUndefined();
    });

    test('does not remove standalone cards while the popup is still active', () => {
        const context = {
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: true,
            _cachedPopupScrollableState: true,
        };

        suspendStandalonePopUpCards(context);

        expect(removeCardElements).not.toHaveBeenCalled();
        expect(context._cachedPopupScrollableState).toBe(true);
    });

    test('creates popup cards on first active render and updates them afterwards', () => {
        const context = {
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: true,
            config: {
                cards: [{ type: 'custom:bubble-card' }],
            },
        };

        handlePopUpCards(context);

        expect(createCardElements).toHaveBeenCalledWith(context);
        expect(updateCardElements).not.toHaveBeenCalled();

        jest.clearAllMocks();

        context._cardsContainer = {};

        handlePopUpCards(context);

        expect(updateCardElements).toHaveBeenCalledWith(context);
        expect(createCardElements).not.toHaveBeenCalled();
    });

    test('skips reconciliation while a progressive build or teardown owns the container', () => {
        const context = {
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: true,
            _cardsContainer: {},
            config: { cards: [{ type: 'button' }] },
        };

        for (const type of ['build', 'teardown']) {
            context._progressiveCardWork = { type };
            handlePopUpCards(context);
        }

        expect(createCardElements).not.toHaveBeenCalled();
        expect(updateCardElements).not.toHaveBeenCalled();
    });

    test('keeps hass syncs flowing to mounted cards while hydration is in flight', () => {
        const context = {
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: true,
            _cardsContainer: {},
            _progressiveCardWork: { type: 'hydrate' },
            config: { cards: [{ type: 'button' }] },
        };

        handlePopUpCards(context);

        expect(updateCardElements).toHaveBeenCalledWith(context);
        expect(createCardElements).not.toHaveBeenCalled();
    });
});
import { beforeEach, describe, expect, jest, test } from '@jest/globals';

const createCardElements = jest.fn();
const removeCardElements = jest.fn();
const updateCardElements = jest.fn();

jest.unstable_mockModule('./create.js', () => ({
    createCardElements,
    removeCardElements,
    updateCardElements,
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
});
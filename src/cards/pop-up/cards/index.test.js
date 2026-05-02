import { beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('./create.js', () => ({
    createCardElements: jest.fn(),
    detachCardElements: jest.fn(),
    removeCardElements: jest.fn(),
    restoreCardElements: jest.fn(),
    updateCardElements: jest.fn(),
}));

const {
    restoreWarmStandalonePopUpCards,
    suspendWarmStandalonePopUpCards,
} = await import('./index.js');

function createManagedCardElement() {
    const managedElement = {
        style: { display: '' },
    };

    return {
        _element: managedElement,
        style: { display: '' },
        toggleAttribute: jest.fn(),
        appendChild: jest.fn(),
        removeChild: jest.fn(),
    };
}

describe('warm standalone popup cards', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('keeps managed elements attached while warm-suspending them', () => {
        const cardElement = createManagedCardElement();
        const context = {
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: false,
            _managedCards: [cardElement],
        };

        const changed = suspendWarmStandalonePopUpCards(context);

        expect(changed).toBe(true);
        expect(context._standaloneWarmCardsSuspended).toBe(true);
        expect(cardElement.style.display).toBe('none');
        expect(cardElement._element.style.display).toBe('none');
        expect(cardElement.toggleAttribute).toHaveBeenCalledWith('hidden', true);
        expect(cardElement.removeChild).not.toHaveBeenCalled();
    });

    test('restores warm-suspended cards without re-appending managed elements', () => {
        const cardElement = createManagedCardElement();
        const context = {
            isStandalonePopUp: true,
            _standaloneWarmCardsSuspended: true,
            _managedCards: [cardElement],
        };

        const changed = restoreWarmStandalonePopUpCards(context);

        expect(changed).toBe(true);
        expect(context._standaloneWarmCardsSuspended).toBe(false);
        expect(cardElement.style.display).toBe('');
        expect(cardElement._element.style.display).toBe('');
        expect(cardElement.toggleAttribute).toHaveBeenCalledWith('hidden', false);
        expect(cardElement.appendChild).not.toHaveBeenCalled();
    });
});
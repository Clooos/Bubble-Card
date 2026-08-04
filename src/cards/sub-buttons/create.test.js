import { describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('./styles.css', () => ({ default: '' }));

const createBaseStructureMock = jest.fn(() => ({
    mainContainer: { classList: { add: jest.fn() } },
    subButtonContainer: { classList: { add: jest.fn() } },
}));

jest.unstable_mockModule('../../components/base-card/index.js', () => ({
    createBaseStructure: createBaseStructureMock,
}));

jest.unstable_mockModule('../../tools/content-inset.js', () => ({
    startContentInsetSync: jest.fn(),
}));

const { createStructure } = await import('./create.js');

function createCardContainer() {
    return {
        className: 'card',
        classList: { contains: (name) => name === 'card' },
        style: {},
    };
}

// The chain createStructure walks up: card → shadow root → host → parent →
// the `.card` cell. `insidePopup` decides what closest('.bubble-pop-up')
// answers for the card itself.
function createContext({ insidePopup, cardContainer }) {
    const card = {
        classList: { add: jest.fn() },
        style: { setProperty: jest.fn() },
        closest: (selector) => (insidePopup && selector === '.bubble-pop-up' ? card : null),
    };
    card.getRootNode = () => card;
    card.parentNode = {
        host: {
            parentNode: { parentNode: cardContainer },
        },
    };

    return {
        card,
        container: {},
        config: { footer_mode: true },
        editor: false,
    };
}

describe('sub-buttons footer mode container positioning', () => {
    test('takes the Home Assistant dashboard cell out of the flow', () => {
        const cardContainer = createCardContainer();
        const context = createContext({ insidePopup: false, cardContainer });

        createStructure(context);

        expect(context.cardContainer).toBe(cardContainer);
        expect(cardContainer.style.position).toBe('absolute');
    });

    test('leaves a pop-up card wrapper alone', () => {
        // Collapsing the pop-up's own wrapper makes the pop-up treat the card
        // as off-screen content and freezes its hass updates (#2528).
        const cardContainer = createCardContainer();
        const context = createContext({ insidePopup: true, cardContainer });

        createStructure(context);

        expect(context.cardContainer).toBeUndefined();
        expect(cardContainer.style.position).toBeUndefined();
        expect(context.card.classList.add).toHaveBeenCalledWith('footer-mode');
    });

    test('does not throw when the host chain does not resolve to a cell', () => {
        const context = createContext({ insidePopup: false, cardContainer: undefined });
        context.card.parentNode = {};

        expect(() => createStructure(context)).not.toThrow();
        expect(context.cardType).toBe('sub-buttons');
    });
});

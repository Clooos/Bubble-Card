import { describe, expect, test, jest } from '@jest/globals';

jest.unstable_mockModule('./styles.css', () => ({
    default: '',
}));

jest.unstable_mockModule('./editor/index.js', () => ({
    createEditorCardElements: jest.fn(),
}));

jest.unstable_mockModule('../../../tools/utils.js', () => ({
    createElement: jest.fn(),
}));

const { updateCardElements } = await import('./create.js');

function createStyleRecorder() {
    return {
        setCalls: [],
        removeCalls: [],
        setProperty(name, value) {
            this.setCalls.push([name, value]);
        },
        removeProperty(name) {
            this.removeCalls.push(name);
        },
    };
}

function createClassListRecorder() {
    return {
        toggleCalls: [],
        toggle(name, active) {
            this.toggleCalls.push([name, active]);
        },
    };
}

function createWrapper() {
    return {
        style: createStyleRecorder(),
        classList: createClassListRecorder(),
    };
}

function createContext(cardConfig, cardElement, cardWrapper, hass = { states: {} }) {
    return {
        editor: false,
        detectedEditor: false,
        _hass: hass,
        config: { cards: [cardConfig] },
        elements: {
            popUpContainer: {},
        },
        _managedCards: [cardElement],
        _cardWrappers: [cardWrapper],
        _cardsContainer: {
            querySelectorAll: () => [],
            remove: () => {},
        },
        _lastCardsEditMode: false,
        _lastCardConfigRefs: [cardConfig],
        _lastRenderedCardConfigs: [cardElement.config],
    };
}

describe('updateCardElements', () => {
    test('skips config and layout work when popup card config is unchanged', () => {
        const cardConfig = {
            type: 'custom:bubble-card',
            card_type: 'button',
            button_type: 'switch',
            entity: 'light.kitchen',
            rows: 2,
        };
        const cardWrapper = createWrapper();
        const renderedConfig = { ...cardConfig, card_layout: 'large' };
        const cardElement = {
            config: renderedConfig,
            hass: null,
            getGridOptions: jest.fn(() => ({ rows: 2, columns: 6 })),
        };
        const hass = { states: { 'light.kitchen': { state: 'on' } } };
        const context = createContext(cardConfig, cardElement, cardWrapper, hass);

        updateCardElements(context);

        expect(cardElement.hass).toBe(hass);
        expect(cardElement.getGridOptions).not.toHaveBeenCalled();
        expect(cardWrapper.style.setCalls).toEqual([]);
        expect(cardWrapper.style.removeCalls).toEqual([]);
        expect(cardWrapper.classList.toggleCalls).toEqual([]);
        expect(cardElement.config).toBe(renderedConfig);
    });

    test('updates config and layout when popup card config changes', () => {
        const initialCardConfig = {
            type: 'custom:bubble-card',
            card_type: 'button',
            button_type: 'switch',
            entity: 'light.kitchen',
            rows: 2,
        };
        const nextCardConfig = {
            ...initialCardConfig,
            grid_options: { rows: 3, columns: 9 },
        };
        const cardWrapper = createWrapper();
        const cardElement = {
            config: { ...initialCardConfig, card_layout: 'large' },
            hass: null,
            getGridOptions: jest.fn(() => ({ rows: 1, columns: 12 })),
        };
        const context = createContext(initialCardConfig, cardElement, cardWrapper);
        context.config.cards = [nextCardConfig];

        updateCardElements(context);

        expect(cardElement.getGridOptions).toHaveBeenCalledTimes(1);
        expect(cardElement.config).toEqual({ ...nextCardConfig, card_layout: 'large' });
        expect(context._lastCardConfigRefs[0]).toBe(nextCardConfig);
        expect(cardWrapper.style.setCalls).toEqual([
            ['--column-size', 9],
            ['--row-size', 3],
        ]);
        expect(cardWrapper.classList.toggleCalls).toEqual([
            ['fit-rows', true],
            ['full-width', false],
        ]);
    });
});
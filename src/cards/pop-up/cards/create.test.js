import { describe, expect, test, jest } from '@jest/globals';

jest.unstable_mockModule('./styles.css', () => ({
    default: '',
}));

jest.unstable_mockModule('./editor/index.js', () => ({
    createEditorCardElements: jest.fn(),
}));

const createElementMock = jest.fn();
jest.unstable_mockModule('../../../tools/utils.js', () => ({
    createElement: createElementMock,
}));

const { _isStandalonePopupCardConfig, createCardElementsProgressively, removeCardElementsProgressively, resumeCardHydrationProgressively, settleProgressiveCardWork, updateCardElements } = await import('./create.js');

describe('_isStandalonePopupCardConfig', () => {
    test('detects standalone bubble pop-up child configs', () => {
        expect(_isStandalonePopupCardConfig({
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            cards: [],
        })).toBe(true);
    });

    test('ignores other bubble card types and non-bubble cards', () => {
        expect(_isStandalonePopupCardConfig({
            type: 'custom:bubble-card',
            card_type: 'button',
        })).toBe(false);
        expect(_isStandalonePopupCardConfig({
            type: 'entities',
        })).toBe(false);
    });
});

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

    test('forwards reused hass references to the mounted popup child card', () => {
        const cardConfig = {
            type: 'entities',
            entities: ['light.kitchen'],
        };
        const cardWrapper = createWrapper();
        const hass = { states: { 'light.kitchen': { state: 'on' } } };
        const mountedCard = {
            hass,
            requestUpdate: jest.fn(),
        };
        const cardElement = {
            config: cardConfig,
            hass,
            _element: mountedCard,
            requestUpdate: jest.fn(),
            getGridOptions: jest.fn(() => ({ rows: 2, columns: 6 })),
        };
        const context = createContext(cardConfig, cardElement, cardWrapper, hass);

        updateCardElements(context);

        expect(cardElement.hass).toBe(hass);
        expect(cardElement.requestUpdate).toHaveBeenCalledWith('hass', null);
        expect(mountedCard.hass).toBe(hass);
        expect(mountedCard.requestUpdate).toHaveBeenCalledWith('hass', null);
    });

    test.each([
        {
            label: 'conditional cards',
            cardConfig: {
                type: 'conditional',
                conditions: [{ condition: 'state', entity: 'input_select.mode', state: 'On' }],
                card: {
                    type: 'entities',
                    entities: ['light.kitchen'],
                },
            },
        },
        {
            label: 'cards with native visibility',
            cardConfig: {
                type: 'vertical-stack',
                cards: [{
                    type: 'entities',
                    visibility: [{ condition: 'state', entity: 'input_select.mode', state: 'On' }],
                    entities: ['light.kitchen'],
                }],
            },
        },
    ])('does not defer offscreen hass updates for $label', ({ cardConfig }) => {
        const cardWrapper = createWrapper();
        const hass = { states: { 'light.kitchen': { state: 'on' } } };
        const mountedCard = {
            hass,
            requestUpdate: jest.fn(),
        };
        const cardElement = {
            config: cardConfig,
            hass,
            _element: mountedCard,
            requestUpdate: jest.fn(),
            getGridOptions: jest.fn(() => ({ rows: 2, columns: 6 })),
        };
        const context = createContext(cardConfig, cardElement, cardWrapper, hass);
        context._offscreenPopupCards = new Set([cardElement]);

        updateCardElements(context);

        expect(cardElement._bubbleHassPending).toBe(false);
        expect(cardElement.requestUpdate).toHaveBeenCalledWith('hass', null);
        expect(mountedCard.requestUpdate).toHaveBeenCalledWith('hass', null);
    });

    test('keeps deferring offscreen hass updates for non-visibility cards', () => {
        const cardConfig = {
            type: 'entities',
            entities: ['light.kitchen'],
        };
        const cardWrapper = createWrapper();
        const hass = { states: { 'light.kitchen': { state: 'on' } } };
        const mountedCard = {
            hass,
            requestUpdate: jest.fn(),
        };
        const cardElement = {
            config: cardConfig,
            hass,
            _element: mountedCard,
            requestUpdate: jest.fn(),
            getGridOptions: jest.fn(() => ({ rows: 2, columns: 6 })),
        };
        const context = createContext(cardConfig, cardElement, cardWrapper, hass);
        context._offscreenPopupCards = new Set([cardElement]);

        updateCardElements(context);

        expect(cardElement._bubbleHassPending).toBe(true);
        expect(cardElement.requestUpdate).not.toHaveBeenCalled();
        expect(mountedCard.requestUpdate).not.toHaveBeenCalled();
    });
});

describe('progressive card work', () => {
    function createFakeElement(tag, className = '') {
        const children = [];
        const el = {
            tag,
            className,
            children,
            removed: false,
            appendChild: jest.fn((child) => {
                children.push(child);
                return child;
            }),
            remove: jest.fn(() => {
                el.removed = true;
                // Each removal "costs" more than the step budget, so the
                // progressive teardown splits at every card boundary.
                jest.setSystemTime(Date.now() + 30);
            }),
            querySelector: jest.fn(() => null),
            style: {
                setProperty: jest.fn(),
                removeProperty: jest.fn(),
            },
            classList: {
                add: jest.fn(),
                remove: jest.fn(),
                toggle: jest.fn(),
                contains: jest.fn(() => false),
            },
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
        };
        return el;
    }

    function createProgressiveContext(cardCount) {
        return {
            editor: false,
            detectedEditor: false,
            isStandalonePopUp: true,
            _hass: { states: {} },
            popUp: createFakeElement('div', 'bubble-pop-up'),
            elements: { popUpContainer: createFakeElement('div', 'bubble-pop-up-container') },
            config: {
                cards: Array.from({ length: cardCount }, (_, i) => ({ type: 'button', entity: 'light.l' + i })),
            },
        };
    }

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        createElementMock.mockImplementation((tag, className) => createFakeElement(tag, className));
        global.document = {
            createElement: jest.fn(() => {
                // Each card "costs" more than the step budget, so the
                // progressive build splits at every card boundary.
                jest.setSystemTime(Date.now() + 30);
                const el = createFakeElement('hui-card');
                el.load = jest.fn();
                return el;
            }),
        };
    });

    afterEach(() => {
        jest.useRealTimers();
        delete global.document;
    });

    test('builds one card per macrotask and only then reports completion', () => {
        const context = createProgressiveContext(3);
        const onDone = jest.fn();

        createCardElementsProgressively(context, onDone);

        // The container exists immediately so the open sequence sees primed
        // content, but no card has been built in the calling task.
        expect(context._cardsContainer).toBeTruthy();
        expect(context._cardWrappers).toHaveLength(0);
        expect(onDone).not.toHaveBeenCalled();

        jest.advanceTimersToNextTimer();
        expect(context._cardWrappers).toHaveLength(1);
        expect(onDone).not.toHaveBeenCalled();

        jest.advanceTimersToNextTimer();
        expect(context._cardWrappers).toHaveLength(2);

        jest.advanceTimersToNextTimer();
        expect(context._cardWrappers).toHaveLength(3);
        expect(onDone).not.toHaveBeenCalled();

        // Final step: bookkeeping completes and the caller is notified.
        jest.advanceTimersToNextTimer();
        expect(onDone).toHaveBeenCalledTimes(1);
        expect(context._progressiveCardWork).toBeNull();
        expect(context._managedCards).toHaveLength(3);
    });

    test('settling an in-flight build clears the partial content and never completes it', () => {
        const context = createProgressiveContext(3);
        const onDone = jest.fn();

        createCardElementsProgressively(context, onDone);
        jest.advanceTimersToNextTimer();
        expect(context._cardWrappers).toHaveLength(1);

        settleProgressiveCardWork(context);

        expect(context._progressiveCardWork).toBeNull();
        expect(context._cardsContainer).toBeNull();
        expect(context._cardWrappers).toHaveLength(0);
        expect(context._managedCards).toHaveLength(0);

        jest.runOnlyPendingTimers();
        expect(onDone).not.toHaveBeenCalled();
        expect(context._cardWrappers).toHaveLength(0);
    });

    test('removes cards one per macrotask, last to first, then detaches the container', () => {
        const context = createProgressiveContext(0);
        const wrappers = [createFakeElement('div', 'card'), createFakeElement('div', 'card'), createFakeElement('div', 'card')];
        const container = createFakeElement('div', 'bubble-cards-container');
        context._cardWrappers = wrappers;
        context._managedCards = wrappers.map(() => createFakeElement('hui-card'));
        context._cardsContainer = container;
        context._renderedItems = [container];
        const onDone = jest.fn();

        removeCardElementsProgressively(context, onDone);
        expect(onDone).not.toHaveBeenCalled();

        jest.advanceTimersToNextTimer();
        expect(wrappers[2].removed).toBe(true);
        expect(wrappers[0].removed).toBe(false);

        jest.advanceTimersToNextTimer();
        jest.advanceTimersToNextTimer();
        expect(wrappers[0].removed).toBe(true);
        expect(onDone).not.toHaveBeenCalled();

        jest.advanceTimersToNextTimer();
        expect(container.removed).toBe(true);
        expect(onDone).toHaveBeenCalledTimes(1);
        expect(context._cardsContainer).toBeNull();
        expect(context._progressiveCardWork).toBeNull();
    });

    test('settling an in-flight teardown finishes it synchronously', () => {
        const context = createProgressiveContext(0);
        const wrappers = [createFakeElement('div', 'card'), createFakeElement('div', 'card')];
        const container = createFakeElement('div', 'bubble-cards-container');
        context._cardWrappers = wrappers;
        context._managedCards = [];
        context._cardsContainer = container;
        context._renderedItems = [container];
        const onDone = jest.fn();

        removeCardElementsProgressively(context, onDone);
        jest.advanceTimersToNextTimer();
        expect(wrappers[1].removed).toBe(true);

        settleProgressiveCardWork(context);

        expect(container.removed).toBe(true);
        expect(context._cardsContainer).toBeNull();
        expect(context._progressiveCardWork).toBeNull();

        jest.runOnlyPendingTimers();
        expect(onDone).not.toHaveBeenCalled();
    });

    test('fold-first: builds the head, leaves placeholders, then hydrates after the open', () => {
        const context = createProgressiveContext(30);
        const onDone = jest.fn();

        createCardElementsProgressively(context, onDone);
        jest.runAllTimers(); // head build steps (1 card per step here)

        // Completion is reported with only the head hydrated.
        expect(onDone).toHaveBeenCalledTimes(1);
        expect(context._cardWrappers).toHaveLength(30);
        expect(context._managedCards.filter(Boolean)).toHaveLength(14);
        expect(context._pendingCardHydration).toHaveLength(16);
        expect(context._progressiveCardWork).toBeNull();

        // Post-open resume hydrates the rest, one budgeted step at a time.
        const hydrated = jest.fn();
        resumeCardHydrationProgressively(context, hydrated);
        expect(hydrated).not.toHaveBeenCalled();

        jest.advanceTimersToNextTimer();
        expect(context._managedCards.filter(Boolean).length).toBeGreaterThan(14);
        expect(hydrated).not.toHaveBeenCalled();

        jest.runAllTimers();
        expect(context._managedCards.filter(Boolean)).toHaveLength(30);
        expect(context._pendingCardHydration).toBeNull();
        expect(hydrated).toHaveBeenCalledTimes(1);
        // Hydration invalidates any scrollability measured on partial content.
        expect(context._cachedPopupScrollableState).toBeUndefined();
    });

    test('fold-first: small pop-ups are fully hydrated before completion', () => {
        const context = createProgressiveContext(10);
        const onDone = jest.fn();

        createCardElementsProgressively(context, onDone);
        jest.runAllTimers();

        expect(onDone).toHaveBeenCalledTimes(1);
        expect(context._managedCards.filter(Boolean)).toHaveLength(10);
        expect(context._pendingCardHydration ?? null).toBeNull();
    });

    test('hydration pauses while the user interacts with the pop-up', () => {
        const context = createProgressiveContext(30);
        createCardElementsProgressively(context, () => {});
        jest.runAllTimers();

        const container = context.elements.popUpContainer;
        resumeCardHydrationProgressively(context, () => {});

        // The interaction listeners were installed on the scroll container.
        const scrollHandler = container.addEventListener.mock.calls.find(([type]) => type === 'scroll')?.[1];
        expect(typeof scrollHandler).toBe('function');

        jest.advanceTimersToNextTimer();
        const afterFirstStep = context._managedCards.filter(Boolean).length;
        expect(afterFirstStep).toBeGreaterThan(14);

        // User scrolls: the next step waits for quiet instead of hydrating.
        scrollHandler();
        jest.advanceTimersToNextTimer();
        expect(context._managedCards.filter(Boolean)).toHaveLength(afterFirstStep);

        // Quiet again: hydration resumes and finishes.
        jest.runAllTimers();
        expect(context._managedCards.filter(Boolean)).toHaveLength(30);
        expect(container.removeEventListener).toHaveBeenCalled();
    });

    test('settling an in-flight hydration keeps the rendered content', () => {
        const context = createProgressiveContext(30);
        createCardElementsProgressively(context, () => {});
        jest.runAllTimers();

        resumeCardHydrationProgressively(context, () => {});
        jest.advanceTimersToNextTimer();
        const hydratedCount = context._managedCards.filter(Boolean).length;
        expect(hydratedCount).toBeGreaterThan(14);

        settleProgressiveCardWork(context);

        // Additive work: cancel must not clear the live pop-up content.
        expect(context._cardsContainer).not.toBeNull();
        expect(context._managedCards.filter(Boolean)).toHaveLength(hydratedCount);
        expect(context._progressiveCardWork).toBeNull();

        jest.runAllTimers();
        expect(context._managedCards.filter(Boolean)).toHaveLength(hydratedCount);
    });

    test('falls back to the synchronous builder in edit mode', () => {
        const context = createProgressiveContext(2);
        context.editor = true;
        const onDone = jest.fn();

        createCardElementsProgressively(context, onDone);

        // Synchronous path: completion reported before any timer runs.
        expect(onDone).toHaveBeenCalledTimes(1);
        expect(context._progressiveCardWork ?? null).toBeNull();
    });
});

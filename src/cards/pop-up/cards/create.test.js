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

// Budgets and holds use the monotonic clock in production; tests simulate
// cost with jest.setSystemTime, which only moves Date.now.
jest.unstable_mockModule('../../../tools/monotonic-time.js', () => ({
    monotonicNow: () => Date.now(),
}));

const { createEditorCardElements } = await import('./editor/index.js');
const { _createHuiCard, _isStandalonePopupCardConfig, createCardElements, createCardElementsProgressively, registerPopupOpenActivityProbe, removeCardElementsProgressively, resumeCardHydrationProgressively, settleProgressiveCardWork, updateCardElements } = await import('./create.js');

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
                // Each card "costs" more than the covered build budget
                // (300ms), so the progressive build splits at every card
                // boundary. (Hydration and teardown budgets are smaller, so
                // they split too.)
                jest.setSystemTime(Date.now() + 310);
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

        // Completion is reported with only the head hydrated. With the 800px
        // viewport fallback and full-width one-row cards, the row-coverage
        // head is ceil(800/64) + 1 margin row = 14 cards.
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

    test('replays one card sync when a hass tick lands mid-build', () => {
        const context = createProgressiveContext(3);
        const hassAtStart = context._hass;

        createCardElementsProgressively(context, () => {});
        jest.advanceTimersToNextTimer();
        expect(context._managedCards).toHaveLength(1);
        expect(context._managedCards[0].hass).toBe(hassAtStart);

        // A state update arrives while the build is still splitting steps.
        const freshHass = { states: { 'light.l0': { state: 'on' } } };
        context._hass = freshHass;

        jest.runAllTimers();

        // The completion pass re-applied the latest hass to the early cards.
        expect(context._managedCards[0].hass).toBe(freshHass);
        expect(context._managedCards[2].hass).toBe(freshHass);
    });

    test('marks placeholder cells and unmarks them at hydration', () => {
        const context = createProgressiveContext(30);
        createCardElementsProgressively(context, () => {});
        jest.runAllTimers();

        const placeholderWrapper = context._cardWrappers[20];
        expect(placeholderWrapper.className).toContain('is-placeholder');

        resumeCardHydrationProgressively(context, () => {});
        jest.runAllTimers();

        expect(placeholderWrapper.classList.remove).toHaveBeenCalledWith('is-placeholder');
    });

    test('hydrates at most one placeholder per visibility delivery, then drains the rest in budgeted steps', () => {
        let observerCallback = null;
        global.IntersectionObserver = class {
            constructor(callback) {
                observerCallback = callback;
            }
            observe() {}
            disconnect() {}
        };

        try {
            const context = createProgressiveContext(30);
            createCardElementsProgressively(context, () => {});
            jest.runAllTimers();

            expect(typeof observerCallback).toBe('function');
            expect(context._managedCards.filter(Boolean)).toHaveLength(14);

            // Several placeholders intersect at once (head not covering the fold).
            observerCallback([
                { target: context._cardWrappers[20], isIntersecting: true },
                { target: context._cardWrappers[21], isIntersecting: true },
                { target: context._cardWrappers[22], isIntersecting: true },
            ]);

            // Only one hydrated synchronously (the first delivered), the rest
            // moved to the front of the queue in delivery order.
            expect(context._managedCards.filter(Boolean)).toHaveLength(15);
            expect(context._managedCards[20]).toBeTruthy();
            const frontConfigIndexes = context._pendingCardHydration.slice(0, 2).map((entry) => entry.configIndex);
            expect(frontConfigIndexes).toEqual([21, 22]);

            // A budgeted stepper took over for the remainder.
            expect(context._progressiveCardWork?.type).toBe('hydrate');

            jest.runAllTimers();
            expect(context._managedCards.filter(Boolean)).toHaveLength(30);
            expect(context._pendingCardHydration).toBeNull();
        } finally {
            delete global.IntersectionObserver;
        }
    });

    test('hands the completion callback to a visibility-started stepper instead of dropping it', () => {
        let observerCallback = null;
        global.IntersectionObserver = class {
            constructor(callback) {
                observerCallback = callback;
            }
            observe() {}
            disconnect() {}
        };

        try {
            const context = createProgressiveContext(30);
            createCardElementsProgressively(context, () => {});
            jest.runAllTimers();

            observerCallback([
                { target: context._cardWrappers[20], isIntersecting: true },
                { target: context._cardWrappers[21], isIntersecting: true },
            ]);
            expect(context._progressiveCardWork?.type).toBe('hydrate');

            // The post-open resume arrives while the IO stepper is running.
            const onDone = jest.fn();
            resumeCardHydrationProgressively(context, onDone);
            expect(onDone).not.toHaveBeenCalled();

            jest.runAllTimers();
            expect(context._managedCards.filter(Boolean)).toHaveLength(30);
            expect(onDone).toHaveBeenCalledTimes(1);
        } finally {
            delete global.IntersectionObserver;
        }
    });

    test('settles an in-flight hydration before a full rebuild in updateCardElements', () => {
        const context = createProgressiveContext(30);
        createCardElementsProgressively(context, () => {});
        jest.runAllTimers();

        resumeCardHydrationProgressively(context, () => {});
        expect(context._progressiveCardWork?.type).toBe('hydrate');

        // The card list changes while hydration is in flight: the rebuild
        // must not leave the stale stepper running over the new content.
        context.config.cards = context.config.cards.slice(0, 5);
        updateCardElements(context);

        expect(context._progressiveCardWork).toBeNull();
        expect(context._managedCards.filter(Boolean)).toHaveLength(5);

        jest.runAllTimers();
        expect(context._managedCards.filter(Boolean)).toHaveLength(5);
    });

    test('teardown yields while a pop-up open is in flight, then proceeds', () => {
        let openInFlight = true;
        registerPopupOpenActivityProbe(() => openInFlight);

        try {
            const context = createProgressiveContext(0);
            const wrappers = [createFakeElement('div', 'card'), createFakeElement('div', 'card')];
            const container = createFakeElement('div', 'bubble-cards-container');
            context._cardWrappers = wrappers;
            context._managedCards = [];
            context._cardsContainer = container;
            context._renderedItems = [container];
            const onDone = jest.fn();

            removeCardElementsProgressively(context, onDone);

            // Another pop-up is opening: the teardown reschedules untouched.
            jest.advanceTimersToNextTimer();
            jest.advanceTimersToNextTimer();
            expect(wrappers[1].removed).toBe(false);
            expect(onDone).not.toHaveBeenCalled();

            // The open settled: the teardown resumes.
            openInFlight = false;
            jest.runAllTimers();
            expect(wrappers[0].removed).toBe(true);
            expect(wrappers[1].removed).toBe(true);
            expect(onDone).toHaveBeenCalledTimes(1);
        } finally {
            registerPopupOpenActivityProbe(null);
        }
    });

    test('teardown yields to an in-flight hydration stepper on another pop-up', () => {
        const hydratingContext = createProgressiveContext(30);
        createCardElementsProgressively(hydratingContext, () => {});
        jest.runAllTimers();
        resumeCardHydrationProgressively(hydratingContext, () => {});
        expect(hydratingContext._progressiveCardWork?.type).toBe('hydrate');

        const closingContext = createProgressiveContext(0);
        const wrappers = [createFakeElement('div', 'card')];
        const container = createFakeElement('div', 'bubble-cards-container');
        closingContext._cardWrappers = wrappers;
        closingContext._managedCards = [];
        closingContext._cardsContainer = container;
        closingContext._renderedItems = [container];

        removeCardElementsProgressively(closingContext, () => {});

        // First teardown tick lands while the hydration stepper is alive: it
        // must yield. (Timers are shared, so hydration steps run too.)
        jest.advanceTimersToNextTimer();
        expect(wrappers[0].removed).toBe(false);

        // Once hydration completes, the teardown proceeds.
        jest.runAllTimers();
        expect(hydratingContext._managedCards.filter(Boolean)).toHaveLength(30);
        expect(wrappers[0].removed).toBe(true);
    });

    test('synthetic wake scrolls do not trip the hydration interaction hold', () => {
        const context = createProgressiveContext(30);
        createCardElementsProgressively(context, () => {});
        jest.runAllTimers();

        const container = context.elements.popUpContainer;
        resumeCardHydrationProgressively(context, () => {});
        const scrollHandler = container.addEventListener.mock.calls.find(([type]) => type === 'scroll')?.[1];

        jest.advanceTimersToNextTimer();
        const afterFirstStep = context._managedCards.filter(Boolean).length;
        expect(afterFirstStep).toBeGreaterThan(14);

        // The post-open wake dispatches synthetic scrolls under this marker:
        // the next step must run on time instead of holding for a phantom
        // interaction.
        context._suppressHydrationInteractionHold = true;
        scrollHandler();
        context._suppressHydrationInteractionHold = false;

        jest.advanceTimersToNextTimer();
        expect(context._managedCards.filter(Boolean).length).toBeGreaterThan(afterFirstStep);
    });

    test('extends the head until multi-column cards cover the fold', () => {
        // Half-width cards: 0.5 estimated rows each, so covering the
        // 14-row fold target takes 28 cards instead of 14.
        const context = createProgressiveContext(40);
        context.config.cards = context.config.cards.map((card) => ({
            ...card,
            grid_options: { columns: 6 },
        }));

        createCardElementsProgressively(context, () => {});
        jest.runAllTimers();

        expect(context._managedCards.filter(Boolean)).toHaveLength(28);
        expect(context._pendingCardHydration).toHaveLength(12);
    });

    test('shrinks the row-coverage head on small viewports', () => {
        // The fold needs ceil(320/64) + 1 margin row = 6 rows, so the head
        // stops at 6 full-width cards instead of the 14 of an 800px viewport.
        global.window = { innerHeight: 320 };
        try {
            const context = createProgressiveContext(30);
            createCardElementsProgressively(context, () => {});
            jest.runAllTimers();

            expect(context._managedCards.filter(Boolean)).toHaveLength(6);
            expect(context._pendingCardHydration).toHaveLength(24);
        } finally {
            delete global.window;
        }
    });

    test('state-driven visibility cards never count toward fold coverage', () => {
        // 17 conditional cards would nominally cover the 17-row fold, but any
        // of them can render 0px: the head must extend past them.
        const context = createProgressiveContext(30);
        context.config.cards = context.config.cards.map((card, i) => (
            i < 17 ? { ...card, visibility: [{ condition: 'state' }] } : card
        ));

        createCardElementsProgressively(context, () => {});
        jest.runAllTimers();

        // 17 zero-area cards + 17 regular rows land past card 34 > 30: no
        // fold-first at all, everything builds up-front.
        expect(context._managedCards.filter(Boolean)).toHaveLength(30);
        expect(context._pendingCardHydration ?? null).toBeNull();
    });

    test('schedules zero-delay steps through scheduler.postTask and aborts them on settle', () => {
        const postedTasks = [];
        global.scheduler = {
            postTask: jest.fn((fn, options) => {
                postedTasks.push({ fn, signal: options?.signal, priority: options?.priority });
                return { catch: () => {} };
            }),
        };

        try {
            const context = createProgressiveContext(3);
            const onDone = jest.fn();
            createCardElementsProgressively(context, onDone);

            // Steps go through the scheduler at user-visible priority.
            expect(postedTasks).toHaveLength(1);
            expect(postedTasks[0].priority).toBe('user-visible');

            postedTasks.shift().fn();
            expect(context._cardWrappers).toHaveLength(1);

            // Settling aborts the pending step: the build never completes.
            const pending = postedTasks.shift();
            settleProgressiveCardWork(context);
            expect(pending.signal.aborted).toBe(true);

            expect(onDone).not.toHaveBeenCalled();
            expect(context._cardWrappers).toHaveLength(0);
        } finally {
            delete global.scheduler;
        }
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

// Contract test for the Home Assistant element every pop-up child card is
// built with. It exists so a HA release that renames or drops hui-card fails
// here, during an upgrade, instead of rendering empty pop-ups for users.
describe('hui-card creation contract', () => {
    const originalCustomElements = global.customElements;
    const originalDocument = global.document;
    const originalWindow = global.window;

    function installRegistry({ huiCardDefined }) {
        global.customElements = { get: (tag) => (tag === 'hui-card' && huiCardDefined ? class {} : undefined) };
        global.document = {
            createElement: jest.fn((tag) => ({ tagName: tag.toUpperCase(), load: jest.fn() })),
        };
    }

    afterEach(() => {
        global.customElements = originalCustomElements;
        global.document = originalDocument;
        global.window = originalWindow;
        jest.restoreAllMocks();
    });

    test('builds through hui-card and its property contract when HA provides it', () => {
        installRegistry({ huiCardDefined: true });
        global.window = {};
        const context = { _hass: { states: {} } };

        const el = _createHuiCard({ type: 'markdown' }, context, false);

        expect(document.createElement).toHaveBeenCalledWith('hui-card');
        expect(el.hass).toBe(context._hass);
        expect(el.layout).toBe('grid');
        expect(el.config).toEqual({ type: 'markdown' });
        expect(el.load).toHaveBeenCalledTimes(1);
    });

    test('falls back to the public card helpers when HA no longer provides hui-card', async () => {
        // Fresh module instance: the one-shot warning flag is module-level, so
        // the assertion below must not depend on what earlier tests did.
        jest.resetModules();
        installRegistry({ huiCardDefined: false });
        const fallbackEl = {};
        const helpers = { createCardElement: jest.fn(() => fallbackEl) };
        global.window = { loadCardHelpers: jest.fn(() => Promise.resolve(helpers)) };
        jest.spyOn(console, 'warn').mockImplementation(() => {});
        const context = { _hass: { states: {} } };
        const { _createHuiCard: createFresh } = await import('./create.js');

        // First call kicks off the (async) helper resolution and has nothing
        // to fall back on yet.
        createFresh({ type: 'markdown' }, context, false);
        await Promise.resolve();
        await Promise.resolve();

        const el = createFresh({ type: 'markdown' }, context, false);

        expect(helpers.createCardElement).toHaveBeenCalledWith({ type: 'markdown' });
        expect(el).toBe(fallbackEl);
        expect(el.hass).toBe(context._hass);
        // Warned once, naming the drift, so a user report is diagnosable.
        // Warned exactly once across both calls, naming the drift, so a user
        // report is diagnosable without spamming the console.
        expect(console.warn).toHaveBeenCalledTimes(1);
        expect(String(console.warn.mock.calls[0][0])).toContain('hui-card');
    });
});

describe('editor preview rebuilds', () => {
    const originalCustomElements = global.customElements;
    const originalDocument = global.document;
    const originalWindow = global.window;

    function installRegistry() {
        global.customElements = { get: (tag) => (tag === 'hui-card' ? class {} : undefined) };
        global.document = {
            createElement: jest.fn((tag) => ({
                tagName: tag.toUpperCase(),
                load: jest.fn(),
                listeners: {},
                addEventListener(type, handler) {
                    (this.listeners[type] ||= []).push(handler);
                },
                removeEventListener(type, handler) {
                    this.listeners[type] = (this.listeners[type] || []).filter((entry) => entry !== handler);
                },
            })),
        };
        global.window = {};
        createElementMock.mockImplementation(() => ({
            classList: { add: jest.fn(), remove: jest.fn(), toggle: jest.fn() },
            style: {},
            appendChild: jest.fn(),
            remove: jest.fn(),
        }));
    }

    function createEditorContext(cards) {
        return {
            editor: true,
            _hass: { states: {} },
            config: { cards },
            popUp: { appendChild: jest.fn() },
            elements: { popUpContainer: { appendChild: jest.fn(), querySelector: () => null } },
        };
    }

    // Drive one preview build the way the editor list does: the structure
    // builder asks for a card per config, and the cards it gets back are what
    // ends up in `_managedCards`.
    function runBuild(context) {
        const options = createEditorCardElements.mock.calls.at(-1)[2];
        const cards = createEditorCardElements.mock.calls.at(-1)[1];
        context._managedCards = cards.map((cardConfig) => options.createCard(cardConfig)).filter(Boolean);
        context._cardWrappers = context._managedCards.map(() => ({ classList: { toggle: jest.fn() }, style: {} }));
        context._managedCards.forEach((cardEl, index) => {
            options.bindCardLayoutUpdates(cardEl, context._cardWrappers[index], context, index);
        });
        return options;
    }

    afterEach(() => {
        global.customElements = originalCustomElements;
        global.document = originalDocument;
        global.window = originalWindow;
        createEditorCardElements.mockReset();
        createElementMock.mockReset();
    });

    test('reuses the cards whose config the interaction did not touch', () => {
        installRegistry();
        const first = { type: 'tile', entity: 'light.a' };
        const second = { type: 'tile', entity: 'light.b' };
        const third = { type: 'tile', entity: 'light.c' };
        const context = createEditorContext([first, second, third]);

        createCardElements(context);
        const options = runBuild(context);
        const built = context._managedCards;

        // A reorder keeps every config object, only their order changes.
        context.config = { ...context.config, cards: [third, first, second] };
        options.rebuildCards();
        const rebuilt = runBuild(context);

        expect(context._managedCards).toEqual([built[2], built[0], built[1]]);
        expect(rebuilt).toBeDefined();
    });

    test('builds a fresh card for a config the interaction replaced', () => {
        installRegistry();
        const kept = { type: 'tile', entity: 'light.a' };
        const replaced = { type: 'tile', entity: 'light.b' };
        const context = createEditorContext([kept, replaced]);

        createCardElements(context);
        const options = runBuild(context);
        const built = context._managedCards;

        context.config = { ...context.config, cards: [kept, { type: 'tile', entity: 'light.b', grid_options: { columns: 6 } }] };
        options.rebuildCards();
        runBuild(context);

        expect(context._managedCards[0]).toBe(built[0]);
        expect(context._managedCards[1]).not.toBe(built[1]);
    });

    test('does not stack a card-updated listener on a reused card', () => {
        installRegistry();
        const first = { type: 'tile', entity: 'light.a' };
        const second = { type: 'tile', entity: 'light.b' };
        const context = createEditorContext([first, second]);

        createCardElements(context);
        const options = runBuild(context);
        const reusedCard = context._managedCards[0];

        context.config = { ...context.config, cards: [second, first] };
        options.rebuildCards();
        runBuild(context);

        expect(reusedCard.listeners['card-updated']).toHaveLength(1);
    });
});

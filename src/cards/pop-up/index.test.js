import { beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('./changes.js', () => ({
    changeEditor: jest.fn(),
    changeStyle: jest.fn(),
    clearStyleUpdateFrame: jest.fn((context) => {
        if (context?._styleUpdateFrame == null) {
            return;
        }

        global.cancelAnimationFrame?.(context._styleUpdateFrame);
        context._styleUpdateFrame = null;
    }),
    syncHeaderVisibilityClasses: jest.fn(),
    changeTriggered: jest.fn(),
}));

jest.unstable_mockModule('./create.js', () => ({
    createHeader: jest.fn(),
    createStructure: jest.fn(),
    clearStandaloneOnboarding: jest.fn(),
    prepareStructure: jest.fn(),
    prepareStandaloneStructure: jest.fn(),
    renderHeaderButton: jest.fn(),
    renderStandaloneOnboarding: jest.fn(),
}));

jest.unstable_mockModule('./helpers.js', () => ({
    cleanupPopupRuntime: jest.fn(),
    isPopupOpenSequenceActive: jest.fn(() => false),
    registerPopupContext: jest.fn(),
    syncDeferredPopupHostLayout: jest.fn(),
    syncPopupOpenStateWithLocation: jest.fn(),
}));

jest.unstable_mockModule('./navigation-picker-bridge.js', () => ({
    initPopUpHashNavigationBridge: jest.fn(),
    isHashOnCurrentPage: jest.fn(() => false),
    registerPopUpHash: jest.fn(),
}));

jest.unstable_mockModule('./migration.js', () => ({
    isStandalonePopUpConfig: jest.fn((config) => !!(
        config &&
        config.type === 'custom:bubble-card' &&
        config.card_type === 'pop-up' &&
        Array.isArray(config.cards)
    )),
}));

jest.unstable_mockModule('./cards/index.js', () => ({ noteFoldCalibration: jest.fn(),
    cleanupPopUpCards: jest.fn(),
    handlePopUpCards: jest.fn(),
}));

const { cleanupPopUp, handlePopUp } = await import('./index.js');
const { changeEditor } = await import('./changes.js');
const { changeStyle } = await import('./changes.js');
const { changeTriggered } = await import('./changes.js');
const { cleanupPopUpCards, handlePopUpCards } = await import('./cards/index.js');
const { createHeader, createStructure } = await import('./create.js');
const { renderHeaderButton } = await import('./create.js');
const { cleanupPopupRuntime, isPopupOpenSequenceActive, syncPopupOpenStateWithLocation } = await import('./helpers.js');
const { registerPopUpHash } = await import('./navigation-picker-bridge.js');

function createOpenPopupContext(overrides = {}) {
    const unitSystem = overrides.unitSystem || { temperature: '°C' };
    const locale = overrides.locale || { language: 'fr' };

    const { config: configOverride, hass: hassOverride, ...rest } = overrides;

    return {
        cardType: 'pop-up',
        config: {
            hash: '#kitchen-popup',
            name: 'Kitchen',
            icon: 'mdi:lightbulb',
            entity: 'light.kitchen',
            ...configOverride,
        },
        isConnected: true,
        editor: false,
        detectedEditor: false,
        popUp: {
            classList: {
                contains: () => true,
            },
        },
        elements: {
            header: {},
        },
        _hass: hassOverride || {
            states: {
                'light.kitchen': { state: 'on' },
            },
            locale,
            config: { unit_system: unitSystem },
        },
        ...rest,
    };
}

describe('handlePopUp performance guards', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.ShadowRoot = global.ShadowRoot || class ShadowRoot {};
        global.location = {
            hash: '#kitchen-popup',
            pathname: '/lovelace/test',
        };
    });

    test('skips redundant hash registration and header refresh on unrelated updates', async () => {
        const sharedState = { state: 'on' };
        const locale = { language: 'fr' };
        const unitSystem = { temperature: '°C' };
        const context = createOpenPopupContext({
            hass: {
                states: {
                    'light.kitchen': sharedState,
                },
                locale,
                config: { unit_system: unitSystem },
            },
        });

        await handlePopUp(context);
        await handlePopUp(context);

        expect(registerPopUpHash).toHaveBeenCalledTimes(1);
        expect(renderHeaderButton).toHaveBeenCalledTimes(1);
    });

    test('refreshes the header when the popup entity state changes', async () => {
        const locale = { language: 'fr' };
        const unitSystem = { temperature: '°C' };
        const context = createOpenPopupContext({
            hass: {
                states: {
                    'light.kitchen': { state: 'on' },
                },
                locale,
                config: { unit_system: unitSystem },
            },
        });

        await handlePopUp(context);
        context._hass = {
            states: {
                'light.kitchen': { state: 'off' },
            },
            locale,
            config: { unit_system: unitSystem },
        };

        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(2);
        expect(registerPopUpHash).toHaveBeenCalledTimes(1);
    });

    test('keeps refreshing the header when relative time fields are displayed', async () => {
        const sharedState = {
            state: 'on',
            last_changed: '2026-04-20T10:00:00.000Z',
            last_updated: '2026-04-20T10:00:00.000Z',
        };
        const locale = { language: 'fr' };
        const unitSystem = { temperature: '°C' };
        const context = createOpenPopupContext({
            config: {
                show_last_changed: true,
                show_last_updated: true,
            },
            hass: {
                states: {
                    'light.kitchen': sharedState,
                },
                locale,
                config: { unit_system: unitSystem },
            },
        });

        await handlePopUp(context);
        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(2);
    });

    test('refreshes the header when a sub-button visibility condition entity changes', async () => {
        const locale = { language: 'fr' };
        const unitSystem = { temperature: '°C' };
        const sharedKitchen = { state: 'on' };
        const sharedTemperature = { state: '21.5' };
        const context = createOpenPopupContext({
            config: {
                sub_button: [
                    {
                        entity: 'sensor.temperature',
                        visibility: [
                            { condition: 'state', entity: 'input_boolean.show_humidity', state: 'off' },
                        ],
                    },
                ],
            },
            hass: {
                states: {
                    'light.kitchen': sharedKitchen,
                    'sensor.temperature': sharedTemperature,
                    'input_boolean.show_humidity': { state: 'off' },
                },
                locale,
                config: { unit_system: unitSystem },
            },
        });

        await handlePopUp(context);
        expect(renderHeaderButton).toHaveBeenCalledTimes(1);

        // Only the helper driving the conditional visibility changed: the
        // sub-button entities themselves are untouched.
        context._hass = {
            states: {
                'light.kitchen': sharedKitchen,
                'sensor.temperature': sharedTemperature,
                'input_boolean.show_humidity': { state: 'on' },
            },
            locale,
            config: { unit_system: unitSystem },
        };

        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(2);
    });

    test('refreshes the header when a grouped sub-button visibility entity changes', async () => {
        const locale = { language: 'fr' };
        const unitSystem = { temperature: '°C' };
        const sharedKitchen = { state: 'on' };
        const context = createOpenPopupContext({
            config: {
                sub_button: {
                    main: [
                        {
                            group: [
                                {
                                    entity: 'sensor.temperature',
                                    visibility: [
                                        { condition: 'state', entity: 'input_boolean.show_humidity', state: 'off' },
                                    ],
                                },
                            ],
                        },
                    ],
                    bottom: [],
                },
            },
            hass: {
                states: {
                    'light.kitchen': sharedKitchen,
                    'sensor.temperature': { state: '21.5' },
                    'input_boolean.show_humidity': { state: 'off' },
                },
                locale,
                config: { unit_system: unitSystem },
            },
        });

        await handlePopUp(context);
        expect(renderHeaderButton).toHaveBeenCalledTimes(1);

        context._hass = {
            states: {
                'light.kitchen': sharedKitchen,
                'sensor.temperature': context._hass.states['sensor.temperature'],
                'input_boolean.show_humidity': { state: 'on' },
            },
            locale,
            config: { unit_system: unitSystem },
        };

        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(2);
    });

    test('keeps refreshing the header when a condition cannot be tracked by entity', async () => {
        const sharedKitchen = { state: 'on' };
        const locale = { language: 'fr' };
        const unitSystem = { temperature: '°C' };
        const hass = {
            states: { 'light.kitchen': sharedKitchen },
            locale,
            config: { unit_system: unitSystem },
        };
        const context = createOpenPopupContext({
            config: {
                sub_button: [
                    {
                        entity: 'light.kitchen',
                        visibility: [
                            { condition: 'time', after: '22:00:00' },
                        ],
                    },
                ],
            },
            hass,
        });

        await handlePopUp(context);
        // Nothing changed at all, yet a time condition can flip on its own.
        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(2);
    });

    test('still skips the header refresh when nothing the header depends on changed', async () => {
        const sharedKitchen = { state: 'on' };
        const sharedTemperature = { state: '21.5' };
        const sharedHelper = { state: 'off' };
        const locale = { language: 'fr' };
        const unitSystem = { temperature: '°C' };
        const states = {
            'light.kitchen': sharedKitchen,
            'sensor.temperature': sharedTemperature,
            'input_boolean.show_humidity': sharedHelper,
            'light.unrelated': { state: 'off' },
        };
        const context = createOpenPopupContext({
            config: {
                sub_button: [
                    {
                        entity: 'sensor.temperature',
                        visibility: [
                            { condition: 'state', entity: 'input_boolean.show_humidity', state: 'off' },
                        ],
                    },
                ],
            },
            hass: { states, locale, config: { unit_system: unitSystem } },
        });

        await handlePopUp(context);

        context._hass = {
            states: { ...states, 'light.unrelated': { state: 'on' } },
            locale,
            config: { unit_system: unitSystem },
        };

        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(1);
    });

    test('renders the popup header before applying popup styles', async () => {
        const context = createOpenPopupContext();

        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(1);
        expect(changeStyle).toHaveBeenCalledTimes(1);
        expect(renderHeaderButton.mock.invocationCallOrder[0]).toBeLessThan(changeStyle.mock.invocationCallOrder[0]);
    });

    test('re-registers popup hash metadata when popup header metadata changes', async () => {
        const context = createOpenPopupContext();

        await handlePopUp(context);
        context.config = {
            ...context.config,
            name: 'Kitchen lights',
        };

        await handlePopUp(context);

        expect(registerPopUpHash).toHaveBeenCalledTimes(2);
    });

    test('skips header refresh when sub_button is defined but empty', async () => {
        const sharedState = { state: 'on' };
        const locale = { language: 'fr' };
        const unitSystem = { temperature: '°C' };
        const context = createOpenPopupContext({
            config: {
                sub_button: { main: [], bottom: [] },
            },
            hass: {
                states: { 'light.kitchen': sharedState },
                locale,
                config: { unit_system: unitSystem },
            },
        });

        await handlePopUp(context);
        await handlePopUp(context);
        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(1);
    });

    test('refreshes header when a sub-button entity state changes', async () => {
        const locale = { language: 'fr' };
        const unitSystem = { temperature: '°C' };
        const livingState = { state: 'off' };
        const context = createOpenPopupContext({
            config: {
                sub_button: {
                    main: [{ entity: 'light.living' }],
                    bottom: [],
                },
            },
            hass: {
                states: {
                    'light.kitchen': { state: 'on' },
                    'light.living': livingState,
                },
                locale,
                config: { unit_system: unitSystem },
            },
        });

        await handlePopUp(context);
        // Same hass object references → no refresh
        await handlePopUp(context);
        expect(renderHeaderButton).toHaveBeenCalledTimes(1);

        // Sub-button entity state object changes
        context._hass = {
            states: {
                'light.kitchen': context._hass.states['light.kitchen'],
                'light.living': { state: 'on' },
            },
            locale,
            config: { unit_system: unitSystem },
        };
        await handlePopUp(context);
        expect(renderHeaderButton).toHaveBeenCalledTimes(2);
    });

    test('skips standalone child-card reconciliation while the popup stays inactive', async () => {
        const context = createOpenPopupContext({
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: false,
        });

        await handlePopUp(context);

        expect(handlePopUpCards).not.toHaveBeenCalled();
    });

    test('skips standalone shell/style work while the popup stays inactive', async () => {
        global.location.hash = '';

        const context = createOpenPopupContext({
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: false,
        });

        await handlePopUp(context);

        expect(changeStyle).not.toHaveBeenCalled();
        expect(renderHeaderButton).not.toHaveBeenCalled();
        expect(context._standaloneNeedsShellRefresh).toBe(true);
    });

    test('holds rendering work while a standalone open is in flight', async () => {
        isPopupOpenSequenceActive.mockReturnValueOnce(true);
        const context = createOpenPopupContext({
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: true,
        });

        await handlePopUp(context);

        // Any render during the covered build or the slide re-rasters the
        // moving layer: the tick is held and flushed once the open settles.
        expect(context._pendingOpenSettledUpdate).toBe(true);
        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(renderHeaderButton).not.toHaveBeenCalled();
    });

    test('keeps evaluating triggers while an open is in flight', async () => {
        isPopupOpenSequenceActive.mockReturnValueOnce(true);
        const context = createOpenPopupContext({
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: true,
        });

        await handlePopUp(context);

        // A condition that pulses within the open window must still be seen:
        // holding this would make the pop-up miss its own trigger_close.
        expect(changeTriggered).toHaveBeenCalledWith(context);
    });

    test('keeps editor previews updating while an open is in flight', async () => {
        isPopupOpenSequenceActive.mockReturnValueOnce(true);
        const context = createOpenPopupContext({
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: true,
            editor: true,
        });

        await handlePopUp(context);

        expect(context._pendingOpenSettledUpdate).toBeUndefined();
    });

    test('keeps standalone child-card reconciliation when the popup is active', async () => {
        const context = createOpenPopupContext({
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: true,
        });

        await handlePopUp(context);

        expect(handlePopUpCards).toHaveBeenCalledTimes(1);
    });

    test('re-syncs popup open state from the current hash for initialized popups', async () => {
        const context = createOpenPopupContext({
            popUp: {
                classList: {
                    contains: jest.fn(() => false),
                },
            },
        });

        await handlePopUp(context);

        expect(syncPopupOpenStateWithLocation).toHaveBeenCalledWith(context, false);
    });

    test('re-evaluates trigger state when the app regains focus', async () => {
        const previousWindow = global.window;
        const mockWindow = new EventTarget();
        delete mockWindow.__bubbleWakeSyncListenersAdded;
        global.window = mockWindow;
        jest.useFakeTimers();

        const context = createOpenPopupContext();

        await handlePopUp(context);
        jest.clearAllMocks();

        mockWindow.dispatchEvent(new Event('focus'));

        expect(syncPopupOpenStateWithLocation).toHaveBeenCalledWith(context, false);
        expect(changeTriggered).toHaveBeenCalledWith(context);

        jest.runOnlyPendingTimers();
        jest.useRealTimers();
        global.window = previousWindow;
    });

    test('wake sync sees popups registered after the cache was built', async () => {
        const previousWindow = global.window;
        const mockWindow = new EventTarget();
        delete mockWindow.__bubbleWakeSyncListenersAdded;
        global.window = mockWindow;
        jest.useFakeTimers();

        const contextA = createOpenPopupContext();
        await handlePopUp(contextA);

        // First wake builds the strong-reference context cache.
        mockWindow.dispatchEvent(new Event('focus'));

        // A popup registered afterwards must invalidate that cache, or every
        // later wake keeps syncing the stale list without it.
        const contextB = createOpenPopupContext({ config: { hash: '#second-popup' } });
        await handlePopUp(contextB);
        jest.clearAllMocks();

        mockWindow.dispatchEvent(new Event('focus'));

        expect(syncPopupOpenStateWithLocation).toHaveBeenCalledWith(contextA, false);
        expect(syncPopupOpenStateWithLocation).toHaveBeenCalledWith(contextB, false);

        jest.runOnlyPendingTimers();
        jest.useRealTimers();
        global.window = previousWindow;
    });

    test('does not force hash-based reopen while editing', async () => {
        const context = createOpenPopupContext({
            editor: true,
        });

        await handlePopUp(context);

        expect(syncPopupOpenStateWithLocation).not.toHaveBeenCalled();
    });

    test('refreshes standalone popup headers in detected editor previews', async () => {
        global.location.hash = '';
        const context = createOpenPopupContext({
            detectedEditor: true,
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: false,
        });

        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(1);
        expect(changeStyle).toHaveBeenCalledTimes(1);
    });

    test('avoids duplicate standalone reconciliation when changeEditor already handled it', async () => {
        const context = createOpenPopupContext({
            isStandalonePopUp: true,
            _standalonePopUpCardsActive: true,
            editor: true,
        });

        changeEditor.mockReturnValueOnce(true);

        await handlePopUp(context);

        expect(handlePopUpCards).not.toHaveBeenCalled();
    });

    test('renders the legacy header button during popup initialization', async () => {
        const rootNode = new global.ShadowRoot();
        const context = createOpenPopupContext({
            cardType: undefined,
            isStandalonePopUp: false,
            getRootNode: () => rootNode,
        });

        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(1);
        expect(typeof context.refreshPopupHeader).toBe('function');
    });

    test('defers standalone initialization shell work while the popup stays inactive', async () => {
        global.location.hash = '';

        const rootNode = new global.ShadowRoot();
        const context = createOpenPopupContext({
            cardType: undefined,
            isStandalonePopUp: true,
            getRootNode: () => rootNode,
            config: {
                type: 'custom:bubble-card',
                card_type: 'pop-up',
                hash: '#kitchen-popup',
                cards: [{ type: 'gauge', entity: 'sensor.temperature' }],
            },
        });

        await handlePopUp(context);

        // Shell creation (header + structure) is deferred until first open
        // for inactive pop-ups — keeps the shadow-root empty while closed.
        expect(createHeader).not.toHaveBeenCalled();
        expect(createStructure).not.toHaveBeenCalled();
        expect(changeStyle).not.toHaveBeenCalled();
        expect(renderHeaderButton).not.toHaveBeenCalled();
        expect(typeof context.refreshPopupShell).toBe('function');
        expect(context._standaloneNeedsShellRefresh).toBe(true);
        expect(context._standaloneShellCreated).toBe(false);
        expect(typeof context.createStandaloneShell).toBe('function');
    });

    test('initializes a pop-up mounted in light DOM, where the root is the document', async () => {
        // The attachment guard used to test "is my root a ShadowRoot", which is
        // not the same question as "am I attached": a card mounted straight into
        // light DOM is connected and has the document as its root, and was
        // silently skipped forever (no shell, no error, never opens).
        const context = createOpenPopupContext({
            cardType: undefined,
            isStandalonePopUp: false,
            isConnected: true,
            getRootNode: () => ({ nodeType: 9 }),
        });

        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(1);
        expect(typeof context.refreshPopupHeader).toBe('function');
    });

    test('still initializes a pop-up whose shadow subtree is not in the document yet', async () => {
        // Custom stacks (decluttering-card, streamline-card, layout-card…) build
        // their shadow subtree before inserting it in the view, so the pop-up is
        // initialized while it is not connected. See #2552.
        const rootNode = new global.ShadowRoot();
        const context = createOpenPopupContext({
            cardType: undefined,
            isStandalonePopUp: false,
            isConnected: false,
            getRootNode: () => rootNode,
        });

        await handlePopUp(context);

        expect(renderHeaderButton).toHaveBeenCalledTimes(1);
    });

    test('skips a card that is neither in a shadow tree nor connected', async () => {
        const context = createOpenPopupContext({
            cardType: undefined,
            isStandalonePopUp: false,
            isConnected: false,
            getRootNode: () => ({ nodeType: 11 }),
        });

        await handlePopUp(context);

        expect(renderHeaderButton).not.toHaveBeenCalled();
        expect(createStructure).not.toHaveBeenCalled();
        expect(context.refreshPopupHeader).toBe(undefined);
    });

    test('does not mount standalone child cards during popup initialization while inactive', async () => {
        const rootNode = new global.ShadowRoot();
        const context = createOpenPopupContext({
            cardType: undefined,
            isStandalonePopUp: true,
            getRootNode: () => rootNode,
            config: {
                type: 'custom:bubble-card',
                card_type: 'pop-up',
                cards: [{ type: 'gauge', entity: 'sensor.temperature' }],
            },
        });

        await handlePopUp(context);

        expect(handlePopUpCards).not.toHaveBeenCalled();
    });
});

describe('cleanupPopUp', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.cancelAnimationFrame = jest.fn();
    });

    test('cancels any pending style update frame during cleanup', () => {
        const popUpContainer = {
            classList: {
                remove: jest.fn(),
            },
            querySelector: jest.fn(() => null),
        };
        const context = {
            _styleUpdateFrame: 42,
            elements: {
                popUpContainer,
            },
            storedContent: {},
        };

        cleanupPopUp(context);

        expect(cleanupPopupRuntime).toHaveBeenCalledWith(context);
        expect(cleanupPopUpCards).toHaveBeenCalledWith(context);
        expect(global.cancelAnimationFrame).toHaveBeenCalledWith(42);
        expect(context._styleUpdateFrame).toBeNull();
        expect(popUpContainer.classList.remove).toHaveBeenCalledWith('has-placeholder');
        expect(context.storedContent).toBeNull();
    });
});
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
    registerPopupContext: jest.fn(),
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

jest.unstable_mockModule('./cards/index.js', () => ({
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
const { cleanupPopupRuntime, syncPopupOpenStateWithLocation } = await import('./helpers.js');
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

        expect(createHeader).toHaveBeenCalledTimes(1);
        expect(createStructure).toHaveBeenCalledTimes(1);
        expect(changeStyle).not.toHaveBeenCalled();
        expect(renderHeaderButton).not.toHaveBeenCalled();
        expect(typeof context.refreshPopupShell).toBe('function');
        expect(context._standaloneNeedsShellRefresh).toBe(true);
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
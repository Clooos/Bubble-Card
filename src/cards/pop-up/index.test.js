import { beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('./changes.js', () => ({
    changeEditor: jest.fn(),
    changeStyle: jest.fn(),
    syncHeaderVisibilityClasses: jest.fn(),
    changeTriggered: jest.fn(),
}));

jest.unstable_mockModule('./create.js', () => ({
    createHeader: jest.fn(),
    createStructure: jest.fn(),
    prepareStructure: jest.fn(),
    prepareStandaloneStructure: jest.fn(),
    renderHeaderButton: jest.fn(),
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

jest.unstable_mockModule('./cards/index.js', () => ({
    cleanupPopUpCards: jest.fn(),
    handlePopUpCards: jest.fn(),
}));

const { handlePopUp } = await import('./index.js');
const { changeEditor } = await import('./changes.js');
const { handlePopUpCards } = await import('./cards/index.js');
const { renderHeaderButton } = await import('./create.js');
const { syncPopupOpenStateWithLocation } = await import('./helpers.js');
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

        expect(syncPopupOpenStateWithLocation).toHaveBeenCalledWith(context, true);
    });

    test('does not force hash-based reopen while editing', async () => {
        const context = createOpenPopupContext({
            editor: true,
        });

        await handlePopUp(context);

        expect(syncPopupOpenStateWithLocation).not.toHaveBeenCalled();
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
});
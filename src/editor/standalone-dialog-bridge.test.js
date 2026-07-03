import { describe, expect, jest, test } from '@jest/globals';

import {
    bridgeDialogCloseToParent,
    createReopenedStandaloneParentDialogParams,
    createStandaloneParentDialogParams,
    createStandaloneParentDialogParamsFromDialog,
    forceDialogDirtyState,
    getDialogLiveCardConfig,
    restoreDialogCardEditorVisualState,
} from './standalone-dialog-bridge.js';

describe('bridgeDialogCloseToParent', () => {
    test('reopens the parent in place after the original closeDialog accepts closing', () => {
        const originalCloseDialog = jest.fn(() => true);
        const dialog = Object.create({ closeDialog: originalCloseDialog });
        const reopenParent = jest.fn(() => true);

        bridgeDialogCloseToParent(dialog, reopenParent);

        expect(dialog.closeDialog()).toBe(true);
        expect(originalCloseDialog).toHaveBeenCalledTimes(1);
        expect(reopenParent).toHaveBeenCalledTimes(1);
        expect(Object.prototype.hasOwnProperty.call(dialog, 'closeDialog')).toBe(false);
        expect(dialog.closeDialog).toBe(originalCloseDialog);
    });

    test('does not reopen the parent when the original closeDialog blocks closing', () => {
        const originalCloseDialog = jest.fn(() => false);
        const dialog = Object.create({ closeDialog: originalCloseDialog });
        const reopenParent = jest.fn(() => true);

        bridgeDialogCloseToParent(dialog, reopenParent);

        expect(dialog.closeDialog('dirty')).toBe(false);
        expect(originalCloseDialog).toHaveBeenCalledWith('dirty');
        expect(reopenParent).not.toHaveBeenCalled();
        expect(Object.prototype.hasOwnProperty.call(dialog, 'closeDialog')).toBe(false);
    });

    test('lets the original close continue when in-place reopen is unavailable', () => {
        const originalCloseDialog = jest.fn(() => true);
        const dialog = Object.create({ closeDialog: originalCloseDialog });
        const reopenParent = jest.fn(() => false);

        bridgeDialogCloseToParent(dialog, reopenParent);

        expect(dialog.closeDialog('reason')).toBe(true);
        expect(reopenParent).toHaveBeenCalledTimes(1);
        expect(originalCloseDialog).toHaveBeenCalledWith('reason');
        expect(Object.prototype.hasOwnProperty.call(dialog, 'closeDialog')).toBe(false);
    });
});

describe('standalone popup dialog params', () => {
    const standalonePopup = {
        type: 'custom:bubble-card',
        card_type: 'pop-up',
        hash: '#kitchen',
        cards: [
            {
                type: 'button',
                entity: 'light.kitchen',
            },
        ],
    };

    test('reopens a nested standalone popup edit flow on the containing stack config', () => {
        const siblingStack = {
            type: 'vertical-stack',
            cards: [
                {
                    type: 'custom:bubble-card',
                    card_type: 'pop-up',
                    hash: '#bedroom',
                    cards: [],
                },
            ],
        };
        const commonStack = {
            type: 'vertical-stack',
            cards: [standalonePopup, siblingStack],
        };
        const saveCardConfig = jest.fn();

        const parentParams = createStandaloneParentDialogParams(
            {
                cardConfig: commonStack,
                saveCardConfig,
            },
            standalonePopup
        );
        const editedPopup = {
            ...standalonePopup,
            cards: [
                {
                    type: 'button',
                    entity: 'light.kitchen',
                    name: 'Hiiii',
                },
            ],
        };
        const reopenedParams = createReopenedStandaloneParentDialogParams(parentParams, editedPopup);

        expect(parentParams.cardConfig).toEqual(commonStack);
        expect(reopenedParams.cardConfig).toEqual({
            type: 'vertical-stack',
            cards: [editedPopup, siblingStack],
        });
        expect(reopenedParams.saveCardConfig).toBe(saveCardConfig);
    });

    test('reopens the second standalone popup in a stack with similar hashes on the correct path', () => {
        const firstPopup = {
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            hash: '#alooo',
            cards: [{ type: 'button', entity: 'light.shelly' }],
        };
        const secondPopup = {
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            hash: '#alooooo',
            cards: [{ type: 'calendar', entities: ['calendar.recycle'] }],
        };
        const commonStack = {
            type: 'vertical-stack',
            cards: [firstPopup, secondPopup],
        };

        const parentParams = createStandaloneParentDialogParams(
            {
                cardConfig: commonStack,
            },
            secondPopup
        );
        const editedSecondPopup = {
            ...secondPopup,
            cards: [
                ...secondPopup.cards,
                { type: 'button', entity: 'light.second' },
            ],
        };
        const reopenedParams = createReopenedStandaloneParentDialogParams(parentParams, editedSecondPopup);

        expect(parentParams._standalonePopupPathInDialog).toEqual(['cards', 1]);
        expect(reopenedParams.cardConfig).toEqual({
            type: 'vertical-stack',
            cards: [firstPopup, editedSecondPopup],
        });
    });

    test('keeps direct standalone popup edit flows scoped to the popup itself', () => {
        const parentParams = createStandaloneParentDialogParams(
            {
                cardConfig: standalonePopup,
            },
            standalonePopup
        );
        const editedPopup = {
            ...standalonePopup,
            name: 'Kitchen popup',
        };
        const reopenedParams = createReopenedStandaloneParentDialogParams(parentParams, editedPopup);

        expect(parentParams.cardConfig).toEqual(standalonePopup);
        expect(reopenedParams.cardConfig).toEqual(editedPopup);
    });

    test('uses the live dialog editor config when an unsaved stack wrapper contains the popup', () => {
        const unsavedStack = {
            type: 'vertical-stack',
            cards: [standalonePopup],
        };
        const saveCardConfig = jest.fn();
        const cardElementEditor = {
            _config: unsavedStack,
        };
        const dialog = {
            _params: {
                // HA can still expose the freshly-created nested popup as the
                // active cardConfig until the containing stack has been saved.
                cardConfig: standalonePopup,
                saveCardConfig,
            },
            shadowRoot: {
                querySelector: jest.fn((selector) => selector === 'hui-card-element-editor' ? cardElementEditor : null),
                querySelectorAll: jest.fn(() => []),
            },
            querySelectorAll: jest.fn(() => []),
        };

        const liveConfig = getDialogLiveCardConfig(dialog, standalonePopup);
        const parentParams = createStandaloneParentDialogParamsFromDialog(dialog, standalonePopup);
        const editedPopup = {
            ...standalonePopup,
            cards: [
                ...standalonePopup.cards,
                {
                    type: 'button',
                    entity: 'light.sink',
                },
            ],
        };
        const reopenedParams = createReopenedStandaloneParentDialogParams(parentParams, editedPopup);

        expect(liveConfig).toBe(unsavedStack);
        expect(parentParams.cardConfig).toBe(unsavedStack);
        expect(parentParams._standalonePopupPathInDialog).toEqual(['cards', 0]);
        expect(reopenedParams.cardConfig).toEqual({
            type: 'vertical-stack',
            cards: [editedPopup],
        });
        expect(reopenedParams.saveCardConfig).toBe(saveCardConfig);
    });

    test('matches a freshly mutated standalone popup back to its unsaved stack wrapper by hash', () => {
        const secondPopup = {
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            hash: '#pantry',
            cards: [
                {
                    type: 'calendar',
                    entities: ['calendar.recycle'],
                },
            ],
        };
        const unsavedStack = {
            type: 'vertical-stack',
            cards: [standalonePopup, secondPopup],
        };
        const freshlyMutatedSecondPopup = {
            ...secondPopup,
            cards: [],
        };
        const cardElementEditor = {
            _config: unsavedStack,
        };
        const dialog = {
            _params: {
                // Fresh HA dialogs can still point at the child popup while the
                // live editor state already contains the unsaved stack wrapper.
                cardConfig: freshlyMutatedSecondPopup,
            },
            shadowRoot: {
                querySelector: jest.fn((selector) => selector === 'hui-card-element-editor' ? cardElementEditor : null),
                querySelectorAll: jest.fn(() => []),
            },
            querySelectorAll: jest.fn(() => []),
        };

        const parentParams = createStandaloneParentDialogParamsFromDialog(dialog, freshlyMutatedSecondPopup);
        const reopenedParams = createReopenedStandaloneParentDialogParams(parentParams, freshlyMutatedSecondPopup);

        expect(parentParams.cardConfig).toBe(unsavedStack);
        expect(parentParams._standalonePopupPathInDialog).toEqual(['cards', 1]);
        expect(reopenedParams.cardConfig).toEqual({
            type: 'vertical-stack',
            cards: [standalonePopup, freshlyMutatedSecondPopup],
        });
    });

    test('uses a custom stack editor config carrier when the native card editor points at the child popup', () => {
        const customStack = {
            type: 'custom:vertical-stack-in-card',
            cards: [
                { type: 'entities', entities: ['light.counter'] },
                standalonePopup,
            ],
        };
        const customStackEditor = {
            _config: customStack,
        };
        const dialog = {
            _params: {
                cardConfig: standalonePopup,
            },
            shadowRoot: {
                querySelector: jest.fn(() => null),
                querySelectorAll: jest.fn(() => [customStackEditor]),
            },
            querySelectorAll: jest.fn(() => []),
        };

        const liveConfig = getDialogLiveCardConfig(dialog, standalonePopup);
        const parentParams = createStandaloneParentDialogParamsFromDialog(dialog, standalonePopup);
        const editedPopup = {
            ...standalonePopup,
            name: 'Kitchen popup',
        };
        const reopenedParams = createReopenedStandaloneParentDialogParams(parentParams, editedPopup);

        expect(liveConfig).toBe(customStack);
        expect(parentParams.cardConfig).toBe(customStack);
        expect(parentParams._standalonePopupPathInDialog).toEqual(['cards', 1]);
        expect(reopenedParams.cardConfig).toEqual({
            type: 'custom:vertical-stack-in-card',
            cards: [
                { type: 'entities', entities: ['light.counter'] },
                editedPopup,
            ],
        });
    });

    test('prefers the nearest custom stack over a temporary grid wrapper', () => {
        const customStack = {
            type: 'custom:vertical-stack-in-card',
            cards: [
                { type: 'button', entity: 'switch.tondeuse_custom_mowing_direction_enabled' },
                standalonePopup,
            ],
        };
        const temporaryGridWrapper = {
            type: 'grid',
            cards: [customStack],
        };
        const customStackEditor = {
            _config: customStack,
        };
        const gridCarrier = {
            _config: temporaryGridWrapper,
        };
        const dialog = {
            _params: {
                cardConfig: standalonePopup,
            },
            shadowRoot: {
                querySelector: jest.fn(() => null),
                querySelectorAll: jest.fn(() => [gridCarrier, customStackEditor]),
            },
            querySelectorAll: jest.fn(() => []),
        };

        const liveConfig = getDialogLiveCardConfig(dialog, standalonePopup);
        const parentParams = createStandaloneParentDialogParamsFromDialog(dialog, standalonePopup);
        const editedPopup = {
            ...standalonePopup,
            cards: [
                ...standalonePopup.cards,
                { type: 'button', entity: 'light.ambilight' },
            ],
        };
        const reopenedParams = createReopenedStandaloneParentDialogParams(parentParams, editedPopup);

        expect(liveConfig).toBe(customStack);
        expect(parentParams.cardConfig).toBe(customStack);
        expect(parentParams._standalonePopupPathInDialog).toEqual(['cards', 1]);
        expect(reopenedParams.cardConfig).toEqual({
            type: 'custom:vertical-stack-in-card',
            cards: [
                { type: 'button', entity: 'switch.tondeuse_custom_mowing_direction_enabled' },
                editedPopup,
            ],
        });
    });

    test('keeps a top-level standalone popup as root over a temporary single-card grid wrapper', () => {
        const temporaryGridWrapper = {
            type: 'grid',
            cards: [standalonePopup],
        };
        const gridCarrier = {
            _config: temporaryGridWrapper,
        };
        const dialog = {
            _params: {
                cardConfig: standalonePopup,
            },
            shadowRoot: {
                querySelector: jest.fn(() => null),
                querySelectorAll: jest.fn(() => [gridCarrier]),
            },
            querySelectorAll: jest.fn(() => []),
        };

        const liveConfig = getDialogLiveCardConfig(dialog, standalonePopup);
        const parentParams = createStandaloneParentDialogParamsFromDialog(dialog, standalonePopup);
        const editedPopup = {
            ...standalonePopup,
            cards: [
                ...standalonePopup.cards,
                { type: 'button', entity: 'light.ambilight' },
            ],
        };
        const reopenedParams = createReopenedStandaloneParentDialogParams(parentParams, editedPopup);

        expect(liveConfig).toBe(standalonePopup);
        expect(parentParams.cardConfig).toBe(standalonePopup);
        expect(parentParams._standalonePopupPathInDialog).toEqual([]);
        expect(reopenedParams.cardConfig).toEqual(editedPopup);
    });

    test('keeps the popup as root when no live parent config contains it', () => {
        const dialog = {
            _params: {
                cardConfig: standalonePopup,
            },
            shadowRoot: {
                querySelector: jest.fn(() => null),
                querySelectorAll: jest.fn(() => []),
            },
            querySelectorAll: jest.fn(() => []),
        };

        const parentParams = createStandaloneParentDialogParamsFromDialog(dialog, standalonePopup);
        const editedPopup = {
            ...standalonePopup,
            name: 'Kitchen popup',
        };
        const reopenedParams = createReopenedStandaloneParentDialogParams(parentParams, editedPopup);

        expect(parentParams.cardConfig).toEqual(standalonePopup);
        expect(parentParams._standalonePopupPathInDialog).toEqual([]);
        expect(reopenedParams.cardConfig).toEqual(editedPopup);
    });
});

describe('standalone parent editor visual state', () => {
    test('forces a reused hui-card-element-editor back to GUI config mode', () => {
        const requestUpdate = jest.fn();
        const cardElementEditor = {
            _GUImode: false,
            GUImode: false,
            _guiMode: false,
            guiMode: false,
            _yamlError: 'Invalid YAML',
            _subElementEditorConfig: { type: 'button' },
            _currTab: 'visibility',
            requestUpdate,
        };
        const dialog = {
            shadowRoot: {
                querySelector: jest.fn((selector) => selector === 'hui-card-element-editor' ? cardElementEditor : null),
            },
        };

        expect(restoreDialogCardEditorVisualState(dialog)).toBe(true);
        expect(cardElementEditor._GUImode).toBe(true);
        expect(cardElementEditor.GUImode).toBe(true);
        expect(cardElementEditor._guiMode).toBe(true);
        expect(cardElementEditor.guiMode).toBe(true);
        expect(cardElementEditor._yamlError).toBeUndefined();
        expect(cardElementEditor._subElementEditorConfig).toBeUndefined();
        expect(cardElementEditor._currTab).toBe('config');
        expect(requestUpdate).toHaveBeenCalledTimes(1);
    });

    test('returns false when no card element editor is available', () => {
        expect(restoreDialogCardEditorVisualState({ shadowRoot: { querySelector: jest.fn(() => null) } })).toBe(false);
        expect(restoreDialogCardEditorVisualState(null)).toBe(false);
    });
});

describe('forceDialogDirtyState', () => {
    const originalConfig = {
        type: 'custom:bubble-card',
        card_type: 'pop-up',
        hash: '#test',
        cards: [],
    };

    const editedConfig = {
        type: 'custom:bubble-card',
        card_type: 'pop-up',
        hash: '#test',
        cards: [{ type: 'button', entity: 'light.kitchen' }],
    };

    function createMockDialog(initialConfig, currentConfig) {
        const publishContextSpy = jest.fn();
        const slice = {
            initial: JSON.parse(JSON.stringify(initialConfig)),
            current: JSON.parse(JSON.stringify(currentConfig)),
            normalizedInitial: JSON.parse(JSON.stringify(initialConfig)),
        };
        const slices = new Map();
        slices.set('__default__', slice);

        const dialog = {
            _dirtySlices: slices,
            _publishContext: publishContextSpy,
            slice,
            publishContextSpy,
        };

        // Simulate HA's isDirtyState getter: dirty when initial !== current
        Object.defineProperty(dialog, 'isDirtyState', {
            get() {
                const s = this._dirtySlices.get('__default__');
                if (!s) return false;
                return JSON.stringify(s.initial) !== JSON.stringify(s.current);
            },
        });

        return dialog;
    }

    test('replaces the initial baseline with the original config to make the dialog dirty', () => {
        // Simulate HA showDialog: both initial and current are set to the edited config
        const mockDialog = createMockDialog(editedConfig, editedConfig);

        // Before fix: initial === current → not dirty
        expect(mockDialog.isDirtyState).toBe(false);

        const result = forceDialogDirtyState(mockDialog, originalConfig);

        expect(result).toBe(true);
        expect(mockDialog.slice.initial).toEqual(originalConfig);
        expect(mockDialog.slice.initial).not.toBe(editedConfig);
        expect(mockDialog.slice.normalizedInitial).toEqual(originalConfig);
        expect(mockDialog.publishContextSpy).toHaveBeenCalledTimes(1);
        // After fix: initial !== current → dirty
        expect(mockDialog.isDirtyState).toBe(true);
    });

    test('returns false when dialog is missing', () => {
        expect(forceDialogDirtyState(null, originalConfig)).toBe(false);
        expect(forceDialogDirtyState(undefined, originalConfig)).toBe(false);
    });

    test('returns false when originalConfig is missing', () => {
        const mockDialog = createMockDialog(originalConfig, editedConfig);
        expect(forceDialogDirtyState(mockDialog, null)).toBe(false);
        expect(forceDialogDirtyState(mockDialog, undefined)).toBe(false);
    });

    test('returns false when _dirtySlices is not a Map', () => {
        const mockDialog = {
            _dirtySlices: {},
            _publishContext: jest.fn(),
        };
        expect(forceDialogDirtyState(mockDialog, originalConfig)).toBe(false);
    });

    test('returns false when __default__ slice is missing', () => {
        const slices = new Map();
        slices.set('some_other_key', { initial: {}, current: {} });
        const mockDialog = {
            _dirtySlices: slices,
            _publishContext: jest.fn(),
        };
        expect(forceDialogDirtyState(mockDialog, originalConfig)).toBe(false);
    });

    test('does not mutate the original config reference', () => {
        const mockDialog = createMockDialog(editedConfig, editedConfig);
        const originalCopy = JSON.parse(JSON.stringify(originalConfig));

        forceDialogDirtyState(mockDialog, originalConfig);

        // originalConfig should not be mutated
        expect(originalConfig).toEqual(originalCopy);
        // slice.initial should be a deep clone, not the same reference
        expect(mockDialog.slice.initial).not.toBe(originalConfig);
    });

    test('works without _publishContext on the dialog', () => {
        const slices = new Map();
        const slice = {
            initial: editedConfig,
            current: editedConfig,
        };
        slices.set('__default__', slice);
        const mockDialog = {
            _dirtySlices: slices,
            // no _publishContext
        };

        const result = forceDialogDirtyState(mockDialog, originalConfig);

        expect(result).toBe(true);
        expect(slice.initial).toEqual(originalConfig);
    });
});

describe('createStandaloneParentDialogParams original config isolation', () => {
    test('clones _originalCardConfig so it survives in-place mutations', () => {
        const popupConfig = {
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            hash: '#kitchen',
            cards: [{ type: 'button', entity: 'light.kitchen' }],
        };

        const parentParams = createStandaloneParentDialogParams(
            { cardConfig: popupConfig },
            popupConfig
        );

        // _originalCardConfig should NOT be the same reference as cardConfig
        expect(parentParams._originalCardConfig).not.toBe(parentParams.cardConfig);
        expect(parentParams._originalCardConfig).toEqual(parentParams.cardConfig);

        // Mutate the cardConfig in place (simulating what a child editor does)
        parentParams.cardConfig.cards.push({ type: 'button', entity: 'light.new' });

        // _originalCardConfig should remain unchanged
        expect(parentParams._originalCardConfig.cards.length).toBe(1);
        expect(parentParams._originalCardConfig.cards[0].entity).toBe('light.kitchen');
        expect(parentParams.cardConfig.cards.length).toBe(2);
    });

    test('clones _standalonePopupConfig independently from cardConfig', () => {
        const popupConfig = {
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            hash: '#test',
            cards: [],
        };

        const parentParams = createStandaloneParentDialogParams(
            { cardConfig: popupConfig },
            popupConfig
        );

        expect(parentParams._standalonePopupConfig).not.toBe(parentParams.cardConfig);
        expect(parentParams._standalonePopupConfig).not.toBe(parentParams._originalCardConfig);
    });

    test('clones original config for nested popups inside stacks', () => {
        const nestedPopup = {
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            hash: '#nested',
            cards: [{ type: 'button', entity: 'light.bedroom' }],
        };
        const stackConfig = {
            type: 'vertical-stack',
            cards: [
                { type: 'button', entity: 'light.hall' },
                nestedPopup,
            ],
        };

        const parentParams = createStandaloneParentDialogParams(
            { cardConfig: stackConfig },
            nestedPopup
        );

        // _originalCardConfig should be a clone of the stack config
        expect(parentParams._originalCardConfig).not.toBe(stackConfig);
        expect(parentParams._originalCardConfig).toEqual(stackConfig);

        // Mutate the stack config in place
        stackConfig.cards[0].entity = 'light.changed';

        // _originalCardConfig should remain unchanged
        expect(parentParams._originalCardConfig.cards[0].entity).toBe('light.hall');
    });
});
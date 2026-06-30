import { describe, expect, jest, test } from '@jest/globals';

import {
    bridgeDialogCloseToParent,
    createReopenedStandaloneParentDialogParams,
    createStandaloneParentDialogParams,
    createStandaloneParentDialogParamsFromDialog,
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
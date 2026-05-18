import { describe, expect, jest, test } from '@jest/globals';

import {
    bridgeDialogCloseToParent,
    createReopenedStandaloneParentDialogParams,
    createStandaloneParentDialogParams,
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
});
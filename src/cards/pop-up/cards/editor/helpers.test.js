import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

const fireEvent = jest.fn();

jest.unstable_mockModule('../../../../tools/utils.js', () => ({
    fireEvent,
}));

const { createEditorActions } = await import('./helpers.js');

function createPopupContext(extra = {}) {
    return {
        config: {
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            hash: '#kitchen',
            name: 'Kitchen',
            cards: [{ type: 'button', entity: 'light.kitchen' }],
        },
        ...extra,
    };
}

function createPopupEditor(hash, openDialog = jest.fn()) {
    return {
        isConnected: true,
        _config: {
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            hash,
            cards: [],
        },
        _openStandaloneCardDialog: openDialog,
    };
}

function createPopupBridgeEditor(openDialogForPopup = jest.fn()) {
    return {
        isConnected: true,
        _config: {
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            hash: '#alooo',
            cards: [],
        },
        _openStandaloneCardDialog: jest.fn(),
        _openStandaloneCardDialogForPopup: openDialogForPopup,
    };
}

describe('standalone popup card editor actions', () => {
    let warnSpy;
    let originalWindow;
    let originalDocument;

    beforeEach(() => {
        jest.clearAllMocks();
        originalWindow = global.window;
        originalDocument = global.document;
        global.window = {
            __bubbleCardEditorInstances: new Set(),
            __bubbleStandalonePopupEditorOpeners: new Map(),
        };
        delete global.document;
        warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
        warnSpy.mockRestore();
        if (originalWindow === undefined) {
            delete global.window;
        } else {
            global.window = originalWindow;
        }
        if (originalDocument === undefined) {
            delete global.document;
        } else {
            global.document = originalDocument;
        }
    });

    test('opens nested card edit immediately when the standalone dialog opener is already attached', () => {
        const openDialog = jest.fn();
        const actions = createEditorActions(createPopupContext({
            _standaloneOpenCardDialog: openDialog,
        }), jest.fn());

        actions.editCard(0);

        expect(openDialog).toHaveBeenCalledWith({ type: 'edit', index: 0 });
        expect(warnSpy).not.toHaveBeenCalled();
    });

    test('opens Add card immediately from the registered matching popup editor', () => {
        const openDialog = jest.fn();
        const editor = createPopupEditor('#kitchen', openDialog);
        window.__bubbleCardEditorInstances.add(editor);
        const actions = createEditorActions(createPopupContext(), jest.fn());

        actions.addCard();

        expect(openDialog).toHaveBeenCalledWith({ type: 'add' });
        expect(warnSpy).not.toHaveBeenCalled();
    });

    test('opens nested card edit from the remembered popup opener when the editor UI is hidden', () => {
        const openDialog = jest.fn();
        window.__bubbleStandalonePopupEditorOpeners.set('#kitchen', openDialog);
        const actions = createEditorActions(createPopupContext(), jest.fn());

        actions.editCard(0);

        expect(openDialog).toHaveBeenCalledWith({ type: 'edit', index: 0 });
        expect(warnSpy).not.toHaveBeenCalled();
    });

    test('chooses the registered editor matching the popup hash for nested card edit', () => {
        const wrongOpenDialog = jest.fn();
        const rightOpenDialog = jest.fn();
        window.__bubbleCardEditorInstances.add(createPopupEditor('#bedroom', wrongOpenDialog));
        window.__bubbleCardEditorInstances.add(createPopupEditor('#kitchen', rightOpenDialog));
        const actions = createEditorActions(createPopupContext(), jest.fn());

        actions.editCard(0);

        expect(rightOpenDialog).toHaveBeenCalledWith({ type: 'edit', index: 0 });
        expect(wrongOpenDialog).not.toHaveBeenCalled();
        expect(warnSpy).not.toHaveBeenCalled();
    });

    test('uses an available editor bridge with the clicked popup config when no matching hash editor is registered', () => {
        const openDialogForPopup = jest.fn();
        const bridgeEditor = createPopupBridgeEditor(openDialogForPopup);
        const secondPopupContext = createPopupContext({
            config: {
                type: 'custom:bubble-card',
                card_type: 'pop-up',
                hash: '#alooooo',
                cards: [{ type: 'calendar', entities: ['calendar.recycle'] }],
            },
        });
        window.__bubbleCardEditorInstances.add(bridgeEditor);
        const actions = createEditorActions(secondPopupContext, jest.fn());

        actions.addCard();

        expect(openDialogForPopup).toHaveBeenCalledWith(secondPopupContext.config, { type: 'add' });
        expect(bridgeEditor._openStandaloneCardDialog).not.toHaveBeenCalled();
        expect(warnSpy).not.toHaveBeenCalled();
    });

    test('uses an available editor bridge for nested card edit after a vertical-stack refresh', () => {
        const openDialogForPopup = jest.fn();
        const secondPopupContext = createPopupContext({
            config: {
                type: 'custom:bubble-card',
                card_type: 'pop-up',
                hash: '#alooooo',
                cards: [{ type: 'calendar', entities: ['calendar.recycle'] }],
            },
        });
        window.__bubbleCardEditorInstances.add(createPopupBridgeEditor(openDialogForPopup));
        const actions = createEditorActions(secondPopupContext, jest.fn());

        actions.editCard(0);

        expect(openDialogForPopup).toHaveBeenCalledWith(secondPopupContext.config, { type: 'edit', index: 0 });
        expect(warnSpy).not.toHaveBeenCalled();
    });

    test('warns immediately when no standalone dialog opener is available for nested card edit', () => {
        const actions = createEditorActions(createPopupContext(), jest.fn());

        actions.editCard(0);

        expect(warnSpy).toHaveBeenCalledWith('Bubble Card: standalone pop-up editor unavailable for nested card edit');
    });

    test('does not open a nested editor from a disconnected popup preview', () => {
        const openDialog = jest.fn();
        const context = createPopupContext({
            isConnected: false,
            _standaloneOpenCardDialog: openDialog,
        });
        window.__bubbleCardEditorInstances.add(createPopupEditor('#kitchen', openDialog));
        const actions = createEditorActions(context, jest.fn());

        actions.editCard(0);

        expect(openDialog).not.toHaveBeenCalled();
        expect(warnSpy).toHaveBeenCalledWith('Bubble Card: standalone pop-up editor unavailable for nested card edit');
    });
});

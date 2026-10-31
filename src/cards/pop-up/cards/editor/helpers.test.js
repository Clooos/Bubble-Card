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

function createPopupEditorWithUpdater(hash, updateCardsForPopup = jest.fn()) {
    return {
        ...createPopupEditor(hash),
        _updateStandaloneCardsForPopup: updateCardsForPopup,
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
    let originalCustomElements;

    beforeEach(() => {
        jest.clearAllMocks();
        originalWindow = global.window;
        originalDocument = global.document;
        originalCustomElements = global.customElements;
        global.window = {
            __bubbleCardEditorInstances: new Set(),
            __bubbleStandalonePopupEditorOpeners: new Map(),
        };
        delete global.document;
        delete global.customElements;
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
        if (originalCustomElements === undefined) {
            delete global.customElements;
        } else {
            global.customElements = originalCustomElements;
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

    test('creates a transient editor bridge for nested card edit after a saved custom stack refresh', () => {
        const openDialogForPopup = jest.fn();
        const transientBridge = {
            setConfig: jest.fn(function setConfig(config) {
                this._config = config;
            }),
            _openStandaloneCardDialogForPopup: openDialogForPopup,
        };
        global.customElements = {
            get: jest.fn((tagName) => tagName === 'bubble-card-editor' ? function BubbleCardEditor() {} : undefined),
        };
        global.document = {
            createElement: jest.fn((tagName) => tagName === 'bubble-card-editor' ? transientBridge : {}),
        };
        const context = createPopupContext({
            _hass: { states: {} },
        });
        const actions = createEditorActions(context, jest.fn());

        actions.editCard(0);

        expect(document.createElement).toHaveBeenCalledWith('bubble-card-editor');
        expect(transientBridge.setConfig).toHaveBeenCalledWith(context.config);
        expect(openDialogForPopup).toHaveBeenCalledWith(context.config, { type: 'edit', index: 0 });
        expect(warnSpy).not.toHaveBeenCalled();
    });

    test('routes direct card removal through the standalone updater when attached', () => {
        const standaloneCardsUpdater = jest.fn();
        const rebuildCards = jest.fn();
        const context = createPopupContext({
            _standaloneCardsUpdater: standaloneCardsUpdater,
        });
        const actions = createEditorActions(context, rebuildCards);

        actions.removeCard(0);

        expect(context.config.cards).toEqual([]);
        expect(standaloneCardsUpdater).toHaveBeenCalledWith([]);
        expect(fireEvent).not.toHaveBeenCalled();
        expect(rebuildCards).toHaveBeenCalled();
    });

    test('routes direct card removal through the registered editor when the preview updater was not attached yet', () => {
        const updateCardsForPopup = jest.fn(() => true);
        const editor = createPopupEditorWithUpdater('#kitchen', updateCardsForPopup);
        window.__bubbleCardEditorInstances.add(editor);
        const rebuildCards = jest.fn();
        const context = createPopupContext();
        const actions = createEditorActions(context, rebuildCards);

        actions.removeCard(0);

        expect(context.config.cards).toEqual([]);
        expect(updateCardsForPopup).toHaveBeenCalledWith(context.config, []);
        expect(fireEvent).not.toHaveBeenCalled();
        expect(rebuildCards).toHaveBeenCalled();
    });

    test('routes direct card removal through a transient editor bridge after a saved custom stack refresh', () => {
        const updateCardsForPopup = jest.fn(() => true);
        const transientBridge = {
            setConfig: jest.fn(function setConfig(config) {
                this._config = config;
            }),
            _openStandaloneCardDialogForPopup: jest.fn(),
            _updateStandaloneCardsForPopup: updateCardsForPopup,
        };
        global.customElements = {
            get: jest.fn((tagName) => tagName === 'bubble-card-editor' ? function BubbleCardEditor() {} : undefined),
        };
        global.document = {
            createElement: jest.fn((tagName) => tagName === 'bubble-card-editor' ? transientBridge : {}),
        };
        const rebuildCards = jest.fn();
        const context = createPopupContext({
            _hass: { states: {} },
        });
        const actions = createEditorActions(context, rebuildCards);

        actions.removeCard(0);

        expect(context.config.cards).toEqual([]);
        expect(updateCardsForPopup).toHaveBeenCalledWith(context.config, []);
        expect(fireEvent).not.toHaveBeenCalled();
        expect(rebuildCards).toHaveBeenCalled();
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

// Home Assistant 2026.11 moved the card clipboard out of the section, turned Cut
// into an event of its own and added Paste.
describe('pop-up card clipboard', () => {
    let originals;
    let store;
    let homeAssistant;
    let created;

    function installDom() {
        created = [];
        homeAssistant = { appendChild: jest.fn() };
        global.document = {
            querySelector: jest.fn((selector) => (selector === 'body > home-assistant' ? homeAssistant : null)),
            createElement: jest.fn((tagName) => {
                const element = { tagName, style: {}, remove: jest.fn(), dispatchEvent: jest.fn() };
                if (tagName === 'hui-section') {
                    element._initializeConfig = jest.fn(async () => {});
                    element.updateComplete = Promise.resolve();
                    element._layoutElement = { dispatchEvent: jest.fn() };
                }
                created.push(element);
                return element;
            }),
        };
    }

    // The toolbar of a card: on 2026.11 it carries the clipboard of Home
    // Assistant, written through to the session storage, on 2026.10 it does not.
    function toolbar({ withClipboard }) {
        const element = {};
        if (withClipboard) {
            Object.defineProperty(element, '_clipboard', {
                get: () => JSON.parse(store.get('dashboardCardClipboard') || 'null'),
                set: (value) => store.set('dashboardCardClipboard', JSON.stringify(value)),
            });
        }
        return { querySelector: jest.fn((selector) => (selector === 'hui-card-edit-mode' ? element : null)) };
    }

    beforeEach(() => {
        jest.clearAllMocks();
        originals = {
            window: global.window,
            document: global.document,
            customElements: global.customElements,
            sessionStorage: global.sessionStorage,
            CustomEvent: global.CustomEvent,
        };
        global.window = {
            __bubbleCardEditorInstances: new Set(),
            __bubbleStandalonePopupEditorOpeners: new Map(),
        };
        store = new Map();
        global.sessionStorage = {
            getItem: (key) => (store.has(key) ? store.get(key) : null),
            setItem: (key, value) => store.set(key, String(value)),
        };
        global.CustomEvent = class {
            constructor(type, options = {}) {
                this.type = type;
                this.detail = options.detail;
            }
        };
        installDom();
    });

    afterEach(() => {
        for (const [key, value] of Object.entries(originals)) {
            if (value === undefined) delete global[key];
            else global[key] = value;
        }
    });

    const twoCards = (withClipboard = true) => createPopupContext({
        _hass: { localize: (key) => (key === 'ui.panel.lovelace.editor.edit_card.copied_to_clipboard' ? 'Card copied to clipboard' : key) },
        _cardsContainer: toolbar({ withClipboard }),
        config: {
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            hash: '#kitchen',
            cards: [{ type: 'button', entity: 'light.kitchen' }, { type: 'tile', entity: 'light.hall' }],
        },
    });

    test('copies a card into the clipboard of Home Assistant through a toolbar of the pop-up', async () => {
        store.set('dashboardCardClipboard', JSON.stringify({ type: 'markdown', content: 'older copy' }));
        const context = twoCards();
        const actions = createEditorActions(context, jest.fn());

        actions.copyCard(1);
        await Promise.resolve();

        expect(JSON.parse(store.get('dashboardCardClipboard'))).toEqual({ type: 'tile', entity: 'light.hall' });
        expect(created).toEqual([]);
        expect(fireEvent).toHaveBeenCalledWith(context, 'hass-notification', { message: 'Card copied to clipboard' });
    });

    test('still copies through the section when the toolbar has no clipboard', async () => {
        const actions = createEditorActions(twoCards(false), jest.fn());

        actions.copyCard(1);
        await new Promise((resolve) => setTimeout(resolve, 0));

        const section = created.find((element) => element.tagName === 'hui-section');
        expect(section).toBeDefined();
        expect(homeAssistant.appendChild).toHaveBeenCalledWith(section);
        const event = section._layoutElement.dispatchEvent.mock.calls[0][0];
        expect(event.type).toBe('ll-copy-card');
        expect(event.detail.path).toEqual([0, 0, 1]);
    });

    test('cuts a card out of the pop-up into the clipboard', async () => {
        const rebuildCards = jest.fn();
        const context = twoCards();
        const actions = createEditorActions(context, rebuildCards);

        actions.cutCard(0);
        await Promise.resolve();

        expect(context.config.cards).toEqual([{ type: 'tile', entity: 'light.hall' }]);
        expect(JSON.parse(store.get('dashboardCardClipboard'))).toEqual({ type: 'button', entity: 'light.kitchen' });
        expect(rebuildCards).toHaveBeenCalled();
    });

    test('pastes the clipboard after the card it was pasted on', () => {
        store.set('dashboardCardClipboard', JSON.stringify({ type: 'markdown', content: 'Hi' }));
        const context = twoCards();
        const actions = createEditorActions(context, jest.fn());

        actions.pasteCard(0);

        expect(context.config.cards).toEqual([
            { type: 'button', entity: 'light.kitchen' },
            { type: 'markdown', content: 'Hi' },
            { type: 'tile', entity: 'light.hall' },
        ]);
    });

    test('pastes nothing when the clipboard is empty or unreadable', () => {
        const rebuildCards = jest.fn();
        const context = twoCards();
        const actions = createEditorActions(context, rebuildCards);

        actions.pasteCard(0);
        store.set('dashboardCardClipboard', '{broken');
        actions.pasteCard(0);

        expect(context.config.cards).toHaveLength(2);
        expect(rebuildCards).not.toHaveBeenCalled();
    });
});

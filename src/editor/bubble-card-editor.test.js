import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// The editor pulls in lit and every per-card editor; all of it is mocked so
// the tests can drive the element lifecycle contract in isolation.
jest.unstable_mockModule('lit', () => ({
    LitElement: class {
        connectedCallback() {}
        disconnectedCallback() {}
        updated() {}
        // Not a Lit method, but the editor reaches for it in setConfig and the
        // mock is not an HTMLElement.
        getRootNode() { return null; }
    },
    html: () => '',
    css: () => '',
    unsafeCSS: (value) => value,
}));
jest.unstable_mockModule('../var/version.js', () => ({ version: 'test' }));
jest.unstable_mockModule('../tools/utils.js', () => ({ fireEvent: jest.fn() }));
jest.unstable_mockModule('../components/editor/ha-selector-bc_object.js', () => ({}));
jest.unstable_mockModule('../cards/button/editor.js', () => ({ renderButtonEditor: jest.fn() }));
jest.unstable_mockModule('../cards/sub-buttons/editor.js', () => ({ renderSubButtonsEditor: jest.fn() }));
jest.unstable_mockModule('../cards/pop-up/editor.js', () => ({ renderPopUpEditor: jest.fn() }));
jest.unstable_mockModule('../cards/separator/editor.js', () => ({ renderSeparatorEditor: jest.fn() }));
jest.unstable_mockModule('../cards/horizontal-buttons-stack/editor.js', () => ({ renderHorButtonStackEditor: jest.fn() }));
jest.unstable_mockModule('../cards/cover/editor.js', () => ({ renderCoverEditor: jest.fn() }));
jest.unstable_mockModule('../cards/climate/editor.js', () => ({ renderClimateEditor: jest.fn() }));
jest.unstable_mockModule('../cards/select/editor.js', () => ({ renderSelectEditor: jest.fn() }));
jest.unstable_mockModule('../cards/calendar/editor.js', () => ({ renderCalendarEditor: jest.fn() }));
jest.unstable_mockModule('../cards/media-player/editor.js', () => ({ renderMediaPlayerEditor: jest.fn() }));
jest.unstable_mockModule('../cards/empty-column/editor.js', () => ({ renderEmptyColumnEditor: jest.fn() }));
jest.unstable_mockModule('../components/sub-button/editor/index.js', () => ({ makeSubButtonPanel: jest.fn() }));
jest.unstable_mockModule('../components/sub-button/utils.js', () => ({ revealConditionalSubButtons: jest.fn(() => () => {}) }));
jest.unstable_mockModule('../modules/editor.js', () => ({ makeModulesEditor: jest.fn() }));
jest.unstable_mockModule('../modules/store.js', () => ({ makeModuleStore: jest.fn(), _fetchModuleStore: jest.fn() }));
const dropSuggestionsPreviewIfStale = jest.fn();
const releaseSuggestionsPreview = jest.fn();
jest.unstable_mockModule('../modules/module-editor.js', () => ({
    dropSuggestionsPreviewIfStale,
    releaseSuggestionsPreview,
}));
jest.unstable_mockModule('../modules/registry.js', () => ({ yamlKeysMap: new Map() }));
jest.unstable_mockModule('../tools/localize.js', () => ({
    default: jest.fn(() => (key) => key),
    ensureEditorTranslations: jest.fn(() => Promise.resolve(false)),
    isEditorEnglishForced: jest.fn(() => false),
    setEditorEnglishForced: jest.fn(),
    getCurrentLocale: jest.fn(() => 'en'),
}));
jest.unstable_mockModule('./styles.css', () => ({ default: '' }));
jest.unstable_mockModule('../modules/styles.css', () => ({ default: '' }));
jest.unstable_mockModule('../cards/pop-up/cards/styles.css', () => ({ default: '' }));
// Mirror every named export of the real module: a partial mock breaks the
// suite as soon as the editor starts importing another helper from it.
jest.unstable_mockModule('./utils.js', () => ({
    tTemplate: jest.fn((text) => text),
    getLazyLoadedPanelContent: jest.fn(),
    supportsHaDropdown: jest.fn(() => false),
    renderDropdown: jest.fn(),
}));
jest.unstable_mockModule('./standalone-dialog-bridge.js', () => ({
    bridgeDialogCloseToParent: jest.fn(),
    createReopenedStandaloneParentDialogParams: jest.fn(),
    createStandaloneParentDialogParamsFromDialog: jest.fn(),
    forceDialogDirtyState: jest.fn(),
    getDialogCardElementEditor: jest.fn(),
    restoreDialogCardEditorVisualState: jest.fn(),
}));

const definedElements = {};
global.customElements = { define: jest.fn((name, cls) => { definedElements[name] = cls; }) };
global.window = {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
};
global.document = {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    querySelector: jest.fn(() => null),
};

// The module has no export: the class is only reachable through the
// customElements.define call it performs at load time.
await import('./bubble-card-editor.js');
const BubbleCardEditor = definedElements['bubble-card-editor'];
const { fireEvent } = await import('../tools/utils.js');

describe('BubbleCardEditor lifecycle contract', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        delete window.__bubbleCardEditorInstances;
        window.__bubbleStandalonePopupEditorOpeners = new Map();
    });

    function contextListenerRegistrations() {
        return window.addEventListener.mock.calls.filter(([type]) => type === 'bubble-card-context');
    }

    test('never registers the context listener at construction (transient bridge case)', () => {
        const editor = new BubbleCardEditor();

        // The transient standalone bridge is created detached and never
        // connected: a constructor-time listener would pin it (and every
        // reachable preview subtree) for the whole session.
        expect(contextListenerRegistrations()).toHaveLength(0);
        expect(editor._cardContextListener).toBeNull();
    });

    test('registers the context listener on connect and re-registers after a reconnect', () => {
        const editor = new BubbleCardEditor();

        editor.connectedCallback();
        editor.connectedCallback();
        expect(contextListenerRegistrations()).toHaveLength(1);

        editor.disconnectedCallback();
        expect(window.removeEventListener).toHaveBeenCalledWith('bubble-card-context', expect.any(Function));
        expect(editor._cardContextListener).toBeNull();

        editor.connectedCallback();
        expect(contextListenerRegistrations()).toHaveLength(2);
    });

    test('disconnect deletes only the standalone openers this instance still owns', () => {
        const editor = new BubbleCardEditor();
        editor.connectedCallback();

        const ownedOpener = () => {};
        editor._rememberStandaloneOpenCardDialog({ hash: '#mine' }, ownedOpener);
        expect(window.__bubbleStandalonePopupEditorOpeners.get('#mine')).toBe(ownedOpener);

        // Another editor's entry and one of ours that a newer editor
        // overwrote: the ownership guard must leave both untouched.
        const foreignOpener = () => {};
        window.__bubbleStandalonePopupEditorOpeners.set('#other', foreignOpener);
        editor._rememberStandaloneOpenCardDialog({ hash: '#stolen' }, () => {});
        const newerOpener = () => {};
        window.__bubbleStandalonePopupEditorOpeners.set('#stolen', newerOpener);

        editor.disconnectedCallback();

        expect(window.__bubbleStandalonePopupEditorOpeners.has('#mine')).toBe(false);
        expect(window.__bubbleStandalonePopupEditorOpeners.get('#other')).toBe(foreignOpener);
        expect(window.__bubbleStandalonePopupEditorOpeners.get('#stolen')).toBe(newerOpener);
    });

    // Home Assistant reuses its edit dialog, and the module editor's
    // suggestions preview hides that dialog's preview column while it is on:
    // a path out of the editor that forgets to hand it back leaves the column
    // hidden for the rest of the session.
    test('hands the suggestions preview back when the editor is disconnected', () => {
        const editor = new BubbleCardEditor();
        editor.connectedCallback();

        editor.disconnectedCallback();

        expect(releaseSuggestionsPreview).toHaveBeenCalledWith(editor);
    });

    test('hands the suggestions preview back when the card type changes, and only then', () => {
        const editor = new BubbleCardEditor();

        editor.setConfig({ card_type: 'button' });
        // Every keystroke re-enters setConfig with the same card type, and the
        // preview must survive all of them.
        editor.setConfig({ card_type: 'button', name: 'Lamp' });
        expect(releaseSuggestionsPreview).not.toHaveBeenCalled();

        editor.setConfig({ card_type: 'separator' });
        expect(releaseSuggestionsPreview).toHaveBeenCalledWith(editor);
    });

    test('checks after every update that the panel still claims the preview', () => {
        const editor = new BubbleCardEditor();
        editor._setupAutoRowsObserver = jest.fn();

        editor.updated(new Map());

        expect(dropSuggestionsPreviewIfStale).toHaveBeenCalledWith(editor);
    });
});

// ha-selector-text turns an emptied field into `undefined` before ha-form
// re-emits it, so a cleared field arrives as a value-changed whose detail
// carries the key with no value. Reading that as "nothing changed" strands the
// last typed character in the config, and every re-render puts it back in the
// field.
describe('BubbleCardEditor cleared fields', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    function editorWithConfig(config) {
        const editor = new BubbleCardEditor();
        editor._config = config;
        return editor;
    }

    test('clearing a text field drops its key instead of keeping the last character', () => {
        const editor = editorWithConfig({ card_type: 'separator', name: 'L' });

        editor._valueChanged({ target: { configValue: 'name' }, detail: { value: undefined } });

        expect(editor._config).not.toHaveProperty('name');
        expect(editor._config.card_type).toBe('separator');
        expect(fireEvent).toHaveBeenCalledWith(editor, 'config-changed', { config: editor._config });
    });

    test('clearing a nested text field drops the nested key only', () => {
        const editor = editorWithConfig({ card_type: 'button', grid_options: { columns: 6, rows: 2 } });

        editor._valueChanged({ target: { configValue: 'grid_options.rows' }, detail: { value: undefined } });

        expect(editor._config.grid_options).not.toHaveProperty('rows');
        expect(editor._config.grid_options.columns).toBe(6);
    });

    test('an empty string clears the key just like an undefined value', () => {
        const editor = editorWithConfig({ card_type: 'separator', name: 'L' });

        editor._valueChanged({ target: { configValue: 'name' }, detail: { value: '' } });

        expect(editor._config).not.toHaveProperty('name');
    });

    test('a value-changed with no value at all is still ignored', () => {
        const editor = editorWithConfig({ card_type: 'separator', name: 'Lamp' });

        editor._valueChanged({ target: { configValue: 'name' }, detail: {} });

        expect(editor._config.name).toBe('Lamp');
        expect(fireEvent).not.toHaveBeenCalled();
    });

    test('a switch turned off keeps its false, which is a value and not an empty field', () => {
        const editor = editorWithConfig({ card_type: 'button', scrolling_effect: true });

        editor._valueChanged({ target: { tagName: 'HA-SWITCH', configValue: 'scrolling_effect', checked: false } });

        expect(editor._config.scrolling_effect).toBe(false);
    });

    test('a number field set back to zero keeps the zero', () => {
        const editor = editorWithConfig({ card_type: 'button', rows: 2 });

        editor._valueChanged({ target: { configValue: 'rows' }, detail: { value: 0 } });

        expect(editor._config.rows).toBe(0);
    });

    // Sub-button fields do not go through _valueChanged: they patch an array
    // element, so clearing one has to be pinned separately.
    test('clearing a sub-button name empties it instead of keeping the last character', async () => {
        const editor = editorWithConfig({
            card_type: 'button',
            sub_button: [{ entity: 'light.lamp', name: 'L' }],
        });
        editor.requestUpdate = jest.fn();
        // The first array edit of an instance is replayed 10 ms later.
        editor.subButtonJustAdded = true;

        editor._arrayValueChange(0, { name: undefined }, 'sub_button');

        expect(editor._config.sub_button[0].name).toBeUndefined();
        expect(editor._config.sub_button[0].entity).toBe('light.lamp');
    });
});

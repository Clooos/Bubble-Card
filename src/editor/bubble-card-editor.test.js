import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// The editor pulls in lit and every per-card editor; all of it is mocked so
// the tests can drive the element lifecycle contract in isolation.
jest.unstable_mockModule('lit', () => ({
    LitElement: class {
        connectedCallback() {}
        disconnectedCallback() {}
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
jest.unstable_mockModule('../modules/editor.js', () => ({ makeModulesEditor: jest.fn() }));
jest.unstable_mockModule('../modules/store.js', () => ({ makeModuleStore: jest.fn(), _fetchModuleStore: jest.fn() }));
jest.unstable_mockModule('../modules/registry.js', () => ({ yamlKeysMap: new Map() }));
jest.unstable_mockModule('../tools/localize.js', () => ({ default: jest.fn(() => (key) => key) }));
jest.unstable_mockModule('./styles.css', () => ({ default: '' }));
jest.unstable_mockModule('../modules/styles.css', () => ({ default: '' }));
jest.unstable_mockModule('../cards/pop-up/cards/styles.css', () => ({ default: '' }));
jest.unstable_mockModule('./utils.js', () => ({ getLazyLoadedPanelContent: jest.fn() }));
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
});

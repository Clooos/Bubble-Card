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
    // Reached through ../modules/utils.js, which the editor imports for
    // schemaDefaults.
    tGlobal: jest.fn((key) => key),
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
const { schemaDefaults } = await import('../modules/utils.js');

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

    // The action containers of a card, the actions on the events of a calendar
    // and the ones on the card of a climate, a cover or a media player.
    test('an action that is changed is the only one written in its container', () => {
        const editor = editorWithConfig({ card_type: 'calendar' });

        editor._ActionChanged({ detail: { value: { tap_action: { action: 'navigate', navigation_path: '#agenda' } } } }, 'event_action');

        expect(editor._config.event_action).toEqual({ tap_action: { action: 'navigate', navigation_path: '#agenda' } });
        expect(fireEvent).toHaveBeenCalledWith(editor, 'config-changed', { config: editor._config });
    });

    test('an action set back to its default leaves nothing behind', () => {
        const editor = editorWithConfig({
            card_type: 'calendar',
            event_action: { tap_action: { action: 'navigate', navigation_path: '#agenda' }, hold_action: { action: 'more-info' } },
        });

        editor._ActionChanged({ detail: { value: { tap_action: undefined, hold_action: { action: 'more-info' } } } }, 'event_action');
        expect(editor._config.event_action).toEqual({ hold_action: { action: 'more-info' } });

        editor._ActionChanged({ detail: { value: { tap_action: undefined, hold_action: undefined } } }, 'event_action');
        expect(editor._config).not.toHaveProperty('event_action');
        expect(editor._config.card_type).toBe('calendar');
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

describe('BubbleCardEditor state content migration', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('rewrites the old state keys as state_content when a config is opened, and tells the dashboard once', () => {
        const editor = new BubbleCardEditor();
        editor.setConfig({ card_type: 'button', entity: 'sensor.t', show_state: true, show_last_changed: true, sub_button: [{ entity: 'sensor.h', show_attribute: true, attribute: 'humidity' }] });

        expect(editor._config.show_state).toBeUndefined();
        expect(editor._config.state_content).toEqual(['state', 'last-changed'].map((v) => v.replace('-', '_')));
        expect(editor._config.sub_button[0]).toEqual({ entity: 'sensor.h', state_content: 'humidity' });
        expect(fireEvent).not.toHaveBeenCalled();

        jest.advanceTimersByTime(0);
        expect(fireEvent).toHaveBeenCalledWith(editor, 'config-changed', { config: editor._config });
    });

    test('leaves a config without old keys alone', () => {
        const editor = new BubbleCardEditor();
        const config = { card_type: 'button', entity: 'sensor.t', state_content: 'state' };
        editor.setConfig(config);
        jest.advanceTimersByTime(0);
        expect(editor._config).toEqual(config);
        expect(fireEvent).not.toHaveBeenCalled();
    });
});

// A module editor schema wires its attribute fields to the entity field next
// to them, and Home Assistant greys an attribute picker out as soon as it has
// no entity id. The schema shape below is the one the shipped
// "Get state/attribute from other entities" module uses.
describe('BubbleCardEditor module attribute selectors', () => {
    const moduleSchema = () => [{
        type: 'expandable',
        title: 'Select entities and attributes',
        icon: 'mdi:list-box-outline',
        schema: ['0', '1'].map((name) => ({
            name,
            type: 'expandable',
            title: `Entity ${Number(name) + 1}`,
            schema: [
                { name: 'entity', label: 'Entity', selector: { entity: {} } },
                { name: 'attribute', label: 'Attribute', selector: { attribute: {} } },
            ],
        })),
    }];

    const attributeEntityIds = (schema) =>
        schema[0].schema.map((section) => section.schema[1].selector.attribute.entity_id);

    test('a section with no name passes its own config down, so each entity feeds its attribute field', () => {
        const editor = new BubbleCardEditor();
        const config = [
            { entity: 'weather.home' },
            { entity: 'sensor.weather_station', attribute: 'humidity' },
        ];

        const processed = editor._getProcessedSchema('get_state_attribute', moduleSchema(), config);

        expect(attributeEntityIds(processed)).toEqual(['weather.home', 'sensor.weather_station']);
    });

    test('reads the same config once ha-form has turned the list into numeric keys', () => {
        const editor = new BubbleCardEditor();
        const config = { 0: { entity: 'weather.home' }, 1: { entity: 'sensor.weather_station' } };

        const processed = editor._getProcessedSchema('get_state_attribute', moduleSchema(), config);

        expect(attributeEntityIds(processed)).toEqual(['weather.home', 'sensor.weather_station']);
    });

    test('leaves the attribute field of an entry without an entity unset', () => {
        const editor = new BubbleCardEditor();

        const processed = editor._getProcessedSchema('get_state_attribute', moduleSchema(), [{ entity: 'weather.home' }]);

        expect(attributeEntityIds(processed)).toEqual(['weather.home', undefined]);
    });
});

// Auto rows: a reading is written only once the reading before it agreed.
//
// The card is measured while Home Assistant is still assembling it, and a row
// it will not keep can be there for exactly one pass. Every write rebuilds the
// preview, because Home Assistant rebuilds a preview card on any config
// change, and each rebuild restarts every cover fade on the card. Measured
// before the guard: 16 config writes in 10s, alternating 1.676 and nothing.
describe('BubbleCardEditor auto rows confirmation', () => {
    const boite = (height) => ({ getBoundingClientRect: () => ({ height, width: 300 }) });

    // Only the selectors _computeAndApplyRows reads. null is a part the card
    // does not have, which is what the real markup gives.
    const carte = (hauteurBasFixe, { connected = true } = {}) => ({
        isConnected: connected,
        querySelector: (sel) => {
            if (sel === '.bubble-buttons-container.bottom-fixed') return hauteurBasFixe ? boite(hauteurBasFixe) : null;
            if (sel === '.bubble-container') return boite(56);
            return null;
        },
    });

    let editeur;
    beforeEach(() => {
        jest.clearAllMocks();
        global.getComputedStyle = () => ({
            bottom: '0px', marginTop: '0px', marginBottom: '0px',
            paddingTop: '0px', paddingBottom: '0px',
            getPropertyValue: (name) => (name === '--row-height' ? '56' : name === '--row-gap' ? '8' : ''),
        });
        editeur = new BubbleCardEditor();
        editeur._config = { type: 'custom:bubble-card', card_type: 'media-player', entity: 'media_player.x' };
        editeur._rowsAutoMode = true;
        // The very first computation is skipped on purpose elsewhere; these
        // tests are about what happens afterwards.
        editeur._firstRowsComputation = true;
        jest.spyOn(editeur, '_scheduleAutoRowsCompute').mockImplementation(() => {});
    });

    test('a first reading waits for the next one', () => {
        const r = editeur._computeAndApplyRows(carte(79));
        expect(r).toEqual({ applied: false, unconfirmed: true });
        expect(fireEvent).not.toHaveBeenCalled();
        expect(editeur._scheduleAutoRowsCompute).toHaveBeenCalled();
    });

    // Rows still get applied, one pass later than before.
    test('a reading the next one agrees with is applied', () => {
        editeur._computeAndApplyRows(carte(79));
        const r = editeur._computeAndApplyRows(carte(79));
        expect(r.applied).toBe(true);
        expect(typeof r.rows).toBe('number');
        expect(fireEvent).toHaveBeenCalledTimes(1);
    });

    // The confirmation pass reads the same heights by definition, so the memo
    // must not be the thing that swallows it.
    test('the height memo does not swallow the confirmation', () => {
        editeur._computeAndApplyRows(carte(79));
        expect(editeur._lastMeasuredHeights).toBe(null);
    });

    // The bug itself: a row appearing and disappearing never reaches the config.
    test('a row that keeps trading places never reaches the config', () => {
        for (let i = 0; i < 8; i++) editeur._computeAndApplyRows(carte(i % 2 ? 79 : 0));
        expect(fireEvent).not.toHaveBeenCalled();
        expect(editeur._config.rows).toBeUndefined();
    });

    // And it must not cost a measurement on every frame for as long as the
    // dialog stays open.
    test('an unsettled card stops asking for more passes', () => {
        for (let i = 0; i < 8; i++) editeur._computeAndApplyRows(carte(i % 2 ? 79 : 0));
        expect(editeur._scheduleAutoRowsCompute.mock.calls.length).toBeLessThanOrEqual(4);
    });

    // A card that genuinely lost its row still loses its override, one pass
    // later. Nothing is written on the first reading either, which is the one
    // taken while the card is still being assembled.
    test('a row really gone is erased once the reading holds', () => {
        editeur._config = { ...editeur._config, rows: 1.676 };
        expect(editeur._computeAndApplyRows(carte(0))).toEqual({ applied: false, unconfirmed: true });
        expect(fireEvent).not.toHaveBeenCalled();
        const r = editeur._computeAndApplyRows(carte(0));
        expect(r.applied).toBe(true);
        expect(fireEvent).toHaveBeenCalledTimes(1);
        expect(fireEvent.mock.calls[0][2].config.rows).toBeUndefined();
    });

    test('a card that is no longer in the document is not measured at all', () => {
        const r = editeur._computeAndApplyRows(carte(79, { connected: false }));
        expect(r).toEqual({ applied: false, detached: true });
        expect(fireEvent).not.toHaveBeenCalled();
    });
});

// The preview card the editor measures has to be the one in the dialog.
//
// Every other signal can tie: `isEditor` is true for every card on the page
// while the dialog is open, and a dashboard can hold several cards of the same
// type on the same entity. The first to arrive used to win, and when that was
// a card from the view the auto-rows pass measured its height and wrote it
// into the edited card's config.
describe('BubbleCardEditor preview card scoring', () => {
    let editeur;
    beforeEach(() => {
        jest.clearAllMocks();
        editeur = new BubbleCardEditor();
        editeur._config = { card_type: 'media-player', entity: 'media_player.salon' };
    });

    const contexte = (dansApercu) => ({
        context: { inEditorPreview: dansApercu },
        config: { card_type: 'media-player', entity: 'media_player.salon' },
        isEditor: true,
        editMode: true,
    });

    test('the copy inside the dialog outranks an identical card from the view', () => {
        expect(editeur._scoreCardContext(contexte(true)))
            .toBeGreaterThan(editeur._scoreCardContext(contexte(false)));
    });

    // Two cards of the same type on the same entity used to score the same.
    test('without it the two are indistinguishable', () => {
        const vue = contexte(false);
        const autreVue = contexte(false);
        expect(editeur._scoreCardContext(vue)).toBe(editeur._scoreCardContext(autreVue));
    });

    // A context that says nothing about it is still usable, just outranked.
    test('a context without the flag still scores on the rest', () => {
        expect(editeur._scoreCardContext({ config: editeur._config, isEditor: true })).toBeGreaterThan(0);
    });
});


// A module configuration form shows the defaults its module declared for the
// fields the card has not set, so an untouched dropdown reads as what the card
// does rather than as nothing at all. ha-form hands the whole form back on any
// edit, so those shown values have to be taken out again on the way to the
// config, or looking at a form would write it.
//
// The rule that makes that safe, and that keeps a config written by an older
// version reading the same: only keys MISSING from the card can be shown as a
// default, so only those can ever be removed.
describe('BubbleCardEditor module defaults in the form', () => {

    const schema = () => [
        // A line of explanation carries no name and no value: a form is full of
        // them and none of them is a key of anything.
        { type: 'constant', label: 'What this module does' },
        { name: 'title', label: 'Title', selector: { text: {} } },
        { name: 'layout', label: 'Layout', selector: { select: {} }, default: 'default' },
        {
            type: 'expandable',
            title: 'Styling',
            schema: [
                { type: 'constant', label: 'How it looks' },
                { name: 'shape', label: 'Shape', selector: { select: {} }, default: 'square' },
                { name: 'opacity', label: 'Opacity', selector: { number: {} }, default: 1 },
            ],
        },
    ];

    describe('what the form is given to show', () => {
        test('a field the card has not set shows the default its module declared', () => {
            expect(schemaDefaults(schema(), {})).toEqual({ layout: 'default', shape: 'square', opacity: 1 });
        });

        test('a field the card carries is left alone, including one sitting on the default', () => {
            const shown = schemaDefaults(schema(), { layout: 'square', shape: 'square' });
            expect(shown).toEqual({ opacity: 1 });
        });

        // A section with no name shares the config of what holds it, which is
        // how ha-form hands a value down to it.
        test('a named section keeps its own object, so its fields are not keys of this one', () => {
            const nested = [{
                name: 'group', type: 'expandable', title: 'Group',
                schema: [{ name: 'shape', selector: { select: {} }, default: 'square' }],
            }];
            expect(schemaDefaults(nested, {})).toEqual({});
        });

        // The list-shaped modules keep their config in an array, whose keys are
        // positions. Merging named defaults into one would turn it into an
        // object, and the editor would no longer read it back as a list.
        test('a list-shaped module is left out of this entirely', () => {
            expect(schemaDefaults(schema(), [{ entity: 'light.a' }])).toEqual({});
        });

        test('a module that declares no default contributes nothing', () => {
            expect(schemaDefaults([{ name: 'title', selector: { text: {} } }], {})).toEqual({});
        });
    });

    describe('what reaches the card config', () => {
        function editorEditing(saved) {
            const editor = new BubbleCardEditor();
            editor._config = { card_type: 'button', my_module: saved ? { ...saved } : undefined };
            editor._workingModuleConfigs = { my_module: saved ? { ...saved } : {} };
            editor.requestUpdate = jest.fn();
            return editor;
        }
        const written = () => fireEvent.mock.calls.at(-1)[2].config.my_module;

        beforeEach(() => {
            jest.clearAllMocks();
        });

        test('a field left as it was shown is not written to the card', () => {
            const editor = editorEditing(null);

            // Typing a title hands back every field of the form, defaults and all.
            editor._valueChangedInHaForm(
                { detail: { value: { title: 'Kitchen', layout: 'default', shape: 'square', opacity: 1 } } },
                'my_module', schema(),
            );

            expect(written()).toEqual({ title: 'Kitchen' });
        });

        test('a field moved off what it was shown is written', () => {
            const editor = editorEditing(null);

            editor._valueChangedInHaForm(
                { detail: { value: { layout: 'square', shape: 'square', opacity: 1 } } },
                'my_module', schema(),
            );

            expect(written()).toEqual({ layout: 'square' });
        });

        // The compatibility rule, stated as a test: a card that already says
        // `layout: default` keeps saying it, even though the module declares
        // that very value as its default.
        test('a value the card already carried is never dropped', () => {
            const editor = editorEditing({ layout: 'default' });

            editor._valueChangedInHaForm(
                { detail: { value: { layout: 'default', shape: 'original', opacity: 1 } } },
                'my_module', schema(),
            );

            expect(written()).toEqual({ layout: 'default', shape: 'original' });
        });

        // The narrow case, and it comes out right: once the field has been
        // moved the card carries the key, so choosing the default again is a
        // choice like any other and is written down.
        test('a field moved away and set back to its default is written down', () => {
            const editor = editorEditing(null);
            const edit = (value) => editor._valueChangedInHaForm({ detail: { value } }, 'my_module', schema());

            edit({ layout: 'square', shape: 'square', opacity: 1 });
            expect(editor._workingModuleConfigs.my_module).toEqual({ layout: 'square' });

            edit({ layout: 'default', shape: 'square', opacity: 1 });
            expect(written()).toEqual({ layout: 'default' });
        });

        test('a module that declares no default hands its form value through untouched', () => {
            const editor = editorEditing(null);
            const value = { title: 'Kitchen' };

            editor._valueChangedInHaForm({ detail: { value } }, 'my_module', [{ name: 'title', selector: { text: {} } }]);

            expect(editor._workingModuleConfigs.my_module).toBe(value);
        });

        // ha-form turns a list into numbered keys and the editor turns it back.
        // Nothing above may get between those two.
        test('a list-shaped module still comes back as a list', () => {
            const editor = editorEditing(null);

            editor._valueChangedInHaForm(
                { detail: { value: { 0: { entity: 'light.a' }, 1: { entity: 'light.b' } } } },
                'my_module', schema(),
            );

            expect(written()).toEqual([{ entity: 'light.a' }, { entity: 'light.b' }]);
        });

        // And still comes back as one when its module declares a default: a key
        // that is not a number among the numbered ones is what stops the list
        // from being put back together, so the shown defaults come out first.
        test('a list-shaped module survives a module that declares defaults', () => {
            const editor = editorEditing(null);

            editor._valueChangedInHaForm(
                { detail: { value: { 0: { entity: 'light.a' }, 1: { entity: 'light.b' }, layout: 'default', shape: 'square', opacity: 1 } } },
                'my_module', schema(),
            );

            expect(written()).toEqual([{ entity: 'light.a' }, { entity: 'light.b' }]);
        });

        // Without the copy as it stood before the edit there is no telling a
        // value the card carried from one the form was only showing, so the
        // safe answer is to remove nothing.
        test('with no working copy at all, nothing is taken out', () => {
            const editor = editorEditing(null);
            editor._workingModuleConfigs = {};

            editor._valueChangedInHaForm(
                { detail: { value: { title: 'Kitchen', layout: 'default' } } },
                'my_module', schema(),
            );

            expect(written()).toEqual({ title: 'Kitchen', layout: 'default' });
        });
    });
});

describe('BubbleCardEditor conditions kept the same objects (#2657)', () => {
    const popUp = () => ({
        type: 'custom:bubble-card',
        card_type: 'pop-up',
        hash: '#kitchen',
        trigger: [
            { condition: 'screen', media_query: '(max-width: 767px)' },
            { condition: 'user', users: ['a'] },
        ],
    });
    const clone = (value) => JSON.parse(JSON.stringify(value));
    const change = (value) => ({ stopPropagation() {}, detail: { value } });

    beforeEach(() => { jest.clearAllMocks(); });

    test('a config that comes back as a deep copy keeps the conditions already held', () => {
        const editor = new BubbleCardEditor();
        editor.setConfig(popUp());
        const held = editor._config.trigger;
        editor.setConfig(clone(popUp()));
        expect(editor._config.trigger).toBe(held);
        expect(editor._config.trigger[1]).toBe(held[1]);
    });

    test('the config held is never the frozen object Home Assistant passed', () => {
        const editor = new BubbleCardEditor();
        const config = Object.freeze(popUp());
        editor.setConfig(config);
        editor.setConfig(config);
        expect(editor._config).not.toBe(config);
        expect(Object.isFrozen(editor._config)).toBe(false);
    });

    test('a changed part is taken, the parts around it stay', () => {
        const editor = new BubbleCardEditor();
        editor.setConfig(popUp());
        const held = editor._config.trigger;
        const next = clone(popUp()); next.trigger[1].users = ['a', 'b']; next.hash = '#living';
        editor.setConfig(next);
        expect(editor._config.hash).toBe('#living');
        expect(editor._config.trigger[0]).toBe(held[0]);
        expect(editor._config.trigger[1].users).toEqual(['a', 'b']);
    });

    test('the user Home Assistant adds again on its own is neither written nor announced', () => {
        const editor = new BubbleCardEditor();
        editor.requestUpdate = jest.fn();
        editor.setConfig(popUp());
        const held = editor._config.trigger;
        editor._conditionChanged(change([held[0], { ...held[1], users: ['a', 'a'] }]));
        expect(editor._config.trigger).toBe(held);
        expect(fireEvent).not.toHaveBeenCalled();
    });

    test('a user really ticked is written and announced', () => {
        const editor = new BubbleCardEditor();
        editor.requestUpdate = jest.fn();
        editor.setConfig(popUp());
        const held = editor._config.trigger;
        const ticked = { ...held[1], users: ['a', 'b'] };
        editor._conditionChanged(change([held[0], ticked]));
        expect(editor._config.trigger[1]).toBe(ticked);
        expect(editor._config.trigger[0]).toBe(held[0]);
        expect(fireEvent).toHaveBeenCalledTimes(1);
    });

    test('the whole round, with a plugin that copies the config, settles at once', () => {
        const editor = new BubbleCardEditor();
        editor.requestUpdate = jest.fn();
        editor.setConfig(clone(popUp()));
        const held = editor._config.trigger;
        // Home Assistant builds the row, adds the ticked user again, and would be
        // handed a copy back if the change were announced.
        for (let round = 0; round < 5; round++) {
            editor._conditionChanged(change([editor._config.trigger[0], { ...editor._config.trigger[1], users: [...editor._config.trigger[1].users, 'a'] }]));
            editor.setConfig(clone(editor._config));
        }
        expect(editor._config.trigger).toBe(held);
        expect(editor._config.trigger[1].users).toEqual(['a']);
        expect(fireEvent).not.toHaveBeenCalled();
    });
});


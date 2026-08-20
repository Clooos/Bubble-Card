import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// module-editor.js is a Lit template module, and it pulls the whole editor
// chain in with it. Everything it imports is stubbed except js-yaml and
// suggestions.js: the preview is worth testing precisely because it runs the
// real picker pipeline, so that one stays real and its own dependencies
// (registry.js, bct-provider.js, entity-suggestion.js, localize.js) are the
// stubs below, shared by both modules since both resolve them from src/modules.
jest.unstable_mockModule('lit', () => ({ html: (strings, ...values) => ({ strings, values }) }));
jest.unstable_mockModule('../tools/utils.js', () => ({ fireEvent: jest.fn() }));
jest.unstable_mockModule('../editor/utils.js', () => ({ tTemplate: (text) => text }));
jest.unstable_mockModule('./parser.js', () => ({ extractModuleMetadata: jest.fn() }));
jest.unstable_mockModule('./store.js', () => ({ _isModuleInstalledViaYaml: jest.fn(() => false) }));
jest.unstable_mockModule('./utils.js', () => ({ scrollToModuleForm: jest.fn() }));
const generateYamlExport = jest.fn(() => 'my_module:\n  name: My Module\n');
jest.unstable_mockModule('./export.js', () => ({
    generateYamlExport,
    generateGitHubExport: jest.fn(),
    copyToClipboard: jest.fn(),
    downloadModuleAsYaml: jest.fn(),
}));

// A DOM small enough to hold a preview column. The takeover only ever hides
// children, appends its own mount and reads back what it hid, so nothing here
// needs to be more than a tree of objects.
function fakeElement(tag) {
    const style = {
        removeProperty(name) { delete style[name]; },
    };
    const el = {
        tagName: tag.toUpperCase(),
        style,
        children: [],
        parentNode: null,
        attributes: {},
        textContent: '',
        setAttribute(name, value) { el.attributes[name] = value; },
        appendChild(child) {
            child.remove();
            child.parentNode = el;
            el.children.push(child);
            return child;
        },
        replaceChildren(...nodes) {
            el.children.forEach((child) => { child.parentNode = null; });
            el.children = nodes;
            nodes.forEach((child) => { child.parentNode = el; });
        },
        remove() {
            if (!el.parentNode) return;
            el.parentNode.children = el.parentNode.children.filter((child) => child !== el);
            el.parentNode = null;
        },
    };
    return el;
}

// saveModule talks to the document and to the window to broadcast its changes,
// and the suite runs on the node environment.
globalThis.document = {
    querySelector: () => null,
    dispatchEvent: () => true,
    createElement: fakeElement,
};
globalThis.window = { dispatchEvent: () => true };
globalThis.CustomEvent = class {
    constructor(type, init) {
        this.type = type;
        Object.assign(this, init || {});
    }
};

const yamlKeysMap = new Map();
jest.unstable_mockModule('./registry.js', () => ({ yamlKeysMap, moduleSourceMap: new Map() }));

jest.unstable_mockModule('./bct-provider.js', () => ({
    ensureBCTProviderAvailable: jest.fn(async () => false),
    writeModuleYaml: jest.fn(),
    deleteModuleFile: jest.fn(),
    getCachedAggregatedModules: jest.fn(() => null),
}));

const nativeSuggestion = () => ({
    label: 'Light',
    config: { type: 'custom:bubble-card', card_type: 'button', entity: 'light.salon' },
});
const getNativeEntitySuggestion = jest.fn(() => [nativeSuggestion()]);
jest.unstable_mockModule('../tools/entity-suggestion.js', () => ({
    getEntitySuggestion: getNativeEntitySuggestion,
}));

jest.unstable_mockModule('../tools/localize.js', () => ({
    default: jest.fn(() => (key) => key),
    ensureEditorTranslations: jest.fn(),
}));

const {
    parseSuggestionRules,
    validateSuggestionsCode,
    buildSuggestionsPreview,
    saveModule,
    renderModuleEditorForm,
    releaseSuggestionsPreview,
    dropSuggestionsPreviewIfStale,
} = await import('./module-editor.js');

const ENTITY = 'light.salon';
const hass = {
    locale: { language: 'en' },
    states: { [ENTITY]: { state: 'on', attributes: { friendly_name: 'Ceiling' } } },
    entities: { [ENTITY]: { entity_id: ENTITY, area_id: 'salon' } },
    devices: {},
    areas: { salon: { area_id: 'salon', name: 'Salon' } },
};

describe('parseSuggestionRules', () => {
    test('reads an empty editor as no declaration at all', () => {
        expect(parseSuggestionRules('')).toEqual({ rules: undefined, error: null, invalid: false });
        expect(parseSuggestionRules('  \n ')).toEqual({ rules: undefined, error: null, invalid: false });
        expect(parseSuggestionRules(undefined)).toEqual({ rules: undefined, error: null, invalid: false });
    });

    test('parses a list of rules', () => {
        const parsed = parseSuggestionRules('- extends: native\n- label: Square\n  domains: [light]\n');

        expect(parsed.rules).toEqual([{ extends: 'native' }, { label: 'Square', domains: ['light'] }]);
        expect(parsed.error).toBeNull();
        expect(parsed.invalid).toBe(false);
    });

    test('accepts a single rule written as a mapping, like the picker does', () => {
        expect(parseSuggestionRules('extends: base\n').rules).toEqual({ extends: 'base' });
    });

    test('reports the message js-yaml refused the text with', () => {
        const parsed = parseSuggestionRules('- extends: native\n  - broken\n');

        expect(typeof parsed.error).toBe('string');
        expect(parsed.error.length).toBeGreaterThan(0);
        expect(parsed.rules).toBeUndefined();
    });

    test('rejects a scalar, which would be iterated as one rule and do nothing', () => {
        expect(parseSuggestionRules('native')).toEqual({ rules: undefined, error: null, invalid: true });
    });

    test('reads a comment-only document as empty rather than as an error', () => {
        expect(parseSuggestionRules('# nothing yet\n')).toEqual({
            rules: undefined,
            error: null,
            invalid: false,
        });
    });
});

describe('validateSuggestionsCode', () => {
    test('accepts an empty body', () => {
        expect(validateSuggestionsCode('')).toBeNull();
        expect(validateSuggestionsCode('  \n')).toBeNull();
        expect(validateSuggestionsCode(undefined)).toBeNull();
    });

    test('compiles a body with the arguments the picker calls it with', () => {
        expect(
            validateSuggestionsCode(
                'const area = helpers.areaOf(entity);\n' +
                'return area ? { label: module.name, config: { card_type: "pop-up" } } : null;',
            ),
        ).toBeNull();
    });

    test('a top level return compiles, so the body is not checked as a script', () => {
        expect(validateSuggestionsCode('return null;')).toBeNull();
    });

    test('reports a syntax error instead of leaving it to the picker', () => {
        const error = validateSuggestionsCode('return { label: ;');

        expect(typeof error).toBe('string');
        expect(error.length).toBeGreaterThan(0);
    });
});

describe('buildSuggestionsPreview', () => {
    beforeEach(() => {
        yamlKeysMap.clear();
        getNativeEntitySuggestion.mockClear();
    });

    test('expands a declarative rule the way the picker will', () => {
        const preview = buildSuggestionsPreview(hass, ENTITY, 'my_module', {
            name: 'My Module',
            suggestions: [{ label: 'Square', config: { card_type: 'button' } }],
        });

        expect(preview).toEqual([
            {
                label: 'My Module · Square',
                config: {
                    card_type: 'button',
                    type: 'custom:bubble-card',
                    entity: ENTITY,
                    modules: ['my_module'],
                },
            },
        ]);
    });

    test('leaves the native suggestions out of the preview', () => {
        const preview = buildSuggestionsPreview(hass, ENTITY, 'my_module', {
            name: 'My Module',
            suggestions: [{ extends: 'native' }],
        });

        expect(preview).toHaveLength(1);
        expect(preview[0].label).toBe('My Module · Light');
        expect(preview[0].config.modules).toEqual(['my_module']);
    });

    test('runs the code hook and keeps its entries as authored', () => {
        const preview = buildSuggestionsPreview(hass, ENTITY, 'popups', {
            name: 'Pop-ups',
            suggestions_code:
                "return { label: helpers.areaName(helpers.areaOf(entity)), config: { card_type: 'pop-up', hash: '#salon' } };",
        });

        expect(preview).toEqual([
            {
                label: 'Pop-ups · Salon',
                // No entity filled in, no modules injected: a generated card is
                // standalone and must keep working without its generator.
                config: { card_type: 'pop-up', hash: '#salon', type: 'custom:bubble-card' },
            },
        ]);
    });

    test('hides the other modules from the preview but not from helpers.hasModule', () => {
        yamlKeysMap.set('other_module', {
            name: 'Other Module',
            suggestions: [{ label: 'Theirs', config: { card_type: 'button' } }],
        });

        const preview = buildSuggestionsPreview(hass, ENTITY, 'my_module', {
            name: 'My Module',
            suggestions_code:
                "return { label: helpers.hasModule('other_module') ? 'seen' : 'missing', config: { card_type: 'button' } };",
        });

        expect(preview.map((entry) => entry.label)).toEqual(['My Module · seen']);
    });

    test('puts the registry back exactly as it found it, even when the hook throws', () => {
        const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
        const other = { name: 'Other Module', suggestions: [{ extends: 'native' }] };
        yamlKeysMap.set('other_module', other);
        yamlKeysMap.set('my_module', { name: 'Stored version' });

        buildSuggestionsPreview(hass, ENTITY, 'my_module', {
            name: 'My Module',
            suggestions_code: 'throw new Error("nope");',
        });
        warn.mockRestore();

        expect([...yamlKeysMap.keys()]).toEqual(['other_module', 'my_module']);
        expect(yamlKeysMap.get('other_module')).toBe(other);
        expect(yamlKeysMap.get('other_module').suggestions).toEqual([{ extends: 'native' }]);
        expect(yamlKeysMap.get('my_module')).toEqual({ name: 'Stored version' });
    });

    test('honors the supported card types, like the picker does', () => {
        const preview = buildSuggestionsPreview(hass, ENTITY, 'my_module', {
            name: 'My Module',
            supported: ['pop-up'],
            suggestions: [{ config: { card_type: 'button' } }],
        });

        expect(preview).toEqual([]);
    });

    test('answers with nothing for an entity the installation does not have', () => {
        expect(buildSuggestionsPreview(hass, 'light.unknown', 'my_module', { name: 'My Module' })).toEqual([]);
        expect(buildSuggestionsPreview(hass, ENTITY, '', { name: 'My Module' })).toEqual([]);
        expect(buildSuggestionsPreview(hass, ENTITY, 'my_module', null)).toEqual([]);
    });

    test('a module declaring nothing offers nothing', () => {
        expect(buildSuggestionsPreview(hass, ENTITY, 'my_module', { name: 'My Module' })).toEqual([]);
    });
});

// The preview borrows Home Assistant's own preview column. Everything below is
// about the two halves of that deal: drawing the real cards in it, and giving
// it back untouched by every path the author can leave by.
describe('the entity suggestions preview takeover', () => {
    const RULE = { label: 'Square', config: { card_type: 'button' } };

    const makeDraft = (module, overrides = {}) => ({
        module,
        raw: '- label: Square\n  config:\n    card_type: button\n',
        rules: module.suggestions,
        rulesError: null,
        rulesInvalid: false,
        codeError: null,
        expanded: true,
        showInPreview: true,
        entity: ENTITY,
        previewKey: null,
        preview: [],
        ...overrides,
    });

    // The column as Home Assistant leaves it: its own preview card, plus a node
    // that already carries an inline display of its own.
    const makeColumn = () => {
        const container = fakeElement('div');
        const haPreview = fakeElement('hui-card');
        const haSpinner = fakeElement('ha-spinner');
        haSpinner.style.display = 'flex';
        container.appendChild(haPreview);
        container.appendChild(haSpinner);
        return { container, haPreview, haSpinner };
    };

    const makeContext = (draft, column) => ({
        hass,
        _hassRender: hass,
        _config: { modules: [], entity: ENTITY },
        _editingModule: draft?.module ?? null,
        _suggestionsDraft: draft,
        _getEditorPreviewContainer: () => column.container,
        createErrorConsole: () => '',
        requestUpdate: jest.fn(),
    });

    const mountOf = (column) => column.container.children.find(
        (child) => child !== column.haPreview && child !== column.haSpinner,
    );

    const cardsOf = (column) => (mountOf(column)?.children ?? [])
        .flatMap((item) => item.children.filter((child) => child.tagName === 'HUI-CARD'));

    beforeEach(() => {
        yamlKeysMap.clear();
    });

    test('draws the suggested cards in the preview column and hides what it holds', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const context = makeContext(makeDraft(module), column);

        renderModuleEditorForm(context);

        expect(column.haPreview.style.display).toBe('none');
        expect(column.haSpinner.style.display).toBe('none');

        const cards = cardsOf(column);
        expect(cards).toHaveLength(1);
        // A real card, built exactly the way Home Assistant builds the previews
        // of its own picker, and never a dump of its configuration.
        expect(cards[0].preview).toBe(true);
        expect(cards[0].hass).toBe(hass);
        expect(cards[0].config).toEqual({
            card_type: 'button',
            type: 'custom:bubble-card',
            entity: ENTITY,
            modules: ['my_module'],
        });
        // The label the picker would show, so a rule can be checked against it.
        expect(mountOf(column).children[0].children[0].textContent).toBe('My Module · Square');
    });

    test('leaves Home Assistant preview alone until the toggle is flipped', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const context = makeContext(makeDraft(module, { showInPreview: false }), column);

        renderModuleEditorForm(context);

        expect(column.container.children).toEqual([column.haPreview, column.haSpinner]);
        expect(column.haPreview.style.display).toBeUndefined();
        expect(context._suggestionsPreviewTakeover).toBeFalsy();
    });

    test('builds nothing while the panel is collapsed, whatever the toggle says', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const context = makeContext(makeDraft(module, { expanded: false }), column);

        renderModuleEditorForm(context);

        expect(mountOf(column)).toBeUndefined();
    });

    test('keeps the card in the column while no entity is picked', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const context = makeContext(makeDraft(module, { entity: '' }), column);

        renderModuleEditorForm(context);

        expect(mountOf(column)).toBeUndefined();
    });

    test('says so in the column when the module offers nothing for this entity', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module' };
        const context = makeContext(makeDraft(module, { raw: '', rules: undefined }), column);

        renderModuleEditorForm(context);

        expect(cardsOf(column)).toHaveLength(0);
        expect(mountOf(column).children[0].textContent).toBe('editor.module_editor.suggestions_preview_empty');
    });

    test('feeds a new hass to the cards it built instead of building them again', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const context = makeContext(makeDraft(module), column);

        renderModuleEditorForm(context);
        const built = cardsOf(column)[0];

        const laterHass = { ...hass, states: { ...hass.states } };
        context._hassRender = laterHass;
        renderModuleEditorForm(context);

        expect(cardsOf(column)[0]).toBe(built);
        expect(built.hass).toBe(laterHass);
    });

    test('builds again when the rules change', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const draft = makeDraft(module);
        const context = makeContext(draft, column);

        renderModuleEditorForm(context);
        const built = cardsOf(column)[0];

        draft.raw = '- label: Round\n  config:\n    card_type: button\n';
        draft.rules = [{ label: 'Round', config: { card_type: 'button' } }];
        renderModuleEditorForm(context);

        expect(cardsOf(column)[0]).not.toBe(built);
        expect(mountOf(column).children[0].children[0].textContent).toBe('My Module · Round');
    });

    test('puts every node back exactly as it was found when the toggle goes off', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const draft = makeDraft(module);
        const context = makeContext(draft, column);

        renderModuleEditorForm(context);
        draft.showInPreview = false;
        renderModuleEditorForm(context);

        // Home Assistant's nodes are still there, and the one that carried an
        // inline display got its own value back rather than an empty string.
        expect(column.container.children).toEqual([column.haPreview, column.haSpinner]);
        expect(column.haPreview.style.display).toBeUndefined();
        expect(column.haSpinner.style.display).toBe('flex');
        expect(context._suggestionsPreviewTakeover).toBeNull();
    });

    test('puts the column back when the panel collapses, and leaves the toggle on', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const draft = makeDraft(module);
        const context = makeContext(draft, column);

        renderModuleEditorForm(context);
        draft.expanded = false;
        renderModuleEditorForm(context);

        expect(mountOf(column)).toBeUndefined();
        // Reopening the panel has to find the preview where it was left.
        expect(draft.showInPreview).toBe(true);
    });

    test('puts the column back when the module editor is closed', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const context = makeContext(makeDraft(module), column);

        renderModuleEditorForm(context);
        context._editingModule = null;
        renderModuleEditorForm(context);

        expect(column.container.children).toEqual([column.haPreview, column.haSpinner]);
        expect(column.haSpinner.style.display).toBe('flex');
    });

    test('releaseSuggestionsPreview switches the toggle off too, so nothing takes it back', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const draft = makeDraft(module);
        const context = makeContext(draft, column);

        renderModuleEditorForm(context);
        releaseSuggestionsPreview(context);

        expect(mountOf(column)).toBeUndefined();
        expect(draft.showInPreview).toBe(false);

        renderModuleEditorForm(context);
        expect(mountOf(column)).toBeUndefined();
    });

    test('saveModule hands the column back', async () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const context = makeContext(makeDraft(module), column);

        renderModuleEditorForm(context);
        await saveModule(context, module);

        expect(column.container.children).toEqual([column.haPreview, column.haSpinner]);
        expect(context._suggestionsPreviewTakeover).toBeNull();
    });

    // The panel has no way to know it stopped being rendered: the modules tab
    // switching, the Modules panel collapsing and a card type without a module
    // editor all just stop calling it.
    test('restores after an update the panel did not claim the column in', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const context = makeContext(makeDraft(module), column);

        renderModuleEditorForm(context);
        // The update that follows the render that claimed it: still on screen.
        dropSuggestionsPreviewIfStale(context);
        expect(mountOf(column)).toBeTruthy();

        // The next update, with no render of the panel in between.
        dropSuggestionsPreviewIfStale(context);
        expect(mountOf(column)).toBeUndefined();
        expect(column.haSpinner.style.display).toBe('flex');
    });

    test('survives every update as long as the panel keeps claiming the column', () => {
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const context = makeContext(makeDraft(module), column);

        for (let pass = 0; pass < 3; pass += 1) {
            renderModuleEditorForm(context);
            dropSuggestionsPreviewIfStale(context);
        }

        expect(cardsOf(column)).toHaveLength(1);
    });

    test('never leaves a draft in the registry the real picker reads', () => {
        yamlKeysMap.set('my_module', { name: 'Stored version' });
        const column = makeColumn();
        const module = { id: 'my_module', name: 'My Module', suggestions: [RULE] };
        const context = makeContext(makeDraft(module), column);

        renderModuleEditorForm(context);

        expect(yamlKeysMap.get('my_module')).toEqual({ name: 'Stored version' });
    });
});

// The <pre> of the export panel holds a binding, so the export can only ever
// reach it through a render. Writing it into the node instead ejects the lit
// markers of that binding, and every later render of the editor throws on a
// part that no longer has a parent, which is the whole editor frozen from the
// first click on Copy or Download.
describe('the export preview', () => {
    const CONTENT = 'my_module:\n  name: My Module\n';
    const HINT = 'editor.module_editor.export_preview_hint';

    // The template modules are plain objects here, so the binding is read where
    // the markup that carries the id ends.
    const exportPreviewBinding = (node) => {
        if (Array.isArray(node)) {
            for (const child of node) {
                const found = exportPreviewBinding(child);
                if (found !== undefined) return found;
            }
            return undefined;
        }
        if (!node || typeof node !== 'object' || !Array.isArray(node.strings)) return undefined;

        const index = node.strings.findIndex(
            (part) => typeof part === 'string' && part.includes('id="export-preview-content"'),
        );
        if (index !== -1) return node.values[index];

        return exportPreviewBinding(node.values);
    };

    const makeContext = (editingModule, exportPreview) => ({
        hass,
        _hassRender: hass,
        _config: { modules: [] },
        _editingModule: editingModule,
        _exportPreview: exportPreview,
        createErrorConsole: () => '',
        requestUpdate: jest.fn(),
    });

    test('opens on the hint, not on an empty box', () => {
        const context = makeContext({ id: 'my_module', name: 'My Module' });

        expect(exportPreviewBinding(renderModuleEditorForm(context))).toBe(HINT);
    });

    test('draws the export the buttons produced', () => {
        const editingModule = { id: 'my_module', name: 'My Module' };
        const context = makeContext(editingModule, { module: editingModule, content: CONTENT });

        expect(exportPreviewBinding(renderModuleEditorForm(context))).toBe(CONTENT);
    });

    test('never opens the next module on the export of the previous one', () => {
        const context = makeContext(
            { id: 'my_module', name: 'My Module' },
            { module: { id: 'other_module', name: 'Other' }, content: CONTENT },
        );

        expect(exportPreviewBinding(renderModuleEditorForm(context))).toBe(HINT);
    });
});

// What the file is written from is generateYamlExport's argument, so this is
// where the two keys either survive the editor or are lost. What the export
// itself then does with them is covered by export.test.js.
describe('saveModule', () => {
    const makeContext = (editingModule, draft) => ({
        hass,
        _config: { modules: [] },
        _editingModule: editingModule,
        _suggestionsDraft: draft,
        requestUpdate: jest.fn(),
        stylesYAML: null,
    });

    beforeEach(() => {
        yamlKeysMap.clear();
        generateYamlExport.mockClear();
    });

    test('writes the suggestions the panel holds, debounce pending or not', async () => {
        const editingModule = {
            id: 'my_module',
            name: 'My Module',
            // The parsed value the debounce last committed is one rule behind
            // the text the user typed.
            suggestions: [{ extends: 'native' }],
            suggestions_code: 'return null;',
        };
        const context = makeContext(editingModule, {
            module: editingModule,
            raw: '- extends: native\n- label: Square\n  config:\n    card_type: button\n',
        });

        await saveModule(context, editingModule);

        expect(generateYamlExport).toHaveBeenCalledTimes(1);
        expect(generateYamlExport.mock.calls[0][0]).toMatchObject({
            suggestions: [{ extends: 'native' }, { label: 'Square', config: { card_type: 'button' } }],
            suggestions_code: 'return null;',
        });
    });

    test('an emptied rules editor drops the declaration instead of writing an empty one', async () => {
        const editingModule = { id: 'my_module', name: 'My Module', suggestions: [{ extends: 'native' }] };
        const context = makeContext(editingModule, { module: editingModule, raw: '' });

        await saveModule(context, editingModule);

        expect(generateYamlExport.mock.calls[0][0].suggestions).toBeUndefined();
    });

    test('a module saved without the panel ever opening keeps its declarations', async () => {
        const editingModule = {
            id: 'my_module',
            name: 'My Module',
            suggestions: [{ extends: 'base' }],
            suggestions_code: 'return null;',
        };

        await saveModule(makeContext(editingModule, null), editingModule);

        expect(generateYamlExport.mock.calls[0][0]).toMatchObject({
            suggestions: [{ extends: 'base' }],
            suggestions_code: 'return null;',
        });
    });

    test('unreadable rules never overwrite what the module already declares', async () => {
        const editingModule = { id: 'my_module', name: 'My Module', suggestions: [{ extends: 'native' }] };
        const context = makeContext(editingModule, {
            module: editingModule,
            raw: '- extends: native\n  - broken\n',
        });

        await saveModule(context, editingModule);

        expect(generateYamlExport.mock.calls[0][0].suggestions).toEqual([{ extends: 'native' }]);
    });
});

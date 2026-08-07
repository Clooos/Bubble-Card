import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import jsyaml from 'js-yaml';

const getAvailableCardTypes = jest.fn(() => [{ id: 'button' }, { id: 'pop-up' }]);
jest.unstable_mockModule('./module-editor.js', () => ({ getAvailableCardTypes }));
jest.unstable_mockModule('./cache.js', () => ({ fireToast: jest.fn() }));
jest.unstable_mockModule('../tools/localize.js', () => ({ default: () => (key) => key }));

const { generateYamlExport } = await import('./export.js');

const roundTrip = (moduleData) => {
    const parsed = jsyaml.load(generateYamlExport(moduleData));
    return parsed[moduleData.id];
};

describe('generateYamlExport', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        getAvailableCardTypes.mockReturnValue([{ id: 'button' }, { id: 'pop-up' }]);
    });

    test('keeps the known keys in a stable order', () => {
        const yaml = generateYamlExport({
            id: 'my_module',
            code: 'body { color: red; }',
            name: 'My Module',
            version: '1.0',
        });

        expect(Object.keys(jsyaml.load(yaml).my_module)).toEqual(['name', 'version', 'code']);
    });

    test('preserves declarations the export does not know about', () => {
        const exported = roundTrip({
            id: 'my_module',
            name: 'My Module',
            suggestions: [{ extends: 'native' }],
            suggestions_code: 'return null;',
            extra_module_url: 'boot.js',
            unsupported: ['calendar'],
        });

        expect(exported.suggestions).toEqual([{ extends: 'native' }]);
        expect(exported.suggestions_code).toBe('return null;');
        expect(exported.extra_module_url).toBe('boot.js');
        expect(exported.unsupported).toEqual(['calendar']);
    });

    test('never writes the editor-only fields back to the file', () => {
        const exported = roundTrip({
            id: 'my_module',
            name: 'My Module',
            yaml: 'my_module:\n  name: My Module\n',
            editor_raw: 'raw',
        });

        expect(exported.id).toBeUndefined();
        expect(exported.yaml).toBeUndefined();
        expect(exported.editor_raw).toBeUndefined();
    });

    test('the carry-over pass cannot undo a deliberate decision', () => {
        // `supported` listing every card type is dropped for compatibility with
        // older versions, and a false `is_global` is omitted entirely.
        const exported = roundTrip({
            id: 'my_module',
            name: 'My Module',
            supported: ['button', 'pop-up'],
            is_global: false,
        });

        expect(exported.supported).toBeUndefined();
        expect(exported.is_global).toBeUndefined();
    });

    test('a partial list of supported card types is kept', () => {
        const exported = roundTrip({ id: 'my_module', name: 'My Module', supported: ['button'] });

        expect(exported.supported).toEqual(['button']);
    });

    test('the in-memory shape the editor hands back leaks nothing into the file', () => {
        // What extractModuleMetadata seeds (parser.js) plus what editModule adds,
        // which is what _editingModule actually holds after one save.
        const exported = roundTrip({
            id: 'my_module',
            name: 'My Module',
            suggestions_code: 'return null;',
            author: '',
            type: 'Module',
            imageUrl: '',
            unsupported: [],
            editorReference: 'some.schema',
            yaml: 'my_module:\n  name: My Module\n',
        });

        expect(Object.keys(exported)).toEqual(['name', 'suggestions_code']);
    });

    test('a legacy author that the file really declares is kept', () => {
        expect(roundTrip({ id: 'my_module', name: 'My Module', author: 'Bob' }).author).toBe('Bob');
    });

    test('null and undefined declarations are dropped rather than emitted', () => {
        const exported = roundTrip({
            id: 'my_module',
            name: 'My Module',
            link: '',
            suggestions: null,
            suggestions_code: undefined,
        });

        expect('link' in exported).toBe(false);
        expect('suggestions' in exported).toBe(false);
        expect('suggestions_code' in exported).toBe(false);
    });
});

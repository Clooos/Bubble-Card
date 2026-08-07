import { describe, expect, jest, test } from '@jest/globals';

// parser.js reaches registry.js through utils.js, and registry.js touches
// `document` at module scope, so both imports are mocked away here.
const getAvailableCardTypes = jest.fn(() => [{ id: 'button', name: 'Button' }, { id: 'pop-up', name: 'Pop-up' }]);
jest.unstable_mockModule('./module-editor.js', () => ({ getAvailableCardTypes }));
jest.unstable_mockModule('./utils.js', () => ({
    _slugify: (value) => String(value ?? '').toLowerCase().replace(/\s+/g, '-'),
    _cleanMarkdown: (value) => String(value ?? ''),
}));
jest.unstable_mockModule('./cache.js', () => ({ fireToast: jest.fn() }));
jest.unstable_mockModule('../tools/localize.js', () => ({ default: () => (key) => key }));

const { extractModuleMetadata } = await import('./parser.js');
const { generateYamlExport } = await import('./export.js');

describe('extractModuleMetadata', () => {
    test('carries the declarations it does not handle out of a module body', () => {
        const metadata = extractModuleMetadata(
            [
                'my_module:',
                '  name: My Module',
                '  code: "body {}"',
                '  suggestions:',
                '    - label: Fan',
                '  suggestions_code: "return null;"',
                '  extra_module_url: boot.js',
            ].join('\n'),
            'my_module',
        );

        expect(metadata.suggestions).toEqual([{ label: 'Fan' }]);
        expect(metadata.suggestions_code).toBe('return null;');
        expect(metadata.extra_module_url).toBe('boot.js');
    });

    test('carries the declarations it does not handle out of a flat module too', () => {
        const metadata = extractModuleMetadata(
            [
                'name: My Module',
                'code: "body {}"',
                'suggestions:',
                '  - label: Fan',
                'suggestions_code: "return null;"',
            ].join('\n'),
            'my_module',
        );

        expect(metadata.suggestions).toEqual([{ label: 'Fan' }]);
        expect(metadata.suggestions_code).toBe('return null;');
    });

    test('the carry-over pass cannot undo a value the function resolved itself', () => {
        const metadata = extractModuleMetadata(
            [
                'my_module:',
                '  name: My Module',
                '  description:',
                '    - First line',
                '    - Second line',
                '  unsupported:',
                '    - pop-up',
                '  form_schema:',
                '    - name: entity',
                '      type: string',
            ].join('\n'),
            'my_module',
        );

        // The processed description, the supported/unsupported backward
        // compatibility and the form_schema aliasing all survive untouched.
        expect(metadata.description).toBe('First line\nSecond line');
        expect(metadata.supported).not.toContain('pop-up');
        expect(metadata.supported).toContain('button');
        expect(metadata.editor).toEqual([{ name: 'entity', type: 'string' }]);
        expect(metadata.form_schema).toBeUndefined();
    });

    test('never carries the internal fields a file should not declare', () => {
        const yamlContent = [
            'my_module:',
            '  name: My Module',
            '  id: another_module',
            '  yaml: stale',
            '  editor_raw: stale',
            '  editorReference: stale',
            '  imageUrl: https://example.com/stale.png',
        ].join('\n');

        const metadata = extractModuleMetadata(yamlContent, 'my_module');

        expect(metadata.id).toBe('my_module');
        expect(metadata.yaml).toBe(yamlContent);
        expect(metadata.editor_raw).toBeUndefined();
        expect(metadata.editorReference).toBeUndefined();
        expect(metadata.imageUrl).toBe('');
    });

    test('never carries the legacy info block, only what it lifts out of it', () => {
        const metadata = extractModuleMetadata(
            [
                'my_module:',
                '  name: My Module',
                '  info:',
                '    version: "2.0"',
                '  suggestions_code: "return null;"',
            ].join('\n'),
            'my_module',
        );

        expect(metadata.info).toBeUndefined();
        expect(metadata.version).toBe('2.0');
        expect(metadata.suggestions_code).toBe('return null;');
    });

    test('a document holding several modules never leaks a module body into the metadata', () => {
        const metadata = extractModuleMetadata(
            [
                'module_a:',
                '  name: Module A',
                '  code: "body {}"',
                'module_b:',
                '  name: Module B',
                '  code: "body {}"',
            ].join('\n'),
            'module_a',
        );

        expect(metadata.module_a).toBeUndefined();
        expect(metadata.module_b).toBeUndefined();
    });

    test('a module parsed from a discussion post keeps its suggestions for the store install', () => {
        const metadata = extractModuleMetadata(
            [
                'my_module:',
                '  name: My Module',
                '  code: "body {}"',
                '  suggestions:',
                '    - label: Fan',
            ].join('\n'),
            'my_module',
            { title: '[My Module] v1.2', bodyText: '**Version:** 1.2\n\nA module.', defaultCreator: 'Clooos' },
        );

        expect(metadata.suggestions).toEqual([{ label: 'Fan' }]);
        expect(metadata.creator).toBe('Clooos');
    });

    test('a module declaring suggestions survives a save through the module editor', () => {
        // saveModule writes the file with generateYamlExport, then stores what
        // this function returns in the registry: both passes must keep the key.
        const moduleData = {
            id: 'my_module',
            name: 'My Module',
            code: 'body {}',
            suggestions: [{ label: 'Fan', config: { entity: '${entity}' } }],
            suggestions_code: 'return null;',
        };

        const metadata = extractModuleMetadata(generateYamlExport(moduleData), moduleData.id);

        expect(metadata.suggestions).toEqual(moduleData.suggestions);
        expect(metadata.suggestions_code).toBe('return null;');
    });
});

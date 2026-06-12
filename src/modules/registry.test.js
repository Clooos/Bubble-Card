import { describe, expect, jest, test } from '@jest/globals';

// registry.js wires document/window listeners at import time
global.document = { addEventListener: jest.fn(), dispatchEvent: jest.fn() };
global.window = { addEventListener: jest.fn(), dispatchEvent: jest.fn() };

jest.unstable_mockModule('./bct-provider.js', () => ({
    ensureBCTProviderAvailable: jest.fn(async () => false),
    readAllModules: jest.fn(async () => new Map()),
    getCachedAggregatedModules: jest.fn(() => null),
}));

jest.unstable_mockModule('./bct-migration.js', () => ({
    migrateIfNeeded: jest.fn(async () => {}),
}));

jest.unstable_mockModule('./yaml-schema.js', () => ({
    parseYamlWithIncludes: jest.fn(() => ({})),
}));

// registry.js imports these only to hand them to editor_code as the `bc` arg;
// the values just need to be identifiable references for the round-trip test.
const LIT = { LitElement: class {}, html: () => {}, css: () => {}, nothing: Symbol('nothing') };
jest.unstable_mockModule('lit', () => LIT);
const fireEvent = jest.fn();
jest.unstable_mockModule('../tools/utils.js', () => ({ fireEvent }));

const { runEditorCode } = await import('./registry.js');

describe('runEditorCode', () => {
    test('runs editor_code with module_id and the module object, so schema mutations stick', () => {
        const mod = { editor_code: 'module.editor = [{ name: module_id }];' };

        runEditorCode({ my_module: mod });

        expect(mod.editor).toEqual([{ name: 'my_module' }]);
    });

    test('passes the bc API (lit primitives + fireEvent) as the third arg', () => {
        const mod = { editor_code: 'module.api = { hasLit: !!bc.LitElement && !!bc.html && !!bc.css, hasFire: !!bc.fireEvent };' };

        runEditorCode({ my_module: mod });

        expect(mod.api).toEqual({ hasLit: true, hasFire: true });
    });

    test('does not re-run editor_code for the same module object', () => {
        const mod = { editor_code: 'module.runs = (module.runs || 0) + 1;' };

        runEditorCode({ my_module: mod });
        runEditorCode({ my_module: mod });

        expect(mod.runs).toBe(1);
    });

    test('re-runs editor_code when a refresh replaces the module object under the same key', () => {
        // Background cache refreshes rebuild the module objects; editor_code must
        // run again on the fresh object so its schema mutations are reapplied.
        const code = 'module.runs = (module.runs || 0) + 1;';
        const original = { editor_code: code };
        const refreshed = { editor_code: code };

        runEditorCode({ my_module: original });
        runEditorCode({ my_module: refreshed });

        expect(original.runs).toBe(1);
        expect(refreshed.runs).toBe(1);
    });

    test('a throwing editor_code is logged and does not block other modules', () => {
        const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        const broken = { editor_code: 'throw new Error("boom");' };
        const healthy = { editor_code: 'module.ok = true;' };

        runEditorCode({ broken, healthy });

        expect(healthy.ok).toBe(true);
        expect(errorSpy).toHaveBeenCalledWith(
            expect.stringContaining("'broken'"),
            expect.any(Error),
        );
        errorSpy.mockRestore();
    });

    test('tolerates missing maps and entries without editor_code', () => {
        expect(() => runEditorCode(null)).not.toThrow();
        expect(() => runEditorCode({ a: null, b: 'yaml text', c: {} })).not.toThrow();
    });
});

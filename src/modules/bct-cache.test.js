import { beforeEach, describe, expect, jest, test } from '@jest/globals';

const CURRENT_KEY = 'bubble-card-bct-cache-v2:localhost';
const LEGACY_KEY = 'bubble-card-bct-cache-v1:localhost';
const CODE = 'A'.repeat(64);

// bct-provider keeps per-session state (availability, the parsed-cache memo,
// the one-shot stale purge), so every test gets a fresh module instance.
async function loadProvider() {
    jest.resetModules();
    return import('./bct-provider.js');
}

function createStorage() {
    const values = new Map();
    return {
        values,
        get length() { return values.size; },
        key: (i) => Array.from(values.keys())[i] ?? null,
        getItem: (k) => (values.has(k) ? values.get(k) : null),
        setItem: (k, v) => { values.set(k, v); },
        removeItem: (k) => { values.delete(k); },
    };
}

function cacheBlob(files) {
    return JSON.stringify({ version: 2, files });
}

function fileEntry(updatedAt, moduleId, code) {
    return { updated_at: updatedAt, modules: { [moduleId]: { name: moduleId, code } } };
}

// A hass whose BCT integration serves one module file, with the YAML already
// parsed server-side (the bulk read path).
function createHass() {
    return {
        user: { is_admin: false },
        callWS: jest.fn(async ({ type, names }) => {
            if (type === 'bubble_card_tools/list_modules') {
                return { files: [{ name: 'modules/a.yaml', updated_at: '1' }] };
            }
            if (type === 'bubble_card_tools/read_all_modules') {
                return {
                    modules: (names || []).map((name) => ({
                        name,
                        content: 'alpha:\n  name: alpha',
                        parsed: { alpha: { name: 'alpha', code: CODE } },
                    })),
                };
            }
            return null;
        }),
    };
}

let storage;

beforeEach(() => {
    storage = createStorage();
    Object.defineProperty(global, 'localStorage', { value: storage, configurable: true, writable: true });
    Object.defineProperty(global, 'location', { value: { host: 'localhost' }, configurable: true, writable: true });
});

describe('getCachedAggregatedModules', () => {
    test('derives the flat module map from the cached files', async () => {
        const { getCachedAggregatedModules } = await loadProvider();
        storage.values.set(CURRENT_KEY, cacheBlob({
            'modules/a.yaml': fileEntry('1', 'alpha', 'AAA'),
            'modules/b.yaml': fileEntry('1', 'beta', 'BBB'),
        }));

        expect(getCachedAggregatedModules()).toEqual({
            alpha: { name: 'alpha', code: 'AAA' },
            beta: { name: 'beta', code: 'BBB' },
        });
    });

    test('returns null when no file holds a module', async () => {
        const { getCachedAggregatedModules } = await loadProvider();
        storage.values.set(CURRENT_KEY, cacheBlob({ 'modules/a.yaml': { updated_at: '1', modules: {} } }));

        expect(getCachedAggregatedModules()).toBeNull();
    });

    test('returns null when nothing is cached', async () => {
        const { getCachedAggregatedModules } = await loadProvider();

        expect(getCachedAggregatedModules()).toBeNull();
    });

    test('serves the same derived object on repeated calls', async () => {
        const { getCachedAggregatedModules } = await loadProvider();
        storage.values.set(CURRENT_KEY, cacheBlob({ 'modules/a.yaml': fileEntry('1', 'alpha', 'AAA') }));

        expect(getCachedAggregatedModules()).toBe(getCachedAggregatedModules());
    });

    test('picks up a cache rewritten by another tab', async () => {
        const { getCachedAggregatedModules } = await loadProvider();
        storage.values.set(CURRENT_KEY, cacheBlob({ 'modules/a.yaml': fileEntry('1', 'alpha', 'AAA') }));
        expect(getCachedAggregatedModules()).toEqual({ alpha: { name: 'alpha', code: 'AAA' } });

        storage.values.set(CURRENT_KEY, cacheBlob({ 'modules/a.yaml': fileEntry('2', 'alpha', 'ZZZ') }));

        expect(getCachedAggregatedModules()).toEqual({ alpha: { name: 'alpha', code: 'ZZZ' } });
    });
});

describe('stale cache versions', () => {
    test('drops the v1 blob, the largest entry this origin ever wrote', async () => {
        const { getCachedAggregatedModules } = await loadProvider();
        storage.values.set(LEGACY_KEY, JSON.stringify({ version: 1, files: {}, aggregatedModules: {} }));

        getCachedAggregatedModules();

        expect(storage.values.has(LEGACY_KEY)).toBe(false);
    });

    test('leaves the current blob and unrelated keys alone', async () => {
        const { getCachedAggregatedModules } = await loadProvider();
        storage.values.set(LEGACY_KEY, '{}');
        storage.values.set(CURRENT_KEY, cacheBlob({ 'modules/a.yaml': fileEntry('1', 'alpha', 'AAA') }));
        storage.values.set('bubble-card-modules-sort-order', 'default');
        storage.values.set('bubbleButtonWidth-#kitchen', '120');

        expect(getCachedAggregatedModules()).toEqual({ alpha: { name: 'alpha', code: 'AAA' } });
        expect(storage.values.has(LEGACY_KEY)).toBe(false);
        expect(storage.values.get('bubble-card-modules-sort-order')).toBe('default');
        expect(storage.values.get('bubbleButtonWidth-#kitchen')).toBe('120');
    });
});

describe('readAllModules persistence', () => {
    test('never writes a module code twice', async () => {
        const { readAllModules } = await loadProvider();

        const modules = await readAllModules(createHass());
        expect(modules.get('alpha')).toEqual({ id: 'alpha', name: 'alpha', code: CODE });

        const raw = storage.values.get(CURRENT_KEY);
        expect(raw).toBeTruthy();
        // The aggregate is derived on read, so `code` is serialized once.
        expect(JSON.parse(raw).aggregatedModules).toBeUndefined();
        expect(raw.split(CODE).length - 1).toBe(1);
    });

    test('exposes the freshly read modules through the derived aggregate', async () => {
        const { readAllModules, getCachedAggregatedModules } = await loadProvider();

        await readAllModules(createHass());

        expect(getCachedAggregatedModules()).toEqual({ alpha: { id: 'alpha', name: 'alpha', code: CODE } });
    });

    test('stops serving a module whose file was invalidated in place', async () => {
        // A bubble_card_tools.updated event drops that one file's entry by
        // mutating the parsed cache and saving it back under the SAME object
        // identity. The derived aggregate is memoized on that identity, so it
        // has to be dropped by the write, not by an identity check.
        const { readAllModules, getCachedAggregatedModules } = await loadProvider();

        let onModuleChanged = null;
        const hass = createHass();
        hass.user = { is_admin: true };
        hass.connection = { subscribeEvents: jest.fn((cb) => { onModuleChanged = cb; return () => {}; }) };
        global.document = { dispatchEvent: () => {} };
        global.CustomEvent = class { constructor(type) { this.type = type; } };

        await readAllModules(hass);
        expect(getCachedAggregatedModules()).toEqual({ alpha: { id: 'alpha', name: 'alpha', code: CODE } });
        expect(onModuleChanged).toEqual(expect.any(Function));

        onModuleChanged({ data: { name: 'modules/a.yaml' } });

        expect(getCachedAggregatedModules()).toBeNull();
    });

    test('keeps the aggregate warm for a nameless event', async () => {
        // The integration emits a generic nameless `updated` on every boot; it
        // must not invalidate anything.
        const { readAllModules, getCachedAggregatedModules } = await loadProvider();

        let onModuleChanged = null;
        const hass = createHass();
        hass.user = { is_admin: true };
        hass.connection = { subscribeEvents: jest.fn((cb) => { onModuleChanged = cb; return () => {}; }) };

        await readAllModules(hass);
        onModuleChanged({ data: {} });

        expect(getCachedAggregatedModules()).toEqual({ alpha: { id: 'alpha', name: 'alpha', code: CODE } });
    });
});

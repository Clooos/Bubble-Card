import { beforeEach, describe, expect, jest, test } from '@jest/globals';

const CURRENT_KEY = 'bubble-card-bct-cache-v2:localhost';

// registry keeps per-session state (allModules, modulesInitialized, the init
// promise), so every test gets a fresh module instance.
async function loadRegistry() {
    jest.resetModules();
    return import('./registry.js');
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

// Minimal event target: registry registers document/window listeners at import
// time and the background refresh dispatches through them.
function createEventTarget() {
    const listeners = new Map();
    return {
        addEventListener: (type, cb) => {
            if (!listeners.has(type)) listeners.set(type, new Set());
            listeners.get(type).add(cb);
        },
        removeEventListener: (type, cb) => { listeners.get(type)?.delete(cb); },
        dispatchEvent: (ev) => {
            listeners.get(ev.type)?.forEach((cb) => cb(ev));
            return true;
        },
    };
}

// A hass whose BCT integration serves one module file (updated_at '2') whose
// current content is NEW_CODE, with the migration already recorded as done.
const NEW_CODE = 'NEW'.repeat(8);
function createHass() {
    return {
        user: { is_admin: false },
        callWS: jest.fn(async ({ type, name, names }) => {
            if (type === 'bubble_card_tools/list_modules') {
                return { files: [{ name: 'modules/a.yaml', updated_at: '2' }] };
            }
            if (type === 'bubble_card_tools/read_module' && name === 'config.yaml') {
                return { content: 'migration:\n  done: true\n' };
            }
            if (type === 'bubble_card_tools/read_all_modules') {
                return {
                    modules: (names || []).map((n) => ({
                        name: n,
                        content: 'alpha:\n  name: alpha',
                        parsed: { alpha: { name: 'alpha', code: NEW_CODE } },
                    })),
                };
            }
            return null;
        }),
    };
}

function staleCacheBlob() {
    return JSON.stringify({
        version: 2,
        files: { 'modules/a.yaml': { updated_at: '1', modules: { alpha: { name: 'alpha', code: 'OLD' } } } },
    });
}

async function pollUntil(predicate, timeoutMs = 4000) {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
        if (predicate()) return true;
        await new Promise((resolve) => setTimeout(resolve, 25));
    }
    return predicate();
}

let storage;
let hassRoot;

beforeEach(() => {
    storage = createStorage();
    hassRoot = { hass: undefined };
    const doc = createEventTarget();
    doc.querySelector = (sel) => (sel === 'home-assistant' ? hassRoot : null);
    Object.defineProperty(global, 'localStorage', { value: storage, configurable: true, writable: true });
    Object.defineProperty(global, 'location', { value: { host: 'localhost' }, configurable: true, writable: true });
    Object.defineProperty(global, 'document', { value: doc, configurable: true, writable: true });
    Object.defineProperty(global, 'window', { value: createEventTarget(), configurable: true, writable: true });
    global.CustomEvent = class { constructor(type, opts) { this.type = type; this.detail = opts?.detail; } };
    global.fetch = jest.fn(async () => ({ ok: false, status: 404, text: async () => '' }));
});

describe('initializeModules background revalidation', () => {
    test('revalidates a stale cache even when hass shows up after init', async () => {
        storage.values.set(CURRENT_KEY, staleCacheBlob());
        const { initializeModules, yamlKeysMap } = await loadRegistry();
        const hass = createHass();

        const updated = jest.fn();
        global.document.addEventListener('yaml-modules-updated', updated);

        // First caller is a card that has not received hass yet (boot order).
        const served = await initializeModules({});
        expect(served.alpha.code).toBe('OLD');
        expect(yamlKeysMap.get('alpha').code).toBe('OLD');
        expect(hass.callWS).not.toHaveBeenCalled();

        setTimeout(() => { hassRoot.hass = hass; }, 200);

        expect(await pollUntil(() => yamlKeysMap.get('alpha')?.code === NEW_CODE)).toBe(true);
        expect(updated).toHaveBeenCalled();
        expect(hass.callWS).toHaveBeenCalledWith(expect.objectContaining({ type: 'bubble_card_tools/list_modules' }));
    });

    test('leaves a fresh cache alone after revalidating it', async () => {
        storage.values.set(CURRENT_KEY, JSON.stringify({
            version: 2,
            files: { 'modules/a.yaml': { updated_at: '2', modules: { alpha: { name: 'alpha', code: NEW_CODE } } } },
        }));
        const { initializeModules } = await loadRegistry();
        const hass = createHass();
        hassRoot.hass = hass;

        const updated = jest.fn();
        global.document.addEventListener('yaml-modules-updated', updated);

        await initializeModules({});

        expect(await pollUntil(() => hass.callWS.mock.calls.some((c) => c[0].type === 'bubble_card_tools/list_modules'))).toBe(true);
        // updated_at matches: no re-read, no cache rewrite, no refresh event.
        await new Promise((resolve) => setTimeout(resolve, 100));
        expect(hass.callWS.mock.calls.some((c) => c[0].type === 'bubble_card_tools/read_all_modules')).toBe(false);
        expect(updated).not.toHaveBeenCalled();
    });

    test('cold boot without hass at first call still loads from the provider', async () => {
        const { initializeModules, yamlKeysMap, moduleSourceMap } = await loadRegistry();
        const hass = createHass();

        setTimeout(() => { hassRoot.hass = hass; }, 200);

        // Without the wait this resolved through the legacy fallback with zero
        // modules, and modulesInitialized locked that in for the session.
        const served = await initializeModules({});
        expect(served.alpha.code).toBe(NEW_CODE);
        expect(yamlKeysMap.get('alpha').code).toBe(NEW_CODE);
        expect(moduleSourceMap.get('alpha')).toBe('file');
    });
});

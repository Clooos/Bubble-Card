import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// Machine translation reaches outside the user's network, so the tests that
// matter are the ones proving no engine is reachable while the switch is off.

const STORAGE_KEY = 'bubble-card-module-translation';
const BETA_KEY = 'bubble-card-store-translate';

function createStorage(initial = {}) {
    const values = new Map(Object.entries(initial));
    return {
        values,
        getItem: (k) => (values.has(k) ? values.get(k) : null),
        setItem: (k, v) => { values.set(k, String(v)); },
        removeItem: (k) => { values.delete(k); },
    };
}

// The flag is memoised per module instance, so every test loads a fresh one
async function loadTranslate(storage = createStorage()) {
    jest.resetModules();
    globalThis.localStorage = storage;
    jest.unstable_mockModule('../tools/localize.js', () => ({
        default: () => (key) => key,
        isEditorEnglishForced: () => false,
    }));
    const module = await import('./translate.js');
    return { module, storage };
}

const hass = { locale: { language: 'fr' } };

describe('module translation switch', () => {
    beforeEach(() => {
        globalThis.fetch = jest.fn(async () => { throw new Error('the network must not be reached'); });
        delete globalThis.Translator;
    });

    test('is off when nothing was ever stored', async () => {
        const { module } = await loadTranslate();

        expect(module.isModuleTranslationEnabled()).toBe(false);
    });

    test('stays off on a stored opt-out', async () => {
        const { module } = await loadTranslate(createStorage({ [STORAGE_KEY]: '0' }));

        expect(module.isModuleTranslationEnabled()).toBe(false);
    });

    // The beta key switched a display preference on a feature that was already
    // running, so holding it is not anyone having agreed to anything
    test('ignores the beta key entirely', async () => {
        const { module } = await loadTranslate(createStorage({ [BETA_KEY]: '1' }));

        expect(module.isModuleTranslationEnabled()).toBe(false);
    });

    test('leaves the beta key alone rather than rewriting it', async () => {
        const { module, storage } = await loadTranslate(createStorage({ [BETA_KEY]: '1' }));

        module.setModuleTranslationEnabled(true);

        expect(storage.getItem(STORAGE_KEY)).toBe('1');
        expect(storage.getItem(BETA_KEY)).toBe('1');
    });

    test('is on only on a stored opt-in', async () => {
        const { module } = await loadTranslate(createStorage({ [STORAGE_KEY]: '1' }));

        expect(module.isModuleTranslationEnabled()).toBe(true);
    });

    test('remembers an opt-in', async () => {
        const { module, storage } = await loadTranslate();

        module.setModuleTranslationEnabled(true);

        expect(storage.getItem(STORAGE_KEY)).toBe('1');
        expect(module.isModuleTranslationEnabled()).toBe(true);
    });

    test('remembers being turned back off', async () => {
        const { module, storage } = await loadTranslate(createStorage({ [STORAGE_KEY]: '1' }));

        module.setModuleTranslationEnabled(false);

        expect(storage.getItem(STORAGE_KEY)).toBe('0');
        expect(module.isModuleTranslationEnabled()).toBe(false);
    });

    test('reads as off when storage cannot be reached at all', async () => {
        const { module } = await loadTranslate({
            getItem: () => { throw new Error('blocked'); },
            setItem: () => { throw new Error('blocked'); },
        });

        expect(module.isModuleTranslationEnabled()).toBe(false);
    });
});

describe('no engine is reachable while translation is off', () => {
    beforeEach(() => {
        globalThis.fetch = jest.fn(async () => { throw new Error('the network must not be reached'); });
        delete globalThis.Translator;
    });

    test('translateText gives nothing back and sends nothing', async () => {
        const { module } = await loadTranslate();

        await expect(module.translateText('Some module description', hass)).resolves.toBeNull();
        expect(globalThis.fetch).not.toHaveBeenCalled();
    });

    test('translateUiText hands the original text straight back', async () => {
        const { module } = await loadTranslate();

        expect(module.translateUiText('Background color', hass, () => {})).toBe('Background color');
        expect(globalThis.fetch).not.toHaveBeenCalled();
    });

    test('translateModuleSchema hands the very same schema back', async () => {
        const { module } = await loadTranslate();
        const schema = [{ name: 'size', label: 'Size' }];

        expect(module.translateModuleSchema(schema, hass, () => {})).toBe(schema);
        expect(globalThis.fetch).not.toHaveBeenCalled();
    });

    // The on-device engine costs a model download the first time, so it sits
    // behind the same switch: the user answers the question once
    test('the on-device engine is never even armed', async () => {
        const { module } = await loadTranslate();
        globalThis.Translator = { availability: jest.fn(), create: jest.fn() };
        globalThis.window = { addEventListener: jest.fn(), removeEventListener: jest.fn() };

        module.warmupBrowserTranslator(hass);

        expect(globalThis.window.addEventListener).not.toHaveBeenCalled();
        expect(globalThis.Translator.availability).not.toHaveBeenCalled();
    });

    // A card editor holding modules translates without the Module Store ever
    // being opened, which is how the old per-panel flag lost the user's answer
    test('the answer holds without the Module Store ever being opened', async () => {
        const { module } = await loadTranslate(createStorage({ [BETA_KEY]: '1' }));

        expect(module.translateUiText('Some label', hass, () => {})).toBe('Some label');
        expect(module.translateModuleSchema([{ label: 'A' }], hass, () => {})).toEqual([{ label: 'A' }]);
        await expect(module.translateText('A description', hass)).resolves.toBeNull();
        expect(globalThis.fetch).not.toHaveBeenCalled();
    });
});

describe('an opted-in user still reaches the engines', () => {
    beforeEach(() => {
        delete globalThis.Translator;
    });

    // Warming up is armed on the first interaction, so the model download never
    // lands in the middle of opening the editor
    test('the on-device engine is armed once translation is on', async () => {
        const { module } = await loadTranslate(createStorage({ [STORAGE_KEY]: '1' }));
        globalThis.Translator = {
            availability: jest.fn(async () => 'available'),
            create: jest.fn(async () => ({ translate: async (text) => text })),
        };
        const listeners = [];
        globalThis.window = {
            addEventListener: jest.fn((type, handler) => listeners.push([type, handler])),
            removeEventListener: jest.fn(),
        };

        module.warmupBrowserTranslator(hass);

        expect(listeners.map(([type]) => type)).toEqual(['pointerdown']);

        listeners[0][1]();

        expect(globalThis.Translator.availability).toHaveBeenCalled();
    });

    test('an English reader is left alone even after opting in', async () => {
        const { module } = await loadTranslate(createStorage({ [STORAGE_KEY]: '1' }));
        globalThis.fetch = jest.fn(async () => { throw new Error('the network must not be reached'); });

        expect(module.translateUiText('Size', { locale: { language: 'en' } }, () => {})).toBe('Size');
        expect(globalThis.fetch).not.toHaveBeenCalled();
    });
});

import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// The note is the only place a reader is ever told that module text leaves
// their network, so what it says, and to whom, is the whole point of it.

const TRANSLATE_KEY = 'bubble-card-module-translation';
const BETA_KEY = 'bubble-card-store-translate';
const NOTICE_KEY = 'bubble-card-translate-notice';

function createStorage(initial = {}) {
    const values = new Map(Object.entries(initial));
    return {
        values,
        getItem: (k) => (values.has(k) ? values.get(k) : null),
        setItem: (k, v) => { values.set(k, String(v)); },
        removeItem: (k) => { values.delete(k); },
    };
}

// The rendered tree is flattened to the translation keys and the handlers it
// carries, which is everything the note is made of
function flatten(node, out = { keys: [], handlers: [] }) {
    if (node === null || node === undefined || node === '') return out;
    if (typeof node === 'string') {
        if (node.startsWith('editor.')) out.keys.push(node);
        return out;
    }
    if (typeof node === 'function') { out.handlers.push(node); return out; }
    if (Array.isArray(node)) { node.forEach((child) => flatten(child, out)); return out; }
    if (node.values) { node.values.forEach((child) => flatten(child, out)); return out; }
    return out;
}

async function loadNote(storage = createStorage()) {
    jest.resetModules();
    globalThis.localStorage = storage;
    globalThis.window = { addEventListener: () => {}, removeEventListener: () => {} };
    jest.unstable_mockModule('lit', () => ({
        html: (strings, ...values) => ({ strings, values }),
    }));
    jest.unstable_mockModule('../tools/localize.js', () => ({
        default: () => (key) => key,
        isEditorEnglishForced: () => false,
    }));
    const module = await import('./translation-note.js');
    return { module, storage };
}

const context = (language = 'fr') => ({
    hass: { locale: { language } },
    requestUpdate: jest.fn(),
});

describe('the machine translation note', () => {
    beforeEach(() => { delete globalThis.Translator; });

    test('offers to turn translation on when it is off', async () => {
        const { module } = await loadNote();

        const { keys } = flatten(module.renderTranslationOffer(context()));

        expect(keys).toContain('editor.store.translate_offer_title');
        expect(keys).toContain('editor.store.translate_offer_body');
        expect(keys).toContain('editor.common.enable');
        expect(keys).not.toContain('editor.common.disable');
    });

    // The beta turned translation on by default and the badge that switched it
    // was a display preference, so a beta reader was never told their module
    // text leaves their network. They start from off and get the same note.
    test('asks a beta reader the same question, from off', async () => {
        const { module } = await loadNote(createStorage({ [BETA_KEY]: '1' }));

        const { keys } = flatten(module.renderTranslationOffer(context()));

        expect(keys).toContain('editor.store.translate_offer_body');
        expect(keys).toContain('editor.common.enable');
    });

    test('steps aside once translation is on', async () => {
        const { module } = await loadNote(createStorage({ [TRANSLATE_KEY]: '1' }));

        expect(module.renderTranslationOffer(context())).toBe('');
    });

    test('says nothing to a reader whose editor is already English', async () => {
        const { module } = await loadNote();

        expect(module.renderTranslationOffer(context('en'))).toBe('');
        expect(module.renderTranslationOffer(context('en-GB'))).toBe('');
    });

    test('never comes back once it was sent away', async () => {
        const { module } = await loadNote(createStorage({ [NOTICE_KEY]: '1' }));

        expect(module.renderTranslationOffer(context())).toBe('');
    });

    test('turns translation on and steps aside when the offer is taken', async () => {
        const { module, storage } = await loadNote();
        const ctx = context();

        const { handlers } = flatten(module.renderTranslationOffer(ctx));
        handlers[0]({ preventDefault() {} });

        expect(storage.getItem(TRANSLATE_KEY)).toBe('1');
        expect(storage.getItem(NOTICE_KEY)).toBe('1');
        expect(module.renderTranslationOffer(ctx)).toBe('');
    });

    // Sending the note away must never be read as an answer to the question
    test('leaves translation off when only sent away', async () => {
        const { module, storage } = await loadNote();
        const ctx = context();

        const { handlers } = flatten(module.renderTranslationOffer(ctx));
        handlers[1]({ preventDefault() {} });

        expect(storage.getItem(TRANSLATE_KEY)).toBeNull();
        expect(storage.getItem(NOTICE_KEY)).toBe('1');
        expect(module.renderTranslationOffer(ctx)).toBe('');
    });

    test('reads the throttled hass the editor renders from', async () => {
        const { module } = await loadNote();

        const rendered = module.renderTranslationOffer({
            _hassRender: { locale: { language: 'de' } },
            hass: undefined,
            requestUpdate: jest.fn(),
        });

        expect(flatten(rendered).keys).toContain('editor.store.translate_offer_title');
    });
});

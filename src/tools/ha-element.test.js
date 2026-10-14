import { afterEach, describe, expect, jest, test } from '@jest/globals';

// A small stand-in for the document. It records which way each element is made.
// The module keeps one template per tag, so each test loads a fresh copy of it.
function fakeDocument() {
    const doc = {
        createElement: jest.fn((tag) => {
            if (tag !== 'template') return { tag, by: 'createElement' };
            const content = { markup: '' };
            return {
                content,
                set innerHTML(markup) { content.markup = markup; },
                get innerHTML() { return content.markup; },
            };
        }),
        importNode: jest.fn((content, deep) => ({ firstElementChild: { markup: content.markup, deep, by: 'parser' } })),
    };
    return doc;
}

async function load(doc) {
    global.document = doc;
    return import(`./ha-element.js?case=${Math.random()}`);
}

afterEach(() => { delete global.document; });

describe('createHaElement (#2663)', () => {
    test('the element is made by the parser, never by createElement', async () => {
        const doc = fakeDocument();
        const { createHaElement } = await load(doc);
        const element = createHaElement('ha-dropdown-item');
        expect(element).toEqual({ markup: '<ha-dropdown-item></ha-dropdown-item>', deep: true, by: 'parser' });
        expect(doc.createElement).not.toHaveBeenCalledWith('ha-dropdown-item');
    });

    test('a long list parses its template once', async () => {
        const doc = fakeDocument();
        const { createHaElement } = await load(doc);
        for (let i = 0; i < 50; i++) createHaElement('ha-dropdown-item');
        expect(doc.createElement.mock.calls.filter(([tag]) => tag === 'template')).toHaveLength(1);
        expect(doc.importNode).toHaveBeenCalledTimes(50);
    });

    test('each tag keeps its own template', async () => {
        const doc = fakeDocument();
        const { createHaElement } = await load(doc);
        expect(createHaElement('ha-button').markup).toBe('<ha-button></ha-button>');
        expect(createHaElement('mwc-list-item').markup).toBe('<mwc-list-item></mwc-list-item>');
        expect(createHaElement('ha-button').markup).toBe('<ha-button></ha-button>');
        expect(doc.createElement.mock.calls.filter(([tag]) => tag === 'template')).toHaveLength(2);
    });
});

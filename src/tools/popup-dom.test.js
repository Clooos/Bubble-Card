import { describe, expect, test } from '@jest/globals';

const { isInsidePopupShell } = await import('./popup-dom.js');

// Minimal composed-tree stubs: an element knows the ancestor selector it
// matches, and a shadow root exposes its host.
function makeElement(matches = [], rootNode = null) {
    const element = {
        closest: (selector) => (matches.includes(selector) ? element : null),
        getRootNode: () => rootNode ?? element,
    };
    return element;
}

function makeShadowRoot(host) {
    const root = {};
    root.host = host;
    return root;
}

describe('isInsidePopupShell', () => {
    test('detects a card rendered in the pop-up light DOM', () => {
        expect(isInsidePopupShell(makeElement(['.bubble-pop-up']))).toBe(true);
    });

    test('detects a card nested in a stack shadow root inside a pop-up', () => {
        const stackHost = makeElement(['.bubble-pop-up']);
        const card = makeElement([], makeShadowRoot(stackHost));

        expect(isInsidePopupShell(card)).toBe(true);
    });

    test('rejects a dashboard card, shadow roots included', () => {
        const stackHost = makeElement([]);
        const card = makeElement([], makeShadowRoot(stackHost));

        expect(isInsidePopupShell(card)).toBe(false);
        expect(isInsidePopupShell(makeElement([]))).toBe(false);
    });

    test('tolerates a missing element', () => {
        expect(isInsidePopupShell(null)).toBe(false);
        expect(isInsidePopupShell(undefined)).toBe(false);
    });
});

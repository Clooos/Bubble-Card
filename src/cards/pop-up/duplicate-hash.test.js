import { describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('../../tools/localize.js', () => ({
    default: () => (key) => key,
    tGlobal: (key) => key,
    ensureEditorTranslations: jest.fn(),
}));

// The bridge talks to the page directly, so give the node environment the
// handful of globals it reads.
global.window = { addEventListener: () => {}, dispatchEvent: () => true, history: {} };
global.location = { pathname: '/lovelace/0' };
global.localStorage = {
    _v: {},
    getItem(key) { return this._v[key] ?? null; },
    setItem(key, value) { this._v[key] = String(value); },
    removeItem(key) { delete this._v[key]; },
};
global.Event = class { constructor(type) { this.type = type; } };
global.document = { addEventListener: () => {}, querySelector: () => null };

const { isHashOnCurrentPage, registerPopUpHash } = await import('./navigation-picker-bridge.js');

const connectedCard = () => ({ isConnected: true });

describe('duplicate hash detection', () => {
    test('a lone pop-up is not a duplicate of itself', () => {
        registerPopUpHash('#kitchen', { name: 'Kitchen', element: connectedCard() });

        expect(isHashOnCurrentPage('#kitchen', '#kitchen')).toBe(false);
    });

    test('two pop-ups sharing a hash on the same view are a duplicate', () => {
        registerPopUpHash('#office', { name: 'Office', element: connectedCard() });
        registerPopUpHash('#office', { name: 'Office', element: connectedCard() });

        expect(isHashOnCurrentPage('#office', '#office')).toBe(true);
    });

    test('the same hash on another view is not a duplicate', () => {
        registerPopUpHash('#garden', { name: 'Garden', element: connectedCard() });

        location.pathname = '/lovelace/other';
        expect(isHashOnCurrentPage('#garden', '#garden')).toBe(false);
        location.pathname = '/lovelace/0';
    });

    // Only a card can hold a hash. A registration with no owner, or one whose
    // owner is gone, would otherwise keep the hash taken for the rest of the
    // page session and make the next pop-up look like a duplicate.
    test('a hash released by its card is free again', () => {
        const card = connectedCard();
        registerPopUpHash('#laundry', { name: 'Laundry', element: card });
        card.isConnected = false;

        expect(isHashOnCurrentPage('#laundry', undefined)).toBe(false);
    });

    test('a hash registered in edit mode is free once the card is gone', () => {
        registerPopUpHash('#attic', { name: 'Attic', element: null });

        expect(isHashOnCurrentPage('#attic', undefined)).toBe(false);
    });
});

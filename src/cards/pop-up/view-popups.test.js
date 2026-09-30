import { beforeEach, describe, expect, jest, test } from '@jest/globals';

let currentView = null;
jest.unstable_mockModule('../../tools/lovelace-view.js', () => ({
    getCurrentLovelaceViewConfig: jest.fn(() => {
        if (currentView instanceof Error) throw currentView;
        return currentView;
    }),
}));

const { collectPopUps, getCurrentViewPopUps, normalizePopUpHash } = await import('./view-popups.js');

const popUp = (hash, extra = {}) => ({ type: 'custom:bubble-card', card_type: 'pop-up', hash, ...extra });
const button = { type: 'custom:bubble-card', card_type: 'button', entity: 'light.kitchen' };

beforeEach(() => {
    currentView = null;
});

describe('normalizePopUpHash', () => {
    test('adds the # a hash may be written without, and refuses paths', () => {
        expect(normalizePopUpHash('kitchen')).toBe('#kitchen');
        expect(normalizePopUpHash(' #kitchen ')).toBe('#kitchen');
        expect(normalizePopUpHash('/lovelace/kitchen')).toBeNull();
        expect(normalizePopUpHash('')).toBeNull();
        expect(normalizePopUpHash(undefined)).toBeNull();
    });
});

describe('collectPopUps', () => {
    test('finds a pop-up whatever holds it, and tells legacy from standalone', () => {
        const view = {
            cards: [
                { type: 'vertical-stack', cards: [popUp('#in-stack', { name: 'Stack' }), button] },
                { type: 'grid', columns: 3, cards: [popUp('in-grid', { icon: 'mdi:sofa' }), button] },
                { type: 'conditional', conditions: [], card: popUp('#behind-condition', { cards: [] }) },
                popUp('#standalone', { cards: [popUp('#nested', { cards: [] })] }),
            ],
        };

        expect([...collectPopUps(view).values()]).toEqual([
            { hash: '#in-stack', name: 'Stack', icon: null, legacy: true },
            { hash: '#in-grid', name: null, icon: 'mdi:sofa', legacy: true },
            { hash: '#behind-condition', name: null, icon: null, legacy: false },
            { hash: '#standalone', name: null, icon: null, legacy: false },
            { hash: '#nested', name: null, icon: null, legacy: false },
        ]);
    });

    test('names nothing with a template, the card renders it once on the page', () => {
        const view = { cards: [popUp('#den', { name: "{{ states('sensor.den') }}", icon: '{% if true %}mdi:sofa{% endif %}' })] };

        expect([...collectPopUps(view).values()]).toEqual([{ hash: '#den', name: null, icon: null, legacy: true }]);
    });

    test('keeps the first pop-up claiming a hash, and skips a pop-up without one', () => {
        const view = { cards: [popUp('#room', { name: 'First' }), popUp('room', { name: 'Second' }), popUp(undefined)] };

        expect([...collectPopUps(view).values()]).toEqual([{ hash: '#room', name: 'First', icon: null, legacy: true }]);
    });
});

describe('getCurrentViewPopUps', () => {
    test('reads the view on screen once, until Home Assistant hands over a new one', () => {
        currentView = { cards: [popUp('#kitchen', { cards: [] })] };
        const first = getCurrentViewPopUps();

        expect(getCurrentViewPopUps()).toBe(first);

        // A saved dashboard is a new config object, and the list follows it.
        currentView = { cards: [popUp('#kitchen', { cards: [] }), popUp('#bedroom')] };
        expect(getCurrentViewPopUps().map((entry) => entry.hash)).toEqual(['#kitchen', '#bedroom']);
    });

    test('lists nothing outside a dashboard or when the shell cannot be read', () => {
        expect(getCurrentViewPopUps()).toEqual([]);

        currentView = new Error('no shell');
        expect(getCurrentViewPopUps()).toEqual([]);
    });
});

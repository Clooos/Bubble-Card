import { afterEach, beforeAll, beforeEach, describe, expect, jest, test } from '@jest/globals';

let viewPopUps = [];
jest.unstable_mockModule('./view-popups.js', () => ({
    getCurrentViewPopUps: jest.fn(() => viewPopUps),
    normalizePopUpHash: (hash) => {
        if (typeof hash !== 'string') return null;
        const trimmed = hash.trim();
        if (!trimmed || trimmed.startsWith('/')) return null;
        return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
    },
}));
jest.unstable_mockModule('../../tools/localize.js', () => ({
    tGlobal: jest.fn((key) => key),
}));

// What the bridge needs of Home Assistant's navigation picker, nothing more.
class FakeNavigationPicker {
    async _loadNavigationItems() {
        this._navigationGroups = {
            related: [],
            dashboards: [],
            views: [{ id: '/lovelace/v', primary: 'View' }],
            other_routes: [],
        };
        this._navigationItems = Object.values(this._navigationGroups).flat();
    }

    updated() {}

    _getItems() {
        return this._navigationItems;
    }

    _sortBySortingLabel(a, b) {
        return a.sorting_label.localeCompare(b.sorting_label);
    }
}

globalThis.window = {
    addEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
};
globalThis.location = { pathname: '/lovelace/v' };
globalThis.document = { querySelectorAll: jest.fn(() => []) };
globalThis.customElements = {
    get: jest.fn((name) => (name === 'ha-navigation-picker' ? FakeNavigationPicker : undefined)),
    whenDefined: jest.fn(() => Promise.resolve()),
};

const { initPopUpHashNavigationBridge, registerPopUpHash } = await import('./navigation-picker-bridge.js');

const listed = (picker) => picker.__bubblePopUpNavigationItems.map((item) => item.id);

const openPicker = async () => {
    const picker = new FakeNavigationPicker();
    await picker._loadNavigationItems();
    return picker;
};

// A card or a preview on the page, taken off it after each test.
const onPage = [];
const render = (hash, meta = {}) => {
    const element = { isConnected: true };
    onPage.push(element);
    registerPopUpHash(hash, { ...meta, element });
    return element;
};

beforeAll(() => {
    initPopUpHashNavigationBridge();
});

beforeEach(() => {
    viewPopUps = [
        { hash: '#stack-legacy', name: 'In a vertical-stack', icon: 'mdi:sofa', legacy: true },
        { hash: '#grid-legacy', name: 'In a grid', icon: 'mdi:sofa', legacy: true },
    ];
});

afterEach(() => {
    onPage.splice(0).forEach((element) => { element.isConnected = false; });
    location.pathname = '/lovelace/v';
});

describe('Bubble Card pop-ups in the navigation picker', () => {
    // A closed legacy pop-up takes itself out of the page, so it never
    // registers, and the picker used to leave it out.
    test('lists every pop-up of the view as configured, rendered or not', async () => {
        const picker = await openPicker();

        expect(listed(picker)).toEqual(['#grid-legacy', '#stack-legacy']);
        expect(picker.__bubblePopUpNavigationItems[0]).toMatchObject({ primary: 'In a grid', secondary: '#grid-legacy', icon: 'mdi:sofa' });
    });

    test('follows the view as it changes, without reloading the page', async () => {
        const picker = await openPicker();

        viewPopUps = [{ hash: '#kitchen', name: 'Kitchen', icon: null, legacy: false }];
        picker.updated(new Map());

        expect(listed(picker)).toEqual(['#kitchen']);
    });

    test('adds a pop-up only the editor preview has, until the dialog closes', async () => {
        const preview = render('#new-one', { name: 'New one', preview: true });
        const picker = await openPicker();

        expect(listed(picker)).toEqual(['#grid-legacy', '#new-one', '#stack-legacy']);

        preview.isConnected = false;
        picker.updated(new Map());

        expect(listed(picker)).toEqual(['#grid-legacy', '#stack-legacy']);
    });

    // The hash field sends every keystroke to the preview.
    test('keeps only the last hash a preview was given', async () => {
        const preview = { isConnected: true };
        onPage.push(preview);
        ['#k', '#ki', '#kitchen'].forEach((hash) => registerPopUpHash(hash, { element: preview, preview: true }));

        const picker = await openPicker();

        expect(listed(picker)).toEqual(['#grid-legacy', '#kitchen', '#stack-legacy']);

        registerPopUpHash('', { element: preview, preview: true });
        picker.updated(new Map());

        expect(listed(picker)).toEqual(['#grid-legacy', '#stack-legacy']);
    });

    test('names a pop-up with what its card renders, a template in the config names nothing', async () => {
        viewPopUps = [{ hash: '#room', name: null, icon: null, legacy: false }];
        let picker = await openPicker();

        expect(picker.__bubblePopUpNavigationItems[0]).toMatchObject({ primary: '#room', icon: 'mdi:pound' });

        render('#room', { name: 'Living room', icon: 'mdi:sofa' });
        picker = await openPicker();

        expect(picker.__bubblePopUpNavigationItems[0]).toMatchObject({ primary: 'Living room', secondary: '#room', icon: 'mdi:sofa' });
    });

    test('leaves out a card rendered for another view', async () => {
        location.pathname = '/lovelace/other';
        render('#elsewhere');
        location.pathname = '/lovelace/v';

        const picker = await openPicker();

        expect(listed(picker)).toEqual(['#grid-legacy', '#stack-legacy']);
    });

    test('keeps the pop-ups in their own section and in search results', async () => {
        const picker = await openPicker();

        expect(picker._getItems('', 'bubble_popups').map((item) => item.id)).toEqual(['#grid-legacy', '#stack-legacy']);
        expect(picker._getItems('stack', 'bubble_popups').map((item) => item.id)).toEqual(['#stack-legacy']);
    });
});

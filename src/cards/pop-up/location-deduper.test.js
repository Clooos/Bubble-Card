import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// The rest of the pop-up suite disables this listener on purpose
// (window.__bubbleLocationDeduperAdded = true before the import), so nothing
// covered it and issue #2563 lived here undisturbed. This file is the opposite:
// it imports helpers.js with the deduper enabled and drives it directly.

function updateMockLocation(locationObject, url) {
    const [base, hash] = String(url).split('#');
    locationObject.href = hash ? `${base}#${hash}` : base;
    locationObject.hash = hash ? `#${hash}` : '';
}

const mockWindow = new EventTarget();
const locationObject = { href: 'http://localhost/lovelace/test', hash: '' };
const historyObject = {
    pushState: jest.fn((state, title, url) => updateMockLocation(locationObject, url)),
    replaceState: jest.fn((state, title, url) => updateMockLocation(locationObject, url)),
    back: jest.fn(),
};
Object.assign(mockWindow, { location: locationObject, history: historyObject });

global.window = mockWindow;
global.location = locationObject;
global.history = historyObject;
global.document = { querySelectorAll: jest.fn(() => []), addEventListener: jest.fn() };
global.localStorage = { getItem: jest.fn(() => null), setItem: jest.fn(), removeItem: jest.fn() };
window.localStorage = global.localStorage;
global.navigator = { hardwareConcurrency: 2, deviceMemory: 2 };

// Only the dialog listener is disabled, the deduper is left to register.
window.__bubbleDialogListenerAdded = true;

// The mock factories below are the ones the main pop-up suite uses, so this
// file loads helpers.js exactly the same way. Only the deduper differs: it is
// left enabled here.
const showBackdrop = jest.fn();
const hideBackdrop = jest.fn();
const releaseBackdropContext = jest.fn();
const callAction = jest.fn();
const toggleBodyScroll = jest.fn();
const handlePopUpCards = jest.fn();
const setStandalonePopUpCardsActive = jest.fn();
const buildStandalonePopUpCardsProgressively = jest.fn();
const suspendStandalonePopUpCardsProgressively = jest.fn();
const settleStandaloneCardWork = jest.fn();
const resumeStandaloneCardHydration = jest.fn();
const registerPopupOpenActivityProbe = jest.fn();
const appendLegacyPopup = jest.fn();
const displayLegacyPopupContent = jest.fn();
const hideLegacyPopupContent = jest.fn();

jest.unstable_mockModule('./backdrop.js', () => ({
    getBackdrop: jest.fn(() => ({
        showBackdrop,
        hideBackdrop,
    })),
    hideExistingBackdrop: hideBackdrop,
    releaseBackdropContext,
}));

jest.unstable_mockModule('../../tools/tap-actions.js', () => ({
    callAction,
}));

jest.unstable_mockModule('../../tools/utils.js', () => ({
    toggleBodyScroll,
}));

jest.unstable_mockModule('./cards/index.js', () => ({
    handlePopUpCards,
    setStandalonePopUpCardsActive,
    buildStandalonePopUpCardsProgressively,
    suspendStandalonePopUpCardsProgressively,
    settleStandaloneCardWork,
    resumeStandaloneCardHydration,
    registerPopupOpenActivityProbe,
}));

// Budgets, holds and gate deadlines use the monotonic clock in production;
// tests simulate cost with jest.setSystemTime, which only moves Date.now.
jest.unstable_mockModule('../../tools/monotonic-time.js', () => ({
    monotonicNow: () => Date.now(),
}));

jest.unstable_mockModule('./legacy.js', () => ({
    appendLegacyPopup,
    displayLegacyPopupContent,
    hideLegacyPopupContent,
}));

const schedulePopupCardModulePreload = jest.fn();
jest.unstable_mockModule('./cards/preload.js', () => ({
    schedulePopupCardModulePreload,
}));

const startContentInsetSync = jest.fn();
jest.unstable_mockModule('../../tools/content-inset.js', () => ({
    startContentInsetSync,
}));

jest.unstable_mockModule('./index.js', () => ({
    invalidateWakeSyncCache: jest.fn(),
}));

jest.unstable_mockModule('./styles.css', () => ({
    default: '',
}));

await import('./helpers.js');

const VIEW = 'http://localhost/lovelace/test';

function locationChanged(detail) {
    const event = new Event('location-changed');
    if (detail !== undefined) event.detail = detail;
    window.dispatchEvent(event);
}

/** The open half: a pushed entry carrying the hash, as navigate() and addHash() both do. */
function openPopup(hash, { replace = false } = {}) {
    if (replace) history.replaceState(null, '', `${VIEW}${hash}`);
    else history.pushState(null, '', `${VIEW}${hash}`);
    locationChanged({ replace });
}

/** The close half: the hash is replaced away, never popped, then the event fires. */
function closePopup() {
    history.replaceState(null, '', VIEW);
    locationChanged({ source: 'bubble-popup-remove-hash' });
}

describe('the location deduper, and the orphaned history entry of #2563', () => {
    beforeEach(() => {
        historyObject.back.mockClear();
        updateMockLocation(locationObject, VIEW);
    });

    test('takes back the entry the open pushed, however long the pop-up stayed open', () => {
        openPopup('#salon');
        closePopup();

        // The old guard only did this within 1500 ms of the push, so every
        // pop-up held longer than that left its entry on the stack and the back
        // button needed one extra press per pop-up opened.
        expect(historyObject.back).toHaveBeenCalledTimes(1);
    });

    test('takes it back on a short open too, which is all the old guard ever covered', () => {
        openPopup('#salon');
        closePopup();

        expect(historyObject.back).toHaveBeenCalledTimes(1);
    });

    test('leaves the stack alone when the hash replaced the entry instead of pushing one', () => {
        // Nothing of ours is on the stack, so going back would leave the view.
        openPopup('#salon', { replace: true });
        closePopup();

        expect(historyObject.back).not.toHaveBeenCalled();
    });

    test('leaves the stack alone for a page loaded straight at a hash', () => {
        // A direct load fires no location-changed at all, so the deduper never
        // armed and must not assume an entry it did not see pushed.
        updateMockLocation(locationObject, `${VIEW}#salon`);
        closePopup();

        expect(historyObject.back).not.toHaveBeenCalled();
    });

    test('leaves the stack alone when one pop-up replaced another', () => {
        openPopup('#salon');
        openPopup('#cuisine');
        closePopup();

        // The second open came from a URL that already had a hash, so the entry
        // below is another pop-up and not the bare view.
        expect(historyObject.back).not.toHaveBeenCalled();
    });

    test('ignores a no-hash change that is not the pop-up closing', () => {
        openPopup('#salon');
        history.pushState(null, '', 'http://localhost/lovelace/other');
        locationChanged({});

        expect(historyObject.back).not.toHaveBeenCalled();
    });

    test('does not answer the no-hash step its own back() produces', () => {
        openPopup('#salon');
        closePopup();
        expect(historyObject.back).toHaveBeenCalledTimes(1);

        // history.back() lands on the hashless entry and fires again. Answering
        // that one would walk the user off the dashboard.
        locationChanged({ source: 'bubble-popup-remove-hash' });
        expect(historyObject.back).toHaveBeenCalledTimes(1);
    });

    test('takes back each of several pop-ups opened one after another', () => {
        for (const hash of ['#salon', '#cuisine', '#jardin']) {
            openPopup(hash);
            closePopup();
        }

        expect(historyObject.back).toHaveBeenCalledTimes(3);
    });
});

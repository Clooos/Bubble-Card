import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// The rest of the pop-up suite disables this listener on purpose
// (window.__bubbleLocationDeduperAdded = true before the import), so nothing
// covered it and issue #2563 lived here undisturbed. This file is the opposite:
// it imports helpers.js with the deduper enabled and drives it directly.

function updateMockLocation(locationObject, url) {
    const [base, hash] = String(url).split('#');
    locationObject.href = hash ? `${base}#${hash}` : base;
    locationObject.hash = hash ? `#${hash}` : '';
    locationObject.pathname = new URL(base).pathname;
}

const mockWindow = new EventTarget();
const locationObject = { href: 'http://localhost/lovelace/test', hash: '', pathname: '/lovelace/test' };
const historyObject = {
    // A pushed entry starts with the state it was given. A replace keeps the
    // current one here, the tests set what the real call would have kept.
    pushState: jest.fn((state, title, url) => {
        historyObject.state = state;
        updateMockLocation(locationObject, url);
    }),
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
const noteFoldCalibration = jest.fn();
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
    // Real implementation: the point of these tests is what actually lands in
    // the history entry, so mocking it away would hide exactly what they check.
    keptHistoryState: () => (history.state?.root ? { root: true } : null),
}));

jest.unstable_mockModule('./cards/index.js', () => ({
    handlePopUpCards,
    setStandalonePopUpCardsActive,
    buildStandalonePopUpCardsProgressively,
    suspendStandalonePopUpCardsProgressively,
    settleStandaloneCardWork,
    resumeStandaloneCardHydration,
    registerPopupOpenActivityProbe,
    noteFoldCalibration,
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

const { BUBBLE_URL_EVENT } = await import('./helpers.js');

const VIEW = 'http://localhost/lovelace/test';

function locationChanged(detail) {
    const event = new Event('location-changed');
    if (detail !== undefined) event.detail = detail;
    window.dispatchEvent(event);
}

/**
 * The open half: a pushed entry carrying the hash, as navigate() and addHash()
 * both do. Home Assistant's navigate() also writes the page it came from.
 */
function openPopup(hash, { replace = false, from } = {}) {
    const state = from === undefined ? null : { from };
    if (replace) history.replaceState(state, '', `${VIEW}${hash}`);
    else history.pushState(state, '', `${VIEW}${hash}`);
    locationChanged({ replace });
}

/** The close half: the hash is replaced away, never popped, then the event fires. */
function closePopup() {
    history.replaceState(null, '', VIEW);
    locationChanged({ source: 'bubble-popup-remove-hash' });
}

/** A re-tap on the button of an open pop-up: same hash, nothing written. */
function reTapSameHash() {
    const event = new Event(BUBBLE_URL_EVENT);
    event.detail = { source: 'bubble-popup-add-hash', sameHash: true, replace: false };
    window.dispatchEvent(event);
}

describe('the location deduper, and the orphaned history entry of #2563', () => {
    beforeEach(() => {
        historyObject.back.mockClear();
        updateMockLocation(locationObject, VIEW);
    });

    // #2606: a re-tap does not move the URL, so it stopped announcing itself as
    // a navigation and travels on Bubble Card's own event type. The deduper has
    // to keep hearing it, because it is what tells it the entry on the stack
    // belongs to the first open and not to the close about to happen. Registered
    // for the private type too, this behaves exactly as it did before.
    test('still hears a re-tap that no longer announces itself as a navigation', () => {
        openPopup('#salon');
        reTapSameHash();
        closePopup();

        expect(historyObject.back).not.toHaveBeenCalled();
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

// Taking back the entry the open pushed is only safe while that entry is still
// the current one. A Home Assistant dialog opened from inside the pop-up pushes
// its own entry on top, and a back from there reclaims HA's rather than ours.
describe('the deduper leaves an entry that is not its own alone', () => {
    beforeEach(() => {
        historyObject.back.mockClear();
        historyObject.state = null;
        updateMockLocation(locationObject, VIEW);
    });

    test('does not go back when a dialog pushed its entry over ours', () => {
        openPopup('#salon');
        // The more-info dialog opens from a card inside the pop-up and marks
        // the entry it pushed.
        historyObject.state = { dialog: 'ha-more-info-dialog' };
        closePopup();

        expect(historyObject.back).not.toHaveBeenCalled();
    });

    test('does not go back on the entry a dialog is about to open from', () => {
        openPopup('#salon');
        historyObject.state = { opensDialog: true };
        closePopup();

        expect(historyObject.back).not.toHaveBeenCalled();
    });

    test('still takes back its own entry when no dialog is involved', () => {
        openPopup('#salon');
        historyObject.state = null;
        closePopup();

        expect(historyObject.back).toHaveBeenCalledTimes(1);
    });
});

// #2673: the entry below the pushed one is only the bare view when the push
// came from that view. Home Assistant says where it came from, and a pop-up
// opened from another page or another view must close onto its own view.
describe('the deduper only goes back to the view of the pop-up', () => {
    beforeEach(() => {
        historyObject.back.mockClear();
        historyObject.state = null;
        updateMockLocation(locationObject, VIEW);
    });

    test('stays on the view when the pop-up was opened from another dashboard', () => {
        openPopup('#salon', { from: '/dashboard-start/home' });
        closePopup();

        expect(historyObject.back).not.toHaveBeenCalled();
    });

    test('stays on the view when the pop-up was opened from another view of the dashboard', () => {
        openPopup('#salon', { from: '/lovelace/other' });
        closePopup();

        expect(historyObject.back).not.toHaveBeenCalled();
    });

    test('still takes back an entry Home Assistant pushed from the view itself', () => {
        openPopup('#salon', { from: '/lovelace/test' });
        closePopup();

        expect(historyObject.back).toHaveBeenCalledTimes(1);
    });

    test('forgets where the last pop-up came from once it is closed', () => {
        openPopup('#salon', { from: '/dashboard-start/home' });
        closePopup();
        // The next one is opened by Bubble Card itself, from the view.
        openPopup('#cuisine');
        closePopup();

        expect(historyObject.back).toHaveBeenCalledTimes(1);
    });
});

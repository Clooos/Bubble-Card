import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

// The gate uses the monotonic clock in production; tests drive time with
// jest.setSystemTime, which only moves Date.now.
jest.unstable_mockModule('../../tools/monotonic-time.js', () => ({
    monotonicNow: () => Date.now(),
}));

const {
    beginPopupOpenHassGate,
    extendPopupOpenHassGate,
    releasePopupOpenHassGate,
    shouldHoldDashboardHassUpdate,
} = await import('./hass-gate.js');

function createDashboardCard() {
    return {
        config: { card_type: 'button' },
        editor: false,
        isConnected: true,
        closest: jest.fn(() => null),
        getRootNode: jest.fn(() => null),
        updateBubbleCard: jest.fn(),
    };
}

describe('popup open hass gate', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        // Drain any leftover module state so tests stay independent.
        releasePopupOpenHassGate();
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    test('holds dashboard cards while armed and drains them on release', () => {
        const card = createDashboardCard();

        beginPopupOpenHassGate({ config: {} });
        expect(shouldHoldDashboardHassUpdate(card)).toBe(true);

        releasePopupOpenHassGate();
        jest.runOnlyPendingTimers();
        expect(card.updateBubbleCard).toHaveBeenCalledTimes(1);
    });

    test('never holds pop-up elements or editors', () => {
        beginPopupOpenHassGate({ config: {} });

        expect(shouldHoldDashboardHassUpdate({ ...createDashboardCard(), config: { card_type: 'pop-up' } })).toBe(false);
        expect(shouldHoldDashboardHassUpdate({ ...createDashboardCard(), editor: true })).toBe(false);
    });

    test('exempts cards nested in shadow roots inside the pop-up shell', () => {
        beginPopupOpenHassGate({ config: {} });

        // A bubble card inside a vertical-stack inside the pop-up: closest()
        // stops at the stack's shadow root, but the composed-tree walk must
        // reach the shell through the host chain.
        const popupShell = { closest: jest.fn((selector) => (selector === '.bubble-pop-up' ? popupShell : null)) };
        const nestedCard = {
            ...createDashboardCard(),
            closest: jest.fn(() => null),
            getRootNode: jest.fn(() => ({ host: popupShell })),
        };

        expect(shouldHoldDashboardHassUpdate(nestedCard)).toBe(false);
    });

    test('slides the deadline while the build makes progress, as a watchdog', () => {
        const card = createDashboardCard();

        beginPopupOpenHassGate({ config: {} });

        // Without extension the fixed window would have lapsed at t+1600.
        for (let i = 0; i < 4; i++) {
            jest.setSystemTime(Date.now() + 1000);
            extendPopupOpenHassGate();
        }
        expect(shouldHoldDashboardHassUpdate(card)).toBe(true);

        // A stalled open (no extension for a full window) expires.
        jest.setSystemTime(Date.now() + 1601);
        expect(shouldHoldDashboardHassUpdate(card)).toBe(false);
    });

    test('extension cannot re-arm a released gate', () => {
        beginPopupOpenHassGate({ config: {} });
        releasePopupOpenHassGate();
        jest.runOnlyPendingTimers();

        extendPopupOpenHassGate();
        expect(shouldHoldDashboardHassUpdate(createDashboardCard())).toBe(false);
    });

    test('self-heals an expired gate: the stale queue drains on the next update', () => {
        const heldCard = createDashboardCard();
        const otherCard = createDashboardCard();

        beginPopupOpenHassGate({ config: {} });
        expect(shouldHoldDashboardHassUpdate(heldCard)).toBe(true);

        // The gate expires without any release (e.g. the open path died).
        jest.setSystemTime(Date.now() + 1601);

        expect(shouldHoldDashboardHassUpdate(otherCard)).toBe(false);
        jest.runOnlyPendingTimers();
        expect(heldCard.updateBubbleCard).toHaveBeenCalledTimes(1);
    });

    test('drops the stale queue entry when a held card updates after expiry', () => {
        const card = createDashboardCard();

        beginPopupOpenHassGate({ config: {} });
        expect(shouldHoldDashboardHassUpdate(card)).toBe(true);

        jest.setSystemTime(Date.now() + 1601);

        // The card renders this update itself: no redundant drain render.
        expect(shouldHoldDashboardHassUpdate(card)).toBe(false);
        jest.runOnlyPendingTimers();
        expect(card.updateBubbleCard).not.toHaveBeenCalled();
    });

    test('skips disconnected elements when draining', () => {
        const card = createDashboardCard();

        beginPopupOpenHassGate({ config: {} });
        expect(shouldHoldDashboardHassUpdate(card)).toBe(true);

        card.isConnected = false;
        releasePopupOpenHassGate();
        jest.runOnlyPendingTimers();

        expect(card.updateBubbleCard).not.toHaveBeenCalled();
    });

    test('pauses the drain when a new open re-arms the gate, and resumes on release', () => {
        const cardA = createDashboardCard();
        const cardB = createDashboardCard();
        // Costly updates force the drain to split across macrotasks.
        cardA.updateBubbleCard.mockImplementation(() => jest.setSystemTime(Date.now() + 10));
        cardB.updateBubbleCard.mockImplementation(() => jest.setSystemTime(Date.now() + 10));

        beginPopupOpenHassGate({ config: {} });
        expect(shouldHoldDashboardHassUpdate(cardA)).toBe(true);
        expect(shouldHoldDashboardHassUpdate(cardB)).toBe(true);

        releasePopupOpenHassGate();
        jest.advanceTimersToNextTimer();
        expect(cardA.updateBubbleCard.mock.calls.length + cardB.updateBubbleCard.mock.calls.length).toBe(1);

        // A second pop-up opens before the tail drained: pause.
        beginPopupOpenHassGate({ config: {} });
        jest.advanceTimersToNextTimer();
        expect(cardA.updateBubbleCard.mock.calls.length + cardB.updateBubbleCard.mock.calls.length).toBe(1);

        // Its release resumes the drain.
        releasePopupOpenHassGate();
        jest.runOnlyPendingTimers();
        expect(cardA.updateBubbleCard).toHaveBeenCalledTimes(1);
        expect(cardB.updateBubbleCard).toHaveBeenCalledTimes(1);
    });

    test('an unrelated context cannot release a gate it never armed', () => {
        const opener = { config: {} };
        const stranger = { config: {} };
        const card = createDashboardCard();

        beginPopupOpenHassGate(opener);
        expect(shouldHoldDashboardHassUpdate(card)).toBe(true);

        // Another pop-up element is torn down mid-open (lovelace re-render):
        // its cleanup must not kill the opener's gate.
        releasePopupOpenHassGate(stranger);
        expect(shouldHoldDashboardHassUpdate(card)).toBe(true);

        // The owner's release works.
        releasePopupOpenHassGate(opener);
        jest.runOnlyPendingTimers();
        expect(card.updateBubbleCard).toHaveBeenCalledTimes(1);
    });

    test('never arms for hide_backdrop pop-ups or editor previews', () => {
        beginPopupOpenHassGate({ config: { hide_backdrop: true } });
        expect(shouldHoldDashboardHassUpdate(createDashboardCard())).toBe(false);

        beginPopupOpenHassGate({ config: {}, editor: true });
        expect(shouldHoldDashboardHassUpdate(createDashboardCard())).toBe(false);
    });
});

import { monotonicNow } from '../../tools/monotonic-time.js';

// While a standalone pop-up open is in flight behind a covering backdrop,
// bubble cards outside any pop-up hold their hass updates: they are about to
// be covered, and their re-renders are exactly what starves the open
// transition frames on low-end devices. Updates flush in budgeted batches
// once the open settles. The gate deadline slides while the progressive card
// build still owns the main thread (each build step re-arms it), so it works
// as a watchdog rather than a fixed window: it only expires when the open
// sequence stalled for a full window without making progress. It is never
// armed for hide_backdrop pop-ups (the dashboard stays visible there, a held
// update could be noticed).
const popupOpenHassGateWindowMs = 1600;
const popupOpenHassGateDrainBudgetMs = 8;

const popupOpenHassGate = {
    until: 0,
    queue: new Set(),
    draining: false,
    // The context whose open armed the gate: releases are owner-scoped, so an
    // unrelated pop-up element being torn down (lovelace re-render, hidden
    // section) can never kill the gate of an open still in flight.
    owner: null,
};

function _isInputPending() {
    try {
        return typeof navigator !== 'undefined' &&
            typeof navigator.scheduling?.isInputPending === 'function' &&
            navigator.scheduling.isInputPending() === true;
    } catch (_) {
        return false;
    }
}

function drainPopupOpenHassGateQueue() {
    if (popupOpenHassGate.draining || popupOpenHassGate.queue.size === 0) {
        return;
    }

    popupOpenHassGate.draining = true;
    const step = () => {
        // A new open re-armed the gate: pause, the next release resumes.
        if (monotonicNow() < popupOpenHassGate.until) {
            popupOpenHassGate.draining = false;
            return;
        }

        const stepStart = monotonicNow();
        do {
            const { value } = popupOpenHassGate.queue.values().next();
            if (value === undefined) {
                popupOpenHassGate.draining = false;
                return;
            }

            popupOpenHassGate.queue.delete(value);
            try {
                if (value.isConnected) {
                    value.updateBubbleCard();
                }
            } catch (_) {}
        } while (popupOpenHassGate.queue.size > 0 && (monotonicNow() - stepStart) < popupOpenHassGateDrainBudgetMs && !_isInputPending());

        if (popupOpenHassGate.queue.size > 0) {
            setTimeout(step, 0);
        } else {
            popupOpenHassGate.draining = false;
        }
    };
    setTimeout(step, 0);
}

export function beginPopupOpenHassGate(context) {
    if (context?.config?.hide_backdrop || context?.editor) {
        return;
    }

    popupOpenHassGate.until = monotonicNow() + popupOpenHassGateWindowMs;
    popupOpenHassGate.owner = context ? new WeakRef(context) : null;
}

// Slide the deadline while the open sequence is still making progress (called
// from each progressive build step). A no-op once the gate was released or
// expired, so late build steps can never re-arm it.
export function extendPopupOpenHassGate() {
    if (popupOpenHassGate.until > 0 && monotonicNow() < popupOpenHassGate.until) {
        popupOpenHassGate.until = monotonicNow() + popupOpenHassGateWindowMs;
    }
}

// Owner-scoped: a context can only release a gate it armed (or an orphaned
// one). Without this, ANY pop-up element's teardown — cleanupPopupRuntime
// runs from every disconnectedCallback — would kill the gate of another
// pop-up's open still in flight and reintroduce the very contention the gate
// prevents.
export function releasePopupOpenHassGate(context) {
    const owner = popupOpenHassGate.owner?.deref?.();
    if (owner && context && owner !== context) {
        return;
    }

    popupOpenHassGate.until = 0;
    popupOpenHassGate.owner = null;
    drainPopupOpenHassGateQueue();
}

// The pop-up shell hosts its child cards in light DOM, but stack cards
// (vertical-stack, grid, ...) render THEIR children inside a shadow root:
// closest() alone would stop there and misclassify a nested bubble card as a
// dashboard card. Walk the composed tree upwards across shadow boundaries.
function isInsidePopupShell(element) {
    let node = element;
    while (node) {
        if (typeof node.closest === 'function' && node.closest('.bubble-pop-up')) {
            return true;
        }

        const root = typeof node.getRootNode === 'function' ? node.getRootNode() : null;
        node = root && root !== node && root.host ? root.host : null;
    }
    return false;
}

// Called by the bubble-card hass setter. The element stores the fresh hass
// before asking, so a queued card always renders the latest state on flush.
export function shouldHoldDashboardHassUpdate(element) {
    if (monotonicNow() >= popupOpenHassGate.until) {
        // This element renders right now: a leftover drain entry from the
        // held window would only cause a redundant second render.
        popupOpenHassGate.queue.delete(element);
        // Self-healing: a gate that expired without release still drains.
        if (popupOpenHassGate.queue.size > 0) {
            drainPopupOpenHassGateQueue();
        }
        return false;
    }

    if (element?.config?.card_type === 'pop-up' || element?.editor) {
        return false;
    }

    if (isInsidePopupShell(element)) {
        // This card renders inside a pop-up and must keep updating. It is
        // getting a fresh update right now, so a leftover drain entry from an
        // earlier hold would only cause a redundant second render.
        popupOpenHassGate.queue.delete(element);
        return false;
    }

    popupOpenHassGate.queue.add(element);
    return true;
}

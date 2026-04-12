import { createCardElements, detachCardElements, removeCardElements, restoreCardElements, updateCardElements } from './create.js';

// ---------------------------------------------------------------------------
// Sequential idle prewarm — build popup child cards one at a time, off the
// interaction critical path, then immediately suspend them into a
// DocumentFragment until the popup opens.
//
// Design constraints:
//   • Max 1 popup's cards connected at any time during prewarm → no server
//     overload even on dashboards with many complex popups.
//   • 1-frame init window before suspension → stateful cards (apex charts,
//     LitElement firstUpdated, etc.) have time to fully initialize before
//     disconnectedCallback fires. Avoids the immediate connect→disconnect
//     issue that broke apex chart in the v1 approach.
//   • Warm open → cheap fragment.appendChild(), no connectedCallback cost.
//   • After popup close → re-suspend so cards are ready for the next open.
// ---------------------------------------------------------------------------

const _prewarmQueue = [];
let _prewarmActive = false;

function _dequeueAndPrewarm() {
    if (_prewarmActive) return;

    while (_prewarmQueue.length > 0) {
        const ref = _prewarmQueue.shift();
        const context = ref?.deref();
        if (!context) continue;
        if (!context.isConnected) continue;
        if (context._standalonePopUpCardsActive) continue;
        if (context._cardsContainer || context._detachedCardsFragment?.firstChild) continue;
        if (context.editor || context.detectedEditor) continue;

        _prewarmActive = true;

        // Build card tree and connect to the closed (off-screen) popup DOM.
        context._standalonePopUpCardsActive = true;
        createCardElements(context);
        context._standalonePopUpCardsActive = false;

        // Defer suspension by one frame: gives LitElement-based cards time to
        // run their first async update cycle (microtask) before being detached.
        requestAnimationFrame(() => {
            if (!context._standalonePopUpCardsActive && context._cardsContainer) {
                detachCardElements(context);
            }
            _prewarmActive = false;
            // Next popup gets its turn on the following event-loop turn.
            setTimeout(_dequeueAndPrewarm, 0);
        });
        return;
    }

    _prewarmActive = false;
}

function _enqueuePrewarm(context) {
    if (_prewarmQueue.some(r => r.deref() === context)) return;
    _prewarmQueue.push(new WeakRef(context));
    if (!_prewarmActive) _dequeueAndPrewarm();
}

export function scheduleStandalonePopUpCardPrewarm(context) {
    if (!context?.isStandalonePopUp) return;
    if (context.editor || context.detectedEditor) return;
    if (!Array.isArray(context.config?.cards) || context.config.cards.length === 0) return;

    clearStandalonePopUpCardPrewarm(context);

    // Backstop: guarantees enqueueing even when RAF is throttled.
    context._prewarmBackstop = setTimeout(() => {
        context._prewarmBackstop = null;
        _enqueuePrewarm(context);
    }, 96);

    // Primary: enqueue after the 2nd animation frame (post-first-paint).
    context._prewarmFrame = requestAnimationFrame(() => {
        context._prewarmFrame = null;
        requestAnimationFrame(() => {
            if (context._prewarmBackstop) {
                clearTimeout(context._prewarmBackstop);
                context._prewarmBackstop = null;
            }
            _enqueuePrewarm(context);
        });
    });
}

export function clearStandalonePopUpCardPrewarm(context) {
    if (context._prewarmBackstop) {
        clearTimeout(context._prewarmBackstop);
        context._prewarmBackstop = null;
    }
    if (context._prewarmFrame) {
        cancelAnimationFrame(context._prewarmFrame);
        context._prewarmFrame = null;
    }
    // Remove from global queue if already enqueued but not yet started.
    const idx = _prewarmQueue.findIndex(r => r.deref() === context);
    if (idx !== -1) _prewarmQueue.splice(idx, 1);
}

// Suspend popup cards into a DocumentFragment after close.
// Called from finalizeStandalonePopupClose so suspended cards are ready
// for a cheap fragment-restore on the next warm open.
export function suspendStandalonePopUpCards(context) {
    if (!context?.isStandalonePopUp) return;
    if (context._standalonePopUpCardsActive) return;
    detachCardElements(context);
}

// ---------------------------------------------------------------------------

export function setStandalonePopUpCardsActive(context, active) {
    if (!context?.isStandalonePopUp) return;
    context._standalonePopUpCardsActive = active;
}

export function shouldRenderPopUpCards(context) {
    if (!context?.isStandalonePopUp) return true;
    return !!context._standalonePopUpCardsActive;
}

export function restoreDetachedPopUpCards(context) {
    const hasDetachedCards = !!context._detachedCardsFragment?.firstChild;
    if (!hasDetachedCards) {
        return false;
    }

    context.elements?.popUpContainer?.classList.remove('has-placeholder');
    context.elements?.popUpContainer?.querySelector('.bubble-editor-placeholder')?.remove();
    restoreCardElements(context);
    return true;
}

export function handlePopUpCards(context) {
    const cards = context.config.cards;
    if (!Array.isArray(cards)) return;

    if (!shouldRenderPopUpCards(context)) {
        // Cards remain in the popup's DOM when inactive (popup closed).
        // The closed popup is off-screen (transform + contain:layout paint).
        // No detach: avoids connection/disconnection cycles on every close.
        return;
    }

    // Nothing to render or update for empty card lists.
    if (cards.length === 0 && (context._cardsContainer || context._sortableEl)) {
        return;
    }

    restoreDetachedPopUpCards(context);

    if (!context._cardsContainer && !context._sortableEl) {
        createCardElements(context);
    } else {
        updateCardElements(context);
    }
}

export function cleanupPopUpCards(context) {
    removeCardElements(context);
    context._standalonePopUpCardsActive = false;
}

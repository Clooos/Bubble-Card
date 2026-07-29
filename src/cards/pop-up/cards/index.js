import { createCardElements, createCardElementsProgressively, removeCardElements, removeCardElementsProgressively, resumeCardHydrationProgressively, settleProgressiveCardWork, updateCardElements } from './create.js';

export function suspendStandalonePopUpCards(context) {
    if (!context?.isStandalonePopUp) return;
    if (context._standalonePopUpCardsActive) return;
    removeCardElements(context);
    context._cachedPopupScrollableState = undefined;
}

// Progressive variant used by the post-close cleanup: removes one card per
// macrotask so the disconnect callbacks never pile up into a single long task.
export function suspendStandalonePopUpCardsProgressively(context, onDone) {
    if (!context?.isStandalonePopUp || context._standalonePopUpCardsActive) {
        onDone();
        return;
    }
    context._cachedPopupScrollableState = undefined;
    removeCardElementsProgressively(context, onDone);
}

// Progressive variant used by the open sequence: builds one card per
// macrotask while the pop-up is painted closed, then reports completion so
// the open transition only starts with the full content in place.
export function buildStandalonePopUpCardsProgressively(context, onDone) {
    if (!context?.isStandalonePopUp || !shouldRenderPopUpCards(context)) {
        onDone();
        return;
    }
    createCardElementsProgressively(context, onDone);
}

// Hydrate the placeholder cells a fold-first build left below the fold.
// Called once the open transition has finished.
export function resumeStandaloneCardHydration(context, onDone) {
    if (!context?.isStandalonePopUp || !shouldRenderPopUpCards(context)) return;
    resumeCardHydrationProgressively(context, onDone);
}

// Cancel any in-flight progressive build/teardown and settle the card state
// to clean-cold synchronously. Safe to call at any lifecycle boundary.
export function settleStandaloneCardWork(context) {
    if (!context?.isStandalonePopUp) return;
    settleProgressiveCardWork(context);
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

export function handlePopUpCards(context) {
    const cards = context.config.cards;
    if (!Array.isArray(cards)) return;

    // A progressive build or teardown owns the container; reconciling against
    // its partial state would trigger a full synchronous rebuild.
    if (context._progressiveCardWork) return;

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

    if (!context._cardsContainer && !context._sortableEl) {
        createCardElements(context);
    } else {
        updateCardElements(context);
    }
}

export function cleanupPopUpCards(context) {
    settleProgressiveCardWork(context);
    removeCardElements(context);
    context._standalonePopUpCardsActive = false;
}

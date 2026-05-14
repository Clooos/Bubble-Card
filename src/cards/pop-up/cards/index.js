import { createCardElements, removeCardElements, updateCardElements } from './create.js';

export function suspendStandalonePopUpCards(context) {
    if (!context?.isStandalonePopUp) return;
    if (context._standalonePopUpCardsActive) return;
    removeCardElements(context);
    context._cachedPopupScrollableState = undefined;
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
    removeCardElements(context);
    context._standalonePopUpCardsActive = false;
}

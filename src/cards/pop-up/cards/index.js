import { createCardElements, detachCardElements, removeCardElements, restoreCardElements, updateCardElements } from './create.js';

function setManagedCardVisibility(cardElement, visible) {
    if (!cardElement) {
        return false;
    }

    if (typeof cardElement._setElementVisibility === 'function') {
        cardElement._setElementVisibility(visible);
        return true;
    }

    const managedElement = cardElement._element || cardElement.firstElementChild || null;

    if (cardElement.style) {
        cardElement.style.display = visible ? '' : 'none';
    }

    if (typeof cardElement.toggleAttribute === 'function') {
        cardElement.toggleAttribute('hidden', !visible);
    }

    if (managedElement?.style) {
        managedElement.style.display = visible ? '' : 'none';
    }

    return true;
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

export function suspendWarmStandalonePopUpCards(context) {
    if (!context?.isStandalonePopUp || context._standalonePopUpCardsActive) {
        return false;
    }

    const managedCards = Array.isArray(context._managedCards) ? context._managedCards : [];
    if (managedCards.length === 0) {
        return false;
    }

    let changed = false;
    managedCards.forEach((cardElement) => {
        changed = setManagedCardVisibility(cardElement, false) || changed;
    });

    context._standaloneWarmCardsSuspended = changed;
    return changed;
}

export function restoreWarmStandalonePopUpCards(context) {
    if (!context?.isStandalonePopUp || !context._standaloneWarmCardsSuspended) {
        return false;
    }

    const managedCards = Array.isArray(context._managedCards) ? context._managedCards : [];
    if (managedCards.length === 0) {
        context._standaloneWarmCardsSuspended = false;
        return false;
    }

    let changed = false;
    managedCards.forEach((cardElement) => {
        changed = setManagedCardVisibility(cardElement, true) || changed;
    });

    context._standaloneWarmCardsSuspended = false;
    return changed;
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
    context._standaloneWarmCardsSuspended = false;
}

import { createCardElements, detachCardElements, removeCardElements, restoreCardElements, updateCardElements } from './create.js';

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
        detachCardElements(context);
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

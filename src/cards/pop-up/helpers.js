import { getBackdrop, releaseBackdropContext } from "./backdrop.js";
import { callAction } from "../../tools/tap-actions.js";
import { toggleBodyScroll } from "../../tools/utils.js";
import { handlePopUpCards, restoreDetachedPopUpCards, setStandalonePopUpCardsActive, clearStandalonePopUpCardPrewarm, suspendStandalonePopUpCards } from "./cards/index.js";
import { appendLegacyPopup, displayLegacyPopupContent, hideLegacyPopupContent } from './legacy.js';

const popupState = {
  animationDuration: 300, // Animation duration in ms
  activePopups: new Set(), // Track active popups
  entityTriggeredPopup: null, // Reference to entity-triggered popup
  pendingHashRemovalTimeout: null,
  pendingHashRemovalHash: '',
};

export const POPUP_MODE_DEFAULT = 'default';
export const POPUP_MODE_FIT_CONTENT = 'fit-content';
export const POPUP_MODE_CENTERED = 'centered';

export function getPopupMode(config) {
    if (config?.popup_mode === POPUP_MODE_FIT_CONTENT) return POPUP_MODE_FIT_CONTENT;
    if (config?.popup_mode === POPUP_MODE_CENTERED) return POPUP_MODE_CENTERED;
    return POPUP_MODE_DEFAULT;
}

export function hasPopupBottomOffset(config) {
    return getPopupMode(config) === POPUP_MODE_FIT_CONTENT && Boolean(config?.with_bottom_offset);
}

export function syncPopupModeClasses(popUp, config) {
    if (!popUp?.classList) {
        return POPUP_MODE_DEFAULT;
    }

    const popupMode = getPopupMode(config);
    popUp.classList.toggle('popup-mode-fit-content', popupMode === POPUP_MODE_FIT_CONTENT);
    popUp.classList.toggle('popup-mode-centered', popupMode === POPUP_MODE_CENTERED);
    popUp.classList.toggle('popup-mode-with-bottom-offset', hasPopupBottomOffset(config));
    return popupMode;
}

function clearPendingHashRemoval() {
    if (popupState.pendingHashRemovalTimeout) {
        clearTimeout(popupState.pendingHashRemovalTimeout);
        popupState.pendingHashRemovalTimeout = null;
    }

    popupState.pendingHashRemovalHash = '';
}

function setPopupOpenSettled(context, settled) {
    context._popupOpenSettled = settled;
}

function isPopupOpenSettled(context) {
    return context._popupOpenSettled === true;
}

function armFreshOutsideInteractionGuard(context) {
    context._awaitFreshOutsideInteraction = true;
    context._allowOutsideCloseFromInteraction = false;
}

function clearFreshOutsideInteractionGuard(context) {
    context._awaitFreshOutsideInteraction = false;
    context._allowOutsideCloseFromInteraction = false;
}

// Collapse duplicate hash entries so one Back press closes the popup.
if (!window.__bubbleLocationDeduperAdded) {
    try {
        let pendingHashBase = null;
        let pendingTimestamp = 0;
        let guardNextNoHash = false;
        let pendingPreviousHash = "";
        let lastKnownHash = window.location.hash || "";

        window.addEventListener('location-changed', () => {
            const href = window.location.href;
            const hasHash = !!window.location.hash;
            const base = href.split('#')[0];

            if (hasHash) {
                pendingHashBase = base;
                pendingTimestamp = Date.now();
                guardNextNoHash = false;
                pendingPreviousHash = lastKnownHash || "";
                lastKnownHash = window.location.hash;
                return;
            }

            // Ignore the synthetic no-hash step used during close.
            if (guardNextNoHash) {
                guardNextNoHash = false;
                pendingHashBase = null;
                pendingPreviousHash = "";
                lastKnownHash = window.location.hash || "";
                return;
            }

            if (
                pendingHashBase &&
                base === pendingHashBase &&
                (Date.now() - pendingTimestamp) < 1500 &&
                !pendingPreviousHash
            ) {
                // Drop the extra history entry created by duplicate hash pushes.
                try {
                    guardNextNoHash = true;
                    history.back();
                } catch (_) {}
            }

            pendingHashBase = null;
            pendingPreviousHash = "";
            lastKnownHash = window.location.hash || "";
        });
        window.__bubbleLocationDeduperAdded = true;
    } catch (_) {
        // no-op
    }
}

const dialogNode = new Set(['HA-DIALOG', 'HA-MORE-INFO-DIALOG', 'HA-DIALOG-DATE-PICKER']);

const dialogState = {
    recentlyClosedTimestamp: 0,
    protectionWindow: 500 // ms to protect after dialog close
};

// Listen for dialog close events
if (!window.__bubbleDialogListenerAdded) {
    window.addEventListener('dialog-closed', () => {
        dialogState.recentlyClosedTimestamp = Date.now();
    }, { capture: true });
    
    // Some HA dialogs still emit iron-overlay-closed.
    window.addEventListener('iron-overlay-closed', () => {
        dialogState.recentlyClosedTimestamp = Date.now();
    }, { capture: true });

    window.__bubbleDialogListenerAdded = true;
}

function isEventInsidePopupOrDialog(event) {
    const targets = event.composedPath();
    return targets.find(target => {
        if (!target.classList && !target.nodeName) return false;
        return target.classList?.contains('bubble-pop-up') ||
               dialogNode.has(target.nodeName);
    });
}

function noteOutsideInteractionStart(event, context) {
    if (!context._awaitFreshOutsideInteraction) {
        return;
    }

    if (!context.popUp?.classList.contains('is-popup-opened') || !isPopupOpenSettled(context)) {
        return;
    }

    if (isEventInsidePopupOrDialog(event)) {
        return;
    }

    context._allowOutsideCloseFromInteraction = true;
}

function createLocationChangedEvent(detail = undefined) {
    const event = new Event('location-changed');
    if (detail !== undefined) {
        event.detail = detail;
    }
    return event;
}

function clickOutside(event, context) {
    if (!(context.config.close_by_clicking_outside ?? true)) return;
    
    // Only close fully opened pop-ups.
    if (!context.popUp.classList.contains('is-popup-opened')) return;

    if (!isPopupOpenSettled(context)) {
        return;
    }

    // Ignore the click right after a dialog closes.
    const timeSinceDialogClosed = Date.now() - dialogState.recentlyClosedTimestamp;
    if (timeSinceDialogClosed < dialogState.protectionWindow) {
        return;
    }

    if (isEventInsidePopupOrDialog(event)) {
        return;
    }

    if (context._awaitFreshOutsideInteraction && !context._allowOutsideCloseFromInteraction) {
        return;
    }

    clearFreshOutsideInteractionGuard(context);
    removeHash(true);
}

function resetCloseTimeout(context) { 
    if(!context.config.auto_close || !context.closeTimeout) return;
    clearTimeout(context.closeTimeout);
    context.closeTimeout = setTimeout(removeHash, context.config.auto_close);
}

export function removeHash(direct = false) {
    if (!location.hash) {
        return false;
    }

    const hashToRemove = location.hash;
    clearPendingHashRemoval();

    popupState.pendingHashRemovalHash = hashToRemove;
    popupState.pendingHashRemovalTimeout = setTimeout(() => {
        popupState.pendingHashRemovalTimeout = null;
        if (!hashToRemove || location.hash !== hashToRemove || popupState.pendingHashRemovalHash !== hashToRemove) {
            return;
        }

        popupState.pendingHashRemovalHash = '';
        const newURL = window.location.href.split('#')[0];
        history.replaceState(null, "", newURL);
        window.dispatchEvent(createLocationChangedEvent({ source: 'bubble-popup-remove-hash' }));
    }, 50);

    return true;
}

export function addHash(hash) {
    clearPendingHashRemoval();

    const normalizedHash = hash.startsWith('#') ? hash : `#${hash}`;
    if (location.hash === normalizedHash) {
        window.dispatchEvent(createLocationChangedEvent({
            source: 'bubble-popup-add-hash',
            sameHash: true,
            replace: false,
        }));
        return true;
    }

    const newURL = window.location.href.split('#')[0] + normalizedHash;
    history.pushState(null, "", newURL);
    window.dispatchEvent(createLocationChangedEvent({
        source: 'bubble-popup-add-hash',
        sameHash: false,
        replace: false,
    }));

    return true;
}

export function navigateToPreviousPopup(context) {
    const currentHash = location.hash;
    const previousHash = context?._previousPopupHash || '';

    if (!currentHash || currentHash !== context?.config?.hash) {
        return false;
    }

    if (previousHash && previousHash !== currentHash && getRegisteredPopupContext(previousHash)) {
        try {
            history.back();
            return true;
        } catch (_) {
            // Fall back to closing the current popup if history navigation fails.
        }
    }

    return removeHash(true);
}

function toggleBackdrop(context, show) {
    const { showBackdrop, hideBackdrop } = getBackdrop(context);
    if (show) {
        showBackdrop(context);
    } else {
        // Keep the backdrop visible during popup-to-popup navigation.
        if (hasIncomingPopupNavigation(context)) {
            return;
        }
        hideBackdrop();
    }
}

function hasIncomingPopupNavigation(context) {
    const incomingHash = location.hash;
    return !!(incomingHash && incomingHash !== context.config?.hash && getRegisteredPopupContext(incomingHash));
}

function setPopupOpenSource(context, source) {
    context._popupOpenSource = source;

    if (source === 'trigger') {
        popupState.entityTriggeredPopup = context;
    } else if (popupState.entityTriggeredPopup === context) {
        popupState.entityTriggeredPopup = null;
    }
}

function consumePendingPopupOpenSource(context) {
    const source = context._pendingPopupOpenSource ||
        (context._popupOpenSource && location.hash === context.config?.hash ? context._popupOpenSource : 'manual');

    context._pendingPopupOpenSource = null;
    setPopupOpenSource(context, source);
}

function clearPopupOpenSource(context) {
    context._pendingPopupOpenSource = null;
    context._popupOpenSource = null;
    setPopupOpenSettled(context, false);
    clearFreshOutsideInteractionGuard(context);

    if (popupState.entityTriggeredPopup === context) {
        popupState.entityTriggeredPopup = null;
    }
}

export function markPopupPendingTriggerOpen(context) {
    context._pendingPopupOpenSource = 'trigger';
}

export function wasPopupOpenedByTrigger(context) {
    return context._popupOpenSource === 'trigger';
}

function completePopupOpen(context) {
    context.popUp.style.willChange = '';

    if (!context.popUp.classList.contains('is-popup-opened') || !popupState.activePopups.has(context)) {
        return;
    }

    const container = context.elements?.popUpContainer;
    if (container) {
        container.classList.toggle('is-scrollable', container.scrollHeight > container.clientHeight);
    }

    setPopupOpenSettled(context, true);
    armFreshOutsideInteractionGuard(context);

    toggleBodyScroll(true);

    if (context.config.auto_close > 0) {
        if (context.closeTimeout) clearTimeout(context.closeTimeout);
        context.closeTimeout = setTimeout(() => {
            if (popupState.activePopups.has(context) && (context.config.hash === location.hash || !context.config.hash)) {
                removeHash();
            } else if (popupState.activePopups.has(context)) {
                closePopup(context);
            }
        }, context.config.auto_close);
    }

    if (context.config.open_action) {
        callAction(context.popUp, context.config, 'open_action');
    }
}

function clearPopupOpenCompletion(context) {
    if (context._popupOpenCompletionTimeout) {
        clearTimeout(context._popupOpenCompletionTimeout);
        context._popupOpenCompletionTimeout = null;
    }

    if (context._popupOpenCompletionFrame) {
        cancelAnimationFrame(context._popupOpenCompletionFrame);
        context._popupOpenCompletionFrame = null;
    }
}

function schedulePopupOpenCompletion(context) {
    clearPopupOpenCompletion(context);

    context._popupOpenCompletionTimeout = setTimeout(() => {
        context._popupOpenCompletionTimeout = null;
        if (!popupState.activePopups.has(context)) return;

        context._popupOpenCompletionFrame = requestAnimationFrame(() => {
            context._popupOpenCompletionFrame = null;
            if (!popupState.activePopups.has(context)) return;
            completePopupOpen(context);
        });
    }, popupState.animationDuration);
}

function clearStandaloneTransitionCompletion(context) {
    if (context._standaloneTransitionEndHandler) {
        context.popUp?.removeEventListener('transitionend', context._standaloneTransitionEndHandler);
        context._standaloneTransitionEndHandler = null;
    }

    if (context._standaloneTransitionFallback) {
        clearTimeout(context._standaloneTransitionFallback);
        context._standaloneTransitionFallback = null;
    }
}

function clearStandaloneTransitionFrame(context) {
    if (context._standaloneTransitionFrame) {
        cancelAnimationFrame(context._standaloneTransitionFrame);
        context._standaloneTransitionFrame = null;
    }
}

function clearStandaloneOpenFrames(context) {
    ['_standaloneOpenFrame', '_standaloneCardSyncFrame'].forEach((frameKey) => {
        if (context[frameKey]) {
            cancelAnimationFrame(context[frameKey]);
            context[frameKey] = null;
        }
    });
}

function scheduleStandaloneFrame(context, frameKey, callback) {
    if (context[frameKey]) {
        cancelAnimationFrame(context[frameKey]);
    }

    context[frameKey] = requestAnimationFrame(() => {
        context[frameKey] = null;
        callback();
    });
}

function syncStandalonePopupContent(context) {
    if (!popupState.activePopups.has(context)) {
        return;
    }

    const hasStandaloneCards = Array.isArray(context.config.cards) && context.config.cards.length > 0;
    if (hasStandaloneCards) {
        handlePopUpCards(context);
    }
}

function waitForStandalonePopupTransition(context, callback) {
    clearStandaloneTransitionCompletion(context);

    const handleTransitionEnd = (event) => {
        if (event.target !== context.popUp) return;
        if (event.propertyName && event.propertyName !== 'transform') return;

        clearStandaloneTransitionCompletion(context);
        callback();
    };

    context._standaloneTransitionEndHandler = handleTransitionEnd;
    context.popUp.addEventListener('transitionend', handleTransitionEnd);
    context._standaloneTransitionFallback = setTimeout(() => {
        clearStandaloneTransitionCompletion(context);
        callback();
    }, popupState.animationDuration + 60);
}

function setStandalonePopupState(popUp, open, transitionClass = null) {
    popUp.classList.remove('is-opening', 'is-closing');
    if (transitionClass) {
        popUp.classList.add(transitionClass);
    }
    popUp.classList.toggle('is-popup-opened', open);
    popUp.classList.toggle('is-popup-closed', !open);
}

function prepareStandalonePopupCloseState(popUp) {
    // Keep the popup in its open state during the exit animation.
    // Applying is-popup-closed too early also applies the closed-state containment,
    // which can suppress Safari's visual close transition.
    popUp.classList.remove('is-opening', 'is-closing');
    popUp.classList.add('is-popup-opened');
    popUp.classList.remove('is-popup-closed');
}

function startStandalonePopupTransition(context, open, onComplete) {
    const { popUp } = context;

    clearStandaloneTransitionFrame(context);
    clearStandaloneTransitionCompletion(context);

    if (popUp.style.transition === 'none') {
        popUp.style.transition = '';
    }

    if (open) {
        setStandalonePopupState(popUp, false);
    } else {
        prepareStandalonePopupCloseState(popUp);
    }

    popUp.getBoundingClientRect();
    waitForStandalonePopupTransition(context, onComplete);

    if (open) {
        setStandalonePopupState(popUp, true, 'is-opening');
        return;
    }

    popUp.classList.add('is-closing');
}

function finalizeStandalonePopupOpen(context) {
    const container = context.elements?.popUpContainer;
    if (container) {
        container.classList.toggle('is-scrollable', container.scrollHeight > container.clientHeight);
    }
    context.popUp.classList.remove('is-opening', 'is-closing');
    completePopupOpen(context);
}

function finalizeStandalonePopupClose(context) {
    const { popUp } = context;

    popUp.classList.remove('is-opening', 'is-closing');
    popUp.classList.remove('is-popup-opened');
    popUp.classList.add('is-popup-closed');
    popUp.style.willChange = '';

    if (!hasIncomingPopupNavigation(context)) {
        // Releasing the body scroll lock too early forces body position/scroll
        // restoration during the transform animation, which is costly on low-tier
        // devices and can visually break Safari's close transition.
        toggleBodyScroll(false);
    }

    setStandalonePopUpCardsActive(context, false);
    handlePopUpCards(context);
    suspendStandalonePopUpCards(context);

    if (context.config.background_update) {
        popUp.style.display = 'none';
    }

    if (context.config.close_action) {
        callAction(context, context.config, 'close_action');
    }
}

function openStandalonePopup(context, instant = false) {
    clearAllTimeouts(context);

    const { popUp } = context;
    popupState.activePopups.add(context);

    popUp.style.willChange = 'transform';

    // Show the backdrop immediately — this is the first visual feedback for the
    // interaction and the principal input for the browser's INP measurement.
    // Everything else is split across two animation frames, mirroring what the
    // legacy popup open path does so the browser can paint the cheapest possible
    // first response before doing any card/layout work.
    toggleBackdrop(context, true);

    if (instant) {
        // Synchronous instant open (hash-on-load, forced open, etc.).
        context.updatePopupColor?.();
        popUp.style.display = '';
        popUp.style.visibility = '';
        updateListeners(context, true);
        setStandalonePopUpCardsActive(context, true);
        if (context._detachedCardsFragment?.firstChild) {
            restoreDetachedPopUpCards(context);
        }
        syncStandalonePopupContent(context);
        popUp.style.transition = 'none';
        setStandalonePopupState(popUp, true);
        requestAnimationFrame(() => {
            popUp.style.transition = '';
            finalizeStandalonePopupOpen(context);
        });
        return;
    }

    const openOnCurrentFrame = context._standaloneOpenImmediateFrame === true;
    context._standaloneOpenImmediateFrame = false;

    // ── Phase 1 (RAF1) ────────────────────────────────────────────────────────
    // Prepare the off-screen popup shell: color, display, visibility, listeners.
    // No card DOM touch, no forced reflow. The browser commits a frame after this
    // (backdrop visible, popup off-screen via is-popup-closed transform).
    // INP is measured until that first committed frame — phase 2 is outside it.
    const phase1 = () => {
        if (!popupState.activePopups.has(context)) return;

        context.updatePopupColor?.();
        popUp.style.display = '';
        popUp.style.visibility = '';
        updateListeners(context, true);
        setStandalonePopUpCardsActive(context, true);

        // Schedule phase 2 on the next frame. _standaloneCardSyncFrame is
        // also used for the deferred hass sync on the warm path, so both are
        // correctly cancelled by clearStandaloneOpenFrames / clearAllTimeouts.
        scheduleStandaloneFrame(context, '_standaloneCardSyncFrame', phase2);
    };

    // ── Phase 2 (RAF2) ────────────────────────────────────────────────────────
    // GBCr flush, card restore/build, then start the CSS transition.
    // Runs AFTER the browser has already committed the first response frame
    // (backdrop visible). Card reconnect work and the forced reflow no longer
    // contribute to INP.
    const phase2 = () => {
        if (!popupState.activePopups.has(context)) return;

        clearStandaloneTransitionFrame(context);
        clearStandaloneTransitionCompletion(context);
        if (popUp.style.transition === 'none') popUp.style.transition = '';

        // Flush while popup is still empty (is-popup-closed, no cards yet) — cheap.
        setStandalonePopupState(popUp, false);
        popUp.getBoundingClientRect();

        // Restore / build cards under __bubblePopupOpening so nested bubble-card
        // children defer their updateBubbleCard() to setTimeout(320ms).
        const hasStandaloneCards = Array.isArray(context.config.cards) && context.config.cards.length > 0;
        let contentPrimedBeforeOpen = false;
        if (hasStandaloneCards) {
            window.__bubblePopupOpening = true;
            if (context._detachedCardsFragment?.firstChild) {
                restoreDetachedPopUpCards(context);
                contentPrimedBeforeOpen = true;
            } else if (!context._cardsContainer) {
                syncStandalonePopupContent(context);
                contentPrimedBeforeOpen = true;
            }
            window.__bubblePopupOpening = false;
        }

        // Start the CSS transition. Cards are already in the popup DOM so the
        // popup slides up with content visible — no empty-shell flash.
        waitForStandalonePopupTransition(context, () => finalizeStandalonePopupOpen(context));
        setStandalonePopupState(popUp, true, 'is-opening');

        if (!contentPrimedBeforeOpen) {
            scheduleStandaloneFrame(context, '_standaloneCardSyncFrame', () => {
                window.__bubblePopupOpening = true;
                syncStandalonePopupContent(context);
                window.__bubblePopupOpening = false;
            });
        }
    };

    // For popup-to-popup navigation we are already inside a RAF. Run phase 1
    // synchronously so the transition starts one frame earlier; phase 2 still
    // lands on the following frame via scheduleStandaloneFrame inside phase 1.
    if (openOnCurrentFrame) {
        phase1();
        return;
    }

    scheduleStandaloneFrame(context, '_standaloneOpenFrame', phase1);
}

function closeStandalonePopup(context, force = false) {
    if ((!context.popUp.classList.contains('is-popup-opened') && !force)) return;

    clearAllTimeouts(context);

    popupState.activePopups.delete(context);
    clearPopupOpenSource(context);

    updateListeners(context, false);

    context.popUp.style.willChange = 'transform';
    if (!hasIncomingPopupNavigation(context)) {
        toggleBackdrop(context, false);
    }
    startStandalonePopupTransition(context, false, () => finalizeStandalonePopupClose(context));
}

function updatePopupClass(popUp, open) {
    if (popUp._bubblePopupClassFrame) {
        cancelAnimationFrame(popUp._bubblePopupClassFrame);
        popUp._bubblePopupClassFrame = null;
    }

    if (popUp._bubblePopupClassTimeout) {
        clearTimeout(popUp._bubblePopupClassTimeout);
        popUp._bubblePopupClassTimeout = null;
    }

    const applyPopupState = () => {
        popUp.classList.add(open ? 'is-opening' : 'is-closing');
        popUp.classList.toggle('is-popup-opened', open);
        popUp.classList.toggle('is-popup-closed', !open);

        popUp._bubblePopupClassTimeout = setTimeout(() => {
            popUp._bubblePopupClassTimeout = null;
            popUp.classList.remove('is-opening', 'is-closing');
        }, popupState.animationDuration);
    };

    if (open) {
        // Force a layout read on open so the transition starts from the appended closed state.
        popUp.getBoundingClientRect();
        applyPopupState();
        return;
    }

    if (popUp.style.transition === 'none') {
        popUp.style.transition = '';
    }

    // Re-commit the opened state first, then close on the next frame so the browser
    // cannot collapse both states into a single paint when timing is tight.
    popUp.classList.remove('is-opening', 'is-closing');
    popUp.classList.add('is-popup-opened');
    popUp.classList.remove('is-popup-closed');
    popUp.getBoundingClientRect();

    popUp._bubblePopupClassFrame = requestAnimationFrame(() => {
        popUp._bubblePopupClassFrame = null;
        applyPopupState();
    });
}

export function updateListeners(context, add) {
    if (!context.boundClickOutside) {
        context.boundClickOutside = event => clickOutside(event, context);
    }

    if (!context.boundOutsideInteractionStart) {
        context.boundOutsideInteractionStart = event => noteOutsideInteractionStart(event, context);
    }

    if (!context.resetCloseTimeout) {
      context.resetCloseTimeout = () => resetCloseTimeout(context);
    }

    const removeOptionalPopupListeners = () => {
        if (!context.popUp) {
            context.autoCloseListenersAdded = false;
            context.closeOnClickListenerAdded = false;
            context._popupHeaderTouchTarget = null;
            return;
        }

        if (context.autoCloseListenersAdded) {
            context.popUp.removeEventListener('touchstart', context.resetCloseTimeout);
            context.popUp.removeEventListener('click', context.resetCloseTimeout);
            context.autoCloseListenersAdded = false;
        }

        if (context.closeOnClickListenerAdded) {
            context.popUp.removeEventListener('click', removeHash);
            context.closeOnClickListenerAdded = false;
        }

        delete context.popUp.dataset.closeOnClick;
    };

    if (add && !context.editor) {
        if (!context.listenersAdded) {
            if (context.popUp) {
                if (context.handleTouchStart) {
                    context.popUp.addEventListener('touchstart', context.handleTouchStart, { passive: true });
                }
                if (context.handleTouchMove) {
                    context.popUp.addEventListener('touchmove', context.handleTouchMove, { passive: false });
                }
                if (context.handleTouchEnd) {
                    context.popUp.addEventListener('touchend', context.handleTouchEnd, { passive: true });
                }
                if (context.handleHeaderTouchMove && context.elements?.header) {
                    context._popupHeaderTouchTarget = context.elements.header;
                    context.elements.header.addEventListener('touchmove', context.handleHeaderTouchMove, { passive: true });
                }
                if (context.handleHeaderTouchEnd && context.elements?.header) {
                    context._popupHeaderTouchTarget = context.elements.header;
                    context.elements.header.addEventListener('touchend', context.handleHeaderTouchEnd, { passive: true });
                }
                if (context.closeOnEscape) {
                    window.addEventListener('keydown', context.closeOnEscape, { passive: true });
                }
            }
            context.listenersAdded = true;
        }

        if (context.popUp) {
            if (context.config.auto_close) {
                if (!context.autoCloseListenersAdded) {
                    context.popUp.addEventListener('touchstart', context.resetCloseTimeout, { passive: true });
                    context.popUp.addEventListener('click', context.resetCloseTimeout, { passive: true });
                    context.autoCloseListenersAdded = true;
                }
            } else if (context.autoCloseListenersAdded) {
                context.popUp.removeEventListener('touchstart', context.resetCloseTimeout);
                context.popUp.removeEventListener('click', context.resetCloseTimeout);
                context.autoCloseListenersAdded = false;
            }

            if (context.config.close_on_click) {
                if (!context.closeOnClickListenerAdded) {
                    context.popUp.addEventListener('click', removeHash, { passive: true });
                    context.closeOnClickListenerAdded = true;
                }
                context.popUp.dataset.closeOnClick = 'true';
            } else if (context.closeOnClickListenerAdded) {
                context.popUp.removeEventListener('click', removeHash);
                context.closeOnClickListenerAdded = false;
                delete context.popUp.dataset.closeOnClick;
            } else {
                delete context.popUp.dataset.closeOnClick;
            }
        }

        if (!context.clickOutsideListenerAdded) {
            window.addEventListener('click', context.boundClickOutside, { passive: true });
            window.addEventListener('pointerdown', context.boundOutsideInteractionStart, { passive: true });
            window.addEventListener('touchstart', context.boundOutsideInteractionStart, { passive: true });
            context.clickOutsideListenerAdded = true;
        }
    } else {
        removeOptionalPopupListeners();

        if (context.listenersAdded) {
            if (context.popUp) {
                if (context.handleTouchStart) {
                    context.popUp.removeEventListener('touchstart', context.handleTouchStart);
                }
                if (context.handleTouchMove) {
                    context.popUp.removeEventListener('touchmove', context.handleTouchMove);
                }
                if (context.handleTouchEnd) {
                    context.popUp.removeEventListener('touchend', context.handleTouchEnd);
                }
                const headerTouchTarget = context._popupHeaderTouchTarget || context.elements?.header;
                if (context.handleHeaderTouchMove && headerTouchTarget) {
                    headerTouchTarget.removeEventListener('touchmove', context.handleHeaderTouchMove);
                }
                if (context.handleHeaderTouchEnd && headerTouchTarget) {
                    headerTouchTarget.removeEventListener('touchend', context.handleHeaderTouchEnd);
                }
                context._popupHeaderTouchTarget = null;
                if (context.closeOnEscape) {
                    window.removeEventListener('keydown', context.closeOnEscape);
                }
            }
            context.listenersAdded = false;
        }
        
        if (context.clickOutsideListenerAdded) {
            window.removeEventListener('click', context.boundClickOutside);
            window.removeEventListener('pointerdown', context.boundOutsideInteractionStart);
            window.removeEventListener('touchstart', context.boundOutsideInteractionStart);
            context.clickOutsideListenerAdded = false;
        }
    }
}

function clearAllTimeouts(context) {
    ['hideContentTimeout', 'removeDomTimeout', 'closeTimeout', 'closeStartTimeout', 'closeActionTimeout'].forEach(timeout => {
        if (context[timeout]) {
            clearTimeout(context[timeout]);
            context[timeout] = null;
        }
    });

    clearPopupOpenCompletion(context);

    clearStandaloneTransitionCompletion(context);
    clearStandaloneTransitionFrame(context);
    clearStandaloneOpenFrames(context);
    clearStandalonePopUpCardPrewarm(context);

    if (context.popUp?._bubblePopupClassTimeout) {
        clearTimeout(context.popUp._bubblePopupClassTimeout);
        context.popUp._bubblePopupClassTimeout = null;
    }

    if (context.popUp?._bubblePopupClassFrame) {
        cancelAnimationFrame(context.popUp._bubblePopupClassFrame);
        context.popUp._bubblePopupClassFrame = null;
    }

}

function resetPopupToClosedState(context) {
    if (!context.popUp) {
        return;
    }

    clearAllTimeouts(context);
    updateListeners(context, false);

    context.popUp.classList.remove('is-popup-opened', 'is-opening', 'is-closing');
    context.popUp.classList.add('is-popup-closed');
    context.popUp.style.willChange = '';
    setPopupOpenSettled(context, false);
    clearFreshOutsideInteractionGuard(context);

    if (context.popUp.style.transition === 'none') {
        context.popUp.style.transition = '';
    }
}

function normalizePopupBeforeOpen(context) {
    const visuallyOpen = context.popUp?.classList?.contains('is-popup-opened');
    const isClosing = context.popUp?.classList?.contains('is-closing');
    const runtimeActive = popupState.activePopups.has(context);

    if (!isClosing && !(visuallyOpen && !runtimeActive)) {
        return false;
    }

    resetPopupToClosedState(context);
    return true;
}

// Close every popup except the one being opened.
function closeAllPopupsExcept(exceptContext) {
    let closedPopup = false;

    // Iterate a snapshot because closePopup mutates the Set.
    const popupsToClose = new Set(popupState.activePopups);
    for (const popupContext of popupsToClose) {
        if (popupContext !== exceptContext) {
            // Close the popup immediately and forcefully
            closedPopup = true;
            closePopup(popupContext, true);
        }
    }

    return closedPopup;
}

export function openPopup(context, instant = false) {
    normalizePopupBeforeOpen(context);

    if (context.popUp.classList.contains('is-popup-opened')) return;

    if (popupState.activePopups.has(context)) return;

    clearPendingHashRemoval();
    consumePendingPopupOpenSource(context);
    setPopupOpenSettled(context, false);

    if (context.isStandalonePopUp) {
        openStandalonePopup(context, instant);
        return;
    }

    clearAllTimeouts(context);
    
    const { popUp } = context;
    
    popupState.activePopups.add(context);

    popUp.style.willChange = 'transform';

    requestAnimationFrame(() => {
        if (!popupState.activePopups.has(context)) return;

        context.updatePopupColor?.();

        displayLegacyPopupContent(context);

        toggleBackdrop(context, true);
        updateListeners(context, true);

        requestAnimationFrame(() => {
            if (!popupState.activePopups.has(context)) return;

            window.__bubblePopupOpening = true;
            if (!context.verticalStack.contains(popUp)) {
                appendLegacyPopup(context, true);
            }
            window.__bubblePopupOpening = false;

            if (instant) {
                popUp.style.transition = 'none';
                popUp.classList.replace('is-popup-closed', 'is-popup-opened');
                requestAnimationFrame(() => { popUp.style.transition = ''; });
            } else {
                updatePopupClass(popUp, true);
            }

            schedulePopupOpenCompletion(context);
        });
    });
}

export function syncPopupOpenStateWithLocation(context, instant = true) {
    const currentHash = location.hash;
    if (!currentHash || context.config?.hash !== currentHash) {
        return false;
    }

    const runtimeActive = popupState.activePopups.has(context);
    const visuallyOpen = context.popUp?.classList?.contains('is-popup-opened');

    if (runtimeActive && visuallyOpen) {
        return false;
    }

    if (runtimeActive && !visuallyOpen) {
        popupState.activePopups.delete(context);
    }

    if (!runtimeActive && visuallyOpen) {
        resetPopupToClosedState(context);
    }

    openPopup(context, instant);
    return true;
}

export function closePopup(context, force = false) {
    if ((!context.popUp.classList.contains('is-popup-opened') && !force)) return;

    if (context.isStandalonePopUp) {
        closeStandalonePopup(context, force);
        return;
    }

    clearAllTimeouts(context);
    
    popupState.activePopups.delete(context);
    clearPopupOpenSource(context);

    updateListeners(context, false);
    toggleBodyScroll(false);

    context.popUp.style.willChange = 'transform';
    updatePopupClass(context.popUp, false);

    context.closeStartTimeout = setTimeout(() => {
        toggleBackdrop(context, false);

        context.closeStartTimeout = null;
    }, 17);

    context.removeDomTimeout = setTimeout(() => {
        context.popUp.style.willChange = '';
        appendLegacyPopup(context, false);
        hideLegacyPopupContent(context, 0);
        context.removeDomTimeout = null;
    }, popupState.animationDuration + 17);

    if (context.config.close_action) {
        context.closeActionTimeout = setTimeout(() => {
            context.closeActionTimeout = null;
            callAction(context, context.config, 'close_action');
        }, popupState.animationDuration + 17);
    }
}

const popupRegistry = new Map(); // hash → WeakRef<context>
let globalUrlListenerAdded = false;
let globalLastKnownHash = location.hash;
let globalLastHistoryLength = typeof history?.length === 'number' ? history.length : 0;

function isExplicitSameHashNavigationEvent(event, currentHash, previousHash, currentHistoryLength, previousHistoryLength) {
    if (!currentHash || currentHash !== previousHash) {
        return false;
    }

    if (event?.type !== 'location-changed') {
        return false;
    }

    if (currentHistoryLength > previousHistoryLength) {
        return true;
    }

    if (event?.detail?.replace === false) {
        return true;
    }

    return event?.detail?.source === 'bubble-popup-add-hash' && event?.detail?.sameHash === true;
}

function getRegisteredPopupContext(hash) {
    if (!hash) return null;
    const ref = popupRegistry.get(hash);
    return ref?.deref() || null;
}

export function unregisterPopupContext(context) {
    if (!context?._registeredHash) return;

    const existing = popupRegistry.get(context._registeredHash);
    if (existing?.deref() === context) {
        popupRegistry.delete(context._registeredHash);
    }

    context._registeredHash = null;
}

export function registerPopupContext(context) {
    const hash = context.config.hash;
    if (!hash) return;

    // Remove the old hash registration if the popup hash changed.
    if (context._registeredHash && context._registeredHash !== hash) {
        const existing = popupRegistry.get(context._registeredHash);
        if (existing?.deref() === context) {
            popupRegistry.delete(context._registeredHash);
        }
    }

    // Already registered — skip WeakRef allocation.
    if (context._registeredHash === hash) {
        const existing = popupRegistry.get(hash);
        if (existing?.deref() === context) return;
    }

    context._registeredHash = hash;
    popupRegistry.set(hash, new WeakRef(context));
    ensureGlobalUrlListener();
}

function ensureGlobalUrlListener() {
    if (globalUrlListenerAdded) return;
    globalUrlListenerAdded = true;

    const handler = (event) => {
        const currentHash = location.hash;
        const previousHash = globalLastKnownHash;
        const currentHistoryLength = typeof history?.length === 'number' ? history.length : globalLastHistoryLength;
        const previousHistoryLength = globalLastHistoryLength;

        globalLastKnownHash = currentHash;
        globalLastHistoryLength = currentHistoryLength;

        if (currentHash) {
            clearPendingHashRemoval();
        }
        let switchedBetweenPopups = false;

        // Clean orphaned popups in one pass.
        const activeSnapshot = new Set(popupState.activePopups);
        for (const ctx of activeSnapshot) {
            if (ctx.config.hash &&
                ctx.config.hash !== currentHash &&
                ctx.popUp.classList.contains('is-popup-opened')) {
                switchedBetweenPopups = true;
                closePopup(ctx);
            }
        }

        // WeakRef returns undefined once HA drops the element.
        const ref = popupRegistry.get(currentHash);
        const context = ref?.deref();
        if (context) {
            if (currentHash && currentHash !== previousHash) {
                context._previousPopupHash = getRegisteredPopupContext(previousHash) ? previousHash : '';
            }

            const isPopupOpen = context.popUp.classList.contains('is-popup-opened');
            const runtimeActive = popupState.activePopups.has(context);
            const isClosing = context.popUp.classList.contains('is-closing');

            if (isPopupOpen && runtimeActive && !isClosing && isPopupOpenSettled(context)) {
                const timeSinceDialogClosed = Date.now() - dialogState.recentlyClosedTimestamp;
                const dialogRecentlyClosed = timeSinceDialogClosed < dialogState.protectionWindow;

                if (!dialogRecentlyClosed && isExplicitSameHashNavigationEvent(event, currentHash, previousHash, currentHistoryLength, previousHistoryLength)) {
                    removeHash(true);
                    return;
                }
            }

            switchedBetweenPopups = closeAllPopupsExcept(context) || switchedBetweenPopups;

            if (switchedBetweenPopups) {
                requestAnimationFrame(() => {
                    if (location.hash !== currentHash) return;
                    context._standaloneOpenImmediateFrame = true;
                    openPopup(context);
                });
            } else {
                openPopup(context);
            }
        } else {
            if (ref) popupRegistry.delete(currentHash);

            requestAnimationFrame(() => {
                for (const ctx of popupState.activePopups) {
                    if (ctx.popUp.classList.contains('is-popup-opened') &&
                        ctx.config.hash &&
                        ctx.config.hash !== currentHash) {
                        closePopup(ctx);
                    }
                }
            });
        }
    };

    window.addEventListener('location-changed', handler);
    window.addEventListener('popstate', handler);
}

export function cleanupPopupRuntime(context) {
    clearAllTimeouts(context);
    updateListeners(context, false);

    if (context.observer) {
        context.observer.disconnect();
        context.observer = null;
    }

    popupState.activePopups.delete(context);
    clearPopupOpenSource(context);

    try {
        if (context.popUp?.classList?.contains('is-popup-opened')) {
            toggleBackdrop(context, false);
        }
    } catch (_) {
        // no-op
    }

    unregisterPopupContext(context);
    releaseBackdropContext(context);
    toggleBodyScroll(false);
}
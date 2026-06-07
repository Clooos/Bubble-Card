import { getBackdrop, hideExistingBackdrop, releaseBackdropContext } from "./backdrop.js";
import { callAction } from "../../tools/tap-actions.js";
import { toggleBodyScroll } from "../../tools/utils.js";
import { handlePopUpCards, setStandalonePopUpCardsActive, suspendStandalonePopUpCards } from "./cards/index.js";
import { appendLegacyPopup, displayLegacyPopupContent, hideLegacyPopupContent } from './legacy.js';

function resetPopupScroll(context) {
    const container = context.elements?.popUpContainer;
    if (container) {
        container.scrollTop = 0;
    }
}

const popupState = {
  animationDuration: 300,
  activePopups: new Set(),
  entityTriggeredPopup: null,
  pendingHashRemovalTimeout: null,
  pendingHashRemovalHash: '',
};

const outsideCloseFallbackDelay = 150;
const popupQuickOpenAnimationDurationMs = 140;
const popupBlurWillChangeDurationMs = 450;
const popupRuntimeTimeoutKeys = ['hideContentTimeout', 'removeDomTimeout', 'closeTimeout', 'closeStartTimeout', 'closeActionTimeout', '_popupQuickOpenAnimationTimeout', '_popupBlurWillChangeTimeout'];
const standaloneOpenFrameKeys = ['_standaloneOpenFrame', '_standaloneCardSyncFrame', '_standalonePostOpenContentWakeFrame'];
const maxPostOpenContentWakeTargets = 16;

export const POPUP_MODE_DEFAULT = 'default';
export const POPUP_MODE_FIT_CONTENT = 'fit-content';
export const POPUP_MODE_CENTERED = 'centered';
export const POPUP_MODE_ADAPTIVE_DIALOG = 'adaptive-dialog';

export const POPUP_STYLE_BUBBLE = 'bubble';
export const POPUP_STYLE_CLASSIC = 'classic';
export const POPUP_PERFORMANCE_MODE_DEFAULT = 'default';
export const POPUP_PERFORMANCE_MODE_PERFORMANCE = 'performance';

// Transition and timing helpers
function clearQuickOpenAnimation(context) {
    context?.popUp?.classList?.remove('is-fast-opening');
}
function triggerQuickOpenAnimation(context) {
    if (!context?.popUp?.classList) return;
    clearQuickOpenAnimation(context);
    context.popUp.classList.add('is-fast-opening');
    context._popupQuickOpenAnimationTimeout = setTimeout(() => {
        context._popupQuickOpenAnimationTimeout = null;
        clearQuickOpenAnimation(context);
    }, popupQuickOpenAnimationDurationMs);
}
function clearPopupOpenCompletion(context) {
    clearContextTimeout(context, '_popupOpenCompletionTimeout');
    clearContextFrame(context, '_popupOpenCompletionFrame');
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
function scheduleStandaloneFrame(context, frameKey, callback) {
    clearContextFrame(context, frameKey);
    context[frameKey] = requestAnimationFrame(() => {
        context[frameKey] = null;
        callback();
    });
}

function isAdaptiveDialogRenderedAsBottomSheet() {
    const viewportWidth = typeof window?.innerWidth === 'number' ? window.innerWidth : Number.POSITIVE_INFINITY;
    const viewportHeight = typeof window?.innerHeight === 'number' ? window.innerHeight : Number.POSITIVE_INFINITY;
    return !(viewportWidth >= 871 && viewportHeight >= 501);
}

function shouldDelayHashRoutedStandaloneBottomSheetOpen(context) {
    const popupMode = getPopupMode(context?.config);

    if (popupMode === POPUP_MODE_DEFAULT) {
        return true;
    }

    if (popupMode === POPUP_MODE_ADAPTIVE_DIALOG) {
        return isAdaptiveDialogRenderedAsBottomSheet();
    }

    return false;
}

function shouldDeferColdStandaloneContentUntilAfterOpen(context) {
    return getPopupMode(context?.config) === POPUP_MODE_DEFAULT &&
        getPopupPerformanceMode(context?.config) === POPUP_PERFORMANCE_MODE_PERFORMANCE;
}

function shouldPopupWillChangeIncludeOpacity(context) {
    const popupMode = getPopupMode(context?.config);

    if (popupMode === POPUP_MODE_CENTERED) {
        return true;
    }

    if (popupMode === POPUP_MODE_ADAPTIVE_DIALOG) {
        return !isAdaptiveDialogRenderedAsBottomSheet();
    }

    return false;
}

function armPopupWillChange(context) {
    const popUp = context?.popUp;
    if (!popUp?.style) {
        return;
    }

    popUp.style.willChange = shouldPopupWillChangeIncludeOpacity(context)
        ? 'transform, opacity'
        : 'transform';
}

function clearPopupWillChange(context) {
    if (!context?.popUp?.style) {
        return;
    }

    context.popUp.style.willChange = '';
}

function getStandalonePhase2SettleSignature(context) {
    const container = context?.elements?.popUpContainer;
    if (!container) {
        return '';
    }

    const scrollHeight = typeof container.scrollHeight === 'number' ? container.scrollHeight : 0;
    const clientHeight = typeof container.clientHeight === 'number' ? container.clientHeight : 0;
    const hasCardsContainer = context?._cardsContainer ? 1 : 0;

    return `${scrollHeight}:${clientHeight}:${hasCardsContainer}`;
}

function scheduleStandalonePhase2(context, callback, options = {}) {
    const minimumFrames = Math.max(1, options?.minimumFrames ?? 1);
    let remainingUnstableExtraFrames = Math.max(0, options?.unstableExtraFrames ?? 0);
    let previousSignature = typeof options?.initialSignature === 'string'
        ? options.initialSignature
        : null;
    let sawInstability = false;

    const run = (remainingFrames) => {
        scheduleStandaloneFrame(context, '_standaloneCardSyncFrame', () => {
            if (previousSignature !== null || remainingUnstableExtraFrames > 0) {
                const nextSignature = getStandalonePhase2SettleSignature(context);
                if (previousSignature !== null && nextSignature !== previousSignature) {
                    sawInstability = true;
                }
                previousSignature = nextSignature;
            }

            if (remainingFrames > 1) {
                run(remainingFrames - 1);
                return;
            }

            if (sawInstability && remainingUnstableExtraFrames > 0) {
                sawInstability = false;
                remainingUnstableExtraFrames -= 1;
                run(1);
                return;
            }

            callback();
        });
    };

    run(minimumFrames);
}

function scheduleStandaloneCardSync(context) {
    scheduleStandaloneFrame(context, '_standaloneCardSyncFrame', () => {
        if (!popupState.activePopups.has(context)) return;
        setPopupOpeningMarker(context, true);
        try {
            syncStandalonePopupContent(context);
        } catch (error) {
            rollbackStandalonePopupOpen(context, error);
            return;
        } finally {
            setPopupOpeningMarker(context, false);
        }
    });
}

function waitForStandalonePopupTransition(context, callback) {
    clearStandaloneTransitionCompletion(context);
    let callbackDone = false;

    const handleTransitionEnd = (event) => {
        if (event.target !== context.popUp) return;
        if (event.propertyName && event.propertyName !== 'transform') return;
        clearStandaloneTransitionCompletion(context);
        // Defer callback to next frame so expensive work (scrollHeight read,
        // style recalc) happens after the transition paint — avoids the ~40ms
        // synchronous cost that blocks the transition frame.
        requestAnimationFrame(() => {
            if (!callbackDone) {
                callbackDone = true;
                callback();
            }
        });
    };
    context._standaloneTransitionEndHandler = handleTransitionEnd;
    context.popUp.addEventListener('transitionend', handleTransitionEnd);
    context._standaloneTransitionFallback = setTimeout(() => {
        clearStandaloneTransitionCompletion(context);
        if (!callbackDone) {
            callbackDone = true;
            callback();
        }
    }, popupState.animationDuration + 60);
}
function setStandalonePopupState(popUp, open, transitionClass = null) {
    popUp.classList.remove('is-opening', 'is-closing');
    if (transitionClass) popUp.classList.add(transitionClass);
    popUp.classList.toggle('is-popup-opened', open);
    popUp.classList.toggle('is-popup-closed', !open);
}
function startStandalonePopupTransition(context, open, onComplete, switchClosing = false) {
    const { popUp } = context;
    clearStandaloneTransitionCompletion(context);
    if (popUp.style.transition === 'none') popUp.style.transition = '';

    const isAlreadyOpenForClose = !open &&
        popUp.classList.contains('is-popup-opened') &&
        !popUp.classList.contains('is-popup-closed') &&
        !popUp.classList.contains('is-closing') &&
        !popUp.classList.contains('is-opening');

    if (open) {
        setStandalonePopupState(popUp, false);
    } else if (!isAlreadyOpenForClose) {
        popUp.classList.remove('is-opening', 'is-closing');
        popUp.classList.add('is-popup-opened');
        popUp.classList.remove('is-popup-closed');
    }

    if (open || !isAlreadyOpenForClose) {
        // Defer layout read to next frame to avoid reflow during the CSS transition
        requestAnimationFrame(() => {
            popUp.getBoundingClientRect();
        });
    }

    waitForStandalonePopupTransition(context, onComplete);
    if (open) {
        setStandalonePopupState(popUp, true, 'is-opening');
        return;
    }
    popUp.classList.toggle('is-switch-closing', switchClosing);
    popUp.classList.add('is-closing');
}

export function getPopupMode(config) {
    if (config?.popup_mode === POPUP_MODE_FIT_CONTENT) return POPUP_MODE_FIT_CONTENT;
    if (config?.popup_mode === POPUP_MODE_CENTERED) return POPUP_MODE_CENTERED;
    if (config?.popup_mode === POPUP_MODE_ADAPTIVE_DIALOG) return POPUP_MODE_ADAPTIVE_DIALOG;
    return POPUP_MODE_DEFAULT;
}

export function getPopupStyle(config) {
    if (config?.popup_style === POPUP_STYLE_CLASSIC) return POPUP_STYLE_CLASSIC;
    return POPUP_STYLE_BUBBLE;
}

export function getPopupPerformanceMode(config) {
    if (config?.performance_mode === POPUP_PERFORMANCE_MODE_PERFORMANCE) {
        return POPUP_PERFORMANCE_MODE_PERFORMANCE;
    }

    return POPUP_PERFORMANCE_MODE_DEFAULT;
}

export function hasPopupBottomOffset(config) {
    const mode = getPopupMode(config);
    return (mode === POPUP_MODE_FIT_CONTENT || mode === POPUP_MODE_ADAPTIVE_DIALOG) && Boolean(config?.with_bottom_offset);
}

export function hasPopupFullWidthOnMobile(config) {
    const mode = getPopupMode(config);
    return mode === POPUP_MODE_CENTERED && Boolean(config?.full_width_on_mobile);
}

export function syncPopupModeClasses(popUp, config) {
    if (!popUp?.classList) {
        return POPUP_MODE_DEFAULT;
    }

    const popupMode = getPopupMode(config);
    popUp.classList.toggle('popup-mode-fit-content', popupMode === POPUP_MODE_FIT_CONTENT);
    popUp.classList.toggle('popup-mode-centered', popupMode === POPUP_MODE_CENTERED);
    popUp.classList.toggle('popup-mode-adaptive-dialog', popupMode === POPUP_MODE_ADAPTIVE_DIALOG);
    popUp.classList.toggle('popup-mode-with-bottom-offset', hasPopupBottomOffset(config));
    popUp.classList.toggle('popup-mode-full-width-on-mobile', hasPopupFullWidthOnMobile(config));
    return popupMode;
}

export function syncPopupStyleClasses(popUp, config) {
    if (!popUp?.classList) return;
    popUp.classList.toggle('popup-style-classic', getPopupStyle(config) === POPUP_STYLE_CLASSIC);
}

export function syncPopupPerformanceModeClasses(popUp, config) {
    if (!popUp?.classList) {
        return POPUP_PERFORMANCE_MODE_DEFAULT;
    }

    const performanceMode = getPopupPerformanceMode(config);
    popUp.classList.toggle('popup-performance-default', performanceMode === POPUP_PERFORMANCE_MODE_DEFAULT);
    popUp.classList.toggle('popup-performance-performance', performanceMode === POPUP_PERFORMANCE_MODE_PERFORMANCE);
    return performanceMode;
}

function setPopupDatasetFlag(context, key, enabled) {
    if (!context?.popUp?.dataset) {
        return;
    }

    if (enabled) {
        context.popUp.dataset[key] = 'true';
        return;
    }

    delete context.popUp.dataset[key];
}

function clearContextTimeout(context, key) {
    if (!context?.[key]) {
        return;
    }

    clearTimeout(context[key]);
    context[key] = null;
}

function clearContextFrame(context, key) {
    if (!context?.[key]) {
        return;
    }

    cancelAnimationFrame(context[key]);
    context[key] = null;
}

function clearContextTimeouts(context, keys) {
    keys.forEach((key) => clearContextTimeout(context, key));
}

function clearContextFrames(context, keys) {
    keys.forEach((key) => clearContextFrame(context, key));
}

function resolvePopupHostElements(context) {
    if (context.sectionRow && context.sectionRowContainer) {
        return;
    }

    if (!context.sectionRow && typeof context.closest === 'function') {
        context.sectionRow = context.closest('hui-card');

        // Fallback for environments where closest() cannot traverse shadow DOM
        // boundaries (e.g. iOS WebKit on HA 2026.5.x sections layout).
        if (!context.sectionRow) {
            let node = context;
            while (node) {
                if (node.tagName?.toLowerCase() === 'hui-card') {
                    context.sectionRow = node;
                    break;
                }
                if (node.parentElement) {
                    node = node.parentElement;
                } else {
                    const root = node.getRootNode?.();
                    // Duck-type shadow root: has a `host` property, is not the document.
                    node = (root && root !== document && 'host' in root) ? root.host : null;
                }
            }
        }
    }

    if (!context.sectionRowContainer) {
        const hostContainer = context.sectionRow?.closest?.('.card') || context.sectionRow?.parentElement || null;
        context.sectionRowContainer = hostContainer?.classList?.contains?.('card') ? hostContainer : null;
    }
}

function applyPopupHostLayout(context, {
    rowHidden = false,
    containerHidden = false,
    containerPosition = '',
} = {}) {
    resolvePopupHostElements(context);

    const { sectionRow, sectionRowContainer } = context;

    if (sectionRow?.tagName?.toLowerCase() === 'hui-card') {
        sectionRow.hidden = rowHidden;
        sectionRow.style.display = rowHidden ? 'none' : '';
    }

    if (sectionRowContainer?.classList?.contains('card')) {
        sectionRowContainer.style.display = containerHidden ? 'none' : '';
        sectionRowContainer.style.position = containerPosition;
    }
}

export function keepPopupHostMounted(context) {
    applyPopupHostLayout(context, { containerPosition: 'absolute' });
}

export function restorePopupHostLayout(context) {
    applyPopupHostLayout(context);
}

export function suspendPopupHostLayout(context) {
    applyPopupHostLayout(context, { rowHidden: true, containerHidden: true });
}

function clearPendingHashRemoval() {
    if (popupState.pendingHashRemovalTimeout) {
        clearTimeout(popupState.pendingHashRemovalTimeout);
        popupState.pendingHashRemovalTimeout = null;
    }

    popupState.pendingHashRemovalHash = '';
}

function setPopupOpeningMarker(context, opening) {
    setPopupDatasetFlag(context, 'bubblePopupOpening', opening);
}

function setPopupBackdropBlurGuard(context, enabled) {
    setPopupDatasetFlag(context, 'bubblePopupBlurGuard', enabled);
}

function setPopupBackdropBlurWillChange(context, enabled) {
    setPopupDatasetFlag(context, 'bubblePopupBlurWillChange', enabled);
}

function clearPopupBackdropBlurWillChange(context) {
    clearContextTimeout(context, '_popupBlurWillChangeTimeout');
    setPopupBackdropBlurWillChange(context, false);
}

function armPopupBackdropBlurWillChange(context) {
    if (!context?.popUp) {
        return;
    }

    clearPopupBackdropBlurWillChange(context);
    setPopupBackdropBlurWillChange(context, true);

    context._popupBlurWillChangeTimeout = setTimeout(() => {
        context._popupBlurWillChangeTimeout = null;
        setPopupBackdropBlurWillChange(context, false);
    }, popupBlurWillChangeDurationMs);
}

function clearPopupBackdropBlurGuardRelease(context) {
    clearContextFrame(context, '_popupBackdropBlurGuardFrame');
}

function schedulePopupBackdropBlurGuardRelease(context) {
    clearPopupBackdropBlurGuardRelease(context);

    context._popupBackdropBlurGuardFrame = requestAnimationFrame(() => {
        context._popupBackdropBlurGuardFrame = requestAnimationFrame(() => {
            context._popupBackdropBlurGuardFrame = null;

            if (!popupState.activePopups.has(context) || !context.popUp?.classList?.contains('is-popup-opened')) {
                return;
            }

            armPopupBackdropBlurWillChange(context);
            setPopupBackdropBlurGuard(context, false);
        });
    });
}

function setPopupOpenSettled(context, settled) {
    context._popupOpenSettled = settled;
    context._popupOpenSettledAt = settled ? Date.now() : 0;
}

function setPopupOpenInProgress(context, inProgress) {
    context._popupOpenInProgress = inProgress === true;
}

function isPopupOpenInProgress(context) {
    return context?._popupOpenInProgress === true;
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

function isScrollableWakeTarget(element) {
    if (!element || typeof element.dispatchEvent !== 'function') {
        return false;
    }

    try {
        return (typeof element.scrollHeight === 'number' && typeof element.clientHeight === 'number' && element.scrollHeight > element.clientHeight) ||
            (typeof element.scrollWidth === 'number' && typeof element.clientWidth === 'number' && element.scrollWidth > element.clientWidth);
    } catch (_) {
        return false;
    }
}

function addUniqueContentWakeTarget(targets, element) {
    if (!isScrollableWakeTarget(element) || targets.includes(element)) {
        return;
    }

    targets.push(element);
}

function collectScrollableContentWakeTargets(root, targets = [], visited = new Set()) {
    if (!root || visited.has(root) || targets.length >= maxPostOpenContentWakeTargets) {
        return targets;
    }

    visited.add(root);
    addUniqueContentWakeTarget(targets, root);

    if (root.shadowRoot) {
        collectScrollableContentWakeTargets(root.shadowRoot, targets, visited);
    }

    if (typeof root.querySelectorAll !== 'function') {
        return targets;
    }

    try {
        root.querySelectorAll('*').forEach((element) => {
            if (targets.length >= maxPostOpenContentWakeTargets) {
                return;
            }

            addUniqueContentWakeTarget(targets, element);

            if (element?.shadowRoot) {
                collectScrollableContentWakeTargets(element.shadowRoot, targets, visited);
            }
        });
    } catch (_) {}

    return targets;
}

function wakeStandalonePopupScrollableContent(context) {
    if (!context?.isStandalonePopUp || !popupState.activePopups.has(context)) {
        return;
    }

    context._standalonePostOpenContentWakeNeeded = false;

    if (!Array.isArray(context.config?.cards) || context.config.cards.length === 0) {
        return;
    }

    const roots = [context.elements?.popUpContainer];
    if (Array.isArray(context._managedCards)) {
        roots.push(...context._managedCards);
    } else {
        roots.push(context.popUp);
    }

    const targets = [];
    roots.forEach((root) => collectScrollableContentWakeTargets(root, targets));

    targets.forEach((target) => {
        try {
            target.dispatchEvent(new Event('scroll'));
        } catch (_) {}
    });
}

function scheduleStandalonePostOpenContentWake(context) {
    if (!context?.isStandalonePopUp) {
        return;
    }

    clearContextFrame(context, '_standalonePostOpenContentWakeFrame');
    context._standalonePostOpenContentWakeFrame = requestAnimationFrame(() => {
        context._standalonePostOpenContentWakeFrame = null;

        if (!popupState.activePopups.has(context) || !context.popUp?.classList?.contains('is-popup-opened')) {
            return;
        }

        wakeStandalonePopupScrollableContent(context);
    });
}

// Deduplicate Bubble Card's own synthetic no-hash step used during popup close.
if (!window.__bubbleLocationDeduperAdded) {
    try {
        let pendingHashBase = null;
        let pendingTimestamp = 0;
        let guardNextNoHash = false;
        let pendingPreviousHash = "";
        let lastKnownHash = window.location.hash || "";

        window.addEventListener('location-changed', (event) => {
            const href = window.location.href;
            const hasHash = !!window.location.hash;
            const base = href.split('#')[0];
            const source = event?.detail?.source || '';

            if (hasHash) {
                pendingHashBase = base;
                pendingTimestamp = Date.now();
                guardNextNoHash = false;
                pendingPreviousHash = lastKnownHash || "";
                lastKnownHash = window.location.hash;
                return;
            }

            if (guardNextNoHash) {
                guardNextNoHash = false;
                pendingHashBase = null;
                pendingPreviousHash = "";
                lastKnownHash = window.location.hash || "";
                return;
            }

            if (
                source === 'bubble-popup-remove-hash' &&
                pendingHashBase &&
                base === pendingHashBase &&
                (Date.now() - pendingTimestamp) < 1500 &&
                !pendingPreviousHash
            ) {
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
    }
}

const dialogNode = new Set(['HA-DIALOG', 'HA-MORE-INFO-DIALOG', 'HA-DIALOG-DATE-PICKER']);

// Suppress the outside click released by a just-closed HA dialog.
const dialogState = {
    recentlyClosedTimestamp: 0,
    protectionWindow: 500 // ms to protect after dialog close
};

if (!window.__bubbleDialogListenerAdded) {
    window.addEventListener('dialog-closed', () => {
        dialogState.recentlyClosedTimestamp = Date.now();
    }, { capture: true });
    
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
    if (!context.popUp.classList.contains('is-popup-opened')) return;

    if (!isPopupOpenSettled(context)) {
        return;
    }

    const timeSinceDialogClosed = Date.now() - dialogState.recentlyClosedTimestamp;
    if (timeSinceDialogClosed < dialogState.protectionWindow) {
        return;
    }

    if (isEventInsidePopupOrDialog(event)) {
        return;
    }

    if (context._awaitFreshOutsideInteraction && !context._allowOutsideCloseFromInteraction) {
        const timeSincePopupSettled = Date.now() - (context._popupOpenSettledAt || 0);
        if (timeSincePopupSettled < outsideCloseFallbackDelay) {
            return;
        }

        context._allowOutsideCloseFromInteraction = true;
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

    if (direct) {
        const newURL = window.location.href.split('#')[0];
        history.replaceState(null, "", newURL);
        window.dispatchEvent(createLocationChangedEvent({
            source: 'bubble-popup-remove-hash',
            direct: true,
        }));
        return true;
    }

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
        } catch (_) {}
    }

    return removeHash(true);
}

function toggleBackdrop(context, show) {
    const { showBackdrop, hideBackdrop } = getBackdrop(context);
    if (show) {
        showBackdrop(context);
    } else {
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

function shouldHideOrphanedBackdrop() {
    if (popupState.activePopups.size > 0) {
        return false;
    }

    const currentHash = location.hash;
    if (!currentHash) {
        return true;
    }

    return !getRegisteredPopupContext(currentHash);
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
    setPopupOpenInProgress(context, false);
    setPopupOpenSettled(context, false);
    clearFreshOutsideInteractionGuard(context);
    clearPopupBackdropBlurGuardRelease(context);
    setPopupBackdropBlurGuard(context, false);

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
    setPopupOpenInProgress(context, false);
    clearPopupWillChange(context);

    if (!context.popUp.classList.contains('is-popup-opened') || !popupState.activePopups.has(context)) {
        return;
    }

    if (!syncCachedPopupScrollableState(context) && !context._popupScrollableSyncFrame) {
        context._popupScrollableSyncFrame = requestAnimationFrame(() => {
            context._popupScrollableSyncFrame = null;
            if (popupState.activePopups.has(context)) {
                syncPopupScrollableState(context);
            }
        });
    }

    setPopupOpenSettled(context, true);
    armFreshOutsideInteractionGuard(context);

    schedulePopupBodyScrollLock(context);
    schedulePopupBackdropBlurGuardRelease(context);

    if (context.isStandalonePopUp && !context._pendingPostOpenCardSync && context._standalonePostOpenContentWakeNeeded) {
        scheduleStandalonePostOpenContentWake(context);
    }

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

function schedulePopupBodyScrollLock(context) {
    clearContextFrame(context, '_popupBodyScrollLockFrame');

    // Popup-to-popup navigation keeps body scroll locked, so there is no global
    // body mutation competing with the first visible post-open frame. Cold opens
    // still pay that cost; keep it one extra frame later than standalone card
    // sync so the shell/content can settle first.
    const deferredFrames = context?.isStandalonePopUp ? 2 : 1;

    const scheduleLock = (remainingFrames) => {
        context._popupBodyScrollLockFrame = requestAnimationFrame(() => {
            if (remainingFrames > 1) {
                scheduleLock(remainingFrames - 1);
                return;
            }

            context._popupBodyScrollLockFrame = null;

            if (!popupState.activePopups.has(context) || !context.popUp?.classList?.contains('is-popup-opened')) {
                return;
            }

            toggleBodyScroll(true);
        });
    };

    scheduleLock(deferredFrames);
}

function applyPopupScrollableState(context) {
    const container = context.elements?.popUpContainer;
    if (!container) {
        return false;
    }

    const isScrollable = container.scrollHeight > container.clientHeight;
    context._cachedPopupScrollableState = isScrollable;
    container.classList.toggle('is-scrollable', isScrollable);

    return true;
}

function syncPopupScrollableState(context) {
    const container = context.elements?.popUpContainer;
    if (!container) {
        return false;
    }

    // Batch scrollHeight read with clientHeight to avoid layout thrashing.
    // When called during a transition (is-opening/is-closing on the popup
    // shell), defer the read to the next frame so it doesn't compete with the
    // transition-start layout work.
    const isTransitioning = context.popUp?.classList?.contains('is-opening') ||
                            context.popUp?.classList?.contains('is-closing');
    if (isTransitioning && !context._popupScrollableSyncFrame && typeof requestAnimationFrame === 'function') {
        context._popupScrollableSyncFrame = requestAnimationFrame(() => {
            context._popupScrollableSyncFrame = null;
            if (popupState.activePopups.has(context)) {
                applyPopupScrollableState(context);
            }
        });
        return false;
    }

    return applyPopupScrollableState(context);
}

function syncCachedPopupScrollableState(context) {
    const container = context.elements?.popUpContainer;
    if (!container || typeof context?._cachedPopupScrollableState !== 'boolean') {
        return false;
    }

    container.classList.toggle('is-scrollable', context._cachedPopupScrollableState);
    return true;
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

function hasPrimedStandalonePopupContent(context) {
    return !!(
        context?._cardsContainer
    );
}

function canUseInstantStandaloneSwitch(context) {
    return getPopupMode(context?.config) === POPUP_MODE_CENTERED;
}

function finalizeStandalonePopupOpen(context) {
    setPopupOpeningMarker(context, false);
    context.popUp.classList.remove('is-opening', 'is-closing', 'is-switch-closing');
    completePopupOpen(context);

    if (context._pendingPostOpenCardSync) {
        context._pendingPostOpenCardSync = false;
        scheduleStandaloneCardSync(context);
    }
}

function runStandalonePostCloseCleanup(context) {
    setStandalonePopUpCardsActive(context, false);
    handlePopUpCards(context);
    suspendStandalonePopUpCards(context);

    if (context.config.background_update) {
        context.popUp.style.display = 'none';
    }

    suspendPopupHostLayout(context);

    if (context.config.close_action && !hasIncomingPopupNavigation(context)) {
        callAction(context, context.config, 'close_action');
    }
}

function scheduleStandalonePostCloseCleanup(context) {
    clearContextFrame(context, '_standalonePostCloseCleanupFrame');

    context._standalonePostCloseCleanupFrame = requestAnimationFrame(() => {
        context._standalonePostCloseCleanupFrame = null;

        if (popupState.activePopups.has(context)) {
            return;
        }

        runStandalonePostCloseCleanup(context);
    });
}

function finalizeStandalonePopupClose(context) {
    const { popUp } = context;
    const incomingPopupNavigation = hasIncomingPopupNavigation(context);

    setPopupOpeningMarker(context, false);
    clearPopupBackdropBlurWillChange(context);
    popUp.classList.remove('is-opening', 'is-closing', 'is-switch-closing');
    popUp.classList.remove('is-popup-opened');
    popUp.classList.add('is-popup-closed');
    clearPopupInlineTransform(context);
    clearPopupWillChange(context);

    resetPopupScroll(context);

    if (!incomingPopupNavigation) {
        toggleBodyScroll(false);
    }

    scheduleStandalonePostCloseCleanup(context);
}

function rollbackStandalonePopupOpen(context, error = null) {
    if (error) {
        console.error(error);
    }

    const wasOnlyActivePopup = popupState.activePopups.size === 1 && popupState.activePopups.has(context);

    context._pendingPostOpenCardSync = false;
    context._standalonePostOpenContentWakeNeeded = false;
    popupState.activePopups.delete(context);
    clearPopupOpenSource(context);
    clearPopupBackdropBlurWillChange(context);
    resetPopupToClosedState(context);
    setStandalonePopUpCardsActive(context, false);

    if (context.config.background_update) {
        context.popUp.style.display = 'none';
    }

    suspendPopupHostLayout(context);

    if (wasOnlyActivePopup) {
        hideExistingBackdrop();
        toggleBodyScroll(false);
    }
}

function openStandalonePopup(context, instant = false) {
    clearAllTimeouts(context);

    const { popUp } = context;
    popupState.activePopups.add(context);

    const hadPrimedStandaloneContent = hasPrimedStandalonePopupContent(context);
    const hasStandaloneCards = Array.isArray(context.config.cards) && context.config.cards.length > 0;
    context._standalonePostOpenContentWakeNeeded = false;
    if (!hadPrimedStandaloneContent) {
        context._cachedPopupScrollableState = undefined;
    }

    armPopupWillChange(context);

    const deferBackdropHandoffUntilPhase2 = context._standaloneOpenImmediateFrame === true;
    const delayHashRoutedAnimationUntilSettled = context._standaloneHashRoutedColdOpen === true &&
        !deferBackdropHandoffUntilPhase2 &&
        shouldDelayHashRoutedStandaloneBottomSheetOpen(context);

    context._standaloneOpenImmediateFrame = false;
    context._standaloneHashRoutedColdOpen = false;

    if (!instant && deferBackdropHandoffUntilPhase2 && canUseInstantStandaloneSwitch(context) && hadPrimedStandaloneContent) {
        instant = true;
    }

    if (instant) {
        try {
            if (!deferBackdropHandoffUntilPhase2) {
                toggleBackdrop(context, true);
            }

            if (!deferBackdropHandoffUntilPhase2 && context._standaloneNeedsShellRefresh && typeof context.refreshPopupHeader === 'function') {
                context.refreshPopupHeader();
            }

            if (context._standaloneNeedsShellRefresh && typeof context.refreshPopupShell === 'function') {
                context.refreshPopupShell();
            }
            keepPopupHostMounted(context);
            context.updatePopupColor?.();
            popUp.style.display = '';
            popUp.style.visibility = '';
            updateListeners(context, true);
            // Defer updateListeners for instant opens to the next frame.
            scheduleStandaloneFrame(context, '_popupListenersFrame', () => {
                if (!popupState.activePopups.has(context)) return;
                updateListeners(context, true);
            });

            setStandalonePopUpCardsActive(context, true);
            setPopupOpeningMarker(context, true);
            try {
                syncStandalonePopupContent(context);
                if (!hadPrimedStandaloneContent && hasStandaloneCards) {
                    context._standalonePostOpenContentWakeNeeded = true;
                }
            } finally {
                setPopupOpeningMarker(context, false);
            }
            setStandalonePopupState(popUp, true);
            toggleBodyScroll(true);
            triggerQuickOpenAnimation(context);
            requestAnimationFrame(() => {
                try {
                    if (deferBackdropHandoffUntilPhase2 && popupState.activePopups.has(context)) {
                        toggleBackdrop(context, true);
                    }

                    finalizeStandalonePopupOpen(context);
                } catch (error) {
                    rollbackStandalonePopupOpen(context, error);
                }
            });
        } catch (error) {
            setPopupOpeningMarker(context, false);
            rollbackStandalonePopupOpen(context, error);
        }
        return;
    }

    let phase1ContentPrimed = false;

    const phase1 = () => {
        try {
            if (!popupState.activePopups.has(context)) return;

            if (context._standaloneNeedsShellRefresh && typeof context.refreshPopupHeader === 'function') {
                context.refreshPopupHeader();
            }

            keepPopupHostMounted(context);
            if (context._standaloneNeedsShellRefresh && typeof context.refreshPopupShell === 'function') {
                context.refreshPopupShell();
            }
            context.updatePopupColor?.();
            popUp.style.display = '';
            popUp.style.visibility = '';
            setStandalonePopUpCardsActive(context, true);

            // Restore or prime content one frame before the animation so Lit microtask
            // updates settle before the transition frame starts.
            if (hasStandaloneCards) {
                setPopupOpeningMarker(context, true);
                try {
                    if (!shouldDeferColdStandaloneContentUntilAfterOpen(context)) {
                        syncStandalonePopupContent(context);
                        phase1ContentPrimed = true;
                        if (!hadPrimedStandaloneContent) {
                            context._standalonePostOpenContentWakeNeeded = true;
                        }
                    }
                } finally {
                    setPopupOpeningMarker(context, false);
                }
            }

            // Read scrollable state one frame early so phase 2 has no layout reads
            // competing with the CSS transition start. Skip the read for cold
            // default-mode opens where content is still deferred — the container
            // is empty and the forced reflow would be expensive and misleading.
            if (!syncCachedPopupScrollableState(context) && phase1ContentPrimed) {
                syncPopupScrollableState(context);
            }

            // Set the popup to its closed position so the browser paints this frame
            // before phase 2 flips it to is-popup-opened (no getBoundingClientRect needed).
            clearStandaloneTransitionCompletion(context);
            if (popUp.style.transition === 'none') popUp.style.transition = '';
            setStandalonePopupState(popUp, false);

            const shouldTrackSettleInstability = delayHashRoutedAnimationUntilSettled && phase1ContentPrimed;
            scheduleStandalonePhase2(context, phase2, {
                minimumFrames: delayHashRoutedAnimationUntilSettled ? 2 : 1,
                unstableExtraFrames: shouldTrackSettleInstability ? 1 : 0,
                initialSignature: shouldTrackSettleInstability
                    ? getStandalonePhase2SettleSignature(context)
                    : null,
            });
        } catch (error) {
            rollbackStandalonePopupOpen(context, error);
        }
    };

    const phase2 = () => {
        try {
            if (!popupState.activePopups.has(context)) return;

            // Defer updateListeners to the next frame to avoid layout reads during
            // the CSS transition. Adding/removing listeners is cheap but can trigger
            // reflows on some devices.
            scheduleStandaloneFrame(context, '_popupListenersFrame', () => {
                if (!popupState.activePopups.has(context)) return;
                updateListeners(context, true);
            });

            toggleBackdrop(context, true);

            if (!phase1ContentPrimed) {
                context._pendingPostOpenCardSync = true;
            }

            waitForStandalonePopupTransition(context, () => {
                try {
                    finalizeStandalonePopupOpen(context);
                } catch (error) {
                    rollbackStandalonePopupOpen(context, error);
                }
            });
            setStandalonePopupState(popUp, true, 'is-opening');
        } catch (error) {
            setPopupOpeningMarker(context, false);
            rollbackStandalonePopupOpen(context, error);
        }
    };

    phase1();
}

function closeStandalonePopup(context, force = false) {
    if ((!context.popUp.classList.contains('is-popup-opened') && !force)) return;

    clearAllTimeouts(context);

    const incomingPopupNavigation = hasIncomingPopupNavigation(context);

    popupState.activePopups.delete(context);
    clearPopupOpenSource(context);

    updateListeners(context, false);

    if (incomingPopupNavigation) {
        clearPopupWillChange(context);
    } else {
        armPopupWillChange(context);
    }
    startStandalonePopupTransition(context, false, () => finalizeStandalonePopupClose(context), incomingPopupNavigation);

    if (!incomingPopupNavigation) {
        clearContextFrame(context, '_standaloneCloseBackdropFrame');
        context._standaloneCloseBackdropFrame = requestAnimationFrame(() => {
            context._standaloneCloseBackdropFrame = null;

            if (popupState.activePopups.has(context) || hasIncomingPopupNavigation(context)) {
                return;
            }

            toggleBackdrop(context, false);
        });
    }
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
        applyPopupState();
        return;
    }

    if (popUp.style.transition === 'none') {
        popUp.style.transition = '';
    }

    popUp.classList.remove('is-opening', 'is-closing');
    popUp.classList.add('is-popup-opened');
    popUp.classList.remove('is-popup-closed');
    popUp.getBoundingClientRect();

    popUp._bubblePopupClassFrame = requestAnimationFrame(() => {
        popUp._bubblePopupClassFrame = null;
        applyPopupState();
    });
}

function toggleEventListener(target, eventName, handler, enabled, options) {
    if (!target || !handler) {
        return;
    }

    target[enabled ? 'addEventListener' : 'removeEventListener'](eventName, handler, options);
}

function syncEventListeners(listeners, enabled) {
    listeners.forEach(([target, eventName, handler, options]) => {
        toggleEventListener(target, eventName, handler, enabled, options);
    });
}

function clearPopupInlineTransform(context) {
    if (!context.popUp?.style) {
        return;
    }

    context.popUp.style.transform = '';
}

function ensurePopupListenerBindings(context) {
    if (!context.boundClickOutside) {
        context.boundClickOutside = (event) => clickOutside(event, context);
    }

    if (!context.boundOutsideInteractionStart) {
        context.boundOutsideInteractionStart = (event) => noteOutsideInteractionStart(event, context);
    }

    if (!context.resetCloseTimeout) {
        context.resetCloseTimeout = () => resetCloseTimeout(context);
    }
}

function getPopupBaseListeners(context) {
    return [
        [context.popUp, 'touchstart', context.handleTouchStart, { passive: true }],
        [context.popUp, 'touchmove', context.handleTouchMove, { passive: true }],
        [context.popUp, 'touchend', context.handleTouchEnd, { passive: true }],
        [context.popUp, 'touchcancel', context.handleTouchCancel, { passive: true }],
        [context._popupHeaderTouchTarget, 'touchmove', context.handleHeaderTouchMove, { passive: false }],
        [context._popupHeaderTouchTarget, 'touchend', context.handleHeaderTouchEnd, { passive: true }],
        [context._popupHeaderTouchTarget, 'touchcancel', context.handleHeaderTouchCancel, { passive: true }],
        [window, 'keydown', context.closeOnEscape, { passive: true }],
    ];
}

function syncOptionalPopupListeners(context, enabled) {
    if (!context.popUp) {
        context.autoCloseListenersAdded = false;
        context.closeOnClickListenerAdded = false;
        context._popupHeaderTouchTarget = null;
        return;
    }

    const autoCloseEnabled = enabled && !!context.config.auto_close;
    if (context.autoCloseListenersAdded !== autoCloseEnabled) {
        syncEventListeners([
            [context.popUp, 'touchstart', context.resetCloseTimeout, { passive: true }],
            [context.popUp, 'click', context.resetCloseTimeout, { passive: true }],
        ], autoCloseEnabled);
        context.autoCloseListenersAdded = autoCloseEnabled;
    }

    const closeOnClickEnabled = enabled && !!context.config.close_on_click;
    if (context.closeOnClickListenerAdded !== closeOnClickEnabled) {
        toggleEventListener(context.popUp, 'click', removeHash, closeOnClickEnabled, { passive: true });
        context.closeOnClickListenerAdded = closeOnClickEnabled;
    }

    if (closeOnClickEnabled) {
        context.popUp.dataset.closeOnClick = 'true';
        return;
    }

    delete context.popUp.dataset.closeOnClick;
}

function syncOutsideInteractionListeners(context, enabled) {
    if (context.clickOutsideListenerAdded === enabled) {
        return;
    }

    syncEventListeners([
        [window, 'click', context.boundClickOutside, { passive: true }],
        [window, 'pointerdown', context.boundOutsideInteractionStart, { passive: true }],
        [window, 'touchstart', context.boundOutsideInteractionStart, { passive: true }],
    ], enabled);
    context.clickOutsideListenerAdded = enabled;
}

export function updateListeners(context, add) {
    ensurePopupListenerBindings(context);

    const shouldAddListeners = !!(add && !context.editor && context.popUp);
    if (context.listenersAdded !== shouldAddListeners) {
        context._popupHeaderTouchTarget = shouldAddListeners
            ? (context.elements?.headerContainer || context.elements?.header || null)
            : context._popupHeaderTouchTarget;
        syncEventListeners(getPopupBaseListeners(context), shouldAddListeners);
        context.listenersAdded = shouldAddListeners;

        if (!shouldAddListeners) {
            context._popupHeaderTouchTarget = null;
        }
    }

    syncOptionalPopupListeners(context, shouldAddListeners);
    syncOutsideInteractionListeners(context, shouldAddListeners);
}

function clearAllTimeouts(context) {
    clearContextTimeouts(context, popupRuntimeTimeoutKeys);
    clearQuickOpenAnimation(context);

    clearPopupOpenCompletion(context);
    clearPopupBackdropBlurGuardRelease(context);
    clearContextFrame(context, '_popupBodyScrollLockFrame');

    clearStandaloneTransitionCompletion(context);
    clearContextFrame(context, '_standaloneCloseBackdropFrame');
    clearContextFrame(context, '_standalonePostCloseCleanupFrame');
    clearContextFrames(context, standaloneOpenFrameKeys);

    clearContextFrame(context, '_popupScrollableSyncFrame');

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
    setPopupOpeningMarker(context, false);
    clearPopupBackdropBlurWillChange(context);

    context.popUp.classList.remove('is-popup-opened', 'is-opening', 'is-closing', 'is-switch-closing');
    context.popUp.classList.add('is-popup-closed');
    clearPopupInlineTransform(context);
    clearPopupWillChange(context);
    setPopupBackdropBlurGuard(context, false);
    if (!context.isStandalonePopUp && !context.editor && !context.config?.background_update) {
        appendLegacyPopup(context, false);
        hideLegacyPopupContent(context, 0);
        context.popUp.style.visibility = 'hidden';
    }
    setPopupOpenInProgress(context, false);
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
    const openInProgress = isPopupOpenInProgress(context);

    if (runtimeActive && !visuallyOpen && openInProgress) {
        return false;
    }

    if (!isClosing && !(visuallyOpen && !runtimeActive) && !(runtimeActive && !visuallyOpen)) {
        return false;
    }

    if (runtimeActive && !visuallyOpen && context.isStandalonePopUp) {
        rollbackStandalonePopupOpen(context);
        return true;
    }

    if (runtimeActive) {
        popupState.activePopups.delete(context);
        clearPopupOpenSource(context);
    }

    resetPopupToClosedState(context);
    return true;
}

function closeAllPopupsExcept(exceptContext) {
    let closedPopup = false;

    const popupsToClose = new Set(popupState.activePopups);
    for (const popupContext of popupsToClose) {
        if (popupContext !== exceptContext) {
            closedPopup = true;
            closePopup(popupContext, true);
        }
    }

    return closedPopup;
}

export function openPopup(context, instant = false) {
    normalizePopupBeforeOpen(context);

    if (context.popUp.classList.contains('is-popup-opened')) {
        context._standaloneHashRoutedColdOpen = false;
        clearPopupWillChange(context);
        return;
    }

    if (popupState.activePopups.has(context)) {
        context._standaloneHashRoutedColdOpen = false;
        clearPopupWillChange(context);
        return;
    }

    // Reset scroll position when reopening the popup
    resetPopupScroll(context);

    clearPopupInlineTransform(context);
    clearPendingHashRemoval();
    consumePendingPopupOpenSource(context);
    setPopupOpenInProgress(context, true);
    setPopupOpenSettled(context, false);
    setPopupBackdropBlurGuard(context, true);

    if (context.isStandalonePopUp) {
        openStandalonePopup(context, instant);
        return;
    }

    clearAllTimeouts(context);
    
    const { popUp } = context;
    popupState.activePopups.add(context);

    armPopupWillChange(context);

    requestAnimationFrame(() => {
        if (!popupState.activePopups.has(context)) return;

        context.updatePopupColor?.();
        // refreshPopupShell includes header refresh + changeStyle so custom styles
        // are applied immediately on open rather than waiting for the next hass update.
        (context.refreshPopupShell ?? context.refreshPopupHeader)?.();

        displayLegacyPopupContent(context);
        toggleBackdrop(context, true);
        updateListeners(context, true);

        requestAnimationFrame(() => {
            if (!popupState.activePopups.has(context)) return;

            setPopupOpeningMarker(context, true);
            try {
                appendLegacyPopup(context, true);
            } finally {
                setPopupOpeningMarker(context, false);
            }

            if (instant) {
                popUp.classList.replace('is-popup-closed', 'is-popup-opened');
                triggerQuickOpenAnimation(context);
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
    const openInProgress = isPopupOpenInProgress(context);

    if (runtimeActive && (visuallyOpen || openInProgress)) {
        return false;
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

    armPopupWillChange(context);
    updatePopupClass(context.popUp, false);
    toggleBackdrop(context, false);

    context.removeDomTimeout = setTimeout(() => {
        clearPopupWillChange(context);
        appendLegacyPopup(context, false);
        hideLegacyPopupContent(context, 0);
        context.removeDomTimeout = null;
    }, popupState.animationDuration);

    updateListeners(context, false);
    toggleBodyScroll(false);

    if (context.config.close_action && !hasIncomingPopupNavigation(context)) {
        callAction(context, context.config, 'close_action');
    }
}

const popupRegistry = new Map(); // hash → WeakRef<context>
let globalUrlListenerAdded = false;
let globalLastKnownHash = location.hash;

function isExplicitSameHashNavigationEvent(event, currentHash, previousHash) {
    if (!currentHash || currentHash !== previousHash) {
        return false;
    }

    if (event?.type !== 'location-changed') {
        return false;
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

function scheduleHashRoutedStandaloneOpen(context, currentHash, switchedBetweenPopups) {
    if (!switchedBetweenPopups) {
        armPopupWillChange(context);
    }

    requestAnimationFrame(() => {
        if (location.hash !== currentHash) {
            context._standaloneHashRoutedColdOpen = false;
            clearPopupWillChange(context);
            return;
        }

        context._standaloneHashRoutedColdOpen = !switchedBetweenPopups;

        if (switchedBetweenPopups) {
            context._standaloneOpenImmediateFrame = true;
        }

        openPopup(
            context,
            switchedBetweenPopups && canUseInstantStandaloneSwitch(context) && hasPrimedStandalonePopupContent(context)
        );
    });
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

    if (context._registeredHash && context._registeredHash !== hash) {
        const existing = popupRegistry.get(context._registeredHash);
        if (existing?.deref() === context) {
            popupRegistry.delete(context._registeredHash);
        }
    }

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

        globalLastKnownHash = currentHash;

        if (currentHash) {
            clearPendingHashRemoval();
        }
        let switchedBetweenPopups = false;

        const activeSnapshot = new Set(popupState.activePopups);
        for (const ctx of activeSnapshot) {
            if (ctx.config.hash && ctx.config.hash !== currentHash) {
                switchedBetweenPopups = true;
                closePopup(ctx, true);
            }
        }

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

                if (!dialogRecentlyClosed && isExplicitSameHashNavigationEvent(event, currentHash, previousHash)) {
                    removeHash(true);
                    return;
                }
            }

            switchedBetweenPopups = closeAllPopupsExcept(context) || switchedBetweenPopups;

            if (context.isStandalonePopUp) {
                scheduleHashRoutedStandaloneOpen(context, currentHash, switchedBetweenPopups);
            } else {
                openPopup(context);
            }
        } else {
            if (ref) popupRegistry.delete(currentHash);

            requestAnimationFrame(() => {
                for (const ctx of popupState.activePopups) {
                    if (ctx.config.hash && ctx.config.hash !== currentHash) {
                        closePopup(ctx, true);
                    }
                }
            });
        }
    };

    window.addEventListener('location-changed', handler);
    window.addEventListener('popstate', handler);
    window.addEventListener('hashchange', handler);
}

export function cleanupPopupRuntime(context) {
    clearAllTimeouts(context);
    updateListeners(context, false);
    setPopupOpeningMarker(context, false);
    const visuallyOpen = context.popUp?.classList?.contains('is-popup-opened');
    const inEditor = !!context.editor;

    if (visuallyOpen || inEditor) {
        restorePopupHostLayout(context);
    } else {
        suspendPopupHostLayout(context);
    }

    if (context.observer) {
        context.observer.disconnect();
        context.observer = null;
    }

    popupState.activePopups.delete(context);
    clearPopupOpenSource(context);

    try {
        if (visuallyOpen) {
            toggleBackdrop(context, false);
        }
    } catch (_) {}

    unregisterPopupContext(context);
    releaseBackdropContext(context);

    if (!visuallyOpen && shouldHideOrphanedBackdrop()) {
        hideExistingBackdrop();
    }

    toggleBodyScroll(false);
}
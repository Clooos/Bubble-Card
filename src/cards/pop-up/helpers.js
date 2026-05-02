import { getBackdrop, hideExistingBackdrop, releaseBackdropContext } from "./backdrop.js";
import { callAction } from "../../tools/tap-actions.js";
import { toggleBodyScroll } from "../../tools/utils.js";
import { handlePopUpCards, restoreDetachedPopUpCards, restoreWarmStandalonePopUpCards, setStandalonePopUpCardsActive, suspendStandalonePopUpCards, suspendWarmStandalonePopUpCards } from "./cards/index.js";
import { appendLegacyPopup, displayLegacyPopupContent, hideLegacyPopupContent } from './legacy.js';

const popupState = {
  animationDuration: 300,
  activePopups: new Set(),
  entityTriggeredPopup: null,
  pendingHashRemovalTimeout: null,
  pendingHashRemovalHash: '',
};

const outsideCloseFallbackDelay = 150;
const popupQuickOpenAnimationDurationMs = 140;
const standaloneWarmCardRetentionMs = 3200;
const popupRuntimeTimeoutKeys = ['hideContentTimeout', 'removeDomTimeout', 'closeTimeout', 'closeStartTimeout', 'closeActionTimeout', '_popupQuickOpenAnimationTimeout'];
const standaloneOpenFrameKeys = ['_standaloneOpenFrame', '_standaloneCardSyncFrame'];

export const POPUP_MODE_DEFAULT = 'default';
export const POPUP_MODE_FIT_CONTENT = 'fit-content';
export const POPUP_MODE_CENTERED = 'centered';
export const POPUP_MODE_ADAPTIVE_DIALOG = 'adaptive-dialog';

export const POPUP_STYLE_BUBBLE = 'bubble';
export const POPUP_STYLE_CLASSIC = 'classic';

// Prewarm + warm-cache runtime
const popupPrewarmStorageKey = 'bubble-card-popup-prewarm-v1';
const maxPopupPrewarmEntries = 6;
const lowTierPopupPrewarmBudget = 1;
const defaultPopupPrewarmBudget = 2;
const popupPrewarmAbortEvents = ['pointerdown', 'touchstart', 'keydown', 'wheel'];
const prewarmState = {
    activePath: '', remainingBudget: null, scheduled: false,
    aborted: false, idleCallbackId: null, fallbackTimeout: null, abortListenersAdded: false,
};
const warmCacheState = { activePath: '', refs: [] };

function getPopupPrewarmPath() {
    try { return location.pathname || new URL(location.href, window?.location?.origin || 'http://localhost').pathname || ''; } catch (_) { return ''; }
}
function getPopupPrewarmStorage() {
    try { return window?.localStorage ?? null; } catch (_) { return null; }
}
function getPopupPrewarmNavigator() {
    try { return typeof navigator !== 'undefined' ? navigator : window?.navigator ?? null; } catch (_) { return null; }
}
function getPopupPrewarmBudget() {
    const nav = getPopupPrewarmNavigator();
    const con = nav?.connection || nav?.mozConnection || nav?.webkitConnection || null;
    const mem = typeof nav?.deviceMemory === 'number' ? nav.deviceMemory : null;
    const cpu = typeof nav?.hardwareConcurrency === 'number' ? nav.hardwareConcurrency : null;
    return (con?.saveData || (mem !== null && mem <= 4) || (cpu !== null && cpu <= 4)) ? lowTierPopupPrewarmBudget : defaultPopupPrewarmBudget;
}
function readPrewarmEntries() {
    const storage = getPopupPrewarmStorage();
    if (!storage) return [];
    try {
        const parsed = JSON.parse(storage.getItem(popupPrewarmStorageKey) || 'null');
        return Array.isArray(parsed) ? parsed.filter((e) => e && typeof e.path === 'string' && typeof e.hash === 'string' && typeof e.openedAt === 'number') : [];
    } catch (_) { return []; }
}
function writePrewarmEntries(entries) {
    const storage = getPopupPrewarmStorage();
    if (!storage) return;
    try { storage.setItem(popupPrewarmStorageKey, JSON.stringify(entries.slice(0, maxPopupPrewarmEntries))); } catch (_) {}
}
function recordPrewarmUsage(context) {
    if (!context?.isStandalonePopUp || !Array.isArray(context.config?.cards) || !context.config.cards.length || context.config?.background_update || !context.config?.hash) return;
    const path = getPopupPrewarmPath();
    if (!path) return;
    writePrewarmEntries([{ path, hash: context.config.hash, openedAt: Date.now() }, ...readPrewarmEntries().filter((e) => !(e.path === path && e.hash === context.config.hash))]);
}
function clearPrewarmSchedule() {
    if (prewarmState.idleCallbackId !== null && typeof window?.cancelIdleCallback === 'function') {
        try { window.cancelIdleCallback(prewarmState.idleCallbackId); } catch (_) {}
    }
    if (prewarmState.fallbackTimeout !== null) clearTimeout(prewarmState.fallbackTimeout);
    prewarmState.idleCallbackId = null;
    prewarmState.fallbackTimeout = null;
    prewarmState.scheduled = false;
}
function removePrewarmAbortListeners() {
    if (!prewarmState.abortListenersAdded || typeof window === 'undefined') return;
    popupPrewarmAbortEvents.forEach((e) => window.removeEventListener(e, abortPrewarm, { passive: true }));
    prewarmState.abortListenersAdded = false;
}
function resetPrewarmState() {
    clearPrewarmSchedule();
    removePrewarmAbortListeners();
    prewarmState.activePath = '';
    prewarmState.remainingBudget = null;
    prewarmState.aborted = false;
}
function syncPrewarmPathState() {
    const currentPath = getPopupPrewarmPath();
    if (prewarmState.activePath === currentPath) return currentPath;
    clearPrewarmSchedule();
    removePrewarmAbortListeners();
    prewarmState.activePath = currentPath;
    prewarmState.remainingBudget = null;
    prewarmState.aborted = false;
    return currentPath;
}
function ensurePrewarmAbortListeners() {
    if (prewarmState.abortListenersAdded || typeof window === 'undefined') return;
    popupPrewarmAbortEvents.forEach((e) => window.addEventListener(e, abortPrewarm, { passive: true }));
    prewarmState.abortListenersAdded = true;
}
function abortPrewarm() {
    prewarmState.aborted = true;
    clearPrewarmSchedule();
    removePrewarmAbortListeners();
}
function canPrewarmContext(context) {
    return !!(
        context?.isStandalonePopUp && Array.isArray(context.config?.cards) && context.config.cards.length > 0 &&
        context.popUp && !context.editor && !context.detectedEditor && !context.config?.background_update &&
        context.config?.hash && context.config.hash !== location.hash && !popupState.activePopups.has(context) &&
        !context._popupPrewarmDone && !context._popupPrewarmFailed && !context._popupPrewarmInProgress &&
        !hasPrimedStandalonePopupContent(context)
    );
}
function getNextPrewarmContext() {
    const currentPath = syncPrewarmPathState();
    if (!currentPath) return null;
    for (const entry of readPrewarmEntries()) {
        if (entry.path !== currentPath) continue;
        const ctx = getRegisteredPopupContext(entry.hash);
        if (canPrewarmContext(ctx)) return ctx;
    }
    return null;
}
function primeStandaloneContext(context) {
    if (!canPrewarmContext(context)) return false;
    context._popupPrewarmInProgress = true;
    try {
        setStandalonePopUpCardsActive(context, true);
        handlePopUpCards(context);
        syncPopupScrollableState(context);
        setStandalonePopUpCardsActive(context, false);
        if (!suspendWarmStandalonePopUpCards(context)) suspendStandalonePopUpCards(context);
        context._popupPrewarmDone = true;
        context._popupPrewarmPrimed = true;
        return true;
    } catch (error) {
        context._popupPrewarmFailed = true;
        context._popupPrewarmPrimed = false;
        setStandalonePopUpCardsActive(context, false);
        console.error('Bubble Card: popup prewarm failed', error);
        return false;
    } finally {
        context._popupPrewarmInProgress = false;
    }
}
function runPrewarm(deadline) {
    prewarmState.scheduled = false;
    prewarmState.idleCallbackId = null;
    prewarmState.fallbackTimeout = null;
    if (prewarmState.aborted) return;
    if (prewarmState.remainingBudget === null) prewarmState.remainingBudget = getPopupPrewarmBudget();
    if (prewarmState.remainingBudget <= 0) { removePrewarmAbortListeners(); return; }
    if (deadline?.timeRemaining?.() < 8 && !deadline.didTimeout) { schedulePrewarm(); return; }
    const ctx = getNextPrewarmContext();
    if (!ctx) return;
    if (primeStandaloneContext(ctx)) prewarmState.remainingBudget -= 1;
    if (prewarmState.remainingBudget > 0) schedulePrewarm();
    else removePrewarmAbortListeners();
}
function schedulePrewarm() {
    syncPrewarmPathState();
    if (prewarmState.aborted || prewarmState.scheduled) return;
    if (prewarmState.remainingBudget === null) prewarmState.remainingBudget = getPopupPrewarmBudget();
    if (prewarmState.remainingBudget <= 0 || !getNextPrewarmContext()) return;
    ensurePrewarmAbortListeners();
    prewarmState.scheduled = true;
    if (typeof window?.requestIdleCallback === 'function') {
        prewarmState.idleCallbackId = window.requestIdleCallback(runPrewarm, { timeout: 1200 });
        return;
    }
    prewarmState.fallbackTimeout = setTimeout(() => runPrewarm(), 350);
}
function pruneWarmCacheRefs() {
    for (let i = warmCacheState.refs.length - 1; i >= 0; i--) {
        if (!warmCacheState.refs[i]?.deref?.()) warmCacheState.refs.splice(i, 1);
    }
}
function removeWarmCacheContext(context) {
    if (!context) return;
    for (let i = warmCacheState.refs.length - 1; i >= 0; i--) {
        const cached = warmCacheState.refs[i]?.deref?.();
        if (!cached || cached === context) warmCacheState.refs.splice(i, 1);
    }
}
function coldSuspendWarmCacheContext(context) {
    if (!context) return;
    clearStandaloneWarmCardSuspend(context);
    if (!popupState.activePopups.has(context) && context._standaloneWarmCardsSuspended) suspendStandalonePopUpCards(context);
}
function clearWarmCache(forceColdSuspend = false) {
    pruneWarmCacheRefs();
    const refs = [...warmCacheState.refs];
    warmCacheState.refs.length = 0;
    if (forceColdSuspend) refs.forEach((ref) => coldSuspendWarmCacheContext(ref?.deref?.()));
}
function syncWarmCachePath() {
    const currentPath = getPopupPrewarmPath();
    if (warmCacheState.activePath === currentPath) return currentPath;
    clearWarmCache(true);
    warmCacheState.activePath = currentPath;
    return currentPath;
}
function retainWarmCacheContext(context) {
    const currentPath = syncWarmCachePath();
    if (!currentPath || !context) return false;
    const budget = getPopupPrewarmBudget();
    if (budget <= 0) return false;
    removeWarmCacheContext(context);
    pruneWarmCacheRefs();
    warmCacheState.refs.unshift(new WeakRef(context));
    while (warmCacheState.refs.length > budget) coldSuspendWarmCacheContext(warmCacheState.refs.pop()?.deref?.());
    return true;
}

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
function shouldDeferColdStandaloneContentUntilAfterOpen(context) {
    return getPopupMode(context?.config) === POPUP_MODE_DEFAULT;
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
    if (transitionClass) popUp.classList.add(transitionClass);
    popUp.classList.toggle('is-popup-opened', open);
    popUp.classList.toggle('is-popup-closed', !open);
}
function startStandalonePopupTransition(context, open, onComplete, switchClosing = false) {
    const { popUp } = context;
    clearStandaloneTransitionCompletion(context);
    if (popUp.style.transition === 'none') popUp.style.transition = '';
    if (open) {
        setStandalonePopupState(popUp, false);
    } else {
        popUp.classList.remove('is-opening', 'is-closing');
        popUp.classList.add('is-popup-opened');
        popUp.classList.remove('is-popup-closed');
    }
    popUp.getBoundingClientRect();
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

// Deduplicate the synthetic no-hash step used during popup close.
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
    context.popUp.style.willChange = '';

    if (!context.popUp.classList.contains('is-popup-opened') || !popupState.activePopups.has(context)) {
        return;
    }

    syncPopupScrollableState(context);

    setPopupOpenSettled(context, true);
    armFreshOutsideInteractionGuard(context);
    context._popupPrewarmPrimed = false;
    recordPrewarmUsage(context);

    clearContextFrame(context, '_popupBodyScrollLockFrame');
    context._popupBodyScrollLockFrame = requestAnimationFrame(() => {
        context._popupBodyScrollLockFrame = null;

        if (!popupState.activePopups.has(context) || !context.popUp?.classList?.contains('is-popup-opened')) {
            return;
        }

        toggleBodyScroll(true);
    });
    schedulePopupBackdropBlurGuardRelease(context);

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

function syncPopupScrollableState(context) {
    const container = context.elements?.popUpContainer;
    if (!container) {
        return false;
    }

    const isScrollable = container.scrollHeight > container.clientHeight;
    context._cachedPopupScrollableState = isScrollable;
    container.classList.toggle('is-scrollable', isScrollable);
    return true;
}

function syncCachedPopupScrollableState(context) {
    const container = context.elements?.popUpContainer;
    if (!container || typeof context?._cachedPopupScrollableState !== 'boolean') {
        return false;
    }

    container.classList.toggle('is-scrollable', context._cachedPopupScrollableState);
    return true;
}

function clearStandaloneWarmCardSuspend(context) {
    clearContextTimeout(context, '_standaloneWarmCardDetachTimeout');
}

function scheduleStandaloneWarmCardSuspend(context) {
    clearStandaloneWarmCardSuspend(context);

    context._standaloneWarmCardDetachTimeout = setTimeout(() => {
        context._standaloneWarmCardDetachTimeout = null;

        if (popupState.activePopups.has(context)) {
            return;
        }

        suspendStandalonePopUpCards(context);
    }, standaloneWarmCardRetentionMs);
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
        context?._standaloneWarmCardsSuspended ||
        context?._detachedCardsFragment?.firstChild ||
        context?._cardsContainer
    );
}

function canUseInstantStandaloneSwitch(context) {
    return getPopupMode(context?.config) === POPUP_MODE_CENTERED && !context?._popupPrewarmPrimed;
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

function runStandalonePostCloseCleanup(context, preserveCardCache = false) {
    setStandalonePopUpCardsActive(context, false);
    handlePopUpCards(context);

    if (preserveCardCache && suspendWarmStandalonePopUpCards(context)) {
        if (!retainWarmCacheContext(context)) {
            scheduleStandaloneWarmCardSuspend(context);
        }
    } else {
        clearStandaloneWarmCardSuspend(context);
        removeWarmCacheContext(context);
        suspendStandalonePopUpCards(context);
    }

    if (context.config.background_update) {
        context.popUp.style.display = 'none';
    }

    suspendPopupHostLayout(context);

    if (context.config.close_action) {
        callAction(context, context.config, 'close_action');
    }
}

function scheduleStandalonePostCloseCleanup(context, preserveCardCache = false) {
    clearContextFrame(context, '_standalonePostCloseCleanupFrame');

    context._standalonePostCloseCleanupFrame = requestAnimationFrame(() => {
        context._standalonePostCloseCleanupFrame = null;

        if (popupState.activePopups.has(context)) {
            return;
        }

        runStandalonePostCloseCleanup(context, preserveCardCache);
    });
}

function finalizeStandalonePopupClose(context) {
    const { popUp } = context;
    const incomingPopupNavigation = hasIncomingPopupNavigation(context);

    setPopupOpeningMarker(context, false);
    popUp.classList.remove('is-opening', 'is-closing', 'is-switch-closing');
    popUp.classList.remove('is-popup-opened');
    popUp.classList.add('is-popup-closed');
    clearPopupInlineTransform(context);
    popUp.style.willChange = '';

    if (!incomingPopupNavigation) {
        toggleBodyScroll(false);
    }

    scheduleStandalonePostCloseCleanup(context, incomingPopupNavigation);
}

function rollbackStandalonePopupOpen(context, error = null) {
    if (error) {
        console.error(error);
    }

    const wasOnlyActivePopup = popupState.activePopups.size === 1 && popupState.activePopups.has(context);

    context._pendingPostOpenCardSync = false;
    popupState.activePopups.delete(context);
    clearPopupOpenSource(context);
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
    removeWarmCacheContext(context);

    const { popUp } = context;
    popupState.activePopups.add(context);

    popUp.style.willChange = 'transform';

    const deferBackdropHandoffUntilPhase2 = context._standaloneOpenImmediateFrame === true;
    context._standaloneOpenImmediateFrame = false;

    if (!instant && deferBackdropHandoffUntilPhase2 && canUseInstantStandaloneSwitch(context) && hasPrimedStandalonePopupContent(context)) {
        instant = true;
    }

    if (!deferBackdropHandoffUntilPhase2) {
        toggleBackdrop(context, true);
    }

    if (!deferBackdropHandoffUntilPhase2 && context._standaloneNeedsShellRefresh && typeof context.refreshPopupHeader === 'function') {
        context.refreshPopupHeader();
    }

    if (instant) {
        let warmCardsRestored = false;
        try {
            if (context._standaloneNeedsShellRefresh && typeof context.refreshPopupShell === 'function') {
                context.refreshPopupShell();
            }
            keepPopupHostMounted(context);
            context.updatePopupColor?.();
            popUp.style.display = '';
            popUp.style.visibility = '';
            updateListeners(context, true);
            setStandalonePopUpCardsActive(context, true);
            setPopupOpeningMarker(context, true);
            try {
                if (context._detachedCardsFragment?.firstChild) {
                    restoreDetachedPopUpCards(context);
                    warmCardsRestored = restoreWarmStandalonePopUpCards(context);
                } else if (restoreWarmStandalonePopUpCards(context)) {
                    warmCardsRestored = true;
                }

                if (!warmCardsRestored) {
                    syncStandalonePopupContent(context);
                }
            } finally {
                setPopupOpeningMarker(context, false);
            }
            setStandalonePopupState(popUp, true);
            triggerQuickOpenAnimation(context);
            requestAnimationFrame(() => {
                try {
                    if (warmCardsRestored) {
                        scheduleStandaloneCardSync(context);
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
    let phase1WarmCardsRestored = false;

    const phase1 = () => {
        try {
            if (!popupState.activePopups.has(context)) return;

            if (deferBackdropHandoffUntilPhase2 && context._standaloneNeedsShellRefresh && typeof context.refreshPopupHeader === 'function') {
                context.refreshPopupHeader();
            }

            keepPopupHostMounted(context);
            if (context._standaloneNeedsShellRefresh && typeof context.refreshPopupShell === 'function') {
                context.refreshPopupShell();
            }
            context.updatePopupColor?.();
            popUp.style.display = '';
            popUp.style.visibility = '';
            updateListeners(context, true);
            setStandalonePopUpCardsActive(context, true);

            // Restore or prime content one frame before the animation so Lit microtask
            // updates settle before the transition frame starts.
            const hasStandaloneCards = Array.isArray(context.config.cards) && context.config.cards.length > 0;
            if (hasStandaloneCards) {
                setPopupOpeningMarker(context, true);
                try {
                    if (context._detachedCardsFragment?.firstChild) {
                        restoreDetachedPopUpCards(context);
                        phase1WarmCardsRestored = restoreWarmStandalonePopUpCards(context);
                        phase1ContentPrimed = true;
                    } else if (restoreWarmStandalonePopUpCards(context)) {
                        phase1WarmCardsRestored = true;
                        phase1ContentPrimed = true;
                    } else if (!context._cardsContainer && !shouldDeferColdStandaloneContentUntilAfterOpen(context)) {
                        syncStandalonePopupContent(context);
                        phase1ContentPrimed = true;
                    }
                } finally {
                    setPopupOpeningMarker(context, false);
                }
            }

            // Read scrollable state one frame early so phase 2 has no layout reads
            // competing with the CSS transition start.
            if (!syncCachedPopupScrollableState(context)) {
                syncPopupScrollableState(context);
            }

            // Set the popup to its closed position so the browser paints this frame
            // before phase 2 flips it to is-popup-opened (no getBoundingClientRect needed).
            clearStandaloneTransitionCompletion(context);
            if (popUp.style.transition === 'none') popUp.style.transition = '';
            setStandalonePopupState(popUp, false);

            scheduleStandaloneFrame(context, '_standaloneCardSyncFrame', phase2);
        } catch (error) {
            rollbackStandalonePopupOpen(context, error);
        }
    };

    const phase2 = () => {
        try {
            if (!popupState.activePopups.has(context)) return;

            if (deferBackdropHandoffUntilPhase2) {
                toggleBackdrop(context, true);
            }

            if (!phase1ContentPrimed || phase1WarmCardsRestored) {
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

    if (deferBackdropHandoffUntilPhase2) {
        phase1();
        return;
    }

    scheduleStandaloneFrame(context, '_standaloneOpenFrame', phase1);
}

function closeStandalonePopup(context, force = false) {
    if ((!context.popUp.classList.contains('is-popup-opened') && !force)) return;

    clearAllTimeouts(context);

    const incomingPopupNavigation = hasIncomingPopupNavigation(context);

    popupState.activePopups.delete(context);
    clearPopupOpenSource(context);

    updateListeners(context, false);

    context.popUp.style.willChange = incomingPopupNavigation ? '' : 'transform';
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
        popUp.getBoundingClientRect();
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
        [context.popUp, 'touchmove', context.handleTouchMove, { passive: false }],
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
    clearStandaloneWarmCardSuspend(context);
    clearContextFrame(context, '_popupBodyScrollLockFrame');

    clearStandaloneTransitionCompletion(context);
    clearContextFrame(context, '_standaloneCloseBackdropFrame');
    clearContextFrame(context, '_standalonePostCloseCleanupFrame');
    clearContextFrames(context, standaloneOpenFrameKeys);

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

    context.popUp.classList.remove('is-popup-opened', 'is-opening', 'is-closing', 'is-switch-closing');
    context.popUp.classList.add('is-popup-closed');
    clearPopupInlineTransform(context);
    context.popUp.style.willChange = '';
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

    if (context.popUp.classList.contains('is-popup-opened')) return;

    if (popupState.activePopups.has(context)) return;

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
        recordPrewarmUsage(context);
    popupState.activePopups.add(context);

    popUp.style.willChange = 'transform';

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

    context.popUp.style.willChange = 'transform';
    updatePopupClass(context.popUp, false);
    toggleBackdrop(context, false);

    context.removeDomTimeout = setTimeout(() => {
        context.popUp.style.willChange = '';
        appendLegacyPopup(context, false);
        hideLegacyPopupContent(context, 0);
        context.removeDomTimeout = null;
    }, popupState.animationDuration);

    updateListeners(context, false);
    toggleBodyScroll(false);

    if (context.config.close_action) {
        callAction(context, context.config, 'close_action');
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

    removeWarmCacheContext(context);

    const existing = popupRegistry.get(context._registeredHash);
    if (existing?.deref() === context) {
        popupRegistry.delete(context._registeredHash);
    }

    context._registeredHash = null;
    context._popupPrewarmInProgress = false;

    if (popupRegistry.size === 0) {
        resetPrewarmState();
    }
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

    if (canPrewarmContext(context)) {
        schedulePrewarm();
    }
}

function ensureGlobalUrlListener() {
    if (globalUrlListenerAdded) return;
    globalUrlListenerAdded = true;

    const handler = (event) => {
        syncWarmCachePath();

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

                if (!dialogRecentlyClosed && isExplicitSameHashNavigationEvent(event, currentHash, previousHash, currentHistoryLength, previousHistoryLength)) {
                    removeHash(true);
                    return;
                }
            }

            switchedBetweenPopups = closeAllPopupsExcept(context) || switchedBetweenPopups;

            if (switchedBetweenPopups && context.isStandalonePopUp) {
                requestAnimationFrame(() => {
                    if (location.hash !== currentHash) return;
                    context._standaloneOpenImmediateFrame = true;
                    openPopup(context, canUseInstantStandaloneSwitch(context) && hasPrimedStandalonePopupContent(context));
                });
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
    restorePopupHostLayout(context);
    const visuallyOpen = context.popUp?.classList?.contains('is-popup-opened');

    if (context.observer) {
        context.observer.disconnect();
        context.observer = null;
    }

    popupState.activePopups.delete(context);
    clearPopupOpenSource(context);
    context._popupPrewarmInProgress = false;

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
import { getBackdrop, hideExistingBackdrop, releaseBackdropContext } from "./backdrop.js";
import { callAction } from "../../tools/tap-actions.js";
import { toggleBodyScroll } from "../../tools/utils.js";
import { buildStandalonePopUpCardsProgressively, handlePopUpCards, registerPopupOpenActivityProbe, resumeStandaloneCardHydration, setStandalonePopUpCardsActive, settleStandaloneCardWork, suspendStandalonePopUpCardsProgressively } from "./cards/index.js";
import { appendLegacyPopup, displayLegacyPopupContent, hideLegacyPopupContent } from './legacy.js';
import { beginPopupOpenHassGate, releasePopupOpenHassGate } from './hass-gate.js';
import { schedulePopupCardModulePreload } from './cards/preload.js';
import { invalidateWakeSyncCache } from "./index.js";
import { HA_CARD_WRAPPER_TAG, isDialogNode, isHaCardWrapper } from '../../tools/ha-boundary.js';
import { startContentInsetSync } from '../../tools/content-inset.js';

// Re-exported so the pop-up runtime keeps one import surface for its callers.
export { isDialogNode };

function resetPopupScroll(context) {
    const container = context.elements?.popUpContainer;
    if (container) {
        container.scrollTop = 0;
    }
}

export { shouldHoldDashboardHassUpdate } from './hass-gate.js';

const popupState = {
  animationDuration: 300,
  activePopups: new Set(),
  entityTriggeredPopup: null,
  pendingHashRemovalTimeout: null,
  pendingHashRemovalHash: '',
};

// Progressive teardowns yield while any pop-up open is still in flight (the
// probe lives here because create.js cannot import helpers without a cycle).
registerPopupOpenActivityProbe(() => {
    for (const activeContext of popupState.activePopups) {
        if (activeContext._popupOpenInProgress) {
            return true;
        }
    }
    return false;
});

const outsideCloseFallbackDelay = 150;
const popupQuickOpenAnimationDurationMs = 140;
const popupBlurWillChangeDurationMs = 450;
// Every timer and frame the pop-up runtime schedules must be listed here, or
// it survives the lifecycle boundary that was supposed to cancel it. The
// lists had drifted both ways: three keys nothing ever assigned, and two
// genuinely live frames nobody cancelled.
const popupRuntimeTimeoutKeys = ['hideContentTimeout', 'removeDomTimeout', 'closeTimeout', '_popupQuickOpenAnimationTimeout', '_popupBlurWillChangeTimeout', '_standaloneHeavyOpenTimeout', '_standalonePostOpenContentWakeTimeout', '_pendingOpenSettledUpdateTimeout'];
const standaloneOpenFrameKeys = ['_standaloneCardSyncFrame', '_standaloneClosedPaintCountFrame', '_popupListenersFrame', '_popupScrollResetFrame'];
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

// Content deferral stays limited to the default mode ON PURPOSE. Extending it
// to adaptive-dialog was tried and reverted: measured on an iPad 6 (iOS 17),
// performance mode already produced a clean transition there through its other
// effects (no backdrop blur, lighter opening CSS), while deferring the content
// pushed it 120ms past the end of the slide — a visible delay on every open,
// for no measured gain. The other modes keep those effects without the delay.
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

// A closed standalone pop-up keeps no rendered shell: it is detached from the
// DOM and its host layout is suspended. A shell in that state has no computed
// "closed" style for the browser to transition from, so phase 2 must let it go
// through a style change event of its own before flipping it to is-popup-opened.
// Without it both states collapse into a single style resolution and no
// transition is started at all — the pop-up just appears fully open (#2548).
function standaloneShellNeedsClosedStatePaint(context) {
    const popUp = context?.popUp;
    if (!popUp) {
        return false;
    }

    return !popUp.parentNode ||
        context._popupHostLayoutSuspended === true ||
        popUp.style?.display === 'none';
}

function getStandalonePhase2SettleSignature(context, measured = null) {
    const container = context?.elements?.popUpContainer;
    if (!container) {
        return '';
    }

    // A caller that already read the container geometry in the same task can
    // pass it in, so the signature never forces a second layout pass. The
    // properties are read once into locals: the typeof-then-read shorthand
    // would hit each layout-forcing getter twice.
    let { scrollHeight, clientHeight } = measured || container;
    scrollHeight = typeof scrollHeight === 'number' ? scrollHeight : 0;
    clientHeight = typeof clientHeight === 'number' ? clientHeight : 0;
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

        // The open measured scrollability against the still-empty container
        // and cached it: the content just landed, so that answer is stale and
        // the scroll mask would stay wrong until the user physically scrolls.
        context._cachedPopupScrollableState = undefined;
        syncPopupScrollableState(context);
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
// The `transition` shorthand does not read back as the exact keyword it was
// assigned on every engine (older WebKit expands it), so the inline
// kill-switch must be detected through the longhand, which is stable
// everywhere. Test mocks fall back to the plain string comparison.
function isShellTransitionDisabled(popUp) {
    const style = popUp?.style;
    if (!style) {
        return false;
    }

    if (typeof style.getPropertyValue === 'function' && style.getPropertyValue('transition-property') === 'none') {
        return true;
    }

    return style.transition === 'none';
}

// The kill-switch has to carry `!important`: the centered and adaptive-dialog
// blocks declare their own transition that way, and an author !important
// outranks a plain inline declaration. Without the priority the switch is inert
// in exactly the two modes whose closed state is a different transform from the
// bottom sheet's, so the shell animated all the way from `translate3d(0,100%,0)`
// to `scale(0.85)` while it was supposed to be painted still — the pop-up rose
// from the bottom of the screen on its first open.
function disableShellTransition(popUp) {
    const style = popUp?.style;
    if (!style) {
        return;
    }

    if (typeof style.setProperty === 'function') {
        style.setProperty('transition', 'none', 'important');
        return;
    }

    style.transition = 'none';
}

function restoreShellTransition(popUp) {
    if (!isShellTransitionDisabled(popUp)) {
        return;
    }

    if (typeof popUp.style.removeProperty === 'function') {
        popUp.style.removeProperty('transition');
    }
    popUp.style.transition = '';
}

function setStandalonePopupState(popUp, open, transitionClass = null) {
    // Batch classList mutations: remove transition classes first, then set state.
    // Using toggle with explicit boolean is cheaper than remove/add because it
    // avoids unnecessary DOM attribute changes when the class is already in the
    // desired state.
    popUp.classList.remove('is-opening', 'is-closing');
    popUp.classList.toggle('is-popup-opened', open);
    popUp.classList.toggle('is-popup-closed', !open);
    if (transitionClass) {
        popUp.classList.add(transitionClass);
    }
}
function startStandalonePopupTransition(context, open, onComplete, switchClosing = false) {
    const { popUp } = context;
    clearStandaloneTransitionCompletion(context);
    restoreShellTransition(popUp);

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

function getParentOrShadowHost(node) {
    if (!node) {
        return null;
    }

    if (node.parentElement) {
        return node.parentElement;
    }

    const root = node.getRootNode?.();
    return root && root !== document && 'host' in root ? root.host : null;
}

function isSharedCustomStackHost(node) {
    const tagName = node?.tagName?.toLowerCase?.();
    return tagName === 'vertical-stack-in-card' ||
        tagName === 'nested-lovelace-card' ||
        node?._config?.type === 'custom:vertical-stack-in-card' ||
        node?.config?.type === 'custom:vertical-stack-in-card';
}

function crossesSharedCustomStackHost(context, target) {
    let node = context;

    while (node && node !== target) {
        if (isSharedCustomStackHost(node)) {
            return true;
        }

        node = getParentOrShadowHost(node);
    }

    return false;
}

// A pop-up hosted directly inside a layout (grid/masonry/custom layout-card) has
// no per-card `hui-card` cell of its own. The nearest `hui-card` reached by the
// shadow-DOM walk in that case wraps the whole view, so hiding it would collapse
// every card. Treat these layout/view hosts as a boundary: if the walk crosses
// one before finding a `hui-card`, the pop-up has no own cell to suspend.
function isPopupHostLayoutBoundary(node) {
    const tagName = node?.tagName?.toLowerCase?.();
    if (!tagName) {
        return false;
    }

    return tagName === 'layout-card' ||
        tagName === 'grid-layout' ||
        tagName === 'masonry-layout' ||
        tagName.endsWith('-view');
}

export function resolvePopupHostElements(context) {
    if (context.sectionRow && context.sectionRowContainer) {
        return;
    }

    if (!context.sectionRow && typeof context.closest === 'function') {
        context.sectionRow = context.closest(HA_CARD_WRAPPER_TAG);
        if (context.sectionRow && crossesSharedCustomStackHost(context, context.sectionRow)) {
            context._popupHostLayoutSharedCustomStack = true;
            context.sectionRow = null;
        }

        // Fallback for environments where closest() cannot traverse shadow DOM
        // boundaries (e.g. iOS WebKit on HA 2026.5.x sections layout), and for
        // every pop-up wrapped in a custom stack that has its own shadow root
        // (decluttering-card, streamline-card, layout-card, vertical-stack…).
        if (!context.sectionRow) {
            let node = context;
            let crossedSharedCustomStack = false;
            let chainComplete = false;

            while (node) {
                if (isSharedCustomStackHost(node)) {
                    crossedSharedCustomStack = true;
                }

                if (isHaCardWrapper(node)) {
                    chainComplete = true;
                    if (crossedSharedCustomStack) {
                        context._popupHostLayoutSharedCustomStack = true;
                        break;
                    }
                    context.sectionRow = node;
                    break;
                }

                // Stop before over-reaching into a shared layout/view host: the
                // hui-card beyond it wraps the whole view, not this pop-up's cell.
                if (node !== context && isPopupHostLayoutBoundary(node)) {
                    chainComplete = true;
                    break;
                }

                const parent = getParentOrShadowHost(node);
                if (!parent) {
                    // The walk ran out of ancestors: only trust that result when it
                    // reached the document. Custom stacks build their shadow subtree
                    // before inserting it in the view, so a pop-up hosted in one is
                    // initialized while its hui-card cell is still out of reach.
                    chainComplete = node.getRootNode?.() === document;
                }

                node = parent;
            }

            context._popupHostChainIncomplete = !chainComplete;
        }
    }

    if (!context.sectionRowContainer) {
        const hostContainer = context.sectionRow?.closest?.('.card') || context.sectionRow?.parentElement || null;
        context.sectionRowContainer = hostContainer?.classList?.contains?.('card') ? hostContainer : null;
    }
}

// Retry the host walk for a pop-up that was initialized before its wrapper chain
// reached the view, then re-apply the layout state it is currently in. Without
// this the hui-card cell of a wrapped pop-up keeps reserving its height until the
// pop-up is opened once. See #2532 #2533 #2544 #2552.
export function syncDeferredPopupHostLayout(context) {
    if (!context?._popupHostChainIncomplete) {
        return;
    }

    // An open is in flight (or the pop-up is active): phase 1 already mounted
    // the host, and the shell is painted is-popup-closed for the whole
    // progressive build. Deriving the layout from that class here would
    // suspend the host mid-open and leave the pop-up invisible behind its
    // backdrop, with nothing left to re-mount it.
    if (popupState.activePopups.has(context) || isPopupOpenInProgress(context)) {
        return;
    }

    resolvePopupHostElements(context);

    if (!context.sectionRow) {
        return;
    }

    // Anything but a settled closed state (opening, opened, closing) still needs the
    // host mounted, otherwise the wrapper would collapse mid-animation.
    if (context.popUp?.classList && !context.popUp.classList.contains('is-popup-closed')) {
        keepPopupHostMounted(context);
    } else if (context.editor || context.detectedEditor || context.config?.background_update) {
        restorePopupHostLayout(context);
    } else {
        suspendPopupHostLayout(context);
    }
}

function applyPopupHostLayout(context, {
    rowHidden = false,
    rowPosition = '',
    containerHidden = false,
    containerPosition = '',
} = {}) {
    resolvePopupHostElements(context);

    // Remember whether the shell is currently rendered, so the open sequence can
    // tell if it still needs a painted closed state (see #2548). Tracking it here
    // keeps that check free of any layout read.
    context._popupHostLayoutSuspended = rowHidden === true;

    const { sectionRow, sectionRowContainer } = context;
    const hasManagedContainer = sectionRowContainer?.classList?.contains('card');

    if (isHaCardWrapper(sectionRow)) {
        // The inline display is the only thing that collapses the cell. The
        // `hidden` attribute must stay out of it: both view layouts size a cell
        // from it — masonry drops a column's flex-grow through
        // `.column:not(:has(> :not([hidden])))`, sections hide the whole
        // container through `.card:has(> [hidden])` — so a pop-up alone in its
        // column resized every other card each time the attribute went on or
        // off. It cannot be pinned either way: hui-card recomputes its own
        // visibility on hass updates and clears it, which turned the flip into
        // an open/close oscillation of the whole dashboard.
        sectionRow.style.display = rowHidden ? 'none' : '';

        const hasPreviousPosition = Object.prototype.hasOwnProperty.call(context, '_popupHostPreviousRowPosition');
        if (!hasManagedContainer && rowPosition) {
            if (!hasPreviousPosition) {
                context._popupHostPreviousRowPosition = sectionRow.style.position ?? '';
            }
            sectionRow.style.position = rowPosition;
        } else if (hasPreviousPosition) {
            sectionRow.style.position = context._popupHostPreviousRowPosition;
            delete context._popupHostPreviousRowPosition;
        }
    }

    if (hasManagedContainer) {
        sectionRowContainer.style.display = containerHidden ? 'none' : '';
        sectionRowContainer.style.position = containerPosition;
    }

    // Nothing outside those two guards is ever written to. A pop-up hosted in
    // another card's shadow root owns no cell, and Bubble Dashboard relies on
    // that: it swaps sectionRow/sectionRowContainer for a detached <div> so
    // every keep/suspend/restore cycle is a no-op on a host it does not own.
    // Marking the element itself `hidden` escapes both guards and collapses
    // such a pop-up to nothing, since it has no `:host` display to outrank the
    // user-agent rule.

    // Keep the popup element itself collapsed as well so a detached standalone
    // shell cannot leave an inline line box behind when its wrapper is restored.
    if (context?.style) {
        const hasPreviousDisplay = Object.prototype.hasOwnProperty.call(context, '_popupHostPreviousDisplay');
        if (rowHidden) {
            if (!hasPreviousDisplay) {
                context._popupHostPreviousDisplay = context.style.display ?? '';
            }
            context.style.display = 'none';
        } else if (hasPreviousDisplay) {
            context.style.display = context._popupHostPreviousDisplay;
            delete context._popupHostPreviousDisplay;
        }
    }
}

export function keepPopupHostMounted(context) {
    applyPopupHostLayout(context, {
        rowPosition: 'absolute',
        containerPosition: 'absolute',
    });
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

// True only while an open sequence is genuinely running. The in-progress flag
// alone is not enough to gate work on: it is set before the open can schedule
// any completion, so a failure in that window would strand it and anything
// keyed on it would stay held forever. Runtime membership is the liveness
// proof, and it is dropped by every close, rollback and cleanup path.
export function isPopupOpenSequenceActive(context) {
    return isPopupOpenInProgress(context) && popupState.activePopups.has(context);
}

function isPopupOpenInProgress(context) {
    return context?._popupOpenInProgress === true;
}

function isPopupOpenSettled(context) {
    return context._popupOpenSettled === true;
}

function armFreshOutsideInteractionGuard(context) {
    // Armed once per open, when the sequence starts. Re-arming at settle would
    // discard a press that already happened during the transition, which is
    // the whole point of arming this early.
    if (context._awaitFreshOutsideInteraction) {
        return;
    }

    context._awaitFreshOutsideInteraction = true;
    context._allowOutsideCloseFromInteraction = false;
}

function clearFreshOutsideInteractionGuard(context) {
    context._awaitFreshOutsideInteraction = false;
    context._allowOutsideCloseFromInteraction = false;
    context._interactionStartedInsidePopup = false;
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

    // Each synthetic scroll can force a layout in the receiving card: chunk
    // the dispatches so up to 16 targets never fold into one long task. The
    // suppression marker keeps these from tripping the hydration interaction
    // hold (they are not user gestures).
    const wakeChunkSize = 4;
    const dispatchWakeChunk = () => {
        if (!popupState.activePopups.has(context)) {
            return;
        }

        context._suppressHydrationInteractionHold = true;
        try {
            for (let i = 0; i < wakeChunkSize && targets.length > 0; i++) {
                const target = targets.shift();
                try {
                    target.dispatchEvent(new Event('scroll'));
                } catch (_) {}
            }
        } finally {
            context._suppressHydrationInteractionHold = false;
        }

        if (targets.length > 0) {
            context._standalonePostOpenContentWakeTimeout = setTimeout(dispatchWakeChunk, 0);
        }
    };
    dispatchWakeChunk();
}

function cancelStandalonePostOpenContentWake(context) {
    if (context._standalonePostOpenContentWakeIdle && typeof cancelIdleCallback === 'function') {
        cancelIdleCallback(context._standalonePostOpenContentWakeIdle);
    }
    context._standalonePostOpenContentWakeIdle = null;
    clearContextTimeout(context, '_standalonePostOpenContentWakeTimeout');
}

function scheduleStandalonePostOpenContentWake(context) {
    if (!context?.isStandalonePopUp) {
        return;
    }

    cancelStandalonePostOpenContentWake(context);

    // The wake dispatches synthetic scroll events over up to 16 scrollable
    // descendants, each read forcing layout. Run it at idle time so it never
    // competes with the open transition tail (Safari has no idle callback,
    // a short timeout keeps it off the transition frames there too).
    const run = () => {
        context._standalonePostOpenContentWakeIdle = null;
        context._standalonePostOpenContentWakeTimeout = null;

        if (!popupState.activePopups.has(context) || !context.popUp?.classList?.contains('is-popup-opened')) {
            return;
        }

        wakeStandalonePopupScrollableContent(context);
    };

    if (typeof requestIdleCallback === 'function') {
        context._standalonePostOpenContentWakeIdle = requestIdleCallback(run, { timeout: 600 });
    } else {
        context._standalonePostOpenContentWakeTimeout = setTimeout(run, 250);
    }
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

// Suppress the outside click released by a just-closed HA dialog.
const dialogState = {
    recentlyClosedTimestamp: 0,
    protectionWindow: 500 // ms to protect after dialog close
};

if (!window.__bubbleDialogListenerAdded) {
    window.addEventListener('dialog-closed', () => {
        dialogState.recentlyClosedTimestamp = Date.now();
    }, { capture: true });
    
    window.__bubbleDialogListenerAdded = true;
}

function isEventInsidePopupOrDialog(event) {
    const targets = event.composedPath();
    return targets.find(target => {
        if (!target.classList && !target.nodeName) return false;
        return target.classList?.contains('bubble-pop-up') ||
               isDialogNode(target);
    });
}

function noteOutsideInteractionStart(event, context) {
    if (!context.popUp?.classList.contains('is-popup-opened')) {
        return;
    }

    // Where a press STARTS decides whether the click it produces may close the
    // pop-up. A press that began inside and was released outside — dragging off
    // a slider, panning a map, swiping a card — produces a click whose target
    // is the common ancestor of both, i.e. outside, and used to close the
    // pop-up. Native HA dialogs only close when the whole gesture happened
    // outside, and that is what users expect here too (#2554). Recorded for
    // every press, not only the first one after opening.
    context._interactionStartedInsidePopup = !!isEventInsidePopupOrDialog(event);

    if (!context._awaitFreshOutsideInteraction) {
        return;
    }

    if (context._interactionStartedInsidePopup) {
        return;
    }

    // A press that starts outside a pop-up the user can already see is a
    // deliberate press, whether or not the open has finished settling. Waiting
    // for the settle made the whole transition a dead zone, and that zone
    // stretches with the device: on a loaded low-end device the first click
    // outside was swallowed and only the second one closed the pop-up.

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
    // Consumed by this click whatever happens next: the flag describes the
    // press that produced it, so it must never leak into a later click (a
    // keyboard-activated one, for instance, has no press of its own).
    const startedInsidePopup = context._interactionStartedInsidePopup === true;
    context._interactionStartedInsidePopup = false;

    if (!(context.config.close_by_clicking_outside ?? true)) return;
    if (!context.popUp.classList.contains('is-popup-opened')) return;

    // Still opening, and no press of this click's own started outside: the
    // click belongs to the gesture that opened the pop-up, so it must not
    // close it again. A click that does have its own outside press is honoured
    // right away instead of waiting for the transition to end.
    if (!isPopupOpenSettled(context) && !context._allowOutsideCloseFromInteraction) {
        return;
    }

    const timeSinceDialogClosed = Date.now() - dialogState.recentlyClosedTimestamp;
    if (timeSinceDialogClosed < dialogState.protectionWindow) {
        return;
    }

    if (isEventInsidePopupOrDialog(event)) {
        return;
    }

    // The gesture began inside the pop-up and merely ended outside it: that is
    // a drag, not a click outside, and it must leave the pop-up open (#2554).
    if (startedInsidePopup) {
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
    context._pendingOpenSettledUpdate = false;
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
    releasePopupOpenHassGate(context);

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

    // Use cached state if available and container hasn't changed
    if (context._cachedPopupScrollableState !== undefined && context._scrollableContainer === container) {
        container.classList.toggle('is-scrollable', context._cachedPopupScrollableState);
        return true;
    }

    // Batch scrollHeight read with clientHeight to avoid layout thrashing.
    // Both properties trigger the same layout, so reading them together is optimal.
    const isScrollable = container.scrollHeight > container.clientHeight;
    context._cachedPopupScrollableState = isScrollable;
    context._scrollableContainer = container;
    container.classList.toggle('is-scrollable', isScrollable);

    return true;
}

function syncPopupScrollableState(context) {
    const container = context.elements?.popUpContainer;
    if (!container) {
        return false;
    }

    // If we have a valid cached state for this container, use it immediately
    if (context._cachedPopupScrollableState !== undefined && context._scrollableContainer === container) {
        container.classList.toggle('is-scrollable', context._cachedPopupScrollableState);
        return true;
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
    // A container owned by an in-flight progressive teardown is doomed
    // content: treating it as primed would promote instant paths that then
    // rebuild everything synchronously.
    return !!(
        context?._cardsContainer &&
        context?._progressiveCardWork?.type !== 'teardown'
    );
}

function canUseInstantStandaloneSwitch(context) {
    return getPopupMode(context?.config) === POPUP_MODE_CENTERED;
}

function finalizeStandalonePopupOpen(context) {
    setPopupOpeningMarker(context, false);
    context.popUp.classList.remove('is-opening', 'is-closing', 'is-switch-closing');
    completePopupOpen(context);

    // Per-tick updates held during the open sequence flush as one pass on the
    // settled pop-up: the fresh hass was stored on the context all along.
    // The flush gets its own macrotask: this one already carries the gate
    // release, the scrollable sync and the hydration resume, and the last
    // frames of the slide are still being presented.
    if (context._pendingOpenSettledUpdate) {
        clearContextTimeout(context, '_pendingOpenSettledUpdateTimeout');
        context._pendingOpenSettledUpdateTimeout = setTimeout(() => {
            context._pendingOpenSettledUpdateTimeout = null;
            if (!context._pendingOpenSettledUpdate || !popupState.activePopups.has(context)) {
                return;
            }
            context._pendingOpenSettledUpdate = false;
            try {
                context.updateBubbleCard?.();
            } catch (_) {}
        }, 0);
    }

    if (context._pendingPostOpenCardSync) {
        context._pendingPostOpenCardSync = false;
        scheduleStandaloneCardSync(context);
    }

    // Fold-first builds left placeholder cells below the fold: hydrate them
    // now that the transition is over, one budgeted step per macrotask. The
    // pre-slide scrollability was measured against partial content, so it is
    // re-synced once the real cards are all in place.
    resumeStandaloneCardHydration(context, () => {
        if (!popupState.activePopups.has(context)) {
            return;
        }

        // Do not trust any state cached against the partial content.
        context._cachedPopupScrollableState = undefined;
        syncPopupScrollableState(context);
    });
}

function runStandalonePostCloseCleanup(context) {
    setStandalonePopUpCardsActive(context, false);
    handlePopUpCards(context);

    if (context.config.background_update) {
        context.popUp.style.display = 'none';
    }

    // Clear visual open classes before detachment so that wake sync
    // (visibilitychange/pageshow) does not see a stale "opened" state
    // and attempt to re-open a closed, detached pop-up.
    context.popUp.classList.remove('is-popup-opened', 'is-opening', 'is-closing', 'is-switch-closing');
    context.popUp.classList.add('is-popup-closed');

    // Always suspend host layout to hide the hui-card wrapper.
    // Shell detachment (shadow DOM) and host layout suspension (light DOM)
    // are independent — detaching the shell does not hide sectionRow.
    // Suspending BEFORE the card teardown below also means the removals run
    // against a hidden subtree and never trigger layout of visible content.
    suspendPopupHostLayout(context);

    if (context.config.close_action && !hasIncomingPopupNavigation(context)) {
        callAction(context, context.config, 'close_action');
    }

    // Tear the child cards down one per macrotask (the disconnect callbacks
    // are the expensive part), then detach the shell to keep the shadow-root
    // empty while closed. A reopen meanwhile settles the teardown
    // synchronously through clearAllTimeouts and skips the detach here.
    suspendStandalonePopUpCardsProgressively(context, () => {
        if (popupState.activePopups.has(context)) {
            return;
        }

        if (context.popUp?.parentNode) {
            context._standalonePopUpParent = context.popUp.parentNode;
            context.popUp.parentNode.removeChild(context.popUp);
        }
    });
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

    releasePopupOpenHassGate(context);

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

    // Skip host layout suspension if the shell was already detached on close.
    if (!context._standalonePopUpParent) {
        suspendPopupHostLayout(context);
    }

    if (wasOnlyActivePopup) {
        hideExistingBackdrop();
        toggleBodyScroll(false);
    }
}

// Create the deferred standalone shell (header + structure) now. See the
// comment in openPopup for why the flags must flip before createShell runs
// (re-entrancy through _setInitialVisibility) and only when it actually runs.
function runDeferredStandaloneShellCreate(context) {
    if (context._standaloneShellCreated || typeof context.createStandaloneShell !== 'function') {
        return;
    }

    context._standaloneShellCreated = true;
    context._standaloneShellCreating = true;
    const createShell = context.createStandaloneShell;
    context.createStandaloneShell = null;
    try {
        createShell();
    } finally {
        context._standaloneShellCreating = false;
    }
}

function openStandalonePopup(context, instant = false) {
    // Phased opens settle any in-flight progressive card work in their
    // deferred heavy-open task instead of here: settling a close teardown
    // synchronously would run all remaining disconnectedCallbacks on the
    // interaction frame. Instant and editor opens reconcile content
    // synchronously below, so they still need the settled state now.
    const deferCardWorkSettle = !instant && !context.editor;
    clearAllTimeouts(context, { settleCardWork: !deferCardWorkSettle });
    beginPopupOpenHassGate(context);

    // Must be read before the shell is re-attached and before phase 1 restores
    // the host layout, while the closed state is still the unrendered one.
    const needsClosedStatePaint = standaloneShellNeedsClosedStatePaint(context);

    // Re-attach popup shell to DOM if it was detached on close.
    if (context._standalonePopUpParent && context.popUp && !context.popUp.parentNode) {
        context._standalonePopUpParent.appendChild(context.popUp);
    }
    context._standalonePopUpParent = null;

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
            runDeferredStandaloneShellCreate(context);

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

    // Everything the transition start depends on but the user cannot see runs
    // here, off the interaction frame: shell creation, style refresh and the
    // card work. The pop-up is painted closed the whole time, so the visual
    // result is identical — the slide still starts with the full content.
    const finishBeforePhase2 = () => {
        if (!popupState.activePopups.has(context)) return;

        // Read scrollable state before phase 2 so it has no layout reads
        // competing with the CSS transition start. Skip the read for cold
        // default-mode opens where content is still deferred — the container
        // is empty and the forced reflow would be expensive and misleading.
        // The single geometry read below also feeds the settle signature:
        // reading again after the is-scrollable write would force a second
        // style/layout pass in the pre-slide critical path.
        let measuredContainerGeometry = null;
        if (!syncCachedPopupScrollableState(context) && phase1ContentPrimed) {
            const container = context.elements?.popUpContainer;
            if (container) {
                // One read per property: the layout-forcing getters must not
                // be hit twice by a typeof-then-read shorthand.
                const scrollHeight = container.scrollHeight;
                const clientHeight = container.clientHeight;
                measuredContainerGeometry = {
                    scrollHeight: typeof scrollHeight === 'number' ? scrollHeight : 0,
                    clientHeight: typeof clientHeight === 'number' ? clientHeight : 0,
                };
                context._cachedPopupScrollableState =
                    measuredContainerGeometry.scrollHeight > measuredContainerGeometry.clientHeight;
                context._scrollableContainer = container;
                container.classList.toggle('is-scrollable', context._cachedPopupScrollableState);
            }
        }

        // A shell that was not rendered while closed needs a second frame: the
        // first one only runs animation-frame callbacks, the closed state is
        // resolved and painted at the end of it. Flipping to is-popup-opened
        // before that resolution cancels the transition entirely (#2548).
        // When the deferred build already spanned several painted frames
        // (phase 1 armed a counter), the closed state is provably on screen
        // and the priming has already happened: a single frame suffices.
        clearContextFrame(context, '_standaloneClosedPaintCountFrame');
        const closedStateAlreadyPainted = (context._standaloneClosedPaintCount || 0) >= 3;
        const closedStatePaintFrames = (needsClosedStatePaint && !closedStateAlreadyPainted) ? 2 : 1;
        const shouldTrackSettleInstability = delayHashRoutedAnimationUntilSettled && phase1ContentPrimed && !closedStateAlreadyPainted;
        // Older WebKit only starts a transition if it was enabled at the
        // previous style resolution: restore one frame before the flip, never
        // in the same frame as it. The shell height is stable by now, so the
        // restore frame itself cannot animate anything.
        const phase2AfterTransitionRestore = () => {
            restoreShellTransition(popUp);
            scheduleStandaloneFrame(context, '_standaloneCardSyncFrame', phase2);
        };
        scheduleStandalonePhase2(context, phase2AfterTransitionRestore, {
            minimumFrames: Math.max((delayHashRoutedAnimationUntilSettled && !closedStateAlreadyPainted) ? 2 : 1, closedStatePaintFrames),
            unstableExtraFrames: shouldTrackSettleInstability ? 1 : 0,
            initialSignature: shouldTrackSettleInstability
                ? getStandalonePhase2SettleSignature(context, measuredContainerGeometry)
                : null,
        });
    };

    let backdropShownEarly = false;

    const heavyOpen = () => {
        try {
            if (!popupState.activePopups.has(context)) return;

            // The card-work settle deferred off the interaction frame (see
            // the top of this function): a leftover close teardown folds up
            // here, while the shell is still painted closed.
            settleStandaloneCardWork(context);

            // First visual feedback: the backdrop starts fading as soon as the
            // deferred open work begins, well before the slide. Popup-to-popup
            // switches keep the phase-2 handoff (their backdrop is already up).
            if (!deferBackdropHandoffUntilPhase2) {
                toggleBackdrop(context, true);
                backdropShownEarly = true;
            }

            runDeferredStandaloneShellCreate(context);

            // The header is cheap and hass-driven: refresh it on every open so
            // it never shows stale content while post-open work catches up.
            // The full shell refresh (custom styles) stays gated on the flag.
            if (typeof context.refreshPopupHeader === 'function') {
                context.refreshPopupHeader();
            }
            if (context._standaloneNeedsShellRefresh && typeof context.refreshPopupShell === 'function') {
                context.refreshPopupShell();
            }
            context.updatePopupColor?.();
            setStandalonePopUpCardsActive(context, true);

            if (hasStandaloneCards && !shouldDeferColdStandaloneContentUntilAfterOpen(context)) {
                if (!hadPrimedStandaloneContent) {
                    // Cold content: build one card per macrotask so no single
                    // task exceeds roughly one card's cost, then start phase 2.
                    // The opening marker stays OFF on purpose: each nested card
                    // renders fully inside its own build step (the pop-up is
                    // painted closed, nothing is visible), instead of arming
                    // 320ms deferred updates that would land mid-transition.
                    phase1ContentPrimed = true;
                    context._standalonePostOpenContentWakeNeeded = true;
                    buildStandalonePopUpCardsProgressively(context, finishBeforePhase2);
                    return;
                }

                // Retained content (background_update): reconcile it inline.
                setPopupOpeningMarker(context, true);
                try {
                    syncStandalonePopupContent(context);
                    phase1ContentPrimed = true;
                } finally {
                    setPopupOpeningMarker(context, false);
                }
            }

            finishBeforePhase2();
        } catch (error) {
            setPopupOpeningMarker(context, false);
            rollbackStandalonePopupOpen(context, error);
        }
    };

    // Interaction frame: only what must be visible or painted right away —
    // host un-hidden and the closed position painted so the tap feedback and
    // the transition start state cost nothing on the tap task (#2548).
    const phase1 = () => {
        try {
            if (!popupState.activePopups.has(context)) return;

            keepPopupHostMounted(context);
            popUp.style.display = '';
            popUp.style.visibility = '';

            clearStandaloneTransitionCompletion(context);
            setStandalonePopupState(popUp, false);

            // The closed bottom-sheet transform is a percentage of the shell
            // height, which the computed style resolves to pixels. The
            // progressive build grows that height card by card, and each
            // growth would otherwise ANIMATE the closed transform (0.3s),
            // peeking the top of the pop-up above the screen edge. The same
            // frames are also where a dialog-mode shell settles onto its own
            // closed transform. Disable transitions for the whole build;
            // finishBeforePhase2 restores them once the height is stable,
            // before the prime frames.
            disableShellTransition(popUp);

            // Count frames rendered while the closed state is current: when
            // the deferred build spans several painted frames, the post-build
            // prime frames become redundant and finishBeforePhase2 skips
            // them (the slide starts one frame chain earlier).
            context._standaloneClosedPaintCount = 0;
            clearContextFrame(context, '_standaloneClosedPaintCountFrame');
            const countClosedPaintFrame = () => {
                context._standaloneClosedPaintCount += 1;
                if (context._standaloneClosedPaintCount < 4) {
                    context._standaloneClosedPaintCountFrame = requestAnimationFrame(countClosedPaintFrame);
                } else {
                    context._standaloneClosedPaintCountFrame = null;
                }
            };
            context._standaloneClosedPaintCountFrame = requestAnimationFrame(countClosedPaintFrame);

            // Editor previews keep the historical synchronous sequence.
            if (context.editor) {
                heavyOpen();
                return;
            }

            clearContextTimeout(context, '_standaloneHeavyOpenTimeout');
            context._standaloneHeavyOpenTimeout = setTimeout(() => {
                context._standaloneHeavyOpenTimeout = null;
                heavyOpen();
            }, 0);
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

            if (!backdropShownEarly) {
                toggleBackdrop(context, true);
            }

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
            // Safety net: transitions were restored one frame earlier by
            // phase2AfterTransitionRestore; make sure no path left them off.
            restoreShellTransition(popUp);
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
    releasePopupOpenHassGate(context);

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

    restoreShellTransition(popUp);

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

function clearAllTimeouts(context, { settleCardWork = true } = {}) {
    clearContextTimeouts(context, popupRuntimeTimeoutKeys);
    clearQuickOpenAnimation(context);
    cancelStandalonePostOpenContentWake(context);

    // A progressive card build/teardown in flight is settled synchronously so
    // whoever takes over (open, close, cleanup) starts from a clean state.
    // Phased opens defer this to their heavy-open macrotask: settling a
    // teardown runs every remaining disconnectedCallback in one task, which
    // must not land on the interaction frame.
    if (settleCardWork) {
        settleStandaloneCardWork(context);
    }

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

    restoreShellTransition(context.popUp);
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
        // One navigation fires location-changed, popstate AND hashchange: the
        // duplicate invocations land here while the first open is still in
        // flight, and clearing the hint now would drop the layer promotion
        // right before (or during) the slide. completePopupOpen clears it
        // once the open settles.
        if (!isPopupOpenInProgress(context)) {
            clearPopupWillChange(context);
        }
        return;
    }

    if (popupState.activePopups.has(context)) {
        context._standaloneHashRoutedColdOpen = false;
        if (!isPopupOpenInProgress(context)) {
            clearPopupWillChange(context);
        }
        return;
    }

    // Invalidate scrollable state cache on cold open - the container may have
    // changed content, so we must re-measure rather than reusing stale cached values.
    context._cachedPopupScrollableState = undefined;
    context._scrollableContainer = null;

    // Invalidate wake sync cache — context state changed, cached list is stale
    invalidateWakeSyncCache();

    // Defer scroll reset to next frame to avoid forced reflow during open transition.
    // Reading scrollTop triggers layout; batching it with other post-open work is cheaper.
    // Cold standalone opens rebuild their content from scratch, so the container
    // scroll position is already 0 — the reset would only force a useless layout.
    const coldStandaloneOpen = context.isStandalonePopUp && !context._cardsContainer;
    if (!coldStandaloneOpen && !context._popupScrollResetFrame) {
        context._popupScrollResetFrame = requestAnimationFrame(() => {
            context._popupScrollResetFrame = null;
            resetPopupScroll(context);
        });
    }

    clearPopupInlineTransform(context);
    clearPendingHashRemoval();
    consumePendingPopupOpenSource(context);
    setPopupOpenInProgress(context, true);
    setPopupOpenSettled(context, false);
    // Armed from the first moment of the open, not from the settle: it is what
    // tells the gesture that opened the pop-up apart from a later one, and
    // that distinction has to hold during the transition too.
    armFreshOutsideInteractionGuard(context);
    setPopupBackdropBlurGuard(context, true);

    if (context.isStandalonePopUp) {
        // Create deferred shell (header + structure) on first open.
        // Must happen here (before openStandalonePopup) to avoid a recursive
        // loop: openStandalonePopup → createStructure → _setInitialVisibility
        // → openPopup → openStandalonePopup → ...
        // Set _standaloneShellCreated = true BEFORE calling createStandaloneShell
        // so that a re-entrant openPopup call from _setInitialVisibility (when
        // hash === location.hash) does not attempt to create the shell again.
        // Also set _standaloneShellCreating so _setInitialVisibility skips the
        // re-entrant openPopup call and lets the outer call handle the animation.
        // Everything from here to the guarded phases runs before the open can
        // schedule any completion: a throw would otherwise strand the
        // in-progress flag with no path left to clear it.
        try {
            if (!context._standaloneShellCreated && context.createStandaloneShell) {
                // Instant opens and centered switches need the shell synchronously;
                // phased opens create it in the deferred open task so the header
                // and structure build never runs inside the interaction frame. The
                // flags are only flipped once the shell is actually created, so a
                // canceled open leaves createStandaloneShell intact for the next one.
                if (instant || context.editor || canUseInstantStandaloneSwitch(context)) {
                    runDeferredStandaloneShellCreate(context);
                }
            }
            openStandalonePopup(context, instant);
        } catch (error) {
            rollbackStandalonePopupOpen(context, error);
        }
        return;
    }

    clearAllTimeouts(context);

    // Legacy pop-ups open behind the same covering backdrop as standalone
    // ones, so dashboard cards re-rendering during that window starve the
    // very same transition frames.
    beginPopupOpenHassGate(context);

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
                // A legacy pop-up is detached while closed and re-inserted just
                // above, in this very task. Resolve style once while it is
                // still closed: without it the browser's first computation is
                // already the open state, so there is nothing to transition
                // from and the pop-up snaps open. Standalone pop-ups paint
                // their closed state in a phase of their own and need no such
                // read, which is why only the legacy path pays for it.
                popUp.getBoundingClientRect();
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

    // Invalidate wake sync cache — context state changed, cached list is
    // stale. Must run before the standalone branch: standalone closes return
    // early and would otherwise leave the cache pinning this context.
    invalidateWakeSyncCache();

    if (context.isStandalonePopUp) {
        closeStandalonePopup(context, force);
        return;
    }

    clearAllTimeouts(context);
    // clearAllTimeouts cancelled the open completion, which is the only path
    // that would have released the gate armed by the legacy open. Owner-scoped,
    // so it cannot kill another pop-up's in-flight open.
    releasePopupOpenHassGate(context);

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

    // The open itself starts one frame later: without arming the gate here, a
    // hass tick delivered in between re-renders the whole dashboard right as
    // the open begins — exactly the contention the gate exists to remove.
    // A cancelled open releases it in the branch below.
    beginPopupOpenHassGate(context);

    requestAnimationFrame(() => {
        if (location.hash !== currentHash) {
            context._standaloneHashRoutedColdOpen = false;
            clearPopupWillChange(context);
            releasePopupOpenHassGate(context);
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

        // openPopup early-returns when the pop-up is already open or already
        // active (a duplicate URL event, or a re-tap on the current hash):
        // nothing would then schedule a completion, so the gate armed above
        // would hold every dashboard card until the watchdog lapses.
        if (!isPopupOpenSequenceActive(context)) {
            releasePopupOpenHassGate(context);
        }
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

// Speculative shell warm-up: build each registered pop-up's shell (header +
// structure only, no cards) at idle time after the dashboard has loaded, so a
// first open no longer pays that construction in its critical window. Memory
// stays bounded (a few elements per pop-up), the host is suspended and the
// shell painted closed, so nothing is visible. One shell per idle slice.
const pendingShellWarmups = [];
let shellWarmupScheduled = false;

function scheduleIdleStandaloneShellWarmup(context) {
    if (context._standaloneShellWarmupQueued || typeof context.createStandaloneShell !== 'function') {
        return;
    }

    context._standaloneShellWarmupQueued = true;
    pendingShellWarmups.push(new WeakRef(context));
    pumpShellWarmupQueue();
}

// The shell warm-up builds the DOM but leaves the style pipeline cold, so the
// first open of a session still compiled every style module and evaluated it
// inside the very task that unhides the backdrop — delaying the first visible
// feedback by that whole cost. Running one style pass here fills the compiled
// template, cleanCSS and evaluated-style caches while the shell is still
// hidden and detached, so nothing is visible and the open finds warm caches.
function primeStandaloneShellStyles(context) {
    if (typeof context.refreshPopupShell !== 'function') {
        return;
    }

    try {
        context.refreshPopupShell();
    } catch (_) {
        // A failed prime must never stop the open from doing the real work.
    } finally {
        // The open decides for itself whether the shell needs refreshing; the
        // prime must not make it skip that.
        context._standaloneNeedsShellRefresh = true;
    }
}

function pumpShellWarmupQueue() {
    if (shellWarmupScheduled || pendingShellWarmups.length === 0) {
        return;
    }

    shellWarmupScheduled = true;
    const run = () => {
        shellWarmupScheduled = false;
        const contextRef = pendingShellWarmups.shift();
        const context = contextRef?.deref?.();

        // An open may have consumed the factory meanwhile, or the element may
        // be gone: every condition is re-checked at run time.
        if (context &&
            !context.editor && !context.detectedEditor &&
            !context._standaloneShellCreated &&
            typeof context.createStandaloneShell === 'function' &&
            !popupState.activePopups.has(context) &&
            !isPopupOpenInProgress(context)) {
            try {
                runDeferredStandaloneShellCreate(context);
                primeStandaloneShellStyles(context);
            } catch (_) {}
        }

        pumpShellWarmupQueue();
    };

    if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(run, { timeout: 8000 });
    } else {
        setTimeout(run, 2500);
    }
}

export function registerPopupContext(context) {
    const hash = context.config.hash;
    if (!hash) return;

    // Keep publishing where the dashboard content starts, so pop-ups centre on
    // the area HA actually renders into instead of on a sidebar-width token
    // that outlives the sidebar. Idempotent, and re-entered on every tick so a
    // dashboard swap or a late boot is picked up.
    startContentInsetSync();

    // Idle-time warm-ups (once per context): the card modules this pop-up
    // will need, and the standalone shell itself.
    if (!context._popupCardTypesPreloadQueued && !context.editor && !context.detectedEditor) {
        context._popupCardTypesPreloadQueued = true;
        schedulePopupCardModulePreload(context);
    }
    scheduleIdleStandaloneShellWarmup(context);

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

    // A lovelace re-render can leave the replaced element receiving hass for a
    // while, and its per-tick pipeline re-registers it. Never let a
    // disconnected context take the hash away from a live one: navigation
    // would then open a detached pop-up (backdrop up, nothing visible).
    // Detached-but-registered stays supported — that is how a closed legacy
    // pop-up keeps being reachable — it just cannot displace a connected one.
    if (context.isConnected === false) {
        const current = popupRegistry.get(hash)?.deref();
        if (current && current !== context && current.isConnected !== false) {
            return;
        }
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
    // The element can be torn down mid-open (lovelace re-render, editor
    // re-creation): every other open-termination path releases the gate, and
    // clearAllTimeouts just cancelled the completion that would have.
    releasePopupOpenHassGate(context);
    updateListeners(context, false);
    setPopupOpeningMarker(context, false);
    const visuallyOpen = context.popUp?.classList?.contains('is-popup-opened');
    const inEditor = !!context.editor;
    const isDetached = context._standalonePopUpParent != null;

    if (visuallyOpen || inEditor) {
        restorePopupHostLayout(context);
    } else if (!isDetached) {
        suspendPopupHostLayout(context);
    }

    if (context.observer) {
        context.observer.disconnect();
        context.observer = null;
    }

    popupState.activePopups.delete(context);
    clearPopupOpenSource(context);
    // The element is being torn down: the wake-sync cache may hold a strong
    // reference to this context and must not outlive it.
    invalidateWakeSyncCache();

    try {
        if (visuallyOpen) {
            toggleBackdrop(context, false);
        }
    } catch (_) {}

    // Closing a legacy pop-up parks its shell out of the stack, and that shell
    // holds the card itself, so the close disconnects the element and lands
    // here. Unregistering then takes the hash out of the URL dispatcher: the
    // next navigation to it finds nobody and the pop-up only opens once a
    // later hass tick re-registers it. A real teardown takes the stack card
    // itself out of the document, which is what tells the two apart.
    const parkedLegacyShell = !context.isStandalonePopUp &&
        !!context.popUp &&
        context.verticalStack?.host?.isConnected === true &&
        !context.verticalStack.contains(context.popUp);

    if (!parkedLegacyShell) {
        unregisterPopupContext(context);
    }
    releaseBackdropContext(context);

    if (!visuallyOpen && shouldHideOrphanedBackdrop()) {
        hideExistingBackdrop();
    }

    toggleBodyScroll(false);
}

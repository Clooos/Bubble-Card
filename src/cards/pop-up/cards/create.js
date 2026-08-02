import { createElement } from '../../../tools/utils.js';
import { monotonicNow } from '../../../tools/monotonic-time.js';
import setupTranslation from '../../../tools/localize.js';
import { extendPopupOpenHassGate } from '../hass-gate.js';
import cardsStyles from './styles.css';
import { createEditorCardElements } from './editor/index.js';

const GRID_COLUMN_MULTIPLIER = 3;
const DEFAULT_GRID_SIZE = { columns: 12, rows: 'auto' };

// The deep config walk below runs for every off-screen card on every hass
// dispatch while a pop-up is open. Config references are stable (reconciling
// relies on `previousCardConfigs[i] !== cards[i]`), so the answer is cached
// per config object.
const stateDrivenVisibilityCache = new WeakMap();

function _hasStateDrivenVisibility(cardConfig) {
    if (!cardConfig || typeof cardConfig !== 'object') {
        return false;
    }

    const cached = stateDrivenVisibilityCache.get(cardConfig);
    if (cached !== undefined) {
        return cached;
    }

    const result = _computeStateDrivenVisibility(cardConfig, new Set());
    stateDrivenVisibilityCache.set(cardConfig, result);
    return result;
}

function _computeStateDrivenVisibility(cardConfig, visited) {
    if (!cardConfig || typeof cardConfig !== 'object' || visited.has(cardConfig)) {
        return false;
    }

    visited.add(cardConfig);

    if (cardConfig.type === 'conditional' || Object.prototype.hasOwnProperty.call(cardConfig, 'visibility')) {
        return true;
    }

    const nestedValues = Array.isArray(cardConfig)
        ? cardConfig
        : Object.values(cardConfig);

    return nestedValues.some((value) => _computeStateDrivenVisibility(value, visited));
}

function _getMountedCardElement(cardEl) {
    const mountedCard = cardEl?._element;
    return mountedCard && typeof mountedCard === 'object'
        ? mountedCard
        : null;
}

function _applyHassToCardElement(cardEl, hass) {
    if (!cardEl || !hass) {
        return;
    }

    const wrapperHadSameHassRef = cardEl.hass === hass;
    cardEl.hass = hass;

    const mountedCard = _getMountedCardElement(cardEl);
    if (mountedCard) {
        const mountedCardHadSameHassRef = mountedCard.hass === hass;

        if (!mountedCardHadSameHassRef || wrapperHadSameHassRef) {
            mountedCard.hass = hass;
        }

        if (mountedCardHadSameHassRef && typeof mountedCard.requestUpdate === 'function') {
            try {
                mountedCard.requestUpdate('hass', null);
            } catch (_) {
                // Ignore child-card requestUpdate failures from non-Lit elements.
            }
        }
    }

    if (wrapperHadSameHassRef && typeof cardEl.requestUpdate === 'function') {
        try {
            cardEl.requestUpdate('hass', null);
        } catch (_) {
            // Ignore wrapper requestUpdate failures from non-Lit elements.
        }
    }

    cardEl._bubbleHassPending = false;
}

// Create popup child cards inside the popup container.
export function createCardElements(context) {
    const cards = context.config.cards;
    if (!Array.isArray(cards) || !context.elements?.popUpContainer) return;

    const popUpContainer = context.elements.popUpContainer;
    const isEditMode = context.editor || context.detectedEditor;

    // Inject card grid styles once.
    if (!context._cardsStyleTag) {
        context._cardsStyleTag = createElement('style');
        context._cardsStyleTag.textContent = cardsStyles;
        context.popUp.appendChild(context._cardsStyleTag);
    }

    context._managedCards = [];
    context._cardWrappers = [];
    context._renderedItems = [];
    context._lastCardConfigRefs = [];
    context._lastRenderedCardConfigs = [];
    context._lastCardsEditMode = isEditMode;

    // Drop previously rendered card containers.
    if (context._sortableEl) {
        context._sortableEl.remove();
        context._sortableEl = null;
    }
    if (context._cardsContainer) {
        context._cardsContainer.remove();
        context._cardsContainer = null;
    }
    context._cardWrappers = [];
    popUpContainer.querySelector('.bubble-cards-container')?.remove();
    popUpContainer.querySelector('.bubble-cards-editor-container')?.remove();

    if (isEditMode) {
        createEditorCardElements(context, cards, {
            createCard: (cardConfig) => _isStandalonePopupCardConfig(cardConfig)
                ? _createNestedPopupWarningCard(context)
                : _createHuiCard(cardConfig, context, true),
            applyCardWrapperLayout: _applyCardWrapperLayout,
            bindCardLayoutUpdates: _bindCardLayoutUpdates,
            rebuildCards: () => {
                removeCardElements(context);
                createCardElements(context);
            },
        });
        return;
    }

    const cardsContainer = createElement('div', 'bubble-cards-container bubble-cards-grid-container');

    for (let i = 0; i < cards.length; i++) {
        const cardConfig = cards[i];
        const cardEl = _createHuiCard(cardConfig, context, false);
        if (!cardEl) continue;

        const cardWrapper = createElement('div', 'card');
        cardWrapper.appendChild(cardEl);
        _applyCardWrapperLayout(cardEl, cardWrapper, cardConfig);
        _bindCardLayoutUpdates(cardEl, cardWrapper, context, i);

        context._managedCards.push(cardEl);
        context._cardWrappers.push(cardWrapper);
        context._lastCardConfigRefs.push(cardConfig);
        context._lastRenderedCardConfigs.push(cardEl.config);
        cardsContainer.appendChild(cardWrapper);
    }

    popUpContainer.appendChild(cardsContainer);
    context._cardsContainer = cardsContainer;
    context._renderedItems.push(cardsContainer);

    // Observe each wrapper for viewport intersection inside the popup scroll
    // container. Off-screen cards skip subsequent `hass` assignments in
    // updateCardElements and have a pending hass flushed when they scroll in.
    _setupCardVisibilityObserver(context);
}

// Progressive card work: a pop-up open builds its child cards one per
// macrotask, and a pop-up close tears them down the same way, so no single
// task holds the main thread for more than roughly one card's cost. Only one
// progressive job can be in flight per context; `settleProgressiveCardWork`
// cancels it and settles the card state to clean-cold synchronously.
// Number of progressive builds currently in flight (module-wide): an open's
// build takes priority over any close teardown running at the same time.
let activeProgressiveBuilds = 0;

// Number of hydration steppers currently in flight (module-wide): a close
// teardown also yields to them, so a switch's outgoing pop-up never competes
// with the incoming pop-up filling its below-the-fold cells.
let activeHydrationSteppers = 0;

// Probe registered by helpers.js (importing it here would be a cycle):
// reports whether any pop-up open is in flight, so teardowns also yield
// during the open transition frames, between the build and the hydration.
let popupOpenActivityProbe = null;
export function registerPopupOpenActivityProbe(probe) {
    popupOpenActivityProbe = typeof probe === 'function' ? probe : null;
}

function _shouldTeardownYield() {
    return activeProgressiveBuilds > 0 ||
        activeHydrationSteppers > 0 ||
        (popupOpenActivityProbe?.() === true);
}

// Per-macrotask time budget for work that runs while the pop-up is VISIBLE
// (post-open hydration) or while the page is interactive (close teardown):
// slow devices split at card boundaries so no task exceeds roughly one
// card's cost beyond the budget, and scroll stays fluid.
const progressiveStepBudgetMs = 24;

// Per-macrotask budget for the pre-open build: the pop-up is painted closed
// and the dashboard sits frozen behind the compositor-driven backdrop fade,
// so nothing visible needs main-thread frames. Splitting finely there only
// multiplies the total cost (one Lit flush per card instead of one batched
// flush, v3.2.4 style) and delays the slide. A large budget keeps the
// batching win; isInputPending (and the budget itself as a WebKit fallback)
// caps how long a cancel tap can wait — still far below the fully
// synchronous block v3.2.4 held for the whole build.
const coveredBuildStepBudgetMs = 300;

// Fold-first hydration: large pop-ups render only enough leading cards to
// cover the first viewport (estimated from config grid spans, no layout
// read) before the open transition. The rest start as placeholder cells,
// then hydrate one budgeted step at a time after the transition — or when
// one scrolls into view. The head is a row-coverage estimate rather than a
// card count, so multi-column layouts still fill their fold, and a build
// that already covered the fold cuts over to placeholders once it has spent
// its time allowance on a slow device.
const foldFirstMinPlaceholderTail = 6;
const estimatedRowHeightPx = 64; // --row-height (56px) + row gap (8px)
// One margin row: enough that a slightly-underestimated fold does not show
// an empty cell at the very bottom edge, without inflating the pre-open
// build (the first hydration step lands ~35ms after the transition ends).
const foldCoverageMarginRows = 1;
const assumedGridColumnCount = 12;

// Approximate the vertical footprint of one card in grid rows: a full-width
// one-row card counts 1, a half-width card counts 0.5, and so on. Cheap and
// config-only — precision does not matter, only fold coverage does.
function _estimateCardRowArea(cardConfig) {
    // A card whose visibility is state-driven may render 0px (the CSS
    // collapses hidden cells): counting it toward fold coverage could leave
    // visible placeholders. Zero rows errs toward building more up-front.
    if (_hasStateDrivenVisibility(cardConfig)) {
        return 0;
    }

    const gridOptions = _getConfigGridOptions(cardConfig);
    const columnsRaw = gridOptions.columns ?? DEFAULT_GRID_SIZE.columns;
    const span = columnsRaw === 'full'
        ? assumedGridColumnCount
        : Math.min(typeof columnsRaw === 'number' && columnsRaw > 0 ? columnsRaw : assumedGridColumnCount, assumedGridColumnCount);
    const rows = typeof gridOptions.rows === 'number' && gridOptions.rows > 0 ? gridOptions.rows : 1;
    return (span / assumedGridColumnCount) * rows;
}

function _estimateFoldRowsTarget() {
    const viewportHeight = (typeof window !== 'undefined' && window.innerHeight > 0)
        ? window.innerHeight
        : 800;
    return Math.ceil(viewportHeight / estimatedRowHeightPx) + foldCoverageMarginRows;
}

function _computeFoldFirstHead(cards, foldRowsTarget) {
    let rowsUsed = 0;
    for (let i = 0; i < cards.length; i++) {
        rowsUsed += _estimateCardRowArea(cards[i]);
        if (rowsUsed >= foldRowsTarget && (cards.length - (i + 1)) >= foldFirstMinPlaceholderTail) {
            return i + 1;
        }
    }
    return cards.length;
}

// Post-open hydration pacing: a gap between steps keeps every frame breathable
// (scroll must stay fluid on low-end devices), and any interaction with the
// pop-up holds the next step until the user is quiet again.
const hydrationStepGapMs = 34;
const hydrationInteractionHoldMs = 280;

// Schedule the next progressive step. Zero-delay steps prefer
// scheduler.postTask when available (Chromium): no nested-setTimeout clamp
// and an explicit priority lane ('background' keeps teardowns out of the
// way of everything else). setTimeout stays the fallback (WebKit).
function _scheduleWorkStep(work, fn, delayMs, priority) {
    work.cancelStep?.();

    if (delayMs === 0 &&
        typeof scheduler !== 'undefined' && typeof scheduler.postTask === 'function' &&
        typeof AbortController === 'function') {
        try {
            const stepController = new AbortController();
            const task = scheduler.postTask(fn, { priority, signal: stepController.signal });
            task?.catch?.(() => {});
            work.cancelStep = () => stepController.abort();
            return;
        } catch (_) {
            // Fall through to setTimeout on any scheduler quirk.
        }
    }

    const timeout = setTimeout(fn, delayMs);
    work.cancelStep = () => clearTimeout(timeout);
}

// Ends a budgeted step early when the user is interacting: the pending input
// handler runs one card sooner. Chromium only; elsewhere the time budget
// alone bounds the step.
function _isInputPending() {
    try {
        return typeof navigator !== 'undefined' &&
            typeof navigator.scheduling?.isInputPending === 'function' &&
            navigator.scheduling.isInputPending() === true;
    } catch (_) {
        return false;
    }
}

function _clearProgressiveCardWork(context) {
    const work = context._progressiveCardWork;
    if (!work) {
        return;
    }

    work.cancelStep?.();
    work.cleanup?.();
    context._progressiveCardWork = null;
}

export function settleProgressiveCardWork(context) {
    if (!context?._progressiveCardWork) {
        return;
    }

    const workType = context._progressiveCardWork.type;
    _clearProgressiveCardWork(context);

    // Hydration is additive work on a live pop-up: canceling it must not
    // destroy the rendered content. Remaining placeholders hydrate on
    // visibility, on the next resume, or fall with the close teardown.
    if (workType === 'hydrate') {
        return;
    }

    if (workType === 'build') {
        activeProgressiveBuilds = Math.max(0, activeProgressiveBuilds - 1);
    }
    removeCardElements(context);
}

// Build popup child cards one per macrotask. The pop-up shell is painted in
// its closed state during the build, so nothing is visible until the open
// transition starts with the full content in place.
export function createCardElementsProgressively(context, onDone) {
    settleProgressiveCardWork(context);

    const cards = context.config.cards;
    const popUpContainer = context.elements?.popUpContainer;
    const isEditMode = context.editor || context.detectedEditor;

    // Anything unusual falls back to the synchronous builder.
    if (!Array.isArray(cards) || !popUpContainer || isEditMode || context._cardsContainer || context._sortableEl) {
        createCardElements(context);
        onDone();
        return;
    }

    if (!context._cardsStyleTag) {
        context._cardsStyleTag = createElement('style');
        context._cardsStyleTag.textContent = cardsStyles;
        context.popUp.appendChild(context._cardsStyleTag);
    }

    context._managedCards = [];
    context._cardWrappers = [];
    context._renderedItems = [];
    context._lastCardConfigRefs = [];
    context._lastRenderedCardConfigs = [];
    context._lastCardsEditMode = false;

    popUpContainer.querySelector('.bubble-cards-container')?.remove();
    popUpContainer.querySelector('.bubble-cards-editor-container')?.remove();

    const cardsContainer = createElement('div', 'bubble-cards-container bubble-cards-grid-container');
    popUpContainer.appendChild(cardsContainer);
    context._cardsContainer = cardsContainer;
    context._renderedItems.push(cardsContainer);

    const work = { type: 'build', cancelStep: null };
    context._progressiveCardWork = work;
    activeProgressiveBuilds += 1;

    // Cards created before a mid-build hass tick carry the older reference;
    // the completion step replays one sync when that happened.
    const hassAtBuildStart = context._hass;

    // The row-coverage head IS the minimal fold-coverage cut: by the time the
    // build reaches it, adding a time-based cutoff could only cut below fold
    // coverage, which would show placeholders. So there is none.
    const foldRowsTarget = _estimateFoldRowsTarget();
    const hydratedHead = _computeFoldFirstHead(cards, foldRowsTarget);

    let index = 0;
    const step = () => {
        if (context._progressiveCardWork !== work) {
            return;
        }

        if (index >= hydratedHead) {
            // Below-the-fold cards start as placeholder cells: grid spans come
            // from config, so the scroll geometry is roughly right at no cost.
            // Entries carry both positions so a failed head card (compacted
            // out of the wrapper arrays) cannot shift hydration onto the
            // wrong config.
            const pendingHydration = [];
            for (; index < cards.length; index++) {
                const cardConfig = cards[index];
                const cardWrapper = createElement('div', 'card is-placeholder');
                _applyCardWrapperLayout(null, cardWrapper, cardConfig);

                context._managedCards.push(null);
                context._cardWrappers.push(cardWrapper);
                context._lastCardConfigRefs.push(cardConfig);
                context._lastRenderedCardConfigs.push(null);
                cardsContainer.appendChild(cardWrapper);
                pendingHydration.push({ wrapperIndex: context._cardWrappers.length - 1, configIndex: index });
            }
            context._pendingCardHydration = pendingHydration.length > 0 ? pendingHydration : null;

            context._progressiveCardWork = null;
            activeProgressiveBuilds = Math.max(0, activeProgressiveBuilds - 1);
            _setupCardVisibilityObserver(context);

            // A hass tick landed mid-build: cards created before it carry the
            // older reference. Replay only those — cards created after the
            // tick already hold the current hass, and re-forcing them would
            // schedule redundant Lit re-renders right before the transition.
            if (context._hass !== hassAtBuildStart) {
                for (const managedCard of context._managedCards) {
                    if (managedCard && managedCard.hass !== context._hass) {
                        _applyHassToCardElement(managedCard, context._hass);
                    }
                }
            }
            onDone();
            return;
        }

        // The build still owns the main thread: slide the dashboard hass-gate
        // deadline so it cannot lapse mid-open on slow devices (it works as a
        // watchdog, not a fixed window).
        extendPopupOpenHassGate();

        const stepStart = monotonicNow();
        do {
            const cardConfig = cards[index];
            index += 1;

            const cardEl = _createHuiCard(cardConfig, context, false);
            if (cardEl) {
                const cardWrapper = createElement('div', 'card');
                cardWrapper.appendChild(cardEl);
                _applyCardWrapperLayout(cardEl, cardWrapper, cardConfig);
                // Bind to the CONFIG index: a failed earlier card compacts the
                // wrapper arrays, and layout updates must keep reading the
                // right config entry.
                _bindCardLayoutUpdates(cardEl, cardWrapper, context, index - 1);

                context._managedCards.push(cardEl);
                context._cardWrappers.push(cardWrapper);
                context._lastCardConfigRefs.push(cardConfig);
                context._lastRenderedCardConfigs.push(cardEl.config);
                cardsContainer.appendChild(cardWrapper);
            }
        } while (index < hydratedHead && (monotonicNow() - stepStart) < coveredBuildStepBudgetMs && !_isInputPending());

        _scheduleWorkStep(work, step, 0, 'user-visible');
    };

    _scheduleWorkStep(work, step, 0, 'user-visible');
}

// Fill one placeholder cell with its real card.
function _hydrateCardAt(context, entry) {
    const cards = context.config?.cards;
    const cardWrapper = context._cardWrappers?.[entry?.wrapperIndex];
    if (!Array.isArray(cards) || !cardWrapper || context._managedCards?.[entry.wrapperIndex]) {
        return false;
    }

    const cardConfig = cards[entry.configIndex];
    if (!cardConfig) {
        return false;
    }

    // The cell stops being a placeholder either way: a failed creation must
    // collapse like the synchronous builder's skipped cards, not keep
    // reserving a row.
    cardWrapper.classList.remove('is-placeholder');

    const cardEl = _createHuiCard(cardConfig, context, false);
    if (!cardEl) {
        // Match the synchronous builder, which renders nothing for a failed
        // card: drop the configured row reservation too.
        cardWrapper.classList.remove('fit-rows');
        cardWrapper.style?.removeProperty?.('--row-size');
        return false;
    }

    cardWrapper.appendChild(cardEl);
    _applyCardWrapperLayout(cardEl, cardWrapper, cardConfig);
    _bindCardLayoutUpdates(cardEl, cardWrapper, context, entry.configIndex);
    context._managedCards[entry.wrapperIndex] = cardEl;
    context._lastRenderedCardConfigs[entry.wrapperIndex] = cardEl.config;
    context._registerCardVisibility?.(cardWrapper, cardEl);
    return true;
}

// Start the budgeted hydration stepper over context._pendingCardHydration.
// Returns the work object, or null when there is nothing to do or another
// progressive job is already in flight.
function _startHydrationStepper(context) {
    const pending = context._pendingCardHydration;
    if (!Array.isArray(pending) || pending.length === 0 || context._progressiveCardWork) {
        return null;
    }

    const work = { type: 'hydrate', cancelStep: null, onDone: null };
    context._progressiveCardWork = work;
    activeHydrationSteppers += 1;

    // Any interaction with the pop-up wins over hydration: hold the next step
    // until the user has been quiet for a moment. The post-open content wake
    // dispatches synthetic scrolls that must not count as interaction.
    let holdUntil = 0;
    const noteInteraction = () => {
        if (context._suppressHydrationInteractionHold) {
            return;
        }
        holdUntil = monotonicNow() + hydrationInteractionHoldMs;
    };
    const container = context.elements?.popUpContainer;
    const interactionEvents = ['touchstart', 'wheel', 'scroll'];
    const hasInteractionListeners = container && typeof container.addEventListener === 'function';
    if (hasInteractionListeners) {
        interactionEvents.forEach((type) => container.addEventListener(type, noteInteraction, { passive: true }));
    }

    // Runs exactly once, from the completion path or from a settle/cancel.
    let workReleased = false;
    work.cleanup = () => {
        if (workReleased) {
            return;
        }
        workReleased = true;
        activeHydrationSteppers = Math.max(0, activeHydrationSteppers - 1);
        if (hasInteractionListeners) {
            interactionEvents.forEach((type) => container.removeEventListener(type, noteInteraction));
        }
    };

    const step = () => {
        if (context._progressiveCardWork !== work) {
            return;
        }

        if (monotonicNow() < holdUntil) {
            _scheduleWorkStep(work, step, hydrationInteractionHoldMs);
            return;
        }

        const stepStart = monotonicNow();
        while (pending.length > 0 && (monotonicNow() - stepStart) < progressiveStepBudgetMs && !_isInputPending()) {
            _hydrateCardAt(context, pending.shift());
        }

        if (pending.length === 0) {
            work.cleanup?.();
            work.cleanup = null;
            context._progressiveCardWork = null;
            context._pendingCardHydration = null;
            // The content height changed: any measured scrollability is stale.
            context._cachedPopupScrollableState = undefined;
            work.onDone?.();
            return;
        }

        _scheduleWorkStep(work, step, hydrationStepGapMs);
    };

    _scheduleWorkStep(work, step, hydrationStepGapMs);
    return work;
}

// Hydrate the remaining placeholder cells, one budgeted step per macrotask.
// Called once the open transition has finished.
export function resumeCardHydrationProgressively(context, onDone) {
    const done = typeof onDone === 'function' ? onDone : () => {};

    // A visibility-triggered stepper may already be running (a placeholder
    // scrolled into view before the transition finished): hand it the
    // completion callback instead of dropping it.
    const existing = context._progressiveCardWork;
    if (existing?.type === 'hydrate') {
        const previousDone = existing.onDone;
        existing.onDone = previousDone ? () => { previousDone(); done(); } : done;
        return;
    }

    const work = _startHydrationStepper(context);
    if (!work) {
        done();
        return;
    }
    work.onDone = done;
}

// Remove popup child cards one per macrotask, last to first. Call with the
// host layout already suspended so the removals never relayout visible
// content; the disconnect callbacks are what this spreads out.
export function removeCardElementsProgressively(context, onDone) {
    settleProgressiveCardWork(context);
    _teardownCardVisibilityObserver(context);

    const wrappers = Array.isArray(context._cardWrappers) ? [...context._cardWrappers] : [];
    if (wrappers.length === 0) {
        removeCardElements(context);
        onDone();
        return;
    }

    const work = { type: 'teardown', cancelStep: null };
    context._progressiveCardWork = work;

    let index = wrappers.length - 1;
    const step = () => {
        if (context._progressiveCardWork !== work) {
            return;
        }

        // An open is building, transitioning or hydrating right now: yield,
        // the teardown is invisible (suspended host) and nothing depends on
        // its pace.
        if (_shouldTeardownYield()) {
            _scheduleWorkStep(work, step, 120);
            return;
        }

        if (index < 0) {
            context._progressiveCardWork = null;
            removeCardElements(context);
            onDone();
            return;
        }

        const stepStart = monotonicNow();
        do {
            wrappers[index]?.remove?.();
            index -= 1;
        } while (index >= 0 && (monotonicNow() - stepStart) < progressiveStepBudgetMs);

        _scheduleWorkStep(work, step, 0, 'background');
    };

    _scheduleWorkStep(work, step, 0, 'background');
}

// Sync rendered popup child cards with hass and config.
export function updateCardElements(context) {
    const cards = context.config.cards;
    if (!Array.isArray(cards) || !context.elements?.popUpContainer) return;

    const managed = context._managedCards || [];
    const wrappers = context._cardWrappers || [];
    const previousCardConfigs = context._lastCardConfigRefs || [];
    const renderedCardConfigs = context._lastRenderedCardConfigs || [];
    const isEditMode = context.editor || context.detectedEditor;

    // Rebuild when the card list or edit mode changed.
    const editModeChanged = (context._lastCardsEditMode ?? false) !== isEditMode;
    if (managed.length !== cards.length || editModeChanged) {
        context._lastCardsEditMode = isEditMode;
        // An in-flight hydration must not outlive the content it belongs to.
        settleProgressiveCardWork(context);
        removeCardElements(context);
        createCardElements(context);
        return;
    }

    context._lastCardsEditMode = isEditMode;

    // Refresh hass and config on each card.
    for (let i = 0; i < cards.length; i++) {
        const cardEl = managed[i];
        const cardWrapper = wrappers[i];
        if (!cardEl) continue;

        if (context._hass) {
            const shouldDeferOffscreenHassUpdate = context._offscreenPopupCards &&
                context._offscreenPopupCards.has(cardEl) &&
                !_hasStateDrivenVisibility(cards[i]);

            if (shouldDeferOffscreenHassUpdate) {
                // Defer: card is below the popup fold. Flushed when it scrolls in.
                cardEl._bubbleHassPending = true;
            } else {
                _applyHassToCardElement(cardEl, context._hass);
            }
        }

        const cardConfigChanged = previousCardConfigs[i] !== cards[i];
        if (cardConfigChanged) {
            const renderedCardConfig = _getRenderedCardConfig(cards[i]);
            renderedCardConfigs[i] = renderedCardConfig;
            previousCardConfigs[i] = cards[i];

            if (cardEl.config !== renderedCardConfig) {
                cardEl.config = renderedCardConfig;
            }

            _applyCardWrapperLayout(cardEl, cardWrapper, cards[i]);
        }
    }

    context._lastCardConfigRefs = previousCardConfigs;
    context._lastRenderedCardConfigs = renderedCardConfigs;

    // Keep edit wrappers in sync too.
    if (isEditMode && context._cardsContainer) {
        const editModes = context._cardsContainer.querySelectorAll('hui-card-edit-mode');
        editModes.forEach(el => {
            if (context._hass) el.hass = context._hass;
        });
    }
}

// Remove previously rendered popup child cards.
export function removeCardElements(context) {
    _teardownCardVisibilityObserver(context);
    if (Array.isArray(context._renderedItems)) {
        context._renderedItems.forEach((element) => {
            element?.remove();
        });
    }
    context._sortableEl?.remove();
    context._cardsContainer?.remove();

    context._sortableEl = null;
    context._cardsContainer = null;
    context._renderedItems = [];
    context._managedCards = [];
    context._cardWrappers = [];
    context._lastCardConfigRefs = [];
    context._lastRenderedCardConfigs = [];
    context._pendingCardHydration = null;
}

// Create a hui-card from a popup child config.
// Every pop-up child card is built through HA's hui-card wrapper and its
// property contract. That element is internal to the frontend: if a release
// renames or drops it, pop-ups would silently render nothing at all. Keep a
// resolved copy of the PUBLIC card-helpers API around so there is something
// to fall back on, and warn once so the breakage is diagnosable from a user
// report instead of looking like an empty pop-up.
let _cardHelpers = null;
let _cardHelpersRequested = false;
let _warnedAboutMissingHuiCard = false;

function _ensureCardHelpers() {
    if (_cardHelpers || _cardHelpersRequested) {
        return;
    }

    const loadCardHelpers = typeof window !== 'undefined' ? window.loadCardHelpers : undefined;
    if (typeof loadCardHelpers !== 'function') {
        return;
    }

    _cardHelpersRequested = true;
    try {
        Promise.resolve(loadCardHelpers())
            .then((helpers) => { _cardHelpers = helpers || null; })
            .catch(() => { _cardHelpersRequested = false; });
    } catch (_) {
        _cardHelpersRequested = false;
    }
}

// Kick the resolution as soon as this module loads: every consumer builds
// cards synchronously, so helpers requested at the moment of need arrive too
// late to serve the very build that needed them.
_ensureCardHelpers();

function _isHuiCardAvailable() {
    try {
        if (typeof customElements === 'undefined' || typeof customElements.get !== 'function') {
            // No registry to ask: assume the normal path rather than warning
            // about a drift we cannot actually observe.
            return true;
        }
        return !!customElements.get('hui-card');
    } catch (_) {
        // A throwing registry is not a reason to abandon the normal path.
        return true;
    }
}

export function _createHuiCard(cardConfig, context, preview) {
    // Normally already resolved by the module-load warm-up below; this covers
    // the case where loadCardHelpers only appeared after that.
    _ensureCardHelpers();

    const renderedConfig = _getRenderedCardConfig(cardConfig);

    if (!_isHuiCardAvailable()) {
        if (!_warnedAboutMissingHuiCard) {
            _warnedAboutMissingHuiCard = true;
            console.warn(
                'Bubble Card: Home Assistant no longer provides the "hui-card" element this version builds ' +
                'pop-up content with. Falling back to the public card helpers; please report this so Bubble Card can be updated.'
            );
        }

        if (typeof _cardHelpers?.createCardElement === 'function') {
            try {
                const fallbackEl = _cardHelpers.createCardElement(renderedConfig);
                if (fallbackEl) {
                    // Mirror what the hui-card wrapper forwards to the card it
                    // mounts, so the fallback renders like the normal path.
                    fallbackEl.hass = context._hass;
                    fallbackEl.layout = 'grid';
                    fallbackEl.preview = preview;
                }
                return fallbackEl || null;
            } catch (e) {
                console.warn('Bubble Card: Failed to create card element', e);
                return null;
            }
        }
    }

    try {
        const cardEl = document.createElement('hui-card');
        cardEl.hass = context._hass;
        cardEl.layout = 'grid';
        cardEl.preview = preview;
        cardEl.config = renderedConfig;
        if (typeof cardEl.load === 'function') {
            cardEl.load();
        }
        return cardEl;
    } catch (e) {
        console.warn('Bubble Card: Failed to create card element', e);
        return null;
    }
}

export function _isStandalonePopupCardConfig(cardConfig) {
    return Boolean(
        cardConfig?.type === 'custom:bubble-card' &&
        cardConfig?.card_type === 'pop-up'
    );
}

function _createNestedPopupWarningCard(context) {
    const t = setupTranslation(context?._hass ?? context?.hass);
    const warning = createElement('div', 'bubble-nested-popup-warning-card');
    warning.setAttribute('role', 'alert');

    const title = createElement('h4', 'bubble-nested-popup-warning-title');
    const icon = document.createElement('ha-icon');
    icon.setAttribute('icon', 'mdi:alert-outline');
    title.appendChild(icon);
    title.appendChild(document.createTextNode(t('editor.nested.title')));

    const message = createElement('p', 'bubble-nested-popup-warning-message');
    message.textContent = t('editor.nested.body');

    warning.appendChild(title);
    warning.appendChild(message);
    return warning;
}

function _conditionalClamp(value, minValue, maxValue) {
    if (typeof value !== 'number') return value;

    let nextValue = value;
    if (typeof minValue === 'number') {
        nextValue = Math.max(minValue, nextValue);
    }
    if (typeof maxValue === 'number') {
        nextValue = Math.min(maxValue, nextValue);
    }
    return nextValue;
}

function _migrateLayoutToGridOptions(layoutOptions = {}) {
    return {
        columns: typeof layoutOptions.grid_columns === 'number' ? layoutOptions.grid_columns * GRID_COLUMN_MULTIPLIER : layoutOptions.grid_columns,
        max_columns: typeof layoutOptions.grid_max_columns === 'number' ? layoutOptions.grid_max_columns * GRID_COLUMN_MULTIPLIER : layoutOptions.grid_max_columns,
        min_columns: typeof layoutOptions.grid_min_columns === 'number' ? layoutOptions.grid_min_columns * GRID_COLUMN_MULTIPLIER : layoutOptions.grid_min_columns,
        rows: layoutOptions.grid_rows,
        max_rows: layoutOptions.grid_max_rows,
        min_rows: layoutOptions.grid_min_rows,
    };
}

function _getConfigGridOptions(cardConfig = {}) {
    if (cardConfig.grid_options) {
        return cardConfig.grid_options;
    }
    if (cardConfig.layout_options) {
        return _migrateLayoutToGridOptions(cardConfig.layout_options);
    }
    return {};
}

function _hasExplicitRows(cardConfig = {}) {
    return cardConfig.rows !== undefined ||
        cardConfig.grid_options?.rows !== undefined ||
        cardConfig.layout_options?.grid_rows !== undefined;
}

function _getRenderedCardConfig(cardConfig = {}) {
    if (cardConfig?.type !== 'custom:bubble-card') {
        return cardConfig;
    }

    if (Object.prototype.hasOwnProperty.call(cardConfig, 'card_layout')) {
        return cardConfig;
    }

    if (!_hasExplicitRows(cardConfig)) {
        return cardConfig;
    }

    return {
        ...cardConfig,
        card_layout: 'large',
    };
}

function _computeCardGridSize(gridOptions = {}) {
    const rows = gridOptions.rows ?? DEFAULT_GRID_SIZE.rows;
    const columns = gridOptions.columns ?? DEFAULT_GRID_SIZE.columns;

    return {
        rows: typeof rows === 'number' ? _conditionalClamp(rows, gridOptions.min_rows, gridOptions.max_rows) : rows,
        columns: typeof columns === 'number' ? _conditionalClamp(columns, gridOptions.min_columns, gridOptions.max_columns) : columns,
    };
}

function _applyCardWrapperLayout(cardEl, cardWrapper, cardConfig) {
    if (!cardWrapper) return;

    let elementGridOptions = {};
    try {
        elementGridOptions = typeof cardEl?.getGridOptions === 'function' ? (cardEl.getGridOptions() || {}) : {};
    } catch (_) {
        elementGridOptions = {};
    }

    const { rows, columns } = _computeCardGridSize({
        ...elementGridOptions,
        ..._getConfigGridOptions(cardConfig),
    });

    if (typeof columns === 'number') {
        cardWrapper.style.setProperty('--column-size', columns);
    } else {
        cardWrapper.style.removeProperty('--column-size');
    }

    if (typeof rows === 'number') {
        cardWrapper.style.setProperty('--row-size', rows);
    } else {
        cardWrapper.style.removeProperty('--row-size');
    }

    cardWrapper.classList.toggle('fit-rows', typeof rows === 'number');
    cardWrapper.classList.toggle('full-width', columns === 'full');
}

function _bindCardLayoutUpdates(cardEl, cardWrapper, context, index) {
    cardEl.addEventListener('card-updated', (event) => {
        event.stopPropagation();
        const cardConfig = context.config?.cards?.[index] || cardEl.config || {};
        _applyCardWrapperLayout(cardEl, cardWrapper, cardConfig);
    });
}

// ---------------------------------------------------------------------------
// Lazy hass propagation via IntersectionObserver.
//
// The popup container is the scroll viewport for child cards. Cards below the
// fold receive `cardEl.hass = context._hass` on every HA state update, which
// triggers their internal render work even though they are invisible. We
// observe each wrapper relative to the popup container and:
//   - Mark cards that are not intersecting as off-screen.
//   - In updateCardElements, defer `hass` assignment for off-screen cards
//     (setting `_bubbleHassPending` so we know to flush on entry).
//   - When a card scrolls into view, immediately assign the latest `hass`
//     so it renders fresh content before the user can perceive it.
//
// Cards always receive `hass` at creation time (see `_createHuiCard`), so the
// initial paint is unaffected. Without IntersectionObserver support, or when
// observation hasn't started yet, cards default to being treated as visible.
function _setupCardVisibilityObserver(context) {
    _teardownCardVisibilityObserver(context);

    if (typeof IntersectionObserver !== 'function') return;

    const popUpContainer = context.elements?.popUpContainer;
    const wrappers = context._cardWrappers;
    if (!popUpContainer || !Array.isArray(wrappers) || wrappers.length === 0) return;
    // Only observe real DOM nodes (skip jsdom test stubs).
    if (typeof popUpContainer.appendChild !== 'function') return;

    const offscreen = new Set();
    const wrapperToCard = new WeakMap();
    const wrapperToPendingEntry = new WeakMap();

    let observer;
    try {
        observer = new IntersectionObserver((entries) => {
            const visiblePlaceholders = [];
            for (const entry of entries) {
                const cardEl = wrapperToCard.get(entry.target);
                if (!cardEl) {
                    const pending = context._pendingCardHydration;
                    const pendingEntry = wrapperToPendingEntry.get(entry.target);
                    if (entry.isIntersecting && Array.isArray(pending) && pendingEntry && pending.includes(pendingEntry)) {
                        visiblePlaceholders.push(pendingEntry);
                    }
                    continue;
                }
                if (entry.isIntersecting) {
                    offscreen.delete(cardEl);
                    if (cardEl._bubbleHassPending && context._hass) {
                        _applyHassToCardElement(cardEl, context._hass);
                    }
                } else {
                    offscreen.add(cardEl);
                }
            }

            // Placeholder cells scrolled into view: move them to the front of
            // the hydration queue in delivery order. At most one hydrates
            // synchronously per delivery — the rest drain through the
            // budgeted stepper, so a burst of visible placeholders never
            // turns into one long task.
            if (visiblePlaceholders.length > 0) {
                const pending = context._pendingCardHydration;
                for (let v = visiblePlaceholders.length - 1; v >= 0; v--) {
                    const pendingEntry = visiblePlaceholders[v];
                    const at = pending.indexOf(pendingEntry);
                    if (at > 0) {
                        pending.splice(at, 1);
                        pending.unshift(pendingEntry);
                    }
                }

                _hydrateCardAt(context, pending.shift());
                if (pending.length === 0) {
                    context._pendingCardHydration = null;
                    context._cachedPopupScrollableState = undefined;
                } else if (!context._progressiveCardWork) {
                    // Placeholders became visible before the post-open resume
                    // (the head does not cover the fold): drain the queue in
                    // budgeted steps starting now.
                    _startHydrationStepper(context);
                }
            }
        }, {
            root: popUpContainer,
            // Prewarm slightly outside the viewport so cards are fresh before
            // they become visible (e.g. during scroll momentum).
            rootMargin: '50px',
            threshold: 0.01,
        });
    } catch (_) {
        return;
    }

    const pendingByWrapperIndex = new Map();
    if (Array.isArray(context._pendingCardHydration)) {
        for (const pendingEntry of context._pendingCardHydration) {
            pendingByWrapperIndex.set(pendingEntry.wrapperIndex, pendingEntry);
        }
    }

    const managed = context._managedCards || [];
    for (let i = 0; i < wrappers.length; i++) {
        const wrapper = wrappers[i];
        const cardEl = managed[i];
        if (!wrapper || typeof wrapper.appendChild !== 'function') continue;
        if (cardEl) {
            wrapperToCard.set(wrapper, cardEl);
        } else if (pendingByWrapperIndex.has(i)) {
            wrapperToPendingEntry.set(wrapper, pendingByWrapperIndex.get(i));
        }
        try {
            observer.observe(wrapper);
        } catch (_) {
            // Ignore observation errors on detached wrappers.
        }
    }

    context._cardVisibilityObserver = observer;
    context._offscreenPopupCards = offscreen;
    // Late registration hook for cards hydrated after this setup ran.
    context._registerCardVisibility = (wrapper, cardEl) => {
        wrapperToCard.set(wrapper, cardEl);
    };
}

function _teardownCardVisibilityObserver(context) {
    if (context._cardVisibilityObserver) {
        try {
            context._cardVisibilityObserver.disconnect();
        } catch (_) {
            // Ignore.
        }
        context._cardVisibilityObserver = null;
    }
    context._offscreenPopupCards = null;
    context._registerCardVisibility = null;
}

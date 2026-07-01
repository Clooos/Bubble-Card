import { createElement } from '../../../tools/utils.js';
import cardsStyles from './styles.css';
import { createEditorCardElements } from './editor/index.js';

const GRID_COLUMN_MULTIPLIER = 3;
const DEFAULT_GRID_SIZE = { columns: 12, rows: 'auto' };
const NESTED_POPUP_WARNING_TITLE = 'Nested pop-ups are not supported';
const NESTED_POPUP_WARNING_MESSAGE = 'Adding a standalone pop-up inside another standalone pop-up is not supported. Please create this pop-up outside of the current pop-up instead.';

function _hasStateDrivenVisibility(cardConfig, visited = new Set()) {
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

    return nestedValues.some((value) => _hasStateDrivenVisibility(value, visited));
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
                ? _createNestedPopupWarningCard()
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
}

// Create a hui-card from a popup child config.
function _createHuiCard(cardConfig, context, preview) {
    try {
        const cardEl = document.createElement('hui-card');
        cardEl.hass = context._hass;
        cardEl.layout = 'grid';
        cardEl.preview = preview;
        cardEl.config = _getRenderedCardConfig(cardConfig);
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

function _createNestedPopupWarningCard() {
    const warning = createElement('div', 'bubble-nested-popup-warning-card');
    warning.setAttribute('role', 'alert');

    const title = createElement('h4', 'bubble-nested-popup-warning-title');
    const icon = document.createElement('ha-icon');
    icon.setAttribute('icon', 'mdi:alert-outline');
    title.appendChild(icon);
    title.appendChild(document.createTextNode(NESTED_POPUP_WARNING_TITLE));

    const message = createElement('p', 'bubble-nested-popup-warning-message');
    message.textContent = NESTED_POPUP_WARNING_MESSAGE;

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

    let observer;
    try {
        observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                const cardEl = wrapperToCard.get(entry.target);
                if (!cardEl) continue;
                if (entry.isIntersecting) {
                    offscreen.delete(cardEl);
                    if (cardEl._bubbleHassPending && context._hass) {
                        _applyHassToCardElement(cardEl, context._hass);
                    }
                } else {
                    offscreen.add(cardEl);
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

    const managed = context._managedCards || [];
    for (let i = 0; i < wrappers.length; i++) {
        const wrapper = wrappers[i];
        const cardEl = managed[i];
        if (!wrapper || !cardEl || typeof wrapper.appendChild !== 'function') continue;
        wrapperToCard.set(wrapper, cardEl);
        try {
            observer.observe(wrapper);
        } catch (_) {
            // Ignore observation errors on detached wrappers.
        }
    }

    context._cardVisibilityObserver = observer;
    context._offscreenPopupCards = offscreen;
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
}

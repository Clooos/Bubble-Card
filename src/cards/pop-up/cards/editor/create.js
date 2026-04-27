import { createElement } from '../../../../tools/utils.js';

const mdiPlus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";

const CARD_SORTABLE_OPTIONS = {
    delay: 100,
    delayOnTouchOnly: true,
    direction: 'vertical',
    invertedSwapThreshold: 0.7,
};

export function createEditorCardStructure(context, cards, options) {
    const sortable = _createSortable(context, options.actions);
    const sortableContainer = createElement('div', 'bubble-cards-editor-container bubble-cards-grid-container edit-mode');

    for (let i = 0; i < cards.length; i++) {
        const cardConfig = cards[i];
        const cardEl = options.createCard(cardConfig);
        if (!cardEl) continue;

        const cardWrapper = createElement('div', 'card');
        const editModeEl = _createCardEditMode(cardEl, context, i);
        cardWrapper.appendChild(editModeEl);
        options.applyCardWrapperLayout(cardEl, cardWrapper, cardConfig);
        options.bindCardLayoutUpdates(cardEl, cardWrapper, context, i);

        context._managedCards.push(cardEl);
        context._cardWrappers.push(cardWrapper);
        sortableContainer.appendChild(cardWrapper);
    }

    sortableContainer.appendChild(_createAddButton(context, options.actions.addCard));
    sortable.appendChild(sortableContainer);
    context.elements.popUpContainer.appendChild(sortable);

    context._sortableEl = sortable;
    context._cardsContainer = sortableContainer;
    context._renderedItems.push(sortable);
}

function _createCardEditMode(cardEl, context, index) {
    const editModeEl = document.createElement('hui-card-edit-mode');
    editModeEl.hass = context._hass;
    // Fake lovelace: editMode enables the toolbar; saveConfig no-op prevents TypeError from HA resize handles.
    editModeEl.lovelace = {
        editMode: true,
        saveConfig: async () => {},
    };
    editModeEl.path = [0, 0, index];
    editModeEl.hiddenOverlay = false;
    editModeEl.appendChild(cardEl);
    return editModeEl;
}

function _createAddButton(context, handleAddCard) {
    const btn = createElement('button', 'bubble-cards-add-button');
    const addCardLabel = context._hass?.localize?.('ui.panel.lovelace.editor.section.add_card') || 'Add card';

    btn.setAttribute('aria-label', addCardLabel);
    btn.title = addCardLabel;

    const icon = document.createElement('ha-svg-icon');
    icon.path = mdiPlus;
    btn.appendChild(icon);
    const text = document.createElement('span');
    text.textContent = addCardLabel;
    btn.appendChild(text);

    btn.addEventListener('click', () => handleAddCard());
    return btn;
}

function _createSortable(context, actions) {
    const sortable = document.createElement('ha-sortable');
    sortable.disabled = false;
    sortable.draggableSelector = '.card';
    sortable.rollback = false;
    sortable.invertSwap = true;
    sortable.options = CARD_SORTABLE_OPTIONS;

    sortable.addEventListener('item-moved', (ev) => {
        ev.stopPropagation();
        const { oldIndex, newIndex } = ev.detail;
        actions.moveCard(oldIndex, newIndex);
    });

    sortable.addEventListener('drag-start', () => {
        _updateHiddenOverlay(context, true);
    });

    sortable.addEventListener('drag-end', () => {
        _updateHiddenOverlay(context, false);
    });

    sortable.addEventListener('ll-edit-card', (ev) => {
        ev.stopPropagation();
        actions.editCard(ev.detail.path[2]);
    });

    sortable.addEventListener('ll-duplicate-card', (ev) => {
        ev.stopPropagation();
        actions.duplicateCard(ev.detail.path[2]);
    });

    sortable.addEventListener('ll-delete-card', (ev) => {
        ev.stopPropagation();
        actions.removeCard(ev.detail.path[2]);
    });

    sortable.addEventListener('ll-copy-card', (ev) => {
        ev.stopPropagation();
        actions.copyCard(ev.detail.path[2]);
    });

    // Intercept ll-change-grid-options: merge partial gridOptions into the card config, prevent bubbling to HA.
    sortable.addEventListener('ll-change-grid-options', (ev) => {
        ev.stopPropagation();
        const index = ev.detail?.path?.[2];
        const gridOptions = ev.detail?.gridOptions;
        if (typeof index === 'number' && gridOptions) {
            const currentCard = (context.config?.cards || [])[index];
            if (currentCard) {
                actions.updateCardGridOptions(index, {
                    ...currentCard,
                    grid_options: { ...(currentCard.grid_options || {}), ...gridOptions },
                });
            }
        }
    });

    // Intercept ll-move-to-section: unsupported in pop-ups, prevent bubbling. Cut = ll-copy-card + ll-delete-card (already handled).
    sortable.addEventListener('ll-move-to-section', (ev) => {
        ev.stopPropagation();
    });

    return sortable;
}

function _updateHiddenOverlay(context, hidden) {
    if (!context._cardsContainer) return;
    const editModes = context._cardsContainer.querySelectorAll('hui-card-edit-mode');
    editModes.forEach(el => { el.hiddenOverlay = hidden; });
}
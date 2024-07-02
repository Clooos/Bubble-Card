import { addActions, addFeedback } from "../../tools/tap-actions.ts";
import { createElement, toggleEntity, throttle, forwardHaptic, isEntityType } from "../../tools/utils.ts";
import styles from "./styles.ts";

export function createStructure(context) {
  if (!context.elements) context.elements = {};

  let container = context.content;

  context.elements.selectCardContainer = createElement('div', 'bubble-select-card-container');
  context.elements.selectCard = createElement('div', 'bubble-select-card');
  context.elements.selectBackground = createElement('div', 'bubble-select-background');
  context.elements.nameContainer = createElement('div', 'bubble-name-container');
  context.elements.iconContainer = createElement('div', 'bubble-icon-container');
  context.elements.name = createElement('div', 'bubble-name');
  context.elements.state = createElement('div', 'bubble-state');
  context.elements.feedback = createElement('div', 'bubble-feedback-element');
  context.elements.icon = createElement('ha-icon', 'bubble-icon');
  context.elements.image = createElement('div', 'bubble-entity-picture');
  context.elements.style = createElement('style');
  context.elements.customStyle = createElement('style');

  // New Dropdown Elements
  context.elements.dropdownContainer = createElement('div', 'bubble-dropdown-container');
  context.elements.dropdownSelect = createElement('ha-select', 'bubble-dropdown-select');
  context.elements.dropdownSelect.setAttribute('outlined', '');
  context.elements.dropdownArrow = createElement('ha-icon', 'bubble-dropdown-arrow');
  context.elements.dropdownArrow.setAttribute('icon', 'mdi:chevron-down');

  context.elements.feedback.style.display = 'none';
  context.elements.style.innerText = styles;

  addFeedback(context.elements.selectBackground, context.elements.feedback);
  addActions(context.elements.iconContainer, context.config);

  context.elements.iconContainer.appendChild(context.elements.icon);
  context.elements.iconContainer.appendChild(context.elements.image);

  context.elements.nameContainer.appendChild(context.elements.name);
  context.elements.nameContainer.appendChild(context.elements.state);

  context.elements.selectCard.appendChild(context.elements.selectBackground);
  context.elements.selectCard.appendChild(context.elements.iconContainer);
  context.elements.selectCard.appendChild(context.elements.nameContainer);
  context.elements.selectCard.appendChild(context.elements.dropdownContainer);

  context.elements.selectCardContainer.appendChild(context.elements.selectCard);

  context.elements.selectBackground.appendChild(context.elements.feedback);

  context.elements.dropdownContainer.appendChild(context.elements.dropdownArrow);

  container.innerHTML = '';

  container.appendChild(context.elements.selectCardContainer);

  container.appendChild(context.elements.style);
  container.appendChild(context.elements.customStyle);

  // Create and append style for ha-select

  context.elements.dropdownStyleElement = createElement('style');
  context.elements.dropdownCustomStyleElement = createElement('style');
  context.elements.dropdownStyleElement.textContent = styles;

  function addStyleWhenShadowRootAvailable() {
    if (context.elements.dropdownSelect.shadowRoot) {
        context.elements.dropdownSelect.shadowRoot.appendChild(context.elements.dropdownStyleElement);
        context.elements.dropdownSelect.shadowRoot.appendChild(context.elements.dropdownCustomStyleElement);
    } else {
        setTimeout(addStyleWhenShadowRootAvailable, 0);
    }
  }

  addStyleWhenShadowRootAvailable();

  context.cardType = `select`;

}

export function createDropdownActions(context) {
  let dropdownArrow = context.elements.dropdownArrow;
  let dropdownSelect = context.elements.dropdownSelect;
  let card = context.elements.selectCardContainer;

  // Focus animation

  context.elements.selectBackground.addEventListener('click', function() {
    let selectMenu = context.elements.dropdownSelect.shadowRoot.querySelector('mwc-menu');
    card.style.zIndex = '1';
    selectMenu.setAttribute('open', '');
    dropdownArrow.style.transform = 'rotate(180deg)';
    card.style.border = 'solid 2px var(--accent-color)';
    context.elements.dropdownArrow.style.background = 'var(--accent-color)';
  });

  dropdownSelect.addEventListener('closed', function() {
    dropdownArrow.style.transform = 'rotate(0deg)';
    card.style.border = 'solid 2px rgba(0,0,0,0)';
    context.elements.dropdownArrow.style.background = '';
    card.style.zIndex = '0';
  });

  // Update selected inputt

  context.elements.dropdownSelect.addEventListener('click', function() {
    let selectedOption = context.elements.dropdownSelect.shadowRoot?.querySelector('.mdc-select__selected-text').textContent;
    let entityId = context.config.entity;
    context._hass.callService('input_select', 'select_option', {
        entity_id: entityId,
        option: selectedOption
    });
  });

  // Append options to the dropdown select element

  let options = context._hass.states[context.config.entity].attributes.options;
  let state = context._hass.states[context.config.entity].state;

  options.forEach((option, index) => {
    const opt = createElement('mwc-list-item');
    opt.setAttribute('value', option);
    opt.textContent = option;
    if (option === state) {
      opt.setAttribute('selected', '');
    }
    context.elements.dropdownSelect.appendChild(opt);
  });

  context.elements.dropdownContainer.appendChild(context.elements.dropdownSelect);
}
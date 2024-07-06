import { addActions, addFeedback } from "../../tools/tap-actions.ts";
import { createElement, toggleEntity, throttle, forwardHaptic } from "../../tools/utils.ts";
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

  context.elements.selectCardContainer.appendChild(context.elements.selectCard);

  context.elements.selectBackground.appendChild(context.elements.feedback);

  container.innerHTML = '';

  container.appendChild(context.elements.selectCardContainer);

  container.appendChild(context.elements.style);
  container.appendChild(context.elements.customStyle);

  context.cardType = `select`;
}

export function createDropdownStructure(context, elements = context.elements, showArrow) {
  elements.dropdownContainer = createElement('div', 'bubble-dropdown-container');
  elements.dropdownSelect = createElement('ha-select', 'bubble-dropdown-select');
  elements.dropdownSelect.setAttribute('outlined', '');
  elements.dropdownArrow = createElement('ha-icon', 'bubble-dropdown-arrow');
  elements.dropdownArrow.setAttribute('icon', 'mdi:chevron-down');

  // Append select and arrow to the container
  elements.dropdownContainer.appendChild(elements.dropdownArrow);
  
  // Create style elements
  elements.dropdownStyleElement = createElement('style');
  elements.dropdownCustomStyleElement = createElement('style');
  elements.dropdownStyleElement.textContent = styles;

  // Function to add styles to shadowRoot
  function addStyleWhenShadowRootAvailable() {
    if (elements.dropdownSelect.shadowRoot) {
      // Apply additional styles if sub-button/other
      if (elements !== context.elements) {
        elements.dropdownContainer.style.display = '';
        elements.dropdownSelectStyleElement = createElement('style');
        elements.dropdownSelectStyleElement.textContent = styles;
        elements.dropdownSelect.shadowRoot.appendChild(elements.dropdownSelectStyleElement);
        elements.dropdownContainer.appendChild(elements.dropdownStyleElement);

        if (showArrow) elements.dropdownContainer.style.width = '24px';
        elements.dropdownArrow.style.height = '20px';
        elements.dropdownArrow.style.width = '20px';
        elements.dropdownSelect.style.position = 'relative';
        elements.dropdownSelect.style.top = '-23px';
      } else {
        elements.dropdownSelect.shadowRoot.appendChild(elements.dropdownStyleElement);
        elements.dropdownSelect.shadowRoot.appendChild(elements.dropdownCustomStyleElement);
      }
    } else {
      setTimeout(addStyleWhenShadowRootAvailable);
    }
  }

  // Invoke the function to add styles
  addStyleWhenShadowRootAvailable();

  // Append dropdownContainer to the appropriate parent
  if (elements === context.elements) {
    elements.selectCard.appendChild(elements.dropdownContainer);
  } else {
    elements.appendChild(elements.dropdownContainer);
  }
}

export function createDropdownActions(context, elements = context.elements, entity = context.config.entity) {
  let dropdownArrow = elements.dropdownArrow;
  let dropdownSelect = elements.dropdownSelect;
  let card = elements === context.elements ? elements.selectCardContainer : elements;
  let eventCaller = elements === context.elements ? elements.selectBackground : elements;

  if (elements !== context.elements) {
    card.style.border = 'solid 2px rgba(0,0,0,0)';
  }

  // Focus animation
  eventCaller.addEventListener('click', function(event) {
    let selectMenu = dropdownSelect.shadowRoot.querySelector('mwc-menu');

    if (event.target.tagName.toLowerCase() === 'mwc-list-item') {
      return;
    }

    if (elements !== context.elements) {
      elements.mainContainer = elements.parentElement.parentElement.parentElement;
      elements.mainContainer.style.overflow = 'visible';
      elements.mainContainer.style.zIndex = '1';
      selectMenu.style.position = 'relative';
      selectMenu.style.right = '138px';
    } else {
      card.style.zIndex = '1';
    }

    if (!selectMenu.hasAttribute('open')) {
      selectMenu.setAttribute('open', '');
    }

    dropdownArrow.style.transform = 'rotate(180deg)';
    card.style.border = 'solid 2px var(--accent-color)';
    elements.dropdownArrow.style.background = 'var(--accent-color)';
  });

  dropdownSelect.addEventListener('closed', function(event) {
    event.stopPropagation();
    event.preventDefault();

    dropdownArrow.style.transform = 'rotate(0deg)';
    card.style.border = 'solid 2px rgba(0,0,0,0)';
    elements.dropdownArrow.style.background = '';
    card.style.zIndex = '0';
  });

  // Update selected input
  elements.dropdownSelect.addEventListener('click', function(event) {
    let selectedOption = elements.dropdownSelect.shadowRoot?.querySelector('.mdc-select__selected-text').textContent;
    const isInputSelect = entity?.startsWith("input_select");
    let service = isInputSelect ? 'input_select' : 'select';
    context._hass.callService(service, 'select_option', {
        entity_id: entity,
        option: selectedOption
    });
  });
}

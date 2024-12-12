import { initializesubButtonIcon } from '../../tools/global-changes.ts';
import { 
  applyScrollingEffect,
  getIcon,
  getImage,
  getName,
  getState,
  getAttribute,
  getWeatherIcon,
  setLayout,
  createElement
} from '../../tools/utils.ts';
import { 
  getTranslatedAttribute, 
  getOptionIcon,
  getSelectedAttribute
} from "./helpers.ts";

export function changeIcon(context) {
  const icon = getIcon(context);
  const image = getImage(context);

  if (image !== '') {
    context.elements.image.style.backgroundImage = 'url(' + image + ')';
    context.elements.icon.style.display = 'none';
    context.elements.image.style.display = '';
  } else if (icon !== '') {
    context.elements.icon.icon = icon;
    context.elements.icon.style.color = 'inherit';
    context.elements.icon.style.display = '';
    context.elements.image.style.display = 'none';
  } else {
    context.elements.icon.style.display = 'none';
    context.elements.image.style.display = 'none';
  }
}

export function changeName(context) {
  if (context.config.styles?.includes("card.querySelector('.bubble-name').innerText")) return;
  const name = getName(context);
  if (name !== context.elements.previousName) {
    applyScrollingEffect(context, context.elements.name, name);
    context.elements.previousName = name;
  }
}

export function changeStatus(context) {
  const state = getState(context);

  if (state === 'unavailable') {
    context.card.classList.add('is-unavailable');
  } else {
    context.card.classList.remove('is-unavailable');
  }
}

export function changeDropdownList(context, elements = context.elements, entity = context.config.entity, config) {
  elements.currentState = context._hass.states[entity]?.state;

  if (!elements.currentState) return;

  elements.currentList = entity?.startsWith("input_select") || entity?.startsWith("select") ? context._hass.states[entity].attributes.options : context._hass.states[entity].attributes[config.select_attribute];

  if (elements.previousList === elements.currentList && elements.previousState === elements.currentState) return;

  // Append options to the dropdown select element
  let options = elements.currentList;
  let state = elements.currentState;

  // Clear the dropdown list
  while (elements.dropdownSelect.firstChild) {
    elements.dropdownSelect.removeChild(elements.dropdownSelect.firstChild);
  }

  options.forEach((option) => {
      const opt = document.createElement('mwc-list-item');
      opt.value = option;

      const icon = getOptionIcon(context, context._hass.states[entity], config.select_attribute, option);
      if (icon) {
        opt.graphic = 'icon';
        opt.appendChild(icon);
      }

      const translatedLabel = getTranslatedAttribute(
          context, context._hass.states[entity], 
          config.select_attribute, 
          option
      );

      opt.appendChild(document.createTextNode(translatedLabel));

      if (option === getSelectedAttribute(context._hass.states[entity], config.select_attribute)) {
          opt.setAttribute('selected', '');
      }

      elements.dropdownSelect.appendChild(opt);
      elements.previousList = elements.currentList;
      elements.previousState = elements.currentState;
  });

  elements.dropdownContainer.appendChild(elements.dropdownSelect);
}

export function changeStyle(context) {
  initializesubButtonIcon(context);
  setLayout(context);

  const state = getState(context);

  let customStyle = '';

  try {
    customStyle = context.config.styles
      ? Function('hass', 'entity', 'state', 'icon', 'subButtonIcon', 'getWeatherIcon', 'card', `return \`${context.config.styles}\`;`)
        (context._hass, context.config.entity, state, context.elements.icon, context.subButtonIcon, getWeatherIcon, context.card)
      : '';
  } catch (error) {
      throw new Error(`Error in generating select custom templates: ${error.message}`);
  }

  if (context.elements.customStyle) {
    context.elements.customStyle.innerText = customStyle;
    context.elements.dropdownCustomStyleElement.innerText = customStyle;
  }
}

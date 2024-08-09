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

export function changeDropdownList(context, elements = context.elements, entity = context.config.entity) {
  elements.currentList = context._hass.states[entity].attributes.options;
  elements.currentState = context._hass.states[entity].state;

  if (elements.previousList === elements.currentList && elements.previousState === elements.currentState) return;

  // Append options to the dropdown select element
  let options = elements.currentList;
  let state = elements.currentState;

  // Clear the dropdown list
  while (elements.dropdownSelect.firstChild) {
    elements.dropdownSelect.removeChild(elements.dropdownSelect.firstChild);
  }

  options.forEach((option, index) => {
    const opt = createElement('mwc-list-item');
    opt.setAttribute('value', option);
    opt.textContent = option;
    if (option === state) {
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

  const cardLayout = context.config.card_layout;

  function addLayoutWhenShadowRootAvailable() {
    const mwcMenu = context.elements.dropdownSelect.shadowRoot?.querySelector('mwc-menu');
    const mwcMenuShadowRoot = mwcMenu?.shadowRoot;
    const mwcMenuSurface = mwcMenuShadowRoot?.querySelector('mwc-menu-surface');
    const mwcMenuSurfaceShadowRoot = mwcMenuSurface?.shadowRoot;
    const mdcMenuSurface = mwcMenuSurfaceShadowRoot?.querySelector('.mdc-menu-surface');

    if (mdcMenuSurface) {
      if (cardLayout === 'large' || cardLayout === 'large-2-rows') {
          mdcMenuSurface.style.marginTop = '14px';
      } else {
          mdcMenuSurface.style.marginTop = '';
      }
    } else {
        setTimeout(addLayoutWhenShadowRootAvailable, 0);
    }
  }

  addLayoutWhenShadowRootAvailable();

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

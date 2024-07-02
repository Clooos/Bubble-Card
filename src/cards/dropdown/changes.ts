import { initializesubButtonIcon } from '../../tools/global-changes.ts';
import { 
  applyScrollingEffect,
  getIcon,
  getImage,
  getName,
  getState,
  getAttribute,
  getWeatherIcon,
  setLayout
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
      ? Function('hass', 'entityId', 'state', 'icon', 'subButtonIcon', 'getWeatherIcon', 'card', `return \`${context.config.styles}\`;`)
        (context._hass, context.config.entity, state, context.elements.icon, context.subButtonIcon, getWeatherIcon, context.card)
      : '';
  } catch (error) {
    console.error('Error in generating dropdown custom templates:', error);
  }

  if (context.elements.customStyle) {
    context.elements.customStyle.innerText = customStyle;
    context.elements.dropdownCustomStyleElement.innerText = customStyle;
  }
}

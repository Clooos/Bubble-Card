import { convertToRGBA } from "../../tools/style.ts";
import { addActions } from "../../tools/tap-actions.ts";
import { createElement, toggleEntity, configChanged } from "../../tools/utils.ts";
import { onUrlChange, removeHash } from "./helpers.ts";
import styles, { backdropStyles, headerStyles } from "./styles.ts";

let backdrop;
let hideBackdrop = false;

export function getBackdrop(context) {
  if (backdrop) {
    return backdrop;
  }

  const themeColorBackground = 
    getComputedStyle(document.body).getPropertyValue('--ha-card-background') ??
    getComputedStyle(document.body).getPropertyValue('--card-background-color');

  const backdropStyle = createElement('style');
  backdropStyle.innerHTML = `
    ${backdropStyles}
    .bubble-backdrop {
      background-color: ${convertToRGBA(themeColorBackground, 0.7, 0.7)};
    }
  `;
  document.head.appendChild(backdropStyle);

  const backdropCustomStyle = createElement('style');
  document.head.appendChild(backdropCustomStyle);

  const backdropElement = createElement('div', 'bubble-backdrop backdrop is-hidden');
  if (context.config.hide_backdrop) {
    backdropElement.style.display = 'none';
    backdropElement.style.pointerEvents = 'none';
  }
  document.body.appendChild(backdropElement);

  function showBackdrop() {
    backdropElement.classList.add('is-visible');
    backdropElement.classList.remove('is-hidden');
  }
  
  function hideBackdrop() {
    backdropElement.classList.add('is-hidden');
    backdropElement.classList.remove('is-visible');
  }

  backdrop = { hideBackdrop, showBackdrop, backdropElement, backdropCustomStyle };

  return backdrop;
}

export function createHeader(context) {
  context.elements = {};
  context.elements.closeIcon = createElement('ha-icon', 'bubble-close-icon');
  context.elements.closeIcon.icon = 'mdi:close';
  context.elements.closeButton = createElement("button", "bubble-close-button close-pop-up");
  context.elements.closeButton.addEventListener('click', removeHash);
  context.elements.closeButton.appendChild(context.elements.closeIcon);

  context.elements.buttonContainer = createElement('div', 'bubble-button-container');
  context.elements.header = createElement('div', 'bubble-header');

  const existingHeader = context.popUp.querySelector('.bubble-header-container');
  if (existingHeader === null) {
    context.elements.headerContainer = createElement("div", 'bubble-header-container');
    context.elements.headerContainer.setAttribute("id", "header-container");
    context.elements.headerContainer.appendChild(context.elements.header);
    context.elements.headerContainer.appendChild(context.elements.closeButton);
  } else {
    context.elements.headerContainer = existingHeader;
    context.elements.closeIcon = existingHeader.querySelector('.bubble-close-icon');
    context.elements.closeButton = existingHeader.querySelector('.bubble-close-button');
    context.elements.buttonContainer = existingHeader.querySelector('.bubble-button-container');
    context.elements.header = existingHeader.querySelector('.bubble-header');
  }
}

export function createStructure(context) {
  try {
    context.elements.style = createElement('style');
    context.elements.style.innerText = `${headerStyles}`;
    context.elements.customStyle = createElement('style');

    context.content.appendChild(context.elements.style);
    context.content.appendChild(context.elements.customStyle);

    const themeColorBackground = 
      getComputedStyle(document.body).getPropertyValue('--ha-card-background') ??
      getComputedStyle(document.body).getPropertyValue('--card-background-color');

    const color = context.config.bg_color ? context.config.bg_color : themeColorBackground;
    const opacity = context.config.bg_opacity ?? 88;
    const rgbaColor = convertToRGBA(color, (opacity / 100), 1.02);
    context.popUp.style.backgroundColor = rgbaColor;
    context.popUp.style.setProperty('--desktop-width', context.config.width_desktop ?? '540px');
    if (context.config.is_sidebar_hidden) {
      context.popUp.classList.add('is-sidebar-hidden');
    }

    if (context.config.close_on_click) {
      context.popUp.addEventListener('touchend', removeHash);
    }

    const contextOnUrlChange = onUrlChange(context);

    setTimeout(() => {
      contextOnUrlChange();
    }, 0);

    window.addEventListener('location-changed', contextOnUrlChange);
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && context.config.hash === location.hash) {
        removeHash();
      }
    });

    const existingContainer = context.popUp.querySelector('.bubble-pop-up-container');
    if (existingContainer === null) {

      context.elements.popUpContainer = createElement('div');
      context.elements.popUpContainer.classList.add('bubble-pop-up-container');
      let child = context.popUp.firstChild;
      
      while (child) {
        context.elements.popUpContainer.appendChild(child);
        child = context.popUp.firstChild;
      }
    } else {
      context.elements.popUpContainer = existingContainer;
    }

    context.popUp.appendChild(context.elements.headerContainer);
    context.popUp.appendChild(context.elements.popUpContainer);

  } catch (e) {
    console.error(e)
  }
}

export function prepareStructure(context) {
  try {
    context.cardType = "pop-up";
    context.verticalStack = context.getRootNode();
    context.popUp = context.verticalStack.querySelector('#root');
    context.popUp.classList.add('bubble-pop-up', 'pop-up', 'is-popup-closed');
    context.verticalStack.removeChild(context.popUp);
    context.elements = {};
    getBackdrop(context);

    hideBackdrop = hideBackdrop || (context.config.hide_backdrop ?? false);

    context.popUp.style.setProperty('--custom-height-offset-desktop', context.config.margin_top_desktop  ?? '0px');
    context.popUp.style.setProperty('--custom-height-offset-mobile', context.config.margin_top_mobile  ?? '0px');
    context.popUp.style.setProperty('--custom-margin', `-${context.config.margin ?? '7px'}`);
    context.popUp.style.setProperty('--custom-backdrop-filter', hideBackdrop ? 'none' : `blur(${context.config.bg_blur ?? 10}px)`);
    context.popUp.style.setProperty('--custom-popup-filter', hideBackdrop ? `blur(${context.config.bg_blur ?? 10}px)` :  'none');
    context.popUp.style.setProperty('--custom-shadow-opacity', (context.config.shadow_opacity ?? 0) / 100);

    const style = createElement('style');
    context.elements.customStyle = createElement('style');
    style.innerText = styles;
    context.popUp.appendChild(style);
    context.popUp.appendChild(context.elements.customStyle);

  } catch (e) {
    console.error(e)
  }
}
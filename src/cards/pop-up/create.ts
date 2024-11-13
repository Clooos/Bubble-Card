import { convertToRGBA } from "../../tools/style.ts";
import { addActions } from "../../tools/tap-actions.ts";
import { createElement, toggleEntity, configChanged, fireEvent, forwardHaptic } from "../../tools/utils.ts";
import { onUrlChange, removeHash, hideContent } from "./helpers.ts";
import styles, { backdropStyles } from "./styles.ts";

let backdrop;
let hideBackdrop = false;
let startTouchY;
let lastTouchY;
let themeColorBackground;

const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
const backdropStyle = createElement('style');

function updateBackdropColor() {
  themeColorBackground = 
    getComputedStyle(document.body).getPropertyValue('--ha-card-background') ||
    getComputedStyle(document.body).getPropertyValue('--card-background-color');

  backdropStyle.style.setProperty('--bubble-backdrop-background-color', convertToRGBA(themeColorBackground, 0.7, 0.7));
}

colorScheme.addEventListener('change', updateBackdropColor);
updateBackdropColor();

export function getBackdrop(context) {
  const isBackdropHidden = context.config.hide_backdrop ?? true;

  if (backdrop) return backdrop;

  backdropStyle.innerHTML = backdropStyles;
  document.head.appendChild(backdropStyle);

  const backdropCustomStyle = createElement('style');
  document.head.appendChild(backdropCustomStyle);

  const backdropElement = createElement('div', 'bubble-backdrop backdrop is-hidden');

  if (isBackdropHidden) {
    backdropElement.style.display = 'none';
    backdropElement.style.pointerEvents = 'none';
  }

  document.body.appendChild(backdropElement);
  backdropElement.style.setProperty('--custom-backdrop-filter', `blur(${context.config.bg_blur ?? 10}px)`);

  function showBackdrop() {
    requestAnimationFrame(() => {
      backdropElement.classList.add('is-visible');
      backdropElement.classList.remove('is-hidden');
    });
  }
  
  function hideBackdropFunc() {
    backdropElement.classList.add('is-hidden');
    backdropElement.classList.remove('is-visible');
  }

  backdrop = { hideBackdrop: hideBackdropFunc, showBackdrop, backdropElement, backdropCustomStyle };
  return backdrop;
}

export function createHeader(context) {
  context.elements = {
    closeIcon: createElement('ha-icon', 'bubble-close-icon'),
    closeButton: createElement("button", "bubble-close-button close-pop-up"),
    buttonContainer: createElement('div', 'bubble-button-container'),
    header: createElement('div', 'bubble-header')
  };

  context.elements.closeIcon.icon = 'mdi:close';
  context.elements.closeButton.appendChild(context.elements.closeIcon);
  context.elements.closeButton.addEventListener('click', () => {
    removeHash();
    forwardHaptic("selection");
  });

  const existingHeader = context.popUp.querySelector('.bubble-header-container');
  if (!existingHeader) {
    context.elements.headerContainer = createElement("div", 'bubble-header-container');
    context.elements.headerContainer.setAttribute("id", "header-container");
    context.elements.headerContainer.appendChild(context.elements.header);
    context.elements.headerContainer.appendChild(context.elements.closeButton);
    context.elements.header.appendChild(context.elements.buttonContainer);
  } else {
    Object.assign(context.elements, {
      headerContainer: existingHeader,
      closeIcon: existingHeader.querySelector('.bubble-close-icon'),
      closeButton: existingHeader.querySelector('.bubble-close-button'),
      buttonContainer: existingHeader.querySelector('.bubble-button-container'),
      header: existingHeader.querySelector('.bubble-header')
    });
  }

  context.popUp.addEventListener('touchstart', (event) => {
    startTouchY = event.touches[0].clientY;
  }, { passive: true });

  context.elements.header.addEventListener('touchmove', (event) => {
    const offset = event.touches[0].clientY - startTouchY;
    if (offset > 0) context.popUp.style.transform = `translateY(${offset}px)`;
  }, { passive: true });

  context.elements.header.addEventListener('touchend', (event) => {
    const offset = event.changedTouches[0].clientY - startTouchY;
    if (offset > 50) removeHash();
    else context.popUp.style.transform = '';
  }, { passive: true });
}

export function createStructure(context) {
  try {
    context.elements.style = createElement('style');
    context.elements.style.innerText = styles;

    let existingStyle = context.popUp.querySelector('style');
    
    if (!context.stylesAdded || !existingStyle) {
      context.elements.customStyle = createElement('style');
      context.popUp.appendChild(context.elements.customStyle);
      context.popUp.appendChild(context.elements.style);
      context.stylesAdded = true;
    } else {
      context.elements.customStyle = existingStyle;
    }
    
    let themeColorBackground;
    const opacity = context.config.bg_opacity ?? 88;

    function updatePopupColor() {
      themeColorBackground = 
        getComputedStyle(document.body).getPropertyValue('--ha-card-background') ||
        getComputedStyle(document.body).getPropertyValue('--card-background-color');

        const color = context.config.bg_color ? context.config.bg_color : themeColorBackground;
        const rgbaColor = convertToRGBA(color, (opacity / 100), 1.02);

        context.popUp.style.setProperty('--bubble-pop-up-background-color', rgbaColor);
    }

    colorScheme.addEventListener('change', () => {
      updatePopupColor()
    }, { passive: true });

    updatePopupColor();

    context.popUp.style.setProperty('--desktop-width', context.config.width_desktop ?? '540px');

    if (context.config.close_on_click) {
      context.popUp.addEventListener('touchend', removeHash, { passive: true });
    }

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && context.config.hash === location.hash) {
        removeHash();
      }
    }, { passive: true });

    let slideToCloseDistance = context.config.slide_to_close_distance ?? 400;

    context.popUp.addEventListener('touchmove', (event) => {
        // Calculate the distance the finger has traveled
        let touchMoveDistance = event.touches[0].clientY - startTouchY;

        // If the distance is positive (i.e., the finger is moving downward) and exceeds a certain threshold, close the pop-up
        if (touchMoveDistance > slideToCloseDistance && event.touches[0].clientY > lastTouchY) {
            removeHash();
        }

        // Update the Y position of the last touch
        lastTouchY = event.touches[0].clientY;
    }, { passive: true });

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

    context.popUpBackground = createElement("div", 'bubble-pop-up-background');
    context.popUp.appendChild(context.popUpBackground);
    context.popUp.appendChild(context.elements.headerContainer);
    context.popUp.appendChild(context.elements.popUpContainer);

    hideContent(context, 0);
  } catch (e) {
    console.error(e)
  }
}

export function prepareStructure(context) {
  try {
    context.cardType = "pop-up";
    context.verticalStack = context.getRootNode();
    context.sectionRow = context.verticalStack.host.parentElement;
    context.sectionRowContainer = context.sectionRow?.parentElement;
    context.popUp = context.verticalStack.querySelector('#root');
    context.popUp.classList.add('bubble-pop-up', 'pop-up', 'is-popup-closed');
    if (!context.editor && !context.config.background_update) {
      context.verticalStack.removeChild(context.popUp);
    }

    context.elements = {};
    getBackdrop(context);

    if (context.cardTitle) context.cardTitle.style.display = 'none';
    hideBackdrop = hideBackdrop || (context.config.hide_backdrop ?? true);

    context.popUp.style.setProperty('--custom-height-offset-desktop', context.config.margin_top_desktop ?? '0px');
    context.popUp.style.setProperty('--custom-height-offset-mobile', context.config.margin_top_mobile ?? '0px');
    context.popUp.style.setProperty('--custom-margin', `-${context.config.margin ?? '7px'}`);
    context.popUp.style.setProperty('--custom-popup-filter', hideBackdrop ? `blur(${context.config.bg_blur ?? 10}px)` :  'none');
    context.popUp.style.setProperty('--custom-shadow-opacity', (context.config.shadow_opacity ?? 0) / 100);

    const contextOnUrlChange = onUrlChange(context);

    window.addEventListener('location-changed', contextOnUrlChange);
    window.addEventListener('popstate', contextOnUrlChange);

    window.dispatchEvent(new Event('location-changed'));
  } catch (e) {
    console.error(e);
  }
}

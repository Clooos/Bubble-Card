import { convertToRGBA } from "../../tools/style.js";
import { createElement, forwardHaptic } from "../../tools/utils.js";
import { onUrlChange, removeHash, hideContent, registerPopup } from "./helpers.js";
import styles from "./styles.css";
import backdropStyles from "./backdrop.css";
import { html, render } from "lit";

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

  document.body.style.setProperty('--bubble-backdrop-background-color', convertToRGBA(themeColorBackground, 0.8, 0.6));
}

colorScheme.addEventListener('change', updateBackdropColor);
updateBackdropColor();

export function getBackdrop(context) {
  const isBackdropHidden = context.config.hide_backdrop ?? false;

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
  backdropElement.style.setProperty('--custom-backdrop-filter', `blur(${context.config.backdrop_blur ?? 0}px)`);

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

  const existingHeader = context.popUp?.querySelector('.bubble-header-container');
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

  context.handleTouchStart = (event) => {
    startTouchY = event.touches[0].clientY;
  };

  context.handleHeaderTouchMove = (event) => {
    const offset = event.touches[0].clientY - startTouchY;
    if (offset > 0) context.popUp.style.transform = `translateY(${offset}px)`;
  };

  context.handleHeaderTouchEnd = (event) => {
    const offset = event.changedTouches[0].clientY - startTouchY;
    if (offset > 50) {
      context.popUp.style.transform = `translateY(calc(${offset}px + (100% - ${offset}px)))`
      removeHash();
    } else {
      context.popUp.style.transform = '';
    }
  };
}

export function createStructure(context) {
  try {
    if (!context.popUp) {
      return;
    }

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

    context.closeOnEscape = (event) => {
      if (event.key === 'Escape' && context.config.hash === location.hash) {
        removeHash();
      }
    };

    let slideToCloseDistance = context.config.slide_to_close_distance ?? 400;

    context.handleTouchMove = (event) => {
      const touchMoveDistance = event.touches[0].clientY - startTouchY;
      if (touchMoveDistance > slideToCloseDistance && event.touches[0].clientY > lastTouchY) {
        removeHash();
      }
      lastTouchY = event.touches[0].clientY;
    };

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

    if (context.config.hash !== location.hash) {
      hideContent(context, 0);
    }

    window.dispatchEvent(new Event('location-changed'));
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
    if (!context.popUp) {
      // This part is handled in the editor
      throw new Error('Vertical stack not found, don\'t panic, it will be added automatically to your pop-up.');
    }
    context.popUp.classList.add('bubble-pop-up', 'pop-up', 'is-popup-closed');
    context.cardTitle = context.verticalStack.querySelector('.card-header');
    if (!context.editor && !context.config.background_update) {
      context.verticalStack.removeChild(context.popUp);
    }

    context.elements = {};
    getBackdrop(context);
    
    if (context.config.hash) {
      registerPopup(context);
    }

    if (context.cardTitle) context.cardTitle.style.display = 'none';
    hideBackdrop = hideBackdrop || (context.config.hide_backdrop ?? true);

    context.popUp.style.setProperty('--custom-height-offset-desktop', context.config.margin_top_desktop ?? '0px');
    context.popUp.style.setProperty('--custom-height-offset-mobile', context.config.margin_top_mobile ?? '0px');
    context.popUp.style.setProperty('--custom-margin', `-${context.config.margin ?? '7px'}`);
    context.popUp.style.setProperty('--custom-popup-filter', !context.config.backdrop_blur || context.config.backdrop_blur === '0' ? `blur(${context.config.bg_blur ?? 10}px)` :  'none');
    context.popUp.style.setProperty('--custom-shadow-opacity', (context.config.shadow_opacity ?? 0) / 100);

    const contextOnUrlChange = onUrlChange(context);

    window.addEventListener('location-changed', contextOnUrlChange);
    window.addEventListener('popstate', contextOnUrlChange);

    window.popUpError = false;

  } catch (e) {
    console.warn(e);

    if (!window.popUpError) {
      window.popUpError = true;

      const errorText = createElement("div", "bubble-error-text");
      const template = html`
        <ha-alert 
          alert-type="error"
          .title=${'You need to define a unique hash for this pop-up'}
        >
          <p>Once created and saved, this pop-up will be <b>hidden by default</b> and <b>can be opened by targeting its hash</b>. You can trigger it using <a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">any card</a> that supports the <code>navigate</code> <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">action</a> (check the example), or with the included <a href="https://github.com/Clooos/Bubble-Card#horizontal-buttons-stack" target="_blank" rel="noopener noreferrer">horizontal buttons stack</a> card.</p>
        </ha-alert>
      `;
      render(template, errorText);

      context.content.appendChild(errorText);
    }
  }
}
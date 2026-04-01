import { html, render } from "lit";
import { convertToRGBA } from "../../tools/style.js";
import { createElement, forwardHaptic, getCachedBodyStyles } from "../../tools/utils.js";
import { registerPopupContext, removeHash, hideContent, openPopup } from "./helpers.js";
import styles from "./styles.css";
import backdropStyles from "./backdrop.css";
import { handleCustomStyles } from "../../tools/style-processor.js";

let backdrop;
let startTouchY;
let lastTouchY;
let themeColorBackground;

const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');

function updateBackdropColor() {
  const bodyStyles = getCachedBodyStyles();
  themeColorBackground = 
    bodyStyles.getPropertyValue('--ha-card-background') ||
    bodyStyles.getPropertyValue('--card-background-color');

  document.body.style.setProperty('--bubble-default-backdrop-background-color', convertToRGBA(themeColorBackground, 0.8, 0.6));
}

colorScheme.addEventListener('change', updateBackdropColor);
updateBackdropColor();

export function getBackdrop(context) {
  if (backdrop) {
    backdrop.activeContext = context;
    return backdrop;
  }

  const backdropHostElement = createElement('div', 'bubble-backdrop-host');
  const shadowRoot = backdropHostElement.attachShadow({ mode: 'open' });

  const internalBackdropElement = createElement('div', 'bubble-backdrop backdrop is-hidden');
  shadowRoot.appendChild(internalBackdropElement);

  const defaultStylesTag = createElement('style');
  defaultStylesTag.innerHTML = backdropStyles;
  shadowRoot.appendChild(defaultStylesTag);

  const backdropCustomStyle = createElement('style');
  backdropCustomStyle.dataset.bubbleTarget = 'backdrop';
  shadowRoot.appendChild(backdropCustomStyle);

  document.body.appendChild(backdropHostElement);

  function applyBackdropConfig(activeContext) {
    if (!activeContext?.config) return;

    const isBackdropHidden = activeContext.config.hide_backdrop ?? false;
    if (isBackdropHidden) {
      backdropHostElement.style.display = 'none';
      backdropHostElement.style.pointerEvents = 'none';
    } else {
      backdropHostElement.style.display = '';
      backdropHostElement.style.pointerEvents = '';
    }

    const backdropBlur = activeContext.config.backdrop_blur ?? 0;
    const hasBlur = parseFloat(backdropBlur) > 0;
    internalBackdropElement.classList.toggle('has-blur', hasBlur);
    if (hasBlur) {
      internalBackdropElement.style.setProperty('--custom-backdrop-filter', `blur(${backdropBlur}px)`);
    } else {
      // Ensure no backdrop filter cost when blur is disabled
      internalBackdropElement.style.removeProperty('--custom-backdrop-filter');
    }
  }

  // Debounced backdrop styles computation with latest context only
  let backdropStylesUpdateScheduled = false;
  let pendingBackdropContext = null;
  function scheduleBackdropStylesUpdate(styleContext, defer = true) {
    pendingBackdropContext = styleContext || pendingBackdropContext || backdrop?.activeContext || context;
    if (backdropStylesUpdateScheduled) return;
    backdropStylesUpdateScheduled = true;
    const run = () => {
      backdropStylesUpdateScheduled = false;
      const currentContext = pendingBackdropContext || backdrop?.activeContext || context;
      pendingBackdropContext = null;
      try { handleCustomStyles(currentContext, backdropCustomStyle); } catch (_) {}
    };
    if (!defer) {
      requestAnimationFrame(run);
      return;
    }
    const idle = (cb) => {
      try {
        if (typeof window.requestIdleCallback === 'function') {
          window.requestIdleCallback(cb, { timeout: 500 });
          return;
        }
      } catch (_) {}
      // Fallback: defer past the likely popup open animation (~300ms)
      setTimeout(cb, 350);
    };
    idle(run);
  }
  applyBackdropConfig(context);
  // Initial async styles apply (once)
  scheduleBackdropStylesUpdate(context, true);

  function showBackdrop(styleContext) {
    const activeContext = styleContext || backdrop?.activeContext || context;
    applyBackdropConfig(activeContext);
    // Keep styles aligned with the current popup while preserving smoothness.
    scheduleBackdropStylesUpdate(activeContext, false);
    // Toggle classes synchronously so the backdrop paints in the current frame (INP frame).
    if (!internalBackdropElement.classList.contains('is-visible')) {
      internalBackdropElement.classList.add('is-visible');
    }
    internalBackdropElement.classList.remove('is-hidden');
  }
  
  function hideBackdropFunc() {
    if (!internalBackdropElement.classList.contains('is-hidden')) {
      internalBackdropElement.classList.add('is-hidden');
    }
    internalBackdropElement.classList.remove('is-visible');
  }

  backdrop = { 
    hideBackdrop: hideBackdropFunc, 
    showBackdrop, 
    backdropElement: internalBackdropElement, 
    backdropCustomStyle,
    updateBackdropStyles: scheduleBackdropStylesUpdate,
    applyBackdropConfig,
    activeContext: context
  };
  return backdrop;
}

export function createHeader(context) {
  context.elements = {
    closeIcon: createElement('ha-icon', 'bubble-close-icon'),
    closeButton: createElement("div", "bubble-close-button close-pop-up"),
    buttonContainer: createElement('div', 'bubble-button-container'),
    header: createElement('div', 'bubble-header')
  };

  const feedbackContainer = createElement('div', 'bubble-feedback-container');
  const feedback = createElement('div', 'bubble-feedback-element feedback-element');
  
  feedbackContainer.appendChild(feedback);
  context.elements.closeButton.appendChild(feedbackContainer);
  
  context.elements.closeIcon.icon = 'mdi:close';
  context.elements.closeButton.appendChild(context.elements.closeIcon);
  context.elements.closeButton.feedback = feedback;
  
  // Enhanced close function with fallback mechanism
  const handleClose = (event) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    
    // Force close function for fallback
    const forceClose = () => {
      if (location.hash) {
        const newURL = window.location.href.split('#')[0];
        history.replaceState(null, "", newURL);
        window.dispatchEvent(new Event('location-changed'));
      }
    };
    
    // Try normal close, fallback to force close if needed
    try {
      removeHash();
      // If removeHash() didn't work due to protections, force close after short delay
      setTimeout(() => {
        if (location.hash === context.config.hash) {
          forceClose();
        }
      }, 100);
    } catch (error) {
      forceClose();
    }
    
    forwardHaptic("selection");
  };

  // Use multiple event types to ensure reliable closing
  context.elements.closeButton.addEventListener('click', handleClose);
  context.elements.closeButton.addEventListener('touchend', handleClose);
  
  // Prevent propagation to avoid conflicts
  context.elements.closeButton.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
  });

  context.elements.closeButton.haRipple = createElement('ha-ripple');
  context.elements.closeButton.appendChild(context.elements.closeButton.haRipple);
  
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
    if (!context.popUp) return;

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
    
    function updatePopupColor() {
        const color = context.config.bg_color || themeColorBackground;
        const opacity = Math.min(1, Math.max(0, (context.config.bg_opacity ?? 88) / 100));
        const rgbaColor = convertToRGBA(color, opacity, 1.02);
        const fadeOpacity = Math.min(1, opacity * 0.65);
        const fadeColor = convertToRGBA(color, fadeOpacity, 1.02);

        context.popUp.style.setProperty('--bubble-pop-up-background-color', rgbaColor);
        context.popUp.style.setProperty('--bubble-pop-up-fade-color', fadeColor);
    }

    context.updatePopupColorListener = () => {
      updatePopupColor();
    };

    colorScheme.addEventListener('change', context.updatePopupColorListener, { passive: true });

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

    const popUpContainer = context.elements.popUpContainer;

    context.popUpBackground = createElement("div", 'bubble-pop-up-background');
    context.popUp.appendChild(context.popUpBackground);
    context.popUp.appendChild(context.elements.headerContainer);
    context.popUp.appendChild(context.elements.popUpContainer);

    // Always hide popup initially when background_update is enabled
    // This prevents a flash when the page loads with the popup hash
    // openPopup will properly show it via displayContent
    if (context.config.background_update) {
      context.popUp.style.display = 'none';
    } else if (context.config.hash === location.hash) {
      openPopup(context, true);
    } else {
      hideContent(context, 0);
    }
  } catch (e) {
    console.error(e)
  }
}

export function prepareStructure(context) {
  try {
    context.cardType = "pop-up";
    context.verticalStack = context.getRootNode();
    
    if (!context.verticalStack || !context.verticalStack.host) {
      throw new Error('Vertical stack not found, don\'t panic, it will be added automatically to your pop-up.');
    }

    context.sectionRow = context.verticalStack.host.parentElement;
    context.sectionRowContainer = context.sectionRow?.parentElement;
    context.popUp = context.verticalStack.querySelector('#root');
    if (!context.popUp) {
      // This part is handled in the editor
      throw new Error('Vertical stack not found, don\'t panic, it will be added automatically to your pop-up.');
    }
    context.popUp.classList.add('bubble-pop-up', 'pop-up', 'is-popup-closed');
    context.popUp.classList.remove('is-popup-opened', 'is-opening', 'is-closing');
    context.cardTitle = context.verticalStack.querySelector('.card-header');
    if (!context.editor && !context.config.background_update) {
      // Hide popup for 100ms so custom elements can finish async init with real dimensions.
      context.popUp.style.visibility = 'hidden';
      setTimeout(() => {
        if (context.verticalStack?.contains(context.popUp) &&
            !context.popUp.classList.contains('is-popup-opened')) {
          context.popUp.style.visibility = '';
          context.verticalStack.removeChild(context.popUp);
        }
      }, 100);
    }

    context.elements = {};
    getBackdrop(context);

    if (context.cardTitle) context.cardTitle.style.display = 'none';
    context.popUp.style.setProperty('--custom-height-offset-desktop', context.config.margin_top_desktop ?? '0px');
    context.popUp.style.setProperty('--custom-height-offset-mobile', context.config.margin_top_mobile ?? '0px');
    context.popUp.style.setProperty('--custom-margin', `-${context.config.margin ?? '7px'}`);
    context.popUp.style.setProperty('--custom-popup-filter', !context.config.backdrop_blur || context.config.backdrop_blur === '0' ? `blur(${context.config.bg_blur ?? 10}px)` :  'none');
    context.popUp.style.setProperty('--custom-shadow-opacity', (context.config.shadow_opacity ?? 0) / 100);

    registerPopupContext(context);

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
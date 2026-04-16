import { html, render } from "lit";
import { convertToRGBA } from "../../tools/style.js";
import { createElement, forwardHaptic } from "../../tools/utils.js";
import { handleButton } from "../../cards/button/index.js";
import { ensureNewSubButtonsSchemaObject } from "../../components/sub-button/utils.js";
import { getBackdrop, getThemeBackgroundColor } from "./backdrop.js";
import { navigateToPreviousPopup, openPopup, registerPopupContext, removeHash, restorePopupHostLayout, suspendPopupHostLayout, syncPopupModeClasses } from "./helpers.js";
import { hideLegacyPopupContent } from './legacy.js';
import styles from "./styles.css";

const CLOSE_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>';
const PREVIOUS_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><title>arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" /></svg>';

function _hasHeaderContent(context) {
  return !!(context.config.entity || context.config.name || context.config.icon);
}

function _closePopupByUser(context) {
  removeHash(true);
}

function _appendIfMissing(parent, child) {
  if (!parent || !child || child.parentNode === parent) {
    return;
  }

  parent.appendChild(child);
}

function _bindHeaderButtonEvents(button, handler) {
  if (!button || button._bubbleHeaderButtonBound) {
    return;
  }

  const handleAction = (event) => {
    event?.stopPropagation();
    event?.preventDefault();
    handler();
    forwardHaptic("selection");
  };

  button.addEventListener("click", handleAction);
  button.addEventListener("touchend", handleAction);
  button.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    if (button.haRipple && typeof button.haRipple.startPress === 'function') {
      button.haRipple.startPress(event);
    }
  });
  button.addEventListener("pointerup", () => {
    if (button.haRipple && typeof button.haRipple.endPress === 'function') {
      button.haRipple.endPress();
    }
  });
  button.addEventListener("pointercancel", () => {
    if (button.haRipple && typeof button.haRipple.endPress === 'function') {
      button.haRipple.endPress();
    }
  });

  button._bubbleHeaderButtonBound = true;
}

function _bindCloseButtonEvents(closeButton, context) {
  _bindHeaderButtonEvents(closeButton, () => {
    _closePopupByUser(context);
  });
}

function _bindPreviousButtonEvents(previousButton, context) {
  _bindHeaderButtonEvents(previousButton, () => {
    navigateToPreviousPopup(context);
  });
}

function _createHeaderActionButton(buttonClassName, iconClassName, iconSvg) {
  const button = createElement("div", `bubble-header-action-button ${buttonClassName}`);
  const feedbackContainer = createElement("div", "bubble-feedback-container");
  const feedback = createElement("div", "bubble-feedback-element feedback-element");
  const icon = createElement("span", `bubble-header-action-icon ${iconClassName}`);

  feedbackContainer.appendChild(feedback);
  button.appendChild(feedbackContainer);

  icon.innerHTML = iconSvg;
  button.appendChild(icon);
  button.feedback = feedback;
  button.haRipple = createElement("ha-ripple");
  button.appendChild(button.haRipple);

  return { button, icon };
}

function _bindHeaderInteractions(context) {
  context.handleTouchStart = (event) => {
    context._popupTouchStartY = event.touches[0].clientY;
    context._popupLastTouchY = context._popupTouchStartY;
  };

  context.handleHeaderTouchMove = (event) => {
    const touchStartY = context._popupTouchStartY ?? event.touches[0].clientY;
    const offset = event.touches[0].clientY - touchStartY;
    if (offset > 0) {
      context.popUp.style.transform = `translateY(${offset}px)`;
    }
  };

  context.handleHeaderTouchEnd = (event) => {
    const touchStartY = context._popupTouchStartY ?? event.changedTouches[0].clientY;
    const offset = event.changedTouches[0].clientY - touchStartY;
    if (offset > 50) {
      context.popUp.style.transform = `translateY(calc(${offset}px + (100% - ${offset}px)))`;
      _closePopupByUser(context);
      return;
    }
    context.popUp.style.transform = "";
  };
}

function _setupPopupInteractionHandlers(context) {
  context.closeOnEscape = (event) => {
    if (event.key === "Escape" && context.config.hash === location.hash) {
      _closePopupByUser(context);
    }
  };

  const slideToCloseDistance = context.config.slide_to_close_distance ?? 400;
  context.handleTouchMove = (event) => {
    const currentTouchY = event.touches[0].clientY;
    const touchStartY = context._popupTouchStartY ?? currentTouchY;
    const touchMoveDistance = currentTouchY - touchStartY;
    const lastTouchY = context._popupLastTouchY ?? currentTouchY;

    if (touchMoveDistance > slideToCloseDistance && currentTouchY > lastTouchY) {
      _closePopupByUser(context);
    }

    context._popupLastTouchY = currentTouchY;
  };
}

function _applyPopupVariables(context) {
  context.popUp.style.setProperty("--custom-height-offset-desktop", context.config.margin_top_desktop ?? "0px");
  context.popUp.style.setProperty("--custom-height-offset-mobile", context.config.margin_top_mobile ?? "0px");
  context.popUp.style.setProperty("--custom-margin", `-${context.config.margin ?? "7px"}`);
  const _useBackdropBlur = context.config.backdrop_blur && context.config.backdrop_blur !== "0";
  const _bgBlur = parseFloat(context.config.bg_blur ?? 10);
  context.popUp.style.setProperty(
    "--custom-popup-filter",
    !_useBackdropBlur ? `blur(${_bgBlur}px)` : "none"
  );
  context.popUp.classList.toggle("has-bg-blur", (context.config.hide_backdrop === true) && !_useBackdropBlur && _bgBlur > 0);
  context.popUp.style.setProperty("--custom-shadow-opacity", (context.config.shadow_opacity ?? 0) / 100);
}

function _createOrReusePopUpContainer(context) {
  const existingContainer = context.popUp.querySelector(".bubble-pop-up-container");
  if (existingContainer) {
    return existingContainer;
  }

  const popUpContainer = createElement("div");
  popUpContainer.classList.add("bubble-pop-up-container");

  let child = context.popUp.firstChild;
  while (child) {
    popUpContainer.appendChild(child);
    child = context.popUp.firstChild;
  }

  return popUpContainer;
}

function _setInitialVisibility(context) {
  if (context.config.background_update && context.config.hash !== location.hash) {
    context.popUp.style.display = "none";
    return;
  }

  if (context.config.hash === location.hash) {
    openPopup(context, true);
    return;
  }

  if (context.isStandalonePopUp) {
    context.popUp.style.display = "";
    context.popUp.style.visibility = "";
    return;
  }

  hideLegacyPopupContent(context, 0);
}

export function renderHeaderButton(context) {
  if (!_hasHeaderContent(context) || !context.elements?.header) {
    return;
  }

  const originalSubButtons = context.config.sub_button;
  const originalButtonType = context.config.button_type;
  const originalTapAction = context.config.tap_action;
  const originalDoubleTapAction = context.config.double_tap_action;
  const originalHoldAction = context.config.hold_action;
  const originalButtonAction = context.config.button_action;
  const isClassicStyle = context.config.popup_style === 'classic';

  try {
    if (originalSubButtons) {
      const sectioned = ensureNewSubButtonsSchemaObject(context.config);
      context.config.sub_button = { main: sectioned.main || [], bottom: [] };
    }

    if (isClassicStyle) {
      // Force switch-type: entity-based state styling, no background fill (overridden by CSS).
      // Disable all tap actions so neither the icon nor the card are interactive.
      context.config.button_type = 'switch';
      context.config.tap_action = { action: 'none' };
      context.config.double_tap_action = { action: 'none' };
      context.config.hold_action = { action: 'none' };
      context.config.button_action = '';
    }

    handleButton(context, context.elements.header);
  } finally {
    context.config.sub_button = originalSubButtons;
    if (isClassicStyle) {
      context.config.button_type = originalButtonType;
      context.config.tap_action = originalTapAction;
      context.config.double_tap_action = originalDoubleTapAction;
      context.config.hold_action = originalHoldAction;
      context.config.button_action = originalButtonAction;
    }
  }
}

function _attachScrollMaskListener(container) {
  if (!container || container._bubbleScrollMaskAdded) return;

  container.addEventListener('scroll', () => {
    if (!container.classList.contains('is-scrollable')) {
      container.classList.add('is-scrollable');
    }
  }, { passive: true });

  container._bubbleScrollMaskAdded = true;
}

export function createHeader(context) {
  const existingHeader = context.popUp?.querySelector(".bubble-header-container");
  const headerContainer = existingHeader || createElement("div", "bubble-header-container");
  const header = headerContainer.querySelector(".bubble-header") || createElement("div", "bubble-header");
  const buttonContainer = header.querySelector(".bubble-button-container") || createElement("div", "bubble-button-container");
  const headerActions = headerContainer.querySelector(".bubble-header-actions") || createElement("div", "bubble-header-actions");

  let previousButton = headerContainer.querySelector(".bubble-previous-button");
  let previousIcon = headerContainer.querySelector(".bubble-previous-icon");
  if (!previousButton) {
    const previousElements = _createHeaderActionButton(
      "bubble-previous-button previous-pop-up",
      "bubble-previous-icon",
      PREVIOUS_ICON_SVG
    );
    previousButton = previousElements.button;
    previousIcon = previousElements.icon;
  }

  let closeButton = headerContainer.querySelector(".bubble-close-button");
  let closeIcon = headerContainer.querySelector(".bubble-close-icon");
  if (!closeButton) {
    const closeElements = _createHeaderActionButton(
      "bubble-close-button close-pop-up",
      "bubble-close-icon",
      CLOSE_ICON_SVG
    );
    closeButton = closeElements.button;
    closeIcon = closeElements.icon;
  }

  headerContainer.setAttribute("id", "header-container");
  _appendIfMissing(header, buttonContainer);
  _appendIfMissing(headerContainer, header);
  _appendIfMissing(headerActions, previousButton);
  _appendIfMissing(headerActions, closeButton);
  _appendIfMissing(headerContainer, headerActions);

  _bindPreviousButtonEvents(previousButton, context);
  _bindCloseButtonEvents(closeButton, context);

  context.elements = {
    ...context.elements,
    previousIcon,
    previousButton,
    closeIcon,
    closeButton,
    buttonContainer,
    header,
    headerActions,
    headerContainer,
  };

  _bindHeaderInteractions(context);
}

export function createStructure(context) {
  try {
    if (!context.popUp) return;

    context.elements.style = createElement("style");
    context.elements.style.innerText = styles;

    const existingStyle = context.popUp.querySelector("style");
    if (!context.stylesAdded || !existingStyle) {
      context.elements.customStyle = createElement("style");
      context.popUp.appendChild(context.elements.customStyle);
      context.popUp.appendChild(context.elements.style);
      context.stylesAdded = true;
    } else {
      context.elements.customStyle = existingStyle;
    }

    if (!context.updatePopupColor) {
      context.updatePopupColor = () => {
        const color = context.config.bg_color || getThemeBackgroundColor();
        const opacity = Math.min(1, Math.max(0, (context.config.bg_opacity ?? 88) / 100));
        const rgbaColor = convertToRGBA(color, opacity, 1.02);
        const fadeOpacity = Math.min(1, opacity * 0.65);
        const fadeColor = convertToRGBA(color, fadeOpacity, 1.02);

        context.popUp.style.setProperty("--bubble-pop-up-background-color", rgbaColor);
        context.popUp.style.setProperty("--bubble-pop-up-fade-color", fadeColor);
      };
    }

    context.updatePopupColor();

    context.popUp.style.setProperty("--desktop-width", context.config.width_desktop ?? "540px");
    syncPopupModeClasses(context.popUp, context.config);
    _setupPopupInteractionHandlers(context);

    context.elements.popUpContainer = _createOrReusePopUpContainer(context);
    _attachScrollMaskListener(context.elements.popUpContainer);
    context.popUpBackground = context.popUp.querySelector(".bubble-pop-up-background") || createElement("div", "bubble-pop-up-background");
    context.popUpBackground.querySelector('.bubble-pop-up-blur-layer')?.remove();
    if (!context.popUpBackground.isConnected) {
      context.popUp.appendChild(context.popUpBackground);
    }

    context.popUp.appendChild(context.elements.headerContainer);
    context.popUp.appendChild(context.elements.popUpContainer);
    _setInitialVisibility(context);
  } catch (e) {
    console.error(e);
  }
}

export function prepareStructure(context) {
  try {
    context.cardType = "pop-up";
    context.isStandalonePopUp = false;
    context.verticalStack = context.getRootNode();

    if (!context.verticalStack || !context.verticalStack.host) {
      throw new Error("Vertical stack not found, don't panic, it will be added automatically to your pop-up.");
    }

    context.sectionRow = context.verticalStack.host.parentElement;
    context.sectionRowContainer = context.sectionRow?.parentElement;
    context.popUp = context.verticalStack.querySelector("#root");
    if (!context.popUp) {
      throw new Error("Vertical stack not found, don't panic, it will be added automatically to your pop-up.");
    }

    context.popUp.classList.add("bubble-pop-up", "pop-up", "is-popup-closed");
    context.popUp.classList.remove("is-standalone-pop-up", "is-popup-opened", "is-opening", "is-closing");
    context.cardTitle = context.verticalStack.querySelector(".card-header");
    if (!context.editor && !context.config.background_update) {
      context.popUp.style.visibility = "hidden";
    }

    context.elements = {};
    getBackdrop(context);

    if (context.cardTitle) {
      context.cardTitle.style.display = "none";
    }
    _applyPopupVariables(context);
    registerPopupContext(context);
    window.popUpError = false;
  } catch (e) {
    console.warn(e);

    window.popUpError = true;

    const existingError = context.content?.querySelector?.('.bubble-error-text');
    if (!existingError && context.content) {

      const errorText = createElement("div", "bubble-error-text");
      const template = html`
        <ha-alert 
          alert-type="error"
          .title=${"You need to define a unique hash for this pop-up"}
        >
          <p>Once created and saved, this pop-up will be <b>hidden by default</b> and <b>can be opened by targeting its hash</b>. You can trigger it using <a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">any card</a> that supports the <code>navigate</code> <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">action</a> (check the example), or with the included <a href="https://github.com/Clooos/Bubble-Card#horizontal-buttons-stack" target="_blank" rel="noopener noreferrer">horizontal buttons stack</a> card.</p>
        </ha-alert>
      `;
      render(template, errorText);

      context.content.appendChild(errorText);
    }
  }
}

export function prepareStandaloneStructure(context) {
  context.cardType = "pop-up";
  context.isStandalonePopUp = true;
  context._standalonePopUpCardsActive = false;
  context.verticalStack = null;
  context.sectionRow = typeof context.closest === 'function' ? context.closest('hui-card') : null;
  context.sectionRowContainer = context.sectionRow?.closest?.('.card') || context.sectionRow?.parentElement || null;
  context.cardTitle = null;

  if (!context.popUp) {
    context.popUp = createElement("div");
    context.content.appendChild(context.popUp);
  }

  context.popUp.classList.add("bubble-pop-up", "pop-up", "is-popup-closed", "is-standalone-pop-up");
  context.popUp.classList.remove("is-popup-opened", "is-opening", "is-closing");
  context.elements = {};
  getBackdrop(context);
  _applyPopupVariables(context);
  if (context.editor || context.detectedEditor) {
    restorePopupHostLayout(context);
  } else {
    suspendPopupHostLayout(context);
  }
  registerPopupContext(context);
}
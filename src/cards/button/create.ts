import { addActions, addFeedback } from "../../tools/tap-actions.ts";
import { createElement, toggleEntity, throttle, forwardHaptic, isEntityType } from "../../tools/utils.ts";
import { getButtonType, onSliderChange } from "./helpers.ts";
import styles from "./styles.ts";

export function createStructure(context, container = context.content, appendTo = container) {
  const buttonType = getButtonType(context);

  context.dragging = false;

  if (!context.elements) context.elements = {};

  context.elements.buttonCardContainer = createElement('div', 'bubble-button-card-container button-container');
  context.elements.buttonCard = createElement('div', 'bubble-button-card switch-button');
  context.elements.buttonBackground = createElement('div', 'bubble-button-background');
  context.elements.nameContainer = createElement('div', 'bubble-name-container name-container');
  context.elements.iconContainer = createElement('div', 'bubble-icon-container icon-container');
  context.elements.name = createElement('div', 'bubble-name name');
  context.elements.state = createElement('div', 'bubble-state state');
  context.elements.feedback = createElement('div', 'bubble-feedback-element feedback-element');
  context.elements.icon = createElement('ha-icon', 'bubble-icon icon');
  context.elements.image = createElement('div', 'bubble-entity-picture entity-picture');
  context.elements.style = createElement('style');
  context.elements.customStyle = createElement('style');

  context.elements.feedback.style.display = 'none';
  context.elements.style.innerText = styles;

  context.elements.iconContainer.appendChild(context.elements.icon);
  context.elements.iconContainer.appendChild(context.elements.image);

  context.elements.nameContainer.appendChild(context.elements.name);
  if (buttonType !== "name") {
      context.elements.nameContainer.appendChild(context.elements.state);    
  }

  context.elements.buttonCard.appendChild(context.elements.buttonBackground);
  context.elements.buttonCard.appendChild(context.elements.iconContainer);
  context.elements.buttonCard.appendChild(context.elements.nameContainer);
  context.elements.buttonCard.appendChild(context.elements.feedback);
  context.elements.buttonCardContainer.appendChild(context.elements.buttonCard);

  container.innerHTML = '';

  if (appendTo === container) {
      container.appendChild(context.elements.buttonCardContainer);
  }

  container.appendChild(context.elements.style);
  container.appendChild(context.elements.customStyle);

  if (appendTo !== container) {
      appendTo.innerHTML = '';
      context.elements.buttonCardContainer.appendChild(container);
      appendTo.appendChild(context.elements.buttonCardContainer);
      context.buttonType = buttonType;
  } else {
      context.cardType = `button-${buttonType}`;
  }
}
export function createSwitchStructure(context) {
  addActions(context.elements.iconContainer, context.config);
  
  const switchDefaultActions = {
      tap_action: { action: "toggle" },
      double_tap_action: { action: "toggle" },
      hold_action: { action: "more-info" }
  };
  addActions(context.elements.buttonBackground, context.config.button_action, context.config.entity, switchDefaultActions);
  addFeedback(context.elements.buttonBackground, context.elements.feedback);
}
export function createNameStructure(context) {
    const nameDefaultActions = {
        tap_action: { action: "none" },
        double_tap_action: { action: "none" },
        hold_action: { action: "none" }
    };

    addActions(context.elements.iconContainer, context.config, context.config.entity, nameDefaultActions);
    addActions(context.elements.buttonBackground, context.config.button_action, context.config.entity, nameDefaultActions);
    addFeedback(context.elements.buttonBackground, context.elements.feedback);
}
export function createStateStructure(context) {
    const stateDefaultActions = {
        tap_action: { action: "more-info" },
        double_tap_action: { action: "more-info" },
        hold_action: { action: "more-info" }
    };

    addActions(context.elements.buttonCardContainer, context.config);
    addActions(context.elements.buttonBackground, context.config.button_action, context.config.entity, stateDefaultActions);
    addFeedback(context.elements.buttonBackground, context.elements.feedback);
}

export function createSliderStructure(context) {
  addActions(context.elements.iconContainer, context.config);

  let initialX = 0;
  let draggingTimeout = null;

  context.elements.rangeFill = createElement('div', 'bubble-range-fill range-fill');
  context.elements.rangeSlider = createElement('div', 'bubble-range-slider range-slider');
  context.elements.rangeSlider.appendChild(context.elements.rangeFill);
  context.elements.buttonCardContainer.appendChild(context.elements.rangeSlider);
  context.elements.buttonCardContainer.insertBefore(context.elements.rangeSlider, context.elements.buttonCard);
  context.elements.buttonCard.style.cursor = 'ew-resize';

  context.elements.buttonCardContainer.addEventListener('pointercancel', onPointerCancel);
  context.elements.buttonCardContainer.addEventListener('pointerdown', (e) => {
      context.elements.buttonCardContainer.setPointerCapture(e.pointerId);

      if (context.card.classList.contains('is-unavailable')) {
          return;
      }

      context.dragging = true;
      initialX = e.pageX || (e.touches ? e.touches[0].pageX : 0);

      context.elements.buttonCardContainer.classList.add('is-dragging');
      context.elements.buttonCardContainer.addEventListener('pointermove', onPointerMove);

      window.addEventListener('pointerup', onPointerUp);
  });

  function onPointerCancel() {
    clearTimeout(draggingTimeout);
    context.dragging = false;

    context.elements.buttonCardContainer.classList.remove('is-dragging');
    context.elements.buttonCardContainer.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
  }

  function onPointerMove(e) {
      e.stopPropagation();

      const moveX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      if (Math.abs(initialX-moveX) > 10) {
        onSliderChange(context, moveX, true);
      }

      if (!context.dragging) {
        onSliderChange(context, moveX);
      }

      forwardHaptic("selection");
  }

  function onPointerUp(e) {
      e.stopPropagation();

      clearTimeout(draggingTimeout);

      draggingTimeout = setTimeout(() => {
        context.dragging = false;
      }, 1400);

      const moveX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      onSliderChange(context, moveX);

      context.elements.buttonCardContainer.classList.remove('is-dragging');
      context.elements.buttonCardContainer.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
  }
}



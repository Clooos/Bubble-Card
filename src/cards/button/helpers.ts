import { addActions, addFeedback } from "../../tools/tap-actions.ts";
import { createElement, toggleEntity, throttle, forwardHaptic, isEntityType } from "../../tools/utils.ts";

export function getButtonType(context) {
  let buttonType = context.config.button_type;

  if (buttonType === 'custom') {
    console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"');
    buttonType = '';
  }

  if (context.config.entity) {
      return buttonType || 'switch';
  } else {
      return buttonType || 'name';
  }
}

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

export function updateEntity(context, value) {
  if (isEntityType(context, "light")) {
      context._hass.callService('light', 'turn_on', {
          entity_id: context.config.entity,
          brightness: Math.round(255 * value / 100)
      });
  } else if (isEntityType(context, "media_player")) {
      context._hass.callService('media_player', 'volume_set', {
          entity_id: context.config.entity,
          volume_level: (value / 100).toFixed(2)
      });
  } else if (isEntityType(context, "cover")) {
      context._hass.callService('cover', 'set_cover_position', {
          entity_id: context.config.entity,
          position: Math.round(value)
      });
  } else if (isEntityType(context, "input_number")) {
      const minValue = getAttribute(context, "min") ?? 0;
      const maxValue = getAttribute(context, "max") ?? 100;
      const step = getAttribute(context, "step") ?? 1;
      let rawValue = (maxValue - minValue) * value / 100 + minValue;
      let adjustedValue = Math.round(rawValue / step) * step;
      context._hass.callService('input_number', 'set_value', {
          entity_id: context.config.entity,
          value: adjustedValue
      });
  } else if (isEntityType(context, "fan")) {
      const step = getAttribute(context, "percentage_step");
      let adjustedValue = Math.round(value / step) * step;
      context._hass.callService('fan', 'set_percentage', {
          entity_id: context.config.entity,
          percentage: adjustedValue
      });
  } else if (isEntityType(context, "climate")) {
      const minValue = getAttribute(context, "min_temp");
      const maxValue = getAttribute(context, "max_temp");
      const step = getAttribute(context, "target_temp_step") ?? 0.5;
      let rawValue = (maxValue - minValue) * value / 100 + minValue;
      let adjustedValue = Math.round(rawValue / step) * step;
      context._hass.callService('climate', 'set_temperature', {
          entity_id: context.config.entity,
          temperature: adjustedValue
      });
  } else if (isEntityType(context, "number")) {
      const minValue = getAttribute(context, "min") ?? 0;
      const maxValue = getAttribute(context, "max") ?? 100;
      const step = getAttribute(context, "step") ?? 1;
      let rawValue = (maxValue - minValue) * value / 100 + minValue;
      let adjustedValue = Math.round(rawValue / step) * step;
      context._hass.callService('number', 'set_value', {
          entity_id: context.config.entity,
          value: adjustedValue
      });
  }
}

export const throttledUpdateEntity = throttle(updateEntity, 100);

export function onSliderChange(context, leftDistance, throttle = false) {
  const rect = context.elements.rangeSlider.getBoundingClientRect();
  const percentage = 100 * (leftDistance - rect.left) / rect.width;
  const rangedPercentage = Math.min(100, Math.max(0, percentage));

  context.elements.rangeFill.style.transform =`translateX(${rangedPercentage}%)`;
  if (throttle) {
    if (context.dragging && !context.config.slider_live_update) return;
    throttledUpdateEntity(context, rangedPercentage);
  } else {
    updateEntity(context, rangedPercentage);
  }
}
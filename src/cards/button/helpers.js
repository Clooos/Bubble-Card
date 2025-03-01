import { addActions, addFeedback } from "../../tools/tap-actions.js";
import { createElement, toggleEntity, throttle, forwardHaptic, isEntityType, getAttribute } from "../../tools/utils.js";

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

export function updateEntity(context, value) {
  const state = context._hass.states[context.config.entity];

  if (isEntityType(context, "light")) {
    const isTransitionEnabled = context.config.enable_brightness_transition ?? false;
    const transitionTime = isTransitionEnabled
                            ? (Number(context.config.brightness_transition_time) || 0)
                            : 0;
  
    context._hass.callService("light", "turn_on", {
      entity_id: context.config.entity,
      brightness: Math.round(255 * value / 100),
      transition: transitionTime,
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
      const minValue = state.attributes.min ?? 0;
      const maxValue = state.attributes.max ?? 100;
      const step = getAttribute(context, "step") ?? 1;
      let rawValue = (maxValue - minValue) * value / 100 + minValue;
      let adjustedValue = Math.round(rawValue / step) * step;
      context._hass.callService('input_number', 'set_value', {
          entity_id: context.config.entity,
          value: adjustedValue
      });
  } else if (isEntityType(context, "fan")) {
      const step = state.attributes.percentage_step ?? 1;
      let adjustedValue = Math.round(value / step) * step;
      context._hass.callService('fan', 'set_percentage', {
          entity_id: context.config.entity,
          percentage: adjustedValue
      });
  } else if (isEntityType(context, "climate")) {
      const minValue = state.attributes.min_temp ?? 0;
      const maxValue = state.attributes.max_temp ?? 10000;
      const isCelcius = context._hass.config.unit_system.temperature === '°C';
      const step = state.attributes.target_temp_step ? state.attributes.target_temp_step : isCelcius ? 0.5 : 1;
      let rawValue = (maxValue - minValue) * value / 100 + minValue;
      let adjustedValue = Math.round(rawValue / step) * step;
      adjustedValue = parseFloat(adjustedValue.toFixed(1));
      context._hass.callService('climate', 'set_temperature', {
          entity_id: context.config.entity,
          temperature: adjustedValue
      });
  } else if (isEntityType(context, "number")) {
      const minValue = state.attributes.min ?? 0;
      const maxValue = state.attributes.max ?? 100;
      const step = state.attributes.step ?? 1;
      let rawValue = (maxValue - minValue) * value / 100 + minValue;
      let adjustedValue = Math.round(rawValue / step) * step;
      context._hass.callService('number', 'set_value', {
          entity_id: context.config.entity,
          value: adjustedValue
      });
  }
}

export function onSliderChange(context, leftDistance) {
  const rect = context.elements.rangeSlider.getBoundingClientRect();
  const percentage = 100 * (leftDistance - rect.left) / rect.width;
  const rangedPercentage = Math.min(100, Math.max(0, percentage));

  context.elements.rangeFill.style.transform = `translateX(${rangedPercentage}%)`;

  return rangedPercentage;
}

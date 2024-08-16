import { throttle, isEntityType, getAttribute } from "../../tools/utils.ts";

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
};
export const throttledUpdateEntity = throttle(updateEntity, 100);

export function onSliderChange(context, leftDistance, throttle = false) {
  const rect = context.elements.rangeSlider.getBoundingClientRect();
  const percentage = 100 * (leftDistance - rect.left) / rect.width;
  const rangedPercentage = Math.min(100, Math.max(0, percentage));

  context.elements.rangeFill.style.transform =`translateX(${rangedPercentage}%)`;
  if (throttle) {
    throttledUpdateEntity(context, rangedPercentage);
  } else {
    updateEntity(context, rangedPercentage);
  }
}

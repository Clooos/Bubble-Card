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
          brightness: 255 * value / 100
      });
  } else if (isEntityType(context, "media_player")) {
      context._hass.callService('media_player', 'volume_set', {
          entity_id: context.config.entity,
          volume_level: value / 100
      });
  } else if (isEntityType(context, "cover")) {
      context._hass.callService('cover', 'set_cover_position', {
          entity_id: context.config.entity,
          position: value
      });
  } else if (isEntityType(context, "input_number")) {
      const minValue = getAttribute(context, "min");
      const maxValue = getAttribute(context, "max");
      context._hass.callService('input_number', 'set_value', {
          entity_id: context.config.entity,
          value: Math.round((maxValue - minValue) * value / 100 + minValue)
      });
  }
};
export const throttledUpdateEntity = throttle(updateEntity);

export function onSliderChange(context, leftDistance, throttle = false) {
  const rect = context.elements.rangeSlider.getBoundingClientRect();
  const percentage = 100 * (leftDistance - rect.left) / rect.width;
  const rangedPercentage = Math.min(100, Math.max(0, percentage));

  context.elements.rangeFill.style.transform =`translateX(${rangedPercentage}%)`;
  if (throttle) {
    if (context.dragging) return;
    updateEntity(context, rangedPercentage);
    //throttledUpdateEntity(context, rangedPercentage);
  } else {
    updateEntity(context, rangedPercentage);
  }
}

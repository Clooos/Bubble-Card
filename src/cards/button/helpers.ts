import { throttle } from "../../tools/utils.ts";

export function getButtonType(context) {
  return context.config.button_type || 'switch';
}

export function isLight(context) {
  return context.config.entity?.startsWith("light.") ?? false;
}

export function isMediaPlayer(context) {
  return context.config.entity?.startsWith("media_player.") ?? false;
}

export function updateEntity(context, value) {
  if (isLight(context)) {
      context._hass.callService('light', 'turn_on', {
          entity_id: context.config.entity,
          brightness: 255 * value / 100
      });
  } else if (isMediaPlayer(context)) {
      context._hass.callService('media_player', 'volume_set', {
          entity_id: context.config.entity,
          volume_level: value / 100
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
    throttledUpdateEntity(context, rangedPercentage);
  } else {
    updateEntity(context, rangedPercentage);
  }
}

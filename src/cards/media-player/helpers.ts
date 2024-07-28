import { 
    throttle, 
    getAttribute,
    isEntityType
} from "../../tools/utils.ts";

export function updateEntity(context, value) {
    if (isEntityType(context, "media_player")) {
        context._hass.callService('media_player', 'volume_set', {
            entity_id: context.config.entity,
            volume_level: (value / 100).toFixed(2)
        });
    }
};

export const throttledUpdateEntity = throttle(updateEntity);

export function onSliderChange(context, leftDistance, throttle = false) {
  const rect = context.elements.rangeSlider.getBoundingClientRect();
  const percentage = 100 * (leftDistance - rect.left) / rect.width;
  const rangedPercentage = Math.round(Math.min(100, Math.max(0, percentage)));

  context.elements.rangeFill.style.transform =`translateX(${rangedPercentage}%)`;
  if (throttle) {
    if (context.dragging) return;
    updateEntity(context, rangedPercentage);
  } else {
    updateEntity(context, rangedPercentage);
  }
}

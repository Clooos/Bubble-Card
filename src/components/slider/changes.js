import { 
  getState,
  getAttribute,
  isStateOn,
  isEntityType
} from '../../tools/utils.js';

export function onSliderChange(context, positionX) {
  const sliderRect = context.elements.rangeSlider.getBoundingClientRect();
  let percentage = ((positionX - sliderRect.left) / sliderRect.width) * 100;

  percentage = Math.max(0, Math.min(100, percentage));

  if (context.sliderMinValue !== undefined || context.sliderMaxValue !== undefined) {
    const minValue = context.sliderMinValue !== undefined ? context.sliderMinValue : 0;
    const maxValue = context.sliderMaxValue !== undefined ? context.sliderMaxValue : 100;
  }

  context.elements.rangeFill.style.transform = `translateX(${percentage}%)`;

  return percentage;
}

export function updateSlider(
  context, 
  container = context.elements.rangeFill, 
  entity = context.config.entity
){
  if (context.dragging) return;

  let percentage = 0;

  if (isEntityType(context, "light", entity)) {
    percentage = 100 * getAttribute(context, "brightness", entity) / 255;
  } else if (isEntityType(context, "media_player", entity)) {
    if (isStateOn(context, entity)) {
      percentage = 100 * getAttribute(context, "volume_level", entity);
    } else {
      percentage = 0;
    }
  } else if (isEntityType(context, "cover", entity)) {
    percentage = getAttribute(context, "current_position", entity);
  } else if (isEntityType(context, "input_number", entity)) {
    const minValue = getAttribute(context, "min", entity);
    const maxValue = getAttribute(context, "max", entity);
    const value = getState(context, entity);
    percentage = 100 * (value - minValue) / (maxValue - minValue);
  } else if (isEntityType(context, "fan", entity)) {
    if (isStateOn(context, entity)) {
      percentage = getAttribute(context, "percentage", entity);
    } else {
      percentage = 0;
    }
  } else if (isEntityType(context, "climate", entity)) {
    if (isStateOn(context, entity)) {
      const minValue = getAttribute(context, "min_temp", entity);
      const maxValue = getAttribute(context, "max_temp", entity);
      const value = getAttribute(context, "temperature", entity);
      percentage = 100 * (value - minValue) / (maxValue - minValue);
    } else {
      percentage = 0;
    }

    if (context.elements.rangeValue) {
      if (isStateOn(context, entity)) {
        const value = getAttribute(context, "temperature", entity);
        const isCelcius = context._hass.config.unit_system.temperature === '°C';
        context.elements.rangeValue.innerText = value.toFixed(1).replace(/\.0$/, '') + (isCelcius ? '°C' : '°F');
      } else {
        context.elements.rangeValue.innerText = Math.round(percentage) + '%';
      }
    }
  } else if (isEntityType(context, "number", entity)) {
    const minValue = getAttribute(context, "min", entity);
    const maxValue = getAttribute(context, "max", entity);
    const value = getState(context, entity);
    percentage = 100 * (value - minValue) / (maxValue - minValue);
  } else if (isEntityType(context, "sensor", entity) && getAttribute(context, "unit_of_measurement", entity) === "%") {
    percentage = getState(context, entity);
  } else if (context.config.min_value !== undefined && context.config.max_value !== undefined) {
    const value = parseFloat(getState(context, context.config.entity));
    const minValue = parseFloat(context.config.min_value);
    const maxValue = parseFloat(context.config.max_value);
    percentage = 100 * (value - minValue) / (maxValue - minValue);
  }

  if (context.sliderMinValue !== undefined || context.sliderMaxValue !== undefined) {
    const minValue = context.sliderMinValue !== undefined ? context.sliderMinValue : 0;
    const maxValue = context.sliderMaxValue !== undefined ? context.sliderMaxValue : 100;
    
    if (percentage >= minValue && percentage <= maxValue) {
      percentage = ((percentage - minValue) / (maxValue - minValue)) * 100;
    } else if (percentage < minValue) {
      percentage = 0;
    } else if (percentage > maxValue) {
      percentage = 100;
    }
  }

  container.style.transform = `translateX(${Math.round(percentage)}%)`;
}

export function updateEntity(context, value) {
  const state = context._hass.states[context.config.entity];
  
  let adjustedPercentage = value;
  if (context.sliderMinValue !== undefined || context.sliderMaxValue !== undefined) {
    const minValue = context.sliderMinValue !== undefined ? context.sliderMinValue : 0;
    const maxValue = context.sliderMaxValue !== undefined ? context.sliderMaxValue : 100;
    
    adjustedPercentage = minValue + (value / 100) * (maxValue - minValue);
  }

  if (context.config.step) {
    adjustedPercentage = Math.round(adjustedPercentage / context.config.step) * context.config.step;
  }

  if (isEntityType(context, "light")) {
      let brightnessPercentage = adjustedPercentage;
      if (context.sliderMinValue !== undefined || context.sliderMaxValue !== undefined) {
        brightnessPercentage = Math.min(100, Math.max(0, adjustedPercentage));
      }
      const brightness = Math.round(255 * brightnessPercentage / 100);
      const isTransitionEnabled = context.config.light_transition;
      const transitionTime = (context.config.light_transition_time === "" || isNaN(context.config.light_transition_time))
                                  ? 500 // in millisecond 
                                  : context.config.light_transition_time;
  
      context._hass.callService('light', 'turn_on', {
        entity_id: context.config.entity,
        brightness: brightness,
        ...(isTransitionEnabled && { transition: transitionTime / 1000 })
      });
  } else if (isEntityType(context, "media_player")) {
      let volumeLevel = adjustedPercentage / 100;
      volumeLevel = Math.min(1, Math.max(0, volumeLevel));
      const step = context.config.step ?? 0.01;
      volumeLevel = Math.round(volumeLevel / step) * step;
      context._hass.callService('media_player', 'volume_set', {
          entity_id: context.config.entity,
          volume_level: volumeLevel.toFixed(2)
      });
  } else if (isEntityType(context, "cover")) {
      let position = Math.round(adjustedPercentage);
      position = Math.min(100, Math.max(0, position));
      const step = context.config.step ?? 1;
      position = Math.round(position / step) * step;
      context._hass.callService('cover', 'set_cover_position', {
          entity_id: context.config.entity,
          position: position
      });
  } else if (isEntityType(context, "input_number")) {
      const minValue = state.attributes.min ?? 0;
      const maxValue = state.attributes.max ?? 100;
      const step = context.config.step ?? getAttribute(context, "step") ?? 1;
      let rawValue = (maxValue - minValue) * adjustedPercentage / 100 + minValue;
      let adjustedValue = Math.round(rawValue / step) * step;
      context._hass.callService('input_number', 'set_value', {
          entity_id: context.config.entity,
          value: adjustedValue
      });
  } else if (isEntityType(context, "fan")) {
      const step = context.config.step ?? state.attributes.percentage_step ?? 1;
      let fanPercentage = Math.round(adjustedPercentage);
      fanPercentage = Math.min(100, Math.max(0, fanPercentage));
      let adjustedValue = Math.round(fanPercentage / step) * step;
      context._hass.callService('fan', 'set_percentage', {
          entity_id: context.config.entity,
          percentage: adjustedValue
      });
  } else if (isEntityType(context, "climate")) {
      const minValue = state.attributes.min_temp ?? 0;
      const maxValue = state.attributes.max_temp ?? 10000;
      const isCelcius = context._hass.config.unit_system.temperature === '°C';
      const step = context.config.step ?? (state.attributes.target_temp_step ? state.attributes.target_temp_step : isCelcius ? 0.5 : 1);
      let rawValue = (maxValue - minValue) * adjustedPercentage / 100 + minValue;
      let adjustedValue = Math.round(rawValue / step) * step;
      adjustedValue = parseFloat(adjustedValue.toFixed(1));
      context._hass.callService('climate', 'set_temperature', {
          entity_id: context.config.entity,
          temperature: adjustedValue
      });
  } else if (isEntityType(context, "number")) {
      const minValue = state.attributes.min ?? 0;
      const maxValue = state.attributes.max ?? 100;
      const step = context.config.step ?? state.attributes.step ?? 1;
      let rawValue = (maxValue - minValue) * adjustedPercentage / 100 + minValue;
      let adjustedValue = Math.round(rawValue / step) * step;
      context._hass.callService('number', 'set_value', {
          entity_id: context.config.entity,
          value: adjustedValue
      });
  }
}
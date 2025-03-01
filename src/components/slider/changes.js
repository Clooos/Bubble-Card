import { 
  getState,
  getAttribute,
  isStateOn,
  isEntityType
} from '../../tools/utils.js';

export function onSliderChange(context, leftDistance) {
    const rect = context.elements.rangeSlider.getBoundingClientRect();
    const percentage = 100 * (leftDistance - rect.left) / rect.width;
    const rangedPercentage = Math.min(100, Math.max(0, percentage));
  
    context.elements.rangeFill.style.transform = `translateX(${rangedPercentage}%)`;
  
    return rangedPercentage;
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
      const minValue = getAttribute(context, "min_temp", entity);
      const maxValue = getAttribute(context, "max_temp", entity);
      const value = getAttribute(context, "temperature", entity);
      percentage = 100 * (value - minValue) / (maxValue - minValue);
    } else if (isEntityType(context, "number", entity)) {
      const minValue = getAttribute(context, "min", entity);
      const maxValue = getAttribute(context, "max", entity);
      const value = getState(context, entity);
      percentage = 100 * (value - minValue) / (maxValue - minValue);
    }
  
    container.style.transform = `translateX(${Math.round(percentage)}%)`;
  
    if (context.elements.rangeValue) {
      context.elements.rangeValue.innerText = Math.round(percentage) + '%';
    }
  }

  export function updateEntity(context, value) {
    const state = context._hass.states[context.config.entity];
  
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
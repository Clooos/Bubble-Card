import { 
  getState,
  getAttribute,
  isStateOn,
  isEntityType
} from '../../tools/utils.js';

let pendingRaf = null;

// Helper functions to get entity properties consistently
function getEntityMinValue(context, state) {
  if (context.config.min_value !== undefined) return parseFloat(context.config.min_value);
  // Support for media player volume min/max
  const entityType = state.entity_id.split('.')[0];
  if (entityType === 'media_player' && context.config.min_volume !== undefined) {
    return parseFloat(context.config.min_volume);
  }
  if (entityType === 'climate') return state.attributes.min_temp ?? 0;
  return state.attributes.min ?? 0;
}

function getEntityMaxValue(context, state) {
  if (context.config.max_value !== undefined) return parseFloat(context.config.max_value);
  // Support for media player volume min/max
  const entityType = state.entity_id.split('.')[0];
  if (entityType === 'media_player' && context.config.max_volume !== undefined) {
    return parseFloat(context.config.max_volume);
  }
  if (entityType === 'climate') return state.attributes.max_temp ?? 1000;
  return state.attributes.max ?? 100;
}

function getEntityStep(context, state) {
  if (context.config.step !== undefined) return parseFloat(context.config.step);
  const entityType = state.entity_id.split('.')[0];
  switch (entityType) {
    case 'input_number':
    case 'number':
      return state.attributes.step ?? 1;
    case 'fan':
      return state.attributes.percentage_step ?? 1;
    case 'climate': {      
      const isCelcius = context._hass.config.unit_system.temperature === '°C';
      return state.attributes.target_temp_step ?? (isCelcius ? 0.5 : 1);
    }
    case 'media_player':
      return 0.01; // Default step for volume
    case 'cover':
      return 1; // Default step for position
    default:
      return 1;
  }
}

function getAdjustedPercentage(context, percentage) {
  const state = context._hass.states[context.config.entity];
  if (!state) return percentage;

  let adjustedPercentage = percentage;

  return Math.max(0, Math.min(100, adjustedPercentage));
}

export function onSliderChange(context, positionX, shouldAdjustToStep = false) {
  const sliderRect = context.elements.rangeSlider.getBoundingClientRect();
  let percentage = Math.max(0, Math.min(100, ((positionX - sliderRect.left) / sliderRect.width) * 100));
  percentage = getAdjustedPercentage(context, percentage);

  // Special handling for lights when tap_to_slide is not active
  const entityType = context.config.entity?.split('.')[0];
  if (
    entityType === 'light' && 
    (context.config.tap_to_slide === false || context.config.tap_to_slide === undefined) &&
    (context.config.allow_light_slider_to_0 !== true)
  ) {
    // If dragging to the very minimum, keep it at 1% instead of 0%
    // This allows tap action to turn it off, but sliding keeps it dimly lit.
    if (percentage < 1) {
      percentage = 1;
    }
  }

  if (isEntityType(context, "climate", context.config.entity)) {
    context.elements.rangeFill.style.transform = `translateX(${percentage}%)`;
    
    return percentage;
  }

  // Force immediate visual update for direct user interaction
  context.elements.rangeFill.style.transform = `translateX(${percentage}%)`;
  
  // Update volume value display immediately for media players
  if (isEntityType(context, "media_player", context.config.entity) && context.elements.rangeValue) {
    context.elements.rangeValue.innerText = `${Math.round(percentage)}%`;
  }

  return percentage;
}

// Cache for calculated values with shorter duration for more responsiveness
const valueCache = new Map();
const cacheDuration = 100; // Reduced to 50ms for better responsiveness

function getCachedValue(key, calculator) {
  const cached = valueCache.get(key);
  const now = Date.now();
  
  if (cached && now - cached.timestamp < cacheDuration) {
    return cached.value;
  }
  
  const value = calculator();
  valueCache.set(key, { value, timestamp: now });
  return value;
}

function calculateRangePercentage(value, minValue, maxValue) {
  return 100 * (value - minValue) / (maxValue - minValue);
}

function adjustToRange(percentage, minValue, maxValue) {
  if (percentage >= minValue && percentage <= maxValue) {
    return 100 * ((percentage - minValue) / (maxValue - minValue));
  }
  return percentage < minValue ? 0 : 100;
}

function getCurrentValue(context, entity, entityType) {
  const currentState = context._hass.states[entity];
  if (!currentState) return 0;

  const minValue = getEntityMinValue(context, currentState);
  const maxValue = getEntityMaxValue(context, currentState);
  
  // Calculate current value based on entity state
  switch (entityType) {
    case 'light': {
      const brightness = getAttribute(context, "brightness", entity);
      const lightPercentage = 100 * brightness / 255;
      
      // Apply custom min/max if configured
      if (context.config.min_value !== undefined || context.config.max_value !== undefined) {
        const clampedValue = Math.max(minValue, Math.min(maxValue, lightPercentage));
        return calculateRangePercentage(clampedValue, minValue, maxValue);
      }
      return lightPercentage;
    }
    case 'media_player': {
      const volume = getAttribute(context, "volume_level", entity);
      const volumePercentage = volume !== undefined && volume !== null ? 100 * volume : 0;
      
      // Apply custom min/max if configured (check both volume-specific and generic config)
      if (context.config.min_value !== undefined || context.config.max_value !== undefined ||
          context.config.min_volume !== undefined || context.config.max_volume !== undefined) {
        const clampedValue = Math.max(minValue, Math.min(maxValue, volumePercentage));
        return calculateRangePercentage(clampedValue, minValue, maxValue);
      }
      return volumePercentage;
    }
    case 'cover': {
      const position = getAttribute(context, "current_position", entity);
      const coverPosition = position !== undefined && position !== null ? position : 0;
      
      // Apply custom min/max if configured
      if (context.config.min_value !== undefined || context.config.max_value !== undefined) {
        const clampedValue = Math.max(minValue, Math.min(maxValue, coverPosition));
        return calculateRangePercentage(clampedValue, minValue, maxValue);
      }
      return coverPosition;
    }
    case 'input_number':
    case 'number': {
      const value = parseFloat(getState(context, entity));
      const clampedValue = Math.max(minValue, Math.min(maxValue, value));
      return calculateRangePercentage(clampedValue, minValue, maxValue);
    }
    case 'fan':
      if (isStateOn(context, entity)) {
        const percentageAttribute = getAttribute(context, "percentage", entity);
        // Fan percentage is already 0-100, no need for min/max scaling unless specified in config
        if (context.config.min_value !== undefined || context.config.max_value !== undefined) {
            const value = parseFloat(percentageAttribute);
            const clampedValue = Math.max(minValue, Math.min(maxValue, value));
            return calculateRangePercentage(clampedValue, minValue, maxValue);
        } else {
            return percentageAttribute ?? 0;
        }
      } 
      return 0;
    case 'climate':
      if (isStateOn(context, entity)) {
        const temp = parseFloat(getAttribute(context, "temperature", entity));
        if (isNaN(temp) || minValue === undefined || maxValue === undefined) {
          return 0;
        }
        
        const cappedTemp = Math.max(minValue, Math.min(maxValue, temp));
        return calculateRangePercentage(cappedTemp, minValue, maxValue);
      }
      return 0;
    default:
      if (context.config.min_value !== undefined && context.config.max_value !== undefined) {
        const value = parseFloat(getState(context, entity));
        const clampedValue = Math.max(minValue, Math.min(maxValue, value));
        return calculateRangePercentage(clampedValue, minValue, maxValue);
      }
      return 0;
  }
}

export function updateSlider(
  context, 
  container = context.elements.rangeFill, 
  entity = context.config.entity
) {
  if (context.dragging) return;

  const entityType = entity?.split('.')[0];
  let percentage = 0;

  // Clear any pending RAF to ensure we don't have conflicting updates
  if (pendingRaf) {
    cancelAnimationFrame(pendingRaf);
    pendingRaf = null;
  }

  // Early return for percentage-based sensors
  if (entityType === 'sensor' && getAttribute(context, "unit_of_measurement", entity) === "%") {
    percentage = getState(context, entity);
  } else {
    percentage = getCurrentValue(context, entity, entityType);
  }

  // Update media player volume display if needed
  if (entityType === 'media_player' && context.elements.rangeValue) {
    const state = getState(context, entity);
    const volume = getAttribute(context, "volume_level", entity);
    const volumeValue = volume !== undefined && volume !== null ? Math.round(volume * 100) : 0;
    
    context.elements.rangeValue.innerText = `${volumeValue}%`;
  }

  // Update climate display value if needed
  if (entityType === 'climate' && context.elements.rangeValue) {
    if (isStateOn(context, entity)) {
      const temp = getAttribute(context, "temperature", entity);
      const isCelcius = context._hass.config.unit_system.temperature === '°C';
      
      let minTemp = getAttribute(context, "min_temp", entity);
      let maxTemp = getAttribute(context, "max_temp", entity);
      
      if (context.config.min_value !== undefined) {
        minTemp = parseFloat(context.config.min_value);
      }
      if (context.config.max_value !== undefined) {
        maxTemp = parseFloat(context.config.max_value);
      }
      
      if (temp !== undefined && minTemp !== undefined && maxTemp !== undefined) {
        const cappedTemp = Math.max(minTemp, Math.min(maxTemp, temp));
        percentage = calculateRangePercentage(cappedTemp, minTemp, maxTemp);
        
        context.elements.rangeValue.innerText = temp.toFixed(1).replace(/\.0$/, '') + (isCelcius ? '°C' : '°F');

        container.style.transform = `translateX(${Math.round(percentage)}%)`;
        return;
      } else {
        context.elements.rangeValue.innerText = temp ? (temp.toFixed(1).replace(/\.0$/, '') + (isCelcius ? '°C' : '°F')) : '0%';
      }
    } else {
      context.elements.rangeValue.innerText = '0%';
      percentage = 0;
      container.style.transform = `translateX(0%)`;
      return;
    }
  }

  // Always update the slider position to reflect the current state
  container.style.transform = `translateX(${Math.round(percentage)}%)`;
}

function getAdjustedValue(value, step) {
  return Math.round(value / step) * step;
}

export function updateEntity(context, percentage) {
  const state = context._hass.states[context.config.entity];
  if (!state) return; // Don't update if state is missing
  
  const entityType = context.config.entity.split('.')[0];
  const minValue = getEntityMinValue(context, state);
  const maxValue = getEntityMaxValue(context, state);
  const step = getEntityStep(context, state);

  // Convert the percentage (0-100) back to the raw value based on min/max
  let rawValue = minValue + (percentage / 100) * (maxValue - minValue);

  // Now, apply the step adjustment to the raw value
  let adjustedValue = getAdjustedValue(rawValue, step);

  // Clamp the adjusted value within the min/max bounds
  adjustedValue = Math.max(minValue, Math.min(maxValue, adjustedValue));

  switch (entityType) {
    case 'light': {
      // Handle custom min/max for lights
      let brightness;
      if (context.config.min_value !== undefined || context.config.max_value !== undefined) {
        // Use the adjusted value directly as percentage when custom min/max are set
        brightness = Math.round(255 * adjustedValue / 100);
      } else {
        // Standard light brightness conversion (0-100% to 0-255)
        brightness = Math.round(255 * percentage / 100);
      }
      
      const isTransitionEnabled = context.config.light_transition;
      const transitionTime = (context.config.light_transition_time === "" || isNaN(context.config.light_transition_time))
        ? 500 // in milliseconds
        : context.config.light_transition_time;

      context._hass.callService('light', 'turn_on', {
        entity_id: context.config.entity,
        brightness: brightness,
        ...(isTransitionEnabled && { transition: transitionTime / 1000 })
      });
      break;
    }

    case 'media_player': {
      // Handle custom min/max for media players (check both volume-specific and generic config)
      let volumeLevel;
      if (context.config.min_value !== undefined || context.config.max_value !== undefined ||
          context.config.min_volume !== undefined || context.config.max_volume !== undefined) {
        // Use the adjusted value directly when custom min/max are set
        volumeLevel = adjustedValue / 100;
      } else {
        // Standard volume conversion (0-100% to 0-1)
        volumeLevel = percentage / 100;
        volumeLevel = getAdjustedValue(volumeLevel, step);
      }
      
      // Clamp to 0-1 range
      volumeLevel = Math.max(0, Math.min(1, volumeLevel));
      context._hass.callService('media_player', 'volume_set', {
        entity_id: context.config.entity,
        volume_level: volumeLevel.toFixed(2)
      });
      break;
    }

    case 'cover': {
      // Handle custom min/max for covers
      let position;
      if (context.config.min_value !== undefined || context.config.max_value !== undefined) {
        // Use the adjusted value directly when custom min/max are set
        position = Math.round(adjustedValue);
      } else {
        // Standard cover position (percentage is already 0-100)
        position = Math.round(percentage);
      }
      
      context._hass.callService('cover', 'set_cover_position', {
        entity_id: context.config.entity,
        position: position
      });
      break;
    }

    case 'input_number': {
      context._hass.callService('input_number', 'set_value', {
        entity_id: context.config.entity,
        value: adjustedValue
      });
      break;
    }

    case 'fan': {
      // Handle custom min/max for fans
      let fanPercentage;
      if (context.config.min_value !== undefined || context.config.max_value !== undefined) {
        // Use the adjusted value directly when custom min/max are set
        fanPercentage = Math.round(adjustedValue);
      } else {
        // Standard fan percentage (percentage is already 0-100)
        fanPercentage = Math.round(percentage);
      }
      
      context._hass.callService('fan', 'set_percentage', {
        entity_id: context.config.entity,
        percentage: fanPercentage
      });
      break;
    }

    case 'climate': {
      // adjustedValue already holds the step-adjusted temperature within the effective min/max
      const finalValue = parseFloat(adjustedValue.toFixed(1)); // Ensure correct precision
      
      if (!isStateOn(context, context.config.entity)) {
        context._hass.callService('climate', 'turn_on', {
          entity_id: context.config.entity
        }).then(() => {
          context._hass.callService('climate', 'set_temperature', {
            entity_id: context.config.entity,
            temperature: finalValue
          });
        }).catch(error => {
          console.error('Error turning on climate entity:', error);
          context._hass.callService('climate', 'set_temperature', {
            entity_id: context.config.entity,
            temperature: finalValue
          });
        });
      } else {
        context._hass.callService('climate', 'set_temperature', {
          entity_id: context.config.entity,
          temperature: finalValue
        });
      }
      break;
    }

    case 'number': {
      context._hass.callService('number', 'set_value', {
        entity_id: context.config.entity,
        value: adjustedValue
      });
      break;
    }
  }
}
import { 
  getState,
  getAttribute,
  isStateOn,
  isEntityType
} from '../../tools/utils.js';

const pendingValues = new Map();
const throttleDelay = 16;
let lastRenderTime = 0;
let pendingRaf = null;

// Optimized throttle function for RAF with guaranteed execution
function requestAnimationFrameThrottle(callback) {
  if (pendingRaf) {
    cancelAnimationFrame(pendingRaf);
  }

  if (!lastRenderTime || Date.now() - lastRenderTime >= throttleDelay) {
    lastRenderTime = Date.now();
    callback();
  } else {
    pendingRaf = requestAnimationFrame(() => {
      lastRenderTime = Date.now();
      callback();
    });
  }
}

export function onSliderChange(context, positionX) {
  const sliderRect = context.elements.rangeSlider.getBoundingClientRect();
  const percentage = Math.max(0, Math.min(100, ((positionX - sliderRect.left) / sliderRect.width) * 100));
  
  // Store the pending value when user changes the slider
  pendingValues.set(context.config.entity, {
    percentage,
    timestamp: Date.now()
  });

  // Force immediate visual update for direct user interaction
  context.elements.rangeFill.style.transform = `translateX(${percentage}%)`;

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
    return ((percentage - minValue) / (maxValue - minValue)) * 100;
  }
  return percentage < minValue ? 0 : 100;
}

function getCurrentValue(context, entity, entityType) {
  const pendingValue = pendingValues.get(entity);
  const currentState = context._hass.states[entity];
  
  // Check for pending value and if it's still valid
  if (pendingValue) {
    const lastChanged = new Date(currentState.last_changed).getTime();
    if (lastChanged < pendingValue.timestamp) {
      return pendingValue.percentage;
    }
    pendingValues.delete(entity);
  }
  
  // Calculate current value based on entity state
  switch (entityType) {
    case 'light':
      return 100 * getAttribute(context, "brightness", entity) / 255;
    case 'media_player':
      return isStateOn(context, entity) ? 100 * getAttribute(context, "volume_level", entity) : 0;
    case 'cover':
      return getAttribute(context, "current_position", entity);
    case 'input_number':
    case 'number': {
      const minValue = getAttribute(context, "min", entity);
      const maxValue = getAttribute(context, "max", entity);
      return calculateRangePercentage(getState(context, entity), minValue, maxValue);
    }
    case 'fan':
      return isStateOn(context, entity) ? getAttribute(context, "percentage", entity) : 0;
    case 'climate':
      if (isStateOn(context, entity)) {
        const minTemp = getAttribute(context, "min_temp", entity);
        const maxTemp = getAttribute(context, "max_temp", entity);
        const temp = getAttribute(context, "temperature", entity);
        return calculateRangePercentage(temp, minTemp, maxTemp);
      }
      return 0;
    default:
      if (context.config.min_value !== undefined && context.config.max_value !== undefined) {
        const value = parseFloat(getState(context, entity));
        const minValue = parseFloat(context.config.min_value);
        const maxValue = parseFloat(context.config.max_value);
        return calculateRangePercentage(value, minValue, maxValue);
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

  const entityType = entity.split('.')[0];
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

  // Update climate display value if needed
  if (entityType === 'climate' && context.elements.rangeValue) {
    if (isStateOn(context, entity)) {
      const temp = getAttribute(context, "temperature", entity);
      const isCelcius = context._hass.config.unit_system.temperature === '°C';
      context.elements.rangeValue.innerText = temp.toFixed(1).replace(/\.0$/, '') + (isCelcius ? '°C' : '°F');
    } else {
      context.elements.rangeValue.innerText = '0%';
    }
  }

  // Adjust percentage based on slider min/max values
  if (context.sliderMinValue !== undefined || context.sliderMaxValue !== undefined) {
    const minValue = context.sliderMinValue ?? 0;
    const maxValue = context.sliderMaxValue ?? 100;
    percentage = adjustToRange(percentage, minValue, maxValue);
  }

  // Always update the slider position to reflect the current state
  container.style.transform = `translateX(${Math.round(percentage)}%)`;
}

function getAdjustedValue(value, step) {
  return Math.round(value / step) * step;
}

export function updateEntity(context, value) {
  const state = context._hass.states[context.config.entity];
  const entityType = context.config.entity.split('.')[0];
  
  let adjustedPercentage = value;
  if (context.sliderMinValue !== undefined || context.sliderMaxValue !== undefined) {
    const minValue = context.sliderMinValue ?? 0;
    const maxValue = context.sliderMaxValue ?? 100;
    adjustedPercentage = minValue + (value / 100) * (maxValue - minValue);
  }

  if (context.config.step) {
    adjustedPercentage = getAdjustedValue(adjustedPercentage, context.config.step);
  }

  switch (entityType) {
    case 'light': {
      const brightnessPercentage = Math.min(100, Math.max(0, adjustedPercentage));
      const brightness = Math.round(255 * brightnessPercentage / 100);
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
      const step = context.config.step ?? 0.01;
      const volumeLevel = getAdjustedValue(
        Math.min(1, Math.max(0, adjustedPercentage / 100)),
        step
      );
      context._hass.callService('media_player', 'volume_set', {
        entity_id: context.config.entity,
        volume_level: volumeLevel.toFixed(2)
      });
      break;
    }

    case 'cover': {
      const step = context.config.step ?? 1;
      const position = getAdjustedValue(
        Math.min(100, Math.max(0, Math.round(adjustedPercentage))),
        step
      );
      context._hass.callService('cover', 'set_cover_position', {
        entity_id: context.config.entity,
        position: position
      });
      break;
    }

    case 'input_number': {
      const minValue = state.attributes.min ?? 0;
      const maxValue = state.attributes.max ?? 100;
      const step = context.config.step ?? getAttribute(context, "step") ?? 1;
      const rawValue = (maxValue - minValue) * adjustedPercentage / 100 + minValue;
      const adjustedValue = getAdjustedValue(rawValue, step);
      context._hass.callService('input_number', 'set_value', {
        entity_id: context.config.entity,
        value: adjustedValue
      });
      break;
    }

    case 'fan': {
      const step = context.config.step ?? state.attributes.percentage_step ?? 1;
      const fanPercentage = Math.min(100, Math.max(0, Math.round(adjustedPercentage)));
      const adjustedValue = getAdjustedValue(fanPercentage, step);
      context._hass.callService('fan', 'set_percentage', {
        entity_id: context.config.entity,
        percentage: adjustedValue
      });
      break;
    }

    case 'climate': {
      const minValue = state.attributes.min_temp ?? 0;
      const maxValue = state.attributes.max_temp ?? 10000;
      const isCelcius = context._hass.config.unit_system.temperature === '°C';
      const step = context.config.step ?? (state.attributes.target_temp_step ? state.attributes.target_temp_step : isCelcius ? 0.5 : 1);
      const rawValue = (maxValue - minValue) * adjustedPercentage / 100 + minValue;
      const adjustedValue = parseFloat(getAdjustedValue(rawValue, step).toFixed(1));
      context._hass.callService('climate', 'set_temperature', {
        entity_id: context.config.entity,
        temperature: adjustedValue
      });
      break;
    }

    case 'number': {
      const minValue = state.attributes.min ?? 0;
      const maxValue = state.attributes.max ?? 100;
      const step = context.config.step ?? state.attributes.step ?? 1;
      const rawValue = (maxValue - minValue) * adjustedPercentage / 100 + minValue;
      const adjustedValue = getAdjustedValue(rawValue, step);
      context._hass.callService('number', 'set_value', {
        entity_id: context.config.entity,
        value: adjustedValue
      });
      break;
    }
  }
}
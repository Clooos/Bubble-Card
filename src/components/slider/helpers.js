import { 
  getAttribute,
  getState,
  isStateOn
} from '../../tools/utils.js';

// Generic helpers
export function getEntityTypeFromId(entityId) {
  return entityId?.split('.')[0];
}

export function clamp(value, min, max) {
  if (min === undefined || max === undefined) return value;
  if (max <= min) return min;
  return Math.max(min, Math.min(max, value));
}

export function clampPercentage(percentage) {
  return Math.max(0, Math.min(100, percentage));
}

export function getAdjustedValue(value, step) {
  if (!isFinite(step) || step <= 0) return value;
  return Math.round(value / step) * step;
}

export function calculateRangePercentage(value, minValue, maxValue) {
  if (minValue === undefined || maxValue === undefined || maxValue <= minValue) return 0;
  const clampedValue = clamp(value, minValue, maxValue);
  return 100 * (clampedValue - minValue) / (maxValue - minValue);
}

export function fromPercentageToValue(percentage, minValue, maxValue) {
  if (minValue === undefined || maxValue === undefined || maxValue <= minValue) return 0;
  return minValue + (percentage / 100) * (maxValue - minValue);
}

// Entity range helpers
export function getEntityMinValue(context, state) {
  if (context.config.min_value !== undefined) return parseFloat(context.config.min_value);
  const entityType = state.entity_id.split('.')[0];
  if (entityType === 'media_player' && context.config.min_volume !== undefined) {
    return parseFloat(context.config.min_volume);
  }
  if (entityType === 'climate') return state.attributes.min_temp ?? 0;
  return state.attributes.min ?? 0;
}

export function getEntityMaxValue(context, state) {
  if (context.config.max_value !== undefined) return parseFloat(context.config.max_value);
  const entityType = state.entity_id.split('.')[0];
  if (entityType === 'media_player' && context.config.max_volume !== undefined) {
    return parseFloat(context.config.max_volume);
  }
  if (entityType === 'climate') return state.attributes.max_temp ?? 100;
  return state.attributes.max ?? 100;
}

export function getEntityStep(context, state) {
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
      return 0.01;
    case 'cover':
      return 1;
    case 'light':
      return 1;
    default:
      return 1;
  }
}

// Determine if entity is read-only for the slider
export function isReadOnlyEntityId(entityId) {
  if (!entityId) return true;
  const entityType = getEntityTypeFromId(entityId);
  const supportedEntities = ['light', 'media_player', 'cover', 'input_number', 'number', 'fan', 'climate'];
  if (entityType === 'sensor') return true;
  return !supportedEntities.includes(entityType);
}

// Compute current slider percentage from entity state
export function getCurrentPercentage(context, entity = context.config.entity) {
  const entityType = getEntityTypeFromId(entity);

  // Early return for percentage-based sensors
  if (entityType === 'sensor' && getAttribute(context, 'unit_of_measurement', entity) === '%') {
    return clampPercentage(parseFloat(getState(context, entity)) || 0);
  }

  const currentState = context._hass.states[entity];
  if (!currentState) return 0;

  const minValue = getEntityMinValue(context, currentState);
  const maxValue = getEntityMaxValue(context, currentState);

  switch (entityType) {
    case 'light': {
      // Support multiple slider modes for lights: brightness (default), hue, saturation, white_temp
      const lightSliderType = context?.config?.light_slider_type || 'brightness';

      if (lightSliderType === 'hue') {
        const hs = getAttribute(context, 'hs_color', entity) || [];
        const hue = Array.isArray(hs) ? parseFloat(hs[0]) || 0 : 0;
        const normalizedHue = ((hue % 360) + 360) % 360;
        return clampPercentage((normalizedHue / 360) * 100);
      }

      if (lightSliderType === 'saturation') {
        const hs = getAttribute(context, 'hs_color', entity) || [];
        const saturation = Array.isArray(hs) ? parseFloat(hs[1]) || 0 : 0;
        return clampPercentage(saturation);
      }

      if (lightSliderType === 'white_temp') {
        const colorTempMireds = parseFloat(getAttribute(context, 'color_temp', entity));
        const minMireds = parseFloat(getAttribute(context, 'min_mireds', entity)) || 153;
        const maxMireds = parseFloat(getAttribute(context, 'max_mireds', entity)) || 500;
        if (!isFinite(colorTempMireds)) return 0;
        const value = clamp(colorTempMireds, Math.min(minMireds, maxMireds), Math.max(minMireds, maxMireds));
        return calculateRangePercentage(value, minMireds, maxMireds);
      }

      // Default: brightness
      const brightness = getAttribute(context, 'brightness', entity) ?? 0;
      const lightPercentage = 100 * brightness / 255;
      if (context.config.min_value !== undefined || context.config.max_value !== undefined) {
        return calculateRangePercentage(lightPercentage, minValue, maxValue);
      }
      return clampPercentage(lightPercentage);
    }
    case 'media_player': {
      const volume = getAttribute(context, 'volume_level', entity);
      const volumePercentage = volume !== undefined && volume !== null ? 100 * volume : 0;
      if (context.config.min_value !== undefined || context.config.max_value !== undefined ||
          context.config.min_volume !== undefined || context.config.max_volume !== undefined) {
        return calculateRangePercentage(volumePercentage, minValue, maxValue);
      }
      return clampPercentage(volumePercentage);
    }
    case 'cover': {
      const position = getAttribute(context, 'current_position', entity);
      const coverPosition = position !== undefined && position !== null ? position : 0;
      if (context.config.min_value !== undefined || context.config.max_value !== undefined) {
        return calculateRangePercentage(coverPosition, minValue, maxValue);
      }
      return clampPercentage(coverPosition);
    }
    case 'input_number':
    case 'number': {
      const value = parseFloat(getState(context, entity));
      if (isNaN(value)) return 0;
      const clampedValue = clamp(value, minValue, maxValue);
      return calculateRangePercentage(clampedValue, minValue, maxValue);
    }
    case 'fan': {
      if (isStateOn(context, entity)) {
        const percentageAttribute = getAttribute(context, 'percentage', entity) ?? 0;
        if (context.config.min_value !== undefined || context.config.max_value !== undefined) {
          const value = parseFloat(percentageAttribute);
          const clampedValue = clamp(value, minValue, maxValue);
          return calculateRangePercentage(clampedValue, minValue, maxValue);
        }
        return clampPercentage(percentageAttribute);
      }
      return 0;
    }
    case 'climate': {
      if (isStateOn(context, entity)) {
        const temp = parseFloat(getAttribute(context, 'temperature', entity));
        if (isNaN(temp)) return 0;
        const cappedTemp = clamp(temp, minValue, maxValue);
        return calculateRangePercentage(cappedTemp, minValue, maxValue);
      }
      return 0;
    }
    default: {
      if (context.config.min_value !== undefined && context.config.max_value !== undefined) {
        const value = parseFloat(getState(context, entity));
        if (isNaN(value)) return 0;
        const clampedValue = clamp(value, minValue, maxValue);
        return calculateRangePercentage(clampedValue, minValue, maxValue);
      }
      return 0;
    }
  }
}

// Format value for value-display from percentage (used during dragging)
export function formatDisplayValue(context, percentage) {
  const entityId = context.config.entity;
  const entityType = getEntityTypeFromId(entityId);
  const hass = context._hass;

  const rawMin = context.sliderMinValue ?? context.config?.min_value;
  const rawMax = context.sliderMaxValue ?? context.config?.max_value;
  const rawStep = context.sliderStep ?? context.config?.step ?? 1;

  let minValue = Number(rawMin);
  let maxValue = Number(rawMax);
  let step = Number(rawStep);

  if (!Number.isFinite(minValue)) {
    minValue = 0;
  }
  if (!Number.isFinite(maxValue)) {
    maxValue = entityType === 'climate' ? minValue + 1 : 100;
  }
  if (maxValue <= minValue) {
    maxValue = entityType === 'climate' ? minValue + 1 : minValue + 100;
  }
  if (!Number.isFinite(step) || step <= 0) {
    step = 1;
  }

  const boundedPercentage = clampPercentage(Number(percentage) || 0);
  const range = maxValue - minValue;
  const rawValue = minValue + (range > 0 ? (boundedPercentage / 100) * range : 0);
  const adjustedValue = getAdjustedValue(rawValue, step);
  const clampedValue = clamp(adjustedValue, minValue, maxValue);

  return formatValue(context, clampedValue, entityType, entityId, hass);
}

// Format value for value-display from actual entity state (used after dragging)
export function formatDisplayValueFromEntity(context) {
  const entityId = context.config.entity;
  const entityType = getEntityTypeFromId(entityId);
  const hass = context._hass;
  const state = hass?.states?.[entityId];
  
  if (!state) {
    return hass?.localize?.('state.default.unavailable') || '0%';
  }

  let actualValue = 0;

  switch (entityType) {
    case 'climate': {
      if (!isStateOn(context, entityId)) {
        return hass?.localize?.('state.default.off') || '0%';
      }
      actualValue = parseFloat(getAttribute(context, 'temperature', entityId)) || 0;
      break;
    }
    case 'input_number':
    case 'number': {
      actualValue = parseFloat(getState(context, entityId)) || 0;
      break;
    }
    case 'light': {
      const brightness = getAttribute(context, 'brightness', entityId) ?? 0;
      actualValue = 100 * brightness / 255;
      break;
    }
    case 'media_player': {
      const volume = getAttribute(context, 'volume_level', entityId);
      actualValue = volume !== undefined && volume !== null ? 100 * volume : 0;
      break;
    }
    case 'cover': {
      const position = getAttribute(context, 'current_position', entityId);
      actualValue = position !== undefined && position !== null ? position : 0;
      break;
    }
    case 'fan': {
      if (isStateOn(context, entityId)) {
        const percentageAttribute = getAttribute(context, 'percentage', entityId);
        actualValue = percentageAttribute ?? 0;
      } else {
        actualValue = 0;
      }
      break;
    }
    default: {
      actualValue = parseFloat(getState(context, entityId)) || 0;
      break;
    }
  }

  return formatValue(context, actualValue, entityType, entityId, hass);
}

// Helper function to format a value with proper units and precision
function formatValue(context, value, entityType, entityId, hass) {
  switch (entityType) {
    case 'climate': {
      if (!isStateOn(context, entityId)) {
        return hass?.localize?.('state.default.off') || '0%';
      }
      const isCelcius = hass?.config?.unit_system?.temperature === '°C';
      const formatted = value.toFixed(1).replace(/\.0$/, '');
      return `${formatted}${isCelcius ? '°C' : '°F'}`;
    }
    case 'input_number':
    case 'number': {
      const unit = getAttribute(context, 'unit_of_measurement', entityId) || '';
      const precision = hass?.states?.[entityId]?.attributes?.precision ?? (Number.isInteger(value) ? 0 : 1);
      const formatted = value.toFixed(precision).replace(/\.0$/, '');
      return unit ? `${formatted} ${unit}` : formatted;
    }
    case 'light': {
      // For lights, display brightness percentage
      const rounded = Math.round(value);
      return `${rounded}%`;
    }
    case 'media_player': {
      // For media players, display volume percentage
      const rounded = Math.round(value);
      return `${rounded}%`;
    }
    case 'cover': {
      // For covers, display position percentage
      const rounded = Math.round(value);
      return `${rounded}%`;
    }
    case 'fan': {
      // For fans, display percentage
      const rounded = Math.round(value);
      return `${rounded}%`;
    }
    default: {
      // For other types, check if there's a unit of measurement
      const unit = getAttribute(context, 'unit_of_measurement', entityId) || '';
      if (unit) {
        const precision = hass?.states?.[entityId]?.attributes?.precision ?? (Number.isInteger(value) ? 0 : 1);
        const formatted = value.toFixed(precision).replace(/\.0$/, '');
        return `${formatted} ${unit}`;
      }
      const rounded = Math.round(value);
      return `${rounded}%`;
    }
  }
}



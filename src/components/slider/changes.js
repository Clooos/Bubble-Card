import { 
  isStateOn,
  getStateSurfaceColor
} from '../../tools/utils.js';
import { getLightColorSignature } from '../../tools/icon.js';
import {
  getEntityMinValue,
  getEntityMaxValue,
  getEntityStep,
  getAdjustedValue,
  clampPercentage,
  fromPercentageToValue,
  getCurrentPercentage,
  formatDisplayValue,
  formatDisplayValueFromEntity,
  toVisualPercentage,
  toActualPercentage,
  getFillOrientation,
  setRangeFillTransform
} from './helpers.js';

// Smoothly animate slider position for external updates
function parseTranslatePercent(transformString) {
  const match = /translate([XY])\(([-\d.]+)%\)/.exec(transformString || '');
  if (!match) return null;
  const [, axis, value] = match;
  const numericValue = parseFloat(value);
  if (!Number.isFinite(numericValue)) return null;
  return { axis, value: numericValue };
}

function getDisplayedPercentage(context) {
  try {
    if (Number.isFinite(context._lastVisualFillPercentage)) {
      return toActualPercentage(context, context._lastVisualFillPercentage);
    }
    if (context.elements?.rangeFill) {
      const parsed = parseTranslatePercent(context.elements.rangeFill.style.transform);
      if (parsed) {
        const orientation = getFillOrientation(context);
        const expectedAxis = (orientation === 'top' || orientation === 'bottom') ? 'Y' : 'X';
        if (parsed.axis === expectedAxis) {
          return toActualPercentage(context, Math.abs(parsed.value));
        }
      }
    }
  } catch (_) {}
  try {
    return Math.round(getCurrentPercentage(context, context.config.entity));
  } catch (_) {
    return 0;
  }
}

function animateToPercentage(context, targetPercentage) {
  if (!context || !context.elements) return;
  if (context.dragging) return; // Never animate during drag

  const entityType = context.config.entity?.split?.('.')[0];
  const lightSliderType = context?.config?.light_slider_type || 'brightness';
  const isColorMode = (entityType === 'light' && ['hue', 'saturation', 'white_temp'].includes(lightSliderType));

  const to = clampPercentage(Math.round(targetPercentage));
  const from = getDisplayedPercentage(context);

  // If small delta, snap immediately
  if (!Number.isFinite(from) || Math.abs(from - to) < 0.5) {
    setVisual(to);
    updateValue(to, true); // Use entity value for accurate display
    // Keep color track visuals in sync for hue/sat
    if (isColorMode && (lightSliderType === 'hue' || lightSliderType === 'saturation') && typeof context.updateColorTrackBackground === 'function') {
      try { context.updateColorTrackBackground(); } catch (_) {}
    }
    return;
  }

  // Cancel any existing animation on this context
  try { if (context._sliderAnimRaf) cancelAnimationFrame(context._sliderAnimRaf); } catch (_) {}

  const durationMs = 250;
  const startTs = performance.now();

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const step = (now) => {
    if (context.dragging) return; // Abort if user starts dragging
    const t = Math.min(1, (now - startTs) / durationMs);
    const current = from + (to - from) * easeOutCubic(t);
    setVisual(current);
    updateValue(current);
    if (t < 1) {
      context._sliderAnimRaf = requestAnimationFrame(step);
    } else {
      // Finalize - use entity value for accurate display
      setVisual(to);
      updateValue(to, true); // Use entity value for accurate display
      if (isColorMode && (lightSliderType === 'hue' || lightSliderType === 'saturation') && typeof context.updateColorTrackBackground === 'function') {
        try { context.updateColorTrackBackground(); } catch (_) {}
      }
      try { context._sliderAnimRaf = null; } catch (_) {}
    }
  };
  context._sliderAnimRaf = requestAnimationFrame(step);

  function setVisual(pct) {
    const pctRounded = Math.round(clampPercentage(pct));
    try {
      if (isColorMode && typeof context.setColorCursorPosition === 'function') {
        context.setColorCursorPosition(pctRounded);
        if (typeof context.updateColorCursorIndicator === 'function') {
          try { context.updateColorCursorIndicator(pctRounded); } catch (_) {}
        }
      }
      setRangeFillTransform(context, pctRounded);
    } catch (_) {}
  }

  function updateValue(pct, useEntityValue = false) {
    if (!context.elements?.rangeValue) return;
    try {
      const newValue = useEntityValue 
        ? formatDisplayValueFromEntity(context)
        : formatDisplayValue(context, clampPercentage(pct));
      if (context.elements.rangeValue.textContent !== newValue) {
        context.elements.rangeValue.textContent = newValue;
      }
    } catch (_) {}
  }
}

// Global frame counter for bounding rect cache invalidation
let sliderRectFrameCounter = 0;
let sliderRectRafScheduled = false;

function invalidateSliderRectCache() {
  sliderRectFrameCounter++;
  sliderRectRafScheduled = false;
}

export function onSliderChange(context, positionCoordinate, shouldAdjustToStep = false, sliderBounds = null) {
  // Use provided bounds or cached bounds to avoid expensive getBoundingClientRect calls
  let sliderRect = sliderBounds;
  if (!sliderRect) {
    // Check cache first - cache is valid for current frame
    if (context._sliderRectCache && context._sliderRectCache.frameId === sliderRectFrameCounter) {
      sliderRect = context._sliderRectCache.rect;
    } else {
      sliderRect = context.elements.rangeSlider.getBoundingClientRect();
      // Cache the result for this frame
      if (!context._sliderRectCache) {
        context._sliderRectCache = {};
      }
      context._sliderRectCache.rect = sliderRect;
      context._sliderRectCache.frameId = sliderRectFrameCounter;
      
      // Schedule cache invalidation for next frame
      if (!sliderRectRafScheduled) {
        requestAnimationFrame(invalidateSliderRectCache);
        sliderRectRafScheduled = true;
      }
    }
  }
  const orientation = getFillOrientation(context);
  const isVertical = orientation === 'top' || orientation === 'bottom';
  const axisSize = isVertical ? (sliderRect?.height ?? 0) : (sliderRect?.width ?? 0);

  if (axisSize <= 0) {
    return clampPercentage(getCurrentPercentage(context, context.config.entity));
  }

  const axisStart = isVertical ? sliderRect.top : sliderRect.left;
  let visualPercentage = ((positionCoordinate - axisStart) / axisSize) * 100;
  visualPercentage = clampPercentage(visualPercentage);
  if (orientation === 'right' || orientation === 'bottom') {
    visualPercentage = 100 - visualPercentage;
  }

  let percentage = toActualPercentage(context, visualPercentage);

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

  percentage = clampPercentage(percentage);

  setRangeFillTransform(context, percentage);
  return percentage;
}

export function updateSliderStyle(context) {
  if (!context.elements?.rangeFill) return;

  const entityType = context.config.entity?.split('.')[0];
  const isLight = entityType === 'light';
  const isOn = isStateOn(context, context.config.entity);
  const lightSliderType = context?.config?.light_slider_type || 'brightness';
  const isLightBrightnessSlider = isLight && lightSliderType === 'brightness';
  const useAccentColor = context.config.use_accent_color;

  // Check for light color changes using getLightColorSignature
  const state = context._hass?.states?.[context.config.entity];
  const currentColorSignature = getLightColorSignature(state, context.config.entity);
  const previousColorSignature = context._previousSliderColorSignature;
  const colorChanged = previousColorSignature !== currentColorSignature;
  context._previousSliderColorSignature = currentColorSignature;

  const rangeFill = context.elements.rangeFill;
  const hasLightColorClass = rangeFill.classList.contains('slider-use-light-color');
  const hasAccentColorClass = rangeFill.classList.contains('slider-use-accent-color');

  // Safari fix: detect rapid color changes to disable transitions temporarily
  const now = Date.now();
  const lastChange = context._lastSliderStyleChange || 0;
  const timeSinceLastChange = now - lastChange;
  context._lastSliderStyleChange = now;

  if (isOn) {
    if (isLightBrightnessSlider && !useAccentColor) {
      // Use light color for brightness slider
      const cardType = context.config.card_type;
      const cardBackgroundColor = cardType === 'button'
        ? context.card?.style.getPropertyValue('--bubble-button-background-color')
        : context.popUp?.style.getPropertyValue('--bubble-button-background-color');
      
      const surfaceColor = getStateSurfaceColor(context, context.config.entity, true, cardBackgroundColor || null, null);
      
      if (!hasLightColorClass) {
        rangeFill.classList.remove('slider-use-accent-color');
        rangeFill.classList.add('slider-use-light-color');
      }
      rangeFill.style.setProperty('--bubble-slider-fill-color', surfaceColor);
    } else {
      // Use accent color
      if (!hasAccentColorClass) {
        rangeFill.classList.remove('slider-use-light-color');
        rangeFill.style.removeProperty('--bubble-slider-fill-color');
        rangeFill.classList.add('slider-use-accent-color');
      }
    }
  } else {
    if (hasLightColorClass || hasAccentColorClass) {
      rangeFill.classList.remove('slider-use-light-color', 'slider-use-accent-color');
      rangeFill.style.removeProperty('--bubble-slider-fill-color');
    }
  }

  if (typeof context.syncSliderValuePosition === 'function') {
    try {
      context.syncSliderValuePosition();
    } catch (_) {}
  }
}

export function updateSlider(
  context, 
  container = context.elements.rangeFill, 
  entity = context.config.entity
) {
  if (context.dragging) return;

  const percentage = getCurrentPercentage(context, entity);

  const previousPercentage = context._lastSliderPercentage;
  
  // Update style first (cached, fast)
  updateSliderStyle(context);
  
  // If percentage hasn't changed significantly, skip animation
  if (previousPercentage !== undefined && Math.abs(previousPercentage - percentage) < 0.01) {
    return;
  }

  context._lastSliderPercentage = percentage;

  // Handle light color sliders (hue, saturation, white_temp) separately
  const entityType = entity?.split?.(".")[0];
  if (entityType === 'light') {
    const lightSliderType = context?.config?.light_slider_type || 'brightness';
    const isColorMode = ['hue', 'saturation', 'white_temp'].includes(lightSliderType);

    if (isColorMode && context.elements?.colorCursor) {
      // For color sliders, use animation
      animateToPercentage(context, percentage);
      return;
    }
  }

  // For initial render or large changes, update immediately without animation
  // Only animate for small incremental changes (external updates)
  const isInitialRender = previousPercentage === undefined;
  const isLargeChange = previousPercentage !== undefined && Math.abs(previousPercentage - percentage) > 5;
  
  if (isInitialRender || isLargeChange) {
    // Immediate update for instant rendering
    const pctRounded = Math.round(clampPercentage(percentage));
    try {
      setRangeFillTransform(context, pctRounded);
      if (context.elements?.rangeValue) {
        const newValue = formatDisplayValueFromEntity(context);
        if (context.elements.rangeValue.textContent !== newValue) {
          context.elements.rangeValue.textContent = newValue;
        }
      }
    } catch (_) {}
  } else {
    // Animate for small incremental changes
    animateToPercentage(context, percentage);
  }
}

export function updateEntity(context, percentage) {
  const state = context._hass.states[context.config.entity];
  if (!state) return; // Don't update if state is missing
  
  const entityType = context.config.entity.split('.')[0];
  const minValue = getEntityMinValue(context, state);
  const maxValue = getEntityMaxValue(context, state);
  const step = getEntityStep(context, state);

  // Convert the percentage (0-100) back to the raw value based on min/max
  let rawValue = fromPercentageToValue(percentage, minValue, maxValue);

  // Now, apply the step adjustment to the raw value
  let adjustedValue = getAdjustedValue(rawValue, step);

  // Clamp the adjusted value within the min/max bounds
  adjustedValue = Math.max(minValue, Math.min(maxValue, adjustedValue));
  const range = maxValue - minValue;
  const adjustedPercentage = range > 0
    ? clampPercentage(((adjustedValue - minValue) / range) * 100)
    : 0;

  switch (entityType) {
    case 'light': {
      const lightSliderType = context?.config?.light_slider_type || 'brightness';

      if (lightSliderType === 'hue' || lightSliderType === 'saturation') {
        // hs_color = [hue(0-360), sat(0-100)]
        const currentHs = context._hass.states[context.config.entity]?.attributes?.hs_color || [];
        const currentHue = parseFloat(currentHs[0]) || 0;
        const currentSat = parseFloat(currentHs[1]) || 0;
        const newHue = lightSliderType === 'hue' ? Math.round((adjustedPercentage / 100) * 360) : currentHue;

        // When adjusting hue: only force saturation to 100% if previously too low (< 10%)
        // When adjusting saturation: use the chosen saturation value
        const SAT_THRESHOLD = 10;
        const forceSat = context.config?.hue_force_saturation === true;
        const forcedValueRaw = Number(context.config?.hue_force_saturation_value);
        const forcedValue = Number.isFinite(forcedValueRaw) ? Math.max(0, Math.min(100, forcedValueRaw)) : 100;
        const newSat = (lightSliderType === 'saturation')
          ? Math.round(adjustedPercentage)
          : (forceSat ? forcedValue : (currentSat < SAT_THRESHOLD ? 100 : currentSat));

        context._hass.callService('light', 'turn_on', {
          entity_id: context.config.entity,
          hs_color: [newHue, newSat]
        });
        break;
      }

      if (lightSliderType === 'white_temp') {
        const minMireds = context._hass.states[context.config.entity]?.attributes?.min_mireds ?? 153;
        const maxMireds = context._hass.states[context.config.entity]?.attributes?.max_mireds ?? 500;
        const value = fromPercentageToValue(adjustedPercentage, minMireds, maxMireds);
        const mireds = Math.round(getAdjustedValue(value, 1));
        context._hass.callService('light', 'turn_on', {
          entity_id: context.config.entity,
          color_temp: mireds
        });
        break;
      }

      // Handle brightness (default)
      let brightness;
      if (context.config.min_value !== undefined || context.config.max_value !== undefined) {
        brightness = Math.round(255 * adjustedValue / 100);
      } else {
        const effectivePercentage = Number.isFinite(adjustedPercentage) ? adjustedPercentage : percentage;
        brightness = Math.round(255 * effectivePercentage / 100);
      }
      const isTransitionEnabled = context.config.light_transition;
      const transitionTime = (context.config.light_transition_time === "" || isNaN(context.config.light_transition_time))
        ? 500
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
        // Standard volume conversion (0-100% to 0-1) using stepped percentage
        volumeLevel = adjustedPercentage / 100;
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
        position = Math.round(adjustedPercentage);
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
        fanPercentage = Math.round(adjustedPercentage);
      }
      
      context._hass.callService('fan', 'set_percentage', {
        entity_id: context.config.entity,
        percentage: fanPercentage
      });
      break;
    }

    case 'climate': {
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
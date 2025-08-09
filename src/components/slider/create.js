import { 
  throttle, 
  forwardHaptic, 
  createElement,
  isEntityType,
  getAttribute,
  isStateOn,
  getState
} from '../../tools/utils.js';
import { updateEntity, onSliderChange } from './changes.js';
import { defaultOptions } from './index.js';
import styles from './styles.css';

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
  if (entityType === 'climate') return state.attributes.max_temp ?? 100;
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
      return 0.01;
    case 'cover':
      return 1;
    case 'light':
        return 1; 
    default:
      return 1;
  }
}

function getAdjustedValue(value, step) {
  if (step <= 0) return value; // Avoid division by zero or infinite loops
  return Math.round(value / step) * step;
}

export function createSliderStructure(context, config = {}) {
  const options = { 
    ...defaultOptions,
    targetElement: context.elements.mainContainer,
    insertBefore: context.elements.cardWrapper,
    sliderLiveUpdate: context.config.slider_live_update,
    relativeSlide: context.config.relative_slide,
    holdToSlide: false,
    readOnlySlider: false,
    styles: styles,
    ...config 
  };

  // Determine effective min/max for the slider display
  const entityState = context._hass.states[context.config.entity];
  const entityType = context.config.entity?.split('.')[0];

  if (entityState) {
    context.sliderMinValue = getEntityMinValue(context, entityState);
    context.sliderMaxValue = getEntityMaxValue(context, entityState);
    context.sliderStep = getEntityStep(context, entityState);
  } else {
    // Fallback if entity state is not available - use config or defaults
    context.sliderMinValue = context.config.min_value ?? 0;
    context.sliderMaxValue = context.config.max_value ?? 100;
    // Cannot determine step reliably without entity state, use config or default 1
    context.sliderStep = context.config.step ?? 1;
  }
  
  // Ensure min < max
  if (context.sliderMaxValue <= context.sliderMinValue) {
    if (entityType === 'climate') {
        context.sliderMaxValue = context.sliderMinValue + 1; // Default diff for climate
    } else {
        context.sliderMaxValue = context.sliderMinValue + 100; // Default diff for others
    }
  }

  context.elements.rangeFill = createElement('div', 'bubble-range-fill range-fill');
  context.elements.rangeSlider = createElement('div', 'bubble-range-slider range-slider');

  if (options.styles) {
    const style = createElement('style');
    style.textContent = options.styles;
    context.elements.rangeSlider.appendChild(style);
  }

  function calculateRangePercentage(value, minValue, maxValue) {
    if (maxValue <= minValue) return 0; // Avoid division by zero or negative
    // Clamp value before calculating percentage
    const clampedValue = Math.max(minValue, Math.min(maxValue, value));
    return 100 * (clampedValue - minValue) / (maxValue - minValue);
  }

  function calculateInitialPercentage() {
    let initialPercentage = 0;
    const entity = context.config.entity;

    const entityType = entity?.split('.')[0];

    // Early return for percentage-based sensors
    if (entityType === 'sensor' && getAttribute(context, "unit_of_measurement", entity) === "%") {
      return getState(context, entity);
    }

    switch (entityType) {
      case 'light':
        initialPercentage = 100 * getAttribute(context, "brightness", entity) / 255;
        break;

      case 'media_player':
        if (isStateOn(context, entity)) {
          // Volume is 0-1, but slider/percentage is 0-100
          initialPercentage = 100 * (getAttribute(context, "volume_level", entity) ?? 0);
        }
        break;

      case 'cover': { 
        // Covers are usually 0-100, use effective min/max
        const value = parseFloat(getAttribute(context, "current_position", entity) ?? 0);
        initialPercentage = calculateRangePercentage(value, context.sliderMinValue, context.sliderMaxValue);
        break;
      }

      case 'input_number':
      case 'number': {
        const value = parseFloat(getState(context, entity));
        initialPercentage = calculateRangePercentage(value, context.sliderMinValue, context.sliderMaxValue);
        break;
      }

      case 'fan':
        if (isStateOn(context, entity)) {
          // Fans are usually 0-100, use effective min/max
          const value = parseFloat(getAttribute(context, "percentage", entity) ?? 0);
          initialPercentage = calculateRangePercentage(value, context.sliderMinValue, context.sliderMaxValue);
        }
        break;

      case 'climate':
        if (isStateOn(context, entity)) {
          const temp = parseFloat(getAttribute(context, "temperature", entity));
          if (!isNaN(temp)) {
             initialPercentage = calculateRangePercentage(temp, context.sliderMinValue, context.sliderMaxValue);
          }
        }
        break;

      default:
        // Handle generic case using state and effective min/max
        if (context.sliderMinValue !== undefined && context.sliderMaxValue !== undefined) {
          const value = parseFloat(getState(context, entity));
           if (!isNaN(value)) {
             initialPercentage = calculateRangePercentage(value, context.sliderMinValue, context.sliderMaxValue);
           }
        }
    }
    
    // Ensure percentage is always between 0 and 100
    return Math.max(0, Math.min(100, initialPercentage));
  }

  function calculateVisualPercentage(initialPercentage) {
    return Math.max(0, Math.min(100, initialPercentage));
  }

  function updateValueDisplay(percentage) {
    if (!context.elements.rangeValue) return;
    
    const entityType = context.config.entity?.split('.')[0];
    
    switch (entityType) {
      case 'climate':
        if (isStateOn(context, context.config.entity)) {
          const minValue = context.sliderMinValue;
          const maxValue = context.sliderMaxValue;
          const climateStep = context.sliderStep;
          
          const temperature = minValue + (percentage / 100) * (maxValue - minValue);
          // Display the value adjusted to the step
          const adjustedTempValue = getAdjustedValue(temperature, climateStep);
          // Clamp display value to min/max bounds
          const clampedTempValue = Math.max(minValue, Math.min(maxValue, adjustedTempValue));
          
          const isCelcius = context._hass.config.unit_system.temperature === '°C';
          const entityState = context._hass.states[context.config.entity];
          const step = context.config.step || (entityState?.attributes.target_temp_step) || (isCelcius ? 0.5 : 1);
          const adjustedTemp = Math.round(temperature / step) * step;
          context.elements.rangeValue.innerText = clampedTempValue.toFixed(1).replace(/\.0$/, '') + (isCelcius ? '°C' : '°F');
        } else {
          // If climate is off, show a default or placeholder
          context.elements.rangeValue.innerText = context._hass.localize('state.default.off');
        }
        break;

      case 'number':
      case 'input_number':
        const minValue = context.sliderMinValue;
        const maxValue = context.sliderMaxValue;
        const step = context.sliderStep;
        const actualValue = minValue + (percentage / 100) * (maxValue - minValue);
        
        // Display the value adjusted to the step
        const adjustedValue = getAdjustedValue(actualValue, step);
        // Clamp display value to min/max bounds
        const clampedAdjustedValue = Math.max(minValue, Math.min(maxValue, adjustedValue));

        const unit = getAttribute(context, "unit_of_measurement", context.config.entity) || '';
        // Use precision from entity state if available, default to 1 decimal if not integer
        const precision = context._hass.states[context.config.entity]?.attributes?.precision ?? (Number.isInteger(clampedAdjustedValue) ? 0 : 1);
        context.elements.rangeValue.innerText = clampedAdjustedValue.toFixed(precision).replace(/\.0$/, '') + (unit ? ` ${unit}` : '');
        break;

      default:
        // For other types (like light brightness % or fan %)
        const currentMinValue = context.sliderMinValue; // Typically 0 for these unless overridden
        const currentMaxValue = context.sliderMaxValue; // Typically 100 for these unless overridden
        const currentStep = context.sliderStep; // Typically 1 for these unless overridden
        
        let displayValue = currentMinValue + (percentage / 100) * (currentMaxValue - currentMinValue);

        // Display the value adjusted to the step
        const adjustedDisplayValue = getAdjustedValue(displayValue, currentStep);
        // Clamp display value to min/max bounds
        const clampedDisplayValue = Math.max(currentMinValue, Math.min(currentMaxValue, adjustedDisplayValue));

        // Assuming percentage display for defaults like light/fan
        context.elements.rangeValue.innerText = Math.round(clampedDisplayValue) + '%';
    }
  }

  if (options.withValueDisplay) {
    context.elements.rangeValue = createElement('div', 'bubble-range-value');
    context.elements.rangeSlider.appendChild(context.elements.rangeValue);
    
    const initialPercentage = calculateInitialPercentage();
    const visualPercentage = calculateVisualPercentage(initialPercentage);
    
    if (isEntityType(context, "climate", context.config.entity)) {
      if (isStateOn(context, context.config.entity)) {
        updateValueDisplay(visualPercentage);
      } else {
        context.elements.rangeValue.innerText = '0%';
      }
      context.elements.rangeFill.style.transform = `translateX(${visualPercentage}%)`;
      context.elements.rangeValue.style.display = '';
    } else {
      updateValueDisplay(visualPercentage);
      context.elements.rangeValue.style.display = '';
      context.elements.rangeFill.style.transform = `translateX(${visualPercentage}%)`;
    }
  } else {
    const initialPercentage = calculateInitialPercentage();
    const visualPercentage = calculateVisualPercentage(initialPercentage);
    
    context.elements.rangeFill.style.transform = `translateX(${visualPercentage}%)`;
  }

  context.elements.rangeSlider.appendChild(context.elements.rangeFill);

  if (options.insertBefore && options.targetElement.contains(options.insertBefore)) {
    options.targetElement.insertBefore(context.elements.rangeSlider, options.insertBefore);
  } else {
    options.targetElement.appendChild(context.elements.rangeSlider);
  }

  if (options.targetElement) {
    options.targetElement.style.cursor = 'ew-resize';
  }

  let initialTouchX = 0;
  let initialSliderX = 0;
  let draggingTimeout = null;

  function onPointerMove(e) {
    e.stopPropagation();
    e.preventDefault();

    if (e.target.closest('.bubble-action')) return;

    window.isScrolling = true;

    const rangedPercentage = onSliderChange(context, calculateMoveX(e));

    if (isEntityType(context, "climate", context.config.entity)) {
      throttledUpdateEntity(context, rangedPercentage);
    } else if (options.sliderLiveUpdate) {
      throttledUpdateEntity(context, rangedPercentage);
    }

    updateValueDisplay(rangedPercentage);
  }

  function calculateMoveX(event) {
    const moveX = event.pageX || (event.touches ? event.touches[0].pageX : 0);

    if (!options.relativeSlide) {
      return moveX;
    }

    const offset = moveX - initialTouchX;
    return initialSliderX + offset;
  }

  function onPointerUp(e) {
    e.stopPropagation();
    e.preventDefault();
    
    if (draggingTimeout) {
      clearTimeout(draggingTimeout);
    }

    const moveX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
    const finalPercentage = onSliderChange(context, calculateMoveX(e), true);

    if (Math.abs(moveX - initialTouchX) > 5) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }

    options.targetElement.classList.remove('is-dragging');
    options.targetElement.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('touchmove', onPointerMove);
    window.removeEventListener('touchend', onPointerUp);

    if (isEntityType(context, "climate", context.config.entity) && !isStateOn(context, context.config.entity)) {
      context._hass.callService('climate', 'turn_on', {
        entity_id: context.config.entity
      }).then(() => {
        throttledUpdateEntity(context, finalPercentage);
      }).catch(error => {
        console.error('Error turning on climate entity:', error);
      });
    } else {
      throttledUpdateEntity(context, finalPercentage);
    }
    
    forwardHaptic("selection");
    updateValueDisplay(finalPercentage);

    const allElements = options.targetElement.querySelectorAll('*');
    allElements.forEach(element => {
      if (element !== context.elements.rangeFill 
          && element !== context.elements.rangeSlider 
          && options.holdToSlide 
          && !context.config.tap_to_slide
      ) {
        element.style.transition = 'opacity 0.3s ease-in-out';
        element.style.pointerEvents = null;
        element.style.opacity = null;
        
        if (context.elements.rangeValue) {
          context.elements.rangeValue.style.display = 'none';
        }
      }
    });

    draggingTimeout = setTimeout(() => {
      if (context) {
        context.dragging = false;
        window.isScrolling = false;
      }
    }, 100);
  }

  function setupRangeValueDisplay(rangedPercentage) {
    if (!context.elements.rangeValue) {
      context.elements.rangeValue = createElement('div', 'bubble-range-value');
      context.elements.rangeSlider.appendChild(context.elements.rangeValue);
      updateValueDisplay(rangedPercentage);
    }
    context.elements.rangeValue.style.display = '';
  }

  function calculateInitialX(event) {
    initialTouchX = event.pageX || (event.touches ? event.touches[0].pageX : 0);

    if (!options.relativeSlide) {
      return initialTouchX;
    }

    const initialPercentage = calculateVisualPercentage(calculateInitialPercentage());
    const sliderRect = context.elements.rangeSlider.getBoundingClientRect();
    initialSliderX = sliderRect.left + (sliderRect.width * initialPercentage / 100);
    return initialSliderX;
  }

  function handleLongPress(e) {
    options.targetElement.setPointerCapture(e.pointerId);
    
    if (context.card && context.card.classList.contains('is-unavailable')) return;

    context.dragging = true;
    window.isScrolling = true;
    initialTouchX = e.pageX || (e.touches ? e.touches[0].pageX : 0);

    let rangedPercentage = 0;
    if (isEntityType(context, "climate") && !isStateOn(context, context.config.entity)) {
      rangedPercentage = 0;
      context.elements.rangeFill.style.transform = `translateX(${rangedPercentage}%)`;
    } else {
      rangedPercentage = onSliderChange(context, calculateInitialX(e))
    }

    setupRangeValueDisplay(rangedPercentage);
    updateValueDisplay(rangedPercentage);
    if (options.sliderLiveUpdate) {
      throttledUpdateEntity(context, rangedPercentage);
    }

    options.targetElement.classList.add('slider-appear-animation');
    forwardHaptic("selection");

    const allElements = options.targetElement.querySelectorAll('*');
    allElements.forEach(element => {
      if (element !== context.elements.rangeFill && element !== context.elements.rangeSlider && element !== context.elements.rangeValue) {
        element.style.transition = 'opacity 0.3s ease-in-out';
        element.style.pointerEvents = 'none';
        element.style.opacity = '0';
        setupRangeValueDisplay(rangedPercentage);
      }
    });

    setTimeout(() => {
      options.targetElement.classList.remove('slider-appear-animation');
    }, 300);

    options.targetElement.classList.add('is-dragging');
    options.targetElement.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp, { passive: false });
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp, { passive: false });
    window.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
    }, { capture: true, once: true });
  }

  const isReadOnlyEntity = (() => {
    const entity = context.config.entity;
    if (!entity) return true;
    
    const entityType = entity?.split('.')[0];
    const supportedEntities = ['light', 'media_player', 'cover', 'input_number', 'number', 'fan', 'climate'];
    
    if (entityType === 'sensor') return true;
    
    if (!supportedEntities.includes(entityType)) return true;
    
    return false;
  })();

  if (context.config.read_only_slider || isReadOnlyEntity) return;

  if (options.holdToSlide && !options.readOnlySlider && !context.config.tap_to_slide) {
    let longPressTimer;
    const longPressDuration = 200;
    let isLongPress = false;

    options.targetElement.addEventListener('pointerdown', (e) => {
      const bubbleAction = e.target.closest('.bubble-action');
      const noSlide = e.target.closest('.bubble-sub-button')?.hasAttribute('no-slide');

      if (noSlide || (bubbleAction && bubbleAction.getAttribute('data-hold-action') !== '{"action":"none"}')) return;

      isLongPress = false;
      longPressTimer = setTimeout(() => {
        isLongPress = true;
        handleLongPress(e);
      }, longPressDuration);
    }, { passive: false });

    options.targetElement.addEventListener('pointerup', (e) => {
      clearTimeout(longPressTimer);
    });

    options.targetElement.addEventListener('pointercancel', () => {
      clearTimeout(longPressTimer);
      isLongPress = false;
    });
  } else if (!options.readOnlySlider) {
    options.targetElement.addEventListener('pointerdown', (e) => {
      const bubbleAction = e.target.closest('.bubble-action');
      const noSlide = e.target.closest('.bubble-sub-button')?.hasAttribute('no-slide');

      if (noSlide || (bubbleAction && bubbleAction.getAttribute('data-hold-action') !== '{"action":"none"}')) return;

      const subButton = e.target.closest('.bubble-sub-button');
      if (subButton) return;

      options.targetElement.setPointerCapture(e.pointerId);

      if (context.card && context.card.classList.contains('is-unavailable')) return;

      context.dragging = true;
      window.isScrolling = true;
      initialTouchX = e.pageX || (e.touches ? e.touches[0].pageX : 0);

      options.targetElement.classList.add('is-dragging');
      options.targetElement.addEventListener('pointermove', onPointerMove, { passive: false });
      window.addEventListener('pointerup', onPointerUp, { passive: false });
      window.addEventListener('touchmove', onPointerMove, { passive: false });
      window.addEventListener('touchend', onPointerUp, { passive: false });
    }, { passive: false });
  }

  const throttledUpdateEntity = throttle(updateEntity, 200);
}
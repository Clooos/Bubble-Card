import { createElement } from "../../tools/utils.js";
import { 
  throttle, 
  forwardHaptic, 
  toggleBodyScroll,
  isEntityType,
  getAttribute,
  isStateOn,
  getState
} from '../../tools/utils.js';
import { updateEntity, onSliderChange } from './changes.js';
import { defaultOptions } from './index.js';
import styles from './styles.css';

export function createSliderStructure(context, config = {}) {
  const options = { 
    ...defaultOptions,
    targetElement: context.elements.mainContainer,
    insertBefore: context.elements.cardWrapper,
    sliderLiveUpdate: context.config.slider_live_update,
    holdToSlide: false,
    readOnlySlider: false,
    styles: styles,
    ...config 
  };

  context.sliderMinValue = context.config.min_value ?? context.config.min_volume ?? 0;
  context.sliderMaxValue = context.config.max_value ?? context.config.max_volume ?? 100;

  context.elements.rangeFill = createElement('div', 'bubble-range-fill range-fill');
  context.elements.rangeSlider = createElement('div', 'bubble-range-slider range-slider');

  if (options.styles) {
    const style = createElement('style');
    style.textContent = options.styles;
    context.elements.rangeSlider.appendChild(style);
  }

  function calculateInitialPercentage() {
    let initialPercentage = 0;
    
    if (isEntityType(context, "light", context.config.entity)) {
      initialPercentage = 100 * getAttribute(context, "brightness", context.config.entity) / 255;
    } else if (isEntityType(context, "media_player", context.config.entity)) {
      if (isStateOn(context, context.config.entity)) {
        initialPercentage = 100 * getAttribute(context, "volume_level", context.config.entity);
      }
    } else if (isEntityType(context, "cover", context.config.entity)) {
      initialPercentage = getAttribute(context, "current_position", context.config.entity);
    } else if (isEntityType(context, "input_number", context.config.entity)) {
      const minValue = getAttribute(context, "min", context.config.entity);
      const maxValue = getAttribute(context, "max", context.config.entity);
      const value = getState(context, context.config.entity);
      initialPercentage = 100 * (value - minValue) / (maxValue - minValue);
    } else if (isEntityType(context, "fan", context.config.entity)) {
      if (isStateOn(context, context.config.entity)) {
        initialPercentage = getAttribute(context, "percentage", context.config.entity);
      }
    } else if (isEntityType(context, "climate", context.config.entity)) {
      if (isStateOn(context, context.config.entity)) {
        const minValue = getAttribute(context, "min_temp", context.config.entity);
        const maxValue = getAttribute(context, "max_temp", context.config.entity);
        const value = getAttribute(context, "temperature", context.config.entity);
        initialPercentage = 100 * (value - minValue) / (maxValue - minValue);
      }
    } else if (isEntityType(context, "number", context.config.entity)) {
      const minValue = getAttribute(context, "min", context.config.entity);
      const maxValue = getAttribute(context, "max", context.config.entity);
      const value = getState(context, context.config.entity);
      initialPercentage = 100 * (value - minValue) / (maxValue - minValue);
    } else if (isEntityType(context, "sensor", context.config.entity) && getAttribute(context, "unit_of_measurement", context.config.entity) === "%") {
      initialPercentage = getState(context, context.config.entity);
    } else if (context.config.min_value !== undefined && context.config.max_value !== undefined) {
      context.sliderMinValue = undefined;
      context.sliderMaxValue = undefined;
    }
    
    return initialPercentage;
  }

  function calculateVisualPercentage(initialPercentage) {
    if (context.sliderMinValue !== undefined || context.sliderMaxValue !== undefined) {
      const minValue = context.sliderMinValue !== undefined ? context.sliderMinValue : 0;
      const maxValue = context.sliderMaxValue !== undefined ? context.sliderMaxValue : 100;
      
      if (initialPercentage >= minValue && initialPercentage <= maxValue) {
        return ((initialPercentage - minValue) / (maxValue - minValue)) * 100;
      } else if (initialPercentage < minValue) {
        return 0;
      } else if (initialPercentage > maxValue) {
        return 100;
      }
    }
    return initialPercentage;
  }

  function updateValueDisplay(percentage) {
    if (!context.elements.rangeValue) return;
    
    if (isEntityType(context, "climate", context.config.entity) && isStateOn(context, context.config.entity)) {
      const minValue = getAttribute(context, "min_temp", context.config.entity);
      const maxValue = getAttribute(context, "max_temp", context.config.entity);
      const temperature = (maxValue - minValue) * percentage / 100 + minValue;
      const isCelcius = context._hass.config.unit_system.temperature === '°C';
      const step = context.config.step || getAttribute(context, "target_temp_step", context.config.entity) || (isCelcius ? 0.5 : 1);
      const adjustedTemp = Math.round(temperature / step) * step;
      context.elements.rangeValue.innerText = adjustedTemp.toFixed(1).replace(/\.0$/, '') + (isCelcius ? '°C' : '°F');
    } else {
      if (context.sliderMinValue !== undefined || context.sliderMaxValue !== undefined) {
        const minValue = context.sliderMinValue !== undefined ? context.sliderMinValue : 0;
        const maxValue = context.sliderMaxValue !== undefined ? context.sliderMaxValue : 100;
        const actualValue = minValue + (percentage / 100) * (maxValue - minValue);
        
        if (context.config.step) {
          const adjustedValue = Math.round(actualValue / context.config.step) * context.config.step;
          context.elements.rangeValue.innerText = adjustedValue.toFixed(1).replace(/\.0$/, '') + '%';
        } else {
          context.elements.rangeValue.innerText = Math.round(actualValue) + '%';
        }
      } else {
        if (context.config.step) {
          const adjustedValue = Math.round(percentage / context.config.step) * context.config.step;
          context.elements.rangeValue.innerText = adjustedValue.toFixed(1).replace(/\.0$/, '') + '%';
        } else {
          context.elements.rangeValue.innerText = Math.round(percentage) + '%';
        }
      }
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
    } else {
      updateValueDisplay(visualPercentage);
    }
    
    context.elements.rangeValue.style.display = '';
    context.elements.rangeFill.style.transform = `translateX(${visualPercentage}%)`;
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

  let initialX = 0;
  let draggingTimeout = null;

  function onPointerMove(e) {
    e.stopPropagation();
    if (e.target.closest('.bubble-action')) return;

    window.isScrolling = true;

    const moveX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
    const rangedPercentage = onSliderChange(context, moveX);

    if (options.sliderLiveUpdate) {
      throttledUpdateEntity(context, rangedPercentage);
    }

    updateValueDisplay(rangedPercentage);
  }

  function onPointerUp(e) {
    e.stopPropagation();
    clearTimeout(draggingTimeout);
    draggingTimeout = setTimeout(() => {
      context.dragging = false;
      window.isScrolling = false;

    }, 1500);

    const moveX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
    const finalPercentage = onSliderChange(context, moveX);

    if (Math.abs(moveX - initialX) > 5) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }

    if (isEntityType(context, "climate", context.config.entity) && !isStateOn(context, context.config.entity)) {
      context._hass.callService('climate', 'turn_on', {
        entity_id: context.config.entity
      });
      setTimeout(() => {
        updateEntity(context, finalPercentage);
      }, 300);
    } else {
      updateEntity(context, finalPercentage);
    }
    
    forwardHaptic("selection");

    options.targetElement.classList.remove('is-dragging');
    options.targetElement.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);

    updateValueDisplay(finalPercentage);

    const allElements = options.targetElement.querySelectorAll('*');
    allElements.forEach(element => {
      if ( element !== context.elements.rangeFill 
        && element !== context.elements.rangeSlider 
        && options.holdToSlide 
        && !context.config.tap_to_slide
      ) {
        element.style.transition = 'opacity 0.3s ease-in-out';
        element.style.pointerEvents = null;
        element.style.opacity = null;
        context.elements.rangeValue.style.display = 'none';
      }
    });
  }

  function setupRangeValueDisplay(rangedPercentage) {
    if (!context.elements.rangeValue) {
      context.elements.rangeValue = createElement('div', 'bubble-range-value');
      context.elements.rangeSlider.appendChild(context.elements.rangeValue);
      updateValueDisplay(rangedPercentage);
    }
    context.elements.rangeValue.style.display = '';
  }

  function handleLongPress(e) {
    options.targetElement.setPointerCapture(e.pointerId);
    
    if (context.card && context.card.classList.contains('is-unavailable')) return;

    context.dragging = true;
    window.isScrolling = true;
    initialX = e.pageX || (e.touches ? e.touches[0].pageX : 0);

    let rangedPercentage = 0;
    if (isEntityType(context, "climate") && !isStateOn(context, context.config.entity)) {
      rangedPercentage = 0;
      context.elements.rangeFill.style.transform = `translateX(${rangedPercentage}%)`;
    } else {
      rangedPercentage = onSliderChange(context, initialX);
    }

    setupRangeValueDisplay(rangedPercentage);
    updateValueDisplay(rangedPercentage);

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
    options.targetElement.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  }

  if (context.config.read_only_slider) return;

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
    });

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

      options.targetElement.setPointerCapture(e.pointerId);

      if (context.card && context.card.classList.contains('is-unavailable')) return;

      context.dragging = true;
      window.isScrolling = true;
      initialX = e.pageX || (e.touches ? e.touches[0].pageX : 0);

      options.targetElement.classList.add('is-dragging');
      options.targetElement.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    });
  }

  const throttledUpdateEntity = throttle(updateEntity, 200);
}
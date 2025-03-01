import { createElement } from "../../tools/utils.js";
import { 
  throttle, 
  forwardHaptic, 
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
    styles: styles,
    ...config 
  };

  context.elements.rangeFill = createElement('div', 'bubble-range-fill range-fill');
  context.elements.rangeSlider = createElement('div', 'bubble-range-slider range-slider');

  if (options.styles) {
    const style = createElement('style');
    style.textContent = options.styles;
    context.elements.rangeSlider.appendChild(style);
  }

  if (options.withValueDisplay) {
    context.elements.rangeValue = createElement('div', 'bubble-range-value');
    if (options.initialValue !== null) {
      context.elements.rangeValue.innerText = Math.round(options.initialValue) + '%';
    }
    context.elements.rangeSlider.appendChild(context.elements.rangeValue);
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

  options.targetElement.addEventListener('pointercancel', onPointerCancel);
  options.targetElement.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.bubble-action')) return;

    options.targetElement.setPointerCapture(e.pointerId);

    if (context.card && context.card.classList.contains('is-unavailable')) return;

    context.dragging = true;
    initialX = e.pageX || (e.touches ? e.touches[0].pageX : 0);

    options.targetElement.classList.add('is-dragging');
    options.targetElement.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  });

  function onPointerMove(e) {
    e.stopPropagation();
    if (e.target.closest('.bubble-action')) return;

    const moveX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
    const rangedPercentage = onSliderChange(context, moveX);

    if (options.sliderLiveUpdate) {
      throttledUpdateEntity(context, rangedPercentage);
    }

    if (options.withValueDisplay && context.elements.rangeValue) {
      context.elements.rangeValue.innerText = Math.round(rangedPercentage) + '%';
    }
  }

  function onPointerUp(e) {
    e.stopPropagation();
    clearTimeout(draggingTimeout);
    draggingTimeout = setTimeout(() => {
      context.dragging = false;
    }, 1400);

    const moveX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
    const finalPercentage = onSliderChange(context, moveX);

    updateEntity(context, finalPercentage);
    forwardHaptic("selection");

    options.targetElement.classList.remove('is-dragging');
    options.targetElement.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);

    if (options.withValueDisplay && context.elements.rangeValue) {
      context.elements.rangeValue.innerText = Math.round(finalPercentage) + '%';
    }
  }

  function onPointerCancel() {
    clearTimeout(draggingTimeout);
    context.dragging = false;

    options.targetElement.classList.remove('is-dragging');
    options.targetElement.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
  }

  const throttledUpdateEntity = throttle(updateEntity, 200);
}
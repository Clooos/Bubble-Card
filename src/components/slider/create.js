import { 
  createElement,
  isEntityType,
  isStateOn,
  forwardHaptic,
  throttle
} from '../../tools/utils.js';
import { onSliderChange, updateEntity } from './changes.js';
import { defaultOptions } from './index.js';
import styles from './styles.css';
import {
  getEntityMinValue,
  getEntityMaxValue,
  getEntityStep,
  getCurrentPercentage,
  clampPercentage,
  formatDisplayValue,
  formatDisplayValueFromEntity
} from './helpers.js';

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

  const lightSliderType = context?.config?.light_slider_type;
  const isColorMode = entityType === 'light' && ['hue', 'saturation', 'white_temp'].includes(lightSliderType);

  if (isColorMode) {
    context.elements.rangeSlider.classList.add('is-color-slider');
    context.elements.rangeSlider.classList.add(`is-color-${lightSliderType}`);
    context.elements.colorTrack = createElement('div', 'bubble-color-track');
    context.elements.colorCursor = createElement('div', 'bubble-color-cursor');
    context.elements.rangeSlider.appendChild(context.elements.colorTrack);
    context.elements.rangeSlider.appendChild(context.elements.colorCursor);

    function updateColorTrackBackground() {
      if (!context?.elements?.colorTrack) return;
      if (lightSliderType === 'hue') {
        const hs = context._hass.states[context.config.entity]?.attributes?.hs_color || [];
        const sat = Number(hs[1] ?? 100);
        const effectiveSat = sat < 10 ? 100 : sat;
        context.elements.colorTrack.style.background = `linear-gradient(90deg, hsl(0 ${effectiveSat}% 50%), hsl(60 ${effectiveSat}% 50%), hsl(120 ${effectiveSat}% 50%), hsl(180 ${effectiveSat}% 50%), hsl(240 ${effectiveSat}% 50%), hsl(300 ${effectiveSat}% 50%), hsl(360 ${effectiveSat}% 50%))`;
      } else if (lightSliderType === 'saturation') {
        const hs = context._hass.states[context.config.entity]?.attributes?.hs_color || [];
        const hue = Number(hs[0] ?? 180);
        context.elements.colorTrack.style.background = `linear-gradient(90deg, hsl(${hue} 0% 50%), hsl(${hue} 100% 50%))`;
      } else if (lightSliderType === 'white_temp') {
        // Cool (left) to Warm (right)
        context.elements.colorTrack.style.background = 'linear-gradient(90deg, #d2e7ff, #f3f7ff 35%, #fff1e0 65%, #ffb56b)';
      }
    }

    function updateColorCursorIndicator(percentage) {
      if (!context?.elements?.colorCursor) return;
      
      let currentColor = '#000000'; // Default fallback
      
      if (lightSliderType === 'hue') {
        const hs = context._hass.states[context.config.entity]?.attributes?.hs_color || [];
        const sat = Number(hs[1] ?? 100);
        const effectiveSat = sat < 10 ? 100 : sat;
        const hue = (percentage / 100) * 360;
        currentColor = `hsl(${hue}, ${effectiveSat}%, 50%)`;
      } else if (lightSliderType === 'saturation') {
        const hs = context._hass.states[context.config.entity]?.attributes?.hs_color || [];
        const hue = Number(hs[0] ?? 180);
        const saturation = percentage;
        currentColor = `hsl(${hue}, ${saturation}%, 50%)`;
      } else if (lightSliderType === 'white_temp') {
        const temp = percentage / 100;
        if (temp < 0.35) {
          currentColor = '#d2e7ff'; // Cool blue
        } else if (temp < 0.65) {
          currentColor = '#fff1e0'; // Neutral white
        } else {
          currentColor = '#ffb56b'; // Warm orange
        }
      }
      
      // Apply the color to the cursor indicator
      context.elements.colorCursor.style.setProperty('--bubble-color-cursor-indicator-color', currentColor);
    }

    updateColorTrackBackground();
    context.updateColorTrackBackground = updateColorTrackBackground;
    context.updateColorCursorIndicator = updateColorCursorIndicator;
  }

  function calculateInitialPercentage() {
    return getCurrentPercentage(context);
  }

  function calculateVisualPercentage(initialPercentage) {
    return clampPercentage(initialPercentage);
  }

  function updateValueDisplay(percentage) {
    if (!context.elements.rangeValue) return;
    
    context.elements.rangeValue.textContent = formatDisplayValue(context, percentage);
  }

  // Initialize initial visual state once
  const initialPercentage = calculateVisualPercentage(calculateInitialPercentage());
  if (options.withValueDisplay && !isColorMode) {
    context.elements.rangeValue = createElement('div', 'bubble-range-value');
    context.elements.rangeSlider.appendChild(context.elements.rangeValue);
    context.elements.rangeValue.classList.add('is-visible');
    // Use entity value for accurate initial display
    context.elements.rangeValue.textContent = formatDisplayValueFromEntity(context);
  }
  if (isColorMode && context.elements.colorCursor) {
    context.elements.colorCursor.style.left = `${initialPercentage}%`;
    // Update the cursor indicator color based on initial position
    if (typeof context.updateColorCursorIndicator === 'function') {
      context.updateColorCursorIndicator(initialPercentage);
    }
  } else {
    context.elements.rangeFill.style.transform = `translateX(${initialPercentage}%)`;
  }

  context.elements.rangeSlider.appendChild(context.elements.rangeFill);

  if (options.insertBefore && options.targetElement.contains(options.insertBefore)) {
    options.targetElement.insertBefore(context.elements.rangeSlider, options.insertBefore);
  } else {
    options.targetElement.appendChild(context.elements.rangeSlider);
  }

  if (options.targetElement) {
    options.targetElement.classList.add('slider-container');
    if (options.holdToSlide && !context.config.tap_to_slide) {
      options.targetElement.classList.add('slider-hold-focus');
    }
  }

  const listenerOptions = { passive: false };
  let initialTouchX = 0;
  let initialTouchY = 0;
  let initialSliderX = 0;
  let draggingTimeout = null;
  let isScrollIntent = false;
  const scrollThreshold = 10; // pixels threshold to determine scroll vs slider intent
  const horizontalIntentThreshold = 4; // pixels threshold to lock into horizontal sliding
  let sliderRectCache = null;
  let hasHorizontalIntent = false;
  let touchLockActive = false;

  function getSliderRect() {
    if (!sliderRectCache) {
      sliderRectCache = context.elements.rangeSlider.getBoundingClientRect();
    }
    return sliderRectCache;
  }

  function resetSliderRectCache() {
    sliderRectCache = null;
  }

  function resetGestureIntent() {
    isScrollIntent = false;
    hasHorizontalIntent = false;
  }

  function lockTouchActions() {
    if (touchLockActive) return;
    touchLockActive = true;
    options.targetElement.classList.add('is-touching');
    if (context.elements.rangeSlider) {
      context.elements.rangeSlider.classList.add('is-touching');
    }
  }

  function unlockTouchActions() {
    if (!touchLockActive) return;
    touchLockActive = false;
    options.targetElement.classList.remove('is-touching');
    if (context.elements.rangeSlider) {
      context.elements.rangeSlider.classList.remove('is-touching');
    }
  }

  // Safely get pageX from event (handles pointer, touchstart/touchmove, and touchend events)
  function getEventPageX(event) {
    if (event.pageX !== undefined) return event.pageX;
    // For touchend events, use changedTouches instead of touches
    if (event.changedTouches && event.changedTouches[0]) {
      return event.changedTouches[0].pageX;
    }
    if (event.touches && event.touches[0]) {
      return event.touches[0].pageX;
    }
    // Fallback to clientX if available
    if (event.clientX !== undefined) return event.clientX;
    return 0;
  }

  // Safely get pageY from event (handles pointer, touchstart/touchmove, and touchend events)
  function getEventPageY(event) {
    if (event.pageY !== undefined) return event.pageY;
    // For touchend events, use changedTouches instead of touches
    if (event.changedTouches && event.changedTouches[0]) {
      return event.changedTouches[0].pageY;
    }
    if (event.touches && event.touches[0]) {
      return event.touches[0].pageY;
    }
    // Fallback to clientY if available
    if (event.clientY !== undefined) return event.clientY;
    return 0;
  }

  function releasePointerCaptureSafely(event) {
    if (typeof event?.pointerId !== 'number') return;
    try {
      if (
        typeof options.targetElement.hasPointerCapture === 'function' &&
        options.targetElement.hasPointerCapture(event.pointerId)
      ) {
        options.targetElement.releasePointerCapture(event.pointerId);
      }
    } catch (_) {}
  }

  function detachPointerListeners() {
    options.targetElement.removeEventListener('pointermove', onPointerMove, listenerOptions);
    window.removeEventListener('pointermove', onPointerMove, listenerOptions);
    window.removeEventListener('pointerup', onPointerUp, listenerOptions);
    window.removeEventListener('touchmove', onPointerMove, listenerOptions);
    window.removeEventListener('touchend', onPointerUp, listenerOptions);
  }

  function attachPointerListeners() {
    options.targetElement.addEventListener('pointermove', onPointerMove, listenerOptions);
    window.addEventListener('pointermove', onPointerMove, listenerOptions);
    window.addEventListener('pointerup', onPointerUp, listenerOptions);
    window.addEventListener('touchmove', onPointerMove, listenerOptions);
    window.addEventListener('touchend', onPointerUp, listenerOptions);
  }

  // Detect if user intends to scroll vertically instead of using slider
  function detectScrollIntent(e) {
    if (hasHorizontalIntent) return false;

    const currentX = getEventPageX(e);
    const currentY = getEventPageY(e);
    
    const deltaX = Math.abs(currentX - initialTouchX);
    const deltaY = Math.abs(currentY - initialTouchY);

    if (deltaX >= horizontalIntentThreshold) {
      hasHorizontalIntent = true;
      return false;
    }
    
    // Treat as scroll only when vertical intent clearly dominates and no horizontal drag intent detected
    return deltaY > scrollThreshold && deltaX < horizontalIntentThreshold;
  }

  // Prevent conflicts with HA sidebar swipe (especially on iOS app)
  function isSidebarSwipeStart(e) {
    try {
      const path = typeof e.composedPath === 'function' ? e.composedPath() : [];
      if (path && path.some(el => el?.tagName && el.tagName.toLowerCase() === 'ha-sidebar')) {
        return true;
      }
    } catch (_) {}

    // Detect left-edge swipe gesture
    let clientX = e.clientX;
    if (clientX === undefined) {
      // For touchend events, use changedTouches instead of touches
      if (e.changedTouches && e.changedTouches[0]) {
        clientX = e.changedTouches[0].clientX;
      } else if (e.touches && e.touches[0]) {
        clientX = e.touches[0].clientX;
      } else {
        clientX = 0;
      }
    }
    const isTouch = (e.pointerType === 'touch') || !!e.touches || !!e.changedTouches;
    const NEAR_LEFT_EDGE_PX = 30;
    return isTouch && clientX <= NEAR_LEFT_EDGE_PX;
  }

  function onPointerMove(e) {
    // Check if this is scroll intent - if so, don't interfere with scrolling
    if (detectScrollIntent(e)) {
      unlockTouchActions();
      isScrollIntent = true;
      hasHorizontalIntent = false;
      releasePointerCaptureSafely(e);
      detachPointerListeners();
      options.targetElement.classList.remove('is-dragging');
      context.dragging = false;
      window.isScrolling = false;
      resetSliderRectCache();
      return;
    }

    e.stopPropagation();
    // Do not block multi-touch gestures like pinch-to-zoom
    if (!(e.touches && e.touches.length > 1) && e.cancelable) {
      e.preventDefault();
    }

    if (e.target.closest('.bubble-action')) return;

    window.isScrolling = true;

    const rangedPercentage = onSliderChange(context, calculateMoveX(e), false, getSliderRect());

    if (isColorMode && context.elements.colorCursor) {
      context.elements.colorCursor.style.left = `${rangedPercentage}%`;
      if (lightSliderType === 'saturation' && typeof context.updateColorTrackBackground === 'function') {
        context.updateColorTrackBackground();
      }
      // Update the cursor indicator color based on current position
      if (typeof context.updateColorCursorIndicator === 'function') {
        context.updateColorCursorIndicator(rangedPercentage);
      }
    }

    if (options.sliderLiveUpdate) {
      throttledUpdateEntity(context, rangedPercentage);
    }

    updateValueDisplay(rangedPercentage);
  }

  function calculateMoveX(event) {
    const moveX = getEventPageX(event);

    if (!options.relativeSlide) {
      return moveX;
    }

    const offset = moveX - initialTouchX;
    return initialSliderX + offset;
  }

  function onPointerUp(e) {
    // If scroll intent was detected, don't process slider logic
    if (isScrollIntent) {
      unlockTouchActions();
      resetGestureIntent();
      resetSliderRectCache();
      return;
    }

    e.stopPropagation();
    if (!(e.touches && e.touches.length > 1)) {
      e.preventDefault();
    }
    releasePointerCaptureSafely(e);
    
    if (draggingTimeout) {
      clearTimeout(draggingTimeout);
    }

    const moveX = getEventPageX(e);
    const finalPercentage = onSliderChange(context, calculateMoveX(e), true, getSliderRect());

    if (Math.abs(moveX - initialTouchX) > 5) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }

    options.targetElement.classList.remove('is-dragging');
    detachPointerListeners();
    resetGestureIntent();
    resetSliderRectCache();
    unlockTouchActions();

    if (isColorMode && context.elements.colorCursor) {
      context.elements.colorCursor.style.left = `${finalPercentage}%`;
      // Update the cursor indicator color based on final position
      if (typeof context.updateColorCursorIndicator === 'function') {
        context.updateColorCursorIndicator(finalPercentage);
      }
    }

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

    if (options.holdToSlide && !context.config.tap_to_slide) {
      if (context.elements.rangeValue && !options.persistentValueDisplay) {
        context.elements.rangeValue.classList.remove('is-visible');
      }
    }

    draggingTimeout = setTimeout(() => {
      if (context) {
        context.dragging = false;
        window.isScrolling = false;
      }
    }, 100);
  }

  function setupRangeValueDisplay(rangedPercentage) {
    if (isColorMode) return; // Do not display value for color sliders
    if (!context.elements.rangeValue) {
      context.elements.rangeValue = createElement('div', 'bubble-range-value');
      context.elements.rangeSlider.appendChild(context.elements.rangeValue);
      updateValueDisplay(rangedPercentage);
    }
    context.elements.rangeValue.classList.add('is-visible');
  }

  function calculateInitialX(event) {
    initialTouchX = getEventPageX(event);
    initialTouchY = getEventPageY(event);
    resetGestureIntent();

    if (!options.relativeSlide) {
      return initialTouchX;
    }

    const initialPercentage = calculateVisualPercentage(calculateInitialPercentage());
    const sliderRect = getSliderRect();
    initialSliderX = sliderRect.left + (sliderRect.width * initialPercentage / 100);
    return initialSliderX;
  }

  function handleLongPress(e) {
    if (isSidebarSwipeStart(e)) {
      unlockTouchActions();
      return;
    }
    // Some browsers (older iOS Safari) may throw here; fail gracefully
    try { options.targetElement.setPointerCapture(e.pointerId); } catch (_) {}
    
    if (context.card && context.card.classList.contains('is-unavailable')) {
      unlockTouchActions();
      return;
    }

    context.dragging = true;
    window.isScrolling = true;
    initialTouchX = getEventPageX(e);
    initialTouchY = getEventPageY(e);
    resetGestureIntent();
    resetSliderRectCache();

    let rangedPercentage = 0;
    if (isEntityType(context, "climate") && !isStateOn(context, context.config.entity)) {
      rangedPercentage = 0;
      if (isColorMode && context.elements.colorCursor) {
        context.elements.colorCursor.style.transform = `translateX(${rangedPercentage}%)`;
        // Update the cursor indicator color based on position
        if (typeof context.updateColorCursorIndicator === 'function') {
          context.updateColorCursorIndicator(rangedPercentage);
        }
      } else {
        context.elements.rangeFill.style.transform = `translateX(${rangedPercentage}%)`;
      }
    } else {
      rangedPercentage = onSliderChange(context, calculateInitialX(e), false, getSliderRect());
    }

    setupRangeValueDisplay(rangedPercentage);
    updateValueDisplay(rangedPercentage);
    if (options.sliderLiveUpdate) {
      throttledUpdateEntity(context, rangedPercentage);
    }

    options.targetElement.classList.add('slider-appear-animation');
    forwardHaptic("selection");

    setTimeout(() => {
      options.targetElement.classList.remove('slider-appear-animation');
    }, 300);

    options.targetElement.classList.add('is-dragging');
    attachPointerListeners();
    // Swallow only the immediate click on the slider itself (avoid global suppression)
    options.targetElement.addEventListener('click', (e) => {
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
    const immediateDragThreshold = 6;
    let preDragMoveHandler = null;
    let preDragCancelHandler = null;
    let dragInitiated = false;

    const clearPreDragHandlers = () => {
      if (preDragMoveHandler) {
        options.targetElement.removeEventListener('pointermove', preDragMoveHandler);
        preDragMoveHandler = null;
      }
      if (preDragCancelHandler) {
        options.targetElement.removeEventListener('pointerup', preDragCancelHandler);
        options.targetElement.removeEventListener('pointercancel', preDragCancelHandler);
        preDragCancelHandler = null;
      }
    };

    const startDrag = (eventToUse) => {
      if (dragInitiated) return;
      dragInitiated = true;
      clearTimeout(longPressTimer);
      clearPreDragHandlers();
      lockTouchActions();
      handleLongPress(eventToUse);
    };

    options.targetElement.addEventListener('pointerdown', (e) => {
      if (isSidebarSwipeStart(e)) return;
      const bubbleAction = e.target.closest('.bubble-action');
      const noSlide = e.target.closest('.bubble-sub-button')?.hasAttribute('no-slide');

      if (noSlide || (bubbleAction && bubbleAction.getAttribute('data-hold-action') !== '{"action":"none"}')) return;

      dragInitiated = false;
      clearTimeout(longPressTimer);
      clearPreDragHandlers();
      if (context.card && context.card.classList.contains('is-unavailable')) return;
      lockTouchActions();

      initialTouchX = getEventPageX(e);
      initialTouchY = getEventPageY(e);
      resetGestureIntent();

      const detectImmediateDrag = (moveEvent) => {
        const currentX = getEventPageX(moveEvent);
        const currentY = getEventPageY(moveEvent);
        const deltaX = Math.abs(currentX - initialTouchX);
        const deltaY = Math.abs(currentY - initialTouchY);
        if (deltaY > scrollThreshold && deltaX < horizontalIntentThreshold) {
          isScrollIntent = true;
          cancelPreDrag();
          return;
        }
        if (deltaX > immediateDragThreshold && deltaX >= deltaY) {
          startDrag(moveEvent);
        }
      };

      const cancelPreDrag = () => {
        clearTimeout(longPressTimer);
        clearPreDragHandlers();
        unlockTouchActions();
      };

      preDragMoveHandler = detectImmediateDrag;
      preDragCancelHandler = cancelPreDrag;

      options.targetElement.addEventListener('pointermove', detectImmediateDrag, { passive: false });
      options.targetElement.addEventListener('pointerup', cancelPreDrag);
      options.targetElement.addEventListener('pointercancel', cancelPreDrag);

      longPressTimer = setTimeout(() => startDrag(e), longPressDuration);
    }, { passive: false });

    options.targetElement.addEventListener('pointerup', () => {
      clearTimeout(longPressTimer);
      clearPreDragHandlers();
      unlockTouchActions();
    });

    options.targetElement.addEventListener('pointercancel', () => {
      clearTimeout(longPressTimer);
      clearPreDragHandlers();
      unlockTouchActions();
    });
  } else if (!options.readOnlySlider) {
    options.targetElement.addEventListener('pointerdown', (e) => {
      if (isSidebarSwipeStart(e)) return;
      // When tap_to_slide is true, block starting a slide from the icon or sub-buttons only
      const isOnIcon = !!e.target.closest('.bubble-main-icon-container');
      const subButton = e.target.closest('.bubble-sub-button');
      const noSlide = subButton?.hasAttribute('no-slide');
      if (isOnIcon || subButton || noSlide) return;

      // Some browsers (older iOS Safari) may throw here; fail gracefully
      try { options.targetElement.setPointerCapture(e.pointerId); } catch (_) {}

      if (context.card && context.card.classList.contains('is-unavailable')) return;

      context.dragging = true;
      window.isScrolling = true;
      lockTouchActions();
      initialTouchX = getEventPageX(e);
      initialTouchY = getEventPageY(e);
      resetGestureIntent();
      resetSliderRectCache();
      if (options.relativeSlide) {
        const initialPercentage = calculateVisualPercentage(calculateInitialPercentage());
        const sliderRect = getSliderRect();
        initialSliderX = sliderRect.left + (sliderRect.width * initialPercentage / 100);
      } else {
        getSliderRect();
      }

      options.targetElement.classList.add('is-dragging');
      attachPointerListeners();
    }, listenerOptions);
  }

  const throttledUpdateEntity = throttle(updateEntity, 200);
}
import { getButtonType } from "./helpers.js";
import {
  getState,
  isStateOn,
  isStateRequiringAttention,
  isEntityType,
  setLayout,
  getStateSurfaceColor
} from '../../tools/utils.js';
import { getIconColor } from '../../tools/icon.js';
import { updateSlider } from '../../components/slider/changes.js';
import { handleCustomStyles } from '../../tools/style-processor.js';

// Track color change timing per context to optimize Safari transitions
const colorChangeTimers = new WeakMap();

function applyColorChange(context, newButtonColor, newOpacity, cardType) {
  const background = context.elements?.background;
  if (!background) return;

  const target = cardType === 'button' ? context.card : context.popUp;
  if (!target) return;

  // Apply the color change
  target.style.setProperty('--bubble-button-background-color', newButtonColor);
  background.style.opacity = newOpacity;
}

export function changeButton(context) {
  const cardType = context.config.card_type;
  const buttonType = getButtonType(context);
  const isLight = isEntityType(context, "light");
  const isOn = isStateOn(context);
  const requiresAttention = isStateRequiringAttention(context);
  const lightColor = getIconColor(context);

  const currentButtonColor = cardType === 'button'
    ? context.card.style.getPropertyValue('--bubble-button-background-color')
    : context.popUp.style.getPropertyValue('--bubble-button-background-color');
  const currentOpacity = context.elements.background?.style.opacity;

  let newButtonColor = '';
  let newOpacity = '';

  const useAccentColor = context.config.use_accent_color;

  if (buttonType === 'switch' && isOn) {
    if (requiresAttention) {
      newButtonColor = 'var(--red-color, var(--error-color))';
      newOpacity = '1';
    } else if (lightColor && isLight && !useAccentColor) {
      newButtonColor = getStateSurfaceColor(context, context.config.entity, true, null, null);
      newOpacity = '.7';
    } else {
      newButtonColor = 'var(--bubble-button-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))';
      newOpacity = '1';
    }
  } else {
    newButtonColor = 'rgba(0, 0, 0, 0)';
    newOpacity = '.5';
  }

  if (buttonType === 'slider') {
    // All slider logic (including style updates) is handled in slider/changes.js
    updateSlider(context);
  }

  // Only update if color or opacity changed
  if (currentButtonColor !== newButtonColor || currentOpacity !== newOpacity) {
    applyColorChange(context, newButtonColor, newOpacity, cardType);
  }

  // Background entity logic - live camera stream support
  if (context.config.background_entity && context._hass && context._hass.states) {
    const backgroundEntity = context.config.background_entity;
    const stateObj = context._hass.states[backgroundEntity];
    const entityPicture = stateObj ? stateObj.attributes.entity_picture : '';

    // Create or update background image element
    if (!context.elements.backgroundImage) {
      const bgImg = document.createElement('img');
      bgImg.className = 'bubble-background-image';
      bgImg.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: 0;
        pointer-events: none;
      `;
      context.elements.mainContainer.insertBefore(bgImg, context.elements.mainContainer.firstChild);
      context.elements.backgroundImage = bgImg;

      // Make the container background transparent to show the image
      context.elements.mainContainer.style.setProperty('background-color', 'transparent', 'important');

      // Hide slider fill/progress to show background clearly
      const rangeFill = context.elements.rangeFill || context.shadowRoot?.querySelector('.bubble-range-fill');
      const rangeSlider = context.elements.rangeSlider || context.shadowRoot?.querySelector('.bubble-range-slider');
      if (rangeFill) {
        rangeFill.style.setProperty('opacity', '0', 'important');
        rangeFill.style.setProperty('transition', 'opacity 0.2s ease', 'important');

        // Show slider fill only when actively sliding
        const showFill = () => {
          rangeFill.style.setProperty('opacity', '1', 'important');
        };
        const hideFill = () => {
          rangeFill.style.setProperty('opacity', '0', 'important');
        };

        // Add event listeners if not already added
        if (!context._sliderEventsAdded) {
          const sliderInput = context.shadowRoot?.querySelector('input[type="range"]');
          if (sliderInput) {
            sliderInput.addEventListener('pointerdown', showFill);
            sliderInput.addEventListener('pointerup', hideFill);
            sliderInput.addEventListener('pointercancel', hideFill);
            sliderInput.addEventListener('touchstart', showFill);
            sliderInput.addEventListener('touchend', hideFill);
            sliderInput.addEventListener('mousedown', showFill);
            sliderInput.addEventListener('mouseup', hideFill);
            context._sliderEventsAdded = true;
          }
        }
      }
      if (rangeSlider) {
        rangeSlider.style.setProperty('background', 'transparent', 'important');
      }

      // For camera entities, set up continuous refresh
      if (backgroundEntity.startsWith('camera.')) {
        context._backgroundRefreshInterval = setInterval(() => {
          const currentState = context._hass?.states?.[backgroundEntity];
          const currentPicture = currentState?.attributes?.entity_picture;
          if (currentPicture && context.elements.backgroundImage) {
            // Force reload by adding timestamp to bust cache
            const url = new URL(currentPicture, window.location.origin);
            url.searchParams.set('_t', Date.now());
            context.elements.backgroundImage.src = url.toString();
          }
        }, 1000); // Refresh every second for live stream effect
      }
    }

    // Update image source if entity picture changed
    if (context._previousBackgroundPicture !== entityPicture) {
      context._previousBackgroundPicture = entityPicture;

      if (entityPicture) {
        // For cameras, add cache-busting timestamp
        if (backgroundEntity.startsWith('camera.')) {
          const url = new URL(entityPicture, window.location.origin);
          url.searchParams.set('_t', Date.now());
          context.elements.backgroundImage.src = url.toString();
        } else {
          context.elements.backgroundImage.src = entityPicture;
        }
        context.elements.backgroundImage.style.display = '';
      } else {
        context.elements.backgroundImage.src = '';
        context.elements.backgroundImage.style.display = 'none';
      }
    }
  } else {
    // Remove background image element if config is removed
    if (context.elements.backgroundImage) {
      context.elements.backgroundImage.remove();
      context.elements.backgroundImage = null;
      context._previousBackgroundPicture = undefined;

      // Clear the interval
      if (context._backgroundRefreshInterval) {
        clearInterval(context._backgroundRefreshInterval);
        context._backgroundRefreshInterval = null;
      }

      // Restore original background
      context.elements.mainContainer.style.removeProperty('background-color');
    }
  }
}

export function changeStatus(context) {
  const state = getState(context);
  const cardType = context.config.card_type;

  if (state === 'unavailable') {
    if (cardType === 'button') {
      context.card.classList.add('is-unavailable');
    } else if (cardType === 'pop-up') {
      context.elements.headerContainer.classList.add('is-unavailable');
    }
  } else {
    if (cardType === 'button') {
      context.card.classList.remove('is-unavailable');
    } else if (cardType === 'pop-up') {
      context.elements.headerContainer.classList.remove('is-unavailable');
    }
  }
}

export function changeStyle(context) {
  setLayout(context);
  handleCustomStyles(context);
}
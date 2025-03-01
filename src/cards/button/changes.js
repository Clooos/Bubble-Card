import { getButtonType } from "./helpers.js";
import { 
  getState,
  isStateOn,
  isEntityType,
  setLayout
} from '../../tools/utils.js';
import { getIconColor } from '../../tools/icon.js';
import { updateSlider } from '../../components/slider/changes.js';
import { handleCustomStyles } from '../../tools/style-processor.js';

export function changeButton(context) {
  const cardType = context.config.card_type;
  const buttonType = getButtonType(context);
  const isLight = isEntityType(context, "light");
  const isOn = isStateOn(context);
  const lightColor = getIconColor(context);

  const currentButtonColor = cardType === 'button'
      ? context.card.style.getPropertyValue('--bubble-button-background-color')
      : context.popUp.style.getPropertyValue('--bubble-button-background-color');
  const currentOpacity = context.elements.background.style.opacity;

  let newButtonColor = '';
  let newOpacity = '';

  if (buttonType === 'switch' && isOn) {
    const useAccentColor = context.config.use_accent_color;

    if (lightColor && isLight && !useAccentColor) {
      newButtonColor = getIconColor(context);
      newOpacity = '.5';
    } else {
      newButtonColor = 'var(--bubble-button-accent-color, var(--bubble-accent-color, var(--accent-color)))';
      newOpacity = '1';
    }
  } else {
    newButtonColor = 'rgba(0, 0, 0, 0)';
    newOpacity = '.5';
  }

  if (currentButtonColor !== newButtonColor) {
    if (cardType === 'button') {
      context.card.style.setProperty('--bubble-button-background-color', newButtonColor);
    } else if (cardType === 'pop-up') {
      context.popUp.style.setProperty('--bubble-button-background-color', newButtonColor);
    }
  }

  if (currentOpacity !== newOpacity) {
    context.elements.background.style.opacity = newOpacity;
  }
}

export function changeSlider(context) {
  const buttonType = getButtonType(context);

  if (buttonType === 'slider') {
    context.elements.rangeFill.style.backgroundColor = getIconColor(context);

    updateSlider(context);
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
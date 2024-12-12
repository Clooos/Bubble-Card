import { getButtonType } from "./helpers.ts";
import { initializesubButtonIcon } from '../../tools/global-changes.ts';
import { 
  applyScrollingEffect,
  getIcon,
  getIconColor,
  getImage,
  getName,
  getState,
  getAttribute,
  isStateOn,
  isEntityType,
  getWeatherIcon,
  setLayout
} from '../../tools/utils.ts';

export function changeButton(context) {
  const cardType = context.config.card_type;
  const buttonType = getButtonType(context);
  const isLight = isEntityType(context, "light");
  const isOn = isStateOn(context);
  const lightColor = getIconColor(context);

  const currentButtonColor = cardType === 'button'
      ? context.card.style.getPropertyValue('--bubble-button-background-color')
      : context.popUp.style.getPropertyValue('--bubble-button-background-color');
  const currentOpacity = context.elements.buttonBackground.style.opacity;

  let newButtonColor = '';
  let newOpacity = '';

  if (buttonType === 'switch' && isOn) {
    if (lightColor && isLight) {
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
    context.elements.buttonBackground.style.opacity = newOpacity;
  }
}

export function changeIcon(context) {
  const buttonType = getButtonType(context);
  const isOn = buttonType !== 'name' ? isStateOn(context) : false;
  const newIcon = buttonType !== 'name' ? getIcon(context) : context.config.icon;
  const newImage = buttonType !== 'name' ? getImage(context) : '';
  const isLight = buttonType !== 'name' ? isEntityType(context, "light") : false;

  const currentIconColor = context.elements.iconContainer.style.color;
  const currentImage = context.elements.image.style.backgroundImage;
  const currentIcon = context.elements.icon.icon;
  const currentIconDisplay = context.elements.icon.style.display;
  const currentImageDisplay = context.elements.image.style.display;

  if (isLight && isOn) {
    const newIconColor = `var(--bubble-icon-background-color, ${getIconColor(context)})`;
    if (currentIconColor !== newIconColor) {
      context.elements.iconContainer.style.color = newIconColor;
    }
  } else {
    if (currentIconColor !== '') {
      context.elements.iconContainer.style.color = '';
    }
  }

  if (newImage !== '') {
    const newBackgroundImage = 'url(' + newImage + ')';
    if (currentImage !== newBackgroundImage) {
      context.elements.image.style.backgroundImage = newBackgroundImage;
    }
    if (currentIconDisplay !== 'none') {
      context.elements.icon.style.display = 'none';
    }
    if (currentImageDisplay !== '') {
      context.elements.image.style.display = '';
    }
  } else if (newIcon !== '') {
    if (currentIcon !== newIcon) {
      context.elements.icon.icon = newIcon;
    }
    const newIconColor = isOn && buttonType !== 'state' ? getIconColor(context) : 'inherit';
    if (context.elements.icon.style.color !== newIconColor) {
      context.elements.icon.style.color = newIconColor;
    }
    if (currentIconDisplay !== '') {
      context.elements.icon.style.display = '';
    }
    if (currentImageDisplay !== 'none') {
      context.elements.image.style.display = 'none';
    }
  } else {
    if (currentIconDisplay !== 'none') {
      context.elements.icon.style.display = 'none';
    }
    if (currentImageDisplay !== 'none') {
      context.elements.image.style.display = 'none';
    }
  }
}

export function changeName(context) {
  if (context.config.styles?.includes("card.querySelector('.bubble-name').innerText")) return;
  const buttonType = getButtonType(context);
  const name = buttonType !== 'name' ? getName(context) : context.config.name;
  if (name !== context.elements.previousName) {
      applyScrollingEffect(context, context.elements.name, name);
      context.elements.previousName = name;
  }
}

export function changeSlider(context) {
  const buttonType = getButtonType(context);

  if (buttonType === 'slider') {
    context.elements.rangeFill.style.backgroundColor = getIconColor(context);

    if (context.dragging) return;

    let percentage = 0;

    if (isEntityType(context, "light")) {
      percentage = 100 * getAttribute(context, "brightness") / 255;
    } else if (isEntityType(context, "media_player")) {
      if (isStateOn(context)) {
        percentage = 100 * getAttribute(context, "volume_level");
      } else {
        percentage = 0;
      }
    } else if (isEntityType(context, "cover")) {
      percentage = getAttribute(context, "current_position");
    } else if (isEntityType(context, "input_number")) {
      const minValue = getAttribute(context, "min");
      const maxValue = getAttribute(context, "max");
      const value = getState(context);
      percentage = 100 * (value - minValue) / (maxValue - minValue);
    } else if (isEntityType(context, "fan")) {
      if (isStateOn(context)) {
        percentage = getAttribute(context, "percentage");
      } else {
        percentage = 0;
      }
    } else if (isEntityType(context, "climate")) {
      const minValue = getAttribute(context, "min_temp");
      const maxValue = getAttribute(context, "max_temp");
      const value = getAttribute(context, "temperature");
      percentage = 100 * (value - minValue) / (maxValue - minValue);
    } else if (isEntityType(context, "number")) {
      const minValue = getAttribute(context, "min");
      const maxValue = getAttribute(context, "max");
      const value = getState(context);
      percentage = 100 * (value - minValue) / (maxValue - minValue);
    }

    context.elements.rangeFill.style.transform = `translateX(${percentage}%)`;
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

  if (isStateOn(context)) {
      if (cardType === 'button') {
          context.card.classList.add('is-on');
      } else if (cardType === 'pop-up') {
          context.elements.headerContainer.classList.add('is-on');
      }
  } else {
      if (cardType === 'button') {
          context.card.classList.remove('is-on');
      } else if (cardType === 'pop-up') {
          context.elements.headerContainer.classList.remove('is-on');
      }
  }
}

export function changeStyle(context) {
    initializesubButtonIcon(context);
    setLayout(context);

    if (!context.config.styles) return;

    const state = getState(context);

    let customStyle = '';

    try {
        customStyle = context.config.styles
            ? Function('hass', 'entity', 'state', 'icon', 'subButtonIcon', 'getWeatherIcon', 'card', 'name', `return \`${context.config.styles}\`;`)
              (context._hass, context.config.entity, state, context.elements.icon, context.subButtonIcon, getWeatherIcon, context.card, context.card.name)
            : '';
    } catch (error) {
        throw new Error(`Error in generating button custom templates: ${error.message}`);
    }

    if (context.elements.customStyle) {
        context.elements.customStyle.innerText = customStyle;
    }
}

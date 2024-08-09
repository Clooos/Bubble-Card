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

  if (buttonType === 'switch' && isOn) {
      if (lightColor && isLight) {
          if (cardType === 'button') {
              context.card.style.setProperty('--bubble-button-background-color', getIconColor(context));
          } else if (cardType === 'pop-up') {
              context.popUp.style.setProperty('--bubble-button-background-color', getIconColor(context));
          }
          context.elements.buttonBackground.style.opacity = '.5';
      } else {
          if (cardType === 'button') {
              context.card.style.setProperty('--bubble-button-background-color', 'var(--accent-color)');
          } else if (cardType === 'pop-up') {
              context.popUp.style.setProperty('--bubble-button-background-color', 'var(--accent-color)');
          }
          context.elements.buttonBackground.style.opacity = '1';
      }
  } else {
      if (cardType === 'button') {
          context.card.style.setProperty('--bubble-button-background-color', 'rgba(0, 0, 0, 0)');
      } else if (cardType === 'pop-up') {
          context.popUp.style.setProperty('--bubble-button-background-color', 'rgba(0, 0, 0, 0)');
      }
      context.elements.buttonBackground.style.opacity = '.5';
  }
}
export function changeIcon(context) {
  const buttonType = getButtonType(context);
  const isOn = buttonType !== 'name' ? isStateOn(context) : false;
  const icon = buttonType !== 'name' ? getIcon(context) : context.config.icon;
  const image = buttonType !== 'name' ? getImage(context) : '';
  const isLight = buttonType !== 'name' ? isEntityType(context, "light") : false;

  if (isLight && isOn) {
      context.elements.iconContainer.style.color = getIconColor(context);
  } else {
      context.elements.iconContainer.style.color = '';
  }

  if (image !== '') {
      context.elements.image.style.backgroundImage = 'url(' + image + ')';
      context.elements.icon.style.display = 'none';
      context.elements.image.style.display = '';
  } else if (icon !== '') {
      context.elements.icon.icon = icon;
      context.elements.icon.style.color = isOn && buttonType !== 'state' ? getIconColor(context) : 'inherit';
      context.elements.icon.style.display = '';
      context.elements.image.style.display = 'none';
  } else {
      context.elements.icon.style.display = 'none';
      context.elements.image.style.display = 'none';
  }
}
export function changeName(context) {
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

    //if (context.dragging) return;

    let percentage = 0;

    if (isEntityType(context, "light")) {
      percentage = 100 * getAttribute(context, "brightness") / 255;
    } else if (isEntityType(context, "media_player")) {
      percentage = 100 * getAttribute(context, "volume_level");
    } else if (isEntityType(context, "cover")) {
      percentage = getAttribute(context, "current_position");
    } else if (isEntityType(context, "input_number")) {
      const minValue = getAttribute(context, "min");
      const maxValue = getAttribute(context, "max");
      const value = getState(context);
      percentage = 100 * (value - minValue) / (maxValue - minValue);
    } else if (isEntityType(context, "fan")) {
      percentage = getAttribute(context, "percentage");
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

  if (isEntityType(context, "light")) {
      if (cardType === 'button') {
          context.card.classList.add('is-light');
      } else if (cardType === 'pop-up') {
          context.elements.headerContainer.classList.add('is-light');
      }
  } else {
      if (cardType === 'button') {
          context.card.classList.remove('is-light');
      } else if (cardType === 'pop-up') {
          context.elements.headerContainer.classList.remove('is-light');
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

    const state = getState(context);

    let customStyle = '';

    try {
        customStyle = context.config.styles
            ? Function('hass', 'entity', 'state', 'icon', 'subButtonIcon', 'getWeatherIcon', 'card', `return \`${context.config.styles}\`;`)
              (context._hass, context.config.entity, state, context.elements.icon, context.subButtonIcon, getWeatherIcon, context.card)
            : '';
    } catch (error) {
        throw new Error(`Error in generating button custom templates: ${error.message}`);
    }

    if (context.elements.customStyle) {
        context.elements.customStyle.innerText = customStyle;
    }
}

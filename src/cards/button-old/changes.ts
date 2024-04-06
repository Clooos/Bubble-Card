import { getButtonType } from "./helpers.ts";
import { 
  applyScrollingEffect,
  getIcon,
  getIconColor,
  getImage,
  getName,
  getState,
  getAttribute,
  isStateOn,
  isEntityType
} from '../../tools/utils.ts';

export function changeButton(context, container = context.elements) {
  const buttonType = getButtonType(context);
  const isOn = isStateOn(context);

  console.log("From change button", container)

  if ((buttonType ==='switch' || buttonType === 'custom') && isOn) {
      container.buttonCard.style.backgroundColor = 'var(--accent-color)';
  } else {
      container.buttonCard.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
}
export function changeIcon(context, container = context.elements) {
  const isOn = isStateOn(context);
  const icon = getIcon(context);
  const image = getImage(context);

  if (isEntityType(context, "light") && isOn) {
      container.iconContainer.style.color = getIconColor(context);
  } else {
      context.elements.iconContainer.style.color = '';
  }

  if (image !== '') {
      container.image.style.backgroundImage = 'url(' + image + ')';
      container.icon.style.display = 'none';
      container.image.style.display = '';
  } else if (icon !== '') {
      container.icon.icon = icon;
      container.icon.style.color = isOn ? getIconColor(context) : 'inherit';
      container.icon.style.display = '';
      container.image.style.display = 'none';
  } else {
      container.icon.style.display = 'none';
      container.image.style.display = 'none';
  }
}
export function changeName(context, container = context.elements) {
  const name = getName(context);
  if (name !== container.previousName) {
    console.log("From name", container)
      container.name.innerText = name;
      applyScrollingEffect(context.elements.name, name);
      container.previousName = name;
  }
}
export function changeSlider(context, container = context.elements) {
  const buttonType = getButtonType(context);

  if (buttonType === 'slider') {
    container.rangeFill.style.backgroundColor = getIconColor(context);

    if (context.dragging) return;

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
    }

    container.rangeFill.style.transform = `translateX(${percentage}%)`;
  }
}

export function changeStatus(context, container = context.card) {
  const state = getState(context);

  if (state === 'unavailable') {
      container.classList.add('is-unavailable');
  } else {
      container.classList.remove('is-unavailable');
  }

  if (isEntityType(context, "light")) {
      container.classList.add('is-light');
  } else {
      container.classList.remove('is-light');
  }

  if (isStateOn(context)) {
      container.classList.add('is-on');
  } else {
      container.classList.remove('is-on');
  }
}
export function changeStyle(context, container = context.elements) {
  const state = getState(context);

  const customStyle = context.config.styles
      ? Function('hass', 'entityId', 'state', 'return `' + context.config.styles + '`;')(context._hass, context.config.entity, state)
      : '';

  container.customStyle.innerText = customStyle;
}
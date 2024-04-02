import { getButtonType, isLight, isMediaPlayer } from "./helpers.ts";
import { 
  getBrightness,
  getIcon,
  getIconColor,
  getImage,
  getName,
  getState,
  getVolume,
  isStateOn,
} from '../../tools/utils.ts';

export function changeButton(context) {
  const buttonType = getButtonType(context);
  const isOn = isStateOn(context);

  if ((buttonType ==='switch' || buttonType === 'custom') && isOn) {
      context.elements.buttonCard.style.backgroundColor = 'var(--accent-color)';
  } else {
      context.elements.buttonCard.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
}
export function changeIcon(context) {
  const buttonType = getButtonType(context);
  const isOn = isStateOn(context);
  const icon = getIcon(context);
  const image = getImage(context);

  if (isLight(context) && isOn && buttonType !== 'state') {
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
  const name = getName(context);
  if (name !== context.elements.name.innerText) {
      context.elements.name.innerText = name;
  }
}
export function changeSlider(context) {
  const buttonType = getButtonType(context);

  if (buttonType === 'slider') {
      context.elements.rangeFill.style.backgroundColor = getIconColor(context);

      if (isLight(context) && context.dragging === false) {
          const percentage = 100 * getBrightness(context) / 255;
          context.elements.rangeFill.style.transform =`translateX(${percentage}%)`;
      } else if (isMediaPlayer(context) && context.dragging === false) {
          const percentage = 100 * getVolume(context);
          context.elements.rangeFill.style.transform =`translateX(${percentage}%)`;
      }
  }
}
export function changeState(context) {
  const buttonType = getButtonType(context);
  const defaultShowState = buttonType === 'state' ? true : false;
  const showState = context.config.show_state ?? defaultShowState;

  const state = context._hass.states[context.config.entity];
  const formattedState = state ? context._hass.formatEntityState(state) : '';
  if (showState === false) {
      context.elements.state.style.display = 'none';
  } else {
      context.elements.state.style.display = '';
      if (formattedState !== context.elements.state.innerText) {
        context.elements.state.innerText = formattedState;
      }
  }
}
export function changeStatus(context) {
  const state = getState(context);

  if (state === 'unavailable') {
      context.card.classList.add('is-unavailable');
  } else {
      context.card.classList.remove('is-unavailable');
  }

  if (isLight(context)) {
      context.card.classList.add('is-light');
  } else {
      context.card.classList.remove('is-light');
  }

  if (isStateOn(context)) {
      context.card.classList.add('is-on');
  } else {
      context.card.classList.remove('is-on');
  }
}
export function changeStyle(context) {
  const state = getState(context);

  const customStyle = context.config.styles
      ? Function('hass', 'entityId', 'state', 'return `' + context.config.styles + '`;')(context._hass, context.config.entity, state)
      : '';

  context.elements.customStyle.innerText = customStyle;
}
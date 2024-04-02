import { isColorCloseToWhite } from "../../tools/style.ts";
import { getIcon, getIconColor, getImage, getName, getState, isStateOn } from "../../tools/utils.ts";
import { isLight } from "../button/helpers.ts";
import { getBackdrop } from "./create.ts";
import { addHash, onEditorChange, removeHash } from "./helpers.ts";

export function changeEditor(context) {
  const detectedEditor = context.verticalStack.host.closest('hui-card-preview');

  if (context.editor || detectedEditor !== null) {
    context.popUp.classList.add('editor');
  } else {
    context.popUp.classList.remove('editor');
  }
  onEditorChange(context);
}
export function changeIcon(context) {
  const isOn = isStateOn(context);
  const icon = getIcon(context);
  const image = getImage(context);

  if (isLight(context) && isOn) {
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
      context.elements.icon.style.color = isOn ? getIconColor(context) : 'inherit';
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
export function changeState(context) {
  const state = context._hass.states[context.config.state];
  const formattedState = state ? context._hass.formatEntityState(state) : '';
  if (!context.config.state) {
      context.elements.state.style.display = 'none';
  } else if (formattedState !== context.elements.state.innerText) {
      context.elements.state.style.display = '';
      context.elements.state.innerText = `${formattedState} ${context.config.text ?? ''}`;
  }
}
export function changeStyle(context) {
  const state = getState(context);
  const { backdropCustomStyle } = getBackdrop(context);

  const customStyle = context.config.styles
      ? Function('hass', 'entityId', 'state', 'return `' + context.config.styles + '`;')(context._hass, context.config.entity, state)
      : '';

  context.elements.customStyle.innerText = customStyle;
  context.elements.cardCustomStyle.innerText = customStyle;
  backdropCustomStyle.innerText = customStyle;
}
export function changeLight(context) {
  const entityData = context._hass.states[context.config.entity];
  const rgbColor = entityData?.attributes.rgb_color;
  const state = entityData?.state;

  if (rgbColor) {
      const rgbColorOpacity = (isColorCloseToWhite(rgbColor) ? 'rgba(255, 220, 200, 0.5)' : `rgba(${rgbColor}, 0.5)`);
      context.elements.header.style.backgroundColor = rgbColorOpacity;
  } else if (state == 'on' && context.config.entity?.startsWith("light.")) {
      context.elements.header.style.backgroundColor = 'rgba(255, 220, 200, 0.5)';
  } else if (state == 'on') {
      context.elements.header.style.backgroundColor = 'var(--accent-color)';
  } else {
      context.elements.header.style.backgroundColor = 'var(--background-color, var(--secondary-background-color))';
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
export function changeTriggered(context) {
    let triggerEntity = context.config.trigger_entity ?? '';
    let triggerState = context.config.trigger_state ?? '';
    let triggerClose = context.config.trigger_close ?? false;
    let triggerEntityState = context._hass.states[triggerEntity]?.state;

    if (!triggerEntity) return;
    if (!triggerState) return;
    if (context.oldTriggerEntityState === triggerEntityState) return;

    if (context.config.hash === location.hash) {
        // Popup is opened: should we close it?
        if (triggerClose && triggerState !== triggerEntityState) {
            removeHash();
        }
    } else {
        // Popup is closed: should we open it?
        if (triggerEntityState === triggerState) {
            addHash(context.config.hash);
        }
    }

    context.oldTriggerEntityState = triggerEntityState;
}
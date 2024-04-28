import { getIcon, getName, getState } from "../../tools/utils.ts";

export function changeIcon(context) {
  context.elements.icon.icon = getIcon(context);
}
export function changeName(context) {
  const name = getName(context);
  if (name !== context.elements.name.innerText) {
      context.elements.name.innerText = name;
  }
}
export function changeStyle(context) {
  const state = getState(context);

  const customStyle = context.config.styles
      ? Function('hass', 'entityId', 'state', 'icon', 'return `' + context.config.styles + '`;')(context._hass, context.config.entity, state, context.elements.icon.icon)
      : '';

  context.elements.customStyle.innerText = customStyle;
}
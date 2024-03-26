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
      ? Function('hass', 'entityId', 'state', 'return `' + context.config.styles + '`;')(context._hass, context.config.entity, state)
      : '';

  if (context.config.styles?.match(/\.(separator-container)/)) {
      console.log('custom styles with no bubble prefix are deprecated on separators. Please update your selectors.');
  }

  context.elements.customStyle.innerText = customStyle;
}
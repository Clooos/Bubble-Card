import { getIcon, getName, getState, getWeatherIcon, setLayout } from "../../tools/utils.ts";
import { initializesubButtonIcon } from '../../tools/global-changes.ts';

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
    initializesubButtonIcon(context);
    setLayout(context);

    const state = getState(context);

    const customStyle = context.config.styles
        ? Function('hass', 'entityId', 'state', 'icon', 'subButtonIcon', 'getWeatherIcon', `return \`${context.config.styles}\`;`)
          (context._hass, context.config.entity, state, context.elements.icon.icon, context.subButtonIcon, getWeatherIcon)
        : '';

    context.elements.customStyle.innerText = customStyle;
}
import { getIcon, getName, getState, getWeatherIcon, setLayout } from "../../tools/utils.ts";
import { initializesubButtonIcon } from '../../tools/global-changes.ts';

export function changeIcon(context) {
  context.elements.icon.icon = getIcon(context);
  if (context.elements.icon.icon === '' && context.elements.icon.style.margin === "") { 
    context.elements.icon.style.margin = "0px 8px";
    context.elements.icon.style.width = "0px";
  } else if (context.elements.icon.icon !== "" && context.elements.icon.style.margin === "0px 8px") {
    context.elements.icon.style.margin = "";
    context.elements.icon.style.width = "";
  }
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

    let customStyle = '';

    try {
        customStyle = context.config.styles
            ? Function('hass', 'entity', 'state', 'icon', 'subButtonIcon', 'getWeatherIcon', 'card', `return \`${context.config.styles}\`;`)
              (context._hass, context.config.entity, state, context.elements.icon, context.subButtonIcon, getWeatherIcon, context.card)
            : '';
    } catch (error) {
        throw new Error(`Error in generating separator custom templates: ${error.message}`);
    }

    if (context.elements.customStyle) {
        context.elements.customStyle.innerText = customStyle;
    }
}
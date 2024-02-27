import { getIcon, getName, getState } from "../../tools/utils.ts";

export function changeIcon(context) {
  const iconOpen = context.config.icon_open ?? 'mdi:window-shutter-open';
  const iconClosed = context.config.icon_close ?? 'mdi:window-shutter';
  context.elements.icon.icon = context._hass.states[context.config.entity].state === 'open' ? iconOpen : iconClosed;
}
export function changeName(context) {
    const name = getName(context);
    if (name !== context.elements.name.innerText) {
        context.elements.name.innerText = name;
    }
}
export function changeState(context) {
    const showState = context.config.show_state ?? false;
    const state = context._hass.states[context.config.entity];
    const formattedState = state ? context._hass.formatEntityState(state) : '';

    if (showState === false) {
        context.elements.state.style.display = 'none';
    } else if (formattedState !== context.elements.state.innerText) {
        context.elements.state.style.display = '';
        context.elements.state.innerText = formattedState;
    }
}
export function changeStyle(context) {
  const state = getState(context);

  const customStyle = context.config.styles
      ? Function('hass', 'entityId', 'state', 'return `' + context.config.styles + '`;')(context._hass, context.config.entity, state)
      : '';

  if (context.config.styles?.match(/\.(button|buttons-container|close|cover-container|header-container|icon-container|name|name-container|open|state|stop)/)) {
      console.log('custom styles with no bubble prefix are deprecated on covers. Please update your selectors.');
  }

  context.elements.customStyle.innerText = customStyle;
}


  

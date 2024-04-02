import { getName, getState } from "../../tools/utils.ts";

export function changeIcon(context) {
  const iconOpen = context.config.icon_open ?? 'mdi:window-shutter-open';
  const iconClosed = context.config.icon_close ?? 'mdi:window-shutter';

  context.elements.icon.icon = context._hass.states[context.config.entity].state === 'open' ? iconOpen : iconClosed;
  context.elements.iconOpen.icon = context.config.icon_up ?? "mdi:arrow-up";
  context.elements.iconClose.icon = context.config.icon_down ?? "mdi:arrow-down";
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
    } else {
        context.elements.state.style.display = '';
        if (formattedState !== context.elements.state.innerText) {
          context.elements.state.innerText = formattedState;
        }
    }
}
export function changeStyle(context) {
  const state = getState(context);

  const customStyle = context.config.styles
      ? Function('hass', 'entityId', 'state', 'return `' + context.config.styles + '`;')(context._hass, context.config.entity, state)
      : '';

  context.elements.customStyle.innerText = customStyle;
}


  

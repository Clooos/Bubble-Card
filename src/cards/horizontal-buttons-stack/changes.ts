import { isColorCloseToWhite } from "../../tools/style.ts";
import { getState } from "../../tools/utils.ts";

const BUTTON_MARGIN = 12;

export function sortButtons(context) {
    if (!context.config.auto_order) return;

    const states = context._hass.states;

    context.elements.buttons.sort((a, b) => {
        if (!a.pirSensor) return 1;
        if (!b.pirSensor) return -1;

        const aTime = states[a.pirSensor].last_updated;
        const bTime = states[b.pirSensor].last_updated;

        if (states[a.pirSensor].state === "on" && states[b.pirSensor].state === "on") {
            return aTime > bTime ? -1 : 1;
        }

        // If only a.pirSensor is "on", place a before b
        if (states[a.pirSensor].state === "on") return -1;

        // If only b.pirSensor is "on", place b before a
        if (states[b.pirSensor].state === "on") return 1;

        // If neither PIR sensor is "on", arrangement based only on the state of last updated even if off
        return aTime < bTime ? 1 : -1;
    });
}
export function placeButtons(context) {
    let position = 0;
    for (let i = 0; i < context.elements.buttons.length; ++i) {
        let buttonWidth = localStorage.getItem(`bubbleButtonWidth-${context.elements.buttons[i].link}`);
        
        const newWidth = context.elements.buttons[i].offsetWidth;
        if (newWidth > 0) {
          buttonWidth = newWidth;
          localStorage.setItem(`bubbleButtonWidth-${context.elements.buttons[i].link}`, `${newWidth}`);
        }

        if (buttonWidth !== null) {
          context.elements.buttons[i].style.transform = `translateX(${position}px)`;
          position += +buttonWidth + BUTTON_MARGIN;
        }

    }
    context.elements.cardContainer.style.width = `${position - BUTTON_MARGIN}px`;
}
export function changeEditor(context) {
    if (context.editor) {
        context.elements.cardContainer.classList.add('editor');
        context.card.classList.add('editor');
    } else {
        context.elements.cardContainer.classList.remove('editor');
        context.card.classList.remove('editor');
    }
}
export function changeLight(context) {
    context.elements.buttons.forEach((button) => {
        const entityData = context._hass.states[button.lightEntity];
        const rgbColor = entityData?.attributes.rgb_color;
        const state = entityData?.state;

        if (rgbColor) {
            const rgbColorOpacity = (isColorCloseToWhite(rgbColor) ? 'rgba(255, 220, 200, 0.5)' : `rgba(${rgbColor}, 0.5)`);
            button.backgroundColor.style.backgroundColor = rgbColorOpacity;
            button.backgroundColor.style.borderColor = 'rgba(0, 0, 0, 0)';
        } else if (state == 'on') {
            button.backgroundColor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            button.backgroundColor.style.borderColor = 'rgba(0, 0, 0, 0)';
        } else {
            button.backgroundColor.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            button.backgroundColor.style.borderColor = 'var(--primary-text-color)';
        }
    });
}
export function changeStatus(context) {
    if (context.content.scrollWidth > context.content.offsetWidth) {
        context.content.classList.add('is-scrollable');
    } else {
        context.content.classList.remove('is-scrollable');
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
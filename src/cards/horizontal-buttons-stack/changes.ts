import { isColorCloseToWhite } from "../../tools/style.ts";
import { getState } from "../../tools/utils.ts";
import { createButton } from './create.ts';
import { initializesubButtonIcon } from '../../tools/global-changes.ts';

const BUTTON_MARGIN = 12;

export function sortButtons(context) {
    if (!context.config.auto_order) return;

    const states = context._hass.states;

    context.elements.buttons.sort((a, b) => {
        if (!states[a.pirSensor]) return 1;
        if (!states[a.pirSensor]) return -1;

        const aTime = states[a.pirSensor]?.last_updated;
        const bTime = states[b.pirSensor]?.last_updated;

        if (states[a.pirSensor]?.state === "on" && states[b.pirSensor]?.state === "on") {
            return aTime > bTime ? -1 : aTime === bTime ? 0 : 1;
        }

        // If only a.pirSensor is "on", place a before b
        if (states[a.pirSensor]?.state === "on") return -1;

        // If only b.pirSensor is "on", place b before a
        if (states[b.pirSensor]?.state === "on") return 1;

        // If neither PIR sensor is "on", arrangement based only on the state of last updated even if off
        return aTime > bTime ? -1 : aTime === bTime ? 0 : 1;
    });
}
export function placeButtons(context) {
    let position = 0;
    for (let i = 0; i < context.elements.buttons.length; ++i) {
        let buttonWidth = localStorage.getItem(`bubbleButtonWidth-${context.elements.buttons[i].link}`);

        context.elements.buttons[i].style.width = '';
        const newWidth = context.elements.buttons[i].offsetWidth;
        context.elements.buttons[i].style.width = `${newWidth}px`;

        if (newWidth > 0) {
          buttonWidth = newWidth;
          localStorage.setItem(`bubbleButtonWidth-${context.elements.buttons[i].link}`, `${newWidth}`);
        }

        if (buttonWidth !== null) {
          context.elements.buttons[i].style.transform = `translateX(${position}px)`;
          context.elements.buttons[i].style.width = '';
          position += +buttonWidth + BUTTON_MARGIN;
        }
    }
    context.elements.cardContainer.style.width = `${position}px`;
}
export function changeEditor(context) {
    const detectedEditor = context.shadowRoot.host.closest('hui-card-preview, hui-card-options');

    if (context.editor || detectedEditor !== null) {
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
export function changeConfig(context) {
    context.elements.buttons.forEach((button) => {
        const index = button.index;
        const name = context.config[`${index}_name`] ?? '';
        const icon = context.config[`${index}_icon`] ?? '';
        const sensor = context.config[`${index}_pir_sensor`];
        const link = context.config[`${index}_link`];
        const entity = context.config[`${index}_entity`];

        button.pirSensor = sensor;
        button.lightEntity = entity;
        button.link = link;

        if (name) {
            button.name.innerText = name;
            button.name.style.display = '';
        } else {
            button.name.style.display = 'none';
        }
        if (icon) {
            button.icon.icon = icon;
            button.icon.style.display = '';
        } else {
            button.icon.style.display = 'none';
        }

        if (link === undefined) {
            button.remove();
            context.elements.buttons = context.elements.buttons.filter((btn) => btn !== button);
            context.elements.buttons.forEach((btn, idx) => {
                btn.index = idx + 1;
            });
        }
    });

    // Create a new button if necessary
    let index = context.elements.buttons.length + 1;
    while (context.config[`${index}_link`] !== undefined) {
        const existingButton = context.elements.buttons.find(button => button.index === index);
        if (!existingButton) {
            const newButton = createButton(context, index);
            context.elements.buttons.push(newButton);
        }
        index++;
    }
}
export function changeStatus(context) {
    if (context.content.scrollWidth >= context.content.offsetWidth) {
        context.content.classList.add('is-scrollable');
    } else {
        context.content.classList.remove('is-scrollable');
    }
}
export function changeStyle(context) {
    const state = getState(context);

    let customStyle = '';

    try {
        customStyle = context.config.styles
            ? Function('hass', 'entity', 'state', 'card', `return \`${context.config.styles}\`;`)
              (context._hass, context.config.entity, state, context.card)
            : '';
    } catch (error) {
        throw new Error(`Error in generating horizontal buttons stack custom templates: ${error.message}`);
    }

    if (context.elements.customStyle) {
        context.elements.customStyle.innerText = customStyle;
    }
}
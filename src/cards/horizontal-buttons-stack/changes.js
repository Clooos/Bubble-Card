import { isColorCloseToWhite } from "../../tools/style.js";
import { isDocumentRTL } from "../../tools/utils.js";
import { createButton } from './create.js';
import { getStoredButtonWidth, storeButtonWidth } from './button-width-storage.js';
import { handleCustomStyles } from '../../tools/style-processor.js';

const BUTTON_MARGIN = 12;

export function sortButtons(context) {
    if (!context.config.auto_order) return;

    const states = context._hass.states;

    context.elements.buttons.sort((a, b) => {
        const aState = states[a.pirSensor];
        const bState = states[b.pirSensor];

        // Two buttons with no sensor to order by are equal, so they keep the
        // order they are configured in, at the end of the row. Answering 1 for
        // both of them said that each one comes after the other, and a
        // comparator that contradicts itself leaves the result up to the sort
        // algorithm. Firefox does not sort with the same one as Chrome, and
        // since this runs on every state update, the row kept reshuffling on
        // Firefox alone (#1431).
        if (!aState && !bState) return 0;

        // A button with no sensor goes after one that has a reading
        if (!aState) return 1;
        if (!bState) return -1;

        // If only one PIR sensor is "on", it comes first
        if (aState.state === "on" && bState.state !== "on") return -1;
        if (bState.state === "on" && aState.state !== "on") return 1;

        // Otherwise the most recently updated comes first, on or off alike.
        // Missing timestamps compare equal so they cannot contradict either.
        const aTime = aState.last_updated ?? '';
        const bTime = bState.last_updated ?? '';
        return aTime > bTime ? -1 : aTime === bTime ? 0 : 1;
    });
}
export function placeButtons(context) {
    let position = 0;
    // Buttons are anchored at the inline start, so in RTL they grow leftward
    const directionFactor = isDocumentRTL() ? -1 : 1;
    for (let i = 0; i < context.elements.buttons.length; ++i) {
        const link = context.elements.buttons[i].link;
        let buttonWidth = getStoredButtonWidth(link);

        context.elements.buttons[i].style.width = '';
        const newWidth = context.elements.buttons[i].offsetWidth;
        context.elements.buttons[i].style.width = `${newWidth}px`;

        if (newWidth > 0) {
          buttonWidth = newWidth;
          storeButtonWidth(link, newWidth);
        }

        if (buttonWidth !== null) {
          context.elements.buttons[i].style.transform = `translateX(${directionFactor * position}px)`;
          context.elements.buttons[i].style.width = '';
          position += +buttonWidth + BUTTON_MARGIN;
        }
    }
    context.elements.cardContainer.style.width = `${position}px`;
}
export function changeEditor(context) {
    // const detectedEditor = context.shadowRoot.host.closest('hui-card-preview, hui-card-options');
    const detectedEditor = context.editor || context.detectedEditor;

    if (detectedEditor) {
        context.elements.cardContainer.classList.add('editor');
        context.card.classList.add('editor');
    } else {
        context.elements.cardContainer.classList.remove('editor');
        context.card.classList.remove('editor');
    }
}
export function changeLight(context) {
    context.elements.buttons.forEach((button) => {
        const entityData = context._hass?.states?.[button.lightEntity];
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
            // Renumber by config slot, never by position in the list. index is
            // the slot a button reads its name, icon and link from, while the
            // list order is only what the row shows, and auto_order sorts that
            // order by PIR activity. Numbering by position handed the buttons
            // each other's config as soon as the two diverged.
            [...context.elements.buttons]
                .sort((a, b) => a.index - b.index)
                .forEach((btn, idx) => {
                    btn.index = idx + 1;
                });
        }
    });

    // Create a new button if necessary. Walk every configured index instead of
    // starting past the end of the list: sortButtons reorders that list and the
    // removal above shrinks it, so its length tells us nothing about which
    // index is missing. createButton registers and appends the button itself.
    let index = 1;
    while (context.config[`${index}_link`] !== undefined) {
        const existingButton = context.elements.buttons.find(button => button.index === index);
        if (!existingButton) {
            createButton(context, index);
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
    handleCustomStyles(context);
}
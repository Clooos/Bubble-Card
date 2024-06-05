import { addActions } from "../../tools/tap-actions.ts";
import { createElement, forwardHaptic } from "../../tools/utils.ts";
import styles from "./styles.ts";

export function createStructure(context) {
    context.elements = {};
    context.elements.coverCardContainer = createElement('div', 'bubble-cover-card-container cover-container');
    context.elements.headerContainer = createElement('div', 'bubble-header header-container');
    context.elements.buttonsContainer = createElement('div', 'bubble-buttons buttons-container');
    context.elements.iconContainer = createElement('div', 'bubble-icon-container icon-container');
    context.elements.icon = createElement('ha-icon', 'bubble-icon');
    context.elements.nameContainer = createElement('div', 'bubble-name-container name-container');
    context.elements.name = createElement('div', 'bubble-name name');
    context.elements.state = createElement('div', 'bubble-state state');
    context.elements.buttonOpen = createElement('div', 'bubble-button bubble-open button open');
    context.elements.buttonStop = createElement('div', 'bubble-button bubble-stop button stop');
    context.elements.buttonClose = createElement('div', 'bubble-button bubble-close button close');
    context.elements.iconOpen = createElement('ha-icon', 'bubble-icon bubble-icon-open');
    context.elements.iconStop = createElement('ha-icon', 'bubble-icon bubble-icon-stop');
    context.elements.iconStop.icon = 'mdi:stop';
    context.elements.iconClose = createElement('ha-icon', 'bubble-icon bubble-icon-close');

    context.elements.style = createElement('style');
    context.elements.style.innerText = styles;
    context.elements.customStyle = createElement('style');

    context.elements.iconContainer.appendChild(context.elements.icon);
    context.elements.headerContainer.appendChild(context.elements.iconContainer);
    context.elements.headerContainer.appendChild(context.elements.nameContainer);
    context.elements.nameContainer.appendChild(context.elements.name);
    context.elements.nameContainer.appendChild(context.elements.state);
    context.elements.buttonsContainer.appendChild(context.elements.buttonOpen);
    context.elements.buttonsContainer.appendChild(context.elements.buttonStop);
    context.elements.buttonsContainer.appendChild(context.elements.buttonClose);

    context.elements.buttonOpen.appendChild(context.elements.iconOpen);
    context.elements.buttonOpen.addEventListener('click', () => {
        const openCover = context.config.open_service ?? 'cover.open_cover';
        const [domain, action] = openCover.split('.');
        context._hass.callService(domain, action, {
            entity_id: context.config.entity
        });
    });

    context.elements.buttonStop.appendChild(context.elements.iconStop);
    context.elements.buttonStop.addEventListener('click', () => {
        const stopCover = context.config.stop_service ?? 'cover.stop_cover';
        const [domain, action] = stopCover.split('.');
        context._hass.callService(domain, action, {
            entity_id: context.config.entity
        });
    });

    context.elements.buttonClose.appendChild(context.elements.iconClose);
    context.elements.buttonClose.addEventListener('click', () => {
        const closeCover = context.config.close_service ?? 'cover.close_cover';
        const [domain, action] = closeCover.split('.');
        context._hass.callService(domain, action, {
            entity_id: context.config.entity
        });
    });

    addActions(context.elements.iconContainer, context.config);

    context.content.innerHTML = '';

    context.content.appendChild(context.elements.coverCardContainer);
    context.content.appendChild(context.elements.style);
    context.content.appendChild(context.elements.customStyle);

    context.elements.coverCardContainer.appendChild(context.elements.headerContainer);
    context.elements.coverCardContainer.appendChild(context.elements.buttonsContainer);

    context.elements.coverCardContainer.addEventListener('click', () => forwardHaptic("selection"));

    context.cardType = "cover";
}
import { createBaseStructure } from "../../components/base-card/index.js";
import { addActions, addFeedback } from "../../tools/tap-actions.js";
import { createElement, forwardHaptic } from "../../tools/utils.js";
import styles from "./styles.css";

export function createStructure(context) {
    const cardType = 'cover';
    
    const elements = createBaseStructure(context, {
        type: cardType,
        styles: styles,
        withSubButtons: true,
        iconActions: true,
        buttonActions: true
    });

    // Add backward compatibility
    elements.buttonsContainer.classList.add('bubble-buttons', 'buttons-container');

    elements.buttonOpen = createElement('div', 'bubble-button bubble-open button open');
    elements.buttonStop = createElement('div', 'bubble-button bubble-stop button stop');
    elements.buttonClose = createElement('div', 'bubble-button bubble-close button close');

    elements.iconOpen = createElement('ha-icon', 'bubble-icon bubble-icon-open');
    elements.iconStop = createElement('ha-icon', 'bubble-icon bubble-icon-stop');
    elements.iconStop.setAttribute("icon", "mdi:stop");
    elements.iconClose = createElement('ha-icon', 'bubble-icon bubble-icon-close');

    elements.buttonOpen.appendChild(elements.iconOpen);
    elements.buttonStop.appendChild(elements.iconStop);
    elements.buttonClose.appendChild(elements.iconClose);

    elements.buttonsContainer.append(
        elements.buttonOpen,
        elements.buttonStop,
        elements.buttonClose
    );

    elements.buttonOpen.addEventListener('click', () => {
        const openCover = context.config.open_service ?? 'cover.open_cover';
        const [domain, action] = openCover.split('.');
        context._hass.callService(domain, action, {
            entity_id: context.config.entity
        });
    });

    elements.buttonStop.addEventListener('click', () => {
        const stopCover = context.config.stop_service ?? 'cover.stop_cover';
        const [domain, action] = stopCover.split('.');
        context._hass.callService(domain, action, {
            entity_id: context.config.entity
        });
    });

    elements.buttonClose.addEventListener('click', () => {
        const closeCover = context.config.close_service ?? 'cover.close_cover';
        const [domain, action] = closeCover.split('.');
        context._hass.callService(domain, action, {
            entity_id: context.config.entity
        });
    });

    context.cardType = cardType;
}

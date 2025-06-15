import { createBaseStructure } from "../../components/base-card/index.js";
import { createElement, forwardHaptic } from "../../tools/utils.js";
import { addFeedback } from "../../tools/tap-actions.js";
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

    function createCoverButton(iconName, className, iconClassName) {
        const button = createElement('div', `bubble-cover-button ${className}`);
        const icon = createElement('ha-icon', `bubble-cover-button-icon ${iconClassName}`);
        icon.setAttribute("icon", iconName);
        
        const feedbackContainer = createElement('div', 'bubble-feedback-container');
        const feedback = createElement('div', 'bubble-feedback-element feedback-element');
        
        feedbackContainer.appendChild(feedback);
        button.appendChild(feedbackContainer);
        button.appendChild(icon);
        
        button.icon = icon;
        button.feedback = feedback;

        button.haRipple = createElement('ha-ripple');
        button.appendChild(button.haRipple);
        
        return button;
    }

    elements.buttonOpen = createCoverButton("mdi:arrow-up", 'bubble-button bubble-open button open', 'bubble-icon-open');
    elements.buttonStop = createCoverButton("mdi:stop", 'bubble-button bubble-stop button stop', 'bubble-icon-stop');
    elements.buttonClose = createCoverButton("mdi:arrow-down", 'bubble-button bubble-close button close', 'bubble-icon-close');

    elements.buttonsContainer.append(
        elements.buttonOpen,
        elements.buttonStop,
        elements.buttonClose
    );

    elements.buttonOpen.addEventListener('click', () => {
        forwardHaptic("selection");
        const openCover = context.config.open_service ?? 'cover.open_cover';
        const [domain, action] = openCover.split('.');
        context._hass.callService(domain, action, {
            entity_id: context.config.entity
        });
    });

    elements.buttonStop.addEventListener('click', () => {
        forwardHaptic("selection");
        const stopCover = context.config.stop_service ?? 'cover.stop_cover';
        const [domain, action] = stopCover.split('.');
        context._hass.callService(domain, action, {
            entity_id: context.config.entity
        });
    });

    elements.buttonClose.addEventListener('click', () => {
        forwardHaptic("selection");
        const closeCover = context.config.close_service ?? 'cover.close_cover';
        const [domain, action] = closeCover.split('.');
        context._hass.callService(domain, action, {
            entity_id: context.config.entity
        });
    });

    context.cardType = cardType;
}

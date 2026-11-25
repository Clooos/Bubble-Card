import { createBaseStructure } from "../../components/base-card/index.js";
import { createElement, forwardHaptic } from "../../tools/utils.js";
import styles from "./styles.css";
import { getCardId, updateSpeedButtons } from "./changes.js";

const CoverSpeed = {
    SLOW: 'slow',
    NORMAL: 'normal',
    FAST: 'fast'
};

export function createStructure(context) {
    const cardType = 'cover';
    const cardId = getCardId(context);
    
    const elements = createBaseStructure(context, {
        type: cardType,
        styles: styles,
        withSubButtons: true,
        iconActions: true,
        buttonActions: true
    });

    console.log("Card ID for entity " + context.config.entity + ": " + cardId);

    // Add backward compatibility
    elements.buttonsContainer.classList.add('bubble-buttons', 'buttons-container');

    function createCoverButton(iconName, className, iconClassName) {
        const button = createElement('div', `bubble-cover-button ${className}`);
        const icon = createElement('ha-icon', `bubble-cover-button-icon ${iconClassName}`);
        icon.setAttribute("icon", iconName);
        
        button.appendChild(icon);

        button.icon = icon;

        button.haRipple = createElement('ha-ripple');
        button.appendChild(button.haRipple);
        
        return button;
    }
  
    
    // Speed buttons
    elements.openSpeedButton = createCoverButton("mdi:speedometer-medium", 'bubble-button bubble-speed button open-speed', 'bubble-icon-speed');
    elements.closeSpeedButton = createCoverButton("mdi:speedometer-medium", 'bubble-button bubble-speed button close-speed', 'bubble-icon-speed');

    // Position buttons (open/stop/close)
    elements.buttonOpen = createCoverButton("mdi:arrow-up", 'bubble-button bubble-open button open', 'bubble-icon-open');
    elements.buttonStop = createCoverButton("mdi:stop", 'bubble-button bubble-stop button stop', 'bubble-icon-stop');
    elements.buttonClose = createCoverButton("mdi:arrow-down", 'bubble-button bubble-close button close', 'bubble-icon-close');

    elements.buttonsContainer.append(
        elements.openSpeedButton,
        elements.buttonOpen,
        elements.buttonStop,
        elements.buttonClose,
        elements.closeSpeedButton
    );

    const stateObj = context._hass?.states?.[context.config.entity];
    updateSpeedButtons(cardId, context, stateObj);

    // Tilt buttons container
    elements.tiltButtonsContainer = createElement('div', 'bubble-tilt-buttons-container');
    elements.tiltButtonsContainer.style.display = 'none';

    elements.buttonTiltOpen = createCoverButton("mdi:arrow-top-right", 'bubble-button bubble-tilt-open button tilt-open', 'bubble-icon-tilt-open');
    elements.buttonTiltClose = createCoverButton("mdi:arrow-bottom-left", 'bubble-button bubble-tilt-close button tilt-close', 'bubble-icon-tilt-close');

    elements.tiltButtonsContainer.append(
        elements.buttonTiltOpen,
        elements.buttonTiltClose
    );

    // Speed button click handler
    elements.openSpeedButton.addEventListener('click', () => {
        forwardHaptic("selection");

        const stateObj = context._hass?.states?.[context.config.entity];
        const supportedSpeeds = stateObj?.attributes?.supported_speeds || [];

        if (supportedSpeeds.length === 0) return;

        const currentSpeed = (((context.config.show_speed_buttons ? localStorage.getItem(`bubble-card:${cardId}:openSpeed`) : null) || supportedSpeeds[0]) || context.config.open_speed) || CoverSpeed.NORMAL;

        const currentSpeedIndex = supportedSpeeds.indexOf(currentSpeed);
        const newSpeed = supportedSpeeds[(currentSpeedIndex + 1) % supportedSpeeds.length];

        localStorage.setItem(`bubble-card:${cardId}:openSpeed`, newSpeed);
        if (!context.config.separate_speeds) {
            localStorage.setItem(`bubble-card:${cardId}:closeSpeed`, newSpeed);
        }

        updateSpeedButtons(cardId, context, stateObj);
    });

    elements.closeSpeedButton.addEventListener('click', () => {
        forwardHaptic("selection");

        const stateObj = context._hass?.states?.[context.config.entity];
        const supportedSpeeds = stateObj?.attributes?.supported_speeds || [];

        if (supportedSpeeds.length === 0) return;
        
        const currentSpeed = (((context.config.show_speed_buttons ? (context.config.separate_speeds ? localStorage.getItem(`bubble-card:${cardId}:closeSpeed`) : currentOpenSpeed) : null) || supportedSpeeds[0]) || context.config.close_speed) || currentOpenSpeed;

        const currentSpeedIndex = supportedSpeeds.indexOf(currentSpeed);
        const newSpeed = supportedSpeeds[(currentSpeedIndex + 1) % supportedSpeeds.length];

        localStorage.setItem(`bubble-card:${cardId}:closeSpeed`, newSpeed);

        updateSpeedButtons(cardId, context, stateObj);
    });

    // Position buttons click handlers
    elements.buttonOpen.addEventListener('click', () => {
        forwardHaptic("selection");

        const openCover = context.config.open_service ?? 'cover.open_cover';
        const [domain, action] = openCover.split('.');

        const currentSpeed = context.config.show_speed_buttons ? (localStorage.getItem(`bubble-card:${cardId}:openSpeed`) || context.config.open_speed) : context.config.open_speed;
        if (currentSpeed) {
        context._hass.callService(domain, action, {
                speed: currentSpeed
            }, {
                entity_id: context.config.entity
            });
        } else {
            context._hass.callService(domain, action, {
                entity_id: context.config.entity
            });
        }
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

        const currentSpeed = context.config.show_speed_buttons ? (localStorage.getItem(`bubble-card:${cardId}:closeSpeed`) || context.config.close_speed) : context.config.close_speed;
        if (currentSpeed) {
        context._hass.callService(domain, action, {
                speed: currentSpeed
            }, {
                entity_id: context.config.entity
            });
        } else {
            context._hass.callService(domain, action, {
                entity_id: context.config.entity
            });
        }
    });

    // Tilt buttons click handlers
    elements.buttonTiltOpen.addEventListener('click', () => {
        forwardHaptic("selection");
        const openTilt = context.config.open_tilt_service ?? 'cover.open_cover_tilt';
        const [domain, action] = openTilt.split('.');
        context._hass.callService(domain, action, {
            entity_id: context.config.entity
        });
    });

    elements.buttonTiltClose.addEventListener('click', () => {
        forwardHaptic("selection");
        const closeTilt = context.config.close_tilt_service ?? 'cover.close_cover_tilt';
        const [domain, action] = closeTilt.split('.');
        context._hass.callService(domain, action, {
            entity_id: context.config.entity
        });
    });

    context.cardType = cardType;
}

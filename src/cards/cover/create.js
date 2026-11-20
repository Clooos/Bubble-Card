import { createBaseStructure } from "../../components/base-card/index.js";
import { createElement, forwardHaptic } from "../../tools/utils.js";
import styles from "./styles.css";

const CoverSpeed = {
    SLOW: 'slow',
    NORMAL: 'normal',
    FAST: 'fast'
};

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
        
        button.appendChild(icon);

        button.icon = icon;

        button.haRipple = createElement('ha-ripple');
        button.appendChild(button.haRipple);
        
        return button;
    }
  
    
    // Speed button
    const speedIcon = (context.config.open_speed === CoverSpeed.SLOW) ? "mdi:speedometer-slow" : (context.config.open_speed === CoverSpeed.FAST) ? "mdi:speedometer" : "mdi:speedometer-medium";
    elements.speedButton = createCoverButton(speedIcon, 'bubble-button bubble-speed button speed', 'bubble-icon-speed');
    elements.buttonsContainer.append(elements.speedButton);
    if (context.config.open_speed === CoverSpeed.SLOW) {
        elements.speedButton.style.backgroundColor = 'var(--bubble-accent-color, var(--bubble-default-color))';
    }
    else if (context.config.open_speed === CoverSpeed.FAST) {
        elements.speedButton.style.backgroundColor = 'var(--bubble-accent-color, var(--bubble-default-color))';
    }
    else {
        elements.speedButton.style.backgroundColor = 'var(--bubble-default-color)';
    }
    if (!(context.config.show_speed_button && context.config.open_speed)) {
        elements.speedButton.style.display = 'none';
    }

    // Position buttons (open/stop/close)
    elements.buttonOpen = createCoverButton("mdi:arrow-up", 'bubble-button bubble-open button open', 'bubble-icon-open');
    elements.buttonStop = createCoverButton("mdi:stop", 'bubble-button bubble-stop button stop', 'bubble-icon-stop');
    elements.buttonClose = createCoverButton("mdi:arrow-down", 'bubble-button bubble-close button close', 'bubble-icon-close');

    elements.buttonsContainer.append(
        elements.buttonOpen,
        elements.buttonStop,
        elements.buttonClose
    );

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
    elements.speedButton.addEventListener('click', () => {
        forwardHaptic("selection");
        const stateObj = context._hass?.states?.[context.config.entity];
        const supportedSpeeds = stateObj?.attributes?.supported_speeds || [];

        const currentSpeed = context.config.open_speed || context.config.close_speed;
        const currentSpeedIndex = supportedSpeeds.indexOf(currentSpeed);
        const newSpeed = supportedSpeeds[(currentSpeedIndex + 1) % supportedSpeeds.length];
        context.config.open_speed = newSpeed;
        context.config.close_speed = newSpeed;
    });

    // Position buttons click handlers
    elements.buttonOpen.addEventListener('click', () => {
        forwardHaptic("selection");
        const openCover = context.config.open_service ?? 'cover.open_cover';
        const [domain, action] = openCover.split('.');
        if (context.config.open_speed) {
        context._hass.callService(domain, action, {
                speed: context.config.open_speed
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
        if (context.config.close_speed) {
        context._hass.callService(domain, action, {
                speed: context.config.close_speed
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

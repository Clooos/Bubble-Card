import { addActions, addFeedback } from "../tools/tap-actions.ts";
import { 
    createElement,
    applyScrollingEffect,
    formatDateTime,
    isStateOn,
    isEntityType,
    getState,
    getAttribute,
    getIcon 
} from './utils.ts';

export function changeState(context) {
    const buttonType = context.config.button_type;
    const state = context._hass.states[context.config.entity];
    const attribute = context.config.attribute ?? '';

    const defaultShowState = buttonType === 'state';
    const showName = context.config.show_name ?? true;
    const showIcon = context.config.show_icon ?? true;
    const showState = context.config.show_state ?? defaultShowState;
    const showAttribute = context.config.show_attribute ?? defaultShowState;
    const showLastChanged = (context.config.show_last_updated || context.config.show_last_changed) ?? '';

    // Format state and attributes based on button type
    let formattedState = state && showState ? context._hass.formatEntityState(state) : '';
    let formattedAttribute;
    let formattedLastChanged;

    if (showAttribute && attribute) {
        formattedAttribute = state ? context._hass.formatEntityAttributeValue(state, attribute) : '';
    }

    if (showLastChanged) {
        formattedLastChanged = state ? formatDateTime(state.last_changed, context._hass.locale.language) : '';
    }

    // Check if formattedState or formattedAttribute is 'Unknown'
    if (formattedState === 'Unknown') {
        formattedState = '';
    }

    if (formattedAttribute === 'Unknown') {
        formattedAttribute = '';
    }

    let displayedState = '';

    if (formattedState) {
        displayedState += formattedState;
    }

    if (formattedLastChanged) {
        if (displayedState) {
            // Add a space if formattedState is not 'off', otherwise add a dash
            displayedState += (formattedState.toLowerCase() !== 'off') ? ' ' : ' - ';
        }
        // Capitalize formattedLastChanged if formattedState is 'off'
        displayedState += (formattedState.toLowerCase() === 'off') ? capitalizeFirstLetter(formattedLastChanged) : formattedLastChanged;
    }

    if (formattedAttribute) {
        if (displayedState) {
            displayedState += ' - ';
        }
        displayedState += formattedAttribute;
    }

    // Function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Capitalize the first letter of displayedState
    displayedState = capitalizeFirstLetter(displayedState);

    // Update display
    if (showName) {
        context.elements.name.style.display = '';
    } else {
        context.elements.name.style.display = 'none';
        context.elements.state.style.opacity = '1';
        context.elements.state.style.fontSize = '14px';
    }

    if (!showIcon) {
        context.elements.iconContainer.style.display = 'none';
        context.elements.nameContainer.style.marginLeft = '16px';
    } else {
        context.elements.iconContainer.style.display = '';
        context.elements.nameContainer.style.marginLeft = '';
    }

    if (showState) {
        context.elements.state.style.display = 'flex';
    }

    if (displayedState === '') {
        context.elements.state.style.display = 'none';
    } else if (context.previousState !== displayedState) {
        context.elements.state.style.display = '';
        applyScrollingEffect(context, context.elements.state, displayedState);
        context.previousState = displayedState;
    }
}

export function changeSubButtonState(context, container = context.content, appendTo = container.firstChild.firstChild, before = false) {
    const subButtons = context.config.sub_button;
    if (!subButtons) return;

    context.previousValues = context.previousValues || {};
    let previousSubButtons = [...(context.previousValues.subButtons || [])];
    context.elements = { ...context.elements };

    const subButtonContainer = context.elements.subButtonContainer || createElement('div', 'bubble-sub-button-container');
    if (!context.elements.subButtonContainer && context.config.sub_button) {
        Object.assign(subButtonContainer.style, subButtonStyles.subButtonContainer);
        if (before) appendTo.prepend(subButtonContainer);
        else appendTo.appendChild(subButtonContainer);
        context.elements.subButtonContainer = subButtonContainer;
    }

    subButtons.forEach((subButton, i) => {
        if (!subButton) return;

        const index = i + 1;
        const entity = subButton.entity ?? context.config.entity;
        const state = context._hass.states[entity];
        const name = subButton.name ?? getAttribute(context, "friendly_name", entity) ?? '';
        const attributeType = subButton.attribute ?? '';
        const attribute = getAttribute(context, attributeType, entity);
        const icon = getIcon(context, entity, subButton.icon);
        const isOn = isStateOn(context, entity);
        const backgroundColor = isOn ? 'var(--accent-color)' : 'var(--card-background-color, var(--ha-card-background))';

        const showName = subButton.show_name ?? false;
        const showState = subButton.show_state ?? false;
        const showAttribute = subButton.show_attribute ?? false;
        const showLastChanged = (subButton.show_last_changed || subButton.show_last_updated) ?? false;
        const showIcon = subButton.show_icon ?? true;
        const showBackround = subButton.show_background ?? true;

        let subButtonElement = context.elements[index] || createElement('div', 'bubble-sub-button bubble-sub-button-' + index);
        if (!context.elements[index]) {
            Object.assign(subButtonElement.style, subButtonStyles.subButton);
            subButtonElement.nameContainer = createElement('div', 'bubble-sub-button-name-container');
            Object.assign(subButtonElement.nameContainer.style, subButtonStyles.nameContainer);
            subButtonElement.feedback = createElement('div', 'bubble-feedback-element feedback-element');

            subButtonElement.appendChild(subButtonElement.feedback);
            subButtonElement.appendChild(subButtonElement.nameContainer);
            subButtonContainer.appendChild(subButtonElement);
            context.elements[index] = subButtonElement;
        }

        if (showIcon && icon) {
            let iconElement = subButtonElement.icon;
            if (!iconElement) {
                iconElement = createElement('ha-icon', 'bubble-sub-button-icon');
                iconElement.style.display = 'flex';
                iconElement.style.setProperty('--mdc-icon-size', '16px');
                subButtonElement.appendChild(iconElement);
                subButtonElement.icon = iconElement;
            }
            if (iconElement.getAttribute('icon') !== icon) {
                iconElement.setAttribute('icon', icon);
            }
        } else if (subButtonElement.icon) {
            subButtonElement.icon.style.display = 'none';
        }

        subButtonElement.style.backgroundColor = showBackround ? backgroundColor : '';

        if (subButton.tap_action?.action !== 'none' || subButton.double_tap_action?.action !== 'none' || subButton.hold_action?.action !== 'none') {
            const defaultActions = {
                tap_action: { action: "more-info" },
                double_tap_action: { action: "none" },
                hold_action: { action: "none" }
            };
            addActions(subButtonElement, subButton, entity, defaultActions);
            addFeedback(subButtonElement, subButtonElement.feedback);
        }

        let displayedState = '';
        const formattedState = state && showState ? context._hass.formatEntityState(state) : '';
        const formattedAttribute = state && attribute && showAttribute ? context._hass.formatEntityAttributeValue(state, attributeType) : '';
        const formattedLastChanged = state && showLastChanged ? formatDateTime(state.last_changed, context._hass.locale.language) : '';

        if (showName && name) displayedState += name;
        if (formattedState) displayedState += (displayedState ? ' - ' : '') + formattedState;
        if (formattedLastChanged) displayedState += (displayedState ? ' - ' : '') + formattedLastChanged;
        if (formattedAttribute) displayedState += (displayedState ? ' - ' : '') + formattedAttribute;

        displayedState = displayedState.charAt(0).toUpperCase() + displayedState.slice(1);

        if (!displayedState && !showIcon) {
            subButtonElement.style.display = 'none';
        } else {
            subButtonElement.style.display = 'flex';
            subButtonElement.nameContainer.innerText = displayedState;
            if (showIcon && subButtonElement.icon) {
                subButtonElement.icon.style.marginRight = displayedState ? '4px' : '0';
                subButtonElement.icon.style.setProperty('--mdc-icon-size', displayedState ? '16px' : '20px');
            }
        }

        // if (!context.config.sub_button) {
        //     console.log('NONE')
        //     context.elements.subButtonContainer.style.display = 'none';
        // }
    });

    context.previousValues.subButtons = subButtons.slice();

    for (let i = previousSubButtons.length; i > 0; i--) {
        if (i > subButtons.length) {
            let element = context.elements[i];
            if (element) {
                subButtonContainer.removeChild(element);
                delete context.elements[i];
            }
        }
    }
}

const subButtonStyles = {
    subButtonContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'end',
        right: '8px',
        alignContent: 'center',
        gap: '8px'
    },
    subButton: {
        flexWrap: 'nowrap',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        right: '0',
        boxSizing: 'border-box',
        width: 'min-content',
        minWidth: '36px',
        height: '36px',
        verticalAlign: 'middle',
        fontSize: '12px',
        borderRadius: '32px',
        padding: '0 8px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        zIndex: '1',
        transition: 'all 0.5s ease-in-out',
        color: 'var(--primary-text-color)'
    },
    nameContainer: {
        display: 'flex'
    }
};

export function initializesubButtonIcon(context) {
    if (!Array.isArray(context.subButtonIcon)) {
        context.subButtonIcon = [];
    }

    context.content.querySelectorAll('.bubble-sub-button-icon').forEach((iconElement, index) => {
        context.subButtonIcon[index] = iconElement;
    });
}
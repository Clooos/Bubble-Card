import { addActions } from "../tools/tap-actions.ts";
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
    const showLastUpdated = context.config.show_last_updated ?? '';

    // Format state and attributes based on button type
    let formattedState = state && showState ? context._hass.formatEntityState(state) : '';
    let formattedAttribute;
    let formattedLastUpdated;

    if (showAttribute) {
        if (!attribute) {
            switch (buttonType) {
                case "switch":
                case "custom":
                    formattedLastUpdated = state ? formatDateTime(state.last_updated, context._hass.locale.language) : '';
                    break;
                case "slider":
                    const attributeKey = isEntityType(context, "cover") ? "current_subButton" :
                                         isEntityType(context, "light") && state.state !== 'off' ? "brightness" :
                                         isEntityType(context, "media_player") && state.state !== 'off' ? "volume_level" :
                                         null;
                    formattedAttribute = state && attributeKey ? context._hass.formatEntityAttributeValue(state, attributeKey) : '';
                    break;
                default:
                    formattedAttribute = "";
            }
        } else {
            formattedAttribute = state ? context._hass.formatEntityAttributeValue(state, attribute) : '';
        }
    }

    if (showLastUpdated) {
        formattedLastUpdated = state ? formatDateTime(state.last_updated, context._hass.locale.language) : '';
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

    if (formattedLastUpdated) {
        if (displayedState) {
            // Add a space if formattedState is not 'off', otherwise add a dash
            displayedState += (formattedState.toLowerCase() !== 'off') ? ' ' : ' - ';
        }
        // Capitalize formattedLastUpdated if formattedState is 'off'
        displayedState += (formattedState.toLowerCase() === 'off') ? capitalizeFirstLetter(formattedLastUpdated) : formattedLastUpdated;
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
    if (!showName) {
        context.elements.name.style.display = 'none';
    } else {
        context.elements.name.style.display = stateStyles.name.display;
    }

    if (!showIcon) {
        context.elements.iconContainer.style.display = 'none';
        context.elements.nameContainer.style.marginLeft = '16px';
    } else {
        context.elements.iconContainer.style.display = stateStyles.iconContainer.display;
        context.elements.nameContainer.style.marginLeft = stateStyles.iconContainer.marginLeft;
    }

    if (displayedState === '') {
        context.elements.state.style.display = 'none';
    } else if (context.previousState !== displayedState) {
        context.elements.state.style.display = stateStyles.state.display;
        applyScrollingEffect(context.elements.state, displayedState);
        context.previousState = displayedState;
    }
}

const stateStyles = {
    name: {
        display: ''
    },
    iconContainer: {
        display: '',
        marginLeft: ''
    },
    state: {
        display: ''
    }
};

export function changeSubButtonState(context, container = context.content, appendTo = container.firstChild.firstChild, before = false) {
    const subButtons = context.config.sub_button;

    if (!subButtons) {
        return;
    }

    if (!context.previousValues) {
        context.previousValues = {};
    }

    let previousSubButtons = context.previousValues.subButtons || [];

    for (let i = 0; i < subButtons.length; i++) {
        let subButton = subButtons[i];

        if (!subButton) {
            continue;
        }

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
        const showLastUpdated = subButton.show_last_updated ?? false;
        const showIcon = subButton.show_icon ?? true;
        const showBackround = subButton.show_background ?? true;

        if (!context.elements.subButtonContainer) {
            context.elements.subButtonContainer = createElement('div', 'bubble-sub-button-container');
            Object.assign(context.elements.subButtonContainer.style, subButtonStyles.subButtonContainer);
            if (before) {
                appendTo.prepend(context.elements.subButtonContainer);
            } else {
                appendTo.appendChild(context.elements.subButtonContainer);
            }
        }

        if (!context.elements[index]) {
            context.elements[index] = createElement('div', 'bubble-sub-button bubble-sub-button-' + index);
            Object.assign(context.elements[index].style, subButtonStyles.subButton);
            context.elements[index].nameContainer = createElement('div', 'bubble-sub-button-name-container');
            Object.assign(context.elements[index].nameContainer.style, subButtonStyles.nameContainer);
            context.elements[index].appendChild(context.elements[index].nameContainer);
            context.elements.subButtonContainer.appendChild(context.elements[index]);
        }

        if (context.elements[index]?.nameContainer?.innerText !== context.elements[index]?.previousNameContainer) {
            context.elements[index].nameContainer.innerText = '';
            context.elements[index].previousNameContainer = context.elements[index].nameContainer.innerText
        }

        if (showIcon && icon) {
            if (!context.elements[index].icon) context.elements[index].icon = createElement('ha-icon', 'bubble-sub-button-icon');
            context.elements[index].icon.setAttribute('icon', icon);
            context.elements[index].appendChild(context.elements[index].icon);
            context.elements[index].icon.style.setProperty('--mdc-icon-size', '16px');
            context.elements[index].icon.style.marginTop = '-2px';
        } else if (!showIcon && context.elements[index].icon) {
            context.elements[index].icon.style.display = 'none';
        }

        if (showBackround) {
            context.elements[index].style.backgroundColor = backgroundColor;
        } else {
            context.elements[index].style.backgroundColor = '';
        }

        if (subButton.tap_action || subButton.double_tap_action || subButton.hold_action) {
            addActions(context.elements[index], subButton, entity);
        }

        const formattedState = state && showState ? context._hass.formatEntityState(state) : '';
        let formattedAttribute;
        let formattedLastUpdated;
        let displayedState = '';

        if (showAttribute) {
            formattedAttribute = state && attribute ? context._hass.formatEntityAttributeValue(state, attributeType) : '';
        }

        if (showLastUpdated) {
            formattedLastUpdated = state ? formatDateTime(state.last_updated, context._hass.locale.language) : '';
        }

        if (showName && name) {
            if (displayedState) {
                displayedState += ' - ';
            }
            displayedState += name;
        }

        if (formattedState) {
            if (displayedState) {
                displayedState += ' - ';
            }
            displayedState += formattedState;
        }

        if (formattedLastUpdated) {
            if (displayedState) {
                displayedState += (formattedState.toLowerCase() !== 'off') ? ' ' : ' - ';
            }
            displayedState += (formattedState.toLowerCase() === 'off') ? capitalizeFirstLetter(formattedLastUpdated) : formattedLastUpdated;
        }

        if (formattedAttribute) {
            if (displayedState) {
                displayedState += ' - ';
            }
            displayedState += formattedAttribute;
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        displayedState = capitalizeFirstLetter(displayedState);

        if (displayedState === '' && !showIcon) {
            context.elements[index].style.display = 'none';
        } else if (displayedState === '' && showIcon) {
            context.elements[index].style.display = 'flex';
            if (context.elements[index].icon) {
                context.elements[index].icon.style.marginRight = '0';
                context.elements[index].icon.style.setProperty('--mdc-icon-size', '20px');
            }
        } else {
            context.elements[index].style.display = 'flex';
            context.elements[index].nameContainer.innerText = displayedState;
            context.previousState = displayedState;
        }

        if (displayedState && showIcon) {
            context.elements[index].style.display = 'flex';
            context.elements[index].icon.style.marginRight = '4px';
        }
    }
    
    context.previousValues.subButtons = subButtons.slice();

    for (let i = previousSubButtons.length; i > 0; i--) {
        if (i > subButtons.length) {
            let element = context.elements[i];
            if (element) {
                context.elements.subButtonContainer.removeChild(element);
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
        color: 'white',
        borderRadius: '32px',
        padding: '0 8px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        zIndex: '1',
        transition: 'all 0.5s ease-in-out'
    },
    nameContainer: {
        display: 'flex'
    }
};
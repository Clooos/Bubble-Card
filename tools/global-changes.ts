import { addActions } from "../tools/tap-actions.ts";
import { 
    createElement,
    applyScrollingEffect,
    formatDateTime,
    isStateOn,
    getState,
    getAttribute,
    getIcon 
} from './utils.ts';

// export function changeState(context) {
//     // Retrieve configurations and states
//     const buttonType = context.config.button_type;
//     const state = context._hass.states[context.config.entity];
//     const attribute = context.config.attribute ?? '';

//     // Set default display values
//     const defaultShowState = buttonType === 'state';
//     const showName = context.config.show_name ?? true;
//     const showIcon = context.config.show_icon ?? true;
//     const showState = context.config.show_state ?? defaultShowState;
//     const showAttribute = context.config.show_attribute ?? defaultShowState;
//     const showLastUpdated = context.config.show_last_updated ?? '';

//     // Format state and attributes based on button type
//     const formattedState = state && showState ? context._hass.formatEntityState(state) : '';
//     let formattedAttribute;
//     let formattedLastUpdated;

//     if (showAttribute) {
//         if (!attribute) {
//             switch (buttonType) {
//                 case "switch":
//                 case "custom":
//                     formattedLastUpdated = state ? formatDateTime(state.last_updated, context._hass.locale.language) : '';
//                     break;
//                 case "slider":
//                     const attributeKey = isEntityType(context, "cover") ? "current_subButton" :
//                                          isEntityType(context, "light") && state.state !== 'off' ? "brightness" :
//                                          isEntityType(context, "media_player") && state.state !== 'off' ? "volume_level" :
//                                          null;
//                     formattedAttribute = state && attributeKey ? context._hass.formatEntityAttributeValue(state, attributeKey) : '';
//                     break;
//                 default:
//                     formattedAttribute = "";
//             }
//         } else {
//             formattedAttribute = state ? context._hass.formatEntityAttributeValue(state, attribute) : '';
//         }
//     }

//     if (showLastUpdated) {
//         formattedLastUpdated = state ? formatDateTime(state.last_updated, context._hass.locale.language) : '';
//     }

//     let displayedState = '';

//     if (formattedState) {
//         displayedState += formattedState;
//     }

//     if (formattedLastUpdated) {
//         if (displayedState) {
//             // Add a space if formattedState is not 'off', otherwise add a dash
//             displayedState += (formattedState.toLowerCase() !== 'off') ? ' ' : ' - ';
//         }
//         // Capitalize formattedLastUpdated if formattedState is 'off'
//         displayedState += (formattedState.toLowerCase() === 'off') ? capitalizeFirstLetter(formattedLastUpdated) : formattedLastUpdated;
//     }

//     if (formattedAttribute) {
//         if (displayedState) {
//             displayedState += ' - ';
//         }
//         displayedState += formattedAttribute;
//     }

//     // Function to capitalize the first letter of a string
//     function capitalizeFirstLetter(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     // Capitalize the first letter of displayedState
//     displayedState = capitalizeFirstLetter(displayedState);

//     // Update display
//     if (!showName) {
//         context.elements.name.style.display = 'none';
//     } else {
//         context.elements.name.style.display = '';
//     }

//     if (!showIcon) {
//         context.elements.iconContainer.style.display = 'none';
//         context.elements.nameContainer.style.marginLeft = '16px';
//     } else {
//         context.elements.iconContainer.style.display = '';
//         context.elements.nameContainer.style.marginLeft = '';
//     }

//     if (displayedState === '') {
//         context.elements.state.style.display = 'none';
//     } else if (context.previousState !== displayedState) {
//         context.elements.state.style.display = '';
//         context.elements.state.innerText = displayedState;
//         applyScrollingEffect(context.elements.state, displayedState);
//         context.previousState = displayedState;
//     }
// }

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
                // Your existing code...
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
        context.elements.name.style.display = '';
    }

    if (!showIcon) {
        context.elements.iconContainer.style.display = 'none';
        context.elements.nameContainer.style.marginLeft = '16px';
    } else {
        context.elements.iconContainer.style.display = '';
        context.elements.nameContainer.style.marginLeft = '';
    }

    if (displayedState === '') {
        context.elements.state.style.display = 'none';
    } else if (context.previousState !== displayedState) {
        context.elements.state.style.display = '';
        context.elements.state.innerText = displayedState;
        applyScrollingEffect(context.elements.state, displayedState);
        context.previousState = displayedState;
    }
}

export function changeSubButtonState(context) {
    const subButtons = context.config.sub_button;

    if (!subButtons) {
        return;
    }

    if (!context.previousValues) {
        context.previousValues = {};
    }

    // Iterate over each sub button in subButtons
    for (let i = 0; i < subButtons.length; i++) {
        let subButton = subButtons[i];

        if (!subButton) {
            continue;
        }

        const position = subButton.position ?? "1";
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

        // Check if state, attribute or lastUpdated has changed
        if (context.previousValues[position]?.previousState !== state || context.previousValues[position]?.previousAttribute !== attribute || context.previousValues[position]?.previousLastUpdated !== state?.last_updated) {
            // Update previous values
            context.previousValues[position] = {
                previousState: state,
                previousAttribute: attribute,
                previousLastUpdated: state?.last_updated
            };

            // Create sub-button container if it doesn't exist
            if (!context.elements.subButtonContainer) {
                context.elements.subButtonContainer = createElement('div', 'bubble-sub-button-container');
                context.elements.subButtonContainer.style.position = 'relative';
                context.elements.subButtonContainer.style.display = 'flex';
                context.elements.subButtonContainer.style.justifyContent = 'end';
                context.elements.subButtonContainer.style.right = '8px';
                context.elements.subButtonContainer.style.alignContent = 'center';
                context.elements.subButtonContainer.style.gap = '8px';
                context.content.firstChild.firstChild.appendChild(context.elements.subButtonContainer);
            }

            // Create sub-button element if it doesn't exist
            if (!context.elements[position]) {
                context.elements[position] = createElement('div', 'bubble-sub-button-' + position);
                context.elements[position].style.flexWrap = 'nowrap';
                context.elements[position].style.flexDirection = 'row-reverse';
                context.elements[position].style.alignItems = 'center';
                context.elements[position].style.justifyContent = 'center';
                context.elements[position].style.position = 'relative';
                context.elements[position].style.right = '0';
                context.elements[position].style.boxSizing = 'border-box';
                context.elements[position].style.width = 'min-content';
                context.elements[position].style.minWidth = '36px';
                context.elements[position].style.height = '36px';
                context.elements[position].style.verticalAlign = 'middle';
                context.elements[position].style.fontSize = '12px';
                context.elements[position].style.color = 'white';
                context.elements[position].style.borderRadius = '32px';
                context.elements[position].style.padding = '0 8px';
                context.elements[position].style.overflow = 'hidden';
                context.elements[position].style.whiteSpace = 'nowrap';
                context.elements[position].style.zIndex = '1';
                context.elements[position].style.transition = 'all 0.5s ease-in-out';

                context.elements[position].nameContainer = createElement('div', 'bubble-sub-button-name-container');
                context.elements[position].nameContainer.style.display = 'flex';

                context.elements[position].appendChild(context.elements[position].nameContainer);
                context.elements.subButtonContainer.appendChild(context.elements[position]);
            }

            if (showIcon && icon && context.elements[position].previousIcon !== icon) {
                context.elements[position].previousIcon = icon;

                context.elements[position].icon = createElement('ha-icon', 'bubble-sub-button-icon');
                context.elements[position].icon.setAttribute('icon', icon);
                context.elements[position].icon.style.setProperty('--mdc-icon-size', '16px');
                context.elements[position].icon.style.display = 'flex';
                context.elements[position].icon.style.marginRight = '4px';
                context.elements[position].appendChild(context.elements[position].icon);

                // Need to only change attribute on icon, just create it once!!!!
            }

            if (showBackround) {
                context.elements[position].style.backgroundColor = backgroundColor;
            }

            if (subButton.tap_action) {
                addActions(context.elements[position], subButton, entity);
            }

            // Format state and attributes based on button type
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
            if (displayedState === '' && !showIcon) {
                context.elements[position].style.display = 'none';
            } else if (displayedState === '' && showIcon) {
                context.elements[position].style.display = 'flex';
                context.elements[position].icon.style.marginRight = '0';
            } else {
                context.elements[position].style.display = 'flex';
                context.elements[position].nameContainer.innerText = displayedState;
                context.previousState = displayedState;
            }
        }
    }
}

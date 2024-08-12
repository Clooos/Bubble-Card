import { addActions, addFeedback } from "../tools/tap-actions.ts";
import { createDropdownStructure, createDropdownActions } from "../cards/select/create.ts";
import { changeDropdownList } from "../cards/select/changes.ts";
import styles from "../cards/select/styles.ts";
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
    const state = context._hass.states[context.config.entity];
    const attribute = getAttribute(context, context.config.attribute, context.config.entity);
    const lastChanged = state?.last_changed;

    const buttonType = context.config.button_type;
    const defaultShowState = buttonType === 'state';
    const showName = context.config.show_name ?? true;
    const showIcon = context.config.show_icon ?? true;
    const showState = context.config.show_state ?? defaultShowState;
    const showAttribute = context.config.show_attribute ?? defaultShowState;
    const showLastChanged = context.config.show_last_changed ?? context.config.show_last_updated ?? false;
    const scrollingEffect = context.config.scrolling_effect ?? true;

    const previousConfig = context.previousConfig || {};

    const configChanged = (
        context.previousState !== state ||
        context.previousAttribute !== attribute ||
        context.previousLastChanged !== lastChanged ||
        previousConfig.showName !== showName ||
        previousConfig.showIcon !== showIcon ||
        previousConfig.showState !== showState ||
        previousConfig.showAttribute !== showAttribute ||
        previousConfig.showLastChanged !== showLastChanged ||
        previousConfig.scrollingEffect !== scrollingEffect
    );

    if (!configChanged) return;

    let formattedState = state && showState ? context._hass.formatEntityState(state) : '';
    let formattedAttribute = '';
    let formattedLastChanged = '';
    let displayedState = '';

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (showAttribute && attribute) {
        formattedAttribute = state ? context._hass.formatEntityAttributeValue(state, context.config.attribute) ?? attribute : '';
    }

    if (showLastChanged && state) {
        formattedLastChanged = state ? capitalizeFirstLetter(
            formatDateTime(lastChanged, context._hass.locale.language)
        ) : '';
    }

    if (!context.elements.stateStyles) {
        context.elements.stateStyles = createElement('style');
        context.elements.stateStyles.innerText = stateStyles;
        context.content.appendChild(context.elements.stateStyles);

        if (context.config.card_type === 'pop-up') {
            context.elements.buttonContainer.appendChild(context.elements.stateStyles);
        }
    }

    displayedState = formattedState + (formattedAttribute ? `${showState ? ' • ' : ''}${formattedAttribute}` : '') + (formattedLastChanged ? `${showState ? ' • ' : ''}${formattedLastChanged}` : '');

    if (!showName) {
        context.elements.name.classList.add('hidden');
    } else {
        context.elements.name.classList.remove('hidden');
    }

    if (!showIcon) {
        context.elements.iconContainer.classList.add('hidden');
        context.elements.nameContainer.classList.add('name-without-icon');
    } else {
        context.elements.iconContainer.classList.remove('hidden');
        context.elements.nameContainer.classList.remove('name-without-icon');
    }

    if ((showState || showLastChanged || showAttribute) && !showName) {
        context.elements.state.classList.add('state-without-name');
    } else {
        context.elements.state.classList.remove('state-without-name');
    }

    if (showState || showLastChanged || showAttribute) {
        context.elements.state.classList.add('display-state');
        context.elements.state.classList.remove('hidden');
    } else {
        context.elements.state.classList.remove('display-state');
        context.elements.state.classList.add('hidden');
    }

    if (displayedState !== '') {
        applyScrollingEffect(context, context.elements.state, displayedState);
    }

    // Update previous values
    context.previousState = state;
    context.previousAttribute = attribute;
    context.previousConfig = {
        showName,
        showIcon,
        showState,
        showAttribute,
        showLastChanged,
        scrollingEffect,
    };
}

const stateStyles = `
    .hidden {
        display: none;
    }

    .state-without-name {
        opacity: 1;
        font-size: 14px;
    }

    .name-without-icon {
        margin-left: 16px;
    }

    .display-state {
        display: flex;
    }
`;

export function changeSubButtonState(context, container = context.content, appendTo = container.firstChild.firstChild, before = false) {
    const subButtons = context.config.sub_button;
    if (!subButtons) return;

    // Initialize previousValues and elements if not already done
    context.previousValues = context.previousValues || {};
    let previousSubButtons = [...(context.previousValues.subButtons || [])];
    context.elements = context.elements || {};

    // Initialize or reuse subButtonContainer
    const subButtonContainer = context.elements.subButtonContainer ?? createElement('div', 'bubble-sub-button-container');
    if (!context.elements.subButtonContainer && context.config.sub_button) {
        const style = createElement('style');
        style.innerText = subButtonsStyles;
        subButtonContainer.appendChild(style);

        // Append or prepend subButtonContainer
        if (before) {
            appendTo.prepend(subButtonContainer);
        } else {
            appendTo.appendChild(subButtonContainer);
        }
        context.elements.subButtonContainer = subButtonContainer;
    }

    // Process each subButton
    subButtons.forEach((subButton, i) => {
        if (!subButton) return;

        const index = i + 1;
        const entity = subButton.entity ?? context.config.entity;
        const state = context._hass.states[entity];
        const name = subButton.name ?? getAttribute(context, "friendly_name", entity) ?? '';
        const attributeType = subButton.attribute ?? '';
        const attribute = getAttribute(context, attributeType, entity);
        const icon = getIcon(context, subButton.entity, subButton.icon ?? '');
        const isOn = isStateOn(context, entity);

        const showName = subButton.show_name ?? false;
        const showState = subButton.show_state ?? false;
        const showAttribute = subButton.show_attribute ?? false;
        const showLastChanged = (subButton.show_last_changed || subButton.show_last_updated) ?? false;
        const showIcon = subButton.show_icon ?? true;
        const showBackround = subButton.show_background ?? true;
        const showArrow = subButton.show_arrow ?? true;

        const isSelect = entity?.startsWith("input_select") || entity?.startsWith("select");

        // Initialize or reuse subButtonElement
        let subButtonElement = context.elements[index] || createElement('div', 'bubble-sub-button bubble-sub-button-' + index);

        if (!context.elements[index] || (isSelect && !subButtonElement.contains(subButtonElement.dropdownContainer))) {
            // Store the current position of the subButtonElement
            let positionIndex = Array.prototype.indexOf.call(subButtonContainer.children, subButtonElement);

            if (isSelect && !subButtonElement.contains(subButtonElement.dropdownContainer)) {
                if (subButtonContainer.contains(subButtonElement)) {
                    subButtonContainer.removeChild(subButtonElement);
                    subButtonElement = createElement('div', 'bubble-sub-button bubble-sub-button-' + index);
                } 
            }

            subButtonElement.nameContainer = createElement('div', 'bubble-sub-button-name-container');
            subButtonElement.feedbackContainer = createElement('div', 'bubble-feedback-container');
            subButtonElement.feedback = createElement('div', 'bubble-feedback-element feedback-element');

            subButtonElement.appendChild(subButtonElement.feedbackContainer);
            subButtonElement.feedbackContainer.appendChild(subButtonElement.feedback);

            if (isSelect) {
                createDropdownStructure(context, subButtonElement, showArrow);
                subButtonElement.dropdownContainer.style.display = 'none';
                createDropdownActions(context, subButtonElement, entity);
            }

            subButtonElement.appendChild(subButtonElement.nameContainer);

            // Insert the subButtonElement back at its original position
            if (positionIndex >= 0 && positionIndex < subButtonContainer.children.length) {
                subButtonContainer.insertBefore(subButtonElement, subButtonContainer.children[positionIndex]);
            } else {
                subButtonContainer.appendChild(subButtonElement);
            }

            context.elements[index] = subButtonElement;
        }

        if (isSelect) {
            changeDropdownList(context, subButtonElement, entity);

            if (!showArrow) {
                subButtonElement.dropdownArrow.style.display = 'none';
                subButtonElement.dropdownContainer.style.width = '0px';
            } else if (showArrow) {
                subButtonElement.dropdownArrow.style.display = '';
                subButtonElement.dropdownContainer.style.width = '24px';               
            }
        } else if (subButtonElement.contains(subButtonElement.dropdownContainer)) {
            subButtonElement.removeChild(subButtonElement.dropdownContainer);
        }

        // Handle icon display
        if (showIcon && icon) {
            let iconElement = subButtonElement.icon;
            if (!iconElement) {
                iconElement = createElement('ha-icon', 'bubble-sub-button-icon');
                iconElement.classList.add('show-icon');
                subButtonElement.appendChild(iconElement);
                subButtonElement.icon = iconElement;
            }
            if (iconElement.getAttribute('icon') !== icon) {
                iconElement.setAttribute('icon', icon);
            }
            subButtonElement.icon.classList.remove('hidden');
            subButtonElement.icon.classList.add('show-icon');
        } else if (subButtonElement.icon) {
            subButtonElement.icon.classList.remove('show-icon');
            subButtonElement.icon.classList.add('hidden');
        }

        // Handle background display
        if (showBackround) {
            if (isOn) {
                subButtonElement.classList.add('background-on');
                subButtonElement.classList.remove('background-off');
            } else {
                subButtonElement.classList.add('background-off');
                subButtonElement.classList.remove('background-on');
            }
        } else {
            subButtonElement.classList.remove('background-on');
            subButtonElement.classList.remove('background-off');
        }

        // Attach actions if not already done
        if ((subButton.tap_action?.action !== 'none' || subButton.double_tap_action?.action !== 'none' || subButton.hold_action?.action !== 'none') ) {
            if (!subButtonElement.actionAdded) {
                const defaultActions = {
                    tap_action: { action: !isSelect ? "more-info" : "none" },
                    double_tap_action: { action: "none" },
                    hold_action: { action: "none" }
                };
                addActions(subButtonElement, !isSelect ? subButton : '', entity, defaultActions);
                addFeedback(subButtonElement, subButtonElement.feedback);

                if (isSelect) {
                    subButtonElement.style.pointerEvents = "auto";
                    subButtonElement.style.cursor = "pointer";
                }

                subButtonElement.actionAdded = true;
            }
        } 

        // Build the displayed state string
        let displayedState = '';
        const formattedState = state && showState ? context._hass.formatEntityState(state) : '';
        const formattedAttribute = state && attribute !== '' && showAttribute ? context._hass.formatEntityAttributeValue(state, attributeType) ?? attribute : '';
        const formattedLastChanged = state && showLastChanged ? formatDateTime(state.last_changed, context._hass.locale.language) : '';

        if (showName && name !== '') displayedState += name;
        if (formattedState !== '') displayedState += (displayedState ? ' · ' : '') + formattedState;
        if (formattedLastChanged !== '') displayedState += (displayedState ? ' · ' : '') + formattedLastChanged;
        if (formattedAttribute !== '') displayedState += (displayedState ? ' · ' : '') + formattedAttribute;

        displayedState = displayedState.charAt(0).toUpperCase() + displayedState.slice(1);

        // Update the subButtonElement's display
        if (!displayedState && !showIcon && !isSelect) {
            subButtonElement.classList.add('hidden');
            if (subButtonElement.dropdownContainer) {
                subButtonElement.dropdownContainer.classList.remove('no-icon-select-container');
                subButtonElement.dropdownArrow.classList.remove('no-icon-select-arrow');
            }
        } else {
            subButtonElement.classList.remove('hidden');
            if (subButtonElement.nameContainer.innerText !== displayedState) {
                subButtonElement.nameContainer.innerText = displayedState;
            }
            if (showIcon && subButtonElement.icon) {
                if (displayedState) {
                    subButtonElement.icon.classList.add('icon-with-state');
                    subButtonElement.icon.classList.remove('icon-without-state');
                } else {
                    subButtonElement.icon.classList.add('icon-without-state');
                    subButtonElement.icon.classList.remove('icon-with-state');
                }
            }
            if (!displayedState && !showIcon && isSelect) {
                subButtonElement.dropdownContainer.classList.add('no-icon-select-container');
                subButtonElement.dropdownArrow.classList.add('no-icon-select-arrow');
            } else if (isSelect) {
                subButtonElement.dropdownContainer.classList.remove('no-icon-select-container');
                subButtonElement.dropdownArrow.classList.remove('no-icon-select-arrow');             
            }
        }
    });

    // Update context.previousValues with current subButtons
    context.previousValues.subButtons = subButtons.slice();

    // Clean up extra elements not needed
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


const subButtonsStyles = `
    .bubble-sub-button-container {
        position: relative;
        display: flex;
        justify-content: end;
        right: 8px;
        align-content: center;
        gap: 8px;
        align-items: center;
    }
    .bubble-sub-button {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        position: relative;
        right: 0;
        box-sizing: border-box;
        width: min-content;
        min-width: 36px;
        height: 36px;
        vertical-align: middle;
        font-size: 12px;
        border-radius: 32px;
        padding: 0 8px;
        white-space: nowrap;
        transition: all 0.5s ease-in-out;
        color: var(--primary-text-color);
    }
    .bubble-feedback-container {
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 32px;
        overflow: hidden;
        pointer-events: none;
    }
    .bubble-sub-button-name-container {
        display: flex;
    }
    .show-icon {
        display: flex;
        --mdc-icon-size: 16px;
    }
    .background-on {
        background-color: var(--accent-color);
    }
    .background-off {
        background-color: var(--card-background-color, var(--ha-card-background));
    }
    .hidden {
        display: none;
    }
    .icon-with-state {
        margin-right: 4px;
        --mdc-icon-size: 16px;
    }
    .icon-without-state {
        margin-right: 0;
        --mdc-icon-size: 20px;
    }
    .no-icon-select-arrow {
        width: 28px !important;
        height: 28px !important;
        right: 2px !important;        
    }
    .no-icon-select-container {
        width: 16px !important;
    }
`;

export function initializesubButtonIcon(context) {
    if (!Array.isArray(context.subButtonIcon)) {
        context.subButtonIcon = [];
    }

    if (context.config.card_type === 'pop-up') {
        context.popUp.querySelectorAll('.bubble-sub-button-icon').forEach((iconElement, index) => {
            context.subButtonIcon[index] = iconElement;
        }); 
    } else {
        context.content.querySelectorAll('.bubble-sub-button-icon').forEach((iconElement, index) => {
            context.subButtonIcon[index] = iconElement;
        });
    }
}
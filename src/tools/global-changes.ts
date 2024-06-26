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
    const showLastChanged = context.config.show_last_changed ?? context.config.show_last_updated ?? false;

    let formattedState = state && showState ? context._hass.formatEntityState(state) : '';
    let formattedAttribute;
    let formattedLastChanged;

    if (!context.elements.stateStyles) {
        context.elements.stateStyles = createElement('style');
        context.elements.stateStyles.innerText = stateStyles;
        context.content.appendChild(context.elements.stateStyles);
    }

    if (showAttribute && attribute) {
        formattedAttribute = state ? context._hass.formatEntityAttributeValue(state, attribute) ?? attribute : '';
    }

    if (showLastChanged) {
        formattedLastChanged = state ? formatDateTime(state.last_changed, context._hass.locale.language) : '';
    }

    if (formattedState === 'Unknown') {
        formattedState = '';
    }

    if (formattedAttribute === 'Unknown') {
        formattedAttribute = '';
    }

    let displayedState = '';

    if (showState && formattedState) {
        displayedState += formattedState;
    }

    if (showLastChanged && formattedLastChanged) {
        if (displayedState) {
            displayedState += (formattedState.toLowerCase() !== 'off') ? ' ' : ' · ';
        }
        displayedState += (formattedState.toLowerCase() === 'off') ? capitalizeFirstLetter(formattedLastChanged) : formattedLastChanged;
    }

    if (showAttribute && formattedAttribute) {
        if (displayedState) {
            displayedState += ' · ';
        }
        displayedState += formattedAttribute;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    displayedState = capitalizeFirstLetter(displayedState);

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
        context.previousState = displayedState;
    }
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

    context.previousValues = context.previousValues || {};
    let previousSubButtons = [...(context.previousValues.subButtons || [])];
    context.elements = { ...context.elements };

    const subButtonContainer = context.elements.subButtonContainer ?? createElement('div', 'bubble-sub-button-container');
    if (!context.elements.subButtonContainer && context.config.sub_button) {
        const style = createElement('style');
        style.innerText = subButtonsStyles;
        subButtonContainer.appendChild(style);

        if (before) {
            appendTo.prepend(subButtonContainer);
        } else {
            appendTo.appendChild(subButtonContainer);
        }
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
        const icon = getIcon(context, subButton.entity, subButton.icon ?? '');
        const isOn = isStateOn(context, entity);

        const showName = subButton.show_name ?? false;
        const showState = subButton.show_state ?? false;
        const showAttribute = subButton.show_attribute ?? false;
        const showLastChanged = (subButton.show_last_changed || subButton.show_last_updated) ?? false;
        const showIcon = subButton.show_icon ?? true;
        const showBackround = subButton.show_background ?? true;

        let subButtonElement = context.elements[index] || createElement('div', 'bubble-sub-button bubble-sub-button-' + index);
        if (!context.elements[index]) {
            subButtonElement.nameContainer = createElement('div', 'bubble-sub-button-name-container');
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
        const formattedAttribute = state && attribute && showAttribute ? context._hass.formatEntityAttributeValue(state, attributeType) ?? attribute : '';
        const formattedLastChanged = state && showLastChanged ? formatDateTime(state.last_changed, context._hass.locale.language) : '';

        if (showName && name) displayedState += name;
        if (formattedState) displayedState += (displayedState ? ' · ' : '') + formattedState;
        if (formattedLastChanged) displayedState += (displayedState ? ' · ' : '') + formattedLastChanged;
        if (formattedAttribute) displayedState += (displayedState ? ' · ' : '') + formattedAttribute;

        displayedState = displayedState.charAt(0).toUpperCase() + displayedState.slice(1);

        if (!displayedState && !showIcon) {
            subButtonElement.classList.add('hidden');
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
        }
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

const subButtonsStyles = `
    .bubble-sub-button-container {
        position: relative;
        display: flex;
        justify-content: end;
        right: 8px;
        align-content: center;
        gap: 8px;
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
        overflow: hidden;
        white-space: nowrap;
        z-index: 1;
        transition: all 0.5s ease-in-out;
        color: var(--primary-text-color);
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
import { addActions, addFeedback } from "../tools/tap-actions.js";
import { createDropdownStructure, createDropdownActions } from "../cards/select/create.js";
import { changeDropdownList } from "../cards/select/changes.js";
import { getOptionIcon } from "../cards/select/helpers.js";
import styles from "../cards/select/styles.css";
import {
    createElement,
    applyScrollingEffect,
    formatDateTime,
    isStateOn,
    isEntityType,
    getState,
    getAttribute,
    getIcon,
    getIconColor,
    isColorLight
} from './utils.js';
import { 
    checkConditionsMet, 
    validateConditionalConfig, 
    ensureArray 
} from './validate-condition.js';

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
        context.elements.stateStyles.textContent = stateStyles;
        context.content.appendChild(context.elements.stateStyles);

        if (context.config.card_type === 'pop-up') {
            context.elements.buttonContainer.appendChild(context.elements.stateStyles);
        }
    }

    displayedState = [formattedState, formattedAttribute, formattedLastChanged]
        .filter(Boolean)
        .join(' • ');

    context.elements.name.classList.toggle('hidden', !showName);
    context.elements.iconContainer.classList.toggle('hidden', !showIcon);
    context.elements.nameContainer.classList.toggle('name-without-icon', !showIcon);
    context.elements.state.classList.toggle('state-without-name', (showState || showLastChanged || showAttribute) && !showName);
    context.elements.state.classList.toggle('display-state', showState || showLastChanged || showAttribute);
    context.elements.state.classList.toggle('hidden', !(showState || showLastChanged || showAttribute));

    applyScrollingEffect(context, context.elements.state, displayedState);
    
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
        display: none !important;
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
    const previousSubButtons = [...(context.previousValues.subButtons || [])];
    context.elements = context.elements || {};

    let subButtonContainer = context.elements.subButtonContainer;
    if (!subButtonContainer) {
        subButtonContainer = createElement('div', 'bubble-sub-button-container');
        const style = createElement('style');
        style.textContent = subButtonsStyles;
        subButtonContainer.appendChild(style);

        if (before) {
            appendTo.prepend(subButtonContainer);
        } else {
            appendTo.appendChild(subButtonContainer);
        }
        context.elements.subButtonContainer = subButtonContainer;
    }

    if (Array.isArray(subButtons)) {
        subButtons.forEach((subButton, i) => {
            if (!subButton) return;

            const index = i + 1;
            const entity = subButton.entity ?? context.config.entity;
            const state = context._hass.states[entity];
            const name = subButton.name ?? getAttribute(context, "friendly_name", entity) ?? '';
            const attributeType = subButton.attribute ?? '';
            const attribute = getAttribute(context, attributeType, entity);
            const isOn = isStateOn(context, entity);

            if (attributeType === 'fan_modes' && attribute == null) {
                const subButtonElement = context.elements[index] || createElement('div', 'bubble-sub-button bubble-sub-button-' + index);
                subButtonElement.classList.add('hidden');
                return;
            }

            const showName = subButton.show_name ?? false;
            const showState = subButton.show_state ?? false;
            const showAttribute = subButton.show_attribute ?? false;
            const showLastChanged = (subButton.show_last_changed || subButton.show_last_updated) ?? false;
            const showIcon = subButton.show_icon ?? true;
            const showBackground = subButton.show_background ?? true;
            const stateBackground = subButton.state_background ?? true;
            const lightBackground = subButton.light_background ?? true;
            const showArrow = subButton.show_arrow ?? true;

            const isSelect = entity?.startsWith("input_select") || entity?.startsWith("select") || subButton.select_attribute;
            const icon = getIcon(context, subButton.entity, subButton.icon ?? '');

            let subButtonElement = context.elements[index];
            
            if (!subButtonElement || (isSelect && !subButtonElement.dropdownContainer)) {
                let positionIndex = -1;
                if (subButtonElement) positionIndex = Array.prototype.indexOf.call(subButtonContainer.children, subButtonElement);
                 
                if (subButtonElement) {
                    if (isSelect && !subButtonElement.dropdownContainer) {
                        if (subButtonContainer.contains(subButtonElement)) {
                            subButtonContainer.removeChild(subButtonElement);
                            subButtonElement = null;
                        }
                    }
                }

                subButtonElement = createElement('div', 'bubble-sub-button bubble-sub-button-' + index);
                subButtonElement.nameContainer = createElement('div', 'bubble-sub-button-name-container');
                subButtonElement.feedbackContainer = createElement('div', 'bubble-feedback-container');
                subButtonElement.feedback = createElement('div', 'bubble-feedback-element feedback-element');

                subButtonElement.appendChild(subButtonElement.feedbackContainer);
                subButtonElement.feedbackContainer.appendChild(subButtonElement.feedback);

                if (isSelect) {
                    createDropdownStructure(context, subButtonElement, showArrow);
                    subButtonElement.dropdownContainer.style.display = 'none';
                    createDropdownActions(context, subButtonElement, entity, subButton);
                }

                subButtonElement.appendChild(subButtonElement.nameContainer);

                if (positionIndex >= 0 && positionIndex < subButtonContainer.children.length) {
                    subButtonContainer.insertBefore(subButtonElement, subButtonContainer.children[positionIndex]);
                } else {
                    subButtonContainer.appendChild(subButtonElement);
                }
                context.elements[index] = subButtonElement;
            }

            if (isSelect && subButtonElement.dropdownSelect) {
                const currentState = context._hass.states[entity]?.state;
                const previousState = context.previousValues[entity]?.state;

                if (currentState !== previousState) {
                    if (currentState && subButtonElement.dropdownSelect.value !== currentState) {
                        subButtonElement.dropdownSelect.value = currentState;

                        const event = new Event("change", { bubbles: true });
                        subButtonElement.dropdownSelect.dispatchEvent(event);
                    }

                    context.previousValues[entity] = { state: currentState };
                }

                changeDropdownList(context, subButtonElement, entity, subButton);

                if (!showArrow) {
                    subButtonElement.dropdownArrow.style.display = 'none';
                    subButtonElement.dropdownContainer.style.width = '0px';
                    subButtonElement.style.padding = '6px';
                } else {
                    subButtonElement.dropdownArrow.style.display = '';
                    subButtonElement.dropdownContainer.style.width = '24px';
                }
            } else if (subButtonElement.contains(subButtonElement.dropdownContainer)) {
                subButtonElement.removeChild(subButtonElement.dropdownContainer);
            }

            const selectedOption = isSelect && subButtonElement.dropdownSelect ?
                Array.from(subButtonElement.dropdownSelect.children).find(option => option.hasAttribute('selected'))?.value : false;

            if (showIcon && icon) {
                let iconElement = subButtonElement.icon;
                if (!iconElement) {
                    iconElement = createElement('ha-icon', 'bubble-sub-button-icon');
                    iconElement.classList.add('show-icon');
                    subButtonElement.appendChild(iconElement);
                    subButtonElement.icon = iconElement;
                }

                if (selectedOption) {
                    const optionIcon = getOptionIcon(context, state, subButton.select_attribute, selectedOption);
                    if (optionIcon && !subButton.icon) {
                        const isIconDifferent = iconElement.tagName !== optionIcon.tagName || 
                            iconElement.icon !== optionIcon.icon || 
                            iconElement.attribute !== optionIcon.attribute ||
                            iconElement.attributeValue !== optionIcon.attributeValue;
                        if (isIconDifferent) {
                            subButtonElement.replaceChild(optionIcon, iconElement);
                            subButtonElement.icon = optionIcon;
                            iconElement = optionIcon;
                        }
                    } else if (iconElement.icon !== icon) {
                        iconElement.setAttribute('icon', icon);
                    }
                } else if (iconElement.icon !== icon) {
                    iconElement.setAttribute('icon', icon);
                }

                iconElement.classList.remove('hidden');
                iconElement.classList.add('bubble-sub-button-icon', 'show-icon');
            } else if (subButtonElement.icon) {
                subButtonElement.icon.classList.remove('show-icon');
                subButtonElement.icon.classList.add('hidden');
            }

            if (showBackground) {
                const isThemeLight = isColorLight('var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))');
                if (isOn && stateBackground) {
                    if (lightBackground) {
                        subButtonElement.style.setProperty('--bubble-sub-button-light-background-color', getIconColor(context, entity, isThemeLight ? 1 : 0.8));
                    }
                    subButtonElement.classList.add('background-on');
                    subButtonElement.classList.remove('background-off');
                } else {
                    subButtonElement.classList.add('background-off');
                    subButtonElement.classList.remove('background-on');
                }
            } else {
                subButtonElement.classList.remove('background-on', 'background-off');
            }

            if ((subButton.tap_action?.action !== 'none' || subButton.double_tap_action?.action !== 'none' || subButton.hold_action?.action !== 'none')) {
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

            let displayedState = '';
            const formattedState = state && showState ? context._hass.formatEntityState(state) : '';
            const formattedAttribute = state && attribute !== '' && showAttribute ? context._hass.formatEntityAttributeValue(state, attributeType) ?? attribute : '';
            const formattedLastChanged = state && showLastChanged ? formatDateTime(state.last_changed, context._hass.locale.language) : '';

            if (showName && name !== '') displayedState += name;
            if (formattedState !== '') displayedState += (displayedState ? ' · ' : '') + formattedState;
            if (formattedLastChanged !== '') displayedState += (displayedState ? ' · ' : '') + formattedLastChanged;
            if (formattedAttribute !== '') displayedState += (displayedState ? ' · ' : '') + formattedAttribute;

            displayedState = displayedState.charAt(0).toUpperCase() + displayedState.slice(1);

            if (!displayedState && !showIcon && !isSelect) {
                subButtonElement.classList.add('hidden');
                if (subButtonElement.dropdownContainer) {
                    subButtonElement.dropdownContainer.classList.remove('no-icon-select-container');
                    subButtonElement.dropdownArrow.classList.remove('no-icon-select-arrow');
                }
            } else {
                subButtonElement.classList.remove('hidden');
                if (subButtonElement.nameContainer.textContent !== displayedState) {
                    subButtonElement.nameContainer.textContent = displayedState;
                }

                if (showIcon && subButtonElement.icon) {
                    subButtonElement.icon.classList.toggle('icon-with-state', !!displayedState);
                    subButtonElement.icon.classList.toggle('icon-without-state', !displayedState);
                }
                if (!displayedState && !showIcon && isSelect) {
                    subButtonElement.dropdownContainer.classList.add('no-icon-select-container');
                    subButtonElement.dropdownArrow.classList.add('no-icon-select-arrow');
                } else if (isSelect) {
                    subButtonElement.dropdownContainer.classList.remove('no-icon-select-container');
                    subButtonElement.dropdownArrow.classList.remove('no-icon-select-arrow');
                }
            }

            const visibilityConditions = subButton.visibility;
            if (visibilityConditions != undefined) {
                const visibilityConditions_array = ensureArray(visibilityConditions);
                if (validateConditionalConfig(visibilityConditions_array)) {
                    const is_visible = checkConditionsMet(visibilityConditions_array, context._hass);
                    subButtonElement.classList.toggle('hidden', !is_visible);
                }
            }
        });

        context.previousValues.subButtons = subButtons.slice();

        for (let i = previousSubButtons.length; i > 0; i--) {
            if (i > subButtons.length) {
                const element = context.elements[i];
                if (element) {
                    subButtonContainer.removeChild(element);
                    delete context.elements[i];
                }
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
    .large .bubble-sub-button-container{
        display: grid;
        grid-template-rows: repeat(var(--row-size,1), 1fr);
        grid-template-columns: repeat(1, 1fr);
        grid-auto-flow: column;
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
        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));
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
        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));
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
        background-color: var(--bubble-sub-button-light-background-color, var(--accent-color));
    }
    .background-off {
        background-color: var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));
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
    .bubble-dropdown-arrow {
        background: var(--bubble-select-arrow-background-color) !important;
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

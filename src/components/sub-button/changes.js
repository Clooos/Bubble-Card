import { createElement, getAttribute, isStateOn, isColorLight, formatDateTime } from "../../tools/utils.js";
import { createSubButtonElement } from "./create.js";
import { changeDropdownList } from "../dropdown/changes.js";
import { checkConditionsMet, validateConditionalConfig, ensureArray } from "../../tools/validate-condition.js";
import { addActions, addFeedback } from "../../tools/tap-actions.js";
import { getIcon, getIconColor } from "../../tools/icon.js";

function getSubButtonOptions(context, subButton, index) {
  const entity = subButton.entity ?? context.config.entity;
  return {
    index,
    entity,
    context,
    state: context._hass.states[entity],
    name: subButton.name ?? getAttribute(context, "friendly_name", entity) ?? '',
    attributeType: subButton.attribute ?? '',
    attribute: getAttribute(context, subButton.attribute ?? '', entity),
    isOn: isStateOn(context, entity),
    showName: subButton.show_name ?? false,
    showState: subButton.show_state ?? false,
    showAttribute: subButton.show_attribute ?? false,
    showLastChanged: subButton.show_last_changed ?? false,
    showLastUpdated: subButton.show_last_updated ?? false,
    showIcon: subButton.show_icon ?? true,
    showBackground: subButton.show_background ?? true,
    stateBackground: subButton.state_background ?? true,
    lightBackground: subButton.light_background ?? true,
    showArrow: subButton.show_arrow ?? true,
    isSelect: entity?.startsWith("input_select") || entity?.startsWith("select") || subButton.select_attribute,
    icon: getIcon(context, entity, subButton.icon ?? '')
  };
}

function handleDropdown(context, subButtonElement, options) {
  const { isSelect, showArrow, entity, subButton } = options;

  if (isSelect && subButtonElement.dropdownSelect) {
    const currentState = context._hass.states[entity]?.state;
    const previousState = context.previousValues[entity]?.state;

    if (currentState !== previousState) {
      if (currentState && subButtonElement.dropdownSelect.value !== currentState) {
        subButtonElement.dropdownSelect.value = currentState;
        subButtonElement.dropdownSelect.dispatchEvent(new Event("change", { bubbles: true }));
      }
      context.previousValues[entity] = { state: currentState };
    }

    changeDropdownList(context, subButtonElement, entity, subButton);
    updateDropdownArrow(subButtonElement, showArrow);
  } else if (subButtonElement.contains(subButtonElement.dropdownContainer)) {
    subButtonElement.removeChild(subButtonElement.dropdownContainer);
  }
}

function updateDropdownArrow(element, showArrow) {
  if (!showArrow) {
    element.dropdownArrow.style.display = 'none';
    element.dropdownContainer.style.width = '0px';
    element.style.padding = '6px';
  } else {
    element.dropdownArrow.style.display = '';
    element.dropdownContainer.style.width = '24px';
  }
}

function buildDisplayedState(options, context) {
  const { state, name, attribute, attributeType, showName, showState, showAttribute, showLastChanged, showLastUpdated } = options;
  
  const parts = [];
  if (showName && name) parts.push(name);
  if (state && showState) parts.push(context._hass.formatEntityState(state));
  if (state && showLastChanged) parts.push(formatDateTime(state.last_changed, context._hass.locale.language));
  if (state && showLastUpdated) parts.push(formatDateTime(state.last_updated, context._hass.locale.language));
  if (state && showAttribute) {
    const formattedAttribute = context._hass.formatEntityAttributeValue(state, attributeType);
    
    const isZeroWithUnit = formattedAttribute && 
                          (typeof formattedAttribute === 'string') && 
                          formattedAttribute.trim().startsWith('0') && 
                          formattedAttribute.trim().length > 1;
    
    if (attribute !== 0 || isZeroWithUnit) {
      parts.push(formattedAttribute ?? attribute);
    }
  }

  return parts.length ? parts.join(' · ').charAt(0).toUpperCase() + parts.join(' · ').slice(1) : '';
}

function updateElementVisibility(element, options, displayedState) {
  const { showIcon, isSelect } = options;
  
  if (!element._hasVisibilityConditions) {
    const isHidden = !displayedState && !showIcon && !isSelect;
    element.classList.toggle('hidden', isHidden);
  }
  
  if (element.dropdownContainer) {
    element.dropdownContainer.classList.toggle('no-icon-select-container', !displayedState && !showIcon && isSelect);
    element.dropdownArrow.classList.toggle('no-icon-select-arrow', !displayedState && !showIcon && isSelect);
  }
}

function updateBackground(element, options) {
  const { showBackground, isOn, stateBackground, lightBackground, entity, context } = options;
  
  if (!showBackground) {
    element.classList.remove('background-on', 'background-off');
    return;
  }

  const isThemeLight = isColorLight('var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))');
  
  if (isOn && stateBackground) {
    if (lightBackground) {
      element.style.setProperty(
        '--bubble-sub-button-light-background-color', 
        getIconColor(context, entity, isThemeLight ? 1 : 0.8)
      );
    }
    element.classList.add('background-on');
    element.classList.remove('background-off');
  } else {
    element.classList.add('background-off');
    element.classList.remove('background-on');
  }
}

function setupActions(element, options) {
  const { subButton, isSelect, entity } = options;
  const hasActions = subButton.tap_action?.action !== 'none' || 
                    subButton.double_tap_action?.action !== 'none' || 
                    subButton.hold_action?.action !== 'none';

  if (hasActions && !element.actionAdded) {
    const defaultActions = {
      tap_action: { action: !isSelect ? "more-info" : "none" },
      double_tap_action: { action: "none" },
      hold_action: { action: "none" }
    };

    if (!isSelect) {
      addActions(element, !isSelect ? subButton : '', entity, defaultActions);
    } else {
      element.setAttribute("no-slide", "");
    }

    addFeedback(element, element.feedback);

    if (isSelect) {
      element.style.pointerEvents = "auto";
      element.style.cursor = "pointer";
    }

    element.actionAdded = true;
  }
}

export function updateSubButtons(context, subButtons) {
  if (!subButtons) return;

  context.previousValues = context.previousValues || {};
  const previousSubButtons = [...(context.previousValues.subButtons || [])];
  
  subButtons.forEach((subButton, i) => {
    if (!subButton) return;

    const options = getSubButtonOptions(context, subButton, i + 1);
    
    if (options.attributeType === 'fan_modes' && options.attribute == null) {
      const element = context.elements[options.index] || 
                     createElement('div', `bubble-sub-button bubble-sub-button-${options.index}`);
      element.classList.add('hidden');
      return;
    }

    let element = context.elements[options.index];
    if (!element || (options.isSelect && !element.dropdownContainer)) {
      element = createSubButtonElement(context, options.index, options.isSelect, options.showArrow, options.entity, subButton);
    }

    updateSubButtonContent(context, element, { ...options, subButton });
    handleVisibilityConditions(element, subButton, context._hass);
  });

  cleanupOldButtons(context, previousSubButtons, subButtons);
  context.previousValues.subButtons = subButtons.slice();
}

function updateSubButtonContent(context, element, options) {
  handleDropdown(context, element, options);
  updateBackground(element, options);
  setupActions(element, options);

  const displayedState = buildDisplayedState(options, context);
  updateElementVisibility(element, options, displayedState);

  if (element.nameContainer.textContent !== displayedState) {
    element.nameContainer.textContent = displayedState;
  }

  if (options.showIcon && options.icon) {
    if (!element.icon) {
      element.icon = createElement('ha-icon', 'bubble-sub-button-icon');
      element.icon.icon = options.icon;
      element.appendChild(element.icon);
    } else {
      element.icon.icon = options.icon;
    }
    element.icon.classList.toggle('icon-with-state', !!displayedState);
    element.icon.classList.toggle('icon-without-state', !displayedState);
  }

  if (element.icon?.getAttribute('icon') !== element.icon?.icon) {
    element.icon.setAttribute('icon', element.icon.icon);
  }

  const backgroundColor = getComputedStyle(element).getPropertyValue('--bubble-sub-button-light-background-color');
  element.backgroundColor = element.backgroundColor !== backgroundColor ? backgroundColor : element.backgroundColor;

  if (!element) return;

  const isOn = isStateOn(context, options.entity);

  if (element.previousBackgroundColor !== element.backgroundColor || element.previousIsOn !== isOn) {
    const isBackgroundLight = isColorLight(backgroundColor);
    const shouldHaveBrightBackground = isBackgroundLight && backgroundColor !== 'rgba(0, 0, 0, 0)' && backgroundColor !== '' && isOn;
    
    element.classList.toggle("bright-background", shouldHaveBrightBackground);
    
    element.previousBackgroundColor = element.backgroundColor;
    element.previousIsOn = isOn;
  }
}

function handleVisibilityConditions(element, subButton, hass) {
  const conditions = subButton.visibility;
  if (conditions != null) {
    element._hasVisibilityConditions = true;
    const conditionsArray = ensureArray(conditions);
    if (validateConditionalConfig(conditionsArray)) {
      const isVisible = checkConditionsMet(conditionsArray, hass);
      
      if (element._previousVisibilityState === undefined || element._previousVisibilityState !== isVisible) {
        element.classList.toggle('hidden', !isVisible);
        element._previousVisibilityState = isVisible;
      }
    }
  } else {
    element._hasVisibilityConditions = false;
  }
}

function cleanupOldButtons(context, previousButtons, currentButtons) {
  for (let i = previousButtons.length; i > currentButtons.length; i--) {
    const element = context.elements[i];
    if (element) {
      context.elements.subButtonContainer.removeChild(element);
      delete context.elements[i];
    }
  }
}

export function changeSubButtons(context, subButtons = context.config.sub_button) {
  updateSubButtons(context, subButtons);
  initializesubButtonIcon(context);
}

function initializesubButtonIcon(context) {
  if (!Array.isArray(context.subButtonIcon)) {
    context.subButtonIcon = [];
  }

  const container = context.config.card_type === 'pop-up' ? context.popUp : context.content;
  container.querySelectorAll('.bubble-sub-button-icon').forEach((iconElement, index) => {
    context.subButtonIcon[index] = iconElement;
  });
}

export function getSubButtonsStates(context) {
  const subButtons = context.config.sub_button;
  if (!subButtons || !Array.isArray(subButtons)) return [];

  return subButtons.map((subButton) => {
    if (!subButton) return '';
    const entity = subButton.entity ?? context.config.entity;
    return context._hass.states[entity]?.state ?? '';
  });
}
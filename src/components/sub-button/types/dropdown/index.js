import { changeDropdownList } from "../../../dropdown/changes.js";
import { getOptionIcon, getSelectedAttribute } from "../../../dropdown/helpers.js";
import { updateSubButtonIconOrImage } from "../../../../tools/icon.js";
import { buildDisplayedState, updateBackground, setupActions, updateElementVisibility, applySubButtonScrollingEffect } from "../../utils.js";

function updateDropdownArrow(element, showArrow) {
  // Keep default padding so icon-only dropdown buttons match regular sub-button sizing
  element.style.removeProperty('padding');

  if (!showArrow) {
    element.dropdownArrow.style.display = 'none';
    element.dropdownContainer.style.width = '0px';
  } else {
    element.dropdownArrow.style.display = '';
    element.dropdownContainer.style.width = '24px';
  }
}

function syncSelectValue(context, element, entity, subButton) {
  const currentEntity = context._hass.states[entity];
  const selectAttribute = subButton?.select_attribute;
  const currentValue = currentEntity && selectAttribute
    ? getSelectedAttribute(currentEntity, selectAttribute)
    : currentEntity?.state;
  const previousValue = context.previousValues[entity]?.selectedValue;

  if (currentValue !== previousValue) {
    if (currentValue && element.dropdownSelect && element.dropdownSelect.value !== currentValue) {
      element.dropdownSelect.value = currentValue;
      element.dropdownSelect.dispatchEvent(new Event("change", { bubbles: true }));
    }
    context.previousValues[entity] = { selectedValue: currentValue };
  }
}

function getResolvedSelectedOption(options) {
  if (!options.isSelect || !options.state) return false;

  const selectedOption = getSelectedAttribute(options.state, options.subButton.select_attribute);
  return selectedOption ?? false;
}

function clearTransientAttributeIconOverrides(iconElement) {
  if (iconElement.tagName !== 'HA-ATTRIBUTE-ICON') return;

  if (iconElement.getAttribute?.('icon') != null) {
    iconElement.removeAttribute('icon');
  }

  if (typeof iconElement.icon !== 'undefined') {
    try {
      iconElement.icon = '';
    } catch (_) {}
  }

  if (iconElement.style?.color) {
    iconElement.style.color = '';
  }
}

function syncDynamicOptionIcon(element, iconElement, optionIcon, fallbackIcon) {
  const isAttributeIcon = iconElement.tagName === 'HA-ATTRIBUTE-ICON' && optionIcon.tagName === 'HA-ATTRIBUTE-ICON';

  if (isAttributeIcon) {
    const iconChanged =
      iconElement.attribute !== optionIcon.attribute ||
      iconElement.attributeValue !== optionIcon.attributeValue;

    if (iconChanged) {
      iconElement.attribute = optionIcon.attribute;
      iconElement.attributeValue = optionIcon.attributeValue;
      iconElement.hass = optionIcon.hass;
      iconElement.stateObj = optionIcon.stateObj;
    }
    clearTransientAttributeIconOverrides(iconElement);
    return iconElement;
  }

  const currentIcon = iconElement.icon ?? iconElement.getAttribute?.('icon');
  const nextIcon = optionIcon.icon ?? optionIcon.getAttribute?.('icon');
  const isIconDifferent = iconElement.tagName !== optionIcon.tagName || currentIcon !== nextIcon;

  if (isIconDifferent) {
    element.replaceChild(optionIcon, iconElement);
    element.icon = optionIcon;
    return optionIcon;
  }

  if (fallbackIcon && currentIcon !== fallbackIcon) {
    iconElement.setAttribute('icon', fallbackIcon);
  }

  return iconElement;
}

export function handleDropdownSubButton(context, element, options) {
  const { isSelect, showArrow, entity, subButton } = options;

  // Dropdown mounts are handled at creation time; update state, list and arrow here
  if (isSelect && element.dropdownSelect) {
    syncSelectValue(context, element, entity, subButton);
    changeDropdownList(context, element, entity, subButton);
    updateDropdownArrow(element, showArrow);
  }

  const displayedState = buildDisplayedState(options, context, element);
  
  // Always update background (it handles its own optimization like changeIcon)
  updateBackground(element, options);
  
  // Check if displayed state has changed to avoid unnecessary DOM updates for other elements
  const previousDisplayedState = element._previousDisplayedState;
  const previousState = element._previousState;
  const currentState = options.state?.state;
  const displayedStateChanged = previousDisplayedState !== displayedState;
  const entityStateChanged = previousState !== currentState;
  
  // Store current values for next comparison
  element._previousDisplayedState = displayedState;
  element._previousState = currentState;
  
  // Only update other DOM elements if state changed or first update
  if (displayedStateChanged || entityStateChanged || previousDisplayedState === undefined) {
    setupActions(element, options);
    updateElementVisibility(element, options, displayedState);
    if (element.nameContainer) {
      applySubButtonScrollingEffect(context, element.nameContainer, displayedState, options.subButton);
    }
  }

  // Track selected option for dropdown-specific icon logic
  const selectedOption = getResolvedSelectedOption(options);

  // Track if selection or config changed to decide if we need to update the icon
  const prevSelected = element._prevSelectedOption;
  const prevConfigIcon = element._prevConfigIcon;
  const selectionChanged = prevSelected !== selectedOption;
  const configIconChanged = prevConfigIcon !== options.icon;
  
  // Store for next comparison
  element._prevSelectedOption = selectedOption;
  element._prevConfigIcon = options.icon;

  // Handle entity picture and icon display using unified function
  // with dropdown-specific icon update callback
  updateSubButtonIconOrImage(element, options, displayedState, {
    beforeIconUpdate: (iconElement, opts) => {
      // Only update icon if selection or config changed, to preserve external modifications
      if (selectionChanged || configIconChanged || prevSelected === undefined) {
        if (selectedOption) {
          const optionIcon = getOptionIcon(context, opts.state, opts.subButton.select_attribute, selectedOption);
          if (optionIcon && !opts.subButton.icon) {
            return syncDynamicOptionIcon(element, iconElement, optionIcon, opts.icon);
          } else if (iconElement.icon !== opts.icon) {
            iconElement.setAttribute('icon', opts.icon);
          }
        } else if (iconElement.icon !== opts.icon) {
          iconElement.setAttribute('icon', opts.icon);
        }
      }
      return iconElement; // Return current element to indicate it was handled
    }
  });

  // Sync icon attribute if needed (for ha-icon elements)
  if (element.icon?.tagName === 'HA-ICON' && element.icon.getAttribute('icon') !== element.icon.icon) {
    element.icon.setAttribute('icon', element.icon.icon);
  }
}
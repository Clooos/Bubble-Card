import { changeDropdownList } from "../../../dropdown/changes.js";
import { getOptionIcon } from "../../../dropdown/helpers.js";
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

function syncSelectValue(context, element, entity) {
  const currentState = context._hass.states[entity]?.state;
  const previousState = context.previousValues[entity]?.state;

  if (currentState !== previousState) {
    if (currentState && element.dropdownSelect && element.dropdownSelect.value !== currentState) {
      element.dropdownSelect.value = currentState;
      element.dropdownSelect.dispatchEvent(new Event("change", { bubbles: true }));
    }
    context.previousValues[entity] = { state: currentState };
  }
}

export function handleDropdownSubButton(context, element, options) {
  const { isSelect, showArrow, entity, subButton } = options;

  // Dropdown mounts are handled at creation time; update state, list and arrow here
  if (isSelect && element.dropdownSelect) {
    syncSelectValue(context, element, entity);
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
  const selectedOption = isSelect && element.dropdownSelect
    ? Array.from(element.dropdownSelect.children).find(option => option.hasAttribute('selected'))?.value
    : false;

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
            const isIconDifferent = iconElement.tagName !== optionIcon.tagName || 
              iconElement.icon !== optionIcon.icon || 
              iconElement.getAttribute?.('attribute') !== optionIcon.getAttribute?.('attribute') ||
              iconElement.getAttribute?.('attributeValue') !== optionIcon.getAttribute?.('attributeValue');
            if (isIconDifferent) {
              element.replaceChild(optionIcon, iconElement);
              element.icon = optionIcon;
              return optionIcon;
            }
            return iconElement; // No change needed
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
  if (element.icon?.getAttribute('icon') !== element.icon?.icon) {
    element.icon.setAttribute('icon', element.icon.icon);
  }
}
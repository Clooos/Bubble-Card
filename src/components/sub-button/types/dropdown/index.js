import { changeDropdownList } from "../../../dropdown/changes.js";
import { getOptionIcon } from "../../../dropdown/helpers.js";
import { buildDisplayedState, updateBackground, setupActions, updateElementVisibility, updateIconClasses, applySubButtonScrollingEffect } from "../../utils.js";

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
  
  // Check if displayed state has changed to avoid unnecessary DOM updates
  const previousDisplayedState = element._previousDisplayedState;
  const previousState = element._previousState;
  const currentState = options.state?.state;
  const displayedStateChanged = previousDisplayedState !== displayedState;
  const entityStateChanged = previousState !== currentState;
  
  // Store current values for next comparison
  element._previousDisplayedState = displayedState;
  element._previousState = currentState;
  
  // Only update DOM if displayed state changed, entity state changed, or if this is the first update
  if (displayedStateChanged || entityStateChanged || previousDisplayedState === undefined) {
    updateBackground(element, options);
    setupActions(element, options);
    updateElementVisibility(element, options, displayedState);
    if (element.nameContainer) {
      applySubButtonScrollingEffect(context, element.nameContainer, displayedState, options.subButton);
    }
  }

  // Icon logic with optional per-option override
  const selectedOption = isSelect && element.dropdownSelect
    ? Array.from(element.dropdownSelect.children).find(option => option.hasAttribute('selected'))?.value
    : false;
  const selectedItemEl = isSelect && element.dropdownSelect
    ? Array.from(element.dropdownSelect.children).find(option => option.hasAttribute('selected'))
    : null;
  const selectedItemIconEl = selectedItemEl ? selectedItemEl.querySelector('ha-icon, ha-attribute-icon') : null;
  const selectedItemIconTag = selectedItemIconEl?.tagName || '';
  const selectedItemIconName = selectedItemIconEl?.icon || selectedItemIconEl?.getAttribute?.('icon') || '';
  const selectedItemAttr = selectedItemIconEl?.getAttribute?.('attribute') || '';
  const selectedItemAttrVal = selectedItemIconEl?.getAttribute?.('attributeValue') || '';
  const selectedItemColor = selectedItemIconEl?.style?.color || '';
  const hasItemIcon = !!(selectedItemIconEl && !options.subButton.icon);

  // Compute a stable target signature to avoid re-writing icon DOM when nothing really changed
  const hasOptionIcon = !!(isSelect && selectedOption && !options.subButton.icon && getOptionIcon(context, options.state, options.subButton.select_attribute, selectedOption));
  const targetIconType = hasItemIcon ? 'item' : (hasOptionIcon ? 'option' : 'config');
  const targetIconKey = hasItemIcon
    ? `${selectedItemIconTag}:${selectedItemIconName}:${selectedItemAttr}:${selectedItemAttrVal}:${selectedItemColor}`
    : (hasOptionIcon ? `${options.subButton.select_attribute}:${selectedOption}` : (options.icon || ''));

  // Optimization: avoid rewriting the icon DOM when neither the selected option nor the configured icon changed.
  // This prevents fighting with external customizers (e.g., modules) that adjust the sub-button icon.
  if (options.showIcon && element.icon) {
    const prevSelected = element._prevSelectedOption;
    const prevConfigIcon = element._prevConfigIcon;
    const prevType = element._prevIconType;
    const prevKey = element._prevIconKey;
    const needAttrSync = element.icon && element.icon.tagName === 'HA-ICON' && (element.icon.getAttribute('icon') !== element.icon.icon);
    const nothingChanged = prevSelected === selectedOption && prevConfigIcon === options.icon && prevType === targetIconType && prevKey === targetIconKey;
    const canSkipIconUpdate = nothingChanged && !needAttrSync;
    if (canSkipIconUpdate) {
      // Keep visual classes in sync without touching icon content
      updateIconClasses(element.icon, displayedState);
      element._prevSelectedOption = selectedOption;
      element._prevConfigIcon = options.icon;
      element._prevIconType = targetIconType;
      element._prevIconKey = targetIconKey;
      return;
    }
  }

  if (options.showIcon && hasItemIcon) {
    // Mirror the icon present on the selected dropdown item (respects custom modules)
    let iconElement = element.icon;
    const isAttrIcon = selectedItemIconTag === 'HA-ATTRIBUTE-ICON';
    if (!iconElement || (isAttrIcon && iconElement.tagName !== 'HA-ATTRIBUTE-ICON') || (!isAttrIcon && iconElement.tagName !== 'HA-ICON')) {
      const newIcon = document.createElement(isAttrIcon ? 'ha-attribute-icon' : 'ha-icon');
      if (iconElement) {
        element.replaceChild(newIcon, iconElement);
      } else {
        element.appendChild(newIcon);
      }
      element.icon = newIcon;
      iconElement = newIcon;
    }
    if (iconElement.tagName === 'HA-ATTRIBUTE-ICON') {
      if (iconElement.getAttribute('attribute') !== selectedItemAttr) iconElement.setAttribute('attribute', selectedItemAttr);
      if (iconElement.getAttribute('attributeValue') !== selectedItemAttrVal) iconElement.setAttribute('attributeValue', selectedItemAttrVal);
      // Ensure dynamic props are set
      iconElement.hass = context._hass;
      iconElement.stateObj = options.state;
    } else {
      const needIcon = (iconElement.getAttribute('icon') || iconElement.icon || '') !== selectedItemIconName;
      if (needIcon) {
        iconElement.setAttribute('icon', selectedItemIconName || '');
        iconElement.icon = selectedItemIconName || '';
      }
      const currentColor = iconElement.style?.color || '';
      if (currentColor !== selectedItemColor) {
        iconElement.style.color = selectedItemColor || '';
      }
    }

    updateIconClasses(iconElement, displayedState);

  } else if (options.showIcon && options.icon && !hasOptionIcon) {
    let iconElement = element.icon;
    if (!iconElement) {
      iconElement = document.createElement('ha-icon');
      iconElement.classList.add('bubble-sub-button-icon');
      iconElement.classList.add('show-icon');
      element.appendChild(iconElement);
      element.icon = iconElement;
    }

    if (iconElement.icon !== options.icon || iconElement.getAttribute('icon') !== options.icon) {
      iconElement.setAttribute('icon', options.icon);
      iconElement.icon = options.icon;
    }

    updateIconClasses(iconElement, displayedState);
  } else if (options.showIcon && hasOptionIcon) {
    // Render attribute-based icon once and only replace if type/key changed
    const optionIcon = getOptionIcon(context, options.state, options.subButton.select_attribute, selectedOption);
    let iconElement = element.icon;
    const differs = !iconElement || iconElement.tagName !== optionIcon.tagName ||
      iconElement.icon !== optionIcon.icon ||
      iconElement.attribute !== optionIcon.attribute ||
      iconElement.attributeValue !== optionIcon.attributeValue;
    if (differs) {
      if (iconElement) {
        element.replaceChild(optionIcon, iconElement);
      } else {
        element.appendChild(optionIcon);
      }
      element.icon = optionIcon;
      iconElement = optionIcon;
    }
    updateIconClasses(iconElement, displayedState);
  } else if (element.icon) {
    element.icon.classList.remove('show-icon');
    element.icon.classList.add('hidden');
  }

  // Persist last applied identity to avoid unnecessary work next updates
  element._prevSelectedOption = selectedOption;
  element._prevConfigIcon = options.icon;
  element._prevIconType = targetIconType;
  element._prevIconKey = targetIconKey;
}
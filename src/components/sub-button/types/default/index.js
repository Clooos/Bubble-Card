import { buildDisplayedState, updateBackground, setupActions, updateElementVisibility, updateIconClasses, applySubButtonScrollingEffect } from "../../utils.js";

export function handleDefaultSubButton(context, element, options) {
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

  if (options.showIcon && options.icon) {
    let iconElement = element.icon;
    if (!iconElement) {
      iconElement = document.createElement('ha-icon');
      iconElement.classList.add('bubble-sub-button-icon');
      iconElement.classList.add('show-icon');
      element.appendChild(iconElement);
      element.icon = iconElement;
    }
    if (iconElement.icon !== options.icon) {
      iconElement.setAttribute('icon', options.icon);
    }
    updateIconClasses(iconElement, displayedState);
  } else if (element.icon) {
    element.icon.classList.remove('show-icon');
    element.icon.classList.add('hidden');
  }

  if (element.icon?.getAttribute('icon') !== element.icon?.icon) {
    element.icon.setAttribute('icon', element.icon.icon);
  }
}





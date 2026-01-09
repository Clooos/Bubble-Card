import { updateSubButtonIconOrImage } from "../../../../tools/icon.js";
import { buildDisplayedState, updateBackground, setupActions, updateElementVisibility, applySubButtonScrollingEffect } from "../../utils.js";

export function handleDefaultSubButton(context, element, options) {
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

  // Handle entity picture and icon display using unified function
  updateSubButtonIconOrImage(element, options, displayedState);

  if (element.icon?.getAttribute('icon') !== element.icon?.icon) {
    element.icon.setAttribute('icon', element.icon.icon);
  }
}





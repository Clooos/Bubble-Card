import { buildDisplayedState, updateBackground, setupActions, updateElementVisibility, updateIconClasses, applySubButtonScrollingEffect } from "../../utils.js";

export function handleDefaultSubButton(context, element, options) {
  updateBackground(element, options);
  setupActions(element, options);

  const displayedState = buildDisplayedState(options, context, element);
  updateElementVisibility(element, options, displayedState);
  if (element.nameContainer) {
    applySubButtonScrollingEffect(context, element.nameContainer, displayedState, options.subButton);
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





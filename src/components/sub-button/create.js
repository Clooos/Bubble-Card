import { createElement } from "../../tools/utils.js";
import { createDropdownStructure, createDropdownActions } from "../dropdown/index.js";
import styles from "./styles.css";

export function createSubButtonStructure(context, options = {}) {
  const {
    container = context.content,
    appendTo = container.firstChild?.firstChild,
    before = false
  } = options;

  context.elements = context.elements || {};

  let subButtonContainer = context.elements.subButtonContainer;
  if (!subButtonContainer && context.config.sub_button) {
    subButtonContainer = createElement('div', 'bubble-sub-button-container');
    const style = createElement('style');
    style.textContent = styles;
    subButtonContainer.appendChild(style);

    if (before && appendTo) {
      appendTo.prepend(subButtonContainer);
    } else if (appendTo) {
      appendTo.appendChild(subButtonContainer);
    }
    context.elements.subButtonContainer = subButtonContainer;
  }

  return subButtonContainer;
}

export function createSubButtonElement(context, index, isSelect, showArrow, entity, subButton) {
  if (!context.elements.subButtonContainer) {
    createSubButtonStructure(context);
  }

  const subButtonElement = createElement('div', `bubble-sub-button bubble-sub-button-${index}`);
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
  context.elements.subButtonContainer.appendChild(subButtonElement);
  context.elements[index] = subButtonElement;

  return subButtonElement;
}
import { createBaseStructure } from "../../components/base-card/index.js";
import { createElement } from "../../tools/utils.js";
import styles from "./styles.css";

export function createStructure(context) {
  const cardType = 'separator';

  context.elements = {};
  context.elements.mainContainer = createElement('div', 'bubble-container bubble-separator separator-container');
  context.elements.icon = createElement('ha-icon', 'bubble-icon');
  context.elements.name = createElement('h4', 'bubble-name');
  context.elements.line = createElement('div', 'bubble-line');
  //context.elements.subButtonContainer = createElement('div', 'bubble-sub-button-container');

  context.elements.mainContainer.appendChild(context.elements.icon);
  context.elements.mainContainer.appendChild(context.elements.name);
  context.elements.mainContainer.appendChild(context.elements.line);
  //context.elements.mainContainer.appendChild(context.elements.subButtonContainer);

  const elements = createBaseStructure(context, {
    type: cardType,
    styles: styles,
    withMainContainer: false,
    withBaseElements: false,
    withSubButtons: true,
    iconActions: false
  });

  context.cardType = cardType;
}
import { createElement } from "../../tools/utils.ts";
import { addActions } from "../../tools/tap-actions.ts";
import styles from "./styles.ts";

export function createStructure(context) {
  context.elements = {};
  context.elements.separatorCard = createElement('div', 'bubble-separator separator-container');

  context.elements.icon = createElement('ha-icon', 'bubble-icon');
  context.elements.name = createElement('h4', 'bubble-name');
  context.elements.line = createElement('div', 'bubble-line');

  context.elements.style = createElement('style');
  context.elements.style.innerText = styles;
  context.elements.customStyle = createElement('style');

  context.elements.separatorCard.appendChild(context.elements.icon);
  context.elements.separatorCard.appendChild(context.elements.name);
  context.elements.separatorCard.appendChild(context.elements.line);

  context.content.innerHTML = '';
  context.content.appendChild(context.elements.separatorCard);
  context.content.appendChild(context.elements.style);
  context.content.appendChild(context.elements.customStyle);

  context.cardType = "separator";
}
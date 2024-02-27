import { createElement } from "../../tools/utils.ts";
import styles from "./styles.ts";

export function createStructure(context) {
  context.elements = {};
  context.elements.emptyColumnCard = createElement('div', 'bubble-empty-column empty-column');

  context.elements.style = createElement('style');
  context.elements.style.innerText = styles;
  context.elements.customStyle = createElement('style');

  context.content.innerHTML = '';
  context.content.appendChild(context.elements.emptyColumnCard);
  context.content.appendChild(context.elements.style);
  context.content.appendChild(context.elements.customStyle);

  context.cardType = "empty-column";
}

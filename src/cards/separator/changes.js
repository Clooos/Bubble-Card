import { getName, setLayout } from "../../tools/utils.js";
import { getIcon } from '../../tools/icon.js';
import { handleCustomStyles } from '../../tools/style-processor.js';

export function changeIcon(context) {
  context.elements.icon.icon = getIcon(context);
  if (context.elements.icon.icon === '' && context.elements.icon.style.margin === "") { 
    context.elements.icon.style.margin = "0px 8px";
    context.elements.icon.style.width = "0px";
  } else if (context.elements.icon.icon !== "" && context.elements.icon.style.margin === "0px 8px") {
    context.elements.icon.style.margin = "";
    context.elements.icon.style.width = "";
  }
}
export function changeName(context) {
  const name = getName(context);
  if (name !== context.elements.name.innerText) {
      context.elements.name.innerText = name;
  }
}
export function changeStyle(context) {
    setLayout(context);
    handleCustomStyles(context);
}
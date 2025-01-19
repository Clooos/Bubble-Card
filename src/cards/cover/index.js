import { changeState, changeSubButtonState } from "../../tools/global-changes.js";
import {
  changeIcon,
  changeName,
  changeStyle,
} from './changes.js'
import { createStructure } from './create.js';

export function handleCover(context) {
    if (context.cardType !== "cover") {
        createStructure(context);
    }

    changeIcon(context);
    changeName(context);
    changeState(context);
    changeSubButtonState(context, context.content, context.elements.headerContainer);
    changeStyle(context);
}

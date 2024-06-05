import { changeState, changeSubButtonState } from "../../tools/global-changes.ts";
import {
  changeIcon,
  changeName,
  changeStyle,
} from './changes.ts'
import { createStructure } from './create.ts';

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

import { changeSubButtonState } from "../../tools/global-changes.js";
import { changeState } from "../../tools/global-changes.js";
import { 
    changeIcon, 
    changeName, 
    changeStyle 
} from './changes.js'
import { createStructure } from './create.js';

export function handleSeparator(context) {
    if (context.cardType !== "separator") {
        createStructure(context);
    }

    changeIcon(context);
    changeName(context);
    changeSubButtonState(context, context.content, context.elements.separatorCard);
    changeStyle(context);
}

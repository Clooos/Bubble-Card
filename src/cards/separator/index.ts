import { changeSubButtonState } from "../../tools/global-changes.ts";
import { changeState } from "../../tools/global-changes.ts";
import { 
    changeIcon, 
    changeName, 
    changeStyle 
} from './changes.ts'
import { createStructure } from './create.ts';

export function handleSeparator(context) {
    if (context.cardType !== "separator") {
        createStructure(context);
    }

    changeIcon(context);
    changeName(context);
    changeSubButtonState(context, context.content, context.elements.separatorCard);
    changeStyle(context);
}

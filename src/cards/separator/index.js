import { createStructure } from './create.js';
import { changeSubButtons } from "../../components/sub-button/changes.js";
import { changeName } from "../../components/base-card/changes.js";
import { 
    changeIcon, 
    changeStyle 
} from './changes.js'

export function handleSeparator(context) {
    if (context.cardType !== "separator") {
        createStructure(context);
    }

    changeIcon(context);
    changeName(context, false);
    changeSubButtons(context);
    changeStyle(context);
}

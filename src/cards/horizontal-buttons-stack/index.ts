import { changeConfig, changeEditor, changeLight, changeStatus, changeStyle, placeButtons, sortButtons } from './changes.ts';
import { createStructure } from './create.ts';
import { configChanged } from "../../tools/utils.ts";

export function handleHorizontalButtonsStack(context) {
    if (context.cardType !== "horizontal-buttons-stack") {
        createStructure(context);
    }

    changeStyle(context);
    sortButtons(context);
    changeConfig(context);
    changeEditor(context);
    placeButtons(context);
    changeLight(context);
    changeStatus(context);
}
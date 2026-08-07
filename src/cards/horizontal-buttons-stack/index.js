import { changeConfig, changeEditor, changeLight, changeStatus, changeStyle, placeButtons, sortButtons } from './changes.js';
import { createStructure } from './create.js';
import { syncButtonHighlightListener } from './highlight.js';
import { configChanged } from "../../tools/utils.js";

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
    // Last, so the button list it walks is the one placeButtons just settled.
    syncButtonHighlightListener(context);
}
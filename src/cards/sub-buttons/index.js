import { changeSubButtons } from "../../components/sub-button/changes.js";
import { changeStyle, changeEditor } from './changes.js';
import { createStructure } from './create.js';
import { ensureNewSubButtonsSchemaObject } from "../../components/sub-button/utils.js";

export function handleSubButtons(context, appendTo = context.content) {
    if (context.cardType !== 'sub-buttons') {
        createStructure(context, appendTo);
    }

    // Block main sub-buttons: only allow bottom sub-buttons
    const originalSubButtons = context.config.sub_button;
    if (originalSubButtons) {
        const sectioned = ensureNewSubButtonsSchemaObject(context.config);
        // Only keep bottom sub-buttons
        context.config.sub_button = { main: [], bottom: sectioned.bottom || [] };
    }

    changeSubButtons(context);
    
    // Restore original config
    context.config.sub_button = originalSubButtons;

    changeStyle(context);
    changeEditor(context);
}

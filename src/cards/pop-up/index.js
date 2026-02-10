import { changeEditor, changeStyle, changeTriggered } from './changes.js';
import { createHeader, createStructure, prepareStructure } from './create.js';
import { handleButton } from "../../cards/button/index.js";
import { ensureNewSubButtonsSchemaObject } from "../../components/sub-button/utils.js";
import { initPopUpHashNavigationBridge, registerPopUpHash } from "./navigation-picker-bridge.js";

initPopUpHashNavigationBridge();

export async function handlePopUp(context) {
    registerPopUpHash(context.config?.hash, {
        name: context.config?.name,
        icon: context.config?.icon,
        isConnected: context.isConnected,
        element: context.editor ? null : context
    });

    if (context.cardType !== "pop-up") {
        if ((context.getRootNode() instanceof ShadowRoot) === false) {
            // The card is not added in the DOM
            return;
        }

        prepareStructure(context);
        if (!context.popUp) return;
        createHeader(context);
        createStructure(context);

        // Pre-initialize header content when background_update is enabled
        // This ensures the header button is ready before the popup opens
        if (context.config.background_update && !context.headerInitialized) {
            if (context.config.entity || context.config.name || context.config.icon) {
                const originalSubButtons = context.config.sub_button;
                if (originalSubButtons) {
                    const sectioned = ensureNewSubButtonsSchemaObject(context.config);
                    context.config.sub_button = { main: sectioned.main || [], bottom: [] };
                }

                handleButton(context, context.elements.header);

                context.config.sub_button = originalSubButtons;
            }
            changeStyle(context);
            context.headerInitialized = true;
        }
    } else if (context.popUp && context.elements) {
        // Update header when popup hash matches or in editor mode
        // Also update on first call when background_update is enabled to ensure initialization
        const shouldUpdateHeader = context.config.hash === location.hash || 
                                   context.editor || 
                                   (context.config.background_update && !context.headerInitialized);

        if (shouldUpdateHeader) {
            if (context.config.entity || context.config.name || context.config.icon) {
                // Block bottom sub-buttons: only allow main sub-buttons
                const originalSubButtons = context.config.sub_button;
                if (originalSubButtons) {
                    const sectioned = ensureNewSubButtonsSchemaObject(context.config);
                    // Only keep main sub-buttons
                    context.config.sub_button = { main: sectioned.main || [], bottom: [] };
                }

                handleButton(context, context.elements.header);
                
                // Restore original config
                context.config.sub_button = originalSubButtons;
            }

            changeStyle(context);

            if (context.config.background_update) {
                context.headerInitialized = true;
            }
        }

        if (!context.editor) {
            changeTriggered(context);
        }
        
        changeEditor(context);
    }
}
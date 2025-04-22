import { getBackdrop } from "./create.js";
import { addHash, onEditorChange, removeHash, closePopup } from "./helpers.js";
import { checkConditionsMet, validateConditionalConfig, ensureArray } from '../../tools/validate-condition.js';
import { handleCustomStyles } from '../../tools/style-processor.js';
import { toggleBodyScroll } from "../../tools/utils.js";

export function changeEditor(context) {
    if (!context.verticalStack) return;

    const { popUp, sectionRow, sectionRowContainer, elements } = context;
    const popUpClasses = popUp?.classList;
    const isPopUpOpened = popUp?.classList.contains('is-popup-opened');
    const isCard = sectionRow?.tagName.toLowerCase() === 'hui-card';
    const isEditorActive = context.editor || context.detectedEditor;
    const wasEditorActive = context.previousEditorState;
    
    if (context.detectedEditor && !context.dialogClosedListenerAdded) {
        window.addEventListener("dialog-closed", (e) => {
            const dialogEvent = e.detail?.dialog;
            if (dialogEvent !== 'hui-dialog-edit-card') {
                return;
            }

            if (elements?.popUpContainer) {
                elements.popUpContainer.classList.add('editor-cropped');
            }
        }, { once: true });
        context.dialogClosedListenerAdded = true;
    }

    if (!isPopUpOpened && isCard && sectionRowContainer) {
        if (sectionRowContainer.classList.contains('card') && isEditorActive && sectionRowContainer.style.display === "none") {
            sectionRowContainer.style.display = '';
        }
    }

    // Editor just opened
    if (isEditorActive) {
        if (!popUpClasses?.contains('editor')) {
            toggleBodyScroll(false);
            
            if (popUpClasses) {
                popUpClasses.remove('is-popup-opened');
                popUpClasses.add('is-popup-closed', 'editor');
            }

            if (!context.detectedEditor && elements?.popUpContainer) {
                elements.popUpContainer.classList.add('editor-cropped');
            }
        }
        
        context.editorAccess = true;
    } 
    
    // Editor just closed
    else if (popUpClasses?.contains('editor')) {
        popUpClasses.remove('editor');
        
        if (elements?.popUpContainer) {
            elements.popUpContainer.classList.remove('editor-cropped');
        }

        if (context.observer) {
            context.observer.disconnect();
            context.observer = null;
        }

        if (context.verticalStack.contains(context.popUp)) {
            closePopup(context, true);
        }
        
        context.editorAccess = false;
        context.dialogClosedListenerAdded = false;
        
        context.previousEditorState = isEditorActive;
    }

    if (context.editor && !context.detectedEditor && (isEditorActive !== wasEditorActive) && isEditorActive) {
        onEditorChange(context);
        context.previousEditorState = isEditorActive;
    }
}

export function changeStyle(context) {
    const { backdropCustomStyle } = getBackdrop(context);

    handleCustomStyles(context, context.popUp);
    handleCustomStyles(context, backdropCustomStyle);

    const layoutClass = context.config.card_layout ?? 'large';
    const needsLarge = layoutClass === 'large' || layoutClass === 'large-2-rows';
    const needsRows2 = layoutClass === 'large-2-rows';

    if (needsLarge !== context.popUp.classList.contains('large')) {
        context.popUp.classList.toggle('large', needsLarge);
    }
    if (needsRows2 !== context.popUp.classList.contains('rows-2')) {
        context.popUp.classList.toggle('rows-2', needsRows2);
    }

    const showHeader = context.config.show_header ?? true;
    if (context.popUp.classList.contains('no-header') === showHeader) {
        context.popUp.classList.toggle('no-header', !showHeader);
    }
}

export function changeTriggered(context) {
    const triggerConditions = context.config.trigger;
    const triggerClose = context.config.trigger_close ?? true;

    if (triggerConditions) {
        const isInitialLoad = !context.hasPageLoaded;
        context.hasPageLoaded = true;

        //Check conditions
        const triggerConditions_array = ensureArray(triggerConditions);
        if (triggerConditions_array.length === 0) {
            context.previousTrigger = false;
            return;
        }

        if (validateConditionalConfig(triggerConditions_array)){
            const trigger = checkConditionsMet(triggerConditions_array,context._hass);

            if (trigger === context.previousTrigger) return;

            if (context.config.hash === location.hash) {
                if (!trigger && !isInitialLoad && triggerClose) {
                    removeHash();
                }
            } else {
                if (trigger) {
                    addHash(context.config.hash);
                }
            }  

            context.previousTrigger = trigger;          
        }
    } else {
        // Deprecated method
        let triggerEntity = context.config.trigger_entity ?? '';

        if (triggerEntity === '') return;

        let triggerState = context.config.trigger_state ?? '';
        let triggerClose = context.config.trigger_close ?? false;
        let triggerEntityState = context._hass.states[triggerEntity]?.state;

        if (!triggerEntity) return;
        if (!triggerState) return;
        if (context.oldTriggerEntityState === triggerEntityState) return;

        const isInitialLoad = !context.hasPageLoaded;
        context.hasPageLoaded = true;

        if (context.config.hash === location.hash) {
            if (triggerClose && triggerState !== triggerEntityState) {
                if (!isInitialLoad) {
                    removeHash();
                }
            }
        } else {
            if (triggerEntityState === triggerState) {
                addHash(context.config.hash);
            }
        }

        context.oldTriggerEntityState = triggerEntityState;        
    }
}

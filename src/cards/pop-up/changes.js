import { getBackdrop } from "./create.js";
import { addHash, onEditorChange, removeHash, closePopup } from "./helpers.js";
import { checkConditionsMet, validateConditionalConfig, ensureArray } from '../../tools/validate-condition.js';
import { handleCustomStyles } from '../../tools/style-processor.js';
import { toggleBodyScroll, setLayout } from "../../tools/utils.js";

export function changeEditor(context) {
    if (!context.verticalStack || !context.popUp) return;

    const { popUp, sectionRow, sectionRowContainer, elements, config } = context;
    const popUpClasses = popUp.classList;
    const isCard = sectionRow?.tagName.toLowerCase() === 'hui-card';
    const isHAEditorModeActive = context.editor || context.detectedEditor;

    if (context.detectedEditor && !context.dialogClosedListenerAdded) {
        window.addEventListener("dialog-closed", () => {
            if (elements?.popUpContainer) {
                elements.popUpContainer.classList.add('editor-cropped');
            }
        }, { once: true });
        context.dialogClosedListenerAdded = true;
    } else if (!context.detectedEditor && context.dialogClosedListenerAdded) {
        context.dialogClosedListenerAdded = false;
    }

    const isPopUpEffectivelyOpened = popUpClasses.contains('is-popup-opened') && !popUpClasses.contains('editor');
    if (!isPopUpEffectivelyOpened && isCard && sectionRowContainer) {
        if (sectionRowContainer.classList.contains('card') && isHAEditorModeActive && sectionRowContainer.style.display === "none") {
            sectionRowContainer.style.display = '';
        }
    }

    if (isHAEditorModeActive) {
        if (!context.editorAccess) {
            toggleBodyScroll(false);
            
            popUpClasses.remove('is-popup-opened');
            popUpClasses.add('is-popup-closed', 'editor');

            if (elements?.content) {
                elements.content.classList.add('popup-content-in-editor-mode');
            }

            if (!context.detectedEditor && elements?.popUpContainer) {
                elements.popUpContainer.classList.add('editor-cropped');
            }
            
            context.editorAccess = true;
            onEditorChange(context);
        }
    } else {
        if (context.editorAccess) {
            popUpClasses.remove('editor');
            if (elements?.popUpContainer) {
                elements.popUpContainer.classList.remove('editor-cropped');
            }

            if (elements?.content) {
                elements.content.classList.remove('popup-content-in-editor-mode');
            }

            if (context.observer) {
                context.observer.disconnect();
                context.observer = null;
            }
            
            const currentHash = location.hash;
            const popUpHash = config.hash ? (config.hash.startsWith('#') ? config.hash : '#' + config.hash) : '';

            if (popUpHash && currentHash === popUpHash) {
                popUpClasses.remove('is-popup-closed');
                popUpClasses.add('is-popup-opened');
                toggleBodyScroll(true);
            } else {
                if (context.verticalStack.contains(popUp)) {
                    closePopup(context, true);
                }
            }
            
            context.editorAccess = false;
        }
    }
}

export function changeStyle(context) {
    const { backdropCustomStyle } = getBackdrop(context);

    setLayout(context, context.popUp);

    handleCustomStyles(context, context.popUp);
    handleCustomStyles(context, backdropCustomStyle);

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

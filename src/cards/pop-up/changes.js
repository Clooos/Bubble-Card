import { isColorCloseToWhite } from "../../tools/style.js";
import { getIcon, getIconColor, getImage, getName, getState, isEntityType, isStateOn, getWeatherIcon, fireEvent } from "../../tools/utils.js";
import { getBackdrop } from "./create.js";
import { addHash, onEditorChange, removeHash, toggleBodyScroll } from "./helpers.js";
import { initializesubButtonIcon } from '../../tools/global-changes.js';
import { checkConditionsMet, validateConditionalConfig, ensureArray } from '../../tools/validate-condition.js';
import { handleCustomStyles } from '../../tools/style-utils.js';

export function changeEditor(context) {
    if (!context.verticalStack) return;

    const { host } = context.verticalStack;
    const { popUp, sectionRow, sectionRowContainer, elements } = context;

    if (context.detectedEditor) {
          window.addEventListener("dialog-closed", () => {
            elements?.popUpContainer?.classList.add('editor-cropped');
          }, { once: true });
    }

    const isPopUpOpened = popUp?.classList.contains('is-popup-opened');
    const isCard = sectionRow?.tagName.toLowerCase() === 'hui-card';
    const isEditorActive = context.editor || context.detectedEditor;

    if (!isPopUpOpened && isCard) {
        const { editor, editorAccess } = context;

        if (sectionRowContainer?.classList.contains('card') && isEditorActive && sectionRowContainer.style.display === "none") {
            sectionRowContainer.style.display = '';
        }
    }

    const popUpClasses = popUp?.classList;

    if (isEditorActive) {
        if (!popUpClasses?.contains('editor')) {
            toggleBodyScroll(false);
            popUpClasses?.remove('is-popup-opened');
            popUpClasses?.add('is-popup-closed', 'editor');

            if (!context.detectedEditor) {
                elements?.popUpContainer?.classList.add('editor-cropped');
            }
        }

        context.editorAccess = true;
    } else {
        if (popUpClasses?.contains('editor')) {
            popUpClasses.remove('editor');
            elements?.popUpContainer?.classList.remove('editor-cropped');
        }
    }

    if (context.editor && !context.detectedEditor && (isEditorActive !== context.previousEditorState)) {
        onEditorChange(context);
        context.previousEditorState = isEditorActive;
    }
}

export function changeStyle(context) {
    initializesubButtonIcon(context);
    const { backdropCustomStyle } = getBackdrop(context);

    handleCustomStyles(context, context.popUp);
    handleCustomStyles(context, backdropCustomStyle);

    const layoutClass = context.config.card_layout;
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
                if (!trigger && !isInitialLoad) {
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

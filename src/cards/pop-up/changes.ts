import { isColorCloseToWhite } from "../../tools/style.ts";
import { getIcon, getIconColor, getImage, getName, getState, isEntityType, isStateOn, getWeatherIcon, fireEvent } from "../../tools/utils.ts";
import { getBackdrop } from "./create.ts";
import { addHash, onEditorChange, removeHash } from "./helpers.ts";
import { initializesubButtonIcon } from '../../tools/global-changes.ts';
import { checkConditionsMet, validateConditionalConfig, ensureArray } from '../../tools/validate-condition.ts';

export function changeEditor(context) {
    if (!context.verticalStack) return;

    const { host } = context.verticalStack;
    const { popUp, sectionRow, sectionRowContainer, elements } = context;

    // Cache detectedEditor and flags for performance
    const detectedEditor = context._cachedDetectedEditor ??= (
        host?.closest('hui-card-preview') ||
        host?.closest('hui-card[preview][class]') ||
        host?.getRootNode().host?.closest('hui-section[preview][class]')
    );

    const isPopUpOpened = popUp?.classList.contains('is-popup-opened');
    const isCard = sectionRow?.tagName.toLowerCase() === 'hui-card';

    // Initialize previous states if undefined
    context.previousEditorState ??= null;
    context.previousDetectedEditor ??= null;

    // Optimize DOM manipulations for hidden attribute and display style
    if (!isPopUpOpened && isCard) {
        const { editor, editorAccess } = context;

        if (!editor && editorAccess && !detectedEditor && !sectionRow?.hasAttribute("hidden")) {
            sectionRow.setAttribute("hidden", "");
            sectionRow.style.display = "none";
        } else if (sectionRowContainer?.classList.contains('card') && editor && sectionRowContainer.style.display === "none") {
            sectionRowContainer.style.display = '';
        }
    }

    // Avoid redundant style updates for the pop-up
    const popUpClasses = popUp?.classList;
    const isEditorActive = context.editor || detectedEditor;

    if (isEditorActive) {
        if (!popUpClasses?.contains('editor')) {
            document.body.style.overflow = '';
            popUpClasses?.remove('is-popup-opened');
            popUpClasses?.add('is-popup-closed', 'editor');
        }
        context.editorAccess = true;

        // Update 'editor-cropped' class only if necessary
        const shouldCrop = detectedEditor === null;
        if (elements?.popUpContainer?.classList.contains('editor-cropped') !== shouldCrop) {
            elements.popUpContainer.classList.toggle('editor-cropped', shouldCrop);
        }
    } else {
        if (popUpClasses?.contains('editor')) {
            popUpClasses.remove('editor');
        }
        elements?.popUpContainer?.classList.remove('editor-cropped');
    }

    // Trigger editor change only if necessary
    if (context.editor !== context.previousEditorState || detectedEditor !== context.previousDetectedEditor) {
        onEditorChange(context);
        context.previousEditorState = context.editor;
        context.previousDetectedEditor = detectedEditor;
    }
}

export function changeStyle(context) {
    initializesubButtonIcon(context);

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

    if (!context.config.styles) return;

    const state = getState(context);
    const { backdropCustomStyle } = getBackdrop(context);

    let customStyle = '';

    try {
        customStyle = context.config.styles
            ? Function('hass', 'entity', 'state', 'icon', 'subButtonIcon', 'getWeatherIcon', 'card', `return \`${context.config.styles}\`;`)
              (context._hass, context.config.entity, state, context.elements.icon, context.subButtonIcon, getWeatherIcon, context.popUp)
            : '';
    } catch (error) {
        throw new Error(`Error in generating pop-up custom templates: ${error.message}`);
    }

    if (context.elements.customStyle) {
        context.elements.customStyle.innerText = customStyle;
    }

    backdropCustomStyle.innerText = customStyle;
}

export function changeTriggered(context) {
    const triggerConditions = context.config.trigger;

    if (triggerConditions) {
        const isInitialLoad = !context.hasPageLoaded;
        context.hasPageLoaded = true;

        console.log(context.hashAdded)

        //Check conditions
        const triggerConditions_array = ensureArray(triggerConditions);
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

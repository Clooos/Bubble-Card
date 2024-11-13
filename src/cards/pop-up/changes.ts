import { isColorCloseToWhite } from "../../tools/style.ts";
import { getIcon, getIconColor, getImage, getName, getState, isEntityType, isStateOn, getWeatherIcon, fireEvent } from "../../tools/utils.ts";
import { getBackdrop } from "./create.ts";
import { addHash, onEditorChange, removeHash } from "./helpers.ts";
import { initializesubButtonIcon } from '../../tools/global-changes.ts';

export function changeEditor(context) {
    if (!context.verticalStack) return;

    const detectedEditor = context.verticalStack.host?.closest('hui-card-preview') || 
                           context.verticalStack.host?.closest('hui-card[preview][class]') || 
                           context.verticalStack.host?.getRootNode().host?.closest('hui-section[preview][class]');

    const isPopUpOpened = context.popUp?.classList.contains('is-popup-opened');
    const isCard = context.sectionRow.tagName.toLowerCase() === 'hui-card';

    if (context.previousEditorState === undefined) {
        context.previousEditorState = null;
    }
    if (context.previousDetectedEditor === undefined) {
        context.previousDetectedEditor = null;
    }

    // Fix the empty space caused by the pop-ups in the section view
    if (!isPopUpOpened && isCard) {
        if (!context.editor && context.editorAccess && !detectedEditor) {
            if (context.sectionRow.style.display !== "none") {
                context.sectionRow.toggleAttribute("hidden", true);
                context.sectionRow.style.display = "none";
            }
        } else if (context.sectionRowContainer?.classList.contains('card') && context.editor) {
            if (context.sectionRowContainer.style.display !== '') {
                context.sectionRowContainer.style.display = '';
            }
        }
    }

    // Change the pop-up style for the editor
    if (context.editor || detectedEditor !== null) {
        if (!context.popUp.classList.contains('editor')) {
            document.body.style.overflow = '';
            context.popUp?.classList.remove('is-popup-opened');
            context.popUp?.classList.add('is-popup-closed');
            context.popUp?.classList.add('editor');
        }

        context.editorAccess = true;

        if (detectedEditor !== null) {
            if (context.elements?.popUpContainer?.classList.contains('editor-cropped')) {
                context.elements?.popUpContainer?.classList.remove('editor-cropped');
            }
        } else {
            if (!context.elements?.popUpContainer?.classList.contains('editor-cropped')) {
                context.elements?.popUpContainer?.classList.add('editor-cropped');
            }
        }
    } else {
        if (context.popUp?.classList.contains('editor')) {
            context.popUp?.classList.remove('editor');
        }

        if (context.elements?.popUpContainer?.classList.contains('editor-cropped')) {
            context.elements?.popUpContainer?.classList.remove('editor-cropped');
        }
    }

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

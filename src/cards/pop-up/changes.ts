import { isColorCloseToWhite } from "../../tools/style.ts";
import { getIcon, getIconColor, getImage, getName, getState, isEntityType, isStateOn, getWeatherIcon, fireEvent } from "../../tools/utils.ts";
import { getBackdrop } from "./create.ts";
import { addHash, onEditorChange, removeHash } from "./helpers.ts";
import { initializesubButtonIcon } from '../../tools/global-changes.ts';

export function changeEditor(context) {
    const detectedEditor = context.verticalStack.host?.closest('hui-card-preview') || context.verticalStack.host?.closest('hui-card[preview][class]') || context.verticalStack.host?.getRootNode().host?.closest('hui-section[preview][class]');

    // Fix the empty space caused by the pop-ups in the section view
    if (!context.popUp.classList.contains('is-popup-opened') && context.sectionRow.tagName.toLowerCase() === 'hui-card') {
        if (
            !context.editor && 
            context.editorAccess && 
            !detectedEditor &&
            context.sectionRow.style.display !== "none"
        ){
            context.sectionRow.toggleAttribute("hidden", true);
            context.sectionRow.style.display = "none";
        } else if (
            context.sectionRowContainer?.classList.contains('card') && 
            !context.popUp.classList.contains('is-popup-opened') && 
            context.editor && 
            context.sectionRowContainer.style.display !== ''
        ){
            context.sectionRowContainer.style.display = '';
        }
    }

    // Change the pop-up style for the editor
    if (context.editor || detectedEditor !== null) {
        context.popUp.classList.add('editor');

        context.editorAccess = true;

        if (detectedEditor !== null) {
            context.elements.popUpContainer?.classList.remove('editor-cropped');
        } else {
            context.elements.popUpContainer?.classList.add('editor-cropped');
        }
    } else {
        context.popUp.classList.remove('editor');
        context.elements.popUpContainer?.classList.remove('editor-cropped');
    }

    onEditorChange(context);
}

export function changeStyle(context) {
    initializesubButtonIcon(context);

    const cardLayout = context.config.card_layout;
    const showHeader = context.config.show_header ?? true;

    if (cardLayout === 'large') {
        if (!context.popUp.classList.contains('large')) {
            context.popUp.classList.add('large');
        }
        if (context.popUp.classList.contains('rows-2')) {
            context.popUp.classList.remove('rows-2');
        } 
    } else if (cardLayout === 'large-2-rows') {
        if (!context.popUp.classList.contains('large')) {
            context.popUp.classList.add('large');
        } 
        if (!context.popUp.classList.contains('rows-2')) {
            context.popUp.classList.add('rows-2');
        } 
    } else {
        context.popUp.classList.remove('large');
        context.popUp.classList.remove('rows-2');
    }

    if (showHeader && context.popUp.classList.contains('no-header')) {
        context.popUp.classList.remove('no-header');
    } else if (!showHeader && !context.popUp.classList.contains('no-header')){
        context.popUp.classList.add('no-header');
    }
        

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

// export function changeTriggered(context) {
//     let triggerEntity = context.config.trigger_entity ?? '';

//     if (triggerEntity === '') return;

//     let triggerState = context.config.trigger_state ?? '';
//     let triggerClose = context.config.trigger_close ?? false;
//     let triggerEntityState = context._hass.states[triggerEntity]?.state;

//     if (!triggerEntity) return;
//     if (!triggerState) return;
//     if (context.oldTriggerEntityState === triggerEntityState) return;

//     if (context.config.hash === location.hash) {
//         // Popup is opened: should we close it?
//         if (triggerClose && triggerState !== triggerEntityState) {
//             removeHash();
//         }
//     } else {
//         // Popup is closed: should we open it?
//         if (triggerEntityState === triggerState) {
//             addHash(context.config.hash);
//         }
//     }

//     context.oldTriggerEntityState = triggerEntityState;
// }

export function changeTriggered(context) {
    let triggerEntity = context.config.trigger_entity ?? '';

    if (triggerEntity === '') return;

    let triggerState = context.config.trigger_state ?? '';
    let triggerClose = context.config.trigger_close ?? false;
    let triggerEntityState = context._hass.states[triggerEntity]?.state;

    if (!triggerEntity) return;
    if (!triggerState) return;
    if (context.oldTriggerEntityState === triggerEntityState) return;

    // Variable pour détecter le chargement initial
    const isInitialLoad = !context.hasPageLoaded;
    context.hasPageLoaded = true;

    if (context.config.hash === location.hash) {
        // Popup est ouverte : devons-nous la fermer ?
        if (triggerClose && triggerState !== triggerEntityState) {
            // Ignorer la fermeture si c'est le chargement initial et qu'il y a un hash
            if (!isInitialLoad) {
                removeHash();
            }
        }
    } else {
        // Popup est fermée : devons-nous l'ouvrir ?
        if (triggerEntityState === triggerState) {
            addHash(context.config.hash);
        }
    }

    context.oldTriggerEntityState = triggerEntityState;
}

import { getBackdrop } from "./backdrop.js";
import { addHash, markPopupPendingTriggerOpen, removeHash, syncPopupModeClasses, wasPopupOpenedByTrigger } from "./helpers.js";
import { checkConditionsMet, validateConditionalConfig, ensureArray } from '../../tools/validate-condition.js';
import { handleCustomStyles } from '../../tools/style-processor.js';
import { setLayout } from "../../tools/utils.js";

export { changeEditor } from './editor-mode.js';

export function syncHeaderVisibilityClasses(context) {
    const showHeader = context.config.show_header ?? true;
    const showPreviousButton = context.config.show_previous_button ?? false;
    const showCloseButton = context.config.show_close_button ?? true;

    context.popUp.classList.toggle('no-header', !showHeader);
    context.popUp.classList.toggle('show-previous-button', showPreviousButton);
    context.popUp.classList.toggle('hide-close-button', !showCloseButton);
    context.popUp.classList.toggle('no-header-actions', !(showPreviousButton || showCloseButton));
}

export function changeStyle(context) {
    const { backdropCustomStyle, updateBackdropStyles } = getBackdrop(context);

    setLayout(context, context.popUp);

    handleCustomStyles(context, context.popUp);
    // Backdrop styles stay async to keep popup opening smooth.
    if (typeof updateBackdropStyles === 'function') {
        updateBackdropStyles();
    } else {
        // Fallback for older contexts
        requestAnimationFrame(() => handleCustomStyles(context, backdropCustomStyle));
    }

    syncPopupModeClasses(context.popUp, context.config);
    syncHeaderVisibilityClasses(context);
}

function getPreparedTriggerConditions(context) {
    const triggerConditions = context.config.trigger;
    if (!triggerConditions) {
        return null;
    }

    if (context._preparedTriggerSource === triggerConditions && context._preparedTriggerConditions) {
        return context._preparedTriggerConditions;
    }

    const conditions = ensureArray(triggerConditions) || [];
    const preparedConditions = {
        conditions,
        isValid: conditions.length > 0 && validateConditionalConfig(conditions),
    };

    context._preparedTriggerSource = triggerConditions;
    context._preparedTriggerConditions = preparedConditions;
    return preparedConditions;
}

export function changeTriggered(context) {
    const triggerClose = context.config.trigger_close ?? true;
    const preparedTriggerConditions = getPreparedTriggerConditions(context);

    if (preparedTriggerConditions) {
        const isInitialLoad = !context.hasPageLoaded;
        context.hasPageLoaded = true;

        if (preparedTriggerConditions.conditions.length === 0) {
            context.previousTrigger = false;
            return;
        }

        if (preparedTriggerConditions.isValid){
            const trigger = checkConditionsMet(preparedTriggerConditions.conditions,context._hass);

            if (trigger === context.previousTrigger) return;

            if (context.config.hash === location.hash) {
                if (!trigger && !isInitialLoad && triggerClose && wasPopupOpenedByTrigger(context)) {
                    removeHash();
                }
            } else {
                if (trigger) {
                    markPopupPendingTriggerOpen(context);
                    addHash(context.config.hash);
                }
            }  

            context.previousTrigger = trigger;          
        }
    } else {
        const triggerEntity = context.config.trigger_entity ?? '';
        if (!triggerEntity) return;

        const triggerState = context.config.trigger_state ?? '';
        const triggerClose = context.config.trigger_close ?? false;
        const triggerEntityState = context._hass.states[triggerEntity]?.state;

        if (!triggerState) return;
        if (context.oldTriggerEntityState === triggerEntityState) return;

        const isInitialLoad = !context.hasPageLoaded;
        context.hasPageLoaded = true;

        if (context.config.hash === location.hash) {
            if (triggerClose && triggerState !== triggerEntityState && wasPopupOpenedByTrigger(context)) {
                if (!isInitialLoad) {
                    removeHash();
                }
            }
        } else {
            if (triggerEntityState === triggerState) {
                markPopupPendingTriggerOpen(context);
                addHash(context.config.hash);
            }
        }

        context.oldTriggerEntityState = triggerEntityState;        
    }
}


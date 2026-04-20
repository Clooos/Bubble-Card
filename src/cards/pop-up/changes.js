import { getBackdrop } from "./backdrop.js";
import { addHash, markPopupPendingTriggerOpen, removeHash, syncPopupModeClasses, syncPopupStyleClasses, wasPopupOpenedByTrigger } from "./helpers.js";
import { checkConditionsMet, validateConditionalConfig, ensureArray } from '../../tools/validate-condition.js';
import { handleCustomStyles } from '../../tools/style-processor.js';
import { setLayout } from "../../tools/utils.js";

export { changeEditor } from './editor-mode.js';

export function syncHeaderVisibilityClasses(context) {
    const showHeader = context.config.show_header ?? true;
    const showPreviousButton = context.config.show_previous_button ?? false;
    const showCloseButton = context.config.show_close_button ?? true;
    const closeButtonLeft = context.config.buttons_position === 'left';

    context.popUp.classList.toggle('no-header', !showHeader);
    context.popUp.classList.toggle('show-previous-button', showPreviousButton);
    context.popUp.classList.toggle('hide-close-button', !showCloseButton);
    context.popUp.classList.toggle('no-header-actions', !(showPreviousButton || showCloseButton));
    context.popUp.classList.toggle('close-button-left', closeButtonLeft);
}

export function changeStyle(context, options = {}) {
    const { backdropCustomStyle, updateBackdropStyles } = getBackdrop(context);
    const isTransitioning = context.popUp?.classList?.contains('is-opening') || context.popUp?.classList?.contains('is-closing');
    const skipBackdropStyles = options.skipBackdropStyles === true;
    setLayout(context, context.popUp);

    const currentThemes = context._hass?.themes;
    if (currentThemes !== context._lastSeenThemes) {
        context._lastSeenThemes = currentThemes;
        context.updatePopupColor?.();
    }

    handleCustomStyles(context, context.popUp);
    if (!skipBackdropStyles) {
        if (!isTransitioning && typeof updateBackdropStyles === 'function') {
            updateBackdropStyles();
        } else if (!isTransitioning) {
            requestAnimationFrame(() => handleCustomStyles(context, backdropCustomStyle));
        }
    }

    syncPopupModeClasses(context.popUp, context.config);
    syncPopupStyleClasses(context.popUp, context.config);
    syncHeaderVisibilityClasses(context);
}

function getPreparedTriggerConditions(context) {
    const triggerConditions = context.config.trigger;
    if (!triggerConditions) return null;

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

function markTriggerEvaluation(context) {
    const isInitialLoad = !context.hasPageLoaded;
    context.hasPageLoaded = true;
    return isInitialLoad;
}

function syncTriggeredPopupHash(context, trigger, triggerClose, isInitialLoad) {
    if (context.config.hash === location.hash) {
        if (!trigger && triggerClose && wasPopupOpenedByTrigger(context) && !isInitialLoad) {
            removeHash();
        }
        return;
    }

    if (trigger) {
        markPopupPendingTriggerOpen(context);
        addHash(context.config.hash);
    }
}

function getLegacyTriggerEvaluation(context) {
    const triggerEntity = context.config.trigger_entity ?? '';
    const triggerState = context.config.trigger_state ?? '';
    if (!triggerEntity || !triggerState) return null;

    const entityState = context._hass.states[triggerEntity]?.state;
    if (context.oldTriggerEntityState === entityState) return null;

    return {
        entityState,
        trigger: entityState === triggerState,
        triggerClose: context.config.trigger_close ?? false,
    };
}

export function changeTriggered(context) {
    const preparedTriggerConditions = getPreparedTriggerConditions(context);

    if (preparedTriggerConditions) {
        if (preparedTriggerConditions.conditions.length === 0) {
            context.previousTrigger = false;
            return;
        }

        if (preparedTriggerConditions.isValid) {
            const trigger = checkConditionsMet(preparedTriggerConditions.conditions, context._hass);
            if (trigger === context.previousTrigger) return;

            syncTriggeredPopupHash(
                context,
                trigger,
                context.config.trigger_close ?? true,
                markTriggerEvaluation(context),
            );
            context.previousTrigger = trigger;
        }
        return;
    }

    const legacyTrigger = getLegacyTriggerEvaluation(context);
    if (!legacyTrigger) return;

    syncTriggeredPopupHash(
        context,
        legacyTrigger.trigger,
        legacyTrigger.triggerClose,
        markTriggerEvaluation(context),
    );
    context.oldTriggerEntityState = legacyTrigger.entityState;
}


import { changeState, changeIcon, changeName, changeStatus } from "../../components/base-card/changes.js";
import { changeSubButtons } from "../../components/sub-button/changes.js";
import { createDropdownStructure, createDropdownActions } from "../../components/dropdown/index.js";
import { changeDropdownList } from "../../components/dropdown/changes.js";
import { changeStyle } from './changes.js'
import { createStructure } from './create.js';
import { isAlarmPanel, formatAlarmMode } from "../../components/dropdown/alarm.js";
import { applyScrollingEffect } from "../../tools/text-scrolling.js";

export function handleSelect(context) {
    const cardType = context.cardType;

    if (context.cardType !== "select") {
        createStructure(context);
        createDropdownStructure(context);
        createDropdownActions(context);
    }

    changeDropdownList(context, context.elements, context.config.entity, context.config);
    changeStatus(context);
    changeIcon(context);
    changeName(context);
    changeState(context);
    changeSubButtons(context);
    changeStyle(context);

    const entityId = context.config?.entity;
    const entity = context._hass?.states?.[entityId];
    if (isAlarmPanel(entityId) && entity && (entity.state === 'arming' || entity.state === 'pending')) {
        if (context._alarmCountdown === null || context._alarmCountdown === undefined) {
            const delay = (entity.attributes?.delay !== undefined && entity.attributes?.delay !== null && !isNaN(Number(entity.attributes.delay)))
                ? Number(entity.attributes.delay)
                : 30;
            const lastChanged = entity.last_changed;
            const startTime = lastChanged && !isNaN(new Date(lastChanged).getTime()) ? new Date(lastChanged).getTime() : Date.now();
            const remaining = Math.max(0, delay - Math.floor((Date.now() - startTime) / 1000));
            if (remaining > 0) {
                context._alarmCountdown = remaining;
            }
        }

        if (context._alarmCountdown !== null && context._alarmCountdown !== undefined && context._alarmCountdown > 0) {
            const stateLabel = formatAlarmMode(context._hass, entity) || (entity.state === 'arming' ? 'Arming' : 'Pending');
            const countdownText = `${stateLabel} (${context._alarmCountdown}s)`;
            if (context.elements?.state) {
                applyScrollingEffect(context, context.elements.state, countdownText);
            }
        }
    }
}
import { isColorCloseToWhite } from "../../tools/style.ts";
import { getIcon, getIconColor, getImage, getName, getState, isEntityType, isStateOn } from "../../tools/utils.ts";
import { getBackdrop } from "./create.ts";
import { addHash, onEditorChange, removeHash } from "./helpers.ts";

export function changeEditor(context) {
  const detectedEditor = context.verticalStack.host.closest('hui-card-preview');

  if (context.editor || detectedEditor !== null) {
    context.popUp.classList.add('editor');

    if (detectedEditor !== null) {
        context.elements.popUpContainer.classList.remove('hidden');
    } else {
        context.elements.popUpContainer.classList.add('hidden');
    }
  } else {
    context.popUp.classList.remove('editor');
    context.elements.popUpContainer.classList.remove('hidden');
  }
  onEditorChange(context);
}
export function changeStyle(context) {
  const state = getState(context);
  const { backdropCustomStyle } = getBackdrop(context);

  const customStyle = context.config.styles
      ? Function('hass', 'entityId', 'state', 'return `' + context.config.styles + '`;')(context._hass, context.config.entity, state)
      : '';

  if (context.elements.customStyle) {
    context.elements.customStyle.innerText = customStyle;
  }
  backdropCustomStyle.innerText = customStyle;
}
export function changeTriggered(context) {
    let triggerEntity = context.config.trigger_entity ?? '';
    let triggerState = context.config.trigger_state ?? '';
    let triggerClose = context.config.trigger_close ?? false;
    let triggerEntityState = context._hass.states[triggerEntity]?.state;

    if (!triggerEntity) return;
    if (!triggerState) return;
    if (context.oldTriggerEntityState === triggerEntityState) return;

    if (context.config.hash === location.hash) {
        // Popup is opened: should we close it?
        if (triggerClose && triggerState !== triggerEntityState) {
            removeHash();
        }
    } else {
        // Popup is closed: should we open it?
        if (triggerEntityState === triggerState) {
            addHash(context.config.hash);
        }
    }

    context.oldTriggerEntityState = triggerEntityState;
}
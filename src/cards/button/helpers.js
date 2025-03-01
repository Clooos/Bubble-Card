import { addActions, addFeedback } from "../../tools/tap-actions.js";
import { createElement, toggleEntity, throttle, forwardHaptic, isEntityType, getAttribute } from "../../tools/utils.js";

export function getButtonType(context) {
  let buttonType = context.config.button_type;

  if (buttonType === 'custom') {
    console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"');
    buttonType = '';
  }

  if (context.config.entity) {
      return buttonType || 'switch';
  } else {
      return buttonType || 'name';
  }
}
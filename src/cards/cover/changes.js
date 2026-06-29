import { 
    getAttribute, 
    setLayout
} from "../../tools/utils.js";
import { getIcon } from '../../tools/icon.js';
import { handleCustomStyles } from '../../tools/style-processor.js';

export const coverEntityFeature = {
  OPEN: 1,
  CLOSE: 2,
  STOP: 8,
};

export function supportsFeature(stateObj, feature) {
  if (!stateObj) return false;
  return supportsFeatureFromAttributes(stateObj.attributes, feature);
}

export function supportsFeatureFromAttributes(attributes, feature) {
  if (!attributes || typeof attributes.supported_features === "undefined") {
    return false;
  }
  return (attributes.supported_features & feature) !== 0;
}

export function isFullyOpen(stateObj) {
  if (!stateObj) return false;
  if (stateObj.attributes.current_position !== undefined) {
    return stateObj.attributes.current_position === 100;
  }
  return stateObj.state === "open";
}

export function isFullyClosed(stateObj) {
  if (!stateObj) return false;
  if (stateObj.attributes.current_position !== undefined) {
    return stateObj.attributes.current_position === 0;
  }
  return stateObj.state === "closed";
}

export function isOpening(stateObj) {
  if (!stateObj) return false;
  return stateObj.state === "opening";
}

export function isClosing(stateObj) {
  if (!stateObj) return false;
  return stateObj.state === "closing";
}

export function canOpen(stateObj) {
  if (!stateObj) return false;
  if (stateObj.state === "unavailable") return false;
  const assumedState = stateObj.attributes.assumed_state === true;
  return assumedState || (!isFullyOpen(stateObj) && !isOpening(stateObj));
}

export function canClose(stateObj) {
  if (!stateObj) return false;
  if (stateObj.state === "unavailable") return false;
  const assumedState = stateObj.attributes.assumed_state === true;
  return assumedState || (!isFullyClosed(stateObj) && !isClosing(stateObj));
}

export function changeCoverIcons(context) {
  const stateObj = context._hass?.states?.[context.config.entity];
  if (!stateObj?.attributes) return;

  const supportsOpen = supportsFeature(stateObj, coverEntityFeature.OPEN);
  const supportsClose = supportsFeature(stateObj, coverEntityFeature.CLOSE);
  const supportsStop = supportsFeature(stateObj, coverEntityFeature.STOP);

  const canOpenCover = canOpen(stateObj);
  const canCloseCover = canClose(stateObj);

  const fullyOpen = isFullyOpen(stateObj);
  const fullyClosed = isFullyClosed(stateObj);
  const isCurtains = getAttribute(context, "device_class") === "curtain";

  context.elements.icon.icon = fullyOpen
    ? getIcon(context, context.config.entity, context.config.icon_open)
    : getIcon(context, context.config.entity, context.config.icon_close);

  const iconUpName = context.config.icon_up || (isCurtains ? "mdi:arrow-expand-horizontal" : "mdi:arrow-up");
  const iconDownName = context.config.icon_down || (isCurtains ? "mdi:arrow-collapse-horizontal" : "mdi:arrow-down");
  
  context.elements.buttonOpen.icon.setAttribute("icon", iconUpName);
  context.elements.buttonClose.icon.setAttribute("icon", iconDownName);

  if (supportsOpen) {
    if (canOpenCover) {
      context.elements.buttonOpen.classList.remove("disabled");
    } else {
      context.elements.buttonOpen.classList.add("disabled");
    }
  } else {
    context.elements.buttonOpen.classList.add("disabled");
  }

  if (supportsClose) {
    if (canCloseCover) {
      context.elements.buttonClose.classList.remove("disabled");
    } else {
      context.elements.buttonClose.classList.add("disabled");
    }
  } else {
    context.elements.buttonClose.classList.add("disabled");
  }

  if (!supportsStop) {
    context.elements.buttonStop.style.display = "none";
  } else {
    context.elements.buttonStop.style.display = "";
  }
}

export function changeStyle(context) {
    setLayout(context);
    handleCustomStyles(context);
}

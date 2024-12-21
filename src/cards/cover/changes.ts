import { 
    getName, 
    getState, 
    getAttribute, 
    getIcon, 
    applyScrollingEffect,
    getWeatherIcon,
    setLayout
} from "../../tools/utils.ts";
import { initializesubButtonIcon } from '../../tools/global-changes.ts';

export const coverEntityFeature = {
  OPEN: 1,
  CLOSE: 2,
  STOP: 8,
};

export function supportsFeature(stateObj, feature) {
  return supportsFeatureFromAttributes(stateObj.attributes, feature);
}

export function supportsFeatureFromAttributes(attributes, feature) {
  if (!attributes || typeof attributes.supported_features === "undefined") {
    return false;
  }
  return (attributes.supported_features & feature) !== 0;
}

export function isFullyOpen(stateObj) {
  if (stateObj.attributes.current_position !== undefined) {
    return stateObj.attributes.current_position === 100;
  }
  return stateObj.state === "open";
}

export function isFullyClosed(stateObj) {
  if (stateObj.attributes.current_position !== undefined) {
    return stateObj.attributes.current_position === 0;
  }
  return stateObj.state === "closed";
}

export function changeIcon(context) {
  const stateObj = context._hass.states[context.config.entity];
  const { current_position: currentPosition, assumed_state: assumedState } = stateObj.attributes;

  const supportsOpen = supportsFeature(stateObj, coverEntityFeature.OPEN);
  const supportsClose = supportsFeature(stateObj, coverEntityFeature.CLOSE);
  const supportsStop = supportsFeature(stateObj, coverEntityFeature.STOP);

  const fullyOpen = isFullyOpen(stateObj);
  const fullyClosed = isFullyClosed(stateObj);
  const isCurtains = getAttribute(context, "device_class") === "curtain";

  context.elements.icon.icon = fullyOpen
    ? getIcon(context, context.config.entity, context.config.icon_open)
    : getIcon(context, context.config.entity, context.config.icon_close);

  context.elements.iconOpen.icon =
    context.config.icon_up || (isCurtains ? "mdi:arrow-expand-horizontal" : "mdi:arrow-up");
  context.elements.iconClose.icon =
    context.config.icon_down || (isCurtains ? "mdi:arrow-collapse-horizontal" : "mdi:arrow-down");

  if (currentPosition !== undefined) {
    if (fullyOpen) {
      context.elements.buttonOpen.classList.add("disabled");
    } else if (supportsOpen) {
      context.elements.buttonOpen.classList.remove("disabled");
    }

    if (fullyClosed) {
      context.elements.buttonClose.classList.add("disabled");
    } else if (supportsClose) {
      context.elements.buttonClose.classList.remove("disabled");
    }
  } else {
    context.elements.buttonOpen.classList.remove("disabled");
    context.elements.buttonClose.classList.remove("disabled");
  }

  if (!supportsStop) {
    context.elements.buttonStop.style.display = "none";
  } else {
    context.elements.buttonStop.style.display = "";
  }
}

export function changeName(context) {
    //if (context.config.styles?.includes("card.querySelector('.bubble-name').innerText")) return;
    const name = getName(context);
    if (name !== context.elements.previousName) {
      context.elements.name.innerText = name;
      applyScrollingEffect(context, context.elements.name, name);
      context.elements.previousName = name;
  }
}

export function changeStyle(context) {
    initializesubButtonIcon(context);
    setLayout(context);

    if (!context.config.styles) return;

    const state = getState(context);

    let customStyle = '';

    try {
        customStyle = context.config.styles
            ? Function('hass', 'entity', 'state', 'icon', 'subButtonIcon', 'getWeatherIcon', 'card', `return \`${context.config.styles}\`;`)
              (context._hass, context.config.entity, state, context.elements.icon, context.subButtonIcon, getWeatherIcon, context.card)
            : '';
    } catch (error) {
        throw new Error(`Error in generating cover custom templates: ${error.message}`);
    }

    if (context.elements.customStyle) {
        context.elements.customStyle.innerText = customStyle;
    }
}

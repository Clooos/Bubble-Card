import { 
    getAttribute, 
    setLayout,
    createElement
} from "../../tools/utils.js";
import { getIcon } from '../../tools/icon.js';
import { handleCustomStyles } from '../../tools/style-processor.js';

export const coverEntityFeature = {
  OPEN: 1,
  CLOSE: 2,
  SET_POSITION: 4,
  STOP: 8,
  OPEN_TILT: 16,
  CLOSE_TILT: 32,
  STOP_TILT: 64,
  SET_TILT_POSITION: 128,
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

export function isTiltFullyOpen(stateObj) {
  if (!stateObj) return false;
  if (stateObj.attributes.current_tilt_position !== undefined) {
    return stateObj.attributes.current_tilt_position === 100;
  }
  return false;
}

export function isTiltFullyClosed(stateObj) {
  if (!stateObj) return false;
  if (stateObj.attributes.current_tilt_position !== undefined) {
    return stateObj.attributes.current_tilt_position === 0;
  }
  return false;
}

export function canOpenTilt(stateObj) {
  if (!stateObj) return false;
  if (stateObj.state === "unavailable") return false;
  const assumedState = stateObj.attributes.assumed_state === true;
  return assumedState || !isTiltFullyOpen(stateObj);
}

export function canCloseTilt(stateObj) {
  if (!stateObj) return false;
  if (stateObj.state === "unavailable") return false;
  const assumedState = stateObj.attributes.assumed_state === true;
  return assumedState || !isTiltFullyClosed(stateObj);
}

export function changeCoverIcons(context) {
  const stateObj = context._hass?.states?.[context.config.entity];
  if (!stateObj?.attributes) return;

  const supportsOpen = supportsFeature(stateObj, coverEntityFeature.OPEN);
  const supportsClose = supportsFeature(stateObj, coverEntityFeature.CLOSE);
  const supportsStop = supportsFeature(stateObj, coverEntityFeature.STOP);

  const supportsOpenTilt = supportsFeature(stateObj, coverEntityFeature.OPEN_TILT);
  const supportsCloseTilt = supportsFeature(stateObj, coverEntityFeature.CLOSE_TILT);
  const supportsSetTiltPosition = supportsFeature(stateObj, coverEntityFeature.SET_TILT_POSITION);

  const hasTiltSupport = supportsOpenTilt || supportsCloseTilt || supportsSetTiltPosition;

  const canOpenCover = canOpen(stateObj);
  const canCloseCover = canClose(stateObj);

  const canOpenTiltCover = canOpenTilt(stateObj);
  const canCloseTiltCover = canCloseTilt(stateObj);

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

  // Tilt button states
  if (context.elements.buttonTiltOpen) {
    if (supportsOpenTilt) {
      if (canOpenTiltCover) {
        context.elements.buttonTiltOpen.classList.remove("disabled");
      } else {
        context.elements.buttonTiltOpen.classList.add("disabled");
      }
    } else {
      context.elements.buttonTiltOpen.style.display = "none";
    }
  }

  if (context.elements.buttonTiltClose) {
    if (supportsCloseTilt) {
      if (canCloseTiltCover) {
        context.elements.buttonTiltClose.classList.remove("disabled");
      } else {
        context.elements.buttonTiltClose.classList.add("disabled");
      }
    } else {
      context.elements.buttonTiltClose.style.display = "none";
    }
  }
}

export function positionTiltButtons(context) {
  const tiltButtonsConfig = context.config?.tilt_buttons;
  const tiltButtonsPosition = tiltButtonsConfig || 'top';

  const stateObj = context._hass?.states?.[context.config.entity];
  const hasTiltSupport = stateObj && (
    supportsFeature(stateObj, coverEntityFeature.OPEN_TILT) ||
    supportsFeature(stateObj, coverEntityFeature.CLOSE_TILT) ||
    supportsFeature(stateObj, coverEntityFeature.SET_TILT_POSITION)
  );

  // Skip DOM manipulation when position and tilt support haven't changed
  if (context._lastTiltPosition === tiltButtonsPosition &&
      context._lastTiltSupport === hasTiltSupport) {
    return;
  }
  context._lastTiltPosition = tiltButtonsPosition;
  context._lastTiltSupport = hasTiltSupport;

  const tilt = context.elements.tiltButtonsContainer;
  if (!tilt) return;

  const removeTiltFrom = (parent) => {
    if (parent?.contains(tilt)) parent.removeChild(tilt);
  };

  if (!hasTiltSupport || tiltButtonsConfig === 'hidden') {
    tilt.style.display = 'none';
    tilt.classList.remove('full-width');
    // Cleanup column wrapper if it exists
    if (context.elements.tiltButtonsWrapper) {
      const wrapper = context.elements.tiltButtonsWrapper;
      const buttons = context.elements.buttonsContainer;
      if (buttons && wrapper.contains(buttons)) {
        wrapper.parentNode.insertBefore(buttons, wrapper);
      }
      wrapper.remove();
      delete context.elements.tiltButtonsWrapper;
    }
    removeTiltFrom(context.elements.subButtonContainer);
    removeTiltFrom(context.elements.bottomSubButtonContainer);
    removeTiltFrom(context.elements.buttonsContainer);
    return;
  }

  tilt.style.display = '';
  // Reset position-specific classes; only 'bottom' needs full-width and
  // 'left'/'right' need the has-background pill. 'top' remains transparent.
  tilt.classList.remove('full-width', 'has-background');

  // Cleanup: remove stale column wrapper if it exists
  if (context.elements.tiltButtonsWrapper) {
    const wrapper = context.elements.tiltButtonsWrapper;
    const buttons = context.elements.buttonsContainer;
    if (buttons && wrapper.contains(buttons)) {
      wrapper.parentNode.insertBefore(buttons, wrapper);
    }
    wrapper.remove();
    delete context.elements.tiltButtonsWrapper;
  }

  // Remove from any previous container
  removeTiltFrom(context.elements.subButtonContainer);
  removeTiltFrom(context.elements.bottomSubButtonContainer);
  removeTiltFrom(context.elements.buttonsContainer);

  // Position-specific logic
  if (tiltButtonsPosition === 'bottom') {
    // Create column wrapper: main buttons on top, tilt buttons below (full width)
    const wrapper = createElement('div', 'bubble-buttons-column-wrapper');
    const buttons = context.elements.buttonsContainer;
    const cardWrapper = context.elements.cardWrapper;

    if (!buttons || !cardWrapper) {
      tilt.style.display = 'none';
      return;
    }

    // Replace buttonsContainer with wrapper in cardWrapper
    if (cardWrapper.contains(buttons)) {
      cardWrapper.insertBefore(wrapper, buttons);
    }
    wrapper.appendChild(buttons);
    wrapper.appendChild(tilt);
    // Give the tilt row the same background-painting class as the main buttons.
    // `.full-width > .bubble-button` provides both the width and the shared
    // `--bubble-main-buttons-background-color` pill, so the tilt buttons are no
    // longer transparent and visually match the main open/stop/close buttons.
    tilt.classList.add('full-width');
    context.elements.tiltButtonsWrapper = wrapper;
  } else if (tiltButtonsPosition === 'left') {
    // Insert tilt buttons at the start of buttonsContainer (left of main buttons)
    const buttons = context.elements.buttonsContainer;
    if (!buttons) {
      tilt.style.display = 'none';
      return;
    }
    tilt.classList.add('has-background');
    if (buttons.firstChild) {
      buttons.insertBefore(tilt, buttons.firstChild);
    } else {
      buttons.appendChild(tilt);
    }
  } else if (tiltButtonsPosition === 'right') {
    // Append tilt buttons to buttonsContainer (right of main buttons)
    const buttons = context.elements.buttonsContainer;
    if (!buttons) {
      tilt.style.display = 'none';
      return;
    }
    tilt.classList.add('has-background');
    buttons.appendChild(tilt);
  } else {
    // 'top' (default): append to subButtonContainer
    const subButtons = context.elements.subButtonContainer;
    if (!subButtons) {
      tilt.style.display = 'none';
      return;
    }
    subButtons.appendChild(tilt);
  }
}

export function changeStyle(context) {
    positionTiltButtons(context);
    setLayout(context);
    handleCustomStyles(context);
}

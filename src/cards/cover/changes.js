import {
    getAttribute,
    setLayout,
    createElement,
    isDocumentRTL
} from "../../tools/utils.js";
import { getIcon } from '../../tools/icon.js';
import { resolveTemplate } from '../../tools/render-template.js';
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

const CoverSpeed = {
    SLOW: 'slow',
    NORMAL: 'normal',
    FAST: 'fast'
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

/**
 * Whether the cover should wear its open icon.
 *
 * Home Assistant reads a cover as open as soon as it leaves the closed
 * position, so anything above 0% is open and only a fully closed one is shut.
 * This used to key off isFullyOpen, which is a 100% test, so a cover held at
 * 80% wore the closed icon while its state said open (#2586). A cover with no
 * position never had the problem, since isFullyOpen falls back to the state.
 *
 * An unknown or unavailable cover keeps the closed icon rather than claiming to
 * be open about a position nobody knows.
 */
export function showsOpenIcon(stateObj) {
  if (!stateObj) return false;
  if (stateObj.state === "unavailable" || stateObj.state === "unknown") return false;
  return !isFullyClosed(stateObj);
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

// Home Assistant's own tilt actions, which are also the values the editor shows
// in its two tilt action fields. A cover carrying neither OPEN_TILT nor
// CLOSE_TILT is refused by both, since core registers each one with its feature
// as required, so neither ever counts as a way to drive a tilt button.
export const DEFAULT_OPEN_TILT_SERVICE = 'cover.open_cover_tilt';
export const DEFAULT_CLOSE_TILT_SERVICE = 'cover.close_cover_tilt';

function hasCustomService(service, defaultService) {
  return typeof service === 'string' && service !== '' && service !== defaultService;
}

/**
 * Which tilt buttons the card can offer, one by one.
 *
 * Home Assistant grants OPEN_TILT and CLOSE_TILT to a cover that tilts by
 * impulse, and SET_TILT_POSITION to one that only tilts to a given angle. Only
 * the first pair drives buttons, which is why hui-cover-tilt-card-feature gates
 * on OPEN_TILT or CLOSE_TILT and leaves SET_TILT_POSITION to the slider.
 * Counting SET_TILT_POSITION as button support put a tilt row with nothing in
 * it on a KNX cover that has an angle address and no step address (#2618).
 *
 * An action or script of the user's own is the way out. The button calls it
 * with the cover's entity_id and nothing else, so a script can tilt a cover
 * Home Assistant refuses to tilt by impulse. These two fields stay generic for
 * other reasons too, such as swapping them to invert the direction.
 */
export function tiltButtonSupport(stateObj, config) {
  const open = supportsFeature(stateObj, coverEntityFeature.OPEN_TILT)
    || hasCustomService(config?.open_tilt_service, DEFAULT_OPEN_TILT_SERVICE);
  const close = supportsFeature(stateObj, coverEntityFeature.CLOSE_TILT)
    || hasCustomService(config?.close_tilt_service, DEFAULT_CLOSE_TILT_SERVICE);
  return { open, close, any: open || close };
}

/**
 * Whether the cover can only be tilted to an angle, never by impulse.
 *
 * The editor says so out loud in this case, rather than offering a tilt row
 * that can never hold a button.
 */
export function tiltsByPositionOnly(stateObj) {
  return supportsFeature(stateObj, coverEntityFeature.SET_TILT_POSITION)
    && !supportsFeature(stateObj, coverEntityFeature.OPEN_TILT)
    && !supportsFeature(stateObj, coverEntityFeature.CLOSE_TILT);
}

export function changeCoverIcons(context) {
  const stateObj = context._hass?.states?.[context.config.entity];
  if (!stateObj?.attributes) return;

  const supportsOpen = supportsFeature(stateObj, coverEntityFeature.OPEN);
  const supportsClose = supportsFeature(stateObj, coverEntityFeature.CLOSE);
  const supportsStop = supportsFeature(stateObj, coverEntityFeature.STOP);

  const tiltButtons = tiltButtonSupport(stateObj, context.config);

  const canOpenCover = canOpen(stateObj);
  const canCloseCover = canClose(stateObj);

  const canOpenTiltCover = canOpenTilt(stateObj);
  const canCloseTiltCover = canCloseTilt(stateObj);

  const fullyClosed = isFullyClosed(stateObj);
  const isCurtains = getAttribute(context, "device_class") === "curtain";
    
  const speedIcon = (context.config.open_speed === CoverSpeed.SLOW) ? "mdi:speedometer-slow" : (context.config.open_speed === CoverSpeed.FAST) ? "mdi:speedometer" : "mdi:speedometer-medium";
  context.elements.speedButton.icon.setAttribute("icon", speedIcon);
  if (context.config.open_speed === CoverSpeed.SLOW) {
    context.elements.speedButton.style.backgroundColor = 'var(--bubble-accent-color, var(--bubble-default-color))';
  }
  else if (context.config.open_speed === CoverSpeed.FAST) {
    context.elements.speedButton.style.backgroundColor = 'var(--bubble-accent-color, var(--bubble-default-color))';
  }
  else {
    context.elements.speedButton.style.backgroundColor = 'var(--bubble-default-color)';
  }
  if (!(context.config.show_speed_button && context.config.open_speed)) {
    context.elements.speedButton.style.display = 'none';
  }

  context.elements.icon.icon = showsOpenIcon(stateObj)
    ? getIcon(context, context.config.entity, context.config.icon_open)
    : getIcon(context, context.config.entity, context.config.icon_close);
  
  const openSlowSpeed = context.config.open_speed === CoverSpeed.SLOW;
  const closeSlowSpeed = context.config.close_speed === CoverSpeed.SLOW;
  const openFastSpeed = context.config.open_speed === CoverSpeed.FAST;
  const closeFastSpeed = context.config.close_speed === CoverSpeed.FAST;
  const iconUpName = (openSlowSpeed && resolveTemplate(context, context.config.icon_up_slow)) ||(openFastSpeed && resolveTemplate(context, context.config.icon_up_fast)) || resolveTemplate(context, context.config.icon_up) || (isCurtains ? "mdi:arrow-expand-horizontal" : "mdi:arrow-up");
  const iconDownName = (closeSlowSpeed && resolveTemplate(context, context.config.icon_down_slow)) || (closeFastSpeed && resolveTemplate(context, context.config.icon_down_fast)) || resolveTemplate(context, context.config.icon_down) || (isCurtains ? "mdi:arrow-collapse-horizontal" : "mdi:arrow-down");
  
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
  //
  // Each button stands on its own support, the way ha-cover-tilt-controls hides
  // them one by one. Restoring the display matters as much as removing it,
  // since this used to be one way for the life of the card, so a tilt service
  // typed in the editor never brought its button back (#2618).
  if (context.elements.buttonTiltOpen) {
    if (tiltButtons.open) {
      context.elements.buttonTiltOpen.style.display = "";
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
    if (tiltButtons.close) {
      context.elements.buttonTiltClose.style.display = "";
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
  // The row follows the buttons it is meant to hold, so it never takes a slot
  // in the layout for two hidden buttons (#2618)
  const hasTiltButtons = tiltButtonSupport(stateObj, context.config).any;

  // Skip DOM manipulation when position and tilt support haven't changed
  if (context._lastTiltPosition === tiltButtonsPosition &&
      context._lastTiltButtons === hasTiltButtons) {
    return;
  }
  context._lastTiltPosition = tiltButtonsPosition;
  context._lastTiltButtons = hasTiltButtons;

  const tilt = context.elements.tiltButtonsContainer;
  if (!tilt) return;

  const removeTiltFrom = (parent) => {
    if (parent?.contains(tilt)) parent.removeChild(tilt);
  };

  if (!hasTiltButtons || tiltButtonsConfig === 'hidden') {
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
  } else if (tiltButtonsPosition === 'left' || tiltButtonsPosition === 'right') {
    // Explicit left/right stays physical: in RTL the flex row renders DOM-first
    // on the physical right, so the insertion side is mirrored to compensate
    const buttons = context.elements.buttonsContainer;
    if (!buttons) {
      tilt.style.display = 'none';
      return;
    }
    tilt.classList.add('has-background');
    const insertFirst = isDocumentRTL()
      ? tiltButtonsPosition === 'right'
      : tiltButtonsPosition === 'left';
    if (insertFirst && buttons.firstChild) {
      buttons.insertBefore(tilt, buttons.firstChild);
    } else {
      buttons.appendChild(tilt);
    }
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

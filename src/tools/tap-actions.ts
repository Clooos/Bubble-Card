const holdDuration = 300;
let lastAction = null;
let lastActionTime = 0;
let lastDoubleTapTime = 0;

class ActionHandler {
  constructor(element, config, sendActionEvent) {
    this.element = element;
    this.config = config;
    this.sendActionEvent = sendActionEvent;
    this.holdDuration = 300;
    this.holdTimeout = null;
    this.tapTimeout = null;
    this.lastTap = 0;
    this.holdTriggered = false;
  }

  handleStart() {
    this.holdTriggered = false; // Réinitialisez holdTriggered à false ici
    this.holdTimeout = setTimeout(() => {
      this.sendActionEvent(this.element, this.config, 'hold');
      this.holdTriggered = true;
    }, this.holdDuration);
  }

  handleEnd(event) {
    clearTimeout(this.holdTimeout);
    let currentTime = new Date().getTime();
    let tapLength = currentTime - this.lastTap;

    if (tapLength < this.holdDuration && tapLength > 0) {
      clearTimeout(this.tapTimeout);
      this.sendActionEvent(this.element, this.config, 'double_tap');
    } else {
      if (!this.holdTriggered) {
        this.tapTimeout = setTimeout(() => {
          this.sendActionEvent(this.element, this.config, 'tap');
        }, this.holdDuration);
      }
    }
    this.lastTap = currentTime;
    this.holdTriggered = false;
  }

  handleCancel() {
    clearTimeout(this.holdTimeout);
    this.holdTriggered = false;
  }
}

export function sendActionEvent(element, config, action) {
  const currentTime = Date.now();

  if (action === 'tap' && currentTime - lastDoubleTapTime < holdDuration) {
    return;
  }

  if (lastAction === action && currentTime - lastActionTime < holdDuration) {
    return;
  }

  let actionConfig = {
    entity: config.entity,
    tap_action: config.tap_action || {
      action: "more-info"
    },
    double_tap_action: config.double_tap_action || {
      action: "toggle"
    },
    hold_action: config.hold_action || {
      action: "toggle"
    }
  };

  setTimeout(() => {
    const event = new Event('hass-action', {
      bubbles: true,
      composed: true,
    });
    event.detail = {
      config: actionConfig,
      action: action,
    };
    element.dispatchEvent(event);
  }, 1);

  lastAction = action;
  lastActionTime = currentTime;

  if (action === 'double_tap') {
    lastDoubleTapTime = currentTime;
  }
}

export function addActions(element, config, hass, forwardHaptic) {
  let handler = new ActionHandler(element, config, sendActionEvent);
  if ('ontouchstart' in window) {
    element.addEventListener('touchstart', handler.handleStart.bind(handler), { passive: true });
    element.addEventListener('touchend', (event) => handler.handleEnd(event), { passive: true });
    element.addEventListener('touchcancel', handler.handleCancel.bind(handler), { passive: true });
  } else {
    element.addEventListener('mousedown', handler.handleStart.bind(handler), { passive: true });
    element.addEventListener('mouseup', (event) => handler.handleEnd(event), { passive: true });
    element.addEventListener('mouseout', handler.handleCancel.bind(handler), { passive: true });
  }
}
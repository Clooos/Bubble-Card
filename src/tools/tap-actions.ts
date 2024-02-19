const maxHoldDuration = 300;
const doubleTapTimeout = 300;

class ActionHandler {
  constructor(element, config, sendActionEvent) {
    this.element = element;
    this.config = config;
    this.sendActionEvent = sendActionEvent;
    this.tapTimeout = null;
    this.lastTap = 0;
    this.startTime = null;
  }

  handleStart() {
    this.startTime = Date.now();

    // Another action has started, we should clean the tap timeout
    clearTimeout(this.tapTimeout);
  }

  handleEnd() {
    // There is no ongoing action
    if (this.startTime === null) return;

    const currentTime = Date.now();
    const holdDuration = currentTime - this.startTime;
    const doubleTapDuration = currentTime - this.lastTap;

    this.lastTap = currentTime;
    this.startTime = null;

    if (holdDuration > maxHoldDuration) {
      // First scenario: the user was holding the button for maxHoldDuration
      this.sendActionEvent(this.element, this.config, 'hold');
    } else if (doubleTapDuration < doubleTapTimeout) {
      // Second scenario: the user is not holding and the previous tap was a short time ago
      this.sendActionEvent(this.element, this.config, 'double_tap');
    } else {
      // Third scenario: we wait for the double tap amount of time and if nothing happens, send a tap
      this.tapTimeout = setTimeout(() => {
        this.sendActionEvent(this.element, this.config, 'tap');
      }, doubleTapTimeout);
    }
  }
}

export function sendActionEvent(element, config, action) {
  const tapAction = config.tap_action ?? { action: "more-info" };
  const doubleTapAction = config.double_tap_action || {
    action: config.card_type === "state" ? "more-info" : "toggle"
  }
  const holdAction = config.hold_action || {
    action: config.card_type === "state" ? "more-info" : "toggle"
  }

  const actionConfig = {
    entity: config.entity,
    tap_action: tapAction,
    double_tap_action: doubleTapAction,
    hold_action: holdAction
  };

  setTimeout(() => {
    const event = new Event('hass-action', { bubbles: true, composed: true });
    event.detail = { config: actionConfig, action: action };
    element.dispatchEvent(event);
  }, 1);
}

export function addActions(element, config) {
  const handler = new ActionHandler(element, config, sendActionEvent);

  element.addEventListener('pointerdown', handler.handleStart.bind(handler), { passive: true });
  element.addEventListener('pointerup', handler.handleEnd.bind(handler), { passive: true });
  element.addEventListener('contextmenu', (e) => e.preventDefault());
}
import { tapFeedback } from "./utils.ts";

const maxHoldDuration = 300;
const doubleTapTimeout = 300;

export function callAction(element, config, action) {
  setTimeout(() => {
    const event = new Event('hass-action', { bubbles: true, composed: true });
    event.detail = { config, action };
    element.dispatchEvent(event);
  }, 1);
}

class ActionHandler {
  constructor(element, config, sendActionEvent, defaultEntity, defaultActions) {
    this.element = element;
    this.config = config;
    this.sendActionEvent = sendActionEvent;
    this.defaultEntity = defaultEntity;
    this.defaultActions = defaultActions;
    this.tapTimeout = null;
    this.lastTap = 0;
    this.startTime = null;
  }

  handleStart(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();

    this.startTime = Date.now();
    clearTimeout(this.tapTimeout);
  }

  handleEnd() {
    if (this.startTime === null) return;

    const currentTime = Date.now();
    const holdDuration = currentTime - this.startTime;
    const doubleTapDuration = currentTime - this.lastTap;

    this.lastTap = currentTime;
    this.startTime = null;

    if (holdDuration > maxHoldDuration) {
      this.sendActionEvent(this.element, this.config, 'hold', this.defaultEntity, this.defaultActions);
    } else if (doubleTapDuration < doubleTapTimeout) {
      this.sendActionEvent(this.element, this.config, 'double_tap', this.defaultEntity, this.defaultActions);
    } else {
      this.tapTimeout = setTimeout(() => {
        this.sendActionEvent(this.element, this.config, 'tap', this.defaultEntity, this.defaultActions);
      }, doubleTapTimeout);
    }
  }
}

export function sendActionEvent(element, config, action, defaultEntity, defaultActions) {
  const tapAction = config?.tap_action || defaultActions?.tap_action || { action: "more-info" };
  const doubleTapAction = config?.double_tap_action || defaultActions?.double_tap_action || { action: "toggle" };
  const holdAction = config?.hold_action || defaultActions?.hold_action || { action: "toggle" };
  const entity = config?.entity ?? defaultEntity;

  callAction(
    element,
    { entity: entity, tap_action: tapAction, double_tap_action: doubleTapAction, hold_action: holdAction },
    action
  );
}

export function addActions(element, config, defaultEntity, defaultActions) {
  const handler = new ActionHandler(element, config, sendActionEvent, defaultEntity, defaultActions);

  element.addEventListener('pointerdown', handler.handleStart.bind(handler));
  element.addEventListener('pointerup', handler.handleEnd.bind(handler));
  element.addEventListener('contextmenu', (e) => e.preventDefault());
  element.style.cursor = 'pointer';
}

export function addFeedback(element, feedbackElement) {
  element.addEventListener('click', () => tapFeedback(feedbackElement));
}

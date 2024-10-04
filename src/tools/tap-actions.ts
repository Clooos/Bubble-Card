import { tapFeedback, forwardHaptic } from "./utils.ts";

const maxHoldDuration = 200;
const doubleTapTimeout = 200;

// Global event listener
document.body.addEventListener('pointerdown', (event) => {
  const path = event.composedPath();
  let actionElement = null;

  for (const element of path) {
    if (element.classList && element.classList.contains('bubble-action')) {
      actionElement = element;
      break;
    }
  }

  if (actionElement) {
    const config = {
      tap_action: JSON.parse(actionElement.dataset.tapAction),
      double_tap_action: JSON.parse(actionElement.dataset.doubleTapAction),
      hold_action: JSON.parse(actionElement.dataset.holdAction),
      entity: actionElement.dataset.entity,
    };

    if (!actionElement.actionHandler) {
      actionElement.actionHandler = new ActionHandler(actionElement, config, sendActionEvent);
    }

    actionElement.actionHandler.handleStart(event);

    actionElement.addEventListener('pointerup', actionElement.actionHandler.handleEnd.bind(actionElement.actionHandler), { once: true });
  }
});

export function callAction(element, actionConfig, action) {
  setTimeout(() => {
    const event = new Event('hass-action', { bubbles: true, composed: true });

    if (action === 'tap' || action === 'double_tap' || action === 'hold') {
      event.detail = { 
        config: actionConfig,
        action: action,
      };
    } else {
      // Handle direct call with any action name (e.g. open_action)
      element.modifiedConfig = {
        ...actionConfig,
        tap_action: {
          ...actionConfig[action],
        },
      };
      delete element.modifiedConfig[action];

      event.detail = { 
        config: element.modifiedConfig,
        action: 'tap',
      };
    }

    element.dispatchEvent(event);
  }, 10);
}

// Function to add actions and store configs in data attributes
export function addActions(element, config, defaultEntity, defaultActions) {
  element.classList.add('bubble-action');

  // Store full action configs as JSON strings
  element.dataset.entity = config?.entity || defaultEntity;
  element.dataset.tapAction = JSON.stringify(config?.tap_action || defaultActions?.tap_action || { action: "more-info" });
  element.dataset.doubleTapAction = JSON.stringify(config?.double_tap_action || defaultActions?.double_tap_action || { action: "toggle" });
  element.dataset.holdAction = JSON.stringify(config?.hold_action || defaultActions?.hold_action || { action: "toggle" });

  // Set cursor style based on actions
  const tapAction = JSON.parse(element.dataset.tapAction);
  const doubleTapAction = JSON.parse(element.dataset.doubleTapAction);
  const holdAction = JSON.parse(element.dataset.holdAction);

  if (tapAction.action === "none" && doubleTapAction.action === "none" && holdAction.action === "none") {
    element.style.cursor = '';
  } else {
    element.style.cursor = 'pointer';
  }
}

class ActionHandler {
  constructor(element, config, sendActionEvent) {
    this.element = element;
    this.config = config;
    this.sendActionEvent = sendActionEvent;
    this.tapTimeout = null;
    this.holdTimeout = null;  // Hold timeout to delay the hold action
    this.lastTap = 0;
    this.startTime = null;
    this.holdFired = false;  // Flag to check if hold action was triggered
  }

  handleStart(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    this.startTime = Date.now();
    clearTimeout(this.tapTimeout);  // Clear any existing tap timeout
    clearTimeout(this.holdTimeout); // Clear any existing hold timeout
    this.holdFired = false;         // Reset hold fired flag

    // Trigger hold action after maxHoldDuration if hold action is valid
    const holdAction = this.config.hold_action || { action: 'none' };
    if (holdAction.action !== 'none') {
      this.holdTimeout = setTimeout(() => {
        this.sendActionEvent(this.element, this.config, 'hold');
        this.holdFired = true;  // Mark that hold action was triggered
      }, maxHoldDuration);
    }
  }

  handleEnd(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    if (this.startTime === null) return;

    const currentTime = Date.now();
    const timeSinceLastTap = currentTime - this.lastTap;

    // Clear hold timeout if it's not triggered yet
    clearTimeout(this.holdTimeout);
    this.holdTimeout = null; // Reset hold timeout

    const doubleTapAction = this.config.double_tap_action || { action: 'none' };
    const tapAction = this.config.tap_action || { action: 'none' };

    // If hold action was fired, prevent any tap or double-tap
    if (this.holdFired) {
      this.startTime = null;  // Reset start time and return
      return;
    }

    // Double-tap detection
    if (timeSinceLastTap < doubleTapTimeout && doubleTapAction.action !== 'none') {
      clearTimeout(this.tapTimeout);  // Cancel pending single-tap action
      this.sendActionEvent(this.element, this.config, 'double_tap');
    } else if (tapAction.action !== 'none') {
      // Start timeout for single-tap if no double-tap detected
      this.tapTimeout = setTimeout(() => {
        this.sendActionEvent(this.element, this.config, 'tap');
      }, doubleTapTimeout);  // Wait for double-tap window
    }

    // Update lastTap timestamp
    this.lastTap = currentTime;
    this.startTime = null;  // Reset start time
  }
}

// sendActionEvent function
export function sendActionEvent(element, config, action) {
  const tapAction = config.tap_action || { action: "more-info" };
  const doubleTapAction = config.double_tap_action || { action: "toggle" };
  const holdAction = config.hold_action || { action: "toggle" };
  const entity = config.entity;

  let actionConfig;
  switch (action) {
    case 'tap':
      actionConfig = tapAction;
      break;
    case 'double_tap':
      actionConfig = doubleTapAction;
      break;
    case 'hold':
      actionConfig = holdAction;
      break;
    default:
      actionConfig = tapAction;
  }

  callAction(element, { entity: entity, tap_action: tapAction, double_tap_action: doubleTapAction, hold_action: holdAction }, action);
}

export function addFeedback(element, feedbackElement) {
  element.addEventListener('click', () => { 
    forwardHaptic("selection");
    tapFeedback(feedbackElement);
  });
}
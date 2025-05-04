import { forwardHaptic, createElement } from "./utils.js";

const maxHoldDuration = 400;
const doubleTapTimeout = 200;
const movementThreshold = 5; // Movement threshold to consider as scroll
const scrollDisableTime = 300;
const interactionDelay = 50; // Needed for iOS, can't be lower

window.isScrolling = false;

function disableActionsDuringScroll() {
  window.isScrolling = true;
  setTimeout(() => {
    window.isScrolling = false;
  }, scrollDisableTime);
}

document.addEventListener('scroll', disableActionsDuringScroll, { passive: true });

const actionHandler = new WeakMap();
const activeHandlers = new Set();

function handlePointerDown(event) {
  if (window.isScrolling) return;

  const actionElement = event.composedPath().find(element => 
    element.classList?.contains('bubble-action')
  );

  if (!actionElement) return;

  if (event.cancelable) {
    event.preventDefault();
  }

  const config = {
    tap_action: JSON.parse(actionElement.dataset.tapAction),
    double_tap_action: JSON.parse(actionElement.dataset.doubleTapAction),
    hold_action: JSON.parse(actionElement.dataset.holdAction),
    entity: actionElement.dataset.entity,
  };

  if (!actionHandler.has(actionElement)) {
    const handler = new ActionHandler(actionElement, config, sendActionEvent);
    actionHandler.set(actionElement, handler);
    activeHandlers.add(handler);
  }

  const handler = actionHandler.get(actionElement);
  handler.handleStart(event);

  const cleanup = () => {
    actionElement.removeEventListener('pointerup', endHandler);
    actionElement.removeEventListener('pointercancel', endHandler);
    document.removeEventListener('pointerup', endHandler);
    document.removeEventListener('scroll', scrollHandler);
    activeHandlers.delete(handler);
  };

  const endHandler = (e) => {
    handler.handleEnd(e);
    cleanup();
  };

  const scrollHandler = () => {
    handler.handleScroll();
    cleanup();
  };

  actionElement.addEventListener('pointerup', endHandler, { once: true });
  actionElement.addEventListener('pointercancel', endHandler, { once: true });
  document.addEventListener('pointerup', endHandler, { once: true });
  document.addEventListener('scroll', scrollHandler, { once: true });
}

document.body.addEventListener('pointerdown', handlePointerDown, { passive: true });

export function callAction(element, actionConfig, action) {
  setTimeout(() => {
    const event = new Event('hass-action', { bubbles: true, composed: true });

    const updatedConfig = { ...actionConfig };
    if (!updatedConfig.entity_id && this?.config?.entity) {
      updatedConfig.entity_id = this.config.entity;
    }

    if (action === 'tap' || action === 'double_tap' || action === 'hold') {
      event.detail = { 
        config: updatedConfig,
        action: action,
      };
    } else {
      element.modifiedConfig = {
        ...updatedConfig,
        tap_action: {
          ...updatedConfig[action],
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
export function addActions(element, config, defaultEntity, defaultActions = {}) {
  element.classList.add('bubble-action');

  // Use provided config for actions if available, otherwise use defaults
  const tapAction = config?.tap_action || defaultActions?.tap_action || { action: "none" };
  const doubleTapAction = config?.double_tap_action || defaultActions?.double_tap_action || { action: "none" };
  const holdAction = config?.hold_action || defaultActions?.hold_action || { action: "none" };

  element.dataset.entity = config?.entity || defaultEntity;
  element.dataset.tapAction = JSON.stringify(tapAction);
  element.dataset.doubleTapAction = JSON.stringify(doubleTapAction);
  element.dataset.holdAction = JSON.stringify(holdAction);

  const hasAction = tapAction.action !== "none" || doubleTapAction.action !== "none" || holdAction.action !== "none";
  if (hasAction) {
    element.classList.add('bubble-action-enabled');
    element.haRipple = createElement('ha-ripple');
    element.appendChild(element.haRipple);
  }

  // Return the final actions applied
  return { tap_action: tapAction, double_tap_action: doubleTapAction, hold_action: holdAction, has_action: hasAction };
}

class ActionHandler {
  constructor(element, config, sendActionEvent) {
    this.element = element;
    this.config = config;
    this.sendActionEvent = sendActionEvent;
    this.tapTimeout = null;
    this.holdTimeout = null;
    this.startX = 0;
    this.startY = 0;
    this.holdFired = false;
    this.pointerMoveListener = this.detectScrollLikeMove.bind(this);
    this.isDisconnected = false;
    this.hasMoved = false;
  }

  cleanup() {
    this.isDisconnected = true;
    clearTimeout(this.tapTimeout);
    clearTimeout(this.holdTimeout);
    document.removeEventListener('pointermove', this.pointerMoveListener);
    this.tapTimeout = null;
    this.holdTimeout = null;
  }

  handleStart(e) {
    if (window.isScrolling || this.isDisconnected) return;

    if (e.cancelable) {
      e.preventDefault();
    }

    this.startX = e.clientX;
    this.startY = e.clientY;
    this.holdFired = false;
    this.hasMoved = false;

    document.addEventListener('pointermove', this.pointerMoveListener);

    this.holdTimeout = setTimeout(() => {
      const holdAction = this.config.hold_action || { action: 'none' };
      if (holdAction.action !== 'none' && !window.isScrolling && !this.hasMoved) {
        this.sendActionEvent(this.element, this.config, 'hold');
        this.holdFired = true;
      }
    }, maxHoldDuration);
  }

  detectScrollLikeMove(e) {
    const deltaX = Math.abs(e.clientX - this.startX);
    const deltaY = Math.abs(e.clientY - this.startY);

    if (deltaX > movementThreshold || deltaY > movementThreshold) {
      // Consider this as a drag/scroll type movement
      this.hasMoved = true;
      disableActionsDuringScroll(); // Disable actions for a short period of time
      
      // Clean up timeouts to avoid unwanted actions
      clearTimeout(this.holdTimeout);
      this.holdTimeout = null;
      
      // Stop listening for movements once a drag is detected
      document.removeEventListener('pointermove', this.pointerMoveListener);
    }
  }

  handleEnd(e) {
    if (window.isScrolling || this.isDisconnected || this.hasMoved) return;

    if (e.cancelable) {
      e.preventDefault();
    }

    clearTimeout(this.holdTimeout);
    this.holdTimeout = null;
    document.removeEventListener('pointermove', this.pointerMoveListener);

    if (this.holdFired) return;

    const currentTime = Date.now();
    const doubleTapAction = this.config.double_tap_action || { action: 'none' };
    const tapAction = this.config.tap_action || { action: 'none' };

    if (this.lastTap && (currentTime - this.lastTap < doubleTapTimeout) && doubleTapAction.action !== 'none') {
      clearTimeout(this.tapTimeout);
      this.sendActionEvent(this.element, this.config, 'double_tap');
    } else if (tapAction.action !== 'none') {
      if (doubleTapAction.action !== 'none') {
        this.tapTimeout = setTimeout(() => {
          this.sendActionEvent(this.element, this.config, 'tap');
        }, doubleTapTimeout);
      } else {
        setTimeout(() => {
          this.sendActionEvent(this.element, this.config, 'tap');
        }, interactionDelay);
      }
    }

    this.lastTap = currentTime;
  }

  handleScroll() {
    this.hasMoved = true;
    clearTimeout(this.holdTimeout);
    this.holdTimeout = null;
    document.removeEventListener('pointermove', this.pointerMoveListener);
  }
}

export function sendActionEvent(element, config, action) {
  const tapAction = config.tap_action || { action: "more-info" };
  const doubleTapAction = config.double_tap_action || { action: "none" };
  const holdAction = config.hold_action || { action: "none" };
  const entity = config.entity || this.config?.entity;

  const updateAction = (actionConfig) => {
    if (
      actionConfig.service &&
      actionConfig.target?.entity_id === "entity" &&
      entity
    ) {
      return {
        ...actionConfig,
        target: {
          ...actionConfig.target,
          entity_id: entity,
        },
      };
    }
    return actionConfig;
  };

  const updatedTapAction = updateAction(tapAction);
  const updatedDoubleTapAction = updateAction(doubleTapAction);
  const updatedHoldAction = updateAction(holdAction);

  let actionConfig;
  switch (action) {
    case 'tap':
      actionConfig = updatedTapAction;
      break;
    case 'double_tap':
      actionConfig = updatedDoubleTapAction;
      break;
    case 'hold':
      actionConfig = updatedHoldAction;
      break;
    default:
      actionConfig = updatedTapAction;
  }

  callAction(element, { 
    entity: entity, 
    tap_action: updatedTapAction, 
    double_tap_action: updatedDoubleTapAction, 
    hold_action: updatedHoldAction 
  }, action);
}

export function addFeedback(element, feedbackElement) {
  element.addEventListener('pointerup', (e) => { 
    if (e.cancelable) {
      e.preventDefault();
    }
    forwardHaptic("selection");
  });
}

// Add cleanup function
export function cleanupTapActions() {
  for (const handler of activeHandlers) {
    handler.cleanup();
  }
  activeHandlers.clear();
}
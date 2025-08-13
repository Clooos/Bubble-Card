import { forwardHaptic, createElement } from "./utils.js";

const maxHoldDuration = 400;
const doubleTapTimeout = 200;
const movementThreshold = 5; // Movement threshold to consider as scroll
const scrollDisableTime = 300;

window.isScrolling = false;

function disableActionsDuringScroll() {
  window.isScrolling = true;
  setTimeout(() => {
    window.isScrolling = false;
  }, scrollDisableTime);
}

// Register global listeners only once
if (!window.__bubbleTapActionsInitialized) {
  document.addEventListener('scroll', disableActionsDuringScroll, { passive: true });
  document.body.addEventListener('pointerdown', handlePointerDown, { passive: true });
  document.body.addEventListener('touchstart', handlePointerDown, { passive: true });
  window.__bubbleTapActionsInitialized = true;
}

const actionHandler = new WeakMap();
const activeHandlers = new Set();

function handlePointerDown(event) {
  if (window.isScrolling) return;

  const actionElement = event.composedPath().find(element => 
    element.classList?.contains('bubble-action')
  );

  // Exclude pop-up close buttons to avoid conflicts
  const isCloseButton = event.composedPath().find(element => 
    element.classList?.contains('close-pop-up') || 
    element.classList?.contains('bubble-close-button')
  );
  
  if (isCloseButton) {
    return;
  }

  if (!actionElement) return;
  
  let handler = actionHandler.get(actionElement);

  if (!handler) {
    const config = {
      tap_action: JSON.parse(actionElement.dataset.tapAction),
      double_tap_action: JSON.parse(actionElement.dataset.doubleTapAction),
      hold_action: JSON.parse(actionElement.dataset.holdAction),
      entity: actionElement.dataset.entity,
    };
    handler = new ActionHandler(actionElement, config, sendActionEvent);
    actionHandler.set(actionElement, handler);
  } else {
    // Reset the state of the existing handler to avoid problems after navigation
    handler.resetState();
  }
  
  handler.handleStart(event);
  
  if (!handler.isInteractionInProgress()) {
    return;
  }

  activeHandlers.add(handler);

  const cleanup = () => {
    actionElement.removeEventListener('pointerup', endHandler);
    actionElement.removeEventListener('pointercancel', endHandler);
    actionElement.removeEventListener('touchend', endHandler);
    actionElement.removeEventListener('touchcancel', endHandler);
    document.removeEventListener('pointerup', endHandler);
    document.removeEventListener('touchend', endHandler);
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
  actionElement.addEventListener('touchend', endHandler, { once: true });
  actionElement.addEventListener('touchcancel', endHandler, { once: true });
  document.addEventListener('pointerup', endHandler, { once: true });
  document.addEventListener('touchend', endHandler, { once: true });
  document.addEventListener('scroll', scrollHandler, { once: true });
}

export function callAction(element, actionConfig, action) {
  const event = new Event('hass-action', { bubbles: true, composed: true });

  const updatedConfig = { ...actionConfig };
  // Ensure entity_id is set if entity is provided, as hass-action often expects entity_id
  if (updatedConfig.entity && !updatedConfig.entity_id) {
    updatedConfig.entity_id = updatedConfig.entity;
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
    this.touchMoveListener = this.detectScrollLikeMove.bind(this);
    this.isDisconnected = false;
    this.hasMoved = false;
    this.interactionStarted = false;
    this.justEndedTouchEventTime = 0;
    this.currentInteractionType = null;
    this.interactionStartTime = 0;
    this.preventDefaultCalled = false;
  }

  isInteractionInProgress() {
    return this.interactionStarted;
  }

  resetState() {
    // Clear all active timeouts and event listeners
    clearTimeout(this.tapTimeout);
    clearTimeout(this.holdTimeout);
    document.removeEventListener('pointermove', this.pointerMoveListener);
    document.removeEventListener('touchmove', this.touchMoveListener);
    
    // Reset all states
    this.tapTimeout = null;
    this.holdTimeout = null;
    this.holdFired = false;
    this.hasMoved = false;
    this.interactionStarted = false;
    this.isDisconnected = false;
    this.justEndedTouchEventTime = 0;
    this.currentInteractionType = null;
    this.interactionStartTime = 0;
    this.preventDefaultCalled = false;
    this.startX = 0;
    this.startY = 0;
  }

  cleanup() {
    this.isDisconnected = true;
    clearTimeout(this.tapTimeout);
    clearTimeout(this.holdTimeout);
    document.removeEventListener('pointermove', this.pointerMoveListener);
    document.removeEventListener('touchmove', this.touchMoveListener);
    this.tapTimeout = null;
    this.holdTimeout = null;
    this.interactionStarted = false;
  }

  handleStart(e) {
    const now = Date.now();

    if (e.type === 'pointerdown' && (now - this.justEndedTouchEventTime < 50)) {
      return; 
    }

    if (window.isScrolling || this.isDisconnected) return;

    if (this.interactionStarted) {
      if (e.type === 'touchstart' && this.currentInteractionType === 'pointerdown' && (now - this.interactionStartTime < 50)) {
        return;
      }
      return;
    }

    this.interactionStarted = true;
    this.currentInteractionType = e.type;
    this.interactionStartTime = now;
    
    this.holdFired = false;
    this.hasMoved = false;

    if (e.touches && e.touches[0]) {
      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
    } else {
      this.startX = e.clientX;
      this.startY = e.clientY;
    }

    document.addEventListener('pointermove', this.pointerMoveListener, { passive: true });
    document.addEventListener('touchmove', this.touchMoveListener, { passive: true });

    this.holdTimeout = setTimeout(() => {
      const holdAction = this.config.hold_action || { action: 'none' };
      if (holdAction.action !== 'none' && !window.isScrolling && !this.hasMoved) {
        this.sendActionEvent(this.element, this.config, 'hold');
        this.holdFired = true;
      }
    }, maxHoldDuration);
  }

  detectScrollLikeMove(e) {
    let currentX, currentY;
    
    if (e.touches && e.touches[0]) {
      currentX = e.touches[0].clientX;
      currentY = e.touches[0].clientY;
    } else {
      currentX = e.clientX;
      currentY = e.clientY;
    }
    
    const deltaX = Math.abs(currentX - this.startX);
    const deltaY = Math.abs(currentY - this.startY);

    if (deltaX > movementThreshold || deltaY > movementThreshold) {
      this.hasMoved = true;
      disableActionsDuringScroll();
      
      clearTimeout(this.holdTimeout);
      this.holdTimeout = null;
      
      document.removeEventListener('pointermove', this.pointerMoveListener);
      document.removeEventListener('touchmove', this.touchMoveListener);
    }
  }

  handleEnd(e) {
    if (e.type === 'touchend' || e.type === 'touchcancel') {
        this.justEndedTouchEventTime = Date.now();
    }

    if (!this.interactionStarted) {
        return;
    }

    if (window.isScrolling || this.isDisconnected || this.hasMoved) {
      this.interactionStarted = false;
      return;
    }
    
    clearTimeout(this.holdTimeout);
    this.holdTimeout = null;
    document.removeEventListener('pointermove', this.pointerMoveListener);
    document.removeEventListener('touchmove', this.touchMoveListener);

    const wasHoldFired = this.holdFired;
    const currentTime = Date.now();
    const doubleTapAction = this.config.double_tap_action || { action: 'none' };
    const tapAction = this.config.tap_action || { action: 'none' };
    let actionInitiatedForTapOrDoubleTap = false;

    if (!wasHoldFired) {
      if (this.lastTap && (currentTime - this.lastTap < doubleTapTimeout) && doubleTapAction.action !== 'none') {
        clearTimeout(this.tapTimeout); // Annule le tap simple en attente
        this.sendActionEvent(this.element, this.config, 'double_tap');
        actionInitiatedForTapOrDoubleTap = true;
      } else if (tapAction.action !== 'none') {
        if (doubleTapAction.action !== 'none') {
          this.tapTimeout = setTimeout(() => {
            if (!this.isDisconnected && !this.holdFired && !this.hasMoved) {
              this.sendActionEvent(this.element, this.config, 'tap');
            }
          }, doubleTapTimeout);
          actionInitiatedForTapOrDoubleTap = true;
        } else {
          this.sendActionEvent(this.element, this.config, 'tap');
          actionInitiatedForTapOrDoubleTap = true;
        }
      }
    }

    if (actionInitiatedForTapOrDoubleTap || wasHoldFired) {
      if (e.cancelable) {
        e.preventDefault();
      }

      const preventSecondEvent = (clickEvent) => {
        const popupElement = clickEvent.composedPath().find(el => el.classList && el.classList.contains('bubble-pop-up'));
        let shouldStopPropagation = true;

        if (popupElement && popupElement.dataset.closeOnClick === 'true') {
          shouldStopPropagation = false;
        }

        if (shouldStopPropagation) {
          clickEvent.stopPropagation();
        }
        
        if (wasHoldFired) { 
          clickEvent.preventDefault();
        }
      };
      document.body.addEventListener('click', preventSecondEvent, { capture: true, once: true });

      setTimeout(() => {
        document.body.removeEventListener('click', preventSecondEvent, { capture: true });
      }, 350); // Delay needed to prevent second click on iOS
    }

    this.lastTap = currentTime;
    this.interactionStarted = false;
  }

  handleScroll() {
    this.hasMoved = true;
    clearTimeout(this.holdTimeout);
    this.holdTimeout = null;
    document.removeEventListener('pointermove', this.pointerMoveListener);
    document.removeEventListener('touchmove', this.touchMoveListener);
    this.interactionStarted = false;
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
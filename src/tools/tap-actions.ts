// import { tapFeedback } from "./utils.ts";

// const maxHoldDuration = 300;
// const doubleTapTimeout = 300;

// export function callAction(element, config, action) {
//   setTimeout(() => {
//     const event = new Event('hass-action', { bubbles: true, composed: true });
//     event.detail = { config, action };
//     element.dispatchEvent(event);
//   }, 1);
// }

// class ActionHandler {
//   constructor(element, config, sendActionEvent) {
//     this.element = element;
//     this.config = config;
//     this.sendActionEvent = sendActionEvent;
//     this.tapTimeout = null;
//     this.lastTap = 0;
//     this.startTime = null;
//   }

//   handleStart(e) {
//     e.stopPropagation();
//     e.stopImmediatePropagation();

//     this.startTime = Date.now();

//     // Another action has started, we should clean the tap timeout
//     clearTimeout(this.tapTimeout);
//   }

//   handleEnd() {
//     // There is no ongoing action
//     if (this.startTime === null) return;

//     const currentTime = Date.now();
//     const holdDuration = currentTime - this.startTime;
//     const doubleTapDuration = currentTime - this.lastTap;

//     this.lastTap = currentTime;
//     this.startTime = null;

//     if (holdDuration > maxHoldDuration) {
//       // First scenario: the user was holding the button for maxHoldDuration
//       this.sendActionEvent(this.element, this.config, 'hold');
//     } else if (doubleTapDuration < doubleTapTimeout) {
//       // Second scenario: the user is not holding and the previous tap was a short time ago
//       this.sendActionEvent(this.element, this.config, 'double_tap');
//     } else {
//       // Third scenario: we wait for the double tap amount of time and if nothing happens, send a tap
//       this.tapTimeout = setTimeout(() => {
//         this.sendActionEvent(this.element, this.config, 'tap');
//       }, doubleTapTimeout);
//     }
//   }
// }

// export function sendActionEvent(element, config, action, defaultEntity) {
//   const tapAction = config.tap_action ?? {  action: "more-info" };
//   const doubleTapAction = config.double_tap_action || { action: "toggle"}
//   const holdAction = config.hold_action || { action: "toggle"}
//   const entity = config.entity ?? defaultEntity;

//   callAction(
//     element,
//     { entity: entity, tap_action: tapAction, double_tap_action: doubleTapAction, hold_action: holdAction },
//     action
//   );
// }

// export function addActions(element, config) {
//   const handler = new ActionHandler(element, config, sendActionEvent);

//   element.addEventListener('pointerdown', handler.handleStart.bind(handler));
//   element.addEventListener('pointerup', handler.handleEnd.bind(handler));
//   element.addEventListener('contextmenu', (e) => e.preventDefault());
//   element.style.cursor = 'pointer';
// }
// export function addFeedback(element, feedbackElement) {
//   element.addEventListener('click', () => tapFeedback(feedbackElement));
// }

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
  constructor(element, config, sendActionEvent, defaultEntity) {
    this.element = element;
    this.config = config;
    this.sendActionEvent = sendActionEvent;
    this.defaultEntity = defaultEntity;
    this.tapTimeout = null;
    this.lastTap = 0;
    this.startTime = null;
  }

  handleStart(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();

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
        this.sendActionEvent(this.element, this.config, 'tap', this.defaultEntity);
      }, doubleTapTimeout);
    }
  }
}

export function sendActionEvent(element, config, action, defaultEntity) {
  const tapAction = config.tap_action ?? { action: "more-info" };
  const doubleTapAction = config.double_tap_action || { action: "toggle" };
  const holdAction = config.hold_action || { action: "toggle" };
  const entity = config.entity ?? defaultEntity;

  callAction(
    element,
    { entity: entity, tap_action: tapAction, double_tap_action: doubleTapAction, hold_action: holdAction },
    action
  );
}

export function addActions(element, config, defaultEntity) {
  const handler = new ActionHandler(element, config, sendActionEvent, defaultEntity);

  element.addEventListener('pointerdown', handler.handleStart.bind(handler));
  element.addEventListener('pointerup', handler.handleEnd.bind(handler));
  element.addEventListener('contextmenu', (e) => e.preventDefault());
  element.style.cursor = 'pointer';
}

export function addFeedback(element, feedbackElement) {
  element.addEventListener('click', () => tapFeedback(feedbackElement));
}
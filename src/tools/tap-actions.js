import { tapFeedback, forwardHaptic } from "./utils.js";

const maxHoldDuration = 400;
const doubleTapTimeout = 200;
const scrollDetectionDelay = 300; // Delay before confirming hold action
const movementThreshold = 5; // Movement threshold to consider as scroll

window.isScrolling = false; // Track if scrolling is active

// Disable actions during scroll
function disableActionsDuringScroll() {
  window.isScrolling = true;
  setTimeout(() => {
    window.isScrolling = false;
  }, scrollDetectionDelay);
}

document.addEventListener('scroll', disableActionsDuringScroll, { passive: true });

// Global event listener
document.body.addEventListener('pointerdown', (event) => {
  if (window.isScrolling) return; // ne rien faire si un scroll est en cours

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
    // En plus, on écoute pointercancel pour un nettoyage complet
    actionElement.addEventListener('pointercancel', actionElement.actionHandler.handleCancel.bind(actionElement.actionHandler), { once: true });
    document.addEventListener('scroll', actionElement.actionHandler.handleScroll.bind(actionElement.actionHandler), { once: true });
  }
}, { passive: true });

export function callAction(element, actionConfig, action) {
  setTimeout(() => {
    const event = new Event('hass-action', { bubbles: true, composed: true });
    const updatedConfig = { ...actionConfig };
    // Correction : ne plus référencer "this.config" qui n'est pas défini ici.
    if (!updatedConfig.entity_id && updatedConfig.entity) {
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
  }, 10);
}

// Ajoute les actions et stocke la config dans des data attributes
export function addActions(element, config, defaultEntity, defaultActions) {
  element.classList.add('bubble-action');

  element.dataset.entity = config?.entity || defaultEntity;
  element.dataset.tapAction = JSON.stringify(config?.tap_action || defaultActions?.tap_action || { action: "more-info" });
  element.dataset.doubleTapAction = JSON.stringify(config?.double_tap_action || defaultActions?.double_tap_action || { action: "toggle" });
  element.dataset.holdAction = JSON.stringify(config?.hold_action || defaultActions?.hold_action || { action: "toggle" });

  const tapAction = JSON.parse(element.dataset.tapAction);
  const doubleTapAction = JSON.parse(element.dataset.doubleTapAction);
  const holdAction = JSON.parse(element.dataset.holdAction);

  element.style.cursor = (tapAction.action === "none" && doubleTapAction.action === "none" && holdAction.action === "none") ? '' : 'pointer';
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
    this.lastTap = 0; // initialisation explicite de lastTap
  }

  handleStart(e) {
    if (window.isScrolling || this.isDisconnected) return;

    this.startX = e.clientX;
    this.startY = e.clientY;
    this.holdFired = false;

    document.addEventListener('pointermove', this.pointerMoveListener);

    this.holdTimeout = setTimeout(() => {
      const holdAction = this.config.hold_action || { action: 'none' };
      if (holdAction.action !== 'none' && !window.isScrolling) {
        this.sendActionEvent(this.element, this.config, 'hold');
        this.holdFired = true;
      }
    }, maxHoldDuration);
  }

  detectScrollLikeMove(e) {
    const deltaX = Math.abs(e.clientX - this.startX);
    const deltaY = Math.abs(e.clientY - this.startY);

    if (deltaX > movementThreshold || deltaY > movementThreshold) {
      clearTimeout(this.holdTimeout);
      this.holdTimeout = null;
      document.removeEventListener('pointermove', this.pointerMoveListener);
    }
  }

  handleEnd(e) {
    // Si un scroll a été détecté, on annule l'action en cours
    if (window.isScrolling || this.isDisconnected) {
      clearTimeout(this.tapTimeout);
      this.tapTimeout = null;
      this.lastTap = 0; // Réinitialise lastTap pour éviter un double tap fantôme
      return;
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
      // Réinitialiser lastTap après un double tap réussi
      this.lastTap = 0;
    } else if (tapAction.action !== 'none') {
      this.tapTimeout = setTimeout(() => {
        this.sendActionEvent(this.element, this.config, 'tap');
      }, doubleTapTimeout);
      this.lastTap = currentTime;
    } else {
      this.lastTap = 0;
    }
  }

  // Nouvelle méthode pour gérer l'annulation (pointercancel)
  handleCancel(e) {
    clearTimeout(this.holdTimeout);
    clearTimeout(this.tapTimeout);
    this.holdTimeout = null;
    this.tapTimeout = null;
    document.removeEventListener('pointermove', this.pointerMoveListener);
    this.lastTap = 0;
  }

  handleScroll() {
    clearTimeout(this.holdTimeout);
    this.holdTimeout = null;
    document.removeEventListener('pointermove', this.pointerMoveListener);
  }
}

export function sendActionEvent(element, config, action) {
  const tapAction = config.tap_action || { action: "more-info" };
  const doubleTapAction = config.double_tap_action || { action: "toggle" };
  const holdAction = config.hold_action || { action: "toggle" };
  // Correction : utiliser l'entité définie dans la config ou dans le dataset
  const entity = config.entity || element.dataset.entity;

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
  element.addEventListener('click', () => { 
    forwardHaptic("selection");
    tapFeedback(feedbackElement);
  });
}


// // Global event listener
// document.body.addEventListener('pointerdown', (event) => {
//   if (window.isScrolling) return; // Do nothing if scrolling is active

//   const path = event.composedPath();
//   let actionElement = null;

//   for (const element of path) {
//     if (element.classList && element.classList.contains('bubble-action')) {
//       actionElement = element;
//       break;
//     }
//   }

//   if (actionElement) {
//     const config = {
//       tap_action: JSON.parse(actionElement.dataset.tapAction),
//       double_tap_action: JSON.parse(actionElement.dataset.doubleTapAction),
//       hold_action: JSON.parse(actionElement.dataset.holdAction),
//       entity: actionElement.dataset.entity,
//     };

//     if (!actionElement.actionHandler) {
//       actionElement.actionHandler = new ActionHandler(actionElement, config, sendActionEvent);
//     }

//     actionElement.actionHandler.handleStart(event);

//     actionElement.addEventListener('pointerup', actionElement.actionHandler.handleEnd.bind(actionElement.actionHandler), { once: true });
//     document.addEventListener('scroll', actionElement.actionHandler.handleScroll.bind(actionElement.actionHandler), { once: true });
//   }
// }, { passive: true });

// export function callAction(element, actionConfig, action) {
//   setTimeout(() => {
//     const event = new Event('hass-action', { bubbles: true, composed: true });

//     const updatedConfig = { ...actionConfig };
//     if (!updatedConfig.entity_id && this?.config?.entity) {
//       updatedConfig.entity_id = this.config.entity;
//     }

//     if (action === 'tap' || action === 'double_tap' || action === 'hold') {
//       event.detail = { 
//         config: updatedConfig,
//         action: action,
//       };
//     } else {
//       element.modifiedConfig = {
//         ...updatedConfig,
//         tap_action: {
//           ...updatedConfig[action],
//         },
//       };
//       delete element.modifiedConfig[action];

//       event.detail = { 
//         config: element.modifiedConfig,
//         action: 'tap',
//       };
//     }

//     element.dispatchEvent(event);
//   }, 10);
// }

// // Function to add actions and store configs in data attributes
// export function addActions(element, config, defaultEntity, defaultActions) {
//   element.classList.add('bubble-action');

//   element.dataset.entity = config?.entity || defaultEntity;
//   element.dataset.tapAction = JSON.stringify(config?.tap_action || defaultActions?.tap_action || { action: "more-info" });
//   element.dataset.doubleTapAction = JSON.stringify(config?.double_tap_action || defaultActions?.double_tap_action || { action: "toggle" });
//   element.dataset.holdAction = JSON.stringify(config?.hold_action || defaultActions?.hold_action || { action: "toggle" });

//   const tapAction = JSON.parse(element.dataset.tapAction);
//   const doubleTapAction = JSON.parse(element.dataset.doubleTapAction);
//   const holdAction = JSON.parse(element.dataset.holdAction);

//   element.style.cursor = (tapAction.action === "none" && doubleTapAction.action === "none" && holdAction.action === "none") ? '' : 'pointer';
// }

// class ActionHandler {
//   constructor(element, config, sendActionEvent) {
//     this.element = element;
//     this.config = config;
//     this.sendActionEvent = sendActionEvent;
//     this.tapTimeout = null;
//     this.holdTimeout = null;
//     this.startX = 0;
//     this.startY = 0;
//     this.holdFired = false;
//     this.pointerMoveListener = this.detectScrollLikeMove.bind(this);
//   }

//   handleStart(e) {
//     if (window.isScrolling || this.isDisconnected) return;

//     this.startX = e.clientX;
//     this.startY = e.clientY;
//     this.holdFired = false;

//     document.addEventListener('pointermove', this.pointerMoveListener);

//     this.holdTimeout = setTimeout(() => {
//       const holdAction = this.config.hold_action || { action: 'none' };
//       if (holdAction.action !== 'none' && !window.isScrolling) {
//         this.sendActionEvent(this.element, this.config, 'hold');
//         this.holdFired = true;
//       }
//     }, maxHoldDuration);
//   }

//   detectScrollLikeMove(e) {
//     const deltaX = Math.abs(e.clientX - this.startX);
//     const deltaY = Math.abs(e.clientY - this.startY);

//     if (deltaX > movementThreshold || deltaY > movementThreshold) {
//       clearTimeout(this.holdTimeout);
//       this.holdTimeout = null;
//       document.removeEventListener('pointermove', this.pointerMoveListener);
//     }
//   }

//   handleEnd(e) {
//     if (window.isScrolling || this.isDisconnected) return;

//     clearTimeout(this.holdTimeout);
//     this.holdTimeout = null;
//     document.removeEventListener('pointermove', this.pointerMoveListener);

//     if (this.holdFired) return;

//     const currentTime = Date.now();
//     const doubleTapAction = this.config.double_tap_action || { action: 'none' };
//     const tapAction = this.config.tap_action || { action: 'none' };

//     if (this.lastTap && (currentTime - this.lastTap < doubleTapTimeout) && doubleTapAction.action !== 'none') {
//       clearTimeout(this.tapTimeout);
//       this.sendActionEvent(this.element, this.config, 'double_tap');
//     } else if (tapAction.action !== 'none') {
//       this.tapTimeout = setTimeout(() => {
//         this.sendActionEvent(this.element, this.config, 'tap');
//       }, doubleTapTimeout);
//     }

//     this.lastTap = currentTime;
//   }

//   handleScroll() {
//     clearTimeout(this.holdTimeout);
//     this.holdTimeout = null;
//     document.removeEventListener('pointermove', this.pointerMoveListener);
//   }
// }

// export function sendActionEvent(element, config, action) {
//   const tapAction = config.tap_action || { action: "more-info" };
//   const doubleTapAction = config.double_tap_action || { action: "toggle" };
//   const holdAction = config.hold_action || { action: "toggle" };
//   const entity = config.entity || this.config?.entity;

//   const updateAction = (actionConfig) => {
//     if (
//       actionConfig.service &&
//       actionConfig.target?.entity_id === "entity" &&
//       entity
//     ) {
//       return {
//         ...actionConfig,
//         target: {
//           ...actionConfig.target,
//           entity_id: entity,
//         },
//       };
//     }
//     return actionConfig;
//   };

//   const updatedTapAction = updateAction(tapAction);
//   const updatedDoubleTapAction = updateAction(doubleTapAction);
//   const updatedHoldAction = updateAction(holdAction);

//   let actionConfig;
//   switch (action) {
//     case 'tap':
//       actionConfig = updatedTapAction;
//       break;
//     case 'double_tap':
//       actionConfig = updatedDoubleTapAction;
//       break;
//     case 'hold':
//       actionConfig = updatedHoldAction;
//       break;
//     default:
//       actionConfig = updatedTapAction;
//   }

//   callAction(element, { 
//     entity: entity, 
//     tap_action: updatedTapAction, 
//     double_tap_action: updatedDoubleTapAction, 
//     hold_action: updatedHoldAction 
//   }, action);
// }


// export function addFeedback(element, feedbackElement) {
//   element.addEventListener('click', () => { 
//     forwardHaptic("selection");
//     tapFeedback(feedbackElement);
//   });
// }
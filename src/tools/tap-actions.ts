const holdDuration = 300;
let lastAction = null;
let lastActionTime = 0;
let lastDoubleTapTime = 0;

export function sendActionEvent(element, config, action) {
  const currentTime = Date.now();

  // If a single tap occurs too soon after a double tap, ignore it
  if (action === 'tap' && currentTime - lastDoubleTapTime < holdDuration) {
    return;
  }

  // If the same action was sent within the holdDuration, ignore this one
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

  console.log("Action =", action, "Action config =", actionConfig);

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

    // Update the last action and its time
    lastAction = action;
    lastActionTime = currentTime;

    // If the action was a double tap, update the last double tap time
    if (action === 'double_tap') {
      lastDoubleTapTime = currentTime;
    }
}

export function addActions(element, config, hass, forwardHaptic) {
  let tap_action = config.tap_action;
  let double_tap_action = config.double_tap_action;
  let hold_action = config.hold_action;
  let userGesture = false;
  let lastTap = 0;
  let clickCount = 0;
  let startTime = 0;
  let endTime = 0;
  let tapTimeout;
  let holdTimeout;

  element.addEventListener('mousedown', () => {
    startTime = Date.now();
    holdTimeout = setTimeout(() => {
      sendActionEvent(element, config, 'hold');
    }, holdDuration);
  }, { passive: true });

  element.addEventListener('mouseup', () => {
    clearTimeout(holdTimeout);
    endTime = Date.now();

    if (endTime - startTime < holdDuration) {
      clickCount++;
      if (clickCount === 1) {
        setTimeout(() => {
          if (clickCount === 1) {
            sendActionEvent(element, config, 'tap');
          } else {
            sendActionEvent(element, config, 'double_tap');
            forwardHaptic("success");
          }
          clickCount = 0;
        }, holdDuration);
      }
    }
    startTime = 0;
    endTime = 0;
  }, { passive: true });

  element.addEventListener('touchstart', (e) => {
    userGesture = true;
    if (userGesture) {
      forwardHaptic("light");
    }
    startTime = Date.now();
    holdTimeout = setTimeout(() => {
      sendActionEvent(element, config, 'hold');
    }, holdDuration);
  }, { passive: true });

  element.addEventListener('touchend', function(e) {
      let currentTime = new Date().getTime();
      let tapLength = currentTime - lastTap;
      clearTimeout(holdTimeout);
      
      if (tapLength < holdDuration && tapLength > 0) {
          clearTimeout(tapTimeout); // Clear the tapTimeout if a double_tap is detected
          sendActionEvent(element, config, 'double_tap');
      } else {
          // Set a new tapTimeout to send a 'tap' event after the holdDuration
          tapTimeout = setTimeout(function() {
              sendActionEvent(element, config, 'tap');
          }, holdDuration);
      }
      lastTap = currentTime;
  }, { passive: true });

  element.addEventListener('mouseout', () => {
    clearTimeout(holdTimeout);
  }, { passive: true });
  element.addEventListener('touchcancel', () => {
    clearTimeout(holdTimeout);
  }, { passive: true });
}
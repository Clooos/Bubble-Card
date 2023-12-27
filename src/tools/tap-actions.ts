export function sendActionEvent(element, config, action) {
  const actionConfig = {
    entity: config.entity,
    tap_action: {
      action: "more-info"
    },
    double_tap_action: {
      action: "toggle"
    },
    hold_action: {
      action: "toggle"
    }
  };

  const event = new Event('hass-action', {
    bubbles: true,
    composed: true,
  });
  event.detail = {
    config: actionConfig,
    action: action,
  };
  element.dispatchEvent(event);
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
    }, 300);
  }, { passive: true });

  element.addEventListener('mouseup', () => {
    clearTimeout(holdTimeout);
    endTime = Date.now();

    if (endTime - startTime < 300) {
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
        }, 300);
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
    }, 300);
    if (e.type !== 'touchstart') {
      e.preventDefault();
    }
  }, { passive: true });

  element.addEventListener('touchend', function(e) {
      let currentTime = new Date().getTime();
      let tapLength = currentTime - lastTap;
      clearTimeout(holdTimeout);
      
      if (tapLength < 500 && tapLength > 0) {
          clearTimeout(tapTimeout);
          sendActionEvent(element, config, 'double_tap');
      } else {
          tapTimeout = setTimeout(function() {
              sendActionEvent(element, config, 'tap');
          }, 300);
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

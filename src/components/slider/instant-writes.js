// A pop-up holds every hass tick for the whole open sequence and flushes them
// as one pass once it has settled. The card content lands synchronously in that
// pass, but `.bubble-range-fill` carries `transition: all .5s ease-in-out` and
// has been painted for dozens of frames by then, so the fill slides into place
// on an already opened, already motionless pop-up: the state and the value are
// current while the fill is still travelling. Writes made inside this window
// land at their final position instead, the way `.is-dragging` already
// suppresses the transition for the duration of a drag.
//
// Kept free of imports on purpose: the pop-up runtime opens the window and must
// not pull the whole slider component graph in with it.
const instantSliderElements = new Set();
let instantSliderDepth = 0;
let instantSliderRestoreFrame = null;

export function isInstantSliderWrite() {
  return instantSliderDepth > 0;
}

function restoreInstantSliderElements() {
  instantSliderRestoreFrame = null;
  instantSliderElements.forEach(element => {
    try { element.style.removeProperty('transition'); } catch (_) {}
  });
  instantSliderElements.clear();
}

function scheduleInstantSliderRestore() {
  if (instantSliderRestoreFrame || instantSliderElements.size === 0) return;

  if (typeof requestAnimationFrame !== 'function') {
    restoreInstantSliderElements();
    return;
  }

  // Two frames, not one. The kill-switch and the new position are written in
  // the same task, so the first style resolution is what turns the new position
  // into the before-change style. Clearing on the very next frame would instead
  // hand the transition the OLD position to animate from, which is the slide
  // this window exists to avoid.
  instantSliderRestoreFrame = requestAnimationFrame(() => {
    instantSliderRestoreFrame = requestAnimationFrame(restoreInstantSliderElements);
  });
}

// Runs `task` with every slider position write it causes landing instantly.
// Re-entrant: only the outermost caller arms the restore.
export function runWithInstantSliderWrites(task) {
  instantSliderDepth += 1;
  try {
    return task();
  } finally {
    instantSliderDepth -= 1;
    if (instantSliderDepth === 0) scheduleInstantSliderRestore();
  }
}

// No-op outside a window, so the write points can call it unconditionally.
export function keepSliderWriteInstant(element) {
  if (instantSliderDepth === 0 || !element?.style || instantSliderElements.has(element)) return;

  // The priority is not decorative. `.is-dragging .bubble-range-fill` declares
  // its own `transition: none !important`, the light and accent fill rules
  // declare their background that way, and an author !important outranks a
  // plain inline declaration (the lesson of the shell kill-switch, 6593bbf).
  if (typeof element.style.setProperty === 'function') {
    element.style.setProperty('transition', 'none', 'important');
  } else {
    element.style.transition = 'none';
  }
  instantSliderElements.add(element);
}

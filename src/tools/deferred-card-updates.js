// A card that connects inside a pop-up which is opening defers its first render
// so the slide frames stay free (5a04965). The whole first pass is deferred, and
// that pass is what creates the sub-buttons and puts the slider fill in place, so
// on its own the timer reveals a pop-up of bare pills and fills them in a third of
// a second later, once it has stopped moving.
//
// The delay is a fallback, not the plan. The pop-up flushes these on its reveal
// frame, which paints nothing and comes before the flip, so the cards are whole
// by the time anything is on screen and the slide still renders nothing.
//
// Kept free of imports: bubble-card.js already imports the pop-up runtime, so the
// registry cannot live in either of them without a cycle.
const pendingCardUpdates = new Map();

function runPending(element, entry) {
  pendingCardUpdates.delete(element);
  if (entry.timer !== null) clearTimeout(entry.timer);
  try {
    entry.run();
  } catch (_) {}
}

export function deferCardUpdate(element, run, delayMs) {
  if (!element || typeof run !== 'function') return;

  cancelDeferredCardUpdate(element);

  const entry = { run, timer: null };
  pendingCardUpdates.set(element, entry);
  entry.timer = setTimeout(() => {
    if (pendingCardUpdates.get(element) !== entry) return;
    entry.timer = null;
    runPending(element, entry);
  }, delayMs);
}

export function cancelDeferredCardUpdate(element) {
  const entry = element && pendingCardUpdates.get(element);
  if (!entry) return;

  pendingCardUpdates.delete(element);
  if (entry.timer !== null) clearTimeout(entry.timer);
}

// Runs, right now, every first render still waiting inside `root`. A card torn
// down while it waited is dropped rather than rendered.
export function flushDeferredCardUpdates(root) {
  if (!root || pendingCardUpdates.size === 0) return 0;

  let flushed = 0;
  for (const [element, entry] of [...pendingCardUpdates]) {
    if (pendingCardUpdates.get(element) !== entry) continue;
    if (element !== root && !(typeof root.contains === 'function' && root.contains(element))) continue;

    if (element.isConnected === false) {
      cancelDeferredCardUpdate(element);
      continue;
    }

    runPending(element, entry);
    flushed += 1;
  }

  return flushed;
}

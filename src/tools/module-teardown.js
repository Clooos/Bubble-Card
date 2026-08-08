// Lets a style template release what it allocated when its card goes away.
//
// A module's `code:` is re-run on every style pass of the card that carries it,
// and a pop-up rebuilds all of its cards on every open, so anything a module
// starts once per card (a timer, an observer, a listener on a shared target)
// outlives the element that owns it with no way for the module to notice. Ten
// of the modules on the author's own instance leaked an interval that way, all
// of them following the same pattern, because there was nothing else they could
// have done.
//
// Its own module with no imports on purpose, because bubble-card.js calls it
// from disconnectedCallback, and pulling style-processor.js in there would drag
// the whole style pipeline into that path.

// Registrations are keyed, so the same module registering on each of the seven
// passes of one open replaces its own entry instead of stacking seven copies.
export function teardownKey(sourceInfo) {
  const type = sourceInfo?.type || 'unknown';
  const id = sourceInfo?.id;
  return id ? `${type}:${id}` : type;
}

export function registerModuleTeardown(context, key, fn) {
  if (!context || typeof fn !== 'function') return;
  if (!context._moduleTeardowns) context._moduleTeardowns = new Map();
  context._moduleTeardowns.set(key, fn);
}

// Called once when the card is disconnected. A card that Home Assistant simply
// moved in the DOM is torn down here too, which is correct, since its next
// style pass registers again, so the module ends up with exactly one live
// registration either way.
export function runModuleTeardowns(context) {
  const registered = context?._moduleTeardowns;
  if (!registered || registered.size === 0) return;

  // Cleared first, so a teardown that throws cannot be run twice and a module
  // that re-registers from inside its own teardown does not loop.
  const callbacks = Array.from(registered.values());
  registered.clear();

  for (const fn of callbacks) {
    // One module's broken teardown must not keep the others from running, nor
    // escape into disconnectedCallback.
    try {
      fn();
    } catch (error) {
      console.warn('Bubble Card - A module teardown threw and was ignored:', error);
    }
  }
}

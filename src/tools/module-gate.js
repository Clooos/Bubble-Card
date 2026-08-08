// Lets a style template skip its own side effects when nothing they depend on
// has changed.
//
// A template that touches the DOM is re-executed on every style pass, because
// re-running it is the only way its side effects happen, and `_hasSideEffects` in
// style-processor.js turns off both the fingerprint memo and the static result
// cache. A card gets roughly seven passes per pop-up open, so a module that
// writes a few custom properties writes them seven times per card for an
// identical result, and the reads it makes to compute them are paid seven times
// too. Measured on one real module, gating that work by hand took a pop-up from
// 7.2 s to 3.7 s cold on an iPad 6, and its per-execution cost from 30.7 ms to
// 6.8 ms.
//
// Only the module knows what its work depends on, so it says so and Bubble Card
// remembers the answer per card.

// Same separator the sub-button state key already uses. A control character
// rather than a comma, so two different argument lists cannot collide through a
// value that happens to contain the separator itself.
const SEP = "\u0001";

// Values are joined rather than serialized, because a module can legitimately
// pass an array (an rgb triplet), and JSON.stringify would throw on anything
// circular, which would take the whole style pass down with it.
function signatureOf(values) {
  let out = '';
  for (const value of values) {
    if (Array.isArray(value)) out += value.join(',');
    else if (value !== null && value !== undefined) out += String(value);
    out += SEP;
  }
  return out;
}

export function hasChanged(context, key, values) {
  // No context to remember anything on, so answer "changed" and the module always
  // does its work rather than silently skipping it.
  if (!context) return true;
  if (!context._moduleGates) context._moduleGates = new Map();

  const signature = signatureOf(values);
  if (context._moduleGates.get(key) === signature) return false;

  context._moduleGates.set(key, signature);
  return true;
}

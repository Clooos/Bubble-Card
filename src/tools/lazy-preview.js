// Home Assistant 2026.6 turned the card picker into a suggestion picker: it asks
// every custom card for suggestions and renders every one it gets back as a live
// preview, all at once, with no virtualization. It then hands a brand-new hass
// object to each of those previews on every state change anywhere in the
// installation, so a picker holding fifty previews pays fifty full renders per
// state change for cards nobody has scrolled to yet.
//
// A preview held here stays a bare custom element — no handler, no card DOM, no
// listeners — until it is about to be scrolled into view. The newest hass keeps
// being stored on it while it waits, so the pass that hydrates draws the current
// state. Hydration is one way: a card that has drawn once is never gated again.
//
// TWO THINGS THIS HAS TO GET RIGHT, and a first attempt got both wrong:
//
//   1. A held preview must still OCCUPY ITS SPACE. Drawing nothing collapses the
//      element to zero pixels, the grid above the fold shrinks, the scroll
//      container's height stops matching its content, and every hydration below
//      shoves the rows under the user's finger as they scroll. So a held preview
//      reserves the height it is not drawing, learned from the previews that
//      already drew, and gives it back on hydration.
//
//   2. The observer must watch THE PICKER'S OWN SCROLLER, not the viewport. A
//      root margin only ever grows the root, never the clip of a scrolling
//      ancestor, so a viewport-rooted observer inside an overflowing container
//      reports a card exactly as it arrives, which is the one moment it is too
//      late to build it.
//
// Kept free of imports, like deferred-card-updates.js: bubble-card.js already
// imports the pop-up runtime, so a registry shared with it cannot live in either
// of them without a cycle.

// Build a screen ahead of the scroll rather than exactly on the edge.
const ROOT_MARGIN = '400px';

// What a preview reserves before anything has been measured. A Bubble button
// suggestion renders at 82px on a default theme, so this is deliberately a
// little over: reserving slightly too much makes the content settle upward on
// hydration, which reads as the page tightening, while reserving too little
// pushes everything down, which reads as the page jumping.
const FALLBACK_HEIGHT = 96;

// Learned heights, by card type. The first screenful of previews is inside the
// viewport and never gets held, so it draws eagerly and measures itself; by the
// time the user scrolls, the reservation is the real number for that card type.
const measuredHeights = new Map();

// One observer per scroll root rather than one per card, each torn down with its
// last waiting element so nothing keeps holding a discarded preview.
const observers = new Map();
const waiting = new Set();
let visibilityWatched = false;

function observerConstructor() {
  try {
    return typeof globalThis.IntersectionObserver === 'function'
      ? globalThis.IntersectionObserver
      : null;
  } catch (_) {
    return null;
  }
}

// The suggestion picker, and nothing else. `preview` is far from picker-only:
// a dashboard in edit mode turns it on for every card it holds (hui-masonry-view
// assigns `card.preview = true` per card, hui-section forwards it to all of its
// own), and those must stay eager — a Bubble Card cell is `rows: auto`, so a
// card that draws nothing collapses it and the whole grid reflows under the
// editor as it scrolls.
//
// The card editor is deliberately excluded too, even though its preview also
// sits in a dialog. `hui-card.update()` rebuilds the element from scratch on
// every config change while `preview` is on, so gating it would re-gate a fresh
// element on every keystroke and strobe the one preview the user is watching,
// to save nothing: there is only ever one of them, and it is always on screen.
function isSuggestionPickerHost(tag) {
  return tag.startsWith('hui-suggestion');
}

// Walks the ancestor chain, out of every shadow tree, and answers both questions
// at once: is this a picker preview, and which element scrolls it. One walk
// rather than two, because the second answer is only ever needed when the first
// is yes.
function previewContext(element) {
  const context = { inPicker: false, scroller: null };
  try {
    let node = element;
    // The walk crosses shadow boundaries, so it is capped rather than trusted
    // to terminate on a tree Bubble Card does not own.
    for (let hops = 0; node && hops < 64; hops += 1) {
      const tag = hops > 0 ? node.tagName?.toLowerCase?.() : null;
      if (tag) {
        // A card nested inside another Bubble Card (a pop-up's child cards get
        // `preview` too) follows its host instead of gating on its own: it is
        // the host that decides when anything is drawn at all.
        if (tag === 'bubble-card') return { inPicker: false, scroller: null };
        if (!context.scroller && isScrollable(node)) context.scroller = node;
        if (isSuggestionPickerHost(tag)) {
          context.inPicker = true;
          // The scroller is between the card and the picker, never above it.
          return context;
        }
      }

      if (node.parentNode) {
        node = node.parentNode;
        continue;
      }

      // A shadow root has no parentNode, and getRootNode() answers itself for
      // it, so the hop out of a shadow tree is its host. `host` is what tells a
      // shadow root apart from a document, which ends the walk.
      const root = typeof node.getRootNode === 'function' ? node.getRootNode() : null;
      if (root?.host) {
        node = root.host;
        continue;
      }

      break;
    }
  } catch (_) {
    /* An unreadable ancestor chain means eager, never blank. */
  }

  return { inPicker: false, scroller: null };
}

// Whether this element is a preview the suggestion picker built. Shared with
// preview-badge.js, which must draw in the picker and nowhere else, and which
// would otherwise duplicate this walk and drift from it.
export function isSuggestionPickerPreview(element) {
  return previewContext(element).inPicker;
}

function isScrollable(node) {
  try {
    const style = globalThis.getComputedStyle?.(node);
    if (!style) return false;
    return style.overflowY === 'auto' || style.overflowY === 'scroll';
  } catch (_) {
    return false;
  }
}

function heightFor(element) {
  const cardType = element?.config?.card_type;
  const learned = cardType ? measuredHeights.get(cardType) : undefined;
  return learned || FALLBACK_HEIGHT;
}

// Remembers what a card type really measures, so held previews of that type
// reserve the right box. Called for previews that drew, held or not.
//
// It also RE-RESERVES the previews still waiting. Every preview of a picker
// answer is attached in one pass, so they all reserve before any of them has
// rendered and they all start on the fallback. The first screenful draws a frame
// later and is what teaches the real heights; without pushing that back down,
// the whole list below the fold would keep a reservation nobody ever corrects,
// and the grid would grow under the scroll exactly as if nothing was reserved.
export function notePreviewHeight(element) {
  if (!element || element._previewMeasuring) return;

  // Deferred to the next frame, for two reasons. Reading a box inside the render
  // pass forces a synchronous layout on every preview the picker draws, which is
  // the one thing a render path must not do. And a pop-up builds its content
  // progressively, so measured on the spot it answers the height of its shell
  // rather than of the card, which is a reservation worth less than the
  // fallback.
  element._previewMeasuring = true;
  const measure = () => {
    element._previewMeasuring = false;
    try {
      const cardType = element.config?.card_type;
      if (!cardType) return;
      const height = Math.round(element.getBoundingClientRect?.().height ?? 0);
      // A card mid-build, or one the picker has already detached, measures small
      // or nothing: neither is a reservation anybody should inherit.
      if (height <= 24 || measuredHeights.get(cardType) === height) return;

      measuredHeights.set(cardType, height);
      for (const waiter of waiting) {
        if (waiter?.config?.card_type === cardType) reserveSpace(waiter);
      }
    } catch (_) {}
  };

  try {
    if (typeof globalThis.requestAnimationFrame === 'function') {
      globalThis.requestAnimationFrame(measure);
    } else {
      measure();
    }
  } catch (_) {
    element._previewMeasuring = false;
  }
}

// A custom element is display: inline by default, and min-height does nothing on
// an inline box, so the reservation has to set both. Both are inline styles and
// both are removed together, which restores whatever the stylesheet says.
function reserveSpace(element) {
  try {
    element.style.display = 'block';
    element.style.minHeight = `${heightFor(element)}px`;
  } catch (_) {}
}

function releaseSpace(element) {
  try {
    element.style.removeProperty('min-height');
    element.style.removeProperty('display');
  } catch (_) {}
}

// Drops the gate without drawing. Used where the caller renders on its own right
// after (connectedCallback does), which must not be made to render twice.
function settle(element) {
  if (element._previewHold !== true) return false;

  element._previewHold = false;
  element._previewHydrated = true;
  releaseSpace(element);
  unobservePreviewHydration(element);
  return true;
}

function hydrate(element) {
  if (!settle(element)) return;
  try {
    element.updateBubbleCard();
  } catch (_) {}
  notePreviewHeight(element);
}

function handleIntersections(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) hydrate(entry.target);
  }
}

// A hidden tab runs no rendering steps, so nothing is reported while the user is
// away — which is fine, nothing is visible either. What must not happen is a
// preview staying bare after the tab comes back, and engines differ on whether
// the first notification is merely delayed or delivered as "not intersecting"
// against an unpainted frame. Re-observing queues a fresh first notification for
// every preview still waiting, so neither behaviour can leave a card blank.
function handleVisibilityChange() {
  try {
    if (document.visibilityState === 'hidden') return;
  } catch (_) {
    return;
  }

  for (const element of [...waiting]) {
    const observer = observers.get(element._previewRoot ?? null);
    if (!observer) continue;
    try {
      observer.unobserve(element);
      observer.observe(element);
    } catch (_) {}
  }
}

function watchVisibility() {
  if (visibilityWatched) return;
  try {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    visibilityWatched = true;
  } catch (_) {}
}

function unwatchVisibility() {
  if (!visibilityWatched) return;

  visibilityWatched = false;
  try {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  } catch (_) {}
}

function teardownIfIdle() {
  if (waiting.size > 0) return;
  for (const observer of observers.values()) {
    try { observer.disconnect(); } catch (_) {}
  }
  observers.clear();
  unwatchVisibility();
}

// The gate itself, read on every hass tick of every card: one property read, and
// undefined for everything that is not a preview.
export function awaitsPreviewHydration(element) {
  return element?._previewHold === true;
}

// Home Assistant assigns `preview` before it attaches the element, and assigns
// it again (plus `editMode = preview`) on the same cycle, so this has to be
// idempotent and cannot read the DOM yet.
export function setPreviewMode(element, preview) {
  if (!element) return;

  if (preview !== true) {
    // A view leaving edit mode clears `preview` on cards that are on screen:
    // anything still held has to draw now.
    hydrate(element);
    return;
  }

  // One way only. A card that has already drawn must never be gated again, or
  // toggling edit mode would blank it.
  if (element._previewHydrated === true) return;

  element._previewHold = true;

  // Whether the gate actually applies depends on where the element lands, which
  // is a connectedCallback question. Holding until then costs nothing: no card
  // renders before its first connection anyway.
  if (element.isConnected === true) observePreviewHydration(element);
}

export function observePreviewHydration(element) {
  if (element?._previewHold !== true) return;

  const Observer = observerConstructor();
  const { inPicker, scroller } = Observer ? previewContext(element) : { inPicker: false };
  if (!Observer || !inPicker) {
    // No way to learn when it comes into view, or a context where a card that
    // draws nothing would break the layout around it. Never leave a card blank:
    // drop the gate and let the caller's own render pass through.
    settle(element);
    return;
  }

  const root = scroller ?? null;
  let observer = observers.get(root);
  if (!observer) {
    observer = new Observer(handleIntersections, { root, rootMargin: ROOT_MARGIN });
    observers.set(root, observer);
    watchVisibility();
  }

  element._previewRoot = root;
  waiting.add(element);
  reserveSpace(element);
  try {
    observer.observe(element);
  } catch (_) {
    // A root that is not a shadow-including ancestor is refused. Eager beats
    // blank, always.
    settle(element);
  }
}

// Called on disconnect. The gate deliberately survives: an element can be moved
// in the DOM, and the connectedCallback that follows the move observes it again.
export function unobservePreviewHydration(element) {
  if (!waiting.delete(element)) return;

  const observer = observers.get(element._previewRoot ?? null);
  if (observer) {
    try { observer.unobserve(element); } catch (_) {}
  }
  teardownIfIdle();
}

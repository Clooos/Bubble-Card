import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// The observer registry and the learned heights are module state by design (one
// observer per scroll root, one height per card type), so each test gets its own
// copy rather than one whose leftovers would decide the next one's answer.
let awaitsPreviewHydration;
let notePreviewHeight;
let observePreviewHydration;
let setPreviewMode;
let unobservePreviewHydration;

let observers;
let visibilityListeners;
let frames;

class FakeIntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
    this.targets = new Set();
    this.disconnected = false;
    observers.push(this);
  }

  observe(target) { this.targets.add(target); }
  unobserve(target) { this.targets.delete(target); }
  disconnect() { this.disconnected = true; this.targets.clear(); }
  report(target, isIntersecting = true) { this.callback([{ target, isIntersecting }], this); }
}

// Builds a light-DOM ancestor chain from the innermost tag outwards, so a test
// can walk more than the one hop that would hide an early `break`.
function chain(...tags) {
  let node = null;
  for (let i = tags.length - 1; i >= 0; i -= 1) {
    node = { tagName: tags[i].toUpperCase(), parentNode: node };
  }
  return node;
}

// The real chain inside the picker: the suggestion card holds a hui-card in its
// shadow root, and the bubble-card is a light-DOM child of that hui-card.
function createPreview({ inPicker = true, connected = true, cardType = 'button', height = 0 } = {}) {
  const style = {
    values: {},
    setProperty(name, value) { this.values[name] = value; },
    removeProperty(name) { delete this.values[name]; },
    set display(value) { this.values.display = value; },
    get display() { return this.values.display; },
    set minHeight(value) { this.values['min-height'] = value; },
    get minHeight() { return this.values['min-height']; },
  };
  return {
    isConnected: connected,
    config: { card_type: cardType },
    style,
    updateBubbleCard: jest.fn(),
    getBoundingClientRect: () => ({ height }),
    parentNode: inPicker
      ? chain('hui-card', 'hui-suggestion-card')
      : chain('hui-card', 'hui-section', 'hui-view', 'hui-root'),
  };
}

const lastObserver = () => observers[observers.length - 1];
const flushFrames = () => { const queued = frames.splice(0); queued.forEach((fn) => fn()); };

beforeEach(async () => {
  observers = [];
  visibilityListeners = [];
  frames = [];
  globalThis.IntersectionObserver = FakeIntersectionObserver;
  globalThis.requestAnimationFrame = (fn) => { frames.push(fn); return frames.length; };
  globalThis.getComputedStyle = () => ({ overflowY: 'visible' });
  globalThis.document = {
    visibilityState: 'visible',
    addEventListener: jest.fn((type, listener) => {
      if (type === 'visibilitychange') visibilityListeners.push(listener);
    }),
    removeEventListener: jest.fn((type, listener) => {
      const index = visibilityListeners.indexOf(listener);
      if (index !== -1) visibilityListeners.splice(index, 1);
    }),
  };

  jest.resetModules();
  ({
    awaitsPreviewHydration,
    notePreviewHeight,
    observePreviewHydration,
    setPreviewMode,
    unobservePreviewHydration,
  } = await import('./lazy-preview.js'));
});

describe('a preview waiting for its first intersection', () => {
  test('draws nothing while it is off screen', () => {
    const element = createPreview();

    setPreviewMode(element, true);

    expect(awaitsPreviewHydration(element)).toBe(true);
    expect(element.updateBubbleCard).not.toHaveBeenCalled();
    expect(lastObserver().targets.has(element)).toBe(true);
  });

  // The whole reason the first attempt at this had to be reverted: a card that
  // draws nothing measures nothing, the grid above it shrinks, and every
  // hydration below shoves the rows under the user as they scroll.
  test('still occupies the space it is not drawing', () => {
    const element = createPreview();

    setPreviewMode(element, true);

    expect(element.style.values.display).toBe('block');
    expect(element.style.values['min-height']).toMatch(/^\d+px$/);
  });

  test('gives the space back when it draws', () => {
    const element = createPreview();
    setPreviewMode(element, true);

    lastObserver().report(element);

    expect(element.updateBubbleCard).toHaveBeenCalledTimes(1);
    expect(element.style.values['min-height']).toBeUndefined();
    expect(element.style.values.display).toBeUndefined();
  });

  test('is left alone by a report that says it is still out of view', () => {
    const element = createPreview();
    setPreviewMode(element, true);

    lastObserver().report(element, false);

    expect(element.updateBubbleCard).not.toHaveBeenCalled();
    expect(awaitsPreviewHydration(element)).toBe(true);
  });

  // A root margin only ever grows the ROOT, never the clip of a scrolling
  // ancestor, so a viewport-rooted observer inside the picker's own scroller
  // would report a card exactly as it arrives, which is too late to build it.
  test('watches the picker scroller rather than the viewport', () => {
    const scroller = { tagName: 'DIV', parentNode: chain('hui-suggestion-picker') };
    const element = createPreview();
    element.parentNode = { tagName: 'HUI-CARD', parentNode: scroller };
    globalThis.getComputedStyle = (node) => ({ overflowY: node === scroller ? 'auto' : 'visible' });

    setPreviewMode(element, true);

    expect(lastObserver().options.root).toBe(scroller);
    expect(lastObserver().options.rootMargin).toBe('400px');
  });

  test('falls back to the viewport when nothing between it and the picker scrolls', () => {
    setPreviewMode(createPreview(), true);

    expect(lastObserver().options.root).toBeNull();
  });

  test('is found through the shadow tree the picker builds it in', () => {
    const element = createPreview();
    const shadowRoot = { host: { tagName: 'HUI-SUGGESTION-CARD' } };
    shadowRoot.getRootNode = () => shadowRoot;
    element.parentNode = shadowRoot;

    setPreviewMode(element, true);

    expect(awaitsPreviewHydration(element)).toBe(true);
  });

  test('draws when edit mode is turned off under it', () => {
    const element = createPreview();
    setPreviewMode(element, true);

    setPreviewMode(element, false);

    expect(element.updateBubbleCard).toHaveBeenCalledTimes(1);
    expect(awaitsPreviewHydration(element)).toBe(false);
  });
});

describe('the space a held preview reserves', () => {
  test('is the height its card type really measured, once one of them has drawn', () => {
    const drawn = createPreview({ height: 166, cardType: 'pop-up' });
    const waiting = createPreview({ cardType: 'pop-up' });
    setPreviewMode(waiting, true);
    const fallback = waiting.style.values['min-height'];

    notePreviewHeight(drawn);
    flushFrames();

    expect(waiting.style.values['min-height']).toBe('166px');
    expect(waiting.style.values['min-height']).not.toBe(fallback);
  });

  test('is corrected for the previews already waiting, not only the next ones', () => {
    // Every preview of one picker answer is attached in a single pass, so they
    // all reserve before any of them has drawn: a height learned later that did
    // not reach them would leave the whole list below the fold uncorrected.
    const held = [createPreview({ cardType: 'pop-up' }), createPreview({ cardType: 'pop-up' })];
    held.forEach((element) => setPreviewMode(element, true));

    notePreviewHeight(createPreview({ height: 200, cardType: 'pop-up' }));
    flushFrames();

    held.forEach((element) => expect(element.style.values['min-height']).toBe('200px'));
  });

  test('never inherits the measurement of a card that is mid-build or detached', () => {
    const waiting = createPreview({ cardType: 'pop-up' });
    setPreviewMode(waiting, true);
    const before = waiting.style.values['min-height'];

    notePreviewHeight(createPreview({ height: 0, cardType: 'pop-up' }));
    notePreviewHeight(createPreview({ height: 12, cardType: 'pop-up' }));
    flushFrames();

    expect(waiting.style.values['min-height']).toBe(before);
  });

  // Reading a box inside the render pass forces a synchronous layout on every
  // preview the picker draws, and a pop-up measured on the spot answers the
  // height of its shell rather than of its content.
  test('is measured on the next frame, never inside the render pass', () => {
    const element = createPreview({ height: 166, cardType: 'pop-up' });
    const waiting = createPreview({ cardType: 'pop-up' });
    setPreviewMode(waiting, true);

    notePreviewHeight(element);
    expect(waiting.style.values['min-height']).not.toBe('166px');

    flushFrames();
    expect(waiting.style.values['min-height']).toBe('166px');
  });
});

describe('contexts that must never be gated', () => {
  test('a preview outside the picker is a dashboard in edit mode: it draws at once', () => {
    const element = createPreview({ inPicker: false });

    setPreviewMode(element, true);

    expect(awaitsPreviewHydration(element)).toBe(false);
    expect(observers).toHaveLength(0);
    // The caller's own render pass follows, so this one draws nothing itself.
    expect(element.updateBubbleCard).not.toHaveBeenCalled();
    expect(element.style.values['min-height']).toBeUndefined();
  });

  // Home Assistant rebuilds it from scratch on every config change while
  // `preview` is on, so gating it would blank a fresh element on every keystroke
  // and save nothing: there is only ever one, and it is always on screen.
  test('the card editor preview is never gated', () => {
    const element = createPreview();
    element.parentNode = chain('hui-card', 'hui-dialog-edit-card', 'ha-dialog');

    setPreviewMode(element, true);

    expect(awaitsPreviewHydration(element)).toBe(false);
    expect(observers).toHaveLength(0);
  });

  test('a card nested inside another Bubble Card follows its host', () => {
    const element = createPreview();
    element.parentNode = chain('bubble-card', 'hui-card', 'hui-suggestion-card');

    setPreviewMode(element, true);

    expect(awaitsPreviewHydration(element)).toBe(false);
    expect(observers).toHaveLength(0);
  });

  test('a chain that ends on a document rather than a host stops the walk', () => {
    const element = createPreview();
    const documentNode = { getRootNode: () => documentNode };
    element.parentNode = { tagName: 'HUI-CARD', parentNode: documentNode };

    setPreviewMode(element, true);

    expect(awaitsPreviewHydration(element)).toBe(false);
  });

  test('an environment without IntersectionObserver hydrates immediately', () => {
    delete globalThis.IntersectionObserver;
    const element = createPreview();

    setPreviewMode(element, true);

    expect(awaitsPreviewHydration(element)).toBe(false);
  });

  test('an element that has already drawn is never gated again', () => {
    const element = createPreview();
    setPreviewMode(element, true);
    lastObserver().report(element);

    setPreviewMode(element, true);

    expect(awaitsPreviewHydration(element)).toBe(false);
  });

  test('a preview that is not connected yet waits for its connectedCallback', () => {
    const element = createPreview({ connected: false });

    setPreviewMode(element, true);
    expect(observers).toHaveLength(0);

    element.isConnected = true;
    observePreviewHydration(element);
    expect(lastObserver().targets.has(element)).toBe(true);
  });
});

describe('the observer lifecycle', () => {
  test('disconnecting stops the watch and keeps the gate, reconnecting resumes it', () => {
    const element = createPreview();
    setPreviewMode(element, true);
    const first = lastObserver();

    unobservePreviewHydration(element);

    expect(first.targets.size).toBe(0);
    expect(first.disconnected).toBe(true);
    expect(awaitsPreviewHydration(element)).toBe(true);

    observePreviewHydration(element);
    lastObserver().report(element);
    expect(element.updateBubbleCard).toHaveBeenCalledTimes(1);
  });

  test('one observer serves every preview sharing a scroll root, and dies with the last', () => {
    const a = createPreview();
    const b = createPreview();

    setPreviewMode(a, true);
    setPreviewMode(b, true);
    expect(observers).toHaveLength(1);

    lastObserver().report(a);
    expect(observers[0].disconnected).toBe(false);

    lastObserver().report(b);
    expect(observers[0].disconnected).toBe(true);
    expect(visibilityListeners).toHaveLength(0);
  });

  test('a tab coming back re-arms every preview still waiting', () => {
    const element = createPreview();
    setPreviewMode(element, true);
    const observer = lastObserver();
    expect(visibilityListeners).toHaveLength(1);

    globalThis.document.visibilityState = 'hidden';
    visibilityListeners[0]();
    globalThis.document.visibilityState = 'visible';
    observer.targets.clear();
    visibilityListeners[0]();

    expect(observer.targets.has(element)).toBe(true);
  });

  test('an observer that refuses a target hydrates it rather than losing it', () => {
    const element = createPreview();
    globalThis.IntersectionObserver = class extends FakeIntersectionObserver {
      observe() { throw new Error('root is not an ancestor'); }
    };

    setPreviewMode(element, true);

    expect(awaitsPreviewHydration(element)).toBe(false);
    expect(element.style.values['min-height']).toBeUndefined();
  });

  test('costs nothing for a card that is not a preview', () => {
    const element = createPreview();

    observePreviewHydration(element);
    unobservePreviewHydration(element);

    expect(awaitsPreviewHydration(element)).toBe(false);
    expect(observers).toHaveLength(0);
  });
});

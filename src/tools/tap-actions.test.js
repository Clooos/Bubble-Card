import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

const forwardHaptic = jest.fn();
const createElement = jest.fn(() => makeElement());

jest.unstable_mockModule('./utils.js', () => ({ forwardHaptic, createElement }));

function makeClassList(initial = []) {
  const set = new Set(initial);
  return {
    add: (...n) => n.forEach((c) => set.add(c)),
    remove: (...n) => n.forEach((c) => set.delete(c)),
    contains: (c) => set.has(c),
    toggle: (c, force) => { const add = force === undefined ? !set.has(c) : force; if (add) set.add(c); else set.delete(c); return set.has(c); },
  };
}

function makeElement(classes = []) {
  const el = new EventTarget();
  el.classList = makeClassList(classes);
  el.dataset = {};
  el.style = {};
  el.appendChild = () => {};
  el.removeChild = () => {};
  el.setAttribute = () => {};
  el.getBoundingClientRect = () => ({ x: 0, y: 0, width: 100, height: 50, top: 0, left: 0 });
  return el;
}

const body = makeElement();
const doc = new EventTarget();
doc.body = body;
doc.createElement = () => makeElement();
doc.querySelector = () => null;

const win = new EventTarget();
win.isScrolling = false;

global.window = win;
global.document = doc;

const { addActions } = await import('./tap-actions.js');

/** Builds an event whose composedPath reaches the card, as a real press does. */
function press(type, target, { x = 10, y = 10, touch = false } = {}) {
  const ev = new Event(type, { bubbles: true, cancelable: true });
  Object.defineProperty(ev, 'composedPath', { value: () => [target, body] });
  Object.defineProperty(ev, 'target', { value: target, configurable: true });
  if (touch) {
    ev.touches = type === 'touchstart' ? [{ clientX: x, clientY: y }] : [];
    ev.changedTouches = [{ clientX: x, clientY: y }];
  } else {
    ev.clientX = x; ev.clientY = y;
    ev.pointerType = 'touch'; ev.isPrimary = true;
  }
  return ev;
}

function makeCard(config = {}) {
  const el = makeElement();
  addActions(el, {
    tap_action: { action: 'toggle' },
    double_tap_action: { action: 'none' },
    hold_action: { action: 'none' },
    ...config,
  }, 'light.test');
  const fired = [];
  el.addEventListener('hass-action', (e) => fired.push(e.detail?.action ?? 'action'));
  return { el, fired };
}

// A cancelled touch means the OS took the gesture over: an Android navigation
// swipe, a scroll hand-off, an app switch. It is not a release, and it must
// never fire an action. Reported as #2580, and before that as #2287 and #1923.
describe('a cancelled gesture fires nothing', () => {
  beforeEach(() => { jest.clearAllMocks(); jest.useFakeTimers(); win.isScrolling = false; });
  afterEach(() => { jest.runOnlyPendingTimers(); jest.useRealTimers(); });

  test('a normal press and release still fires, which is the control', () => {
    const { el, fired } = makeCard();

    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointerup', el));

    expect(fired).toEqual(['tap']);
  });

  test('a pointercancel fires nothing', () => {
    const { el, fired } = makeCard();

    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointercancel', el));

    expect(fired).toEqual([]);
  });

  test('a touchcancel fires nothing', () => {
    const { el, fired } = makeCard();

    body.dispatchEvent(press('touchstart', el, { touch: true }));
    el.dispatchEvent(press('touchcancel', el, { touch: true }));

    expect(fired).toEqual([]);
  });

  test('a cancel dispatched on the document, not the card, fires nothing either', () => {
    // When the OS takes over, the cancel can land above the card. Watching only
    // the element left the interaction armed.
    const { el, fired } = makeCard();

    body.dispatchEvent(press('pointerdown', el));
    doc.dispatchEvent(press('pointercancel', el));

    expect(fired).toEqual([]);
  });

  test('a release arriving after a cancel fires nothing', () => {
    const { el, fired } = makeCard();

    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointercancel', el));
    el.dispatchEvent(press('pointerup', el));

    expect(fired).toEqual([]);
  });

  test('a hold cancelled after it was recognised fires nothing', () => {
    const { el, fired } = makeCard({ hold_action: { action: 'more-info' } });

    body.dispatchEvent(press('pointerdown', el));
    jest.advanceTimersByTime(600);
    el.dispatchEvent(press('pointercancel', el));

    expect(fired).toEqual([]);
  });

  test('a cancelled touch does not seed the double tap of the next press', () => {
    const { el, fired } = makeCard({ double_tap_action: { action: 'more-info' } });

    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointercancel', el));
    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointerup', el));
    jest.advanceTimersByTime(300);

    expect(fired).toEqual(['tap']);
  });

  test('the card still works after a cancelled gesture', () => {
    const { el, fired } = makeCard();

    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointercancel', el));
    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointerup', el));

    expect(fired).toEqual(['tap']);
  });

  test('the double tap machinery is clean after a cancelled gesture', () => {
    // handleCancel deliberately leaves tapTimeout alone, since a pending tap
    // belongs to a press that already completed. In practice a new press clears
    // it first through resetState, which is how the second tap of a double tap
    // is recognised, so what matters is that a cancel leaves nothing behind.
    const { el, fired } = makeCard({ double_tap_action: { action: 'more-info' } });

    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointercancel', el));

    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointerup', el));
    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointerup', el));
    jest.advanceTimersByTime(300);

    expect(fired).toEqual(['double_tap']);
  });
});

// The system swipe that closes the companion app suspends the page mid gesture,
// so not even a cancel reaches it. The interaction stays armed, its end handler
// sits on the document, and the next touch anywhere completes it and fires the
// action of a button let go of long ago. Reported on #2580 after the first fix.
describe('a gesture the page never sees the end of', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    win.isScrolling = false;
    doc.hidden = false;
  });
  afterEach(() => { jest.runOnlyPendingTimers(); jest.useRealTimers(); doc.hidden = false; });

  const suspend = () => { doc.hidden = true; doc.dispatchEvent(new Event('visibilitychange')); };
  const resume = () => { doc.hidden = false; doc.dispatchEvent(new Event('visibilitychange')); };

  // Without this control the test below would pass on a card that never fires
  test('a release reaching only the document does end the press, which is the control', () => {
    const { el, fired } = makeCard();

    body.dispatchEvent(press('pointerdown', el));
    doc.dispatchEvent(press('pointerup', el));

    expect(fired).toEqual(['tap']);
  });

  test('fires nothing when a release lands after the page was hidden', () => {
    const { el, fired } = makeCard();

    body.dispatchEvent(press('pointerdown', el));
    suspend();
    resume();
    doc.dispatchEvent(press('pointerup', el));

    expect(fired).toEqual([]);
  });

  test('fires nothing on a touch release either', () => {
    const { el, fired } = makeCard();

    body.dispatchEvent(press('touchstart', el, { touch: true }));
    suspend();
    doc.dispatchEvent(press('touchend', el, { touch: true }));

    expect(fired).toEqual([]);
  });

  test('lets go of a hold that was recognised before the page was hidden', () => {
    const { el, fired } = makeCard({ hold_action: { action: 'more-info' } });

    body.dispatchEvent(press('pointerdown', el));
    jest.advanceTimersByTime(600);
    suspend();
    doc.dispatchEvent(press('pointerup', el));

    expect(fired).toEqual([]);
  });

  test('abandons the press on pagehide as well', () => {
    const { el, fired } = makeCard();

    body.dispatchEvent(press('pointerdown', el));
    win.dispatchEvent(new Event('pagehide'));
    doc.dispatchEvent(press('pointerup', el));

    expect(fired).toEqual([]);
  });

  // The button stays visibly pressed otherwise, which is the highlight the
  // reporter saw sitting under the navigation bar
  test('releases the ripple the press had started', () => {
    const { el } = makeCard();
    el.haRipple.startPress = jest.fn();
    el.haRipple.endPress = jest.fn();

    body.dispatchEvent(press('pointerdown', el));
    expect(el.haRipple.startPress).toHaveBeenCalled();

    suspend();

    expect(el.haRipple.endPress).toHaveBeenCalled();
  });

  test('the card still works once the page comes back', () => {
    const { el, fired } = makeCard();

    body.dispatchEvent(press('pointerdown', el));
    suspend();
    doc.dispatchEvent(press('pointerup', el));
    resume();

    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointerup', el));

    expect(fired).toEqual(['tap']);
  });

  // Hiding the page with nothing under way must not cost a walk of the set
  test('does nothing at all when no press is under way', () => {
    const { el, fired } = makeCard();

    suspend();
    resume();

    body.dispatchEvent(press('pointerdown', el));
    el.dispatchEvent(press('pointerup', el));

    expect(fired).toEqual(['tap']);
  });
});

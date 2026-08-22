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

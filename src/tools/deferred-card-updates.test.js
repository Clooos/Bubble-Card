import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

// The registry is module state by design (one pop-up flushes every card it
// holds), so each test gets its own copy rather than a shared one whose pending
// entries would leak into the next.
let deferCardUpdate;
let cancelDeferredCardUpdate;
let flushDeferredCardUpdates;

function createRoot() {
  const children = new Set();
  return {
    children,
    contains: (element) => children.has(element),
    add(element) { children.add(element); return element; }
  };
}

function createCard() {
  return { isConnected: true };
}

beforeEach(async () => {
  jest.useFakeTimers();
  jest.resetModules();
  ({ deferCardUpdate, cancelDeferredCardUpdate, flushDeferredCardUpdates } =
    await import('./deferred-card-updates.js'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('the deferred first render', () => {
  test('still runs on its own when nothing flushes it', () => {
    const card = createCard();
    const run = jest.fn();

    deferCardUpdate(card, run, 320);
    expect(run).not.toHaveBeenCalled();

    jest.advanceTimersByTime(320);

    expect(run).toHaveBeenCalledTimes(1);
  });

  test('runs once when the flush beats the timer', () => {
    const root = createRoot();
    const card = root.add(createCard());
    const run = jest.fn();

    deferCardUpdate(card, run, 320);
    flushDeferredCardUpdates(root);

    expect(run).toHaveBeenCalledTimes(1);

    // The timer must not fire a second render on a card already rendered.
    jest.advanceTimersByTime(1000);

    expect(run).toHaveBeenCalledTimes(1);
  });

  test('is dropped when the card is cancelled before either runs', () => {
    const root = createRoot();
    const card = root.add(createCard());
    const run = jest.fn();

    deferCardUpdate(card, run, 320);
    cancelDeferredCardUpdate(card);

    flushDeferredCardUpdates(root);
    jest.advanceTimersByTime(1000);

    expect(run).not.toHaveBeenCalled();
  });

  test('is dropped rather than rendered for a card torn down while it waited', () => {
    const root = createRoot();
    const card = root.add(createCard());
    const run = jest.fn();

    deferCardUpdate(card, run, 320);
    card.isConnected = false;

    flushDeferredCardUpdates(root);
    jest.advanceTimersByTime(1000);

    expect(run).not.toHaveBeenCalled();
  });

  test('keeps only the latest pass when a card defers twice', () => {
    const root = createRoot();
    const card = root.add(createCard());
    const stale = jest.fn();
    const fresh = jest.fn();

    deferCardUpdate(card, stale, 320);
    deferCardUpdate(card, fresh, 320);

    flushDeferredCardUpdates(root);
    jest.advanceTimersByTime(1000);

    expect(stale).not.toHaveBeenCalled();
    expect(fresh).toHaveBeenCalledTimes(1);
  });
});

describe('flushDeferredCardUpdates', () => {
  test('renders every card the pop-up holds, in one pass', () => {
    const root = createRoot();
    const runs = [jest.fn(), jest.fn(), jest.fn()];
    runs.forEach(run => deferCardUpdate(root.add(createCard()), run, 320));

    expect(flushDeferredCardUpdates(root)).toBe(3);
    runs.forEach(run => expect(run).toHaveBeenCalledTimes(1));
  });

  test('leaves a card belonging to another pop-up alone', () => {
    const mine = createRoot();
    const theirs = createRoot();
    const ours = jest.fn();
    const other = jest.fn();

    deferCardUpdate(mine.add(createCard()), ours, 320);
    deferCardUpdate(theirs.add(createCard()), other, 320);

    flushDeferredCardUpdates(mine);

    expect(ours).toHaveBeenCalledTimes(1);
    expect(other).not.toHaveBeenCalled();

    // Untouched means still armed, not lost.
    jest.advanceTimersByTime(320);
    expect(other).toHaveBeenCalledTimes(1);
  });

  test('lets one card blowing up through without losing the others', () => {
    const root = createRoot();
    const after = jest.fn();

    deferCardUpdate(root.add(createCard()), () => { throw new Error('a handler blew up'); }, 320);
    deferCardUpdate(root.add(createCard()), after, 320);

    expect(() => flushDeferredCardUpdates(root)).not.toThrow();
    expect(after).toHaveBeenCalledTimes(1);
  });

  test('costs nothing when no card deferred anything', () => {
    expect(flushDeferredCardUpdates(createRoot())).toBe(0);
  });

  test('tolerates a root that cannot answer contains', () => {
    const run = jest.fn();
    deferCardUpdate(createCard(), run, 320);

    expect(() => flushDeferredCardUpdates({})).not.toThrow();
    expect(run).not.toHaveBeenCalled();
  });
});

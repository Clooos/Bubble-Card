import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

// The window is module state by design (one flush covers every card at once),
// so each test gets its own copy of the module rather than a shared one whose
// pending restore frame would leak into the next.
let isInstantSliderWrite;
let keepSliderWriteInstant;
let runWithInstantSliderWrites;

// A stand-in for the inline style of a fill or a color cursor, recording the
// priority the kill-switch is written with.
function createElement() {
  const declarations = new Map();
  return {
    declarations,
    style: {
      setProperty: (name, value, priority) => declarations.set(name, { value, priority }),
      removeProperty: (name) => declarations.delete(name)
    }
  };
}

let frames;

function flushFrame() {
  const due = frames;
  frames = [];
  due.forEach(callback => callback());
}

beforeEach(async () => {
  frames = [];
  globalThis.requestAnimationFrame = jest.fn(callback => {
    frames.push(callback);
    return frames.length;
  });

  jest.resetModules();
  ({ isInstantSliderWrite, keepSliderWriteInstant, runWithInstantSliderWrites } =
    await import('./instant-writes.js'));
});

afterEach(() => {
  delete globalThis.requestAnimationFrame;
});

describe('the instant write window', () => {
  test('is closed until a task opens it', () => {
    expect(isInstantSliderWrite()).toBe(false);

    runWithInstantSliderWrites(() => {
      expect(isInstantSliderWrite()).toBe(true);
    });

    expect(isInstantSliderWrite()).toBe(false);
  });

  test('returns what the task returned', () => {
    expect(runWithInstantSliderWrites(() => 'flushed')).toBe('flushed');
  });

  test('closes even when the task throws, so one bad flush cannot freeze every slider', () => {
    expect(() => runWithInstantSliderWrites(() => {
      throw new Error('a card handler blew up');
    })).toThrow('a card handler blew up');

    expect(isInstantSliderWrite()).toBe(false);
  });

  test('only the outermost caller closes it', () => {
    runWithInstantSliderWrites(() => {
      runWithInstantSliderWrites(() => {});
      expect(isInstantSliderWrite()).toBe(true);
    });

    expect(isInstantSliderWrite()).toBe(false);
  });
});

describe('keepSliderWriteInstant', () => {
  test('does nothing outside a window: an ordinary state change keeps its transition', () => {
    const element = createElement();

    keepSliderWriteInstant(element);

    expect(element.declarations.has('transition')).toBe(false);
  });

  test('kills the transition with the priority an author !important would outrank', () => {
    const element = createElement();

    runWithInstantSliderWrites(() => keepSliderWriteInstant(element));

    expect(element.declarations.get('transition')).toEqual({ value: 'none', priority: 'important' });
  });

  test('restores the transition, but only once the new position has been resolved', () => {
    const element = createElement();

    runWithInstantSliderWrites(() => keepSliderWriteInstant(element));

    // First frame: the style carrying the kill-switch is what the browser
    // resolves, which is what makes the new position the before-change style.
    flushFrame();
    expect(element.declarations.has('transition')).toBe(true);

    // Second frame: clearing now cannot animate anything, the element is
    // already resolved at its final position.
    flushFrame();
    expect(element.declarations.has('transition')).toBe(false);
  });

  test('restores every element a single flush touched', () => {
    const fill = createElement();
    const cursor = createElement();

    runWithInstantSliderWrites(() => {
      keepSliderWriteInstant(fill);
      keepSliderWriteInstant(cursor);
    });

    flushFrame();
    flushFrame();

    expect(fill.declarations.has('transition')).toBe(false);
    expect(cursor.declarations.has('transition')).toBe(false);
  });

  test('arms a single restore for the whole flush', () => {
    runWithInstantSliderWrites(() => {
      keepSliderWriteInstant(createElement());
      keepSliderWriteInstant(createElement());
    });

    expect(globalThis.requestAnimationFrame).toHaveBeenCalledTimes(1);
  });

  test('arms nothing when the flush touched no slider', () => {
    runWithInstantSliderWrites(() => {});

    expect(globalThis.requestAnimationFrame).not.toHaveBeenCalled();
  });

  test('restores inline when there is no frame to wait for', () => {
    delete globalThis.requestAnimationFrame;
    const element = createElement();

    runWithInstantSliderWrites(() => keepSliderWriteInstant(element));

    expect(element.declarations.has('transition')).toBe(false);
  });

  test('survives an element with no style, so a torn down card cannot break a flush', () => {
    expect(() => runWithInstantSliderWrites(() => {
      keepSliderWriteInstant(null);
      keepSliderWriteInstant({});
    })).not.toThrow();
  });

  test('a second window opening before the restore lands keeps the first one killed', () => {
    const first = createElement();
    const second = createElement();

    runWithInstantSliderWrites(() => keepSliderWriteInstant(first));
    runWithInstantSliderWrites(() => keepSliderWriteInstant(second));

    flushFrame();
    flushFrame();

    expect(first.declarations.has('transition')).toBe(false);
    expect(second.declarations.has('transition')).toBe(false);
  });
});

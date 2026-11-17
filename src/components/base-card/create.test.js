import { describe, expect, jest, test } from '@jest/globals';

class StubElement {
  constructor(tag) {
    this.tagName = String(tag).toUpperCase();
    this.children = [];
    this.parentElement = null;
    this.classList = {
      _set: new Set(),
      add(...names) { names.filter(Boolean).forEach((name) => this._set.add(name)); },
      contains(name) { return this._set.has(name); },
    };
  }

  append(...nodes) {
    nodes.filter(Boolean).forEach((node) => this.appendChild(node));
  }

  appendChild(child) {
    if (!child) return child;
    if (child.parentElement) child.parentElement.removeChild(child);
    this.children.push(child);
    child.parentElement = this;
    return child;
  }

  insertBefore(child, reference) {
    if (reference == null) return this.appendChild(child);
    if (child.parentElement) child.parentElement.removeChild(child);
    const index = this.children.indexOf(reference);
    if (index === -1) this.children.push(child);
    else this.children.splice(index, 0, child);
    child.parentElement = this;
    return child;
  }

  prepend(child) {
    return this.insertBefore(child, this.children[0] ?? null);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) this.children.splice(index, 1);
    child.parentElement = null;
    return child;
  }
}

function createStubElement(tag, classNames = '') {
  const element = new StubElement(tag);
  if (classNames) {
    classNames.split(' ').filter(Boolean).forEach((name) => element.classList.add(name));
  }
  return element;
}

jest.unstable_mockModule('./styles.css', () => ({ default: '' }));

jest.unstable_mockModule('./changes.js', () => ({
  syncMainButtonsBottomClass: jest.fn(),
  updateContentContainerFixedClass: jest.fn(),
}));

jest.unstable_mockModule('../../tools/utils.js', () => ({
  createElement: createStubElement,
}));

jest.unstable_mockModule('../../tools/tap-actions.js', () => ({
  addActions: jest.fn(() => ({ has_action: false })),
  addFeedback: jest.fn(),
}));

jest.unstable_mockModule('../sub-button/index.js', () => ({
  createSubButtonStructure: jest.fn(),
}));

jest.unstable_mockModule('../sub-button/utils.js', () => ({
  ensureNewSubButtonsSchemaObject: () => ({ main: [], bottom: [] }),
}));

jest.unstable_mockModule('../slider/index.js', () => ({
  createSliderStructure: jest.fn((context) => {
    context.elements.rangeSlider = createStubElement('div', 'bubble-range-slider range-slider');
    context.elements.rangeFill = createStubElement('div', 'bubble-range-fill range-fill');
    context.elements.rangeSlider.appendChild(context.elements.rangeFill);
    context.elements.mainContainer.insertBefore(
      context.elements.rangeSlider,
      context.elements.cardWrapper
    );
  }),
}));

const { createBaseStructure } = await import('./create.js');

function createContext() {
  return {
    config: { entity: 'light.bedroom' },
    content: createStubElement('div'),
    elements: {},
  };
}

describe('createBaseStructure layering of background and slider (#2373)', () => {
  test('places background before rangeSlider and cardWrapper on slider cards', () => {
    const context = createContext();
    const elements = createBaseStructure(context, {
      type: 'button',
      withSlider: true,
      withBackground: true,
    });

    const children = elements.mainContainer.children;
    const backgroundIndex = children.indexOf(elements.background);
    const sliderIndex = children.indexOf(elements.rangeSlider);
    const wrapperIndex = children.indexOf(elements.cardWrapper);

    expect(elements.background.parentElement).toBe(elements.mainContainer);
    expect(elements.cardWrapper.children).not.toContain(elements.background);
    expect(backgroundIndex).toBeGreaterThanOrEqual(0);
    expect(sliderIndex).toBeGreaterThan(backgroundIndex);
    expect(wrapperIndex).toBeGreaterThan(sliderIndex);
  });

  test('keeps background inside cardWrapper on non-slider cards', () => {
    const context = createContext();
    const elements = createBaseStructure(context, {
      type: 'button',
      withSlider: false,
      withBackground: true,
    });

    expect(elements.background.parentElement).toBe(elements.cardWrapper);
    expect(elements.cardWrapper.children[0]).toBe(elements.background);
    expect(elements.mainContainer.children).not.toContain(elements.background);
  });

  test('skips background cleanly when withBackground is false on slider cards', () => {
    const context = createContext();
    const elements = createBaseStructure(context, {
      type: 'button',
      withSlider: true,
      withBackground: false,
    });

    expect(elements.background).toBeUndefined();
    const children = elements.mainContainer.children;
    expect(children.indexOf(elements.rangeSlider)).toBeLessThan(
      children.indexOf(elements.cardWrapper)
    );
  });
});

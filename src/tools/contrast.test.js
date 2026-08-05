import { describe, expect, test } from '@jest/globals';
import {
  blendSurface,
  isSameSurface,
  needsSurfaceOutline,
  paintedSurfaces,
  parseSurfaceColor,
  spansOverlap,
  stackSurfaces
} from './contrast.js';

describe('parseSurfaceColor', () => {
  test('reads the computed forms browsers hand back', () => {
    expect(parseSurfaceColor('rgb(75, 177, 254)')).toEqual({ rgb: [75, 177, 254], alpha: 1 });
    expect(parseSurfaceColor('rgba(75, 177, 254, 0.5)')).toEqual({ rgb: [75, 177, 254], alpha: 0.5 });
    expect(parseSurfaceColor('rgb(75 177 254 / 20%)')).toEqual({ rgb: [75, 177, 254], alpha: 0.2 });
  });

  test('reads the hex forms themes are written with', () => {
    expect(parseSurfaceColor('#4bb1fe')).toEqual({ rgb: [75, 177, 254], alpha: 1 });
    expect(parseSurfaceColor('#fff')).toEqual({ rgb: [255, 255, 255], alpha: 1 });
    expect(parseSurfaceColor('#00000080').alpha).toBeCloseTo(0.5, 1);
  });

  test('treats a missing color as fully transparent', () => {
    expect(parseSurfaceColor('transparent')).toEqual({ rgb: [0, 0, 0], alpha: 0 });
    expect(parseSurfaceColor('not a color')).toBeNull();
    expect(parseSurfaceColor(null)).toBeNull();
  });
});

describe('blendSurface', () => {
  test('an opaque layer hides what is behind it', () => {
    expect(blendSurface({ rgb: [10, 20, 30], alpha: 1 }, [255, 255, 255])).toEqual([10, 20, 30]);
  });

  test('a translucent layer is composited over the color behind', () => {
    expect(blendSurface({ rgb: [0, 0, 0], alpha: 0.5 }, [255, 255, 255])).toEqual([128, 128, 128]);
  });

  test('a translucent layer over an unknown background stays unknown', () => {
    expect(blendSurface({ rgb: [0, 0, 0], alpha: 0.5 }, null)).toBeNull();
    expect(blendSurface({ patterned: true }, [255, 255, 255])).toBeNull();
  });
});

describe('stackSurfaces', () => {
  test('composites the layers bottom first', () => {
    const stacked = stackSurfaces([
      { rgb: [255, 255, 255], alpha: 1 },
      { rgb: [0, 0, 0], alpha: 0.5 }
    ]);
    expect(stacked).toEqual([128, 128, 128]);
  });

  test('a gradient hides everything below and leaves the result unknown', () => {
    expect(stackSurfaces([{ rgb: [255, 255, 255], alpha: 1 }, { patterned: true }])).toBeNull();
  });

  test('fully transparent layers are skipped', () => {
    expect(stackSurfaces([{ rgb: [10, 10, 10], alpha: 1 }, { rgb: [0, 0, 0], alpha: 0 }])).toEqual([10, 10, 10]);
  });
});

describe('paintedSurfaces', () => {
  const card = [17, 118, 200];

  test('reports the background of an element and the fill above it', () => {
    const surfaces = paintedSurfaces([
      { rgb: [79, 69, 87], alpha: 1 },
      { rgb: card, alpha: 1 }
    ], card);
    expect(surfaces).toEqual([[79, 69, 87], card]);
  });

  test('an element painting nothing has no surface at all', () => {
    // What "Show background when entity is on" turned off leaves behind: the
    // card shows through, the element itself paints nothing to compare
    expect(paintedSurfaces([{ rgb: [0, 0, 0], alpha: 0 }], card)).toEqual([]);
    expect(paintedSurfaces([null], card)).toEqual([]);
  });

  test('a patterned layer drops the element', () => {
    expect(paintedSurfaces([{ patterned: true }], card)).toEqual([]);
    expect(paintedSurfaces([{ rgb: [79, 69, 87], alpha: 1 }, { patterned: true }], card)).toEqual([]);
  });

  test('a translucent background is composited over the card behind it', () => {
    expect(paintedSurfaces([{ rgb: [255, 255, 255], alpha: 0.5 }], [0, 0, 0])).toEqual([[128, 128, 128]]);
  });
});

describe('isSameSurface', () => {
  test('an identical color is the same surface', () => {
    expect(isSameSurface([75, 177, 254], [75, 177, 254])).toBe(true);
  });

  test('the color getStateSurfaceColor derives stays a distinct surface', () => {
    // 8% apart, what getStateSurfaceColor applies when a sub-button color would
    // land on an identical card background, on a bright and on a dark blue
    expect(isSameSurface([75, 177, 254], [69, 163, 234])).toBe(false);
    expect(isSameSurface([17, 118, 200], [16, 109, 184])).toBe(false);
  });

  test('a difference no screen shows is the same surface', () => {
    expect(isSameSurface([20, 20, 20], [22, 22, 22])).toBe(true);
    expect(isSameSurface([255, 255, 255], [251, 251, 251])).toBe(true);
  });

  test('plainly different colors are distinct surfaces', () => {
    expect(isSameSurface([75, 177, 254], [255, 255, 255])).toBe(false);
    expect(isSameSurface([20, 20, 20], [40, 40, 40])).toBe(false);
  });

  test('a missing color is never the same surface', () => {
    expect(isSameSurface(null, [20, 20, 20])).toBe(false);
    expect(isSameSurface([20, 20], [20, 20, 20])).toBe(false);
  });
});

describe('spansOverlap', () => {
  test('detects an overlap on the axis', () => {
    expect(spansOverlap([0.5, 0.9], [0, 0.6])).toBe(true);
    expect(spansOverlap([0.5, 0.9], [0, 0.4])).toBe(false);
  });

  test('touching edges do not overlap', () => {
    expect(spansOverlap([0.5, 0.9], [0, 0.5])).toBe(false);
  });

  test('a missing span never overlaps', () => {
    expect(spansOverlap(null, [0, 1])).toBe(false);
  });
});

describe('needsSurfaceOutline', () => {
  const blue = [75, 177, 254];
  const white = [255, 255, 255];
  const spans = { x: [0.8, 0.95], y: [0.2, 0.8] };

  test('outlines an element painting the color of the card behind it', () => {
    expect(needsSurfaceOutline([blue], [{ rgb: blue, span: null }], spans)).toBe(true);
  });

  test('leaves an element that stands out alone', () => {
    expect(needsSurfaceOutline([white], [{ rgb: blue, span: null }], spans)).toBe(false);
  });

  test('outlines a slider whose fill matches even when its track does not', () => {
    expect(needsSurfaceOutline([white, blue], [{ rgb: blue, span: null }], spans)).toBe(true);
  });

  test('a card fill of the same color only counts under the element', () => {
    const fillUnder = [{ rgb: blue, span: [0, 0.9], axis: 'x' }];
    const fillAway = [{ rgb: blue, span: [0, 0.3], axis: 'x' }];
    expect(needsSurfaceOutline([blue], fillUnder, spans)).toBe(true);
    expect(needsSurfaceOutline([blue], fillAway, spans)).toBe(false);
  });

  test('a vertical card fill is compared on its own axis', () => {
    const fill = [{ rgb: blue, span: [0, 0.5], axis: 'y' }];
    expect(needsSurfaceOutline([blue], fill, spans)).toBe(true);
    expect(needsSurfaceOutline([blue], fill, { x: [0.8, 0.95], y: [0.6, 0.9] })).toBe(false);
  });

  test('nothing to compare means no outline', () => {
    expect(needsSurfaceOutline([], [{ rgb: blue, span: null }], spans)).toBe(false);
    expect(needsSurfaceOutline([blue], [], spans)).toBe(false);
  });
});

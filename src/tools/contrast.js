import { hexToRgb, rgbStringToRgb } from './color.js';

// Two surfaces read as one when every channel is within this ratio of the other.
// A ratio, not a fixed distance: getStateSurfaceColor separates a sub-button
// from its card by scaling the color 8%, which is 6 levels apart on a dark blue
// and 20 on a bright one. Anything under 4% is the same surface on both.
export const SAME_SURFACE_RATIO = 0.04;
// Below this many levels apart, no screen shows a difference, whatever the ratio
// says on the very dark colors
export const SAME_SURFACE_FLOOR = 3;

// Alpha of a computed color, the channels themselves are parsed by the shared
// helpers. Computed styles only ever hand back rgb()/rgba(), but themes and
// custom styles can reach these helpers with hex values too
function parseAlpha(value) {
  const functional = value.match(/^rgba?\(([^)]*)\)$/i);
  if (functional) {
    const parts = functional[1].split(/[\s,/]+/).filter(Boolean);
    if (parts.length < 4) return 1;
    const raw = parts[3];
    const alpha = raw.endsWith('%') ? parseFloat(raw) / 100 : parseFloat(raw);
    return Number.isFinite(alpha) ? Math.min(1, Math.max(0, alpha)) : 1;
  }

  const hex = value.match(/^#([a-f\d]{4}|[a-f\d]{8})$/i);
  if (hex) {
    const digits = hex[1];
    const pair = digits.length === 4 ? digits[3] + digits[3] : digits.slice(6, 8);
    return parseInt(pair, 16) / 255;
  }

  return 1;
}

export function parseSurfaceColor(value) {
  if (typeof value !== 'string') return null;

  const raw = value.trim();
  if (!raw) return null;
  if (raw === 'transparent' || raw === 'none') return { rgb: [0, 0, 0], alpha: 0 };

  const rgb = rgbStringToRgb(raw) || hexToRgb(raw);
  if (!rgb) return null;

  return { rgb, alpha: parseAlpha(raw) };
}

// Paint a layer over what is already known to be behind it. Returns null when
// the result cannot be known, a translucent layer over an unknown background
// stays unknown
export function blendSurface(layer, behindRgb) {
  if (!layer || layer.patterned) return null;
  if (layer.alpha >= 1) return layer.rgb;
  if (!behindRgb) return null;
  if (layer.alpha <= 0) return behindRgb;

  return layer.rgb.map((channel, index) => Math.round(channel * layer.alpha + behindRgb[index] * (1 - layer.alpha)));
}

// What an element actually paints: its background color dimmed by its own
// opacity. A background image (gradient, picture) is reported as patterned:
// such a surface is never a flat color, so it can always be told apart
export function readSurfaceLayer(element) {
  if (!element || typeof globalThis.getComputedStyle !== 'function') return null;

  let styles;
  try {
    styles = globalThis.getComputedStyle(element);
  } catch (_) {
    return null;
  }
  if (!styles) return null;

  const image = styles.backgroundImage;
  if (image && image !== 'none') return { patterned: true };

  const color = parseSurfaceColor(styles.backgroundColor);
  if (!color) return null;

  const opacity = parseFloat(styles.opacity);
  return {
    rgb: color.rgb,
    alpha: color.alpha * (Number.isFinite(opacity) ? opacity : 1)
  };
}

// Composite a stack of layers, bottom first. A patterned layer hides everything
// below it and leaves the result unknown
export function stackSurfaces(layers) {
  let result = null;

  for (const layer of layers) {
    if (!layer) continue;
    if (layer.patterned) {
      result = null;
      continue;
    }
    if (layer.alpha <= 0) continue;
    result = blendSurface(layer, result) ?? result;
  }

  return result;
}

// The colors an element paints, from its own layers stacked bottom first (its
// background, then its slider fill). A layer painting nothing is skipped, which
// is what leaves an element without background out of the comparison, and a
// patterned layer (gradient, picture) drops the element entirely: such a surface
// can always be told apart from a flat card
export function paintedSurfaces(layers, behindRgb) {
  const surfaces = [];
  let behind = behindRgb;

  for (const layer of layers) {
    if (!layer) continue;
    if (layer.patterned) return [];
    if (layer.alpha <= 0) continue;

    const rgb = blendSurface(layer, behind);
    if (!rgb) continue;

    surfaces.push(rgb);
    behind = rgb;
  }

  return surfaces;
}

export function isSameSurface(rgb1, rgb2) {
  if (!rgb1 || !rgb2 || rgb1.length !== 3 || rgb2.length !== 3) return false;

  return rgb1.every((channel, index) => {
    const other = rgb2[index];
    const tolerance = Math.max(SAME_SURFACE_FLOOR, Math.max(channel, other) * SAME_SURFACE_RATIO);
    return Math.abs(channel - other) <= tolerance;
  });
}

// Spans are [start, end] fractions along one axis of the card
export function spansOverlap(span1, span2) {
  if (!span1 || !span2) return false;
  return span1[0] < span2[1] - 1e-6 && span2[0] < span1[1] - 1e-6;
}

// An element needs an outline when one of the colors it paints is the same as
// the color painted right behind it. A background limited to a span (a slider
// fill) only counts for the elements standing in front of it
export function needsSurfaceOutline(surfaces, backgrounds, spans) {
  if (!surfaces?.length || !backgrounds?.length) return false;

  return backgrounds.some(background => {
    if (background.span) {
      const span = spans?.[background.axis];
      if (!spansOverlap(span, background.span)) return false;
    }
    return surfaces.some(surface => isSameSurface(surface, background.rgb));
  });
}

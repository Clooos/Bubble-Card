import { hexToRgb, rgbStringToRgb } from './color.js';

// Two surfaces read as one when every channel is within this many levels of the
// other. A fixed distance, not a ratio of the channel: sRGB is already
// gamma-encoded, so a step in code space covers about the same perceived
// distance at both ends of the range, and a tolerance that grew with the
// channel reached +/-10 levels on the bright colors. A light theme separating a
// slider rail from its card by less than that (an 8% scale saturates near
// white: 245 against 255) was read as one surface and outlined, while the eye
// sees a clean edge (#2590).
//
// Only false positives were ever at stake here: the cases this rescues paint
// the very same color on both surfaces, so they sit at zero, and the 8%
// getStateSurfaceColor applies stays well above the tolerance on any color.
export const SAME_SURFACE_TOLERANCE = 4;

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

// A pseudo-element paints over its element's own background, and dressing a card
// that way is what most styling modules and themes do. `getComputedStyle` of the
// element alone never sees it, so a card wearing a gradient through
// `.bubble-content-container::before` was compared on the flat color buried
// under it: 40 levels away from what the screen actually showed, and a slider
// standing plainly apart from its card was outlined (#2590).
//
// Reported as patterned rather than as its own color, because its geometry is
// not knowable here: a full overlay and a corner badge read exactly the same
// from the computed style, and claiming the badge's color as the surface behind
// a sub-button would trade one wrong outline for another. Patterned is the
// verdict the rest of this file already treats as "cannot be told apart, leave
// it alone".
const PSEUDO_LAYERS = ['::before', '::after'];

function paintsAnything(styles) {
  if (!styles) return false;

  // No content, no box, nothing painted
  const content = styles.content;
  if (!content || content === 'none' || content === 'normal') return false;
  if (styles.display === 'none' || styles.visibility === 'hidden') return false;

  const opacity = parseFloat(styles.opacity);
  if (Number.isFinite(opacity) && opacity <= 0) return false;

  const image = styles.backgroundImage;
  if (image && image !== 'none') return true;

  const color = parseSurfaceColor(styles.backgroundColor);
  return !!color && color.alpha > 0;
}

// What an element paints, its own background first and then a marker for the
// pseudo-elements drawn over it
export function readSurfaceLayers(element) {
  const layers = [readSurfaceLayer(element)];
  if (!element || typeof globalThis.getComputedStyle !== 'function') return layers;

  for (const pseudo of PSEUDO_LAYERS) {
    let styles;
    try {
      styles = globalThis.getComputedStyle(element, pseudo);
    } catch (_) {
      continue;
    }
    if (paintsAnything(styles)) {
      layers.push({ patterned: true });
      break;
    }
  }

  return layers;
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

  return rgb1.every((channel, index) => Math.abs(channel - rgb2[index]) <= SAME_SURFACE_TOLERANCE);
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

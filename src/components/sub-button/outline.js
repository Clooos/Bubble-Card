import { blendSurface, needsSurfaceOutline, paintedSurfaces, readSurfaceLayer, stackSurfaces } from '../../tools/contrast.js';
import { getStyleGeneration } from '../../tools/utils.js';

// A sub-button (or a slider) can end up painting exactly the color of what sits
// behind it: the accent color on both, the same light color on both, or a card
// slider whose fill has grown under it. Nothing separates them then, so those
// elements get a hairline. Every other case is left untouched, the outline is
// only there to rescue the ones that would be invisible.
//
// The pass is coalesced to one frame per card, skipped whole when nothing it
// depends on has changed, and reduced to plain arithmetic while a slider is
// being dragged.
const OUTLINE_CLASS = 'needs-outline';
const TARGET_SELECTOR = '.bubble-sub-button, .bubble-sub-button-slider';

function getScope(context) {
  return context?.elements?.mainContainer || context?.elements?.cardWrapper || null;
}

// Cards own their sub-buttons, the slider sub-buttons build their own context
// around a single slider and must not run this pass
function ownsSubButtons(context) {
  return !!(context?.elements?.subButtonContainer || context?.elements?.bottomSubButtonContainer);
}

function isVisibleTarget(element) {
  const classList = element.classList;
  if (!classList) return false;
  // The host of an inline slider is display: none, and a folded slider overlay
  // sits in a wrapper faded out to zero
  if (classList.contains('hidden') || classList.contains('inline-slider-host')) return false;
  if (element.parentElement?.classList?.contains('is-hidden')) return false;
  return true;
}

function collectTargets(scope) {
  return [...scope.querySelectorAll(TARGET_SELECTOR)].filter(isVisibleTarget);
}

// The flat colors behind the sub-buttons: the card itself, and the one its
// slider fill paints where it reaches
function readCardColors(context) {
  const base = stackSurfaces([
    readSurfaceLayer(context.elements?.mainContainer),
    readSurfaceLayer(context.elements?.background)
  ]);

  return {
    base,
    fill: base ? blendSurface(readSurfaceLayer(context.elements?.rangeFill), base) : null
  };
}

// Where the card slider fill stands right now, as a span of the card. Free to
// compute: the slider already stored its visual percentage and orientation
function getFillRegion(context) {
  const percentage = context._lastVisualFillPercentage;
  if (!context.elements?.rangeFill || !Number.isFinite(percentage) || percentage <= 0) return null;

  const orientation = context._lastFillOrientation || 'left';
  const ratio = Math.min(1, Math.max(0, percentage / 100));
  const isVertical = orientation === 'top' || orientation === 'bottom';
  const grownFromEnd = orientation === 'right' || orientation === 'bottom';

  return {
    axis: isVertical ? 'y' : 'x',
    span: grownFromEnd ? [1 - ratio, 1] : [0, ratio]
  };
}

function buildBackgrounds(context, colors) {
  if (!colors?.base) return [];

  const backgrounds = [{ rgb: colors.base, span: null, axis: null }];
  const region = colors.fill ? getFillRegion(context) : null;
  if (region) backgrounds.push({ rgb: colors.fill, ...region });

  return backgrounds;
}

// Looking the fill up once per element is enough, a slider keeps the same one
// for its whole life
function getFillElement(element, cache) {
  if (cache.fill === undefined) cache.fill = element.querySelector?.('.bubble-range-fill') || null;
  return cache.fill;
}

// What the element paints: its own background, then its slider fill. A color
// slider is covered by a gradient track, which is never mistakable for a flat
// card color, and an element painting nothing at all (show_background off) has
// no surface to compare
function readTargetSurfaces(element, cache, behindRgb) {
  const fillElement = getFillElement(element, cache);
  const fillLayer = fillElement && element.querySelector?.('.bubble-color-track')
    ? { patterned: true }
    : readSurfaceLayer(fillElement);

  return paintedSurfaces([readSurfaceLayer(element), fillLayer], behindRgb);
}

function measureSpans(element, box) {
  const rect = element.getBoundingClientRect?.();
  if (!rect) return null;

  return {
    x: [(rect.left - box.left) / box.width, (rect.right - box.left) / box.width],
    y: [(rect.top - box.top) / box.height, (rect.bottom - box.top) / box.height]
  };
}

// Everything the decision depends on, read without touching the layout or the
// computed styles: the theme, the card colors and fill, and what each element
// was handed. A state update that changes none of it stops right here
function outlineSignature(context, targets) {
  const parts = [
    getStyleGeneration(),
    context._lastVisualFillPercentage ?? '',
    context._lastFillOrientation || '',
    context.card?.style?.getPropertyValue('--bubble-button-background-color') || ''
  ];

  targets.forEach(element => {
    const cache = element._bubbleOutline || (element._bubbleOutline = {});
    const fill = getFillElement(element, cache);
    parts.push(
      String(element.className).replace(OUTLINE_CLASS, ''),
      element.style?.getPropertyValue('--bubble-sub-button-light-background-color') || '',
      fill ? `${fill.className}|${fill.style?.getPropertyValue('--bubble-slider-fill-color') || ''}` : ''
    );
  });

  return parts.join('~');
}

function setOutline(element, cache, needed) {
  if (cache.applied === needed) return;
  element.classList.toggle(OUTLINE_CLASS, needed);
  cache.applied = needed;
}

export function applySubButtonOutlines(context) {
  const scope = getScope(context);
  if (!scope?.querySelectorAll || !ownsSubButtons(context)) return;

  // A drag moves the fill, and only the fill: the sub-buttons, their spans and
  // every color read before it stay valid until it ends
  const settled = !context.dragging || !context._outlinePrimed;
  const targets = settled || !context._outlineTargets ? collectTargets(scope) : context._outlineTargets;
  if (!targets.length) return;

  const signature = outlineSignature(context, targets);
  if (signature === context._outlineSignature) return;

  const box = settled ? (context.elements.cardWrapper || scope).getBoundingClientRect?.() : context._outlineBox;
  // An unrendered card (closed pop-up, hidden view) measures to nothing: there
  // is no surface to compare and nothing worth spending on it
  if (!box?.width || !box?.height) return;

  context._outlineSignature = signature;
  const colors = settled ? readCardColors(context) : context._outlineColors;
  const backgrounds = buildBackgrounds(context, colors);

  if (settled) {
    context._outlineTargets = targets;
    context._outlineBox = box;
    context._outlineColors = colors;
    context._outlinePrimed = true;
  }

  targets.forEach(element => {
    const cache = element._bubbleOutline || (element._bubbleOutline = {});
    if (settled) {
      cache.spans = measureSpans(element, box);
      cache.surfaces = readTargetSurfaces(element, cache, colors.base);
    }
    setOutline(element, cache, needsSurfaceOutline(cache.surfaces, backgrounds, cache.spans));
  });
}

export function scheduleSubButtonOutlines(context) {
  if (!context || context._outlineFrame || context.isConnected === false) return;
  if (!ownsSubButtons(context)) return;

  const schedule = typeof requestAnimationFrame === 'function'
    ? requestAnimationFrame
    : (callback) => setTimeout(callback, 16);

  context._outlineFrame = schedule(() => {
    context._outlineFrame = null;
    try {
      applySubButtonOutlines(context);
    } catch (_) {}
  });
}

export function cancelSubButtonOutlines(context) {
  if (!context) return;

  if (context._outlineFrame && typeof cancelAnimationFrame === 'function') {
    cancelAnimationFrame(context._outlineFrame);
  }
  context._outlineFrame = null;
  // Nothing here survives the card: the cached targets and box would otherwise
  // hold on to elements the card is done with
  context._outlineTargets = null;
  context._outlineBox = null;
  context._outlineColors = null;
  context._outlineSignature = null;
  context._outlinePrimed = false;
}

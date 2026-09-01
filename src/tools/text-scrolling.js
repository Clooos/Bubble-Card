// Shared state for scrolling effect
const scrollState = new WeakMap();
const SCROLL_SPEED = 16;
// The text is now measured in float, so this only has to swallow the noise
// between two float reads. It used to be 2, against two integer-rounded
// readings, which hid up to 3px of real overflow: the text sat clipped
// mid-character and never scrolled (#2462).
const SCROLL_TOLERANCE = 0.5;
const SEPARATOR = '<span class="bubble-scroll-separator"> | </span>';

// How far outside the viewport an element still counts as worth measuring, so
// its marquee is already in place by the time it is scrolled into view.
const NEAR_MARGIN = '150px';

// Batched measurement via requestAnimationFrame
const pending = new Set();
let rafId = 0;

// Every element currently measured, so a font finishing its load can send them all
// back through the flush. Held weakly where WeakRef exists, so an element dropped
// from the DOM without going through cleanupScrollingEffects (a sub-button rebuilt
// in place, for instance) still gets collected.
const tracked = new Set();
const supportsWeakRef = typeof WeakRef === 'function';
const makeRef = (el) => supportsWeakRef ? new WeakRef(el) : el;
const readRef = (ref) => supportsWeakRef ? ref.deref() : ref;

// Lazy singleton observers (module-scoped, shared across all cards)
let resizeObs = null;
let intersectionObs = null;
let nearObs = null;
let fontsHooked = false;

// Holding a measurement back until its element is on its way to the screen only
// works because observe() is specified to report on every target it is given,
// whether or not anything moves afterwards. Without that first report nothing
// would ever release the element, so an environment with no IntersectionObserver
// measures everything straight away instead.
const canDeferMeasures = typeof IntersectionObserver === 'function';

// Marks the elements this module owns, so the lifecycle sweeps below can find
// them without walking every node of the card.
const MARKER = 'data-bubble-scroll';

function unobserve(el) {
    if (resizeObs) try { resizeObs.unobserve(el); } catch (e) {}
    if (intersectionObs) try { intersectionObs.unobserve(el); } catch (e) {}
    if (nearObs) try { nearObs.unobserve(el); } catch (e) {}
    pending.delete(el);
}

function release(el, state) {
    unobserve(el);
    if (state?.ref) tracked.delete(state.ref);
    scrollState.delete(el);
    el.removeAttribute(MARKER);
}

// A measurement costs a forced layout, and that layout is the whole price of a
// flush: reading a second element once it has been paid is almost free, reading
// none at all costs nothing. A pop-up parks its shell a full viewport below the
// fold while it builds, so every one of the 25 elements of a 23-card pop-up was
// measured while nobody could see any of them. Hold those back until the near
// observer says they are coming into view.
//
// The observer is what makes this worth doing rather than a rect comparison: it
// answers on what is really visible, clipping ancestors included, so a calendar
// card showing two of its ten events builds two marquees and not ten.
//
// Only the decision to scroll waits. The text itself is always written straight
// away, so a held element shows the right string, just not yet as a marquee.
function queue(el, state) {
    state.dirty = true;
    if (state.near === false) return;
    pending.add(el);
    scheduleFlush();
}

// A style template assigning to .bubble-state or .bubble-name owns what that
// element shows from then on, so nothing here may write its text again: the card's
// own label is no longer what is meant to be visible there. Hand the element back
// and drop it from the pipeline entirely, because a measurement is enough to lose
// the template's content: the flush rebuilds the marquee out of state.text, which
// still holds the card's own text.
//
// applyScrollingEffect carried this guard as `if (element.templateDetected) return`
// until the scrolling rewrite of April 2025 removed it, while style-processor.js
// went on setting the flag with nothing left to read it.
function handOverToTemplate(el) {
    const state = scrollState.get(el);
    if (!state && el.previousText === undefined) return;
    el.removeAttribute('data-animated');
    delete el.previousText;
    if (state) release(el, state);
}

function getResizeObserver() {
    if (!resizeObs) {
        resizeObs = new ResizeObserver(entries => {
            for (const entry of entries) {
                const el = entry.target;
                const state = scrollState.get(el);
                if (!state) {
                    try { resizeObs.unobserve(el); } catch (e) {}
                    continue;
                }
                if (!el.isConnected) {
                    // Home Assistant builds a card off-document and attaches it
                    // afterwards, so an element that has never been measured is on
                    // its way in, not gone. Releasing it here left it unobserved for
                    // good, and the effect stayed off until some later update
                    // happened to rebuild the element from scratch.
                    if (state.measured) release(el, state);
                    continue;
                }
                // The observer reports once for every element the moment it is
                // observed, and again for every height change, and neither can
                // move a horizontal overflow. Following those doubled the work of
                // every first pass and paid a second forced layout for an answer
                // that could not have changed. The one width change it cannot see
                // is the text growing inside a box its parent holds still, which
                // is what the font hook below is there for.
                if (state.measured && sameWidth(observedWidth(entry), state.boxWidth)) continue;
                queue(el, state);
            }
        });
    }
    return resizeObs;
}

// The border box is what getBoundingClientRect() reports in the flush, so read
// the same edge here when the browser offers it rather than comparing a content
// width against a border width. Where they do differ the widths never match and
// the element is simply measured again, which is the safe way round.
function observedWidth(entry) {
    const box = entry.borderBoxSize;
    return box?.[0]?.inlineSize ?? box?.inlineSize ?? entry.contentRect?.width;
}

function sameWidth(a, b) {
    return a !== undefined && b !== undefined && Math.abs(a - b) < 0.01;
}

function getIntersectionObserver() {
    if (!intersectionObs) {
        intersectionObs = new IntersectionObserver(entries => {
            for (const entry of entries) {
                const state = scrollState.get(entry.target);
                if (state?.span) {
                    state.span.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
                    // A composited layer only pays for itself while the animation
                    // actually runs, and a dashboard holds far more marquees off
                    // screen than on it.
                    state.span.style.willChange = entry.isIntersecting ? 'transform' : 'auto';
                }
            }
        }, { threshold: 0.1 });
    }
    return intersectionObs;
}

// Kept apart from the observer above rather than folded into it: that one has to
// report on the viewport itself, so that a marquee holds a composited layer only
// while it is really on screen, and a margin would hand layers to elements nobody
// can see. This one wants the margin, so that the measurement is already done by
// the time the element arrives.
function getNearObserver() {
    if (!nearObs) {
        nearObs = new IntersectionObserver(entries => {
            for (const entry of entries) {
                const state = scrollState.get(entry.target);
                if (!state) continue;
                state.near = entry.isIntersecting;
                if (entry.isIntersecting && state.dirty) queue(entry.target, state);
            }
        }, { rootMargin: NEAR_MARGIN });
    }
    return nearObs;
}

// near stays undefined until the observer has really taken the element, and an
// element with no answer either way is measured rather than held: whatever goes
// wrong here, nothing is left waiting for a report that will never come.
function observeNear(el, state) {
    if (!canDeferMeasures) return;
    try {
        getNearObserver().observe(el);
        if (state.near === undefined) state.near = false;
    } catch (e) {
        state.near = undefined;
    }
}

// A webfont swapping in changes how wide the text renders without changing the box
// of the element holding it, so ResizeObserver never fires. That is what left a
// name that only overflows once Roboto has loaded silently truncated for the rest
// of the session: re-measure everything whenever a font finishes loading.
function hookFontLoading() {
    if (fontsHooked) return;
    fontsHooked = true;

    const fonts = typeof document !== 'undefined' ? document.fonts : null;
    if (!fonts) return;

    const remeasureAll = () => {
        for (const ref of tracked) {
            const el = readRef(ref);
            const state = el && scrollState.get(el);
            if (state) {
                queue(el, state);
            } else {
                tracked.delete(ref);
            }
        }
    };

    try { fonts.ready.then(remeasureAll); } catch (e) {}
    try { fonts.addEventListener('loadingdone', remeasureAll); } catch (e) {}
}

function scheduleFlush() {
    if (rafId) return;
    rafId = requestAnimationFrame(flush);
}

// scrollWidth and clientWidth are both rounded to whole pixels, so a name
// overflowing by less than about three of them reported no overflow at all and
// stayed clipped mid-character with no marquee to reveal the rest (#2462). A
// Range over the element's own content measures the text in float instead.
// .bubble-name and .bubble-state carry neither padding nor border, so the rect
// it returns is already the content width and needs no correction.
let measureRange = null;
let measureDoc = null;
let rangeHoldsElement = false;

function textWidth(el) {
    try {
        if (!measureRange) {
            measureDoc = el.ownerDocument;
            if (!measureDoc?.createRange) return null;
            measureRange = measureDoc.createRange();
        }
        measureRange.selectNodeContents(el);
        rangeHoldsElement = true;
        const width = measureRange.getBoundingClientRect().width;
        return width > 0 ? width : null;
    } catch (e) {
        return null;
    }
}

// The range keeps a strong reference to whatever it last selected, and an element
// carries its whole ancestor chain with it, so a pop-up torn down right after a
// measurement would be held alive by the last card it happened to measure.
function releaseRange() {
    if (!rangeHoldsElement) return;
    rangeHoldsElement = false;
    try { measureRange.selectNodeContents(measureDoc.documentElement); } catch (e) {}
}

// Single batched update: read phase then write phase to avoid layout thrashing
function flush() {
    rafId = 0;
    const batch = [...pending];
    pending.clear();

    // Read phase — use getBoundingClientRect() for batched geometry reads
    // This triggers a single forced layout instead of one per property per element
    const updates = [];
    for (const el of batch) {
        const state = scrollState.get(el);
        if (!state) continue;
        // The card evaluates its styles after it has set its name and its state, so
        // a template only claims the element once the measurement is already
        // queued. This is the frame that would overwrite it.
        if (el.templateDetected) { handOverToTemplate(el); continue; }
        // Not attached yet: leave it observed rather than dropping it, the resize
        // observer sends it back through as soon as it has a box.
        if (!el.isConnected) continue;

        state.measured = true;
        state.dirty = false;

        // Batch all geometry reads into a single getBoundingClientRect() call
        const elRect = el.getBoundingClientRect();
        const available = elRect.width;
        state.boxWidth = available;

        let content;
        if (state.animated && state.span?.isConnected) {
            const spanRect = state.span.getBoundingClientRect();
            // Text, separator, text, separator: half of it is one text plus one
            // separator, so it reads wider than the text on its own. That gap is
            // what keeps an element from flipping back and forth between the two
            // modes now that the tolerance no longer covers it.
            content = spanRect.width / 2;
        } else {
            content = textWidth(el) ?? (available + (el.scrollWidth - el.clientWidth));
        }

        updates.push({ el, state, content, needsScroll: content > available + SCROLL_TOLERANCE });
    }
    releaseRange();

    // Write phase — apply all DOM changes without interleaving reads
    for (const { el, state, content, needsScroll } of updates) {
        if (state.animated) {
            if (!needsScroll) {
                // Text now fits — disable scrolling
                el.removeAttribute('data-animated');
                el.innerHTML = state.text;
                state.animated = false;
                state.span = null;
                state.duration = '';
                if (intersectionObs) try { intersectionObs.unobserve(el); } catch (e) {}
            } else if (state.span && state.span.isConnected) {
                const duration = formatDuration(content);
                if (duration !== state.duration) {
                    state.span.style.animationDuration = duration;
                    state.duration = duration;
                }
            }
        } else if (needsScroll) {
            // Enable scrolling — duplicate text with separators
            el.innerHTML = `<div class="scrolling-container"><span>${state.text}${SEPARATOR}${state.text}${SEPARATOR}</span></div>`;
            el.setAttribute('data-animated', 'true');
            const span = el.querySelector('.scrolling-container span');
            state.animated = true;
            state.span = span;
            if (span) {
                state.duration = formatDuration(content);
                span.style.animationDuration = state.duration;
            }
            getIntersectionObserver().observe(el);
        }
    }
}

function formatDuration(contentWidth) {
    return `${Math.max(1, contentWidth / SCROLL_SPEED).toFixed(2)}s`;
}

export function applyScrollingEffect(context, element, text, scrollingEffectOverride) {
    const scrollingEffect = scrollingEffectOverride ?? context.config?.scrolling_effect ?? true;

    // Claimed by a style template: leave its content alone. The layout the
    // non-scrolling mode applies is still worth keeping, so a template-fed line
    // goes on wrapping onto two lines the way it did before.
    if (element.templateDetected) {
        handOverToTemplate(element);
        if (!scrollingEffect) applyNonScrollingLayout(element);
        return;
    }

    // No text at all: take the element right out of the pipeline. Callers used to
    // clear it themselves and return early, which left the state behind and let
    // the next measurement put the old label back into an element the card had
    // deliberately emptied.
    if (!text) {
        if (element.previousText === '' && !scrollState.has(element)) return;
        element.removeAttribute('data-animated');
        element.innerHTML = '';
        element.previousText = '';
        release(element, scrollState.get(element));
        return;
    }

    if (!scrollingEffect) {
        if (element.previousText !== text || scrollState.has(element)) {
            applyNonScrollingStyle(element, text);
        }
        release(element, scrollState.get(element));
        return;
    }

    // Fast path: nothing changed — observers handle resize/visibility independently
    if (element.previousText === text && scrollState.has(element)) return;

    element.previousText = text;

    const state = scrollState.get(element);

    // Text changed on tracked element — update in place
    if (state) {
        state.text = text;
        if (state.animated && state.span) {
            state.span.innerHTML = `${text}${SEPARATOR}${text}${SEPARATOR}`;
        } else {
            // The write has to land now, not on the next frame. Deferring it meant
            // the flush measured the text being replaced, so the second element
            // updated in a task — changeState right after changeName, the artist
            // right after the title — was sized against the previous string and
            // stayed unscrolled with nothing left to bring it back.
            element.innerHTML = text;
            state.animated = false;
            state.span = null;
        }
        queue(element, state);
        return;
    }

    // New element — reset any stale animated state from a previous lifecycle
    if (element.getAttribute('data-animated') === 'true') {
        element.removeAttribute('data-animated');
    }

    const fresh = {
        text,
        animated: false,
        span: null,
        measured: false,
        suspended: false,
        dirty: false,
        // Off screen until the near observer says otherwise, so a card built
        // inside a parked pop-up shell costs nothing to mount.
        near: undefined,
        boxWidth: undefined,
        duration: '',
        ref: null,
    };
    fresh.ref = makeRef(element);
    tracked.add(fresh.ref);
    scrollState.set(element, fresh);

    element.setAttribute(MARKER, '');
    element.innerHTML = text;
    element.style.cssText = '';

    hookFontLoading();
    getResizeObserver().observe(element);
    observeNear(element, fresh);
    queue(element, fresh);
}

function applyNonScrollingStyle(element, text) {
    element.innerHTML = text;
    element.previousText = text;
    applyNonScrollingLayout(element);
}

function applyNonScrollingLayout(element) {
    Object.assign(element.style, {
        whiteSpace: 'normal',
        display: '-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    });
}

// A card leaving the document is usually on its way back: Home Assistant rebuilds
// a view's columns on a sidebar toggle, a breakpoint change or an edit mode flip
// and re-appends the very same elements. Drop the observations, which are what
// actually holds memory, but keep the measurement state and the marquee itself.
// Tearing all of it down used to leave the card clipped on the way back, because
// only changeName re-registers unconditionally: changeState and the sub-buttons
// sit behind a "nothing changed" memo and never call in again.
export function cleanupScrollingEffects(root) {
    try {
        for (const el of root.querySelectorAll(`[${MARKER}]`)) {
            const state = scrollState.get(el);
            if (!state) {
                el.removeAttribute(MARKER);
                continue;
            }
            unobserve(el);
            state.suspended = true;
            if (state.span) {
                state.span.style.animationPlayState = 'paused';
                state.span.style.willChange = 'auto';
            }
        }
    } catch (e) {}
}

export function resumeScrollingEffects(root) {
    try {
        for (const el of root.querySelectorAll(`[${MARKER}]`)) {
            const state = scrollState.get(el);
            if (!state?.suspended) continue;
            state.suspended = false;
            getResizeObserver().observe(el);
            if (state.animated) getIntersectionObserver().observe(el);
            // Re-observing reports on the element again, so whatever the view did
            // while the card was away is answered without measuring the ones that
            // came back below the fold.
            observeNear(el, state);
            queue(el, state);
        }
    } catch (e) {}
}

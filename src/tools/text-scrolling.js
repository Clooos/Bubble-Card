// Shared state for scrolling effect
const scrollState = new WeakMap();
const SCROLL_SPEED = 16;
const SCROLL_TOLERANCE = 2;
const SEPARATOR = '<span class="bubble-scroll-separator"> | </span>';

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
let fontsHooked = false;

// Marks the elements this module owns, so the lifecycle sweeps below can find
// them without walking every node of the card.
const MARKER = 'data-bubble-scroll';

function unobserve(el) {
    if (resizeObs) try { resizeObs.unobserve(el); } catch (e) {}
    if (intersectionObs) try { intersectionObs.unobserve(el); } catch (e) {}
    pending.delete(el);
}

function release(el, state) {
    unobserve(el);
    if (state?.ref) tracked.delete(state.ref);
    scrollState.delete(el);
    el.removeAttribute(MARKER);
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
                pending.add(el);
            }
            if (pending.size) scheduleFlush();
        });
    }
    return resizeObs;
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
            if (el && scrollState.has(el)) {
                pending.add(el);
            } else {
                tracked.delete(ref);
            }
        }
        if (pending.size) scheduleFlush();
    };

    try { fonts.ready.then(remeasureAll); } catch (e) {}
    try { fonts.addEventListener('loadingdone', remeasureAll); } catch (e) {}
}

function scheduleFlush() {
    if (rafId) return;
    rafId = requestAnimationFrame(flush);
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

        // Batch all geometry reads into a single getBoundingClientRect() call
        const elRect = el.getBoundingClientRect();
        const available = elRect.width;

        let content;
        if (state.animated && state.span?.isConnected) {
            const spanRect = state.span.getBoundingClientRect();
            content = spanRect.width / 2;
        } else {
            content = available + (el.scrollWidth - el.clientWidth);
        }

        updates.push({ el, state, content, needsScroll: content > available + SCROLL_TOLERANCE });
    }

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
        pending.add(element);
        scheduleFlush();
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
    pending.add(element);
    scheduleFlush();
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
            pending.add(el);
        }
        if (pending.size) scheduleFlush();
    } catch (e) {}
}

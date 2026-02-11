// Shared state for scrolling effect
const scrollState = new WeakMap();
const SCROLL_SPEED = 16;
const SCROLL_TOLERANCE = 2;
const SEPARATOR = '<span class="bubble-scroll-separator"> | </span>';

// Batched measurement via requestAnimationFrame
const pending = new Set();
let rafId = 0;

// Lazy singleton observers (module-scoped, shared across all cards)
let resizeObs = null;
let intersectionObs = null;

function getResizeObserver() {
    if (!resizeObs) {
        resizeObs = new ResizeObserver(entries => {
            for (const entry of entries) {
                const el = entry.target;
                if (!el.isConnected) {
                    resizeObs.unobserve(el);
                    if (intersectionObs) try { intersectionObs.unobserve(el); } catch (e) {}
                    scrollState.delete(el);
                    continue;
                }
                if (scrollState.has(el)) pending.add(el);
            }
            scheduleFlush();
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
                }
            }
        }, { threshold: 0.1 });
    }
    return intersectionObs;
}

function scheduleFlush() {
    if (!rafId) rafId = requestAnimationFrame(flush);
}

// Single batched update: read phase then write phase to avoid layout thrashing
function flush() {
    rafId = 0;
    const batch = [...pending];
    pending.clear();

    // Read phase — gather all measurements in one pass (single forced layout)
    const updates = [];
    for (const el of batch) {
        const state = scrollState.get(el);
        if (!state || !el.isConnected) continue;
        const available = el.clientWidth;
        const content = (state.animated && state.span?.isConnected)
            ? state.span.scrollWidth / 2
            : el.scrollWidth;
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
                if (intersectionObs) try { intersectionObs.unobserve(el); } catch (e) {}
            } else if (state.span) {
                state.span.style.animationDuration = formatDuration(content);
            }
        } else if (needsScroll) {
            // Enable scrolling — duplicate text with separators
            el.innerHTML = `<div class="scrolling-container"><span>${state.text}${SEPARATOR}${state.text}${SEPARATOR}</span></div>`;
            el.setAttribute('data-animated', 'true');
            const span = el.querySelector('.scrolling-container span');
            state.animated = true;
            state.span = span;
            if (span) {
                span.style.animationDuration = formatDuration(content);
            }
            getIntersectionObserver().observe(el);
        }
    }
}

function formatDuration(contentWidth) {
    return `${Math.max(1, contentWidth / SCROLL_SPEED).toFixed(2)}s`;
}

export function applyScrollingEffect(context, element, text) {
    const { scrolling_effect: scrollingEffect = true } = context.config;

    if (!scrollingEffect) {
        applyNonScrollingStyle(element, text);
        if (resizeObs) try { resizeObs.unobserve(element); } catch (e) {}
        if (intersectionObs) try { intersectionObs.unobserve(element); } catch (e) {}
        scrollState.delete(element);
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

    scrollState.set(element, {
        text,
        animated: false,
        span: null,
    });

    element.innerHTML = text;
    element.style.cssText = '';

    getResizeObserver().observe(element);
    pending.add(element);
    scheduleFlush();
}

function applyNonScrollingStyle(element, text) {
    element.innerHTML = text;
    element.previousText = text;
    Object.assign(element.style, {
        whiteSpace: 'normal',
        display: '-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    });
}

export function cleanupScrollingEffects(root) {
    try {
        const elements = root.querySelectorAll('*');
        for (const el of elements) {
            if (!scrollState.has(el) && el.previousText === undefined) continue;

            if (resizeObs) try { resizeObs.unobserve(el); } catch (e) {}
            if (intersectionObs) try { intersectionObs.unobserve(el); } catch (e) {}

            const state = scrollState.get(el);
            if (state) {
                if (el.getAttribute('data-animated') === 'true') {
                    el.removeAttribute('data-animated');
                    el.innerHTML = state.text || el.textContent || '';
                }
                scrollState.delete(el);
            }

            delete el.previousText;
        }
    } catch (e) {}
}

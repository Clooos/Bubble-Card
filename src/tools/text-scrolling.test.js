import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

// The measurement pipeline is pure geometry plus three observers, so the whole
// module can be driven from fakes: no layout engine is needed, only control over
// when a frame runs and when an observer fires.

let frames = [];
let resizeObservers = [];
let intersectionObservers = [];
let fontListeners = [];
let fontsReady;

class FakeResizeObserver {
    constructor(callback) {
        this.callback = callback;
        this.targets = new Set();
        resizeObservers.push(this);
    }
    observe(target) { this.targets.add(target); }
    unobserve(target) { this.targets.delete(target); }
    disconnect() { this.targets.clear(); }
    fire(targets = [...this.targets]) {
        this.callback(targets.map((target) => ({ target })), this);
    }
}

class FakeIntersectionObserver {
    constructor(callback) {
        this.callback = callback;
        this.targets = new Set();
        intersectionObservers.push(this);
    }
    observe(target) { this.targets.add(target); }
    unobserve(target) { this.targets.delete(target); }
    disconnect() { this.targets.clear(); }
    fire(target, isIntersecting) {
        this.callback([{ target, isIntersecting }], this);
    }
}

function runFrame() {
    const due = frames;
    frames = [];
    for (const cb of due) cb(0);
}

// A text element the module can measure: `contentWidth` is what the text renders
// at, `boxWidth` is the element's own box. The two move independently, which is
// exactly what a late webfont does.
function createElement({ connected = true, boxWidth = 100, contentWidth = 100 } = {}) {
    const attributes = new Map();
    const span = {
        isConnected: true,
        innerHTML: '',
        style: {},
        getBoundingClientRect: () => ({ width: element.contentWidth * 2 }),
    };
    const element = {
        isConnected: connected,
        innerHTML: '',
        previousText: undefined,
        style: { cssText: '' },
        boxWidth,
        contentWidth,
        span,
        getAttribute: (name) => (attributes.has(name) ? attributes.get(name) : null),
        setAttribute: (name, value) => attributes.set(name, String(value)),
        removeAttribute: (name) => attributes.delete(name),
        querySelector: () => span,
        getBoundingClientRect: () => ({ width: element.boxWidth }),
        get scrollWidth() { return Math.round(Math.max(element.boxWidth, element.contentWidth)); },
        get clientWidth() { return Math.round(element.boxWidth); },
    };
    return element;
}

const isAnimated = (element) => element.getAttribute('data-animated') === 'true';

// The lifecycle sweeps look the module's own elements up by marker attribute.
const rootOf = (...elements) => ({
    querySelectorAll: (selector) => (
        selector === '[data-bubble-scroll]'
            ? elements.filter((el) => el.getAttribute('data-bubble-scroll') !== null)
            : elements
    ),
});

async function loadModule() {
    jest.resetModules();
    frames = [];
    resizeObservers = [];
    intersectionObservers = [];
    fontListeners = [];

    let resolveFonts;
    fontsReady = new Promise((resolve) => { resolveFonts = resolve; });
    fontsReady.resolveNow = resolveFonts;

    globalThis.requestAnimationFrame = (cb) => { frames.push(cb); return frames.length; };
    globalThis.ResizeObserver = FakeResizeObserver;
    globalThis.IntersectionObserver = FakeIntersectionObserver;
    globalThis.document = {
        fonts: {
            ready: fontsReady,
            addEventListener: (type, listener) => fontListeners.push({ type, listener }),
        },
    };

    return import('./text-scrolling.js');
}

const context = { config: { scrolling_effect: true } };

afterEach(() => {
    delete globalThis.requestAnimationFrame;
    delete globalThis.ResizeObserver;
    delete globalThis.IntersectionObserver;
    delete globalThis.document;
});

describe('text scrolling activation', () => {
    test('animates text that overflows its element', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();

        expect(isAnimated(element)).toBe(true);
    });

    test('leaves text that fits alone', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 300, contentWidth: 120 });

        applyScrollingEffect(context, element, 'short');
        runFrame();

        expect(isAnimated(element)).toBe(false);
        expect(element.innerHTML).toBe('short');
    });

    // Home Assistant builds a card off-document and attaches it afterwards, so the
    // first measurement can land while the element has no box at all. That must not
    // be read as "this element is gone".
    test('keeps measuring an element that is not attached yet', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ connected: false, boxWidth: 0, contentWidth: 0 });
        applyScrollingEffect(context, element, 'a very long name');

        runFrame();
        const [resizeObserver] = resizeObservers;
        resizeObserver.fire([element]);
        runFrame();

        expect(isAnimated(element)).toBe(false);
        expect(resizeObserver.targets.has(element)).toBe(true);

        // Attached and laid out: the observer fires with a real box and the effect
        // has to come up on its own, with no further call from the card.
        element.isConnected = true;
        element.boxWidth = 100;
        element.contentWidth = 300;
        resizeObserver.fire([element]);
        runFrame();

        expect(isAnimated(element)).toBe(true);
    });

    // A webfont swapping in changes how wide the text renders without changing the
    // element's box, so ResizeObserver never fires for it.
    test('re-measures every tracked element once a font finishes loading', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 200, contentWidth: 150 });

        applyScrollingEffect(context, element, 'Salon television');
        runFrame();
        expect(isAnimated(element)).toBe(false);

        // The real font is wider than the fallback the first measurement saw. The
        // element's own box did not move, so the resize observer stays silent and
        // no frame of its own is ever scheduled.
        element.contentWidth = 400;
        runFrame();
        expect(isAnimated(element)).toBe(false);

        const done = fontListeners.find((entry) => entry.type === 'loadingdone');
        expect(done).toBeDefined();
        done.listener();
        runFrame();

        expect(isAnimated(element)).toBe(true);
    });

    test('re-measures once the initial font load settles', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 200, contentWidth: 150 });

        applyScrollingEffect(context, element, 'Salon television');
        runFrame();
        expect(isAnimated(element)).toBe(false);

        element.contentWidth = 400;
        fontsReady.resolveNow();
        await fontsReady;
        await Promise.resolve();
        runFrame();

        expect(isAnimated(element)).toBe(true);
    });

    // changeName then changeState, or the media title then the artist, run in one
    // task. The second one used to have its text write deferred to the frame, so
    // it was measured against the string it was replacing.
    test('measures the text it just wrote when two elements update in one task', async () => {
        const { applyScrollingEffect } = await loadModule();
        const first = createElement({ boxWidth: 200, contentWidth: 100 });
        const second = createElement({ boxWidth: 200, contentWidth: 100 });

        applyScrollingEffect(context, first, 'short');
        applyScrollingEffect(context, second, 'short');
        runFrame();
        expect(isAnimated(first)).toBe(false);
        expect(isAnimated(second)).toBe(false);

        first.contentWidth = 600;
        second.contentWidth = 600;
        applyScrollingEffect(context, first, 'a much longer name');
        applyScrollingEffect(context, second, 'a much longer state');
        runFrame();

        expect(isAnimated(first)).toBe(true);
        expect(isAnimated(second)).toBe(true);
    });

    // Callers used to empty the element themselves and return, which left the
    // module holding an animated state whose next measurement put the old label
    // back into an element the card had deliberately cleared.
    test('clears an element asked to show no text and stops tracking it', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();
        expect(isAnimated(element)).toBe(true);

        applyScrollingEffect(context, element, '');
        expect(element.innerHTML).toBe('');
        expect(isAnimated(element)).toBe(false);
        expect(resizeObservers[0].targets.has(element)).toBe(false);

        element.boxWidth = 100;
        element.contentWidth = 300;
        runFrame();
        expect(element.innerHTML).toBe('');
    });

    test('honours a per-caller scrolling_effect override over the card config', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });

        applyScrollingEffect(context, element, 'a very long name', false);
        runFrame();

        expect(isAnimated(element)).toBe(false);
        expect(element.style.display).toBe('-webkit-box');
    });

    test('drops an element that leaves the document after being measured', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();

        const [resizeObserver] = resizeObservers;
        element.isConnected = false;
        resizeObserver.fire([element]);

        expect(resizeObserver.targets.has(element)).toBe(false);
    });
});

describe('text scrolling weight', () => {
    // A composited layer only pays for itself while the animation runs, and a
    // dashboard holds far more marquees off screen than on it.
    test('holds a compositing hint only while the marquee is on screen', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();

        const [intersectionObserver] = intersectionObservers;
        intersectionObserver.fire(element, true);
        expect(element.span.style.animationPlayState).toBe('running');
        expect(element.span.style.willChange).toBe('transform');

        intersectionObserver.fire(element, false);
        expect(element.span.style.animationPlayState).toBe('paused');
        expect(element.span.style.willChange).toBe('auto');
    });

    test('rewrites the animation duration only when it actually changes', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();

        const first = element.span.style.animationDuration;
        element.span.style.animationDuration = 'sentinel';

        const [resizeObserver] = resizeObservers;
        resizeObserver.fire([element]);
        runFrame();

        expect(element.span.style.animationDuration).toBe('sentinel');

        element.contentWidth = 900;
        resizeObserver.fire([element]);
        runFrame();

        expect(element.span.style.animationDuration).not.toBe('sentinel');
        expect(element.span.style.animationDuration).not.toBe(first);
    });
});

describe('disconnect and reconnect', () => {
    test('releases the observers and pauses the marquee on the way out', async () => {
        const { applyScrollingEffect, cleanupScrollingEffects } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();
        expect(isAnimated(element)).toBe(true);

        cleanupScrollingEffects(rootOf(element));

        expect(resizeObservers[0].targets.has(element)).toBe(false);
        expect(intersectionObservers[0].targets.has(element)).toBe(false);
        expect(element.span.style.animationPlayState).toBe('paused');
        expect(element.span.style.willChange).toBe('auto');
    });

    // Home Assistant re-parents a whole view on a sidebar toggle or a breakpoint
    // change. Only changeName re-registers unconditionally, so the state line and
    // the sub-buttons have to come back on their own.
    test('comes back scrolling with no call from the card', async () => {
        const { applyScrollingEffect, cleanupScrollingEffects, resumeScrollingEffects } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();

        cleanupScrollingEffects(rootOf(element));
        resumeScrollingEffects(rootOf(element));
        runFrame();

        expect(isAnimated(element)).toBe(true);
        expect(resizeObservers[0].targets.has(element)).toBe(true);
        expect(intersectionObservers[0].targets.has(element)).toBe(true);
    });

    test('re-measures on the way back in, so a resize missed while away still lands', async () => {
        const { applyScrollingEffect, cleanupScrollingEffects, resumeScrollingEffects } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();
        expect(isAnimated(element)).toBe(true);

        cleanupScrollingEffects(rootOf(element));
        // The view came back wider than it left.
        element.boxWidth = 800;
        resumeScrollingEffects(rootOf(element));
        runFrame();

        expect(isAnimated(element)).toBe(false);
    });

    test('leaves elements it does not own alone', async () => {
        const { cleanupScrollingEffects, resumeScrollingEffects } = await loadModule();
        const stranger = createElement();
        stranger.innerHTML = 'not mine';

        cleanupScrollingEffects(rootOf(stranger));
        resumeScrollingEffects(rootOf(stranger));

        expect(stranger.innerHTML).toBe('not mine');
        expect(resizeObservers.length).toBe(0);
    });
});

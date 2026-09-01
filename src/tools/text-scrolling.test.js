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
        this.callback(targets.map((target) => ({
            target,
            borderBoxSize: [{ inlineSize: target.boxWidth }],
            contentRect: { width: target.boxWidth },
        })), this);
    }
}

class FakeIntersectionObserver {
    constructor(callback, options) {
        this.callback = callback;
        this.options = options;
        this.targets = new Set();
        intersectionObservers.push(this);
    }
    // observe() is specified to report on the target it is given, whether or not
    // anything moves afterwards, and holding a measurement back until the element
    // is on its way in relies on exactly that. Delivered synchronously here where
    // the browser queues a task, which is close enough for a logic test.
    observe(target) {
        this.targets.add(target);
        this.callback([{ target, isIntersecting: target.visible !== false }], this);
    }
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

// What " | " with its margins renders at, measured in the browser. The marquee
// carries one per copy of the text, so a scrolling element always measures wider
// than the text on its own.
const SEPARATOR_WIDTH = 18.57;

// The module measures the text through one Range it keeps for the whole session,
// so a single fake document backs every element of a test: whatever was selected
// last is what the rect describes.
let fakeDocument;
function createFakeDocument() {
    let selected = null;
    const range = {
        selectNodeContents: (node) => { selected = node; },
        getBoundingClientRect: () => ({ width: selected?.contentWidth ?? 0 }),
    };
    return { documentElement: { contentWidth: 0 }, createRange: () => range };
}

// A text element the module can measure: `contentWidth` is what the text renders
// at, `boxWidth` is the element's own box. The two move independently, which is
// exactly what a late webfont does. `visible` is what the near observer reports,
// and `rangeless` takes the float measurement away so the integer fallback runs.
function createElement({ connected = true, boxWidth = 100, contentWidth = 100, visible = true, rangeless = false } = {}) {
    const attributes = new Map();
    const span = {
        isConnected: true,
        innerHTML: '',
        style: {},
        getBoundingClientRect: () => ({ width: (element.contentWidth + SEPARATOR_WIDTH) * 2 }),
    };
    const element = {
        isConnected: connected,
        innerHTML: '',
        previousText: undefined,
        style: { cssText: '' },
        boxWidth,
        contentWidth,
        visible,
        reads: 0,
        ownerDocument: rangeless ? undefined : fakeDocument,
        span,
        getAttribute: (name) => (attributes.has(name) ? attributes.get(name) : null),
        setAttribute: (name, value) => attributes.set(name, String(value)),
        removeAttribute: (name) => attributes.delete(name),
        querySelector: () => span,
        getBoundingClientRect: () => { element.reads++; return { width: element.boxWidth }; },
        get scrollWidth() { return Math.round(Math.max(element.boxWidth, element.contentWidth)); },
        get clientWidth() { return Math.round(element.boxWidth); },
    };
    return element;
}

const isAnimated = (element) => element.getAttribute('data-animated') === 'true';

// Two observers share the class: the one carrying a rootMargin decides what is
// worth measuring, the bare one drives the marquee's play state.
const nearObserver = () => intersectionObservers.find((o) => o.options?.rootMargin);
const animObserver = () => intersectionObservers.find((o) => !o.options?.rootMargin);

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
    fakeDocument = createFakeDocument();

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

        const intersectionObserver = animObserver();
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
        const [resizeObserver] = resizeObservers;

        // The first pass measures the bare text and every later one measures the
        // marquee, which carries a separator too, so let that one settle first.
        element.boxWidth = 90;
        resizeObserver.fire([element]);
        runFrame();

        element.span.style.animationDuration = 'sentinel';
        element.boxWidth = 80;
        resizeObserver.fire([element]);
        runFrame();

        expect(element.span.style.animationDuration).toBe('sentinel');

        element.boxWidth = 120;
        element.contentWidth = 900;
        resizeObserver.fire([element]);
        runFrame();

        expect(element.span.style.animationDuration).not.toBe('sentinel');
        expect(element.span.style.animationDuration).not.toBe(first);
    });

    // The observer reports once the moment an element is observed, and again for
    // every height change, and neither can move a horizontal overflow. Following
    // those doubled the work of every first pass: 25 elements measured 50 times
    // on one pop-up opening, the second half of it paying a second forced layout
    // for an answer that could not have changed.
    test('does not measure again when a resize left the width alone', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 300, contentWidth: 120 });

        applyScrollingEffect(context, element, 'short');
        runFrame();

        const [resizeObserver] = resizeObservers;
        const before = element.reads;
        resizeObserver.fire([element]);
        runFrame();

        expect(element.reads).toBe(before);
    });

    test('measures again when a resize did change the width', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 300, contentWidth: 120 });

        applyScrollingEffect(context, element, 'short');
        runFrame();
        expect(isAnimated(element)).toBe(false);

        const [resizeObserver] = resizeObservers;
        element.boxWidth = 100;
        resizeObserver.fire([element]);
        runFrame();

        expect(isAnimated(element)).toBe(true);
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
        expect(animObserver().targets.has(element)).toBe(false);
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
        expect(animObserver().targets.has(element)).toBe(true);
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

// style-processor.js sets templateDetected on .bubble-state and .bubble-name when
// a style template assigns to them. Its only reader used to be applyScrollingEffect,
// and the April 2025 rewrite dropped it: the marquee then rebuilt itself out of the
// card's own text and threw the template's content away.
describe('elements a style template has taken over', () => {
    test('never writes into one that is already claimed', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });
        element.templateDetected = true;
        element.innerHTML = 'written by the template';

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();

        expect(element.innerHTML).toBe('written by the template');
        expect(isAnimated(element)).toBe(false);
        expect(resizeObservers.length).toBe(0);
    });

    // The card sets its name and its state before it evaluates its styles, so the
    // very first measurement is already queued when the template claims the
    // element. That flush is the one that used to overwrite it.
    test('hands back one claimed after the measurement was queued', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });

        applyScrollingEffect(context, element, 'a very long name');
        element.templateDetected = true;
        element.innerHTML = 'written by the template';
        runFrame();

        expect(element.innerHTML).toBe('written by the template');
        expect(isAnimated(element)).toBe(false);
        expect(resizeObservers[0].targets.has(element)).toBe(false);
    });

    // A card narrowing on a sidebar toggle or a breakpoint change measures again
    // with no update from the card, so the template gets no chance to write back.
    test('does not rebuild a marquee over one when the card is resized', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 400, contentWidth: 300 });

        applyScrollingEffect(context, element, 'Allume 75%');
        runFrame();
        expect(isAnimated(element)).toBe(false);

        element.templateDetected = true;
        element.innerHTML = 'written by the template';

        const [resizeObserver] = resizeObservers;
        element.boxWidth = 100;
        resizeObserver.fire([element]);
        runFrame();

        expect(element.innerHTML).toBe('written by the template');
        expect(isAnimated(element)).toBe(false);
    });

    test('does not put the card text back over one when the state changes', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });

        applyScrollingEffect(context, element, 'Allume 75% • Temperature 21.5 C');
        runFrame();
        expect(isAnimated(element)).toBe(true);

        element.templateDetected = true;
        element.innerHTML = 'written by the template';

        applyScrollingEffect(context, element, 'Eteint 0% • Temperature 19.0 C');
        runFrame();

        expect(element.innerHTML).toBe('written by the template');
    });

    // The non-scrolling mode wrapped the line onto two, and a template-fed line
    // has no reason to lose that just because its text is off limits.
    test('still applies the non-scrolling layout without touching the text', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300 });
        element.templateDetected = true;
        element.innerHTML = 'written by the template';

        applyScrollingEffect(context, element, 'a very long name', false);
        runFrame();

        expect(element.innerHTML).toBe('written by the template');
        expect(element.style.display).toBe('-webkit-box');
        expect(element.style.WebkitLineClamp).toBe('2');
    });
});

// scrollWidth and clientWidth are both rounded to whole pixels, so an element
// overflowing by less than about three of them read as fitting and the text sat
// clipped mid-character with no marquee (#2462). The figures below come from the
// repro dashboard: the name renders at 237.94px and the cards step down by
// 1.17px each, so two of them landed inside the blind band.
describe('deciding on a sub-pixel overflow', () => {
    const TEXT_WIDTH = 237.94;

    test('leaves text that fills its element to the last sub-pixel alone', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: TEXT_WIDTH, contentWidth: TEXT_WIDTH });

        applyScrollingEffect(context, element, 'Temperature du salon (exterieur)');
        runFrame();

        expect(isAnimated(element)).toBe(false);
    });

    test('animates text overflowing by barely more than a pixel', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 236.77, contentWidth: TEXT_WIDTH });

        applyScrollingEffect(context, element, 'Temperature du salon (exterieur)');
        runFrame();

        expect(isAnimated(element)).toBe(true);
    });

    test('animates text overflowing by two pixels, where the old band ended', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 235.61, contentWidth: TEXT_WIDTH });

        applyScrollingEffect(context, element, 'Temperature du salon (exterieur)');
        runFrame();

        expect(isAnimated(element)).toBe(true);
    });

    // Two float reads of the same layout still disagree in the last digits, and a
    // marquee that only travels a fraction of a pixel is worse than the fraction
    // it would reveal.
    test('leaves an overflow too small to see alone', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: TEXT_WIDTH - 0.3, contentWidth: TEXT_WIDTH });

        applyScrollingEffect(context, element, 'Temperature du salon (exterieur)');
        runFrame();

        expect(isAnimated(element)).toBe(false);
    });

    // A scrolling element measures one text plus one separator, so it reads wider
    // than the text on its own. That gap is what stops an element sitting right on
    // the edge from flipping between the two modes once the tolerance no longer
    // covers it, and it has to hold at the exact width where the marquee started.
    test('does not flip back the moment the box grows to fit the text again', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 236.77, contentWidth: TEXT_WIDTH });

        applyScrollingEffect(context, element, 'Temperature du salon (exterieur)');
        runFrame();
        expect(isAnimated(element)).toBe(true);

        const [resizeObserver] = resizeObservers;
        for (const width of [TEXT_WIDTH, TEXT_WIDTH + 1, TEXT_WIDTH + 8]) {
            element.boxWidth = width;
            resizeObserver.fire([element]);
            runFrame();
            expect(isAnimated(element)).toBe(true);
        }

        // Wide enough to hold the text and the separator: now it may stop.
        element.boxWidth = TEXT_WIDTH + SEPARATOR_WIDTH + 1;
        resizeObserver.fire([element]);
        runFrame();
        expect(isAnimated(element)).toBe(false);
    });

    // Without a Range the integer readings are all there is, and they are still
    // worth acting on: the tolerance is what changed, not the fallback.
    test('falls back to the integer overflow when no Range can be made', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300, rangeless: true });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();

        expect(isAnimated(element)).toBe(true);
    });
});

// Measuring costs a forced layout, and that layout is the whole price of a flush.
// A pop-up parks its shell a full viewport below the fold while it builds, so on
// the real dashboard every one of the 25 elements of a 23-card pop-up was
// measured while nobody could see any of them.
describe('holding measurements back until they matter', () => {
    test('does not measure an element the near observer puts off screen', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300, visible: false });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();

        expect(element.reads).toBe(0);
        expect(isAnimated(element)).toBe(false);
    });

    // Only the decision waits. A held element still shows the right string, so
    // nothing the card asked for is ever left unwritten.
    test('still writes the text of an element it is holding back', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300, visible: false });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();
        expect(element.innerHTML).toBe('a very long name');

        applyScrollingEffect(context, element, 'a different long name');
        runFrame();
        expect(element.innerHTML).toBe('a different long name');
    });

    test('measures it as soon as it comes into view', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 100, contentWidth: 300, visible: false });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();
        expect(isAnimated(element)).toBe(false);

        nearObserver().fire(element, true);
        runFrame();

        expect(isAnimated(element)).toBe(true);
    });

    // A resize or a font load while the element is away must not be lost: it is
    // held, not dropped, and the near observer hands it back with the work still
    // owed.
    test('replays a resize it held back once the element comes into view', async () => {
        const { applyScrollingEffect } = await loadModule();
        const element = createElement({ boxWidth: 400, contentWidth: 300 });

        applyScrollingEffect(context, element, 'a very long name');
        runFrame();
        expect(isAnimated(element)).toBe(false);

        nearObserver().fire(element, false);
        const [resizeObserver] = resizeObservers;
        element.boxWidth = 100;
        resizeObserver.fire([element]);
        runFrame();
        expect(isAnimated(element)).toBe(false);

        nearObserver().fire(element, true);
        runFrame();
        expect(isAnimated(element)).toBe(true);
    });

    test('holds back the ones that come back below the fold on a reconnect', async () => {
        const { applyScrollingEffect, cleanupScrollingEffects, resumeScrollingEffects } = await loadModule();
        const onScreen = createElement({ boxWidth: 100, contentWidth: 300 });
        const belowFold = createElement({ boxWidth: 100, contentWidth: 300, visible: false });

        applyScrollingEffect(context, onScreen, 'a very long name');
        applyScrollingEffect(context, belowFold, 'a very long state');
        runFrame();

        cleanupScrollingEffects(rootOf(onScreen, belowFold));
        onScreen.reads = 0;
        belowFold.reads = 0;
        resumeScrollingEffects(rootOf(onScreen, belowFold));
        runFrame();

        expect(onScreen.reads).toBeGreaterThan(0);
        expect(belowFold.reads).toBe(0);
    });
});

import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

const { configurePopupSlideToClose, isBottomSheetLayout } = await import('./slide-to-close.js');

function createClassList(initial = []) {
    const classes = new Set(initial);
    return {
        add: (...names) => names.forEach((name) => classes.add(name)),
        remove: (...names) => names.forEach((name) => classes.delete(name)),
        contains: (name) => classes.has(name),
    };
}

// Records declarations the way a browser does: a value plus its priority, and
// an assignment or a removeProperty drops the whole declaration.
function createStyle() {
    const declarations = new Map();

    const style = {
        setProperty: jest.fn((property, value, priority = '') => {
            declarations.set(property, { value, priority });
        }),
        removeProperty: jest.fn((property) => {
            declarations.delete(property);
        }),
        get transform() {
            return declarations.get('transform')?.value ?? '';
        },
        set transform(value) {
            if (value === '') {
                declarations.delete('transform');
                return;
            }
            declarations.set('transform', { value, priority: '' });
        },
        get transition() {
            return declarations.get('transition')?.value ?? '';
        },
        set transition(value) {
            if (value === '') {
                declarations.delete('transition');
                return;
            }
            declarations.set('transition', { value, priority: '' });
        },
        priorityOf: (property) => declarations.get(property)?.priority ?? null,
    };

    return style;
}

function createNode({
    localName = 'div',
    classes = [],
    scrollTop = 0,
    scrollHeight = 0,
    clientHeight = 0,
    overflowY = 'visible',
    scrollLeft = 0,
    scrollWidth = 0,
    clientWidth = 0,
    overflowX = 'visible',
} = {}) {
    return {
        nodeType: 1,
        localName,
        classList: createClassList(classes),
        scrollTop,
        scrollHeight,
        clientHeight,
        overflowY,
        scrollLeft,
        scrollWidth,
        clientWidth,
        overflowX,
    };
}

// A box a finger can scroll: taller content than box, room left below, and an
// overflow the browser actually pans.
function createScroller({ scrollTop = 0, height = 400, content = 1200, overflowY = 'auto' } = {}) {
    return createNode({ scrollTop, clientHeight: height, scrollHeight: content, overflowY });
}

let clock;
let frames;
let documentListeners;
let realDateNow;
let dialogViewportMatches;

function harness({
    classes = ['bubble-pop-up', 'is-standalone-pop-up', 'is-popup-opened'],
    config = {},
    height = 800,
    matches = false,
} = {}) {
    const popUp = {
        classList: createClassList(classes),
        style: createStyle(),
        offsetHeight: height,
    };

    dialogViewportMatches = matches;

    const context = { config, popUp };
    const closePopup = jest.fn();
    configurePopupSlideToClose(context, closePopup);

    return { context, popUp, closePopup };
}

function touchEvent(points, { path = [], cancelable = true } = {}) {
    const touches = points.map(({ x = 100, y }) => ({ clientX: x, clientY: y }));
    return {
        touches,
        cancelable,
        composedPath: () => path,
        preventDefault: jest.fn(),
    };
}

function dispatchMove(event) {
    (documentListeners.touchmove ?? []).forEach((entry) => entry.handler(event));
}

function dispatchEnd() {
    (documentListeners.touchend ?? []).forEach((entry) => entry.handler({}));
}

// One drag, expressed the way a finger produces it: a start, evenly spaced
// moves, then a lift. Returns every move event so a test can read what the
// gesture did with them.
function drag(context, { from = 300, to = 460, x = 100, steps = 5, stepMs = 16, restMs = 0, path = [] } = {}) {
    context.handleTouchStart(touchEvent([{ x, y: from }], { path }));

    const moveEvents = [];
    for (let step = 1; step <= steps; step += 1) {
        clock += stepMs;
        const y = from + Math.round(((to - from) * step) / steps);
        const event = touchEvent([{ x, y }]);
        moveEvents.push(event);
        dispatchMove(event);
    }

    frames.splice(0).forEach((frame) => frame());
    clock += restMs;
    dispatchEnd();

    return moveEvents;
}

beforeEach(() => {
    clock = 1_000_000;
    frames = [];
    documentListeners = {};
    dialogViewportMatches = false;

    // One list for the whole page, so the module keeps the first one it is
    // given: the test moves the viewport by moving `matches`, not the list.
    global.window = {
        matchMedia: jest.fn(() => ({ get matches() { return dialogViewportMatches; } })),
    };

    realDateNow = Date.now;
    Date.now = () => clock;

    const phaseOf = (options) => ((options === true || options?.capture) ? 'capture' : 'bubble');

    global.document = {
        addEventListener: jest.fn((type, handler, options) => {
            (documentListeners[type] ??= []).push({ handler, phase: phaseOf(options), options });
        }),
        removeEventListener: jest.fn((type, handler, options) => {
            const phase = phaseOf(options);
            documentListeners[type] = (documentListeners[type] ?? [])
                .filter((entry) => entry.handler !== handler || entry.phase !== phase);
        }),
    };

    global.getComputedStyle = jest.fn((node) => ({
        overflowY: node.overflowY ?? 'visible',
        overflowX: node.overflowX ?? 'visible',
    }));

    global.requestAnimationFrame = jest.fn((callback) => {
        frames.push(callback);
        return frames.length;
    });
    global.cancelAnimationFrame = jest.fn((id) => {
        frames[id - 1] = () => {};
    });
});

afterEach(() => {
    Date.now = realDateNow;
});

describe('slide to close', () => {
    test('cancels every move of a downward drag so nothing behind the pop-up scrolls', () => {
        const { context } = harness();

        const moveEvents = drag(context, { from: 300, to: 460 });

        // The whole point of #2594: a passive listener cannot do this, and the
        // browser then hands the gesture to the dashboard's own scroller.
        expect(moveEvents.every((event) => event.preventDefault.mock.calls.length === 1)).toBe(true);
    });

    test('costs one listener at rest and adds its pair only for the length of a drag', () => {
        const { context } = harness();

        expect(documentListeners.touchmove ?? []).toHaveLength(0);

        context.handleTouchStart(touchEvent([{ y: 300 }]));

        expect(documentListeners.touchmove).toHaveLength(1);
        expect(documentListeners.touchend).toHaveLength(1);
        expect(documentListeners.touchcancel).toHaveLength(1);
        expect(document.addEventListener).toHaveBeenCalledWith('touchmove', expect.any(Function), { passive: false });

        // The end runs ahead of any card that stops its own touchend, so a drag
        // can never be left running with the shell parked mid-screen.
        expect(documentListeners.touchend[0].phase).toBe('capture');
        expect(documentListeners.touchcancel[0].phase).toBe('capture');
        expect(documentListeners.touchmove[0].phase).toBe('bubble');

        dispatchEnd();

        expect(documentListeners.touchmove).toHaveLength(0);
        expect(documentListeners.touchend).toHaveLength(0);
        expect(documentListeners.touchcancel).toHaveLength(0);
    });

    test('follows the finger, and outranks the mode blocks while it does', () => {
        const { context, popUp } = harness();

        context.handleTouchStart(touchEvent([{ y: 300 }]));
        clock += 16;
        dispatchMove(touchEvent([{ y: 380 }]));
        frames.splice(0).forEach((frame) => frame());

        expect(popUp.style.transform).toBe('translate3d(0, 80px, 0)');
        expect(popUp.style.priorityOf('transform')).toBe('important');
        expect(popUp.style.transition).toBe('none');
        expect(popUp.style.priorityOf('transition')).toBe('important');
    });

    test('paints one frame however many moves arrive inside it', () => {
        const { context } = harness();

        context.handleTouchStart(touchEvent([{ y: 300 }]));
        for (let step = 1; step <= 6; step += 1) {
            clock += 2;
            dispatchMove(touchEvent([{ y: 300 + step * 20 }]));
        }

        expect(global.requestAnimationFrame).toHaveBeenCalledTimes(1);
    });

    test('snaps back and stays open when the drag is too short and too slow', () => {
        const { context, popUp, closePopup } = harness({ height: 800 });

        // 120px of an 800px sheet, at rest for long enough not to count as a flick.
        drag(context, { from: 300, to: 420, steps: 6, stepMs: 40, restMs: 200 });

        expect(closePopup).not.toHaveBeenCalled();
        expect(popUp.style.transform).toBe('');
        expect(popUp.style.transition).toBe('');
    });

    test('closes past half the sheet, and hands the shell over already on its way out', () => {
        const { context, popUp, closePopup } = harness({ height: 800 });

        drag(context, { from: 100, to: 620, steps: 8, stepMs: 40, restMs: 200 });

        expect(closePopup).toHaveBeenCalledTimes(1);
        expect(popUp.style.transform).toBe('translate3d(0, 100%, 0)');
        // Restored before the close so the shell's own transition plays it out.
        expect(popUp.style.transition).toBe('');
    });

    test('a quick downward flick closes well before the distance', () => {
        const { context, closePopup } = harness({ height: 800 });

        // 100px in 40ms is 2.5px/ms, far above the 0.5 threshold.
        drag(context, { from: 300, to: 400, steps: 4, stepMs: 10 });

        expect(closePopup).toHaveBeenCalledTimes(1);
    });

    test('a flick that ended a while before the lift is judged on distance, not speed', () => {
        const { context, closePopup } = harness({ height: 800 });

        drag(context, { from: 300, to: 400, steps: 4, stepMs: 10, restMs: 200 });

        expect(closePopup).not.toHaveBeenCalled();
    });

    test('the distance to close is half the pop-up, whatever it measures', () => {
        const short = harness({ height: 300 });
        drag(short.context, { from: 100, to: 260, steps: 8, stepMs: 40, restMs: 200 });
        expect(short.closePopup).toHaveBeenCalledTimes(1);

        const tall = harness({ height: 1200 });
        drag(tall.context, { from: 100, to: 400, steps: 8, stepMs: 40, restMs: 200 });
        expect(tall.closePopup).not.toHaveBeenCalled();
    });

    test('measures the shell once per drag, and not at all for a tap', () => {
        const { context, popUp } = harness();
        let reads = 0;
        Object.defineProperty(popUp, 'offsetHeight', { get: () => { reads += 1; return 800; } });

        context.handleTouchStart(touchEvent([{ y: 300 }]));
        dispatchEnd();
        expect(reads).toBe(0);

        drag(context, { from: 100, to: 400, steps: 8 });
        expect(reads).toBe(1);
    });
});

describe('gestures the pop-up must not take', () => {
    test('never lifts the shell above where the drag started', () => {
        const { context, popUp, closePopup } = harness({ height: 800 });

        context.handleTouchStart(touchEvent([{ y: 400 }]));
        clock += 16;
        dispatchMove(touchEvent([{ y: 500 }]));
        frames.splice(0).forEach((frame) => frame());
        expect(popUp.style.transform).toBe('translate3d(0, 100px, 0)');

        // Back up past the starting point. A negative offset would pull the
        // shell off the bottom of the screen and show the pop-up cut short.
        clock += 16;
        const back = touchEvent([{ y: 260 }]);
        dispatchMove(back);
        frames.splice(0).forEach((frame) => frame());

        expect(back.preventDefault).toHaveBeenCalled();
        expect(popUp.style.transform).toBe('translate3d(0, 0px, 0)');

        clock += 200;
        dispatchEnd();
        expect(closePopup).not.toHaveBeenCalled();
        expect(popUp.style.transform).toBe('');
    });

    test('a sideways swipe is handed back untouched, so a tab strip keeps it', () => {
        const { context, popUp, closePopup } = harness();

        context.handleTouchStart(touchEvent([{ x: 100, y: 300 }]));
        clock += 16;
        const sideways = touchEvent([{ x: 220, y: 306 }]);
        dispatchMove(sideways);

        expect(sideways.preventDefault).not.toHaveBeenCalled();
        expect(popUp.style.transform).toBe('');
        expect(documentListeners.touchmove).toHaveLength(0);

        dispatchEnd();
        expect(closePopup).not.toHaveBeenCalled();
    });

    test('hands a sideways first move back before it can cancel anything', () => {
        const { context } = harness();

        context.handleTouchStart(touchEvent([{ x: 100, y: 300 }]));
        clock += 8;
        // Four across, three down. A carousel starts like this, and it has to
        // get the move uncancelled or it never scrolls.
        const first = touchEvent([{ x: 104, y: 303 }]);
        dispatchMove(first);

        expect(first.preventDefault).not.toHaveBeenCalled();
        expect(documentListeners.touchmove).toHaveLength(0);
    });

    test('reads nothing from a move that has not moved', () => {
        const { context } = harness();

        context.handleTouchStart(touchEvent([{ x: 100, y: 300 }]));
        clock += 8;
        const still = touchEvent([{ x: 100, y: 300 }]);
        dispatchMove(still);

        // No axis in it either way, so the touch stays armed rather than being
        // handed over on a coin toss.
        expect(still.preventDefault).not.toHaveBeenCalled();
        expect(documentListeners.touchmove).toHaveLength(1);
    });

    test('an upward drag is handed back when the path cannot be read at all', () => {
        const { context, popUp } = harness();

        context.handleTouchStart(touchEvent([{ y: 400 }]));
        clock += 16;
        // No composed path, so nothing is ruled out and the gesture goes back
        // exactly the way it did before any of this was here.
        const upward = touchEvent([{ y: 320 }]);
        dispatchMove(upward);

        expect(upward.preventDefault).not.toHaveBeenCalled();
        expect(popUp.style.transform).toBe('');
        expect(documentListeners.touchmove).toHaveLength(0);
    });

    test('an upward drag is handed back to a scroller that still has room', () => {
        const { context, popUp } = harness();
        const path = [createNode(), createScroller({ scrollTop: 0 }), popUp];

        context.handleTouchStart(touchEvent([{ y: 400 }], { path }));
        clock += 16;
        const upward = touchEvent([{ y: 320 }], { path });
        dispatchMove(upward);

        expect(upward.preventDefault).not.toHaveBeenCalled();
        expect(popUp.style.transform).toBe('');
        expect(documentListeners.touchmove).toHaveLength(0);
    });

    test('takes the first move whatever its size, because WebKit gives no second one', () => {
        const { context } = harness();

        context.handleTouchStart(touchEvent([{ y: 300 }]));
        clock += 8;
        // Three pixels. On WebKit this is the only move that can still be
        // refused, and every one after it lies about being cancelable.
        const first = touchEvent([{ x: 100, y: 303 }]);
        dispatchMove(first);

        expect(first.preventDefault).toHaveBeenCalled();
        expect(documentListeners.touchmove).toHaveLength(1);
    });

    test('holds a tap that jitters without ever moving the shell', () => {
        const { context, popUp, closePopup } = harness();

        context.handleTouchStart(touchEvent([{ y: 300 }]));
        clock += 8;
        dispatchMove(touchEvent([{ x: 103, y: 304 }]));
        frames.splice(0).forEach((frame) => frame());

        // The touch is held, but four pixels is a tap, not a drag.
        expect(popUp.style.transform).toBe('');
        expect(popUp.style.transition).toBe('');

        dispatchEnd();
        expect(closePopup).not.toHaveBeenCalled();
    });

    test('leaves a list the user has already scrolled alone', () => {
        const { context, popUp } = harness();
        const scrolledList = createNode({ scrollTop: 120 });

        context.handleTouchStart(touchEvent([{ y: 300 }], { path: [createNode(), scrolledList, popUp] }));

        expect(documentListeners.touchmove ?? []).toHaveLength(0);
    });

    test('leaves Home Assistant\'s own controls alone', () => {
        const { context, popUp } = harness();

        context.handleTouchStart(touchEvent([{ y: 300 }], {
            path: [createNode({ localName: 'ha-control-slider' }), popUp],
        }));

        expect(documentListeners.touchmove ?? []).toHaveLength(0);
    });

    test('drags the sheet over a Bubble slider that did not take the move', () => {
        const { context, popUp } = harness();
        // A horizontal slider: it saw the same vertical move and left it alone.
        const sliderCard = createNode({ classes: ['bubble-container', 'slider-container'] });

        const path = [createNode({ classes: ['bubble-background'] }), sliderCard, popUp];
        context.handleTouchStart(touchEvent([{ y: 300 }], { path }));
        clock += 16;
        const move = touchEvent([{ y: 340 }]);
        dispatchMove(move);
        frames.splice(0).forEach((frame) => frame());

        expect(move.preventDefault).toHaveBeenCalled();
        expect(popUp.style.transform).toBe('translate3d(0, 40px, 0)');
    });

    test('gives the move back the moment a Bubble slider flags it as its own', () => {
        const { context, popUp } = harness();
        const sliderCard = createNode({ classes: ['bubble-container', 'slider-container'] });

        context.handleTouchStart(touchEvent([{ y: 300 }], { path: [sliderCard, popUp] }));
        // What a vertical slider does after 2px, well before this gesture would
        // have started moving the shell.
        sliderCard.classList.add('is-dragging');
        clock += 16;
        const move = touchEvent([{ y: 340 }]);
        dispatchMove(move);

        // The move itself is cancelled, because the axis had to be answered
        // before the slider had said anything, and the slider cancels its own
        // moves regardless. What matters is that the shell is left alone and the
        // gesture is over.
        expect(popUp.style.transform).toBe('');
        expect(popUp.style.transition).toBe('');
        expect(documentListeners.touchmove).toHaveLength(0);
    });

    test('never starts on a slider that was already being dragged', () => {
        const { context, popUp } = harness();
        const sliderCard = createNode({ classes: ['slider-container', 'is-dragging'] });

        context.handleTouchStart(touchEvent([{ y: 300 }], { path: [sliderCard, popUp] }));

        expect(documentListeners.touchmove ?? []).toHaveLength(0);
    });

    test('stops looking once it reaches the shell', () => {
        const { context, popUp } = harness();
        popUp.scrollTop = 200;

        context.handleTouchStart(touchEvent([{ y: 300 }], { path: [createNode(), popUp, createNode({ scrollTop: 400 })] }));

        expect(documentListeners.touchmove).toHaveLength(1);
    });

    test('ignores a second finger, and gives back a drag it had already started', () => {
        const { context, popUp } = harness();

        context.handleTouchStart(touchEvent([{ y: 300 }]));
        clock += 16;
        dispatchMove(touchEvent([{ y: 400 }]));
        frames.splice(0).forEach((frame) => frame());
        expect(popUp.style.transform).not.toBe('');

        context.handleTouchStart(touchEvent([{ y: 400 }, { y: 500 }]));

        expect(documentListeners.touchmove).toHaveLength(0);
        expect(popUp.style.transform).toBe('');
        expect(popUp.style.transition).toBe('');
    });

    test('does nothing while the pop-up is closed or on its way out', () => {
        const closed = harness({ classes: ['bubble-pop-up', 'is-popup-closed'] });
        closed.context.handleTouchStart(touchEvent([{ y: 300 }]));
        expect(documentListeners.touchmove ?? []).toHaveLength(0);

        const closing = harness({ classes: ['bubble-pop-up', 'is-popup-opened', 'is-closing'] });
        closing.context.handleTouchStart(touchEvent([{ y: 300 }]));
        expect(documentListeners.touchmove ?? []).toHaveLength(0);
    });
});

describe('where the shell is let go', () => {
    test('a centred pop-up is a dialog at every width', () => {
        expect(isBottomSheetLayout({ classList: createClassList(['popup-mode-centered']) })).toBe(false);
    });

    test('an adaptive dialog is a sheet on a phone and a dialog on a desktop', () => {
        expect(isBottomSheetLayout({ classList: createClassList(['popup-mode-adaptive-dialog']) })).toBe(true);

        dialogViewportMatches = true;
        expect(isBottomSheetLayout({ classList: createClassList(['popup-mode-adaptive-dialog']) })).toBe(false);
    });

    test('the default and fit-content layouts are always sheets', () => {
        expect(isBottomSheetLayout({ classList: createClassList([]) })).toBe(true);
        expect(isBottomSheetLayout({ classList: createClassList(['popup-mode-fit-content']) })).toBe(true);
    });

    test('a sheet leaves on the bottom-sheet translation', () => {
        const { context, popUp, closePopup } = harness({ height: 800 });

        drag(context, { from: 100, to: 620, steps: 8, stepMs: 40, restMs: 200 });

        expect(closePopup).toHaveBeenCalledTimes(1);
        expect(popUp.style.transform).toBe('translate3d(0, 100%, 0)');
    });

    test('a centred pop-up still slides, and leaves on its own scale-out', () => {
        const { context, popUp, closePopup } = harness({
            classes: ['bubble-pop-up', 'is-popup-opened', 'popup-mode-centered'],
            height: 800,
        });

        drag(context, { from: 100, to: 620, steps: 8, stepMs: 40, restMs: 200 });

        // The gesture runs in every mode, but the shell is handed back to
        // `.is-closing` rather than parked on a bottom-sheet translation.
        expect(closePopup).toHaveBeenCalledTimes(1);
        expect(popUp.style.transform).toBe('');
        expect(popUp.style.transition).toBe('');
    });
});

describe('teardown', () => {
    test('a close landing mid-drag takes the listeners and the offset with it', () => {
        const { context, popUp } = harness();

        context.handleTouchStart(touchEvent([{ y: 300 }]));
        clock += 16;
        dispatchMove(touchEvent([{ y: 420 }]));
        frames.splice(0).forEach((frame) => frame());

        context.releasePopupSlideToClose();

        expect(documentListeners.touchmove).toHaveLength(0);
        expect(documentListeners.touchend).toHaveLength(0);
        expect(popUp.style.transform).toBe('');
        expect(popUp.style.transition).toBe('');
    });

    test('is a no-op when no gesture is running', () => {
        const { context, popUp } = harness();

        context.releasePopupSlideToClose();

        expect(popUp.style.removeProperty).not.toHaveBeenCalled();
    });

    test('rebinding is refused so updateListeners keeps the handler it registered', () => {
        const { context, closePopup } = harness();
        const firstHandler = context.handleTouchStart;

        configurePopupSlideToClose(context, closePopup);

        expect(context.handleTouchStart).toBe(firstHandler);
    });
});

// The pop-up's own scroller carries `overscroll-behavior: contain`, so a drag
// that lands in the body is already held. The header is that scroller's sibling,
// so a drag starting there has no scroll container at all between it and the
// fixed shell, and the browser gives it to the dashboard behind the pop-up.
describe('an upward drag that belongs to nothing', () => {
    // The header of a real pop-up: plain boxes all the way up to the shell.
    const headerPath = (popUp) => [createNode(), createNode(), popUp];

    function dragUp(context, path, { from = 400, steps = 4, distance = 160 } = {}) {
        context.handleTouchStart(touchEvent([{ y: from }], { path }));

        const moveEvents = [];
        for (let step = 1; step <= steps; step += 1) {
            clock += 16;
            const event = touchEvent([{ y: from - Math.round((distance * step) / steps) }], { path });
            moveEvents.push(event);
            dispatchMove(event);
        }

        return moveEvents;
    }

    test('is cancelled instead of handed over, so the page behind stays put', () => {
        const { context, popUp } = harness();

        const moveEvents = dragUp(context, headerPath(popUp));

        expect(moveEvents.every((event) => event.preventDefault.mock.calls.length === 1)).toBe(true);
    });

    test('keeps cancelling for the rest of the touch', () => {
        const { context, popUp } = harness();

        dragUp(context, headerPath(popUp));

        // The browser only asks once. Letting a single move through after the
        // decision hands it the whole remaining gesture.
        expect(documentListeners.touchmove).toHaveLength(1);
    });

    test('never touches the shell and never closes the pop-up', () => {
        const { context, popUp, closePopup } = harness();

        dragUp(context, headerPath(popUp));
        frames.splice(0).forEach((frame) => frame());
        dispatchEnd();

        expect(popUp.style.transform).toBe('');
        expect(popUp.style.transition).toBe('');
        expect(closePopup).not.toHaveBeenCalled();
    });

    test('ends with the touch, so the next drag closes normally', () => {
        const { context, popUp, closePopup } = harness({ height: 800 });

        dragUp(context, headerPath(popUp));
        dispatchEnd();

        drag(context, { from: 200, to: 700, steps: 5, stepMs: 40, restMs: 200 });

        expect(closePopup).toHaveBeenCalledTimes(1);
    });

    test('does not count the pop-up scroller when its content fits', () => {
        const { context, popUp } = harness();
        // What `.bubble-pop-up-container` is on a pop-up that does not scroll:
        // an `overflow: auto` box with nothing to move. It is also the box whose
        // `overscroll-behavior: contain` the browser skips for that reason.
        const fits = createScroller({ height: 400, content: 400 });

        const moveEvents = dragUp(context, [createNode(), fits, popUp]);

        expect(moveEvents.every((event) => event.preventDefault.mock.calls.length === 1)).toBe(true);
    });

    test('does not count a box only script can scroll', () => {
        const { context, popUp } = harness();
        const clipped = createScroller({ overflowY: 'hidden' });

        const moveEvents = dragUp(context, [createNode(), clipped, popUp]);

        expect(moveEvents.every((event) => event.preventDefault.mock.calls.length === 1)).toBe(true);
    });

    test('stops looking at the shell, so the dashboard behind never counts', () => {
        const { context, popUp } = harness();
        const dashboard = createScroller();

        // The scroller sits past the shell, which is exactly the one this
        // gesture exists to keep still.
        const moveEvents = dragUp(context, [createNode(), popUp, dashboard]);

        expect(moveEvents.every((event) => event.preventDefault.mock.calls.length === 1)).toBe(true);
    });

    test('reads the path once, however many moves the drag produces', () => {
        const { context, popUp } = harness();
        const path = headerPath(popUp);
        let reads = 0;
        const counted = { ...path[0], get scrollHeight() { reads += 1; return 0; } };

        dragUp(context, [counted, path[1], popUp], { steps: 8 });

        expect(reads).toBe(1);
    });

    test('holds a sideways drag that no carousel is there to take', () => {
        const { context, popUp } = harness();
        const path = headerPath(popUp);

        context.handleTouchStart(touchEvent([{ x: 100, y: 400 }], { path }));
        clock += 16;
        // Mostly sideways, and a shade upward. Nothing here scrolls either way,
        // so the small vertical part of it would otherwise reach the page.
        const sideways = touchEvent([{ x: 40, y: 396 }], { path });
        dispatchMove(sideways);

        expect(sideways.preventDefault).toHaveBeenCalled();
        expect(popUp.style.transform).toBe('');
    });

    test('gives a sideways drag to a carousel that can take it', () => {
        const { context, popUp } = harness();
        const carousel = createNode({ clientWidth: 300, scrollWidth: 1200, overflowX: 'auto' });
        const path = [createNode(), carousel, popUp];

        context.handleTouchStart(touchEvent([{ x: 100, y: 400 }], { path }));
        clock += 16;
        const sideways = touchEvent([{ x: 40, y: 396 }], { path });
        dispatchMove(sideways);

        expect(sideways.preventDefault).not.toHaveBeenCalled();
        expect(documentListeners.touchmove).toHaveLength(0);
    });

    test('reads a carousel wherever it currently sits', () => {
        const { context, popUp } = harness();
        // On its last slide. It still owns the swipe, and `scrollLeft` cannot be
        // read for a verdict anyway once the page is right-to-left.
        const carousel = createNode({ clientWidth: 300, scrollWidth: 1200, scrollLeft: 900, overflowX: 'auto' });

        context.handleTouchStart(touchEvent([{ x: 100, y: 400 }], { path: [carousel, popUp] }));
        clock += 16;
        const sideways = touchEvent([{ x: 160, y: 404 }], { path: [carousel, popUp] });
        dispatchMove(sideways);

        expect(sideways.preventDefault).not.toHaveBeenCalled();
    });

    test('a first move that is as vertical as it is sideways counts as vertical', () => {
        const { context, popUp } = harness();
        const path = headerPath(popUp);

        context.handleTouchStart(touchEvent([{ x: 100, y: 400 }], { path }));
        clock += 16;
        // Three each way. Measured on an iPad, this exact tie was read as
        // sideways, handed over, and scrolled the dashboard behind the pop-up.
        const first = touchEvent([{ x: 97, y: 403 }], { path });
        dispatchMove(first);

        expect(first.preventDefault).toHaveBeenCalled();
        // Downward, so the shell is still this gesture's to move once the finger
        // has gone far enough.
        expect(documentListeners.touchmove).toHaveLength(1);
    });
});

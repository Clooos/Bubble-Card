// Slide to close, modelled on Home Assistant's own bottom sheet.
//
// It follows `src/components/ha-bottom-sheet.ts` and
// `src/common/util/swipe-gesture-recognizer.ts` in home-assistant-frontend
// (read against the 20260325.0 snapshot). HA binds a single `touchstart` on the
// sheet, decides there whether the gesture belongs to the sheet or to whatever
// is under the finger, and only then registers a `touchmove` on the *document*
// with `passive: false` for the duration of the drag. Every downward move is
// cancelled, the sheet follows the finger, and the release is decided by
// velocity first, travelled distance second. The numbers below are HA's.
//
// The cancelling is what was missing here, and it is what #2594 is. The pop-up
// listened for `touchmove` passively, so it could not call `preventDefault()`.
// The browser waits for exactly that on the first move, and with nothing coming
// it hands the gesture to the nearest scroller for the rest of the touch (every
// following move arrives with `cancelable: false`). The finger then drove the
// dashboard behind the pop-up, which in the iOS companion app is a pull to
// refresh.
//
// Two departures from HA, both because a pop-up holds arbitrary cards where HA's
// sheet holds known ones:
//   - the gesture locks to an axis before it takes anything, so a horizontal
//     swipe through a tab strip or a carousel is never stolen,
//   - a drag that starts anywhere but downward is handed back for good instead
//     of being re-examined on every move.

// px/ms. Above this the flick decides on its own, whatever the distance.
const VELOCITY_SWIPE_THRESHOLD = 0.5;
// ms. A flick only counts while the finger is still moving. A drag that came to
// rest before lifting is a position decision, not a swipe.
const MOVEMENT_TIME_THRESHOLD = 100;
// Share of the pop-up's own height a drag has to cover to close it.
const CLOSE_HEIGHT_RATIO = 0.5;
// px travelled before the shell starts following the finger. The axis is
// decided long before this, on the first move, but a tap that jitters by a
// pixel must not shift the pop-up, so nothing is written until the finger has
// really gone somewhere.
const DRAG_START_SLOP = 8;
// The close the stylesheet gives the shell, `transition: transform 0.3s ease`,
// in ms. `ease` sets off at 0.4 of its average speed, its first control point
// being (0.25, 0.1), so a finger moving faster than that saw the pop-up brake
// the moment it let go.
const CLOSE_DURATION = 300;
const EASE_START_SLOPE = 0.4;
// ms. The stretch of the drag the finger's speed is read over at the release.
// Short enough to catch a drag that speeds up at the end, long enough that a
// single uneven move does not decide it.
const RELEASE_SPEED_WINDOW = 50;
// ms. The quickest release, so a flick that lands near the bottom still leaves
// over a few frames instead of vanishing.
const MIN_RELEASE_DURATION = 80;
// ms. How far ahead a release starts, one frame, at 60Hz until the drag has
// timed the display, and never more than two of them.
const DEFAULT_FRAME_INTERVAL = 16;
const MAX_FRAME_INTERVAL = 34;

// Overflow values a finger can actually move. A `hidden` or `clip` box has
// scrollable overflow just the same, but only script can scroll it, so it is
// not somewhere a drag can go.
const SCROLLABLE_OVERFLOW = new Set(['auto', 'scroll', 'overlay']);

// Elements that own a vertical drag of their own, straight from HA's list.
const SWIPE_LOCKED_CLASSES = [
    'volume-slider-container',
    'forecast',
];

// Bubble Card's sliders are not on that list, and cannot be. `.slider-container`
// is the whole button card, so blocking it would take slide-to-close away from
// most of a pop-up. A horizontal slider declares `touch-action: pan-y` and hands
// the cross axis back on its own, which is exactly the axis this gesture wants.
// So the slider is only followed, not blocked, and the one thing that settles it
// is the slider's own verdict. It flags `is-dragging` as soon as it has taken
// the finger, after 2px along its axis, well before this gesture commits at 8.
const SLIDER_CLASSES = ['slider-container', 'bubble-range-slider'];
const SLIDER_DRAGGING_CLASS = 'is-dragging';

const SWIPE_LOCKED_TAGS = new Set([
    'ha-control-slider',
    'ha-slider',
    'ha-control-switch',
    'ha-control-circular-slider',
    'ha-hs-color-picker',
    'ha-map',
    'ha-more-info-control-select-container',
    'ha-filter-chip',
    'input',
    'textarea',
]);

// The dialog layout of `popup-mode-adaptive-dialog` is gated on this exact
// query in styles.css. One list for the whole page, because the query is the
// same for every pop-up, and matching it is a read, not a subscription.
const DIALOG_VIEWPORT_QUERY = '(min-width: 871px) and (min-height: 501px)';
let dialogViewport;

function isDialogViewport() {
    if (dialogViewport === undefined) {
        dialogViewport = typeof window.matchMedia === 'function'
            ? window.matchMedia(DIALOG_VIEWPORT_QUERY)
            : null;
    }

    return dialogViewport ? dialogViewport.matches : false;
}

// HA gives the swipe to its bottom-sheet mode alone. Here it runs in every mode,
// because a centred pop-up on a phone is dismissed by the same gesture as any
// other card and has been closing this way all along. What the layout does
// decide is where the shell is let go. A sheet leaves on the bottom-sheet
// translation, a dialog on the scale its own closing state declares.
export function isBottomSheetLayout(popUp) {
    const classList = popUp?.classList;
    if (!classList) {
        return false;
    }

    if (classList.contains('popup-mode-centered')) {
        return false;
    }

    if (classList.contains('popup-mode-adaptive-dialog')) {
        return !isDialogViewport();
    }

    return true;
}

function isSwipeLockedNode(node, somethingFullscreen) {
    // A list the user has already scrolled owns the gesture. This is the rule
    // that keeps a downward drag inside a scrolled pop-up a scroll, and only
    // turns it into a close once the list is back at its top.
    if (node.scrollTop > 0) {
        return true;
    }

    if (node.localName && SWIPE_LOCKED_TAGS.has(node.localName)) {
        return true;
    }

    // A card in fullscreen inside the pop-up (a camera) keeps its drags, as
    // closing the pop-up would end the fullscreen. Only asked while something
    // is in fullscreen, an engine without `:fullscreen` (Safari before 16.4)
    // throws on the selector, and an ordinary touch has nothing to ask.
    if (somethingFullscreen && typeof node.matches === 'function' && node.matches(':fullscreen')) {
        return true;
    }

    const classList = node.classList;
    if (typeof classList?.contains !== 'function') {
        return false;
    }

    return SWIPE_LOCKED_CLASSES.some((className) => classList.contains(className));
}

function hasClass(node, className) {
    return typeof node?.classList?.contains === 'function' && node.classList.contains(className);
}

// The part of the shell that `header` in `slide_to_close` keeps the gesture to.
const HEADER_CLASS = 'bubble-header-container';

// `slide_to_close` in the pop-up's config. Missing or true slides from anywhere,
// `header` from the header alone, false never. Read on every touch, so a change
// made in the editor applies to the next one.
function readSlideMode(config) {
    const value = config?.slide_to_close;
    if (value === false) {
        return 'off';
    }

    return value === 'header' ? 'header' : 'anywhere';
}

// custom:button-card stops the real touch on a card nested in it and hands its
// parent a scripted copy instead (#2627). The copy starts at that parent, so the
// map or the slider under the finger is missing from its path, and a drag across
// a map in a button-card closed the pop-up. The shell sees the real touch go by
// in the capture phase, and a copy of it is read on it while that touch is still
// being dispatched, which is where the copy comes from.
function readTouchSource(event, realTouchStart) {
    if (event.isTrusted !== false || !realTouchStart || realTouchStart === event) {
        return event;
    }

    // Event.NONE, the real touch is done and its path gone with it.
    if (realTouchStart.eventPhase === 0) {
        return event;
    }

    const copied = event.touches?.[0];
    const real = realTouchStart.touches?.[0];
    if (!copied || !real || copied.identifier !== real.identifier) {
        return event;
    }

    return realTouchStart;
}

// Walks from the touch to the shell once, and answers every question that walk
// can answer, whether this gesture may start at all, whether a slider on the way
// has a verdict to be waited for, and whether the finger landed on the header.
function readGestureTarget(event, popUp) {
    const path = typeof event.composedPath === 'function' ? event.composedPath() : null;
    if (!path?.length) {
        return { blocked: false, slider: null, header: false };
    }

    let slider = null;
    let header = false;
    const somethingFullscreen = !!document.fullscreenElement;

    for (const node of path) {
        if (node === popUp) {
            break;
        }

        if (!node) {
            continue;
        }

        if (isSwipeLockedNode(node, somethingFullscreen)) {
            return { blocked: true, slider: null, header: false };
        }

        if (!slider && SLIDER_CLASSES.some((className) => hasClass(node, className))) {
            // Already mid-drag when the finger landed, so it is not this gesture's.
            if (hasClass(node, SLIDER_DRAGGING_CLASS)) {
                return { blocked: true, slider: null, header: false };
            }
            slider = node;
        }

        if (!header && hasClass(node, HEADER_CLASS)) {
            header = true;
        }
    }

    return { blocked: false, slider, header };
}

// Room left to scroll down, which is what a finger moving up is asking for.
function canTakeUpwardDrag(node) {
    // The cheapest question, and the one that rejects almost every node on the
    // path. It is also the read that forces the layout the rest of the walk then
    // gets for free.
    const scrollable = node.scrollHeight - node.clientHeight;
    if (scrollable <= 1) {
        return false;
    }

    if (!SCROLLABLE_OVERFLOW.has(getComputedStyle(node).overflowY)) {
        return false;
    }

    // Agrees with the rule `isSwipeLockedNode` applies at touchstart, where a
    // node the user has already scrolled hands the whole gesture over.
    return node.scrollTop < scrollable - 1;
}

// Sideways the question is deliberately coarser. Any horizontal scroller on the
// way owns the gesture wherever it currently sits, because a carousel that has
// reached its last slide still expects to rubber-band rather than have the move
// taken from it, and `scrollLeft` reverses sign in right-to-left anyway.
function canTakeSidewaysDrag(node) {
    if (node.scrollWidth - node.clientWidth <= 1) {
        return false;
    }

    return SCROLLABLE_OVERFLOW.has(getComputedStyle(node).overflowX);
}

// The dashboard behind an open pop-up must not move, and the only thing holding
// it back is the `overscroll-behavior: contain` on the pop-up's own scroller.
// Whatever is not inside that scroller is not covered by it, starting with the
// header, which is its sibling: a drag from there finds nothing to scroll before
// the fixed shell and the browser takes the page instead. WebKit does not even
// hold the body, it chains straight past a scroller that has nothing to scroll.
//
// Naming those spots would close them and leave the next one open, so what is
// asked here is the question the browser is about to answer itself. Is there
// anything on the way to the shell this drag could belong to?
function hasSomewhereToScroll(event, popUp, sideways) {
    const path = typeof event.composedPath === 'function' ? event.composedPath() : null;
    if (!path?.length) {
        // Nothing read means nothing ruled out, and the gesture is handed over
        // exactly the way it was before.
        return true;
    }

    const canTake = sideways ? canTakeSidewaysDrag : canTakeUpwardDrag;

    for (const node of path) {
        if (node === popUp) {
            break;
        }

        if (node?.nodeType === 1 && canTake(node)) {
            return true;
        }
    }

    return false;
}

// The `transition` and `transform` of the shell are declared `!important` by
// the centred and adaptive-dialog blocks, and modules and card-mod snippets
// reach the shell the same way, so both writes carry the priority themselves.
function setShellProperty(popUp, property, value) {
    const style = popUp?.style;
    if (!style) {
        return;
    }

    if (typeof style.setProperty === 'function') {
        style.setProperty(property, value, 'important');
        return;
    }

    style[property] = value;
}

function clearShellProperty(popUp, property) {
    const style = popUp?.style;
    if (!style) {
        return;
    }

    // Both, as elsewhere in this subsystem. A declaration set with a priority is
    // only really gone once the property is dropped, and the empty string covers
    // hosts whose style object does not mirror removeProperty back.
    if (typeof style.removeProperty === 'function') {
        style.removeProperty(property);
    }
    style[property] = '';
}

// The drag closes past half of it, HA's rule. It replaced a flat 400px that was
// taller than some pop-ups on a phone, which left those impossible to slide
// closed whatever the user did. It is also the whole way a released sheet has to
// travel, since it leaves on a translation of its own height.
//
// Read here and not at touchstart, so a tap or a scroll never pays for a layout
// it has no use for, and read before the first write of the drag, so it is not a
// forced one.
function readShellHeight(popUp) {
    return popUp?.offsetHeight || 0;
}

export function configurePopupSlideToClose(context, closePopup) {
    // createStructure runs more than once over a pop-up's life. Rebinding would
    // hand updateListeners a handler it never registered, and the old one would
    // stay on the shell forever.
    if (context.handleTouchStart) {
        return;
    }

    // One gesture at a time, and all of its state lives here rather than on the
    // context, because nothing survives the touch that created it.
    let active = false;
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let lastY = 0;
    let lastTime = 0;
    let offset = 0;
    let shellHeight = 0;
    let closeDistance = 0;
    let slider = null;
    let dragFrame = null;
    // Where the shell was last painted, and how long a frame lasts on this
    // display. A release carries on from the first and starts one of the second
    // ahead.
    let paintedOffset = 0;
    let lastFrameTime = null;
    let frameInterval = null;
    // Two marks of the finger at least RELEASE_SPEED_WINDOW apart, so its speed
    // at the release is read over the end of the drag rather than all of it.
    let speedFromY = 0;
    let speedFromTime = 0;
    let speedMarkY = 0;
    let speedMarkTime = 0;
    // Set once the axis has been read and the touch kept. From here on every
    // move of it is cancelled, whether or not the shell ever follows.
    let claimed = false;
    // Set when the touch turned out to belong to nothing at all. The shell is
    // never touched in this state, the moves are only kept from reaching the
    // page behind.
    let blocking = false;
    // Whether this touch may move the shell at all, from `slide_to_close`. One
    // that may not is still held from the page behind, exactly like a touch that
    // belongs to nothing, or the dashboard would scroll under the pop-up again
    // (#2594).
    let slides = true;
    // The last real touch the shell saw going down, kept so a scripted copy of
    // it can be read on it (see readTouchSource).
    let realTouchStart = null;

    const writeOffset = (frameTime) => {
        dragFrame = null;
        // The shortest gap between two painted frames of the drag is one frame
        // of this display. A frame the finger skipped only makes a longer one.
        if (typeof frameTime === 'number') {
            if (lastFrameTime !== null && frameTime > lastFrameTime) {
                frameInterval = Math.min(frameInterval ?? MAX_FRAME_INTERVAL, frameTime - lastFrameTime);
            }
            lastFrameTime = frameTime;
        }
        paintedOffset = offset;
        setShellProperty(context.popUp, 'transform', `translate3d(0, ${offset}px, 0)`);
    };

    // Coalesced into a single frame, because a touchmove stream can outrun the
    // display and only the last offset of a frame is ever painted.
    const scheduleOffset = () => {
        if (dragFrame !== null) {
            return;
        }

        dragFrame = requestAnimationFrame(writeOffset);
    };

    const detach = () => {
        active = false;
        dragging = false;
        claimed = false;
        blocking = false;
        slider = null;

        if (dragFrame !== null) {
            cancelAnimationFrame(dragFrame);
            dragFrame = null;
        }

        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd, true);
        document.removeEventListener('touchcancel', handleTouchEnd, true);
    };

    // Let go of the shell and let the stylesheet take it back where it belongs.
    // The `transition: transform 0.3s ease` the shell already carries is what
    // animates the snap back, so there is no duration to declare here.
    const snapBack = () => {
        clearShellProperty(context.popUp, 'transition');
        clearShellProperty(context.popUp, 'transform');
    };

    // px/ms of the finger over the end of the drag, or 0 once it has come to
    // rest, or when it was on its way back up.
    const readReleaseSpeed = () => {
        if (Date.now() - lastTime >= MOVEMENT_TIME_THRESHOLD || lastTime <= speedFromTime) {
            return 0;
        }

        return Math.max(0, (lastY - speedFromY) / (lastTime - speedFromTime));
    };

    // The transition a sheet is let go on, or nothing for the stylesheet's own.
    const resolveReleaseTransition = (speed) => {
        const remaining = shellHeight - paintedOffset;
        // A finger slower than where `ease` sets off loses nothing to it, so it
        // keeps the close every other one gets.
        if (!(remaining > 0) || !(speed > (EASE_START_SLOPE * remaining) / CLOSE_DURATION)) {
            return '';
        }

        const duration = Math.max(MIN_RELEASE_DURATION, Math.min(CLOSE_DURATION, remaining / speed));
        const lead = frameInterval ?? DEFAULT_FRAME_INTERVAL;
        return `transform ${Math.round(duration)}ms linear -${Math.round(lead)}ms`;
    };

    // Carry on from where the finger left the shell rather than dropping it back
    // to zero for a frame. A sheet is handed the same translation `.is-closing`
    // declares, so the two agree. A dialog is handed nothing, so its scale-out
    // takes over untouched.
    //
    // A sheet let go by a finger still on the move does not get the
    // stylesheet's `0.3s ease` for the rest of the way, though. That curve sets
    // off slowly and its first frame shows where it starts, so a sheet flung at
    // speed stopped dead for a frame and crawled before rushing off. It follows
    // the finger instead, in a straight line at the finger's own speed, or at
    // the usual close's average speed when that is faster, and never for longer
    // than the usual close. It also starts one frame ahead, where the shell would
    // have been had the finger stayed on it, so the frame the release lands on is
    // not a still one. The pop-up drops that transition along with the transform
    // once it lets go of the shell, see clearPopupInlineTransform in helpers.js.
    const closeFromDrag = (speed) => {
        const { popUp } = context;
        if (isBottomSheetLayout(popUp)) {
            const release = resolveReleaseTransition(speed);
            if (release) {
                setShellProperty(popUp, 'transition', release);
            } else {
                clearShellProperty(popUp, 'transition');
            }
            setShellProperty(popUp, 'transform', 'translate3d(0, 100%, 0)');
        } else {
            clearShellProperty(popUp, 'transition');
            clearShellProperty(popUp, 'transform');
        }
        closePopup();
    };

    const abort = () => {
        const moved = dragging;
        detach();
        if (moved) {
            snapBack();
        }
    };

    function handleTouchMove(event) {
        const touch = event.touches?.[0];
        if (!touch) {
            return;
        }

        const currentY = touch.clientY;
        const travelY = currentY - startY;

        // The first move is the whole decision. WebKit settles there whether the
        // page will scroll for the rest of the touch, and it never says so
        // afterwards: every following move still arrives `cancelable: true` and
        // every `preventDefault()` on it is quietly ignored. Measured on an
        // iPad, a slow drag from a pop-up body was cancelled 118 times over five
        // seconds while the dashboard behind it scrolled the whole way.
        //
        // So there is nothing to wait for. HA's own sheet does not wait either,
        // `ha-bottom-sheet.ts` cancels on any downward move at all, and what is
        // added here is only the axis it has no need of.
        if (!claimed) {
            const travelX = touch.clientX - startX;

            if (travelY === 0 && travelX === 0) {
                return;
            }

            // A tie goes to the vertical, because that is the axis this gesture
            // is for and the axis the page behind moves on. Measured on an iPad:
            // a slow drag down whose first move came in at three pixels each way
            // was read as sideways, handed over, and took the dashboard with it.
            const sideways = Math.abs(travelX) > Math.abs(travelY);

            // Whichever way it goes, it belongs to whatever is under the finger
            // as long as something there can take it: a list for a drag up, a
            // carousel or a tab strip for one across. When nothing can, the
            // browser gives it to the dashboard behind the pop-up instead, which
            // is the one place it must never go.
            if ((sideways || travelY < 0) && hasSomewhereToScroll(event, context.popUp, sideways)) {
                detach();
                return;
            }

            claimed = true;
            // Only a drag downward moves the shell. The others are held so they
            // cannot reach the page, and nothing more: there is no pop-up above
            // the pop-up to drag it to, and none beside it either.
            blocking = sideways || travelY < 0;
        }

        // The move that fixes #2594, now taken at the only moment it counts.
        // With this the browser never gives the gesture to the dashboard's
        // scroller, so nothing behind the pop-up moves and the companion app has
        // no overscroll to turn into a refresh.
        if (event.cancelable) {
            event.preventDefault();
        }

        if (blocking) {
            return;
        }

        const now = Date.now();

        if (!dragging) {
            if (travelY < DRAG_START_SLOP) {
                return;
            }

            // The slider under the finger has had this same move already, and
            // says whether it took it. A vertical one has. A horizontal one has
            // handed the cross axis back, which is the axis of this drag.
            if (hasClass(slider, SLIDER_DRAGGING_CLASS)) {
                detach();
                return;
            }

            // A drag the config keeps from moving the shell, held from the page
            // behind for the rest of the touch instead.
            if (!slides) {
                blocking = true;
                return;
            }

            shellHeight = readShellHeight(context.popUp);
            closeDistance = shellHeight * CLOSE_HEIGHT_RATIO;
            dragging = true;
            speedFromY = currentY;
            speedFromTime = now;
            speedMarkY = currentY;
            speedMarkTime = now;
            // Held still for the whole drag so the shell follows the finger
            // exactly instead of trailing it by the shell's own 0.3s.
            setShellProperty(context.popUp, 'transition', 'none');
        } else if (now - speedMarkTime >= RELEASE_SPEED_WINDOW) {
            // Moved on a window at a time, so the speed is always read over the
            // last one to two windows of the drag.
            speedFromY = speedMarkY;
            speedFromTime = speedMarkTime;
            speedMarkY = currentY;
            speedMarkTime = now;
        }

        lastY = currentY;
        lastTime = now;
        // Never above where it started. A finger that goes back up past its own
        // starting point would otherwise lift the shell off the bottom of the
        // screen and show the pop-up cut short, and there is nothing up there to
        // drag it to anyway.
        offset = travelY > 0 ? travelY : 0;
        scheduleOffset();
    }

    function handleTouchEnd() {
        if (!active) {
            return;
        }

        const moved = dragging;
        const travelled = offset;
        detach();

        if (!moved) {
            return;
        }

        // HA's decision, in order. A flick that is still moving decides by its
        // direction alone, otherwise the distance covered decides.
        const elapsed = lastTime - startTime;
        const velocity = (Date.now() - lastTime) < MOVEMENT_TIME_THRESHOLD && elapsed > 0
            ? (lastY - startY) / elapsed
            : 0;

        if (Math.abs(velocity) > VELOCITY_SWIPE_THRESHOLD) {
            if (velocity > 0) {
                closeFromDrag(readReleaseSpeed());
            } else {
                snapBack();
            }
            return;
        }

        if (travelled > closeDistance) {
            closeFromDrag(readReleaseSpeed());
            return;
        }

        snapBack();
    }

    context.handleTouchStart = (event) => {
        if (active) {
            abort();
        }

        const touches = event.touches;
        const touch = touches?.[0];
        if (!touch || touches.length > 1) {
            return;
        }

        const { popUp } = context;
        if (!popUp?.classList?.contains('is-popup-opened') || popUp.classList.contains('is-closing')) {
            return;
        }

        const target = readGestureTarget(readTouchSource(event, realTouchStart), popUp);
        if (target.blocked) {
            return;
        }

        const mode = readSlideMode(context.config);

        active = true;
        dragging = false;
        claimed = false;
        blocking = false;
        slides = mode === 'anywhere' || (mode === 'header' && target.header);
        offset = 0;
        shellHeight = 0;
        closeDistance = 0;
        paintedOffset = 0;
        lastFrameTime = null;
        frameInterval = null;
        slider = target.slider;
        startX = touch.clientX;
        startY = touch.clientY;
        startTime = Date.now();
        lastY = startY;
        lastTime = startTime;

        // The move stays in the bubble phase, behind the cards, so a slider gets
        // to claim the gesture before this one reads its verdict.
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        // The end does not. A card that stops the propagation of its own
        // touchend would otherwise leave the drag running forever, and the shell
        // parked wherever the finger left it. Bubble Card's own media player mute
        // button does exactly that, and any third-party card may. Capture reaches
        // the document before any of them can swallow anything.
        document.addEventListener('touchend', handleTouchEnd, { capture: true, passive: true });
        document.addEventListener('touchcancel', handleTouchEnd, { capture: true, passive: true });
    };

    // Bound in the capture phase, where every real touch reaches the shell even
    // when a card stops it on its way back up. It only remembers the touch. The
    // gesture still starts in the bubble phase, so a card that stops a real
    // touch keeps it to itself as before.
    context.handleTouchStartCapture = (event) => {
        if (event.isTrusted) {
            realTouchStart = event;
        }
    };

    // Called when the pop-up's listeners are taken down, so a close that lands
    // mid-drag (the close button, a hash change, a teardown) leaves nothing
    // registered on the document and no offset on the shell.
    context.releasePopupSlideToClose = () => {
        if (active) {
            abort();
        }
    };
}

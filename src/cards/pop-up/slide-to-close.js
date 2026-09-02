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
// px travelled before the gesture commits to an axis. Small enough to feel
// immediate, large enough that a tap's jitter never picks a direction.
const DIRECTION_LOCK_SLOP = 8;

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

function isSwipeLockedNode(node) {
    // A list the user has already scrolled owns the gesture. This is the rule
    // that keeps a downward drag inside a scrolled pop-up a scroll, and only
    // turns it into a close once the list is back at its top.
    if (node.scrollTop > 0) {
        return true;
    }

    if (node.localName && SWIPE_LOCKED_TAGS.has(node.localName)) {
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

// Walks from the touch to the shell once, and answers both questions that walk
// can answer, whether this gesture may start at all, and whether a slider on the
// way has a verdict to be waited for.
function readGestureTarget(event, popUp) {
    const path = typeof event.composedPath === 'function' ? event.composedPath() : null;
    if (!path?.length) {
        return { blocked: false, slider: null };
    }

    let slider = null;

    for (const node of path) {
        if (node === popUp) {
            break;
        }

        if (!node) {
            continue;
        }

        if (isSwipeLockedNode(node)) {
            return { blocked: true, slider: null };
        }

        if (!slider && SLIDER_CLASSES.some((className) => hasClass(node, className))) {
            // Already mid-drag when the finger landed, so it is not this gesture's.
            if (hasClass(node, SLIDER_DRAGGING_CLASS)) {
                return { blocked: true, slider: null };
            }
            slider = node;
        }
    }

    return { blocked: false, slider };
}

// Room left to scroll down, which is what a finger moving up is asking for.
function canTakeUpwardDrag(node) {
    if (node.nodeType !== 1) {
        return false;
    }

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

// The dashboard behind an open pop-up must not move, and the only thing holding
// it back is the `overscroll-behavior: contain` on the pop-up's own scroller.
// Whatever is not inside that scroller is not covered by it, starting with the
// header, which is its sibling: a drag from there finds nothing to scroll before
// the fixed shell and the browser takes the page instead.
//
// Naming the header would close that one spot and leave the next one open, so
// what is asked here is the question the browser is about to answer itself. Is
// there anything on the way to the shell this drag could belong to?
function hasSomewhereToScroll(event, popUp) {
    const path = typeof event.composedPath === 'function' ? event.composedPath() : null;
    if (!path?.length) {
        // Nothing read means nothing ruled out, and the gesture is handed over
        // exactly the way it was before.
        return true;
    }

    for (const node of path) {
        if (node === popUp) {
            break;
        }

        if (node && canTakeUpwardDrag(node)) {
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

// HA's rule, half the sheet. It replaced a flat 400px that was taller than some
// pop-ups on a phone, which left those impossible to slide closed whatever the
// user did.
//
// Read here and not at touchstart, so a tap or a scroll never pays for a layout
// it has no use for, and read before the first write of the drag, so it is not a
// forced one.
function resolveCloseDistance(popUp) {
    return (popUp?.offsetHeight || 0) * CLOSE_HEIGHT_RATIO;
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
    let closeDistance = 0;
    let slider = null;
    let dragFrame = null;
    // Set when the drag turned out to belong to nothing at all. The shell is
    // never touched in this state, the moves are only kept from reaching the
    // page behind.
    let blocking = false;

    const writeOffset = () => {
        dragFrame = null;
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

    // Carry on from where the finger left the shell rather than dropping it back
    // to zero for a frame, and let the shell's own transition play it out. A
    // sheet is handed the same translation `.is-closing` declares, so the two
    // agree. A dialog is handed nothing, so its scale-out takes over untouched.
    const closeFromDrag = () => {
        clearShellProperty(context.popUp, 'transition');
        if (isBottomSheetLayout(context.popUp)) {
            setShellProperty(context.popUp, 'transform', 'translate3d(0, 100%, 0)');
        } else {
            clearShellProperty(context.popUp, 'transform');
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

        if (blocking) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }

        const currentY = touch.clientY;
        const travelY = currentY - startY;

        if (!dragging) {
            const travelX = touch.clientX - startX;
            if (Math.abs(travelX) < DIRECTION_LOCK_SLOP && Math.abs(travelY) < DIRECTION_LOCK_SLOP) {
                return;
            }

            // A horizontal drag belongs to whatever is under the finger, a
            // carousel, a tab strip. Handing it over once is what keeps those
            // working, and taking it back mid-touch is not possible anyway, the
            // browser has already committed the gesture.
            if (Math.abs(travelX) > Math.abs(travelY)) {
                detach();
                return;
            }

            // So does an upward one, as long as something under the finger can
            // take it. When nothing can, the browser gives it to the dashboard
            // behind the pop-up instead, which is the one place it must never
            // go, so the rest of the touch is cancelled and nothing moves.
            if (travelY <= 0) {
                if (hasSomewhereToScroll(event, context.popUp)) {
                    detach();
                    return;
                }

                blocking = true;
                if (event.cancelable) {
                    event.preventDefault();
                }
                return;
            }

            // The slider under the finger has had this same move already, and
            // says whether it took it. A vertical one has. A horizontal one has
            // handed the cross axis back, which is the axis of this drag.
            if (hasClass(slider, SLIDER_DRAGGING_CLASS)) {
                detach();
                return;
            }

            closeDistance = resolveCloseDistance(context.popUp);
            dragging = true;
            // Held still for the whole drag so the shell follows the finger
            // exactly instead of trailing it by the shell's own 0.3s.
            setShellProperty(context.popUp, 'transition', 'none');
        }

        // The move that fixes #2594. With this the browser never gives the
        // gesture to the dashboard's scroller, so nothing behind the pop-up
        // moves and the companion app has no overscroll to turn into a refresh.
        if (event.cancelable) {
            event.preventDefault();
        }

        lastY = currentY;
        lastTime = Date.now();
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
                closeFromDrag();
            } else {
                snapBack();
            }
            return;
        }

        if (travelled > closeDistance) {
            closeFromDrag();
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

        const target = readGestureTarget(event, popUp);
        if (target.blocked) {
            return;
        }

        active = true;
        dragging = false;
        blocking = false;
        offset = 0;
        closeDistance = 0;
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

    // Called when the pop-up's listeners are taken down, so a close that lands
    // mid-drag (the close button, a hash change, a teardown) leaves nothing
    // registered on the document and no offset on the shell.
    context.releasePopupSlideToClose = () => {
        if (active) {
            abort();
        }
    };
}

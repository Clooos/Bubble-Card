// A drag must not leave the card acting on the release, so the click that
// follows one is swallowed. Only a mouse produces that click, and it arrives in
// the same turn as the release. A touch drag produces none at all, so a listener
// armed with `once` was never consumed: it stayed on the card and ate the next
// tap instead, whatever it was and however much later, which is why a select
// sub-button took two taps to open after a slide (#2593).
//
// Dropped one turn after the gesture ends, which is after any click it was meant
// for and before anything the user does next.
export function createDragClickSwallow(element) {
    let pendingRelease = null;

    function swallow(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    function release() {
        if (pendingRelease) {
            clearTimeout(pendingRelease);
            pendingRelease = null;
        }
        element?.removeEventListener?.('click', swallow, true);
    }

    return {
        // Re-armed from scratch: a gesture starting while the previous one is
        // still winding down must not end up with two listeners on the card.
        arm() {
            release();
            element?.addEventListener?.('click', swallow, true);
        },
        scheduleRelease() {
            if (pendingRelease) clearTimeout(pendingRelease);
            pendingRelease = setTimeout(release, 0);
        },
        release
    };
}

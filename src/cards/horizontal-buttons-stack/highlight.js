// The "current view" highlight of the horizontal buttons stack.
//
// Its own module rather than a part of create.js, because bubble-card.js has to
// release the listener on disconnect and create.js imports styles.css, which
// only webpack can read. Nothing is imported here on purpose, so the disconnect
// path stays free of the card's asset graph.

// One navigation fires all three: navigate() and addHash() dispatch the
// synthetic `location-changed`, and the browser fires `popstate` and
// `hashchange` on its own when the back button pops the entry they pushed.
// Listening to `location-changed` alone is why closing a pop-up with the back
// button left its button highlighted. The pop-up URL dispatcher listens to the
// same trio, for the same reason.
const HIGHLIGHT_URL_EVENTS = ['location-changed', 'popstate', 'hashchange'];

function highlightUrlKey() {
    return `${location.pathname}${location.hash}`;
}

function refreshButtonHighlights(context) {
    for (const button of context.elements?.buttons ?? []) {
        const link = button.link;
        const isShown = location.pathname === link || location.hash === link;
        button.classList.toggle('highlight', !!link && isShown);
    }
}

// Registered once per card and released on disconnect, rather than once per
// button and never: the handler closes over the context, which is the
// bubble-card element itself, so a leaked one pins that element and its last
// hass for the lifetime of the page. Called on every render, so switching the
// option in the editor takes effect without rebuilding the card.
export function syncButtonHighlightListener(context) {
    if (!context?.config?.highlight_current_view) {
        releaseButtonHighlightListener(context);
        // Turning the option off has to take the class back, nothing else
        // clears it once it is on a button.
        for (const button of context?.elements?.buttons ?? []) {
            button.classList.remove('highlight');
        }
        return;
    }

    if (context._buttonHighlightHandler) {
        // Already listening. The URL has not moved, but the button list may
        // have, so a button changeConfig just added gets its class now.
        refreshButtonHighlights(context);
        return;
    }

    let lastUrlKey = null;
    const handler = () => {
        const key = highlightUrlKey();
        // The duplicates of a single navigation land here. The work is
        // idempotent, but it runs while a pop-up is closing, which is the
        // moment this card should be the least in the way.
        if (key === lastUrlKey) return;
        lastUrlKey = key;
        refreshButtonHighlights(context);
    };

    context._buttonHighlightHandler = handler;
    for (const type of HIGHLIGHT_URL_EVENTS) {
        window.addEventListener(type, handler);
    }

    // Paint the current state right away. The highlight was only ever computed
    // inside the listener, so a card built on the view it points at showed
    // nothing until you navigated away and back.
    handler();
}

export function releaseButtonHighlightListener(context) {
    const handler = context?._buttonHighlightHandler;
    if (!handler) return;
    for (const type of HIGHLIGHT_URL_EVENTS) {
        window.removeEventListener(type, handler);
    }
    context._buttonHighlightHandler = null;
}

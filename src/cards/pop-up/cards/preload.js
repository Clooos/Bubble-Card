// Idle-time preload of the card modules a pop-up's content will need.
//
// The dominant cost of a cold pop-up open is not the DOM: Home Assistant
// lazy-imports each hui-*-card module the first time a type is used. A type
// that only appears inside a pop-up pays that import (network + parse +
// upgrade) INSIDE a build step, where the time budget cannot split it, and
// the element upgrades visibly late. Creating one throwaway card per unique
// type at idle time pulls those imports forward at zero visual risk: only
// the modules stay loaded, the elements are discarded.
const preloadedCardTypes = new Set();
const preloadQueue = [];
let preloadScheduled = false;

function _collectCardTypes(config, types, depth = 0) {
    if (!config || typeof config !== 'object' || depth > 6) {
        return;
    }

    if (Array.isArray(config)) {
        config.forEach((item) => _collectCardTypes(item, types, depth + 1));
        return;
    }

    if (typeof config.type === 'string' && config.type) {
        types.add(config.type);
    }
    if (Array.isArray(config.cards)) {
        _collectCardTypes(config.cards, types, depth + 1);
    }
    if (config.card && typeof config.card === 'object') {
        _collectCardTypes(config.card, types, depth + 1);
    }
}

async function _preloadOneType(type) {
    try {
        const loadCardHelpers = typeof window !== 'undefined' ? window.loadCardHelpers : undefined;
        if (typeof loadCardHelpers !== 'function') {
            return;
        }

        const helpers = await loadCardHelpers();
        if (typeof helpers?.createCardElement !== 'function') {
            return;
        }

        // The element is never attached and immediately discarded: the module
        // import triggered by its creation is the whole point.
        helpers.createCardElement({ type });
    } catch (_) {
        // Preloading is best-effort: a failing type simply loads on first use.
    }
}

function _pumpPreloadQueue() {
    if (preloadScheduled || preloadQueue.length === 0) {
        return;
    }

    preloadScheduled = true;
    const run = () => {
        preloadScheduled = false;
        const type = preloadQueue.shift();
        if (type) {
            _preloadOneType(type);
        }
        _pumpPreloadQueue();
    };

    // One type per idle slice keeps each task tiny; the timeout fallback
    // (Safari has no requestIdleCallback) stays far away from dashboard boot.
    if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(run, { timeout: 8000 });
    } else {
        setTimeout(run, 2500);
    }
}

export function schedulePopupCardModulePreload(context) {
    const cards = context?.config?.cards;
    if (!Array.isArray(cards) || cards.length === 0 || context.editor || context.detectedEditor) {
        return;
    }

    const types = new Set();
    _collectCardTypes(cards, types, 0);

    for (const type of types) {
        if (!preloadedCardTypes.has(type)) {
            preloadedCardTypes.add(type);
            preloadQueue.push(type);
        }
    }

    _pumpPreloadQueue();
}

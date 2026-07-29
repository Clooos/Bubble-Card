// Idle-time preload of the card modules a pop-up's content will need.
//
// The dominant cost of a cold pop-up open is not the DOM: Home Assistant
// lazy-imports each built-in hui-*-card module the first time a type is
// used. A type that only appears inside a pop-up pays that import (network +
// parse + upgrade) INSIDE a build step, where the time budget cannot split
// it, and the element upgrades visibly late. Creating one throwaway card per
// unique built-in type at idle time pulls those imports forward at zero
// visual risk: only the modules stay loaded, the elements are discarded.
//
// custom:* types are skipped entirely: their resources are loaded up-front
// by lovelace, there is nothing to import, and instantiating them with a
// config they were not opened with can throw or run arbitrary side effects.
const preloadedCardTypes = new Set();
const preloadQueue = [];
let preloadScheduled = false;

function _collectCardConfigsByType(config, byType, depth = 0) {
    if (!config || typeof config !== 'object' || depth > 6) {
        return;
    }

    if (Array.isArray(config)) {
        config.forEach((item) => _collectCardConfigsByType(item, byType, depth + 1));
        return;
    }

    if (typeof config.type === 'string' && config.type && !config.type.startsWith('custom:') && !byType.has(config.type)) {
        byType.set(config.type, config);
    }
    if (Array.isArray(config.cards)) {
        _collectCardConfigsByType(config.cards, byType, depth + 1);
    }
    if (config.card && typeof config.card === 'object') {
        _collectCardConfigsByType(config.card, byType, depth + 1);
    }
}

async function _preloadOneType(cardConfig) {
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
        // import triggered by its creation is the whole point. The card's
        // real config is used so setConfig validation passes silently.
        helpers.createCardElement(cardConfig);
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
        const cardConfig = preloadQueue.shift();
        if (cardConfig) {
            _preloadOneType(cardConfig);
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

    const byType = new Map();
    _collectCardConfigsByType(cards, byType, 0);

    for (const [type, cardConfig] of byType) {
        if (!preloadedCardTypes.has(type)) {
            preloadedCardTypes.add(type);
            preloadQueue.push(cardConfig);
        }
    }

    _pumpPreloadQueue();
}

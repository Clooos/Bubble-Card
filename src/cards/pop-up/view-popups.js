// Every pop-up the view on screen is configured with, read from the dashboard
// config rather than from the cards on the page. A legacy pop-up takes itself
// out of the page while it is closed, and a card behind a condition may never
// render at all, yet both are still somewhere to navigate to.

import { getCurrentLovelaceViewConfig } from '../../tools/lovelace-view.js';
import { isTemplate } from '../../tools/jinja.js';

// Home Assistant replaces the config objects it saves rather than editing them,
// so a view object seen before still describes the same pop-ups.
const popUpsByView = new WeakMap();

export function normalizePopUpHash(hash) {
    if (typeof hash !== 'string') return null;
    const trimmed = hash.trim();
    if (!trimmed || trimmed.startsWith('/')) return null;
    return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
}

function isPopUpConfig(node) {
    return node?.type === 'custom:bubble-card' && node.card_type === 'pop-up';
}

// A template is text to render, not a name to show. The card renders it once
// it is on the page, and until then the hash says more.
function plainText(value) {
    return typeof value === 'string' && value && !isTemplate(value) ? value : null;
}

// Whatever holds a pop-up, a stack, a grid, a conditional card or a pop-up of
// its own, the walk reaches it. The first pop-up claiming a hash names it.
export function collectPopUps(node, found = new Map()) {
    if (!node || typeof node !== 'object') {
        return found;
    }

    if (Array.isArray(node)) {
        node.forEach((child) => collectPopUps(child, found));
        return found;
    }

    if (isPopUpConfig(node)) {
        const hash = normalizePopUpHash(node.hash);
        if (hash && !found.has(hash)) {
            found.set(hash, {
                hash,
                name: plainText(node.name),
                icon: plainText(node.icon),
                legacy: !Array.isArray(node.cards),
            });
        }
    }

    for (const value of Object.values(node)) {
        if (value && typeof value === 'object') {
            collectPopUps(value, found);
        }
    }

    return found;
}

// The list only ever adds to what the notice and the picker show, so a shell
// that cannot be read leaves them as they were rather than breaking them.
export function getCurrentViewPopUps(hass = null) {
    let view = null;
    try {
        view = getCurrentLovelaceViewConfig(hass);
    } catch (_) {
        return [];
    }
    if (!view) {
        return [];
    }

    let popUps = popUpsByView.get(view);
    if (!popUps) {
        popUps = [...collectPopUps(view).values()];
        popUpsByView.set(view, popUps);
    }
    return popUps;
}

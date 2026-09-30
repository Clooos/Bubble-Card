// Which Lovelace view is on screen, read from the URL the way Home Assistant
// routes it, and the config that view was rendered from.

import { resolveLovelaceRoot } from './ha-boundary.js';

function getPathSegments() {
    const pathname = typeof location !== 'undefined' && typeof location.pathname === 'string' ? location.pathname : '';
    return pathname.split('/').filter(Boolean).map((segment) => {
        try {
            return decodeURI(segment);
        } catch (_) {
            return segment;
        }
    });
}

function normalizePanelUrl(panelUrl) {
    return typeof panelUrl === 'string' ? panelUrl.trim().replace(/^\/+|\/+$/g, '') : '';
}

function getCurrentPanelAndView(hass = null) {
    const segments = getPathSegments();
    const panelUrl = normalizePanelUrl(hass?.panelUrl) || segments[0] || 'lovelace';
    const panelIndex = segments.indexOf(panelUrl);
    const viewPath = panelIndex >= 0
        ? segments[panelIndex + 1]
        : segments[1];

    return { panelUrl, viewPath: viewPath || '' };
}

function normalizeRouteValue(value) {
    return typeof value === 'string' ? value.trim().replace(/^\/+|\/+$/g, '') : '';
}

function getTitleRouteFallback(title) {
    return normalizeRouteValue(title)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function parseViewIndex(value, views) {
    if (value === null || value === undefined || value === '') {
        return -1;
    }

    if (typeof value !== 'number' && typeof value !== 'string') {
        return -1;
    }

    const index = typeof value === 'number' ? value : Number(value);
    return Number.isInteger(index) && index >= 0 && index < views.length ? index : -1;
}

export function getCurrentView(hass = null) {
    const { panelUrl, viewPath } = getCurrentPanelAndView(hass);

    return viewPath ? `${panelUrl}/${viewPath}` : panelUrl;
}

export function getCurrentLovelaceViewPath(lovelaceConfig, hass = null, explicitViewIndex = null) {
    const views = lovelaceConfig?.views;
    if (!Array.isArray(views) || views.length === 0) {
        return null;
    }

    const resolvedExplicitIndex = parseViewIndex(explicitViewIndex, views);
    if (resolvedExplicitIndex !== -1) {
        return ['views', resolvedExplicitIndex];
    }

    const { viewPath } = getCurrentPanelAndView(hass);
    const normalizedViewPath = normalizeRouteValue(viewPath);

    if (!normalizedViewPath) {
        return ['views', 0];
    }

    const numericIndex = parseViewIndex(normalizedViewPath, views);
    if (numericIndex !== -1) {
        return ['views', numericIndex];
    }

    const matchingIndex = views.findIndex((view) => {
        const configuredPath = normalizeRouteValue(view?.path);
        if (configuredPath) {
            return configuredPath === normalizedViewPath;
        }

        return getTitleRouteFallback(view?.title) === normalizedViewPath;
    });

    return matchingIndex !== -1 ? ['views', matchingIndex] : null;
}

// The config of the view on screen, taken from the dashboard Home Assistant
// rendered it with. Null outside a dashboard.
export function getCurrentLovelaceViewConfig(hass = null) {
    const lovelaceConfig = resolveLovelaceRoot()?.lovelace?.config;
    const viewPath = getCurrentLovelaceViewPath(lovelaceConfig, hass);
    return viewPath ? lovelaceConfig.views[viewPath[1]] || null : null;
}

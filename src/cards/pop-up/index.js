import { changeEditor, changeStyle, changeTriggered } from './changes.js';
import { createHeader, createStructure, prepareStructure, prepareStandaloneStructure, renderHeaderButton } from './create.js';
import { cleanupPopupRuntime, registerPopupContext, syncPopupOpenStateWithLocation } from './helpers.js';
import { initPopUpHashNavigationBridge, registerPopUpHash } from "./navigation-picker-bridge.js";
import { cleanupPopUpCards, handlePopUpCards } from './cards/index.js';
import { isStandalonePopUpConfig } from './migration.js';

initPopUpHashNavigationBridge();

const wakeSyncContextRefs = [];
let wakeSyncFrame = null;
let wakeSyncDeferredTimeout = null;

function pruneWakeSyncContextRefs() {
    for (let i = wakeSyncContextRefs.length - 1; i >= 0; i--) {
        if (!wakeSyncContextRefs[i]?.deref?.()) {
            wakeSyncContextRefs.splice(i, 1);
        }
    }
}

function registerWakeSyncContext(context) {
    if (!context) {
        return;
    }

    for (let i = wakeSyncContextRefs.length - 1; i >= 0; i--) {
        const existing = wakeSyncContextRefs[i]?.deref?.();
        if (!existing) {
            wakeSyncContextRefs.splice(i, 1);
            continue;
        }
        if (existing === context) {
            return;
        }
    }

    wakeSyncContextRefs.push(new WeakRef(context));
}

function getWakeSyncContexts() {
    pruneWakeSyncContextRefs();

    const contexts = [];
    for (const ref of wakeSyncContextRefs) {
        const context = ref?.deref?.();
        if (!context || context.isConnected === false) {
            continue;
        }
        if (!context.popUp || !context.elements || context.editor || context.detectedEditor) {
            continue;
        }
        contexts.push(context);
    }

    return contexts;
}

function syncWakeResumedPopups() {
    const contexts = getWakeSyncContexts();
    for (const context of contexts) {
        syncPopupOpenStateWithLocation(context, false);
        changeTriggered(context);
    }
}

function scheduleWakeResumedPopupsSync() {
    if (wakeSyncFrame !== null) {
        cancelAnimationFrame(wakeSyncFrame);
        wakeSyncFrame = null;
    }

    if (wakeSyncDeferredTimeout) {
        clearTimeout(wakeSyncDeferredTimeout);
        wakeSyncDeferredTimeout = null;
    }

    if (typeof requestAnimationFrame !== 'function') {
        syncWakeResumedPopups();
        return;
    }

    wakeSyncFrame = requestAnimationFrame(() => {
        wakeSyncFrame = null;
        syncWakeResumedPopups();

        wakeSyncDeferredTimeout = setTimeout(() => {
            wakeSyncDeferredTimeout = null;
            syncWakeResumedPopups();
        }, 800);
    });
}

function ensureWakeSyncListeners() {
    if (typeof window === 'undefined' || window.__bubbleWakeSyncListenersAdded) {
        return;
    }

    window.__bubbleWakeSyncListenersAdded = true;

    window.addEventListener('focus', scheduleWakeResumedPopupsSync);
    window.addEventListener('pageshow', scheduleWakeResumedPopupsSync);

    if (typeof document !== 'undefined') {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                scheduleWakeResumedPopupsSync();
            }
        });
    }
}

function syncPopUpHashRegistration(context) {
    const registrationKey = [
        location.pathname || '',
        context.config?.hash || '',
        context.config?.name || '',
        context.config?.icon || '',
        context.editor ? 'editor' : 'live',
        context.isConnected ? '1' : '0',
    ].join('|');

    if (context._lastPopUpHashRegistrationKey === registrationKey) {
        return;
    }

    context._lastPopUpHashRegistrationKey = registrationKey;
    registerPopUpHash(context.config?.hash, {
        name: context.config?.name,
        icon: context.config?.icon,
        isConnected: context.isConnected,
        element: context.editor ? null : context
    });
}

function _collectSubButtonEntities(config) {
    const sub = config?.sub_button;
    if (!sub) return [];
    const mainEntity = config?.entity || '';
    const entities = [];
    const sections = Array.isArray(sub) ? [sub] : [sub.main || [], sub.bottom || []];
    for (const section of sections) {
        if (!Array.isArray(section)) continue;
        for (const btn of section) {
            if (!btn) continue;
            if (Array.isArray(btn.group)) {
                for (const gb of btn.group) {
                    if (gb) entities.push(gb.entity || mainEntity);
                }
            } else {
                entities.push(btn.entity || mainEntity);
            }
        }
    }
    return entities;
}

function _snapshotSubButtonEntityRefs(context) {
    const entities = _collectSubButtonEntities(context.config);
    const states = context._hass?.states;
    context._lastSubBtnEntityKeys = entities;
    context._lastSubBtnEntityRefs = entities.map(e => states?.[e] ?? null);
}

function _haveSubButtonEntityRefsChanged(context) {
    const cached = context._lastSubBtnEntityRefs;
    if (!cached) return false;
    const keys = context._lastSubBtnEntityKeys;
    const states = context._hass?.states;
    for (let i = 0; i < keys.length; i++) {
        if (cached[i] !== (states?.[keys[i]] ?? null)) return true;
    }
    return false;
}

function _subButtonUsesRelativeTime(subButton) {
    if (!subButton) {
        return false;
    }

    if (subButton.show_last_changed || subButton.show_last_updated) {
        return true;
    }

    return Array.isArray(subButton.group)
        ? subButton.group.some(_subButtonUsesRelativeTime)
        : false;
}

function _headerUsesRelativeTime(config) {
    if (!config) {
        return false;
    }

    if (config.show_last_changed || config.show_last_updated) {
        return true;
    }

    const sub = config.sub_button;
    if (!sub) {
        return false;
    }

    const sections = Array.isArray(sub)
        ? [sub]
        : [sub.main || [], sub.bottom || []];

    return sections.some(section => Array.isArray(section) && section.some(_subButtonUsesRelativeTime));
}

function shouldRefreshHeader(context) {
    if (!context.elements?.header) {
        return false;
    }

    const entity = context.config?.entity || '';
    const entityState = entity ? context._hass?.states?.[entity] : null;
    const locale = context._hass?.locale;
    const unitSystem = context._hass?.config?.unit_system;
    const isEditing = !!(context.editor || context.detectedEditor);

    if (_headerUsesRelativeTime(context.config)) {
        context._lastHeaderConfigRef = context.config;
        context._lastHeaderStateRef = entityState;
        context._lastHeaderLocaleRef = locale;
        context._lastHeaderUnitSystemRef = unitSystem;
        context._lastHeaderEditMode = isEditing;
        _snapshotSubButtonEntityRefs(context);
        return true;
    }

    if (context._lastHeaderConfigRef !== context.config ||
        context._lastHeaderStateRef !== entityState ||
        context._lastHeaderLocaleRef !== locale ||
        context._lastHeaderUnitSystemRef !== unitSystem ||
        context._lastHeaderEditMode !== isEditing) {

        context._lastHeaderConfigRef = context.config;
        context._lastHeaderStateRef = entityState;
        context._lastHeaderLocaleRef = locale;
        context._lastHeaderUnitSystemRef = unitSystem;
        context._lastHeaderEditMode = isEditing;
        _snapshotSubButtonEntityRefs(context);
        return true;
    }

    if (_haveSubButtonEntityRefsChanged(context)) {
        _snapshotSubButtonEntityRefs(context);
        return true;
    }

    return false;
}

function shouldSyncStandalonePopUpCards(context, editorHandledStandaloneCards = false) {
    return !!(
        context.isStandalonePopUp &&
        context._standalonePopUpCardsActive &&
        !editorHandledStandaloneCards
    );
}

function isStandalonePopUpInactive(context) {
    return !!(
        context.isStandalonePopUp &&
        !context.editor &&
        !context.detectedEditor &&
        !context.config.background_update &&
        context.config.hash !== location.hash &&
        !context._standalonePopUpCardsActive
    );
}

function refreshPopupShell(context) {
    refreshPopupHeader(context);
    changeStyle(context);
}

function refreshPopupHeader(context) {
    const shouldUpdateHeader = context.config.hash === location.hash ||
                               context.editor ||
                               (context.config.background_update && !context.headerInitialized);

    if (shouldUpdateHeader && shouldRefreshHeader(context)) {
        renderHeaderButton(context);

        if (context.config.background_update) {
            context.headerInitialized = true;
        }
    }
}

function initializeStandalonePopUp(context) {
    prepareStandaloneStructure(context);
    if (!context.popUp) return;

    createHeader(context);
    createStructure(context);
    context.refreshPopupHeader = () => {
        refreshPopupHeader(context);
    };
    context.refreshPopupShell = () => {
        refreshPopupShell(context);
        context._standaloneNeedsShellRefresh = false;
    };
    if (isStandalonePopUpInactive(context)) {
        context._standaloneNeedsShellRefresh = true;
    } else {
        context.refreshPopupShell();
    }
    const editorHandledStandaloneCards = changeEditor(context);
    if (shouldSyncStandalonePopUpCards(context, editorHandledStandaloneCards)) {
        handlePopUpCards(context);
    }

    if (context.config.background_update && !context.headerInitialized) {
        context.headerInitialized = true;
    }
}

function initializeLegacyPopUp(context) {
    prepareStructure(context);
    if (!context.popUp) return;

    createHeader(context);
    createStructure(context);
    context.refreshPopupHeader = () => {
        refreshPopupHeader(context);
    };
    context.refreshPopupShell = () => {
        // Skip for legacy popups that are closed (DOM is detached, evaluation is wasted work).
        if (!context.editor && !context.config.background_update && context.config.hash !== location.hash) {
            return;
        }
        refreshPopupShell(context);
    };
    const isActiveAtInit = context.config.hash === location.hash ||
                           context.editor ||
                           !!context.config.background_update;
    if (isActiveAtInit) {
        refreshPopupShell(context);
    }

    if (context.config.background_update && !context.headerInitialized) {
        context.headerInitialized = true;
    }
}

export function handlePopUp(context) {
    syncPopUpHashRegistration(context);

    if (context.cardType !== "pop-up") {
        if ((context.getRootNode() instanceof ShadowRoot) === false) {
            // Skip detached cards.
            return;
        }

        if (isStandalonePopUpConfig(context.config)) {
            initializeStandalonePopUp(context);
        } else {
            initializeLegacyPopUp(context);
        }
        return;
    }

    if (!context.popUp || !context.elements) {
        return;
    }

    ensureWakeSyncListeners();
    registerWakeSyncContext(context);

    if (isStandalonePopUpInactive(context)) {
        context._standaloneNeedsShellRefresh = true;
        // Re-establish deferred refresh callbacks if cleanupPopUp nulled them while
        // this card instance was kept alive (e.g. an HA disconnect/reconnect cycle
        // that skips full re-initialization because cardType is already "pop-up").
        // Without these, openStandalonePopup phase-1 skips changeStyle entirely,
        // so popup-style-classic and other CSS classes are never applied and the
        // popup opens with stale/wrong header styling until the next hass update.
        if (typeof context.refreshPopupHeader !== 'function') {
            context.refreshPopupHeader = () => {
                refreshPopupHeader(context);
            };
        }
        if (typeof context.refreshPopupShell !== 'function') {
            context.refreshPopupShell = () => {
                refreshPopupShell(context);
                context._standaloneNeedsShellRefresh = false;
            };
        }
    } else if (typeof context.refreshPopupShell === 'function') {
        context.refreshPopupShell();
    } else {
        // Fallback for contexts where refreshPopupShell was not stored.
        // Still guard against useless evaluation for closed legacy popups.
        if (context.isStandalonePopUp || context.editor || context.config.background_update ||
            context.config.hash === location.hash) {
            refreshPopupShell(context);
        }
    }

    // Keep the popup registered in the shared URL dispatcher.
    registerPopupContext(context);

    if (!context.editor && !context.detectedEditor) {
        syncPopupOpenStateWithLocation(context, false);
    }

    if (!context.editor) {
        changeTriggered(context);
    }

    const editorHandledStandaloneCards = changeEditor(context);

    if (shouldSyncStandalonePopUpCards(context, editorHandledStandaloneCards)) {
        handlePopUpCards(context);
    }
}

export function cleanupPopUp(context) {
    cleanupPopupRuntime(context);
    cleanupPopUpCards(context);
    context._standaloneNeedsShellRefresh = false;
    context.refreshPopupHeader = null;
    context.refreshPopupShell = null;

    if (context.elements?.popUpContainer) {
        context.elements.popUpContainer.classList.remove('has-placeholder');
        context.elements.popUpContainer.querySelector('.bubble-editor-placeholder')?.remove();
    }

    context.storedContent = null;
}
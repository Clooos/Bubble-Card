import { changeEditor, changeStyle, changeTriggered, syncHeaderVisibilityClasses } from './changes.js';
import { createHeader, createStructure, prepareStructure, prepareStandaloneStructure, renderHeaderButton } from './create.js';
import { cleanupPopupRuntime, registerPopupContext, syncPopupOpenStateWithLocation } from './helpers.js';
import { initPopUpHashNavigationBridge, registerPopUpHash } from "./navigation-picker-bridge.js";
import { cleanupPopUpCards, handlePopUpCards, scheduleStandalonePopUpCardPrewarm } from './cards/index.js';
import { isStandalonePopUpConfig } from './migration.js';

initPopUpHashNavigationBridge();

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

function shouldRefreshHeader(context) {
    if (!context.elements?.header) {
        return false;
    }

    const entity = context.config?.entity || '';
    const entityState = entity ? context._hass?.states?.[entity] : null;
    const locale = context._hass?.locale;
    const unitSystem = context._hass?.config?.unit_system;
    const isEditing = !!(context.editor || context.detectedEditor);

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

function initializeStandalonePopUp(context) {
    prepareStandaloneStructure(context);
    if (!context.popUp) return;

    createHeader(context);
    createStructure(context);
    changeStyle(context);

    renderHeaderButton(context);
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
    changeStyle(context);

    if (context.config.background_update && !context.headerInitialized) {
        renderHeaderButton(context);
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
            scheduleStandalonePopUpCardPrewarm(context);
        } else {
            initializeLegacyPopUp(context);
        }
        return;
    }

    if (!context.popUp || !context.elements) {
        return;
    }

    changeStyle(context);

    // Keep the popup registered in the shared URL dispatcher.
    registerPopupContext(context);

    if (!context.editor && !context.detectedEditor) {
        syncPopupOpenStateWithLocation(context, true);
    }

    // Refresh the header when the popup is active or being edited.
    const shouldUpdateHeader = context.config.hash === location.hash || 
                               context.editor || 
                               (context.config.background_update && !context.headerInitialized);

    if (shouldUpdateHeader && shouldRefreshHeader(context)) {
        renderHeaderButton(context);

        if (context.config.background_update) {
            context.headerInitialized = true;
        }
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

    if (context.elements?.popUpContainer) {
        context.elements.popUpContainer.classList.remove('has-placeholder');
        context.elements.popUpContainer.querySelector('.bubble-editor-placeholder')?.remove();
    }

    context.storedContent = null;
}
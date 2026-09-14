// Mirrors HA's `_normalizeEffective` from its dirty state provider mixin: the
// dialog compares `normalizedInitial` with `effectiveNormalize(current)` to
// decide whether closing needs the "unsaved changes" prompt. A raw baseline
// would never match its own normalized form, so cancelling would prompt again
// on every "Leave" and trap the user in the pop-up editor.
function normalizeDialogBaseline(dialog, config) {
    try {
        const normalize = dialog?._effectiveNormalize;
        return typeof normalize === 'function' ? normalize(config) : config;
    } catch (_) {
        return config;
    }
}

export function forceDialogDirtyState(dialog, originalConfig) {
    if (!dialog || !originalConfig) {
        return false;
    }

    try {
        const slices = dialog._dirtySlices;
        if (!(slices instanceof Map)) {
            return false;
        }

        const slice = slices.get('__default__');
        if (!slice) {
            return false;
        }

        slice.initial = JSON.parse(JSON.stringify(originalConfig));
        // Normalize a separate clone so the two baselines never share references.
        slice.normalizedInitial = normalizeDialogBaseline(
            dialog,
            JSON.parse(JSON.stringify(originalConfig))
        );

        if (typeof dialog._publishContext === 'function') {
            dialog._publishContext();
        }

        return true;
    } catch (_) {
        return false;
    }
}

export function bridgeDialogCloseToParent(dialog, reopenParent) {
    if (!dialog || typeof reopenParent !== 'function') {
        return () => {};
    }

    const hadOwnCloseDialog = Object.prototype.hasOwnProperty.call(dialog, 'closeDialog');
    const originalCloseDialog = dialog.closeDialog;

    const restoreOriginalCloseDialog = () => {
        if (dialog.closeDialog !== interceptedCloseDialog) {
            return;
        }

        if (hadOwnCloseDialog) {
            dialog.closeDialog = originalCloseDialog;
        } else {
            delete dialog.closeDialog;
        }
    };

    function callOriginalCloseDialog(...args) {
        return typeof originalCloseDialog === 'function'
            ? originalCloseDialog.call(dialog, ...args)
            : false;
    }

    function interceptedCloseDialog(...args) {
        restoreOriginalCloseDialog();

        const didClose = callOriginalCloseDialog(...args);

        if (!didClose) {
            return false;
        }

        reopenParent();
        return true;
    }

    dialog.closeDialog = interceptedCloseDialog;

    return restoreOriginalCloseDialog;
}

export function getDialogCardElementEditor(dialog) {
    if (!dialog) {
        return null;
    }

    try {
        if (dialog.tagName?.toLowerCase?.() === 'hui-card-element-editor') {
            return dialog;
        }

        return dialog.shadowRoot?.querySelector?.('hui-card-element-editor')
            || dialog.querySelector?.('hui-card-element-editor')
            || null;
    } catch (_) {
        return null;
    }
}

function setEditorProperty(editor, property, value) {
    try {
        if (editor[property] === value) {
            return false;
        }

        editor[property] = value;
        return true;
    } catch (_) {
        return false;
    }
}

function clearEditorProperty(editor, property) {
    try {
        if (!(property in editor) && !Object.prototype.hasOwnProperty.call(editor, property)) {
            return false;
        }

        return setEditorProperty(editor, property, undefined);
    } catch (_) {
        return false;
    }
}

export function restoreCardElementEditorVisualState(cardElementEditor) {
    if (!cardElementEditor) {
        return false;
    }

    let changed = false;

    changed = setEditorProperty(cardElementEditor, '_GUImode', true) || changed;
    changed = setEditorProperty(cardElementEditor, 'GUImode', true) || changed;
    changed = setEditorProperty(cardElementEditor, '_guiMode', true) || changed;
    changed = setEditorProperty(cardElementEditor, 'guiMode', true) || changed;
    changed = clearEditorProperty(cardElementEditor, '_yamlError') || changed;
    changed = clearEditorProperty(cardElementEditor, '_subElementEditorConfig') || changed;
    changed = setEditorProperty(cardElementEditor, '_currTab', 'config') || changed;

    if (changed && typeof cardElementEditor.requestUpdate === 'function') {
        try {
            cardElementEditor.requestUpdate();
        } catch (_) {}
    }

    return true;
}

export function restoreDialogCardEditorVisualState(dialog) {
    return restoreCardElementEditorVisualState(getDialogCardElementEditor(dialog));
}

function getCandidateConfig(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return null;
    }

    return value;
}

function addConfigCandidate(candidates, value) {
    const config = getCandidateConfig(value);
    if (config && !candidates.includes(config)) {
        candidates.push(config);
    }
}

function addElementConfigCandidates(candidates, element) {
    if (!element) {
        return;
    }

    addConfigCandidate(candidates, element._config);
    addConfigCandidate(candidates, element.config);
    addConfigCandidate(candidates, element._cardConfig);
    addConfigCandidate(candidates, element.cardConfig);
    addConfigCandidate(candidates, element.value);
}

function collectCardElementEditors(root, editors, maxDepth = 6) {
    if (!root || maxDepth < 0) {
        return;
    }

    try {
        const direct = root.querySelectorAll?.('hui-card-element-editor') || [];
        for (const editor of direct) {
            if (!editors.includes(editor)) {
                editors.push(editor);
            }
        }

        const all = root.querySelectorAll?.('*') || [];
        for (const element of all) {
            if (element?.shadowRoot) {
                collectCardElementEditors(element.shadowRoot, editors, maxDepth - 1);
            }
        }
    } catch (_) {}
}

function collectConfigCarrierElements(root, carriers, maxDepth = 6) {
    if (!root || maxDepth < 0) {
        return;
    }

    try {
        if (root.nodeType === 1 && !carriers.includes(root)) {
            carriers.push(root);
        }

        const all = root.querySelectorAll?.('*') || [];
        for (const element of all) {
            if (!carriers.includes(element)) {
                carriers.push(element);
            }

            if (element?.shadowRoot) {
                collectConfigCarrierElements(element.shadowRoot, carriers, maxDepth - 1);
            }
        }
    } catch (_) {}
}

function rootMatchesPopupConfig(rootConfig, popupConfig) {
    if (!rootConfig || !popupConfig || typeof rootConfig !== 'object' || typeof popupConfig !== 'object') {
        return false;
    }

    if (rootConfig === popupConfig || configsAreEqual(rootConfig, popupConfig)) {
        return true;
    }

    const rootHash = normalizeHash(rootConfig.hash);
    const popupHash = normalizeHash(popupConfig.hash);
    return Boolean(
        rootHash &&
        popupHash &&
        rootHash === popupHash &&
        rootConfig.card_type === popupConfig.card_type &&
        rootConfig.card_type === 'pop-up'
    );
}

function isTransientSinglePopupGridWrapper(candidate, popupConfig, popupPath) {
    return Boolean(
        candidate?.type === 'grid' &&
        Array.isArray(candidate.cards) &&
        candidate.cards.length === 1 &&
        Array.isArray(popupPath) &&
        popupPath.length === 2 &&
        popupPath[0] === 'cards' &&
        popupPath[1] === 0 &&
        rootMatchesPopupConfig(candidate.cards[0], popupConfig)
    );
}

function scoreDialogConfigCandidate(candidate, popupConfig) {
    if (!candidate || typeof candidate !== 'object') {
        return -1;
    }

    if (!popupConfig) {
        return 1;
    }

    const popupPath = findConfigPath(candidate, popupConfig);
    if (Array.isArray(popupPath)) {
        if (isTransientSinglePopupGridWrapper(candidate, popupConfig, popupPath)) {
            // HA's standalone child-card proxy uses a temporary single-card grid.
            // When the popup itself is the dialog root, selecting that wrapper
            // would persist `type: grid` around the popup on every add/edit.
            return 50;
        }

        // Prefer the nearest live containing card over higher wrappers.
        // Some custom stack editors expose both the real stack config and a
        // temporary HA grid/section wrapper; picking the deepest root would
        // persist that wrapper and nest another grid on every child edit.
        return popupPath.length > 0 ? 1000 - popupPath.length : 100;
    }

    return rootMatchesPopupConfig(candidate, popupConfig) ? 100 : -1;
}

export function getDialogLiveCardConfig(dialog, popupConfig) {
    const candidates = [];

    addConfigCandidate(candidates, dialog?._params?.cardConfig);
    addElementConfigCandidates(candidates, dialog);
    addElementConfigCandidates(candidates, getDialogCardElementEditor(dialog));

    const editors = [];
    collectCardElementEditors(dialog?.shadowRoot, editors);
    collectCardElementEditors(dialog, editors);
    for (const editor of editors) {
        addElementConfigCandidates(candidates, editor);
    }

    const configCarriers = [];
    collectConfigCarrierElements(dialog?.shadowRoot, configCarriers);
    collectConfigCarrierElements(dialog, configCarriers);
    for (const element of configCarriers) {
        addElementConfigCandidates(candidates, element);
    }

    let bestCandidate = null;
    let bestScore = -1;

    for (const candidate of candidates) {
        const score = scoreDialogConfigCandidate(candidate, popupConfig);
        if (score > bestScore) {
            bestScore = score;
            bestCandidate = candidate;
        }
    }

    return bestScore >= 0 ? bestCandidate : null;
}

export function createStandaloneParentDialogParamsFromDialog(dialog, popupConfig) {
    const params = dialog?._params;
    if (!params) {
        return null;
    }

    const liveCardConfig = getDialogLiveCardConfig(dialog, popupConfig);
    const dialogParams = liveCardConfig && liveCardConfig !== params.cardConfig
        ? { ...params, cardConfig: liveCardConfig }
        : params;

    return createStandaloneParentDialogParams(dialogParams, popupConfig);
}

import { cloneConfig, normalizeHash, serializeConfig, createConfigComparator, configsAreEqual, getConfigMatchScore, getConfigAtPath, replaceConfigAtPath, findConfigPath } from './config-path.js';
export { getConfigAtPath, replaceConfigAtPath, findConfigPath } from './config-path.js';
function mergeWithOriginalPopupConfig(parentDialogParams, popupConfig) {
    const originalPopupConfig = parentDialogParams?._standalonePopupConfig;
    if (originalPopupConfig && popupConfig && originalPopupConfig.card_type && !popupConfig.card_type) {
        return {
            ...originalPopupConfig,
            ...popupConfig,
        };
    }

    return popupConfig;
}

export function createStandaloneParentDialogParams(dialogParams, popupConfig) {
    if (!dialogParams) {
        return null;
    }

    const popupCardConfig = popupConfig || dialogParams.cardConfig || {};
    const dialogCardConfig = dialogParams.cardConfig || popupCardConfig;

    // Fast path: popup IS the dialog's top-level card (most common case).
    // Clone the original config snapshot so it survives in-place mutations
    // from child card editors.
    if (dialogCardConfig === popupCardConfig || dialogCardConfig.card_type === 'pop-up') {
        return {
            ...dialogParams,
            cardConfig: popupCardConfig,
            _originalCardConfig: cloneConfig(popupCardConfig),
            _standalonePopupConfig: cloneConfig(popupCardConfig),
            _standalonePopupPathInDialog: [],
        };
    }

    // Popup is nested inside another card (e.g., stack). Find its path.
    const popupPathInDialog = findConfigPath(dialogCardConfig, popupCardConfig) || [];

    if (popupPathInDialog.length === 0) {
        // Path not found - fall back to popup config directly.
        return {
            ...dialogParams,
            cardConfig: popupCardConfig,
            _originalCardConfig: cloneConfig(popupCardConfig),
            _standalonePopupConfig: cloneConfig(popupCardConfig),
            _standalonePopupPathInDialog: [],
        };
    }

    // Nested popup: clone the popup config for the cached reference.
    // The dialogCardConfig is kept as-is (no clone) - it's read-only.
    return {
        ...dialogParams,
        cardConfig: dialogCardConfig,
        _originalCardConfig: cloneConfig(dialogCardConfig),
        _standalonePopupConfig: cloneConfig(popupCardConfig),
        _standalonePopupPathInDialog: popupPathInDialog,
    };
}

export function createReopenedStandaloneParentDialogParams(parentDialogParams, popupConfig) {
    if (!parentDialogParams) {
        return null;
    }

    const popupPathInDialog = parentDialogParams._standalonePopupPathInDialog;
    const nextPopupConfig = mergeWithOriginalPopupConfig(parentDialogParams, popupConfig || parentDialogParams.cardConfig || {});

    // Fast path: popup is the top-level card - no clone needed.
    if (!Array.isArray(popupPathInDialog) || popupPathInDialog.length === 0) {
        return {
            ...parentDialogParams,
            cardConfig: nextPopupConfig,
        };
    }

    // Nested popup: clone root config only once, then replace at path.
    const rootCardConfig = parentDialogParams.cardConfig || parentDialogParams._originalCardConfig || {};
    const cardConfig = replaceConfigAtPath(rootCardConfig, popupPathInDialog, nextPopupConfig);

    return {
        ...parentDialogParams,
        cardConfig,
    };
}

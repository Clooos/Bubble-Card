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

function scoreDialogConfigCandidate(candidate, popupConfig) {
    if (!candidate || typeof candidate !== 'object') {
        return -1;
    }

    if (!popupConfig) {
        return 1;
    }

    const popupPath = findConfigPath(candidate, popupConfig);
    if (Array.isArray(popupPath)) {
        // Prefer the live containing card (vertical-stack, grid, etc.) over the
        // popup itself so unsaved parent wrappers are not lost when reopening.
        return popupPath.length > 0 ? 1000 + popupPath.length : 100;
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

function cloneConfig(value) {
    if (value === undefined) {
        return undefined;
    }

    if (typeof structuredClone === 'function') {
        return structuredClone(value);
    }

    return JSON.parse(JSON.stringify(value));
}

function normalizeHash(value) {
    if (typeof value !== 'string') {
        return '';
    }

    const trimmed = value.trim();
    if (!trimmed) {
        return '';
    }

    return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
}

function configsAreEqual(left, right) {
    if (left === right) {
        return true;
    }

    // Quick rejection: if both have a hash, they must match.
    const leftHash = normalizeHash(left?.hash);
    const rightHash = normalizeHash(right?.hash);
    if (leftHash && rightHash && leftHash !== rightHash) {
        return false;
    }

    try {
        return JSON.stringify(left) === JSON.stringify(right);
    } catch (_) {
        return false;
    }
}

function getConfigMatchScore(candidate, target) {
    if (!candidate || !target || typeof candidate !== 'object' || typeof target !== 'object') {
        return -1;
    }

    if (configsAreEqual(candidate, target)) {
        return 1000;
    }

    let score = 0;

    if (candidate.type && candidate.type === target.type) {
        score += 10;
    }

    if (candidate.card_type && candidate.card_type === target.card_type) {
        score += 10;
    }

    const candidateHash = normalizeHash(candidate.hash);
    const targetHash = normalizeHash(target.hash);
    if (candidateHash && targetHash) {
        if (candidateHash !== targetHash) {
            return -1;
        }
        score += 100;
    }

    if (candidate.entity && candidate.entity === target.entity) {
        score += 8;
    }

    if (candidate.name && candidate.name === target.name) {
        score += 4;
    }

    if (candidate.icon && candidate.icon === target.icon) {
        score += 2;
    }

    return score > 0 ? score : -1;
}

export function getConfigAtPath(config, path = []) {
    if (!Array.isArray(path)) {
        return undefined;
    }

    let target = config;
    for (const segment of path) {
        if (target === undefined || target === null) {
            return undefined;
        }
        target = target[segment];
    }

    return target;
}

export function replaceConfigAtPath(config, path, nextValue) {
    if (!Array.isArray(path) || path.length === 0) {
        return cloneConfig(nextValue);
    }

    const clonedConfig = cloneConfig(config);
    let target = clonedConfig;

    for (let index = 0; index < path.length - 1; index += 1) {
        target = target?.[path[index]];
        if (target === undefined) {
            return clonedConfig;
        }
    }

    target[path[path.length - 1]] = cloneConfig(nextValue);
    return clonedConfig;
}

export function findConfigPath(rootConfig, targetConfig) {
    // Fast path: if the root IS the target (same reference or same hash), no traversal needed.
    if (rootConfig === targetConfig) return null;
    if (rootConfig?.card_type === targetConfig?.card_type && rootConfig?.card_type === 'pop-up') {
        const rHash = normalizeHash(rootConfig.hash);
        const tHash = normalizeHash(targetConfig.hash);
        if (rHash && tHash && rHash === tHash) return null;
    }

    let bestPath = null;
    let bestScore = -1;

    // Target hash for O(1) rejection during traversal.
    const targetHash = normalizeHash(targetConfig?.hash);
    const targetCardType = targetConfig?.card_type || targetConfig?.type;

    const visit = (node, path) => {
        if (!node || typeof node !== 'object') {
            return;
        }

        // Hash-based fast match: if node has the same hash as target, it's a direct hit.
        if (targetHash) {
            const nodeHash = normalizeHash(node.hash);
            if (nodeHash && nodeHash === targetHash) {
                // Same hash = same popup. Check card_type too for safety.
                if (!targetCardType || node.card_type === targetCardType || node.type === targetCardType) {
                    const s = 1000;
                    if (s > bestScore) {
                        bestScore = s;
                        bestPath = path;
                    }
                    return; // Early termination - hash match is definitive.
                }
            }
            // If node has a different hash, skip deep scoring.
            if (nodeHash && nodeHash !== targetHash) {
                // Still need to visit children (target could be nested inside).
            }
        }

        // Quick rejection: if target has a known card_type/type, skip nodes that can't match.
        if (targetCardType && node.type !== targetCardType && node.card_type !== targetCardType) {
            // Only skip leaf-like nodes; still traverse containers.
            const isContainer = Array.isArray(node) ||
                (typeof node.cards === 'object') ||
                (typeof node.card === 'object') ||
                (typeof node.view === 'object') ||
                (typeof node.views === 'object');
            if (!isContainer) return;
        }

        const score = getConfigMatchScore(node, targetConfig);
        if (score > bestScore) {
            bestScore = score;
            bestPath = path;
        }

        if (Array.isArray(node)) {
            const newPath = path ? path.concat([node.length]) : [node.length];
            // Use index-based path properly.
            for (let i = 0; i < node.length; i++) {
                const childPath = path ? path.slice() : [];
                childPath.push(i);
                visit(node[i], childPath);
            }
            return;
        }

        const entries = Object.entries(node);
        for (let i = 0; i < entries.length; i++) {
            const [key, value] = entries[i];
            if (value && typeof value === 'object') {
                const childPath = path ? path.slice() : [];
                childPath.push(key);
                visit(value, childPath);
            }
        }
    };

    visit(rootConfig, []);

    return bestScore >= 0 ? bestPath : null;
}

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
    // No clone needed - reuse references; HA dialog won't mutate these in place.
    if (dialogCardConfig === popupCardConfig || dialogCardConfig.card_type === 'pop-up') {
        return {
            ...dialogParams,
            cardConfig: popupCardConfig,
            _originalCardConfig: popupCardConfig,
            _standalonePopupConfig: popupCardConfig,
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
            _originalCardConfig: popupCardConfig,
            _standalonePopupConfig: popupCardConfig,
            _standalonePopupPathInDialog: [],
        };
    }

    // Nested popup: clone the popup config for the cached reference.
    // The dialogCardConfig is kept as-is (no clone) - it's read-only.
    return {
        ...dialogParams,
        cardConfig: dialogCardConfig,
        _originalCardConfig: dialogCardConfig,
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
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
    let bestPath = null;
    let bestScore = -1;

    const visit = (node, path = []) => {
        if (!node || typeof node !== 'object') {
            return;
        }

        const score = getConfigMatchScore(node, targetConfig);
        if (score > bestScore) {
            bestScore = score;
            bestPath = path;
        }

        if (Array.isArray(node)) {
            node.forEach((child, index) => visit(child, [...path, index]));
            return;
        }

        Object.entries(node).forEach(([key, value]) => {
            if (value && typeof value === 'object') {
                visit(value, [...path, key]);
            }
        });
    };

    visit(rootConfig);

    return bestScore >= 0 ? bestPath : null;
}

function mergeWithOriginalPopupConfig(parentDialogParams, popupConfig) {
    const originalPopupConfig = parentDialogParams?._standalonePopupConfig;
    if (originalPopupConfig && popupConfig && originalPopupConfig.card_type && !popupConfig.card_type) {
        return {
            ...cloneConfig(originalPopupConfig),
            ...cloneConfig(popupConfig),
        };
    }

    return cloneConfig(popupConfig);
}

export function createStandaloneParentDialogParams(dialogParams, popupConfig) {
    if (!dialogParams) {
        return null;
    }

    const popupCardConfig = cloneConfig(popupConfig || dialogParams.cardConfig || {});
    const dialogCardConfig = dialogParams.cardConfig || popupCardConfig;
    const popupPathInDialog = findConfigPath(dialogCardConfig, popupCardConfig) || [];
    const isNestedPopup = popupPathInDialog.length > 0;
    const cardConfig = cloneConfig(isNestedPopup ? dialogCardConfig : popupCardConfig);

    return {
        ...dialogParams,
        cardConfig,
        _originalCardConfig: cloneConfig(cardConfig),
        _standalonePopupConfig: popupCardConfig,
        _standalonePopupPathInDialog: popupPathInDialog,
    };
}

export function createReopenedStandaloneParentDialogParams(parentDialogParams, popupConfig) {
    if (!parentDialogParams) {
        return null;
    }

    const popupPathInDialog = parentDialogParams._standalonePopupPathInDialog;
    const nextPopupConfig = mergeWithOriginalPopupConfig(parentDialogParams, popupConfig || parentDialogParams.cardConfig || {});
    let cardConfig = nextPopupConfig;

    if (Array.isArray(popupPathInDialog) && popupPathInDialog.length > 0) {
        const rootCardConfig = parentDialogParams.cardConfig || parentDialogParams._originalCardConfig || {};
        cardConfig = replaceConfigAtPath(rootCardConfig, popupPathInDialog, nextPopupConfig);
    }

    return {
        ...parentDialogParams,
        cardConfig,
    };
}
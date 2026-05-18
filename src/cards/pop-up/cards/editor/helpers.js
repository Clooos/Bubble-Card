import { fireEvent } from '../../../../tools/utils.js';

export function createEditorActions(context, rebuildCards) {
    const updateCards = (updater) => {
        const cards = [...(context.config.cards || [])];
        const updated = updater(cards);

        context.config = { ...context.config, cards: updated };
        if (typeof context._standaloneCardsUpdater === 'function') {
            context._standaloneCardsUpdater(updated);
        } else {
            fireEvent(context, 'config-changed', { config: context.config });
        }

        rebuildCards();
    };

    return {
        addCard: () => _addCardDialog(context),
        copyCard: (index) => _copyCard(context, index),
        duplicateCard: (index) => {
            updateCards((cards) => {
                const cardConfig = cards[index];
                if (cardConfig) {
                    cards.splice(index + 1, 0, { ...cardConfig });
                }
                return cards;
            });
        },
        editCard: (index) => _editCardDialog(context, index),
        moveCard: (oldIndex, newIndex) => {
            updateCards((cards) => {
                const [moved] = cards.splice(oldIndex, 1);
                cards.splice(newIndex, 0, moved);
                return cards;
            });
        },
        updateCardGridOptions: (index, cardConfig) => {
            updateCards((cards) => {
                if (cards[index] !== undefined) {
                    cards.splice(index, 1, cardConfig);
                }
                return cards;
            });
        },
        removeCard: (index) => {
            updateCards((cards) => {
                cards.splice(index, 1);
                return cards;
            });
        },
    };
}

function _copyCard(context, index) {
    const cards = context.config.cards || [];
    const cardConfig = cards[index];
    if (!cardConfig) return;

    _copyCardToDashboardClipboard(context, index, cardConfig);
}

async function _copyCardToDashboardClipboard(context, index, fallbackCardConfig) {
    const homeAssistant = document.querySelector('body > home-assistant');
    if (!homeAssistant) {
        _writeClipboardFallback(fallbackCardConfig);
        return;
    }

    const sectionConfig = {
        type: 'grid',
        cards: [...(context.config.cards || [])],
    };

    const proxySection = document.createElement('hui-section');
    proxySection.style.display = 'none';
    proxySection.hass = context._hass;
    proxySection.index = 0;
    proxySection.viewIndex = 0;
    proxySection.config = sectionConfig;
    proxySection.lovelace = {
        config: {
            views: [
                {
                    path: 'bubble-card-standalone',
                    title: 'Bubble Card',
                    sections: [sectionConfig],
                },
            ],
        },
        editMode: true,
        saveConfig: async () => {},
    };

    homeAssistant.appendChild(proxySection);

    try {
        if (typeof proxySection._initializeConfig === 'function') {
            await proxySection._initializeConfig();
        }
        await proxySection.updateComplete;

        const layoutElement = proxySection._layoutElement;
        if (!layoutElement) {
            _writeClipboardFallback(fallbackCardConfig);
            return;
        }

        layoutElement.dispatchEvent(new CustomEvent('ll-copy-card', {
            bubbles: true,
            composed: true,
            detail: { path: [0, 0, index] },
        }));
    } catch (error) {
        console.warn('Bubble Card: Failed to copy card through HA clipboard proxy', error);
        _writeClipboardFallback(fallbackCardConfig);
    } finally {
        setTimeout(() => proxySection.remove(), 0);
    }
}

function _writeClipboardFallback(cardConfig) {
    try {
        const clonedConfig = typeof structuredClone === 'function'
            ? structuredClone(cardConfig)
            : JSON.parse(JSON.stringify(cardConfig));
        sessionStorage.setItem('dashboardCardClipboard', JSON.stringify(clonedConfig));
    } catch (error) {
        console.warn('Bubble Card: Failed to copy card to dashboard clipboard', error);
    }
}

function _editCardDialog(context, index) {
    if (!context.config.cards?.[index]) return;

    const standaloneDialogOpener = _getStandaloneDialogOpener(context);
    if (!standaloneDialogOpener) {
        console.warn('Bubble Card: standalone pop-up editor unavailable for nested card edit');
        return;
    }

    return standaloneDialogOpener({ type: 'edit', index });
}

function _addCardDialog(context) {
    const standaloneDialogOpener = _getStandaloneDialogOpener(context);
    if (!standaloneDialogOpener) {
        console.warn('Bubble Card: standalone pop-up editor unavailable for nested card creation');
        return;
    }

    return standaloneDialogOpener({ type: 'add' });
}

function _getStandaloneDialogOpener(context) {
    if (context?.isConnected === false) {
        return null;
    }

    if (context?.isConnected !== false && typeof context._standaloneOpenCardDialog === 'function') {
        return context._standaloneOpenCardDialog.bind(context);
    }

    const registeredOpener = _getRegisteredStandaloneDialogOpener(context);
    if (registeredOpener) {
        return registeredOpener;
    }

    try {
        const dialog = document.querySelector('body > home-assistant')
            ?.shadowRoot?.querySelector('hui-dialog-edit-card');
        const standaloneEditor = _deepQuerySelector(dialog?.shadowRoot, 'bubble-card-editor');

        if (_scoreStandaloneEditor(standaloneEditor, context) >= 0) {
            return standaloneEditor._openStandaloneCardDialog.bind(standaloneEditor);
        }
    } catch (_) {
        // no-op
    }

    return null;
}

function _getRegisteredStandaloneDialogOpener(context) {
    if (typeof window === 'undefined') {
        return null;
    }

    const editors = window.__bubbleCardEditorInstances;
    if (!editors || typeof editors[Symbol.iterator] !== 'function') {
        return null;
    }

    let bestEditor = null;
    let bestScore = -1;

    for (const editor of editors) {
        const score = _scoreStandaloneEditor(editor, context);
        if (score > bestScore) {
            bestScore = score;
            bestEditor = editor;
        }
    }

    return bestEditor && bestScore >= 0
        ? bestEditor._openStandaloneCardDialog.bind(bestEditor)
        : null;
}

function _scoreStandaloneEditor(editor, context) {
    if (!editor || editor.isConnected === false || typeof editor._openStandaloneCardDialog !== 'function') {
        return -1;
    }

    const editorConfig = editor._config || {};
    const popupConfig = context?.config || {};
    if (editorConfig.card_type !== 'pop-up' || !Array.isArray(editorConfig.cards)) {
        return -1;
    }

    let score = 1;
    if (editor._previewCardHost && editor._previewCardHost === context) {
        score += 50;
    }

    const editorHash = _normalizeHash(editorConfig.hash);
    const popupHash = _normalizeHash(popupConfig.hash);
    if (editorHash && popupHash) {
        if (editorHash !== popupHash) {
            return -1;
        }
        score += 100;
    }

    if (editorConfig.cards === popupConfig.cards) {
        score += 20;
    }

    if (editorConfig.name && editorConfig.name === popupConfig.name) {
        score += 4;
    }

    if (editorConfig.icon && editorConfig.icon === popupConfig.icon) {
        score += 2;
    }

    return score;
}

function _normalizeHash(value) {
    if (typeof value !== 'string') {
        return '';
    }

    const trimmed = value.trim();
    if (!trimmed) {
        return '';
    }

    return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
}

function _deepQuerySelector(root, selector, maxDepth = 6) {
    if (!root || maxDepth < 0) {
        return null;
    }

    const direct = root.querySelector?.(selector);
    if (direct) {
        return direct;
    }

    const all = root.querySelectorAll?.('*') || [];
    for (const el of all) {
        if (el?.shadowRoot) {
            const found = _deepQuerySelector(el.shadowRoot, selector, maxDepth - 1);
            if (found) {
                return found;
            }
        }
    }

    return null;
}
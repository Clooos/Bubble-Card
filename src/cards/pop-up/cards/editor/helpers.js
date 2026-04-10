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

    standaloneDialogOpener({ type: 'edit', index });
}

function _addCardDialog(context) {
    const standaloneDialogOpener = _getStandaloneDialogOpener(context);
    if (!standaloneDialogOpener) {
        console.warn('Bubble Card: standalone pop-up editor unavailable for nested card creation');
        return;
    }

    standaloneDialogOpener({ type: 'add' });
}

function _getStandaloneDialogOpener(context) {
    if (typeof context._standaloneOpenCardDialog === 'function') {
        return context._standaloneOpenCardDialog.bind(context);
    }

    try {
        const dialog = document.querySelector('body > home-assistant')
            ?.shadowRoot?.querySelector('hui-dialog-edit-card');
        const cardElementEditor = dialog?.shadowRoot?.querySelector('hui-card-element-editor');
        const standaloneEditor = cardElementEditor?.shadowRoot?.querySelector('bubble-card-editor');

        if (typeof standaloneEditor?._openStandaloneCardDialog === 'function') {
            return standaloneEditor._openStandaloneCardDialog.bind(standaloneEditor);
        }
    } catch (_) {
        // no-op
    }

    return null;
}
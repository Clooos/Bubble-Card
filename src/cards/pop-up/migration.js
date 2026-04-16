import { html } from 'lit';
import { isHashOnCurrentPage } from './navigation-picker-bridge.js';

const POPUP_GRID_COLUMN_COUNT = 12;

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
        return null;
    }

    const trimmed = value.trim();
    if (!trimmed) {
        return null;
    }

    return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
}

function getPopupMatchScore(candidate, popupConfig, preferredHash) {
    if (!candidate || typeof candidate !== 'object') {
        return -1;
    }

    if (!isLegacyPopUpConfig(candidate)) {
        return -1;
    }

    const targetHash = normalizeHash(preferredHash) || normalizeHash(popupConfig?.hash);
    const candidateHash = normalizeHash(candidate.hash);

    if (targetHash && candidateHash) {
        return candidateHash === targetHash ? 100 : -1;
    }

    let score = 0;

    if (popupConfig?.entity && candidate.entity === popupConfig.entity) {
        score += 8;
    }

    if (popupConfig?.name && candidate.name === popupConfig.name) {
        score += 4;
    }

    if (popupConfig?.icon && candidate.icon === popupConfig.icon) {
        score += 2;
    }

    if (candidate.type === popupConfig?.type) {
        score += 1;
    }

    return score > 0 ? score : -1;
}

function findLegacyPopUpStackEntry(node, popupConfig, preferredHash, path = []) {
    if (!node || typeof node !== 'object') {
        return null;
    }

    if (Array.isArray(node)) {
        for (let index = 0; index < node.length; index += 1) {
            const match = findLegacyPopUpStackEntry(node[index], popupConfig, preferredHash, [...path, index]);
            if (match) {
                return match;
            }
        }
        return null;
    }

    if (node.type === 'vertical-stack' && Array.isArray(node.cards)) {
        let bestIndex = -1;
        let bestScore = -1;

        node.cards.forEach((cardConfig, index) => {
            const score = getPopupMatchScore(cardConfig, popupConfig, preferredHash);
            if (score > bestScore) {
                bestScore = score;
                bestIndex = index;
            }
        });

        if (bestIndex !== -1) {
            return {
                stackConfig: node,
                stackPath: path,
                popupIndex: bestIndex,
            };
        }
    }

    for (const [key, value] of Object.entries(node)) {
        if (!value || typeof value !== 'object') {
            continue;
        }

        const match = findLegacyPopUpStackEntry(value, popupConfig, preferredHash, [...path, key]);
        if (match) {
            return match;
        }
    }

    return null;
}

export function isLegacyPopUpConfig(config) {
    return !!(
        config &&
        config.type === 'custom:bubble-card' &&
        config.card_type === 'pop-up' &&
        !Array.isArray(config.cards)
    );
}

export function isStandalonePopUpConfig(config) {
    return !!(
        config &&
        config.type === 'custom:bubble-card' &&
        config.card_type === 'pop-up' &&
        Array.isArray(config.cards)
    );
}

function isHorizontalStackCard(cardConfig) {
    return cardConfig?.type === 'horizontal-stack' && Array.isArray(cardConfig.cards) && cardConfig.cards.length > 0;
}

function stripMigratedCardColumns(cardConfig) {
    const nextCardConfig = cloneConfig(cardConfig) || {};

    delete nextCardConfig.columns;

    if (nextCardConfig.grid_options) {
        delete nextCardConfig.grid_options.columns;
        delete nextCardConfig.grid_options.max_columns;
        delete nextCardConfig.grid_options.min_columns;

        if (Object.keys(nextCardConfig.grid_options).length === 0) {
            delete nextCardConfig.grid_options;
        }
    }

    if (nextCardConfig.layout_options) {
        delete nextCardConfig.layout_options;
    }

    return nextCardConfig;
}

function distributeHorizontalStackColumns(cardCount) {
    if (!Number.isInteger(cardCount) || cardCount <= 0 || cardCount > POPUP_GRID_COLUMN_COUNT) {
        return null;
    }

    const baseColumns = Math.floor(POPUP_GRID_COLUMN_COUNT / cardCount);
    const remainder = POPUP_GRID_COLUMN_COUNT % cardCount;

    return Array.from({ length: cardCount }, (_, index) => baseColumns + (index < remainder ? 1 : 0));
}

function applyHorizontalStackGridColumns(cardConfig, columns) {
    const nextCardConfig = stripMigratedCardColumns(cardConfig);

    nextCardConfig.grid_options = {
        ...(nextCardConfig.grid_options || {}),
        columns,
    };

    return nextCardConfig;
}

function normalizeLegacyContentCards(cards = [], options = {}) {
    return cards.flatMap((cardConfig) => {
        if (!options.convertHorizontalStacks || !isHorizontalStackCard(cardConfig)) {
            return [stripMigratedCardColumns(cardConfig)];
        }

        const assignedColumns = distributeHorizontalStackColumns(cardConfig.cards.length);
        if (!assignedColumns) {
            return [stripMigratedCardColumns(cardConfig)];
        }

        return cardConfig.cards.map((childCardConfig, index) => applyHorizontalStackGridColumns(childCardConfig, assignedColumns[index]));
    });
}

export function hasLegacyHorizontalStacks(cards = []) {
    return cards.some((cardConfig) => isHorizontalStackCard(cardConfig));
}

export function createStandalonePopUpConfig(popupConfig, cards = [], options = {}) {
    const standaloneConfig = cloneConfig(popupConfig) || {};
    standaloneConfig.cards = normalizeLegacyContentCards(cards, options);
    return standaloneConfig;
}

export function findLegacyPopUpStack(lovelaceConfig, popupConfig, options = {}) {
    if (!isLegacyPopUpConfig(popupConfig)) {
        return null;
    }

    const legacyEntry = findLegacyPopUpStackEntry(
        lovelaceConfig,
        popupConfig,
        options.matchHash || null
    );

    if (!legacyEntry) {
        return null;
    }

    const contentCards = legacyEntry.stackConfig.cards
        .filter((_, index) => index !== legacyEntry.popupIndex)
        .map((cardConfig) => cloneConfig(cardConfig));

    return {
        ...legacyEntry,
        contentCards,
        standaloneConfig: createStandalonePopUpConfig(popupConfig, contentCards, options),
        standalonePath: legacyEntry.stackPath,
    };
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

export function migrateLegacyPopUpLovelaceConfig(lovelaceConfig, popupConfig, options = {}) {
    const legacyStack = findLegacyPopUpStack(lovelaceConfig, popupConfig, options);
    if (!legacyStack) {
        return null;
    }

    return {
        config: replaceConfigAtPath(lovelaceConfig, legacyStack.stackPath, legacyStack.standaloneConfig),
        popupConfig: legacyStack.standaloneConfig,
        popupPath: legacyStack.standalonePath,
        stackPath: legacyStack.stackPath,
        contentCards: legacyStack.contentCards,
        popupIndex: legacyStack.popupIndex,
    };
}

function createDialogEvent(type, detail) {
    const event = new Event(type, {
        bubbles: true,
        cancelable: false,
        composed: true,
    });
    event.detail = detail ?? {};
    return event;
}

function getHomeAssistantHost(editor) {
    return typeof editor?._getHomeAssistantHost === 'function'
        ? editor._getHomeAssistantHost()
        : null;
}

function getActiveEditCardDialog(editor) {
    return typeof editor?._getActiveEditCardDialog === 'function'
        ? editor._getActiveEditCardDialog()
        : null;
}

function getActiveLovelace(editor) {
    return typeof editor?._getActiveLovelace === 'function'
        ? editor._getActiveLovelace()
        : null;
}

function getActiveLovelaceConfig(editor) {
    return typeof editor?._getActiveLovelaceConfig === 'function'
        ? editor._getActiveLovelaceConfig()
        : null;
}

function getCurrentMigrationConfig(editor) {
    const hashInput = editor.shadowRoot?.querySelector('#hash-input');
    const hashValue = normalizeHash(hashInput?.value);
    if (!hashValue) {
        return editor._config;
    }

    return {
        ...editor._config,
        hash: hashValue,
    };
}

function getLegacyStandaloneMigration(editor, originalHash) {
    const lovelaceConfig = getActiveLovelaceConfig(editor);
    const popupConfig = getCurrentMigrationConfig(editor);

    if (!lovelaceConfig || !isLegacyPopUpConfig(popupConfig)) {
        return null;
    }

    const legacyStack = findLegacyPopUpStack(lovelaceConfig, popupConfig, {
        matchHash: originalHash,
    });

    if (!legacyStack) {
        return null;
    }

    return {
        lovelaceConfig,
        popupConfig,
        popupPath: legacyStack.standalonePath,
        stackPath: legacyStack.stackPath,
        contentCards: legacyStack.contentCards,
    };
}

function createStandaloneSaveCardConfig(editor, popupPath, fallbackConfig, fallbackLovelace) {
    return async (newCardConfig) => {
        const lovelace = getActiveLovelace(editor) || fallbackLovelace;
        if (!lovelace || typeof lovelace.saveConfig !== 'function') {
            return;
        }

        const sourceConfig = lovelace.rawConfig || lovelace.config || fallbackConfig;
        const updatedConfig = replaceConfigAtPath(sourceConfig, popupPath, newCardConfig);
        await lovelace.saveConfig(updatedConfig);
    };
}

function reopenStandalonePopUpEditor(editor, migration, lovelace) {
    const activeDialog = getActiveEditCardDialog(editor);
    const dialogParams = {
        lovelaceConfig: migration.config,
        cardConfig: migration.popupConfig,
        saveCardConfig: createStandaloneSaveCardConfig(editor, migration.popupPath, migration.config, lovelace),
    };

    if (activeDialog && typeof activeDialog.showDialog === 'function') {
        activeDialog.showDialog(dialogParams);
        return;
    }

    const homeAssistant = getHomeAssistantHost(editor);
    if (!homeAssistant) {
        return;
    }

    homeAssistant.dispatchEvent(createDialogEvent('show-dialog', {
        dialogTag: 'hui-dialog-edit-card',
        dialogImport: () => Promise.resolve(),
        dialogParams,
    }));
}

async function migrateLegacyPopUpToStandalone(editor, originalHash) {
    if (editor._legacyStandaloneMigrationBusy) {
        return;
    }

    const popupConfig = getCurrentMigrationConfig(editor);
    if (isHashOnCurrentPage(popupConfig?.hash, originalHash)) {
        editor._legacyStandaloneMigrationError = 'Choose a unique hash before migrating this pop-up.';
        editor.requestUpdate();
        return;
    }

    const lovelace = getActiveLovelace(editor);
    const migrationContext = getLegacyStandaloneMigration(editor, originalHash);

    if (!migrationContext) {
        editor._legacyStandaloneMigrationError = 'Unable to migrate this pop-up from the current dashboard editor.';
        editor.requestUpdate();
        return;
    }

    const migration = migrateLegacyPopUpLovelaceConfig(migrationContext.lovelaceConfig, migrationContext.popupConfig, {
        matchHash: originalHash,
        convertHorizontalStacks: editor._legacyStandaloneFlattenHorizontalStacks !== false,
    });

    if (!lovelace || typeof lovelace.saveConfig !== 'function' || !migration) {
        editor._legacyStandaloneMigrationError = 'Unable to migrate this pop-up from the current dashboard editor.';
        editor.requestUpdate();
        return;
    }

    editor._legacyStandaloneMigrationBusy = true;
    editor._legacyStandaloneMigrationError = '';
    editor.requestUpdate();

    try {
        await lovelace.saveConfig(migration.config);
        editor._config = migration.popupConfig;

        if (typeof lovelace.showToast === 'function') {
            lovelace.showToast({ message: 'Pop-up migrated to standalone.' });
        }

        reopenStandalonePopUpEditor(editor, migration, lovelace);
    } catch (error) {
        editor._legacyStandaloneMigrationError = error?.message || 'Failed to migrate this pop-up.';
        console.error('Bubble Card: failed to migrate legacy pop-up', error);
    } finally {
        editor._legacyStandaloneMigrationBusy = false;
        editor.requestUpdate();
    }
}

export function renderLegacyMigrationNotice(editor, originalHash) {
    const migration = getLegacyStandaloneMigration(editor, originalHash);
    if (!migration) {
        return '';
    }

    const isBusy = editor._legacyStandaloneMigrationBusy === true;
    const errorMessage = editor._legacyStandaloneMigrationError || '';
    const hasHorizontalStacks = hasLegacyHorizontalStacks(migration.contentCards);
    const flattenHorizontalStacks = editor._legacyStandaloneFlattenHorizontalStacks !== false;

    return html`
        <div class="bubble-info warning">
            <h4 class="bubble-section-title">
                <ha-icon icon="mdi:swap-horizontal-bold"></ha-icon>
                Legacy pop-up detected
            </h4>
            <div class="content">
                <p>This pop-up still uses the old vertical-stack wrapper. Migrate it to the standalone format to manage its content with the same drag-and-drop flow as a section view.</p>                ${hasHorizontalStacks ? html`
                    <p>Horizontal stacks were detected. Their cards will be converted so you can drag and drop them individually while keeping the same layout (this option can be disabled if needed).</p>
                    <ha-formfield>
                        <ha-switch
                            aria-label="Convert horizontal stacks to grid cards"
                            .checked=${flattenHorizontalStacks}
                            @change=${(event) => {
                                editor._legacyStandaloneFlattenHorizontalStacks = event.target.checked;
                                editor.requestUpdate();
                            }}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Convert horizontal stacks to grid cards</label>
                        </div>
                    </ha-formfield>
                ` : ''}
                <div class="bubble-info warning bubble-sub-warning">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:alert-octagon-outline"></ha-icon>
                        Beta rollback warning
                    </h4>
                    <div class="content">
                        <p><b>This migration is permanent.</b> Even though it has been tested to handle all known legacy cases, I still recommend keeping a backup if you may want to roll back to v3.1.6 later.</p>
                    </div>
                </div>
                ${errorMessage ? html`<p>${errorMessage}</p>` : ''}
                <button class="icon-button ${isBusy ? 'disabled' : ''}" ?disabled=${isBusy} @click=${() => migrateLegacyPopUpToStandalone(editor, originalHash)}>
                    <ha-icon icon="mdi:swap-horizontal-bold"></ha-icon>
                    <span>${isBusy ? 'Migrating...' : 'Migrate to standalone'}</span>
                </button>
            </div>
        </div>
    `;
}
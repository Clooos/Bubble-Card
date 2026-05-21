import { html } from 'lit';
import { findConfigPath, getConfigAtPath } from '../../editor/standalone-dialog-bridge.js';
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

function pathsAreEqual(leftPath, rightPath) {
    if (!Array.isArray(leftPath) || !Array.isArray(rightPath) || leftPath.length !== rightPath.length) {
        return false;
    }

    return leftPath.every((segment, index) => segment === rightPath[index]);
}

function isPathPrefix(prefixPath, path) {
    if (!Array.isArray(prefixPath) || !Array.isArray(path) || prefixPath.length > path.length) {
        return false;
    }

    return prefixPath.every((segment, index) => segment === path[index]);
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

function findLegacyPopUpStackEntries(node, popupConfig, preferredHash, path = [], entries = []) {
    if (!node || typeof node !== 'object') {
        return entries;
    }

    if (Array.isArray(node)) {
        for (let index = 0; index < node.length; index += 1) {
            findLegacyPopUpStackEntries(node[index], popupConfig, preferredHash, [...path, index], entries);
        }
        return entries;
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
            entries.push({
                stackConfig: node,
                stackPath: path,
                popupIndex: bestIndex,
                popupPath: [...path, 'cards', bestIndex],
            });
        }
    }

    for (const [key, value] of Object.entries(node)) {
        if (!value || typeof value !== 'object') {
            continue;
        }

        findLegacyPopUpStackEntries(value, popupConfig, preferredHash, [...path, key], entries);
    }

    return entries;
}

function isLegacyEntryInActiveScope(entry, activeCardPath) {
    return pathsAreEqual(entry.popupPath, activeCardPath)
        || pathsAreEqual(entry.stackPath, activeCardPath)
        || isPathPrefix(activeCardPath, entry.stackPath)
        || isPathPrefix(entry.stackPath, activeCardPath);
}

function selectLegacyPopUpStackEntry(entries, options = {}) {
    if (!Array.isArray(entries) || entries.length === 0) {
        return null;
    }

    if (Array.isArray(options.activeCardPath)) {
        const activeScopedEntry = entries.find((entry) => isLegacyEntryInActiveScope(entry, options.activeCardPath));
        if (activeScopedEntry) {
            return activeScopedEntry;
        }
    }

    if (Array.isArray(options.currentViewPath)) {
        return entries.find((entry) => isPathPrefix(options.currentViewPath, entry.stackPath)) || null;
    }

    return entries[0];
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

    if (nextCardConfig.type === 'custom:bubble-card') {
        delete nextCardConfig.columns;
    }

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

function shouldKeepMigratedCardAutoHeight(cardConfig) {
    return cardConfig?.type !== 'custom:bubble-card';
}

function applyMigratedLegacyGridLayout(cardConfig, columns = POPUP_GRID_COLUMN_COUNT) {
    const nextCardConfig = stripMigratedCardColumns(cardConfig);
    const gridOptions = {
        ...(nextCardConfig.grid_options || {}),
        columns,
    };

    // Legacy pop-up content lived in a vertical-stack where third-party/HA cards
    // sized themselves naturally. In the standalone grid, those cards can report
    // compact section defaults (often half-width or fixed row heights), which
    // squashes panels after migration. Make migrated non-Bubble cards full-width
    // and auto-height explicitly while keeping Bubble Card's own row semantics.
    if (shouldKeepMigratedCardAutoHeight(nextCardConfig)) {
        gridOptions.rows = 'auto';
    }

    nextCardConfig.grid_options = gridOptions;
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
    return applyMigratedLegacyGridLayout(cardConfig, columns);
}

function normalizeLegacyContentCards(cards = [], options = {}) {
    return cards.flatMap((cardConfig) => {
        if (!options.convertHorizontalStacks || !isHorizontalStackCard(cardConfig)) {
            return [applyMigratedLegacyGridLayout(cardConfig)];
        }

        const assignedColumns = distributeHorizontalStackColumns(cardConfig.cards.length);
        if (!assignedColumns) {
            return [applyMigratedLegacyGridLayout(cardConfig)];
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

    const legacyEntry = selectLegacyPopUpStackEntry(findLegacyPopUpStackEntries(
        lovelaceConfig,
        popupConfig,
        options.matchHash || null
    ), options);

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

function getActiveLovelaceViewIndex(editor) {
    return typeof editor?._getActiveLovelaceViewIndex === 'function'
        ? editor._getActiveLovelaceViewIndex()
        : null;
}

function findConfigPathInScope(lovelaceConfig, targetConfig, scopePath) {
    if (!targetConfig) {
        return null;
    }

    if (Array.isArray(scopePath)) {
        const scopedConfig = getConfigAtPath(lovelaceConfig, scopePath);
        const scopedPath = findConfigPath(scopedConfig, targetConfig);
        if (scopedPath) {
            return [...scopePath, ...scopedPath];
        }
    }

    return findConfigPath(lovelaceConfig, targetConfig);
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
    const activeDialogParams = getActiveEditCardDialog(editor)?._params || null;
    const currentViewPath = getCurrentLovelaceViewPath(lovelaceConfig, editor.hass, getActiveLovelaceViewIndex(editor));
    const activeCardPath = findConfigPathInScope(lovelaceConfig, activeDialogParams?.cardConfig, currentViewPath);

    if (!lovelaceConfig || !isLegacyPopUpConfig(popupConfig)) {
        return null;
    }

    const legacyStack = findLegacyPopUpStack(lovelaceConfig, popupConfig, {
        matchHash: originalHash,
        currentViewPath,
        activeCardPath,
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
        currentViewPath,
        activeCardPath,
    };
}

function createStandaloneSaveCardConfig(editor, popupPath, fallbackConfig, fallbackLovelace) {
    return async (newCardConfig) => {
        const lovelace = fallbackLovelace || getActiveLovelace(editor);
        if (!lovelace || typeof lovelace.saveConfig !== 'function') {
            return;
        }

        const activeDialogConfig = getActiveEditCardDialog(editor)?._params?.lovelaceConfig;
        const sourceConfig = [activeDialogConfig, fallbackConfig, lovelace.rawConfig, lovelace.config]
            .find((config) => config && getConfigAtPath(config, popupPath) !== undefined)
            || fallbackConfig
            || lovelace.rawConfig
            || lovelace.config;
        const updatedConfig = replaceConfigAtPath(sourceConfig, popupPath, newCardConfig);
        await lovelace.saveConfig(updatedConfig);
    };
}

export function createPostMigrationDialogParams(activeDialogParams, previousLovelaceConfig, migration, lovelace, options = {}) {
    if (!activeDialogParams?.cardConfig || !previousLovelaceConfig || !migration?.config) {
        return null;
    }

    const activeCardPath = findConfigPathInScope(previousLovelaceConfig, activeDialogParams.cardConfig, options.currentViewPath);
    if (!isPathPrefix(activeCardPath, migration.stackPath)) {
        return null;
    }

    const cardConfig = getConfigAtPath(migration.config, activeCardPath);
    if (!cardConfig?.type) {
        return null;
    }

    return {
        ...activeDialogParams,
        lovelace: activeDialogParams.lovelace || lovelace,
        lovelaceConfig: migration.config,
        cardConfig,
    };
}

function refreshActiveMigrationDialog(editor, migrationContext, migration, lovelace) {
    const activeDialog = getActiveEditCardDialog(editor);
    if (!activeDialog || typeof activeDialog.showDialog !== 'function') {
        return false;
    }

    const dialogParams = createPostMigrationDialogParams(
        activeDialog._params,
        migrationContext.lovelaceConfig,
        migration,
        lovelace,
        { currentViewPath: migrationContext.currentViewPath }
    );

    if (!dialogParams) {
        return false;
    }

    activeDialog.showDialog(dialogParams);
    return true;
}

function reopenStandalonePopUpEditor(editor, migration, lovelace) {
    const activeDialog = getActiveEditCardDialog(editor);
    const dialogParams = {
        lovelace,
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
        currentViewPath: migrationContext.currentViewPath,
        activeCardPath: migrationContext.activeCardPath,
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

        if (!refreshActiveMigrationDialog(editor, migrationContext, migration, lovelace)) {
            reopenStandalonePopUpEditor(editor, migration, lovelace);
        }
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
                <p>This pop-up still uses the old vertical-stack wrapper. Migrate it to the standalone format for much better performance and to manage its content with the same drag-and-drop flow as a section view.</p>                ${hasHorizontalStacks ? html`
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
                        Rollback warning
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

// Migration Notice: one-shot dialog for unmigrated legacy pop-ups

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

export function getMigrationNoticeStorageKey(hass = null) {
    return `bubble-card-legacy-popup-notice-${getCurrentView(hass)}`;
}

let _pending = false;
let _latestMigrationNoticeHass = null;
const _shownMigrationNoticeKeys = new Set();

function isMigrationNoticeDismissed(storageKey) {
    try {
        return !!localStorage.getItem(storageKey);
    } catch (_) {
        return false;
    }
}

/**
 * Call once per legacy (non-standalone) pop-up card encountered.
 * Shows a dismissible dialog the first time, then never again (localStorage).
 */
export function maybeShowMigrationNotice(hass = null) {
    if (hass) {
        _latestMigrationNoticeHass = hass;
    }

    const storageKey = getMigrationNoticeStorageKey(_latestMigrationNoticeHass);

    if (_pending || _shownMigrationNoticeKeys.has(storageKey) || isMigrationNoticeDismissed(storageKey)) return;

    _pending = true;
    // Defer so card rendering is not blocked and the HA UI is fully settled.
    setTimeout(_show, 2000);
}

function _show() {
    // Recheck in case the user dismissed it from another tab before the timer fired.
    const storageKey = getMigrationNoticeStorageKey(_latestMigrationNoticeHass);
    if (_shownMigrationNoticeKeys.has(storageKey) || isMigrationNoticeDismissed(storageKey)) {
        _pending = false;
        return;
    }

    // Wait for ha-dialog to be defined.
    if (!customElements.get('ha-dialog')) {
        customElements.whenDefined('ha-dialog').then(_show);
        return;
    }

    _shownMigrationNoticeKeys.add(storageKey);

    const host = document.createElement('div');
    host.id = 'bubble-card-migration-notice-host';
    document.body.appendChild(host);

    /* ── Dialog element ──────────────────────────────────────────────────── */
    const dialog = document.createElement('ha-dialog');
    dialog.setAttribute('header-title', 'Important');

    /* ── Body content ────────────────────────────────────────────────────── */
    const content = document.createElement('div');
    content.style.lineHeight = '1.6';

    content.innerHTML = `
        <h3 style="margin: 0 0 4px;">Your pop-ups need to be migrated</h3>
        <p>
            Since Bubble Card v3.2.0, <strong>your pop-ups must be migrated to the new
            standalone format.</strong> It's easy and only takes a few clicks!
        </p>
        <p style="margin: 0 0 24px;">
            If you missed it, check out the <a href="https://github.com/Clooos/Bubble-Card/releases/tag/v3.2.0" target="_blank" rel="noopener" style="color: var(--primary-color); text-decoration: underline;">v3.2.0 release announcement</a> (it took me about 10 hours to write it!) to see all the new features and changes.
        </p>
        <hr>
        <h3 style="margin: 24px 0 4px;">What does it change?</h3>
        <p>
            Standalone pop-ups render much faster, work more reliably, and no longer 
            need to live inside a <em>vertical-stack</em> card (finally!). You also get access to 
            a new editor based on the Home Assistant section editor, with the exact same 
            drag-and-drop approach for easier and faster editing! 
        </p>
        <details style="margin: 0 0 16px; border-radius: 8px; overflow: hidden; background: var(--primary-background-color);">
            <summary style="padding: 12px 16px; cursor: pointer; user-select: none;">
                <span style="margin-right: 4px;"></span> <strong>Watch how the new editor works</strong> (click to expand)
            </summary>
            <video preload="metadata" autoplay muted loop playsinline style="width: 100%; display: block; aspect-ratio: 1059 / 720;">
                <source src="https://github.com/Clooos/Bubble-Card/raw/main/img/bubble_card_new_pop_up_editor.mp4" type="video/mp4">
            </video>
        </details>
        <p style="margin: 0 0 24px;">
            Pop-ups now have new features has well,
            with new modes (like a centered one), a new optional classic style and a performance mode for 
            smoother animations on lower-end devices.
        </p>
        <hr>
        <h3 style="margin: 24px 0 4px;">How to migrate from the editor?</h3>
        <p style="margin: 14px 0 24px;">
            Open the editor for each pop-up showing <strong>Migration available</strong>, 
            then just click <strong>Migrate to standalone</strong>.
        </p>
        <hr>
        <h3 style="margin: 24px 0 4px;">Using YAML?</h3>
        <p style="margin: 14px 0 24px;">
            Replace the legacy pop-up config with the standalone format:
        </p>
        <pre style="margin: 0 0 12px; padding: 12px; background: var(--secondary-background-color); border-radius: 8px; overflow-x: auto; font-size: 0.85em;">
- type: custom:bubble-card
  card_type: pop-up
  name: My Pop-up
  icon: mdi:home
  hash: "#my-popup"
  cards:
    - type: custom:bubble-card
      card_type: button
      entity: light.living_room
      name: Living Room
    # more cards...</pre>
        <p style="margin: 0 0 24px;">
            <strong>Pro tip:</strong> Honestly, if you're still using YAML for Bubble Card at this point, you might want to give the new editor a try, it makes creating and editing pop-ups a breeze! You also get access to the Module Store. I've put so much love into this editor ❤️
        </p>
        <hr>
        <p style="margin: 24px 0 0;">
            <em>Enjoy this update! Cheers! 🍻</em>
        </p>
        <p style="margin: 24px 0 0;">
            <a href="https://www.buymeacoffee.com/clooos" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee" alt="Buy me a beer"></a>&nbsp;
            <a href="https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/Donate-PayPal-blue?style=for-the-badge&logo=paypal" alt="PayPal"></a>&nbsp;
            <a href="https://www.patreon.com/Clooos" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/Donate-Patreon-orange?style=for-the-badge&logo=patreon" alt="Patreon"></a>
        </p>
    `;
    dialog.appendChild(content);

    /* ── Footer / action buttons ─────────────────────────────────────────── */
    const footer = document.createElement('ha-dialog-footer');
    footer.setAttribute('slot', 'footer');

    const dismissBtn = document.createElement('ha-button');
    dismissBtn.textContent = "Got it, don't show again on this view";
    dismissBtn.setAttribute('data-dialog', 'close');
    dismissBtn.setAttribute('slot', 'secondaryAction');
    dismissBtn.setAttribute('appearance', 'plain');
    let dismissHandled = false;
    const dismissNotice = () => {
        if (dismissHandled) return;
        dismissHandled = true;
        try {
            localStorage.setItem(getMigrationNoticeStorageKey(_latestMigrationNoticeHass), '1');
        } catch (_) {}
        _pending = false;
        dialog.open = false;
    };
    dismissBtn.addEventListener('pointerup', dismissNotice);
    dismissBtn.addEventListener('touchend', dismissNotice);
    dismissBtn.addEventListener('click', dismissNotice);
    footer.appendChild(dismissBtn);

    const remindBtn = document.createElement('ha-button');
    remindBtn.textContent = "Remind me later";
    remindBtn.setAttribute('data-dialog', 'close');
    remindBtn.setAttribute('slot', 'primaryAction');
    remindBtn.setAttribute('appearance', 'filled');
    remindBtn.setAttribute('variant', 'brand');
    remindBtn.addEventListener('click', () => { dialog.open = false; });
    footer.appendChild(remindBtn);

    dialog.appendChild(footer);

    /* ── Close via scrim/cross does NOT persist — dialog reappears next load ─ */
    dialog.addEventListener('closed', () => {
        _pending = false;
        setTimeout(() => { if (host?.isConnected) host.remove(); }, 400);
    });

    host.appendChild(dialog);
    dialog.open = true;
}
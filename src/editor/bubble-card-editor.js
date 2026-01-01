import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'lit';
import { version } from '../var/version.js';
import { fireEvent } from '../tools/utils.js';
// Custom selector for object fields with dynamic entity-attribute context support
import '../components/editor/ha-selector-bc_object.js';
import { renderButtonEditor } from '../cards/button/editor.js';
import { renderSubButtonsEditor } from '../cards/sub-buttons/editor.js';
import { renderPopUpEditor } from '../cards/pop-up/editor.js';
import { renderSeparatorEditor } from '../cards/separator/editor.js';
import { renderHorButtonStackEditor } from '../cards/horizontal-buttons-stack/editor.js';
import { renderCoverEditor } from '../cards/cover/editor.js';
import { renderClimateEditor } from '../cards/climate/editor.js';
import { renderSelectEditor } from '../cards/select/editor.js';
import { renderCalendarEditor } from '../cards/calendar/editor.js';
import { renderMediaPlayerEditor } from '../cards/media-player/editor.js';
import { renderEmptyColumnEditor } from '../cards/empty-column/editor.js';
import { makeSubButtonPanel } from '../components/sub-button/editor/index.js';
import { makeModulesEditor } from '../modules/editor.js';
import { makeModuleStore, _fetchModuleStore } from '../modules/store.js';
import { yamlKeysMap } from '../modules/registry.js';
import setupTranslation from '../tools/localize.js';
import styles from './styles.css';
import moduleStyles from '../modules/styles.css';
import { getLazyLoadedPanelContent } from './utils.js';

class BubbleCardEditor extends LitElement {
    _previewStyleApplied = false;
    _entityCache = {};
    _cachedAttributeList = null;
    _cachedAttributeListEntity = null;
    _expandedPanelStates = {};
    _moduleErrorCache = {};
    _moduleCodeEvaluating = null;
    _rowsAutoMode = undefined; // true = auto-manage rows, false = user-managed
    _autoRowsComputeScheduled = false;
    _previewCardRoot = null;
    _previewCardHost = null;
    _previewCardScore = -Infinity;
    _cardContextListener = null;
    // Stabilization for auto-rows calculation to prevent loops from micro layout changes
    _lastMeasuredHeights = null;

    constructor() {
        super();
        this._expandedPanelStates = {};
        this._cardContextListener = (event) => this._handleCardContext(event);
        window.addEventListener('bubble-card-context', this._cardContextListener);
    }

    setConfig(config) {
        // Keep existing preview reference if still connected.
        const prevHost = this._previewCardHost || this._previewCardRoot?.host || null;
        const previewStillConnected = !!prevHost?.isConnected;

        this._config = { ...config };
        if (!previewStillConnected) {
            this._resetPreviewCardReference();
        } else {
            this._previewCardScore = -Infinity;
        }

        // Initialize rows auto mode once per editor session.
        if (this._rowsAutoMode === undefined) this._rowsAutoMode = true;

        // Track if rows are explicitly set (disables auto mode).
        const hasGridRows =
            this._config?.grid_options?.rows !== undefined &&
            this._config?.grid_options?.rows !== null &&
            this._config?.grid_options?.rows !== '';

        if (hasGridRows) {
            this._rowsAutoMode = false;
        }
    }

    _deepQuerySelector(root, selector, maxDepth = 6) {
        try {
            if (!root || maxDepth < 0) return null;
            const direct = root.querySelector?.(selector);
            if (direct) return direct;

            const all = root.querySelectorAll?.('*') || [];
            for (const el of all) {
                if (el?.shadowRoot) {
                    const found = this._deepQuerySelector(el.shadowRoot, selector, maxDepth - 1);
                    if (found) return found;
                }
            }
            return null;
        } catch (_) {
            return null;
        }
    }

    _getEditorPreviewContainer() {
        // Best-effort lookup of the HA card editor preview container.
        try {
            const homeAssistant = document.querySelector("body > home-assistant");
            return homeAssistant?.shadowRoot
                ?.querySelector("hui-dialog-edit-card")
                ?.shadowRoot
                ?.querySelector("ha-dialog > div.content > div.element-preview") || null;
        } catch (_) {
            return null;
        }
    }

    _removeRowsOverrideAndRecalculate = () => {
        // Remove grid_options.rows (and rows) from config, re-enable auto mode, and recalculate.
        try {
            const newConfig = { ...this._config };

            // Remove grid_options.rows but keep other grid_options if present.
            if (newConfig.grid_options) {
                const { rows, ...restGridOptions } = newConfig.grid_options;
                if (Object.keys(restGridOptions).length > 0) {
                    newConfig.grid_options = restGridOptions;
                } else {
                    delete newConfig.grid_options;
                }
            }

            // Remove rows as well since we'll recalculate it.
            delete newConfig.rows;

            // Re-enable auto mode.
            this._rowsAutoMode = true;

            // Update config and emit change.
            this._config = newConfig;
            fireEvent(this, 'config-changed', { config: newConfig });

            // Trigger recalculation (force emit since this is an explicit user action).
            requestAnimationFrame(() => {
                try {
                    this._firstRowsComputation = true; // Bypass first-computation skip
                    this._lastMeasuredHeights = null; // Reset to force fresh calculation
                    this._setupAutoRowsObserver();
                    const card = this._getBubbleCardFromPreview();
                    if (card) {
                        this._computeAndApplyRows(card);
                    } else {
                        this._waitForPreviewAndRecompute();
                    }
                } catch (_) {}
            });
        } catch (e) {
            console.error('Bubble Card Editor: failed to remove rows override', e);
        }
    }

    _waitForPreviewAndRecompute(attempt = 0) {
        // Retry briefly to catch the moment the preview becomes available.
        const maxAttempts = 40; // ~2s
        const delayMs = 50;

        try {
            const card = this._getBubbleCardFromPreview();
            if (card) {
                this._setupAutoRowsObserver();
                const result = this._computeAndApplyRows(card);
                if (result?.applied) return;
            }
        } catch (_) {}

        if (attempt + 1 >= maxAttempts) return;
        setTimeout(() => this._waitForPreviewAndRecompute(attempt + 1), delayMs);
    }

    _scheduleAutoRowsCompute() {
        if (this._autoRowsComputeScheduled) return;
        this._autoRowsComputeScheduled = true;
        requestAnimationFrame(() => {
            this._autoRowsComputeScheduled = false;
            try {
                const hasGridRows =
                    this._config?.grid_options?.rows !== undefined &&
                    this._config?.grid_options?.rows !== null &&
                    this._config?.grid_options?.rows !== '';
                if (hasGridRows || this._rowsAutoMode === false) return;

                this._setupAutoRowsObserver();
                const card = this._getBubbleCardFromPreview();
                if (card) this._computeAndApplyRows(card);
            } catch (_) {}
        });
    }

    static get properties() {
        return {
            hass: {},
            _config: {}
        };
    }

    get _card_type() {
        return this._config?.card_type || '';
    }

    get _button_type() {
        return this._config?.button_type || 
               (this._config?.card_type === 'pop-up' ? '' : 'switch');
    }

    get _entity() {
        return this._config?.entity || '';
    }

    get _selectable_attributes() {
        return [
            'source_list', 
            'sound_mode_list',
            'hvac_modes',
            'fan_modes',
            'swing_modes',
            'preset_modes',
            'effect_list'
        ];
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('hass')) {
            // If hass changes, entity lists might be stale
            this.listsUpdated = false;
            // Clear entity cache when hass changes
            this._entityCache = {};
            // Clear attribute list cache as well
            this._cachedAttributeList = null;
            this._cachedAttributeListEntity = null;
        }
    
        this._setupAutoRowsObserver();
    }

    async firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        if (this.hass && this.hass.loadFragmentTranslation) {
            try {
                await this.hass.loadFragmentTranslation("config");
            } catch (e) {
                console.error("Bubble Card Editor: Failed to load 'config' fragment translation", e);
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback?.();
        try { if (this._errorListener) { window.removeEventListener('bubble-card-error', this._errorListener); this._errorListener = null; } } catch (e) {}
        try {
            if (this._moduleChangeHandler) {
                window.removeEventListener('bubble-card-modules-changed', this._moduleChangeHandler);
                window.removeEventListener('bubble-card-module-updated', this._moduleChangeHandler);
                document.removeEventListener('yaml-modules-updated', this._moduleChangeHandler);
                this._moduleChangeHandler = null;
                this._moduleChangeListenerAdded = false;
            }
        } catch (e) {}
        try { if (this._storeAutoRefreshTimer) { clearInterval(this._storeAutoRefreshTimer); this._storeAutoRefreshTimer = null; } } catch (e) {}
        try { if (this._progressInterval) { clearInterval(this._progressInterval); this._progressInterval = null; } } catch (e) {}
        try { if (this._editorSchemaDebounce) { clearTimeout(this._editorSchemaDebounce); this._editorSchemaDebounce = null; } } catch (e) {}
        try { if (this._cardContextListener) { window.removeEventListener('bubble-card-context', this._cardContextListener); this._cardContextListener = null; } } catch (e) {}
    
        if (BubbleCardEditor._resizeObserver && this._observedElements) {
            this._observedElements.forEach(el => {
                BubbleCardEditor._resizeObserver.unobserve(el);
                BubbleCardEditor._editorInstanceMap.delete(el);
            });
            this._observedElements = [];
        }
    }

    render() {
        if (!this.hass) {
            return html``;
        }

        const t = setupTranslation(this.hass);
        
        // Apply preview style only once
        if (!this._previewStyleApplied) {
            const homeAssistant = document.querySelector("body > home-assistant");
            const previewElement = homeAssistant?.shadowRoot
                ?.querySelector("hui-dialog-edit-card")
                ?.shadowRoot
                ?.querySelector("ha-dialog > div.content > div.element-preview");

            if (previewElement?.style && previewElement.style.position !== 'sticky') {
                previewElement.style.position = 'sticky';
                previewElement.style.top = '0';
                previewElement.style.height = 'calc(100vh - 224px)';
                previewElement.style.overflowY = 'auto';
                this._previewStyleApplied = true;
            }
        }

        if (!this.listsUpdated) {
            this._initializeLists(t);
            this.listsUpdated = true;
        }

        const cardTypeList = this.cardTypeList;
        const buttonTypeList = this.buttonTypeList;

        switch (this._config?.card_type) {
            case 'pop-up':
                return renderPopUpEditor(this);
            case 'button':
                return renderButtonEditor(this);
            case 'sub-buttons':
                return renderSubButtonsEditor(this);
            case 'separator':
                return renderSeparatorEditor(this);
            case 'horizontal-buttons-stack':
                return renderHorButtonStackEditor(this);
            case 'cover':
                return renderCoverEditor(this);
            case 'media-player':
                return renderMediaPlayerEditor(this);
            case 'empty-column':
                return renderEmptyColumnEditor(this);
            case 'select':
                return renderSelectEditor(this);
            case 'climate':
                return renderClimateEditor(this);
            case 'calendar':
                return renderCalendarEditor(this);
            case undefined:
                return html`
                    <div class="card-config">
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                You need to add a card type first
                            </h4>
                        </div>
                        ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                        <img style="width: 100%; height: auto; border-radius: 24px;" src="https://raw.githubusercontent.com/Clooos/Bubble-Card/main/.github/bubble-card.gif">
                        
                        <div class="bubble-info-container">
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:tag-text"></ha-icon>
                                    Bubble Card ${version}
                                </h4>
                                <div class="content">
                                    <p>If you want to know what's new in this version, you can check the changelog <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${version}" target="_blank" rel="noopener noreferrer"><b>here</b></a>.</p>
                                </div>
                            </div>
                            
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:help-circle-outline"></ha-icon>
                                    Resources & Help
                                </h4>
                                <div class="content">
                                    <p>If you have an issue or a question you can find more details in the GitHub documentation. You can also find useful resources and help in these links.</p>
                                    <div class="bubble-badges">
                                        <a href="https://github.com/Clooos/Bubble-Card" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:github"></ha-icon>
                                            <span>Documentation</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/issues" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:bug"></ha-icon>
                                            <span>Issues</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/questions-about-config-custom-styles-and-templates" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:help"></ha-icon>
                                            <span>Config Help</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:wrench"></ha-icon>
                                            <span>Shared Examples</span>
                                        </a>
                                        <a href="https://www.youtube.com/@cloooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:youtube"></ha-icon>
                                            <span>YouTube</span>
                                        </a>
                                        <a href="https://www.reddit.com/r/BubbleCard/" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:reddit"></ha-icon>
                                            <span>r/BubbleCard</span>
                                        </a>
                                        <a href="https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:home-assistant"></ha-icon>
                                            <span>HA Forum</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:heart-outline"></ha-icon>
                                    Support the Project
                                </h4>
                                <div class="content">
                                    <p>Hi I'm Clooos the Bubble Card developer. I dedicate most of my spare time to making this project the best it can be. So if you appreciate my work, any donation would be a great way to show your support.</p>
                                    <p>Also, check out my Patreon for exclusive custom styles, templates, and modules. Subscribing is probably the best way to support me and keep this project going.</p>
                                    <div class="bubble-badges">
                                        <a href="https://www.buymeacoffee.com/clooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <div class="bmc-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
                                                </svg>
                                            </div>
                                            <span>Buy me a beer</span>
                                        </a>
                                        <a href="https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR" target="_blank" rel="noopener noreferrer" class="bubble-badge support-badge">
                                            <div class="paypal-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z"/>
                                                </svg>
                                            </div>
                                            <span>PayPal</span>
                                        </a>
                                        <a href="https://www.patreon.com/Clooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <div class="patreon-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"/>
                                                </svg>
                                            </div>
                                            <span>Patreon</span>
                                        </a>
                                    </div>
                                    <div class="creator-message">
                                        <a href="https://www.reddit.com/user/Clooooos/" target="_blank" rel="noopener noreferrer">
                                            <img src="https://avatars.githubusercontent.com/u/36499953" alt="Clooos" class="creator-avatar">
                                        </a>
                                        <p class="bubble-thank-you">Thank you for being part of this awesome community! Cheers from Belgium! 🍻</p>
                                    </div>
                                </div>
                            </div>
                            ${this.makeVersion()}
                        </div>
                    </div>
                `;
        }
    }

    makeLayoutOptions() {
        const defaultLayout = window.isSectionView ? 'large' : 'normal';
        const defaultRows = this._config.card_type === "separator" ? '0.8' : '1';
        const showRowsOption = this._config.card_type !== "pop-up" && 
            (this._config.card_layout?.includes("large") || (window.isSectionView && !this._config.card_layout));

        return html`
            ${this._renderConditionalContent(this._config.grid_options?.rows, html`
                <div class="bubble-info warning">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:alert-outline"></ha-icon>
                        Rows are already set in the "Layout" options
                    </h4>
                    <div class="content">
                        <p>If you want to change the rows, you can do it in the "Layout" options at the top of this editor. Or remove it from your config in YAML to enable this option.</p>
                    </div>
                </div>
            `)}
            ${this._renderConditionalContent(showRowsOption, html`
                <ha-textfield
                    label="Rows (Card height)"
                    type="number"
                    inputMode="numeric"
                    min="0"
                    step="0.1"
                    .disabled="${this._config.grid_options?.rows}"
                    .value="${this._config.rows || this._config.grid_options?.rows || defaultRows}"
                    .configValue="${"rows"}"
                    @input="${this._valueChanged}"
                ></ha-textfield>
                <br>
            `)}
            <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    Card layout deprecation
                </h4>
                <div class="content">
                    <p><b>The card layout options are deprecated, but still available for backwards compatibility.</b> Please use the new sub-button groups and layout options instead for better flexibility.</p>
                </div>
            </div>
            <ha-form
                .hass=${this.hass}
                .data=${{ card_layout: this._config.card_layout || defaultLayout }}
                .schema=${[{
                    name: 'card_layout',
                    selector: {
                        select: {
                            options: [
                                { label: 'Normal (previous default)', value: 'normal' },
                                { label: 'Large', value: 'large' },
                                { label: 'Large with 2 sub-buttons rows', value: 'large-2-rows' },
                                { label: 'Large with sub-buttons in a grid (Layout: min. 2 rows)', value: 'large-sub-buttons-grid' }
                            ],
                            mode: 'dropdown'
                        }
                    }
                }]}
                .computeLabel=${() => this._config.card_type === "pop-up" ? 'Header card layout' : 'Card layout'}
                @value-changed=${(ev) => {
                    this._valueChanged({
                        target: { configValue: 'card_layout' },
                        detail: { value: ev.detail.value.card_layout }
                    });
                }}
            ></ha-form>
        `;
    }

    makeLayoutPanel() {
        return html`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:view-grid"></ha-icon>
                    Layout
                </h4>
                <div class="content">
                    ${this.makeLayoutOptions()}
                </div>
            </ha-expansion-panel>
        `;
    }

    makeShowState(context = this._config, config = '', array = false, index) {
        const entity = context?.entity ?? this._config.entity ?? '';
        const nameButton = this._config.button_type === 'name';

        const isSelectEntity = entity?.startsWith("input_select") || entity?.startsWith("select") || context.select_attribute;
        // Consider both top-level sub_button and nested group paths like "sub_button.0.buttons"
        const isSubButton = array === 'sub_button' || (typeof array === 'string' && array.startsWith('sub_button'));
        const showSelectUi = isSubButton && (context?.sub_button_type === 'select' || (!context?.sub_button_type && isSelectEntity));

        const attributeList = context?.show_attribute 
            ? Object.keys(this.hass.states[entity]?.attributes || {}).map((attributeName) => {
                let state = this.hass.states[entity];
                let formattedName = this.hass.formatEntityAttributeName(state, attributeName);
                return { label: formattedName, value: attributeName };
              })
            : [];

        return html`

            <ha-formfield .label="Text scrolling effect">
                <ha-switch
                    aria-label="Text scrolling effect"
                    .checked=${context?.scrolling_effect ?? true}
                    .configValue="${config + "scrolling_effect"}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { scrolling_effect: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Text scrolling effect</label> 
                </div>
            </ha-formfield>
            ${this._renderConditionalContent(isSubButton, html`
                <ha-formfield .label="Show background">
                    <ha-switch
                        aria-label="Show background when entity is on"
                        .checked=${context?.show_background ?? true}
                        @change="${(ev) => this._arrayValueChange(index, { show_background: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Show background when entity is on</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent(isSubButton && (context?.show_background ?? true), html`
                <ha-formfield .label="Background color based on state">
                    <ha-switch
                        aria-label="Background color based on state"
                        .checked=${context?.state_background ?? true}
                        @change="${(ev) => this._arrayValueChange(index, { state_background: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Background color based on state</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent(isSubButton && (context?.state_background ?? true) && entity.startsWith("light"), html`
                <ha-formfield .label="Background color based on light color">
                    <ha-switch
                        aria-label="Background color based on light color"
                        .checked=${context?.light_background ?? true}
                        @change="${(ev) => this._arrayValueChange(index, { light_background: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Background color based on light color</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent(!isSubButton && entity.startsWith("light"), html`
                <ha-formfield .label="Use accent color instead of light color">
                    <ha-switch
                        aria-label="Use accent color instead of light color"
                        .checked=${context?.use_accent_color ?? false}
                        .configValue="${config + "use_accent_color"}"
                        @change="${this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Use accent color instead of light color</label> 
                    </div>
                </ha-formfield>
            `)}
            <ha-formfield .label="Show icon">
                <ha-switch
                    aria-label="Show icon"
                    .checked=${context?.show_icon ?? true}
                    .configValue="${config + "show_icon"}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_icon: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show icon</label> 
                </div>
            </ha-formfield>
            ${this._renderConditionalContent(!isSubButton, html`
                <ha-formfield .label="Prioritize icon over entity picture">
                    <ha-switch
                        aria-label="Prioritize icon over entity picture"
                        .checked=${context?.force_icon ?? false}
                        .configValue="${config + "force_icon"}"
                        .disabled="${nameButton}"
                        @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { force_icon: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Prioritize icon over entity picture</label> 
                    </div>
                </ha-formfield>
            `)}
            <ha-formfield .label="Show name">
                <ha-switch
                    aria-label="Show name"
                    .checked=${ context?.show_name ?? (!isSubButton ? true : false) }
                    .configValue="${config + "show_name"}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_name: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show name</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show entity state">
                <ha-switch
                    aria-label="Show entity state"
                    .checked="${context?.show_state ?? context.button_type === 'state'}"
                    .configValue="${config + "show_state"}"
                    .disabled="${nameButton && !isSubButton}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_state: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show entity state</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show last changed">
                <ha-switch
                    aria-label="Show last changed"
                    .checked=${context?.show_last_changed}
                    .configValue="${config + "show_last_changed"}"
                    .disabled="${nameButton && !isSubButton}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_last_changed: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show last changed</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show last updated">
                <ha-switch
                    aria-label="Show last updated"
                    .checked=${context?.show_last_updated}
                    .configValue="${config + "show_last_updated"}"
                    .disabled="${nameButton && !isSubButton}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_last_updated: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show last updated</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show attribute">
                <ha-switch
                    aria-label="Show attribute"
                    .checked=${context?.show_attribute}
                    .configValue="${config + "show_attribute"}"
                    .disabled="${nameButton && !isSubButton}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_attribute: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show attribute</label> 
                </div>
            </ha-formfield>
            ${this._renderConditionalContent(context?.show_attribute, html`
                <ha-form
                    .hass=${this.hass}
                    .data=${{ attribute: context?.attribute }}
                    .schema=${[{
                        name: 'attribute',
                        selector: {
                            select: {
                                options: attributeList,
                                mode: 'dropdown'
                            }
                        }
                    }]}
                    .disabled=${nameButton && !isSubButton}
                    .computeLabel=${() => 'Attribute to show'}
                    @value-changed=${(ev) => {
                        const value = ev.detail.value.attribute;
                        if (!array) {
                            this._valueChanged({
                                target: { configValue: config + "attribute" },
                                detail: { value }
                            });
                        } else {
                            this._arrayValueChange(index, { attribute: value }, array);
                        }
                    }}
                ></ha-form>
            `)}
            ${this._renderConditionalContent(showSelectUi, html`
                <ha-formfield .label="Show arrow (Select entities only)">
                    <ha-switch
                        aria-label="Show arrow (Select entities only)"
                        .checked=${context?.show_arrow ?? true}
                        .configValue="${config + "show_arrow"}"
                        @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_arrow: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Show arrow (Select menu only)</label> 
                    </div>
                </ha-formfield>
            `)}
        `;
    }

    makeDropdown(label, configValue, items, disabled, default_value) {
        if (label.includes('icon') || label.includes('Icon')) {
            return html`
                <div class="ha-icon-picker">
                    <ha-icon-picker
                        label="${label}"
                        .value="${this._config[configValue] || default_value}"
                        .configValue="${configValue}"
                        item-value-path="icon"
                        item-label-path="icon"
                        @value-changed="${this._valueChanged}"
                    ></ha-icon-picker>
                </div>
            `;
        } else if (label.includes('Entity') || label.includes('entity')) {
            let includeDomains = [];
            let excludeDomains = [];
            
            switch(this._config.card_type) {
                case 'button':
                    break;
                case 'cover':
                    includeDomains = ['cover'];
                    break;
                case 'climate':
                    includeDomains = ['climate'];
                    break;
                case 'media-player':
                    includeDomains = ['media_player'];
                    break;
                case 'select':
                    includeDomains = ['input_select', 'select'];
                    if (this._config.select_attribute) {
                        includeDomains = [];
                    }
                    break;
                default:
                    break;
            }
            
            return html`
                <ha-entity-picker
                    label="${label}"
                    .hass="${this.hass}"
                    .value="${this._config[configValue]}"
                    .configValue="${configValue}"
                    .includeDomains="${includeDomains.length ? includeDomains : undefined}"
                    .excludeDomains="${excludeDomains.length ? excludeDomains : undefined}"
                    .disabled="${disabled}"
                    allow-custom-entity
                    @value-changed="${this._valueChanged}"
                ></ha-entity-picker>
            `;
        } else {
            return html`
                <ha-form
                    .hass=${this.hass}
                    .data=${{ [configValue]: this['_' + configValue] }}
                    .schema=${[{
                        name: configValue,
                        selector: {
                            select: {
                                options: items,
                                mode: 'dropdown'
                            }
                        }
                    }]}
                    .disabled=${disabled}
                    .computeLabel=${() => label}
                    @value-changed=${(ev) => {
                        const value = ev.detail.value[configValue];
                        this._valueChanged({
                            target: { configValue },
                            detail: { value }
                        });
                    }}
                ></ha-form>
          `;
        }
    }

    _renderConditionalContent(condition, content) {
        return condition ? content : html``;
    }

    makeActionPanel(label, context = this._config, defaultAction, array, index = this._config) {
        const icon = label === "Tap action" 
            ? "mdi:gesture-tap" 
            : label === "Double tap action" 
            ? "mdi:gesture-double-tap"
            : label === "Hold action" 
            ? "mdi:gesture-tap-hold"
            : "mdi:gesture-tap";
        const configValueType = label === "Tap action" 
            ? "tap_action"
            : label === "Double tap action" 
            ? "double_tap_action"
            : label === "Hold action" 
            ? "hold_action"
            : label === "Open action"
            ? "open_action"
            : "close_action";
        
        // Create a unique key for the panel
        const panelKey = array 
            ? `action_panel_${array}_${index}_${configValueType}` 
            : `action_panel_config_${configValueType}`;

        let value;
        try{
           value = label === "Tap action" 
                ? context.tap_action
                : label === "Double tap action" 
                ? context.double_tap_action
                : label === "Hold action" 
                ? context.hold_action
                : label === "Open action"
                ? context.open_action
                : context.close_action;
        }catch{}

        const isDefault = context === this._config;

        if (!defaultAction) {
            defaultAction = isDefault && label === "Tap action" 
            ? this._config.button_type !== "name" ? "more-info" : "none"
            : isDefault
            ? "none"
            : '';
        }

        return html`
            <ha-expansion-panel 
                outlined
                @expanded-changed=${(e) => {
                    this._expandedPanelStates[panelKey] = e.target.expanded;
                    this.requestUpdate();
                }}
            >
                <h4 slot="header">
                    <ha-icon icon="${icon}"></ha-icon>
                    ${label}
                </h4>
                <div class="content"> 
                    ${getLazyLoadedPanelContent(this, panelKey, !!this._expandedPanelStates[panelKey], () => html`
                        <ha-form
                            .hass=${this.hass}
                            .data=${context}
                            .configValue="${
                                          (array ? array+".":"") + (parseInt(index) == index ? index+".":"") +  configValueType}" 
                            .schema=${[{name: configValueType,
                                        label : label,
                                        selector: { ui_action: {
                                            default_action: defaultAction,} },
                                        }]}  
                            .computeLabel=${this._computeLabelCallback}
                            @value-changed=${(ev) => this._ActionChanged(ev,array,index)}
                        ></ha-form>
                        ${ value?.action  === 'call-service' || value?.action === 'perform-action' ? html`
                            <ha-formfield .label="Use default entity">
                                <ha-switch
                                    aria-label="Use default entity"
                                    .configValue="${
                                                  (array ? array+".":"") + (parseInt(index) == index ? index+".":"") +  configValueType+".default_entity"}" 
                                    .checked=${value?.target?.entity_id === "entity"}
                                     @change=${this._updateActionsEntity}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Use default entity</label> 
                                </div>
                            </ha-formfield>
                        ` : ''}
                    `)}
                </div>
            </ha-expansion-panel>
        `;
    }

    makeSubButtonPanel() {
        return makeSubButtonPanel(this);
    }

    makeVersion() {
        return html`
            <h4 class="version">
                Bubble Card 
                <span class="version-number">
                    ${version}
                </span>
            </h4>
        `;
    }

    makeStyleEditor() {
        const panelKey = 'style_editor_panel'; // Unique key for this panel

        return html`
            <ha-expansion-panel 
                outlined
                @expanded-changed="${(e) => { 
                    this._expandedPanelStates[panelKey] = e.target.expanded; 
                    this.requestUpdate(); 
                }}"
            >
                <h4 slot="header">
                    <ha-icon icon="mdi:code-braces"></ha-icon>
                    Custom styles & JS templates
                </h4>
                <div class="content">
                    ${getLazyLoadedPanelContent(this, panelKey, !!this._expandedPanelStates[panelKey], () => html`
                        <div class="code-editor">
                            <ha-code-editor
                                mode="yaml"
                                autofocus
                                autocomplete-entities
                                autocomplete-icons
                                .hass=${this.hass}
                                .value=${this._config.styles}
                                .configValue="${"styles"}"
                                @value-changed=${(e) => {
                                    // Clear errors for this card when code is modified
                                    this._valueChanged(e);
                                    this._clearCurrentCardError();
                                }}
                            ></ha-code-editor>
                        </div>
                        ${this.createErrorConsole()}
                    `)}
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Custom styles & JS templates
                        </h4>
                        <div class="content">
                            <p>For advanced users, you can edit the CSS style of this card in the above code editor. More information and examples <a href="https://github.com/Clooos/Bubble-Card#styling" target="_blank" rel="noopener noreferrer">here</a>. You don't need to add <code>styles: |</code> (only used in YAML mode). You can also add <a href="https://github.com/Clooos/Bubble-Card#templates" target="_blank" rel="noopener noreferrer">JS templates</a> (Jinja is not supported).</p>
                            <p><b>Check out my <a href="https://www.patreon.com/Clooos" target="_blank" rel="noopener noreferrer">Patreon</a></b> for more custom styles, templates, and modules. This is also the best way to show your support to my project.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
        `;
    }

    _clearCurrentCardError() {
        if (!window.bubbleCardErrorRegistry) return;
        
        const currentCardType = this._config?.card_type;
        const currentEntityId = this._config?.entity;
        if (!currentCardType || !currentEntityId) return;
        
        const currentCardKey = `${currentCardType}_${currentEntityId}`;
        
        if (window.bubbleCardErrorRegistry[currentCardKey]) {
            delete window.bubbleCardErrorRegistry[currentCardKey];
            // Clear displayed error immediately
            this.errorMessage = '';
            this.errorSource = '';
            this.requestUpdate();
        }
    }

    _clearCurrentModuleError(moduleId) {
        this._moduleCodeEvaluating = moduleId;
        // Also purge any stored error for this module from the global registry
        try {
            if (window.bubbleCardErrorRegistry && moduleId) {
                Object.keys(window.bubbleCardErrorRegistry).forEach(key => {
                    if (window.bubbleCardErrorRegistry[key]?.moduleId === moduleId) {
                        delete window.bubbleCardErrorRegistry[key];
                    }
                });
            }
        } catch (_) {}
        // Clear displayed error immediately
        this.errorMessage = '';
        this.errorSource = '';
        this.requestUpdate();
    }

    createErrorConsole(context = this) {
        if (!window.bubbleCardErrorRegistry) {
            window.bubbleCardErrorRegistry = {};
        }

        // Function to update the displayed error based on current context
        const updateDisplayedError = () => {
            const isModuleEditor = context._editingModule !== undefined;
            
            if (isModuleEditor && context._editingModule) {
                const moduleId = context._editingModule.id;
                
                if (!moduleId) {
                    context.errorMessage = '';
                    context.errorSource = '';
                    return;
                }
                
                let foundModuleError = false;
                
                if (window.bubbleCardErrorRegistry) {
                    Object.values(window.bubbleCardErrorRegistry).forEach(error => {
                        if (error.moduleId === moduleId) {
                            context.errorMessage = error.message;
                            context.errorSource = error.source;
                            foundModuleError = true;
                        }
                    });
                }
                
                if (!foundModuleError) {
                    context.errorMessage = '';
                    context.errorSource = '';
                }
            } else {
                // Standard card context, use card_type and entity
                const currentCardType = context._config?.card_type;
                const currentEntityId = context._config?.entity;
                
                if (!currentCardType || !currentEntityId) {
                    context.errorMessage = '';
                    context.errorSource = '';
                    return;
                }
                
                const currentCardKey = `${currentCardType}_${currentEntityId}`;
                
                if (window.bubbleCardErrorRegistry && window.bubbleCardErrorRegistry[currentCardKey]) {
                    const currentCardError = window.bubbleCardErrorRegistry[currentCardKey];
                    context.errorMessage = currentCardError.message;
                    context.errorSource = currentCardError.source;
                } else {
                    // No error found for this card, ensure we clear any displayed errors
                    context.errorMessage = '';
                    context.errorSource = '';
                }
            }
            
            // Force a UI update
            context.requestUpdate();
        };

        if (!context._errorListener) {
            context._errorListener = (event) => {
                const errorDetail = event.detail;
                
                if (errorDetail && typeof errorDetail === 'object' && errorDetail.context) {
                    const { message, context: errorContext } = errorDetail;
                    
                    if (message) {
                        // Only process if we have a cardType and entityId (needed for regular cards)
                        if (errorContext.cardType && errorContext.entityId) {
                            // Create a unique key for this error based on card type and entity
                            const errorKey = `${errorContext.cardType}_${errorContext.entityId}`;
                            
                            // Store the error in the registry with source info
                            window.bubbleCardErrorRegistry[errorKey] = {
                                message: message,
                                source: errorContext.sourceType === 'module' 
                                    ? `Module ('${errorContext.moduleId}')` 
                                    : 'Card Configuration (styles section)',
                                cardType: errorContext.cardType,
                                entityId: errorContext.entityId,
                                moduleId: errorContext.sourceType === 'module' ? errorContext.moduleId : null
                            };
                        }
                    } else {
                        // If message is empty, clear the error from the registry
                        if (errorContext.sourceType === 'module' && errorContext.moduleId) {
                            // Clear module-specific error
                            Object.keys(window.bubbleCardErrorRegistry).forEach(key => {
                                if (window.bubbleCardErrorRegistry[key]?.moduleId === errorContext.moduleId) {
                                    delete window.bubbleCardErrorRegistry[key];
                                }
                            });
                        } else if (errorContext.cardType && errorContext.entityId) {
                            // Clear card-specific error
                            const errorKey = `${errorContext.cardType}_${errorContext.entityId}`;
                            if (window.bubbleCardErrorRegistry[errorKey]) {
                                delete window.bubbleCardErrorRegistry[errorKey];
                            }
                        }
                    }
                }
                
                // Update displayed error based on current context
                updateDisplayedError();
            };
            window.addEventListener('bubble-card-error', context._errorListener);
        }
        
        // Always update the displayed error when this function is called
        // This ensures we show the correct error when switching between cards/modules
        updateDisplayedError();

        return html`
            <div class="bubble-info error" 
                style="display: ${!context.errorMessage ? 'none' : ''}; margin-bottom: 8px;">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Error in JS template
                </h4>
                <div class="content">
                    <p>${context.errorMessage}</p>
                    ${context._editingModule && typeof context._editingModule === 'object' && context._editingModule.id ? html`<hr><span class="helper-text" style="margin: 0;">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        JS template errors can sometimes be delayed in the Module Editor.
                    </span>` : ''}
                </div>
            </div>
        `;
    }

    _getProcessedSchema(key, originalSchema, config) {
      // Always recalculate schema based on current config to handle dynamic dependencies
      // This ensures attribute selectors are properly linked to their entity fields
      const schemaCopy = structuredClone(originalSchema);
      const updatedSchema = this._updateAttributeSelectors(schemaCopy, config, key);
      return updatedSchema;
    }

    _valueChangedInHaForm(e, key, originalSchema) {
      let value = e.detail.value;

      if (value && typeof value === "object" && !Array.isArray(value)) {
        const keys = Object.keys(value);
        if (keys.length > 0 && keys.every(k => !isNaN(parseInt(k, 10)))) {
          value = keys
            .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
            .map(k => value[k]);
        }
      }

      // Update the working copy FIRST to keep the form stable for the immediate re-render
      if (this._workingModuleConfigs) { // Ensure it exists
          this._workingModuleConfigs[key] = value;
      }

      // Now clean the value before updating the main config
      const cleanedValue = this._cleanEmpty(value, key); 

      // Fire event to update the main config (_config) with the CLEANED value
      // The schema will be recalculated on next render based on the updated config
      fireEvent(this, "config-changed", { config: { ...this._config, [key]: cleanedValue } });
      this.requestUpdate();
    }

    _cleanEmpty(value, key) {
      if (Array.isArray(value)) {
        return value
          .map(item => this._cleanEmpty(item, undefined))
          .filter(item => !this._isEmpty(item));
      } else if (value && typeof value === "object") {
        const cleaned = {};
        Object.keys(value).forEach(k => {
          const cleanedValue = this._cleanEmpty(value[k], k);
          if (!this._isEmpty(cleanedValue)) {
            cleaned[k] = cleanedValue;
          }
        });
        return Object.keys(cleaned).length > 0 ? cleaned : undefined;
      } else if (typeof value === 'string' && value === "") {
        if (key !== 'state') {
          return undefined;
        }
      }
      return value;
    }

    _isEmpty(value) {
      if (value === null || value === undefined) return true;
      if (Array.isArray(value)) return value.length === 0;
      if (typeof value === "object") return Object.keys(value).length === 0;
      return false;
    }

    _updateAttributeSelectors = (schema, configData, inheritedEntity = undefined) => {
      // Helper to resolve an entity from any supported config shape (object or array)
      const resolveEntityFromConfig = (data, fallback) => {
        if (!data) return fallback;
        if (typeof data === "string") return data || fallback;
        if (Array.isArray(data)) {
          // Find first item that has an entity property
          const firstWithEntity = data.find(
            (item) => (item && item.entity) || typeof item === "string"
          );
          if (typeof firstWithEntity === "string") return firstWithEntity || fallback;
          return firstWithEntity?.entity ?? fallback;
        }
        return data.entity ?? fallback;
      };

      // Helper to pick the config slice matching the current field
      const getFieldConfig = (data, fieldName) => {
        if (!data || fieldName === undefined) return undefined;
        if (Array.isArray(data)) return data;
        // Only return the field value if it exists, otherwise return undefined
        return data[fieldName];
      };

      // Check if an object selector has both entity and attribute fields as siblings
      const hasEntityAttributeSiblings = (fields) => {
        const fieldsArray = Array.isArray(fields)
          ? fields
          : Object.entries(fields || {}).map(([name, def]) => ({ name, ...def }));
        
        const hasEntityField = fieldsArray.some(f => f.selector && f.selector.entity);
        const hasAttributeField = fieldsArray.some(f => f.selector && f.selector.attribute);
        return hasEntityField && hasAttributeField;
      };

      // Recursively process object selector fields (map or array) and preserve the original shape
      const processObjectFields = (fields, value, currentEntity) => {
        const toArray = Array.isArray(fields)
          ? fields
          : Object.entries(fields || {}).map(([name, def]) => ({ name, ...def }));

        // For objects without entity+attribute siblings, use standard processing
        if (Array.isArray(value) && value.length > 0) {
          // Prioritize finding an item with an entity field set, then fall back to first object
          const valueForObject = value.find((item) => item && typeof item === "object" && item.entity) 
            ?? value.find((item) => item && typeof item === "object") 
            ?? value[0];

          const updated = this._updateAttributeSelectors(
            toArray,
            valueForObject,
            currentEntity
          );

          if (Array.isArray(fields)) {
            return updated;
          }

          return updated.reduce((acc, fieldDef) => {
            const { name, ...rest } = fieldDef;
            acc[name] = rest;
            return acc;
          }, {});
        }

        // For empty arrays or no data, still process schema structure
        const updated = this._updateAttributeSelectors(
          toArray,
          value,
          currentEntity
        );

        if (Array.isArray(fields)) {
          return updated;
        }

        return updated.reduce((acc, fieldDef) => {
          const { name, ...rest } = fieldDef;
          acc[name] = rest;
          return acc;
        }, {});
      };

      let currentInherited = inheritedEntity;

      return schema.map((field) => {
        const fieldConfig = getFieldConfig(configData, field.name);

        if (field.selector && field.selector.entity) {
          currentInherited = resolveEntityFromConfig(fieldConfig, undefined);
        }

        if (field.selector && field.selector.attribute) {
          field.selector.attribute.entity_id = currentInherited;
        }

        if (Array.isArray(field.schema)) {
          field.schema = this._updateAttributeSelectors(
            field.schema,
            fieldConfig,
            currentInherited
          );
        } else if (field.selector && field.selector.object && field.selector.object.fields) {
          // Check if this object selector has entity+attribute siblings
          // If so, convert to bc_object for dynamic context support
          if (hasEntityAttributeSiblings(field.selector.object.fields)) {
            // Convert to bc_object selector for dynamic entity-attribute linking
            const objectConfig = field.selector.object;
            field.selector = {
              bc_object: {
                ...objectConfig,
                // Keep fields as-is, bc_object will handle context internally
              }
            };
          } else {
            // Standard processing for objects without entity+attribute siblings
            field.selector.object.fields = processObjectFields(
              field.selector.object.fields,
              fieldConfig,
              currentInherited
            );
          }
        }

        return field;
      });
    };

  makeModulesEditor() {
    return makeModulesEditor(this);
  }

  makeModuleStore() {
    return makeModuleStore(this);
  }

  _normalizeConfigValuePath(configValue) {
    const toSegment = (segment) => {
      if (segment === undefined || segment === null) {
        return "";
      }
      const normalized = String(segment).trim();
      return normalized;
    };

    if (typeof configValue === "string" || typeof configValue === "number") {
      return toSegment(configValue);
    }

    if (Array.isArray(configValue)) {
      return configValue
        .map((segment) => toSegment(segment))
        .filter(Boolean)
        .join(".");
    }

    if (configValue && typeof configValue === "object") {
      if (Array.isArray(configValue.path)) {
        return configValue.path
          .map((segment) => toSegment(segment))
          .filter(Boolean)
          .join(".");
      }
      if (configValue.path !== undefined) {
        return toSegment(configValue.path);
      }
      if (configValue.key !== undefined) {
        return toSegment(configValue.key);
      }
    }

    return "";
  }

  _valueChanged(ev) {
    const target = ev.target;
    const detail = ev.detail;
    
    let needsUpdate = false;
    let rawValue;
    const hasExplicitUndefinedValue = Boolean(
      target &&
      target.configValue &&
      Object.prototype.hasOwnProperty.call(target, 'value') &&
      target.value === undefined
    );

    // Check if the target is a ha-switch
    if (target.tagName === 'HA-SWITCH') {
        rawValue = target.checked;
        needsUpdate = true;
    } else if (target.value !== undefined) {
        rawValue = typeof target.value === 'string' ? target.value.replace(",", ".") : target.value;
        needsUpdate = true;
    } else if (hasExplicitUndefinedValue) {
        rawValue = target.value;
        needsUpdate = true;
    } else if (detail?.value !== undefined) {
        needsUpdate = true;
    }

    if (!needsUpdate) return;

    if (typeof rawValue === 'string' && (rawValue.endsWith(".") || rawValue === "-")) {
        return;
    }

    // Create a new config object to avoid mutating the original config
    let newConfig = { ...this._config };
    
    try {
        const { configValue, checked } = target;
        if (configValue) {
            const value = checked !== undefined ? checked : rawValue;
            const normalizedPath = this._normalizeConfigValuePath(configValue);
            if (!normalizedPath) {
                console.warn("Bubble Card Editor: skipped update due to invalid configValue", configValue);
                return;
            }
            const configKeys = normalizedPath.split('.').filter(Boolean);
            if (!configKeys.length) {
                console.warn("Bubble Card Editor: empty config path provided", configValue);
                return;
            }
            
            // For nested properties, we need to clone progressively the structure
            if (configKeys.length > 1) {
                let tempConfig = newConfig;
                let path = '';
                
                for (let i = 0; i < configKeys.length - 1; i++) {
                    const key = configKeys[i];
                    path = path ? `${path}.${key}` : key;
                    
                    // Create the object if it doesn't exist
                    if (!tempConfig[key]) tempConfig[key] = {};
                    
                    // Clone the object to ensure it is extensible
                    tempConfig[key] = { ...tempConfig[key] };
                    tempConfig = tempConfig[key];
                }
                
                // Update the value
                const lastKey = configKeys[configKeys.length - 1];
                if (ev.type === 'input') {
                    tempConfig[lastKey] = rawValue;
                } else if (detail && tempConfig[lastKey] !== detail.value) {
                    tempConfig[lastKey] = detail.value;
                } else if (target.tagName === 'HA-SWITCH') {
                    tempConfig[lastKey] = rawValue;
                }
            } else {
                // Simple case - top level key
                const key = configKeys[0];
                if (ev.type === 'input') {
                    newConfig[key] = rawValue;
                } else if (detail && newConfig[key] !== detail.value) {
                    newConfig[key] = detail.value;
                } else if (target.tagName === 'HA-SWITCH') {
                    newConfig[key] = rawValue;
                }
            }
        } else {
            newConfig = detail.value;
        }
    } catch (error) {        
        // If an error occurs, try to update directly with the new config
        if (target.configValue && detail) {
            newConfig[target.configValue] = detail.value;
        } else if (detail) {
            newConfig = detail.value;
        } else {
            return;
        }
    }

    // Update auto/manual mode when user edits rows
    try {
        if (target?.configValue === 'rows') {
            const r = newConfig?.rows;
            const cleared = (r === undefined || r === null || r === '');
            this._rowsAutoMode = cleared;
            if (cleared) delete newConfig.rows;
        } else if (target?.configValue === 'grid_options.rows') {
            const r = newConfig?.grid_options?.rows;
            const cleared = (r === undefined || r === null || r === '');
            this._rowsAutoMode = cleared;
            if (cleared && newConfig?.grid_options) delete newConfig.grid_options.rows;
        }
        // When card_type changes to calendar, set rows to 1 if not already set
        if (target?.configValue === 'card_type' && detail?.value === 'calendar') {
            if (newConfig.rows === undefined || newConfig.rows === null || newConfig.rows === '') {
                newConfig.rows = 1;
            }
        }
    } catch (e) {}

    // Update this._config with the new config
    this._config = newConfig;
    
    // Emit the event with the new configuration
    fireEvent(this, "config-changed", { config: newConfig });
}

  _arrayValueChange(index, value, array) {
    // Fix the climate sub-button addition
    if (this._config.sub_button && !this.subButtonJustAdded) {
      this.subButtonJustAdded = true;
      setTimeout(() => this._arrayValueChange(index, value, array), 10);
      return;
    }

    // Support nested array paths like "sub_button.2.buttons"
    const updateNestedArray = (root, path, arrIndex, patchValue) => {
      // Create intermediate objects/arrays as needed and update target array element
      const parts = String(path).split('.').filter(Boolean);
      let target = root;
      for (let i = 0; i < parts.length - 1; i++) {
        const key = parts[i];
        const nextKey = parts[i + 1];
        const nextIsIndex = !isNaN(parseInt(nextKey, 10));
        if (target[key] === undefined || target[key] === null) {
          target[key] = nextIsIndex ? [] : {};
        }
        // Ensure we always work on a shallow-cloned container to avoid side-effects
        if (Array.isArray(target[key])) {
          target[key] = [...target[key]];
        } else {
          target[key] = { ...target[key] };
        }
        target = target[key];
      }
      const lastKey = parts[parts.length - 1];
      const existingArray = Array.isArray(target[lastKey]) ? target[lastKey] : (target[lastKey] ? [...target[lastKey]] : []);
      const arrayCopy = Array.isArray(existingArray) ? [...existingArray] : [];
      const current = arrayCopy[arrIndex] || {};
      arrayCopy[arrIndex] = { ...current, ...patchValue };
      target[lastKey] = arrayCopy;
      return arrayCopy[arrIndex];
    };

    let updatedItem;
    if (typeof array === 'string' && array.includes('.')) {
      // Nested: e.g., sub_button.2.buttons
      updatedItem = updateNestedArray(this._config, array, index, value);
    } else {
      // Top-level array case (e.g., 'sub_button')
      this._config[array] = this._config[array] || [];
      const arrayCopy = [...this._config[array]];
      const current = arrayCopy[index] || {};
      arrayCopy[index] = { ...current, ...value };
      this._config[array] = arrayCopy;
      updatedItem = arrayCopy[index];
    }

    // Auto-assign explicit 'select' type when entity/select_attribute implies a dropdown and type is not set
    try {
      if (typeof array === 'string' && array.startsWith('sub_button')) {
        const sub = updatedItem || {};
        const entityId = sub.entity ?? this._config.entity ?? '';
        const looksLikeSelect = typeof entityId === 'string' && (entityId.startsWith('input_select') || entityId.startsWith('select'));
        const hasSelectAttribute = !!sub.select_attribute;
        if (!sub.sub_button_type && (looksLikeSelect || hasSelectAttribute)) {
          if (typeof array === 'string' && array.includes('.')) {
            updateNestedArray(this._config, array, index, { sub_button_type: 'select' });
          } else {
            const arrayCopy = [...this._config[array]];
            const current = arrayCopy[index] || {};
            arrayCopy[index] = { ...current, sub_button_type: 'select' };
            this._config[array] = arrayCopy;
          }
        }
      }
    } catch {}

    fireEvent(this, "config-changed", { config: this._config });
    this.requestUpdate();

    // Some editor interactions (esp. YAML edits) won't trigger ResizeObserver.
    // Recompute rows when sub_button structure changes.
    try {
      const a = String(array || '');
      if (a === 'sub_button' || a.startsWith('sub_button')) {
        this._scheduleAutoRowsCompute('sub_button changed');
      }
    } catch (_) {}
  }

  _ActionChanged(ev, array, index) {
    var hasDefaultEntity = false;
    try { 
      if (ev.currentTarget && 
          ev.currentTarget.__schema && 
          ev.currentTarget.__schema[0] && 
          ev.detail.value[ev.currentTarget.__schema[0].name] &&
          ev.detail.value[ev.currentTarget.__schema[0].name]['target'] &&
          ev.detail.value[ev.currentTarget.__schema[0].name]['target']['entity_id'] &&
          ev.detail.value[ev.currentTarget.__schema[0].name]['target']['entity_id'][0] === 'entity') {
        hasDefaultEntity = true;
      }
    }
    catch { }
    try { 
      if (ev.currentTarget && 
          ev.currentTarget.__schema && 
          ev.currentTarget.__schema[0] && 
          ev.detail.value[ev.currentTarget.__schema[0].name] &&
          ev.detail.value[ev.currentTarget.__schema[0].name]['target'] &&
          ev.detail.value[ev.currentTarget.__schema[0].name]['target']['entity_id'] === 'entity') {
        hasDefaultEntity = true;
      }
    }
    catch { }
    if (hasDefaultEntity) {
      if (ev.currentTarget && 
          ev.currentTarget.__schema && 
          ev.currentTarget.__schema[0] &&
          ev.detail.value[ev.currentTarget.__schema[0].name]) {
        ev.detail.value[ev.currentTarget.__schema[0].name]['action'] = 'call-service';
        if (ev.detail.value[ev.currentTarget.__schema[0].name]['perform_action'] != undefined) {
          ev.detail.value[ev.currentTarget.__schema[0].name]['service'] = "" + ev.detail.value[ev.currentTarget.__schema[0].name]['perform_action'];
          delete ev.detail.value[ev.currentTarget.__schema[0].name]['perform_action'];
        }
      }
    }

    // Update config with support for nested sub_button paths
    if (array === 'button_action' || array === 'event_action') {
      // Simple action containers
      this._config[array] = ev.detail.value;
    } else if (typeof array === 'string' && array.startsWith('sub_button')) {
      const patchValue = ev.detail.value; // e.g., { tap_action: {...} } or full sub-button object (from _updateActionsEntity)

      // Helper: merge patch into nested array element (supports paths like "sub_button.3.buttons")
      const updateNestedArrayMerge = (root, path, arrIndex, patch) => {
        const parts = String(path).split('.').filter(Boolean);
        let target = root;
        for (let i = 0; i < parts.length - 1; i++) {
          const key = parts[i];
          const nextKey = parts[i + 1];
          const nextIsIndex = !isNaN(parseInt(nextKey, 10));
          if (target[key] === undefined || target[key] === null) {
            target[key] = nextIsIndex ? [] : {};
          }
          if (Array.isArray(target[key])) {
            target[key] = [...target[key]];
          } else {
            target[key] = { ...target[key] };
          }
          target = target[key];
        }
        const lastKey = parts[parts.length - 1];
        const existingArray = Array.isArray(target[lastKey]) ? target[lastKey] : (target[lastKey] ? [...target[lastKey]] : []);
        const arrayCopy = Array.isArray(existingArray) ? [...existingArray] : [];
        const current = arrayCopy[arrIndex] || {};
        // Merge patch onto current sub-button object
        arrayCopy[arrIndex] = { ...current, ...patch };
        target[lastKey] = arrayCopy;
        return arrayCopy[arrIndex];
      };

      if (array.includes('.')) {
        updateNestedArrayMerge(this._config, array, index, patchValue);
      } else {
        // Top-level sub_button array (no nested groups)
        this._config[array] = this._config[array] || [];
        const arrayCopy = [...this._config[array]];
        const current = arrayCopy[index] || {};
        arrayCopy[index] = { ...current, ...patchValue };
        this._config[array] = arrayCopy;
      }
    } else if (array) {
      // Legacy/simple arrays
      this._config[array] = ev.detail.value;
    } else {
      // Top-level object replacement
      this._config = ev.detail.value;
    }

    fireEvent(this, "config-changed", { config: this._config });
  }

  _updateActionsEntity(ev) {
    let obj = JSON.parse(JSON.stringify(this._config)); // create a deep copy to work on
    const configKeys = ev.target.configValue.split('.');
    let i = 0
    for (i = 0; i < configKeys.length - 2; i++) {
      obj = obj[configKeys[i]] ? obj[configKeys[i]] : {};
    }

    if (!ev.target.checked) {
      if (obj[configKeys[i]] && obj[configKeys[i]].target?.entity_id === 'entity') {
        obj[configKeys[i]]['target'] = {};
      }
    } else {
      if (obj[configKeys[i]]) {
        obj[configKeys[i]]['target'] = { 'entity_id': 'entity' };
      } else {
        // Initialize the object if it doesn't exist
        obj[configKeys[i]] = { 'target': { 'entity_id': 'entity' } };
      }
    }

    // Build a minimal patch containing only the action that was modified (from our locally-updated copy)
    const actionName = configKeys[configKeys.length - 2];
    const actionObject = (obj && typeof obj === 'object' && obj[actionName]) ? obj[actionName] : {};
    const detail = { value: { [actionName]: actionObject } };
    const currentTarget = { '__schema': [{ 'name': actionName }] };
    const newev = { ...ev, detail, currentTarget };

    // Derive the correct array path and index for nested sub-buttons
    let arrayPath = null;
    let idx = null;
    if (configKeys[0] === 'button_action' || configKeys[0] === 'event_action') {
      arrayPath = configKeys[0];
    } else if (configKeys.length >= 4) {
      // Handles: sub_button.0.tap_action.default_entity (top-level sub_button)
      //          sub_button.3.buttons.1.tap_action.default_entity (nested group button)
      const maybeIndex = configKeys[configKeys.length - 3];
      const pathParts = configKeys.slice(0, configKeys.length - 3);
      arrayPath = pathParts.join('.');
      const parsed = parseInt(maybeIndex, 10);
      idx = isNaN(parsed) ? null : parsed;
    } else if (configKeys.length >= 3) {
      // Fallback for simpler top-level paths
      arrayPath = configKeys[0];
      const parsed = parseInt(configKeys[1], 10);
      idx = isNaN(parsed) ? null : parsed;
    }

    this._ActionChanged(newev, arrayPath, idx);
  }

  _computeLabelCallback = (schema) => {
    return schema.label;
  }

  _conditionChanged(ev, index, array) {
    ev.stopPropagation();

    if (array) {
      this._config[array] = this._config[array] || [];
      let arrayCopy = [...this._config[array]];
      arrayCopy[index] = arrayCopy[index] || {};
      const conditions = ev.detail.value;
      arrayCopy[index] = {
        ...arrayCopy[index],
        visibility: conditions
      };
      this._config[array] = arrayCopy;
    } else if (this._config.card_type === 'pop-up') {
      const conditions = ev.detail.value;
      this._config = {
        ...this._config,
        trigger: conditions
      };
    }

    fireEvent(this, "config-changed", { config: this._config });
    this.requestUpdate();
  }

  static get styles() {
    return css`
        ${unsafeCSS(styles + moduleStyles)}
    `;
  }

  // Observer for auto-rows computation
  static _resizeObserver = null;
  static _editorInstanceMap = new WeakMap();

  _getBubbleCardFromPreview() {
    try {
      // Prefer the direct context provided by the card itself (works in pop-ups)
      if (this._previewCardRoot) {
        const host = this._previewCardRoot.host || this._previewCardHost;
        if (host?.isConnected || this._previewCardRoot.isConnected) {
          return this._previewCardRoot;
        }
      }
      // Fallback: if we have a connected host but no cached root yet, use its shadowRoot/root node.
      // This avoids missing the preview when the context event hasn't fired again after YAML edits.
      if (this._previewCardHost?.isConnected) {
        return this._previewCardHost.shadowRoot || this._previewCardHost.getRootNode?.() || null;
      }
      // Last fallback: locate the preview card through the editor dialog DOM (deep shadow traversal).
      const previewContainer = this._getEditorPreviewContainer();
      if (previewContainer) {
        const bubbleCardEl = this._deepQuerySelector(previewContainer, 'bubble-card');
        const root = bubbleCardEl?.shadowRoot || null;
        if (root) {
          this._previewCardHost = bubbleCardEl;
          this._previewCardRoot = root;
          return root;
        }
      }
    } catch (e) {
      return null;
    }
  }

  _setupAutoRowsObserver() {
    // Only in editor context and when grid_options.rows is not explicitly set
    const hasGridRows =
      this._config?.grid_options?.rows !== undefined &&
      this._config?.grid_options?.rows !== null &&
      this._config?.grid_options?.rows !== '';
    if (!this._config || hasGridRows || this._rowsAutoMode === false) return;

    const bubbleCard = this._getBubbleCardFromPreview();
    if (!bubbleCard) return;

    const elementsToObserve = [
      bubbleCard.querySelector('.bubble-sub-button-bottom-container'),
      bubbleCard.querySelector('.bubble-buttons-container.bottom-fixed'),
      bubbleCard.querySelector('.bubble-sub-button-container')
    ].filter(Boolean);

    // Initialize observer if it doesn't exist
    if (!BubbleCardEditor._resizeObserver) {
      BubbleCardEditor._resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          const editor = BubbleCardEditor._editorInstanceMap.get(entry.target);
          if (editor) {
            const card = editor._getBubbleCardFromPreview();
            if (card) {
              editor._computeAndApplyRows(card);
            }
          }
        }
      });
    }

    // Unobserve elements that are no longer relevant for this instance
    if (this._observedElements) {
      this._observedElements.forEach(el => {
        if (!elementsToObserve.includes(el)) {
          BubbleCardEditor._resizeObserver.unobserve(el);
          BubbleCardEditor._editorInstanceMap.delete(el);
        }
      });
    }

    // Observe new elements
    elementsToObserve.forEach(el => {
      if (!this._observedElements?.includes(el)) {
        BubbleCardEditor._resizeObserver.observe(el);
        BubbleCardEditor._editorInstanceMap.set(el, this);
      }
    });

    this._observedElements = elementsToObserve;

    // Perform an initial computation
    requestAnimationFrame(() => {
        const currentCard = this._getBubbleCardFromPreview();
        if (currentCard) {
            this._computeAndApplyRows(currentCard);
        }
    });
  }

  /**
   * Checks if custom styles or modules contain CSS that affects the container height.
   * Patterns detected: aspect-ratio, height: 100%, height: XXXpx on .bubble-container
   */
  _hasCustomHeightStyles() {
    // Regex pattern to detect height-affecting styles on .bubble-container
    // Matches: aspect-ratio, height: 100%, height: XXXpx/em/rem/vh/etc
    const heightPatterns = [
      /\.bubble-container[^{]*\{[^}]*aspect-ratio\s*:/i,
      /\.bubble-container[^{]*\{[^}]*height\s*:\s*100%/i,
      /\.bubble-container[^{]*\{[^}]*height\s*:\s*\d+(\.\d+)?\s*(px|em|rem|vh|vw|%)/i,
    ];

    const checkStylesForPatterns = (stylesString) => {
      if (!stylesString || typeof stylesString !== 'string') return false;
      return heightPatterns.some(pattern => pattern.test(stylesString));
    };

    // Check custom styles from config
    if (this._config?.styles && checkStylesForPatterns(this._config.styles)) {
      return true;
    }

    // Check active modules for height-affecting styles
    try {
      if (yamlKeysMap && yamlKeysMap.size > 0) {
        // Get list of active modules for this card
        const activeModules = new Set();
        const configExcludedModules = new Set();

        // Parse config.modules to find active and excluded modules
        if (Array.isArray(this._config?.modules)) {
          this._config.modules.forEach(mod => {
            if (typeof mod === 'string' && mod.startsWith('!')) {
              configExcludedModules.add(mod.substring(1));
            } else if (typeof mod === 'string') {
              activeModules.add(mod);
            }
          });
        } else if (this._config?.modules && typeof this._config.modules === 'string') {
          if (this._config.modules.startsWith('!')) {
            configExcludedModules.add(this._config.modules.substring(1));
          } else {
            activeModules.add(this._config.modules);
          }
        }

        // Add default module if present and not excluded
        if (yamlKeysMap.has('default') && !configExcludedModules.has('default')) {
          activeModules.add('default');
        }

        // Add global modules
        yamlKeysMap.forEach((value, key) => {
          if (value && typeof value === 'object' && value.is_global === true && !configExcludedModules.has(key)) {
            activeModules.add(key);
          }
        });

        // Check each active module for height-affecting styles
        for (const moduleId of activeModules) {
          const moduleData = yamlKeysMap.get(moduleId);
          if (moduleData) {
            const moduleCode = typeof moduleData === 'object' ? moduleData.code : moduleData;
            if (checkStylesForPatterns(moduleCode)) {
              return true;
            }
          }
        }
      }
    } catch (e) {
      // Silently fail if module check fails
    }

    return false;
  }

  _computeAndApplyRows(bubbleCard) {
    try {
      if (!bubbleCard || this._rowsAutoMode === false || !this._config) return { applied: false };

      // Skip auto rows calculation if custom height styles are detected
      if (this._hasCustomHeightStyles()) {
        if (this._config.rows !== undefined && this._rowsAutoMode !== false) {
          const newConfig = { ...this._config };
          delete newConfig.rows;
          this._config = newConfig;
          fireEvent(this, 'config-changed', { config: newConfig });
        }
        return { applied: false };
      }

      const isCalendar = this._config.card_type === 'calendar';
      const isSeparator = this._config.card_type === 'separator';
      const bottomSubButtons = bubbleCard.querySelector('.bubble-sub-button-bottom-container');
      const bottomMainButtons = bubbleCard.querySelector('.bubble-buttons-container.bottom-fixed');
      const mainSubButtons = bubbleCard.querySelector('.bubble-sub-button-container');
      const contentContainer = bubbleCard.querySelector('.bubble-content-container');

      // Measure heights once to avoid multiple reflows
      const bottomSubButtonsHeight = bottomSubButtons ? bottomSubButtons.getBoundingClientRect().height : 0;
      const bottomMainButtonsHeight = bottomMainButtons ? bottomMainButtons.getBoundingClientRect().height : 0;
      const mainSubButtonsHeight = mainSubButtons ? mainSubButtons.getBoundingClientRect().height : 0;

      // Stabilization: ignore micro layout changes (< 2px) to prevent infinite loops
      // caused by modules with dynamic JS expressions that trigger small reflows
      const currentHeights = {
        bottomSub: Math.round(bottomSubButtonsHeight),
        bottomMain: Math.round(bottomMainButtonsHeight),
        mainSub: Math.round(mainSubButtonsHeight)
      };
      if (this._lastMeasuredHeights) {
        const threshold = 1;
        const bottomSubDiff = Math.abs(currentHeights.bottomSub - this._lastMeasuredHeights.bottomSub);
        const bottomMainDiff = Math.abs(currentHeights.bottomMain - this._lastMeasuredHeights.bottomMain);
        const mainSubDiff = Math.abs(currentHeights.mainSub - this._lastMeasuredHeights.mainSub);
        if (bottomSubDiff < threshold && bottomMainDiff < threshold && mainSubDiff < threshold) {
          return { applied: false };
        }
      }
      this._lastMeasuredHeights = currentHeights;
      
      // For calendar cards without bottom buttons, fix rows to 1 and prevent recalculation
      if (isCalendar) {
        const hasBottomButtons = bottomSubButtonsHeight > 0 || bottomMainButtonsHeight > 0;
        if (!hasBottomButtons) {
          this._firstRowsComputation = true;
          // Ensure rows is set to 1 and prevent further recalculations
          if (this._config.rows !== 1) {
            const newConfig = { ...this._config, rows: 1 };
            this._config = newConfig;
            fireEvent(this, 'config-changed', { config: newConfig });
          }
          return;
        }
      }

      const container = bubbleCard.querySelector('.bubble-container');
      const containerRect = container ? container.getBoundingClientRect() : null;

      // Check if content container is visible and has content
      let hasVisibleContent = false;
      if (contentContainer) {
        const children = Array.from(contentContainer.children || []);
        hasVisibleContent = children.some(child => {
          const rect = child.getBoundingClientRect();
          const style = getComputedStyle(child);
          return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
        });
      }

      // Check if there are main sub-buttons (use already measured height)
      const hasMainSubButtons = mainSubButtonsHeight > 0;

      const hasBottomConfigured = (() => {
        const rawSubButton = this._config?.sub_button;
        if (!rawSubButton) return false;
        if (Array.isArray(rawSubButton)) return false;
        const bottom = Array.isArray(rawSubButton.bottom) ? rawSubButton.bottom : [];
        return bottom.some((item) => !!item);
      })();

      let reservedFromBottom = bottomSubButtonsHeight + bottomMainButtonsHeight;
      if (reservedFromBottom <= 0 && hasBottomConfigured) {
        reservedFromBottom = 46;
      }
      const computeBottomOffset = (element) => {
        if (!element) return 0;
        try {
          const style = getComputedStyle(element);
          const offset = parseFloat(style.bottom);
          return Number.isFinite(offset) ? Math.max(0, offset) : 0;
        } catch (_) {
          return 0;
        }
      };
      // Only add bottom offset for main buttons when there are also bottom sub-buttons
      // The 8px CSS bottom offset is aesthetic spacing that doesn't require extra rows
      // when main buttons are alone at the bottom
      if (bottomMainButtons && bottomSubButtonsHeight > 0) {
        reservedFromBottom += computeBottomOffset(bottomMainButtons);
      }

      // Calculate height reserved by main sub-buttons (in the main area)
      // Only count this if there are actual main sub-buttons present
      let reservedFromMain = 0;
      if (hasMainSubButtons) {
        // Main sub-buttons take space in the main content area
        // We need to account for their height in the overall card height calculation
        reservedFromMain = mainSubButtonsHeight;

        // Add padding based on the actual computed styles
        const mainComputed = getComputedStyle(mainSubButtons);
        const marginTop = parseFloat(mainComputed.marginTop) || 0;
        const marginBottom = parseFloat(mainComputed.marginBottom) || 0;
        const paddingTop = parseFloat(mainComputed.paddingTop) || 0;
        const paddingBottom = parseFloat(mainComputed.paddingBottom) || 0;

        reservedFromMain += marginTop + marginBottom + paddingTop + paddingBottom;
      }

      // Ensure reservedFromMain doesn't go below overshoot value
      // 36 if no bottom sub-buttons, 46 if there are bottom sub-buttons
      const hasBottomSubButtons = reservedFromBottom > 0;
      const minOvershootValue = hasBottomSubButtons ? 46 : 36;
      if (reservedFromMain > 0) {
        reservedFromMain = Math.max(reservedFromMain, minOvershootValue);
      }
      
      const computed = (container || bubbleCard) ? getComputedStyle(container || bubbleCard) : null;
      const rowHeightVar = computed ? computed.getPropertyValue('--row-height') : '';
      const rowHeight = parseFloat(rowHeightVar) || 56;
      const rowGapVar = computed ? computed.getPropertyValue('--row-gap') : '';
      const rowGap = parseFloat(rowGapVar) || 8;
      const effectiveRowStep = rowHeight + rowGap;

      const defaultRows = this._config.card_type === 'separator' ? 0.8 : 1;
      let computedRows;

      // Check if there are bottom sub-buttons but no main sub-buttons
      // For separator and calendar cards, always need overshoot when bottom sub-buttons exist without main sub-buttons
      const needsOvershoot = hasBottomSubButtons && !hasMainSubButtons && (hasVisibleContent || isCalendar || isSeparator);

      // Calculate total reserved height (bottom overlays + main sub-buttons)
      const totalReservedHeight = reservedFromBottom + reservedFromMain;

      if (totalReservedHeight > 0 || needsOvershoot) {
        const divisor = (Number.isFinite(effectiveRowStep) && effectiveRowStep > 0) ? effectiveRowStep : rowHeight;
        // Convert required additional height to whole pixels with a small overshoot for stability
        // Add extra overshoot when bottom sub-buttons exist without main sub-buttons and content is visible
        const baseOvershootPx = -36; // small safety margin to avoid oscillations
        const extraOvershootPx = needsOvershoot ? 46 : 0; // additional overshoot for bottom-only case
        // Additional reduction for sub-buttons card type
        const subButtonsAdjustment = this._config.card_type === 'sub-buttons' ? -4 : 0;
        const overshootPx = baseOvershootPx + extraOvershootPx + subButtonsAdjustment;
        const extraPx = Math.ceil((totalReservedHeight || 0) + overshootPx);
        const extraRows = extraPx / divisor;
        computedRows = defaultRows + extraRows;
        // Keep high precision to avoid rounding jitter; clamp minimal value
        computedRows = Math.max(0.1, Math.round(computedRows * 1000) / 1000);
      } else {
        computedRows = undefined;
      }
      
      const currentRows = this._config.rows;

      if (computedRows === currentRows || (computedRows === undefined && currentRows === undefined)) {
        this._firstRowsComputation = true;
        return { applied: false };
      }
      // Avoid tiny oscillations due to subpixel layout differences
      if (typeof computedRows === 'number' && typeof currentRows === 'number') {
        if (Math.abs(computedRows - currentRows) < 0.01) {
          return { applied: false };
        }
      }
      
      if (computedRows === defaultRows && currentRows === undefined) {
        return { applied: false };
      }

      if (this._rowsAutoMode === false) return { applied: false };

      const newConfig = { ...this._config };
      if (computedRows === undefined) {
          delete newConfig.rows;
      } else {
          newConfig.rows = computedRows;
      }
      
      this._config = newConfig;

      // Skip emitting config-changed on the very first computation to avoid
      // visual "flash" when opening the editor on a card that already had auto-calculated rows.
      if (!this._firstRowsComputation) {
        this._firstRowsComputation = true;
        return { applied: false, skippedFirst: true };
      }

      fireEvent(this, 'config-changed', { config: newConfig });
      return { applied: true, rows: newConfig.rows };
    } catch (_) {}
    return { applied: false };
  }

  _initializeLists(t) {
    const formateList = item => ({
        label: item,
        value: item
    });

    let selectEntities = [];

    if (Object.keys(this._entityCache).length === 0) {
        // Populate _entityCache and identify selectEntities in a single pass
        Object.keys(this.hass.states).forEach(entityId => {
            const entity = this.hass.states[entityId];
            const domain = entityId.split('.')[0];
            
            if (!this._entityCache[domain]) {
                this._entityCache[domain] = [];
            }
            this._entityCache[domain].push(entityId);

            // Check for selectable attributes for selectEntities
            if (this._selectable_attributes.some(attr => entity.attributes?.[attr])) {
                if (!selectEntities.includes(entityId)) {
                    selectEntities.push(entityId);
                }
            }
        });
    } else {
        const relevantDomainsForSelect = ['input_select', 'select'];
        relevantDomainsForSelect.forEach(domain => {
            if (this._entityCache[domain]) {
                selectEntities = [...selectEntities, ...this._entityCache[domain]];
            }
        });
        // Still need to check for other entities with selectable attributes not in input_select/select domains
        Object.keys(this.hass.states).forEach(entityId => {
            const entity = this.hass.states[entityId];
            if (this._selectable_attributes.some(attr => entity.attributes?.[attr])) {
                if (!selectEntities.includes(entityId)) { // Avoid duplicates
                    selectEntities.push(entityId);
                }
            }
        });
    }
    
    // Add entities from relevantDomains to selectEntities if not already present from attribute check
    const relevantDomains = ['input_select', 'select'];
    relevantDomains.forEach(domain => {
        if (this._entityCache[domain]) {
            this._entityCache[domain].forEach(entityId => {
                if (!selectEntities.includes(entityId)) {
                    selectEntities.push(entityId);
                }
            });
        }
    });
    // Ensure unique entities
    selectEntities = [...new Set(selectEntities)];

    const filteredStates = {};
    selectEntities.forEach(entityId => {
        if (this.hass.states[entityId]) {
            filteredStates[entityId] = this.hass.states[entityId];
        }
    });

    this.inputSelectList = { ...this.hass };
    this.inputSelectList.states = filteredStates;

    // Cache attributeList
    if (this._entity) {
        if (this._entity === this._cachedAttributeListEntity && this._cachedAttributeList) {
            this.attributeList = this._cachedAttributeList;
        } else {
            this.attributeList = Object.keys(this.hass.states[this._entity]?.attributes || {}).map((attributeName) => {
                let entity = this.hass.states[this._entity];
                let formattedName = this.hass.formatEntityAttributeName(entity, attributeName);
                return { label: formattedName, value: attributeName };
            });
            this._cachedAttributeList = this.attributeList;
            this._cachedAttributeListEntity = this._entity;
        }
    } else {
        this.attributeList = [];
        this._cachedAttributeList = null;
        this._cachedAttributeListEntity = null;
    }

    // Only recreate cardTypeList if it doesn't exist or if translation might have changed
    const calendarLabel = t('editor.calendar.name');
    if (!this.cardTypeList || (this._cachedCalendarLabel && this._cachedCalendarLabel !== calendarLabel)) {
        this.cardTypeList = [{
                'label': 'Button (Switch, slider, ...)',
                'value': 'button'
            },
            {
                'label': calendarLabel,
                'value': 'calendar'
            },
            {
                'label': 'Cover',
                'value': 'cover'
            },
            {
                'label': 'Climate',
                'value': 'climate'
            },
            {
                'label': 'Empty column',
                'value': 'empty-column'
            },
            {
                'label': 'Horizontal buttons stack',
                'value': 'horizontal-buttons-stack'
            },
            {
                'label': 'Media player',
                'value': 'media-player'
            },
            {
                'label': 'Pop-up',
                'value': 'pop-up'
            },
            {
                'label': 'Select',
                'value': 'select'
            },
            {
                'label': 'Separator',
                'value': 'separator'
            },
            {
                'label': 'Sub-buttons only',
                'value': 'sub-buttons'
            }
        ];
        this._cachedCalendarLabel = calendarLabel;
    }
  }

  _handleCardContext(event) {
    try {
      const detail = event?.detail;
      if (!detail) return;
      const score = this._scoreCardContext(detail);
      if (score <= this._previewCardScore) return;

      const host = detail.context || detail.card?.closest?.('bubble-card') || detail.card?.getRootNode?.()?.host || null;
      const root = detail.context?.shadowRoot || host?.shadowRoot || detail.card?.getRootNode?.() || null;
      if (!root) return;

      this._previewCardScore = score;
      this._previewCardRoot = root;
      this._previewCardHost = host || root.host || null;
      this._setupAutoRowsObserver();
    } catch (_) {}
  }

  _scoreCardContext(detail) {
    const cfg = detail?.config || {};
    const target = this._config || {};
    let score = 0;
    if (detail?.isEditor || detail?.editMode) score += 5;
    if (cfg.card_type && cfg.card_type === target.card_type) score += 4;
    if (cfg.entity && cfg.entity === target.entity) score += 3;
    if (cfg.hash && cfg.hash === target.hash) score += 2;
    if (cfg.button_type && cfg.button_type === target.button_type) score += 1;
    return score;
  }

  _resetPreviewCardReference() {
    this._previewCardRoot = null;
    this._previewCardHost = null;
    this._previewCardScore = -Infinity;
    this._lastMeasuredHeights = null;
  }
}

customElements.define('bubble-card-editor', BubbleCardEditor);


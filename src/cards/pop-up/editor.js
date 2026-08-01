import { html } from 'lit';
import { fireEvent } from '../../tools/utils.js';
import setupTranslation, { ensureEditorTranslations } from '../../tools/localize.js';
import { tTemplate } from '../../editor/utils.js';
import { renderButtonEditor } from '../button/editor.js';
import { registerPopUpHash, isHashOnCurrentPage } from './navigation-picker-bridge.js';
import { renderLegacyMigrationNotice } from './migration.js';

const POPUP_HASH_PREFIX = '#';
const POPUP_HASH_PLACEHOLDER = 'pop-up-name';

function getButtonList(t) {
    return [
        { 'label': t('editor.button.type_switch'), 'value': 'switch' },
        { 'label': t('editor.button.type_slider'), 'value': 'slider' },
        { 'label': t('editor.button.type_state'), 'value': 'state' },
        { 'label': t('editor.button.type_name'), 'value': 'name' }
    ];
}

function getPopUpModeList(t) {
    return [
        { 'label': t('editor.common.default'), 'value': 'default' },
        { 'label': t('editor.popup.mode_fit_content'), 'value': 'fit-content' },
        { 'label': t('editor.popup.mode_centered'), 'value': 'centered' },
        { 'label': t('editor.popup.mode_adaptive'), 'value': 'adaptive-dialog' },
    ];
}

function getPopupPerformanceModeList(t) {
    return [
        { 'label': t('editor.common.default'), 'value': 'default' },
        { 'label': t('editor.popup.performance'), 'value': 'performance' },
    ];
}

function getPopUpModeValue(config) {
    if (config?.popup_mode === 'fit-content') return 'fit-content';
    if (config?.popup_mode === 'centered') return 'centered';
    if (config?.popup_mode === 'adaptive-dialog') return 'adaptive-dialog';
    return 'default';
}

export function getPopupPerformanceModeValue(config) {
    if (config?.performance_mode === 'performance') {
        return 'performance';
    }

    return 'default';
}

function renderPopupStyleDropdown(editor) {
    const t = setupTranslation(editor.hass);
    return html`
        <ha-form
            .hass=${editor.hass}
            .data=${{ popup_style: editor._config.popup_style ?? 'bubble' }}
            .schema=${[{
                name: 'popup_style',
                selector: {
                    select: {
                        options: [
                            { label: t('editor.popup.style_bubble') + t('editor.common.default_suffix'), value: 'bubble' },
                            { label: t('editor.popup.style_classic'), value: 'classic' },
                        ],
                        mode: 'dropdown'
                    }
                }
            }]}
            .computeLabel=${() => t('editor.popup.style')}
            @value-changed=${(ev) => {
                const value = ev.detail.value.popup_style;
                if (value === 'bubble' || !value) {
                    const newConfig = { ...editor._config };
                    delete newConfig.popup_style;
                    if (editor._config.popup_style === 'classic') {
                        delete newConfig.button_type;
                    }
                    fireEvent(editor, 'config-changed', { config: newConfig });
                } else {
                    editor._valueChanged({
                        target: { configValue: 'popup_style' },
                        detail: { value }
                    });
                }
            }}
        ></ha-form>
    `;
}

function renderPopUpModeDropdown(editor) {
    const t = setupTranslation(editor.hass);
    return html`
        <ha-form
            .hass=${editor.hass}
            .data=${{ popup_mode: getPopUpModeValue(editor._config) }}
            .schema=${[{
                name: 'popup_mode',
                selector: {
                    select: {
                        options: getPopUpModeList(t),
                        mode: 'dropdown'
                    }
                }
            }]}
            .computeLabel=${() => t('editor.popup.mode')}
            @value-changed=${(ev) => {
                const value = ev.detail.value.popup_mode;
                editor._valueChanged({
                    target: { configValue: 'popup_mode' },
                    detail: { value }
                });
            }}
        ></ha-form>
    `;
}

function renderPopupPerformanceModeDropdown(editor) {
    const t = setupTranslation(editor.hass);
    const isPerformance = getPopupPerformanceModeValue(editor._config) === 'performance';

    return html`
        <ha-form
            .hass=${editor.hass}
            .data=${{ performance_mode: getPopupPerformanceModeValue(editor._config) }}
            .schema=${[{
                name: 'performance_mode',
                selector: {
                    select: {
                        options: getPopupPerformanceModeList(t),
                        mode: 'dropdown'
                    }
                }
            }]}
            .computeLabel=${() => t('editor.popup.performance_mode')}
            @value-changed=${(ev) => {
                const value = ev.detail.value.performance_mode;

                if (value === 'performance') {
                    editor._valueChanged({
                        target: { configValue: 'performance_mode' },
                        detail: { value }
                    });
                    return;
                }

                const newConfig = { ...editor._config };
                delete newConfig.performance_mode;
                fireEvent(editor, 'config-changed', { config: newConfig });
            }}
        ></ha-form>
        ${isPerformance ? html`
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t('editor.popup.performance_mode')}
                </h4>
                <div class="content">
                    <p>${t('editor.popup.performance_body')}</p>
                </div>
            </div>
        ` : html``}
    `;
}

function getPopUpLayoutConfig(config) {
    const mode = getPopUpModeValue(config);
    if (mode === 'fit-content') {
        return {
            popup_mode: 'fit-content',
            ...(config?.with_bottom_offset ? { with_bottom_offset: true } : {}),
        };
    }
    if (mode === 'centered') {
        return {
            popup_mode: 'centered',
            ...(config?.full_width_on_mobile ? { full_width_on_mobile: true } : {}),
        };
    }
    if (mode === 'adaptive-dialog') {
        return {
            popup_mode: 'adaptive-dialog',
            ...(config?.with_bottom_offset ? { with_bottom_offset: true } : {}),
        };
    }
    return {};
}

function getPopUpPerformanceConfig(config) {
    return getPopupPerformanceModeValue(config) === 'performance'
        ? { performance_mode: 'performance' }
        : {};
}

function getPopUpBehaviorConfig(config) {
    return {
        ...getPopUpLayoutConfig(config),
        ...getPopUpPerformanceConfig(config),
    };
}

function findSuitableEntities(hass, entityType = 'light', limit = 2) {
    const entities = [];
    
    if (!hass || !hass.states) return entities;
    
    Object.keys(hass.states).forEach(entityId => {
        if (entities.length >= limit) return;
        
        if (entityId.startsWith(entityType + '.')) {
            const entity = hass.states[entityId];
            let supportsBrightness = false;
            
            if ('brightness' in entity.attributes) {
                supportsBrightness = true;
            }
            
            entities.push({
                entity: entityId,
                supportsBrightness: supportsBrightness
            });
        }
    });
    
    return entities;
}

function createPopUpExampleCards(hass) {
    const suitableEntities = findSuitableEntities(hass);

    return suitableEntities.length > 0
        ? suitableEntities.map((entity) => ({
            type: 'custom:bubble-card',
            card_type: 'button',
            button_type: entity.supportsBrightness ? 'slider' : 'switch',
            entity: entity.entity,
            show_state: true,
            grid_options: { columns: 6 },
        }))
        : [
            {
                type: 'custom:bubble-card',
                card_type: 'button',
                button_type: 'name',
                name: setupTranslation(hass)('editor.popup.example_lamp'),
                icon: 'mdi:floor-lamp-outline',
                grid_options: { columns: 6 },
            },
        ];
}

function duplicateHashWarningTemplate(t) {
    return html`
        <div id="duplicate-hash-warning" style="display: none;">
            <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    ${t('editor.popup.duplicate_hash_title')}
                </h4>
                <div class="content">
                    <p>${t('editor.popup.duplicate_hash_body')}</p>
                </div>
            </div>
        </div>
    `;
}

export function normalizePopUpHashInputValue(value) {
    const trimmedValue = typeof value === 'string' ? value.trim() : '';
    if (!trimmedValue) {
        return POPUP_HASH_PREFIX;
    }

    const hashBody = trimmedValue.replace(/^#+/, '');
    return hashBody ? `${POPUP_HASH_PREFIX}${hashBody}` : POPUP_HASH_PREFIX;
}

function getPopUpHashInputDisplayValue(value) {
    return normalizePopUpHashInputValue(value).slice(1);
}

export function getPopUpHashInputState(value, originalHash) {
    const normalizedValue = normalizePopUpHashInputValue(value);
    const isEmpty = normalizedValue === POPUP_HASH_PREFIX;
    const isDuplicate = !isEmpty && isHashOnCurrentPage(normalizedValue, originalHash);

    return {
        normalizedValue,
        isEmpty,
        isDuplicate,
        isValid: !isEmpty && !isDuplicate,
    };
}

function renderDialogFullWidthOption(editor) {
    const mode = getPopUpModeValue(editor._config);
    if (mode !== 'centered') {
        return html``;
    }

    const t = setupTranslation(editor.hass);
    return html`
        <ha-formfield>
            <ha-switch
                aria-label="${t('editor.popup.full_width_mobile')}"
                .checked=${editor._config?.full_width_on_mobile ?? false}
                .configValue=${"full_width_on_mobile"}
                @change=${editor._valueChanged}
            ></ha-switch>
            <div class="mdc-form-field">
                <label class="mdc-label">${t('editor.popup.full_width_mobile')}</label>
            </div>
        </ha-formfield>
    `;
}

function renderBottomOffsetOption(editor) {
    const mode = getPopUpModeValue(editor._config);
    if (mode !== 'fit-content' && mode !== 'adaptive-dialog') {
        return html``;
    }

    const t = setupTranslation(editor.hass);
    return html`
        <ha-formfield>
            <ha-switch
                aria-label="${t('editor.popup.bottom_offset_toggle')}"
                .checked=${editor._config?.with_bottom_offset ?? false}
                .configValue="${"with_bottom_offset"}"
                @change=${editor._valueChanged}
            ></ha-switch>
            <div class="mdc-form-field">
                <label class="mdc-label">${t('editor.popup.bottom_offset_toggle')}</label>
            </div>
        </ha-formfield>
        <div class="bubble-info">
            <h4 class="bubble-section-title">
                <ha-icon icon="mdi:information-outline"></ha-icon>
                ${t('editor.popup.bottom_offset_title')}
            </h4>
            <div class="content">
                <p>${t('editor.popup.bottom_offset_body')}</p>
            </div>
        </div>
    `;
}

function getEditorSession(configHash) {
    const session = window.__bubbleEditorSession;
    if (session) {
        if (session.originalHash === configHash) return session;
        if (session.lastChangedHash === configHash && !session.committed) return session;
    }
    window.__bubbleEditorSession = {
        originalHash: configHash,
        lastChangedHash: configHash,
        committed: false
    };
    return window.__bubbleEditorSession;
}

function commitEditorSessionHash(hashValue) {
    if (!window.__bubbleEditorSession) {
        return;
    }

    window.__bubbleEditorSession.originalHash = hashValue;
    window.__bubbleEditorSession.lastChangedHash = hashValue;
    window.__bubbleEditorSession.committed = true;
}

function syncHashInputState(editor, originalHash, rawValue) {
    const hashInput = editor.shadowRoot?.querySelector('#hash-input');
    const warning = editor.shadowRoot?.querySelector('#duplicate-hash-warning');
    const currentRawValue = rawValue ?? hashInput?.value ?? window.__bubbleEditorSession?.lastChangedHash ?? '';

    const hashState = getPopUpHashInputState(currentRawValue, originalHash);
    if (hashInput) {
        const displayValue = getPopUpHashInputDisplayValue(currentRawValue);
        if (hashInput.value !== displayValue) {
            hashInput.value = displayValue;
        }
    }

    if (warning) {
        warning.style.display = hashState.isDuplicate ? '' : 'none';
    }

    const createButton = editor.shadowRoot?.querySelector('#create-pop-up-button');
    if (createButton) {
        createButton.classList.toggle('disabled', !hashState.isValid);
        createButton.disabled = !hashState.isValid;
    }

    return hashState;
}

function updateUIForVerticalStack(editor, isInVerticalStack) {
    if (!editor.shadowRoot) return;

    const t = setupTranslation(editor.hass);

    // Update the alert container
    const alertContainer = editor.shadowRoot.querySelector('#vertical-stack-alert-container');
    if (alertContainer) {
        alertContainer.style.display = isInVerticalStack ? 'block' : 'none';
    }

    // Update the button icon and text
    const buttonIcon = editor.shadowRoot.querySelector('#create-pop-up-button ha-icon');
    if (buttonIcon) {
        buttonIcon.icon = isInVerticalStack ? 'mdi:content-save' : 'mdi:plus';
    }

    const buttonText = editor.shadowRoot.querySelector('#button-text');
    if (buttonText) {
        buttonText.textContent = isInVerticalStack ? t('editor.popup.update_hash') : t('editor.popup.create');
    }

    // Update the example toggle state.
    const exampleSwitch = editor.shadowRoot.querySelector('#include-example');
    if (exampleSwitch) {
        exampleSwitch.disabled = isInVerticalStack;
    }

    const exampleLabel = editor.shadowRoot.querySelector('#include-example-label');
    if (exampleLabel) {
        exampleLabel.textContent = t('editor.popup.include_example') +
            (isInVerticalStack ? t('editor.popup.include_example_disabled') : '');
    }
}

function createPopUpConfig(editor, originalConfig) {
    try {
        const popupBehaviorConfig = getPopUpBehaviorConfig(editor._config);
        
        // Read the current form value.
        const includeExample = editor.shadowRoot.querySelector("#include-example")?.checked || false;
        let hashValue = POPUP_HASH_PREFIX;
        const hashState = syncHashInputState(editor);
        if (!hashState.isValid) {
            return;
        }
        hashValue = hashState.normalizedValue;
        
        if (includeExample) {
            const t = setupTranslation(editor.hass);
            editor._config = {
                type: 'custom:bubble-card',
                card_type: 'pop-up',
                ...popupBehaviorConfig,
                name: t('editor.popup.example_room'),
                icon: 'mdi:sofa-outline',
                hash: hashValue,
                cards: [
                    {
                        type: 'custom:bubble-card',
                        card_type: 'separator',
                        name: t('editor.popup.example_lights'),
                        icon: 'mdi:lightbulb-outline',
                    },
                    ...createPopUpExampleCards(editor.hass)
                ]
            };
        } else {
            // Create an empty standalone pop-up.
            editor._config = {
                type: 'custom:bubble-card',
                card_type: 'pop-up',
                ...popupBehaviorConfig,
                hash: hashValue,
                cards: []
            };

            // Keep brand-new pop-ups visible in preview.
            window.bubbleNewlyCreatedHashes = window.bubbleNewlyCreatedHashes || new Set();
            window.bubbleNewlyCreatedHashes.add(hashValue);
        }

        registerPopUpHash(hashValue, {
            name: editor._config.name,
            icon: editor._config.icon
        });

        commitEditorSessionHash(hashValue);
        
        fireEvent(editor, "config-changed", { config: editor._config });
    } catch (error) {
        console.error("Error creating pop-up:", error);
        // Restore original config if there's an error
        editor._config = originalConfig;
        editor._config.hash = normalizePopUpHashInputValue(window.__bubbleEditorSession?.lastChangedHash || '');
        registerPopUpHash(editor._config.hash, {
            name: editor._config.name,
            icon: editor._config.icon
        });
        fireEvent(editor, "config-changed", { config: editor._config });
    }
}

export function renderPopUpEditor(editor) {
    const t = setupTranslation(editor.hass);
    const conditions = editor._config?.trigger ?? [];
    let button_action = editor._config.button_action || '';

    // Show the creation screen for pop-ups without a hash yet.
    const isNewPopUp = editor._config.card_type === 'pop-up' && !editor._config.hash;
    if (isNewPopUp) {

        const session = getEditorSession(editor._config?.hash || null);
        const initialHashState = getPopUpHashInputState(session.lastChangedHash || POPUP_HASH_PREFIX, session.originalHash);

        const originalConfig = { ...editor._config };

        editor.createPopUpConfig = () => createPopUpConfig(editor, originalConfig);

        return html`
            <div class="card-config">
                ${editor.makeDropdown(t('editor.common.card_type'), "card_type", editor.cardTypeList)}
                <ha-form
                    .hass=${editor.hass}
                    .data=${{ hash: getPopUpHashInputDisplayValue(session.lastChangedHash || POPUP_HASH_PREFIX) }}
                    .schema=${[{
                        name: 'hash',
                        selector: { text: { prefix: POPUP_HASH_PREFIX } },
                    }]}
                    .computeLabel=${() => t('editor.popup.hash')}
                    @value-changed=${(ev) => {
                        const rawValue = ev.detail.value.hash ?? '';
                        const hashState = syncHashInputState(editor, session.originalHash, rawValue);
                        if (window.__bubbleEditorSession) {
                            window.__bubbleEditorSession.lastChangedHash = hashState.normalizedValue;
                        }
                    }}
                ></ha-form>
                ${duplicateHashWarningTemplate(t)}
                ${renderPopUpModeDropdown(editor)}
                ${renderBottomOffsetOption(editor)}
                ${renderDialogFullWidthOption(editor)}
                <ha-formfield>
                    <ha-switch
                        aria-label="${t('editor.popup.include_example')}"
                        .checked=${false}
                        id="include-example"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label id="include-example-label" class="mdc-label">${t('editor.popup.include_example')}</label>
                    </div>
                </ha-formfield>

                <button
                    id="create-pop-up-button"
                    class="icon-button ${initialHashState.isValid ? '' : 'disabled'}"
                    ?disabled=${!initialHashState.isValid}
                    @click="${() => editor.createPopUpConfig()}"
                >
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span id="button-text">${t('editor.popup.create')}</span>
                </button>

                <hr />

                <div class="bubble-info">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        ${t('editor.popup.intro_title')}
                    </h4>
                    <div class="content">
                        <p>${t('editor.popup.intro1')}</p>
                        <p>${t('editor.popup.intro2')}</p>
                    </div>
                </div>

                ${editor.makeVersion()}
            </div>
        `;
    }

    // Keep the original hash across editor re-renders.
    const session = getEditorSession(editor._config?.hash || null);

    setTimeout(() => syncHashInputState(editor, session.originalHash), 0);

    // Render the full editor for an existing pop-up.
    return html`
        <div class="card-config">
            ${editor.makeDropdown(t('editor.common.card_type'), "card_type", editor.cardTypeList)}
            ${renderLegacyMigrationNotice(editor, session.originalHash)}
            <ha-form
                .hass=${editor.hass}
                .data=${{ hash: getPopUpHashInputDisplayValue(editor._config?.hash) || '' }}
                .schema=${[{
                    name: 'hash',
                    selector: { text: { prefix: POPUP_HASH_PREFIX } },
                }]}
                .computeLabel=${() => t('editor.popup.hash')}
                @value-changed=${(ev) => {
                    const rawValue = ev.detail.value.hash ?? '';
                    const hashState = getPopUpHashInputState(rawValue, session.originalHash);
                    const displayValue = getPopUpHashInputDisplayValue(rawValue);
                    editor._config.hash = hashState.normalizedValue;
                    if (window.__bubbleEditorSession) {
                        window.__bubbleEditorSession.lastChangedHash = hashState.normalizedValue;
                        window.__bubbleEditorSession.committed = true;
                    }
                    fireEvent(editor, 'config-changed', { config: editor._config });
                }}
            ></ha-form>
            ${duplicateHashWarningTemplate(t)}
            ${renderPopupStyleDropdown(editor)}
            ${renderPopUpModeDropdown(editor)}
            ${renderBottomOffsetOption(editor)}
            ${renderDialogFullWidthOption(editor)}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:dock-top"></ha-icon>
                  ${t('editor.popup.header_settings')}
                </h4>
                <div class="content">
                    <ha-formfield>
                        <ha-switch
                            aria-label="${t('editor.popup.show_header')}"
                            .checked=${editor._config.show_header ?? true}
                            .configValue="${"show_header"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t('editor.popup.show_header')}</label>
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t('editor.popup.hidden_header_title')}
                        </h4>
                        <div class="content">
                            <p>${t('editor.popup.hidden_header_body')}</p>
                        </div>
                    </div>
                    <div style="${!(editor._config?.show_header ?? true) ? 'display: none;' : ''}">
                        <hr />
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:close-circle-multiple-outline"></ha-icon>
                              ${t('editor.popup.buttons_settings')}
                            </h4>
                            <div class="content">
                                <ha-formfield>
                                    <ha-switch
                                        aria-label="${t('editor.popup.show_previous')}"
                                        .checked=${editor._config.show_previous_button ?? false}
                                        .configValue="${"show_previous_button"}"
                                        @change=${editor._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">${t('editor.popup.show_previous')}</label>
                                    </div>
                                </ha-formfield>
                                <ha-formfield>
                                    <ha-switch
                                        aria-label="${t('editor.popup.show_close')}"
                                        .checked=${editor._config.show_close_button ?? true}
                                        .configValue="${"show_close_button"}"
                                        @change=${editor._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">${t('editor.popup.show_close')}</label>
                                    </div>
                                </ha-formfield>
                                <ha-form
                                    .hass=${editor.hass}
                                    .data=${{ buttons_position: editor._config.buttons_position ?? 'right' }}
                                    .schema=${[{
                                        name: 'buttons_position',
                                        selector: {
                                            select: {
                                                options: [
                                                    { label: t('editor.common.right'), value: 'right' },
                                                    { label: t('editor.common.left'), value: 'left' },
                                                ],
                                                mode: 'dropdown'
                                            }
                                        }
                                    }]}
                                    .computeLabel=${() => t('editor.popup.buttons_position')}
                                    @value-changed=${(ev) => {
                                        const value = ev.detail.value.buttons_position;
                                        editor._valueChanged({
                                            target: { configValue: 'buttons_position' },
                                            detail: { value }
                                        });
                                    }}
                                ></ha-form>
                            </div>
                        </ha-expansion-panel>
                        ${renderButtonEditor(editor)}
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t('editor.popup.settings')}
                </h4>
                <div class="content">
                    ${renderPopupPerformanceModeDropdown(editor)}
                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ auto_close: editor._config?.auto_close ?? '' }}
                        .schema=${[{
                            name: 'auto_close',
                            selector: { text: { type: 'number' } },
                            options: { min: 0, step: 1000 },
                        }]}
                        .computeLabel=${() => t('editor.popup.auto_close')}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'auto_close' },
                                detail: { value: ev.detail.value.auto_close }
                            });
                        }}
                    ></ha-form>
                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ slide_to_close_distance: editor._config.slide_to_close_distance ?? 400 }}
                        .schema=${[{
                            name: 'slide_to_close_distance',
                            selector: { text: { type: 'number' } },
                            options: { min: 0, step: 10 },
                        }]}
                        .computeLabel=${() => t('editor.popup.slide_close_distance')}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'slide_to_close_distance' },
                                detail: { value: ev.detail.value.slide_to_close_distance }
                            });
                        }}
                    ></ha-form>
                    <ha-formfield>
                        <ha-switch
                            aria-label="${t('editor.popup.close_outside')}"
                            .checked=${editor._config?.close_by_clicking_outside ?? true}
                            .configValue="${"close_by_clicking_outside"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t('editor.popup.close_outside')}</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            aria-label="${t('editor.popup.close_on_click')}"
                            .checked=${editor._config?.close_on_click || false}
                            .configValue="${"close_on_click"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t('editor.popup.close_on_click')}</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            aria-label="${t('editor.popup.background_update')}"
                            .checked=${editor._config?.background_update || false}
                            .configValue="${"background_update"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t('editor.popup.background_update')}</label>
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t('editor.popup.background_update_title')}
                        </h4>
                        <div class="content">
                            <p>${t('editor.popup.background_update_body')}</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:bell"></ha-icon>
                  ${t('editor.popup.trigger')}
                </h4>
                <div class="content">
                    <ha-formfield>
                        <ha-switch
                            .checked=${editor._config.trigger_close ?? true}
                            .configValue="${"trigger_close"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t('editor.popup.close_when_unmet')}</label>
                        </div>
                    </ha-formfield>
                    <ha-card-conditions-editor
                        .hass=${editor.hass}
                        .conditions=${conditions}
                        @value-changed=${(ev) => editor._conditionChanged(ev)}
                    >
                    </ha-card-conditions-editor>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t('editor.popup.conditions_title')}
                        </h4>
                        <div class="content">
                            <p>${t('editor.popup.conditions_body1')}</p>
                            <p>${tTemplate(t('editor.popup.conditions_body2'), { code: html`<code>input_boolean</code>` })}</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  ${t('editor.popup.open_close_action')}
                </h4>
                <div class="content">
                    ${editor.makeActionPanel('open', editor._config, 'none')}
                    ${editor.makeActionPanel('close', editor._config, 'none')}
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t('editor.popup.actions_title')}
                        </h4>
                        <div class="content">
                            <p>${t('editor.popup.actions_body')}</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  ${t('editor.common.styling_layout_options')}
                </h4>
                <div class="content">
                    ${editor.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          ${t('editor.popup.styling')}
                        </h4>
                        <div class="content"> 
                            <!-- Margin -->
                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ margin: editor._config?.margin || '7px' }}
                                .schema=${[{ name: 'margin', selector: { text: {} } }]}
                                .computeLabel=${() => t('editor.popup.margin')}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'margin' },
                                        detail: { value: ev.detail.value.margin }
                                    });
                                }}
                            ></ha-form>
                            <!-- Top offset mobile -->
                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ margin_top_mobile: editor._config?.margin_top_mobile || '0px' }}
                                .schema=${[{ name: 'margin_top_mobile', selector: { text: {} } }]}
                                .computeLabel=${() => t('editor.popup.top_offset_mobile')}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'margin_top_mobile' },
                                        detail: { value: ev.detail.value.margin_top_mobile }
                                    });
                                }}
                            ></ha-form>
                            <!-- Top offset desktop -->
                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ margin_top_desktop: editor._config?.margin_top_desktop || '0px' }}
                                .schema=${[{ name: 'margin_top_desktop', selector: { text: {} } }]}
                                .computeLabel=${() => t('editor.popup.top_offset_desktop')}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'margin_top_desktop' },
                                        detail: { value: ev.detail.value.margin_top_desktop }
                                    });
                                }}
                            ></ha-form>
                            <!-- Width desktop -->
                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ width_desktop: editor._config?.width_desktop || '540px' }}
                                .schema=${[{ name: 'width_desktop', selector: { text: {} } }]}
                                .computeLabel=${() => t('editor.popup.width_desktop')}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'width_desktop' },
                                        detail: { value: ev.detail.value.width_desktop }
                                    });
                                }}
                            ></ha-form>
                            <!-- Background color -->
                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ bg_color: editor._config?.bg_color || '' }}
                                .schema=${[{ name: 'bg_color', selector: { text: {} } }]}
                                .computeLabel=${() => t('editor.popup.bg_color')}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'bg_color' },
                                        detail: { value: ev.detail.value.bg_color }
                                    });
                                }}
                            ></ha-form>
                            <!-- Background opacity -->
                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ bg_opacity: editor._config?.bg_opacity !== undefined ? editor._config?.bg_opacity : '88' }}
                                .schema=${[{ name: 'bg_opacity', selector: { text: { type: 'number' } }, options: { min: 0, max: 100 } }]}
                                .computeLabel=${() => t('editor.popup.bg_opacity')}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'bg_opacity' },
                                        detail: { value: ev.detail.value.bg_opacity }
                                    });
                                }}
                            ></ha-form>
                            <!-- Background blur -->
                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ bg_blur: editor._config?.bg_blur !== undefined ? editor._config?.bg_blur : '10' }}
                                .schema=${[{ name: 'bg_blur', selector: { text: { type: 'number' } }, options: { min: 0, max: 100 } }]}
                                .computeLabel=${() => t('editor.popup.bg_blur')}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'bg_blur' },
                                        detail: { value: ev.detail.value.bg_blur }
                                    });
                                }}
                            ></ha-form>
                            <!-- Backdrop blur -->
                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ backdrop_blur: editor._config?.backdrop_blur !== undefined ? editor._config?.backdrop_blur : '0' }}
                                .schema=${[{ name: 'backdrop_blur', selector: { text: { type: 'number' } }, options: { min: 0, max: 100 } }]}
                                .computeLabel=${() => t('editor.popup.backdrop_blur')}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'backdrop_blur' },
                                        detail: { value: ev.detail.value.backdrop_blur }
                                    });
                                }}
                            ></ha-form>
                            <!-- Shadow opacity -->
                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ shadow_opacity: editor._config?.shadow_opacity !== undefined ? editor._config?.shadow_opacity : '0' }}
                                .schema=${[{ name: 'shadow_opacity', selector: { text: { type: 'number' } }, options: { min: 0, max: 100 } }]}
                                .computeLabel=${() => t('editor.popup.shadow_opacity')}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'shadow_opacity' },
                                        detail: { value: ev.detail.value.shadow_opacity }
                                    });
                                }}
                            ></ha-form>
                            <ha-formfield>
                                <ha-switch
                                    aria-label="${t('editor.popup.hide_backdrop')}"
                                    .checked=${editor._config.hide_backdrop ?? false}
                                    .configValue="${"hide_backdrop"}"
                                    @change=${editor._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${t('editor.popup.hide_backdrop_short')}</label>
                                </div>
                            </ha-formfield>
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:information-outline"></ha-icon>
                                    ${t('editor.popup.hide_backdrop_title')}
                                </h4>
                                <div class="content">
                                    <p>${t('editor.popup.hide_backdrop_body')}</p>
                                </div>
                            </div>
                        </div>
                    </ha-expansion-panel>
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeModulesEditor()}
            <div class="bubble-info-container">
                <div class="bubble-info">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        ${t('editor.popup.how_to_title')}
                    </h4>
                    <div class="content">
                        <p>${tTemplate(t('editor.popup.how_to_body'), {
                            hidden_bold: html`<b>${t('editor.popup.how_to_hidden_bold')}</b>`,
                            open_bold: html`<b>${t('editor.popup.how_to_open_bold')}</b>`,
                            any_card_link: html`<a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">${t('editor.popup.how_to_any_card')}</a>`,
                            navigate_code: html`<code>navigate</code>`,
                            action_link: html`<a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">${t('editor.popup.how_to_action')}</a>`
                        })}</p>
                    </div>
                </div>
            </div>
            ${editor.makeVersion()}
      </div>
    `;
}

export function renderPopupOnboarding(context) {
  const hass = context?._hass ?? context?.hass;
  ensureEditorTranslations(hass);
  const t = setupTranslation(hass);
  const mode = context?.config?.popup_mode ?? 'default';
  const fullWidth = context?.config?.full_width_on_mobile ? 'true' : 'false';
  const bottomOffset = context?.config?.with_bottom_offset ? 'true' : 'false';
  return html`
    <style>
      .bubble-popup-onboarding {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 16px 12px 8px;
        contain: layout paint style;
      }
      .bhp-visual {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 100%;
        max-width: 280px;
        container-type: inline-size;
      }
      .bhp-screen {
        position: relative;
        width: 100%;
        aspect-ratio: 210 / 130;
        background: var(--primary-background-color);
        border: 1.5px solid var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        border-radius: 11.7cqw;
        overflow: hidden;
        container-type: inline-size;
      }
      .bhp-bg {
        position: absolute;
        inset: 3.81cqw;
        display: flex;
        flex-direction: column;
        gap: 3.81cqw;
      }
      .bhp-bg-row {
        flex: 1;
        border-radius: 9.52cqw;
        background: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        opacity: 0.3;
      }
      .bhp-overlay {
        position: absolute;
        inset: 0;
        background: var(--bubble-backdrop-background-color, var(--bubble-default-backdrop-background-color));
        opacity: 0;
        animation: bhp-overlay 5s ease infinite;
      }
      /* === popup shell === */
      .bhp-popup {
        position: absolute;
        inset: auto 0 0;
        height: 48.57cqw;
        border-radius: 11.43cqw 11.43cqw 0 0;
        background: var(--ha-card-background, var(--card-background-color));
        display: flex;
        flex-direction: column;
        gap: 3.81cqw;
        padding: 5.71cqw;
        box-sizing: border-box;
        transform: translateY(100%);
        animation: bhp-slide 5s ease infinite;
      }
      /* header row */
      .bhp-popup-header {
        display: flex;
        align-items: center;
        gap: 3.81cqw;
        flex-shrink: 0;
        height: 16.67cqw;
      }
      /* placeholder for the header button/entity card */
      .bhp-popup-header-card {
        flex: 1;
        height: 16.67cqw;
        border-radius: 8.57cqw;
        background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));
      }
      /* close button — mirrors .bubble-header-action-button */
      .bhp-popup-close-btn {
        width: 16.67cqw;
        height: 16.67cqw;
        border-radius: 8.57cqw;
        background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));
        flex-shrink: 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bhp-popup-close-btn::before,
      .bhp-popup-close-btn::after {
        content: '';
        position: absolute;
        width: 6.19cqw;
        height: 0.71cqw;
        border-radius: 0.48cqw;
        background: var(--primary-text-color);
        opacity: 0.55;
      }
      .bhp-popup-close-btn::before { transform: rotate(45deg); }
      .bhp-popup-close-btn::after  { transform: rotate(-45deg); }
      /* content rows */
      .bhp-popup-content {
        flex: 0 0 16.67cqw;
        display: flex;
        flex-direction: column;
      }
      .bubble-popup-onboarding[data-bottom-offset="true"] .bhp-popup-content {
        padding-bottom: 9.52cqw;
      }
      .bubble-popup-onboarding[data-bottom-offset="true"] .bhp-popup {
        height: 58.57cqw;
      }
      .bhp-popup-row {
        flex: 1;
        border-radius: 9.52cqw;
        background: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
      }
      /* === default mode (full-height bottom sheet) === */
      .bubble-popup-onboarding[data-mode="default"] .bhp-popup {
        inset: 0;
        height: auto;
      }
      /* === centered mode === */
      .bubble-popup-onboarding[data-mode="centered"] .bhp-popup {
        inset: 50% 4.76cqw auto;
        height: 48.57cqw;
        border-radius: 11.43cqw;
        transform: translateY(-50%) scale(0.85);
        opacity: 0;
        animation: bhp-center 5s ease infinite;
      }
      .bubble-popup-onboarding[data-mode="centered"][data-full-width="true"] .bhp-popup {
        inset: 50% 0 auto;
        border-radius: 11.43cqw;
      }
      /* === adaptive-dialog (alternates: centered dialog → bottom sheet) === */
      .bubble-popup-onboarding[data-mode="adaptive-dialog"] .bhp-popup {
        animation: bhp-adaptive 10s ease infinite;
      }
      .bubble-popup-onboarding[data-mode="adaptive-dialog"][data-bottom-offset="true"] .bhp-popup {
        animation: bhp-adaptive-offset 10s ease infinite;
      }
      @media (max-width: 767px) {
        .bubble-popup-onboarding[data-mode="centered"][data-full-width="true"] .bhp-popup {
          inset: auto 0 0;
          border-radius: 11.43cqw 11.43cqw 0 0;
        }
      }
      /* === trigger button === */
      .bhp-button {
        position: relative;
        display: flex;
        align-items: center;
        gap: 4.76cqw;
        width: 100%;
        height: 20.95cqw;
        border-radius: 10.48cqw;
        background: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        padding: 0 4.29cqw;
        box-sizing: border-box;
        overflow: hidden;
        animation: bhp-press 5s ease infinite;
      }
      .bhp-icon {
        width: 13.33cqw;
        height: 13.33cqw;
        border-radius: 50%;
        background: var(--primary-background-color);
        flex-shrink: 0;
      }
      .bhp-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1.9cqw;
      }
      .bhp-text-line {
        height: 3.33cqw;
        border-radius: 1.9cqw;
        background: var(--primary-text-color);
        opacity: 0.12;
      }
      .bhp-text-line--long  { width: 65%; }
      .bhp-text-line--short { width: 42%; }
      .bhp-ripple {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: var(--primary-text-color);
        opacity: 0;
        transform: scale(0);
        animation: bhp-ripple 5s ease infinite;
      }
      .bhp-desc {
        width: 100%;
        max-width: 280px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 32px;
      }
      .bhp-desc-body {
        margin: 0;
        line-height: 1.5;
        color: var(--secondary-text-color);
      }
      .bhp-step {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        background: var(--card-background-color, var(--primary-background-color));
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        padding: 8px 10px;
      }
      .bhp-step-num {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        color: var(--on-primary-color, white);
        font-size: 12px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
        display: inline-block;
      }
      .bhp-step-text {
        line-height: 1.5;
        color: var(--secondary-text-color);
      }
      @keyframes bhp-slide {
        0%,  15% { transform: translateY(100%); }
        28%, 55% { transform: translateY(0); }
        65%, 100%{ transform: translateY(100%); }
      }
      @keyframes bhp-center {
        0%,  15% { transform: translateY(-50%) scale(0.85); opacity: 0; }
        28%, 55% { transform: translateY(-50%) scale(1);    opacity: 1; }
        65%, 100%{ transform: translateY(-50%) scale(0.85); opacity: 0; }
      }
      @keyframes bhp-adaptive {
        /* === centered dialog phase (first 5s mapped to 0-50%) === */
        /* 0%,15% of bhp-center → 0%,7.5% */
        0%, 7.5%   { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        /* 28%,55% of bhp-center → 14%,27.5% */
        14%, 27.5% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(1);    opacity: 1; }
        /* 65%,100% of bhp-center → 32.5%,49% */
        32.5%, 49% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        /* snap to bottom while invisible */
        50%        { inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 0; }
        /* === bottom-sheet phase (second 5s mapped to 50-100%) === */
        /* 0%,15% of bhp-slide → 50%,57.5% */
        57.5%      { inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
        /* 28%,55% of bhp-slide → 64%,77.5% */
        64%, 77.5% { inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(0);    opacity: 1; }
        /* 65%,100% of bhp-slide → 82.5%,100% */
        82.5%, 100%{ inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
      }
      @keyframes bhp-adaptive-offset {
        /* === centered dialog phase — same as bhp-adaptive === */
        0%, 7.5%   { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        14%, 27.5% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(1);    opacity: 1; }
        32.5%, 49% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        /* snap to bottom while invisible */
        50%        { inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 0; }
        /* === bottom-sheet phase — 58.57cqw to show offset === */
        57.5%      { inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
        64%, 77.5% { inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(0);    opacity: 1; }
        82.5%, 100%{ inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
      }
      @keyframes bhp-overlay {
        0%,  15% { opacity: 0; }
        28%, 55% { opacity: 1; }
        65%, 100%{ opacity: 0; }
      }
      @keyframes bhp-press {
        0%,  8%  { transform: scale(1); }
        12%      { transform: scale(0.93); }
        17%      { transform: scale(1); }
        100%     { transform: scale(1); }
      }
      @keyframes bhp-ripple {
        0%,  10% { opacity: 0;    transform: scale(0); }
        11%      { opacity: 0.12; transform: scale(0); }
        22%      { opacity: 0;    transform: scale(2); }
        100%     { opacity: 0;    transform: scale(0); }
      }
    </style>
    <div class="bubble-popup-onboarding" data-mode="${mode}" data-full-width="${fullWidth}" data-bottom-offset="${bottomOffset}">
      <div class="bhp-visual" aria-hidden="true">
        <div class="bhp-screen">
          <div class="bhp-bg">
            <div class="bhp-bg-row"></div>
            <div class="bhp-bg-row"></div>
            <div class="bhp-bg-row"></div>
          </div>
          <div class="bhp-overlay"></div>
          <div class="bhp-popup">
            <div class="bhp-popup-header">
              <div class="bhp-popup-header-card"></div>
              <div class="bhp-popup-close-btn"></div>
            </div>
            <div class="bhp-popup-content">
              <div class="bhp-popup-row"></div>
            </div>
          </div>
        </div>
        <div class="bhp-button">
          <div class="bhp-icon"></div>
          <div class="bhp-text">
            <div class="bhp-text-line bhp-text-line--long"></div>
            <div class="bhp-text-line bhp-text-line--short"></div>
          </div>
          <div class="bhp-ripple"></div>
        </div>
      </div>
      <div class="bhp-desc">
        <p class="bhp-desc-body">${tTemplate(t('editor.popup.onboarding_body'), {
          bold: html`<b>${t('editor.popup.onboarding_body_bold')}</b>`,
          navigate: html`<b>${t('editor.popup.navigate')}</b>`
        })}</p>
        <div class="bhp-step">
          <span class="bhp-step-num">1</span>
          <span class="bhp-step-text"><b>${t('editor.popup.step1_title')}</b> ${tTemplate(t('editor.popup.step1_body'), { code: html`<code>#kitchen</code>` })}</span>
        </div>
        <div class="bhp-step">
          <span class="bhp-step-num">2</span>
          <span class="bhp-step-text"><b>${t('editor.popup.step2_title')}</b> ${tTemplate(t('editor.popup.step2_body'), { navigate: html`<b>${t('editor.popup.navigate')}</b>` })}</span>
        </div>
      </div>
    </div>
  `;
}


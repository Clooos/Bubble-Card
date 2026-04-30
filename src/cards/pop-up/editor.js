import { html } from 'lit';
import { fireEvent } from '../../tools/utils.js';
import { renderButtonEditor } from '../button/editor.js';
import { registerPopUpHash, isHashOnCurrentPage } from './navigation-picker-bridge.js';
import { renderLegacyMigrationNotice } from './migration.js';

const POPUP_HASH_PREFIX = '#';
const POPUP_HASH_PLACEHOLDER = 'pop-up-name';

function getButtonList() {
    return [
        { 'label': 'Switch', 'value': 'switch' },
        { 'label': 'Slider', 'value': 'slider' },
        { 'label': 'State', 'value': 'state' },
        { 'label': 'Name / Text', 'value': 'name' }
    ];
}

function getPopUpModeList() {
    return [
        { 'label': 'Default', 'value': 'default' },
        { 'label': 'Fit content', 'value': 'fit-content' },
        { 'label': 'Dialog (centered)', 'value': 'centered' },
        { 'label': 'Adaptive dialog ("Fit content" on mobile)', 'value': 'adaptive-dialog' },
    ];
}

function getPopUpModeValue(config) {
    if (config?.popup_mode === 'fit-content') return 'fit-content';
    if (config?.popup_mode === 'centered') return 'centered';
    if (config?.popup_mode === 'adaptive-dialog') return 'adaptive-dialog';
    return 'default';
}

function renderPopupStyleDropdown(editor) {
    return html`
        <ha-form
            .hass=${editor.hass}
            .data=${{ popup_style: editor._config.popup_style ?? 'bubble' }}
            .schema=${[{
                name: 'popup_style',
                selector: {
                    select: {
                        options: [
                            { label: 'Bubble (default)', value: 'bubble' },
                            { label: 'Classic', value: 'classic' },
                        ],
                        mode: 'dropdown'
                    }
                }
            }]}
            .computeLabel=${() => 'Pop-up style'}
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
    return html`
        <ha-form
            .hass=${editor.hass}
            .data=${{ popup_mode: getPopUpModeValue(editor._config) }}
            .schema=${[{
                name: 'popup_mode',
                selector: {
                    select: {
                        options: getPopUpModeList(),
                        mode: 'dropdown'
                    }
                }
            }]}
            .computeLabel=${() => 'Pop-up mode'}
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
                name: 'Floor lamp',
                icon: 'mdi:floor-lamp-outline',
                grid_options: { columns: 6 },
            },
        ];
}

function duplicateHashWarningTemplate() {
    return html`
        <div id="duplicate-hash-warning" style="display: none;">
            <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    Duplicate hash
                </h4>
                <div class="content">
                    <p>This hash is already used by another pop-up on this view. Please choose a different one.</p>
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

    return html`
        <ha-formfield .label="Full width on mobile">
            <ha-switch
                aria-label="Full width on mobile"
                .checked=${editor._config?.full_width_on_mobile ?? false}
                .configValue=${"full_width_on_mobile"}
                @change=${editor._valueChanged}
            ></ha-switch>
            <div class="mdc-form-field">
                <label class="mdc-label">Full width on mobile</label>
            </div>
        </ha-formfield>
    `;
}

function renderBottomOffsetOption(editor) {
    const mode = getPopUpModeValue(editor._config);
    if (mode !== 'fit-content' && mode !== 'adaptive-dialog') {
        return html``;
    }

    return html`
        <ha-formfield .label="With bottom offset">
            <ha-switch
                aria-label="With bottom offset"
                .checked=${editor._config?.with_bottom_offset ?? false}
                .configValue="${"with_bottom_offset"}"
                @change=${editor._valueChanged}
            ></ha-switch>
            <div class="mdc-form-field">
                <label class="mdc-label">With bottom offset</label>
            </div>
        </ha-formfield>
        <div class="bubble-info">
            <h4 class="bubble-section-title">
                <ha-icon icon="mdi:information-outline"></ha-icon>
                Bottom offset
            </h4>
            <div class="content">
                <p>Useful when your dashboard includes a footer card and the pop-up needs extra space at the bottom.</p>
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

function syncHashInputState(editor, originalHash) {
    const hashInput = editor.shadowRoot?.querySelector('#hash-input');
    const warning = editor.shadowRoot?.querySelector('#duplicate-hash-warning');
    if (!hashInput) {
        return getPopUpHashInputState('', originalHash);
    }

    const hashState = getPopUpHashInputState(hashInput.value, originalHash);
    const displayValue = getPopUpHashInputDisplayValue(hashInput.value);
    if (hashInput.value !== displayValue) {
        hashInput.value = displayValue;
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
        buttonText.textContent = isInVerticalStack ? 'Update Hash' : 'Create Pop-up';
    }
    
    // Update the example toggle state.
    const exampleSwitch = editor.shadowRoot.querySelector('#include-example');
    if (exampleSwitch) {
        exampleSwitch.disabled = isInVerticalStack;
    }
    
    const exampleLabel = editor.shadowRoot.querySelector('#include-example-label');
    if (exampleLabel) {
        exampleLabel.textContent = 'Include example configuration' + 
            (isInVerticalStack ? ' (disabled because pop-up is already in a vertical stack)' : '');
    }
}

function createPopUpConfig(editor, originalConfig) {
    try {
        // Detect the legacy vertical-stack setup.
        const isInVerticalStack = window.popUpError === false;
        const popupLayoutConfig = getPopUpLayoutConfig(editor._config);
        
        // Read the current form value.
        const includeExample = editor.shadowRoot.querySelector("#include-example")?.checked || false;
        let hashValue = POPUP_HASH_PREFIX;
        const hashState = syncHashInputState(editor);
        if (!hashState.isValid) {
            return;
        }
        hashValue = hashState.normalizedValue;
        
        if (isInVerticalStack) {
            if (popupLayoutConfig.popup_mode) {
                editor._config.popup_mode = popupLayoutConfig.popup_mode;
            } else {
                delete editor._config.popup_mode;
            }

            if (popupLayoutConfig.with_bottom_offset) {
                editor._config.with_bottom_offset = true;
            } else {
                delete editor._config.with_bottom_offset;
            }

            if (popupLayoutConfig.full_width_on_mobile) {
                editor._config.full_width_on_mobile = true;
            } else {
                delete editor._config.full_width_on_mobile;
            }

            editor._config.hash = hashValue;
            commitEditorSessionHash(hashValue);
            registerPopUpHash(hashValue, {
                name: editor._config.name,
                icon: editor._config.icon
            });
            fireEvent(editor, "config-changed", { config: editor._config });
            console.info("Pop-up already in a vertical stack. Hash updated. Note that manually creating a vertical stack is no longer required.");
            return;
        }
        
        if (includeExample) {
            editor._config = {
                type: 'custom:bubble-card',
                card_type: 'pop-up',
                ...popupLayoutConfig,
                name: 'Living room',
                icon: 'mdi:sofa-outline',
                hash: hashValue,
                cards: [
                    {   
                        type: 'custom:bubble-card',
                        card_type: 'separator',
                        name: 'Lights (example)',
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
                ...popupLayoutConfig,
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
        editor._config.hash = normalizePopUpHashInputValue(editor.shadowRoot.querySelector('#hash-input')?.value);
        registerPopUpHash(editor._config.hash, {
            name: editor._config.name,
            icon: editor._config.icon
        });
        fireEvent(editor, "config-changed", { config: editor._config });
    }
}

export function renderPopUpEditor(editor) {
    const conditions = editor._config?.trigger ?? [];
    let button_action = editor._config.button_action || '';

    // Show the creation screen for pop-ups without a hash yet.
    const isNewPopUp = editor._config.card_type === 'pop-up' && !editor._config.hash;
    if (isNewPopUp) {

        const session = getEditorSession(editor._config?.hash || null);
        const initialHashState = getPopUpHashInputState(session.lastChangedHash || POPUP_HASH_PREFIX, session.originalHash);

        const originalConfig = { ...editor._config };

        let isInVerticalStack = false;

        // Let the editor mount before checking the legacy stack state.
        setTimeout(() => {
            isInVerticalStack = window.popUpError === false;
            updateUIForVerticalStack(editor, isInVerticalStack);
            syncHashInputState(editor, session.originalHash);
        }, 0);

        editor.createPopUpConfig = () => createPopUpConfig(editor, originalConfig);

        return html`
            <div class="card-config">
                ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
                <div id="vertical-stack-alert-container" style="display: none;">
                    <div class="bubble-info warning">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:alert-outline"></ha-icon>
                            Old configuration detected
                        </h4>
                        <div class="content">
                            <p>This pop-up is already inside a vertical stack (old method). This is no longer required, but it will work fine. You can simply update the hash below.</p>
                        </div>
                    </div>
                </div>
                <ha-textfield
                    label="Hash (e.g. #kitchen)"
                    icon
                    .value="${getPopUpHashInputDisplayValue(session.lastChangedHash || POPUP_HASH_PREFIX)}"
                    placeholder="${POPUP_HASH_PLACEHOLDER}"
                    id="hash-input"
                    @input="${() => {
                        const hashState = syncHashInputState(editor, session.originalHash);
                        if (window.__bubbleEditorSession) {
                            window.__bubbleEditorSession.lastChangedHash = hashState.normalizedValue;
                        }
                    }}"
                >
                    <span slot="leadingIcon" class="bubble-pop-up-hash-prefix" aria-hidden="true">${POPUP_HASH_PREFIX}</span>
                </ha-textfield>
                ${duplicateHashWarningTemplate()}
                ${renderPopUpModeDropdown(editor)}
                ${renderBottomOffsetOption(editor)}
                ${renderDialogFullWidthOption(editor)}
                <ha-formfield .label="Include example configuration">
                    <ha-switch
                        aria-label="Include example configuration"
                        .checked=${false}
                        id="include-example"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label id="include-example-label" class="mdc-label">Include example configuration</label>
                    </div>
                </ha-formfield>
                
                <button
                    id="create-pop-up-button"
                    class="icon-button ${initialHashState.isValid ? '' : 'disabled'}"
                    ?disabled=${!initialHashState.isValid}
                    @click="${() => editor.createPopUpConfig()}"
                >
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span id="button-text">Create pop-up</span>
                </button>

                <hr />

                <div class="bubble-info">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Pop-up
                    </h4>
                    <div class="content">
                        <p>Pop-ups are a great way to declutter your dashboard and quickly display more information when you need it.</p>
                        <p>If it's your first time creating a pop-up, you can use the example configuration to get started.</p>
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
            ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
            ${renderLegacyMigrationNotice(editor, session.originalHash)}
            <ha-textfield
                label="Hash (e.g. #kitchen)"
                icon
                .value="${getPopUpHashInputDisplayValue(editor._config?.hash)}"
                placeholder="${POPUP_HASH_PLACEHOLDER}"
                .configValue="${"hash"}"
                id="hash-input"
                @input="${(e) => {
                    const hashState = syncHashInputState(editor, session.originalHash);
                    editor._config.hash = hashState.normalizedValue;
                    if (window.__bubbleEditorSession) {
                        window.__bubbleEditorSession.lastChangedHash = hashState.normalizedValue;
                    }
                }}"
                @change="${(e) => {
                    e.target.value = normalizePopUpHashInputValue(e.target.value);
                    if (window.__bubbleEditorSession) {
                        window.__bubbleEditorSession.committed = true;
                    }
                    editor._valueChanged(e);
                }}"
            >
                <span slot="leadingIcon" class="bubble-pop-up-hash-prefix" aria-hidden="true">${POPUP_HASH_PREFIX}</span>
            </ha-textfield>
            ${duplicateHashWarningTemplate()}
            ${renderPopupStyleDropdown(editor)}
            ${renderPopUpModeDropdown(editor)}
            ${renderBottomOffsetOption(editor)}
            ${renderDialogFullWidthOption(editor)}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:dock-top"></ha-icon>
                  Header settings
                </h4>
                <div class="content">
                    <ha-formfield .label="Show header">
                        <ha-switch
                            aria-label="Show header"
                            .checked=${editor._config.show_header ?? true}
                            .configValue="${"show_header"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Show header</label> 
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Hidden header
                        </h4>
                        <div class="content">
                            <p>You can completely hide the pop-up header, including the close and previous buttons. To close it when hidden, either make a long swipe within the pop-up or click outside of it.</p>
                        </div>
                    </div>
                    <div style="${!(editor._config?.show_header ?? true) ? 'display: none;' : ''}">
                        <hr />
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:close-circle-multiple-outline"></ha-icon>
                              Pop-up buttons settings
                            </h4>
                            <div class="content">
                                <ha-formfield .label="Show previous button">
                                    <ha-switch
                                        aria-label="Show previous button"
                                        .checked=${editor._config.show_previous_button ?? false}
                                        .configValue="${"show_previous_button"}"
                                        @change=${editor._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Show previous button</label>
                                    </div>
                                </ha-formfield>
                                <ha-formfield .label="Show close button">
                                    <ha-switch
                                        aria-label="Show close button"
                                        .checked=${editor._config.show_close_button ?? true}
                                        .configValue="${"show_close_button"}"
                                        @change=${editor._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Show close button</label>
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
                                                    { label: 'Right', value: 'right' },
                                                    { label: 'Left', value: 'left' },
                                                ],
                                                mode: 'dropdown'
                                            }
                                        }
                                    }]}
                                    .computeLabel=${() => 'Buttons position'}
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
                  Pop-up settings
                </h4>
                <div class="content">
                    <ha-textfield
                        label="Auto close in milliseconds (e.g. 15000)"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="1000"
                        .value="${editor._config?.auto_close || ''}"
                        .configValue="${"auto_close"}"
                        @input="${editor._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Slide to close distance (default to 400)"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="10"
                        .value="${editor._config.slide_to_close_distance ?? 400}"
                        .configValue="${"slide_to_close_distance"}"
                        @input="${editor._valueChanged}"
                    ></ha-textfield>
                    <ha-formfield .label="Close the pop-up by clicking outside of it (a refresh is needed)">
                        <ha-switch
                            aria-label="Close the pop-up by clicking outside of it (a refresh is needed)"
                            .checked=${editor._config?.close_by_clicking_outside ?? true}
                            .configValue="${"close_by_clicking_outside"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close the pop-up by clicking outside of it (a refresh is needed)</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Close the pop-up after any click or tap">
                        <ha-switch
                            aria-label="Close the pop-up after any click or tap"
                            .checked=${editor._config?.close_on_click || false}
                            .configValue="${"close_on_click"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close the pop-up after any click or tap</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Update cards in background (not recommended)">
                        <ha-switch
                            aria-label="Update cards in background (not recommended)"
                            .checked=${editor._config?.background_update || false}
                            .configValue="${"background_update"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Update cards in background (not recommended)</label> 
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Background updates
                        </h4>
                        <div class="content">
                            <p>Background updates are only recommended if you encounter issues with certain cards within your pop-up.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:bell"></ha-icon>
                  Pop-up trigger
                </h4>
                <div class="content">
                    <ha-formfield>
                        <ha-switch
                            .checked=${editor._config.trigger_close ?? true}
                            .configValue="${"trigger_close"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close pop-up when conditions are not met</label> 
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
                            About conditions
                        </h4>
                        <div class="content">
                            <p>The pop-up will be opened when ALL conditions are fulfilled. For example you can open a "Security" pop-up with a camera when a person is in front of your house.</p>
                            <p>You can also create a toggle helper (<code>input_boolean</code>) and trigger its opening/closing in an automation.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Pop-up open/close action
                </h4>
                <div class="content">
                    ${editor.makeActionPanel("Open action", editor._config, 'none')}
                    ${editor.makeActionPanel("Close action", editor._config, 'none')}
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            About actions
                        </h4>
                        <div class="content">
                            <p>This allows you to trigger an action on pop-up open/close.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${editor.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Pop-up styling
                        </h4>
                        <div class="content"> 
                            <ha-textfield
                                label="Margin (fix centering on some themes) (e.g. 13px)"
                                .value="${editor._config?.margin || '7px'}"
                                .configValue="${"margin"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Top offset on mobile (e.g. -56px if your header is hidden)"
                                .value="${editor._config?.margin_top_mobile || '0px'}"
                                .configValue="${"margin_top_mobile"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Top offset on desktop (e.g. 50vh for a half-sized pop-up)"
                                .value="${editor._config?.margin_top_desktop || '0px'}"
                                .configValue="${"margin_top_desktop"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Width on desktop (100% by default on mobile)"
                                .value="${editor._config?.width_desktop || '540px'}"
                                .configValue="${"width_desktop"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background color (any var, hex, rgb or rgba value)"
                                .value="${editor._config?.bg_color || ''}"
                                .configValue="${"bg_color"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${editor._config?.bg_opacity !== undefined ? editor._config?.bg_opacity : '88'}"
                                .configValue="${"bg_opacity"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${editor._config?.bg_blur !== undefined ? editor._config?.bg_blur : '10'}"
                                .configValue="${"bg_blur"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Backdrop blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${editor._config?.backdrop_blur !== undefined ? editor._config?.backdrop_blur : '0'}"
                                .configValue="${"backdrop_blur"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Shadow opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .configValue="${"shadow_opacity"}"
                                .value="${editor._config?.shadow_opacity !== undefined ? editor._config?.shadow_opacity : '0'}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-formfield .label="Hide pop-up backdrop (a refresh is needed)">
                                <ha-switch
                                    aria-label="Hide pop-up backdrop (a refresh is needed)"
                                    .checked=${editor._config.hide_backdrop ?? false}
                                    .configValue="${"hide_backdrop"}"
                                    @change=${editor._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Hide backdrop on this pop-up</label> 
                                </div>
                            </ha-formfield>
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:information-outline"></ha-icon>
                                    Hide pop-up backdrop
                                </h4>
                                <div class="content">
                                    <p>This will hide the pop-up backdrop, which is a dark overlay that appears behind the pop-up.</p>
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
                        How to use pop-ups
                    </h4>
                    <div class="content">
                        <p>Each pop-up is <b>hidden by default</b> and <b>can be opened by targeting its hash</b> (e.g., '#pop-up-name'), with <a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">any card</a> that supports the <code>navigate</code> <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">action</a>.</p>
                    </div>
                </div>
            </div>
            ${editor.makeVersion()}
      </div>
    `;
}

export function renderPopupOnboarding(context) {
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
        <p class="bhp-desc-body"><b>Once created, this pop-up will be hidden by default</b> and can be opened via a <b>Navigate</b> action. Here's how to set it up:</p>
        <div class="bhp-step">
          <span class="bhp-step-num">1</span>
          <span class="bhp-step-text"><b>Set a hash:</b> A unique identifier like <code>#kitchen</code>.</span>
        </div>
        <div class="bhp-step">
          <span class="bhp-step-num">2</span>
          <span class="bhp-step-text"><b>Link a card:</b> Set any card's tap action to <b>Navigate</b> and select that pop-up hash as the path. Tapping it will open this pop-up.</span>
        </div>
      </div>
    </div>
  `;
}


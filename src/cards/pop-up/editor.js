import { html } from 'lit';
import { fireEvent } from '../../tools/utils.js';
import { makeButtonSliderPanel } from '../../components/slider/editor.js';
import { renderButtonEditor } from '../button/editor.js';

function getButtonList() {
    return [
        { 'label': 'Switch', 'value': 'switch' },
        { 'label': 'Slider', 'value': 'slider' },
        { 'label': 'State', 'value': 'state' },
        { 'label': 'Name / Text', 'value': 'name' }
    ];
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

function updateUIForVerticalStack(editor, isInVerticalStack) {
    if (!editor.shadowRoot) return;
    
    // Update the alert container
    const alertContainer = editor.shadowRoot.querySelector('#vertical-stack-alert-container');
    if (alertContainer) {
        alertContainer.style.display = isInVerticalStack ? 'block' : 'none';
    }
    
    // Update the button icon and text
    const buttonIcon = editor.shadowRoot.querySelector('.icon-button ha-icon');
    if (buttonIcon) {
        buttonIcon.icon = isInVerticalStack ? 'mdi:content-save' : 'mdi:plus';
    }
    
    const buttonText = editor.shadowRoot.querySelector('#button-text');
    if (buttonText) {
        buttonText.textContent = isInVerticalStack ? 'Update Hash' : 'Create Pop-up';
    }
    
    // Update the toggle and its label
    const exampleSwitch = editor.shadowRoot.querySelector('#include-example');
    if (exampleSwitch) {
        exampleSwitch.disabled = isInVerticalStack;
    }
    
    const exampleLabel = editor.shadowRoot.querySelector('.mdc-form-field .mdc-label');
    if (exampleLabel) {
        exampleLabel.textContent = 'Include example configuration' + 
            (isInVerticalStack ? ' (disabled because pop-up is already in a vertical stack)' : '');
    }
}

function createPopUpConfig(editor, originalConfig) {
    try {
        const isInVerticalStack = !window.popUpError;
        
        // Get form value
        const includeExample = editor.shadowRoot.querySelector("#include-example")?.checked || false;
        let hashValue = '#pop-up-name';
        const hashInput = editor.shadowRoot.querySelector('#hash-input');
        if (hashInput && hashInput.value) {
            hashValue = hashInput.value;
        }
        
        if (isInVerticalStack) {
            editor._config.hash = hashValue;
            fireEvent(editor, "config-changed", { config: editor._config });
            console.info("Pop-up already in a vertical stack. Hash updated. Note that manually creating a vertical stack is no longer required.");
            return;
        }
        
        if (includeExample) {
            const suitableEntities = findSuitableEntities(editor.hass);
            
            editor._config = {          
                type: 'vertical-stack',
                cards: [
                    {
                        type: 'custom:bubble-card',
                        card_type: 'pop-up',
                        name: 'Living room',
                        icon: 'mdi:sofa-outline',
                        hash: hashValue
                    },
                    {   
                        type: 'custom:bubble-card',
                        card_type: 'separator',
                        name: 'Lights (example)',
                        icon: 'mdi:lightbulb-outline',
                    },
                    {   
                        type: 'horizontal-stack',
                        cards: suitableEntities.length > 0 ? suitableEntities.map(entity => ({
                                type: 'custom:bubble-card',
                                card_type: 'button',
                                button_type: entity.supportsBrightness ? 'slider' : 'switch',
                                entity: entity.entity,
                                show_state: true,
                            })) : [
                            {
                                type: 'custom:bubble-card',
                                card_type: 'button',
                                button_type: 'name',
                                name: 'Floor lamp',
                                icon: 'mdi:floor-lamp-outline',
                            }
                        ]
                    }
                ]
            };
        } else {
            // Just create a basic pop-up without examples
            editor._config = {          
                type: 'vertical-stack',
                cards: [
                    {
                        type: 'custom:bubble-card',
                        card_type: 'pop-up',
                        hash: hashValue
                    }
                ]
            };
        }
        
        fireEvent(editor, "config-changed", { config: editor._config });
    } catch (error) {
        console.error("Error creating pop-up:", error);
        // Restore original config if there's an error
        editor._config = originalConfig;
        editor._config.hash = editor.shadowRoot.querySelector('#hash-input')?.value || '#pop-up-name';
        fireEvent(editor, "config-changed", { config: editor._config });
    }
}

export function renderPopUpEditor(editor) {
    const conditions = editor._config?.trigger ?? [];
    let button_action = editor._config.button_action || '';

    // Initial configuration screen for pop-up creation
    if (Object.keys(editor._config).length === 2 &&
        editor._config.card_type === 'pop-up') {

        const originalConfig = { ...editor._config };

        let isInVerticalStack = false;

        // Use setTimeout to correctly check if we're in a vertical stack
        setTimeout(() => {
            isInVerticalStack = !window.popUpError;
            updateUIForVerticalStack(editor, isInVerticalStack);
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
                    .value="${editor._config?.hash || '#pop-up-name'}"
                    id="hash-input"
                ></ha-textfield>
                <ha-formfield .label="Include example configuration">
                    <ha-switch
                        aria-label="Include example configuration"
                        .checked=${false}
                        id="include-example"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Include example configuration</label>
                    </div>
                </ha-formfield>
                
                <button class="icon-button" @click="${() => editor.createPopUpConfig()}">
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

    // Full configuration interface for an existing pop-up
    return html`
        <div class="card-config">
            ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
            <ha-textfield
                label="Hash (e.g. #kitchen)"
                .value="${editor._config?.hash || '#pop-up-name'}"
                .configValue="${"hash"}"
                @input="${editor._valueChanged}"
            ></ha-textfield>
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
                            <p>You can completely hide the pop-up header, including the close button. To close it when hidden, either make a long swipe within the pop-up or click outside of it.</p>
                        </div>
                    </div>
                    <div style="${!(editor._config?.show_header ?? true) ? 'display: none;' : ''}">
                        <hr />
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
                                label="Top margin on mobile (e.g. -56px if your header is hidden)"
                                .value="${editor._config?.margin_top_mobile || '0px'}"
                                .configValue="${"margin_top_mobile"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Top margin on desktop (e.g. 50vh for an half sized pop-up)"
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
                                    <label class="mdc-label">Hide pop-up backdrop (a refresh is needed)</label> 
                                </div>
                            </ha-formfield>
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:information-outline"></ha-icon>
                                    Hide pop-up backdrop
                                </h4>
                                <div class="content">
                                    <p>This will hide the pop-up backdrop, which is a dark overlay that appears behind the pop-up.</p>
                                    <p>You can enable this setting for all your pop-ups at once by turning it on in the first pop-up on your dashboard.</p>
                                    <p><b>Hiding it is recommended if you encounter performance issues when opening/closing pop-ups.</b></p>
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
                        <p><b>You can also watch this <a href="https://www.youtube.com/watch?v=7mOV7BfWoFc" target="_blank" rel="noopener noreferrer">video</a> that explains how to create your first pop-up</b> (this video is outdated, you don't need to add a vertical stack anymore).</p>
                    </div>
                </div>
                
                <div class="bubble-info warning">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:alert-outline"></ha-icon>
                        Important
                    </h4>
                    <div class="content">
                        <p>To avoid misalignment with your view, place this card after all other dashboard cards. You can't trigger it from a different view.</p>
                        <p>If the content of your pop-up appears on the screen during page loading, <a href="https://github.com/Clooos/Bubble-Card#pop-up-initialization-fix" target="_blank" rel="noopener noreferrer">you can install this fix</a> (recommended).</p>
                    </div>
                </div>
            </div>
            ${editor.makeVersion()}
      </div>
    `;
}


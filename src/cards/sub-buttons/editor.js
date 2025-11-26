import { html } from 'lit';

export function renderSubButtonsEditor(editor) {
    const isPopUp = editor._config.card_type === 'pop-up';

    return html`
        <div class="card-config">
            ${!isPopUp ? editor.makeDropdown("Card type", "card_type", editor.cardTypeList) : ''}

            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:cog"></ha-icon>
                    Card settings
                </h4>
                <div class="content">
                    <ha-formfield>
                        <ha-switch
                            label="Hide main background"
                            .checked="${editor._config?.hide_main_background || false}"
                            .configValue="${"hide_main_background"}"
                            @change="${editor._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Hide main background</label> 
                        </div>
                    </ha-formfield>

                    <ha-formfield>
                        <ha-switch
                            label="Footer mode (Fixed position at bottom)"
                            .checked="${editor._config?.footer_mode || false}"
                            .configValue="${"footer_mode"}"
                            @change="${editor._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Footer mode (Fixed position at bottom)</label> 
                        </div>
                    </ha-formfield>

                    ${editor._config?.footer_mode ? html`
                        <div style="margin-top: 16px; padding-left: 16px; border-left: 2px solid var(--divider-color);">
                            <ha-formfield>
                                <ha-switch
                                    label="Full width footer"
                                    .checked="${editor._config?.footer_full_width || false}"
                                    .configValue="${"footer_full_width"}"
                                    @change="${editor._valueChanged}"
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Full width footer (100% width)</label> 
                                </div>
                            </ha-formfield>

                            ${!editor._config?.footer_full_width ? html`
                                <ha-textfield
                                    label="Custom footer width (px)"
                                    type="number"
                                    value="${editor._config?.footer_width || 500}"
                                    .configValue="${"footer_width"}"
                                    @input="${editor._valueChanged}"
                                    min="200"
                                    max="1200"
                                    step="10"
                                    style="margin-top: 8px;"
                                ></ha-textfield>
                                <div style="font-size: 0.8em; color: var(--secondary-text-color); margin-top: 4px;">
                                    Footer will be centered on the page
                                </div>
                            ` : ''}

                            <ha-textfield
                                label="Footer bottom distance (px)"
                                type="number"
                                value="${editor._config?.footer_bottom_offset || 16}"
                                .configValue="${"footer_bottom_offset"}"
                                @input="${editor._valueChanged}"
                                min="0"
                                max="100"
                                step="1"
                                style="margin-top: 16px;"
                            ></ha-textfield>
                            <div style="font-size: 0.8em; color: var(--secondary-text-color); margin-top: 4px;">
                                Distance from the bottom of the page (default: 16px)
                            </div>
                        </div>
                    ` : ''}
                </div>
            </ha-expansion-panel>

            ${editor.makeSubButtonPanel()}

            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:palette"></ha-icon>
                    Styling and layout options
                </h4>
                <div class="content">
                    ${editor.makeLayoutPanel()}
                    ${!isPopUp ? editor.makeStyleEditor() : ''}
                </div>
            </ha-expansion-panel>

            ${editor.makeModulesEditor()}

            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Sub-buttons card
                </h4>
                <div class="content">
                    <p>This card can only contain sub-buttons, perfect for displaying information, creating menus, and even a fixed footer menu at the bottom of the page.</p>
                </div>
            </div>

            ${!isPopUp ? editor.makeVersion() : ''}
        </div>
    `;
}

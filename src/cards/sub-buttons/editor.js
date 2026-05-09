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
                                <ha-form
                                    .hass=${editor.hass}
                                    .data=${{ footer_width: editor._config?.footer_width || 500 }}
                                    .schema=${[{ name: 'footer_width', selector: { text: { type: 'number' } }, options: { min: 200, max: 1200, step: 10 } }]}
                                    .computeLabel=${() => 'Custom footer width (px)'}
                                    @value-changed=${(ev) => {
                                        editor._valueChanged({
                                            target: { configValue: 'footer_width' },
                                            detail: { value: ev.detail.value.footer_width }
                                        });
                                    }}
                                ></ha-form>
                                <div style="font-size: 0.8em; color: var(--secondary-text-color); margin-top: 4px;">
                                    Footer will be centered on the page
                                </div>
                            ` : ''}

                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ footer_bottom_offset: editor._config?.footer_bottom_offset || 16 }}
                                .schema=${[{ name: 'footer_bottom_offset', selector: { text: { type: 'number' } }, options: { min: 0, max: 100, step: 1 } }]}
                                .computeLabel=${() => 'Footer bottom distance (px)'}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'footer_bottom_offset' },
                                        detail: { value: ev.detail.value.footer_bottom_offset }
                                    });
                                }}
                            ></ha-form>
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

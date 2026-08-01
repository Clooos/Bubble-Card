import { html } from 'lit';
import setupTranslation from '../../tools/localize.js';

export function renderSubButtonsEditor(editor) {
    const t = setupTranslation(editor.hass);
    const isPopUp = editor._config.card_type === 'pop-up';

    return html`
        <div class="card-config">
            ${!isPopUp ? editor.makeDropdown(t('editor.common.card_type'), "card_type", editor.cardTypeList) : ''}

            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:cog"></ha-icon>
                    ${t('editor.common.card_settings')}
                </h4>
                <div class="content">
                    <ha-formfield>
                        <ha-switch
                            label="${t('editor.sub_buttons_card.hide_main_background')}"
                            .checked="${editor._config?.hide_main_background || false}"
                            .configValue="${"hide_main_background"}"
                            @change="${editor._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t('editor.sub_buttons_card.hide_main_background')}</label>
                        </div>
                    </ha-formfield>

                    <ha-formfield>
                        <ha-switch
                            label="${t('editor.sub_buttons_card.footer_mode')}"
                            .checked="${editor._config?.footer_mode || false}"
                            .configValue="${"footer_mode"}"
                            @change="${editor._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t('editor.sub_buttons_card.footer_mode')}</label>
                        </div>
                    </ha-formfield>

                    ${editor._config?.footer_mode ? html`
                        <div style="margin-top: 16px; padding-inline-start: 16px; border-inline-start: 2px solid var(--divider-color);">
                            <ha-formfield>
                                <ha-switch
                                    label="${t('editor.sub_buttons_card.full_width_footer')}"
                                    .checked="${editor._config?.footer_full_width || false}"
                                    .configValue="${"footer_full_width"}"
                                    @change="${editor._valueChanged}"
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${t('editor.sub_buttons_card.full_width_footer')}</label>
                                </div>
                            </ha-formfield>

                            ${!editor._config?.footer_full_width ? html`
                                <ha-form
                                    .hass=${editor.hass}
                                    .data=${{ footer_width: editor._config?.footer_width || 500 }}
                                    .schema=${[{ name: 'footer_width', selector: { text: { type: 'number' } }, options: { min: 200, max: 1200, step: 10 } }]}
                                    .computeLabel=${() => t('editor.sub_buttons_card.footer_width')}
                                    @value-changed=${(ev) => {
                                        editor._valueChanged({
                                            target: { configValue: 'footer_width' },
                                            detail: { value: ev.detail.value.footer_width }
                                        });
                                    }}
                                ></ha-form>
                                <div style="font-size: 0.8em; color: var(--secondary-text-color); margin-top: 4px;">
                                    ${t('editor.sub_buttons_card.footer_centered')}
                                </div>
                            ` : ''}

                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ footer_bottom_offset: editor._config?.footer_bottom_offset || 16 }}
                                .schema=${[{ name: 'footer_bottom_offset', selector: { text: { type: 'number' } }, options: { min: 0, max: 100, step: 1 } }]}
                                .computeLabel=${() => t('editor.sub_buttons_card.footer_distance')}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'footer_bottom_offset' },
                                        detail: { value: ev.detail.value.footer_bottom_offset }
                                    });
                                }}
                            ></ha-form>
                            <div style="font-size: 0.8em; color: var(--secondary-text-color); margin-top: 4px;">
                                ${t('editor.sub_buttons_card.footer_distance_helper')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </ha-expansion-panel>

            ${editor.makeSubButtonPanel()}

            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:palette"></ha-icon>
                    ${t('editor.common.styling_layout_options')}
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
                    ${t('editor.sub_buttons_card.info_title')}
                </h4>
                <div class="content">
                    <p>${t('editor.sub_buttons_card.info_body')}</p>
                </div>
            </div>

            ${!isPopUp ? editor.makeVersion() : ''}
        </div>
    `;
}

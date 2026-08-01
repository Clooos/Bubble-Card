import { html } from "lit";
import setupTranslation from '../../tools/localize.js';


export function renderMediaPlayerEditor(editor){
    const t = setupTranslation(editor.hass);

    let button_action = editor._config.button_action || '';

    return html`
        <div class="card-config">
            ${editor.makeDropdown(t('editor.common.card_type'), "card_type", editor.cardTypeList)}
            <ha-form
                .hass=${editor.hass}
                .data=${editor._config}
                .schema=${[
                            { name: "entity",
                            label: t('editor.common.entity'),
                            selector: { entity: {domain:["media_player"]}  },
                            },
                        ]}   
                .computeLabel=${editor._computeLabelCallback}
                @value-changed=${editor._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t('editor.common.card_settings')}
                </h4>
                <div class="content"> 
                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ name: editor._config?.name || '' }}
                        .schema=${[{ name: 'name', selector: { text: {} } }]}
                        .computeLabel=${() => editor._optionalLabel(t('editor.common.name'))}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'name' },
                                detail: { value: ev.detail.value.name }
                            });
                        }}
                    ></ha-form>
                    ${editor.makeDropdown(editor._optionalLabel(t('editor.common.icon')), "icon")}
                    ${editor.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                ${t('editor.media_player.settings_title')}
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${editor.hass}
                        .data=${editor._config}
                        .schema=${[
                            {
                                type: "grid",
                                flatten: true,
                                schema: [
                                    {
                                        name: "min_volume",
                                        label: t('editor.media_player.min_volume'),
                                        selector: { number: {
                                            step: "any"
                                        } },
                                    },
                                    {
                                        name: "max_volume",
                                        label: t('editor.media_player.max_volume'),
                                        selector: { number: {
                                            step: "any"
                                        } },
                                    },
                                ],
                            },
                        ]}   
                        .computeLabel=${editor._computeLabelCallback}
                        @value-changed=${editor._valueChanged}
                    ></ha-form>
                    <ha-formfield>
                        <ha-switch
                            aria-label="${editor._optionalLabel(t('editor.media_player.hide_play_pause'))}"
                            .checked=${editor._config.hide?.play_pause_button || false}
                            .configValue="${"hide.play_pause_button"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${editor._optionalLabel(t('editor.media_player.hide_play_pause'))}</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            aria-label="${editor._optionalLabel(t('editor.media_player.hide_volume'))}"
                            .checked=${editor._config.hide?.volume_button || false}
                            .configValue="${"hide.volume_button"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${editor._optionalLabel(t('editor.media_player.hide_volume'))}</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            aria-label="${editor._optionalLabel(t('editor.media_player.hide_next'))}"
                            .checked=${editor._config.hide?.next_button || false}
                            .configValue="${"hide.next_button"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${editor._optionalLabel(t('editor.media_player.hide_next'))}</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            aria-label="${editor._optionalLabel(t('editor.media_player.hide_previous'))}"
                            .checked=${editor._config.hide?.previous_button || false}
                            .configValue="${"hide.previous_button"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${editor._optionalLabel(t('editor.media_player.hide_previous'))}</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            aria-label="${editor._optionalLabel(t('editor.media_player.hide_power'))}"
                            .checked=${editor._config.hide?.power_button}
                            .configValue="${"hide.power_button"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${editor._optionalLabel(t('editor.media_player.hide_power'))}</label>
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t('editor.media_player.behavior_title')}
                        </h4>
                        <div class="content">
                            <p>${t('editor.media_player.behavior_body')}</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  ${t('editor.actions.on_icon')}
                </h4>
                <div class="content">
                    ${editor.makeActionPanel('tap')}
                    ${editor.makeActionPanel('double_tap')}
                    ${editor.makeActionPanel('hold')}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                ${t('editor.actions.on_card')}
                </h4>
                <div class="content">
                    ${editor.makeActionPanel('tap', button_action, 'none', 'button_action')}
                    ${editor.makeActionPanel('double_tap', button_action, 'none', 'button_action')}
                    ${editor.makeActionPanel('hold', button_action, 'none', 'button_action')}
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
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          ${t('editor.media_player.styling_title')}
                        </h4>
                        <div class="content"> 
                            <ha-formfield>
                                <ha-switch
                                    aria-label="${editor._optionalLabel(t('editor.media_player.blurred_cover'))}"
                                    .checked=${editor._config.cover_background ?? false}
                                    .configValue="${"cover_background"}"
                                    @change=${editor._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${editor._optionalLabel(t('editor.media_player.blurred_cover'))}</label> 
                                </div>
                            </ha-formfield>
                        </div>
                    </ha-expansion-panel>
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t('editor.media_player.info_title')}
                </h4>
                <div class="content">
                    <p>${t('editor.media_player.info_body')}</p>
                </div>
            </div>
            ${editor.makeVersion()}
        </div>
    `;    
}
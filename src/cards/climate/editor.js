import { html } from "lit";
import setupTranslation from '../../tools/localize.js';


// Add the default "HVAC modes menu" sub-button to a card that was never
// configured. The test is on the raw sub_button key, before any normalization:
// the sub-button editor keeps an explicit empty list on climate cards, so a
// list emptied on purpose is told apart from a brand new card and the menu
// stops coming back on every edit (#2176, #2456). No editor-instance flag
// here: a new instance is created every time the card is opened.
function seedDefaultSubButton(editor, t) {
    if (editor._config.sub_button !== undefined || !editor._config.entity) return;
    if (!editor.hass.states[editor._config.entity]?.attributes?.hvac_modes) return;

    editor._config.sub_button = {
        main: [{
            name: t('editor.climate.hvac_menu_name'),
            select_attribute: 'hvac_modes',
            state_background: false,
            show_arrow: false
        }]
    };
    editor._firstRowsComputation = true;
}

export function renderClimateEditor(editor){
    const t = setupTranslation(editor.hass);
    let button_action = editor._config.button_action || '';

    if (editor._config.card_type === "climate") {
        seedDefaultSubButton(editor, t);
    }

    return html`
        <div class="card-config">
        ${editor.makeDropdown(t('editor.common.card_type'), "card_type", editor.cardTypeList)}
        <ha-form
            .hass=${editor.hass}
            .data=${editor._config}
            .schema=${[
                        { name: "entity",
                        label: t('editor.common.entity'),
                        selector: { entity: {domain:["climate"]}  },
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
                ${t('editor.climate.settings_title')}
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
                                        name: "min_temp",
                                        label: t('editor.climate.min_temp'),
                                        selector: { number: {
                                            step: "any"
                                        } },
                                    },
                                    {
                                        name: "max_temp",
                                        label: t('editor.climate.max_temp'),
                                        selector: { number: {
                                            step: "any"
                                        } },
                                    },
                                    {
                                        name: "step",
                                        label: t('editor.climate.step'),
                                        selector: { number: {
                                            step: "any"
                                        } },
                                    },
                                ],
                            },
                        ]}   
                        .computeLabel=${editor._computeLabelCallback}
                        .disabled="${editor._config.button_type === 'name'}"
                        @value-changed=${editor._valueChanged}
                    ></ha-form>
                    ${editor.hass.states[editor._config.entity]?.attributes?.target_temp_low ? html`
                        <ha-formfield>
                            <ha-switch
                                aria-label="${editor._optionalLabel(t('editor.climate.hide_target_low'))}"
                                .checked=${editor._config.hide_target_temp_low}
                                .configValue="${"hide_target_temp_low"}"
                                @change=${editor._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">${editor._optionalLabel(t('editor.climate.hide_target_low'))}</label> 
                            </div>
                        </ha-formfield>
                    ` : ''}
                    ${editor.hass.states[editor._config.entity]?.attributes?.target_temp_high ? html`
                        <ha-formfield>
                            <ha-switch
                                aria-label="${editor._optionalLabel(t('editor.climate.hide_target_high'))}"
                                .checked=${editor._config.hide_target_temp_high}
                                .configValue="${"hide_target_temp_high"}"
                                @change=${editor._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">${editor._optionalLabel(t('editor.climate.hide_target_high'))}</label> 
                            </div>
                        </ha-formfield>
                    ` : ''}
                    <ha-formfield>
                        <ha-switch
                            aria-label="${editor._optionalLabel(t('editor.climate.hide_temp_control'))}"
                            .checked=${editor._config.hide_temperature}
                            .configValue="${"hide_temperature"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${editor._optionalLabel(t('editor.climate.hide_temp_control'))}</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            aria-label="${editor._optionalLabel(t('editor.climate.constant_background'))}"
                            .checked=${editor._config.state_color === true}
                            .configValue="${"state_color"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${editor._optionalLabel(t('editor.climate.constant_background'))}</label> 
                        </div>
                    </ha-formfield>
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
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t('editor.climate.info_title')}
                </h4>
                <div class="content">
                    <p>${t('editor.climate.info_body')}</p>
                </div>
            </div>
            ${editor.makeVersion()}
        </div>
    `;
}
import { html } from "lit";


export function renderClimateEditor(editor){
    if (
        editor._config.card_type === "climate" && 
        !editor.climateSubButtonsAdded &&
        editor._config.entity
    ) {
        const shouldAddHVACModes = editor.hass.states[editor._config.entity]?.attributes?.hvac_modes;

        if (!editor._config.sub_button || editor._config.sub_button.length === 0) {
            editor._config.sub_button = [
                shouldAddHVACModes ? { 
                    name: 'HVAC modes menu', 
                    select_attribute: 'hvac_modes', 
                    state_background: false,
                    show_arrow: false 
                } : null
            ].filter(Boolean);
        }

        editor.climateSubButtonsAdded = true;
    }

    return html`
        <div class="card-config">
        ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
        <ha-form
            .hass=${editor.hass}
            .data=${editor._config}
            .schema=${[
                        { name: "entity",
                        label: "Entity", 
                        selector: { entity: {domain:["climate"]}  },
                        },
                    ]}   
            .computeLabel=${editor._computeLabelCallback}
            @value-changed=${editor._valueChanged}
        ></ha-form>
                                <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Climate settings
                </h4>
                <div class="content">     
                    <ha-textfield
                        label="Optional - Name"
                        .value="${editor._config?.name || ''}"
                        .configValue="${"name"}"
                        @input="${editor._valueChanged}"
                    ></ha-textfield>
                    ${editor.makeDropdown("Optional - Icon", "icon")}
                    ${editor.makeShowState()}
                    ${editor.hass.states[editor._config.entity]?.attributes?.target_temp_low ? html`
                        <ha-formfield .label="Optional - Hide target temp low">
                            <ha-switch
                                aria-label="Optional - Hide target temp low"
                                .checked=${editor._config.hide_target_temp_low}
                                .configValue="${"hide_target_temp_low"}"
                                @change=${editor._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Hide target temp low</label> 
                            </div>
                        </ha-formfield>
                    ` : ''}
                    ${editor.hass.states[editor._config.entity]?.attributes?.target_temp_high ? html`
                        <ha-formfield .label="Optional - Hide target temp high">
                            <ha-switch
                                aria-label="Optional - Hide target temp high"
                                .checked=${editor._config.hide_target_temp_high}
                                .configValue="${"hide_target_temp_high"}"
                                @change=${editor._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Hide target temp high</label> 
                            </div>
                        </ha-formfield>
                    ` : ''}
                    <ha-formfield .label="Optional - Constant background color when ON">
                        <ha-switch
                            aria-label="Optional - Constant background color when ON"
                            .checked=${editor._config.state_color === true}
                            .configValue="${"state_color"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Constant background color when ON</label> 
                        </div>
                    </ha-formfield>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${editor.makeActionPanel("Tap action")}
                    ${editor.makeActionPanel("Double tap action")}
                    ${editor.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${editor.makeLayoutOptions()}
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeSubButtonPanel()}
            ${editor.makeModulesEditor()}
            <ha-alert alert-type="info">This card allows you to control your climate entities. You can also add a sub-button that display a select menu for your climate modes (check if you have "Select menu" available when you create a new sub-button).</ha-alert>
            ${editor.makeVersion()}
        </div>
    `;


}
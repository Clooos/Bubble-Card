import { html } from "lit";
import { ensureNewSubButtonsSchemaObject } from "../../components/sub-button/utils.js";


export function renderClimateEditor(editor){
    let button_action = editor._config.button_action || '';

    if (
        editor._config.card_type === "climate" && 
        !editor.climateSubButtonsAdded &&
        editor._config.entity
    ) {
        const shouldAddHVACModes = editor.hass.states[editor._config.entity]?.attributes?.hvac_modes;

        if (shouldAddHVACModes) {
            const sectioned = ensureNewSubButtonsSchemaObject(editor._config);
            const hasMainButtons = Array.isArray(sectioned.main) && sectioned.main.length > 0;
            
            if (!hasMainButtons) {
                const newSubButton = { 
                    name: 'HVAC modes menu', 
                    select_attribute: 'hvac_modes', 
                    state_background: false,
                    show_arrow: false 
                };
                
                sectioned.main.push(newSubButton);
                editor._config.sub_button = sectioned;
                editor._firstRowsComputation = true;
            }
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
                  Card settings
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
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Climate settings
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
                                        label: "Min temperature",
                                        selector: { number: {
                                            step: "any"
                                        } },
                                    },
                                    {
                                        name: "max_temp",
                                        label: "Max temperature",
                                        selector: { number: {
                                            step: "any"
                                        } },
                                    },
                                    {
                                        name: "step",
                                        label: "Step",
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
                    <ha-formfield .label="Optional - Hide temperature control">
                        <ha-switch
                            aria-label="Optional - Hide temperature control"
                            .checked=${editor._config.hide_temperature}
                            .configValue="${"hide_temperature"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide temperature control</label> 
                        </div>
                    </ha-formfield>
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
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${editor.makeActionPanel("Tap action", button_action, 'none', 'button_action')}
                    ${editor.makeActionPanel("Double tap action", button_action, 'none', 'button_action')}
                    ${editor.makeActionPanel("Hold action", button_action, 'none', 'button_action')}
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
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Climate card
                </h4>
                <div class="content">
                    <p>This card allows you to control your climate entities. You can also add a sub-button that display a dropdown menu for your climate modes (check if you have "Select menu" available when you create a new sub-button).</p>
                </div>
            </div>
            ${editor.makeVersion()}
        </div>
    `;
}
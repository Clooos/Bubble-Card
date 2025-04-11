import { Schema } from 'js-yaml';
import { html } from 'lit';
import { isEntityType } from "../../tools/utils.js";

function getButtonList(){
    return [{
        'label': 'Switch',
        'value': 'switch'
    },
    {
        'label': 'Slider',
        'value': 'slider'
    },
    {
        'label': 'State',
        'value': 'state'
    },
    {
        'label': 'Name / Text',
        'value': 'name'
    }
];
}

export function renderButtonEditor(editor){
    let entityList = {};
    if (editor._config.button_type === 'slider') {        
        entityList = {
            filter: [
                { domain: ["light", "media_player", "cover", "input_number", "number", "climate", "fan"] },
                { domain: "sensor", device_class: "battery" },
            ],
        }
    }

    let button_action = editor._config.button_action || '';
    let button_type = editor._config?.button_type || 'switch';


    return html`
        <div class="card-config">
            ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
            ${editor.makeDropdown("Button type", "button_type", getButtonList() )}
            <ha-form
                .hass=${editor.hass}
                .data=${editor._config}
                .schema=${[
                            { name: "entity",
                            label: button_type !== 'slider' ? "Entity (toggle)" : "Entity (See text below for supported entities)", 
                            selector: { entity: entityList },
                            },
                        ]}   
                .computeLabel=${editor._computeLabelCallback}
                .disabled="${editor._config.button_type === 'name'}"
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
            <ha-expansion-panel outlined style="display: ${editor._config.button_type !== 'slider' ? 'none' : ''}">
                <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Slider settings
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
                                        name: "min_value",
                                        label: "Min value",
                                        selector: { number: {
                                            step: "any"
                                        } },
                                    },
                                    {
                                        name: "max_value",
                                        label: "Max value",
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
                    <ha-formfield>
                        <ha-switch
                            .checked=${editor._config.tap_to_slide}
                            .configValue="${"tap_to_slide"}"
                            @change="${editor._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Tap to slide (previous behavior)</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            .checked=${editor._config.read_only_slider}
                            .configValue="${"read_only_slider"}"
                            @change="${editor._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Read only slider</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            .checked=${editor._config.slider_live_update}
                            .configValue="${"slider_live_update"}"
                            @change="${editor._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Slider live update</label> 
                        </div>
                    </ha-formfield>
                    <ha-alert alert-type="info">By default, sliders are updated only on release. You can toggle this option to enable live updates while sliding.</ha-alert>
                    ${editor._config.entity?.startsWith("light") ? html`
                        <hr>
                        <ha-formfield>
                            <ha-switch
                                .checked=${editor._config.light_transition}
                                .configValue="${"light_transition"}"
                                @change=${editor._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Enable smooth brightness transitions</label> 
                            </div>
                        </ha-formfield>
                        ${editor._config.light_transition ? html`
                            <ha-alert alert-type="info">
                                <b>Important:</b> This feature only works for lights that support the 
                                <a target="_blank" rel="noopener noreferrer" href="https://www.home-assistant.io/integrations/light/#action-lightturn_on">light.turn_on</a> transition attribute. 
                                Enabling this for lights that do not support transitions will unfortunatley have no effect. Defaults to 500ms unless overridden below.
                            </ha-alert>
                            
                            <ha-textfield
                                label="Transition time (ms)"
                                type="number"
                                min="1"
                                max="2000"
                                .value="${editor._config.light_transition_time}"
                                .configValue="${"light_transition_time"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                        ` : ''}
                    ` : ''}
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
            <ha-expansion-panel outlined style="display: ${editor._config.button_type === 'slider' && editor._config.tap_to_slide ? 'none' : ''}">
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${editor.makeActionPanel("Tap action", button_action, editor._config.button_type !== 'name' ? (editor._config.button_type === 'state' ? 'more-info' : (editor._config.button_type === 'slider' ? (isEntityType(editor, "sensor", editor._config.entity) ? 'more-info' : 'toggle') : 'toggle')) : 'none', 'button_action')}
                    ${editor.makeActionPanel("Double tap action", button_action, 'none', 'button_action')}
                    ${editor._config.button_type !== 'slider' ? editor.makeActionPanel("Hold action", button_action, editor._config.button_type !== 'name' ? (editor._config.button_type === 'slider' ? 'none' : 'more-info') : 'none', 'button_action') : ''}
                </div>
            </ha-expansion-panel>
            ${editor.makeSubButtonPanel()}
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
            ${editor.makeModulesEditor()}
            <ha-alert alert-type="info">This card allows you to control your entities. 
                ${editor._config.button_type === 'slider' ? html`Supported entities: Light (brightness), media player (volume), cover (position), fan (percentage), climate (temperature), battery sensor (percentage), input number and number (value). <b>You can also use any entity with a numeric state by defining it in YAML mode, then define the min and max values.</b>` : ''}
            </ha-alert>
            ${editor.makeVersion()}
        </div>
    `;
}
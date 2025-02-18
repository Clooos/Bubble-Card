import { html } from 'lit';


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
    let entityList = {}
    if (editor._config.button_type === 'slider') entityList = {domain:["light", "media_player", "cover","input_number"]};

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
                            label: button_type !== 'slider' ? "Entity (toggle)" : "Entity (light, media_player, cover or input_number)", 
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
                Button settings
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
                <ha-icon icon="mdi:gesture-tap"></ha-icon>
                Tap action on icon
                </h4>
                <div class="content">
                    ${editor.makeActionPanel("Tap action")}
                    ${editor.makeActionPanel("Double tap action")}
                    ${editor.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined style="display: ${editor._config.button_type === 'slider' ? 'none' : ''}">
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap"></ha-icon>
                Tap action on button
                </h4>
                <div class="content">
                    ${editor.makeActionPanel("Tap action", button_action, editor._config.button_type !== 'name' ? (editor._config.button_type === 'state' ? 'more-info' : 'toggle') : 'none', 'button_action')}
                    ${editor.makeActionPanel("Double tap action", button_action, editor._config.button_type !== 'name' ? (editor._config.button_type === 'state' ? 'more-info' : 'toggle') : 'none', 'button_action')}
                    ${editor.makeActionPanel("Hold action", button_action, editor._config.button_type !== 'name' ? 'more-info' : 'none', 'button_action')}
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
            <ha-alert alert-type="info">This card allows you to control your entities. ${editor._config.button_type === 'slider' ? 'Supported entities: Light (brightness), media player (volume), cover (position), fan (percentage), climate (temperature), input number and number (value). To access color / control of an entity, simply tap on the icon.' : ''}</ha-alert>
            ${editor.makeVersion()}
        </div>
    `;
}
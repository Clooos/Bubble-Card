import { html } from 'lit';
import { isEntityType } from "../../tools/utils.js";
import { makeButtonSliderPanel } from '../../components/slider/editor.js';
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
    if (editor._config.button_type === 'slider' && !editor._disableEntityFilter) {        
        entityList = {
            filter: [
                { domain: ["light", "media_player", "cover", "input_number", "number", "climate", "fan"] },
                { domain: "sensor", device_class: "battery" },
            ],
        }
    }

    const isPopUp = editor._config.card_type === 'pop-up';

    let button_action = editor._config.button_action || '';
    
    if (!editor._config.button_type) {
        editor._config.button_type = isPopUp ? 'name' : 'switch';
    }
    let button_type = editor._config.button_type;

    return html`
        <div class="card-config">
            ${!isPopUp ? editor.makeDropdown("Card type", "card_type", editor.cardTypeList) : ''}
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
                ${isPopUp ? 'Header card settings' : 'Card settings'}
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
            ${makeButtonSliderPanel(editor)}
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
                    <!-- 
                      Default button action mapping to match create.js defaults:
                      - name: tap="none", double="none", hold="none"
                      - state: tap="more-info", double="none", hold="more-info" 
                      - slider: tap="more-info"(sensor)/"toggle"(others), double="none", hold="none"
                      - switch: tap="toggle", double="none", hold="more-info"
                    -->
                    ${editor.makeActionPanel("Tap action", button_action, 
                        editor._config.button_type === 'name' ? 'none' : 
                        editor._config.button_type === 'state' ? 'more-info' : 
                        editor._config.button_type === 'slider' ? 
                            (isEntityType(editor, "sensor", editor._config.entity) ? 'more-info' : 'toggle') : 
                            'toggle', 
                        'button_action')}
                    ${editor.makeActionPanel("Double tap action", button_action, 'none', 'button_action')}
                    ${editor.makeActionPanel("Hold action", button_action, 
                        editor._config.button_type === 'name' ? 'none' :
                        editor._config.button_type === 'slider' ? 'none' :
                        'more-info', 
                        'button_action')}
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
                    ${!isPopUp ? editor.makeStyleEditor() : ''}
                </div>
            </ha-expansion-panel>
            ${!isPopUp ? editor.makeModulesEditor() : ''}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Button card ${isPopUp ? '(as pop-up header)' : ''}
                </h4>
                <div class="content">
                    <p>This card is very versatile. It can be used as a <b>switch</b>, a <b>slider</b>, a <b>state</b> or a <b>name/text</b> button. Select the type of button you want to get more information about it.</p>
                    
                    ${editor._config.button_type === 'switch' || !editor._config.button_type ? html`
                        <p><strong>Switch button:</strong> This is the default button type. By default, it toggles an entity and its background color changes based on the entity's state or the color of a light. You can change its action in the <b>Tap action on card</b> section.</p>
                    ` : ''}
                    
                    ${editor._config.button_type === 'slider' ? html`
                        <p><strong>Slider button:</strong> This button type lets you control entities with adjustable ranges. It's ideal for dimming lights, and its fill color will adapt to the light's color. You can also use it to display values, such as a battery level.</p>
                        <p>Supported entities for sliders:</p>
                        <ul class="icon-list">
                            <li><ha-icon icon="mdi:lightbulb-outline"></ha-icon>Light (brightness)</li>
                            <li><ha-icon icon="mdi:speaker"></ha-icon>Media player (volume)</li>
                            <li><ha-icon icon="mdi:window-shutter"></ha-icon>Cover (position)</li>
                            <li><ha-icon icon="mdi:fan"></ha-icon>Fan (percentage)</li>
                            <li><ha-icon icon="mdi:thermometer"></ha-icon>Climate (temperature)</li>
                            <li><ha-icon icon="mdi:numeric"></ha-icon>Input number and number (value)</li>
                            <li><ha-icon icon="mdi:battery-50"></ha-icon>Battery sensor (percentage, read only)</li>
                        </ul>
                        <p>You can also use any entity with a <b>numeric state</b> by disabling the entity filter in <b>Slider settings</b>, then define the <b>min</b> and <b>max</b> values. This option is read only.</p>
                    ` : ''}
                    
                    ${editor._config.button_type === 'state' ? html`
                        <p><strong>State button:</strong> Perfect for displaying information from a sensor or any entity. When you press it, it will show the "More info" panel of the entity. Its background color does not change.</p>
                    ` : ''}
                    
                    ${editor._config.button_type === 'name' ? html`
                        <p><strong>Name/Text button:</strong> The only button type that doesn't need an entity. It allows you to display a short text, a name or a title. You can also add actions to it. Its background color does not change.</p>
                    ` : ''}
                </div>
            </div>
            ${!isPopUp ? editor.makeVersion() : ''}
        </div>
    `;
}
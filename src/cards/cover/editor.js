import { html } from "lit";

export function renderCoverEditor(editor){

    let button_action = editor._config.button_action || '';
    return html`
        <div class="card-config">
            ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
            <ha-form
                .hass=${editor.hass}
                .data=${editor._config}
                .schema=${[
                            { name: "entity",
                            label: "Entity", 
                            selector: { entity: {domain:["cover"]}  },
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
                    ${editor.makeDropdown("Optional - Open icon", "icon_open")}
                    ${editor.makeDropdown("Optional - Closed icon", "icon_close")}
                    ${editor.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:window-shutter-cog"></ha-icon>
                  Custom services
                </h4>
                <div class="content"> 
                    <ha-textfield
                        label="Optional - Open service (cover.open_cover by default)"
                        .value="${editor._config?.open_service || 'cover.open_cover'}"
                        .configValue="${"open_service"}"
                        @input="${editor._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Stop service (cover.stop_cover by default)"
                        .value="${editor._config?.stop_service || 'cover.stop_cover'}"
                        .configValue="${"stop_service"}"
                        @input="${editor._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Close service (cover.close_cover by default)"
                        .value="${editor._config?.close_service || 'cover.close_cover'}"
                        .configValue="${"close_service"}"
                        @input="${editor._valueChanged}"
                    ></ha-textfield>
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
                  Styling options
                </h4>
                <div class="content"> 
                    ${editor.makeLayoutOptions()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Cover styling
                        </h4>
                        <div class="content"> 
                            ${editor.makeDropdown("Optional - Arrow down icon", "icon_down")}
                            ${editor.makeDropdown("Optional - Arrow up icon", "icon_up")}
                        </div>
                    </ha-expansion-panel>
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Cover card
                </h4>
                <div class="content">
                    <p>This card allows you to control your covers.</p>
                </div>
            </div>
            ${editor.makeVersion()}
        </div>
    `;
}
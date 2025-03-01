import { html } from "lit";


export function renderMediaPlayerEditor(editor){

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
                            selector: { entity: {domain:["media_player"]}  },
                            },
                        ]}   
                .computeLabel=${editor._computeLabelCallback}
                @value-changed=${editor._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Media player settings
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
                  <ha-icon icon="mdi:eye-off"></ha-icon>
                  Display/hide buttons
                </h4>
                <div class="content"> 
                    <ha-formfield .label="Optional - Hide play/pause button">
                        <ha-switch
                            aria-label="Optional - Hide play/pause button"
                            .checked=${editor._config.hide?.play_pause_button || false}
                            .configValue="${"hide.play_pause_button"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide play/pause button</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide volume button">
                        <ha-switch
                            aria-label="Optional - Hide volume button"
                            .checked=${editor._config.hide?.volume_button || false}
                            .configValue="${"hide.volume_button"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide volume button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide next button">
                        <ha-switch
                            aria-label="Optional - Hide next button"
                            .checked=${editor._config.hide?.next_button || false}
                            .configValue="${"hide.next_button"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide next button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide previous button">
                        <ha-switch
                            aria-label="Optional - Hide previous button"
                            .checked=${editor._config.hide?.previous_button || false}
                            .configValue="${"hide.previous_button"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide previous button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide power button">
                        <ha-switch
                            aria-label="Optional - Hide power button"
                            .checked=${editor._config.hide?.power_button}
                            .configValue="${"hide.power_button"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide power button</label>
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
            <ha-expansion-panel outlined style="display: ${editor._config.button_type === 'slider' ? 'none' : ''}">
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${editor.makeActionPanel("Tap action", button_action, 'more-info', 'button_action')}
                    ${editor.makeActionPanel("Double tap action", button_action, 'toggle', 'button_action')}
                    ${editor.makeActionPanel("Hold action", button_action, 'toggle', 'button_action')}
                </div>
            </ha-expansion-panel>
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
                          Media player styling
                        </h4>
                        <div class="content"> 
                            <ha-formfield .label="Optional - Blurred media cover in background">
                                <ha-switch
                                    aria-label="Optional - Blurred media cover in background"
                                    .checked=${editor._config.cover_background ?? false}
                                    .configValue="${"cover_background"}"
                                    @change=${editor._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Blurred media cover in background</label> 
                                </div>
                            </ha-formfield>
                        </div>
                    </ha-expansion-panel>
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeSubButtonPanel()}
            ${editor.makeModulesEditor()}
            <ha-alert alert-type="info">This card allows you to control a media player. You can tap on the icon to get more control.</ha-alert>
            ${editor.makeVersion()}
        </div>
    `;    
}
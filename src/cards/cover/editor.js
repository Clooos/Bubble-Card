import { html } from "lit";
import { coverEntityFeature } from "./changes.js";

export function renderCoverEditor(editor){

    let button_action = editor._config.button_action || '';
    
    // Check if the selected cover entity supports tilt
    const entity_id = editor._config?.entity;
    const stateObj = entity_id ? editor.hass?.states?.[entity_id] : null;
    const coverSupportedFeatures = stateObj?.attributes?.supported_features ?? 0;
    const hasTiltSupport = !!(coverSupportedFeatures & (
        coverEntityFeature.OPEN_TILT |
        coverEntityFeature.CLOSE_TILT |
        coverEntityFeature.SET_TILT_POSITION
    ));

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
                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ name: editor._config?.name || '' }}
                        .schema=${[{ name: 'name', selector: { text: {} } }]}
                        .computeLabel=${() => 'Optional - Name'}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'name' },
                                detail: { value: ev.detail.value.name }
                            });
                        }}
                    ></ha-form>
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
                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ open_service: editor._config?.open_service || 'cover.open_cover' }}
                        .schema=${[{ name: 'open_service', selector: { text: {} } }]}
                        .computeLabel=${() => 'Optional - Open service (cover.open_cover by default)'}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'open_service' },
                                detail: { value: ev.detail.value.open_service }
                            });
                        }}
                    ></ha-form>
                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ stop_service: editor._config?.stop_service || 'cover.stop_cover' }}
                        .schema=${[{ name: 'stop_service', selector: { text: {} } }]}
                        .computeLabel=${() => 'Optional - Stop service (cover.stop_cover by default)'}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'stop_service' },
                                detail: { value: ev.detail.value.stop_service }
                            });
                        }}
                    ></ha-form>
                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ close_service: editor._config?.close_service || 'cover.close_cover' }}
                        .schema=${[{ name: 'close_service', selector: { text: {} } }]}
                        .computeLabel=${() => 'Optional - Close service (cover.close_cover by default)'}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'close_service' },
                                detail: { value: ev.detail.value.close_service }
                            });
                        }}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
            ${hasTiltSupport ? html`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:swap-horizontal"></ha-icon>
                  Tilt buttons
                </h4>
                <div class="content">
                    ${editor.makeDropdown("Tilt buttons position", "tilt_buttons", [
                        { value: 'top', label: 'Top (default)' },
                        { value: 'bottom', label: 'Bottom' },
                        { value: 'left', label: 'Left' },
                        { value: 'right', label: 'Right' },
                        { value: 'hidden', label: 'Hidden' },
                    ])}
                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ open_tilt_service: editor._config?.open_tilt_service || 'cover.open_cover_tilt' }}
                        .schema=${[{ name: 'open_tilt_service', selector: { text: {} } }]}
                        .computeLabel=${() => 'Optional - Open tilt service (cover.open_cover_tilt by default)'}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'open_tilt_service' },
                                detail: { value: ev.detail.value.open_tilt_service }
                            });
                        }}
                    ></ha-form>

                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ close_tilt_service: editor._config?.close_tilt_service || 'cover.close_cover_tilt' }}
                        .schema=${[{ name: 'close_tilt_service', selector: { text: {} } }]}
                        .computeLabel=${() => 'Optional - Close tilt service (cover.close_cover_tilt by default)'}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'close_tilt_service' },
                                detail: { value: ev.detail.value.close_tilt_service }
                            });
                        }}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
            ` : ''}
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
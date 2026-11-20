import { html } from "lit";
import setupTranslation from '../../tools/localize.js';
import { coverEntityFeature, tiltButtonSupport, tiltsByPositionOnly } from "./changes.js";

export function renderCoverEditor(editor){
    const t = setupTranslation(editor.hass);

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

    // Check which speeds are supported by the selected cover entity
    const supportedSpeeds = stateObj?.attributes?.supported_speeds || [];

    // The panel opens for any kind of tilt, but the position dropdown only
    // means something once a button can exist, so it stays greyed out until a
    // tilt action is filled in for a cover that only tilts to an angle (#2618)
    const tiltsByPosition = tiltsByPositionOnly(stateObj);
    const hasTiltButtons = tiltButtonSupport(stateObj, editor._config).any;

    return html`
        <div class="card-config">
            ${editor.makeDropdown(t('editor.common.card_type'), "card_type", editor.cardTypeList)}
            <ha-form
                .hass=${editor.hass}
                .data=${editor._config}
                .schema=${[
                            { name: "entity",
                            label: t('editor.common.entity'),
                            selector: { entity: {domain:["cover"]}  },
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
                    <ha-form
                        .hass=${editor.hass}
                        .data=${editor._config}
                        .schema=${[
                                    { name: "open_speed",
                                    label: t('editor.cover.open_speed_title'),
                                    selector: {
                                        select: {
                                            mode: "dropdown",
                                            options: supportedSpeeds,
                                            },
                                        },
                                    },
                                ]}   
                        .computeLabel=${editor._computeLabelCallback}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'open_speed' },
                                detail: { value: ev.detail.value.open_speed }
                            });
                        }}
                    ></ha-form>
                    <ha-form
                        .hass=${editor.hass}
                        .data=${editor._config}
                        .schema=${[
                                    { name: "close_speed",
                                    label: t('editor.cover.close_speed_title'),
                                    selector: {
                                        select: {
                                            mode: "dropdown",
                                            options: supportedSpeeds,
                                            },
                                        },
                                    },
                                ]}   
                        .computeLabel=${editor._computeLabelCallback}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'close_speed' },
                                detail: { value: ev.detail.value.close_speed }
                            });
                        }}
                    ></ha-form>
                    <ha-form
                        .hass=${editor.hass}
                        .data=${editor._config}
                        .schema=${[
                                    {
                                        name: 'show_speed_button',
                                        label: t('editor.cover.speed_button_title'),
                                        title: t('editor.cover.speed_button_title'),
                                        selector: { boolean: {} },
                                    },
                                ]}   
                        .computeLabel=${editor._computeLabelCallback}
                        @value-changed=${(ev) => {
                            editor._valueChanged({
                                target: { configValue: 'show_speed_button' },
                                detail: { value: ev.detail.value.show_speed_button }
                            });
                        }}
                    ></ha-form>
                    ${editor.makeDropdown(editor._optionalLabel(t('editor.cover.open_icon')), "icon_open")}
                    ${editor.makeDropdown(editor._optionalLabel(t('editor.cover.closed_icon')), "icon_close")}
                    ${editor.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:window-shutter-cog"></ha-icon>
                  ${t('editor.cover.custom_services')}
                </h4>
                <div class="content"> 
                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ open_service: editor._config?.open_service || 'cover.open_cover' }}
                        .schema=${[{ name: 'open_service', selector: { text: {} } }]}
                        .computeLabel=${() => editor._optionalLabel(t('editor.cover.open_service'))}
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
                        .computeLabel=${() => editor._optionalLabel(t('editor.cover.stop_service'))}
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
                        .computeLabel=${() => editor._optionalLabel(t('editor.cover.close_service'))}
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
                  ${t('editor.cover.tilt_title')}
                </h4>
                <div class="content">
                    ${tiltsByPosition ? html`
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t('editor.cover.tilt_position_only_title')}
                        </h4>
                        <div class="content">
                            <p>${t('editor.cover.tilt_position_only_body')}</p>
                        </div>
                    </div>
                    ` : ''}
                    ${editor.makeDropdown(t('editor.cover.tilt_position'), "tilt_buttons", [
                        { value: 'top', label: t('editor.common.top') + t('editor.common.default_suffix') },
                        { value: 'bottom', label: t('editor.common.bottom') },
                        { value: 'left', label: t('editor.common.left') },
                        { value: 'right', label: t('editor.common.right') },
                        { value: 'hidden', label: t('editor.common.hidden') },
                    ], !hasTiltButtons)}
                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ open_tilt_service: editor._config?.open_tilt_service || 'cover.open_cover_tilt' }}
                        .schema=${[{ name: 'open_tilt_service', selector: { text: {} } }]}
                        .computeLabel=${() => editor._optionalLabel(t('editor.cover.open_tilt_service'))}
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
                        .computeLabel=${() => editor._optionalLabel(t('editor.cover.close_tilt_service'))}
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
                          ${t('editor.cover.styling_title')}
                        </h4>
                        <div class="content"> 
                            ${editor.makeDropdown(editor._optionalLabel(t('editor.cover.arrow_down_icon')), "icon_down")}
                            ${editor.makeDropdown(editor._optionalLabel(t('editor.cover.arrow_up_icon')), "icon_up")}
                            ${editor.makeDropdown(editor._optionalLabel(t('editor.cover.arrow_down_slow_icon')), "icon_down_slow")}
                            ${editor.makeDropdown(editor._optionalLabel(t('editor.cover.arrow_up_slow_icon')), "icon_up_slow")}
                            ${editor.makeDropdown(editor._optionalLabel(t('editor.cover.arrow_down_fast_icon')), "icon_down_fast")}
                            ${editor.makeDropdown(editor._optionalLabel(t('editor.cover.arrow_up_fast_icon')), "icon_up_fast")}
                        </div>
                    </ha-expansion-panel>
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t('editor.cover.info_title')}
                </h4>
                <div class="content">
                    <p>${t('editor.cover.info_body')}</p>
                </div>
            </div>
            ${editor.makeVersion()}
        </div>
    `;
}
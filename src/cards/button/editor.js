import { html } from 'lit';
import { isEntityType } from "../../tools/utils.js";
import setupTranslation from '../../tools/localize.js';
import { tTemplate } from '../../editor/utils.js';
import { makeButtonSliderPanel } from '../../components/slider/editor.js';
function getButtonList(t){
    return [{
        'label': t('editor.button.type_switch'),
        'value': 'switch'
    },
    {
        'label': t('editor.button.type_slider'),
        'value': 'slider'
    },
    {
        'label': t('editor.button.type_state'),
        'value': 'state'
    },
    {
        'label': t('editor.button.type_name_long'),
        'value': 'name'
    }
];
}

export function renderButtonEditor(editor){
    const t = setupTranslation(editor.hass);
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

    const isClassicStyle = editor._config.popup_style === 'classic';

    let button_type;
    if (isClassicStyle) {
        button_type = 'switch';
    } else {
        if (!editor._config.button_type) {
            editor._config.button_type = isPopUp ? 'name' : 'switch';
        }
        button_type = editor._config.button_type;
    }
    const buttonTypeDropdown = !isClassicStyle
        ? editor.makeDropdown(t('editor.common.button_type'), "button_type", getButtonList(t))
        : '';

    return html`
        <div class="card-config">
            ${!isPopUp ? editor.makeDropdown(t('editor.common.card_type'), "card_type", editor.cardTypeList) : ''}
            ${!isPopUp ? buttonTypeDropdown : ''}
            ${!isPopUp ? html`
            <ha-form
                .hass=${editor.hass}
                .data=${editor._config}
                .schema=${[
                            { name: "entity",
                            label: button_type !== 'slider' ? t('editor.button.entity_toggle') : t('editor.button.entity_slider'),
                            selector: { entity: entityList },
                            },
                        ]}
                .computeLabel=${editor._computeLabelCallback}
                .disabled="${editor._config.button_type === 'name'}"
                @value-changed=${editor._valueChanged}
            ></ha-form>` : ''}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:cog"></ha-icon>
                ${isPopUp ? t('editor.button.header_card_settings') : t('editor.common.card_settings')}
                </h4>
                <div class="content">
                    ${isPopUp ? buttonTypeDropdown : ''}
                    ${isPopUp ? html`
                    <ha-form
                        .hass=${editor.hass}
                        .data=${editor._config}
                        .schema=${[
                                    { name: "entity",
                                    label: isClassicStyle ? editor._optionalLabel(t('editor.common.entity')) : (button_type !== 'slider' ? t('editor.button.entity_toggle') : t('editor.button.entity_slider')),
                                    selector: { entity: entityList },
                                    },
                                ]}
                        .computeLabel=${editor._computeLabelCallback}
                        .disabled="${editor._config.button_type === 'name'}"
                        @value-changed=${editor._valueChanged}
                    ></ha-form>` : ''}
                    <ha-form
                        .hass=${editor.hass}
                        .data=${{ name: editor._config?.name || '' }}
                        .schema=${[{
                            name: 'name',
                            selector: { text: {} },
                        }]}
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
            ${makeButtonSliderPanel(editor)}
            ${!isClassicStyle ? html`
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
            <ha-expansion-panel outlined style="display: ${editor._config.button_type === 'slider' && editor._config.tap_to_slide ? 'none' : ''}">
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                ${t('editor.actions.on_card')}
                </h4>
                <div class="content">
                    <!--
                      Default button action mapping to match create.js defaults:
                      - name: tap="none", double="none", hold="none"
                      - state: tap="more-info", double="none", hold="more-info"
                      - slider: tap="more-info"(sensor)/"toggle"(others), double="none", hold="none"
                      - switch: tap="toggle", double="none", hold="more-info"
                    -->
                    ${editor.makeActionPanel('tap', button_action,
                        editor._config.button_type === 'name' ? 'none' :
                        editor._config.button_type === 'state' ? 'more-info' :
                        editor._config.button_type === 'slider' ?
                            (isEntityType(editor, "sensor", editor._config.entity) ? 'more-info' : 'toggle') :
                            'toggle',
                        'button_action')}
                    ${editor.makeActionPanel('double_tap', button_action, 'none', 'button_action')}
                    ${editor._config.button_type === 'slider' && !editor._config.read_only_slider ? html`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                ${t('editor.actions.hold_disabled_title')}
                            </h4>
                            <div class="content">
                                <p>${t('editor.actions.hold_disabled_body')}</p>
                            </div>
                        </div>
                    ` : html`
                        ${editor.makeActionPanel('hold', button_action,
                            editor._config.button_type === 'name' ? 'none' :
                            'more-info',
                            'button_action')}
                    `}
                </div>
            </ha-expansion-panel>
            ` : ''}
            ${editor.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:palette"></ha-icon>
                ${t('editor.common.styling_layout_options')}
                </h4>
                <div class="content">
                    ${editor.makeLayoutPanel()}
                    ${!isPopUp ? editor.makeStyleEditor() : ''}
                </div>
            </ha-expansion-panel>
            ${!isPopUp ? editor.makeModulesEditor() : ''}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t('editor.button.info_title')} ${isPopUp ? t('editor.button.info_title_popup_suffix') : ''}
                </h4>
                <div class="content">
                    <p>${tTemplate(t('editor.button.info_intro'), {
                        switch: html`<b>${t('editor.button.intro_switch')}</b>`,
                        slider: html`<b>${t('editor.button.intro_slider')}</b>`,
                        state: html`<b>${t('editor.button.intro_state')}</b>`,
                        name: html`<b>${t('editor.button.intro_name')}</b>`
                    })}</p>

                    ${editor._config.button_type === 'switch' || !editor._config.button_type ? html`
                        <p><strong>${t('editor.button.switch_title')}</strong> ${tTemplate(t('editor.button.switch_body'), {
                            section: html`<b>${t('editor.actions.on_card')}</b>`
                        })}</p>
                    ` : ''}

                    ${editor._config.button_type === 'slider' ? html`
                        <p><strong>${t('editor.button.slider_title')}</strong> ${t('editor.button.slider_body')}</p>
                        <p>${t('editor.button.slider_supported')}</p>
                        <ul class="icon-list">
                            <li><ha-icon icon="mdi:lightbulb-outline"></ha-icon>${t('editor.button.slider_light')}</li>
                            <li><ha-icon icon="mdi:speaker"></ha-icon>${t('editor.button.slider_media')}</li>
                            <li><ha-icon icon="mdi:window-shutter"></ha-icon>${t('editor.button.slider_cover')}</li>
                            <li><ha-icon icon="mdi:fan"></ha-icon>${t('editor.button.slider_fan')}</li>
                            <li><ha-icon icon="mdi:thermometer"></ha-icon>${t('editor.button.slider_climate')}</li>
                            <li><ha-icon icon="mdi:numeric"></ha-icon>${t('editor.button.slider_number')}</li>
                            <li><ha-icon icon="mdi:battery-50"></ha-icon>${t('editor.button.slider_battery')}</li>
                        </ul>
                        <p>${tTemplate(t('editor.button.slider_any'), {
                            numeric: html`<b>${t('editor.button.numeric_state')}</b>`,
                            settings: html`<b>${t('editor.button.slider_settings')}</b>`,
                            min: html`<b>min</b>`,
                            max: html`<b>max</b>`
                        })}</p>
                    ` : ''}

                    ${editor._config.button_type === 'state' ? html`
                        <p><strong>${t('editor.button.state_title')}</strong> ${t('editor.button.state_body')}</p>
                    ` : ''}

                    ${editor._config.button_type === 'name' ? html`
                        <p><strong>${t('editor.button.name_title')}</strong> ${t('editor.button.name_body')}</p>
                    ` : ''}
                </div>
            </div>
            ${!isPopUp ? editor.makeVersion() : ''}
        </div>
    `;
}

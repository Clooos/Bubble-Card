import { html } from "lit";
import setupTranslation from '../../tools/localize.js';


export function renderSelectEditor(editor){
    const t = setupTranslation(editor.hass);
    const entity = editor._config.entity;
    const isSelect = entity?.startsWith("input_select") || entity?.startsWith("select") || editor._config.select_attribute;
    const entityAttribute = editor.hass.states[entity]?.attributes;
    const hasSelectAttributeList = editor._selectable_attributes.some(attr => entityAttribute?.[attr]);
    const selectableAttributeList = Object.keys(editor.hass.states[entity]?.attributes || {}).map((attributeName) => {
        let state = editor.hass.states[entity];
        let formattedName = editor.hass.formatEntityAttributeName(state, attributeName);
        return { label: formattedName, value: attributeName };
      }).filter(attribute => editor._selectable_attributes.includes(attribute.value));

    let button_action = editor._config.button_action || '';

    return html`
        <div class="card-config">
            ${editor.makeDropdown(t('editor.common.card_type'), "card_type", editor.cardTypeList)}
            <ha-form
                .hass=${editor.inputSelectList}
                .data=${editor._config}
                .schema=${[
                            { name: "entity",
                            label: t('editor.common.entity'),
                            selector: { entity: {}},
                            },
                        ]}   
                .computeLabel=${editor._computeLabelCallback}
                @value-changed=${editor._valueChanged}
            ></ha-form>
            ${hasSelectAttributeList ? html`
                <ha-form
                    .hass=${editor.hass}
                    .data=${{ select_attribute: editor._config.select_attribute }}
                    .schema=${[{
                        name: 'select_attribute',
                        selector: {
                            select: {
                                options: selectableAttributeList,
                                mode: 'dropdown'
                            }
                        }
                    }]}
                    .computeLabel=${() => t('editor.select.select_menu')}
                    @value-changed=${(ev) => {
                        editor._valueChanged({
                            target: { configValue: 'select_attribute' },
                            detail: { value: ev.detail.value.select_attribute }
                        });
                    }}
                ></ha-form>
            ` : ''}
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
                    ${editor.makeDropdown(editor._optionalLabel(t('editor.common.icon')), "icon")}
                    ${editor.makeShowState()}
                </div>
            </ha-expansion-panel>
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
                  ${t('editor.actions.on_button')}
                </h4>
                <div class="content">
                    <div style="${isSelect ? 'opacity: 0.5; pointer-events: none;' : ''}">
                        ${editor.makeActionPanel('tap', button_action, 'none', 'button_action')}
                    </div>
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
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t('editor.select.info_title')}
                </h4>
                <div class="content">
                    <p>${t('editor.select.info_body')}</p>
                    <ul class="icon-list">
                        <li><ha-icon icon="mdi:format-list-bulleted"></ha-icon>${t('editor.select.supported_input_select')}</li>
                        <li><ha-icon icon="mdi:form-dropdown"></ha-icon>${t('editor.select.supported_select')}</li>
                        <li><ha-icon icon="mdi:playlist-music"></ha-icon>${t('editor.select.supported_media')}&nbsp;<b>${t('editor.select.attr_source_list')}</b></li>
                        <li><ha-icon icon="mdi:speaker"></ha-icon>${t('editor.select.supported_media')}&nbsp;<b>${t('editor.select.attr_sound_mode_list')}</b></li>
                        <li><ha-icon icon="mdi:thermostat"></ha-icon>${t('editor.select.supported_climate')}&nbsp;<b>${t('editor.select.attr_hvac_modes')}</b></li>
                        <li><ha-icon icon="mdi:fan"></ha-icon>${t('editor.select.supported_climate_fan')}&nbsp;<b>${t('editor.select.attr_fan_modes')}</b></li>
                        <li><ha-icon icon="mdi:air-conditioner"></ha-icon>${t('editor.select.supported_climate')}&nbsp;<b>${t('editor.select.attr_swing_modes')}</b></li>
                        <li><ha-icon icon="mdi:thermostat-auto"></ha-icon>${t('editor.select.supported_climate')}&nbsp;<b>${t('editor.select.attr_preset_modes')}</b></li>
                        <li><ha-icon icon="mdi:lightbulb-group"></ha-icon>${t('editor.select.supported_light')}&nbsp;<b>${t('editor.select.attr_effect_list')}</b></li>
                    </ul>
                </div>
            </div>
            ${editor.makeVersion()}
        </div>
    `;    
}
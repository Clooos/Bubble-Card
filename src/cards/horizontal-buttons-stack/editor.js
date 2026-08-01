import { html } from "lit";
import { fireEvent } from '../../tools/utils.js';
import setupTranslation from '../../tools/localize.js';

export function renderHorButtonStackEditor(editor){
    const t = setupTranslation(editor.hass);
    if (!editor.buttonAdded) {
        editor.buttonAdded = true;
        editor.buttonIndex = 0;

        while (editor._config[(editor.buttonIndex + 1) + '_link']) {
            editor.buttonIndex++;
        }
    }

    function addButton() {
        editor.buttonIndex++;
        editor.requestUpdate();
    }

    return html`
        <div class="card-config">
            ${editor.makeDropdown(t('editor.common.card_type'), "card_type", editor.cardTypeList)}
            <div id="buttons-container">
                ${makeButton(editor)}
            </div>
            <button class="icon-button" @click="${addButton}">
                <ha-icon icon="mdi:plus"></ha-icon>
                ${t('editor.hbs.new_button')}
            </button>
            <hr>
            <ha-formfield>
                <ha-switch
                    aria-label="${editor._optionalLabel(t('editor.hbs.auto_order'))}"
                    .checked=${editor._config?.auto_order || false}
                    .configValue="${"auto_order"}"
                    @change=${editor._valueChanged}
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">${editor._optionalLabel(t('editor.hbs.auto_order'))}</label>
                </div>
            </ha-formfield>
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
                          ${t('editor.hbs.styling_title')}
                        </h4>
                        <div class="content">
                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ margin: editor._config?.margin || '7px' }}
                                .schema=${[{ name: 'margin', selector: { text: {} } }]}
                                .computeLabel=${() => editor._optionalLabel(t('editor.hbs.margin'))}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'margin' },
                                        detail: { value: ev.detail.value.margin }
                                    });
                                }}
                            ></ha-form>
                            <ha-form
                                .hass=${editor.hass}
                                .data=${{ width_desktop: editor._config?.width_desktop || '540px' }}
                                .schema=${[{ name: 'width_desktop', selector: { text: {} } }]}
                                .computeLabel=${() => editor._optionalLabel(t('editor.hbs.width_desktop'))}
                                @value-changed=${(ev) => {
                                    editor._valueChanged({
                                        target: { configValue: 'width_desktop' },
                                        detail: { value: ev.detail.value.width_desktop }
                                    });
                                }}
                            ></ha-form>
                            <ha-formfield>
                                <ha-switch
                                    aria-label="${editor._optionalLabel(t('editor.hbs.rise_animation'))}"
                                    .checked=${editor._config?.rise_animation !== undefined ? editor._config?.rise_animation : true}
                                    .configValue="${"rise_animation"}"
                                    @change=${editor._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${editor._optionalLabel(t('editor.hbs.rise_animation'))}</label>
                                </div>
                            </ha-formfield>
                            <ha-formfield>
                                <ha-switch
                                    aria-label="${editor._optionalLabel(t('editor.hbs.highlight_current'))}"
                                    .checked=${editor._config?.highlight_current_view || false}
                                    .configValue="${"highlight_current_view"}"
                                    @change=${editor._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${editor._optionalLabel(t('editor.hbs.highlight_current'))}</label>
                                </div>
                            </ha-formfield>
                            <ha-formfield>
                                <ha-switch
                                    aria-label="${editor._optionalLabel(t('editor.hbs.hide_gradient'))}"
                                    .checked=${editor._config.hide_gradient || false}
                                    .configValue="${"hide_gradient"}"
                                    @change=${editor._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${editor._optionalLabel(t('editor.hbs.hide_gradient'))}</label>
                                </div>
                            </ha-formfield>
                        </div>
                    </ha-expansion-panel>
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t('editor.hbs.info_title')}
                </h4>
                <div class="content">
                    <p>${t('editor.hbs.info_body')}</p>
                </div>
            </div>
            ${editor.makeVersion()}
        </div>
    `;
}

function makeButton(editor) {
    const t = setupTranslation(editor.hass);
    let buttons = [];
    for (let i = 1; i <= editor.buttonIndex; i++) {
        buttons.push(html`
            <div class="${i}_button">
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:border-radius"></ha-icon>
                        ${t('editor.hbs.button_label')} ${i} ${editor._config[i + '_name'] ? ("- " + editor._config[i + '_name']) : ""}
                        <div class="button-container">
                            <button class="icon-button header" @click="${() => removeButton(editor,i)}">
                              <ha-icon icon="mdi:delete"></ha-icon>
                            </button>
                        </div>
                    </h4>
                    <div class="content">
                        <ha-form
                            .hass=${editor.hass}
                            .data=${{ [i + '_link']: editor._config[i + '_link'] || '' }}
                            .schema=${[{ name: i + '_link', selector: { text: {} } }]}
                            .computeLabel=${() => t('editor.hbs.link_hash')}
                            @value-changed=${(ev) => {
                                editor._valueChanged({
                                    target: { configValue: i + '_link' },
                                    detail: { value: ev.detail.value[i + '_link'] }
                                });
                            }}
                        ></ha-form>
                        <ha-form
                            .hass=${editor.hass}
                            .data=${{ [i + '_name']: editor._config[i + '_name'] || '' }}
                            .schema=${[{ name: i + '_name', selector: { text: {} } }]}
                            .computeLabel=${() => editor._optionalLabel(t('editor.common.name'))}
                            @value-changed=${(ev) => {
                                editor._valueChanged({
                                    target: { configValue: i + '_name' },
                                    detail: { value: ev.detail.value[i + '_name'] }
                                });
                            }}
                        ></ha-form>
                        <ha-icon-picker
                            label="${editor._optionalLabel(t('editor.common.icon'))}"
                            .value="${editor._config[i + '_icon'] || ''}"
                            .configValue="${i}_icon"
                            item-label-path="label"
                            item-value-path="value"
                            @value-changed="${editor._valueChanged}"
                        ></ha-icon-picker>
                        <ha-form
                            .hass=${editor.hass}
                            .data=${editor._config}
                            .schema=${[
                                        { name: i+"_entity",
                                        label: editor._optionalLabel(t('editor.hbs.light_group')),
                                        selector: { entity: {} },
                                        },
                                    ]}
                            .computeLabel=${editor._computeLabelCallback}
                            @value-changed=${editor._valueChanged}
                        ></ha-form>
                        <ha-form
                            .hass=${editor.hass}
                            .data=${editor._config}
                            .schema=${[
                                        { name: i+"_pir_sensor",
                                        label: editor._optionalLabel(t('editor.hbs.presence_sensor')),
                                        selector: { entity: {} },
                                        },
                                    ]}
                            .computeLabel=${editor._computeLabelCallback}
                            @value-changed=${editor._valueChanged}
                        ></ha-form>
                        <ha-alert alert-type="info">${t('editor.hbs.info_auto_order')}</ha-alert>
                    </div>
                </ha-expansion-panel>
            </div>
        `);
    }
    return buttons;
}

function removeButton(editor, index) {
    // Removing button fields
    delete editor._config[index + '_name'];
    delete editor._config[index + '_icon'];
    delete editor._config[index + '_link'];
    delete editor._config[index + '_entity'];
    delete editor._config[index + '_pir_sensor'];

    // Updating indexes of following buttons
    for (let i = index; i < editor.buttonIndex; i++) {
        editor._config[i + '_name'] = editor._config[(i + 1) + '_name'];
        editor._config[i + '_icon'] = editor._config[(i + 1) + '_icon'];
        editor._config[i + '_link'] = editor._config[(i + 1) + '_link'];
        editor._config[i + '_entity'] = editor._config[(i + 1) + '_entity'];
        editor._config[i + '_pir_sensor'] = editor._config[(i + 1) + '_pir_sensor'];
    }

    // Removing fields of the last button
    delete editor._config[editor.buttonIndex + '_name'];
    delete editor._config[editor.buttonIndex + '_icon'];
    delete editor._config[editor.buttonIndex + '_link'];
    delete editor._config[editor.buttonIndex + '_entity'];
    delete editor._config[editor.buttonIndex + '_pir_sensor'];

    // Updating index of the last button
    editor.buttonIndex--;

    fireEvent(editor, "config-changed", {
        config: editor._config
    });
}
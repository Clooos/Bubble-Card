import { html } from 'lit';
import setupTranslation from '../../tools/localize.js';


export function renderSeparatorEditor(editor){
    const t = setupTranslation(editor.hass);

    return html`
    <div class="card-config">
        ${editor.makeDropdown(t('editor.common.card_type'), "card_type", editor.cardTypeList)}
        <ha-form
            .hass=${editor.hass}
            .data=${{ name: editor._config?.name || '' }}
            .schema=${[{
                name: 'name',
                selector: { text: {} },
            }]}
            .computeLabel=${() => t('editor.common.name')}
            @value-changed=${(ev) => {
                editor._valueChanged({
                    target: { configValue: 'name' },
                    detail: { value: ev.detail.value.name }
                });
            }}
        ></ha-form>
        ${editor.makeDropdown(t('editor.common.icon'), "icon")}
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
                ${t('editor.separator.info_title')}
            </h4>
            <div class="content">
                <p>${t('editor.separator.info_body')}</p>
            </div>
        </div>
        ${editor.makeVersion()}
  </div>
`;
}
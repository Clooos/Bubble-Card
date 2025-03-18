import { html } from 'lit';


export function renderSeparatorEditor(editor){

    return html`
    <div class="card-config">
        ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
        <ha-textfield
            label="Name"
            .value="${editor._config?.name || ''}"
            .configValue="${"name"}"
            @input="${editor._valueChanged}"
        ></ha-textfield>
        ${editor.makeDropdown("Icon", "icon")}
        ${editor.makeSubButtonPanel()}
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
        ${editor.makeModulesEditor()}
        <ha-alert alert-type="info">This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...</ha-alert>
        ${editor.makeVersion()}
  </div>
`;
}
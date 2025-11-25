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
              Styling and layout options
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
                Separator card
            </h4>
            <div class="content">
                <p>This card is a simple separator for dividing your pop-up/dashboard into categories or sections. e.g. Lights, Devices, Covers, Settings, Automations...</p>
            </div>
        </div>
        ${editor.makeVersion()}
  </div>
`;
}
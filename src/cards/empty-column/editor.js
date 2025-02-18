import { html } from 'lit';


export function renderEmptyColumnEditor(editor){

    return html`
        <div class="card-config">
            ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${editor.makeLayoutOptions()}
                </div>
            </ha-expansion-panel>
            <ha-alert alert-type="info">Just an empty card to fill any empty column.</ha-alert>
            ${editor.makeVersion()}
        </div>
    `;
}
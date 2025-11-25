import { html } from 'lit';

export function renderEmptyColumnEditor(editor){

    return html`
        <div class="card-config">
            ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${editor.makeLayoutPanel()}
                </div>
            </ha-expansion-panel>
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Empty column card
                </h4>
                <div class="content">
                    <p>Just an empty card to fill any empty column.</p>
                </div>
            </div>
            ${editor.makeVersion()}
        </div>
    `;
}
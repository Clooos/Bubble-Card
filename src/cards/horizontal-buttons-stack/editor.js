import { html } from "lit";
import { fireEvent } from '../../tools/utils.js';

export function renderHorButtonStackEditor(editor){
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
            ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
            <div id="buttons-container">
                ${makeButton(editor)}
            </div>
            <button class="icon-button" @click="${addButton}">
                <ha-icon icon="mdi:plus"></ha-icon>
                New button
            </button>
            <hr>
            <ha-formfield .label="Auto order">
                <ha-switch
                    aria-label="Toggle auto order"
                    .checked=${editor._config?.auto_order || false}
                    .configValue="${"auto_order"}"
                    @change=${editor._valueChanged}
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Optional - Auto order (Presence/occupancy sensors needed)</label> 
                </div>
            </ha-formfield>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">  
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Horizontal buttons stack styling
                        </h4>
                        <div class="content"> 
                            <ha-textfield
                                label="Optional - Margin (fix centering on some themes) (e.g. 13px)"
                                .value="${editor._config?.margin || '7px'}"
                                .configValue="${"margin"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Width on desktop (100% by default on mobile)"
                                .value="${editor._config?.width_desktop || '540px'}"
                                .configValue="${"width_desktop"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-formfield .label="Optional - Rise animation (Displays an animation once the page has loaded)">
                                <ha-switch
                                    aria-label="Optional - Rise animation (Displays an animation once the page has loaded)"
                                    .checked=${editor._config?.rise_animation !== undefined ? editor._config?.rise_animation : true}
                                    .configValue="${"rise_animation"}"
                                    @change=${editor._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Rise animation (Displays an animation once the page has loaded)</label> 
                                </div>
                            </ha-formfield>
                            <ha-formfield .label="Optional - Highlight current hash / view">
                                <ha-switch
                                    aria-label="Optional - Highlight current hash / view"
                                    .checked=${editor._config?.highlight_current_view || false}
                                    .configValue="${"highlight_current_view"}"
                                    @change=${editor._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Highlight current hash / view</label> 
                                </div>
                            </ha-formfield>
                            <ha-formfield .label="Optional - Hide gradient">
                                <ha-switch
                                    aria-label="Optional - Hide gradient"
                                    .checked=${editor._config.hide_gradient || false}
                                    .configValue="${"hide_gradient"}"
                                    @change=${editor._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Hide gradient</label> 
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
                    Horizontal buttons stack card
                </h4>
                <div class="content">
                    <p>This card is a good companion to the pop-up card, allowing you to open pop-ups or any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.</p>
                </div>
            </div>
            ${editor.makeVersion()}
        </div>
    `;
}

function makeButton(editor) {
    let buttons = [];
    for (let i = 1; i <= editor.buttonIndex; i++) {
        buttons.push(html`
            <div class="${i}_button">
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:border-radius"></ha-icon>
                        Button ${i} ${editor._config[i + '_name'] ? ("- " + editor._config[i + '_name']) : ""}
                        <div class="button-container">
                            <button class="icon-button header" @click="${() => removeButton(editor,i)}">
                              <ha-icon icon="mdi:delete"></ha-icon>
                            </button>
                        </div>
                    </h4>
                    <div class="content">
                        <ha-textfield
                            label="Link / Hash to pop-up (e.g. #kitchen)"
                            .value="${editor._config[i + '_link'] || ''}"
                            .configValue="${i}_link"
                            @input="${editor._valueChanged}"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Name"
                            .value="${editor._config[i + '_name'] || ''}"
                            .configValue="${i}_name"
                            @input="${editor._valueChanged}"
                        ></ha-textfield>
                        <ha-icon-picker
                            label="Optional - Icon"
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
                                        label: "Optional - Light / Light group (For background color)", 
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
                                        label: "Optional - Presence / Occupancy sensor (For button auto order)", 
                                        selector: { entity: {} },
                                        },
                                    ]}   
                            .computeLabel=${editor._computeLabelCallback}
                            @value-changed=${editor._valueChanged}
                        ></ha-form>
                        <ha-alert alert-type="info">In fact you can also get the auto order with any entity type, for example you can add light groups to these fields and the order will change based on the last changed states.</ha-alert>
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
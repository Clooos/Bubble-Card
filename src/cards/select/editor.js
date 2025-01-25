import { html } from "lit";


export function renderSelectEditor(editor){
    const entity = editor._config.entity;
    const isSelect = entity?.startsWith("input_select") || entity?.startsWith("select") || editor._config.select_attribute;
    const entityAttribute = editor.hass.states[entity]?.attributes;
    const hasSelectAttributeList = editor._selectable_attributes.some(attr => entityAttribute?.[attr]);
    const selectableAttributeList = Object.keys(editor.hass.states[entity]?.attributes || {}).map((attributeName) => {
        let state = editor.hass.states[entity];
        let formattedName = editor.hass.formatEntityAttributeName(state, attributeName);
        return { label: formattedName, value: attributeName };
      }).filter(attribute => editor._selectable_attributes.includes(attribute.value));

    return html`
        <div class="card-config">
            ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
            <ha-form
                .hass=${editor.inputSelectList2}
                .data=${editor._config}
                .schema=${[
                            { name: "entity",
                            label: "Entity", 
                            selector: { entity: {}},
                            },
                        ]}   
                .computeLabel=${editor._computeLabelCallback}
                @value-changed=${editor._valueChanged}
            ></ha-form>
            ${hasSelectAttributeList ? html`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="Select menu (from attributes)"
                        .value="${editor._config.select_attribute}"
                        .items="${selectableAttributeList}"
                        .configValue="${"select_attribute"}"
                        @value-changed="${editor._valueChanged}"
                    ></ha-combo-box>
                </div>
            ` : ''}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Button settings
                </h4>
                <div class="content">                   
                    <ha-textfield
                        label="Optional - Name"
                        .value="${editor._config?.name || ''}"
                        .configValue="${"name"}"
                        @input="${editor._valueChanged}"
                    ></ha-textfield>
                    ${editor.makeDropdown("Optional - Icon", "icon")}
                    ${editor.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${editor.makeActionPanel("Tap action")}
                    ${editor.makeActionPanel("Double tap action")}
                    ${editor.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
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
            ${editor.makeSubButtonPanel()}
            <ha-alert alert-type="info">
              This card allows you to have a select menu for your 
              <code>input_select</code>, <code>select</code> entities, and 
              any other entities that have attribute lists like 
              <code>source_list</code>, <code>sound_mode_list</code>, 
              <code>hvac_modes</code>, <code>fan_modes</code>, 
              <code>swing_modes</code>, <code>preset_modes</code>, or 
              <code>effect_list</code>.
            </ha-alert>
            ${editor.makeVersion()}
        </div>
    `;    
}
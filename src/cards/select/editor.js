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

    let button_action = editor._config.button_action || '';

    return html`
        <div class="card-config">
            ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
            <ha-form
                .hass=${editor.inputSelectList}
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
                  Card settings
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
                  <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                  Tap action on button
                </h4>
                <div class="content">
                    <div style="${isSelect ? 'opacity: 0.5; pointer-events: none;' : ''}">
                        ${editor.makeActionPanel("Tap action", button_action, 'none', 'button_action')}
                    </div>
                    ${editor.makeActionPanel("Double tap action", button_action, 'none', 'button_action')}
                    ${editor.makeActionPanel("Hold action", button_action, 'none', 'button_action')}
                </div>
            </ha-expansion-panel>
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
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Select card
                </h4>
                <div class="content">
                    <p>This card allows you to have a select menu for your entities with selectable options:</p>
                    <ul class="icon-list">
                        <li><ha-icon icon="mdi:format-list-bulleted"></ha-icon>Input Select entities</li>
                        <li><ha-icon icon="mdi:form-dropdown"></ha-icon>Select entities</li>
                        <li><ha-icon icon="mdi:playlist-music"></ha-icon>Media players with&nbsp;<b>source list</b></li>
                        <li><ha-icon icon="mdi:speaker"></ha-icon>Media players with&nbsp;<b>sound mode list</b></li>
                        <li><ha-icon icon="mdi:thermostat"></ha-icon>Climate entities with&nbsp;<b>hvac modes</b></li>
                        <li><ha-icon icon="mdi:fan"></ha-icon>Climate/Fan entities with&nbsp;<b>fan modes</b></li>
                        <li><ha-icon icon="mdi:air-conditioner"></ha-icon>Climate entities with&nbsp;<b>swing modes</b></li>
                        <li><ha-icon icon="mdi:thermostat-auto"></ha-icon>Climate entities with&nbsp;<b>preset modes</b></li>
                        <li><ha-icon icon="mdi:lightbulb-group"></ha-icon>Light entities with&nbsp;<b>effect list</b></li>
                    </ul>
                </div>
            </div>
            ${editor.makeVersion()}
        </div>
    `;    
}
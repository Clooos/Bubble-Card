import { html } from 'lit';

export function makeSubButtonPanel(editor) {
    const subButtonElements = editor._config?.sub_button?.map((subButton, index) => {
        if (!subButton) {
            return;
        }

        const subButtonIndex = 'sub_button.' + index + '.';

        const removeSubButton = (event) => {
            event.stopPropagation();
            let subButtons = [...editor._config.sub_button];
            subButtons.splice(index, 1);
            editor._config.sub_button = subButtons;

            editor._valueChanged({ target: { configValue: 'sub_button', value: subButtons } });
            editor.requestUpdate();
        };

        const moveSubButtonLeft = (event) => {
            event.stopPropagation();
            if (index > 0) {
                let subButtons = [...editor._config.sub_button];
                [subButtons[index], subButtons[index - 1]] = [subButtons[index - 1], subButtons[index]];
                editor._config.sub_button = subButtons;

                editor._valueChanged({ target: { configValue: 'sub_button', value: subButtons } });
            }
            editor.requestUpdate();
        };

        const moveSubButtonRight = (event) => {
            event.stopPropagation();
            if (index < editor._config.sub_button.length - 1) {
                let subButtons = [...editor._config.sub_button];
                [subButtons[index], subButtons[index + 1]] = [subButtons[index + 1], subButtons[index]];
                editor._config.sub_button = subButtons;

                editor._valueChanged({ target: { configValue: 'sub_button', value: subButtons } });
            }
            editor.requestUpdate();
        };

        const entity = subButton.entity ?? editor._config.entity;
        const isSelect = entity?.startsWith("input_select") || entity?.startsWith("select") || subButton.select_attribute;
        const entityAttribute = editor.hass.states[entity]?.attributes;
        const hasSelectAttributeList = editor._selectable_attributes.some(attr => entityAttribute?.[attr]);
        const selectableAttributeList = Object.keys(editor.hass.states[entity]?.attributes || {}).map((attributeName) => {
            let state = editor.hass.states[entity];
            let formattedName = editor.hass.formatEntityAttributeName(state, attributeName);
            return { label: formattedName, value: attributeName };
        }).filter(attribute => editor._selectable_attributes.includes(attribute.value));
        const conditions = subButton.visibility ?? [];

        return html`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:border-radius"></ha-icon>
                    ${editor._config.sub_button[index] ? "Button " + (index + 1) + (subButton.name ? " - " + subButton.name : "") : "New button"}
                    <div class="button-container">
                        <button class="icon-button header" @click="${removeSubButton}">
                            <ha-icon icon="mdi:delete"></ha-icon>
                        </button>
                        ${index > 0 ? html`<button class="icon-button header" @click="${moveSubButtonLeft}">
                            <ha-icon icon="mdi:arrow-left"></ha-icon>
                        </button>` : ''}
                        ${index < editor._config.sub_button.length - 1 ? html`<button class="icon-button header" @click="${moveSubButtonRight}">
                            <ha-icon icon="mdi:arrow-right"></ha-icon>
                        </button>` : ''}
                    </div>
                </h4>
                <div class="content">
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                            <ha-icon icon="mdi:cog"></ha-icon>
                            Button settings
                        </h4>
                        <div class="content"> 
                        <ha-form
                            .hass=${editor.hass}
                            .data=${subButton}
                            .schema=${[
                                        { name: "entity",
                                            label: "Optional - Entity (default to card entity)", 
                                            selector: { entity: {} },
                                        },
                                    ]}   
                            .computeLabel=${editor._computeLabelCallback}
                            @value-changed=${(ev) => editor._arrayValueChange(index, ev.detail.value, 'sub_button')}
                        ></ha-form>
                            ${hasSelectAttributeList ? html`
                                <div class="ha-combo-box">
                                    <ha-combo-box
                                        label="Optional - Select menu (from attributes)"
                                        .value="${subButton.select_attribute}"
                                        .items="${selectableAttributeList}"
                                        @value-changed="${(ev) => editor._arrayValueChange(index, { select_attribute: ev.detail.value }, 'sub_button')}"
                                    ></ha-combo-box>
                                </div>
                            ` : ''}
                            <div class="ha-textfield">
                                <ha-textfield
                                    label="Optional - Name"
                                    .value="${subButton.name ?? ''}"
                                    @input="${(ev) => editor._arrayValueChange(index, { name: ev.target.value }, 'sub_button')}"
                                ></ha-textfield>
                            </div>
                            <div class="ha-icon-picker">
                                <ha-icon-picker
                                    label="Optional - Icon"
                                    .value="${subButton.icon}"
                                    item-label-path="label"
                                    item-value-path="value"
                                    @value-changed="${(ev) => editor._arrayValueChange(index, { icon: ev.detail.value }, 'sub_button')}"
                                ></ha-icon-picker>
                            </div>
                            ${editor.makeShowState(subButton, subButtonIndex, 'sub_button', index)}
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined style="${isSelect ? 'opacity: 0.5; pointer-events: none;' : ''}">
                        <h4 slot="header">
                            <ha-icon icon="mdi:gesture-tap"></ha-icon>
                            Tap action on button
                        </h4>
                        <div class="content">
                            ${editor.makeActionPanel("Tap action", subButton, 'more-info', 'sub_button', index)}
                            ${editor.makeActionPanel("Double tap action", subButton, 'none', 'sub_button', index)}
                            ${editor.makeActionPanel("Hold action", subButton, 'none', 'sub_button', index)}
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                            <ha-icon icon="mdi:eye"></ha-icon>
                        Visibility
                        </h4>
                        <div class="content">
                            <ha-card-conditions-editor
                                .hass=${editor.hass}
                                .conditions=${conditions}
                                @value-changed=${(ev) => editor._conditionChanged(ev, index, 'sub_button')}
                            >
                            </ha-card-conditions-editor>
                            <ha-alert alert-type="info">
                                The sub-button will be shown when ALL conditions are fulfilled. If no conditions are set, the sub-button will always be shown.
                            </ha-alert>
                        </div>
                    </ha-expansion-panel>
                </div>
            </ha-expansion-panel>
        `;
    });

    const addSubButton = () => {
    if (!editor._config.sub_button) {
        editor._config.sub_button = [];
    }

    let newSubButton = {
        entity: editor._config.entity
    };
    editor._config.sub_button = [...editor._config.sub_button];
    editor._config.sub_button.push(newSubButton);
    editor.requestUpdate();
    };

    // Return full panel for all sub-buttons
    return html`
        <ha-expansion-panel outlined>
            <h4 slot="header">
            <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
            Sub-buttons editor
            </h4>
            <div class="content">
            ${subButtonElements}
            <button class="icon-button" @click="${addSubButton}">
                <ha-icon icon="mdi:plus"></ha-icon>
                New sub-button
            </button>
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Sub-buttons
                </h4>
                <div class="content">
                    <p>This editor allows you to add customized sub-buttons to your card. These buttons can also display a dropdown menu for your <code>input_select</code>, <code>select</code> entities, and any other entities that have attribute lists like:</p>
                    <p><code>source_list</code>, <code>sound_mode_list</code>, <code>hvac_modes</code>, <code>fan_modes</code>, <code>swing_modes</code>, <code>preset_modes</code>, or <code>effect_list</code>.</p>
                </div>
            </div>
            </div>
        </ha-expansion-panel>
    `;
}
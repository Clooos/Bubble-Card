import { html } from 'lit';

export function isReadOnlyEntity(editor) {
    const entity = editor._config.entity;
    if (!entity) return true;
    
    const entityType = entity.split('.')[0];
    const supportedEntities = ['light', 'media_player', 'cover', 'input_number', 'number', 'fan', 'climate'];

    if (entityType === 'sensor') return true;
    if (!supportedEntities.includes(entityType)) return true;
    
    return false;
}

export function makeButtonSliderPanel(editor) {
    // Initialize disableEntityFilter if it's not defined
    if (editor._disableEntityFilter === undefined) {
        editor._disableEntityFilter = false;
    }

    const handleFilterToggle = (e) => {
        editor._disableEntityFilter = e.target.checked;
        editor.requestUpdate();
    };

    return html`
        <ha-expansion-panel outlined style="display: ${editor._config.button_type !== 'slider' ? 'none' : ''}">
            <h4 slot="header">
            <ha-icon icon="mdi:tune-variant"></ha-icon>
            Slider settings
            </h4>
            <div class="content">
                <div class="checkbox-wrapper">
                    <ha-formfield label="Disable entity filter (for custom slider)">
                        <ha-switch
                            .checked=${editor._disableEntityFilter}
                            @change="${handleFilterToggle}"
                        ></ha-switch>
                    </ha-formfield>
                </div>
                <div class="bubble-info" style="display: ${editor._disableEntityFilter ? '' : 'none'}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Custom slider
                    </h4>
                    <div class="content">
                        <p>To create a custom slider (read only), select an <b>entity with a numeric state</b> above, then define the <b>min</b> and <b>max</b> values below.</p>  
                        <p>For example, this allows you to display your solar production within a specific range.</p>
                    </div>
                </div>
                <ha-form
                    .hass=${editor.hass}
                    .data=${editor._config}
                    .schema=${[
                        {
                            type: "grid",
                            flatten: true,
                            schema: [
                                {
                                    name: "min_value",
                                    label: "Min value",
                                    selector: { number: {
                                        step: "any"
                                    } },
                                },
                                {
                                    name: "max_value",
                                    label: "Max value",
                                    selector: { number: {
                                        step: "any"
                                    } },
                                },
                                {
                                    name: "step",
                                    label: "Step",
                                    selector: { number: {
                                        step: "any"
                                    } },
                                },
                            ],
                        },
                    ]}   
                    .computeLabel=${editor._computeLabelCallback}
                    .disabled="${editor._config.button_type === 'name'}"
                    @value-changed=${editor._valueChanged}
                ></ha-form>
                <hr>
                <ha-formfield>
                    <ha-switch
                        .checked=${editor._config.tap_to_slide}
                        .configValue="${"tap_to_slide"}"
                        @change="${editor._valueChanged}"
                        .disabled=${isReadOnlyEntity(editor)}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Tap to slide (previous behavior)</label> 
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${editor._config.read_only_slider ?? isReadOnlyEntity(editor)}
                        .configValue="${"read_only_slider"}"
                        .disabled=${isReadOnlyEntity(editor)}
                        @change="${editor._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Read only slider</label> 
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${editor._config.slider_live_update}
                        .configValue="${"slider_live_update"}"
                        .disabled=${isReadOnlyEntity(editor)}
                        @change="${editor._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Slider live update</label> 
                    </div>
                </ha-formfield>
                <div class="bubble-info" style="display: ${editor._config.slider_live_update ? '' : 'none'}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Slider live update
                    </h4>
                    <div class="content">
                        <p>By default, sliders are updated only on release. When this option is enabled, the slider will update the entity state while sliding. <b>This feature is not recommended for all entities, disable it if you encounter issues.</b></p>
                    </div>
                </div>
                ${editor._config.entity?.startsWith("light") ? html`
                    <ha-formfield>
                        <ha-switch
                            .checked=${editor._config.use_accent_color ?? false}
                            .configValue="${"use_accent_color"}"
                            @change="${editor._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Use accent color instead of light color</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            .checked=${editor._config.light_transition}
                            .configValue="${"light_transition"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Enable smooth brightness transitions</label> 
                        </div>
                    </ha-formfield>
                    ${editor._config.light_transition ? html`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                Light transition
                            </h4>
                            <div class="content">
                                <p><b>Important:</b> This feature only works for lights that support the 
                                <a target="_blank" rel="noopener noreferrer" href="https://www.home-assistant.io/integrations/light/#action-lightturn_on">light.turn_on</a> transition attribute.</p>
                                <p>Enabling this for lights that do not support transitions will unfortunatley have no effect. Defaults to 500ms unless overridden below.</p>
                            </div>
                        </div>
                        
                        <ha-textfield
                            label="Transition time (ms)"
                            type="number"
                            min="1"
                            max="2000"
                            .value="${editor._config.light_transition_time}"
                            .configValue="${"light_transition_time"}"
                            @input="${editor._valueChanged}"
                        ></ha-textfield>
                    ` : ''}
                ` : ''}
            </div>
        </ha-expansion-panel>
    `;
}
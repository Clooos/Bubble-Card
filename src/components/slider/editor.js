import { html } from 'lit';
import { isReadOnlyEntityId } from './helpers.js';

export function isReadOnlyEntity(editor) {
    const entity = editor._config.entity;
    return isReadOnlyEntityId(entity);
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
                        .checked=${editor._config.tap_to_slide && !editor._config.relative_slide}
                        .configValue="${"tap_to_slide"}"
                        @change="${editor._valueChanged}"
                        .disabled=${editor._config.relative_slide || isReadOnlyEntity(editor)}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Tap to slide (previous behavior)</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${!editor._config.tap_to_slide && editor._config.relative_slide}
                        .configValue="${"relative_slide"}"
                        @change="${editor._valueChanged}"
                        .disabled=${editor._config.tap_to_slide || isReadOnlyEntity(editor)}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Relative slide (incompatible with tap to slide)</label>
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
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                            <ha-icon icon="mdi:lightbulb-outline"></ha-icon>
                            Light specific options
                        </h4>
                        <div class="content">
                            <div class="ha-combo-box">
                                <ha-combo-box
                                    label="Light slider mode"
                                    .value="${editor._config.light_slider_type || 'brightness'}"
                                    .configValue="${"light_slider_type"}"
                                    .items="${[
                                        { label: 'Brightness (default)', value: 'brightness' },
                                        { label: 'Color (Hue)', value: 'hue' },
                                        { label: 'Saturation', value: 'saturation' },
                                        { label: 'White temperature', value: 'white_temp' }
                                    ]}"
                                    @value-changed="${editor._valueChanged}"
                                ></ha-combo-box>
                            </div>
                            ${editor._config.light_slider_type === 'hue' ? html`
                                <ha-formfield>
                                    <ha-switch
                                        .checked=${editor._config.hue_force_saturation ?? false}
                                        .configValue="${'hue_force_saturation'}"
                                        @change=${editor._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Force saturation when adjusting Hue</label>
                                    </div>
                                </ha-formfield>
                                ${(editor._config.hue_force_saturation ?? false) ? html`
                                    <ha-textfield
                                        label="Forced saturation value (0-100)"
                                        type="number"
                                        min="0"
                                        max="100"
                                        .value="${String(editor._config.hue_force_saturation_value ?? 100)}"
                                        .configValue="${'hue_force_saturation_value'}"
                                        @input=${editor._valueChanged}
                                    ></ha-textfield>
                                ` : ''}
                            ` : ''}
                            ${['hue','saturation','white_temp'].includes(editor._config.light_slider_type) ? html`` : html`
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
                            `}
                            ${!editor._config.tap_to_slide ? html`
                                <ha-formfield>
                                    <ha-switch
                                        .checked=${editor._config.allow_light_slider_to_0 ?? false}
                                        .configValue="${'allow_light_slider_to_0'}"
                                        @change=${editor._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Allow slider to turn off light (reach 0%)</label> 
                                    </div>
                                </ha-formfield>
                            ` : ''}
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
                                    max="100000"
                                    .value="${editor._config.light_transition_time}"
                                    .configValue="${"light_transition_time"}"
                                    @input="${editor._valueChanged}"
                                ></ha-textfield>
                            ` : ''}
                        </div>
                    </ha-expansion-panel>
                ` : ''}
            </div>
        </ha-expansion-panel>
    `;
}

// Generic slider settings builder for reuse in other editors (e.g., sub-button)
// Parameters:
// - hass: Home Assistant instance
// - data: configuration object (e.g., editor._config or a subButton object)
// - entity: current entity id to compute conditional UI
// - computeLabel: function used by ha-form to compute labels
// - onFormChange: handler for ha-form value-changed events
// - onToggleChange: (key, value) => void handler for switches
// - isReadOnly: boolean indicating if slider should be read-only for this entity
export function makeGenericSliderSettings({ hass, data, entity, computeLabel, onFormChange, onToggleChange, isReadOnly }) {
    return html`
        <ha-form
            .hass=${hass}
            .data=${data}
            .schema=${[
                {
                    type: "grid",
                    flatten: true,
                    schema: [
                        {
                            name: "min_value",
                            label: "Min value",
                            selector: { number: { step: "any" } },
                        },
                        {
                            name: "max_value",
                            label: "Max value",
                            selector: { number: { step: "any" } },
                        },
                        {
                            name: "step",
                            label: "Step",
                            selector: { number: { step: "any" } },
                        },
                    ],
                },
            ]}
            .computeLabel=${computeLabel}
            @value-changed=${onFormChange}
        ></ha-form>

        <ha-formfield>
            <ha-switch
                .checked=${data.tap_to_slide && !data.relative_slide}
                @change=${(ev) => onToggleChange('tap_to_slide', ev.target.checked)}
                .disabled=${data.relative_slide || isReadOnly}
            ></ha-switch>
            <div class="mdc-form-field">
                <label class="mdc-label">Tap to slide (previous behavior)</label>
            </div>
        </ha-formfield>
        <ha-formfield>
            <ha-switch
                .checked=${!data.tap_to_slide && data.relative_slide}
                @change=${(ev) => onToggleChange('relative_slide', ev.target.checked)}
                .disabled=${data.tap_to_slide || isReadOnly}
            ></ha-switch>
            <div class="mdc-form-field">
                <label class="mdc-label">Relative slide (incompatible with tap to slide)</label>
            </div>
        </ha-formfield>
        <ha-formfield>
            <ha-switch
                .checked=${data.read_only_slider ?? false}
                @change=${(ev) => onToggleChange('read_only_slider', ev.target.checked)}
                .disabled=${isReadOnly}
            ></ha-switch>
            <div class="mdc-form-field">
                <label class="mdc-label">Read only slider</label>
            </div>
        </ha-formfield>
        <ha-formfield>
            <ha-switch
                .checked=${data.slider_live_update ?? false}
                @change=${(ev) => onToggleChange('slider_live_update', ev.target.checked)}
                .disabled=${isReadOnly}
            ></ha-switch>
            <div class="mdc-form-field">
                <label class="mdc-label">Slider live update</label>
            </div>
        </ha-formfield>
        <div class="bubble-info" style="display: ${(data.slider_live_update ?? false) ? '' : 'none'}">
            <h4 class="bubble-section-title">
                <ha-icon icon="mdi:information-outline"></ha-icon>
                Slider live update
            </h4>
            <div class="content">
                <p>By default, sliders are updated only on release. When this option is enabled, the slider will update the entity state while sliding. <b>This feature is not recommended for all entities, disable it if you encounter issues.</b></p>
            </div>
        </div>
        ${entity?.startsWith("light") ? html`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:lightbulb-outline"></ha-icon>
                    Light options
                </h4>
                <div class="content">
                    <div class="ha-combo-box">
                        <ha-combo-box
                            label="Light slider mode"
                            .value=${data.light_slider_type || 'brightness'}
                            @value-changed=${(ev) => onToggleChange('light_slider_type', ev.detail.value)}
                            .items=${[
                                { label: 'Brightness (default)', value: 'brightness' },
                                { label: 'Color (Hue)', value: 'hue' },
                                { label: 'Saturation', value: 'saturation' },
                                { label: 'White temperature', value: 'white_temp' }
                            ]}
                        ></ha-combo-box>
                    </div>
                    ${data.light_slider_type === 'hue' ? html`
                        <ha-formfield>
                            <ha-switch
                                .checked=${data.hue_force_saturation ?? false}
                                @change=${(ev) => onToggleChange('hue_force_saturation', ev.target.checked)}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Force saturation when adjusting Hue</label>
                            </div>
                        </ha-formfield>
                        ${(data.hue_force_saturation ?? false) ? html`
                            <ha-textfield
                                label="Forced saturation value (0-100)"
                                type="number"
                                min="0"
                                max="100"
                                .value=${String(data.hue_force_saturation_value ?? 100)}
                                @input=${(ev) => onToggleChange('hue_force_saturation_value', ev.target.value)}
                            ></ha-textfield>
                        ` : ''}
                    ` : ''}
                    ${['hue','saturation','white_temp'].includes(data.light_slider_type) ? html`` : html`
                        <ha-formfield>
                            <ha-switch
                                .checked=${data.use_accent_color ?? false}
                                @change=${(ev) => onToggleChange('use_accent_color', ev.target.checked)}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Use accent color instead of light color</label>
                            </div>
                        </ha-formfield>
                    `}
                    ${!data.tap_to_slide ? html`
                        <ha-formfield>
                            <ha-switch
                                .checked=${data.allow_light_slider_to_0 ?? false}
                                @change=${(ev) => onToggleChange('allow_light_slider_to_0', ev.target.checked)}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Allow slider to turn off light (reach 0%)</label>
                            </div>
                        </ha-formfield>
                    ` : ''}
                    <ha-formfield>
                        <ha-switch
                            .checked=${data.light_transition ?? false}
                            @change=${(ev) => onToggleChange('light_transition', ev.target.checked)}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Enable smooth brightness transitions</label>
                        </div>
                    </ha-formfield>
                    ${(data.light_transition ?? false) ? html`
                        <ha-textfield
                            label="Transition time (ms)"
                            type="number"
                            min="1"
                            max="2000"
                            .value=${data.light_transition_time}
                            @input=${(ev) => onToggleChange('light_transition_time', ev.target.value)}
                        ></ha-textfield>
                    ` : ''}
                </div>
            </ha-expansion-panel>
        ` : ''}
    `;
}
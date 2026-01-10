import { html } from 'lit';
import { isReadOnlyEntityId } from './helpers.js';

const FILL_ORIENTATION_OPTIONS = [
    { label: 'Fill from left (default)', value: 'left' },
    { label: 'Fill from right', value: 'right' },
    { label: 'Fill from top', value: 'top' },
    { label: 'Fill from bottom', value: 'bottom' },
];

const VALUE_POSITION_OPTIONS = [
    { label: 'Right (default)', value: 'right' },
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Hidden', value: 'hidden' }
];

export function isReadOnlyEntity(editor) {
    const entity = editor._config.entity;
    return isReadOnlyEntityId(entity);
}

export function makeButtonSliderPanel(editor) {
    if (editor._disableEntityFilter === undefined) {
        editor._disableEntityFilter = false;
    }

    const forwardToggleChange = (key, value, meta = {}) => {
        if (!key) {
            return;
        }
        const control = (meta.control || '').toUpperCase();
        const eventType = meta.eventType || (control === 'HA-TEXTFIELD'
            ? 'input'
            : control === 'HA-COMBO-BOX'
                ? 'value-changed'
                : 'change');

        const target = {
            configValue: key,
            tagName: control || 'INPUT'
        };

        if (control === 'HA-SWITCH') {
            target.checked = value;
        } else {
            target.value = value;
        }

        const syntheticEvent = {
            type: eventType,
            target,
            detail: eventType === 'value-changed' ? { value } : undefined
        };

        editor._valueChanged(syntheticEvent);
    };

    const sliderVisible = editor._config.button_type === 'slider';

    return html`
        <ha-expansion-panel outlined style="display: ${sliderVisible ? '' : 'none'}">
            <h4 slot="header">
            <ha-icon icon="mdi:tune-variant"></ha-icon>
            Slider settings
            </h4>
            <div class="content">
                ${makeGenericSliderSettings({
                    hass: editor.hass,
                    data: editor._config,
                    entity: editor._config.entity,
                    computeLabel: editor._computeLabelCallback,
                    onFormChange: editor._valueChanged,
                    onToggleChange: forwardToggleChange,
                    isReadOnly: isReadOnlyEntity(editor),
                    showEntityFilterToggle: true,
                    entityFilterValue: editor._disableEntityFilter,
                    onEntityFilterToggle: (checked) => {
                        editor._disableEntityFilter = checked;
                        editor.requestUpdate();
                    },
                    showEntityFilterInfo: editor._disableEntityFilter,
                    rangeFormDisabled: editor._config.button_type === 'name'
                })}
            </div>
        </ha-expansion-panel>
    `;
}

// Generic slider settings builder for reuse in button and sub-button editors.
export function makeGenericSliderSettings({
    hass,
    data = {},
    entity,
    computeLabel,
    onFormChange,
    onToggleChange,
    isReadOnly,
    showEntityFilterToggle = false,
    entityFilterValue = false,
    onEntityFilterToggle,
    showEntityFilterInfo = entityFilterValue,
    rangeFormDisabled = false,
    forceValuePositionRight = false
}) {
    const isLightColorMode = entity?.startsWith("light") && ['hue', 'saturation', 'white_temp'].includes(data.light_slider_type);
    const hideInvertSliderToggle = isLightColorMode;
    const callToggleChange = (key, value, meta = {}) => {
        if (typeof onToggleChange === 'function') {
            onToggleChange(key, value, meta);
        }
    };
    const meta = (control, eventType) => ({ control, eventType });
    const handleEntityFilterToggle = (checked) => {
        if (typeof onEntityFilterToggle === 'function') {
            onEntityFilterToggle(checked);
        }
    };

    return html`

        <ha-expansion-panel outlined>
            <h4 slot="header">
                <ha-icon icon="mdi:gesture-swipe-horizontal"></ha-icon>
                Slider behavior
            </h4>
            <div class="content">
                ${showEntityFilterToggle ? html`
                    <div class="checkbox-wrapper">
                        <ha-formfield label="Disable entity filter (for custom slider)">
                            <ha-switch
                                .checked=${entityFilterValue}
                                @change=${(ev) => handleEntityFilterToggle(ev.target.checked)}
                            ></ha-switch>
                        </ha-formfield>
                    </div>
                    <div class="bubble-info" style="display: ${showEntityFilterInfo ? '' : 'none'}">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Custom slider
                        </h4>
                        <div class="content">
                            <p>To create a custom slider (read only), select an <b>entity with a numeric state</b> above, then define the <b>min</b> and <b>max</b> values below.</p>
                            <p>For example, this allows you to display your solar production within a specific range.</p>
                        </div>
                    </div>
                ` : ''}
                <div class="range-inputs" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                    <ha-textfield
                        label="Min value"
                        type="number"
                        step="any"
                        .value="${data.min_value ?? ''}"
                        .disabled=${rangeFormDisabled}
                        @input="${(ev) => {
                            const value = ev.target.value;
                            callToggleChange('min_value', value === '' ? undefined : Number(value), meta('ha-textfield', 'input'));
                        }}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Max value"
                        type="number"
                        step="any"
                        .value="${data.max_value ?? ''}"
                        .disabled=${rangeFormDisabled}
                        @input="${(ev) => {
                            const value = ev.target.value;
                            callToggleChange('max_value', value === '' ? undefined : Number(value), meta('ha-textfield', 'input'));
                        }}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Step"
                        type="number"
                        step="any"
                        .value="${data.step ?? ''}"
                        .disabled=${rangeFormDisabled}
                        @input="${(ev) => {
                            const value = ev.target.value;
                            callToggleChange('step', value === '' ? undefined : Number(value), meta('ha-textfield', 'input'));
                        }}"
                    ></ha-textfield>
                </div>
                <ha-formfield>
                    <ha-switch
                        .checked=${data.tap_to_slide && !data.relative_slide}
                        @change=${(ev) => callToggleChange('tap_to_slide', ev.target.checked, meta('ha-switch', 'change'))}
                        .disabled=${data.relative_slide || isReadOnly}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Tap to slide (previous behavior)</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${!data.tap_to_slide && data.relative_slide}
                        @change=${(ev) => callToggleChange('relative_slide', ev.target.checked, meta('ha-switch', 'change'))}
                        .disabled=${data.tap_to_slide || isReadOnly}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Relative slide (incompatible with tap to slide)</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${data.read_only_slider ?? isReadOnly}
                        @change=${(ev) => callToggleChange('read_only_slider', ev.target.checked, meta('ha-switch', 'change'))}
                        .disabled=${isReadOnly}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Read only slider</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${data.slider_live_update ?? false}
                        @change=${(ev) => callToggleChange('slider_live_update', ev.target.checked, meta('ha-switch', 'change'))}
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
            </div>
        </ha-expansion-panel>
        <ha-expansion-panel outlined>
            <h4 slot="header">
                <ha-icon icon="mdi:view-grid"></ha-icon>
                Slider layout
            </h4>
            <div class="content">
                <ha-select
                    label="Fill orientation"
                    .value="${data.slider_fill_orientation || 'left'}"
                    @selected="${(ev) => callToggleChange('slider_fill_orientation', ev.target.value, meta('ha-select', 'selected'))}"
                    @closed="${(ev) => ev.stopPropagation()}"
                    fixedMenuPosition
                >
                    <mwc-list-item value="left">Fill from left (default)</mwc-list-item>
                    <mwc-list-item value="right">Fill from right</mwc-list-item>
                    <mwc-list-item value="top">Fill from top</mwc-list-item>
                    <mwc-list-item value="bottom">Fill from bottom</mwc-list-item>
                </ha-select>
                <div class="bubble-info" style="display: ${['top', 'bottom'].includes(data.slider_fill_orientation) ? '' : 'none'}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Vertical slider behavior
                    </h4>
                    <div class="content">
                        <p>When using vertical fill orientation (top or bottom), swiping over the card on mobile will activate the slider. This is because there's no way to distinguish between scrolling and slider interaction.</p>
                    </div>
                </div>
                ${isLightColorMode ? '' : html`
                    <ha-select
                        label="Value position"
                        .value="${forceValuePositionRight ? 'right' : (data.slider_value_position || 'right')}"
                        .disabled=${forceValuePositionRight}
                        @selected="${(ev) => callToggleChange('slider_value_position', ev.target.value, meta('ha-select', 'selected'))}"
                        @closed="${(ev) => ev.stopPropagation()}"
                        fixedMenuPosition
                    >
                        <mwc-list-item value="right">Right (default)</mwc-list-item>
                        <mwc-list-item value="left">Left</mwc-list-item>
                        <mwc-list-item value="center">Center</mwc-list-item>
                        <mwc-list-item value="hidden">Hidden</mwc-list-item>
                    </ha-select>
                    ${forceValuePositionRight ? html`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                Value position locked
                            </h4>
                            <div class="content">
                                <p>Value position is forced to "Right" because "Show button info" is enabled. Disable it to change this setting.</p>
                            </div>
                        </div>
                    ` : ''}
                `}
                <ha-formfield style="display: ${hideInvertSliderToggle ? 'none' : ''}">
                    <ha-switch
                        .checked=${data.invert_slider_value ?? false}
                        @change=${(ev) => callToggleChange('invert_slider_value', ev.target.checked, meta('ha-switch', 'change'))}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Invert slider direction (100% fill equals minimum)</label>
                    </div>
                </ha-formfield>
            </div>
        </ha-expansion-panel>
        ${entity?.startsWith("light") ? html`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:lightbulb-outline"></ha-icon>
                    Light options
                </h4>
                <div class="content">
                    <ha-select
                        label="Light slider mode"
                        .value="${data.light_slider_type || 'brightness'}"
                        @selected="${(ev) => callToggleChange('light_slider_type', ev.target.value, meta('ha-select', 'selected'))}"
                        @closed="${(ev) => ev.stopPropagation()}"
                        fixedMenuPosition
                    >
                        <mwc-list-item value="brightness">Brightness (default)</mwc-list-item>
                        <mwc-list-item value="hue">Color (Hue)</mwc-list-item>
                        <mwc-list-item value="saturation">Saturation</mwc-list-item>
                        <mwc-list-item value="white_temp">White temperature</mwc-list-item>
                    </ha-select>
                    ${data.light_slider_type === 'hue' ? html`
                        <ha-formfield>
                            <ha-switch
                                .checked=${data.hue_force_saturation ?? false}
                                @change=${(ev) => callToggleChange('hue_force_saturation', ev.target.checked, meta('ha-switch', 'change'))}
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
                                @input=${(ev) => callToggleChange('hue_force_saturation_value', ev.target.value, meta('ha-textfield', 'input'))}
                            ></ha-textfield>
                        ` : ''}
                    ` : ''}
                    ${['hue', 'saturation', 'white_temp'].includes(data.light_slider_type) ? html`` : html`
                        <ha-formfield>
                            <ha-switch
                                .checked=${data.use_accent_color ?? false}
                                @change=${(ev) => callToggleChange('use_accent_color', ev.target.checked, meta('ha-switch', 'change'))}
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
                                @change=${(ev) => callToggleChange('allow_light_slider_to_0', ev.target.checked, meta('ha-switch', 'change'))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Allow slider to turn off light (reach 0%)</label>
                            </div>
                        </ha-formfield>
                    ` : ''}
                    <ha-formfield>
                        <ha-switch
                            .checked=${data.light_transition ?? false}
                            @change=${(ev) => callToggleChange('light_transition', ev.target.checked, meta('ha-switch', 'change'))}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Enable smooth brightness transitions</label>
                        </div>
                    </ha-formfield>
                    ${(data.light_transition ?? false) ? html`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                Light transition
                            </h4>
                            <div class="content">
                                <p><b>Important:</b> This feature only works for lights that support the 
                                <a target="_blank" rel="noopener noreferrer" href="https://www.home-assistant.io/integrations/light/#action-lightturn_on">light.turn_on</a> transition attribute.</p>
                                <p>Enabling this for lights that do not support transitions will unfortunately have no effect. Defaults to 500ms unless overridden below.</p>
                            </div>
                        </div>
                        <ha-textfield
                            label="Transition time (ms)"
                            type="number"
                            min="1"
                            max="100000"
                            .value=${data.light_transition_time}
                            @input=${(ev) => callToggleChange('light_transition_time', ev.target.value, meta('ha-textfield', 'input'))}
                        ></ha-textfield>
                    ` : ''}
                </div>
            </ha-expansion-panel>
        ` : ''}
    `;
}
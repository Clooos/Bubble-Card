import { html } from 'lit';
import { isReadOnlyEntityId } from './helpers.js';
import setupTranslation from '../../tools/localize.js';
import { tTemplate } from '../../editor/utils.js';

const getFillOrientationOptions = (t) => [
    { label: t('editor.slider.fill_left') + t('editor.common.default_suffix'), value: 'left' },
    { label: t('editor.slider.fill_right'), value: 'right' },
    { label: t('editor.slider.fill_top'), value: 'top' },
    { label: t('editor.slider.fill_bottom'), value: 'bottom' },
];

const getValuePositionOptions = (t) => [
    { label: t('editor.common.right') + t('editor.common.default_suffix'), value: 'right' },
    { label: t('editor.common.left'), value: 'left' },
    { label: t('editor.common.center'), value: 'center' },
    { label: t('editor.common.hidden'), value: 'hidden' }
];

export function isReadOnlyEntity(editor) {
    const entity = editor._config.entity;
    return isReadOnlyEntityId(entity);
}

export function makeButtonSliderPanel(editor) {
    const t = setupTranslation(editor.hass);
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

        const includeDetailValue = eventType === 'value-changed' || eventType === 'selected';
        const syntheticEvent = {
            type: eventType,
            target,
            detail: includeDetailValue ? { value } : undefined
        };

        editor._valueChanged(syntheticEvent);
    };

    const sliderVisible = editor._config.button_type === 'slider';

    return html`
        <ha-expansion-panel outlined style="display: ${sliderVisible ? '' : 'none'}">
            <h4 slot="header">
            <ha-icon icon="mdi:tune-variant"></ha-icon>
            ${t('editor.button.slider_settings')}
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
    const t = setupTranslation(hass);
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
                ${t('editor.slider.behavior_title')}
            </h4>
            <div class="content">
                ${showEntityFilterToggle ? html`
                    <div class="checkbox-wrapper">
                        <ha-formfield label="${t('editor.slider.disable_filter')}">
                            <ha-switch
                                .checked=${entityFilterValue}
                                @change=${(ev) => handleEntityFilterToggle(ev.target.checked)}
                            ></ha-switch>
                        </ha-formfield>
                    </div>
                    <div class="bubble-info" style="display: ${showEntityFilterInfo ? '' : 'none'}">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t('editor.slider.custom_title')}
                        </h4>
                        <div class="content">
                            <p>${tTemplate(t('editor.slider.custom_body'), {
                                entity: html`<b>${t('editor.slider.custom_entity')}</b>`,
                                min: html`<b>min</b>`,
                                max: html`<b>max</b>`
                            })}</p>
                            <p>${t('editor.slider.custom_example')}</p>
                        </div>
                    </div>
                ` : ''}
                <div class="range-inputs" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                    <ha-form
                        .hass=${hass}
                        .data=${{ min_value: data.min_value ?? '' }}
                        .schema=${[{ name: 'min_value', selector: { text: { type: 'number' } }, options: { step: 'any' } }]}
                        .disabled=${rangeFormDisabled}
                        .computeLabel=${() => t('editor.slider.min_value')}
                        @value-changed=${(ev) => {
                            const value = ev.detail.value.min_value;
                            callToggleChange('min_value', value === undefined || value === '' ? undefined : Number(value), meta('ha-textfield', 'input'));
                        }}
                    ></ha-form>
                    <ha-form
                        .hass=${hass}
                        .data=${{ max_value: data.max_value ?? '' }}
                        .schema=${[{ name: 'max_value', selector: { text: { type: 'number' } }, options: { step: 'any' } }]}
                        .disabled=${rangeFormDisabled}
                        .computeLabel=${() => t('editor.slider.max_value')}
                        @value-changed=${(ev) => {
                            const value = ev.detail.value.max_value;
                            callToggleChange('max_value', value === undefined || value === '' ? undefined : Number(value), meta('ha-textfield', 'input'));
                        }}
                    ></ha-form>
                    <ha-form
                        .hass=${hass}
                        .data=${{ step: data.step ?? '' }}
                        .schema=${[{ name: 'step', selector: { text: { type: 'number' } }, options: { step: 'any' } }]}
                        .disabled=${rangeFormDisabled}
                        .computeLabel=${() => t('editor.common.step')}
                        @value-changed=${(ev) => {
                            const value = ev.detail.value.step;
                            callToggleChange('step', value === undefined || value === '' ? undefined : Number(value), meta('ha-textfield', 'input'));
                        }}
                    ></ha-form>
                </div>
                <ha-formfield>
                    <ha-switch
                        .checked=${data.tap_to_slide && !data.relative_slide}
                        @change=${(ev) => callToggleChange('tap_to_slide', ev.target.checked, meta('ha-switch', 'change'))}
                        .disabled=${data.relative_slide || isReadOnly}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${t('editor.slider.tap_to_slide')}</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${!data.tap_to_slide && data.relative_slide}
                        @change=${(ev) => callToggleChange('relative_slide', ev.target.checked, meta('ha-switch', 'change'))}
                        .disabled=${data.tap_to_slide || isReadOnly}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${t('editor.slider.relative_slide')}</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${data.read_only_slider ?? isReadOnly}
                        @change=${(ev) => callToggleChange('read_only_slider', ev.target.checked, meta('ha-switch', 'change'))}
                        .disabled=${isReadOnly}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${t('editor.slider.read_only')}</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${data.slider_live_update ?? false}
                        @change=${(ev) => callToggleChange('slider_live_update', ev.target.checked, meta('ha-switch', 'change'))}
                        .disabled=${isReadOnly}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${t('editor.slider.live_update')}</label>
                    </div>
                </ha-formfield>
                <div class="bubble-info" style="display: ${(data.slider_live_update ?? false) ? '' : 'none'}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        ${t('editor.slider.live_update')}
                    </h4>
                    <div class="content">
                        <p>${t('editor.slider.live_update_body1')} <b>${t('editor.slider.live_update_body2')}</b></p>
                    </div>
                </div>
            </div>
        </ha-expansion-panel>
        <ha-expansion-panel outlined>
            <h4 slot="header">
                <ha-icon icon="mdi:view-grid"></ha-icon>
                ${t('editor.slider.layout_title')}
            </h4>
            <div class="content">
                <ha-form
                    .hass=${hass}
                    .data=${{ slider_fill_orientation: data.slider_fill_orientation || 'left' }}
                    .schema=${[{
                        name: 'slider_fill_orientation',
                        selector: {
                            select: {
                                options: getFillOrientationOptions(t),
                                mode: 'dropdown'
                            }
                        }
                    }]}
                    .computeLabel=${(schema) => (typeof computeLabel === 'function' ? computeLabel(schema) : t('editor.slider.fill_orientation'))}
                    @value-changed=${(ev) => callToggleChange('slider_fill_orientation', ev.detail.value.slider_fill_orientation, meta('ha-combo-box', 'value-changed'))}
                ></ha-form>
                <div class="bubble-info" style="display: ${['top', 'bottom'].includes(data.slider_fill_orientation) ? '' : 'none'}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        ${t('editor.slider.vertical_title')}
                    </h4>
                    <div class="content">
                        <p>${t('editor.slider.vertical_body')}</p>
                    </div>
                </div>
                ${isLightColorMode ? '' : html`
                    <ha-form
                        .hass=${hass}
                        .data=${{ slider_value_position: forceValuePositionRight ? 'right' : (data.slider_value_position || 'right') }}
                        .schema=${[{
                            name: 'slider_value_position',
                            disabled: forceValuePositionRight,
                            selector: {
                                select: {
                                    options: getValuePositionOptions(t),
                                    mode: 'dropdown'
                                }
                            }
                        }]}
                        .computeLabel=${(schema) => (typeof computeLabel === 'function' ? computeLabel(schema) : t('editor.slider.value_position'))}
                        @value-changed=${(ev) => callToggleChange('slider_value_position', ev.detail.value.slider_value_position, meta('ha-combo-box', 'value-changed'))}
                    ></ha-form>
                    ${forceValuePositionRight ? html`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                ${t('editor.slider.value_locked_title')}
                            </h4>
                            <div class="content">
                                <p>${t('editor.slider.value_locked_body')}</p>
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
                        <label class="mdc-label">${t('editor.slider.invert')}</label>
                    </div>
                </ha-formfield>
            </div>
        </ha-expansion-panel>
        ${entity?.startsWith("light") ? html`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:lightbulb-outline"></ha-icon>
                    ${t('editor.slider.light_title')}
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${hass}
                        .data=${{ light_slider_type: data.light_slider_type || 'brightness' }}
                        .schema=${[{
                            name: 'light_slider_type',
                            selector: {
                                select: {
                                    options: [
                                        { value: 'brightness', label: t('editor.slider.mode_brightness') + t('editor.common.default_suffix') },
                                        { value: 'hue', label: t('editor.slider.mode_color') },
                                        { value: 'saturation', label: t('editor.slider.mode_saturation') },
                                        { value: 'white_temp', label: t('editor.slider.mode_white') }
                                    ],
                                    mode: 'dropdown'
                                }
                            }
                        }]}
                        .computeLabel=${(schema) => (typeof computeLabel === 'function' ? computeLabel(schema) : t('editor.slider.light_mode'))}
                        @value-changed=${(ev) => callToggleChange('light_slider_type', ev.detail.value.light_slider_type, meta('ha-combo-box', 'value-changed'))}
                    ></ha-form>
                    ${data.light_slider_type === 'hue' ? html`
                        <ha-formfield>
                            <ha-switch
                                .checked=${data.hue_force_saturation ?? false}
                                @change=${(ev) => callToggleChange('hue_force_saturation', ev.target.checked, meta('ha-switch', 'change'))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">${t('editor.slider.force_saturation')}</label>
                            </div>
                        </ha-formfield>
                        ${(data.hue_force_saturation ?? false) ? html`
                            <ha-form
                                .hass=${hass}
                                .data=${{ hue_force_saturation_value: String(data.hue_force_saturation_value ?? 100) }}
                                .schema=${[{ name: 'hue_force_saturation_value', selector: { text: { type: 'number' } }, options: { min: 0, max: 100 } }]}
                                .computeLabel=${() => t('editor.slider.forced_saturation_value')}
                                @value-changed=${(ev) => callToggleChange('hue_force_saturation_value', ev.detail.value.hue_force_saturation_value, meta('ha-textfield', 'input'))}
                            ></ha-form>
                        ` : ''}
                    ` : ''}
                    ${['hue', 'saturation', 'white_temp'].includes(data.light_slider_type) ? html`` : html`
                        <ha-formfield>
                            <ha-switch
                                .checked=${data.use_accent_color ?? false}
                                @change=${(ev) => callToggleChange('use_accent_color', ev.target.checked, meta('ha-switch', 'change'))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">${t('editor.show.accent_color')}</label>
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
                                <label class="mdc-label">${t('editor.slider.allow_off')}</label>
                            </div>
                        </ha-formfield>
                    ` : ''}
                    <ha-formfield>
                        <ha-switch
                            .checked=${data.light_transition ?? false}
                            @change=${(ev) => callToggleChange('light_transition', ev.target.checked, meta('ha-switch', 'change'))}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t('editor.slider.smooth_transitions')}</label>
                        </div>
                    </ha-formfield>
                    ${(data.light_transition ?? false) ? html`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                ${t('editor.slider.transition_title')}
                            </h4>
                            <div class="content">
                                <p><b>${t('editor.slider.transition_important')}</b> ${tTemplate(t('editor.slider.transition_body1'), {
                                    attr: html`<a target="_blank" rel="noopener noreferrer" href="https://www.home-assistant.io/integrations/light/#action-lightturn_on">light.turn_on</a> ${t('editor.slider.transition_attr')}`
                                })}</p>
                                <p>${t('editor.slider.transition_body2')}</p>
                            </div>
                        </div>
                        <ha-form
                            .hass=${hass}
                            .data=${{ light_transition_time: data.light_transition_time ?? '' }}
                            .schema=${[{ name: 'light_transition_time', selector: { text: { type: 'number' } }, options: { min: 1, max: 100000 } }]}
                            .computeLabel=${() => t('editor.slider.transition_time')}
                            @value-changed=${(ev) => callToggleChange('light_transition_time', ev.detail.value.light_transition_time, meta('ha-textfield', 'input'))}
                        ></ha-form>
                    ` : ''}
                </div>
            </ha-expansion-panel>
        ` : ''}
        ${entity?.startsWith("cover") ? html`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:window-shutter"></ha-icon>
                    ${t('editor.slider.cover_title')}
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${hass}
                        .data=${{ cover_slider_type: data.cover_slider_type || 'position' }}
                        .schema=${[{
                            name: 'cover_slider_type',
                            selector: {
                                select: {
                                    options: [
                                        { value: 'position', label: t('editor.slider.cover_position') + t('editor.common.default_suffix') },
                                        { value: 'tilt_position', label: t('editor.slider.cover_tilt') }
                                    ],
                                    mode: 'dropdown'
                                }
                            }
                        }]}
                        .computeLabel=${(schema) => (typeof computeLabel === 'function' ? computeLabel(schema) : t('editor.slider.cover_mode'))}
                        @value-changed=${(ev) => callToggleChange('cover_slider_type', ev.detail.value.cover_slider_type, meta('ha-combo-box', 'value-changed'))}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
        ` : ''}
    `;
}
import { html } from 'lit';

function getButtonList(){
    return [{
        'label': 'Switch',
        'value': 'switch'
    },
    {
        'label': 'Slider',
        'value': 'slider'
    },
    {
        'label': 'State',
        'value': 'state'
    },
    {
        'label': 'Name / Text',
        'value': 'name'
    }
];
}


export function renderPopUpEditor(editor){
    const conditions = editor._config?.trigger ?? [];
    let button_action = editor._config.button_action || '';


    return html`
        <div class="card-config">
            ${editor.makeDropdown("Card type", "card_type", editor.cardTypeList)}
            <ha-textfield
                label="Hash (e.g. #kitchen)"
                .value="${editor._config?.hash || '#pop-up-name'}"
                .configValue="${"hash"}"
                @input="${editor._valueChanged}"
            ></ha-textfield>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:dock-top"></ha-icon>
                  Header settings
                </h4>
                <div class="content">
                    <ha-formfield .label="Optional - Show header">
                        <ha-switch
                            aria-label="Optional - Show header"
                            .checked=${editor._config.show_header ?? true}
                            .configValue="${"show_header"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Show header</label> 
                        </div>
                    </ha-formfield>
                    <ha-alert alert-type="info">You can completely hide the pop-up header, including the close button. To close it when hidden, either make a long swipe within the pop-up or click outside of it.</ha-alert>
                    <div style="${!(editor._config?.show_header ?? true) ? 'display: none;' : ''}">
                        <hr />

                        ${editor.makeDropdown("Button type", "button_type", getButtonList())}
                        <ha-form
                            .hass=${editor.hass}
                            .data=${editor._config}
                            .schema=${[
                                        { name: "entity",
                                        label: "Optional - Entity", 
                                        selector: { entity: {} },
                                        },
                                    ]}   
                            .computeLabel=${editor._computeLabelCallback}
                            .disabled="${editor._config.button_type === 'name'}"
                            @value-changed=${editor._valueChanged}
                        ></ha-form>                                         
                        <ha-textfield
                            label="Optional - Name"
                            .value="${editor._config?.name || ''}"
                            .configValue="${"name"}"
                            @input="${editor._valueChanged}"
                        ></ha-textfield>
                        ${editor.makeDropdown("Optional - Icon", "icon")}
                        ${editor.makeShowState()}
                        <hr />
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
                        <ha-expansion-panel outlined style="display: ${editor._config.button_type === 'slider' ? 'none' : ''}">
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Tap action on button
                            </h4>
                            <div class="content">
                                ${editor.makeActionPanel("Tap action", button_action, editor._config.button_type !== 'name' ? (editor._config.button_type === 'state' ? 'more-info' : 'toggle') : 'none', 'button_action')}
                                ${editor.makeActionPanel("Double tap action", button_action, editor._config.button_type !== 'name' ? (editor._config.button_type === 'state' ? 'more-info' : 'toggle') : 'none', 'button_action')}
                                ${editor.makeActionPanel("Hold action", button_action, editor._config.button_type !== 'name' ? 'more-info' : 'none', 'button_action')}
                            </div>
                        </ha-expansion-panel>
                        ${editor.makeSubButtonPanel()}
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Pop-up settings
                </h4>
                <div class="content">
                    <ha-textfield
                        label="Optional - Auto close in milliseconds (e.g. 15000)"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="1000"
                        .value="${editor._config?.auto_close || ''}"
                        .configValue="${"auto_close"}"
                        @input="${editor._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Slide to close distance (default to 400)"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="10"
                        .value="${editor._config.slide_to_close_distance ?? 400}"
                        .configValue="${"slide_to_close_distance"}"
                        @input="${editor._valueChanged}"
                    ></ha-textfield>
                    <ha-formfield .label="Optional - Close the pop-up by clicking outside of it (a refresh is needed)">
                        <ha-switch
                            aria-label="Optional - Close the pop-up by clicking outside of it (a refresh is needed)"
                            .checked=${editor._config?.close_by_clicking_outside ?? true}
                            .configValue="${"close_by_clicking_outside"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Close the pop-up by clicking outside of it (a refresh is needed)</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Close the pop-up after any click or tap">
                        <ha-switch
                            aria-label="Optional - Close the pop-up after any click or tap"
                            .checked=${editor._config?.close_on_click || false}
                            .configValue="${"close_on_click"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Close the pop-up after any click or tap</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Update cards in background (not recommended)">
                        <ha-switch
                            aria-label="Optional - Update cards in background (not recommended)"
                            .checked=${editor._config?.background_update || false}
                            .configValue="${"background_update"}"
                            @change=${editor._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Update cards in background (not recommended)</label> 
                        </div>
                    </ha-formfield>
                    <ha-alert alert-type="info">Background updates are only recommended if you encounter issues with certain cards within your pop-up.</ha-alert>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:bell"></ha-icon>
                  Pop-up trigger
                </h4>
                <div class="content">
                    <ha-card-conditions-editor
                        .hass=${editor.hass}
                        .conditions=${conditions}
                        @value-changed=${(ev) => editor._conditionChanged(ev)}
                    >
                    </ha-card-conditions-editor>
                    <ha-alert alert-type="info">
                        The pop-up will be opened when ALL conditions are fulfilled. For example you can open a "Security" pop-up with a camera when a person is in front of your house. You can also create a toggle helper (<code>input_boolean</code>) and trigger its opening/closing in an automation.
                    </ha-alert>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Pop-up open/close action
                </h4>
                <div class="content">
                    ${editor.makeActionPanel("Open action", editor._config, 'none')}
                    ${editor.makeActionPanel("Close action", editor._config, 'none')}
                    <ha-alert alert-type="info">This allows you to trigger an action on pop-up open/close.</ha-alert>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${editor.makeLayoutOptions()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Pop-up styling
                        </h4>
                        <div class="content"> 
                            <ha-textfield
                                label="Optional - Margin (fix centering on some themes) (e.g. 13px)"
                                .value="${editor._config?.margin || '7px'}"
                                .configValue="${"margin"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Top margin on mobile (e.g. -56px if your header is hidden)"
                                .value="${editor._config?.margin_top_mobile || '0px'}"
                                .configValue="${"margin_top_mobile"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Top margin on desktop (e.g. 50vh for an half sized pop-up)"
                                .value="${editor._config?.margin_top_desktop || '0px'}"
                                .configValue="${"margin_top_desktop"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Width on desktop (100% by default on mobile)"
                                .value="${editor._config?.width_desktop || '540px'}"
                                .configValue="${"width_desktop"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Background color (any var, hex, rgb or rgba value)"
                                .value="${editor._config?.bg_color || ''}"
                                .configValue="${"bg_color"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Background opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${editor._config?.bg_opacity !== undefined ? editor._config?.bg_opacity : '88'}"
                                .configValue="${"bg_opacity"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Background blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${editor._config?.bg_blur !== undefined ? editor._config?.bg_blur : '10'}"
                                .configValue="${"bg_blur"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Backdrop blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${editor._config?.backdrop_blur !== undefined ? editor._config?.backdrop_blur : '0'}"
                                .configValue="${"backdrop_blur"}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Shadow opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .configValue="${"shadow_opacity"}"
                                .value="${editor._config?.shadow_opacity !== undefined ? editor._config?.shadow_opacity : '0'}"
                                @input="${editor._valueChanged}"
                            ></ha-textfield>
                            <ha-formfield .label="Optional - Hide pop-up backdrop (a refresh is needed)">
                                <ha-switch
                                    aria-label="Optional - Hide pop-up backdrop (a refresh is needed)"
                                    .checked=${editor._config.hide_backdrop ?? false}
                                    .configValue="${"hide_backdrop"}"
                                    @change=${editor._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Hide pop-up backdrop (a refresh is needed)</label> 
                                </div>
                            </ha-formfield>
                            <ha-alert alert-type="warning">Set this toggle to true on the first pop-up of your main dashboard to hide the darker backdrop behind all pop-ups. <b>You can add a blurred effect to it by changing <code>Optional - Backdrop blur</code> just below, but be aware that this can slow down your dashboard when opening pop-ups. It is now set to 0 for that reason.</b></ha-alert>
                        </div>
                    </ha-expansion-panel>
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeModulesEditor()}
            <ha-alert alert-type="info">
                This card allows you to convert any vertical stack into a pop-up. Each pop-up is hidden by default and can be opened by targeting its link (e.g., '#pop-up-name'), with <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#example">any card</a> that supports the <code>navigate</code> action, or with the <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#horizontal-buttons-stack">horizontal buttons stack</a> that is included.
                <br><br><b>Important:</b> This card must be placed within a <a style="color: var(--text-primary-color)" href="https://www.home-assistant.io/dashboards/vertical-stack/">vertical stack</a> card at the topmost position to function properly. To avoid misalignment with your view, place vertical stacks/pop-ups after all other dashboard cards. It should be called from the same view to work. 
                <br><br><b>You can also watch this <a style="color: var(--text-primary-color)" href="https://www.youtube.com/watch?v=7mOV7BfWoFc">video</a> that explains how to create your first pop-up.</b>
            </ha-alert>
            <ha-alert alert-type="warning">Since v1.7.0, the optimized mode has been removed to ensure stability and to simplify updates for everyone. However, if your pop-up content still appears on the screen during page loading, <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#pop-up-initialization-fix">you can install this similar fix.</a></ha-alert>
            ${editor.makeVersion()}
      </div>
    `;
}

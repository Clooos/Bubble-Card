import { version } from '../var/version.ts';
import { fireEvent } from '../tools/utils.ts';

let bubblePopUpEditor = new MutationObserver((mutationsList, observer) => {
    if (customElements.get("ha-panel-lovelace")) {

        const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
        const html = LitElement.prototype.html;
        const css = LitElement.prototype.css;
            
        class BubblePopUpEditor extends LitElement {

            setConfig(config) {
                this._config = {
                    ...config
                };
            }

            static get properties() {
                return {
                    hass: {},
                    _config: {}
                };
            }

            get _entity() {
                return this._config.entity || '';
            }

            get _name() {
                return this._config.name || '';
            }

            get _icon() {
                return this._config.icon || '';
            }

            get _state() {
                return this._config.state || '';
            }

            get _text() {
                return this._config.text || '';
            }

            get _hash() {
                return this._config.hash || '#pop-up-name';
            }
            
            get _trigger_entity() {
                return this._config.trigger_entity || '';
            }
            
            get _trigger_state() {
                return this._config.trigger_state || '';
            }
            
            get _trigger_close() {
                return this._config.trigger_close || false;
            }
            
            get _margin() {
                return this._config.margin || '7px';
            }

            get _margin_top_mobile() {
                return this._config.margin_top_mobile || '0px';
            }

            get _margin_top_desktop() {
                return this._config.margin_top_desktop || '0px';
            }

            get _width_desktop() {
                return this._config.width_desktop || '540px';
            }
            
            get _bg_color() {
                return this._config.bg_color ||  window.color;
            }
            
            get _bg_opacity() {
                return this._config.bg_opacity !== undefined ? this._config.bg_opacity : '88';
            }
            
            get _bg_blur() {
                return this._config.bg_blur !== undefined ? this._config.bg_blur : '14';
            }
            
            get _shadow_opacity() {
                return this._config.shadow_opacity !== undefined ? this._config.shadow_opacity : '0';
            }

            get _is_sidebar_hidden() {
                return this._config.is_sidebar_hidden || false;
            }
            
            get _auto_close() {
                return this._config.auto_close || '';
            }
            
            get _back_open() {
                return this._config.back_open || false;
            }

            render() {
                if (!this.hass) {
                    return html``;
                }

                if (!this.listsUpdated) {
                    const formateList = item => ({
                        label: item,
                        value: item
                    });

                    this.allEntitiesList = Object.keys(this.hass.states).map(formateList);

                    this.lightList = Object.keys(this.hass.states).filter(
                        (eid) => eid.substr(0, eid.indexOf(".")) === "light"
                    ).map(formateList);

                    this.sensorList = Object.keys(this.hass.states).filter(
                        (eid) => eid.substr(0, eid.indexOf(".")) === "sensor"
                    ).map(formateList);
                    
                    this.binarySensorList = Object.keys(this.hass.states).filter(
                        (eid) => eid.substr(0, eid.indexOf(".")) === "binary_sensor"
                    ).map(formateList);

                    this.coverList = Object.keys(this.hass.states).filter(
                        (eid) => eid.substr(0, eid.indexOf(".")) === "cover"
                    ).map(formateList);

                    this.cardTypeList = [{
                            'label': 'Button',
                            'value': 'button'
                        },
                        {
                            'label': 'Cover',
                            'value': 'cover'
                        },
                        {
                            'label': 'Empty column',
                            'value': 'empty-column'
                        },
                        {
                            'label': 'Horizontal buttons stack',
                            'value': 'horizontal-buttons-stack'
                        },
                        {
                            'label': 'Pop-up',
                            'value': 'pop-up'
                        },
                        {
                            'label': 'Separator',
                            'value': 'separator'
                        }
                    ];

                    this.buttonTypeList = [{
                            'label': 'Switch',
                            'value': 'switch'
                        },
                        {
                            'label': 'Slider',
                            'value': 'slider'
                        }
                    ];

                    this.listsUpdated = true;
                }

                const allEntitiesList = this.allEntitiesList;
                const lightList = this.lightList;
                const sensorList = this.sensorList;
                const coverList = this.coverList;
                const cardTypeList = this.cardTypeList;
                const buttonTypeList = this.buttonTypeList;

                return html`
                    <div class="card-config">
                        <h3>Pop-up 
                            <span style="
                                font-size: 10px !important;
                                background: rgb(0,140,90);
                                padding: 2px 6px;
                                border-radius: 8px;
                            ">
                                👍 Optimized mode
                            </span>
                        </h3>
                        <ha-alert alert-type="info">This card allows you to convert any vertical stack into a pop-up. Each pop-up can be opened by targeting its link (e.g. '#pop-up-name'), with navigation_path or with the horizontal buttons stack that is included.<br><b>It must be placed within a vertical-stack card at the top most position to function properly. The pop-up will be hidden by default until you open it.</b></ha-alert>
                        <ha-textfield
                            label="Hash (e.g. #kitchen)"
                            .value="${this._hash}"
                            .configValue="${"hash"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Name"
                            .value="${this._name}"
                            .configValue="${"name"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        ${this.makeDropdown("Optional - Icon", "icon")}
                        ${this.makeDropdown("Optional - Entity to toggle (e.g. room light group)", "entity", allEntitiesList)}
                        ${this.makeDropdown("Optional - Entity state to display (e.g. room temperature)", "state", allEntitiesList)}
                        <ha-textfield
                            label="Optional - Additional text"
                            .value="${this._text}"
                            .configValue="${"text"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Auto close in milliseconds (e.g. 15000)"
                            .value="${this._auto_close}"
                            .configValue="${"auto_close"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <h3>Pop-up trigger</h3>
                        <ha-alert alert-type="info">This allows you to open this pop-up based on the state of any entity, for example you can open a "Security" pop-up with a camera when a person is in front of your house. You can also create a toggle helper (input_boolean) and trigger its opening/closing in an automation.</ha-alert>
                        ${this.makeDropdown("Optional - Entity to open the pop-up based on its state", "trigger_entity", allEntitiesList)}
                        <ha-textfield
                            label="Optional - State to open the pop-up"
                            .value="${this._trigger_state}"
                            .configValue="${"trigger_state"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-formfield .label="Optional - Close when the state is different">
                            <ha-switch
                                aria-label="Optional - Close when the state is different"
                                .checked=${this._trigger_close}
                                .configValue="${"trigger_close"}"
                                @change=${this._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Close when the state is different</label> 
                            </div>
                        </ha-formfield>
                        <h3>Styling options</h3>
                        <ha-textfield
                            label="Optional - Margin (fix centering on some themes) (e.g. 13px)"
                            .value="${this._margin}"
                            .configValue="${"margin"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Top margin on mobile (e.g. -56px if your header is hidden)"
                            .value="${this._margin_top_mobile}"
                            .configValue="${"margin_top_mobile"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Top margin on desktop (e.g. 50% for an half sized pop-up)"
                            .value="${this._margin_top_desktop}"
                            .configValue="${"margin_top_desktop"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Width on desktop (100% by default on mobile)"
                            .value="${this._width_desktop}"
                            .configValue="${"width_desktop"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-formfield .label="Optional - Fix when the sidebar is hidden on desktop (turn this to false if your sidebar is unmodified)">
                            <ha-switch
                                aria-label="Optional - Fix when the sidebar is hidden on desktop (turn this to false if your sidebar is unmodified)"
                                .checked=${this._is_sidebar_hidden}
                                .configValue="${"is_sidebar_hidden"}"
                                @change=${this._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Fix when the sidebar is hidden on desktop (turn this to false if your sidebar is unmodified)</label> 
                            </div>
                        </ha-formfield>
                        <ha-textfield
                            label="Optional - Background color (any hex, rgb or rgba value)"
                            .value="${this._bg_color}"
                            .configValue="${"bg_color"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <div style="display: inline-flex;">
                            <ha-textfield
                                label="Optional - Background opacity"
                                .value="${this._bg_opacity}"
                                .configValue="${"bg_opacity"}"
                                @input="${this._valueChanged}"
                                style="width: 50%;"
                            ></ha-textfield>
                            <ha-slider
                              .value="${this._bg_opacity}"
                              .configValue="${"bg_opacity"}"
                              .min='0'
                              .max='100'
                              @change=${this._valueChanged}
                              style="width: 50%;"
                            ></ha-slider>
                        </div>
                        <div style="display: inline-flex;">
                            <ha-textfield
                                label="Optional - Background blur"
                                .value="${this._bg_blur}"
                                .configValue="${"bg_blur"}"
                                @input="${this._valueChanged}"
                                style="width: 50%;"
                            ></ha-textfield>
                            <ha-slider
                              .value="${this._bg_blur}"
                              .configValue="${"bg_blur"}"
                              .min='0'
                              .max='100'
                              @change=${this._valueChanged}
                              style="width: 50%;"
                            ></ha-slider>
                        </div>
                        <div style="display: inline-flex;">
                            <ha-textfield
                                label="Optional - Shadow opacity"
                                .value="${this._shadow_opacity}"
                                .configValue="${"shadow_opacity"}"
                                @input="${this._valueChanged}"
                                style="width: 50%;"
                            ></ha-textfield>
                            <ha-slider
                              .value="${this._shadow_opacity}"
                              .configValue="${"shadow_opacity"}"
                              .min='0'
                              .max='100'
                              @change=${this._valueChanged}
                              style="width: 50%;"
                            ></ha-slider>
                        </div>
                        <ha-alert alert-type="info">You can't set a value to 0 with the sliders for now, just change it to 0 in the text field if you need to.</ha-alert>
                        <h3>Advanced settings</h3>
                        <ha-formfield .label="Optional - Back button/event support">
                            <ha-switch
                                aria-label="Optional - Back button/event support"
                                .checked=${this._back_open ? this._back_open : window.backOpen}
                                .configValue="${"back_open"}"
                                @change=${this._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Back button/event support</label> 
                            </div>
                        </ha-formfield>
                        <ha-alert alert-type="info"><b>Back button/event support</b> : This allow you to navigate through your pop-ups history when you press the back button of your browser. <b>This setting can be applied only once, you don't need to change it in all pop-ups. If it's not working just turn it on for each pop-ups.</b></ha-alert>
                        ${this.makeVersion()}
                  </div>
                `;
            }

            makeDropdown(label, configValue, items) {
                const hass = this.hass;

                if (label.includes('icon') || label.includes('Icon')) {
                    return html`
                        <div>
                            <ha-icon-picker
                                label="${label}"
                                .value="${this['_' + configValue]}"
                                .configValue="${configValue}"
                                item-label-path="label"
                                item-value-path="value"
                                @value-changed="${this._valueChanged}"
                            ></ha-icon-picker>
                        </div>
                    `;
                } else {
                    return html`
                    <div>
                        <ha-combo-box
                            label="${label}"
                            .value="${this['_' + configValue]}"
                            .configValue="${configValue}"
                            .items="${items}"
                            @value-changed="${this._valueChanged}"
                        ></ha-combo-box>
                    </div>
                  `;
                }
            }

            makeButton() {
                let buttons = [];

                for (let i = 1; i <= this.buttonIndex; i++) {
                    buttons.push(html`
                        <div class="${i}_button">
                            <div class="button-header">
                                <ha-icon class="remove-button" icon="mdi:close" @click=${() => this.removeButton(i)}></ha-icon>
                                <span class="button-number">Button ${i}</span>
                            </div>
                            <ha-textfield
                                label="Link / Hash to pop-up (e.g. #kitchen)"
                                .value="${this._config[i + '_link'] || ''}"
                                .configValue="${i}_link"
                                @input="${this._valueChanged}"
                                style="width: 100%;"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Name"
                                .value="${this._config[i + '_name'] || ''}"
                                .configValue="${i}_name"
                                @input="${this._valueChanged}"
                                style="width: 100%;"
                            ></ha-textfield>
                            <ha-icon-picker
                                label="Optional - Icon"
                                .value="${this._config[i + '_icon'] || ''}"
                                .configValue="${i}_icon"
                                item-label-path="label"
                                item-value-path="value"
                                @value-changed="${this._valueChanged}"
                            ></ha-icon-picker>
                            <ha-combo-box
                                label="Optional - Light / Light group (For background color)"
                                .value="${this._config[i + '_entity'] || ''}"
                                .configValue="${i}_entity"
                                .items="${this.allEntitiesList}"
                                @value-changed="${this._valueChanged}"
                            ></ha-combo-box>
                            <ha-combo-box
                                label="Optional - Presence / Occupancy sensor (For button auto order)"
                                .value="${this._config[i + '_pir_sensor'] || ''}"
                                .configValue="${i}_pir_sensor"
                                .disabled=${!this._config.auto_order}
                                .items="${this.binarySensorList}"
                                @value-changed="${this._valueChanged}"
                            ></ha-combo-box>
                        </div>
                    `);
                }
                return buttons;
            }
            
            makeVersion() {
                return html`
                    <h4 style="
                        font-size: 12px !important;
                        background: rgba(0,0,0,0.1);
                        padding: 8px 16px;
                        border-radius: 32px;
                    ">
                        Bubble Card - Pop-up 
                        <span style="
                            font-size: 10px;
                            background: rgba(0,120,180,1);
                            padding: 0px 8px;
                            border-radius: 12px;
                            margin-right: -6px;
                            float: right;
                        ">
                            ${version}
                        </span>
                    </h4>
                `;
            }

            removeButton(index) {
                // Removing button fields
                delete this._config[index + '_name'];
                delete this._config[index + '_icon'];
                delete this._config[index + '_link'];
                delete this._config[index + '_entity'];
                delete this._config[index + '_pir_sensor'];
            
                // Updating indexes of following buttons
                for (let i = index; i < this.buttonIndex; i++) {
                    this._config[i + '_name'] = this._config[(i + 1) + '_name'];
                    this._config[i + '_icon'] = this._config[(i + 1) + '_icon'];
                    this._config[i + '_link'] = this._config[(i + 1) + '_link'];
                    this._config[i + '_entity'] = this._config[(i + 1) + '_entity'];
                    this._config[i + '_pir_sensor'] = this._config[(i + 1) + '_pir_sensor'];
                }
            
                // Removing fields of the last button
                delete this._config[this.buttonIndex + '_name'];
                delete this._config[this.buttonIndex + '_icon'];
                delete this._config[this.buttonIndex + '_link'];
                delete this._config[this.buttonIndex + '_entity'];
                delete this._config[this.buttonIndex + '_pir_sensor'];
            
                // Updating index of the last button
                this.buttonIndex--;
            
                fireEvent(this, "config-changed", {
                    config: this._config
                });
            }
            
            // Working for sliders (setting to 0) but add more issues, to be fixed
            // _valueChanged(ev) {
            //     if (!this._config || !this.hass) {
            //         return;
            //     }
            //     const target = ev.target;
            //     const detail = ev.detail;
            //     if (target.configValue) {
            //         this._config = {
            //             ...this._config,
            //             [target.configValue]: target.value !== undefined ? target.value : (target.checked !== undefined ? target.checked : detail.value),
            //         }
            //     }
            //     fireEvent(this, "config-changed", {
            //         config: this._config
            //     });
            // }
            
            _valueChanged(ev) {
                if (!this._config || !this.hass) {
                    return;
                }
                const target = ev.target;
                const detail = ev.detail;
                if (target.configValue) {
                    if (target.type === 'ha-switch') {
                        this._config = {
                            ...this._config,
                            [target.configValue]: target.checked,
                        }
                    } else {
                        this._config = {
                            ...this._config,
                            [target.configValue]: target.checked !== undefined || !detail.value ? target.value || target.checked : target.checked || detail.value,
                        }
                    }
                }
                fireEvent(this, "config-changed", {
                    config: this._config
                });
            }

            static get styles() {
                return css`
              div {
                display: grid;
                grid-gap: 12px;
              }
              #add-button {
                height: 32px;
                border-radius: 16px;
                border: none;
                background-color: var(--accent-color);
              }
              .button-header {
                height: auto;
                width: 100%;
                display: inline-flex;
                align-items: center;

              }
              .button-number {
                display: inline-flex;
                width: auto;
              }
              .remove-button {
                display: inline-flex;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                text-align: center;
                line-height: 24px;
                vertical-align: middle;
                cursor: pointer;
              }
            `;
            }
        }

        customElements.define("bubble-pop-up-editor", BubblePopUpEditor);
        observer.disconnect();
    }
});

bubblePopUpEditor.observe(document, { childList: true, subtree: true });
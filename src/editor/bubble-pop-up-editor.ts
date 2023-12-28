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
                    this.listsUpdated = true;
                }

                const allEntitiesList = this.allEntitiesList;
                const lightList = this.lightList;
                const cardTypeList = this.cardTypeList;
                const buttonTypeList = this.buttonTypeList;

                return html`
                    <div class="card-config">
                        <h3>Pop-up 
                            <span style="
                                font-size: 10px !important;
                                color: #fff;
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
                        <ha-alert alert-type="info">Set ‘Background blur’ to 0 if your pop-up animations are rendering at low FPS.</ha-alert>
                        <ha-alert alert-type="info">You can't set a value to 0 with the sliders for now, just change it to 0 in the text field if you need to.</ha-alert>
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
            
            makeVersion() {
                return html`
                    <h4 style="
                        font-size: 12px !important;
                        color: #fff;
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
            `;
            }
        }

        customElements.define("bubble-pop-up-editor", BubblePopUpEditor);
        observer.disconnect();
    }
});

bubblePopUpEditor.observe(document, { childList: true, subtree: true });
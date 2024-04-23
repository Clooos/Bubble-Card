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
                return this._config.width_desktop || '500px';
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
                                Optimized mode
                            </span>
                        </h3>
                        <ha-alert alert-type="warning">Since the recent updates of Home Assistant, the optimized mode has become obsolete. The regular mode is now exactly as efficient, which greatly simplifies things for both new and current users. So if you are on the latest Home Assistant release you can remove it from your extra modules and in your pop-ups in YAML just replace <code>custom:bubble-pop-up</code> with <code>custom:bubble-card</code> then add <code>card_type: pop-up</code>. This mode will be removed around the v2.0.0.</b></ha-alert>
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
                            type="number"
                            inputMode="numeric"
                            min="0"
                            step="1000"
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
                        <ha-textfield
                            label="Optional - Background opacity (0-100 range)"
                            type="number"
                            inputMode="numeric"
                            min="0"
                            max="100"
                            .value="${this._bg_opacity}"
                            .configValue="${"bg_opacity"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Background blur (0-100 range)"
                            type="number"
                            inputMode="numeric"
                            min="0"
                            max="100"
                            .value="${this._bg_blur}"
                            .configValue="${"bg_blur"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Shadow opacity (0-100 range)"
                            type="number"
                            inputMode="numeric"
                            min="0"
                            max="100"
                            .configValue="${"shadow_opacity"}"
                            .value="${this._shadow_opacity}""
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-alert alert-type="info">Set ‘Background blur’ to 0 if your pop-up animations are rendering at low FPS.</ha-alert>
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
            
            _valueChanged(ev) {
                if (!this._config || !this.hass) {
                    return;
                }
                const target = ev.target;
                const detail = ev.detail;
                let rawValue = typeof target.value === 'string' ? target.value.replace(",", ".") : target.value;
                let value;

                if (typeof rawValue === 'string' && (rawValue.endsWith(".") || rawValue === "-")) {
                    return;
                }

                if (target.configValue) {
                    if (target.type === 'ha-switch') {
                        value = target.checked;
                    } else {
                        if (rawValue !== "") {
                            if (!isNaN(parseFloat(rawValue)) && isFinite(rawValue)) {
                                value = parseFloat(rawValue);
                                if (isNaN(value)) {
                                    value = undefined;
                                }
                            } else {
                                value = rawValue;
                            }
                        }
                        value = value !== undefined ? value : (target.checked !== undefined || !detail.value ? target.value || target.checked : target.checked || detail.value);
                    }

                    // Check if the value has changed
                    if (this._config[target.configValue] !== value) {
                        this._config = {
                            ...this._config,
                            [target.configValue]: value,
                        };

                        fireEvent(this, "config-changed", {
                            config: this._config
                        });
                    }
                }

                // Handle ha-combo-box value changes
                if (target.tagName === 'HA-COMBO-BOX') {
                    if (detail.value) {
                        this._config = {
                            ...this._config,
                            [target.configValue]: detail.value,
                        };
                    } else {
                        // Handle the case when detail.value is undefined or false
                        this._config = {
                            ...this._config,
                            [target.configValue]: undefined,
                        };
                    }

                    fireEvent(this, "config-changed", {
                        config: this._config
                    });
                }
            }

            static get styles() {
                return css`
                  div {
                    display: grid;
                    grid-gap: 12px;
                  }
                  code {
                    background: var(--accent-color);
                    background-blend-mode: darken;
                    padding: 2px 4px;
                    border-radius: 6px;
                  }
                `;
            }
        }

        customElements.define("bubble-pop-up-editor", BubblePopUpEditor);
        observer.disconnect();
    }
});

bubblePopUpEditor.observe(document, { childList: true, subtree: true });
import { version } from '../var/version.ts';
import { 
    fireEvent,
    isStateOn,
    getState,
    getAttribute,
    getIcon 
} from '../tools/utils.ts';

let LitElement, html, css;

export function createBubbleCardEditor() {
    if (!LitElement) {
        try {
            LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
            html = LitElement.prototype?.html;
            css = LitElement.prototype?.css;
        } catch (error) {
            console.error(error.message);
            return;
        }
    }

    class BubbleCardEditor extends LitElement {

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

        get _card_type() {
            return this._config.card_type || '';
        }

        get _button_type() {
            return this._config.button_type || 
                   (this._config.card_type === 'pop-up' ? '' : 'switch');
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
            return this._config.bg_color || '';
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
        
        get _rise_animation() {
            return this._config.rise_animation !== undefined ? this._config.rise_animation : true;
        }
        
        get _auto_close() {
            return this._config.auto_close || '';
        }
        
        get _close_on_click() {
            return this._config.close_on_click || false;
        }

        get _close_by_clicking_outside() {
            return this._config.close_by_clicking_outside ?? true;
        }

        get _background_update() {
            return this._config.background_update || false;
        }

        get _icon_open() {
            return this._config.icon_open || '';
        }

        get _icon_close() {
            return this._config.icon_close || '';
        }

        get _icon_down() {
            return this._config.icon_down || '';
        }

        get _icon_up() {
            return this._config.icon_up || '';
        }

        get _open_service() {
            return this._config.open_service || 'cover.open_cover';
        }

        get _close_service() {
            return this._config.close_service || 'cover.close_cover';
        }

        get _stop_service() {
            return this._config.stop_service || 'cover.stop_cover';
        }

        get _auto_order() {
            return this._config.auto_order || false;
        }

        get _highlight_current_view() {
            return this._config.highlight_current_view || false;
        }
        
        get _show_state() {
            const defaultState = this._config.card_type === 'state' ? true : false;
            return this._config.show_state || defaultState;
        }

        get _show_attribute() {
            const defaultState = this._config.card_type === 'state' ? true : false;
            return this._config.show_attribute || defaultState;
        }

        get _show_last_changed() {
            const defaultState = this._config.card_type === 'state' ? true : false;
            return this._config.show_last_changed || this._config.show_last_updated || defaultState;
        }

        get _attribute() {
            return this._config.attribute || false;
        }

        get _hide_backdrop() {
            return this._config.hide_backdrop || false;
        }

        get _hide_gradient() {
            return this._config.hide_gradient || false;
        }

        get _hide_play_pause_button() {
            return this._config.hide?.play_pause_button || false;
        }

        get _hide_next_button() {
            return this._config.hide?.next_button || false;
        }

        get _hide_previous_button() {
            return this._config.hide?.previous_button || false;
        }

        get _hide_volume_button() {
            return this._config.hide?.volume_button || false;
        }

        get _hide_power_button() {
            return this._config.hide?.power_button || false;
        }  

        get _sub_button() {
            return this._config.sub_button || '';
        }

        get _button_action() {
            return this._config.button_action || '';
        }

        get _open_action() {
            return this._config.open_action || '';
        }

        get _close_action() {
            return this._config.close_action || '';
        }

        get _show_header() {
            return this._config.show_header ?? true;
        }

        get _tap_action() {
            return {
                action: this._config.tap_action?.action || "more-info",
                navigation_path: this._config.tap_action?.navigation_path || "",
                url_path: this._config.tap_action?.url_path || "",
                service: this._config.tap_action?.service || "",
                target_entity: this._config.tap_action?.target?.entity_id || "",
                data: this._config.tap_action?.data || ""
            };
        }

        get _double_tap_action() {
            return {
                action: this._config.double_tap_action?.action || "toggle",
                navigation_path: this._config.double_tap_action?.navigation_path || "",
                url_path: this._config.double_tap_action?.url_path || "",
                service: this._config.double_tap_action?.service || "",
                target_entity: this._config.double_tap_action?.target?.entity_id || "",
                data: this._config.double_tap_action?.data || ""
            };
        }

        get _hold_action() {
            return {
                action: this._config.hold_action?.action || "toggle",
                navigation_path: this._config.hold_action?.navigation_path || "",
                url_path: this._config.hold_action?.url_path || "",
                service: this._config.hold_action?.service || "",
                target_entity: this._config.hold_action?.target?.entity_id || "",
                data: this._config.hold_action?.data || ""
            };
        }

        render() {
            if (!this.hass) {
                return html``;
            }

            const root = document.querySelector("body > home-assistant").shadowRoot;
            const dialog = root.querySelector("hui-dialog-edit-card").shadowRoot;
            const previewElement = dialog.querySelector("ha-dialog > div.content > div.element-preview");

            // Change the default preview element to be sticky
            if (previewElement.style.position !== 'sticky') {
                previewElement.style.position = 'sticky';
                previewElement.style.top = '0';
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

                this.mediaPlayerList = Object.keys(this.hass.states).filter(
                    (eid) => eid.substr(0, eid.indexOf(".")) === "media_player"
                ).map(formateList);

                this.inputSelectList = Object.keys(this.hass.states)
                    .filter((eid) => {
                        const domain = eid.substr(0, eid.indexOf("."));
                        return domain === "input_select" || domain === "select";
                    }).map(formateList);

                this.attributeList = Object.keys(this.hass.states[this._entity]?.attributes || {}).map((attributeName) => {
                    let entity = this.hass.states[this._entity];
                    let formattedName = this.hass.formatEntityAttributeName(entity, attributeName);
                    return { label: formattedName, value: attributeName };
                });

                this.cardTypeList = [{
                        'label': 'Button (Switch, slider, ...)',
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
                        'label': 'Media player',
                        'value': 'media-player'
                    },
                    {
                        'label': 'Pop-up',
                        'value': 'pop-up'
                    },
                    {
                        'label': 'Select',
                        'value': 'select'
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

                this.tapActionTypeList = [{
                        'label': 'More info',
                        'value': 'more-info'
                    },
                    {
                        'label': 'Toggle',
                        'value': 'toggle'
                    },
                    {
                        'label': 'Navigate',
                        'value': 'navigate'
                    },
                    {
                        'label': 'URL',
                        'value': 'url'
                    },
                    {
                        'label': 'Call service',
                        'value': 'call-service'
                    },
                    {
                        'label': 'Assist',
                        'value': 'assist'
                    },
                    {
                        'label': 'No action',
                        'value': 'none'
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
            const nameButton = this._config.button_type === 'name';

            if (this._config.card_type === 'pop-up') {
                return html`
                    <div class="card-config">
                        ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                        <ha-textfield
                            label="Hash (e.g. #kitchen)"
                            .value="${this._hash}"
                            .configValue="${"hash"}"
                            @input="${this._valueChanged}"
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
                                        .checked=${this._show_header}
                                        .configValue="${"show_header"}"
                                        @change=${this._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Optional - Show header</label> 
                                    </div>
                                </ha-formfield>
                                <ha-alert alert-type="info">You can completely hide the pop-up header, including the close button. To close it when hidden, either make a long swipe within the pop-up or click outside of it.</ha-alert>
                                <div style="${!this._show_header ? 'display: none;' : ''}">
                                    <hr />
                                    ${this.makeDropdown("Button type", "button_type", buttonTypeList)}
                                    ${this.makeDropdown("Optional - Entity", "entity", allEntitiesList, nameButton)}               
                                    <ha-textfield
                                        label="Optional - Name"
                                        .value="${this._name}"
                                        .configValue="${"name"}"
                                        @input="${this._valueChanged}"
                                    ></ha-textfield>
                                    ${this.makeDropdown("Optional - Icon", "icon")}
                                    ${this.makeShowState()}
                                    <hr />
                                    <ha-expansion-panel outlined>
                                        <h4 slot="header">
                                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                                          Tap action on icon
                                        </h4>
                                        <div class="content">
                                            ${this.makeTapActionPanel("Tap action")}
                                            ${this.makeTapActionPanel("Double tap action")}
                                            ${this.makeTapActionPanel("Hold action")}
                                        </div>
                                    </ha-expansion-panel>
                                    <ha-expansion-panel outlined style="display: ${this._config.button_type === 'slider' ? 'none' : ''}">
                                        <h4 slot="header">
                                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                                          Tap action on button
                                        </h4>
                                        <div class="content">
                                            ${this.makeTapActionPanel("Tap action", this._button_action, this._config.button_type !== 'name' ? (this._config.button_type === 'state' ? 'more-info' : 'toggle') : 'none', 'button_action')}
                                            ${this.makeTapActionPanel("Double tap action", this._button_action, this._config.button_type !== 'name' ? (this._config.button_type === 'state' ? 'more-info' : 'toggle') : 'none', 'button_action')}
                                            ${this.makeTapActionPanel("Hold action", this._button_action, this._config.button_type !== 'name' ? 'more-info' : 'none', 'button_action')}
                                        </div>
                                    </ha-expansion-panel>
                                    ${this.makeSubButtonPanel()}
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
                                    .value="${this._auto_close}"
                                    .configValue="${"auto_close"}"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                <ha-formfield .label="Optional - Close the pop-up by clicking outside of it (a refresh is needed)">
                                    <ha-switch
                                        aria-label="Optional - Close the pop-up by clicking outside of it (a refresh is needed)"
                                        .checked=${this._close_by_clicking_outside}
                                        .configValue="${"close_by_clicking_outside"}"
                                        @change=${this._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Optional - Close the pop-up by clicking outside of it (a refresh is needed)</label> 
                                    </div>
                                </ha-formfield>
                                <ha-formfield .label="Optional - Close the pop-up after any click or tap">
                                    <ha-switch
                                        aria-label="Optional - Close the pop-up after any click or tap"
                                        .checked=${this._close_on_click}
                                        .configValue="${"close_on_click"}"
                                        @change=${this._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Optional - Close the pop-up after any click or tap</label> 
                                    </div>
                                </ha-formfield>
                                <ha-formfield .label="Optional - Update cards in background (not recommended)">
                                    <ha-switch
                                        aria-label="Optional - Update cards in background (not recommended)"
                                        .checked=${this._background_update}
                                        .configValue="${"background_update"}"
                                        @change=${this._valueChanged}
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
                                ${this.makeDropdown("Optional - Entity to open the pop-up based on its state", "trigger_entity", allEntitiesList)}
                                <ha-textfield
                                    label="Optional - State to open the pop-up"
                                    .value="${this._trigger_state}"
                                    .configValue="${"trigger_state"}"
                                    @input="${this._valueChanged}"
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
                                <ha-alert alert-type="info">This allows you to open this pop-up based on the state of any entity, for example you can open a "Security" pop-up with a camera when a person is in front of your house. You can also create a toggle helper (input_boolean) and trigger its opening/closing in an automation.</ha-alert>
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Pop-up open/close action
                            </h4>
                            <div class="content">
                                ${this.makeTapActionPanel("Open action", this._config, 'none')}
                                ${this.makeTapActionPanel("Close action", this._config, 'none')}
                                <ha-alert alert-type="info">This allows you to trigger an action on pop-up open/close.</ha-alert>
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:palette"></ha-icon>
                              Styling options
                            </h4>
                            <div class="content">
                                ${this.makeLayoutOptions()}
                                <ha-expansion-panel outlined>
                                    <h4 slot="header">
                                      <ha-icon icon="mdi:palette"></ha-icon>
                                      Pop-up styling
                                    </h4>
                                    <div class="content"> 
                                        <ha-textfield
                                            label="Optional - Margin (fix centering on some themes) (e.g. 13px)"
                                            .value="${this._margin}"
                                            .configValue="${"margin"}"
                                            @input="${this._valueChanged}"
                                        ></ha-textfield>
                                        <ha-textfield
                                            label="Optional - Top margin on mobile (e.g. -56px if your header is hidden)"
                                            .value="${this._margin_top_mobile}"
                                            .configValue="${"margin_top_mobile"}"
                                            @input="${this._valueChanged}"
                                        ></ha-textfield>
                                        <ha-textfield
                                            label="Optional - Top margin on desktop (e.g. 50vh for an half sized pop-up)"
                                            .value="${this._margin_top_desktop}"
                                            .configValue="${"margin_top_desktop"}"
                                            @input="${this._valueChanged}"
                                        ></ha-textfield>
                                        <ha-textfield
                                            label="Optional - Width on desktop (100% by default on mobile)"
                                            .value="${this._width_desktop}"
                                            .configValue="${"width_desktop"}"
                                            @input="${this._valueChanged}"
                                        ></ha-textfield>
                                        <ha-textfield
                                            label="Optional - Background color (any var, hex, rgb or rgba value)"
                                            .value="${this._bg_color}"
                                            .configValue="${"bg_color"}"
                                            @input="${this._valueChanged}"
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
                                        ></ha-textfield>
                                        <ha-textfield
                                            label="Optional - Background/Backdrop blur (0-100 range)"
                                            type="number"
                                            inputMode="numeric"
                                            min="0"
                                            max="100"
                                            .value="${this._bg_blur}"
                                            .configValue="${"bg_blur"}"
                                            @input="${this._valueChanged}"
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
                                        ></ha-textfield>
                                        <ha-formfield .label="Optional - Hide pop-up backdrop (a refresh is needed)">
                                            <ha-switch
                                                aria-label="Optional - Hide pop-up backdrop (a refresh is needed)"
                                                .checked=${this._hide_backdrop}
                                                .configValue="${"hide_backdrop"}"
                                                @change=${this._valueChanged}
                                            ></ha-switch>
                                            <div class="mdc-form-field">
                                                <label class="mdc-label">Optional - Hide pop-up backdrop (a refresh is needed)</label> 
                                            </div>
                                        </ha-formfield>
                                        <ha-alert alert-type="info">Set this toggle to true on the first pop-up of your main dashboard to disable the backdrop on all pop-ups. <b>Disable this feature if you notice a slowdown when opening pop-ups.</b></ha-alert>
                                    </div>
                                </ha-expansion-panel>
                                ${this.makeStyleEditor()}
                            </div>
                        </ha-expansion-panel>
                        <ha-alert alert-type="info">
                            This card allows you to convert any vertical stack into a pop-up. Each pop-up is hidden by default and can be opened by targeting its link (e.g., '#pop-up-name'), with <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#example">any card</a> that supports the <code>navigate</code> action, or with the <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#horizontal-buttons-stack">horizontal buttons stack</a> that is included.
                            <br><br><b>Important:</b> This card must be placed within a <a style="color: var(--text-primary-color)" href="https://www.home-assistant.io/dashboards/vertical-stack/">vertical stack</a> card at the topmost position to function properly. To avoid misalignment with your view, place vertical stacks/pop-ups after all other dashboard cards. In a section view (recommended), you can place them anywhere. It should be called from the same view to work.
                        </ha-alert>
                        <ha-alert alert-type="warning">Since v1.7.0, the optimized mode has been removed to ensure stability and to simplify updates for everyone. However, if your pop-up content still appears on the screen during page loading, <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#pop-up-initialization-fix">you can install this similar fix.</a></ha-alert>
                        ${this.makeVersion()}
                  </div>
                `;
            } else if (this._config.card_type === 'button') {
                return html`
                    <div class="card-config">
                        ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                        ${this.makeDropdown("Button type", "button_type", buttonTypeList)}
                        ${this.makeDropdown(this._button_type !== 'slider' ? "Entity (toggle)" : "Entity (light, media_player, cover or input_number)", "entity", allEntitiesList, nameButton)}
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:cog"></ha-icon>
                              Button settings
                            </h4>
                            <div class="content">                   
                                <ha-textfield
                                    label="Optional - Name"
                                    .value="${this._name}"
                                    .configValue="${"name"}"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                ${this.makeDropdown("Optional - Icon", "icon")}
                                ${this.makeShowState()}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Tap action on icon
                            </h4>
                            <div class="content">
                                ${this.makeTapActionPanel("Tap action")}
                                ${this.makeTapActionPanel("Double tap action")}
                                ${this.makeTapActionPanel("Hold action")}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined style="display: ${this._config.button_type === 'slider' ? 'none' : ''}">
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Tap action on button
                            </h4>
                            <div class="content">
                                ${this.makeTapActionPanel("Tap action", this._button_action, this._config.button_type !== 'name' ? (this._config.button_type === 'state' ? 'more-info' : 'toggle') : 'none', 'button_action')}
                                ${this.makeTapActionPanel("Double tap action", this._button_action, this._config.button_type !== 'name' ? (this._config.button_type === 'state' ? 'more-info' : 'toggle') : 'none', 'button_action')}
                                ${this.makeTapActionPanel("Hold action", this._button_action, this._config.button_type !== 'name' ? 'more-info' : 'none', 'button_action')}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:palette"></ha-icon>
                              Styling options
                            </h4>
                            <div class="content">
                                ${this.makeLayoutOptions()}
                                ${this.makeStyleEditor()}
                            </div>
                        </ha-expansion-panel>
                        ${this.makeSubButtonPanel()}
                        <ha-alert alert-type="info">This card allows you to control your entities. ${this._config.button_type === 'slider' ? 'Supported entities: Light (brightness), media player (volume), cover (position), fan (percentage), climate (temperature), input number and number (value). To access color / control of an entity, simply tap on the icon.' : ''}</ha-alert>
                        ${this.makeVersion()}
                    </div>
                `;
            } else if (this._config.card_type === 'separator') {
                return html`
                    <div class="card-config">
                        ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                        <ha-textfield
                            label="Name"
                            .value="${this._name}"
                            .configValue="${"name"}"
                            @input="${this._valueChanged}"
                        ></ha-textfield>
                        ${this.makeDropdown("Icon", "icon")}
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:palette"></ha-icon>
                              Styling options
                            </h4>
                            <div class="content">
                                ${this.makeLayoutOptions()}
                                ${this.makeStyleEditor()}
                            </div>
                        </ha-expansion-panel>
                        ${this.makeSubButtonPanel()}
                        <ha-alert alert-type="info">This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...</ha-alert>
                        ${this.makeVersion()}
                  </div>
                `;
            } else if (this._config.card_type === 'horizontal-buttons-stack') {
                if (!this.buttonAdded) {
                    this.buttonAdded = true;
                    this.buttonIndex = 0;

                    while (this._config[(this.buttonIndex + 1) + '_link']) {
                        this.buttonIndex++;
                    }
                }

                function addButton() {
                    this.buttonIndex++;
                    this.requestUpdate();
                }

                return html`
                    <div class="card-config">
                        ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                        <div id="buttons-container">
                            ${this.makeButton()}
                        </div>
                        <button class="icon-button" @click="${addButton}">
                            <ha-icon icon="mdi:plus"></ha-icon>
                            New button
                        </button>
                        <ha-formfield .label="Auto order">
                            <ha-switch
                                aria-label="Toggle auto order"
                                .checked=${this._auto_order}
                                .configValue="${"auto_order"}"
                                @change=${this._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Auto order (Presence/occupancy sensors needed)</label> 
                            </div>
                        </ha-formfield>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:palette"></ha-icon>
                              Styling options
                            </h4>
                            <div class="content">  
                                <ha-expansion-panel outlined>
                                    <h4 slot="header">
                                      <ha-icon icon="mdi:palette"></ha-icon>
                                      Horizontal buttons stack styling
                                    </h4>
                                    <div class="content"> 
                                        <ha-textfield
                                            label="Optional - Margin (fix centering on some themes) (e.g. 13px)"
                                            .value="${this._margin}"
                                            .configValue="${"margin"}"
                                            @input="${this._valueChanged}"
                                        ></ha-textfield>
                                        <ha-textfield
                                            label="Optional - Width on desktop (100% by default on mobile)"
                                            .value="${this._width_desktop}"
                                            .configValue="${"width_desktop"}"
                                            @input="${this._valueChanged}"
                                        ></ha-textfield>
                                        <ha-formfield .label="Optional - Rise animation (Displays an animation once the page has loaded)">
                                            <ha-switch
                                                aria-label="Optional - Rise animation (Displays an animation once the page has loaded)"
                                                .checked=${this._rise_animation}
                                                .configValue="${"rise_animation"}"
                                                @change=${this._valueChanged}
                                            ></ha-switch>
                                            <div class="mdc-form-field">
                                                <label class="mdc-label">Optional - Rise animation (Displays an animation once the page has loaded)</label> 
                                            </div>
                                        </ha-formfield>
                                        <ha-formfield .label="Optional - Highlight current hash / view">
                                            <ha-switch
                                                aria-label="Optional - Highlight current hash / view"
                                                .checked=${this._highlight_current_view}
                                                .configValue="${"highlight_current_view"}"
                                                @change=${this._valueChanged}
                                            ></ha-switch>
                                            <div class="mdc-form-field">
                                                <label class="mdc-label">Optional - Highlight current hash / view</label> 
                                            </div>
                                        </ha-formfield>
                                        <ha-formfield .label="Optional - Hide gradient">
                                            <ha-switch
                                                aria-label="Optional - Hide gradient"
                                                .checked=${this._hide_gradient}
                                                .configValue="${"hide_gradient"}"
                                                @change=${this._valueChanged}
                                            ></ha-switch>
                                            <div class="mdc-form-field">
                                                <label class="mdc-label">Optional - Hide gradient</label> 
                                            </div>
                                        </ha-formfield>
                                    </div>
                                </ha-expansion-panel>
                                ${this.makeStyleEditor()}
                            </div>
                        </ha-expansion-panel>
                        <ha-alert alert-type="info">This card is the companion to the pop-up card, allowing you to open the corresponding pop-ups. It also allows you to open any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.</ha-alert>
                        ${this.makeVersion()}
                    </div>
                `;
            } else if (this._config.card_type === 'cover') {
                return html`
                    <div class="card-config">
                        ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                        ${this.makeDropdown("Entity", "entity", coverList)}
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:cog"></ha-icon>
                              Cover settings
                            </h4>
                            <div class="content"> 
                                <ha-textfield
                                    label="Optional - Name"
                                    .value="${this._name || ''}"
                                    .configValue="${"name"}"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                ${this.makeDropdown("Optional - Open icon", "icon_open")}
                                ${this.makeDropdown("Optional - Closed icon", "icon_close")}
                                ${this.makeShowState()}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:window-shutter-cog"></ha-icon>
                              Custom services
                            </h4>
                            <div class="content"> 
                                <ha-textfield
                                    label="Optional - Open service (cover.open_cover by default)"
                                    .value="${this._open_service}"
                                    .configValue="${"open_service"}"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                <ha-textfield
                                    label="Optional - Stop service (cover.stop_cover by default)"
                                    .value="${this._stop_service}"
                                    .configValue="${"stop_service"}"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                <ha-textfield
                                    label="Optional - Close service (cover.close_cover by default)"
                                    .value="${this._close_service}"
                                    .configValue="${"close_service"}"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:palette"></ha-icon>
                              Styling options
                            </h4>
                            <div class="content"> 
                                ${this.makeLayoutOptions()}
                                <ha-expansion-panel outlined>
                                    <h4 slot="header">
                                      <ha-icon icon="mdi:palette"></ha-icon>
                                      Cover styling
                                    </h4>
                                    <div class="content"> 
                                        ${this.makeDropdown("Optional - Arrow down icon", "icon_down")}
                                        ${this.makeDropdown("Optional - Arrow up icon", "icon_up")}
                                    </div>
                                </ha-expansion-panel>
                                ${this.makeStyleEditor()}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Tap action on icon
                            </h4>
                            <div class="content">
                                ${this.makeTapActionPanel("Tap action")}
                                ${this.makeTapActionPanel("Double tap action")}
                                ${this.makeTapActionPanel("Hold action")}
                            </div>
                        </ha-expansion-panel>
                        ${this.makeSubButtonPanel()}
                        <ha-alert alert-type="info">This card allows you to control your covers.</ha-alert>
                        ${this.makeVersion()}
                    </div>
                `;
            } else if (this._config.card_type === 'media-player') {
                return html`
                    <div class="card-config">
                        ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                        ${this.makeDropdown("Entity", "entity", this.mediaPlayerList)}
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:cog"></ha-icon>
                              Media player settings
                            </h4>
                            <div class="content"> 
                                <ha-textfield
                                    label="Optional - Name"
                                    .value="${this._name || ''}"
                                    .configValue="${"name"}"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                ${this.makeDropdown("Optional - Icon", "icon")}
                                ${this.makeShowState()}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:eye-off"></ha-icon>
                              Display/hide buttons
                            </h4>
                            <div class="content"> 
                                <ha-formfield .label="Optional - Hide play/pause button">
                                    <ha-switch
                                        aria-label="Optional - Hide play/pause button"
                                        .checked=${this._hide_play_pause_button}
                                        .configValue="${"hide.play_pause_button"}"
                                        @change=${this._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Optional - Hide play/pause button</label> 
                                    </div>
                                </ha-formfield>
                                <ha-formfield .label="Optional - Hide volume button">
                                    <ha-switch
                                        aria-label="Optional - Hide volume button"
                                        .checked=${this._hide_volume_button}
                                        .configValue="${"hide.volume_button"}"
                                        @change=${this._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Optional - Hide volume button</label>
                                    </div>
                                </ha-formfield>
                                <ha-formfield .label="Optional - Hide next button">
                                    <ha-switch
                                        aria-label="Optional - Hide next button"
                                        .checked=${this._hide_next_button}
                                        .configValue="${"hide.next_button"}"
                                        @change=${this._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Optional - Hide next button</label>
                                    </div>
                                </ha-formfield>
                                <ha-formfield .label="Optional - Hide previous button">
                                    <ha-switch
                                        aria-label="Optional - Hide previous button"
                                        .checked=${this._hide_previous_button}
                                        .configValue="${"hide.previous_button"}"
                                        @change=${this._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Optional - Hide previous button</label>
                                    </div>
                                </ha-formfield>
                                <ha-formfield .label="Optional - Hide power button">
                                    <ha-switch
                                        aria-label="Optional - Hide power button"
                                        .checked=${this._hide_power_button}
                                        .configValue="${"hide.power_button"}"
                                        @change=${this._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Optional - Hide power button</label>
                                    </div>
                                </ha-formfield>
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:palette"></ha-icon>
                              Styling options
                            </h4>
                            <div class="content">
                                ${this.makeLayoutOptions()}
                                ${this.makeStyleEditor()}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Tap action on icon
                            </h4>
                            <div class="content">
                                ${this.makeTapActionPanel("Tap action")}
                                ${this.makeTapActionPanel("Double tap action")}
                                ${this.makeTapActionPanel("Hold action")}
                            </div>
                        </ha-expansion-panel>
                        ${this.makeSubButtonPanel()}
                        <ha-alert alert-type="info">This card allows you to control a media player. You can tap on the icon to get more control.</ha-alert>
                        ${this.makeVersion()}
                    </div>
                `;
            } else if (this._config.card_type === 'empty-column') {
                return html`
                    <div class="card-config">
                        ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:palette"></ha-icon>
                              Styling options
                            </h4>
                            <div class="content">
                                ${this.makeLayoutOptions()}
                            </div>
                        </ha-expansion-panel>
                        <ha-alert alert-type="info">Just an empty card to fill any empty column.</ha-alert>
                        ${this.makeVersion()}
                    </div>
                `;
            } else if (this._config.card_type === 'select') {
                return html`
                    <div class="card-config">
                        ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                        ${this.makeDropdown("Entity (input_select or select)", "entity", this.inputSelectList)}
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:cog"></ha-icon>
                              Button settings
                            </h4>
                            <div class="content">                   
                                <ha-textfield
                                    label="Optional - Name"
                                    .value="${this._name}"
                                    .configValue="${"name"}"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                ${this.makeDropdown("Optional - Icon", "icon")}
                                ${this.makeShowState()}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Tap action on icon
                            </h4>
                            <div class="content">
                                ${this.makeTapActionPanel("Tap action")}
                                ${this.makeTapActionPanel("Double tap action")}
                                ${this.makeTapActionPanel("Hold action")}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:palette"></ha-icon>
                              Styling options
                            </h4>
                            <div class="content">
                                ${this.makeLayoutOptions()}
                                ${this.makeStyleEditor()}
                            </div>
                        </ha-expansion-panel>
                        ${this.makeSubButtonPanel()}
                        <ha-alert alert-type="info">This card allows you to have a select menu for your <code>input_select</code> and <code>input</code> entities.</ha-alert>
                        ${this.makeVersion()}
                    </div>
                `;
            } else if (!this._config.card_type) {
                return html`
                    <div class="card-config">
                        ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                        <ha-alert alert-type="info">You need to add a card type first. Please not that in some cases, a page refresh might be needed after exiting the editor.</ha-alert>
                        <img style="width: 100%; height: auto; border-radius: 24px;" src="https://raw.githubusercontent.com/Clooos/Bubble-Card/main/.github/bubble-card.gif">
                        <p>The <b>Bubble Card ${version}</b> changelog is available <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${version}"><b>here</b></a>.
                        <hr />
                        <p>If you have an issue or a question you can find more details on my GitHub page.</p>
                        <a href="https://github.com/Clooos/Bubble-Card"><img src="https://img.shields.io/badge/GitHub-Documentation-blue?logo=github"></a>
                        <hr />
                        <p>I dedicate most of my spare time to making this project the best it can be. So if you appreciate my work, any donation would be a great way to show your support.</p>
                        <div style="display: inline-block;">
                            <a href="https://www.buymeacoffee.com/clooos"><img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?logo=buy-me-a-coffee"></a> 
                            <a href="https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR"><img src="https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal"></img></a>
                        </div>
                        <p style="margin-top: 0;">Thank you! 🍻</p>
                        ${this.makeVersion()}
                    </div>
                `;
            }
        }

        makeLayoutOptions() {
            return html`
                <ha-combo-box
                    label="${this._config.card_type === "pop-up" ? 'Header card layout' : 'Card layout'}"
                    .value="${this._config.card_layout || 'normal'}"
                    .configValue="${"card_layout"}"
                    .items="${[{label: 'Normal', value: 'normal'}, {label: 'Large (Optimized for sections)', value: 'large'}, {label: 'Large with 2 sub-buttons rows (Optimized for sections)', value: 'large-2-rows'}]}"
                    @value-changed="${this._valueChanged}"
                ></ha-combo-box>
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:table"></ha-icon>
                        Layout options for sections
                    </h4>
                    <div class="content">
                        <ha-combo-box
                            label="Columns"
                            .value="${this._config.columns}"
                            .configValue="${"columns"}"
                            .items="${[{label: 'Auto', value: null}, {label: "1/4", value: 1}, {label: "2/4", value: 2}, {label: "3/4", value: 3}, {label: "4/4", value: 4}]}"
                            @value-changed="${this._valueChanged}"
                        ></ha-combo-box>
                        <ha-combo-box
                            label="Rows"
                            .value="${this._config.rows}"
                            .configValue="${"rows"}"
                            .items="${[{label: 'Auto', value: null}, {label: "1/4", value: 1}, {label: "2/4", value: 2}, {label: "3/4", value: 3}, {label: "4/4", value: 4}]}"
                            @value-changed="${this._valueChanged}"
                        ></ha-combo-box>
                    </div>
                </ha-expansion-panel>
            `;
        }

        makeShowState(context = this._config, config = '', array = false, index) {
            const entity = context?.entity ?? this._config.entity ?? '';
            const nameButton = this._config.button_type === 'name';

            const isSelect = entity?.startsWith("input_select") || entity?.startsWith("select");

            const attributeList = Object.keys(this.hass.states[entity]?.attributes || {}).map((attributeName) => {
                let state = this.hass.states[entity];
                let formattedName = this.hass.formatEntityAttributeName(state, attributeName);
                return { label: formattedName, value: attributeName };
            });

            return html`
                ${array !== 'sub_button' ? html`
                    <ha-formfield .label="Optional - Text scrolling effect">
                        <ha-switch
                            aria-label="Optional - Text scrolling effect"
                            .checked=${context?.scrolling_effect ?? true}
                            .configValue="${config + "scrolling_effect"}"
                            @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { scrolling_effect: ev.target.checked }, array)}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Text scrolling effect</label> 
                        </div>
                    </ha-formfield>
                ` : ''}
                ${array === 'sub_button' ? html`
                    <ha-formfield .label="Optional - Show background">
                        <ha-switch
                            aria-label="Optional - Show background when entity is on"
                            .checked=${context?.show_background ?? true}
                            @change="${(ev) => this._arrayValueChange(index, { show_background: ev.target.checked }, array)}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Show background when entity is on</label> 
                        </div>
                    </ha-formfield>
                ` : ''}
                <ha-formfield .label="Optional - Show icon">
                    <ha-switch
                        aria-label="Optional - Show icon"
                        .checked=${context?.show_icon ?? true}
                        .configValue="${config + "show_icon"}"
                        @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_icon: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show icon</label> 
                    </div>
                </ha-formfield>
                ${array !== 'sub_button' ? html`
                    <ha-formfield .label="Optional - Prioritize icon over entity picture">
                        <ha-switch
                            aria-label="Optional - Prioritize icon over entity picture"
                            .checked=${context?.force_icon ?? false}
                            .configValue="${config + "force_icon"}"
                            .disabled="${nameButton}"
                            @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { force_icon: ev.target.checked }, array)}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Prioritize icon over entity picture</label> 
                        </div>
                    </ha-formfield>
                ` : ''}
                <ha-formfield .label="Optional - Show name">
                    <ha-switch
                        aria-label="Optional - Show name"
                        .checked=${context?.show_name ?? array !== 'sub_button' ? true : false}
                        .configValue="${config + "show_name"}"
                        @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_name: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show name</label> 
                    </div>
                </ha-formfield>
                <ha-formfield .label="Optional - Show entity state">
                    <ha-switch
                        aria-label="Optional - Show entity state"
                        .checked="${context?.show_state ?? context.button_type === 'state'}"
                        .configValue="${config + "show_state"}"
                        .disabled="${nameButton && array !== 'sub_button'}"
                        @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_state: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show entity state</label> 
                    </div>
                </ha-formfield>
                <ha-formfield .label="Optional - Show last changed">
                    <ha-switch
                        aria-label="Optional - Show last changed"
                        .checked=${context?.show_last_changed}
                        .configValue="${config + "show_last_changed"}"
                        .disabled="${nameButton && array !== 'sub_button'}"
                        @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_last_changed: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show last changed</label> 
                    </div>
                </ha-formfield>
                <ha-formfield .label="Optional - Show attribute">
                    <ha-switch
                        aria-label="Optional - Show attribute"
                        .checked=${context?.show_attribute}
                        .configValue="${config + "show_attribute"}"
                        .disabled="${nameButton && array !== 'sub_button'}"
                        @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_attribute: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show attribute</label> 
                    </div>
                </ha-formfield>
                ${context?.show_attribute ? html`
                    <div class="ha-combo-box">
                        <ha-combo-box
                            label="Optional - Attribute to show"
                            .value="${context?.attribute}"
                            .configValue="${config + "attribute"}"
                            .items="${attributeList}"
                            .disabled="${nameButton}"
                            @value-changed="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { attribute: ev.detail.value }, array)}"
                        ></ha-combo-box>
                    </div>
                ` : ''}
                ${array === 'sub_button' && isSelect ? html`
                    <ha-formfield .label="Optional - Show arrow (Select entities only)">
                        <ha-switch
                            aria-label="Optional - Show arrow (Select entities only)"
                            .checked=${context?.show_arrow ?? true}
                            .configValue="${config + "show_arrow"}"
                            @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_arrow: ev.target.checked }, array)}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Show arrow (Select entities only)</label> 
                        </div>
                    </ha-formfield>
                ` : ''}
            `;
        }

        makeDropdown(label, configValue, items, disabled) {
            if (label.includes('icon') || label.includes('Icon')) {
                return html`
                    <div class="ha-icon-picker">
                        <ha-icon-picker
                            label="${label}"
                            .value="${this['_' + configValue]}"
                            .configValue="${configValue}"
                            item-value-path="icon"
                            item-label-path="icon"
                            @value-changed="${this._valueChanged}"
                        ></ha-icon-picker>
                    </div>
                `;
            } else {
                return html`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="${label}"
                        .value="${this['_' + configValue]}"
                        .configValue="${configValue}"
                        .items="${items}"
                        .disabled="${disabled}"
                        @value-changed="${this._valueChanged}"
                    ></ha-combo-box>
                </div>
              `;
            }
        }

        makeTapActionPanel(label, context = this._config, defaultAction, array, index = this._config) {
            const hass = this.hass;
            const icon = label === "Tap action" 
                ? "mdi:gesture-tap" 
                : label === "Double tap action" 
                ? "mdi:gesture-double-tap"
                : label === "Hold action" 
                ? "mdi:gesture-tap-hold"
                : "mdi:gesture-tap";
            const valueType = label === "Tap action" 
                ? context.tap_action
                : label === "Double tap action" 
                ? context.double_tap_action
                : label === "Hold action" 
                ? context.hold_action
                : label === "Open action"
                ? context.open_action
                : context.close_action;
            const configValueType = label === "Tap action" 
                ? "tap_action"
                : label === "Double tap action" 
                ? "double_tap_action"
                : label === "Hold action" 
                ? "hold_action"
                : label === "Open action"
                ? "open_action"
                : "close_action"
            const isDefault = context === this._config;

            if (!defaultAction) {
                defaultAction = isDefault && label === "Tap action" 
                ? this._config.button_type !== "name" ? "more-info" : "none"
                : isDefault 
                ? this._config.button_type !== "name" ? "toggle" : "none"
                : '';
            }

            return html`
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="${icon}"></ha-icon>
                        ${label}
                    </h4>
                    <div class="content"> 
                        <div class="ha-combo-box">
                            <ha-combo-box
                                label="${label}"
                                .value="${valueType?.action ?? defaultAction}"
                                .items="${this.tapActionTypeList}"
                                @value-changed="${(ev) => this._tapActionValueChange(index, { [configValueType]: { action: ev.detail.value } }, array)}"
                            ></ha-combo-box>
                        </div>
                        ${valueType?.action === 'navigate' ? html`
                            <div class="ha-textfield">
                                <ha-textfield
                                    label="Navigation path"
                                    .value="${valueType?.navigation_path ?? ''}"
                                    @input="${(ev) => this._tapActionValueChange(index, { [configValueType]: { navigation_path: ev.target.value } }, array)}"
                                ></ha-textfield>
                            </div>
                        ` : ''}
                        ${valueType?.action === 'url' ? html`
                            <div class="ha-textfield">
                                <ha-textfield
                                    label="URL path"
                                    .value="${valueType?.url_path ?? ''}"
                                    @input="${(ev) => this._tapActionValueChange(index, { [configValueType]: { url_path: ev.target.value } }, array)}"
                                ></ha-textfield>
                            </div>
                        ` : ''}
                        ${valueType?.action === 'call-service' ? html`
                            <div class="ha-textfield">
                                <ha-textfield
                                    label="Service"
                                    .value="${valueType?.service ?? ''}"
                                    @input="${(ev) => this._tapActionValueChange(index, { [configValueType]: { service: ev.target.value } }, array)}"
                                ></ha-textfield>
                            </div>
                            <div class="ha-combo-box">
                                <ha-combo-box
                                    label="Entity"
                                    .value="${valueType?.target?.entity_id}"
                                    .items="${this.allEntitiesList}"
                                    @value-changed="${(ev) => { this._tapActionValueChange(index, { [configValueType]: { target: { entity_id: ev.detail.value } } }, array)}}"
                                ></ha-combo-box>
                            </div>
                        ` : ''}
                        ${valueType?.action === 'call-service' && valueType?.service ? html`
                            <ha-alert alert-type="info">For now, you still need to switch to the YAML editor if you want to add <code>data:</code> to your service.</ha-alert>
                        ` : ''}
                    </div>
                </ha-expansion-panel>
            `;
        }

        makeSubButtonPanel() {
          const subButtonElements = this._config?.sub_button?.map((subButton, index) => {
            if (!subButton) {
              return;
            }

            const subButtonIndex = 'sub_button.' + index + '.';

            const removeSubButton = (event) => {
              event.stopPropagation();
              let subButtons = [...this._config.sub_button];
              subButtons.splice(index, 1);
              this._config.sub_button = subButtons;

              this._valueChanged({ target: { configValue: 'sub_button.' + (index - 1), value: subButton } });
              this.requestUpdate();
            };

            const moveSubButtonLeft = (event) => {
              event.stopPropagation();
              if (index > 0) {
                let subButtons = [...this._config.sub_button];
                [subButtons[index], subButtons[index - 1]] = [subButtons[index - 1], subButtons[index]];
                this._config.sub_button = subButtons;

                this._valueChanged({ target: { configValue: 'sub_button.' + index, value: this._config.sub_button[index] } });
              }
              this.requestUpdate();
            };

            const moveSubButtonRight = (event) => {
              event.stopPropagation();
              if (index < this._config.sub_button.length - 1) {
                let subButtons = [...this._config.sub_button];
                [subButtons[index], subButtons[index + 1]] = [subButtons[index + 1], subButtons[index]];
                this._config.sub_button = subButtons;

                this._valueChanged({ target: { configValue: 'sub_button.' + index, value: this._config.sub_button[index] } });
              }
              this.requestUpdate();
            };

            const entity = subButton.entity ?? this._config.entity;
            const isSelect = entity?.startsWith("input_select") || entity?.startsWith("select");

            return html`
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:border-radius"></ha-icon>
                        ${this._config.sub_button[index] ? "Button " + (index + 1) + (subButton.name ? " - " + subButton.name : "") : "New button"}
                        <button class="icon-button header" @click="${removeSubButton}">
                          <ha-icon icon="mdi:delete"></ha-icon>
                        </button>
                        ${index > 0 ? html`<button class="icon-button header" @click="${moveSubButtonLeft}">
                          <ha-icon icon="mdi:arrow-left"></ha-icon>
                        </button>` : ''}
                        ${index < this._config.sub_button.length - 1 ? html`<button class="icon-button header" @click="${moveSubButtonRight}">
                          <ha-icon icon="mdi:arrow-right"></ha-icon>
                        </button>` : ''}
                    </h4>
                    <div class="content">
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                                <ha-icon icon="mdi:cog"></ha-icon>
                                Button settings
                            </h4>
                            <div class="content"> 
                                <div class="ha-combo-box">
                                    <ha-combo-box
                                        label="${"Optional - Entity (default to card entity)"}"
                                        .value="${entity}"
                                        .items="${this.allEntitiesList}"
                                        @value-changed="${(ev) => this._arrayValueChange(index, { entity: ev.detail.value }, 'sub_button')}"
                                    ></ha-combo-box>
                                </div>
                                <div class="ha-textfield">
                                    <ha-textfield
                                        label="Optional - Name"
                                        .value="${subButton.name ?? ''}"
                                        @input="${(ev) => this._arrayValueChange(index, { name: ev.target.value }, 'sub_button')}"
                                    ></ha-textfield>
                                </div>
                                <div class="ha-icon-picker">
                                    <ha-icon-picker
                                        label="Optional - Icon"
                                        .value="${subButton.icon}"
                                        item-label-path="label"
                                        item-value-path="value"
                                        @value-changed="${(ev) => this._arrayValueChange(index, { icon: ev.detail.value }, 'sub_button')}"
                                    ></ha-icon-picker>
                                </div>
                                ${this.makeShowState(subButton, subButtonIndex, 'sub_button', index)}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined style="${isSelect ? 'opacity: 0.5; pointer-events: none;' : ''}">
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Tap action on button
                            </h4>
                            <div class="content">
                                ${this.makeTapActionPanel("Tap action", subButton, 'more-info', 'sub_button', index)}
                                ${this.makeTapActionPanel("Double tap action", subButton, 'none', 'sub_button', index)}
                                ${this.makeTapActionPanel("Hold action", subButton, 'none', 'sub_button', index)}
                            </div>
                        </ha-expansion-panel>
                    </div>
                </ha-expansion-panel>
            `;
          });

          const addSubButton = () => {
            if (!this._config.sub_button) {
                this._config.sub_button = [];
            }

            let newSubButton = {
                entity: this._config.entity
            };
            this._config.sub_button = [...this._config.sub_button];
            this._config.sub_button.push(newSubButton);
            fireEvent(this, "config-changed", { config: this._config });
            this.requestUpdate();
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
                <ha-alert alert-type="info">Add new customized buttons fixed to the right. These buttons also support <code>input_select</code> and <code>select</code> entities to display a list.</ha-alert>
              </div>
            </ha-expansion-panel>
          `;
        }

        makeButton() {
            let buttons = [];
            for (let i = 1; i <= this.buttonIndex; i++) {
                buttons.push(html`
                    <div class="${i}_button">
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                                <ha-icon icon="mdi:border-radius"></ha-icon>
                                Button ${i} ${this._config[i + '_name'] ? ("- " + this._config[i + '_name']) : ""}
                                <button class="icon-button header" @click="${() => this.removeButton(i)}">
                                  <ha-icon icon="mdi:delete"></ha-icon>
                                </button>
                            </h4>
                            <div class="content">
                                <ha-textfield
                                    label="Link / Hash to pop-up (e.g. #kitchen)"
                                    .value="${this._config[i + '_link'] || ''}"
                                    .configValue="${i}_link"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                <ha-textfield
                                    label="Optional - Name"
                                    .value="${this._config[i + '_name'] || ''}"
                                    .configValue="${i}_name"
                                    @input="${this._valueChanged}"
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
                                    .items="${this.allEntitiesList}"
                                    @value-changed="${this._valueChanged}"
                                ></ha-combo-box>
                                <ha-alert alert-type="info">In fact you can also get the auto order with any entity type, for example you can add light groups to these fields and the order will change based on the last changed states.</ha-alert>
                            </div>
                        </ha-expansion-panel>
                    </div>
                `);
            }

            return buttons;
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
                    Bubble Card 
                    <span style="
                        font-size: 10px;
                        background: rgba(0,120,180,1);
                        padding: 0px 8px;
                        border-radius: 12px;
                        margin-right: -6px;
                        float: right;
                        color: white;
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

        makeStyleEditor() {
            return html`
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:code-braces"></ha-icon>
                        Custom styles / Templates
                    </h4>
                    <div class="content">
                        <div class="code-editor">
                            <ha-code-editor
                                mode="yaml"
                                autofocus
                                autocomplete-entities
                                autocomplete-icons
                                .hass=${this.hass}
                                .value=${this._config.styles}
                                .configValue="${"styles"}"
                                @value-changed=${this._valueChanged}
                            ></ha-code-editor>
                        </div>
                        <ha-alert alert-type="info">For advanced users, you can edit the CSS style of this card in this editor. More information <a href="https://github.com/Clooos/Bubble-Card#styling">here</a>. You don't need to add <code>styles: |</code>, it will be added automatically. You can also add <a href="https://github.com/Clooos/Bubble-Card#templates">templates</a>.</ha-alert>
                    </div>
                </ha-expansion-panel>
            `;
        }

        _valueChanged(ev) {
            const target = ev.target;
            const detail = ev.detail;
            let rawValue;

            // Check if the target is a ha-switch
            if (target.tagName === 'HA-SWITCH') {
                rawValue = target.checked;
            } else if (target.value !== undefined) {
                rawValue = typeof target.value === 'string' ? target.value.replace(",", ".") : target.value;
            }

            if (typeof rawValue === 'string' && (rawValue.endsWith(".") || rawValue === "-")) {
                return;
            }

            const { configValue, checked } = target;
            if (configValue) {
                const value = checked !== undefined ? checked : rawValue;
                const configKeys = configValue.split('.');
                let obj = this._config;

                for (let i = 0; i < configKeys.length - 1; i++) {
                    obj[configKeys[i]] = obj[configKeys[i]] || {};
                    obj = obj[configKeys[i]];
                }

                // If the event is of type 'input', update the configuration directly with the input's value
                if (ev.type === 'input') {
                    obj[configKeys[configKeys.length - 1]] = rawValue;
                } else if (detail && obj[configKeys[configKeys.length - 1]] !== detail.value) {
                    obj[configKeys[configKeys.length - 1]] = detail.value;
                } else if (target.tagName === 'HA-SWITCH') {
                    obj[configKeys[configKeys.length - 1]] = rawValue;
                }
            }

            fireEvent(this, "config-changed", { config: this._config });
            this.requestUpdate();
        }

        _arrayValueChange(index, value, array) {
          this._config[array] = this._config[array] || [];

          let arrayCopy = [...this._config[array]];

          arrayCopy[index] = arrayCopy[index] || {};
          arrayCopy[index] = { ...arrayCopy[index], ...value };

          this._config[array] = arrayCopy;

          fireEvent(this, "config-changed", { config: this._config });

          this.requestUpdate();
        }

        _tapActionValueChange(index, value, array) {
            if (array === undefined) {
                for (let key in value) {
                    this._config[key] = { ...this._config[key], ...value[key] };
                }
            } else {
                this._config[array] = this._config[array] || (array ? {} : []);

                let copy = Array.isArray(this._config[array]) ? [...this._config[array]] : {...this._config[array]};

                if (Array.isArray(copy)) {
                    copy[index] = copy[index] || {};

                    let objCopy = { ...copy[index] };

                    for (let key in value) {
                        if (key in objCopy) {
                            objCopy[key] = { ...objCopy[key], ...value[key] };
                        } else {
                            objCopy[key] = value[key];
                        }
                    }

                    copy[index] = objCopy;
                } else {
                    for (let key in value) {
                        if (!copy.hasOwnProperty(key)) {
                            copy[key] = value[key];
                        } else {
                            copy[key] = { ...copy[key], ...value[key] };
                        }
                    }
                }

                this._config[array] = copy;
            }

            fireEvent(this, "config-changed", { config: this._config });
            this.requestUpdate();
        }

        static get styles() {
            return css`
                div {
                  display: grid;
                  grid-gap: 12px;
                }

                ha-combo-box[label="Card type"]::after {
                  content: "";
                  position: relative;
                  background-color: var(--background-color, var(--secondary-background-color));
                  display: block;
                  width: 100%;
                  height: 1px;
                  top: 12px;
                  margin-bottom: 12px !important;
                  opacity: 0.6;
                }

                #add-button {
                  margin: 0 0 14px 0;
                  color: var(--text-primary-color);
                  width: 100%;
                  height: 32px;
                  border-radius: 16px;
                  border: none;
                  background-color: var(--accent-color);
                  cursor: pointer;
                }

                p {
                  margin-bottom: 4px;
                }

                ha-icon, a, p, button, h4 {
                  color: var(--primary-text-color) !important;
                }

                hr {
                  display: inline-block;
                  width: 100%;
                  border: 1px solid var(--background-color, var(--secondary-background-color));
                  opacity: 0.6;
                  margin: 8px 0 0 0;
                }

                code {
                  background: var(--accent-color);
                  background-blend-mode: darken;
                  padding: 2px 4px;
                  border-radius: 6px;
                }

                .button-header {
                  height: auto;
                  width: 100%;
                  display: inline-flex;
                  align-items: center;
                  margin: 0 8px;
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

                .content {
                  margin: 12px 4px 14px 4px;
                }

                h4 > ha-icon {
                  margin: 8px;
                }

                ha-textfield {
                  width: 100%;
                }

                h3 {
                  margin: 4px 0;
                }

                .code-editor {
                    overflow: scroll;
                }

                .icon-button {
                  background: var(--accent-color);
                  border: none;
                  cursor: pointer;
                  padding: 8px;
                  margin: 0;
                  border-radius: 32px;
                  font-weight: bold;
                }

                .icon-button.header {
                  background: none;
                  float: right;
                  padding: 0;
                  margin: 0 8px;
                }
            `;
        }
    }

    if (!customElements.get('bubble-card-editor')) customElements.define('bubble-card-editor', BubbleCardEditor);

    return BubbleCardEditor;
}
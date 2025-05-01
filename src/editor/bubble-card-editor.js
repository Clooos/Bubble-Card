import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'lit';
import { version } from '../var/version.js';
import { fireEvent } from '../tools/utils.js';
import { renderButtonEditor } from '../cards/button/editor.js';
import { renderPopUpEditor } from '../cards/pop-up/editor.js';
import { renderSeparatorEditor } from '../cards/separator/editor.js';
import { renderHorButtonStackEditor } from '../cards/horizontal-buttons-stack/editor.js';
import { renderCoverEditor } from '../cards/cover/editor.js';
import { renderClimateEditor } from '../cards/climate/editor.js';
import { renderSelectEditor } from '../cards/select/editor.js';
import { renderCalendarEditor } from '../cards/calendar/editor.js';
import { renderMediaPlayerEditor } from '../cards/media-player/editor.js';
import { renderEmptyColumnEditor } from '../cards/empty-column/editor.js';
import { makeSubButtonPanel } from '../components/sub-button/editor.js';
import { makeModulesEditor } from '../modules/editor.js';
import { makeModuleStore, _fetchModuleStore } from '../modules/store.js';
import setupTranslation from '../tools/localize.js';
import styles from './styles.css';
import moduleStyles from '../modules/styles.css';

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
        return this._config?.card_type || '';
    }

    get _button_type() {
        return this._config?.button_type || 
               (this._config?.card_type === 'pop-up' ? '' : 'switch');
    }

    get _entity() {
        return this._config?.entity || '';
    }

    get _selectable_attributes() {
        return [
            'source_list', 
            'sound_mode_list',
            'hvac_modes',
            'fan_modes',
            'swing_modes',
            'preset_modes',
            'effect_list'
        ];
    }

    render() {
        if (!this.hass) {
            return html``;
        }

        const t = setupTranslation(this.hass);
        const homeAssistant = document.querySelector("body > home-assistant");
        const previewElement = homeAssistant?.shadowRoot
            ?.querySelector("hui-dialog-edit-card")
            ?.shadowRoot
            ?.querySelector("ha-dialog > div.content > div.element-preview");

        if (previewElement?.style && previewElement.style.position !== 'sticky') {
            previewElement.style.position = 'sticky';
            previewElement.style.top = '0';
        }

        if (!this.listsUpdated) {
            const formateList = item => ({
                label: item,
                value: item
            });

            this.inputSelectList = {states:{}, locale : this.hass.locale, localize : this.hass.localize, entities : this.hass.entities };

            Object.keys(this.hass.states)
                .filter((eid) => {
                    const entity = this.hass.states[eid];
                    const domain = eid.substr(0, eid.indexOf("."));
                    const isSelectDomain = domain === "input_select" || domain === "select";
                    const hasSelectableAttributes = this._selectable_attributes.some(attr => entity.attributes?.[attr]);
                    return isSelectDomain || hasSelectableAttributes;
                })
                .map(formateList).forEach((item) => {
                        const entityId = item.label || item;
                        const entity = this.hass.states[entityId]; // Retrieve the corresponding state from hass.states
                        if (entity) {
                            this.inputSelectList.states[entityId] = entity;
                        }
                    });

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
                    'label': t('editor.calendar.name'),
                    'value': 'calendar'
                },
                {
                    'label': 'Cover',
                    'value': 'cover'
                },
                {
                    'label': 'Climate',
                    'value': 'climate'
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

            this.listsUpdated = true;
        }

        const cardTypeList = this.cardTypeList;
        const buttonTypeList = this.buttonTypeList;

        switch (this._config?.card_type) {
            case 'pop-up':
                return renderPopUpEditor(this);
            case 'button':
                return renderButtonEditor(this);
            case 'separator':
                return renderSeparatorEditor(this);
            case 'horizontal-buttons-stack':
                return renderHorButtonStackEditor(this);
            case 'cover':
                return renderCoverEditor(this);
            case 'media-player':
                return renderMediaPlayerEditor(this);
            case 'empty-column':
                return renderEmptyColumnEditor(this);
            case 'select':
                return renderSelectEditor(this);
            case 'climate':
                return renderClimateEditor(this);
            case 'calendar':
                return renderCalendarEditor(this);
            case undefined:
                return html`
                    <div class="card-config">
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                You need to add a card type first
                            </h4>
                        </div>
                        ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                        <img style="width: 100%; height: auto; border-radius: 24px;" src="https://raw.githubusercontent.com/Clooos/Bubble-Card/main/.github/bubble-card.gif">
                        
                        <div class="bubble-info-container">
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:tag-text"></ha-icon>
                                    Bubble Card ${version}
                                </h4>
                                <div class="content">
                                    <p>If you want to know what's new in this version, you can check the changelog <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${version}" target="_blank" rel="noopener noreferrer"><b>here</b></a>.</p>
                                </div>
                            </div>
                            
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:help-circle-outline"></ha-icon>
                                    Resources & Help
                                </h4>
                                <div class="content">
                                    <p>If you have an issue or a question you can find more details in the GitHub documentation. You can also find useful resources and help in these links.</p>
                                    <div class="bubble-badges">
                                        <a href="https://github.com/Clooos/Bubble-Card" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:github"></ha-icon>
                                            <span>Documentation</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/issues" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:bug"></ha-icon>
                                            <span>Issues</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/questions-about-config-custom-styles-and-templates" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:help"></ha-icon>
                                            <span>Config Help</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:wrench"></ha-icon>
                                            <span>Shared Examples</span>
                                        </a>
                                        <a href="https://www.youtube.com/@cloooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:youtube"></ha-icon>
                                            <span>YouTube</span>
                                        </a>
                                        <a href="https://www.reddit.com/r/BubbleCard/" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:reddit"></ha-icon>
                                            <span>r/BubbleCard</span>
                                        </a>
                                        <a href="https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:home-assistant"></ha-icon>
                                            <span>HA Forum</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:heart-outline"></ha-icon>
                                    Support the Project
                                </h4>
                                <div class="content">
                                    <p>Hi I'm Clooos the Bubble Card developer. I dedicate most of my spare time to making this project the best it can be. So if you appreciate my work, any donation would be a great way to show your support.</p>
                                    <p>Also, check out my Patreon for exclusive custom styles, templates, and modules. Subscribing is probably the best way to support me and keep this project going.</p>
                                    <div class="bubble-badges">
                                        <a href="https://www.buymeacoffee.com/clooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <div class="bmc-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
                                                </svg>
                                            </div>
                                            <span>Buy me a beer</span>
                                        </a>
                                        <a href="https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR" target="_blank" rel="noopener noreferrer" class="bubble-badge support-badge">
                                            <div class="paypal-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z"/>
                                                </svg>
                                            </div>
                                            <span>PayPal</span>
                                        </a>
                                        <a href="https://www.patreon.com/Clooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <div class="patreon-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"/>
                                                </svg>
                                            </div>
                                            <span>Patreon</span>
                                        </a>
                                    </div>
                                    <div class="creator-message">
                                        <a href="https://www.reddit.com/user/Clooooos/" target="_blank" rel="noopener noreferrer">
                                            <img src="https://avatars.githubusercontent.com/u/36499953" alt="Clooos" class="creator-avatar">
                                        </a>
                                        <p class="bubble-thank-you">Thank you for being part of this awesome community! Cheers from Belgium! 🍻</p>
                                    </div>
                                </div>
                            </div>
                            ${this.makeVersion()}
                        </div>
                    </div>
                `;
        }
    }

    makeLayoutOptions() {
        const defaultLayout = window.isSectionView ? 'large' : 'normal';
        const defaultRows = this._config.card_type === "separator" ? '0.8' : '1';
        return html`
            <ha-combo-box
                label="${this._config.card_type === "pop-up" ? 'Header card layout' : 'Card layout'}"
                .value="${this._config.card_layout || defaultLayout}"
                .configValue="${"card_layout"}"
                .items="${[
                    { label: 'Normal (previous default)', value: 'normal' },
                    { label: 'Large', value: 'large' },
                    { label: 'Large with 2 sub-buttons rows', value: 'large-2-rows' },
                    { label: 'Large with sub-buttons in a grid (Layout: min. 2 rows)', value: 'large-sub-buttons-grid' }
                ]}"
                @value-changed="${this._valueChanged}"
            ></ha-combo-box>
            ${this._config.card_type !== "pop-up" && this._config.card_layout.includes("large") ? html`
                <ha-textfield
                    label="Rows"
                    type="number"
                    inputMode="numeric"
                    min="0"
                    step="0.1"
                    .value="${this._config.rows || this._config.grid_options?.rows || defaultRows}"
                    .configValue="${"rows"}"
                    @input="${this._valueChanged}"
                ></ha-textfield>
            ` : ''}
        `;
    }

    makeShowState(context = this._config, config = '', array = false, index) {
        const entity = context?.entity ?? this._config.entity ?? '';
        const nameButton = this._config.button_type === 'name';

        const isSelect = entity?.startsWith("input_select") || entity?.startsWith("select") || context.select_attribute;

        const attributeList = Object.keys(this.hass.states[entity]?.attributes || {}).map((attributeName) => {
            let state = this.hass.states[entity];
            let formattedName = this.hass.formatEntityAttributeName(state, attributeName);
            return { label: formattedName, value: attributeName };
        });

        return html`
            ${array !== 'sub_button' ? html`
                <ha-formfield .label="Text scrolling effect">
                    <ha-switch
                        aria-label="Text scrolling effect"
                        .checked=${context?.scrolling_effect ?? true}
                        .configValue="${config + "scrolling_effect"}"
                        @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { scrolling_effect: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Text scrolling effect</label> 
                    </div>
                </ha-formfield>
            ` : ''}
            ${array === 'sub_button' ? html`
                <ha-formfield .label="Show background">
                    <ha-switch
                        aria-label="Show background when entity is on"
                        .checked=${context?.show_background ?? true}
                        @change="${(ev) => this._arrayValueChange(index, { show_background: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Show background when entity is on</label> 
                    </div>
                </ha-formfield>
            ` : ''}
            ${array === 'sub_button' && (context?.show_background ?? true) ? html`
                <ha-formfield .label="Background color based on state">
                    <ha-switch
                        aria-label="Background color based on state"
                        .checked=${context?.state_background ?? true}
                        @change="${(ev) => this._arrayValueChange(index, { state_background: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Background color based on state</label> 
                    </div>
                </ha-formfield>
            ` : ''}
            ${array === 'sub_button' && (context?.state_background ?? true) && entity.startsWith("light") ? html`
                <ha-formfield .label="Background color based on light color">
                    <ha-switch
                        aria-label="Background color based on light color"
                        .checked=${context?.light_background ?? true}
                        @change="${(ev) => this._arrayValueChange(index, { light_background: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Background color based on light color</label> 
                    </div>
                </ha-formfield>
            ` : ''}
            ${array !== 'sub_button' && entity.startsWith("light") ? html`
                <ha-formfield .label="Use accent color instead of light color">
                    <ha-switch
                        aria-label="Use accent color instead of light color"
                        .checked=${context?.use_accent_color ?? false}
                        .configValue="${config + "use_accent_color"}"
                        @change="${this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Use accent color instead of light color</label> 
                    </div>
                </ha-formfield>
            ` : ''}
            <ha-formfield .label="Show icon">
                <ha-switch
                    aria-label="Show icon"
                    .checked=${context?.show_icon ?? true}
                    .configValue="${config + "show_icon"}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_icon: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show icon</label> 
                </div>
            </ha-formfield>
            ${array !== 'sub_button' ? html`
                <ha-formfield .label="Prioritize icon over entity picture">
                    <ha-switch
                        aria-label="Prioritize icon over entity picture"
                        .checked=${context?.force_icon ?? false}
                        .configValue="${config + "force_icon"}"
                        .disabled="${nameButton}"
                        @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { force_icon: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Prioritize icon over entity picture</label> 
                    </div>
                </ha-formfield>
            ` : ''}
            <ha-formfield .label="Show name">
                <ha-switch
                    aria-label="Show name"
                    .checked=${context?.show_name ?? array !== 'sub_button' ? true : false}
                    .configValue="${config + "show_name"}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_name: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show name</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show entity state">
                <ha-switch
                    aria-label="Show entity state"
                    .checked="${context?.show_state ?? context.button_type === 'state'}"
                    .configValue="${config + "show_state"}"
                    .disabled="${nameButton && array !== 'sub_button'}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_state: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show entity state</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show last changed">
                <ha-switch
                    aria-label="Show last changed"
                    .checked=${context?.show_last_changed}
                    .configValue="${config + "show_last_changed"}"
                    .disabled="${nameButton && array !== 'sub_button'}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_last_changed: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show last changed</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show last updated">
                <ha-switch
                    aria-label="Show last updated"
                    .checked=${context?.show_last_updated}
                    .configValue="${config + "show_last_updated"}"
                    .disabled="${nameButton && array !== 'sub_button'}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_last_updated: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show last updated</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show attribute">
                <ha-switch
                    aria-label="Show attribute"
                    .checked=${context?.show_attribute}
                    .configValue="${config + "show_attribute"}"
                    .disabled="${nameButton && array !== 'sub_button'}"
                    @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_attribute: ev.target.checked }, array)}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show attribute</label> 
                </div>
            </ha-formfield>
            ${context?.show_attribute ? html`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="Attribute to show"
                        .value="${context?.attribute}"
                        .configValue="${config + "attribute"}"
                        .items="${attributeList}"
                        .disabled="${nameButton}"
                        @value-changed="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { attribute: ev.detail.value }, array)}"
                    ></ha-combo-box>
                </div>
            ` : ''}
            ${array === 'sub_button' && isSelect ? html`
                <ha-formfield .label="Show arrow (Select entities only)">
                    <ha-switch
                        aria-label="Show arrow (Select entities only)"
                        .checked=${context?.show_arrow ?? true}
                        .configValue="${config + "show_arrow"}"
                        @change="${!array ? this._valueChanged : (ev) => this._arrayValueChange(index, { show_arrow: ev.target.checked }, array)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Show arrow (Select menu only)</label> 
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
                        .value="${this._config[configValue]}"
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

    makeActionPanel(label, context = this._config, defaultAction, array, index = this._config) {
        const icon = label === "Tap action" 
            ? "mdi:gesture-tap" 
            : label === "Double tap action" 
            ? "mdi:gesture-double-tap"
            : label === "Hold action" 
            ? "mdi:gesture-tap-hold"
            : "mdi:gesture-tap";
        const configValueType = label === "Tap action" 
            ? "tap_action"
            : label === "Double tap action" 
            ? "double_tap_action"
            : label === "Hold action" 
            ? "hold_action"
            : label === "Open action"
            ? "open_action"
            : "close_action";
        let value;
        try{
           value = label === "Tap action" 
                ? context.tap_action
                : label === "Double tap action" 
                ? context.double_tap_action
                : label === "Hold action" 
                ? context.hold_action
                : label === "Open action"
                ? context.open_action
                : context.close_action;
        }catch{}

        const isDefault = context === this._config;

        if (!defaultAction) {
            defaultAction = isDefault && label === "Tap action" 
            ? this._config.button_type !== "name" ? "more-info" : "none"
            : isDefault
            ? "none"
            : '';
        }

        return html`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="${icon}"></ha-icon>
                    ${label}
                </h4>
                <div class="content"> 
                    <ha-form
                        .hass=${this.hass}
                        .data=${context}
                        .configValue="${
                                      (array ? array+".":"") + (parseInt(index) == index ? index+".":"") +  configValueType}" 
                        .schema=${[{name: configValueType,
                                    label : label,
                                    selector: { ui_action: {
                                        default_action: defaultAction,} },
                                    }]}  
                        .computeLabel=${this._computeLabelCallback}
                        @value-changed=${(ev) => this._ActionChanged(ev,array,index)}
                    ></ha-form>
                </div>
                ${ value?.action  === 'call-service' || value?.action === 'perform-action' ? html`
                    <ha-formfield .label="Use default entity">
                        <ha-switch
                            aria-label="Use default entity"
                            .configValue="${
                                          (array ? array+".":"") + (parseInt(index) == index ? index+".":"") +  configValueType+".default_entity"}" 
                            .checked=${value?.target?.entity_id === "entity"}
                             @change=${this._updateActionsEntity}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Use default entity</label> 
                        </div>
                    </ha-formfield>
                ` : ''}
            </ha-expansion-panel>
        `;
    }

    makeSubButtonPanel() {
        return makeSubButtonPanel(this);
    }

    makeVersion() {
        return html`
            <h4 class="version">
                Bubble Card 
                <span class="version-number">
                    ${version}
                </span>
            </h4>
        `;
    }

    makeStyleEditor() {
        return html`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:code-braces"></ha-icon>
                    Custom styles & JS templates
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
                    ${this.createErrorConsole()}
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Custom styles & JS templates
                        </h4>
                        <div class="content">
                            <p>For advanced users, you can edit the CSS style of this card in the above code editor. More information and examples <a href="https://github.com/Clooos/Bubble-Card#styling" target="_blank" rel="noopener noreferrer">here</a>. You don't need to add <code>styles: |</code> (only used in YAML mode). You can also add <a href="https://github.com/Clooos/Bubble-Card#templates" target="_blank" rel="noopener noreferrer">JS templates</a> (Jinja is not supported).</p>
                            <p><b>Check out my <a href="https://www.patreon.com/Clooos" target="_blank" rel="noopener noreferrer">Patreon</a></b> for more custom styles, templates, and modules. This is also the best way to show your support to my project.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
        `;
    }

    createErrorConsole(context = this) {
        if (!context._errorListener) {
            context._errorListener = (event) => {
                context.errorMessage = event.detail;
                context.requestUpdate();
            };
            window.addEventListener('bubble-card-error', context._errorListener);
        }

        return html`
            <div class="bubble-info error" 
                style="display: ${!context.errorMessage ? 'none' : ''}">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Error in JS template
                </h4>
                <div class="content">
                    <p>${context.errorMessage}</p>
                </div>
            </div>
        `;
    }

    _getProcessedSchema(key, originalSchema, config) {
      if (this._processedSchemas && this._processedSchemas[key]) {
        return this._processedSchemas[key];
      }
      const schemaCopy = structuredClone(originalSchema);
      const updatedSchema = this._updateAttributeSelectors(schemaCopy, config, key);
      this._processedSchemas = { ...this._processedSchemas, [key]: updatedSchema };
      return updatedSchema;
    }

    _valueChangedInHaForm(e, key, originalSchema) {
      let value = e.detail.value;

      if (value && typeof value === "object" && !Array.isArray(value)) {
        const keys = Object.keys(value);
        if (keys.length > 0 && keys.every(k => !isNaN(parseInt(k, 10)))) {
          value = keys
            .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
            .map(k => value[k]);
        }
      }

      // Update the working copy FIRST to keep the form stable for the immediate re-render
      if (this._workingModuleConfigs) { // Ensure it exists
          this._workingModuleConfigs[key] = value;
      }

      // Now clean the value before updating the main config and schema
      const cleanedValue = this._cleanEmpty(value, key); 

      // Update processed schema based on the CLEANED value
      const newProcessedSchema = structuredClone(originalSchema);
      const updatedSchema = this._updateAttributeSelectors(newProcessedSchema, cleanedValue, key);
      this._processedSchemas = { ...this._processedSchemas, [key]: updatedSchema };

      // Fire event to update the main config (_config) with the CLEANED value
      fireEvent(this, "config-changed", { config: { ...this._config, [key]: cleanedValue } });
    }

    _cleanEmpty(value, key) {
      if (Array.isArray(value)) {
        return value
          .map(item => this._cleanEmpty(item, undefined))
          .filter(item => !this._isEmpty(item));
      } else if (value && typeof value === "object") {
        const cleaned = {};
        Object.keys(value).forEach(k => {
          const cleanedValue = this._cleanEmpty(value[k], k);
          if (!this._isEmpty(cleanedValue)) {
            cleaned[k] = cleanedValue;
          }
        });
        return Object.keys(cleaned).length > 0 ? cleaned : undefined;
      } else if (typeof value === 'string' && value === "") {
        if (key !== 'state') {
          return undefined;
        }
      }
      return value;
    }

    _isEmpty(value) {
      if (value === null || value === undefined) return true;
      if (Array.isArray(value)) return value.length === 0;
      if (typeof value === "object") return Object.keys(value).length === 0;
      return false;
    }

    _updateAttributeSelectors = (schema, configData, inheritedEntity = undefined) => {
      return schema.map(field => {
        if (field.selector && field.selector.entity) {
          if (configData && configData.entity) {
            inheritedEntity = configData.entity;
          } else {
            inheritedEntity = undefined;
          }
        }

        if (field.selector && field.selector.attribute) {
          field.selector.attribute.entity_id = inheritedEntity;
        }

        const nestedConfig = configData && configData[field.name] ? configData[field.name] : configData;
        if (Array.isArray(field.schema)) {
          field.schema = this._updateAttributeSelectors(field.schema, nestedConfig, inheritedEntity);
        }
        return field;
      });
    };

  makeModulesEditor() {
    return makeModulesEditor(this);
  }

  makeModuleStore() {
    return makeModuleStore(this);
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

    // Create a new config object to avoid mutating the original config
    let newConfig;
    try {
      newConfig = { ...this._config };
      
      const { configValue, checked } = target;
      if (configValue) {
        const value = checked !== undefined ? checked : rawValue;
        const configKeys = configValue.split('.');
        
        // For nested properties, we need to clone progressively the structure
        if (configKeys.length > 1) {
          let tempConfig = newConfig;
          let path = '';
          
          for (let i = 0; i < configKeys.length - 1; i++) {
            const key = configKeys[i];
            path = path ? `${path}.${key}` : key;
            
            // Create the object if it doesn't exist
            if (!tempConfig[key]) tempConfig[key] = {};
            
            // Clone the object to ensure it is extensible
            tempConfig[key] = { ...tempConfig[key] };
            tempConfig = tempConfig[key];
          }
          
          // Update the value
          const lastKey = configKeys[configKeys.length - 1];
          if (ev.type === 'input') {
            tempConfig[lastKey] = rawValue;
          } else if (detail && tempConfig[lastKey] !== detail.value) {
            tempConfig[lastKey] = detail.value;
          } else if (target.tagName === 'HA-SWITCH') {
            tempConfig[lastKey] = rawValue;
          }
        } else {
          // Simple case - top level key
          const key = configKeys[0];
          if (ev.type === 'input') {
            newConfig[key] = rawValue;
          } else if (detail && newConfig[key] !== detail.value) {
            newConfig[key] = detail.value;
          } else if (target.tagName === 'HA-SWITCH') {
            newConfig[key] = rawValue;
          }
        }
      } else {
        newConfig = detail.value;
      }
      
      // Update this._config with the new config
      this._config = newConfig;
      
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la configuration:", error);
      
      // If an error occurs, try to update directly with the new config
      if (configValue && detail) {
        const simpleConfig = { ...this._config };
        simpleConfig[configValue] = detail.value;
        newConfig = simpleConfig;
      } else if (detail) {
        newConfig = detail.value;
      } else {
        return; // Do nothing if we can't retrieve the value
      }
    }

    // Emit the event with the new configuration
    fireEvent(this, "config-changed", { config: newConfig });
  }

  _arrayValueChange(index, value, array) {
    // Fix the climate sub-button addition
    if (this._config.sub_button && !this.subButtonJustAdded) {
      this.subButtonJustAdded = true;
      setTimeout(() => this._arrayValueChange(index, value, array), 10);
      return;
    }

    this._config[array] = this._config[array] || [];
    let arrayCopy = [...this._config[array]];
    arrayCopy[index] = arrayCopy[index] || {};
    arrayCopy[index] = { ...arrayCopy[index], ...value };
    this._config[array] = arrayCopy;
    fireEvent(this, "config-changed", { config: this._config });
    this.requestUpdate();
  }

  _ActionChanged(ev, array, index) {
    var hasDefaultEntity = false;
    try { if (ev.detail.value[ev.currentTarget.__schema[0].name]['target']['entity_id'][0] === 'entity') hasDefaultEntity = true; }
    catch { }
    try { if (ev.detail.value[ev.currentTarget.__schema[0].name]['target']['entity_id'] === 'entity') hasDefaultEntity = true; }
    catch { }
    if (hasDefaultEntity) {
      ev.detail.value[ev.currentTarget.__schema[0].name]['action'] = 'call-service';
      if (ev.detail.value[ev.currentTarget.__schema[0].name]['perform_action'] != undefined) {
        ev.detail.value[ev.currentTarget.__schema[0].name]['service'] = "" + ev.detail.value[ev.currentTarget.__schema[0].name]['perform_action'];
        delete ev.detail.value[ev.currentTarget.__schema[0].name]['perform_action'];
      }
    }

    if (array === 'button_action') {
      var configExist = this._config[array] ? true : false;
      var valueWasChanged = ev.detail.value[ev.currentTarget.__schema[0].name] != null
      if (configExist || valueWasChanged) this._config[array] = ev.detail.value;
    } else if (array) {
      this._config[array] = this._config[array] || [];
      let arrayCopy = [...this._config[array]];
      arrayCopy[index] = ev.detail.value;
      this._config[array] = arrayCopy;
    } else {
      this._config = ev.detail.value;
    }

    fireEvent(this, "config-changed", { config: this._config });
  }

  _updateActionsEntity(ev) {
    let obj = JSON.parse(JSON.stringify(this._config)); //get rid of the referencing
    const configKeys = ev.target.configValue.split('.');
    let i = 0
    for (i = 0; i < configKeys.length - 2; i++) {
      obj = obj[configKeys[i]] ? obj[configKeys[i]] : {};
    }

    if (!ev.target.checked) {
      if (obj[configKeys[i]].target?.entity_id === 'entity') {
        obj[configKeys[i]]['target'] = {};
      }
    } else {
      obj[configKeys[i]]['target'] = { 'entity_id': 'entity' };
    }

    var detail = { 'value': obj };
    var currentTarget = { '__schema': [{ 'name': configKeys[configKeys.length - 2] }] };
    var newev = { ...ev, detail, currentTarget };

    this._ActionChanged(newev, configKeys.length > 2 ? configKeys[0] : null, configKeys.length > 3 ? configKeys[1] : null);
  }

  _computeLabelCallback = (schema) => {
    return schema.label;
  }

  _conditionChanged(ev, index, array) {
    ev.stopPropagation();

    if (array) {
      this._config[array] = this._config[array] || [];
      let arrayCopy = [...this._config[array]];
      arrayCopy[index] = arrayCopy[index] || {};
      const conditions = ev.detail.value;
      arrayCopy[index] = {
        ...arrayCopy[index],
        visibility: conditions
      };
      this._config[array] = arrayCopy;
    } else if (this._config.card_type === 'pop-up') {
      const conditions = ev.detail.value;
      this._config = {
        ...this._config,
        trigger: conditions
      };
    }

    fireEvent(this, "config-changed", { config: this._config });
    this.requestUpdate();
  }

  static get styles() {
    return css`
        ${unsafeCSS(styles + moduleStyles)}
    `;
  }
}

customElements.define('bubble-card-editor', BubbleCardEditor);
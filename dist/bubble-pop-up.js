(()=>{"use strict";var __webpack_modules__={946:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>getIconStyles,IU:()=>createIcon,L2:()=>addStyles,_k:()=>convertToRGBA,mk:()=>getIconColor,wW:()=>isColorCloseToWhite});const addStyles=function(hass,context,styles,customStyles,state,entityId,stateChanged,path="",element=context.content){const customStylesEval=customStyles?eval("`"+customStyles+"`"):"";let styleAddedKey=styles+"Added";if(!context[styleAddedKey]||context.previousStyle!==customStylesEval||stateChanged||context.previousConfig!==context.config){if(!context[styleAddedKey]){if(context.styleElement=element.querySelector("style"),!context.styleElement){context.styleElement=document.createElement("style");const t=path?element.querySelector(path):element;t?.appendChild(context.styleElement)}context[styleAddedKey]=!0}context.styleElement.innerHTML!==customStylesEval+styles&&(context.styleElement.innerHTML=customStylesEval+styles),context.previousStyle=customStylesEval,context.previousConfig=context.config}};function createIcon(t,e,n,o,i,a){let r=!(!n||!e.states[n].attributes)&&e.states[n].attributes;t.imageUrl=!!r.entity_picture&&r.entity_picture,updateIcon(t,e,n,o,i),a||e.connection.subscribeEvents((a=>{a.data.entity_id===n&&a.data.old_state&&a.data.old_state.attributes.entity_picture!==a.data.new_state.attributes.entity_picture&&(t.imageUrl=a.data.new_state.attributes.entity_picture,updateIcon(t,e,n,o,i))}),"state_changed")}function updateIcon(t,e,n,o,i){for(;i.firstChild;)i.removeChild(i.firstChild);let a=t.config.icon&&t.config.icon.includes("/")?t.config.icon:t.imageUrl?t.imageUrl:"";if(a&&(r=e.states[n].state,n.startsWith("media_player.")&&!["off","unknown","idle",void 0].includes(r)||!n.startsWith("media_player."))){const t=document.createElement("div");t.setAttribute("class","entity-picture"),t.setAttribute("alt","Icon"),i&&(i.appendChild(t),i.style.background="center / cover no-repeat url("+a+"), var(--card-background-color,var(--ha-card-background))")}else{const t=document.createElement("ha-icon");t.setAttribute("icon",o),t.setAttribute("class","icon"),i&&i.appendChild(t)}var r}function isColorCloseToWhite(t){let e=[220,220,190];for(let n=0;n<3;n++)if(t[n]<e[n])return!1;return!0}function convertToRGBA(t,e,n=1){let o="";if(t.startsWith("#"))o=4===t.length?"rgba("+Math.min(255,parseInt(t.charAt(1).repeat(2),16)*n)+", "+Math.min(255,parseInt(t.charAt(2).repeat(2),16)*n)+", "+Math.min(255,parseInt(t.charAt(3).repeat(2),16)*n)+", "+e+")":"rgba("+Math.min(255,parseInt(t.slice(1,3),16)*n)+", "+Math.min(255,parseInt(t.slice(3,5),16)*n)+", "+Math.min(255,parseInt(t.slice(5,7),16)*n)+", "+e+")";else if(t.startsWith("rgb")){let i=t.match(/\d+/g);t.includes("rgba"),o="rgba("+Math.min(255,i[0]*n)+", "+Math.min(255,i[1]*n)+", "+Math.min(255,i[2]*n)+", "+e+")"}return o}function getIconColor(t,e,n,o,i){let a,r,s;return e&&e.startsWith("light.")?(a=(i=t.states[e].attributes.rgb_color)?o(i)?"rgba(255,220,200,0.5)":`rgba(${i}, 0.5)`:n?"rgba(255,220,200, 0.5)":"rgba(255, 255, 255, 0.5)",r=i?o(i)?"rgb(255,220,200)":`rgb(${i})`:n?"rgba(255,220,200, 1)":"rgba(255, 255, 255, 1)",s=i?o(i)?"none":"brightness(1.1)":"none"):(a="var(--accent-color)",s="brightness(1.1)"),{iconColorOpacity:a,iconColor:r,iconFilter:s}}function getIconStyles(t,e,n,o){return`\n    .icon-container {\n        position: relative;\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        z-index: 1;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        cursor: pointer !important;\n        background-color: var(--card-background-color,var(--ha-card-background));\n    }\n    \n    .icon-container::after {\n        content: '';\n        position: absolute;\n        display: block;\n        opacity: ${t.startsWith("light.")?"0.2":"0"};\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        border-radius: 50%;\n        background-color: ${e?n||"var(--accent-color)":"var(--card-background-color,var(--ha-card-background))"};\n    }\n    \n    .icon {\n        display: flex;\n        width: 22px; \n        color: ${e?n||"var(--accent-color)":"inherit"} !important;\n        opacity: ${e?"1":t?"0.6":"1"};\n        filter: ${e?n?o:"brightness(1.1)":"inherit"};\n    }\n    \n    .entity-picture {\n        display: flex;\n        height: 38px;\n        width: 38px;\n        border-radius: 100%;\n    }\n    `}}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(t,e)=>{for(var n in e)__webpack_require__.o(e,n)&&!__webpack_require__.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var __webpack_exports__={};(()=>{var t="v1.6.0-beta.1",e=__webpack_require__(946);const n=(t,e,n,o)=>{o=o||{},n=null==n?{}:n;const i=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=n,t.dispatchEvent(i),i},o=t=>{n(window,"haptic",t)},i=(t,e,o=!1)=>{o?history.replaceState(null,"",e):history.pushState(null,"",e),n(window,"location-changed",{replace:o})};function a(t,e,n){const o={entity:e.entity,tap_action:{action:"more-info"},double_tap_action:{action:"toggle"},hold_action:{action:"toggle"}},i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={config:o,action:n},t.dispatchEvent(i)}let r,s,l,c,d;function p(t,n,o,i){let a=n.styles?n.styles:"",d=n.entity&&o.states[n.entity]?n.entity:"",p=!n.icon&&n.entity?o.states[d].attributes.icon||o.states[d].attributes.entity_picture||"":n.icon||"",h=n.name?n.name:n.entity?o.states[d].attributes.friendly_name:"",u=n.width_desktop||"540px",g=u?u.match(/(\d+)(\D+)/):"",b=n.is_sidebar_hidden||!1,_=d?o.states[d].state:"";!function(t,e,n){t.hasState=e.states[n],t.hasState&&(t.newState=[t.hasState.state,t.hasState.attributes.rgb_color],t.oldState&&t.newState[0]===t.oldState[0]&&t.newState[1]===t.oldState[1]?t.stateChanged=!1:(t.oldState=t.newState,t.stateChanged=!0),t.stateChanged)}(t,o,d);let m=t.stateChanged,f=["on","open","cleaning","true","home","playing"].includes(_)||0!==Number(_)&&!isNaN(Number(_)),y=void 0===n.rise_animation||n.rise_animation,v=n.margin?"0"!==n.margin?n.margin:"0px":"7px",w=void 0!==n.bg_opacity?n.bg_opacity:"88",x=void 0!==n.shadow_opacity?n.shadow_opacity:"0",k=void 0!==n.bg_blur?n.bg_blur:"10",{iconColorOpacity:$,iconColor:C,iconFilter:S}=(0,e.mk)(o,d,f,e.wW),E=(0,e.G)(d,f,C,S),O=getComputedStyle(document.body),I=O.getPropertyValue("--ha-card-background")||O.getPropertyValue("--card-background-color"),L=n.bg_color?n.bg_color:I;if(L&&(!t.color||L!==t.color)){const n=1.02;s=(0,e._k)(L,w/100,n),t.color=L,window.color=L}return{customStyles:a,entityId:d,icon:p,name:h,widthDesktop:u,widthDesktopDivided:g,isSidebarHidden:b,state:_,stateChanged:m,stateOn:f,formatedState:c,riseAnimation:y,marginCenter:v,popUpOpen:r,rgbaColor:s,rgbColor:l,bgOpacity:w,shadowOpacity:x,bgBlur:k,iconColorOpacity:$,iconColor:C,iconFilter:S,iconStyles:E,haStyle:O,themeBgColor:I,color:L}}new MutationObserver(((e,o)=>{if(customElements.get("ha-panel-lovelace")){const e=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),i=e.prototype.html,a=e.prototype.css;class r extends e{setConfig(t){this._config={...t}}static get properties(){return{hass:{},_config:{}}}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _text(){return this._config.text||""}get _hash(){return this._config.hash||"#pop-up-name"}get _trigger_entity(){return this._config.trigger_entity||""}get _trigger_state(){return this._config.trigger_state||""}get _trigger_close(){return this._config.trigger_close||!1}get _margin(){return this._config.margin||"7px"}get _margin_top_mobile(){return this._config.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config.margin_top_desktop||"0px"}get _width_desktop(){return this._config.width_desktop||"540px"}get _bg_color(){return this._config.bg_color||window.color}get _bg_opacity(){return void 0!==this._config.bg_opacity?this._config.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config.bg_blur?this._config.bg_blur:"14"}get _shadow_opacity(){return void 0!==this._config.shadow_opacity?this._config.shadow_opacity:"0"}get _is_sidebar_hidden(){return this._config.is_sidebar_hidden||!1}get _auto_close(){return this._config.auto_close||""}get _back_open(){return this._config.back_open||!1}render(){if(!this.hass)return i``;if(!this.listsUpdated){const t=t=>({label:t,value:t});this.allEntitiesList=Object.keys(this.hass.states).map(t),this.lightList=Object.keys(this.hass.states).filter((t=>"light"===t.substr(0,t.indexOf(".")))).map(t),this.sensorList=Object.keys(this.hass.states).filter((t=>"sensor"===t.substr(0,t.indexOf(".")))).map(t),this.binarySensorList=Object.keys(this.hass.states).filter((t=>"binary_sensor"===t.substr(0,t.indexOf(".")))).map(t),this.coverList=Object.keys(this.hass.states).filter((t=>"cover"===t.substr(0,t.indexOf(".")))).map(t),this.cardTypeList=[{label:"Button",value:"button"},{label:"Cover",value:"cover"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Pop-up",value:"pop-up"},{label:"Separator",value:"separator"}],this.buttonTypeList=[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"}],this.listsUpdated=!0}const t=this.allEntitiesList;return this.lightList,this.sensorList,this.coverList,this.cardTypeList,this.buttonTypeList,i`
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
                        ${this.makeDropdown("Optional - Icon","icon")}
                        ${this.makeDropdown("Optional - Entity to toggle (e.g. room light group)","entity",t)}
                        ${this.makeDropdown("Optional - Entity state to display (e.g. room temperature)","state",t)}
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
                        ${this.makeDropdown("Optional - Entity to open the pop-up based on its state","trigger_entity",t)}
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
                                .checked=${this._back_open?this._back_open:window.backOpen}
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
                `}makeDropdown(t,e,n){return this.hass,t.includes("icon")||t.includes("Icon")?i`
                        <div>
                            <ha-icon-picker
                                label="${t}"
                                .value="${this["_"+e]}"
                                .configValue="${e}"
                                item-label-path="label"
                                item-value-path="value"
                                @value-changed="${this._valueChanged}"
                            ></ha-icon-picker>
                        </div>
                    `:i`
                    <div>
                        <ha-combo-box
                            label="${t}"
                            .value="${this["_"+e]}"
                            .configValue="${e}"
                            .items="${n}"
                            @value-changed="${this._valueChanged}"
                        ></ha-combo-box>
                    </div>
                  `}makeButton(){let t=[];for(let e=1;e<=this.buttonIndex;e++)t.push(i`
                        <div class="${e}_button">
                            <div class="button-header">
                                <ha-icon class="remove-button" icon="mdi:close" @click=${()=>this.removeButton(e)}></ha-icon>
                                <span class="button-number">Button ${e}</span>
                            </div>
                            <ha-textfield
                                label="Link / Hash to pop-up (e.g. #kitchen)"
                                .value="${this._config[e+"_link"]||""}"
                                .configValue="${e}_link"
                                @input="${this._valueChanged}"
                                style="width: 100%;"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Name"
                                .value="${this._config[e+"_name"]||""}"
                                .configValue="${e}_name"
                                @input="${this._valueChanged}"
                                style="width: 100%;"
                            ></ha-textfield>
                            <ha-icon-picker
                                label="Optional - Icon"
                                .value="${this._config[e+"_icon"]||""}"
                                .configValue="${e}_icon"
                                item-label-path="label"
                                item-value-path="value"
                                @value-changed="${this._valueChanged}"
                            ></ha-icon-picker>
                            <ha-combo-box
                                label="Optional - Light / Light group (For background color)"
                                .value="${this._config[e+"_entity"]||""}"
                                .configValue="${e}_entity"
                                .items="${this.allEntitiesList}"
                                @value-changed="${this._valueChanged}"
                            ></ha-combo-box>
                            <ha-combo-box
                                label="Optional - Presence / Occupancy sensor (For button auto order)"
                                .value="${this._config[e+"_pir_sensor"]||""}"
                                .configValue="${e}_pir_sensor"
                                .disabled=${!this._config.auto_order}
                                .items="${this.binarySensorList}"
                                @value-changed="${this._valueChanged}"
                            ></ha-combo-box>
                        </div>
                    `);return t}makeVersion(){return i`
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
                            ${t}
                        </span>
                    </h4>
                `}removeButton(t){delete this._config[t+"_name"],delete this._config[t+"_icon"],delete this._config[t+"_link"],delete this._config[t+"_entity"],delete this._config[t+"_pir_sensor"];for(let e=t;e<this.buttonIndex;e++)this._config[e+"_name"]=this._config[e+1+"_name"],this._config[e+"_icon"]=this._config[e+1+"_icon"],this._config[e+"_link"]=this._config[e+1+"_link"],this._config[e+"_entity"]=this._config[e+1+"_entity"],this._config[e+"_pir_sensor"]=this._config[e+1+"_pir_sensor"];delete this._config[this.buttonIndex+"_name"],delete this._config[this.buttonIndex+"_icon"],delete this._config[this.buttonIndex+"_link"],delete this._config[this.buttonIndex+"_entity"],delete this._config[this.buttonIndex+"_pir_sensor"],this.buttonIndex--,n(this,"config-changed",{config:this._config})}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,o=t.detail;e.configValue&&("ha-switch"===e.type?this._config={...this._config,[e.configValue]:e.checked}:this._config={...this._config,[e.configValue]:void 0===e.checked&&o.value?e.checked||o.value:e.value||e.checked}),n(this,"config-changed",{config:this._config})}static get styles(){return a`
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
            `}}customElements.define("bubble-pop-up-editor",r),o.disconnect()}})).observe(document,{childList:!0,subtree:!0}),function(){if(!window.eventAdded){const t=new Event("urlChanged");function e(){let e=0;window.dispatchEvent(t);const n=setInterval((()=>{e<10?(window.dispatchEvent(t),e++):clearInterval(n)}),1e3)}window.popUpInitialized=!1,["click","mousedown","touchstart","focus","location-changed","connection-status"].forEach((t=>{window.addEventListener(t,e)}),{passive:!0});const n=()=>{window.dispatchEvent(t),window.addEventListener("popstate",e,{passive:!0})};window.addEventListener("popUpInitialized",n,{passive:!0}),window.eventAdded=!0}}();class h extends HTMLElement{set hass(t){var n;this._hass=t,this.editor=d,async function(t){if(!window.resourcesChecked){window.resourcesChecked=!0;let e=(await t.callWS({type:"lovelace/resources"})).find((t=>t.url.includes("bubble-pop-up.js")));e&&await t.callWS({type:"lovelace/resources/delete",resource_id:e.id})}}(t),(n=this).content||(n.attachShadow({mode:"open"}),n.shadowRoot.innerHTML='\n            <ha-card style="background: none; border: none; box-shadow: none;">\n                <div class="card-content" style="padding: 0;">\n                </div>\n            </ha-card>\n        ',n.card=n.shadowRoot.querySelector("ha-card"),n.content=n.shadowRoot.querySelector("div")),async function(t){if(window.editorElement)t=window.editorElement.classList.contains("edit-mode");else{const t=new Promise((t=>{t(document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("div"))}));window.editorElement=await t}return t}(d).then((t=>{d=t})),function(t){const n=t._hass,r=t.editor,s=t.config;if(!n)return;let l,c,{customStyles:d,entityId:h,icon:u,name:g,widthDesktop:b,widthDesktopDivided:_,isSidebarHidden:m,state:f,stateChanged:y,stateOn:v,formatedState:w,riseAnimation:x,marginCenter:k,popUpOpen:$,rgbaColor:C,rgbColor:S,bgOpacity:E,shadowOpacity:O,bgBlur:I,iconColorOpacity:L,iconColor:T,iconFilter:A,iconStyles:V,haStyle:M,themeBgColor:U,color:q}=p(t,s,n),B=s.auto_close||!1,z=s.hash,D=s.trigger_entity?s.trigger_entity:"",j=s.trigger_state?s.trigger_state:"",R=!!s.trigger_close&&s.trigger_close;if(t.errorTriggered)return;t.initStyleAdded||t.host||r||(t.card.style.marginTop="4000px",t.initStyleAdded=!0);const W=()=>{if(t.host){if(!t.popUp&&(t.verticalStack=t.getRootNode(),t.popUp=t.verticalStack.querySelector("#root"),!window.popUpInitialized&&t.popUp)){if(s.back_open?localStorage.setItem("backOpen",!0):localStorage.setItem("backOpen",!1),"true"===localStorage.getItem("backOpen")){window.backOpen=!0;const G=new Event("popUpInitialized");setTimeout((()=>{window.dispatchEvent(G)}),0)}else window.backOpen=!1,$=z+!1,history.replaceState(null,null,location.href.split("#")[0]);window.popUpInitialized=!0}const i=t.popUp,p=(t.verticalStack,s.text||""),x=s.state;w=x?n.formatEntityState(n.states[x]):w||"";const S=s.margin_top_mobile&&"0"!==s.margin_top_mobile?s.margin_top_mobile:"0px",E=s.margin_top_desktop&&"0"!==s.margin_top_desktop?s.margin_top_desktop:"0px",L=s.entity?"flex":"none";let T,A;if(f=x?n.states[x].state:"",t.headerAdded){if(h){const K=t.content.querySelector("#header-container .icon-container"),J=t.content.querySelector("#header-container h2"),Q=t.content.querySelector("#header-container p"),X=t.content.querySelector("#header-container .power-button");K.innerHTML="",(0,e.IU)(t,n,h,u,K,r),J.textContent=g,Q.textContent=w,X.setAttribute("style",`display: ${L};`)}}else{const Z=document.createElement("div");Z.setAttribute("id","header-container");const tt=document.createElement("div");Z.appendChild(tt);const et=document.createElement("div");et.setAttribute("class","icon-container"),tt.appendChild(et),(0,e.IU)(t,n,h,u,et,r),function(t,e,n,o){e.tap_action,e.double_tap_action,e.hold_action;let i,r=0,s=0,l=0;t.addEventListener("mousedown",(()=>{s=Date.now(),i=setTimeout((()=>{a(t,e,"hold")}),300)})),t.addEventListener("mouseup",(()=>{clearTimeout(i),l=Date.now(),l-s<300&&(r++,1===r&&setTimeout((()=>{1===r?a(t,e,"tap"):(a(t,e,"double_tap"),o("success")),r=0}),300)),s=0,l=0})),t.addEventListener("touchstart",(n=>{o("light"),s=Date.now(),i=setTimeout((()=>{a(t,e,"hold")}),300),n.preventDefault()})),t.addEventListener("touchend",(n=>{clearTimeout(i),l=Date.now(),l-s<300&&(r++,1===r&&setTimeout((()=>{a(t,e,1===r?"tap":"double_tap"),r=0}),300)),s=0,l=0,n.preventDefault()})),t.addEventListener("mouseout",(()=>{clearTimeout(i)})),t.addEventListener("touchcancel",(()=>{clearTimeout(i)}))}(et,s,0,o);const nt=document.createElement("h2");nt.textContent=g,tt.appendChild(nt);const ot=document.createElement("p");ot.textContent=w,tt.appendChild(ot);const it=document.createElement("ha-icon");it.setAttribute("class","power-button"),it.setAttribute("icon","mdi:power"),it.setAttribute("style",`display: ${L};`),tt.appendChild(it);const at=document.createElement("button");at.setAttribute("class","close-pop-up"),at.onclick=function(){history.replaceState(null,null,location.href.split("#")[0]),localStorage.setItem("isManuallyClosed_"+z,!0)},Z.appendChild(at);const rt=document.createElement("ha-icon");rt.setAttribute("icon","mdi:close"),at.appendChild(rt),t.content.appendChild(Z),t.header=tt,t.headerAdded=!0}function M(){!function(t,e){t.callService("homeassistant","toggle",{entity_id:e})}(n,h)}function U(t){"Escape"===t.key&&($=z+!1,history.replaceState(null,null,location.href.split("#")[0]),localStorage.setItem("isManuallyClosed_"+z,!0))}function D(t){window.hash===z&&H(),l=t.touches[0].clientY,c=l}function j(t){t.touches[0].clientY-l>300&&t.touches[0].clientY>c&&($=z+!1,history.replaceState(null,null,location.href.split("#")[0]),$=z+!1,localStorage.setItem("isManuallyClosed_"+z,!0)),c=t.touches[0].clientY}if(t.eventAdded||r||(window["checkHashRef_"+z]=R,window.addEventListener("urlChanged",window["checkHashRef_"+z],{passive:!0}),window.addEventListener("click",(function(t){if(location.hash===z&&H(),!window.justOpened)return;const e=t.composedPath();!e||e.some((t=>"HA-MORE-INFO-DIALOG"===t.nodeName))||e.some((t=>"root"===t.id&&!t.classList.contains("close-pop-up")))||$!==z+!0||setTimeout((function(){location.hash===z&&($=z+!1,history.replaceState(null,null,location.href.split("#")[0]),localStorage.setItem("isManuallyClosed_"+z,!0))}),2)}),{passive:!0}),t.eventAdded=!0),h){const st=n.states[h].attributes.rgb_color;t.rgbColor=st?(0,e.wW)(st)?"rgb(255,220,200)":`rgb(${st})`:v?h.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"rgba(255, 255, 255, 1",t.rgbColorOpacity=st?(0,e.wW)(st)?"rgba(255,220,200, 0.5)":`rgba(${st}, 0.5)`:h&&v?h.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"var(--background-color,var(--secondary-background-color))",A=(0,e._k)(q,0),t.iconFilter=st?(0,e.wW)(st)?"none":"brightness(1.1)":"none"}else A=(0,e._k)(q,0);function R(){r||(window.hash=location.hash.split("?")[0],window.hash===z?(setTimeout((function(){i.classList.remove("close-pop-up"),i.classList.add("open-pop-up"),W.querySelector(".power-button").addEventListener("click",M,{passive:!0}),window.addEventListener("keydown",U,{passive:!0}),i.addEventListener("touchstart",D,{passive:!0}),i.addEventListener("touchmove",j,{passive:!0}),$=z+!0,document.body.style.overflow="hidden",setTimeout((()=>{window.justOpened=!0}),10),H()}),0),setTimeout((function(){P(i,!1)}),0)):i.classList.contains("open-pop-up")&&(setTimeout((function(){i.classList.remove("open-pop-up"),i.classList.add("close-pop-up"),W.querySelector(".power-button").removeEventListener("click",M),window.removeEventListener("keydown",U),i.removeEventListener("touchstart",D),i.removeEventListener("touchmove",j),$=z+!1,document.body.style.overflow="",window.justOpened=!1,clearTimeout(T)}),0),setTimeout((function(){P(i,!0)}),320)))}let W=t.content;function P(t,e){for(var n=t.querySelectorAll("video"),o=0;o<n.length;o++){var i=n[o]&&n[o].currentTime>0&&!n[o].paused&&!n[o].ended&&n[o].readyState>n[o].HAVE_CURRENT_DATA;e&&i?n[o].pause():e||i||(n[o].play(),n[o].currentTime>0&&(n[o].currentTime=1e4))}var a=t.querySelectorAll("*");for(o=0;o<a.length;o++)a[o].shadowRoot&&P(a[o].shadowRoot,e)}function H(){clearTimeout(T),B>0&&(T=setTimeout(F,B))}function F(){history.replaceState(null,null,location.href.split("#")[0])}r&&!t.editorModeAdded&&(console.log(z),i.classList.add("editor"),i.classList.remove("open-pop-up"),i.classList.remove("close-pop-up"),t.editorModeAdded=!0);const N=`                    \n\t            ha-card {\n\t                margin-top: 0 !important;\n\t                background: none !important;\n\t                border: none !important;\n\t            }\n\t            .card-content {\n\t                width: 100% !important;\n\t                padding: 0 !important;\n\t            }\n\t            #root {\n\t                transition: all 1s !important;\n\t                position: fixed !important;\n\t                margin: 0 -${k}; /* 7px */\n\t                width: 100%;\n\t                background-color: ${C};\n\t                box-shadow: 0px 0px 50px rgba(0,0,0,${O/100});\n\t                backdrop-filter: blur(${I}px);\n\t                -webkit-backdrop-filter: blur(${I}px);\n\t                border-radius: 42px;\n\t                box-sizing: border-box;\n\t                top: calc(120% + ${S} + var(--header-height));\n\t                grid-gap: 12px !important;\n\t                gap: 12px !important;\n\t                grid-auto-rows: min-content;\n\t                padding: 18px 18px 220px 18px !important;\n\t                height: 100% !important;\n\t                -ms-overflow-style: none; /* for Internet Explorer, Edge */\n\t                scrollbar-width: none; /* for Firefox */\n\t                overflow-y: auto; \n\t                overflow-x: hidden; \n\t                z-index: 1 !important; /* Higher value hide the more-info panel */\n\t                /* For older Safari but not working with Firefox */\n\t                /* display: grid !important; */  \n\t            }\n\t            #root.hidden {\n\t            \tdisplay: none !important;\n\t            }\n\t            #root > :first-child::after {\n\t                content: '';\n\t                display: block;\n\t                position: sticky;\n\t                top: 0;\n\t                left: -50px;\n\t                margin: -70px 0 -36px -36px;\n\t                overflow: visible;\n\t                width: 200%;\n\t                height: 100px;\n\t                background: linear-gradient(0deg, ${A} 0%, ${C} 80%);\n\t                z-index: 0;\n\t            } \n\t            #root::-webkit-scrollbar {\n\t                display: none; /* for Chrome, Safari, and Opera */\n\t            }\n\t            #root > :first-child {\n\t                position: sticky;\n\t                top: 0;\n\t                z-index: 1;\n\t                background: none !important;\n\t                overflow: visible;\n\t            }\n\t            #root.open-pop-up {\n\t                /*will-change: transform;*/\n\t                transform: translateY(-120%);\n\t                transition: transform .36s !important;\n\t            }\n\t            #root.open-pop-up > * {\n\t              /* Block child items to overflow and if they do clip them */\n\t              /*max-width: calc(100vw - 38px);*/\n\t              max-width: 100% !important;\n\t              /*overflow-x: clip;*/\n\t            }\n\t            #root.close-pop-up { \n\t                transform: translateY(-20%);\n\t                transition: transform .4s !important;\n\t                box-shadow: none;\n\t            }\n\t            @media only screen and (min-width: 600px) {\n\t                #root {\n\t                    top: calc(120% + ${E} + var(--header-height));\n\t                    width: calc(${b}${"%"!==_[2]||m?"":" - var(--mdc-drawer-width)"}) !important;\n\t                    left: calc(50% - ${_[1]/2}${_[2]});\n\t                    margin: 0 !important;\n\t                }\n\t            }  \n\t            @media only screen and (min-width: 870px) {\n\t                #root {\n\t                    left: calc(50% - ${_[1]/2}${_[2]} + ${m?"0px":"var(--mdc-drawer-width) "+("%"===_[2]?"":"/ 2")});\n\t                }\n\t            }  \n\t            #root.editor {\n\t                position: inherit !important;\n\t                width: 100% !important;\n\t                padding: 18px !important;\n\t            }\n\t        `,Y=`\n\t            ${V}\n\n\t            ha-card {\n\t                margin-top: 0 !important;\n\t            }\n\t            #header-container {\n\t                display: inline-flex;\n\t                ${u||g||h||f||p?"":"flex-direction: row-reverse;"}\n\t                height: 50px;\n\t                width: 100%;\n\t                margin: 0;\n\t                padding: 0;\n\t            }\n\t            #header-container > div {\n\t                display: ${u||g||h||f||p?"inline-flex":"none"};\n\t                align-items: center;\n\t                position: relative;\n\t                padding-right: 6px;\n\t                z-index: 1;\n\t                flex-grow: 1;\n\t                background-color: ${h?t.rgbColorOpacity:"var(--background-color,var(--secondary-background-color))"};\n\t                transition: background 1s;\n\t                border-radius: 25px;\n\t                margin-right: 14px;\n\t                backdrop-filter: blur(14px);\n\t                -webkit-backdrop-filter: blur(14px);\n\t            }\n\t            #header-container h2 {\n\t                display: inline-flex;\n\t                margin: 0 18px 0 0;\n\t                padding: 4px;\n\t                z-index: 1;\n\t                font-size: 18px;\n\t            }\n\t            #header-container p {\n\t                display: inline-flex;\n\t                font-size: 16px;\n\t                min-width: fit-content ;\n\t            }\n\t            .power-button {\n\t                cursor: pointer; \n\t                flex-grow: inherit; \n\t                width: 24px;\n\t                height: 24px;\n\t                border-radius: 12px;\n\t                margin: 0 10px;\n\t                background: none !important;\n\t                justify-content: flex-end;\n\t                background-color: var(--background-color,var(--secondary-background-color));\n\t            }\n\t            .close-pop-up {\n\t                height: 50px;\n\t                width: 50px;\n\t                border: none;\n\t                border-radius: 50%;\n\t                z-index: 1;\n\t                background: var(--background-color,var(--secondary-background-color));\n\t                color: var(--primary-text-color);\n\t                flex-shrink: 0;\n\t                cursor: pointer;\n\t            }\n\t        `;setTimeout((()=>{(0,e.L2)(n,t,Y,d,f,h,y),(0,e.L2)(n,t,N,d,f,h,t.bgColorChanged,"",i)}),0)}else t.host=t.getRootNode().host};if(t.popUp&&C&&C!==t.oldBgColor&&location.hash===z?(t.oldBgColor=C,t.bgColorChanged=!0):t.bgColorChanged=!1,t.popUpAdded)!r&&t.wasEditing&&(y||t.bgColorChanged)?(W(),t.wasEditing=!1):(z===window.hash&&(y||t.bgColorChanged)||r&&!t.editorModeAdded)&&(W(),r&&(t.wasEditing=!0));else{t.popUpAdded=!0;let e=setInterval((()=>{W(),t.popUp&&clearInterval(e)}),0);setTimeout((()=>{if(!t.popUp)throw t.errorTriggered=!0,clearInterval(e),new Error("Pop-up card must be placed inside a vertical_stack! If it's already the case, please ignore this error 🍻")}),6e3)}if(!r&&t.popUp&&t.editorModeAdded&&(t.popUp.classList.remove("editor"),t.editorModeAdded=!1),t.popUp&&D&&y){null===localStorage.getItem("previousTriggerState_"+z)&&localStorage.setItem("previousTriggerState_"+z,""),null===localStorage.getItem("isManuallyClosed_"+z)&&localStorage.setItem("isManuallyClosed_"+z,"false"),null===localStorage.getItem("isTriggered_"+z)&&localStorage.setItem("isTriggered_"+z,"false");let e=localStorage.getItem("previousTriggerState_"+z),o="true"===localStorage.getItem("isManuallyClosed_"+z),a="true"===localStorage.getItem("isTriggered_"+z);n.states[D].state!==j||null!==e||a||(i(0,z),a=!0,localStorage.setItem("isTriggered_"+z,a)),n.states[D].state!==e&&(o=!1,localStorage.setItem("previousTriggerState_"+z,n.states[D].state),localStorage.setItem("isManuallyClosed_"+z,o)),n.states[D].state!==j||o?n.states[D].state!==j&&R&&t.popUp.classList.contains("open-pop-up")&&a&&!o&&(history.replaceState(null,null,location.href.split("#")[0]),$=z+!1,a=!1,o=!0,localStorage.setItem("isManuallyClosed_"+z,o),localStorage.setItem("isTriggered_"+z,a)):(i(0,z),a=!0,localStorage.setItem("isTriggered_"+z,a))}}(this)}setConfig(t){if(!t.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.");this.config=t}getCardSize(){return-1e4}static getConfigElement(){return document.createElement("bubble-pop-up-editor")}}new MutationObserver(((t,e)=>{customElements.get("ha-panel-lovelace")&&(customElements.define("bubble-pop-up",h),e.disconnect())})).observe(document,{childList:!0,subtree:!0}),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-pop-up",name:"Bubble Pop-up",preview:!1,description:"Just add it in a vertical-stack first."}),console.info(`%c Bubble Card - Pop-up %c ${t} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})()})();
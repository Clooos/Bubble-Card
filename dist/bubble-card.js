(()=>{"use strict";let t="v1.7.1";const e=new Event("urlChanged");function n(){const t=function(){try{return document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("div")}catch(t){return}}();if(t)return t.classList.contains("edit-mode")}let i={},o=0;const a=function(t,e,n,a,r,s,l,d="",c=e.content){const p=o+++n,h=()=>{const i=a?Function("hass","entityId","state","return `"+a+"`;")(t,s,r):"";let o=n+"Added";if(!e[o]||e.previousStyle!==i||l||e.previousConfig!==e.config){if(!e[o]){if(e.styleElement=c.querySelector("style"),!e.styleElement){e.styleElement=document.createElement("style");const t=d?c.querySelector(d):c;t?.appendChild(e.styleElement)}e[o]=!0}const t=document.createElement("style");t.innerHTML=i+n,e.styleElement.parentNode.insertBefore(t,e.styleElement.nextSibling),e.styleElement.parentNode.removeChild(e.styleElement),e.styleElement=t,e.previousStyle=i,e.previousConfig=e.config}};i[p]?clearTimeout(i[p]):h(),i[p]=setTimeout(h,500)};function r(t,e,n,i,o){let a=t._hass,r=!(!e||!a.states[e].attributes)&&a.states[e].attributes;t.imageUrl=!!r.entity_picture&&r.entity_picture,s(t,a,e,n,i),o||setInterval((()=>{a=t._hass,e.startsWith("media_player.")&&e&&a.states[e]&&(t.currentEntityPicture=a.states[e].attributes.entity_picture,t.currentEntityPicture!==t.previousEntityPicture&&(t.imageUrl=t.currentEntityPicture,s(t,a,e,n,i),t.previousEntityPicture=t.currentEntityPicture))}),1e3)}function s(t,e,n,i,o){for(;o.firstChild;)o.removeChild(o.firstChild);let a=t.config.icon&&t.config.icon.includes("/")?t.config.icon:t.imageUrl?t.imageUrl:"";if(a&&(r=e.states[n].state,n.startsWith("media_player.")&&!["off","unknown","idle",void 0].includes(r)||!n.startsWith("media_player."))){const t=document.createElement("div");t.setAttribute("class","entity-picture"),t.setAttribute("alt","Icon"),o&&(o.appendChild(t),o.style.background="center / cover no-repeat url("+a+"), var(--card-background-color,var(--ha-card-background))")}else{const t=document.createElement("ha-icon");t.setAttribute("icon",i),t.setAttribute("class","icon"),o&&o.appendChild(t)}var r}function l(t){let e=[220,220,190];for(let n=0;n<3;n++)if(t[n]<e[n])return!1;return!0}let d;function c(t,e,n=1){if(t.startsWith("#"))if(4===t.length){let i=Math.min(255,parseInt(t.charAt(1).repeat(2),16)*n),o=Math.min(255,parseInt(t.charAt(2).repeat(2),16)*n),a=Math.min(255,parseInt(t.charAt(3).repeat(2),16)*n);d="rgba("+i+", "+o+", "+a+", "+e+")"}else{let i=Math.min(255,parseInt(t.slice(1,3),16)*n),o=Math.min(255,parseInt(t.slice(3,5),16)*n),a=Math.min(255,parseInt(t.slice(5,7),16)*n);d="rgba("+i+", "+o+", "+a+", "+e+")"}else if(t.startsWith("rgb")){let i=t.match(/\d+/g);d="rgba("+Math.min(255,i[0]*n)+", "+Math.min(255,i[1]*n)+", "+Math.min(255,i[2]*n)+", "+e+")"}return d}const p=(t,e,n,i)=>{i=i||{},n=null==n?{}:n;const o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=n,t.dispatchEvent(o),o},h=t=>{p(window,"haptic",t)},u=(t,e,n=!1)=>{n?history.replaceState(null,"",e):history.pushState(null,"",e),p(window,"location-changed",{replace:n})};function g(t,e){t.callService("homeassistant","toggle",{entity_id:e})}class m{constructor(t,e,n){this.element=t,this.config=e,this.sendActionEvent=n,this.tapTimeout=null,this.lastTap=0,this.startTime=null}handleStart(){this.startTime=Date.now(),clearTimeout(this.tapTimeout)}handleEnd(){if(null===this.startTime)return;const t=Date.now(),e=t-this.startTime,n=t-this.lastTap;this.lastTap=t,this.startTime=null,e>300?this.sendActionEvent(this.element,this.config,"hold"):n<300?this.sendActionEvent(this.element,this.config,"double_tap"):this.tapTimeout=setTimeout((()=>{this.sendActionEvent(this.element,this.config,"tap")}),300)}}function b(t,e,n){const i=e.tap_action??{action:"more-info"},o=e.double_tap_action||{action:"state"===e.card_type?"more-info":"toggle"},a=e.hold_action||{action:"state"===e.card_type?"more-info":"toggle"},r={entity:e.entity,tap_action:i,double_tap_action:o,hold_action:a};setTimeout((()=>{const e=new Event("hass-action",{bubbles:!0,composed:!0});e.detail={config:r,action:n},t.dispatchEvent(e)}),1)}function f(t,e){const n=new m(t,e,b);t.addEventListener("pointerdown",n.handleStart.bind(n),{passive:!0}),t.addEventListener("pointerup",n.handleEnd.bind(n),{passive:!0}),t.addEventListener("contextmenu",(t=>t.preventDefault()))}let v,_,y,w,x,k;function C(t,e,n,i){let o=e.styles?e.styles:"",a=e.entity&&n.states[e.entity]?e.entity:"",r=a?n.states[a].state:"";!function(t,e,n){t.hasState=e.states[n],t.hasState&&(t.newState=[t.hasState.state,t.hasState.attributes.rgb_color],t.oldState&&t.newState[0]===t.oldState[0]&&t.newState[1]===t.oldState[1]?t.stateChanged=!1:(t.oldState=t.newState,t.stateChanged=!0),t.stateChanged)}(t,n,a);let s=t.stateChanged,d=!e.icon&&a?n.states[a].attributes.icon||n.states[a].attributes.entity_picture||"":e.icon||"",p=e.name?e.name:a?n.states[a].attributes.friendly_name:"",h=e.width_desktop||"540px",u=h?h.match(/(\d+)(\D+)/):"",g=e.is_sidebar_hidden||!1,m=["on","open","cleaning","true","home","playing"].includes(r)||0!==Number(r)&&!isNaN(Number(r)),b=void 0===e.rise_animation||e.rise_animation,f=e.margin?"0"!==e.margin?e.margin:"0px":"7px",C=void 0!==e.bg_opacity?e.bg_opacity:"88",$=void 0!==e.shadow_opacity?e.shadow_opacity:"0",E=void 0!==e.bg_blur?e.bg_blur:"10",{iconColorOpacity:S,iconColor:L,iconFilter:O}=function(t,e,n,i,o){let a,r,s;return e&&e.startsWith("light.")?(a=(o=t.states[e].attributes.rgb_color)?i(o)?"rgba(255,220,200,0.5)":`rgba(${o}, 0.5)`:n?"rgba(255,220,200, 0.5)":"rgba(255, 255, 255, 0.5)",r=o?i(o)?"rgb(255,220,200)":`rgb(${o})`:n?"rgba(255,220,200, 1)":"rgba(255, 255, 255, 1)",s=o?i(o)?"none":"brightness(1.1)":"none"):(a="var(--accent-color)",s="brightness(1.1)"),{iconColorOpacity:a,iconColor:r,iconFilter:s}}(n,a,m,l),A=function(t,e,n,i){return`\n    .icon-container {\n        position: relative;\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        z-index: 1;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        cursor: pointer !important;\n        background-color: var(--card-background-color,var(--ha-card-background));\n    }\n    \n    .icon-container::after {\n        content: '';\n        position: absolute;\n        display: block;\n        opacity: ${t.startsWith("light.")?"0.2":"0"};\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        border-radius: 50%;\n        background-color: ${e?n||"var(--accent-color)":"var(--card-background-color,var(--ha-card-background))"};\n    }\n    \n    .icon {\n        display: flex;\n        width: 22px; \n        color: ${e?n||"var(--accent-color)":"inherit"} !important;\n        opacity: ${e?"1":t?"0.6":"1"};\n        filter: ${e?n?i:"brightness(1.1)":"inherit"};\n    }\n    \n    .entity-picture {\n        display: flex;\n        height: 38px;\n        width: 38px;\n        border-radius: 100%;\n    }\n    `}(a,m,L,O);x=x?"":getComputedStyle(document.body),k=k?"":x.getPropertyValue("--ha-card-background")||x.getPropertyValue("--card-background-color");let I=e.bg_color?e.bg_color:k;return!I||_&&_===t.color||(_=c(I,C/100,1.02),t.color=_,window.color=I),{customStyles:o,entityId:a,icon:d,name:p,widthDesktop:h,widthDesktopDivided:u,isSidebarHidden:g,state:r,stateChanged:s,stateOn:m,formatedState:w,riseAnimation:b,marginCenter:f,popUpOpen:v,rgbaColor:_,rgbColor:y,bgOpacity:C,shadowOpacity:$,bgBlur:E,iconColorOpacity:S,iconColor:L,iconFilter:O,iconStyles:A,haStyle:x,themeBgColor:k,color:I}}let $,E,S,L,O,A=[];function I(t){const e=t._hass;let{customStyles:i,icon:o,name:r,widthDesktop:s,widthDesktopDivided:d,isSidebarHidden:c,riseAnimation:g,marginCenter:m,popUpOpen:b}=C(t,t.config,e),f=(setInterval((()=>{O=n(),O&&!t.editorModeAdded?(t.buttonsContainer.classList.add("editor"),t.card.classList.add("editor"),t.editorModeAdded=!0):!O&&t.editorModeAdded&&(t.buttonsContainer.classList.remove("editor"),t.card.classList.remove("editor"),t.editorModeAdded=!1)}),100),!!t.config.hide_gradient);if(!t.buttonsAdded){const e=document.createElement("div");e.classList.add("horizontal-buttons-stack-container"),t.content.appendChild(e),t.buttonsContainer=e}const v=(t,n)=>{const i=t.background;if(e.states[n].attributes.rgb_color){const t=e.states[n].attributes.rgb_color,o=l(t)?"rgba(255,220,200, 0.5)":`rgba(${t}, 0.5)`;i.style.backgroundColor=o,i.style.border="1px solid rgba(0,0,0,0)"}else e.states[n].attributes.rgb_color||"on"!=e.states[n].state?(i.style.backgroundColor="rgba(0,0,0,0)",i.style.border="1px solid var(--primary-text-color)"):(i.style.backgroundColor="rgba(255,255,255,0.5)",i.style.border="1px solid rgba(0,0,0,0)")};let _=[],y=1;for(;t.config[y+"_link"];){const e=y+"_",n=t.config[e+"name"]||"",i=t.config[e+"pir_sensor"];o=t.config[e+"icon"]||"";const a=t.config[e+"link"],r=t.config[e+"entity"];_.push({button:n,pirSensor:i,icon:o,link:a,lightEntity:r}),y++}if(t.config.auto_order&&_.sort(((t,n)=>t.pirSensor&&n.pirSensor?"on"===e.states[t.pirSensor].state&&"on"===e.states[n.pirSensor].state?e.states[t.pirSensor].last_updated<e.states[n.pirSensor].last_updated?1:-1:"on"===e.states[t.pirSensor].state?-1:"on"===e.states[n.pirSensor].state||e.states[t.pirSensor].last_updated<e.states[n.pirSensor].last_updated?1:-1:t.pirSensor?n.pirSensor?void 0:-1:1)),!t.buttonsAdded||O){if(t.card.classList.add("horizontal-buttons-stack"),O&&t.buttonsContainer)for(;t.buttonsContainer.firstChild;)t.buttonsContainer.removeChild(t.buttonsContainer.firstChild);const e={};_.forEach((n=>{const i=((e,n,i)=>{const o=document.createElement("div");o.setAttribute("class",`button ${n.substring(1)}`),o.innerHTML=`\n            ${""!==i?`<ha-icon icon="${i}" class="icon" style="${""!==e?"margin-right: 8px;":""}"></ha-icon>`:""}\n            ${""!==e?`<p class="name">${e}</p>`:""}\n            <div class="background"></div>\n        `;const a=document.createElement("div");return a.setAttribute("class","color-background"),o.appendChild(a),o.background=a,o.hasListener||(o.addEventListener("click",(t=>{b=location.hash+!0,b!==n+!0?(u(0,n),b=n+!0):(history.replaceState(null,null,location.href.split("#")[0]),p(window,"location-changed",!0),b=n+!1),h("light")}),{passive:!0}),window.addEventListener("urlChanged",(()=>{t.config.highlight_current_view&&(location.pathname===n||location.hash===n?o.classList.add("highlight"):o.classList.remove("highlight"))}),{passive:!0}),o.hasListener=!0),o})(n.button,n.link,n.icon);e[n.link]=i,t.buttonsContainer.appendChild(i)})),t.buttonsAdded=!0,t.buttons=e}let w=0;t.buttonsUpdated&&!O||(function(t){let e=[];for(let n of _)t.buttons[n.link]&&(e.push(localStorage.getItem(`buttonWidth-${n.link}`)),e.push(localStorage.getItem(`buttonContent-${n.link}`)));t.previousConfig||(t.previousConfig=t.config),Promise.all(e).then((e=>{let n=0;for(let i of _){let o=t.buttons[i.link];if(o){let a=e[n];e[n+1],n+=2,a&&"0"!==a&&!O||(a=o.offsetWidth,localStorage.setItem(`buttonWidth-${i.link}`,a),localStorage.setItem(`buttonContent-${i.link}`,o.innerHTML),t.previousConfig=t.config),w!==o.previousPosition&&(o.style.transform=`translateX(${w}px)`,o.previousPosition=w),w+=parseInt(a)+12}i.lightEntity&&v(o,i.lightEntity,i.link)}}))}(t),t.buttonsAdded=!0);const x=`\n        ha-card {\n            border-radius: 0;\n        }\n        .horizontal-buttons-stack {\n            width: 100%;\n            margin-top: 0 !important;\n            /*background: none !important;*/\n            position: fixed;\n            height: 51px;\n            bottom: 16px;\n            left: ${m};\n            z-index: 1 !important; /* Higher value hide the more-info panel */\n        }\n        @keyframes from-bottom {\n            0% {transform: translateY(100px);}\n            26% {transform: translateY(-8px);}\n            46% {transform: translateY(1px);}\n            62% {transform: translateY(-2px);}\n            70% {transform: translateY(0);}\n            100% {transform: translateY(0);}\n        }\n        .horizontal-buttons-stack-container {\n            width: max-content;\n            position: relative;\n            height: 51px;\n        }\n        .button {\n            display: inline-flex;\n            position: absolute;\n            box-sizing: border-box !important;\n            /*border: 1px solid var(--primary-text-color);*/\n            align-items: center;\n            height: 50px;\n            line-height: 16px;\n            white-space: nowrap;\n            width: auto;\n            border-radius: 25px;\n            z-index: 1;\n            padding: 0 16px;\n            color: var(--primary-text-color);\n            transition: background-color 1s, border 1s, transform 1s;\n        }\n        .color-background {\n            border-radius: 24px;\n            width: 100%;\n            height: 100%;\n            box-sizing: border-box !important;\n            position: absolute;\n            left: 0;\n            top: 0;\n            z-index: -1;\n            border: 1px solid var(--primary-text-color);\n            transition: background-color 1s, border 1s, transform 1s;\n        }\n        .background {\n            opacity: 0.8;\n            border-radius: 24px;\n            width: 100%;\n            height: 100%;\n            box-sizing: border-box !important;\n            position: absolute;\n            left: 0;\n            z-index: -2;\n            background-color: var(--background-color,var(--primary-background-color));\n        }\n        .highlight {\n            animation: pulse 1.4s infinite alternate;\n        }\n        @keyframes pulse {\n            0% {\n                filter: brightness(0.7);\n            }\n            100% {\n                filter: brightness(1.3);\n            }\n        }\n        .icon {\n            height: 24px;\n        }\n        .card-content {\n            width: calc(100% + 18px);\n            box-sizing: border-box !important;\n            margin: 0 -36px !important;\n            padding: 0 36px !important;\n            overflow: scroll !important;\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n            -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 1) calc(0% + 28px), rgba(0, 0, 0, 1) calc(100% - 28px), transparent 100%);\n        }\n        .horizontal-buttons-stack::before {\n            content: '';\n            position: absolute;\n            top: -32px;\n            left: -100%;\n            display: ${f?"none":"block"};\n            background: linear-gradient(0deg, var(--background-color, var(--primary-background-color)) 50%, rgba(79, 69, 87, 0));\n            width: 200%;\n            height: 100px;\n        }\n        .card-content::-webkit-scrollbar {\n            display: none;\n        }\n        @media only screen and (min-width: 600px) {\n            .card-content {\n                position: fixed;\n                width: ${s} !important;\n                left: calc(50% - ${d[1]/2}${d[2]});\n                margin-left: -13px !important;\n                padding: 0 26px !important;\n            }\n        }\n        @media only screen and (min-width: 870px) {\n            .card-content {\n                position: fixed;\n                width: calc(${s}${"%"!==d[2]||c?"":" - var(--mdc-drawer-width)"}) !important;\n                left: calc(50% - ${d[1]/2}${d[2]} + ${!0===c?"0px":"var(--mdc-drawer-width) "+("%"===d[2]?"":"/ 2")});\n                margin-left: -13px !important;\n                padding: 0 26px !important;\n            }\n        }\n        .horizontal-buttons-stack.editor {\n            position: relative;\n            bottom: 0;\n            left: 0;\n            overflow: hidden;\n        }\n        .horizontal-buttons-stack.editor::before {\n            background: none;\n        }\n        .horizontal-buttons-stack-container.editor > .button,\n        .horizontal-buttons-stack-container.editor > .button > .color-background {\n            transition: background-color 0s, border 0s, transform 0s !important;\n        }\n        .horizontal-buttons-stack-container.editor {\n            margin-left: 1px;\n        }\n        .horizontal-buttons-stack.editor > .card-content {\n            position: relative;\n            width: calc(100% + 26px) !important;\n            left: -26px;\n            margin: 0 !important;\n            padding: 0;\n        }\n    `;!window.hasAnimated&&g&&(t.content.style.animation="from-bottom .6s forwards",window.hasAnimated=!0,setTimeout((()=>{t.content.style.animation="none"}),1500)),a(e,t,x,i)}window.openPopups=0,customElements.get("ha-switch");const T=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),V=T.prototype.html,z=T.prototype.css;let M;customElements.define("bubble-card-editor",class extends T{setConfig(t){this._config={...t}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config.card_type||""}get _button_type(){return this._config.button_type||"switch"}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _text(){return this._config.text||""}get _hash(){return this._config.hash||"#pop-up-name"}get _trigger_entity(){return this._config.trigger_entity||""}get _trigger_state(){return this._config.trigger_state||""}get _trigger_close(){return this._config.trigger_close||!1}get _margin(){return this._config.margin||"7px"}get _margin_top_mobile(){return this._config.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config.margin_top_desktop||"0px"}get _width_desktop(){return this._config.width_desktop||"540px"}get _bg_color(){return this._config.bg_color||window.color}get _bg_opacity(){return void 0!==this._config.bg_opacity?this._config.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config.bg_blur?this._config.bg_blur:"14"}get _shadow_opacity(){return void 0!==this._config.shadow_opacity?this._config.shadow_opacity:"0"}get _is_sidebar_hidden(){return this._config.is_sidebar_hidden||!1}get _rise_animation(){return void 0===this._config.rise_animation||this._config.rise_animation}get _auto_close(){return this._config.auto_close||""}get _close_on_click(){return this._config.close_on_click||!1}get _background_camera(){return this._config.background_camera||!1}get _icon_open(){return this._config.icon_open||""}get _icon_close(){return this._config.icon_close||""}get _open_service(){return this._config.open_service||"cover.open_cover"}get _close_service(){return this._config.open_service||"cover.close_cover"}get _stop_service(){return this._config.open_service||"cover.stop_cover"}get _auto_order(){return this._config.auto_order||!1}get _highlight_current_view(){return this._config.highlight_current_view||!1}get _show_state(){return this._config.show_state||!1}get _hide_backdrop(){return this._config.hide_backdrop||!1}get _hide_gradient(){return this._config.hide_gradient||!1}render(){if(!this.hass)return V``;if(!this.listsUpdated){const t=t=>({label:t,value:t});this.allEntitiesList=Object.keys(this.hass.states).map(t),this.lightList=Object.keys(this.hass.states).filter((t=>"light"===t.substr(0,t.indexOf(".")))).map(t),this.sensorList=Object.keys(this.hass.states).filter((t=>"sensor"===t.substr(0,t.indexOf(".")))).map(t),this.binarySensorList=Object.keys(this.hass.states).filter((t=>"binary_sensor"===t.substr(0,t.indexOf(".")))).map(t),this.coverList=Object.keys(this.hass.states).filter((t=>"cover"===t.substr(0,t.indexOf(".")))).map(t),this.cardTypeList=[{label:"Button",value:"button"},{label:"Cover",value:"cover"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Pop-up",value:"pop-up"},{label:"Separator",value:"separator"}],this.buttonTypeList=[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"}],this.listsUpdated=!0}const e=this.allEntitiesList,n=(this.lightList,this.sensorList,this.coverList),i=this.cardTypeList,o=this.buttonTypeList;if("pop-up"===this._config.card_type)return V`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",i)}
                    <h3>Pop-up</h3>
                    <ha-alert alert-type="info">This card allows you to convert any vertical stack into a pop-up. Each pop-up can be opened by targeting its link (e.g. '#pop-up-name'), with navigation_path or with the horizontal buttons stack that is included.<br><b>It must be placed within a vertical-stack card at the top most position to function properly. The pop-up will be hidden by default until you open it.</b></ha-alert>
                    <ha-alert alert-type="warning">Since v1.7.0, the optimized mode has been removed to ensure stability and to simplify updates for everyone. However, if your pop-up content still appears on the screen during page loading, <a style="color: #fff" href="https://github.com/Clooos/Bubble-Card#pop-up-initialization-fix">you can install this similar fix.</a></ha-alert>
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
                    ${this.makeDropdown("Optional - Entity to toggle (e.g. room light group)","entity",e)}
                    ${this.makeDropdown("Optional - Entity state to display (e.g. room temperature)","state",e)}
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
                    <ha-formfield .label="Optional - Play camera in background (not recommended)">
                        <ha-switch
                            aria-label="Optional - Play camera in background (not recommended)"
                            .checked=${this._background_camera}
                            .configValue="${"background_camera"}"
                            @change=${this._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Play camera in background (not recommended)</label> 
                        </div>
                    </ha-formfield>
                    <h3>Pop-up trigger</h3>
                    <ha-alert alert-type="info">This allows you to open this pop-up based on the state of any entity, for example you can open a "Security" pop-up with a camera when a person is in front of your house. You can also create a toggle helper (input_boolean) and trigger its opening/closing in an automation.</ha-alert>
                    ${this.makeDropdown("Optional - Entity to open the pop-up based on its state","trigger_entity",e)}
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
                        label="Optional - Background/Backdrop blur (0-100 range)"
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
                    <ha-alert alert-type="info">Set this toggle to true on the first pop-up of your main dashboard to disable the backdrop on all pop-ups.</ha-alert>
                    ${this.makeVersion()}
              </div>
            `;if("button"===this._config.card_type)return V`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",i)}
                    <h3>Button</h3>
                    <ha-alert alert-type="info">This card can be a slider or a button, allowing you to toggle your entities, control the brightness of your lights and the volume of your media players. To access color / control of an entity, simply tap on the icon.</ha-alert>
                    ${this.makeDropdown("slider"!==this._button_type?"Entity (toggle)":"Entity (light or media_player)","entity",e)}
                     <ha-formfield .label="Optional - Show entity state">
                        <ha-switch
                            aria-label="Optional - Show entity state"
                            .checked=${this._show_state}
                            .configValue="${"show_state"}"
                            @change=${this._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Show entity state</label> 
                        </div>
                    </ha-formfield>
                    ${this.makeDropdown("Button type","button_type",o)}
                    <ha-textfield
                        label="Optional - Name"
                        .value="${this._name}"
                        .configValue="${"name"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    ${this.makeDropdown("Optional - Icon","icon")}
                    ${this.makeVersion()}
                </div>
            `;if("separator"===this._config.card_type)return V`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",i)}
                    <h3>Separator</h3>
                    <ha-alert alert-type="info">This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...</ha-alert>
                    <ha-textfield
                        label="Name"
                        .value="${this._name}"
                        .configValue="${"name"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    ${this.makeDropdown("Icon","icon")}
                    ${this.makeVersion()}
              </div>
            `;if("horizontal-buttons-stack"===this._config.card_type){if(!this.buttonAdded&&this.shadowRoot.querySelector("#add-button")){this.buttonAdded=!0;const t=this.shadowRoot.querySelector("#add-button");for(this.buttonIndex=0;this._config[this.buttonIndex+1+"_link"];)this.buttonIndex++;t.addEventListener("click",(()=>{this.buttonIndex++;const e=t.style.opacity,n=t.innerText;t.style.opacity="0.6",t.style.transition="opacity 1s",t.innerText="Loading...",setTimeout((()=>{t.style.opacity=e,t.innerText=n}),5e3)}),{passive:!0})}return V`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",i)}
                    <h3>Horizontal buttons stack</h3>
                    <ha-alert alert-type="info">This card is the companion to the pop-up card, allowing you to open the corresponding pop-ups. It also allows you to open any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.<br><br><b>Please note that this card may take some time to load in edit mode.</b></ha-alert>
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
                    <div id="buttons-container">
                        ${this.makeButton()}
                    </div>
                    <button id="add-button">Add Button</button>
                    <h3>Styling options</h3>
                    <ha-textfield
                        label="Optional - Margin (fix centering on some themes) (e.g. 13px)"
                        .value="${this._margin}"
                        .configValue="${"margin"}"
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
                    <ha-formfield .label="Optional - Fix when the sidebar hidden on desktop">
                        <ha-switch
                            aria-label="Optional - Fix when the sidebar hidden on desktop"
                            .checked=${this._is_sidebar_hidden}
                            .configValue="${"is_sidebar_hidden"}"
                            @change=${this._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Fix when the sidebar is hidden on desktop</label> 
                        </div>
                    </ha-formfield>
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
                    ${this.makeVersion()}
                </div>
            `}return"cover"===this._config.card_type?V`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",i)}
                    <h3>Cover</h3>
                    <ha-alert alert-type="info">This card allows you to control your covers.</ha-alert>
                    ${this.makeDropdown("Entity","entity",n)}
                    <ha-formfield .label="Optional - Show entity state">
                        <ha-switch
                            aria-label="Optional - Show entity state"
                            .checked=${this._show_state}
                            .configValue="${"show_state"}"
                            @change=${this._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Show entity state</label> 
                        </div>
                    </ha-formfield>
                    <ha-textfield
                        label="Optional - Name"
                        .value="${this._name||""}"
                        .configValue="${"name"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Open service (cover.open_cover by default)"
                        .value="${this._open_service}"
                        .configValue="${"open_service"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Stop service (cover.stop_cover by default)"
                        .value="${this._stop_service}"
                        .configValue="${"stop_service"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Close service (cover.close_cover by default)"
                        .value="${this._close_service}"
                        .configValue="${"close_service"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    ${this.makeDropdown("Optional - Open icon","icon_open")}
                    ${this.makeDropdown("Optional - Closed icon","icon_close")}
                    <h3>Styling options</h3>
                    ${this.makeDropdown("Optional - Arrow down icon","icon_down")}
                    ${this.makeDropdown("Optional - Arrow up icon","icon_up")}
                    ${this.makeVersion()}
                </div>
            `:"empty-column"===this._config.card_type?V`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",i)}
                    <h3>Empty column</h3>
                    <ha-alert alert-type="info">Just an empty card to fill any empty column.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `:this._config.card_type?void 0:V`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",i)}
                    <ha-alert alert-type="info">You need to add a card type first.</ha-alert>
                    <img style="width: 100%" src="https://user-images.githubusercontent.com/36499953/268039672-6dd13476-42c5-427c-a4d8-ad4981fc2db7.gif">
                    <p>The <b>Bubble Card ${t}</b> changelog is available <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${t}"><b>here</b></a>.
                    <br/><br/><ha-alert alert-type="info"><b>Column fix</b>: If you experience some issues with your dashboard layout, such as empty columns or misaligned cards. You can apply a fix that restores the behavior of the previous versions by adding <code>column_fix: true</code> in YAML to the <b>first</b> Bubble Card on your dashboard. You can also try to add a negative value to find the one that fit your dashboard like <code>column_fix: -10</code>. Then refresh the page.</ha-alert>
                    <hr />
                    <p>Almost everything is available in the GUI editor, but in the YAML editor you can add your own <b>custom styles</b>, create <b>custom buttons</b> or modify the <b>tap actions</b> of all cards. You can find more details on my GitHub page.</p>
                    <a href="https://github.com/Clooos/Bubble-Card"><img src="https://img.shields.io/badge/GitHub-Documentation-blue?logo=github"></a>
                    <hr />
                    <p>And if you like my project and want to support me, please consider making a donation. Any amount is welcome and very much appreciated! 🍻</p>
                    <div style="display: inline-block;">
                        <a href="https://www.buymeacoffee.com/clooos"><img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?logo=buy-me-a-coffee"></a> 
                        <a href="https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR"><img src="https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal"></img></a>
                    </div>
                    ${this.makeVersion()}
                </div>
            `}makeDropdown(t,e,n){return this.hass,t.includes("icon")||t.includes("Icon")?V`
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
            `:V`
            <div>
                <ha-combo-box
                    label="${t}"
                    .value="${this["_"+e]}"
                    .configValue="${e}"
                    .items="${n}"
                    @value-changed="${this._valueChanged}"
                ></ha-combo-box>
            </div>
          `}makeButton(){let t=[];for(let e=1;e<=this.buttonIndex;e++)t.push(V`
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
            `);return t}makeVersion(){return V`
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
                ">
                    ${t}
                </span>
            </h4>
        `}removeButton(t){delete this._config[t+"_name"],delete this._config[t+"_icon"],delete this._config[t+"_link"],delete this._config[t+"_entity"],delete this._config[t+"_pir_sensor"];for(let e=t;e<this.buttonIndex;e++)this._config[e+"_name"]=this._config[e+1+"_name"],this._config[e+"_icon"]=this._config[e+1+"_icon"],this._config[e+"_link"]=this._config[e+1+"_link"],this._config[e+"_entity"]=this._config[e+1+"_entity"],this._config[e+"_pir_sensor"]=this._config[e+1+"_pir_sensor"];delete this._config[this.buttonIndex+"_name"],delete this._config[this.buttonIndex+"_icon"],delete this._config[this.buttonIndex+"_link"],delete this._config[this.buttonIndex+"_entity"],delete this._config[this.buttonIndex+"_pir_sensor"],this.buttonIndex--,p(this,"config-changed",{config:this._config})}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,n=t.detail;let i,o="string"==typeof e.value?e.value.replace(",","."):e.value;("string"!=typeof o||!o.endsWith(".")&&"-"!==o)&&(e.configValue&&("ha-switch"===e.type?i=e.checked:(""!==o&&(!isNaN(parseFloat(o))&&isFinite(o)?(i=parseFloat(o),isNaN(i)&&(i=void 0)):i=o),i=void 0!==i?i:void 0===e.checked&&n.value?e.checked||n.value:e.value||e.checked),this._config[e.configValue]!==i&&(this._config={...this._config,[e.configValue]:i},p(this,"config-changed",{config:this._config}))),"HA-COMBO-BOX"===e.tagName&&n.value&&(this._config={...this._config,[e.configValue]:n.value},p(this,"config-changed",{config:this._config})))}static get styles(){return z`
          div {
            display: grid;
            grid-gap: 12px;
          }
          #add-button {
            margin-top: 12px;
            color: var(--text-primary-color);
            width: 100%;
            height: 32px;
            border-radius: 16px;
            border: none;
            background-color: var(--accent-color);
            cursor: pointer;
          }
          a {
            color: var(--primary-text-color);
          }
          p {
            margin-bottom: 4px;
          }
          hr {
            display: inline-block;
            width: 100%;
            background-color: var(--text-primary-color);
            opacity: .15;
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
        `}}),function(){if(!window.eventAdded){function t(){window.dispatchEvent(e)}window.eventAdded=!0,window.popUpInitialized=!1,["location-changed","connection-status","popstate"].forEach((e=>{window.addEventListener(e,t)}),{passive:!0,once:!0});const n=()=>{window.dispatchEvent(e)};window.addEventListener("popUpInitialized",n,{passive:!0})}}();class D extends HTMLElement{set hass(t){switch(function(t){if(!t.content){let e=t.shadowRoot||t.attachShadow({mode:"open"}),n=document.createDocumentFragment(),i=document.createElement("ha-card");i.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let o=document.createElement("div");o.className="card-content",o.style.padding="0",i.appendChild(o),n.appendChild(i),e.appendChild(n),t.card=i,t.content=o}}(this),this._hass=t,M=n(),this.editor=M,this.config.card_type){case"pop-up":!function(t){const e=t.editor;if(t.initStyleAdded||t.popUp||e||(t.card.style.marginTop="4000px",t.initStyleAdded=!0),t.errorTriggered)return;const n=t._hass,i=t.config,o=setTimeout((()=>{if(t.verticalStack||(t.verticalStack=t.getRootNode()),clearTimeout(o),t.verticalStack&&(!t.popUp||y||t.stateEntityChanged||e&&!t.editorModeAdded)){t.popUp||(t.popUp=t.verticalStack.querySelector("#root"),t.popUp.classList.add("pop-up","close-pop-up")),e&&!t.editorModeAdded&&(t.popUp.classList.add("editor"),t.popUp.classList.remove("close-pop-up","open-pop-up"),t.editorModeAdded=!0),pt();const n=new Event("popUpInitialized");window.dispatchEvent(n)}else!e&&t.popUp&&t.editorModeAdded&&(t.popUp.classList.remove("editor"),pt(),t.editorModeAdded=!1)}),0);let{customStyles:s,entityId:d,icon:h,name:m,widthDesktop:b,widthDesktopDivided:v,isSidebarHidden:_,stateChanged:y,stateOn:w,formatedState:x,marginCenter:k,popUpOpen:O,rgbaColor:I,rgbColor:T,bgOpacity:V,shadowOpacity:z,bgBlur:M,iconColorOpacity:D,iconColor:U,iconFilter:B,iconStyles:H,themeBgColor:P,color:F}=C(t,i,n),Y=i.auto_close||!1,q=i.hash,N=i.entity?"flex":"none",W=i.text||"",R=i.state,X=i.close_on_click||!1,j=i.hide_backdrop||!1,G=i.hide_card||"";!window.hideBackdrop&&j&&(window.hideBackdrop=!0);let Z=t.config.background_camera||!1,J=i.margin_top_mobile&&"0"!==i.margin_top_mobile?i.margin_top_mobile:"0px",K=i.margin_top_desktop&&"0"!==i.margin_top_desktop?i.margin_top_desktop:"0px",Q=R&&n.states[R]?n.states[R].state:"";function tt(){history.replaceState(null,null,location.href.split("#")[0]),p(window,"location-changed",!0)}function et(t){window.hash===q&&nt();const e=t.composedPath();!e||e.some((t=>"HA-MORE-INFO-DIALOG"===t.nodeName))||e.some((t=>"HA-DIALOG-DATE-PICKER"===t.nodeName))||e.some((t=>"root"===t.id&&!t.classList.contains("close-pop-up")))||setTimeout((function(){window.hash===q&&(tt(),localStorage.setItem("isManuallyClosed_"+q,!0))}),100)}function nt(){clearTimeout(S),Y>0&&(S=setTimeout(tt,Y))}function it(){g(n,d)}function ot(t){"Escape"===t.key&&(tt(),localStorage.setItem("isManuallyClosed_"+q,!0))}function at(t){window.hash===q&&nt(),$=t.touches[0].clientY,E=$}function rt(t){t.touches[0].clientY-$>300&&t.touches[0].clientY>E&&(tt(),localStorage.setItem("isManuallyClosed_"+q,!0)),E=t.touches[0].clientY}function st(){!e&&t.popUp&&(window.hash=location.hash.split("?")[0],window.hash!==q||O===q+!0||t.popUp.classList.contains("open-pop-up")?window.hash!==q&&O!==q+!1&&t.popUp.classList.contains("open-pop-up")&&(O=q+!1,window.openPopups--,t.popUp.classList.remove("open-pop-up"),t.popUp.classList.add("close-pop-up"),ct(),t.content.querySelector(".power-button").removeEventListener("click",it),window.removeEventListener("keydown",ot),window.removeEventListener("click",et),t.popUp.removeEventListener("touchstart",at),t.popUp.removeEventListener("touchmove",rt),document.body.style.overflow="",clearTimeout(S),X&&(t.popUp.removeEventListener("mouseup",tt),t.popUp.removeEventListener("touchend",tt)),setTimeout((function(){lt(t,t.popUp,!0)}),320)):(O=q+!0,window.openPopups++,t.popUp.classList.remove("close-pop-up"),t.popUp.classList.add("open-pop-up"),ct(),t.content.querySelector(".power-button").addEventListener("click",it,{passive:!0}),window.addEventListener("keydown",ot,{passive:!0}),t.popUp.addEventListener("touchstart",at,{passive:!0}),t.popUp.addEventListener("touchmove",rt,{passive:!0}),lt(t,t.popUp,!1),nt(),setTimeout((function(){X&&(t.popUp.addEventListener("mouseup",tt,{passive:!0}),t.popUp.addEventListener("touchend",tt,{passive:!0})),document.body.style.overflow="hidden",window.addEventListener("click",et,{passive:!0})}),10)))}function lt(t,n,i){if(!Z||G)if((i||G&&O!==q+!0)&&!e){const e=n.querySelectorAll("frigate-card, hui-picture-glance-card, hui-picture-entity-card, hui-picture-elements-card, hui-picture-card, hui-camera-card, webrtc-camera"+G);for(let n=0;n<e.length;n++)t.videoPaused=!0,A.push({element:e[n],nextSibling:e[n].nextSibling,parent:e[n].parentNode}),e[n].parentNode.removeChild(e[n])}else if(t.videoPaused&&(!i||G&&O!==q+!1||e))for(;A.length>0;){t.videoPaused=!1;var o=A.shift();o.parent.insertBefore(o.element,o.nextSibling)}}Q&&(t.stateEntityOld&&t.stateEntityOld===Q?t.stateEntityChanged=!1:(t.stateEntityOld=Q,t.stateEntityChanged=!0));const{backdrop:dt,toggleBackdrop:ct}=function(){if(window.backdrop)return window.backdrop;const t=document.createElement("div");t.classList.add("backdrop","hidden"),document.body.appendChild(t);const e=document.createElement("style");return e.innerHTML=`\n\t\t\t${s}\n\t\t    .backdrop {\n\t\t\t\tbackground-color: ${c(P,.7,.7)};\n\t\t\t\tposition: fixed;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tz-index: 0;\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: opacity 0.3s;\n\t\t\t\tdisplay: flex;\n\t\t    }\n\n\t\t    .backdrop.visible {\n\t\t\t\topacity: 1;\n\t\t\t\tbackdrop-filter: blur(16px);\n\t\t\t\t-webkit-backdrop-filter: blur(16px);\n\t\t    }\n\n\t\t    .backdrop.hidden {\n\t\t\t\topacity: 0;\n\t\t\t\tbackdrop-filter: none;\n\t\t\t\t-webkit-backdrop-filter: none;\n\t\t\t\tpointer-events: none;\n\t\t    }\n\t\t  `,document.head.appendChild(e),window.backdrop={backdrop:t,toggleBackdrop:function(){j?window.backdrop.hidden||(t.style.pointerEvents="none",window.backdrop.hidden=!0):(1===window.openPopups&&(t.classList.add("visible"),t.classList.remove("hidden")),0===window.openPopups&&(t.classList.add("hidden"),t.classList.remove("visible")))}},window.backdrop}();function pt(){let o=t.popUp;x=R?n.formatEntityState(n.states[R]):"",t.headerAdded?(y||t.stateEntityChanged)&&(t.iconContainer.innerHTML="",r(t,d,h,t.iconContainer,e),t.h2.textContent=m,t.p.textContent=x+" "+W,t.haIcon2.setAttribute("style",`display: ${N};`)):(t.headerContainer=document.createElement("div"),t.headerContainer.setAttribute("id","header-container"),t.div=document.createElement("div"),t.headerContainer.appendChild(t.div),t.iconContainer=document.createElement("div"),t.iconContainer.setAttribute("class","icon-container"),t.div.appendChild(t.iconContainer),r(t,d,h,t.iconContainer,e),f(t.iconContainer,i),t.h2=document.createElement("h2"),t.h2.textContent=m,t.div.appendChild(t.h2),t.p=document.createElement("p"),t.p.textContent=x+" "+W,t.div.appendChild(t.p),t.haIcon2=document.createElement("ha-icon"),t.haIcon2.setAttribute("class","power-button"),t.haIcon2.setAttribute("icon","mdi:power"),t.haIcon2.setAttribute("style",`display: ${N};`),t.div.appendChild(t.haIcon2),t.button=document.createElement("button"),t.button.setAttribute("class","close-pop-up"),t.button.onclick=function(){tt(),localStorage.setItem("isManuallyClosed_"+q,!0)},t.headerContainer.appendChild(t.button),t.haIcon3=document.createElement("ha-icon"),t.haIcon3.setAttribute("icon","mdi:close"),t.button.appendChild(t.haIcon3),t.content.appendChild(t.headerContainer),t.header=t.div,t.headerAdded=!0),function(){if(d){const t=n.states[d].attributes.rgb_color;L=t?l(t)?"rgba(255,220,200, 0.5)":`rgba(${t}, 0.5)`:d&&w?d.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"var(--background-color,var(--secondary-background-color))"}}(),t.eventAdded||e?t.eventAdded&&e&&(lt(t,t.popUp,!1),window.removeEventListener("urlChanged",window["checkHashRef_"+q]),ct(),t.eventAdded=!1):(lt(t,t.popUp,!0),window["checkHashRef_"+q]=st,window.addEventListener("urlChanged",window["checkHashRef_"+q],{passive:!0}),t.eventAdded=!0);const c=`                    \n            ha-card {\n                margin-top: 0 !important;\n                background: none !important;\n                border: none !important;\n            }\n            .pop-up.card-content {\n                width: 100% !important;\n                padding: 0 !important;\n            }\n            .pop-up {\n            \ttransition: transform .36s;\n                position: fixed;\n                margin: 0 -${k}; /* 7px */\n                width: 100%;\n                background-color: ${I};\n                border-radius: 42px;\n                box-sizing: border-box;\n                top: calc(120% + ${J} + var(--header-height));\n                grid-gap: 12px;\n                gap: 12px;\n                grid-auto-rows: min-content;\n                padding: 18px 18px 220px 18px;\n                height: 100%;\n                -ms-overflow-style: none; /* for Internet Explorer, Edge */\n                scrollbar-width: none; /* for Firefox */\n                overflow-y: auto; \n                overflow-x: hidden; \n                z-index: 1 !important; /* Higher value hide the more-info panel */\n                /* For older Safari but not working with Firefox */\n                /* display: grid !important; */  \n            }\n\t\t\t.pop-up > :first-child::after {\n\t\t\t    content: '';\n\t\t\t    display: block;\n\t\t\t    position: sticky;\n\t\t\t    top: 0;\n\t\t\t    left: -50px;\n\t\t\t    margin: -70px 0 -36px -36px;\n\t\t\t    overflow: visible;\n\t\t\t    width: 200%;\n\t\t\t    height: 100px;\n\t\t\t    background: ${I};\n\t\t\t    -webkit-mask-image: linear-gradient(0deg, transparent 0%, black 80%);\n\t\t\t    mask-image: linear-gradient(0deg, transparent 0%, black 80%);\n\t\t\t    z-index: 0;\n\t\t\t}\n            .pop-up::-webkit-scrollbar {\n                display: none; /* for Chrome, Safari, and Opera */\n            }\n            .pop-up > :first-child {\n                position: sticky;\n                top: 0;\n                z-index: 1;\n                background: none !important;\n                overflow: visible;\n            }\n            .pop-up.open-pop-up {\n                transform: translateY(-120%);\n                box-shadow: 0px 0px 50px rgba(0,0,0,${z/100});\n                backdrop-filter: ${j||window.hideBackdrop?"blur("+M+"px)":"none"};\n                -webkit-backdrop-filter: ${j||window.hideBackdrop?"blur("+M+"px)":"none"};\n            }\n            .pop-up.close-pop-up { \n                transform: translateY(-20%);\n                box-shadow: none !important;\n\t\t\t\tbackdrop-filter: none !important;\n\t\t\t\t-webkit-backdrop-filter: none !important;\n            }\n            @media only screen and (min-width: 600px) {\n                .pop-up {\n                    top: calc(120% + ${K} + var(--header-height));\n                    width: calc(${b}${"%"!==v[2]||_?"":" - var(--mdc-drawer-width)"}) !important;\n                    left: calc(50% - ${v[1]/2}${v[2]});\n                    margin: 0 !important;\n                }\n            }  \n            @media only screen and (min-width: 870px) {\n                .pop-up {\n                    left: calc(50% - ${v[1]/2}${v[2]} + ${_?"0px":"var(--mdc-drawer-width) "+("%"===v[2]?"":"/ 2")});\n                }\n            }  \n            .pop-up.editor {\n                position: inherit !important;\n                width: 100% !important;\n                padding: 18px !important;\n                backdrop-filter: none !important;\n            }\n        `,p=`\n            ${H}\n\n            ha-card {\n                margin-top: 0 !important;\n            }\n            #header-container {\n                display: inline-flex;\n                ${h||m||d||Q||W?"":"flex-direction: row-reverse;"}\n                height: 50px;\n                width: 100%;\n                margin: 0;\n                padding: 0;\n            }\n            #header-container > div {\n                display: ${h||m||d||Q||W?"inline-flex":"none"};\n                align-items: center;\n                position: relative;\n                padding-right: 6px;\n                z-index: 1;\n                flex-grow: 1;\n                background-color: ${d?L:"var(--background-color,var(--secondary-background-color))"};\n                transition: background 1s;\n                border-radius: 25px;\n                margin-right: 14px;\n                backdrop-filter: blur(14px);\n                -webkit-backdrop-filter: blur(14px);\n            }\n            #header-container h2 {\n                display: inline-flex;\n                margin: 0 18px 0 0;\n                padding: 4px;\n                z-index: 1;\n                font-size: 18px;\n            }\n            #header-container p {\n                display: inline-flex;\n                font-size: 16px;\n                min-width: fit-content ;\n            }\n            .power-button {\n                cursor: pointer; \n                flex-grow: inherit; \n                width: 24px;\n                height: 24px;\n                border-radius: 12px;\n                margin: 0 10px;\n                background: none !important;\n                justify-content: flex-end;\n                background-color: var(--background-color,var(--secondary-background-color));\n            }\n            .close-pop-up {\n                height: 50px;\n                width: 50px;\n                border: none;\n                border-radius: 50%;\n                z-index: 1;\n                background: var(--background-color,var(--secondary-background-color));\n                color: var(--primary-text-color);\n                flex-shrink: 0;\n                cursor: pointer;\n            }\n        `;a(n,t,c,s,Q,d,"","",o),a(n,t,p,s,Q,d,y)}let ht=i.trigger_entity?i.trigger_entity:"",ut=i.trigger_state?i.trigger_state:"",gt=!!i.trigger_close&&i.trigger_close;if(t.popUp&&ht){const e=n.states[ht]?n.states[ht].state:void 0;if(!e)return;!function(e,n){if(!n||n===e)return;e=n,null===localStorage.getItem("previousTriggerState_"+q)&&localStorage.setItem("previousTriggerState_"+q,""),null===localStorage.getItem("isManuallyClosed_"+q)&&localStorage.setItem("isManuallyClosed_"+q,"false"),null===localStorage.getItem("isTriggered_"+q)&&localStorage.setItem("isTriggered_"+q,"false");let i=localStorage.getItem("previousTriggerState_"+q),o="true"===localStorage.getItem("isManuallyClosed_"+q),a="true"===localStorage.getItem("isTriggered_"+q);n!==ut||null!==i||a||(u(0,q),a=!0,localStorage.setItem("isTriggered_"+q,a)),n!==i&&(o=!1,localStorage.setItem("previousTriggerState_"+q,n),localStorage.setItem("isManuallyClosed_"+q,o)),n!==ut||o?n!==ut&&gt&&t.popUp.classList.contains("open-pop-up")&&a&&!o&&(tt(),a=!1,o=!0,localStorage.setItem("isManuallyClosed_"+q,o),localStorage.setItem("isTriggered_"+q,a)):(u(0,q),a=!0,localStorage.setItem("isTriggered_"+q,a))}(void 0,e)}}(this);break;case"button":!function(t){const e=t._hass,n=t.editor;let{customStyles:i,entityId:o,icon:s,name:l,state:d,stateChanged:c,stateOn:p,formatedState:u,rgbaColor:m,rgbColor:b,iconColorOpacity:v,iconColor:_,iconFilter:y,iconStyles:w}=C(t,t.config,e);u=o&&(c||n)?e.formatEntityState(e.states[o]):"";let x=t.config.button_type||"switch",k=!!t.config.show_state&&t.config.show_state,$=o?e.states[o].attributes.brightness||0:"",E=o?e.states[o].attributes.volume_level||0:"",S=!1,L=$,O=E,A=0,I=0,T=0,V=!1,z=null;if(t.config.service_on,t.config.service_off,!t.buttonAdded){const e=document.createElement("div");e.setAttribute("class","button-container"),t.content.appendChild(e)}const M=document.createElement("div");M.setAttribute("class","icon-container"),t.iconContainer=M;const D=document.createElement("div");D.setAttribute("class","name-container");const U=document.createElement("div");U.setAttribute("class","switch-button");const B=document.createElement("div");B.setAttribute("class","range-slider");const H=document.createElement("div");if(H.setAttribute("class","range-fill"),!t.buttonContainer||n){if(n&&t.buttonContainer){for(;t.buttonContainer.firstChild;)t.buttonContainer.removeChild(t.buttonContainer.firstChild);t.eventAdded=!1,t.wasEditing=!0}t.buttonContainer=t.content.querySelector(".button-container"),"slider"!==x||t.buttonAdded&&!n?("switch"===x||"custom"===x||n)&&(t.buttonContainer.appendChild(U),U.appendChild(M),U.appendChild(D),t.switchButton=t.content.querySelector(".switch-button")):(t.buttonContainer.appendChild(B),B.appendChild(M),B.appendChild(D),B.appendChild(H),t.rangeFill=t.content.querySelector(".range-fill")),r(t,o,s,M,n),D.innerHTML=`\n            <p class="name">${l}</p>\n            ${k?`<p class="state">${u}</p>`:""}\n        `,t.buttonAdded=!0}function P(t){h("success");let e=t.querySelector(".feedback-element");e||(e=document.createElement("div"),e.setAttribute("class","feedback-element"),t.appendChild(e)),e.style.animation="tap-feedback .5s",setTimeout((()=>{e.style.animation="none",t.removeChild(e)}),500)}function F(t){A=t.pageX||(t.touches?t.touches[0].pageX:0),I=t.pageY||(t.touches?t.touches[0].pageY:0),T=B.value,t.target!==M&&t.target!==M.querySelector("ha-icon")&&(S=!0,document.addEventListener("mouseup",q,{passive:!0}),document.addEventListener("touchend",q,{passive:!0}),document.addEventListener("mousemove",Y,{passive:!0}),document.addEventListener("touchmove",Y,{passive:!0}),z=setTimeout((()=>{R(t.pageX||t.touches[0].pageX),N(),z=null}),200))}function Y(t){const e=t.pageX||(t.touches?t.touches[0].pageX:0),n=t.pageY||(t.touches?t.touches[0].pageY:0);Math.abs(n-I)>Math.abs(e-A)?(clearTimeout(z),q()):(document.removeEventListener("mousemove",Y),document.removeEventListener("touchmove",Y),document.addEventListener("mousemove",W,{passive:!0}),document.addEventListener("touchmove",W,{passive:!0}))}function q(){S=!1,V=!1,N(),document.removeEventListener("mouseup",q),document.removeEventListener("touchend",q),document.removeEventListener("mousemove",W),document.removeEventListener("touchmove",W)}function N(){o.startsWith("light.")?($=L,e.callService("light","turn_on",{entity_id:o,brightness:$})):o.startsWith("media_player.")&&(E=O,e.callService("media_player","volume_set",{entity_id:o,volume_level:E}))}function W(t){const e=t.pageX||(t.touches?t.touches[0].pageX:0),n=t.pageY||(t.touches?t.touches[0].pageY:0);S&&Math.abs(e-A)>10?(h("light"),R(e)):S&&Math.abs(n-I)>10&&(S=!1,B.value=T)}function R(t){const e=B.getBoundingClientRect(),n=Math.min(Math.max(t-e.left,0),e.width)/e.width;o.startsWith("light.")?L=Math.round(255*n):o.startsWith("media_player.")&&(O=n),H.style.transition="none",H.style.transform=`translateX(${100*n}%)`}k&&u&&(t.content.querySelector(".state").textContent=u),t.eventAdded||"switch"!==x?t.eventAdded||"slider"!==x?t.eventAdded||"custom"!==x||(U.addEventListener("click",(()=>P(t.switchButton)),{passive:!0}),f(U,t.config),t.eventAdded=!0):(B.addEventListener("mousedown",F,{passive:!0}),B.addEventListener("touchstart",F,{passive:!0}),f(M,t.config),t.eventAdded=!0):(U.addEventListener("click",(()=>P(t.switchButton)),{passive:!0}),U.addEventListener("click",(function(t){t.target!==M&&t.target!==M.querySelector("ha-icon")&&g(e,o)}),{passive:!0}),f(M,t.config),t.eventAdded=!0),t.isDragging||"slider"!==x||(t.rangeFill.style.transition="all .3s",o.startsWith("light.")?t.rangeFill.style.transform=`translateX(${$/255*100}%)`:o.startsWith("media_player.")&&(t.rangeFill.style.transform=`translateX(${100*E}%)`));const X=`\n        ha-card {\n            margin-top: 0 !important;\n            background: none !important;\n            opacity: ${"unavailable"!==d?"1":"0.5"};\n        }\n        \n        .button-container {\n            position: relative;\n            width: 100%;\n            height: 50px;\n            z-index: 0;\n            background-color: var(--background-color-2,var(--secondary-background-color));\n            border-radius: 25px;\n            mask-image: radial-gradient(white, black);\n            -webkit-mask-image: radial-gradient(white, black);\n            -webkit-backface-visibility: hidden;\n            -moz-backface-visibility: hidden;\n            -webkit-transform: translateZ(0);\n            overflow: hidden;\n        }\n        \n        .switch-button,\n        .range-slider {\n            display: inline-flex;\n            position: absolute;\n            height: 100%;\n            width: 100%;\n            transition: background-color 1.5s;\n            background-color: ${p&&["switch","custom"].includes(x)?"var(--accent-color)":"rgba(0,0,0,0)"};\n        }\n\n        .range-fill {\n            z-index: -1;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            background-color: ${v};\n            width: 100%;\n            left: -100%;\n        }\n        \n        .switch-button {\n            cursor: pointer !important;\n        }\n        \n        .range-slider {\n            cursor: ew-resize;\n        }\n        \n        .name-container {\n            position: relative;\n            display: ${k?"block":"inline-flex"};\n            margin-left: 4px;\n            z-index: 1;\n            font-weight: 600;\n            align-items: center;\n            line-height: ${k?"4px":"16px"};\n            padding-right: 16px;\n        }\n        \n        .state {\n            font-size: 12px;\n            opacity: 0.7;\n        }\n        \n        .feedback-element {\n            position: absolute;\n            top: 0;\n            left: 0;\n            opacity: 0;\n            width: 100%;\n            height: 100%;\n            background-color: rgb(0,0,0);\n        }\n        \n        @keyframes tap-feedback {\n            0% {transform: translateX(-100%); opacity: 0;}\n            64% {transform: translateX(0); opacity: 0.1;}\n            100% {transform: translateX(100%); opacity: 0;}\n        }\n\n        ${w}\n    `;a(e,t,X,i,d,o,c)}(this);break;case"separator":!function(t){const e=t._hass,n=t.editor,i=t.config;let{customStyles:o,icon:r,name:s}=C(t,i,e);if(!t.separatorAdded||n){if(n&&t.separatorContainer)for(;t.separatorContainer.firstChild;)t.separatorContainer.removeChild(t.separatorContainer.firstChild);t.separatorAdded||(t.separatorContainer=document.createElement("div"),t.separatorContainer.setAttribute("class","separator-container")),t.separatorContainer.innerHTML=`\n            <div>\n                <ha-icon icon="${r}"></ha-icon>\n                <h4>${s}</h4>\n            </div>\n            <div></div>\n        `,t.content.appendChild(t.separatorContainer),t.separatorAdded=!0}a(e,t,"\n        .separator-container {\n            display: inline-flex;\n            width: 100%;\n            margin-top: 12px;\n        }\n        .separator-container div:first-child {\n            display: inline-flex;\n            max-width: calc(100% - 38px);\n        }\n        .separator-container div ha-icon {\n            display: inline-flex;\n            height: 24px;\n            width: 24px;\n            margin: 0 22px 0 8px;\n            transform: translateY(-2px);\n        }\n        .separator-container div h4 {\n            display: inline-flex;\n            margin: 0 20px 0 0;\n            font-size: 16px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        .separator-container div:last-child {\n            display: inline-flex; \n            border-radius: 6px; \n            opacity: 0.5; \n            margin-left: 10px; \n            flex-grow: 1; \n            height: 6px; \n            align-self: center; \n            background-color: var(--background-color,var(--secondary-background-color));\n        }\n    ",o)}(this);break;case"cover":!function(t){const e=t._hass,n=t.editor,i=t.config;let{customStyles:o,entityId:r,icon:s,name:l,state:d,stateChanged:c,stateOn:p,formatedState:h,iconStyles:u}=C(t,i,e);const g=i.icon_open?i.icon_open:"mdi:window-shutter-open",m=i.icon_close?i.icon_close:"mdi:window-shutter",b=i.open_service?i.open_service:"cover.open_cover",v=i.close_service?i.close_service:"cover.close_cover",_=i.stop_service?i.stop_service:"cover.stop_cover",y=i.icon_up?i.icon_up:"mdi:arrow-up",w=i.icon_down?i.icon_down:"mdi:arrow-down",x=!!t.config.show_state&&t.config.show_state;if(s="open"===e.states[i.entity].state?g:m,h=c?e.formatEntityState(e.states[r]):h||"",!t.coverAdded||n){if(n&&t.coverContainer)for(;t.coverContainer.firstChild;)t.coverContainer.removeChild(t.coverContainer.firstChild);t.coverContainer=document.createElement("div"),t.coverContainer.setAttribute("class","cover-container"),t.coverContainer.innerHTML=`\n            <div class="header-container">\n                <div class="icon-container">\n                </div>\n                <div class="name-container">\n                    <p class="name">${l}</p>\n                    <p class="state"></p>\n                </div>\n            </div>\n            <div class="buttons-container">\n                <button class="button open">\n                    <ha-icon icon="${y}"></ha-icon>\n                </button>\n                <button class="button stop">\n                    <ha-icon icon="mdi:stop"></ha-icon>\n                </button>\n                <button class="button close">\n                    <ha-icon icon="${w}"></ha-icon>\n                </button>\n            </div>\n        `,t.content.appendChild(t.coverContainer);const o=t.coverContainer.querySelector(".open"),a=t.coverContainer.querySelector(".stop"),s=t.coverContainer.querySelector(".close");o.addEventListener("click",(()=>{e.callService(b.split(".")[0],b.split(".")[1],{entity_id:r})}),{passive:!0}),a.addEventListener("click",(()=>{e.callService(_.split(".")[0],_.split(".")[1],{entity_id:r})}),{passive:!0}),s.addEventListener("click",(()=>{e.callService(v.split(".")[0],v.split(".")[1],{entity_id:r})}),{passive:!0}),t.iconContainer=t.content.querySelector(".icon-container"),f(t.iconContainer,i),t.coverAdded=!0}t.iconContainer&&(c||n)&&(t.iconContainer.innerHTML=`<ha-icon icon="${s}" class="icon"></ha-icon>`,t.content.querySelector(".state").textContent=x?h:""),a(e,t,"\n        ha-card {\n            margin-top: 0 !important;\n            background: none !important;\n        }\n        \n        .header-container {\n            display: flex;\n            align-items: center;\n            margin-bottom: 10px;\n        }\n        \n        .cover-container {\n            display: grid;\n        }\n        \n        .icon-container {\n            display: flex;\n            margin: 0 !important;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            /*z-index: 1;*/\n            width: 48px;\n            height: 48px;\n            margin: 6px;\n            border-radius: 50%;\n            background-color: var(--card-background-color,var(--ha-card-background));\n            border: 6px solid var(--background-color-2,var(--secondary-background-color));\n            box-sizing: border-box;\n        }\n        \n        .name-container {\n            font-weight: 600;\n            margin-left: 10px;\n            line-height: 4px;\n        }\n        \n        .buttons-container {\n            display: grid;\n            align-self: center;\n            grid-auto-flow: column;\n            grid-gap: 18px;             \n        }\n        \n        .state {\n            font-size: 12px;\n            opacity: 0.7;\n        }\n        \n        ha-icon {\n            display: flex; \n            height: 24px; \n            width: 24px; \n            color: var(--primary-text-color);\n        }\n        \n        .button {\n            display: flex;\n            background: var(--background-color-2,var(--secondary-background-color));\n            height: 42px;\n            border-radius: 32px;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            border: none;\n        }\n    ",o,d,r)}(this);break;case"empty-column":!function(t){if(!t.emptyCollumnAdded){const e=document.createElement("div");e.setAttribute("class","empty-column"),e.innerHTML='\n            <div style="display: flex; width: 100%;"></div>\n        ',t.content.appendChild(e),t.emptyColumnAdded=!0}}(this);break;case"horizontal-buttons-stack":I(this)}window.columnFix||(window.columnFix=this.config.column_fix)}setConfig(t){if("pop-up"===t.card_type){if(!t.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.")}else if("horizontal-buttons-stack"===t.card_type){var e={};for(var n in t)if(n.match(/^\d+_icon$/)){var i=n.replace("_icon","_link");if(void 0===t[i])throw new Error("You need to define "+i);if(e[t[i]])throw new Error("You can't use "+t[i]+" twice");e[t[i]]=!0}}else if(("button"===t.card_type||"cover"===t.card_type||"state"===t.card_type)&&!t.entity)throw new Error("You need to define an entity");if(window.entityError)throw new Error("You need to define a valid entity");this.config=t}getCardSize(){return"true"===window.columnFix?0:"number"==typeof window.columnFix?window.columnFix:-10}static getConfigElement(){return document.createElement("bubble-card-editor")}}customElements.define("bubble-card",D),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch."}),console.info(`%c Bubble Card %c ${t} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})();
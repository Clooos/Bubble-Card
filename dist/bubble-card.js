(()=>{"use strict";var __webpack_modules__={946:(e,t,n)=>{function o(e){let t=[220,220,190];for(let n=0;n<3;n++)if(e[n]<t[n])return!1;return!0}let i;function a(e,t,n=1){if(e.startsWith("#"))if(4===e.length){let o=Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n),a=Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n),s=Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n);i="rgba("+o+", "+a+", "+s+", "+t+")"}else{let o=Math.min(255,parseInt(e.slice(1,3),16)*n),a=Math.min(255,parseInt(e.slice(3,5),16)*n),s=Math.min(255,parseInt(e.slice(5,7),16)*n);i="rgba("+o+", "+a+", "+s+", "+t+")"}else if(e.startsWith("rgb")){let o=e.match(/\d+/g);i="rgba("+Math.min(255,o[0]*n)+", "+Math.min(255,o[1]*n)+", "+Math.min(255,o[2]*n)+", "+t+")"}else if(e.startsWith("var(--")){let o=e.slice(4,-1),s=window.getComputedStyle(document.documentElement).getPropertyValue(o);(s.startsWith("#")||s.startsWith("rgb"))&&(i=a(s,t,n))}return i}n.d(t,{_k:()=>a,wW:()=>o})},191:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BX:()=>fireEvent,GP:()=>applyScrollingEffect,IL:()=>getAttribute,Jn:()=>tapFeedback,OC:()=>isEntityType,P2:()=>throttle,X:()=>getWeatherIcon,az:()=>createElement,gJ:()=>getImage,jk:()=>forwardHaptic,jx:()=>setLayout,mk:()=>getIconColor,o0:()=>formatDateTime,oY:()=>getName,pr:()=>isStateOn,q7:()=>getIcon,u3:()=>configChanged,y0:()=>getState});var _style_ts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(946);function hasStateChanged(e,t,n){if(e.hasState=t.states[n],e.hasState)return e.newState=[e.hasState.state,e.hasState.attributes.rgb_color],e.oldState&&e.newState[0]===e.oldState[0]&&e.newState[1]===e.oldState[1]?e.stateChanged=!1:(e.oldState=e.newState,e.stateChanged=!0),e.stateChanged}function configChanged(e,t){return!(!t.classList.contains("editor")||e.config===e.previousConfig||(e.previousConfig=e.config,0))}const fireEvent=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const i=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=n,e.dispatchEvent(i),i},forwardHaptic=e=>{fireEvent(window,"haptic",e)},navigate=(e,t,n=!1)=>{n?history.replaceState(null,"",t):history.pushState(null,"",t),fireEvent(window,"location-changed",{replace:n})};function toggleEntity(e,t){e.callService("homeassistant","toggle",{entity_id:t})}function tapFeedback(e){void 0!==e&&(e.style.display="",e.style.animation="tap-feedback .3s",setTimeout((()=>{e.style.animation="none",e.style.display="none"}),500))}function getIcon(e,t=e.config.entity,n=e.config.icon){const o=t?.split(".")[0],i=getAttribute(e,"icon",t),a=n,s=getState(e,t),l={alarm_control_panel:"mdi:shield",alert:"mdi:alert",automation:"mdi:playlist-play",binary_sensor:function(){const n="off"===s;switch(getAttribute(e,"device_class",t)){case"battery":return n?"mdi:battery":"mdi:battery-outline";case"battery_charging":return n?"mdi:battery":"mdi:battery-charging";case"cold":return n?"mdi:thermometer":"mdi:snowflake";case"connectivity":return n?"mdi:server-network-off":"mdi:server-network";case"door":return n?"mdi:door-closed":"mdi:door-open";case"garage_door":return n?"mdi:garage":"mdi:garage-open";case"power":case"plug":return n?"mdi:power-plug-off":"mdi:power-plug";case"tamper":return n?"mdi:check-circle":"mdi:alert-circle";case"smoke":return n?"mdi:check-circle":"mdi:smoke";case"heat":return n?"mdi:thermometer":"mdi:fire";case"light":return n?"mdi:brightness-5":"mdi:brightness-7";case"lock":return n?"mdi:lock":"mdi:lock-open";case"moisture":return n?"mdi:water-off":"mdi:water";case"motion":return n?"mdi:motion-sensor-off":"mdi:motion-sensor";case"occupancy":case"presence":return n?"mdi:home-outline":"mdi:home";case"opening":return n?"mdi:square":"mdi:square-outline";case"running":return n?"mdi:stop":"mdi:play";case"sound":return n?"mdi:music-note-off":"mdi:music-note";case"update":return n?"mdi:package":"mdi:package-up";case"vibration":return n?"mdi:crop-portrait":"mdi:vibrate";case"window":return n?"mdi:window-closed":"mdi:window-open";default:return n?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}}(),calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",cover:function(){const n="closed"!==s;switch(getAttribute(e,"device_class",t)){case"awning":return n?"mdi:awning-outline":"mdi:awning";case"blind":return n?"mdi:blinds-open":"mdi:blinds";case"curtain":return n?"mdi:curtains-open":"mdi:curtains";case"damper":case"shutter":default:return n?"mdi:window-shutter-open":"mdi:window-shutter";case"door":return n?"mdi:door-open":"mdi:door-closed";case"garage":return n?"mdi:garage-open":"mdi:garage";case"gate":return n?"mdi:gate-open":"mdi:gate";case"shade":return n?"mdi:roller-shade":"mdi:roller-shade-closed";case"window":return n?"mdi:window-open":"mdi:window-closed"}}(),device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",lock:"mdi:lock",mailbox:"mdi:mailbox",media_player:"mdi:speaker",mower:"mdi:robot-mower",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:file-document",sensor:function(){switch(getAttribute(e,"device_class",t)){case"battery":return 100==s?"mdi:battery":s>=90?"mdi:battery-90":s>=80?"mdi:battery-80":s>=70?"mdi:battery-70":s>=60?"mdi:battery-60":s>=50?"mdi:battery-50":s>=40?"mdi:battery-40":s>=30?"mdi:battery-30":s>=20?"mdi:battery-20":s>=10?"mdi:battery-10":"mdi:battery-alert";case"humidity":return"mdi:water-percent";case"illuminance":return"mdi:brightness-5";case"temperature":return"mdi:thermometer";case"pressure":return"mdi:gauge";case"power":return"mdi:flash";case"signal_strength":return"mdi:wifi";case"energy":return"mdi:lightning-bolt";default:return"mdi:eye"}}(),simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:function(n=getState(e,t)){switch(n){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}(),weblink:"mdi:open-in-new"};return a||i||(l[o]?l[o]:"")}function getWeatherIcon(e){switch(e){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}function getIconColor(e){const t=e.config.entity,n="var(--accent-color)",o=getAttribute(e,"rgb_color");if(!t)return n;if(!1===t.startsWith("light."))return n;const i="rgba(255, 220, 200)",a=isStateOn(e)?i:"rgba(255, 255, 255)";return o?(0,_style_ts__WEBPACK_IMPORTED_MODULE_0__.wW)(o)?i:`rgba(${o.join(", ")})`:a}function getImage(e){if(e.config.force_icon)return"";const t=getAttribute(e,"entity_picture_local"),n=getAttribute(e,"entity_picture");return t||n||""}function getName(e){const t=e.config.name,n=getAttribute(e,"friendly_name");return t||n||""}function getState(e,t=e.config.entity){return e._hass.states[t]?.state??""}function getAttribute(context,attribute,entity=context.config.entity){return attribute?eval(`context._hass.states['${entity}']?.attributes.${attribute}`)??"":""}function isEntityType(e,t){return e.config.entity?.startsWith(t+".")??!1}function isStateOn(e,t=e.config.entity){const n=getState(e,t),o=Number(n);return!!(["on","open","opening","closing","cleaning","true","idle","home","playing","paused","locked","occupied","available","running","active","connected","mowing","starting","heat","cool","dry","heat_cool","fan_only","auto","alarm",""].includes(n)||o>0)}function createElement(e,t=""){const n=document.createElement(e);return""!==t&&t.split(" ").forEach((e=>{n.classList.add(e)})),n}function debounce(e,t){let n;return function(...o){clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}function applyScrollingEffect(e,t,n){const o=e.config.scrolling_effect??!0;if(!o)return void applyNonScrollingStyle(t,n);if(t.previousText===n)return;const i=t.className.split(" ").find((e=>e.startsWith("bubble-")));function a(){t.innerHTML=`<div class="scrolling-container">${n}</div>`,t.style="";const e=t.scrollWidth,a=t.parentNode?.offsetWidth||0;o&&e>a?(function(e,t,n){const o='<span class="bubble-scroll-separator"> | </span>',i=`<span>${t+o+t+o}</span>`;e.innerHTML=`<div class="scrolling-container">${i}</div>`;const a=function(e){return`\n            .${e} .scrolling-container {\n                width: 100%;\n                white-space: nowrap;\n                mask-image: linear-gradient(to right, transparent, black calc(0% + 8px), black calc(100% - 8px), transparent);\n                mask-image: linear-gradient(to left, transparent, black calc(0% + 8px), black calc(100% - 8px), transparent);\n            }\n            .${e} .scrolling-container span {\n                display: inline-block;\n                animation: scroll 14s linear infinite;\n            }\n\n            .bubble-scroll-separator {\n                opacity: .3;\n                margin: 0 6px 0 8px;\n            }\n\n            @keyframes scroll {\n                from { transform: translateX(0%); }\n                to { transform: translateX(-50%); }\n            }\n        `}(n);e.styleElement=document.createElement("style"),e.appendChild(e.styleElement),e.styleElement.innerHTML=a}(t,n,i),t.previousText=n):t.previousText=n}requestAnimationFrame(a),t.eventAdded||(window.addEventListener("resize",debounce(a,300)),t.eventAdded=!0)}function applyNonScrollingStyle(e,t){e.innerHTML=t,e.previousText=t,e.style.whiteSpace="normal",e.style.display="-webkit-box",e.style.webkitLineClamp="2",e.style.webkitBoxOrient="vertical",e.style.textOverflow="ellipsis"}function formatDateTime(e,t){if(!e)return"";const n=new Date(e),o=new Date;let i,a,s=Math.floor((o-n)/1e3);return isNaN(s)?"":(s<60?(i="second",a=s+1):s<3600?(i="minute",a=Math.floor(s/60)):s<86400?(i="hour",a=Math.floor(s/3600)):(i="day",a=Math.floor(s/86400)),new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(-a,i))}function setLayout(e){const t=e.config.card_layout;"large"===t?(e.content.classList.contains("large")||e.content.classList.add("large"),e.content.classList.contains("rows-2")&&e.content.classList.remove("rows-2")):"large-2-rows"===t?(e.content.classList.contains("large")||e.content.classList.add("large"),e.content.classList.contains("rows-2")||e.content.classList.add("rows-2")):(e.content.classList.remove("large"),e.content.classList.remove("rows-2"))}function throttle(e,t=300){let n;return(...o)=>{void 0===n&&(e(...o),n=setTimeout((()=>{n=void 0}),t))}}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{let e="v2.2.4";var t=__webpack_require__(946),n=__webpack_require__(191);function o(e,t,n){setTimeout((()=>{const o=new Event("hass-action",{bubbles:!0,composed:!0});"tap"===n||"double_tap"===n||"hold"===n?o.detail={config:t,action:n}:(e.modifiedConfig={...t,tap_action:{...t[n]}},delete e.modifiedConfig[n],o.detail={config:e.modifiedConfig,action:"tap"}),e.dispatchEvent(o)}),10)}class i{constructor(e,t,n,o,i){this.element=e,this.config=t,this.sendActionEvent=n,this.defaultEntity=o,this.defaultActions=i,this.tapTimeout=null,this.lastTap=0,this.startTime=null}handleStart(e){e.stopPropagation(),e.stopImmediatePropagation(),this.startTime=Date.now(),clearTimeout(this.tapTimeout),this.tapTimeout=null}handleEnd(){if(null===this.startTime)return;const e=Date.now(),t=e-this.startTime,n=e-this.lastTap;this.lastTap=e,this.startTime=null;const o="none"===(this.config?.double_tap_action||this.defaultActions?.double_tap_action||{action:"toggle"}).action?0:200;t>200?this.sendActionEvent(this.element,this.config,"hold",this.defaultEntity,this.defaultActions):n<o?this.sendActionEvent(this.element,this.config,"double_tap",this.defaultEntity,this.defaultActions):this.tapTimeout=setTimeout((()=>{this.sendActionEvent(this.element,this.config,"tap",this.defaultEntity,this.defaultActions)}),o)}}function a(e,t,n,i,a){const s=t?.tap_action||a?.tap_action||{action:"more-info"},l=t?.double_tap_action||a?.double_tap_action||{action:"toggle"},r=t?.hold_action||a?.hold_action||{action:"toggle"};o(e,{entity:t?.entity??i,tap_action:s,double_tap_action:l,hold_action:r},n)}function s(e,t,n,o){const s=new i(e,t,a,n,o);e.addEventListener("pointerdown",s.handleStart.bind(s)),e.addEventListener("pointerup",s.handleEnd.bind(s)),e.addEventListener("contextmenu",(e=>e.preventDefault()));const l=t?.tap_action?.action||o?.tap_action?.action||"more-info",r=t?.double_tap_action?.action||o?.double_tap_action?.action||"toggle",c=t?.hold_action?.action||o?.hold_action?.action||"toggle";e.style.cursor="none"===l&&"none"===r&&"none"===c?"":"pointer"}function l(e,t){e.addEventListener("click",(()=>{(0,n.jk)("selection"),(0,n.Jn)(t)}))}let r=!1;function c(e){void 0===e.composedPath().find((e=>e.classList&&e.classList.contains("bubble-pop-up")||"HA-DIALOG"===e.nodeName||"HA-MORE-INFO-DIALOG"===e.nodeName||"HA-DIALOG-DATE-PICKER"===e.nodeName))&&d()}function d(){setTimeout((()=>{if(r)return;const e=window.location.href.split("#")[0];history.pushState(null,"",e),window.dispatchEvent(new Event("location-changed"))}),50)}function p(e){const t=e.startsWith("#")?window.location.href.split("#")[0]+e:e;history.pushState(null,"",t),window.dispatchEvent(new Event("location-changed"))}function u(e,t){e.editor||(e.hideContentTimeout=setTimeout((()=>{let{sectionRow:t,sectionRowContainer:n}=e;"hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!0,t.style.display="none",n?.classList.contains("card")&&(n.style.display="none"))}),t))}function h(e,t){const{showBackdrop:n,hideBackdrop:o}=k(e);t?n():o()}function b(e,t){let{popUp:n,verticalStack:o,removeDomTimeout:i}=e;t&&n.parentNode!==o?o.appendChild(e.popUp):t||(i=setTimeout((()=>{n.parentNode===o&&o.removeChild(n)}),400))}function m(e,t){let n=e.popUp;requestAnimationFrame((()=>{requestAnimationFrame((()=>{t?n.classList.replace("is-popup-closed","is-popup-opened"):n.classList.replace("is-popup-opened","is-popup-closed")}))}))}function g(e,t){let n=e.popUp;t?(!window.listenersAdded&&(e.config.close_by_clicking_outside??1)&&(window.addEventListener("click",c),window.listenersAdded=!0),n.addEventListener("touchstart",e.resetCloseTimeout,{passive:!0}),e.config.close_on_click&&(n.addEventListener("mouseup",d,{once:!0}),n.addEventListener("touchend",d,{once:!0}))):n.removeEventListener("touchstart",e.resetCloseTimeout)}const f="\n  .bubble-backdrop {\n    position: fixed;\n    background-color: var(--bubble-backdrop-background-color);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 4;\n    opacity: 0;\n    transition: opacity 0.3s;\n    transition-delay: .1s;\n    display: flex;\n    backdrop-filter: var(--custom-backdrop-filter);\n    -webkit-backdrop-filter: var(--custom-backdrop-filter);\n  }\n\n  .bubble-backdrop.is-visible {\n    opacity: 1;\n  }\n\n  .bubble-backdrop.is-hidden {\n    opacity: 0;\n    pointer-events: none;\n  }\n";let y,_,v,w=!1;const x=window.matchMedia("(prefers-color-scheme: dark)");function k(e){if(y)return y;let o;const i=(0,n.az)("style");function a(){o=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color"),i.style.setProperty("--bubble-backdrop-background-color",(0,t._k)(o,.7,.7))}x.addEventListener("change",(()=>{a()})),a(),i.innerHTML=f,document.head.appendChild(i);const s=(0,n.az)("style");document.head.appendChild(s);const l=(0,n.az)("div","bubble-backdrop backdrop is-hidden");return e.config.hide_backdrop&&(l.style.display="none",l.style.pointerEvents="none"),document.body.appendChild(l),l.style.setProperty("--custom-backdrop-filter",`blur(${e.config.bg_blur??10}px)`),y={hideBackdrop:function(){l.classList.add("is-hidden"),l.classList.remove("is-visible")},showBackdrop:function(){requestAnimationFrame((()=>{l.classList.add("is-visible"),l.classList.remove("is-hidden")}))},backdropElement:l,backdropCustomStyle:s},y}const C="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n    ha-card {\n        margin-top: 0;\n        background: none;\n        opacity: 1;\n    }\n    mwc-list-item {\n        border-radius: 24px;\n        margin: 0 8px;\n    }\n    mwc-list-item[selected] {\n        color: var(--primary-text-color) !important;\n        background-color: var(--accent-color);\n    }\n    ha-select {\n        --mdc-shape-medium: 30px;\n        --mdc-shape-large: 30px;\n        --mdc-shape-small: 64px;\n        --mdc-menu-max-width: min-content;\n        --mdc-menu-min-width: 150px;\n        --mdc-select-max-width: min-content;\n        --mdc-select-outlined-hover-border-color: transparent;\n        --mdc-select-outlined-idle-border-color: transparent;\n        --mdc-theme-primary: transparent;\n    }\n    .mdc-select {\n        color: transparent !important;\n        width: 150px !important;\n        position: absolute !important;\n        pointer-events: none;\n        right: -4px;\n        top: -5px;\n    }\n    .mdc-menu, mwc-list, .mdc-list-item {\n        pointer-events: auto;\n    }\n    .mdc-select__dropdown-icon {\n        display: none !important;\n    }\n    .mdc-select__selected-text {\n        color: transparent !important;\n    }\n    .mdc-select__anchor {\n        width: 100%;\n        pointer-events: none;\n    }\n    .bubble-dropdown-container {\n        display: flex;\n        width: auto;\n        height: 100%;\n        align-items: center;\n    }\n    .bubble-dropdown-arrow {\n        display: flex;\n        position: absolute;\n        background: var(--card-background-color, var(--ha-card-background));\n        height: 36px;\n        width: 36px;\n        right: 6px;\n        pointer-events: none;\n        border-radius: 20px;\n        align-items: center;\n        justify-content: center;\n        transition: transform 0.2s;\n        pointer-events: none;\n    }\n    .bubble-dropdown-select {\n        width: 42px;\n    }\n    .is-unavailable {\n        opacity: 0.5;\n    }\n    .bubble-select-card-container {\n        position: relative;\n        width: 100%;\n        height: 50px;\n        background-color: var(--background-color-2,var(--secondary-background-color));\n        border-radius: 32px;\n        touch-action: pan-y;\n        box-sizing: border-box;\n        border: solid 2px transparent;\n        transition: all 0.15s;\n        cursor: pointer;\n    }\n    .bubble-select-card,\n    .bubble-select-background {\n        display: flex;\n        position: absolute;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        transition: background-color 1.5s;\n    }\n    .bubble-select-background {\n        background-color: var(--bubble-select-background-color);\n        opacity: .5;\n        overflow: hidden !important;\n        border-radius: 25px;\n    }\n    .is-unavailable .bubble-select-card {\n        cursor: not-allowed;\n    }\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        background-color: var(--card-background-color, var(--ha-card-background));\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n    }\n    .bubble-icon-container::after {\n        content: '';\n        background-color: currentColor;\n        position: absolute;\n        display: block;\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        left: 0;\n        right: 0;\n        opacity: 0;\n        pointer-events: none;\n    }\n\n    .bubble-icon {\n        display: flex;\n        opacity: 0.6;\n    }\n\n    .bubble-entity-picture {\n        background-size: cover;\n        background-position: center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n\n    .bubble-name,\n    .bubble-state {\n        display: flex;\n        position: relative;\n        white-space: nowrap;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 18px;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        margin: 0 16px 0 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        font-weight: 600;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        font-weight: normal;\n        opacity: 0.7;\n    }\n\n    .bubble-feedback-element {\n        position: absolute;\n        top: 0;\n        left: 0;\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgb(0,0,0);\n        pointer-events: none;\n    }\n\n    @keyframes tap-feedback {\n        0% {transform: translateX(-100%); opacity: 0;}\n        64% {transform: translateX(0); opacity: 0.1;}\n        100% {transform: translateX(100%); opacity: 0;}\n    }\n\n    .large .bubble-select-card-container {\n      height: 56px;\n      border-radius: 32px;\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 24px;\n      min-width: 42px !important;\n      min-height: 42px !important;\n      margin-left: 6px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(2, min-content);\n      grid-template-rows: repeat(2, 1fr);\n      grid-auto-flow: column;\n      width: auto;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n";function $(e,t=e.elements,o){t.dropdownContainer=(0,n.az)("div","bubble-dropdown-container"),t.dropdownSelect=(0,n.az)("ha-select","bubble-dropdown-select"),t.dropdownSelect.setAttribute("outlined",""),t.dropdownArrow=(0,n.az)("ha-icon","bubble-dropdown-arrow"),t.dropdownArrow.setAttribute("icon","mdi:chevron-down"),t.dropdownContainer.appendChild(t.dropdownArrow),t.dropdownStyleElement=(0,n.az)("style"),t.dropdownCustomStyleElement=(0,n.az)("style"),t.dropdownStyleElement.textContent=C,function i(){if(t.dropdownSelect.shadowRoot)if(t!==e.elements){t.dropdownContainer.style.display="flex",t.dropdownSelectStyleElement=(0,n.az)("style"),t.dropdownSelectStyleElement.textContent=C,t.dropdownSelect.shadowRoot.appendChild(t.dropdownSelectStyleElement),t.dropdownContainer.appendChild(t.dropdownStyleElement),o&&(t.dropdownContainer.style.width="24px"),t.dropdownArrow.style.height="20px",t.dropdownArrow.style.width="20px",t.dropdownSelect.style.position="relative",t.dropdownSelect.style.top="-23px",t.mainContainer=t.parentElement.parentElement.parentElement,t.mainContainer.style.overflow="visible";let e=t.dropdownSelect.shadowRoot.querySelector("mwc-menu");e.style.position="relative",e.style.right="138px"}else t.dropdownSelect.shadowRoot.appendChild(t.dropdownStyleElement),t.dropdownSelect.shadowRoot.appendChild(t.dropdownCustomStyleElement);else setTimeout(i)}(),t===e.elements?t.selectCard.appendChild(t.dropdownContainer):t.appendChild(t.dropdownContainer)}function L(e,t=e.elements,n=e.config.entity){const{dropdownArrow:o,dropdownSelect:i,selectCardContainer:a,selectBackground:s}=t,l=t===e.elements?a:t,r=t===e.elements?s:t;t!==e.elements&&(l.style.border="solid 2px rgba(0,0,0,0)"),r.addEventListener("click",(e=>{const n=i.shadowRoot.querySelector("mwc-menu");"mwc-list-item"!==e.target.tagName.toLowerCase()&&(n.hasAttribute("open")||n.setAttribute("open",""),o.style.transform="rotate(180deg)",l.style.border="solid 2px var(--accent-color)",t.dropdownArrow.style.background="var(--accent-color)")})),i.addEventListener("closed",(e=>{e.stopPropagation(),e.preventDefault(),o.style.transform="rotate(0deg)",l.style.border="solid 2px rgba(0,0,0,0)",t.dropdownArrow.style.background=""})),t.dropdownSelect.addEventListener("click",(o=>{const i=t.dropdownSelect.shadowRoot?.querySelector(".mdc-select__selected-text").textContent,a=n?.startsWith("input_select"),s=a?"input_select":"select";e._hass.callService(s,"select_option",{entity_id:n,option:i})}))}function S(e,t=e.elements,o=e.config.entity){if(t.currentList=e._hass.states[o].attributes.options,t.currentState=e._hass.states[o].state,t.previousList===t.currentList&&t.previousState===t.currentState)return;let i=t.currentList,a=t.currentState;for(;t.dropdownSelect.firstChild;)t.dropdownSelect.removeChild(t.dropdownSelect.firstChild);i.forEach(((e,o)=>{const i=(0,n.az)("mwc-list-item");i.setAttribute("value",e),i.textContent=e,e===a&&i.setAttribute("selected",""),t.dropdownSelect.appendChild(i),t.previousList=t.currentList,t.previousState=t.currentState})),t.dropdownContainer.appendChild(t.dropdownSelect)}function T(e){const t=e._hass.states[e.config.entity],o=(0,n.IL)(e,e.config.attribute,e.config.entity),i=t?.last_changed,a="state"===e.config.button_type,s=e.config.show_name??!0,l=e.config.show_icon??!0,r=e.config.show_state??a,c=e.config.show_attribute??a,d=e.config.show_last_changed??e.config.show_last_updated??!1,p=e.config.scrolling_effect??!0,u=e.previousConfig||{};if(e.previousState===t&&e.previousAttribute===o&&e.previousLastChanged===i&&u.showName===s&&u.showIcon===l&&u.showState===r&&u.showAttribute===c&&u.showLastChanged===d&&u.scrollingEffect===p)return;let h=t&&r?e._hass.formatEntityState(t):"",b="",m="",g="";var f;c&&o&&(b=t?e._hass.formatEntityAttributeValue(t,e.config.attribute)??o:""),d&&t&&(m=t?(f=(0,n.o0)(i,e._hass.locale.language)).charAt(0).toUpperCase()+f.slice(1):""),e.elements.stateStyles||(e.elements.stateStyles=(0,n.az)("style"),e.elements.stateStyles.innerText=E,e.content.appendChild(e.elements.stateStyles),"pop-up"===e.config.card_type&&e.elements.buttonContainer.appendChild(e.elements.stateStyles)),g=h+(b?`${r?" • ":""}${b}`:"")+(m?`${r?" • ":""}${m}`:""),s?e.elements.name.classList.remove("hidden"):e.elements.name.classList.add("hidden"),l?(e.elements.iconContainer.classList.remove("hidden"),e.elements.nameContainer.classList.remove("name-without-icon")):(e.elements.iconContainer.classList.add("hidden"),e.elements.nameContainer.classList.add("name-without-icon")),(r||d||c)&&!s?e.elements.state.classList.add("state-without-name"):e.elements.state.classList.remove("state-without-name"),r||d||c?(e.elements.state.classList.add("display-state"),e.elements.state.classList.remove("hidden")):(e.elements.state.classList.remove("display-state"),e.elements.state.classList.add("hidden")),""!==g&&(0,n.GP)(e,e.elements.state,g),e.previousState=t,e.previousAttribute=o,e.previousConfig={showName:s,showIcon:l,showState:r,showAttribute:c,showLastChanged:d,scrollingEffect:p}}const E="\n    .hidden {\n        display: none;\n    }\n\n    .state-without-name {\n        opacity: 1;\n        font-size: 14px;\n    }\n\n    .name-without-icon {\n        margin-left: 16px;\n    }\n\n    .display-state {\n        display: flex;\n    }\n";function z(e,t=e.content,o=t.firstChild.firstChild,i=!1){const a=e.config.sub_button;if(!a)return;e.previousValues=e.previousValues||{};let r=[...e.previousValues.subButtons||[]];e.elements=e.elements||{};const c=e.elements.subButtonContainer??(0,n.az)("div","bubble-sub-button-container");if(!e.elements.subButtonContainer&&e.config.sub_button){const t=(0,n.az)("style");t.innerText=O,c.appendChild(t),i?o.prepend(c):o.appendChild(c),e.elements.subButtonContainer=c}a.forEach(((t,o)=>{if(!t)return;const i=o+1,a=t.entity??e.config.entity,r=e._hass.states[a],d=t.name??(0,n.IL)(e,"friendly_name",a)??"",p=t.attribute??"",u=(0,n.IL)(e,p,a),h=(0,n.q7)(e,t.entity,t.icon??""),b=(0,n.pr)(e,a),m=t.show_name??!1,g=t.show_state??!1,f=t.show_attribute??!1,y=(t.show_last_changed||t.show_last_updated)??!1,_=t.show_icon??!0,v=t.show_background??!0,w=t.show_arrow??!0,x=a?.startsWith("input_select")||a?.startsWith("select");let k=e.elements[i]||(0,n.az)("div","bubble-sub-button bubble-sub-button-"+i);if(!e.elements[i]||x&&!k.contains(k.dropdownContainer)){let t=Array.prototype.indexOf.call(c.children,k);x&&!k.contains(k.dropdownContainer)&&c.contains(k)&&(c.removeChild(k),k=(0,n.az)("div","bubble-sub-button bubble-sub-button-"+i)),k.nameContainer=(0,n.az)("div","bubble-sub-button-name-container"),k.feedbackContainer=(0,n.az)("div","bubble-feedback-container"),k.feedback=(0,n.az)("div","bubble-feedback-element feedback-element"),k.appendChild(k.feedbackContainer),k.feedbackContainer.appendChild(k.feedback),x&&($(e,k,w),k.dropdownContainer.style.display="none",L(e,k,a)),k.appendChild(k.nameContainer),t>=0&&t<c.children.length?c.insertBefore(k,c.children[t]):c.appendChild(k),e.elements[i]=k}if(x?(S(e,k,a),w?w&&(k.dropdownArrow.style.display="",k.dropdownContainer.style.width="24px"):(k.dropdownArrow.style.display="none",k.dropdownContainer.style.width="0px")):k.contains(k.dropdownContainer)&&k.removeChild(k.dropdownContainer),_&&h){let e=k.icon;e||(e=(0,n.az)("ha-icon","bubble-sub-button-icon"),e.classList.add("show-icon"),k.appendChild(e),k.icon=e),e.getAttribute("icon")!==h&&e.setAttribute("icon",h),k.icon.classList.remove("hidden"),k.icon.classList.add("show-icon")}else k.icon&&(k.icon.classList.remove("show-icon"),k.icon.classList.add("hidden"));v?b?(k.classList.add("background-on"),k.classList.remove("background-off")):(k.classList.add("background-off"),k.classList.remove("background-on")):(k.classList.remove("background-on"),k.classList.remove("background-off")),"none"===t.tap_action?.action&&"none"===t.double_tap_action?.action&&"none"===t.hold_action?.action||k.actionAdded||(s(k,x?"":t,a,{tap_action:{action:x?"none":"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}}),l(k,k.feedback),x&&(k.style.pointerEvents="auto",k.style.cursor="pointer"),k.actionAdded=!0);let C="";const T=r&&g?e._hass.formatEntityState(r):"",E=r&&""!==u&&f?e._hass.formatEntityAttributeValue(r,p)??u:"",z=r&&y?(0,n.o0)(r.last_changed,e._hass.locale.language):"";m&&""!==d&&(C+=d),""!==T&&(C+=(C?" · ":"")+T),""!==z&&(C+=(C?" · ":"")+z),""!==E&&(C+=(C?" · ":"")+E),C=C.charAt(0).toUpperCase()+C.slice(1),C||_||x?(k.classList.remove("hidden"),k.nameContainer.innerText!==C&&(k.nameContainer.innerText=C),_&&k.icon&&(C?(k.icon.classList.add("icon-with-state"),k.icon.classList.remove("icon-without-state")):(k.icon.classList.add("icon-without-state"),k.icon.classList.remove("icon-with-state"))),C||_||!x?x&&(k.dropdownContainer.classList.remove("no-icon-select-container"),k.dropdownArrow.classList.remove("no-icon-select-arrow")):(k.dropdownContainer.classList.add("no-icon-select-container"),k.dropdownArrow.classList.add("no-icon-select-arrow"))):(k.classList.add("hidden"),k.dropdownContainer&&(k.dropdownContainer.classList.remove("no-icon-select-container"),k.dropdownArrow.classList.remove("no-icon-select-arrow")))})),e.previousValues.subButtons=a.slice();for(let t=r.length;t>0;t--)if(t>a.length){let n=e.elements[t];n&&(c.removeChild(n),delete e.elements[t])}}const O="\n    .bubble-sub-button-container {\n        position: relative;\n        display: flex;\n        justify-content: end;\n        right: 8px;\n        align-content: center;\n        gap: 8px;\n        align-items: center;\n    }\n    .bubble-sub-button {\n        display: flex;\n        flex-wrap: nowrap;\n        flex-direction: row-reverse;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        right: 0;\n        box-sizing: border-box;\n        width: min-content;\n        min-width: 36px;\n        height: 36px;\n        vertical-align: middle;\n        font-size: 12px;\n        border-radius: 32px;\n        padding: 0 8px;\n        white-space: nowrap;\n        transition: all 0.5s ease-in-out;\n        color: var(--primary-text-color);\n    }\n    .bubble-feedback-container {\n        display: flex;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        border-radius: 32px;\n        overflow: hidden;\n        pointer-events: none;\n    }\n    .bubble-sub-button-name-container {\n        display: flex;\n    }\n    .show-icon {\n        display: flex;\n        --mdc-icon-size: 16px;\n    }\n    .background-on {\n        background-color: var(--accent-color);\n    }\n    .background-off {\n        background-color: var(--card-background-color, var(--ha-card-background));\n    }\n    .hidden {\n        display: none;\n    }\n    .icon-with-state {\n        margin-right: 4px;\n        --mdc-icon-size: 16px;\n    }\n    .icon-without-state {\n        margin-right: 0;\n        --mdc-icon-size: 20px;\n    }\n    .no-icon-select-arrow {\n        width: 28px !important;\n        height: 28px !important;\n        right: 2px !important;        \n    }\n    .no-icon-select-container {\n        width: 16px !important;\n    }\n";function B(e){Array.isArray(e.subButtonIcon)||(e.subButtonIcon=[]),"pop-up"===e.config.card_type?e.popUp.querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t})):e.content.querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t}))}function A(e){B(e);const t=e.config.card_layout,o=e.config.show_header??!0;"large"===t?(e.popUp.classList.contains("large")||e.popUp.classList.add("large"),e.popUp.classList.contains("rows-2")&&e.popUp.classList.remove("rows-2")):"large-2-rows"===t?(e.popUp.classList.contains("large")||e.popUp.classList.add("large"),e.popUp.classList.contains("rows-2")||e.popUp.classList.add("rows-2")):(e.popUp.classList.remove("large"),e.popUp.classList.remove("rows-2")),o&&e.popUp.classList.contains("no-header")?e.popUp.classList.remove("no-header"):o||e.popUp.classList.contains("no-header")||e.popUp.classList.add("no-header");const i=(0,n.y0)(e),{backdropCustomStyle:a}=k(e);let s="";try{s=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,i,e.elements.icon,e.subButtonIcon,n.X,e.popUp):""}catch(e){throw new Error(`Error in generating pop-up custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=s),a.innerText=s}function I(e){let t=e.config.button_type;return"custom"===t&&(console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"'),t=""),e.config.entity?t||"switch":t||"name"}function P(e,t){if((0,n.OC)(e,"light"))e._hass.callService("light","turn_on",{entity_id:e.config.entity,brightness:Math.round(255*t/100)});else if((0,n.OC)(e,"media_player"))e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:(t/100).toFixed(2)});else if((0,n.OC)(e,"cover"))e._hass.callService("cover","set_cover_position",{entity_id:e.config.entity,position:Math.round(t)});else if((0,n.OC)(e,"input_number")){const o=(0,n.IL)(e,"min")??0,i=(0,n.IL)(e,"max")??100,a=(0,n.IL)(e,"step")??1;let s=(i-o)*t/100+o,l=Math.round(s/a)*a;e._hass.callService("input_number","set_value",{entity_id:e.config.entity,value:l})}else if((0,n.OC)(e,"fan")){const o=(0,n.IL)(e,"percentage_step");let i=Math.round(t/o)*o;e._hass.callService("fan","set_percentage",{entity_id:e.config.entity,percentage:i})}else if((0,n.OC)(e,"climate")){const o=(0,n.IL)(e,"min_temp"),i=(0,n.IL)(e,"max_temp"),a=(0,n.IL)(e,"target_temp_step")??.5;let s=(i-o)*t/100+o,l=Math.round(s/a)*a;e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:l})}else if((0,n.OC)(e,"number")){const o=(0,n.IL)(e,"min")??0,i=(0,n.IL)(e,"max")??100,a=(0,n.IL)(e,"step")??1;let s=(i-o)*t/100+o,l=Math.round(s/a)*a;e._hass.callService("number","set_value",{entity_id:e.config.entity,value:l})}}const V=(0,n.P2)(P,100);function U(e,t,n=!1){const o=e.elements.rangeSlider.getBoundingClientRect(),i=100*(t-o.left)/o.width,a=Math.min(100,Math.max(0,i));e.elements.rangeFill.style.transform=`translateX(${a}%)`,n?V(e,a):P(e,a)}const H="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n        -ms-overflow-style: none; /* for Internet Explorer, Edge */\n        scrollbar-width: none; /* for Firefox */\n    }\n    *::-webkit-scrollbar {\n        display: none; /* for Chrome, Safari, and Opera */\n    }\n    ha-card {\n        margin-top: 0;\n        background: none;\n        opacity: 1;\n    }\n    .is-unavailable {\n        opacity: 0.5;\n    }\n\n    .bubble-button-card-container {\n        position: relative;\n        width: 100%;\n        height: 50px;\n        background-color: var(--background-color-2,var(--secondary-background-color));\n        border-radius: 32px;\n        overflow: scroll;\n        touch-action: pan-y;\n    }\n\n    .bubble-button-card,\n    .bubble-range-slider,\n    .bubble-button-background {\n        display: flex;\n        position: absolute;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        transition: background-color 1.5s;\n    }\n    .bubble-button-background {\n        background-color: var(--bubble-button-background-color);\n        opacity: .5;\n        border-radius: 32px;\n    }\n    .bubble-range-fill {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        left: -100%;\n        transition: all .3s;\n    }\n    .is-dragging .bubble-range-fill {\n        transition: none;\n    }\n    .is-light .bubble-range-fill {\n        opacity: 0.5;\n    }\n    .is-unavailable .bubble-button-card,\n    .is-unavailable .bubble-range-slider {\n        cursor: not-allowed;\n    }\n    .bubble-range-slider {\n        cursor: ew-resize;\n        border-radius: 25px;\n        overflow: hidden;\n    }\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        background-color: var(--card-background-color, var(--ha-card-background));\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n    }\n    .bubble-icon-container::after {\n        content: '';\n        background-color: currentColor;\n        position: absolute;\n        display: block;\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        left: 0;\n        right: 0;\n        opacity: 0;\n    }\n    .is-light.is-on .bubble-icon-container::after {\n        opacity: 0.2;\n    }\n    .is-unavailable.is-light .bubble-icon-container::after {\n        opacity: 0;\n    }\n\n    .bubble-icon {\n        display: flex;\n        opacity: 0.6;\n    }\n\n    .is-on .bubble-icon {\n      filter: brightness(1.1);\n      opacity: 1;\n    }\n\n    .bubble-entity-picture {\n        background-size: cover;\n        background-position: center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n\n    .bubble-name,\n    .bubble-state {\n        display: flex;\n        position: relative;\n        white-space: nowrap;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 18px;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        margin: 0 16px 0 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        font-size: 13px;\n        font-weight: 600;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        font-weight: normal;\n        opacity: 0.7;\n    }\n\n    .bubble-feedback-element {\n        position: absolute;\n        top: 0;\n        left: 0;\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgb(0,0,0);\n        pointer-events: none;\n    }\n\n    @keyframes tap-feedback {\n        0% {transform: translateX(-100%); opacity: 0;}\n        64% {transform: translateX(0); opacity: 0.1;}\n        100% {transform: translateX(100%); opacity: 0;}\n    }\n\n    .large .bubble-button-card-container {\n      height: 56px;\n      border-radius: 32px;\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 24px;\n      min-width: 42px !important;\n      min-height: 42px !important;\n      margin-left: 8px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(2, min-content);\n      grid-template-rows: repeat(2, 1fr);\n      grid-auto-flow: column;\n      width: auto;\n      padding-right: 14px;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n";function D(e,t=e.content,o=t){const i=I(e);e.cardType!==`button-${i}`&&e.buttonType!==i&&(function(e,t=e.content,o=t){const i=I(e);e.dragging=!1,e.elements||(e.elements={}),e.elements.buttonCardContainer=(0,n.az)("div","bubble-button-card-container button-container"),e.elements.buttonCard=(0,n.az)("div","bubble-button-card switch-button"),e.elements.buttonBackground=(0,n.az)("div","bubble-button-background"),e.elements.nameContainer=(0,n.az)("div","bubble-name-container name-container"),e.elements.iconContainer=(0,n.az)("div","bubble-icon-container icon-container"),e.elements.name=(0,n.az)("div","bubble-name name"),e.elements.state=(0,n.az)("div","bubble-state state"),e.elements.feedback=(0,n.az)("div","bubble-feedback-element feedback-element"),e.elements.icon=(0,n.az)("ha-icon","bubble-icon icon"),e.elements.image=(0,n.az)("div","bubble-entity-picture entity-picture"),e.elements.style=(0,n.az)("style"),e.elements.customStyle=(0,n.az)("style"),e.elements.feedback.style.display="none",e.elements.style.innerText=H,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),"name"!==i&&e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonCard.appendChild(e.elements.buttonBackground),e.elements.buttonCard.appendChild(e.elements.iconContainer),e.elements.buttonCard.appendChild(e.elements.nameContainer),e.elements.buttonCard.appendChild(e.elements.feedback),e.elements.buttonCardContainer.appendChild(e.elements.buttonCard),t.innerHTML="",o===t&&t.appendChild(e.elements.buttonCardContainer),t.appendChild(e.elements.style),t.appendChild(e.elements.customStyle),o!==t?(o.innerHTML="",e.elements.buttonCardContainer.appendChild(t),o.appendChild(e.elements.buttonCardContainer),e.buttonType=i):e.cardType=`button-${i}`}(e,t,o),"switch"===i?function(e){s(e.elements.iconContainer,e.config),s(e.elements.buttonBackground,e.config.button_action,e.config.entity,{tap_action:{action:"toggle"},double_tap_action:{action:"toggle"},hold_action:{action:"more-info"}}),l(e.elements.buttonBackground,e.elements.feedback)}(e):"slider"===i?function(e){s(e.elements.iconContainer,e.config);let t=0,o=null;function i(o){o.stopPropagation();const i=o.pageX||(o.touches?o.touches[0].pageX:0);Math.abs(t-i)>10&&U(e,i,!0),e.dragging||U(e,i),(0,n.jk)("selection")}function a(t){t.stopPropagation(),clearTimeout(o),o=setTimeout((()=>{e.dragging=!1}),1400);const n=t.pageX||(t.touches?t.touches[0].pageX:0);U(e,n),e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",i),window.removeEventListener("pointerup",a)}e.elements.rangeFill=(0,n.az)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,n.az)("div","bubble-range-slider range-slider"),e.elements.rangeSlider.appendChild(e.elements.rangeFill),e.elements.buttonCardContainer.appendChild(e.elements.rangeSlider),e.elements.buttonCardContainer.insertBefore(e.elements.rangeSlider,e.elements.buttonCard),e.elements.buttonCard.style.cursor="ew-resize",e.elements.buttonCardContainer.addEventListener("pointercancel",(function(){clearTimeout(o),e.dragging=!1,e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",i),window.removeEventListener("pointerup",a)})),e.elements.buttonCardContainer.addEventListener("pointerdown",(n=>{e.elements.buttonCardContainer.setPointerCapture(n.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,t=n.pageX||(n.touches?n.touches[0].pageX:0),e.elements.buttonCardContainer.classList.add("is-dragging"),e.elements.buttonCardContainer.addEventListener("pointermove",i),window.addEventListener("pointerup",a))}))}(e):"state"===i?function(e){s(e.elements.buttonCardContainer,e.config),s(e.elements.buttonBackground,e.config.button_action,e.config.entity,{tap_action:{action:"more-info"},double_tap_action:{action:"more-info"},hold_action:{action:"more-info"}}),l(e.elements.buttonBackground,e.elements.feedback)}(e):"name"===i&&function(e){const t={tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}};s(e.elements.iconContainer,e.config,e.config.entity,t),s(e.elements.buttonBackground,e.config.button_action,e.config.entity,t),l(e.elements.buttonBackground,e.elements.feedback)}(e)),"name"!==i&&(function(e){const t=(0,n.y0)(e),o=e.config.card_type;"unavailable"===t?"button"===o?e.card.classList.add("is-unavailable"):"pop-up"===o&&e.elements.headerContainer.classList.add("is-unavailable"):"button"===o?e.card.classList.remove("is-unavailable"):"pop-up"===o&&e.elements.headerContainer.classList.remove("is-unavailable"),(0,n.OC)(e,"light")?"button"===o?e.card.classList.add("is-light"):"pop-up"===o&&e.elements.headerContainer.classList.add("is-light"):"button"===o?e.card.classList.remove("is-light"):"pop-up"===o&&e.elements.headerContainer.classList.remove("is-light"),(0,n.pr)(e)?"button"===o?e.card.classList.add("is-on"):"pop-up"===o&&e.elements.headerContainer.classList.add("is-on"):"button"===o?e.card.classList.remove("is-on"):"pop-up"===o&&e.elements.headerContainer.classList.remove("is-on")}(e),function(e){const t=e.config.card_type,o=I(e),i=(0,n.OC)(e,"light"),a=(0,n.pr)(e),s=(0,n.mk)(e);"switch"===o&&a?s&&i?("button"===t?e.card.style.setProperty("--bubble-button-background-color",(0,n.mk)(e)):"pop-up"===t&&e.popUp.style.setProperty("--bubble-button-background-color",(0,n.mk)(e)),e.elements.buttonBackground.style.opacity=".5"):("button"===t?e.card.style.setProperty("--bubble-button-background-color","var(--accent-color)"):"pop-up"===t&&e.popUp.style.setProperty("--bubble-button-background-color","var(--accent-color)"),e.elements.buttonBackground.style.opacity="1"):("button"===t?e.card.style.setProperty("--bubble-button-background-color","rgba(0, 0, 0, 0)"):"pop-up"===t&&e.popUp.style.setProperty("--bubble-button-background-color","rgba(0, 0, 0, 0)"),e.elements.buttonBackground.style.opacity=".5")}(e),function(e){if("slider"===I(e)){e.elements.rangeFill.style.backgroundColor=(0,n.mk)(e);let t=0;if((0,n.OC)(e,"light"))t=100*(0,n.IL)(e,"brightness")/255;else if((0,n.OC)(e,"media_player"))t=100*(0,n.IL)(e,"volume_level");else if((0,n.OC)(e,"cover"))t=(0,n.IL)(e,"current_position");else if((0,n.OC)(e,"input_number")){const o=(0,n.IL)(e,"min"),i=(0,n.IL)(e,"max");t=100*((0,n.y0)(e)-o)/(i-o)}else if((0,n.OC)(e,"fan"))t=(0,n.IL)(e,"percentage");else if((0,n.OC)(e,"climate")){const o=(0,n.IL)(e,"min_temp"),i=(0,n.IL)(e,"max_temp");t=100*((0,n.IL)(e,"temperature")-o)/(i-o)}else if((0,n.OC)(e,"number")){const o=(0,n.IL)(e,"min"),i=(0,n.IL)(e,"max");t=100*((0,n.y0)(e)-o)/(i-o)}e.elements.rangeFill.style.transform=`translateX(${t}%)`}}(e)),function(e){const t=I(e),o="name"!==t&&(0,n.pr)(e),i="name"!==t?(0,n.q7)(e):e.config.icon,a="name"!==t?(0,n.gJ)(e):"",s="name"!==t&&(0,n.OC)(e,"light");e.elements.iconContainer.style.color=s&&o?(0,n.mk)(e):"",""!==a?(e.elements.image.style.backgroundImage="url("+a+")",e.elements.icon.style.display="none",e.elements.image.style.display=""):""!==i?(e.elements.icon.icon=i,e.elements.icon.style.color=o&&"state"!==t?(0,n.mk)(e):"inherit",e.elements.icon.style.display="",e.elements.image.style.display="none"):(e.elements.icon.style.display="none",e.elements.image.style.display="none")}(e),function(e){const t="name"!==I(e)?(0,n.oY)(e):e.config.name;t!==e.elements.previousName&&((0,n.GP)(e,e.elements.name,t),e.elements.previousName=t)}(e),T(e),z(e,t,e.elements.buttonCard),"pop-up"!==e.cardType&&function(e){B(e),(0,n.jx)(e);const t=(0,n.y0)(e);let o="";try{o=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,n.X,e.card):""}catch(e){throw new Error(`Error in generating button custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=o)}(e)}async function M(e){if("pop-up"!==e.cardType){if(e.getRootNode()instanceof ShadowRoot==0)return;!function(e){try{e.cardType="pop-up",e.verticalStack=e.getRootNode(),e.sectionRow=e.verticalStack.host.parentElement,e.sectionRowContainer=e.sectionRow?.parentElement,e.popUp=e.verticalStack.querySelector("#root"),e.popUp.classList.add("bubble-pop-up","pop-up","is-popup-closed"),e.verticalStack.removeChild(e.popUp),e.cardTitle=e.verticalStack.querySelector(".card-header"),e.elements={},k(e),e.cardTitle&&(e.cardTitle.style.display="none"),w=w||(e.config.hide_backdrop??!1),e.popUp.style.setProperty("--custom-height-offset-desktop",e.config.margin_top_desktop??"0px"),e.popUp.style.setProperty("--custom-height-offset-mobile",e.config.margin_top_mobile??"0px"),e.popUp.style.setProperty("--custom-margin",`-${e.config.margin??"7px"}`),e.popUp.style.setProperty("--custom-popup-filter",w?`blur(${e.config.bg_blur??10}px)`:"none"),e.popUp.style.setProperty("--custom-shadow-opacity",(e.config.shadow_opacity??0)/100)}catch(e){console.error(e)}}(e),function(e){e.elements={},e.elements.closeIcon=(0,n.az)("ha-icon","bubble-close-icon"),e.elements.closeIcon.icon="mdi:close",e.elements.closeButton=(0,n.az)("button","bubble-close-button close-pop-up"),e.elements.closeButton.addEventListener("click",(()=>{d(),(0,n.jk)("selection")})),e.elements.closeButton.appendChild(e.elements.closeIcon),e.elements.buttonContainer=(0,n.az)("div","bubble-button-container"),e.elements.header=(0,n.az)("div","bubble-header");const t=e.popUp.querySelector(".bubble-header-container");null===t?(e.elements.headerContainer=(0,n.az)("div","bubble-header-container"),e.elements.headerContainer.setAttribute("id","header-container"),e.elements.headerContainer.appendChild(e.elements.header),e.elements.headerContainer.appendChild(e.elements.closeButton),e.elements.header.appendChild(e.elements.buttonContainer)):(e.elements.headerContainer=t,e.elements.closeIcon=t.querySelector(".bubble-close-icon"),e.elements.closeButton=t.querySelector(".bubble-close-button"),e.elements.buttonContainer=t.querySelector(".bubble-button-container"),e.elements.header=t.querySelector(".bubble-header")),e.popUp.addEventListener("touchstart",(e=>{_=e.touches[0].clientY}),{passive:!0}),e.elements.header.addEventListener("touchmove",(t=>{const n=t.touches[0].clientY-_;n>0&&(e.popUp.style.transform=`translateY(${n}px)`)}),{passive:!0}),e.elements.header.addEventListener("touchend",(t=>{t.changedTouches[0].clientY-_>50?d():e.popUp.style.transform=""}),{passive:!0})}(e),(e.config.entity||e.config.name)&&D(e,e.elements.buttonContainer,e.elements.header),function(e){try{e.elements.style=(0,n.az)("style"),e.elements.style.innerText="\n  .bubble-pop-up-container {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      margin-top: -50px;\n      max-width: 100%;\n      padding-top: 40px;\n      padding-bottom: 80px;\n      grid-gap: 14px;\n      gap: 14px;\n      column-gap: 14px;\n      --grid-gap: 14px;\n      --vertical-stack-card-gap: 14px;\n      --horizontal-stack-card-gap: 14px;\n      --stack-card-gap: 14px;\n      -ms-overflow-style: none; /* for Internet Explorer, Edge */\n      scrollbar-width: none; /* for Firefox */\n      overflow-y: auto; \n      overflow-x: hidden; \n      grid-auto-rows: min-content;\n      mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%);\n      -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%);\n      padding: 18px 18px calc(140px + var(--custom-height-offset-mobile)) 18px;\n  }\n  .bubble-pop-up-container > * {\n      flex-shrink: 0 !important;\n  }\n  .bubble-pop-up.card-content {\n      width: 100% !important;\n      padding: 0 !important;\n  }\n  .bubble-pop-up {\n      transition: transform 0.3s ease;\n      background-color: var(--bubble-pop-up-background-color);\n      position: fixed;\n      width: 100%;\n      max-width: 100%;\n      border-radius: 42px 42px 0 0;\n      box-sizing: border-box;\n      margin-left: var(--custom-margin);\n      left: 7px;\n      z-index: 5 !important;\n      bottom: calc(-56px - var(--custom-height-offset-mobile));\n      backdrop-filter: var(--custom-popup-filter);\n      -webkit-backdrop-filter: var(--custom-popup-filter);\n  }\n  .bubble-pop-up-container::-webkit-scrollbar {\n      display: none; /* for Chrome, Safari, and Opera */\n  }\n  .is-popup-opened {\n      box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));\n  }\n  .is-popup-closed { \n      transform: translateY(100%) !important;\n      box-shadow: none !important;\n  }\n\n  @media only screen and (min-width: 600px) {\n      .bubble-pop-up {\n          margin-left: 0 !important;\n          bottom: calc(-56px - var(--custom-height-offset-desktop));\n          min-width: var(--desktop-width, 540px);\n          max-width: var(--desktop-width, 540px);\n          left: calc(50% - (var(--desktop-width, 540px) / 2));\n      }\n      .bubble-pop-up-container {\n          padding: 18px 18px calc(140px + var(--custom-height-offset-desktop)) 18px;\n      }\n  }\n  @media only screen and (min-width: 768px) {\n      .bubble-pop-up {\n        left: calc(var(--mdc-drawer-width, 0px) / 2 + 50% - (var(--desktop-width, 540px) / 2));\n      }\n  }\n  .bubble-pop-up.editor {\n      position: inherit !important;\n      width: 100% !important;\n      backdrop-filter: none !important;\n      display: flex !important;\n      transform: none !important;\n      height: auto !important;\n      min-width: auto;\n      border-radius: 42px;\n  }\n  .bubble-header-container {\n      display: inline-flex;\n      height: 50px;\n      margin: 0;\n      padding: 0;\n      z-index: 3;\n      padding: 18px 18px 22px;\n      position: sticky;\n      top: 0;\n      background: none !important;\n      overflow: visible;\n  }\n  .bubble-header {\n      display: inline-flex;\n      flex-grow: 1;\n      margin-right: 14px;\n      color: var(--primary-text-color);\n  }\n  .bubble-name {\n      font-size: 14px;\n      font-weight: heavy;\n  }\n  .bubble-close-button {\n      height: 50px;\n      width: 50px;\n      border: none;\n      border-radius: 50%;\n      z-index: 1;\n      background: var(--background-color,var(--secondary-background-color));\n      color: var(--primary-text-color);\n      flex-shrink: 0;\n      cursor: pointer;\n  }\n  .bubble-button-card-container {\n      background: var(--background-color,var(--secondary-background-color));\n  }\n  .bubble-pop-up-container.editor-cropped {\n      height: 122px !important;\n      mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;\n      -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;   \n  }\n  .bubble-pop-up.editor > .bubble-pop-up-container {\n      padding-bottom: 18px !important;\n      mask-image: none;\n      -webkit-mask-image: none;    \n  }\n\n  .no-header .bubble-header-container {\n      visibility: hidden !important;\n      height: 0px !important;\n  }\n  .no-header .bubble-pop-up-container {\n      padding-top: 4px !important;\n      mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n      -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n  }\n\n  .large .bubble-button-card-container {\n    height: 56px;\n    border-radius: 32px;\n  }\n  .large .bubble-pop-up-container {\n      margin-top: -36px;\n  }\n  .large .bubble-icon-container {\n    --mdc-icon-size: 24px;\n    min-width: 42px !important;\n    min-height: 42px !important;\n    margin-left: 8px;\n  }\n  .large .bubble-close-button {\n      height: 56px;\n      width: 56px;\n      border: none;\n      border-radius: 50%;\n      z-index: 1;\n      --mdc-icon-size: 28px !important;\n  }\n\n  .rows-2 .bubble-sub-button-container {\n    flex-direction: column;\n    gap: 4px !important;\n    display: grid !important;\n    grid-template-columns: repeat(2, min-content);\n    grid-template-rows: repeat(2, 1fr);\n    grid-auto-flow: column;\n    width: auto;\n    padding-right: 14px;\n  }\n  .rows-2 .bubble-sub-button {\n    height: 20px !important;\n  }\n";let i,a=e.popUp.querySelector("style");a?e.elements.customStyle=a:(e.elements.customStyle=(0,n.az)("style"),e.popUp.appendChild(e.elements.customStyle),e.popUp.appendChild(e.elements.style));const s=e.config.bg_opacity??88;function l(){i=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color");const n=e.config.bg_color?e.config.bg_color:i,o=(0,t._k)(n,s/100,1.02);e.popUp.style.setProperty("--bubble-pop-up-background-color",o)}x.addEventListener("change",(()=>{l()})),l(),e.popUp.style.setProperty("--desktop-width",e.config.width_desktop??"540px"),e.config.close_on_click&&e.popUp.addEventListener("touchend",d);const c=function(e){return function(){e.config.hash===location.hash?(r=!0,setTimeout((()=>{r=!1}),500),function(e){e.popUp.classList.contains("is-popup-opened")||(clearTimeout(e.hideContentTimeout),clearTimeout(e.removeDomTimeout),clearTimeout(e.closeTimeout),h(e,!0),b(e,!0),function(e){let{sectionRow:t,sectionRowContainer:n,popUp:o}=e;o.style.transform="","hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!1,t.style.display="",n?.classList.contains("card")&&(n.style.display=""))}(e),m(e,!0),g(e,!0),e.config.auto_close>0&&(e.closeTimeout=setTimeout((()=>d()),e.config.auto_close)),document.body.style.overflow="hidden",e.config.open_action&&o(e.popUp,e.config,"open_action"))}(e)):function(e){e.popUp.classList.contains("is-popup-opened")&&(clearTimeout(e.hideContentTimeout),clearTimeout(e.removeDomTimeout),clearTimeout(e.closeTimeout),m(e,!1),h(e,!1),u(e,300),b(e,!1),g(e,!1),document.body.style.overflow="",e.config.close_action&&o(e,e.config,"close_action"))}(e)}}(e);setTimeout((()=>{c()}),0),window.addEventListener("location-changed",c),window.addEventListener("popstate",c),window.addEventListener("keydown",(t=>{"Escape"===t.key&&e.config.hash===location.hash&&d()}),{passive:!0}),e.popUp.addEventListener("touchmove",(e=>{e.touches[0].clientY-_>400&&e.touches[0].clientY>v&&d(),v=e.touches[0].clientY}),{passive:!0});const p=e.popUp.querySelector(".bubble-pop-up-container");if(null===p){e.elements.popUpContainer=(0,n.az)("div"),e.elements.popUpContainer.classList.add("bubble-pop-up-container");let f=e.popUp.firstChild;for(;f;)e.elements.popUpContainer.appendChild(f),f=e.popUp.firstChild}else e.elements.popUpContainer=p;e.popUp.appendChild(e.elements.headerContainer),e.popUp.appendChild(e.elements.popUpContainer),u(e,0)}catch(y){console.error(y)}}(e),A(e)}(e.popUp.classList.contains("is-popup-opened")||(0,n.u3)(e,e.popUp))&&((e.config.entity||e.config.name)&&D(e,e.elements.buttonContainer,e.elements.header),A(e)),function(e){let t=e.config.trigger_entity??"";if(""===t)return;let n=e.config.trigger_state??"",o=e.config.trigger_close??!1,i=e._hass.states[t]?.state;if(!t)return;if(!n)return;if(e.oldTriggerEntityState===i)return;const a=!e.hasPageLoaded;e.hasPageLoaded=!0,e.config.hash===location.hash?o&&n!==i&&(a||d()):i===n&&p(e.config.hash),e.oldTriggerEntityState=i}(e),function(e){const t=e.verticalStack.host?.closest("hui-card-preview")||e.verticalStack.host?.closest("hui-card[preview][class]")||e.verticalStack.host?.getRootNode().host?.closest("hui-section[preview][class]");e.popUp.classList.contains("is-popup-opened")||"hui-card"!==e.sectionRow.tagName.toLowerCase()||(e.editor||!e.editorAccess||t||"none"===e.sectionRow.style.display?e.sectionRowContainer?.classList.contains("card")&&!e.popUp.classList.contains("is-popup-opened")&&e.editor&&""!==e.sectionRowContainer.style.display&&(e.sectionRowContainer.style.display=""):(e.sectionRow.toggleAttribute("hidden",!0),e.sectionRow.style.display="none")),e.editor||null!==t?(e.popUp.classList.add("editor"),e.editorAccess=!0,null!==t?e.elements.popUpContainer?.classList.remove("editor-cropped"):e.elements.popUpContainer?.classList.add("editor-cropped")):(e.popUp.classList.remove("editor"),e.elements.popUpContainer?.classList.remove("editor-cropped")),function(e){const{hideBackdrop:t}=k(e);let n=e.verticalStack;const o=n.host?.closest("hui-card-preview")||n.host?.closest("hui-card[preview][class]")||n.host?.getRootNode().host?.closest("hui-section[preview][class]");if(e.editor||null!==o){t(),window.clearTimeout(e.removeDomTimeout);const o=e.popUp;o.parentNode!==n&&n.appendChild(o)}}(e)}(e)}let N=!1;function q(e,t){const o=e.config[`${t}_name`]??"",i=e.config[`${t}_icon`]??"",a=e.config[`${t}_pir_sensor`],s=e.config[`${t}_link`],l=e.config[`${t}_entity`];N=N||location.hash===s;const r=(0,n.az)("ha-icon","bubble-icon icon");r.icon=i;const c=(0,n.az)("div","bubble-name name");c.innerText=o;const u=(0,n.az)("div","bubble-background-color background-color"),h=(0,n.az)("div","bubble-background background"),b=(0,n.az)("div",`bubble-button bubble-button-${t} button ${s.substring(1)}`);let m=localStorage.getItem(`bubbleButtonWidth-${s}`);return b.style.width=`${m}px`,b.appendChild(r),b.appendChild(c),b.appendChild(u),b.appendChild(h),b.addEventListener("click",(()=>{location.hash!==s&&(N=!1),N?d():p(s),N=!N,(0,n.jk)("light")})),b.icon=r,b.name=c,b.backgroundColor=u,b.background=h,b.pirSensor=a,b.lightEntity=l,b.link=s,b.index=t,window.addEventListener("location-changed",(function(){e.config.highlight_current_view&&(location.pathname===s||location.hash===s?b.classList.add("highlight"):b.classList.remove("highlight"))})),e.elements.buttons.push(b),b}function R(e,t){(0,n.OC)(e,"media_player")&&e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:(t/100).toFixed(2)})}function j(e,t,n=!1){const o=e.elements.rangeSlider.getBoundingClientRect(),i=100*(t-o.left)/o.width,a=Math.round(Math.min(100,Math.max(0,i)));if(e.elements.rangeFill.style.transform=`translateX(${a}%)`,n){if(e.dragging)return;R(e,a)}else R(e,a)}(0,n.P2)(R);const X="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n\n    ha-card {\n        margin-top: 0;\n        background: none;\n        opacity: 1;\n    }\n    .is-unavailable {\n        opacity: 0.5;\n    }\n\n    .bubble-media-player-container {\n        position: relative;\n        width: 100%;\n        height: 50px;\n        background-color: var(--background-color-2,var(--secondary-background-color));\n        border-radius: 25px;\n        overflow: visible;\n        touch-action: pan-y;\n    }\n\n    .bubble-media-player {\n        display: flex;\n        position: absolute;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        transition: background-color 1.5s;\n        background-color: rgba(0,0,0,0);\n    }\n\n    .bubble-button-container {\n        display: inline-grid;\n        grid-auto-flow: column;\n        gap: 10px;\n        align-self: center;\n        margin-right: 8px;\n    }\n\n    .bubble-play-pause-button,\n    .bubble-previous-button,\n    .bubble-next-button,\n    .bubble-volume-button,\n    .bubble-power-button {\n        background: none;\n        border: none;\n        cursor: pointer;\n        border-radius: 100%;\n        padding: 6px;\n        height: 24px;\n        width: 24px;\n        transition: background 0.3s ease;\n        align-self: center;\n    }\n\n    .bubble-play-pause-button {\n        background-color: var(--accent-color);\n    }\n\n    .bubble-volume-slider {\n        position: absolute;\n        width: calc(100% - 150px);\n        height: 38px;\n        left: 50px;\n        overflow: hidden;\n        border-radius: 20px;\n        z-index: 1;\n        background-color: var(--card-background-color, var(--ha-card-background));\n        opacity: 1;\n        transition: opacity .2s, transform .2s;\n        transform: translateX(0);\n    }\n\n    .bubble-range-value {\n        display: flex;\n        justify-content: flex-end;\n        height: 38px;\n        align-items: center;\n        padding-right: 14px;\n        font-size: 12px;\n        opacity: 0.8;\n    }\n\n    .bubble-mute-button {\n        opacity: 1;\n        transition: opacity .2s, transform .2s;\n        transform: translateX(0);\n    }\n\n    .is-hidden {\n        opacity: 0 !important;\n        pointer-events: none;\n        transform: translateX(14px);\n    }\n\n    .bubble-range-fill {\n        z-index: -1;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        left: -100%;\n        transition: all .3s;\n        background-color: var(--accent-color);\n    }\n\n    .is-dragging .bubble-range-fill {\n        transition: none;\n    }\n\n    .is-light .bubble-range-fill {\n        opacity: 0.5;\n    }\n\n    .is-unavailable .bubble-button-card {\n        cursor: not-allowed;\n    }\n\n    .bubble-range-slider {\n        cursor: ew-resize;\n    }\n    .is-unavailable .bubble-range-slider {\n        cursor: not-allowed;\n    }\n\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        width: 38px;\n        height: 38px;\n        min-width: 38px;\n        min-height: 38px;\n        align-items: center;\n        justify-content: center;\n        margin: 6px;\n        border-radius: 50%;\n        background-color: var(--card-background-color, var(--ha-card-background));\n        overflow: hidden;\n        z-index: 1;\n        position: relative;\n        cursor: pointer;\n        pointer-events: auto;\n    }\n\n    .bubble-icon {\n        opacity: 0.6;\n    }\n\n    .is-on .bubble-icon {\n      filter: brightness(1.1);\n      opacity: 1;\n    }\n\n    .bubble-icon,\n    .bubble-mute-button {\n        display: flex;\n        position: absolute;\n        height: 38px;\n        width: 38px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .bubble-entity-picture {\n        background-size: cover;\n        background-position: center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n\n    .bubble-media-info-container {\n        display: flex;\n        line-height: 14px;\n        font-size: 12px;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        margin-left: 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-title,\n    .bubble-name,\n    .bubble-state,\n    .bubble-artist {\n        display: flex;\n        margin: 2px 0;\n        position: relative;\n        white-space: nowrap;\n    }\n\n    .bubble-title {\n        font-weight: 600;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 1em;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        font-weight: 600;\n        margin-left: 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        font-size: 13px;\n        margin: 2px 0;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        opacity: 0.7;\n        margin: 2px 0;\n        font-weight: normal;\n    }\n\n    .bubble-sub-button-container {\n        right: 0 !important;\n    }\n\n    @media screen and (max-width: 250px) {\n        .bubble-previous-button {\n            display: none;\n        }\n    }\n\n    @media screen and (max-width: 206px) {\n        .bubble-next-button {\n            display: none;\n        }\n    }\n\n    @media screen and (max-width: 160px) {\n        .bubble-volume-button {\n            display: none;\n        }\n    }\n\n    @keyframes tap-feedback {\n        0% {transform: translateX(-100%); opacity: 0;}\n        64% {transform: translateX(0); opacity: 0.1;}\n        100% {transform: translateX(100%); opacity: 0;}\n    }\n\n    .large .bubble-media-player-container {\n      height: 56px;\n      border-radius: 32px;\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 24px;\n      min-width: 42px !important;\n      min-height: 42px !important;\n      margin-left: 8px;\n    }\n    \n    .large .bubble-play-pause-button {\n      display: flex;\n      height: 42px;\n      width: 42px;\n      padding: 0;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .large .bubble-volume-slider {\n      height: 42px;\n      border-radius: 24px;\n      left: 60px;\n      width: calc(100% - 174px);\n    }\n\n    .large .bubble-range-value {\n      place-items: center;\n      height: 42px;\n    }\n\n    .large .bubble-button-container {\n      align-items: center;\n      gap: 14px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(2, 1fr);\n      grid-template-rows: repeat(2, minmax(auto, max-content));\n      grid-auto-flow: column;\n      width: auto;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n";function W(e){"media-player"!==e.cardType&&function(e){e.dragging=!1,e.elements={},e.elements.mediaPlayerContainer=(0,n.az)("div","bubble-media-player-container"),e.elements.mediaPlayerCard=(0,n.az)("div","bubble-media-player"),e.elements.mediaInfoContainer=(0,n.az)("div","bubble-media-info-container"),e.elements.nameContainer=(0,n.az)("div","bubble-name-container"),e.elements.buttonContainer=(0,n.az)("div","bubble-button-container"),e.elements.iconContainer=(0,n.az)("div","bubble-icon-container"),e.elements.playPauseButton=(0,n.az)("ha-icon","bubble-play-pause-button"),e.elements.previousButton=(0,n.az)("ha-icon","bubble-previous-button"),e.elements.previousButton.setAttribute("icon","mdi:skip-previous"),e.elements.nextButton=(0,n.az)("ha-icon","bubble-next-button"),e.elements.nextButton.setAttribute("icon","mdi:skip-next"),e.elements.volumeButton=(0,n.az)("ha-icon","bubble-volume-button"),e.elements.volumeButton.setAttribute("icon","mdi:volume-high"),e.elements.powerButton=(0,n.az)("ha-icon","bubble-power-button"),e.elements.powerButton.setAttribute("icon","mdi:power-standby"),e.elements.muteButton=(0,n.az)("ha-icon","bubble-mute-button is-hidden"),e.elements.muteButton.setAttribute("icon","mdi:volume-off"),e.elements.title=(0,n.az)("div","bubble-title"),e.elements.artist=(0,n.az)("div","bubble-artist"),e.elements.name=(0,n.az)("div","bubble-name"),e.elements.state=(0,n.az)("div","bubble-state"),e.elements.icon=(0,n.az)("ha-icon","bubble-icon"),e.elements.image=(0,n.az)("div","bubble-entity-picture"),e.elements.style=(0,n.az)("style"),e.elements.customStyle=(0,n.az)("style"),e.elements.style.innerText=X,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.iconContainer.appendChild(e.elements.muteButton),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.mediaInfoContainer.appendChild(e.elements.title),e.elements.mediaInfoContainer.appendChild(e.elements.artist),e.elements.buttonContainer.appendChild(e.elements.powerButton),e.elements.buttonContainer.appendChild(e.elements.previousButton),e.elements.buttonContainer.appendChild(e.elements.nextButton),e.elements.buttonContainer.appendChild(e.elements.volumeButton),e.elements.buttonContainer.appendChild(e.elements.playPauseButton),e.elements.mediaPlayerCard.appendChild(e.elements.iconContainer),e.elements.mediaPlayerCard.appendChild(e.elements.mediaInfoContainer),e.elements.mediaPlayerCard.appendChild(e.elements.nameContainer),e.elements.mediaPlayerCard.appendChild(e.elements.buttonContainer),e.content.innerHTML="",e.content.appendChild(e.elements.mediaPlayerContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.mediaPlayerContainer.appendChild(e.elements.mediaPlayerCard),s(e.elements.icon,e.config,e.config.entity),s(e.elements.image,e.config,e.config.entity),e.elements.volumeSliderContainer=(0,n.az)("div","bubble-volume-slider is-hidden"),function(e,t){let o=0,i=Math.round(100*(0,n.IL)(e,"volume_level"))+"%";function a(t){t.stopPropagation();const n=t.pageX||(t.touches?t.touches[0].pageX:0);Math.abs(o-n)>10&&j(e,n,!0);const i=e.elements.rangeSlider.getBoundingClientRect(),a=100*(n-i.left)/i.width,s=Math.min(100,Math.max(0,a));e.elements.rangeValue.innerText=Math.round(s)+"%"}function s(n){n.stopPropagation(),e.dragging=!1;const o=n.pageX||(n.touches?n.touches[0].pageX:0);j(e,o),t.classList.remove("is-dragging"),t.removeEventListener("pointermove",a),t.removeEventListener("pointerup",s);const i=e.elements.rangeSlider.getBoundingClientRect(),l=100*(o-i.left)/i.width,r=Math.min(100,Math.max(0,l));e.elements.rangeValue.innerText=Math.round(r)+"%"}e.elements.rangeFill=(0,n.az)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,n.az)("div","bubble-range-slider range-slider"),e.elements.rangeValue=(0,n.az)("div","bubble-range-value"),e.elements.rangeSlider.appendChild(e.elements.rangeValue),e.elements.rangeSlider.appendChild(e.elements.rangeFill),t.appendChild(e.elements.rangeSlider),t.addEventListener("pointercancel",(function(){e.dragging=!1,t.classList.remove("is-dragging"),t.removeEventListener("pointermove",a),t.removeEventListener("pointerup",s)})),t.addEventListener("pointerdown",(n=>{t.setPointerCapture(n.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,o=n.pageX||(n.touches?n.touches[0].pageX:0),t.classList.add("is-dragging"),t.addEventListener("pointermove",a),t.addEventListener("pointerup",s))})),e.elements.rangeValue.innerText=i}(e,e.elements.volumeSliderContainer),e.elements.mediaPlayerCard.appendChild(e.elements.volumeSliderContainer),e.elements.volumeButton.addEventListener("click",(()=>{e.elements.volumeSliderContainer.classList.toggle("is-hidden"),e.elements.muteButton.classList.toggle("is-hidden"),e.elements.icon.classList.toggle("is-hidden"),e.elements.image.classList.toggle("is-hidden"),function(e){e.elements.volumeButton.isHidden?(e.elements.volumeButton.setAttribute("icon","mdi:volume-high"),e.elements.mediaInfoContainer.style.opacity="1",e.elements.nameContainer.style.opacity="1",e.elements.volumeButton.isHidden=!1):(e.elements.volumeButton.setAttribute("icon","mdi:close"),e.elements.mediaInfoContainer.style.opacity="0",e.elements.nameContainer.style.opacity="0",e.elements.volumeButton.isHidden=!0)}(e)})),e.elements.powerButton.addEventListener("click",(()=>{const t=(0,n.pr)(e);e._hass.callService("media_player",t?"turn_off":"turn_on",{entity_id:e.config.entity})})),e.elements.muteButton.addEventListener("click",(()=>{const t=!0===(0,n.IL)(e,"is_volume_muted");e._hass.callService("media_player","volume_mute",{entity_id:e.config.entity,is_volume_muted:!t}),e.elements.muteButton.clicked=!0})),e.elements.previousButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_previous_track",{entity_id:e.config.entity})})),e.elements.nextButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_next_track",{entity_id:e.config.entity})})),e.elements.playPauseButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_play_pause",{entity_id:e.config.entity}),e.elements.playPauseButton.clicked=!0})),e.elements.mediaPlayerContainer.addEventListener("click",(()=>(0,n.jk)("selection"))),e.cardType="media-player"}(e),function(e){"unavailable"===(0,n.y0)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable"),(0,n.pr)(e)?e.card.classList.add("is-on"):e.card.classList.remove("is-on")}(e),function(e){const t=(0,n.oY)(e);t!==e.previousName&&(e.elements.name.innerText=t,e.previousName=t,(0,n.GP)(e,e.elements.name,t))}(e),function(e){const t=(0,n.IL)(e,"media_title"),o=(0,n.IL)(e,"media_artist"),i=t+o;i!==e.previousMediaState&&(e.elements.artist.style.display=""===o?"none":"flex",e.previousMediaState=i,(0,n.GP)(e,e.elements.title,t),(0,n.GP)(e,e.elements.artist,o))}(e),function(e){(0,n.IL)(e,"media_title");const t=""===(0,n.IL)(e,"media_artist");e.elements.mediaInfoContainer.style.display=t?"none":"",e.elements.nameContainer.style.display=t?"":"none"}(e),function(e){const t=(0,n.pr)(e),o=(0,n.q7)(e),i=(0,n.gJ)(e);""!==i?(e.elements.image.style.backgroundImage="url("+i+")",e.elements.icon.style.display="none",e.elements.image.style.display=""):""!==o?(e.elements.icon.icon=o,e.elements.icon.style.color=t?"var(--accent-color)":"inherit",e.elements.icon.style.display="",e.elements.image.style.display="none"):(e.elements.icon.style.display="none",e.elements.image.style.display="none")}(e),T(e),function(e){if((0,n.OC)(e,"media_player")&&!1===e.dragging&&e.elements.rangeFill){const t=100*(0,n.IL)(e,"volume_level");e.elements.rangeFill.style.transform=`translateX(${t}%)`}}(e),function(e){const t="playing"===(0,n.y0)(e),o=e.elements.playPauseButton.clicked;t?e.elements.playPauseButton.setAttribute("icon",o?"mdi:play":"mdi:pause"):e.elements.playPauseButton.setAttribute("icon",o?"mdi:pause":"mdi:play"),e.elements.playPauseButton.clicked=!1}(e),function(e){const t=!0===(0,n.IL)(e,"is_volume_muted"),o=e.elements.muteButton.clicked;e.elements.muteButton.style.color=t?o?"":"var(--accent-color)":o?"var(--accent-color)":"",e.elements.muteButton.clicked=!1}(e),function(e){const t=(0,n.pr)(e);e.elements.powerButton.style.color=t?"var(--accent-color)":""}(e),z(e,e.content,e.elements.buttonContainer,!0),function(e){B(e),(0,n.jx)(e);const t=(0,n.y0)(e),o="off"!==t&&"undefined"!==t;e.config.hide?.power_button&&"none"!==e.elements.powerButton.style.display?e.elements.powerButton.style.display="none":e.config.hide?.power_button||"none"!==e.elements.powerButton.style.display||(e.elements.powerButton.style.display=""),!e.config.hide?.previous_button&&(e.editor||o)||"none"===e.elements.previousButton.style.display?e.config.hide?.previous_button||!e.editor&&!o||"none"!==e.elements.previousButton.style.display||(e.elements.previousButton.style.display=""):e.elements.previousButton.style.display="none",!e.config.hide?.next_button&&(e.editor||o)||"none"===e.elements.nextButton.style.display?e.config.hide?.next_button||!e.editor&&!o||"none"!==e.elements.nextButton.style.display||(e.elements.nextButton.style.display=""):e.elements.nextButton.style.display="none",!e.config.hide?.volume_button&&(e.editor||o)||"none"===e.elements.volumeButton.style.display?e.config.hide?.volume_button||!e.editor&&!o||"none"!==e.elements.volumeButton.style.display||(e.elements.volumeButton.style.display=""):e.elements.volumeButton.style.display="none",!e.config.hide?.play_pause_button&&(e.editor||o)||"none"===e.elements.playPauseButton.style.display?e.config.hide?.play_pause_button||!e.editor&&!o||"none"!==e.elements.playPauseButton.style.display||(e.elements.playPauseButton.style.display=""):e.elements.playPauseButton.style.display="none";let i="";try{i=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,n.X,e.card):""}catch(e){throw new Error(`Error in generating media player custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=i)}(e)}let F,Y,G;class J extends HTMLElement{editor=!1;isConnected=!1;connectedCallback(){this.isConnected=!0,this._hass&&this.updateBubbleCard()}disconnectedCallback(){this.isConnected=!1}set editMode(e){this.editor!==e&&(this.editor=e,this._hass&&this.updateBubbleCard())}set hass(e){!function(e){if(!e.content){let t=e.shadowRoot||e.attachShadow({mode:"open"}),n=document.createElement("ha-card");n.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let o=document.createElement("div");o.className="card-content",o.style.padding="0",n.appendChild(o),t.appendChild(n),e.card=n,e.content=o}}(this),this._hass=e,(this.isConnected||"pop-up"===this.config.card_type)&&this.updateBubbleCard()}updateBubbleCard(){switch(this.config.card_type){case"pop-up":M(this);break;case"button":D(this);break;case"separator":"separator"!==(e=this).cardType&&function(e){e.elements={},e.elements.separatorCard=(0,n.az)("div","bubble-separator separator-container"),e.elements.icon=(0,n.az)("ha-icon","bubble-icon"),e.elements.name=(0,n.az)("h4","bubble-name"),e.elements.line=(0,n.az)("div","bubble-line"),e.elements.style=(0,n.az)("style"),e.elements.style.innerText="\n    .bubble-separator {\n        display: flex;\n        width: 100%;\n        \n        align-items: center;\n        z-index: 1;\n    }\n    .bubble-icon {\n        display: inline-flex;\n        height: auto;\n        width: auto;\n        margin: 0 22px 0 8px;\n    }\n    .bubble-name {\n        margin: 0 30px 0 0;\n        font-size: 16px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    .bubble-name:empty {\n        display: none;\n    }\n    .bubble-line {\n        border-radius: 6px;\n        opacity: 0.5;\n        flex-grow: 1;\n        height: 6px;\n        background-color: var(--background-color, var(--secondary-background-color));\n        margin-right: 14px;\n    }\n    .bubble-sub-button-container {\n        margin: 0 8px;\n        right: 0 !important;\n    }\n\n    .large .bubble-separator {\n        height: 56px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n        flex-direction: column;\n        gap: 4px !important;\n        display: grid !important;\n        grid-template-columns: repeat(2, min-content);\n        grid-template-rows: repeat(2, 1fr);\n        grid-auto-flow: column;\n        width: auto;\n    }\n\n    .rows-2 .bubble-sub-button {\n        height: 20px !important;\n    }\n",e.elements.customStyle=(0,n.az)("style"),e.elements.separatorCard.appendChild(e.elements.icon),e.elements.separatorCard.appendChild(e.elements.name),e.elements.separatorCard.appendChild(e.elements.line),e.content.innerHTML="",e.content.appendChild(e.elements.separatorCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="separator"}(e),function(e){e.elements.icon.icon=(0,n.q7)(e),""===e.elements.icon.icon&&""===e.elements.icon.style.margin?(e.elements.icon.style.margin="0px 8px",e.elements.icon.style.width="0px"):""!==e.elements.icon.icon&&"0px 8px"===e.elements.icon.style.margin&&(e.elements.icon.style.margin="",e.elements.icon.style.width="")}(e),function(e){const t=(0,n.oY)(e);t!==e.elements.name.innerText&&(e.elements.name.innerText=t)}(e),z(e,e.content,e.elements.separatorCard),function(e){B(e),(0,n.jx)(e);const t=(0,n.y0)(e);let o="";try{o=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,n.X,e.card):""}catch(e){throw new Error(`Error in generating separator custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=o)}(e);break;case"cover":!function(e){"cover"!==e.cardType&&function(e){e.elements={},e.elements.coverCardContainer=(0,n.az)("div","bubble-cover-card-container cover-container"),e.elements.headerContainer=(0,n.az)("div","bubble-header header-container"),e.elements.buttonsContainer=(0,n.az)("div","bubble-buttons buttons-container"),e.elements.iconContainer=(0,n.az)("div","bubble-icon-container icon-container"),e.elements.icon=(0,n.az)("ha-icon","bubble-icon"),e.elements.nameContainer=(0,n.az)("div","bubble-name-container name-container"),e.elements.name=(0,n.az)("div","bubble-name name"),e.elements.state=(0,n.az)("div","bubble-state state"),e.elements.buttonOpen=(0,n.az)("div","bubble-button bubble-open button open"),e.elements.buttonStop=(0,n.az)("div","bubble-button bubble-stop button stop"),e.elements.buttonClose=(0,n.az)("div","bubble-button bubble-close button close"),e.elements.iconOpen=(0,n.az)("ha-icon","bubble-icon bubble-icon-open"),e.elements.iconStop=(0,n.az)("ha-icon","bubble-icon bubble-icon-stop"),e.elements.iconStop.icon="mdi:stop",e.elements.iconClose=(0,n.az)("ha-icon","bubble-icon bubble-icon-close"),e.elements.style=(0,n.az)("style"),e.elements.style.innerText="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n    ha-card {\n        margin-top: 0 !important;\n        background: none !important;\n    }\n\n    .bubble-cover-card-container {\n        display: grid;\n        gap: 10px;\n        overflow: hidden;\n    }\n\n    .bubble-header {\n        display: flex;\n        align-items: center;\n    }\n\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        min-width: 38px;\n        min-height: 38px;\n        border-radius: 50%;\n        background-color: var(--card-background-color, var(--ha-card-background));\n        border: 6px solid var(--background-color-2, var(--secondary-background-color));\n        cursor: pointer;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 1em;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        font-weight: 600;\n        margin-left: 4px;\n        margin-right: 16px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        font-size: 13px;\n        margin: 2px 0;\n        white-space: nowrap;\n        display: flex;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        opacity: 0.7;\n        margin: 2px 0;\n        font-weight: normal;\n        white-space: nowrap;\n        display: flex;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-buttons {\n        display: grid;\n        align-self: center;\n        grid-auto-flow: column;\n        grid-gap: 18px;\n    }\n\n    .bubble-icon {\n        display: flex; \n        height: 24px; \n        width: 24px; \n        color: var(--primary-text-color);\n    }\n\n    .bubble-button {\n        display: flex;\n        background: var(--background-color-2, var(--secondary-background-color));\n        height: 42px;\n        border-radius: 32px;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: none;\n    }\n\n    .large .bubble-cover-card-container {\n      height: 56px;\n      display: flex;\n      background: var(--background-color-2, var(--secondary-background-color));\n      border-radius: 32px;\n    }\n\n    .large .bubble-buttons .bubble-icon {\n      color: var(--primary-text-color) !important;\n      opacity: 1;\n    }\n\n    .large .bubble-header-container {\n        height: 56px;\n    }\n\n    .large .bubble-header {\n        width: 100%;\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 24px;\n      min-width: 42px !important;\n      min-height: 42px !important;\n      margin-left: 2px;\n      align-content: center;\n    }\n\n    .large .bubble-icon {\n      align-items: center;\n    }\n\n    .large .bubble-buttons {\n      display: flex;\n      position: relative;\n      right: 18px;\n      align-self: center;\n      grid-gap: 18px;\n    }\n\n    .large .bubble-sub-button-container {\n      margin-right: 14px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(2, min-content);\n      grid-template-rows: repeat(2, 1fr);\n      grid-auto-flow: column;\n      width: auto;\n      padding-right: 14px;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n",e.elements.customStyle=(0,n.az)("style"),e.elements.iconContainer.appendChild(e.elements.icon),e.elements.headerContainer.appendChild(e.elements.iconContainer),e.elements.headerContainer.appendChild(e.elements.nameContainer),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonsContainer.appendChild(e.elements.buttonOpen),e.elements.buttonsContainer.appendChild(e.elements.buttonStop),e.elements.buttonsContainer.appendChild(e.elements.buttonClose),e.elements.buttonOpen.appendChild(e.elements.iconOpen),e.elements.buttonOpen.addEventListener("click",(()=>{const t=e.config.open_service??"cover.open_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),e.elements.buttonStop.appendChild(e.elements.iconStop),e.elements.buttonStop.addEventListener("click",(()=>{const t=e.config.stop_service??"cover.stop_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),e.elements.buttonClose.appendChild(e.elements.iconClose),e.elements.buttonClose.addEventListener("click",(()=>{const t=e.config.close_service??"cover.close_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),s(e.elements.iconContainer,e.config),e.content.innerHTML="",e.content.appendChild(e.elements.coverCardContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.coverCardContainer.appendChild(e.elements.headerContainer),e.elements.coverCardContainer.appendChild(e.elements.buttonsContainer),e.elements.coverCardContainer.addEventListener("click",(()=>(0,n.jk)("selection"))),e.cardType="cover"}(e),function(e){e.config.icon_open,e.config.icon_close;const t="closed"!==(0,n.y0)(e),o="curtain"===(0,n.IL)(e,"device_class");e.elements.icon.icon=t?(0,n.q7)(e,e.config.entity,e.config.icon_open):(0,n.q7)(e,e.config.entity,e.config.icon_close),e.elements.iconOpen.icon=e.config.icon_up||(o?"mdi:arrow-expand-horizontal":"mdi:arrow-up"),e.elements.iconClose.icon=e.config.icon_down||(o?"mdi:arrow-collapse-horizontal":"mdi:arrow-down")}(e),function(e){const t=(0,n.oY)(e);t!==e.elements.previousName&&(e.elements.name.innerText=t,(0,n.GP)(e,e.elements.name,t),e.elements.previousName=t)}(e),T(e),z(e,e.content,e.elements.headerContainer),function(e){B(e),(0,n.jx)(e);const t=(0,n.y0)(e);let o="";try{o=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon.icon,e.subButtonIcon,n.X,e.card):""}catch(e){throw new Error(`Error in generating cover custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=o)}(e)}(this);break;case"empty-column":!function(e){"empty-column"!==e.cardType&&function(e){e.elements={},e.elements.emptyColumnCard=(0,n.az)("div","bubble-empty-column empty-column"),e.elements.style=(0,n.az)("style"),e.elements.style.innerText="\n    .empty-column {\n        display: flex;\n        width: 100%;\n    }\n",e.elements.customStyle=(0,n.az)("style"),e.content.innerHTML="",e.content.appendChild(e.elements.emptyColumnCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="empty-column"}(e)}(this);break;case"horizontal-buttons-stack":!function(e){"horizontal-buttons-stack"!==e.cardType&&function(e){e.elements={},e.elements.buttons=[],e.elements.cardContainer=(0,n.az)("div","bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container");let t=1;for(;e.config[t+"_link"];)e.elements.cardContainer.appendChild(q(e,t)),t++;e.elements.style=(0,n.az)("style"),e.elements.style.innerText="\n    @keyframes from-bottom {\n        0% { transform: translate(-50%, 100px); }\n        26% { transform: translate(-50%, -8px); }\n        46% { transform: translate(-50%, 1px); }\n        62% { transform: translate(-50%, -2px); }\n        70% { transform: translate(-50%, 0); }\n        100% { transform: translate(-50%, 0); }\n    }\n    @keyframes pulse {\n        0% { filter: brightness(0.7); }\n        100% { filter: brightness(1.3); }\n    }\n    ha-card {\n        border-radius: 0;\n    }\n    .horizontal-buttons-stack-card {\n        bottom: 16px;\n        height: 51px;\n        margin-top: 0;\n        position: fixed;\n        width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\n        left: calc(var(--mdc-drawer-width, 0px) + 4px);\n        z-index: 6; /* Higher value hide the more-info panel */\n    }\n    @media only screen and (max-width: 870px) {\n        .horizontal-buttons-stack-card {\n            width: calc(100% - 16px);\n            left: 8px;\n        }\n\n        .horizontal-buttons-stack-card::before {\n            left: -10px;\n        }\n    }\n    .horizontal-buttons-stack-card::before {\n        content: '';\n        position: absolute;\n        top: -32px;\n        display: none;\n        background: linear-gradient(0deg, var(--background-color, var(--primary-background-color)) 50%, rgba(79, 69, 87, 0));\n        width: 200%;\n        height: 100px;\n        pointer-events: none;\n    }\n    .has-gradient.horizontal-buttons-stack-card::before {\n        display: block;\n    }\n\n    .card-content {\n        width: calc(100% + 36px);\n        padding: 0 !important;\n        max-width: calc(var(--desktop-width) - 8px);\n        box-sizing: border-box;\n        overflow: scroll;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n        -ms-overflow-style: none;\n        scrollbar-width: none;\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            #000000 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            transparent 100%\n        );\n    }\n    .is-scrollable.card-content {\n        padding: 0 !important;\n        width: 100%;\n    }\n    .is-scrolled.card-content {\n        padding: 0 !important;\n        width: 100%;\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            transparent 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            transparent 100%\n        );\n    }\n    .is-maxed-scroll.card-content {\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            transparent 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            #000000 100%\n        );\n    }\n    .card-content::-webkit-scrollbar {\n        display: none;\n    }\n\n    .bubble-horizontal-buttons-stack-card-container {\n        height: 51px;\n        position: relative;\n        margin: auto;\n    }\n\n    .bubble-button {\n        align-items: center;\n        border-radius: 25px;\n        color: var(--primary-text-color);\n        cursor: pointer;\n        display: inline-flex;\n        height: 50px;\n        left: 0;\n        padding: 0 16px;\n        position: absolute;\n        white-space: nowrap;\n        z-index: 1;\n        transition: transform 1s;\n        box-sizing: border-box;\n    }\n    .bubble-button.highlight {\n        animation: pulse 1.4s infinite alternate;\n    }\n    .bubble-background-color {\n        border: 1px solid var(--primary-text-color);\n        border-radius: 24px;\n        box-sizing: border-box;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        transition: background-color 1s;\n        width: 100%;\n        z-index: -1;\n    }\n    .bubble-background {\n        opacity: 0.8;\n        border-radius: 24px;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box !important;\n        position: absolute;\n        left: 0;\n        z-index: -2;\n        background-color: var(--background-color,var(--primary-background-color));\n    }\n    .bubble-icon {\n        height: 24px;\n        width: 24px;\n    }\n    .bubble-icon + .bubble-name {\n        margin-left: 8px;\n    }\n\n\n    .horizontal-buttons-stack-card.editor {\n        position: relative;\n        width: 100%;\n        left: 0;\n        bottom: 0;\n    }\n    .horizontal-buttons-stack-card.editor::before {\n        background: none;\n    }\n\n",e.elements.customStyle=(0,n.az)("style"),e.card.classList.add("horizontal-buttons-stack-card"),e.card.style.marginLeft=e.config.margin??"",e.config.hide_gradient||e.card.classList.add("has-gradient"),e.card.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.elements.cardContainer.appendChild(e.elements.style),e.elements.cardContainer.appendChild(e.elements.customStyle),e.content.appendChild(e.elements.cardContainer),e.content.addEventListener("scroll",(()=>{e.content.scrollLeft>0?e.content.classList.add("is-scrolled"):e.content.classList.remove("is-scrolled"),e.content.scrollWidth-12<e.content.offsetWidth+e.content.scrollLeft?e.content.classList.add("is-maxed-scroll"):e.content.classList.remove("is-maxed-scroll")})),(e.config.rise_animation??1)&&(e.content.style.animation="from-bottom .6s forwards",setTimeout((()=>{e.content.style.animation="none"}),1500));let o=e.card.parentNode.host;o&&!e.editor&&"hui-card"!==o.parentElement.tagName.toLowerCase()?o.style.padding="0 0 80px":o.parentElement&&!e.editor&&"hui-card"===o.parentElement.tagName.toLowerCase()&&(o.parentElement.style.padding="0 0 80px"),e.cardType="horizontal-buttons-stack"}(e),function(e){const t=(0,n.y0)(e);let o="";try{o=e.config.styles?Function("hass","entity","state","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.card):""}catch(e){throw new Error(`Error in generating horizontal buttons stack custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=o)}(e),function(e){if(!e.config.auto_order)return;const t=e._hass.states;e.elements.buttons.sort(((e,n)=>{if(!t[e.pirSensor])return 1;if(!t[e.pirSensor])return-1;const o=t[e.pirSensor]?.last_updated,i=t[n.pirSensor]?.last_updated;return"on"===t[e.pirSensor]?.state&&"on"===t[n.pirSensor]?.state?o>i?-1:o===i?0:1:"on"===t[e.pirSensor]?.state?-1:"on"===t[n.pirSensor]?.state?1:o>i?-1:o===i?0:1}))}(e),function(e){e.elements.buttons.forEach((t=>{const n=t.index,o=e.config[`${n}_name`]??"",i=e.config[`${n}_icon`]??"",a=e.config[`${n}_pir_sensor`],s=e.config[`${n}_link`],l=e.config[`${n}_entity`];t.pirSensor=a,t.lightEntity=l,t.link=s,o?(t.name.innerText=o,t.name.style.display=""):t.name.style.display="none",i?(t.icon.icon=i,t.icon.style.display=""):t.icon.style.display="none",void 0===s&&(t.remove(),e.elements.buttons=e.elements.buttons.filter((e=>e!==t)),e.elements.buttons.forEach(((e,t)=>{e.index=t+1})))}));let t=e.elements.buttons.length+1;for(;void 0!==e.config[`${t}_link`];){if(!e.elements.buttons.find((e=>e.index===t))){const n=q(e,t);e.elements.buttons.push(n)}t++}}(e),function(e){const t=e.shadowRoot.host.closest("hui-card-preview, hui-card-options");e.editor||null!==t?(e.elements.cardContainer.classList.add("editor"),e.card.classList.add("editor")):(e.elements.cardContainer.classList.remove("editor"),e.card.classList.remove("editor"))}(e),function(e){let t=0;for(let n=0;n<e.elements.buttons.length;++n){let o=localStorage.getItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`);e.elements.buttons[n].style.width="";const i=e.elements.buttons[n].offsetWidth;e.elements.buttons[n].style.width=`${i}px`,i>0&&(o=i,localStorage.setItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`,`${i}`)),null!==o&&(e.elements.buttons[n].style.transform=`translateX(${t}px)`,e.elements.buttons[n].style.width="",t+=+o+12)}e.elements.cardContainer.style.width=`${t}px`}(e),function(e){e.elements.buttons.forEach((n=>{const o=e._hass.states[n.lightEntity],i=o?.attributes.rgb_color,a=o?.state;if(i){const e=(0,t.wW)(i)?"rgba(255, 220, 200, 0.5)":`rgba(${i}, 0.5)`;n.backgroundColor.style.backgroundColor=e,n.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"}else"on"==a?(n.backgroundColor.style.backgroundColor="rgba(255, 255, 255, 0.5)",n.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"):(n.backgroundColor.style.backgroundColor="rgba(0, 0, 0, 0)",n.backgroundColor.style.borderColor="var(--primary-text-color)")}))}(e),function(e){e.content.scrollWidth>=e.content.offsetWidth?e.content.classList.add("is-scrollable"):e.content.classList.remove("is-scrollable")}(e)}(this);break;case"media-player":W(this);break;case"select":!function(e){e.cardType,"select"!==e.cardType&&(function(e){e.elements||(e.elements={});let t=e.content;e.elements.selectCardContainer=(0,n.az)("div","bubble-select-card-container"),e.elements.selectCard=(0,n.az)("div","bubble-select-card"),e.elements.selectBackground=(0,n.az)("div","bubble-select-background"),e.elements.nameContainer=(0,n.az)("div","bubble-name-container"),e.elements.iconContainer=(0,n.az)("div","bubble-icon-container"),e.elements.name=(0,n.az)("div","bubble-name"),e.elements.state=(0,n.az)("div","bubble-state"),e.elements.feedback=(0,n.az)("div","bubble-feedback-element"),e.elements.icon=(0,n.az)("ha-icon","bubble-icon"),e.elements.image=(0,n.az)("div","bubble-entity-picture"),e.elements.style=(0,n.az)("style"),e.elements.customStyle=(0,n.az)("style"),e.elements.feedback.style.display="none",e.elements.style.innerText=C,l(e.elements.selectBackground,e.elements.feedback),s(e.elements.iconContainer,e.config,e.config.entity),e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.selectCard.appendChild(e.elements.selectBackground),e.elements.selectCard.appendChild(e.elements.iconContainer),e.elements.selectCard.appendChild(e.elements.nameContainer),e.elements.selectCardContainer.appendChild(e.elements.selectCard),e.elements.selectBackground.appendChild(e.elements.feedback),t.innerHTML="",t.appendChild(e.elements.selectCardContainer),t.appendChild(e.elements.style),t.appendChild(e.elements.customStyle),e.cardType="select"}(e),$(e),L(e)),S(e),function(e){"unavailable"===(0,n.y0)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable")}(e),function(e){const t=(0,n.q7)(e),o=(0,n.gJ)(e);""!==o?(e.elements.image.style.backgroundImage="url("+o+")",e.elements.icon.style.display="none",e.elements.image.style.display=""):""!==t?(e.elements.icon.icon=t,e.elements.icon.style.color="inherit",e.elements.icon.style.display="",e.elements.image.style.display="none"):(e.elements.icon.style.display="none",e.elements.image.style.display="none")}(e),function(e){const t=(0,n.oY)(e);t!==e.elements.previousName&&((0,n.GP)(e,e.elements.name,t),e.elements.previousName=t)}(e),T(e),z(e,e.content,e.elements.dropdownContainer,!0),function(e){B(e),(0,n.jx)(e);const t=e.config.card_layout;!function n(){const o=e.elements.dropdownSelect.shadowRoot?.querySelector("mwc-menu"),i=o?.shadowRoot,a=i?.querySelector("mwc-menu-surface"),s=a?.shadowRoot,l=s?.querySelector(".mdc-menu-surface");l?l.style.marginTop="large"===t||"large-2-rows"===t?"14px":"":setTimeout(n,0)}();const o=(0,n.y0)(e);let i="";try{i=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,o,e.elements.icon,e.subButtonIcon,n.X,e.card):""}catch(e){throw new Error(`Error in generating select custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=i,e.elements.dropdownCustomStyleElement.innerText=i)}(e)}(this)}var e}setConfig(e){if(e.error)throw new Error(e.error);if("pop-up"===e.card_type){if(!e.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.")}else if("horizontal-buttons-stack"===e.card_type){var t={};for(var n in e)if(n.match(/^\d+_icon$/)){var o=n.replace("_icon","_link");if(void 0===e[o])throw new Error("You need to define "+o);if(t[e[o]])throw new Error("You can't use "+e[o]+" twice");t[e[o]]=!0}}else if(("button"===e.card_type||"cover"===e.card_type)&&!e.entity&&"name"!==e.button_type)throw new Error("You need to define an entity");if(window.entityError)throw new Error("You need to define a valid entity");if("button"===e.card_type){const t={...e},n=t.button_type||"switch";t.tap_action=t.tap_action??{action:"more-info"},t.double_tap_action=t.double_tap_action??{action:"state"===n?"more-info":"toggle"},t.hold_action=t.hold_action??{action:"state"===n?"more-info":"toggle"},this.config=t}else this.config=e;this._hass&&this.updateBubbleCard()}getCardSize(){switch(this.config.card_type){case"pop-up":return-1e5;case"button":case"separator":case"empty-column":case"media-player":case"select":return 1;case"cover":return 2;case"horizontal-buttons-stack":return 0}}static getConfigElement(){return function(){if(!F)try{F=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),Y=F.prototype?.html,G=F.prototype?.css}catch(e){return void console.error(e.message)}customElements.get("bubble-card-editor")||customElements.define("bubble-card-editor",class extends F{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config.card_type||""}get _button_type(){return this._config.button_type||("pop-up"===this._config.card_type?"":"switch")}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _text(){return this._config.text||""}get _hash(){return this._config.hash||"#pop-up-name"}get _trigger_entity(){return this._config.trigger_entity||""}get _trigger_state(){return this._config.trigger_state||""}get _trigger_close(){return this._config.trigger_close||!1}get _margin(){return this._config.margin||"7px"}get _margin_top_mobile(){return this._config.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config.margin_top_desktop||"0px"}get _width_desktop(){return this._config.width_desktop||"540px"}get _bg_color(){return this._config.bg_color||""}get _bg_opacity(){return void 0!==this._config.bg_opacity?this._config.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config.bg_blur?this._config.bg_blur:"14"}get _shadow_opacity(){return void 0!==this._config.shadow_opacity?this._config.shadow_opacity:"0"}get _rise_animation(){return void 0===this._config.rise_animation||this._config.rise_animation}get _auto_close(){return this._config.auto_close||""}get _close_on_click(){return this._config.close_on_click||!1}get _close_by_clicking_outside(){return this._config.close_by_clicking_outside??!0}get _background_update(){return this._config.background_update||!1}get _icon_open(){return this._config.icon_open||""}get _icon_close(){return this._config.icon_close||""}get _icon_down(){return this._config.icon_down||""}get _icon_up(){return this._config.icon_up||""}get _open_service(){return this._config.open_service||"cover.open_cover"}get _close_service(){return this._config.close_service||"cover.close_cover"}get _stop_service(){return this._config.stop_service||"cover.stop_cover"}get _auto_order(){return this._config.auto_order||!1}get _highlight_current_view(){return this._config.highlight_current_view||!1}get _show_state(){const e="state"===this._config.card_type;return this._config.show_state||e}get _show_attribute(){const e="state"===this._config.card_type;return this._config.show_attribute||e}get _show_last_changed(){const e="state"===this._config.card_type;return this._config.show_last_changed||this._config.show_last_updated||e}get _attribute(){return this._config.attribute||!1}get _hide_backdrop(){return this._config.hide_backdrop||!1}get _hide_gradient(){return this._config.hide_gradient||!1}get _hide_play_pause_button(){return this._config.hide?.play_pause_button||!1}get _hide_next_button(){return this._config.hide?.next_button||!1}get _hide_previous_button(){return this._config.hide?.previous_button||!1}get _hide_volume_button(){return this._config.hide?.volume_button||!1}get _hide_power_button(){return this._config.hide?.power_button||!1}get _sub_button(){return this._config.sub_button||""}get _button_action(){return this._config.button_action||""}get _open_action(){return this._config.open_action||""}get _close_action(){return this._config.close_action||""}get _show_header(){return this._config.show_header??!0}get _tap_action(){return{action:this._config.tap_action?.action||"more-info",navigation_path:this._config.tap_action?.navigation_path||"",url_path:this._config.tap_action?.url_path||"",service:this._config.tap_action?.service||"",target_entity:this._config.tap_action?.target?.entity_id||"",data:this._config.tap_action?.data||""}}get _double_tap_action(){return{action:this._config.double_tap_action?.action||"toggle",navigation_path:this._config.double_tap_action?.navigation_path||"",url_path:this._config.double_tap_action?.url_path||"",service:this._config.double_tap_action?.service||"",target_entity:this._config.double_tap_action?.target?.entity_id||"",data:this._config.double_tap_action?.data||""}}get _hold_action(){return{action:this._config.hold_action?.action||"toggle",navigation_path:this._config.hold_action?.navigation_path||"",url_path:this._config.hold_action?.url_path||"",service:this._config.hold_action?.service||"",target_entity:this._config.hold_action?.target?.entity_id||"",data:this._config.hold_action?.data||""}}render(){if(!this.hass)return Y``;const t=document.querySelector("body > home-assistant").shadowRoot.querySelector("hui-dialog-edit-card").shadowRoot.querySelector("ha-dialog > div.content > div.element-preview");if("sticky"!==t.style.position&&(t.style.position="sticky",t.style.top="0"),!this.listsUpdated){const l=e=>({label:e,value:e});this.allEntitiesList=Object.keys(this.hass.states).map(l),this.lightList=Object.keys(this.hass.states).filter((e=>"light"===e.substr(0,e.indexOf(".")))).map(l),this.sensorList=Object.keys(this.hass.states).filter((e=>"sensor"===e.substr(0,e.indexOf(".")))).map(l),this.binarySensorList=Object.keys(this.hass.states).filter((e=>"binary_sensor"===e.substr(0,e.indexOf(".")))).map(l),this.coverList=Object.keys(this.hass.states).filter((e=>"cover"===e.substr(0,e.indexOf(".")))).map(l),this.mediaPlayerList=Object.keys(this.hass.states).filter((e=>"media_player"===e.substr(0,e.indexOf(".")))).map(l),this.inputSelectList=Object.keys(this.hass.states).filter((e=>{const t=e.substr(0,e.indexOf("."));return"input_select"===t||"select"===t})).map(l),this.attributeList=Object.keys(this.hass.states[this._entity]?.attributes||{}).map((e=>{let t=this.hass.states[this._entity];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})),this.cardTypeList=[{label:"Button (Switch, slider, ...)",value:"button"},{label:"Cover",value:"cover"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Media player",value:"media-player"},{label:"Pop-up",value:"pop-up"},{label:"Select",value:"select"},{label:"Separator",value:"separator"}],this.buttonTypeList=[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}],this.tapActionTypeList=[{label:"More info",value:"more-info"},{label:"Toggle",value:"toggle"},{label:"Navigate",value:"navigate"},{label:"URL",value:"url"},{label:"Call service",value:"call-service"},{label:"Assist",value:"assist"},{label:"No action",value:"none"}],this.listsUpdated=!0}const n=this.allEntitiesList,o=(this.lightList,this.sensorList,this.coverList),i=this.cardTypeList,a=this.buttonTypeList,s="name"===this._config.button_type;if("pop-up"===this._config.card_type)return Y`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",i)}
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
                                <div style="${this._show_header?"":"display: none;"}">
                                    <hr />
                                    ${this.makeDropdown("Button type","button_type",a)}
                                    ${this.makeDropdown("Optional - Entity","entity",n,s)}               
                                    <ha-textfield
                                        label="Optional - Name"
                                        .value="${this._name}"
                                        .configValue="${"name"}"
                                        @input="${this._valueChanged}"
                                    ></ha-textfield>
                                    ${this.makeDropdown("Optional - Icon","icon")}
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
                                    <ha-expansion-panel outlined style="display: ${"slider"===this._config.button_type?"none":""}">
                                        <h4 slot="header">
                                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                                          Tap action on button
                                        </h4>
                                        <div class="content">
                                            ${this.makeTapActionPanel("Tap action",this._button_action,"name"!==this._config.button_type?"state"===this._config.button_type?"more-info":"toggle":"none","button_action")}
                                            ${this.makeTapActionPanel("Double tap action",this._button_action,"name"!==this._config.button_type?"state"===this._config.button_type?"more-info":"toggle":"none","button_action")}
                                            ${this.makeTapActionPanel("Hold action",this._button_action,"name"!==this._config.button_type?"more-info":"none","button_action")}
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
                                ${this.makeDropdown("Optional - Entity to open the pop-up based on its state","trigger_entity",n)}
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
                                ${this.makeTapActionPanel("Open action",this._config,"none")}
                                ${this.makeTapActionPanel("Close action",this._config,"none")}
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
                `;if("button"===this._config.card_type)return Y`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",i)}
                        ${this.makeDropdown("Button type","button_type",a)}
                        ${this.makeDropdown("slider"!==this._button_type?"Entity (toggle)":"Entity (light, media_player, cover or input_number)","entity",n,s)}
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
                                ${this.makeDropdown("Optional - Icon","icon")}
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
                        <ha-expansion-panel outlined style="display: ${"slider"===this._config.button_type?"none":""}">
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Tap action on button
                            </h4>
                            <div class="content">
                                ${this.makeTapActionPanel("Tap action",this._button_action,"name"!==this._config.button_type?"state"===this._config.button_type?"more-info":"toggle":"none","button_action")}
                                ${this.makeTapActionPanel("Double tap action",this._button_action,"name"!==this._config.button_type?"state"===this._config.button_type?"more-info":"toggle":"none","button_action")}
                                ${this.makeTapActionPanel("Hold action",this._button_action,"name"!==this._config.button_type?"more-info":"none","button_action")}
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
                        <ha-alert alert-type="info">This card allows you to control your entities. ${"slider"===this._config.button_type?"Supported entities: Light (brightness), media player (volume), cover (position), fan (percentage), climate (temperature), input number and number (value). To access color / control of an entity, simply tap on the icon.":""}</ha-alert>
                        ${this.makeVersion()}
                    </div>
                `;if("separator"===this._config.card_type)return Y`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",i)}
                        <ha-textfield
                            label="Name"
                            .value="${this._name}"
                            .configValue="${"name"}"
                            @input="${this._valueChanged}"
                        ></ha-textfield>
                        ${this.makeDropdown("Icon","icon")}
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
                `;if("horizontal-buttons-stack"===this._config.card_type){if(!this.buttonAdded)for(this.buttonAdded=!0,this.buttonIndex=0;this._config[this.buttonIndex+1+"_link"];)this.buttonIndex++;function r(){this.buttonIndex++,this.requestUpdate()}return Y`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",i)}
                        <div id="buttons-container">
                            ${this.makeButton()}
                        </div>
                        <button class="icon-button" @click="${r}">
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
                `}return"cover"===this._config.card_type?Y`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",i)}
                        ${this.makeDropdown("Entity","entity",o)}
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:cog"></ha-icon>
                              Cover settings
                            </h4>
                            <div class="content"> 
                                <ha-textfield
                                    label="Optional - Name"
                                    .value="${this._name||""}"
                                    .configValue="${"name"}"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                ${this.makeDropdown("Optional - Open icon","icon_open")}
                                ${this.makeDropdown("Optional - Closed icon","icon_close")}
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
                                        ${this.makeDropdown("Optional - Arrow down icon","icon_down")}
                                        ${this.makeDropdown("Optional - Arrow up icon","icon_up")}
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
                `:"media-player"===this._config.card_type?Y`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",i)}
                        ${this.makeDropdown("Entity","entity",this.mediaPlayerList)}
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:cog"></ha-icon>
                              Media player settings
                            </h4>
                            <div class="content"> 
                                <ha-textfield
                                    label="Optional - Name"
                                    .value="${this._name||""}"
                                    .configValue="${"name"}"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                ${this.makeDropdown("Optional - Icon","icon")}
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
                `:"empty-column"===this._config.card_type?Y`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",i)}
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
                `:"select"===this._config.card_type?Y`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",i)}
                        ${this.makeDropdown("Entity (input_select or select)","entity",this.inputSelectList)}
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
                                ${this.makeDropdown("Optional - Icon","icon")}
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
                `:this._config.card_type?void 0:Y`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",i)}
                        <ha-alert alert-type="info">You need to add a card type first. Please not that in some cases, a page refresh might be needed after exiting the editor.</ha-alert>
                        <img style="width: 100%; height: auto; border-radius: 24px;" src="https://raw.githubusercontent.com/Clooos/Bubble-Card/main/.github/bubble-card.gif">
                        <p>The <b>Bubble Card ${e}</b> changelog is available <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${e}"><b>here</b></a>.
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
                `}makeLayoutOptions(){return Y`
                <ha-combo-box
                    label="${"pop-up"===this._config.card_type?"Header card layout":"Card layout"}"
                    .value="${this._config.card_layout||"normal"}"
                    .configValue="${"card_layout"}"
                    .items="${[{label:"Normal",value:"normal"},{label:"Large (Optimized for sections)",value:"large"},{label:"Large with 2 sub-buttons rows (Optimized for sections)",value:"large-2-rows"}]}"
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
                            .items="${[{label:"Auto",value:null},{label:"1/4",value:1},{label:"2/4",value:2},{label:"3/4",value:3},{label:"4/4",value:4}]}"
                            @value-changed="${this._valueChanged}"
                        ></ha-combo-box>
                        <ha-combo-box
                            label="Rows"
                            .value="${this._config.rows}"
                            .configValue="${"rows"}"
                            .items="${[{label:"Auto",value:null},{label:"1/4",value:1},{label:"2/4",value:2},{label:"3/4",value:3},{label:"4/4",value:4}]}"
                            @value-changed="${this._valueChanged}"
                        ></ha-combo-box>
                    </div>
                </ha-expansion-panel>
            `}makeShowState(e=this._config,t="",n=!1,o){const i=e?.entity??this._config.entity??"",a="name"===this._config.button_type,s=i?.startsWith("input_select")||i?.startsWith("select"),l=Object.keys(this.hass.states[i]?.attributes||{}).map((e=>{let t=this.hass.states[i];return{label:this.hass.formatEntityAttributeName(t,e),value:e}}));return Y`
                ${"sub_button"!==n?Y`
                    <ha-formfield .label="Optional - Text scrolling effect">
                        <ha-switch
                            aria-label="Optional - Text scrolling effect"
                            .checked=${e?.scrolling_effect??!0}
                            .configValue="${t+"scrolling_effect"}"
                            @change="${n?e=>this._arrayValueChange(o,{scrolling_effect:e.target.checked},n):this._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Text scrolling effect</label> 
                        </div>
                    </ha-formfield>
                `:""}
                ${"sub_button"===n?Y`
                    <ha-formfield .label="Optional - Show background">
                        <ha-switch
                            aria-label="Optional - Show background when entity is on"
                            .checked=${e?.show_background??!0}
                            @change="${e=>this._arrayValueChange(o,{show_background:e.target.checked},n)}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Show background when entity is on</label> 
                        </div>
                    </ha-formfield>
                `:""}
                <ha-formfield .label="Optional - Show icon">
                    <ha-switch
                        aria-label="Optional - Show icon"
                        .checked=${e?.show_icon??!0}
                        .configValue="${t+"show_icon"}"
                        @change="${n?e=>this._arrayValueChange(o,{show_icon:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show icon</label> 
                    </div>
                </ha-formfield>
                ${"sub_button"!==n?Y`
                    <ha-formfield .label="Optional - Prioritize icon over entity picture">
                        <ha-switch
                            aria-label="Optional - Prioritize icon over entity picture"
                            .checked=${e?.force_icon??!1}
                            .configValue="${t+"force_icon"}"
                            .disabled="${a}"
                            @change="${n?e=>this._arrayValueChange(o,{force_icon:e.target.checked},n):this._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Prioritize icon over entity picture</label> 
                        </div>
                    </ha-formfield>
                `:""}
                <ha-formfield .label="Optional - Show name">
                    <ha-switch
                        aria-label="Optional - Show name"
                        .checked=${!!(e?.show_name??"sub_button"!==n)}
                        .configValue="${t+"show_name"}"
                        @change="${n?e=>this._arrayValueChange(o,{show_name:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show name</label> 
                    </div>
                </ha-formfield>
                <ha-formfield .label="Optional - Show entity state">
                    <ha-switch
                        aria-label="Optional - Show entity state"
                        .checked="${e?.show_state??"state"===e.button_type}"
                        .configValue="${t+"show_state"}"
                        .disabled="${a&&"sub_button"!==n}"
                        @change="${n?e=>this._arrayValueChange(o,{show_state:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show entity state</label> 
                    </div>
                </ha-formfield>
                <ha-formfield .label="Optional - Show last changed">
                    <ha-switch
                        aria-label="Optional - Show last changed"
                        .checked=${e?.show_last_changed}
                        .configValue="${t+"show_last_changed"}"
                        .disabled="${a&&"sub_button"!==n}"
                        @change="${n?e=>this._arrayValueChange(o,{show_last_changed:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show last changed</label> 
                    </div>
                </ha-formfield>
                <ha-formfield .label="Optional - Show attribute">
                    <ha-switch
                        aria-label="Optional - Show attribute"
                        .checked=${e?.show_attribute}
                        .configValue="${t+"show_attribute"}"
                        .disabled="${a&&"sub_button"!==n}"
                        @change="${n?e=>this._arrayValueChange(o,{show_attribute:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show attribute</label> 
                    </div>
                </ha-formfield>
                ${e?.show_attribute?Y`
                    <div class="ha-combo-box">
                        <ha-combo-box
                            label="Optional - Attribute to show"
                            .value="${e?.attribute}"
                            .configValue="${t+"attribute"}"
                            .items="${l}"
                            .disabled="${a}"
                            @value-changed="${n?e=>this._arrayValueChange(o,{attribute:e.detail.value},n):this._valueChanged}"
                        ></ha-combo-box>
                    </div>
                `:""}
                ${"sub_button"===n&&s?Y`
                    <ha-formfield .label="Optional - Show arrow (Select entities only)">
                        <ha-switch
                            aria-label="Optional - Show arrow (Select entities only)"
                            .checked=${e?.show_arrow??!0}
                            .configValue="${t+"show_arrow"}"
                            @change="${n?e=>this._arrayValueChange(o,{show_arrow:e.target.checked},n):this._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Show arrow (Select entities only)</label> 
                        </div>
                    </ha-formfield>
                `:""}
            `}makeDropdown(e,t,n,o){return e.includes("icon")||e.includes("Icon")?Y`
                    <div class="ha-icon-picker">
                        <ha-icon-picker
                            label="${e}"
                            .value="${this["_"+t]}"
                            .configValue="${t}"
                            item-value-path="icon"
                            item-label-path="icon"
                            @value-changed="${this._valueChanged}"
                        ></ha-icon-picker>
                    </div>
                `:Y`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="${e}"
                        .value="${this["_"+t]}"
                        .configValue="${t}"
                        .items="${n}"
                        .disabled="${o}"
                        @value-changed="${this._valueChanged}"
                    ></ha-combo-box>
                </div>
              `}makeTapActionPanel(e,t=this._config,n,o,i=this._config){this.hass;const a="Tap action"===e?"mdi:gesture-tap":"Double tap action"===e?"mdi:gesture-double-tap":"Hold action"===e?"mdi:gesture-tap-hold":"mdi:gesture-tap",s="Tap action"===e?t.tap_action:"Double tap action"===e?t.double_tap_action:"Hold action"===e?t.hold_action:"Open action"===e?t.open_action:t.close_action,l="Tap action"===e?"tap_action":"Double tap action"===e?"double_tap_action":"Hold action"===e?"hold_action":"Open action"===e?"open_action":"close_action",r=t===this._config;return n||(n=r&&"Tap action"===e?"name"!==this._config.button_type?"more-info":"none":r?"name"!==this._config.button_type?"toggle":"none":""),Y`
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="${a}"></ha-icon>
                        ${e}
                    </h4>
                    <div class="content"> 
                        <div class="ha-combo-box">
                            <ha-combo-box
                                label="${e}"
                                .value="${s?.action??n}"
                                .items="${this.tapActionTypeList}"
                                @value-changed="${e=>this._tapActionValueChange(i,{[l]:{action:e.detail.value}},o)}"
                            ></ha-combo-box>
                        </div>
                        ${"navigate"===s?.action?Y`
                            <div class="ha-textfield">
                                <ha-textfield
                                    label="Navigation path"
                                    .value="${s?.navigation_path??""}"
                                    @input="${e=>this._tapActionValueChange(i,{[l]:{navigation_path:e.target.value}},o)}"
                                ></ha-textfield>
                            </div>
                        `:""}
                        ${"url"===s?.action?Y`
                            <div class="ha-textfield">
                                <ha-textfield
                                    label="URL path"
                                    .value="${s?.url_path??""}"
                                    @input="${e=>this._tapActionValueChange(i,{[l]:{url_path:e.target.value}},o)}"
                                ></ha-textfield>
                            </div>
                        `:""}
                        ${"call-service"===s?.action?Y`
                            <div class="ha-textfield">
                                <ha-textfield
                                    label="Service"
                                    .value="${s?.service??""}"
                                    @input="${e=>this._tapActionValueChange(i,{[l]:{service:e.target.value}},o)}"
                                ></ha-textfield>
                            </div>
                            <div class="ha-combo-box">
                                <ha-combo-box
                                    label="Entity"
                                    .value="${s?.target?.entity_id}"
                                    .items="${this.allEntitiesList}"
                                    @value-changed="${e=>{this._tapActionValueChange(i,{[l]:{target:{entity_id:e.detail.value}}},o)}}"
                                ></ha-combo-box>
                            </div>
                        `:""}
                        ${"call-service"===s?.action&&s?.service?Y`
                            <ha-alert alert-type="info">For now, you still need to switch to the YAML editor if you want to add <code>data:</code> to your service.</ha-alert>
                        `:""}
                    </div>
                </ha-expansion-panel>
            `}makeSubButtonPanel(){const e=this._config?.sub_button?.map(((e,t)=>{if(!e)return;const n="sub_button."+t+".",o=e.entity??this._config.entity,i=o?.startsWith("input_select")||o?.startsWith("select");return Y`
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:border-radius"></ha-icon>
                        ${this._config.sub_button[t]?"Button "+(t+1)+(e.name?" - "+e.name:""):"New button"}
                        <button class="icon-button header" @click="${n=>{n.stopPropagation();let o=[...this._config.sub_button];o.splice(t,1),this._config.sub_button=o,this._valueChanged({target:{configValue:"sub_button."+(t-1),value:e}}),this.requestUpdate()}}">
                          <ha-icon icon="mdi:delete"></ha-icon>
                        </button>
                        ${t>0?Y`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t>0){let e=[...this._config.sub_button];[e[t],e[t-1]]=[e[t-1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
                          <ha-icon icon="mdi:arrow-left"></ha-icon>
                        </button>`:""}
                        ${t<this._config.sub_button.length-1?Y`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t<this._config.sub_button.length-1){let e=[...this._config.sub_button];[e[t],e[t+1]]=[e[t+1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
                          <ha-icon icon="mdi:arrow-right"></ha-icon>
                        </button>`:""}
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
                                        .value="${o}"
                                        .items="${this.allEntitiesList}"
                                        @value-changed="${e=>this._arrayValueChange(t,{entity:e.detail.value},"sub_button")}"
                                    ></ha-combo-box>
                                </div>
                                <div class="ha-textfield">
                                    <ha-textfield
                                        label="Optional - Name"
                                        .value="${e.name??""}"
                                        @input="${e=>this._arrayValueChange(t,{name:e.target.value},"sub_button")}"
                                    ></ha-textfield>
                                </div>
                                <div class="ha-icon-picker">
                                    <ha-icon-picker
                                        label="Optional - Icon"
                                        .value="${e.icon}"
                                        item-label-path="label"
                                        item-value-path="value"
                                        @value-changed="${e=>this._arrayValueChange(t,{icon:e.detail.value},"sub_button")}"
                                    ></ha-icon-picker>
                                </div>
                                ${this.makeShowState(e,n,"sub_button",t)}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined style="${i?"opacity: 0.5; pointer-events: none;":""}">
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Tap action on button
                            </h4>
                            <div class="content">
                                ${this.makeTapActionPanel("Tap action",e,"more-info","sub_button",t)}
                                ${this.makeTapActionPanel("Double tap action",e,"none","sub_button",t)}
                                ${this.makeTapActionPanel("Hold action",e,"none","sub_button",t)}
                            </div>
                        </ha-expansion-panel>
                    </div>
                </ha-expansion-panel>
            `}));return Y`
            <ha-expansion-panel outlined>
              <h4 slot="header">
                <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
                Sub-buttons editor
              </h4>
              <div class="content">
                ${e}
                <button class="icon-button" @click="${()=>{this._config.sub_button||(this._config.sub_button=[]);let e={entity:this._config.entity};this._config.sub_button=[...this._config.sub_button],this._config.sub_button.push(e),(0,n.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()}}">
                  <ha-icon icon="mdi:plus"></ha-icon>
                  New sub-button
                </button>
                <ha-alert alert-type="info">Add new customized buttons fixed to the right. These buttons also support <code>input_select</code> and <code>select</code> entities to display a list.</ha-alert>
              </div>
            </ha-expansion-panel>
          `}makeButton(){let e=[];for(let t=1;t<=this.buttonIndex;t++)e.push(Y`
                    <div class="${t}_button">
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                                <ha-icon icon="mdi:border-radius"></ha-icon>
                                Button ${t} ${this._config[t+"_name"]?"- "+this._config[t+"_name"]:""}
                                <button class="icon-button header" @click="${()=>this.removeButton(t)}">
                                  <ha-icon icon="mdi:delete"></ha-icon>
                                </button>
                            </h4>
                            <div class="content">
                                <ha-textfield
                                    label="Link / Hash to pop-up (e.g. #kitchen)"
                                    .value="${this._config[t+"_link"]||""}"
                                    .configValue="${t}_link"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                <ha-textfield
                                    label="Optional - Name"
                                    .value="${this._config[t+"_name"]||""}"
                                    .configValue="${t}_name"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                                <ha-icon-picker
                                    label="Optional - Icon"
                                    .value="${this._config[t+"_icon"]||""}"
                                    .configValue="${t}_icon"
                                    item-label-path="label"
                                    item-value-path="value"
                                    @value-changed="${this._valueChanged}"
                                ></ha-icon-picker>
                                <ha-combo-box
                                    label="Optional - Light / Light group (For background color)"
                                    .value="${this._config[t+"_entity"]||""}"
                                    .configValue="${t}_entity"
                                    .items="${this.allEntitiesList}"
                                    @value-changed="${this._valueChanged}"
                                ></ha-combo-box>
                                <ha-combo-box
                                    label="Optional - Presence / Occupancy sensor (For button auto order)"
                                    .value="${this._config[t+"_pir_sensor"]||""}"
                                    .configValue="${t}_pir_sensor"
                                    .disabled=${!this._config.auto_order}
                                    .items="${this.allEntitiesList}"
                                    @value-changed="${this._valueChanged}"
                                ></ha-combo-box>
                                <ha-alert alert-type="info">In fact you can also get the auto order with any entity type, for example you can add light groups to these fields and the order will change based on the last changed states.</ha-alert>
                            </div>
                        </ha-expansion-panel>
                    </div>
                `);return e}makeVersion(){return Y`
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
                        ${e}
                    </span>
                </h4>
            `}removeButton(e){delete this._config[e+"_name"],delete this._config[e+"_icon"],delete this._config[e+"_link"],delete this._config[e+"_entity"],delete this._config[e+"_pir_sensor"];for(let t=e;t<this.buttonIndex;t++)this._config[t+"_name"]=this._config[t+1+"_name"],this._config[t+"_icon"]=this._config[t+1+"_icon"],this._config[t+"_link"]=this._config[t+1+"_link"],this._config[t+"_entity"]=this._config[t+1+"_entity"],this._config[t+"_pir_sensor"]=this._config[t+1+"_pir_sensor"];delete this._config[this.buttonIndex+"_name"],delete this._config[this.buttonIndex+"_icon"],delete this._config[this.buttonIndex+"_link"],delete this._config[this.buttonIndex+"_entity"],delete this._config[this.buttonIndex+"_pir_sensor"],this.buttonIndex--,(0,n.BX)(this,"config-changed",{config:this._config})}makeStyleEditor(){return Y`
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
            `}_valueChanged(e){const t=e.target,o=e.detail;let i;if("HA-SWITCH"===t.tagName?i=t.checked:void 0!==t.value&&(i="string"==typeof t.value?t.value.replace(",","."):t.value),"string"==typeof i&&(i.endsWith(".")||"-"===i))return;const{configValue:a,checked:s}=t;if(a){const n=a.split(".");let s=this._config;for(let e=0;e<n.length-1;e++)s[n[e]]=s[n[e]]||{},s=s[n[e]];"input"===e.type?s[n[n.length-1]]=i:o&&s[n[n.length-1]]!==o.value?s[n[n.length-1]]=o.value:"HA-SWITCH"===t.tagName&&(s[n[n.length-1]]=i)}(0,n.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()}_arrayValueChange(e,t,o){this._config[o]=this._config[o]||[];let i=[...this._config[o]];i[e]=i[e]||{},i[e]={...i[e],...t},this._config[o]=i,(0,n.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()}_tapActionValueChange(e,t,o){if(void 0===o)for(let e in t)this._config[e]={...this._config[e],...t[e]};else{this._config[o]=this._config[o]||(o?{}:[]);let n=Array.isArray(this._config[o])?[...this._config[o]]:{...this._config[o]};if(Array.isArray(n)){n[e]=n[e]||{};let o={...n[e]};for(let e in t)o[e]=e in o?{...o[e],...t[e]}:t[e];n[e]=o}else for(let e in t)n.hasOwnProperty(e)?n[e]={...n[e],...t[e]}:n[e]=t[e];this._config[o]=n}(0,n.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return G`
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
            `}})}(),document.createElement("bubble-card-editor")}getLayoutOptions(){let e=1;"pop-up"===this.config.card_type?e=0:"horizontal-buttons-stack"===this.config.card_type?e=1:["cover"].includes(this.config.card_type)&&(e=2);let t=4;return"pop-up"===this.config.card_type?t=0:"horizontal-buttons-stack"===this.config.card_type&&(t=4),{grid_columns:this.config.columns??t,grid_rows:this.config.rows??e}}}customElements.define("bubble-card",J),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch.",documentationURL:"https://github.com/Clooos/Bubble-Card/"}),console.info(`%c Bubble Card %c ${e} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})()})();
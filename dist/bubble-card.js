/*! For license information please see bubble-card.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={946:(e,t,n)=>{function o(e,t=40){if(Array.isArray(e)&&3===e.length){for(let t=0;t<3;t++)if(e[t]<0||e[t]>255)return;return e.every((e=>Math.abs(e-255)<=t))}}let i;function a(e,t,n=1){if(e.startsWith("#"))if(4===e.length){let o=Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n),a=Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n),s=Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n);i="rgba("+o+", "+a+", "+s+", "+t+")"}else{let o=Math.min(255,parseInt(e.slice(1,3),16)*n),a=Math.min(255,parseInt(e.slice(3,5),16)*n),s=Math.min(255,parseInt(e.slice(5,7),16)*n);i="rgba("+o+", "+a+", "+s+", "+t+")"}else if(e.startsWith("rgb")){let o=e.match(/\d+/g);i="rgba("+Math.min(255,o[0]*n)+", "+Math.min(255,o[1]*n)+", "+Math.min(255,o[2]*n)+", "+t+")"}else if(e.startsWith("var(--")){let o=e.slice(4,-1),s=window.getComputedStyle(document.documentElement).getPropertyValue(o);(s.startsWith("#")||s.startsWith("rgb"))&&(i=a(s,t,n))}return i}n.d(t,{_k:()=>a,wW:()=>o})},191:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BX:()=>fireEvent,GP:()=>applyScrollingEffect,IL:()=>getAttribute,Jn:()=>tapFeedback,OC:()=>isEntityType,P2:()=>throttle,Vv:()=>isColorLight,X:()=>getWeatherIcon,az:()=>createElement,gJ:()=>getImage,jk:()=>forwardHaptic,jx:()=>setLayout,mk:()=>getIconColor,o0:()=>formatDateTime,oY:()=>getName,pr:()=>isStateOn,q7:()=>getIcon,y0:()=>getState});var _style_ts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(946);const fireEvent=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const i=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=n,e.dispatchEvent(i),i},forwardHaptic=e=>{fireEvent(window,"haptic",e)},navigate=(e,t,n=!1)=>{n?history.replaceState(null,"",t):history.pushState(null,"",t),fireEvent(window,"location-changed",{replace:n})};function tapFeedback(e){void 0!==e&&(e.style.display="",e.style.animation="tap-feedback .3s",setTimeout((()=>{e.style.animation="none",e.style.display="none"}),500))}function getIcon(e,t=e.config.entity,n=e.config.icon){const o=t?.split(".")[0],i=getAttribute(e,"device_class",t),a=getAttribute(e,"icon",t),s=n,r=getState(e,t),l={alarm_control_panel:"mdi:shield",alert:"mdi:alert",automation:"mdi:playlist-play",binary_sensor:function(){const n="off"===r;switch(getAttribute(e,"device_class",t)){case"battery":return n?"mdi:battery":"mdi:battery-outline";case"battery_charging":return n?"mdi:battery":"mdi:battery-charging";case"cold":return n?"mdi:thermometer":"mdi:snowflake";case"connectivity":return n?"mdi:server-network-off":"mdi:server-network";case"door":return n?"mdi:door-closed":"mdi:door-open";case"garage_door":return n?"mdi:garage":"mdi:garage-open";case"heat":return n?"mdi:thermometer":"mdi:fire";case"light":return n?"mdi:brightness-5":"mdi:brightness-7";case"lock":return n?"mdi:lock":"mdi:lock-open";case"moisture":return n?"mdi:water-off":"mdi:water";case"motion":return n?"mdi:motion-sensor-off":"mdi:motion-sensor";case"occupancy":case"presence":return n?"mdi:home-outline":"mdi:home";case"opening":return n?"mdi:square":"mdi:square-outline";case"plug":case"power":return n?"mdi:power-plug-off":"mdi:power-plug";case"running":return n?"mdi:stop":"mdi:play";case"safety":case"tamper":return n?"mdi:check-circle":"mdi:alert-circle";case"smoke":return n?"mdi:check-circle":"mdi:smoke";case"sound":return n?"mdi:music-note-off":"mdi:music-note";case"update":return n?"mdi:package":"mdi:package-up";case"vibration":return n?"mdi:crop-portrait":"mdi:vibrate";case"window":return n?"mdi:window-closed":"mdi:window-open";default:return n?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}}(),calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",cover:function(){const n="closed"!==r;switch(getAttribute(e,"device_class",t)){case"awning":return n?"mdi:awning-outline":"mdi:awning";case"blind":return n?"mdi:blinds-open":"mdi:blinds";case"curtain":return n?"mdi:curtains-open":"mdi:curtains";case"damper":case"shutter":default:return n?"mdi:window-shutter-open":"mdi:window-shutter";case"door":return n?"mdi:door-open":"mdi:door-closed";case"garage":return n?"mdi:garage-open":"mdi:garage";case"gate":return n?"mdi:gate-open":"mdi:gate";case"shade":return n?"mdi:roller-shade":"mdi:roller-shade-closed";case"window":return n?"mdi:window-open":"mdi:window-closed"}}(),device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",lock:"mdi:lock",mailbox:"mdi:mailbox",media_player:"mdi:speaker",mower:"mdi:robot-mower",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:file-document",sensor:function(){switch(getAttribute(e,"device_class",t)){case"battery":return 100==r?"mdi:battery":r>=90?"mdi:battery-90":r>=80?"mdi:battery-80":r>=70?"mdi:battery-70":r>=60?"mdi:battery-60":r>=50?"mdi:battery-50":r>=40?"mdi:battery-40":r>=30?"mdi:battery-30":r>=20?"mdi:battery-20":r>=10?"mdi:battery-10":"mdi:battery-alert";case"humidity":return"mdi:water-percent";case"illuminance":return"mdi:brightness-5";case"temperature":return"mdi:thermometer";case"pressure":return"mdi:gauge";case"power":return"mdi:flash";case"signal_strength":return"mdi:wifi";case"energy":return"mdi:lightning-bolt";default:return"mdi:eye"}}(),simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:function(n=getState(e,t)){switch(n){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}(),weblink:"mdi:open-in-new"};return s||a||(l[o]?l[o]:l[i]?l[i]:"")}function getWeatherIcon(e){switch(e){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}const colorCache=new Map;function resolveCssVariable(e){let t=e;const n=getComputedStyle(document.body);for(;t&&t.startsWith("var(");){const e=t.match(/var\((--[^,]+),?\s*(.*)?\)/);if(!e)break;const[,o,i]=e;t=n.getPropertyValue(o).trim()||i&&i.trim()||""}return t}function hexToRgb(e){const t=e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function rgbStringToRgb(e){const t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);return t?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]:null}function calculateLuminance(e,t,n){return(.2126*e+.7152*t+.0722*n)/255}function isColorLight(e){const t=resolveCssVariable(e);if(!t)return!1;if(colorCache.has(t))return colorCache.get(t);let n=hexToRgb(t)||rgbStringToRgb(t);if(!n)return colorCache.set(t,!1),!1;const o=calculateLuminance(...n)>.5;return colorCache.set(t,o),o}function adjustColor(e,t){return e.map((e=>Math.min(255,Math.round(e*t))))}function getIconColor(e,t=e.config.entity,n=1){const{card_type:o,use_accent_color:i}=e.config,a="var(--bubble-accent-color, var(--accent-color))",s=getAttribute(e,"rgb_color",t),r=isColorLight("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))")?n-.2:n;if(!t)return a;if(isEntityType(e,"light")&&!i?"button"===o?e.card.classList.add("is-light"):"pop-up"===o&&e.elements.headerContainer.classList.add("is-light"):"button"===o?e.card.classList.remove("is-light"):"pop-up"===o&&e.elements.headerContainer.classList.remove("is-light"),!t.startsWith("light.")||i)return a;const l=adjustColor([225,225,210],r);if(!s)return`var(--bubble-light-color, rgba(${l.join(", ")}))`;const c=adjustColor(s,r);return(0,_style_ts__WEBPACK_IMPORTED_MODULE_0__.wW)(s)?`var(--bubble-light-color, rgba(${l.join(", ")}))`:`var(--bubble-light-color, rgba(${c.join(", ")}))`}function getImage(e,t=e.config.entity){if(e.config.force_icon)return"";const n=getAttribute(e,"entity_picture_local",t)||getAttribute(e,"entity_picture",t);return n?e._hass.hassUrl(n):""}function getName(e){const t=e.config.name,n=getAttribute(e,"friendly_name");return e.name||t||n||""}function getState(e,t=e.config.entity){return e._hass.states[t]?.state??""}function getAttribute(context,attribute,entity=context.config.entity){return attribute?eval(`context._hass.states['${entity}']?.attributes.${attribute}`)??"":""}function isEntityType(e,t){return e.config.entity?.startsWith(t+".")??!1}function isStateOn(e,t=e.config.entity){const n=getState(e,t).toLowerCase(),o=Number(n);return!!(["on","open","opening","closing","cleaning","true","idle","home","playing","paused","locked","occupied","available","running","active","connected","online","mowing","starting","heat","cool","dry","heat_cool","fan_only","auto","alarm"].includes(n)||o>0)}function createElement(e,t=""){const n=document.createElement(e);return""!==t&&t.split(" ").forEach((e=>{n.classList.add(e)})),n}function debounce(e,t){let n;return function(...o){clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}function applyScrollingEffect(e,t,n){const o=e.config.scrolling_effect??!0;if(!o)return void applyNonScrollingStyle(t,n);if(t.previousText===n)return;const i=t.className.split(" ").find((e=>e.startsWith("bubble-")));function a(){t.innerHTML=`<div class="scrolling-container">${n}</div>`,t.style="";const e=t.scrollWidth,a=t.parentNode?.offsetWidth||0;o&&e>a?(function(e,t,n){const o='<span class="bubble-scroll-separator"> | </span>',i=`<span>${t+o+t+o}</span>`;e.innerHTML=`<div class="scrolling-container">${i}</div>`;const a=function(e){return`\n            .${e} .scrolling-container {\n                width: 100%;\n                white-space: nowrap;\n                mask-image: linear-gradient(to right, transparent, black calc(0% + 8px), black calc(100% - 8px), transparent);\n                mask-image: linear-gradient(to left, transparent, black calc(0% + 8px), black calc(100% - 8px), transparent);\n            }\n            .${e} .scrolling-container span {\n                display: inline-block;\n                animation: scroll 14s linear infinite;\n            }\n\n            .bubble-scroll-separator {\n                opacity: .3;\n                margin: 0 6px 0 8px;\n            }\n\n            @keyframes scroll {\n                from { transform: translateX(0%); }\n                to { transform: translateX(-50%); }\n            }\n        `}(n);e.styleElement=document.createElement("style"),e.appendChild(e.styleElement),e.styleElement.innerHTML=a}(t,n,i),t.previousText=n):t.previousText=n}requestAnimationFrame(a),t.eventAdded||(window.addEventListener("resize",debounce(a,300)),t.eventAdded=!0)}function applyNonScrollingStyle(e,t){e.innerHTML=t,e.previousText=t,e.style.whiteSpace="normal",e.style.display="-webkit-box",e.style.webkitLineClamp="2",e.style.webkitBoxOrient="vertical",e.style.textOverflow="ellipsis"}function formatDateTime(e,t){if(!e)return"";const n=new Date(e),o=new Date;let i,a,s=Math.floor((o-n)/1e3);return isNaN(s)?"":(s<60?(i="second",a=s+1):s<3600?(i="minute",a=Math.floor(s/60)):s<86400?(i="hour",a=Math.floor(s/3600)):(i="day",a=Math.floor(s/86400)),new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(-a,i))}function setLayout(e){const t=e.config.card_layout,n="large"===t||"large-2-rows"===t,o="large-2-rows"===t;n!==e.content.classList.contains("large")&&e.content.classList.toggle("large",n),o!==e.content.classList.contains("rows-2")&&e.content.classList.toggle("rows-2",o)}function throttle(e,t=300){let n;return(...o)=>{void 0===n&&(e(...o),n=setTimeout((()=>{n=void 0}),t))}}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{let e="v2.4.0-beta.1";var t=__webpack_require__(946),n=__webpack_require__(191);function o(e,t,n){setTimeout((()=>{const o=new Event("hass-action",{bubbles:!0,composed:!0}),i={...t};!i.entity_id&&this?.config?.entity&&(i.entity_id=this.config.entity),"tap"===n||"double_tap"===n||"hold"===n?o.detail={config:i,action:n}:(e.modifiedConfig={...i,tap_action:{...i[n]}},delete e.modifiedConfig[n],o.detail={config:e.modifiedConfig,action:"tap"}),e.dispatchEvent(o)}),10)}function i(e,t,n,o){e.classList.add("bubble-action"),e.dataset.entity=t?.entity||n,e.dataset.tapAction=JSON.stringify(t?.tap_action||o?.tap_action||{action:"more-info"}),e.dataset.doubleTapAction=JSON.stringify(t?.double_tap_action||o?.double_tap_action||{action:"toggle"}),e.dataset.holdAction=JSON.stringify(t?.hold_action||o?.hold_action||{action:"toggle"});const i=JSON.parse(e.dataset.tapAction),a=JSON.parse(e.dataset.doubleTapAction),s=JSON.parse(e.dataset.holdAction);e.style.cursor="none"===i.action&&"none"===a.action&&"none"===s.action?"":"pointer"}window.isScrolling=!1,document.addEventListener("scroll",(function(){window.isScrolling=!0,setTimeout((()=>{window.isScrolling=!1}),150)}),{passive:!0}),document.body.addEventListener("pointerdown",(e=>{if(window.isScrolling)return;const t=e.composedPath();let n=null;for(const e of t)if(e.classList&&e.classList.contains("bubble-action")){n=e;break}if(n){const t={tap_action:JSON.parse(n.dataset.tapAction),double_tap_action:JSON.parse(n.dataset.doubleTapAction),hold_action:JSON.parse(n.dataset.holdAction),entity:n.dataset.entity};n.actionHandler||(n.actionHandler=new a(n,t,s)),n.actionHandler.handleStart(e),n.addEventListener("pointerup",n.actionHandler.handleEnd.bind(n.actionHandler),{once:!0}),document.addEventListener("scroll",n.actionHandler.handleScroll.bind(n.actionHandler),{once:!0})}}),{passive:!0});class a{constructor(e,t,n){this.element=e,this.config=t,this.sendActionEvent=n,this.tapTimeout=null,this.holdTimeout=null,this.startX=0,this.startY=0,this.holdFired=!1,this.pointerMoveListener=this.detectScrollLikeMove.bind(this)}handleStart(e){window.isScrolling||this.isDisconnected||(this.startX=e.clientX,this.startY=e.clientY,this.holdFired=!1,document.addEventListener("pointermove",this.pointerMoveListener),this.holdTimeout=setTimeout((()=>{"none"===(this.config.hold_action||{action:"none"}).action||window.isScrolling||(this.sendActionEvent(this.element,this.config,"hold"),this.holdFired=!0)}),400))}detectScrollLikeMove(e){const t=Math.abs(e.clientX-this.startX),n=Math.abs(e.clientY-this.startY);(t>5||n>5)&&(clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener))}handleEnd(e){if(window.isScrolling||this.isDisconnected)return;if(clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener),this.holdFired)return;const t=Date.now(),n=this.config.double_tap_action||{action:"none"},o=this.config.tap_action||{action:"none"};this.lastTap&&t-this.lastTap<200&&"none"!==n.action?(clearTimeout(this.tapTimeout),this.sendActionEvent(this.element,this.config,"double_tap")):"none"!==o.action&&(this.tapTimeout=setTimeout((()=>{this.sendActionEvent(this.element,this.config,"tap")}),200)),this.lastTap=t}handleScroll(){clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener)}}function s(e,t,n){const i=t.tap_action||{action:"more-info"},a=t.double_tap_action||{action:"toggle"},s=t.hold_action||{action:"toggle"},r=t.entity||this.config?.entity,l=e=>e.service&&"entity"===e.target?.entity_id&&r?{...e,target:{...e.target,entity_id:r}}:e,c=l(i),d=l(a),u=l(s);let p;switch(n){case"tap":default:p=c;break;case"double_tap":p=d;break;case"hold":p=u}o(e,{entity:r,tap_action:c,double_tap_action:d,hold_action:u},n)}function r(e,t){e.addEventListener("click",(()=>{(0,n.jk)("selection"),(0,n.Jn)(t)}))}let l=!1;function c(){!l&&location.hash&&setTimeout((()=>{const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))}),50)}function d(e){const t=e.startsWith("#")?window.location.href.split("#")[0]+e:e;history.pushState(null,"",t),window.dispatchEvent(new Event("location-changed"))}function u(e,t){e.editor||(e.hideContentTimeout=setTimeout((()=>{const{sectionRow:t,sectionRowContainer:n}=e;"hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!0,t.style.display="none",n?.classList.contains("card")&&(n.style.display="none"))}),t))}function p(e,t){const{showBackdrop:n,hideBackdrop:o}=L(e);t?n():o()}function b(e,t){e.config.background_update||(t?requestAnimationFrame((()=>{e.verticalStack.appendChild(e.popUp)})):requestAnimationFrame((()=>{e.verticalStack.removeChild(e.popUp)})))}function h(e,t){requestAnimationFrame((()=>{e.classList.toggle("is-popup-opened",t),e.classList.toggle("is-popup-closed",!t)}))}function m(e,t){e.boundClickOutside||(e.boundClickOutside=t=>function(e,t){(t.config.close_by_clicking_outside??1)&&(e.composedPath().find((e=>e.classList?.contains("bubble-pop-up")||["HA-DIALOG","HA-MORE-INFO-DIALOG","HA-DIALOG-DATE-PICKER"].includes(e.nodeName)))||c())}(t,e)),e.resetCloseTimeout||(e.resetCloseTimeout=()=>{!function(e){e.config.auto_close&&e.closeTimeout&&(clearTimeout(e.closeTimeout),e.closeTimeout=setTimeout(c,e.config.auto_close))}(e)}),t?(e.listenersAdded||(e.config.auto_close&&(e.popUp.addEventListener("touchstart",e.resetCloseTimeout,{passive:!0}),e.popUp.addEventListener("click",e.resetCloseTimeout,{passive:!0})),e.listenersAdded=!0),e.clickOutsideListenerAdded||(window.addEventListener("click",e.boundClickOutside,{passive:!0}),e.clickOutsideListenerAdded=!0)):(e.listenersAdded&&(e.config.auto_close&&(e.popUp.removeEventListener("touchstart",e.resetCloseTimeout),e.popUp.removeEventListener("click",e.resetCloseTimeout)),e.listenersAdded=!1),e.clickOutsideListenerAdded&&(window.removeEventListener("click",e.boundClickOutside),e.clickOutsideListenerAdded=!1))}function g(e){document.body.style.overflow=e}function f(e){["hideContentTimeout","removeDomTimeout","closeTimeout"].forEach((t=>clearTimeout(e[t])))}const _="\n  .bubble-backdrop {\n    position: fixed;\n    background-color: var(--bubble-backdrop-background-color);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 4;\n    opacity: 0;\n    transition: opacity 0.3s;\n    transition-delay: .1s;\n    display: flex;\n    backdrop-filter: var(--custom-backdrop-filter);\n    -webkit-backdrop-filter: var(--custom-backdrop-filter);\n    transform: translate3d(0, 0, 0);\n  }\n\n  .bubble-backdrop.is-visible {\n    opacity: 1;\n  }\n\n  .bubble-backdrop.is-hidden {\n    opacity: 0;\n    pointer-events: none;\n  }\n";let y,v,w,x,k=!1;const C=window.matchMedia("(prefers-color-scheme: dark)"),$=(0,n.az)("style");function S(){x=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color"),document.body.style.setProperty("--bubble-backdrop-background-color",(0,t._k)(x,.8,.6))}function L(e){const t=e.config.hide_backdrop??!1;if(y)return y;$.innerHTML=_,document.head.appendChild($);const o=(0,n.az)("style");document.head.appendChild(o);const i=(0,n.az)("div","bubble-backdrop backdrop is-hidden");return t&&(i.style.display="none",i.style.pointerEvents="none"),document.body.appendChild(i),i.style.setProperty("--custom-backdrop-filter",`blur(${e.config.backdrop_blur??0}px)`),y={hideBackdrop:function(){i.classList.add("is-hidden"),i.classList.remove("is-visible")},showBackdrop:function(){requestAnimationFrame((()=>{i.classList.add("is-visible"),i.classList.remove("is-hidden")}))},backdropElement:i,backdropCustomStyle:o},y}function A(e,t,n,o){let i;switch(n){case"hvac_modes":i=document.createElement("ha-icon"),i.slot="graphic",i.icon=function(e){switch(e){case"auto":return"mdi:thermostat-auto";case"cool":return"mdi:snowflake";case"heat":return"mdi:fire";case"heat_cool":return"mdi:sun-snowflake-variant";case"dry":return"mdi:water-percent";case"fan_only":default:return"mdi:fan";case"off":return"mdi:power"}}(o);break;case"fan_modes":if(!t.attributes.fan_modes)return null;i=document.createElement("ha-attribute-icon"),i.slot="graphic",i.attribute="fan_mode",i.attributeValue=o,i.hass=e._hass,i.stateObj=t;break;case"swing_modes":i=document.createElement("ha-attribute-icon"),i.slot="graphic",i.attribute="swing_mode",i.attributeValue=o,i.hass=e._hass,i.stateObj=t;break;case"preset_modes":i=document.createElement("ha-attribute-icon"),i.slot="graphic",i.attribute="preset_mode",i.attributeValue=o,i.hass=e._hass,i.stateObj=t;break;default:i=!1}return i}C.addEventListener("change",S),S();const E="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n    ha-card {\n        margin-top: 0;\n        background: none;\n        opacity: 1;\n    }\n    mwc-list-item {\n        border-radius: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 24px));\n        margin: 0 8px;\n    }\n    mwc-list-item[selected] {\n        color: var(--primary-text-color) !important;\n        background-color: var(--bubble-select-list-item-accent-color, var(--bubble-list-item-accent-color, var(--bubble-accent-color, var(--accent-color)))); /* Added the missing 'select' in the first var without removing the previous one for compatibilty */ \n    }\n    ha-select {\n        --mdc-shape-medium: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 32px));\n        --mdc-theme-surface: var(--bubble-select-list-background-color, var(--bubble-select-main-background-color, var(--bubble-main-background-color, var(--card-background-color, var(--secondary-background-color)))));\n        --mdc-shape-large: 32px;\n        --mdc-shape-small: 64px;\n        --mdc-menu-max-width: min-content;\n        --mdc-menu-min-width: var(--bubble-select-list-width, 200px);\n        --mdc-select-max-width: min-content;\n        --mdc-select-outlined-hover-border-color: transparent;\n        --mdc-select-outlined-idle-border-color: transparent;\n        --mdc-theme-primary: transparent;\n        --right-value: calc(var(--mdc-menu-min-width) - 154px);\n    }\n    .mdc-select {\n        color: transparent !important;\n        width: 150px !important;\n        position: absolute !important;\n        pointer-events: none;\n        right: var(--right-value, 46px);\n        top: -28px;\n    }\n    .mdc-menu, mwc-list, .mdc-list-item {\n        pointer-events: auto;\n    }\n    .mdc-select__dropdown-icon {\n        display: none !important;\n    }\n    .mdc-select__selected-text {\n        color: transparent !important;\n    }\n    .mdc-select__anchor {\n        width: 100%;\n        pointer-events: none;\n    }\n    .bubble-dropdown-container {\n        display: flex !important;\n        width: auto;\n        height: 100%;\n        align-items: center;\n    }\n    .bubble-dropdown-arrow {\n        display: flex;\n        position: absolute;\n        background: var(--bubble-select-arrow-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n        height: 36px;\n        width: 36px;\n        right: 6px;\n        pointer-events: none;\n        border-radius: var(--bubble-select-button-border-radius, var(--bubble-border-radius, 20px));\n        align-items: center;\n        justify-content: center;\n        transition: background 0.2s, transform 0.2s;\n        pointer-events: none;\n    }\n    .bubble-dropdown-select {\n        position: relative;\n        width: 42px;\n    }\n    .is-unavailable {\n        opacity: 0.5;\n    }\n    .bubble-select-card-container {\n        position: relative;\n        width: 100%;\n        height: 50px;\n        background-color: var(--bubble-select-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n        border-radius: var(--bubble-select-border-radius, var(--bubble-border-radius, 32px));\n        box-shadow: var(--bubble-select-box-shadow, var(--bubble-box-shadow, none));\n        touch-action: pan-y;\n        box-sizing: border-box;\n        border: solid 2px transparent;\n        transition: all 0.15s;\n        cursor: pointer;\n    }\n    .bubble-select-card,\n    .bubble-select-background {\n        display: flex;\n        position: absolute;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        transition: background-color 1.5s;\n    }\n    .bubble-select-background {\n        background-color: var(--bubble-select-background-color);\n        opacity: .5;\n        overflow: hidden !important;\n        border-radius: var(--bubble-select-border-radius, var(--bubble-border-radius, 32px));\n    }\n    .is-unavailable .bubble-select-card {\n        cursor: not-allowed;\n    }\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: var(--bubble-select-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n        background-color: var(--bubble-select-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n    }\n    .bubble-icon-container::after {\n        content: '';\n        background-color: currentColor;\n        position: absolute;\n        display: block;\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        left: 0;\n        right: 0;\n        opacity: 0;\n        pointer-events: none;\n    }\n\n    .bubble-icon {\n        display: flex;\n        opacity: 0.6;\n    }\n\n    .bubble-entity-picture {\n        background-size: cover;\n        background-position: center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n\n    .bubble-name,\n    .bubble-state {\n        display: flex;\n        position: relative;\n        white-space: nowrap;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 18px;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        margin: 0 16px 0 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        font-weight: 600;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        font-weight: normal;\n        opacity: 0.7;\n    }\n\n    .bubble-feedback-element {\n        position: absolute;\n        top: 0;\n        left: 0;\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgb(0,0,0);\n        pointer-events: none;\n    }\n\n    @keyframes tap-feedback {\n        0% {transform: translateX(-100%); opacity: 0;}\n        64% {transform: translateX(0); opacity: 0.1;}\n        100% {transform: translateX(100%); opacity: 0;}\n    }\n\n    .large .bubble-select-card-container {\n      height: 56px;\n      border-radius: var(--bubble-select-border-radius, var(--bubble-border-radius, 32px));\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 24px;\n      min-width: 42px !important;\n      min-height: 42px !important;\n      margin-left: 6px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(1, min-content);\n      grid-template-rows: repeat(2, 1fr);\n      grid-auto-flow: column;\n      width: auto;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n";function T(e,t=e.elements,o){t.dropdownContainer=(0,n.az)("div","bubble-dropdown-container"),t.dropdownSelect=(0,n.az)("ha-select","bubble-dropdown-select"),t.dropdownSelect.setAttribute("outlined",""),t.dropdownArrow=(0,n.az)("ha-icon","bubble-dropdown-arrow"),t.dropdownArrow.setAttribute("icon","mdi:chevron-down"),t.dropdownContainer.appendChild(t.dropdownArrow),t.dropdownStyleElement=(0,n.az)("style"),t.dropdownCustomStyleElement=(0,n.az)("style"),t.dropdownStyleElement.textContent=E,t.dropdownSelect.updateComplete.then((()=>{!function(){if(t.dropdownSelect.shadowRoot)if(t!==e.elements){t.dropdownSelectStyleElement=(0,n.az)("style"),t.dropdownSelectStyleElement.textContent=E,t.dropdownSelect.shadowRoot.appendChild(t.dropdownSelectStyleElement),t.dropdownContainer.appendChild(t.dropdownStyleElement),o&&(t.dropdownContainer.style.width="24px"),t.dropdownArrow.style.height="20px",t.dropdownArrow.style.width="20px",t.mainContainer=t.parentElement.parentElement.parentElement;let e=t.dropdownSelect.shadowRoot.querySelector("mwc-menu");e&&(e.style.position="relative",e.style.right="138px")}else t.dropdownSelect.shadowRoot.appendChild(t.dropdownStyleElement),t.dropdownSelect.shadowRoot.appendChild(t.dropdownCustomStyleElement)}()})),t===e.elements?t.selectCard.appendChild(t.dropdownContainer):t.appendChild(t.dropdownContainer)}function O(e,t=e.elements,n=e.config.entity,o=e.config){const{dropdownArrow:i,dropdownSelect:a,selectCardContainer:s,selectBackground:r}=t,l=t===e.elements?s:t,c=t===e.elements?r:t;t!==e.elements&&(l.style.border="solid 2px rgba(0,0,0,0)");let d=!0;c.addEventListener("click",(e=>{if("mwc-list-item"===e.target.tagName.toLowerCase())return;const n=a.shadowRoot.querySelector("mwc-menu"),o=()=>{i.style.transform="rotate(180deg)",t.dropdownArrow.style.background="var(--accent-color)",l.style.border="var(--bubble-select-border, solid 2px var(--accent-color))",t.mainContainer&&(t.mainContainer.style.overflow="visible")};d?(d=!1,i.style.transition="none",n.setAttribute("open",""),requestAnimationFrame((()=>{n.removeAttribute("open"),setTimeout((()=>{i.style.transition="",o()}),140)}))):(n.hasAttribute("open")||(n.removeAttribute("mdc-menu-surface--is-open-below"),n.setAttribute("mdc-menu-surface--is-open-above",""),n.setAttribute("open","")),o())})),a.addEventListener("closed",(e=>{e.stopPropagation(),e.preventDefault(),i.style.transform="rotate(0deg)",l.style.border="solid 2px rgba(0,0,0,0)",t.dropdownArrow.style.background="",t.mainContainer&&(t.mainContainer.style.overflow="")})),t.dropdownSelect.addEventListener("click",(t=>{const i=t.target.value;!function(e,t,n,o){const i=t?.split(".")[0];switch(i){case"input_select":e._hass.callService("input_select","select_option",{entity_id:t,option:n});break;case"select":e._hass.callService("select","select_option",{entity_id:t,option:n});break;case"climate":switch(o.select_attribute){case"hvac_modes":e._hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:n});break;case"fan_modes":e._hass.callService("climate","set_fan_mode",{entity_id:t,fan_mode:n});break;case"swing_modes":e._hass.callService("climate","set_swing_mode",{entity_id:t,swing_mode:n});break;case"preset_modes":e._hass.callService("climate","set_preset_mode",{entity_id:t,preset_mode:n})}break;case"fan":"preset_modes"===o.select_attribute&&e._hass.callService("fan","set_preset_mode",{entity_id:t,preset_mode:n});break;case"light":"effect_list"===o.select_attribute&&e._hass.callService("light","turn_on",{entity_id:t,effect:n});break;case"media_player":switch(o.select_attribute){case"source_list":e._hass.callService("media_player","select_source",{entity_id:t,source:n});break;case"sound_mode_list":e._hass.callService("media_player","select_sound_mode",{entity_id:t,sound_mode:n})}break;default:console.warn(`Unsupported entity type: ${i}`)}}(e,n,i,o)}))}function z(e,t=e.elements,n=e.config.entity,o){if(t.currentState=e._hass.states[n]?.state,!t.currentState)return;if(t.currentList=n?.startsWith("input_select")||n?.startsWith("select")?e._hass.states[n].attributes.options:e._hass.states[n].attributes[o.select_attribute],t.previousList===t.currentList&&t.previousState===t.currentState)return;let i=t.currentList;for(t.currentState;t.dropdownSelect.firstChild;)t.dropdownSelect.removeChild(t.dropdownSelect.firstChild);i.forEach((i=>{const a=document.createElement("mwc-list-item");a.value=i;const s=A(e,e._hass.states[n],o.select_attribute,i);s&&(a.graphic="icon",a.appendChild(s));const r=function(e,t,n,o){function i(e){const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}switch(n){case"fan_modes":return e._hass.formatEntityAttributeValue(t,"fan_mode",o);case"hvac_modes":return e._hass.formatEntityState(t,o);case"swing_modes":return e._hass.formatEntityAttributeValue(t,"swing_mode",o);case"preset_modes":return e._hass.formatEntityAttributeValue(t,"preset_mode",o);default:return i(e._hass.formatEntityState(t,o))??i(o)}}(e,e._hass.states[n],o.select_attribute,i);a.appendChild(document.createTextNode(r)),i===function(e,t){switch(t){case"fan_modes":return e.attributes.fan_mode||null;case"swing_modes":return e.attributes.swing_mode||null;case"preset_modes":return e.attributes.preset_mode||null;case"effect_list":return e.attributes.effect||null;case"source_list":return e.attributes.source||null;case"sound_mode_list":return e.attributes.sound_mode||null;default:return e.state}}(e._hass.states[n],o.select_attribute)&&a.setAttribute("selected",""),t.dropdownSelect.appendChild(a),t.previousList=t.currentList,t.previousState=t.currentState})),t.dropdownContainer.appendChild(t.dropdownSelect)}function B(e,t){try{if(e.states[t])return e.states[t]?.state}catch{}}function P(e,t){const n=e.entity&&t.states[e.entity]?t.states[e.entity].state:"unavailable";let o=e.state??e.state_not;if(Array.isArray(o)){const e=o.map((e=>B(t,e))).filter((e=>void 0!==e));o=[...o,...e]}else if("string"==typeof o){const e=B(t,o);o=[o],e&&o.push(e)}return null!=e.state?I(o).includes(n):!I(o).includes(n)}function I(e){return void 0===e||Array.isArray(e)?e:[e]}function V(e,t){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return!!(n=e).media_query&&matchMedia(n.media_query).matches;case"user":return function(e,t){return!(!e.users||!t.user?.id)&&e.users.includes(t.user.id)}(e,t);case"numeric_state":return function(e,t){const n=(e.entity?t.states[e.entity]:void 0)?.state;let o=e.above,i=e.below;"string"==typeof o&&(o=B(t,o)??o),"string"==typeof i&&(i=B(t,i)??i);const a=Number(n),s=Number(o),r=Number(i);return!isNaN(a)&&(null==e.above||isNaN(s)||s<a)&&(null==e.below||isNaN(r)||r>a)}(e,t);case"and":return function(e,t){return!e.conditions||V(e.conditions,t)}(e,t);case"or":return function(e,t){return!e.conditions||e.conditions.some((e=>V([e],t)))}(e,t);default:return P(e,t)}var n;return P(e,t)}))}function U(e){return null!=e.entity&&(null!=e.state||null!=e.state_not)}function H(e){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return null!=e.media_query;case"user":return null!=e.users;case"numeric_state":return function(e){return null!=e.entity&&(null!=e.above||null!=e.below)}(e);case"and":case"or":return function(e){return null!=e.conditions}(e);default:return U(e)}return U(e)}))}function M(e){const t=e._hass.states[e.config.entity],o=(0,n.IL)(e,e.config.attribute,e.config.entity),i=t?.last_changed,a="state"===e.config.button_type,s=e.config.show_name??!0,r=e.config.show_icon??!0,l=e.config.show_state??a,c=e.config.show_attribute??a,d=e.config.show_last_changed??e.config.show_last_updated??!1,u=e.config.scrolling_effect??!0,p=e.previousConfig||{};if(e.previousState===t&&e.previousAttribute===o&&e.previousLastChanged===i&&p.showName===s&&p.showIcon===r&&p.showState===l&&p.showAttribute===c&&p.showLastChanged===d&&p.scrollingEffect===u)return;let b=t&&l?e._hass.formatEntityState(t):"",h="",m="",g="";var f;c&&o&&(h=t?e._hass.formatEntityAttributeValue(t,e.config.attribute)??o:""),d&&t&&(m=t?(f=(0,n.o0)(i,e._hass.locale.language)).charAt(0).toUpperCase()+f.slice(1):""),e.elements.stateStyles||(e.elements.stateStyles=(0,n.az)("style"),e.elements.stateStyles.textContent=N,e.content.appendChild(e.elements.stateStyles),"pop-up"===e.config.card_type&&e.elements.buttonContainer.appendChild(e.elements.stateStyles)),g=[b,h,m].filter(Boolean).join(" • "),e.elements.name.classList.toggle("hidden",!s),e.elements.iconContainer.classList.toggle("hidden",!r),e.elements.nameContainer.classList.toggle("name-without-icon",!r),e.elements.state.classList.toggle("state-without-name",(l||d||c)&&!s),e.elements.state.classList.toggle("display-state",l||d||c),e.elements.state.classList.toggle("hidden",!(l||d||c)),e.config.styles?.includes("card.querySelector('.bubble-state').innerText")||(0,n.GP)(e,e.elements.state,g),e.previousState=t,e.previousAttribute=o,e.previousConfig={showName:s,showIcon:r,showState:l,showAttribute:c,showLastChanged:d,scrollingEffect:u}}const N="\n    .hidden {\n        display: none !important;\n    }\n\n    .state-without-name {\n        opacity: 1;\n        font-size: 14px;\n    }\n\n    .name-without-icon {\n        margin-left: 16px;\n    }\n\n    .display-state {\n        display: flex;\n    }\n";function D(e,t=e.content,o=t.firstChild.firstChild,a=!1){const s=e.config.sub_button;if(!s)return;e.previousValues=e.previousValues||{};const l=[...e.previousValues.subButtons||[]];e.elements=e.elements||{};let c=e.elements.subButtonContainer;if(!c){c=(0,n.az)("div","bubble-sub-button-container");const t=(0,n.az)("style");t.textContent=j,c.appendChild(t),a?o.prepend(c):o.appendChild(c),e.elements.subButtonContainer=c}if(Array.isArray(s)){s.forEach(((t,o)=>{if(!t)return;const a=o+1,s=t.entity??e.config.entity,l=e._hass.states[s],d=t.name??(0,n.IL)(e,"friendly_name",s)??"",u=t.attribute??"",p=(0,n.IL)(e,u,s),b=(0,n.pr)(e,s);if("fan_modes"===u&&null==p)return void(e.elements[a]||(0,n.az)("div","bubble-sub-button bubble-sub-button-"+a)).classList.add("hidden");const h=t.show_name??!1,m=t.show_state??!1,g=t.show_attribute??!1,f=(t.show_last_changed||t.show_last_updated)??!1,_=t.show_icon??!0,y=t.show_background??!0,v=t.state_background??!0,w=t.light_background??!0,x=t.show_arrow??!0,k=s?.startsWith("input_select")||s?.startsWith("select")||t.select_attribute,C=(0,n.q7)(e,t.entity,t.icon??"");let $=e.elements[a];if(!$||k&&!$.dropdownContainer){let o=-1;$&&(o=Array.prototype.indexOf.call(c.children,$)),$&&k&&!$.dropdownContainer&&c.contains($)&&(c.removeChild($),$=null),$=(0,n.az)("div","bubble-sub-button bubble-sub-button-"+a),$.nameContainer=(0,n.az)("div","bubble-sub-button-name-container"),$.feedbackContainer=(0,n.az)("div","bubble-feedback-container"),$.feedback=(0,n.az)("div","bubble-feedback-element feedback-element"),$.appendChild($.feedbackContainer),$.feedbackContainer.appendChild($.feedback),k&&(T(e,$,x),$.dropdownContainer.style.display="none",O(e,$,s,t)),$.appendChild($.nameContainer),o>=0&&o<c.children.length?c.insertBefore($,c.children[o]):c.appendChild($),e.elements[a]=$}if(k&&$.dropdownSelect){const n=e._hass.states[s]?.state,o=e.previousValues[s]?.state;if(n!==o){if(n&&$.dropdownSelect.value!==n){$.dropdownSelect.value=n;const e=new Event("change",{bubbles:!0});$.dropdownSelect.dispatchEvent(e)}e.previousValues[s]={state:n}}z(e,$,s,t),x?($.dropdownArrow.style.display="",$.dropdownContainer.style.width="24px"):($.dropdownArrow.style.display="none",$.dropdownContainer.style.width="0px",$.style.padding="6px")}else $.contains($.dropdownContainer)&&$.removeChild($.dropdownContainer);const S=!(!k||!$.dropdownSelect)&&Array.from($.dropdownSelect.children).find((e=>e.hasAttribute("selected")))?.value;if(_&&C){let o=$.icon;if(o||(o=(0,n.az)("ha-icon","bubble-sub-button-icon"),o.classList.add("show-icon"),$.appendChild(o),$.icon=o),S){const n=A(e,l,t.select_attribute,S);n&&!t.icon?(o.tagName!==n.tagName||o.icon!==n.icon||o.attribute!==n.attribute||o.attributeValue!==n.attributeValue)&&($.replaceChild(n,o),$.icon=n,o=n):o.icon!==C&&o.setAttribute("icon",C)}else o.icon!==C&&o.setAttribute("icon",C);o.classList.remove("hidden"),o.classList.add("bubble-sub-button-icon","show-icon")}else $.icon&&($.icon.classList.remove("show-icon"),$.icon.classList.add("hidden"));if(y){const t=(0,n.Vv)("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))");b&&v?(w&&$.style.setProperty("--bubble-sub-button-light-background-color",(0,n.mk)(e,s,t?1:.8)),$.classList.add("background-on"),$.classList.remove("background-off")):($.classList.add("background-off"),$.classList.remove("background-on"))}else $.classList.remove("background-on","background-off");"none"===t.tap_action?.action&&"none"===t.double_tap_action?.action&&"none"===t.hold_action?.action||$.actionAdded||(i($,k?"":t,s,{tap_action:{action:k?"none":"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}}),r($,$.feedback),k&&($.style.pointerEvents="auto",$.style.cursor="pointer"),$.actionAdded=!0);let L="";const E=l&&m?e._hass.formatEntityState(l):"",B=l&&""!==p&&g?e._hass.formatEntityAttributeValue(l,u)??p:"",P=l&&f?(0,n.o0)(l.last_changed,e._hass.locale.language):"";h&&""!==d&&(L+=d),""!==E&&(L+=(L?" · ":"")+E),""!==P&&(L+=(L?" · ":"")+P),""!==B&&(L+=(L?" · ":"")+B),L=L.charAt(0).toUpperCase()+L.slice(1),L||_||k?($.classList.remove("hidden"),$.nameContainer.textContent!==L&&($.nameContainer.textContent=L),_&&$.icon&&($.icon.classList.toggle("icon-with-state",!!L),$.icon.classList.toggle("icon-without-state",!L)),L||_||!k?k&&($.dropdownContainer.classList.remove("no-icon-select-container"),$.dropdownArrow.classList.remove("no-icon-select-arrow")):($.dropdownContainer.classList.add("no-icon-select-container"),$.dropdownArrow.classList.add("no-icon-select-arrow"))):($.classList.add("hidden"),$.dropdownContainer&&($.dropdownContainer.classList.remove("no-icon-select-container"),$.dropdownArrow.classList.remove("no-icon-select-arrow")));const U=t.visibility;if(null!=U){const t=I(U);if(H(t)){const n=V(t,e._hass);$.classList.toggle("hidden",!n)}}})),e.previousValues.subButtons=s.slice();for(let t=l.length;t>0;t--)if(t>s.length){const n=e.elements[t];n&&(c.removeChild(n),delete e.elements[t])}}}const j="\n    .bubble-sub-button-container {\n        position: relative;\n        display: flex;\n        justify-content: end;\n        right: 8px;\n        align-content: center;\n        gap: 8px;\n        align-items: center;\n    }\n    .bubble-sub-button {\n        display: flex;\n        flex-wrap: nowrap;\n        flex-direction: row-reverse;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        right: 0;\n        box-sizing: border-box;\n        width: min-content;\n        min-width: 36px;\n        height: 36px;\n        vertical-align: middle;\n        font-size: 12px;\n        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n        padding: 0 8px;\n        white-space: nowrap;\n        transition: all 0.5s ease-in-out;\n        color: var(--primary-text-color);\n    }\n    .bubble-feedback-container {\n        display: flex;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n        overflow: hidden;\n        pointer-events: none;\n    }\n    .bubble-sub-button-name-container {\n        display: flex;\n    }\n    .show-icon {\n        display: flex;\n        --mdc-icon-size: 16px;\n    }\n    .background-on {\n        background-color: var(--bubble-sub-button-light-background-color, var(--accent-color));\n    }\n    .background-off {\n        background-color: var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    }\n    .hidden {\n        display: none;\n    }\n    .icon-with-state {\n        margin-right: 4px;\n        --mdc-icon-size: 16px;\n    }\n    .icon-without-state {\n        margin-right: 0;\n        --mdc-icon-size: 20px;\n    }\n    .no-icon-select-arrow {\n        width: 28px !important;\n        height: 28px !important;\n        right: 2px !important;        \n    }\n    .no-icon-select-container {\n        width: 16px !important;\n    }\n    .bubble-dropdown-arrow {\n        background: var(--bubble-select-arrow-background-color) !important;\n    }\n";function R(e){Array.isArray(e.subButtonIcon)||(e.subButtonIcon=[]),"pop-up"===e.config.card_type?e.popUp.querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t})):e.content.querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t}))}function q(e){let t=e.config.button_type;return"custom"===t&&(console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"'),t=""),e.config.entity?t||"switch":t||"name"}function F(e,t){const o=e._hass.states[e.config.entity];if((0,n.OC)(e,"light"))e._hass.callService("light","turn_on",{entity_id:e.config.entity,brightness:Math.round(255*t/100)});else if((0,n.OC)(e,"media_player"))e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:(t/100).toFixed(2)});else if((0,n.OC)(e,"cover"))e._hass.callService("cover","set_cover_position",{entity_id:e.config.entity,position:Math.round(t)});else if((0,n.OC)(e,"input_number")){const i=o.attributes.min??0,a=o.attributes.max??100,s=(0,n.IL)(e,"step")??1;let r=(a-i)*t/100+i,l=Math.round(r/s)*s;e._hass.callService("input_number","set_value",{entity_id:e.config.entity,value:l})}else if((0,n.OC)(e,"fan")){const n=o.attributes.percentage_step??1;let i=Math.round(t/n)*n;e._hass.callService("fan","set_percentage",{entity_id:e.config.entity,percentage:i})}else if((0,n.OC)(e,"climate")){const n=o.attributes.min_temp??0,i=o.attributes.max_temp??1e4,a="°C"===e._hass.config.unit_system.temperature,s=o.attributes.target_temp_step?o.attributes.target_temp_step:a?.5:1;let r=(i-n)*t/100+n,l=Math.round(r/s)*s;l=parseFloat(l.toFixed(1)),e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:l})}else if((0,n.OC)(e,"number")){const n=o.attributes.min??0,i=o.attributes.max??100,a=o.attributes.step??1;let s=(i-n)*t/100+n,r=Math.round(s/a)*a;e._hass.callService("number","set_value",{entity_id:e.config.entity,value:r})}}function W(e,t){const n=e.elements.rangeSlider.getBoundingClientRect(),o=100*(t-n.left)/n.width,i=Math.min(100,Math.max(0,o));return e.elements.rangeFill.style.transform=`translateX(${i}%)`,i}const X="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n        -ms-overflow-style: none; /* for Internet Explorer, Edge */\n        scrollbar-width: none; /* for Firefox */\n    }\n    *::-webkit-scrollbar {\n        display: none; /* for Chrome, Safari, and Opera */\n    }\n    ha-card {\n        margin-top: 0;\n        background: none;\n        opacity: 1;\n    }\n    .is-unavailable {\n        opacity: 0.5;\n    }\n\n    .bubble-button-card-container {\n        position: relative;\n        width: 100%;\n        height: 50px;\n        background-color: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n        border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));\n        box-shadow: var(--bubble-button-box-shadow, var(--bubble-box-shadow, none));\n        overflow: scroll;\n        touch-action: pan-y;\n    }\n\n    .bubble-button-card,\n    .bubble-range-slider,\n    .bubble-button-background {\n        display: flex;\n        position: absolute;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        transition: background-color 1.5s;\n    }\n    .bubble-button-background {\n        background-color: var(--bubble-button-background-color);\n        opacity: .5;\n        border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));\n    }\n    .bubble-range-fill {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        left: -100%;\n        transition: all .3s;\n        z-index: 0;\n    }\n    .is-dragging .bubble-range-fill {\n        transition: none;\n    }\n    .is-light .bubble-range-fill {\n        opacity: 0.5;\n    }\n    .is-unavailable .bubble-button-card,\n    .is-unavailable .bubble-range-slider {\n        cursor: not-allowed;\n    }\n    .bubble-range-slider {\n        cursor: ew-resize;\n        border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));\n        overflow: hidden;\n        mask-image: radial-gradient(white, black);\n        -webkit-mask-image: -webkit-radial-gradient(white, black);\n    }\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: var(--bubble-button-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n        background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n    }\n\n    .bubble-icon {\n        display: flex;\n        opacity: 0.6;\n    }\n\n    .is-on .bubble-icon {\n      filter: brightness(1.1);\n      opacity: 1;\n    }\n\n    .bubble-entity-picture {\n        background-size: cover;\n        background-position: center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n\n    .bubble-name,\n    .bubble-state {\n        display: flex;\n        position: relative;\n        white-space: nowrap;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 18px;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        margin: 0 16px 0 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        font-size: 13px;\n        font-weight: 600;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        font-weight: normal;\n        opacity: 0.7;\n    }\n\n    .bubble-feedback-element {\n        position: absolute;\n        top: 0;\n        left: 0;\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgb(0,0,0);\n        pointer-events: none;\n    }\n\n    @keyframes tap-feedback {\n        0% {transform: translateX(-100%); opacity: 0;}\n        64% {transform: translateX(0); opacity: 0.1;}\n        100% {transform: translateX(100%); opacity: 0;}\n    }\n\n    .large .bubble-button-card-container {\n      height: 56px;\n      border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 24px;\n      min-width: 42px !important;\n      min-height: 42px !important;\n      margin-left: 8px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(1, min-content);\n      grid-template-rows: repeat(2, 1fr);\n      grid-auto-flow: column;\n      width: auto;\n      padding-right: 4px;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n";function Y(e,t=e.content,o=t){const a=q(e);e.cardType!==`button-${a}`&&e.buttonType!==a&&(function(e,t=e.content,o=t){const i=q(e);e.dragging=!1,e.elements||(e.elements={}),e.elements.buttonCardContainer=(0,n.az)("div","bubble-button-card-container button-container"),e.elements.buttonCard=(0,n.az)("div","bubble-button-card switch-button"),e.elements.buttonBackground=(0,n.az)("div","bubble-button-background"),e.elements.nameContainer=(0,n.az)("div","bubble-name-container name-container"),e.elements.iconContainer=(0,n.az)("div","bubble-icon-container icon-container"),e.elements.name=(0,n.az)("div","bubble-name name"),e.elements.state=(0,n.az)("div","bubble-state state"),e.elements.feedback=(0,n.az)("div","bubble-feedback-element feedback-element"),e.elements.icon=(0,n.az)("ha-icon","bubble-icon icon"),e.elements.image=(0,n.az)("div","bubble-entity-picture entity-picture"),e.elements.style=(0,n.az)("style"),e.elements.customStyle=(0,n.az)("style"),e.elements.feedback.style.display="none",e.elements.style.innerText=X,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),"name"!==i&&e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonCard.appendChild(e.elements.buttonBackground),e.elements.buttonCard.appendChild(e.elements.iconContainer),e.elements.buttonCard.appendChild(e.elements.nameContainer),e.elements.buttonCard.appendChild(e.elements.feedback),e.elements.buttonCardContainer.appendChild(e.elements.buttonCard),t.innerHTML="",o===t&&t.appendChild(e.elements.buttonCardContainer),t.appendChild(e.elements.style),t.appendChild(e.elements.customStyle),o!==t?(o.innerHTML="",e.elements.buttonCardContainer.appendChild(t),o.appendChild(e.elements.buttonCardContainer),e.buttonType=i):e.cardType=`button-${i}`}(e,t,o),"switch"===a?function(e){i(e.elements.iconContainer,e.config),i(e.elements.buttonBackground,e.config.button_action,e.config.entity,{tap_action:{action:"toggle"},double_tap_action:{action:"toggle"},hold_action:{action:"more-info"}}),r(e.elements.buttonBackground,e.elements.feedback)}(e):"slider"===a?function(e){i(e.elements.iconContainer,e.config);let t=0,o=null;e.elements.rangeFill=(0,n.az)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,n.az)("div","bubble-range-slider range-slider"),e.elements.rangeSlider.appendChild(e.elements.rangeFill),e.elements.buttonCardContainer.appendChild(e.elements.rangeSlider),e.elements.buttonCardContainer.insertBefore(e.elements.rangeSlider,e.elements.buttonCard),e.elements.buttonCard.style.cursor="ew-resize",e.elements.buttonCardContainer.addEventListener("pointercancel",(function(){clearTimeout(o),e.dragging=!1,e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",s),window.removeEventListener("pointerup",r)})),e.elements.buttonCardContainer.addEventListener("pointerdown",(n=>{n.target.closest(".bubble-action")||(e.elements.buttonCardContainer.setPointerCapture(n.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,t=n.pageX||(n.touches?n.touches[0].pageX:0),e.elements.buttonCardContainer.classList.add("is-dragging"),e.elements.buttonCardContainer.addEventListener("pointermove",s),window.addEventListener("pointerup",r)))}));const a=(0,n.P2)(F,200);function s(t){if(t.stopPropagation(),t.target.closest(".bubble-action"))return;const n=t.pageX||(t.touches?t.touches[0].pageX:0),o=W(e,n);e.config.slider_live_update&&a(e,o)}function r(t){t.stopPropagation(),clearTimeout(o),o=setTimeout((()=>{e.dragging=!1}),1400);const i=t.pageX||(t.touches?t.touches[0].pageX:0),a=W(e,i);F(e,a),(0,n.jk)("selection"),e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",s),window.removeEventListener("pointerup",r)}}(e):"state"===a?function(e){i(e.elements.buttonCardContainer,e.config),i(e.elements.buttonBackground,e.config.button_action,e.config.entity,{tap_action:{action:"more-info"},double_tap_action:{action:"more-info"},hold_action:{action:"more-info"}}),r(e.elements.buttonBackground,e.elements.feedback)}(e):"name"===a&&function(e){const t={tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}};i(e.elements.iconContainer,e.config,e.config.entity,t),i(e.elements.buttonBackground,e.config.button_action,e.config.entity,t),r(e.elements.buttonBackground,e.elements.feedback)}(e)),"name"!==a&&(function(e){const t=(0,n.y0)(e),o=e.config.card_type;"unavailable"===t?"button"===o?e.card.classList.add("is-unavailable"):"pop-up"===o&&e.elements.headerContainer.classList.add("is-unavailable"):"button"===o?e.card.classList.remove("is-unavailable"):"pop-up"===o&&e.elements.headerContainer.classList.remove("is-unavailable"),(0,n.pr)(e)?"button"===o?e.card.classList.add("is-on"):"pop-up"===o&&e.elements.headerContainer.classList.add("is-on"):"button"===o?e.card.classList.remove("is-on"):"pop-up"===o&&e.elements.headerContainer.classList.remove("is-on")}(e),function(e){const t=e.config.card_type,o=q(e),i=(0,n.OC)(e,"light"),a=(0,n.pr)(e),s=(0,n.mk)(e),r="button"===t?e.card.style.getPropertyValue("--bubble-button-background-color"):e.popUp.style.getPropertyValue("--bubble-button-background-color"),l=e.elements.buttonBackground.style.opacity;let c="",d="";if("switch"===o&&a){const t=e.config.use_accent_color;s&&i&&!t?(c=(0,n.mk)(e),d=".5"):(c="var(--bubble-button-accent-color, var(--bubble-accent-color, var(--accent-color)))",d="1")}else c="rgba(0, 0, 0, 0)",d=".5";r!==c&&("button"===t?e.card.style.setProperty("--bubble-button-background-color",c):"pop-up"===t&&e.popUp.style.setProperty("--bubble-button-background-color",c)),l!==d&&(e.elements.buttonBackground.style.opacity=d)}(e),function(e){if("slider"===q(e)){if(e.elements.rangeFill.style.backgroundColor=(0,n.mk)(e),e.dragging)return;let t=0;if((0,n.OC)(e,"light"))t=100*(0,n.IL)(e,"brightness")/255;else if((0,n.OC)(e,"media_player"))t=(0,n.pr)(e)?100*(0,n.IL)(e,"volume_level"):0;else if((0,n.OC)(e,"cover"))t=(0,n.IL)(e,"current_position");else if((0,n.OC)(e,"input_number")){const o=(0,n.IL)(e,"min"),i=(0,n.IL)(e,"max");t=100*((0,n.y0)(e)-o)/(i-o)}else if((0,n.OC)(e,"fan"))t=(0,n.pr)(e)?(0,n.IL)(e,"percentage"):0;else if((0,n.OC)(e,"climate")){const o=(0,n.IL)(e,"min_temp"),i=(0,n.IL)(e,"max_temp");t=100*((0,n.IL)(e,"temperature")-o)/(i-o)}else if((0,n.OC)(e,"number")){const o=(0,n.IL)(e,"min"),i=(0,n.IL)(e,"max");t=100*((0,n.y0)(e)-o)/(i-o)}e.elements.rangeFill.style.transform=`translateX(${t}%)`}}(e)),function(e){const t=q(e),o="name"!==t&&(0,n.pr)(e),i="name"!==t?(0,n.q7)(e):e.config.icon,a="name"!==t?(0,n.gJ)(e):"",s="name"!==t&&(0,n.OC)(e,"light"),r=e.elements.iconContainer.style.color,l=e.elements.image.style.backgroundImage,c=e.elements.icon.icon,d=e.elements.icon.style.display,u=e.elements.image.style.display;if(s&&o){const t=`var(--bubble-icon-background-color, ${(0,n.mk)(e)})`;r!==t&&(e.elements.iconContainer.style.color=t)}else""!==r&&(e.elements.iconContainer.style.color="");if(""!==a){const t="url("+a+")";l!==t&&(e.elements.image.style.backgroundImage=t),"none"!==d&&(e.elements.icon.style.display="none"),""!==u&&(e.elements.image.style.display="")}else if(""!==i){c!==i&&(e.elements.icon.icon=i);const a=o&&"state"!==t?(0,n.mk)(e):"inherit";e.elements.icon.style.color!==a&&(e.elements.icon.style.color=a),""!==d&&(e.elements.icon.style.display=""),"none"!==u&&(e.elements.image.style.display="none")}else"none"!==d&&(e.elements.icon.style.display="none"),"none"!==u&&(e.elements.image.style.display="none")}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t="name"!==q(e)?(0,n.oY)(e):e.config.name;t!==e.elements.previousName&&((0,n.GP)(e,e.elements.name,t),e.elements.previousName=t)}(e),M(e),D(e,t,e.elements.buttonCard),"pop-up"!==e.cardType&&function(e){if(R(e),(0,n.jx)(e),!e.config.styles)return;const t=(0,n.y0)(e);let o="";try{o=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card","name",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,n.X,e.card,e.card.name):""}catch(e){throw new Error(`Error in generating button custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=o)}(e)}async function J(e){if("pop-up"!==e.cardType){if(e.getRootNode()instanceof ShadowRoot==0)return;!function(e){try{e.cardType="pop-up",e.verticalStack=e.getRootNode(),e.sectionRow=e.verticalStack.host.parentElement,e.sectionRowContainer=e.sectionRow?.parentElement,e.popUp=e.verticalStack.querySelector("#root"),e.popUp.classList.add("bubble-pop-up","pop-up","is-popup-closed"),e.cardTitle=e.verticalStack.querySelector(".card-header"),e.editor||e.config.background_update||e.verticalStack.removeChild(e.popUp),e.elements={},L(e),e.cardTitle&&(e.cardTitle.style.display="none"),k=k||(e.config.hide_backdrop??!0),e.popUp.style.setProperty("--custom-height-offset-desktop",e.config.margin_top_desktop??"0px"),e.popUp.style.setProperty("--custom-height-offset-mobile",e.config.margin_top_mobile??"0px"),e.popUp.style.setProperty("--custom-margin",`-${e.config.margin??"7px"}`),e.popUp.style.setProperty("--custom-popup-filter",e.config.backdrop_blur&&"0"!==e.config.backdrop_blur?"none":`blur(${e.config.bg_blur??10}px)`),e.popUp.style.setProperty("--custom-shadow-opacity",(e.config.shadow_opacity??0)/100);const t=function(e){return()=>{e.config.hash===location.hash?(l=!0,setTimeout((()=>{l=!1}),100),function(e){e.popUp.classList.contains("is-popup-opened")||(f(e),b(e,!0),requestAnimationFrame((()=>{p(e,!0),h(e.popUp,!0),function(e){const{sectionRow:t,sectionRowContainer:n,popUp:o}=e;o.style.transform="","hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!1,t.style.display="",n?.classList.contains("card")&&(n.style.display=""))}(e)})),m(e,!0),e.config.auto_close>0&&(e.closeTimeout=setTimeout(c,e.config.auto_close)),g("hidden"),e.config.open_action&&o(e.popUp,e.config,"open_action"))}(e)):function(e){e.popUp.classList.contains("is-popup-opened")&&(f(e),h(e.popUp,!1),p(e,!1),e.removeDomTimeout=setTimeout((()=>{b(e,!1),u(e,0)}),300),m(e,!1),g(""),e.config.close_action&&o(e,e.config,"close_action"))}(e)}}(e);window.addEventListener("location-changed",t),window.addEventListener("popstate",t)}catch(e){console.error(e)}}(e),function(e){e.elements={closeIcon:(0,n.az)("ha-icon","bubble-close-icon"),closeButton:(0,n.az)("button","bubble-close-button close-pop-up"),buttonContainer:(0,n.az)("div","bubble-button-container"),header:(0,n.az)("div","bubble-header")},e.elements.closeIcon.icon="mdi:close",e.elements.closeButton.appendChild(e.elements.closeIcon),e.elements.closeButton.addEventListener("click",(()=>{c(),(0,n.jk)("selection")}));const t=e.popUp.querySelector(".bubble-header-container");t?Object.assign(e.elements,{headerContainer:t,closeIcon:t.querySelector(".bubble-close-icon"),closeButton:t.querySelector(".bubble-close-button"),buttonContainer:t.querySelector(".bubble-button-container"),header:t.querySelector(".bubble-header")}):(e.elements.headerContainer=(0,n.az)("div","bubble-header-container"),e.elements.headerContainer.setAttribute("id","header-container"),e.elements.headerContainer.appendChild(e.elements.header),e.elements.headerContainer.appendChild(e.elements.closeButton),e.elements.header.appendChild(e.elements.buttonContainer)),e.popUp.addEventListener("touchstart",(e=>{v=e.touches[0].clientY}),{passive:!0}),e.elements.header.addEventListener("touchmove",(t=>{const n=t.touches[0].clientY-v;n>0&&(e.popUp.style.transform=`translateY(${n}px)`)}),{passive:!0}),e.elements.header.addEventListener("touchend",(t=>{const n=t.changedTouches[0].clientY-v;n>50?(e.popUp.style.transform=`translateY(calc(${n}px + (100% - ${n}px)))`,c()):e.popUp.style.transform=""}),{passive:!0})}(e),function(e){try{e.elements.style=(0,n.az)("style"),e.elements.style.innerText="\n  .bubble-pop-up-container {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      margin-top: -50px;\n      max-width: 100%;\n      padding-top: 40px;\n      padding-bottom: 80px;\n      grid-gap: var(--bubble-pop-up-gap, 14px);\n      gap: var(--bubble-pop-up-gap, 14px);\n      column-gap: var(--bubble-pop-up-gap, 14px);\n      --grid-gap: var(--bubble-pop-up-gap, 14px);\n      --vertical-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n      --horizontal-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n      --stack-card-gap: var(--bubble-pop-up-gap, 14px);\n      -ms-overflow-style: none; /* for Internet Explorer, Edge */\n      scrollbar-width: none; /* for Firefox */\n      overflow-y: auto; \n      overflow-x: hidden; \n      grid-auto-rows: min-content;\n      mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n      -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n      padding: 18px 18px calc(140px + var(--custom-height-offset-mobile)) 18px;\n  }\n  .bubble-pop-up-container > * {\n      flex-shrink: 0 !important;\n  }\n  .bubble-pop-up.card-content {\n      width: 100% !important;\n      padding: 0 !important;\n  }\n  .bubble-pop-up {\n      transition: transform 0.3s ease;\n      position: fixed;\n      width: 100%;\n      max-width: 100%;\n      border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n      box-sizing: border-box;\n      margin-left: var(--custom-margin);\n      left: 7px;\n      z-index: 5 !important;\n      bottom: calc(-56px - var(--custom-height-offset-mobile));\n  }\n  .bubble-pop-up-background {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      top: 0;\n      left: 0;\n      position: absolute;\n      background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n      border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n      backdrop-filter: var(--custom-popup-filter);\n      -webkit-backdrop-filter: var(--custom-popup-filter);\n  }\n  .bubble-pop-up-container::-webkit-scrollbar {\n      display: none; /* for Chrome, Safari, and Opera */\n  }\n  .is-popup-opened {\n      box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));\n  }\n  .is-popup-closed { \n      transform: translateY(100%);\n      box-shadow: none !important;\n  }\n\n  @media only screen and (min-width: 600px) {\n      .bubble-pop-up {\n          margin-left: 0 !important;\n          min-width: var(--desktop-width, 540px);\n          max-width: var(--desktop-width, 540px);\n          left: calc(50% - (var(--desktop-width, 540px) / 2));\n      }\n      .bubble-pop-up-container {\n          padding: 18px 18px calc(140px + var(--custom-height-offset-desktop)) 18px;\n      }\n  }\n  @media only screen and (min-width: 768px) {\n      .bubble-pop-up {\n        bottom: calc(-56px - var(--custom-height-offset-desktop));\n        left: calc(var(--mdc-drawer-width, 0px) / 2 + 50% - (var(--desktop-width, 540px) / 2));\n      }\n  }\n  .bubble-pop-up.editor {\n      transition: none !important;\n      position: relative !important;\n      top: 0;\n      left: 0;\n      width: 100% !important;\n      backdrop-filter: none !important;\n      display: flex !important;\n      transform: none !important;\n      height: auto !important;\n      min-width: auto;\n      z-index: 0 !important;\n  }\n  .bubble-header-container {\n      display: inline-flex;\n      height: 50px;\n      margin: 0;\n      padding: 0;\n      z-index: 3;\n      padding: 18px 18px 22px;\n      position: sticky;\n      top: 0;\n      background: none !important;\n      overflow: visible;\n  }\n  .bubble-header {\n      display: inline-flex;\n      flex-grow: 1;\n      margin-right: 14px;\n      color: var(--primary-text-color);\n  }\n  .bubble-name {\n      font-size: 14px;\n      font-weight: heavy;\n  }\n  .bubble-close-button {\n      height: 50px;\n      width: 50px;\n      border: none;\n      border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px));\n      z-index: 1;\n      background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n      color: var(--primary-text-color);\n      flex-shrink: 0;\n      cursor: pointer;\n  }\n  .bubble-button-card-container {\n      background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n  }\n  .bubble-pop-up-container.editor-cropped {\n      height: 122px !important;\n      mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;\n      -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;   \n  }\n  .bubble-pop-up.editor > .bubble-pop-up-container {\n      padding-bottom: 18px !important;\n      mask-image: none;\n      -webkit-mask-image: none;  \n      overflow: hidden;  \n  }\n  .editor .bubble-pop-up-background {\n      width: 100%;\n      height: 100%;\n      left: 0px;\n      top: 0px;\n      z-index: -1;\n      display: flex;\n      position: absolute;\n      background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n      border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) !important;\n      backdrop-filter: none;\n      -webkit-backdrop-filter: none;\n  }\n\n  .no-header .bubble-header-container {\n      visibility: hidden !important;\n      height: 0px !important;\n  }\n  .no-header .bubble-pop-up-container {\n      padding-top: 4px !important;\n      mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n      -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n  }\n\n  .large .bubble-button-card-container {\n    height: 56px;\n    border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 36px));\n  }\n  .large .bubble-pop-up-container {\n      margin-top: -36px;\n  }\n  .large .bubble-icon-container {\n    --mdc-icon-size: 24px;\n    min-width: 42px !important;\n    min-height: 42px !important;\n    margin-left: 8px;\n  }\n  .large .bubble-close-button {\n      height: 56px;\n      width: 56px;\n      border: none;\n      border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px));\n      z-index: 1;\n      --mdc-icon-size: 28px !important;\n  }\n\n  .rows-2 .bubble-sub-button-container {\n    flex-direction: column;\n    gap: 4px !important;\n    display: grid !important;\n    grid-template-columns: repeat(1, min-content);\n    grid-template-rows: repeat(2, 1fr);\n    grid-auto-flow: column;\n    width: auto;\n    padding-right: 4px;\n  }\n  .rows-2 .bubble-sub-button {\n    height: 20px !important;\n  }\n";let o,i=e.popUp.querySelector("style");e.stylesAdded&&i?e.elements.customStyle=i:(e.elements.customStyle=(0,n.az)("style"),e.popUp.appendChild(e.elements.customStyle),e.popUp.appendChild(e.elements.style),e.stylesAdded=!0);const a=e.config.bg_opacity??88;function s(){o=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color");const n=e.config.bg_color?e.config.bg_color:o,i=(0,t._k)(n,a/100,1.02);e.popUp.style.setProperty("--bubble-pop-up-background-color",i)}C.addEventListener("change",(()=>{s()}),{passive:!0}),s(),e.popUp.style.setProperty("--desktop-width",e.config.width_desktop??"540px"),e.config.close_on_click&&e.popUp.addEventListener("click",c,{passive:!0}),window.addEventListener("keydown",(t=>{"Escape"===t.key&&e.config.hash===location.hash&&c()}),{passive:!0});let r=e.config.slide_to_close_distance??400;e.popUp.addEventListener("touchmove",(e=>{e.touches[0].clientY-v>r&&e.touches[0].clientY>w&&c(),w=e.touches[0].clientY}),{passive:!0});const l=e.popUp.querySelector(".bubble-pop-up-container");if(null===l){e.elements.popUpContainer=(0,n.az)("div"),e.elements.popUpContainer.classList.add("bubble-pop-up-container");let d=e.popUp.firstChild;for(;d;)e.elements.popUpContainer.appendChild(d),d=e.popUp.firstChild}else e.elements.popUpContainer=l;e.popUpBackground=(0,n.az)("div","bubble-pop-up-background"),e.popUp.appendChild(e.popUpBackground),e.popUp.appendChild(e.elements.headerContainer),e.popUp.appendChild(e.elements.popUpContainer),e.config.hash!==location.hash&&u(e,0),window.dispatchEvent(new Event("location-changed"))}catch(p){console.error(p)}}(e)}else e.popUp&&e.elements&&(e.config.hash!==location.hash&&e.config===e.previousConfig||((e.config.entity||e.config.name)&&Y(e,e.elements.buttonContainer,e.elements.header),requestAnimationFrame((()=>{!function(e){R(e);const t=e.config.card_layout,o="large"===t||"large-2-rows"===t,i="large-2-rows"===t;o!==e.popUp.classList.contains("large")&&e.popUp.classList.toggle("large",o),i!==e.popUp.classList.contains("rows-2")&&e.popUp.classList.toggle("rows-2",i);const a=e.config.show_header??!0;if(e.popUp.classList.contains("no-header")===a&&e.popUp.classList.toggle("no-header",!a),!e.config.styles)return;const s=(0,n.y0)(e),{backdropCustomStyle:r}=L(e);let l="";try{l=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,s,e.elements.icon,e.subButtonIcon,n.X,e.popUp):""}catch(e){throw new Error(`Error in generating pop-up custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=l),r.innerText=l}(e)})),e.previousConfig=e.config),e.editor||function(e){const t=e.config.trigger;if(t){const n=!e.hasPageLoaded;e.hasPageLoaded=!0;const o=I(t);if(0===o.length)return void(e.previousTrigger=!1);if(H(o)){const t=V(o,e._hass);if(t===e.previousTrigger)return;e.config.hash===location.hash?t||n||c():t&&d(e.config.hash),e.previousTrigger=t}}else{let t=e.config.trigger_entity??"";if(""===t)return;let n=e.config.trigger_state??"",o=e.config.trigger_close??!1,i=e._hass.states[t]?.state;if(!t)return;if(!n)return;if(e.oldTriggerEntityState===i)return;const a=!e.hasPageLoaded;e.hasPageLoaded=!0,e.config.hash===location.hash?o&&n!==i&&(a||c()):i===n&&d(e.config.hash),e.oldTriggerEntityState=i}}(e),function(e){if(!e.verticalStack)return;const{host:t}=e.verticalStack,{popUp:n,sectionRow:o,sectionRowContainer:i,elements:a}=e,s=e._cachedDetectedEditor??=t?.closest("hui-card-preview")||t?.closest("hui-card[preview][class]")||t?.getRootNode().host?.closest("hui-section[preview][class]"),r=n?.classList.contains("is-popup-opened"),l="hui-card"===o?.tagName.toLowerCase();if(e.previousEditorState??=null,e.previousDetectedEditor??=null,!r&&l){const{editor:t,editorAccess:n}=e;t||!n||s||o?.hasAttribute("hidden")?i?.classList.contains("card")&&t&&"none"===i.style.display&&(i.style.display=""):(o.setAttribute("hidden",""),o.style.display="none")}const c=n?.classList;if(e.editor||s){c?.contains("editor")||(document.body.style.overflow="",c?.remove("is-popup-opened"),c?.add("is-popup-closed","editor")),e.editorAccess=!0;const t=null===s;a?.popUpContainer?.classList.contains("editor-cropped")!==t&&a.popUpContainer.classList.toggle("editor-cropped",t)}else c?.contains("editor")&&c.remove("editor"),a?.popUpContainer?.classList.remove("editor-cropped");e.editor===e.previousEditorState&&s===e.previousDetectedEditor||(function(e){const{hideBackdrop:t}=L(e),n=e.verticalStack.host,o=n?.closest("hui-card-preview");(e.editor||o)&&(t(),clearTimeout(e.removeDomTimeout),o||e.verticalStack.contains(e.popUp)||e.verticalStack.appendChild(e.popUp))}(e),e.previousEditorState=e.editor,e.previousDetectedEditor=s)}(e))}let G=!1;function K(e,t){const o=e.config[`${t}_name`]??"",i=e.config[`${t}_icon`]??"",a=e.config[`${t}_pir_sensor`],s=e.config[`${t}_link`],r=e.config[`${t}_entity`];G=G||location.hash===s;const l=(0,n.az)("ha-icon","bubble-icon icon");l.icon=i;const u=(0,n.az)("div","bubble-name name");u.innerText=o;const p=(0,n.az)("div","bubble-background-color background-color"),b=(0,n.az)("div","bubble-background background"),h=(0,n.az)("div",`bubble-button bubble-button-${t} button ${s.substring(1)}`);let m=localStorage.getItem(`bubbleButtonWidth-${s}`);return h.style.width=`${m}px`,h.appendChild(l),h.appendChild(u),h.appendChild(p),h.appendChild(b),h.addEventListener("click",(()=>{location.hash!==s&&(G=!1),G?c():d(s),G=!G,(0,n.jk)("light")})),h.icon=l,h.name=u,h.backgroundColor=p,h.background=b,h.pirSensor=a,h.lightEntity=r,h.link=s,h.index=t,window.addEventListener("location-changed",(function(){e.config.highlight_current_view&&(location.pathname===s||location.hash===s?h.classList.add("highlight"):h.classList.remove("highlight"))})),e.elements.buttons.push(h),h}const Z=1,Q=2,ee=8;function te(e,t){return function(e,t){return!(!e||void 0===e.supported_features)&&0!=(e.supported_features&t)}(e.attributes,t)}function ne(e,t){(0,n.OC)(e,"media_player")&&e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:(t/100).toFixed(2)})}function oe(e,t,n=!1){const o=e.elements.rangeSlider.getBoundingClientRect(),i=100*(t-o.left)/o.width,a=Math.round(Math.min(100,Math.max(0,i)));if(e.elements.rangeFill.style.transform=`translateX(${a}%)`,n){if(e.dragging)return;ne(e,a)}else ne(e,a)}(0,n.P2)(ne);const ie="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n\n    ha-card {\n        margin-top: 0;\n        background: none;\n        opacity: 1;\n        overflow: visible !important;\n    }\n    .is-unavailable {\n        opacity: 0.5;\n    }\n\n    .bubble-media-player-container {\n        position: relative;\n        width: 100%;\n        height: 50px;\n        background-color: var(--bubble-media-player-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n        touch-action: pan-y;\n        border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n        box-shadow: var(--bubble-media-player-box-shadow, var(--bubble-box-shadow, none));\n    }\n\n    .bubble-media-player {\n        display: flex;\n        position: absolute;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        transition: background-color 1.5s;\n        border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n        background-color: rgba(0,0,0,0);\n    }\n\n    .bubble-button-container {\n        display: inline-grid;\n        grid-auto-flow: column;\n        gap: 10px;\n        align-self: center;\n        margin-right: 8px;\n    }\n\n    .bubble-play-pause-button,\n    .bubble-previous-button,\n    .bubble-next-button,\n    .bubble-volume-button,\n    .bubble-power-button {\n        background: none;\n        border: none;\n        cursor: pointer;\n        border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, 32px));\n        padding: 6px;\n        height: 24px;\n        width: 24px;\n        transition: background 0.3s ease;\n        align-self: center;\n    }\n\n    .bubble-play-pause-button {\n        background-color: var(--bubble-accent-color, var(--accent-color));\n    }\n\n    .bubble-volume-slider {\n        position: absolute;\n        width: calc(100% - 150px);\n        height: 38px;\n        left: 50px;\n        overflow: hidden;\n        border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n        z-index: 1;\n        background-color: var(--bubble-media-player-slider-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n        opacity: 1;\n        transition: opacity .2s, transform .2s;\n        transform: translateX(0);\n    }\n\n    .bubble-range-value {\n        display: flex;\n        justify-content: flex-end;\n        height: 38px;\n        align-items: center;\n        padding-right: 14px;\n        font-size: 12px;\n        opacity: 0.8;\n    }\n\n    .bubble-mute-button {\n        opacity: 1;\n        transition: opacity .2s, transform .2s;\n        transform: translateX(0);\n    }\n\n    .is-hidden {\n        opacity: 0 !important;\n        pointer-events: none;\n        transform: translateX(14px);\n    }\n\n    .bubble-range-fill {\n        z-index: -1;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        left: -100%;\n        transition: all .3s;\n        background-color: var(--accent-color);\n    }\n\n    .is-dragging .bubble-range-fill {\n        transition: none;\n    }\n\n    .is-light .bubble-range-fill {\n        opacity: 0.5;\n    }\n\n    .is-unavailable .bubble-button-card {\n        cursor: not-allowed;\n    }\n\n    .bubble-range-slider {\n        cursor: ew-resize;\n    }\n    .is-unavailable .bubble-range-slider {\n        cursor: not-allowed;\n    }\n\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        width: 38px;\n        height: 38px;\n        min-width: 38px;\n        min-height: 38px;\n        align-items: center;\n        justify-content: center;\n        margin: 6px;\n        border-radius: var(--bubble-media-player-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n        background-color: var(--bubble-media-player-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));;\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n        pointer-events: auto;\n    }\n\n    .bubble-icon {\n        opacity: 0.6;\n    }\n\n    .is-on .bubble-icon {\n      filter: brightness(1.1);\n      opacity: 1;\n    }\n\n    .bubble-icon,\n    .bubble-mute-button {\n        display: flex;\n        position: absolute;\n        height: 38px;\n        width: 38px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .bubble-entity-picture {\n        background-size: cover;\n        background-position: center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n\n    .bubble-media-info-container {\n        display: flex;\n        line-height: 14px;\n        font-size: 12px;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        margin-left: 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-title,\n    .bubble-name,\n    .bubble-state,\n    .bubble-artist {\n        display: flex;\n        margin: 2px 0;\n        position: relative;\n        white-space: nowrap;\n    }\n\n    .bubble-title {\n        font-weight: 600;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 1em;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        font-weight: 600;\n        margin-left: 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        font-size: 13px;\n        margin: 2px 0;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        opacity: 0.7;\n        margin: 2px 0;\n        font-weight: normal;\n    }\n\n    .bubble-sub-button-container {\n        right: 0 !important;\n    }\n\n    .bubble-background-container {\n        display: flex;\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        border-radius: inherit;\n        overflow: hidden;\n    }\n\n    .bubble-cover-background {\n        display: flex;\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        background-size: cover;\n        background-position: 50%;\n        filter: blur(50px);\n        opacity: 0.5;\n    }\n\n    @media screen and (max-width: 250px) {\n        .bubble-previous-button {\n            display: none;\n        }\n    }\n\n    @media screen and (max-width: 206px) {\n        .bubble-next-button {\n            display: none;\n        }\n    }\n\n    @media screen and (max-width: 160px) {\n        .bubble-volume-button {\n            display: none;\n        }\n    }\n\n    @keyframes tap-feedback {\n        0% {transform: translateX(-100%); opacity: 0;}\n        64% {transform: translateX(0); opacity: 0.1;}\n        100% {transform: translateX(100%); opacity: 0;}\n    }\n\n    .large .bubble-media-player-container {\n      height: 56px;\n      border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 24px;\n      min-width: 42px !important;\n      min-height: 42px !important;\n      margin-left: 8px;\n    }\n    \n    .large .bubble-play-pause-button {\n      display: flex;\n      height: 42px;\n      width: 42px;\n      padding: 0;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .large .bubble-volume-slider {\n      height: 42px;\n      border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n      left: 60px;\n      width: calc(100% - 168px);\n    }\n\n    .large .bubble-range-value {\n      place-items: center;\n      height: 42px;\n    }\n\n    .large .bubble-button-container {\n      align-items: center;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(1, 1fr);\n      grid-template-rows: repeat(2, minmax(auto, max-content));\n      grid-auto-flow: column;\n      width: auto;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n";let ae;function se(e){"media-player"!==e.cardType&&function(e){e.dragging=!1,e.elements={},e.elements.mediaPlayerContainer=(0,n.az)("div","bubble-media-player-container"),e.elements.mediaPlayerCard=(0,n.az)("div","bubble-media-player"),e.elements.mediaInfoContainer=(0,n.az)("div","bubble-media-info-container"),e.elements.nameContainer=(0,n.az)("div","bubble-name-container"),e.elements.buttonContainer=(0,n.az)("div","bubble-button-container"),e.elements.iconContainer=(0,n.az)("div","bubble-icon-container"),e.elements.backgroundContainer=(0,n.az)("div","bubble-background-container"),e.elements.coverBackground=(0,n.az)("div","bubble-cover-background"),e.elements.playPauseButton=(0,n.az)("ha-icon","bubble-play-pause-button"),e.elements.previousButton=(0,n.az)("ha-icon","bubble-previous-button"),e.elements.previousButton.setAttribute("icon","mdi:skip-previous"),e.elements.nextButton=(0,n.az)("ha-icon","bubble-next-button"),e.elements.nextButton.setAttribute("icon","mdi:skip-next"),e.elements.volumeButton=(0,n.az)("ha-icon","bubble-volume-button"),e.elements.volumeButton.setAttribute("icon","mdi:volume-high"),e.elements.powerButton=(0,n.az)("ha-icon","bubble-power-button"),e.elements.powerButton.setAttribute("icon","mdi:power-standby"),e.elements.muteButton=(0,n.az)("ha-icon","bubble-mute-button is-hidden"),e.elements.muteButton.setAttribute("icon","mdi:volume-off"),e.elements.title=(0,n.az)("div","bubble-title"),e.elements.artist=(0,n.az)("div","bubble-artist"),e.elements.name=(0,n.az)("div","bubble-name"),e.elements.state=(0,n.az)("div","bubble-state"),e.elements.icon=(0,n.az)("ha-icon","bubble-icon"),e.elements.image=(0,n.az)("div","bubble-entity-picture"),e.elements.style=(0,n.az)("style"),e.elements.customStyle=(0,n.az)("style"),e.elements.style.innerText=ie,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.iconContainer.appendChild(e.elements.muteButton),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.mediaInfoContainer.appendChild(e.elements.title),e.elements.mediaInfoContainer.appendChild(e.elements.artist),e.elements.buttonContainer.appendChild(e.elements.powerButton),e.elements.buttonContainer.appendChild(e.elements.previousButton),e.elements.buttonContainer.appendChild(e.elements.nextButton),e.elements.buttonContainer.appendChild(e.elements.volumeButton),e.elements.buttonContainer.appendChild(e.elements.playPauseButton),e.elements.mediaPlayerCard.appendChild(e.elements.iconContainer),e.elements.mediaPlayerCard.appendChild(e.elements.mediaInfoContainer),e.elements.mediaPlayerCard.appendChild(e.elements.nameContainer),e.elements.mediaPlayerCard.appendChild(e.elements.buttonContainer),e.elements.backgroundContainer.appendChild(e.elements.coverBackground),e.elements.mediaPlayerContainer.appendChild(e.elements.backgroundContainer),e.content.innerHTML="",e.content.appendChild(e.elements.mediaPlayerContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.mediaPlayerContainer.appendChild(e.elements.mediaPlayerCard),i(e.elements.icon,e.config,e.config.entity),i(e.elements.image,e.config,e.config.entity),e.elements.volumeSliderContainer=(0,n.az)("div","bubble-volume-slider is-hidden"),function(e,t){let o=0;function i(t){t.stopPropagation();const n=t.pageX||(t.touches?t.touches[0].pageX:0);Math.abs(o-n)>10&&oe(e,n,!0);const i=e.elements.rangeSlider.getBoundingClientRect(),a=100*(n-i.left)/i.width,s=Math.min(100,Math.max(0,a));e.elements.rangeValue.innerText=Math.round(s)+"%"}function a(n){n.stopPropagation(),e.dragging=!1;const o=n.pageX||(n.touches?n.touches[0].pageX:0);oe(e,o),t.classList.remove("is-dragging"),t.removeEventListener("pointermove",i),t.removeEventListener("pointerup",a);const s=e.elements.rangeSlider.getBoundingClientRect(),r=100*(o-s.left)/s.width,l=Math.min(100,Math.max(0,r));e.elements.rangeValue.innerText=Math.round(l)+"%"}ae=Math.round(100*(0,n.IL)(e,"volume_level"))+"%",e.elements.rangeFill=(0,n.az)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,n.az)("div","bubble-range-slider range-slider"),e.elements.rangeValue=(0,n.az)("div","bubble-range-value"),e.elements.rangeSlider.appendChild(e.elements.rangeValue),e.elements.rangeSlider.appendChild(e.elements.rangeFill),t.appendChild(e.elements.rangeSlider),t.addEventListener("pointercancel",(function(){e.dragging=!1,t.classList.remove("is-dragging"),t.removeEventListener("pointermove",i),t.removeEventListener("pointerup",a)})),t.addEventListener("pointerdown",(n=>{t.setPointerCapture(n.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,o=n.pageX||(n.touches?n.touches[0].pageX:0),t.classList.add("is-dragging"),t.addEventListener("pointermove",i),t.addEventListener("pointerup",a))})),e.elements.rangeValue.innerText=ae}(e,e.elements.volumeSliderContainer),e.elements.mediaPlayerCard.appendChild(e.elements.volumeSliderContainer),e.elements.volumeButton.addEventListener("click",(()=>{e.elements.volumeSliderContainer.classList.toggle("is-hidden"),e.elements.muteButton.classList.toggle("is-hidden"),e.elements.icon.classList.toggle("is-hidden"),e.elements.image.classList.toggle("is-hidden"),function(e){const t=e.elements.volumeButton.isHidden,n=t?"1":"0",o=t?"mdi:volume-high":"mdi:close";e.elements.volumeButton.setAttribute("icon",o),e.elements.mediaInfoContainer.style.opacity=n,e.elements.nameContainer.style.opacity=n,e.elements.subButtonContainer&&(e.elements.subButtonContainer.style.opacity=n),e.elements.previousButton.style.opacity=n,e.elements.nextButton.style.opacity=n,e.elements.powerButton.style.opacity=n,e.elements.volumeButton.isHidden=!t}(e),ae=Math.round(100*(0,n.IL)(e,"volume_level"))+"%"})),e.elements.powerButton.addEventListener("click",(()=>{const t=(0,n.pr)(e);e._hass.callService("media_player",t?"turn_off":"turn_on",{entity_id:e.config.entity})})),e.elements.muteButton.addEventListener("click",(()=>{const t=!0===(0,n.IL)(e,"is_volume_muted");e._hass.callService("media_player","volume_mute",{entity_id:e.config.entity,is_volume_muted:!t}),e.elements.muteButton.clicked=!0})),e.elements.previousButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_previous_track",{entity_id:e.config.entity})})),e.elements.nextButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_next_track",{entity_id:e.config.entity})})),e.elements.playPauseButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_play_pause",{entity_id:e.config.entity}),e.elements.playPauseButton.clicked=!0})),e.elements.mediaPlayerContainer.addEventListener("click",(()=>(0,n.jk)("selection"))),e.cardType="media-player"}(e),function(e){"unavailable"===(0,n.y0)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable"),(0,n.pr)(e)?e.card.classList.add("is-on"):e.card.classList.remove("is-on")}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t=(0,n.oY)(e);t!==e.previousName&&(e.elements.name.innerText=t,e.previousName=t,(0,n.GP)(e,e.elements.name,t))}(e),function(e){const t=(0,n.IL)(e,"media_title"),o=(0,n.IL)(e,"media_artist"),i=t+o;i!==e.previousMediaState&&(e.elements.artist.style.display=""===o?"none":"flex",e.previousMediaState=i,(0,n.GP)(e,e.elements.title,t),(0,n.GP)(e,e.elements.artist,o))}(e),function(e){(0,n.IL)(e,"media_title");const t=""===(0,n.IL)(e,"media_artist");e.elements.mediaInfoContainer.style.display=t?"none":"",e.elements.nameContainer.style.display=t?"":"none"}(e),function(e){const t=(0,n.pr)(e),o=(0,n.q7)(e),i=(0,n.gJ)(e),a=e.elements.image.style.backgroundImage,s=e.elements.icon.icon,r=e.elements.icon.style.color;if(""!==i){const t="url("+i+")";a!==t&&(e.elements.image.style.backgroundImage=t),"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),""!==e.elements.image.style.display&&(e.elements.image.style.display="")}else if(""!==o){s!==o&&(e.elements.icon.icon=o);const n=t?"var(--accent-color)":"inherit";r!==n&&(e.elements.icon.style.color=n),""!==e.elements.icon.style.display&&(e.elements.icon.style.display=""),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}else"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}(e),function(e){const t=(0,n.pr)(e),o=(0,n.gJ)(e),i=e.config.cover_background,a=e.elements.coverBackground.style.backgroundImage;if(i&&t&&o){const t="url("+o+")";a!==t&&(e.elements.coverBackground.style.backgroundImage=t)}else""!==a&&(e.elements.coverBackground.style.backgroundImage="")}(e),M(e),function(e){if((0,n.OC)(e,"media_player")&&!1===e.dragging&&e.elements.rangeFill){const t=100*(0,n.IL)(e,"volume_level");e.elements.rangeFill.style.transform=`translateX(${t}%)`}}(e),function(e){const t="playing"===(0,n.y0)(e),o=e.elements.playPauseButton.clicked;t?e.elements.playPauseButton.setAttribute("icon",o?"mdi:play":"mdi:pause"):e.elements.playPauseButton.setAttribute("icon",o?"mdi:pause":"mdi:play"),e.elements.playPauseButton.clicked=!1}(e),function(e){const t=!0===(0,n.IL)(e,"is_volume_muted"),o=e.elements.muteButton.clicked;e.elements.muteButton.style.color=t?o?"":"var(--accent-color)":o?"var(--accent-color)":"",e.elements.muteButton.clicked=!1}(e),function(e){const t=(0,n.pr)(e);e.elements.powerButton.style.color=t?"var(--accent-color)":""}(e),D(e,e.content,e.elements.buttonContainer,!0),function(e){R(e),(0,n.jx)(e);const t=(0,n.y0)(e),o="off"!==t&&"unknown"!==t;if(e.config.hide?.power_button&&"none"!==e.elements.powerButton.style.display?e.elements.powerButton.style.display="none":e.config.hide?.power_button||"none"!==e.elements.powerButton.style.display||(e.elements.powerButton.style.display=""),!e.config.hide?.previous_button&&(e.editor||o)||"none"===e.elements.previousButton.style.display?e.config.hide?.previous_button||!e.editor&&!o||"none"!==e.elements.previousButton.style.display||(e.elements.previousButton.style.display=""):e.elements.previousButton.style.display="none",!e.config.hide?.next_button&&(e.editor||o)||"none"===e.elements.nextButton.style.display?e.config.hide?.next_button||!e.editor&&!o||"none"!==e.elements.nextButton.style.display||(e.elements.nextButton.style.display=""):e.elements.nextButton.style.display="none",!e.config.hide?.volume_button&&(e.editor||o)||"none"===e.elements.volumeButton.style.display?e.config.hide?.volume_button||!e.editor&&!o||"none"!==e.elements.volumeButton.style.display||(e.elements.volumeButton.style.display=""):e.elements.volumeButton.style.display="none",!e.config.hide?.play_pause_button&&(e.editor||o)||"none"===e.elements.playPauseButton.style.display?e.config.hide?.play_pause_button||!e.editor&&!o||"none"!==e.elements.playPauseButton.style.display||(e.elements.playPauseButton.style.display=""):e.elements.playPauseButton.style.display="none",!e.config.styles)return;let i="";try{i=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,n.X,e.card):""}catch(e){throw new Error(`Error in generating media player custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=i)}(e)}function re(e){let t="";const n=e._hass.states[e.config.entity],o=(n.attributes.current_temperature,n.attributes.hvac_action),i=n.state,a="heating"===o||"heat"===i&&e.config.state_color,s="cooling"===o||"cool"===i&&e.config.state_color,r="off"!==i&&"unknown"!==i;switch(i){case"fan_only":t="var(--bubble-state-climate-fan-only-color, var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color))))";break;case"dry":t="var(--bubble-state-climate-dry-color, var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color))))";break;default:t=s?"var(--bubble-state-climate-cool-color, var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color))))":a?"var(--bubble-state-climate-heat-color, var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color))))":r&&e.config.state_color?"auto"===i?"var(--bubble-state-climate-auto-color, var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color))))":"heat_cool"===i?"var(--bubble-state-climate-heat-cool-color, var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color))))":"var(--bubble-climate-accent-color, var(--bubble-accent-color, var(--accent-color)))":""}return t}const le=globalThis,ce=le.ShadowRoot&&(void 0===le.ShadyCSS||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol(),ue=new WeakMap;class pe{constructor(e,t,n){if(this._$cssResult$=!0,n!==de)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ce&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=ue.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ue.set(t,e))}return e}toString(){return this.cssText}}const be=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new pe(n,e,de)},he=(e,t)=>{if(ce)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),o=le.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=n.cssText,e.appendChild(t)}},me=ce?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new pe("string"==typeof e?e:e+"",void 0,de))(t)})(e):e,{is:ge,defineProperty:fe,getOwnPropertyDescriptor:_e,getOwnPropertyNames:ye,getOwnPropertySymbols:ve,getPrototypeOf:we}=Object,xe=globalThis,ke=xe.trustedTypes,Ce=ke?ke.emptyScript:"",$e=xe.reactiveElementPolyfillSupport,Se=(e,t)=>e,Le={toAttribute(e,t){switch(t){case Boolean:e=e?Ce:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},Ae=(e,t)=>!ge(e,t),Ee={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:Ae};Symbol.metadata??=Symbol("metadata"),xe.litPropertyMetadata??=new WeakMap;class Te extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&fe(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:i}=_e(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const a=o?.call(this);i.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ee}static _$Ei(){if(this.hasOwnProperty(Se("elementProperties")))return;const e=we(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Se("properties"))){const e=this.properties,t=[...ye(e),...ve(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(me(e))}else void 0!==e&&t.push(me(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return he(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:Le).toAttribute(t,n.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Le;this._$Em=o,this[o]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n,o=!1,i){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??Ae)(o?i:this[e],t))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},Te[Se("elementProperties")]=new Map,Te[Se("finalized")]=new Map,$e?.({ReactiveElement:Te}),(xe.reactiveElementVersions??=[]).push("2.0.2");const Oe=globalThis,ze=Oe.trustedTypes,Be=ze?ze.createPolicy("lit-html",{createHTML:e=>e}):void 0,Pe="$lit$",Ie=`lit$${(Math.random()+"").slice(9)}$`,Ve="?"+Ie,Ue=`<${Ve}>`,He=document,Me=()=>He.createComment(""),Ne=e=>null===e||"object"!=typeof e&&"function"!=typeof e,De=Array.isArray,je="[ \t\n\f\r]",Re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qe=/-->/g,Fe=/>/g,We=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Xe=/'/g,Ye=/"/g,Je=/^(?:script|style|textarea|title)$/i,Ge=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Ke=Ge(1),Ze=(Ge(2),Symbol.for("lit-noChange")),Qe=Symbol.for("lit-nothing"),et=new WeakMap,tt=He.createTreeWalker(He,129);function nt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Be?Be.createHTML(t):t}const ot=(e,t)=>{const n=e.length-1,o=[];let i,a=2===t?"<svg>":"",s=Re;for(let t=0;t<n;t++){const n=e[t];let r,l,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,l=s.exec(n),null!==l);)d=s.lastIndex,s===Re?"!--"===l[1]?s=qe:void 0!==l[1]?s=Fe:void 0!==l[2]?(Je.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=We):void 0!==l[3]&&(s=We):s===We?">"===l[0]?(s=i??Re,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?We:'"'===l[3]?Ye:Xe):s===Ye||s===Xe?s=We:s===qe||s===Fe?s=Re:(s=We,i=void 0);const u=s===We&&e[t+1].startsWith("/>")?" ":"";a+=s===Re?n+Ue:c>=0?(o.push(r),n.slice(0,c)+Pe+n.slice(c)+Ie+u):n+Ie+(-2===c?t:u)}return[nt(e,a+(e[n]||"<?>")+(2===t?"</svg>":"")),o]};class it{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,a=0;const s=e.length-1,r=this.parts,[l,c]=ot(e,t);if(this.el=it.createElement(l,n),tt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=tt.nextNode())&&r.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(Pe)){const t=c[a++],n=o.getAttribute(e).split(Ie),s=/([.?@])?(.*)/.exec(t);r.push({type:1,index:i,name:s[2],strings:n,ctor:"."===s[1]?ct:"?"===s[1]?dt:"@"===s[1]?ut:lt}),o.removeAttribute(e)}else e.startsWith(Ie)&&(r.push({type:6,index:i}),o.removeAttribute(e));if(Je.test(o.tagName)){const e=o.textContent.split(Ie),t=e.length-1;if(t>0){o.textContent=ze?ze.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],Me()),tt.nextNode(),r.push({type:2,index:++i});o.append(e[t],Me())}}}else if(8===o.nodeType)if(o.data===Ve)r.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(Ie,e+1));)r.push({type:7,index:i}),e+=Ie.length-1}i++}}static createElement(e,t){const n=He.createElement("template");return n.innerHTML=e,n}}function at(e,t,n=e,o){if(t===Ze)return t;let i=void 0!==o?n._$Co?.[o]:n._$Cl;const a=Ne(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(e),i._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=i:n._$Cl=i),void 0!==i&&(t=at(e,i._$AS(e,t.values),i,o)),t}class st{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??He).importNode(t,!0);tt.currentNode=o;let i=tt.nextNode(),a=0,s=0,r=n[0];for(;void 0!==r;){if(a===r.index){let t;2===r.type?t=new rt(i,i.nextSibling,this,e):1===r.type?t=new r.ctor(i,r.name,r.strings,this,e):6===r.type&&(t=new pt(i,this,e)),this._$AV.push(t),r=n[++s]}a!==r?.index&&(i=tt.nextNode(),a++)}return tt.currentNode=He,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class rt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=Qe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=at(this,e,t),Ne(e)?e===Qe||null==e||""===e?(this._$AH!==Qe&&this._$AR(),this._$AH=Qe):e!==this._$AH&&e!==Ze&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>De(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Qe&&Ne(this._$AH)?this._$AA.nextSibling.data=e:this.$(He.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=it.createElement(nt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new st(o,this),n=e.u(this.options);e.p(t),this.$(n),this._$AH=e}}_$AC(e){let t=et.get(e.strings);return void 0===t&&et.set(e.strings,t=new it(e)),t}T(e){De(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const i of e)o===t.length?t.push(n=new rt(this.k(Me()),this.k(Me()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=Qe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Qe}_$AI(e,t=this,n,o){const i=this.strings;let a=!1;if(void 0===i)e=at(this,e,t,0),a=!Ne(e)||e!==this._$AH&&e!==Ze,a&&(this._$AH=e);else{const o=e;let s,r;for(e=i[0],s=0;s<i.length-1;s++)r=at(this,o[n+s],t,s),r===Ze&&(r=this._$AH[s]),a||=!Ne(r)||r!==this._$AH[s],r===Qe?e=Qe:e!==Qe&&(e+=(r??"")+i[s+1]),this._$AH[s]=r}a&&!o&&this.O(e)}O(e){e===Qe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ct extends lt{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Qe?void 0:e}}class dt extends lt{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Qe)}}class ut extends lt{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=at(this,e,t,0)??Qe)===Ze)return;const n=this._$AH,o=e===Qe&&n!==Qe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==Qe&&(n===Qe||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class pt{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){at(this,e)}}const bt=Oe.litHtmlPolyfillSupport;bt?.(it,rt),(Oe.litHtmlVersions??=[]).push("3.1.0");class ht extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const o=n?.renderBefore??t;let i=o._$litPart$;if(void 0===i){const e=n?.renderBefore??null;o._$litPart$=i=new rt(t.insertBefore(Me(),e),e,void 0,n??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ze}}ht._$litElement$=!0,ht.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ht});const mt=globalThis.litElementPolyfillSupport;mt?.({LitElement:ht}),(globalThis.litElementVersions??=[]).push("4.0.2"),customElements.define("bubble-card-editor",class extends ht{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config?.card_type||""}get _button_type(){return this._config?.button_type||("pop-up"===this._config?.card_type?"":"switch")}get _entity(){return this._config?.entity||""}get _name(){return this._config?.name||""}get _icon(){return this._config?.icon||""}get _state(){return this._config?.state||""}get _text(){return this._config?.text||""}get _hash(){return this._config?.hash||"#pop-up-name"}get _trigger_entity(){return this._config?.trigger_entity||""}get _trigger_state(){return this._config?.trigger_state||""}get _trigger_close(){return this._config?.trigger_close||!1}get _margin(){return this._config?.margin||"7px"}get _margin_top_mobile(){return this._config?.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config?.margin_top_desktop||"0px"}get _width_desktop(){return this._config?.width_desktop||"540px"}get _bg_color(){return this._config?.bg_color||""}get _bg_opacity(){return void 0!==this._config?.bg_opacity?this._config?.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config?.bg_blur?this._config?.bg_blur:"10"}get _backdrop_blur(){return void 0!==this._config?.backdrop_blur?this._config?.backdrop_blur:"0"}get _shadow_opacity(){return void 0!==this._config?.shadow_opacity?this._config?.shadow_opacity:"0"}get _rise_animation(){return void 0===this._config?.rise_animation||this._config?.rise_animation}get _auto_close(){return this._config?.auto_close||""}get _close_on_click(){return this._config?.close_on_click||!1}get _close_by_clicking_outside(){return this._config?.close_by_clicking_outside??!0}get _background_update(){return this._config?.background_update||!1}get _icon_open(){return this._config?.icon_open||""}get _icon_close(){return this._config?.icon_close||""}get _icon_down(){return this._config?.icon_down||""}get _icon_up(){return this._config?.icon_up||""}get _open_service(){return this._config?.open_service||"cover.open_cover"}get _close_service(){return this._config?.close_service||"cover.close_cover"}get _stop_service(){return this._config?.stop_service||"cover.stop_cover"}get _auto_order(){return this._config?.auto_order||!1}get _highlight_current_view(){return this._config?.highlight_current_view||!1}get _show_state(){const e="state"===this._config?.card_type;return this._config?.show_state||e}get _show_attribute(){const e="state"===this._config.card_type;return this._config.show_attribute||e}get _show_last_changed(){const e="state"===this._config.card_type;return this._config.show_last_changed||this._config.show_last_updated||e}get _attribute(){return this._config.attribute||!1}get _hide_backdrop(){return this._config.hide_backdrop??!1}get _hide_gradient(){return this._config.hide_gradient||!1}get _hide_play_pause_button(){return this._config.hide?.play_pause_button||!1}get _hide_next_button(){return this._config.hide?.next_button||!1}get _hide_previous_button(){return this._config.hide?.previous_button||!1}get _hide_volume_button(){return this._config.hide?.volume_button||!1}get _hide_power_button(){return this._config.hide?.power_button||!1}get _sub_button(){return this._config.sub_button||""}get _button_action(){return this._config.button_action||""}get _open_action(){return this._config.open_action||""}get _close_action(){return this._config.close_action||""}get _show_header(){return this._config.show_header??!0}get _slide_to_close_distance(){return this._config.slide_to_close_distance??400}get _slider_live_update(){return this._config.slider_live_update??!1}get _cover_background(){return this._config.cover_background??!1}get _tap_action(){return{action:this._config.tap_action?.action||"more-info",navigation_path:this._config.tap_action?.navigation_path||"",url_path:this._config.tap_action?.url_path||"",service:this._config.tap_action?.service||"",target_entity:this._config.tap_action?.target?.entity_id||"",data:this._config.tap_action?.data||""}}get _double_tap_action(){return{action:this._config.double_tap_action?.action||"toggle",navigation_path:this._config.double_tap_action?.navigation_path||"",url_path:this._config.double_tap_action?.url_path||"",service:this._config.double_tap_action?.service||"",target_entity:this._config.double_tap_action?.target?.entity_id||"",data:this._config.double_tap_action?.data||""}}get _hold_action(){return{action:this._config.hold_action?.action||"toggle",navigation_path:this._config.hold_action?.navigation_path||"",url_path:this._config.hold_action?.url_path||"",service:this._config.hold_action?.service||"",target_entity:this._config.hold_action?.target?.entity_id||"",data:this._config.hold_action?.data||""}}get _selectable_attributes(){return["source_list","sound_mode_list","hvac_modes","fan_modes","swing_modes","preset_modes","effect_list"]}render(){if(!this.hass)return Ke``;const t=document.querySelector("body > home-assistant");if(t?.shadowRoot){const a=t.shadowRoot,s=a.querySelector("hui-dialog-edit-card")?.shadowRoot;if(s){const r=s.querySelector("ha-dialog > div.content > div.element-preview");if(!r)return;"sticky"!==r.style.position&&(r.style.position="sticky",r.style.top="0")}}if(!this.listsUpdated){const l=e=>({label:e,value:e});this.allEntitiesList=Object.keys(this.hass.states).map(l),this.lightList=Object.keys(this.hass.states).filter((e=>"light"===e.substr(0,e.indexOf(".")))).map(l),this.sensorList=Object.keys(this.hass.states).filter((e=>"sensor"===e.substr(0,e.indexOf(".")))).map(l),this.binarySensorList=Object.keys(this.hass.states).filter((e=>"binary_sensor"===e.substr(0,e.indexOf(".")))).map(l),this.coverList=Object.keys(this.hass.states).filter((e=>"cover"===e.substr(0,e.indexOf(".")))).map(l),this.mediaPlayerList=Object.keys(this.hass.states).filter((e=>"media_player"===e.substr(0,e.indexOf(".")))).map(l),this.climateList=Object.keys(this.hass.states).filter((e=>"climate"===e.substr(0,e.indexOf(".")))).map(l),this.inputSelectList=Object.keys(this.hass.states).filter((e=>{const t=this.hass.states[e],n=e.substr(0,e.indexOf(".")),o="input_select"===n||"select"===n,i=this._selectable_attributes.some((e=>t.attributes?.[e]));return o||i})).map(l),this.inputSelectList2={states:{},locale:this.hass.locale,localize:this.hass.localize,entities:this.hass.entities},this.inputSelectList.forEach((e=>{const t=e.label||e,n=this.hass.states[t];n&&(this.inputSelectList2.states[t]=n)})),this.attributeList=Object.keys(this.hass.states[this._entity]?.attributes||{}).map((e=>{let t=this.hass.states[this._entity];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})),this.cardTypeList=[{label:"Button (Switch, slider, ...)",value:"button"},{label:"Cover",value:"cover"},{label:"Climate",value:"climate"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Media player",value:"media-player"},{label:"Pop-up",value:"pop-up"},{label:"Select",value:"select"},{label:"Separator",value:"separator"}],this.buttonTypeList=[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}],this.tapActionTypeList=[{label:"More info",value:"more-info"},{label:"Toggle",value:"toggle"},{label:"Navigate",value:"navigate"},{label:"URL",value:"url"},{label:"Call service",value:"call-service"},{label:"Assist",value:"assist"},{label:"No action",value:"none"}],this.listsUpdated=!0}this.allEntitiesList,this.lightList,this.sensorList,this.coverList;const n=this.cardTypeList,o=this.buttonTypeList,i="name"===this._config?.button_type;if("pop-up"===this._config?.card_type){const c=this._config?.trigger??[];return Ke`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
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
                                ${this.makeDropdown("Button type","button_type",o)}
                                <ha-form
                                    .hass=${this.hass}
                                    .data=${this._config}
                                    .schema=${[{name:"entity",label:"Optional - Entity",selector:{entity:{}}}]}   
                                    .computeLabel=${this._computeLabelCallback}
                                    .disabled="${i}"
                                    @value-changed=${this._valueChanged}
                                ></ha-form>
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
                                        ${this.makeActionPanel("Tap action")}
                                        ${this.makeActionPanel("Double tap action")}
                                        ${this.makeActionPanel("Hold action")}
                                    </div>
                                </ha-expansion-panel>
                                <ha-expansion-panel outlined style="display: ${"slider"===this._config.button_type?"none":""}">
                                    <h4 slot="header">
                                      <ha-icon icon="mdi:gesture-tap"></ha-icon>
                                      Tap action on button
                                    </h4>
                                    <div class="content">
                                        ${this.makeActionPanel("Tap action",this._button_action,"name"!==this._config.button_type?"state"===this._config.button_type?"more-info":"toggle":"none","button_action")}
                                        ${this.makeActionPanel("Double tap action",this._button_action,"name"!==this._config.button_type?"state"===this._config.button_type?"more-info":"toggle":"none","button_action")}
                                        ${this.makeActionPanel("Hold action",this._button_action,"name"!==this._config.button_type?"more-info":"none","button_action")}
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
                            <ha-textfield
                                label="Optional - Slide to close distance (default to 400)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                step="10"
                                .value="${this._slide_to_close_distance}"
                                .configValue="${"slide_to_close_distance"}"
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
                            <ha-card-conditions-editor
                                .hass=${this.hass}
                                .conditions=${c}
                                @value-changed=${e=>this._conditionChanged(e)}
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
                            ${this.makeActionPanel("Open action",this._config,"none")}
                            ${this.makeActionPanel("Close action",this._config,"none")}
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
                                        label="Optional - Background blur (0-100 range)"
                                        type="number"
                                        inputMode="numeric"
                                        min="0"
                                        max="100"
                                        .value="${this._bg_blur}"
                                        .configValue="${"bg_blur"}"
                                        @input="${this._valueChanged}"
                                    ></ha-textfield>
                                    <ha-textfield
                                        label="Optional - Backdrop blur (0-100 range)"
                                        type="number"
                                        inputMode="numeric"
                                        min="0"
                                        max="100"
                                        .value="${this._backdrop_blur}"
                                        .configValue="${"backdrop_blur"}"
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
                                    <ha-alert alert-type="warning">Set this toggle to true on the first pop-up of your main dashboard to hide the darker backdrop behind all pop-ups. <b>You can add a blurred effect to it by changing <code>Optional - Backdrop blur</code> just below, but be aware that this can slow down your dashboard when opening pop-ups. It is now set to 0 for that reason.</b></ha-alert>
                                </div>
                            </ha-expansion-panel>
                            ${this.makeStyleEditor()}
                        </div>
                    </ha-expansion-panel>
                    <ha-alert alert-type="info">
                        This card allows you to convert any vertical stack into a pop-up. Each pop-up is hidden by default and can be opened by targeting its link (e.g., '#pop-up-name'), with <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#example">any card</a> that supports the <code>navigate</code> action, or with the <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#horizontal-buttons-stack">horizontal buttons stack</a> that is included.
                        <br><br><b>Important:</b> This card must be placed within a <a style="color: var(--text-primary-color)" href="https://www.home-assistant.io/dashboards/vertical-stack/">vertical stack</a> card at the topmost position to function properly. To avoid misalignment with your view, place vertical stacks/pop-ups after all other dashboard cards. It should be called from the same view to work. 
                        <br><br><b>You can also watch this <a style="color: var(--text-primary-color)" href="https://www.youtube.com/watch?v=7mOV7BfWoFc">video</a> that explains how to create your first pop-up.</b>
                    </ha-alert>
                    <ha-alert alert-type="warning">Since v1.7.0, the optimized mode has been removed to ensure stability and to simplify updates for everyone. However, if your pop-up content still appears on the screen during page loading, <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#pop-up-initialization-fix">you can install this similar fix.</a></ha-alert>
                    ${this.makeVersion()}
              </div>
            `}if("button"===this._config?.card_type){let d={};return"slider"===this._button_type&&(d={domain:["light","media_player","cover","input_number"]}),Ke`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    ${this.makeDropdown("Button type","button_type",o)}
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config}
                        .schema=${[{name:"entity",label:"slider"!==this._button_type?"Entity (toggle)":"Entity (light, media_player, cover or input_number)",selector:{entity:d}}]}   
                        .computeLabel=${this._computeLabelCallback}
                        .disabled="${i}"
                        @value-changed=${this._valueChanged}
                    ></ha-form>
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
                            <ha-formfield .label="Optional - Slider live update" style="display: ${"slider"!==this._button_type?"none":""}">
                                <ha-switch
                                    aria-label="Optional - Slider live update"
                                    .checked=${this._slider_live_update}
                                    .configValue="${"slider_live_update"}"
                                    @change=${this._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Slider live update</label> 
                                </div>
                            </ha-formfield>
                            <ha-alert style="display: ${"slider"!==this._button_type?"none":""}" alert-type="info">By default, sliders are updated only on release. You can toggle this option to enable live updates while sliding.</ha-alert>
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                          Tap action on icon
                        </h4>
                        <div class="content">
                            ${this.makeActionPanel("Tap action")}
                            ${this.makeActionPanel("Double tap action")}
                            ${this.makeActionPanel("Hold action")}
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined style="display: ${"slider"===this._config.button_type?"none":""}">
                        <h4 slot="header">
                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                          Tap action on button
                        </h4>
                        <div class="content">
                            ${this.makeActionPanel("Tap action",this._button_action,"name"!==this._config.button_type?"state"===this._config.button_type?"more-info":"toggle":"none","button_action")}
                            ${this.makeActionPanel("Double tap action",this._button_action,"name"!==this._config.button_type?"state"===this._config.button_type?"more-info":"toggle":"none","button_action")}
                            ${this.makeActionPanel("Hold action",this._button_action,"name"!==this._config.button_type?"more-info":"none","button_action")}
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
            `}if("separator"===this._config?.card_type)return Ke`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
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
            `;if("horizontal-buttons-stack"===this._config?.card_type){if(!this.buttonAdded)for(this.buttonAdded=!0,this.buttonIndex=0;this._config[this.buttonIndex+1+"_link"];)this.buttonIndex++;function u(){this.buttonIndex++,this.requestUpdate()}return Ke`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    <div id="buttons-container">
                        ${this.makeButton()}
                    </div>
                    <button class="icon-button" @click="${u}">
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
            `}if("cover"===this._config?.card_type)return Ke`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config}
                        .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["cover"]}}}]}   
                        .computeLabel=${this._computeLabelCallback}
                        @value-changed=${this._valueChanged}
                    ></ha-form>
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
                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                          Tap action on icon
                        </h4>
                        <div class="content">
                            ${this.makeActionPanel("Tap action")}
                            ${this.makeActionPanel("Double tap action")}
                            ${this.makeActionPanel("Hold action")}
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
                    ${this.makeSubButtonPanel()}
                    <ha-alert alert-type="info">This card allows you to control your covers.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `;if("media-player"===this._config?.card_type)return Ke`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config}
                        .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["media_player"]}}}]}   
                        .computeLabel=${this._computeLabelCallback}
                        @value-changed=${this._valueChanged}
                    ></ha-form>
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
                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                          Tap action on icon
                        </h4>
                        <div class="content">
                            ${this.makeActionPanel("Tap action")}
                            ${this.makeActionPanel("Double tap action")}
                            ${this.makeActionPanel("Hold action")}
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
                                  Media player styling
                                </h4>
                                <div class="content"> 
                                    <ha-formfield .label="Optional - Blurred media cover in background">
                                        <ha-switch
                                            aria-label="Optional - Blurred media cover in background"
                                            .checked=${this._cover_background}
                                            .configValue="${"cover_background"}"
                                            @change=${this._valueChanged}
                                        ></ha-switch>
                                        <div class="mdc-form-field">
                                            <label class="mdc-label">Optional - Blurred media cover in background</label> 
                                        </div>
                                    </ha-formfield>
                                </div>
                            </ha-expansion-panel>
                            ${this.makeStyleEditor()}
                        </div>
                    </ha-expansion-panel>
                    ${this.makeSubButtonPanel()}
                    <ha-alert alert-type="info">This card allows you to control a media player. You can tap on the icon to get more control.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `;if("empty-column"===this._config?.card_type)return Ke`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
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
            `;if("select"===this._config?.card_type){const p=this._config.entity,b=(p?.startsWith("input_select")||p?.startsWith("select")||this._config.select_attribute,this.hass.states[p]?.attributes),h=this._selectable_attributes.some((e=>b?.[e])),m=Object.keys(this.hass.states[p]?.attributes||{}).map((e=>{let t=this.hass.states[p];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})).filter((e=>this._selectable_attributes.includes(e.value)));return Ke`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    <ha-form
                        .hass=${this.inputSelectList2}
                        .data=${this._config}
                        .schema=${[{name:"entity",label:"Entity",selector:{entity:{}}}]}   
                        .computeLabel=${this._computeLabelCallback}
                        @value-changed=${this._valueChanged}
                    ></ha-form>
                    ${h?Ke`
                        <div class="ha-combo-box">
                            <ha-combo-box
                                label="Select menu (from attributes)"
                                .value="${this._config.select_attribute}"
                                .items="${m}"
                                .configValue="${"select_attribute"}"
                                @value-changed="${this._valueChanged}"
                            ></ha-combo-box>
                        </div>
                    `:""}
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
                            ${this.makeActionPanel("Tap action")}
                            ${this.makeActionPanel("Double tap action")}
                            ${this.makeActionPanel("Hold action")}
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
                    <ha-alert alert-type="info">
                      This card allows you to have a select menu for your 
                      <code>input_select</code>, <code>select</code> entities, and 
                      any other entities that have attribute lists like 
                      <code>source_list</code>, <code>sound_mode_list</code>, 
                      <code>hvac_modes</code>, <code>fan_modes</code>, 
                      <code>swing_modes</code>, <code>preset_modes</code>, or 
                      <code>effect_list</code>.
                    </ha-alert>
                    ${this.makeVersion()}
                </div>
            `}if("climate"===this._config?.card_type){if("climate"===this._config.card_type&&!this.climateSubButtonsAdded&&this._config.entity){const g=this.hass.states[this._config.entity]?.attributes?.hvac_modes;this._config.sub_button&&0!==this._config.sub_button.length||(this._config.sub_button=[g?{name:"HVAC modes menu",select_attribute:"hvac_modes",state_background:!1,show_arrow:!1}:null].filter(Boolean)),this.climateSubButtonsAdded=!0}return Ke`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config}
                        .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["climate"]}}}]}   
                        .computeLabel=${this._computeLabelCallback}
                        @value-changed=${this._valueChanged}
                    ></ha-form>
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:cog"></ha-icon>
                          Climate settings
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
                            ${this.hass.states[this._config.entity]?.attributes?.target_temp_low?Ke`
                                <ha-formfield .label="Optional - Hide target temp low">
                                    <ha-switch
                                        aria-label="Optional - Hide target temp low"
                                        .checked=${this._config.hide_target_temp_low}
                                        .configValue="${"hide_target_temp_low"}"
                                        @change=${this._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Optional - Hide target temp low</label> 
                                    </div>
                                </ha-formfield>
                            `:""}
                            ${this.hass.states[this._config.entity]?.attributes?.target_temp_high?Ke`
                                <ha-formfield .label="Optional - Hide target temp high">
                                    <ha-switch
                                        aria-label="Optional - Hide target temp high"
                                        .checked=${this._config.hide_target_temp_high}
                                        .configValue="${"hide_target_temp_high"}"
                                        @change=${this._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Optional - Hide target temp high</label> 
                                    </div>
                                </ha-formfield>
                            `:""}
                            <ha-formfield .label="Optional - Constant background color when ON">
                                <ha-switch
                                    aria-label="Optional - Constant background color when ON"
                                    .checked=${!0===this._config.state_color}
                                    .configValue="${"state_color"}"
                                    @change=${this._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Constant background color when ON</label> 
                                </div>
                            </ha-formfield>
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                          Tap action on icon
                        </h4>
                        <div class="content">
                            ${this.makeActionPanel("Tap action")}
                            ${this.makeActionPanel("Double tap action")}
                            ${this.makeActionPanel("Hold action")}
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
                    <ha-alert alert-type="info">This card allows you to control your climate entities. You can also add a sub-button that display a select menu for your climate modes (check if you have "Select menu" available when you create a new sub-button).</ha-alert>
                    ${this.makeVersion()}
                </div>
            `}return this._config?.card_type?void 0:Ke`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    <ha-alert alert-type="info">You need to add a card type first. Please note that in some cases, a page refresh might be needed after exiting the editor.</ha-alert>
                    <img style="width: 100%; height: auto; border-radius: 24px;" src="https://raw.githubusercontent.com/Clooos/Bubble-Card/main/.github/bubble-card.gif">
                    <p>The <b>Bubble Card ${e}</b> changelog is available <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${e}"><b>here</b></a>.</p>
                    <hr />
                    <p>If you have an issue or a question you can find more details in the GitHub documentation. You can also find useful resources and help in these links.</p>
                    <div style="display: inline-block;">
                        <a href="https://github.com/Clooos/Bubble-Card"><img src="https://img.shields.io/badge/GitHub-Documentation-blue?logo=github"></a>
                        <a href="https://www.youtube.com/@cloooos"><img src="https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube"></a>
                        <a href="https://www.reddit.com/r/BubbleCard/"><img src="https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit"></a>
                        <a href="https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678"><img src="https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant"></a>
                    </div>
                    <hr />
                    <p>I dedicate most of my spare time to making this project the best it can be. So if you appreciate my work, any donation would be a great way to show your support.</p>
                    <div style="display: inline-block;">
                        <a href="https://www.buymeacoffee.com/clooos"><img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?logo=buy-me-a-coffee"></a> 
                        <a href="https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR"><img src="https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal"></img></a>
                    </div>
                    <p>Looking for more advanced examples? Check out my <a href="https://www.patreon.com/Clooos"><b>Patreon</b></a> for exclusive custom styles and templates!</p>
                    <a href="https://www.patreon.com/Clooos"><img src="https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon"></a>
                    <p style="margin-top: 0;">Thank you! 🍻</p>
                    ${this.makeVersion()}
                </div>
            `}makeLayoutOptions(){return Ke`
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
        `}makeShowState(e=this._config,t="",n=!1,o){const i=e?.entity??this._config.entity??"",a="name"===this._config.button_type,s=i?.startsWith("input_select")||i?.startsWith("select")||e.select_attribute,r=Object.keys(this.hass.states[i]?.attributes||{}).map((e=>{let t=this.hass.states[i];return{label:this.hass.formatEntityAttributeName(t,e),value:e}}));return Ke`
            ${"sub_button"!==n?Ke`
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
            ${"sub_button"===n?Ke`
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
            ${"sub_button"===n&&(e?.show_background??1)?Ke`
                <ha-formfield .label="Optional - Background color based on state">
                    <ha-switch
                        aria-label="Optional - Background color based on state"
                        .checked=${e?.state_background??!0}
                        @change="${e=>this._arrayValueChange(o,{state_background:e.target.checked},n)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Background color based on state</label> 
                    </div>
                </ha-formfield>
            `:""}
            ${"sub_button"===n&&(e?.state_background??1)&&i.startsWith("light")?Ke`
                <ha-formfield .label="Optional - Background color based on light color">
                    <ha-switch
                        aria-label="Optional - Background color based on light color"
                        .checked=${e?.light_background??!0}
                        @change="${e=>this._arrayValueChange(o,{light_background:e.target.checked},n)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Background color based on light color</label> 
                    </div>
                </ha-formfield>
            `:""}
            ${"sub_button"!==n&&i.startsWith("light")?Ke`
                <ha-formfield .label="Optional - Use accent color instead of light color">
                    <ha-switch
                        aria-label="Optional - Use accent color instead of light color"
                        .checked=${e?.use_accent_color??!1}
                        .configValue="${t+"use_accent_color"}"
                        @change="${this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Use accent color instead of light color</label> 
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
            ${"sub_button"!==n?Ke`
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
            ${e?.show_attribute?Ke`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="Optional - Attribute to show"
                        .value="${e?.attribute}"
                        .configValue="${t+"attribute"}"
                        .items="${r}"
                        .disabled="${a}"
                        @value-changed="${n?e=>this._arrayValueChange(o,{attribute:e.detail.value},n):this._valueChanged}"
                    ></ha-combo-box>
                </div>
            `:""}
            ${"sub_button"===n&&s?Ke`
                <ha-formfield .label="Optional - Show arrow (Select entities only)">
                    <ha-switch
                        aria-label="Optional - Show arrow (Select entities only)"
                        .checked=${e?.show_arrow??!0}
                        .configValue="${t+"show_arrow"}"
                        @change="${n?e=>this._arrayValueChange(o,{show_arrow:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show arrow (Select menu only)</label> 
                    </div>
                </ha-formfield>
            `:""}
        `}makeDropdown(e,t,n,o){return e.includes("icon")||e.includes("Icon")?Ke`
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
            `:Ke`
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
          `}makeActionPanel(e,t=this._config,n,o,i=this._config){const a="Tap action"===e?"mdi:gesture-tap":"Double tap action"===e?"mdi:gesture-double-tap":"Hold action"===e?"mdi:gesture-tap-hold":"mdi:gesture-tap",s="Tap action"===e?"tap_action":"Double tap action"===e?"double_tap_action":"Hold action"===e?"hold_action":"Open action"===e?"open_action":"close_action",r=t===this._config;return n||(n=r&&"Tap action"===e?"name"!==this._config.button_type?"more-info":"none":r?"name"!==this._config.button_type?"toggle":"none":""),Ke`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="${a}"></ha-icon>
                    ${e}
                </h4>
                <div class="content"> 
                    <ha-form
                        .hass=${this.hass}
                        .data=${t}
                        .schema=${[{name:s,selector:{ui_action:{default_action:n}}}]}   
                        .computeLabel=${this._computeLabelCallback}
                        @value-changed=${e=>this._ActionChanged(e,o,i)}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
        `}makeSubButtonPanel(){const e=this._config?.sub_button?.map(((e,t)=>{if(!e)return;const n="sub_button."+t+".";e.entity=e.entity??this._config.entity;let o=e.entity;const i=o?.startsWith("input_select")||o?.startsWith("select")||e.select_attribute,a=this.hass.states[o]?.attributes,s=this._selectable_attributes.some((e=>a?.[e])),r=Object.keys(this.hass.states[o]?.attributes||{}).map((e=>{let t=this.hass.states[o];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})).filter((e=>this._selectable_attributes.includes(e.value))),l=e.visibility??[];return Ke`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:border-radius"></ha-icon>
                    ${this._config.sub_button[t]?"Button "+(t+1)+(e.name?" - "+e.name:""):"New button"}
                    <button class="icon-button header" @click="${n=>{n.stopPropagation();let o=[...this._config.sub_button];o.splice(t,1),this._config.sub_button=o,this._valueChanged({target:{configValue:"sub_button."+(t-1),value:e}}),this.requestUpdate()}}">
                      <ha-icon icon="mdi:delete"></ha-icon>
                    </button>
                    ${t>0?Ke`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t>0){let e=[...this._config.sub_button];[e[t],e[t-1]]=[e[t-1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
                      <ha-icon icon="mdi:arrow-left"></ha-icon>
                    </button>`:""}
                    ${t<this._config.sub_button.length-1?Ke`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t<this._config.sub_button.length-1){let e=[...this._config.sub_button];[e[t],e[t+1]]=[e[t+1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
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
                            <ha-form
                                .hass=${this.hass}
                                .data=${e}
                                .schema=${[{name:"entity",label:"Optional - Entity (default to card entity)",selector:{entity:{}}}]}   
                                .computeLabel=${this._computeLabelCallback}
                                @value-changed=${e=>this._arrayValueChange(t,{entity:e.detail.value},"sub_button")}
                            ></ha-form>
                            ${s?Ke`
                                <div class="ha-combo-box">
                                    <ha-combo-box
                                        label="Optional - Select menu (from attributes)"
                                        .value="${e.select_attribute}"
                                        .items="${r}"
                                        @value-changed="${e=>this._arrayValueChange(t,{select_attribute:e.detail.value},"sub_button")}"
                                    ></ha-combo-box>
                                </div>
                            `:""}
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
                            ${this.makeActionPanel("Tap action",e,"more-info","sub_button",t)}
                            ${this.makeActionPanel("Double tap action",e,"none","sub_button",t)}
                            ${this.makeActionPanel("Hold action",e,"none","sub_button",t)}
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:eye"></ha-icon>
                        Visibility
                        </h4>
                        <div class="content">
                            <ha-card-conditions-editor
                                .hass=${this.hass}
                                .conditions=${l}
                                @value-changed=${e=>this._conditionChanged(e,t,"sub_button")}
                            >
                            </ha-card-conditions-editor>
                            <ha-alert alert-type="info">
                                The sub-button will be shown when ALL conditions are fulfilled. If no conditions are set, the sub-button will always be shown.
                            </ha-alert>
                        </div>
                    </ha-expansion-panel>
                </div>
            </ha-expansion-panel>
        `}));return Ke`
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
            <ha-alert alert-type="info">
                Add new customized buttons fixed to the right. 
                These buttons can also display a select menu for your 
                <code>input_select</code>, <code>select</code> entities, and 
                any other entities that have attribute lists like 
                <code>source_list</code>, <code>sound_mode_list</code>, 
                <code>hvac_modes</code>, <code>fan_modes</code>, 
                <code>swing_modes</code>, <code>preset_modes</code>, or 
                <code>effect_list</code>.
            </ha-alert>
          </div>
        </ha-expansion-panel>
      `}makeButton(){let e=[];for(let t=1;t<=this.buttonIndex;t++)e.push(Ke`
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
                            <ha-form
                                .hass=${this.hass}
                                .data=${this._config}
                                .schema=${[{name:t+"_entity",label:"Optional - Light / Light group (For background color)",selector:{entity:{}}}]}   
                                .computeLabel=${this._computeLabelCallback}
                                @value-changed=${this._valueChanged}
                            ></ha-form>
                            <ha-form
                                .hass=${this.hass}
                                .data=${this._config}
                                .schema=${[{name:t+"_pir_sensor",label:"Optional - Presence / Occupancy sensor (For button auto order)",selector:{entity:{}}}]}   
                                .computeLabel=${this._computeLabelCallback}
                                @value-changed=${this._valueChanged}
                            ></ha-form>
                            <ha-alert alert-type="info">In fact you can also get the auto order with any entity type, for example you can add light groups to these fields and the order will change based on the last changed states.</ha-alert>
                        </div>
                    </ha-expansion-panel>
                </div>
            `);return e}makeVersion(){return Ke`
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
        `}removeButton(e){delete this._config[e+"_name"],delete this._config[e+"_icon"],delete this._config[e+"_link"],delete this._config[e+"_entity"],delete this._config[e+"_pir_sensor"];for(let t=e;t<this.buttonIndex;t++)this._config[t+"_name"]=this._config[t+1+"_name"],this._config[t+"_icon"]=this._config[t+1+"_icon"],this._config[t+"_link"]=this._config[t+1+"_link"],this._config[t+"_entity"]=this._config[t+1+"_entity"],this._config[t+"_pir_sensor"]=this._config[t+1+"_pir_sensor"];delete this._config[this.buttonIndex+"_name"],delete this._config[this.buttonIndex+"_icon"],delete this._config[this.buttonIndex+"_link"],delete this._config[this.buttonIndex+"_entity"],delete this._config[this.buttonIndex+"_pir_sensor"],this.buttonIndex--,(0,n.BX)(this,"config-changed",{config:this._config})}makeStyleEditor(){return Ke`
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
                    <ha-alert alert-type="info">
                      For advanced users, you can edit the CSS style of this card in this editor. More information <a href="https://github.com/Clooos/Bubble-Card#styling">here</a>. You don't need to add <code>styles: |</code>, it will be added automatically. You can also add <a href="https://github.com/Clooos/Bubble-Card#templates">templates</a>.
                      <br><br><b>Looking for more advanced examples?</b> Check out my <a href="https://www.patreon.com/Clooos">Patreon</a> for exclusive custom styles and advanced templates, this is also the best way to show your support to my project!
                    </ha-alert>
                </div>
            </ha-expansion-panel>
        `}_valueChanged(e){const t=e.target,o=e.detail;let i;if("HA-SWITCH"===t.tagName?i=t.checked:void 0!==t.value&&(i="string"==typeof t.value?t.value.replace(",","."):t.value),"string"==typeof i&&(i.endsWith(".")||"-"===i))return;const{configValue:a,checked:s}=t;if(a){const n=a.split(".");let s=this._config;for(let e=0;e<n.length-1;e++)s[n[e]]=s[n[e]]||{},s=s[n[e]];"input"===e.type?s[n[n.length-1]]=i:o&&s[n[n.length-1]]!==o.value?s[n[n.length-1]]=o.value:"HA-SWITCH"===t.tagName&&(s[n[n.length-1]]=i)}else this._config=o.value;(0,n.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()}_arrayValueChange(e,t,o){if(this._config.sub_button&&!this.subButtonJustAdded)return this.subButtonJustAdded=!0,void setTimeout((()=>this._arrayValueChange(e,t,o)),10);this._config[o]=this._config[o]||[];let i=[...this._config[o]];i[e]=i[e]||{},i[e]={...i[e],...t},this._config[o]=i,(0,n.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()}_ActionChanged(e,t,o){if(e.stopPropagation(),"button_action"===t){var i=!!this._config[t],a=null!=e.detail.value[e.currentTarget.__schema[0].name];(i||a)&&(this._config[t]=e.detail.value)}else if(t){this._config[t]=this._config[t]||[];let n=[...this._config[t]];n[o]=e.detail.value,this._config[t]=n}else this._config=e.detail.value;(0,n.BX)(this,"config-changed",{config:this._config})}_computeLabelCallback=e=>{switch(e.name){case"theme":return"Theme";case"hold_action":return"Hold Action";case"double_tap_action":return"Double tap action";case"open_action":return"Open action";case"close_action":return"Close action";default:return"Tap action"}};_computeLabelCallback=e=>{if(e.label)return e.label;switch(e.name){case"theme":return"Theme";case"hold_action":return"Hold Action";case"double_tap_action":return"Double tap action";case"open_action":return"Open action";case"close_action":return"Close action";default:return"Tap action"}};_conditionChanged(e,t,o){if(e.stopPropagation(),o){this._config[o]=this._config[o]||[];let n=[...this._config[o]];n[t]=n[t]||{};const i=e.detail.value;n[t]={...n[t],visibility:i},this._config[o]=n}else if("pop-up"===this._config.card_type){const t=e.detail.value;this._config={...this._config,trigger:t}}(0,n.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return be`
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

            ha-card-conditions-editor {
              margin-top: -12px;
            }
        `}});class gt extends HTMLElement{editor=!1;isConnected=!1;connectedCallback(){this.isConnected=!0,this._hass&&this.updateBubbleCard()}disconnectedCallback(){this.isConnected=!1}set editMode(e){this.editor!==e&&(this.editor=e,this._hass&&this.updateBubbleCard())}set hass(e){!function(e){if(!e.content){let t=e.shadowRoot||e.attachShadow({mode:"open"}),n=document.createElement("ha-card");n.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let o=document.createElement("div");o.className="card-content",o.style.padding="0",n.appendChild(o),t.appendChild(n),e.card=n,e.content=o}}(this),this._hass=e,this.editor||(this.isConnected||"pop-up"===this.config.card_type)&&this.updateBubbleCard()}updateBubbleCard(){switch(this.config.card_type){case"pop-up":J(this);break;case"button":Y(this);break;case"separator":"separator"!==(e=this).cardType&&function(e){e.elements={},e.elements.separatorCard=(0,n.az)("div","bubble-separator separator-container"),e.elements.icon=(0,n.az)("ha-icon","bubble-icon"),e.elements.name=(0,n.az)("h4","bubble-name"),e.elements.line=(0,n.az)("div","bubble-line"),e.elements.style=(0,n.az)("style"),e.elements.style.innerText="\n    .bubble-separator {\n        display: flex;\n        width: 100%;\n        \n        align-items: center;\n        z-index: 1;\n    }\n    .bubble-icon {\n        display: inline-flex;\n        height: auto;\n        width: auto;\n        margin: 0 22px 0 8px;\n    }\n    .bubble-name {\n        margin: 0 30px 0 0;\n        font-size: 16px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    .bubble-name:empty {\n        display: none;\n    }\n    .bubble-line {\n        border-radius: 6px;\n        opacity: 0.5;\n        flex-grow: 1;\n        height: 6px;\n        background-color: var(--bubble-line-background-color, var(--background-color, var(--secondary-background-color)));\n        margin-right: 14px;\n    }\n    .bubble-sub-button-container {\n        margin: 0 8px;\n        right: 0 !important;\n    }\n\n    .large .bubble-separator {\n        height: 56px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n        flex-direction: column;\n        gap: 4px !important;\n        display: grid !important;\n        grid-template-columns: repeat(1, min-content);\n        grid-template-rows: repeat(2, 1fr);\n        grid-auto-flow: column;\n        width: auto;\n    }\n\n    .rows-2 .bubble-sub-button {\n        height: 20px !important;\n    }\n",e.elements.customStyle=(0,n.az)("style"),e.elements.separatorCard.appendChild(e.elements.icon),e.elements.separatorCard.appendChild(e.elements.name),e.elements.separatorCard.appendChild(e.elements.line),e.content.innerHTML="",e.content.appendChild(e.elements.separatorCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="separator"}(e),function(e){e.elements.icon.icon=(0,n.q7)(e),""===e.elements.icon.icon&&""===e.elements.icon.style.margin?(e.elements.icon.style.margin="0px 8px",e.elements.icon.style.width="0px"):""!==e.elements.icon.icon&&"0px 8px"===e.elements.icon.style.margin&&(e.elements.icon.style.margin="",e.elements.icon.style.width="")}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t=(0,n.oY)(e);t!==e.elements.name.innerText&&(e.elements.name.innerText=t)}(e),D(e,e.content,e.elements.separatorCard),function(e){R(e),(0,n.jx)(e);const t=(0,n.y0)(e);let o="";try{o=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,n.X,e.card):""}catch(e){throw new Error(`Error in generating separator custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=o)}(e);break;case"cover":!function(e){"cover"!==e.cardType&&function(e){e.elements={},e.elements.coverCardContainer=(0,n.az)("div","bubble-cover-card-container cover-container"),e.elements.headerContainer=(0,n.az)("div","bubble-header header-container"),e.elements.buttonsContainer=(0,n.az)("div","bubble-buttons buttons-container"),e.elements.iconContainer=(0,n.az)("div","bubble-icon-container icon-container"),e.elements.icon=(0,n.az)("ha-icon","bubble-icon"),e.elements.nameContainer=(0,n.az)("div","bubble-name-container name-container"),e.elements.name=(0,n.az)("div","bubble-name name"),e.elements.state=(0,n.az)("div","bubble-state state"),e.elements.buttonOpen=(0,n.az)("div","bubble-button bubble-open button open"),e.elements.buttonStop=(0,n.az)("div","bubble-button bubble-stop button stop"),e.elements.buttonClose=(0,n.az)("div","bubble-button bubble-close button close"),e.elements.iconOpen=(0,n.az)("ha-icon","bubble-icon bubble-icon-open"),e.elements.iconStop=(0,n.az)("ha-icon","bubble-icon bubble-icon-stop"),e.elements.iconStop.icon="mdi:stop",e.elements.iconClose=(0,n.az)("ha-icon","bubble-icon bubble-icon-close"),e.elements.style=(0,n.az)("style"),e.elements.style.innerText="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n    ha-card {\n        margin-top: 0 !important;\n        background: none !important;\n    }\n\n    .bubble-cover-card-container {\n        display: grid;\n        gap: 10px;\n        overflow: hidden;\n    }\n\n    .bubble-header {\n        display: flex;\n        align-items: center;\n    }\n\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        min-width: 38px;\n        min-height: 38px;\n        border-radius: var(--bubble-cover-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n        background-color: var(--bubble-cover-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n        border: 6px solid var(--bubble-cover-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n        cursor: pointer;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 1em;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        font-weight: 600;\n        margin-left: 4px;\n        margin-right: 16px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        font-size: 13px;\n        margin: 2px 0;\n        white-space: nowrap;\n        display: flex;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        opacity: 0.7;\n        margin: 2px 0;\n        font-weight: normal;\n        white-space: nowrap;\n        display: flex;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-buttons {\n        display: grid;\n        align-self: center;\n        grid-auto-flow: column;\n        grid-gap: 18px;\n    }\n\n    .bubble-icon {\n        display: flex; \n        height: 24px; \n        width: 24px; \n        color: var(--primary-text-color);\n    }\n\n    .bubble-button.disabled {\n        opacity: 0.3 !important;\n        pointer-events: none !important;\n        cursor: none !important;\n    }\n\n    .bubble-button {\n        display: flex;\n        background: var(--bubble-cover-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n        height: 42px;\n        border-radius: var(--bubble-cover-border-radius, var(--bubble-border-radius, 32px));\n        box-shadow: var(--bubble-cover-box-shadow, var(--bubble-button-box-shadow, var(--bubble-box-shadow, none)));\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: none;\n    }\n\n    .large .bubble-cover-card-container {\n      height: 56px;\n      display: flex;\n      background: var(--bubble-cover-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n      border-radius: var(--bubble-cover-border-radius, var(--bubble-border-radius, 32px));\n      box-shadow: var(--bubble-cover-box-shadow, var(--bubble-button-box-shadow, var(--bubble-box-shadow, none)));\n    }\n\n    .large .bubble-buttons .bubble-icon {\n      color: var(--primary-text-color) !important;\n      opacity: 1;\n    }\n\n    .large .bubble-header-container {\n        height: 56px;\n    }\n\n    .large .bubble-header {\n        width: 100%;\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 24px;\n      min-width: 42px !important;\n      min-height: 42px !important;\n      align-content: center;\n      border: none;\n      margin: 8px 6px 8px 8px;\n    }\n\n    .large .bubble-icon {\n      align-items: center;\n    }\n\n    .large .bubble-buttons {\n      display: flex;\n      position: relative;\n      right: 18px;\n      align-self: center;\n      grid-gap: 18px;\n    }\n\n    .large .bubble-button,\n    .large .bubble-sub-button {\n      box-shadow: none;\n    }\n\n    .large .bubble-sub-button-container {\n      margin-right: 14px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(1, min-content);\n      grid-template-rows: repeat(2, 1fr);\n      grid-auto-flow: column;\n      width: auto;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n",e.elements.customStyle=(0,n.az)("style"),e.elements.iconContainer.appendChild(e.elements.icon),e.elements.headerContainer.appendChild(e.elements.iconContainer),e.elements.headerContainer.appendChild(e.elements.nameContainer),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonsContainer.appendChild(e.elements.buttonOpen),e.elements.buttonsContainer.appendChild(e.elements.buttonStop),e.elements.buttonsContainer.appendChild(e.elements.buttonClose),e.elements.buttonOpen.appendChild(e.elements.iconOpen),e.elements.buttonOpen.addEventListener("click",(()=>{const t=e.config.open_service??"cover.open_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),e.elements.buttonStop.appendChild(e.elements.iconStop),e.elements.buttonStop.addEventListener("click",(()=>{const t=e.config.stop_service??"cover.stop_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),e.elements.buttonClose.appendChild(e.elements.iconClose),e.elements.buttonClose.addEventListener("click",(()=>{const t=e.config.close_service??"cover.close_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),i(e.elements.iconContainer,e.config),e.content.innerHTML="",e.content.appendChild(e.elements.coverCardContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.coverCardContainer.appendChild(e.elements.headerContainer),e.elements.coverCardContainer.appendChild(e.elements.buttonsContainer),e.elements.coverCardContainer.addEventListener("click",(()=>(0,n.jk)("selection"))),e.cardType="cover"}(e),function(e){const t=e._hass.states[e.config.entity],{current_position:o,assumed_state:i}=t.attributes,a=te(t,Z),s=te(t,Q),r=te(t,ee),l=function(e){return void 0!==e.attributes.current_position?100===e.attributes.current_position:"open"===e.state}(t),c=function(e){return void 0!==e.attributes.current_position?0===e.attributes.current_position:"closed"===e.state}(t),d="curtain"===(0,n.IL)(e,"device_class");e.elements.icon.icon=l?(0,n.q7)(e,e.config.entity,e.config.icon_open):(0,n.q7)(e,e.config.entity,e.config.icon_close),e.elements.iconOpen.icon=e.config.icon_up||(d?"mdi:arrow-expand-horizontal":"mdi:arrow-up"),e.elements.iconClose.icon=e.config.icon_down||(d?"mdi:arrow-collapse-horizontal":"mdi:arrow-down"),void 0!==o?(l?e.elements.buttonOpen.classList.add("disabled"):a&&e.elements.buttonOpen.classList.remove("disabled"),c?e.elements.buttonClose.classList.add("disabled"):s&&e.elements.buttonClose.classList.remove("disabled")):(e.elements.buttonOpen.classList.remove("disabled"),e.elements.buttonClose.classList.remove("disabled")),e.elements.buttonStop.style.display=r?"":"none"}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t=(0,n.oY)(e);t!==e.elements.previousName&&(e.elements.name.innerText=t,(0,n.GP)(e,e.elements.name,t),e.elements.previousName=t)}(e),M(e),D(e,e.content,e.elements.headerContainer),function(e){if(R(e),(0,n.jx)(e),!e.config.styles)return;const t=(0,n.y0)(e);let o="";try{o=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,n.X,e.card):""}catch(e){throw new Error(`Error in generating cover custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=o)}(e)}(this);break;case"empty-column":!function(e){"empty-column"!==e.cardType&&function(e){e.elements={},e.elements.emptyColumnCard=(0,n.az)("div","bubble-empty-column empty-column"),e.elements.style=(0,n.az)("style"),e.elements.style.innerText="\n    .empty-column {\n        display: flex;\n        width: 100%;\n    }\n",e.elements.customStyle=(0,n.az)("style"),e.content.innerHTML="",e.content.appendChild(e.elements.emptyColumnCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="empty-column"}(e)}(this);break;case"horizontal-buttons-stack":!function(e){"horizontal-buttons-stack"!==e.cardType&&function(e){e.elements={},e.elements.buttons=[],e.elements.cardContainer=(0,n.az)("div","bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container");let t=1;for(;e.config[t+"_link"];)e.elements.cardContainer.appendChild(K(e,t)),t++;e.elements.style=(0,n.az)("style"),e.elements.style.innerText="\n    @keyframes from-bottom {\n        0% { transform: translate(-50%, 100px); }\n        26% { transform: translate(-50%, -8px); }\n        46% { transform: translate(-50%, 1px); }\n        62% { transform: translate(-50%, -2px); }\n        70% { transform: translate(-50%, 0); }\n        100% { transform: translate(-50%, 0); }\n    }\n    @keyframes pulse {\n        0% { filter: brightness(0.7); }\n        100% { filter: brightness(1.3); }\n    }\n    ha-card {\n        border-radius: 0;\n    }\n    .horizontal-buttons-stack-card {\n        bottom: 16px;\n        height: 51px;\n        margin-top: 0;\n        position: fixed;\n        width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\n        left: calc(var(--mdc-drawer-width, 0px) + 4px);\n        z-index: 6; /* Higher value hide the more-info panel */\n    }\n    @media only screen and (max-width: 870px) {\n        .horizontal-buttons-stack-card {\n            width: calc(100% - 16px);\n            left: 8px;\n        }\n\n        .horizontal-buttons-stack-card::before {\n            left: -10px;\n        }\n    }\n    .horizontal-buttons-stack-card::before {\n        content: '';\n        position: absolute;\n        top: -32px;\n        display: none;\n        background: linear-gradient(0deg, var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--primary-background-color)))) 50%, transparent);\n        width: 200%;\n        height: 100px;\n        pointer-events: none;\n    }\n    .has-gradient.horizontal-buttons-stack-card::before {\n        display: block;\n    }\n\n    .card-content {\n        width: calc(100% + 36px);\n        padding: 0 !important;\n        max-width: calc(var(--desktop-width) - 8px);\n        box-sizing: border-box;\n        overflow: scroll;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n        -ms-overflow-style: none;\n        scrollbar-width: none;\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            #000000 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            transparent 100%\n        );\n    }\n    .is-scrollable.card-content {\n        padding: 0 !important;\n        width: 100%;\n    }\n    .is-scrolled.card-content {\n        padding: 0 !important;\n        width: 100%;\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            transparent 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            transparent 100%\n        );\n    }\n    .is-maxed-scroll.card-content {\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            transparent 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            #000000 100%\n        );\n    }\n    .card-content::-webkit-scrollbar {\n        display: none;\n    }\n\n    .bubble-horizontal-buttons-stack-card-container {\n        height: 51px;\n        position: relative;\n        margin: auto;\n    }\n\n    .bubble-button {\n        align-items: center;\n        border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n        color: var(--primary-text-color);\n        cursor: pointer;\n        display: inline-flex;\n        height: 50px;\n        left: 0;\n        padding: 0 16px;\n        position: absolute;\n        white-space: nowrap;\n        z-index: 1;\n        transition: transform 1s;\n        box-sizing: border-box;\n    }\n    .bubble-button.highlight {\n        animation: pulse 1.4s infinite alternate;\n    }\n    .bubble-background-color {\n        border: 1px solid var(--primary-text-color);\n        border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n        box-sizing: border-box;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        transition: background-color 1s;\n        width: 100%;\n        z-index: -1;\n    }\n    .bubble-background {\n        opacity: 0.8;\n        border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box !important;\n        position: absolute;\n        left: 0;\n        z-index: -2;\n        background-color: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n    }\n    .bubble-icon {\n        height: 24px;\n        width: 24px;\n    }\n    .bubble-icon + .bubble-name {\n        margin-left: 8px;\n    }\n\n\n    .horizontal-buttons-stack-card.editor {\n        position: relative;\n        width: 100%;\n        left: 0;\n        bottom: 0;\n    }\n    .horizontal-buttons-stack-card.editor::before {\n        background: none;\n    }\n\n",e.elements.customStyle=(0,n.az)("style"),e.card.classList.add("horizontal-buttons-stack-card"),e.card.style.marginLeft=e.config.margin??"",e.config.hide_gradient||e.card.classList.add("has-gradient"),e.card.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.elements.cardContainer.appendChild(e.elements.style),e.elements.cardContainer.appendChild(e.elements.customStyle),e.content.appendChild(e.elements.cardContainer),e.content.addEventListener("scroll",(()=>{e.content.scrollLeft>0?e.content.classList.add("is-scrolled"):e.content.classList.remove("is-scrolled"),e.content.scrollWidth-12<e.content.offsetWidth+e.content.scrollLeft?e.content.classList.add("is-maxed-scroll"):e.content.classList.remove("is-maxed-scroll")})),(e.config.rise_animation??1)&&(e.content.style.animation="from-bottom .6s forwards",setTimeout((()=>{e.content.style.animation="none"}),1500));let o=e.card.parentNode.host;o&&!e.editor&&"hui-card"!==o.parentElement.tagName.toLowerCase()?o.style.padding="0 0 80px":o.parentElement&&!e.editor&&"hui-card"===o.parentElement.tagName.toLowerCase()&&(o.parentElement.style.padding="0 0 80px"),e.cardType="horizontal-buttons-stack"}(e),function(e){if(!e.config.styles)return;let t="";try{t=e.config.styles?Function("hass","card",`return \`${e.config.styles}\`;`)(e._hass,e.card):""}catch(e){throw new Error(`Error in generating horizontal buttons stack custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=t)}(e),function(e){if(!e.config.auto_order)return;const t=e._hass.states;e.elements.buttons.sort(((e,n)=>{if(!t[e.pirSensor])return 1;if(!t[n.pirSensor])return-1;const o=t[e.pirSensor]?.last_updated,i=t[n.pirSensor]?.last_updated;return"on"===t[e.pirSensor]?.state&&"on"===t[n.pirSensor]?.state?o>i?-1:o===i?0:1:"on"===t[e.pirSensor]?.state?-1:"on"===t[n.pirSensor]?.state?1:o>i?-1:o===i?0:1}))}(e),function(e){e.elements.buttons.forEach((t=>{const n=t.index,o=e.config[`${n}_name`]??"",i=e.config[`${n}_icon`]??"",a=e.config[`${n}_pir_sensor`],s=e.config[`${n}_link`],r=e.config[`${n}_entity`];t.pirSensor=a,t.lightEntity=r,t.link=s,o?(t.name.innerText=o,t.name.style.display=""):t.name.style.display="none",i?(t.icon.icon=i,t.icon.style.display=""):t.icon.style.display="none",void 0===s&&(t.remove(),e.elements.buttons=e.elements.buttons.filter((e=>e!==t)),e.elements.buttons.forEach(((e,t)=>{e.index=t+1})))}));let t=e.elements.buttons.length+1;for(;void 0!==e.config[`${t}_link`];){if(!e.elements.buttons.find((e=>e.index===t))){const n=K(e,t);e.elements.buttons.push(n)}t++}}(e),function(e){const t=e.shadowRoot.host.closest("hui-card-preview, hui-card-options");e.editor||null!==t?(e.elements.cardContainer.classList.add("editor"),e.card.classList.add("editor")):(e.elements.cardContainer.classList.remove("editor"),e.card.classList.remove("editor"))}(e),function(e){let t=0;for(let n=0;n<e.elements.buttons.length;++n){let o=localStorage.getItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`);e.elements.buttons[n].style.width="";const i=e.elements.buttons[n].offsetWidth;e.elements.buttons[n].style.width=`${i}px`,i>0&&(o=i,localStorage.setItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`,`${i}`)),null!==o&&(e.elements.buttons[n].style.transform=`translateX(${t}px)`,e.elements.buttons[n].style.width="",t+=+o+12)}e.elements.cardContainer.style.width=`${t}px`}(e),function(e){e.elements.buttons.forEach((n=>{const o=e._hass.states[n.lightEntity],i=o?.attributes.rgb_color,a=o?.state;if(i){const e=(0,t.wW)(i)?"rgba(255, 220, 200, 0.5)":`rgba(${i}, 0.5)`;n.backgroundColor.style.backgroundColor=e,n.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"}else"on"==a?(n.backgroundColor.style.backgroundColor="rgba(255, 255, 255, 0.5)",n.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"):(n.backgroundColor.style.backgroundColor="rgba(0, 0, 0, 0)",n.backgroundColor.style.borderColor="var(--primary-text-color)")}))}(e),function(e){e.content.scrollWidth>=e.content.offsetWidth?e.content.classList.add("is-scrollable"):e.content.classList.remove("is-scrollable")}(e)}(this);break;case"media-player":se(this);break;case"select":!function(e){e.cardType,"select"!==e.cardType&&(function(e){e.elements||(e.elements={});let t=e.content;e.elements.selectCardContainer=(0,n.az)("div","bubble-select-card-container"),e.elements.selectCard=(0,n.az)("div","bubble-select-card"),e.elements.selectBackground=(0,n.az)("div","bubble-select-background"),e.elements.nameContainer=(0,n.az)("div","bubble-name-container"),e.elements.iconContainer=(0,n.az)("div","bubble-icon-container"),e.elements.name=(0,n.az)("div","bubble-name"),e.elements.state=(0,n.az)("div","bubble-state"),e.elements.feedback=(0,n.az)("div","bubble-feedback-element"),e.elements.icon=(0,n.az)("ha-icon","bubble-icon"),e.elements.image=(0,n.az)("div","bubble-entity-picture"),e.elements.style=(0,n.az)("style"),e.elements.customStyle=(0,n.az)("style"),e.elements.feedback.style.display="none",e.elements.style.innerText=E,r(e.elements.selectBackground,e.elements.feedback),i(e.elements.iconContainer,e.config,e.config.entity),e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.selectCard.appendChild(e.elements.selectBackground),e.elements.selectCard.appendChild(e.elements.iconContainer),e.elements.selectCard.appendChild(e.elements.nameContainer),e.elements.selectCardContainer.appendChild(e.elements.selectCard),e.elements.selectBackground.appendChild(e.elements.feedback),t.innerHTML="",t.appendChild(e.elements.selectCardContainer),t.appendChild(e.elements.style),t.appendChild(e.elements.customStyle),e.cardType="select"}(e),T(e),O(e)),z(e,e.elements,e.config.entity,e.config),function(e){"unavailable"===(0,n.y0)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable")}(e),function(e){const t=(0,n.q7)(e),o=(0,n.gJ)(e);""!==o?(e.elements.image.style.backgroundImage="url("+o+")",e.elements.icon.style.display="none",e.elements.image.style.display=""):""!==t?(e.elements.icon.icon=t,e.elements.icon.style.color="inherit",e.elements.icon.style.display="",e.elements.image.style.display="none"):(e.elements.icon.style.display="none",e.elements.image.style.display="none")}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t=(0,n.oY)(e);t!==e.elements.previousName&&((0,n.GP)(e,e.elements.name,t),e.elements.previousName=t)}(e),M(e),D(e,e.content,e.elements.dropdownContainer,!0),function(e){R(e),(0,n.jx)(e);const t=(0,n.y0)(e);let o="";try{o=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,n.X,e.card):""}catch(e){throw new Error(`Error in generating select custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=o,e.elements.dropdownCustomStyleElement.innerText=o)}(e)}(this);break;case"climate":!function(e){"climate"!==e.cardType&&function(e){e.dragging=!1,e.elements={};const t=e.config.entity,o=e._hass.states[t],a="°C"===e._hass.config.unit_system.temperature,s=o.attributes.target_temp_step?o.attributes.target_temp_step:a?.5:1;function l(t,o,i){const a=(0,n.az)("div","bubble-climate-minus-button"),s=(0,n.az)("div","bubble-climate-plus-button"),l=(0,n.az)("ha-icon","bubble-climate-minus-button-icon");l.setAttribute("icon","mdi:minus"),a.appendChild(l),r(a);const c=(0,n.az)("ha-icon","bubble-climate-plus-button-icon");let d,u;c.setAttribute("icon","mdi:plus"),s.appendChild(c),r(s),"temperature"===o?(e.elements.tempDisplay=(0,n.az)("div","bubble-temperature-display"),d=e.elements.tempDisplay):"target_temp_low"===o?(e.elements.lowTempDisplay=(0,n.az)("div","bubble-low-temperature-display"),d=e.elements.lowTempDisplay):"target_temp_high"===o&&(e.elements.highTempDisplay=(0,n.az)("div","bubble-high-temperature-display"),d=e.elements.highTempDisplay),t.appendChild(a),t.appendChild(d),t.appendChild(s);let p=parseFloat((0,n.IL)(e,o))||0,b=p;function h(t){"temperature"===o?e.elements.tempDisplay.innerText=t.toFixed(1):"target_temp_low"===o?e.elements.lowTempDisplay.innerText=t.toFixed(1):"target_temp_high"===o&&(e.elements.highTempDisplay.innerText=t.toFixed(1))}function m(){const t=parseFloat((0,n.IL)(e,o))||0;t!==b&&(p=t,b=t)}function g(){m();const t={entity_id:e.config.entity};"target_temp_low"===o?(t.target_temp_low=p,t.target_temp_high=(0,n.IL)(e,"target_temp_high")):"target_temp_high"===o?(t.target_temp_high=p,t.target_temp_low=(0,n.IL)(e,"target_temp_low")):t[o]=p,e._hass.callService("climate","set_temperature",t)}a.addEventListener("click",(()=>{m(),p=parseFloat((p-i).toFixed(1)),h(p),clearTimeout(u),u=setTimeout(g,700)})),s.addEventListener("click",(()=>{m(),p=parseFloat((p+i).toFixed(1)),h(p),clearTimeout(u),u=setTimeout(g,700)}))}e.elements.climateContainer=(0,n.az)("div","bubble-climate-container"),e.elements.climateCard=(0,n.az)("div","bubble-climate"),e.elements.buttonContainer=(0,n.az)("div","bubble-button-container"),e.elements.nameContainer=(0,n.az)("div","bubble-name-container"),e.elements.iconContainer=(0,n.az)("div","bubble-icon-container"),e.elements.name=(0,n.az)("div","bubble-name"),e.elements.state=(0,n.az)("div","bubble-state"),e.elements.icon=(0,n.az)("ha-icon","bubble-icon"),e.elements.image=(0,n.az)("div","bubble-entity-picture entity-picture"),e.elements.colorBackground=(0,n.az)("div","bubble-color-background"),e.elements.style=(0,n.az)("style"),e.elements.customStyle=(0,n.az)("style"),e.elements.style.innerText="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n\n    ha-card {\n        margin-top: 0;\n        background: none;\n        opacity: 1;\n    }\n    .is-unavailable {\n        opacity: 0.5;\n    }\n\n    .bubble-climate-container {\n        position: relative;\n        width: 100%;\n        height: 50px;\n        background-color: var(--bubble-climate-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n        border-radius: var(--bubble-climate-border-radius, var(--bubble-border-radius, 32px));\n        box-shadow: var(--bubble-climate-box-shadow, var(--bubble-box-shadow, none));\n        overflow: visible;\n        touch-action: pan-y;\n    }\n\n    .bubble-climate {\n        display: flex;\n        position: absolute;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        transition: background-color 1.5s;\n        background-color: rgba(0,0,0,0);\n    }\n\n    .bubble-button-container {\n        display: inline-grid;\n        grid-auto-flow: column;\n        gap: 10px;\n        align-self: center;\n        align-items: center;\n        margin-right: 8px;\n    }\n\n    .bubble-temperature-container, .bubble-low-temp-container, .bubble-high-temp-container {\n        display: inline-flex;\n        position: relative;\n        font-size: 12px;\n        white-space: nowrap;\n        justify-content: center;\n        align-items: center;\n        width: auto;\n        height: 100%;\n        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n        background-color: var(--bubble-climate-button-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))));\n    }\n\n    .bubble-low-temp-container {\n        color: var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)));\n    }\n\n    .bubble-high-temp-container {\n        color: var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)));\n    }\n\n    .bubble-target-temperature-container {\n        display: flex;\n        gap: 10px;\n    }\n\n    .bubble-climate-minus-button,\n    .bubble-climate-plus-button {\n        display: flex;\n        position: relative;\n        align-items: center;\n        justify-content: center;\n        box-sizing: border-box;\n        width: 36px;\n        height: 36px;\n        vertical-align: middle;\n        font-size: 18px;\n        color: var(--primary-text-color);\n        cursor: pointer;\n    }\n\n    .bubble-climate-minus-button-icon,\n    .bubble-climate-plus-button-icon {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        --mdc-icon-size: 16px;\n    }\n\n    .bubble-feedback-container {\n        display: flex;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n        overflow: hidden;\n        pointer-events: none;\n    }\n\n    .bubble-feedback-element {\n        position: absolute;\n        top: 0;\n        left: 0;\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgb(0,0,0);\n        pointer-events: none;\n    }\n\n    .bubble-color-background {\n        display: flex;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        border-radius: var(--bubble-climate-border-radius, var(--bubble-border-radius, 32px));\n        opacity: 0.7;\n        transition: background-color 2s ease;\n    }\n\n    .is-unavailable .bubble-climate {\n        cursor: not-allowed;\n    }\n\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        width: 38px;\n        height: 38px;\n        min-width: 38px;\n        min-height: 38px;\n        align-items: center;\n        justify-content: center;\n        margin: 6px;\n        border-radius: var(--bubble-climate-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n        background-color: var(--bubble-climate-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n        pointer-events: auto;\n    }\n\n    .bubble-icon {\n        opacity: 0.6;\n    }\n\n    .is-on .bubble-icon {\n      filter: brightness(1.1);\n      opacity: 1;\n    }\n\n    .bubble-icon {\n        display: flex;\n        position: absolute;\n        height: 38px;\n        width: 38px;\n        justify-content: center;\n        align-items: center;\n        transition: all 2s;\n    }\n\n    .bubble-entity-picture {\n        background-size: cover;\n        background-position: center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n\n    .bubble-name,\n    .bubble-state {\n        display: flex;\n        margin: 2px 0;\n        position: relative;\n        white-space: nowrap;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 1em;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        font-weight: 600;\n        margin-left: 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        font-size: 13px;\n        margin: 2px 0;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        opacity: 0.7;\n        margin: 2px 0;\n        font-weight: normal;\n    }\n\n    .bubble-sub-button-container {\n        right: 0 !important;\n    }\n\n    .hidden {\n        display: none !important;\n    }\n\n    @keyframes tap-feedback {\n        0% {transform: translateX(-100%); opacity: 0;}\n        64% {transform: translateX(0); opacity: 0.1;}\n        100% {transform: translateX(100%); opacity: 0;}\n    }\n\n    .large .bubble-climate-container {\n      height: 56px;\n      border-radius: var(--bubble-climate-border-radius, var(--bubble-border-radius, 32px));\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 24px;\n      min-width: 42px !important;\n      min-height: 42px !important;\n      margin-left: 8px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(1, min-content);\n      grid-template-rows: repeat(2, 1fr);\n      grid-auto-flow: column;\n      width: auto;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n",e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state);const c=void 0!==o?.attributes?.target_temp_low,d=void 0!==o?.attributes?.target_temp_high;void 0!==o?.attributes?.temperature&&(e.elements.temperatureContainer=(0,n.az)("div","bubble-temperature-container"),l(e.elements.temperatureContainer,"temperature",s),e.elements.buttonContainer.appendChild(e.elements.temperatureContainer)),(c||d)&&(e.elements.targetTemperatureContainer=(0,n.az)("div","bubble-target-temperature-container"),c&&(e.elements.lowTempContainer=(0,n.az)("div","bubble-low-temp-container"),l(e.elements.lowTempContainer,"target_temp_low",s),e.elements.targetTemperatureContainer.appendChild(e.elements.lowTempContainer)),d&&(e.elements.highTempContainer=(0,n.az)("div","bubble-high-temp-container"),l(e.elements.highTempContainer,"target_temp_high",s),e.elements.targetTemperatureContainer.appendChild(e.elements.highTempContainer)),e.elements.buttonContainer.appendChild(e.elements.targetTemperatureContainer)),e.elements.climateCard.appendChild(e.elements.iconContainer),e.elements.climateCard.appendChild(e.elements.nameContainer),e.elements.climateCard.appendChild(e.elements.buttonContainer),e.elements.climateContainer.appendChild(e.elements.colorBackground),e.elements.climateContainer.appendChild(e.elements.climateCard),e.content.innerHTML="",e.content.appendChild(e.elements.climateContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),i(e.elements.iconContainer,e.config),e.cardType="climate"}(e),function(e){"unavailable"===(0,n.y0)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable"),(0,n.pr)(e)?e.card.classList.add("is-on"):e.card.classList.remove("is-on")}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t=(0,n.oY)(e);t!==e.previousName&&e.elements.name&&(e.elements.name.innerText=t,e.previousName=t,(0,n.GP)(e,e.elements.name,t))}(e),function(e){const t=(0,n.pr)(e),o=(0,n.q7)(e),i=(0,n.gJ)(e),a=e.elements.image.style.backgroundImage,s=e.elements.icon.icon,r=e.elements.icon.style.color;if(""!==i){const t="url("+i+")";a!==t&&(e.elements.image.style.backgroundImage=t),"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),""!==e.elements.image.style.display&&(e.elements.image.style.display="")}else if(""!==o){s!==o&&(e.elements.icon.icon=o);const n=t?`var(--bubble-icon-background-color, ${re(e)})`:"inherit";r!==n&&(e.elements.icon.style.color=n),""!==e.elements.icon.style.display&&(e.elements.icon.style.display=""),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}else"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}(e),M(e),function(e){const t=(0,n.IL)(e,"temperature");""===t?e.elements.temperatureContainer?.classList.add("hidden"):e.elements.temperatureContainer?.classList.remove("hidden"),t!==e.previousTemp&&(e.previousTemp=t,e.elements.tempDisplay&&(e.elements.tempDisplay.innerText=parseFloat(t).toFixed(1)))}(e),function(e){const t=(0,n.IL)(e,"target_temp_low"),o=e.config.hide_target_temp_low;""===t?e.elements.targetTemperatureContainer?.classList.add("hidden"):e.elements.targetTemperatureContainer?.classList.remove("hidden"),o?e.elements.lowTempContainer?.classList.add("hidden"):e.elements.lowTempContainer?.classList.remove("hidden"),t!==e.previousTargetTempLow&&(e.previousTargetTempLow=t,e.elements.lowTempDisplay&&(e.elements.lowTempDisplay.innerText=parseFloat(t).toFixed(1)))}(e),function(e){const t=(0,n.IL)(e,"target_temp_high");e.config.hide_target_temp_high?e.elements.highTempContainer?.classList.add("hidden"):e.elements.highTempContainer?.classList.remove("hidden"),t!==e.previousTargetTempHigh&&(e.previousTargetTempHigh=t,e.elements.highTempDisplay&&(e.elements.highTempDisplay.innerText=parseFloat(t).toFixed(1)))}(e),D(e,e.content,e.elements.buttonContainer,!0),function(e){R(e),(0,n.jx)(e);const t=(0,n.y0)(e);if(e.previousState!==t&&(e.previousState=t,e.elements.colorBackground.style.backgroundColor=`var(--bubble-climate-background-color, ${re(e)})`),e.config.card_layout,e.elements.hvacModeDropdown,!e.config.styles)return;let o="";try{o=e.config.styles?Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,n.X,e.card):""}catch(e){throw new Error(`Error in generating climate custom templates: ${e.message}`)}e.elements.customStyle&&(e.elements.customStyle.innerText=o)}(e)}(this)}var e}setConfig(e){if(e.error)throw new Error(e.error);if("pop-up"===e.card_type){if(!e.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.")}else if("horizontal-buttons-stack"===e.card_type){var t={};for(var n in e)if(n.match(/^\d+_icon$/)){var o=n.replace("_icon","_link");if(void 0===e[o])throw new Error("You need to define "+o);if(t[e[o]])throw new Error("You can't use "+e[o]+" twice");t[e[o]]=!0}}else if(["button","cover","climate","select","media-player"].includes(e.card_type)&&!e.entity&&"name"!==e.button_type)throw new Error("You need to define an entity");if("select"===e.card_type&&e.entity&&!e.select_attribute&&!e.entity?.startsWith("input_select")&&!e.entity?.startsWith("select"))throw new Error('"Select menu (from attributes)" missing');if(window.entityError)throw new Error("You need to define a valid entity");if("button"===e.card_type){const t={...e},n=t.button_type||"switch";t.tap_action=t.tap_action??{action:"more-info"},t.double_tap_action=t.double_tap_action??{action:"state"===n?"more-info":"toggle"},t.hold_action=t.hold_action??{action:"state"===n?"more-info":"toggle"},this.config=t}else this.config=e;this._hass&&this.updateBubbleCard()}getCardSize(){switch(this.config.card_type){case"pop-up":return-1e5;case"button":case"separator":case"empty-column":case"media-player":case"select":case"climate":return 1;case"cover":return 2;case"horizontal-buttons-stack":return 0}}static getConfigElement(){return document.createElement("bubble-card-editor")}getLayoutOptions(){let e=1;"pop-up"===this.config.card_type?e=0:"horizontal-buttons-stack"===this.config.card_type?e=1:["cover"].includes(this.config.card_type)&&(e=2);let t=4;return"pop-up"===this.config.card_type?t=0:"horizontal-buttons-stack"===this.config.card_type&&(t=4),{grid_columns:this.config.columns??t,grid_rows:this.config.rows??e}}}customElements.define("bubble-card",gt),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch.",documentationURL:"https://github.com/Clooos/Bubble-Card/"}),console.info(`%c Bubble Card %c ${e} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})()})();
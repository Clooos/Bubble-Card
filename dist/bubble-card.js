/*! For license information please see bubble-card.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={224:(e,t,n)=>{function o(e,t=40){if(Array.isArray(e)&&3===e.length){for(let t=0;t<3;t++)if(e[t]<0||e[t]>255)return;return e.every((e=>Math.abs(e-255)<=t))}}let a;function i(e,t,n=1){if(e.startsWith("#"))if(4===e.length){let o=Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n),i=Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n),r=Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n);a="rgba("+o+", "+i+", "+r+", "+t+")"}else{let o=Math.min(255,parseInt(e.slice(1,3),16)*n),i=Math.min(255,parseInt(e.slice(3,5),16)*n),r=Math.min(255,parseInt(e.slice(5,7),16)*n);a="rgba("+o+", "+i+", "+r+", "+t+")"}else if(e.startsWith("rgb")){let o=e.match(/\d+/g);a="rgba("+Math.min(255,o[0]*n)+", "+Math.min(255,o[1]*n)+", "+Math.min(255,o[2]*n)+", "+t+")"}else if(e.startsWith("var(--")){let o=e.slice(4,-1),r=window.getComputedStyle(document.documentElement).getPropertyValue(o);(r.startsWith("#")||r.startsWith("rgb"))&&(a=i(r,t,n))}return a}n.d(t,{_k:()=>i,wW:()=>o})},774:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BX:()=>fireEvent,GP:()=>applyScrollingEffect,IL:()=>getAttribute,Jn:()=>tapFeedback,OC:()=>isEntityType,P2:()=>throttle,Vv:()=>isColorLight,X:()=>getWeatherIcon,az:()=>createElement,gJ:()=>getImage,jk:()=>forwardHaptic,jx:()=>setLayout,mk:()=>getIconColor,o0:()=>formatDateTime,oY:()=>getName,pr:()=>isStateOn,q7:()=>getIcon,y0:()=>getState});var _style_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(224);const fireEvent=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const a=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return a.detail=n,e.dispatchEvent(a),a},forwardHaptic=e=>{fireEvent(window,"haptic",e)},navigate=(e,t,n=!1)=>{n?history.replaceState(null,"",t):history.pushState(null,"",t),fireEvent(window,"location-changed",{replace:n})};function tapFeedback(e){void 0!==e&&(e.style.display="",e.style.animation="tap-feedback .3s",setTimeout((()=>{e.style.animation="none",e.style.display="none"}),500))}function getIcon(e,t=e.config.entity,n=e.config.icon){const o=t?.split(".")[0],a=getAttribute(e,"device_class",t),i=getAttribute(e,"icon",t),r=n,l=getState(e,t),s={alarm_control_panel:"mdi:shield",alert:"mdi:alert",automation:"mdi:playlist-play",binary_sensor:function(){const n="off"===l;switch(getAttribute(e,"device_class",t)){case"battery":return n?"mdi:battery":"mdi:battery-outline";case"battery_charging":return n?"mdi:battery":"mdi:battery-charging";case"cold":return n?"mdi:thermometer":"mdi:snowflake";case"connectivity":return n?"mdi:server-network-off":"mdi:server-network";case"door":return n?"mdi:door-closed":"mdi:door-open";case"garage_door":return n?"mdi:garage":"mdi:garage-open";case"heat":return n?"mdi:thermometer":"mdi:fire";case"light":return n?"mdi:brightness-5":"mdi:brightness-7";case"lock":return n?"mdi:lock":"mdi:lock-open";case"moisture":return n?"mdi:water-off":"mdi:water";case"motion":return n?"mdi:motion-sensor-off":"mdi:motion-sensor";case"occupancy":case"presence":return n?"mdi:home-outline":"mdi:home";case"opening":return n?"mdi:square":"mdi:square-outline";case"plug":case"power":return n?"mdi:power-plug-off":"mdi:power-plug";case"running":return n?"mdi:stop":"mdi:play";case"safety":case"tamper":return n?"mdi:check-circle":"mdi:alert-circle";case"smoke":return n?"mdi:check-circle":"mdi:smoke";case"sound":return n?"mdi:music-note-off":"mdi:music-note";case"update":return n?"mdi:package":"mdi:package-up";case"vibration":return n?"mdi:crop-portrait":"mdi:vibrate";case"window":return n?"mdi:window-closed":"mdi:window-open";default:return n?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}}(),calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",cover:function(){const n="closed"!==l;switch(getAttribute(e,"device_class",t)){case"awning":return n?"mdi:awning-outline":"mdi:awning";case"blind":return n?"mdi:blinds-open":"mdi:blinds";case"curtain":return n?"mdi:curtains-open":"mdi:curtains";case"damper":case"shutter":default:return n?"mdi:window-shutter-open":"mdi:window-shutter";case"door":return n?"mdi:door-open":"mdi:door-closed";case"garage":return n?"mdi:garage-open":"mdi:garage";case"gate":return n?"mdi:gate-open":"mdi:gate";case"shade":return n?"mdi:roller-shade":"mdi:roller-shade-closed";case"window":return n?"mdi:window-open":"mdi:window-closed"}}(),device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",lock:"mdi:lock",mailbox:"mdi:mailbox",media_player:"mdi:speaker",mower:"mdi:robot-mower",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:file-document",sensor:function(){switch(getAttribute(e,"device_class",t)){case"battery":return 100==l?"mdi:battery":l>=90?"mdi:battery-90":l>=80?"mdi:battery-80":l>=70?"mdi:battery-70":l>=60?"mdi:battery-60":l>=50?"mdi:battery-50":l>=40?"mdi:battery-40":l>=30?"mdi:battery-30":l>=20?"mdi:battery-20":l>=10?"mdi:battery-10":"mdi:battery-alert";case"humidity":return"mdi:water-percent";case"illuminance":return"mdi:brightness-5";case"temperature":return"mdi:thermometer";case"pressure":return"mdi:gauge";case"power":return"mdi:flash";case"signal_strength":return"mdi:wifi";case"energy":return"mdi:lightning-bolt";default:return"mdi:eye"}}(),simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:function(n=getState(e,t)){switch(n){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}(),weblink:"mdi:open-in-new"};return r||i||(s[o]?s[o]:s[a]?s[a]:"")}function getWeatherIcon(e){switch(e){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}const colorCache=new Map;function resolveCssVariable(e){let t=e;const n=getComputedStyle(document.body);for(;t&&t.startsWith("var(");){const e=t.match(/var\((--[^,]+),?\s*(.*)?\)/);if(!e)break;const[,o,a]=e;t=n.getPropertyValue(o).trim()||a&&a.trim()||""}return t}function hexToRgb(e){const t=e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function rgbStringToRgb(e){const t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);return t?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]:null}function calculateLuminance(e,t,n){return(.2126*e+.7152*t+.0722*n)/255}function isColorLight(e){const t=resolveCssVariable(e);if(!t)return!1;if(colorCache.has(t))return colorCache.get(t);let n=hexToRgb(t)||rgbStringToRgb(t);if(!n)return colorCache.set(t,!1),!1;const o=calculateLuminance(...n)>.5;return colorCache.set(t,o),o}function adjustColor(e,t){return e.map((e=>Math.min(255,Math.round(e*t))))}function getIconColor(e,t=e.config.entity,n=1){const{card_type:o,use_accent_color:a}=e.config,i="var(--bubble-accent-color, var(--accent-color))",r=getAttribute(e,"rgb_color",t),l=isColorLight("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))")?n-.2:n;if(!t)return i;if(isEntityType(e,"light")&&!a?"button"===o?e.card.classList.add("is-light"):"pop-up"===o&&e.elements.headerContainer.classList.add("is-light"):"button"===o?e.card.classList.remove("is-light"):"pop-up"===o&&e.elements.headerContainer.classList.remove("is-light"),!t.startsWith("light.")||a)return i;const s=adjustColor([225,225,210],l);if(!r)return`var(--bubble-light-color, rgba(${s.join(", ")}))`;const c=adjustColor(r,l);return(0,_style_js__WEBPACK_IMPORTED_MODULE_0__.wW)(r)?`var(--bubble-light-color, rgba(${s.join(", ")}))`:`var(--bubble-light-color, rgba(${c.join(", ")}))`}function getImage(e,t=e.config.entity){if(e.config.force_icon)return"";const n=getAttribute(e,"entity_picture_local",t)||getAttribute(e,"entity_picture",t);return n?e._hass.hassUrl(n):""}function getName(e){const t=e.config.name,n=getAttribute(e,"friendly_name");return e.name||t||n||""}function getState(e,t=e.config.entity){return e._hass.states[t]?.state??""}function getAttribute(context,attribute,entity=context.config.entity){return attribute?eval(`context._hass.states['${entity}']?.attributes.${attribute}`)??"":""}function isEntityType(e,t){return e.config.entity?.startsWith(t+".")??!1}function isStateOn(e,t=e.config.entity){const n=getState(e,t).toLowerCase(),o=Number(n);return!!(["on","open","opening","closing","cleaning","true","idle","home","playing","paused","locked","occupied","available","running","active","connected","online","mowing","starting","heat","cool","dry","heat_cool","fan_only","auto","alarm"].includes(n)||o>0)}function createElement(e,t=""){const n=document.createElement(e);return""!==t&&t.split(" ").forEach((e=>{n.classList.add(e)})),n}function debounce(e,t){let n;return function(...o){clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}function applyScrollingEffect(e,t,n){const{scrolling_effect:o=!0}=e.config;if(!o)return void applyNonScrollingStyle(t,n);if(t.previousText===n)return;const a=getBubbleClassName(t);function i(){t.innerHTML=`<div class="scrolling-container">${n}</div>`,t.style="",setTimeout((()=>{t.scrollWidth>(t.parentNode?.offsetWidth||0)&&applyScrollingStyle(t,n,a),t.previousText=n}),500)}requestAnimationFrame(i),t.eventAdded||(window.addEventListener("resize",debounce(i,300)),t.eventAdded=!0)}function getBubbleClassName(e){return e.className.split(" ").find((e=>e.startsWith("bubble-")))}function applyScrollingStyle(e,t,n){const o='<span class="bubble-scroll-separator"> | </span>',a=`<span>${t+o+t+o}</span>`;e.innerHTML=`<div class="scrolling-container">${a}</div>`,applyScrollingCSS(e,n)}function applyScrollingCSS(e,t){const n=document.createElement("style");n.innerHTML=`\n        .${t} .scrolling-container {\n            width: 100%;\n            white-space: nowrap;\n            mask-image: linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent);\n        }\n        .${t} .scrolling-container span {\n            display: inline-block;\n            animation: scroll 14s linear infinite;\n        }\n        .bubble-scroll-separator {\n            opacity: .3;\n            margin: 0 6px 0 8px;\n        }\n        @keyframes scroll {\n            from { transform: translateX(0%); }\n            to { transform: translateX(-50%); }\n        }\n    `,e.appendChild(n)}function applyNonScrollingStyle(e,t){e.innerHTML=t,e.previousText=t,Object.assign(e.style,{whiteSpace:"normal",display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical",textOverflow:"ellipsis"})}function formatDateTime(e,t){if(!e)return"";const n=new Date(e),o=new Date;let a,i,r=Math.floor((o-n)/1e3);return isNaN(r)?"":(r<60?(a="second",i=r+1):r<3600?(a="minute",i=Math.floor(r/60)):r<86400?(a="hour",i=Math.floor(r/3600)):(a="day",i=Math.floor(r/86400)),new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(-i,a))}function setLayout(e){const t=e.config.card_layout,n="large"===t||"large-2-rows"===t,o="large-2-rows"===t;n!==e.content.classList.contains("large")&&e.content.classList.toggle("large",n),o!==e.content.classList.contains("rows-2")&&e.content.classList.toggle("rows-2",o)}function throttle(e,t=300){let n;return(...o)=>{void 0===n&&(e(...o),n=setTimeout((()=>{n=void 0}),t))}}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{let e="v2.5.0-beta.1";var t=__webpack_require__(774),n=__webpack_require__(224);function o(e,t,n){setTimeout((()=>{const o=new Event("hass-action",{bubbles:!0,composed:!0}),a={...t};!a.entity_id&&this?.config?.entity&&(a.entity_id=this.config.entity),"tap"===n||"double_tap"===n||"hold"===n?o.detail={config:a,action:n}:(e.modifiedConfig={...a,tap_action:{...a[n]}},delete e.modifiedConfig[n],o.detail={config:e.modifiedConfig,action:"tap"}),e.dispatchEvent(o)}),10)}function a(e,t,n,o){e.classList.add("bubble-action"),e.dataset.entity=t?.entity||n,e.dataset.tapAction=JSON.stringify(t?.tap_action||o?.tap_action||{action:"more-info"}),e.dataset.doubleTapAction=JSON.stringify(t?.double_tap_action||o?.double_tap_action||{action:"toggle"}),e.dataset.holdAction=JSON.stringify(t?.hold_action||o?.hold_action||{action:"toggle"});const a=JSON.parse(e.dataset.tapAction),i=JSON.parse(e.dataset.doubleTapAction),r=JSON.parse(e.dataset.holdAction);e.style.cursor="none"===a.action&&"none"===i.action&&"none"===r.action?"":"pointer"}window.isScrolling=!1,document.addEventListener("scroll",(function(){window.isScrolling=!0,setTimeout((()=>{window.isScrolling=!1}),150)}),{passive:!0}),document.body.addEventListener("pointerdown",(e=>{if(window.isScrolling)return;const t=e.composedPath();let n=null;for(const e of t)if(e.classList&&e.classList.contains("bubble-action")){n=e;break}if(n){const t={tap_action:JSON.parse(n.dataset.tapAction),double_tap_action:JSON.parse(n.dataset.doubleTapAction),hold_action:JSON.parse(n.dataset.holdAction),entity:n.dataset.entity};n.actionHandler||(n.actionHandler=new i(n,t,r)),n.actionHandler.handleStart(e),n.addEventListener("pointerup",n.actionHandler.handleEnd.bind(n.actionHandler),{once:!0}),document.addEventListener("scroll",n.actionHandler.handleScroll.bind(n.actionHandler),{once:!0})}}),{passive:!0});class i{constructor(e,t,n){this.element=e,this.config=t,this.sendActionEvent=n,this.tapTimeout=null,this.holdTimeout=null,this.startX=0,this.startY=0,this.holdFired=!1,this.pointerMoveListener=this.detectScrollLikeMove.bind(this)}handleStart(e){window.isScrolling||this.isDisconnected||(this.startX=e.clientX,this.startY=e.clientY,this.holdFired=!1,document.addEventListener("pointermove",this.pointerMoveListener),this.holdTimeout=setTimeout((()=>{"none"===(this.config.hold_action||{action:"none"}).action||window.isScrolling||(this.sendActionEvent(this.element,this.config,"hold"),this.holdFired=!0)}),400))}detectScrollLikeMove(e){const t=Math.abs(e.clientX-this.startX),n=Math.abs(e.clientY-this.startY);(t>5||n>5)&&(clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener))}handleEnd(e){if(window.isScrolling||this.isDisconnected)return;if(clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener),this.holdFired)return;const t=Date.now(),n=this.config.double_tap_action||{action:"none"},o=this.config.tap_action||{action:"none"};this.lastTap&&t-this.lastTap<200&&"none"!==n.action?(clearTimeout(this.tapTimeout),this.sendActionEvent(this.element,this.config,"double_tap")):"none"!==o.action&&(this.tapTimeout=setTimeout((()=>{this.sendActionEvent(this.element,this.config,"tap")}),200)),this.lastTap=t}handleScroll(){clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener)}}function r(e,t,n){const a=t.tap_action||{action:"more-info"},i=t.double_tap_action||{action:"toggle"},r=t.hold_action||{action:"toggle"},l=t.entity||this.config?.entity,s=e=>e.service&&"entity"===e.target?.entity_id&&l?{...e,target:{...e.target,entity_id:l}}:e,c=s(a),d=s(i),u=s(r);let p;switch(n){case"tap":default:p=c;break;case"double_tap":p=d;break;case"hold":p=u}o(e,{entity:l,tap_action:c,double_tap_action:d,hold_action:u},n)}function l(e,n){e.addEventListener("click",(()=>{(0,t.jk)("selection"),(0,t.Jn)(n)}))}let s=!1;function c(){!s&&location.hash&&setTimeout((()=>{const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))}),50)}function d(e){const t=e.startsWith("#")?window.location.href.split("#")[0]+e:e;history.pushState(null,"",t),window.dispatchEvent(new Event("location-changed"))}function u(e,t){e.editor||(e.hideContentTimeout=setTimeout((()=>{const{sectionRow:t,sectionRowContainer:n}=e;"hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!0,t.style.display="none",n?.classList.contains("card")&&(n.style.display="none"))}),t))}function p(e,t){const{showBackdrop:n,hideBackdrop:o}=L(e);t?n():o()}function b(e,t){e.config.background_update||(t?e.verticalStack.appendChild(e.popUp):e.verticalStack.removeChild(e.popUp))}function h(e,t){requestAnimationFrame((()=>{e.classList.toggle("is-popup-opened",t),e.classList.toggle("is-popup-closed",!t)}))}function m(e,t){e.boundClickOutside||(e.boundClickOutside=t=>function(e,t){(t.config.close_by_clicking_outside??1)&&(e.composedPath().find((e=>e.classList?.contains("bubble-pop-up")||["HA-DIALOG","HA-MORE-INFO-DIALOG","HA-DIALOG-DATE-PICKER"].includes(e.nodeName)))||c())}(t,e)),e.resetCloseTimeout||(e.resetCloseTimeout=()=>{!function(e){e.config.auto_close&&e.closeTimeout&&(clearTimeout(e.closeTimeout),e.closeTimeout=setTimeout(c,e.config.auto_close))}(e)}),t?(e.listenersAdded||(e.config.auto_close&&(e.popUp.addEventListener("touchstart",e.resetCloseTimeout,{passive:!0}),e.popUp.addEventListener("click",e.resetCloseTimeout,{passive:!0})),e.listenersAdded=!0),e.clickOutsideListenerAdded||(window.addEventListener("click",e.boundClickOutside,{passive:!0}),e.clickOutsideListenerAdded=!0)):(e.listenersAdded&&(e.config.auto_close&&(e.popUp.removeEventListener("touchstart",e.resetCloseTimeout),e.popUp.removeEventListener("click",e.resetCloseTimeout)),e.listenersAdded=!1),e.clickOutsideListenerAdded&&(window.removeEventListener("click",e.boundClickOutside),e.clickOutsideListenerAdded=!1))}function g(e){!function(){if(document.getElementById("no-scroll-styles"))return;const e=document.createElement("style");e.id="no-scroll-styles",e.textContent="\n        body.no-scroll {\n            overflow: hidden;\n            position: fixed;\n            width: 100%;\n            height: 100%;\n        }\n    ",document.head.appendChild(e)}(),e?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}function f(e){["hideContentTimeout","removeDomTimeout","closeTimeout"].forEach((t=>clearTimeout(e[t])))}const y=".bubble-backdrop {\n  position: fixed;\n  background-color: var(--bubble-backdrop-background-color);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n  opacity: 0;\n  transition: opacity 0.3s;\n  transition-delay: .1s;\n  display: flex;\n  backdrop-filter: var(--custom-backdrop-filter);\n  -webkit-backdrop-filter: var(--custom-backdrop-filter);\n  transform: translate3d(0, 0, 0);\n}\n\n.bubble-backdrop.is-visible {\n  opacity: 1;\n}\n\n.bubble-backdrop.is-hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n";let v,_,w,x,k=!1;const C=window.matchMedia("(prefers-color-scheme: dark)"),$=(0,t.az)("style");function S(){x=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color"),document.body.style.setProperty("--bubble-backdrop-background-color",(0,n._k)(x,.8,.6))}function L(e){const n=e.config.hide_backdrop??!1;if(v)return v;$.innerHTML=y,document.head.appendChild($);const o=(0,t.az)("style");document.head.appendChild(o);const a=(0,t.az)("div","bubble-backdrop backdrop is-hidden");return n&&(a.style.display="none",a.style.pointerEvents="none"),document.body.appendChild(a),a.style.setProperty("--custom-backdrop-filter",`blur(${e.config.backdrop_blur??0}px)`),v={hideBackdrop:function(){a.classList.add("is-hidden"),a.classList.remove("is-visible")},showBackdrop:function(){requestAnimationFrame((()=>{a.classList.add("is-visible"),a.classList.remove("is-hidden")}))},backdropElement:a,backdropCustomStyle:o},v}function A(e,t,n,o){let a;switch(n){case"hvac_modes":a=document.createElement("ha-icon"),a.slot="graphic",a.icon=function(e){switch(e){case"auto":return"mdi:thermostat-auto";case"cool":return"mdi:snowflake";case"heat":return"mdi:fire";case"heat_cool":return"mdi:sun-snowflake-variant";case"dry":return"mdi:water-percent";case"fan_only":default:return"mdi:fan";case"off":return"mdi:power"}}(o);break;case"fan_modes":if(!t.attributes.fan_modes)return null;a=document.createElement("ha-attribute-icon"),a.slot="graphic",a.attribute="fan_mode",a.attributeValue=o,a.hass=e._hass,a.stateObj=t;break;case"swing_modes":a=document.createElement("ha-attribute-icon"),a.slot="graphic",a.attribute="swing_mode",a.attributeValue=o,a.hass=e._hass,a.stateObj=t;break;case"preset_modes":a=document.createElement("ha-attribute-icon"),a.slot="graphic",a.attribute="preset_mode",a.attributeValue=o,a.hass=e._hass,a.stateObj=t;break;default:a=!1}return a}C.addEventListener("change",S),S();const E="* {\n    -webkit-tap-highlight-color: transparent !important;\n}\nha-card {\n    margin-top: 0;\n    background: none;\n    opacity: 1;\n}\nmwc-list-item {\n    border-radius: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 24px));\n    margin: 0 8px;\n}\nmwc-list-item[selected] {\n    color: var(--primary-text-color) !important;\n    background-color: var(--bubble-select-list-item-accent-color, var(--bubble-list-item-accent-color, var(--bubble-accent-color, var(--accent-color)))); /* Added the missing 'select' in the first var without removing the previous one for compatibilty */ \n}\nha-select {\n    --mdc-shape-medium: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 32px));\n    --mdc-theme-surface: var(--bubble-select-list-background-color, var(--bubble-select-main-background-color, var(--bubble-main-background-color, var(--card-background-color, var(--secondary-background-color)))));\n    --mdc-shape-large: 32px;\n    --mdc-shape-small: 64px;\n    --mdc-menu-max-width: min-content;\n    --mdc-menu-min-width: var(--bubble-select-list-width, 200px);\n    --mdc-select-max-width: min-content;\n    --mdc-select-outlined-hover-border-color: transparent;\n    --mdc-select-outlined-idle-border-color: transparent;\n    --mdc-theme-primary: transparent;\n    --right-value: calc(var(--mdc-menu-min-width) - 154px);\n}\n.mdc-select {\n    color: transparent !important;\n    width: 150px !important;\n    position: absolute !important;\n    pointer-events: none;\n    right: var(--right-value, 46px);\n    top: -28px;\n}\n.mdc-menu, mwc-list, .mdc-list-item {\n    pointer-events: auto;\n}\n.mdc-select__dropdown-icon {\n    display: none !important;\n}\n.mdc-select__selected-text {\n    color: transparent !important;\n}\n.mdc-select__anchor {\n    width: 100%;\n    pointer-events: none;\n}\n.bubble-dropdown-container {\n    display: flex !important;\n    width: auto;\n    height: 100%;\n    align-items: center;\n}\n.bubble-dropdown-arrow {\n    display: flex;\n    position: absolute;\n    background: var(--bubble-select-arrow-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    height: 36px;\n    width: 36px;\n    right: 6px;\n    pointer-events: none;\n    border-radius: var(--bubble-select-button-border-radius, var(--bubble-border-radius, 20px));\n    align-items: center;\n    justify-content: center;\n    transition: background 0.2s, transform 0.2s;\n    pointer-events: none;\n}\n.bubble-dropdown-select {\n    position: relative;\n    width: 42px;\n}\n.is-unavailable {\n    opacity: 0.5;\n}\n.bubble-select-card-container {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: var(--bubble-select-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    border-radius: var(--bubble-select-border-radius, var(--bubble-border-radius, 32px));\n    box-shadow: var(--bubble-select-box-shadow, var(--bubble-box-shadow, none));\n    touch-action: pan-y;\n    box-sizing: border-box;\n    border: solid 2px transparent;\n    transition: all 0.15s;\n    cursor: pointer;\n    border: var(--bubble-select-border, var(--bubble-border, none));\n}\n.bubble-select-card,\n.bubble-select-background {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    transition: background-color 1.5s;\n}\n.bubble-select-background {\n    background-color: var(--bubble-select-background-color);\n    opacity: .5;\n    overflow: hidden !important;\n    border-radius: var(--bubble-select-border-radius, var(--bubble-border-radius, 32px));\n}\n.is-unavailable .bubble-select-card {\n    cursor: not-allowed;\n}\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n    min-width: 38px;\n    min-height: 38px;\n    margin: 6px;\n    border-radius: var(--bubble-select-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-select-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n}\n.bubble-icon-container::after {\n    content: '';\n    background-color: currentColor;\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    transition: all 1s;\n    left: 0;\n    right: 0;\n    opacity: 0;\n    pointer-events: none;\n}\n\n.bubble-icon {\n    display: flex;\n    opacity: 0.6;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-name,\n.bubble-state {\n    display: flex;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 18px;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    margin: 0 16px 0 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-weight: 600;\n}\n\n.bubble-state {\n    font-size: 12px;\n    font-weight: normal;\n    opacity: 0.7;\n}\n\n.bubble-feedback-element {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0);\n    pointer-events: none;\n}\n\n@keyframes tap-feedback {\n    0% {transform: translateX(-100%); opacity: 0;}\n    64% {transform: translateX(0); opacity: 0.1;}\n    100% {transform: translateX(100%); opacity: 0;}\n}\n\n.large .bubble-select-card-container {\n  height: 56px;\n  border-radius: var(--bubble-select-border-radius, var(--bubble-border-radius, 32px));\n}\n\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  margin-left: 6px;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, min-content);\n  grid-template-rows: repeat(2, 1fr);\n  grid-auto-flow: column;\n  width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n";function T(e,n=e.elements,o){n.dropdownContainer=(0,t.az)("div","bubble-dropdown-container"),n.dropdownSelect=(0,t.az)("ha-select","bubble-dropdown-select"),n.dropdownSelect.setAttribute("outlined",""),n.dropdownArrow=(0,t.az)("ha-icon","bubble-dropdown-arrow"),n.dropdownArrow.setAttribute("icon","mdi:chevron-down"),n.dropdownContainer.appendChild(n.dropdownArrow),n.dropdownStyleElement=(0,t.az)("style"),n.dropdownCustomStyleElement=(0,t.az)("style"),n.dropdownStyleElement.textContent=E,n.dropdownSelect.updateComplete.then((()=>{!function(){if(n.dropdownSelect.shadowRoot)if(n!==e.elements){n.dropdownSelectStyleElement=(0,t.az)("style"),n.dropdownSelectStyleElement.textContent=E,n.dropdownSelect.shadowRoot.appendChild(n.dropdownSelectStyleElement),n.dropdownContainer.appendChild(n.dropdownStyleElement),o&&(n.dropdownContainer.style.width="24px"),n.dropdownArrow.style.height="20px",n.dropdownArrow.style.width="20px",n.mainContainer=n.parentElement.parentElement.parentElement;let e=n.dropdownSelect.shadowRoot.querySelector("mwc-menu");e&&(e.style.position="relative",e.style.right="138px")}else n.dropdownSelect.shadowRoot.appendChild(n.dropdownStyleElement),n.dropdownSelect.shadowRoot.appendChild(n.dropdownCustomStyleElement)}()})),n===e.elements?n.selectCard.appendChild(n.dropdownContainer):n.appendChild(n.dropdownContainer)}function O(e,t=e.elements,n=e.config.entity,o=e.config){const{dropdownArrow:a,dropdownSelect:i,selectCardContainer:r,selectBackground:l}=t,s=t===e.elements?r:t,c=t===e.elements?l:t;t!==e.elements&&(s.style.border="solid 2px rgba(0,0,0,0)");let d=!0;c.addEventListener("click",(e=>{if("mwc-list-item"===e.target.tagName.toLowerCase())return;const n=i.shadowRoot.querySelector("mwc-menu"),o=()=>{a.style.transform="rotate(180deg)",t.dropdownArrow.style.background="var(--accent-color)",s.style.border="var(--bubble-select-border, solid 2px var(--accent-color))",t.mainContainer&&(t.mainContainer.style.overflow="visible")};d?(d=!1,a.style.transition="none",n.setAttribute("open",""),requestAnimationFrame((()=>{n.removeAttribute("open"),setTimeout((()=>{a.style.transition="",o()}),140)}))):(n.hasAttribute("open")||(n.removeAttribute("mdc-menu-surface--is-open-below"),n.setAttribute("mdc-menu-surface--is-open-above",""),n.setAttribute("open","")),o())})),i.addEventListener("closed",(e=>{e.stopPropagation(),e.preventDefault(),a.style.transform="rotate(0deg)",s.style.border="solid 2px rgba(0,0,0,0)",t.dropdownArrow.style.background="",t.mainContainer&&(t.mainContainer.style.overflow="")})),t.dropdownSelect.addEventListener("click",(t=>{const a=t.target.value;!function(e,t,n,o){const a=t?.split(".")[0];switch(a){case"input_select":e._hass.callService("input_select","select_option",{entity_id:t,option:n});break;case"select":e._hass.callService("select","select_option",{entity_id:t,option:n});break;case"climate":switch(o.select_attribute){case"hvac_modes":e._hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:n});break;case"fan_modes":e._hass.callService("climate","set_fan_mode",{entity_id:t,fan_mode:n});break;case"swing_modes":e._hass.callService("climate","set_swing_mode",{entity_id:t,swing_mode:n});break;case"preset_modes":e._hass.callService("climate","set_preset_mode",{entity_id:t,preset_mode:n})}break;case"fan":"preset_modes"===o.select_attribute&&e._hass.callService("fan","set_preset_mode",{entity_id:t,preset_mode:n});break;case"light":"effect_list"===o.select_attribute&&e._hass.callService("light","turn_on",{entity_id:t,effect:n});break;case"media_player":switch(o.select_attribute){case"source_list":e._hass.callService("media_player","select_source",{entity_id:t,source:n});break;case"sound_mode_list":e._hass.callService("media_player","select_sound_mode",{entity_id:t,sound_mode:n})}break;default:console.warn(`Unsupported entity type: ${a}`)}}(e,n,a,o)}))}let z,B=new Map,P=new Map;const I=e=>{const t={};let n=null,o="",a=!1;return e.split("\n").forEach((e=>{(e=e.trim())&&(e.includes(": >")?(n&&(t[n]=o.trim()),[n]=e.split(": >"),o="",a=!0):e.endsWith(":")&&!a?(n&&(t[n]=o.trim()),n=e.slice(0,-1),o=""):o+=e+"\n")})),n&&(t[n]=o.trim()),t},V=async(e,t=e.card)=>{const n="pop-up"!==e.config.card_type?t:e.popUp,o=e.config.style_templates??"default",a=e.config.styles;e.lastEvaluatedStyles??="",e.initialLoad??=!0;try{e.initialLoad&&(n.style.display="none");let i=t.querySelector("#bubble-styles");i||(i=document.createElement("style"),i.id="bubble-styles",t.appendChild(i));const r=await e.stylesYAML;let l=Array.isArray(o)?o.map((e=>r[e]??"")).join("\n"):r[o]||"";const s=`${M(e,a)}\n${M(e,l)}`.trim();s!==e.lastEvaluatedStyles&&(i.textContent=s,e.lastEvaluatedStyles=s),e.initialLoad&&(n.style.display="",e.initialLoad=!1),e.cardLoaded=!0}catch(t){e.editor||console.error("Error loading YAML styles:",t),n.style.display=""}};function M(e,n=""){if(!n)return"";try{const a=(o=Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card","name",`return \`${n}\`;`).call(e,e._hass,e.config.entity,(0,t.y0)(e),e.elements.icon,e.subButtonIcon,t.X,e.card,e.card.name),o.replace(/undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g,"").replace(/[^{}]\s*{\s*}/g,"").replace(/([a-z-]+)\s*:\s*;/g,"").replace(/\s+/g," ").trim().match(/(@[^{]*?{(?:[^{}]*?{[^{}]*?}?)*?[^{}]*?}|[^{}]*?{[^{}]*?})/g)?.join("\n")||"");return e.editor&&e.templateError&&(U(""),e.templateError=""),a}catch(t){const n=`Bubble Card - Template error from a ${e.config.card_type} card: ${t.message}`;return e.editor&&(requestAnimationFrame((()=>U(t.message))),e.templateError=t.message),console.error(n),""}var o}function U(e){window.dispatchEvent(new CustomEvent("bubble-card-error",{detail:e}))}function H(e,t=e.elements,n=e.config.entity,o){if(t.currentState=e._hass.states[n]?.state,!t.currentState)return;if(t.currentList=n?.startsWith("input_select")||n?.startsWith("select")?e._hass.states[n].attributes.options:e._hass.states[n].attributes[o.select_attribute],t.previousList===t.currentList&&t.previousState===t.currentState)return;let a=t.currentList;for(t.currentState;t.dropdownSelect.firstChild;)t.dropdownSelect.removeChild(t.dropdownSelect.firstChild);a.forEach((a=>{const i=document.createElement("mwc-list-item");i.value=a;const r=A(e,e._hass.states[n],o.select_attribute,a);r&&(i.graphic="icon",i.appendChild(r));const l=function(e,t,n,o){function a(e){const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}switch(n){case"fan_modes":return e._hass.formatEntityAttributeValue(t,"fan_mode",o);case"hvac_modes":return e._hass.formatEntityState(t,o);case"swing_modes":return e._hass.formatEntityAttributeValue(t,"swing_mode",o);case"preset_modes":return e._hass.formatEntityAttributeValue(t,"preset_mode",o);default:return a(e._hass.formatEntityState(t,o))??a(o)}}(e,e._hass.states[n],o.select_attribute,a);i.appendChild(document.createTextNode(l)),a===function(e,t){switch(t){case"fan_modes":return e.attributes.fan_mode||null;case"swing_modes":return e.attributes.swing_mode||null;case"preset_modes":return e.attributes.preset_mode||null;case"effect_list":return e.attributes.effect||null;case"source_list":return e.attributes.source||null;case"sound_mode_list":return e.attributes.sound_mode||null;default:return e.state}}(e._hass.states[n],o.select_attribute)&&i.setAttribute("selected",""),t.dropdownSelect.appendChild(i),t.previousList=t.currentList,t.previousState=t.currentState})),t.dropdownContainer.appendChild(t.dropdownSelect)}function N(e,t){try{if(e.states[t])return e.states[t]?.state}catch{}}function D(e,t){const n=e.entity&&t.states[e.entity]?t.states[e.entity].state:"unavailable";let o=e.state??e.state_not;if(Array.isArray(o)){const e=o.map((e=>N(t,e))).filter((e=>void 0!==e));o=[...o,...e]}else if("string"==typeof o){const e=N(t,o);o=[o],e&&o.push(e)}return null!=e.state?j(o).includes(n):!j(o).includes(n)}function j(e){return void 0===e||Array.isArray(e)?e:[e]}function R(e,t){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return!!(n=e).media_query&&matchMedia(n.media_query).matches;case"user":return function(e,t){return!(!e.users||!t.user?.id)&&e.users.includes(t.user.id)}(e,t);case"numeric_state":return function(e,t){const n=(e.entity?t.states[e.entity]:void 0)?.state;let o=e.above,a=e.below;"string"==typeof o&&(o=N(t,o)??o),"string"==typeof a&&(a=N(t,a)??a);const i=Number(n),r=Number(o),l=Number(a);return!isNaN(i)&&(null==e.above||isNaN(r)||r<i)&&(null==e.below||isNaN(l)||l>i)}(e,t);case"and":return function(e,t){return!e.conditions||R(e.conditions,t)}(e,t);case"or":return function(e,t){return!e.conditions||e.conditions.some((e=>R([e],t)))}(e,t);default:return D(e,t)}var n;return D(e,t)}))}function q(e){return null!=e.entity&&(null!=e.state||null!=e.state_not)}function W(e){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return null!=e.media_query;case"user":return null!=e.users;case"numeric_state":return function(e){return null!=e.entity&&(null!=e.above||null!=e.below)}(e);case"and":case"or":return function(e){return null!=e.conditions}(e);default:return q(e)}return q(e)}))}function Y(e){const n=e._hass.states[e.config.entity],o=(0,t.IL)(e,e.config.attribute,e.config.entity),a=n?.last_changed,i="state"===e.config.button_type,r=e.config.show_name??!0,l=e.config.show_icon??!0,s=e.config.show_state??i,c=e.config.show_attribute??i,d=e.config.show_last_changed??e.config.show_last_updated??!1,u=e.config.scrolling_effect??!0,p=e.previousConfig||{};if(e.previousState===n&&e.previousAttribute===o&&e.previousLastChanged===a&&p.showName===r&&p.showIcon===l&&p.showState===s&&p.showAttribute===c&&p.showLastChanged===d&&p.scrollingEffect===u)return;let b=n&&s?e._hass.formatEntityState(n):"",h="",m="",g="";var f;c&&o&&(h=n?e._hass.formatEntityAttributeValue(n,e.config.attribute)??o:""),d&&n&&(m=n?(f=(0,t.o0)(a,e._hass.locale.language)).charAt(0).toUpperCase()+f.slice(1):""),e.elements.stateStyles||(e.elements.stateStyles=(0,t.az)("style"),e.elements.stateStyles.textContent=F,e.content.appendChild(e.elements.stateStyles),"pop-up"===e.config.card_type&&e.elements.buttonContainer.appendChild(e.elements.stateStyles)),g=[b,h,m].filter(Boolean).join(" • "),e.elements.name.classList.toggle("hidden",!r),e.elements.iconContainer.classList.toggle("hidden",!l),e.elements.nameContainer.classList.toggle("name-without-icon",!l),e.elements.state.classList.toggle("state-without-name",(s||d||c)&&!r),e.elements.state.classList.toggle("display-state",s||d||c),e.elements.state.classList.toggle("hidden",!(s||d||c)),e.config.styles?.includes("card.querySelector('.bubble-state').innerText")||(0,t.GP)(e,e.elements.state,g),e.previousState=n,e.previousAttribute=o,e.previousConfig={showName:r,showIcon:l,showState:s,showAttribute:c,showLastChanged:d,scrollingEffect:u}}const F="\n    .hidden {\n        display: none !important;\n    }\n\n    .state-without-name {\n        opacity: 1;\n        font-size: 14px;\n    }\n\n    .name-without-icon {\n        margin-left: 16px;\n    }\n\n    .display-state {\n        display: flex;\n    }\n";function X(e,n=e.content,o=n.firstChild.firstChild,i=!1){const r=e.config.sub_button;if(!r)return;e.previousValues=e.previousValues||{};const s=[...e.previousValues.subButtons||[]];e.elements=e.elements||{};let c=e.elements.subButtonContainer;if(!c){c=(0,t.az)("div","bubble-sub-button-container");const n=(0,t.az)("style");n.textContent=J,c.appendChild(n),i?o.prepend(c):o.appendChild(c),e.elements.subButtonContainer=c}if(Array.isArray(r)){r.forEach(((n,o)=>{if(!n)return;const i=o+1,r=n.entity??e.config.entity,s=e._hass.states[r],d=n.name??(0,t.IL)(e,"friendly_name",r)??"",u=n.attribute??"",p=(0,t.IL)(e,u,r),b=(0,t.pr)(e,r);if("fan_modes"===u&&null==p)return void(e.elements[i]||(0,t.az)("div","bubble-sub-button bubble-sub-button-"+i)).classList.add("hidden");const h=n.show_name??!1,m=n.show_state??!1,g=n.show_attribute??!1,f=(n.show_last_changed||n.show_last_updated)??!1,y=n.show_icon??!0,v=n.show_background??!0,_=n.state_background??!0,w=n.light_background??!0,x=n.show_arrow??!0,k=r?.startsWith("input_select")||r?.startsWith("select")||n.select_attribute,C=(0,t.q7)(e,n.entity,n.icon??"");let $=e.elements[i];if(!$||k&&!$.dropdownContainer){let o=-1;$&&(o=Array.prototype.indexOf.call(c.children,$)),$&&k&&!$.dropdownContainer&&c.contains($)&&(c.removeChild($),$=null),$=(0,t.az)("div","bubble-sub-button bubble-sub-button-"+i),$.nameContainer=(0,t.az)("div","bubble-sub-button-name-container"),$.feedbackContainer=(0,t.az)("div","bubble-feedback-container"),$.feedback=(0,t.az)("div","bubble-feedback-element feedback-element"),$.appendChild($.feedbackContainer),$.feedbackContainer.appendChild($.feedback),k&&(T(e,$,x),$.dropdownContainer.style.display="none",O(e,$,r,n)),$.appendChild($.nameContainer),o>=0&&o<c.children.length?c.insertBefore($,c.children[o]):c.appendChild($),e.elements[i]=$}if(k&&$.dropdownSelect){const t=e._hass.states[r]?.state,o=e.previousValues[r]?.state;if(t!==o){if(t&&$.dropdownSelect.value!==t){$.dropdownSelect.value=t;const e=new Event("change",{bubbles:!0});$.dropdownSelect.dispatchEvent(e)}e.previousValues[r]={state:t}}H(e,$,r,n),x?($.dropdownArrow.style.display="",$.dropdownContainer.style.width="24px"):($.dropdownArrow.style.display="none",$.dropdownContainer.style.width="0px",$.style.padding="6px")}else $.contains($.dropdownContainer)&&$.removeChild($.dropdownContainer);const S=!(!k||!$.dropdownSelect)&&Array.from($.dropdownSelect.children).find((e=>e.hasAttribute("selected")))?.value;if(y&&C){let o=$.icon;if(o||(o=(0,t.az)("ha-icon","bubble-sub-button-icon"),o.classList.add("show-icon"),$.appendChild(o),$.icon=o),S){const t=A(e,s,n.select_attribute,S);t&&!n.icon?(o.tagName!==t.tagName||o.icon!==t.icon||o.attribute!==t.attribute||o.attributeValue!==t.attributeValue)&&($.replaceChild(t,o),$.icon=t,o=t):o.icon!==C&&o.setAttribute("icon",C)}else o.icon!==C&&o.setAttribute("icon",C);o.classList.remove("hidden"),o.classList.add("bubble-sub-button-icon","show-icon")}else $.icon&&($.icon.classList.remove("show-icon"),$.icon.classList.add("hidden"));if(v){const n=(0,t.Vv)("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))");b&&_?(w&&$.style.setProperty("--bubble-sub-button-light-background-color",(0,t.mk)(e,r,n?1:.8)),$.classList.add("background-on"),$.classList.remove("background-off")):($.classList.add("background-off"),$.classList.remove("background-on"))}else $.classList.remove("background-on","background-off");"none"===n.tap_action?.action&&"none"===n.double_tap_action?.action&&"none"===n.hold_action?.action||$.actionAdded||(a($,k?"":n,r,{tap_action:{action:k?"none":"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}}),l($,$.feedback),k&&($.style.pointerEvents="auto",$.style.cursor="pointer"),$.actionAdded=!0);let L="";const E=s&&m?e._hass.formatEntityState(s):"",z=s&&""!==p&&g?e._hass.formatEntityAttributeValue(s,u)??p:"",B=s&&f?(0,t.o0)(s.last_changed,e._hass.locale.language):"";h&&""!==d&&(L+=d),""!==E&&(L+=(L?" · ":"")+E),""!==B&&(L+=(L?" · ":"")+B),""!==z&&(L+=(L?" · ":"")+z),L=L.charAt(0).toUpperCase()+L.slice(1),L||y||k?($.classList.remove("hidden"),$.nameContainer.textContent!==L&&($.nameContainer.textContent=L),y&&$.icon&&($.icon.classList.toggle("icon-with-state",!!L),$.icon.classList.toggle("icon-without-state",!L)),L||y||!k?k&&($.dropdownContainer.classList.remove("no-icon-select-container"),$.dropdownArrow.classList.remove("no-icon-select-arrow")):($.dropdownContainer.classList.add("no-icon-select-container"),$.dropdownArrow.classList.add("no-icon-select-arrow"))):($.classList.add("hidden"),$.dropdownContainer&&($.dropdownContainer.classList.remove("no-icon-select-container"),$.dropdownArrow.classList.remove("no-icon-select-arrow")));const P=n.visibility;if(null!=P){const t=j(P);if(W(t)){const n=R(t,e._hass);$.classList.toggle("hidden",!n)}}})),e.previousValues.subButtons=r.slice();for(let t=s.length;t>0;t--)if(t>r.length){const n=e.elements[t];n&&(c.removeChild(n),delete e.elements[t])}}}const J="\n    .bubble-sub-button-container {\n        position: relative;\n        display: flex;\n        justify-content: end;\n        right: 8px;\n        align-content: center;\n        gap: 8px;\n        align-items: center;\n    }\n    .bubble-sub-button {\n        display: flex;\n        flex-wrap: nowrap;\n        flex-direction: row-reverse;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        right: 0;\n        box-sizing: border-box;\n        width: min-content;\n        min-width: 36px;\n        height: 36px;\n        vertical-align: middle;\n        font-size: 12px;\n        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n        padding: 0 8px;\n        white-space: nowrap;\n        transition: all 0.5s ease-in-out;\n        color: var(--primary-text-color);\n    }\n    .bubble-feedback-container {\n        display: flex;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n        overflow: hidden;\n        pointer-events: none;\n    }\n    .bubble-sub-button-name-container {\n        display: flex;\n    }\n    .show-icon {\n        display: flex;\n        --mdc-icon-size: 16px;\n    }\n    .background-on {\n        background-color: var(--bubble-sub-button-light-background-color, var(--accent-color));\n    }\n    .background-off {\n        background-color: var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    }\n    .hidden {\n        display: none;\n    }\n    .icon-with-state {\n        margin-right: 4px;\n        --mdc-icon-size: 16px;\n    }\n    .icon-without-state {\n        margin-right: 0;\n        --mdc-icon-size: 20px;\n    }\n    .no-icon-select-arrow {\n        width: 28px !important;\n        height: 28px !important;\n        right: 2px !important;        \n    }\n    .no-icon-select-container {\n        width: 16px !important;\n    }\n    .bubble-dropdown-arrow {\n        background: var(--bubble-select-arrow-background-color) !important;\n    }\n";function G(e){Array.isArray(e.subButtonIcon)||(e.subButtonIcon=[]),"pop-up"===e.config.card_type?e.popUp.querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t})):e.content.querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t}))}function K(e){let t=e.config.button_type;return"custom"===t&&(console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"'),t=""),e.config.entity?t||"switch":t||"name"}function Z(e,n){const o=e._hass.states[e.config.entity];if((0,t.OC)(e,"light"))e._hass.callService("light","turn_on",{entity_id:e.config.entity,brightness:Math.round(255*n/100)});else if((0,t.OC)(e,"media_player"))e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:(n/100).toFixed(2)});else if((0,t.OC)(e,"cover"))e._hass.callService("cover","set_cover_position",{entity_id:e.config.entity,position:Math.round(n)});else if((0,t.OC)(e,"input_number")){const a=o.attributes.min??0,i=o.attributes.max??100,r=(0,t.IL)(e,"step")??1;let l=(i-a)*n/100+a,s=Math.round(l/r)*r;e._hass.callService("input_number","set_value",{entity_id:e.config.entity,value:s})}else if((0,t.OC)(e,"fan")){const t=o.attributes.percentage_step??1;let a=Math.round(n/t)*t;e._hass.callService("fan","set_percentage",{entity_id:e.config.entity,percentage:a})}else if((0,t.OC)(e,"climate")){const t=o.attributes.min_temp??0,a=o.attributes.max_temp??1e4,i="°C"===e._hass.config.unit_system.temperature,r=o.attributes.target_temp_step?o.attributes.target_temp_step:i?.5:1;let l=(a-t)*n/100+t,s=Math.round(l/r)*r;s=parseFloat(s.toFixed(1)),e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:s})}else if((0,t.OC)(e,"number")){const t=o.attributes.min??0,a=o.attributes.max??100,i=o.attributes.step??1;let r=(a-t)*n/100+t,l=Math.round(r/i)*i;e._hass.callService("number","set_value",{entity_id:e.config.entity,value:l})}}function Q(e,t){const n=e.elements.rangeSlider.getBoundingClientRect(),o=100*(t-n.left)/n.width,a=Math.min(100,Math.max(0,o));return e.elements.rangeFill.style.transform=`translateX(${a}%)`,a}const ee="* {\n    -webkit-tap-highlight-color: transparent !important;\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n}\n*::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n}\nha-card {\n    margin-top: 0;\n    background: none;\n    opacity: 1;\n}\n.is-unavailable {\n    opacity: 0.5;\n}\n\n.bubble-button-card-container {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));\n    box-shadow: var(--bubble-button-box-shadow, var(--bubble-box-shadow, none));\n    overflow: scroll;\n    touch-action: pan-y;\n    border: var(--bubble-button-border, var(--bubble-border, none));\n}\n\n.bubble-button-card,\n.bubble-range-slider,\n.bubble-button-background {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    transition: background-color 1.5s;\n}\n.bubble-button-background {\n    background-color: var(--bubble-button-background-color);\n    opacity: .5;\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, 32px)) / 1.1);\n}\n.bubble-range-fill {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    left: -100%;\n    transition: all .3s;\n    z-index: 0;\n}\n.is-dragging .bubble-range-fill {\n    transition: none;\n}\n.is-light .bubble-range-fill {\n    opacity: 0.5;\n}\n.is-unavailable .bubble-button-card,\n.is-unavailable .bubble-range-slider {\n    cursor: not-allowed;\n}\n.bubble-range-slider {\n    cursor: ew-resize;\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, 32px)) / 1.1);\n    overflow: hidden;\n    mask-image: radial-gradient(white, black);\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n    min-width: 38px;\n    min-height: 38px;\n    margin: 6px;\n    border-radius: var(--bubble-button-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n}\n\n.bubble-icon {\n    display: flex;\n    opacity: 0.6;\n}\n\n.is-on .bubble-icon {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-name,\n.bubble-state {\n    display: flex;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 18px;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    margin: 0 16px 0 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-size: 13px;\n    font-weight: 600;\n}\n\n.bubble-state {\n    font-size: 12px;\n    font-weight: normal;\n    opacity: 0.7;\n}\n\n.bubble-feedback-element {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0);\n    pointer-events: none;\n}\n\n@keyframes tap-feedback {\n    0% {transform: translateX(-100%); opacity: 0;}\n    64% {transform: translateX(0); opacity: 0.1;}\n    100% {transform: translateX(100%); opacity: 0;}\n}\n\n.large .bubble-button-card-container {\n  height: 56px;\n  border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));\n}\n\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  margin-left: 8px;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, min-content);\n  grid-template-rows: repeat(2, 1fr);\n  grid-auto-flow: column;\n  width: auto;\n  padding-right: 4px;\n}\n\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n";function te(e,n=e.content,o=n){const i=K(e);e.cardType!==`button-${i}`&&e.buttonType!==i&&(function(e,n=e.content,o=n){const a=K(e);e.dragging=!1,e.elements||(e.elements={}),e.elements.buttonCardContainer=(0,t.az)("div","bubble-button-card-container bubble-container button-container"),e.elements.buttonCard=(0,t.az)("div","bubble-button-card switch-button"),e.elements.buttonBackground=(0,t.az)("div","bubble-button-background"),e.elements.nameContainer=(0,t.az)("div","bubble-name-container name-container"),e.elements.iconContainer=(0,t.az)("div","bubble-icon-container icon-container"),e.elements.name=(0,t.az)("div","bubble-name name"),e.elements.state=(0,t.az)("div","bubble-state state"),e.elements.feedback=(0,t.az)("div","bubble-feedback-element feedback-element"),e.elements.icon=(0,t.az)("ha-icon","bubble-icon icon"),e.elements.image=(0,t.az)("div","bubble-entity-picture entity-picture"),e.elements.style=(0,t.az)("style"),e.elements.customStyle=(0,t.az)("style"),e.elements.feedback.style.display="none",e.elements.style.innerText=ee,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),"name"!==a&&e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonCard.appendChild(e.elements.buttonBackground),e.elements.buttonCard.appendChild(e.elements.iconContainer),e.elements.buttonCard.appendChild(e.elements.nameContainer),e.elements.buttonCard.appendChild(e.elements.feedback),e.elements.buttonCardContainer.appendChild(e.elements.buttonCard),n.innerHTML="",o===n&&n.appendChild(e.elements.buttonCardContainer),n.appendChild(e.elements.style),n.appendChild(e.elements.customStyle),o!==n?(o.innerHTML="",e.elements.buttonCardContainer.appendChild(n),o.appendChild(e.elements.buttonCardContainer),e.buttonType=a):e.cardType=`button-${a}`}(e,n,o),"switch"===i?function(e){a(e.elements.iconContainer,e.config),a(e.elements.buttonBackground,e.config.button_action,e.config.entity,{tap_action:{action:"toggle"},double_tap_action:{action:"toggle"},hold_action:{action:"more-info"}}),l(e.elements.buttonBackground,e.elements.feedback)}(e):"slider"===i?function(e){a(e.elements.iconContainer,e.config);let n=0,o=null;e.elements.rangeFill=(0,t.az)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,t.az)("div","bubble-range-slider range-slider"),e.elements.rangeSlider.appendChild(e.elements.rangeFill),e.elements.buttonCardContainer.appendChild(e.elements.rangeSlider),e.elements.buttonCardContainer.insertBefore(e.elements.rangeSlider,e.elements.buttonCard),e.elements.buttonCard.style.cursor="ew-resize",e.elements.buttonCardContainer.addEventListener("pointercancel",(function(){clearTimeout(o),e.dragging=!1,e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l)})),e.elements.buttonCardContainer.addEventListener("pointerdown",(t=>{t.target.closest(".bubble-action")||(e.elements.buttonCardContainer.setPointerCapture(t.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,n=t.pageX||(t.touches?t.touches[0].pageX:0),e.elements.buttonCardContainer.classList.add("is-dragging"),e.elements.buttonCardContainer.addEventListener("pointermove",r),window.addEventListener("pointerup",l)))}));const i=(0,t.P2)(Z,200);function r(t){if(t.stopPropagation(),t.target.closest(".bubble-action"))return;const n=t.pageX||(t.touches?t.touches[0].pageX:0),o=Q(e,n);e.config.slider_live_update&&i(e,o)}function l(n){n.stopPropagation(),clearTimeout(o),o=setTimeout((()=>{e.dragging=!1}),1400);const a=n.pageX||(n.touches?n.touches[0].pageX:0),i=Q(e,a);Z(e,i),(0,t.jk)("selection"),e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l)}}(e):"state"===i?function(e){a(e.elements.buttonCardContainer,e.config),a(e.elements.buttonBackground,e.config.button_action,e.config.entity,{tap_action:{action:"more-info"},double_tap_action:{action:"more-info"},hold_action:{action:"more-info"}}),l(e.elements.buttonBackground,e.elements.feedback)}(e):"name"===i&&function(e){const t={tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}};a(e.elements.iconContainer,e.config,e.config.entity,t),a(e.elements.buttonBackground,e.config.button_action,e.config.entity,t),l(e.elements.buttonBackground,e.elements.feedback)}(e)),"name"!==i&&(function(e){const n=(0,t.y0)(e),o=e.config.card_type;"unavailable"===n?"button"===o?e.card.classList.add("is-unavailable"):"pop-up"===o&&e.elements.headerContainer.classList.add("is-unavailable"):"button"===o?e.card.classList.remove("is-unavailable"):"pop-up"===o&&e.elements.headerContainer.classList.remove("is-unavailable"),(0,t.pr)(e)?"button"===o?e.card.classList.add("is-on"):"pop-up"===o&&e.elements.headerContainer.classList.add("is-on"):"button"===o?e.card.classList.remove("is-on"):"pop-up"===o&&e.elements.headerContainer.classList.remove("is-on")}(e),function(e){const n=e.config.card_type,o=K(e),a=(0,t.OC)(e,"light"),i=(0,t.pr)(e),r=(0,t.mk)(e),l="button"===n?e.card.style.getPropertyValue("--bubble-button-background-color"):e.popUp.style.getPropertyValue("--bubble-button-background-color"),s=e.elements.buttonBackground.style.opacity;let c="",d="";if("switch"===o&&i){const n=e.config.use_accent_color;r&&a&&!n?(c=(0,t.mk)(e),d=".5"):(c="var(--bubble-button-accent-color, var(--bubble-accent-color, var(--accent-color)))",d="1")}else c="rgba(0, 0, 0, 0)",d=".5";l!==c&&("button"===n?e.card.style.setProperty("--bubble-button-background-color",c):"pop-up"===n&&e.popUp.style.setProperty("--bubble-button-background-color",c)),s!==d&&(e.elements.buttonBackground.style.opacity=d)}(e),function(e){if("slider"===K(e)){if(e.elements.rangeFill.style.backgroundColor=(0,t.mk)(e),e.dragging)return;let n=0;if((0,t.OC)(e,"light"))n=100*(0,t.IL)(e,"brightness")/255;else if((0,t.OC)(e,"media_player"))n=(0,t.pr)(e)?100*(0,t.IL)(e,"volume_level"):0;else if((0,t.OC)(e,"cover"))n=(0,t.IL)(e,"current_position");else if((0,t.OC)(e,"input_number")){const o=(0,t.IL)(e,"min"),a=(0,t.IL)(e,"max");n=100*((0,t.y0)(e)-o)/(a-o)}else if((0,t.OC)(e,"fan"))n=(0,t.pr)(e)?(0,t.IL)(e,"percentage"):0;else if((0,t.OC)(e,"climate")){const o=(0,t.IL)(e,"min_temp"),a=(0,t.IL)(e,"max_temp");n=100*((0,t.IL)(e,"temperature")-o)/(a-o)}else if((0,t.OC)(e,"number")){const o=(0,t.IL)(e,"min"),a=(0,t.IL)(e,"max");n=100*((0,t.y0)(e)-o)/(a-o)}e.elements.rangeFill.style.transform=`translateX(${n}%)`}}(e)),function(e){const n=K(e),o="name"!==n&&(0,t.pr)(e),a="name"!==n?(0,t.q7)(e):e.config.icon,i="name"!==n?(0,t.gJ)(e):"",r="name"!==n&&(0,t.OC)(e,"light"),l=e.elements.iconContainer.style.color,s=e.elements.image.style.backgroundImage,c=e.elements.icon.icon,d=e.elements.icon.style.display,u=e.elements.image.style.display;if(r&&o){const n=`var(--bubble-icon-background-color, ${(0,t.mk)(e)})`;l!==n&&(e.elements.iconContainer.style.color=n)}else""!==l&&(e.elements.iconContainer.style.color="");if(""!==i){const t="url("+i+")";s!==t&&(e.elements.image.style.backgroundImage=t),"none"!==d&&(e.elements.icon.style.display="none"),""!==u&&(e.elements.image.style.display="")}else if(""!==a){c!==a&&(e.elements.icon.icon=a);const i=o&&"state"!==n?(0,t.mk)(e):"inherit";e.elements.icon.style.color!==i&&(e.elements.icon.style.color=i),""!==d&&(e.elements.icon.style.display=""),"none"!==u&&(e.elements.image.style.display="none")}else"none"!==d&&(e.elements.icon.style.display="none"),"none"!==u&&(e.elements.image.style.display="none")}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const n="name"!==K(e)?(0,t.oY)(e):e.config.name;n!==e.elements.previousName&&((0,t.GP)(e,e.elements.name,n),e.elements.previousName=n)}(e),Y(e),X(e,n,e.elements.buttonCard),"pop-up"!==e.cardType&&function(e){G(e),(0,t.jx)(e),V(e)}(e)}async function ne(e){if("pop-up"!==e.cardType){if(e.getRootNode()instanceof ShadowRoot==0)return;!function(e){try{e.cardType="pop-up",e.verticalStack=e.getRootNode(),e.sectionRow=e.verticalStack.host.parentElement,e.sectionRowContainer=e.sectionRow?.parentElement,e.popUp=e.verticalStack.querySelector("#root"),e.popUp.classList.add("bubble-pop-up","pop-up","is-popup-closed"),e.cardTitle=e.verticalStack.querySelector(".card-header"),e.editor||e.config.background_update||e.verticalStack.removeChild(e.popUp),e.elements={},L(e),e.cardTitle&&(e.cardTitle.style.display="none"),k=k||(e.config.hide_backdrop??!0),e.popUp.style.setProperty("--custom-height-offset-desktop",e.config.margin_top_desktop??"0px"),e.popUp.style.setProperty("--custom-height-offset-mobile",e.config.margin_top_mobile??"0px"),e.popUp.style.setProperty("--custom-margin",`-${e.config.margin??"7px"}`),e.popUp.style.setProperty("--custom-popup-filter",e.config.backdrop_blur&&"0"!==e.config.backdrop_blur?"none":`blur(${e.config.bg_blur??10}px)`),e.popUp.style.setProperty("--custom-shadow-opacity",(e.config.shadow_opacity??0)/100);const t=function(e){return()=>{e.config.hash===location.hash?(s=!0,setTimeout((()=>{s=!1}),100),function(e){e.popUp.classList.contains("is-popup-opened")||(f(e),b(e,!0),requestAnimationFrame((()=>{p(e,!0),h(e.popUp,!0),function(e){const{sectionRow:t,sectionRowContainer:n,popUp:o}=e;o.style.transform="","hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!1,t.style.display="",n?.classList.contains("card")&&(n.style.display=""))}(e)})),m(e,!0),e.config.auto_close>0&&(e.closeTimeout=setTimeout(c,e.config.auto_close)),g(!0),e.config.open_action&&o(e.popUp,e.config,"open_action"))}(e)):function(e){e.popUp.classList.contains("is-popup-opened")&&(f(e),h(e.popUp,!1),p(e,!1),e.removeDomTimeout=setTimeout((()=>{b(e,!1),u(e,0)}),300),m(e,!1),g(!1),e.config.close_action&&o(e,e.config,"close_action"))}(e)}}(e);window.addEventListener("location-changed",t),window.addEventListener("popstate",t)}catch(e){console.error(e)}}(e),function(e){e.elements={closeIcon:(0,t.az)("ha-icon","bubble-close-icon"),closeButton:(0,t.az)("button","bubble-close-button close-pop-up"),buttonContainer:(0,t.az)("div","bubble-button-container"),header:(0,t.az)("div","bubble-header")},e.elements.closeIcon.icon="mdi:close",e.elements.closeButton.appendChild(e.elements.closeIcon),e.elements.closeButton.addEventListener("click",(()=>{c(),(0,t.jk)("selection")}));const n=e.popUp.querySelector(".bubble-header-container");n?Object.assign(e.elements,{headerContainer:n,closeIcon:n.querySelector(".bubble-close-icon"),closeButton:n.querySelector(".bubble-close-button"),buttonContainer:n.querySelector(".bubble-button-container"),header:n.querySelector(".bubble-header")}):(e.elements.headerContainer=(0,t.az)("div","bubble-header-container"),e.elements.headerContainer.setAttribute("id","header-container"),e.elements.headerContainer.appendChild(e.elements.header),e.elements.headerContainer.appendChild(e.elements.closeButton),e.elements.header.appendChild(e.elements.buttonContainer)),e.popUp.addEventListener("touchstart",(e=>{_=e.touches[0].clientY}),{passive:!0}),e.elements.header.addEventListener("touchmove",(t=>{const n=t.touches[0].clientY-_;n>0&&(e.popUp.style.transform=`translateY(${n}px)`)}),{passive:!0}),e.elements.header.addEventListener("touchend",(t=>{const n=t.changedTouches[0].clientY-_;n>50?(e.popUp.style.transform=`translateY(calc(${n}px + (100% - ${n}px)))`,c()):e.popUp.style.transform=""}),{passive:!0})}(e),function(e){try{e.elements.style=(0,t.az)("style"),e.elements.style.innerText=".bubble-pop-up-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    margin-top: -50px;\n    max-width: 100%;\n    padding-top: 40px;\n    padding-bottom: 80px;\n    grid-gap: var(--bubble-pop-up-gap, 14px);\n    gap: var(--bubble-pop-up-gap, 14px);\n    column-gap: var(--bubble-pop-up-gap, 14px);\n    --grid-gap: var(--bubble-pop-up-gap, 14px);\n    --vertical-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --horizontal-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n    overflow-y: auto; \n    overflow-x: hidden; \n    grid-auto-rows: min-content;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n    padding: 18px 18px calc(140px + var(--custom-height-offset-mobile)) 18px;\n}\n.bubble-pop-up-container > * {\n    flex-shrink: 0 !important;\n}\n.bubble-pop-up.card-content {\n    width: 100% !important;\n    padding: 0 !important;\n}\n.bubble-pop-up {\n    transition: transform 0.3s ease;\n    position: fixed;\n    width: 100%;\n    max-width: 100%;\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n    box-sizing: border-box;\n    margin-left: var(--custom-margin);\n    left: 7px;\n    z-index: 5 !important;\n    bottom: calc(-56px - var(--custom-height-offset-mobile));\n}\n.bubble-pop-up-background {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    top: 0;\n    left: 0;\n    position: absolute;\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n    backdrop-filter: var(--custom-popup-filter);\n    -webkit-backdrop-filter: var(--custom-popup-filter);\n    border: var(--bubble-pop-up-border, var(--bubble-border, none));\n}\n.bubble-pop-up-container::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n}\n.is-popup-opened {\n    box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));\n}\n.is-popup-closed { \n    transform: translateY(100%);\n    box-shadow: none !important;\n}\n\n@media only screen and (min-width: 600px) {\n    .bubble-pop-up {\n        margin-left: 0 !important;\n        min-width: var(--desktop-width, 540px);\n        max-width: var(--desktop-width, 540px);\n        left: calc(50% - (var(--desktop-width, 540px) / 2));\n    }\n    .bubble-pop-up-container {\n        padding: 18px 18px calc(140px + var(--custom-height-offset-desktop)) 18px;\n    }\n}\n@media only screen and (min-width: 768px) {\n    .bubble-pop-up {\n      bottom: calc(-56px - var(--custom-height-offset-desktop));\n      left: calc(var(--mdc-drawer-width, 0px) / 2 + 50% - (var(--desktop-width, 540px) / 2));\n    }\n}\n.bubble-pop-up.editor {\n    transition: none !important;\n    position: relative !important;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    backdrop-filter: none !important;\n    display: flex !important;\n    transform: none !important;\n    height: auto !important;\n    min-width: auto;\n    z-index: 0 !important;\n}\n.bubble-header-container {\n    display: inline-flex;\n    height: 50px;\n    margin: 0;\n    padding: 0;\n    z-index: 3;\n    padding: 18px 18px 22px;\n    position: sticky;\n    top: 0;\n    background: none !important;\n    overflow: visible;\n}\n.bubble-header {\n    display: inline-flex;\n    flex-grow: 1;\n    margin-right: 14px;\n    color: var(--primary-text-color);\n}\n.bubble-name {\n    font-size: 14px;\n    font-weight: heavy;\n}\n.bubble-close-button {\n    height: 50px;\n    width: 50px;\n    border: var(--bubble-pop-up-close-button-border, var(--bubble-pop-up-border, var(--bubble-border, none)));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px));\n    z-index: 1;\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n    color: var(--primary-text-color);\n    flex-shrink: 0;\n    cursor: pointer;\n}\n.bubble-button-card-container {\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n}\n.bubble-pop-up-container.editor-cropped {\n    height: 122px !important;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;   \n}\n.bubble-pop-up.editor > .bubble-pop-up-container {\n    padding-bottom: 18px !important;\n    mask-image: none;\n    -webkit-mask-image: none;  \n    overflow: hidden;  \n}\n.editor .bubble-pop-up-background {\n    width: 100%;\n    height: 100%;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    display: flex;\n    position: absolute;\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) !important;\n    backdrop-filter: none;\n    -webkit-backdrop-filter: none;\n}\n\n.no-header .bubble-header-container {\n    visibility: hidden !important;\n    height: 0px !important;\n}\n.no-header .bubble-pop-up-container {\n    padding-top: 4px !important;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n}\n\n.large .bubble-button-card-container {\n  height: 56px;\n  border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 36px));\n}\n.large .bubble-pop-up-container {\n    margin-top: -36px;\n}\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  margin-left: 8px;\n}\n.large .bubble-close-button {\n    height: 56px;\n    width: 56px;\n    border: none;\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px));\n    z-index: 1;\n    --mdc-icon-size: 28px !important;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, min-content);\n  grid-template-rows: repeat(2, 1fr);\n  grid-auto-flow: column;\n  width: auto;\n  padding-right: 4px;\n}\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n";let o,a=e.popUp.querySelector("style");e.stylesAdded&&a?e.elements.customStyle=a:(e.elements.customStyle=(0,t.az)("style"),e.popUp.appendChild(e.elements.customStyle),e.popUp.appendChild(e.elements.style),e.stylesAdded=!0);const i=e.config.bg_opacity??88;function r(){o=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color");const t=e.config.bg_color?e.config.bg_color:o,a=(0,n._k)(t,i/100,1.02);e.popUp.style.setProperty("--bubble-pop-up-background-color",a)}C.addEventListener("change",(()=>{r()}),{passive:!0}),r(),e.popUp.style.setProperty("--desktop-width",e.config.width_desktop??"540px"),e.config.close_on_click&&e.popUp.addEventListener("click",c,{passive:!0}),window.addEventListener("keydown",(t=>{"Escape"===t.key&&e.config.hash===location.hash&&c()}),{passive:!0});let l=e.config.slide_to_close_distance??400;e.popUp.addEventListener("touchmove",(e=>{e.touches[0].clientY-_>l&&e.touches[0].clientY>w&&c(),w=e.touches[0].clientY}),{passive:!0});const s=e.popUp.querySelector(".bubble-pop-up-container");if(null===s){e.elements.popUpContainer=(0,t.az)("div"),e.elements.popUpContainer.classList.add("bubble-pop-up-container");let d=e.popUp.firstChild;for(;d;)e.elements.popUpContainer.appendChild(d),d=e.popUp.firstChild}else e.elements.popUpContainer=s;e.popUpBackground=(0,t.az)("div","bubble-pop-up-background"),e.popUp.appendChild(e.popUpBackground),e.popUp.appendChild(e.elements.headerContainer),e.popUp.appendChild(e.elements.popUpContainer),e.config.hash!==location.hash&&u(e,0),window.dispatchEvent(new Event("location-changed"))}catch(p){console.error(p)}}(e)}else e.popUp&&e.elements&&((e.config.hash===location.hash||e.editor||e.config!==e.previousConfig)&&(function(e){G(e);const{backdropCustomStyle:t}=L(e);V(e,e.elements.customStyle),V(e,t);const n=e.config.card_layout,o="large"===n||"large-2-rows"===n,a="large-2-rows"===n;o!==e.popUp.classList.contains("large")&&e.popUp.classList.toggle("large",o),a!==e.popUp.classList.contains("rows-2")&&e.popUp.classList.toggle("rows-2",a);const i=e.config.show_header??!0;e.popUp.classList.contains("no-header")===i&&e.popUp.classList.toggle("no-header",!i)}(e),(e.config.entity||e.config.name)&&te(e,e.elements.buttonContainer,e.elements.header),e.previousConfig=e.config),e.editor||function(e){const t=e.config.trigger;if(t){const n=!e.hasPageLoaded;e.hasPageLoaded=!0;const o=j(t);if(0===o.length)return void(e.previousTrigger=!1);if(W(o)){const t=R(o,e._hass);if(t===e.previousTrigger)return;e.config.hash===location.hash?t||n||c():t&&d(e.config.hash),e.previousTrigger=t}}else{let t=e.config.trigger_entity??"";if(""===t)return;let n=e.config.trigger_state??"",o=e.config.trigger_close??!1,a=e._hass.states[t]?.state;if(!t)return;if(!n)return;if(e.oldTriggerEntityState===a)return;const i=!e.hasPageLoaded;e.hasPageLoaded=!0,e.config.hash===location.hash?o&&n!==a&&(i||c()):a===n&&d(e.config.hash),e.oldTriggerEntityState=a}}(e),function(e){if(!e.verticalStack)return;const{host:t}=e.verticalStack,{popUp:n,sectionRow:o,sectionRowContainer:a,elements:i}=e;e.detectedEditor&&window.addEventListener("dialog-closed",(()=>{i?.popUpContainer?.classList.add("editor-cropped")}),{once:!0});const r=n?.classList.contains("is-popup-opened"),l="hui-card"===o?.tagName.toLowerCase(),s=e.editor||e.detectedEditor;if(!r&&l){const{editor:t,editorAccess:n}=e;a?.classList.contains("card")&&s&&"none"===a.style.display&&(a.style.display="")}const c=n?.classList;s?(c?.contains("editor")||(g(!1),c?.remove("is-popup-opened"),c?.add("is-popup-closed","editor"),e.detectedEditor||i?.popUpContainer?.classList.add("editor-cropped")),e.editorAccess=!0):c?.contains("editor")&&(c.remove("editor"),i?.popUpContainer?.classList.remove("editor-cropped")),e.editor&&!e.detectedEditor&&s!==e.previousEditorState&&(function(e){const{hideBackdrop:t}=L(e),n=(e.verticalStack.host,e.detectedEditor);(e.editor||n)&&(t(),clearTimeout(e.removeDomTimeout),n||function(e){if(e.observer&&(e.observer.disconnect(),e.observer=null),e.sectionRow){const t=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&!e.verticalStack.contains(e.popUp)&&e.verticalStack.appendChild(e.popUp)}))}),{rootMargin:"100px",threshold:.01});t.observe(e.sectionRow),e.observer=t}}(e))}(e),e.previousEditorState=s)}(e))}let oe=!1;function ae(e,n){const o=e.config[`${n}_name`]??"",a=e.config[`${n}_icon`]??"",i=e.config[`${n}_pir_sensor`],r=e.config[`${n}_link`],l=e.config[`${n}_entity`];oe=oe||location.hash===r;const s=(0,t.az)("ha-icon","bubble-icon icon");s.icon=a;const u=(0,t.az)("div","bubble-name name");u.innerText=o;const p=(0,t.az)("div","bubble-background-color background-color"),b=(0,t.az)("div","bubble-background background"),h=(0,t.az)("div",`bubble-button bubble-button-${n} button ${r.substring(1)}`);let m=localStorage.getItem(`bubbleButtonWidth-${r}`);return h.style.width=`${m}px`,h.appendChild(s),h.appendChild(u),h.appendChild(p),h.appendChild(b),h.addEventListener("click",(()=>{location.hash!==r&&(oe=!1),oe?c():d(r),oe=!oe,(0,t.jk)("light")})),h.icon=s,h.name=u,h.backgroundColor=p,h.background=b,h.pirSensor=i,h.lightEntity=l,h.link=r,h.index=n,window.addEventListener("location-changed",(function(){e.config.highlight_current_view&&(location.pathname===r||location.hash===r?h.classList.add("highlight"):h.classList.remove("highlight"))})),e.elements.buttons.push(h),h}const ie=1,re=2,le=8;function se(e,t){return function(e,t){return!(!e||void 0===e.supported_features)&&0!=(e.supported_features&t)}(e.attributes,t)}function ce(e,n){(0,t.OC)(e,"media_player")&&e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:(n/100).toFixed(2)})}function de(e,t,n=!1){const o=e.elements.rangeSlider.getBoundingClientRect(),a=100*(t-o.left)/o.width,i=Math.round(Math.min(100,Math.max(0,a)));if(e.elements.rangeFill.style.transform=`translateX(${i}%)`,n){if(e.dragging)return;ce(e,i)}else ce(e,i)}(0,t.P2)(ce);const ue="* {\n    -webkit-tap-highlight-color: transparent !important;\n}\n\nha-card {\n    margin-top: 0;\n    background: none;\n    opacity: 1;\n    overflow: visible !important;\n}\n.is-unavailable {\n    opacity: 0.5;\n}\n\n.bubble-media-player-container {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: var(--bubble-media-player-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    touch-action: pan-y;\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n    box-shadow: var(--bubble-media-player-box-shadow, var(--bubble-box-shadow, none));\n    border: var(--bubble-media-player-border, var(--bubble-border, none));\n}\n\n.bubble-media-player {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    transition: background-color 1.5s;\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n    background-color: rgba(0,0,0,0);\n}\n\n.bubble-button-container {\n    display: inline-grid;\n    grid-auto-flow: column;\n    gap: 10px;\n    align-self: center;\n    margin-right: 8px;\n}\n\n.bubble-play-pause-button,\n.bubble-previous-button,\n.bubble-next-button,\n.bubble-volume-button,\n.bubble-power-button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, 32px));\n    padding: 6px;\n    height: 24px;\n    width: 24px;\n    transition: background 0.3s ease;\n    align-self: center;\n}\n\n.bubble-play-pause-button {\n    background-color: var(--bubble-accent-color, var(--accent-color));\n}\n\n.bubble-volume-slider {\n    position: absolute;\n    width: calc(100% - 150px);\n    height: 38px;\n    left: 50px;\n    overflow: hidden;\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n    z-index: 1;\n    background-color: var(--bubble-media-player-slider-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    opacity: 1;\n    transition: opacity .2s, transform .2s;\n    transform: translateX(0);\n}\n\n.bubble-range-value {\n    display: flex;\n    justify-content: flex-end;\n    height: 38px;\n    align-items: center;\n    padding-right: 14px;\n    font-size: 12px;\n    opacity: 0.8;\n}\n\n.bubble-mute-button {\n    opacity: 1;\n    transition: opacity .2s, transform .2s;\n    transform: translateX(0);\n}\n\n.is-hidden {\n    opacity: 0 !important;\n    pointer-events: none;\n    transform: translateX(14px);\n}\n\n.bubble-range-fill {\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    left: -100%;\n    transition: all .3s;\n    background-color: var(--accent-color);\n}\n\n.is-dragging .bubble-range-fill {\n    transition: none;\n}\n\n.is-light .bubble-range-fill {\n    opacity: 0.5;\n}\n\n.is-unavailable .bubble-button-card {\n    cursor: not-allowed;\n}\n\n.bubble-range-slider {\n    cursor: ew-resize;\n}\n.is-unavailable .bubble-range-slider {\n    cursor: not-allowed;\n}\n\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: 38px;\n    height: 38px;\n    min-width: 38px;\n    min-height: 38px;\n    align-items: center;\n    justify-content: center;\n    margin: 6px;\n    border-radius: var(--bubble-media-player-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-media-player-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));;\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.bubble-icon {\n    opacity: 0.6;\n}\n\n.is-on .bubble-icon {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n\n.bubble-icon,\n.bubble-mute-button {\n    display: flex;\n    position: absolute;\n    height: 38px;\n    width: 38px;\n    justify-content: center;\n    align-items: center;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-media-info-container {\n    display: flex;\n    line-height: 14px;\n    font-size: 12px;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    margin-left: 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-title,\n.bubble-name,\n.bubble-state,\n.bubble-artist {\n    display: flex;\n    margin: 2px 0;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-title {\n    font-weight: 600;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 1em;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    font-weight: 600;\n    margin-left: 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-size: 13px;\n    margin: 2px 0;\n}\n\n.bubble-state {\n    font-size: 12px;\n    opacity: 0.7;\n    margin: 2px 0;\n    font-weight: normal;\n}\n\n.bubble-sub-button-container {\n    right: 0 !important;\n}\n\n.bubble-background-container {\n    display: flex;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    border-radius: inherit;\n    overflow: hidden;\n}\n\n.bubble-cover-background {\n    display: flex;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    background-position: 50%;\n    filter: blur(50px);\n    opacity: 0.5;\n}\n\n@media screen and (max-width: 250px) {\n    .bubble-previous-button {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 206px) {\n    .bubble-next-button {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 160px) {\n    .bubble-volume-button {\n        display: none;\n    }\n}\n\n@keyframes tap-feedback {\n    0% {transform: translateX(-100%); opacity: 0;}\n    64% {transform: translateX(0); opacity: 0.1;}\n    100% {transform: translateX(100%); opacity: 0;}\n}\n\n.large .bubble-media-player-container {\n  height: 56px;\n  border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n}\n\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  margin-left: 8px;\n}\n\n.large .bubble-play-pause-button {\n  display: flex;\n  height: 42px;\n  width: 42px;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n}\n\n.large .bubble-volume-slider {\n  height: 42px;\n  border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n  left: 60px;\n  width: calc(100% - 168px);\n}\n\n.large .bubble-range-value {\n  place-items: center;\n  height: 42px;\n}\n\n.large .bubble-button-container {\n  align-items: center;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, 1fr);\n  grid-template-rows: repeat(2, minmax(auto, max-content));\n  grid-auto-flow: column;\n  width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n";let pe;function be(e){"media-player"!==e.cardType&&function(e){e.dragging=!1,e.elements={},e.elements.mediaPlayerContainer=(0,t.az)("div","bubble-media-player-container bubble-container"),e.elements.mediaPlayerCard=(0,t.az)("div","bubble-media-player"),e.elements.mediaInfoContainer=(0,t.az)("div","bubble-media-info-container"),e.elements.nameContainer=(0,t.az)("div","bubble-name-container"),e.elements.buttonContainer=(0,t.az)("div","bubble-button-container"),e.elements.iconContainer=(0,t.az)("div","bubble-icon-container"),e.elements.backgroundContainer=(0,t.az)("div","bubble-background-container"),e.elements.coverBackground=(0,t.az)("div","bubble-cover-background"),e.elements.playPauseButton=(0,t.az)("ha-icon","bubble-play-pause-button"),e.elements.previousButton=(0,t.az)("ha-icon","bubble-previous-button"),e.elements.previousButton.setAttribute("icon","mdi:skip-previous"),e.elements.nextButton=(0,t.az)("ha-icon","bubble-next-button"),e.elements.nextButton.setAttribute("icon","mdi:skip-next"),e.elements.volumeButton=(0,t.az)("ha-icon","bubble-volume-button"),e.elements.volumeButton.setAttribute("icon","mdi:volume-high"),e.elements.powerButton=(0,t.az)("ha-icon","bubble-power-button"),e.elements.powerButton.setAttribute("icon","mdi:power-standby"),e.elements.muteButton=(0,t.az)("ha-icon","bubble-mute-button is-hidden"),e.elements.muteButton.setAttribute("icon","mdi:volume-off"),e.elements.title=(0,t.az)("div","bubble-title"),e.elements.artist=(0,t.az)("div","bubble-artist"),e.elements.name=(0,t.az)("div","bubble-name"),e.elements.state=(0,t.az)("div","bubble-state"),e.elements.icon=(0,t.az)("ha-icon","bubble-icon"),e.elements.image=(0,t.az)("div","bubble-entity-picture"),e.elements.style=(0,t.az)("style"),e.elements.customStyle=(0,t.az)("style"),e.elements.style.innerText=ue,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.iconContainer.appendChild(e.elements.muteButton),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.mediaInfoContainer.appendChild(e.elements.title),e.elements.mediaInfoContainer.appendChild(e.elements.artist),e.elements.buttonContainer.appendChild(e.elements.powerButton),e.elements.buttonContainer.appendChild(e.elements.previousButton),e.elements.buttonContainer.appendChild(e.elements.nextButton),e.elements.buttonContainer.appendChild(e.elements.volumeButton),e.elements.buttonContainer.appendChild(e.elements.playPauseButton),e.elements.mediaPlayerCard.appendChild(e.elements.iconContainer),e.elements.mediaPlayerCard.appendChild(e.elements.mediaInfoContainer),e.elements.mediaPlayerCard.appendChild(e.elements.nameContainer),e.elements.mediaPlayerCard.appendChild(e.elements.buttonContainer),e.elements.backgroundContainer.appendChild(e.elements.coverBackground),e.elements.mediaPlayerContainer.appendChild(e.elements.backgroundContainer),e.content.innerHTML="",e.content.appendChild(e.elements.mediaPlayerContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.mediaPlayerContainer.appendChild(e.elements.mediaPlayerCard),a(e.elements.icon,e.config,e.config.entity),a(e.elements.image,e.config,e.config.entity),e.elements.volumeSliderContainer=(0,t.az)("div","bubble-volume-slider is-hidden"),function(e,n){let o=0;function a(t){t.stopPropagation();const n=t.pageX||(t.touches?t.touches[0].pageX:0);Math.abs(o-n)>10&&de(e,n,!0);const a=e.elements.rangeSlider.getBoundingClientRect(),i=100*(n-a.left)/a.width,r=Math.min(100,Math.max(0,i));e.elements.rangeValue.innerText=Math.round(r)+"%"}function i(t){t.stopPropagation(),e.dragging=!1;const o=t.pageX||(t.touches?t.touches[0].pageX:0);de(e,o),n.classList.remove("is-dragging"),n.removeEventListener("pointermove",a),n.removeEventListener("pointerup",i);const r=e.elements.rangeSlider.getBoundingClientRect(),l=100*(o-r.left)/r.width,s=Math.min(100,Math.max(0,l));e.elements.rangeValue.innerText=Math.round(s)+"%"}pe=Math.round(100*(0,t.IL)(e,"volume_level"))+"%",e.elements.rangeFill=(0,t.az)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,t.az)("div","bubble-range-slider range-slider"),e.elements.rangeValue=(0,t.az)("div","bubble-range-value"),e.elements.rangeSlider.appendChild(e.elements.rangeValue),e.elements.rangeSlider.appendChild(e.elements.rangeFill),n.appendChild(e.elements.rangeSlider),n.addEventListener("pointercancel",(function(){e.dragging=!1,n.classList.remove("is-dragging"),n.removeEventListener("pointermove",a),n.removeEventListener("pointerup",i)})),n.addEventListener("pointerdown",(t=>{n.setPointerCapture(t.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,o=t.pageX||(t.touches?t.touches[0].pageX:0),n.classList.add("is-dragging"),n.addEventListener("pointermove",a),n.addEventListener("pointerup",i))})),e.elements.rangeValue.innerText=pe}(e,e.elements.volumeSliderContainer),e.elements.mediaPlayerCard.appendChild(e.elements.volumeSliderContainer),e.elements.volumeButton.addEventListener("click",(()=>{e.elements.volumeSliderContainer.classList.toggle("is-hidden"),e.elements.muteButton.classList.toggle("is-hidden"),e.elements.icon.classList.toggle("is-hidden"),e.elements.image.classList.toggle("is-hidden"),function(e){const t=e.elements.volumeButton.isHidden,n=t?"1":"0",o=t?"mdi:volume-high":"mdi:close";e.elements.volumeButton.setAttribute("icon",o),e.elements.mediaInfoContainer.style.opacity=n,e.elements.nameContainer.style.opacity=n,e.elements.subButtonContainer&&(e.elements.subButtonContainer.style.opacity=n),e.elements.previousButton.style.opacity=n,e.elements.nextButton.style.opacity=n,e.elements.powerButton.style.opacity=n,e.elements.volumeButton.isHidden=!t}(e),pe=Math.round(100*(0,t.IL)(e,"volume_level"))+"%"})),e.elements.powerButton.addEventListener("click",(()=>{const n=(0,t.pr)(e);e._hass.callService("media_player",n?"turn_off":"turn_on",{entity_id:e.config.entity})})),e.elements.muteButton.addEventListener("click",(()=>{const n=!0===(0,t.IL)(e,"is_volume_muted");e._hass.callService("media_player","volume_mute",{entity_id:e.config.entity,is_volume_muted:!n}),e.elements.muteButton.clicked=!0})),e.elements.previousButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_previous_track",{entity_id:e.config.entity})})),e.elements.nextButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_next_track",{entity_id:e.config.entity})})),e.elements.playPauseButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_play_pause",{entity_id:e.config.entity}),e.elements.playPauseButton.clicked=!0})),e.elements.mediaPlayerContainer.addEventListener("click",(()=>(0,t.jk)("selection"))),e.cardType="media-player"}(e),function(e){"unavailable"===(0,t.y0)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable"),(0,t.pr)(e)?e.card.classList.add("is-on"):e.card.classList.remove("is-on")}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const n=(0,t.oY)(e);n!==e.previousName&&(e.elements.name.innerText=n,e.previousName=n,(0,t.GP)(e,e.elements.name,n))}(e),function(e){const n=(0,t.IL)(e,"media_title"),o=(0,t.IL)(e,"media_artist"),a=n+o;a!==e.previousMediaState&&(e.elements.artist.style.display=""===o?"none":"flex",e.previousMediaState=a,(0,t.GP)(e,e.elements.title,n),(0,t.GP)(e,e.elements.artist,o))}(e),function(e){(0,t.IL)(e,"media_title");const n=""===(0,t.IL)(e,"media_artist");e.elements.mediaInfoContainer.style.display=n?"none":"",e.elements.nameContainer.style.display=n?"":"none"}(e),function(e){const n=(0,t.pr)(e),o=(0,t.q7)(e),a=(0,t.gJ)(e),i=e.elements.image.style.backgroundImage,r=e.elements.icon.icon,l=e.elements.icon.style.color;if(""!==a){const t="url("+a+")";i!==t&&(e.elements.image.style.backgroundImage=t),"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),""!==e.elements.image.style.display&&(e.elements.image.style.display="")}else if(""!==o){r!==o&&(e.elements.icon.icon=o);const t=n?"var(--accent-color)":"inherit";l!==t&&(e.elements.icon.style.color=t),""!==e.elements.icon.style.display&&(e.elements.icon.style.display=""),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}else"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}(e),function(e){const n=(0,t.pr)(e),o=(0,t.gJ)(e),a=e.config.cover_background,i=e.elements.coverBackground.style.backgroundImage;if(a&&n&&o){const t="url("+o+")";i!==t&&(e.elements.coverBackground.style.backgroundImage=t)}else""!==i&&(e.elements.coverBackground.style.backgroundImage="")}(e),Y(e),function(e){if((0,t.OC)(e,"media_player")&&!1===e.dragging&&e.elements.rangeFill){const n=100*(0,t.IL)(e,"volume_level");e.elements.rangeFill.style.transform=`translateX(${n}%)`}}(e),function(e){const n="playing"===(0,t.y0)(e),o=e.elements.playPauseButton.clicked;n?e.elements.playPauseButton.setAttribute("icon",o?"mdi:play":"mdi:pause"):e.elements.playPauseButton.setAttribute("icon",o?"mdi:pause":"mdi:play"),e.elements.playPauseButton.clicked=!1}(e),function(e){const n=!0===(0,t.IL)(e,"is_volume_muted"),o=e.elements.muteButton.clicked;e.elements.muteButton.style.color=n?o?"":"var(--accent-color)":o?"var(--accent-color)":"",e.elements.muteButton.clicked=!1}(e),function(e){const n=(0,t.pr)(e);e.elements.powerButton.style.color=n?"var(--accent-color)":""}(e),X(e,e.content,e.elements.buttonContainer,!0),function(e){G(e),(0,t.jx)(e),V(e);const n=(0,t.y0)(e),o="off"!==n&&"unknown"!==n;e.config.hide?.power_button&&"none"!==e.elements.powerButton.style.display?e.elements.powerButton.style.display="none":e.config.hide?.power_button||"none"!==e.elements.powerButton.style.display||(e.elements.powerButton.style.display=""),!e.config.hide?.previous_button&&(e.editor||o)||"none"===e.elements.previousButton.style.display?e.config.hide?.previous_button||!e.editor&&!o||"none"!==e.elements.previousButton.style.display||(e.elements.previousButton.style.display=""):e.elements.previousButton.style.display="none",!e.config.hide?.next_button&&(e.editor||o)||"none"===e.elements.nextButton.style.display?e.config.hide?.next_button||!e.editor&&!o||"none"!==e.elements.nextButton.style.display||(e.elements.nextButton.style.display=""):e.elements.nextButton.style.display="none",!e.config.hide?.volume_button&&(e.editor||o)||"none"===e.elements.volumeButton.style.display?e.config.hide?.volume_button||!e.editor&&!o||"none"!==e.elements.volumeButton.style.display||(e.elements.volumeButton.style.display=""):e.elements.volumeButton.style.display="none",!e.config.hide?.play_pause_button&&(e.editor||o)||"none"===e.elements.playPauseButton.style.display?e.config.hide?.play_pause_button||!e.editor&&!o||"none"!==e.elements.playPauseButton.style.display||(e.elements.playPauseButton.style.display=""):e.elements.playPauseButton.style.display="none"}(e)}function he(e){let t="";const n=e._hass.states[e.config.entity],o=(n.attributes.current_temperature,n.attributes.hvac_action),a=n.state,i="heating"===o||"heat"===a&&e.config.state_color,r="cooling"===o||"cool"===a&&e.config.state_color,l="off"!==a&&"unknown"!==a;switch(a){case"fan_only":t="var(--bubble-state-climate-fan-only-color, var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color))))";break;case"dry":t="var(--bubble-state-climate-dry-color, var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color))))";break;default:t=r?"var(--bubble-state-climate-cool-color, var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color))))":i?"var(--bubble-state-climate-heat-color, var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color))))":l&&e.config.state_color?"auto"===a?"var(--bubble-state-climate-auto-color, var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color))))":"heat_cool"===a?"var(--bubble-state-climate-heat-cool-color, var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color))))":"var(--bubble-climate-accent-color, var(--bubble-accent-color, var(--accent-color)))":""}return t}const me=globalThis,ge=me.ShadowRoot&&(void 0===me.ShadyCSS||me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),ye=new WeakMap;class ve{constructor(e,t,n){if(this._$cssResult$=!0,n!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ge&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=ye.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ye.set(t,e))}return e}toString(){return this.cssText}}const _e=e=>new ve("string"==typeof e?e:e+"",void 0,fe),we=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new ve(n,e,fe)},xe=(e,t)=>{if(ge)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),o=me.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=n.cssText,e.appendChild(t)}},ke=ge?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return _e(t)})(e):e,{is:Ce,defineProperty:$e,getOwnPropertyDescriptor:Se,getOwnPropertyNames:Le,getOwnPropertySymbols:Ae,getPrototypeOf:Ee}=Object,Te=globalThis,Oe=Te.trustedTypes,ze=Oe?Oe.emptyScript:"",Be=Te.reactiveElementPolyfillSupport,Pe=(e,t)=>e,Ie={toAttribute(e,t){switch(t){case Boolean:e=e?ze:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},Ve=(e,t)=>!Ce(e,t),Me={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:Ve};Symbol.metadata??=Symbol("metadata"),Te.litPropertyMetadata??=new WeakMap;class Ue extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Me){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&$e(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:a}=Se(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const i=o?.call(this);a.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Me}static _$Ei(){if(this.hasOwnProperty(Pe("elementProperties")))return;const e=Ee(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Pe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pe("properties"))){const e=this.properties,t=[...Le(e),...Ae(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(ke(e))}else void 0!==e&&t.push(ke(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const a=(void 0!==n.converter?.toAttribute?n.converter:Ie).toAttribute(t,n.type);this._$Em=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Ie;this._$Em=o,this[o]=a.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n,o=!1,a){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??Ve)(o?a:this[e],t))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}Ue.elementStyles=[],Ue.shadowRootOptions={mode:"open"},Ue[Pe("elementProperties")]=new Map,Ue[Pe("finalized")]=new Map,Be?.({ReactiveElement:Ue}),(Te.reactiveElementVersions??=[]).push("2.0.2");const He=globalThis,Ne=He.trustedTypes,De=Ne?Ne.createPolicy("lit-html",{createHTML:e=>e}):void 0,je="$lit$",Re=`lit$${(Math.random()+"").slice(9)}$`,qe="?"+Re,We=`<${qe}>`,Ye=document,Fe=()=>Ye.createComment(""),Xe=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Je=Array.isArray,Ge="[ \t\n\f\r]",Ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ze=/-->/g,Qe=/>/g,et=RegExp(`>|${Ge}(?:([^\\s"'>=/]+)(${Ge}*=${Ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,nt=/"/g,ot=/^(?:script|style|textarea|title)$/i,at=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),it=at(1),rt=(at(2),Symbol.for("lit-noChange")),lt=Symbol.for("lit-nothing"),st=new WeakMap,ct=Ye.createTreeWalker(Ye,129);function dt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==De?De.createHTML(t):t}const ut=(e,t)=>{const n=e.length-1,o=[];let a,i=2===t?"<svg>":"",r=Ke;for(let t=0;t<n;t++){const n=e[t];let l,s,c=-1,d=0;for(;d<n.length&&(r.lastIndex=d,s=r.exec(n),null!==s);)d=r.lastIndex,r===Ke?"!--"===s[1]?r=Ze:void 0!==s[1]?r=Qe:void 0!==s[2]?(ot.test(s[2])&&(a=RegExp("</"+s[2],"g")),r=et):void 0!==s[3]&&(r=et):r===et?">"===s[0]?(r=a??Ke,c=-1):void 0===s[1]?c=-2:(c=r.lastIndex-s[2].length,l=s[1],r=void 0===s[3]?et:'"'===s[3]?nt:tt):r===nt||r===tt?r=et:r===Ze||r===Qe?r=Ke:(r=et,a=void 0);const u=r===et&&e[t+1].startsWith("/>")?" ":"";i+=r===Ke?n+We:c>=0?(o.push(l),n.slice(0,c)+je+n.slice(c)+Re+u):n+Re+(-2===c?t:u)}return[dt(e,i+(e[n]||"<?>")+(2===t?"</svg>":"")),o]};class pt{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,i=0;const r=e.length-1,l=this.parts,[s,c]=ut(e,t);if(this.el=pt.createElement(s,n),ct.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ct.nextNode())&&l.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(je)){const t=c[i++],n=o.getAttribute(e).split(Re),r=/([.?@])?(.*)/.exec(t);l.push({type:1,index:a,name:r[2],strings:n,ctor:"."===r[1]?ft:"?"===r[1]?yt:"@"===r[1]?vt:gt}),o.removeAttribute(e)}else e.startsWith(Re)&&(l.push({type:6,index:a}),o.removeAttribute(e));if(ot.test(o.tagName)){const e=o.textContent.split(Re),t=e.length-1;if(t>0){o.textContent=Ne?Ne.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],Fe()),ct.nextNode(),l.push({type:2,index:++a});o.append(e[t],Fe())}}}else if(8===o.nodeType)if(o.data===qe)l.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(Re,e+1));)l.push({type:7,index:a}),e+=Re.length-1}a++}}static createElement(e,t){const n=Ye.createElement("template");return n.innerHTML=e,n}}function bt(e,t,n=e,o){if(t===rt)return t;let a=void 0!==o?n._$Co?.[o]:n._$Cl;const i=Xe(t)?void 0:t._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),void 0===i?a=void 0:(a=new i(e),a._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=a:n._$Cl=a),void 0!==a&&(t=bt(e,a._$AS(e,t.values),a,o)),t}class ht{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Ye).importNode(t,!0);ct.currentNode=o;let a=ct.nextNode(),i=0,r=0,l=n[0];for(;void 0!==l;){if(i===l.index){let t;2===l.type?t=new mt(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new _t(a,this,e)),this._$AV.push(t),l=n[++r]}i!==l?.index&&(a=ct.nextNode(),i++)}return ct.currentNode=Ye,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class mt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=lt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=bt(this,e,t),Xe(e)?e===lt||null==e||""===e?(this._$AH!==lt&&this._$AR(),this._$AH=lt):e!==this._$AH&&e!==rt&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>Je(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==lt&&Xe(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ye.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=pt.createElement(dt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ht(o,this),n=e.u(this.options);e.p(t),this.$(n),this._$AH=e}}_$AC(e){let t=st.get(e.strings);return void 0===t&&st.set(e.strings,t=new pt(e)),t}T(e){Je(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of e)o===t.length?t.push(n=new mt(this.k(Fe()),this.k(Fe()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class gt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,a){this.type=1,this._$AH=lt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=lt}_$AI(e,t=this,n,o){const a=this.strings;let i=!1;if(void 0===a)e=bt(this,e,t,0),i=!Xe(e)||e!==this._$AH&&e!==rt,i&&(this._$AH=e);else{const o=e;let r,l;for(e=a[0],r=0;r<a.length-1;r++)l=bt(this,o[n+r],t,r),l===rt&&(l=this._$AH[r]),i||=!Xe(l)||l!==this._$AH[r],l===lt?e=lt:e!==lt&&(e+=(l??"")+a[r+1]),this._$AH[r]=l}i&&!o&&this.O(e)}O(e){e===lt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ft extends gt{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===lt?void 0:e}}class yt extends gt{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==lt)}}class vt extends gt{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){if((e=bt(this,e,t,0)??lt)===rt)return;const n=this._$AH,o=e===lt&&n!==lt||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==lt&&(n===lt||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class _t{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){bt(this,e)}}const wt=He.litHtmlPolyfillSupport;wt?.(pt,mt),(He.litHtmlVersions??=[]).push("3.1.0");class xt extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const o=n?.renderBefore??t;let a=o._$litPart$;if(void 0===a){const e=n?.renderBefore??null;o._$litPart$=a=new mt(t.insertBefore(Fe(),e),e,void 0,n??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return rt}}xt._$litElement$=!0,xt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:xt});const kt=globalThis.litElementPolyfillSupport;function Ct(e,n){delete e._config[n+"_name"],delete e._config[n+"_icon"],delete e._config[n+"_link"],delete e._config[n+"_entity"],delete e._config[n+"_pir_sensor"];for(let t=n;t<e.buttonIndex;t++)e._config[t+"_name"]=e._config[t+1+"_name"],e._config[t+"_icon"]=e._config[t+1+"_icon"],e._config[t+"_link"]=e._config[t+1+"_link"],e._config[t+"_entity"]=e._config[t+1+"_entity"],e._config[t+"_pir_sensor"]=e._config[t+1+"_pir_sensor"];delete e._config[e.buttonIndex+"_name"],delete e._config[e.buttonIndex+"_icon"],delete e._config[e.buttonIndex+"_link"],delete e._config[e.buttonIndex+"_entity"],delete e._config[e.buttonIndex+"_pir_sensor"],e.buttonIndex--,(0,t.BX)(e,"config-changed",{config:e._config})}kt?.({LitElement:xt}),(globalThis.litElementVersions??=[]).push("4.0.2"),customElements.define("bubble-card-editor",class extends xt{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config?.card_type||""}get _button_type(){return this._config?.button_type||("pop-up"===this._config?.card_type?"":"switch")}get _entity(){return this._config?.entity||""}get _selectable_attributes(){return["source_list","sound_mode_list","hvac_modes","fan_modes","swing_modes","preset_modes","effect_list"]}render(){if(!this.hass)return it``;const t=document.querySelector("body > home-assistant");if(t?.shadowRoot){const e=t.shadowRoot,n=e.querySelector("hui-dialog-edit-card")?.shadowRoot;if(n){const e=n.querySelector("ha-dialog > div.content > div.element-preview");if(!e)return;"sticky"!==e.style.position&&(e.style.position="sticky",e.style.top="0")}}if(!this.listsUpdated){const e=e=>({label:e,value:e});this.inputSelectList={states:{},locale:this.hass.locale,localize:this.hass.localize,entities:this.hass.entities},Object.keys(this.hass.states).filter((e=>{const t=this.hass.states[e],n=e.substr(0,e.indexOf(".")),o="input_select"===n||"select"===n,a=this._selectable_attributes.some((e=>t.attributes?.[e]));return o||a})).map(e).forEach((e=>{const t=e.label||e,n=this.hass.states[t];n&&(this.inputSelectList.states[t]=n)})),this.attributeList=Object.keys(this.hass.states[this._entity]?.attributes||{}).map((e=>{let t=this.hass.states[this._entity];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})),this.cardTypeList=[{label:"Button (Switch, slider, ...)",value:"button"},{label:"Cover",value:"cover"},{label:"Climate",value:"climate"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Media player",value:"media-player"},{label:"Pop-up",value:"pop-up"},{label:"Select",value:"select"},{label:"Separator",value:"separator"}],this.listsUpdated=!0}const n=this.cardTypeList;switch(this.buttonTypeList,this._config?.card_type){case"pop-up":return function(e){const t=e._config?.trigger??[];let n=e._config.button_action||"";return it`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-textfield
                label="Hash (e.g. #kitchen)"
                .value="${e._config?.hash||"#pop-up-name"}"
                .configValue="${"hash"}"
                @input="${e._valueChanged}"
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
                            .checked=${e._config.show_header??!0}
                            .configValue="${"show_header"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Show header</label> 
                        </div>
                    </ha-formfield>
                    <ha-alert alert-type="info">You can completely hide the pop-up header, including the close button. To close it when hidden, either make a long swipe within the pop-up or click outside of it.</ha-alert>
                    <div style="${e._config?.show_header??1?"":"display: none;"}">
                        <hr />

                        ${e.makeDropdown("Button type","button_type",[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}])}
                        <ha-form
                            .hass=${e.hass}
                            .data=${e._config}
                            .schema=${[{name:"entity",label:"Optional - Entity",selector:{entity:{}}}]}   
                            .computeLabel=${e._computeLabelCallback}
                            .disabled="${"name"===e._config.button_type}"
                            @value-changed=${e._valueChanged}
                        ></ha-form>                                         
                        <ha-textfield
                            label="Optional - Name"
                            .value="${e._config?.name||""}"
                            .configValue="${"name"}"
                            @input="${e._valueChanged}"
                        ></ha-textfield>
                        ${e.makeDropdown("Optional - Icon","icon")}
                        ${e.makeShowState()}
                        <hr />
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Tap action on icon
                            </h4>
                            <div class="content">
                                ${e.makeActionPanel("Tap action")}
                                ${e.makeActionPanel("Double tap action")}
                                ${e.makeActionPanel("Hold action")}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel outlined style="display: ${"slider"===e._config.button_type?"none":""}">
                            <h4 slot="header">
                              <ha-icon icon="mdi:gesture-tap"></ha-icon>
                              Tap action on button
                            </h4>
                            <div class="content">
                                ${e.makeActionPanel("Tap action",n,"name"!==e._config.button_type?"state"===e._config.button_type?"more-info":"toggle":"none","button_action")}
                                ${e.makeActionPanel("Double tap action",n,"name"!==e._config.button_type?"state"===e._config.button_type?"more-info":"toggle":"none","button_action")}
                                ${e.makeActionPanel("Hold action",n,"name"!==e._config.button_type?"more-info":"none","button_action")}
                            </div>
                        </ha-expansion-panel>
                        ${e.makeSubButtonPanel()}
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
                        .value="${e._config?.auto_close||""}"
                        .configValue="${"auto_close"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Slide to close distance (default to 400)"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="10"
                        .value="${e._config.slide_to_close_distance??400}"
                        .configValue="${"slide_to_close_distance"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-formfield .label="Optional - Close the pop-up by clicking outside of it (a refresh is needed)">
                        <ha-switch
                            aria-label="Optional - Close the pop-up by clicking outside of it (a refresh is needed)"
                            .checked=${e._config?.close_by_clicking_outside??!0}
                            .configValue="${"close_by_clicking_outside"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Close the pop-up by clicking outside of it (a refresh is needed)</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Close the pop-up after any click or tap">
                        <ha-switch
                            aria-label="Optional - Close the pop-up after any click or tap"
                            .checked=${e._config?.close_on_click||!1}
                            .configValue="${"close_on_click"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Close the pop-up after any click or tap</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Update cards in background (not recommended)">
                        <ha-switch
                            aria-label="Optional - Update cards in background (not recommended)"
                            .checked=${e._config?.background_update||!1}
                            .configValue="${"background_update"}"
                            @change=${e._valueChanged}
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
                        .hass=${e.hass}
                        .conditions=${t}
                        @value-changed=${t=>e._conditionChanged(t)}
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
                    ${e.makeActionPanel("Open action",e._config,"none")}
                    ${e.makeActionPanel("Close action",e._config,"none")}
                    <ha-alert alert-type="info">This allows you to trigger an action on pop-up open/close.</ha-alert>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Pop-up styling
                        </h4>
                        <div class="content"> 
                            <ha-textfield
                                label="Optional - Margin (fix centering on some themes) (e.g. 13px)"
                                .value="${e._config?.margin||"7px"}"
                                .configValue="${"margin"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Top margin on mobile (e.g. -56px if your header is hidden)"
                                .value="${e._config?.margin_top_mobile||"0px"}"
                                .configValue="${"margin_top_mobile"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Top margin on desktop (e.g. 50vh for an half sized pop-up)"
                                .value="${e._config?.margin_top_desktop||"0px"}"
                                .configValue="${"margin_top_desktop"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Width on desktop (100% by default on mobile)"
                                .value="${e._config?.width_desktop||"540px"}"
                                .configValue="${"width_desktop"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Background color (any var, hex, rgb or rgba value)"
                                .value="${e._config?.bg_color||""}"
                                .configValue="${"bg_color"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Background opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.bg_opacity?e._config?.bg_opacity:"88"}"
                                .configValue="${"bg_opacity"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Background blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.bg_blur?e._config?.bg_blur:"10"}"
                                .configValue="${"bg_blur"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Backdrop blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.backdrop_blur?e._config?.backdrop_blur:"0"}"
                                .configValue="${"backdrop_blur"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Shadow opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .configValue="${"shadow_opacity"}"
                                .value="${void 0!==e._config?.shadow_opacity?e._config?.shadow_opacity:"0"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-formfield .label="Optional - Hide pop-up backdrop (a refresh is needed)">
                                <ha-switch
                                    aria-label="Optional - Hide pop-up backdrop (a refresh is needed)"
                                    .checked=${e._config.hide_backdrop??!1}
                                    .configValue="${"hide_backdrop"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Hide pop-up backdrop (a refresh is needed)</label> 
                                </div>
                            </ha-formfield>
                            <ha-alert alert-type="warning">Set this toggle to true on the first pop-up of your main dashboard to hide the darker backdrop behind all pop-ups. <b>You can add a blurred effect to it by changing <code>Optional - Backdrop blur</code> just below, but be aware that this can slow down your dashboard when opening pop-ups. It is now set to 0 for that reason.</b></ha-alert>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                    ${e.makeYAMLStyleEditor()}
                </div>
            </ha-expansion-panel>
            <ha-alert alert-type="info">
                This card allows you to convert any vertical stack into a pop-up. Each pop-up is hidden by default and can be opened by targeting its link (e.g., '#pop-up-name'), with <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#example">any card</a> that supports the <code>navigate</code> action, or with the <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#horizontal-buttons-stack">horizontal buttons stack</a> that is included.
                <br><br><b>Important:</b> This card must be placed within a <a style="color: var(--text-primary-color)" href="https://www.home-assistant.io/dashboards/vertical-stack/">vertical stack</a> card at the topmost position to function properly. To avoid misalignment with your view, place vertical stacks/pop-ups after all other dashboard cards. It should be called from the same view to work. 
                <br><br><b>You can also watch this <a style="color: var(--text-primary-color)" href="https://www.youtube.com/watch?v=7mOV7BfWoFc">video</a> that explains how to create your first pop-up.</b>
            </ha-alert>
            <ha-alert alert-type="warning">Since v1.7.0, the optimized mode has been removed to ensure stability and to simplify updates for everyone. However, if your pop-up content still appears on the screen during page loading, <a style="color: var(--text-primary-color)" href="https://github.com/Clooos/Bubble-Card#pop-up-initialization-fix">you can install this similar fix.</a></ha-alert>
            ${e.makeVersion()}
      </div>
    `}(this);case"button":return function(e){let t={};"slider"===e._config.button_type&&(t={domain:["light","media_player","cover","input_number"]});let n=e._config.button_action||"",o=e._config?.button_type||"switch";return it`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            ${e.makeDropdown("Button type","button_type",[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}])}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"slider"!==o?"Entity (toggle)":"Entity (light, media_player, cover or input_number)",selector:{entity:t}}]}   
                .computeLabel=${e._computeLabelCallback}
                .disabled="${"name"===e._config.button_type}"
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:cog"></ha-icon>
                Button settings
                </h4>
                <div class="content">     
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap"></ha-icon>
                Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined style="display: ${"slider"===e._config.button_type?"none":""}">
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap"></ha-icon>
                Tap action on button
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",n,"name"!==e._config.button_type?"state"===e._config.button_type?"more-info":"toggle":"none","button_action")}
                    ${e.makeActionPanel("Double tap action",n,"name"!==e._config.button_type?"state"===e._config.button_type?"more-info":"toggle":"none","button_action")}
                    ${e.makeActionPanel("Hold action",n,"name"!==e._config.button_type?"more-info":"none","button_action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:palette"></ha-icon>
                Styling options
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                    ${e.makeStyleEditor()}
                    ${e.makeYAMLStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-alert alert-type="info">This card allows you to control your entities. ${"slider"===e._config.button_type?"Supported entities: Light (brightness), media player (volume), cover (position), fan (percentage), climate (temperature), input number and number (value). To access color / control of an entity, simply tap on the icon.":""}</ha-alert>
            ${e.makeVersion()}
        </div>
    `}(this);case"separator":return it`
    <div class="card-config">
        ${(o=this).makeDropdown("Card type","card_type",o.cardTypeList)}
        <ha-textfield
            label="Name"
            .value="${o._config?.name||""}"
            .configValue="${"name"}"
            @input="${o._valueChanged}"
        ></ha-textfield>
        ${o.makeDropdown("Icon","icon")}
        <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:palette"></ha-icon>
              Styling options
            </h4>
            <div class="content">
                ${o.makeLayoutOptions()}
                ${o.makeStyleEditor()}
                ${o.makeYAMLStyleEditor()}
            </div>
        </ha-expansion-panel>
        ${o.makeSubButtonPanel()}
        <ha-alert alert-type="info">This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...</ha-alert>
        ${o.makeVersion()}
  </div>
`;case"horizontal-buttons-stack":return function(e){if(!e.buttonAdded)for(e.buttonAdded=!0,e.buttonIndex=0;e._config[e.buttonIndex+1+"_link"];)e.buttonIndex++;return it`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <div id="buttons-container">
                ${function(e){let t=[];for(let n=1;n<=e.buttonIndex;n++)t.push(it`
            <div class="${n}_button">
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:border-radius"></ha-icon>
                        Button ${n} ${e._config[n+"_name"]?"- "+e._config[n+"_name"]:""}
                        <button class="icon-button header" @click="${()=>Ct(e,n)}">
                          <ha-icon icon="mdi:delete"></ha-icon>
                        </button>
                    </h4>
                    <div class="content">
                        <ha-textfield
                            label="Link / Hash to pop-up (e.g. #kitchen)"
                            .value="${e._config[n+"_link"]||""}"
                            .configValue="${n}_link"
                            @input="${e._valueChanged}"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Name"
                            .value="${e._config[n+"_name"]||""}"
                            .configValue="${n}_name"
                            @input="${e._valueChanged}"
                        ></ha-textfield>
                        <ha-icon-picker
                            label="Optional - Icon"
                            .value="${e._config[n+"_icon"]||""}"
                            .configValue="${n}_icon"
                            item-label-path="label"
                            item-value-path="value"
                            @value-changed="${e._valueChanged}"
                        ></ha-icon-picker>
                        <ha-form
                            .hass=${e.hass}
                            .data=${e._config}
                            .schema=${[{name:n+"_entity",label:"Optional - Light / Light group (For background color)",selector:{entity:{}}}]}   
                            .computeLabel=${e._computeLabelCallback}
                            @value-changed=${e._valueChanged}
                        ></ha-form>
                        <ha-form
                            .hass=${e.hass}
                            .data=${e._config}
                            .schema=${[{name:n+"_pir_sensor",label:"Optional - Presence / Occupancy sensor (For button auto order)",selector:{entity:{}}}]}   
                            .computeLabel=${e._computeLabelCallback}
                            @value-changed=${e._valueChanged}
                        ></ha-form>
                        <ha-alert alert-type="info">In fact you can also get the auto order with any entity type, for example you can add light groups to these fields and the order will change based on the last changed states.</ha-alert>
                    </div>
                </ha-expansion-panel>
            </div>
        `);return t}(e)}
            </div>
            <button class="icon-button" @click="${function(){e.buttonIndex++,e.requestUpdate()}}">
                <ha-icon icon="mdi:plus"></ha-icon>
                New button
            </button>
            <ha-formfield .label="Auto order">
                <ha-switch
                    aria-label="Toggle auto order"
                    .checked=${e._config?.auto_order||!1}
                    .configValue="${"auto_order"}"
                    @change=${e._valueChanged}
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
                                .value="${e._config?.margin||"7px"}"
                                .configValue="${"margin"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Width on desktop (100% by default on mobile)"
                                .value="${e._config?.width_desktop||"540px"}"
                                .configValue="${"width_desktop"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-formfield .label="Optional - Rise animation (Displays an animation once the page has loaded)">
                                <ha-switch
                                    aria-label="Optional - Rise animation (Displays an animation once the page has loaded)"
                                    .checked=${void 0===e._config?.rise_animation||e._config?.rise_animation}
                                    .configValue="${"rise_animation"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Rise animation (Displays an animation once the page has loaded)</label> 
                                </div>
                            </ha-formfield>
                            <ha-formfield .label="Optional - Highlight current hash / view">
                                <ha-switch
                                    aria-label="Optional - Highlight current hash / view"
                                    .checked=${e._config?.highlight_current_view||!1}
                                    .configValue="${"highlight_current_view"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Highlight current hash / view</label> 
                                </div>
                            </ha-formfield>
                            <ha-formfield .label="Optional - Hide gradient">
                                <ha-switch
                                    aria-label="Optional - Hide gradient"
                                    .checked=${e._config.hide_gradient||!1}
                                    .configValue="${"hide_gradient"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Hide gradient</label> 
                                </div>
                            </ha-formfield>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                    ${e.makeYAMLStyleEditor()}
                </div>
            </ha-expansion-panel>
            <ha-alert alert-type="info">This card is the companion to the pop-up card, allowing you to open the corresponding pop-ups. It also allows you to open any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.</ha-alert>
            ${e.makeVersion()}
        </div>
    `}(this);case"cover":return function(e){return it`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["cover"]}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Cover settings
                </h4>
                <div class="content"> 
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Open icon","icon_open")}
                    ${e.makeDropdown("Optional - Closed icon","icon_close")}
                    ${e.makeShowState()}
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
                        .value="${e._config?.open_service||"cover.open_cover"}"
                        .configValue="${"open_service"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Stop service (cover.stop_cover by default)"
                        .value="${e._config?.stop_service||"cover.stop_cover"}"
                        .configValue="${"stop_service"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Close service (cover.close_cover by default)"
                        .value="${e._config?.close_service||"cover.close_cover"}"
                        .configValue="${"close_service"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content"> 
                    ${e.makeLayoutOptions()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Cover styling
                        </h4>
                        <div class="content"> 
                            ${e.makeDropdown("Optional - Arrow down icon","icon_down")}
                            ${e.makeDropdown("Optional - Arrow up icon","icon_up")}
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                    ${e.makeYAMLStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-alert alert-type="info">This card allows you to control your covers.</ha-alert>
            ${e.makeVersion()}
        </div>
    `}(this);case"media-player":return function(e){return it`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["media_player"]}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Media player settings
                </h4>
                <div class="content"> 
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
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
                            .checked=${e._config.hide?.play_pause_button||!1}
                            .configValue="${"hide.play_pause_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide play/pause button</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide volume button">
                        <ha-switch
                            aria-label="Optional - Hide volume button"
                            .checked=${e._config.hide?.volume_button||!1}
                            .configValue="${"hide.volume_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide volume button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide next button">
                        <ha-switch
                            aria-label="Optional - Hide next button"
                            .checked=${e._config.hide?.next_button||!1}
                            .configValue="${"hide.next_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide next button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide previous button">
                        <ha-switch
                            aria-label="Optional - Hide previous button"
                            .checked=${e._config.hide?.previous_button||!1}
                            .configValue="${"hide.previous_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide previous button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide power button">
                        <ha-switch
                            aria-label="Optional - Hide power button"
                            .checked=${e._config.hide?.power_button}
                            .configValue="${"hide.power_button"}"
                            @change=${e._valueChanged}
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
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Media player styling
                        </h4>
                        <div class="content"> 
                            <ha-formfield .label="Optional - Blurred media cover in background">
                                <ha-switch
                                    aria-label="Optional - Blurred media cover in background"
                                    .checked=${e._config.cover_background??!1}
                                    .configValue="${"cover_background"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Blurred media cover in background</label> 
                                </div>
                            </ha-formfield>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                    ${e.makeYAMLStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-alert alert-type="info">This card allows you to control a media player. You can tap on the icon to get more control.</ha-alert>
            ${e.makeVersion()}
        </div>
    `}(this);case"empty-column":return function(e){return it`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                </div>
            </ha-expansion-panel>
            <ha-alert alert-type="info">Just an empty card to fill any empty column.</ha-alert>
            ${e.makeVersion()}
        </div>
    `}(this);case"select":return function(e){const t=e._config.entity,n=(t?.startsWith("input_select")||t?.startsWith("select")||e._config.select_attribute,e.hass.states[t]?.attributes),o=e._selectable_attributes.some((e=>n?.[e])),a=Object.keys(e.hass.states[t]?.attributes||{}).map((n=>{let o=e.hass.states[t];return{label:e.hass.formatEntityAttributeName(o,n),value:n}})).filter((t=>e._selectable_attributes.includes(t.value)));return it`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.inputSelectList}
                .data=${e._config}
                .schema=${[{name:"entity",label:"Entity",selector:{entity:{}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            ${o?it`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="Select menu (from attributes)"
                        .value="${e._config.select_attribute}"
                        .items="${a}"
                        .configValue="${"select_attribute"}"
                        @value-changed="${e._valueChanged}"
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
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                    ${e.makeStyleEditor()}
                    ${e.makeYAMLStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-alert alert-type="info">
              This card allows you to have a select menu for your 
              <code>input_select</code>, <code>select</code> entities, and 
              any other entities that have attribute lists like 
              <code>source_list</code>, <code>sound_mode_list</code>, 
              <code>hvac_modes</code>, <code>fan_modes</code>, 
              <code>swing_modes</code>, <code>preset_modes</code>, or 
              <code>effect_list</code>.
            </ha-alert>
            ${e.makeVersion()}
        </div>
    `}(this);case"climate":return function(e){if("climate"===e._config.card_type&&!e.climateSubButtonsAdded&&e._config.entity){const t=e.hass.states[e._config.entity]?.attributes?.hvac_modes;e._config.sub_button&&0!==e._config.sub_button.length||(e._config.sub_button=[t?{name:"HVAC modes menu",select_attribute:"hvac_modes",state_background:!1,show_arrow:!1}:null].filter(Boolean)),e.climateSubButtonsAdded=!0}return it`
        <div class="card-config">
        ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
        <ha-form
            .hass=${e.hass}
            .data=${e._config}
            .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["climate"]}}}]}   
            .computeLabel=${e._computeLabelCallback}
            @value-changed=${e._valueChanged}
        ></ha-form>
                                <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Climate settings
                </h4>
                <div class="content">     
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
                    ${e.hass.states[e._config.entity]?.attributes?.target_temp_low?it`
                        <ha-formfield .label="Optional - Hide target temp low">
                            <ha-switch
                                aria-label="Optional - Hide target temp low"
                                .checked=${e._config.hide_target_temp_low}
                                .configValue="${"hide_target_temp_low"}"
                                @change=${e._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Hide target temp low</label> 
                            </div>
                        </ha-formfield>
                    `:""}
                    ${e.hass.states[e._config.entity]?.attributes?.target_temp_high?it`
                        <ha-formfield .label="Optional - Hide target temp high">
                            <ha-switch
                                aria-label="Optional - Hide target temp high"
                                .checked=${e._config.hide_target_temp_high}
                                .configValue="${"hide_target_temp_high"}"
                                @change=${e._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Hide target temp high</label> 
                            </div>
                        </ha-formfield>
                    `:""}
                    <ha-formfield .label="Optional - Constant background color when ON">
                        <ha-switch
                            aria-label="Optional - Constant background color when ON"
                            .checked=${!0===e._config.state_color}
                            .configValue="${"state_color"}"
                            @change=${e._valueChanged}
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
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                    ${e.makeStyleEditor()}
                    ${e.makeYAMLStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-alert alert-type="info">This card allows you to control your climate entities. You can also add a sub-button that display a select menu for your climate modes (check if you have "Select menu" available when you create a new sub-button).</ha-alert>
            ${e.makeVersion()}
        </div>
    `}(this);case void 0:return it`
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
                `}var o}makeLayoutOptions(){return it`
            <ha-combo-box
                label="${"pop-up"===this._config.card_type?"Header card layout":"Card layout"}"
                .value="${this._config.card_layout||"normal"}"
                .configValue="${"card_layout"}"
                .items="${[{label:"Normal",value:"normal"},{label:"Large (Optimized for sections)",value:"large"},{label:"Large with 2 sub-buttons rows (Optimized for sections)",value:"large-2-rows"}]}"
                @value-changed="${this._valueChanged}"
            ></ha-combo-box>
        `}makeShowState(e=this._config,t="",n=!1,o){const a=e?.entity??this._config.entity??"",i="name"===this._config.button_type,r=a?.startsWith("input_select")||a?.startsWith("select")||e.select_attribute,l=Object.keys(this.hass.states[a]?.attributes||{}).map((e=>{let t=this.hass.states[a];return{label:this.hass.formatEntityAttributeName(t,e),value:e}}));return it`
            ${"sub_button"!==n?it`
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
            ${"sub_button"===n?it`
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
            ${"sub_button"===n&&(e?.show_background??1)?it`
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
            ${"sub_button"===n&&(e?.state_background??1)&&a.startsWith("light")?it`
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
            ${"sub_button"!==n&&a.startsWith("light")?it`
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
            ${"sub_button"!==n?it`
                <ha-formfield .label="Optional - Prioritize icon over entity picture">
                    <ha-switch
                        aria-label="Optional - Prioritize icon over entity picture"
                        .checked=${e?.force_icon??!1}
                        .configValue="${t+"force_icon"}"
                        .disabled="${i}"
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
                    .disabled="${i&&"sub_button"!==n}"
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
                    .disabled="${i&&"sub_button"!==n}"
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
                    .disabled="${i&&"sub_button"!==n}"
                    @change="${n?e=>this._arrayValueChange(o,{show_attribute:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Optional - Show attribute</label> 
                </div>
            </ha-formfield>
            ${e?.show_attribute?it`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="Optional - Attribute to show"
                        .value="${e?.attribute}"
                        .configValue="${t+"attribute"}"
                        .items="${l}"
                        .disabled="${i}"
                        @value-changed="${n?e=>this._arrayValueChange(o,{attribute:e.detail.value},n):this._valueChanged}"
                    ></ha-combo-box>
                </div>
            `:""}
            ${"sub_button"===n&&r?it`
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
            ${"sub_button"!==n&&"slider"===this._button_type?it`
                <ha-formfield .label="Optional - Slider live update">
                    <ha-switch
                        aria-label="Optional - Slider live update"
                        .checked=${this._config.slider_live_update??!1}
                        .configValue="${"slider_live_update"}"
                        @change=${this._valueChanged}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Slider live update</label> 
                    </div>
                </ha-formfield>
                <ha-alert alert-type="info">By default, sliders are updated only on release. You can toggle this option to enable live updates while sliding.</ha-alert>
            `:""}
        `}makeDropdown(e,t,n,o){return e.includes("icon")||e.includes("Icon")?it`
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
            `:it`
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
          `}makeActionPanel(e,t=this._config,n,o,a=this._config){const i="Tap action"===e?"mdi:gesture-tap":"Double tap action"===e?"mdi:gesture-double-tap":"Hold action"===e?"mdi:gesture-tap-hold":"mdi:gesture-tap",r="Tap action"===e?"tap_action":"Double tap action"===e?"double_tap_action":"Hold action"===e?"hold_action":"Open action"===e?"open_action":"close_action";let l;try{l="Tap action"===e?t.tap_action:"Double tap action"===e?t.double_tap_action:"Hold action"===e?t.hold_action:"Open action"===e?t.open_action:t.close_action}catch{}const s=t===this._config;return n||(n=s&&"Tap action"===e?"name"!==this._config.button_type?"more-info":"none":s?"name"!==this._config.button_type?"toggle":"none":""),it`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="${i}"></ha-icon>
                    ${e}
                </h4>
                <div class="content"> 
                    <ha-form
                        .hass=${this.hass}
                        .data=${t}
                        .configValue="${(o?o+".":"")+(parseInt(a)==a?a+".":"")+r}" 
                        .schema=${[{name:r,label:e,selector:{ui_action:{default_action:n}}}]}  
                        .computeLabel=${this._computeLabelCallback}
                        @value-changed=${e=>this._ActionChanged(e,o,a)}
                    ></ha-form>
                </div>
                ${"call-service"===l?.action||"perform-action"===l?.action?it`
                    <ha-formfield .label="Optional - Use default entity">
                        <ha-switch
                            aria-label="Optional - Use default entity"
                            .configValue="${(o?o+".":"")+(parseInt(a)==a?a+".":"")+r+".default_entity"}" 
                            .checked=${"entity"===l?.target?.entity_id}
                             @change=${this._updateActionsEntity}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Use default entity</label> 
                        </div>
                    </ha-formfield>
                `:""}
            </ha-expansion-panel>
        `}makeSubButtonPanel(){const e=this._config?.sub_button?.map(((e,t)=>{if(!e)return;const n="sub_button."+t+".",o=e.entity??this._config.entity,a=o?.startsWith("input_select")||o?.startsWith("select")||e.select_attribute,i=this.hass.states[o]?.attributes,r=this._selectable_attributes.some((e=>i?.[e])),l=Object.keys(this.hass.states[o]?.attributes||{}).map((e=>{let t=this.hass.states[o];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})).filter((e=>this._selectable_attributes.includes(e.value))),s=e.visibility??[];return it`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:border-radius"></ha-icon>
                    ${this._config.sub_button[t]?"Button "+(t+1)+(e.name?" - "+e.name:""):"New button"}
                    <button class="icon-button header" @click="${n=>{n.stopPropagation();let o=[...this._config.sub_button];o.splice(t,1),this._config.sub_button=o,this._valueChanged({target:{configValue:"sub_button."+(t-1),value:e}}),this.requestUpdate()}}">
                      <ha-icon icon="mdi:delete"></ha-icon>
                    </button>
                    ${t>0?it`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t>0){let e=[...this._config.sub_button];[e[t],e[t-1]]=[e[t-1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
                      <ha-icon icon="mdi:arrow-left"></ha-icon>
                    </button>`:""}
                    ${t<this._config.sub_button.length-1?it`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t<this._config.sub_button.length-1){let e=[...this._config.sub_button];[e[t],e[t+1]]=[e[t+1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
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
                            @value-changed=${e=>this._arrayValueChange(t,e.detail.value,"sub_button")}
                        ></ha-form>
                            ${r?it`
                                <div class="ha-combo-box">
                                    <ha-combo-box
                                        label="Optional - Select menu (from attributes)"
                                        .value="${e.select_attribute}"
                                        .items="${l}"
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
                    <ha-expansion-panel outlined style="${a?"opacity: 0.5; pointer-events: none;":""}">
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
                                .conditions=${s}
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
        `}));return it`
        <ha-expansion-panel outlined>
          <h4 slot="header">
            <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
            Sub-buttons editor
          </h4>
          <div class="content">
            ${e}
            <button class="icon-button" @click="${()=>{this._config.sub_button||(this._config.sub_button=[]);let e={entity:this._config.entity};this._config.sub_button=[...this._config.sub_button],this._config.sub_button.push(e),(0,t.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()}}">
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
      `}makeVersion(){return it`
            <h4 class="version">
                Bubble Card 
                <span class="versionNumber">
                    ${e}
                </span>
            </h4>
        `}makeStyleEditor(){return it`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:code-braces"></ha-icon>
                    Custom styles & templates - This card
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
                    <ha-alert alert-type="info">
                      For advanced users, you can edit the CSS style of this card in this editor. More information <a href="https://github.com/Clooos/Bubble-Card#styling">here</a>. You don't need to add <code>styles: |</code>, it will be added automatically. You can also add <a href="https://github.com/Clooos/Bubble-Card#templates">templates</a>.
                      <br><br><b>Looking for more advanced examples?</b> Check out my <a href="https://www.patreon.com/Clooos">Patreon</a> for exclusive custom styles and advanced templates, this is also the best way to show your support to my project!
                    </ha-alert>
                </div>
            </ha-expansion-panel>
        `}createErrorConsole(){return this._errorListener||(this._errorListener=e=>{this.errorMessage=e.detail,this.requestUpdate()},window.addEventListener("bubble-card-error",this._errorListener)),it`
            <ha-alert 
                alert-type="error"
                style="display: ${this.errorMessage?"":"none"}">
                ${this.errorMessage}
            </ha-alert>
        `}makeYAMLStyleEditor(){const e=(e,t,n=!0)=>{const o=B.get(e);if(o){const e=o.split("\n")[t].trim();if(e.startsWith("/*")&&e.endsWith("*/"))return e.slice(2,-2).trim()}if(n)return e},n=e=>{const n=e.target,o=n.configValue,a=n.checked;this._config.style_templates||(this._config.style_templates=[]),a?this._config.style_templates.includes(o)||(this._config.style_templates=[...this._config.style_templates,o]):this._config.style_templates=this._config.style_templates.filter((e=>e!==o)),(0,t.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()},o=this._config.style_templates||["default"];return it`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:code-block-braces"></ha-icon>
                    Custom styles & templates - Global
                </h4>
                <div class="content">
                    ${Array.from(B.keys()).map((t=>{const a=e(t,0),i=e(t,1,!1),r=o.includes(t);return it`
                            <ha-expansion-panel outlined>
                                <h4 slot="header">
                                    <ha-icon 
                                        icon="${r?"mdi:check-circle-outline":"mdi:circle-outline"}"
                                        style="opacity: ${r?"1":"0.3"}"
                                    ></ha-icon>
                                    ${a}
                                </h4>
                                <div class="content">
                                    <ha-formfield .label="${"Apply to this card"}">
                                        <ha-switch
                                            aria-label="${"Apply to this card"}"
                                            .checked=${r}
                                            .configValue="${t}"
                                            @change=${n}
                                        ></ha-switch>
                                    </ha-formfield>
                                    <ha-alert 
                                        alert-type="info" 
                                        style="display: ${i?"":"none"}">
                                        ${it`<span .innerHTML=${i}></span>`}
                                    </ha-alert>
                                </div>
                            </ha-expansion-panel>
                        `}))}
                    ${this.createErrorConsole()}
                    <ha-alert 
                        alert-type="warning" 
                        style="display: ${window.bubbleYamlWarning?"":"none"}">
                        <b>If you want to edit or add global styles and templates here</b>, first copy <code>bubble-custom.yaml</code> from <code>/www/community/Bubble-Card/</code> (if installed via HACS) to <code>/www/bubble/</code> (you'll need to create this folder). Make sure to clear your cache after each modification.
                    </ha-alert>
                    <ha-alert 
                        alert-type="info">
                        For advanced users, you can define global custom <a href="https://github.com/Clooos/Bubble-Card#styling">styles</a> and <a href="https://github.com/Clooos/Bubble-Card#templates">templates</a> in a YAML file and apply them across multiple cards. 
                        To use this, add your modifications under a key inside the YAML file, like <code>default:</code> to apply them everywhere, or create new ones. This allows you to reuse and maintain custom styles and templates more efficiently.
                        <br><br><b>Looking for more advanced examples?</b> Check out my <a href="https://www.patreon.com/Clooos">Patreon</a> for exclusive custom styles and advanced templates, this is also the best way to show your support to my project!
                    </ha-alert>
                </div>
            </ha-expansion-panel>
        `}_valueChanged(e){const n=e.target,o=e.detail;let a;if("HA-SWITCH"===n.tagName?a=n.checked:void 0!==n.value&&(a="string"==typeof n.value?n.value.replace(",","."):n.value),"string"==typeof a&&(a.endsWith(".")||"-"===a))return;const{configValue:i,checked:r}=n;if(i){const t=i.split(".");let r=this._config;for(let e=0;e<t.length-1;e++)r[t[e]]=r[t[e]]||{},r=r[t[e]];"input"===e.type?r[t[t.length-1]]=a:o&&r[t[t.length-1]]!==o.value?r[t[t.length-1]]=o.value:"HA-SWITCH"===n.tagName&&(r[t[t.length-1]]=a)}else this._config=o.value;(0,t.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()}_arrayValueChange(e,n,o){if(this._config.sub_button&&!this.subButtonJustAdded)return this.subButtonJustAdded=!0,void setTimeout((()=>this._arrayValueChange(e,n,o)),10);this._config[o]=this._config[o]||[];let a=[...this._config[o]];a[e]=a[e]||{},a[e]={...a[e],...n},this._config[o]=a,(0,t.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()}_ActionChanged(e,n,o){var a=!1;try{"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id[0]&&(a=!0)}catch{}try{"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id&&(a=!0)}catch{}if(a&&(e.detail.value[e.currentTarget.__schema[0].name].action="call-service",null!=e.detail.value[e.currentTarget.__schema[0].name].perform_action&&(e.detail.value[e.currentTarget.__schema[0].name].service=""+e.detail.value[e.currentTarget.__schema[0].name].perform_action,delete e.detail.value[e.currentTarget.__schema[0].name].perform_action)),"button_action"===n){var i=!!this._config[n],r=null!=e.detail.value[e.currentTarget.__schema[0].name];(i||r)&&(this._config[n]=e.detail.value)}else if(n){this._config[n]=this._config[n]||[];let t=[...this._config[n]];t[o]=e.detail.value,this._config[n]=t}else this._config=e.detail.value;(0,t.BX)(this,"config-changed",{config:this._config})}_updateActionsEntity(e){let t=JSON.parse(JSON.stringify(this._config));const n=e.target.configValue.split(".");let o=0;for(o=0;o<n.length-2;o++)t=t[n[o]]?t[n[o]]:{};e.target.checked?t[n[o]].target={entity_id:"entity"}:"entity"===t[n[o]].target?.entity_id&&(t[n[o]].target={});var a={value:t},i={__schema:[{name:n[n.length-2]}]},r={...e,detail:a,currentTarget:i};this._ActionChanged(r,n.length>2?n[0]:null,n.length>3?n[1]:null)}_computeLabelCallback=e=>e.label;_conditionChanged(e,n,o){if(e.stopPropagation(),o){this._config[o]=this._config[o]||[];let t=[...this._config[o]];t[n]=t[n]||{};const a=e.detail.value;t[n]={...t[n],visibility:a},this._config[o]=t}else if("pop-up"===this._config.card_type){const t=e.detail.value;this._config={...this._config,trigger:t}}(0,t.BX)(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return we`
            ${_e('div {\n    display: grid;\n    grid-gap: 12px;\n}\n\nha-combo-box[label="Card type"]::after {\n    content: "";\n    position: relative;\n    background-color: var(--background-color, var(--secondary-background-color));\n    display: block;\n    width: 100%;\n    height: 1px;\n    top: 12px;\n    margin-bottom: 12px !important;\n    opacity: 0.6;\n}\n\n#add-button {\n    margin: 0 0 14px 0;\n    color: var(--text-primary-color);\n    width: 100%;\n    height: 32px;\n    border-radius: 16px;\n    border: none;\n    background-color: var(--accent-color);\n    cursor: pointer;\n}\n\np {\n    margin-bottom: 4px;\n}\n\nha-icon, a, p, button, h4 {\n    color: var(--primary-text-color) !important;\n}\n\nhr {\n    display: inline-block;\n    width: 100%;\n    border: 1px solid var(--background-color, var(--secondary-background-color));\n    opacity: 0.6;\n    margin: 8px 0 0 0;\n}\n\ncode {\n    background: var(--accent-color);\n    background-blend-mode: darken;\n    padding: 2px 4px;\n    border-radius: 6px;\n}\n\n.button-header {\n    height: auto;\n    width: 100%;\n    display: inline-flex;\n    align-items: center;\n    margin: 0 8px;\n}\n\n.button-number {\n    display: inline-flex;\n    width: auto;\n}\n\n.remove-button {\n    display: inline-flex;\n    border-radius: 50%;\n    width: 24px;\n    height: 24px;\n    text-align: center;\n    line-height: 24px;\n    vertical-align: middle;\n    cursor: pointer;\n}\n\n.content {\n    margin: 12px 4px 14px 4px;\n}\n\nh4 > ha-icon {\n    margin: 8px;\n}\n\nha-textfield {\n    width: 100%;\n}\n\nh3 {\n    margin: 4px 0;\n}\n\n.code-editor {\n    overflow: scroll;\n}\n\n.icon-button {\n    background: var(--accent-color);\n    border: none;\n    cursor: pointer;\n    padding: 8px;\n    margin: 0;\n    border-radius: 32px;\n    font-weight: bold;\n}\n\n.icon-button.header {\n    background: none;\n    float: right;\n    padding: 0;\n    margin: 0 8px;\n}\n\nha-card-conditions-editor {\n    margin-top: -12px;\n}\n\n.version{\n    font-size: 12px !important;\n    color: #fff;\n    background: rgba(0,0,0,0.1);\n    padding: 8px 16px;\n    border-radius: 32px;\n}\n\n.versionNumber{\n    font-size: 10px;\n    background: rgba(0,120,180,1);\n    padding: 0px 8px;\n    border-radius: 12px;\n    margin-right: -6px;\n    float: right;\n    color: white;\n}')}
          `}});class $t extends HTMLElement{editor=!1;isConnected=!1;_cachedDetectedEditor=null;connectedCallback(){var e;this.isConnected=!0,e=this,e.config?.card_type&&!e.stylesYAML&&(z||(z=(async e=>{for(const e of["/local/bubble/bubble-custom.yaml","/hacsfiles/Bubble-Card/bubble-custom.yaml","/local/community/Bubble-Card/bubble-custom.yaml"]){if(P.has(e))return P.get(e);try{const t=await fetch(e);if(!t.ok)throw new Error(`Failed to fetch ${e}`);const n=await t.text(),o=I(n);return B.size||Object.entries(o).forEach((([e,t])=>B.set(e,t))),P.set(e,o),o}catch(t){console.warn(`Error fetching YAML from ${e}:`,t),window.bubbleYamlWarning=!0}}return null})()),e.stylesYAML=z),this._hass&&this.updateBubbleCard()}disconnectedCallback(){this.isConnected=!1}get detectedEditor(){if(this.editor)return"hui-dialog-edit-card"===window.history?.state?.dialog}set editMode(e){this.editor!==e&&(this.editor=e,this.updateBubbleCard())}set hass(e){!function(e){if(!e.content){let t=e.shadowRoot||e.attachShadow({mode:"open"}),n=document.createElement("ha-card");n.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let o=document.createElement("div");o.className="card-content",o.style.padding="0",n.appendChild(o),t.appendChild(n),e.card=n,e.content=o}}(this),this._hass=e;const t="pop-up"===this.config.card_type;(!this.editor&&(this.isConnected||t)||this.detectedEditor)&&this.updateBubbleCard()}updateBubbleCard(){switch(this.config.card_type){case"pop-up":ne(this);break;case"button":te(this);break;case"separator":"separator"!==(e=this).cardType&&function(e){e.elements={},e.elements.separatorCard=(0,t.az)("div","bubble-separator separator-container"),e.elements.icon=(0,t.az)("ha-icon","bubble-icon"),e.elements.name=(0,t.az)("h4","bubble-name"),e.elements.line=(0,t.az)("div","bubble-line"),e.elements.style=(0,t.az)("style"),e.elements.style.innerText=".bubble-separator {\n    display: flex;\n    width: 100%;\n\n    align-items: center;\n    z-index: 1;\n}\n.bubble-icon {\n    display: inline-flex;\n    height: auto;\n    width: auto;\n    margin: 0 22px 0 8px;\n}\n.bubble-name {\n    margin: 0 30px 0 0;\n    font-size: 16px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.bubble-name:empty {\n    display: none;\n}\n.bubble-line {\n    border-radius: 6px;\n    opacity: 0.5;\n    flex-grow: 1;\n    height: 6px;\n    background-color: var(--bubble-line-background-color, var(--background-color, var(--secondary-background-color)));\n    margin-right: 14px;\n}\n.bubble-sub-button-container {\n    margin: 0 8px;\n    right: 0 !important;\n}\n\n.large .bubble-separator {\n    height: 56px;\n}\n\n.rows-2 .bubble-sub-button-container {\n    flex-direction: column;\n    gap: 4px !important;\n    display: grid !important;\n    grid-template-columns: repeat(1, min-content);\n    grid-template-rows: repeat(2, 1fr);\n    grid-auto-flow: column;\n    width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n    height: 20px !important;\n}\n",e.elements.customStyle=(0,t.az)("style"),e.elements.separatorCard.appendChild(e.elements.icon),e.elements.separatorCard.appendChild(e.elements.name),e.elements.separatorCard.appendChild(e.elements.line),e.content.innerHTML="",e.content.appendChild(e.elements.separatorCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="separator"}(e),function(e){e.elements.icon.icon=(0,t.q7)(e),""===e.elements.icon.icon&&""===e.elements.icon.style.margin?(e.elements.icon.style.margin="0px 8px",e.elements.icon.style.width="0px"):""!==e.elements.icon.icon&&"0px 8px"===e.elements.icon.style.margin&&(e.elements.icon.style.margin="",e.elements.icon.style.width="")}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const n=(0,t.oY)(e);n!==e.elements.name.innerText&&(e.elements.name.innerText=n)}(e),X(e,e.content,e.elements.separatorCard),function(e){G(e),(0,t.jx)(e),V(e)}(e);break;case"cover":!function(e){"cover"!==e.cardType&&function(e){e.elements={},e.elements.coverCardContainer=(0,t.az)("div","bubble-cover-card-container bubble-container cover-container"),e.elements.headerContainer=(0,t.az)("div","bubble-header header-container"),e.elements.buttonsContainer=(0,t.az)("div","bubble-buttons buttons-container"),e.elements.iconContainer=(0,t.az)("div","bubble-icon-container icon-container"),e.elements.icon=(0,t.az)("ha-icon","bubble-icon"),e.elements.nameContainer=(0,t.az)("div","bubble-name-container name-container"),e.elements.name=(0,t.az)("div","bubble-name name"),e.elements.state=(0,t.az)("div","bubble-state state"),e.elements.buttonOpen=(0,t.az)("div","bubble-button bubble-open button open"),e.elements.buttonStop=(0,t.az)("div","bubble-button bubble-stop button stop"),e.elements.buttonClose=(0,t.az)("div","bubble-button bubble-close button close"),e.elements.iconOpen=(0,t.az)("ha-icon","bubble-icon bubble-icon-open"),e.elements.iconStop=(0,t.az)("ha-icon","bubble-icon bubble-icon-stop"),e.elements.iconStop.icon="mdi:stop",e.elements.iconClose=(0,t.az)("ha-icon","bubble-icon bubble-icon-close"),e.elements.style=(0,t.az)("style"),e.elements.style.innerText="* {\n    -webkit-tap-highlight-color: transparent !important;\n}\nha-card {\n    margin-top: 0 !important;\n    background: none !important;\n}\n\n.bubble-cover-card-container {\n    display: grid;\n    gap: 10px;\n    overflow: hidden;\n}\n\n.bubble-header {\n    display: flex;\n    align-items: center;\n}\n\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n    min-width: 38px;\n    min-height: 38px;\n    margin: 6px;\n    border-radius: var(--bubble-button-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n}\n\n.bubble-icon {\n    display: flex;\n    opacity: 0.6;\n}\n\n.is-on .bubble-icon {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 1em;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    font-weight: 600;\n    margin-left: 4px;\n    margin-right: 16px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-size: 13px;\n    margin: 2px 0;\n    white-space: nowrap;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-state {\n    font-size: 12px;\n    opacity: 0.7;\n    margin: 2px 0;\n    font-weight: normal;\n    white-space: nowrap;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-buttons {\n    display: grid;\n    align-self: center;\n    grid-auto-flow: column;\n    grid-gap: 18px;\n}\n\n.bubble-button.disabled {\n    opacity: 0.3 !important;\n    pointer-events: none !important;\n    cursor: none !important;\n}\n\n.bubble-button {\n    display: flex;\n    background: var(--bubble-cover-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    height: 42px;\n    border-radius: var(--bubble-cover-border-radius, var(--bubble-border-radius, 32px));\n    box-shadow: var(--bubble-cover-box-shadow, var(--bubble-button-box-shadow, var(--bubble-box-shadow, none)));\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    border: var(--bubble-cover-border, var(--bubble-border, none));\n}\n\n.large .bubble-cover-card-container {\n  height: 56px;\n  display: flex;\n  background: var(--bubble-cover-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n  border-radius: var(--bubble-cover-border-radius, var(--bubble-border-radius, 32px));\n  box-shadow: var(--bubble-cover-box-shadow, var(--bubble-button-box-shadow, var(--bubble-box-shadow, none)));\n  border: var(--bubble-cover-border, var(--bubble-border, none));\n}\n\n.large .bubble-buttons .bubble-icon {\n  color: var(--primary-text-color) !important;\n  opacity: 1;\n}\n\n.large .bubble-header-container {\n    height: 56px;\n}\n\n.large .bubble-header {\n    width: 100%;\n}\n\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  align-content: center;\n  border: none;\n  margin: 8px 6px 8px 8px;\n}\n\n.large .bubble-icon {\n  align-items: center;\n}\n\n.large .bubble-buttons {\n  display: flex;\n  position: relative;\n  right: 18px;\n  align-self: center;\n  grid-gap: 18px;\n}\n\n.large .bubble-button,\n.large .bubble-sub-button {\n  box-shadow: none;\n  border: none;\n}\n\n.large .bubble-sub-button-container {\n  margin-right: 14px;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, min-content);\n  grid-template-rows: repeat(2, 1fr);\n  grid-auto-flow: column;\n  width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n",e.elements.customStyle=(0,t.az)("style"),e.elements.iconContainer.appendChild(e.elements.icon),e.elements.headerContainer.appendChild(e.elements.iconContainer),e.elements.headerContainer.appendChild(e.elements.nameContainer),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonsContainer.appendChild(e.elements.buttonOpen),e.elements.buttonsContainer.appendChild(e.elements.buttonStop),e.elements.buttonsContainer.appendChild(e.elements.buttonClose),e.elements.buttonOpen.appendChild(e.elements.iconOpen),e.elements.buttonOpen.addEventListener("click",(()=>{const t=e.config.open_service??"cover.open_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),e.elements.buttonStop.appendChild(e.elements.iconStop),e.elements.buttonStop.addEventListener("click",(()=>{const t=e.config.stop_service??"cover.stop_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),e.elements.buttonClose.appendChild(e.elements.iconClose),e.elements.buttonClose.addEventListener("click",(()=>{const t=e.config.close_service??"cover.close_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),a(e.elements.iconContainer,e.config),e.content.innerHTML="",e.content.appendChild(e.elements.coverCardContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.coverCardContainer.appendChild(e.elements.headerContainer),e.elements.coverCardContainer.appendChild(e.elements.buttonsContainer),e.elements.coverCardContainer.addEventListener("click",(()=>(0,t.jk)("selection"))),e.cardType="cover"}(e),function(e){const n=e._hass.states[e.config.entity],{current_position:o,assumed_state:a}=n.attributes,i=se(n,ie),r=se(n,re),l=se(n,le),s=function(e){return void 0!==e.attributes.current_position?100===e.attributes.current_position:"open"===e.state}(n),c=function(e){return void 0!==e.attributes.current_position?0===e.attributes.current_position:"closed"===e.state}(n),d="curtain"===(0,t.IL)(e,"device_class");e.elements.icon.icon=s?(0,t.q7)(e,e.config.entity,e.config.icon_open):(0,t.q7)(e,e.config.entity,e.config.icon_close),e.elements.iconOpen.icon=e.config.icon_up||(d?"mdi:arrow-expand-horizontal":"mdi:arrow-up"),e.elements.iconClose.icon=e.config.icon_down||(d?"mdi:arrow-collapse-horizontal":"mdi:arrow-down"),void 0!==o?(s?e.elements.buttonOpen.classList.add("disabled"):i&&e.elements.buttonOpen.classList.remove("disabled"),c?e.elements.buttonClose.classList.add("disabled"):r&&e.elements.buttonClose.classList.remove("disabled")):(e.elements.buttonOpen.classList.remove("disabled"),e.elements.buttonClose.classList.remove("disabled")),e.elements.buttonStop.style.display=l?"":"none"}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const n=(0,t.oY)(e);n!==e.elements.previousName&&(e.elements.name.innerText=n,(0,t.GP)(e,e.elements.name,n),e.elements.previousName=n)}(e),Y(e),X(e,e.content,e.elements.headerContainer),function(e){G(e),(0,t.jx)(e),V(e)}(e)}(this);break;case"empty-column":!function(e){"empty-column"!==e.cardType&&function(e){e.elements={},e.elements.emptyColumnCard=(0,t.az)("div","bubble-empty-column empty-column"),e.elements.style=(0,t.az)("style"),e.elements.style.innerText=".empty-column {\n    display: flex;\n    width: 100%;\n}\n",e.elements.customStyle=(0,t.az)("style"),e.content.innerHTML="",e.content.appendChild(e.elements.emptyColumnCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="empty-column"}(e)}(this);break;case"horizontal-buttons-stack":!function(e){"horizontal-buttons-stack"!==e.cardType&&function(e){e.elements={},e.elements.buttons=[],e.elements.cardContainer=(0,t.az)("div","bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container");let n=1;for(;e.config[n+"_link"];)e.elements.cardContainer.appendChild(ae(e,n)),n++;e.elements.style=(0,t.az)("style"),e.elements.style.innerText="@keyframes from-bottom {\n    0% { transform: translate(-50%, 100px); }\n    26% { transform: translate(-50%, -8px); }\n    46% { transform: translate(-50%, 1px); }\n    62% { transform: translate(-50%, -2px); }\n    70% { transform: translate(-50%, 0); }\n    100% { transform: translate(-50%, 0); }\n}\n@keyframes pulse {\n    0% { filter: brightness(0.7); }\n    100% { filter: brightness(1.3); }\n}\nha-card {\n    border-radius: 0;\n}\n.horizontal-buttons-stack-card {\n    bottom: 16px;\n    height: 51px;\n    margin-top: 0;\n    position: fixed;\n    width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\n    left: calc(var(--mdc-drawer-width, 0px) + 4px);\n    z-index: 6; /* Higher value hide the more-info panel */\n}\n@media only screen and (max-width: 870px) {\n    .horizontal-buttons-stack-card {\n        width: calc(100% - 16px);\n        left: 8px;\n    }\n\n    .horizontal-buttons-stack-card::before {\n        left: -10px;\n    }\n}\n.horizontal-buttons-stack-card::before {\n    content: '';\n    position: absolute;\n    top: -32px;\n    display: none;\n    background: linear-gradient(0deg, var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--primary-background-color)))) 50%, transparent);\n    width: 200%;\n    height: 100px;\n    pointer-events: none;\n}\n.has-gradient.horizontal-buttons-stack-card::before {\n    display: block;\n}\n\n.card-content {\n    width: calc(100% + 36px);\n    padding: 0 !important;\n    max-width: calc(var(--desktop-width) - 8px);\n    box-sizing: border-box;\n    overflow: scroll;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    -webkit-mask-image: linear-gradient(\n        90deg,\n        #000000 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        transparent 100%\n    );\n}\n.is-scrollable.card-content {\n    padding: 0 !important;\n    width: 100%;\n}\n.is-scrolled.card-content {\n    padding: 0 !important;\n    width: 100%;\n    -webkit-mask-image: linear-gradient(\n        90deg,\n        transparent 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        transparent 100%\n    );\n}\n.is-maxed-scroll.card-content {\n    -webkit-mask-image: linear-gradient(\n        90deg,\n        transparent 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        #000000 100%\n    );\n}\n.card-content::-webkit-scrollbar {\n    display: none;\n}\n\n.bubble-horizontal-buttons-stack-card-container {\n    height: 51px;\n    position: relative;\n    margin: auto;\n}\n\n.bubble-button {\n    align-items: center;\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    color: var(--primary-text-color);\n    cursor: pointer;\n    display: inline-flex;\n    height: 50px;\n    left: 0;\n    padding: 0 16px;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n    transition: transform 1s;\n    box-sizing: border-box;\n}\n.bubble-button.highlight {\n    animation: pulse 1.4s infinite alternate;\n}\n.bubble-background-color {\n    border: 1px solid var(--primary-text-color);\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    box-sizing: border-box;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    transition: background-color 1s;\n    width: 100%;\n    z-index: 1;\n}\n.bubble-background {\n    opacity: 0.8;\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box !important;\n    position: absolute;\n    left: 0;\n    z-index: 0;\n    background-color: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n}\n.bubble-icon {\n    height: 24px;\n    width: 24px;\n    z-index: 2;\n}\n.bubble-icon + .bubble-name {\n    margin-left: 8px;\n    z-index: 2;\n}\n\n.horizontal-buttons-stack-card.editor {\n    position: relative;\n    width: 100%;\n    left: 0;\n    bottom: 0;\n}\n.horizontal-buttons-stack-card.editor::before {\n    background: none;\n}\n",e.elements.customStyle=(0,t.az)("style"),e.card.classList.add("horizontal-buttons-stack-card"),e.card.style.marginLeft=e.config.margin??"",e.config.hide_gradient||e.card.classList.add("has-gradient"),e.card.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.elements.cardContainer.appendChild(e.elements.style),e.elements.cardContainer.appendChild(e.elements.customStyle),e.content.appendChild(e.elements.cardContainer),e.content.addEventListener("scroll",(()=>{e.content.scrollLeft>0?e.content.classList.add("is-scrolled"):e.content.classList.remove("is-scrolled"),e.content.scrollWidth-12<e.content.offsetWidth+e.content.scrollLeft?e.content.classList.add("is-maxed-scroll"):e.content.classList.remove("is-maxed-scroll")})),(e.config.rise_animation??1)&&(e.content.style.animation="from-bottom .6s forwards",setTimeout((()=>{e.content.style.animation="none"}),1500));let o=e.card.parentNode.host;o&&!e.editor&&"hui-card"!==o.parentElement.tagName.toLowerCase()?o.style.padding="0 0 80px":o.parentElement&&!e.editor&&"hui-card"===o.parentElement.tagName.toLowerCase()&&(o.parentElement.style.padding="0 0 80px"),e.cardType="horizontal-buttons-stack"}(e),function(e){V(e)}(e),function(e){if(!e.config.auto_order)return;const t=e._hass.states;e.elements.buttons.sort(((e,n)=>{if(!t[e.pirSensor])return 1;if(!t[n.pirSensor])return-1;const o=t[e.pirSensor]?.last_updated,a=t[n.pirSensor]?.last_updated;return"on"===t[e.pirSensor]?.state&&"on"===t[n.pirSensor]?.state?o>a?-1:o===a?0:1:"on"===t[e.pirSensor]?.state?-1:"on"===t[n.pirSensor]?.state?1:o>a?-1:o===a?0:1}))}(e),function(e){e.elements.buttons.forEach((t=>{const n=t.index,o=e.config[`${n}_name`]??"",a=e.config[`${n}_icon`]??"",i=e.config[`${n}_pir_sensor`],r=e.config[`${n}_link`],l=e.config[`${n}_entity`];t.pirSensor=i,t.lightEntity=l,t.link=r,o?(t.name.innerText=o,t.name.style.display=""):t.name.style.display="none",a?(t.icon.icon=a,t.icon.style.display=""):t.icon.style.display="none",void 0===r&&(t.remove(),e.elements.buttons=e.elements.buttons.filter((e=>e!==t)),e.elements.buttons.forEach(((e,t)=>{e.index=t+1})))}));let t=e.elements.buttons.length+1;for(;void 0!==e.config[`${t}_link`];){if(!e.elements.buttons.find((e=>e.index===t))){const n=ae(e,t);e.elements.buttons.push(n)}t++}}(e),function(e){const t=e.shadowRoot.host.closest("hui-card-preview, hui-card-options");e.editor||null!==t?(e.elements.cardContainer.classList.add("editor"),e.card.classList.add("editor")):(e.elements.cardContainer.classList.remove("editor"),e.card.classList.remove("editor"))}(e),function(e){let t=0;for(let n=0;n<e.elements.buttons.length;++n){let o=localStorage.getItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`);e.elements.buttons[n].style.width="";const a=e.elements.buttons[n].offsetWidth;e.elements.buttons[n].style.width=`${a}px`,a>0&&(o=a,localStorage.setItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`,`${a}`)),null!==o&&(e.elements.buttons[n].style.transform=`translateX(${t}px)`,e.elements.buttons[n].style.width="",t+=+o+12)}e.elements.cardContainer.style.width=`${t}px`}(e),function(e){e.elements.buttons.forEach((t=>{const o=e._hass.states[t.lightEntity],a=o?.attributes.rgb_color,i=o?.state;if(a){const e=(0,n.wW)(a)?"rgba(255, 220, 200, 0.5)":`rgba(${a}, 0.5)`;t.backgroundColor.style.backgroundColor=e,t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"}else"on"==i?(t.backgroundColor.style.backgroundColor="rgba(255, 255, 255, 0.5)",t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"):(t.backgroundColor.style.backgroundColor="rgba(0, 0, 0, 0)",t.backgroundColor.style.borderColor="var(--primary-text-color)")}))}(e),function(e){e.content.scrollWidth>=e.content.offsetWidth?e.content.classList.add("is-scrollable"):e.content.classList.remove("is-scrollable")}(e)}(this);break;case"media-player":be(this);break;case"select":!function(e){e.cardType,"select"!==e.cardType&&(function(e){e.elements||(e.elements={});let n=e.content;e.elements.selectCardContainer=(0,t.az)("div","bubble-select-card-container bubble-container"),e.elements.selectCard=(0,t.az)("div","bubble-select-card"),e.elements.selectBackground=(0,t.az)("div","bubble-select-background"),e.elements.nameContainer=(0,t.az)("div","bubble-name-container"),e.elements.iconContainer=(0,t.az)("div","bubble-icon-container"),e.elements.name=(0,t.az)("div","bubble-name"),e.elements.state=(0,t.az)("div","bubble-state"),e.elements.feedback=(0,t.az)("div","bubble-feedback-element"),e.elements.icon=(0,t.az)("ha-icon","bubble-icon"),e.elements.image=(0,t.az)("div","bubble-entity-picture"),e.elements.style=(0,t.az)("style"),e.elements.customStyle=(0,t.az)("style"),e.elements.feedback.style.display="none",e.elements.style.innerText=E,l(e.elements.selectBackground,e.elements.feedback),a(e.elements.iconContainer,e.config,e.config.entity),e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.selectCard.appendChild(e.elements.selectBackground),e.elements.selectCard.appendChild(e.elements.iconContainer),e.elements.selectCard.appendChild(e.elements.nameContainer),e.elements.selectCardContainer.appendChild(e.elements.selectCard),e.elements.selectBackground.appendChild(e.elements.feedback),n.innerHTML="",n.appendChild(e.elements.selectCardContainer),n.appendChild(e.elements.style),n.appendChild(e.elements.customStyle),e.cardType="select"}(e),T(e),O(e)),H(e,e.elements,e.config.entity,e.config),function(e){"unavailable"===(0,t.y0)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable")}(e),function(e){const n=(0,t.q7)(e),o=(0,t.gJ)(e);""!==o?(e.elements.image.style.backgroundImage="url("+o+")",e.elements.icon.style.display="none",e.elements.image.style.display=""):""!==n?(e.elements.icon.icon=n,e.elements.icon.style.color="inherit",e.elements.icon.style.display="",e.elements.image.style.display="none"):(e.elements.icon.style.display="none",e.elements.image.style.display="none")}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const n=(0,t.oY)(e);n!==e.elements.previousName&&((0,t.GP)(e,e.elements.name,n),e.elements.previousName=n)}(e),Y(e),X(e,e.content,e.elements.dropdownContainer,!0),function(e){G(e),(0,t.jx)(e),V(e)}(e)}(this);break;case"climate":!function(e){"climate"!==e.cardType&&function(e){e.dragging=!1,e.elements={};const n=e.config.entity,o=e._hass.states[n],i="°C"===e._hass.config.unit_system.temperature,r=o.attributes.target_temp_step?o.attributes.target_temp_step:i?.5:1;function s(n,o,a){const i=(0,t.az)("div","bubble-climate-minus-button"),r=(0,t.az)("div","bubble-climate-plus-button"),s=(0,t.az)("ha-icon","bubble-climate-minus-button-icon");s.setAttribute("icon","mdi:minus"),i.appendChild(s),l(i);const c=(0,t.az)("ha-icon","bubble-climate-plus-button-icon");let d,u;c.setAttribute("icon","mdi:plus"),r.appendChild(c),l(r),"temperature"===o?(e.elements.tempDisplay=(0,t.az)("div","bubble-temperature-display"),d=e.elements.tempDisplay):"target_temp_low"===o?(e.elements.lowTempDisplay=(0,t.az)("div","bubble-low-temperature-display"),d=e.elements.lowTempDisplay):"target_temp_high"===o&&(e.elements.highTempDisplay=(0,t.az)("div","bubble-high-temperature-display"),d=e.elements.highTempDisplay),n.appendChild(i),n.appendChild(d),n.appendChild(r);let p=parseFloat((0,t.IL)(e,o))||0,b=p;function h(t){"temperature"===o?e.elements.tempDisplay.innerText=t.toFixed(1):"target_temp_low"===o?e.elements.lowTempDisplay.innerText=t.toFixed(1):"target_temp_high"===o&&(e.elements.highTempDisplay.innerText=t.toFixed(1))}function m(){const n=parseFloat((0,t.IL)(e,o))||0;n!==b&&(p=n,b=n)}function g(){m();const n={entity_id:e.config.entity};"target_temp_low"===o?(n.target_temp_low=p,n.target_temp_high=(0,t.IL)(e,"target_temp_high")):"target_temp_high"===o?(n.target_temp_high=p,n.target_temp_low=(0,t.IL)(e,"target_temp_low")):n[o]=p,e._hass.callService("climate","set_temperature",n)}i.addEventListener("click",(()=>{m(),p=parseFloat((p-a).toFixed(1)),h(p),clearTimeout(u),u=setTimeout(g,700)})),r.addEventListener("click",(()=>{m(),p=parseFloat((p+a).toFixed(1)),h(p),clearTimeout(u),u=setTimeout(g,700)}))}e.elements.climateContainer=(0,t.az)("div","bubble-climate-container bubble-container"),e.elements.climateCard=(0,t.az)("div","bubble-climate"),e.elements.buttonContainer=(0,t.az)("div","bubble-button-container"),e.elements.nameContainer=(0,t.az)("div","bubble-name-container"),e.elements.iconContainer=(0,t.az)("div","bubble-icon-container"),e.elements.name=(0,t.az)("div","bubble-name"),e.elements.state=(0,t.az)("div","bubble-state"),e.elements.icon=(0,t.az)("ha-icon","bubble-icon"),e.elements.image=(0,t.az)("div","bubble-entity-picture entity-picture"),e.elements.colorBackground=(0,t.az)("div","bubble-color-background"),e.elements.style=(0,t.az)("style"),e.elements.customStyle=(0,t.az)("style"),e.elements.style.innerText="* {\n    -webkit-tap-highlight-color: transparent !important;\n}\n\nha-card {\n    margin-top: 0;\n    background: none;\n    opacity: 1;\n}\n.is-unavailable {\n    opacity: 0.5;\n}\n\n.bubble-climate-container {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: var(--bubble-climate-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    border-radius: var(--bubble-climate-border-radius, var(--bubble-border-radius, 32px));\n    box-shadow: var(--bubble-climate-box-shadow, var(--bubble-box-shadow, none));\n    overflow: visible;\n    touch-action: pan-y;\n    border: var(--bubble-climate-border, var(--bubble-border, none));\n}\n\n.bubble-climate {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    transition: background-color 1.5s;\n    background-color: rgba(0,0,0,0);\n}\n\n.bubble-button-container {\n    display: inline-grid;\n    grid-auto-flow: column;\n    gap: 10px;\n    align-self: center;\n    align-items: center;\n    margin-right: 8px;\n}\n\n.bubble-temperature-container, .bubble-low-temp-container, .bubble-high-temp-container {\n    display: inline-flex;\n    position: relative;\n    font-size: 12px;\n    white-space: nowrap;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    height: 100%;\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n    background-color: var(--bubble-climate-button-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))));\n}\n\n.bubble-low-temp-container {\n    color: var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)));\n}\n\n.bubble-high-temp-container {\n    color: var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)));\n}\n\n.bubble-target-temperature-container {\n    display: flex;\n    gap: 10px;\n}\n\n.bubble-climate-minus-button,\n.bubble-climate-plus-button {\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    width: 36px;\n    height: 36px;\n    vertical-align: middle;\n    font-size: 18px;\n    color: var(--primary-text-color);\n    cursor: pointer;\n}\n\n.bubble-climate-minus-button-icon,\n.bubble-climate-plus-button-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    --mdc-icon-size: 16px;\n}\n\n.bubble-feedback-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n    overflow: hidden;\n    pointer-events: none;\n}\n\n.bubble-feedback-element {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0);\n    pointer-events: none;\n}\n\n.bubble-color-background {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    border-radius: var(--bubble-climate-border-radius, var(--bubble-border-radius, 32px));\n    opacity: 0.7;\n    transition: background-color 2s ease;\n}\n\n.is-unavailable .bubble-climate {\n    cursor: not-allowed;\n}\n\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: 38px;\n    height: 38px;\n    min-width: 38px;\n    min-height: 38px;\n    align-items: center;\n    justify-content: center;\n    margin: 6px;\n    border-radius: var(--bubble-climate-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-climate-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.bubble-icon {\n    opacity: 0.6;\n}\n\n.is-on .bubble-icon {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n\n.bubble-icon {\n    display: flex;\n    position: absolute;\n    height: 38px;\n    width: 38px;\n    justify-content: center;\n    align-items: center;\n    transition: all 2s;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-name,\n.bubble-state {\n    display: flex;\n    margin: 2px 0;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 1em;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    font-weight: 600;\n    margin-left: 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-size: 13px;\n    margin: 2px 0;\n}\n\n.bubble-state {\n    font-size: 12px;\n    opacity: 0.7;\n    margin: 2px 0;\n    font-weight: normal;\n}\n\n.bubble-sub-button-container {\n    right: 0 !important;\n}\n\n.hidden {\n    display: none !important;\n}\n\n@keyframes tap-feedback {\n    0% {transform: translateX(-100%); opacity: 0;}\n    64% {transform: translateX(0); opacity: 0.1;}\n    100% {transform: translateX(100%); opacity: 0;}\n}\n\n.large .bubble-climate-container {\n  height: 56px;\n  border-radius: var(--bubble-climate-border-radius, var(--bubble-border-radius, 32px));\n}\n\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  margin-left: 8px;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, min-content);\n  grid-template-rows: repeat(2, 1fr);\n  grid-auto-flow: column;\n  width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n",e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state);const c=void 0!==o?.attributes?.target_temp_low,d=void 0!==o?.attributes?.target_temp_high;void 0!==o?.attributes?.temperature&&(e.elements.temperatureContainer=(0,t.az)("div","bubble-temperature-container"),s(e.elements.temperatureContainer,"temperature",r),e.elements.buttonContainer.appendChild(e.elements.temperatureContainer)),(c||d)&&(e.elements.targetTemperatureContainer=(0,t.az)("div","bubble-target-temperature-container"),c&&(e.elements.lowTempContainer=(0,t.az)("div","bubble-low-temp-container"),s(e.elements.lowTempContainer,"target_temp_low",r),e.elements.targetTemperatureContainer.appendChild(e.elements.lowTempContainer)),d&&(e.elements.highTempContainer=(0,t.az)("div","bubble-high-temp-container"),s(e.elements.highTempContainer,"target_temp_high",r),e.elements.targetTemperatureContainer.appendChild(e.elements.highTempContainer)),e.elements.buttonContainer.appendChild(e.elements.targetTemperatureContainer)),e.elements.climateCard.appendChild(e.elements.iconContainer),e.elements.climateCard.appendChild(e.elements.nameContainer),e.elements.climateCard.appendChild(e.elements.buttonContainer),e.elements.climateContainer.appendChild(e.elements.colorBackground),e.elements.climateContainer.appendChild(e.elements.climateCard),e.content.innerHTML="",e.content.appendChild(e.elements.climateContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),a(e.elements.iconContainer,e.config),e.cardType="climate"}(e),function(e){"unavailable"===(0,t.y0)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable"),(0,t.pr)(e)?e.card.classList.add("is-on"):e.card.classList.remove("is-on")}(e),function(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const n=(0,t.oY)(e);n!==e.previousName&&e.elements.name&&(e.elements.name.innerText=n,e.previousName=n,(0,t.GP)(e,e.elements.name,n))}(e),function(e){const n=(0,t.pr)(e),o=(0,t.q7)(e),a=(0,t.gJ)(e),i=e.elements.image.style.backgroundImage,r=e.elements.icon.icon,l=e.elements.icon.style.color;if(""!==a){const t="url("+a+")";i!==t&&(e.elements.image.style.backgroundImage=t),"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),""!==e.elements.image.style.display&&(e.elements.image.style.display="")}else if(""!==o){r!==o&&(e.elements.icon.icon=o);const t=n?`${he(e)}`:"inherit";l!==t&&(e.elements.icon.style.color=t),""!==e.elements.icon.style.display&&(e.elements.icon.style.display=""),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}else"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}(e),Y(e),function(e){const n=(0,t.IL)(e,"temperature");""===n?e.elements.temperatureContainer?.classList.add("hidden"):e.elements.temperatureContainer?.classList.remove("hidden"),n!==e.previousTemp&&(e.previousTemp=n,e.elements.tempDisplay&&(e.elements.tempDisplay.innerText=parseFloat(n).toFixed(1)))}(e),function(e){const n=(0,t.IL)(e,"target_temp_low"),o=e.config.hide_target_temp_low;""===n?e.elements.targetTemperatureContainer?.classList.add("hidden"):e.elements.targetTemperatureContainer?.classList.remove("hidden"),o?e.elements.lowTempContainer?.classList.add("hidden"):e.elements.lowTempContainer?.classList.remove("hidden"),n!==e.previousTargetTempLow&&(e.previousTargetTempLow=n,e.elements.lowTempDisplay&&(e.elements.lowTempDisplay.innerText=parseFloat(n).toFixed(1)))}(e),function(e){const n=(0,t.IL)(e,"target_temp_high");e.config.hide_target_temp_high?e.elements.highTempContainer?.classList.add("hidden"):e.elements.highTempContainer?.classList.remove("hidden"),n!==e.previousTargetTempHigh&&(e.previousTargetTempHigh=n,e.elements.highTempDisplay&&(e.elements.highTempDisplay.innerText=parseFloat(n).toFixed(1)))}(e),X(e,e.content,e.elements.buttonContainer,!0),function(e){G(e),(0,t.jx)(e),V(e);const n=(0,t.y0)(e);e.previousState!==n&&(e.previousState=n,e.elements.colorBackground.style.backgroundColor=`var(--bubble-climate-background-color, ${he(e)})`),e.config.card_layout,e.elements.hvacModeDropdown}(e)}(this)}var e}setConfig(e){if(e.error)throw new Error(e.error);if("pop-up"===e.card_type){if(!e.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.")}else if("horizontal-buttons-stack"===e.card_type){var t={};for(var n in e)if(n.match(/^\d+_icon$/)){var o=n.replace("_icon","_link");if(void 0===e[o])throw new Error("You need to define "+o);if(t[e[o]])throw new Error("You can't use "+e[o]+" twice");t[e[o]]=!0}}else if(["button","cover","climate","select","media-player"].includes(e.card_type)&&!e.entity&&"name"!==e.button_type)throw new Error("You need to define an entity");if("select"===e.card_type&&e.entity&&!e.select_attribute&&!e.entity?.startsWith("input_select")&&!e.entity?.startsWith("select"))throw new Error('"Select menu (from attributes)" missing');if(window.entityError)throw new Error("You need to define a valid entity");if("button"===e.card_type){const t={...e},n=t.button_type||"switch";t.tap_action=t.tap_action??{action:"more-info"},t.double_tap_action=t.double_tap_action??{action:"state"===n?"more-info":"toggle"},t.hold_action=t.hold_action??{action:"state"===n?"more-info":"toggle"},this.config=t}else this.config=e}getCardSize(){switch(this.config.card_type){case"pop-up":return-1e5;case"button":case"separator":case"empty-column":case"media-player":case"select":case"climate":return 1;case"cover":return 2;case"horizontal-buttons-stack":return 0}}static getConfigElement(){return document.createElement("bubble-card-editor")}getLayoutOptions(){let e=1;"pop-up"===this.config.card_type?e=0:"horizontal-buttons-stack"===this.config.card_type?e=1:["cover"].includes(this.config.card_type)&&(e=2);let t=4;return"pop-up"===this.config.card_type?t=0:"horizontal-buttons-stack"===this.config.card_type&&(t=4),{grid_columns:this.config.columns??t,grid_rows:this.config.rows??e}}}customElements.define("bubble-card",$t),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch.",documentationURL:"https://github.com/Clooos/Bubble-Card/"}),console.info(`%c Bubble Card %c ${e} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})()})();
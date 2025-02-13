/*! For license information please see bubble-card.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={273:(e,t,n)=>{function o(e,t=40){if(Array.isArray(e)&&3===e.length){for(let t=0;t<3;t++)if(e[t]<0||e[t]>255)return;return e.every((e=>Math.abs(e-255)<=t))}}let a;function i(e,t,n=1){if(e.startsWith("#"))if(4===e.length){let o=Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n),i=Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n),r=Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n);a="rgba("+o+", "+i+", "+r+", "+t+")"}else{let o=Math.min(255,parseInt(e.slice(1,3),16)*n),i=Math.min(255,parseInt(e.slice(3,5),16)*n),r=Math.min(255,parseInt(e.slice(5,7),16)*n);a="rgba("+o+", "+i+", "+r+", "+t+")"}else if(e.startsWith("rgb")){let o=e.match(/\d+/g);a="rgba("+Math.min(255,o[0]*n)+", "+Math.min(255,o[1]*n)+", "+Math.min(255,o[2]*n)+", "+t+")"}else if(e.startsWith("var(--")){let o=e.slice(4,-1),r=window.getComputedStyle(document.documentElement).getPropertyValue(o);(r.startsWith("#")||r.startsWith("rgb"))&&(a=i(r,t,n))}return a}n.d(t,{Bz:()=>i,qd:()=>o})},537:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$C:()=>isStateOn,D$:()=>getAttribute,Dv:()=>tapFeedback,GM:()=>isColorLight,Gu:()=>getState,JK:()=>setLayout,Nl:()=>applyScrollingEffect,Qp:()=>getImage,VA:()=>getIconColor,jp:()=>forwardHaptic,mG:()=>getName,md:()=>isEntityType,n:()=>createElement,nF:()=>throttle,r6:()=>formatDateTime,rC:()=>fireEvent,sW:()=>getIcon,w1:()=>getWeatherIcon});var _style_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(273);const fireEvent=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const a=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return a.detail=n,e.dispatchEvent(a),a},forwardHaptic=e=>{fireEvent(window,"haptic",e)},navigate=(e,t,n=!1)=>{n?history.replaceState(null,"",t):history.pushState(null,"",t),fireEvent(window,"location-changed",{replace:n})};function tapFeedback(e){void 0!==e&&(e.style.display="",e.style.animation="tap-feedback .3s",setTimeout((()=>{e.style.animation="none",e.style.display="none"}),500))}function getIcon(e,t=e.config.entity,n=e.config.icon){const o=t?.split(".")[0],a=getAttribute(e,"device_class",t),i=getAttribute(e,"icon",t),r=n,l=getState(e,t),s={alarm_control_panel:"mdi:shield",alert:"mdi:alert",automation:"mdi:playlist-play",binary_sensor:function(){const n="off"===l;switch(getAttribute(e,"device_class",t)){case"battery":return n?"mdi:battery":"mdi:battery-outline";case"battery_charging":return n?"mdi:battery":"mdi:battery-charging";case"cold":return n?"mdi:thermometer":"mdi:snowflake";case"connectivity":return n?"mdi:server-network-off":"mdi:server-network";case"door":return n?"mdi:door-closed":"mdi:door-open";case"garage_door":return n?"mdi:garage":"mdi:garage-open";case"heat":return n?"mdi:thermometer":"mdi:fire";case"light":return n?"mdi:brightness-5":"mdi:brightness-7";case"lock":return n?"mdi:lock":"mdi:lock-open";case"moisture":return n?"mdi:water-off":"mdi:water";case"motion":return n?"mdi:motion-sensor-off":"mdi:motion-sensor";case"occupancy":case"presence":return n?"mdi:home-outline":"mdi:home";case"opening":return n?"mdi:square":"mdi:square-outline";case"plug":case"power":return n?"mdi:power-plug-off":"mdi:power-plug";case"running":return n?"mdi:stop":"mdi:play";case"safety":case"tamper":return n?"mdi:check-circle":"mdi:alert-circle";case"smoke":return n?"mdi:check-circle":"mdi:smoke";case"sound":return n?"mdi:music-note-off":"mdi:music-note";case"update":return n?"mdi:package":"mdi:package-up";case"vibration":return n?"mdi:crop-portrait":"mdi:vibrate";case"window":return n?"mdi:window-closed":"mdi:window-open";default:return n?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}}(),calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",cover:function(){const n="closed"!==l;switch(getAttribute(e,"device_class",t)){case"awning":return n?"mdi:awning-outline":"mdi:awning";case"blind":return n?"mdi:blinds-open":"mdi:blinds";case"curtain":return n?"mdi:curtains-open":"mdi:curtains";case"damper":case"shutter":default:return n?"mdi:window-shutter-open":"mdi:window-shutter";case"door":return n?"mdi:door-open":"mdi:door-closed";case"garage":return n?"mdi:garage-open":"mdi:garage";case"gate":return n?"mdi:gate-open":"mdi:gate";case"shade":return n?"mdi:roller-shade":"mdi:roller-shade-closed";case"window":return n?"mdi:window-open":"mdi:window-closed"}}(),device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",lock:"mdi:lock",mailbox:"mdi:mailbox",media_player:"mdi:speaker",mower:"mdi:robot-mower",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:file-document",sensor:function(){switch(getAttribute(e,"device_class",t)){case"battery":return 100==l?"mdi:battery":l>=90?"mdi:battery-90":l>=80?"mdi:battery-80":l>=70?"mdi:battery-70":l>=60?"mdi:battery-60":l>=50?"mdi:battery-50":l>=40?"mdi:battery-40":l>=30?"mdi:battery-30":l>=20?"mdi:battery-20":l>=10?"mdi:battery-10":"mdi:battery-alert";case"humidity":return"mdi:water-percent";case"illuminance":return"mdi:brightness-5";case"temperature":return"mdi:thermometer";case"pressure":return"mdi:gauge";case"power":return"mdi:flash";case"signal_strength":return"mdi:wifi";case"energy":return"mdi:lightning-bolt";default:return"mdi:eye"}}(),simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:function(n=getState(e,t)){switch(n){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}(),weblink:"mdi:open-in-new"};return r||i||(s[o]?s[o]:s[a]?s[a]:"")}function getWeatherIcon(e){switch(e){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}const colorCache=new Map;function resolveCssVariable(e){let t=e;const n=getComputedStyle(document.body);for(;t&&t.startsWith("var(");){const e=t.match(/var\((--[^,]+),?\s*(.*)?\)/);if(!e)break;const[,o,a]=e;t=n.getPropertyValue(o).trim()||a&&a.trim()||""}return t}function hexToRgb(e){const t=e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function rgbStringToRgb(e){const t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);return t?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]:null}function calculateLuminance(e,t,n){return(.2126*e+.7152*t+.0722*n)/255}function isColorLight(e){const t=resolveCssVariable(e);if(!t)return!1;if(colorCache.has(t))return colorCache.get(t);let n=hexToRgb(t)||rgbStringToRgb(t);if(!n)return colorCache.set(t,!1),!1;const o=calculateLuminance(...n)>.5;return colorCache.set(t,o),o}function adjustColor(e,t){return e.map((e=>Math.min(255,Math.round(e*t))))}function getIconColor(e,t=e.config.entity,n=1){const{card_type:o,use_accent_color:a}=e.config,i="var(--bubble-accent-color, var(--accent-color))",r=getAttribute(e,"rgb_color",t),l=isColorLight("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))")?n-.2:n;if(!t)return i;if(isEntityType(e,"light")&&!a?"button"===o?e.card.classList.add("is-light"):"pop-up"===o&&e.elements.headerContainer.classList.add("is-light"):"button"===o?e.card.classList.remove("is-light"):"pop-up"===o&&e.elements.headerContainer.classList.remove("is-light"),!t.startsWith("light.")||a)return i;const s=adjustColor([225,225,210],l);if(!r)return`var(--bubble-light-color, rgba(${s.join(", ")}))`;const c=adjustColor(r,l);return(0,_style_js__WEBPACK_IMPORTED_MODULE_0__.qd)(r)?`var(--bubble-light-color, rgba(${s.join(", ")}))`:`var(--bubble-light-color, rgba(${c.join(", ")}))`}function getImage(e,t=e.config.entity){if(e.config.force_icon)return"";const n=getAttribute(e,"entity_picture_local",t)||getAttribute(e,"entity_picture",t);return n?e._hass.hassUrl(n):""}function getName(e){const t=e.config.name,n=getAttribute(e,"friendly_name");return e.name||t||n||""}function getState(e,t=e.config.entity){return e._hass.states[t]?.state??""}function getAttribute(context,attribute,entity=context.config.entity){return attribute?eval(`context._hass.states['${entity}']?.attributes['${attribute}']`)??"":""}function isEntityType(e,t){return e.config.entity?.startsWith(t+".")??!1}function isStateOn(e,t=e.config.entity){const n=getState(e,t).toLowerCase(),o=Number(n);return!!(["on","open","opening","closing","cleaning","true","idle","home","playing","paused","locked","occupied","available","running","active","connected","online","mowing","starting","heat","cool","dry","heat_cool","fan_only","auto","alarm"].includes(n)||o>0)}function createElement(e,t=""){const n=document.createElement(e);return""!==t&&t.split(" ").forEach((e=>{n.classList.add(e)})),n}function debounce(e,t){let n;return function(...o){clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}function applyScrollingEffect(e,t,n){const{scrolling_effect:o=!0}=e.config;if(!o)return void applyNonScrollingStyle(t,n);if(t.previousText===n)return;const a=getBubbleClassName(t);function i(){t.innerHTML=`<div class="scrolling-container">${n}</div>`,t.style="",setTimeout((()=>{t.scrollWidth>(t.parentNode?.offsetWidth||0)&&applyScrollingStyle(t,n,a),t.previousText=n}),500)}requestAnimationFrame(i),t.eventAdded||(window.addEventListener("resize",debounce(i,300)),t.eventAdded=!0)}function getBubbleClassName(e){return e.className.split(" ").find((e=>e.startsWith("bubble-")))}function applyScrollingStyle(e,t,n){const o='<span class="bubble-scroll-separator"> | </span>',a=`<span>${t+o+t+o}</span>`;e.innerHTML=`<div class="scrolling-container">${a}</div>`,applyScrollingCSS(e,n)}function applyScrollingCSS(e,t){const n=document.createElement("style");n.innerHTML=`\n        .${t} .scrolling-container {\n            width: 100%;\n            white-space: nowrap;\n            mask-image: linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent);\n        }\n        .${t} .scrolling-container span {\n            display: inline-block;\n            animation: scroll 14s linear infinite;\n        }\n        .bubble-scroll-separator {\n            opacity: .3;\n            margin: 0 6px 0 8px;\n        }\n        @keyframes scroll {\n            from { transform: translateX(0%); }\n            to { transform: translateX(-50%); }\n        }\n    `,e.appendChild(n)}function applyNonScrollingStyle(e,t){e.innerHTML=t,e.previousText=t,Object.assign(e.style,{whiteSpace:"normal",display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical",textOverflow:"ellipsis"})}function formatDateTime(e,t){if(!e)return"";const n=new Date(e),o=new Date;let a,i,r=Math.floor((o-n)/1e3);return isNaN(r)?"":(r<60?(a="second",i=r+1):r<3600?(a="minute",i=Math.floor(r/60)):r<86400?(a="hour",i=Math.floor(r/3600)):(a="day",i=Math.floor(r/86400)),new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(-i,a))}function setLayout(e){const t=e.config.card_layout,n="large"===t||"large-2-rows"===t,o="large-2-rows"===t;n!==e.content.classList.contains("large")&&e.content.classList.toggle("large",n),o!==e.content.classList.contains("rows-2")&&e.content.classList.toggle("rows-2",o)}function throttle(e,t=300){let n;return(...o)=>{void 0===n&&(e(...o),n=setTimeout((()=>{n=void 0}),t))}}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};let version="v2.5.0-beta.1";function initializeContent(e){if(!e.content){let t=e.shadowRoot||e.attachShadow({mode:"open"}),n=document.createElement("ha-card");n.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let o=document.createElement("div");o.className="card-content",o.style.padding="0",n.appendChild(o),t.appendChild(n),e.card=n,e.content=o}}var utils=__webpack_require__(537),style=__webpack_require__(273);const maxHoldDuration=400,doubleTapTimeout=200,scrollDetectionDelay=300,movementThreshold=5;function disableActionsDuringScroll(){window.isScrolling=!0,setTimeout((()=>{window.isScrolling=!1}),150)}function callAction(e,t,n){setTimeout((()=>{const o=new Event("hass-action",{bubbles:!0,composed:!0}),a={...t};!a.entity_id&&this?.config?.entity&&(a.entity_id=this.config.entity),"tap"===n||"double_tap"===n||"hold"===n?o.detail={config:a,action:n}:(e.modifiedConfig={...a,tap_action:{...a[n]}},delete e.modifiedConfig[n],o.detail={config:e.modifiedConfig,action:"tap"}),e.dispatchEvent(o)}),10)}function addActions(e,t,n,o){e.classList.add("bubble-action"),e.dataset.entity=t?.entity||n,e.dataset.tapAction=JSON.stringify(t?.tap_action||o?.tap_action||{action:"more-info"}),e.dataset.doubleTapAction=JSON.stringify(t?.double_tap_action||o?.double_tap_action||{action:"toggle"}),e.dataset.holdAction=JSON.stringify(t?.hold_action||o?.hold_action||{action:"toggle"});const a=JSON.parse(e.dataset.tapAction),i=JSON.parse(e.dataset.doubleTapAction),r=JSON.parse(e.dataset.holdAction);e.style.cursor="none"===a.action&&"none"===i.action&&"none"===r.action?"":"pointer"}window.isScrolling=!1,document.addEventListener("scroll",disableActionsDuringScroll,{passive:!0}),document.body.addEventListener("pointerdown",(e=>{if(window.isScrolling)return;const t=e.composedPath();let n=null;for(const e of t)if(e.classList&&e.classList.contains("bubble-action")){n=e;break}if(n){const t={tap_action:JSON.parse(n.dataset.tapAction),double_tap_action:JSON.parse(n.dataset.doubleTapAction),hold_action:JSON.parse(n.dataset.holdAction),entity:n.dataset.entity};n.actionHandler||(n.actionHandler=new ActionHandler(n,t,sendActionEvent)),n.actionHandler.handleStart(e),n.addEventListener("pointerup",n.actionHandler.handleEnd.bind(n.actionHandler),{once:!0}),document.addEventListener("scroll",n.actionHandler.handleScroll.bind(n.actionHandler),{once:!0})}}),{passive:!0});class ActionHandler{constructor(e,t,n){this.element=e,this.config=t,this.sendActionEvent=n,this.tapTimeout=null,this.holdTimeout=null,this.startX=0,this.startY=0,this.holdFired=!1,this.pointerMoveListener=this.detectScrollLikeMove.bind(this)}handleStart(e){window.isScrolling||this.isDisconnected||(this.startX=e.clientX,this.startY=e.clientY,this.holdFired=!1,document.addEventListener("pointermove",this.pointerMoveListener),this.holdTimeout=setTimeout((()=>{"none"===(this.config.hold_action||{action:"none"}).action||window.isScrolling||(this.sendActionEvent(this.element,this.config,"hold"),this.holdFired=!0)}),maxHoldDuration))}detectScrollLikeMove(e){const t=Math.abs(e.clientX-this.startX),n=Math.abs(e.clientY-this.startY);(t>movementThreshold||n>movementThreshold)&&(clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener))}handleEnd(e){if(window.isScrolling||this.isDisconnected)return;if(clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener),this.holdFired)return;const t=Date.now(),n=this.config.double_tap_action||{action:"none"},o=this.config.tap_action||{action:"none"};this.lastTap&&t-this.lastTap<doubleTapTimeout&&"none"!==n.action?(clearTimeout(this.tapTimeout),this.sendActionEvent(this.element,this.config,"double_tap")):"none"!==o.action&&(this.tapTimeout=setTimeout((()=>{this.sendActionEvent(this.element,this.config,"tap")}),doubleTapTimeout)),this.lastTap=t}handleScroll(){clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener)}}function sendActionEvent(e,t,n){const o=t.tap_action||{action:"more-info"},a=t.double_tap_action||{action:"toggle"},i=t.hold_action||{action:"toggle"},r=t.entity||this.config?.entity,l=e=>e.service&&"entity"===e.target?.entity_id&&r?{...e,target:{...e.target,entity_id:r}}:e,s=l(o),c=l(a),d=l(i);let u;switch(n){case"tap":default:u=s;break;case"double_tap":u=c;break;case"hold":u=d}callAction(e,{entity:r,tap_action:s,double_tap_action:c,hold_action:d},n)}function addFeedback(e,t){e.addEventListener("click",(()=>{(0,utils.jp)("selection"),(0,utils.Dv)(t)}))}let hashTimeout=null,hashRecentlyAdded=!1;function clickOutside(e,t){(t.config.close_by_clicking_outside??1)&&(e.composedPath().find((e=>e.classList?.contains("bubble-pop-up")||["HA-DIALOG","HA-MORE-INFO-DIALOG","HA-DIALOG-DATE-PICKER"].includes(e.nodeName)))||removeHash())}function resetCloseTimeout(e){e.config.auto_close&&e.closeTimeout&&(clearTimeout(e.closeTimeout),e.closeTimeout=setTimeout(removeHash,e.config.auto_close))}function removeHash(){!hashRecentlyAdded&&location.hash&&setTimeout((()=>{const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))}),50)}function addHash(e){const t=e.startsWith("#")?window.location.href.split("#")[0]+e:e;history.pushState(null,"",t),window.dispatchEvent(new Event("location-changed"))}function hideContent(e,t){e.editor||(e.hideContentTimeout=setTimeout((()=>{const{sectionRow:t,sectionRowContainer:n}=e;"hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!0,t.style.display="none",n?.classList.contains("card")&&(n.style.display="none"))}),t))}function displayContent(e){const{sectionRow:t,sectionRowContainer:n,popUp:o}=e;o.style.transform="","hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!1,t.style.display="",n?.classList.contains("card")&&(n.style.display=""))}function toggleBackdrop(e,t){const{showBackdrop:n,hideBackdrop:o}=getBackdrop(e);t?n():o()}function appendPopup(e,t){e.config.background_update||(t?e.verticalStack.appendChild(e.popUp):e.verticalStack.removeChild(e.popUp))}function updatePopupClass(e,t){requestAnimationFrame((()=>{e.classList.toggle("is-popup-opened",t),e.classList.toggle("is-popup-closed",!t)}))}function updateListeners(e,t){e.boundClickOutside||(e.boundClickOutside=t=>clickOutside(t,e)),e.resetCloseTimeout||(e.resetCloseTimeout=()=>{resetCloseTimeout(e)}),t?(e.listenersAdded||(e.config.auto_close&&(e.popUp.addEventListener("touchstart",e.resetCloseTimeout,{passive:!0}),e.popUp.addEventListener("click",e.resetCloseTimeout,{passive:!0})),e.listenersAdded=!0),e.clickOutsideListenerAdded||(window.addEventListener("click",e.boundClickOutside,{passive:!0}),e.clickOutsideListenerAdded=!0)):(e.listenersAdded&&(e.config.auto_close&&(e.popUp.removeEventListener("touchstart",e.resetCloseTimeout),e.popUp.removeEventListener("click",e.resetCloseTimeout)),e.listenersAdded=!1),e.clickOutsideListenerAdded&&(window.removeEventListener("click",e.boundClickOutside),e.clickOutsideListenerAdded=!1))}function injectNoScrollStyles(){if(document.getElementById("no-scroll-styles"))return;const e=document.createElement("style");e.id="no-scroll-styles",e.textContent="\n        body.no-scroll {\n            overflow: hidden;\n            position: fixed;\n            width: 100%;\n            height: 100%;\n        }\n    ",document.head.appendChild(e)}function toggleBodyScroll(e){injectNoScrollStyles(),e?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}function clearAllTimeouts(e){["hideContentTimeout","removeDomTimeout","closeTimeout"].forEach((t=>clearTimeout(e[t])))}function openPopup(e){e.popUp.classList.contains("is-popup-opened")||(clearAllTimeouts(e),appendPopup(e,!0),requestAnimationFrame((()=>{toggleBackdrop(e,!0),updatePopupClass(e.popUp,!0),displayContent(e)})),updateListeners(e,!0),e.config.auto_close>0&&(e.closeTimeout=setTimeout(removeHash,e.config.auto_close)),toggleBodyScroll(!0),e.config.open_action&&callAction(e.popUp,e.config,"open_action"))}function closePopup(e){e.popUp.classList.contains("is-popup-opened")&&(clearAllTimeouts(e),updatePopupClass(e.popUp,!1),toggleBackdrop(e,!1),e.removeDomTimeout=setTimeout((()=>{appendPopup(e,!1),hideContent(e,0)}),300),updateListeners(e,!1),toggleBodyScroll(!1),e.config.close_action&&callAction(e,e.config,"close_action"))}function onUrlChange(e){return()=>{e.config.hash===location.hash?(hashRecentlyAdded=!0,setTimeout((()=>{hashRecentlyAdded=!1}),100),openPopup(e)):closePopup(e)}}function onEditorChange(e){const{hideBackdrop:t}=getBackdrop(e),n=(e.verticalStack.host,e.detectedEditor);(e.editor||n)&&(t(),clearTimeout(e.removeDomTimeout),n||setupVisibilityObserver(e))}function setupVisibilityObserver(e){if(e.observer&&(e.observer.disconnect(),e.observer=null),e.sectionRow){const t=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&!e.verticalStack.contains(e.popUp)&&e.verticalStack.appendChild(e.popUp)}))}),{rootMargin:"100px",threshold:.01});t.observe(e.sectionRow),e.observer=t}}function cleanupContext(e){e.observer&&(e.observer.disconnect(),e.observer=null)}const styles_namespaceObject=".bubble-pop-up-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    margin-top: -50px;\n    max-width: 100%;\n    padding-top: 40px;\n    padding-bottom: 80px;\n    grid-gap: var(--bubble-pop-up-gap, 14px);\n    gap: var(--bubble-pop-up-gap, 14px);\n    column-gap: var(--bubble-pop-up-gap, 14px);\n    --grid-gap: var(--bubble-pop-up-gap, 14px);\n    --vertical-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --horizontal-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n    overflow-y: auto; \n    overflow-x: hidden; \n    grid-auto-rows: min-content;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n    padding: 18px 18px calc(140px + var(--custom-height-offset-mobile)) 18px;\n}\n.bubble-pop-up-container > * {\n    flex-shrink: 0 !important;\n}\n.bubble-pop-up.card-content {\n    width: 100% !important;\n    padding: 0 !important;\n}\n.bubble-pop-up {\n    transition: transform 0.3s ease;\n    position: fixed;\n    width: 100%;\n    max-width: 100%;\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n    box-sizing: border-box;\n    margin-left: var(--custom-margin);\n    left: 7px;\n    z-index: 5 !important;\n    bottom: calc(-56px - var(--custom-height-offset-mobile));\n}\n.bubble-pop-up-background {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    top: 0;\n    left: 0;\n    position: absolute;\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n    backdrop-filter: var(--custom-popup-filter);\n    -webkit-backdrop-filter: var(--custom-popup-filter);\n    border: var(--bubble-pop-up-border, var(--bubble-border, none));\n}\n.bubble-pop-up-container::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n}\n.is-popup-opened {\n    box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));\n}\n.is-popup-closed { \n    transform: translateY(100%);\n    box-shadow: none !important;\n}\n\n@media only screen and (min-width: 600px) {\n    .bubble-pop-up {\n        margin-left: 0 !important;\n        min-width: var(--desktop-width, 540px);\n        max-width: var(--desktop-width, 540px);\n        left: calc(50% - (var(--desktop-width, 540px) / 2));\n    }\n    .bubble-pop-up-container {\n        padding: 18px 18px calc(140px + var(--custom-height-offset-desktop)) 18px;\n    }\n}\n@media only screen and (min-width: 768px) {\n    .bubble-pop-up {\n      bottom: calc(-56px - var(--custom-height-offset-desktop));\n      left: calc(var(--mdc-drawer-width, 0px) / 2 + 50% - (var(--desktop-width, 540px) / 2));\n    }\n}\n.bubble-pop-up.editor {\n    transition: none !important;\n    position: relative !important;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    backdrop-filter: none !important;\n    display: flex !important;\n    transform: none !important;\n    height: auto !important;\n    min-width: auto;\n    z-index: 0 !important;\n}\n.bubble-header-container {\n    display: inline-flex;\n    height: 50px;\n    margin: 0;\n    padding: 0;\n    z-index: 3;\n    padding: 18px 18px 22px;\n    position: sticky;\n    top: 0;\n    background: none !important;\n    overflow: visible;\n}\n.bubble-header {\n    display: inline-flex;\n    flex-grow: 1;\n    margin-right: 14px;\n    color: var(--primary-text-color);\n}\n.bubble-name {\n    font-size: 14px;\n    font-weight: heavy;\n}\n.bubble-close-button {\n    height: 50px;\n    width: 50px;\n    border: var(--bubble-pop-up-close-button-border, var(--bubble-pop-up-border, var(--bubble-border, none)));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px));\n    z-index: 1;\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n    color: var(--primary-text-color);\n    flex-shrink: 0;\n    cursor: pointer;\n}\n.bubble-button-card-container {\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n}\n.bubble-pop-up-container.editor-cropped {\n    height: 122px !important;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;   \n}\n.bubble-pop-up.editor > .bubble-pop-up-container {\n    padding-bottom: 18px !important;\n    mask-image: none;\n    -webkit-mask-image: none;  \n    overflow: hidden;  \n}\n.editor .bubble-pop-up-background {\n    width: 100%;\n    height: 100%;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    display: flex;\n    position: absolute;\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) !important;\n    backdrop-filter: none;\n    -webkit-backdrop-filter: none;\n}\n\n.no-header .bubble-header-container {\n    visibility: hidden !important;\n    height: 0px !important;\n}\n.no-header .bubble-pop-up-container {\n    padding-top: 4px !important;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n}\n\n.large .bubble-button-card-container {\n  height: 56px;\n  border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 36px));\n}\n.large .bubble-pop-up-container {\n    margin-top: -36px;\n}\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  margin-left: 8px;\n}\n.large .bubble-close-button {\n    height: 56px;\n    width: 56px;\n    border: none;\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px));\n    z-index: 1;\n    --mdc-icon-size: 28px !important;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, min-content);\n  grid-template-rows: repeat(2, 1fr);\n  grid-auto-flow: column;\n  width: auto;\n  padding-right: 4px;\n}\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n",backdrop_namespaceObject=".bubble-backdrop {\n  position: fixed;\n  background-color: var(--bubble-backdrop-background-color);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n  opacity: 0;\n  transition: opacity 0.3s;\n  transition-delay: .1s;\n  display: flex;\n  backdrop-filter: var(--custom-backdrop-filter);\n  -webkit-backdrop-filter: var(--custom-backdrop-filter);\n  transform: translate3d(0, 0, 0);\n}\n\n.bubble-backdrop.is-visible {\n  opacity: 1;\n}\n\n.bubble-backdrop.is-hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n";let backdrop,hideBackdrop=!1,startTouchY,lastTouchY,themeColorBackground;const colorScheme=window.matchMedia("(prefers-color-scheme: dark)"),backdropStyle=(0,utils.n)("style");function updateBackdropColor(){themeColorBackground=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color"),document.body.style.setProperty("--bubble-backdrop-background-color",(0,style.Bz)(themeColorBackground,.8,.6))}function getBackdrop(e){const t=e.config.hide_backdrop??!1;if(backdrop)return backdrop;backdropStyle.innerHTML=backdrop_namespaceObject,document.head.appendChild(backdropStyle);const n=(0,utils.n)("style");document.head.appendChild(n);const o=(0,utils.n)("div","bubble-backdrop backdrop is-hidden");return t&&(o.style.display="none",o.style.pointerEvents="none"),document.body.appendChild(o),o.style.setProperty("--custom-backdrop-filter",`blur(${e.config.backdrop_blur??0}px)`),backdrop={hideBackdrop:function(){o.classList.add("is-hidden"),o.classList.remove("is-visible")},showBackdrop:function(){requestAnimationFrame((()=>{o.classList.add("is-visible"),o.classList.remove("is-hidden")}))},backdropElement:o,backdropCustomStyle:n},backdrop}function createHeader(e){e.elements={closeIcon:(0,utils.n)("ha-icon","bubble-close-icon"),closeButton:(0,utils.n)("button","bubble-close-button close-pop-up"),buttonContainer:(0,utils.n)("div","bubble-button-container"),header:(0,utils.n)("div","bubble-header")},e.elements.closeIcon.icon="mdi:close",e.elements.closeButton.appendChild(e.elements.closeIcon),e.elements.closeButton.addEventListener("click",(()=>{removeHash(),(0,utils.jp)("selection")}));const t=e.popUp.querySelector(".bubble-header-container");t?Object.assign(e.elements,{headerContainer:t,closeIcon:t.querySelector(".bubble-close-icon"),closeButton:t.querySelector(".bubble-close-button"),buttonContainer:t.querySelector(".bubble-button-container"),header:t.querySelector(".bubble-header")}):(e.elements.headerContainer=(0,utils.n)("div","bubble-header-container"),e.elements.headerContainer.setAttribute("id","header-container"),e.elements.headerContainer.appendChild(e.elements.header),e.elements.headerContainer.appendChild(e.elements.closeButton),e.elements.header.appendChild(e.elements.buttonContainer)),e.popUp.addEventListener("touchstart",(e=>{startTouchY=e.touches[0].clientY}),{passive:!0}),e.elements.header.addEventListener("touchmove",(t=>{const n=t.touches[0].clientY-startTouchY;n>0&&(e.popUp.style.transform=`translateY(${n}px)`)}),{passive:!0}),e.elements.header.addEventListener("touchend",(t=>{const n=t.changedTouches[0].clientY-startTouchY;n>50?(e.popUp.style.transform=`translateY(calc(${n}px + (100% - ${n}px)))`,removeHash()):e.popUp.style.transform=""}),{passive:!0})}function createStructure(e){try{e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=styles_namespaceObject;let t,n=e.popUp.querySelector("style");e.stylesAdded&&n?e.elements.customStyle=n:(e.elements.customStyle=(0,utils.n)("style"),e.popUp.appendChild(e.elements.customStyle),e.popUp.appendChild(e.elements.style),e.stylesAdded=!0);const o=e.config.bg_opacity??88;function a(){t=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color");const n=e.config.bg_color?e.config.bg_color:t,a=(0,style.Bz)(n,o/100,1.02);e.popUp.style.setProperty("--bubble-pop-up-background-color",a)}colorScheme.addEventListener("change",(()=>{a()}),{passive:!0}),a(),e.popUp.style.setProperty("--desktop-width",e.config.width_desktop??"540px"),e.config.close_on_click&&e.popUp.addEventListener("click",removeHash,{passive:!0}),window.addEventListener("keydown",(t=>{"Escape"===t.key&&e.config.hash===location.hash&&removeHash()}),{passive:!0});let i=e.config.slide_to_close_distance??400;e.popUp.addEventListener("touchmove",(e=>{e.touches[0].clientY-startTouchY>i&&e.touches[0].clientY>lastTouchY&&removeHash(),lastTouchY=e.touches[0].clientY}),{passive:!0});const r=e.popUp.querySelector(".bubble-pop-up-container");if(null===r){e.elements.popUpContainer=(0,utils.n)("div"),e.elements.popUpContainer.classList.add("bubble-pop-up-container");let l=e.popUp.firstChild;for(;l;)e.elements.popUpContainer.appendChild(l),l=e.popUp.firstChild}else e.elements.popUpContainer=r;e.popUpBackground=(0,utils.n)("div","bubble-pop-up-background"),e.popUp.appendChild(e.popUpBackground),e.popUp.appendChild(e.elements.headerContainer),e.popUp.appendChild(e.elements.popUpContainer),e.config.hash!==location.hash&&hideContent(e,0),window.dispatchEvent(new Event("location-changed"))}catch(s){console.error(s)}}function prepareStructure(e){try{e.cardType="pop-up",e.verticalStack=e.getRootNode(),e.sectionRow=e.verticalStack.host.parentElement,e.sectionRowContainer=e.sectionRow?.parentElement,e.popUp=e.verticalStack.querySelector("#root"),e.popUp.classList.add("bubble-pop-up","pop-up","is-popup-closed"),e.cardTitle=e.verticalStack.querySelector(".card-header"),e.editor||e.config.background_update||e.verticalStack.removeChild(e.popUp),e.elements={},getBackdrop(e),e.cardTitle&&(e.cardTitle.style.display="none"),hideBackdrop=hideBackdrop||(e.config.hide_backdrop??!0),e.popUp.style.setProperty("--custom-height-offset-desktop",e.config.margin_top_desktop??"0px"),e.popUp.style.setProperty("--custom-height-offset-mobile",e.config.margin_top_mobile??"0px"),e.popUp.style.setProperty("--custom-margin",`-${e.config.margin??"7px"}`),e.popUp.style.setProperty("--custom-popup-filter",e.config.backdrop_blur&&"0"!==e.config.backdrop_blur?"none":`blur(${e.config.bg_blur??10}px)`),e.popUp.style.setProperty("--custom-shadow-opacity",(e.config.shadow_opacity??0)/100);const t=onUrlChange(e);window.addEventListener("location-changed",t),window.addEventListener("popstate",t)}catch(e){console.error(e)}}function getTranslatedAttribute(e,t,n,o){function a(e){const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}switch(n){case"fan_modes":return e._hass.formatEntityAttributeValue(t,"fan_mode",o);case"hvac_modes":return e._hass.formatEntityState(t,o);case"swing_modes":return e._hass.formatEntityAttributeValue(t,"swing_mode",o);case"preset_modes":return e._hass.formatEntityAttributeValue(t,"preset_mode",o);default:return a(e._hass.formatEntityState(t,o))??a(o)}}function getSelectedAttribute(e,t){switch(t){case"fan_modes":return e.attributes.fan_mode||null;case"swing_modes":return e.attributes.swing_mode||null;case"preset_modes":return e.attributes.preset_mode||null;case"effect_list":return e.attributes.effect||null;case"source_list":return e.attributes.source||null;case"sound_mode_list":return e.attributes.sound_mode||null;default:return e.state}}function getHvacModeIcon(e){switch(e){case"auto":return"mdi:thermostat-auto";case"cool":return"mdi:snowflake";case"heat":return"mdi:fire";case"heat_cool":return"mdi:sun-snowflake-variant";case"dry":return"mdi:water-percent";case"fan_only":default:return"mdi:fan";case"off":return"mdi:power"}}function getOptionIcon(e,t,n,o){let a;switch(n){case"hvac_modes":a=document.createElement("ha-icon"),a.slot="graphic",a.icon=getHvacModeIcon(o);break;case"fan_modes":if(!t.attributes.fan_modes)return null;a=document.createElement("ha-attribute-icon"),a.slot="graphic",a.attribute="fan_mode",a.attributeValue=o,a.hass=e._hass,a.stateObj=t;break;case"swing_modes":a=document.createElement("ha-attribute-icon"),a.slot="graphic",a.attribute="swing_mode",a.attributeValue=o,a.hass=e._hass,a.stateObj=t;break;case"preset_modes":a=document.createElement("ha-attribute-icon"),a.slot="graphic",a.attribute="preset_mode",a.attributeValue=o,a.hass=e._hass,a.stateObj=t;break;default:a=!1}return a}function callSelectService(e,t,n,o){const a=t?.split(".")[0];switch(a){case"input_select":e._hass.callService("input_select","select_option",{entity_id:t,option:n});break;case"select":e._hass.callService("select","select_option",{entity_id:t,option:n});break;case"climate":switch(o.select_attribute){case"hvac_modes":e._hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:n});break;case"fan_modes":e._hass.callService("climate","set_fan_mode",{entity_id:t,fan_mode:n});break;case"swing_modes":e._hass.callService("climate","set_swing_mode",{entity_id:t,swing_mode:n});break;case"preset_modes":e._hass.callService("climate","set_preset_mode",{entity_id:t,preset_mode:n})}break;case"fan":"preset_modes"===o.select_attribute&&e._hass.callService("fan","set_preset_mode",{entity_id:t,preset_mode:n});break;case"light":"effect_list"===o.select_attribute&&e._hass.callService("light","turn_on",{entity_id:t,effect:n});break;case"media_player":switch(o.select_attribute){case"source_list":e._hass.callService("media_player","select_source",{entity_id:t,source:n});break;case"sound_mode_list":e._hass.callService("media_player","select_sound_mode",{entity_id:t,sound_mode:n})}break;default:console.warn(`Unsupported entity type: ${a}`)}}colorScheme.addEventListener("change",updateBackdropColor),updateBackdropColor();const select_styles_namespaceObject="* {\n    -webkit-tap-highlight-color: transparent !important;\n}\nha-card {\n    margin-top: 0;\n    background: none;\n    opacity: 1;\n}\nmwc-list-item {\n    border-radius: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 24px));\n    margin: 0 8px;\n}\nmwc-list-item[selected] {\n    color: var(--primary-text-color) !important;\n    background-color: var(--bubble-select-list-item-accent-color, var(--bubble-list-item-accent-color, var(--bubble-accent-color, var(--accent-color)))); /* Added the missing 'select' in the first var without removing the previous one for compatibilty */ \n}\nha-select {\n    --mdc-shape-medium: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 32px));\n    --mdc-theme-surface: var(--bubble-select-list-background-color, var(--bubble-select-main-background-color, var(--bubble-main-background-color, var(--card-background-color, var(--secondary-background-color)))));\n    --mdc-shape-large: 32px;\n    --mdc-shape-small: 64px;\n    --mdc-menu-max-width: min-content;\n    --mdc-menu-min-width: var(--bubble-select-list-width, 200px);\n    --mdc-select-max-width: min-content;\n    --mdc-select-outlined-hover-border-color: transparent;\n    --mdc-select-outlined-idle-border-color: transparent;\n    --mdc-theme-primary: transparent;\n    --right-value: calc(var(--mdc-menu-min-width) - 154px);\n}\n.mdc-select {\n    color: transparent !important;\n    width: 150px !important;\n    position: absolute !important;\n    pointer-events: none;\n    right: var(--right-value, 46px);\n    top: -28px;\n}\n.mdc-menu, mwc-list, .mdc-list-item {\n    pointer-events: auto;\n}\n.mdc-select__dropdown-icon {\n    display: none !important;\n}\n.mdc-select__selected-text {\n    color: transparent !important;\n}\n.mdc-select__anchor {\n    width: 100%;\n    pointer-events: none;\n}\n.bubble-dropdown-container {\n    display: flex !important;\n    width: auto;\n    height: 100%;\n    align-items: center;\n}\n.bubble-dropdown-arrow {\n    display: flex;\n    position: absolute;\n    background: var(--bubble-select-arrow-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    height: 36px;\n    width: 36px;\n    right: 6px;\n    pointer-events: none;\n    border-radius: var(--bubble-select-button-border-radius, var(--bubble-border-radius, 20px));\n    align-items: center;\n    justify-content: center;\n    transition: background 0.2s, transform 0.2s;\n    pointer-events: none;\n}\n.bubble-dropdown-select {\n    position: relative;\n    width: 42px;\n}\n.is-unavailable {\n    opacity: 0.5;\n}\n.bubble-select-card-container {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: var(--bubble-select-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    border-radius: var(--bubble-select-border-radius, var(--bubble-border-radius, 32px));\n    box-shadow: var(--bubble-select-box-shadow, var(--bubble-box-shadow, none));\n    touch-action: pan-y;\n    box-sizing: border-box;\n    border: solid 2px transparent;\n    transition: all 0.15s;\n    cursor: pointer;\n    border: var(--bubble-select-border, var(--bubble-border, none));\n}\n.bubble-select-card,\n.bubble-select-background {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    transition: background-color 1.5s;\n}\n.bubble-select-background {\n    background-color: var(--bubble-select-background-color);\n    opacity: .5;\n    overflow: hidden !important;\n    border-radius: var(--bubble-select-border-radius, var(--bubble-border-radius, 32px));\n}\n.is-unavailable .bubble-select-card {\n    cursor: not-allowed;\n}\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n    min-width: 38px;\n    min-height: 38px;\n    margin: 6px;\n    border-radius: var(--bubble-select-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-select-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n}\n.bubble-icon-container::after {\n    content: '';\n    background-color: currentColor;\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    transition: all 1s;\n    left: 0;\n    right: 0;\n    opacity: 0;\n    pointer-events: none;\n}\n\n.bubble-icon {\n    display: flex;\n    opacity: 0.6;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-name,\n.bubble-state {\n    display: flex;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 18px;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    margin: 0 16px 0 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-weight: 600;\n}\n\n.bubble-state {\n    font-size: 12px;\n    font-weight: normal;\n    opacity: 0.7;\n}\n\n.bubble-feedback-element {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0);\n    pointer-events: none;\n}\n\n@keyframes tap-feedback {\n    0% {transform: translateX(-100%); opacity: 0;}\n    64% {transform: translateX(0); opacity: 0.1;}\n    100% {transform: translateX(100%); opacity: 0;}\n}\n\n.large .bubble-select-card-container {\n  height: 56px;\n  border-radius: var(--bubble-select-border-radius, var(--bubble-border-radius, 32px));\n}\n\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  margin-left: 6px;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, min-content);\n  grid-template-rows: repeat(2, 1fr);\n  grid-auto-flow: column;\n  width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n";function create_createStructure(e){e.elements||(e.elements={});let t=e.content;e.elements.selectCardContainer=(0,utils.n)("div","bubble-select-card-container bubble-container"),e.elements.selectCard=(0,utils.n)("div","bubble-select-card"),e.elements.selectBackground=(0,utils.n)("div","bubble-select-background"),e.elements.nameContainer=(0,utils.n)("div","bubble-name-container"),e.elements.iconContainer=(0,utils.n)("div","bubble-icon-container"),e.elements.name=(0,utils.n)("div","bubble-name"),e.elements.state=(0,utils.n)("div","bubble-state"),e.elements.feedback=(0,utils.n)("div","bubble-feedback-element"),e.elements.icon=(0,utils.n)("ha-icon","bubble-icon"),e.elements.image=(0,utils.n)("div","bubble-entity-picture"),e.elements.style=(0,utils.n)("style"),e.elements.customStyle=(0,utils.n)("style"),e.elements.feedback.style.display="none",e.elements.style.innerText=select_styles_namespaceObject,addFeedback(e.elements.selectBackground,e.elements.feedback),addActions(e.elements.iconContainer,e.config,e.config.entity),e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.selectCard.appendChild(e.elements.selectBackground),e.elements.selectCard.appendChild(e.elements.iconContainer),e.elements.selectCard.appendChild(e.elements.nameContainer),e.elements.selectCardContainer.appendChild(e.elements.selectCard),e.elements.selectBackground.appendChild(e.elements.feedback),t.innerHTML="",t.appendChild(e.elements.selectCardContainer),t.appendChild(e.elements.style),t.appendChild(e.elements.customStyle),e.cardType="select"}function createDropdownStructure(e,t=e.elements,n){t.dropdownContainer=(0,utils.n)("div","bubble-dropdown-container"),t.dropdownSelect=(0,utils.n)("ha-select","bubble-dropdown-select"),t.dropdownSelect.setAttribute("outlined",""),t.dropdownArrow=(0,utils.n)("ha-icon","bubble-dropdown-arrow"),t.dropdownArrow.setAttribute("icon","mdi:chevron-down"),t.dropdownContainer.appendChild(t.dropdownArrow),t.dropdownStyleElement=(0,utils.n)("style"),t.dropdownCustomStyleElement=(0,utils.n)("style"),t.dropdownStyleElement.textContent=select_styles_namespaceObject,t.dropdownSelect.updateComplete.then((()=>{!function(){if(t.dropdownSelect.shadowRoot)if(t!==e.elements){t.dropdownSelectStyleElement=(0,utils.n)("style"),t.dropdownSelectStyleElement.textContent=select_styles_namespaceObject,t.dropdownSelect.shadowRoot.appendChild(t.dropdownSelectStyleElement),t.dropdownContainer.appendChild(t.dropdownStyleElement),n&&(t.dropdownContainer.style.width="24px"),t.dropdownArrow.style.height="20px",t.dropdownArrow.style.width="20px",t.mainContainer=t.parentElement.parentElement.parentElement;let e=t.dropdownSelect.shadowRoot.querySelector("mwc-menu");e&&(e.style.position="relative",e.style.right="138px")}else t.dropdownSelect.shadowRoot.appendChild(t.dropdownStyleElement),t.dropdownSelect.shadowRoot.appendChild(t.dropdownCustomStyleElement)}()})),t===e.elements?t.selectCard.appendChild(t.dropdownContainer):t.appendChild(t.dropdownContainer)}function createDropdownActions(e,t=e.elements,n=e.config.entity,o=e.config){const{dropdownArrow:a,dropdownSelect:i,selectCardContainer:r,selectBackground:l}=t,s=t===e.elements?r:t,c=t===e.elements?l:t;t!==e.elements&&(s.style.border="solid 2px rgba(0,0,0,0)");let d=!0;c.addEventListener("click",(e=>{if("mwc-list-item"===e.target.tagName.toLowerCase())return;const n=i.shadowRoot.querySelector("mwc-menu"),o=()=>{a.style.transform="rotate(180deg)",t.dropdownArrow.style.background="var(--accent-color)",s.style.border="var(--bubble-select-border, solid 2px var(--accent-color))",t.mainContainer&&(t.mainContainer.style.overflow="visible")};d?(d=!1,a.style.transition="none",n.setAttribute("open",""),requestAnimationFrame((()=>{n.removeAttribute("open"),setTimeout((()=>{a.style.transition="",o()}),140)}))):(n.hasAttribute("open")||(n.removeAttribute("mdc-menu-surface--is-open-below"),n.setAttribute("mdc-menu-surface--is-open-above",""),n.setAttribute("open","")),o())})),i.addEventListener("closed",(e=>{e.stopPropagation(),e.preventDefault(),a.style.transform="rotate(0deg)",s.style.border="solid 2px rgba(0,0,0,0)",t.dropdownArrow.style.background="",t.mainContainer&&(t.mainContainer.style.overflow="")})),t.dropdownSelect.addEventListener("click",(t=>{const a=t.target.value;callSelectService(e,n,a,o)}))}let yamlKeysMap=new Map,stylesYAML,yamlCache=new Map;const loadYAML=async e=>{for(const t of e){if(yamlCache.has(t))return yamlCache.get(t);try{const e=await fetch(t);if(!e.ok)throw new Error(`Failed to fetch ${t}`);const n=await e.text(),o=parseYAML(n);return yamlKeysMap.size||Object.entries(o).forEach((([e,t])=>yamlKeysMap.set(e,t))),yamlCache.set(t,o),o}catch(e){console.warn(`Error fetching YAML from ${t}:`,e),window.bubbleYamlWarning=!0}}return null},parseYAML=e=>{const t={};let n=null,o="",a=!1;return e.split("\n").forEach((e=>{(e=e.trim())&&(e.includes(": >")?(n&&(t[n]=o.trim()),[n]=e.split(": >"),o="",a=!0):e.endsWith(":")&&!a?(n&&(t[n]=o.trim()),n=e.slice(0,-1),o=""):o+=e+"\n")})),n&&(t[n]=o.trim()),t},handleCustomStyles=async(e,t=e.card)=>{const n="pop-up"!==e.config.card_type?t:e.popUp,o=e.config.style_templates??"default",a=e.config.styles;e.lastEvaluatedStyles??="",e.initialLoad??=!0;try{e.initialLoad&&(n.style.display="none");let i=t.querySelector("#bubble-styles");i||(i=document.createElement("style"),i.id="bubble-styles",t.appendChild(i));const r=await e.stylesYAML;let l=Array.isArray(o)?o.map((e=>r[e]??"")).join("\n"):r[o]||"";const s=`${evalStyles(e,a)}\n${evalStyles(e,l)}`.trim();s!==e.lastEvaluatedStyles&&(i.textContent=s,e.lastEvaluatedStyles=s),e.initialLoad&&(n.style.display="",e.initialLoad=!1),e.cardLoaded=!0}catch(t){e.editor||console.error("Error loading YAML styles:",t),n.style.display=""}};function evalStyles(e,t=""){if(!t)return"";try{const n=cleanCSS(Function("hass","entity","state","icon","subButtonIcon","getWeatherIcon","card","name",`return \`${t}\`;`).call(e,e._hass,e.config.entity,(0,utils.Gu)(e),e.elements.icon,e.subButtonIcon,utils.w1,e.card,e.card.name));return e.editor&&e.templateError&&(emitEditorError(""),e.templateError=""),n}catch(t){const n=`Bubble Card - Template error from a ${e.config.card_type} card: ${t.message}`;return e.editor&&(requestAnimationFrame((()=>emitEditorError(t.message))),e.templateError=t.message),console.error(n),""}}function cleanCSS(e){return e.replace(/undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g,"").replace(/[^{}]\s*{\s*}/g,"").replace(/([a-z-]+)\s*:\s*;/g,"").replace(/\s+/g," ").trim().match(/(@[^{]*?{(?:[^{}]*?{[^{}]*?}?)*?[^{}]*?}|[^{}]*?{[^{}]*?})/g)?.join("\n")||""}function emitEditorError(e){window.dispatchEvent(new CustomEvent("bubble-card-error",{detail:e}))}function preloadYAMLStyles(e){e.config?.card_type&&!e.stylesYAML&&(stylesYAML||(stylesYAML=loadYAML(["/local/bubble/bubble-custom.yaml","/hacsfiles/Bubble-Card/bubble-custom.yaml","/local/community/Bubble-Card/bubble-custom.yaml"])),e.stylesYAML=stylesYAML)}function changeIcon(e){const t=(0,utils.sW)(e),n=(0,utils.Qp)(e);""!==n?(e.elements.image.style.backgroundImage="url("+n+")",e.elements.icon.style.display="none",e.elements.image.style.display=""):""!==t?(e.elements.icon.icon=t,e.elements.icon.style.color="inherit",e.elements.icon.style.display="",e.elements.image.style.display="none"):(e.elements.icon.style.display="none",e.elements.image.style.display="none")}function changeName(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t=(0,utils.mG)(e);t!==e.elements.previousName&&((0,utils.Nl)(e,e.elements.name,t),e.elements.previousName=t)}function changeStatus(e){"unavailable"===(0,utils.Gu)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable")}function changeDropdownList(e,t=e.elements,n=e.config.entity,o){if(t.currentState=e._hass.states[n]?.state,!t.currentState)return;if(t.currentList=n?.startsWith("input_select")||n?.startsWith("select")?e._hass.states[n].attributes.options:e._hass.states[n].attributes[o.select_attribute],t.previousList===t.currentList&&t.previousState===t.currentState)return;let a=t.currentList;for(t.currentState;t.dropdownSelect.firstChild;)t.dropdownSelect.removeChild(t.dropdownSelect.firstChild);a.forEach((a=>{const i=document.createElement("mwc-list-item");i.value=a;const r=getOptionIcon(e,e._hass.states[n],o.select_attribute,a);r&&(i.graphic="icon",i.appendChild(r));const l=getTranslatedAttribute(e,e._hass.states[n],o.select_attribute,a);i.appendChild(document.createTextNode(l)),a===getSelectedAttribute(e._hass.states[n],o.select_attribute)&&i.setAttribute("selected",""),t.dropdownSelect.appendChild(i),t.previousList=t.currentList,t.previousState=t.currentState})),t.dropdownContainer.appendChild(t.dropdownSelect)}function changeStyle(e){initializesubButtonIcon(e),(0,utils.JK)(e),handleCustomStyles(e)}function getValueFromEntityId(e,t){try{if(e.states[t])return e.states[t]?.state}catch{}}function checkStateCondition(e,t){const n=e.entity&&t.states[e.entity]?t.states[e.entity].state:"unavailable";let o=e.state??e.state_not;if(Array.isArray(o)){const e=o.map((e=>getValueFromEntityId(t,e))).filter((e=>void 0!==e));o=[...o,...e]}else if("string"==typeof o){const e=getValueFromEntityId(t,o);o=[o],e&&o.push(e)}return null!=e.state?ensureArray(o).includes(n):!ensureArray(o).includes(n)}function ensureArray(e){return void 0===e||Array.isArray(e)?e:[e]}function checkStateNumericCondition(e,t){const n=(e.entity?t.states[e.entity]:void 0)?.state;let o=e.above,a=e.below;"string"==typeof o&&(o=getValueFromEntityId(t,o)??o),"string"==typeof a&&(a=getValueFromEntityId(t,a)??a);const i=Number(n),r=Number(o),l=Number(a);return!isNaN(i)&&(null==e.above||isNaN(r)||r<i)&&(null==e.below||isNaN(l)||l>i)}function checkScreenCondition(e){return!!e.media_query&&matchMedia(e.media_query).matches}function checkUserCondition(e,t){return!(!e.users||!t.user?.id)&&e.users.includes(t.user.id)}function checkAndCondition(e,t){return!e.conditions||checkConditionsMet(e.conditions,t)}function checkOrCondition(e,t){return!e.conditions||e.conditions.some((e=>checkConditionsMet([e],t)))}function checkConditionsMet(e,t){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return checkScreenCondition(e);case"user":return checkUserCondition(e,t);case"numeric_state":return checkStateNumericCondition(e,t);case"and":return checkAndCondition(e,t);case"or":return checkOrCondition(e,t);default:return checkStateCondition(e,t)}return checkStateCondition(e,t)}))}function extractConditionEntityIds(e){const t=new Set([]);for(const n of e)if("numeric_state"===n.condition)"string"==typeof n.above&&isValidEntityId(n.above)&&t.add(n.above),"string"==typeof n.below&&isValidEntityId(n.below)&&t.add(n.below);else if("state"===n.condition)[...ensureArray(n.state)??[],...ensureArray(n.state_not)??[]].forEach((e=>{e&&isValidEntityId(e)&&t.add(e)}));else if("conditions"in n&&n.conditions)return new Set([...t,...extractConditionEntityIds(n.conditions)]);return t}function validateStateCondition(e){return null!=e.entity&&(null!=e.state||null!=e.state_not)}function validateScreenCondition(e){return null!=e.media_query}function validateUserCondition(e){return null!=e.users}function validateAndCondition(e){return null!=e.conditions}function validateOrCondition(e){return null!=e.conditions}function validateNumericStateCondition(e){return null!=e.entity&&(null!=e.above||null!=e.below)}function validateConditionalConfig(e){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return validateScreenCondition(e);case"user":return validateUserCondition(e);case"numeric_state":return validateNumericStateCondition(e);case"and":return validateAndCondition(e);case"or":return validateOrCondition(e);default:return validateStateCondition(e)}return validateStateCondition(e)}))}function addEntityToCondition(e,t){return"conditions"in e&&e.conditions?{...e,conditions:e.conditions.map((e=>addEntityToCondition(e,t)))}:"state"===e.condition||"numeric_state"===e.condition?{...e,entity:t}:e}const validEntityId=/^(\w+)\.(\w+)$/,isValidEntityId=e=>validEntityId.test(e);function changeState(e){const t=e._hass.states[e.config.entity],n=(0,utils.D$)(e,e.config.attribute,e.config.entity),o=t?.last_changed,a="state"===e.config.button_type,i=e.config.show_name??!0,r=e.config.show_icon??!0,l=e.config.show_state??a,s=e.config.show_attribute??a,c=e.config.show_last_changed??e.config.show_last_updated??!1,d=e.config.scrolling_effect??!0,u=e.previousConfig||{};if(e.previousState===t&&e.previousAttribute===n&&e.previousLastChanged===o&&u.showName===i&&u.showIcon===r&&u.showState===l&&u.showAttribute===s&&u.showLastChanged===c&&u.scrollingEffect===d)return;let p=t&&l?e._hass.formatEntityState(t):"",b="",h="",m="";var g;s&&n&&(b=t?e._hass.formatEntityAttributeValue(t,e.config.attribute)??n:""),c&&t&&(h=t?(g=(0,utils.r6)(o,e._hass.locale.language)).charAt(0).toUpperCase()+g.slice(1):""),e.elements.stateStyles||(e.elements.stateStyles=(0,utils.n)("style"),e.elements.stateStyles.textContent=stateStyles,e.content.appendChild(e.elements.stateStyles),"pop-up"===e.config.card_type&&e.elements.buttonContainer.appendChild(e.elements.stateStyles)),m=[p,b,h].filter(Boolean).join(" • "),e.elements.name.classList.toggle("hidden",!i),e.elements.iconContainer.classList.toggle("hidden",!r),e.elements.nameContainer.classList.toggle("name-without-icon",!r),e.elements.state.classList.toggle("state-without-name",(l||c||s)&&!i),e.elements.state.classList.toggle("display-state",l||c||s),e.elements.state.classList.toggle("hidden",!(l||c||s)),e.config.styles?.includes("card.querySelector('.bubble-state').innerText")||(0,utils.Nl)(e,e.elements.state,m),e.previousState=t,e.previousAttribute=n,e.previousConfig={showName:i,showIcon:r,showState:l,showAttribute:s,showLastChanged:c,scrollingEffect:d}}const stateStyles="\n    .hidden {\n        display: none !important;\n    }\n\n    .state-without-name {\n        opacity: 1;\n        font-size: 14px;\n    }\n\n    .name-without-icon {\n        margin-left: 16px;\n    }\n\n    .display-state {\n        display: flex;\n    }\n";function changeSubButtonState(e,t=e.content,n=t.firstChild.firstChild,o=!1){const a=e.config.sub_button;if(!a)return;e.previousValues=e.previousValues||{};const i=[...e.previousValues.subButtons||[]];e.elements=e.elements||{};let r=e.elements.subButtonContainer;if(!r){r=(0,utils.n)("div","bubble-sub-button-container");const t=(0,utils.n)("style");t.textContent=subButtonsStyles,r.appendChild(t),o?n.prepend(r):n.appendChild(r),e.elements.subButtonContainer=r}if(Array.isArray(a)){a.forEach(((t,n)=>{if(!t)return;const o=n+1,a=t.entity??e.config.entity,i=e._hass.states[a],l=t.name??(0,utils.D$)(e,"friendly_name",a)??"",s=t.attribute??"",c=(0,utils.D$)(e,s,a),d=(0,utils.$C)(e,a);if("fan_modes"===s&&null==c)return void(e.elements[o]||(0,utils.n)("div","bubble-sub-button bubble-sub-button-"+o)).classList.add("hidden");const u=t.show_name??!1,p=t.show_state??!1,b=t.show_attribute??!1,h=(t.show_last_changed||t.show_last_updated)??!1,m=t.show_icon??!0,g=t.show_background??!0,f=t.state_background??!0,_=t.light_background??!0,y=t.show_arrow??!0,v=a?.startsWith("input_select")||a?.startsWith("select")||t.select_attribute,w=(0,utils.sW)(e,t.entity,t.icon??"");let k=e.elements[o];if(!k||v&&!k.dropdownContainer){let n=-1;k&&(n=Array.prototype.indexOf.call(r.children,k)),k&&v&&!k.dropdownContainer&&r.contains(k)&&(r.removeChild(k),k=null),k=(0,utils.n)("div","bubble-sub-button bubble-sub-button-"+o),k.nameContainer=(0,utils.n)("div","bubble-sub-button-name-container"),k.feedbackContainer=(0,utils.n)("div","bubble-feedback-container"),k.feedback=(0,utils.n)("div","bubble-feedback-element feedback-element"),k.appendChild(k.feedbackContainer),k.feedbackContainer.appendChild(k.feedback),v&&(createDropdownStructure(e,k,y),k.dropdownContainer.style.display="none",createDropdownActions(e,k,a,t)),k.appendChild(k.nameContainer),n>=0&&n<r.children.length?r.insertBefore(k,r.children[n]):r.appendChild(k),e.elements[o]=k}if(v&&k.dropdownSelect){const n=e._hass.states[a]?.state,o=e.previousValues[a]?.state;if(n!==o){if(n&&k.dropdownSelect.value!==n){k.dropdownSelect.value=n;const e=new Event("change",{bubbles:!0});k.dropdownSelect.dispatchEvent(e)}e.previousValues[a]={state:n}}changeDropdownList(e,k,a,t),y?(k.dropdownArrow.style.display="",k.dropdownContainer.style.width="24px"):(k.dropdownArrow.style.display="none",k.dropdownContainer.style.width="0px",k.style.padding="6px")}else k.contains(k.dropdownContainer)&&k.removeChild(k.dropdownContainer);const x=!(!v||!k.dropdownSelect)&&Array.from(k.dropdownSelect.children).find((e=>e.hasAttribute("selected")))?.value;if(m&&w){let n=k.icon;if(n||(n=(0,utils.n)("ha-icon","bubble-sub-button-icon"),n.classList.add("show-icon"),k.appendChild(n),k.icon=n),x){const o=getOptionIcon(e,i,t.select_attribute,x);o&&!t.icon?(n.tagName!==o.tagName||n.icon!==o.icon||n.attribute!==o.attribute||n.attributeValue!==o.attributeValue)&&(k.replaceChild(o,n),k.icon=o,n=o):n.icon!==w&&n.setAttribute("icon",w)}else n.icon!==w&&n.setAttribute("icon",w);n.classList.remove("hidden"),n.classList.add("bubble-sub-button-icon","show-icon")}else k.icon&&(k.icon.classList.remove("show-icon"),k.icon.classList.add("hidden"));if(g){const t=(0,utils.GM)("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))");d&&f?(_&&k.style.setProperty("--bubble-sub-button-light-background-color",(0,utils.VA)(e,a,t?1:.8)),k.classList.add("background-on"),k.classList.remove("background-off")):(k.classList.add("background-off"),k.classList.remove("background-on"))}else k.classList.remove("background-on","background-off");"none"===t.tap_action?.action&&"none"===t.double_tap_action?.action&&"none"===t.hold_action?.action||k.actionAdded||(addActions(k,v?"":t,a,{tap_action:{action:v?"none":"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}}),addFeedback(k,k.feedback),v&&(k.style.pointerEvents="auto",k.style.cursor="pointer"),k.actionAdded=!0);let C="";const $=i&&p?e._hass.formatEntityState(i):"",S=i&&""!==c&&b?e._hass.formatEntityAttributeValue(i,s)??c:"",A=i&&h?(0,utils.r6)(i.last_changed,e._hass.locale.language):"";u&&""!==l&&(C+=l),""!==$&&(C+=(C?" · ":"")+$),""!==A&&(C+=(C?" · ":"")+A),""!==S&&(C+=(C?" · ":"")+S),C=C.charAt(0).toUpperCase()+C.slice(1),C||m||v?(k.classList.remove("hidden"),k.nameContainer.textContent!==C&&(k.nameContainer.textContent=C),m&&k.icon&&(k.icon.classList.toggle("icon-with-state",!!C),k.icon.classList.toggle("icon-without-state",!C)),C||m||!v?v&&(k.dropdownContainer.classList.remove("no-icon-select-container"),k.dropdownArrow.classList.remove("no-icon-select-arrow")):(k.dropdownContainer.classList.add("no-icon-select-container"),k.dropdownArrow.classList.add("no-icon-select-arrow"))):(k.classList.add("hidden"),k.dropdownContainer&&(k.dropdownContainer.classList.remove("no-icon-select-container"),k.dropdownArrow.classList.remove("no-icon-select-arrow")));const E=t.visibility;if(null!=E){const t=ensureArray(E);if(validateConditionalConfig(t)){const n=checkConditionsMet(t,e._hass);k.classList.toggle("hidden",!n)}}})),e.previousValues.subButtons=a.slice();for(let t=i.length;t>0;t--)if(t>a.length){const n=e.elements[t];n&&(r.removeChild(n),delete e.elements[t])}}}const subButtonsStyles="\n    .bubble-sub-button-container {\n        position: relative;\n        display: flex;\n        justify-content: end;\n        right: 8px;\n        align-content: center;\n        gap: 8px;\n        align-items: center;\n    }\n    .bubble-sub-button {\n        display: flex;\n        flex-wrap: nowrap;\n        flex-direction: row-reverse;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        right: 0;\n        box-sizing: border-box;\n        width: min-content;\n        min-width: 36px;\n        height: 36px;\n        vertical-align: middle;\n        font-size: 12px;\n        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n        padding: 0 8px;\n        white-space: nowrap;\n        transition: all 0.5s ease-in-out;\n        color: var(--primary-text-color);\n    }\n    .bubble-feedback-container {\n        display: flex;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n        overflow: hidden;\n        pointer-events: none;\n    }\n    .bubble-sub-button-name-container {\n        display: flex;\n    }\n    .show-icon {\n        display: flex;\n        --mdc-icon-size: 16px;\n    }\n    .background-on {\n        background-color: var(--bubble-sub-button-light-background-color, var(--accent-color));\n    }\n    .background-off {\n        background-color: var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    }\n    .hidden {\n        display: none;\n    }\n    .icon-with-state {\n        margin-right: 4px;\n        --mdc-icon-size: 16px;\n    }\n    .icon-without-state {\n        margin-right: 0;\n        --mdc-icon-size: 20px;\n    }\n    .no-icon-select-arrow {\n        width: 28px !important;\n        height: 28px !important;\n        right: 2px !important;        \n    }\n    .no-icon-select-container {\n        width: 16px !important;\n    }\n    .bubble-dropdown-arrow {\n        background: var(--bubble-select-arrow-background-color) !important;\n    }\n";function initializesubButtonIcon(e){Array.isArray(e.subButtonIcon)||(e.subButtonIcon=[]),"pop-up"===e.config.card_type?e.popUp.querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t})):e.content.querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t}))}function changeEditor(e){if(!e.verticalStack)return;const{host:t}=e.verticalStack,{popUp:n,sectionRow:o,sectionRowContainer:a,elements:i}=e;e.detectedEditor&&window.addEventListener("dialog-closed",(()=>{i?.popUpContainer?.classList.add("editor-cropped")}),{once:!0});const r=n?.classList.contains("is-popup-opened"),l="hui-card"===o?.tagName.toLowerCase(),s=e.editor||e.detectedEditor;if(!r&&l){const{editor:t,editorAccess:n}=e;a?.classList.contains("card")&&s&&"none"===a.style.display&&(a.style.display="")}const c=n?.classList;s?(c?.contains("editor")||(toggleBodyScroll(!1),c?.remove("is-popup-opened"),c?.add("is-popup-closed","editor"),e.detectedEditor||i?.popUpContainer?.classList.add("editor-cropped")),e.editorAccess=!0):c?.contains("editor")&&(c.remove("editor"),i?.popUpContainer?.classList.remove("editor-cropped")),e.editor&&!e.detectedEditor&&s!==e.previousEditorState&&(onEditorChange(e),e.previousEditorState=s)}function changes_changeStyle(e){initializesubButtonIcon(e);const{backdropCustomStyle:t}=getBackdrop(e);handleCustomStyles(e,e.elements.customStyle),handleCustomStyles(e,t);const n=e.config.card_layout,o="large"===n||"large-2-rows"===n,a="large-2-rows"===n;o!==e.popUp.classList.contains("large")&&e.popUp.classList.toggle("large",o),a!==e.popUp.classList.contains("rows-2")&&e.popUp.classList.toggle("rows-2",a);const i=e.config.show_header??!0;e.popUp.classList.contains("no-header")===i&&e.popUp.classList.toggle("no-header",!i)}function changeTriggered(e){const t=e.config.trigger;if(t){const n=!e.hasPageLoaded;e.hasPageLoaded=!0;const o=ensureArray(t);if(0===o.length)return void(e.previousTrigger=!1);if(validateConditionalConfig(o)){const t=checkConditionsMet(o,e._hass);if(t===e.previousTrigger)return;e.config.hash===location.hash?t||n||removeHash():t&&addHash(e.config.hash),e.previousTrigger=t}}else{let t=e.config.trigger_entity??"";if(""===t)return;let n=e.config.trigger_state??"",o=e.config.trigger_close??!1,a=e._hass.states[t]?.state;if(!t)return;if(!n)return;if(e.oldTriggerEntityState===a)return;const i=!e.hasPageLoaded;e.hasPageLoaded=!0,e.config.hash===location.hash?o&&n!==a&&(i||removeHash()):a===n&&addHash(e.config.hash),e.oldTriggerEntityState=a}}function getButtonType(e){let t=e.config.button_type;return"custom"===t&&(console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"'),t=""),e.config.entity?t||"switch":t||"name"}function updateEntity(e,t){const n=e._hass.states[e.config.entity];if((0,utils.md)(e,"light"))e._hass.callService("light","turn_on",{entity_id:e.config.entity,brightness:Math.round(255*t/100)});else if((0,utils.md)(e,"media_player"))e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:(t/100).toFixed(2)});else if((0,utils.md)(e,"cover"))e._hass.callService("cover","set_cover_position",{entity_id:e.config.entity,position:Math.round(t)});else if((0,utils.md)(e,"input_number")){const o=n.attributes.min??0,a=n.attributes.max??100,i=(0,utils.D$)(e,"step")??1;let r=(a-o)*t/100+o,l=Math.round(r/i)*i;e._hass.callService("input_number","set_value",{entity_id:e.config.entity,value:l})}else if((0,utils.md)(e,"fan")){const o=n.attributes.percentage_step??1;let a=Math.round(t/o)*o;e._hass.callService("fan","set_percentage",{entity_id:e.config.entity,percentage:a})}else if((0,utils.md)(e,"climate")){const o=n.attributes.min_temp??0,a=n.attributes.max_temp??1e4,i="°C"===e._hass.config.unit_system.temperature,r=n.attributes.target_temp_step?n.attributes.target_temp_step:i?.5:1;let l=(a-o)*t/100+o,s=Math.round(l/r)*r;s=parseFloat(s.toFixed(1)),e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:s})}else if((0,utils.md)(e,"number")){const o=n.attributes.min??0,a=n.attributes.max??100,i=n.attributes.step??1;let r=(a-o)*t/100+o,l=Math.round(r/i)*i;e._hass.callService("number","set_value",{entity_id:e.config.entity,value:l})}}function onSliderChange(e,t){const n=e.elements.rangeSlider.getBoundingClientRect(),o=100*(t-n.left)/n.width,a=Math.min(100,Math.max(0,o));return e.elements.rangeFill.style.transform=`translateX(${a}%)`,a}function changeButton(e){const t=e.config.card_type,n=getButtonType(e),o=(0,utils.md)(e,"light"),a=(0,utils.$C)(e),i=(0,utils.VA)(e),r="button"===t?e.card.style.getPropertyValue("--bubble-button-background-color"):e.popUp.style.getPropertyValue("--bubble-button-background-color"),l=e.elements.buttonBackground.style.opacity;let s="",c="";if("switch"===n&&a){const t=e.config.use_accent_color;i&&o&&!t?(s=(0,utils.VA)(e),c=".5"):(s="var(--bubble-button-accent-color, var(--bubble-accent-color, var(--accent-color)))",c="1")}else s="rgba(0, 0, 0, 0)",c=".5";r!==s&&("button"===t?e.card.style.setProperty("--bubble-button-background-color",s):"pop-up"===t&&e.popUp.style.setProperty("--bubble-button-background-color",s)),l!==c&&(e.elements.buttonBackground.style.opacity=c)}function changes_changeIcon(e){const t=getButtonType(e),n="name"!==t&&(0,utils.$C)(e),o="name"!==t?(0,utils.sW)(e):e.config.icon,a="name"!==t?(0,utils.Qp)(e):"",i="name"!==t&&(0,utils.md)(e,"light"),r=e.elements.iconContainer.style.color,l=e.elements.image.style.backgroundImage,s=e.elements.icon.icon,c=e.elements.icon.style.display,d=e.elements.image.style.display;if(i&&n){const t=`var(--bubble-icon-background-color, ${(0,utils.VA)(e)})`;r!==t&&(e.elements.iconContainer.style.color=t)}else""!==r&&(e.elements.iconContainer.style.color="");if(""!==a){const t="url("+a+")";l!==t&&(e.elements.image.style.backgroundImage=t),"none"!==c&&(e.elements.icon.style.display="none"),""!==d&&(e.elements.image.style.display="")}else if(""!==o){s!==o&&(e.elements.icon.icon=o);const a=n&&"state"!==t?(0,utils.VA)(e):"inherit";e.elements.icon.style.color!==a&&(e.elements.icon.style.color=a),""!==c&&(e.elements.icon.style.display=""),"none"!==d&&(e.elements.image.style.display="none")}else"none"!==c&&(e.elements.icon.style.display="none"),"none"!==d&&(e.elements.image.style.display="none")}function changes_changeName(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t="name"!==getButtonType(e)?(0,utils.mG)(e):e.config.name;t!==e.elements.previousName&&((0,utils.Nl)(e,e.elements.name,t),e.elements.previousName=t)}function changeSlider(e){if("slider"===getButtonType(e)){if(e.elements.rangeFill.style.backgroundColor=(0,utils.VA)(e),e.dragging)return;let t=0;if((0,utils.md)(e,"light"))t=100*(0,utils.D$)(e,"brightness")/255;else if((0,utils.md)(e,"media_player"))t=(0,utils.$C)(e)?100*(0,utils.D$)(e,"volume_level"):0;else if((0,utils.md)(e,"cover"))t=(0,utils.D$)(e,"current_position");else if((0,utils.md)(e,"input_number")){const n=(0,utils.D$)(e,"min"),o=(0,utils.D$)(e,"max");t=100*((0,utils.Gu)(e)-n)/(o-n)}else if((0,utils.md)(e,"fan"))t=(0,utils.$C)(e)?(0,utils.D$)(e,"percentage"):0;else if((0,utils.md)(e,"climate")){const n=(0,utils.D$)(e,"min_temp"),o=(0,utils.D$)(e,"max_temp");t=100*((0,utils.D$)(e,"temperature")-n)/(o-n)}else if((0,utils.md)(e,"number")){const n=(0,utils.D$)(e,"min"),o=(0,utils.D$)(e,"max");t=100*((0,utils.Gu)(e)-n)/(o-n)}e.elements.rangeFill.style.transform=`translateX(${t}%)`}}function changes_changeStatus(e){const t=(0,utils.Gu)(e),n=e.config.card_type;"unavailable"===t?"button"===n?e.card.classList.add("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.add("is-unavailable"):"button"===n?e.card.classList.remove("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.remove("is-unavailable"),(0,utils.$C)(e)?"button"===n?e.card.classList.add("is-on"):"pop-up"===n&&e.elements.headerContainer.classList.add("is-on"):"button"===n?e.card.classList.remove("is-on"):"pop-up"===n&&e.elements.headerContainer.classList.remove("is-on")}function button_changes_changeStyle(e){initializesubButtonIcon(e),(0,utils.JK)(e),handleCustomStyles(e)}const button_styles_namespaceObject="* {\n    -webkit-tap-highlight-color: transparent !important;\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n}\n*::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n}\nha-card {\n    margin-top: 0;\n    background: none;\n    opacity: 1;\n}\n.is-unavailable {\n    opacity: 0.5;\n}\n\n.bubble-button-card-container {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));\n    box-shadow: var(--bubble-button-box-shadow, var(--bubble-box-shadow, none));\n    overflow: scroll;\n    touch-action: pan-y;\n    border: var(--bubble-button-border, var(--bubble-border, none));\n}\n\n.bubble-button-card,\n.bubble-range-slider,\n.bubble-button-background {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    transition: background-color 1.5s;\n}\n.bubble-button-background {\n    background-color: var(--bubble-button-background-color);\n    opacity: .5;\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, 32px)) / 1.1);\n}\n.bubble-range-fill {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    left: -100%;\n    transition: all .3s;\n    z-index: 0;\n}\n.is-dragging .bubble-range-fill {\n    transition: none;\n}\n.is-light .bubble-range-fill {\n    opacity: 0.5;\n}\n.is-unavailable .bubble-button-card,\n.is-unavailable .bubble-range-slider {\n    cursor: not-allowed;\n}\n.bubble-range-slider {\n    cursor: ew-resize;\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, 32px)) / 1.1);\n    overflow: hidden;\n    mask-image: radial-gradient(white, black);\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n    min-width: 38px;\n    min-height: 38px;\n    margin: 6px;\n    border-radius: var(--bubble-button-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n}\n\n.bubble-icon {\n    display: flex;\n    opacity: 0.6;\n}\n\n.is-on .bubble-icon {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-name,\n.bubble-state {\n    display: flex;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 18px;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    margin: 0 16px 0 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-size: 13px;\n    font-weight: 600;\n}\n\n.bubble-state {\n    font-size: 12px;\n    font-weight: normal;\n    opacity: 0.7;\n}\n\n.bubble-feedback-element {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0);\n    pointer-events: none;\n}\n\n@keyframes tap-feedback {\n    0% {transform: translateX(-100%); opacity: 0;}\n    64% {transform: translateX(0); opacity: 0.1;}\n    100% {transform: translateX(100%); opacity: 0;}\n}\n\n.large .bubble-button-card-container {\n  height: 56px;\n  border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));\n}\n\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  margin-left: 8px;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, min-content);\n  grid-template-rows: repeat(2, 1fr);\n  grid-auto-flow: column;\n  width: auto;\n  padding-right: 4px;\n}\n\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n";function button_create_createStructure(e,t=e.content,n=t){const o=getButtonType(e);e.dragging=!1,e.elements||(e.elements={}),e.elements.buttonCardContainer=(0,utils.n)("div","bubble-button-card-container bubble-container button-container"),e.elements.buttonCard=(0,utils.n)("div","bubble-button-card switch-button"),e.elements.buttonBackground=(0,utils.n)("div","bubble-button-background"),e.elements.nameContainer=(0,utils.n)("div","bubble-name-container name-container"),e.elements.iconContainer=(0,utils.n)("div","bubble-icon-container icon-container"),e.elements.name=(0,utils.n)("div","bubble-name name"),e.elements.state=(0,utils.n)("div","bubble-state state"),e.elements.feedback=(0,utils.n)("div","bubble-feedback-element feedback-element"),e.elements.icon=(0,utils.n)("ha-icon","bubble-icon icon"),e.elements.image=(0,utils.n)("div","bubble-entity-picture entity-picture"),e.elements.style=(0,utils.n)("style"),e.elements.customStyle=(0,utils.n)("style"),e.elements.feedback.style.display="none",e.elements.style.innerText=button_styles_namespaceObject,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),"name"!==o&&e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonCard.appendChild(e.elements.buttonBackground),e.elements.buttonCard.appendChild(e.elements.iconContainer),e.elements.buttonCard.appendChild(e.elements.nameContainer),e.elements.buttonCard.appendChild(e.elements.feedback),e.elements.buttonCardContainer.appendChild(e.elements.buttonCard),t.innerHTML="",n===t&&t.appendChild(e.elements.buttonCardContainer),t.appendChild(e.elements.style),t.appendChild(e.elements.customStyle),n!==t?(n.innerHTML="",e.elements.buttonCardContainer.appendChild(t),n.appendChild(e.elements.buttonCardContainer),e.buttonType=o):e.cardType=`button-${o}`}function createSwitchStructure(e){addActions(e.elements.iconContainer,e.config),addActions(e.elements.buttonBackground,e.config.button_action,e.config.entity,{tap_action:{action:"toggle"},double_tap_action:{action:"toggle"},hold_action:{action:"more-info"}}),addFeedback(e.elements.buttonBackground,e.elements.feedback)}function createNameStructure(e){const t={tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}};addActions(e.elements.iconContainer,e.config,e.config.entity,t),addActions(e.elements.buttonBackground,e.config.button_action,e.config.entity,t),addFeedback(e.elements.buttonBackground,e.elements.feedback)}function createStateStructure(e){addActions(e.elements.buttonCardContainer,e.config),addActions(e.elements.buttonBackground,e.config.button_action,e.config.entity,{tap_action:{action:"more-info"},double_tap_action:{action:"more-info"},hold_action:{action:"more-info"}}),addFeedback(e.elements.buttonBackground,e.elements.feedback)}function createSliderStructure(e){addActions(e.elements.iconContainer,e.config);let t=0,n=null;e.elements.rangeFill=(0,utils.n)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,utils.n)("div","bubble-range-slider range-slider"),e.elements.rangeSlider.appendChild(e.elements.rangeFill),e.elements.buttonCardContainer.appendChild(e.elements.rangeSlider),e.elements.buttonCardContainer.insertBefore(e.elements.rangeSlider,e.elements.buttonCard),e.elements.buttonCard.style.cursor="ew-resize",e.elements.buttonCardContainer.addEventListener("pointercancel",(function(){clearTimeout(n),e.dragging=!1,e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",a),window.removeEventListener("pointerup",i)})),e.elements.buttonCardContainer.addEventListener("pointerdown",(n=>{n.target.closest(".bubble-action")||(e.elements.buttonCardContainer.setPointerCapture(n.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,t=n.pageX||(n.touches?n.touches[0].pageX:0),e.elements.buttonCardContainer.classList.add("is-dragging"),e.elements.buttonCardContainer.addEventListener("pointermove",a),window.addEventListener("pointerup",i)))}));const o=(0,utils.nF)(updateEntity,200);function a(t){if(t.stopPropagation(),t.target.closest(".bubble-action"))return;const n=t.pageX||(t.touches?t.touches[0].pageX:0),a=onSliderChange(e,n);e.config.slider_live_update&&o(e,a)}function i(t){t.stopPropagation(),clearTimeout(n),n=setTimeout((()=>{e.dragging=!1}),1400);const o=t.pageX||(t.touches?t.touches[0].pageX:0),r=onSliderChange(e,o);updateEntity(e,r),(0,utils.jp)("selection"),e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",a),window.removeEventListener("pointerup",i)}}function handleButton(e,t=e.content,n=t){const o=getButtonType(e);e.cardType!==`button-${o}`&&e.buttonType!==o&&(button_create_createStructure(e,t,n),"switch"===o?createSwitchStructure(e):"slider"===o?createSliderStructure(e):"state"===o?createStateStructure(e):"name"===o&&createNameStructure(e)),"name"!==o&&(changes_changeStatus(e),changeButton(e),changeSlider(e)),changes_changeIcon(e),changes_changeName(e),changeState(e),changeSubButtonState(e,t,e.elements.buttonCard),"pop-up"!==e.cardType&&button_changes_changeStyle(e)}async function handlePopUp(e){if("pop-up"!==e.cardType){if(e.getRootNode()instanceof ShadowRoot==0)return;prepareStructure(e),createHeader(e),createStructure(e)}else e.popUp&&e.elements&&((e.config.hash===location.hash||e.editor||e.config!==e.previousConfig)&&(changes_changeStyle(e),(e.config.entity||e.config.name)&&handleButton(e,e.elements.buttonContainer,e.elements.header),e.previousConfig=e.config),e.editor||changeTriggered(e),changeEditor(e))}const horizontal_buttons_stack_styles_namespaceObject="@keyframes from-bottom {\n    0% { transform: translate(-50%, 100px); }\n    26% { transform: translate(-50%, -8px); }\n    46% { transform: translate(-50%, 1px); }\n    62% { transform: translate(-50%, -2px); }\n    70% { transform: translate(-50%, 0); }\n    100% { transform: translate(-50%, 0); }\n}\n@keyframes pulse {\n    0% { filter: brightness(0.7); }\n    100% { filter: brightness(1.3); }\n}\nha-card {\n    border-radius: 0;\n}\n.horizontal-buttons-stack-card {\n    bottom: 16px;\n    height: 51px;\n    margin-top: 0;\n    position: fixed;\n    width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\n    left: calc(var(--mdc-drawer-width, 0px) + 4px);\n    z-index: 6; /* Higher value hide the more-info panel */\n}\n@media only screen and (max-width: 870px) {\n    .horizontal-buttons-stack-card {\n        width: calc(100% - 16px);\n        left: 8px;\n    }\n\n    .horizontal-buttons-stack-card::before {\n        left: -10px;\n    }\n}\n.horizontal-buttons-stack-card::before {\n    content: '';\n    position: absolute;\n    top: -32px;\n    display: none;\n    background: linear-gradient(0deg, var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--primary-background-color)))) 50%, transparent);\n    width: 200%;\n    height: 100px;\n    pointer-events: none;\n}\n.has-gradient.horizontal-buttons-stack-card::before {\n    display: block;\n}\n\n.card-content {\n    width: calc(100% + 36px);\n    padding: 0 !important;\n    max-width: calc(var(--desktop-width) - 8px);\n    box-sizing: border-box;\n    overflow: scroll;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    -webkit-mask-image: linear-gradient(\n        90deg,\n        #000000 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        transparent 100%\n    );\n}\n.is-scrollable.card-content {\n    padding: 0 !important;\n    width: 100%;\n}\n.is-scrolled.card-content {\n    padding: 0 !important;\n    width: 100%;\n    -webkit-mask-image: linear-gradient(\n        90deg,\n        transparent 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        transparent 100%\n    );\n}\n.is-maxed-scroll.card-content {\n    -webkit-mask-image: linear-gradient(\n        90deg,\n        transparent 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        #000000 100%\n    );\n}\n.card-content::-webkit-scrollbar {\n    display: none;\n}\n\n.bubble-horizontal-buttons-stack-card-container {\n    height: 51px;\n    position: relative;\n    margin: auto;\n}\n\n.bubble-button {\n    align-items: center;\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    color: var(--primary-text-color);\n    cursor: pointer;\n    display: inline-flex;\n    height: 50px;\n    left: 0;\n    padding: 0 16px;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n    transition: transform 1s;\n    box-sizing: border-box;\n}\n.bubble-button.highlight {\n    animation: pulse 1.4s infinite alternate;\n}\n.bubble-background-color {\n    border: 1px solid var(--primary-text-color);\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    box-sizing: border-box;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    transition: background-color 1s;\n    width: 100%;\n    z-index: 1;\n}\n.bubble-background {\n    opacity: 0.8;\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box !important;\n    position: absolute;\n    left: 0;\n    z-index: 0;\n    background-color: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n}\n.bubble-icon {\n    height: 24px;\n    width: 24px;\n    z-index: 2;\n}\n.bubble-icon + .bubble-name {\n    margin-left: 8px;\n    z-index: 2;\n}\n\n.horizontal-buttons-stack-card.editor {\n    position: relative;\n    width: 100%;\n    left: 0;\n    bottom: 0;\n}\n.horizontal-buttons-stack-card.editor::before {\n    background: none;\n}\n";let isOpen=!1;const BUTTON_MARGIN=12;function createButton(e,t){const n=e.config[`${t}_name`]??"",o=e.config[`${t}_icon`]??"",a=e.config[`${t}_pir_sensor`],i=e.config[`${t}_link`],r=e.config[`${t}_entity`];isOpen=isOpen||location.hash===i;const l=(0,utils.n)("ha-icon","bubble-icon icon");l.icon=o;const s=(0,utils.n)("div","bubble-name name");s.innerText=n;const c=(0,utils.n)("div","bubble-background-color background-color"),d=(0,utils.n)("div","bubble-background background"),u=(0,utils.n)("div",`bubble-button bubble-button-${t} button ${i.substring(1)}`);let p=localStorage.getItem(`bubbleButtonWidth-${i}`);return u.style.width=`${p}px`,u.appendChild(l),u.appendChild(s),u.appendChild(c),u.appendChild(d),u.addEventListener("click",(()=>{location.hash!==i&&(isOpen=!1),isOpen?removeHash():addHash(i),isOpen=!isOpen,(0,utils.jp)("light")})),u.icon=l,u.name=s,u.backgroundColor=c,u.background=d,u.pirSensor=a,u.lightEntity=r,u.link=i,u.index=t,window.addEventListener("location-changed",(function(){e.config.highlight_current_view&&(location.pathname===i||location.hash===i?u.classList.add("highlight"):u.classList.remove("highlight"))})),e.elements.buttons.push(u),u}function horizontal_buttons_stack_create_createStructure(e){e.elements={},e.elements.buttons=[],e.elements.cardContainer=(0,utils.n)("div","bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container");let t=1;for(;e.config[t+"_link"];)e.elements.cardContainer.appendChild(createButton(e,t)),t++;e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=horizontal_buttons_stack_styles_namespaceObject,e.elements.customStyle=(0,utils.n)("style"),e.card.classList.add("horizontal-buttons-stack-card"),e.card.style.marginLeft=e.config.margin??"",e.config.hide_gradient||e.card.classList.add("has-gradient"),e.card.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.elements.cardContainer.appendChild(e.elements.style),e.elements.cardContainer.appendChild(e.elements.customStyle),e.content.appendChild(e.elements.cardContainer),e.content.addEventListener("scroll",(()=>{e.content.scrollLeft>0?e.content.classList.add("is-scrolled"):e.content.classList.remove("is-scrolled"),e.content.scrollWidth-BUTTON_MARGIN<e.content.offsetWidth+e.content.scrollLeft?e.content.classList.add("is-maxed-scroll"):e.content.classList.remove("is-maxed-scroll")})),(e.config.rise_animation??1)&&(e.content.style.animation="from-bottom .6s forwards",setTimeout((()=>{e.content.style.animation="none"}),1500));let n=e.card.parentNode.host;n&&!e.editor&&"hui-card"!==n.parentElement.tagName.toLowerCase()?n.style.padding="0 0 80px":n.parentElement&&!e.editor&&"hui-card"===n.parentElement.tagName.toLowerCase()&&(n.parentElement.style.padding="0 0 80px"),e.cardType="horizontal-buttons-stack"}const changes_BUTTON_MARGIN=12;function sortButtons(e){if(!e.config.auto_order)return;const t=e._hass.states;e.elements.buttons.sort(((e,n)=>{if(!t[e.pirSensor])return 1;if(!t[n.pirSensor])return-1;const o=t[e.pirSensor]?.last_updated,a=t[n.pirSensor]?.last_updated;return"on"===t[e.pirSensor]?.state&&"on"===t[n.pirSensor]?.state?o>a?-1:o===a?0:1:"on"===t[e.pirSensor]?.state?-1:"on"===t[n.pirSensor]?.state?1:o>a?-1:o===a?0:1}))}function placeButtons(e){let t=0;for(let n=0;n<e.elements.buttons.length;++n){let o=localStorage.getItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`);e.elements.buttons[n].style.width="";const a=e.elements.buttons[n].offsetWidth;e.elements.buttons[n].style.width=`${a}px`,a>0&&(o=a,localStorage.setItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`,`${a}`)),null!==o&&(e.elements.buttons[n].style.transform=`translateX(${t}px)`,e.elements.buttons[n].style.width="",t+=+o+changes_BUTTON_MARGIN)}e.elements.cardContainer.style.width=`${t}px`}function changes_changeEditor(e){const t=e.shadowRoot.host.closest("hui-card-preview, hui-card-options");e.editor||null!==t?(e.elements.cardContainer.classList.add("editor"),e.card.classList.add("editor")):(e.elements.cardContainer.classList.remove("editor"),e.card.classList.remove("editor"))}function changeLight(e){e.elements.buttons.forEach((t=>{const n=e._hass.states[t.lightEntity],o=n?.attributes.rgb_color,a=n?.state;if(o){const e=(0,style.qd)(o)?"rgba(255, 220, 200, 0.5)":`rgba(${o}, 0.5)`;t.backgroundColor.style.backgroundColor=e,t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"}else"on"==a?(t.backgroundColor.style.backgroundColor="rgba(255, 255, 255, 0.5)",t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"):(t.backgroundColor.style.backgroundColor="rgba(0, 0, 0, 0)",t.backgroundColor.style.borderColor="var(--primary-text-color)")}))}function changeConfig(e){e.elements.buttons.forEach((t=>{const n=t.index,o=e.config[`${n}_name`]??"",a=e.config[`${n}_icon`]??"",i=e.config[`${n}_pir_sensor`],r=e.config[`${n}_link`],l=e.config[`${n}_entity`];t.pirSensor=i,t.lightEntity=l,t.link=r,o?(t.name.innerText=o,t.name.style.display=""):t.name.style.display="none",a?(t.icon.icon=a,t.icon.style.display=""):t.icon.style.display="none",void 0===r&&(t.remove(),e.elements.buttons=e.elements.buttons.filter((e=>e!==t)),e.elements.buttons.forEach(((e,t)=>{e.index=t+1})))}));let t=e.elements.buttons.length+1;for(;void 0!==e.config[`${t}_link`];){if(!e.elements.buttons.find((e=>e.index===t))){const n=createButton(e,t);e.elements.buttons.push(n)}t++}}function horizontal_buttons_stack_changes_changeStatus(e){e.content.scrollWidth>=e.content.offsetWidth?e.content.classList.add("is-scrollable"):e.content.classList.remove("is-scrollable")}function horizontal_buttons_stack_changes_changeStyle(e){handleCustomStyles(e)}function handleHorizontalButtonsStack(e){"horizontal-buttons-stack"!==e.cardType&&horizontal_buttons_stack_create_createStructure(e),horizontal_buttons_stack_changes_changeStyle(e),sortButtons(e),changeConfig(e),changes_changeEditor(e),placeButtons(e),changeLight(e),horizontal_buttons_stack_changes_changeStatus(e)}function separator_changes_changeIcon(e){e.elements.icon.icon=(0,utils.sW)(e),""===e.elements.icon.icon&&""===e.elements.icon.style.margin?(e.elements.icon.style.margin="0px 8px",e.elements.icon.style.width="0px"):""!==e.elements.icon.icon&&"0px 8px"===e.elements.icon.style.margin&&(e.elements.icon.style.margin="",e.elements.icon.style.width="")}function separator_changes_changeName(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t=(0,utils.mG)(e);t!==e.elements.name.innerText&&(e.elements.name.innerText=t)}function separator_changes_changeStyle(e){initializesubButtonIcon(e),(0,utils.JK)(e),handleCustomStyles(e)}const separator_styles_namespaceObject=".bubble-separator {\n    display: flex;\n    width: 100%;\n\n    align-items: center;\n    z-index: 1;\n}\n.bubble-icon {\n    display: inline-flex;\n    height: auto;\n    width: auto;\n    margin: 0 22px 0 8px;\n}\n.bubble-name {\n    margin: 0 30px 0 0;\n    font-size: 16px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.bubble-name:empty {\n    display: none;\n}\n.bubble-line {\n    border-radius: 6px;\n    opacity: 0.5;\n    flex-grow: 1;\n    height: 6px;\n    background-color: var(--bubble-line-background-color, var(--background-color, var(--secondary-background-color)));\n    margin-right: 14px;\n}\n.bubble-sub-button-container {\n    margin: 0 8px;\n    right: 0 !important;\n}\n\n.large .bubble-separator {\n    height: 56px;\n}\n\n.rows-2 .bubble-sub-button-container {\n    flex-direction: column;\n    gap: 4px !important;\n    display: grid !important;\n    grid-template-columns: repeat(1, min-content);\n    grid-template-rows: repeat(2, 1fr);\n    grid-auto-flow: column;\n    width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n    height: 20px !important;\n}\n";function separator_create_createStructure(e){e.elements={},e.elements.separatorCard=(0,utils.n)("div","bubble-separator separator-container"),e.elements.icon=(0,utils.n)("ha-icon","bubble-icon"),e.elements.name=(0,utils.n)("h4","bubble-name"),e.elements.line=(0,utils.n)("div","bubble-line"),e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=separator_styles_namespaceObject,e.elements.customStyle=(0,utils.n)("style"),e.elements.separatorCard.appendChild(e.elements.icon),e.elements.separatorCard.appendChild(e.elements.name),e.elements.separatorCard.appendChild(e.elements.line),e.content.innerHTML="",e.content.appendChild(e.elements.separatorCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="separator"}function handleSeparator(e){"separator"!==e.cardType&&separator_create_createStructure(e),separator_changes_changeIcon(e),separator_changes_changeName(e),changeSubButtonState(e,e.content,e.elements.separatorCard),separator_changes_changeStyle(e)}const coverEntityFeature={OPEN:1,CLOSE:2,STOP:8};function supportsFeature(e,t){return supportsFeatureFromAttributes(e.attributes,t)}function supportsFeatureFromAttributes(e,t){return!!(e&&void 0!==e.supported_features&&e.supported_features&t)}function isFullyOpen(e){return void 0!==e.attributes.current_position?100===e.attributes.current_position:"open"===e.state}function isFullyClosed(e){return void 0!==e.attributes.current_position?0===e.attributes.current_position:"closed"===e.state}function cover_changes_changeIcon(e){const t=e._hass.states[e.config.entity],{current_position:n,assumed_state:o}=t.attributes,a=supportsFeature(t,coverEntityFeature.OPEN),i=supportsFeature(t,coverEntityFeature.CLOSE),r=supportsFeature(t,coverEntityFeature.STOP),l=isFullyOpen(t),s=isFullyClosed(t),c="curtain"===(0,utils.D$)(e,"device_class");e.elements.icon.icon=l?(0,utils.sW)(e,e.config.entity,e.config.icon_open):(0,utils.sW)(e,e.config.entity,e.config.icon_close),e.elements.iconOpen.icon=e.config.icon_up||(c?"mdi:arrow-expand-horizontal":"mdi:arrow-up"),e.elements.iconClose.icon=e.config.icon_down||(c?"mdi:arrow-collapse-horizontal":"mdi:arrow-down"),void 0!==n?(l?e.elements.buttonOpen.classList.add("disabled"):a&&e.elements.buttonOpen.classList.remove("disabled"),s?e.elements.buttonClose.classList.add("disabled"):i&&e.elements.buttonClose.classList.remove("disabled")):(e.elements.buttonOpen.classList.remove("disabled"),e.elements.buttonClose.classList.remove("disabled")),e.elements.buttonStop.style.display=r?"":"none"}function cover_changes_changeName(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t=(0,utils.mG)(e);t!==e.elements.previousName&&(e.elements.name.innerText=t,(0,utils.Nl)(e,e.elements.name,t),e.elements.previousName=t)}function cover_changes_changeStyle(e){initializesubButtonIcon(e),(0,utils.JK)(e),handleCustomStyles(e)}const cover_styles_namespaceObject="* {\n    -webkit-tap-highlight-color: transparent !important;\n}\nha-card {\n    margin-top: 0 !important;\n    background: none !important;\n}\n\n.bubble-cover-card-container {\n    display: grid;\n    gap: 10px;\n    overflow: hidden;\n}\n\n.bubble-header {\n    display: flex;\n    align-items: center;\n}\n\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n    min-width: 38px;\n    min-height: 38px;\n    margin: 6px;\n    border-radius: var(--bubble-button-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n}\n\n.bubble-icon {\n    display: flex;\n    opacity: 0.6;\n}\n\n.is-on .bubble-icon {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 1em;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    font-weight: 600;\n    margin-left: 4px;\n    margin-right: 16px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-size: 13px;\n    margin: 2px 0;\n    white-space: nowrap;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-state {\n    font-size: 12px;\n    opacity: 0.7;\n    margin: 2px 0;\n    font-weight: normal;\n    white-space: nowrap;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-buttons {\n    display: grid;\n    align-self: center;\n    grid-auto-flow: column;\n    grid-gap: 18px;\n}\n\n.bubble-button.disabled {\n    opacity: 0.3 !important;\n    pointer-events: none !important;\n    cursor: none !important;\n}\n\n.bubble-button {\n    display: flex;\n    background: var(--bubble-cover-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    height: 42px;\n    border-radius: var(--bubble-cover-border-radius, var(--bubble-border-radius, 32px));\n    box-shadow: var(--bubble-cover-box-shadow, var(--bubble-button-box-shadow, var(--bubble-box-shadow, none)));\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    border: var(--bubble-cover-border, var(--bubble-border, none));\n}\n\n.large .bubble-cover-card-container {\n  height: 56px;\n  display: flex;\n  background: var(--bubble-cover-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n  border-radius: var(--bubble-cover-border-radius, var(--bubble-border-radius, 32px));\n  box-shadow: var(--bubble-cover-box-shadow, var(--bubble-button-box-shadow, var(--bubble-box-shadow, none)));\n  border: var(--bubble-cover-border, var(--bubble-border, none));\n}\n\n.large .bubble-buttons .bubble-icon {\n  color: var(--primary-text-color) !important;\n  opacity: 1;\n}\n\n.large .bubble-header-container {\n    height: 56px;\n}\n\n.large .bubble-header {\n    width: 100%;\n}\n\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  align-content: center;\n  border: none;\n  margin: 8px 6px 8px 8px;\n}\n\n.large .bubble-icon {\n  align-items: center;\n}\n\n.large .bubble-buttons {\n  display: flex;\n  position: relative;\n  right: 18px;\n  align-self: center;\n  grid-gap: 18px;\n}\n\n.large .bubble-button,\n.large .bubble-sub-button {\n  box-shadow: none;\n  border: none;\n}\n\n.large .bubble-sub-button-container {\n  margin-right: 14px;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, min-content);\n  grid-template-rows: repeat(2, 1fr);\n  grid-auto-flow: column;\n  width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n";function cover_create_createStructure(e){e.elements={},e.elements.coverCardContainer=(0,utils.n)("div","bubble-cover-card-container bubble-container cover-container"),e.elements.headerContainer=(0,utils.n)("div","bubble-header header-container"),e.elements.buttonsContainer=(0,utils.n)("div","bubble-buttons buttons-container"),e.elements.iconContainer=(0,utils.n)("div","bubble-icon-container icon-container"),e.elements.icon=(0,utils.n)("ha-icon","bubble-icon"),e.elements.nameContainer=(0,utils.n)("div","bubble-name-container name-container"),e.elements.name=(0,utils.n)("div","bubble-name name"),e.elements.state=(0,utils.n)("div","bubble-state state"),e.elements.buttonOpen=(0,utils.n)("div","bubble-button bubble-open button open"),e.elements.buttonStop=(0,utils.n)("div","bubble-button bubble-stop button stop"),e.elements.buttonClose=(0,utils.n)("div","bubble-button bubble-close button close"),e.elements.iconOpen=(0,utils.n)("ha-icon","bubble-icon bubble-icon-open"),e.elements.iconStop=(0,utils.n)("ha-icon","bubble-icon bubble-icon-stop"),e.elements.iconStop.icon="mdi:stop",e.elements.iconClose=(0,utils.n)("ha-icon","bubble-icon bubble-icon-close"),e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=cover_styles_namespaceObject,e.elements.customStyle=(0,utils.n)("style"),e.elements.iconContainer.appendChild(e.elements.icon),e.elements.headerContainer.appendChild(e.elements.iconContainer),e.elements.headerContainer.appendChild(e.elements.nameContainer),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonsContainer.appendChild(e.elements.buttonOpen),e.elements.buttonsContainer.appendChild(e.elements.buttonStop),e.elements.buttonsContainer.appendChild(e.elements.buttonClose),e.elements.buttonOpen.appendChild(e.elements.iconOpen),e.elements.buttonOpen.addEventListener("click",(()=>{const t=e.config.open_service??"cover.open_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),e.elements.buttonStop.appendChild(e.elements.iconStop),e.elements.buttonStop.addEventListener("click",(()=>{const t=e.config.stop_service??"cover.stop_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),e.elements.buttonClose.appendChild(e.elements.iconClose),e.elements.buttonClose.addEventListener("click",(()=>{const t=e.config.close_service??"cover.close_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),addActions(e.elements.iconContainer,e.config),e.content.innerHTML="",e.content.appendChild(e.elements.coverCardContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.coverCardContainer.appendChild(e.elements.headerContainer),e.elements.coverCardContainer.appendChild(e.elements.buttonsContainer),e.elements.coverCardContainer.addEventListener("click",(()=>(0,utils.jp)("selection"))),e.cardType="cover"}function handleCover(e){"cover"!==e.cardType&&cover_create_createStructure(e),cover_changes_changeIcon(e),cover_changes_changeName(e),changeState(e),changeSubButtonState(e,e.content,e.elements.headerContainer),cover_changes_changeStyle(e)}const empty_column_styles_namespaceObject=".empty-column {\n    display: flex;\n    width: 100%;\n}\n";function empty_column_create_createStructure(e){e.elements={},e.elements.emptyColumnCard=(0,utils.n)("div","bubble-empty-column empty-column"),e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=empty_column_styles_namespaceObject,e.elements.customStyle=(0,utils.n)("style"),e.content.innerHTML="",e.content.appendChild(e.elements.emptyColumnCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="empty-column"}function handleEmptyColumn(e){"empty-column"!==e.cardType&&empty_column_create_createStructure(e)}function media_player_changes_changeIcon(e){const t=(0,utils.$C)(e),n=(0,utils.sW)(e),o=(0,utils.Qp)(e),a=e.elements.image.style.backgroundImage,i=e.elements.icon.icon,r=e.elements.icon.style.color;if(""!==o){const t="url("+o+")";a!==t&&(e.elements.image.style.backgroundImage=t),"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),""!==e.elements.image.style.display&&(e.elements.image.style.display="")}else if(""!==n){i!==n&&(e.elements.icon.icon=n);const o=t?"var(--accent-color)":"inherit";r!==o&&(e.elements.icon.style.color=o),""!==e.elements.icon.style.display&&(e.elements.icon.style.display=""),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}else"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}function changeBackground(e){const t=(0,utils.$C)(e),n=(0,utils.Qp)(e),o=e.config.cover_background,a=e.elements.coverBackground.style.backgroundImage;if(o&&t&&n){const t="url("+n+")";a!==t&&(e.elements.coverBackground.style.backgroundImage=t)}else""!==a&&(e.elements.coverBackground.style.backgroundImage="")}function media_player_changes_changeName(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t=(0,utils.mG)(e);t!==e.previousName&&(e.elements.name.innerText=t,e.previousName=t,(0,utils.Nl)(e,e.elements.name,t))}function changeMediaInfo(e){const t=(0,utils.D$)(e,"media_title"),n=(0,utils.D$)(e,"media_artist"),o=t+n;o!==e.previousMediaState&&(e.elements.artist.style.display=""===n?"none":"flex",e.previousMediaState=o,(0,utils.Nl)(e,e.elements.title,t),(0,utils.Nl)(e,e.elements.artist,n))}function changeDisplayedInfo(e){(0,utils.D$)(e,"media_title");const t=""===(0,utils.D$)(e,"media_artist");e.elements.mediaInfoContainer.style.display=t?"none":"",e.elements.nameContainer.style.display=t?"":"none"}function changes_changeSlider(e){if((0,utils.md)(e,"media_player")&&!1===e.dragging&&e.elements.rangeFill){const t=100*(0,utils.D$)(e,"volume_level");e.elements.rangeFill.style.transform=`translateX(${t}%)`}}function media_player_changes_changeStatus(e){"unavailable"===(0,utils.Gu)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable"),(0,utils.$C)(e)?e.card.classList.add("is-on"):e.card.classList.remove("is-on")}function changePlayPauseIcon(e){const t="playing"===(0,utils.Gu)(e),n=e.elements.playPauseButton.clicked;t?e.elements.playPauseButton.setAttribute("icon",n?"mdi:play":"mdi:pause"):e.elements.playPauseButton.setAttribute("icon",n?"mdi:pause":"mdi:play"),e.elements.playPauseButton.clicked=!1}function changePowerIcon(e){const t=(0,utils.$C)(e);e.elements.powerButton.style.color=t?"var(--accent-color)":""}function changeVolumeIcon(e){const t=e.elements.volumeButton.isHidden,n=t?"1":"0",o=t?"mdi:volume-high":"mdi:close";e.elements.volumeButton.setAttribute("icon",o),e.elements.mediaInfoContainer.style.opacity=n,e.elements.nameContainer.style.opacity=n,e.elements.subButtonContainer&&(e.elements.subButtonContainer.style.opacity=n),e.elements.previousButton.style.opacity=n,e.elements.nextButton.style.opacity=n,e.elements.powerButton.style.opacity=n,e.elements.volumeButton.isHidden=!t}function changeMuteIcon(e){const t=!0===(0,utils.D$)(e,"is_volume_muted"),n=e.elements.muteButton.clicked;e.elements.muteButton.style.color=t?n?"":"var(--accent-color)":n?"var(--accent-color)":"",e.elements.muteButton.clicked=!1}function media_player_changes_changeStyle(e){initializesubButtonIcon(e),(0,utils.JK)(e),handleCustomStyles(e);const t=(0,utils.Gu)(e),n="off"!==t&&"unknown"!==t;e.config.hide?.power_button&&"none"!==e.elements.powerButton.style.display?e.elements.powerButton.style.display="none":e.config.hide?.power_button||"none"!==e.elements.powerButton.style.display||(e.elements.powerButton.style.display=""),!e.config.hide?.previous_button&&(e.editor||n)||"none"===e.elements.previousButton.style.display?e.config.hide?.previous_button||!e.editor&&!n||"none"!==e.elements.previousButton.style.display||(e.elements.previousButton.style.display=""):e.elements.previousButton.style.display="none",!e.config.hide?.next_button&&(e.editor||n)||"none"===e.elements.nextButton.style.display?e.config.hide?.next_button||!e.editor&&!n||"none"!==e.elements.nextButton.style.display||(e.elements.nextButton.style.display=""):e.elements.nextButton.style.display="none",!e.config.hide?.volume_button&&(e.editor||n)||"none"===e.elements.volumeButton.style.display?e.config.hide?.volume_button||!e.editor&&!n||"none"!==e.elements.volumeButton.style.display||(e.elements.volumeButton.style.display=""):e.elements.volumeButton.style.display="none",!e.config.hide?.play_pause_button&&(e.editor||n)||"none"===e.elements.playPauseButton.style.display?e.config.hide?.play_pause_button||!e.editor&&!n||"none"!==e.elements.playPauseButton.style.display||(e.elements.playPauseButton.style.display=""):e.elements.playPauseButton.style.display="none"}function helpers_updateEntity(e,t){(0,utils.md)(e,"media_player")&&e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:(t/100).toFixed(2)})}const throttledUpdateEntity=(0,utils.nF)(helpers_updateEntity);function helpers_onSliderChange(e,t,n=!1){const o=e.elements.rangeSlider.getBoundingClientRect(),a=100*(t-o.left)/o.width,i=Math.round(Math.min(100,Math.max(0,a)));if(e.elements.rangeFill.style.transform=`translateX(${i}%)`,n){if(e.dragging)return;helpers_updateEntity(e,i)}else helpers_updateEntity(e,i)}const media_player_styles_namespaceObject="* {\n    -webkit-tap-highlight-color: transparent !important;\n}\n\nha-card {\n    margin-top: 0;\n    background: none;\n    opacity: 1;\n    overflow: visible !important;\n}\n.is-unavailable {\n    opacity: 0.5;\n}\n\n.bubble-media-player-container {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: var(--bubble-media-player-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    touch-action: pan-y;\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n    box-shadow: var(--bubble-media-player-box-shadow, var(--bubble-box-shadow, none));\n    border: var(--bubble-media-player-border, var(--bubble-border, none));\n}\n\n.bubble-media-player {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    transition: background-color 1.5s;\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n    background-color: rgba(0,0,0,0);\n}\n\n.bubble-button-container {\n    display: inline-grid;\n    grid-auto-flow: column;\n    gap: 10px;\n    align-self: center;\n    margin-right: 8px;\n}\n\n.bubble-play-pause-button,\n.bubble-previous-button,\n.bubble-next-button,\n.bubble-volume-button,\n.bubble-power-button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, 32px));\n    padding: 6px;\n    height: 24px;\n    width: 24px;\n    transition: background 0.3s ease;\n    align-self: center;\n}\n\n.bubble-play-pause-button {\n    background-color: var(--bubble-accent-color, var(--accent-color));\n}\n\n.bubble-volume-slider {\n    position: absolute;\n    width: calc(100% - 150px);\n    height: 38px;\n    left: 50px;\n    overflow: hidden;\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n    z-index: 1;\n    background-color: var(--bubble-media-player-slider-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    opacity: 1;\n    transition: opacity .2s, transform .2s;\n    transform: translateX(0);\n}\n\n.bubble-range-value {\n    display: flex;\n    justify-content: flex-end;\n    height: 38px;\n    align-items: center;\n    padding-right: 14px;\n    font-size: 12px;\n    opacity: 0.8;\n}\n\n.bubble-mute-button {\n    opacity: 1;\n    transition: opacity .2s, transform .2s;\n    transform: translateX(0);\n}\n\n.is-hidden {\n    opacity: 0 !important;\n    pointer-events: none;\n    transform: translateX(14px);\n}\n\n.bubble-range-fill {\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    left: -100%;\n    transition: all .3s;\n    background-color: var(--accent-color);\n}\n\n.is-dragging .bubble-range-fill {\n    transition: none;\n}\n\n.is-light .bubble-range-fill {\n    opacity: 0.5;\n}\n\n.is-unavailable .bubble-button-card {\n    cursor: not-allowed;\n}\n\n.bubble-range-slider {\n    cursor: ew-resize;\n}\n.is-unavailable .bubble-range-slider {\n    cursor: not-allowed;\n}\n\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: 38px;\n    height: 38px;\n    min-width: 38px;\n    min-height: 38px;\n    align-items: center;\n    justify-content: center;\n    margin: 6px;\n    border-radius: var(--bubble-media-player-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-media-player-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));;\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.bubble-icon {\n    opacity: 0.6;\n}\n\n.is-on .bubble-icon {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n\n.bubble-icon,\n.bubble-mute-button {\n    display: flex;\n    position: absolute;\n    height: 38px;\n    width: 38px;\n    justify-content: center;\n    align-items: center;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-media-info-container {\n    display: flex;\n    line-height: 14px;\n    font-size: 12px;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    margin-left: 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-title,\n.bubble-name,\n.bubble-state,\n.bubble-artist {\n    display: flex;\n    margin: 2px 0;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-title {\n    font-weight: 600;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 1em;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    font-weight: 600;\n    margin-left: 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-size: 13px;\n    margin: 2px 0;\n}\n\n.bubble-state {\n    font-size: 12px;\n    opacity: 0.7;\n    margin: 2px 0;\n    font-weight: normal;\n}\n\n.bubble-sub-button-container {\n    right: 0 !important;\n}\n\n.bubble-background-container {\n    display: flex;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    border-radius: inherit;\n    overflow: hidden;\n}\n\n.bubble-cover-background {\n    display: flex;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    background-position: 50%;\n    filter: blur(50px);\n    opacity: 0.5;\n}\n\n@media screen and (max-width: 250px) {\n    .bubble-previous-button {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 206px) {\n    .bubble-next-button {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 160px) {\n    .bubble-volume-button {\n        display: none;\n    }\n}\n\n@keyframes tap-feedback {\n    0% {transform: translateX(-100%); opacity: 0;}\n    64% {transform: translateX(0); opacity: 0.1;}\n    100% {transform: translateX(100%); opacity: 0;}\n}\n\n.large .bubble-media-player-container {\n  height: 56px;\n  border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n}\n\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  margin-left: 8px;\n}\n\n.large .bubble-play-pause-button {\n  display: flex;\n  height: 42px;\n  width: 42px;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n}\n\n.large .bubble-volume-slider {\n  height: 42px;\n  border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));\n  left: 60px;\n  width: calc(100% - 168px);\n}\n\n.large .bubble-range-value {\n  place-items: center;\n  height: 42px;\n}\n\n.large .bubble-button-container {\n  align-items: center;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, 1fr);\n  grid-template-rows: repeat(2, minmax(auto, max-content));\n  grid-auto-flow: column;\n  width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n";let volumeLevel;function media_player_create_createStructure(e){e.dragging=!1,e.elements={},e.elements.mediaPlayerContainer=(0,utils.n)("div","bubble-media-player-container bubble-container"),e.elements.mediaPlayerCard=(0,utils.n)("div","bubble-media-player"),e.elements.mediaInfoContainer=(0,utils.n)("div","bubble-media-info-container"),e.elements.nameContainer=(0,utils.n)("div","bubble-name-container"),e.elements.buttonContainer=(0,utils.n)("div","bubble-button-container"),e.elements.iconContainer=(0,utils.n)("div","bubble-icon-container"),e.elements.backgroundContainer=(0,utils.n)("div","bubble-background-container"),e.elements.coverBackground=(0,utils.n)("div","bubble-cover-background"),e.elements.playPauseButton=(0,utils.n)("ha-icon","bubble-play-pause-button"),e.elements.previousButton=(0,utils.n)("ha-icon","bubble-previous-button"),e.elements.previousButton.setAttribute("icon","mdi:skip-previous"),e.elements.nextButton=(0,utils.n)("ha-icon","bubble-next-button"),e.elements.nextButton.setAttribute("icon","mdi:skip-next"),e.elements.volumeButton=(0,utils.n)("ha-icon","bubble-volume-button"),e.elements.volumeButton.setAttribute("icon","mdi:volume-high"),e.elements.powerButton=(0,utils.n)("ha-icon","bubble-power-button"),e.elements.powerButton.setAttribute("icon","mdi:power-standby"),e.elements.muteButton=(0,utils.n)("ha-icon","bubble-mute-button is-hidden"),e.elements.muteButton.setAttribute("icon","mdi:volume-off"),e.elements.title=(0,utils.n)("div","bubble-title"),e.elements.artist=(0,utils.n)("div","bubble-artist"),e.elements.name=(0,utils.n)("div","bubble-name"),e.elements.state=(0,utils.n)("div","bubble-state"),e.elements.icon=(0,utils.n)("ha-icon","bubble-icon"),e.elements.image=(0,utils.n)("div","bubble-entity-picture"),e.elements.style=(0,utils.n)("style"),e.elements.customStyle=(0,utils.n)("style"),e.elements.style.innerText=media_player_styles_namespaceObject,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.iconContainer.appendChild(e.elements.muteButton),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.mediaInfoContainer.appendChild(e.elements.title),e.elements.mediaInfoContainer.appendChild(e.elements.artist),e.elements.buttonContainer.appendChild(e.elements.powerButton),e.elements.buttonContainer.appendChild(e.elements.previousButton),e.elements.buttonContainer.appendChild(e.elements.nextButton),e.elements.buttonContainer.appendChild(e.elements.volumeButton),e.elements.buttonContainer.appendChild(e.elements.playPauseButton),e.elements.mediaPlayerCard.appendChild(e.elements.iconContainer),e.elements.mediaPlayerCard.appendChild(e.elements.mediaInfoContainer),e.elements.mediaPlayerCard.appendChild(e.elements.nameContainer),e.elements.mediaPlayerCard.appendChild(e.elements.buttonContainer),e.elements.backgroundContainer.appendChild(e.elements.coverBackground),e.elements.mediaPlayerContainer.appendChild(e.elements.backgroundContainer),e.content.innerHTML="",e.content.appendChild(e.elements.mediaPlayerContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.mediaPlayerContainer.appendChild(e.elements.mediaPlayerCard),addActions(e.elements.icon,e.config,e.config.entity),addActions(e.elements.image,e.config,e.config.entity),e.elements.volumeSliderContainer=(0,utils.n)("div","bubble-volume-slider is-hidden"),createSlider(e,e.elements.volumeSliderContainer),e.elements.mediaPlayerCard.appendChild(e.elements.volumeSliderContainer),e.elements.volumeButton.addEventListener("click",(()=>{e.elements.volumeSliderContainer.classList.toggle("is-hidden"),e.elements.muteButton.classList.toggle("is-hidden"),e.elements.icon.classList.toggle("is-hidden"),e.elements.image.classList.toggle("is-hidden"),changeVolumeIcon(e),volumeLevel=Math.round(100*(0,utils.D$)(e,"volume_level"))+"%"})),e.elements.powerButton.addEventListener("click",(()=>{const t=(0,utils.$C)(e);e._hass.callService("media_player",t?"turn_off":"turn_on",{entity_id:e.config.entity})})),e.elements.muteButton.addEventListener("click",(()=>{const t=!0===(0,utils.D$)(e,"is_volume_muted");e._hass.callService("media_player","volume_mute",{entity_id:e.config.entity,is_volume_muted:!t}),e.elements.muteButton.clicked=!0})),e.elements.previousButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_previous_track",{entity_id:e.config.entity})})),e.elements.nextButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_next_track",{entity_id:e.config.entity})})),e.elements.playPauseButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_play_pause",{entity_id:e.config.entity}),e.elements.playPauseButton.clicked=!0})),e.elements.mediaPlayerContainer.addEventListener("click",(()=>(0,utils.jp)("selection"))),e.cardType="media-player"}function createSlider(e,t){let n=0;function o(t){t.stopPropagation();const o=t.pageX||(t.touches?t.touches[0].pageX:0);Math.abs(n-o)>10&&helpers_onSliderChange(e,o,!0);const a=e.elements.rangeSlider.getBoundingClientRect(),i=100*(o-a.left)/a.width,r=Math.min(100,Math.max(0,i));e.elements.rangeValue.innerText=Math.round(r)+"%"}function a(n){n.stopPropagation(),e.dragging=!1;const i=n.pageX||(n.touches?n.touches[0].pageX:0);helpers_onSliderChange(e,i),t.classList.remove("is-dragging"),t.removeEventListener("pointermove",o),t.removeEventListener("pointerup",a);const r=e.elements.rangeSlider.getBoundingClientRect(),l=100*(i-r.left)/r.width,s=Math.min(100,Math.max(0,l));e.elements.rangeValue.innerText=Math.round(s)+"%"}volumeLevel=Math.round(100*(0,utils.D$)(e,"volume_level"))+"%",e.elements.rangeFill=(0,utils.n)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,utils.n)("div","bubble-range-slider range-slider"),e.elements.rangeValue=(0,utils.n)("div","bubble-range-value"),e.elements.rangeSlider.appendChild(e.elements.rangeValue),e.elements.rangeSlider.appendChild(e.elements.rangeFill),t.appendChild(e.elements.rangeSlider),t.addEventListener("pointercancel",(function(){e.dragging=!1,t.classList.remove("is-dragging"),t.removeEventListener("pointermove",o),t.removeEventListener("pointerup",a)})),t.addEventListener("pointerdown",(i=>{t.setPointerCapture(i.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,n=i.pageX||(i.touches?i.touches[0].pageX:0),t.classList.add("is-dragging"),t.addEventListener("pointermove",o),t.addEventListener("pointerup",a))})),e.elements.rangeValue.innerText=volumeLevel}function handleMediaPlayer(e){"media-player"!==e.cardType&&media_player_create_createStructure(e),media_player_changes_changeStatus(e),media_player_changes_changeName(e),changeMediaInfo(e),changeDisplayedInfo(e),media_player_changes_changeIcon(e),changeBackground(e),changeState(e),changes_changeSlider(e),changePlayPauseIcon(e),changeMuteIcon(e),changePowerIcon(e),changeSubButtonState(e,e.content,e.elements.buttonContainer,!0),media_player_changes_changeStyle(e)}function handleSelect(e){e.cardType,"select"!==e.cardType&&(create_createStructure(e),createDropdownStructure(e),createDropdownActions(e)),changeDropdownList(e,e.elements,e.config.entity,e.config),changeStatus(e),changeIcon(e),changeName(e),changeState(e),changeSubButtonState(e,e.content,e.elements.dropdownContainer,!0),changeStyle(e)}function getClimateColor(e){let t="";const n=e._hass.states[e.config.entity],o=(n.attributes.current_temperature,n.attributes.hvac_action),a=n.state,i="heating"===o||"heat"===a&&e.config.state_color,r="cooling"===o||"cool"===a&&e.config.state_color,l="off"!==a&&"unknown"!==a;switch(a){case"fan_only":t="var(--bubble-state-climate-fan-only-color, var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color))))";break;case"dry":t="var(--bubble-state-climate-dry-color, var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color))))";break;default:t=r?"var(--bubble-state-climate-cool-color, var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color))))":i?"var(--bubble-state-climate-heat-color, var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color))))":l&&e.config.state_color?"auto"===a?"var(--bubble-state-climate-auto-color, var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color))))":"heat_cool"===a?"var(--bubble-state-climate-heat-cool-color, var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color))))":"var(--bubble-climate-accent-color, var(--bubble-accent-color, var(--accent-color)))":""}return t}function climate_changes_changeIcon(e){const t=(0,utils.$C)(e),n=(0,utils.sW)(e),o=(0,utils.Qp)(e),a=e.elements.image.style.backgroundImage,i=e.elements.icon.icon,r=e.elements.icon.style.color;if(""!==o){const t="url("+o+")";a!==t&&(e.elements.image.style.backgroundImage=t),"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),""!==e.elements.image.style.display&&(e.elements.image.style.display="")}else if(""!==n){i!==n&&(e.elements.icon.icon=n);const o=t?`${getClimateColor(e)}`:"inherit";r!==o&&(e.elements.icon.style.color=o),""!==e.elements.icon.style.display&&(e.elements.icon.style.display=""),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}else"none"!==e.elements.icon.style.display&&(e.elements.icon.style.display="none"),"none"!==e.elements.image.style.display&&(e.elements.image.style.display="none")}function climate_changes_changeName(e){if(e.config.styles?.includes("card.querySelector('.bubble-name').innerText"))return;const t=(0,utils.mG)(e);t!==e.previousName&&e.elements.name&&(e.elements.name.innerText=t,e.previousName=t,(0,utils.Nl)(e,e.elements.name,t))}function climate_changes_changeStatus(e){"unavailable"===(0,utils.Gu)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable"),(0,utils.$C)(e)?e.card.classList.add("is-on"):e.card.classList.remove("is-on")}function changeTemperature(e){const t=(0,utils.D$)(e,"temperature");""===t?e.elements.temperatureContainer?.classList.add("hidden"):e.elements.temperatureContainer?.classList.remove("hidden"),t!==e.previousTemp&&(e.previousTemp=t,e.elements.tempDisplay&&(e.elements.tempDisplay.innerText=parseFloat(t).toFixed(1)))}function changeTargetTempLow(e){const t=(0,utils.D$)(e,"target_temp_low"),n=e.config.hide_target_temp_low;""===t?e.elements.targetTemperatureContainer?.classList.add("hidden"):e.elements.targetTemperatureContainer?.classList.remove("hidden"),n?e.elements.lowTempContainer?.classList.add("hidden"):e.elements.lowTempContainer?.classList.remove("hidden"),t!==e.previousTargetTempLow&&(e.previousTargetTempLow=t,e.elements.lowTempDisplay&&(e.elements.lowTempDisplay.innerText=parseFloat(t).toFixed(1)))}function changeTargetTempHigh(e){const t=(0,utils.D$)(e,"target_temp_high");e.config.hide_target_temp_high?e.elements.highTempContainer?.classList.add("hidden"):e.elements.highTempContainer?.classList.remove("hidden"),t!==e.previousTargetTempHigh&&(e.previousTargetTempHigh=t,e.elements.highTempDisplay&&(e.elements.highTempDisplay.innerText=parseFloat(t).toFixed(1)))}function climate_changes_changeStyle(e){initializesubButtonIcon(e),(0,utils.JK)(e),handleCustomStyles(e);const t=(0,utils.Gu)(e);e.previousState!==t&&(e.previousState=t,e.elements.colorBackground.style.backgroundColor=`var(--bubble-climate-background-color, ${getClimateColor(e)})`),e.config.card_layout,e.elements.hvacModeDropdown}const climate_styles_namespaceObject="* {\n    -webkit-tap-highlight-color: transparent !important;\n}\n\nha-card {\n    margin-top: 0;\n    background: none;\n    opacity: 1;\n}\n.is-unavailable {\n    opacity: 0.5;\n}\n\n.bubble-climate-container {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: var(--bubble-climate-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    border-radius: var(--bubble-climate-border-radius, var(--bubble-border-radius, 32px));\n    box-shadow: var(--bubble-climate-box-shadow, var(--bubble-box-shadow, none));\n    overflow: visible;\n    touch-action: pan-y;\n    border: var(--bubble-climate-border, var(--bubble-border, none));\n}\n\n.bubble-climate {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    transition: background-color 1.5s;\n    background-color: rgba(0,0,0,0);\n}\n\n.bubble-button-container {\n    display: inline-grid;\n    grid-auto-flow: column;\n    gap: 10px;\n    align-self: center;\n    align-items: center;\n    margin-right: 8px;\n}\n\n.bubble-temperature-container, .bubble-low-temp-container, .bubble-high-temp-container {\n    display: inline-flex;\n    position: relative;\n    font-size: 12px;\n    white-space: nowrap;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    height: 100%;\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n    background-color: var(--bubble-climate-button-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))));\n}\n\n.bubble-low-temp-container {\n    color: var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)));\n}\n\n.bubble-high-temp-container {\n    color: var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)));\n}\n\n.bubble-target-temperature-container {\n    display: flex;\n    gap: 10px;\n}\n\n.bubble-climate-minus-button,\n.bubble-climate-plus-button {\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    width: 36px;\n    height: 36px;\n    vertical-align: middle;\n    font-size: 18px;\n    color: var(--primary-text-color);\n    cursor: pointer;\n}\n\n.bubble-climate-minus-button-icon,\n.bubble-climate-plus-button-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    --mdc-icon-size: 16px;\n}\n\n.bubble-feedback-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n    overflow: hidden;\n    pointer-events: none;\n}\n\n.bubble-feedback-element {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0);\n    pointer-events: none;\n}\n\n.bubble-color-background {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    border-radius: var(--bubble-climate-border-radius, var(--bubble-border-radius, 32px));\n    opacity: 0.7;\n    transition: background-color 2s ease;\n}\n\n.is-unavailable .bubble-climate {\n    cursor: not-allowed;\n}\n\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: 38px;\n    height: 38px;\n    min-width: 38px;\n    min-height: 38px;\n    align-items: center;\n    justify-content: center;\n    margin: 6px;\n    border-radius: var(--bubble-climate-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-climate-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.bubble-icon {\n    opacity: 0.6;\n}\n\n.is-on .bubble-icon {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n\n.bubble-icon {\n    display: flex;\n    position: absolute;\n    height: 38px;\n    width: 38px;\n    justify-content: center;\n    align-items: center;\n    transition: all 2s;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-name,\n.bubble-state {\n    display: flex;\n    margin: 2px 0;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 1em;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    font-weight: 600;\n    margin-left: 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-size: 13px;\n    margin: 2px 0;\n}\n\n.bubble-state {\n    font-size: 12px;\n    opacity: 0.7;\n    margin: 2px 0;\n    font-weight: normal;\n}\n\n.bubble-sub-button-container {\n    right: 0 !important;\n}\n\n.hidden {\n    display: none !important;\n}\n\n@keyframes tap-feedback {\n    0% {transform: translateX(-100%); opacity: 0;}\n    64% {transform: translateX(0); opacity: 0.1;}\n    100% {transform: translateX(100%); opacity: 0;}\n}\n\n.large .bubble-climate-container {\n  height: 56px;\n  border-radius: var(--bubble-climate-border-radius, var(--bubble-border-radius, 32px));\n}\n\n.large .bubble-icon-container {\n  --mdc-icon-size: 24px;\n  min-width: 42px !important;\n  min-height: 42px !important;\n  margin-left: 8px;\n}\n\n.rows-2 .bubble-sub-button-container {\n  flex-direction: column;\n  gap: 4px !important;\n  display: grid !important;\n  grid-template-columns: repeat(1, min-content);\n  grid-template-rows: repeat(2, 1fr);\n  grid-auto-flow: column;\n  width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n  height: 20px !important;\n}\n";function climate_create_createStructure(e){e.dragging=!1,e.elements={};const t=e.config.entity,n=e._hass.states[t],o="°C"===e._hass.config.unit_system.temperature,a=n.attributes.target_temp_step?n.attributes.target_temp_step:o?.5:1;function i(t,n,o){const a=(0,utils.n)("div","bubble-climate-minus-button"),i=(0,utils.n)("div","bubble-climate-plus-button"),r=(0,utils.n)("ha-icon","bubble-climate-minus-button-icon");r.setAttribute("icon","mdi:minus"),a.appendChild(r),addFeedback(a);const l=(0,utils.n)("ha-icon","bubble-climate-plus-button-icon");let s,c;l.setAttribute("icon","mdi:plus"),i.appendChild(l),addFeedback(i),"temperature"===n?(e.elements.tempDisplay=(0,utils.n)("div","bubble-temperature-display"),s=e.elements.tempDisplay):"target_temp_low"===n?(e.elements.lowTempDisplay=(0,utils.n)("div","bubble-low-temperature-display"),s=e.elements.lowTempDisplay):"target_temp_high"===n&&(e.elements.highTempDisplay=(0,utils.n)("div","bubble-high-temperature-display"),s=e.elements.highTempDisplay),t.appendChild(a),t.appendChild(s),t.appendChild(i);let d=parseFloat((0,utils.D$)(e,n))||0,u=d;function p(t){"temperature"===n?e.elements.tempDisplay.innerText=t.toFixed(1):"target_temp_low"===n?e.elements.lowTempDisplay.innerText=t.toFixed(1):"target_temp_high"===n&&(e.elements.highTempDisplay.innerText=t.toFixed(1))}function b(){const t=parseFloat((0,utils.D$)(e,n))||0;t!==u&&(d=t,u=t)}function h(){b();const t={entity_id:e.config.entity};"target_temp_low"===n?(t.target_temp_low=d,t.target_temp_high=(0,utils.D$)(e,"target_temp_high")):"target_temp_high"===n?(t.target_temp_high=d,t.target_temp_low=(0,utils.D$)(e,"target_temp_low")):t[n]=d,e._hass.callService("climate","set_temperature",t)}a.addEventListener("click",(()=>{b(),d=parseFloat((d-o).toFixed(1)),p(d),clearTimeout(c),c=setTimeout(h,700)})),i.addEventListener("click",(()=>{b(),d=parseFloat((d+o).toFixed(1)),p(d),clearTimeout(c),c=setTimeout(h,700)}))}e.elements.climateContainer=(0,utils.n)("div","bubble-climate-container bubble-container"),e.elements.climateCard=(0,utils.n)("div","bubble-climate"),e.elements.buttonContainer=(0,utils.n)("div","bubble-button-container"),e.elements.nameContainer=(0,utils.n)("div","bubble-name-container"),e.elements.iconContainer=(0,utils.n)("div","bubble-icon-container"),e.elements.name=(0,utils.n)("div","bubble-name"),e.elements.state=(0,utils.n)("div","bubble-state"),e.elements.icon=(0,utils.n)("ha-icon","bubble-icon"),e.elements.image=(0,utils.n)("div","bubble-entity-picture entity-picture"),e.elements.colorBackground=(0,utils.n)("div","bubble-color-background"),e.elements.style=(0,utils.n)("style"),e.elements.customStyle=(0,utils.n)("style"),e.elements.style.innerText=climate_styles_namespaceObject,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state);const r=void 0!==n?.attributes?.target_temp_low,l=void 0!==n?.attributes?.target_temp_high;void 0!==n?.attributes?.temperature&&(e.elements.temperatureContainer=(0,utils.n)("div","bubble-temperature-container"),i(e.elements.temperatureContainer,"temperature",a),e.elements.buttonContainer.appendChild(e.elements.temperatureContainer)),(r||l)&&(e.elements.targetTemperatureContainer=(0,utils.n)("div","bubble-target-temperature-container"),r&&(e.elements.lowTempContainer=(0,utils.n)("div","bubble-low-temp-container"),i(e.elements.lowTempContainer,"target_temp_low",a),e.elements.targetTemperatureContainer.appendChild(e.elements.lowTempContainer)),l&&(e.elements.highTempContainer=(0,utils.n)("div","bubble-high-temp-container"),i(e.elements.highTempContainer,"target_temp_high",a),e.elements.targetTemperatureContainer.appendChild(e.elements.highTempContainer)),e.elements.buttonContainer.appendChild(e.elements.targetTemperatureContainer)),e.elements.climateCard.appendChild(e.elements.iconContainer),e.elements.climateCard.appendChild(e.elements.nameContainer),e.elements.climateCard.appendChild(e.elements.buttonContainer),e.elements.climateContainer.appendChild(e.elements.colorBackground),e.elements.climateContainer.appendChild(e.elements.climateCard),e.content.innerHTML="",e.content.appendChild(e.elements.climateContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),addActions(e.elements.iconContainer,e.config),e.cardType="climate"}function handleClimate(e){"climate"!==e.cardType&&climate_create_createStructure(e),climate_changes_changeStatus(e),climate_changes_changeName(e),climate_changes_changeIcon(e),changeState(e),changeTemperature(e),changeTargetTempLow(e),changeTargetTempHigh(e),changeSubButtonState(e,e.content,e.elements.buttonContainer,!0),climate_changes_changeStyle(e)}const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(e,t,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let t=this.o;const n=this.t;if(e&&void 0===t){const e=void 0!==n&&1===n.length;e&&(t=o.get(n)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(n,t))}return t}toString(){return this.cssText}}const r=e=>new n("string"==typeof e?e:e+"",void 0,s),i=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new n(o,e,s)},S=(n,o)=>{if(e)n.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of o){const o=document.createElement("style"),a=t.litNonce;void 0!==a&&o.setAttribute("nonce",a),o.textContent=e.cssText,n.appendChild(o)}},c=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return r(t)})(e):e,{is:reactive_element_i,defineProperty:reactive_element_e,getOwnPropertyDescriptor:reactive_element_r,getOwnPropertyNames:h,getOwnPropertySymbols:reactive_element_o,getPrototypeOf:reactive_element_n}=Object,a=globalThis,reactive_element_c=a.trustedTypes,l=reactive_element_c?reactive_element_c.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(e,t)=>e,u={toAttribute(e,t){switch(t){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},f=(e,t)=>!reactive_element_i(e,t),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&reactive_element_e(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:a}=reactive_element_r(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const i=o?.call(this);a.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const e=reactive_element_n(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const e=this.properties,t=[...h(e),...reactive_element_o(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const a=(void 0!==n.converter?.toAttribute?n.converter:u).toAttribute(t,n.type);this._$Em=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:u;this._$Em=o,this[o]=a.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??f)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,p?.({ReactiveElement:b}),(a.reactiveElementVersions??=[]).push("2.0.4");const lit_html_t=globalThis,lit_html_i=lit_html_t.trustedTypes,lit_html_s=lit_html_i?lit_html_i.createPolicy("lit-html",{createHTML:e=>e}):void 0,lit_html_e="$lit$",lit_html_h=`lit$${Math.random().toFixed(9).slice(2)}$`,lit_html_o="?"+lit_html_h,lit_html_n=`<${lit_html_o}>`,lit_html_r=document,lit_html_l=()=>lit_html_r.createComment(""),lit_html_c=e=>null===e||"object"!=typeof e&&"function"!=typeof e,lit_html_a=Array.isArray,lit_html_u=e=>lit_html_a(e)||"function"==typeof e?.[Symbol.iterator],lit_html_d="[ \t\n\f\r]",lit_html_f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${lit_html_d}(?:([^\\s"'>=/]+)(${lit_html_d}*=${lit_html_d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),lit_html_p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,lit_html_y=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),x=lit_html_y(1),lit_html_b=lit_html_y(2),w=lit_html_y(3),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=lit_html_r.createTreeWalker(lit_html_r,129);function P(e,t){if(!lit_html_a(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==lit_html_s?lit_html_s.createHTML(t):t}const V=(e,t)=>{const n=e.length-1,o=[];let a,i=2===t?"<svg>":3===t?"<math>":"",r=lit_html_f;for(let t=0;t<n;t++){const n=e[t];let l,s,c=-1,d=0;for(;d<n.length&&(r.lastIndex=d,s=r.exec(n),null!==s);)d=r.lastIndex,r===lit_html_f?"!--"===s[1]?r=v:void 0!==s[1]?r=_:void 0!==s[2]?($.test(s[2])&&(a=RegExp("</"+s[2],"g")),r=m):void 0!==s[3]&&(r=m):r===m?">"===s[0]?(r=a??lit_html_f,c=-1):void 0===s[1]?c=-2:(c=r.lastIndex-s[2].length,l=s[1],r=void 0===s[3]?m:'"'===s[3]?g:lit_html_p):r===g||r===lit_html_p?r=m:r===v||r===_?r=lit_html_f:(r=m,a=void 0);const u=r===m&&e[t+1].startsWith("/>")?" ":"";i+=r===lit_html_f?n+lit_html_n:c>=0?(o.push(l),n.slice(0,c)+lit_html_e+n.slice(c)+lit_html_h+u):n+lit_html_h+(-2===c?t:u)}return[P(e,i+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class N{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,i=0;const r=e.length-1,l=this.parts,[s,c]=V(e,t);if(this.el=N.createElement(s,n),C.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=C.nextNode())&&l.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(lit_html_e)){const t=c[i++],n=o.getAttribute(e).split(lit_html_h),r=/([.?@])?(.*)/.exec(t);l.push({type:1,index:a,name:r[2],strings:n,ctor:"."===r[1]?H:"?"===r[1]?I:"@"===r[1]?L:k}),o.removeAttribute(e)}else e.startsWith(lit_html_h)&&(l.push({type:6,index:a}),o.removeAttribute(e));if($.test(o.tagName)){const e=o.textContent.split(lit_html_h),t=e.length-1;if(t>0){o.textContent=lit_html_i?lit_html_i.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],lit_html_l()),C.nextNode(),l.push({type:2,index:++a});o.append(e[t],lit_html_l())}}}else if(8===o.nodeType)if(o.data===lit_html_o)l.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(lit_html_h,e+1));)l.push({type:7,index:a}),e+=lit_html_h.length-1}a++}}static createElement(e,t){const n=lit_html_r.createElement("template");return n.innerHTML=e,n}}function lit_html_S(e,t,n=e,o){if(t===T)return t;let a=void 0!==o?n._$Co?.[o]:n._$Cl;const i=lit_html_c(t)?void 0:t._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),void 0===i?a=void 0:(a=new i(e),a._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=a:n._$Cl=a),void 0!==a&&(t=lit_html_S(e,a._$AS(e,t.values),a,o)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??lit_html_r).importNode(t,!0);C.currentNode=o;let a=C.nextNode(),i=0,r=0,l=n[0];for(;void 0!==l;){if(i===l.index){let t;2===l.type?t=new R(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new z(a,this,e)),this._$AV.push(t),l=n[++r]}i!==l?.index&&(a=C.nextNode(),i++)}return C.currentNode=lit_html_r,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lit_html_S(this,e,t),lit_html_c(e)?e===E||null==e||""===e?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==T&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):lit_html_u(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&lit_html_c(this._$AH)?this._$AA.nextSibling.data=e:this.T(lit_html_r.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=N.createElement(P(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new M(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new N(e)),t}k(e){lit_html_a(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of e)o===t.length?t.push(n=new R(this.O(lit_html_l()),this.O(lit_html_l()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,a){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}_$AI(e,t=this,n,o){const a=this.strings;let i=!1;if(void 0===a)e=lit_html_S(this,e,t,0),i=!lit_html_c(e)||e!==this._$AH&&e!==T,i&&(this._$AH=e);else{const o=e;let r,l;for(e=a[0],r=0;r<a.length-1;r++)l=lit_html_S(this,o[n+r],t,r),l===T&&(l=this._$AH[r]),i||=!lit_html_c(l)||l!==this._$AH[r],l===E?e=E:e!==E&&(e+=(l??"")+a[r+1]),this._$AH[r]=l}i&&!o&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}}class L extends k{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){if((e=lit_html_S(this,e,t,0)??E)===T)return;const n=this._$AH,o=e===E&&n!==E||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==E&&(n===E||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){lit_html_S(this,e)}}const Z={M:lit_html_e,P:lit_html_h,A:lit_html_o,C:1,L:V,R:M,D:lit_html_u,V:lit_html_S,I:R,H:k,N:I,U:L,B:H,F:z},j=lit_html_t.litHtmlPolyfillSupport;j?.(N,R),(lit_html_t.litHtmlVersions??=[]).push("3.2.1");const B=(e,t,n)=>{const o=n?.renderBefore??t;let a=o._$litPart$;if(void 0===a){const e=n?.renderBefore??null;o._$litPart$=a=new R(t.insertBefore(lit_html_l(),e),e,void 0,n??{})}return a._$AI(e),a};class lit_element_r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=B(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const lit_element_i=globalThis.litElementPolyfillSupport;lit_element_i?.({LitElement:lit_element_r});const lit_element_o={_$AK:(e,t,n)=>{e._$AK(t,n)},_$AL:e=>e._$AL};function getButtonList(){return[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}]}function renderButtonEditor(e){let t={};"slider"===e._config.button_type&&(t={domain:["light","media_player","cover","input_number"]});let n=e._config.button_action||"",o=e._config?.button_type||"switch";return x`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            ${e.makeDropdown("Button type","button_type",getButtonList())}
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
    `}function editor_getButtonList(){return[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}]}function renderPopUpEditor(e){const t=e._config?.trigger??[];let n=e._config.button_action||"";return x`
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

                        ${e.makeDropdown("Button type","button_type",editor_getButtonList())}
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
    `}function renderSeparatorEditor(e){return x`
    <div class="card-config">
        ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
        <ha-textfield
            label="Name"
            .value="${e._config?.name||""}"
            .configValue="${"name"}"
            @input="${e._valueChanged}"
        ></ha-textfield>
        ${e.makeDropdown("Icon","icon")}
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
        <ha-alert alert-type="info">This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...</ha-alert>
        ${e.makeVersion()}
  </div>
`}function renderHorButtonStackEditor(e){if(!e.buttonAdded)for(e.buttonAdded=!0,e.buttonIndex=0;e._config[e.buttonIndex+1+"_link"];)e.buttonIndex++;return x`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <div id="buttons-container">
                ${makeButton(e)}
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
    `}function makeButton(e){let t=[];for(let n=1;n<=e.buttonIndex;n++)t.push(x`
            <div class="${n}_button">
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:border-radius"></ha-icon>
                        Button ${n} ${e._config[n+"_name"]?"- "+e._config[n+"_name"]:""}
                        <button class="icon-button header" @click="${()=>removeButton(e,n)}">
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
        `);return t}function removeButton(e,t){delete e._config[t+"_name"],delete e._config[t+"_icon"],delete e._config[t+"_link"],delete e._config[t+"_entity"],delete e._config[t+"_pir_sensor"];for(let n=t;n<e.buttonIndex;n++)e._config[n+"_name"]=e._config[n+1+"_name"],e._config[n+"_icon"]=e._config[n+1+"_icon"],e._config[n+"_link"]=e._config[n+1+"_link"],e._config[n+"_entity"]=e._config[n+1+"_entity"],e._config[n+"_pir_sensor"]=e._config[n+1+"_pir_sensor"];delete e._config[e.buttonIndex+"_name"],delete e._config[e.buttonIndex+"_icon"],delete e._config[e.buttonIndex+"_link"],delete e._config[e.buttonIndex+"_entity"],delete e._config[e.buttonIndex+"_pir_sensor"],e.buttonIndex--,(0,utils.rC)(e,"config-changed",{config:e._config})}function renderCoverEditor(e){return x`
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
    `}function renderClimateEditor(e){if("climate"===e._config.card_type&&!e.climateSubButtonsAdded&&e._config.entity){const t=e.hass.states[e._config.entity]?.attributes?.hvac_modes;e._config.sub_button&&0!==e._config.sub_button.length||(e._config.sub_button=[t?{name:"HVAC modes menu",select_attribute:"hvac_modes",state_background:!1,show_arrow:!1}:null].filter(Boolean)),e.climateSubButtonsAdded=!0}return x`
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
                    ${e.hass.states[e._config.entity]?.attributes?.target_temp_low?x`
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
                    ${e.hass.states[e._config.entity]?.attributes?.target_temp_high?x`
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
    `}function renderSelectEditor(e){const t=e._config.entity,n=(t?.startsWith("input_select")||t?.startsWith("select")||e._config.select_attribute,e.hass.states[t]?.attributes),o=e._selectable_attributes.some((e=>n?.[e])),a=Object.keys(e.hass.states[t]?.attributes||{}).map((n=>{let o=e.hass.states[t];return{label:e.hass.formatEntityAttributeName(o,n),value:n}})).filter((t=>e._selectable_attributes.includes(t.value)));return x`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.inputSelectList}
                .data=${e._config}
                .schema=${[{name:"entity",label:"Entity",selector:{entity:{}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            ${o?x`
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
    `}function renderMediaPlayerEditor(e){return x`
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
    `}function renderEmptyColumnEditor(e){return x`
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
    `}(globalThis.litElementVersions??=[]).push("4.1.1");const editor_styles_namespaceObject='div {\n    display: grid;\n    grid-gap: 12px;\n}\n\nha-combo-box[label="Card type"]::after {\n    content: "";\n    position: relative;\n    background-color: var(--background-color, var(--secondary-background-color));\n    display: block;\n    width: 100%;\n    height: 1px;\n    top: 12px;\n    margin-bottom: 12px !important;\n    opacity: 0.6;\n}\n\n#add-button {\n    margin: 0 0 14px 0;\n    color: var(--text-primary-color);\n    width: 100%;\n    height: 32px;\n    border-radius: 16px;\n    border: none;\n    background-color: var(--accent-color);\n    cursor: pointer;\n}\n\np {\n    margin-bottom: 4px;\n}\n\nha-icon, a, p, button, h4 {\n    color: var(--primary-text-color) !important;\n}\n\nhr {\n    display: inline-block;\n    width: 100%;\n    border: 1px solid var(--background-color, var(--secondary-background-color));\n    opacity: 0.6;\n    margin: 8px 0 0 0;\n}\n\ncode {\n    background: var(--accent-color);\n    background-blend-mode: darken;\n    padding: 2px 4px;\n    border-radius: 6px;\n}\n\n.button-header {\n    height: auto;\n    width: 100%;\n    display: inline-flex;\n    align-items: center;\n    margin: 0 8px;\n}\n\n.button-number {\n    display: inline-flex;\n    width: auto;\n}\n\n.remove-button {\n    display: inline-flex;\n    border-radius: 50%;\n    width: 24px;\n    height: 24px;\n    text-align: center;\n    line-height: 24px;\n    vertical-align: middle;\n    cursor: pointer;\n}\n\n.content {\n    margin: 12px 4px 14px 4px;\n}\n\nh4 > ha-icon {\n    margin: 8px;\n}\n\nha-textfield {\n    width: 100%;\n}\n\nh3 {\n    margin: 4px 0;\n}\n\n.code-editor {\n    overflow: scroll;\n}\n\n.icon-button {\n    background: var(--accent-color);\n    border: none;\n    cursor: pointer;\n    padding: 8px;\n    margin: 0;\n    border-radius: 32px;\n    font-weight: bold;\n}\n\n.icon-button.header {\n    background: none;\n    float: right;\n    padding: 0;\n    margin: 0 8px;\n}\n\nha-card-conditions-editor {\n    margin-top: -12px;\n}\n\n.version{\n    font-size: 12px !important;\n    color: #fff;\n    background: rgba(0,0,0,0.1);\n    padding: 8px 16px;\n    border-radius: 32px;\n}\n\n.versionNumber{\n    font-size: 10px;\n    background: rgba(0,120,180,1);\n    padding: 0px 8px;\n    border-radius: 12px;\n    margin-right: -6px;\n    float: right;\n    color: white;\n}';class BubbleCardEditor extends lit_element_r{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config?.card_type||""}get _button_type(){return this._config?.button_type||("pop-up"===this._config?.card_type?"":"switch")}get _entity(){return this._config?.entity||""}get _selectable_attributes(){return["source_list","sound_mode_list","hvac_modes","fan_modes","swing_modes","preset_modes","effect_list"]}render(){if(!this.hass)return x``;const e=document.querySelector("body > home-assistant");if(e?.shadowRoot){const t=e.shadowRoot,n=t.querySelector("hui-dialog-edit-card")?.shadowRoot;if(n){const e=n.querySelector("ha-dialog > div.content > div.element-preview");if(!e)return;"sticky"!==e.style.position&&(e.style.position="sticky",e.style.top="0")}}if(!this.listsUpdated){const e=e=>({label:e,value:e});this.inputSelectList={states:{},locale:this.hass.locale,localize:this.hass.localize,entities:this.hass.entities},Object.keys(this.hass.states).filter((e=>{const t=this.hass.states[e],n=e.substr(0,e.indexOf(".")),o="input_select"===n||"select"===n,a=this._selectable_attributes.some((e=>t.attributes?.[e]));return o||a})).map(e).forEach((e=>{const t=e.label||e,n=this.hass.states[t];n&&(this.inputSelectList.states[t]=n)})),this.attributeList=Object.keys(this.hass.states[this._entity]?.attributes||{}).map((e=>{let t=this.hass.states[this._entity];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})),this.cardTypeList=[{label:"Button (Switch, slider, ...)",value:"button"},{label:"Cover",value:"cover"},{label:"Climate",value:"climate"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Media player",value:"media-player"},{label:"Pop-up",value:"pop-up"},{label:"Select",value:"select"},{label:"Separator",value:"separator"}],this.listsUpdated=!0}const t=this.cardTypeList;switch(this.buttonTypeList,this._config?.card_type){case"pop-up":return renderPopUpEditor(this);case"button":return renderButtonEditor(this);case"separator":return renderSeparatorEditor(this);case"horizontal-buttons-stack":return renderHorButtonStackEditor(this);case"cover":return renderCoverEditor(this);case"media-player":return renderMediaPlayerEditor(this);case"empty-column":return renderEmptyColumnEditor(this);case"select":return renderSelectEditor(this);case"climate":return renderClimateEditor(this);case void 0:return x`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",t)}
                        <ha-alert alert-type="info">You need to add a card type first. Please note that in some cases, a page refresh might be needed after exiting the editor.</ha-alert>
                        <img style="width: 100%; height: auto; border-radius: 24px;" src="https://raw.githubusercontent.com/Clooos/Bubble-Card/main/.github/bubble-card.gif">
                        <p>The <b>Bubble Card ${version}</b> changelog is available <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${version}"><b>here</b></a>.</p>
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
                `}}makeLayoutOptions(){return x`
            <ha-combo-box
                label="${"pop-up"===this._config.card_type?"Header card layout":"Card layout"}"
                .value="${this._config.card_layout||"normal"}"
                .configValue="${"card_layout"}"
                .items="${[{label:"Normal",value:"normal"},{label:"Large (Optimized for sections)",value:"large"},{label:"Large with 2 sub-buttons rows (Optimized for sections)",value:"large-2-rows"}]}"
                @value-changed="${this._valueChanged}"
            ></ha-combo-box>
        `}makeShowState(e=this._config,t="",n=!1,o){const a=e?.entity??this._config.entity??"",i="name"===this._config.button_type,r=a?.startsWith("input_select")||a?.startsWith("select")||e.select_attribute,l=Object.keys(this.hass.states[a]?.attributes||{}).map((e=>{let t=this.hass.states[a];return{label:this.hass.formatEntityAttributeName(t,e),value:e}}));return x`
            ${"sub_button"!==n?x`
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
            ${"sub_button"===n?x`
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
            ${"sub_button"===n&&(e?.show_background??1)?x`
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
            ${"sub_button"===n&&(e?.state_background??1)&&a.startsWith("light")?x`
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
            ${"sub_button"!==n&&a.startsWith("light")?x`
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
            ${"sub_button"!==n?x`
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
            ${e?.show_attribute?x`
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
            ${"sub_button"===n&&r?x`
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
            ${"sub_button"!==n&&"slider"===this._button_type?x`
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
        `}makeDropdown(e,t,n,o){return e.includes("icon")||e.includes("Icon")?x`
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
            `:x`
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
          `}makeActionPanel(e,t=this._config,n,o,a=this._config){const i="Tap action"===e?"mdi:gesture-tap":"Double tap action"===e?"mdi:gesture-double-tap":"Hold action"===e?"mdi:gesture-tap-hold":"mdi:gesture-tap",r="Tap action"===e?"tap_action":"Double tap action"===e?"double_tap_action":"Hold action"===e?"hold_action":"Open action"===e?"open_action":"close_action";let l;try{l="Tap action"===e?t.tap_action:"Double tap action"===e?t.double_tap_action:"Hold action"===e?t.hold_action:"Open action"===e?t.open_action:t.close_action}catch{}const s=t===this._config;return n||(n=s&&"Tap action"===e?"name"!==this._config.button_type?"more-info":"none":s?"name"!==this._config.button_type?"toggle":"none":""),x`
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
                ${"call-service"===l?.action||"perform-action"===l?.action?x`
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
        `}makeSubButtonPanel(){const e=this._config?.sub_button?.map(((e,t)=>{if(!e)return;const n="sub_button."+t+".",o=e.entity??this._config.entity,a=o?.startsWith("input_select")||o?.startsWith("select")||e.select_attribute,i=this.hass.states[o]?.attributes,r=this._selectable_attributes.some((e=>i?.[e])),l=Object.keys(this.hass.states[o]?.attributes||{}).map((e=>{let t=this.hass.states[o];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})).filter((e=>this._selectable_attributes.includes(e.value))),s=e.visibility??[];return x`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:border-radius"></ha-icon>
                    ${this._config.sub_button[t]?"Button "+(t+1)+(e.name?" - "+e.name:""):"New button"}
                    <button class="icon-button header" @click="${n=>{n.stopPropagation();let o=[...this._config.sub_button];o.splice(t,1),this._config.sub_button=o,this._valueChanged({target:{configValue:"sub_button."+(t-1),value:e}}),this.requestUpdate()}}">
                      <ha-icon icon="mdi:delete"></ha-icon>
                    </button>
                    ${t>0?x`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t>0){let e=[...this._config.sub_button];[e[t],e[t-1]]=[e[t-1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
                      <ha-icon icon="mdi:arrow-left"></ha-icon>
                    </button>`:""}
                    ${t<this._config.sub_button.length-1?x`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t<this._config.sub_button.length-1){let e=[...this._config.sub_button];[e[t],e[t+1]]=[e[t+1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
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
                            ${r?x`
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
        `}));return x`
        <ha-expansion-panel outlined>
          <h4 slot="header">
            <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
            Sub-buttons editor
          </h4>
          <div class="content">
            ${e}
            <button class="icon-button" @click="${()=>{this._config.sub_button||(this._config.sub_button=[]);let e={entity:this._config.entity};this._config.sub_button=[...this._config.sub_button],this._config.sub_button.push(e),(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}}">
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
      `}makeVersion(){return x`
            <h4 class="version">
                Bubble Card 
                <span class="versionNumber">
                    ${version}
                </span>
            </h4>
        `}makeStyleEditor(){return x`
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
        `}createErrorConsole(){return this._errorListener||(this._errorListener=e=>{this.errorMessage=e.detail,this.requestUpdate()},window.addEventListener("bubble-card-error",this._errorListener)),x`
            <ha-alert 
                alert-type="error"
                style="display: ${this.errorMessage?"":"none"}">
                ${this.errorMessage}
            </ha-alert>
        `}makeYAMLStyleEditor(){const e=(e,t,n=!0)=>{const o=yamlKeysMap.get(e);if(o){const e=o.split("\n")[t].trim();if(e.startsWith("/*")&&e.endsWith("*/"))return e.slice(2,-2).trim()}if(n)return e},t=e=>{const t=e.target,n=t.configValue,o=t.checked;this._config.style_templates||(this._config.style_templates=[]),o?this._config.style_templates.includes(n)||(this._config.style_templates=[...this._config.style_templates,n]):this._config.style_templates=this._config.style_templates.filter((e=>e!==n)),(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()},n=this._config.style_templates||["default"];return x`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:code-block-braces"></ha-icon>
                    Custom styles & templates - Global
                </h4>
                <div class="content">
                    ${Array.from(yamlKeysMap.keys()).map((o=>{const a=e(o,0),i=e(o,1,!1),r=n.includes(o);return x`
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
                                            .configValue="${o}"
                                            @change=${t}
                                        ></ha-switch>
                                    </ha-formfield>
                                    <ha-alert 
                                        alert-type="info" 
                                        style="display: ${i?"":"none"}">
                                        ${x`<span .innerHTML=${i}></span>`}
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
        `}_valueChanged(e){const t=e.target,n=e.detail;let o;if("HA-SWITCH"===t.tagName?o=t.checked:void 0!==t.value&&(o="string"==typeof t.value?t.value.replace(",","."):t.value),"string"==typeof o&&(o.endsWith(".")||"-"===o))return;const{configValue:a,checked:i}=t;if(a){const i=a.split(".");let r=this._config;for(let e=0;e<i.length-1;e++)r[i[e]]=r[i[e]]||{},r=r[i[e]];"input"===e.type?r[i[i.length-1]]=o:n&&r[i[i.length-1]]!==n.value?r[i[i.length-1]]=n.value:"HA-SWITCH"===t.tagName&&(r[i[i.length-1]]=o)}else this._config=n.value;(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}_arrayValueChange(e,t,n){if(this._config.sub_button&&!this.subButtonJustAdded)return this.subButtonJustAdded=!0,void setTimeout((()=>this._arrayValueChange(e,t,n)),10);this._config[n]=this._config[n]||[];let o=[...this._config[n]];o[e]=o[e]||{},o[e]={...o[e],...t},this._config[n]=o,(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}_ActionChanged(e,t,n){var o=!1;try{"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id[0]&&(o=!0)}catch{}try{"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id&&(o=!0)}catch{}if(o&&(e.detail.value[e.currentTarget.__schema[0].name].action="call-service",null!=e.detail.value[e.currentTarget.__schema[0].name].perform_action&&(e.detail.value[e.currentTarget.__schema[0].name].service=""+e.detail.value[e.currentTarget.__schema[0].name].perform_action,delete e.detail.value[e.currentTarget.__schema[0].name].perform_action)),"button_action"===t){var a=!!this._config[t],i=null!=e.detail.value[e.currentTarget.__schema[0].name];(a||i)&&(this._config[t]=e.detail.value)}else if(t){this._config[t]=this._config[t]||[];let o=[...this._config[t]];o[n]=e.detail.value,this._config[t]=o}else this._config=e.detail.value;(0,utils.rC)(this,"config-changed",{config:this._config})}_updateActionsEntity(e){let t=JSON.parse(JSON.stringify(this._config));const n=e.target.configValue.split(".");let o=0;for(o=0;o<n.length-2;o++)t=t[n[o]]?t[n[o]]:{};e.target.checked?t[n[o]].target={entity_id:"entity"}:"entity"===t[n[o]].target?.entity_id&&(t[n[o]].target={});var a={value:t},i={__schema:[{name:n[n.length-2]}]},r={...e,detail:a,currentTarget:i};this._ActionChanged(r,n.length>2?n[0]:null,n.length>3?n[1]:null)}_computeLabelCallback=e=>e.label;_conditionChanged(e,t,n){if(e.stopPropagation(),n){this._config[n]=this._config[n]||[];let o=[...this._config[n]];o[t]=o[t]||{};const a=e.detail.value;o[t]={...o[t],visibility:a},this._config[n]=o}else if("pop-up"===this._config.card_type){const t=e.detail.value;this._config={...this._config,trigger:t}}(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return i`
            ${r(editor_styles_namespaceObject)}
          `}}customElements.define("bubble-card-editor",BubbleCardEditor);class BubbleCard extends HTMLElement{editor=!1;isConnected=!1;_cachedDetectedEditor=null;connectedCallback(){this.isConnected=!0,preloadYAMLStyles(this),this._hass&&this.updateBubbleCard()}disconnectedCallback(){this.isConnected=!1}get detectedEditor(){if(this.editor)return"hui-dialog-edit-card"===window.history?.state?.dialog}set editMode(e){this.editor!==e&&(this.editor=e,this.updateBubbleCard())}set hass(e){initializeContent(this),this._hass=e;const t="pop-up"===this.config.card_type;(!this.editor&&(this.isConnected||t)||this.detectedEditor)&&this.updateBubbleCard()}updateBubbleCard(){switch(this.config.card_type){case"pop-up":handlePopUp(this);break;case"button":handleButton(this);break;case"separator":handleSeparator(this);break;case"cover":handleCover(this);break;case"empty-column":handleEmptyColumn(this);break;case"horizontal-buttons-stack":handleHorizontalButtonsStack(this);break;case"media-player":handleMediaPlayer(this);break;case"select":handleSelect(this);break;case"climate":handleClimate(this)}}setConfig(e){if(e.error)throw new Error(e.error);if("pop-up"===e.card_type){if(!e.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.")}else if("horizontal-buttons-stack"===e.card_type){var t={};for(var n in e)if(n.match(/^\d+_icon$/)){var o=n.replace("_icon","_link");if(void 0===e[o])throw new Error("You need to define "+o);if(t[e[o]])throw new Error("You can't use "+e[o]+" twice");t[e[o]]=!0}}else if(["button","cover","climate","select","media-player"].includes(e.card_type)&&!e.entity&&"name"!==e.button_type)throw new Error("You need to define an entity");if("select"===e.card_type&&e.entity&&!e.select_attribute&&!e.entity?.startsWith("input_select")&&!e.entity?.startsWith("select"))throw new Error('"Select menu (from attributes)" missing');if(window.entityError)throw new Error("You need to define a valid entity");if("button"===e.card_type){const t={...e},n=t.button_type||"switch";t.tap_action=t.tap_action??{action:"more-info"},t.double_tap_action=t.double_tap_action??{action:"state"===n?"more-info":"toggle"},t.hold_action=t.hold_action??{action:"state"===n?"more-info":"toggle"},this.config=t}else this.config=e}getCardSize(){switch(this.config.card_type){case"pop-up":return-1e5;case"button":case"separator":case"empty-column":case"media-player":case"select":case"climate":return 1;case"cover":return 2;case"horizontal-buttons-stack":return 0}}static getConfigElement(){return document.createElement("bubble-card-editor")}getLayoutOptions(){let e=1;"pop-up"===this.config.card_type?e=0:"horizontal-buttons-stack"===this.config.card_type?e=1:["cover"].includes(this.config.card_type)&&(e=2);let t=4;return"pop-up"===this.config.card_type?t=0:"horizontal-buttons-stack"===this.config.card_type&&(t=4),{grid_columns:this.config.columns??t,grid_rows:this.config.rows??e}}}customElements.define("bubble-card",BubbleCard),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch.",documentationURL:"https://github.com/Clooos/Bubble-Card/"}),console.info(`%c Bubble Card %c ${version} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})();
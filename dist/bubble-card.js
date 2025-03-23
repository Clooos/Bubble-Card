/*! For license information please see bubble-card.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={537:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$C:()=>isStateOn,D$:()=>getAttribute,Dv:()=>tapFeedback,GM:()=>isColorLight,Gu:()=>getState,JK:()=>setLayout,Nl:()=>applyScrollingEffect,f9:()=>adjustColor,jp:()=>forwardHaptic,mG:()=>getName,md:()=>isEntityType,n:()=>createElement,nF:()=>throttle,qo:()=>toggleBodyScroll,r6:()=>formatDateTime,rC:()=>fireEvent});const fireEvent=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const i=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=n,e.dispatchEvent(i),i},forwardHaptic=e=>{fireEvent(window,"haptic",e)},navigate=(e,t,n=!1)=>{n?history.replaceState(null,"",t):history.pushState(null,"",t),fireEvent(window,"location-changed",{replace:n})};function tapFeedback(e){void 0!==e&&(e.style.display="",e.style.animation="tap-feedback .3s",setTimeout((()=>{e.style.animation="none",e.style.display="none"}),500))}const colorCache=new Map;function resolveCssVariable(e){let t=e;const n=getComputedStyle(document.body);for(;t&&t.startsWith("var(");){const e=t.match(/var\((--[^,]+),?\s*(.*)?\)/);if(!e)break;const[,o,i]=e;t=n.getPropertyValue(o).trim()||i&&i.trim()||""}return t}function hexToRgb(e){const t=e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function rgbStringToRgb(e){const t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);return t?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]:null}function calculateLuminance(e,t,n){return(.2126*e+.7152*t+.0722*n)/255}function isColorLight(e,t=.5){const n=resolveCssVariable(e);if(!n)return!1;if(colorCache.has(n))return colorCache.get(n);let o=hexToRgb(n)||rgbStringToRgb(n);if(!o)return colorCache.set(n,!1),!1;const i=calculateLuminance(...o)>t;return colorCache.set(n,i),i}function adjustColor(e,t){return e.map((e=>Math.min(255,Math.round(e*t))))}function getName(e){const t=e.config.name,n=getAttribute(e,"friendly_name");return e.name||t||n||""}function getState(e,t=e.config.entity){return e._hass.states[t]?.state??""}function getAttribute(context,attribute,entity=context.config.entity){return attribute?attribute.includes(" ")?eval(`context._hass.states['${entity}']?.attributes['${attribute}']`)??"":eval(`context._hass.states['${entity}']?.attributes.${attribute}`)??"":""}function isEntityType(e,t,n=e.config.entity){return n?.startsWith(t+".")??!1}function isStateOn(e,t=e.config.entity){const n=getState(e,t).toLowerCase(),o=("pop-up"!==e.config.card_type?e.card:e.elements.headerContainer,Number(n)||0===Number(n));return!(!["on","open","opening","closing","cleaning","true","idle","home","playing","paused","locked","occupied","available","running","active","connected","online","mowing","starting","heat","cool","dry","heat_cool","fan_only","auto","alarm"].includes(n)&&!o)}function createElement(e,t=""){const n=document.createElement(e);return""!==t&&t.split(" ").forEach((e=>{n.classList.add(e)})),n}function debounce(e,t){let n;return function(...o){clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}function applyScrollingEffect(e,t,n){const{scrolling_effect:o=!0}=e.config;if(!o)return void applyNonScrollingStyle(t,n);if(t.previousText===n)return;const i=getBubbleClassName(t);function a(){t.templateDetected||(t.innerHTML=`<div class="scrolling-container">${n}</div>`,t.style="",setTimeout((()=>{t.scrollWidth>(t.parentNode?.offsetWidth||0)&&applyScrollingStyle(t,n,i),t.previousText=n}),500))}requestAnimationFrame(a),t.eventAdded||(window.addEventListener("resize",debounce(a,300)),t.eventAdded=!0)}function getBubbleClassName(e){return e.className.split(" ").find((e=>e.startsWith("bubble-")))}function applyScrollingStyle(e,t,n){const o='<span class="bubble-scroll-separator"> | </span>',i=`<span>${t+o+t+o}</span>`;e.innerHTML=`<div class="scrolling-container">${i}</div>`,applyScrollingCSS(e,n)}function applyScrollingCSS(e,t){const n=document.createElement("style");n.innerHTML=`\n        .${t} .scrolling-container {\n            width: 100%;\n            white-space: nowrap;\n            mask-image: linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent);\n        }\n        .${t} .scrolling-container span {\n            display: inline-block;\n            animation: scroll 14s linear infinite;\n        }\n        .bubble-scroll-separator {\n            opacity: .3;\n            margin: 0 6px 0 8px;\n        }\n        @keyframes scroll {\n            from { transform: translateX(0%); }\n            to { transform: translateX(-50%); }\n        }\n    `,e.appendChild(n)}function applyNonScrollingStyle(e,t){e.innerHTML=t,e.previousText=t,Object.assign(e.style,{whiteSpace:"normal",display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical",textOverflow:"ellipsis"})}function formatDateTime(e,t){if(!e)return"";const n=new Date(e),o=new Date;let i,a,r=Math.floor((o-n)/1e3);return isNaN(r)?"":(r<60?(i="second",a=r+1):r<3600?(i="minute",a=Math.floor(r/60)):r<86400?(i="hour",a=Math.floor(r/3600)):(i="day",a=Math.floor(r/86400)),new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(-a,i))}function setLayout(e){const t=document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("#view > hui-view > hui-masonry-view");window.isSectionView=!t;const n=window.isSectionView?"large":"normal",o=e.config.card_layout??n;if(e.previousLayout===o)return;e.previousLayout=o;const i="large"===o||"large-2-rows"===o||"large-sub-buttons-grid"===o,a="large-2-rows"===o,r="large-sub-buttons-grid"===o;e.content.classList.toggle("large",i),e.content.classList.toggle("rows-2",a),e.content.classList.toggle("sub-buttons-grid",r)}function throttle(e,t=300){let n;return(...o)=>{void 0===n&&(e(...o),n=setTimeout((()=>{n=void 0}),t))}}let scrollY=0;function injectNoScrollStyles(){if(document.getElementById("no-scroll-styles"))return;const e=document.createElement("style");e.id="no-scroll-styles",e.textContent="\n        body.no-scroll {\n            overflow: hidden;\n            position: fixed;\n            width: 100%;\n            touch-action: none;\n            left: 0;\n        }\n    ",document.head.appendChild(e)}function toggleBodyScroll(e){injectNoScrollStyles(),e?(scrollY=window.scrollY,document.body.style.top=`-${scrollY}px`,document.body.classList.add("no-scroll")):(window.scrollTo(0,scrollY),document.body.style.top="",document.body.classList.remove("no-scroll"))}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};let version="v2.5.0-beta.9",rgbaColor;function initializeContent(e){if(!e.content){let t=e.shadowRoot||e.attachShadow({mode:"open"}),n=document.createElement("ha-card");n.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let o=document.createElement("div");o.className="card-content",o.style.padding="0",n.appendChild(o),t.appendChild(n),e.card=n,e.content=o}}function updateIcon(e,t,n,o,i){for(;i.firstChild;)i.removeChild(i.firstChild);let a=e.config.icon&&e.config.icon.includes("/")?e.config.icon:e.imageUrl?e.imageUrl:"";if(a&&(r=t.states[n].state,n.startsWith("media_player.")&&!["off","unknown","idle",void 0].includes(r)||!n.startsWith("media_player."))){const e=document.createElement("div");e.setAttribute("class","entity-picture"),e.setAttribute("alt","Icon"),i&&(i.appendChild(e),i.style.background="center / cover no-repeat url("+a+"), var(--card-background-color,var(--ha-card-background))")}else{const e=document.createElement("ha-icon");e.setAttribute("icon",o),e.setAttribute("class","icon"),i&&i.appendChild(e)}var r}function isColorCloseToWhite(e,t=40){if(Array.isArray(e)&&3===e.length){for(let t=0;t<3;t++)if(e[t]<0||e[t]>255)return;return e.every((e=>Math.abs(e-255)<=t))}}function convertToRGBA(e,t,n=1){if(e.startsWith("#"))if(4===e.length){let o=Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n),i=Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n),a=Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n);rgbaColor="rgba("+o+", "+i+", "+a+", "+t+")"}else{let o=Math.min(255,parseInt(e.slice(1,3),16)*n),i=Math.min(255,parseInt(e.slice(3,5),16)*n),a=Math.min(255,parseInt(e.slice(5,7),16)*n);rgbaColor="rgba("+o+", "+i+", "+a+", "+t+")"}else if(e.startsWith("rgb")){let o=e.match(/\d+/g);rgbaColor="rgba("+Math.min(255,o[0]*n)+", "+Math.min(255,o[1]*n)+", "+Math.min(255,o[2]*n)+", "+t+")"}else if(e.startsWith("var(--")){let o=e.slice(4,-1),i=window.getComputedStyle(document.documentElement).getPropertyValue(o);(i.startsWith("#")||i.startsWith("rgb"))&&(rgbaColor=convertToRGBA(i,t,n))}return rgbaColor}var utils=__webpack_require__(537);const maxHoldDuration=400,doubleTapTimeout=200,movementThreshold=5,scrollDisableTime=300;function disableActionsDuringScroll(){window.isScrolling=!0,setTimeout((()=>{window.isScrolling=!1}),scrollDisableTime)}window.isScrolling=!1,document.addEventListener("scroll",disableActionsDuringScroll,{passive:!0});const actionHandler=new WeakMap,activeHandlers=new Set;function handlePointerDown(e){if(window.isScrolling)return;const t=e.composedPath().find((e=>e.classList?.contains("bubble-action")));if(!t)return;const n={tap_action:JSON.parse(t.dataset.tapAction),double_tap_action:JSON.parse(t.dataset.doubleTapAction),hold_action:JSON.parse(t.dataset.holdAction),entity:t.dataset.entity};if(!actionHandler.has(t)){const e=new ActionHandler(t,n,sendActionEvent);actionHandler.set(t,e),activeHandlers.add(e)}const o=actionHandler.get(t);o.handleStart(e);const i=()=>{t.removeEventListener("pointerup",a),t.removeEventListener("pointercancel",a),document.removeEventListener("pointerup",a),document.removeEventListener("scroll",r),activeHandlers.delete(o)},a=e=>{o.handleEnd(e),i()},r=()=>{o.handleScroll(),i()};t.addEventListener("pointerup",a,{once:!0}),t.addEventListener("pointercancel",a,{once:!0}),document.addEventListener("pointerup",a,{once:!0}),document.addEventListener("scroll",r,{once:!0})}function callAction(e,t,n){setTimeout((()=>{const o=new Event("hass-action",{bubbles:!0,composed:!0}),i={...t};!i.entity_id&&this?.config?.entity&&(i.entity_id=this.config.entity),"tap"===n||"double_tap"===n||"hold"===n?o.detail={config:i,action:n}:(e.modifiedConfig={...i,tap_action:{...i[n]}},delete e.modifiedConfig[n],o.detail={config:e.modifiedConfig,action:"tap"}),e.dispatchEvent(o)}),10)}function addActions(e,t,n,o){e.classList.add("bubble-action"),e.dataset.entity=t?.entity||n,e.dataset.tapAction=JSON.stringify(t?.tap_action||o?.tap_action||{action:"more-info"}),e.dataset.doubleTapAction=JSON.stringify(t?.double_tap_action||o?.double_tap_action||{action:"toggle"}),e.dataset.holdAction=JSON.stringify(t?.hold_action||o?.hold_action||{action:"toggle"});const i=JSON.parse(e.dataset.tapAction),a=JSON.parse(e.dataset.doubleTapAction),r=JSON.parse(e.dataset.holdAction);e.style.cursor="none"===i.action&&"none"===a.action&&"none"===r.action?"":"pointer"}document.body.addEventListener("pointerdown",handlePointerDown,{passive:!0});class ActionHandler{constructor(e,t,n){this.element=e,this.config=t,this.sendActionEvent=n,this.tapTimeout=null,this.holdTimeout=null,this.startX=0,this.startY=0,this.holdFired=!1,this.pointerMoveListener=this.detectScrollLikeMove.bind(this),this.isDisconnected=!1,this.hasMoved=!1}cleanup(){this.isDisconnected=!0,clearTimeout(this.tapTimeout),clearTimeout(this.holdTimeout),document.removeEventListener("pointermove",this.pointerMoveListener),this.tapTimeout=null,this.holdTimeout=null}handleStart(e){window.isScrolling||this.isDisconnected||(this.startX=e.clientX,this.startY=e.clientY,this.holdFired=!1,this.hasMoved=!1,document.addEventListener("pointermove",this.pointerMoveListener,{passive:!0}),this.holdTimeout=setTimeout((()=>{"none"===(this.config.hold_action||{action:"none"}).action||window.isScrolling||this.hasMoved||(this.sendActionEvent(this.element,this.config,"hold"),this.holdFired=!0)}),maxHoldDuration))}detectScrollLikeMove(e){const t=Math.abs(e.clientX-this.startX),n=Math.abs(e.clientY-this.startY);(t>movementThreshold||n>movementThreshold)&&(this.hasMoved=!0,disableActionsDuringScroll(),clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener))}handleEnd(e){if(window.isScrolling||this.isDisconnected||this.hasMoved)return;if(clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener),this.holdFired)return;const t=Date.now(),n=this.config.double_tap_action||{action:"none"},o=this.config.tap_action||{action:"none"};this.lastTap&&t-this.lastTap<doubleTapTimeout&&"none"!==n.action?(clearTimeout(this.tapTimeout),this.sendActionEvent(this.element,this.config,"double_tap")):"none"!==o.action&&(this.tapTimeout=setTimeout((()=>{this.sendActionEvent(this.element,this.config,"tap")}),doubleTapTimeout)),this.lastTap=t}handleScroll(){this.hasMoved=!0,clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener)}}function sendActionEvent(e,t,n){const o=t.tap_action||{action:"more-info"},i=t.double_tap_action||{action:"toggle"},a=t.hold_action||{action:"toggle"},r=t.entity||this.config?.entity,s=e=>e.service&&"entity"===e.target?.entity_id&&r?{...e,target:{...e.target,entity_id:r}}:e,l=s(o),c=s(i),d=s(a);let u;switch(n){case"tap":default:u=l;break;case"double_tap":u=c;break;case"hold":u=d}callAction(e,{entity:r,tap_action:l,double_tap_action:c,hold_action:d},n)}function addFeedback(e,t){e.addEventListener("click",(()=>{(0,utils.jp)("selection"),(0,utils.Dv)(t)}))}function cleanupTapActions(){for(const e of activeHandlers)e.cleanup();activeHandlers.clear()}const popupState={hashRecentlyAdded:!1,scrollY:0},dialogNode=new Set(["HA-DIALOG","HA-MORE-INFO-DIALOG","HA-DIALOG-DATE-PICKER"]);function clickOutside(e,t){(t.config.close_by_clicking_outside??1)&&(e.composedPath().find((e=>!(!e.classList&&!e.nodeName)&&(e.classList?.contains("bubble-pop-up")||dialogNode.has(e.nodeName))))||removeHash())}function resetCloseTimeout(e){e.config.auto_close&&e.closeTimeout&&(clearTimeout(e.closeTimeout),e.closeTimeout=setTimeout(removeHash,e.config.auto_close))}function removeHash(){!popupState.hashRecentlyAdded&&location.hash&&setTimeout((()=>{const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))}),50)}function addHash(e){const t=e.startsWith("#")?window.location.href.split("#")[0]+e:e;history.pushState(null,"",t),window.dispatchEvent(new Event("location-changed"))}function hideContent(e,t){e.editor||(e.hideContentTimeout=setTimeout((()=>{const{sectionRow:t,sectionRowContainer:n}=e;"hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!0,t.style.display="none",n?.classList.contains("card")&&(n.style.display="none"))}),t))}function displayContent(e){const{sectionRow:t,sectionRowContainer:n,popUp:o}=e;o.style.transform="","hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!1,t.style.display="",n?.classList.contains("card")&&(n.style.display=""))}function toggleBackdrop(e,t){const{showBackdrop:n,hideBackdrop:o}=getBackdrop(e);t?n():o()}function appendPopup(e,t){e.config.background_update||(t?e.verticalStack.appendChild(e.popUp):e.verticalStack.removeChild(e.popUp))}function updatePopupClass(e,t){requestAnimationFrame((()=>{e.classList.toggle("is-popup-opened",t),e.classList.toggle("is-popup-closed",!t)}))}function updateListeners(e,t){if(e.boundClickOutside||(e.boundClickOutside=t=>clickOutside(t,e)),e.resetCloseTimeout||(e.resetCloseTimeout=()=>resetCloseTimeout(e)),!e.touchHandlersInitialized){const{handleTouchStart:t,handleTouchMove:n,handleTouchEnd:o}=createTouchHandlers(e);e.handleTouchStart=t,e.handleTouchMove=n,e.handleTouchEnd=o,e.touchHandlersInitialized=!0}t&&!e.editor?(e.listenersAdded||(e.config.auto_close&&(e.popUp.addEventListener("touchstart",e.resetCloseTimeout,{passive:!0}),e.popUp.addEventListener("click",e.resetCloseTimeout,{passive:!0})),e.popUp&&(e.handleTouchStart&&e.popUp.addEventListener("touchstart",e.handleTouchStart,{passive:!0}),e.handleTouchMove&&e.popUp.addEventListener("touchmove",e.handleTouchMove,{passive:!1}),e.handleTouchEnd&&e.popUp.addEventListener("touchend",e.handleTouchEnd,{passive:!0}),e.handleHeaderTouchMove&&e.elements?.header&&e.elements.header.addEventListener("touchmove",e.handleHeaderTouchMove,{passive:!0}),e.handleHeaderTouchEnd&&e.elements?.header&&e.elements.header.addEventListener("touchend",e.handleHeaderTouchEnd,{passive:!0}),e.closeOnEscape&&window.addEventListener("keydown",e.closeOnEscape,{passive:!0}),e.config.close_on_click&&e.popUp.addEventListener("click",removeHash,{passive:!0})),e.listenersAdded=!0),e.clickOutsideListenerAdded||(window.addEventListener("click",e.boundClickOutside,{passive:!0}),e.clickOutsideListenerAdded=!0)):(e.listenersAdded&&((0,utils.qo)(!1),e.config.auto_close&&(e.popUp.removeEventListener("touchstart",e.resetCloseTimeout),e.popUp.removeEventListener("click",e.resetCloseTimeout)),e.popUp&&(e.handleTouchStart&&e.popUp.removeEventListener("touchstart",e.handleTouchStart),e.handleTouchMove&&e.popUp.removeEventListener("touchmove",e.handleTouchMove),e.handleTouchEnd&&e.popUp.removeEventListener("touchend",e.handleTouchEnd),e.handleHeaderTouchMove&&e.elements?.header&&e.elements.header.removeEventListener("touchmove",e.handleHeaderTouchMove),e.handleHeaderTouchEnd&&e.elements?.header&&e.elements.header.removeEventListener("touchend",e.handleHeaderTouchEnd),e.closeOnEscape&&window.removeEventListener("keydown",e.closeOnEscape),e.config.close_on_click&&e.popUp.removeEventListener("click",removeHash)),e.listenersAdded=!1),e.clickOutsideListenerAdded&&(window.removeEventListener("click",e.boundClickOutside),e.clickOutsideListenerAdded=!1))}function clearAllTimeouts(e){["hideContentTimeout","removeDomTimeout","closeTimeout"].forEach((t=>{e[t]&&(clearTimeout(e[t]),e[t]=null)}))}function openPopup(e){if(e.popUp.classList.contains("is-popup-opened"))return;clearAllTimeouts(e);const{popUp:t}=e;e.verticalStack.contains(t)||appendPopup(e,!0),requestAnimationFrame((()=>{toggleBackdrop(e,!0),updatePopupClass(t,!0),displayContent(e)})),updateListeners(e,!0),e.config.auto_close>0&&(e.closeTimeout=setTimeout(removeHash,e.config.auto_close)),(0,utils.qo)(!0),e.config.open_action&&callAction(e.popUp,e.config,"open_action")}function closePopup(e,t=!1){(e.popUp.classList.contains("is-popup-opened")||t)&&(clearAllTimeouts(e),updatePopupClass(e.popUp,!1),toggleBackdrop(e,!1),e.removeDomTimeout=setTimeout((()=>{appendPopup(e,!1),hideContent(e,0)}),300),updateListeners(e,!1),(0,utils.qo)(!1),e.config.close_action&&callAction(e,e.config,"close_action"))}function onUrlChange(e){return()=>{e.config.hash===location.hash?(popupState.hashRecentlyAdded=!0,setTimeout((()=>{popupState.hashRecentlyAdded=!1}),100),requestAnimationFrame((()=>{openPopup(e)}))):requestAnimationFrame((()=>{closePopup(e)}))}}function onEditorChange(e){const{hideBackdrop:t}=getBackdrop(e),n=e.detectedEditor;e.editor||n?(t(),clearTimeout(e.removeDomTimeout),n||setupVisibilityObserver(e)):e.observer&&(e.observer.disconnect(),e.observer=null)}function setupVisibilityObserver(e){if(e.observer&&(e.observer.disconnect(),e.observer=null),e.sectionRow){const t=new IntersectionObserver((t=>{t.forEach((t=>{const n=e.editor||e.detectedEditor;t.isIntersecting&&!e.verticalStack.contains(e.popUp)&&n&&e.verticalStack.appendChild(e.popUp)}))}),{rootMargin:"100px",threshold:.01});t.observe(e.sectionRow),e.observer=t}}function cleanupContext(e){e.observer&&(e.observer.disconnect(),e.observer=null),clearAllTimeouts(e),updateListeners(e,!1),e.popUp&&e.popUp.parentNode&&e.popUp.parentNode.removeChild(e.popUp),e.elements&&(e.elements=null)}function createTouchHandlers(e){if(!e.handleTouchStart){let t=0,n=0,o=!1;e.handleTouchStart=e=>{t=e.touches[0].clientY,n=t,o=!1},e.handleTouchMove=i=>{if(1!==i.touches.length)return;n=i.touches[0].clientY;const a=n-t;Math.abs(a)>10&&(o=!0,a>0&&(e.popUp.style.transform=`translateY(${a}px)`,i.preventDefault()))},e.handleTouchEnd=i=>{o&&(n-t>100?removeHash():e.popUp.style.transform="",o=!1)}}return{handleTouchStart:e.handleTouchStart,handleTouchMove:e.handleTouchMove,handleTouchEnd:e.handleTouchEnd}}const styles_namespaceObject=".bubble-pop-up-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    margin-top: -50px;\n    max-width: 100%;\n    padding-top: 40px;\n    padding-bottom: 80px;\n    grid-gap: var(--bubble-pop-up-gap, 14px);\n    gap: var(--bubble-pop-up-gap, 14px);\n    column-gap: var(--bubble-pop-up-gap, 14px);\n    --grid-gap: var(--bubble-pop-up-gap, 14px);\n    --vertical-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --horizontal-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --row-size: 1;\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n    overflow-y: auto; \n    overflow-x: hidden; \n    grid-auto-rows: min-content;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n    padding: 18px 18px calc(140px + var(--custom-height-offset-mobile)) 18px;\n}\n\n.bubble-pop-up-container > * {\n    flex-shrink: 0 !important;\n}\n\n.bubble-pop-up.card-content {\n    width: 100% !important;\n    padding: 0 !important;\n}\n\n.bubble-pop-up {\n    transition: transform 0.3s ease;\n    position: fixed;\n    width: 100%;\n    max-width: 100%;\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n    box-sizing: border-box;\n    margin-left: var(--custom-margin);\n    left: 7px;\n    z-index: 5 !important;\n    bottom: calc(-56px - var(--custom-height-offset-mobile));\n}\n\n.bubble-pop-up-background {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    top: 0;\n    left: 0;\n    position: absolute;\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n    backdrop-filter: var(--custom-popup-filter);\n    -webkit-backdrop-filter: var(--custom-popup-filter);\n    border: var(--bubble-pop-up-border, var(--bubble-border, none));\n}\n\n.bubble-pop-up-container::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n}\n\n.is-popup-opened {\n    box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));\n}\n\n.is-popup-closed { \n    transform: translateY(100%);\n    box-shadow: none !important;\n}\n\n@media only screen and (min-width: 600px) {\n    .bubble-pop-up {\n        margin-left: 0 !important;\n        min-width: var(--desktop-width, 540px);\n        max-width: var(--desktop-width, 540px);\n        left: calc(50% - (var(--desktop-width, 540px) / 2));\n    }\n    .bubble-pop-up-container {\n        padding: 18px 18px calc(140px + var(--custom-height-offset-desktop)) 18px;\n    }\n}\n\n@media only screen and (min-width: 768px) {\n    .bubble-pop-up {\n      bottom: calc(-56px - var(--custom-height-offset-desktop));\n      left: calc(var(--mdc-drawer-width, 0px) / 2 + 50% - (var(--desktop-width, 540px) / 2));\n    }\n}\n\n.bubble-pop-up.editor {\n    transition: none !important;\n    position: relative !important;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    backdrop-filter: none !important;\n    display: flex !important;\n    transform: none !important;\n    height: auto !important;\n    min-width: auto;\n    z-index: 0 !important;\n}\n\n.bubble-header-container {\n    display: inline-flex;\n    height: 50px;\n    margin: 0;\n    padding: 0;\n    z-index: 3;\n    padding: 18px 18px 22px;\n    position: sticky;\n    top: 0;\n    background: none !important;\n    overflow: visible;\n}\n\n.bubble-header {\n    display: inline-flex;\n    flex-grow: 1;\n    margin-right: 14px;\n    color: var(--primary-text-color);\n}\n\n.bubble-name {\n    font-size: 14px;\n    font-weight: heavy;\n}\n\n.bubble-close-button {\n    height: 50px;\n    width: 50px;\n    border: var(--bubble-pop-up-close-button-border, var(--bubble-pop-up-border, var(--bubble-border, none)));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px));\n    z-index: 1;\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n    color: var(--primary-text-color);\n    flex-shrink: 0;\n    cursor: pointer;\n}\n\n.bubble-button-card-container {\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n}\n\n.bubble-pop-up-container.editor-cropped {\n    height: 122px !important;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;   \n}\n\n.bubble-pop-up.editor > .bubble-pop-up-container {\n    padding-bottom: 18px !important;\n    mask-image: none;\n    -webkit-mask-image: none;  \n    overflow: hidden;  \n}\n\n.editor .bubble-pop-up-background {\n    width: 100%;\n    height: 100%;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    display: flex;\n    position: absolute;\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) !important;\n    backdrop-filter: none;\n    -webkit-backdrop-filter: none;\n}\n\n.no-header .bubble-header-container {\n    visibility: hidden !important;\n    height: 0px !important;\n}\n\n.no-header .bubble-pop-up-container {\n    padding-top: 4px !important;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n}\n\n.large .bubble-header-container {\n  height: calc( var(--row-height,56px) * var(--row-size,1) + var(--row-gap,8px) * ( var(--row-size,1) - 1 ));\n}\n\n.large .bubble-close-button {\n    height: var(--row-height,56px);\n    width: var(--row-height,56px);\n    --mdc-icon-size: 28px !important;\n}",backdrop_namespaceObject=".bubble-backdrop {\n  position: fixed;\n  background-color: var(--bubble-backdrop-background-color);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n  opacity: 0;\n  transition: opacity 0.3s;\n  transition-delay: .1s;\n  display: flex;\n  backdrop-filter: var(--custom-backdrop-filter);\n  -webkit-backdrop-filter: var(--custom-backdrop-filter);\n  transform: translate3d(0, 0, 0);\n}\n\n.bubble-backdrop.is-visible {\n  opacity: 1;\n}\n\n.bubble-backdrop.is-hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n";let backdrop,hideBackdrop=!1,startTouchY,lastTouchY,themeColorBackground;const colorScheme=window.matchMedia("(prefers-color-scheme: dark)"),backdropStyle=(0,utils.n)("style");function updateBackdropColor(){themeColorBackground=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color"),document.body.style.setProperty("--bubble-backdrop-background-color",convertToRGBA(themeColorBackground,.8,.6))}function getBackdrop(e){const t=e.config.hide_backdrop??!1;if(backdrop)return backdrop;backdropStyle.innerHTML=backdrop_namespaceObject,document.head.appendChild(backdropStyle);const n=(0,utils.n)("style");document.head.appendChild(n);const o=(0,utils.n)("div","bubble-backdrop backdrop is-hidden");return t&&(o.style.display="none",o.style.pointerEvents="none"),document.body.appendChild(o),o.style.setProperty("--custom-backdrop-filter",`blur(${e.config.backdrop_blur??0}px)`),backdrop={hideBackdrop:function(){o.classList.add("is-hidden"),o.classList.remove("is-visible")},showBackdrop:function(){requestAnimationFrame((()=>{o.classList.add("is-visible"),o.classList.remove("is-hidden")}))},backdropElement:o,backdropCustomStyle:n},backdrop}function createHeader(e){e.elements={closeIcon:(0,utils.n)("ha-icon","bubble-close-icon"),closeButton:(0,utils.n)("button","bubble-close-button close-pop-up"),buttonContainer:(0,utils.n)("div","bubble-button-container"),header:(0,utils.n)("div","bubble-header")},e.elements.closeIcon.icon="mdi:close",e.elements.closeButton.appendChild(e.elements.closeIcon),e.elements.closeButton.addEventListener("click",(()=>{removeHash(),(0,utils.jp)("selection")}));const t=e.popUp.querySelector(".bubble-header-container");t?Object.assign(e.elements,{headerContainer:t,closeIcon:t.querySelector(".bubble-close-icon"),closeButton:t.querySelector(".bubble-close-button"),buttonContainer:t.querySelector(".bubble-button-container"),header:t.querySelector(".bubble-header")}):(e.elements.headerContainer=(0,utils.n)("div","bubble-header-container"),e.elements.headerContainer.setAttribute("id","header-container"),e.elements.headerContainer.appendChild(e.elements.header),e.elements.headerContainer.appendChild(e.elements.closeButton),e.elements.header.appendChild(e.elements.buttonContainer)),e.handleTouchStart=e=>{startTouchY=e.touches[0].clientY},e.handleHeaderTouchMove=t=>{const n=t.touches[0].clientY-startTouchY;n>0&&(e.popUp.style.transform=`translateY(${n}px)`)},e.handleHeaderTouchEnd=t=>{const n=t.changedTouches[0].clientY-startTouchY;n>50?(e.popUp.style.transform=`translateY(calc(${n}px + (100% - ${n}px)))`,removeHash()):e.popUp.style.transform=""}}function createStructure(e){try{e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=styles_namespaceObject;let t,n=e.popUp.querySelector("style");e.stylesAdded&&n?e.elements.customStyle=n:(e.elements.customStyle=(0,utils.n)("style"),e.popUp.appendChild(e.elements.customStyle),e.popUp.appendChild(e.elements.style),e.stylesAdded=!0);const o=e.config.bg_opacity??88;function i(){t=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color");const n=convertToRGBA(e.config.bg_color?e.config.bg_color:t,o/100,1.02);e.popUp.style.setProperty("--bubble-pop-up-background-color",n)}colorScheme.addEventListener("change",(()=>{i()}),{passive:!0}),i(),e.popUp.style.setProperty("--desktop-width",e.config.width_desktop??"540px"),e.closeOnEscape=t=>{"Escape"===t.key&&e.config.hash===location.hash&&removeHash()};let a=e.config.slide_to_close_distance??400;e.handleTouchMove=e=>{e.touches[0].clientY-startTouchY>a&&e.touches[0].clientY>lastTouchY&&removeHash(),lastTouchY=e.touches[0].clientY};const r=e.popUp.querySelector(".bubble-pop-up-container");if(null===r){e.elements.popUpContainer=(0,utils.n)("div"),e.elements.popUpContainer.classList.add("bubble-pop-up-container");let s=e.popUp.firstChild;for(;s;)e.elements.popUpContainer.appendChild(s),s=e.popUp.firstChild}else e.elements.popUpContainer=r;e.popUpBackground=(0,utils.n)("div","bubble-pop-up-background"),e.popUp.appendChild(e.popUpBackground),e.popUp.appendChild(e.elements.headerContainer),e.popUp.appendChild(e.elements.popUpContainer),e.config.hash!==location.hash&&hideContent(e,0),window.dispatchEvent(new Event("location-changed"))}catch(l){console.error(l)}}function prepareStructure(e){try{e.cardType="pop-up",e.verticalStack=e.getRootNode(),e.sectionRow=e.verticalStack.host.parentElement,e.sectionRowContainer=e.sectionRow?.parentElement,e.popUp=e.verticalStack.querySelector("#root"),e.popUp.classList.add("bubble-pop-up","pop-up","is-popup-closed"),e.cardTitle=e.verticalStack.querySelector(".card-header"),e.editor||e.config.background_update||e.verticalStack.removeChild(e.popUp),e.elements={},getBackdrop(e),e.cardTitle&&(e.cardTitle.style.display="none"),hideBackdrop=hideBackdrop||(e.config.hide_backdrop??!0),e.popUp.style.setProperty("--custom-height-offset-desktop",e.config.margin_top_desktop??"0px"),e.popUp.style.setProperty("--custom-height-offset-mobile",e.config.margin_top_mobile??"0px"),e.popUp.style.setProperty("--custom-margin",`-${e.config.margin??"7px"}`),e.popUp.style.setProperty("--custom-popup-filter",e.config.backdrop_blur&&"0"!==e.config.backdrop_blur?"none":`blur(${e.config.bg_blur??10}px)`),e.popUp.style.setProperty("--custom-shadow-opacity",(e.config.shadow_opacity??0)/100);const t=onUrlChange(e);window.addEventListener("location-changed",t),window.addEventListener("popstate",t)}catch(e){console.error(e)}}function getValueFromEntityId(e,t){try{if(e.states[t])return e.states[t]?.state}catch{}}function checkStateCondition(e,t){const n=e.entity_id||e.entity,o=n&&t.states[n]?t.states[n]:null,i=o?e.attribute&&o.attributes?o.attributes[e.attribute]:o.state:"unavailable";let a=e.state??e.state_not;if(Array.isArray(a)){const e=a.map((e=>getValueFromEntityId(t,e))).filter((e=>void 0!==e));a=[...a,...e]}else if("string"==typeof a){const e=getValueFromEntityId(t,a);a=[a],e&&a.push(e)}return null!=e.state?ensureArray(a).includes(i):null!=e.state_not&&!ensureArray(a).includes(i)}function ensureArray(e){return void 0===e||Array.isArray(e)?e:[e]}function checkStateNumericCondition(e,t){const n=e.entity_id||e.entity,o=(n?t.states[n]:void 0)?.state;let i=e.above,a=e.below;"string"==typeof i&&(i=getValueFromEntityId(t,i)??i),"string"==typeof a&&(a=getValueFromEntityId(t,a)??a);const r=Number(o),s=Number(i),l=Number(a);return!isNaN(r)&&(null==e.above||isNaN(s)||s<r)&&(null==e.below||isNaN(l)||l>r)}function checkScreenCondition(e){return!!e.media_query&&matchMedia(e.media_query).matches}function checkUserCondition(e,t){return!(!e.users||!t.user?.id)&&e.users.includes(t.user.id)}function checkAndCondition(e,t){return!e.conditions||checkConditionsMet(e.conditions,t)}function checkOrCondition(e,t){return!e.conditions||e.conditions.some((e=>checkConditionsMet([e],t)))}function checkConditionsMet(e,t){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return checkScreenCondition(e);case"user":return checkUserCondition(e,t);case"numeric_state":return checkStateNumericCondition(e,t);case"and":return checkAndCondition(e,t);case"or":return checkOrCondition(e,t);default:return checkStateCondition(e,t)}return checkStateCondition(e,t)}))}function extractConditionEntityIds(e){const t=new Set([]);for(const n of e)if("numeric_state"===n.condition)"string"==typeof n.above&&isValidEntityId(n.above)&&t.add(n.above),"string"==typeof n.below&&isValidEntityId(n.below)&&t.add(n.below);else if("state"===n.condition)[...ensureArray(n.state)??[],...ensureArray(n.state_not)??[]].forEach((e=>{e&&isValidEntityId(e)&&t.add(e)}));else if("conditions"in n&&n.conditions)return new Set([...t,...extractConditionEntityIds(n.conditions)]);return t}function validateStateCondition(e){return null!=(e.entity_id||e.entity)&&(null!=e.state||null!=e.state_not)}function validateScreenCondition(e){return null!=e.media_query}function validateUserCondition(e){return null!=e.users}function validateAndCondition(e){return null!=e.conditions}function validateOrCondition(e){return null!=e.conditions}function validateNumericStateCondition(e){return null!=(e.entity_id||e.entity)&&(null!=e.above||null!=e.below)}function validateConditionalConfig(e){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return validateScreenCondition(e);case"user":return validateUserCondition(e);case"numeric_state":return validateNumericStateCondition(e);case"and":return validateAndCondition(e);case"or":return validateOrCondition(e);default:return validateStateCondition(e)}return validateStateCondition(e)}))}function addEntityToCondition(e,t){return"conditions"in e&&e.conditions?{...e,conditions:e.conditions.map((e=>addEntityToCondition(e,t)))}:"state"===e.condition||"numeric_state"===e.condition?{...e,entity:t}:e}colorScheme.addEventListener("change",updateBackdropColor),updateBackdropColor();const validEntityId=/^(\w+)\.(\w+)$/,isValidEntityId=e=>validEntityId.test(e);function getIcon(e,t=e.config.entity,n=e.config.icon){const o=t?.split(".")[0],i=(0,utils.D$)(e,"device_class",t),a=(0,utils.D$)(e,"icon",t),r=n,s=(0,utils.Gu)(e,t),l={alarm_control_panel:"mdi:shield",alert:"mdi:alert",automation:"mdi:playlist-play",binary_sensor:function(){const n="off"===s;switch((0,utils.D$)(e,"device_class",t)){case"battery":return n?"mdi:battery":"mdi:battery-outline";case"battery_charging":return n?"mdi:battery":"mdi:battery-charging";case"cold":return n?"mdi:thermometer":"mdi:snowflake";case"connectivity":return n?"mdi:server-network-off":"mdi:server-network";case"door":return n?"mdi:door-closed":"mdi:door-open";case"garage_door":return n?"mdi:garage":"mdi:garage-open";case"heat":return n?"mdi:thermometer":"mdi:fire";case"light":return n?"mdi:brightness-5":"mdi:brightness-7";case"lock":return n?"mdi:lock":"mdi:lock-open";case"moisture":return n?"mdi:water-off":"mdi:water";case"motion":return n?"mdi:motion-sensor-off":"mdi:motion-sensor";case"occupancy":case"presence":return n?"mdi:home-outline":"mdi:home";case"opening":return n?"mdi:square":"mdi:square-outline";case"plug":case"power":return n?"mdi:power-plug-off":"mdi:power-plug";case"running":return n?"mdi:stop":"mdi:play";case"safety":case"tamper":return n?"mdi:check-circle":"mdi:alert-circle";case"smoke":return n?"mdi:check-circle":"mdi:smoke";case"sound":return n?"mdi:music-note-off":"mdi:music-note";case"update":return n?"mdi:package":"mdi:package-up";case"vibration":return n?"mdi:crop-portrait":"mdi:vibrate";case"window":return n?"mdi:window-closed":"mdi:window-open";default:return n?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}}(),calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",cover:function(){const n="closed"!==s;switch((0,utils.D$)(e,"device_class",t)){case"awning":return n?"mdi:awning-outline":"mdi:awning";case"blind":return n?"mdi:blinds-open":"mdi:blinds";case"curtain":return n?"mdi:curtains":"mdi:curtains-closed";case"damper":case"shutter":default:return n?"mdi:window-shutter-open":"mdi:window-shutter";case"door":return n?"mdi:door-open":"mdi:door-closed";case"garage":return n?"mdi:garage-open":"mdi:garage";case"gate":return n?"mdi:gate-open":"mdi:gate";case"shade":return n?"mdi:roller-shade":"mdi:roller-shade-closed";case"window":return n?"mdi:window-open":"mdi:window-closed"}}(),device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",lock:"mdi:lock",mailbox:"mdi:mailbox",media_player:"mdi:speaker",mower:"mdi:robot-mower",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:file-document",sensor:function(){switch((0,utils.D$)(e,"device_class",t)){case"battery":return 100==s?"mdi:battery":s>=90?"mdi:battery-90":s>=80?"mdi:battery-80":s>=70?"mdi:battery-70":s>=60?"mdi:battery-60":s>=50?"mdi:battery-50":s>=40?"mdi:battery-40":s>=30?"mdi:battery-30":s>=20?"mdi:battery-20":s>=10?"mdi:battery-10":"mdi:battery-alert";case"humidity":return"mdi:water-percent";case"illuminance":return"mdi:brightness-5";case"temperature":return"mdi:thermometer";case"pressure":return"mdi:gauge";case"power":return"mdi:flash";case"signal_strength":return"mdi:wifi";case"energy":return"mdi:lightning-bolt";default:return"mdi:eye"}}(),simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:function(n=(0,utils.Gu)(e,t)){switch(n){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}(),weblink:"mdi:open-in-new"};return r||a||(l[o]?l[o]:l[i]?l[i]:"")}function getWeatherIcon(e){switch(e){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}function getIconColor(e,t=e.config.entity,n=1){const{card_type:o,use_accent_color:i}=e.config,a=(0,utils.D$)(e,"rgb_color",t),r=(0,utils.GM)("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))")?n-.2:n,s=t===e.config.entity&&(0,utils.D$)(e,"unit_of_measurement",t)?.includes("°"),l=t===e.config.entity&&e._hass.states[t]?.state?.match(/\d+/);if(!t||s||l)return"var(--bubble-icon-color)";if((0,utils.md)(e,"light")&&!i?"button"===o?e.card.classList.add("is-light"):"pop-up"===o&&e.elements.headerContainer.classList.add("is-light"):"button"===o?e.card.classList.remove("is-light"):"pop-up"===o&&e.elements.headerContainer.classList.remove("is-light"),!t.startsWith("light.")||i)return"var(--bubble-accent-color, var(--accent-color))";const c=(0,utils.f9)([225,225,210],r);if(!a)return`var(--bubble-light-color, rgba(${c.join(", ")}))`;const d=(0,utils.f9)(a,r);return isColorCloseToWhite(a)?`var(--bubble-light-color, rgba(${c.join(", ")}))`:`var(--bubble-light-color, rgba(${d.join(", ")}))`}function getImage(e,t=e.config.entity){if(e.config.force_icon)return"";const n=(0,utils.D$)(e,"entity_picture_local",t)||(0,utils.D$)(e,"entity_picture",t);return n?e._hass.hassUrl(n):""}function getTranslatedAttribute(e,t,n,o){function i(e){const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}switch(n){case"fan_modes":return e._hass.formatEntityAttributeValue(t,"fan_mode",o);case"hvac_modes":return e._hass.formatEntityState(t,o);case"swing_modes":return e._hass.formatEntityAttributeValue(t,"swing_mode",o);case"preset_modes":return e._hass.formatEntityAttributeValue(t,"preset_mode",o);default:return i(e._hass.formatEntityState(t,o))??i(o)}}function getSelectedAttribute(e,t){switch(t){case"fan_modes":return e.attributes.fan_mode||null;case"swing_modes":return e.attributes.swing_mode||null;case"preset_modes":return e.attributes.preset_mode||null;case"effect_list":return e.attributes.effect||null;case"source_list":return e.attributes.source||null;case"sound_mode_list":return e.attributes.sound_mode||null;default:return e.state}}function getHvacModeIcon(e){switch(e){case"auto":return"mdi:thermostat-auto";case"cool":return"mdi:snowflake";case"heat":return"mdi:fire";case"heat_cool":return"mdi:sun-snowflake-variant";case"dry":return"mdi:water-percent";case"fan_only":default:return"mdi:fan";case"off":return"mdi:power"}}function getOptionIcon(e,t,n,o){let i;switch(n){case"hvac_modes":i=document.createElement("ha-icon"),i.slot="graphic",i.icon=getHvacModeIcon(o);break;case"fan_modes":if(!t.attributes.fan_modes)return null;i=document.createElement("ha-attribute-icon"),i.slot="graphic",i.attribute="fan_mode",i.attributeValue=o,i.hass=e._hass,i.stateObj=t;break;case"swing_modes":i=document.createElement("ha-attribute-icon"),i.slot="graphic",i.attribute="swing_mode",i.attributeValue=o,i.hass=e._hass,i.stateObj=t;break;case"preset_modes":i=document.createElement("ha-attribute-icon"),i.slot="graphic",i.attribute="preset_mode",i.attributeValue=o,i.hass=e._hass,i.stateObj=t;break;default:i=!1}return i}function callSelectService(e,t,n,o){const i=t?.split(".")[0];switch(i){case"input_select":e._hass.callService("input_select","select_option",{entity_id:t,option:n});break;case"select":e._hass.callService("select","select_option",{entity_id:t,option:n});break;case"climate":switch(o.select_attribute){case"hvac_modes":e._hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:n});break;case"fan_modes":e._hass.callService("climate","set_fan_mode",{entity_id:t,fan_mode:n});break;case"swing_modes":e._hass.callService("climate","set_swing_mode",{entity_id:t,swing_mode:n});break;case"preset_modes":e._hass.callService("climate","set_preset_mode",{entity_id:t,preset_mode:n})}break;case"fan":"preset_modes"===o.select_attribute&&e._hass.callService("fan","set_preset_mode",{entity_id:t,preset_mode:n});break;case"light":"effect_list"===o.select_attribute&&e._hass.callService("light","turn_on",{entity_id:t,effect:n});break;case"media_player":switch(o.select_attribute){case"source_list":e._hass.callService("media_player","select_source",{entity_id:t,source:n});break;case"sound_mode_list":e._hass.callService("media_player","select_sound_mode",{entity_id:t,sound_mode:n})}break;default:console.warn(`Unsupported entity type: ${i}`)}}const dropdown_styles_namespaceObject="mwc-list-item {\n    border-radius: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 24px));\n    margin: 0 8px;\n}\n\nmwc-list-item[selected] {\n    color: var(--primary-text-color) !important;\n    background-color: var(--bubble-select-list-item-accent-color, var(--bubble-list-item-accent-color, var(--bubble-accent-color, var(--accent-color)))); /* Added the missing 'select' in the first var without removing the previous one for compatibilty */ \n}\n\nha-select {\n    --mdc-shape-medium: var(--bubble-select-list-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    --mdc-theme-surface: var(--bubble-select-list-background-color, var(--bubble-select-main-background-color, var(--bubble-main-background-color, var(--card-background-color, var(--secondary-background-color)))));\n    --mdc-shape-large: 32px;\n    --mdc-shape-small: 64px;\n    --mdc-menu-max-width: min-content;\n    --mdc-menu-min-width: var(--bubble-select-list-width, 200px);\n    --mdc-select-max-width: min-content;\n    --mdc-select-outlined-hover-border-color: transparent;\n    --mdc-select-outlined-idle-border-color: transparent;\n    --mdc-theme-primary: transparent;\n    --right-value: calc(var(--mdc-menu-min-width) - 160px);\n}\n\n.bubble-sub-button ha-select {\n    --right-value: calc(var(--mdc-menu-min-width) - 168px);\n}\n\n.mdc-select {\n    color: transparent !important;\n    width: 150px !important;\n    position: absolute !important;\n    pointer-events: none;\n    right: var(--right-value, 46px);\n    top: -28px;\n}\n\n.mdc-menu, mwc-list, .mdc-list-item {\n    pointer-events: auto;\n}\n\n.mdc-select__dropdown-icon {\n    display: none !important;\n}\n\n.mdc-select__selected-text {\n    color: transparent !important;\n}\n\n.mdc-select__anchor {\n    width: 100%;\n    pointer-events: none;\n}\n\n.bubble-dropdown-container {\n    display: flex !important;\n    width: auto;\n    height: 100%;\n    align-items: center;\n}\n\n.bubble-dropdown-arrow {\n    display: flex;\n    position: absolute;\n    background: var(--bubble-select-arrow-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    height: 36px;\n    width: 36px;\n    right: 6px;\n    pointer-events: none;\n    border-radius: var(--bubble-select-button-border-radius, var(--bubble-border-radius, 20px));\n    align-items: center;\n    justify-content: center;\n    transition: background 0.2s, transform 0.2s;\n    pointer-events: none;\n}\n\n.bubble-dropdown-select {\n    position: relative;\n    width: 42px;\n}";function createDropdownStructure(e,t=e.elements,n){t.dropdownContainer=(0,utils.n)("div","bubble-dropdown-container"),t.dropdownSelect=(0,utils.n)("ha-select","bubble-dropdown-select"),t.dropdownSelect.setAttribute("outlined",""),t.dropdownArrow=(0,utils.n)("ha-icon","bubble-dropdown-arrow"),t.dropdownArrow.setAttribute("icon","mdi:chevron-down"),t.dropdownStyleElement=(0,utils.n)("style"),t.dropdownCustomStyleElement=(0,utils.n)("style"),t.dropdownStyleElement.textContent=dropdown_styles_namespaceObject,t.dropdownContainerStyle=(0,utils.n)("style"),t.dropdownContainerStyle.textContent=dropdown_styles_namespaceObject,t.dropdownContainer.appendChild(t.dropdownArrow),t.dropdownContainer.appendChild(t.dropdownContainerStyle),t.dropdownSelect.updateComplete.then((()=>{t.dropdownSelect.shadowRoot&&(t.dropdownSelect.shadowRoot.appendChild(t.dropdownStyleElement),t.dropdownSelect.shadowRoot.appendChild(t.dropdownCustomStyleElement),t!==e.elements&&(t.dropdownSelectStyleElement=(0,utils.n)("style"),t.dropdownSelectStyleElement.textContent=dropdown_styles_namespaceObject,t.dropdownSelect.shadowRoot.appendChild(t.dropdownSelectStyleElement),t.dropdownContainer.appendChild(t.dropdownStyleElement),n&&(t.dropdownContainer.style.width="24px"),t.dropdownArrow.style.height="20px",t.dropdownArrow.style.width="20px"))})),t===e.elements?t.buttonsContainer.appendChild(t.dropdownContainer):t.appendChild(t.dropdownContainer)}function createDropdownActions(e,t=e.elements,n=e.config.entity,o=e.config){const{dropdownArrow:i,dropdownSelect:a,mainContainer:r,background:s}=t,l=t===e.elements?r:t,c=t===e.elements?s:t;t!==e.elements&&(l.style.border="solid 2px rgba(0,0,0,0)"),c.addEventListener("click",(n=>{if("mwc-list-item"===n.target.tagName.toLowerCase())return;const o=a.shadowRoot.querySelector("mwc-menu");o.hasAttribute("open")||(i.style.transform="rotate(180deg)",t.dropdownArrow.style.background="var(--accent-color)",l.style.border="var(--bubble-select-border, solid 2px var(--accent-color))",e.elements.mainContainer.style.overflow="visible",o.setAttribute("open",""))})),a.addEventListener("closed",(n=>{n.stopPropagation(),n.preventDefault(),i.style.transform="rotate(0deg)",l.style.border="solid 2px rgba(0,0,0,0)",t.dropdownArrow.style.background="",e.elements.mainContainer.style.overflow=""})),t.dropdownSelect.addEventListener("click",(t=>{const i=t.target.value;callSelectService(e,n,i,o)}))}const sub_button_styles_namespaceObject=".bubble-sub-button-container {\n    position: relative;\n    display: flex;\n    justify-content: end;\n    right: 8px;\n    align-content: center;\n    gap: 8px;\n    align-items: center;\n}\n\n.bubble-sub-button {\n    display: flex;\n    flex-wrap: nowrap;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    right: 0;\n    box-sizing: border-box;\n    width: min-content;\n    min-width: 36px;\n    height: 36px;\n    vertical-align: middle;\n    font-size: 12px;\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n    padding: 0 8px;\n    white-space: nowrap;\n    transition: all 0.5s ease-in-out;\n    color: var(--primary-text-color);\n}\n\n.bubble-sub-button-name-container {\n    display: flex;\n}\n\n.show-icon {\n    display: flex;\n    --mdc-icon-size: 16px;\n}\n\n.bright-background {\n    color: var(--bubble-sub-button-dark-text-color, rgb(0, 0, 0));\n}\n\n.background-on {\n    background-color: var(--bubble-sub-button-light-background-color, var(--accent-color));\n}\n\n.background-off {\n    background-color: var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n}\n\n.icon-with-state {\n    margin-right: 4px;\n    --mdc-icon-size: 16px;\n}\n\n.icon-without-state {\n    margin-right: 0;\n    --mdc-icon-size: 20px;\n}\n\n.no-icon-select-arrow {\n    width: 28px !important;\n    height: 28px !important;\n    right: 2px !important;        \n}\n\n.no-icon-select-container {\n    width: 16px !important;\n}\n\n.bubble-sub-button .bubble-dropdown-arrow {\n    background: var(--bubble-select-arrow-background-color) !important;\n}\n\n.sub-buttons-grid .bubble-sub-button-container {\n    display: grid;\n    row-gap: calc( ( ( var(--row-height,56px) - 36px ) * var(--row-size,1) + var(--row-gap, 8px) * ( var(--row-size,1) - 1 ) ) / ( var(--row-size,1) + 1 ));\n    grid-template-rows: repeat(var(--row-size,1), 1fr);\n    grid-template-columns: repeat(1, 1fr);\n    grid-auto-flow: column;\n}\n\n.sub-buttons-grid .bubble-sub-button-container:has(> :last-child:nth-child(2)) :nth-child(2) {\n    grid-row: 1 / calc(var(--row-size,1) + 1);\n}\n\n.rows-2 .bubble-sub-button-container {\n    flex-direction: column;\n    gap: 4px !important;\n    row-gap: calc( ( ( var(--row-height,56px) - 40px ) * var(--row-size,1) + var(--row-gap, 8px) * ( var(--row-size,1) - 1 ) ) / ( 2*var(--row-size,1) + 2 ));\n    column-gap: 4px !important;\n    display: grid !important;\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-rows: repeat(calc(2*var(--row-size,1)), minmax(auto, max-content));\n    grid-auto-flow: column;\n    width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n    height: 20px !important;\n}\n\n.large.rows-2 .bubble-sub-button-container:has(> :last-child:nth-child(2)) :nth-child(2) {\n    grid-row: 1 / calc(2*var(--row-size,1) + 1);\n}";function create_createSubButtonStructure(e,t={}){const{container:n=e.content,appendTo:o=n.firstChild?.firstChild,before:i=!1}=t;e.elements=e.elements||{};let a=e.elements.subButtonContainer;if(!a&&e.config.sub_button){a=(0,utils.n)("div","bubble-sub-button-container");const t=(0,utils.n)("style");t.textContent=sub_button_styles_namespaceObject,a.appendChild(t),i&&o?o.prepend(a):o&&o.appendChild(a),e.elements.subButtonContainer=a}return a}function createSubButtonElement(e,t,n,o,i,a){e.elements.subButtonContainer||create_createSubButtonStructure(e);const r=(0,utils.n)("div",`bubble-sub-button bubble-sub-button-${t}`);return r.nameContainer=(0,utils.n)("div","bubble-sub-button-name-container"),r.feedbackContainer=(0,utils.n)("div","bubble-feedback-container"),r.feedback=(0,utils.n)("div","bubble-feedback-element feedback-element"),r.appendChild(r.feedbackContainer),r.feedbackContainer.appendChild(r.feedback),n&&(createDropdownStructure(e,r,o),r.dropdownContainer.style.display="none",createDropdownActions(e,r,i,a)),r.appendChild(r.nameContainer),e.elements.subButtonContainer.appendChild(r),e.elements[t]=r,r}function changeDropdownList(e,t=e.elements,n=e.config.entity,o){if(t.currentState=e._hass.states[n]?.state,!t.currentState)return;if(t.currentList=n?.startsWith("input_select")||n?.startsWith("select")?e._hass.states[n].attributes.options:e._hass.states[n].attributes[o.select_attribute],t.previousList===t.currentList&&t.previousState===t.currentState)return;let i=t.currentList;for(t.currentState;t.dropdownSelect.firstChild;)t.dropdownSelect.removeChild(t.dropdownSelect.firstChild);i.forEach((i=>{const a=document.createElement("mwc-list-item");a.value=i;const r=getOptionIcon(e,e._hass.states[n],o.select_attribute,i);r&&(a.graphic="icon",a.appendChild(r));const s=getTranslatedAttribute(e,e._hass.states[n],o.select_attribute,i);a.appendChild(document.createTextNode(s)),i===getSelectedAttribute(e._hass.states[n],o.select_attribute)&&a.setAttribute("selected",""),t.dropdownSelect.appendChild(a),t.previousList=t.currentList,t.previousState=t.currentState})),t.dropdownContainer.appendChild(t.dropdownSelect)}function getSubButtonOptions(e,t,n){const o=t.entity??e.config.entity;return{index:n,entity:o,context:e,state:e._hass.states[o],name:t.name??(0,utils.D$)(e,"friendly_name",o)??"",attributeType:t.attribute??"",attribute:(0,utils.D$)(e,t.attribute??"",o),isOn:(0,utils.$C)(e,o),showName:t.show_name??!1,showState:t.show_state??!1,showAttribute:t.show_attribute??!1,showLastChanged:t.show_last_changed??!1,showLastUpdated:t.show_last_updated??!1,showIcon:t.show_icon??!0,showBackground:t.show_background??!0,stateBackground:t.state_background??!0,lightBackground:t.light_background??!0,showArrow:t.show_arrow??!0,isSelect:o?.startsWith("input_select")||o?.startsWith("select")||t.select_attribute,icon:getIcon(e,o,t.icon??"")}}function handleDropdown(e,t,n){const{isSelect:o,showArrow:i,entity:a,subButton:r}=n;if(o&&t.dropdownSelect){const n=e._hass.states[a]?.state,o=e.previousValues[a]?.state;n!==o&&(n&&t.dropdownSelect.value!==n&&(t.dropdownSelect.value=n,t.dropdownSelect.dispatchEvent(new Event("change",{bubbles:!0}))),e.previousValues[a]={state:n}),changeDropdownList(e,t,a,r),updateDropdownArrow(t,i)}else t.contains(t.dropdownContainer)&&t.removeChild(t.dropdownContainer)}function updateDropdownArrow(e,t){t?(e.dropdownArrow.style.display="",e.dropdownContainer.style.width="24px"):(e.dropdownArrow.style.display="none",e.dropdownContainer.style.width="0px",e.style.padding="6px")}function buildDisplayedState(e,t){const{state:n,name:o,attribute:i,attributeType:a,showName:r,showState:s,showAttribute:l,showLastChanged:c,showLastUpdated:d}=e,u=[];if(r&&o&&u.push(o),n&&s&&u.push(t._hass.formatEntityState(n)),n&&c&&u.push((0,utils.r6)(n.last_changed,t._hass.locale.language)),n&&d&&u.push((0,utils.r6)(n.last_updated,t._hass.locale.language)),n&&l){const e=t._hass.formatEntityAttributeValue(n,a),o=e&&"string"==typeof e&&e.trim().startsWith("0")&&e.trim().length>1;(0!==i||o)&&u.push(e??i)}return u.length?u.join(" · ").charAt(0).toUpperCase()+u.join(" · ").slice(1):""}function updateElementVisibility(e,t,n){const{showIcon:o,isSelect:i}=t;if(!e._hasVisibilityConditions){const t=!n&&!o&&!i;e.classList.toggle("hidden",t)}e.dropdownContainer&&(e.dropdownContainer.classList.toggle("no-icon-select-container",!n&&!o&&i),e.dropdownArrow.classList.toggle("no-icon-select-arrow",!n&&!o&&i))}function updateBackground(e,t){const{showBackground:n,isOn:o,stateBackground:i,lightBackground:a,entity:r,context:s}=t;if(!n)return void e.classList.remove("background-on","background-off");const l=(0,utils.GM)("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))");o&&i?(a&&e.style.setProperty("--bubble-sub-button-light-background-color",getIconColor(s,r,l?1:.8)),e.classList.add("background-on"),e.classList.remove("background-off")):(e.classList.add("background-off"),e.classList.remove("background-on"))}function setupActions(e,t){const{subButton:n,isSelect:o,entity:i}=t;if(("none"!==n.tap_action?.action||"none"!==n.double_tap_action?.action||"none"!==n.hold_action?.action)&&!e.actionAdded){const t={tap_action:{action:o?"none":"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}};o?e.setAttribute("no-slide",""):addActions(e,o?"":n,i,t),addFeedback(e,e.feedback),o&&(e.style.pointerEvents="auto",e.style.cursor="pointer"),e.actionAdded=!0}}function changes_updateSubButtons(e,t){if(!t)return;e.previousValues=e.previousValues||{};const n=[...e.previousValues.subButtons||[]];t.forEach(((t,n)=>{if(!t)return;const o=getSubButtonOptions(e,t,n+1);if("fan_modes"===o.attributeType&&null==o.attribute)return void(e.elements[o.index]||(0,utils.n)("div",`bubble-sub-button bubble-sub-button-${o.index}`)).classList.add("hidden");let i=e.elements[o.index];(!i||o.isSelect&&!i.dropdownContainer)&&(i=createSubButtonElement(e,o.index,o.isSelect,o.showArrow,o.entity,t)),updateSubButtonContent(e,i,{...o,subButton:t}),handleVisibilityConditions(i,t,e._hass)})),cleanupOldButtons(e,n,t),e.previousValues.subButtons=t.slice()}function updateSubButtonContent(e,t,n){handleDropdown(e,t,n),updateBackground(t,n),setupActions(t,n);const o=buildDisplayedState(n,e);updateElementVisibility(t,n,o),t.nameContainer.textContent!==o&&(t.nameContainer.textContent=o);const i=!(!n.isSelect||!t.dropdownSelect)&&Array.from(t.dropdownSelect.children).find((e=>e.hasAttribute("selected")))?.value;if(n.showIcon&&n.icon){let a=t.icon;if(a||(a=(0,utils.n)("ha-icon","bubble-sub-button-icon"),a.classList.add("show-icon"),t.appendChild(a),t.icon=a),i){const o=getOptionIcon(e,n.state,n.subButton.select_attribute,i);o&&!n.subButton.icon?(a.tagName!==o.tagName||a.icon!==o.icon||a.attribute!==o.attribute||a.attributeValue!==o.attributeValue)&&(t.replaceChild(o,a),t.icon=o,a=o):a.icon!==n.icon&&a.setAttribute("icon",n.icon)}else a.icon!==n.icon&&a.setAttribute("icon",n.icon);a.classList.remove("hidden"),a.classList.add("bubble-sub-button-icon","show-icon"),a.classList.toggle("icon-with-state",!!o),a.classList.toggle("icon-without-state",!o)}else t.icon&&(t.icon.classList.remove("show-icon"),t.icon.classList.add("hidden"));t.icon?.getAttribute("icon")!==t.icon?.icon&&t.icon.setAttribute("icon",t.icon.icon)}function handleVisibilityConditions(e,t,n){const o=t.visibility;if(null!=o){e._hasVisibilityConditions=!0;const t=ensureArray(o);if(validateConditionalConfig(t)){const o=checkConditionsMet(t,n);void 0!==e._previousVisibilityState&&e._previousVisibilityState===o||(e.classList.toggle("hidden",!o),e._previousVisibilityState=o)}}else e._hasVisibilityConditions=!1}function cleanupOldButtons(e,t,n){for(let o=t.length;o>n.length;o--){const t=e.elements[o];t&&(e.elements.subButtonContainer.removeChild(t),delete e.elements[o])}}function changeSubButtons(e,t=e.config.sub_button){changes_updateSubButtons(e,t),initializesubButtonIcon(e)}function initializesubButtonIcon(e){Array.isArray(e.subButtonIcon)||(e.subButtonIcon=[]),("pop-up"===e.config.card_type?e.popUp:e.content).querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t}))}function getSubButtonsStates(e){const t=e.config.sub_button;return t&&Array.isArray(t)?t.map((t=>{if(!t)return"";const n=t.entity??e.config.entity;return e._hass.states[n]?.state??""})):[]}function isNothing(e){return null==e}function isObject(e){return"object"==typeof e&&null!==e}function toArray(e){return Array.isArray(e)?e:isNothing(e)?[]:[e]}function extend(e,t){var n,o,i,a;if(t)for(n=0,o=(a=Object.keys(t)).length;n<o;n+=1)e[i=a[n]]=t[i];return e}function repeat(e,t){var n,o="";for(n=0;n<t;n+=1)o+=e;return o}function isNegativeZero(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e}var isNothing_1=isNothing,isObject_1=isObject,toArray_1=toArray,repeat_1=repeat,isNegativeZero_1=isNegativeZero,extend_1=extend,common={isNothing:isNothing_1,isObject:isObject_1,toArray:toArray_1,repeat:repeat_1,isNegativeZero:isNegativeZero_1,extend:extend_1};function formatError(e,t){var n="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+="\n\n"+e.mark.snippet),o+" "+n):o}function YAMLException$1(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=formatError(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}YAMLException$1.prototype=Object.create(Error.prototype),YAMLException$1.prototype.constructor=YAMLException$1,YAMLException$1.prototype.toString=function(e){return this.name+": "+formatError(this,e)};var exception=YAMLException$1;function getLine(e,t,n,o,i){var a="",r="",s=Math.floor(i/2)-1;return o-t>s&&(t=o-s+(a=" ... ").length),n-o>s&&(n=o+s-(r=" ...").length),{str:a+e.slice(t,n).replace(/\t/g,"→")+r,pos:o-t+a.length}}function padStart(e,t){return common.repeat(" ",t-e.length)+e}function makeSnippet(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var n,o=/\r?\n|\r|\0/g,i=[0],a=[],r=-1;n=o.exec(e.buffer);)a.push(n.index),i.push(n.index+n[0].length),e.position<=n.index&&r<0&&(r=i.length-2);r<0&&(r=i.length-1);var s,l,c="",d=Math.min(e.line+t.linesAfter,a.length).toString().length,u=t.maxLength-(t.indent+d+3);for(s=1;s<=t.linesBefore&&!(r-s<0);s++)l=getLine(e.buffer,i[r-s],a[r-s],e.position-(i[r]-i[r-s]),u),c=common.repeat(" ",t.indent)+padStart((e.line-s+1).toString(),d)+" | "+l.str+"\n"+c;for(l=getLine(e.buffer,i[r],a[r],e.position,u),c+=common.repeat(" ",t.indent)+padStart((e.line+1).toString(),d)+" | "+l.str+"\n",c+=common.repeat("-",t.indent+d+3+l.pos)+"^\n",s=1;s<=t.linesAfter&&!(r+s>=a.length);s++)l=getLine(e.buffer,i[r+s],a[r+s],e.position-(i[r]-i[r+s]),u),c+=common.repeat(" ",t.indent)+padStart((e.line+s+1).toString(),d)+" | "+l.str+"\n";return c.replace(/\n$/,"")}var snippet=makeSnippet,TYPE_CONSTRUCTOR_OPTIONS=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],YAML_NODE_KINDS=["scalar","sequence","mapping"];function compileStyleAliases(e){var t={};return null!==e&&Object.keys(e).forEach((function(n){e[n].forEach((function(e){t[String(e)]=n}))})),t}function Type$1(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===TYPE_CONSTRUCTOR_OPTIONS.indexOf(t))throw new exception('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=compileStyleAliases(t.styleAliases||null),-1===YAML_NODE_KINDS.indexOf(this.kind))throw new exception('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var type=Type$1;function compileList(e,t){var n=[];return e[t].forEach((function(e){var t=n.length;n.forEach((function(n,o){n.tag===e.tag&&n.kind===e.kind&&n.multi===e.multi&&(t=o)})),n[t]=e})),n}function compileMap(){var e,t,n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function o(e){e.multi?(n.multi[e.kind].push(e),n.multi.fallback.push(e)):n[e.kind][e.tag]=n.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(o);return n}function Schema$1(e){return this.extend(e)}Schema$1.prototype.extend=function(e){var t=[],n=[];if(e instanceof type)n.push(e);else if(Array.isArray(e))n=n.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(n=n.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof type))throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),n.forEach((function(e){if(!(e instanceof type))throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var o=Object.create(Schema$1.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(n),o.compiledImplicit=compileList(o,"implicit"),o.compiledExplicit=compileList(o,"explicit"),o.compiledTypeMap=compileMap(o.compiledImplicit,o.compiledExplicit),o};var schema=Schema$1,str=new type("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),seq=new type("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),map=new type("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),failsafe=new schema({explicit:[str,seq,map]});function resolveYamlNull(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)}function constructYamlNull(){return null}function isNull(e){return null===e}var _null=new type("tag:yaml.org,2002:null",{kind:"scalar",resolve:resolveYamlNull,construct:constructYamlNull,predicate:isNull,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function resolveYamlBoolean(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)}function constructYamlBoolean(e){return"true"===e||"True"===e||"TRUE"===e}function isBoolean(e){return"[object Boolean]"===Object.prototype.toString.call(e)}var bool=new type("tag:yaml.org,2002:bool",{kind:"scalar",resolve:resolveYamlBoolean,construct:constructYamlBoolean,predicate:isBoolean,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function isHexCode(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function isOctCode(e){return 48<=e&&e<=55}function isDecCode(e){return 48<=e&&e<=57}function resolveYamlInteger(e){if(null===e)return!1;var t,n=e.length,o=0,i=!1;if(!n)return!1;if("-"!==(t=e[o])&&"+"!==t||(t=e[++o]),"0"===t){if(o+1===n)return!0;if("b"===(t=e[++o])){for(o++;o<n;o++)if("_"!==(t=e[o])){if("0"!==t&&"1"!==t)return!1;i=!0}return i&&"_"!==t}if("x"===t){for(o++;o<n;o++)if("_"!==(t=e[o])){if(!isHexCode(e.charCodeAt(o)))return!1;i=!0}return i&&"_"!==t}if("o"===t){for(o++;o<n;o++)if("_"!==(t=e[o])){if(!isOctCode(e.charCodeAt(o)))return!1;i=!0}return i&&"_"!==t}}if("_"===t)return!1;for(;o<n;o++)if("_"!==(t=e[o])){if(!isDecCode(e.charCodeAt(o)))return!1;i=!0}return!(!i||"_"===t)}function constructYamlInteger(e){var t,n=e,o=1;if(-1!==n.indexOf("_")&&(n=n.replace(/_/g,"")),"-"!==(t=n[0])&&"+"!==t||("-"===t&&(o=-1),t=(n=n.slice(1))[0]),"0"===n)return 0;if("0"===t){if("b"===n[1])return o*parseInt(n.slice(2),2);if("x"===n[1])return o*parseInt(n.slice(2),16);if("o"===n[1])return o*parseInt(n.slice(2),8)}return o*parseInt(n,10)}function isInteger(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!common.isNegativeZero(e)}var js_yaml_int=new type("tag:yaml.org,2002:int",{kind:"scalar",resolve:resolveYamlInteger,construct:constructYamlInteger,predicate:isInteger,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),YAML_FLOAT_PATTERN=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function resolveYamlFloat(e){return null!==e&&!(!YAML_FLOAT_PATTERN.test(e)||"_"===e[e.length-1])}function constructYamlFloat(e){var t,n;return n="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:n*parseFloat(t,10)}var SCIENTIFIC_WITHOUT_DOT=/^[-+]?[0-9]+e/;function representYamlFloat(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(common.isNegativeZero(e))return"-0.0";return n=e.toString(10),SCIENTIFIC_WITHOUT_DOT.test(n)?n.replace("e",".e"):n}function isFloat(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||common.isNegativeZero(e))}var js_yaml_float=new type("tag:yaml.org,2002:float",{kind:"scalar",resolve:resolveYamlFloat,construct:constructYamlFloat,predicate:isFloat,represent:representYamlFloat,defaultStyle:"lowercase"}),json=failsafe.extend({implicit:[_null,bool,js_yaml_int,js_yaml_float]}),core=json,YAML_DATE_REGEXP=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),YAML_TIMESTAMP_REGEXP=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function resolveYamlTimestamp(e){return null!==e&&(null!==YAML_DATE_REGEXP.exec(e)||null!==YAML_TIMESTAMP_REGEXP.exec(e))}function constructYamlTimestamp(e){var t,n,o,i,a,r,s,l,c=0,d=null;if(null===(t=YAML_DATE_REGEXP.exec(e))&&(t=YAML_TIMESTAMP_REGEXP.exec(e)),null===t)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,i=+t[3],!t[4])return new Date(Date.UTC(n,o,i));if(a=+t[4],r=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(d=-d)),l=new Date(Date.UTC(n,o,i,a,r,s,c)),d&&l.setTime(l.getTime()-d),l}function representYamlTimestamp(e){return e.toISOString()}var timestamp=new type("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:resolveYamlTimestamp,construct:constructYamlTimestamp,instanceOf:Date,represent:representYamlTimestamp});function resolveYamlMerge(e){return"<<"===e||null===e}var merge=new type("tag:yaml.org,2002:merge",{kind:"scalar",resolve:resolveYamlMerge}),BASE64_MAP="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";function resolveYamlBinary(e){if(null===e)return!1;var t,n,o=0,i=e.length,a=BASE64_MAP;for(n=0;n<i;n++)if(!((t=a.indexOf(e.charAt(n)))>64)){if(t<0)return!1;o+=6}return o%8==0}function constructYamlBinary(e){var t,n,o=e.replace(/[\r\n=]/g,""),i=o.length,a=BASE64_MAP,r=0,s=[];for(t=0;t<i;t++)t%4==0&&t&&(s.push(r>>16&255),s.push(r>>8&255),s.push(255&r)),r=r<<6|a.indexOf(o.charAt(t));return 0==(n=i%4*6)?(s.push(r>>16&255),s.push(r>>8&255),s.push(255&r)):18===n?(s.push(r>>10&255),s.push(r>>2&255)):12===n&&s.push(r>>4&255),new Uint8Array(s)}function representYamlBinary(e){var t,n,o="",i=0,a=e.length,r=BASE64_MAP;for(t=0;t<a;t++)t%3==0&&t&&(o+=r[i>>18&63],o+=r[i>>12&63],o+=r[i>>6&63],o+=r[63&i]),i=(i<<8)+e[t];return 0==(n=a%3)?(o+=r[i>>18&63],o+=r[i>>12&63],o+=r[i>>6&63],o+=r[63&i]):2===n?(o+=r[i>>10&63],o+=r[i>>4&63],o+=r[i<<2&63],o+=r[64]):1===n&&(o+=r[i>>2&63],o+=r[i<<4&63],o+=r[64],o+=r[64]),o}function isBinary(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)}var binary=new type("tag:yaml.org,2002:binary",{kind:"scalar",resolve:resolveYamlBinary,construct:constructYamlBinary,predicate:isBinary,represent:representYamlBinary}),_hasOwnProperty$3=Object.prototype.hasOwnProperty,_toString$2=Object.prototype.toString;function resolveYamlOmap(e){if(null===e)return!0;var t,n,o,i,a,r=[],s=e;for(t=0,n=s.length;t<n;t+=1){if(o=s[t],a=!1,"[object Object]"!==_toString$2.call(o))return!1;for(i in o)if(_hasOwnProperty$3.call(o,i)){if(a)return!1;a=!0}if(!a)return!1;if(-1!==r.indexOf(i))return!1;r.push(i)}return!0}function constructYamlOmap(e){return null!==e?e:[]}var omap=new type("tag:yaml.org,2002:omap",{kind:"sequence",resolve:resolveYamlOmap,construct:constructYamlOmap}),_toString$1=Object.prototype.toString;function resolveYamlPairs(e){if(null===e)return!0;var t,n,o,i,a,r=e;for(a=new Array(r.length),t=0,n=r.length;t<n;t+=1){if(o=r[t],"[object Object]"!==_toString$1.call(o))return!1;if(1!==(i=Object.keys(o)).length)return!1;a[t]=[i[0],o[i[0]]]}return!0}function constructYamlPairs(e){if(null===e)return[];var t,n,o,i,a,r=e;for(a=new Array(r.length),t=0,n=r.length;t<n;t+=1)o=r[t],i=Object.keys(o),a[t]=[i[0],o[i[0]]];return a}var pairs=new type("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:resolveYamlPairs,construct:constructYamlPairs}),_hasOwnProperty$2=Object.prototype.hasOwnProperty;function resolveYamlSet(e){if(null===e)return!0;var t,n=e;for(t in n)if(_hasOwnProperty$2.call(n,t)&&null!==n[t])return!1;return!0}function constructYamlSet(e){return null!==e?e:{}}var set=new type("tag:yaml.org,2002:set",{kind:"mapping",resolve:resolveYamlSet,construct:constructYamlSet}),_default=core.extend({implicit:[timestamp,merge],explicit:[binary,omap,pairs,set]}),_hasOwnProperty$1=Object.prototype.hasOwnProperty,CONTEXT_FLOW_IN=1,CONTEXT_FLOW_OUT=2,CONTEXT_BLOCK_IN=3,CONTEXT_BLOCK_OUT=4,CHOMPING_CLIP=1,CHOMPING_STRIP=2,CHOMPING_KEEP=3,PATTERN_NON_PRINTABLE=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,PATTERN_NON_ASCII_LINE_BREAKS=/[\x85\u2028\u2029]/,PATTERN_FLOW_INDICATORS=/[,\[\]\{\}]/,PATTERN_TAG_HANDLE=/^(?:!|!!|![a-z\-]+!)$/i,PATTERN_TAG_URI=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function _class(e){return Object.prototype.toString.call(e)}function is_EOL(e){return 10===e||13===e}function is_WHITE_SPACE(e){return 9===e||32===e}function is_WS_OR_EOL(e){return 9===e||32===e||10===e||13===e}function is_FLOW_INDICATOR(e){return 44===e||91===e||93===e||123===e||125===e}function fromHexCode(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function escapedHexLen(e){return 120===e?2:117===e?4:85===e?8:0}function fromDecimalCode(e){return 48<=e&&e<=57?e-48:-1}function simpleEscapeSequence(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function charFromCodepoint(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var simpleEscapeCheck=new Array(256),simpleEscapeMap=new Array(256),i=0;i<256;i++)simpleEscapeCheck[i]=simpleEscapeSequence(i)?1:0,simpleEscapeMap[i]=simpleEscapeSequence(i);function State$1(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||_default,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function generateError(e,t){var n={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return n.snippet=snippet(n),new exception(t,n)}function throwError(e,t){throw generateError(e,t)}function throwWarning(e,t){e.onWarning&&e.onWarning.call(null,generateError(e,t))}var directiveHandlers={YAML:function(e,t,n){var o,i,a;null!==e.version&&throwError(e,"duplication of %YAML directive"),1!==n.length&&throwError(e,"YAML directive accepts exactly one argument"),null===(o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&throwError(e,"ill-formed argument of the YAML directive"),i=parseInt(o[1],10),a=parseInt(o[2],10),1!==i&&throwError(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=a<2,1!==a&&2!==a&&throwWarning(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var o,i;2!==n.length&&throwError(e,"TAG directive accepts exactly two arguments"),o=n[0],i=n[1],PATTERN_TAG_HANDLE.test(o)||throwError(e,"ill-formed tag handle (first argument) of the TAG directive"),_hasOwnProperty$1.call(e.tagMap,o)&&throwError(e,'there is a previously declared suffix for "'+o+'" tag handle'),PATTERN_TAG_URI.test(i)||throwError(e,"ill-formed tag prefix (second argument) of the TAG directive");try{i=decodeURIComponent(i)}catch(t){throwError(e,"tag prefix is malformed: "+i)}e.tagMap[o]=i}};function captureSegment(e,t,n,o){var i,a,r,s;if(t<n){if(s=e.input.slice(t,n),o)for(i=0,a=s.length;i<a;i+=1)9===(r=s.charCodeAt(i))||32<=r&&r<=1114111||throwError(e,"expected valid JSON character");else PATTERN_NON_PRINTABLE.test(s)&&throwError(e,"the stream contains non-printable characters");e.result+=s}}function mergeMappings(e,t,n,o){var i,a,r,s;for(common.isObject(n)||throwError(e,"cannot merge mappings; the provided source object is unacceptable"),r=0,s=(i=Object.keys(n)).length;r<s;r+=1)a=i[r],_hasOwnProperty$1.call(t,a)||(t[a]=n[a],o[a]=!0)}function storeMappingPair(e,t,n,o,i,a,r,s,l){var c,d;if(Array.isArray(i))for(c=0,d=(i=Array.prototype.slice.call(i)).length;c<d;c+=1)Array.isArray(i[c])&&throwError(e,"nested arrays are not supported inside keys"),"object"==typeof i&&"[object Object]"===_class(i[c])&&(i[c]="[object Object]");if("object"==typeof i&&"[object Object]"===_class(i)&&(i="[object Object]"),i=String(i),null===t&&(t={}),"tag:yaml.org,2002:merge"===o)if(Array.isArray(a))for(c=0,d=a.length;c<d;c+=1)mergeMappings(e,t,a[c],n);else mergeMappings(e,t,a,n);else e.json||_hasOwnProperty$1.call(n,i)||!_hasOwnProperty$1.call(t,i)||(e.line=r||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,throwError(e,"duplicated mapping key")),"__proto__"===i?Object.defineProperty(t,i,{configurable:!0,enumerable:!0,writable:!0,value:a}):t[i]=a,delete n[i];return t}function readLineBreak(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):throwError(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function skipSeparationSpace(e,t,n){for(var o=0,i=e.input.charCodeAt(e.position);0!==i;){for(;is_WHITE_SPACE(i);)9===i&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(t&&35===i)do{i=e.input.charCodeAt(++e.position)}while(10!==i&&13!==i&&0!==i);if(!is_EOL(i))break;for(readLineBreak(e),i=e.input.charCodeAt(e.position),o++,e.lineIndent=0;32===i;)e.lineIndent++,i=e.input.charCodeAt(++e.position)}return-1!==n&&0!==o&&e.lineIndent<n&&throwWarning(e,"deficient indentation"),o}function testDocumentSeparator(e){var t,n=e.position;return!(45!==(t=e.input.charCodeAt(n))&&46!==t||t!==e.input.charCodeAt(n+1)||t!==e.input.charCodeAt(n+2)||(n+=3,0!==(t=e.input.charCodeAt(n))&&!is_WS_OR_EOL(t)))}function writeFoldedLines(e,t){1===t?e.result+=" ":t>1&&(e.result+=common.repeat("\n",t-1))}function readPlainScalar(e,t,n){var o,i,a,r,s,l,c,d,u=e.kind,p=e.result;if(is_WS_OR_EOL(d=e.input.charCodeAt(e.position))||is_FLOW_INDICATOR(d)||35===d||38===d||42===d||33===d||124===d||62===d||39===d||34===d||37===d||64===d||96===d)return!1;if((63===d||45===d)&&(is_WS_OR_EOL(o=e.input.charCodeAt(e.position+1))||n&&is_FLOW_INDICATOR(o)))return!1;for(e.kind="scalar",e.result="",i=a=e.position,r=!1;0!==d;){if(58===d){if(is_WS_OR_EOL(o=e.input.charCodeAt(e.position+1))||n&&is_FLOW_INDICATOR(o))break}else if(35===d){if(is_WS_OR_EOL(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&testDocumentSeparator(e)||n&&is_FLOW_INDICATOR(d))break;if(is_EOL(d)){if(s=e.line,l=e.lineStart,c=e.lineIndent,skipSeparationSpace(e,!1,-1),e.lineIndent>=t){r=!0,d=e.input.charCodeAt(e.position);continue}e.position=a,e.line=s,e.lineStart=l,e.lineIndent=c;break}}r&&(captureSegment(e,i,a,!1),writeFoldedLines(e,e.line-s),i=a=e.position,r=!1),is_WHITE_SPACE(d)||(a=e.position+1),d=e.input.charCodeAt(++e.position)}return captureSegment(e,i,a,!1),!!e.result||(e.kind=u,e.result=p,!1)}function readSingleQuotedScalar(e,t){var n,o,i;if(39!==(n=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,o=i=e.position;0!==(n=e.input.charCodeAt(e.position));)if(39===n){if(captureSegment(e,o,e.position,!0),39!==(n=e.input.charCodeAt(++e.position)))return!0;o=e.position,e.position++,i=e.position}else is_EOL(n)?(captureSegment(e,o,i,!0),writeFoldedLines(e,skipSeparationSpace(e,!1,t)),o=i=e.position):e.position===e.lineStart&&testDocumentSeparator(e)?throwError(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);throwError(e,"unexpected end of the stream within a single quoted scalar")}function readDoubleQuotedScalar(e,t){var n,o,i,a,r,s;if(34!==(s=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=o=e.position;0!==(s=e.input.charCodeAt(e.position));){if(34===s)return captureSegment(e,n,e.position,!0),e.position++,!0;if(92===s){if(captureSegment(e,n,e.position,!0),is_EOL(s=e.input.charCodeAt(++e.position)))skipSeparationSpace(e,!1,t);else if(s<256&&simpleEscapeCheck[s])e.result+=simpleEscapeMap[s],e.position++;else if((r=escapedHexLen(s))>0){for(i=r,a=0;i>0;i--)(r=fromHexCode(s=e.input.charCodeAt(++e.position)))>=0?a=(a<<4)+r:throwError(e,"expected hexadecimal character");e.result+=charFromCodepoint(a),e.position++}else throwError(e,"unknown escape sequence");n=o=e.position}else is_EOL(s)?(captureSegment(e,n,o,!0),writeFoldedLines(e,skipSeparationSpace(e,!1,t)),n=o=e.position):e.position===e.lineStart&&testDocumentSeparator(e)?throwError(e,"unexpected end of the document within a double quoted scalar"):(e.position++,o=e.position)}throwError(e,"unexpected end of the stream within a double quoted scalar")}function readFlowCollection(e,t){var n,o,i,a,r,s,l,c,d,u,p,h,b=!0,m=e.tag,g=e.anchor,f=Object.create(null);if(91===(h=e.input.charCodeAt(e.position)))r=93,c=!1,a=[];else{if(123!==h)return!1;r=125,c=!0,a={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),h=e.input.charCodeAt(++e.position);0!==h;){if(skipSeparationSpace(e,!0,t),(h=e.input.charCodeAt(e.position))===r)return e.position++,e.tag=m,e.anchor=g,e.kind=c?"mapping":"sequence",e.result=a,!0;b?44===h&&throwError(e,"expected the node content, but found ','"):throwError(e,"missed comma between flow collection entries"),p=null,s=l=!1,63===h&&is_WS_OR_EOL(e.input.charCodeAt(e.position+1))&&(s=l=!0,e.position++,skipSeparationSpace(e,!0,t)),n=e.line,o=e.lineStart,i=e.position,composeNode(e,t,CONTEXT_FLOW_IN,!1,!0),u=e.tag,d=e.result,skipSeparationSpace(e,!0,t),h=e.input.charCodeAt(e.position),!l&&e.line!==n||58!==h||(s=!0,h=e.input.charCodeAt(++e.position),skipSeparationSpace(e,!0,t),composeNode(e,t,CONTEXT_FLOW_IN,!1,!0),p=e.result),c?storeMappingPair(e,a,f,u,d,p,n,o,i):s?a.push(storeMappingPair(e,null,f,u,d,p,n,o,i)):a.push(d),skipSeparationSpace(e,!0,t),44===(h=e.input.charCodeAt(e.position))?(b=!0,h=e.input.charCodeAt(++e.position)):b=!1}throwError(e,"unexpected end of the stream within a flow collection")}function readBlockScalar(e,t){var n,o,i,a,r=CHOMPING_CLIP,s=!1,l=!1,c=t,d=0,u=!1;if(124===(a=e.input.charCodeAt(e.position)))o=!1;else{if(62!==a)return!1;o=!0}for(e.kind="scalar",e.result="";0!==a;)if(43===(a=e.input.charCodeAt(++e.position))||45===a)CHOMPING_CLIP===r?r=43===a?CHOMPING_KEEP:CHOMPING_STRIP:throwError(e,"repeat of a chomping mode identifier");else{if(!((i=fromDecimalCode(a))>=0))break;0===i?throwError(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?throwError(e,"repeat of an indentation width identifier"):(c=t+i-1,l=!0)}if(is_WHITE_SPACE(a)){do{a=e.input.charCodeAt(++e.position)}while(is_WHITE_SPACE(a));if(35===a)do{a=e.input.charCodeAt(++e.position)}while(!is_EOL(a)&&0!==a)}for(;0!==a;){for(readLineBreak(e),e.lineIndent=0,a=e.input.charCodeAt(e.position);(!l||e.lineIndent<c)&&32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position);if(!l&&e.lineIndent>c&&(c=e.lineIndent),is_EOL(a))d++;else{if(e.lineIndent<c){r===CHOMPING_KEEP?e.result+=common.repeat("\n",s?1+d:d):r===CHOMPING_CLIP&&s&&(e.result+="\n");break}for(o?is_WHITE_SPACE(a)?(u=!0,e.result+=common.repeat("\n",s?1+d:d)):u?(u=!1,e.result+=common.repeat("\n",d+1)):0===d?s&&(e.result+=" "):e.result+=common.repeat("\n",d):e.result+=common.repeat("\n",s?1+d:d),s=!0,l=!0,d=0,n=e.position;!is_EOL(a)&&0!==a;)a=e.input.charCodeAt(++e.position);captureSegment(e,n,e.position,!1)}}return!0}function readBlockSequence(e,t){var n,o,i=e.tag,a=e.anchor,r=[],s=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=r),o=e.input.charCodeAt(e.position);0!==o&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,throwError(e,"tab characters must not be used in indentation")),45===o)&&is_WS_OR_EOL(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,skipSeparationSpace(e,!0,-1)&&e.lineIndent<=t)r.push(null),o=e.input.charCodeAt(e.position);else if(n=e.line,composeNode(e,t,CONTEXT_BLOCK_IN,!1,!0),r.push(e.result),skipSeparationSpace(e,!0,-1),o=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==o)throwError(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=i,e.anchor=a,e.kind="sequence",e.result=r,!0)}function readBlockMapping(e,t,n){var o,i,a,r,s,l,c,d=e.tag,u=e.anchor,p={},h=Object.create(null),b=null,m=null,g=null,f=!1,_=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=p),c=e.input.charCodeAt(e.position);0!==c;){if(f||-1===e.firstTabInLine||(e.position=e.firstTabInLine,throwError(e,"tab characters must not be used in indentation")),o=e.input.charCodeAt(e.position+1),a=e.line,63!==c&&58!==c||!is_WS_OR_EOL(o)){if(r=e.line,s=e.lineStart,l=e.position,!composeNode(e,n,CONTEXT_FLOW_OUT,!1,!0))break;if(e.line===a){for(c=e.input.charCodeAt(e.position);is_WHITE_SPACE(c);)c=e.input.charCodeAt(++e.position);if(58===c)is_WS_OR_EOL(c=e.input.charCodeAt(++e.position))||throwError(e,"a whitespace character is expected after the key-value separator within a block mapping"),f&&(storeMappingPair(e,p,h,b,m,null,r,s,l),b=m=g=null),_=!0,f=!1,i=!1,b=e.tag,m=e.result;else{if(!_)return e.tag=d,e.anchor=u,!0;throwError(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!_)return e.tag=d,e.anchor=u,!0;throwError(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(f&&(storeMappingPair(e,p,h,b,m,null,r,s,l),b=m=g=null),_=!0,f=!0,i=!0):f?(f=!1,i=!0):throwError(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=o;if((e.line===a||e.lineIndent>t)&&(f&&(r=e.line,s=e.lineStart,l=e.position),composeNode(e,t,CONTEXT_BLOCK_OUT,!0,i)&&(f?m=e.result:g=e.result),f||(storeMappingPair(e,p,h,b,m,g,r,s,l),b=m=g=null),skipSeparationSpace(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>t)&&0!==c)throwError(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return f&&storeMappingPair(e,p,h,b,m,null,r,s,l),_&&(e.tag=d,e.anchor=u,e.kind="mapping",e.result=p),_}function readTagProperty(e){var t,n,o,i,a=!1,r=!1;if(33!==(i=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&throwError(e,"duplication of a tag property"),60===(i=e.input.charCodeAt(++e.position))?(a=!0,i=e.input.charCodeAt(++e.position)):33===i?(r=!0,n="!!",i=e.input.charCodeAt(++e.position)):n="!",t=e.position,a){do{i=e.input.charCodeAt(++e.position)}while(0!==i&&62!==i);e.position<e.length?(o=e.input.slice(t,e.position),i=e.input.charCodeAt(++e.position)):throwError(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==i&&!is_WS_OR_EOL(i);)33===i&&(r?throwError(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),PATTERN_TAG_HANDLE.test(n)||throwError(e,"named tag handle cannot contain such characters"),r=!0,t=e.position+1)),i=e.input.charCodeAt(++e.position);o=e.input.slice(t,e.position),PATTERN_FLOW_INDICATORS.test(o)&&throwError(e,"tag suffix cannot contain flow indicator characters")}o&&!PATTERN_TAG_URI.test(o)&&throwError(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch(t){throwError(e,"tag name is malformed: "+o)}return a?e.tag=o:_hasOwnProperty$1.call(e.tagMap,n)?e.tag=e.tagMap[n]+o:"!"===n?e.tag="!"+o:"!!"===n?e.tag="tag:yaml.org,2002:"+o:throwError(e,'undeclared tag handle "'+n+'"'),!0}function readAnchorProperty(e){var t,n;if(38!==(n=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&throwError(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!is_WS_OR_EOL(n)&&!is_FLOW_INDICATOR(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&throwError(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function readAlias(e){var t,n,o;if(42!==(o=e.input.charCodeAt(e.position)))return!1;for(o=e.input.charCodeAt(++e.position),t=e.position;0!==o&&!is_WS_OR_EOL(o)&&!is_FLOW_INDICATOR(o);)o=e.input.charCodeAt(++e.position);return e.position===t&&throwError(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),_hasOwnProperty$1.call(e.anchorMap,n)||throwError(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],skipSeparationSpace(e,!0,-1),!0}function composeNode(e,t,n,o,i){var a,r,s,l,c,d,u,p,h,b=1,m=!1,g=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=r=s=CONTEXT_BLOCK_OUT===n||CONTEXT_BLOCK_IN===n,o&&skipSeparationSpace(e,!0,-1)&&(m=!0,e.lineIndent>t?b=1:e.lineIndent===t?b=0:e.lineIndent<t&&(b=-1)),1===b)for(;readTagProperty(e)||readAnchorProperty(e);)skipSeparationSpace(e,!0,-1)?(m=!0,s=a,e.lineIndent>t?b=1:e.lineIndent===t?b=0:e.lineIndent<t&&(b=-1)):s=!1;if(s&&(s=m||i),1!==b&&CONTEXT_BLOCK_OUT!==n||(p=CONTEXT_FLOW_IN===n||CONTEXT_FLOW_OUT===n?t:t+1,h=e.position-e.lineStart,1===b?s&&(readBlockSequence(e,h)||readBlockMapping(e,h,p))||readFlowCollection(e,p)?g=!0:(r&&readBlockScalar(e,p)||readSingleQuotedScalar(e,p)||readDoubleQuotedScalar(e,p)?g=!0:readAlias(e)?(g=!0,null===e.tag&&null===e.anchor||throwError(e,"alias node should not have any properties")):readPlainScalar(e,p,CONTEXT_FLOW_IN===n)&&(g=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===b&&(g=s&&readBlockSequence(e,h))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&throwError(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((u=e.implicitTypes[l]).resolve(e.result)){e.result=u.construct(e.result),e.tag=u.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(_hasOwnProperty$1.call(e.typeMap[e.kind||"fallback"],e.tag))u=e.typeMap[e.kind||"fallback"][e.tag];else for(u=null,l=0,c=(d=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,d[l].tag.length)===d[l].tag){u=d[l];break}u||throwError(e,"unknown tag !<"+e.tag+">"),null!==e.result&&u.kind!==e.kind&&throwError(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+u.kind+'", not "'+e.kind+'"'),u.resolve(e.result,e.tag)?(e.result=u.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):throwError(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||g}function readDocument(e){var t,n,o,i,a=e.position,r=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(i=e.input.charCodeAt(e.position))&&(skipSeparationSpace(e,!0,-1),i=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==i));){for(r=!0,i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!is_WS_OR_EOL(i);)i=e.input.charCodeAt(++e.position);for(o=[],(n=e.input.slice(t,e.position)).length<1&&throwError(e,"directive name must not be less than one character in length");0!==i;){for(;is_WHITE_SPACE(i);)i=e.input.charCodeAt(++e.position);if(35===i){do{i=e.input.charCodeAt(++e.position)}while(0!==i&&!is_EOL(i));break}if(is_EOL(i))break;for(t=e.position;0!==i&&!is_WS_OR_EOL(i);)i=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}0!==i&&readLineBreak(e),_hasOwnProperty$1.call(directiveHandlers,n)?directiveHandlers[n](e,n,o):throwWarning(e,'unknown document directive "'+n+'"')}skipSeparationSpace(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,skipSeparationSpace(e,!0,-1)):r&&throwError(e,"directives end mark is expected"),composeNode(e,e.lineIndent-1,CONTEXT_BLOCK_OUT,!1,!0),skipSeparationSpace(e,!0,-1),e.checkLineBreaks&&PATTERN_NON_ASCII_LINE_BREAKS.test(e.input.slice(a,e.position))&&throwWarning(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&testDocumentSeparator(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,skipSeparationSpace(e,!0,-1)):e.position<e.length-1&&throwError(e,"end of the stream or a document separator is expected")}function loadDocuments(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var n=new State$1(e,t),o=e.indexOf("\0");for(-1!==o&&(n.position=o,throwError(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)readDocument(n);return n.documents}function loadAll$1(e,t,n){null!==t&&"object"==typeof t&&void 0===n&&(n=t,t=null);var o=loadDocuments(e,n);if("function"!=typeof t)return o;for(var i=0,a=o.length;i<a;i+=1)t(o[i])}function load$1(e,t){var n=loadDocuments(e,t);if(0!==n.length){if(1===n.length)return n[0];throw new exception("expected a single document in the stream, but found more")}}var loadAll_1=loadAll$1,load_1=load$1,loader={loadAll:loadAll_1,load:load_1},_toString=Object.prototype.toString,_hasOwnProperty=Object.prototype.hasOwnProperty,CHAR_BOM=65279,CHAR_TAB=9,CHAR_LINE_FEED=10,CHAR_CARRIAGE_RETURN=13,CHAR_SPACE=32,CHAR_EXCLAMATION=33,CHAR_DOUBLE_QUOTE=34,CHAR_SHARP=35,CHAR_PERCENT=37,CHAR_AMPERSAND=38,CHAR_SINGLE_QUOTE=39,CHAR_ASTERISK=42,CHAR_COMMA=44,CHAR_MINUS=45,CHAR_COLON=58,CHAR_EQUALS=61,CHAR_GREATER_THAN=62,CHAR_QUESTION=63,CHAR_COMMERCIAL_AT=64,CHAR_LEFT_SQUARE_BRACKET=91,CHAR_RIGHT_SQUARE_BRACKET=93,CHAR_GRAVE_ACCENT=96,CHAR_LEFT_CURLY_BRACKET=123,CHAR_VERTICAL_LINE=124,CHAR_RIGHT_CURLY_BRACKET=125,ESCAPE_SEQUENCES={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},DEPRECATED_BOOLEANS_SYNTAX=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],DEPRECATED_BASE60_SYNTAX=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function compileStyleMap(e,t){var n,o,i,a,r,s,l;if(null===t)return{};for(n={},i=0,a=(o=Object.keys(t)).length;i<a;i+=1)r=o[i],s=String(t[r]),"!!"===r.slice(0,2)&&(r="tag:yaml.org,2002:"+r.slice(2)),(l=e.compiledTypeMap.fallback[r])&&_hasOwnProperty.call(l.styleAliases,s)&&(s=l.styleAliases[s]),n[r]=s;return n}function encodeHex(e){var t,n,o;if(t=e.toString(16).toUpperCase(),e<=255)n="x",o=2;else if(e<=65535)n="u",o=4;else{if(!(e<=4294967295))throw new exception("code point within a string may not be greater than 0xFFFFFFFF");n="U",o=8}return"\\"+n+common.repeat("0",o-t.length)+t}var QUOTING_TYPE_SINGLE=1,QUOTING_TYPE_DOUBLE=2;function State(e){this.schema=e.schema||_default,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=common.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=compileStyleMap(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?QUOTING_TYPE_DOUBLE:QUOTING_TYPE_SINGLE,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function indentString(e,t){for(var n,o=common.repeat(" ",t),i=0,a=-1,r="",s=e.length;i<s;)-1===(a=e.indexOf("\n",i))?(n=e.slice(i),i=s):(n=e.slice(i,a+1),i=a+1),n.length&&"\n"!==n&&(r+=o),r+=n;return r}function generateNextLine(e,t){return"\n"+common.repeat(" ",e.indent*t)}function testImplicitResolving(e,t){var n,o;for(n=0,o=e.implicitTypes.length;n<o;n+=1)if(e.implicitTypes[n].resolve(t))return!0;return!1}function isWhitespace(e){return e===CHAR_SPACE||e===CHAR_TAB}function isPrintable(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==CHAR_BOM||65536<=e&&e<=1114111}function isNsCharOrWhitespace(e){return isPrintable(e)&&e!==CHAR_BOM&&e!==CHAR_CARRIAGE_RETURN&&e!==CHAR_LINE_FEED}function isPlainSafe(e,t,n){var o=isNsCharOrWhitespace(e),i=o&&!isWhitespace(e);return(n?o:o&&e!==CHAR_COMMA&&e!==CHAR_LEFT_SQUARE_BRACKET&&e!==CHAR_RIGHT_SQUARE_BRACKET&&e!==CHAR_LEFT_CURLY_BRACKET&&e!==CHAR_RIGHT_CURLY_BRACKET)&&e!==CHAR_SHARP&&!(t===CHAR_COLON&&!i)||isNsCharOrWhitespace(t)&&!isWhitespace(t)&&e===CHAR_SHARP||t===CHAR_COLON&&i}function isPlainSafeFirst(e){return isPrintable(e)&&e!==CHAR_BOM&&!isWhitespace(e)&&e!==CHAR_MINUS&&e!==CHAR_QUESTION&&e!==CHAR_COLON&&e!==CHAR_COMMA&&e!==CHAR_LEFT_SQUARE_BRACKET&&e!==CHAR_RIGHT_SQUARE_BRACKET&&e!==CHAR_LEFT_CURLY_BRACKET&&e!==CHAR_RIGHT_CURLY_BRACKET&&e!==CHAR_SHARP&&e!==CHAR_AMPERSAND&&e!==CHAR_ASTERISK&&e!==CHAR_EXCLAMATION&&e!==CHAR_VERTICAL_LINE&&e!==CHAR_EQUALS&&e!==CHAR_GREATER_THAN&&e!==CHAR_SINGLE_QUOTE&&e!==CHAR_DOUBLE_QUOTE&&e!==CHAR_PERCENT&&e!==CHAR_COMMERCIAL_AT&&e!==CHAR_GRAVE_ACCENT}function isPlainSafeLast(e){return!isWhitespace(e)&&e!==CHAR_COLON}function codePointAt(e,t){var n,o=e.charCodeAt(t);return o>=55296&&o<=56319&&t+1<e.length&&(n=e.charCodeAt(t+1))>=56320&&n<=57343?1024*(o-55296)+n-56320+65536:o}function needIndentIndicator(e){return/^\n* /.test(e)}var STYLE_PLAIN=1,STYLE_SINGLE=2,STYLE_LITERAL=3,STYLE_FOLDED=4,STYLE_DOUBLE=5;function chooseScalarStyle(e,t,n,o,i,a,r,s){var l,c=0,d=null,u=!1,p=!1,h=-1!==o,b=-1,m=isPlainSafeFirst(codePointAt(e,0))&&isPlainSafeLast(codePointAt(e,e.length-1));if(t||r)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!isPrintable(c=codePointAt(e,l)))return STYLE_DOUBLE;m=m&&isPlainSafe(c,d,s),d=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if((c=codePointAt(e,l))===CHAR_LINE_FEED)u=!0,h&&(p=p||l-b-1>o&&" "!==e[b+1],b=l);else if(!isPrintable(c))return STYLE_DOUBLE;m=m&&isPlainSafe(c,d,s),d=c}p=p||h&&l-b-1>o&&" "!==e[b+1]}return u||p?n>9&&needIndentIndicator(e)?STYLE_DOUBLE:r?a===QUOTING_TYPE_DOUBLE?STYLE_DOUBLE:STYLE_SINGLE:p?STYLE_FOLDED:STYLE_LITERAL:!m||r||i(e)?a===QUOTING_TYPE_DOUBLE?STYLE_DOUBLE:STYLE_SINGLE:STYLE_PLAIN}function writeScalar(e,t,n,o,i){e.dump=function(){if(0===t.length)return e.quotingType===QUOTING_TYPE_DOUBLE?'""':"''";if(!e.noCompatMode&&(-1!==DEPRECATED_BOOLEANS_SYNTAX.indexOf(t)||DEPRECATED_BASE60_SYNTAX.test(t)))return e.quotingType===QUOTING_TYPE_DOUBLE?'"'+t+'"':"'"+t+"'";var a=e.indent*Math.max(1,n),r=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),s=o||e.flowLevel>-1&&n>=e.flowLevel;switch(chooseScalarStyle(t,s,e.indent,r,(function(t){return testImplicitResolving(e,t)}),e.quotingType,e.forceQuotes&&!o,i)){case STYLE_PLAIN:return t;case STYLE_SINGLE:return"'"+t.replace(/'/g,"''")+"'";case STYLE_LITERAL:return"|"+blockHeader(t,e.indent)+dropEndingNewline(indentString(t,a));case STYLE_FOLDED:return">"+blockHeader(t,e.indent)+dropEndingNewline(indentString(foldString(t,r),a));case STYLE_DOUBLE:return'"'+escapeString(t)+'"';default:throw new exception("impossible error: invalid scalar style")}}()}function blockHeader(e,t){var n=needIndentIndicator(e)?String(t):"",o="\n"===e[e.length-1];return n+(!o||"\n"!==e[e.length-2]&&"\n"!==e?o?"":"-":"+")+"\n"}function dropEndingNewline(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function foldString(e,t){for(var n,o,i,a=/(\n+)([^\n]*)/g,r=(n=-1!==(n=e.indexOf("\n"))?n:e.length,a.lastIndex=n,foldLine(e.slice(0,n),t)),s="\n"===e[0]||" "===e[0];i=a.exec(e);){var l=i[1],c=i[2];o=" "===c[0],r+=l+(s||o||""===c?"":"\n")+foldLine(c,t),s=o}return r}function foldLine(e,t){if(""===e||" "===e[0])return e;for(var n,o,i=/ [^ ]/g,a=0,r=0,s=0,l="";n=i.exec(e);)(s=n.index)-a>t&&(o=r>a?r:s,l+="\n"+e.slice(a,o),a=o+1),r=s;return l+="\n",e.length-a>t&&r>a?l+=e.slice(a,r)+"\n"+e.slice(r+1):l+=e.slice(a),l.slice(1)}function escapeString(e){for(var t,n="",o=0,i=0;i<e.length;o>=65536?i+=2:i++)o=codePointAt(e,i),!(t=ESCAPE_SEQUENCES[o])&&isPrintable(o)?(n+=e[i],o>=65536&&(n+=e[i+1])):n+=t||encodeHex(o);return n}function writeFlowSequence(e,t,n){var o,i,a,r="",s=e.tag;for(o=0,i=n.length;o<i;o+=1)a=n[o],e.replacer&&(a=e.replacer.call(n,String(o),a)),(writeNode(e,t,a,!1,!1)||void 0===a&&writeNode(e,t,null,!1,!1))&&(""!==r&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=s,e.dump="["+r+"]"}function writeBlockSequence(e,t,n,o){var i,a,r,s="",l=e.tag;for(i=0,a=n.length;i<a;i+=1)r=n[i],e.replacer&&(r=e.replacer.call(n,String(i),r)),(writeNode(e,t+1,r,!0,!0,!1,!0)||void 0===r&&writeNode(e,t+1,null,!0,!0,!1,!0))&&(o&&""===s||(s+=generateNextLine(e,t)),e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function writeFlowMapping(e,t,n){var o,i,a,r,s,l="",c=e.tag,d=Object.keys(n);for(o=0,i=d.length;o<i;o+=1)s="",""!==l&&(s+=", "),e.condenseFlow&&(s+='"'),r=n[a=d[o]],e.replacer&&(r=e.replacer.call(n,a,r)),writeNode(e,t,a,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),writeNode(e,t,r,!1,!1)&&(l+=s+=e.dump));e.tag=c,e.dump="{"+l+"}"}function writeBlockMapping(e,t,n,o){var i,a,r,s,l,c,d="",u=e.tag,p=Object.keys(n);if(!0===e.sortKeys)p.sort();else if("function"==typeof e.sortKeys)p.sort(e.sortKeys);else if(e.sortKeys)throw new exception("sortKeys must be a boolean or a function");for(i=0,a=p.length;i<a;i+=1)c="",o&&""===d||(c+=generateNextLine(e,t)),s=n[r=p[i]],e.replacer&&(s=e.replacer.call(n,r,s)),writeNode(e,t+1,r,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?c+="?":c+="? "),c+=e.dump,l&&(c+=generateNextLine(e,t)),writeNode(e,t+1,s,!0,l)&&(e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?c+=":":c+=": ",d+=c+=e.dump));e.tag=u,e.dump=d||"{}"}function detectType(e,t,n){var o,i,a,r,s,l;for(a=0,r=(i=n?e.explicitTypes:e.implicitTypes).length;a<r;a+=1)if(((s=i[a]).instanceOf||s.predicate)&&(!s.instanceOf||"object"==typeof t&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(n?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,"[object Function]"===_toString.call(s.represent))o=s.represent(t,l);else{if(!_hasOwnProperty.call(s.represent,l))throw new exception("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');o=s.represent[l](t,l)}e.dump=o}return!0}return!1}function writeNode(e,t,n,o,i,a,r){e.tag=null,e.dump=n,detectType(e,n,!1)||detectType(e,n,!0);var s,l=_toString.call(e.dump),c=o;o&&(o=e.flowLevel<0||e.flowLevel>t);var d,u,p="[object Object]"===l||"[object Array]"===l;if(p&&(u=-1!==(d=e.duplicates.indexOf(n))),(null!==e.tag&&"?"!==e.tag||u||2!==e.indent&&t>0)&&(i=!1),u&&e.usedDuplicates[d])e.dump="*ref_"+d;else{if(p&&u&&!e.usedDuplicates[d]&&(e.usedDuplicates[d]=!0),"[object Object]"===l)o&&0!==Object.keys(e.dump).length?(writeBlockMapping(e,t,e.dump,i),u&&(e.dump="&ref_"+d+e.dump)):(writeFlowMapping(e,t,e.dump),u&&(e.dump="&ref_"+d+" "+e.dump));else if("[object Array]"===l)o&&0!==e.dump.length?(e.noArrayIndent&&!r&&t>0?writeBlockSequence(e,t-1,e.dump,i):writeBlockSequence(e,t,e.dump,i),u&&(e.dump="&ref_"+d+e.dump)):(writeFlowSequence(e,t,e.dump),u&&(e.dump="&ref_"+d+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(e.skipInvalid)return!1;throw new exception("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&writeScalar(e,e.dump,t,a,c)}null!==e.tag&&"?"!==e.tag&&(s=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),s="!"===e.tag[0]?"!"+s:"tag:yaml.org,2002:"===s.slice(0,18)?"!!"+s.slice(18):"!<"+s+">",e.dump=s+" "+e.dump)}return!0}function getDuplicateReferences(e,t){var n,o,i=[],a=[];for(inspectNode(e,i,a),n=0,o=a.length;n<o;n+=1)t.duplicates.push(i[a[n]]);t.usedDuplicates=new Array(o)}function inspectNode(e,t,n){var o,i,a;if(null!==e&&"object"==typeof e)if(-1!==(i=t.indexOf(e)))-1===n.indexOf(i)&&n.push(i);else if(t.push(e),Array.isArray(e))for(i=0,a=e.length;i<a;i+=1)inspectNode(e[i],t,n);else for(i=0,a=(o=Object.keys(e)).length;i<a;i+=1)inspectNode(e[o[i]],t,n)}function dump$1(e,t){var n=new State(t=t||{});n.noRefs||getDuplicateReferences(e,n);var o=e;return n.replacer&&(o=n.replacer.call({"":o},"",o)),writeNode(n,0,o,!0,!0)?n.dump+"\n":""}var dump_1=dump$1,dumper={dump:dump_1};function renamed(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var Type=type,Schema=schema,FAILSAFE_SCHEMA=failsafe,JSON_SCHEMA=json,CORE_SCHEMA=core,DEFAULT_SCHEMA=_default,load=loader.load,loadAll=loader.loadAll,dump=dumper.dump,YAMLException=exception,types={binary,float:js_yaml_float,map,null:_null,pairs,set,timestamp,bool,int:js_yaml_int,merge,omap,seq,str},safeLoad=renamed("safeLoad","load"),safeLoadAll=renamed("safeLoadAll","loadAll"),safeDump=renamed("safeDump","dump"),jsYaml={Type,Schema,FAILSAFE_SCHEMA,JSON_SCHEMA,CORE_SCHEMA,DEFAULT_SCHEMA,load,loadAll,dump,YAMLException,types,safeLoad,safeLoadAll,safeDump};const js_yaml=null;function preloadYAMLStyles(e){e.config?.card_type&&!e.stylesYAML&&(stylesYAML||(stylesYAML=loadYAML(["/local/bubble/bubble-modules.yaml","/hacsfiles/Bubble-Card/bubble-modules.yaml","/local/community/Bubble-Card/bubble-modules.yaml"])),e.stylesYAML=stylesYAML)}const INCLUDE_TYPE=new Type("!include",{kind:"scalar",resolve:function(e){return"string"==typeof e},construct:function(e){const t=new XMLHttpRequest;if(t.open("GET",`/local/bubble/${e}`,!1),t.send(null),200!==t.status)return console.error(`Error including the file /local/bubble/${e}: HTTP status ${t.status}`),null;try{return load(t.responseText,{schema:INCLUDE_SCHEMA})}catch(t){return console.error(`Error parsing the included YAML file (/local/bubble/${e}):`,t),null}}}),INCLUDE_SCHEMA=DEFAULT_SCHEMA.extend([INCLUDE_TYPE]);let yamlKeysMap=new Map,stylesYAML,yamlCache=new Map;const compiledTemplateCache=new Map;function getOrCreateStyleElement(e,t){if(!e.styleElement){const n=document.createElement("style");n.id="bubble-styles",t.appendChild(n),e.styleElement=n}return e.styleElement}const loadYAML=async e=>{for(const t of e){const e=t+`?v=${Date.now()}`;try{const n=await fetch(e,{cache:"no-store"});if(!n.ok){console.warn(`'bubble-modules.yaml' not found at ${e} (status: ${n.status}). Trying next...`),window.bubbleYamlWarning=!0;continue}const o=await n.text(),i=parseYAML(o);return yamlKeysMap.size||Object.entries(i).forEach((([e,t])=>yamlKeysMap.set(e,t))),yamlCache.set(t,i),i}catch(t){console.warn(`Error fetching 'bubble-modules.yaml' from ${e}:`,t),window.bubbleYamlWarning=!0}}return null},parseYAML=e=>{try{return load(e,{schema:INCLUDE_SCHEMA})}catch(e){return console.error("YAML parsing error:",e),null}},handleCustomStyles=async(e,t=e.card)=>{const n=t,o=e.config.modules??e.config.style_templates??"default",i=e.config.styles;void 0===e.cardLoaded&&(e.lastEvaluatedStyles="",e.initialLoad=!0),e.initialLoad&&(n.style.display="none");const a=getOrCreateStyleElement(e,t),r=await e.stylesYAML||{};let s="";if(Array.isArray(o))s=o.map((e=>{let t=r[e]??"";return"object"==typeof t&&t.code&&(t=t.code),t})).join("\n");else{let e=r[o]||"";"object"==typeof e&&e.code&&(e=e.code),s=e}const l=`${evalStyles(e,s)}\n${evalStyles(e,i)}`.trim();l!==e.lastEvaluatedStyles&&(a.textContent=l,e.lastEvaluatedStyles=l),e.initialLoad&&(n.style.display="",e.initialLoad=!1,e.cardLoaded=!0)};function evalStyles(e,t=""){if(!t)return"";const n=["innerText","textContent","innerHTML"];["state","name"].forEach((o=>{n.map((e=>`card.querySelector('.bubble-${o}').${e} =`)).some((e=>t.includes(e)))&&!e.elements[o].templateDetected&&(e.elements[o].templateDetected=!0)}));try{let n=compiledTemplateCache.get(t);n||(n=Function("hass","entity","state","icon","subButtonState","subButtonIcon","getWeatherIcon","card","name","checkConditionsMet",`return \`${t}\`;`),compiledTemplateCache.set(t,n));const o="pop-up"===e.config.card_type?e.popUp:e.card,i=cleanCSS(n.call(e,e._hass,e.config.entity,(0,utils.Gu)(e),e.elements.icon,getSubButtonsStates(e),e.subButtonIcon,getWeatherIcon,o,o.name,checkConditionsMet));return e.editor&&emitEditorError(""),i}catch(t){return e.editor&&requestAnimationFrame((()=>emitEditorError(t.message))),console.error(`Bubble Card - Template error from a ${e.config.card_type} card: ${t.message}`),""}}function cleanCSS(e){return e.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\s+/g," ").replace(/\s*([{};,])\s*/g,"$1").replace(/([a-zA-Z0-9_-]+)\s*:\s*;/g,"").replace(/undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g,"").replace(/[^{};]+\s*{\s*}/g,"").replace(/,(?=\s*[}\n])/g,"").split("\n").filter((e=>e.includes("{")||e.includes("}")||e.includes(":")||e.trim().match(/['"]{2}/g)||e.includes("${")||e.match(/^@supports|^@media|^@keyframes|^@layer/))).join("\n").match(/(@[^{]*?\{(?:[^{}]*?\{[^{}]*?\})*?[^{}]*?\}|[^{}]*?\{[^{}]*?\})/g)?.join("\n")||""}function emitEditorError(e){window.dispatchEvent(new CustomEvent("bubble-card-error",{detail:e}))}function changeEditor(e){if(!e.verticalStack)return;const{popUp:t,sectionRow:n,sectionRowContainer:o,elements:i}=e,a=t?.classList,r=t?.classList.contains("is-popup-opened"),s="hui-card"===n?.tagName.toLowerCase(),l=e.editor||e.detectedEditor,c=e.previousEditorState;e.detectedEditor&&!e.dialogClosedListenerAdded&&(window.addEventListener("dialog-closed",(()=>{i?.popUpContainer&&i.popUpContainer.classList.add("editor-cropped")}),{once:!0}),e.dialogClosedListenerAdded=!0),!r&&s&&o&&o.classList.contains("card")&&l&&"none"===o.style.display&&(o.style.display=""),l?(a?.contains("editor")||((0,utils.qo)(!1),a&&(a.remove("is-popup-opened"),a.add("is-popup-closed","editor")),!e.detectedEditor&&i?.popUpContainer&&i.popUpContainer.classList.add("editor-cropped")),e.editorAccess=!0):a?.contains("editor")&&(a.remove("editor"),i?.popUpContainer&&i.popUpContainer.classList.remove("editor-cropped"),e.observer&&(e.observer.disconnect(),e.observer=null),e.verticalStack.contains(e.popUp)&&closePopup(e,!0),e.editorAccess=!1,e.dialogClosedListenerAdded=!1,e.previousEditorState=l),e.editor&&!e.detectedEditor&&l!==c&&l&&(onEditorChange(e),e.previousEditorState=l)}function changeStyle(e){const{backdropCustomStyle:t}=getBackdrop(e);handleCustomStyles(e,e.popUp),handleCustomStyles(e,t);const n=e.config.card_layout??"large",o="large"===n||"large-2-rows"===n,i="large-2-rows"===n;o!==e.popUp.classList.contains("large")&&e.popUp.classList.toggle("large",o),i!==e.popUp.classList.contains("rows-2")&&e.popUp.classList.toggle("rows-2",i);const a=e.config.show_header??!0;e.popUp.classList.contains("no-header")===a&&e.popUp.classList.toggle("no-header",!a)}function changeTriggered(e){const t=e.config.trigger,n=e.config.trigger_close??!0;if(t){const o=!e.hasPageLoaded;e.hasPageLoaded=!0;const i=ensureArray(t);if(0===i.length)return void(e.previousTrigger=!1);if(validateConditionalConfig(i)){const t=checkConditionsMet(i,e._hass);if(t===e.previousTrigger)return;e.config.hash===location.hash?t||o||!n||removeHash():t&&addHash(e.config.hash),e.previousTrigger=t}}else{let t=e.config.trigger_entity??"";if(""===t)return;let n=e.config.trigger_state??"",o=e.config.trigger_close??!1,i=e._hass.states[t]?.state;if(!t)return;if(!n)return;if(e.oldTriggerEntityState===i)return;const a=!e.hasPageLoaded;e.hasPageLoaded=!0,e.config.hash===location.hash?o&&n!==i&&(a||removeHash()):i===n&&addHash(e.config.hash),e.oldTriggerEntityState=i}}function getClimateColor(e){let t="";const n=e._hass.states[e.config.entity],o=n.attributes.hvac_action,i=n.state,a="heating"===o||"heat"===i&&e.config.state_color,r="cooling"===o||"cool"===i&&e.config.state_color,s="off"!==i&&"unknown"!==i;switch(i){case"fan_only":t="var(--bubble-state-climate-fan-only-color, var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color))))";break;case"dry":t="var(--bubble-state-climate-dry-color, var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color))))";break;default:t=r?"var(--bubble-state-climate-cool-color, var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color))))":a?"var(--bubble-state-climate-heat-color, var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color))))":s&&e.config.state_color?"auto"===i?"var(--bubble-state-climate-auto-color, var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color))))":"heat_cool"===i?"var(--bubble-state-climate-heat-cool-color, var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color))))":"var(--bubble-climate-accent-color, var(--bubble-accent-color, var(--accent-color)))":""}return t}function changeState(e){const t=e.config?.entity,n=e.card,o=e._hass.states[t],i=(0,utils.D$)(e,e.config.attribute,t),a=o?.last_changed,r=o?.last_updated,s="state"===e.config.button_type,l=e.config.show_name??!0,c=e.config.show_icon??!0,d=e.config.show_state??s,u=e.config.show_attribute??s,p=e.config.show_last_changed??!1,h=e.config.show_last_updated??!1,b=e.config.scrolling_effect??!0,m=e.previousConfig||{};if(e.previousState===o&&e.previousAttribute===i&&e.previousLastChanged===a&&e.previousLastUpdated===r&&m.showName===l&&m.showIcon===c&&m.showState===d&&m.showAttribute===u&&m.showLastChanged===p&&m.showLastUpdated===h&&m.scrollingEffect===b)return;let g=o&&d?e._hass.formatEntityState(o):"",f="",_="",y="",v="";function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}u&&i&&(f=o?e._hass.formatEntityAttributeValue(o,e.config.attribute)??i:""),p&&o&&(_=o?w((0,utils.r6)(a,e._hass.locale.language)):""),h&&o&&(y=o?w((0,utils.r6)(r,e._hass.locale.language)):""),v=[g,f,_,y].filter(Boolean).join(" • "),e.elements.name.classList.toggle("hidden",!l),e.elements.iconContainer.classList.toggle("hidden",!c),e.elements.nameContainer.classList.toggle("name-without-icon",!c),e.elements.state.classList.toggle("state-without-name",(d||p||h||u)&&!l),e.elements.state.classList.toggle("display-state",d||p||h||u),e.elements.state.classList.toggle("hidden",!(d||p||h||u)),(0,utils.Nl)(e,e.elements.state,v),t===e.config.entity&&"state"!==e.config.button_type&&!o?.attributes?.unit_of_measurement?.includes("°")&&o&&((0,utils.$C)(e,t)?n.classList.contains("is-on")||(n.classList.remove("is-off"),n.classList.add("is-on")):n.classList.contains("is-off")||(n.classList.remove("is-on"),n.classList.add("is-off"))),e.previousState=o,e.previousAttribute=i,e.previousConfig={showName:l,showIcon:c,showState:d,showAttribute:u,showLastChanged:p,showLastUpdated:h,scrollingEffect:b}}function changeIcon(e){const t=(0,utils.md)(e),n=e.config.card_type,o=e.config.button_type,i=(0,utils.$C)(e),a=getIcon(e),r=getImage(e),s=e.config.use_accent_color,l=e.elements.iconContainer?.style.color,c=e.elements.image?.style.backgroundImage,d=e.elements.icon?.icon,u=e.elements.icon?.style.display,p=e.elements.image?.style.display,h="name"===o||"pop-up"===n&&!o;let b="inherit";if(i&&((0,utils.md)(e,"light")&&!s||!h?b=`var(--bubble-icon-color, ${getIconColor(e)})`:"climate"===t&&(b=getClimateColor(e))),e.elements.iconContainer&&("inherit"!==b?l!==b&&(e.elements.iconContainer.style.color=b):""!==l&&(e.elements.iconContainer.style.color="")),""!==r){const t=`url(${r})`;c!==t&&(e.elements.image.style.backgroundImage=t),"none"!==u&&(e.elements.icon.style.display="none"),""!==p&&(e.elements.image.style.display="")}else""!==a?(d!==a&&(e.elements.icon.icon=a),e.elements.icon.style.color!==b&&(e.elements.icon.style.color=b),""!==u&&(e.elements.icon.style.display=""),"none"!==p&&(e.elements.image.style.display="none")):("none"!==u&&(e.elements.icon.style.display="none"),"none"!==p&&(e.elements.image.style.display="none"));e.elements.icon?.getAttribute("icon")!==e.elements.icon?.icon&&e.elements.icon.setAttribute("icon",e.elements.icon.icon)}function changeName(e,t=!0){const n="name"!==e.config.button_type?(0,utils.mG)(e):e.config.name;n!==e.previousName&&e.elements.name&&(e.elements.name.innerText=n,e.previousName=n,t&&(0,utils.Nl)(e,e.elements.name,n))}function changeStatus(e){"unavailable"===(0,utils.Gu)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable")}function changes_updateListeners(e,t){t&&!e.editor?e.listenersAdded||("slider"===e.config.button_type&&e.elements.slider.addEventListener("click",e.handleSliderClick,{passive:!0}),e.listenersAdded=!0):t||e.listenersAdded&&"slider"===e.config.button_type&&e.elements.slider.removeEventListener("click",e.handleSliderClick,{passive:!0})}function getButtonType(e){let t=e.config.button_type;return"custom"===t&&(console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"'),t=""),e.config.entity?t||"switch":t||"name"}function readOnlySlider(e){const t=e.config.entity;return(0,utils.md)(e,"sensor",t)&&"%"===(0,utils.D$)(e,"unit_of_measurement",t)}const pendingValues=new Map,throttleDelay=16;let lastRenderTime=0,pendingRaf=null;function requestAnimationFrameThrottle(e){pendingRaf&&cancelAnimationFrame(pendingRaf),!lastRenderTime||Date.now()-lastRenderTime>=throttleDelay?(lastRenderTime=Date.now(),e()):pendingRaf=requestAnimationFrame((()=>{lastRenderTime=Date.now(),e()}))}function onSliderChange(e,t){const n=e.elements.rangeSlider.getBoundingClientRect(),o=Math.max(0,Math.min(100,(t-n.left)/n.width*100));return pendingValues.set(e.config.entity,{percentage:o,timestamp:Date.now()}),e.elements.rangeFill.style.transform=`translateX(${o}%)`,o}const valueCache=new Map,cacheDuration=100;function getCachedValue(e,t){const n=valueCache.get(e),o=Date.now();if(n&&o-n.timestamp<cacheDuration)return n.value;const i=t();return valueCache.set(e,{value:i,timestamp:o}),i}function calculateRangePercentage(e,t,n){return 100*(e-t)/(n-t)}function adjustToRange(e,t,n){return e>=t&&e<=n?(e-t)/(n-t)*100:e<t?0:100}function getCurrentValue(e,t,n){const o=pendingValues.get(t),i=e._hass.states[t];if(o){if(new Date(i.last_changed).getTime()<o.timestamp)return o.percentage;pendingValues.delete(t)}switch(n){case"light":return 100*(0,utils.D$)(e,"brightness",t)/255;case"media_player":return(0,utils.$C)(e,t)?100*(0,utils.D$)(e,"volume_level",t):0;case"cover":return(0,utils.D$)(e,"current_position",t);case"input_number":case"number":{const n=(0,utils.D$)(e,"min",t),o=(0,utils.D$)(e,"max",t);return calculateRangePercentage((0,utils.Gu)(e,t),n,o)}case"fan":return(0,utils.$C)(e,t)?(0,utils.D$)(e,"percentage",t):0;case"climate":if((0,utils.$C)(e,t)){const n=(0,utils.D$)(e,"min_temp",t),o=(0,utils.D$)(e,"max_temp",t);return calculateRangePercentage((0,utils.D$)(e,"temperature",t),n,o)}return 0;default:return void 0!==e.config.min_value&&void 0!==e.config.max_value?calculateRangePercentage(parseFloat((0,utils.Gu)(e,t)),parseFloat(e.config.min_value),parseFloat(e.config.max_value)):0}}function updateSlider(e,t=e.elements.rangeFill,n=e.config.entity){if(e.dragging)return;const o=n.split(".")[0];let i=0;if(pendingRaf&&(cancelAnimationFrame(pendingRaf),pendingRaf=null),i="sensor"===o&&"%"===(0,utils.D$)(e,"unit_of_measurement",n)?(0,utils.Gu)(e,n):getCurrentValue(e,n,o),"climate"===o&&e.elements.rangeValue)if((0,utils.$C)(e,n)){const t=(0,utils.D$)(e,"temperature",n),o="°C"===e._hass.config.unit_system.temperature;e.elements.rangeValue.innerText=t.toFixed(1).replace(/\.0$/,"")+(o?"°C":"°F")}else e.elements.rangeValue.innerText="0%";void 0===e.sliderMinValue&&void 0===e.sliderMaxValue||(i=adjustToRange(i,e.sliderMinValue??0,e.sliderMaxValue??100)),t.style.transform=`translateX(${Math.round(i)}%)`}function getAdjustedValue(e,t){return Math.round(e/t)*t}function updateEntity(e,t){const n=e._hass.states[e.config.entity],o=e.config.entity.split(".")[0];let i=t;if(void 0!==e.sliderMinValue||void 0!==e.sliderMaxValue){const n=e.sliderMinValue??0;i=n+t/100*((e.sliderMaxValue??100)-n)}switch(e.config.step&&(i=getAdjustedValue(i,e.config.step)),o){case"light":{const t=Math.min(100,Math.max(0,i)),n=Math.round(255*t/100),o=e.config.light_transition,a=""===e.config.light_transition_time||isNaN(e.config.light_transition_time)?500:e.config.light_transition_time;e._hass.callService("light","turn_on",{entity_id:e.config.entity,brightness:n,...o&&{transition:a/1e3}});break}case"media_player":{const t=e.config.step??.01,n=getAdjustedValue(Math.min(1,Math.max(0,i/100)),t);e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:n.toFixed(2)});break}case"cover":{const t=e.config.step??1,n=getAdjustedValue(Math.min(100,Math.max(0,Math.round(i))),t);e._hass.callService("cover","set_cover_position",{entity_id:e.config.entity,position:n});break}case"input_number":{const t=n.attributes.min??0,o=getAdjustedValue(((n.attributes.max??100)-t)*i/100+t,e.config.step??(0,utils.D$)(e,"step")??1);e._hass.callService("input_number","set_value",{entity_id:e.config.entity,value:o});break}case"fan":{const t=e.config.step??n.attributes.percentage_step??1,o=getAdjustedValue(Math.min(100,Math.max(0,Math.round(i))),t);e._hass.callService("fan","set_percentage",{entity_id:e.config.entity,percentage:o});break}case"climate":{const t=n.attributes.min_temp??0,o=n.attributes.max_temp??1e4,a="°C"===e._hass.config.unit_system.temperature,r=e.config.step??(n.attributes.target_temp_step?n.attributes.target_temp_step:a?.5:1),s=parseFloat(getAdjustedValue((o-t)*i/100+t,r).toFixed(1));e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:s});break}case"number":{const t=n.attributes.min??0,o=getAdjustedValue(((n.attributes.max??100)-t)*i/100+t,e.config.step??n.attributes.step??1);e._hass.callService("number","set_value",{entity_id:e.config.entity,value:o});break}}}function changeButton(e){const t=e.config.card_type,n=getButtonType(e),o=(0,utils.md)(e,"light"),i=(0,utils.$C)(e),a=getIconColor(e),r="button"===t?e.card.style.getPropertyValue("--bubble-button-background-color"):e.popUp.style.getPropertyValue("--bubble-button-background-color"),s=e.elements.background.style.opacity;let l="",c="";const d=e.config.use_accent_color;"switch"===n&&i?a&&o&&!d?(l=getIconColor(e),c=".5"):(l="var(--bubble-button-accent-color, var(--bubble-accent-color, var(--accent-color)))",c="1"):(l="rgba(0, 0, 0, 0)",c=".5"),"slider"===n&&(i&&(e.elements.rangeFill.style.backgroundColor=o&&!d?getIconColor(e):"var(--bubble-button-accent-color, var(--bubble-accent-color, var(--accent-color)))"),updateSlider(e)),r!==l&&("button"===t?e.card.style.setProperty("--bubble-button-background-color",l):"pop-up"===t&&e.popUp.style.setProperty("--bubble-button-background-color",l)),s!==c&&(e.elements.background.style.opacity=c)}function changes_changeStatus(e){const t=(0,utils.Gu)(e),n=e.config.card_type;"unavailable"===t?"button"===n?e.card.classList.add("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.add("is-unavailable"):"button"===n?e.card.classList.remove("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.remove("is-unavailable")}function changes_changeStyle(e){(0,utils.JK)(e),handleCustomStyles(e)}const slider_styles_namespaceObject=".bubble-range-fill {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    left: -100%;\n    transition: all .3s;\n    z-index: 0;\n}\n\n.is-light .is-dragging .bubble-range-fill {\n    background-color: var(--bubble-light-color, rgb(225, 225, 210));\n}\n\n.is-dragging .bubble-range-fill {\n    background-color: var(--bubble-accent-color, var(--accent-color));\n    transition: none !important;\n}\n\n.is-light .bubble-range-fill {\n    opacity: 0.5;\n}\n\n.bubble-range-value {\n    position: absolute;\n    right: 14px;\n}\n\n.is-unavailable .bubble-range-slider {\n    cursor: not-allowed;\n}\n\n.slider-appear-animation {\n    transition: none;\n    animation: sliderAppear 0.2s ease-in-out;\n    transform-origin: center;\n}\n\n@keyframes sliderAppear {\n    0% {\n        transform: scale(0.96);\n        opacity: 0.8;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}";function createSliderStructure(e,t={}){const n={...defaultOptions,targetElement:e.elements.mainContainer,insertBefore:e.elements.cardWrapper,sliderLiveUpdate:e.config.slider_live_update,holdToSlide:!1,readOnlySlider:!1,styles:slider_styles_namespaceObject,...t};if(e.sliderMinValue=e.config.min_value??e.config.min_volume??0,e.sliderMaxValue=e.config.max_value??e.config.max_volume??100,e.elements.rangeFill=(0,utils.n)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,utils.n)("div","bubble-range-slider range-slider"),n.styles){const t=(0,utils.n)("style");t.textContent=n.styles,e.elements.rangeSlider.appendChild(t)}function o(e,t,n){return 100*(e-t)/(n-t)}function i(){let t=0;const n=e.config.entity,i=n.split(".")[0];if("sensor"===i&&"%"===(0,utils.D$)(e,"unit_of_measurement",n))return(0,utils.Gu)(e,n);switch(i){case"light":t=100*(0,utils.D$)(e,"brightness",n)/255;break;case"media_player":(0,utils.$C)(e,n)&&(t=100*(0,utils.D$)(e,"volume_level",n));break;case"cover":t=(0,utils.D$)(e,"current_position",n);break;case"input_number":case"number":const i=(0,utils.D$)(e,"min",n),a=(0,utils.D$)(e,"max",n);t=o((0,utils.Gu)(e,n),i,a);break;case"fan":(0,utils.$C)(e,n)&&(t=(0,utils.D$)(e,"percentage",n));break;case"climate":if((0,utils.$C)(e,n)){const i=(0,utils.D$)(e,"min_temp",n),a=(0,utils.D$)(e,"max_temp",n);t=o((0,utils.D$)(e,"temperature",n),i,a)}break;default:void 0!==e.config.min_value&&void 0!==e.config.max_value&&(e.sliderMinValue=void 0,e.sliderMaxValue=void 0)}return t}function a(t){if(void 0!==e.sliderMinValue||void 0!==e.sliderMaxValue){const n=void 0!==e.sliderMinValue?e.sliderMinValue:0,o=void 0!==e.sliderMaxValue?e.sliderMaxValue:100;if(t>=n&&t<=o)return(t-n)/(o-n)*100;if(t<n)return 0;if(t>o)return 100}return t}function r(t){if(e.elements.rangeValue)switch(e.config.entity.split(".")[0]){case"climate":if((0,utils.$C)(e,e.config.entity)){const n=(0,utils.D$)(e,"min_temp",e.config.entity),o=((0,utils.D$)(e,"max_temp",e.config.entity)-n)*t/100+n,i="°C"===e._hass.config.unit_system.temperature,a=e.config.step||(0,utils.D$)(e,"target_temp_step",e.config.entity)||(i?.5:1),r=Math.round(o/a)*a;e.elements.rangeValue.innerText=r.toFixed(1).replace(/\.0$/,"")+(i?"°C":"°F")}break;case"number":case"input_number":const n=(0,utils.D$)(e,"min",e.config.entity),o=n+t/100*((0,utils.D$)(e,"max",e.config.entity)-n),i=e.config.step||(0,utils.D$)(e,"step",e.config.entity)||1,a=Math.round(o/i)*i,r=(0,utils.D$)(e,"unit_of_measurement",e.config.entity)||"";e.elements.rangeValue.innerText=a.toFixed(1).replace(/\.0$/,"")+(r?` ${r}`:"");break;default:if(void 0!==e.sliderMinValue||void 0!==e.sliderMaxValue){const n=void 0!==e.sliderMinValue?e.sliderMinValue:0,o=n+t/100*((void 0!==e.sliderMaxValue?e.sliderMaxValue:100)-n);if(e.config.step){const t=Math.round(o/e.config.step)*e.config.step;e.elements.rangeValue.innerText=t.toFixed(1).replace(/\.0$/,"")+"%"}else e.elements.rangeValue.innerText=Math.round(o)+"%"}else if(e.config.step){const n=Math.round(t/e.config.step)*e.config.step;e.elements.rangeValue.innerText=n.toFixed(1).replace(/\.0$/,"")+"%"}else e.elements.rangeValue.innerText=Math.round(t)+"%"}}if(n.withValueDisplay){e.elements.rangeValue=(0,utils.n)("div","bubble-range-value"),e.elements.rangeSlider.appendChild(e.elements.rangeValue);const t=a(i());(0,utils.md)(e,"climate",e.config.entity)?(0,utils.$C)(e,e.config.entity)?r(t):e.elements.rangeValue.innerText="0%":r(t),e.elements.rangeValue.style.display="",e.elements.rangeFill.style.transform=`translateX(${t}%)`}else{const t=a(i());e.elements.rangeFill.style.transform=`translateX(${t}%)`}e.elements.rangeSlider.appendChild(e.elements.rangeFill),n.insertBefore&&n.targetElement.contains(n.insertBefore)?n.targetElement.insertBefore(e.elements.rangeSlider,n.insertBefore):n.targetElement.appendChild(e.elements.rangeSlider),n.targetElement&&(n.targetElement.style.cursor="ew-resize");let s=0,l=null;function c(t){if(t.stopPropagation(),t.target.closest(".bubble-action"))return;window.isScrolling=!0;const o=t.pageX||(t.touches?t.touches[0].pageX:0),i=onSliderChange(e,o);n.sliderLiveUpdate&&p(e,i),r(i)}function d(t){t.stopPropagation(),l&&clearTimeout(l);const o=t.pageX||(t.touches?t.touches[0].pageX:0),i=onSliderChange(e,o);Math.abs(o-s)>5&&(t.preventDefault(),t.stopImmediatePropagation()),n.targetElement.classList.remove("is-dragging"),n.targetElement.removeEventListener("pointermove",c),window.removeEventListener("pointerup",d),(0,utils.md)(e,"climate",e.config.entity)&&!(0,utils.$C)(e,e.config.entity)?e._hass.callService("climate","turn_on",{entity_id:e.config.entity}).then((()=>{updateEntity(e,i)})).catch((e=>{console.error("Error turning on climate entity:",e)})):updateEntity(e,i),(0,utils.jp)("selection"),r(i),n.targetElement.querySelectorAll("*").forEach((t=>{t!==e.elements.rangeFill&&t!==e.elements.rangeSlider&&n.holdToSlide&&!e.config.tap_to_slide&&(t.style.transition="opacity 0.3s ease-in-out",t.style.pointerEvents=null,t.style.opacity=null,e.elements.rangeValue&&(e.elements.rangeValue.style.display="none"))})),l=setTimeout((()=>{e&&(e.dragging=!1,window.isScrolling=!1)}),100)}function u(t){e.elements.rangeValue||(e.elements.rangeValue=(0,utils.n)("div","bubble-range-value"),e.elements.rangeSlider.appendChild(e.elements.rangeValue),r(t)),e.elements.rangeValue.style.display=""}if(e.config.read_only_slider)return;if(!n.holdToSlide||n.readOnlySlider||e.config.tap_to_slide)n.readOnlySlider||n.targetElement.addEventListener("pointerdown",(t=>{const o=t.target.closest(".bubble-action"),i=t.target.closest(".bubble-sub-button")?.hasAttribute("no-slide");i||o&&'{"action":"none"}'!==o.getAttribute("data-hold-action")||t.target.closest(".bubble-sub-button")||(n.targetElement.setPointerCapture(t.pointerId),e.card&&e.card.classList.contains("is-unavailable")||(e.dragging=!0,window.isScrolling=!0,s=t.pageX||(t.touches?t.touches[0].pageX:0),n.targetElement.classList.add("is-dragging"),n.targetElement.addEventListener("pointermove",c),window.addEventListener("pointerup",d)))}));else{let t;const o=200;let i=!1;n.targetElement.addEventListener("pointerdown",(a=>{const l=a.target.closest(".bubble-action"),p=a.target.closest(".bubble-sub-button")?.hasAttribute("no-slide");p||l&&'{"action":"none"}'!==l.getAttribute("data-hold-action")||(i=!1,t=setTimeout((()=>{i=!0,function(t){if(n.targetElement.setPointerCapture(t.pointerId),e.card&&e.card.classList.contains("is-unavailable"))return;e.dragging=!0,window.isScrolling=!0,s=t.pageX||(t.touches?t.touches[0].pageX:0);let o=0;(0,utils.md)(e,"climate")&&!(0,utils.$C)(e,e.config.entity)?(o=0,e.elements.rangeFill.style.transform=`translateX(${o}%)`):o=onSliderChange(e,s),u(o),r(o),n.targetElement.classList.add("slider-appear-animation"),(0,utils.jp)("selection"),n.targetElement.querySelectorAll("*").forEach((t=>{t!==e.elements.rangeFill&&t!==e.elements.rangeSlider&&t!==e.elements.rangeValue&&(t.style.transition="opacity 0.3s ease-in-out",t.style.pointerEvents="none",t.style.opacity="0",u(o))})),setTimeout((()=>{n.targetElement.classList.remove("slider-appear-animation")}),300),n.targetElement.classList.add("is-dragging"),n.targetElement.addEventListener("pointermove",c),window.addEventListener("pointerup",d)}(a)}),o))})),n.targetElement.addEventListener("pointerup",(e=>{clearTimeout(t)})),n.targetElement.addEventListener("pointercancel",(()=>{clearTimeout(t),i=!1}))}const p=(0,utils.nF)(updateEntity,200)}const defaultOptions={targetElement:null,insertBefore:null,sliderLiveUpdate:!1,withValueDisplay:!1,initialValue:null};function handleSubButtons(e,t={}){const n=createSubButtonStructure(e,t);return e.config.sub_button&&updateSubButtons(e,e.config.sub_button),n}const base_card_styles_namespaceObject="/* 'card-type' in CSS variables is replaced with the real card type \n   in card-structure.js for easier maintenance */\n\n* {\n    -webkit-tap-highlight-color: transparent !important;\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n\n    -webkit-user-select: none; /* Safari */\n    -ms-user-select: none; /* IE 10 and IE 11 */\n    user-select: none; /* Standard syntax */\n}\n\n*::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n}\n\nha-card {\n    background: none;\n    opacity: 1;\n}\n\n.bubble-container {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: var(--bubble-card-type-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    box-shadow: var(--bubble-card-type-box-shadow, var(--bubble-box-shadow, none));\n    overflow: scroll;\n    touch-action: pan-y;\n    border: var(--bubble-card-type-border, var(--bubble-border, none));\n    box-sizing: border-box;\n}\n\n.bubble-wrapper {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    transition: all 1.5s;\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    background-color: rgba(0,0,0,0);\n    overflow: visible;\n}\n\n.bubble-content-container {\n    display: contents;\n    flex-grow: 1;\n    overflow: hidden;\n}\n\n.bubble-buttons-container {\n    --icon-primary-color: var(--primary-text-color);\n    display: flex;\n    margin-right: 8px;\n    gap: 4px;\n    /* z-index: 1; */\n}\n\n.bubble-background {\n    display: flex;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    transition: background-color 1.5s;\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%);\n    mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%);\n}\n\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n    min-width: 38px;\n    min-height: 38px;\n    margin: 6px;\n    border-radius: var(--bubble-card-type-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-card-type-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n}\n\n.bubble-icon-feedback-container {\n    border-radius: var(--bubble-card-type-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    overflow: hidden !important;\n}\n\n.is-off .bubble-main-icon {\n    opacity: 0.6;\n}\n\n.is-on .bubble-main-icon {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-name,\n.bubble-state {\n    display: flex;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 18px;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    margin: 0 16px 0 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-size: 13px;\n    font-weight: 600;\n}\n\n.bubble-state {\n    font-size: 12px;\n    font-weight: normal;\n    opacity: 0.7;\n}\n\n.is-unavailable .bubble-wrapper {\n    cursor: not-allowed;\n}\n\n.is-unavailable {\n    opacity: 0.5;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.state-without-name {\n    opacity: 1;\n    font-size: 14px;\n}\n\n.name-without-icon {\n    margin-left: 16px;\n}\n\n.display-state {\n    display: flex;\n}\n\n.bubble-feedback-container,\n.bubble-feedback-element {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    overflow: hidden;\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n}\n\n.bubble-feedback-element {\n    opacity: 0;\n    background-color: rgb(0,0,0);\n    border-radius: 0;\n}\n\n@keyframes tap-feedback {\n    0% {transform: translateX(-100%); opacity: 0;}\n    64% {transform: translateX(0); opacity: 0.1;}\n    100% {transform: translateX(100%); opacity: 0;}\n}\n\n.large .bubble-container {\n    height: calc( var(--row-height,56px) * var(--row-size,1) + var(--row-gap,8px) * ( var(--row-size,1) - 1 ));\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n}\n\n.large .bubble-icon-container {\n    --mdc-icon-size: 24px;\n    min-width: 42px;\n    min-height: 42px;\n    margin-left: 8px;\n}",processedStylesCache={};function createBaseStructure(e,t={}){e.elements=e.elements||{};const n={...base_card_defaultOptions,appendTo:e.content,baseCardStyles:base_card_styles_namespaceObject,...t};return n.withBaseElements&&(e.elements.mainContainer=(0,utils.n)("div",`bubble-${n.type}-container bubble-container`),e.elements.cardWrapper=(0,utils.n)("div",`bubble-${n.type} bubble-wrapper`),e.elements.contentContainer=(0,utils.n)("div","bubble-content-container"),e.elements.buttonsContainer=(0,utils.n)("div","bubble-buttons-container"),e.elements.iconContainer=(0,utils.n)("div","bubble-icon-container icon-container"),e.elements.icon=(0,utils.n)("ha-icon","bubble-main-icon bubble-icon icon"),e.elements.image=(0,utils.n)("div","bubble-entity-picture entity-picture"),e.elements.nameContainer=(0,utils.n)("div","bubble-name-container name-container"),e.elements.name=(0,utils.n)("div","bubble-name name"),e.elements.state=(0,utils.n)("div","bubble-state state"),e.elements.iconContainer.append(e.elements.icon,n.withImage?e.elements.image:null),e.elements.nameContainer.append(e.elements.name,n.withState?e.elements.state:null),e.elements.contentContainer.append(e.elements.iconContainer,e.elements.nameContainer),e.elements.cardWrapper.append(e.elements.contentContainer,e.elements.buttonsContainer),n.withBackground&&(e.elements.background=(0,utils.n)("div","bubble-background"),e.elements.cardWrapper.prepend(e.elements.background)),n.withFeedback&&"none"!==n.buttonActions?.tap_action?.action&&(e.elements.feedbackContainer=(0,utils.n)("div","bubble-feedback-container feedback-container"),e.elements.feedback=(0,utils.n)("div","bubble-feedback-element feedback-element"),e.elements.feedback.style.display="none",e.elements.feedbackContainer.append(e.elements.feedback),e.elements.cardWrapper.append(e.elements.feedbackContainer),addFeedback(e.elements.background,e.elements.feedback)),e.elements.mainContainer.appendChild(e.elements.cardWrapper),n.withSlider&&createSliderStructure(e,{holdToSlide:n.holdToSlide,readOnlySlider:n.readOnlySlider})),n.styles&&(processedStylesCache[n.type]||(processedStylesCache[n.type]=n.baseCardStyles.replace(/card-type/g,n.type)),e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=processedStylesCache[n.type]+n.styles,e.elements.mainContainer.appendChild(e.elements.style)),n.withCustomStyle&&(e.elements.customStyle=(0,utils.n)("style"),e.elements.mainContainer.appendChild(e.elements.customStyle)),n.withSubButtons&&(create_createSubButtonStructure(e,{container:n.appendTo,appendTo:e.elements.cardWrapper??e.elements.mainContainer,before:!1}),e.elements.buttonsContainer&&e.elements.cardWrapper.appendChild(e.elements.buttonsContainer)),!0===n.iconActions?addActions(e.elements.iconContainer,e.config,e.config.entity):void 0!==n.iconActions&&!1!==n.iconActions&&addActions(e.elements.iconContainer,e.config,e.config.entity,n.iconActions),n.iconActions&&"none"!==n.iconActions?.tap_action?.action&&(e.elements.iconFeedbackContainer=(0,utils.n)("div","bubble-icon-feedback-container bubble-feedback-container"),e.elements.iconContainer.appendChild(e.elements.iconFeedbackContainer),e.elements.iconFeedback=(0,utils.n)("div","bubble-icon-feedback bubble-feedback-element feedback-element"),e.elements.iconFeedback.style.display="none",e.elements.iconFeedbackContainer.appendChild(e.elements.iconFeedback),e.elements.iconContainer.appendChild(e.elements.iconFeedbackContainer),addFeedback(e.elements.iconContainer,e.elements.iconFeedback)),!0===n.buttonActions?addActions(e.elements.background,e.config.button_action,e.config.entity):void 0!==n.buttonActions&&!1!==n.buttonActions&&addActions(e.elements.background,e.config.button_action,e.config.entity,n.buttonActions),n.appendTo===e.content?e.content.appendChild(e.elements.mainContainer):n.appendTo.appendChild(e.elements.mainContainer),e.elements}const base_card_defaultOptions={type:"base",appendTo:null,baseCardStyles:null,styles:"",withBaseElements:!0,withFeedback:!0,withImage:!0,withSlider:!1,holdToSlide:!1,readOnlySlider:!1,withCustomStyle:!0,withState:!0,withBackground:!0,withSubButtons:!1,iconActions:!0,buttonActions:!1},button_styles_namespaceObject=".bubble-range-slider {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    cursor: ew-resize;\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2))) / 1.1);\n    overflow: hidden;\n    mask-image: radial-gradient(white, black);\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.bubble-background {\n    background-color: var(--bubble-button-background-color);\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2))) / 1.1 );\n}\n\n.bubble-buttons-container {\n    display: contents;\n}";function create_createStructure(e,t=e.container){const n="button",o=getButtonType(e),i="slider"===o,a={};a.slider={icon:!0,button:{tap_action:{action:(0,utils.md)(e,"sensor")?"more-info":"toggle"},double_tap_action:{action:"none"},hold_action:{action:"none"}}},a.switch={icon:!0,button:{tap_action:{action:"toggle"},double_tap_action:{action:"toggle"},hold_action:{action:"more-info"}}},a.state={icon:{tap_action:{action:"more-info"},double_tap_action:{action:"more-info"},hold_action:{action:"more-info"}},button:{tap_action:{action:"more-info"},double_tap_action:{action:"more-info"},hold_action:{action:"more-info"}}},a.name={button:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}},icon:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}}};const r=createBaseStructure(e,{type:n,appendTo:t,styles:button_styles_namespaceObject,withSlider:i,holdToSlide:i,readOnlySlider:readOnlySlider(e),withFeedback:!e.config.tap_to_slide,withSubButtons:!0,iconActions:a[o]?.icon,buttonActions:!e.config.tap_to_slide&&a[o]?.button});r.background.classList.add("bubble-button-background"),r.mainContainer.classList.add("bubble-button-card-container"),r.cardWrapper.classList.add("bubble-button-card"),t!==e.container?e.buttonType=o:e.cardType=n}function handleButton(e,t=e.content){const n=getButtonType(e);"button"!==e.cardType&&e.buttonType!==n&&create_createStructure(e,t),"name"!==n&&(changes_changeStatus(e),changeButton(e)),changeIcon(e),changeName(e),changeState(e),changeSubButtons(e),"pop-up"!==e.cardType&&changes_changeStyle(e)}async function handlePopUp(e){if("pop-up"!==e.cardType){if(e.getRootNode()instanceof ShadowRoot==0)return;prepareStructure(e),createHeader(e),createStructure(e)}else e.popUp&&e.elements&&((e.config.hash===location.hash||e.editor||e.config!==e.previousConfig)&&(changeStyle(e),(e.config.entity||e.config.name)&&handleButton(e,e.elements.header),e.previousConfig=e.config),e.editor||changeTriggered(e),changeEditor(e))}const horizontal_buttons_stack_styles_namespaceObject="@keyframes from-bottom {\n    0% { transform: translate(-50%, 100px); }\n    26% { transform: translate(-50%, -8px); }\n    46% { transform: translate(-50%, 1px); }\n    62% { transform: translate(-50%, -2px); }\n    70% { transform: translate(-50%, 0); }\n    100% { transform: translate(-50%, 0); }\n}\n@keyframes pulse {\n    0% { filter: brightness(0.7); }\n    100% { filter: brightness(1.3); }\n}\nha-card {\n    border-radius: 0;\n}\n.horizontal-buttons-stack-card {\n    bottom: 16px;\n    height: 51px;\n    margin-top: 0;\n    position: fixed;\n    width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\n    left: calc(var(--mdc-drawer-width, 0px) + 4px);\n    z-index: 6; /* Higher value hide the more-info panel */\n}\n@media only screen and (max-width: 870px) {\n    .horizontal-buttons-stack-card {\n        width: calc(100% - 16px);\n        left: 8px;\n    }\n\n    .horizontal-buttons-stack-card::before {\n        left: -10px;\n    }\n}\n.horizontal-buttons-stack-card::before {\n    content: '';\n    position: absolute;\n    top: -32px;\n    display: none;\n    background: linear-gradient(0deg, var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--primary-background-color)))) 50%, transparent);\n    width: 200%;\n    height: 100px;\n    pointer-events: none;\n}\n.has-gradient.horizontal-buttons-stack-card::before {\n    display: block;\n}\n\n.card-content {\n    width: calc(100% + 36px);\n    padding: 0 !important;\n    max-width: calc(var(--desktop-width) - 8px);\n    box-sizing: border-box;\n    overflow: scroll;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    -webkit-mask-image: linear-gradient(\n        90deg,\n        #000000 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        transparent 100%\n    );\n}\n.is-scrollable.card-content {\n    padding: 0 !important;\n    width: 100%;\n}\n.is-scrolled.card-content {\n    padding: 0 !important;\n    width: 100%;\n    -webkit-mask-image: linear-gradient(\n        90deg,\n        transparent 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        transparent 100%\n    );\n}\n.is-maxed-scroll.card-content {\n    -webkit-mask-image: linear-gradient(\n        90deg,\n        transparent 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        #000000 100%\n    );\n}\n.card-content::-webkit-scrollbar {\n    display: none;\n}\n\n.bubble-horizontal-buttons-stack-card-container {\n    height: 51px;\n    position: relative;\n    margin: auto;\n}\n\n.bubble-button {\n    align-items: center;\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    color: var(--primary-text-color);\n    cursor: pointer;\n    display: inline-flex;\n    height: 50px;\n    left: 0;\n    padding: 0 16px;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n    transition: transform 1s;\n    box-sizing: border-box;\n}\n.bubble-button.highlight {\n    animation: pulse 1.4s infinite alternate;\n}\n.bubble-background-color {\n    border: 1px solid var(--primary-text-color);\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    box-sizing: border-box;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    transition: background-color 1s;\n    width: 100%;\n    z-index: 1;\n}\n.bubble-background {\n    opacity: 0.8;\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box !important;\n    position: absolute;\n    left: 0;\n    z-index: 0;\n    background-color: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n}\n.bubble-icon {\n    height: 24px;\n    width: 24px;\n    z-index: 2;\n}\n.bubble-icon + .bubble-name {\n    margin-left: 8px;\n    z-index: 2;\n}\n\n.horizontal-buttons-stack-card.editor {\n    position: relative;\n    width: 100%;\n    left: 0;\n    bottom: 0;\n}\n.horizontal-buttons-stack-card.editor::before {\n    background: none;\n}\n";let isOpen=!1;const BUTTON_MARGIN=12;function createButton(e,t){const n=e.config[`${t}_name`]??"",o=e.config[`${t}_icon`]??"",i=e.config[`${t}_pir_sensor`],a=e.config[`${t}_link`],r=e.config[`${t}_entity`];isOpen=isOpen||location.hash===a;const s=(0,utils.n)("ha-icon","bubble-icon icon");s.icon=o;const l=(0,utils.n)("div","bubble-name name");l.innerText=n;const c=(0,utils.n)("div","bubble-background-color background-color"),d=(0,utils.n)("div","bubble-background background"),u=(0,utils.n)("div",`bubble-button bubble-button-${t} button ${a.substring(1)}`);let p=localStorage.getItem(`bubbleButtonWidth-${a}`);return u.style.width=`${p}px`,u.appendChild(s),u.appendChild(l),u.appendChild(c),u.appendChild(d),u.addEventListener("click",(()=>{location.hash!==a&&(isOpen=!1),isOpen?removeHash():addHash(a),isOpen=!isOpen,(0,utils.jp)("light")})),u.icon=s,u.name=l,u.backgroundColor=c,u.background=d,u.pirSensor=i,u.lightEntity=r,u.link=a,u.index=t,window.addEventListener("location-changed",(function(){e.config.highlight_current_view&&(location.pathname===a||location.hash===a?u.classList.add("highlight"):u.classList.remove("highlight"))})),e.elements.buttons.push(u),u}function horizontal_buttons_stack_create_createStructure(e){e.elements={},e.elements.buttons=[],e.elements.cardContainer=(0,utils.n)("div","bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container");let t=1;for(;e.config[t+"_link"];)e.elements.cardContainer.appendChild(createButton(e,t)),t++;e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=horizontal_buttons_stack_styles_namespaceObject,e.elements.customStyle=(0,utils.n)("style"),e.card.classList.add("horizontal-buttons-stack-card"),e.card.style.marginLeft=e.config.margin??"",e.config.hide_gradient||e.card.classList.add("has-gradient"),e.card.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.elements.cardContainer.appendChild(e.elements.style),e.elements.cardContainer.appendChild(e.elements.customStyle),e.content.appendChild(e.elements.cardContainer),e.content.addEventListener("scroll",(()=>{e.content.scrollLeft>0?e.content.classList.add("is-scrolled"):e.content.classList.remove("is-scrolled"),e.content.scrollWidth-BUTTON_MARGIN<e.content.offsetWidth+e.content.scrollLeft?e.content.classList.add("is-maxed-scroll"):e.content.classList.remove("is-maxed-scroll")})),(e.config.rise_animation??1)&&(e.content.style.animation="from-bottom .6s forwards",setTimeout((()=>{e.content.style.animation="none"}),1500));let n=e.card.parentNode.host;n?.parentElement&&!e.editor&&"hui-card"===n?.parentElement?.tagName.toLowerCase()&&(n.parentElement.style.padding="0 0 80px"),e.cardType="horizontal-buttons-stack"}const changes_BUTTON_MARGIN=12;function sortButtons(e){if(!e.config.auto_order)return;const t=e._hass.states;e.elements.buttons.sort(((e,n)=>{if(!t[e.pirSensor])return 1;if(!t[n.pirSensor])return-1;const o=t[e.pirSensor]?.last_updated,i=t[n.pirSensor]?.last_updated;return"on"===t[e.pirSensor]?.state&&"on"===t[n.pirSensor]?.state?o>i?-1:o===i?0:1:"on"===t[e.pirSensor]?.state?-1:"on"===t[n.pirSensor]?.state?1:o>i?-1:o===i?0:1}))}function placeButtons(e){let t=0;for(let n=0;n<e.elements.buttons.length;++n){let o=localStorage.getItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`);e.elements.buttons[n].style.width="";const i=e.elements.buttons[n].offsetWidth;e.elements.buttons[n].style.width=`${i}px`,i>0&&(o=i,localStorage.setItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`,`${i}`)),null!==o&&(e.elements.buttons[n].style.transform=`translateX(${t}px)`,e.elements.buttons[n].style.width="",t+=+o+changes_BUTTON_MARGIN)}e.elements.cardContainer.style.width=`${t}px`}function changes_changeEditor(e){const t=e.shadowRoot.host.closest("hui-card-preview, hui-card-options");e.editor||null!==t?(e.elements.cardContainer.classList.add("editor"),e.card.classList.add("editor")):(e.elements.cardContainer.classList.remove("editor"),e.card.classList.remove("editor"))}function changeLight(e){e.elements.buttons.forEach((t=>{const n=e._hass.states[t.lightEntity],o=n?.attributes.rgb_color,i=n?.state;if(o){const e=isColorCloseToWhite(o)?"rgba(255, 220, 200, 0.5)":`rgba(${o}, 0.5)`;t.backgroundColor.style.backgroundColor=e,t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"}else"on"==i?(t.backgroundColor.style.backgroundColor="rgba(255, 255, 255, 0.5)",t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"):(t.backgroundColor.style.backgroundColor="rgba(0, 0, 0, 0)",t.backgroundColor.style.borderColor="var(--primary-text-color)")}))}function changeConfig(e){e.elements.buttons.forEach((t=>{const n=t.index,o=e.config[`${n}_name`]??"",i=e.config[`${n}_icon`]??"",a=e.config[`${n}_pir_sensor`],r=e.config[`${n}_link`],s=e.config[`${n}_entity`];t.pirSensor=a,t.lightEntity=s,t.link=r,o?(t.name.innerText=o,t.name.style.display=""):t.name.style.display="none",i?(t.icon.icon=i,t.icon.style.display=""):t.icon.style.display="none",void 0===r&&(t.remove(),e.elements.buttons=e.elements.buttons.filter((e=>e!==t)),e.elements.buttons.forEach(((e,t)=>{e.index=t+1})))}));let t=e.elements.buttons.length+1;for(;void 0!==e.config[`${t}_link`];){if(!e.elements.buttons.find((e=>e.index===t))){const n=createButton(e,t);e.elements.buttons.push(n)}t++}}function horizontal_buttons_stack_changes_changeStatus(e){e.content.scrollWidth>=e.content.offsetWidth?e.content.classList.add("is-scrollable"):e.content.classList.remove("is-scrollable")}function horizontal_buttons_stack_changes_changeStyle(e){handleCustomStyles(e)}function handleHorizontalButtonsStack(e){"horizontal-buttons-stack"!==e.cardType&&horizontal_buttons_stack_create_createStructure(e),horizontal_buttons_stack_changes_changeStyle(e),sortButtons(e),changeConfig(e),changes_changeEditor(e),placeButtons(e),changeLight(e),horizontal_buttons_stack_changes_changeStatus(e)}const separator_styles_namespaceObject=".bubble-container {\n    display: flex;\n    background: none;\n    align-items: center;\n    height: 40px;\n    overflow: visible;\n    --bubble-separator-border: none;\n}\n.bubble-icon {\n    display: inline-flex;\n    height: auto;\n    width: auto;\n    margin: 0 22px 0 8px;\n}\n.bubble-name {\n    margin: 0 30px 0 0;\n    font-size: 16px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.bubble-name:empty {\n    display: none;\n}\n\n.bubble-line {\n    border-radius: 6px;\n    margin-right: 14px;\n    opacity: 0.6;\n    flex-grow: 1;\n    height: 6px;\n    background-color: var(--bubble-line-background-color, var(--ha-card-background-color, var(--secondary-background-color)));\n}\n\n.bubble-sub-button-container {\n    margin-left: 8px;\n}\n\n.rows-2 .bubble-sub-button-container {\n    margin-left: 14px;\n}\n\n.large .bubble-container {\n    height: 44px;\n}";function separator_create_createStructure(e){const t="separator";e.elements={},e.elements.mainContainer=(0,utils.n)("div","bubble-container bubble-separator separator-container"),e.elements.icon=(0,utils.n)("ha-icon","bubble-icon"),e.elements.name=(0,utils.n)("h4","bubble-name"),e.elements.line=(0,utils.n)("div","bubble-line"),e.elements.mainContainer.appendChild(e.elements.icon),e.elements.mainContainer.appendChild(e.elements.name),e.elements.mainContainer.appendChild(e.elements.line),createBaseStructure(e,{type:t,styles:separator_styles_namespaceObject,withBaseElements:!1,withSubButtons:!0,iconActions:!1}),e.cardType=t}function changes_changeIcon(e){e.elements.icon.icon=getIcon(e),""===e.elements.icon.icon&&""===e.elements.icon.style.margin?(e.elements.icon.style.margin="0px 8px",e.elements.icon.style.width="0px"):""!==e.elements.icon.icon&&"0px 8px"===e.elements.icon.style.margin&&(e.elements.icon.style.margin="",e.elements.icon.style.width="")}function changes_changeName(e){const t=getName(e);t!==e.elements.name.innerText&&(e.elements.name.innerText=t)}function separator_changes_changeStyle(e){(0,utils.JK)(e),handleCustomStyles(e)}function handleSeparator(e){"separator"!==e.cardType&&separator_create_createStructure(e),changes_changeIcon(e),changeName(e,!1),changeSubButtons(e),separator_changes_changeStyle(e)}const coverEntityFeature={OPEN:1,CLOSE:2,STOP:8};function supportsFeature(e,t){return supportsFeatureFromAttributes(e.attributes,t)}function supportsFeatureFromAttributes(e,t){return!!(e&&void 0!==e.supported_features&&e.supported_features&t)}function isFullyOpen(e){return void 0!==e.attributes.current_position?100===e.attributes.current_position:"open"===e.state}function isFullyClosed(e){return void 0!==e.attributes.current_position?0===e.attributes.current_position:"closed"===e.state}function changeCoverIcons(e){const t=e._hass.states[e.config.entity],{current_position:n,assumed_state:o}=t.attributes,i=supportsFeature(t,coverEntityFeature.OPEN),a=supportsFeature(t,coverEntityFeature.CLOSE),r=supportsFeature(t,coverEntityFeature.STOP),s=isFullyOpen(t),l=isFullyClosed(t),c="curtain"===(0,utils.D$)(e,"device_class");e.elements.icon.icon=getIcon(e,e.config.entity,s?e.config.icon_open:e.config.icon_close),e.elements.iconOpen.icon=e.config.icon_up||(c?"mdi:arrow-expand-horizontal":"mdi:arrow-up"),e.elements.iconClose.icon=e.config.icon_down||(c?"mdi:arrow-collapse-horizontal":"mdi:arrow-down"),void 0!==n?(s?e.elements.buttonOpen.classList.add("disabled"):i&&e.elements.buttonOpen.classList.remove("disabled"),l?e.elements.buttonClose.classList.add("disabled"):a&&e.elements.buttonClose.classList.remove("disabled")):(e.elements.buttonOpen.classList.remove("disabled"),e.elements.buttonClose.classList.remove("disabled")),e.elements.buttonStop.style.display=r?"":"none"}function cover_changes_changeStyle(e){(0,utils.JK)(e),handleCustomStyles(e)}const cover_styles_namespaceObject=".bubble-button.disabled {\n    opacity: 0.3 !important;\n    pointer-events: none !important;\n    cursor: none !important;\n}\n\n.bubble-button {\n  display: flex;\n  background: none;\n  border: none;\n  cursor: pointer;\n  border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n  height: 42px;\n  width: 42px;\n  transition: background 0.3s ease;\n  align-self: center;\n  align-items: center;\n  justify-content: center;\n}";function cover_create_createStructure(e){const t="cover",n=createBaseStructure(e,{type:t,styles:cover_styles_namespaceObject,withSubButtons:!0,iconActions:!0,buttonActions:!0});n.buttonsContainer.classList.add("bubble-buttons","buttons-container"),n.buttonOpen=(0,utils.n)("div","bubble-button bubble-open button open"),n.buttonStop=(0,utils.n)("div","bubble-button bubble-stop button stop"),n.buttonClose=(0,utils.n)("div","bubble-button bubble-close button close"),n.iconOpen=(0,utils.n)("ha-icon","bubble-icon bubble-icon-open"),n.iconStop=(0,utils.n)("ha-icon","bubble-icon bubble-icon-stop"),n.iconStop.setAttribute("icon","mdi:stop"),n.iconClose=(0,utils.n)("ha-icon","bubble-icon bubble-icon-close"),n.buttonOpen.appendChild(n.iconOpen),n.buttonStop.appendChild(n.iconStop),n.buttonClose.appendChild(n.iconClose),n.buttonsContainer.append(n.buttonOpen,n.buttonStop,n.buttonClose),n.buttonOpen.addEventListener("click",(()=>{(0,utils.jp)("selection");const t=e.config.open_service??"cover.open_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),n.buttonStop.addEventListener("click",(()=>{(0,utils.jp)("selection");const t=e.config.stop_service??"cover.stop_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),n.buttonClose.addEventListener("click",(()=>{(0,utils.jp)("selection");const t=e.config.close_service??"cover.close_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),e.cardType=t}function handleCover(e){"cover"!==e.cardType&&cover_create_createStructure(e),changeStatus(e),changeIcon(e),changeName(e),changeState(e),changeCoverIcons(e),changeSubButtons(e),cover_changes_changeStyle(e)}const empty_column_styles_namespaceObject=".empty-column {\n    display: flex;\n    width: 100%;\n}\n";function empty_column_create_createStructure(e){e.elements={},e.elements.emptyColumnCard=(0,utils.n)("div","bubble-empty-column empty-column"),e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=empty_column_styles_namespaceObject,e.elements.customStyle=(0,utils.n)("style"),e.content.innerHTML="",e.content.appendChild(e.elements.emptyColumnCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="empty-column"}function handleEmptyColumn(e){"empty-column"!==e.cardType&&empty_column_create_createStructure(e)}function changeBackground(e){const t=(0,utils.$C)(e),n=getImage(e),o=e.config.cover_background,i=e.elements.background.style.backgroundImage;if(o&&t&&n){const t="url("+n+")";i!==t&&(e.elements.background.style.backgroundImage=t)}else""!==i&&(e.elements.background.style.backgroundImage="")}function changeMediaInfo(e){const t=(0,utils.D$)(e,"media_title"),n=(0,utils.D$)(e,"media_artist"),o=t+n;o!==e.previousMediaState&&(e.elements.artist.style.display=""===n?"none":"flex",e.previousMediaState=o,(0,utils.Nl)(e,e.elements.title,t),(0,utils.Nl)(e,e.elements.artist,n))}function changeDisplayedInfo(e){(0,utils.D$)(e,"media_title");const t=""===(0,utils.D$)(e,"media_artist");e.elements.mediaInfoContainer.style.display=t?"none":"",e.elements.nameContainer.style.display=t?"":"none"}function changeSlider(e){e.elements.rangeFill&&updateSlider(e)}function changePlayPauseIcon(e){const t="playing"===(0,utils.Gu)(e),n=e.elements.playPauseButton.clicked;t?e.elements.playPauseButton.setAttribute("icon",n?"mdi:play":"mdi:pause"):e.elements.playPauseButton.setAttribute("icon",n?"mdi:pause":"mdi:play"),e.elements.playPauseButton.clicked=!1}function changePowerIcon(e){const t=(0,utils.$C)(e);e.elements.powerButton.style.color=t?"var(--accent-color)":""}function changeVolumeIcon(e){const t=e.elements.volumeButton.isHidden,n=t?"1":"0",o=t?"mdi:volume-high":"mdi:close";e.elements.volumeButton.setAttribute("icon",o),e.elements.mediaInfoContainer.style.opacity=n,e.elements.nameContainer.style.opacity=n,e.elements.subButtonContainer&&(e.elements.subButtonContainer.style.opacity=n),e.elements.previousButton.style.opacity=n,e.elements.nextButton.style.opacity=n,e.elements.powerButton.style.opacity=n,e.elements.volumeButton.isHidden=!t}function changeMuteIcon(e){const t=1==(0,utils.D$)(e,"is_volume_muted");e.elements.muteButton.clicked,"var(--primary-text-color)"!==e.elements.muteButton.style.color&&(e.elements.muteButton.style.color="var(--primary-text-color)"),t?e.elements.muteButton.setAttribute("icon","mdi:volume-off"):e.elements.muteButton.setAttribute("icon","mdi:volume-high"),e.elements.muteButton.clicked=!1}function media_player_changes_changeStyle(e){(0,utils.JK)(e),handleCustomStyles(e);const t=(0,utils.Gu)(e),n="off"!==t&&"unknown"!==t,o=e.config.hide?.power_button&&e.config.hide?.previous_button&&e.config.hide?.next_button&&e.config.hide?.volume_button&&e.config.hide?.play_pause_button;o&&"none"!==e.elements.buttonsContainer.style.display?e.elements.buttonsContainer.classList.add("hidden"):!o&&e.elements.buttonsContainer.classList.contains("hidden")&&e.elements.buttonsContainer.classList.remove("hidden"),e.config.hide?.power_button&&"none"!==e.elements.powerButton.style.display?e.elements.powerButton.classList.add("hidden"):!e.config.hide?.power_button&&e.elements.powerButton.classList.contains("hidden")&&e.elements.powerButton.classList.remove("hidden"),!e.config.hide?.previous_button&&(e.editor||n)||"none"===e.elements.previousButton.style.display?!e.config.hide?.previous_button&&(e.editor||n)&&e.elements.previousButton.classList.contains("hidden")&&e.elements.previousButton.classList.remove("hidden"):e.elements.previousButton.classList.add("hidden"),!e.config.hide?.next_button&&(e.editor||n)||"none"===e.elements.nextButton.style.display?!e.config.hide?.next_button&&(e.editor||n)&&e.elements.nextButton.classList.contains("hidden")&&e.elements.nextButton.classList.remove("hidden"):e.elements.nextButton.classList.add("hidden"),!e.config.hide?.volume_button&&(e.editor||n)||"none"===e.elements.volumeButton.style.display?!e.config.hide?.volume_button&&(e.editor||n)&&e.elements.volumeButton.classList.contains("hidden")&&e.elements.volumeButton.classList.remove("hidden"):e.elements.volumeButton.classList.add("hidden"),(e.config.hide?.play_pause_button||!e.editor&&!n)&&e.elements.playPauseButton.classList.contains("hidden")?e.elements.playPauseButton.classList.add("hidden"):!e.config.hide?.play_pause_button&&(e.editor||n)&&e.elements.playPauseButton.classList.contains("hidden")&&e.elements.playPauseButton.classList.remove("hidden")}function helpers_updateEntity(e,t){isEntityType(e,"media_player")&&e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:(t/100).toFixed(2)})}const media_player_styles_namespaceObject=".bubble-play-pause-button,\n.bubble-previous-button,\n.bubble-next-button,\n.bubble-volume-button,\n.bubble-power-button {\n    display: flex;\n    background: none;\n    border: none;\n    cursor: pointer;\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    height: 42px;\n    width: 42px;\n    transition: background 0.3s ease;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    --mdc-icon-size: 20px;\n}\n\n.bubble-play-pause-button {\n    background-color: var(--bubble-accent-color, var(--accent-color));\n}\n\n.bubble-play-pause-button:not(.large) {\n    height: 36px;\n    width: 36px;\n}\n\n.bubble-volume-slider {\n    position: absolute;\n    width: calc(100% - 150px);\n    height: 38px;\n    left: 50px;\n    overflow: hidden;\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    z-index: 1;\n    background-color: var(--bubble-media-player-slider-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    opacity: 1;\n    transition: opacity .2s, transform .2s;\n    transform: translateX(0);\n}\n\n.bubble-range-value {\n    display: flex;\n    justify-content: flex-end;\n    height: 38px;\n    align-items: center;\n    font-size: 12px;\n    opacity: 0.8;\n    z-index: 1;\n}\n\n.bubble-mute-button {\n    opacity: 1;\n    transition: opacity .2s, transform .2s;\n    transform: translateX(0);\n}\n\n.is-hidden {\n    opacity: 0 !important;\n    pointer-events: none;\n    transform: translateX(14px);\n}\n\n.bubble-range-fill {\n    background-color: var(--accent-color);\n}\n\n.bubble-mute-button {\n    display: flex;\n    position: absolute;\n    height: 38px;\n    width: 38px;\n    justify-content: center;\n    align-items: center;\n}\n\n.bubble-media-info-container {\n    display: flex;\n    line-height: 14px;\n    font-size: 12px;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    margin: 0 16px 0 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-title,\n.bubble-artist {\n    display: flex;\n    margin: 2px 0;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-title {\n    font-weight: 600;\n}\n\n.bubble-background {\n    background-size: cover;\n    background-position: center;\n    filter: blur(50px);\n    opacity: 0.5;\n}\n\n@media screen and (max-width: 250px) {\n    .bubble-previous-button {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 206px) {\n    .bubble-next-button {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 160px) {\n    .bubble-volume-button {\n        display: none;\n    }\n}\n\n.large .bubble-play-pause-button {\n  height: 42px;\n  width: 42px;\n}\n\n.large .bubble-mute-button {\n  height: 42px;\n  width: 42px;\n}\n\n.large .bubble-volume-slider {\n  height: 42px;\n  border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n  left: 60px;\n  width: calc(100% - 164px);\n}\n\n.large .bubble-range-value {\n  place-items: center;\n  height: 42px;\n}\n\n.large .bubble-button-container {\n  align-items: center;\n}";let volumeLevel=0;function media_player_create_createStructure(e){const t="media-player",n=createBaseStructure(e,{type:t,styles:media_player_styles_namespaceObject,iconActions:!1,buttonActions:!0,withSubButtons:!0});n.mediaInfoContainer=(0,utils.n)("div","bubble-media-info-container"),n.playPauseButton=(0,utils.n)("ha-icon","bubble-play-pause-button"),n.previousButton=(0,utils.n)("ha-icon","bubble-previous-button"),n.previousButton.setAttribute("icon","mdi:skip-previous"),n.nextButton=(0,utils.n)("ha-icon","bubble-next-button"),n.nextButton.setAttribute("icon","mdi:skip-next"),n.volumeButton=(0,utils.n)("ha-icon","bubble-volume-button"),n.volumeButton.setAttribute("icon","mdi:volume-high"),n.powerButton=(0,utils.n)("ha-icon","bubble-power-button"),n.powerButton.setAttribute("icon","mdi:power-standby"),n.muteButton=(0,utils.n)("ha-icon","bubble-mute-button is-hidden"),n.muteButton.setAttribute("icon","mdi:volume-off"),n.title=(0,utils.n)("div","bubble-title"),n.artist=(0,utils.n)("div","bubble-artist"),n.background.classList.add("bubble-cover-background"),n.buttonsContainer.classList.add("bubble-button-container"),n.iconContainer.appendChild(n.muteButton),n.mediaInfoContainer.append(n.title,n.artist),n.contentContainer.append(n.mediaInfoContainer),n.buttonsContainer.append(n.powerButton,n.previousButton,n.nextButton,n.volumeButton,n.playPauseButton),addActions(n.icon,e.config,e.config.entity),addActions(n.image,e.config,e.config.entity),n.volumeSliderContainer=(0,utils.n)("div","bubble-volume-slider is-hidden"),createSliderStructure(e,{targetElement:n.volumeSliderContainer,sliderLiveUpdate:!1,withValueDisplay:!0,holdToSlide:!1}),n.cardWrapper.appendChild(n.volumeSliderContainer),n.volumeButton.addEventListener("click",(()=>{n.volumeSliderContainer.classList.toggle("is-hidden"),n.muteButton.classList.toggle("is-hidden"),n.icon.classList.toggle("is-hidden"),n.image.classList.toggle("is-hidden"),changeVolumeIcon(e)})),n.powerButton.addEventListener("click",(()=>{const t=(0,utils.$C)(e);e._hass.callService("media_player",t?"turn_off":"turn_on",{entity_id:e.config.entity})})),n.muteButton.addEventListener("click",(()=>{const t=!0===(0,utils.D$)(e,"is_volume_muted");e._hass.callService("media_player","volume_mute",{entity_id:e.config.entity,is_volume_muted:!t}),n.muteButton.clicked=!0})),n.previousButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_previous_track",{entity_id:e.config.entity})})),n.nextButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_next_track",{entity_id:e.config.entity})})),n.playPauseButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_play_pause",{entity_id:e.config.entity}),n.playPauseButton.clicked=!0})),n.mainContainer.addEventListener("click",(()=>(0,utils.jp)("selection"))),e.cardType=t}function handleMediaPlayer(e){"media-player"!==e.cardType&&media_player_create_createStructure(e),changeStatus(e),changeName(e),changeMediaInfo(e),changeDisplayedInfo(e),changeIcon(e),changeBackground(e),changeState(e),changeSlider(e),changePlayPauseIcon(e),changeMuteIcon(e),changePowerIcon(e),changeSubButtons(e),media_player_changes_changeStyle(e)}function select_changes_changeStyle(e){(0,utils.JK)(e),handleCustomStyles(e)}const select_styles_namespaceObject=".bubble-container {\n    border: solid 2px transparent;\n    overflow: inherit;\n}\n\n.bubble-icon-container {\n    padding-left: 0px;\n    margin: 6px;\n}\n\n.large .bubble-icon-container {\n    margin-left: 6px;\n}";function select_create_createStructure(e){createBaseStructure(e,{type:"select",styles:select_styles_namespaceObject,withFeedback:!0,withSubButtons:!0,withIconActions:!0}).mainContainer.classList.add("bubble-select-card-container"),e.cardType="select"}function handleSelect(e){e.cardType,"select"!==e.cardType&&(select_create_createStructure(e),createDropdownStructure(e),createDropdownActions(e)),changeDropdownList(e,e.elements,e.config.entity,e.config),changeStatus(e),changeIcon(e),changeName(e),changeState(e),changeSubButtons(e),select_changes_changeStyle(e)}function changeTemperature(e){const t=(0,utils.D$)(e,"temperature");""===t?e.elements.temperatureContainer?.classList.add("hidden"):e.elements.temperatureContainer?.classList.remove("hidden"),t!==e.previousTemp&&(e.previousTemp=t,e.elements.tempDisplay&&(e.elements.tempDisplay.innerText=parseFloat(t).toFixed(1)))}function changeTargetTempLow(e){const t=(0,utils.D$)(e,"target_temp_low"),n=e.config.hide_target_temp_low;""===t?e.elements.targetTemperatureContainer?.classList.add("hidden"):e.elements.targetTemperatureContainer?.classList.remove("hidden"),n?e.elements.lowTempContainer?.classList.add("hidden"):e.elements.lowTempContainer?.classList.remove("hidden"),t!==e.previousTargetTempLow&&(e.previousTargetTempLow=t,e.elements.lowTempDisplay&&(e.elements.lowTempDisplay.innerText=parseFloat(t).toFixed(1)))}function changeTargetTempHigh(e){const t=(0,utils.D$)(e,"target_temp_high");e.config.hide_target_temp_high?e.elements.highTempContainer?.classList.add("hidden"):e.elements.highTempContainer?.classList.remove("hidden"),t!==e.previousTargetTempHigh&&(e.previousTargetTempHigh=t,e.elements.highTempDisplay&&(e.elements.highTempDisplay.innerText=parseFloat(t).toFixed(1)))}function climate_changes_changeStyle(e){(0,utils.JK)(e),handleCustomStyles(e);const t=(0,utils.Gu)(e);e.previousState!==t&&(e.previousState=t,e.elements.background.style.backgroundColor=`var(--bubble-climate-background-color, ${getClimateColor(e)})`),e.config.card_layout,e.elements.hvacModeDropdown}const climate_styles_namespaceObject=".bubble-temperature-container, .bubble-low-temp-container, .bubble-high-temp-container {\n    display: inline-flex;\n    position: relative;\n    font-size: 12px;\n    white-space: nowrap;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    height: 36px;\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    background-color: var(--bubble-climate-button-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))));\n}\n\n.bubble-low-temp-container {\n    color: var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)));\n}\n\n.bubble-high-temp-container {\n    color: var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)));\n}\n\n.bubble-target-temperature-container {\n    display: flex;\n    gap: 10px;\n}\n\n.bubble-climate-minus-button,\n.bubble-climate-plus-button {\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    width: 36px;\n    height: 36px;\n    vertical-align: middle;\n    font-size: 18px;\n    color: var(--primary-text-color);\n    cursor: pointer;\n}\n\n.bubble-climate-minus-button-icon,\n.bubble-climate-plus-button-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    --mdc-icon-size: 16px;\n}\n\n@keyframes tap-warning {\n    10%, 90% { transform: translateX(-1px); }\n    20%, 80% { transform: translateX(1px); }\n    30%, 50%, 70% { transform: translateX(-2px); }\n    40%, 60% { transform: translateX(2px); }\n}";function climate_create_createStructure(e){const t="climate",n=createBaseStructure(e,{type:t,styles:climate_styles_namespaceObject,withSubButtons:!0,iconActions:!0,buttonActions:!0});function o(t,o,a){const r=(0,utils.n)("div","bubble-climate-minus-button"),s=(0,utils.n)("div","bubble-climate-plus-button"),l=(0,utils.n)("ha-icon","bubble-climate-minus-button-icon");l.setAttribute("icon","mdi:minus"),r.appendChild(l),addFeedback(r);const c=(0,utils.n)("ha-icon","bubble-climate-plus-button-icon");let d,u;c.setAttribute("icon","mdi:plus"),s.appendChild(c),addFeedback(s),"temperature"===o?(n.tempDisplay=(0,utils.n)("div","bubble-temperature-display"),d=n.tempDisplay):"target_temp_low"===o?(n.lowTempDisplay=(0,utils.n)("div","bubble-low-temperature-display"),d=n.lowTempDisplay):"target_temp_high"===o&&(n.highTempDisplay=(0,utils.n)("div","bubble-high-temperature-display"),d=n.highTempDisplay),t.appendChild(r),t.appendChild(d),t.appendChild(s);let p=parseFloat((0,utils.D$)(e,o))||0,h=p;function b(){const t=parseFloat((0,utils.D$)(e,o))||0;t!==h&&(p=t,h=t)}function m(){b();const t={entity_id:e.config.entity};"target_temp_low"===o?(t.target_temp_low=p,t.target_temp_high=(0,utils.D$)(e,"target_temp_high")):"target_temp_high"===o?(t.target_temp_high=p,t.target_temp_low=(0,utils.D$)(e,"target_temp_low")):t[o]=p,e._hass.callService("climate","set_temperature",t)}function g(t){b();const a=e.config.min_temp??(void 0!==i.attributes.min_temp?i.attributes.min_temp:0),r=e.config.max_temp??(void 0!==i.attributes.max_temp?i.attributes.max_temp:1e3);let s=parseFloat((p+t).toFixed(1));if(s=Math.min(r,Math.max(a,s)),s<a?s=a:s>r&&(s=r),s!==p)p=s,function(e){"temperature"===o?n.tempDisplay.innerText=e.toFixed(1):"target_temp_low"===o?n.lowTempDisplay.innerText=e.toFixed(1):"target_temp_high"===o&&(n.highTempDisplay.innerText=e.toFixed(1))}(p),clearTimeout(u),u=setTimeout(m,700);else{(0,utils.jp)("failure");const t=e.elements.mainContainer;t.style.animation="tap-warning 0.4s cubic-bezier(.36,.07,.19,.97) both",setTimeout((()=>{t.style.animation=""}),500)}}r.addEventListener("click",(()=>g(-a))),s.addEventListener("click",(()=>g(a)))}n.temperatureContainer=(0,utils.n)("div","bubble-temperature-container"),n.targetTemperatureContainer=(0,utils.n)("div","bubble-target-temperature-container"),n.background.classList.add("bubble-color-background"),n.buttonsContainer.append(n.temperatureContainer,n.targetTemperatureContainer);const i=e._hass.states[e.config.entity],a="°C"===e._hass.config.unit_system.temperature,r=e.config.step??(i.attributes.target_temp_step?i.attributes.target_temp_step:a?.5:1),s=void 0!==i?.attributes?.target_temp_low,l=void 0!==i?.attributes?.target_temp_high;void 0!==i?.attributes?.temperature&&o(n.temperatureContainer,"temperature",r),(s||l)&&(s&&(n.lowTempContainer=(0,utils.n)("div","bubble-low-temp-container"),o(n.lowTempContainer,"target_temp_low",r),n.targetTemperatureContainer.appendChild(n.lowTempContainer)),l&&(n.highTempContainer=(0,utils.n)("div","bubble-high-temp-container"),o(n.highTempContainer,"target_temp_high",r),n.targetTemperatureContainer.appendChild(n.highTempContainer))),e.cardType=t}function handleClimate(e){"climate"!==e.cardType&&climate_create_createStructure(e),changeStatus(e),changeName(e),changeIcon(e),changeState(e),changeTemperature(e),changeTargetTempLow(e),changeTargetTempHigh(e),changeSubButtons(e),climate_changes_changeStyle(e)}const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(e,t,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let t=this.o;const n=this.t;if(e&&void 0===t){const e=void 0!==n&&1===n.length;e&&(t=o.get(n)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(n,t))}return t}toString(){return this.cssText}}const r=e=>new n("string"==typeof e?e:e+"",void 0,s),css_tag_i=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new n(o,e,s)},S=(n,o)=>{if(e)n.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of o){const o=document.createElement("style"),i=t.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=e.cssText,n.appendChild(o)}},c=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return r(t)})(e):e,{is:reactive_element_i,defineProperty:reactive_element_e,getOwnPropertyDescriptor:reactive_element_r,getOwnPropertyNames:h,getOwnPropertySymbols:reactive_element_o,getPrototypeOf:reactive_element_n}=Object,a=globalThis,reactive_element_c=a.trustedTypes,l=reactive_element_c?reactive_element_c.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(e,t)=>e,u={toAttribute(e,t){switch(t){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},f=(e,t)=>!reactive_element_i(e,t),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&reactive_element_e(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:i}=reactive_element_r(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const a=o?.call(this);i.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const e=reactive_element_n(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const e=this.properties,t=[...h(e),...reactive_element_o(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:u).toAttribute(t,n.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:u;this._$Em=o,this[o]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??f)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,p?.({ReactiveElement:b}),(a.reactiveElementVersions??=[]).push("2.0.4");const lit_html_t=globalThis,lit_html_i=lit_html_t.trustedTypes,lit_html_s=lit_html_i?lit_html_i.createPolicy("lit-html",{createHTML:e=>e}):void 0,lit_html_e="$lit$",lit_html_h=`lit$${Math.random().toFixed(9).slice(2)}$`,lit_html_o="?"+lit_html_h,lit_html_n=`<${lit_html_o}>`,lit_html_r=document,lit_html_l=()=>lit_html_r.createComment(""),lit_html_c=e=>null===e||"object"!=typeof e&&"function"!=typeof e,lit_html_a=Array.isArray,lit_html_u=e=>lit_html_a(e)||"function"==typeof e?.[Symbol.iterator],lit_html_d="[ \t\n\f\r]",lit_html_f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${lit_html_d}(?:([^\\s"'>=/]+)(${lit_html_d}*=${lit_html_d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),lit_html_p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,lit_html_y=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),x=lit_html_y(1),lit_html_b=lit_html_y(2),w=lit_html_y(3),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=lit_html_r.createTreeWalker(lit_html_r,129);function P(e,t){if(!lit_html_a(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==lit_html_s?lit_html_s.createHTML(t):t}const V=(e,t)=>{const n=e.length-1,o=[];let i,a=2===t?"<svg>":3===t?"<math>":"",r=lit_html_f;for(let t=0;t<n;t++){const n=e[t];let s,l,c=-1,d=0;for(;d<n.length&&(r.lastIndex=d,l=r.exec(n),null!==l);)d=r.lastIndex,r===lit_html_f?"!--"===l[1]?r=v:void 0!==l[1]?r=_:void 0!==l[2]?($.test(l[2])&&(i=RegExp("</"+l[2],"g")),r=m):void 0!==l[3]&&(r=m):r===m?">"===l[0]?(r=i??lit_html_f,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?m:'"'===l[3]?g:lit_html_p):r===g||r===lit_html_p?r=m:r===v||r===_?r=lit_html_f:(r=m,i=void 0);const u=r===m&&e[t+1].startsWith("/>")?" ":"";a+=r===lit_html_f?n+lit_html_n:c>=0?(o.push(s),n.slice(0,c)+lit_html_e+n.slice(c)+lit_html_h+u):n+lit_html_h+(-2===c?t:u)}return[P(e,a+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class N{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,a=0;const r=e.length-1,s=this.parts,[l,c]=V(e,t);if(this.el=N.createElement(l,n),C.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=C.nextNode())&&s.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(lit_html_e)){const t=c[a++],n=o.getAttribute(e).split(lit_html_h),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:r[2],strings:n,ctor:"."===r[1]?H:"?"===r[1]?I:"@"===r[1]?L:k}),o.removeAttribute(e)}else e.startsWith(lit_html_h)&&(s.push({type:6,index:i}),o.removeAttribute(e));if($.test(o.tagName)){const e=o.textContent.split(lit_html_h),t=e.length-1;if(t>0){o.textContent=lit_html_i?lit_html_i.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],lit_html_l()),C.nextNode(),s.push({type:2,index:++i});o.append(e[t],lit_html_l())}}}else if(8===o.nodeType)if(o.data===lit_html_o)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(lit_html_h,e+1));)s.push({type:7,index:i}),e+=lit_html_h.length-1}i++}}static createElement(e,t){const n=lit_html_r.createElement("template");return n.innerHTML=e,n}}function lit_html_S(e,t,n=e,o){if(t===T)return t;let i=void 0!==o?n._$Co?.[o]:n._$Cl;const a=lit_html_c(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(e),i._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=i:n._$Cl=i),void 0!==i&&(t=lit_html_S(e,i._$AS(e,t.values),i,o)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??lit_html_r).importNode(t,!0);C.currentNode=o;let i=C.nextNode(),a=0,r=0,s=n[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new R(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new z(i,this,e)),this._$AV.push(t),s=n[++r]}a!==s?.index&&(i=C.nextNode(),a++)}return C.currentNode=lit_html_r,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lit_html_S(this,e,t),lit_html_c(e)?e===E||null==e||""===e?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==T&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):lit_html_u(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&lit_html_c(this._$AH)?this._$AA.nextSibling.data=e:this.T(lit_html_r.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=N.createElement(P(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new M(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new N(e)),t}k(e){lit_html_a(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const i of e)o===t.length?t.push(n=new R(this.O(lit_html_l()),this.O(lit_html_l()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}_$AI(e,t=this,n,o){const i=this.strings;let a=!1;if(void 0===i)e=lit_html_S(this,e,t,0),a=!lit_html_c(e)||e!==this._$AH&&e!==T,a&&(this._$AH=e);else{const o=e;let r,s;for(e=i[0],r=0;r<i.length-1;r++)s=lit_html_S(this,o[n+r],t,r),s===T&&(s=this._$AH[r]),a||=!lit_html_c(s)||s!==this._$AH[r],s===E?e=E:e!==E&&(e+=(s??"")+i[r+1]),this._$AH[r]=s}a&&!o&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}}class L extends k{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=lit_html_S(this,e,t,0)??E)===T)return;const n=this._$AH,o=e===E&&n!==E||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==E&&(n===E||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){lit_html_S(this,e)}}const Z={M:lit_html_e,P:lit_html_h,A:lit_html_o,C:1,L:V,R:M,D:lit_html_u,V:lit_html_S,I:R,H:k,N:I,U:L,B:H,F:z},j=lit_html_t.litHtmlPolyfillSupport;j?.(N,R),(lit_html_t.litHtmlVersions??=[]).push("3.2.1");const B=(e,t,n)=>{const o=n?.renderBefore??t;let i=o._$litPart$;if(void 0===i){const e=n?.renderBefore??null;o._$litPart$=i=new R(t.insertBefore(lit_html_l(),e),e,void 0,n??{})}return i._$AI(e),i};class lit_element_r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=B(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const lit_element_i=globalThis.litElementPolyfillSupport;lit_element_i?.({LitElement:lit_element_r});const lit_element_o={_$AK:(e,t,n)=>{e._$AK(t,n)},_$AL:e=>e._$AL};function getButtonList(){return[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}]}function renderButtonEditor(e){let t={};"slider"===e._config.button_type&&(t={filter:[{domain:["light","media_player","cover","input_number","number","climate","fan"]},{domain:"sensor",device_class:"battery"}]});let n=e._config.button_action||"",o=e._config?.button_type||"switch";return x`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            ${e.makeDropdown("Button type","button_type",getButtonList())}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"slider"!==o?"Entity (toggle)":"Entity (See text below for supported entities)",selector:{entity:t}}]}   
                .computeLabel=${e._computeLabelCallback}
                .disabled="${"name"===e._config.button_type}"
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:cog"></ha-icon>
                Card settings
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
            <ha-expansion-panel outlined style="display: ${"slider"!==e._config.button_type?"none":""}">
                <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Slider settings
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e.hass}
                        .data=${e._config}
                        .schema=${[{type:"grid",flatten:!0,schema:[{name:"min_value",label:"Min value",selector:{number:{step:"any"}}},{name:"max_value",label:"Max value",selector:{number:{step:"any"}}},{name:"step",label:"Step",selector:{number:{step:"any"}}}]}]}   
                        .computeLabel=${e._computeLabelCallback}
                        .disabled="${"name"===e._config.button_type}"
                        @value-changed=${e._valueChanged}
                    ></ha-form>
                    <ha-formfield>
                        <ha-switch
                            .checked=${e._config.tap_to_slide}
                            .configValue="${"tap_to_slide"}"
                            @change="${e._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Tap to slide (previous behavior)</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            .checked=${e._config.read_only_slider}
                            .configValue="${"read_only_slider"}"
                            @change="${e._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Read only slider</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield>
                        <ha-switch
                            .checked=${e._config.slider_live_update}
                            .configValue="${"slider_live_update"}"
                            @change="${e._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Slider live update</label> 
                        </div>
                    </ha-formfield>
                    <ha-alert alert-type="info">By default, sliders are updated only on release. You can toggle this option to enable live updates while sliding.</ha-alert>
                    ${e._config.entity?.startsWith("light")?x`
                        <hr>
                        <ha-formfield>
                            <ha-switch
                                .checked=${e._config.light_transition}
                                .configValue="${"light_transition"}"
                                @change=${e._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Enable smooth brightness transitions</label> 
                            </div>
                        </ha-formfield>
                        ${e._config.light_transition?x`
                            <ha-alert alert-type="info">
                                <b>Important:</b> This feature only works for lights that support the 
                                <a target="_blank" rel="noopener noreferrer" href="https://www.home-assistant.io/integrations/light/#action-lightturn_on">light.turn_on</a> transition attribute. 
                                Enabling this for lights that do not support transitions will unfortunatley have no effect. Defaults to 500ms unless overridden below.
                            </ha-alert>
                            
                            <ha-textfield
                                label="Transition time (ms)"
                                type="number"
                                min="1"
                                max="2000"
                                .value="${e._config.light_transition_time}"
                                .configValue="${"light_transition_time"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                        `:""}
                    `:""}
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
            <ha-expansion-panel outlined style="display: ${"slider"===e._config.button_type&&e._config.tap_to_slide?"none":""}">
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",n,"name"!==e._config.button_type?"state"===e._config.button_type||"slider"===e._config.button_type&&(0,utils.md)(e,"sensor",e._config.entity)?"more-info":"toggle":"none","button_action")}
                    ${e.makeActionPanel("Double tap action",n,"name"!==e._config.button_type?"state"===e._config.button_type?"more-info":"slider"===e._config.button_type?"none":"toggle":"none","button_action")}
                    ${"slider"!==e._config.button_type?e.makeActionPanel("Hold action",n,"name"!==e._config.button_type?"slider"===e._config.button_type?"none":"more-info":"none","button_action"):""}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:palette"></ha-icon>
                Styling options
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <ha-alert alert-type="info">This card allows you to control your entities. 
                ${"slider"===e._config.button_type?x`Supported entities: Light (brightness), media player (volume), cover (position), fan (percentage), climate (temperature), battery sensor (percentage), input number and number (value). <b>You can also use any entity with a numeric state by defining it in YAML mode, then define the min and max values.</b>`:""}
            </ha-alert>
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
                        <ha-expansion-panel outlined style="display: ${"slider"!==e._config.button_type?"none":""}">
                            <h4 slot="header">
                            <ha-icon icon="mdi:tune-variant"></ha-icon>
                            Slider settings
                            </h4>
                            <div class="content">
                                <ha-form
                                    .hass=${e.hass}
                                    .data=${e._config}
                                    .schema=${[{type:"grid",flatten:!0,schema:[{name:"min_value",label:"Min value",selector:{number:{}}},{name:"max_value",label:"Max value",selector:{number:{}}}]}]}   
                                    .computeLabel=${e._computeLabelCallback}
                                    .disabled="${"name"===e._config.button_type}"
                                    @value-changed=${e._valueChanged}
                                ></ha-form>
                                <ha-formfield>
                                    <ha-switch
                                        .checked=${e._config.tap_to_slide}
                                        .configValue="${"tap_to_slide"}"
                                        @change="${e._valueChanged}"
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Tap to slide (previous behavior)</label> 
                                    </div>
                                </ha-formfield>
                                <ha-formfield>
                                    <ha-switch
                                        .checked=${e._config.read_only_slider}
                                        .configValue="${"read_only_slider"}"
                                        @change="${e._valueChanged}"
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Read only slider</label> 
                                    </div>
                                </ha-formfield>
                                <ha-formfield>
                                    <ha-switch
                                        .checked=${e._config.slider_live_update}
                                        .configValue="${"slider_live_update"}"
                                        @change="${e._valueChanged}"
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">Slider live update</label> 
                                    </div>
                                </ha-formfield>
                                <ha-alert alert-type="info">By default, sliders are updated only on release. You can toggle this option to enable live updates while sliding.</ha-alert>
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
                    <ha-formfield>
                        <ha-switch
                            .checked=${e._config.trigger_close??!0}
                            .configValue="${"trigger_close"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close pop-up when conditions are not met</label> 
                        </div>
                    </ha-formfield>
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
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
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
        ${e.makeSubButtonPanel()}
        <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:palette"></ha-icon>
              Styling options
            </h4>
            <div class="content">
                ${e.makeLayoutOptions()}
                ${e.makeStyleEditor()}
            </div>
        </ha-expansion-panel>
        ${e.makeModulesEditor()}
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
                    ${e.makeModulesEditor()}
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
                        <div class="button-container">
                            <button class="icon-button header" @click="${()=>removeButton(e,n)}">
                              <ha-icon icon="mdi:delete"></ha-icon>
                            </button>
                        </div>
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
        `);return t}function removeButton(e,t){delete e._config[t+"_name"],delete e._config[t+"_icon"],delete e._config[t+"_link"],delete e._config[t+"_entity"],delete e._config[t+"_pir_sensor"];for(let n=t;n<e.buttonIndex;n++)e._config[n+"_name"]=e._config[n+1+"_name"],e._config[n+"_icon"]=e._config[n+1+"_icon"],e._config[n+"_link"]=e._config[n+1+"_link"],e._config[n+"_entity"]=e._config[n+1+"_entity"],e._config[n+"_pir_sensor"]=e._config[n+1+"_pir_sensor"];delete e._config[e.buttonIndex+"_name"],delete e._config[e.buttonIndex+"_icon"],delete e._config[e.buttonIndex+"_link"],delete e._config[e.buttonIndex+"_entity"],delete e._config[e.buttonIndex+"_pir_sensor"],e.buttonIndex--,(0,utils.rC)(e,"config-changed",{config:e._config})}function renderCoverEditor(e){let t=e._config.button_action||"";return x`
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
                  Card settings
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
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",t,"more-info","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"toggle","button_action")}
                    ${e.makeActionPanel("Hold action",t,"toggle","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
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
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <ha-alert alert-type="info">This card allows you to control your covers.</ha-alert>
            ${e.makeVersion()}
        </div>
    `}function renderClimateEditor(e){let t=e._config.button_action||"";if("climate"===e._config.card_type&&!e.climateSubButtonsAdded&&e._config.entity){const t=e.hass.states[e._config.entity]?.attributes?.hvac_modes;e._config.sub_button&&0!==e._config.sub_button.length||(e._config.sub_button=[t?{name:"HVAC modes menu",select_attribute:"hvac_modes",state_background:!1,show_arrow:!1}:null].filter(Boolean)),e.climateSubButtonsAdded=!0}return x`
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
                  Card settings
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
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Climate settings
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e.hass}
                        .data=${e._config}
                        .schema=${[{type:"grid",flatten:!0,schema:[{name:"min_temp",label:"Min temperature",selector:{number:{step:"any"}}},{name:"max_temp",label:"Max temperature",selector:{number:{step:"any"}}},{name:"step",label:"Step",selector:{number:{step:"any"}}}]}]}   
                        .computeLabel=${e._computeLabelCallback}
                        .disabled="${"name"===e._config.button_type}"
                        @value-changed=${e._valueChanged}
                    ></ha-form>
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
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",t,"more-info","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"toggle","button_action")}
                    ${e.makeActionPanel("Hold action",t,"toggle","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <ha-alert alert-type="info">This card allows you to control your climate entities. You can also add a sub-button that display a select menu for your climate modes (check if you have "Select menu" available when you create a new sub-button).</ha-alert>
            ${e.makeVersion()}
        </div>
    `}function renderSelectEditor(e){const t=e._config.entity,n=(t?.startsWith("input_select")||t?.startsWith("select")||e._config.select_attribute,e.hass.states[t]?.attributes),o=e._selectable_attributes.some((e=>n?.[e])),i=Object.keys(e.hass.states[t]?.attributes||{}).map((n=>{let o=e.hass.states[t];return{label:e.hass.formatEntityAttributeName(o,n),value:n}})).filter((t=>e._selectable_attributes.includes(t.value)));return x`
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
                        .items="${i}"
                        .configValue="${"select_attribute"}"
                        @value-changed="${e._valueChanged}"
                    ></ha-combo-box>
                </div>
            `:""}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Card settings
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
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
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
    `}function renderMediaPlayerEditor(e){let t=e._config.button_action||"";return x`
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
                  Card settings
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
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Media player settings
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e.hass}
                        .data=${e._config}
                        .schema=${[{type:"grid",flatten:!0,schema:[{name:"min_volume",label:"Min volume",selector:{number:{step:"any"}}},{name:"max_volume",label:"Max volume",selector:{number:{step:"any"}}}]}]}   
                        .computeLabel=${e._computeLabelCallback}
                        @value-changed=${e._valueChanged}
                    ></ha-form>
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
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",t,"more-info","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"toggle","button_action")}
                    ${e.makeActionPanel("Hold action",t,"toggle","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
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
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
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
    `}(globalThis.litElementVersions??=[]).push("4.1.1");const editor_styles_namespaceObject='div {\n  display: grid;\n  grid-gap: 12px;\n}\n\nha-combo-box[label="Card type"]::after {\n  content: "";\n  position: relative;\n  background-color: var(--background-color, var(--secondary-background-color));\n  display: block;\n  width: 100%;\n  height: 1px;\n  top: 12px;\n  margin-bottom: 12px !important;\n  opacity: 0.6;\n}\n\n#add-button {\n  margin: 0 0 14px 0;\n  color: var(--text-primary-color);\n  width: 100%;\n  height: 32px;\n  border-radius: 16px;\n  border: none;\n  background-color: var(--accent-color);\n  cursor: pointer;\n}\n\np {\n  margin-bottom: 4px;\n}\n\nha-icon, a, p, button, h4 {\n  color: var(--primary-text-color) !important;\n}\n\nhr {\n  display: inline-block;\n  width: 100%;\n  height: 1px;\n  border: none;\n  background-color: var(--outline-color);\n  margin: 8px 0 0 0;\n}\n\ncode, code-block {\n  background: rgba(0,120,180,0.3);\n  color: var(--primary-text-color);\n  background-blend-mode: darken;\n  padding: 1px 3px;\n  border-radius: 6px;\n  font-size: 13px;\n}\n\ncode-block {\n  display: grid;\n  width: 100%;\n  padding: 0;\n  max-height: 285px;\n  overflow: auto;\n}\n\ncode-block pre {\n  white-space: pre;\n  overflow: auto;\n  margin: 8px;\n}\n\ncode-block.with-i pre {\n  white-space: pre-line;\n  overflow: auto;\n  margin: 8px;\n}\n\ncode-block.with-i pre > i {\n  white-space: pre;\n  font-style: normal;\n}\n\nimg {\n  max-width: 100%;\n  margin: 14px 0;\n}\n\nimg.example {\n  padding: 32px;\n  box-sizing: border-box;\n  background: rgba(0, 120, 180, 0.8);\n  border-radius: 6px;\n}\n\n.button-header {\n  height: auto;\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  margin: 0 8px;\n}\n\n.button-number {\n  display: inline-flex;\n  width: auto;\n}\n\n.remove-button {\n  display: inline-flex;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  text-align: center;\n  line-height: 24px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.content {\n  margin: 12px 4px 14px 4px;\n}\n\nh4 > ha-icon {\n  margin: 8px 12px 8px 8px;\n}\n\nha-expansion-panel h4:not(.version) {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\nha-form {\n  --expansion-panel-summary-padding: 2px 14px;\n}\n\nha-textfield {\n  width: 100%;\n}\n\nh3 {\n  margin: 4px 0;\n}\n\n.code-editor {\n  overflow: scroll;\n}\n\n.icon-button {\n  background: rgba(0,120,180,0.5);\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  margin: 0;\n  border-radius: 32px;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n}\n\n.icon-button.header {\n  background: none;\n  padding: 0;\n  margin: 0 4px;\n}\n\n.button-container {\n    display: flex;\n    margin-left: auto !important;\n}\n\nha-card-conditions-editor {\n  margin-top: -12px;\n}\n\n.disabled {\n  opacity: 0.5; \n  pointer-events: none;\n}\n\n.version {\n  font-size: 12px !important;\n  color: #fff;\n  background: rgba(0,0,0,0.1);\n  padding: 8px 16px;\n  border-radius: 32px;\n}\n\n.module-version {\n  margin: 0;\n}\n\n.version-number {\n  font-size: 10px;\n  background: rgba(0,120,180,1);\n  padding: 0px 8px;\n  border-radius: 12px;\n  margin-right: -6px;\n  float: right;\n  color: white;\n}\n\n.version-number a {\n  color: white !important;\n}';class BubbleCardEditor extends lit_element_r{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config?.card_type||""}get _button_type(){return this._config?.button_type||("pop-up"===this._config?.card_type?"":"switch")}get _entity(){return this._config?.entity||""}get _selectable_attributes(){return["source_list","sound_mode_list","hvac_modes","fan_modes","swing_modes","preset_modes","effect_list"]}render(){if(!this.hass)return x``;const e=document.querySelector("body > home-assistant"),t=e?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot?.querySelector("ha-dialog > div.content > div.element-preview");if(t?.style&&"sticky"!==t.style.position&&(t.style.position="sticky",t.style.top="0"),!this.listsUpdated){const e=e=>({label:e,value:e});this.inputSelectList={states:{},locale:this.hass.locale,localize:this.hass.localize,entities:this.hass.entities},Object.keys(this.hass.states).filter((e=>{const t=this.hass.states[e],n=e.substr(0,e.indexOf(".")),o="input_select"===n||"select"===n,i=this._selectable_attributes.some((e=>t.attributes?.[e]));return o||i})).map(e).forEach((e=>{const t=e.label||e,n=this.hass.states[t];n&&(this.inputSelectList.states[t]=n)})),this.attributeList=Object.keys(this.hass.states[this._entity]?.attributes||{}).map((e=>{let t=this.hass.states[this._entity];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})),this.cardTypeList=[{label:"Button (Switch, slider, ...)",value:"button"},{label:"Cover",value:"cover"},{label:"Climate",value:"climate"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Media player",value:"media-player"},{label:"Pop-up",value:"pop-up"},{label:"Select",value:"select"},{label:"Separator",value:"separator"}],this.listsUpdated=!0}const n=this.cardTypeList;switch(this.buttonTypeList,this._config?.card_type){case"pop-up":return renderPopUpEditor(this);case"button":return renderButtonEditor(this);case"separator":return renderSeparatorEditor(this);case"horizontal-buttons-stack":return renderHorButtonStackEditor(this);case"cover":return renderCoverEditor(this);case"media-player":return renderMediaPlayerEditor(this);case"empty-column":return renderEmptyColumnEditor(this);case"select":return renderSelectEditor(this);case"climate":return renderClimateEditor(this);case void 0:return x`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",n)}
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
                `}}makeLayoutOptions(){const e=window.isSectionView?"large":"normal";return x`
            <ha-combo-box
                label="${"pop-up"===this._config.card_type?"Header card layout":"Card layout"}"
                .value="${this._config.card_layout||e}"
                .configValue="${"card_layout"}"
                .items="${[{label:"Normal (previous default)",value:"normal"},{label:"Large",value:"large"},{label:"Large with 2 sub-buttons rows",value:"large-2-rows"},{label:"Large with sub-buttons in a grid (Layout: min. 2 rows)",value:"large-sub-buttons-grid"}]}"
                @value-changed="${this._valueChanged}"
            ></ha-combo-box>
        `}makeShowState(e=this._config,t="",n=!1,o){const i=e?.entity??this._config.entity??"",a="name"===this._config.button_type,r=i?.startsWith("input_select")||i?.startsWith("select")||e.select_attribute,s=Object.keys(this.hass.states[i]?.attributes||{}).map((e=>{let t=this.hass.states[i];return{label:this.hass.formatEntityAttributeName(t,e),value:e}}));return x`
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
            ${"sub_button"===n&&(e?.state_background??1)&&i.startsWith("light")?x`
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
            ${"sub_button"!==n&&i.startsWith("light")?x`
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
            <ha-formfield .label="Optional - Show last updated">
                <ha-switch
                    aria-label="Optional - Show last updated"
                    .checked=${e?.show_last_updated}
                    .configValue="${t+"show_last_updated"}"
                    .disabled="${a&&"sub_button"!==n}"
                    @change="${n?e=>this._arrayValueChange(o,{show_last_updated:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Optional - Show last updated</label> 
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
            ${e?.show_attribute?x`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="Optional - Attribute to show"
                        .value="${e?.attribute}"
                        .configValue="${t+"attribute"}"
                        .items="${s}"
                        .disabled="${a}"
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
        `}makeDropdown(e,t,n,o){return e.includes("icon")||e.includes("Icon")?x`
                <div class="ha-icon-picker">
                    <ha-icon-picker
                        label="${e}"
                        .value="${this._config[t]}"
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
          `}makeActionPanel(e,t=this._config,n,o,i=this._config){const a="Tap action"===e?"mdi:gesture-tap":"Double tap action"===e?"mdi:gesture-double-tap":"Hold action"===e?"mdi:gesture-tap-hold":"mdi:gesture-tap",r="Tap action"===e?"tap_action":"Double tap action"===e?"double_tap_action":"Hold action"===e?"hold_action":"Open action"===e?"open_action":"close_action";let s;try{s="Tap action"===e?t.tap_action:"Double tap action"===e?t.double_tap_action:"Hold action"===e?t.hold_action:"Open action"===e?t.open_action:t.close_action}catch{}const l=t===this._config;return n||(n=l&&"Tap action"===e?"name"!==this._config.button_type?"more-info":"none":l?"name"!==this._config.button_type?"toggle":"none":""),x`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="${a}"></ha-icon>
                    ${e}
                </h4>
                <div class="content"> 
                    <ha-form
                        .hass=${this.hass}
                        .data=${t}
                        .configValue="${(o?o+".":"")+(parseInt(i)==i?i+".":"")+r}" 
                        .schema=${[{name:r,label:e,selector:{ui_action:{default_action:n}}}]}  
                        .computeLabel=${this._computeLabelCallback}
                        @value-changed=${e=>this._ActionChanged(e,o,i)}
                    ></ha-form>
                </div>
                ${"call-service"===s?.action||"perform-action"===s?.action?x`
                    <ha-formfield .label="Optional - Use default entity">
                        <ha-switch
                            aria-label="Optional - Use default entity"
                            .configValue="${(o?o+".":"")+(parseInt(i)==i?i+".":"")+r+".default_entity"}" 
                            .checked=${"entity"===s?.target?.entity_id}
                             @change=${this._updateActionsEntity}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Use default entity</label> 
                        </div>
                    </ha-formfield>
                `:""}
            </ha-expansion-panel>
        `}makeSubButtonPanel(){const e=this._config?.sub_button?.map(((e,t)=>{if(!e)return;const n="sub_button."+t+".",o=e.entity??this._config.entity,i=o?.startsWith("input_select")||o?.startsWith("select")||e.select_attribute,a=this.hass.states[o]?.attributes,r=this._selectable_attributes.some((e=>a?.[e])),s=Object.keys(this.hass.states[o]?.attributes||{}).map((e=>{let t=this.hass.states[o];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})).filter((e=>this._selectable_attributes.includes(e.value))),l=e.visibility??[];return x`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:border-radius"></ha-icon>
                    ${this._config.sub_button[t]?"Button "+(t+1)+(e.name?" - "+e.name:""):"New button"}
                    <div class="button-container">
                        <button class="icon-button header" @click="${n=>{n.stopPropagation();let o=[...this._config.sub_button];o.splice(t,1),this._config.sub_button=o,this._valueChanged({target:{configValue:"sub_button."+(t-1),value:e}}),this.requestUpdate()}}">
                          <ha-icon icon="mdi:delete"></ha-icon>
                        </button>
                        ${t>0?x`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t>0){let e=[...this._config.sub_button];[e[t],e[t-1]]=[e[t-1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
                          <ha-icon icon="mdi:arrow-left"></ha-icon>
                        </button>`:""}
                        ${t<this._config.sub_button.length-1?x`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t<this._config.sub_button.length-1){let e=[...this._config.sub_button];[e[t],e[t+1]]=[e[t+1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
                          <ha-icon icon="mdi:arrow-right"></ha-icon>
                        </button>`:""}
                    </div>
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
                                        .items="${s}"
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
                <span class="version-number">
                    ${version}
                </span>
            </h4>
        `}makeStyleEditor(){return x`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:code-braces"></ha-icon>
                    Custom styles and JS templates
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
                      For advanced users, you can edit the CSS style of this card in this editor. More information <a href="https://github.com/Clooos/Bubble-Card#styling">here</a>. You don't need to add <code>styles: |</code>, it will be added automatically. You can also add <a href="https://github.com/Clooos/Bubble-Card#templates">JS templates</a> (Jinja is not supported).
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
        `}_getProcessedSchema(e,t,n){if(this._processedSchemas&&this._processedSchemas[e])return this._processedSchemas[e];const o=structuredClone(t),i=this._updateAttributeSelectors(o,n,e);return this._processedSchemas={...this._processedSchemas,[e]:i},i}_valueChangedInHaForm(e,t,n){let o=e.detail.value;const i=e=>!e||(Array.isArray(e)&&e[0]?.condition?e.every((e=>this._isConditionComplete(e))):e.condition&&Array.isArray(e.condition)?e.condition.every((e=>this._isConditionComplete(e))):"object"!=typeof e||Object.values(e).every((e=>i(e))));if(o&&"object"==typeof o&&!Array.isArray(o)){const e=Object.keys(o);e.length>0&&e.every((e=>!isNaN(parseInt(e,10))))&&(o=e.sort(((e,t)=>parseInt(e,10)-parseInt(t,10))).map((e=>o[e])))}o=this._cleanEmpty(o,t);const a=structuredClone(n),r=this._updateAttributeSelectors(a,o,t);this._processedSchemas={...this._processedSchemas,[t]:r},i(o)&&(0,utils.rC)(this,"config-changed",{config:{...this._config,[t]:o}})}_isConditionComplete(e){return!(!e||!e.condition)&&("state"===e.condition&&e.entity_id&&(""!==e.state||e.attribute&&""!==e.state)||"state"!==e.condition&&""!==e.condition&&void 0!==e.condition)}_cleanEmpty(e,t){if(Array.isArray(e))return e.map((e=>this._cleanEmpty(e,void 0))).filter((e=>!this._isEmpty(e)));if(e&&"object"==typeof e){const t={};return Object.keys(e).forEach((n=>{const o=this._cleanEmpty(e[n],n);this._isEmpty(o)||(t[n]=o)})),Object.keys(t).length>0?t:void 0}return"string"!=typeof e||""!==e||"state"===t?e:void 0}_isEmpty(e){return null==e||(Array.isArray(e)?0===e.length:"object"==typeof e&&0===Object.keys(e).length)}_updateAttributeSelectors=(e,t,n=void 0)=>e.map((e=>{e.selector&&e.selector.entity&&(n=t&&t.entity?t.entity:void 0),e.selector&&e.selector.attribute&&(e.selector.attribute.entity_id=n);const o=t&&t[e.name]?t[e.name]:t;return Array.isArray(e.schema)&&(e.schema=this._updateAttributeSelectors(e.schema,o,n)),e}));makeModulesEditor(){this._config.modules||(this._config.modules=this._config.style_templates||["default"],delete this._config.style_templates,(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate());const e=e=>{const t=e.target,n=t.configValue;t.checked?this._config.modules.includes(n)||(this._config.modules=[...this._config.modules,n]):this._config.modules=this._config.modules.filter((e=>e!==n)),(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()};return this._config.modules||this._config.style_templates,x`
        <ha-expansion-panel outlined>
          <h4 slot="header">
            <ha-icon icon="mdi:puzzle"></ha-icon>
            Modules
          </h4>
          <div class="content">
            ${Array.from(yamlKeysMap.keys()).map((t=>{const{name:n,description:o,formSchema:i,unsupportedCard:a,creator:r,moduleLink:s,moduleVersion:l}=(e=>{const t=yamlKeysMap.get(e)||{};let n=t.name||e,o=t.description||"",i=t.editor||[],a=t.unsupported||[],r=t.creator||"",s=t.link||"",l=t.version||"";return Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]),{name:n,description:o,formSchema:i,unsupportedCard:a,moduleVersion:l,creator:r,moduleLink:s}})(t),c=this._config.modules.includes(t),d=a.includes(this._config.card_type??""),u=this._config[t],p=i&&i.length>0?this._getProcessedSchema(t,i,u):[];return x`
                <ha-expansion-panel outlined class="${d?"disabled":""}">
                  <h4 slot="header">
                    <ha-icon
                      icon="${c?"mdi:puzzle-check":"mdi:puzzle-outline"}"
                      style="opacity: ${c?"1":"0.3"}"
                    ></ha-icon>
                    ${n}
                  </h4>
                  <div class="content">
                    <ha-formfield .label=${"Apply to this card"}>
                      <ha-switch
                        aria-label="Apply to this card"
                        .checked=${c}
                        .configValue=${t}
                        @change=${e}
                      ></ha-switch>
                    </ha-formfield>
                    <hr>

                    <!-- Form init to fix conditional selectors -->
                    <ha-form
                      style="display: none"
                      .hass=${this.hass}
                      .schema=${[{selector:{entity:{domain:["input_number"]}}}]}
                    ></ha-form>

                    ${i.length>0?x`
                        <h4 class="${c?"":"disabled"}">
                          <ha-icon icon="mdi:cog"></ha-icon>
                          Configuration
                        </h4>
                        <ha-form 
                          class="${c?"":"disabled"}"
                          .hass=${this.hass}
                          .data=${u}
                          .schema=${p}
                          .computeLabel=${this._computeLabelCallback}
                          .disabled=${!c}
                          @value-changed=${e=>this._valueChangedInHaForm(e,t,i)}
                        ></ha-form>
                        <hr>
                      `:""}

                    <ha-alert alert-type="info" style="display: ${o?"":"none"}">
                      ${x`<span .innerHTML=${o}></span>`}
                    </ha-alert>

                    ${r||s||l?x`
                        <h4 class="version module-version">
                          ${r?`Created by ${r}`:""}
                          <span class="version-number">
                            ${s?x`<a href="${s}">Module link</a> • `:""}
                            ${l||""}
                          </span>
                        </h4>
                        `:""}
                  </div>
                </ha-expansion-panel>
              `}))}
            ${this.createErrorConsole()}
            <a class="icon-button" href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules">
              <ha-icon icon="mdi:open-in-new"></ha-icon>
              Community Modules
            </a>

            <ha-alert alert-type="warning" style="display: ${window.bubbleYamlWarning?"":"none"}">
              <b>If you want to edit or add modules here</b>, first copy
              <code>bubble-modules.yaml</code> from <code>/www/community/Bubble-Card/</code> (if installed via HACS) to
              <code>/www/bubble/</code> (you'll need to create this folder). 
              <br><br>Then add these lines in your <code>configuration.yaml</code> under <code>homeassistant:</code>:
              <br><br><code-block class="with-i"><pre>
                <i>homeassistant:</i>
                <i>  allowlist_external_dirs:</i>
                <i>    - /config/www/bubble</pre></code-block></i>
              <br>Now save and restart Home Assistant, then <b>check if this warning is gone</b>. Make sure to refresh your page after each modification.
            </ha-alert>

            <ha-alert alert-type="info">
              Modules are the best way to apply <a href="https://github.com/Clooos/Bubble-Card#styling">custom styles</a> and/or <a href="https://github.com/Clooos/Bubble-Card#templates">custom templates</a> to your cards, as they are managed in a single external YAML file. 
              This makes it easy to change things like the styles of all your cards, and for advanced users, to add or modify features. <br><br>The best approach when starting is to first test your changes in the "Custom styles & templates" editor under "Styling options" for a live preview, and once it's working, try to add it as a module. 
              It's a good idea to check out <code>bubble-module.yaml</code> to see the possibilities.
            </ha-alert>
          </div>
        </ha-expansion-panel>
      `}_valueChanged(e){const t=e.target,n=e.detail;let o;if("HA-SWITCH"===t.tagName?o=t.checked:void 0!==t.value&&(o="string"==typeof t.value?t.value.replace(",","."):t.value),"string"==typeof o&&(o.endsWith(".")||"-"===o))return;const{configValue:i,checked:a}=t;if(i){const a=i.split(".");let r=this._config;for(let e=0;e<a.length-1;e++)r[a[e]]=r[a[e]]||{},r=r[a[e]];"input"===e.type?r[a[a.length-1]]=o:n&&r[a[a.length-1]]!==n.value?r[a[a.length-1]]=n.value:"HA-SWITCH"===t.tagName&&(r[a[a.length-1]]=o)}else this._config=n.value;(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}_arrayValueChange(e,t,n){if(this._config.sub_button&&!this.subButtonJustAdded)return this.subButtonJustAdded=!0,void setTimeout((()=>this._arrayValueChange(e,t,n)),10);this._config[n]=this._config[n]||[];let o=[...this._config[n]];o[e]=o[e]||{},o[e]={...o[e],...t},this._config[n]=o,(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}_ActionChanged(e,t,n){var o=!1;try{"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id[0]&&(o=!0)}catch{}try{"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id&&(o=!0)}catch{}if(o&&(e.detail.value[e.currentTarget.__schema[0].name].action="call-service",null!=e.detail.value[e.currentTarget.__schema[0].name].perform_action&&(e.detail.value[e.currentTarget.__schema[0].name].service=""+e.detail.value[e.currentTarget.__schema[0].name].perform_action,delete e.detail.value[e.currentTarget.__schema[0].name].perform_action)),"button_action"===t){var i=!!this._config[t],a=null!=e.detail.value[e.currentTarget.__schema[0].name];(i||a)&&(this._config[t]=e.detail.value)}else if(t){this._config[t]=this._config[t]||[];let o=[...this._config[t]];o[n]=e.detail.value,this._config[t]=o}else this._config=e.detail.value;(0,utils.rC)(this,"config-changed",{config:this._config})}_updateActionsEntity(e){let t=JSON.parse(JSON.stringify(this._config));const n=e.target.configValue.split(".");let o=0;for(o=0;o<n.length-2;o++)t=t[n[o]]?t[n[o]]:{};e.target.checked?t[n[o]].target={entity_id:"entity"}:"entity"===t[n[o]].target?.entity_id&&(t[n[o]].target={});var i={value:t},a={__schema:[{name:n[n.length-2]}]},r={...e,detail:i,currentTarget:a};this._ActionChanged(r,n.length>2?n[0]:null,n.length>3?n[1]:null)}_computeLabelCallback=e=>e.label;_conditionChanged(e,t,n){if(e.stopPropagation(),n){this._config[n]=this._config[n]||[];let o=[...this._config[n]];o[t]=o[t]||{};const i=e.detail.value;o[t]={...o[t],visibility:i},this._config[n]=o}else if("pop-up"===this._config.card_type){const t=e.detail.value;this._config={...this._config,trigger:t}}(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return css_tag_i`
            ${r(editor_styles_namespaceObject)}
          `}}customElements.define("bubble-card-editor",BubbleCardEditor);class BubbleCard extends HTMLElement{editor=!1;isConnected=!1;connectedCallback(){this.isConnected=!0,preloadYAMLStyles(this),this._hass&&this.updateBubbleCard()}disconnectedCallback(){this.isConnected=!1,cleanupTapActions(),"pop-up"===this.config.card_type&&updateListeners(this,!1)}get detectedEditor(){if(this.editor)return"hui-dialog-edit-card"===window.history?.state?.dialog}set editMode(e){this.editor!==e&&(this.editor=e,"pop-up"===this.config.card_type&&this.updateBubbleCard())}set hass(e){initializeContent(this),this._hass=e;const t="pop-up"===this.config.card_type;(!this.editor&&(this.isConnected||t)||this.detectedEditor)&&this.updateBubbleCard()}updateBubbleCard(){switch(this.config.card_type){case"pop-up":handlePopUp(this);break;case"button":handleButton(this);break;case"separator":handleSeparator(this);break;case"cover":handleCover(this);break;case"empty-column":handleEmptyColumn(this);break;case"horizontal-buttons-stack":handleHorizontalButtonsStack(this);break;case"media-player":handleMediaPlayer(this);break;case"select":handleSelect(this);break;case"climate":handleClimate(this)}}setConfig(e){if(e.error)throw new Error(e.error);if("pop-up"===e.card_type){if(!e.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.")}else if("horizontal-buttons-stack"===e.card_type){var t={};for(var n in e)if(n.match(/^\d+_icon$/)){var o=n.replace("_icon","_link");if(void 0===e[o])throw new Error("You need to define "+o);if(t[e[o]])throw new Error("You can't use "+e[o]+" twice");t[e[o]]=!0}}else if(["button","cover","climate","select","media-player"].includes(e.card_type)&&!e.entity&&"name"!==e.button_type)throw new Error("You need to define an entity");if("select"===e.card_type&&e.entity&&!e.select_attribute&&!e.entity?.startsWith("input_select")&&!e.entity?.startsWith("select"))throw new Error('"Select menu (from attributes)" missing');if(window.entityError)throw new Error("You need to define a valid entity");if("button"===e.card_type){const t={...e},n=t.button_type||"switch";t.tap_action=t.tap_action??{action:"more-info"},t.double_tap_action=t.double_tap_action??{action:"state"===n?"more-info":"toggle"},t.hold_action=t.hold_action??{action:"state"===n?"more-info":"toggle"},this.config=t}else this.config=e}getCardSize(){switch(this.config.card_type){case"pop-up":return-1e5;case"button":case"separator":case"empty-column":case"media-player":case"select":case"climate":return 1;case"cover":return 2;case"horizontal-buttons-stack":return 0}}getGridOptions(){const e=this.config.columns;let t={columns:e?3*e:12,rows:this.config.rows??1};switch(this.config.card_type){case"horizontal-buttons-stack":t={rows:1.3};break;case"separator":t={rows:.8}}return t}static getConfigElement(){return document.createElement("bubble-card-editor")}getLayoutOptions(){let e=1;"pop-up"===this.config.card_type?e=0:"horizontal-buttons-stack"===this.config.card_type?e=1:["cover"].includes(this.config.card_type)&&(e=2);let t=4;return"pop-up"===this.config.card_type?t=0:"horizontal-buttons-stack"===this.config.card_type&&(t=4),{grid_columns:this.config.columns??t,grid_rows:this.config.rows??e}}}customElements.define("bubble-card",BubbleCard),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch.",documentationURL:"https://github.com/Clooos/Bubble-Card/"}),console.info(`%c Bubble Card %c ${version} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})();
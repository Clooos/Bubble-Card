(()=>{"use strict";let e,n="v2.0.0-beta.1";function t(e){let n=[220,220,190];for(let t=0;t<3;t++)if(e[t]<n[t])return!1;return!0}function i(n,t,i=1){if(n.startsWith("#"))if(4===n.length){let o=Math.min(255,parseInt(n.charAt(1).repeat(2),16)*i),a=Math.min(255,parseInt(n.charAt(2).repeat(2),16)*i),l=Math.min(255,parseInt(n.charAt(3).repeat(2),16)*i);e="rgba("+o+", "+a+", "+l+", "+t+")"}else{let o=Math.min(255,parseInt(n.slice(1,3),16)*i),a=Math.min(255,parseInt(n.slice(3,5),16)*i),l=Math.min(255,parseInt(n.slice(5,7),16)*i);e="rgba("+o+", "+a+", "+l+", "+t+")"}else if(n.startsWith("rgb")){let o=n.match(/\d+/g);e="rgba("+Math.min(255,o[0]*i)+", "+Math.min(255,o[1]*i)+", "+Math.min(255,o[2]*i)+", "+t+")"}return e}const o=(e,n,t,i)=>{i=i||{},t=null==t?{}:t;const o=new Event(n,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=t,e.dispatchEvent(o),o},a=e=>{o(window,"haptic",e)};function l(e,n){e.callService("homeassistant","toggle",{entity_id:n})}function s(e,n=e.config.entity,t=e.config.icon){const i=u(e,"icon",n),o=t,a=n?.split(".")[0],l={light:"mdi:lightbulb",switch:"mdi:toggle-switch",sensor:"mdi:sensor",media_player:"mdi:speaker",climate:"mdi:thermostat",binary_sensor:"mdi:radiobox-blank",cover:"mdi:window-shutter",fan:"mdi:fan",lock:"mdi:lock",alarm_control_panel:"mdi:shield",camera:"mdi:camera",automation:"mdi:playlist-play",group:"mdi:google-circles-communities",input_boolean:"mdi:toggle-switch-off-outline",input_number:"mdi:numeric",input_text:"mdi:form-textbox",input_select:"mdi:format-list-bulleted",scene:"mdi:palette",script:"mdi:file-document-outline"};return o||i||(l[a]?l[a]:"")}function r(e){const n=e.config.entity,i="var(--accent-color)",o=u(e,"rgb_color");if(!n)return i;if(!1===n.startsWith("light."))return i;const a="rgba(255, 220, 200)",l=b(e)?a:"rgba(255, 255, 255)";return o?t(o)?a:`rgba(${o.join(", ")})`:l}function c(e){if(e.config.force_icon)return"";const n=u(e,"entity_picture_local"),t=u(e,"entity_picture");return n||t||""}function d(e){const n=e.config.name,t=u(e,"friendly_name");return n||t||""}function p(e,n=e.config.entity){return e._hass.states[n]?.state??""}function u(e,n,t=e.config.entity){return e._hass.states[t]?.attributes[n]??""}function h(e,n){return e.config.entity?.startsWith(n+".")??!1}function b(e,n=e.config.entity){const t=p(e,n),i=Number(t);return!!(["on","open","opening","closing","cleaning","true","idle","home","playing","locked","occupied","available","running","active","connected"].includes(t)||i>0)}function m(e,n=""){const t=document.createElement(e);return""!==n&&n.split(" ").forEach((e=>{t.classList.add(e)})),t}function g(e,n){if(e.previousText===n)return;const t=e.className.split(" ").find((e=>e.startsWith("bubble-")));e.innerHTML=n,e.style="",requestAnimationFrame((()=>{if(e.scrollWidth>e.parentNode.offsetWidth){const i='<span class="bubble-scroll-separator">|</span>';e.innerHTML=`<span>${n+i+n+i}</span>`;const o=function(e){return`\n            .${e} {\n                white-space: nowrap;\n                mask-image: linear-gradient(to right, transparent, black calc(0% + 8px), black calc(100% - 8px), transparent);\n                caca: 100px;\n            }\n            .${e} span {\n                display: inline-block;\n                animation: scroll 14s linear infinite;\n            }\n\n            .bubble-scroll-separator {\n                opacity: .3; \n                margin: 0 6px 0 8px;\n            }\n\n            @keyframes scroll {\n                from { transform: translateX(0%); }\n                to { transform: translateX(-50%); }\n            }\n        `}(t);e.styleElement=m("style"),e.styleElement.innerHTML=o,e.appendChild(e.styleElement)}})),e.previousText=n}function f(e,n){if(!e)return"";const t=new Date(e),i=new Date,o=Math.floor((i-t)/1e3);let a,l;return o<60?(a="second",l=o):o<3600?(a="minute",l=Math.floor(o/60)):o<86400?(a="hour",l=Math.floor(o/3600)):(a="day",l=Math.floor(o/86400)),new Intl.RelativeTimeFormat(n,{numeric:"auto"}).format(-l,a)}function _(e,n=300){let t;return(...i)=>{void 0===t&&(e(...i),t=setTimeout((()=>{t=void 0}),n))}}class y{constructor(e,n,t,i){this.element=e,this.config=n,this.sendActionEvent=t,this.defaultEntity=i,this.tapTimeout=null,this.lastTap=0,this.startTime=null}handleStart(e){e.stopPropagation(),e.stopImmediatePropagation(),this.startTime=Date.now(),clearTimeout(this.tapTimeout)}handleEnd(){if(null===this.startTime)return;const e=Date.now(),n=e-this.startTime,t=e-this.lastTap;this.lastTap=e,this.startTime=null,n>300?this.sendActionEvent(this.element,this.config,"hold"):t<300?this.sendActionEvent(this.element,this.config,"double_tap"):this.tapTimeout=setTimeout((()=>{this.sendActionEvent(this.element,this.config,"tap",this.defaultEntity)}),300)}}function v(e,n,t,i){const o=n.tap_action??{action:"more-info"},a=n.double_tap_action||{action:"toggle"},l=n.hold_action||{action:"toggle"};!function(e,n,t){setTimeout((()=>{const i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={config:n,action:t},e.dispatchEvent(i)}),1)}(e,{entity:n.entity??i,tap_action:o,double_tap_action:a,hold_action:l},t)}function x(e,n,t){const i=new y(e,n,v,t);e.addEventListener("pointerdown",i.handleStart.bind(i)),e.addEventListener("pointerup",i.handleEnd.bind(i)),e.addEventListener("contextmenu",(e=>e.preventDefault())),e.style.cursor="pointer"}function w(e,n){e.addEventListener("click",(()=>function(e){void 0!==e&&(a("success"),e.style.display="",e.style.animation="tap-feedback .5s",setTimeout((()=>{e.style.animation="none",e.style.display="none"}),500))}(n)))}let k=0;function C(e){void 0===e.composedPath().find((e=>e.classList&&e.classList.contains("bubble-pop-up")||"HA-MORE-INFO-DIALOG"===e.nodeName||"HA-DIALOG-DATE-PICKER"===e.nodeName))&&$()}function $(){const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))}function T(e){const n=window.location.href.split("#")[0]+e;history.pushState(null,"",n),window.dispatchEvent(new Event("location-changed"))}function S(e){e.popUp.classList.contains("is-popup-opened")||(e.popUp.classList.add("is-popup-opened"),window.clearTimeout(e.removeDomTimeout),e.popUp.parentNode!==e.verticalStack&&e.verticalStack.appendChild(e.popUp),k++,clearTimeout(e.closeTimeout),clearTimeout(e.hideContentTimeout),document.body.style.overflow="hidden",e.popUp.style.display="",e.popUp.addEventListener("touchstart",e.resetCloseTimeout),requestAnimationFrame((()=>{e.popUp.classList.remove("is-popup-closed"),window.addEventListener("click",C)})),e.config.auto_close>0&&(e.closeTimeout=setTimeout($,e.config.auto_close)))}const L="\n  .bubble-backdrop {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 0;\n    opacity: 0;\n    transition: opacity 0.3s;\n    display: flex;\n  }\n\n  .bubble-backdrop.is-visible {\n    opacity: 1;\n    backdrop-filter: blur(16px);\n    -webkit-backdrop-filter: blur(16px);\n  }\n\n  .bubble-backdrop.is-hidden {\n    opacity: 0;\n    backdrop-filter: none;\n    -webkit-backdrop-filter: none;\n    pointer-events: none;\n  }\n";let O,E=!1;function B(e){if(O)return O;const n=getComputedStyle(document.body).getPropertyValue("--ha-card-background")??getComputedStyle(document.body).getPropertyValue("--card-background-color"),t=m("style");t.innerHTML=`\n    ${L}\n    .bubble-backdrop {\n      background-color: ${i(n,.7,.7)};\n    }\n  `,document.head.appendChild(t);const o=m("style");document.head.appendChild(o);const a=m("div","bubble-backdrop backdrop is-hidden");return e.config.hide_backdrop&&(a.style.display="none",a.style.pointerEvents="none"),document.body.appendChild(a),O={hideBackdrop:function(){a.classList.add("is-hidden"),a.classList.remove("is-visible")},showBackdrop:function(){a.classList.add("is-visible"),a.classList.remove("is-hidden")},backdropElement:a,backdropCustomStyle:o},O}async function V(e){if("pop-up"!==e.cardType){if(e.getRootNode()instanceof ShadowRoot==0)return;!function(e){try{e.cardType="pop-up",e.verticalStack=e.getRootNode(),e.popUp=e.verticalStack.querySelector("#root"),e.popUp.classList.add("pop-up","bubble-pop-up","is-popup-closed"),e.verticalStack.removeChild(e.popUp),e.elements={},B(e),E=E||(e.config.hide_backdrop??!1),e.popUp.style.setProperty("--custom-height-offset-desktop",e.config.margin_top_desktop??"0px"),e.popUp.style.setProperty("--custom-height-offset-mobile",e.config.margin_top_mobile??"0px"),e.popUp.style.setProperty("--custom-margin",`-${e.config.margin??7}px`),e.popUp.style.setProperty("--custom-backdrop-filter",E?"none":`blur(${e.config.bg_blur??10}px)`),e.popUp.style.setProperty("--custom-popup-filter",E?`blur(${e.config.bg_blur??10}px)`:"none"),e.popUp.style.setProperty("--custom-shadow-opacity",(e.config.shadow_opacity??0)/100);const n=m("style");e.elements.customStyle=m("style"),n.innerText="\n  .pop-up.card-content {\n      width: 100% !important;\n      padding: 0 !important;\n  }\n  .pop-up {\n      transition: transform .36s;\n      position: fixed;\n      width: 100%;\n      max-width: 100%;\n      border-radius: 42px 42px 0 0;\n      box-sizing: border-box;\n      grid-gap: 12px;\n      gap: 12px;\n      margin-left: var(--custom-margin);\n      grid-auto-rows: min-content;\n      padding: 18px 18px 90px 18px;\n      height: calc(100% - var(--custom-height-offset-mobile) - var(--header-height)) !important;\n      -ms-overflow-style: none; /* for Internet Explorer, Edge */\n      scrollbar-width: none; /* for Firefox */\n      overflow-y: auto; \n      overflow-x: hidden; \n      z-index: 1 !important; /* Higher value hide the more-info panel */\n      bottom: 0;\n      left: calc(var(--mdc-drawer-width) / 2 + 50% - (var(--desktop-width) / 2));\n  }\n  .pop-up::-webkit-scrollbar {\n      display: none; /* for Chrome, Safari, and Opera */\n  }\n  .pop-up > :first-child {\n      position: sticky;\n      top: 0;\n      z-index: 1;\n      background: none !important;\n      overflow: visible;\n  }\n  .is-popup-opened {\n      transform: translateY(0);\n      box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));\n      backdrop-filter: var(--custom-popup-filter);\n      -webkit-backdrop-filter: var(--custom-popup-filter);\n  }\n  .is-popup-closed { \n      transform: translateY(100%) !important;\n      box-shadow: none !important;\n      backdrop-filter: none !important;\n      -webkit-backdrop-filter: none !important;\n  }\n  @media only screen and (min-width: 600px) {\n      .pop-up {\n          margin: 0 !important;\n          height: calc(100% - var(--custom-height-offset-desktop) - var(--header-height)) !important;\n      }\n  }  \n  @media only screen and (min-width: 870px) {\n      .pop-up {\n        min-width: var(--desktop-width);\n        width: calc(var(--desktop-width) - var(--mdc-drawer-width)) !important;\n      }\n      .is-sidebar-hidden.pop-up {\n        width: var(--desktop-width) !important;\n      }\n  }  \n  .pop-up.editor {\n      position: inherit !important;\n      width: 100% !important;\n      padding: 18px !important;\n      backdrop-filter: none !important;\n      display: block !important;\n      transform: none !important;\n      height: auto !important;\n      min-width: auto;\n      border-radius: 42px;\n  }\n",e.popUp.appendChild(n),e.popUp.appendChild(e.elements.customStyle)}catch(e){console.error(e)}}(e),function(e){try{e.elements.style=m("style"),e.elements.style.innerText="\n  ha-card {\n      margin-top: 0 !important;\n  }\n  .bubble-header-container {\n      display: inline-flex;\n      height: 50px;\n      width: 100%;\n      margin: 0;\n      padding: 0;\n  }\n  .bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n    min-width: 38px;\n    min-height: 38px;\n    margin: 6px;\n    border-radius: 50%;\n    background-color: var(--card-background-color, var(--ha-card-background));\n    overflow: hidden;\n    z-index: 1;\n    position: relative;\n    cursor: pointer;\n  }\n  .bubble-icon-container::after {\n    content: '';\n    background-color: currentColor;\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    transition: all 1s;\n    left: 0;\n    right: 0;\n    opacity: 0;\n  }\n  .is-light.is-on .bubble-icon-container::after {\n    opacity: 0.2;\n  }\n  .is-unavailable.is-light .bubble-icon-container::after {\n    opacity: 0;\n  }\n\n  .bubble-icon {\n    display: flex;\n    opacity: 0.6;\n    height: 22px;\n    width: 22px;\n  }\n\n  .is-on .bubble-icon {\n    filter: brightness(1.1);\n    opacity: 1;\n  }\n\n  .bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n  }\n  .bubble-header {\n      align-items: center;\n      display: inline-flex;\n      position: relative;\n      padding-right: 6px;\n      z-index: 1;\n      flex-grow: 1;\n      transition: background 1s;\n      border-radius: 25px;\n      margin-right: 14px;\n      backdrop-filter: blur(14px);\n      -webkit-backdrop-filter: blur(14px);\n  }\n  .bubble-name {\n      display: inline-flex;\n      margin: 0 18px 0 0;\n      padding: 4px;\n      z-index: 1;\n      font-size: 18px;\n  }\n  .bubble-state {\n      display: inline-flex;\n      font-size: 16px;\n      min-width: fit-content;\n      flex-grow: 1;\n  }\n  .bubble-power-button {\n      cursor: pointer;\n      width: 24px;\n      height: 24px;\n      border-radius: 12px;\n      margin: 0 10px;\n      background: none !important;\n      justify-content: flex-end;\n      background-color: var(--background-color,var(--secondary-background-color));\n  }\n  .bubble-close-button {\n      height: 50px;\n      width: 50px;\n      border: none;\n      border-radius: 50%;\n      z-index: 1;\n      background: var(--background-color,var(--secondary-background-color));\n      color: var(--primary-text-color);\n      flex-shrink: 0;\n      cursor: pointer;\n  }\n",e.elements.cardCustomStyle=m("style"),e.content.innerHTML="",e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.cardCustomStyle);const n=getComputedStyle(document.body).getPropertyValue("--ha-card-background")??getComputedStyle(document.body).getPropertyValue("--card-background-color"),t=i(e.config.bg_color?e.config.bg_color:n,(e.config.bg_opacity??88)/100,1.02);e.popUp.style.backgroundColor=t,e.popUp.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.config.is_sidebar_hidden&&e.popUp.classList.add("is-sidebar-hidden"),e.config.close_on_click&&e.popUp.addEventListener("touchend",$);const o=function(e){const{hideBackdrop:n,showBackdrop:t}=B(e);return function(){e.config.hash===location.hash?S(e):function(e){!1!==e.popUp.classList.contains("is-popup-opened")&&(k--,document.body.style.overflow="",e.popUp.classList.add("is-popup-closed"),e.popUp.classList.remove("is-popup-opened"),e.hideContentTimeout=setTimeout((function(){e.popUp.style.display="none"}),380),e.resetCloseTimeout=()=>{clearTimeout(e.closeTimeout)},e.popUp.removeEventListener("touchstart",e.resetCloseTimeout),window.removeEventListener("click",C),e.removeDomTimeout=window.setTimeout((()=>{e.popUp.parentNode===e.verticalStack&&e.verticalStack.removeChild(e.popUp)}),360))}(e),0===k?n():t()}}(e);setTimeout((()=>{o()}),0),window.addEventListener("location-changed",o),window.addEventListener("keydown",(n=>{"Escape"===n.key&&e.config.hash===location.hash&&$()}))}catch(e){console.error(e)}}(e),function(e){e.elements.closeIcon=m("ha-icon","bubble-close-icon"),e.elements.closeIcon.icon="mdi:close",e.elements.closeButton=m("button","bubble-close-button close-pop-up"),e.elements.closeButton.addEventListener("click",$),e.elements.closeButton.appendChild(e.elements.closeIcon),e.elements.icon=m("ha-icon","bubble-icon icon"),e.elements.image=m("div","bubble-entity-picture entity-picture"),e.elements.iconContainer=m("div","bubble-icon-container icon-container"),e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),x(e.elements.iconContainer,e.config),e.elements.name=m("h2","bubble-name"),e.elements.state=m("p","bubble-state"),e.elements.header=m("div","bubble-header"),e.elements.header.appendChild(e.elements.iconContainer),e.elements.header.appendChild(e.elements.name),e.elements.header.appendChild(e.elements.state),e.config.entity&&(e.elements.powerIcon=m("ha-icon","bubble-power-button power-button"),e.elements.powerIcon.icon="mdi:power",e.elements.powerIcon.addEventListener("click",(()=>{l(e._hass,e.config.entity)})),e.elements.header.appendChild(e.elements.powerIcon)),e.elements.headerContainer=m("div","bubble-header-container"),e.elements.headerContainer.setAttribute("id","header-container"),e.elements.headerContainer.appendChild(e.elements.header),e.elements.headerContainer.appendChild(e.elements.closeButton),e.content.appendChild(e.elements.headerContainer)}(e)}("pop-up"!==e.cardType||e.popUp.classList.contains("is-popup-opened")||function(e,n){return!(!n.classList.contains("editor")||e.config===e.previousConfig||(e.previousConfig=e.config,0))}(e,e.popUp))&&(function(e){const n=b(e),t=s(e),i=c(e);h(e,"light")&&n?e.elements.iconContainer.style.color=r(e):e.elements.iconContainer.style.color="",""!==i?(e.elements.image.style.backgroundImage="url("+i+")",e.elements.icon.style.display="none",e.elements.image.style.display=""):""!==t?(e.elements.icon.icon=t,e.elements.icon.style.color=n?r(e):"inherit",e.elements.icon.style.display="",e.elements.image.style.display="none"):(e.elements.icon.style.display="none",e.elements.image.style.display="none")}(e),function(e){const n=e._hass.states[e.config.entity],i=n?.attributes.rgb_color,o=n?.state;if(i){const n=t(i)?"rgba(255, 220, 200, 0.5)":`rgba(${i}, 0.5)`;e.elements.header.style.backgroundColor=n}else"on"==o&&e.config.entity?.startsWith("light.")?e.elements.header.style.backgroundColor="rgba(255, 220, 200, 0.5)":e.elements.header.style.backgroundColor="on"==o?"var(--accent-color)":"var(--background-color, var(--secondary-background-color))"}(e),function(e){const n=d(e);n!==e.elements.name.innerText&&(e.elements.name.innerText=n)}(e),function(e){"unavailable"===p(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable"),h(e,"light")?e.card.classList.add("is-light"):e.card.classList.remove("is-light"),b(e)?e.card.classList.add("is-on"):e.card.classList.remove("is-on")}(e),function(e){const n=p(e),{backdropCustomStyle:t}=B(e),i=e.config.styles?Function("hass","entityId","state","return `"+e.config.styles+"`;")(e._hass,e.config.entity,n):"";e.elements.customStyle.innerText=i,e.elements.cardCustomStyle.innerText=i,t.innerText=i}(e)),function(e){let n=e.config.trigger_entity??"",t=e.config.trigger_state??"",i=e.config.trigger_close??!1,o=e._hass.states[n]?.state;n&&t&&e.oldTriggerEntityState!==o&&(e.config.hash===location.hash?i&&t!==o&&$():o===t&&T(e.config.hash),e.oldTriggerEntityState=o)}(e),function(e){const n=e.verticalStack.host.closest("hui-card-preview");e.editor||null!==n?e.popUp.classList.add("editor"):e.popUp.classList.remove("editor"),function(e){const{hideBackdrop:n,showBackdrop:t}=B(e),i=e.verticalStack.host.closest("hui-card-preview");e.editor||null!==i?(n(),window.clearTimeout(e.removeDomTimeout),e.popUp.parentNode!==e.verticalStack&&e.verticalStack.appendChild(e.popUp)):e.config.hash===location.hash?(S(e),t()):e.popUp.parentNode===e.verticalStack&&e.verticalStack.removeChild(e.popUp)}(e)}(e)}let P=!1;function A(e,n){const t=e.config[`${n}_name`]??"",i=e.config[`${n}_icon`]??"",o=e.config[`${n}_pir_sensor`],l=e.config[`${n}_link`],s=e.config[`${n}_entity`];P=P||location.hash===l;const r=m("ha-icon","bubble-icon icon");r.icon=i;const c=m("div","bubble-name name");c.innerText=t;const d=m("div","bubble-background-color background-color"),p=m("div","bubble-background background"),u=m("div",`bubble-button bubble-button-${n} button ${l.substring(1)}`);let h=localStorage.getItem(`bubbleButtonWidth-${l}`);return u.style.width=`${h}px`,u.appendChild(r),u.appendChild(c),u.appendChild(d),u.appendChild(p),u.addEventListener("click",(()=>{location.hash!==l&&(P=!1),P?$():T(l),P=!P,a("light")})),u.icon=r,u.name=c,u.backgroundColor=d,u.background=p,u.pirSensor=o,u.lightEntity=s,u.link=l,u.index=n,window.addEventListener("urlChanged",(function(){e.config.highlight_current_view&&(location.pathname===l||location.hash===l?u.classList.add("highlight"):u.classList.remove("highlight"))})),e.elements.buttons.push(u),u}function I(e){const n=e.config.button_type,t=e._hass.states[e.config.entity],i=e.config.attribute??"",o="state"===n,a=e.config.show_name??!0,l=e.config.show_icon??!0,s=e.config.show_state??o,r=e.config.show_attribute??o,c=e.config.show_last_updated??"";let d,p,u=t&&s?e._hass.formatEntityState(t):"";r&&i&&(d=t?e._hass.formatEntityAttributeValue(t,i):""),c&&(p=t?f(t.last_updated,e._hass.locale.language):""),"Unknown"===u&&(u=""),"Unknown"===d&&(d="");let h="";function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}u&&(h+=u),p&&(h&&(h+="off"!==u.toLowerCase()?" ":" - "),h+="off"===u.toLowerCase()?b(p):p),d&&(h&&(h+=" - "),h+=d),h=b(h),e.elements.name.style.display=a?"":"none",l?(e.elements.iconContainer.style.display="",e.elements.nameContainer.style.marginLeft=""):(e.elements.iconContainer.style.display="none",e.elements.nameContainer.style.marginLeft="16px"),""===h?e.elements.state.style.display="none":e.previousState!==h&&(e.elements.state.style.display="",e.elements.state.innerText=h,g(e.elements.state,h),e.previousState=h)}function z(e){return e.config.button_type||"switch"}function H(e,n){if(h(e,"light"))e._hass.callService("light","turn_on",{entity_id:e.config.entity,brightness:255*n/100});else if(h(e,"media_player"))e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:n/100});else if(h(e,"cover"))e._hass.callService("cover","set_cover_position",{entity_id:e.config.entity,position:n});else if(h(e,"input_number")){const t=u(e,"min"),i=u(e,"max");e._hass.callService("input_number","set_value",{entity_id:e.config.entity,value:Math.round((i-t)*n/100-i)})}}const D=_(H);function U(e,n,t=!1){const i=e.elements.rangeSlider.getBoundingClientRect(),o=100*(n-i.left)/i.width,a=Math.min(100,Math.max(0,o));e.elements.rangeFill.style.transform=`translateX(${a}%)`,t?D(e,a):H(e,a)}const M="\n    ha-card {\n        margin-top: 0;\n        background: none;\n        opacity: 1;\n    }\n    .is-unavailable {\n        opacity: 0.5;\n    }\n\n    .bubble-button-card-container {\n        position: relative;\n        width: 100%;\n        height: 50px;\n        background-color: var(--background-color-2,var(--secondary-background-color));\n        border-radius: 25px;\n        mask-image: radial-gradient(white, black);\n        -webkit-transform: translateZ(0);\n        overflow: hidden;\n        touch-action: pan-y;\n    }\n\n    .bubble-button-card,\n    .bubble-range-slider {\n        display: flex;\n        position: absolute;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        transition: background-color 1.5s;\n        background-color: rgba(0,0,0,0);\n    }\n\n    .bubble-range-fill {\n        z-index: -1;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        left: -100%;\n        transition: all .3s;\n    }\n    .is-dragging .bubble-range-fill {\n        transition: none;\n    }\n    .is-light .bubble-range-fill {\n        opacity: 0.5;\n    }\n\n    .bubble-button-card {\n        cursor: pointer;\n    }\n    .is-unavailable .bubble-button-card {\n        cursor: not-allowed;\n    }\n\n    .bubble-range-slider {\n        cursor: ew-resize;\n    }\n    .is-unavailable .bubble-range-slider {\n        cursor: not-allowed;\n    }\n\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        background-color: var(--card-background-color, var(--ha-card-background));\n        overflow: hidden;\n        z-index: 1;\n        position: relative;\n        cursor: pointer;\n    }\n    .bubble-icon-container::after {\n        content: '';\n        background-color: currentColor;\n        position: absolute;\n        display: block;\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        left: 0;\n        right: 0;\n        opacity: 0;\n    }\n    .is-light.is-on .bubble-icon-container::after {\n        opacity: 0.2;\n    }\n    .is-unavailable.is-light .bubble-icon-container::after {\n        opacity: 0;\n    }\n\n    .bubble-icon {\n        display: flex;\n        opacity: 0.6;\n    }\n\n    .is-on .bubble-icon {\n      filter: brightness(1.1);\n      opacity: 1;\n    }\n\n    .bubble-entity-picture {\n        background-size: cover;\n        background-position: center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 1em;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        font-weight: 600;\n        margin-left: 4px;\n        margin-right: 16px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        margin: 2px 0;\n        white-space: nowrap;\n        display: flex;\n        position: relative;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        opacity: 0.7;\n        margin: 2px 0;\n        font-weight: normal;\n        white-space: nowrap;\n        display: flex;\n        position: relative;\n    }\n\n    .bubble-feedback-element {\n        position: absolute;\n        top: 0;\n        left: 0;\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgb(0,0,0);\n    }\n\n    @keyframes tap-feedback {\n        0% {transform: translateX(-100%); opacity: 0;}\n        64% {transform: translateX(0); opacity: 0.1;}\n        100% {transform: translateX(100%); opacity: 0;}\n    }\n";function F(e){const n=z(e);e.cardType!==`button-${n}`&&(function(e){const n=z(e);e.dragging=!1,e.elements={},e.elements.buttonCardContainer=m("div","bubble-button-card-container button-container"),e.elements.buttonCard=m("div","bubble-button-card switch-button"),e.elements.nameContainer=m("div","bubble-name-container name-container"),e.elements.iconContainer=m("div","bubble-icon-container icon-container"),e.elements.name=m("div","bubble-name name"),e.elements.state=m("div","bubble-state state"),e.elements.feedback=m("div","bubble-feedback-element feedback-element"),e.elements.icon=m("ha-icon","bubble-icon icon"),e.elements.image=m("div","bubble-entity-picture entity-picture"),e.elements.style=m("style"),e.elements.customStyle=m("style"),e.elements.feedback.style.display="none",e.elements.style.innerText=M,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonCard.appendChild(e.elements.iconContainer),e.elements.buttonCard.appendChild(e.elements.nameContainer),e.elements.buttonCard.appendChild(e.elements.feedback),e.content.innerHTML="",e.content.appendChild(e.elements.buttonCardContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.buttonCardContainer.appendChild(e.elements.buttonCard),e.cardType=`button-${n}`}(e),"switch"===n?function(e){x(e.elements.iconContainer,e.config),w(e.elements.buttonCard,e.elements.feedback),e.elements.buttonCard.addEventListener("click",(n=>{null===n.target.closest(".bubble-icon-container")&&l(e._hass,e.config.entity)}))}(e):"slider"===n?function(e){x(e.elements.iconContainer,e.config);let n=0;function t(t){t.stopPropagation();const i=t.pageX||(t.touches?t.touches[0].pageX:0);Math.abs(n-i)>10&&U(e,i,!0)}function i(n){n.stopPropagation(),e.dragging=!1;const o=n.pageX||(n.touches?n.touches[0].pageX:0);U(e,o),e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",t),e.elements.buttonCardContainer.removeEventListener("pointerup",i)}e.elements.rangeFill=m("div","bubble-range-fill range-fill"),e.elements.rangeSlider=m("div","bubble-range-slider range-slider"),e.elements.rangeSlider.appendChild(e.elements.rangeFill),e.elements.buttonCardContainer.appendChild(e.elements.rangeSlider),e.elements.buttonCardContainer.addEventListener("pointercancel",(function(){e.dragging=!1,e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",t),e.elements.buttonCardContainer.removeEventListener("pointerup",i)})),e.elements.buttonCardContainer.addEventListener("pointerdown",(o=>{e.elements.buttonCardContainer.setPointerCapture(o.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,n=o.pageX||(o.touches?o.touches[0].pageX:0),e.elements.buttonCardContainer.classList.add("is-dragging"),e.elements.buttonCardContainer.addEventListener("pointermove",t),e.elements.buttonCardContainer.addEventListener("pointerup",i))}))}(e):("state"===n||"custom"===n)&&function(e){x(e.elements.buttonCardContainer,e.config),w(e.elements.buttonCard,e.elements.feedback)}(e)),function(e){"unavailable"===p(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable"),h(e,"light")?e.card.classList.add("is-light"):e.card.classList.remove("is-light"),b(e)?e.card.classList.add("is-on"):e.card.classList.remove("is-on")}(e),function(e){const n=z(e),t=b(e);e.elements.buttonCard.style.backgroundColor="switch"!==n&&"custom"!==n||!t?"rgba(0, 0, 0, 0)":"var(--accent-color)"}(e),function(e){const n=d(e);n!==e.elements.previousName&&(e.elements.name.innerText=n,g(e.elements.name,n),e.elements.previousName=n)}(e),function(e){const n=b(e),t=s(e),i=c(e);h(e,"light")&&n?e.elements.iconContainer.style.color=r(e):e.elements.iconContainer.style.color="",""!==i?(e.elements.image.style.backgroundImage="url("+i+")",e.elements.icon.style.display="none",e.elements.image.style.display=""):""!==t?(e.elements.icon.icon=t,e.elements.icon.style.color=n?r(e):"inherit",e.elements.icon.style.display="",e.elements.image.style.display="none"):(e.elements.icon.style.display="none",e.elements.image.style.display="none")}(e),I(e),function(e){if("slider"===z(e)){if(e.elements.rangeFill.style.backgroundColor=r(e),e.dragging)return;let n=0;if(h(e,"light"))n=100*u(e,"brightness")/255;else if(h(e,"media_player"))n=100*u(e,"volume_level");else if(h(e,"cover"))n=u(e,"current_position");else if(h(e,"input_number")){const t=u(e,"min"),i=u(e,"max");n=100*(p(e)-t)/(i-t)}e.elements.rangeFill.style.transform=`translateX(${n}%)`}}(e),function(e){const n=e.config.sub_button;if(!n)return;e.previousValues||(e.previousValues={});let t=e.previousValues.subButtons||[];for(let i=0;i<n.length;i++){let o=n[i];if(!o)continue;const a=i+1,l=o.entity??e.config.entity,r=e._hass.states[l],c=o.name??u(e,"friendly_name",l)??"",d=o.attribute??"",p=u(e,d,l),h=s(e,l,o.icon),g=b(e,l)?"var(--accent-color)":"var(--card-background-color, var(--ha-card-background))",_=o.show_name??!1,y=o.show_state??!1,v=o.show_attribute??!1,w=o.show_last_updated??!1,k=o.show_icon??!0,C=o.show_background??!0;e.elements.subButtonContainer||(e.elements.subButtonContainer=m("div","bubble-sub-button-container"),e.elements.subButtonContainer.style.position="relative",e.elements.subButtonContainer.style.display="flex",e.elements.subButtonContainer.style.justifyContent="end",e.elements.subButtonContainer.style.right="8px",e.elements.subButtonContainer.style.alignContent="center",e.elements.subButtonContainer.style.gap="8px",e.content.firstChild.firstChild.appendChild(e.elements.subButtonContainer)),e.elements[a]||(e.elements[a]=m("div","bubble-sub-button-"+a),e.elements[a].style.flexWrap="nowrap",e.elements[a].style.flexDirection="row-reverse",e.elements[a].style.alignItems="center",e.elements[a].style.justifyContent="center",e.elements[a].style.position="relative",e.elements[a].style.right="0",e.elements[a].style.boxSizing="border-box",e.elements[a].style.width="min-content",e.elements[a].style.minWidth="36px",e.elements[a].style.height="36px",e.elements[a].style.verticalAlign="middle",e.elements[a].style.fontSize="12px",e.elements[a].style.color="white",e.elements[a].style.borderRadius="32px",e.elements[a].style.padding="0 8px",e.elements[a].style.overflow="hidden",e.elements[a].style.whiteSpace="nowrap",e.elements[a].style.zIndex="1",e.elements[a].style.transition="all 0.5s ease-in-out",e.elements[a].nameContainer=m("div","bubble-sub-button-name-container"),e.elements[a].nameContainer.style.display="flex",e.elements[a].appendChild(e.elements[a].nameContainer),e.elements.subButtonContainer.appendChild(e.elements[a])),k&&h&&e.elements[a].previousIcon!==h&&(e.elements[a].previousIcon=h,e.elements[a].icon||(e.elements[a].icon=m("ha-icon","bubble-sub-button-icon")),e.elements[a].icon.setAttribute("icon",h),e.elements[a].icon.style.setProperty("--mdc-icon-size","16px"),e.elements[a].icon.style.display="flex",e.elements[a].icon.style.marginRight="4px",e.elements[a].appendChild(e.elements[a].icon)),C&&(e.elements[a].style.backgroundColor=g),o.tap_action&&x(e.elements[a],o,l);const $=r&&y?e._hass.formatEntityState(r):"";let T,S,L="";function O(e){return e.charAt(0).toUpperCase()+e.slice(1)}v&&(T=r&&p?e._hass.formatEntityAttributeValue(r,d):""),w&&(S=r?f(r.last_updated,e._hass.locale.language):""),_&&c&&(L&&(L+=" - "),L+=c),$&&(L&&(L+=" - "),L+=$),S&&(L&&(L+="off"!==$.toLowerCase()?" ":" - "),L+="off"===$.toLowerCase()?O(S):S),T&&(L&&(L+=" - "),L+=T),L=O(L),""!==L||k?""===L&&k?(e.elements[a].style.display="flex",e.elements[a].icon.style.marginRight="0"):(e.elements[a].style.display="flex",e.elements[a].nameContainer.innerText=L,e.previousState=L):e.elements[a].style.display="none"}e.previousValues.subButtons=n.slice();for(let E=0;E<t.length;E++){let B=t[E];if(-1===n.indexOf(B)){let V=e.elements[E+1];V&&!e.config.sub_button[E]&&(e.elements.subButtonContainer.removeChild(V),e.elements[E+1]=null)}}}(e),function(e){const n=p(e),t=e.config.styles?Function("hass","entityId","state","return `"+e.config.styles+"`;")(e._hass,e.config.entity,n):"";e.elements.customStyle.innerText=t}(e)}function N(e,n){h(e,"media_player")&&e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:n/100})}const X=_(N);function j(e,n,t=!1){const i=e.elements.rangeSlider.getBoundingClientRect(),o=100*(n-i.left)/i.width,a=Math.min(100,Math.max(0,o));e.elements.rangeFill.style.transform=`translateX(${a}%)`,t?X(e,a):N(e,a)}const R="\n    ha-card {\n        margin-top: 0;\n        background: none;\n        opacity: 1;\n    }\n    .is-unavailable {\n        opacity: 0.5;\n    }\n\n    .bubble-media-player-container {\n        position: relative;\n        width: 100%;\n        height: 50px;\n        background-color: var(--background-color-2,var(--secondary-background-color));\n        border-radius: 25px;\n        mask-image: radial-gradient(white, black);\n        -webkit-transform: translateZ(0);\n        overflow: hidden;\n        touch-action: pan-y;\n    }\n\n    .bubble-media-player {\n        display: flex;\n        position: absolute;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        transition: background-color 1.5s;\n        background-color: rgba(0,0,0,0);\n    }\n\n    .bubble-button-container {\n        display: inline-grid;\n        grid-auto-flow: column;\n        gap: 10px;\n        align-self: center;\n        margin-right: 8px;\n    }\n\n    .bubble-play-pause-button,\n    .bubble-previous-button,\n    .bubble-next-button,\n    .bubble-volume-button,\n    .bubble-power-button {\n        background: none;\n        border: none;\n        cursor: pointer;\n        border-radius: 100%;\n        padding: 6px;\n        height: 24px;\n        width: 24px;\n        transition: background 0.3s ease;\n        align-self: center;\n    }\n\n    .bubble-play-pause-button {\n        background-color: var(--accent-color);\n    }\n\n    /*\n    .bubble-play-pause-button:hover,\n    .bubble-previous-button:hover,\n    .bubble-next-button:hover,\n    .bubble-volume-button:hover {\n        background: rgba(0, 0, 0, 0.1);\n    }\n    */\n\n    .bubble-title,\n    .bubble-artist {\n        margin: 0 10px;\n    }\n\n    .bubble-volume-slider {\n        position: absolute;\n        width: calc(100% - 150px);\n        height: 38px;\n        left: 50px;\n        overflow: hidden;\n        border-radius: 20px;\n        z-index: 1;\n        border: 2px solid var(--background-color-2, var(--secondary-background-color));\n        background-color: var(--card-background-color, var(--ha-card-background));\n        opacity: 1;\n        transition: opacity .2s, transform .2s;\n        transform: translateX(0);\n    }\n\n    .bubble-mute-button {\n        opacity: 1;\n        transition: opacity .2s, transform .2s;\n        transform: translateX(0);\n    }\n\n    .is-hidden {\n        opacity: 0 !important;\n        pointer-events: none;\n        transform: translateX(14px);\n    }\n\n    .bubble-range-fill {\n        z-index: -1;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        left: -100%;\n        transition: all .3s;\n        background-color: var(--accent-color);\n    }\n\n    .is-dragging .bubble-range-fill {\n        transition: none;\n    }\n\n    .is-light .bubble-range-fill {\n        opacity: 0.5;\n    }\n\n    .is-unavailable .bubble-button-card {\n        cursor: not-allowed;\n    }\n\n    .bubble-range-slider {\n        cursor: ew-resize;\n    }\n    .is-unavailable .bubble-range-slider {\n        cursor: not-allowed;\n    }\n\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        width: 38px;\n        height: 38px;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        background-color: var(--card-background-color, var(--ha-card-background));\n        overflow: hidden;\n        z-index: 1;\n        position: relative;\n        cursor: pointer;\n    }\n\n    .bubble-icon {\n        opacity: 0.6;\n    }\n\n    .is-on .bubble-icon {\n      filter: brightness(1.1);\n      opacity: 1;\n    }\n\n    .bubble-icon,\n    .bubble-mute-button {\n        display: flex;\n        position: absolute;\n        height: 38px;\n        width: 38px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .bubble-entity-picture {\n        background-size: cover;\n        background-position: center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n\n    .bubble-media-info-container {\n        display: flex;\n        line-height: 1em;\n        font-size: 12px;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        margin-left: 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-title,\n    .bubble-name,\n    .bubble-state,\n    .bubble-artist {\n        display: flex;\n        margin: 2px 0;\n        position: relative;\n        white-space: nowrap;\n    }\n\n    .bubble-title {\n        font-weight: 600;\n    }\n\n    /*.bubble-title span,\n    .bubble-artist span {\n        display: inline-block;\n        animation: scroll 14s linear infinite;\n    }\n\n    .bubble-scroll-separator {\n        opacity: .3; \n        margin: 0 6px 0 8px;\n    }\n\n    @keyframes scroll {\n        from { transform: translateX(0%); }\n        to { transform: translateX(-50%); }\n    }*/\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 1em;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        font-weight: 600;\n        margin-left: 4px;\n        /*margin-right: 16px;*/\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        margin: 2px 0;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        opacity: 0.7;\n        margin: 2px 0;\n        font-weight: normal;\n    }\n\n    @media screen and (max-width: 250px) {\n        .bubble-previous-button {\n            display: none;\n        }\n    }\n\n    @media screen and (max-width: 206px) {\n        .bubble-next-button {\n            display: none;\n        }\n    }\n\n    @media screen and (max-width: 160px) {\n        .bubble-volume-button {\n            display: none;\n        }\n    }\n\n    @keyframes tap-feedback {\n        0% {transform: translateX(-100%); opacity: 0;}\n        64% {transform: translateX(0); opacity: 0.1;}\n        100% {transform: translateX(100%); opacity: 0;}\n    }\n";function W(e){"media-player"!==e.cardType&&function(e){e.dragging=!1,e.elements={},e.elements.mediaPlayerContainer=m("div","bubble-media-player-container"),e.elements.mediaPlayerCard=m("div","bubble-media-player"),e.elements.mediaInfoContainer=m("div","bubble-media-info-container"),e.elements.nameContainer=m("div","bubble-name-container"),e.elements.buttonContainer=m("div","bubble-button-container"),e.elements.iconContainer=m("div","bubble-icon-container"),e.elements.playPauseButton=m("ha-icon","bubble-play-pause-button"),e.elements.previousButton=m("ha-icon","bubble-previous-button"),e.elements.previousButton.setAttribute("icon","mdi:skip-previous"),e.elements.nextButton=m("ha-icon","bubble-next-button"),e.elements.nextButton.setAttribute("icon","mdi:skip-next"),e.elements.volumeButton=m("ha-icon","bubble-volume-button"),e.elements.volumeButton.setAttribute("icon","mdi:volume-high"),e.elements.powerButton=m("ha-icon","bubble-power-button"),e.elements.powerButton.setAttribute("icon","mdi:power-standby"),e.elements.muteButton=m("ha-icon","bubble-mute-button is-hidden"),e.elements.muteButton.setAttribute("icon","mdi:volume-off"),e.elements.title=m("div","bubble-title"),e.elements.artist=m("div","bubble-artist"),e.elements.name=m("div","bubble-name"),e.elements.state=m("div","bubble-state"),e.elements.icon=m("ha-icon","bubble-icon"),e.elements.image=m("div","bubble-entity-picture"),e.elements.style=m("style"),e.elements.customStyle=m("style"),e.elements.style.innerText=R,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.iconContainer.appendChild(e.elements.muteButton),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.mediaInfoContainer.appendChild(e.elements.title),e.elements.mediaInfoContainer.appendChild(e.elements.artist),e.config.hide?.power_button||e.elements.buttonContainer.appendChild(e.elements.powerButton),e.config.hide?.previous_button||e.elements.buttonContainer.appendChild(e.elements.previousButton),e.config.hide?.next_button||e.elements.buttonContainer.appendChild(e.elements.nextButton),e.config.hide?.volume_button||e.elements.buttonContainer.appendChild(e.elements.volumeButton),e.config.hide?.play_pause_button||e.elements.buttonContainer.appendChild(e.elements.playPauseButton),e.elements.mediaPlayerCard.appendChild(e.elements.iconContainer),e.elements.mediaPlayerCard.appendChild(e.elements.mediaInfoContainer),e.elements.mediaPlayerCard.appendChild(e.elements.nameContainer),e.elements.mediaPlayerCard.appendChild(e.elements.buttonContainer),e.content.innerHTML="",e.content.appendChild(e.elements.mediaPlayerContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.mediaPlayerContainer.appendChild(e.elements.mediaPlayerCard),x(e.elements.icon,e.config),x(e.elements.image,e.config),e.elements.volumeSliderContainer=m("div","bubble-volume-slider is-hidden"),function(e,n){let t=0;function i(n){n.stopPropagation();const i=n.pageX||(n.touches?n.touches[0].pageX:0);Math.abs(t-i)>10&&j(e,i,!0)}function o(t){t.stopPropagation(),e.dragging=!1;const a=t.pageX||(t.touches?t.touches[0].pageX:0);j(e,a),n.classList.remove("is-dragging"),n.removeEventListener("pointermove",i),n.removeEventListener("pointerup",o)}e.elements.rangeFill=m("div","bubble-range-fill range-fill"),e.elements.rangeSlider=m("div","bubble-range-slider range-slider"),e.elements.rangeSlider.appendChild(e.elements.rangeFill),n.appendChild(e.elements.rangeSlider),n.addEventListener("pointercancel",(function(){e.dragging=!1,n.classList.remove("is-dragging"),n.removeEventListener("pointermove",i),n.removeEventListener("pointerup",o)})),n.addEventListener("pointerdown",(a=>{n.setPointerCapture(a.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,t=a.pageX||(a.touches?a.touches[0].pageX:0),n.classList.add("is-dragging"),n.addEventListener("pointermove",i),n.addEventListener("pointerup",o))}))}(e,e.elements.volumeSliderContainer),e.elements.mediaPlayerCard.appendChild(e.elements.volumeSliderContainer),e.elements.volumeButton.addEventListener("click",(()=>{e.elements.volumeSliderContainer.classList.toggle("is-hidden"),e.elements.muteButton.classList.toggle("is-hidden"),e.elements.icon.classList.toggle("is-hidden"),e.elements.image.classList.toggle("is-hidden"),function(e){e.elements.volumeButton.isHidden?(e.elements.volumeButton.setAttribute("icon","mdi:volume-high"),e.elements.volumeButton.isHidden=!1):(e.elements.volumeButton.setAttribute("icon","mdi:close"),e.elements.volumeButton.isHidden=!0)}(e)})),e.elements.powerButton.addEventListener("click",(()=>{const n=b(e);e._hass.callService("media_player",n?"turn_off":"turn_on",{entity_id:e.config.entity})})),e.elements.muteButton.addEventListener("click",(()=>{const n=!0===u(e,"is_volume_muted");e._hass.callService("media_player","volume_mute",{entity_id:e.config.entity,is_volume_muted:!n}),e.elements.muteButton.clicked=!0})),e.elements.previousButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_previous_track",{entity_id:e.config.entity})})),e.elements.nextButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_next_track",{entity_id:e.config.entity})})),e.elements.playPauseButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_play_pause",{entity_id:e.config.entity}),e.elements.playPauseButton.clicked=!0})),e.cardType="media-player"}(e),function(e){"unavailable"===p(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable"),b(e)?e.card.classList.add("is-on"):e.card.classList.remove("is-on")}(e),function(e){const n=d(e);n!==e.previousName&&(e.elements.name.innerText=n,e.previousName=n,g(e.elements.name,n))}(e),function(e){const n=u(e,"media_title"),t=u(e,"media_artist"),i=n+t;i!==e.previousState&&(e.elements.artist.style.display=""===t?"none":"flex",g(e.elements.title,n),g(e.elements.artist,t),e.previousState=i)}(e),function(e){u(e,"media_title");const n=""===u(e,"media_artist");e.elements.mediaInfoContainer.style.display=n?"none":"",e.elements.nameContainer.style.display=n?"":"none"}(e),function(e){const n=b(e),t=s(e),i=c(e);""!==i?(e.elements.image.style.backgroundImage="url("+i+")",e.elements.icon.style.display="none",e.elements.image.style.display=""):""!==t?(e.elements.icon.icon=t,e.elements.icon.style.color=n?"var(--accent-color)":"inherit",e.elements.icon.style.display="",e.elements.image.style.display="none"):(e.elements.icon.style.display="none",e.elements.image.style.display="none")}(e),I(e),function(e){if(h(e,"media_player")&&!1===e.dragging&&e.elements.rangeFill){const n=100*u(e,"volume_level");e.elements.rangeFill.style.transform=`translateX(${n}%)`}}(e),function(e){const n="playing"===p(e),t=e.elements.playPauseButton.clicked;n?e.elements.playPauseButton.setAttribute("icon",t?"mdi:play":"mdi:pause"):e.elements.playPauseButton.setAttribute("icon",t?"mdi:pause":"mdi:play"),e.elements.playPauseButton.clicked=!1}(e),function(e){const n=!0===u(e,"is_volume_muted"),t=e.elements.muteButton.clicked;e.elements.muteButton.style.color=n?t?"":"var(--accent-color)":t?"var(--accent-color)":"",e.elements.muteButton.clicked=!1}(e),function(e){const n=b(e);e.elements.powerButton.style.color=n?"var(--accent-color)":""}(e),function(e){const n=p(e),t=e.config.styles?Function("hass","entityId","state","return `"+e.config.styles+"`;")(e._hass,e.config.entity,n):"";e.elements.customStyle.innerText=t}(e)}customElements.get("ha-switch");const Y=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),q=Y.prototype.html,G=Y.prototype.css;customElements.define("bubble-card-editor",class extends Y{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config.card_type||""}get _button_type(){return this._config.button_type||"switch"}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _text(){return this._config.text||""}get _hash(){return this._config.hash||"#pop-up-name"}get _trigger_entity(){return this._config.trigger_entity||""}get _trigger_state(){return this._config.trigger_state||""}get _trigger_close(){return this._config.trigger_close||!1}get _margin(){return this._config.margin||"7px"}get _margin_top_mobile(){return this._config.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config.margin_top_desktop||"0px"}get _width_desktop(){return this._config.width_desktop||"540px"}get _bg_color(){return this._config.bg_color||window.color}get _bg_opacity(){return void 0!==this._config.bg_opacity?this._config.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config.bg_blur?this._config.bg_blur:"14"}get _shadow_opacity(){return void 0!==this._config.shadow_opacity?this._config.shadow_opacity:"0"}get _is_sidebar_hidden(){return this._config.is_sidebar_hidden||!1}get _rise_animation(){return void 0===this._config.rise_animation||this._config.rise_animation}get _auto_close(){return this._config.auto_close||""}get _close_on_click(){return this._config.close_on_click||!1}get _background_update(){return this._config.background_update||!1}get _icon_open(){return this._config.icon_open||""}get _icon_close(){return this._config.icon_close||""}get _open_service(){return this._config.open_service||"cover.open_cover"}get _close_service(){return this._config.open_service||"cover.close_cover"}get _stop_service(){return this._config.open_service||"cover.stop_cover"}get _auto_order(){return this._config.auto_order||!1}get _highlight_current_view(){return this._config.highlight_current_view||!1}get _show_state(){const e="state"===this._config.card_type;return this._config.show_state||e}get _show_attribute(){const e="state"===this._config.card_type;return this._config.show_attribute||e}get _show_last_updated(){const e="state"===this._config.card_type;return this._config.show_last_updated||e}get _attribute(){return this._config.attribute||!1}get _hide_backdrop(){return this._config.hide_backdrop||!1}get _hide_gradient(){return this._config.hide_gradient||!1}get _hide_play_pause_button(){return this._config.hide?.play_pause_button||!1}get _hide_next_button(){return this._config.hide?.next_button||!1}get _hide_previous_button(){return this._config.hide?.previous_button||!1}get _hide_volume_button(){return this._config.hide?.volume_button||!1}get _hide_power_button(){return this._config.hide?.power_button||!1}get _sub_button(){return this._config.sub_button||""}get _tap_action(){return{action:this._config.tap_action?.action||"more-info",navigation_path:this._config.tap_action?.navigation_path||"",url_path:this._config.tap_action?.url_path||"",service:this._config.tap_action?.service||"",target_entity:this._config.tap_action?.target?.entity_id||"",data:this._config.tap_action?.data||""}}get _double_tap_action(){return{action:this._config.double_tap_action?.action||"toggle",navigation_path:this._config.double_tap_action?.navigation_path||"",url_path:this._config.double_tap_action?.url_path||"",service:this._config.double_tap_action?.service||"",target_entity:this._config.double_tap_action?.target?.entity_id||"",data:this._config.double_tap_action?.data||""}}get _hold_action(){return{action:this._config.hold_action?.action||"toggle",navigation_path:this._config.hold_action?.navigation_path||"",url_path:this._config.hold_action?.url_path||"",service:this._config.hold_action?.service||"",target_entity:this._config.hold_action?.target?.entity_id||"",data:this._config.hold_action?.data||""}}render(){if(!this.hass)return q``;const e=document.querySelector("body > home-assistant").shadowRoot.querySelector("hui-dialog-edit-card").shadowRoot.querySelector("ha-dialog > div.content > div.element-preview");if("sticky"!==e.style.position&&(e.style.position="sticky",e.style.top="0"),!this.listsUpdated){const l=e=>({label:e,value:e});this.allEntitiesList=Object.keys(this.hass.states).map(l),this.lightList=Object.keys(this.hass.states).filter((e=>"light"===e.substr(0,e.indexOf(".")))).map(l),this.sensorList=Object.keys(this.hass.states).filter((e=>"sensor"===e.substr(0,e.indexOf(".")))).map(l),this.binarySensorList=Object.keys(this.hass.states).filter((e=>"binary_sensor"===e.substr(0,e.indexOf(".")))).map(l),this.coverList=Object.keys(this.hass.states).filter((e=>"cover"===e.substr(0,e.indexOf(".")))).map(l),this.mediaPlayerList=Object.keys(this.hass.states).filter((e=>"media_player"===e.substr(0,e.indexOf(".")))).map(l),this.attributeList=Object.keys(this.hass.states[this._entity]?.attributes||{}).map((e=>{let n=this.hass.states[this._entity];return{label:this.hass.formatEntityAttributeName(n,e),value:e}})),this.cardTypeList=[{label:"Button (Switch, slider or state)",value:"button"},{label:"Cover",value:"cover"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Media player",value:"media-player"},{label:"Pop-up",value:"pop-up"},{label:"Separator",value:"separator"}],this.buttonTypeList=[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"}],this.tapActionTypeList=[{label:"More info",value:"more-info"},{label:"Toggle",value:"toggle"},{label:"Navigate",value:"navigate"},{label:"URL",value:"url"},{label:"Call service",value:"call-service"},{label:"No action",value:"none"}],this.listsUpdated=!0}const t=this.allEntitiesList,i=(this.lightList,this.sensorList,this.coverList),o=this.cardTypeList,a=this.buttonTypeList;if("pop-up"===this._config.card_type)return q`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
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
                            <ha-textfield
                                label="Optional - Name"
                                .value="${this._name}"
                                .configValue="${"name"}"
                                @input="${this._valueChanged}"
                            ></ha-textfield>
                            ${this.makeDropdown("Optional - Icon","icon")}
                            ${this.makeDropdown("Optional - Entity to toggle (e.g. room light group)","entity",t)}
                            ${this.makeDropdown("Optional - Entity state to display (e.g. room temperature)","state",t)}
                            <ha-textfield
                                label="Optional - Additional text"
                                .value="${this._text}"
                                .configValue="${"text"}"
                                @input="${this._valueChanged}"
                            ></ha-textfield>
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
                            <ha-alert alert-type="info">This allows you to open this pop-up based on the state of any entity, for example you can open a "Security" pop-up with a camera when a person is in front of your house. You can also create a toggle helper (input_boolean) and trigger its opening/closing in an automation.</ha-alert>
                            ${this.makeDropdown("Optional - Entity to open the pop-up based on its state","trigger_entity",t)}
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
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Styling options
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
                                label="Optional - Top margin on desktop (e.g. 50% for an half sized pop-up)"
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
                            <ha-alert alert-type="info">Set this toggle to true on the first pop-up of your main dashboard to disable the backdrop on all pop-ups.</ha-alert>
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                          Tap action on icon
                        </h4>
                        <div class="content">
                            ${this.makeTapActionPanel("Tap action","tap_action")}
                            ${this.makeTapActionPanel("Double tap action","tap_action")}
                            ${this.makeTapActionPanel("Hold action","tap_action")}
                        </div>
                    </ha-expansion-panel>
                    <ha-alert alert-type="info">This card allows you to convert any vertical stack into a pop-up. Each pop-up can be opened by targeting its link (e.g. '#pop-up-name'), with navigation_path or with the horizontal buttons stack that is included.<br><b>It must be placed within a vertical-stack card at the top most position to function properly. The pop-up will be hidden by default until you open it.</b></ha-alert>
                    <ha-alert alert-type="warning">Since v1.7.0, the optimized mode has been removed to ensure stability and to simplify updates for everyone. However, if your pop-up content still appears on the screen during page loading, <a style="color: #fff" href="https://github.com/Clooos/Bubble-Card#pop-up-initialization-fix">you can install this similar fix.</a></ha-alert>
                    ${this.makeVersion()}
              </div>
            `;if("button"===this._config.card_type)return q`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    ${this.makeDropdown("Button type","button_type",a)}
                    ${this.makeDropdown("slider"!==this._button_type?"Entity (toggle)":"Entity (light or media_player)","entity",t)}
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
                            ${this.makeTapActionPanel("Tap action","tap_action")}
                            ${this.makeTapActionPanel("Double tap action","tap_action")}
                            ${this.makeTapActionPanel("Hold action","tap_action")}
                        </div>
                    </ha-expansion-panel>
                    ${this.makeSubButtonPanel()}
                    <ha-alert alert-type="info">This card can be a slider or a button, allowing you to toggle your entities, control the brightness of your lights and the volume of your media players. To access color / control of an entity, simply tap on the icon.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `;if("separator"===this._config.card_type)return q`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <ha-textfield
                        label="Name"
                        .value="${this._name}"
                        .configValue="${"name"}"
                        @input="${this._valueChanged}"
                    ></ha-textfield>
                    ${this.makeDropdown("Icon","icon")}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                          Tap action on separator
                        </h4>
                        <div class="content">
                            ${this.makeTapActionPanel("Tap action","tap_action")}
                            ${this.makeTapActionPanel("Double tap action","tap_action")}
                            ${this.makeTapActionPanel("Hold action","tap_action")}
                        </div>
                    </ha-expansion-panel>
                    <ha-alert alert-type="info">This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...</ha-alert>
                    ${this.makeVersion()}
              </div>
            `;if("horizontal-buttons-stack"===this._config.card_type){if(!this.buttonAdded)for(this.buttonAdded=!0,this.buttonIndex=0;this._config[this.buttonIndex+1+"_link"];)this.buttonIndex++;function s(){this.buttonIndex++,this.requestUpdate()}return q`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <div id="buttons-container">
                        ${this.makeButton()}
                    </div>
                    <button class="icon-button" @click="${s}">
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
                        </div>
                    </ha-expansion-panel>
                    <ha-alert alert-type="info">This card is the companion to the pop-up card, allowing you to open the corresponding pop-ups. It also allows you to open any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `}return"cover"===this._config.card_type?q`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    ${this.makeDropdown("Entity","entity",i)}
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
                            ${this.makeDropdown("Optional - Arrow down icon","icon_down")}
                            ${this.makeDropdown("Optional - Arrow up icon","icon_up")}
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                          Tap action on icon
                        </h4>
                        <div class="content">
                            ${this.makeTapActionPanel("Tap action","tap_action")}
                            ${this.makeTapActionPanel("Double tap action","tap_action")}
                            ${this.makeTapActionPanel("Hold action","tap_action")}
                        </div>
                    </ha-expansion-panel>
                    <ha-alert alert-type="info">This card allows you to control your covers.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `:"media-player"===this._config.card_type?q`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
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
                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                          Tap action on icon
                        </h4>
                        <div class="content">
                            ${this.makeTapActionPanel("Tap action","tap_action")}
                            ${this.makeTapActionPanel("Double tap action","tap_action")}
                            ${this.makeTapActionPanel("Hold action","tap_action")}
                        </div>
                    </ha-expansion-panel>
                    <ha-alert alert-type="info">This card allows you to control a media player. You can tap on the icon to get more control.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `:"empty-column"===this._config.card_type?q`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <h3>Empty column</h3>
                    <ha-alert alert-type="info">Just an empty card to fill any empty column.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `:this._config.card_type?void 0:q`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <ha-alert alert-type="info">You need to add a card type first.</ha-alert>
                    <img style="width: 100%" src="https://user-images.githubusercontent.com/36499953/268039672-6dd13476-42c5-427c-a4d8-ad4981fc2db7.gif">
                    <p>The <b>Bubble Card ${n}</b> changelog is available <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${n}"><b>here</b></a>.
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
            `}makeShowState(e=this._config,n="",t=!1){const i=e?.entity??this._config.entity??"",o=e===this._config,a=Object.keys(this.hass.states[i]?.attributes||{}).map((e=>{let n=this.hass.states[i];return{label:this.hass.formatEntityAttributeName(n,e),value:e}}));return q`
            ${t?q`
                <ha-formfield .label="Optional - Show background when entity is on">
                    <ha-switch
                        aria-label="Optional - Show background when entity is on"
                        .checked=${e?.show_background}
                        .configValue="${n+"show_background"}"
                        @change=${this._valueChanged}
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
                    .configValue="${n+"show_icon"}"
                    @change=${this._valueChanged}
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Optional - Show icon</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Optional - Show name">
                <ha-switch
                    aria-label="Optional - Show name"
                    .checked=${!(!e?.show_name&&!o)}
                    .configValue="${n+"show_name"}"
                    @change=${this._valueChanged}
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Optional - Show name</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Optional - Show entity state">
                <ha-switch
                    aria-label="Optional - Show entity state"
                    .checked="${e?.show_state}"
                    .configValue="${n+"show_state"}"
                    @change=${this._valueChanged}
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Optional - Show entity state</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Optional - Show last updated">
                <ha-switch
                    aria-label="Optional - Show last updated"
                    .checked=${e?.show_last_updated}
                    .configValue="${n+"show_last_updated"}"
                    @change=${this._valueChanged}
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Optional - Show last updated</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Optional - Show attribute">
                <ha-switch
                    aria-label="Optional - Show attribute"
                    .checked=${e?.show_attribute}
                    .configValue="${n+"show_attribute"}"
                    @change=${this._valueChanged}
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Optional - Show attribute</label> 
                </div>
            </ha-formfield>
            ${e?.show_attribute?q`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="Optional - Attribute to show"
                        .value="${e?.attribute}"
                        .configValue="${n+"attribute"}"
                        .items="${a}"
                        @value-changed="${this._valueChanged}"
                    ></ha-combo-box>
                </div>
            `:""}
        `}makeDropdown(e,n,t){return e.includes("icon")||e.includes("Icon")?q`
                <div class="ha-icon-picker">
                    <ha-icon-picker
                        label="${e}"
                        .value="${this["_"+n]}"
                        .configValue="${n}"
                        item-label-path="label"
                        item-value-path="value"
                        @value-changed="${this._valueChanged}"
                    ></ha-icon-picker>
                </div>
            `:q`
            <div class="ha-combo-box">
                <ha-combo-box
                    label="${e}"
                    .value="${this["_"+n]}"
                    .configValue="${n}"
                    .items="${t}"
                    @value-changed="${this._valueChanged}"
                ></ha-combo-box>
            </div>
          `}makeTapActionPanel(e,n,t=this._config,i=""){this.hass;const o="Tap action"===e?"mdi:gesture-tap":"Double tap action"===e?"mdi:gesture-double-tap":"mdi:gesture-tap-hold",a="Tap action"===e?t.tap_action||this._tap_action:"Double tap action"===e?t.double_tap_action||this._double_tap_action:t.hold_action||this._hold_action,l="Tap action"===e?"tap_action":"Double tap action"===e?"double_tap_action":"hold_action",s=t===this._config,r=s&&"Tap action"===e?"more-info":s?"toggle":"";return q`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="${o}"></ha-icon>
                    ${e}
                </h4>
                <div class="content"> 
                    <div class="ha-combo-box">
                        <ha-combo-box
                            label="${e}"
                            .value="${t?.valueType?.action||r}"
                            .configValue="${i+l}.action"
                            .items="${this.tapActionTypeList}"
                            @value-changed="${this._valueChanged}"
                        ></ha-combo-box>
                    </div>
                    ${"navigate"===a.action?q`
                        <div class="ha-textfield">
                            <ha-textfield
                                label="Navigation path"
                                .value="${t?.valueType?.navigation_path??""}"
                                .configValue="${i+l}.navigation_path"
                                @input="${this._valueChanged}"
                            ></ha-textfield>
                        </div>
                    `:""}
                    ${"url"===a.action?q`
                        <div class="ha-textfield">
                            <ha-textfield
                                label="URL path"
                                .value="${t?.valueType?.url_path??""}"
                                .configValue="${i+l}.url_path"
                                @input="${this._valueChanged}"
                            ></ha-textfield>
                        </div>
                    `:""}
                    ${"call-service"===a.action?q`
                        <div class="ha-textfield">
                            <ha-textfield
                                label="Service"
                                .value="${t?.valueType?.service??""}"
                                .configValue="${i+l}.service"
                                @input="${this._valueChanged}"
                            ></ha-textfield>
                        </div>
                        <div class="ha-combo-box">
                            <ha-combo-box
                                label="Entity"
                                .value="${t?.valueType?.target_entity}"
                                .configValue="${i+l}.target.entity_id"
                                .items="${this.allEntitiesList}"
                                @value-changed="${this._valueChanged}"
                            ></ha-combo-box>
                        </div>
                    `:""}
                    ${"call-service"===t?.valueType?.action&&t?.valueType?.service?q`
                        <ha-alert alert-type="info">For now, you still need to switch to the YAML editor if you want to add <code>data:</code> to your service.</ha-alert>
                    `:""}
                </div>
            </ha-expansion-panel>
        `}makeSubButtonPanel(){const e=this._config?.sub_button?.map(((e,n)=>{if(!e)return;const t="sub_button."+n+".";return q`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:border-radius"></ha-icon>
                    ${this._config.sub_button[n]?"Button "+(n+1)+(e.name?" - "+e.name:""):"New button"}
                    <button class="icon-button header" @click="${()=>{this._config.sub_button.splice(n,1),this._valueChanged({target:{configValue:"sub_button."+(n-1)}}),this.requestUpdate()}}">
                      <ha-icon icon="mdi:delete"></ha-icon>
                    </button>
                    ${n>0?q`<button class="icon-button header" @click="${e=>{e.stopPropagation(),n>0&&([this._config.sub_button[n],this._config.sub_button[n-1]]=[this._config.sub_button[n-1],this._config.sub_button[n]],this._valueChanged({target:{configValue:"sub_button."+n,value:this._config.sub_button[n]}})),this.requestUpdate()}}">
                      <ha-icon icon="mdi:arrow-left"></ha-icon>
                    </button>`:""}
                    ${n<this._config.sub_button.length-1?q`<button class="icon-button header" @click="${e=>{e.stopPropagation(),n<this._config.sub_button.length-1&&([this._config.sub_button[n],this._config.sub_button[n+1]]=[this._config.sub_button[n+1],this._config.sub_button[n]],this._valueChanged({target:{configValue:"sub_button."+n,value:this._config.sub_button[n]}})),this.requestUpdate()}}">
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
                                    .value="${e.entity??this._config.entity}"
                                    .configValue="sub_button.${n}.entity"
                                    .items="${this.allEntitiesList}"
                                    @value-changed="${this._valueChanged}"
                                ></ha-combo-box>
                            </div>
                            <div class="ha-textfield">
                                <ha-textfield
                                    label="Optional - Name"
                                    .value="${e.name??""}"
                                    .configValue="sub_button.${n}.name"
                                    .items="${""}"
                                    @input="${this._valueChanged}"
                                ></ha-textfield>
                            </div>
                            <div class="ha-icon-picker">
                                <ha-icon-picker
                                    label="Optional - Icon"
                                    .value="${e.icon}"
                                    .configValue="sub_button.${n}.icon"
                                    item-label-path="label"
                                    item-value-path="value"
                                    @value-changed="${this._valueChanged}"
                                ></ha-icon-picker>
                            </div>
                            ${this.makeShowState(e,t,!0,!0)}
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:gesture-tap"></ha-icon>
                          Tap action on button
                        </h4>
                        <div class="content">
                            ${this.makeTapActionPanel("Tap action","tap_action",e,t)}
                            ${this.makeTapActionPanel("Double tap action","tap_action",e,t)}
                            ${this.makeTapActionPanel("Hold action","tap_action",e,t)}
                        </div>
                    </ha-expansion-panel>
                </div>
            </ha-expansion-panel>
        `}));return q`
        <ha-expansion-panel outlined>
          <h4 slot="header">
            <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
            Sub buttons editor
          </h4>
          <div class="content">
            ${e}
            <button class="icon-button" @click="${()=>{this._config.sub_button||(this._config.sub_button=[]);const e={entity:this._config.entity};this._config.sub_button.push(e),this.requestUpdate()}}">
              <ha-icon icon="mdi:plus"></ha-icon>
              New sub button
            </button>
            <ha-alert alert-type="info">Add new customized buttons fixed to the right.</ha-alert>
          </div>
        </ha-expansion-panel>
      `}makeButton(){let e=[];for(let n=1;n<=this.buttonIndex;n++)e.push(q`
                <div class="${n}_button">
                    <ha-expansion-panel outlined>
                        <div slot="header" class="button-header">
                            <ha-icon class="remove-button" icon="mdi:delete-circle" @click=${()=>this.removeButton(n)}></ha-icon>
                            <span class="button-number">Button ${n} ${this._config[n+"_name"]?"- "+this._config[n+"_name"]:""}</span>
                        </div>
                        <div class="content">  
                            <ha-textfield
                                label="Link / Hash to pop-up (e.g. #kitchen)"
                                .value="${this._config[n+"_link"]||""}"
                                .configValue="${n}_link"
                                @input="${this._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Name"
                                .value="${this._config[n+"_name"]||""}"
                                .configValue="${n}_name"
                                @input="${this._valueChanged}"
                            ></ha-textfield>
                            <ha-icon-picker
                                label="Optional - Icon"
                                .value="${this._config[n+"_icon"]||""}"
                                .configValue="${n}_icon"
                                item-label-path="label"
                                item-value-path="value"
                                @value-changed="${this._valueChanged}"
                            ></ha-icon-picker>
                            <ha-combo-box
                                label="Optional - Light / Light group (For background color)"
                                .value="${this._config[n+"_entity"]||""}"
                                .configValue="${n}_entity"
                                .items="${this.allEntitiesList}"
                                @value-changed="${this._valueChanged}"
                            ></ha-combo-box>
                            <ha-combo-box
                                label="Optional - Presence / Occupancy sensor (For button auto order)"
                                .value="${this._config[n+"_pir_sensor"]||""}"
                                .configValue="${n}_pir_sensor"
                                .disabled=${!this._config.auto_order}
                                .items="${this.binarySensorList}"
                                @value-changed="${this._valueChanged}"
                            ></ha-combo-box>
                        </div>
                    </ha-expansion-panel>
                </div>
            `);return e}makeVersion(){return q`
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
                    ${n}
                </span>
            </h4>
        `}removeButton(e){delete this._config[e+"_name"],delete this._config[e+"_icon"],delete this._config[e+"_link"],delete this._config[e+"_entity"],delete this._config[e+"_pir_sensor"];for(let n=e;n<this.buttonIndex;n++)this._config[n+"_name"]=this._config[n+1+"_name"],this._config[n+"_icon"]=this._config[n+1+"_icon"],this._config[n+"_link"]=this._config[n+1+"_link"],this._config[n+"_entity"]=this._config[n+1+"_entity"],this._config[n+"_pir_sensor"]=this._config[n+1+"_pir_sensor"];delete this._config[this.buttonIndex+"_name"],delete this._config[this.buttonIndex+"_icon"],delete this._config[this.buttonIndex+"_link"],delete this._config[this.buttonIndex+"_entity"],delete this._config[this.buttonIndex+"_pir_sensor"],this.buttonIndex--,o(this,"config-changed",{config:this._config})}_valueChanged(e){const n=e.target,t=e.detail,i="string"==typeof n.value?n.value.replace(",","."):n.value;if("string"==typeof i&&(i.endsWith(".")||"-"===i))return;const{configValue:a,checked:l}=n;if(a){const e=void 0!==l?l:i,n=a.split(".");let t=this._config;for(let e=0;e<n.length-1;e++)t[n[e]]=t[n[e]]||{},t=t[n[e]];t[n[n.length-1]]!==e&&(t[n[n.length-1]]=e)}if("HA-COMBO-BOX"===n.tagName&&t.value){if(n.configValue&&n.configValue.includes(".")){const e=n.configValue.split(".");let i=this._config;for(let n=0;n<e.length-1;n++)i[e[n]]=i[e[n]]||{},i=i[e[n]];if("sub_button"===e[e.length-2]){i.sub_button=i.sub_button||[];const n=parseInt(e[e.length-1]);i.sub_button[n]=i.sub_button[n]||{},i.sub_button[n][e[e.length-1]]=t.value}else i[e[e.length-1]]=t.value}else this._config={...this._config,[n.configValue]:t.value};o(this,"config-changed",{config:this._config})}o(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return G`
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
        `}});class Z extends HTMLElement{editor=!1;isConnected=!1;connectedCallback(){this.isConnected=!0,this._hass&&this.updateBubbleCard()}disconnectedCallback(){this.isConnected=!1}set editMode(e){this.editor!==e&&(this.editor=e,this._hass&&this.updateBubbleCard())}set hass(e){!function(e){if(!e.content){let n=e.shadowRoot||e.attachShadow({mode:"open"}),t=document.createElement("ha-card");t.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let i=document.createElement("div");i.className="card-content",i.style.padding="0",t.appendChild(i),n.appendChild(t),e.card=t,e.content=i}}(this),this._hass=e,(this.isConnected||"pop-up"===this.config.card_type)&&this.updateBubbleCard(),window.columnFix||(window.columnFix=this.config.column_fix)}updateBubbleCard(){switch(this.config.card_type){case"pop-up":V(this);break;case"button":F(this);break;case"separator":"separator"!==(e=this).cardType&&function(e){e.elements={},e.elements.separatorCard=m("div","bubble-separator separator-container"),e.elements.icon=m("ha-icon","bubble-icon"),e.elements.name=m("h4","bubble-name"),e.elements.line=m("div","bubble-line"),e.elements.style=m("style"),e.elements.style.innerText="\n    .bubble-separator {\n        display: flex;\n        width: 100%;\n        padding: 12px 0 4px 0;\n        align-items: center;\n    }\n    .bubble-icon {\n        display: inline-flex;\n        height: 24px;\n        width: 24px;\n        margin: 0 22px 0 8px;\n    }\n    .bubble-name {\n        margin: 0 30px 0 0;\n        font-size: 16px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    .bubble-name:empty {\n      display: none;\n    }\n    .bubble-line {\n        border-radius: 6px;\n        opacity: 0.5;\n        flex-grow: 1;\n        height: 6px;\n        background-color: var(--background-color, var(--secondary-background-color));\n    }\n",e.elements.customStyle=m("style"),e.elements.separatorCard.appendChild(e.elements.icon),e.elements.separatorCard.appendChild(e.elements.name),e.elements.separatorCard.appendChild(e.elements.line),e.content.innerHTML="",e.content.appendChild(e.elements.separatorCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),x(e.elements.separatorCard,e.config),e.cardType="separator"}(e),function(e){e.elements.icon.icon=s(e)}(e),function(e){const n=d(e);n!==e.elements.name.innerText&&(e.elements.name.innerText=n)}(e),function(e){const n=p(e),t=e.config.styles?Function("hass","entityId","state","return `"+e.config.styles+"`;")(e._hass,e.config.entity,n):"";e.elements.customStyle.innerText=t}(e);break;case"cover":!function(e){"cover"!==e.cardType&&function(e){e.elements={},e.elements.coverCardContainer=m("div","bubble-cover-card-container cover-container"),e.elements.headerContainer=m("div","bubble-header header-container"),e.elements.buttonsContainer=m("div","bubble-buttons buttons-container"),e.elements.iconContainer=m("div","bubble-icon-container icon-container"),e.elements.icon=m("ha-icon","bubble-icon"),e.elements.nameContainer=m("div","bubble-name-container name-container"),e.elements.name=m("div","bubble-name name"),e.elements.state=m("div","bubble-state state"),e.elements.buttonOpen=m("div","bubble-button bubble-open button open"),e.elements.buttonStop=m("div","bubble-button bubble-stop button stop"),e.elements.buttonClose=m("div","bubble-button bubble-close button close"),e.elements.iconOpen=m("ha-icon","bubble-icon bubble-icon-open"),e.elements.iconStop=m("ha-icon","bubble-icon bubble-icon-stop"),e.elements.iconStop.icon="mdi:stop",e.elements.iconClose=m("ha-icon","bubble-icon bubble-icon-close"),e.elements.style=m("style"),e.elements.style.innerText="\n    ha-card {\n        margin-top: 0 !important;\n        background: none !important;\n    }\n\n    .bubble-cover-card-container {\n        display: grid;\n        gap: 10px;\n    }\n\n    .bubble-header {\n        display: flex;\n        align-items: center;\n    }\n\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        min-width: 38px;\n        min-height: 38px;\n        border-radius: 50%;\n        background-color: var(--card-background-color, var(--ha-card-background));\n        border: 6px solid var(--background-color-2, var(--secondary-background-color));\n        cursor: pointer;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 1em;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        font-weight: 600;\n        margin-left: 10px;\n        margin-right: 16px;\n        pointer-events: none;\n        position: relative;\n    }\n\n    .bubble-name {\n        margin: 2px 0;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        opacity: 0.7;\n        margin: 2px 0;\n        font-weight: normal;\n    }\n\n    .bubble-buttons {\n        display: grid;\n        align-self: center;\n        grid-auto-flow: column;\n        grid-gap: 18px;\n    }\n\n    .bubble-icon {\n        display: flex; \n        height: 24px; \n        width: 24px; \n        color: var(--primary-text-color);\n    }\n\n    .bubble-button {\n        display: flex;\n        background: var(--background-color-2, var(--secondary-background-color));\n        height: 42px;\n        border-radius: 32px;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: none;\n    }\n",e.elements.customStyle=m("style"),e.elements.iconContainer.appendChild(e.elements.icon),e.elements.headerContainer.appendChild(e.elements.iconContainer),e.elements.headerContainer.appendChild(e.elements.nameContainer),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonsContainer.appendChild(e.elements.buttonOpen),e.elements.buttonsContainer.appendChild(e.elements.buttonStop),e.elements.buttonsContainer.appendChild(e.elements.buttonClose),e.elements.buttonOpen.appendChild(e.elements.iconOpen),e.elements.buttonOpen.addEventListener("click",(()=>{const n=e.config.open_service??"cover.open_cover",[t,i]=n.split(".");e._hass.callService(t,i,{entity_id:e.config.entity})})),e.elements.buttonStop.appendChild(e.elements.iconStop),e.elements.buttonStop.addEventListener("click",(()=>{const n=e.config.stop_service??"cover.stop_cover",[t,i]=n.split(".");e._hass.callService(t,i,{entity_id:e.config.entity})})),e.elements.buttonClose.appendChild(e.elements.iconClose),e.elements.buttonClose.addEventListener("click",(()=>{const n=e.config.close_service??"cover.close_cover",[t,i]=n.split(".");e._hass.callService(t,i,{entity_id:e.config.entity})})),x(e.elements.iconContainer,e.config),e.content.innerHTML="",e.content.appendChild(e.elements.coverCardContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.coverCardContainer.appendChild(e.elements.headerContainer),e.elements.coverCardContainer.appendChild(e.elements.buttonsContainer),e.cardType="cover"}(e),function(e){const n=e.config.icon_open??"mdi:window-shutter-open",t=e.config.icon_close??"mdi:window-shutter";e.elements.icon.icon="open"===e._hass.states[e.config.entity].state?n:t,e.elements.iconOpen.icon=e.config.icon_up??"mdi:arrow-up",e.elements.iconClose.icon=e.config.icon_down??"mdi:arrow-down"}(e),function(e){const n=d(e);n!==e.elements.name.innerText&&(e.elements.name.innerText=n)}(e),I(e),function(e){const n=p(e),t=e.config.styles?Function("hass","entityId","state","return `"+e.config.styles+"`;")(e._hass,e.config.entity,n):"";e.elements.customStyle.innerText=t}(e)}(this);break;case"empty-column":!function(e){"empty-column"!==e.cardType&&function(e){e.elements={},e.elements.emptyColumnCard=m("div","bubble-empty-column empty-column"),e.elements.style=m("style"),e.elements.style.innerText="\n    .empty-column {\n        display: flex;\n        width: 100%;\n    }\n",e.elements.customStyle=m("style"),e.content.innerHTML="",e.content.appendChild(e.elements.emptyColumnCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="empty-column"}(e)}(this);break;case"horizontal-buttons-stack":!function(e){"horizontal-buttons-stack"!==e.cardType&&function(e){e.elements={},e.elements.buttons=[],e.elements.cardContainer=m("div","bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container");let n=1;for(;e.config[n+"_link"];)e.elements.cardContainer.appendChild(A(e,n)),n++;e.elements.style=m("style"),e.elements.style.innerText="\n    @keyframes from-bottom {\n        0% { transform: translate(-50%, 100px); }\n        26% { transform: translate(-50%, -8px); }\n        46% { transform: translate(-50%, 1px); }\n        62% { transform: translate(-50%, -2px); }\n        70% { transform: translate(-50%, 0); }\n        100% { transform: translate(-50%, 0); }\n    }\n    @keyframes pulse {\n        0% { filter: brightness(0.7); }\n        100% { filter: brightness(1.3); }\n    }\n    ha-card {\n        border-radius: 0;\n    }\n    .horizontal-buttons-stack-card {\n        bottom: 16px;\n        height: 51px;\n        margin-top: 0;\n        position: fixed;\n        width: calc(100% - var(--mdc-drawer-width) - 8px);\n        left: calc(var(--mdc-drawer-width) + 4px);\n        z-index: 1; /* Higher value hide the more-info panel */\n    }\n    @media only screen and (max-width: 870px) {\n        .horizontal-buttons-stack-card {\n            width: calc(100% - 16px);\n            left: 8px;\n        }\n    }\n    .is-sidebar-hidden.horizontal-buttons-stack-card {\n        width: var(--desktop-width);\n    }\n    .horizontal-buttons-stack-card::before {\n        content: '';\n        position: absolute;\n        top: -32px;\n        left: -100%;\n        display: none;\n        background: linear-gradient(0deg, var(--background-color, var(--primary-background-color)) 50%, rgba(79, 69, 87, 0));\n        width: 200%;\n        height: 100px;\n    }\n    .has-gradient.horizontal-buttons-stack-card::before {\n        display: block;\n    }\n\n    .card-content {\n        width: calc(100% + 36px);\n        padding: 0 !important;\n        max-width: calc(var(--desktop-width) - 8px);\n        box-sizing: border-box;\n        overflow: scroll;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n        -ms-overflow-style: none;\n        scrollbar-width: none;\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            #000000 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            transparent 100%\n        );\n    }\n    .is-scrollable.card-content {\n        padding: 0 !important;\n        width: 100%;\n    }\n    .is-scrolled.card-content {\n        padding: 0 !important;\n        width: 100%;\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            transparent 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            transparent 100%\n        );\n    }\n    .is-maxed-scroll.card-content {\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            transparent 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            #000000 100%\n        );\n    }\n    .card-content::-webkit-scrollbar {\n        display: none;\n    }\n\n    .bubble-horizontal-buttons-stack-card-container {\n        height: 51px;\n        position: relative;\n        margin: auto;\n    }\n\n    .bubble-button {\n        align-items: center;\n        border-radius: 25px;\n        color: var(--primary-text-color);\n        cursor: pointer;\n        display: inline-flex;\n        height: 50px;\n        left: 0;\n        padding: 0 16px;\n        position: absolute;\n        white-space: nowrap;\n        z-index: 1;\n        transition: transform 1s;\n        box-sizing: border-box;\n    }\n    .bubble-button.highlight {\n        animation: pulse 1.4s infinite alternate;\n    }\n    .bubble-background-color {\n        border: 1px solid var(--primary-text-color);\n        border-radius: 24px;\n        box-sizing: border-box;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        transition: background-color 1s;\n        width: 100%;\n        z-index: -1;\n    }\n    .bubble-background {\n        opacity: 0.8;\n        border-radius: 24px;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box !important;\n        position: absolute;\n        left: 0;\n        z-index: -2;\n        background-color: var(--background-color,var(--primary-background-color));\n    }\n    .bubble-icon {\n        height: 24px;\n        width: 24px;\n    }\n    .bubble-icon + .bubble-name {\n        margin-left: 8px;\n    }\n\n\n    .horizontal-buttons-stack-card.editor {\n        position: static;\n    }\n    .horizontal-buttons-stack-card.editor::before {\n        background: none;\n    }\n",e.elements.customStyle=m("style"),e.card.classList.add("horizontal-buttons-stack-card"),e.card.style.marginLeft=e.config.margin??"",e.config.hide_gradient||e.card.classList.add("has-gradient"),e.config.is_sidebar_hidden&&e.card.classList.add("is-sidebar-hidden"),e.card.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.elements.cardContainer.appendChild(e.elements.style),e.elements.cardContainer.appendChild(e.elements.customStyle),e.content.appendChild(e.elements.cardContainer),e.content.addEventListener("scroll",(()=>{e.content.scrollLeft>0?e.content.classList.add("is-scrolled"):e.content.classList.remove("is-scrolled"),e.content.scrollWidth===e.content.offsetWidth+e.content.scrollLeft?e.content.classList.add("is-maxed-scroll"):e.content.classList.remove("is-maxed-scroll")})),(e.config.rise_animation??!0)&&(e.content.style.animation="from-bottom .6s forwards",setTimeout((()=>{e.content.style.animation="none"}),1500)),e.cardType="horizontal-buttons-stack"}(e),function(e){if(!e.config.auto_order)return;const n=e._hass.states;e.elements.buttons.sort(((e,t)=>{if(!e.pirSensor)return 1;if(!t.pirSensor)return-1;const i=n[e.pirSensor].last_updated,o=n[t.pirSensor].last_updated;return"on"===n[e.pirSensor].state&&"on"===n[t.pirSensor].state?i>o?-1:1:"on"===n[e.pirSensor].state?-1:"on"===n[t.pirSensor].state||i<o?1:-1}))}(e),function(e){e.elements.buttons.forEach((n=>{const t=n.index,i=e.config[`${t}_name`]??"",o=e.config[`${t}_icon`]??"",a=e.config[`${t}_pir_sensor`],l=e.config[`${t}_link`],s=e.config[`${t}_entity`];n.pirSensor=a,n.lightEntity=s,n.link=l,i?(n.name.innerText=i,n.name.style.display=""):n.name.style.display="none",o?(n.icon.icon=o,n.icon.style.display=""):n.icon.style.display="none"}))}(e),function(e){e.editor?(e.elements.cardContainer.classList.add("editor"),e.card.classList.add("editor")):(e.elements.cardContainer.classList.remove("editor"),e.card.classList.remove("editor"))}(e),function(e){e.elements.buttons.forEach((n=>{const i=e._hass.states[n.lightEntity],o=i?.attributes.rgb_color,a=i?.state;if(o){const e=t(o)?"rgba(255, 220, 200, 0.5)":`rgba(${o}, 0.5)`;n.backgroundColor.style.backgroundColor=e,n.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"}else"on"==a?(n.backgroundColor.style.backgroundColor="rgba(255, 255, 255, 0.5)",n.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"):(n.backgroundColor.style.backgroundColor="rgba(0, 0, 0, 0)",n.backgroundColor.style.borderColor="var(--primary-text-color)")}))}(e),function(e){e.content.scrollWidth>e.content.offsetWidth?e.content.classList.add("is-scrollable"):e.content.classList.remove("is-scrollable")}(e),function(e){const n=p(e),t=e.config.styles?Function("hass","entityId","state","return `"+e.config.styles+"`;")(e._hass,e.config.entity,n):"";e.elements.customStyle.innerText=t}(e),function(e){let n=0;for(let t=0;t<e.elements.buttons.length;++t){let i=localStorage.getItem(`bubbleButtonWidth-${e.elements.buttons[t].link}`);e.elements.buttons[t].style.width="";const o=e.elements.buttons[t].offsetWidth;e.elements.buttons[t].style.width=`${o}px`,o>0&&(i=o,localStorage.setItem(`bubbleButtonWidth-${e.elements.buttons[t].link}`,`${o}`)),null!==i&&(e.elements.buttons[t].style.transform=`translateX(${n}px)`,e.elements.buttons[t].style.width="",n+=+i+12)}e.elements.cardContainer.style.width=n-12+"px"}(e)}(this);break;case"media-player":W(this)}var e}setConfig(e){if("pop-up"===e.card_type){if(!e.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.")}else if("horizontal-buttons-stack"===e.card_type){var n={};for(var t in e)if(t.match(/^\d+_icon$/)){var i=t.replace("_icon","_link");if(void 0===e[i])throw new Error("You need to define "+i);if(n[e[i]])throw new Error("You can't use "+e[i]+" twice");n[e[i]]=!0}}else if(("button"===e.card_type||"cover"===e.card_type)&&!e.entity)throw new Error("You need to define an entity");if(window.entityError)throw new Error("You need to define a valid entity");if("button"===e.card_type){const n={...e},t=n.button_type||"switch";n.tap_action=n.tap_action??{action:"more-info"},n.double_tap_action=n.double_tap_action??{action:"state"===t?"more-info":"toggle"},n.hold_action=n.hold_action??{action:"state"===t?"more-info":"toggle"},this.config=n}else this.config=e;this._hass&&this.updateBubbleCard()}getCardSize(){return"true"===window.columnFix?0:"number"==typeof window.columnFix?window.columnFix:-10}static getConfigElement(){return document.createElement("bubble-card-editor")}}customElements.define("bubble-card",Z),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch."}),console.info(`%c Bubble Card %c ${n} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})();
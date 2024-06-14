(()=>{"use strict";let e,t="v2.0.4";function n(e){let t=[220,220,190];for(let n=0;n<3;n++)if(e[n]<t[n])return!1;return!0}function i(t,n,o=1){if(t.startsWith("#"))if(4===t.length){let i=Math.min(255,parseInt(t.charAt(1).repeat(2),16)*o),a=Math.min(255,parseInt(t.charAt(2).repeat(2),16)*o),s=Math.min(255,parseInt(t.charAt(3).repeat(2),16)*o);e="rgba("+i+", "+a+", "+s+", "+n+")"}else{let i=Math.min(255,parseInt(t.slice(1,3),16)*o),a=Math.min(255,parseInt(t.slice(3,5),16)*o),s=Math.min(255,parseInt(t.slice(5,7),16)*o);e="rgba("+i+", "+a+", "+s+", "+n+")"}else if(t.startsWith("rgb")){let i=t.match(/\d+/g);e="rgba("+Math.min(255,i[0]*o)+", "+Math.min(255,i[1]*o)+", "+Math.min(255,i[2]*o)+", "+n+")"}else if(t.startsWith("var(--")){let a=t.slice(4,-1),s=window.getComputedStyle(document.documentElement).getPropertyValue(a);(s.startsWith("#")||s.startsWith("rgb"))&&(e=i(s,n,o))}return e}const o=(e,t,n,i)=>{i=i||{},n=null==n?{}:n;const o=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=n,e.dispatchEvent(o),o},a=e=>{o(window,"haptic",e)};function s(e,t=e.config.entity,n=e.config.icon){const i=t?.split(".")[0],o=u(e,"icon",t),a=n,s=p(e,t),l={alarm_control_panel:"mdi:shield",alert:"mdi:alert",automation:"mdi:playlist-play",binary_sensor:function(){const n="off"===s;switch(u(e,"device_class",t)){case"battery":return n?"mdi:battery":"mdi:battery-outline";case"battery_charging":return n?"mdi:battery":"mdi:battery-charging";case"cold":return n?"mdi:thermometer":"mdi:snowflake";case"connectivity":return n?"mdi:server-network-off":"mdi:server-network";case"door":return n?"mdi:door-closed":"mdi:door-open";case"garage_door":return n?"mdi:garage":"mdi:garage-open";case"power":case"plug":return n?"mdi:power-plug-off":"mdi:power-plug";case"tamper":return n?"mdi:check-circle":"mdi:alert-circle";case"smoke":return n?"mdi:check-circle":"mdi:smoke";case"heat":return n?"mdi:thermometer":"mdi:fire";case"light":return n?"mdi:brightness-5":"mdi:brightness-7";case"lock":return n?"mdi:lock":"mdi:lock-open";case"moisture":return n?"mdi:water-off":"mdi:water";case"motion":return n?"mdi:motion-sensor-off":"mdi:motion-sensor";case"occupancy":case"presence":return n?"mdi:home-outline":"mdi:home";case"opening":return n?"mdi:square":"mdi:square-outline";case"running":return n?"mdi:stop":"mdi:play";case"sound":return n?"mdi:music-note-off":"mdi:music-note";case"update":return n?"mdi:package":"mdi:package-up";case"vibration":return n?"mdi:crop-portrait":"mdi:vibrate";case"window":return n?"mdi:window-closed":"mdi:window-open";default:return n?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}}(),calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",cover:function(){const n="closed"!==s;switch(u(e,"device_class",t)){case"awning":return n?"mdi:awning-outline":"mdi:awning";case"blind":return n?"mdi:blinds-open":"mdi:blinds";case"curtain":return n?"mdi:curtains-open":"mdi:curtains";case"damper":case"shutter":default:return n?"mdi:window-shutter-open":"mdi:window-shutter";case"door":return n?"mdi:door-open":"mdi:door-closed";case"garage":return n?"mdi:garage-open":"mdi:garage";case"gate":return n?"mdi:gate-open":"mdi:gate";case"shade":return n?"mdi:roller-shade":"mdi:roller-shade-closed";case"window":return n?"mdi:window-open":"mdi:window-closed"}}(),device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",lock:"mdi:lock",mailbox:"mdi:mailbox",media_player:"mdi:speaker",mower:"mdi:robot-mower",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:file-document",sensor:function(){switch(u(e,"device_class",t)){case"battery":return 100==s?"mdi:battery":s>=90?"mdi:battery-90":s>=80?"mdi:battery-80":s>=70?"mdi:battery-70":s>=60?"mdi:battery-60":s>=50?"mdi:battery-50":s>=40?"mdi:battery-40":s>=30?"mdi:battery-30":s>=20?"mdi:battery-20":s>=10?"mdi:battery-10":"mdi:battery-alert";case"humidity":return"mdi:water-percent";case"illuminance":return"mdi:brightness-5";case"temperature":return"mdi:thermometer";case"pressure":return"mdi:gauge";case"power":return"mdi:flash";case"signal_strength":return"mdi:wifi";case"energy":return"mdi:lightning-bolt";default:return"mdi:eye"}}(),simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:function(n=p(e,t)){switch(n){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}(),weblink:"mdi:open-in-new"};return a||o||(l[i]?l[i]:"")}function l(e){switch(e){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}function r(e){const t=e.config.entity,i="var(--accent-color)",o=u(e,"rgb_color");if(!t)return i;if(!1===t.startsWith("light."))return i;const a="rgba(255, 220, 200)",s=b(e)?a:"rgba(255, 255, 255)";return o?n(o)?a:`rgba(${o.join(", ")})`:s}function c(e){if(e.config.force_icon)return"";const t=u(e,"entity_picture_local"),n=u(e,"entity_picture");return t||n||""}function d(e){const t=e.config.name,n=u(e,"friendly_name");return t||n||""}function p(e,t=e.config.entity){return e._hass.states[t]?.state??""}function u(e,t,n=e.config.entity){return e._hass.states[n]?.attributes[t]??""}function h(e,t){return e.config.entity?.startsWith(t+".")??!1}function b(e,t=e.config.entity){const n=p(e,t),i=Number(n);return!!(["on","open","opening","closing","cleaning","true","idle","home","playing","locked","occupied","available","running","active","connected","mowing"].includes(n)||i>0)}function m(e,t=""){const n=document.createElement(e);return""!==t&&t.split(" ").forEach((e=>{n.classList.add(e)})),n}function g(e,t,n){const i=e.config.scrolling_effect??!0;if(!1===i)return t.innerHTML=n,t.previousText=n,t.style.whiteSpace="normal",t.style.display="-webkit-box",t.style.webkitLineClamp="2",t.style.webkitBoxOrient="vertical",void(t.style.textOverflow="ellipsis");if(t.previousText===n)return;const o=t.className.split(" ").find((e=>e.startsWith("bubble-")));function a(){t.innerHTML=n,t.style="";const e=setInterval((()=>{if(t.originalTextWidth&&t.originalTextWidth===t.scrollWidth||(t.originalTextWidth=t.scrollWidth),i&&t.originalTextWidth>t.parentNode?.offsetWidth){const i='<span class="bubble-scroll-separator"> | </span>';t.innerHTML=`<span>${n+i+n+i}</span>`;const a=function(e){return`\n            .${e} {\n                white-space: nowrap;\n                mask-image: linear-gradient(to right, transparent, black calc(0% + 8px), black calc(100% - 8px), transparent);\n            }\n            .${e} span {\n                display: inline-block;\n                animation: scroll 14s linear infinite;\n            }\n\n            .bubble-scroll-separator {\n                opacity: .3;\n                margin: 0 6px 0 8px;\n            }\n\n            @keyframes scroll {\n                from { transform: translateX(0%); }\n                to { transform: translateX(-50%); }\n            }\n        `}(o);t.styleElement=document.createElement("style"),t.appendChild(t.styleElement),t.styleElement.innerHTML=a,clearInterval(e)}else i&&t.styleElement&&(t.styleElement=null)}),400)}t.eventAdded||(window.addEventListener("resize",(()=>{requestAnimationFrame(a)})),t.eventAdded=!0),requestAnimationFrame(a),t.previousText=n}function f(e,t){if(!e)return"";const n=new Date(e),i=new Date;let o,a,s=Math.floor((i-n)/1e3);return isNaN(s)?"":(s<60?(o="second",a=s+1):s<3600?(o="minute",a=Math.floor(s/60)):s<86400?(o="hour",a=Math.floor(s/3600)):(o="day",a=Math.floor(s/86400)),new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(-a,o))}function y(e){const t=e.config.card_layout;"large"===t?(e.content.classList.contains("large")||e.content.classList.add("large"),e.content.classList.contains("rows-2")&&e.content.classList.remove("rows-2")):"large-2-rows"===t?(e.content.classList.contains("large")||e.content.classList.add("large"),e.content.classList.contains("rows-2")||e.content.classList.add("rows-2")):(e.content.classList.remove("large"),e.content.classList.remove("rows-2"))}function _(e,t=300){let n;return(...i)=>{void 0===n&&(e(...i),n=setTimeout((()=>{n=void 0}),t))}}class v{constructor(e,t,n,i,o){this.element=e,this.config=t,this.sendActionEvent=n,this.defaultEntity=i,this.defaultActions=o,this.tapTimeout=null,this.lastTap=0,this.startTime=null}handleStart(e){e.stopPropagation(),e.stopImmediatePropagation(),this.startTime=Date.now(),clearTimeout(this.tapTimeout),this.tapTimeout=null}handleEnd(){if(null===this.startTime)return;const e=Date.now(),t=e-this.startTime,n=e-this.lastTap;this.lastTap=e,this.startTime=null;const i="none"===(this.config?.double_tap_action||this.defaultActions?.double_tap_action||{action:"toggle"}).action?0:200;t>200?this.sendActionEvent(this.element,this.config,"hold",this.defaultEntity,this.defaultActions):n<i?this.sendActionEvent(this.element,this.config,"double_tap",this.defaultEntity,this.defaultActions):this.tapTimeout=setTimeout((()=>{this.sendActionEvent(this.element,this.config,"tap",this.defaultEntity,this.defaultActions)}),i)}}function w(e,t,n,i,o){const a=t?.tap_action||o?.tap_action||{action:"more-info"},s=t?.double_tap_action||o?.double_tap_action||{action:"toggle"},l=t?.hold_action||o?.hold_action||{action:"toggle"};!function(e,t,n){setTimeout((()=>{const i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={config:t,action:n},e.dispatchEvent(i)}),1)}(e,{entity:t?.entity??i,tap_action:a,double_tap_action:s,hold_action:l},n)}function x(e,t,n,i){const o=new v(e,t,w,n,i);e.addEventListener("pointerdown",o.handleStart.bind(o)),e.addEventListener("pointerup",o.handleEnd.bind(o)),e.addEventListener("contextmenu",(e=>e.preventDefault()));const s=t?.tap_action?.action||i?.tap_action?.action||"more-info",l=t?.double_tap_action?.action||i?.double_tap_action?.action||"toggle",r=t?.hold_action?.action||i?.hold_action?.action||"toggle";e.style.cursor="none"===s&&"none"===l&&"none"===r?"default":"pointer",e.addEventListener("click",(()=>a("selection")))}function k(e,t){e.addEventListener("click",(()=>function(e){void 0!==e&&(e.style.display="",e.style.animation="tap-feedback .3s",setTimeout((()=>{e.style.animation="none",e.style.display="none"}),500))}(t)))}let C=0;function $(e){void 0===e.composedPath().find((e=>e.classList&&e.classList.contains("bubble-pop-up")||"HA-MORE-INFO-DIALOG"===e.nodeName||"HA-DIALOG-DATE-PICKER"===e.nodeName))&&L()}function L(){const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))}function S(e){const t=e.startsWith("#")?window.location.href.split("#")[0]+e:e;history.pushState(null,"",t),window.dispatchEvent(new Event("location-changed"))}function T(e){e.popUp.classList.contains("is-popup-opened")||(e.popUp.classList.add("is-popup-opened"),"hui-card"===e.sectionRow?.tagName.toLowerCase()&&(e.sectionRow.toggleAttribute("hidden",!1),e.sectionRow.style.display="",e.sectionRowContainer?.classList.contains("card")&&(e.sectionRowContainer.style.display="")),window.clearTimeout(e.removeDomTimeout),e.popUp.parentNode!==e.verticalStack&&e.verticalStack.appendChild(e.popUp),C++,clearTimeout(e.closeTimeout),clearTimeout(e.hideContentTimeout),document.body.style.overflow="hidden",e.popUp.style.display="",e.popUp.style.transform="",e.popUp.addEventListener("touchstart",e.resetCloseTimeout,{passive:!0}),(e.config.close_on_click??!1)&&(e.popUp.addEventListener("mouseup",L,{passive:!0}),e.popUp.addEventListener("touchend",L,{passive:!0})),requestAnimationFrame((()=>{e.popUp.classList.remove("is-popup-closed"),(e.config.close_by_clicking_outside??1)&&window.addEventListener("click",$,{passive:!0})})),e.config.auto_close>0&&(e.closeTimeout=setTimeout(L,e.config.auto_close)))}const E="\n  .bubble-backdrop {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 4;\n    opacity: 0;\n    transition: all 0.3s;\n    transition-delay: .1s;\n    display: flex;\n  }\n\n  .bubble-backdrop.is-visible {\n    opacity: 1;\n    backdrop-filter: blur(16px);\n    -webkit-backdrop-filter: blur(16px);\n  }\n\n  .bubble-backdrop.is-hidden {\n    opacity: 0;\n    backdrop-filter: none;\n    -webkit-backdrop-filter: none;\n    pointer-events: none;\n  }\n";let B,O,V,P=!1;function A(e){if(B)return B;const t=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color"),n=m("style");n.innerHTML=`\n    ${E}\n    .bubble-backdrop {\n      background-color: ${i(t,.7,.7)};\n    }\n  `,document.head.appendChild(n);const o=m("style");document.head.appendChild(o);const a=m("div","bubble-backdrop backdrop is-hidden");return e.config.hide_backdrop&&(a.style.display="none",a.style.pointerEvents="none"),document.body.appendChild(a),B={hideBackdrop:function(){a.classList.add("is-hidden"),a.classList.remove("is-visible")},showBackdrop:function(){a.classList.add("is-visible"),a.classList.remove("is-hidden")},backdropElement:a,backdropCustomStyle:o},B}function U(e){const t=e.config.button_type,n=e._hass.states[e.config.entity],i=e.config.attribute??"",o="state"===t,a=e.config.show_name??!0,s=e.config.show_icon??!0,l=e.config.show_state??o,r=e.config.show_attribute??o,c=e.config.show_last_changed??e.config.show_last_updated??!1;let d,p,u=n&&l?e._hass.formatEntityState(n):"";e.elements.stateStyles||(e.elements.stateStyles=m("style"),e.elements.stateStyles.innerText=I,e.content.appendChild(e.elements.stateStyles)),r&&i&&(d=n?e._hass.formatEntityAttributeValue(n,i):""),c&&(p=n?f(n.last_changed,e._hass.locale.language):""),"Unknown"===u&&(u=""),"Unknown"===d&&(d="");let h="";function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}l&&u&&(h+=u),c&&p&&(h&&(h+="off"!==u.toLowerCase()?" ":" · "),h+="off"===u.toLowerCase()?b(p):p),r&&d&&(h&&(h+=" · "),h+=d),h=b(h),a?e.elements.name.classList.remove("hidden"):e.elements.name.classList.add("hidden"),s?(e.elements.iconContainer.classList.remove("hidden"),e.elements.nameContainer.classList.remove("name-without-icon")):(e.elements.iconContainer.classList.add("hidden"),e.elements.nameContainer.classList.add("name-without-icon")),(l||c||r)&&!a?e.elements.state.classList.add("state-without-name"):e.elements.state.classList.remove("state-without-name"),l||c||r?(e.elements.state.classList.add("display-state"),e.elements.state.classList.remove("hidden")):(e.elements.state.classList.remove("display-state"),e.elements.state.classList.add("hidden")),""!==h&&(g(e,e.elements.state,h),e.previousState=h)}const I="\n    .hidden {\n        display: none;\n    }\n\n    .state-without-name {\n        opacity: 1;\n        font-size: 14px;\n    }\n\n    .name-without-icon {\n        margin-left: 16px;\n    }\n\n    .display-state {\n        display: flex;\n    }\n";function z(e,t=e.content,n=t.firstChild.firstChild,i=!1){const o=e.config.sub_button;if(!o)return;e.previousValues=e.previousValues||{};let a=[...e.previousValues.subButtons||[]];e.elements={...e.elements};const l=e.elements.subButtonContainer??m("div","bubble-sub-button-container");if(!e.elements.subButtonContainer&&e.config.sub_button){const t=m("style");t.innerText=H,l.appendChild(t),i?n.prepend(l):n.appendChild(l),e.elements.subButtonContainer=l}o.forEach(((t,n)=>{if(!t)return;const i=n+1,o=t.entity??e.config.entity,a=e._hass.states[o],r=t.name??u(e,"friendly_name",o)??"",c=t.attribute??"",d=u(e,c,o),p=s(e,t.entity,t.icon??""),h=b(e,o),g=t.show_name??!1,y=t.show_state??!1,_=t.show_attribute??!1,v=(t.show_last_changed||t.show_last_updated)??!1,w=t.show_icon??!0,C=t.show_background??!0;let $=e.elements[i]||m("div","bubble-sub-button bubble-sub-button-"+i);if(e.elements[i]||($.nameContainer=m("div","bubble-sub-button-name-container"),$.feedback=m("div","bubble-feedback-element feedback-element"),$.appendChild($.feedback),$.appendChild($.nameContainer),l.appendChild($),e.elements[i]=$),w&&p){let e=$.icon;e||(e=m("ha-icon","bubble-sub-button-icon"),e.classList.add("show-icon"),$.appendChild(e),$.icon=e),e.getAttribute("icon")!==p&&e.setAttribute("icon",p),$.icon.classList.remove("hidden"),$.icon.classList.add("show-icon")}else $.icon&&($.icon.classList.remove("show-icon"),$.icon.classList.add("hidden"));C?h?($.classList.add("background-on"),$.classList.remove("background-off")):($.classList.add("background-off"),$.classList.remove("background-on")):($.classList.remove("background-on"),$.classList.remove("background-off")),("none"!==t.tap_action?.action||"none"!==t.double_tap_action?.action||"none"!==t.hold_action?.action)&&(x($,t,o,{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}}),k($,$.feedback));let L="";const S=a&&y?e._hass.formatEntityState(a):"",T=a&&d&&_?e._hass.formatEntityAttributeValue(a,c):"",E=a&&v?f(a.last_changed,e._hass.locale.language):"";g&&r&&(L+=r),S&&(L+=(L?" · ":"")+S),E&&(L+=(L?" · ":"")+E),T&&(L+=(L?" · ":"")+T),L=L.charAt(0).toUpperCase()+L.slice(1),L||w?($.classList.remove("hidden"),$.nameContainer.innerText!==L&&($.nameContainer.innerText=L),w&&$.icon&&(L?($.icon.classList.add("icon-with-state"),$.icon.classList.remove("icon-without-state")):($.icon.classList.add("icon-without-state"),$.icon.classList.remove("icon-with-state")))):$.classList.add("hidden")})),e.previousValues.subButtons=o.slice();for(let t=a.length;t>0;t--)if(t>o.length){let n=e.elements[t];n&&(l.removeChild(n),delete e.elements[t])}}const H="\n    .bubble-sub-button-container {\n        position: relative;\n        display: flex;\n        justify-content: end;\n        right: 8px;\n        align-content: center;\n        gap: 8px;\n    }\n    .bubble-sub-button {\n        display: flex;\n        flex-wrap: nowrap;\n        flex-direction: row-reverse;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        right: 0;\n        box-sizing: border-box;\n        width: min-content;\n        min-width: 36px;\n        height: 36px;\n        vertical-align: middle;\n        font-size: 12px;\n        border-radius: 32px;\n        padding: 0 8px;\n        overflow: hidden;\n        white-space: nowrap;\n        z-index: 1;\n        transition: all 0.5s ease-in-out;\n        color: var(--primary-text-color);\n    }\n    .bubble-sub-button-name-container {\n        display: flex;\n    }\n    .show-icon {\n        display: flex;\n        --mdc-icon-size: 16px;\n    }\n    .background-on {\n        background-color: var(--accent-color);\n    }\n    .background-off {\n        background-color: var(--card-background-color, var(--ha-card-background));\n    }\n    .hidden {\n        display: none;\n    }\n    .icon-with-state {\n        margin-right: 4px;\n        --mdc-icon-size: 16px;\n    }\n    .icon-without-state {\n        margin-right: 0;\n        --mdc-icon-size: 20px;\n    }\n";function D(e){Array.isArray(e.subButtonIcon)||(e.subButtonIcon=[]),"pop-up"===e.config.card_type?e.popUp.querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t})):e.content.querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t}))}function M(e){D(e);const t=e.config.card_layout;"large"===t?(e.popUp.classList.contains("large")||e.popUp.classList.add("large"),e.popUp.classList.contains("rows-2")&&e.popUp.classList.remove("rows-2")):"large-2-rows"===t?(e.popUp.classList.contains("large")||e.popUp.classList.add("large"),e.popUp.classList.contains("rows-2")||e.popUp.classList.add("rows-2")):(e.popUp.classList.remove("large"),e.popUp.classList.remove("rows-2"));const n=p(e),{backdropCustomStyle:i}=A(e);let o="";try{o=e.config.styles?Function("hass","entityId","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,n,e.elements.icon,e.subButtonIcon,l,e.popUp):""}catch(e){console.error("Error in generating pop-up custom templates:",e)}e.elements.customStyle&&(e.elements.customStyle.innerText=o),i.innerText=o}function N(e){let t=e.config.button_type;return"custom"===t&&(console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"'),t=""),e.config.entity?t||"switch":t||"name"}function R(e,t){if(h(e,"light"))e._hass.callService("light","turn_on",{entity_id:e.config.entity,brightness:Math.round(255*t/100)});else if(h(e,"media_player"))e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:Math.round(t/100)});else if(h(e,"cover"))e._hass.callService("cover","set_cover_position",{entity_id:e.config.entity,position:Math.round(t)});else if(h(e,"input_number")){const n=u(e,"min")??0,i=u(e,"max")??100,o=u(e,"step")??1;let a=(i-n)*t/100+n,s=Math.round(a/o)*o;e._hass.callService("input_number","set_value",{entity_id:e.config.entity,value:s})}else if(h(e,"fan")){const n=u(e,"percentage_step");let i=Math.round(t/n)*n;e._hass.callService("fan","set_percentage",{entity_id:e.config.entity,percentage:i})}else if(h(e,"climate")){const n=u(e,"min_temp"),i=u(e,"max_temp");e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:Math.round((i-n)*t/100+n)})}else if(h(e,"number")){const n=u(e,"min")??0,i=u(e,"max")??100,o=u(e,"step")??1;let a=(i-n)*t/100+n,s=Math.round(a/o)*o;e._hass.callService("number","set_value",{entity_id:e.config.entity,value:s})}}function W(e,t,n=!1){const i=e.elements.rangeSlider.getBoundingClientRect(),o=100*(t-i.left)/i.width,a=Math.min(100,Math.max(0,o));if(e.elements.rangeFill.style.transform=`translateX(${a}%)`,n){if(e.dragging)return;R(e,a)}else R(e,a)}_(R);const F="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n    ha-card {\n        margin-top: 0;\n        background: none;\n        opacity: 1;\n    }\n    .is-unavailable {\n        opacity: 0.5;\n    }\n\n    .bubble-button-card-container {\n        position: relative;\n        width: 100%;\n        height: 50px;\n        background-color: var(--background-color-2,var(--secondary-background-color));\n        border-radius: 25px;\n        mask-image: radial-gradient(white, black);\n        -webkit-transform: translateZ(0);\n        overflow: hidden;\n        touch-action: pan-y;\n    }\n\n    .bubble-button-card,\n    .bubble-range-slider,\n    .bubble-button-background {\n        display: flex;\n        position: absolute;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        transition: background-color 1.5s;\n    }\n    .bubble-button-background {\n        background-color: var(--bubble-button-background-color);\n        opacity: .5;\n    }\n    .bubble-range-fill {\n        z-index: -1;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        left: -100%;\n        transition: all .3s;\n    }\n    .is-dragging .bubble-range-fill {\n        transition: none;\n    }\n    .is-light .bubble-range-fill {\n        opacity: 0.5;\n    }\n\n    .bubble-button-card {\n        overflow: scroll;\n        -ms-overflow-style: none; /* for Internet Explorer, Edge */\n        scrollbar-width: none; /* for Firefox */\n    }\n    .bubble-button-card::-webkit-scrollbar {\n        display: none; /* for Chrome, Safari, and Opera */\n    }\n    .is-unavailable .bubble-button-card,\n    .is-unavailable .bubble-range-slider {\n        cursor: not-allowed;\n    }\n    .bubble-range-slider {\n        cursor: ew-resize;\n    }\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        background-color: var(--card-background-color, var(--ha-card-background));\n        overflow: hidden;\n        z-index: 1;\n        position: relative;\n        cursor: pointer;\n    }\n    .bubble-icon-container::after {\n        content: '';\n        background-color: currentColor;\n        position: absolute;\n        display: block;\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        left: 0;\n        right: 0;\n        opacity: 0;\n    }\n    .is-light.is-on .bubble-icon-container::after {\n        opacity: 0.2;\n    }\n    .is-unavailable.is-light .bubble-icon-container::after {\n        opacity: 0;\n    }\n\n    .bubble-icon {\n        display: flex;\n        opacity: 0.6;\n    }\n\n    .is-on .bubble-icon {\n      filter: brightness(1.1);\n      opacity: 1;\n    }\n\n    .bubble-entity-picture {\n        background-size: cover;\n        background-position: center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n\n    .bubble-name,\n    .bubble-state {\n        display: flex;\n        position: relative;\n        white-space: nowrap;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 18px;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        margin: 0 16px 0 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        font-weight: 600;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        font-weight: normal;\n        opacity: 0.7;\n    }\n\n    .bubble-feedback-element {\n        position: absolute;\n        top: 0;\n        left: 0;\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgb(0,0,0);\n        pointer-events: none;\n    }\n\n    @keyframes tap-feedback {\n        0% {transform: translateX(-100%); opacity: 0;}\n        64% {transform: translateX(0); opacity: 0.1;}\n        100% {transform: translateX(100%); opacity: 0;}\n    }\n\n    .large .bubble-button-card-container {\n      height: 64px;\n      border-radius: 32px;\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 28px;\n      min-width: 48px !important;\n      min-height: 48px !important;\n      margin-left: 8px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(2, min-content);\n      grid-template-rows: repeat(2, 1fr);\n      grid-auto-flow: column;\n      width: auto;\n      padding-right: 14px;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n";function j(e,t=e.content,n=t){const i=N(e);e.cardType!==`button-${i}`&&e.buttonType!==i&&(function(e,t=e.content,n=t){const i=N(e);e.dragging=!1,e.elements||(e.elements={}),e.elements.buttonCardContainer=m("div","bubble-button-card-container button-container"),e.elements.buttonCard=m("div","bubble-button-card switch-button"),e.elements.buttonBackground=m("div","bubble-button-background"),e.elements.nameContainer=m("div","bubble-name-container name-container"),e.elements.iconContainer=m("div","bubble-icon-container icon-container"),e.elements.name=m("div","bubble-name name"),e.elements.state=m("div","bubble-state state"),e.elements.feedback=m("div","bubble-feedback-element feedback-element"),e.elements.icon=m("ha-icon","bubble-icon icon"),e.elements.image=m("div","bubble-entity-picture entity-picture"),e.elements.style=m("style"),e.elements.customStyle=m("style"),e.elements.feedback.style.display="none",e.elements.style.innerText=F,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.nameContainer.appendChild(e.elements.name),"name"!==i&&e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonCard.appendChild(e.elements.buttonBackground),e.elements.buttonCard.appendChild(e.elements.iconContainer),e.elements.buttonCard.appendChild(e.elements.nameContainer),e.elements.buttonCard.appendChild(e.elements.feedback),e.elements.buttonCardContainer.appendChild(e.elements.buttonCard),t.innerHTML="",n===t&&t.appendChild(e.elements.buttonCardContainer),t.appendChild(e.elements.style),t.appendChild(e.elements.customStyle),n!==t?(n.innerHTML="",e.elements.buttonCardContainer.appendChild(t),n.appendChild(e.elements.buttonCardContainer),e.buttonType=i):e.cardType=`button-${i}`}(e,t,n),"switch"===i?function(e){x(e.elements.iconContainer,e.config),x(e.elements.buttonBackground,e.config.button_action,e.config.entity,{tap_action:{action:"toggle"},double_tap_action:{action:"toggle"},hold_action:{action:"more-info"}}),k(e.elements.buttonBackground,e.elements.feedback)}(e):"slider"===i?function(e){x(e.elements.iconContainer,e.config);let t=0,n=null;function i(n){n.stopPropagation();const i=n.pageX||(n.touches?n.touches[0].pageX:0);Math.abs(t-i)>10&&W(e,i,!0),e.dragging||W(e,i),a("selection")}function o(t){t.stopPropagation(),clearTimeout(n),n=setTimeout((()=>{e.dragging=!1}),1400);const a=t.pageX||(t.touches?t.touches[0].pageX:0);W(e,a),e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",i),window.removeEventListener("pointerup",o)}e.elements.rangeFill=m("div","bubble-range-fill range-fill"),e.elements.rangeSlider=m("div","bubble-range-slider range-slider"),e.elements.rangeSlider.appendChild(e.elements.rangeFill),e.elements.buttonCardContainer.appendChild(e.elements.rangeSlider),e.elements.buttonCardContainer.addEventListener("pointercancel",(function(){clearTimeout(n),e.dragging=!1,e.elements.buttonCardContainer.classList.remove("is-dragging"),e.elements.buttonCardContainer.removeEventListener("pointermove",i),window.removeEventListener("pointerup",o)})),e.elements.buttonCardContainer.addEventListener("pointerdown",(n=>{e.elements.buttonCardContainer.setPointerCapture(n.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,t=n.pageX||(n.touches?n.touches[0].pageX:0),e.elements.buttonCardContainer.classList.add("is-dragging"),e.elements.buttonCardContainer.addEventListener("pointermove",i),window.addEventListener("pointerup",o))}))}(e):"state"===i?function(e){x(e.elements.buttonCardContainer,e.config),x(e.elements.buttonBackground,e.config.button_action,e.config.entity,{tap_action:{action:"more-info"},double_tap_action:{action:"more-info"},hold_action:{action:"more-info"}}),k(e.elements.buttonBackground,e.elements.feedback)}(e):"name"===i&&function(e){const t={tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}};x(e.elements.iconContainer,e.config,e.config.entity,t),x(e.elements.buttonBackground,e.config.button_action,e.config.entity,t),k(e.elements.buttonBackground,e.elements.feedback)}(e)),"name"!==i&&(function(e){const t=p(e),n=e.config.card_type;"unavailable"===t?"button"===n?e.card.classList.add("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.add("is-unavailable"):"button"===n?e.card.classList.remove("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.remove("is-unavailable"),h(e,"light")?"button"===n?e.card.classList.add("is-light"):"pop-up"===n&&e.elements.headerContainer.classList.add("is-light"):"button"===n?e.card.classList.remove("is-light"):"pop-up"===n&&e.elements.headerContainer.classList.remove("is-light"),b(e)?"button"===n?e.card.classList.add("is-on"):"pop-up"===n&&e.elements.headerContainer.classList.add("is-on"):"button"===n?e.card.classList.remove("is-on"):"pop-up"===n&&e.elements.headerContainer.classList.remove("is-on")}(e),function(e){const t=e.config.card_type,n=N(e),i=h(e,"light"),o=b(e),a=r(e);"switch"===n&&o?a&&i?("button"===t?e.card.style.setProperty("--bubble-button-background-color",r(e)):"pop-up"===t&&e.popUp.style.setProperty("--bubble-button-background-color",r(e)),e.elements.buttonBackground.style.opacity=".5"):("button"===t?e.card.style.setProperty("--bubble-button-background-color","var(--accent-color)"):"pop-up"===t&&e.popUp.style.setProperty("--bubble-button-background-color","var(--accent-color)"),e.elements.buttonBackground.style.opacity="1"):("button"===t?e.card.style.setProperty("--bubble-button-background-color","rgba(0, 0, 0, 0)"):"pop-up"===t&&e.popUp.style.setProperty("--bubble-button-background-color","rgba(0, 0, 0, 0)"),e.elements.buttonBackground.style.opacity=".5")}(e),function(e){if("slider"===N(e)){if(e.elements.rangeFill.style.backgroundColor=r(e),e.dragging)return;let t=0;if(h(e,"light"))t=100*u(e,"brightness")/255;else if(h(e,"media_player"))t=100*u(e,"volume_level");else if(h(e,"cover"))t=u(e,"current_position");else if(h(e,"input_number")){const n=u(e,"min"),i=u(e,"max");t=100*(p(e)-n)/(i-n)}else if(h(e,"fan"))t=u(e,"percentage");else if(h(e,"climate")){const n=u(e,"min_temp"),i=u(e,"max_temp");t=100*(p(e)-n)/(i-n)}else if(h(e,"number")){const n=u(e,"min"),i=u(e,"max");t=100*(p(e)-n)/(i-n)}e.elements.rangeFill.style.transform=`translateX(${t}%)`}}(e)),function(e){const t=N(e),n="name"!==t&&b(e),i="name"!==t?s(e):e.config.icon,o="name"!==t?c(e):"",a="name"!==t&&h(e,"light");e.elements.iconContainer.style.color=a&&n?r(e):"",""!==o?(e.elements.image.style.backgroundImage="url("+o+")",e.elements.icon.style.display="none",e.elements.image.style.display=""):""!==i?(e.elements.icon.icon=i,e.elements.icon.style.color=n&&"state"!==t?r(e):"inherit",e.elements.icon.style.display="",e.elements.image.style.display="none"):(e.elements.icon.style.display="none",e.elements.image.style.display="none")}(e),function(e){const t="name"!==N(e)?d(e):e.config.name;t!==e.elements.previousName&&(g(e,e.elements.name,t),e.elements.previousName=t)}(e),U(e),z(e,t,n.firstChild.firstChild),"pop-up"!==e.cardType&&function(e){D(e),y(e);const t=p(e);let n="";try{n=e.config.styles?Function("hass","entityId","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,l,e.card):""}catch(e){console.error("Error in generating button custom templates:",e)}e.elements.customStyle&&(e.elements.customStyle.innerText=n)}(e)}async function X(e){if("pop-up"!==e.cardType){if(e.getRootNode()instanceof ShadowRoot==0)return;!function(e){try{e.cardType="pop-up",e.verticalStack=e.getRootNode(),e.sectionRow=e.verticalStack.host.parentElement,e.sectionRowContainer=e.sectionRow?.parentElement,e.popUp=e.verticalStack.querySelector("#root"),e.popUp.classList.add("bubble-pop-up","pop-up","is-popup-closed"),e.verticalStack.removeChild(e.popUp),e.elements={},A(e),P=P||(e.config.hide_backdrop??!1),e.popUp.style.setProperty("--custom-height-offset-desktop",e.config.margin_top_desktop??"0px"),e.popUp.style.setProperty("--custom-height-offset-mobile",e.config.margin_top_mobile??"0px"),e.popUp.style.setProperty("--custom-margin",`-${e.config.margin??"7px"}`),e.popUp.style.setProperty("--custom-backdrop-filter",P?"none":`blur(${e.config.bg_blur??10}px)`),e.popUp.style.setProperty("--custom-popup-filter",P?`blur(${e.config.bg_blur??10}px)`:"none"),e.popUp.style.setProperty("--custom-shadow-opacity",(e.config.shadow_opacity??0)/100)}catch(e){console.error(e)}}(e),M(e),function(e){e.elements={},e.elements.closeIcon=m("ha-icon","bubble-close-icon"),e.elements.closeIcon.icon="mdi:close",e.elements.closeButton=m("button","bubble-close-button close-pop-up"),e.elements.closeButton.addEventListener("click",L),e.elements.closeButton.appendChild(e.elements.closeIcon),e.elements.buttonContainer=m("div","bubble-button-container"),e.elements.header=m("div","bubble-header");const t=e.popUp.querySelector(".bubble-header-container");null===t?(e.elements.headerContainer=m("div","bubble-header-container"),e.elements.headerContainer.setAttribute("id","header-container"),e.elements.headerContainer.appendChild(e.elements.header),e.elements.headerContainer.appendChild(e.elements.closeButton),e.elements.header.appendChild(e.elements.buttonContainer)):(e.elements.headerContainer=t,e.elements.closeIcon=t.querySelector(".bubble-close-icon"),e.elements.closeButton=t.querySelector(".bubble-close-button"),e.elements.buttonContainer=t.querySelector(".bubble-button-container"),e.elements.header=t.querySelector(".bubble-header")),e.popUp.addEventListener("touchstart",(e=>{O=e.touches[0].clientY}),{passive:!0}),e.elements.header.addEventListener("touchmove",(t=>{const n=t.touches[0].clientY-O;n>0&&(e.popUp.style.transform=`translateY(${n}px)`)}),{passive:!0}),e.elements.header.addEventListener("touchend",(t=>{t.changedTouches[0].clientY-O>50?L():e.popUp.style.transform=""}),{passive:!0})}(e),function(e){try{e.elements.style=m("style"),e.elements.style.innerText="\n  .bubble-pop-up-container {\n      display: flex;\n      flex-direction: column;\n      height: auto;\n      margin-top: -50px;\n      max-width: 100% !important;\n      padding-top: 40px;\n      padding-bottom: 80px;\n      grid-gap: 14px !important;\n      gap: 14px !important;\n      column-gap: 14px !important;\n      --grid-gap: 14px;\n      --vertical-stack-card-gap: 14px;\n      --horizontal-stack-card-gap: 14px;\n      --stack-card-gap: 14px;\n      -ms-overflow-style: none; /* for Internet Explorer, Edge */\n      scrollbar-width: none; /* for Firefox */\n      overflow-y: auto; \n      overflow-x: hidden; \n      grid-auto-rows: min-content;\n      mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%);\n      -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%);\n  }\n  .bubble-pop-up-container > * {\n      flex-shrink: 0 !important;\n  }\n  .bubble-pop-up.card-content {\n      width: 100% !important;\n      padding: 0 !important;\n  }\n  .bubble-pop-up {\n      transition: all .36s;\n      position: fixed;\n      width: 100%;\n      max-width: 100%;\n      border-radius: 42px 42px 0 0;\n      box-sizing: border-box;\n      margin-left: var(--custom-margin);\n      padding: 18px 18px calc(50px + var(--custom-height-offset-mobile)) 18px;\n      left: 7px;\n      z-index: 5 !important;\n      bottom: calc(-56px - var(--custom-height-offset-mobile));\n  }\n  .bubble-pop-up-container::-webkit-scrollbar {\n      display: none; /* for Chrome, Safari, and Opera */\n  }\n  .bubble-pop-up > :first-child {\n      position: sticky;\n      top: 0;\n      z-index: 1;\n      background: none !important;\n      overflow: visible;\n  }\n  .is-popup-opened {\n      box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));\n      backdrop-filter: var(--custom-popup-filter);\n      -webkit-backdrop-filter: var(--custom-popup-filter);\n  }\n  .is-popup-closed { \n      transform: translateY(100%) !important;\n      box-shadow: none !important;\n      backdrop-filter: none !important;\n      -webkit-backdrop-filter: none !important;\n  }\n\n  @media only screen and (min-width: 600px) {\n      .bubble-pop-up {\n          margin-left: 0 !important;\n          bottom: calc(-56px - var(--custom-height-offset-desktop)) !important;\n          min-width: var(--desktop-width, 540px);\n          max-width: var(--desktop-width, 540px);\n          left: calc(50% - (var(--desktop-width, 540px) / 2));\n          padding: 18px 18px calc(50px + var(--custom-height-offset-desktop)) 18px;\n      }\n  }\n  @media only screen and (min-width: 768px) {\n      .bubble-pop-up {\n        left: calc(var(--mdc-drawer-width, 0px) / 2 + 50% - (var(--desktop-width, 540px) / 2));\n      }\n  }\n  .bubble-pop-up.editor {\n      position: inherit !important;\n      width: 100% !important;\n      padding: 18px !important;\n      backdrop-filter: none !important;\n      display: block !important;\n      transform: none !important;\n      height: auto !important;\n      min-width: auto;\n      border-radius: 42px;\n  }\n  .bubble-header-container {\n      display: inline-flex;\n      height: 50px;\n      width: 100%;\n      margin: 0;\n      padding: 0;\n      z-index: 5;\n  }\n  .bubble-header {\n      display: inline-flex;\n      flex-grow: 1;\n      margin-right: 14px;\n  }\n  .bubble-name {\n      font-size: 16px;\n      font-weight: heavy;\n  }\n  .bubble-close-button {\n      height: 50px;\n      width: 50px;\n      border: none;\n      border-radius: 50%;\n      z-index: 1;\n      background: var(--background-color,var(--secondary-background-color));\n      color: var(--primary-text-color);\n      flex-shrink: 0;\n      cursor: pointer;\n  }\n  .bubble-button-card-container {\n      background: var(--background-color,var(--secondary-background-color));\n  }\n  .bubble-pop-up-container.hidden {\n      height: 140px !important;\n      mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;\n      -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;   \n  }\n  .bubble-pop-up.editor > .bubble-pop-up-container {\n      padding-bottom: 0 !important;\n      mask-image: none;\n      -webkit-mask-image: none;      \n  }\n\n  .large .bubble-button-card-container {\n    height: 64px;\n    border-radius: 32px;\n  }\n\n  .large .bubble-pop-up-container {\n      margin-top: -36px;\n  }\n\n  .large .bubble-icon-container {\n    --mdc-icon-size: 28px;\n    min-width: 48px !important;\n    min-height: 48px !important;\n    margin-left: 8px;\n  }\n\n  .large .bubble-close-button {\n      height: 64px;\n      width: 64px;\n      border: none;\n      border-radius: 50%;\n      z-index: 1;\n      --mdc-icon-size: 28px !important;\n  }\n\n  .rows-2 .bubble-sub-button-container {\n    flex-direction: column;\n    gap: 4px !important;\n    display: grid !important;\n    grid-template-columns: repeat(2, min-content);\n    grid-template-rows: repeat(2, 1fr);\n    grid-auto-flow: column;\n    width: auto;\n    padding-right: 14px;\n  }\n\n  .rows-2 .bubble-sub-button {\n    height: 20px !important;\n  }\n";let t=e.popUp.querySelector("style");t?e.elements.customStyle=t:(e.elements.customStyle=m("style"),e.popUp.appendChild(e.elements.customStyle),e.popUp.appendChild(e.elements.style));const n=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color"),o=i(e.config.bg_color?e.config.bg_color:n,(e.config.bg_opacity??88)/100,1.02);e.popUp.style.backgroundColor=o,e.popUp.style.setProperty("--desktop-width",e.config.width_desktop??"540px"),e.config.close_on_click&&e.popUp.addEventListener("touchend",L);const a=function(e){const{hideBackdrop:t,showBackdrop:n}=A(e);return function(){e.config.hash===location.hash?T(e):function(e){!1!==e.popUp.classList.contains("is-popup-opened")&&(C--,document.body.style.overflow="",e.hideContentTimeout=setTimeout((function(){e.popUp.style.display="none","hui-card"===e.sectionRow?.tagName.toLowerCase()&&(e.sectionRow.toggleAttribute("hidden",!0),e.sectionRow.style.display="none",e.sectionRowContainer?.classList.contains("card")&&(e.sectionRowContainer.style.display="none"))}),380),e.resetCloseTimeout=()=>{clearTimeout(e.closeTimeout)},e.popUp.removeEventListener("touchstart",e.resetCloseTimeout),(e.config.close_by_clicking_outside??1)&&window.removeEventListener("click",$),(e.config.close_on_click??!1)&&(e.popUp.removeEventListener("mouseup",L),e.popUp.removeEventListener("touchend",L)),e.removeDomTimeout=window.setTimeout((()=>{e.popUp.parentNode===e.verticalStack&&e.verticalStack.removeChild(e.popUp)}),360),e.popUp.classList.add("is-popup-closed"),e.popUp.classList.remove("is-popup-opened"))}(e),0===C||e.editor?t():n()}}(e);setTimeout((()=>{a()}),0),window.addEventListener("location-changed",a),window.addEventListener("popstate",a),window.addEventListener("keydown",(t=>{"Escape"===t.key&&e.config.hash===location.hash&&L()}),{passive:!0}),e.popUp.addEventListener("touchmove",(e=>{e.touches[0].clientY-O>400&&e.touches[0].clientY>V&&L(),V=e.touches[0].clientY}),{passive:!0});const s=e.popUp.querySelector(".bubble-pop-up-container");if(null===s){e.elements.popUpContainer=m("div"),e.elements.popUpContainer.classList.add("bubble-pop-up-container");let t=e.popUp.firstChild;for(;t;)e.elements.popUpContainer.appendChild(t),t=e.popUp.firstChild}else e.elements.popUpContainer=s;e.popUp.appendChild(e.elements.headerContainer),e.popUp.appendChild(e.elements.popUpContainer)}catch(e){console.error(e)}}(e)}(e.popUp.classList.contains("is-popup-opened")||function(e,t){return!(!t.classList.contains("editor")||e.config===e.previousConfig||(e.previousConfig=e.config,0))}(e,e.popUp))&&((e.config.entity||e.config.name)&&j(e,e.elements.buttonContainer,e.elements.header),M(e)),function(e){let t=e.config.trigger_entity??"",n=e.config.trigger_state??"",i=e.config.trigger_close??!1,o=e._hass.states[t]?.state;t&&n&&e.oldTriggerEntityState!==o&&(e.config.hash===location.hash?i&&n!==o&&L():o===n&&S(e.config.hash),e.oldTriggerEntityState=o)}(e),function(e){const t=e.verticalStack.host.closest("hui-card-preview");if(!e.popUp.classList.contains("is-popup-opened")&&"hui-card"===e.sectionRow.tagName.toLowerCase()&&(e.editor||e.sectionRow.hasAttribute("hidden")?e.editor&&e.sectionRow.hasAttribute("hidden")&&(e.sectionRow.toggleAttribute("hidden",!1),e.sectionRow.style.display=""):(e.sectionRow.toggleAttribute("hidden",!0),e.sectionRow.style.display="none"),e.sectionRowContainer?.classList.contains("card"))){if(e.popUp.classList.contains("is-popup-opened"))return;e.editor?e.editor&&(e.sectionRowContainer.style.display=""):e.sectionRowContainer.style.display="none"}e.editor||null!==t?(e.popUp.classList.add("editor"),null!==t?e.elements.popUpContainer?.classList.remove("hidden"):e.elements.popUpContainer?.classList.add("hidden")):(e.popUp.classList.remove("editor"),e.elements.popUpContainer?.classList.remove("hidden")),function(e){const{hideBackdrop:t,showBackdrop:n}=A(e),i=e.verticalStack.host.closest("hui-card-preview");e.editor||null!==i?(t(),window.clearTimeout(e.removeDomTimeout),e.popUp.parentNode!==e.verticalStack&&e.verticalStack.appendChild(e.popUp)):e.config.hash===location.hash?(T(e),n()):e.popUp.parentNode===e.verticalStack&&e.verticalStack.removeChild(e.popUp)}(e)}(e)}let q=!1;function Y(e,t){const n=e.config[`${t}_name`]??"",i=e.config[`${t}_icon`]??"",o=e.config[`${t}_pir_sensor`],s=e.config[`${t}_link`],l=e.config[`${t}_entity`];q=q||location.hash===s;const r=m("ha-icon","bubble-icon icon");r.icon=i;const c=m("div","bubble-name name");c.innerText=n;const d=m("div","bubble-background-color background-color"),p=m("div","bubble-background background"),u=m("div",`bubble-button bubble-button-${t} button ${s.substring(1)}`);let h=localStorage.getItem(`bubbleButtonWidth-${s}`);return u.style.width=`${h}px`,u.appendChild(r),u.appendChild(c),u.appendChild(d),u.appendChild(p),u.addEventListener("click",(()=>{location.hash!==s&&(q=!1),q?L():S(s),q=!q,a("light")})),u.icon=r,u.name=c,u.backgroundColor=d,u.background=p,u.pirSensor=o,u.lightEntity=l,u.link=s,u.index=t,window.addEventListener("location-changed",(function(){e.config.highlight_current_view&&(location.pathname===s||location.hash===s?u.classList.add("highlight"):u.classList.remove("highlight"))})),e.elements.buttons.push(u),u}function G(e,t){h(e,"media_player")&&e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:t/100})}const Z=_(G);function J(e,t,n=!1){const i=e.elements.rangeSlider.getBoundingClientRect(),o=100*(t-i.left)/i.width,a=Math.round(Math.min(100,Math.max(0,o)));e.elements.rangeFill.style.transform=`translateX(${a}%)`,n?Z(e,a):G(e,a),e.elements.rangeValue.innerText=a+"%"}const K="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n\n    ha-card {\n        margin-top: 0;\n        background: none;\n        opacity: 1;\n    }\n    .is-unavailable {\n        opacity: 0.5;\n    }\n\n    .bubble-media-player-container {\n        position: relative;\n        width: 100%;\n        height: 50px;\n        background-color: var(--background-color-2,var(--secondary-background-color));\n        border-radius: 25px;\n        mask-image: radial-gradient(white, black);\n        -webkit-transform: translateZ(0);\n        overflow: hidden;\n        touch-action: pan-y;\n    }\n\n    .bubble-media-player {\n        display: flex;\n        position: absolute;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        transition: background-color 1.5s;\n        background-color: rgba(0,0,0,0);\n    }\n\n    .bubble-button-container {\n        display: inline-grid;\n        grid-auto-flow: column;\n        gap: 10px;\n        align-self: center;\n        margin-right: 8px;\n    }\n\n    .bubble-play-pause-button,\n    .bubble-previous-button,\n    .bubble-next-button,\n    .bubble-volume-button,\n    .bubble-power-button {\n        background: none;\n        border: none;\n        cursor: pointer;\n        border-radius: 100%;\n        padding: 6px;\n        height: 24px;\n        width: 24px;\n        transition: background 0.3s ease;\n        align-self: center;\n    }\n\n    .bubble-play-pause-button {\n        background-color: var(--accent-color);\n    }\n\n    .bubble-volume-slider {\n        position: absolute;\n        width: calc(100% - 150px);\n        height: 38px;\n        left: 50px;\n        overflow: hidden;\n        border-radius: 20px;\n        z-index: 1;\n        border: 2px solid var(--background-color-2, var(--secondary-background-color));\n        background-color: var(--card-background-color, var(--ha-card-background));\n        opacity: 1;\n        transition: opacity .2s, transform .2s;\n        transform: translateX(0);\n    }\n\n    .bubble-range-value {\n        display: flex;\n        justify-content: flex-end;\n        height: 38px;\n        align-items: center;\n        padding-right: 14px;\n        font-size: 12px;\n        opacity: 0.8;\n    }\n\n    .bubble-mute-button {\n        opacity: 1;\n        transition: opacity .2s, transform .2s;\n        transform: translateX(0);\n    }\n\n    .is-hidden {\n        opacity: 0 !important;\n        pointer-events: none;\n        transform: translateX(14px);\n    }\n\n    .bubble-range-fill {\n        z-index: -1;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        left: -100%;\n        transition: all .3s;\n        background-color: var(--accent-color);\n    }\n\n    .is-dragging .bubble-range-fill {\n        transition: none;\n    }\n\n    .is-light .bubble-range-fill {\n        opacity: 0.5;\n    }\n\n    .is-unavailable .bubble-button-card {\n        cursor: not-allowed;\n    }\n\n    .bubble-range-slider {\n        cursor: ew-resize;\n    }\n    .is-unavailable .bubble-range-slider {\n        cursor: not-allowed;\n    }\n\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        width: 38px;\n        height: 38px;\n        min-width: 38px;\n        min-height: 38px;\n        align-items: center;\n        justify-content: center;\n        margin: 6px;\n        border-radius: 50%;\n        background-color: var(--card-background-color, var(--ha-card-background));\n        overflow: hidden;\n        z-index: 1;\n        position: relative;\n        cursor: pointer;\n    }\n\n    .bubble-icon {\n        opacity: 0.6;\n    }\n\n    .is-on .bubble-icon {\n      filter: brightness(1.1);\n      opacity: 1;\n    }\n\n    .bubble-icon,\n    .bubble-mute-button {\n        display: flex;\n        position: absolute;\n        height: 38px;\n        width: 38px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .bubble-entity-picture {\n        background-size: cover;\n        background-position: center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n\n    .bubble-media-info-container {\n        display: flex;\n        line-height: 14px;\n        font-size: 12px;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        margin-left: 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-title,\n    .bubble-name,\n    .bubble-state,\n    .bubble-artist {\n        display: flex;\n        margin: 2px 0;\n        position: relative;\n        white-space: nowrap;\n    }\n\n    .bubble-title {\n        font-weight: 600;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 1em;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        font-weight: 600;\n        margin-left: 4px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        margin: 2px 0;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        opacity: 0.7;\n        margin: 2px 0;\n        font-weight: normal;\n    }\n\n    .bubble-sub-button-container {\n        right: 0 !important;\n    }\n\n    @media screen and (max-width: 250px) {\n        .bubble-previous-button {\n            display: none;\n        }\n    }\n\n    @media screen and (max-width: 206px) {\n        .bubble-next-button {\n            display: none;\n        }\n    }\n\n    @media screen and (max-width: 160px) {\n        .bubble-volume-button {\n            display: none;\n        }\n    }\n\n    @keyframes tap-feedback {\n        0% {transform: translateX(-100%); opacity: 0;}\n        64% {transform: translateX(0); opacity: 0.1;}\n        100% {transform: translateX(100%); opacity: 0;}\n    }\n\n    .large .bubble-media-player-container {\n      height: 64px;\n      border-radius: 34px;\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 28px;\n      min-width: 48px !important;\n      min-height: 48px !important;\n      margin-left: 8px;\n    }\n    \n    .large .bubble-play-pause-button {\n      display: flex;\n      height: 48px;\n      width: 48px;\n      padding: 0;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .large .bubble-volume-slider {\n      height: 48px !important;\n      border-radius: 24px;\n      left: 66px !important;\n      width: calc(100% - 190px) !important;\n    }\n\n    .large .bubble-range-value {\n      place-items: center;\n      height: 48px;\n    }\n\n    .large .bubble-button-container {\n      align-items: center;\n      gap: 14px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(2, 1fr);\n      grid-template-rows: repeat(2, minmax(auto, max-content));\n      grid-auto-flow: column;\n      width: auto;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n";function Q(e){"media-player"!==e.cardType&&function(e){e.dragging=!1,e.elements={},e.elements.mediaPlayerContainer=m("div","bubble-media-player-container"),e.elements.mediaPlayerCard=m("div","bubble-media-player"),e.elements.mediaInfoContainer=m("div","bubble-media-info-container"),e.elements.nameContainer=m("div","bubble-name-container"),e.elements.buttonContainer=m("div","bubble-button-container"),e.elements.iconContainer=m("div","bubble-icon-container"),e.elements.playPauseButton=m("ha-icon","bubble-play-pause-button"),e.elements.previousButton=m("ha-icon","bubble-previous-button"),e.elements.previousButton.setAttribute("icon","mdi:skip-previous"),e.elements.nextButton=m("ha-icon","bubble-next-button"),e.elements.nextButton.setAttribute("icon","mdi:skip-next"),e.elements.volumeButton=m("ha-icon","bubble-volume-button"),e.elements.volumeButton.setAttribute("icon","mdi:volume-high"),e.elements.powerButton=m("ha-icon","bubble-power-button"),e.elements.powerButton.setAttribute("icon","mdi:power-standby"),e.elements.muteButton=m("ha-icon","bubble-mute-button is-hidden"),e.elements.muteButton.setAttribute("icon","mdi:volume-off"),e.elements.title=m("div","bubble-title"),e.elements.artist=m("div","bubble-artist"),e.elements.name=m("div","bubble-name"),e.elements.state=m("div","bubble-state"),e.elements.icon=m("ha-icon","bubble-icon"),e.elements.image=m("div","bubble-entity-picture"),e.elements.style=m("style"),e.elements.customStyle=m("style"),e.elements.style.innerText=K,e.elements.iconContainer.appendChild(e.elements.icon),e.elements.iconContainer.appendChild(e.elements.image),e.elements.iconContainer.appendChild(e.elements.muteButton),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.mediaInfoContainer.appendChild(e.elements.title),e.elements.mediaInfoContainer.appendChild(e.elements.artist),e.elements.buttonContainer.appendChild(e.elements.powerButton),e.elements.buttonContainer.appendChild(e.elements.previousButton),e.elements.buttonContainer.appendChild(e.elements.nextButton),e.elements.buttonContainer.appendChild(e.elements.volumeButton),e.elements.buttonContainer.appendChild(e.elements.playPauseButton),e.elements.mediaPlayerCard.appendChild(e.elements.iconContainer),e.elements.mediaPlayerCard.appendChild(e.elements.mediaInfoContainer),e.elements.mediaPlayerCard.appendChild(e.elements.nameContainer),e.elements.mediaPlayerCard.appendChild(e.elements.buttonContainer),e.content.innerHTML="",e.content.appendChild(e.elements.mediaPlayerContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.mediaPlayerContainer.appendChild(e.elements.mediaPlayerCard),x(e.elements.icon,e.config),x(e.elements.image,e.config),e.elements.volumeSliderContainer=m("div","bubble-volume-slider is-hidden"),function(e,t){let n=0,i=Math.round(100*u(e,"volume_level"))+"%";function o(t){t.stopPropagation();const i=t.pageX||(t.touches?t.touches[0].pageX:0);Math.abs(n-i)>10&&J(e,i,!0)}function a(n){n.stopPropagation(),e.dragging=!1;const i=n.pageX||(n.touches?n.touches[0].pageX:0);J(e,i),t.classList.remove("is-dragging"),t.removeEventListener("pointermove",o),t.removeEventListener("pointerup",a)}e.elements.rangeFill=m("div","bubble-range-fill range-fill"),e.elements.rangeSlider=m("div","bubble-range-slider range-slider"),e.elements.rangeValue=m("div","bubble-range-value"),e.elements.rangeSlider.appendChild(e.elements.rangeValue),e.elements.rangeSlider.appendChild(e.elements.rangeFill),t.appendChild(e.elements.rangeSlider),t.addEventListener("pointercancel",(function(){e.dragging=!1,t.classList.remove("is-dragging"),t.removeEventListener("pointermove",o),t.removeEventListener("pointerup",a)})),t.addEventListener("pointerdown",(i=>{t.setPointerCapture(i.pointerId),e.card.classList.contains("is-unavailable")||(e.dragging=!0,n=i.pageX||(i.touches?i.touches[0].pageX:0),t.classList.add("is-dragging"),t.addEventListener("pointermove",o),t.addEventListener("pointerup",a))})),e.elements.rangeValue.innerText=i}(e,e.elements.volumeSliderContainer),e.elements.mediaPlayerCard.appendChild(e.elements.volumeSliderContainer),e.elements.volumeButton.addEventListener("click",(()=>{e.elements.volumeSliderContainer.classList.toggle("is-hidden"),e.elements.muteButton.classList.toggle("is-hidden"),e.elements.icon.classList.toggle("is-hidden"),e.elements.image.classList.toggle("is-hidden"),function(e){e.elements.volumeButton.isHidden?(e.elements.volumeButton.setAttribute("icon","mdi:volume-high"),e.elements.volumeButton.isHidden=!1):(e.elements.volumeButton.setAttribute("icon","mdi:close"),e.elements.volumeButton.isHidden=!0)}(e)})),e.elements.powerButton.addEventListener("click",(()=>{const t=b(e);e._hass.callService("media_player",t?"turn_off":"turn_on",{entity_id:e.config.entity})})),e.elements.muteButton.addEventListener("click",(()=>{const t=!0===u(e,"is_volume_muted");e._hass.callService("media_player","volume_mute",{entity_id:e.config.entity,is_volume_muted:!t}),e.elements.muteButton.clicked=!0})),e.elements.previousButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_previous_track",{entity_id:e.config.entity})})),e.elements.nextButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_next_track",{entity_id:e.config.entity})})),e.elements.playPauseButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_play_pause",{entity_id:e.config.entity}),e.elements.playPauseButton.clicked=!0})),e.elements.mediaPlayerContainer.addEventListener("click",(()=>a("selection"))),e.cardType="media-player"}(e),function(e){"unavailable"===p(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable"),b(e)?e.card.classList.add("is-on"):e.card.classList.remove("is-on")}(e),function(e){const t=d(e);t!==e.previousName&&(e.elements.name.innerText=t,e.previousName=t,g(e,e.elements.name,t))}(e),function(e){const t=u(e,"media_title"),n=u(e,"media_artist"),i=t+n;i!==e.previousMediaState&&(e.elements.artist.style.display=""===n?"none":"flex",e.previousMediaState=i,g(e,e.elements.title,t),g(e,e.elements.artist,n))}(e),function(e){u(e,"media_title");const t=""===u(e,"media_artist");e.elements.mediaInfoContainer.style.display=t?"none":"",e.elements.nameContainer.style.display=t?"":"none"}(e),function(e){const t=b(e),n=s(e),i=c(e);""!==i?(e.elements.image.style.backgroundImage="url("+i+")",e.elements.icon.style.display="none",e.elements.image.style.display=""):""!==n?(e.elements.icon.icon=n,e.elements.icon.style.color=t?"var(--accent-color)":"inherit",e.elements.icon.style.display="",e.elements.image.style.display="none"):(e.elements.icon.style.display="none",e.elements.image.style.display="none")}(e),U(e),function(e){if(h(e,"media_player")&&!1===e.dragging&&e.elements.rangeFill){const t=100*u(e,"volume_level");e.elements.rangeFill.style.transform=`translateX(${t}%)`}}(e),function(e){const t="playing"===p(e),n=e.elements.playPauseButton.clicked;t?e.elements.playPauseButton.setAttribute("icon",n?"mdi:play":"mdi:pause"):e.elements.playPauseButton.setAttribute("icon",n?"mdi:pause":"mdi:play"),e.elements.playPauseButton.clicked=!1}(e),function(e){const t=!0===u(e,"is_volume_muted"),n=e.elements.muteButton.clicked;e.elements.muteButton.style.color=t?n?"":"var(--accent-color)":n?"var(--accent-color)":"",e.elements.muteButton.clicked=!1}(e),function(e){const t=b(e);e.elements.powerButton.style.color=t?"var(--accent-color)":""}(e),z(e,e.content,e.elements.buttonContainer,!0),function(e){D(e),y(e);const t=p(e),n="off"!==t&&"undefined"!==t;e.config.hide?.power_button&&"none"!==e.elements.powerButton.style.display?e.elements.powerButton.style.display="none":e.config.hide?.power_button||"none"!==e.elements.powerButton.style.display||(e.elements.powerButton.style.display=""),!e.config.hide?.previous_button&&(e.editor||n)||"none"===e.elements.previousButton.style.display?e.config.hide?.previous_button||!e.editor&&!n||"none"!==e.elements.previousButton.style.display||(e.elements.previousButton.style.display=""):e.elements.previousButton.style.display="none",!e.config.hide?.next_button&&(e.editor||n)||"none"===e.elements.nextButton.style.display?e.config.hide?.next_button||!e.editor&&!n||"none"!==e.elements.nextButton.style.display||(e.elements.nextButton.style.display=""):e.elements.nextButton.style.display="none",!e.config.hide?.volume_button&&(e.editor||n)||"none"===e.elements.volumeButton.style.display?e.config.hide?.volume_button||!e.editor&&!n||"none"!==e.elements.volumeButton.style.display||(e.elements.volumeButton.style.display=""):e.elements.volumeButton.style.display="none",!e.config.hide?.play_pause_button&&(e.editor||n)||"none"===e.elements.playPauseButton.style.display?e.config.hide?.play_pause_button||!e.editor&&!n||"none"!==e.elements.playPauseButton.style.display||(e.elements.playPauseButton.style.display=""):e.elements.playPauseButton.style.display="none";let i="";try{i=e.config.styles?Function("hass","entityId","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,l,e.card):""}catch(e){console.error("Error in generating media player custom templates:",e)}e.elements.customStyle&&(e.elements.customStyle.innerText=i)}(e)}const ee=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),te=ee?.prototype.html,ne=ee?.prototype.css;class ie extends HTMLElement{editor=!1;isConnected=!1;connectedCallback(){this.isConnected=!0,this._hass&&this.updateBubbleCard()}disconnectedCallback(){this.isConnected=!1}set editMode(e){this.editor!==e&&(this.editor=e,this._hass&&this.updateBubbleCard())}set hass(e){!function(e){if(!e.content){let t=e.shadowRoot||e.attachShadow({mode:"open"}),n=document.createElement("ha-card");n.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let i=document.createElement("div");i.className="card-content",i.style.padding="0",n.appendChild(i),t.appendChild(n),e.card=n,e.content=i}}(this),this._hass=e,(this.isConnected||"pop-up"===this.config.card_type)&&this.updateBubbleCard()}updateBubbleCard(){switch(this.config.card_type){case"pop-up":X(this);break;case"button":j(this);break;case"separator":"separator"!==(e=this).cardType&&function(e){e.elements={},e.elements.separatorCard=m("div","bubble-separator separator-container"),e.elements.icon=m("ha-icon","bubble-icon"),e.elements.name=m("h4","bubble-name"),e.elements.line=m("div","bubble-line"),e.elements.style=m("style"),e.elements.style.innerText="\n    .bubble-separator {\n        display: flex;\n        width: 100%;\n        padding: 4px 0;\n        align-items: center;\n    }\n    .bubble-icon {\n        display: inline-flex;\n        height: 24px;\n        width: 24px;\n        margin: 0 22px 0 8px;\n    }\n    .bubble-name {\n        margin: 0 30px 0 0;\n        font-size: 16px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    .bubble-name:empty {\n        display: none;\n    }\n    .bubble-line {\n        border-radius: 6px;\n        opacity: 0.5;\n        flex-grow: 1;\n        height: 6px;\n        background-color: var(--background-color, var(--secondary-background-color));\n        margin-right: 14px;\n    }\n    .bubble-sub-button-container {\n        margin: 0 8px;\n        right: 0 !important;\n    }\n\n    .large .bubble-separator {\n        height: 58px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n        flex-direction: column;\n        gap: 4px !important;\n        display: grid !important;\n        grid-template-columns: repeat(2, min-content);\n        grid-template-rows: repeat(2, 1fr);\n        grid-auto-flow: column;\n        width: auto;\n    }\n\n    .rows-2 .bubble-sub-button {\n        height: 20px !important;\n    }\n",e.elements.customStyle=m("style"),e.elements.separatorCard.appendChild(e.elements.icon),e.elements.separatorCard.appendChild(e.elements.name),e.elements.separatorCard.appendChild(e.elements.line),e.content.innerHTML="",e.content.appendChild(e.elements.separatorCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="separator"}(e),function(e){e.elements.icon.icon=s(e),""===e.elements.icon.icon&&""===e.elements.icon.style.margin?(e.elements.icon.style.margin="0px 8px",e.elements.icon.style.width="0px"):""!==e.elements.icon.icon&&"0px 8px"===e.elements.icon.style.margin&&(e.elements.icon.style.margin="",e.elements.icon.style.width="")}(e),function(e){const t=d(e);t!==e.elements.name.innerText&&(e.elements.name.innerText=t)}(e),z(e,e.content,e.elements.separatorCard),function(e){D(e),y(e);const t=p(e);let n="";try{n=e.config.styles?Function("hass","entityId","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon,e.subButtonIcon,l,e.card):""}catch(e){console.error("Error in generating separator custom templates:",e)}e.elements.customStyle&&(e.elements.customStyle.innerText=n)}(e);break;case"cover":!function(e){"cover"!==e.cardType&&function(e){e.elements={},e.elements.coverCardContainer=m("div","bubble-cover-card-container cover-container"),e.elements.headerContainer=m("div","bubble-header header-container"),e.elements.buttonsContainer=m("div","bubble-buttons buttons-container"),e.elements.iconContainer=m("div","bubble-icon-container icon-container"),e.elements.icon=m("ha-icon","bubble-icon"),e.elements.nameContainer=m("div","bubble-name-container name-container"),e.elements.name=m("div","bubble-name name"),e.elements.state=m("div","bubble-state state"),e.elements.buttonOpen=m("div","bubble-button bubble-open button open"),e.elements.buttonStop=m("div","bubble-button bubble-stop button stop"),e.elements.buttonClose=m("div","bubble-button bubble-close button close"),e.elements.iconOpen=m("ha-icon","bubble-icon bubble-icon-open"),e.elements.iconStop=m("ha-icon","bubble-icon bubble-icon-stop"),e.elements.iconStop.icon="mdi:stop",e.elements.iconClose=m("ha-icon","bubble-icon bubble-icon-close"),e.elements.style=m("style"),e.elements.style.innerText="\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n    ha-card {\n        margin-top: 0 !important;\n        background: none !important;\n    }\n\n    .bubble-cover-card-container {\n        display: grid;\n        gap: 10px;\n    }\n\n    .bubble-header {\n        display: flex;\n        align-items: center;\n        overflow: hidden;\n    }\n\n    .bubble-icon-container {\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        min-width: 38px;\n        min-height: 38px;\n        border-radius: 50%;\n        background-color: var(--card-background-color, var(--ha-card-background));\n        border: 6px solid var(--background-color-2, var(--secondary-background-color));\n        cursor: pointer;\n    }\n\n    .bubble-name-container {\n        display: flex;\n        line-height: 1em;\n        flex-direction: column;\n        justify-content: center;\n        flex-grow: 1;\n        font-weight: 600;\n        margin-left: 4px;\n        margin-right: 16px;\n        pointer-events: none;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .bubble-name {\n        margin: 2px 0;\n        white-space: nowrap;\n        display: flex;\n        position: relative;\n    }\n\n    .bubble-state {\n        font-size: 12px;\n        opacity: 0.7;\n        margin: 2px 0;\n        font-weight: normal;\n        white-space: nowrap;\n        display: flex;\n        position: relative;\n    }\n\n    .bubble-buttons {\n        display: grid;\n        align-self: center;\n        grid-auto-flow: column;\n        grid-gap: 18px;\n    }\n\n    .bubble-icon {\n        display: flex; \n        height: 24px; \n        width: 24px; \n        color: var(--primary-text-color);\n    }\n\n    .bubble-button {\n        display: flex;\n        background: var(--background-color-2, var(--secondary-background-color));\n        height: 42px;\n        border-radius: 32px;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: none;\n    }\n\n    .large .bubble-cover-card-container {\n      height: 64px;\n      display: flex;\n      background: var(--background-color-2, var(--secondary-background-color));\n      border-radius: 32px;\n    }\n\n    .large .bubble-buttons .bubble-icon {\n      color: var(--primary-text-color) !important;\n      opacity: 1;\n    }\n\n    .large .bubble-header-container {\n        height: 64px;\n    }\n\n    .large .bubble-header {\n        width: 100%;\n    }\n\n    .large .bubble-icon-container {\n      --mdc-icon-size: 28px;\n      min-width: 48px !important;\n      min-height: 48px !important;\n      margin-left: 2px;\n      align-content: center;\n    }\n\n    .large .bubble-icon {\n      align-items: center;\n    }\n\n    .large .bubble-buttons {\n      display: flex;\n      position: relative;\n      right: 18px;\n      align-self: center;\n      grid-gap: 18px;\n    }\n\n    .large .bubble-sub-button-container {\n      margin-right: 14px;\n    }\n\n    .rows-2 .bubble-sub-button-container {\n      flex-direction: column;\n      gap: 4px !important;\n      display: grid !important;\n      grid-template-columns: repeat(2, min-content);\n      grid-template-rows: repeat(2, 1fr);\n      grid-auto-flow: column;\n      width: auto;\n      padding-right: 14px;\n    }\n\n    .rows-2 .bubble-sub-button {\n      height: 20px !important;\n    }\n",e.elements.customStyle=m("style"),e.elements.iconContainer.appendChild(e.elements.icon),e.elements.headerContainer.appendChild(e.elements.iconContainer),e.elements.headerContainer.appendChild(e.elements.nameContainer),e.elements.nameContainer.appendChild(e.elements.name),e.elements.nameContainer.appendChild(e.elements.state),e.elements.buttonsContainer.appendChild(e.elements.buttonOpen),e.elements.buttonsContainer.appendChild(e.elements.buttonStop),e.elements.buttonsContainer.appendChild(e.elements.buttonClose),e.elements.buttonOpen.appendChild(e.elements.iconOpen),e.elements.buttonOpen.addEventListener("click",(()=>{const t=e.config.open_service??"cover.open_cover",[n,i]=t.split(".");e._hass.callService(n,i,{entity_id:e.config.entity})})),e.elements.buttonStop.appendChild(e.elements.iconStop),e.elements.buttonStop.addEventListener("click",(()=>{const t=e.config.stop_service??"cover.stop_cover",[n,i]=t.split(".");e._hass.callService(n,i,{entity_id:e.config.entity})})),e.elements.buttonClose.appendChild(e.elements.iconClose),e.elements.buttonClose.addEventListener("click",(()=>{const t=e.config.close_service??"cover.close_cover",[n,i]=t.split(".");e._hass.callService(n,i,{entity_id:e.config.entity})})),x(e.elements.iconContainer,e.config),e.content.innerHTML="",e.content.appendChild(e.elements.coverCardContainer),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.elements.coverCardContainer.appendChild(e.elements.headerContainer),e.elements.coverCardContainer.appendChild(e.elements.buttonsContainer),e.elements.coverCardContainer.addEventListener("click",(()=>a("selection"))),e.cardType="cover"}(e),function(e){e.config.icon_open,e.config.icon_close;const t="closed"!==p(e),n="curtain"===u(e,"device_class");e.elements.icon.icon=s(e,e.config.entity,t?e.config.icon_open:e.config.icon_close),e.elements.iconOpen.icon=e.config.icon_up||(n?"mdi:arrow-expand-horizontal":"mdi:arrow-up"),e.elements.iconClose.icon=e.config.icon_down||(n?"mdi:arrow-collapse-horizontal":"mdi:arrow-down")}(e),function(e){const t=d(e);t!==e.elements.previousName&&(e.elements.name.innerText=t,g(e,e.elements.name,t),e.elements.previousName=t)}(e),U(e),z(e,e.content,e.elements.headerContainer),function(e){D(e),y(e);const t=p(e);let n="";try{n=e.config.styles?Function("hass","entityId","state","icon","subButtonIcon","getWeatherIcon","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.elements.icon.icon,e.subButtonIcon,l,e.card):""}catch(e){console.error("Error in generating media player custom templates:",e)}e.elements.customStyle&&(e.elements.customStyle.innerText=n)}(e)}(this);break;case"empty-column":!function(e){"empty-column"!==e.cardType&&function(e){e.elements={},e.elements.emptyColumnCard=m("div","bubble-empty-column empty-column"),e.elements.style=m("style"),e.elements.style.innerText="\n    .empty-column {\n        display: flex;\n        width: 100%;\n    }\n",e.elements.customStyle=m("style"),e.content.innerHTML="",e.content.appendChild(e.elements.emptyColumnCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="empty-column"}(e)}(this);break;case"horizontal-buttons-stack":!function(e){"horizontal-buttons-stack"!==e.cardType&&function(e){e.elements={},e.elements.buttons=[],e.elements.cardContainer=m("div","bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container");let t=1;for(;e.config[t+"_link"];)e.elements.cardContainer.appendChild(Y(e,t)),t++;e.elements.style=m("style"),e.elements.style.innerText="\n    @keyframes from-bottom {\n        0% { transform: translate(-50%, 100px); }\n        26% { transform: translate(-50%, -8px); }\n        46% { transform: translate(-50%, 1px); }\n        62% { transform: translate(-50%, -2px); }\n        70% { transform: translate(-50%, 0); }\n        100% { transform: translate(-50%, 0); }\n    }\n    @keyframes pulse {\n        0% { filter: brightness(0.7); }\n        100% { filter: brightness(1.3); }\n    }\n    ha-card {\n        border-radius: 0;\n    }\n    .horizontal-buttons-stack-card {\n        bottom: 16px;\n        height: 51px;\n        margin-top: 0;\n        position: fixed;\n        width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\n        left: calc(var(--mdc-drawer-width, 0px) + 4px);\n        z-index: 6; /* Higher value hide the more-info panel */\n    }\n    @media only screen and (max-width: 870px) {\n        .horizontal-buttons-stack-card {\n            width: calc(100% - 16px);\n            left: 8px;\n        }\n\n        .horizontal-buttons-stack-card::before {\n            left: -10px;\n        }\n    }\n    .horizontal-buttons-stack-card::before {\n        content: '';\n        position: absolute;\n        top: -32px;\n        display: none;\n        background: linear-gradient(0deg, var(--background-color, var(--primary-background-color)) 50%, rgba(79, 69, 87, 0));\n        width: 200%;\n        height: 100px;\n        pointer-events: none;\n    }\n    .has-gradient.horizontal-buttons-stack-card::before {\n        display: block;\n    }\n\n    .card-content {\n        width: calc(100% + 36px);\n        padding: 0 !important;\n        max-width: calc(var(--desktop-width) - 8px);\n        box-sizing: border-box;\n        overflow: scroll;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n        -ms-overflow-style: none;\n        scrollbar-width: none;\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            #000000 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            transparent 100%\n        );\n    }\n    .is-scrollable.card-content {\n        padding: 0 !important;\n        width: 100%;\n    }\n    .is-scrolled.card-content {\n        padding: 0 !important;\n        width: 100%;\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            transparent 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            transparent 100%\n        );\n    }\n    .is-maxed-scroll.card-content {\n        -webkit-mask-image: linear-gradient(\n            90deg,\n            transparent 0%,\n            #000000 calc(0% + 28px),\n            #000000 calc(100% - 28px),\n            #000000 100%\n        );\n    }\n    .card-content::-webkit-scrollbar {\n        display: none;\n    }\n\n    .bubble-horizontal-buttons-stack-card-container {\n        height: 51px;\n        position: relative;\n        margin: auto;\n    }\n\n    .bubble-button {\n        align-items: center;\n        border-radius: 25px;\n        color: var(--primary-text-color);\n        cursor: pointer;\n        display: inline-flex;\n        height: 50px;\n        left: 0;\n        padding: 0 16px;\n        position: absolute;\n        white-space: nowrap;\n        z-index: 1;\n        transition: transform 1s;\n        box-sizing: border-box;\n    }\n    .bubble-button.highlight {\n        animation: pulse 1.4s infinite alternate;\n    }\n    .bubble-background-color {\n        border: 1px solid var(--primary-text-color);\n        border-radius: 24px;\n        box-sizing: border-box;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        transition: background-color 1s;\n        width: 100%;\n        z-index: -1;\n    }\n    .bubble-background {\n        opacity: 0.8;\n        border-radius: 24px;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box !important;\n        position: absolute;\n        left: 0;\n        z-index: -2;\n        background-color: var(--background-color,var(--primary-background-color));\n    }\n    .bubble-icon {\n        height: 24px;\n        width: 24px;\n    }\n    .bubble-icon + .bubble-name {\n        margin-left: 8px;\n    }\n\n\n    .horizontal-buttons-stack-card.editor {\n        position: relative;\n        width: 100%;\n        left: 0;\n        bottom: 0;\n    }\n    .horizontal-buttons-stack-card.editor::before {\n        background: none;\n    }\n\n",e.elements.customStyle=m("style"),e.card.classList.add("horizontal-buttons-stack-card"),e.card.style.marginLeft=e.config.margin??"",e.config.hide_gradient||e.card.classList.add("has-gradient"),e.card.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.elements.cardContainer.appendChild(e.elements.style),e.elements.cardContainer.appendChild(e.elements.customStyle),e.content.appendChild(e.elements.cardContainer),e.content.addEventListener("scroll",(()=>{e.content.scrollLeft>0?e.content.classList.add("is-scrolled"):e.content.classList.remove("is-scrolled"),e.content.scrollWidth-12<e.content.offsetWidth+e.content.scrollLeft?e.content.classList.add("is-maxed-scroll"):e.content.classList.remove("is-maxed-scroll")})),(e.config.rise_animation??1)&&(e.content.style.animation="from-bottom .6s forwards",setTimeout((()=>{e.content.style.animation="none"}),1500));let n=e.card.parentNode.host;n&&!e.editor&&"hui-card"!==n.parentElement.tagName.toLowerCase()?n.style.padding="0 0 80px":n.parentElement&&!e.editor&&"hui-card"===n.parentElement.tagName.toLowerCase()&&(n.parentElement.style.padding="0 0 80px"),e.cardType="horizontal-buttons-stack"}(e),function(e){const t=p(e);let n="";try{n=e.config.styles?Function("hass","entityId","state","card",`return \`${e.config.styles}\`;`)(e._hass,e.config.entity,t,e.card):""}catch(e){console.error("Error in generating horizontal buttons stack custom templates:",e)}e.elements.customStyle&&(e.elements.customStyle.innerText=n)}(e),function(e){if(!e.config.auto_order)return;const t=e._hass.states;e.elements.buttons.sort(((e,n)=>{if(!t[e.pirSensor])return 1;if(!t[e.pirSensor])return-1;const i=t[e.pirSensor]?.last_updated,o=t[n.pirSensor]?.last_updated;return"on"===t[e.pirSensor]?.state&&"on"===t[n.pirSensor]?.state?i>o?-1:i===o?0:1:"on"===t[e.pirSensor]?.state?-1:"on"===t[n.pirSensor]?.state?1:i>o?-1:i===o?0:1}))}(e),function(e){e.elements.buttons.forEach((t=>{const n=t.index,i=e.config[`${n}_name`]??"",o=e.config[`${n}_icon`]??"",a=e.config[`${n}_pir_sensor`],s=e.config[`${n}_link`],l=e.config[`${n}_entity`];t.pirSensor=a,t.lightEntity=l,t.link=s,i?(t.name.innerText=i,t.name.style.display=""):t.name.style.display="none",o?(t.icon.icon=o,t.icon.style.display=""):t.icon.style.display="none",void 0===s&&(t.remove(),e.elements.buttons=e.elements.buttons.filter((e=>e!==t)),e.elements.buttons.forEach(((e,t)=>{e.index=t+1})))}));let t=e.elements.buttons.length+1;for(;void 0!==e.config[`${t}_link`];){if(!e.elements.buttons.find((e=>e.index===t))){const n=Y(e,t);e.elements.buttons.push(n)}t++}}(e),function(e){const t=e.shadowRoot.host.closest("hui-card-preview, hui-card-options");e.editor||null!==t?(e.elements.cardContainer.classList.add("editor"),e.card.classList.add("editor")):(e.elements.cardContainer.classList.remove("editor"),e.card.classList.remove("editor"))}(e),function(e){let t=0;for(let n=0;n<e.elements.buttons.length;++n){let i=localStorage.getItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`);e.elements.buttons[n].style.width="";const o=e.elements.buttons[n].offsetWidth;e.elements.buttons[n].style.width=`${o}px`,o>0&&(i=o,localStorage.setItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`,`${o}`)),null!==i&&(e.elements.buttons[n].style.transform=`translateX(${t}px)`,e.elements.buttons[n].style.width="",t+=+i+12)}e.elements.cardContainer.style.width=`${t}px`}(e),function(e){e.elements.buttons.forEach((t=>{const i=e._hass.states[t.lightEntity],o=i?.attributes.rgb_color,a=i?.state;if(o){const e=n(o)?"rgba(255, 220, 200, 0.5)":`rgba(${o}, 0.5)`;t.backgroundColor.style.backgroundColor=e,t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"}else"on"==a?(t.backgroundColor.style.backgroundColor="rgba(255, 255, 255, 0.5)",t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"):(t.backgroundColor.style.backgroundColor="rgba(0, 0, 0, 0)",t.backgroundColor.style.borderColor="var(--primary-text-color)")}))}(e),function(e){e.content.scrollWidth>=e.content.offsetWidth?e.content.classList.add("is-scrollable"):e.content.classList.remove("is-scrollable")}(e)}(this);break;case"media-player":Q(this)}var e}setConfig(e){if("pop-up"===e.card_type){if(!e.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.")}else if("horizontal-buttons-stack"===e.card_type){var t={};for(var n in e)if(n.match(/^\d+_icon$/)){var i=n.replace("_icon","_link");if(void 0===e[i])throw new Error("You need to define "+i);if(t[e[i]])throw new Error("You can't use "+e[i]+" twice");t[e[i]]=!0}}else if(("button"===e.card_type||"cover"===e.card_type)&&!e.entity&&"name"!==e.button_type)throw new Error("You need to define an entity");if(window.entityError)throw new Error("You need to define a valid entity");if("button"===e.card_type){const t={...e},n=t.button_type||"switch";t.tap_action=t.tap_action??{action:"more-info"},t.double_tap_action=t.double_tap_action??{action:"state"===n?"more-info":"toggle"},t.hold_action=t.hold_action??{action:"state"===n?"more-info":"toggle"},this.config=t}else this.config=e;this._hass&&this.updateBubbleCard()}getCardSize(){switch(this.config.card_type){case"pop-up":return-1e5;case"button":case"separator":case"empty-column":case"media-player":return 1;case"cover":return 2;case"horizontal-buttons-stack":return 0}}static getConfigElement(){return function(){if(ee){class e extends ee{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config.card_type||""}get _button_type(){return this._config.button_type||("pop-up"===this._config.card_type?"":"switch")}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _text(){return this._config.text||""}get _hash(){return this._config.hash||"#pop-up-name"}get _trigger_entity(){return this._config.trigger_entity||""}get _trigger_state(){return this._config.trigger_state||""}get _trigger_close(){return this._config.trigger_close||!1}get _margin(){return this._config.margin||"7px"}get _margin_top_mobile(){return this._config.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config.margin_top_desktop||"0px"}get _width_desktop(){return this._config.width_desktop||"540px"}get _bg_color(){return this._config.bg_color||""}get _bg_opacity(){return void 0!==this._config.bg_opacity?this._config.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config.bg_blur?this._config.bg_blur:"14"}get _shadow_opacity(){return void 0!==this._config.shadow_opacity?this._config.shadow_opacity:"0"}get _rise_animation(){return void 0===this._config.rise_animation||this._config.rise_animation}get _auto_close(){return this._config.auto_close||""}get _close_on_click(){return this._config.close_on_click||!1}get _close_by_clicking_outside(){return this._config.close_by_clicking_outside??!0}get _background_update(){return this._config.background_update||!1}get _icon_open(){return this._config.icon_open||""}get _icon_close(){return this._config.icon_close||""}get _icon_down(){return this._config.icon_down||""}get _icon_up(){return this._config.icon_up||""}get _open_service(){return this._config.open_service||"cover.open_cover"}get _close_service(){return this._config.close_service||"cover.close_cover"}get _stop_service(){return this._config.stop_service||"cover.stop_cover"}get _auto_order(){return this._config.auto_order||!1}get _highlight_current_view(){return this._config.highlight_current_view||!1}get _show_state(){const e="state"===this._config.card_type;return this._config.show_state||e}get _show_attribute(){const e="state"===this._config.card_type;return this._config.show_attribute||e}get _show_last_changed(){const e="state"===this._config.card_type;return this._config.show_last_changed||this._config.show_last_updated||e}get _attribute(){return this._config.attribute||!1}get _hide_backdrop(){return this._config.hide_backdrop||!1}get _hide_gradient(){return this._config.hide_gradient||!1}get _hide_play_pause_button(){return this._config.hide?.play_pause_button||!1}get _hide_next_button(){return this._config.hide?.next_button||!1}get _hide_previous_button(){return this._config.hide?.previous_button||!1}get _hide_volume_button(){return this._config.hide?.volume_button||!1}get _hide_power_button(){return this._config.hide?.power_button||!1}get _sub_button(){return this._config.sub_button||""}get _button_action(){return this._config.button_action||""}get _tap_action(){return{action:this._config.tap_action?.action||"more-info",navigation_path:this._config.tap_action?.navigation_path||"",url_path:this._config.tap_action?.url_path||"",service:this._config.tap_action?.service||"",target_entity:this._config.tap_action?.target?.entity_id||"",data:this._config.tap_action?.data||""}}get _double_tap_action(){return{action:this._config.double_tap_action?.action||"toggle",navigation_path:this._config.double_tap_action?.navigation_path||"",url_path:this._config.double_tap_action?.url_path||"",service:this._config.double_tap_action?.service||"",target_entity:this._config.double_tap_action?.target?.entity_id||"",data:this._config.double_tap_action?.data||""}}get _hold_action(){return{action:this._config.hold_action?.action||"toggle",navigation_path:this._config.hold_action?.navigation_path||"",url_path:this._config.hold_action?.url_path||"",service:this._config.hold_action?.service||"",target_entity:this._config.hold_action?.target?.entity_id||"",data:this._config.hold_action?.data||""}}render(){if(!this.hass)return te``;const e=document.querySelector("body > home-assistant").shadowRoot.querySelector("hui-dialog-edit-card").shadowRoot.querySelector("ha-dialog > div.content > div.element-preview");if("sticky"!==e.style.position&&(e.style.position="sticky",e.style.top="0"),!this.listsUpdated){const l=e=>({label:e,value:e});this.allEntitiesList=Object.keys(this.hass.states).map(l),this.lightList=Object.keys(this.hass.states).filter((e=>"light"===e.substr(0,e.indexOf(".")))).map(l),this.sensorList=Object.keys(this.hass.states).filter((e=>"sensor"===e.substr(0,e.indexOf(".")))).map(l),this.binarySensorList=Object.keys(this.hass.states).filter((e=>"binary_sensor"===e.substr(0,e.indexOf(".")))).map(l),this.coverList=Object.keys(this.hass.states).filter((e=>"cover"===e.substr(0,e.indexOf(".")))).map(l),this.mediaPlayerList=Object.keys(this.hass.states).filter((e=>"media_player"===e.substr(0,e.indexOf(".")))).map(l),this.attributeList=Object.keys(this.hass.states[this._entity]?.attributes||{}).map((e=>{let t=this.hass.states[this._entity];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})),this.cardTypeList=[{label:"Button (Switch, slider, ...)",value:"button"},{label:"Cover",value:"cover"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Media player",value:"media-player"},{label:"Pop-up",value:"pop-up"},{label:"Separator",value:"separator"}],this.buttonTypeList=[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}],this.tapActionTypeList=[{label:"More info",value:"more-info"},{label:"Toggle",value:"toggle"},{label:"Navigate",value:"navigate"},{label:"URL",value:"url"},{label:"Call service",value:"call-service"},{label:"No action",value:"none"}],this.listsUpdated=!0}const n=this.allEntitiesList,i=(this.lightList,this.sensorList,this.coverList),o=this.cardTypeList,a=this.buttonTypeList,s="name"===this._config.button_type;if("pop-up"===this._config.card_type)return te`
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
                                <ha-alert alert-type="info">This allows you to open this pop-up based on the state of any entity, for example you can open a "Security" pop-up with a camera when a person is in front of your house. You can also create a toggle helper (input_boolean) and trigger its opening/closing in an automation.</ha-alert>
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
                                        <ha-alert alert-type="info">Set this toggle to true on the first pop-up of your main dashboard to disable the backdrop on all pop-ups.</ha-alert>
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
                `;if("button"===this._config.card_type)return te`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",o)}
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
                `;if("separator"===this._config.card_type)return te`
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
                `;if("horizontal-buttons-stack"===this._config.card_type){if(!this.buttonAdded)for(this.buttonAdded=!0,this.buttonIndex=0;this._config[this.buttonIndex+1+"_link"];)this.buttonIndex++;function r(){this.buttonIndex++,this.requestUpdate()}return te`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",o)}
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
                `}return"cover"===this._config.card_type?te`
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
                `:"media-player"===this._config.card_type?te`
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
                `:"empty-column"===this._config.card_type?te`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",o)}
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
                `:this._config.card_type?void 0:te`
                    <div class="card-config">
                        ${this.makeDropdown("Card type","card_type",o)}
                        <ha-alert alert-type="info">You need to add a card type first. Please not that in some cases, a page refresh might be needed after exiting the editor.</ha-alert>
                        <img style="width: 100%; height: auto; border-radius: 24px;" src="https://raw.githubusercontent.com/Clooos/Bubble-Card/main/.github/bubble-card.gif">
                        <p>The <b>Bubble Card ${t}</b> changelog is available <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${t}"><b>here</b></a>.
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
                `}makeLayoutOptions(){return te`
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
            `}makeShowState(e=this._config,t="",n=!1,i){const o=e?.entity??this._config.entity??"",a="name"===this._config.button_type,s=Object.keys(this.hass.states[o]?.attributes||{}).map((e=>{let t=this.hass.states[o];return{label:this.hass.formatEntityAttributeName(t,e),value:e}}));return te`
                ${"sub_button"!==n?te`
                    <ha-formfield .label="Optional - Text scrolling effect">
                        <ha-switch
                            aria-label="Optional - Text scrolling effect"
                            .checked=${e?.scrolling_effect??!0}
                            .configValue="${t+"scrolling_effect"}"
                            @change="${n?e=>this._arrayValueChange(i,{scrolling_effect:e.target.checked},n):this._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Text scrolling effect</label> 
                        </div>
                    </ha-formfield>
                `:""}
                ${"sub_button"===n?te`
                    <ha-formfield .label="Optional - Show background">
                        <ha-switch
                            aria-label="Optional - Show background when entity is on"
                            .checked=${e?.show_background??!0}
                            @change="${e=>this._arrayValueChange(i,{show_background:e.target.checked},n)}"
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
                        @change="${n?e=>this._arrayValueChange(i,{show_icon:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show icon</label> 
                    </div>
                </ha-formfield>
                ${"sub_button"!==n?te`
                    <ha-formfield .label="Optional - Prioritize icon over entity picture">
                        <ha-switch
                            aria-label="Optional - Prioritize icon over entity picture"
                            .checked=${e?.force_icon??!1}
                            .configValue="${t+"force_icon"}"
                            .disabled="${a}"
                            @change="${n?e=>this._arrayValueChange(i,{force_icon:e.target.checked},n):this._valueChanged}"
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
                        @change="${n?e=>this._arrayValueChange(i,{show_name:e.target.checked},n):this._valueChanged}"
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
                        .disabled="${a}"
                        @change="${n?e=>this._arrayValueChange(i,{show_state:e.target.checked},n):this._valueChanged}"
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
                        .disabled="${a}"
                        @change="${n?e=>this._arrayValueChange(i,{show_last_changed:e.target.checked},n):this._valueChanged}"
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
                        .disabled="${a}"
                        @change="${n?e=>this._arrayValueChange(i,{show_attribute:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Optional - Show attribute</label> 
                    </div>
                </ha-formfield>
                ${e?.show_attribute?te`
                    <div class="ha-combo-box">
                        <ha-combo-box
                            label="Optional - Attribute to show"
                            .value="${e?.attribute}"
                            .configValue="${t+"attribute"}"
                            .items="${s}"
                            .disabled="${a}"
                            @value-changed="${n?e=>this._arrayValueChange(i,{attribute:e.detail.value},n):this._valueChanged}"
                        ></ha-combo-box>
                    </div>
                `:""}
            `}makeDropdown(e,t,n,i){return e.includes("icon")||e.includes("Icon")?te`
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
                `:te`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="${e}"
                        .value="${this["_"+t]}"
                        .configValue="${t}"
                        .items="${n}"
                        .disabled="${i}"
                        @value-changed="${this._valueChanged}"
                    ></ha-combo-box>
                </div>
              `}makeTapActionPanel(e,t=this._config,n,i,o=this._config){this.hass;const a="Tap action"===e?"mdi:gesture-tap":"Double tap action"===e?"mdi:gesture-double-tap":"mdi:gesture-tap-hold",s="Tap action"===e?t.tap_action:"Double tap action"===e?t.double_tap_action:t.hold_action,l="Tap action"===e?"tap_action":"Double tap action"===e?"double_tap_action":"hold_action",r=t===this._config;return n||(n=r&&"Tap action"===e?"name"!==this._config.button_type?"more-info":"none":r?"name"!==this._config.button_type?"toggle":"none":""),te`
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
                                @value-changed="${e=>this._tapActionValueChange(o,{[l]:{action:e.detail.value}},i)}"
                            ></ha-combo-box>
                        </div>
                        ${"navigate"===s?.action?te`
                            <div class="ha-textfield">
                                <ha-textfield
                                    label="Navigation path"
                                    .value="${s?.navigation_path??""}"
                                    @input="${e=>this._tapActionValueChange(o,{[l]:{navigation_path:e.target.value}},i)}"
                                ></ha-textfield>
                            </div>
                        `:""}
                        ${"url"===s?.action?te`
                            <div class="ha-textfield">
                                <ha-textfield
                                    label="URL path"
                                    .value="${s?.url_path??""}"
                                    @input="${e=>this._tapActionValueChange(o,{[l]:{url_path:e.target.value}},i)}"
                                ></ha-textfield>
                            </div>
                        `:""}
                        ${"call-service"===s?.action?te`
                            <div class="ha-textfield">
                                <ha-textfield
                                    label="Service"
                                    .value="${s?.service??""}"
                                    @input="${e=>this._tapActionValueChange(o,{[l]:{service:e.target.value}},i)}"
                                ></ha-textfield>
                            </div>
                            <div class="ha-combo-box">
                                <ha-combo-box
                                    label="Entity"
                                    .value="${s?.target?.entity_id}"
                                    .items="${this.allEntitiesList}"
                                    @value-changed="${e=>{this._tapActionValueChange(o,{[l]:{target:{entity_id:e.detail.value}}},i)}}"
                                ></ha-combo-box>
                            </div>
                        `:""}
                        ${"call-service"===s?.action&&s?.service?te`
                            <ha-alert alert-type="info">For now, you still need to switch to the YAML editor if you want to add <code>data:</code> to your service.</ha-alert>
                        `:""}
                    </div>
                </ha-expansion-panel>
            `}makeSubButtonPanel(){const e=this._config?.sub_button?.map(((e,t)=>{if(!e)return;const n="sub_button."+t+".";return te`
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:border-radius"></ha-icon>
                        ${this._config.sub_button[t]?"Button "+(t+1)+(e.name?" - "+e.name:""):"New button"}
                        <button class="icon-button header" @click="${n=>{n.stopPropagation();let i=[...this._config.sub_button];i.splice(t,1),this._config.sub_button=i,this._valueChanged({target:{configValue:"sub_button."+(t-1),value:e}}),this.requestUpdate()}}">
                          <ha-icon icon="mdi:delete"></ha-icon>
                        </button>
                        ${t>0?te`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t>0){let e=[...this._config.sub_button];[e[t],e[t-1]]=[e[t-1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
                          <ha-icon icon="mdi:arrow-left"></ha-icon>
                        </button>`:""}
                        ${t<this._config.sub_button.length-1?te`<button class="icon-button header" @click="${e=>{if(e.stopPropagation(),t<this._config.sub_button.length-1){let e=[...this._config.sub_button];[e[t],e[t+1]]=[e[t+1],e[t]],this._config.sub_button=e,this._valueChanged({target:{configValue:"sub_button."+t,value:this._config.sub_button[t]}})}this.requestUpdate()}}">
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
                        <ha-expansion-panel outlined>
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
            `}));return te`
            <ha-expansion-panel outlined>
              <h4 slot="header">
                <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
                Sub-buttons editor
              </h4>
              <div class="content">
                ${e}
                <button class="icon-button" @click="${()=>{this._config.sub_button||(this._config.sub_button=[]);let e={entity:this._config.entity};this._config.sub_button=[...this._config.sub_button],this._config.sub_button.push(e),o(this,"config-changed",{config:this._config}),this.requestUpdate()}}">
                  <ha-icon icon="mdi:plus"></ha-icon>
                  New sub-button
                </button>
                <ha-alert alert-type="info">Add new customized buttons fixed to the right.</ha-alert>
              </div>
            </ha-expansion-panel>
          `}makeButton(){let e=[];for(let t=1;t<=this.buttonIndex;t++)e.push(te`
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
                `);return e}makeVersion(){return te`
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
                        ${t}
                    </span>
                </h4>
            `}removeButton(e){delete this._config[e+"_name"],delete this._config[e+"_icon"],delete this._config[e+"_link"],delete this._config[e+"_entity"],delete this._config[e+"_pir_sensor"];for(let t=e;t<this.buttonIndex;t++)this._config[t+"_name"]=this._config[t+1+"_name"],this._config[t+"_icon"]=this._config[t+1+"_icon"],this._config[t+"_link"]=this._config[t+1+"_link"],this._config[t+"_entity"]=this._config[t+1+"_entity"],this._config[t+"_pir_sensor"]=this._config[t+1+"_pir_sensor"];delete this._config[this.buttonIndex+"_name"],delete this._config[this.buttonIndex+"_icon"],delete this._config[this.buttonIndex+"_link"],delete this._config[this.buttonIndex+"_entity"],delete this._config[this.buttonIndex+"_pir_sensor"],this.buttonIndex--,o(this,"config-changed",{config:this._config})}makeStyleEditor(){return te`
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:code-braces"></ha-icon>
                        Custom styles
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
                        <ha-alert alert-type="info">For advanced users, you can edit the CSS style of this card in this editor. For more information, you can go <a href="https://github.com/Clooos/Bubble-Card#styling">here</a>. You don't need to add <code>styles: |</code>, it will be added automatically.</ha-alert>
                    </div>
                </ha-expansion-panel>
            `}_valueChanged(e){const t=e.target,n=e.detail;let i;if("HA-SWITCH"===t.tagName?i=t.checked:void 0!==t.value&&(i="string"==typeof t.value?t.value.replace(",","."):t.value),"string"==typeof i&&(i.endsWith(".")||"-"===i))return;const{configValue:a,checked:s}=t;if(a){const o=a.split(".");let s=this._config;for(let e=0;e<o.length-1;e++)s[o[e]]=s[o[e]]||{},s=s[o[e]];"input"===e.type?s[o[o.length-1]]=i:n&&s[o[o.length-1]]!==n.value?s[o[o.length-1]]=n.value:"HA-SWITCH"===t.tagName&&(s[o[o.length-1]]=i)}o(this,"config-changed",{config:this._config}),this.requestUpdate()}_arrayValueChange(e,t,n){this._config[n]=this._config[n]||[];let i=[...this._config[n]];i[e]=i[e]||{},i[e]={...i[e],...t},this._config[n]=i,o(this,"config-changed",{config:this._config}),this.requestUpdate()}_tapActionValueChange(e,t,n){if(void 0===n)for(let e in t)this._config[e]={...this._config[e],...t[e]};else{this._config[n]=this._config[n]||(n?{}:[]);let i=Array.isArray(this._config[n])?[...this._config[n]]:{...this._config[n]};if(Array.isArray(i)){i[e]=i[e]||{};let n={...i[e]};for(let e in t)n[e]=e in n?{...n[e],...t[e]}:t[e];i[e]=n}else for(let e in t)i.hasOwnProperty(e)?i[e]={...i[e],...t[e]}:i[e]=t[e];this._config[n]=i}o(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return ne`
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
            `}}return customElements.get("bubble-card-editor")||customElements.define("bubble-card-editor",e),e}console.error("The Bubble Card editor needs LitElement to be defined")}(),document.createElement("bubble-card-editor")}getLayoutOptions(){let e=1;"pop-up"===this.config.card_type?e=0:"horizontal-buttons-stack"===this.config.card_type?e=1:["cover"].includes(this.config.card_type)&&(e=2);let t=4;return"pop-up"===this.config.card_type?t=0:"horizontal-buttons-stack"===this.config.card_type&&(t=4),{grid_columns:this.config.columns??t,grid_rows:this.config.rows??e}}}customElements.define("bubble-card",ie),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch.",documentationURL:"https://github.com/Clooos/Bubble-Card/"}),console.info(`%c Bubble Card %c ${t} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})();
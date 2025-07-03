/*! For license information please see bubble-card.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={26:(e,t,n)=>{n.d(t,{O:()=>a});var o=n(490);function a(e,t=e.elements,n=e.config.entity,a){if(t.currentState=e._hass.states[n]?.state,!t.currentState)return;if(t.currentList=n?.startsWith("input_select")||n?.startsWith("select")?e._hass.states[n].attributes.options:e._hass.states[n].attributes[a.select_attribute],t.currentSelectedAttribute=(0,o.aX)(e._hass.states[n],a.select_attribute),t.previousList===t.currentList&&t.previousState===t.currentState&&t.previousSelectedAttribute===t.currentSelectedAttribute)return;let i=t.currentList;for(t.currentState;t.dropdownSelect.firstChild;)t.dropdownSelect.removeChild(t.dropdownSelect.firstChild);Array.isArray(i)&&i.forEach(i=>{const r=document.createElement("mwc-list-item");r.value=i;const s=(0,o.z_)(e,e._hass.states[n],a.select_attribute,i);s&&(r.graphic="icon",r.appendChild(s));const l=(0,o.PW)(e,e._hass.states[n],a.select_attribute,i);r.appendChild(document.createTextNode(l)),i===t.currentSelectedAttribute&&r.setAttribute("selected",""),t.dropdownSelect.appendChild(r)}),t.previousList=t.currentList,t.previousState=t.currentState,t.previousSelectedAttribute=t.currentSelectedAttribute,t.dropdownContainer.appendChild(t.dropdownSelect)}},76:(e,t,n)=>{function o(e,t){try{if(e.states[t])return e.states[t]?.state}catch{}}function a(e,t){const n=e.entity_id||e.entity,a=n&&t.states[n]?t.states[n]:null,r=a?e.attribute&&a.attributes?a.attributes[e.attribute]:a.state:"unavailable";let s=e.state??e.state_not;if(Array.isArray(s)){const e=s.map(e=>o(t,e)).filter(e=>void 0!==e);s=[...s,...e]}else if("string"==typeof s){const e=o(t,s);s=[s],e&&s.push(e)}return null!=e.state?i(s).includes(r):null!=e.state_not&&!i(s).includes(r)}function i(e){return void 0===e||Array.isArray(e)?e:[e]}function r(e,t){return e.every(e=>{if("condition"in e)switch(e.condition){case"screen":return!!(n=e).media_query&&matchMedia(n.media_query).matches;case"user":return function(e,t){return!(!e.users||!t.user?.id)&&e.users.includes(t.user.id)}(e,t);case"numeric_state":return function(e,t){const n=e.entity_id||e.entity,a=(n?t.states[n]:void 0)?.state;let i=e.above,r=e.below;"string"==typeof i&&(i=o(t,i)??i),"string"==typeof r&&(r=o(t,r)??r);const s=Number(a),l=Number(i),c=Number(r);return!isNaN(s)&&(null==e.above||isNaN(l)||l<s)&&(null==e.below||isNaN(c)||c>s)}(e,t);case"and":return function(e,t){return!e.conditions||r(e.conditions,t)}(e,t);case"or":return function(e,t){return!e.conditions||e.conditions.some(e=>r([e],t))}(e,t);default:return a(e,t)}var n;return a(e,t)})}function s(e){return null!=(e.entity_id||e.entity)&&(null!=e.state||null!=e.state_not)}function l(e){return e.every(e=>{if("condition"in e)switch(e.condition){case"screen":return null!=e.media_query;case"user":return null!=e.users;case"numeric_state":return function(e){return null!=(e.entity_id||e.entity)&&(null!=e.above||null!=e.below)}(e);case"and":case"or":return function(e){return null!=e.conditions}(e);default:return s(e)}return s(e)})}n.d(t,{XH:()=>r,db:()=>l,eC:()=>i})},87:(e,t,n)=>{n.d(t,{Qp:()=>l,VA:()=>s,sW:()=>i,w1:()=>r});var o=n(537),a=n(273);function i(e,t=e.config.entity,n=e.config.icon){const a=t?.split(".")[0],i=(0,o.D$)(e,"device_class",t),r=(0,o.D$)(e,"icon",t),s=n,l=(0,o.Gu)(e,t),c={alarm_control_panel:"mdi:shield",alert:"mdi:alert",automation:"mdi:playlist-play",binary_sensor:function(){const n="off"===l;switch((0,o.D$)(e,"device_class",t)){case"battery":return n?"mdi:battery":"mdi:battery-outline";case"battery_charging":return n?"mdi:battery":"mdi:battery-charging";case"cold":return n?"mdi:thermometer":"mdi:snowflake";case"connectivity":return n?"mdi:server-network-off":"mdi:server-network";case"door":return n?"mdi:door-closed":"mdi:door-open";case"garage_door":return n?"mdi:garage":"mdi:garage-open";case"heat":return n?"mdi:thermometer":"mdi:fire";case"light":return n?"mdi:brightness-5":"mdi:brightness-7";case"lock":return n?"mdi:lock":"mdi:lock-open";case"moisture":return n?"mdi:water-off":"mdi:water";case"motion":return n?"mdi:motion-sensor-off":"mdi:motion-sensor";case"occupancy":case"presence":return n?"mdi:home-outline":"mdi:home";case"opening":return n?"mdi:square":"mdi:square-outline";case"plug":case"power":return n?"mdi:power-plug-off":"mdi:power-plug";case"running":return n?"mdi:stop":"mdi:play";case"safety":case"tamper":return n?"mdi:check-circle":"mdi:alert-circle";case"smoke":return n?"mdi:check-circle":"mdi:smoke";case"sound":return n?"mdi:music-note-off":"mdi:music-note";case"update":return n?"mdi:package":"mdi:package-up";case"vibration":return n?"mdi:crop-portrait":"mdi:vibrate";case"window":return n?"mdi:window-closed":"mdi:window-open";default:return n?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}}(),calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",cover:function(){const n="closed"!==l;switch((0,o.D$)(e,"device_class",t)){case"awning":return n?"mdi:awning-outline":"mdi:awning";case"blind":return n?"mdi:blinds-open":"mdi:blinds";case"curtain":return n?"mdi:curtains":"mdi:curtains-closed";case"damper":case"shutter":default:return n?"mdi:window-shutter-open":"mdi:window-shutter";case"door":return n?"mdi:door-open":"mdi:door-closed";case"garage":return n?"mdi:garage-open":"mdi:garage";case"gate":return n?"mdi:gate-open":"mdi:gate";case"shade":return n?"mdi:roller-shade":"mdi:roller-shade-closed";case"window":return n?"mdi:window-open":"mdi:window-closed"}}(),device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",lock:"mdi:lock",mailbox:"mdi:mailbox",media_player:"mdi:speaker",mower:"mdi:robot-mower",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:file-document",sensor:function(){switch((0,o.D$)(e,"device_class",t)){case"battery":return 100==l?"mdi:battery":l>=90?"mdi:battery-90":l>=80?"mdi:battery-80":l>=70?"mdi:battery-70":l>=60?"mdi:battery-60":l>=50?"mdi:battery-50":l>=40?"mdi:battery-40":l>=30?"mdi:battery-30":l>=20?"mdi:battery-20":l>=10?"mdi:battery-10":"mdi:battery-alert";case"humidity":return"mdi:water-percent";case"illuminance":return"mdi:brightness-5";case"temperature":return"mdi:thermometer";case"pressure":return"mdi:gauge";case"power":return"mdi:flash";case"signal_strength":return"mdi:wifi";case"energy":return"mdi:lightning-bolt";default:return"mdi:eye"}}(),simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:function(n=(0,o.Gu)(e,t)){switch(n){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}(),weblink:"mdi:open-in-new"};return s||r||(c[a]?c[a]:c[i]?c[i]:"")}function r(e){switch(e){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}function s(e,t=e.config.entity,n=1){const{card_type:i,use_accent_color:r}=e.config,s=(0,o.D$)(e,"rgb_color",t),l=(0,o.GM)("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))")?n-.2:n,c=t===e.config.entity&&(0,o.D$)(e,"unit_of_measurement",t)?.includes("°"),d=t===e.config.entity&&e._hass.states[t]?.state?.match(/\d+/);if(!t||c||d)return"var(--bubble-icon-color)";if((0,o.md)(e,"light")&&!r?"button"===i?e.card.classList.add("is-light"):"pop-up"===i&&e.elements.headerContainer.classList.add("is-light"):"button"===i?e.card.classList.remove("is-light"):"pop-up"===i&&e.elements.headerContainer.classList.remove("is-light"),!t.startsWith("light.")||r)return"var(--bubble-accent-color, var(--bubble-default-color))";const u=(0,o.f9)([225,225,210],l);if(!s)return`var(--bubble-light-color, rgba(${u.join(", ")}))`;const p=(0,o.f9)(s,l);return(0,a.qd)(s)?`var(--bubble-light-color, rgba(${u.join(", ")}))`:`var(--bubble-light-color, rgba(${p.join(", ")}))`}function l(e,t=e.config.entity){if(e.config.force_icon)return"";const n=(0,o.D$)(e,"entity_picture_local",t)||(0,o.D$)(e,"entity_picture",t);return n?e._hass.hassUrl(n):""}},198:(e,t,n)=>{n.d(t,{AQ:()=>u,Kr:()=>d});var o=n(537),a=n(207),i=n(26),r=n(76),s=n(491),l=n(87),c=n(490);function d(e,t=e.config.sub_button){(function(e,t){if(!t)return;e.previousValues=e.previousValues||{};const n=[...e.previousValues.subButtons||[]];t.forEach((t,n)=>{if(!t)return;const d=function(e,t,n){const a=t.entity??e.config.entity;return{index:n,entity:a,context:e,state:e._hass.states[a],name:t.name??(0,o.D$)(e,"friendly_name",a)??"",attributeType:t.attribute??"",attribute:(0,o.D$)(e,t.attribute??"",a),isOn:(0,o.$C)(e,a),showName:t.show_name??!1,showState:t.show_state??!1,showAttribute:t.show_attribute??!1,showLastChanged:t.show_last_changed??!1,showLastUpdated:t.show_last_updated??!1,showIcon:t.show_icon??!0,showBackground:t.show_background??!0,stateBackground:t.state_background??!0,lightBackground:t.light_background??!0,showArrow:t.show_arrow??!0,isSelect:a?.startsWith("input_select")||a?.startsWith("select")||t.select_attribute,icon:(0,l.sW)(e,a,t.icon??"")}}(e,t,n+1);if("fan_modes"===d.attributeType&&null==d.attribute)return void(e.elements[d.index]||(0,o.n)("div",`bubble-sub-button bubble-sub-button-${d.index}`)).classList.add("hidden");let u=e.elements[d.index];if((!u||d.isSelect&&!u.dropdownContainer)&&(u=(0,a.n)(e,d.index,d.isSelect,d.showArrow,d.entity,t)),t.hide_when_parent_unavailable&&e.config.entity&&!e.detectedEditor){if("unavailable"===(0,o.Gu)(e,e.config.entity))return void(u.style.display="none");"none"===u.style.display&&(u.style.display="")}!function(e,t,n){(function(e,t,n){const{isSelect:o,showArrow:a,entity:r,subButton:s}=n;if(o&&t.dropdownSelect){const n=e._hass.states[r]?.state,o=e.previousValues[r]?.state;n!==o&&(n&&t.dropdownSelect.value!==n&&(t.dropdownSelect.value=n,t.dropdownSelect.dispatchEvent(new Event("change",{bubbles:!0}))),e.previousValues[r]={state:n}),(0,i.O)(e,t,r,s),function(e,t){t?(e.dropdownArrow.style.display="",e.dropdownContainer.style.width="24px"):(e.dropdownArrow.style.display="none",e.dropdownContainer.style.width="0px",e.style.padding="6px")}(t,a)}else t.contains(t.dropdownContainer)&&t.removeChild(t.dropdownContainer)})(e,t,n),function(e,t){const{showBackground:n,isOn:a,stateBackground:i,lightBackground:r,entity:s,context:c}=t;if(!n)return void e.classList.remove("background-on","background-off");const d=(0,o.GM)("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))");a&&i?(r&&e.style.setProperty("--bubble-sub-button-light-background-color",(0,l.VA)(c,s,d?1:.8)),e.classList.add("background-on"),e.classList.remove("background-off")):(e.classList.add("background-off"),e.classList.remove("background-on"))}(t,n),function(e,t){const{subButton:n,isSelect:o,entity:a}=t;if(("none"!==n.tap_action?.action||"none"!==n.double_tap_action?.action||"none"!==n.hold_action?.action)&&!e.actionAdded){const t={tap_action:{action:o?"none":"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}};o?e.setAttribute("no-slide",""):(0,s.dN)(e,o?"":n,a,t),(0,s.pd)(e,e.feedback),o&&(e.style.pointerEvents="auto",e.style.cursor="pointer"),e.actionAdded=!0}}(t,n);const a=function(e,t){const{state:n,name:a,attribute:i,attributeType:r,showName:s,showState:l,showAttribute:c,showLastChanged:d,showLastUpdated:u}=e,p=[];if(s&&a&&"unknown"!==a&&p.push(a),n&&l&&"unknown"!==n.state&&p.push(t._hass.formatEntityState(n)),n&&d&&"unknown"!==n.last_changed&&p.push((0,o.r6)(n.last_changed,t._hass.locale.language)),n&&u&&"unknown"!==n.last_updated&&p.push((0,o.r6)(n.last_updated,t._hass.locale.language)),n&&c)if(r.includes("forecast")){const e="°C"===t._hass.config.unit_system.temperature,n="km"===t._hass.config.unit_system.length;if(r.includes("temperature")&&null!=i){const t=parseFloat(i);p.push((0===t||0===t?"0":t.toFixed(1).replace(/\.0$/,""))+(e?" °C":" °F"))}else r.includes("humidity")&&null!=i?p.push(parseFloat(i).toFixed(0)+" %"):r.includes("precipitation")&&null!=i?p.push(parseFloat(i).toFixed(1).replace(/\.0$/,"")+" mm"):r.includes("wind_speed")&&null!=i?p.push(parseFloat(i).toFixed(1).replace(/\.0$/,"")+(n?" km/h":" mph")):null!=i&&"unknown"!==i&&p.push(i)}else{const e=t._hass.formatEntityAttributeValue(n,r),o=n.attributes?.[r],a=e&&"string"==typeof e&&e.trim().startsWith("0")&&e.trim().length>1;(0!==i&&"unknown"!==i&&null!=i||a)&&"unknown"!==o&&null!=o&&p.push(e??i)}return p.length?p.join(" · ").charAt(0).toUpperCase()+p.join(" · ").slice(1):""}(n,e);(function(e,t,n){const{showIcon:o,isSelect:a}=t;if(!e._hasVisibilityConditions){const t=!n&&!o&&!a;e.classList.toggle("hidden",t)}e.dropdownContainer&&(e.dropdownContainer.classList.toggle("no-icon-select-container",!n&&!o&&a),e.dropdownArrow.classList.toggle("no-icon-select-arrow",!n&&!o&&a))})(t,n,a),t.nameContainer.textContent!==a&&(t.nameContainer.textContent=a);const r=!(!n.isSelect||!t.dropdownSelect)&&Array.from(t.dropdownSelect.children).find(e=>e.hasAttribute("selected"))?.value;if(n.showIcon&&n.icon){let i=t.icon;if(i||(i=(0,o.n)("ha-icon","bubble-sub-button-icon"),i.classList.add("show-icon"),t.appendChild(i),t.icon=i),r){const o=(0,c.z_)(e,n.state,n.subButton.select_attribute,r);o&&!n.subButton.icon?(i.tagName!==o.tagName||i.icon!==o.icon||i.attribute!==o.attribute||i.attributeValue!==o.attributeValue)&&(t.replaceChild(o,i),t.icon=o,i=o):i.icon!==n.icon&&i.setAttribute("icon",n.icon)}else i.icon!==n.icon&&i.setAttribute("icon",n.icon);i.classList.remove("hidden"),i.classList.add("bubble-sub-button-icon","show-icon"),i.classList.toggle("icon-with-state",!!a),i.classList.toggle("icon-without-state",!a)}else t.icon&&(t.icon.classList.remove("show-icon"),t.icon.classList.add("hidden"));t.icon?.getAttribute("icon")!==t.icon?.icon&&t.icon.setAttribute("icon",t.icon.icon)}(e,u,{...d,subButton:t}),function(e,t,n){const o=t.visibility;if(null!=o){e._hasVisibilityConditions=!0;const t=(0,r.eC)(o);if((0,r.db)(t)){const o=(0,r.XH)(t,n);void 0!==e._previousVisibilityState&&e._previousVisibilityState===o||(e.classList.toggle("hidden",!o),e._previousVisibilityState=o)}}else e._hasVisibilityConditions=!1}(u,t,e._hass)}),function(e,t,n){for(let o=t.length;o>n.length;o--){const t=e.elements[o];t&&(e.elements.subButtonContainer.removeChild(t),delete e.elements[o])}}(e,n,t),e.previousValues.subButtons=t.slice()})(e,t),function(e){Array.isArray(e.subButtonIcon)||(e.subButtonIcon=[]);("pop-up"===e.config.card_type?e.popUp:e.content).querySelectorAll(".bubble-sub-button-icon").forEach((t,n)=>{e.subButtonIcon[n]=t})}(e)}function u(e){const t=e.config.sub_button;return t&&Array.isArray(t)?t.map(t=>{if(!t)return"";const n=t.entity??e.config.entity;return e._hass.states[n]?.state??""}):[]}},207:(e,t,n)=>{n.d(t,{n:()=>s,g:()=>r});var o=n(537),a=n(352);const i=".bubble-sub-button-container {\n    position: relative;\n    display: flex;\n    justify-content: end;\n    right: 8px;\n    align-content: center;\n    gap: 8px;\n    align-items: center;\n}\n\n.bubble-sub-button {\n    display: flex;\n    flex-wrap: nowrap;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    right: 0;\n    box-sizing: border-box;\n    width: min-content;\n    min-width: 36px;\n    height: 36px;\n    vertical-align: middle;\n    font-size: 12px;\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\n    padding: 0 8px;\n    white-space: nowrap;\n    transition: all 0.5s ease-in-out;\n    color: var(--primary-text-color);\n}\n\n.bubble-sub-button-name-container {\n    display: flex;\n}\n\n.show-icon {\n    display: flex;\n    --mdc-icon-size: 16px;\n}\n\n.bright-background {\n    color: var(--bubble-sub-button-dark-text-color, rgb(0, 0, 0));\n}\n\n.background-on {\n    background-color: var(--bubble-sub-button-light-background-color, var(--bubble-accent-color, var(--bubble-default-color)));\n}\n\n.background-off {\n    background-color: var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n}\n\n.icon-with-state {\n    margin-right: 4px;\n    --mdc-icon-size: 16px;\n}\n\n.icon-without-state {\n    margin-right: 0;\n    --mdc-icon-size: 20px;\n}\n\n.no-icon-select-arrow {\n    width: 24px !important;\n    height: 24px !important;\n    --mdc-icon-size: 24px;\n}\n\n.no-icon-select-container {\n    width: 16px !important;\n}\n\n.bubble-sub-button .bubble-dropdown-arrow {\n    background: var(--bubble-select-arrow-background-color) !important;\n}\n\n.sub-buttons-grid .bubble-sub-button-container {\n    display: grid;\n    row-gap: calc( ( ( var(--row-height,56px) - 36px ) * var(--row-size,1) + var(--row-gap, 8px) * ( var(--row-size,1) - 1 ) ) / ( var(--row-size,1) + 1 ));\n    grid-template-rows: repeat(var(--row-size,1), 1fr);\n    grid-template-columns: repeat(1, 1fr);\n    grid-auto-flow: column;\n}\n\n.sub-buttons-grid .bubble-sub-button-container:has(> :last-child:nth-child(2)) :nth-child(2) {\n    grid-row: 1 / calc(var(--row-size,1) + 1);\n}\n\n.rows-2 .bubble-sub-button-container {\n    flex-direction: column;\n    gap: 4px !important;\n    row-gap: calc( ( ( var(--row-height,56px) - 40px ) * var(--row-size,1) + var(--row-gap, 8px) * ( var(--row-size,1) - 1 ) ) / ( 2*var(--row-size,1) + 2 ));\n    column-gap: 4px !important;\n    display: grid !important;\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-rows: repeat(calc(2*var(--row-size,1)), minmax(auto, max-content));\n    grid-auto-flow: column;\n    width: auto;\n}\n\n.rows-2 .bubble-sub-button {\n    height: 20px !important;\n}\n\n.large.rows-2 .bubble-sub-button-container:has(> :last-child:nth-child(2)) :nth-child(2) {\n    grid-row: 1 / calc(2*var(--row-size,1) + 1);\n}";function r(e,t={}){const{container:n=e.content,appendTo:a=n.firstChild?.firstChild,before:r=!1}=t;e.elements=e.elements||{};let s=e.elements.subButtonContainer;if(!s&&e.config.sub_button){s=(0,o.n)("div","bubble-sub-button-container");const t=(0,o.n)("style");t.textContent=i,s.appendChild(t),r&&a?a.prepend(s):a&&a.appendChild(s),e.elements.subButtonContainer=s}return s}function s(e,t,n,i,s,l){e.elements.subButtonContainer||r(e);const c=(0,o.n)("div",`bubble-sub-button bubble-sub-button-${t}`);return c.nameContainer=(0,o.n)("div","bubble-sub-button-name-container"),c.feedbackContainer=(0,o.n)("div","bubble-feedback-container"),c.feedback=(0,o.n)("div","bubble-feedback-element feedback-element"),c.appendChild(c.feedbackContainer),c.feedbackContainer.appendChild(c.feedback),n&&((0,a.F)(e,c,i),c.dropdownContainer.style.display="none",(0,a.X)(e,c,s,l)),c.appendChild(c.nameContainer),e.elements.subButtonContainer.appendChild(c),e.elements[t]=c,c}},273:(e,t,n)=>{n.d(t,{$i:()=>s,Bz:()=>r,qd:()=>a});var o=n(537);function a(e,t=40){if(Array.isArray(e)&&3===e.length){for(let t=0;t<3;t++)if(e[t]<0||e[t]>255)return;return e.every(e=>Math.abs(e-255)<=t)}}let i;function r(e,t,n=1){if(!e||"string"!=typeof e)return`rgba(0, 0, 0, ${t})`;if(e.startsWith("#"))if(4===e.length){let o=Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n),a=Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n),r=Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n);i="rgba("+o+", "+a+", "+r+", "+t+")"}else{let o=Math.min(255,parseInt(e.slice(1,3),16)*n),a=Math.min(255,parseInt(e.slice(3,5),16)*n),r=Math.min(255,parseInt(e.slice(5,7),16)*n);i="rgba("+o+", "+a+", "+r+", "+t+")"}else if(e.startsWith("rgb")){let o=e.match(/\d+/g);o&&o.length>=3&&(i="rgba("+Math.min(255,o[0]*n)+", "+Math.min(255,o[1]*n)+", "+Math.min(255,o[2]*n)+", "+t+")")}else if(e.startsWith("var(--")){let o=e.slice(4,-1),a=window.getComputedStyle(document.documentElement).getPropertyValue(o);a&&(a.startsWith("#")||a.startsWith("rgb"))&&(i=r(a,t,n))}return i||(i=`rgba(0, 0, 0, ${t})`),i}function s(e=!0){const t=(0,o.qL)("var(--primary-background-color, #ffffff)");let n=(0,o.E2)(t)||(0,o.rY)(t)||[255,255,255];const a=[0,145,255].map((e,t)=>Math.round(.7*e+.3*n[t])),i=`rgb(${a[0]}, ${a[1]}, ${a[2]})`;return e&&document.documentElement.style.setProperty("--bubble-default-color",i),i}},352:(e,t,n)=>{n.d(t,{X:()=>s,F:()=>r});var o=n(537),a=n(490);const i="mwc-list-item {\n    border-radius: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 24px));\n    margin: 0 8px;\n}\n\nmwc-list-item[selected] {\n    color: var(--primary-text-color) !important;\n    background-color: var(--bubble-select-list-item-accent-color, var(--bubble-list-item-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))); /* Added the missing 'select' in the first var without removing the previous one for compatibilty */ \n}\n\nha-select {\n    --mdc-shape-medium: var(--bubble-select-list-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    --mdc-theme-surface: var(--bubble-select-list-background-color, var(--bubble-select-main-background-color, var(--bubble-main-background-color, var(--card-background-color, var(--secondary-background-color)))));\n    --mdc-shape-large: 32px;\n    --mdc-shape-small: 64px;\n    --mdc-menu-max-width: min-content;\n    --mdc-menu-min-width: var(--bubble-select-list-width, 200px);\n    --mdc-select-max-width: min-content;\n    --mdc-select-outlined-hover-border-color: transparent;\n    --mdc-select-outlined-idle-border-color: transparent;\n    --mdc-theme-primary: transparent;\n    --right-value: calc(var(--mdc-menu-min-width) - 160px);\n}\n\n.bubble-sub-button ha-select {\n    --right-value: calc(var(--mdc-menu-min-width) - 168px);\n}\n\n.mdc-select {\n    color: transparent !important;\n    width: 150px !important;\n    position: absolute !important;\n    pointer-events: none;\n    right: var(--right-value, 46px);\n    height: 0px !important;\n}\n\n.mdc-menu, mwc-list, .mdc-list-item {\n    pointer-events: auto;\n}\n\n.mdc-select__dropdown-icon {\n    display: none !important;\n}\n\n.mdc-select__selected-text {\n    color: transparent !important;\n}\n\n.mdc-select__anchor {\n    width: 100%;\n    pointer-events: none;\n    top: -14px !important;\n    height: 28px !important;\n}\n\n.bubble-dropdown-container {\n    display: flex !important;\n    width: auto;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n}\n\n.bubble-dropdown-arrow {\n    display: flex;\n    position: absolute;\n    background: var(--bubble-select-arrow-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    height: 36px;\n    width: 36px;\n    pointer-events: none;\n    border-radius: var(--bubble-select-button-border-radius, var(--bubble-border-radius, 20px));\n    align-items: center;\n    justify-content: center;\n    transition: background 0.2s, transform 0.2s;\n    pointer-events: none;\n}\n\n.bubble-dropdown-select {\n    position: relative;\n    width: 36px;\n}\n\n.bubble-dropdown-inner-border {\n    display: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: var(--bubble-select-border, solid 2px var(--bubble-accent-color, var(--bubble-default-color)));\n    border-radius: var(--bubble-border-radius, 32px);\n    box-sizing: border-box;\n    pointer-events: none;\n}";function r(e,t=e.elements,n){t.dropdownContainer=(0,o.n)("div","bubble-dropdown-container"),t.dropdownSelect=(0,o.n)("ha-select","bubble-dropdown-select"),t.dropdownSelect.setAttribute("outlined",""),t.dropdownArrow=(0,o.n)("ha-icon","bubble-dropdown-arrow"),t.dropdownArrow.setAttribute("icon","mdi:chevron-down"),t.dropdownStyleElement=(0,o.n)("style"),t.dropdownCustomStyleElement=(0,o.n)("style"),t.dropdownStyleElement.textContent=i,t.dropdownContainerStyle=(0,o.n)("style"),t.dropdownContainerStyle.textContent=i,t.dropdownContainer.appendChild(t.dropdownArrow),t.dropdownContainer.appendChild(t.dropdownContainerStyle),t.dropdownSelect.updateComplete.then(()=>{var e;t.dropdownSelect.shadowRoot&&(t.dropdownSelect.shadowRoot.appendChild(t.dropdownStyleElement),t.dropdownSelect.shadowRoot.appendChild(t.dropdownCustomStyleElement),(e=t.dropdownSelect.shadowRoot.querySelector("ha-menu.mdc-select__menu"))&&(e.addEventListener("opened",()=>{setTimeout(()=>{e.removeAttribute("open"),e.style.display=""},0)},{once:!0}),e.style.display="none",e.setAttribute("open","")))}),t===e.elements?t.buttonsContainer.appendChild(t.dropdownContainer):t.appendChild(t.dropdownContainer)}function s(e,t=e.elements,n=e.config.entity,i=e.config){const{dropdownArrow:r,dropdownSelect:s,mainContainer:l,background:c}=t,d=t===e.elements?l:t,u=t===e.elements?c:t;t.innerBorderElement=(0,o.n)("div"),t.innerBorderElement.classList.add("bubble-dropdown-inner-border"),d.appendChild(t.innerBorderElement),d.haRipple=(0,o.n)("ha-ripple"),t===e.elements?t.background.appendChild(d.haRipple):d.appendChild(d.haRipple);const p=e.elements.mainContainer;p&&void 0===p.openDropdowns&&(p.openDropdowns=0);let h=!1;const b=()=>{r.style.transform="rotate(180deg)",t.dropdownArrow.style.background="var(--bubble-accent-color, var(--bubble-default-color))",t.innerBorderElement&&(t.innerBorderElement.style.display="block"),e.elements&&e.elements.mainContainer&&(h||(h=!0,p&&p.openDropdowns++),e.elements.mainContainer.style.overflow="visible")};u.addEventListener("click",e=>{if("mwc-list-item"===e.target.tagName.toLowerCase())return;const t=s.shadowRoot.querySelector("ha-menu.mdc-select__menu");if(!t){const e=s.shadowRoot.querySelector("mwc-menu");return void(e&&(e.setAttribute("open",""),b()))}t.show(),b()}),s.addEventListener("closed",n=>{n.stopPropagation(),r.style.transform="rotate(0deg)",t.innerBorderElement&&(t.innerBorderElement.style.display="none"),t.dropdownArrow.style.background="",e.elements&&e.elements.mainContainer&&(h&&(h=!1,p&&p.openDropdowns--),p&&0===p.openDropdowns&&(e.elements.mainContainer.style.overflow=""))}),t.dropdownSelect.addEventListener("click",t=>{const o=t.target.value;(0,a.Ab)(e,n,o,i)})}},382:(e,t,n)=>{function o(e){return null==e}n.d(t,{Ay:()=>gt,Hh:()=>lt,ZU:()=>nt,my:()=>st});var a={isNothing:o,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:o(e)?[]:[e]},repeat:function(e,t){var n,o="";for(n=0;n<t;n+=1)o+=e;return o},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var n,o,a,i;if(t)for(n=0,o=(i=Object.keys(t)).length;n<o;n+=1)e[a=i[n]]=t[a];return e}};function i(e,t){var n="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+="\n\n"+e.mark.snippet),o+" "+n):o}function r(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=i(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.prototype.toString=function(e){return this.name+": "+i(this,e)};var s=r;function l(e,t,n,o,a){var i="",r="",s=Math.floor(a/2)-1;return o-t>s&&(t=o-s+(i=" ... ").length),n-o>s&&(n=o+s-(r=" ...").length),{str:i+e.slice(t,n).replace(/\t/g,"→")+r,pos:o-t+i.length}}function c(e,t){return a.repeat(" ",t-e.length)+e}var d=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],u=["scalar","sequence","mapping"],p=function(e,t){if(t=t||{},Object.keys(t).forEach(function(t){if(-1===d.indexOf(t))throw new s('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach(function(n){e[n].forEach(function(e){t[String(e)]=n})}),t}(t.styleAliases||null),-1===u.indexOf(this.kind))throw new s('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function h(e,t){var n=[];return e[t].forEach(function(e){var t=n.length;n.forEach(function(n,o){n.tag===e.tag&&n.kind===e.kind&&n.multi===e.multi&&(t=o)}),n[t]=e}),n}function b(e){return this.extend(e)}b.prototype.extend=function(e){var t=[],n=[];if(e instanceof p)n.push(e);else if(Array.isArray(e))n=n.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new s("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(n=n.concat(e.explicit))}t.forEach(function(e){if(!(e instanceof p))throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new s("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new s("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),n.forEach(function(e){if(!(e instanceof p))throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(b.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(n),o.compiledImplicit=h(o,"implicit"),o.compiledExplicit=h(o,"explicit"),o.compiledTypeMap=function(){var e,t,n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function o(e){e.multi?(n.multi[e.kind].push(e),n.multi.fallback.push(e)):n[e.kind][e.tag]=n.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(o);return n}(o.compiledImplicit,o.compiledExplicit),o};var m=b,g=new p("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),f=new p("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),_=new p("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),y=new m({explicit:[g,f,_]}),v=new p("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),w=new p("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function x(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function k(e){return 48<=e&&e<=55}function C(e){return 48<=e&&e<=57}var $=new p("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n=e.length,o=0,a=!1;if(!n)return!1;if("-"!==(t=e[o])&&"+"!==t||(t=e[++o]),"0"===t){if(o+1===n)return!0;if("b"===(t=e[++o])){for(o++;o<n;o++)if("_"!==(t=e[o])){if("0"!==t&&"1"!==t)return!1;a=!0}return a&&"_"!==t}if("x"===t){for(o++;o<n;o++)if("_"!==(t=e[o])){if(!x(e.charCodeAt(o)))return!1;a=!0}return a&&"_"!==t}if("o"===t){for(o++;o<n;o++)if("_"!==(t=e[o])){if(!k(e.charCodeAt(o)))return!1;a=!0}return a&&"_"!==t}}if("_"===t)return!1;for(;o<n;o++)if("_"!==(t=e[o])){if(!C(e.charCodeAt(o)))return!1;a=!0}return!(!a||"_"===t)},construct:function(e){var t,n=e,o=1;if(-1!==n.indexOf("_")&&(n=n.replace(/_/g,"")),"-"!==(t=n[0])&&"+"!==t||("-"===t&&(o=-1),t=(n=n.slice(1))[0]),"0"===n)return 0;if("0"===t){if("b"===n[1])return o*parseInt(n.slice(2),2);if("x"===n[1])return o*parseInt(n.slice(2),16);if("o"===n[1])return o*parseInt(n.slice(2),8)}return o*parseInt(n,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!a.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),S=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),E=/^[-+]?[0-9]+e/,A=new p("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!S.test(e)||"_"===e[e.length-1])},construct:function(e){var t,n;return n="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:n*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||a.isNegativeZero(e))},represent:function(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(a.isNegativeZero(e))return"-0.0";return n=e.toString(10),E.test(n)?n.replace("e",".e"):n},defaultStyle:"lowercase"}),M=y.extend({implicit:[v,w,$,A]}),L=M,T=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),O=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),I=new p("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==T.exec(e)||null!==O.exec(e))},construct:function(e){var t,n,o,a,i,r,s,l,c=0,d=null;if(null===(t=T.exec(e))&&(t=O.exec(e)),null===t)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,a=+t[3],!t[4])return new Date(Date.UTC(n,o,a));if(i=+t[4],r=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(d=-d)),l=new Date(Date.UTC(n,o,a,i,r,s,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(e){return e.toISOString()}}),P=new p("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),B="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r",j=new p("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n,o=0,a=e.length,i=B;for(n=0;n<a;n++)if(!((t=i.indexOf(e.charAt(n)))>64)){if(t<0)return!1;o+=6}return o%8==0},construct:function(e){var t,n,o=e.replace(/[\r\n=]/g,""),a=o.length,i=B,r=0,s=[];for(t=0;t<a;t++)t%4==0&&t&&(s.push(r>>16&255),s.push(r>>8&255),s.push(255&r)),r=r<<6|i.indexOf(o.charAt(t));return 0==(n=a%4*6)?(s.push(r>>16&255),s.push(r>>8&255),s.push(255&r)):18===n?(s.push(r>>10&255),s.push(r>>2&255)):12===n&&s.push(r>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,n,o="",a=0,i=e.length,r=B;for(t=0;t<i;t++)t%3==0&&t&&(o+=r[a>>18&63],o+=r[a>>12&63],o+=r[a>>6&63],o+=r[63&a]),a=(a<<8)+e[t];return 0==(n=i%3)?(o+=r[a>>18&63],o+=r[a>>12&63],o+=r[a>>6&63],o+=r[63&a]):2===n?(o+=r[a>>10&63],o+=r[a>>4&63],o+=r[a<<2&63],o+=r[64]):1===n&&(o+=r[a>>2&63],o+=r[a<<4&63],o+=r[64],o+=r[64]),o}}),U=Object.prototype.hasOwnProperty,D=Object.prototype.toString,z=new p("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,o,a,i,r=[],s=e;for(t=0,n=s.length;t<n;t+=1){if(o=s[t],i=!1,"[object Object]"!==D.call(o))return!1;for(a in o)if(U.call(o,a)){if(i)return!1;i=!0}if(!i)return!1;if(-1!==r.indexOf(a))return!1;r.push(a)}return!0},construct:function(e){return null!==e?e:[]}}),V=Object.prototype.toString,N=new p("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,o,a,i,r=e;for(i=new Array(r.length),t=0,n=r.length;t<n;t+=1){if(o=r[t],"[object Object]"!==V.call(o))return!1;if(1!==(a=Object.keys(o)).length)return!1;i[t]=[a[0],o[a[0]]]}return!0},construct:function(e){if(null===e)return[];var t,n,o,a,i,r=e;for(i=new Array(r.length),t=0,n=r.length;t<n;t+=1)o=r[t],a=Object.keys(o),i[t]=[a[0],o[a[0]]];return i}}),F=Object.prototype.hasOwnProperty,H=new p("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,n=e;for(t in n)if(F.call(n,t)&&null!==n[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),q=L.extend({implicit:[I,P],explicit:[j,z,N,H]}),R=Object.prototype.hasOwnProperty,Y=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,W=/[\x85\u2028\u2029]/,G=/[,\[\]\{\}]/,K=/^(?:!|!!|![a-z\-]+!)$/i,X=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function J(e){return Object.prototype.toString.call(e)}function Z(e){return 10===e||13===e}function Q(e){return 9===e||32===e}function ee(e){return 9===e||32===e||10===e||13===e}function te(e){return 44===e||91===e||93===e||123===e||125===e}function ne(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function oe(e){return 120===e?2:117===e?4:85===e?8:0}function ae(e){return 48<=e&&e<=57?e-48:-1}function ie(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function re(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var se=new Array(256),le=new Array(256),ce=0;ce<256;ce++)se[ce]=ie(ce)?1:0,le[ce]=ie(ce);function de(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||q,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function ue(e,t){var n={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return n.snippet=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var n,o=/\r?\n|\r|\0/g,i=[0],r=[],s=-1;n=o.exec(e.buffer);)r.push(n.index),i.push(n.index+n[0].length),e.position<=n.index&&s<0&&(s=i.length-2);s<0&&(s=i.length-1);var d,u,p="",h=Math.min(e.line+t.linesAfter,r.length).toString().length,b=t.maxLength-(t.indent+h+3);for(d=1;d<=t.linesBefore&&!(s-d<0);d++)u=l(e.buffer,i[s-d],r[s-d],e.position-(i[s]-i[s-d]),b),p=a.repeat(" ",t.indent)+c((e.line-d+1).toString(),h)+" | "+u.str+"\n"+p;for(u=l(e.buffer,i[s],r[s],e.position,b),p+=a.repeat(" ",t.indent)+c((e.line+1).toString(),h)+" | "+u.str+"\n",p+=a.repeat("-",t.indent+h+3+u.pos)+"^\n",d=1;d<=t.linesAfter&&!(s+d>=r.length);d++)u=l(e.buffer,i[s+d],r[s+d],e.position-(i[s]-i[s+d]),b),p+=a.repeat(" ",t.indent)+c((e.line+d+1).toString(),h)+" | "+u.str+"\n";return p.replace(/\n$/,"")}(n),new s(t,n)}function pe(e,t){throw ue(e,t)}function he(e,t){e.onWarning&&e.onWarning.call(null,ue(e,t))}var be={YAML:function(e,t,n){var o,a,i;null!==e.version&&pe(e,"duplication of %YAML directive"),1!==n.length&&pe(e,"YAML directive accepts exactly one argument"),null===(o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&pe(e,"ill-formed argument of the YAML directive"),a=parseInt(o[1],10),i=parseInt(o[2],10),1!==a&&pe(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=i<2,1!==i&&2!==i&&he(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var o,a;2!==n.length&&pe(e,"TAG directive accepts exactly two arguments"),o=n[0],a=n[1],K.test(o)||pe(e,"ill-formed tag handle (first argument) of the TAG directive"),R.call(e.tagMap,o)&&pe(e,'there is a previously declared suffix for "'+o+'" tag handle'),X.test(a)||pe(e,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch(t){pe(e,"tag prefix is malformed: "+a)}e.tagMap[o]=a}};function me(e,t,n,o){var a,i,r,s;if(t<n){if(s=e.input.slice(t,n),o)for(a=0,i=s.length;a<i;a+=1)9===(r=s.charCodeAt(a))||32<=r&&r<=1114111||pe(e,"expected valid JSON character");else Y.test(s)&&pe(e,"the stream contains non-printable characters");e.result+=s}}function ge(e,t,n,o){var i,r,s,l;for(a.isObject(n)||pe(e,"cannot merge mappings; the provided source object is unacceptable"),s=0,l=(i=Object.keys(n)).length;s<l;s+=1)r=i[s],R.call(t,r)||(t[r]=n[r],o[r]=!0)}function fe(e,t,n,o,a,i,r,s,l){var c,d;if(Array.isArray(a))for(c=0,d=(a=Array.prototype.slice.call(a)).length;c<d;c+=1)Array.isArray(a[c])&&pe(e,"nested arrays are not supported inside keys"),"object"==typeof a&&"[object Object]"===J(a[c])&&(a[c]="[object Object]");if("object"==typeof a&&"[object Object]"===J(a)&&(a="[object Object]"),a=String(a),null===t&&(t={}),"tag:yaml.org,2002:merge"===o)if(Array.isArray(i))for(c=0,d=i.length;c<d;c+=1)ge(e,t,i[c],n);else ge(e,t,i,n);else e.json||R.call(n,a)||!R.call(t,a)||(e.line=r||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,pe(e,"duplicated mapping key")),"__proto__"===a?Object.defineProperty(t,a,{configurable:!0,enumerable:!0,writable:!0,value:i}):t[a]=i,delete n[a];return t}function _e(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):pe(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ye(e,t,n){for(var o=0,a=e.input.charCodeAt(e.position);0!==a;){for(;Q(a);)9===a&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),a=e.input.charCodeAt(++e.position);if(t&&35===a)do{a=e.input.charCodeAt(++e.position)}while(10!==a&&13!==a&&0!==a);if(!Z(a))break;for(_e(e),a=e.input.charCodeAt(e.position),o++,e.lineIndent=0;32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position)}return-1!==n&&0!==o&&e.lineIndent<n&&he(e,"deficient indentation"),o}function ve(e){var t,n=e.position;return!(45!==(t=e.input.charCodeAt(n))&&46!==t||t!==e.input.charCodeAt(n+1)||t!==e.input.charCodeAt(n+2)||(n+=3,0!==(t=e.input.charCodeAt(n))&&!ee(t)))}function we(e,t){1===t?e.result+=" ":t>1&&(e.result+=a.repeat("\n",t-1))}function xe(e,t){var n,o,a=e.tag,i=e.anchor,r=[],s=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=r),o=e.input.charCodeAt(e.position);0!==o&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,pe(e,"tab characters must not be used in indentation")),45===o)&&ee(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,ye(e,!0,-1)&&e.lineIndent<=t)r.push(null),o=e.input.charCodeAt(e.position);else if(n=e.line,$e(e,t,3,!1,!0),r.push(e.result),ye(e,!0,-1),o=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==o)pe(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=a,e.anchor=i,e.kind="sequence",e.result=r,!0)}function ke(e){var t,n,o,a,i=!1,r=!1;if(33!==(a=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&pe(e,"duplication of a tag property"),60===(a=e.input.charCodeAt(++e.position))?(i=!0,a=e.input.charCodeAt(++e.position)):33===a?(r=!0,n="!!",a=e.input.charCodeAt(++e.position)):n="!",t=e.position,i){do{a=e.input.charCodeAt(++e.position)}while(0!==a&&62!==a);e.position<e.length?(o=e.input.slice(t,e.position),a=e.input.charCodeAt(++e.position)):pe(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==a&&!ee(a);)33===a&&(r?pe(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),K.test(n)||pe(e,"named tag handle cannot contain such characters"),r=!0,t=e.position+1)),a=e.input.charCodeAt(++e.position);o=e.input.slice(t,e.position),G.test(o)&&pe(e,"tag suffix cannot contain flow indicator characters")}o&&!X.test(o)&&pe(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch(t){pe(e,"tag name is malformed: "+o)}return i?e.tag=o:R.call(e.tagMap,n)?e.tag=e.tagMap[n]+o:"!"===n?e.tag="!"+o:"!!"===n?e.tag="tag:yaml.org,2002:"+o:pe(e,'undeclared tag handle "'+n+'"'),!0}function Ce(e){var t,n;if(38!==(n=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&pe(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!ee(n)&&!te(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&pe(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function $e(e,t,n,o,i){var r,s,l,c,d,u,p,h,b,m=1,g=!1,f=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,r=s=l=4===n||3===n,o&&ye(e,!0,-1)&&(g=!0,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)),1===m)for(;ke(e)||Ce(e);)ye(e,!0,-1)?(g=!0,l=r,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)):l=!1;if(l&&(l=g||i),1!==m&&4!==n||(h=1===n||2===n?t:t+1,b=e.position-e.lineStart,1===m?l&&(xe(e,b)||function(e,t,n){var o,a,i,r,s,l,c,d=e.tag,u=e.anchor,p={},h=Object.create(null),b=null,m=null,g=null,f=!1,_=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=p),c=e.input.charCodeAt(e.position);0!==c;){if(f||-1===e.firstTabInLine||(e.position=e.firstTabInLine,pe(e,"tab characters must not be used in indentation")),o=e.input.charCodeAt(e.position+1),i=e.line,63!==c&&58!==c||!ee(o)){if(r=e.line,s=e.lineStart,l=e.position,!$e(e,n,2,!1,!0))break;if(e.line===i){for(c=e.input.charCodeAt(e.position);Q(c);)c=e.input.charCodeAt(++e.position);if(58===c)ee(c=e.input.charCodeAt(++e.position))||pe(e,"a whitespace character is expected after the key-value separator within a block mapping"),f&&(fe(e,p,h,b,m,null,r,s,l),b=m=g=null),_=!0,f=!1,a=!1,b=e.tag,m=e.result;else{if(!_)return e.tag=d,e.anchor=u,!0;pe(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!_)return e.tag=d,e.anchor=u,!0;pe(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(f&&(fe(e,p,h,b,m,null,r,s,l),b=m=g=null),_=!0,f=!0,a=!0):f?(f=!1,a=!0):pe(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=o;if((e.line===i||e.lineIndent>t)&&(f&&(r=e.line,s=e.lineStart,l=e.position),$e(e,t,4,!0,a)&&(f?m=e.result:g=e.result),f||(fe(e,p,h,b,m,g,r,s,l),b=m=g=null),ye(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===i||e.lineIndent>t)&&0!==c)pe(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return f&&fe(e,p,h,b,m,null,r,s,l),_&&(e.tag=d,e.anchor=u,e.kind="mapping",e.result=p),_}(e,b,h))||function(e,t){var n,o,a,i,r,s,l,c,d,u,p,h,b=!0,m=e.tag,g=e.anchor,f=Object.create(null);if(91===(h=e.input.charCodeAt(e.position)))r=93,c=!1,i=[];else{if(123!==h)return!1;r=125,c=!0,i={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),h=e.input.charCodeAt(++e.position);0!==h;){if(ye(e,!0,t),(h=e.input.charCodeAt(e.position))===r)return e.position++,e.tag=m,e.anchor=g,e.kind=c?"mapping":"sequence",e.result=i,!0;b?44===h&&pe(e,"expected the node content, but found ','"):pe(e,"missed comma between flow collection entries"),p=null,s=l=!1,63===h&&ee(e.input.charCodeAt(e.position+1))&&(s=l=!0,e.position++,ye(e,!0,t)),n=e.line,o=e.lineStart,a=e.position,$e(e,t,1,!1,!0),u=e.tag,d=e.result,ye(e,!0,t),h=e.input.charCodeAt(e.position),!l&&e.line!==n||58!==h||(s=!0,h=e.input.charCodeAt(++e.position),ye(e,!0,t),$e(e,t,1,!1,!0),p=e.result),c?fe(e,i,f,u,d,p,n,o,a):s?i.push(fe(e,null,f,u,d,p,n,o,a)):i.push(d),ye(e,!0,t),44===(h=e.input.charCodeAt(e.position))?(b=!0,h=e.input.charCodeAt(++e.position)):b=!1}pe(e,"unexpected end of the stream within a flow collection")}(e,h)?f=!0:(s&&function(e,t){var n,o,i,r,s=1,l=!1,c=!1,d=t,u=0,p=!1;if(124===(r=e.input.charCodeAt(e.position)))o=!1;else{if(62!==r)return!1;o=!0}for(e.kind="scalar",e.result="";0!==r;)if(43===(r=e.input.charCodeAt(++e.position))||45===r)1===s?s=43===r?3:2:pe(e,"repeat of a chomping mode identifier");else{if(!((i=ae(r))>=0))break;0===i?pe(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):c?pe(e,"repeat of an indentation width identifier"):(d=t+i-1,c=!0)}if(Q(r)){do{r=e.input.charCodeAt(++e.position)}while(Q(r));if(35===r)do{r=e.input.charCodeAt(++e.position)}while(!Z(r)&&0!==r)}for(;0!==r;){for(_e(e),e.lineIndent=0,r=e.input.charCodeAt(e.position);(!c||e.lineIndent<d)&&32===r;)e.lineIndent++,r=e.input.charCodeAt(++e.position);if(!c&&e.lineIndent>d&&(d=e.lineIndent),Z(r))u++;else{if(e.lineIndent<d){3===s?e.result+=a.repeat("\n",l?1+u:u):1===s&&l&&(e.result+="\n");break}for(o?Q(r)?(p=!0,e.result+=a.repeat("\n",l?1+u:u)):p?(p=!1,e.result+=a.repeat("\n",u+1)):0===u?l&&(e.result+=" "):e.result+=a.repeat("\n",u):e.result+=a.repeat("\n",l?1+u:u),l=!0,c=!0,u=0,n=e.position;!Z(r)&&0!==r;)r=e.input.charCodeAt(++e.position);me(e,n,e.position,!1)}}return!0}(e,h)||function(e,t){var n,o,a;if(39!==(n=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,o=a=e.position;0!==(n=e.input.charCodeAt(e.position));)if(39===n){if(me(e,o,e.position,!0),39!==(n=e.input.charCodeAt(++e.position)))return!0;o=e.position,e.position++,a=e.position}else Z(n)?(me(e,o,a,!0),we(e,ye(e,!1,t)),o=a=e.position):e.position===e.lineStart&&ve(e)?pe(e,"unexpected end of the document within a single quoted scalar"):(e.position++,a=e.position);pe(e,"unexpected end of the stream within a single quoted scalar")}(e,h)||function(e,t){var n,o,a,i,r,s;if(34!==(s=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=o=e.position;0!==(s=e.input.charCodeAt(e.position));){if(34===s)return me(e,n,e.position,!0),e.position++,!0;if(92===s){if(me(e,n,e.position,!0),Z(s=e.input.charCodeAt(++e.position)))ye(e,!1,t);else if(s<256&&se[s])e.result+=le[s],e.position++;else if((r=oe(s))>0){for(a=r,i=0;a>0;a--)(r=ne(s=e.input.charCodeAt(++e.position)))>=0?i=(i<<4)+r:pe(e,"expected hexadecimal character");e.result+=re(i),e.position++}else pe(e,"unknown escape sequence");n=o=e.position}else Z(s)?(me(e,n,o,!0),we(e,ye(e,!1,t)),n=o=e.position):e.position===e.lineStart&&ve(e)?pe(e,"unexpected end of the document within a double quoted scalar"):(e.position++,o=e.position)}pe(e,"unexpected end of the stream within a double quoted scalar")}(e,h)?f=!0:function(e){var t,n,o;if(42!==(o=e.input.charCodeAt(e.position)))return!1;for(o=e.input.charCodeAt(++e.position),t=e.position;0!==o&&!ee(o)&&!te(o);)o=e.input.charCodeAt(++e.position);return e.position===t&&pe(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),R.call(e.anchorMap,n)||pe(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],ye(e,!0,-1),!0}(e)?(f=!0,null===e.tag&&null===e.anchor||pe(e,"alias node should not have any properties")):function(e,t,n){var o,a,i,r,s,l,c,d,u=e.kind,p=e.result;if(ee(d=e.input.charCodeAt(e.position))||te(d)||35===d||38===d||42===d||33===d||124===d||62===d||39===d||34===d||37===d||64===d||96===d)return!1;if((63===d||45===d)&&(ee(o=e.input.charCodeAt(e.position+1))||n&&te(o)))return!1;for(e.kind="scalar",e.result="",a=i=e.position,r=!1;0!==d;){if(58===d){if(ee(o=e.input.charCodeAt(e.position+1))||n&&te(o))break}else if(35===d){if(ee(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&ve(e)||n&&te(d))break;if(Z(d)){if(s=e.line,l=e.lineStart,c=e.lineIndent,ye(e,!1,-1),e.lineIndent>=t){r=!0,d=e.input.charCodeAt(e.position);continue}e.position=i,e.line=s,e.lineStart=l,e.lineIndent=c;break}}r&&(me(e,a,i,!1),we(e,e.line-s),a=i=e.position,r=!1),Q(d)||(i=e.position+1),d=e.input.charCodeAt(++e.position)}return me(e,a,i,!1),!!e.result||(e.kind=u,e.result=p,!1)}(e,h,1===n)&&(f=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===m&&(f=l&&xe(e,b))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&pe(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),c=0,d=e.implicitTypes.length;c<d;c+=1)if((p=e.implicitTypes[c]).resolve(e.result)){e.result=p.construct(e.result),e.tag=p.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(R.call(e.typeMap[e.kind||"fallback"],e.tag))p=e.typeMap[e.kind||"fallback"][e.tag];else for(p=null,c=0,d=(u=e.typeMap.multi[e.kind||"fallback"]).length;c<d;c+=1)if(e.tag.slice(0,u[c].tag.length)===u[c].tag){p=u[c];break}p||pe(e,"unknown tag !<"+e.tag+">"),null!==e.result&&p.kind!==e.kind&&pe(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+p.kind+'", not "'+e.kind+'"'),p.resolve(e.result,e.tag)?(e.result=p.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):pe(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||f}function Se(e){var t,n,o,a,i=e.position,r=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(a=e.input.charCodeAt(e.position))&&(ye(e,!0,-1),a=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==a));){for(r=!0,a=e.input.charCodeAt(++e.position),t=e.position;0!==a&&!ee(a);)a=e.input.charCodeAt(++e.position);for(o=[],(n=e.input.slice(t,e.position)).length<1&&pe(e,"directive name must not be less than one character in length");0!==a;){for(;Q(a);)a=e.input.charCodeAt(++e.position);if(35===a){do{a=e.input.charCodeAt(++e.position)}while(0!==a&&!Z(a));break}if(Z(a))break;for(t=e.position;0!==a&&!ee(a);)a=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}0!==a&&_e(e),R.call(be,n)?be[n](e,n,o):he(e,'unknown document directive "'+n+'"')}ye(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,ye(e,!0,-1)):r&&pe(e,"directives end mark is expected"),$e(e,e.lineIndent-1,4,!1,!0),ye(e,!0,-1),e.checkLineBreaks&&W.test(e.input.slice(i,e.position))&&he(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&ve(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,ye(e,!0,-1)):e.position<e.length-1&&pe(e,"end of the stream or a document separator is expected")}function Ee(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var n=new de(e,t),o=e.indexOf("\0");for(-1!==o&&(n.position=o,pe(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)Se(n);return n.documents}var Ae=function(e,t,n){null!==t&&"object"==typeof t&&void 0===n&&(n=t,t=null);var o=Ee(e,n);if("function"!=typeof t)return o;for(var a=0,i=o.length;a<i;a+=1)t(o[a])},Me=function(e,t){var n=Ee(e,t);if(0!==n.length){if(1===n.length)return n[0];throw new s("expected a single document in the stream, but found more")}},Le=Object.prototype.toString,Te=Object.prototype.hasOwnProperty,Oe=65279,Ie={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Pe=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Be=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function je(e){var t,n,o;if(t=e.toString(16).toUpperCase(),e<=255)n="x",o=2;else if(e<=65535)n="u",o=4;else{if(!(e<=4294967295))throw new s("code point within a string may not be greater than 0xFFFFFFFF");n="U",o=8}return"\\"+n+a.repeat("0",o-t.length)+t}function Ue(e){this.schema=e.schema||q,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=a.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var n,o,a,i,r,s,l;if(null===t)return{};for(n={},a=0,i=(o=Object.keys(t)).length;a<i;a+=1)r=o[a],s=String(t[r]),"!!"===r.slice(0,2)&&(r="tag:yaml.org,2002:"+r.slice(2)),(l=e.compiledTypeMap.fallback[r])&&Te.call(l.styleAliases,s)&&(s=l.styleAliases[s]),n[r]=s;return n}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function De(e,t){for(var n,o=a.repeat(" ",t),i=0,r=-1,s="",l=e.length;i<l;)-1===(r=e.indexOf("\n",i))?(n=e.slice(i),i=l):(n=e.slice(i,r+1),i=r+1),n.length&&"\n"!==n&&(s+=o),s+=n;return s}function ze(e,t){return"\n"+a.repeat(" ",e.indent*t)}function Ve(e){return 32===e||9===e}function Ne(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==Oe||65536<=e&&e<=1114111}function Fe(e){return Ne(e)&&e!==Oe&&13!==e&&10!==e}function He(e,t,n){var o=Fe(e),a=o&&!Ve(e);return(n?o:o&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!a)||Fe(t)&&!Ve(t)&&35===e||58===t&&a}function qe(e,t){var n,o=e.charCodeAt(t);return o>=55296&&o<=56319&&t+1<e.length&&(n=e.charCodeAt(t+1))>=56320&&n<=57343?1024*(o-55296)+n-56320+65536:o}function Re(e){return/^\n* /.test(e)}function Ye(e,t,n,o,a){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==Pe.indexOf(t)||Be.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var i=e.indent*Math.max(1,n),r=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-i),l=o||e.flowLevel>-1&&n>=e.flowLevel;switch(function(e,t,n,o,a,i,r,s){var l,c=0,d=null,u=!1,p=!1,h=-1!==o,b=-1,m=function(e){return Ne(e)&&e!==Oe&&!Ve(e)&&45!==e&&63!==e&&58!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&35!==e&&38!==e&&42!==e&&33!==e&&124!==e&&61!==e&&62!==e&&39!==e&&34!==e&&37!==e&&64!==e&&96!==e}(qe(e,0))&&function(e){return!Ve(e)&&58!==e}(qe(e,e.length-1));if(t||r)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!Ne(c=qe(e,l)))return 5;m=m&&He(c,d,s),d=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if(10===(c=qe(e,l)))u=!0,h&&(p=p||l-b-1>o&&" "!==e[b+1],b=l);else if(!Ne(c))return 5;m=m&&He(c,d,s),d=c}p=p||h&&l-b-1>o&&" "!==e[b+1]}return u||p?n>9&&Re(e)?5:r?2===i?5:2:p?4:3:!m||r||a(e)?2===i?5:2:1}(t,l,e.indent,r,function(t){return function(e,t){var n,o;for(n=0,o=e.implicitTypes.length;n<o;n+=1)if(e.implicitTypes[n].resolve(t))return!0;return!1}(e,t)},e.quotingType,e.forceQuotes&&!o,a)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+We(t,e.indent)+Ge(De(t,i));case 4:return">"+We(t,e.indent)+Ge(De(function(e,t){for(var n,o,a,i=/(\n+)([^\n]*)/g,r=(a=-1!==(a=e.indexOf("\n"))?a:e.length,i.lastIndex=a,Ke(e.slice(0,a),t)),s="\n"===e[0]||" "===e[0];o=i.exec(e);){var l=o[1],c=o[2];n=" "===c[0],r+=l+(s||n||""===c?"":"\n")+Ke(c,t),s=n}return r}(t,r),i));case 5:return'"'+function(e){for(var t,n="",o=0,a=0;a<e.length;o>=65536?a+=2:a++)o=qe(e,a),!(t=Ie[o])&&Ne(o)?(n+=e[a],o>=65536&&(n+=e[a+1])):n+=t||je(o);return n}(t)+'"';default:throw new s("impossible error: invalid scalar style")}}()}function We(e,t){var n=Re(e)?String(t):"",o="\n"===e[e.length-1];return n+(!o||"\n"!==e[e.length-2]&&"\n"!==e?o?"":"-":"+")+"\n"}function Ge(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function Ke(e,t){if(""===e||" "===e[0])return e;for(var n,o,a=/ [^ ]/g,i=0,r=0,s=0,l="";n=a.exec(e);)(s=n.index)-i>t&&(o=r>i?r:s,l+="\n"+e.slice(i,o),i=o+1),r=s;return l+="\n",e.length-i>t&&r>i?l+=e.slice(i,r)+"\n"+e.slice(r+1):l+=e.slice(i),l.slice(1)}function Xe(e,t,n,o){var a,i,r,s="",l=e.tag;for(a=0,i=n.length;a<i;a+=1)r=n[a],e.replacer&&(r=e.replacer.call(n,String(a),r)),(Ze(e,t+1,r,!0,!0,!1,!0)||void 0===r&&Ze(e,t+1,null,!0,!0,!1,!0))&&(o&&""===s||(s+=ze(e,t)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function Je(e,t,n){var o,a,i,r,l,c;for(i=0,r=(a=n?e.explicitTypes:e.implicitTypes).length;i<r;i+=1)if(((l=a[i]).instanceOf||l.predicate)&&(!l.instanceOf||"object"==typeof t&&t instanceof l.instanceOf)&&(!l.predicate||l.predicate(t))){if(n?l.multi&&l.representName?e.tag=l.representName(t):e.tag=l.tag:e.tag="?",l.represent){if(c=e.styleMap[l.tag]||l.defaultStyle,"[object Function]"===Le.call(l.represent))o=l.represent(t,c);else{if(!Te.call(l.represent,c))throw new s("!<"+l.tag+'> tag resolver accepts not "'+c+'" style');o=l.represent[c](t,c)}e.dump=o}return!0}return!1}function Ze(e,t,n,o,a,i,r){e.tag=null,e.dump=n,Je(e,n,!1)||Je(e,n,!0);var l,c=Le.call(e.dump),d=o;o&&(o=e.flowLevel<0||e.flowLevel>t);var u,p,h="[object Object]"===c||"[object Array]"===c;if(h&&(p=-1!==(u=e.duplicates.indexOf(n))),(null!==e.tag&&"?"!==e.tag||p||2!==e.indent&&t>0)&&(a=!1),p&&e.usedDuplicates[u])e.dump="*ref_"+u;else{if(h&&p&&!e.usedDuplicates[u]&&(e.usedDuplicates[u]=!0),"[object Object]"===c)o&&0!==Object.keys(e.dump).length?(function(e,t,n,o){var a,i,r,l,c,d,u="",p=e.tag,h=Object.keys(n);if(!0===e.sortKeys)h.sort();else if("function"==typeof e.sortKeys)h.sort(e.sortKeys);else if(e.sortKeys)throw new s("sortKeys must be a boolean or a function");for(a=0,i=h.length;a<i;a+=1)d="",o&&""===u||(d+=ze(e,t)),l=n[r=h[a]],e.replacer&&(l=e.replacer.call(n,r,l)),Ze(e,t+1,r,!0,!0,!0)&&((c=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?d+="?":d+="? "),d+=e.dump,c&&(d+=ze(e,t)),Ze(e,t+1,l,!0,c)&&(e.dump&&10===e.dump.charCodeAt(0)?d+=":":d+=": ",u+=d+=e.dump));e.tag=p,e.dump=u||"{}"}(e,t,e.dump,a),p&&(e.dump="&ref_"+u+e.dump)):(function(e,t,n){var o,a,i,r,s,l="",c=e.tag,d=Object.keys(n);for(o=0,a=d.length;o<a;o+=1)s="",""!==l&&(s+=", "),e.condenseFlow&&(s+='"'),r=n[i=d[o]],e.replacer&&(r=e.replacer.call(n,i,r)),Ze(e,t,i,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Ze(e,t,r,!1,!1)&&(l+=s+=e.dump));e.tag=c,e.dump="{"+l+"}"}(e,t,e.dump),p&&(e.dump="&ref_"+u+" "+e.dump));else if("[object Array]"===c)o&&0!==e.dump.length?(e.noArrayIndent&&!r&&t>0?Xe(e,t-1,e.dump,a):Xe(e,t,e.dump,a),p&&(e.dump="&ref_"+u+e.dump)):(function(e,t,n){var o,a,i,r="",s=e.tag;for(o=0,a=n.length;o<a;o+=1)i=n[o],e.replacer&&(i=e.replacer.call(n,String(o),i)),(Ze(e,t,i,!1,!1)||void 0===i&&Ze(e,t,null,!1,!1))&&(""!==r&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=s,e.dump="["+r+"]"}(e,t,e.dump),p&&(e.dump="&ref_"+u+" "+e.dump));else{if("[object String]"!==c){if("[object Undefined]"===c)return!1;if(e.skipInvalid)return!1;throw new s("unacceptable kind of an object to dump "+c)}"?"!==e.tag&&Ye(e,e.dump,t,i,d)}null!==e.tag&&"?"!==e.tag&&(l=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),l="!"===e.tag[0]?"!"+l:"tag:yaml.org,2002:"===l.slice(0,18)?"!!"+l.slice(18):"!<"+l+">",e.dump=l+" "+e.dump)}return!0}function Qe(e,t){var n,o,a=[],i=[];for(et(e,a,i),n=0,o=i.length;n<o;n+=1)t.duplicates.push(a[i[n]]);t.usedDuplicates=new Array(o)}function et(e,t,n){var o,a,i;if(null!==e&&"object"==typeof e)if(-1!==(a=t.indexOf(e)))-1===n.indexOf(a)&&n.push(a);else if(t.push(e),Array.isArray(e))for(a=0,i=e.length;a<i;a+=1)et(e[a],t,n);else for(a=0,i=(o=Object.keys(e)).length;a<i;a+=1)et(e[o[a]],t,n)}function tt(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var nt=p,ot=m,at=y,it=M,rt=L,st=q,lt=Me,ct=Ae,dt=function(e,t){var n=new Ue(t=t||{});n.noRefs||Qe(e,n);var o=e;return n.replacer&&(o=n.replacer.call({"":o},"",o)),Ze(n,0,o,!0,!0)?n.dump+"\n":""},ut=s,pt={binary:j,float:A,map:_,null:v,pairs:N,set:H,timestamp:I,bool:w,int:$,merge:P,omap:z,seq:f,str:g},ht=tt("safeLoad","load"),bt=tt("safeLoadAll","loadAll"),mt=tt("safeDump","dump");const gt={Type:nt,Schema:ot,FAILSAFE_SCHEMA:at,JSON_SCHEMA:it,CORE_SCHEMA:rt,DEFAULT_SCHEMA:st,load:lt,loadAll:ct,dump:dt,YAMLException:ut,types:pt,safeLoad:ht,safeLoadAll:bt,safeDump:mt}},395:(e,t,n)=>{n.d(t,{TL:()=>l,XY:()=>d,_O:()=>c,a7:()=>a,bx:()=>i,yh:()=>s});var o=n(784);function a(e){const t=o.Ki.get(e)||{};let n=t.name||e,a=t.description||"",i=t.editor||[],r=t.supported||[],s=t.unsupported||[],l=t.creator||t.author||"",c=t.link||"",d=t.version||"";return"string"==typeof i&&(i=o.Ki.get(i)?.editor||[]),Array.isArray(i)||(i=[i]),Array.isArray(r)||(r=[r]),Array.isArray(s)||(s=[s]),s.length>0&&0===r.length&&(r=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator"].filter(e=>!s.includes(e))),{name:n,description:a,formSchema:i,supportedCards:r,unsupportedCard:s,moduleVersion:d,creator:l,moduleLink:c}}function i(e){if(!e)return"No description available";try{const t=/Description:\s*([^\n]+)/i,n=e.match(t);if(n&&n[1]){const e=s(n[1].trim());if(e&&e.length>5)return r(e)}const o=/description:\s*\|([\s\S]*?)(?=\n\s*\w+:|$)/i,a=e.match(o);if(a&&a[1]){const e=a[1].trim().split(/\n{2,}/)[0].trim();if(e&&e.length>5)return r(s(e))}const i=/description:\s*["']([^"']+)["']/i,l=e.match(i);if(l&&l[1]){const e=s(l[1].trim());if(e&&e.length>5)return r(e)}const c=/description:\s*([^\n\r]+)/i,d=e.match(c);if(d&&d[1]){const e=s(d[1].trim());if(e&&e.length>5)return r(e)}const u=e.split("\n");let p=!1,h=[];for(let e=0;e<u.length;e++){const t=u[e].trim();if(t)if(t.includes("Supported cards:")||t.match(/^Version:/i)||t.match(/^Creator:/i)||t.match(/^ID:/i))p=!0;else if(p){if(t.startsWith("```")||t.startsWith("#")||t.startsWith("-")||t.startsWith(">")||t.includes("yaml")||t.match(/^\s*[a-z_]+:/i))continue;if(t.length>10&&!t.includes("Supported")&&(h.push(t),h.join(" ").length>40))break}}return h.length>0?r(s(h.join(" ").trim())):"string"!=typeof e||e.includes("description:")?"No description available":r(s(e))}catch(e){return console.warn("Error during description formatting:",e),"No description available"}}function r(e){if(!e)return e;const t=e.trim(),n=(e,t)=>e>=0&&(-1===o||e<o);let o=-1,a=null;const i=t.search(/[.!?]\s/);n(i)&&(o=i+1,a="punct");const r=t.search(/<br|<\/p>|<p\s|<div|<\/div|<\/a>/i);n(r)&&(o=r,a="html");const s=t.search(/\n|\r\n/);if(n(s)&&(o=s,a="break"),o>=0){let e=t.substring(0,o).trim();if(e.length<5&&t.length>30){const n=t.substring(o+1).search(/[.!?]|\n|<br/i);n>0&&(e=t.substring(0,o+1+n).trim())}return e=e.replace(/<[^>]*>/g,"").trim(),"punct"===a||e.endsWith(".")?e:e+"."}const l=t.replace(/<[^>]*>/g,"").trim();return l.endsWith(".")?l:l+"."}function s(e){return e?e.replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/`(.*?)`/g,"$1").replace(/~~(.*?)~~/g,"$1").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/<\/?[^>]+(>|$)/g,"").replace(/^#+\s+/gm,"").replace(/\n{3,}/g,"\n\n").trim():""}function l(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function c(e,t){if(!e||!t)return 0;const n=e.split(".").map(Number),o=t.split(".").map(Number);for(let e=0;e<Math.max(n.length,o.length);e++){const t=n[e]||0,a=o[e]||0;if(t>a)return 1;if(t<a)return-1}return 0}function d(e,t=!0){const n=e.shadowRoot.getElementById("module-editor-top-marker");if(n){const e=t?"smooth":"instant";n.scrollIntoView({behavior:e,block:"start"})}}},404:(e,t,n)=>{function o(){try{const e=localStorage.getItem("bubble-card-module-store");if(!e)return null;const t=JSON.parse(e);if(localStorage.getItem("bubble-card-api-failure-timestamp")&&t&&t.expiration<Date.now()){console.log("🛡️ API in cooldown period after failure and cache expired, temporary extension of validity");const e=Date.now()+72e5;return t.expiration=e,localStorage.setItem("bubble-card-module-store",JSON.stringify(t)),console.log("⏳ Cache extended until",new Date(e)),t}return t&&t.expiration>Date.now()?t:t?(console.log("⚠️ Cache expired but kept for potential API limit situations"),t):null}catch(e){return console.error("Error reading cache:",e),null}}function a(e){if(e&&0!==Object.keys(e).length)try{const t=Date.now()+864e5;localStorage.setItem("bubble-card-module-store",JSON.stringify({modules:e,expiration:t})),console.log("Module data cached until",new Date(t))}catch(e){console.error("Error saving to cache:",e)}}function i(e,t,n="info"){if(e.hass){const o=new CustomEvent("hass-notification",{detail:{message:t,severity:n},bubbles:!0,composed:!0});e.dispatchEvent(o)}else console.log(`[${n}] ${t}`)}n.d(t,{getCachedModuleData:()=>o,q:()=>i,saveCachedModuleData:()=>a})},490:(e,t,n)=>{function o(e,t,n,o){function a(e){const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}switch(n){case"fan_modes":return e._hass.formatEntityAttributeValue(t,"fan_mode",o);case"hvac_modes":return e._hass.formatEntityState(t,o);case"swing_modes":return e._hass.formatEntityAttributeValue(t,"swing_mode",o);case"preset_modes":return e._hass.formatEntityAttributeValue(t,"preset_mode",o);default:return a(e._hass.formatEntityState(t,o))??a(o)}}function a(e,t){switch(t){case"fan_modes":return e.attributes.fan_mode||null;case"swing_modes":return e.attributes.swing_mode||null;case"preset_modes":return e.attributes.preset_mode||null;case"effect_list":return e.attributes.effect||null;case"source_list":return e.attributes.source||null;case"sound_mode_list":return e.attributes.sound_mode||null;default:return e.state}}function i(e,t,n,o){let a;switch(n){case"hvac_modes":a=document.createElement("ha-icon"),a.slot="graphic",a.icon=function(e){switch(e){case"auto":return"mdi:thermostat-auto";case"cool":return"mdi:snowflake";case"heat":return"mdi:fire";case"heat_cool":return"mdi:sun-snowflake-variant";case"dry":return"mdi:water-percent";case"fan_only":default:return"mdi:fan";case"off":return"mdi:power"}}(o);break;case"fan_modes":if(!t.attributes.fan_modes)return null;a=document.createElement("ha-attribute-icon"),a.slot="graphic",a.attribute="fan_mode",a.attributeValue=o,a.hass=e._hass,a.stateObj=t;break;case"swing_modes":a=document.createElement("ha-attribute-icon"),a.slot="graphic",a.attribute="swing_mode",a.attributeValue=o,a.hass=e._hass,a.stateObj=t;break;case"preset_modes":a=document.createElement("ha-attribute-icon"),a.slot="graphic",a.attribute="preset_mode",a.attributeValue=o,a.hass=e._hass,a.stateObj=t;break;default:a=!1}return a}function r(e,t,n,o){const a=t?.split(".")[0];switch(a){case"input_select":e._hass.callService("input_select","select_option",{entity_id:t,option:n});break;case"select":e._hass.callService("select","select_option",{entity_id:t,option:n});break;case"climate":switch(o.select_attribute){case"hvac_modes":e._hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:n});break;case"fan_modes":e._hass.callService("climate","set_fan_mode",{entity_id:t,fan_mode:n});break;case"swing_modes":e._hass.callService("climate","set_swing_mode",{entity_id:t,swing_mode:n});break;case"preset_modes":e._hass.callService("climate","set_preset_mode",{entity_id:t,preset_mode:n})}break;case"fan":"preset_modes"===o.select_attribute&&e._hass.callService("fan","set_preset_mode",{entity_id:t,preset_mode:n});break;case"light":"effect_list"===o.select_attribute&&e._hass.callService("light","turn_on",{entity_id:t,effect:n});break;case"media_player":switch(o.select_attribute){case"source_list":e._hass.callService("media_player","select_source",{entity_id:t,source:n});break;case"sound_mode_list":e._hass.callService("media_player","select_sound_mode",{entity_id:t,sound_mode:n})}break;default:console.warn(`Unsupported entity type: ${a}`)}}n.d(t,{Ab:()=>r,PW:()=>o,aX:()=>a,z_:()=>i})},491:(e,t,n)=>{n.d(t,{VR:()=>l,Xs:()=>h,dN:()=>c,pd:()=>p});var o=n(537);function a(){window.isScrolling=!0,setTimeout(()=>{window.isScrolling=!1},300)}window.isScrolling=!1,document.addEventListener("scroll",a,{passive:!0});const i=new WeakMap,r=new Set;function s(e){if(window.isScrolling)return;const t=e.composedPath().find(e=>e.classList?.contains("bubble-action"));if(e.composedPath().find(e=>e.classList?.contains("close-pop-up")||e.classList?.contains("bubble-close-button")))return;if(!t)return;let n=i.get(t);if(n)n.resetState();else{const e={tap_action:JSON.parse(t.dataset.tapAction),double_tap_action:JSON.parse(t.dataset.doubleTapAction),hold_action:JSON.parse(t.dataset.holdAction),entity:t.dataset.entity};n=new d(t,e,u),i.set(t,n)}if(n.handleStart(e),!n.isInteractionInProgress())return;r.add(n);const o=()=>{t.removeEventListener("pointerup",a),t.removeEventListener("pointercancel",a),t.removeEventListener("touchend",a),t.removeEventListener("touchcancel",a),document.removeEventListener("pointerup",a),document.removeEventListener("touchend",a),document.removeEventListener("scroll",s),r.delete(n)},a=e=>{n.handleEnd(e),o()},s=()=>{n.handleScroll(),o()};t.addEventListener("pointerup",a,{once:!0}),t.addEventListener("pointercancel",a,{once:!0}),t.addEventListener("touchend",a,{once:!0}),t.addEventListener("touchcancel",a,{once:!0}),document.addEventListener("pointerup",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("scroll",s,{once:!0})}function l(e,t,n){const o=new Event("hass-action",{bubbles:!0,composed:!0}),a={...t};a.entity&&!a.entity_id&&(a.entity_id=a.entity),"tap"===n||"double_tap"===n||"hold"===n?o.detail={config:a,action:n}:(e.modifiedConfig={...a,tap_action:{...a[n]}},delete e.modifiedConfig[n],o.detail={config:e.modifiedConfig,action:"tap"}),e.dispatchEvent(o)}function c(e,t,n,a={}){e.classList.add("bubble-action");const i=t?.tap_action||a?.tap_action||{action:"none"},r=t?.double_tap_action||a?.double_tap_action||{action:"none"},s=t?.hold_action||a?.hold_action||{action:"none"};e.dataset.entity=t?.entity||n,e.dataset.tapAction=JSON.stringify(i),e.dataset.doubleTapAction=JSON.stringify(r),e.dataset.holdAction=JSON.stringify(s);const l="none"!==i.action||"none"!==r.action||"none"!==s.action;return l&&(e.classList.add("bubble-action-enabled"),e.haRipple=(0,o.n)("ha-ripple"),e.appendChild(e.haRipple)),{tap_action:i,double_tap_action:r,hold_action:s,has_action:l}}document.body.addEventListener("pointerdown",s,{passive:!0}),document.body.addEventListener("touchstart",s,{passive:!0});class d{constructor(e,t,n){this.element=e,this.config=t,this.sendActionEvent=n,this.tapTimeout=null,this.holdTimeout=null,this.startX=0,this.startY=0,this.holdFired=!1,this.pointerMoveListener=this.detectScrollLikeMove.bind(this),this.touchMoveListener=this.detectScrollLikeMove.bind(this),this.isDisconnected=!1,this.hasMoved=!1,this.interactionStarted=!1,this.justEndedTouchEventTime=0,this.currentInteractionType=null,this.interactionStartTime=0,this.preventDefaultCalled=!1}isInteractionInProgress(){return this.interactionStarted}resetState(){clearTimeout(this.tapTimeout),clearTimeout(this.holdTimeout),document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("touchmove",this.touchMoveListener),this.tapTimeout=null,this.holdTimeout=null,this.holdFired=!1,this.hasMoved=!1,this.interactionStarted=!1,this.isDisconnected=!1,this.justEndedTouchEventTime=0,this.currentInteractionType=null,this.interactionStartTime=0,this.preventDefaultCalled=!1,this.startX=0,this.startY=0}cleanup(){this.isDisconnected=!0,clearTimeout(this.tapTimeout),clearTimeout(this.holdTimeout),document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("touchmove",this.touchMoveListener),this.tapTimeout=null,this.holdTimeout=null,this.interactionStarted=!1}handleStart(e){const t=Date.now();"pointerdown"===e.type&&t-this.justEndedTouchEventTime<50||window.isScrolling||this.isDisconnected||(this.interactionStarted?"touchstart"===e.type&&"pointerdown"===this.currentInteractionType&&this.interactionStartTime:(this.interactionStarted=!0,this.currentInteractionType=e.type,this.interactionStartTime=t,this.holdFired=!1,this.hasMoved=!1,e.touches&&e.touches[0]?(this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY):(this.startX=e.clientX,this.startY=e.clientY),document.addEventListener("pointermove",this.pointerMoveListener,{passive:!0}),document.addEventListener("touchmove",this.touchMoveListener,{passive:!0}),this.holdTimeout=setTimeout(()=>{"none"===(this.config.hold_action||{action:"none"}).action||window.isScrolling||this.hasMoved||(this.sendActionEvent(this.element,this.config,"hold"),this.holdFired=!0)},400)))}detectScrollLikeMove(e){let t,n;e.touches&&e.touches[0]?(t=e.touches[0].clientX,n=e.touches[0].clientY):(t=e.clientX,n=e.clientY);const o=Math.abs(t-this.startX),i=Math.abs(n-this.startY);(o>5||i>5)&&(this.hasMoved=!0,a(),clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("touchmove",this.touchMoveListener))}handleEnd(e){if("touchend"!==e.type&&"touchcancel"!==e.type||(this.justEndedTouchEventTime=Date.now()),!this.interactionStarted)return;if(window.isScrolling||this.isDisconnected||this.hasMoved)return void(this.interactionStarted=!1);clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("touchmove",this.touchMoveListener);const t=this.holdFired,n=Date.now(),o=this.config.double_tap_action||{action:"none"},a=this.config.tap_action||{action:"none"};let i=!1;if(t||(this.lastTap&&n-this.lastTap<200&&"none"!==o.action?(clearTimeout(this.tapTimeout),this.sendActionEvent(this.element,this.config,"double_tap"),i=!0):"none"!==a.action&&("none"!==o.action?(this.tapTimeout=setTimeout(()=>{this.isDisconnected||this.holdFired||this.hasMoved||this.sendActionEvent(this.element,this.config,"tap")},200),i=!0):(this.sendActionEvent(this.element,this.config,"tap"),i=!0))),i||t){e.cancelable&&e.preventDefault();const n=e=>{const n=e.composedPath().find(e=>e.classList&&e.classList.contains("bubble-pop-up"));let o=!0;n&&"true"===n.dataset.closeOnClick&&(o=!1),o&&e.stopPropagation(),t&&e.preventDefault()};document.body.addEventListener("click",n,{capture:!0,once:!0}),setTimeout(()=>{document.body.removeEventListener("click",n,{capture:!0})},350)}this.lastTap=n,this.interactionStarted=!1}handleScroll(){this.hasMoved=!0,clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("touchmove",this.touchMoveListener),this.interactionStarted=!1}}function u(e,t,n){const o=t.tap_action||{action:"more-info"},a=t.double_tap_action||{action:"none"},i=t.hold_action||{action:"none"},r=t.entity||this.config?.entity,s=e=>e.service&&"entity"===e.target?.entity_id&&r?{...e,target:{...e.target,entity_id:r}}:e,c=s(o),d=s(a),u=s(i);let p;switch(n){case"tap":default:p=c;break;case"double_tap":p=d;break;case"hold":p=u}l(e,{entity:r,tap_action:c,double_tap_action:d,hold_action:u},n)}function p(e,t){e.addEventListener("pointerup",e=>{e.cancelable&&e.preventDefault(),(0,o.jp)("selection")})}function h(){for(const e of r)e.cleanup();r.clear()}},537:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$C:()=>isStateOn,D$:()=>getAttribute,E2:()=>hexToRgb,GM:()=>isColorLight,Gu:()=>getState,JK:()=>setLayout,Nl:()=>applyScrollingEffect,f9:()=>adjustColor,jp:()=>forwardHaptic,mG:()=>getName,md:()=>isEntityType,n:()=>createElement,nF:()=>throttle,qL:()=>resolveCssVariable,qo:()=>toggleBodyScroll,r6:()=>formatDateTime,rC:()=>fireEvent,rY:()=>rgbStringToRgb});var _style_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(273);const fireEvent=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const a=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return a.detail=n,e.dispatchEvent(a),a},forwardHaptic=e=>{fireEvent(window,"haptic",e)},navigate=(e,t,n=!1)=>{n?history.replaceState(null,"",t):history.pushState(null,"",t),fireEvent(window,"location-changed",{replace:n})},colorCache=new Map;function resolveCssVariable(e){let t=e;const n=getComputedStyle(document.body);for(;t&&t.startsWith("var(");){const e=t.match(/var\((--[^,]+),?\s*(.*)?\)/);if(!e)break;const[,o,a]=e;t=n.getPropertyValue(o).trim()||a&&a.trim()||""}return t}function hexToRgb(e){const t=e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function rgbStringToRgb(e){const t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);return t?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]:null}function calculateLuminance(e,t,n){return(.2126*e+.7152*t+.0722*n)/255}function isColorLight(e,t=.5){const n=resolveCssVariable(e);if(!n)return!1;if(colorCache.has(n))return colorCache.get(n);let o=hexToRgb(n)||rgbStringToRgb(n);if(!o)return colorCache.set(n,!1),!1;const a=calculateLuminance(...o)>t;return colorCache.set(n,a),a}function adjustColor(e,t){return e.map(e=>Math.min(255,Math.round(e*t)))}function getName(e){const t=e.config.name,n=getAttribute(e,"friendly_name");return e.name||t||n||""}function getState(e,t=e.config.entity){return e._hass.states[t]?.state??""}function getAttribute(context,attribute,entity=context.config.entity){if(!attribute)return"";try{if(attribute.includes(" "))return eval(`context._hass.states['${entity}']?.attributes['${attribute}']`)??"";{const result=eval(`context._hass.states['${entity}']?.attributes.${attribute}`);return 0===result?"0":result??""}}catch(e){return console.warn(`Error accessing attribute '${attribute}' for entity '${entity}':`,e),""}}function isEntityType(e,t,n){return void 0===n&&(n=e?.config?.entity),n&&"string"==typeof n&&n.startsWith(t+".")||!1}function isStateOn(e,t=e.config.entity){const n=getState(e,t).toLowerCase(),o=getAttribute(e,"unit_of_measurement",t)?.includes("°"),a=Number(n);return!!(["on","open","opening","closing","cleaning","true","home","playing","locked","occupied","available","running","active","connected","online","mowing","edgecut","starting","heat","cool","dry","heat_cool","fan_only","auto","alarm"].includes(n)||a||o)}function createElement(e,t=""){const n=document.createElement(e);return""!==t&&t.split(" ").forEach(e=>{n.classList.add(e)}),n}function debounce(e,t){let n;return function(...o){clearTimeout(n),n=setTimeout(()=>e.apply(this,o),t)}}function applyScrollingEffect(e,t,n){const{scrolling_effect:o=!0}=e.config;if(o){if(t.previousText!==n&&(t.previousText=n,t.innerHTML=n,t.style="",t.removeAttribute("data-animated"),requestAnimationFrame(()=>{setTimeout(()=>{a(),setTimeout(a,300)},50)}),!t.eventAdded)){const e=debounce(()=>{t.innerHTML=t.previousText,a()},500);window.addEventListener("resize",e),t.eventAdded=!0}}else applyNonScrollingStyle(t,n);function a(){if(t.isConnected&&t.scrollWidth>t.clientWidth){const e='<span class="bubble-scroll-separator"> | </span>',o=`<span>${n+e+n+e}</span>`;t.innerHTML=`<div class="scrolling-container">${o}</div>`,t.setAttribute("data-animated","true");const a=t.querySelector(".scrolling-container span");requestAnimationFrame(()=>{if(a&&a.scrollWidth>0){const e=16,t=a.scrollWidth/2,n=Math.max(1,t/e);a.style.animationDuration=`${n.toFixed(2)}s`}}),"IntersectionObserver"in window&&(window.bubbleScrollObserver||(window.bubbleScrollObserver=new IntersectionObserver(e=>{e.forEach(e=>{const t=e.target.querySelector(".scrolling-container span");t&&(t.style.animationPlayState=e.isIntersecting?"running":"paused")})},{threshold:.1})),window.bubbleScrollObserver.observe(t))}}}function applyNonScrollingStyle(e,t){e.innerHTML=t,e.previousText=t,Object.assign(e.style,{whiteSpace:"normal",display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical",textOverflow:"ellipsis"})}function formatDateTime(e,t){if(!e)return"";const n=new Date(e),o=new Date;let a,i,r=Math.floor((o-n)/1e3);return isNaN(r)?"":(r<60?(a="second",i=r+1):r<3600?(a="minute",i=Math.round(r/60)):r<86400?(a="hour",i=Math.round(r/3600)):(a="day",i=Math.round(r/86400)),new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(-i,a))}let cachedHomeAssistant=null,cachedMain=null,cachedDrawer=null,cachedHuiRoot=null,isCached=!1;function setLayout(e,t=null,n=null){const o=t||e.content;if(!o)return;let a;if(n)a=e.config.card_layout??n;else{isCached||(cachedHomeAssistant=document.querySelector("body > home-assistant"),cachedMain=cachedHomeAssistant?.shadowRoot?.querySelector("home-assistant-main"),cachedDrawer=cachedMain?.shadowRoot?.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace"),cachedHuiRoot=cachedDrawer?.shadowRoot?.querySelector("hui-root"),cachedHomeAssistant&&cachedMain&&cachedDrawer&&cachedHuiRoot?isCached=!0:(cachedHomeAssistant=null,cachedMain=null,cachedDrawer=null,cachedHuiRoot=null,isCached=!1)),cachedHuiRoot&&!cachedHuiRoot.isConnected&&(isCached=!1,cachedHomeAssistant=null,cachedMain=null,cachedDrawer=null,cachedHuiRoot=null);let t="normal";if(cachedHuiRoot?.shadowRoot){const e=cachedHuiRoot.shadowRoot.querySelector("#view > hui-view > hui-masonry-view");window.isSectionView=!e,t=window.isSectionView?"large":"normal"}a=e.config.card_layout??t}if(e.previousLayout===a)return;e.previousLayout=a;const i="large"===a||"large-2-rows"===a||"large-sub-buttons-grid"===a,r="large-2-rows"===a,s="large-sub-buttons-grid"===a;o.classList.toggle("large",i),o.classList.toggle("rows-2",r),o.classList.toggle("sub-buttons-grid",s),o===e.content&&e.elements?.mainContainer&&(e.config.rows||e.config.grid_options?.rows)?"auto"===e.config.rows||"auto"===e.config.grid_options?.rows||e.elements.mainContainer.style.setProperty("--row-size",e.config.rows||e.config.grid_options?.rows):"separator"===e.config.card_type&&e.elements.mainContainer.style.setProperty("--row-size",.8)}function throttle(e,t=300){let n,o,a=new Date(0);return(...i)=>{o=i;const r=Date.now()-a;r>=t?(a=Date.now(),e(...o)):n||(n=setTimeout(()=>{n=void 0,a=Date.now(),e(...o)},t-r))}}let previousScrollY=0;const scrollLockHtmlClass="bubble-html-scroll-locked";function injectNoScrollStyles(){const e="bubble-card-no-scroll-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`\n        html.${scrollLockHtmlClass} {\n            overflow: hidden !important;\n        }\n    `,document.head.appendChild(t)}function toggleBodyScroll(e){if(injectNoScrollStyles(),e){if(document.documentElement.classList.contains(scrollLockHtmlClass))return;previousScrollY=void 0!==window.scrollY?window.scrollY:(document.documentElement||document.body.parentNode||document.body).scrollTop,document.documentElement.classList.add(scrollLockHtmlClass)}else{if(!document.documentElement.classList.contains(scrollLockHtmlClass))return;document.documentElement.classList.remove(scrollLockHtmlClass),window.scrollTo({top:previousScrollY,behavior:"instant"})}}},571:(e,t,n)=>{n.d(t,{N5:()=>s,extractYamlFromMarkdown:()=>r,oV:()=>i,tF:()=>l});var o=n(382),a=n(395);function i(e){if(!e)return null;try{const t=o.Ay.load(e);if(t&&"object"==typeof t){const e=Object.keys(t);if(e.length>0){if(t[e[0]]?.name)return e[0];for(const n of e)if(t[n]?.name)return n;return e[0]}}}catch(e){console.warn("Error during YAML parsing for key extraction:",e)}try{const t=/^([a-zA-Z0-9_-]+)(?:\s*:|:)/m,n=e.match(t);if(n&&n[1])return n[1]}catch(e){console.warn("Error during key extraction by regex:",e)}return null}function r(e,t=null){if(!e)return"";const n=[...e.matchAll(/```(?:yaml|yml)\s+([\s\S]*?)```/g)];if(n.length>0){for(const e of n){let n=e[1].trim();try{const e=o.Ay.load(n);if(e&&"object"==typeof e){const a=Object.keys(e)[0];if(e[a]?.name||e[a]?.code||e[a]?.description||e[a]?.version)return t&&"object"==typeof e[a]&&!e[a].link&&(e[a].link=t,n=o.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})),n}}catch(e){console.warn("Error parsing YAML block:",e)}}let e=n[0][1].trim();if(t)try{const n=o.Ay.load(e);if(n&&"object"==typeof n){const a=Object.keys(n)[0];a&&"object"==typeof n[a]&&!n[a].link&&(n[a].link=t,e=o.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}))}}catch(e){console.warn("Error adding link to raw YAML block:",e)}return e}const a=[...e.matchAll(/```\s*([\s\S]*?)```/g)];if(a.length>0){let e="";for(const t of a){const n=t[1].trim();n.length>e.length&&(e=n)}if(t&&e)try{const n=o.Ay.load(e);if(n&&"object"==typeof n){const a=Object.keys(n)[0];a&&"object"==typeof n[a]&&!n[a].link&&(n[a].link=t,e=o.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}))}}catch(e){console.warn("Error adding link to generic code block:",e)}return e}return console.warn("No YAML block found in description"),""}function s(e){return e&&Array.isArray(e)?e.filter(e=>e&&e.title).map(e=>{try{const t=e.title.match(/\[(.*?)\]/);let n=t?(0,a.TL)(t[1]):`discussion-${e.number}`,o="",s=e.html_url;if(e.body&&(o=r(e.body,s),o)){const e=i(o);e&&(n=e)}const c=l(o,n,{bodyText:e.body,title:e.title,defaultCreator:e.user?.login||""});return{id:c.id,name:c.name,description:c.description,creator:c.creator,version:c.version,moduleLink:e.html_url,type:c.type,imageUrl:c.imageUrl,supportedCards:Array.isArray(c.supported)?c.supported:c.supported?[c.supported]:[],unsupportedCards:Array.isArray(c.unsupported)?c.unsupported:c.unsupported?[c.unsupported]:[],createdAt:e.created_at,updated_at:e.updated_at,userAvatar:e.user?.avatar_url,comments:e.comments,reactions:e.reactions,yamlContent:o}}catch(t){return console.error(`Error parsing discussion #${e.number}:`,t),{id:`discussion-${e.number}`,name:e.title||`Discussion #${e.number}`,description:"Error parsing the discussion",creator:e.user?.login||"",version:"",moduleLink:e.html_url,type:"",supportedCards:[],unsupportedCards:[],createdAt:e.created_at,updated_at:e.updated_at,userAvatar:e.user?.avatar_url,comments:e.comments,reactions:e.reactions}}}).filter(e=>e.id&&e.name):[]}function l(e,t,n={}){const{bodyText:i,title:r,defaultCreator:s}=n;let l={id:t,name:t,version:"1.0",author:"",description:"",type:"Module",editor:[],supported:["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator"],unsupported:[],creator:s||"",link:"",imageUrl:"",yaml:e};const c={name:!1,version:!1,author:!1,creator:!1,description:!1,type:!1,link:!1,supported:!1,unsupported:!1,editor:!1,code:!1,imageUrl:!1},d=(e,t,n=t,o=[])=>{if(void 0!==e[t])return l[n]=e[t],c[n]=!0,!0;for(const t of o)if(void 0!==e[t]&&!c[n])return l[n]=e[t],c[n]=!0,!0;return!1},u=e=>"string"==typeof e?e:Array.isArray(e)?e.join("\n"):"object"==typeof e?JSON.stringify(e):"";if(e)try{const n=o.Ay.load(e);if(n&&"object"==typeof n){if(1===Object.keys(n).length){const e=Object.keys(n)[0],o=n[e];if(l.id===t&&(l.id=e),o&&"object"==typeof o){if(d(o,"name"),d(o,"version"),d(o,"author"),d(o,"type"),d(o,"code"),d(o,"editor"),d(o,"link"),d(o,"creator"),d(o,"form_schema","editor"),d(o,"supported","supported"),d(o,"unsupported","unsupported",["unsupported_card"]),o.unsupported&&!o.supported&&!c.supported){const e=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator"];l.supported=e.filter(e=>!o.unsupported.includes(e)),c.supported=!0}void 0!==o.description&&(l.description=u(o.description),c.description=!0),o.info&&"object"==typeof o.info&&(d(o.info,"name"),d(o.info,"version"),d(o.info,"author"),d(o.info,"type"),d(o.info,"creator"),d(o.info,"link"),void 0===o.info.description||c.description||(l.description=u(o.info.description),c.description=!0))}}else{if(d(n,"name"),d(n,"version"),d(n,"author"),d(n,"type"),d(n,"code"),d(n,"editor"),d(n,"link"),d(n,"creator"),d(n,"form_schema","editor"),d(n,"supported","supported"),d(n,"unsupported","unsupported",["unsupported_card"]),n.unsupported&&!n.supported&&!c.supported){const e=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator"];l.supported=e.filter(e=>!n.unsupported.includes(e)),c.supported=!0}void 0!==n.description&&(l.description=u(n.description),c.description=!0)}if(!(c.editor||l.editor&&l.editor.length)){const e=JSON.stringify(n);if(e.includes('"type":')&&e.includes('"name":')&&1===Object.keys(n).length){const e=Object.keys(n)[0],t=n[e];if(t&&"object"==typeof t){const e=Object.keys(t).filter(e=>"object"==typeof t[e]&&(t[e].type||t[e].name||t[e].field));e.length>0&&(l.editor=e.map(e=>({name:e,type:t[e].type||"input",...t[e]})),c.editor=!0)}}}}}catch(e){console.error("Error during YAML analysis:",e)}if(!l.author&&l.creator?l.author=l.creator:!l.creator&&l.author&&(l.creator=l.author),i){if(!c.version){const e=[/\*\*Version:\*\*\s*(v?[\d\.]+)/i,/\|\s*(?:Version|v):\s*(v?[\d\.]+)\s*\|/i,/version\s+(v?[\d\.]+)/i];for(const t of e){const e=i.match(t);if(e&&e[1]){l.version=e[1];break}}}if(!c.description&&!l.description){const e=i.match(/\*\*Description\s*:\*\*\s*(.*?)(?=\n\s*\*\*|\n\s*#|$)/is);if(e&&e[1])l.description=(0,a.yh)(e[1].trim());else{const e=(0,a.yh)(i).split(/\n{2,}/);for(const t of e){const e=t.trim();if(e&&!e.startsWith("#")&&!e.match(/^[a-z_]+\s*:/i)&&e.length>15){l.description=e;break}}}}if(!c.supported&&0===l.supported.length){const e=i.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*\[(.*?)\]/i);e&&(l.supported=e[1].split(",").map(e=>e.trim().replace(/['"]/g,"")))}if(!(c.creator||l.creator&&l.creator!==s)){const e=i.match(/\*\*Creator\s*:\*\*\s*\[?([^\]\n\r]+)(?:\]|\n|$)/i);e&&(l.creator=e[1].trim(),l.author||(l.author=l.creator))}if(!c.imageUrl&&!l.imageUrl){const e={Screenshot:i.match(/Screenshot:([^#]*?)(?=#|\n\s*\n\s*\*\*|$)/is)?.[1]||"",GetThisModule:i.match(/Get this Module([^#]*?)(?=#|\n\s*\n\s*\*\*|$)/is)?.[1]||""},t=[{regex:/!\[.*?\]\((https:\/\/[^)]+)\)/g,isGlobal:!0},{regex:/<img[^>]*src=["'](https:\/\/[^"']+)["'][^>]*>/i,isGlobal:!1},{regex:/src="(https:\/\/github\.com\/user-attachments\/assets\/[^"]+)"/i,isGlobal:!1}];for(const n of Object.values(e))if(n){for(const e of t)if(e.isGlobal){const t=[...n.matchAll(e.regex)];if(t.length>0){l.imageUrl=t[0][1];break}}else{const t=n.match(e.regex);if(t){l.imageUrl=t[1];break}}if(l.imageUrl)break}if(!l.imageUrl){const e=[...i.matchAll(/!\[.*?\]\((https:\/\/[^)]+)\)/g)];if(e.length>0){const t=e.filter(e=>e[1].includes("user-images.githubusercontent.com")||e[1].includes("github.com/user-attachments"));l.imageUrl=t.length>0?t[0][1]:e[0][1]}else{const e=i.match(/<img[^>]*src=["'](https:\/\/[^"']+)["'][^>]*>/i);e&&(l.imageUrl=e[1])}}}}if(r){if(!c.type){const e=r.match(/\[(.*?) Module\]/i);e&&(l.type=e[1].toLowerCase())}if(!c.version&&"1.0"===l.version){const e=r.match(/(v?[\d\.]+)/);e&&(l.version=e[1])}if(!c.name){let e=r.replace(/\[.*?\]\s*/,"").trim();e=e.replace(/\s*-\s*v?[\d\.]+$/,"").trim(),l.name=e}}return l}},784:(e,t,n)=>{n.d(t,{Ki:()=>g,SF:()=>w,nO:()=>h,sq:()=>u,wv:()=>p});var o=n(537),a=n(87),i=n(198),r=n(76),s=n(382);let l=null,c=!1,d=null,u=new Map;async function p(e){return c&&l?l:d||(d=(async()=>{const t=await y(["/local/bubble/bubble-modules.yaml","/hacsfiles/Bubble-Card/bubble-modules.yaml","/local/community/Bubble-Card/bubble-modules.yaml"]),n=e?._hass?await async function(e){const t=e.states["sensor.bubble_card_modules"];if(!t)return{};if(!t.attributes?.modules)return{};const n={};let o=0;try{o=Object.keys(t.attributes.modules).length,Object.values(t.attributes.modules).forEach(e=>{try{if(!e.yaml&&(e.code||e.description))return void(n[e.id]=e);if(!e.yaml)return}catch(t){console.error(`❌ YAML parsing error for module ${e.id}:`,t),"string"==typeof e.yaml?console.error("Problematic YAML content:",e.yaml.substring(0,100)+"..."):console.error("Problematic YAML content type:",typeof e.yaml)}})}catch(e){console.error("Error while processing modules from text entity:",e)}return n}(e._hass):{};return u.clear(),t&&Object.keys(t).forEach(e=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&u.set(e,"yaml")}),n&&Object.keys(n).forEach(e=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&u.set(e,"entity")}),l={...t,...n},g.clear(),Object.entries(l).forEach(([e,t])=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&g.set(e,t)}),c=!0,l})(),d)}function h(e){e.config?.card_type&&!e.stylesYAML&&(e.stylesYAML=c&&l?Promise.resolve(l):p(e))}document.addEventListener("yaml-modules-updated",()=>{c=!1,l=null,d=null,window.dispatchEvent(new CustomEvent("bubble-card-modules-changed"))}),window.addEventListener("bubble-card-module-updated",e=>{e.detail&&e.detail.moduleId&&e.detail.moduleData&&(g.set(e.detail.moduleId,e.detail.moduleData),u.has(e.detail.moduleId)||u.set(e.detail.moduleId,"editor"),window.dispatchEvent(new CustomEvent("bubble-card-modules-changed")))});const b=new s.ZU("!include",{kind:"scalar",resolve:function(e){return"string"==typeof e},construct:function(e){const t=new XMLHttpRequest;if(t.open("GET",`/local/bubble/${e}`,!1),t.send(null),200!==t.status)return console.error(`Error including the file /local/bubble/${e}: HTTP status ${t.status}`),null;try{return s.Hh(t.responseText,{schema:m})}catch(t){return console.error(`Error parsing the included YAML file (/local/bubble/${e}):`,t),null}}}),m=s.my.extend([b]);let g=new Map,f=new Map;const _=new Map,y=async e=>{for(const t of e){const e=t+`?v=${Date.now()}`;try{const n=await fetch(e,{cache:"no-store"});if(!n.ok){window.bubbleYamlWarning=!0;continue}const o=await n.text();let a;return a=v(o),!g.size&&a&&Object.entries(a).forEach(([e,t])=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&g.set(e,t)}),f.set(t,a),a}catch(t){console.warn(`Error fetching 'bubble-modules.yaml' from ${e}:`,t),window.bubbleYamlWarning=!0}}return null},v=e=>{if(!e||"string"!=typeof e)return null;try{return s.Hh(e,{schema:m})}catch(e){return console.error("YAML parsing error:",e),null}},w=async(e,t=e.card)=>{const n="STYLE"===t.tagName,o=n?null:t,a=e.config.styles;if(void 0===e.cardLoaded&&!n&&(e.lastEvaluatedStyles="",e.initialLoad=!0,!e._moduleChangeListenerAdded)){const t=()=>{e.lastEvaluatedStyles="",e.stylesYAML=null,g.forEach((t,n)=>{e._processedSchemas?.[n]&&delete e._processedSchemas[n]}),w(e,e.card)};window.addEventListener("bubble-card-modules-changed",t),window.addEventListener("bubble-card-module-updated",t),document.addEventListener("yaml-modules-updated",t),e._moduleChangeListenerAdded=!0,e._moduleChangeHandler=t}e.initialLoad&&o?.style&&(o.style.display="none");const i=function(e,t){if("STYLE"===t.tagName)return t;if(!e.styleElement||e.styleElement.parentElement!==t){const n=document.createElement("style");n.id="bubble-styles",t.appendChild(n),e.styleElement=n}return e.styleElement}(e,t);try{let t={};g.size>0?g.forEach((e,n)=>{t[n]=e}):t=await e.stylesYAML||{};let r=[];const s=new Set,l=[],c=new Set;Array.isArray(e.config.modules)?e.config.modules.forEach(e=>{"string"==typeof e&&e.startsWith("!")?c.add(e.substring(1)):"string"==typeof e&&l.push(e)}):e.config.modules&&"string"==typeof e.config.modules&&(e.config.modules.startsWith("!")?c.add(e.config.modules.substring(1)):l.push(e.config.modules)),g.has("default")&&!c.has("default")&&s.add("default");const d=e=>{if(!e||!e.states||!e.states["sensor.bubble_card_modules"])return;const t=e.states["sensor.bubble_card_modules"].attributes.modules;if(t)for(const e in t)!0===t[e].is_global&&g.has(e)&&!c.has(e)&&s.add(e)};e._hass&&d(e._hass),l.forEach(e=>{g.has(e)&&!c.has(e)&&s.add(e)}),r=Array.from(s);let u="";r.length>0&&(u=r.map(n=>{try{let o=t[n]??"";if("object"==typeof o&&""===o.code||""===o)return"{}";const a="object"==typeof o&&o.code?o.code:o;return x(e,a,{type:"module",id:n})}catch(e){return console.error(`Bubble Card - Error processing module "${n}" before evaluation:`,e),"{}"}}).join("\n"));let p="";try{p=x(e,a,{type:"custom_styles"})}catch(e){console.error("Bubble Card - Error processing custom styles before evaluation:",e)}const h=`${u}\n${p}`.trim();let b=!0;n?h===i.textContent&&(b=!1):h===e.lastEvaluatedStyles?b=!1:e.lastEvaluatedStyles=h,b&&(i.textContent=h),e.initialLoad&&o?.style&&(o.style.display="",n||(e.initialLoad=!1,e.cardLoaded=!0))}catch(t){console.error("Error applying styles:",t),e.initialLoad&&o?.style&&(o.style.display="")}};function x(e,t="",n={type:"unknown"}){if(!t)return"";if(e.editor&&e.templateEvaluationBlocked)return"";const s=["innerText","textContent","innerHTML"];["state","name"].forEach(n=>{s.map(e=>`card.querySelector('.bubble-${n}').${e} =`).some(e=>t.includes(e))&&!e.elements[n].templateDetected&&(e.elements[n].templateDetected=!0)});try{let s=_.get(t);s||(s=Function("hass","entity","state","icon","subButtonState","subButtonIcon","getWeatherIcon","card","name","checkConditionsMet",`return \`${t}\`;`),_.set(t,s));const c="pop-up"===e.config.card_type?e.popUp:e.card,d=(l=s.call(e,e._hass,e.config.entity,(0,o.Gu)(e),e.elements.icon,(0,i.AQ)(e),e.subButtonIcon,a.w1,c,c.name,r.XH),l.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\s+/g," ").replace(/\s*([{};,])\s*/g,"$1").replace(/([a-zA-Z0-9_-]+)\s*:\s*;/g,"").replace(/undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g,"").replace(/[^{};]+\s*{\s*}/g,"").replace(/,(?=\s*[}\n])/g,"").split("\n").filter(e=>e.includes("{")||e.includes("}")||e.includes(":")||e.trim().match(/['"]{2}/g)||e.includes("${")||e.match(/^@supports|^@media|^@keyframes|^@layer/)).join("\n").match(/(@[^{]*?\{(?:[^{}]*?\{[^{}]*?\})*?[^{}]*?\}|[^{}]*?\{[^{}]*?\})/g)?.join("\n")||"");if(e.editor){if(e.templateEvaluationBlocked||e.lastEmittedEditorError){const t={cardType:e.config?.card_type,entityId:e.config?.entity,sourceType:n.type,moduleId:n.id};requestAnimationFrame(()=>k("",t))}e.templateEvaluationBlocked=!1,e.lastEmittedEditorError=null,e.templateErrorClearTimeout&&(clearTimeout(e.templateErrorClearTimeout),e.templateErrorClearTimeout=null)}return d}catch(t){let o="Unknown source";"module"===n.type&&n.id?o=`Module ('${n.id}')`:"custom_styles"===n.type?o="Card Configuration (styles section)":"unknown"===n.type&&(o="Direct call or unspecified source");const a=e.config?.card_type||"N/A",i=e.config?.entity||"N/A",r=`Bubble Card - Template Error:\n  Card Type: ${a}\n  Entity: ${i}\n  Source: ${o}\n  Error: ${t.message}`;if(e.editor){const o=t.message;e.lastEmittedEditorError=o;const r={cardType:a,entityId:i,sourceType:n.type,moduleId:n.id};requestAnimationFrame(()=>k(o,r)),e.templateEvaluationBlocked=!0,e.templateErrorClearTimeout&&clearTimeout(e.templateErrorClearTimeout),e.templateErrorClearTimeout=setTimeout(()=>{e.templateEvaluationBlocked=!1},2e3)}return console.error(r),""}var l}function k(e,t){window.dispatchEvent(new CustomEvent("bubble-card-error",{detail:{message:e,context:t}}))}}},__webpack_module_cache__={},leafPrototypes,getProto;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}getProto=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var n=Object.create(null);__webpack_require__.r(n);var o={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var a=2&t&&e;"object"==typeof a&&!~leafPrototypes.indexOf(a);a=getProto(a))Object.getOwnPropertyNames(a).forEach(t=>o[t]=()=>e[t]);return o.default=()=>e,__webpack_require__.d(n,o),n},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};let version="v3.0.0";function initializeContent(e){if(!e.content){let t=e.shadowRoot||e.attachShadow({mode:"open"}),n=document.createElement("ha-card");n.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let o=document.createElement("div");o.className="card-content",o.style.padding="0",n.appendChild(o),t.appendChild(n),e.card=n,e.content=o}}const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(e,t,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let t=this.o;const n=this.t;if(e&&void 0===t){const e=void 0!==n&&1===n.length;e&&(t=o.get(n)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(n,t))}return t}toString(){return this.cssText}}const r=e=>new n("string"==typeof e?e:e+"",void 0,s),i=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new n(o,e,s)},S=(n,o)=>{if(e)n.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of o){const o=document.createElement("style"),a=t.litNonce;void 0!==a&&o.setAttribute("nonce",a),o.textContent=e.cssText,n.appendChild(o)}},c=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return r(t)})(e):e,{is:reactive_element_i,defineProperty:reactive_element_e,getOwnPropertyDescriptor:h,getOwnPropertyNames:reactive_element_r,getOwnPropertySymbols:reactive_element_o,getPrototypeOf:reactive_element_n}=Object,a=globalThis,reactive_element_c=a.trustedTypes,l=reactive_element_c?reactive_element_c.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(e,t)=>e,u={toAttribute(e,t){switch(t){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},f=(e,t)=>!reactive_element_i(e,t),b={attribute:!0,type:String,converter:u,reflect:!1,useDefault:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&reactive_element_e(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:a}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const i=o?.call(this);a?.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const e=reactive_element_n(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const e=this.properties,t=[...reactive_element_r(e),...reactive_element_o(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const a=(void 0!==n.converter?.toAttribute?n.converter:u).toAttribute(t,n.type);this._$Em=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:u;this._$Em=o,this[o]=a.fromAttribute(t,e.type)??this._$Ej?.get(o)??null,this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){const o=this.constructor,a=this[e];if(n??=o.getPropertyOptions(e),!((n.hasChanged??f)(a,t)||n.useDefault&&n.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:a},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==a||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,n,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[d("elementProperties")]=new Map,y[d("finalized")]=new Map,p?.({ReactiveElement:y}),(a.reactiveElementVersions??=[]).push("2.1.0");const lit_html_t=globalThis,lit_html_i=lit_html_t.trustedTypes,lit_html_s=lit_html_i?lit_html_i.createPolicy("lit-html",{createHTML:e=>e}):void 0,lit_html_e="$lit$",lit_html_h=`lit$${Math.random().toFixed(9).slice(2)}$`,lit_html_o="?"+lit_html_h,lit_html_n=`<${lit_html_o}>`,lit_html_r=document,lit_html_l=()=>lit_html_r.createComment(""),lit_html_c=e=>null===e||"object"!=typeof e&&"function"!=typeof e,lit_html_a=Array.isArray,lit_html_u=e=>lit_html_a(e)||"function"==typeof e?.[Symbol.iterator],lit_html_d="[ \t\n\f\r]",lit_html_f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${lit_html_d}(?:([^\\s"'>=/]+)(${lit_html_d}*=${lit_html_d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),lit_html_p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,lit_html_y=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),x=lit_html_y(1),lit_html_b=lit_html_y(2),w=lit_html_y(3),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=lit_html_r.createTreeWalker(lit_html_r,129);function P(e,t){if(!lit_html_a(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==lit_html_s?lit_html_s.createHTML(t):t}const V=(e,t)=>{const n=e.length-1,o=[];let a,i=2===t?"<svg>":3===t?"<math>":"",r=lit_html_f;for(let t=0;t<n;t++){const n=e[t];let s,l,c=-1,d=0;for(;d<n.length&&(r.lastIndex=d,l=r.exec(n),null!==l);)d=r.lastIndex,r===lit_html_f?"!--"===l[1]?r=v:void 0!==l[1]?r=_:void 0!==l[2]?($.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=m):void 0!==l[3]&&(r=m):r===m?">"===l[0]?(r=a??lit_html_f,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?m:'"'===l[3]?g:lit_html_p):r===g||r===lit_html_p?r=m:r===v||r===_?r=lit_html_f:(r=m,a=void 0);const u=r===m&&e[t+1].startsWith("/>")?" ":"";i+=r===lit_html_f?n+lit_html_n:c>=0?(o.push(s),n.slice(0,c)+lit_html_e+n.slice(c)+lit_html_h+u):n+lit_html_h+(-2===c?t:u)}return[P(e,i+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class N{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,i=0;const r=e.length-1,s=this.parts,[l,c]=V(e,t);if(this.el=N.createElement(l,n),C.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=C.nextNode())&&s.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(lit_html_e)){const t=c[i++],n=o.getAttribute(e).split(lit_html_h),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:n,ctor:"."===r[1]?H:"?"===r[1]?I:"@"===r[1]?L:k}),o.removeAttribute(e)}else e.startsWith(lit_html_h)&&(s.push({type:6,index:a}),o.removeAttribute(e));if($.test(o.tagName)){const e=o.textContent.split(lit_html_h),t=e.length-1;if(t>0){o.textContent=lit_html_i?lit_html_i.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],lit_html_l()),C.nextNode(),s.push({type:2,index:++a});o.append(e[t],lit_html_l())}}}else if(8===o.nodeType)if(o.data===lit_html_o)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(lit_html_h,e+1));)s.push({type:7,index:a}),e+=lit_html_h.length-1}a++}}static createElement(e,t){const n=lit_html_r.createElement("template");return n.innerHTML=e,n}}function lit_html_S(e,t,n=e,o){if(t===T)return t;let a=void 0!==o?n._$Co?.[o]:n._$Cl;const i=lit_html_c(t)?void 0:t._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),void 0===i?a=void 0:(a=new i(e),a._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=a:n._$Cl=a),void 0!==a&&(t=lit_html_S(e,a._$AS(e,t.values),a,o)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??lit_html_r).importNode(t,!0);C.currentNode=o;let a=C.nextNode(),i=0,r=0,s=n[0];for(;void 0!==s;){if(i===s.index){let t;2===s.type?t=new R(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new z(a,this,e)),this._$AV.push(t),s=n[++r]}i!==s?.index&&(a=C.nextNode(),i++)}return C.currentNode=lit_html_r,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lit_html_S(this,e,t),lit_html_c(e)?e===E||null==e||""===e?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==T&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):lit_html_u(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&lit_html_c(this._$AH)?this._$AA.nextSibling.data=e:this.T(lit_html_r.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=N.createElement(P(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new M(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new N(e)),t}k(e){lit_html_a(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of e)o===t.length?t.push(n=new R(this.O(lit_html_l()),this.O(lit_html_l()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,a){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}_$AI(e,t=this,n,o){const a=this.strings;let i=!1;if(void 0===a)e=lit_html_S(this,e,t,0),i=!lit_html_c(e)||e!==this._$AH&&e!==T,i&&(this._$AH=e);else{const o=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=lit_html_S(this,o[n+r],t,r),s===T&&(s=this._$AH[r]),i||=!lit_html_c(s)||s!==this._$AH[r],s===E?e=E:e!==E&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}i&&!o&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}}class L extends k{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){if((e=lit_html_S(this,e,t,0)??E)===T)return;const n=this._$AH,o=e===E&&n!==E||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==E&&(n===E||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){lit_html_S(this,e)}}const Z={M:lit_html_e,P:lit_html_h,A:lit_html_o,C:1,L:V,R:M,D:lit_html_u,V:lit_html_S,I:R,H:k,N:I,U:L,B:H,F:z},j=lit_html_t.litHtmlPolyfillSupport;j?.(N,R),(lit_html_t.litHtmlVersions??=[]).push("3.3.0");const B=(e,t,n)=>{const o=n?.renderBefore??t;let a=o._$litPart$;if(void 0===a){const e=n?.renderBefore??null;o._$litPart$=a=new R(t.insertBefore(lit_html_l(),e),e,void 0,n??{})}return a._$AI(e),a},lit_element_s=globalThis;class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=B(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}}lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,lit_element_s.litElementHydrateSupport?.({LitElement:lit_element_i});const lit_element_o=lit_element_s.litElementPolyfillSupport;lit_element_o?.({LitElement:lit_element_i});const lit_element_n={_$AK:(e,t,n)=>{e._$AK(t,n)},_$AL:e=>e._$AL};(lit_element_s.litElementVersions??=[]).push("4.2.0");var style=__webpack_require__(273),utils=__webpack_require__(537),tap_actions=__webpack_require__(491);const popupState={hashRecentlyAdded:!1,scrollY:0,currentHash:null,hashChangeProtection:!1,isAnimating:!1,animationDuration:300,activePopups:new Set,entityTriggeredPopup:null},dialogNode=new Set(["HA-DIALOG","HA-MORE-INFO-DIALOG","HA-DIALOG-DATE-PICKER"]);function clickOutside(e,t){(t.config.close_by_clicking_outside??1)&&(e.composedPath().find(e=>!(!e.classList&&!e.nodeName)&&(e.classList?.contains("bubble-pop-up")||dialogNode.has(e.nodeName)))||removeHash())}function resetCloseTimeout(e){e.config.auto_close&&e.closeTimeout&&(clearTimeout(e.closeTimeout),e.closeTimeout=setTimeout(removeHash,e.config.auto_close))}function removeHash(){return!(popupState.hashRecentlyAdded||!location.hash||popupState.hashChangeProtection||(setTimeout(()=>{if(popupState.hashChangeProtection)return;const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))},50),0))}function addHash(e){popupState.hashChangeProtection=!0;const t=e.startsWith("#")?window.location.href.split("#")[0]+e:e;history.pushState(null,"",t),window.dispatchEvent(new Event("location-changed")),setTimeout(()=>{popupState.hashChangeProtection=!1},200)}function hideContent(e,t){e.config.background_update?e.popUp.style.display="none":e.editor||(e.hideContentTimeout=setTimeout(()=>{const{sectionRow:t,sectionRowContainer:n}=e;"hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!0,t.style.display="none",n?.classList.contains("card")&&(n.style.display="none"))},t))}function displayContent(e){if(e.config.background_update)return void(e.popUp.style.display="");const{sectionRow:t,sectionRowContainer:n,popUp:o}=e;o.style.transform="","hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!1,t.style.display="",n?.classList.contains("card")&&(n.style.display=""))}function toggleBackdrop(e,t){const{showBackdrop:n,hideBackdrop:o}=getBackdrop(e);t?n():o()}function appendPopup(e,t){e.config.background_update||(t?e.verticalStack.appendChild(e.popUp):t||e.config.background_update||e.verticalStack.contains(e.popUp)&&e.verticalStack.removeChild(e.popUp))}function updatePopupClass(e,t){popupState.isAnimating=!0,requestAnimationFrame(()=>{e.classList.toggle("is-popup-opened",t),e.classList.toggle("is-popup-closed",!t),setTimeout(()=>{popupState.isAnimating=!1},popupState.animationDuration)})}function updateListeners(e,t){if(e.boundClickOutside||(e.boundClickOutside=t=>clickOutside(t,e)),e.resetCloseTimeout||(e.resetCloseTimeout=()=>resetCloseTimeout(e)),!e.touchHandlersInitialized){const{handleTouchStart:t,handleTouchMove:n,handleTouchEnd:o}=createTouchHandlers(e);e.handleTouchStart=t,e.handleTouchMove=n,e.handleTouchEnd=o,e.touchHandlersInitialized=!0}t&&!e.editor?(e.listenersAdded||(e.config.auto_close&&(e.popUp.addEventListener("touchstart",e.resetCloseTimeout,{passive:!0}),e.popUp.addEventListener("click",e.resetCloseTimeout,{passive:!0})),e.popUp&&(e.handleTouchStart&&e.popUp.addEventListener("touchstart",e.handleTouchStart,{passive:!0}),e.handleTouchMove&&e.popUp.addEventListener("touchmove",e.handleTouchMove,{passive:!1}),e.handleTouchEnd&&e.popUp.addEventListener("touchend",e.handleTouchEnd,{passive:!0}),e.handleHeaderTouchMove&&e.elements?.header&&e.elements.header.addEventListener("touchmove",e.handleHeaderTouchMove,{passive:!0}),e.handleHeaderTouchEnd&&e.elements?.header&&e.elements.header.addEventListener("touchend",e.handleHeaderTouchEnd,{passive:!0}),e.closeOnEscape&&window.addEventListener("keydown",e.closeOnEscape,{passive:!0}),e.config.close_on_click?(e.popUp.addEventListener("click",removeHash,{passive:!0}),e.popUp.dataset.closeOnClick="true"):delete e.popUp.dataset.closeOnClick),e.listenersAdded=!0),e.clickOutsideListenerAdded||(window.addEventListener("click",e.boundClickOutside,{passive:!0}),e.clickOutsideListenerAdded=!0)):(e.listenersAdded&&((0,utils.qo)(!1),e.config.auto_close&&(e.popUp.removeEventListener("touchstart",e.resetCloseTimeout),e.popUp.removeEventListener("click",e.resetCloseTimeout)),e.popUp&&(e.handleTouchStart&&e.popUp.removeEventListener("touchstart",e.handleTouchStart),e.handleTouchMove&&e.popUp.removeEventListener("touchmove",e.handleTouchMove),e.handleTouchEnd&&e.popUp.removeEventListener("touchend",e.handleTouchEnd),e.handleHeaderTouchMove&&e.elements?.header&&e.elements.header.removeEventListener("touchmove",e.handleHeaderTouchMove),e.handleHeaderTouchEnd&&e.elements?.header&&e.elements.header.removeEventListener("touchend",e.handleHeaderTouchEnd),e.closeOnEscape&&window.removeEventListener("keydown",e.closeOnEscape),e.config.close_on_click&&(e.popUp.removeEventListener("click",removeHash),delete e.popUp.dataset.closeOnClick)),e.listenersAdded=!1),e.clickOutsideListenerAdded&&(window.removeEventListener("click",e.boundClickOutside),e.clickOutsideListenerAdded=!1))}function clearAllTimeouts(e){["hideContentTimeout","removeDomTimeout","closeTimeout"].forEach(t=>{e[t]&&(clearTimeout(e[t]),e[t]=null)})}function closeAllPopupsExcept(e){const t=new Set(popupState.activePopups);for(const n of t)n!==e&&closePopup(n,!0)}function openPopup(e){if(e.popUp.classList.contains("is-popup-opened"))return;if(popupState.activePopups.size>0&&popupState.entityTriggeredPopup)return;clearAllTimeouts(e),popupState.scrollY=window.scrollY;const{popUp:t}=e;e.verticalStack.contains(t)||appendPopup(e,!0),popupState.activePopups.add(e),requestAnimationFrame(()=>{updatePopupClass(t,!0),displayContent(e),toggleBackdrop(e,!0),setTimeout(()=>{t.classList.contains("is-popup-opened")&&popupState.activePopups.has(e)&&((0,utils.qo)(!0),updateListeners(e,!0),e.config.auto_close>0&&(e.closeTimeout&&clearTimeout(e.closeTimeout),e.closeTimeout=setTimeout(()=>{!popupState.activePopups.has(e)||e.config.hash!==location.hash&&e.config.hash?popupState.activePopups.has(e)&&closePopup(e):removeHash()},e.config.auto_close)),e.config.open_action&&(0,tap_actions.VR)(e.popUp,e.config,"open_action"))},popupState.animationDuration)})}function closePopup(e,t=!1){(e.popUp.classList.contains("is-popup-opened")||t)&&(clearAllTimeouts(e),popupState.activePopups.delete(e),popupState.entityTriggeredPopup===e&&(popupState.entityTriggeredPopup=null),updatePopupClass(e.popUp,!1),toggleBackdrop(e,!1),e.removeDomTimeout=setTimeout(()=>{appendPopup(e,!1),hideContent(e,0),void 0!==popupState.scrollY&&window.scrollTo(0,popupState.scrollY)},popupState.animationDuration),updateListeners(e,!1),(0,utils.qo)(!1),e.config.close_action&&(0,tap_actions.VR)(e,e.config,"close_action"))}function onUrlChange(e){return()=>{if(e.config.hash===location.hash){if(popupState.entityTriggeredPopup)return;if(popupState.hashRecentlyAdded=!0,popupState.currentHash=location.hash,popupState.hashChangeProtection=!0,popupState.entityTriggeredPopup)return void(popupState.hashChangeProtection=!1);closeAllPopupsExcept(e),setTimeout(()=>{popupState.hashRecentlyAdded=!1,setTimeout(()=>{popupState.hashChangeProtection=!1},100)},100),requestAnimationFrame(()=>{openPopup(e)})}else requestAnimationFrame(()=>{e.config.hash&&e.config.hash!==location.hash&&closePopup(e)})}}function onEditorChange(e){const{hideBackdrop:t}=getBackdrop(e),n=e.detectedEditor;e.editor||n?(t(),clearTimeout(e.removeDomTimeout),n||setupVisibilityObserver(e)):e.observer&&(e.observer.disconnect(),e.observer=null)}function setupVisibilityObserver(e){if(e.observer&&(e.observer.disconnect(),e.observer=null),e.sectionRow){const t=new IntersectionObserver(t=>{t.forEach(t=>{const n=e.editor||e.detectedEditor;t.isIntersecting&&!e.verticalStack.contains(e.popUp)&&n&&e.verticalStack.appendChild(e.popUp)})},{rootMargin:"100px",threshold:.01});t.observe(e.sectionRow),e.observer=t}}function cleanupContext(e){e.observer&&(e.observer.disconnect(),e.observer=null),clearAllTimeouts(e),updateListeners(e,!1),popupState.activePopups.delete(e),popupState.entityTriggeredPopup===e&&(popupState.entityTriggeredPopup=null),e.boundOnUrlChange&&(window.removeEventListener("location-changed",e.boundOnUrlChange),window.removeEventListener("popstate",e.boundOnUrlChange),e.boundOnUrlChange=null),e.updatePopupColorListener&&(window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e.updatePopupColorListener),e.updatePopupColorListener=null),e.popUp&&e.popUp.parentNode&&!e.config.background_update&&e.popUp.parentNode.removeChild(e.popUp),e.elements&&(e.elements=null)}function createTouchHandlers(e){if(!e.handleTouchStart){let t=0,n=0,o=!1;e.handleTouchStart=e=>{t=e.touches[0].clientY,n=t,o=!1},e.handleTouchMove=a=>{if(1!==a.touches.length)return;n=a.touches[0].clientY;const i=n-t;Math.abs(i)>10&&(o=!0,i>0&&(e.popUp.style.transform=`translateY(${i}px)`,a.preventDefault()))},e.handleTouchEnd=a=>{o&&(n-t>100?removeHash():e.popUp.style.transform="",o=!1)}}return{handleTouchStart:e.handleTouchStart,handleTouchMove:e.handleTouchMove,handleTouchEnd:e.handleTouchEnd}}const styles_namespaceObject=".bubble-pop-up-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    margin-top: -50px;\n    max-width: 100%;\n    padding-top: 40px;\n    padding-bottom: 80px;\n    grid-gap: var(--bubble-pop-up-gap, 14px);\n    gap: var(--bubble-pop-up-gap, 14px);\n    column-gap: var(--bubble-pop-up-gap, 14px);\n    --grid-gap: var(--bubble-pop-up-gap, 14px);\n    --vertical-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --horizontal-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --row-size: 1;\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n    overflow: visible; \n    grid-auto-rows: min-content;\n    padding: 18px 18px calc(140px + var(--custom-height-offset-mobile)) 18px;\n}\n\n.bubble-pop-up-container.is-scrollable {\n    overflow: auto;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n}\n\n.bubble-pop-up-container > * {\n    flex-shrink: 0 !important;\n}\n\n.bubble-pop-up.card-content {\n    width: 100% !important;\n    padding: 0 !important;\n}\n\n.bubble-pop-up {\n    transition: transform 0.3s ease;\n    position: fixed;\n    width: 100%;\n    max-width: 100%;\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n    box-sizing: border-box;\n    margin-left: var(--custom-margin);\n    left: 7px;\n    z-index: 5 !important;\n    bottom: calc(-56px - var(--custom-height-offset-mobile));\n    will-change: transform;\n}\n\n.bubble-pop-up-background {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    top: 0;\n    left: 0;\n    position: absolute;\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n    backdrop-filter: var(--custom-popup-filter);\n    -webkit-backdrop-filter: var(--custom-popup-filter);\n    border: var(--bubble-pop-up-border, var(--bubble-border, none));\n}\n\n.bubble-pop-up-container::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n}\n\n.is-popup-opened {\n    box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));\n}\n\n.is-popup-closed { \n    transform: translateY(100%);\n    box-shadow: none !important;\n}\n\n@media only screen and (min-width: 600px) {\n    .bubble-pop-up {\n        margin-left: 0 !important;\n        min-width: var(--desktop-width, 540px);\n        max-width: var(--desktop-width, 540px);\n        left: calc(50% - (var(--desktop-width, 540px) / 2));\n    }\n    .bubble-pop-up-container {\n        padding: 18px 18px calc(140px + var(--custom-height-offset-desktop)) 18px;\n    }\n}\n\n@media only screen and (min-width: 768px) {\n    .bubble-pop-up {\n      bottom: calc(-56px - var(--custom-height-offset-desktop));\n      left: calc(var(--mdc-drawer-width, 0px) / 2 + 50% - (var(--desktop-width, 540px) / 2));\n    }\n}\n\n.bubble-pop-up.editor {\n    transition: none !important;\n    position: relative !important;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    backdrop-filter: none !important;\n    display: flex !important;\n    transform: none !important;\n    height: auto !important;\n    min-width: auto;\n    z-index: 0 !important;\n}\n\n.bubble-header-container {\n    display: inline-flex;\n    height: 50px;\n    margin: 0;\n    padding: 0;\n    z-index: 3;\n    padding: 18px 18px 22px;\n    position: sticky;\n    top: 0;\n    background: none !important;\n    overflow: visible;\n}\n\n.bubble-header {\n    display: inline-flex;\n    flex-grow: 1;\n    margin-right: 14px;\n    color: var(--primary-text-color);\n}\n\n.bubble-name {\n    font-size: 14px;\n    font-weight: heavy;\n}\n\n.bubble-close-button {\n    display: flex;\n    position: relative;\n    height: 50px;\n    width: 50px;\n    border: var(--bubble-pop-up-close-button-border, var(--bubble-pop-up-border, var(--bubble-border, none)));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px));\n    z-index: 1;\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n    color: var(--primary-text-color);\n    flex-shrink: 0;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: all 0.3s ease;\n    box-sizing: border-box;\n}\n\n.bubble-close-icon {\n    --mdc-icon-size: 24px;\n    color: var(--primary-text-color);\n    line-height: normal;\n}\n\n.bubble-button-card-container {\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n}\n\n.bubble-pop-up-container.editor-cropped {\n    height: 122px !important;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;   \n}\n\n.bubble-pop-up.editor > .bubble-pop-up-container {\n    padding-bottom: 18px !important;\n    mask-image: none;\n    -webkit-mask-image: none;  \n    overflow: hidden;  \n}\n\n.editor .bubble-pop-up-background {\n    width: 100%;\n    height: 100%;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    display: flex;\n    position: absolute;\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) !important;\n    backdrop-filter: none;\n    -webkit-backdrop-filter: none;\n}\n\n.no-header .bubble-header-container {\n    visibility: hidden !important;\n    height: 0px !important;\n    opacity: 0 !important;\n}\n\n.no-header .bubble-pop-up-container {\n    padding-top: 4px !important;\n}\n\n.no-header .bubble-pop-up-container.is-scrollable {\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n}\n\n.large .bubble-header-container {\n  height: calc( var(--row-height,56px) * var(--row-size,1) + var(--row-gap,8px) * ( var(--row-size,1) - 1 ));\n}\n\n.large .bubble-close-button {\n    height: var(--row-height,56px);\n    width: var(--row-height,56px);\n    --mdc-icon-size: 28px !important;\n} ",backdrop_namespaceObject=".bubble-backdrop {\n  position: fixed;\n  background-color: var(--bubble-backdrop-background-color, var(--bubble-default-backdrop-background-color));\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n  opacity: 0;\n  transition: opacity 0.3s;\n  transition-delay: .1s;\n  backdrop-filter: var(--bubble-backdrop-filter, var(--custom-backdrop-filter));\n  -webkit-backdrop-filter: var(--bubble-backdrop-filter, var(--custom-backdrop-filter));\n  will-change: opacity;\n}\n\n.bubble-backdrop.is-visible {\n  opacity: 1;\n}\n\n.bubble-backdrop.is-hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n";let backdrop,hideBackdrop=!1,startTouchY,lastTouchY,themeColorBackground;const colorScheme=window.matchMedia("(prefers-color-scheme: dark)"),backdropStyle=(0,utils.n)("style");function updateBackdropColor(){themeColorBackground=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color"),document.body.style.setProperty("--bubble-default-backdrop-background-color",(0,style.Bz)(themeColorBackground,.8,.6))}function getBackdrop(e){const t=e.config.hide_backdrop??!1;if(backdrop)return backdrop;const n=(0,utils.n)("div","bubble-backdrop-host"),o=n.attachShadow({mode:"open"}),a=(0,utils.n)("div","bubble-backdrop backdrop is-hidden");o.appendChild(a);const i=(0,utils.n)("style");i.innerHTML=backdrop_namespaceObject,o.appendChild(i);const r=(0,utils.n)("style");o.appendChild(r),t&&(n.style.display="none",n.style.pointerEvents="none"),document.body.appendChild(n);const s=e.config.backdrop_blur??0;return parseFloat(s)>0?a.style.setProperty("--custom-backdrop-filter",`blur(${s}px)`):a.style.setProperty("--custom-backdrop-filter","none"),backdrop={hideBackdrop:function(){a.classList.add("is-hidden"),a.classList.remove("is-visible")},showBackdrop:function(){requestAnimationFrame(()=>{a.classList.add("is-visible"),a.classList.remove("is-hidden"),t||(n.style.display="",n.style.pointerEvents="")})},backdropElement:a,backdropCustomStyle:r},backdrop}function createHeader(e){e.elements={closeIcon:(0,utils.n)("ha-icon","bubble-close-icon"),closeButton:(0,utils.n)("div","bubble-close-button close-pop-up"),buttonContainer:(0,utils.n)("div","bubble-button-container"),header:(0,utils.n)("div","bubble-header")};const t=(0,utils.n)("div","bubble-feedback-container"),n=(0,utils.n)("div","bubble-feedback-element feedback-element");t.appendChild(n),e.elements.closeButton.appendChild(t),e.elements.closeIcon.icon="mdi:close",e.elements.closeButton.appendChild(e.elements.closeIcon),e.elements.closeButton.feedback=n;const o=t=>{t&&(t.stopPropagation(),t.preventDefault());const n=()=>{if(location.hash){const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))}};try{removeHash(),setTimeout(()=>{location.hash===e.config.hash&&n()},100)}catch(e){n()}(0,utils.jp)("selection")};e.elements.closeButton.addEventListener("click",o),e.elements.closeButton.addEventListener("touchend",o),e.elements.closeButton.addEventListener("pointerdown",e=>{e.stopPropagation()}),e.elements.closeButton.haRipple=(0,utils.n)("ha-ripple"),e.elements.closeButton.appendChild(e.elements.closeButton.haRipple);const a=e.popUp?.querySelector(".bubble-header-container");a?Object.assign(e.elements,{headerContainer:a,closeIcon:a.querySelector(".bubble-close-icon"),closeButton:a.querySelector(".bubble-close-button"),buttonContainer:a.querySelector(".bubble-button-container"),header:a.querySelector(".bubble-header")}):(e.elements.headerContainer=(0,utils.n)("div","bubble-header-container"),e.elements.headerContainer.setAttribute("id","header-container"),e.elements.headerContainer.appendChild(e.elements.header),e.elements.headerContainer.appendChild(e.elements.closeButton),e.elements.header.appendChild(e.elements.buttonContainer)),e.handleTouchStart=e=>{startTouchY=e.touches[0].clientY},e.handleHeaderTouchMove=t=>{const n=t.touches[0].clientY-startTouchY;n>0&&(e.popUp.style.transform=`translateY(${n}px)`)},e.handleHeaderTouchEnd=t=>{const n=t.changedTouches[0].clientY-startTouchY;n>50?(e.popUp.style.transform=`translateY(calc(${n}px + (100% - ${n}px)))`,removeHash()):e.popUp.style.transform=""}}function createStructure(e){try{e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=styles_namespaceObject;let t,n=e.popUp.querySelector("style");e.stylesAdded&&n?e.elements.customStyle=n:(e.elements.customStyle=(0,utils.n)("style"),e.popUp.appendChild(e.elements.customStyle),e.popUp.appendChild(e.elements.style),e.stylesAdded=!0);const o=e.config.bg_opacity??88;function a(){t=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color");const n=e.config.bg_color?e.config.bg_color:t,a=(0,style.Bz)(n,o/100,1.02);e.popUp.style.setProperty("--bubble-pop-up-background-color",a)}e.updatePopupColorListener=()=>{a()},colorScheme.addEventListener("change",e.updatePopupColorListener,{passive:!0}),a(),e.popUp.style.setProperty("--desktop-width",e.config.width_desktop??"540px"),e.closeOnEscape=t=>{"Escape"===t.key&&e.config.hash===location.hash&&removeHash()};let i=e.config.slide_to_close_distance??400;e.handleTouchMove=e=>{e.touches[0].clientY-startTouchY>i&&e.touches[0].clientY>lastTouchY&&removeHash(),lastTouchY=e.touches[0].clientY};const r=e.popUp.querySelector(".bubble-pop-up-container");if(null===r){e.elements.popUpContainer=(0,utils.n)("div"),e.elements.popUpContainer.classList.add("bubble-pop-up-container");let c=e.popUp.firstChild;for(;c;)e.elements.popUpContainer.appendChild(c),c=e.popUp.firstChild}else e.elements.popUpContainer=r;const s=e.elements.popUpContainer,l=()=>{s.style.overflow,s.style.overflow="auto";const e=s.scrollHeight>s.clientHeight;s.style.overflow="",s.classList.toggle("is-scrollable",e)};new ResizeObserver(l).observe(s),setTimeout(l,150),e.popUpBackground=(0,utils.n)("div","bubble-pop-up-background"),e.popUp.appendChild(e.popUpBackground),e.popUp.appendChild(e.elements.headerContainer),e.popUp.appendChild(e.elements.popUpContainer),e.config.hash!==location.hash&&hideContent(e,0),window.dispatchEvent(new Event("location-changed"))}catch(d){console.error(d)}}function prepareStructure(e){try{if(e.cardType="pop-up",e.verticalStack=e.getRootNode(),e.sectionRow=e.verticalStack.host.parentElement,e.sectionRowContainer=e.sectionRow?.parentElement,e.popUp=e.verticalStack.querySelector("#root"),!e.popUp)throw new Error("Vertical stack not found, don't panic, it will be added automatically to your pop-up.");e.popUp.classList.add("bubble-pop-up","pop-up","is-popup-closed"),e.cardTitle=e.verticalStack.querySelector(".card-header"),e.editor||e.config.background_update||e.verticalStack.removeChild(e.popUp),e.elements={},getBackdrop(e),e.cardTitle&&(e.cardTitle.style.display="none"),hideBackdrop=hideBackdrop||(e.config.hide_backdrop??!0),e.popUp.style.setProperty("--custom-height-offset-desktop",e.config.margin_top_desktop??"0px"),e.popUp.style.setProperty("--custom-height-offset-mobile",e.config.margin_top_mobile??"0px"),e.popUp.style.setProperty("--custom-margin",`-${e.config.margin??"7px"}`),e.popUp.style.setProperty("--custom-popup-filter",e.config.backdrop_blur&&"0"!==e.config.backdrop_blur?"none":`blur(${e.config.bg_blur??10}px)`),e.popUp.style.setProperty("--custom-shadow-opacity",(e.config.shadow_opacity??0)/100),e.boundOnUrlChange=onUrlChange(e),window.addEventListener("location-changed",e.boundOnUrlChange),window.addEventListener("popstate",e.boundOnUrlChange),window.popUpError=!1}catch(t){if(console.warn(t),!window.popUpError){window.popUpError=!0;const t=(0,utils.n)("div","bubble-error-text"),n=x`
        <ha-alert 
          alert-type="error"
          .title=${"You need to define a unique hash for this pop-up"}
        >
          <p>Once created and saved, this pop-up will be <b>hidden by default</b> and <b>can be opened by targeting its hash</b>. You can trigger it using <a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">any card</a> that supports the <code>navigate</code> <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">action</a> (check the example), or with the included <a href="https://github.com/Clooos/Bubble-Card#horizontal-buttons-stack" target="_blank" rel="noopener noreferrer">horizontal buttons stack</a> card.</p>
        </ha-alert>
      `;B(n,t),e.content.appendChild(t)}}}colorScheme.addEventListener("change",updateBackdropColor),updateBackdropColor();var validate_condition=__webpack_require__(76),style_processor=__webpack_require__(784);function changeEditor(e){if(!e.verticalStack||!e.popUp)return;const{popUp:t,sectionRow:n,sectionRowContainer:o,elements:a,config:i}=e,r=t.classList,s="hui-card"===n?.tagName.toLowerCase(),l=e.editor||e.detectedEditor;if(e.detectedEditor&&!e.dialogClosedListenerAdded?(window.addEventListener("dialog-closed",()=>{a?.popUpContainer&&a.popUpContainer.classList.add("editor-cropped")},{once:!0}),e.dialogClosedListenerAdded=!0):!e.detectedEditor&&e.dialogClosedListenerAdded&&(e.dialogClosedListenerAdded=!1),!(r.contains("is-popup-opened")&&!r.contains("editor"))&&s&&o&&o.classList.contains("card")&&l&&"none"===o.style.display&&(o.style.display=""),l)e.editorAccess||((0,utils.qo)(!1),r.remove("is-popup-opened"),r.add("is-popup-closed","editor"),a?.content&&a.content.classList.add("popup-content-in-editor-mode"),!e.detectedEditor&&a?.popUpContainer&&a.popUpContainer.classList.add("editor-cropped"),e.editorAccess=!0,onEditorChange(e));else if(e.editorAccess){r.remove("editor"),a?.popUpContainer&&a.popUpContainer.classList.remove("editor-cropped"),a?.content&&a.content.classList.remove("popup-content-in-editor-mode"),e.observer&&(e.observer.disconnect(),e.observer=null);const n=location.hash,o=i.hash?i.hash.startsWith("#")?i.hash:"#"+i.hash:"";o&&n===o?(r.remove("is-popup-closed"),r.add("is-popup-opened"),(0,utils.qo)(!0)):e.verticalStack.contains(t)&&closePopup(e,!0),e.editorAccess=!1}}function changeStyle(e){const{backdropCustomStyle:t}=getBackdrop(e);(0,utils.JK)(e,e.popUp),(0,style_processor.SF)(e,e.popUp),(0,style_processor.SF)(e,t);const n=e.config.show_header??!0;e.popUp.classList.contains("no-header")===n&&e.popUp.classList.toggle("no-header",!n)}function changeTriggered(e){const t=e.config.trigger,n=e.config.trigger_close??!0;if(t){const o=!e.hasPageLoaded;e.hasPageLoaded=!0;const a=(0,validate_condition.eC)(t);if(0===a.length)return void(e.previousTrigger=!1);if((0,validate_condition.db)(a)){const t=(0,validate_condition.XH)(a,e._hass);if(t===e.previousTrigger)return;e.config.hash===location.hash?t||o||!n||removeHash():t&&addHash(e.config.hash),e.previousTrigger=t}}else{let t=e.config.trigger_entity??"";if(""===t)return;let n=e.config.trigger_state??"",o=e.config.trigger_close??!1,a=e._hass.states[t]?.state;if(!t)return;if(!n)return;if(e.oldTriggerEntityState===a)return;const i=!e.hasPageLoaded;e.hasPageLoaded=!0,e.config.hash===location.hash?o&&n!==a&&(i||removeHash()):a===n&&addHash(e.config.hash),e.oldTriggerEntityState=a}}var icon=__webpack_require__(87);function getClimateColor(e){let t="";const n=e._hass.states[e.config.entity],o=n.attributes.hvac_action,a=n.state,i="heating"===o||"heat"===a&&e.config.state_color,r="cooling"===o||"cool"===a&&e.config.state_color,s="off"!==a&&"unknown"!==a;switch(a){case"fan_only":t="var(--bubble-state-climate-fan-only-color, var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color))))";break;case"dry":t="var(--bubble-state-climate-dry-color, var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color))))";break;default:t=r?"var(--bubble-state-climate-cool-color, var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color))))":i?"var(--bubble-state-climate-heat-color, var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color))))":s&&e.config.state_color?"auto"===a?"var(--bubble-state-climate-auto-color, var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color))))":"heat_cool"===a?"var(--bubble-state-climate-heat-cool-color, var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color))))":"var(--bubble-climate-accent-color, var(--bubble-accent-color, var(--accent-color)))":""}return t}function changeState(e){const t=e.config?.entity,n=e.card,o=e._hass.states[t],a=(0,utils.D$)(e,e.config.attribute,t),i=o?.last_changed,r=o?.last_updated,s="state"===e.config.button_type,l=e.config.show_name??!0,c=e.config.show_icon??!0,d=e.config.show_state??s,u=e.config.show_attribute??s,p=e.config.show_last_changed??!1,h=e.config.show_last_updated??!1,b=e.config.scrolling_effect??!0,m=e.previousConfig||{};if(e.previousState===o&&e.previousAttribute===a&&e.previousLastChanged===i&&e.previousLastUpdated===r&&m.showName===l&&m.showIcon===c&&m.showState===d&&m.showAttribute===u&&m.showLastChanged===p&&m.showLastUpdated===h&&m.scrollingEffect===b)return;let g=o&&d?e._hass.formatEntityState(o):"",f="",_="",y="",v="";function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}function x(e,t,n,o=!0){if(null==e)return"";const a=parseFloat(e);if(isNaN(a))return e;let i=0===a?"0":a.toFixed(t);return o&&(i=i.replace(/\.0$/,"")),i+" "+n}if(u&&a)if(e.config.attribute.includes("forecast")){const t="°C"===e._hass.config.unit_system.temperature,n="km"===e._hass.config.unit_system.length;f=e.config.attribute.includes("temperature")?o?x(a,1,t?"°C":"°F"):"":e.config.attribute.includes("humidity")?o?x(a,0,"%",!1):"":e.config.attribute.includes("precipitation")?o?x(a,1,"mm"):"":e.config.attribute.includes("wind_speed")?o?x(a,1,n?"km/h":"mph"):"":o?a:""}else f=o?e.config.attribute.includes("[")?a:e._hass.formatEntityAttributeValue(o,e.config.attribute)??a:"";p&&o&&(_=o?w((0,utils.r6)(i,e._hass.locale.language)):""),h&&o&&(y=o?w((0,utils.r6)(r,e._hass.locale.language)):""),v=[g,f,_,y].filter(Boolean).join(" • "),e.elements.name.classList.toggle("hidden",!l),e.elements.iconContainer.classList.toggle("hidden",!c),e.elements.nameContainer.classList.toggle("name-without-icon",!c),e.elements.state.classList.toggle("state-without-name",(d||p||h||u)&&!l),e.elements.state.classList.toggle("display-state",d||p||h||u),e.elements.state.classList.toggle("hidden",!(d||p||h||u)),(0,utils.Nl)(e,e.elements.state,v),t===e.config.entity&&"state"!==e.config.button_type&&!o?.attributes?.unit_of_measurement?.includes("°")&&o&&((0,utils.$C)(e,t)?n.classList.contains("is-on")||(n.classList.remove("is-off"),n.classList.add("is-on")):n.classList.contains("is-off")||(n.classList.remove("is-on"),n.classList.add("is-off"))),e.previousState=o,e.previousAttribute=a,e.previousConfig={showName:l,showIcon:c,showState:d,showAttribute:u,showLastChanged:p,showLastUpdated:h,scrollingEffect:b}}function changeIcon(e){const t=(0,utils.md)(e),n=e.config.card_type,o=e.config.button_type,a=(0,utils.$C)(e),i=(0,icon.sW)(e),r=(0,icon.Qp)(e),s=e.config.use_accent_color,l=e.elements.iconContainer?.style.color,c=e.elements.image?.style.backgroundImage,d=e.elements.icon?.icon,u=e.elements.icon?.style.display,p=e.elements.image?.style.display,h="name"===o||"pop-up"===n&&!o;let b="inherit";if(a&&((0,utils.md)(e,"light")&&!s||!h?b=`var(--bubble-icon-color, ${(0,icon.VA)(e)})`:"climate"===t&&(b=getClimateColor(e))),e.elements.iconContainer&&("inherit"!==b?l!==b&&(e.elements.iconContainer.style.color=b):""!==l&&(e.elements.iconContainer.style.color="")),""!==r){const t=`url(${r})`;c!==t&&(e.elements.image.style.backgroundImage=t),"none"!==u&&(e.elements.icon.style.display="none"),""!==p&&(e.elements.image.style.display="")}else""!==i?(d!==i&&(e.elements.icon.icon=i),e.elements.icon.style.color!==b&&(e.elements.icon.style.color=b),""!==u&&(e.elements.icon.style.display=""),"none"!==p&&(e.elements.image.style.display="none")):("none"!==u&&(e.elements.icon.style.display="none"),"none"!==p&&(e.elements.image.style.display="none"));e.elements.icon?.getAttribute("icon")!==e.elements.icon?.icon&&e.elements.icon.setAttribute("icon",e.elements.icon.icon)}function changeName(e,t=!0){const n="name"!==e.config.button_type?(0,utils.mG)(e):e.config.name;n!==e.previousName&&e.elements.name&&(e.elements.name.innerText=n,e.previousName=n,t&&(0,utils.Nl)(e,e.elements.name,n))}function changeStatus(e){"unavailable"===(0,utils.Gu)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable")}function changes_updateListeners(e,t){t&&!e.editor?e.listenersAdded||("slider"===e.config.button_type&&e.elements.slider.addEventListener("click",e.handleSliderClick,{passive:!0}),e.listenersAdded=!0):t||e.listenersAdded&&"slider"===e.config.button_type&&e.elements.slider.removeEventListener("click",e.handleSliderClick,{passive:!0})}var changes=__webpack_require__(198);function getButtonType(e){let t=e.config.button_type;return"custom"===t&&(console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"'),t=""),e.config.entity?t||"switch":t||"name"}function readOnlySlider(e){const t=e.config.entity;return(0,utils.md)(e,"sensor",t)&&"%"===(0,utils.D$)(e,"unit_of_measurement",t)}let pendingRaf=null;function getEntityMinValue(e,t){if(void 0!==e.config.min_value)return parseFloat(e.config.min_value);const n=t.entity_id.split(".")[0];return"media_player"===n&&void 0!==e.config.min_volume?parseFloat(e.config.min_volume):"climate"===n?t.attributes.min_temp??0:t.attributes.min??0}function getEntityMaxValue(e,t){if(void 0!==e.config.max_value)return parseFloat(e.config.max_value);const n=t.entity_id.split(".")[0];return"media_player"===n&&void 0!==e.config.max_volume?parseFloat(e.config.max_volume):"climate"===n?t.attributes.max_temp??1e3:t.attributes.max??100}function getEntityStep(e,t){if(void 0!==e.config.step)return parseFloat(e.config.step);switch(t.entity_id.split(".")[0]){case"input_number":case"number":return t.attributes.step??1;case"fan":return t.attributes.percentage_step??1;case"climate":{const n="°C"===e._hass.config.unit_system.temperature;return t.attributes.target_temp_step??(n?.5:1)}case"media_player":return.01;default:return 1}}function getAdjustedPercentage(e,t){if(!e._hass.states[e.config.entity])return t;let n=t;return Math.max(0,Math.min(100,n))}function onSliderChange(e,t,n=!1){const o=e.elements.rangeSlider.getBoundingClientRect();let a=Math.max(0,Math.min(100,(t-o.left)/o.width*100));a=getAdjustedPercentage(e,a);const i=e.config.entity?.split(".")[0];return"light"!==i||!1!==e.config.tap_to_slide&&void 0!==e.config.tap_to_slide||!0===e.config.allow_light_slider_to_0||a<1&&(a=1),(0,utils.md)(e,"climate",e.config.entity)?(e.elements.rangeFill.style.transform=`translateX(${a}%)`,a):(e.elements.rangeFill.style.transform=`translateX(${a}%)`,(0,utils.md)(e,"media_player",e.config.entity)&&e.elements.rangeValue&&(e.elements.rangeValue.innerText=`${Math.round(a)}%`),a)}const valueCache=new Map,cacheDuration=100;function getCachedValue(e,t){const n=valueCache.get(e),o=Date.now();if(n&&o-n.timestamp<cacheDuration)return n.value;const a=t();return valueCache.set(e,{value:a,timestamp:o}),a}function calculateRangePercentage(e,t,n){return 100*(e-t)/(n-t)}function adjustToRange(e,t,n){return e>=t&&e<=n?(e-t)/(n-t)*100:e<t?0:100}function getCurrentValue(e,t,n){const o=e._hass.states[t];if(!o)return 0;const a=getEntityMinValue(e,o),i=getEntityMaxValue(e,o);switch(n){case"light":{const n=100*(0,utils.D$)(e,"brightness",t)/255;return void 0!==e.config.min_value||void 0!==e.config.max_value?calculateRangePercentage(Math.max(a,Math.min(i,n)),a,i):n}case"media_player":{const n=(0,utils.D$)(e,"volume_level",t),o=null!=n?100*n:0;return void 0!==e.config.min_value||void 0!==e.config.max_value||void 0!==e.config.min_volume||void 0!==e.config.max_volume?calculateRangePercentage(Math.max(a,Math.min(i,o)),a,i):o}case"cover":{const n=(0,utils.D$)(e,"current_position",t),o=null!=n?n:0;return void 0!==e.config.min_value||void 0!==e.config.max_value?calculateRangePercentage(Math.max(a,Math.min(i,o)),a,i):o}case"input_number":case"number":{const n=parseFloat((0,utils.Gu)(e,t));return calculateRangePercentage(Math.max(a,Math.min(i,n)),a,i)}case"fan":if((0,utils.$C)(e,t)){const n=(0,utils.D$)(e,"percentage",t);if(void 0!==e.config.min_value||void 0!==e.config.max_value){const e=parseFloat(n);return calculateRangePercentage(Math.max(a,Math.min(i,e)),a,i)}return n??0}return 0;case"climate":if((0,utils.$C)(e,t)){const n=parseFloat((0,utils.D$)(e,"temperature",t));return isNaN(n)||void 0===a||void 0===i?0:calculateRangePercentage(Math.max(a,Math.min(i,n)),a,i)}return 0;default:if(void 0!==e.config.min_value&&void 0!==e.config.max_value){const n=parseFloat((0,utils.Gu)(e,t));return calculateRangePercentage(Math.max(a,Math.min(i,n)),a,i)}return 0}}function updateSlider(e,t=e.elements.rangeFill,n=e.config.entity){if(e.dragging)return;const o=n?.split(".")[0];let a=0;if(pendingRaf&&(cancelAnimationFrame(pendingRaf),pendingRaf=null),a="sensor"===o&&"%"===(0,utils.D$)(e,"unit_of_measurement",n)?(0,utils.Gu)(e,n):getCurrentValue(e,n,o),"media_player"===o&&e.elements.rangeValue){(0,utils.Gu)(e,n);const t=(0,utils.D$)(e,"volume_level",n),o=null!=t?Math.round(100*t):0;e.elements.rangeValue.innerText=`${o}%`}if("climate"===o&&e.elements.rangeValue){if(!(0,utils.$C)(e,n))return e.elements.rangeValue.innerText="0%",a=0,void(t.style.transform="translateX(0%)");{const o=(0,utils.D$)(e,"temperature",n),i="°C"===e._hass.config.unit_system.temperature;let r=(0,utils.D$)(e,"min_temp",n),s=(0,utils.D$)(e,"max_temp",n);if(void 0!==e.config.min_value&&(r=parseFloat(e.config.min_value)),void 0!==e.config.max_value&&(s=parseFloat(e.config.max_value)),void 0!==o&&void 0!==r&&void 0!==s)return a=calculateRangePercentage(Math.max(r,Math.min(s,o)),r,s),e.elements.rangeValue.innerText=o.toFixed(1).replace(/\.0$/,"")+(i?"°C":"°F"),void(t.style.transform=`translateX(${Math.round(a)}%)`);e.elements.rangeValue.innerText=o?o.toFixed(1).replace(/\.0$/,"")+(i?"°C":"°F"):"0%"}}t.style.transform=`translateX(${Math.round(a)}%)`}function getAdjustedValue(e,t){return Math.round(e/t)*t}function updateEntity(e,t){const n=e._hass.states[e.config.entity];if(!n)return;const o=e.config.entity.split(".")[0],a=getEntityMinValue(e,n),i=getEntityMaxValue(e,n),r=getEntityStep(e,n);let s=getAdjustedValue(a+t/100*(i-a),r);switch(s=Math.max(a,Math.min(i,s)),o){case"light":{let n;n=void 0!==e.config.min_value||void 0!==e.config.max_value?Math.round(255*s/100):Math.round(255*t/100);const o=e.config.light_transition,a=""===e.config.light_transition_time||isNaN(e.config.light_transition_time)?500:e.config.light_transition_time;e._hass.callService("light","turn_on",{entity_id:e.config.entity,brightness:n,...o&&{transition:a/1e3}});break}case"media_player":{let n;void 0!==e.config.min_value||void 0!==e.config.max_value||void 0!==e.config.min_volume||void 0!==e.config.max_volume?n=s/100:(n=t/100,n=getAdjustedValue(n,r)),n=Math.max(0,Math.min(1,n)),e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:n.toFixed(2)});break}case"cover":{let n;n=void 0!==e.config.min_value||void 0!==e.config.max_value?Math.round(s):Math.round(t),e._hass.callService("cover","set_cover_position",{entity_id:e.config.entity,position:n});break}case"input_number":e._hass.callService("input_number","set_value",{entity_id:e.config.entity,value:s});break;case"fan":{let n;n=void 0!==e.config.min_value||void 0!==e.config.max_value?Math.round(s):Math.round(t),e._hass.callService("fan","set_percentage",{entity_id:e.config.entity,percentage:n});break}case"climate":{const t=parseFloat(s.toFixed(1));(0,utils.$C)(e,e.config.entity)?e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:t}):e._hass.callService("climate","turn_on",{entity_id:e.config.entity}).then(()=>{e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:t})}).catch(n=>{console.error("Error turning on climate entity:",n),e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:t})});break}case"number":e._hass.callService("number","set_value",{entity_id:e.config.entity,value:s})}}function changeButton(e){const t=e.config.card_type,n=getButtonType(e),o=(0,utils.md)(e,"light"),a=(0,utils.$C)(e),i=(0,icon.VA)(e),r="button"===t?e.card.style.getPropertyValue("--bubble-button-background-color"):e.popUp.style.getPropertyValue("--bubble-button-background-color"),s=e.elements.background.style.opacity;let l="",c="";const d=e.config.use_accent_color;"switch"===n&&a?i&&o&&!d?(l=(0,icon.VA)(e),c=".5"):(l="var(--bubble-button-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))",c="1"):(l="rgba(0, 0, 0, 0)",c=".5"),"slider"===n&&(a&&(e.elements.rangeFill.style.backgroundColor=o&&!d?(0,icon.VA)(e):"var(--bubble-button-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))"),updateSlider(e)),r!==l&&("button"===t?e.card.style.setProperty("--bubble-button-background-color",l):"pop-up"===t&&e.popUp.style.setProperty("--bubble-button-background-color",l)),s!==c&&(e.elements.background.style.opacity=c)}function changes_changeStatus(e){const t=(0,utils.Gu)(e),n=e.config.card_type;"unavailable"===t?"button"===n?e.card.classList.add("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.add("is-unavailable"):"button"===n?e.card.classList.remove("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.remove("is-unavailable")}function changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e)}const slider_styles_namespaceObject=".bubble-range-fill {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    left: -100%;\n    transition: all .3s;\n    z-index: 0;\n    background-color: var(--bubble-accent-color, var(--bubble-default-color));\n}\n\n.is-light .bubble-range-fill {\n    background-color: var(--bubble-light-color, rgb(225, 225, 210));\n}\n\n.is-dragging .bubble-range-fill {\n    transition: none !important;\n}\n\n.is-light .bubble-range-fill {\n    opacity: 0.5;\n}\n\n.bubble-range-value {\n    position: absolute;\n    right: 14px;\n}\n\n.is-unavailable .bubble-range-slider {\n    cursor: not-allowed;\n}\n\n.slider-appear-animation {\n    transition: none;\n    animation: sliderAppear 0.2s ease-in-out;\n    transform-origin: center;\n}\n\n@keyframes sliderAppear {\n    0% {\n        transform: scale(0.96);\n        opacity: 0.8;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}";function create_getEntityMinValue(e,t){if(void 0!==e.config.min_value)return parseFloat(e.config.min_value);const n=t.entity_id.split(".")[0];return"media_player"===n&&void 0!==e.config.min_volume?parseFloat(e.config.min_volume):"climate"===n?t.attributes.min_temp??0:t.attributes.min??0}function create_getEntityMaxValue(e,t){if(void 0!==e.config.max_value)return parseFloat(e.config.max_value);const n=t.entity_id.split(".")[0];return"media_player"===n&&void 0!==e.config.max_volume?parseFloat(e.config.max_volume):"climate"===n?t.attributes.max_temp??100:t.attributes.max??100}function create_getEntityStep(e,t){if(void 0!==e.config.step)return parseFloat(e.config.step);switch(t.entity_id.split(".")[0]){case"input_number":case"number":return t.attributes.step??1;case"fan":return t.attributes.percentage_step??1;case"climate":{const n="°C"===e._hass.config.unit_system.temperature;return t.attributes.target_temp_step??(n?.5:1)}case"media_player":return.01;default:return 1}}function create_getAdjustedValue(e,t){return t<=0?e:Math.round(e/t)*t}function createSliderStructure(e,t={}){const n={...defaultOptions,targetElement:e.elements.mainContainer,insertBefore:e.elements.cardWrapper,sliderLiveUpdate:e.config.slider_live_update,holdToSlide:!1,readOnlySlider:!1,styles:slider_styles_namespaceObject,...t},o=e._hass.states[e.config.entity],a=e.config.entity?.split(".")[0];if(o?(e.sliderMinValue=create_getEntityMinValue(e,o),e.sliderMaxValue=create_getEntityMaxValue(e,o),e.sliderStep=create_getEntityStep(e,o)):(e.sliderMinValue=e.config.min_value??0,e.sliderMaxValue=e.config.max_value??100,e.sliderStep=e.config.step??1),e.sliderMaxValue<=e.sliderMinValue&&(e.sliderMaxValue="climate"===a?e.sliderMinValue+1:e.sliderMinValue+100),e.elements.rangeFill=(0,utils.n)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,utils.n)("div","bubble-range-slider range-slider"),n.styles){const t=(0,utils.n)("style");t.textContent=n.styles,e.elements.rangeSlider.appendChild(t)}function i(e,t,n){return n<=t?0:100*(Math.max(t,Math.min(n,e))-t)/(n-t)}function r(){let t=0;const n=e.config.entity,o=n?.split(".")[0];if("sensor"===o&&"%"===(0,utils.D$)(e,"unit_of_measurement",n))return(0,utils.Gu)(e,n);switch(o){case"light":t=100*(0,utils.D$)(e,"brightness",n)/255;break;case"media_player":(0,utils.$C)(e,n)&&(t=100*((0,utils.D$)(e,"volume_level",n)??0));break;case"cover":t=i(parseFloat((0,utils.D$)(e,"current_position",n)??0),e.sliderMinValue,e.sliderMaxValue);break;case"input_number":case"number":t=i(parseFloat((0,utils.Gu)(e,n)),e.sliderMinValue,e.sliderMaxValue);break;case"fan":(0,utils.$C)(e,n)&&(t=i(parseFloat((0,utils.D$)(e,"percentage",n)??0),e.sliderMinValue,e.sliderMaxValue));break;case"climate":if((0,utils.$C)(e,n)){const o=parseFloat((0,utils.D$)(e,"temperature",n));isNaN(o)||(t=i(o,e.sliderMinValue,e.sliderMaxValue))}break;default:if(void 0!==e.sliderMinValue&&void 0!==e.sliderMaxValue){const o=parseFloat((0,utils.Gu)(e,n));isNaN(o)||(t=i(o,e.sliderMinValue,e.sliderMaxValue))}}return Math.max(0,Math.min(100,t))}function s(e){return Math.max(0,Math.min(100,e))}function l(t){if(!e.elements.rangeValue)return;const n=e.config.entity?.split(".")[0];switch(n){case"climate":if((0,utils.$C)(e,e.config.entity)){const n=e.sliderMinValue,o=e.sliderMaxValue,a=n+t/100*(o-n),i=create_getAdjustedValue(a,e.sliderStep),r=Math.max(n,Math.min(o,i)),s="°C"===e._hass.config.unit_system.temperature,l=e._hass.states[e.config.entity],c=e.config.step||l?.attributes.target_temp_step||(s?.5:1);Math.round(a/c),e.elements.rangeValue.innerText=r.toFixed(1).replace(/\.0$/,"")+(s?"°C":"°F")}else e.elements.rangeValue.innerText=e._hass.localize("state.default.off");break;case"number":case"input_number":const n=e.sliderMinValue,o=e.sliderMaxValue,a=create_getAdjustedValue(n+t/100*(o-n),e.sliderStep),i=Math.max(n,Math.min(o,a)),r=(0,utils.D$)(e,"unit_of_measurement",e.config.entity)||"",s=e._hass.states[e.config.entity]?.attributes?.precision??(Number.isInteger(i)?0:1);e.elements.rangeValue.innerText=i.toFixed(s).replace(/\.0$/,"")+(r?` ${r}`:"");break;default:const l=e.sliderMinValue,c=e.sliderMaxValue,d=create_getAdjustedValue(l+t/100*(c-l),e.sliderStep),u=Math.max(l,Math.min(c,d));e.elements.rangeValue.innerText=Math.round(u)+"%"}}if(n.withValueDisplay){e.elements.rangeValue=(0,utils.n)("div","bubble-range-value"),e.elements.rangeSlider.appendChild(e.elements.rangeValue);const t=s(r());(0,utils.md)(e,"climate",e.config.entity)?((0,utils.$C)(e,e.config.entity)?l(t):e.elements.rangeValue.innerText="0%",e.elements.rangeFill.style.transform=`translateX(${t}%)`,e.elements.rangeValue.style.display=""):(l(t),e.elements.rangeValue.style.display="",e.elements.rangeFill.style.transform=`translateX(${t}%)`)}else{const t=s(r());e.elements.rangeFill.style.transform=`translateX(${t}%)`}e.elements.rangeSlider.appendChild(e.elements.rangeFill),n.insertBefore&&n.targetElement.contains(n.insertBefore)?n.targetElement.insertBefore(e.elements.rangeSlider,n.insertBefore):n.targetElement.appendChild(e.elements.rangeSlider),n.targetElement&&(n.targetElement.style.cursor="ew-resize");let c=0,d=null;function u(t){if(t.stopPropagation(),t.preventDefault(),t.target.closest(".bubble-action"))return;window.isScrolling=!0;const o=t.pageX||(t.touches?t.touches[0].pageX:0),a=onSliderChange(e,o);((0,utils.md)(e,"climate",e.config.entity)||n.sliderLiveUpdate)&&m(e,a),l(a)}function p(t){t.stopPropagation(),t.preventDefault(),d&&clearTimeout(d);const o=t.pageX||(t.touches?t.touches[0].pageX:0),a=onSliderChange(e,o,!0);Math.abs(o-c)>5&&(t.preventDefault(),t.stopImmediatePropagation()),n.targetElement.classList.remove("is-dragging"),n.targetElement.removeEventListener("pointermove",u),window.removeEventListener("pointerup",p),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",p),(0,utils.md)(e,"climate",e.config.entity)&&!(0,utils.$C)(e,e.config.entity)?e._hass.callService("climate","turn_on",{entity_id:e.config.entity}).then(()=>{m(e,a)}).catch(e=>{console.error("Error turning on climate entity:",e)}):m(e,a),(0,utils.jp)("selection"),l(a),n.targetElement.querySelectorAll("*").forEach(t=>{t!==e.elements.rangeFill&&t!==e.elements.rangeSlider&&n.holdToSlide&&!e.config.tap_to_slide&&(t.style.transition="opacity 0.3s ease-in-out",t.style.pointerEvents=null,t.style.opacity=null,e.elements.rangeValue&&(e.elements.rangeValue.style.display="none"))}),d=setTimeout(()=>{e&&(e.dragging=!1,window.isScrolling=!1)},100)}function h(t){e.elements.rangeValue||(e.elements.rangeValue=(0,utils.n)("div","bubble-range-value"),e.elements.rangeSlider.appendChild(e.elements.rangeValue),l(t)),e.elements.rangeValue.style.display=""}const b=(()=>{const t=e.config.entity;if(!t)return!0;const n=t?.split(".")[0];return"sensor"===n||!["light","media_player","cover","input_number","number","fan","climate"].includes(n)})();if(e.config.read_only_slider||b)return;if(!n.holdToSlide||n.readOnlySlider||e.config.tap_to_slide)n.readOnlySlider||n.targetElement.addEventListener("pointerdown",t=>{const o=t.target.closest(".bubble-action"),a=t.target.closest(".bubble-sub-button")?.hasAttribute("no-slide");a||o&&'{"action":"none"}'!==o.getAttribute("data-hold-action")||t.target.closest(".bubble-sub-button")||(n.targetElement.setPointerCapture(t.pointerId),e.card&&e.card.classList.contains("is-unavailable")||(e.dragging=!0,window.isScrolling=!0,c=t.pageX||(t.touches?t.touches[0].pageX:0),n.targetElement.classList.add("is-dragging"),n.targetElement.addEventListener("pointermove",u,{passive:!1}),window.addEventListener("pointerup",p,{passive:!1}),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",p,{passive:!1})))},{passive:!1});else{let t;const o=200;let a=!1;n.targetElement.addEventListener("pointerdown",i=>{const r=i.target.closest(".bubble-action"),s=i.target.closest(".bubble-sub-button")?.hasAttribute("no-slide");s||r&&'{"action":"none"}'!==r.getAttribute("data-hold-action")||(a=!1,t=setTimeout(()=>{a=!0,function(t){if(n.targetElement.setPointerCapture(t.pointerId),e.card&&e.card.classList.contains("is-unavailable"))return;e.dragging=!0,window.isScrolling=!0,c=t.pageX||(t.touches?t.touches[0].pageX:0);let o=0;(0,utils.md)(e,"climate")&&!(0,utils.$C)(e,e.config.entity)?(o=0,e.elements.rangeFill.style.transform=`translateX(${o}%)`):o=onSliderChange(e,c),h(o),l(o),n.sliderLiveUpdate&&m(e,o),n.targetElement.classList.add("slider-appear-animation"),(0,utils.jp)("selection"),n.targetElement.querySelectorAll("*").forEach(t=>{t!==e.elements.rangeFill&&t!==e.elements.rangeSlider&&t!==e.elements.rangeValue&&(t.style.transition="opacity 0.3s ease-in-out",t.style.pointerEvents="none",t.style.opacity="0",h(o))}),setTimeout(()=>{n.targetElement.classList.remove("slider-appear-animation")},300),n.targetElement.classList.add("is-dragging"),n.targetElement.addEventListener("pointermove",u,{passive:!1}),window.addEventListener("pointerup",p,{passive:!1}),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",p,{passive:!1}),window.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation()},{capture:!0,once:!0})}(i)},o))},{passive:!1}),n.targetElement.addEventListener("pointerup",e=>{clearTimeout(t)}),n.targetElement.addEventListener("pointercancel",()=>{clearTimeout(t),a=!1})}const m=(0,utils.nF)(updateEntity,200)}const defaultOptions={targetElement:null,insertBefore:null,sliderLiveUpdate:!1,withValueDisplay:!1,initialValue:null};var create=__webpack_require__(207);function handleSubButtons(e,t={}){const n=createSubButtonStructure(e,t);return e.config.sub_button&&updateSubButtons(e,e.config.sub_button),n}const base_card_styles_namespaceObject="/* 'card-type' in CSS variables is replaced with the real card type \n   in card-structure.js for easier maintenance */\n\n* {\n    -webkit-tap-highlight-color: transparent !important;\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n\n    -webkit-user-select: none; /* Safari */\n    -ms-user-select: none; /* IE 10 and IE 11 */\n    user-select: none; /* Standard syntax */\n}\n\n*::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n}\n\nha-card {\n    background: none;\n    opacity: 1;\n}\n\n.scrolling-container {\n    width: 100%;\n    white-space: nowrap;\n    mask-image: linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent);\n    -webkit-mask-image: linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent);\n    overflow: hidden;\n}\n\n.scrolling-container span {\n    display: inline-block;\n    animation-name: bubble-scroll;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n}\n\n.bubble-scroll-separator {\n    opacity: .3;\n    margin: 0 6px 0 8px;\n}\n\n@keyframes bubble-scroll {\n    from { transform: translateX(0); }\n    to { transform: translateX(-50%); }\n}\n/* End of scrolling styles */\n\n.bubble-container {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: var(--bubble-card-type-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    box-shadow: var(--bubble-card-type-box-shadow, var(--bubble-box-shadow, none));\n    overflow: scroll;\n    touch-action: pan-y;\n    border: var(--bubble-card-type-border, var(--bubble-border, none));\n    box-sizing: border-box;\n}\n\n.bubble-wrapper {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    transition: all 1.5s;\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    background-color: rgba(0,0,0,0);\n    overflow: visible;\n}\n\n.bubble-content-container {\n    display: contents;\n    flex-grow: 1;\n}\n\n.bubble-buttons-container {\n    --icon-primary-color: var(--primary-text-color);\n    display: flex;\n    margin-right: 8px;\n    gap: 4px;\n}\n\n.bubble-background {\n    display: flex;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    transition: background-color 1.5s;\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%);\n    mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%);\n}\n\n.bubble-icon-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n    min-width: 38px;\n    min-height: 38px;\n    margin: 6px;\n    border-radius: var(--bubble-card-type-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    background-color: var(--bubble-card-type-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    overflow: hidden;\n    position: relative;\n    transition: all 0.3s ease-in-out;\n}\n\n.bubble-icon-feedback-container {\n    border-radius: var(--bubble-card-type-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n    overflow: hidden !important;\n}\n\n.is-off .bubble-main-icon {\n    opacity: 0.6;\n}\n\n.is-on .bubble-main-icon {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n\n.bubble-entity-picture {\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n}\n\n.bubble-name,\n.bubble-state {\n    display: flex;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-name-container {\n    display: flex;\n    line-height: 18px;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    margin: 0 16px 0 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-name {\n    font-size: 13px;\n    font-weight: 600;\n}\n\n.bubble-state {\n    font-size: 12px;\n    font-weight: normal;\n    opacity: 0.7;\n}\n\n.is-unavailable .bubble-wrapper {\n    cursor: not-allowed;\n}\n\n.is-unavailable .bubble-buttons-container {\n    display: none;\n}\n\n.is-unavailable {\n    opacity: 0.5;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.state-without-name {\n    opacity: 1;\n    font-size: 14px;\n}\n\n.name-without-icon {\n    margin-left: 16px;\n}\n\n.display-state {\n    display: flex;\n}\n\n.bubble-action-enabled {\n    cursor: pointer;\n}\n\n.large .bubble-container {\n    height: calc( var(--row-height,56px) * var(--row-size,1) + var(--row-gap,8px) * ( var(--row-size,1) - 1 ));\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n}\n\n.large .bubble-icon-container {\n    --mdc-icon-size: 24px;\n    min-width: 42px;\n    min-height: 42px;\n    margin-left: 8px;\n}",processedStylesCache={};function createBaseStructure(e,t={}){e.elements=e.elements||{};const n={...base_card_defaultOptions,appendTo:e.content,iconDefaultActions:{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}},buttonDefaultActions:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}},baseCardStyles:base_card_styles_namespaceObject,...t};let o,a;n.withMainContainer&&(e.elements.mainContainer=(0,utils.n)("div",`bubble-${n.type}-container bubble-container`)),n.withBaseElements&&(e.elements.cardWrapper=(0,utils.n)("div",`bubble-${n.type} bubble-wrapper`),e.elements.contentContainer=(0,utils.n)("div","bubble-content-container"),e.elements.buttonsContainer=(0,utils.n)("div","bubble-buttons-container"),e.elements.iconContainer=(0,utils.n)("div","bubble-main-icon-container bubble-icon-container icon-container"),e.elements.icon=(0,utils.n)("ha-icon","bubble-main-icon bubble-icon icon"),e.elements.image=(0,utils.n)("div","bubble-entity-picture entity-picture"),e.elements.nameContainer=(0,utils.n)("div","bubble-name-container name-container"),e.elements.name=(0,utils.n)("div","bubble-name name"),e.elements.state=(0,utils.n)("div","bubble-state state"),e.elements.iconContainer.append(e.elements.icon,n.withImage?e.elements.image:null),e.elements.nameContainer.append(e.elements.name,n.withState?e.elements.state:null),e.elements.contentContainer.append(e.elements.iconContainer,e.elements.nameContainer),e.elements.cardWrapper.append(e.elements.contentContainer,e.elements.buttonsContainer),n.withBackground&&(e.elements.background=(0,utils.n)("div","bubble-background"),e.elements.cardWrapper.prepend(e.elements.background)),e.elements.mainContainer.appendChild(e.elements.cardWrapper),n.withSlider&&createSliderStructure(e,{holdToSlide:n.holdToSlide,readOnlySlider:n.readOnlySlider})),n.styles&&(processedStylesCache[n.type]||(processedStylesCache[n.type]=n.baseCardStyles.replace(/card-type/g,n.type)),e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=processedStylesCache[n.type]+n.styles,e.elements.mainContainer.appendChild(e.elements.style)),n.withCustomStyle&&(e.elements.customStyle=(0,utils.n)("style"),e.elements.mainContainer.appendChild(e.elements.customStyle)),n.withSubButtons&&((0,create.g)(e,{container:n.appendTo,appendTo:e.elements.cardWrapper??e.elements.mainContainer,before:!1}),e.elements.buttonsContainer&&e.elements.cardWrapper.appendChild(e.elements.buttonsContainer)),!0===n.iconActions?o=n.iconDefaultActions:"object"==typeof n.iconActions&&(o=n.iconActions),!0===n.buttonActions?a=n.buttonDefaultActions:"object"==typeof n.buttonActions&&(a=n.buttonActions);let i={has_action:!1};e.elements.iconContainer&&(i=(0,tap_actions.dN)(e.elements.iconContainer,e.config,e.config.entity,o));let r={has_action:!1};return!1!==n.buttonActions&&e.elements.background&&(r=(0,tap_actions.dN)(e.elements.background,e.config.button_action,e.config.entity,a)),i.has_action&&e.elements.iconContainer&&(e.elements.iconFeedbackContainer=(0,utils.n)("div","bubble-icon-feedback-container bubble-feedback-container"),e.elements.iconContainer.appendChild(e.elements.iconFeedbackContainer),e.elements.iconFeedback=(0,utils.n)("div","bubble-icon-feedback bubble-feedback-element feedback-element"),e.elements.iconFeedback.style.display="none",e.elements.iconFeedbackContainer.appendChild(e.elements.iconFeedback),(0,tap_actions.pd)(e.elements.iconContainer,e.elements.iconFeedback)),n.withFeedback&&r.has_action&&e.elements.background&&(e.elements.feedbackContainer=(0,utils.n)("div","bubble-feedback-container feedback-container"),e.elements.feedback=(0,utils.n)("div","bubble-feedback-element feedback-element"),e.elements.feedback.style.display="none",e.elements.feedbackContainer.append(e.elements.feedback),e.elements.cardWrapper.append(e.elements.feedbackContainer),(0,tap_actions.pd)(e.elements.background,e.elements.feedback)),n.appendTo===e.content?e.content.appendChild(e.elements.mainContainer):n.appendTo.appendChild(e.elements.mainContainer),e.elements}const base_card_defaultOptions={type:"base",appendTo:null,baseCardStyles:null,styles:"",withMainContainer:!0,withBaseElements:!0,withFeedback:!0,withImage:!0,withSlider:!1,holdToSlide:!1,readOnlySlider:!1,withCustomStyle:!0,withState:!0,withBackground:!0,withSubButtons:!1,iconActions:!0,buttonActions:!1},button_styles_namespaceObject=".bubble-range-slider {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    cursor: ew-resize;\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2))));\n    overflow: hidden;\n    mask-image: radial-gradient(white, black);\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.bubble-background {\n    background-color: var(--bubble-button-background-color);\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2))));\n}\n\n.bubble-buttons-container {\n    display: contents;\n}";function create_createStructure(e,t=e.container){const n="button",o=getButtonType(e),a="slider"===o,i={};i.slider={icon:!0,button:{tap_action:{action:(0,utils.md)(e,"sensor")?"more-info":"toggle"},double_tap_action:{action:"none"},hold_action:{action:"none"}}},i.switch={icon:!0,button:{tap_action:{action:"toggle"},double_tap_action:{action:"none"},hold_action:{action:"more-info"}}},i.state={icon:{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"more-info"}},button:{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"more-info"}}},i.name={icon:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}},button:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}}};const r=createBaseStructure(e,{type:n,appendTo:t,styles:button_styles_namespaceObject,withSlider:a,holdToSlide:a,readOnlySlider:readOnlySlider(e),withFeedback:!e.config.tap_to_slide,withSubButtons:!0,iconActions:i[o]?.icon,buttonActions:!e.config.tap_to_slide&&i[o]?.button});r.background.classList.add("bubble-button-background"),r.mainContainer.classList.add("bubble-button-card-container"),r.cardWrapper.classList.add("bubble-button-card"),a&&r.mainContainer.classList.add("bubble-button-slider-container"),t!==e.container?e.buttonType=o:e.cardType=n}function handleButton(e,t=e.content){const n=getButtonType(e);"button"!==e.cardType&&e.buttonType!==n&&create_createStructure(e,t),"name"!==n&&(changes_changeStatus(e),changeButton(e)),changeIcon(e),changeName(e),changeState(e),(0,changes.Kr)(e),"pop-up"!==e.cardType&&changes_changeStyle(e)}async function handlePopUp(e){if("pop-up"!==e.cardType){if(e.getRootNode()instanceof ShadowRoot==0)return;prepareStructure(e),createHeader(e),createStructure(e)}else e.popUp&&e.elements&&((e.config.hash===location.hash||e.editor)&&((e.config.entity||e.config.name||e.config.icon)&&handleButton(e,e.elements.header),changeStyle(e)),e.editor||changeTriggered(e),changeEditor(e))}const horizontal_buttons_stack_styles_namespaceObject="@keyframes from-bottom {\n    0% { transform: translate(-50%, 100px); }\n    26% { transform: translate(-50%, -8px); }\n    46% { transform: translate(-50%, 1px); }\n    62% { transform: translate(-50%, -2px); }\n    70% { transform: translate(-50%, 0); }\n    100% { transform: translate(-50%, 0); }\n}\n@keyframes pulse {\n    0% { filter: brightness(0.7); }\n    100% { filter: brightness(1.3); }\n}\nha-card {\n    border-radius: 0;\n}\n.horizontal-buttons-stack-card {\n    bottom: 16px;\n    height: 51px;\n    margin-top: 0;\n    position: fixed;\n    width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\n    left: calc(var(--mdc-drawer-width, 0px) + 4px);\n    z-index: 6; /* Higher value hide the more-info panel */\n}\n@media only screen and (max-width: 870px) {\n    .horizontal-buttons-stack-card {\n        width: calc(100% - 16px);\n        left: 8px;\n    }\n\n    .horizontal-buttons-stack-card::before {\n        left: -10px;\n    }\n}\n.horizontal-buttons-stack-card::before {\n    content: '';\n    position: absolute;\n    top: -32px;\n    display: none;\n    background: linear-gradient(0deg, var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--primary-background-color)))) 50%, transparent);\n    width: 200%;\n    height: 100px;\n    pointer-events: none;\n}\n.has-gradient.horizontal-buttons-stack-card::before {\n    display: block;\n}\n\n.card-content {\n    width: calc(100% + 36px);\n    padding: 0 !important;\n    max-width: calc(var(--desktop-width) - 8px);\n    box-sizing: border-box;\n    overflow: scroll;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    mask-image: linear-gradient(\n        90deg,\n        #000000 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        transparent 100%\n    );\n}\n.is-scrollable.card-content {\n    padding: 0 !important;\n    width: 100%;\n}\n.is-scrolled.card-content {\n    padding: 0 !important;\n    width: 100%;\n    mask-image: linear-gradient(\n        90deg,\n        transparent 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        transparent 100%\n    );\n}\n.is-maxed-scroll.card-content {\n    mask-image: linear-gradient(\n        90deg,\n        transparent 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        #000000 100%\n    );\n}\n.card-content::-webkit-scrollbar {\n    display: none;\n}\n\n.bubble-horizontal-buttons-stack-card-container {\n    height: 51px;\n    position: relative;\n    margin: auto;\n}\n\n.bubble-button {\n    align-items: center;\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    color: var(--primary-text-color);\n    cursor: pointer;\n    display: inline-flex;\n    height: 50px;\n    left: 0;\n    padding: 0 16px;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n    transition: transform 1s;\n    box-sizing: border-box;\n}\n.bubble-button.highlight {\n    animation: pulse 1.4s infinite alternate;\n}\n.bubble-background-color {\n    border: 1px solid var(--primary-text-color);\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    box-sizing: border-box;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    transition: background-color 1s;\n    width: 100%;\n    z-index: 1;\n}\n.bubble-background {\n    opacity: 0.8;\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box !important;\n    position: absolute;\n    left: 0;\n    z-index: 0;\n    background-color: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n}\n.bubble-icon {\n    height: 24px;\n    width: 24px;\n    z-index: 2;\n}\n.bubble-icon + .bubble-name {\n    margin-left: 8px;\n    z-index: 2;\n}\n\n.horizontal-buttons-stack-card.editor {\n    position: relative;\n    width: 100%;\n    left: 0;\n    bottom: 0;\n}\n.horizontal-buttons-stack-card.editor::before {\n    background: none;\n}";let isOpen=!1;const BUTTON_MARGIN=12;function createButton(e,t){const n=e.config[`${t}_name`]??"",o=e.config[`${t}_icon`]??"",a=e.config[`${t}_pir_sensor`],i=e.config[`${t}_link`],r=e.config[`${t}_entity`];isOpen=isOpen||location.hash===i;const s=(0,utils.n)("ha-icon","bubble-icon icon");s.icon=o;const l=(0,utils.n)("div","bubble-name name");l.innerText=n;const c=(0,utils.n)("div","bubble-background-color background-color"),d=(0,utils.n)("div","bubble-background background"),u=(0,utils.n)("div",`bubble-button bubble-button-${t} button ${i.substring(1)}`);let p=localStorage.getItem(`bubbleButtonWidth-${i}`);return u.style.width=`${p}px`,u.appendChild(s),u.appendChild(l),u.appendChild(c),u.appendChild(d),u.addEventListener("click",()=>{location.hash!==i&&(isOpen=!1),isOpen?removeHash():addHash(i),isOpen=!isOpen,(0,utils.jp)("light")}),u.icon=s,u.name=l,u.backgroundColor=c,u.background=d,u.pirSensor=a,u.lightEntity=r,u.link=i,u.index=t,u.haRipple=(0,utils.n)("ha-ripple"),u.appendChild(u.haRipple),window.addEventListener("location-changed",function(){e.config.highlight_current_view&&(location.pathname===i||location.hash===i?u.classList.add("highlight"):u.classList.remove("highlight"))}),e.elements.buttons.push(u),u}function horizontal_buttons_stack_create_createStructure(e){e.elements={},e.elements.buttons=[],e.elements.cardContainer=(0,utils.n)("div","bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container");let t=1;for(;e.config[t+"_link"];)e.elements.cardContainer.appendChild(createButton(e,t)),t++;e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=horizontal_buttons_stack_styles_namespaceObject,e.elements.customStyle=(0,utils.n)("style"),e.card.classList.add("horizontal-buttons-stack-card"),e.card.style.marginLeft=e.config.margin??"",e.config.hide_gradient||e.card.classList.add("has-gradient"),e.card.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.elements.cardContainer.appendChild(e.elements.style),e.elements.cardContainer.appendChild(e.elements.customStyle),e.content.appendChild(e.elements.cardContainer),e.content.addEventListener("scroll",()=>{e.content.scrollLeft>0?e.content.classList.add("is-scrolled"):e.content.classList.remove("is-scrolled"),e.content.scrollWidth-BUTTON_MARGIN<e.content.offsetWidth+e.content.scrollLeft?e.content.classList.add("is-maxed-scroll"):e.content.classList.remove("is-maxed-scroll")}),(e.config.rise_animation??1)&&(e.content.style.animation="from-bottom .6s forwards",setTimeout(()=>{e.content.style.animation="none"},1500));let n=e.card.parentNode.host;n?.parentElement&&!e.editor&&"hui-card"===n?.parentElement?.tagName.toLowerCase()&&(n.parentElement.style.padding="0 0 80px"),e.cardType="horizontal-buttons-stack"}const changes_BUTTON_MARGIN=12;function sortButtons(e){if(!e.config.auto_order)return;const t=e._hass.states;e.elements.buttons.sort((e,n)=>{if(!t[e.pirSensor])return 1;if(!t[n.pirSensor])return-1;const o=t[e.pirSensor]?.last_updated,a=t[n.pirSensor]?.last_updated;return"on"===t[e.pirSensor]?.state&&"on"===t[n.pirSensor]?.state?o>a?-1:o===a?0:1:"on"===t[e.pirSensor]?.state?-1:"on"===t[n.pirSensor]?.state?1:o>a?-1:o===a?0:1})}function placeButtons(e){let t=0;for(let n=0;n<e.elements.buttons.length;++n){let o=localStorage.getItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`);e.elements.buttons[n].style.width="";const a=e.elements.buttons[n].offsetWidth;e.elements.buttons[n].style.width=`${a}px`,a>0&&(o=a,localStorage.setItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`,`${a}`)),null!==o&&(e.elements.buttons[n].style.transform=`translateX(${t}px)`,e.elements.buttons[n].style.width="",t+=+o+changes_BUTTON_MARGIN)}e.elements.cardContainer.style.width=`${t}px`}function changes_changeEditor(e){e.editor||e.detectedEditor?(e.elements.cardContainer.classList.add("editor"),e.card.classList.add("editor")):(e.elements.cardContainer.classList.remove("editor"),e.card.classList.remove("editor"))}function changeLight(e){e.elements.buttons.forEach(t=>{const n=e._hass.states[t.lightEntity],o=n?.attributes.rgb_color,a=n?.state;if(o){const e=(0,style.qd)(o)?"rgba(255, 220, 200, 0.5)":`rgba(${o}, 0.5)`;t.backgroundColor.style.backgroundColor=e,t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"}else"on"==a?(t.backgroundColor.style.backgroundColor="rgba(255, 255, 255, 0.5)",t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"):(t.backgroundColor.style.backgroundColor="rgba(0, 0, 0, 0)",t.backgroundColor.style.borderColor="var(--primary-text-color)")})}function changeConfig(e){e.elements.buttons.forEach(t=>{const n=t.index,o=e.config[`${n}_name`]??"",a=e.config[`${n}_icon`]??"",i=e.config[`${n}_pir_sensor`],r=e.config[`${n}_link`],s=e.config[`${n}_entity`];t.pirSensor=i,t.lightEntity=s,t.link=r,o?(t.name.innerText=o,t.name.style.display=""):t.name.style.display="none",a?(t.icon.icon=a,t.icon.style.display=""):t.icon.style.display="none",void 0===r&&(t.remove(),e.elements.buttons=e.elements.buttons.filter(e=>e!==t),e.elements.buttons.forEach((e,t)=>{e.index=t+1}))});let t=e.elements.buttons.length+1;for(;void 0!==e.config[`${t}_link`];){if(!e.elements.buttons.find(e=>e.index===t)){const n=createButton(e,t);e.elements.buttons.push(n)}t++}}function horizontal_buttons_stack_changes_changeStatus(e){e.content.scrollWidth>=e.content.offsetWidth?e.content.classList.add("is-scrollable"):e.content.classList.remove("is-scrollable")}function horizontal_buttons_stack_changes_changeStyle(e){(0,style_processor.SF)(e)}function handleHorizontalButtonsStack(e){"horizontal-buttons-stack"!==e.cardType&&horizontal_buttons_stack_create_createStructure(e),horizontal_buttons_stack_changes_changeStyle(e),sortButtons(e),changeConfig(e),changes_changeEditor(e),placeButtons(e),changeLight(e),horizontal_buttons_stack_changes_changeStatus(e)}const separator_styles_namespaceObject=".bubble-container {\n    display: flex;\n    background: none;\n    align-items: center;\n    height: 40px;\n    overflow: visible;\n    --bubble-separator-border: none;\n}\n.bubble-icon {\n    display: inline-flex;\n    height: auto;\n    width: auto;\n    margin: 0 22px 0 8px;\n}\n.bubble-name {\n    margin: 0 30px 0 0;\n    font-size: 16px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.bubble-name:empty {\n    display: none;\n}\n\n.bubble-line {\n    border-radius: 6px;\n    margin-right: 14px;\n    opacity: 0.6;\n    flex-grow: 1;\n    height: 6px;\n    background-color: var(--bubble-line-background-color, var(--ha-card-background-color, var(--secondary-background-color)));\n}\n\n.bubble-sub-button-container {\n    margin-left: 8px;\n}\n\n.rows-2 .bubble-sub-button-container {\n    margin-left: 14px;\n}\n\n.large .bubble-container {\n    height: calc( var(--row-height,44px) * var(--row-size,0.8) + var(--row-gap,8px) * ( var(--row-size,0.8) - 1 ))\n}";function separator_create_createStructure(e){const t="separator";e.elements={},e.elements.mainContainer=(0,utils.n)("div","bubble-container bubble-separator separator-container"),e.elements.icon=(0,utils.n)("ha-icon","bubble-icon"),e.elements.name=(0,utils.n)("h4","bubble-name"),e.elements.line=(0,utils.n)("div","bubble-line"),e.elements.mainContainer.appendChild(e.elements.icon),e.elements.mainContainer.appendChild(e.elements.name),e.elements.mainContainer.appendChild(e.elements.line),createBaseStructure(e,{type:t,styles:separator_styles_namespaceObject,withMainContainer:!1,withBaseElements:!1,withSubButtons:!0,iconActions:!1,buttonActions:!1}),e.cardType=t}function changes_changeIcon(e){e.elements.icon.icon=(0,icon.sW)(e),""===e.elements.icon.icon&&""===e.elements.icon.style.margin?(e.elements.icon.style.margin="0px 8px",e.elements.icon.style.width="0px"):""!==e.elements.icon.icon&&"0px 8px"===e.elements.icon.style.margin&&(e.elements.icon.style.margin="",e.elements.icon.style.width="")}function changes_changeName(e){const t=getName(e);t!==e.elements.name.innerText&&(e.elements.name.innerText=t)}function separator_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e)}function handleSeparator(e){"separator"!==e.cardType&&separator_create_createStructure(e),changes_changeIcon(e),changeName(e,!1),(0,changes.Kr)(e),separator_changes_changeStyle(e)}const coverEntityFeature={OPEN:1,CLOSE:2,STOP:8};function supportsFeature(e,t){return supportsFeatureFromAttributes(e.attributes,t)}function supportsFeatureFromAttributes(e,t){return!(!e||void 0===e.supported_features)&&0!==(e.supported_features&t)}function isFullyOpen(e){return void 0!==e.attributes.current_position?100===e.attributes.current_position:"open"===e.state}function isFullyClosed(e){return void 0!==e.attributes.current_position?0===e.attributes.current_position:"closed"===e.state}function changeCoverIcons(e){const t=e._hass.states[e.config.entity],{current_position:n,assumed_state:o}=t.attributes,a=supportsFeature(t,coverEntityFeature.OPEN),i=supportsFeature(t,coverEntityFeature.CLOSE),r=supportsFeature(t,coverEntityFeature.STOP),s=isFullyOpen(t),l=isFullyClosed(t),c="curtain"===(0,utils.D$)(e,"device_class");e.elements.icon.icon=s?(0,icon.sW)(e,e.config.entity,e.config.icon_open):(0,icon.sW)(e,e.config.entity,e.config.icon_close);const d=e.config.icon_up||(c?"mdi:arrow-expand-horizontal":"mdi:arrow-up"),u=e.config.icon_down||(c?"mdi:arrow-collapse-horizontal":"mdi:arrow-down");e.elements.buttonOpen.icon.setAttribute("icon",d),e.elements.buttonClose.icon.setAttribute("icon",u),void 0!==n?(s?e.elements.buttonOpen.classList.add("disabled"):a&&e.elements.buttonOpen.classList.remove("disabled"),l?e.elements.buttonClose.classList.add("disabled"):i&&e.elements.buttonClose.classList.remove("disabled")):(e.elements.buttonOpen.classList.remove("disabled"),e.elements.buttonClose.classList.remove("disabled")),e.elements.buttonStop.style.display=r?"":"none"}function cover_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e)}const cover_styles_namespaceObject=".bubble-cover-button {\n  display: flex;\n  position: relative;\n  height: 36px;\n  width: 36px;\n  border-radius: var(--bubble-cover-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n  background-color: var(--bubble-cover-button-background-color);\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n\n.bubble-cover-button-icon {\n  --mdc-icon-size: 20px;\n  color: var(--primary-text-color);\n  line-height: normal;\n}\n\n.bubble-buttons-container {\n  align-items: center;\n  gap: 8px;\n}\n\n.bubble-button.disabled {\n  opacity: 0.3 !important;\n  pointer-events: none !important;\n  cursor: none !important;\n}\n\n.large .bubble-cover-button-icon {\n  --mdc-icon-size: 24px;\n}";function cover_create_createStructure(e){const t="cover",n=createBaseStructure(e,{type:t,styles:cover_styles_namespaceObject,withSubButtons:!0,iconActions:!0,buttonActions:!0});function o(e,t,n){const o=(0,utils.n)("div",`bubble-cover-button ${t}`),a=(0,utils.n)("ha-icon",`bubble-cover-button-icon ${n}`);a.setAttribute("icon",e);const i=(0,utils.n)("div","bubble-feedback-container"),r=(0,utils.n)("div","bubble-feedback-element feedback-element");return i.appendChild(r),o.appendChild(i),o.appendChild(a),o.icon=a,o.feedback=r,o.haRipple=(0,utils.n)("ha-ripple"),o.appendChild(o.haRipple),o}n.buttonsContainer.classList.add("bubble-buttons","buttons-container"),n.buttonOpen=o("mdi:arrow-up","bubble-button bubble-open button open","bubble-icon-open"),n.buttonStop=o("mdi:stop","bubble-button bubble-stop button stop","bubble-icon-stop"),n.buttonClose=o("mdi:arrow-down","bubble-button bubble-close button close","bubble-icon-close"),n.buttonsContainer.append(n.buttonOpen,n.buttonStop,n.buttonClose),n.buttonOpen.addEventListener("click",()=>{(0,utils.jp)("selection");const t=e.config.open_service??"cover.open_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})}),n.buttonStop.addEventListener("click",()=>{(0,utils.jp)("selection");const t=e.config.stop_service??"cover.stop_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})}),n.buttonClose.addEventListener("click",()=>{(0,utils.jp)("selection");const t=e.config.close_service??"cover.close_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})}),e.cardType=t}function handleCover(e){"cover"!==e.cardType&&cover_create_createStructure(e),changeStatus(e),changeIcon(e),changeName(e),changeState(e),changeCoverIcons(e),(0,changes.Kr)(e),cover_changes_changeStyle(e)}const empty_column_styles_namespaceObject=".empty-column {\n    display: flex;\n    width: 100%;\n}\n";function empty_column_create_createStructure(e){e.elements={},e.elements.emptyColumnCard=(0,utils.n)("div","bubble-empty-column empty-column"),e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=empty_column_styles_namespaceObject,e.elements.customStyle=(0,utils.n)("style"),e.content.innerHTML="",e.content.appendChild(e.elements.emptyColumnCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="empty-column"}function handleEmptyColumn(e){"empty-column"!==e.cardType&&empty_column_create_createStructure(e)}const en_namespaceObject=JSON.parse('{"cards":{"calendar":{"busy":"Busy","all_day":"All day"}},"editor":{"calendar":{"entity":"Entity","color":"Color","limit":"Limit","list_of_calendars":"List of calendars","show_end":"Show end time","show_progress":"Show progress","show_place":"Show place","text_scrolling":"Text scrolling effect","name":"Calendar","new_calendar":"Add another calendar","remove_calendar":"Remove this calendar","settings":"Calendar settings"}}}');var translations_en_namespaceObject=__webpack_require__.t(en_namespaceObject,2);const fr_namespaceObject=JSON.parse('{"cards":{"calendar":{"busy":"Occupé","all_day":"Journée"}},"editor":{"calendar":{"entity":"Entité","color":"Couleur","limit":"Limite","list_of_calendars":"Liste des calendriers","show_end":"Voir l\'heure de fin","show_progress":"Voir la progression","show_place":"Voir le lieu","text_scrolling":"Effet de défilement du texte","name":"Calendrier","new_calendar":"Ajouter un autre calendrier","remove_calendar":"Supprimer ce calendrier","settings":"Paramètres du calendrier"}}}');var translations_fr_namespaceObject=__webpack_require__.t(fr_namespaceObject,2);const de_namespaceObject=JSON.parse('{"cards":{"calendar":{"busy":"Beschäftigt","all_day":"Ganztägig"}},"editor":{"calendar":{"entity":"Entität","color":"Farbe","limit":"Anzeigelimit","list_of_calendars":"Kalenderliste","show_end":"Endzeitpunkt anzeigen","show_progress":"Fortschritt anzeigen","text_scrolling":"Lauftext","name":"Kalender","new_calendar":"Kalender hinzufügen","remove_calendar":"Kalender entfernen","settings":"Kalendereinstellungen"}}}');var translations_de_namespaceObject=__webpack_require__.t(de_namespaceObject,2);const zh_cn_namespaceObject=JSON.parse('{"cards":{"calendar":{"busy":"忙碌","all_day":"全天"}},"editor":{"calendar":{"entity":"实体","color":"颜色","limit":"限制","list_of_calendars":"日历列表","show_end":"显示结束时间","show_progress":"显示进度","text_scrolling":"文字滚动效果","name":"日历","new_calendar":"添加另一个日历","remove_calendar":"删除此日历","settings":"日历设置"}}}');var translations_zh_cn_namespaceObject=__webpack_require__.t(zh_cn_namespaceObject,2);const languages={en:translations_en_namespaceObject,fr:translations_fr_namespaceObject,de:translations_de_namespaceObject,"zh-Hans":translations_zh_cn_namespaceObject},DEFAULT_LANG="en";function getCurrentLocale(e){return e?.locale.language??DEFAULT_LANG}function dotStringReducer(e,t){return e[t]}function getTranslatedString(e,t){try{const n=languages[t];return e.split(".").reduce(dotStringReducer,n)}catch{return}}function setupTranslation(e){return function(t){const n=getTranslatedString(t,getCurrentLocale(e));if(n)return n;return getTranslatedString(t,DEFAULT_LANG)||t}}function hashCode(e){return Array.from(e).reduce((e,t)=>t.charCodeAt(0)+((e<<5)-e),0)}function intToRGB(e){const t=(16777215&e).toString(16).toUpperCase();return"#"+"00000".substring(0,6-t.length)+t}function dateDiffInMinutes(e,t){return Math.floor((t-e)/6e4)}function parseEventDateTime(e){if(e.date){const t=e.date.split("-"),n=parseInt(t[0],10),o=parseInt(t[1],10)-1,a=parseInt(t[2],10);return new Date(n,o,a)}return new Date(e.dateTime)}const getEventDateKey=e=>{const t=parseEventDateTime(e);return`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`};async function changeEventList(e){const t=e.config.days??7,n=`start=${(new Date).toISOString()}&end=${new Date((new Date).getTime()+864e5*t).toISOString()}`,o=e.config.entities.map(async t=>{const o=`calendars/${t.entity}?${n}`;return(await e._hass.callApi("get",o)).map(e=>({...e,entity:t}))}),a=await Promise.all(o);e.events=a.flat().sort((e,t)=>{const n=parseEventDateTime(e.start),o=parseEventDateTime(t.start),a=void 0!==e.start.date,i=void 0!==t.start.date;return a&&!i?-1:!a&&i?1:n.getTime()-o.getTime()}).slice(0,e.config.limit??void 0)}async function changeEvents(e){const t=setupTranslation(e._hass),n=e.events.reduce((e,t)=>{const n=getEventDateKey(t.start);return e[n]||(e[n]=[]),e[n].push(t),e},{});if(0===Object.keys(n).length){const e=(new Date).toISOString().split("T")[0];n[e]=[{start:{date:e},end:{date:e},summary:"No events",entity:{color:"transparent"}}]}const o=new DocumentFragment;Object.keys(n).sort().forEach(a=>{const i=parseEventDateTime({date:a}),r=new Date,s=(0,utils.n)("div","bubble-day-number"),l=e._hass.locale.language;s.innerHTML=`${i.getDate()}`;const c=(0,utils.n)("div","bubble-day-month");c.innerHTML=i.toLocaleString(l,{month:"short"});const d=(0,utils.n)("div","bubble-day-chip");d.appendChild(s),d.appendChild(c),i.getDate()===r.getDate()&&i.getMonth()===r.getMonth()&&d.classList.add("is-active"),(0,tap_actions.dN)(d,{...e.config},null);const u=(0,utils.n)("div","bubble-day-events");n[a].forEach(n=>{const o=void 0!==n.start.date,a=new Date,i=parseEventDateTime(n.start),r=parseEventDateTime(n.end),s=(0,utils.n)("div","bubble-event-time");s.innerHTML=o?t("cards.calendar.all_day"):i.toLocaleTimeString(l,{hour:"numeric",minute:"numeric"}),o||!0!==e.config.show_end||(s.innerHTML+=` – ${r.toLocaleTimeString(l,{hour:"numeric",minute:"numeric"})}`);const c=(0,utils.n)("div","bubble-event-name-wrapper"),d=(0,utils.n)("div","bubble-event-name"),p=n.summary||t("cards.calendar.busy");(0,utils.Nl)(e,d,p),d.innerHTML=p,c.appendChild(d);const h=(0,utils.n)("div","bubble-event-color");if(h.style.backgroundColor=n.entity.color?n.entity.color.startsWith("#")?n.entity.color:`var(--${n.entity.color}-color)`:intToRGB(hashCode(n.entity.entity)),"transparent"===n.entity.color&&(h.style.display="none"),!0===e.config.show_place&&null!==n.location){const t=(0,utils.n)("div","bubble-event-place");t.innerHTML=n.location,(0,utils.Nl)(e,t,n.location),c.appendChild(t)}const b=(0,utils.n)("div","bubble-event");b.appendChild(h),b.appendChild(s),b.appendChild(c),(0,tap_actions.dN)(b,e.config.event_action,n.entity.entity,{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}});const m="var(--bubble-event-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))";if(!0===e.config.show_progress&&o&&i<a)b.style.setProperty("--bubble-event-background-color",m);else if(!0===e.config.show_progress&&!o&&i<a){const e=dateDiffInMinutes(i,r),t=100*dateDiffInMinutes(i,a)/e;b.style.setProperty("--bubble-event-background-image",`linear-gradient(to right, ${m} ${t}%, transparent ${t}%)`)}u.appendChild(b)});const p=(0,utils.n)("div","bubble-day-wrapper");p.appendChild(d),p.appendChild(u),o.appendChild(p),e.elements.mainContainer.scrollHeight>e.elements.mainContainer.offsetHeight&&e.content.classList.add("is-overflowing")}),e.elements.calendarCardContent.innerHTML="",e.elements.calendarCardContent.appendChild(o)}function calendar_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e)}const calendar_styles_namespaceObject='.bubble-container {\n  height: var(--bubble-calendar-height, 56px);\n  display: flex;\n  gap: 8px;\n}\n.card-content::after {\n  border-radius: 0 0 var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px)) var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\n  content: "";\n  display: flex;\n  height: 32px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  pointer-events: none;\n  transition: opacity .2s, transform .2s;\n  background: -webkit-linear-gradient(0deg, var(--bubble-calendar-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color)))), transparent 14px);\n  background: -moz-linear-gradient(0deg, var(--bubble-calendar-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color)))), transparent 14px);\n  background: linear-gradient(0deg, var(--bubble-calendar-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color)))), transparent 14px);\n  z-index: 1;\n}\n.bubble-calendar-content {\n  flex-grow: 1;\n  min-width: 0;\n}\n.bubble-sub-button-container {\n  flex-shrink: 0;\n  position: sticky !important;\n  top: 0;\n}\n.bubble-day-wrapper {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  gap: 8px;\n  padding: 7px 16px 7px 8px;\n  position: relative;\n  box-sizing: border-box;\n}\n.bubble-day-wrapper + .bubble-day-wrapper::before {\n  content: "";\n  position: absolute;\n  top: -1px;\n  left: 62px;\n  right: 16px;\n  height: 2px;\n  background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n}\n.bubble-day-chip {\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  border-radius: var(--bubble-button-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n  background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n  position: relative;\n}\n.bubble-day-number {\n  font-size: 24px;\n  line-height: 20px;\n  font-weight: 600;\n  opacity: 0.6;\n}\n.is-active .bubble-day-number {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n.bubble-day-month {\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: 400;\n  opacity: 0.6;\n}\n.is-active .bubble-day-month {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n.bubble-day-events {\n  width: 100%;\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\n  min-width: 0;\n}\n.bubble-event {\n  background-color: var(--bubble-event-background-color);\n  background-image: var(--bubble-event-background-image);\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 4px 6px;\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\n  margin-left: -6px;\n  position: relative;\n  line-height: 1em;\n}\n.bubble-event-time {\n  font-size: 12px;\n  font-weight: 400;\n  white-space: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  opacity: 0.7;\n}\n.bubble-event-color {\n  height: 12px;\n  width: 12px;\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.bubble-event-name-wrapper {\n  width: 10px;\n  flex: 1;\n}\n.bubble-event-name {\n  font-size: 13px;\n  font-weight: 600;\n  max-width: 100%;\n  min-width: 0;\n  flex-shrink: 1;\n  flex-grow: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.bubble-event-place {\n  opacity: 0.6;\n  display: flex;\n  align-items: center;\n  margin-top: 2px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  min-width: 0;\n  flex-shrink: 1;\n  flex-grow: 1;\n}\n.bubble-event-place-icon {\n  display: inline-flex;\n  --mdc-icon-size: 12px;\n  margin-right: 4px;\n}';function calendar_create_createStructure(e){const t="calendar",n=createBaseStructure(e,{type:t,styles:calendar_styles_namespaceObject,withBaseElements:!1,withSubButtons:!0,iconActions:!1,buttonActions:!1});n.calendarCardContent=(0,utils.n)("div","bubble-calendar-content"),n.mainContainer.style.setProperty("--bubble-calendar-height",56*(e.config.rows??1)+"px"),n.mainContainer.prepend(n.calendarCardContent),e.cardType=t}function handleCalendar(e){"calendar"!==e.cardType&&calendar_create_createStructure(e);const t=JSON.stringify(e.config.entities.map(t=>e._hass.states[t.entity]));e.cacheKey!==t&&(e.cacheKey=t,setTimeout(()=>{e.cacheKey=""},9e5),changeEventList(e).then(()=>{changeEvents(e)})),calendar_changes_changeStyle(e),(0,changes.Kr)(e)}function changeBackground(e){const t=(0,utils.$C)(e),n=(0,icon.Qp)(e),o=e.config.cover_background,a=e.elements.background.style.backgroundImage;if(o&&t&&n){const t="url("+n+")";a!==t&&(e.elements.background.style.backgroundImage=t)}else""!==a&&(e.elements.background.style.backgroundImage="")}function changeMediaInfo(e){const t=(0,utils.D$)(e,"media_title"),n=(0,utils.D$)(e,"media_artist"),o=t+n;o!==e.previousMediaState&&(e.elements.artist.style.display=""===n?"none":"flex",e.previousMediaState=o,(0,utils.Nl)(e,e.elements.title,t),(0,utils.Nl)(e,e.elements.artist,n))}function changeDisplayedInfo(e){(0,utils.D$)(e,"media_title");const t=""===(0,utils.D$)(e,"media_artist");e.elements.mediaInfoContainer.style.display=t?"none":"",e.elements.nameContainer.style.display=t?"":"none"}function changeSlider(e){e.elements.rangeFill&&updateSlider(e)}function changePlayPauseIcon(e){const t="playing"===(0,utils.Gu)(e),n=e.elements.playPauseButton.clicked;t?e.elements.playPauseButton.icon.setAttribute("icon",n?"mdi:play":"mdi:pause"):e.elements.playPauseButton.icon.setAttribute("icon",n?"mdi:pause":"mdi:play"),e.elements.playPauseButton.clicked=!1}function changePowerIcon(e){const t=(0,utils.Gu)(e),n="off"!==t&&"unknown"!==t;e.elements.powerButton.icon.style.color=n?"var(--accent-color)":""}function changeVolumeIcon(e){const t=e.elements.volumeButton.isHidden,n=t?"1":"0",o=t?"mdi:volume-high":"mdi:close";e.elements.volumeButton.icon.setAttribute("icon",o),e.elements.mediaInfoContainer.style.opacity=n,e.elements.nameContainer.style.opacity=n,e.elements.subButtonContainer&&(e.elements.subButtonContainer.style.opacity=n),e.elements.previousButton.style.opacity=n,e.elements.nextButton.style.opacity=n,e.elements.powerButton.style.opacity=n,e.elements.volumeButton.isHidden=!t}function changeMuteIcon(e){const t=1==(0,utils.D$)(e,"is_volume_muted");e.elements.muteButton.clicked,"var(--primary-text-color)"!==e.elements.muteButton.icon.style.color&&(e.elements.muteButton.icon.style.color="var(--primary-text-color)"),t?e.elements.muteButton.icon.setAttribute("icon","mdi:volume-off"):e.elements.muteButton.icon.setAttribute("icon","mdi:volume-high"),e.elements.muteButton.clicked=!1}function updateVolumeSliderPosition(e){let t=50,n=146;e.content.classList.contains("large")&&(t=58,n=160);const o=(0,utils.Gu)(e),a="off"!==o&&"unknown"!==o;(e.config.hide?.play_pause_button||!e.editor&&!a)&&(e.content.classList.contains("large")?n-=42:n-=36),e.elements.cardWrapper.style.setProperty("--volume-slider-left-offset",`${t}px`),e.elements.cardWrapper.style.setProperty("--volume-slider-width-calc",`calc(100% - ${n}px)`)}function media_player_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e);const t=(0,utils.Gu)(e),n="off"!==t&&"unknown"!==t,o=e.config.hide?.power_button&&e.config.hide?.previous_button&&e.config.hide?.next_button&&e.config.hide?.volume_button&&e.config.hide?.play_pause_button;(!n&&e.config.hide?.power_button||o)&&"none"!==e.elements.buttonsContainer.style.display?e.elements.buttonsContainer.classList.add("hidden"):o&&e.config.hide?.power_button||!e.elements.buttonsContainer.classList.contains("hidden")||e.elements.buttonsContainer.classList.remove("hidden"),e.config.hide?.power_button&&"none"!==e.elements.powerButton.style.display?e.elements.powerButton.classList.add("hidden"):!e.config.hide?.power_button&&e.elements.powerButton.classList.contains("hidden")&&e.elements.powerButton.classList.remove("hidden"),!e.config.hide?.previous_button&&(e.editor||n)||"none"===e.elements.previousButton.style.display?!e.config.hide?.previous_button&&(e.editor||n)&&e.elements.previousButton.classList.contains("hidden")&&e.elements.previousButton.classList.remove("hidden"):e.elements.previousButton.classList.add("hidden"),!e.config.hide?.next_button&&(e.editor||n)||"none"===e.elements.nextButton.style.display?!e.config.hide?.next_button&&(e.editor||n)&&e.elements.nextButton.classList.contains("hidden")&&e.elements.nextButton.classList.remove("hidden"):e.elements.nextButton.classList.add("hidden"),!e.config.hide?.volume_button&&(e.editor||n)||"none"===e.elements.volumeButton.style.display?!e.config.hide?.volume_button&&(e.editor||n)&&e.elements.volumeButton.classList.contains("hidden")&&e.elements.volumeButton.classList.remove("hidden"):e.elements.volumeButton.classList.add("hidden"),!e.config.hide?.play_pause_button&&(e.editor||n)||"none"===e.elements.playPauseButton.style.display?!e.config.hide?.play_pause_button&&(e.editor||n)&&e.elements.playPauseButton.classList.contains("hidden")&&e.elements.playPauseButton.classList.remove("hidden"):e.elements.playPauseButton.classList.add("hidden"),updateVolumeSliderPosition(e)}const media_player_styles_namespaceObject=".bubble-media-button {\n    display: flex;\n    position: relative;\n    height: 36px;\n    width: 36px;\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    background-color: var(--bubble-media-player-button-background-color);\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: all 0.3s ease;\n    box-sizing: border-box;\n}\n\n.bubble-button-container {\n    align-items: center;\n    gap: 8px;\n  }\n\n.bubble-media-button-icon {\n    --mdc-icon-size: 20px;\n    color: var(--primary-text-color);\n    line-height: normal;\n}\n\n.bubble-play-pause-button {\n    background-color: var(--bubble-accent-color, var(--bubble-default-color));\n}\n\n.bubble-play-pause-button .bubble-media-button-icon {\n    color: var(--bubble-media-player-play-pause-icon-color, var(--bubble-button-active-icon-color, var(--primary-background-color, white)));\n}\n\n.bubble-play-pause-button:not(.large) {\n    height: 36px;\n    width: 36px;\n}\n\n.bubble-volume-slider {\n    position: absolute;\n    height: 38px;\n    width: var(--bubble-volume-slider-width-calc, var(--volume-slider-width-calc, calc(100% - 150px)));\n    left: var(--bubble-volume-slider-left-offset, var(--volume-slider-left-offset, 56px));\n    overflow: hidden;\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    z-index: 1;\n    background-color: var(--bubble-media-player-slider-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n    opacity: 1;\n    transition: opacity .2s, transform .2s;\n    transform: translateX(0);\n}\n\n.bubble-range-value {\n    display: flex;\n    justify-content: flex-end;\n    height: 38px;\n    align-items: center;\n    font-size: 12px;\n    opacity: 0.8;\n    z-index: 1;\n}\n\n.bubble-mute-button {\n    opacity: 1;\n    transition: opacity .2s, transform .2s;\n    transform: translateX(0);\n}\n\n.is-hidden {\n    opacity: 0 !important;\n    pointer-events: none;\n    transform: translateX(14px);\n}\n\n.bubble-range-fill {\n    background-color: var(--bubble-accent-color, var(--bubble-default-color));\n}\n\n.bubble-mute-button {\n    display: flex;\n    position: absolute;\n    height: 38px;\n    width: 38px;\n    justify-content: center;\n    align-items: center;\n}\n\n.bubble-media-info-container {\n    display: flex;\n    line-height: 14px;\n    font-size: 12px;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    margin: 0 16px 0 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-title,\n.bubble-artist {\n    display: flex;\n    margin: 2px 0;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-title {\n    font-weight: 600;\n}\n\n.bubble-background {\n    background-size: cover;\n    background-position: center;\n    filter: blur(50px);\n    opacity: 0.5;\n}\n\n@media screen and (max-width: 250px) {\n    .bubble-previous-button {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 206px) {\n    .bubble-next-button {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 160px) {\n    .bubble-volume-button {\n        display: none;\n    }\n}\n\n.large .bubble-mute-button {\n  height: 42px;\n  width: 42px;\n}\n\n.large .bubble-volume-slider {\n  height: 42px;\n  border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n  left: var(--volume-slider-left-offset, 60px);\n  width: var(--volume-slider-width-calc, calc(100% - 164px));\n}\n\n.large .bubble-range-value {\n  place-items: center;\n  height: 42px;\n}\n\n.large .bubble-play-pause-button {\n  height: 42px;\n  width: 42px;\n}";function media_player_create_createStructure(e){const t="media-player",n=createBaseStructure(e,{type:t,styles:media_player_styles_namespaceObject,iconActions:!0,buttonActions:!0,withSubButtons:!0});function o(e,t){const n=(0,utils.n)("div",`bubble-media-button ${t}`),o=(0,utils.n)("ha-icon","bubble-media-button-icon");o.setAttribute("icon",e);const a=(0,utils.n)("div","bubble-feedback-container"),i=(0,utils.n)("div","bubble-feedback-element feedback-element");return a.appendChild(i),n.appendChild(a),n.appendChild(o),n.icon=o,n.feedback=i,n.haRipple=(0,utils.n)("ha-ripple"),n.appendChild(n.haRipple),n}n.mediaInfoContainer=(0,utils.n)("div","bubble-media-info-container"),n.playPauseButton=o("mdi:play","bubble-play-pause-button"),n.previousButton=o("mdi:skip-previous","bubble-previous-button"),n.nextButton=o("mdi:skip-next","bubble-next-button"),n.volumeButton=o("mdi:volume-high","bubble-volume-button"),n.powerButton=o("mdi:power","bubble-power-button"),n.muteButton=o("mdi:volume-off","bubble-mute-button is-hidden"),n.title=(0,utils.n)("div","bubble-title"),n.artist=(0,utils.n)("div","bubble-artist"),n.background.classList.add("bubble-cover-background"),n.buttonsContainer.classList.add("bubble-button-container"),n.iconContainer.appendChild(n.muteButton),n.mediaInfoContainer.append(n.title,n.artist),n.contentContainer.append(n.mediaInfoContainer),n.buttonsContainer.append(n.powerButton,n.previousButton,n.nextButton,n.volumeButton,n.playPauseButton),n.volumeSliderContainer=(0,utils.n)("div","bubble-volume-slider is-hidden"),createSliderStructure(e,{targetElement:n.volumeSliderContainer,sliderLiveUpdate:!1,withValueDisplay:!0,holdToSlide:!1}),n.cardWrapper.appendChild(n.volumeSliderContainer),n.volumeButton.addEventListener("click",()=>{n.volumeSliderContainer.classList.toggle("is-hidden"),n.muteButton.classList.toggle("is-hidden"),n.icon.classList.toggle("is-hidden"),n.image.classList.toggle("is-hidden"),changeVolumeIcon(e)}),(0,tap_actions.pd)(n.volumeButton,n.volumeButton.feedback),n.powerButton.addEventListener("click",()=>{const t=(0,utils.Gu)(e),n="off"!==t&&"unknown"!==t;e._hass.callService("media_player",n?"turn_off":"turn_on",{entity_id:e.config.entity})}),(0,tap_actions.pd)(n.powerButton,n.powerButton.feedback),n.muteButton.addEventListener("pointerdown",t=>{t.stopPropagation();const o=!0===(0,utils.D$)(e,"is_volume_muted");e._hass.callService("media_player","volume_mute",{entity_id:e.config.entity,is_volume_muted:!o}),n.muteButton.clicked=!0}),["click","touchstart","touchend","pointerup","pointercancel"].forEach(e=>{n.muteButton.addEventListener(e,e=>{e.stopPropagation()})}),(0,tap_actions.pd)(n.muteButton,n.muteButton.feedback),n.previousButton.addEventListener("click",()=>{e._hass.callService("media_player","media_previous_track",{entity_id:e.config.entity})}),(0,tap_actions.pd)(n.previousButton,n.previousButton.feedback),n.nextButton.addEventListener("click",()=>{e._hass.callService("media_player","media_next_track",{entity_id:e.config.entity})}),(0,tap_actions.pd)(n.nextButton,n.nextButton.feedback),n.playPauseButton.addEventListener("click",()=>{e._hass.callService("media_player","media_play_pause",{entity_id:e.config.entity}),n.playPauseButton.clicked=!0}),(0,tap_actions.pd)(n.playPauseButton,n.playPauseButton.feedback),n.mainContainer.addEventListener("click",()=>(0,utils.jp)("selection")),e.cardType=t}function handleMediaPlayer(e){"media-player"!==e.cardType&&media_player_create_createStructure(e),changeStatus(e),changeName(e),changeMediaInfo(e),changeDisplayedInfo(e),changeIcon(e),changeBackground(e),changeState(e),changeSlider(e),changePlayPauseIcon(e),changeMuteIcon(e),changePowerIcon(e),(0,changes.Kr)(e),media_player_changes_changeStyle(e)}var dropdown=__webpack_require__(352),dropdown_changes=__webpack_require__(26);function select_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e)}const select_styles_namespaceObject=".bubble-container {\n    overflow: inherit;\n    transition: border 0.3s ease;\n}\n\n.bubble-background {\n    cursor: pointer;\n}";function select_create_createStructure(e){createBaseStructure(e,{type:"select",styles:select_styles_namespaceObject,withFeedback:!0,withSubButtons:!0,withIconActions:!0}).mainContainer.classList.add("bubble-select-card-container"),e.cardType="select"}function handleSelect(e){e.cardType,"select"!==e.cardType&&(select_create_createStructure(e),(0,dropdown.F)(e),(0,dropdown.X)(e)),(0,dropdown_changes.O)(e,e.elements,e.config.entity,e.config),changeStatus(e),changeIcon(e),changeName(e),changeState(e),(0,changes.Kr)(e),select_changes_changeStyle(e)}function changeTemperature(e){const t=(0,utils.D$)(e,"temperature");""===t?e.elements.temperatureContainer?.classList.add("hidden"):e.elements.temperatureContainer?.classList.remove("hidden"),t!==e.previousTemp&&(e.previousTemp=t,e.elements.tempDisplay&&(e.elements.tempDisplay.innerText=parseFloat(t).toFixed(1)))}function changeTargetTempLow(e){const t=(0,utils.D$)(e,"target_temp_low"),n=e.config.hide_target_temp_low;""===t?e.elements.targetTemperatureContainer?.classList.add("hidden"):e.elements.targetTemperatureContainer?.classList.remove("hidden"),n?e.elements.lowTempContainer?.classList.add("hidden"):e.elements.lowTempContainer?.classList.remove("hidden"),t!==e.previousTargetTempLow&&(e.previousTargetTempLow=t,e.elements.lowTempDisplay&&(e.elements.lowTempDisplay.innerText=parseFloat(t).toFixed(1)))}function changeTargetTempHigh(e){const t=(0,utils.D$)(e,"target_temp_high");e.config.hide_target_temp_high?e.elements.highTempContainer?.classList.add("hidden"):e.elements.highTempContainer?.classList.remove("hidden"),t!==e.previousTargetTempHigh&&(e.previousTargetTempHigh=t,e.elements.highTempDisplay&&(e.elements.highTempDisplay.innerText=parseFloat(t).toFixed(1)))}function climate_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e);const t=(0,utils.Gu)(e);e.previousState!==t&&(e.previousState=t,e.elements.background.style.backgroundColor=`var(--bubble-climate-background-color, ${getClimateColor(e)})`),e.config.card_layout,e.elements.hvacModeDropdown}const climate_styles_namespaceObject=".bubble-temperature-container, .bubble-low-temp-container, .bubble-high-temp-container {\n    display: inline-flex;\n    position: relative;\n    font-size: 12px;\n    white-space: nowrap;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    height: 36px;\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    background-color: var(--bubble-climate-button-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))));\n}\n\n.bubble-low-temp-container {\n    color: var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)));\n}\n\n.bubble-high-temp-container {\n    color: var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)));\n}\n\n.bubble-target-temperature-container {\n    display: flex;\n    gap: 10px;\n}\n\n.bubble-climate-minus-button,\n.bubble-climate-plus-button {\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    width: 34px;\n    height: 34px;\n    margin: 2px;\n    vertical-align: middle;\n    font-size: 18px;\n    color: var(--primary-text-color);\n    cursor: pointer;\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n}\n\n.bubble-climate-minus-button-icon,\n.bubble-climate-plus-button-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    --mdc-icon-size: 16px;\n}\n\n@keyframes tap-warning {\n    10%, 90% { transform: translateX(-1px); }\n    20%, 80% { transform: translateX(1px); }\n    30%, 50%, 70% { transform: translateX(-2px); }\n    40%, 60% { transform: translateX(2px); }\n}";function climate_create_createStructure(e){const t="climate",n=createBaseStructure(e,{type:t,styles:climate_styles_namespaceObject,withSubButtons:!0,iconActions:!0,buttonActions:!0});function o(t,o,i){const r=(0,utils.n)("div","bubble-climate-minus-button"),s=(0,utils.n)("div","bubble-climate-plus-button"),l=(0,utils.n)("ha-icon","bubble-climate-minus-button-icon");l.setAttribute("icon","mdi:minus"),r.appendChild(l),r.haRipple=(0,utils.n)("ha-ripple"),r.appendChild(r.haRipple),(0,tap_actions.pd)(r);const c=(0,utils.n)("ha-icon","bubble-climate-plus-button-icon");let d,u;c.setAttribute("icon","mdi:plus"),s.appendChild(c),s.haRipple=(0,utils.n)("ha-ripple"),s.appendChild(s.haRipple),(0,tap_actions.pd)(s),"temperature"===o?(n.tempDisplay=(0,utils.n)("div","bubble-temperature-display"),d=n.tempDisplay):"target_temp_low"===o?(n.lowTempDisplay=(0,utils.n)("div","bubble-low-temperature-display"),d=n.lowTempDisplay):"target_temp_high"===o&&(n.highTempDisplay=(0,utils.n)("div","bubble-high-temperature-display"),d=n.highTempDisplay),t.appendChild(r),t.appendChild(d),t.appendChild(s);let p=parseFloat((0,utils.D$)(e,o))||0,h=p;function b(){const t=parseFloat((0,utils.D$)(e,o))||0;t!==h&&(p=t,h=t)}function m(){b();const t={entity_id:e.config.entity};"target_temp_low"===o?(t.target_temp_low=p,t.target_temp_high=(0,utils.D$)(e,"target_temp_high")):"target_temp_high"===o?(t.target_temp_high=p,t.target_temp_low=(0,utils.D$)(e,"target_temp_low")):t[o]=p,e._hass.callService("climate","set_temperature",t)}function g(t){b();const i=e.config.min_temp??(void 0!==a.attributes.min_temp?a.attributes.min_temp:0),r=e.config.max_temp??(void 0!==a.attributes.max_temp?a.attributes.max_temp:1e3);let s=parseFloat((p+t).toFixed(1));if(s=Math.min(r,Math.max(i,s)),s<i?s=i:s>r&&(s=r),s!==p)p=s,function(e){"temperature"===o?n.tempDisplay.innerText=e.toFixed(1):"target_temp_low"===o?n.lowTempDisplay.innerText=e.toFixed(1):"target_temp_high"===o&&(n.highTempDisplay.innerText=e.toFixed(1))}(p),clearTimeout(u),u=setTimeout(m,700);else{(0,utils.jp)("failure");const t=e.elements.mainContainer;t.style.animation="tap-warning 0.4s cubic-bezier(.36,.07,.19,.97) both",setTimeout(()=>{t.style.animation=""},500)}}r.addEventListener("click",()=>g(-i)),s.addEventListener("click",()=>g(i))}n.temperatureContainer=(0,utils.n)("div","bubble-temperature-container"),n.targetTemperatureContainer=(0,utils.n)("div","bubble-target-temperature-container"),n.background.classList.add("bubble-color-background"),n.buttonsContainer.append(n.temperatureContainer,n.targetTemperatureContainer);const a=e._hass.states[e.config.entity],i="°C"===e._hass.config.unit_system.temperature,r=e.config.step??(a.attributes.target_temp_step?a.attributes.target_temp_step:i?.5:1),s=void 0!==a?.attributes?.target_temp_low,l=void 0!==a?.attributes?.target_temp_high;void 0!==a?.attributes?.temperature&&o(n.temperatureContainer,"temperature",r),(s||l)&&(s&&(n.lowTempContainer=(0,utils.n)("div","bubble-low-temp-container"),o(n.lowTempContainer,"target_temp_low",r),n.targetTemperatureContainer.appendChild(n.lowTempContainer)),l&&(n.highTempContainer=(0,utils.n)("div","bubble-high-temp-container"),o(n.highTempContainer,"target_temp_high",r),n.targetTemperatureContainer.appendChild(n.highTempContainer))),e.cardType=t}function handleClimate(e){"climate"!==e.cardType&&climate_create_createStructure(e),changeStatus(e),changeName(e),changeIcon(e),changeState(e),changeTemperature(e),changeTargetTempLow(e),changeTargetTempHigh(e),(0,changes.Kr)(e),climate_changes_changeStyle(e)}function isReadOnlyEntity(e){const t=e._config.entity;if(!t)return!0;const n=t.split(".")[0];return"sensor"===n||!["light","media_player","cover","input_number","number","fan","climate"].includes(n)}function makeButtonSliderPanel(e){return void 0===e._disableEntityFilter&&(e._disableEntityFilter=!1),x`
        <ha-expansion-panel outlined style="display: ${"slider"!==e._config.button_type?"none":""}">
            <h4 slot="header">
            <ha-icon icon="mdi:tune-variant"></ha-icon>
            Slider settings
            </h4>
            <div class="content">
                <div class="checkbox-wrapper">
                    <ha-formfield label="Disable entity filter (for custom slider)">
                        <ha-switch
                            .checked=${e._disableEntityFilter}
                            @change="${t=>{e._disableEntityFilter=t.target.checked,e.requestUpdate()}}"
                        ></ha-switch>
                    </ha-formfield>
                </div>
                <div class="bubble-info" style="display: ${e._disableEntityFilter?"":"none"}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Custom slider
                    </h4>
                    <div class="content">
                        <p>To create a custom slider (read only), select an <b>entity with a numeric state</b> above, then define the <b>min</b> and <b>max</b> values below.</p>  
                        <p>For example, this allows you to display your solar production within a specific range.</p>
                    </div>
                </div>
                <ha-form
                    .hass=${e.hass}
                    .data=${e._config}
                    .schema=${[{type:"grid",flatten:!0,schema:[{name:"min_value",label:"Min value",selector:{number:{step:"any"}}},{name:"max_value",label:"Max value",selector:{number:{step:"any"}}},{name:"step",label:"Step",selector:{number:{step:"any"}}}]}]}   
                    .computeLabel=${e._computeLabelCallback}
                    .disabled="${"name"===e._config.button_type}"
                    @value-changed=${e._valueChanged}
                ></ha-form>
                <hr>
                <ha-formfield>
                    <ha-switch
                        .checked=${e._config.tap_to_slide}
                        .configValue="${"tap_to_slide"}"
                        @change="${e._valueChanged}"
                        .disabled=${isReadOnlyEntity(e)}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Tap to slide (previous behavior)</label> 
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${e._config.read_only_slider??isReadOnlyEntity(e)}
                        .configValue="${"read_only_slider"}"
                        .disabled=${isReadOnlyEntity(e)}
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
                        .disabled=${isReadOnlyEntity(e)}
                        @change="${e._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Slider live update</label> 
                    </div>
                </ha-formfield>
                <div class="bubble-info" style="display: ${e._config.slider_live_update?"":"none"}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Slider live update
                    </h4>
                    <div class="content">
                        <p>By default, sliders are updated only on release. When this option is enabled, the slider will update the entity state while sliding. <b>This feature is not recommended for all entities, disable it if you encounter issues.</b></p>
                    </div>
                </div>
                ${e._config.entity?.startsWith("light")?x`
                    <ha-formfield>
                        <ha-switch
                            .checked=${e._config.use_accent_color??!1}
                            .configValue="${"use_accent_color"}"
                            @change="${e._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Use accent color instead of light color</label> 
                        </div>
                    </ha-formfield>
                    ${e._config.tap_to_slide?"":x`
                        <ha-formfield>
                            <ha-switch
                                .checked=${e._config.allow_light_slider_to_0??!1}
                                .configValue="${"allow_light_slider_to_0"}"
                                @change=${e._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Allow slider to turn off light (reach 0%)</label> 
                            </div>
                        </ha-formfield>
                    `}
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
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                Light transition
                            </h4>
                            <div class="content">
                                <p><b>Important:</b> This feature only works for lights that support the 
                                <a target="_blank" rel="noopener noreferrer" href="https://www.home-assistant.io/integrations/light/#action-lightturn_on">light.turn_on</a> transition attribute.</p>
                                <p>Enabling this for lights that do not support transitions will unfortunatley have no effect. Defaults to 500ms unless overridden below.</p>
                            </div>
                        </div>
                        
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
    `}function getButtonList(){return[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}]}function renderButtonEditor(e){let t={};"slider"!==e._config.button_type||e._disableEntityFilter||(t={filter:[{domain:["light","media_player","cover","input_number","number","climate","fan"]},{domain:"sensor",device_class:"battery"}]});const n="pop-up"===e._config.card_type;let o=e._config.button_action||"";e._config.button_type||(e._config.button_type=n?"name":"switch");let a=e._config.button_type;return x`
        <div class="card-config">
            ${n?"":e.makeDropdown("Card type","card_type",e.cardTypeList)}
            ${e.makeDropdown("Button type","button_type",getButtonList())}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"slider"!==a?"Entity (toggle)":"Entity (See text below for supported entities)",selector:{entity:t}}]}   
                .computeLabel=${e._computeLabelCallback}
                .disabled="${"name"===e._config.button_type}"
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:cog"></ha-icon>
                ${n?"Header card settings":"Card settings"}
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
            ${makeButtonSliderPanel(e)}
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
                    <!-- 
                      Default button action mapping to match create.js defaults:
                      - name: tap="none", double="none", hold="none"
                      - state: tap="more-info", double="none", hold="more-info" 
                      - slider: tap="more-info"(sensor)/"toggle"(others), double="none", hold="none"
                      - switch: tap="toggle", double="none", hold="more-info"
                    -->
                    ${e.makeActionPanel("Tap action",o,"name"===e._config.button_type?"none":"state"===e._config.button_type||"slider"===e._config.button_type&&(0,utils.md)(e,"sensor",e._config.entity)?"more-info":"toggle","button_action")}
                    ${e.makeActionPanel("Double tap action",o,"none","button_action")}
                    ${e.makeActionPanel("Hold action",o,"name"===e._config.button_type||"slider"===e._config.button_type?"none":"more-info","button_action")}
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
                    ${n?"":e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${n?"":e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Button card ${n?"(as pop-up header)":""}
                </h4>
                <div class="content">
                    <p>This card is very versatile. It can be used as a <b>switch</b>, a <b>slider</b>, a <b>state</b> or a <b>name/text</b> button. Select the type of button you want to get more information about it.</p>
                    
                    ${"switch"!==e._config.button_type&&e._config.button_type?"":x`
                        <p><strong>Switch button:</strong> This is the default button type. By default, it toggles an entity and its background color changes based on the entity's state or the color of a light. You can change its action in the <b>Tap action on card</b> section.</p>
                    `}
                    
                    ${"slider"===e._config.button_type?x`
                        <p><strong>Slider button:</strong> This button type lets you control entities with adjustable ranges. It's ideal for dimming lights, and its fill color will adapt to the light's color. You can also use it to display values, such as a battery level.</p>
                        <p>Supported entities for sliders:</p>
                        <ul class="icon-list">
                            <li><ha-icon icon="mdi:lightbulb-outline"></ha-icon>Light (brightness)</li>
                            <li><ha-icon icon="mdi:speaker"></ha-icon>Media player (volume)</li>
                            <li><ha-icon icon="mdi:window-shutter"></ha-icon>Cover (position)</li>
                            <li><ha-icon icon="mdi:fan"></ha-icon>Fan (percentage)</li>
                            <li><ha-icon icon="mdi:thermometer"></ha-icon>Climate (temperature)</li>
                            <li><ha-icon icon="mdi:numeric"></ha-icon>Input number and number (value)</li>
                            <li><ha-icon icon="mdi:battery-50"></ha-icon>Battery sensor (percentage, read only)</li>
                        </ul>
                        <p>You can also use any entity with a <b>numeric state</b> by disabling the entity filter in <b>Slider settings</b>, then define the <b>min</b> and <b>max</b> values. This option is read only.</p>
                    `:""}
                    
                    ${"state"===e._config.button_type?x`
                        <p><strong>State button:</strong> Perfect for displaying information from a sensor or any entity. When you press it, it will show the "More info" panel of the entity. Its background color does not change.</p>
                    `:""}
                    
                    ${"name"===e._config.button_type?x`
                        <p><strong>Name/Text button:</strong> The only button type that doesn't need an entity. It allows you to display a short text, a name or a title. You can also add actions to it. Its background color does not change.</p>
                    `:""}
                </div>
            </div>
            ${n?"":e.makeVersion()}
        </div>
    `}function editor_getButtonList(){return[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}]}function findSuitableEntities(e,t="light",n=2){const o=[];return e&&e.states?(Object.keys(e.states).forEach(a=>{if(!(o.length>=n)&&a.startsWith(t+".")){let t=!1;"brightness"in e.states[a].attributes&&(t=!0),o.push({entity:a,supportsBrightness:t})}}),o):o}function updateUIForVerticalStack(e,t){if(!e.shadowRoot)return;const n=e.shadowRoot.querySelector("#vertical-stack-alert-container");n&&(n.style.display=t?"block":"none");const o=e.shadowRoot.querySelector(".icon-button ha-icon");o&&(o.icon=t?"mdi:content-save":"mdi:plus");const a=e.shadowRoot.querySelector("#button-text");a&&(a.textContent=t?"Update Hash":"Create Pop-up");const i=e.shadowRoot.querySelector("#include-example");i&&(i.disabled=t);const r=e.shadowRoot.querySelector(".mdc-form-field .mdc-label");r&&(r.textContent="Include example configuration"+(t?" (disabled because pop-up is already in a vertical stack)":""))}function createPopUpConfig(e,t){try{const t=!window.popUpError,n=e.shadowRoot.querySelector("#include-example")?.checked||!1;let o="#pop-up-name";const a=e.shadowRoot.querySelector("#hash-input");if(a&&a.value&&(o=a.value),t)return e._config.hash=o,(0,utils.rC)(e,"config-changed",{config:e._config}),void console.info("Pop-up already in a vertical stack. Hash updated. Note that manually creating a vertical stack is no longer required.");if(n){const t=findSuitableEntities(e.hass);e._config={type:"vertical-stack",cards:[{type:"custom:bubble-card",card_type:"pop-up",name:"Living room",icon:"mdi:sofa-outline",hash:o},{type:"custom:bubble-card",card_type:"separator",name:"Lights (example)",icon:"mdi:lightbulb-outline"},{type:"horizontal-stack",cards:t.length>0?t.map(e=>({type:"custom:bubble-card",card_type:"button",button_type:e.supportsBrightness?"slider":"switch",entity:e.entity,show_state:!0})):[{type:"custom:bubble-card",card_type:"button",button_type:"name",name:"Floor lamp",icon:"mdi:floor-lamp-outline"}]}]}}else e._config={type:"vertical-stack",cards:[{type:"custom:bubble-card",card_type:"pop-up",hash:o}]};(0,utils.rC)(e,"config-changed",{config:e._config})}catch(n){console.error("Error creating pop-up:",n),e._config=t,e._config.hash=e.shadowRoot.querySelector("#hash-input")?.value||"#pop-up-name",(0,utils.rC)(e,"config-changed",{config:e._config})}}function renderPopUpEditor(e){const t=e._config?.trigger??[];if(e._config.button_action,2===Object.keys(e._config).length&&"pop-up"===e._config.card_type){const t={...e._config};let n=!1;return setTimeout(()=>{n=!window.popUpError,updateUIForVerticalStack(e,n)},0),e.createPopUpConfig=()=>createPopUpConfig(e,t),x`
            <div class="card-config">
                ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
                <div id="vertical-stack-alert-container" style="display: none;">
                    <div class="bubble-info warning">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:alert-outline"></ha-icon>
                            Old configuration detected
                        </h4>
                        <div class="content">
                            <p>This pop-up is already inside a vertical stack (old method). This is no longer required, but it will work fine. You can simply update the hash below.</p>
                        </div>
                    </div>
                </div>
                <ha-textfield
                    label="Hash (e.g. #kitchen)"
                    .value="${e._config?.hash||"#pop-up-name"}"
                    id="hash-input"
                ></ha-textfield>
                <ha-formfield .label="Include example configuration">
                    <ha-switch
                        aria-label="Include example configuration"
                        .checked=${!1}
                        id="include-example"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Include example configuration</label>
                    </div>
                </ha-formfield>
                
                <button class="icon-button" @click="${()=>e.createPopUpConfig()}">
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span id="button-text">Create pop-up</span>
                </button>

                <hr />

                <div class="bubble-info">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Pop-up
                    </h4>
                    <div class="content">
                        <p>Pop-ups are a great way to declutter your dashboard and quickly display more information when you need it.</p>
                        <p>If it's your first time creating a pop-up, you can use the example configuration to get started.</p>
                    </div>
                </div>
                
                ${e.makeVersion()}
            </div>
        `}return x`
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
                    <ha-formfield .label="Show header">
                        <ha-switch
                            aria-label="Show header"
                            .checked=${e._config.show_header??!0}
                            .configValue="${"show_header"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Show header</label> 
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Hidden header
                        </h4>
                        <div class="content">
                            <p>You can completely hide the pop-up header, including the close button. To close it when hidden, either make a long swipe within the pop-up or click outside of it.</p>
                        </div>
                    </div>
                    <div style="${e._config?.show_header??1?"":"display: none;"}">
                        <hr />
                        ${renderButtonEditor(e)}
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
                        label="Auto close in milliseconds (e.g. 15000)"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="1000"
                        .value="${e._config?.auto_close||""}"
                        .configValue="${"auto_close"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Slide to close distance (default to 400)"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="10"
                        .value="${e._config.slide_to_close_distance??400}"
                        .configValue="${"slide_to_close_distance"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-formfield .label="Close the pop-up by clicking outside of it (a refresh is needed)">
                        <ha-switch
                            aria-label="Close the pop-up by clicking outside of it (a refresh is needed)"
                            .checked=${e._config?.close_by_clicking_outside??!0}
                            .configValue="${"close_by_clicking_outside"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close the pop-up by clicking outside of it (a refresh is needed)</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Close the pop-up after any click or tap">
                        <ha-switch
                            aria-label="Close the pop-up after any click or tap"
                            .checked=${e._config?.close_on_click||!1}
                            .configValue="${"close_on_click"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close the pop-up after any click or tap</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Update cards in background (not recommended)">
                        <ha-switch
                            aria-label="Update cards in background (not recommended)"
                            .checked=${e._config?.background_update||!1}
                            .configValue="${"background_update"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Update cards in background (not recommended)</label> 
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Background updates
                        </h4>
                        <div class="content">
                            <p>Background updates are only recommended if you encounter issues with certain cards within your pop-up.</p>
                        </div>
                    </div>
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
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            About conditions
                        </h4>
                        <div class="content">
                            <p>The pop-up will be opened when ALL conditions are fulfilled. For example you can open a "Security" pop-up with a camera when a person is in front of your house.</p>
                            <p>You can also create a toggle helper (<code>input_boolean</code>) and trigger its opening/closing in an automation.</p>
                        </div>
                    </div>
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
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            About actions
                        </h4>
                        <div class="content">
                            <p>This allows you to trigger an action on pop-up open/close.</p>
                        </div>
                    </div>
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
                                label="Margin (fix centering on some themes) (e.g. 13px)"
                                .value="${e._config?.margin||"7px"}"
                                .configValue="${"margin"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Top margin on mobile (e.g. -56px if your header is hidden)"
                                .value="${e._config?.margin_top_mobile||"0px"}"
                                .configValue="${"margin_top_mobile"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Top margin on desktop (e.g. 50vh for an half sized pop-up)"
                                .value="${e._config?.margin_top_desktop||"0px"}"
                                .configValue="${"margin_top_desktop"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Width on desktop (100% by default on mobile)"
                                .value="${e._config?.width_desktop||"540px"}"
                                .configValue="${"width_desktop"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background color (any var, hex, rgb or rgba value)"
                                .value="${e._config?.bg_color||""}"
                                .configValue="${"bg_color"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.bg_opacity?e._config?.bg_opacity:"88"}"
                                .configValue="${"bg_opacity"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.bg_blur?e._config?.bg_blur:"10"}"
                                .configValue="${"bg_blur"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Backdrop blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.backdrop_blur?e._config?.backdrop_blur:"0"}"
                                .configValue="${"backdrop_blur"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Shadow opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .configValue="${"shadow_opacity"}"
                                .value="${void 0!==e._config?.shadow_opacity?e._config?.shadow_opacity:"0"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-formfield .label="Hide pop-up backdrop (a refresh is needed)">
                                <ha-switch
                                    aria-label="Hide pop-up backdrop (a refresh is needed)"
                                    .checked=${e._config.hide_backdrop??!1}
                                    .configValue="${"hide_backdrop"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Hide pop-up backdrop (a refresh is needed)</label> 
                                </div>
                            </ha-formfield>
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:information-outline"></ha-icon>
                                    Hide pop-up backdrop
                                </h4>
                                <div class="content">
                                    <p>This will hide the pop-up backdrop, which is a dark overlay that appears behind the pop-up.</p>
                                    <p>You can enable this setting for all your pop-ups at once by turning it on in the first pop-up on your dashboard.</p>
                                    <p><b>Hiding it is recommended if you encounter performance issues when opening/closing pop-ups.</b></p>
                                </div>
                            </div>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info-container">
                <div class="bubble-info">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        How to use pop-ups
                    </h4>
                    <div class="content">
                        <p>Each pop-up is <b>hidden by default</b> and <b>can be opened by targeting its hash</b> (e.g., '#pop-up-name'), with <a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">any card</a> that supports the <code>navigate</code> <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">action</a>.</p>
                        <p><b>You can also watch this <a href="https://www.youtube.com/watch?v=7mOV7BfWoFc" target="_blank" rel="noopener noreferrer">video</a> that explains how to create your first pop-up</b> (this video is outdated, you don't need to add a vertical stack anymore).</p>
                    </div>
                </div>
                
                <div class="bubble-info warning">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:alert-outline"></ha-icon>
                        Important
                    </h4>
                    <div class="content">
                        <p>To avoid misalignment with your view, place this card after all other dashboard cards. You can't trigger it from a different view.</p>
                        <p>If the content of your pop-up appears on the screen during page loading, <a href="https://github.com/Clooos/Bubble-Card#pop-up-initialization-fix" target="_blank" rel="noopener noreferrer">you can install this fix</a> (recommended).</p>
                    </div>
                </div>
            </div>
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
        <div class="bubble-info">
            <h4 class="bubble-section-title">
                <ha-icon icon="mdi:information-outline"></ha-icon>
                Separator card
            </h4>
            <div class="content">
                <p>This card is a simple separator for dividing your pop-up/dashboard into categories or sections. e.g. Lights, Devices, Covers, Settings, Automations...</p>
            </div>
        </div>
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
            <hr>
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
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Horizontal buttons stack card
                </h4>
                <div class="content">
                    <p>This card is a good companion to the pop-up card, allowing you to open pop-ups or any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.</p>
                </div>
            </div>
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
                    ${e.makeActionPanel("Tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Hold action",t,"none","button_action")}
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
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Cover card
                </h4>
                <div class="content">
                    <p>This card allows you to control your covers.</p>
                </div>
            </div>
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
                    ${e.makeActionPanel("Tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Hold action",t,"none","button_action")}
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
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Climate card
                </h4>
                <div class="content">
                    <p>This card allows you to control your climate entities. You can also add a sub-button that display a dropdown menu for your climate modes (check if you have "Select menu" available when you create a new sub-button).</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}function renderSelectEditor(e){const t=e._config.entity,n=(t?.startsWith("input_select")||t?.startsWith("select")||e._config.select_attribute,e.hass.states[t]?.attributes),o=e._selectable_attributes.some(e=>n?.[e]),a=Object.keys(e.hass.states[t]?.attributes||{}).map(n=>{let o=e.hass.states[t];return{label:e.hass.formatEntityAttributeName(o,n),value:n}}).filter(t=>e._selectable_attributes.includes(t.value));return x`
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
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Select card
                </h4>
                <div class="content">
                    <p>This card allows you to have a select menu for your entities with selectable options:</p>
                    <ul class="icon-list">
                        <li><ha-icon icon="mdi:format-list-bulleted"></ha-icon>Input Select entities</li>
                        <li><ha-icon icon="mdi:form-dropdown"></ha-icon>Select entities</li>
                        <li><ha-icon icon="mdi:playlist-music"></ha-icon>Media players with&nbsp;<b>source list</b></li>
                        <li><ha-icon icon="mdi:speaker"></ha-icon>Media players with&nbsp;<b>sound mode list</b></li>
                        <li><ha-icon icon="mdi:thermostat"></ha-icon>Climate entities with&nbsp;<b>hvac modes</b></li>
                        <li><ha-icon icon="mdi:fan"></ha-icon>Climate/Fan entities with&nbsp;<b>fan modes</b></li>
                        <li><ha-icon icon="mdi:air-conditioner"></ha-icon>Climate entities with&nbsp;<b>swing modes</b></li>
                        <li><ha-icon icon="mdi:thermostat-auto"></ha-icon>Climate entities with&nbsp;<b>preset modes</b></li>
                        <li><ha-icon icon="mdi:lightbulb-group"></ha-icon>Light entities with&nbsp;<b>effect list</b></li>
                    </ul>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}const computeLabel=e=>e.title||e.label;class HaCalendarEntitySelector extends lit_element_i{getSchema(e){const t=setupTranslation(this.hass);return[{type:"expandable",name:"",title:e?this.hass.states[e].attributes.friendly_name||e:t("editor.calendar.new_calendar"),schema:[{name:"entity",title:t("editor.calendar.entity"),selector:{entity:{domain:["calendar"]}}},{name:"color",title:t("editor.calendar.color"),selector:{ui_color:{}}}]}]}static properties={hass:{},value:{type:Array},label:{}};constructor(){super(),this.value=[]}render(){const e=setupTranslation(this.hass),t=e=>()=>{const t=[...this.value||[]];t.splice(e,1),this.valueChanged({detail:{value:t}})},n=this.value??[];return x`
      <ha-expansion-panel outlined style="--expansion-panel-summary-padding: 0 8px;">
        <h4 slot="header" style="display: flex; align-items: center; margin: 10px 0;">
          <ha-icon icon="mdi:calendar" style="margin: 8px;"></ha-icon>
          &nbsp;${e("editor.calendar.list_of_calendars")}
        </h4>
        <div class="content"> 
          ${n.map((n,o)=>x`
              <div style="display: flex; align-items: center; margin: 12px 4px 14px 4px">
                <ha-form
                  .data=${n}
                  .schema=${this.getSchema(n.entity)}
                  .hass=${this.hass}
                  .computeLabel=${computeLabel}
                  @value-changed=${e=>{e.stopPropagation();const t=[...this.value||[]];t[o]=e.detail.value,this.valueChanged({detail:{value:t}})}}
                  style="flex-grow: 1;"
                ></ha-form>
                <ha-button @click=${t(o)}>
                  <ha-icon icon="mdi:calendar-remove"></ha-icon>&nbsp;
                  ${e("editor.calendar.remove_calendar")}
                </ha-button>
              </div>
            `)}
          <ha-button @click=${()=>{const e=[...this.value||[]];e.push({entity:"",color:""}),this.valueChanged({detail:{value:e}})}} style="margin: 12px 4px 14px 4px;">
            <ha-icon icon="mdi:calendar-plus"></ha-icon>&nbsp;
            ${e("editor.calendar.new_calendar")}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}valueChanged(e){const t=e.detail.value.map(e=>{const t=e.entity?intToRGB(hashCode(e.entity)):"";return{entity:e.entity,color:e.color||t}});(0,utils.rC)(this,"value-changed",{value:t},void 0)}}function renderCalendarEditor(e){const t=setupTranslation(e.hass);return e._config.event_action||(e._config.event_action={tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}}),x`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entities",title:t("editor.calendar.entities"),selector:{calendar_entity:{}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t("editor.calendar.settings")}
                </h4>
                <div class="content">
                    <ha-form
                      .hass=${e.hass}
                      .data=${e._config}
                      .schema=${[{name:"limit",label:t("editor.calendar.limit"),title:t("editor.calendar.limit"),selector:{number:{step:1,min:1}}},{name:"show_end",label:t("editor.calendar.show_end"),title:t("editor.calendar.show_end"),selector:{boolean:{}}},{name:"show_progress",label:t("editor.calendar.show_progress"),title:t("editor.calendar.show_progress"),selector:{boolean:{}}},{name:"show_place",label:t("editor.calendar.show_place"),title:t("editor.calendar.show_place"),selector:{boolean:{}}},{name:"scrolling_effect",label:t("editor.calendar.text_scrolling"),title:t("editor.calendar.text_scrolling"),selector:{boolean:{}},default:!0}]}   
                      .computeLabel=${e._computeLabelCallback}
                      @value-changed=${e._valueChanged}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on day
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",e._config,"none")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                  Tap action on event
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",e._config.event_action,"none","event_action")}
                    ${e.makeActionPanel("Double tap action",e._config.event_action,"none","event_action")}
                    ${e.makeActionPanel("Hold action",e._config.event_action,"none","event_action")}
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
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Calendar card
                </h4>
                <div class="content">
                    <p>This card allows you to display a calendar and is scrollable, so you can view additional events.</p>
                </div>
            </div>
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
                    ${e.makeActionPanel("Tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Hold action",t,"none","button_action")}
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
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Media player card
                </h4>
                <div class="content">
                    <p>This card allows you to control a media player entity.</p>
                </div>
            </div>
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
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Empty column card
                </h4>
                <div class="content">
                    <p>Just an empty card to fill any empty column.</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}function getLazyLoadedPanelContent(e,t,n,o){if(void 0===e._lazyContentLoadedFlags&&(e._lazyContentLoadedFlags={}),n&&!e._lazyContentLoadedFlags[t]&&(e._lazyContentLoadedFlags[t]=!0),e._lazyContentLoadedFlags[t])return o()}function makeSubButtonPanel(e){void 0===e._expandedPanelStates&&(e._expandedPanelStates={});const t=e._config?.sub_button?.map((t,n)=>{if(!t)return;const o="sub_button."+n+".",a=t.entity??e._config.entity,i=a?.startsWith("input_select")||a?.startsWith("select")||t.select_attribute,r=e.hass.states[a]?.attributes,s=e._selectable_attributes.some(e=>r?.[e]),l=Object.keys(e.hass.states[a]?.attributes||{}).map(t=>{let n=e.hass.states[a];return{label:e.hass.formatEntityAttributeName(n,t),value:t}}).filter(t=>e._selectable_attributes.includes(t.value)),c=t.visibility??[],d=`sub_button_main_${n}`,u=`sub_button_settings_${n}`,p=`sub_button_actions_${n}`,h=`sub_button_visibility_${n}`;return x`
            <ha-expansion-panel 
                outlined
                @expanded-changed=${t=>{e._expandedPanelStates[d]=t.target.expanded,e.requestUpdate()}}
            >
                <h4 slot="header">
                    <ha-icon icon="mdi:border-radius"></ha-icon>
                    ${e._config.sub_button[n]?"Button "+(n+1)+(t.name?" - "+t.name:""):"New button"}
                    <div class="button-container">
                        <button class="icon-button header" @click="${t=>{t.stopPropagation();let o=[...e._config.sub_button];o.splice(n,1),e._config.sub_button=o,e._valueChanged({target:{configValue:"sub_button",value:o}}),e.requestUpdate()}}">
                            <ha-icon icon="mdi:delete"></ha-icon>
                        </button>
                        ${n>0?x`<button class="icon-button header" @click="${t=>{if(t.stopPropagation(),n>0){let t=[...e._config.sub_button];[t[n],t[n-1]]=[t[n-1],t[n]],e._config.sub_button=t,e._valueChanged({target:{configValue:"sub_button",value:t}})}e.requestUpdate()}}">
                            <ha-icon icon="mdi:arrow-left"></ha-icon>
                        </button>`:""}
                        ${n<e._config.sub_button.length-1?x`<button class="icon-button header" @click="${t=>{if(t.stopPropagation(),n<e._config.sub_button.length-1){let t=[...e._config.sub_button];[t[n],t[n+1]]=[t[n+1],t[n]],e._config.sub_button=t,e._valueChanged({target:{configValue:"sub_button",value:t}})}e.requestUpdate()}}">
                            <ha-icon icon="mdi:arrow-right"></ha-icon>
                        </button>`:""}
                    </div>
                </h4>
                <div class="content">
                    ${getLazyLoadedPanelContent(e,d,!!e._expandedPanelStates[d],()=>x`
                        <ha-expansion-panel 
                            outlined
                            @expanded-changed=${t=>{e._expandedPanelStates[u]=t.target.expanded,e.requestUpdate()}}
                        >
                            <h4 slot="header">
                                <ha-icon icon="mdi:cog"></ha-icon>
                                Button settings
                            </h4>
                            <div class="content">
                                ${getLazyLoadedPanelContent(e,u,!!e._expandedPanelStates[u],()=>x` 
                                    <ha-form
                                        .hass=${e.hass}
                                        .data=${t}
                                        .schema=${[{name:"entity",label:"Optional - Entity (default to card entity)",selector:{entity:{}}}]}   
                                        .computeLabel=${e._computeLabelCallback}
                                        @value-changed=${t=>e._arrayValueChange(n,t.detail.value,"sub_button")}
                                    ></ha-form>
                                    ${s?x`
                                        <div class="ha-combo-box">
                                            <ha-combo-box
                                                label="Optional - Select menu (from attributes)"
                                                .value="${t.select_attribute}"
                                                .items="${l}"
                                                @value-changed="${t=>e._arrayValueChange(n,{select_attribute:t.detail.value},"sub_button")}"
                                            ></ha-combo-box>
                                        </div>
                                    `:""}
                                    <div class="ha-textfield">
                                        <ha-textfield
                                            label="Optional - Name"
                                            .value="${t.name??""}"
                                            @input="${t=>e._arrayValueChange(n,{name:t.target.value},"sub_button")}"
                                        ></ha-textfield>
                                    </div>
                                    <div class="ha-icon-picker">
                                        <ha-icon-picker
                                            label="Optional - Icon"
                                            .value="${t.icon}"
                                            item-label-path="label"
                                            item-value-path="value"
                                            @value-changed="${t=>e._arrayValueChange(n,{icon:t.detail.value},"sub_button")}"
                                        ></ha-icon-picker>
                                    </div>
                                `)}
                                ${e.makeShowState(t,o,"sub_button",n)}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel 
                            outlined 
                            style="${i?"opacity: 0.5; pointer-events: none;":""}"
                            @expanded-changed=${t=>{e._expandedPanelStates[p]=t.target.expanded,e.requestUpdate()}}
                        >
                            <h4 slot="header">
                                <ha-icon icon="mdi:gesture-tap"></ha-icon>
                                Tap action on button
                            </h4>
                            <div class="content">
                                ${getLazyLoadedPanelContent(e,p,!!e._expandedPanelStates[p],()=>x`
                                    ${e.makeActionPanel("Tap action",t,"more-info","sub_button",n)}
                                    ${e.makeActionPanel("Double tap action",t,"none","sub_button",n)}
                                    ${e.makeActionPanel("Hold action",t,"none","sub_button",n)}
                                `)}
                            </div>
                        </ha-expansion-panel>
                        <ha-expansion-panel 
                            outlined
                            @expanded-changed=${t=>{e._expandedPanelStates[h]=t.target.expanded,e.requestUpdate()}}
                        >
                            <h4 slot="header">
                                <ha-icon icon="mdi:eye"></ha-icon>
                            Visibility
                            </h4>
                            <div class="content">
                                ${getLazyLoadedPanelContent(e,h,!!e._expandedPanelStates[h],()=>x`
                                    <ha-formfield label="Hide when parent entity is unavailable">
                                        <ha-switch
                                            .checked=${t.hide_when_parent_unavailable??!1}
                                            @change=${t=>e._arrayValueChange(n,{hide_when_parent_unavailable:t.target.checked},"sub_button")}
                                        ></ha-switch>
                                    </ha-formfield>
                                    <ha-card-conditions-editor
                                        .hass=${e.hass}
                                        .conditions=${c}
                                        @value-changed=${t=>e._conditionChanged(t,n,"sub_button")}
                                    >
                                    </ha-card-conditions-editor>
                                    <ha-alert alert-type="info">
                                        The sub-button will be shown when ALL conditions are fulfilled. If no conditions are set, the sub-button will always be shown.
                                    </ha-alert>
                                `)}
                            </div>
                        </ha-expansion-panel>
                    `)}
                </div>
            </ha-expansion-panel>
        `});return x`
        <ha-expansion-panel outlined>
            <h4 slot="header">
            <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
            Sub-buttons editor
            </h4>
            <div class="content">
            ${t}
            <button class="icon-button" @click="${()=>{e._config.sub_button||(e._config.sub_button=[]);let t={entity:e._config.entity};e._config.sub_button=[...e._config.sub_button],e._config.sub_button.push(t),e.requestUpdate()}}">
                <ha-icon icon="mdi:plus"></ha-icon>
                New sub-button
            </button>
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Sub-buttons
                </h4>
                <div class="content">
                    <p>This editor allows you to add customized sub-buttons to your card.</p>
                    <p>These buttons can also display dropdown menus if combined with selectable entities like:</p>
                    <ul class="icon-list">
                        <li><ha-icon icon="mdi:format-list-bulleted"></ha-icon>Input Select entities</li>
                        <li><ha-icon icon="mdi:form-dropdown"></ha-icon>Select entities</li>
                        <li><ha-icon icon="mdi:playlist-music"></ha-icon>Media players with&nbsp;<b>source list</b></li>
                        <li><ha-icon icon="mdi:speaker"></ha-icon>Media players with&nbsp;<b>sound mode list</b></li>
                        <li><ha-icon icon="mdi:thermostat"></ha-icon>Climate entities with&nbsp;<b>hvac modes</b></li>
                        <li><ha-icon icon="mdi:fan"></ha-icon>Climate/Fan entities with&nbsp;<b>fan modes</b></li>
                        <li><ha-icon icon="mdi:air-conditioner"></ha-icon>Climate entities with&nbsp;<b>swing modes</b></li>
                        <li><ha-icon icon="mdi:thermostat-auto"></ha-icon>Climate entities with&nbsp;<b>preset modes</b></li>
                        <li><ha-icon icon="mdi:lightbulb-group"></ha-icon>Light entities with&nbsp;<b>effect list</b></li>
                    </ul>
                </div>
            </div>
            </div>
        </ha-expansion-panel>
    `}customElements.define("ha-selector-calendar_entity",HaCalendarEntitySelector);var modules_utils=__webpack_require__(395),parser=__webpack_require__(571),cache=__webpack_require__(404),js_yaml=__webpack_require__(382);async function installOrUpdateModule(e,t){try{let n="";if(t.yamlContent&&""!==t.yamlContent.trim()?n=t.yamlContent:t.description&&""!==t.description.trim()&&(n=t.description),!n)throw new Error("No YAML content found for this module");const o=(0,parser.oV)(n)||t.id,a=(0,parser.tF)(n,o,{title:t.name,defaultCreator:t.creator});let i=n;try{const e=js_yaml.Ay.load(n);if(e&&"object"==typeof e){const a=Object.keys(e);if(1===a.length){const n=a[0],r=e[n];if(r&&"object"==typeof r)if(r[o]){t.moduleLink&&"object"==typeof r[o]&&(r[o].link=t.moduleLink);const e={};e[o]=r[o],i=js_yaml.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})}else if(n===o&&Object.keys(r).some(e=>"object"==typeof r[e]&&r[e].name&&r[e].code)){const e={};Object.entries(r).forEach(([t,n])=>{"object"==typeof n&&"unsupported"!==t&&"editor"!==t&&n.name||(e[t]=n)}),t.moduleLink&&(e.link=t.moduleLink),e.code&&"string"==typeof e.code&&(e.code=e.code.replace(/\n/g,"\n      "));const n={};n[o]=e,i=js_yaml.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}else if(n===o)t.moduleLink&&!e[o].link&&(e[o].link=t.moduleLink),i=js_yaml.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1});else{t.moduleLink&&(r.link=t.moduleLink);const e={};e[o]=r,i=js_yaml.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}}else{t.moduleLink&&(e.link=t.moduleLink);const n={};n[o]=e,i=js_yaml.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}i=i.replace(/code: \|/g,"code: |").replace(/description: \|/g,"description: |").replace(/(\|\n)(\s+)/g,(e,t,n)=>t+"      ");try{const e=js_yaml.Ay.load(i);e&&e[o]||console.warn("Warning: YAML formatting may have issues")}catch(e){console.warn("Error validating formatted YAML:",e),i=n}}}catch(e){console.warn("Error processing YAML structure:",e)}const r={id:o,yaml:i};try{const e=JSON.parse(localStorage.getItem("bubble-card-modules")||"{}");e[o]=r,localStorage.setItem("bubble-card-modules",JSON.stringify(e))}catch(e){console.warn("localStorage storage error:",e)}style_processor.Ki.set(o,a),document.dispatchEvent(new CustomEvent("yaml-modules-updated"));try{const n=e.hass.auth.data.access_token;if(!n)throw new Error("Authentication token not available");const s=window.location.origin,l="sensor.bubble_card_modules";if(!(e.hass&&e.hass.states&&e.hass.states[l]))return(0,cache.q)(e,"Persistent storage not configured - module saved locally only","warning"),{success:!0,storage:"local_only",reason:"missing_entity",message:"The persistent storage entity is not configured. Please check the setup instructions in the Module tab."};let c={};try{const e=await fetch(`${s}/api/states/${l}`,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"}});if(e.ok){const t=await e.json();if(t.attributes&&t.attributes.modules)c=t.attributes.modules;else if(t.attributes&&t.attributes.module_data){const e=t.attributes.module_data;e&&e.id&&(c[e.id]=e)}}}catch(e){console.warn("Unable to load existing modules:",e)}c[o]=r;try{const e=js_yaml.Ay.load(i);if(e&&e[o]){const n=e[o];c[o]={id:o,...n,name:a.name||n.name,version:a.version||n.version,description:a.description||n.description,creator:a.creator||n.creator||a.author,link:t.moduleLink||a.link||n.link},"default"===o&&(c[o].is_global=!0)}else c[o]={id:o,...a},"default"===o&&(c[o].is_global=!0)}catch(e){console.warn("Error parsing module YAML for storage:",e),c[o]={id:o,name:a.name,version:a.version,description:a.description,creator:a.creator},"default"===o&&(c[o].is_global=!0)}try{await fetch(`${s}/api/events/bubble_card_update_modules`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({modules:c,last_updated:(new Date).toISOString()})})}catch(e){console.warn("Unable to send event, trying to update state directly:",e);const t=await fetch(`${s}/api/states/${l}`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({state:"saved",attributes:{friendly_name:"Bubble Card Modules",modules:c,last_updated:(new Date).toISOString()}})});if(!t.ok)throw new Error(`Update error (${t.status}): ${t.statusText}`)}return(0,cache.q)(e,"Module installed successfully"),(0,utils.rC)(e,"config-changed",{config:e._config}),e.requestUpdate(),{success:!0}}catch(t){return console.error("REST API not available or error:",t),(0,cache.q)(e,"Module saved locally only","warning"),{success:!0,storage:"local_only"}}}catch(t){throw console.error("Installation error:",t),(0,cache.q)(e,"Installation error: "+t.message,"error"),t}}async function installManualModule(e,t,n){try{if(!t||""===t.trim())throw new Error("No YAML content provided");if(n)try{const{extractYamlFromMarkdown:e}=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,571)),o=e("```yaml\n"+t+"\n```",n);o&&o!==t&&(t=o)}catch(e){console.warn("Could not add link directly to YAML:",e)}const o={yamlContent:t,description:t,moduleLink:n};return await installOrUpdateModule(e,o)}catch(t){throw console.error("Manual module installation error:",t),(0,cache.q)(e,"Installation error: "+t.message,"error"),t}}function makeModuleStore(e){const t=e.hass&&e.hass.states&&e.hass.states["sensor.bubble_card_modules"];if(void 0===e._storeShowOnlyCompatible&&(e._storeShowOnlyCompatible=!0),void 0===e._rankingInfoDismissed)try{e._rankingInfoDismissed="true"===localStorage.getItem("bubble-card-ranking-info-dismissed")}catch(t){e._rankingInfoDismissed=!1}if(e._dismissRankingInfo=()=>{e._rankingInfoDismissed=!0;try{localStorage.setItem("bubble-card-ranking-info-dismissed","true")}catch(e){console.warn("Failed to save ranking info dismiss state to localStorage",e)}e.requestUpdate()},!t)return x`
      <div class="bubble-info warning">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          Configuration required
        </h4>
        <div class="content">
          <p>The storage entity <code>sensor.bubble_card_modules</code> is not configured in your Home Assistant instance.</p>
          <hr />
          <p><b>To use the Module store, follow these steps:</b></p>

          <p>1. Add the following to your <code>configuration.yaml</code> file:</p>
          <code-block><pre>
# Storage for Bubble Card Modules
template:
  - trigger:
      - platform: event
        event_type: bubble_card_update_modules
    sensor:
      - name: "Bubble Card Modules"
        state: "saved"
        icon: "mdi:puzzle"
        attributes:
          modules: "{{ trigger.event.data.modules }}"
          last_updated: "{{ trigger.event.data.last_updated }}"
          </pre></code-block>
          <p>2. Save the file and restart Home Assistant</p>
          <p>3. Enjoy the Module store!</p>
        </div>
      </div>
    `;if(!e._storeModules){const t=(0,cache.getCachedModuleData)();if(t){e._storeModules=t.modules,e._isLoadingStore=!1;const n=Date.now();t.expiration<n+36e5&&_fetchModuleStore(e,!0)}else e._isLoadingStore=!0,_fetchModuleStore(e)}if(e._isLoadingStore){const t=e._loadingProgress||0,n=e._loadingStatus||"Loading modules";return x`
      <div class="store-loading">
        <div class="bubble-loading-icon">
          <div class="icon-center-wrapper">
            <ha-icon icon="mdi:puzzle"></ha-icon>
          </div>
          <div class="bubble-loading-orbit">
            <div class="bubble-loading-satellite"></div>
          </div>
        </div>
        <div class="bubble-progress-container">
          <div class="bubble-progress-track">
            <div class="bubble-progress-bar" style="width: ${t}%">
              <div class="bubble-progress-glow"></div>
            </div>
          </div>
          <div class="bubble-progress-percentage">
            <span class="bubble-progress-text">${n}</span>
            <span class="bubble-progress-value">${Math.round(t)}%</span>
          </div>
        </div>
      </div>
    `}return e._storeError?x`
      <div class="bubble-info error">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          Loading error
        </h4>
        <div class="content">
          <p>Could not load modules from GitHub: ${e._storeError}</p>
          <mwc-button @click=${()=>_fetchModuleStore(e)}>
            <ha-icon icon="mdi:refresh" style="margin-right: 8px;"></ha-icon>
            Retry
          </mwc-button>
        </div>
      </div>
    `:([...new Set(e._storeModules.filter(e=>e.type).map(e=>e.type.toLowerCase()))].sort(),void 0===e._zoomedImage&&(e._zoomedImage=null),e._toggleImageZoom=t=>{e._zoomedImage===t?e._zoomedImage=null:e._zoomedImage=t,e.requestUpdate()},x`
    <div class="module-store">
      <div class="store-header">
        <div class="store-header-top">
          <div class="store-header-title">
            <ha-icon icon="mdi:puzzle-plus-outline"></ha-icon>
            <span>Module Store</span>
          </div>
          <div 
            class="store-refresh-button" 
            @click=${()=>{e._isApiCallInProgress=!1,_fetchModuleStore(e,!1)}}
            title="Refresh module list"
          >
            <ha-icon icon="mdi:refresh"></ha-icon>
          </div>
        </div>
        <div class="store-search">
          <ha-textfield
            label="Search for a module"
            icon
            .value=${e._storeSearchQuery||""}
            @input=${t=>{e._storeSearchQuery=t.target.value,e.requestUpdate()}}
          >
            <slot name="prefix" slot="leadingIcon">
              <ha-icon slot="prefix" icon="mdi:magnify"></ha-icon>
            </slot>
          </ha-textfield>
        </div>
        <div class="store-filters">

          <ha-formfield label="Show only modules compatible with this card">
            <ha-switch
              .checked=${e._storeShowOnlyCompatible??!0}
              @change=${t=>{e._storeShowOnlyCompatible=t.target.checked,e.requestUpdate()}}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>

      ${e._rankingInfoDismissed?"":x`
        <div class="bubble-info info">
          <div class="bubble-info-header">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:information-outline"></ha-icon>
              How modules are ranked
              <div class="bubble-info-dismiss bubble-badge" @click=${e._dismissRankingInfo} title="Dismiss" 
                style="
                  display: inline-flex;
                  align-items: center;
                  position: absolute;
                  right: 16px;
                  padding: 0 8px;
                  cursor: pointer;"
              >
                <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
                Dismiss
              </div>
            </h4>
          </div>
          <div class="content">
            <p>Due to a limitation in GitHub's API, only top-level reactions like ❤️ 👍 🚀 on the main discussion post are counted for popularity, along with other factors like recent activity, number of comments, updates...</p>
            <p><b>Click the "More info" button and show some love there if you find a module useful!</b></p>
          </div>
        </div>
      `}

      <div class="store-modules">
        ${_getFilteredStoreModules(e).map(t=>{const n=_isModuleInstalled(t.id),o=_isModuleInstalledViaYaml(t.id),a=_hasModuleUpdate(t.id,t.version),i=e._config.card_type??"";let r=!0;return r=t.supportedCards&&Array.isArray(t.supportedCards)&&t.supportedCards.length>0?t.supportedCards.includes(i):!t.unsupportedCards||!t.unsupportedCards.includes(i),x`
            <div class="store-module-card">
              <div class="store-module-header ${r?"":"warning"}">
                <div class="bubble-section-title">
                  <ha-icon icon="mdi:puzzle"></ha-icon>
                  <h3>${t.name}</h3>
                </div>

                <div class="store-module-meta">
                  <div class="store-module-author">
                    ${t.userAvatar?x`
                      <img src="${t.userAvatar}" alt="${t.creator||"Anonymous"}" class="author-avatar">
                    `:""}
                    <span>by ${t.creator||"Anonymous"}</span>
                  </div>
                  <div class="version-container">
                    ${_isNewModule(t)?x`<span class="bubble-badge new-badge"><ha-icon icon="mdi:bell-outline"></ha-icon> New</span>`:""}
                    ${r?"":x`<span class="bubble-badge incompatible-badge">Incompatible</span>`}
                    ${a?x`<span class="bubble-badge update-badge">Update available</span>`:""}
                    ${o?x`<span class="bubble-badge yaml-badge">YAML</span>`:""}
                    <span class="bubble-badge version-badge">${t.version||""}</span>
                  </div>
                </div>

                <div class="store-module-badges bubble-badges">
                </div>
              </div>

              <div class="store-module-content">
                <div class="store-module-description">
                  ${t.description?x`
                    <p class="module-description" .innerHTML=${(0,modules_utils.bx)(t.description)}></p>
                  `:x`
                    <p><em>No description</em></p>
                  `}
                  ${t.imageUrl?x`
                    <div class="module-preview-container">
                      <img src="${t.imageUrl}" alt="${t.name}" class="module-preview-image">
                      <div class="module-preview-zoom-btn" @click=${n=>{n.stopPropagation(),e._toggleImageZoom(t.imageUrl)}}>
                        <ha-icon icon="mdi:magnify"></ha-icon>
                      </div>
                    </div>
                  `:""}
                </div>

                <div class="store-module-actions bubble-badges">
                  ${n?x`
                      ${a?x`
                          ${_requiresManualInstallation(t)?x`
                              <a 
                                href="${t.moduleLink}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bubble-badge update-button hoverable"
                                style="cursor: pointer;"
                              >
                                <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                                <span>Update (Manual install)</span>
                              </a>
                            `:x`
                              <div 
                                @click=${()=>installOrUpdateModule(e,t)}
                                class="bubble-badge update-button hoverable"
                                style="cursor: pointer;"
                              >
                                <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                                <span>Update</span>
                              </div>
                            `}
                        `:x`
                          <div class="bubble-badge installed-button">
                            <ha-icon icon="mdi:check"></ha-icon>
                            <span>${o?"Installed via YAML":"Installed"}</span>
                          </div>
                        `}
                    `:x`
                      ${_requiresManualInstallation(t)?x`
                          <a
                            href="${t.moduleLink}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bubble-badge install-button hoverable"
                            style="cursor: pointer;"
                          >
                            <ha-icon icon="mdi:github"></ha-icon>
                            <span>Manual install</span>
                          </a>
                        `:x`
                          <div
                            @click=${()=>installOrUpdateModule(e,t)}
                            class="bubble-badge install-button hoverable"
                            style="cursor: pointer;"
                          >
                            <ha-icon icon="mdi:download"></ha-icon>
                            <span>Install</span>
                          </div>
                        `}
                    `}
                  <a
                    href="${t.moduleLink}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bubble-badge link-button"
                  >
                    <ha-icon icon="mdi:github"></ha-icon>
                    More info / Issue report
                  </a>
                </div>
              </div>
            </div>
          `})}
      </div>

      ${0===_getFilteredStoreModules(e).length?x`
        <div class="bubble-info">
          <h4 class="bubble-section-title">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            No modules found
          </h4>
          <div class="content">
            <p>No modules match your search criteria. Try modifying your search or filters.</p>
          </div>
        </div>
      `:""}
      
      <div class="back-to-top-button" @click=${()=>(0,modules_utils.XY)(e)}>
        <ha-icon icon="mdi:arrow-up"></ha-icon>
      </div>
    </div>

    ${e._zoomedImage?x`
      <div class="module-preview-fullscreen" @click=${()=>e._toggleImageZoom(null)}>
        <img src="${e._zoomedImage}" alt="Fullscreen preview">
      </div>
    `:""}
  `)}function _getFilteredStoreModules(e){if(!e._storeModules)return[];let t=[...e._storeModules];if(e._storeSearchQuery){const n=e._storeSearchQuery.toLowerCase();t=t.filter(e=>e.name&&e.name.toLowerCase().includes(n)||e.description&&e.description.toLowerCase().includes(n)||e.creator&&e.creator.toLowerCase().includes(n)||e.type&&e.type.toLowerCase().includes(n))}if(e._storeShowOnlyCompatible){const n=e._config.card_type??"";t=t.filter(e=>e.supportedCards&&Array.isArray(e.supportedCards)?e.supportedCards.includes(n):!e.unsupportedCards||!e.unsupportedCards.includes(n))}return e._storeSelectedType&&"all"!==e._storeSelectedType&&(t=t.filter(t=>t.type&&t.type.toLowerCase()===e._storeSelectedType.toLowerCase())),t=sortModulesByRelevance(t),t}function sortModulesByRelevance(e){return e&&Array.isArray(e)?e.map(e=>{let t=0,n=!1,o=!1;if(e.comments&&(t+=Math.min(e.comments,8),n=!0),e.reactions?.total_count&&(t+=5*e.reactions.total_count,n=!0),e.reactions?.heart&&(t+=10*e.reactions.total_count,n=!0),e.createdAt){const n=new Date(e.createdAt),a=(new Date-n)/864e5;a<=7?(t+=30,o=!0):a<=30?(t+=15,o=!0):a<=90&&(t+=5)}if(e.updated_at){const n=new Date(e.updated_at),a=(new Date-n)/864e5;a<=7?(t+=25,o=!0):a<=30?(t+=15,o=!0):a<=90&&(t+=8)}return n||o||(t-=30),n&&o&&(t+=20),"Clooos"===e.creator&&(t+=40),_isNewModule(e)&&(t+=150),{...e,relevanceScore:t}}).sort((e,t)=>t.relevanceScore-e.relevanceScore):[]}function _isNewModule(e){if(!e.createdAt)return!1;const t=new Date(e.createdAt);return(new Date-t)/864e5<=14}function _isModuleInstalled(e){return style_processor.Ki.has(e)}function _isModuleInstalledViaYaml(e){if(!_isModuleInstalled(e))return!1;if(style_processor.sq.has(e))return"yaml"===style_processor.sq.get(e);try{return!JSON.parse(localStorage.getItem("bubble-card-modules")||"{}")[e]}catch(e){return console.warn("Error checking module installation source:",e),!1}}function checkModuleUpdates(){const e=Array.from(style_processor.Ki.keys()),t=[];let n=0;const o=(0,cache.getCachedModuleData)();return o&&o.modules&&o.modules.length?(e.forEach(e=>{const a=o.modules.find(t=>t.id===e);a&&_hasModuleUpdate(e,a.version)&&(n++,t.push({id:e,name:a.name||style_processor.Ki.get(e).name||e,currentVersion:style_processor.Ki.get(e).version||"0",newVersion:a.version}))}),{hasUpdates:n>0,updateCount:n,modules:t}):{hasUpdates:!1,updateCount:0,modules:[]}}function _hasModuleUpdate(e,t){if(!_isModuleInstalled(e)||!t)return!1;const n=(style_processor.Ki.get(e)||{}).version||"0";return(0,modules_utils._O)(t,n)>0}function _requiresManualInstallation(e){if(!e||!e.yamlContent)return!0;const t=e.yamlContent.trim();if(!t)return!0;try{const e=js_yaml.Ay.load(t);if(!e||"object"!=typeof e)return!0;const n=Object.keys(e);if(n.length>1){let t=0;for(const o of n){const n=e[o];n&&"object"==typeof n&&(n.name||n.code)&&t++}if(t>1)return!0}if(1===n.length){const t=e[n[0]];if(t&&"object"==typeof t){const e=Object.keys(t);let n=0;for(const o of e){const e=t[o];e&&"object"==typeof e&&(e.name||e.code)&&n++}if(n>1)return!0}}if(1===n.length){const t=e[n[0]];if(!t||"object"!=typeof t)return!0;if(!t.name||!t.code)return!0}}catch(e){return console.warn("Error checking module YAML compatibility:",e),!0}return!1}async function _fetchModuleStore(e,t=!1){if(e._isApiCallInProgress)return;e._isApiCallInProgress=!0;const n=!t&&void 0!==e._storeModules;let o=!1;if(!t){e._isLoadingStore=!0,e._storeError=null,e._loadingProgress=5,e._loadingStatus="Checking API limits",e.requestUpdate();let t=setInterval(()=>{if(!e._isLoadingStore)return void clearInterval(t);const n=e._loadingProgress||0;let o=0;n<40?o=2.5*Math.random():n<60?o=1.5*Math.random():n<75?o=.8*Math.random():n<90&&(o=.3*Math.random()),n<90&&(e._loadingProgress=n+o,e.requestUpdate())},200);e._progressInterval=t}try{if(!n){const n=await fetch("https://api.github.com/rate_limit",{method:"GET",headers:{Accept:"application/vnd.github.v3+json","X-GitHub-Api-Version":"2022-11-28"}});if(t||(e._loadingStatus="Analyzing API response",e._loadingProgress=Math.min(e._loadingProgress+5,30),e.requestUpdate()),n.ok){(await n.json()).resources.core.remaining<=1&&(console.warn("⚠️ API limit reached, using cache instead"),o=!0)}else o=!0,console.warn("⚠️ Could not check API rate limit, using cooldown logic")}if(t||(e._loadingStatus="Processing API data",e._loadingProgress=Math.min(e._loadingProgress+5,40),e.requestUpdate()),o&&!n){const n=localStorage.getItem("bubble-card-api-failure-timestamp");if(n){const o=parseInt(n),a=18e5;if(Date.now()-o<a){const{getCachedModuleData:n}=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,404)),o=n();return o&&!e._storeModules&&(e._storeModules=o.modules,e._isLoadingStore=!1,e.requestUpdate()),void(t||(e._loadingStatus="Loading from cache",e._loadingProgress=60,e.requestUpdate()))}localStorage.removeItem("bubble-card-api-failure-timestamp")}}else if(o&&!n){const{getCachedModuleData:n}=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,404)),o=n();o&&!e._storeModules&&(e._storeModules=o.modules,e._isLoadingStore=!1,e.requestUpdate()),t||(e._loadingStatus="Loading from cache",e._loadingProgress=60,e.requestUpdate())}let a=[],i=1,r=!0;for(t||(e._loadingStatus="Downloading module data",e._loadingProgress=50,e.requestUpdate());r;){const n=await fetch(`https://api.github.com/repos/Clooos/Bubble-Card/discussions?per_page=100&page=${i}`,{method:"GET",headers:{Accept:"application/vnd.github.v3+json","X-GitHub-Api-Version":"2022-11-28"}});if(t||(e._loadingStatus=`Processing page ${i}`,e._loadingProgress=Math.min(50+5*i,80),e.requestUpdate()),!n.ok)throw console.error("❌ REST API Error:",n.status,n.statusText),localStorage.setItem("bubble-card-api-failure-timestamp",Date.now().toString()),new Error(`REST API Error: ${n.status}`);const o=await n.json();0===o.length?r=!1:(a=[...a,...o],i++),n.headers.get("x-ratelimit-remaining")<=5&&(console.warn("⚠️ API limit approaching, stopping pagination"),r=!1)}t||(e._loadingStatus="Filtering modules",e._loadingProgress=85,e.requestUpdate());const s=a.filter(e=>{const t=e.category?.name;return"Share your Modules"===t}),l=(0,parser.N5)(s);t||(e._loadingStatus="Saving to cache",e._loadingProgress=95,e.requestUpdate());const{saveCachedModuleData:c}=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,404));c(l),t||(await new Promise(e=>setTimeout(e,300)),e._loadingProgress=100,e._loadingStatus="Complete",e.requestUpdate()),t&&e._storeModules||(e._storeModules=l,e._isLoadingStore=!1,e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null),e.requestUpdate())}catch(n){if(console.error("Error loading modules:",n),!t){e._loadingStatus="Error - Loading from cache",e._loadingProgress=85,e.requestUpdate();const{getCachedModuleData:t}=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,404)),o=t();o?(await new Promise(e=>setTimeout(e,300)),e._storeModules=o.modules,e._isLoadingStore=!1,e._loadingProgress=100,e._loadingStatus="Loaded from cache",e.requestUpdate()):(e._storeError=n.message,e._isLoadingStore=!1,e.requestUpdate()),e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null)}}finally{e._isApiCallInProgress=!1,t||e.requestUpdate()}}function getCleanExportData(e){const{id:t,name:n,version:o,creator:a,link:i,supported:r,description:s,code:l,editor:c}={...e},d={name:n,version:o,creator:a,link:i,supported:r,description:s,code:l,editor:c};return Object.keys(d).forEach(e=>{const t=d[e];(null==t||"link"===e&&""===t)&&delete d[e]}),{id:t,cleanData:d}}function generateYamlExport(e){try{const{id:t,cleanData:n}=getCleanExportData(e),o={[t]:n};return js_yaml.Ay.dump(o,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,sortKeys:!1})}catch(e){return console.error("Error generating YAML export:",e),"# Error generating YAML export"}}function generateGitHubExport(e){try{const{id:t,cleanData:n}=getCleanExportData(e),{name:o,version:a,creator:i,description:r,code:s,editor:l,supported:c=[]}=n;let d=`# ${o}\n\n`;if(d+=`**Version:** ${a}  \n`,d+=`**Creator:** ${i}\n\n`,c&&c.length>0&&(d+="> [!IMPORTANT] \n",d+="> **Supported cards:**\n",c.forEach(e=>{d+=`>  - ${e.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase())}\n`}),d+="\n"),r&&(d+=`${r}\n`,d+="Configure this module via the editor or in YAML, for example:\n\n"),d+="```yaml\n",d+=`${t}: \n`,l&&Array.isArray(l)&&l.length>0){const e=l[0];e&&e.name&&(d+=`    ${e.name}: YOUR_VALUE\n`)}else d+="    # Your configuration here\n";if(d+="```\n\n",d+="---\n\n",d+="<details>\n\n",d+="<summary><b>🧩 Get this Module</b></summary>\n\n",d+="<br>\n\n",d+="> To use this module, simply install it from the Module Store (from the editor of any card > Modules), or copy and paste the following configuration into your `/www/bubble/bubble-modules.yaml` file.\n\n",d+="```yaml\n",d+=`${t}:\n`,d+=`    name: "${o}"\n`,d+=`    version: "${a}"\n`,d+=`    creator: "${i}"\n`,d+='    link: "https://github.com/Clooos/Bubble-Card/discussions/XXXX"\n\n',c&&c.length>0&&(d+="    supported:\n",c.forEach(e=>{d+=`        - ${e}\n`}),d+="\n"),d+="    description: |\n",r){const e=r.split("\n").map(e=>`        ${e}`).join("\n");if(d+=`${e}\n`,d+="        <br><br>\n",d+="        <code-block><pre>\n",d+=`        ${t}: \n`,l&&Array.isArray(l)&&l.length>0){const e=l[0];e&&e.name?d+=`            ${e.name}: YOUR_VALUE\n`:d+="            # Your configuration here\n"}else d+="            # Your configuration here\n";d+="        </pre></code-block>\n\n"}if(d+="    code: |\n",s){const e=s.split("\n").map(e=>`        ${e}`).join("\n");d+=`${e}\n\n`}else d+="        # Your code here\n\n";if(l){const e="object"==typeof l?js_yaml.Ay.dump(l,{indent:2}):l;d+="    editor:\n";const t=e.split("\n").map(e=>`      ${e}`).join("\n");d+=`${t}`,d+="\n```"}else d+="```";return d+="\n\n</details>\n\n",d+="---\n\n",d+="### Screenshot:\n\n",d+="Important: The first screenshot here will be used on the Module Store, so please provide one.\n",d}catch(e){return console.error("Error generating GitHub export:",e),"# Error generating GitHub export format"}}function copyToClipboard(e,t,n,o){try{const a=document.createElement("textarea");a.value=t,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),(0,cache.q)(e,n,"success"),"function"==typeof o&&o(t)}catch(n){console.error("Clipboard copy failed:",n),(0,cache.q)(e,"Could not copy to clipboard. Please copy manually from the preview below.","error"),"function"==typeof o&&o(t)}}function downloadModuleAsYaml(e,t,n){try{const o=generateYamlExport(t),a=new Blob([o],{type:"text/yaml"}),i=URL.createObjectURL(a),r=document.createElement("a");return r.href=i,r.download=`${t.id}.yaml`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i),(0,cache.q)(e,"Module downloaded as YAML file!","success"),"function"==typeof n&&n(o),!0}catch(t){return console.error("Error downloading module:",t),(0,cache.q)(e,"Error downloading module: "+t.message,"error"),!1}}function updateModuleInConfig(e,t,n=null){e._config&&e._config.modules&&(n&&n!==t&&(e._config.modules=e._config.modules.filter(e=>e!==n)),e._config.modules.includes(t)||e._config.modules.push(t),e._previousModuleId=t,(0,utils.rC)(e,"config-changed",{config:e._config}))}function refreshStyles(e){e.lastEvaluatedStyles="",e.stylesYAML=null,e.handleCustomStyles&&e.card&&e.handleCustomStyles(e,e.card),e.requestUpdate()}function broadcastModuleUpdate(e,t){window.dispatchEvent(new CustomEvent("bubble-card-module-updated",{detail:{moduleId:e,moduleData:t}}))}function setHAEditorButtonsDisabled(e){try{const t=document.querySelector("body > home-assistant")?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot?.querySelector("ha-dialog > div:nth-child(4)");t&&(t.style.display=e?"none":"")}catch(e){}}function renderModuleEditorForm(e){if(!e._editingModule)return setHAEditorButtonsDisabled(!1),x``;setHAEditorButtonsDisabled(!0);const t=!!_isModuleInstalledViaYaml&&_isModuleInstalledViaYaml(e._editingModule.id),n=t=>{const n=e.shadowRoot?.querySelector("#export-preview-content");if(n){n.textContent=t;const o=e.shadowRoot?.querySelector(".export-preview ha-expansion-panel");o&&!o.expanded&&(o.expanded=!0);const a=e.shadowRoot?.querySelector(".export-preview");a&&(a.style.animation="none",setTimeout(()=>{a.style.animation="highlight 1s ease"},10))}};return x`
    <div class="module-editor-form">
        <div class="form-content">
          <h3>
            <ha-icon style="margin: 8px;" icon="${e._showNewModuleForm?"mdi:puzzle-plus-outline":"mdi:puzzle-edit-outline"}"></ha-icon>
            ${e._showNewModuleForm?"Create new Module":"default"===e._editingModule.id?"Edit Default Module":"Edit Module"}
          </h3>
          
          <div class="module-editor-not-default" style="display: ${"default"===e._editingModule.id?"none":""}">
            ${t?x`
              <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                  <ha-icon icon="mdi:file-document-alert"></ha-icon>
                  Read-only Module
                </h4>
                <div class="content">
                  <p>This Module is installed from a YAML file. You need to modify the <code>bubble-modules.yaml</code> 
                  file directly, or remove it from your YAML file then import it here.</p>
                </div>
              </div>
            `:""}
            
            <ha-textfield
              label="Module ID"
              .value=${e._editingModule.id||""}
              @input=${t=>{const n=e._editingModule.id;e._editingModule.id=t.target.value,e._showNewModuleForm&&e._config.modules&&(updateModuleInConfig(e,t.target.value,n),(0,utils.rC)(e,"config-changed",{config:e._config}))}}
              ?disabled=${!e._showNewModuleForm||t}
            ></ha-textfield>
            <span class="helper-text">
              Must be unique and cannot be changed after the Module is created.
            </span>
            
            <ha-textfield
              label="Module Name"
              .value=${e._editingModule.name||""}
              @input=${t=>{e._editingModule.name=t.target.value}}
              ?disabled=${t}
            ></ha-textfield>
            
            <ha-textfield
              label="Version"
              .value=${e._editingModule.version||"1.0"}
              @input=${t=>{e._editingModule.version=t.target.value}}
              ?disabled=${t}
            ></ha-textfield>
            
            <ha-textfield
              label="Creator"
              .value=${e._editingModule.creator||""}
              @input=${t=>{e._editingModule.creator=t.target.value}}
              ?disabled=${t}
            ></ha-textfield>
            
            <ha-expansion-panel .header=${x`
              <ha-icon icon="mdi:filter-check-outline" style="margin-right: 8px;"></ha-icon>
              Supported cards
            `}>
              <div>
                ${renderSupportedCardCheckboxes(e,t)}
              </div>
            </ha-expansion-panel>

            <ha-expansion-panel .header=${x`
              <ha-icon icon="mdi:file-document-outline" style="margin-right: 8px;"></ha-icon>
              Description
            `}>
              <div class="code-editor-container">
                <ha-code-editor
                  class="${t?"disabled":""}"
                  mode="yaml"
                  .value=${e._editingModule.description||""}
                  @value-changed=${t=>{e._editingModule.description=t.detail.value}}
                ></ha-code-editor>
              </div>
              <span class="helper-text">
                This description appears in your module and in the Module Store (if you share it), so make sure it's clear and concise. <b>You can use HTML and inline CSS</b>, but note that it will only be rendered in your module, the Module Store will not display it.            
              </span>
            </ha-expansion-panel>
          </div>

          <ha-expansion-panel .header=${x`
            <ha-icon icon="mdi:code-json" style="margin-right: 8px;"></ha-icon>
            Code (CSS/JS template)
          `}>
            <div class="code-editor-container">
              <ha-code-editor
                class="${t?"disabled":""}"
                mode="yaml"
                .value=${e._editingModule.code||""}
                @value-changed=${n=>(n=>{if(!e._editingModule||!e._config||t)return;const o=e._editingModule.id;if("function"==typeof e._clearCurrentModuleError&&e._clearCurrentModuleError(o),!e._originalModuleState){const t=style_processor.Ki.get(o);t&&(e._originalModuleState=JSON.parse(JSON.stringify(t)))}e._editingModule.code=n,e.stylesYAML&&(e.stylesYAML=null);const a={...style_processor.Ki.get(o)||{},code:n,id:o};style_processor.Ki.set(o,a),updateModuleInConfig(e,o,e._previousModuleId),broadcastModuleUpdate(o,a)})(n.detail.value)}
              ></ha-code-editor>
            </div>
            ${e.createErrorConsole(e)}
            <span class="helper-text">
              More information and examples about the CSS and JS template possibilities can be found in the <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#styling" target="_blank">Styling and Templates documentation</a>. Tip: You can enlarge the editor by clicking on the panel title (Bubble Card configuration).
            </span>
          </ha-expansion-panel>
          
          <ha-expansion-panel style="display: ${"default"===e._editingModule.id?"none":""}" .header=${x`
            <ha-icon icon="mdi:form-select" style="margin-right: 8px;"></ha-icon>
            Optional: Editor schema (YAML)
          `}>
            <div class="editor-schema-container">
              <ha-code-editor
                class="${t?"disabled":""}"
                mode="yaml"
                .value=${e._editingModule.editor_raw||("object"==typeof e._editingModule.editor?js_yaml.Ay.dump(e._editingModule.editor):e._editingModule.editor||"")}
                @value-changed=${n=>{e._editingModule.editor_raw=n.detail.value,clearTimeout(e._editorSchemaDebounce),e._editorSchemaDebounce=setTimeout(()=>{try{const o=js_yaml.Ay.load(n.detail.value);null!==o&&"object"==typeof o&&((n=>{if(e._editingModule&&e._config&&!t)try{const t=e._editingModule.id;if(!e._originalModuleState){const n=style_processor.Ki.get(t);n&&(e._originalModuleState=JSON.parse(JSON.stringify(n)))}const o=e._editingModule.editor_raw;e._editingModule.editor=n,o&&(e._editingModule.editor_raw=o);const a=style_processor.Ki.get(t);if(a){const o={...a,editor:n};style_processor.Ki.set(t,o),e._schemaCache&&delete e._schemaCache[t],e._processedSchemas&&delete e._processedSchemas[t],e.requestUpdate(),setTimeout(()=>{(0,utils.rC)(e,"editor-refresh",{}),e.requestUpdate()},50)}}catch(e){console.warn("Error applying live editor schema:",e)}})(o),e._yamlErrorMessage&&(e._yamlErrorMessage=null,e.requestUpdate()))}catch(t){console.warn("Invalid YAML for editor schema:",t),e._editingModule.editor=e._editingModule.editor_raw||n.detail.value,e._yamlErrorMessage=t.message,e.requestUpdate()}},100)}}
              ></ha-code-editor>
            </div>
            <div class="bubble-info error" 
                style="display: ${e._yamlErrorMessage?"":"none"}">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Error in YAML schema
                </h4>
                <div class="content">
                    <pre style="margin: 0; white-space: pre-wrap; font-size: 12px;">${e._yamlErrorMessage?e._yamlErrorMessage.charAt(0).toUpperCase()+e._yamlErrorMessage.slice(1):""}</pre>
                </div>
            </div>
            <span class="helper-text">
              This allows you to add a visual editor to your module. Learn about all available editor schema options in the <a href="https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md" target="_blank">editor schema documentation</a>.
            </span>

            ${e._editingModule.editor&&Array.isArray(e._editingModule.editor)&&e._editingModule.editor.length>0?x`
              <div class="form-preview">
                <h4>Editor preview</h4>
                <div class="form-preview-container">
                  <ha-form
                    .hass=${e.hass}
                    .data=${{}}
                    .schema=${e._editingModule.editor}
                    .computeLabel=${e._computeLabelCallback||(e=>e.label||e.name)}
                  ></ha-form>
                </div>
              </div>
            `:""}
          </ha-expansion-panel>

          <hr>

          <ha-expansion-panel .header=${x`
            <ha-icon icon="mdi:export" style="margin-right: 8px;"></ha-icon>
            Export Module
          `}>
            <div class="content">
                <div class="export-section">
                    <div class="export-buttons">
                        <button class="icon-button" @click=${()=>{const t=generateYamlExport(e._editingModule);copyToClipboard(e,t,"YAML format copied to clipboard!",n)}}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        Copy YAML
                        </button>
                        
                        <button class="icon-button" @click=${()=>{const t=generateGitHubExport(e._editingModule);copyToClipboard(e,t,"GitHub Discussion format copied to clipboard!",n)}}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        Copy for GitHub
                        </button>
                        
                        <button class="icon-button" @click=${()=>{downloadModuleAsYaml(e,e._editingModule,n)}}>
                        <ha-icon icon="mdi:file-download"></ha-icon>
                        Download YAML
                        </button>
                    </div>
                    
                    <div class="export-preview">
                        <ha-expansion-panel .header=${"Export preview"}>
                        <pre id="export-preview-content">Click on a button above to generate the preview</pre>
                        </ha-expansion-panel>
                    </div>

                    <div class="bubble-info">
                      <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Sharing your Module to the Store
                      </h4>
                      <div class="content">
                        <p>To share your Module to the Module Store, click on <strong>Copy for GitHub</strong> and paste the content in a new discussion in the
                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules" target="_blank">Share your Modules</a> category.
                        <strong>Edit the description</strong> (if needed), <strong>the example</strong> (for YAML users), and remember to <strong>include at least one screenshot</strong> for the Module Store.</p>
                        <p><strong>Your Module becomes available right after that</strong> (after a Store refresh), so double-check that everything is correctly written and the Module is working as expected. You can of course edit/update the Module after it is shared.</p>
                      </div>
                    </div>
                </div>
            </div>
          </ha-expansion-panel>
          
          <div class="module-editor-buttons-container">
            <button class="icon-button" style="flex: 1;" @click=${()=>{try{if(!e._showNewModuleForm&&e._editingModule){const t=e._editingModule.id;resetModuleChanges(e,t)}else if(e._showNewModuleForm&&e._editingModule){const t=e._editingModule.id;e._config&&e._config.modules&&t&&(e._config.modules=e._config.modules.filter(e=>e!==t),(0,utils.rC)(e,"config-changed",{config:e._config}),style_processor.Ki.has(t)&&style_processor.Ki.delete(t),refreshStyles(e))}}finally{e._editingModule=null,e._showNewModuleForm=!1,e._previousModuleId=null,setHAEditorButtonsDisabled(!1),e.requestUpdate(),setTimeout(()=>(0,modules_utils.XY)(e),0)}}}>
              <ha-icon icon="mdi:close"></ha-icon>
              Cancel
            </button>
            
            <button class="icon-button ${t?"disabled":""}" style="flex: 1;" @click=${()=>{saveModule(e,e._editingModule),setTimeout(()=>(0,modules_utils.XY)(e),0)}}>
              <ha-icon icon="mdi:content-save"></ha-icon>
              Save Module
            </button>
          </div>
        </div>
    </div>
  `}function renderSupportedCardCheckboxes(e,t=!1){const n=[{id:"button",name:"Button"},{id:"calendar",name:"Calendar"},{id:"climate",name:"Climate"},{id:"cover",name:"Cover"},{id:"horizontal-buttons-stack",name:"Horizontal buttons stack"},{id:"media-player",name:"Media player"},{id:"pop-up",name:"Pop-up"},{id:"select",name:"Select"},{id:"separator",name:"Separator"}];return e._editingModule.supported||(e._editingModule.supported=[],e._editingModule.unsupported&&e._editingModule.unsupported.length>0?e._editingModule.supported=n.map(e=>e.id).filter(t=>!e._editingModule.unsupported.includes(t)):e._editingModule.supported=n.map(e=>e.id)),x`
    <div class="checkbox-grid">
      ${n.map(n=>x`
        <ha-formfield label="${n.name}">
          <ha-checkbox
            .checked=${e._editingModule.supported.includes(n.id)}
            @change=${o=>{t||(o.target.checked?e._editingModule.supported.includes(n.id)||e._editingModule.supported.push(n.id):e._editingModule.supported=e._editingModule.supported.filter(e=>e!==n.id),e.requestUpdate())}}
            ?disabled=${t}
          ></ha-checkbox>
        </ha-formfield>
      `)}
    </div>
    <div class="helper-text">
      Select the card types that this module supports.
    </div>
  `}async function saveModule(e,t){try{const n=t.id,o=e._config.modules&&e._config.modules.includes(n);if(t.editor_raw&&"string"==typeof t.editor_raw)try{const e=js_yaml.Ay.load(t.editor_raw);null!==e&&"object"==typeof e&&(t.editor=e)}catch(e){console.warn("Couldn't parse editor schema during save, using fallback:",e)}t.editor_raw&&delete t.editor_raw,t.supported&&t.unsupported&&delete t.unsupported;const a="sensor.bubble_card_modules",i=e.hass&&e.hass.states&&e.hass.states[a],r={},s={...t};delete s.id,r[t.id]=s;const l=js_yaml.Ay.dump(r,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}),c={id:t.id,yaml:l};try{let e={};const n=localStorage.getItem("bubble-card-modules");if(n&&""!==n.trim())try{e=JSON.parse(n)}catch(e){console.warn("Error parsing stored modules, resetting storage:",e)}e&&"object"==typeof e||(e={}),e[t.id]=c,localStorage.setItem("bubble-card-modules",JSON.stringify(e)),console.info("Module saved locally in localStorage")}catch(e){console.warn("localStorage storage error:",e)}const d=(0,parser.tF)(l,t.id,{title:t.name,defaultCreator:t.creator});document.dispatchEvent(new CustomEvent("yaml-modules-updated"));const u=Array.from(style_processor.Ki.keys()),p=new Map;u.forEach(e=>{e===t.id?p.set(t.id,d):p.set(e,style_processor.Ki.get(e))}),u.includes(t.id)||p.set(t.id,d),style_processor.Ki.clear(),p.forEach((e,t)=>{style_processor.Ki.set(t,e)}),e._config&&e._config.modules&&(e._config.modules.includes(n)||e._config.modules.push(n),(0,utils.rC)(e,"config-changed",{config:e._config})),i&&await saveModuleToHomeAssistant(e,a,t),broadcastModuleUpdate(n,d),e.stylesYAML=null,o&&refreshStyles(e),e._editingModule=null,e._showNewModuleForm=!1,forceUIRefresh(e),setHAEditorButtonsDisabled(!1)}catch(e){console.error("Error saving module:",e)}finally{setHAEditorButtonsDisabled(!1)}}async function saveModuleToHomeAssistant(e,t,n){try{const o=e.hass.auth.data.access_token;if(!o)throw new Error("Authentication token not available");const a=window.location.origin,i=await fetch(`${a}/api/states/${t}`,{headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"}});if(i.ok){const t=await i.json();let o={};if(t.attributes&&t.attributes.modules)try{o="string"==typeof t.attributes.modules?JSON.parse(t.attributes.modules):t.attributes.modules}catch(e){console.warn("Error parsing modules from Home Assistant:",e)}o&&"object"==typeof o||(o={});const a=o[n.id],r=a&&!0===a.is_global;o[n.id]={id:n.id,name:n.name,version:n.version,creator:n.creator,description:n.description,code:n.code,editor:n.editor,supported:n.supported||[],...r?{is_global:!0}:{},..."default"===n.id?{is_global:!0}:{},...n.supported?{}:{unsupported:n.unsupported||[]}},e.hass.callWS({type:"fire_event",event_type:"bubble_card_update_modules",event_data:{modules:o,last_updated:(new Date).toISOString()}}).catch(e=>{console.error("Error firing event:",e)})}}catch(e){console.error("Error saving module to Home Assistant:",e)}}function forceUIRefresh(e){e._processedSchemas&&(e._processedSchemas={}),e._selectedModuleTab=0,"function"==typeof e._getProcessedSchema&&(e._schemaCache?Object.keys(e._schemaCache).forEach(t=>{delete e._schemaCache[t]}):e._schemaCache={}),e.lastEvaluatedStyles="",e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),(0,utils.rC)(e,"editor-refresh",{}),e.requestUpdate(),setTimeout(()=>{e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),e.requestUpdate(),setTimeout(()=>{if(e._config){const t={...e._config};e.stylesYAML&&(e.stylesYAML=null,document.dispatchEvent(new CustomEvent("yaml-modules-updated"))),(0,utils.rC)(e,"config-changed",{config:t}),e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card)}e.requestUpdate()},100)},50)}function editModule(e,t){e._originalModuleState=null;const n=style_processor.Ki.get(t);n?(e._editingModule={id:t,...n},setHAEditorButtonsDisabled(!0),e._editingModule.code||(e._editingModule.code=""),e._editingModule.editor&&"string"==typeof e._editingModule.editor&&(e._editingModule.editorReference=e._editingModule.editor,e._editingModule.editor=[]),"object"==typeof e._editingModule.editor?e._editingModule.editor_raw=js_yaml.Ay.dump(e._editingModule.editor):e._editingModule.editor_raw=e._editingModule.editor||"",e.requestUpdate(),setTimeout(()=>(0,modules_utils.XY)(e),0)):console.error(`Module ${t} not found`)}async function deleteModule(e,t){const n="sensor.bubble_card_modules",o=e.hass&&e.hass.states&&e.hass.states[n];if(confirm(`Are you sure you want to delete module "${t}"?`))try{let a={};const i=localStorage.getItem("bubble-card-modules");if(i&&""!==i.trim())try{a=JSON.parse(i)}catch(e){console.warn("Error parsing stored modules during deletion:",e)}a&&"object"==typeof a||(a={}),delete a[t],localStorage.setItem("bubble-card-modules",JSON.stringify(a)),style_processor.Ki.delete(t),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),o&&await updateHomeAssistantModules(e,n,t),e._config&&e._config.modules&&(e._config.modules=e._config.modules.filter(e=>e!==t),(0,utils.rC)(e,"config-changed",{config:e._config}),refreshStyles(e)),forceUIRefresh(e),setHAEditorButtonsDisabled(!1)}catch(e){console.error("Error deleting module:",e)}finally{setHAEditorButtonsDisabled(!1)}}async function updateHomeAssistantModules(e,t,n){try{const o=e.hass.auth.data.access_token;if(!o)throw new Error("Authentication token not available");const a=window.location.origin,i=await fetch(`${a}/api/states/${t}`,{headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"}});if(i.ok){const t=await i.json();let o={};if(t.attributes&&t.attributes.modules)try{o="string"==typeof t.attributes.modules?JSON.parse(t.attributes.modules):t.attributes.modules}catch(e){console.warn("Error parsing modules from Home Assistant:",e)}o&&"object"==typeof o||(o={}),delete o[n],e.hass.callWS({type:"fire_event",event_type:"bubble_card_update_modules",event_data:{modules:o,last_updated:(new Date).toISOString()}}).catch(e=>{console.error("Error firing event:",e)})}}catch(e){console.error("Error updating Home Assistant entity:",e)}}function initModuleEditor(e){if(!e._editingModuleInitialized){e._editingModule=null,e._showNewModuleForm=!1,e._showManualImportForm=!1,e._manualYamlContent="",e._exportContent=null,e._exportType=null,e._exportStep=0,e._schemaCache={},e._processedSchemas={},e._originalModuleState=null,e._previousModuleId=null,e._generateUniqueModuleId=(e="my_module")=>{if(!style_processor.Ki.has(e))return e;let t=1,n=`${e}_${t}`;for(;style_processor.Ki.has(n);)t++,n=`${e}_${t}`;return n};const t=e._generateUniqueModuleId("my_module");e._newModuleTemplate={id:t,name:"My Module",description:"",creator:"",version:"1.0",supported:["button","calendar","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator"],code:"",editor:""},e._editingModuleInitialized=!0}}function resetModuleChanges(e,t){if(!t)return;let n;e._originalModuleState?(n=e._originalModuleState,e._originalModuleState=null):n=style_processor.Ki.get(t),n&&(e.lastEvaluatedStyles="",e.stylesYAML=null,style_processor.Ki.set(t,{...n}),e._schemaCache&&delete e._schemaCache[t],e._processedSchemas&&delete e._processedSchemas[t],e.handleCustomStyles&&e.handleCustomStyles(e,e.card),broadcastModuleUpdate(t,n),setTimeout(()=>{if(e._config){const t={...e._config};(0,utils.rC)(e,"config-changed",{config:t})}e.requestUpdate()},50))}function isSlTabGroupAvailable(){return"undefined"!=typeof customElements&&void 0!==customElements.get("sl-tab-group")}async function setModuleGlobalStatus(e,t,n){try{if(!e.hass)return!1;const o="sensor.bubble_card_modules";if(!(e.hass&&e.hass.states&&e.hass.states[o]))return!1;const a=e.hass.auth.data.access_token;if(!a)return!1;const i=window.location.origin;let r={};try{const e=await fetch(`${i}/api/states/${o}`,{headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}});if(!e.ok)throw new Error(`Failed to retrieve entity state: ${e.statusText}`);const t=await e.json();t.attributes&&t.attributes.modules&&(r=t.attributes.modules)}catch(e){return console.error("Error retrieving modules:",e),!1}if(!r[t])return console.warn(`Module ${t} does not exist in storage`),!1;r[t].is_global=n;try{return await fetch(`${i}/api/events/bubble_card_update_modules`,{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({modules:r,last_updated:(new Date).toISOString()})}),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),!0}catch(e){return console.error("Error updating module global status:",e),!1}}catch(e){return console.error("Unexpected error setting module global status:",e),!1}}function isModuleGlobal(e,t){try{const n="sensor.bubble_card_modules";if(!t||!t.states||!t.states[n])return!1;const o=t.states[n];if(!o.attributes||!o.attributes.modules)return!1;const a=o.attributes.modules[e];return a&&!0===a.is_global}catch(t){return console.warn(`Error checking if module ${e} is global:`,t),!1}}function shouldApplyModule(e,t){const n=e._config?.modules||[],o=Array.isArray(n)?n:[n];return!o.includes(`!${t}`)&&(!!o.includes(t)||isModuleGlobal(t,e.hass))}function makeModulesEditor(e){void 0===e._selectedModuleTab&&(e._selectedModuleTab=0),void 0===e._expandedPanelStates&&(e._expandedPanelStates={});const t="bubble-card-module-editor-tab-group";e._modulesLoaded||(0,style_processor.wv)(e).then(()=>{if(e._modulesLoaded=!0,e.hass&&e.hass.states["sensor.bubble_card_modules"]){const t=e.hass.states["sensor.bubble_card_modules"].attributes.modules;t&&t.default&&!0!==t.default.is_global&&setModuleGlobalStatus(e,"default",!0).then(e=>{e?document.dispatchEvent(new CustomEvent("yaml-modules-updated")):console.warn("Failed to set module 'default' to global in sensor.bubble_card_modules.")})}e.requestUpdate()});const n=e.hass&&e.hass.states&&e.hass.states["sensor.bubble_card_modules"];initModuleEditor(e),e._workingModuleConfigs||(e._workingModuleConfigs={}),e._modulesLoaded&&!style_processor.Ki.has("default")&&n&&installManualModule(e,"default:\n  name: Default\n  version: ''\n  description: Empty and enabled by default. Add your custom styles and/or JS templates here to apply them to all cards by pressing the <ha-icon icon=\"mdi:pencil\"></ha-icon> button above.\n  code: ''\n  is_global: true\n  ").then(()=>{console.info("Default module created automatically"),e.requestUpdate()}).catch(e=>{console.error("Error creating default module:",e)});const o=checkModuleUpdates(),a=t=>{const n=isSlTabGroupAvailable()?parseInt(t.detail.name):t.detail.value;e._selectedModuleTab=n,e.requestUpdate(),requestAnimationFrame(()=>{(0,modules_utils.XY)(e,!1)})},i=x`
    <ha-expansion-panel outlined>
      <h4 slot="header" style="z-index: 8;">
        <ha-icon icon="mdi:puzzle"></ha-icon>
        Modules
        ${o.hasUpdates&&n?x`
          <span class="bubble-badge update-badge" style="margin-left: 8px; font-size: 0.8em; vertical-align: middle;">
            <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
            ${o.updateCount} update${o.updateCount>1?"s":""} available
          </span>
        `:""}
      </h4>
      <div class="content" style="margin: -8px 4px 14px 4px;">
        ${n?"":x`
            <div class="bubble-info warning">
              <h4 class="bubble-section-title">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                Configuration required
              </h4>
              <div class="content">
                <p>The storage entity <code>sensor.bubble_card_modules</code> is not configured in your Home Assistant instance.</p>
                <hr />
                <p><b>To use the Module Store and the Module Editor, follow these steps:</b></p>

                <p>1. Add the following to your <code>configuration.yaml</code> file:</p>
                <code-block><pre>
# Storage for Bubble Card Modules
template:
  - trigger:
      - trigger: event
        event_type: bubble_card_update_modules
    sensor:
      - name: "Bubble Card Modules"
        state: "saved"
        icon: "mdi:puzzle"
        attributes:
          modules: "{{ trigger.event.data.modules }}"
          last_updated: "{{ trigger.event.data.last_updated }}"
                </pre></code-block>
                <p>2. Save the file and restart Home Assistant</p>
                <p>3. Enjoy the Module Store and the Module Editor!</p>
              </div>
            </div>
        `}

        <div id="module-editor-top-marker"></div>
        
        ${(()=>{const o=isSlTabGroupAvailable(),i=e._selectedModuleTab||0;return o?x`
        <sl-tab-group 
          id="${t}"
          .selected=${i.toString()}
          @sl-tab-show=${a}>
          <sl-tab slot="nav" panel="0">
            <ha-icon icon="mdi:puzzle-heart-outline" style="color: inherit !important; margin-right: 8px;"></ha-icon>
            My Modules
          </sl-tab>
          <sl-tab slot="nav" panel="1" ?disabled=${!n}>
            <ha-icon icon="mdi:puzzle-plus-outline" style="color: inherit !important; margin-right: 8px;"></ha-icon>
            Module Store
          </sl-tab>
          <sl-tab-panel name="0"></sl-tab-panel>
          <sl-tab-panel name="1"></sl-tab-panel>
        </sl-tab-group>
      `:x`
        <ha-tabs
          .selected=${i}
          @selected-changed=${a}>
          <paper-tab>
            <ha-icon icon="mdi:puzzle-heart-outline" style="margin-right: 8px;"></ha-icon>
            My Modules
          </paper-tab>
          <paper-tab class="${n?"":"disabled"}">
            <ha-icon icon="mdi:puzzle-plus-outline" style="margin-right: 8px;"></ha-icon>
            Module Store
          </paper-tab>
        </ha-tabs>
      `})()}

        ${0===e._selectedModuleTab?x`
          ${e._showManualImportForm?x`
            <div class="module-editor-form">
              <div class="card-content">
                <h3>
                    <ha-icon icon="mdi:code-json" style="margin: 8px;"></ha-icon>
                    Import Module from YAML
                </h3>
                <p style="margin-top: 0;">Paste the complete YAML code of the module:</p>
                
                <div class="css-editor-container" style="max-height: 500px; overflow: auto;">
                  <ha-code-editor
                    .value=${e._manualYamlContent||""}
                    .mode=${"yaml"}
                    .autofocus=${!0}
                    style="height: auto; max-width: 100%;"
                    @value-changed=${t=>{e._manualYamlContent=t.detail.value}}
                  ></ha-code-editor>
                </div>
                
                <div style="display: flex; gap: 8px; justify-content: flex-end;">
                  <button 
                    class="icon-button" 
                    style="flex: 1;"
                    @click=${()=>{e._showManualImportForm=!1,e.requestUpdate()}}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                    Cancel
                  </button>
                  <button 
                    class="icon-button" 
                    style="flex: 1;"
                    @click=${async()=>{try{const t=e._manualYamlContent;if(!t||""===t.trim())return void(0,utils.rC)(e,"bubble-card-error",{message:"No YAML content provided"});await installManualModule(e,t),e._showManualImportForm=!1,e._manualYamlContent="",e.requestUpdate()}catch(e){console.error("Error installing manual module:",e)}}}
                  >
                    <ha-icon icon="mdi:content-save"></ha-icon>
                    Import Module
                  </button>
                </div>
                <hr>
              </div>
            </div>
          `:""}

          ${e._showNewModuleForm||e._editingModule?renderModuleEditorForm(e):x`
            <!-- Installed Modules List -->
            ${Array.from(style_processor.Ki.keys()).sort((e,t)=>"default"===e?-1:"default"===t?1:0).map(t=>{const{name:a,description:i,formSchema:r,supportedCards:s,unsupportedCard:l,creator:c,moduleLink:d,moduleVersion:u}=(0,modules_utils.a7)(t),p=shouldApplyModule(e,t),h=isModuleGlobal(t,e.hass),b=r&&r.length>0,m="default"===t,g=m||b,f=e._config[t];void 0===e._workingModuleConfigs[t]&&(e._workingModuleConfigs[t]=structuredClone(f??{}));const _=e._workingModuleConfigs[t],y=e._config.card_type??"";let v=!1;v=s&&Array.isArray(s)&&s.length>0?!s.includes(y):l.includes(y);const w=r&&r.length>0?e._getProcessedSchema(t,r,f):[],k=o.modules.some(e=>e.id===t)&&n,C=k?o.modules.find(e=>e.id===t):null;return x`
                <ha-expansion-panel 
                  outlined 
                  class="${v?"disabled":""}"
                  @expanded-changed=${n=>{e._expandedPanelStates[t]=n.target.expanded,e.requestUpdate()}}
                >
                  <h4 slot="header">
                    <ha-icon
                      icon="${p?"mdi:puzzle-check":"mdi:puzzle-outline"}"
                      style="${p?"opacity: 1; color: var(--info-color) !important;":"opacity: 0.3;"}"
                    ></ha-icon>
                    ${a}
                    <span class="module-badges" style="display: inline-flex; margin-left: auto;">
                      ${k?x`
                        <span class="bubble-badge update-badge">
                          <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                          Update: ${C.newVersion}
                        </span>
                      `:""}
                      ${h?x`
                        <span class="bubble-badge update-badge global-badge">
                          <ha-icon icon="mdi:cards-outline" style="color: var(--primary-text-color) !important;"></ha-icon>
                        </span>
                      `:""}
                    </span>
                  </h4>
                  <div class="content" style="margin-top: 4px;">
                    ${getLazyLoadedPanelContent(e,t,!!e._expandedPanelStates[t],()=>x`
                      <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="module-toggles-container">
                          <span class="module-toggles-label">
                            APPLY TO
                          </span>
                          <div class="module-toggles">
                            <button 
                              class="bubble-badge toggle-badge ${p?"install-button":"link-button"}"
                              style="cursor: pointer;"
                              @click=${()=>{(t=>{const n=t.target,o=n.configValue,a=n.checked;e._config.modules=Array.isArray(e._config.modules)?e._config.modules:[];const i=isModuleGlobal(o,e.hass);a?(e._config.modules=e._config.modules.filter(e=>e!==`!${o}`),i||e._config.modules.includes(o)||(e._config.modules=[...e._config.modules,o])):i?(e._config.modules.includes(`!${o}`)||(e._config.modules=[...e._config.modules,`!${o}`]),e._config.modules=e._config.modules.filter(e=>e!==o)):e._config.modules=e._config.modules.filter(e=>e!==o),(0,utils.rC)(e,"config-changed",{config:e._config}),e.requestUpdate()})({target:{checked:!p,configValue:t}})}}
                              style="${"default"===t&&p?"cursor: default;":""}"
                            >
                              <ha-icon icon="mdi:card-outline"></ha-icon>
                              <span>This card</span>
                            </button>
                            
                            ${n?x`
                              <button 
                                class="bubble-badge toggle-badge ${h&&!b?"update-button":"link-button"} ${g?"disabled":""}"
                                style="cursor: pointer; ${g?"opacity: 0.7; cursor: default;":""}"
                                @click=${()=>{g||(async(t,n)=>{await setModuleGlobalStatus(e,t,n)&&(!0===n&&(e._config.modules=Array.isArray(e._config.modules)?e._config.modules.filter(e=>e!==`!${t}`):[]),(0,utils.rC)(e,"config-changed",{config:e._config}),e.requestUpdate(),setTimeout(()=>e.requestUpdate(),100))})(t,!h)}}
                                ?disabled=${g}
                              >
                                <ha-icon icon="mdi:cards-outline"></ha-icon>
                                <span>${"All cards"}</span>
                              </button>
                              ${g&&!m?x`
                                <button 
                                  class="bubble-badge toggle-badge"
                                  style="padding: 4px;"
                                  @click=${n=>{n.stopPropagation(),e._helpModuleId=e._helpModuleId===t?null:t,e.requestUpdate()}}
                                  title="Show help"
                                >
                                  <ha-icon icon="mdi:help"></ha-icon>
                                </button>
                              `:""}
                            `:""}
                          </div>
                        </div>
                        
                        <!-- Module Action Buttons -->
                        <div class="module-actions">
                          ${k?x`
                            <button 
                              class="icon-button update-button" 
                              style="margin: 0 24px;"
                              @click=${()=>{e._selectedModuleTab=1,e._storeSearchQuery=a,e.requestUpdate()}} 
                              title="Update Module"
                            >
                              <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                              Update
                            </button>
                          `:""}
                          <button class="icon-button" @click=${()=>editModule(e,t)} title="Edit Module">
                            <ha-icon icon="mdi:pencil"></ha-icon>
                          </button>
                          ${_isModuleInstalledViaYaml&&_isModuleInstalledViaYaml(t)||"default"===t?"":x`
                              <button class="icon-button" @click=${()=>deleteModule(e,t)} title="Delete Module">
                                <ha-icon icon="mdi:delete"></ha-icon>
                              </button>
                            `}
                        </div>
                      </div>
                      <hr>

                      ${e._helpModuleId===t?x`
                        <div class="bubble-info">
                          <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Why "All cards" is disabled?
                          </h4>
                          <div class="content">
                            <p>Modules with custom editors cannot be applied globally. This feature is reserved for modules that only apply styles.</p>
                          </div>
                        </div>
                      `:""}

                      ${r.length>0?x`
                          <h4 class="${p?"":"disabled"}">
                            <ha-icon icon="mdi:cog"></ha-icon>
                            Configuration
                          </h4>
                          <ha-form
                            class="${p?"":"disabled"}"
                            .hass=${e.hass}
                            .data=${_}
                            .schema=${w}
                            .computeLabel=${e._computeLabelCallback}
                            .disabled=${!p}
                            @value-changed=${n=>e._valueChangedInHaForm(n,t,r)}
                          ></ha-form>
                          <hr>
                        `:""}

                      <div class="bubble-info" style="display: ${i?"":"none"}">
                        <h4 class="bubble-section-title">
                          <ha-icon icon="mdi:information-outline"></ha-icon>
                            About this module
                        </h4>
                        <div class="content">
                          ${x`<span .innerHTML=${i}></span>`}
                        </div>
                      </div>

                      ${c||d||u?x`
                          <h4 class="version module-version">
                            ${c?`Created by ${c}`:""}
                            <span class="version-number">
                              ${d?x`<a href="${d}" target="_blank" rel="noopener noreferrer">Module link</a> • `:""}
                              ${u||""}
                            </span>
                          </h4>
                          `:""}
                    `)}
                  </div>
                </ha-expansion-panel>
              `})}
          `}

          <hr>
          ${e._showNewModuleForm||e._editingModule||!n?"":x`
          <div class="module-editor-buttons-container" style="display: flex;">
            <button class="icon-button" style="flex: 1;" @click=${()=>{e._showNewModuleForm=!0,e._showManualImportForm=!1,e._generateUniqueModuleId&&(e._newModuleTemplate.id=e._generateUniqueModuleId("my_module")),e._editingModule={...e._newModuleTemplate},e._config.modules||(e._config.modules=e._config.style_templates||[]),e._config.modules.includes(e._editingModule.id)||(e._config.modules=[...e._config.modules,e._editingModule.id],(0,utils.rC)(e,"config-changed",{config:e._config})),e.requestUpdate(),setTimeout(()=>(0,modules_utils.XY)(e),0)}}>
              <ha-icon icon="mdi:puzzle-plus"></ha-icon>
              Create new Module
            </button>
            
            <button class="icon-button" style="flex: 1;" @click=${()=>{e._showManualImportForm=!0,e._showNewModuleForm=!1,e._manualYamlContent="",e.requestUpdate(),setTimeout(()=>(0,modules_utils.XY)(e),0)}}>
              <ha-icon icon="mdi:code-json"></ha-icon>
              Import from YAML
            </button>
          </div>
          `}
        `:makeModuleStore(e)}

        <div class="bubble-info">
          <h4 class="bubble-section-title">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            Modules
          </h4>
          <div class="content">
            <p>Modules are really powerful and the best way to apply <a href="https://github.com/Clooos/Bubble-Card#styling" target="_blank" rel="noopener noreferrer">custom styles</a> and/or <a href="https://github.com/Clooos/Bubble-Card#templates" target="_blank" rel="noopener noreferrer">JS templates</a> to your cards, without having to copy/paste the same code over and over again.</p>
            <p>This makes it easy to change things like the styles of all your cards, and for advanced users, to modify or add features with a real editor.</p>
            <p><b>If coding isn't your thing</b>, you can also find and install modules made by the community in the <b>Module Store</b>.</p>
          </div>
        </div>
      </div>
    </ha-expansion-panel>
  `;return isSlTabGroupAvailable()&&requestAnimationFrame(()=>{const n=e.shadowRoot?.getElementById(t);if(n&&"function"==typeof n.show){const t=void 0!==e._selectedModuleTab?e._selectedModuleTab.toString():"0";n.show(t)}}),i}const editor_styles_namespaceObject='div {\n  display: grid;\n  grid-gap: 12px;\n}\n\nha-combo-box[label="Card type"]::after {\n  content: "";\n  position: relative;\n  background-color: var(--background-color, var(--secondary-background-color));\n  display: block;\n  width: 100%;\n  height: 1px;\n  top: 12px;\n  margin-bottom: 12px !important;\n  opacity: 0.6;\n}\n\n#add-button {\n  margin: 0 0 14px 0;\n  color: var(--text-primary-color);\n  width: 100%;\n  height: 32px;\n  border-radius: 16px;\n  border: none;\n  background-color: var(--accent-color);\n  cursor: pointer;\n}\n\np {\n  margin-bottom: 4px;\n}\n\nul {\n  margin: 0px 14px !important;\n  padding-left: 0px !important;\n}\n\nha-icon, a, p, button, h4 {\n  color: var(--primary-text-color) !important;\n}\n\nhr {\n  display: inline-block;\n  width: 100%;\n  height: 1px;\n  border: none;\n  background-color: var(--outline-color);\n  margin: 8px 0 0 0;\n}\n\ncode, code-block {\n  background: rgba(0,120,180,0.3);\n  color: var(--primary-text-color);\n  background-blend-mode: darken;\n  padding: 1px 3px;\n  border-radius: 6px;\n  font-size: 13px;\n}\n\ncode-block {\n  display: grid;\n  width: 100%;\n  padding: 0;\n  max-height: 285px;\n  overflow: auto;\n}\n\ncode-block pre {\n  white-space: pre;\n  overflow: auto;\n  margin: 8px;\n}\n\ncode-block.with-i pre {\n  white-space: pre-line;\n  overflow: auto;\n  margin: 8px;\n}\n\ncode-block.with-i pre > i {\n  white-space: pre;\n  font-style: normal;\n}\n\nimg {\n  max-width: 100%;\n  margin: 14px 0;\n}\n\nimg.example {\n  padding: 32px;\n  box-sizing: border-box;\n  background: rgba(0, 120, 180, 0.8);\n  border-radius: 6px;\n}\n\n.button-header {\n  height: auto;\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  margin: 0 8px;\n}\n\n.button-number {\n  display: inline-flex;\n  width: auto;\n}\n\n.remove-button {\n  display: inline-flex;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  text-align: center;\n  line-height: 24px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.content {\n  margin: 12px 4px 14px 4px;\n}\n\nh4 > ha-icon {\n  margin: 8px 12px 8px 8px;\n}\n\nha-expansion-panel h4:not(.version) {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\nha-form {\n  --expansion-panel-summary-padding: 2px 14px;\n}\n\nha-textfield {\n  width: 100%;\n}\n\nh3 {\n  margin: 4px 0;\n}\n\n.code-editor {\n  overflow: scroll;\n}\n\n.icon-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(0,120,180,0.5);\n  border: none;\n  cursor: pointer;\n  margin: 0;\n  border-radius: 32px;\n  font-size: 13px;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n\n.icon-button:hover {\n  background: rgba(0,120,180,0.7);\n  transform: translateY(-1px);\n}\n\n.icon-button:active {\n  background: rgba(0,120,180,0.9);\n}\n\n.icon-button.header {\n  background: none;\n  padding: 0;\n  margin: 0 4px;\n}\n\n.button-container {\n  display: flex;\n  margin-left: auto !important;\n}\n\nha-card-conditions-editor {\n  margin-top: -12px;\n}\n\n.disabled {\n  opacity: 0.5; \n  pointer-events: none;\n}\n\n.version {\n  font-size: 12px !important;\n  color: #fff;\n  background: rgba(0,0,0,0.1);\n  padding: 8px 16px;\n  border-radius: 32px;\n}\n\n.module-version {\n  margin: 0;\n}\n\n.version-number {\n  font-size: 10px;\n  background: rgba(0,120,180,1);\n  padding: 0px 8px;\n  border-radius: 12px;\n  margin-right: -6px;\n  float: right;\n  color: white;\n}\n\n.version-number a {\n  color: white !important;\n}\n\n.bubble-info-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.bubble-section-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: -6px !important;\n  color: var(--primary-text-color) !important;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 4px;\n}\n\n.bubble-section-title ha-icon {\n  color: var(--info-color) !important;\n  margin: 8px 8px 8px 0;\n  line-height: normal !important;\n}\n\n.bubble-section-title::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--primary-color);\n  border-radius: 2px;\n}\n\n.bubble-info {\n  padding: 0 0 14px;\n  position: relative;\n  overflow: auto;\n}\n\n.bubble-info .content {\n  margin: 0;\n  padding: 0 18px;\n}\n\n.bubble-info::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--info-color);\n  border-radius: 4px;\n  opacity: 0.12;\n  pointer-events: none;\n}\n\n.bubble-info.warning::before {\n  background-color: var(--warning-color);\n  opacity: 0.15;\n}\n\n.bubble-info.warning .bubble-section-title::before {\n  background: var(--warning-color);\n}\n\n.bubble-info.warning .bubble-section-title ha-icon {\n  color: var(--warning-color) !important;\n}\n\n.bubble-info.error::before {\n  background-color: var(--error-color);\n  opacity: 0.15;\n}\n\n.bubble-info.error .bubble-section-title::before {\n  background: var(--error-color);\n}\n\n.bubble-info.error .bubble-section-title ha-icon {\n  color: var(--error-color) !important;\n}\n\n.bubble-info h4 {\n  margin: 8px 0 0 0;\n  padding: 0 18px;\n}\n\n.bubble-info p {\n  margin: 0;\n}\n\n.bubble-info * {\n  z-index: 1;\n}\n\n.bubble-section-title + p {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bubble-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin: 4px 0;\n  justify-content: flex-start;\n}\n\n.bubble-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px;\n  text-decoration: none;\n  font-size: 13px;\n  transition: all 0.2s ease;\n  box-shadow: none;\n  height: 26px;\n  border: none;\n  position: relative;\n  border-radius: 18px;\n  white-space: nowrap;\n  background-color: var(--mdc-text-field-disabled-line-color);\n}\n\n.bubble-badge:hover {\n  transform: translateY(-1px);\n  background: rgba(0, 120, 180, 0.5);\n}\n\n.bubble-badge ha-icon {\n  color: var(--primary-text-color) !important;\n  --mdc-icon-size: 16px;\n  line-height: normal;\n}\n\n.paypal-icon, .bmc-icon, .patreon-icon {\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.paypal-icon svg, .bmc-icon svg, .patreon-icon svg {\n  width: 100%;\n  height: 100%;\n  fill: var(--primary-text-color);\n}\n\n.bubble-thank-you {\n  margin: 0 !important;\n  padding: 8px !important;\n  opacity: 0.8;\n}\n\n.creator-message {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.creator-message a {\n  display: flex;\n  transition: all 0.2s ease;\n}\n\n.creator-message a:hover {\n  transform: scale(0.95);\n}\n\n.creator-avatar {\n  min-width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  margin: 0;\n}\n\nul.icon-list {\n  list-style-type: none;\n  padding-left: 0 !important;\n  margin-left: 0 !important;\n}\n\nul.icon-list li {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  line-height: 24px;\n}\n\nul.icon-list li ha-icon {\n  min-width: 24px;\n  margin-right: 8px;\n  --mdc-icon-size: 18px;\n}',modules_styles_namespaceObject=':root {\n  --rgb-primary-color: 3, 169, 244;\n  --rgb-info-color: 33, 150, 243;\n  --rgb-warning-color: 255, 152, 0;\n  --rgb-error-color: 244, 67, 54;\n  --rgb-success-color: 76, 175, 80;\n}\n\n/* Module Store Styles */\n.module-store {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: relative;\n  padding-bottom: 40px;\n}\n\n.store-header {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 16px;\n  background-color: var(--card-background-color);\n  border-radius: 16px;\n  padding: 16px;\n  border: 1px solid var(--divider-color);\n  box-shadow: var(--shadow-elevation-1dp);\n  position: relative;\n  overflow: hidden;\n}\n\n.store-header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.store-header-title {\n  font-size: 16px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.store-header-title ha-icon {\n  color: var(--info-color) !important;\n}\n\n.store-refresh-button {\n  color: var(--primary-text-color);\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: var(--shadow-elevation-1dp);\n}\n\n.store-refresh-button:hover {\n  transform: rotate(180deg);\n  box-shadow: var(--shadow-elevation-2dp);\n}\n\n.store-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 32px;\n  overflow: hidden;\n}\n\n.store-search ha-textfield {\n  flex-grow: 1;\n}\n\n.store-filters {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n}\n\n.store-filter-type {\n  flex-grow: 1;\n  min-width: 180px;\n}\n\n.store-modules {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.store-module-card {\n  display: flex;\n  flex-direction: column;\n  border-radius: 16px;\n  border: 1px solid var(--divider-color);\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  background-color: var(--card-background-color);\n  box-shadow: var(--shadow-elevation-1dp);\n  margin-bottom: 16px;\n}\n\n.store-module-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-elevation-3dp);\n}\n\n.store-module-header {\n  position: relative;\n  padding: 16px 16px 0 0;\n  margin: 0;\n  border-radius: 0;\n  border-bottom: 1px solid var(--divider-color);\n}\n\n.store-module-header::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--info-color);\n  border-radius: 0;\n  opacity: 0.12;\n  pointer-events: none;\n}\n\n.store-module-header.warning::before {\n  background-color: var(--warning-color);\n  opacity: 0.15;\n}\n\n.store-module-header .bubble-section-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding-left: 0;\n  margin-bottom: 0px !important;\n  position: relative;\n}\n\n.store-module-header .bubble-section-title::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--primary-color);\n  border-radius: 0 2px 2px 0;\n}\n\n.store-module-header.warning .bubble-section-title::before {\n  background: var(--warning-color);\n}\n\n.store-module-header .bubble-section-title ha-icon {\n  margin: 0 0 0 19px;\n  color: var(--info-color) !important;\n}\n\n.store-module-header.warning .bubble-section-title ha-icon {\n  color: var(--warning-color) !important;\n}\n\n.store-module-header h3 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.store-module-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 0 4px 18px;\n  margin-bottom: 0;\n}\n\n.store-module-badges {\n  margin: 0;\n  justify-content: flex-start;\n}\n\n.store-module-author {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  color: var(--secondary-text-color);\n}\n\n.author-avatar {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  margin: 0;\n  border: 1px solid rgba(0,0,0,0.1);\n}\n\n.store-module-content {\n  padding: 0 16px;\n  background-color: var(--card-background-color);\n  grid-gap: 8px;\n}\n\n.module-description {\n  margin: 0 0 -4px;\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.module-preview-image {\n  border-radius: 12px;\n  max-height: 220px;\n  width: 100%;\n  object-fit: contain;\n  background-color: var(--secondary-background-color);\n  margin: 0;\n  transition: all 0.3s ease;\n}\n\n.module-preview-container {\n  position: relative;\n  margin-top: 8px;\n  overflow: hidden;\n  border-radius: 12px;\n}\n\n.module-preview-zoom-btn {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: var(--primary-color);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0.8;\n  transition: all 0.2s ease;\n  z-index: 5;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.2);\n}\n\n.module-preview-zoom-btn:hover {\n  opacity: 1;\n  transform: scale(1.1);\n}\n\n.module-preview-zoom-btn ha-icon {\n  color: white !important;\n  --mdc-icon-size: 20px;\n}\n\n.module-preview-fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n}\n\n.module-preview-fullscreen img {\n  max-width: 90%;\n  max-height: 90%;\n  object-fit: contain;\n  margin: 0;\n  border-radius: 6px;\n}\n\n.compatibility-warning {\n  margin-top: -8px;\n  margin-bottom: 12px;\n}\n\n.compatibility-warning ha-icon {\n  color: var(--warning-color) !important;\n}\n\n.store-module-actions {\n  margin: 12px 0 12px;\n  justify-content: flex-start;\n  border-top: 1px solid var(--divider-color);\n  padding-top: 12px;\n  display: flex;\n  gap: 8px;\n}\n\n.store-module-card.incompatible .store-module-actions {\n  opacity: 0.8;\n}\n\n.bubble-badge.install-button {\n  background-color: rgba(33, 150, 243, 0.7);\n  color: var(--primary-color);\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.bubble-badge.install-button span {\n  color: var(--primary-text-color);\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n\n.bubble-badge.install-button ha-icon {\n  transition: color 0.2s ease;\n}\n\n.bubble-badge.install-button:hover {\n  transform: translateY(-1px);\n  background-color: rgba(33, 150, 243, 0.9);\n}\n\n.bubble-badge.install-button:hover span,\n.bubble-badge.install-button:hover ha-icon {\n  color: white !important;\n}\n\n.bubble-badge.update-button {\n  background-color: rgb(0, 220, 80);\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.bubble-badge.update-button ha-icon {\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.bubble-badge.update-button:hover {\n  transform: translateY(-1px);\n  background-color: rgb(0, 180, 60);\n}\n\n.bubble-badge.clickable {\n  cursor: pointer;\n}\n\n.bubble-badge.installed-button {\n  background-color: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\n  color: var(--success-color, var(--primary-color));\n  opacity: 0.8;\n  cursor: default;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.bubble-badge.installed-button span {\n  color: var(--primary-text-color);\n  font-weight: 500;\n}\n\n.bubble-badge.installed-button:hover {\n  transform: none;\n  background: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\n}\n\n.bubble-badge.link-button {\n  background-color: rgba(0, 0, 0, 0.06);\n  color: var(--secondary-text-color);\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.bubble-badge.link-button:hover {\n  background-color: rgba(0, 0, 0, 0.12);\n  transform: translateY(-1px);\n}\n\n.bubble-badge.update-badge {\n  background-color: rgb(0, 220, 80);\n  font-weight: 500;\n  font-size: 11px;\n  padding: 2px 8px;\n  height: 20px;\n  margin-left: auto !important;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.bubble-badge.update-badge ha-icon {\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.bubble-badge.update-badge:hover {\n  transform: none;\n}\n\n.bubble-badge.version-badge {\n  background-color: rgba(0, 0, 0, 0.08);\n  color: var(--primary-text-color);\n  font-weight: 500;\n  font-size: 11px;\n  padding: 2px 8px;\n  height: 20px;\n}\n\n.bubble-badge.incompatible-badge {\n  background-color: rgba(var(--rgb-warning-color), 0.12);\n  color: var(--warning-color);\n  font-weight: 500;\n  font-size: 11px;\n  padding: 2px 8px;\n  height: 20px;\n}\n\n.bubble-badge.incompatible-badge::before {\n  background-color: var(--warning-color);\n  opacity: 0.3;\n}\n\n.bubble-badge.new-badge {\n  background-color: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\n  color: var(--primary-text-color);\n  font-weight: 500;\n  font-size: 11px;\n  padding: 2px 8px;\n  height: 20px;\n}\n\n.bubble-badge.new-badge::before {\n  background-color: var(--success-color, #28a745);\n  opacity: 0.2;\n}\n\n.bubble-badge.yaml-badge {\n  background-color: rgba(255, 167, 38, 0.45);\n  color: var(--primary-text-color);\n  font-weight: 700;\n  font-size: 11px;\n  padding: 2px 8px;\n  height: 20px;\n}\n\n.bubble-badge.yaml-badge::before {\n  background-color: #ff9800;\n  opacity: 0.5;\n}\n\n.version-container {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  gap: 8px;\n}\n\n/* Material tabs */\nha-tabs, sl-tab-group {\n  margin-bottom: 16px;\n  --primary-tab-color: var(--primary-color);\n  --secondary-tab-color: var(--secondary-text-color);\n  border-bottom: 1px solid var(--divider-color);\n  top: 0;\n  position: sticky;\n  background-color: var(--card-background-color);\n  z-index: 6;\n  padding-top: 16px;\n  margin-top: -24px;\n  top: -40px;\n}\n\nsl-tab-group {\n  border-bottom: none;\n}\n.module-editor-top-marker {\n  display: flex;\n  position: relative;\n  top: 0;\n}\n\npaper-tab {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 120px;\n  font-weight: 500;\n  font-size: 14px;\n  transition: all 0.3s ease;\n  position: relative;\n  color: var(--secondary-tab-color);\n  padding: 0 16px;\n  opacity: 0.8;\n}\n\npaper-tab[aria-selected="true"] {\n  color: var(--primary-text-color);\n  opacity: 1;\n}\n\npaper-tab ha-icon {\n  margin-right: 8px;\n  color: var(--secondary-tab-color);\n}\n\npaper-tab[aria-selected="true"] ha-icon {\n  color: var(--primary-tab-color) !important;\n}\n\npaper-tab::after {\n  content: \'\';\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 3px;\n  background-color: var(--primary-tab-color);\n  transition: all 0.3s ease;\n  transform: translateX(-50%);\n  border-radius: 3px 3px 0 0;\n  opacity: 0;\n}\n\npaper-tab[aria-selected="true"]::after {\n  width: 80%;\n  opacity: 1;\n}\n\npaper-tab:hover {\n  background-color: rgba(var(--rgb-primary-color), 0.05);\n}\n\n/* Tab ripple effect */\npaper-ripple {\n  color: var(--primary-tab-color);\n  opacity: 0.1;\n}\n\n#tabs {\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n  background-color: var(--card-background-color);\n  box-shadow: var(--shadow-elevation-1dp);\n}\n\n@media (max-width: 600px) {\n  paper-tab {\n    min-width: auto;\n    padding: 0 12px;\n    font-size: 13px;\n  }\n}\n\nsl-tab {\n  flex: 1;\n  text-align: center;\n}\n\n.bubble-badge.hoverable {\n  cursor: pointer !important;\n  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;\n}\n\n.bubble-badge.hoverable:active {\n  transform: translateY(0);\n}\n\n/* Back to top button */\n.back-to-top-button {\n  position: sticky;\n  bottom: 0px;\n  right: 20px;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background-color: var(--primary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(0,0,0,0.3);\n  transition: all 0.2s ease;\n  z-index: 10;\n  margin-left: auto;\n  margin-top: 16px;\n}\n\n.back-to-top-button:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 10px rgba(0,0,0,0.3);\n}\n\n.back-to-top-button:active {\n  transform: translateY(0);\n  box-shadow: 0 1px 3px rgba(0,0,0,0.3);\n}\n\n.back-to-top-button ha-icon {\n  color: white !important;\n  --mdc-icon-size: 22px;\n}\n\n.store-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 42px;\n  gap: 24px;\n  position: relative;\n  background-color: var(--card-background-color);\n  border-radius: 16px;\n  border: 1px solid var(--divider-color);\n  box-shadow: var(--shadow-elevation-1dp);\n  overflow: hidden;\n}\n\n.bubble-loading-icon {\n  position: relative;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 8px;\n}\n\n.icon-center-wrapper {\n  position: absolute;\n  top: 3px;\n  left: 6px;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n\n.bubble-loading-icon ha-icon {\n  --mdc-icon-size: 26px;\n  color: var(--primary-color);\n  opacity: 0.9;\n  animation: pulseAnimation 3s ease-in-out infinite;\n  margin: 0;\n  padding: 0;\n}\n\n.bubble-loading-orbit {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 2px dashed rgba(var(--rgb-primary-color), 0.2);\n  border-radius: 50%;\n  animation: orbitRotation 8s linear infinite;\n}\n\n.bubble-loading-satellite {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background-color: var(--info-color);\n  border-radius: 50%;\n  top: -6px;\n  left: calc(50% - 6px);\n  box-shadow: 0 0 10px rgba(var(--rgb-info-color), 0.7);\n  animation: pulseAnimation 2s ease-in-out infinite;\n  transform-origin: center center;\n}\n\n.bubble-progress-container {\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: relative;\n}\n\n.bubble-progress-track {\n  height: 10px;\n  background-color: rgba(var(--rgb-primary-color), 0.12);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  backdrop-filter: blur(4px);\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n  transition: all 0.3s ease;\n  transform: translateZ(0);\n  contain: paint;\n}\n\n.bubble-progress-bar {\n  background: var(--info-color);\n  border-radius: 10px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 10px;\n}\n\n.bubble-progress-glow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.bubble-progress-percentage {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n  color: var(--primary-text-color);\n}\n\n.bubble-progress-text {\n  font-weight: 500;\n}\n\n.bubble-progress-value {\n  font-weight: 600;\n  color: var(--primary-color);\n  font-variant-numeric: tabular-nums;\n}\n\n.bubble-progress-dots {\n  display: flex;\n  gap: 4px;\n}\n\n.bubble-progress-dots .dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: var(--primary-color);\n  opacity: 0.5;\n}\n\n.bubble-progress-dots .dot:nth-child(1) {\n  animation: dotAnimation 1.4s ease-in-out infinite;\n}\n\n.bubble-progress-dots .dot:nth-child(2) {\n  animation: dotAnimation 1.4s ease-in-out 0.2s infinite;\n}\n\n.bubble-progress-dots .dot:nth-child(3) {\n  animation: dotAnimation 1.4s ease-in-out 0.4s infinite;\n}\n\n@keyframes orbitRotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pulseAnimation {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.9;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n}\n\n@keyframes glowAnimation {\n  0% {\n    --x: 0%;\n    opacity: 0.5;\n  }\n  50% {\n    --x: 100%;\n    opacity: 1;\n  }\n  100% {\n    --x: 0%;\n    opacity: 0.5;\n  }\n}\n\n@keyframes dotAnimation {\n  0%, 100% {\n    transform: translateY(0);\n    opacity: 0.5;\n  }\n  50% {\n    transform: translateY(-4px);\n    opacity: 1;\n  }\n}\n\n/* Styles for the supported cards selector */\n.checkbox-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 8px;\n}\n\n@media (max-width: 600px) {\n  .checkbox-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n/* Module Editor Styles */\n.module-actions {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n\n.module-editor-form .card-content {\n  display: grid;\n  grid-gap: 16px;\n  padding: 0;\n}\n\n.module-editor-form h3 {\n  margin: 8px 0;\n  color: var(--primary-text-color);\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.module-editor-form h4:not(.bubble-section-title) {\n  margin: 0 !important;\n  font-size: 16px;\n}\n\n.module-editor-form ha-code-editor {\n  max-height: 600px;\n  border: 1px solid var(--divider-color);\n  border-radius: 4px;\n}\n\n.module-editor-form ha-textarea {\n  width: 100%;\n}\n\n.module-actions .icon-button {\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.module-actions .icon-button {\n  background: none;\n}\n\n.module-actions .icon-button ha-icon {\n  --mdc-icon-size: 18px;\n}\n\n.code-editor-container, .editor-schema-container {\n  position: relative;\n  margin-bottom: 8px;\n  overflow: auto;\n}\n\n.code-editor-container ha-code-editor {\n  height: auto; \n  max-width: 100%;\n  border: 1px solid var(--divider-color);\n  border-radius: 4px;\n  overflow: auto;\n}\n\n.form-preview {\n  border: 1px solid var(--divider-color);\n  border-radius: 8px;\n  padding: 16px;\n}\n\n.form-preview h4 {\n  margin-top: 0;\n  margin-bottom: 16px;\n  color: var(--primary-color);\n  display: flex;\n  align-items: center;\n}\n\n.form-preview-container {\n  padding: 8px;\n  border-radius: 4px;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n\n.export-section {\n  margin-top: 12px;\n}\n\n.export-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 8px;\n  margin-bottom: 16px;\n}\n\n.export-buttons .icon-button {\n  flex: 1;\n  min-width: 160px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 16px;\n}\n\n.export-preview {\n  margin-top: 12px;\n  padding: 8px;\n  border: 1px solid var(--divider-color);\n  border-radius: 8px;\n  max-height: 300px;\n  overflow: auto;\n  background: var(--secondary-background-color);\n}\n\n.export-preview pre {\n  margin: 0;\n  white-space: pre-wrap;\n  font-family: monospace;\n  font-size: 12px;\n  line-height: 1.4;\n  padding: 8px;\n}\n\nha-expansion-panel {\n  --input-fill-color: none;\n}\n\n@keyframes highlight {\n  0% { background-color: rgba(var(--rgb-primary-color), 0.2); }\n  100% { background-color: var(--secondary-background-color); }\n}\n\n.helper-text {\n  display: block;\n  color: var(--secondary-text-color);\n  font-size: 12px;\n  margin-top: -4px;\n  margin-bottom: 8px;\n}\n\n.helper-text a {\n  color: var(--primary-color);\n}\n\n.helper-text a:hover {\n  opacity: 0.8;\n}\n\n.bubble-info > div {\n  --mdc-icon-size: 18px;\n}\n\nha-formfield.apply-module-button {\n  height: 40px;\n  border-radius: 32px;\n  padding: 0 16px;\n  background-color: rgba(0, 0, 0, 0.1);;\n}\n\n.module-editor-buttons-container {\n  display: flex; \n  gap: 8px; \n  justify-content: flex-end;\n  position: sticky;\n  bottom: -24px;\n  background-color: var(--card-background-color);\n  padding: 8px 0;\n  z-index: 1;\n}\n\n.module-toggles-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.module-toggles-label {\n  font-size: 0.85em;\n  font-weight: 500;\n  color: var(--secondary-text-color);\n  padding-left: 4px;\n  margin-bottom: -4px;\n}\n\n.module-toggles {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n\n.module-badges {\n  display: inline-flex;\n  margin-left: auto;\n  gap: 4px;\n}\n\n.module-badges .update-badge {\n  margin-left: 0 !important;\n}\n\n.global-badge {\n  background-color: transparent !important;\n  border: 1px solid rgb(0, 220, 80);\n  padding: 1px 3px !important;\n}\n\n.update-badge + .global-badge {\n  margin-left: 4px !important;\n}\n\n.toggle-badge {\n  cursor: pointer !important;\n  border: 1px solid var(--primary-text-color);\n}';class BubbleCardEditor extends lit_element_i{_previewStyleApplied=!1;_entityCache={};_cachedAttributeList=null;_cachedAttributeListEntity=null;_expandedPanelStates={};_moduleErrorCache={};_moduleCodeEvaluating=null;constructor(){super(),this._expandedPanelStates={}}setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config?.card_type||""}get _button_type(){return this._config?.button_type||("pop-up"===this._config?.card_type?"":"switch")}get _entity(){return this._config?.entity||""}get _selectable_attributes(){return["source_list","sound_mode_list","hvac_modes","fan_modes","swing_modes","preset_modes","effect_list"]}updated(e){super.updated(e),e.has("hass")&&(this.listsUpdated=!1,this._entityCache={},this._cachedAttributeList=null,this._cachedAttributeListEntity=null)}async firstUpdated(e){if(super.firstUpdated(e),this.hass&&this.hass.loadFragmentTranslation)try{await this.hass.loadFragmentTranslation("config")}catch(e){console.error("Bubble Card Editor: Failed to load 'config' fragment translation",e)}}render(){if(!this.hass)return x``;const e=setupTranslation(this.hass);if(!this._previewStyleApplied){const e=document.querySelector("body > home-assistant"),t=e?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot?.querySelector("ha-dialog > div.content > div.element-preview");t?.style&&"sticky"!==t.style.position&&(t.style.position="sticky",t.style.top="0",t.style.height="calc(100vh - 224px)",t.style.overflowY="auto",this._previewStyleApplied=!0)}this.listsUpdated||(this._initializeLists(e),this.listsUpdated=!0);const t=this.cardTypeList;switch(this.buttonTypeList,this._config?.card_type){case"pop-up":return renderPopUpEditor(this);case"button":return renderButtonEditor(this);case"separator":return renderSeparatorEditor(this);case"horizontal-buttons-stack":return renderHorButtonStackEditor(this);case"cover":return renderCoverEditor(this);case"media-player":return renderMediaPlayerEditor(this);case"empty-column":return renderEmptyColumnEditor(this);case"select":return renderSelectEditor(this);case"climate":return renderClimateEditor(this);case"calendar":return renderCalendarEditor(this);case void 0:return x`
                    <div class="card-config">
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                You need to add a card type first
                            </h4>
                        </div>
                        ${this.makeDropdown("Card type","card_type",t)}
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
                `}}makeLayoutOptions(){const e=window.isSectionView?"large":"normal",t="separator"===this._config.card_type?"0.8":"1",n="pop-up"!==this._config.card_type&&(this._config.card_layout?.includes("large")||window.isSectionView&&!this._config.card_layout);return x`
            <ha-combo-box
                label="${"pop-up"===this._config.card_type?"Header card layout":"Card layout"}"
                .value="${this._config.card_layout||e}"
                .configValue="${"card_layout"}"
                .items="${[{label:"Normal (previous default)",value:"normal"},{label:"Large",value:"large"},{label:"Large with 2 sub-buttons rows",value:"large-2-rows"},{label:"Large with sub-buttons in a grid (Layout: min. 2 rows)",value:"large-sub-buttons-grid"}]}"
                @value-changed="${this._valueChanged}"
            ></ha-combo-box>
            ${this._renderConditionalContent(n,x`
                <ha-textfield
                    label="Rows"
                    type="number"
                    inputMode="numeric"
                    min="0"
                    step="0.1"
                    .disabled="${this._config.grid_options?.rows}"
                    .value="${this._config.rows||this._config.grid_options?.rows||t}"
                    .configValue="${"rows"}"
                    @input="${this._valueChanged}"
                ></ha-textfield>
            `)}
            ${this._renderConditionalContent(this._config.grid_options?.rows,x`
            <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    Rows are already set in the "Layout" options
                </h4>
                <div class="content">
                    <p>If you want to change the rows, you can do it in the "Layout" options at the top of this editor. Or remove it from your config in YAML to enable this option.</p>
                </div>
            </div>
            `)}
        `}makeShowState(e=this._config,t="",n=!1,o){const a=e?.entity??this._config.entity??"",i="name"===this._config.button_type,r=a?.startsWith("input_select")||a?.startsWith("select")||e.select_attribute,s=e?.show_attribute?Object.keys(this.hass.states[a]?.attributes||{}).map(e=>{let t=this.hass.states[a];return{label:this.hass.formatEntityAttributeName(t,e),value:e}}):[];return x`

            ${this._renderConditionalContent("sub_button"!==n,x`
                <ha-formfield .label="Text scrolling effect">
                    <ha-switch
                        aria-label="Text scrolling effect"
                        .checked=${e?.scrolling_effect??!0}
                        .configValue="${t+"scrolling_effect"}"
                        @change="${n?e=>this._arrayValueChange(o,{scrolling_effect:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Text scrolling effect</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent("sub_button"===n,x`
                <ha-formfield .label="Show background">
                    <ha-switch
                        aria-label="Show background when entity is on"
                        .checked=${e?.show_background??!0}
                        @change="${e=>this._arrayValueChange(o,{show_background:e.target.checked},n)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Show background when entity is on</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent("sub_button"===n&&(e?.show_background??!0),x`
                <ha-formfield .label="Background color based on state">
                    <ha-switch
                        aria-label="Background color based on state"
                        .checked=${e?.state_background??!0}
                        @change="${e=>this._arrayValueChange(o,{state_background:e.target.checked},n)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Background color based on state</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent("sub_button"===n&&(e?.state_background??!0)&&a.startsWith("light"),x`
                <ha-formfield .label="Background color based on light color">
                    <ha-switch
                        aria-label="Background color based on light color"
                        .checked=${e?.light_background??!0}
                        @change="${e=>this._arrayValueChange(o,{light_background:e.target.checked},n)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Background color based on light color</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent("sub_button"!==n&&a.startsWith("light"),x`
                <ha-formfield .label="Use accent color instead of light color">
                    <ha-switch
                        aria-label="Use accent color instead of light color"
                        .checked=${e?.use_accent_color??!1}
                        .configValue="${t+"use_accent_color"}"
                        @change="${this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Use accent color instead of light color</label> 
                    </div>
                </ha-formfield>
            `)}
            <ha-formfield .label="Show icon">
                <ha-switch
                    aria-label="Show icon"
                    .checked=${e?.show_icon??!0}
                    .configValue="${t+"show_icon"}"
                    @change="${n?e=>this._arrayValueChange(o,{show_icon:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show icon</label> 
                </div>
            </ha-formfield>
            ${this._renderConditionalContent("sub_button"!==n,x`
                <ha-formfield .label="Prioritize icon over entity picture">
                    <ha-switch
                        aria-label="Prioritize icon over entity picture"
                        .checked=${e?.force_icon??!1}
                        .configValue="${t+"force_icon"}"
                        .disabled="${i}"
                        @change="${n?e=>this._arrayValueChange(o,{force_icon:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Prioritize icon over entity picture</label> 
                    </div>
                </ha-formfield>
            `)}
            <ha-formfield .label="Show name">
                <ha-switch
                    aria-label="Show name"
                    .checked=${!!(e?.show_name??"sub_button"!==n)}
                    .configValue="${t+"show_name"}"
                    @change="${n?e=>this._arrayValueChange(o,{show_name:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show name</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show entity state">
                <ha-switch
                    aria-label="Show entity state"
                    .checked="${e?.show_state??"state"===e.button_type}"
                    .configValue="${t+"show_state"}"
                    .disabled="${i&&"sub_button"!==n}"
                    @change="${n?e=>this._arrayValueChange(o,{show_state:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show entity state</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show last changed">
                <ha-switch
                    aria-label="Show last changed"
                    .checked=${e?.show_last_changed}
                    .configValue="${t+"show_last_changed"}"
                    .disabled="${i&&"sub_button"!==n}"
                    @change="${n?e=>this._arrayValueChange(o,{show_last_changed:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show last changed</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show last updated">
                <ha-switch
                    aria-label="Show last updated"
                    .checked=${e?.show_last_updated}
                    .configValue="${t+"show_last_updated"}"
                    .disabled="${i&&"sub_button"!==n}"
                    @change="${n?e=>this._arrayValueChange(o,{show_last_updated:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show last updated</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show attribute">
                <ha-switch
                    aria-label="Show attribute"
                    .checked=${e?.show_attribute}
                    .configValue="${t+"show_attribute"}"
                    .disabled="${i&&"sub_button"!==n}"
                    @change="${n?e=>this._arrayValueChange(o,{show_attribute:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show attribute</label> 
                </div>
            </ha-formfield>
            ${this._renderConditionalContent(e?.show_attribute,x`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="Attribute to show"
                        .value="${e?.attribute}"
                        .configValue="${t+"attribute"}"
                        .items="${s}"
                        .disabled="${i}"
                        @value-changed="${n?e=>this._arrayValueChange(o,{attribute:e.detail.value},n):this._valueChanged}"
                    ></ha-combo-box>
                </div>
            `)}
            ${this._renderConditionalContent("sub_button"===n&&r,x`
                <ha-formfield .label="Show arrow (Select entities only)">
                    <ha-switch
                        aria-label="Show arrow (Select entities only)"
                        .checked=${e?.show_arrow??!0}
                        .configValue="${t+"show_arrow"}"
                        @change="${n?e=>this._arrayValueChange(o,{show_arrow:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Show arrow (Select menu only)</label> 
                    </div>
                </ha-formfield>
            `)}
        `}makeDropdown(e,t,n,o){if(e.includes("icon")||e.includes("Icon"))return x`
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
            `;if(e.includes("Entity")||e.includes("entity")){let n=[],a=[];switch(this._config.card_type){case"button":default:break;case"cover":n=["cover"];break;case"climate":n=["climate"];break;case"media-player":n=["media_player"];break;case"select":n=["input_select","select"],this._config.select_attribute&&(n=[])}return x`
                <ha-entity-picker
                    label="${e}"
                    .hass="${this.hass}"
                    .value="${this._config[t]}"
                    .configValue="${t}"
                    .includeDomains="${n.length?n:void 0}"
                    .excludeDomains="${a.length?a:void 0}"
                    .disabled="${o}"
                    allow-custom-entity
                    @value-changed="${this._valueChanged}"
                ></ha-entity-picker>
            `}return x`
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
          `}_renderConditionalContent(e,t){return e?t:x``}makeActionPanel(e,t=this._config,n,o,a=this._config){const i="Tap action"===e?"mdi:gesture-tap":"Double tap action"===e?"mdi:gesture-double-tap":"Hold action"===e?"mdi:gesture-tap-hold":"mdi:gesture-tap",r="Tap action"===e?"tap_action":"Double tap action"===e?"double_tap_action":"Hold action"===e?"hold_action":"Open action"===e?"open_action":"close_action",s=o?`action_panel_${o}_${a}_${r}`:`action_panel_config_${r}`;let l;try{l="Tap action"===e?t.tap_action:"Double tap action"===e?t.double_tap_action:"Hold action"===e?t.hold_action:"Open action"===e?t.open_action:t.close_action}catch{}const c=t===this._config;return n||(n=c&&"Tap action"===e?"name"!==this._config.button_type?"more-info":"none":c?"none":""),x`
            <ha-expansion-panel 
                outlined
                @expanded-changed=${e=>{this._expandedPanelStates[s]=e.target.expanded,this.requestUpdate()}}
            >
                <h4 slot="header">
                    <ha-icon icon="${i}"></ha-icon>
                    ${e}
                </h4>
                <div class="content"> 
                    ${getLazyLoadedPanelContent(this,s,!!this._expandedPanelStates[s],()=>x`
                        <ha-form
                            .hass=${this.hass}
                            .data=${t}
                            .configValue="${(o?o+".":"")+(parseInt(a)==a?a+".":"")+r}" 
                            .schema=${[{name:r,label:e,selector:{ui_action:{default_action:n}}}]}  
                            .computeLabel=${this._computeLabelCallback}
                            @value-changed=${e=>this._ActionChanged(e,o,a)}
                        ></ha-form>
                        ${"call-service"===l?.action||"perform-action"===l?.action?x`
                            <ha-formfield .label="Use default entity">
                                <ha-switch
                                    aria-label="Use default entity"
                                    .configValue="${(o?o+".":"")+(parseInt(a)==a?a+".":"")+r+".default_entity"}" 
                                    .checked=${"entity"===l?.target?.entity_id}
                                     @change=${this._updateActionsEntity}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Use default entity</label> 
                                </div>
                            </ha-formfield>
                        `:""}
                    `)}
                </div>
            </ha-expansion-panel>
        `}makeSubButtonPanel(){return makeSubButtonPanel(this)}makeVersion(){return x`
            <h4 class="version">
                Bubble Card 
                <span class="version-number">
                    ${version}
                </span>
            </h4>
        `}makeStyleEditor(){const e="style_editor_panel";return x`
            <ha-expansion-panel 
                outlined
                @expanded-changed="${t=>{this._expandedPanelStates[e]=t.target.expanded,this.requestUpdate()}}"
            >
                <h4 slot="header">
                    <ha-icon icon="mdi:code-braces"></ha-icon>
                    Custom styles & JS templates
                </h4>
                <div class="content">
                    ${getLazyLoadedPanelContent(this,e,!!this._expandedPanelStates[e],()=>x`
                        <div class="code-editor">
                            <ha-code-editor
                                mode="yaml"
                                autofocus
                                autocomplete-entities
                                autocomplete-icons
                                .hass=${this.hass}
                                .value=${this._config.styles}
                                .configValue="${"styles"}"
                                @value-changed=${e=>{this._valueChanged(e),this._clearCurrentCardError()}}
                            ></ha-code-editor>
                        </div>
                        ${this.createErrorConsole()}
                    `)}
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
        `}_clearCurrentCardError(){if(!window.bubbleCardErrorRegistry)return;const e=this._config?.card_type,t=this._config?.entity;if(!e||!t)return;const n=`${e}_${t}`;window.bubbleCardErrorRegistry[n]&&(delete window.bubbleCardErrorRegistry[n],this.errorMessage="",this.errorSource="",this.requestUpdate())}_clearCurrentModuleError(e){this._moduleCodeEvaluating=e,this.errorMessage="",this.errorSource="",this.requestUpdate()}createErrorConsole(e=this){window.bubbleCardErrorRegistry||(window.bubbleCardErrorRegistry={});const t=()=>{if(void 0!==e._editingModule&&e._editingModule){const t=e._editingModule.id;if(!t)return e.errorMessage="",void(e.errorSource="");let n=!1;window.bubbleCardErrorRegistry&&Object.values(window.bubbleCardErrorRegistry).forEach(o=>{o.moduleId===t&&(e.errorMessage=o.message,e.errorSource=o.source,n=!0)}),n||(e.errorMessage="",e.errorSource="")}else{const t=e._config?.card_type,n=e._config?.entity;if(!t||!n)return e.errorMessage="",void(e.errorSource="");const o=`${t}_${n}`;if(window.bubbleCardErrorRegistry&&window.bubbleCardErrorRegistry[o]){const t=window.bubbleCardErrorRegistry[o];e.errorMessage=t.message,e.errorSource=t.source}else e.errorMessage="",e.errorSource=""}e.requestUpdate()};return e._errorListener||(e._errorListener=e=>{const n=e.detail;if(n&&"object"==typeof n&&n.context){const{message:e,context:t}=n;if(e){if(t.cardType&&t.entityId){const n=`${t.cardType}_${t.entityId}`;window.bubbleCardErrorRegistry[n]={message:e,source:"module"===t.sourceType?`Module ('${t.moduleId}')`:"Card Configuration (styles section)",cardType:t.cardType,entityId:t.entityId,moduleId:"module"===t.sourceType?t.moduleId:null}}}else if("module"===t.sourceType&&t.moduleId)Object.keys(window.bubbleCardErrorRegistry).forEach(e=>{window.bubbleCardErrorRegistry[e]?.moduleId===t.moduleId&&delete window.bubbleCardErrorRegistry[e]});else if(t.cardType&&t.entityId){const e=`${t.cardType}_${t.entityId}`;window.bubbleCardErrorRegistry[e]&&delete window.bubbleCardErrorRegistry[e]}}t()},window.addEventListener("bubble-card-error",e._errorListener)),t(),x`
            <div class="bubble-info error" 
                style="display: ${e.errorMessage?"":"none"}; margin-bottom: 8px;">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Error in JS template
                </h4>
                <div class="content">
                    <p>${e.errorMessage}</p>
                    ${e._editingModule&&"object"==typeof e._editingModule&&e._editingModule.id?x`<hr><span class="helper-text" style="margin: 0;">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        JS template errors can sometimes be delayed in the Module Editor.
                    </span>`:""}
                </div>
            </div>
        `}_getProcessedSchema(e,t,n){if(this._processedSchemas&&this._processedSchemas[e])return this._processedSchemas[e];const o=structuredClone(t),a=this._updateAttributeSelectors(o,n,e);return this._processedSchemas={...this._processedSchemas,[e]:a},a}_valueChangedInHaForm(e,t,n){let o=e.detail.value;if(o&&"object"==typeof o&&!Array.isArray(o)){const e=Object.keys(o);e.length>0&&e.every(e=>!isNaN(parseInt(e,10)))&&(o=e.sort((e,t)=>parseInt(e,10)-parseInt(t,10)).map(e=>o[e]))}this._workingModuleConfigs&&(this._workingModuleConfigs[t]=o);const a=this._cleanEmpty(o,t),i=structuredClone(n),r=this._updateAttributeSelectors(i,a,t);this._processedSchemas={...this._processedSchemas,[t]:r},(0,utils.rC)(this,"config-changed",{config:{...this._config,[t]:a}})}_cleanEmpty(e,t){if(Array.isArray(e))return e.map(e=>this._cleanEmpty(e,void 0)).filter(e=>!this._isEmpty(e));if(e&&"object"==typeof e){const t={};return Object.keys(e).forEach(n=>{const o=this._cleanEmpty(e[n],n);this._isEmpty(o)||(t[n]=o)}),Object.keys(t).length>0?t:void 0}return"string"!=typeof e||""!==e||"state"===t?e:void 0}_isEmpty(e){return null==e||(Array.isArray(e)?0===e.length:"object"==typeof e&&0===Object.keys(e).length)}_updateAttributeSelectors=(e,t,n=void 0)=>e.map(e=>{e.selector&&e.selector.entity&&(n=t&&t.entity?t.entity:void 0),e.selector&&e.selector.attribute&&(e.selector.attribute.entity_id=n);const o=t&&t[e.name]?t[e.name]:t;return Array.isArray(e.schema)&&(e.schema=this._updateAttributeSelectors(e.schema,o,n)),e});makeModulesEditor(){return makeModulesEditor(this)}makeModuleStore(){return makeModuleStore(this)}_valueChanged(e){const t=e.target,n=e.detail;let o,a=!1;if("HA-SWITCH"===t.tagName?(o=t.checked,a=!0):void 0!==t.value?(o="string"==typeof t.value?t.value.replace(",","."):t.value,a=!0):void 0!==n?.value&&(a=!0),!a)return;if("string"==typeof o&&(o.endsWith(".")||"-"===o))return;let i={...this._config};try{const{configValue:a,checked:r}=t;if(a){const r=a.split(".");if(r.length>1){let a=i,s="";for(let e=0;e<r.length-1;e++){const t=r[e];s=s?`${s}.${t}`:t,a[t]||(a[t]={}),a[t]={...a[t]},a=a[t]}const l=r[r.length-1];"input"===e.type?a[l]=o:n&&a[l]!==n.value?a[l]=n.value:"HA-SWITCH"===t.tagName&&(a[l]=o)}else{const a=r[0];"input"===e.type?i[a]=o:n&&i[a]!==n.value?i[a]=n.value:"HA-SWITCH"===t.tagName&&(i[a]=o)}}else i=n.value}catch(e){if(t.configValue&&n)i[t.configValue]=n.value;else{if(!n)return;i=n.value}}this._config=i,(0,utils.rC)(this,"config-changed",{config:i})}_arrayValueChange(e,t,n){if(this._config.sub_button&&!this.subButtonJustAdded)return this.subButtonJustAdded=!0,void setTimeout(()=>this._arrayValueChange(e,t,n),10);this._config[n]=this._config[n]||[];let o=[...this._config[n]];o[e]=o[e]||{},o[e]={...o[e],...t},this._config[n]=o,(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}_ActionChanged(e,t,n){var o=!1;try{e.currentTarget&&e.currentTarget.__schema&&e.currentTarget.__schema[0]&&e.detail.value[e.currentTarget.__schema[0].name]&&e.detail.value[e.currentTarget.__schema[0].name].target&&e.detail.value[e.currentTarget.__schema[0].name].target.entity_id&&"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id[0]&&(o=!0)}catch{}try{e.currentTarget&&e.currentTarget.__schema&&e.currentTarget.__schema[0]&&e.detail.value[e.currentTarget.__schema[0].name]&&e.detail.value[e.currentTarget.__schema[0].name].target&&"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id&&(o=!0)}catch{}if(o&&e.currentTarget&&e.currentTarget.__schema&&e.currentTarget.__schema[0]&&e.detail.value[e.currentTarget.__schema[0].name]&&(e.detail.value[e.currentTarget.__schema[0].name].action="call-service",null!=e.detail.value[e.currentTarget.__schema[0].name].perform_action&&(e.detail.value[e.currentTarget.__schema[0].name].service=""+e.detail.value[e.currentTarget.__schema[0].name].perform_action,delete e.detail.value[e.currentTarget.__schema[0].name].perform_action)),"button_action"===t||"event_action"===t)this._config[t]=e.detail.value;else if(t){this._config[t]=this._config[t]||[];let o=[...this._config[t]];o[n]=e.detail.value,this._config[t]=o}else this._config=e.detail.value;(0,utils.rC)(this,"config-changed",{config:this._config})}_updateActionsEntity(e){let t=JSON.parse(JSON.stringify(this._config));const n=e.target.configValue.split(".");let o=0;for(o=0;o<n.length-2;o++)t=t[n[o]]?t[n[o]]:{};e.target.checked?t[n[o]]?t[n[o]].target={entity_id:"entity"}:t[n[o]]={target:{entity_id:"entity"}}:t[n[o]]&&"entity"===t[n[o]].target?.entity_id&&(t[n[o]].target={});var a={value:t},i={__schema:[{name:n[n.length-2]}]},r={...e,detail:a,currentTarget:i};this._ActionChanged(r,n.length>2?n[0]:null,n.length>3?n[1]:null)}_computeLabelCallback=e=>e.label;_conditionChanged(e,t,n){if(e.stopPropagation(),n){this._config[n]=this._config[n]||[];let o=[...this._config[n]];o[t]=o[t]||{};const a=e.detail.value;o[t]={...o[t],visibility:a},this._config[n]=o}else if("pop-up"===this._config.card_type){const t=e.detail.value;this._config={...this._config,trigger:t}}(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return i`
        ${r(editor_styles_namespaceObject+modules_styles_namespaceObject)}
    `}_initializeLists(e){let t=[];0===Object.keys(this._entityCache).length?Object.keys(this.hass.states).forEach(e=>{const n=this.hass.states[e],o=e.split(".")[0];this._entityCache[o]||(this._entityCache[o]=[]),this._entityCache[o].push(e),this._selectable_attributes.some(e=>n.attributes?.[e])&&(t.includes(e)||t.push(e))}):(["input_select","select"].forEach(e=>{this._entityCache[e]&&(t=[...t,...this._entityCache[e]])}),Object.keys(this.hass.states).forEach(e=>{const n=this.hass.states[e];this._selectable_attributes.some(e=>n.attributes?.[e])&&(t.includes(e)||t.push(e))})),["input_select","select"].forEach(e=>{this._entityCache[e]&&this._entityCache[e].forEach(e=>{t.includes(e)||t.push(e)})}),t=[...new Set(t)];const n={};t.forEach(e=>{this.hass.states[e]&&(n[e]=this.hass.states[e])}),this.inputSelectList={...this.hass},this.inputSelectList.states=n,this._entity?this._entity===this._cachedAttributeListEntity&&this._cachedAttributeList?this.attributeList=this._cachedAttributeList:(this.attributeList=Object.keys(this.hass.states[this._entity]?.attributes||{}).map(e=>{let t=this.hass.states[this._entity];return{label:this.hass.formatEntityAttributeName(t,e),value:e}}),this._cachedAttributeList=this.attributeList,this._cachedAttributeListEntity=this._entity):(this.attributeList=[],this._cachedAttributeList=null,this._cachedAttributeListEntity=null),this.cardTypeList=[{label:"Button (Switch, slider, ...)",value:"button"},{label:e("editor.calendar.name"),value:"calendar"},{label:"Cover",value:"cover"},{label:"Climate",value:"climate"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Media player",value:"media-player"},{label:"Pop-up",value:"pop-up"},{label:"Select",value:"select"},{label:"Separator",value:"separator"}]}}customElements.define("bubble-card-editor",BubbleCardEditor);class BubbleCard extends HTMLElement{editor=!1;isConnected=!1;_editorUpdateTimeout=null;connectedCallback(){this.isConnected=!0,initializeContent(this),(0,style_processor.nO)(this),(0,style.$i)(),this._hass&&this.updateBubbleCard()}disconnectedCallback(){this.isConnected=!1,(0,tap_actions.Xs)(),clearTimeout(this._editorUpdateTimeout),"pop-up"===this.config.card_type&&updateListeners(this,!1)}get detectedEditor(){return!!this.editor&&"hui-dialog-edit-card"===window.history?.state?.dialog}set editMode(e){this.editor!==e&&(this.editor=e,["pop-up","horizontal-buttons-stack"].includes(this.config.card_type)&&this.updateBubbleCard())}set hass(e){this._hass=e,this.updateBubbleCard()}updateBubbleCard(){if(this.isConnected||"pop-up"===this.config.card_type)switch(this.config.card_type){case"pop-up":handlePopUp(this);break;case"button":handleButton(this);break;case"separator":handleSeparator(this);break;case"cover":handleCover(this);break;case"empty-column":handleEmptyColumn(this);break;case"horizontal-buttons-stack":handleHorizontalButtonsStack(this);break;case"calendar":handleCalendar(this);break;case"media-player":handleMediaPlayer(this);break;case"select":handleSelect(this);break;case"climate":handleClimate(this)}}setConfig(e){if(e.error)throw new Error(e.error);const t={...e};if(!t.card_type)throw new Error("You need to define a card type");if(t.grid_options&&void 0!==t.grid_options.rows&&(t.rows=t.grid_options.rows),"pop-up"===t.card_type){if(t.hash&&t.button_type&&"name"!==t.button_type&&!t.entity&&t.modules)throw new Error("You need to define an entity")}else if("horizontal-buttons-stack"===t.card_type){var n={};for(var o in t)if(o.match(/^\d+_icon$/)){var a=o.replace("_icon","_link");if(void 0===t[a])throw new Error("You need to define "+a);if(n[t[a]])throw new Error("You can't use "+t[a]+" twice");n[t[a]]=!0}}else if(["button","cover","climate","select","media-player"].includes(t.card_type)){if(!t.entity&&"name"!==t.button_type)throw new Error("You need to define an entity")}else if("calendar"===t.card_type&&!t.entities)throw new Error("You need to define an entity list");if("select"===t.card_type&&t.entity&&!t.select_attribute&&!t.entity?.startsWith("input_select")&&!t.entity?.startsWith("select"))throw new Error('"Select menu (from attributes)" missing');if(window.entityError)throw new Error("You need to define a valid entity");this.config=t}getCardSize(){switch(this.config.card_type){case"pop-up":return-1e5;case"button":case"separator":case"empty-column":case"calendar":case"media-player":case"select":case"climate":return 1;case"cover":return 2;case"horizontal-buttons-stack":return 0}}getGridOptions(){const e=this.config.columns;let t={columns:e?3*e:12,rows:this.config.rows??"auto"};switch(this.config.card_type){case"horizontal-buttons-stack":t.rows=1.3;break;case"separator":this.config.grid_options&&void 0!==this.config.grid_options.rows||(t.rows=this.config.rows?"auto":.8)}return t}getLayoutOptions(){let e=1;"pop-up"===this.config.card_type?e=0:"horizontal-buttons-stack"===this.config.card_type?e=1:"cover"===this.config.card_type&&(e=2);let t=4;return"pop-up"===this.config.card_type?t=0:"horizontal-buttons-stack"===this.config.card_type&&(t=4),{grid_columns:this.config.columns??t,grid_rows:this.config.rows??e}}static getConfigElement(){return document.createElement("bubble-card-editor")}}customElements.define("bubble-card",BubbleCard),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch.",documentationURL:"https://github.com/Clooos/Bubble-Card/"}),console.info(`%c Bubble Card %c ${version} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})();
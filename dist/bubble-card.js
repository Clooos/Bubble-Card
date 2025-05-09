/*! For license information please see bubble-card.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={26:(e,t,n)=>{n.d(t,{O:()=>r});var o=n(490);function r(e,t=e.elements,n=e.config.entity,r){if(t.currentState=e._hass.states[n]?.state,!t.currentState)return;if(t.currentList=n?.startsWith("input_select")||n?.startsWith("select")?e._hass.states[n].attributes.options:e._hass.states[n].attributes[r.select_attribute],t.previousList===t.currentList&&t.previousState===t.currentState)return;let a=t.currentList;for(t.currentState;t.dropdownSelect.firstChild;)t.dropdownSelect.removeChild(t.dropdownSelect.firstChild);Array.isArray(a)&&a.forEach((a=>{const i=document.createElement("mwc-list-item");i.value=a;const s=(0,o.z_)(e,e._hass.states[n],r.select_attribute,a);s&&(i.graphic="icon",i.appendChild(s));const l=(0,o.PW)(e,e._hass.states[n],r.select_attribute,a);i.appendChild(document.createTextNode(l)),a===(0,o.aX)(e._hass.states[n],r.select_attribute)&&i.setAttribute("selected",""),t.dropdownSelect.appendChild(i),t.previousList=t.currentList,t.previousState=t.currentState})),t.dropdownContainer.appendChild(t.dropdownSelect)}},490:(e,t,n)=>{function o(e,t,n,o){function r(e){const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}switch(n){case"fan_modes":return e._hass.formatEntityAttributeValue(t,"fan_mode",o);case"hvac_modes":return e._hass.formatEntityState(t,o);case"swing_modes":return e._hass.formatEntityAttributeValue(t,"swing_mode",o);case"preset_modes":return e._hass.formatEntityAttributeValue(t,"preset_mode",o);default:return r(e._hass.formatEntityState(t,o))??r(o)}}function r(e,t){switch(t){case"fan_modes":return e.attributes.fan_mode||null;case"swing_modes":return e.attributes.swing_mode||null;case"preset_modes":return e.attributes.preset_mode||null;case"effect_list":return e.attributes.effect||null;case"source_list":return e.attributes.source||null;case"sound_mode_list":return e.attributes.sound_mode||null;default:return e.state}}function a(e,t,n,o){let r;switch(n){case"hvac_modes":r=document.createElement("ha-icon"),r.slot="graphic",r.icon=function(e){switch(e){case"auto":return"mdi:thermostat-auto";case"cool":return"mdi:snowflake";case"heat":return"mdi:fire";case"heat_cool":return"mdi:sun-snowflake-variant";case"dry":return"mdi:water-percent";case"fan_only":default:return"mdi:fan";case"off":return"mdi:power"}}(o);break;case"fan_modes":if(!t.attributes.fan_modes)return null;r=document.createElement("ha-attribute-icon"),r.slot="graphic",r.attribute="fan_mode",r.attributeValue=o,r.hass=e._hass,r.stateObj=t;break;case"swing_modes":r=document.createElement("ha-attribute-icon"),r.slot="graphic",r.attribute="swing_mode",r.attributeValue=o,r.hass=e._hass,r.stateObj=t;break;case"preset_modes":r=document.createElement("ha-attribute-icon"),r.slot="graphic",r.attribute="preset_mode",r.attributeValue=o,r.hass=e._hass,r.stateObj=t;break;default:r=!1}return r}function i(e,t,n,o){const r=t?.split(".")[0];switch(r){case"input_select":e._hass.callService("input_select","select_option",{entity_id:t,option:n});break;case"select":e._hass.callService("select","select_option",{entity_id:t,option:n});break;case"climate":switch(o.select_attribute){case"hvac_modes":e._hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:n});break;case"fan_modes":e._hass.callService("climate","set_fan_mode",{entity_id:t,fan_mode:n});break;case"swing_modes":e._hass.callService("climate","set_swing_mode",{entity_id:t,swing_mode:n});break;case"preset_modes":e._hass.callService("climate","set_preset_mode",{entity_id:t,preset_mode:n})}break;case"fan":"preset_modes"===o.select_attribute&&e._hass.callService("fan","set_preset_mode",{entity_id:t,preset_mode:n});break;case"light":"effect_list"===o.select_attribute&&e._hass.callService("light","turn_on",{entity_id:t,effect:n});break;case"media_player":switch(o.select_attribute){case"source_list":e._hass.callService("media_player","select_source",{entity_id:t,source:n});break;case"sound_mode_list":e._hass.callService("media_player","select_sound_mode",{entity_id:t,sound_mode:n})}break;default:console.warn(`Unsupported entity type: ${r}`)}}n.d(t,{Ab:()=>i,PW:()=>o,aX:()=>r,z_:()=>a})},352:(e,t,n)=>{n.d(t,{X:()=>s,F:()=>i});var o=n(537),r=n(490);const a="mwc-list-item {\r\n    border-radius: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 24px));\r\n    margin: 0 8px;\r\n}\r\n\r\nmwc-list-item[selected] {\r\n    color: var(--primary-text-color) !important;\r\n    background-color: var(--bubble-select-list-item-accent-color, var(--bubble-list-item-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))); /* Added the missing 'select' in the first var without removing the previous one for compatibilty */ \r\n}\r\n\r\nha-select {\r\n    --mdc-shape-medium: var(--bubble-select-list-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    --mdc-theme-surface: var(--bubble-select-list-background-color, var(--bubble-select-main-background-color, var(--bubble-main-background-color, var(--card-background-color, var(--secondary-background-color)))));\r\n    --mdc-shape-large: 32px;\r\n    --mdc-shape-small: 64px;\r\n    --mdc-menu-max-width: min-content;\r\n    --mdc-menu-min-width: var(--bubble-select-list-width, 200px);\r\n    --mdc-select-max-width: min-content;\r\n    --mdc-select-outlined-hover-border-color: transparent;\r\n    --mdc-select-outlined-idle-border-color: transparent;\r\n    --mdc-theme-primary: transparent;\r\n    --right-value: calc(var(--mdc-menu-min-width) - 160px);\r\n}\r\n\r\n.bubble-sub-button ha-select {\r\n    --right-value: calc(var(--mdc-menu-min-width) - 168px);\r\n}\r\n\r\n.mdc-select {\r\n    color: transparent !important;\r\n    width: 150px !important;\r\n    position: absolute !important;\r\n    pointer-events: none;\r\n    right: var(--right-value, 46px);\r\n    top: -28px;\r\n}\r\n\r\n.mdc-menu, mwc-list, .mdc-list-item {\r\n    pointer-events: auto;\r\n}\r\n\r\n.mdc-select__dropdown-icon {\r\n    display: none !important;\r\n}\r\n\r\n.mdc-select__selected-text {\r\n    color: transparent !important;\r\n}\r\n\r\n.mdc-select__anchor {\r\n    width: 100%;\r\n    pointer-events: none;\r\n}\r\n\r\n.bubble-dropdown-container {\r\n    display: flex !important;\r\n    width: auto;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.bubble-dropdown-arrow {\r\n    display: flex;\r\n    position: absolute;\r\n    background: var(--bubble-select-arrow-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n    height: 36px;\r\n    width: 36px;\r\n    right: 6px;\r\n    pointer-events: none;\r\n    border-radius: var(--bubble-select-button-border-radius, var(--bubble-border-radius, 20px));\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: background 0.2s, transform 0.2s;\r\n    pointer-events: none;\r\n}\r\n\r\n.bubble-dropdown-select {\r\n    position: relative;\r\n    width: 42px;\r\n}";function i(e,t=e.elements,n){t.dropdownContainer=(0,o.n)("div","bubble-dropdown-container"),t.dropdownSelect=(0,o.n)("ha-select","bubble-dropdown-select"),t.dropdownSelect.setAttribute("outlined",""),t.dropdownArrow=(0,o.n)("ha-icon","bubble-dropdown-arrow"),t.dropdownArrow.setAttribute("icon","mdi:chevron-down"),t.dropdownStyleElement=(0,o.n)("style"),t.dropdownCustomStyleElement=(0,o.n)("style"),t.dropdownStyleElement.textContent=a,t.dropdownContainerStyle=(0,o.n)("style"),t.dropdownContainerStyle.textContent=a,t.dropdownContainer.appendChild(t.dropdownArrow),t.dropdownContainer.appendChild(t.dropdownContainerStyle),t.dropdownSelect.updateComplete.then((()=>{t.dropdownSelect.shadowRoot&&(t.dropdownSelect.shadowRoot.appendChild(t.dropdownStyleElement),t.dropdownSelect.shadowRoot.appendChild(t.dropdownCustomStyleElement),t!==e.elements&&(t.dropdownSelectStyleElement=(0,o.n)("style"),t.dropdownSelectStyleElement.textContent=a,t.dropdownSelect.shadowRoot.appendChild(t.dropdownSelectStyleElement),t.dropdownContainer.appendChild(t.dropdownStyleElement),n&&(t.dropdownContainer.style.width="24px"),t.dropdownArrow.style.height="20px",t.dropdownArrow.style.width="20px",t.dropdownArrow.parentElement.parentElement.haRipple=(0,o.n)("ha-ripple"),t.dropdownArrow.parentElement.parentElement.appendChild(t.dropdownArrow.parentElement.parentElement.haRipple)))})),t===e.elements?t.buttonsContainer.appendChild(t.dropdownContainer):t.appendChild(t.dropdownContainer)}function s(e,t=e.elements,n=e.config.entity,a=e.config){const{dropdownArrow:i,dropdownSelect:s,mainContainer:l,background:c}=t,d=t===e.elements?l:t,u=t===e.elements?c:t;d.haRipple=(0,o.n)("ha-ripple"),d.appendChild(d.haRipple),t!==e.elements&&(d.style.border="solid 2px rgba(0,0,0,0)"),u.addEventListener("click",(n=>{if("mwc-list-item"===n.target.tagName.toLowerCase())return;const o=s.shadowRoot.querySelector("mwc-menu");o.hasAttribute("open")||(i.style.transform="rotate(180deg)",t.dropdownArrow.style.background="var(--bubble-accent-color, var(--bubble-default-color))",d.style.border="var(--bubble-select-border, solid 2px var(--bubble-accent-color, var(--bubble-default-color)))",e.elements.mainContainer.style.overflow="visible",o.setAttribute("open",""))})),s.addEventListener("closed",(n=>{n.stopPropagation(),n.preventDefault(),i.style.transform="rotate(0deg)",d.style.border="solid 2px rgba(0,0,0,0)",t.dropdownArrow.style.background="",e.elements.mainContainer.style.overflow=""})),t.dropdownSelect.addEventListener("click",(t=>{const o=t.target.value;(0,r.Ab)(e,n,o,a)}))}},198:(e,t,n)=>{n.d(t,{AQ:()=>u,Kr:()=>d});var o=n(537),r=n(207),a=n(26),i=n(76),s=n(491),l=n(87),c=n(490);function d(e,t=e.config.sub_button){(function(e,t){if(!t)return;e.previousValues=e.previousValues||{};const n=[...e.previousValues.subButtons||[]];t.forEach(((t,n)=>{if(!t)return;const d=function(e,t,n){const r=t.entity??e.config.entity;return{index:n,entity:r,context:e,state:e._hass.states[r],name:t.name??(0,o.D$)(e,"friendly_name",r)??"",attributeType:t.attribute??"",attribute:(0,o.D$)(e,t.attribute??"",r),isOn:(0,o.$C)(e,r),showName:t.show_name??!1,showState:t.show_state??!1,showAttribute:t.show_attribute??!1,showLastChanged:t.show_last_changed??!1,showLastUpdated:t.show_last_updated??!1,showIcon:t.show_icon??!0,showBackground:t.show_background??!0,stateBackground:t.state_background??!0,lightBackground:t.light_background??!0,showArrow:t.show_arrow??!0,isSelect:r?.startsWith("input_select")||r?.startsWith("select")||t.select_attribute,icon:(0,l.sW)(e,r,t.icon??"")}}(e,t,n+1);if("fan_modes"===d.attributeType&&null==d.attribute)return void(e.elements[d.index]||(0,o.n)("div",`bubble-sub-button bubble-sub-button-${d.index}`)).classList.add("hidden");let u=e.elements[d.index];if((!u||d.isSelect&&!u.dropdownContainer)&&(u=(0,r.n)(e,d.index,d.isSelect,d.showArrow,d.entity,t)),e.config.entity&&!e.detectedEditor){if("unavailable"===(0,o.Gu)(e,e.config.entity))return void(u.style.display="none");"none"===u.style.display&&(u.style.display="")}!function(e,t,n){(function(e,t,n){const{isSelect:o,showArrow:r,entity:i,subButton:s}=n;if(o&&t.dropdownSelect){const n=e._hass.states[i]?.state,o=e.previousValues[i]?.state;n!==o&&(n&&t.dropdownSelect.value!==n&&(t.dropdownSelect.value=n,t.dropdownSelect.dispatchEvent(new Event("change",{bubbles:!0}))),e.previousValues[i]={state:n}),(0,a.O)(e,t,i,s),function(e,t){t?(e.dropdownArrow.style.display="",e.dropdownContainer.style.width="24px"):(e.dropdownArrow.style.display="none",e.dropdownContainer.style.width="0px",e.style.padding="6px")}(t,r)}else t.contains(t.dropdownContainer)&&t.removeChild(t.dropdownContainer)})(e,t,n),function(e,t){const{showBackground:n,isOn:r,stateBackground:a,lightBackground:i,entity:s,context:c}=t;if(!n)return void e.classList.remove("background-on","background-off");const d=(0,o.GM)("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))");r&&a?(i&&e.style.setProperty("--bubble-sub-button-light-background-color",(0,l.VA)(c,s,d?1:.8)),e.classList.add("background-on"),e.classList.remove("background-off")):(e.classList.add("background-off"),e.classList.remove("background-on"))}(t,n),function(e,t){const{subButton:n,isSelect:o,entity:r}=t;if(("none"!==n.tap_action?.action||"none"!==n.double_tap_action?.action||"none"!==n.hold_action?.action)&&!e.actionAdded){const t={tap_action:{action:o?"none":"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}};o?e.setAttribute("no-slide",""):(0,s.dN)(e,o?"":n,r,t),(0,s.pd)(e,e.feedback),o&&(e.style.pointerEvents="auto",e.style.cursor="pointer"),e.actionAdded=!0}}(t,n);const r=function(e,t){const{state:n,name:r,attribute:a,attributeType:i,showName:s,showState:l,showAttribute:c,showLastChanged:d,showLastUpdated:u}=e,p=[];if(s&&r&&"unknown"!==r&&p.push(r),n&&l&&"unknown"!==n.state&&p.push(t._hass.formatEntityState(n)),n&&d&&"unknown"!==n.last_changed&&p.push((0,o.r6)(n.last_changed,t._hass.locale.language)),n&&u&&"unknown"!==n.last_updated&&p.push((0,o.r6)(n.last_updated,t._hass.locale.language)),n&&c)if(i&&i.includes("forecast")){const e="°C"===t._hass.config.unit_system.temperature,n="km"===t._hass.config.unit_system.length;i.includes("temperature")&&null!=a?p.push(parseFloat(a).toFixed(1).replace(/\.0$/,"")+(e?" °C":" °F")):i.includes("humidity")&&null!=a?p.push(parseFloat(a).toFixed(0)+" %"):i.includes("precipitation")&&null!=a?p.push(parseFloat(a).toFixed(1).replace(/\.0$/,"")+" mm"):i.includes("wind_speed")&&null!=a?p.push(parseFloat(a).toFixed(1).replace(/\.0$/,"")+(n?" km/h":" mph")):null!=a&&"unknown"!==a&&p.push(a)}else{const e=t._hass.formatEntityAttributeValue(n,i),o=n.attributes?.[i],r=e&&"string"==typeof e&&e.trim().startsWith("0")&&e.trim().length>1;(0!==a&&"unknown"!==a&&null!=a||r)&&"unknown"!==o&&null!=o&&p.push(e??a)}return p.length?p.join(" · ").charAt(0).toUpperCase()+p.join(" · ").slice(1):""}(n,e);(function(e,t,n){const{showIcon:o,isSelect:r}=t;if(!e._hasVisibilityConditions){const t=!n&&!o&&!r;e.classList.toggle("hidden",t)}e.dropdownContainer&&(e.dropdownContainer.classList.toggle("no-icon-select-container",!n&&!o&&r),e.dropdownArrow.classList.toggle("no-icon-select-arrow",!n&&!o&&r))})(t,n,r),t.nameContainer.textContent!==r&&(t.nameContainer.textContent=r);const i=!(!n.isSelect||!t.dropdownSelect)&&Array.from(t.dropdownSelect.children).find((e=>e.hasAttribute("selected")))?.value;if(n.showIcon&&n.icon){let a=t.icon;if(a||(a=(0,o.n)("ha-icon","bubble-sub-button-icon"),a.classList.add("show-icon"),t.appendChild(a),t.icon=a),i){const o=(0,c.z_)(e,n.state,n.subButton.select_attribute,i);o&&!n.subButton.icon?(a.tagName!==o.tagName||a.icon!==o.icon||a.attribute!==o.attribute||a.attributeValue!==o.attributeValue)&&(t.replaceChild(o,a),t.icon=o,a=o):a.icon!==n.icon&&a.setAttribute("icon",n.icon)}else a.icon!==n.icon&&a.setAttribute("icon",n.icon);a.classList.remove("hidden"),a.classList.add("bubble-sub-button-icon","show-icon"),a.classList.toggle("icon-with-state",!!r),a.classList.toggle("icon-without-state",!r)}else t.icon&&(t.icon.classList.remove("show-icon"),t.icon.classList.add("hidden"));t.icon?.getAttribute("icon")!==t.icon?.icon&&t.icon.setAttribute("icon",t.icon.icon)}(e,u,{...d,subButton:t}),function(e,t,n){const o=t.visibility;if(null!=o){e._hasVisibilityConditions=!0;const t=(0,i.eC)(o);if((0,i.db)(t)){const o=(0,i.XH)(t,n);void 0!==e._previousVisibilityState&&e._previousVisibilityState===o||(e.classList.toggle("hidden",!o),e._previousVisibilityState=o)}}else e._hasVisibilityConditions=!1}(u,t,e._hass)})),function(e,t,n){for(let o=t.length;o>n.length;o--){const t=e.elements[o];t&&(e.elements.subButtonContainer.removeChild(t),delete e.elements[o])}}(e,n,t),e.previousValues.subButtons=t.slice()})(e,t),function(e){Array.isArray(e.subButtonIcon)||(e.subButtonIcon=[]);("pop-up"===e.config.card_type?e.popUp:e.content).querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t}))}(e)}function u(e){const t=e.config.sub_button;return t&&Array.isArray(t)?t.map((t=>{if(!t)return"";const n=t.entity??e.config.entity;return e._hass.states[n]?.state??""})):[]}},207:(e,t,n)=>{n.d(t,{n:()=>s,g:()=>i});var o=n(537),r=n(352);const a=".bubble-sub-button-container {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: end;\r\n    right: 8px;\r\n    align-content: center;\r\n    gap: 8px;\r\n    align-items: center;\r\n}\r\n\r\n.bubble-sub-button {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    right: 0;\r\n    box-sizing: border-box;\r\n    width: min-content;\r\n    min-width: 36px;\r\n    height: 36px;\r\n    vertical-align: middle;\r\n    font-size: 12px;\r\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));\r\n    padding: 0 8px;\r\n    white-space: nowrap;\r\n    transition: all 0.5s ease-in-out;\r\n    color: var(--primary-text-color);\r\n}\r\n\r\n.bubble-sub-button-name-container {\r\n    display: flex;\r\n}\r\n\r\n.show-icon {\r\n    display: flex;\r\n    --mdc-icon-size: 16px;\r\n}\r\n\r\n.bright-background {\r\n    color: var(--bubble-sub-button-dark-text-color, rgb(0, 0, 0));\r\n}\r\n\r\n.background-on {\r\n    background-color: var(--bubble-sub-button-light-background-color, var(--bubble-default-color));\r\n}\r\n\r\n.background-off {\r\n    background-color: var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n}\r\n\r\n.icon-with-state {\r\n    margin-right: 4px;\r\n    --mdc-icon-size: 16px;\r\n}\r\n\r\n.icon-without-state {\r\n    margin-right: 0;\r\n    --mdc-icon-size: 20px;\r\n}\r\n\r\n.no-icon-select-arrow {\r\n    width: 28px !important;\r\n    height: 28px !important;\r\n    right: 2px !important;        \r\n}\r\n\r\n.no-icon-select-container {\r\n    width: 16px !important;\r\n}\r\n\r\n.bubble-sub-button .bubble-dropdown-arrow {\r\n    background: var(--bubble-select-arrow-background-color) !important;\r\n}\r\n\r\n.sub-buttons-grid .bubble-sub-button-container {\r\n    display: grid;\r\n    row-gap: calc( ( ( var(--row-height,56px) - 36px ) * var(--row-size,1) + var(--row-gap, 8px) * ( var(--row-size,1) - 1 ) ) / ( var(--row-size,1) + 1 ));\r\n    grid-template-rows: repeat(var(--row-size,1), 1fr);\r\n    grid-template-columns: repeat(1, 1fr);\r\n    grid-auto-flow: column;\r\n}\r\n\r\n.sub-buttons-grid .bubble-sub-button-container:has(> :last-child:nth-child(2)) :nth-child(2) {\r\n    grid-row: 1 / calc(var(--row-size,1) + 1);\r\n}\r\n\r\n.rows-2 .bubble-sub-button-container {\r\n    flex-direction: column;\r\n    gap: 4px !important;\r\n    row-gap: calc( ( ( var(--row-height,56px) - 40px ) * var(--row-size,1) + var(--row-gap, 8px) * ( var(--row-size,1) - 1 ) ) / ( 2*var(--row-size,1) + 2 ));\r\n    column-gap: 4px !important;\r\n    display: grid !important;\r\n    grid-template-columns: repeat(1, 1fr);\r\n    grid-template-rows: repeat(calc(2*var(--row-size,1)), minmax(auto, max-content));\r\n    grid-auto-flow: column;\r\n    width: auto;\r\n}\r\n\r\n.rows-2 .bubble-sub-button {\r\n    height: 20px !important;\r\n}\r\n\r\n.large.rows-2 .bubble-sub-button-container:has(> :last-child:nth-child(2)) :nth-child(2) {\r\n    grid-row: 1 / calc(2*var(--row-size,1) + 1);\r\n}";function i(e,t={}){const{container:n=e.content,appendTo:r=n.firstChild?.firstChild,before:i=!1}=t;e.elements=e.elements||{};let s=e.elements.subButtonContainer;if(!s&&e.config.sub_button){s=(0,o.n)("div","bubble-sub-button-container");const t=(0,o.n)("style");t.textContent=a,s.appendChild(t),i&&r?r.prepend(s):r&&r.appendChild(s),e.elements.subButtonContainer=s}return s}function s(e,t,n,a,s,l){e.elements.subButtonContainer||i(e);const c=(0,o.n)("div",`bubble-sub-button bubble-sub-button-${t}`);return c.nameContainer=(0,o.n)("div","bubble-sub-button-name-container"),c.feedbackContainer=(0,o.n)("div","bubble-feedback-container"),c.feedback=(0,o.n)("div","bubble-feedback-element feedback-element"),c.appendChild(c.feedbackContainer),c.feedbackContainer.appendChild(c.feedback),n&&((0,r.F)(e,c,a),c.dropdownContainer.style.display="none",(0,r.X)(e,c,s,l)),c.appendChild(c.nameContainer),e.elements.subButtonContainer.appendChild(c),e.elements[t]=c,c}},404:(e,t,n)=>{function o(){try{const e=localStorage.getItem("bubble-card-module-store");if(!e)return null;const t=JSON.parse(e);if(localStorage.getItem("bubble-card-api-failure-timestamp")&&t&&t.expiration<Date.now()){console.log("🛡️ API in cooldown period after failure and cache expired, temporary extension of validity");const e=Date.now()+72e5;return t.expiration=e,localStorage.setItem("bubble-card-module-store",JSON.stringify(t)),console.log("⏳ Cache extended until",new Date(e)),t}return t&&t.expiration>Date.now()?t:t?(console.log("⚠️ Cache expired but kept for potential API limit situations"),t):null}catch(e){return console.error("Error reading cache:",e),null}}function r(e){if(e&&0!==Object.keys(e).length)try{const t=Date.now()+864e5;localStorage.setItem("bubble-card-module-store",JSON.stringify({modules:e,expiration:t})),console.log("Module data cached until",new Date(t))}catch(e){console.error("Error saving to cache:",e)}}function a(e,t,n="info"){if(e.hass){const o=new CustomEvent("hass-notification",{detail:{message:t,severity:n},bubbles:!0,composed:!0});e.dispatchEvent(o)}else console.log(`[${n}] ${t}`)}n.d(t,{getCachedModuleData:()=>o,q:()=>a,saveCachedModuleData:()=>r})},571:(e,t,n)=>{n.d(t,{N5:()=>s,extractYamlFromMarkdown:()=>i,oV:()=>a,tF:()=>l});var o=n(382),r=n(395);function a(e){if(!e)return null;try{const t=o.Ay.load(e);if(t&&"object"==typeof t){const e=Object.keys(t);if(e.length>0){if(t[e[0]]?.name)return e[0];for(const n of e)if(t[n]?.name)return n;return e[0]}}}catch(e){console.warn("Error during YAML parsing for key extraction:",e)}try{const t=/^([a-zA-Z0-9_-]+)(?:\s*:|:)/m,n=e.match(t);if(n&&n[1])return n[1]}catch(e){console.warn("Error during key extraction by regex:",e)}return null}function i(e,t=null){if(!e)return"";const n=[...e.matchAll(/```(?:yaml|yml)\s+([\s\S]*?)```/g)];if(n.length>0){for(const e of n){let n=e[1].trim();try{const e=o.Ay.load(n);if(e&&"object"==typeof e){const r=Object.keys(e)[0];if(e[r]?.name||e[r]?.code||e[r]?.description||e[r]?.version)return t&&"object"==typeof e[r]&&!e[r].link&&(e[r].link=t,n=o.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})),n}}catch(e){console.warn("Error parsing YAML block:",e)}}let e=n[0][1].trim();if(t)try{const n=o.Ay.load(e);if(n&&"object"==typeof n){const r=Object.keys(n)[0];r&&"object"==typeof n[r]&&!n[r].link&&(n[r].link=t,e=o.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}))}}catch(e){console.warn("Error adding link to raw YAML block:",e)}return e}const r=[...e.matchAll(/```\s*([\s\S]*?)```/g)];if(r.length>0){let e="";for(const t of r){const n=t[1].trim();n.length>e.length&&(e=n)}if(t&&e)try{const n=o.Ay.load(e);if(n&&"object"==typeof n){const r=Object.keys(n)[0];r&&"object"==typeof n[r]&&!n[r].link&&(n[r].link=t,e=o.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}))}}catch(e){console.warn("Error adding link to generic code block:",e)}return e}return console.warn("No YAML block found in description"),""}function s(e){return e&&Array.isArray(e)?e.filter((e=>e&&e.title)).map((e=>{try{const t=e.title.match(/\[(.*?)\]/);let n=t?(0,r.TL)(t[1]):`discussion-${e.number}`,o="",s=e.html_url;if(e.body&&(o=i(e.body,s),o)){const e=a(o);e&&(n=e)}const c=l(o,n,{bodyText:e.body,title:e.title,defaultCreator:e.user?.login||""});return{id:c.id,name:c.name,description:c.description,creator:c.creator,version:c.version,moduleLink:e.html_url,type:c.type,imageUrl:c.imageUrl,supportedCards:Array.isArray(c.supported)?c.supported:c.supported?[c.supported]:[],unsupportedCards:Array.isArray(c.unsupported)?c.unsupported:c.unsupported?[c.unsupported]:[],createdAt:e.created_at,updated_at:e.updated_at,userAvatar:e.user?.avatar_url,comments:e.comments,reactions:e.reactions,yamlContent:o}}catch(t){return console.error(`Error parsing discussion #${e.number}:`,t),{id:`discussion-${e.number}`,name:e.title||`Discussion #${e.number}`,description:"Error parsing the discussion",creator:e.user?.login||"",version:"",moduleLink:e.html_url,type:"",supportedCards:[],unsupportedCards:[],createdAt:e.created_at,updated_at:e.updated_at,userAvatar:e.user?.avatar_url,comments:e.comments,reactions:e.reactions}}})).filter((e=>e.id&&e.name)):[]}function l(e,t,n={}){const{bodyText:a,title:i,defaultCreator:s}=n;let l={id:t,name:t,version:"1.0",author:"",description:"",type:"Module",editor:[],supported:["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator"],unsupported:[],creator:s||"",link:"",imageUrl:"",yaml:e};const c={name:!1,version:!1,author:!1,creator:!1,description:!1,type:!1,link:!1,supported:!1,unsupported:!1,editor:!1,code:!1,imageUrl:!1},d=(e,t,n=t,o=[])=>{if(void 0!==e[t])return l[n]=e[t],c[n]=!0,!0;for(const t of o)if(void 0!==e[t]&&!c[n])return l[n]=e[t],c[n]=!0,!0;return!1},u=e=>"string"==typeof e?e:Array.isArray(e)?e.join("\n"):"object"==typeof e?JSON.stringify(e):"";if(e)try{const n=o.Ay.load(e);if(n&&"object"==typeof n){if(1===Object.keys(n).length){const e=Object.keys(n)[0],o=n[e];if(l.id===t&&(l.id=e),o&&"object"==typeof o){if(d(o,"name"),d(o,"version"),d(o,"author"),d(o,"type"),d(o,"code"),d(o,"editor"),d(o,"link"),d(o,"creator"),d(o,"form_schema","editor"),d(o,"supported","supported"),d(o,"unsupported","unsupported",["unsupported_card"]),o.unsupported&&!o.supported&&!c.supported){const e=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator"];l.supported=e.filter((e=>!o.unsupported.includes(e))),c.supported=!0}void 0!==o.description&&(l.description=u(o.description),c.description=!0),o.info&&"object"==typeof o.info&&(d(o.info,"name"),d(o.info,"version"),d(o.info,"author"),d(o.info,"type"),d(o.info,"creator"),d(o.info,"link"),void 0===o.info.description||c.description||(l.description=u(o.info.description),c.description=!0))}}else{if(d(n,"name"),d(n,"version"),d(n,"author"),d(n,"type"),d(n,"code"),d(n,"editor"),d(n,"link"),d(n,"creator"),d(n,"form_schema","editor"),d(n,"supported","supported"),d(n,"unsupported","unsupported",["unsupported_card"]),n.unsupported&&!n.supported&&!c.supported){const e=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator"];l.supported=e.filter((e=>!n.unsupported.includes(e))),c.supported=!0}void 0!==n.description&&(l.description=u(n.description),c.description=!0)}if(!(c.editor||l.editor&&l.editor.length)){const e=JSON.stringify(n);if(e.includes('"type":')&&e.includes('"name":')&&1===Object.keys(n).length){const e=Object.keys(n)[0],t=n[e];if(t&&"object"==typeof t){const e=Object.keys(t).filter((e=>"object"==typeof t[e]&&(t[e].type||t[e].name||t[e].field)));e.length>0&&(l.editor=e.map((e=>({name:e,type:t[e].type||"input",...t[e]}))),c.editor=!0)}}}}}catch(e){console.error("Error during YAML analysis:",e)}if(!l.author&&l.creator?l.author=l.creator:!l.creator&&l.author&&(l.creator=l.author),a){if(!c.version){const e=[/\*\*Version:\*\*\s*(v?[\d\.]+)/i,/\|\s*(?:Version|v):\s*(v?[\d\.]+)\s*\|/i,/version\s+(v?[\d\.]+)/i];for(const t of e){const e=a.match(t);if(e&&e[1]){l.version=e[1];break}}}if(!c.description&&!l.description){const e=a.match(/\*\*Description\s*:\*\*\s*(.*?)(?=\n\s*\*\*|\n\s*#|$)/is);if(e&&e[1])l.description=(0,r.yh)(e[1].trim());else{const e=(0,r.yh)(a).split(/\n{2,}/);for(const t of e){const e=t.trim();if(e&&!e.startsWith("#")&&!e.match(/^[a-z_]+\s*:/i)&&e.length>15){l.description=e;break}}}}if(!c.supported&&0===l.supported.length){const e=a.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*\[(.*?)\]/i);e&&(l.supported=e[1].split(",").map((e=>e.trim().replace(/['"]/g,""))))}if(!(c.creator||l.creator&&l.creator!==s)){const e=a.match(/\*\*Creator\s*:\*\*\s*\[?([^\]\n\r]+)(?:\]|\n|$)/i);e&&(l.creator=e[1].trim(),l.author||(l.author=l.creator))}if(!c.imageUrl&&!l.imageUrl){const e={Screenshot:a.match(/Screenshot:([^#]*?)(?=#|\n\s*\n\s*\*\*|$)/is)?.[1]||"",GetThisModule:a.match(/Get this Module([^#]*?)(?=#|\n\s*\n\s*\*\*|$)/is)?.[1]||""},t=[{regex:/!\[.*?\]\((https:\/\/[^)]+)\)/g,isGlobal:!0},{regex:/<img[^>]*src=["'](https:\/\/[^"']+)["'][^>]*>/i,isGlobal:!1},{regex:/src="(https:\/\/github\.com\/user-attachments\/assets\/[^"]+)"/i,isGlobal:!1}];for(const n of Object.values(e))if(n){for(const e of t)if(e.isGlobal){const t=[...n.matchAll(e.regex)];if(t.length>0){l.imageUrl=t[0][1];break}}else{const t=n.match(e.regex);if(t){l.imageUrl=t[1];break}}if(l.imageUrl)break}if(!l.imageUrl){const e=[...a.matchAll(/!\[.*?\]\((https:\/\/[^)]+)\)/g)];if(e.length>0){const t=e.filter((e=>e[1].includes("user-images.githubusercontent.com")||e[1].includes("github.com/user-attachments")));l.imageUrl=t.length>0?t[0][1]:e[0][1]}else{const e=a.match(/<img[^>]*src=["'](https:\/\/[^"']+)["'][^>]*>/i);e&&(l.imageUrl=e[1])}}}}if(i){if(!c.type){const e=i.match(/\[(.*?) Module\]/i);e&&(l.type=e[1].toLowerCase())}if(!c.version&&"1.0"===l.version){const e=i.match(/(v?[\d\.]+)/);e&&(l.version=e[1])}if(!c.name){let e=i.replace(/\[.*?\]\s*/,"").trim();e=e.replace(/\s*-\s*v?[\d\.]+$/,"").trim(),l.name=e}}return l}},395:(e,t,n)=>{n.d(t,{TL:()=>l,XY:()=>d,_O:()=>c,a7:()=>r,bx:()=>a,yh:()=>s});var o=n(784);function r(e){const t=o.Ki.get(e)||{};let n=t.name||e,r=t.description||"",a=t.editor||[],i=t.supported||[],s=t.unsupported||[],l=t.creator||t.author||"",c=t.link||"",d=t.version||"";return"string"==typeof a&&(a=o.Ki.get(a)?.editor||[]),Array.isArray(a)||(a=[a]),Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]),s.length>0&&0===i.length&&(i=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator"].filter((e=>!s.includes(e)))),{name:n,description:r,formSchema:a,supportedCards:i,unsupportedCard:s,moduleVersion:d,creator:l,moduleLink:c}}function a(e){if(!e)return"No description available";try{const t=/Description:\s*([^\n]+)/i,n=e.match(t);if(n&&n[1]){const e=s(n[1].trim());if(e&&e.length>5)return i(e)}const o=/description:\s*\|([\s\S]*?)(?=\n\s*\w+:|$)/i,r=e.match(o);if(r&&r[1]){const e=r[1].trim().split(/\n{2,}/)[0].trim();if(e&&e.length>5)return i(s(e))}const a=/description:\s*["']([^"']+)["']/i,l=e.match(a);if(l&&l[1]){const e=s(l[1].trim());if(e&&e.length>5)return i(e)}const c=/description:\s*([^\n\r]+)/i,d=e.match(c);if(d&&d[1]){const e=s(d[1].trim());if(e&&e.length>5)return i(e)}const u=e.split("\n");let p=!1,h=[];for(let e=0;e<u.length;e++){const t=u[e].trim();if(t)if(t.includes("Supported cards:")||t.match(/^Version:/i)||t.match(/^Creator:/i)||t.match(/^ID:/i))p=!0;else if(p){if(t.startsWith("```")||t.startsWith("#")||t.startsWith("-")||t.startsWith(">")||t.includes("yaml")||t.match(/^\s*[a-z_]+:/i))continue;if(t.length>10&&!t.includes("Supported")&&(h.push(t),h.join(" ").length>40))break}}return h.length>0?i(s(h.join(" ").trim())):"string"!=typeof e||e.includes("description:")?"No description available":i(s(e))}catch(e){return console.warn("Error during description formatting:",e),"No description available"}}function i(e){if(!e)return e;const t=e.trim(),n=(e,t)=>e>=0&&(-1===o||e<o);let o=-1,r=null;const a=t.search(/[.!?]\s/);n(a)&&(o=a+1,r="punct");const i=t.search(/<br|<\/p>|<p\s|<div|<\/div|<\/a>/i);n(i)&&(o=i,r="html");const s=t.search(/\n|\r\n/);if(n(s)&&(o=s,r="break"),o>=0){let e=t.substring(0,o).trim();if(e.length<5&&t.length>30){const n=t.substring(o+1).search(/[.!?]|\n|<br/i);n>0&&(e=t.substring(0,o+1+n).trim())}return e=e.replace(/<[^>]*>/g,"").trim(),"punct"===r||e.endsWith(".")?e:e+"."}const l=t.replace(/<[^>]*>/g,"").trim();return l.endsWith(".")?l:l+"."}function s(e){return e?e.replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/`(.*?)`/g,"$1").replace(/~~(.*?)~~/g,"$1").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/<\/?[^>]+(>|$)/g,"").replace(/^#+\s+/gm,"").replace(/\n{3,}/g,"\n\n").trim():""}function l(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function c(e,t){if(!e||!t)return 0;const n=e.split(".").map(Number),o=t.split(".").map(Number);for(let e=0;e<Math.max(n.length,o.length);e++){const t=n[e]||0,r=o[e]||0;if(t>r)return 1;if(t<r)return-1}return 0}function d(e,t=!0){const n=e.shadowRoot.getElementById("module-editor-top-marker");if(n){const e=t?"smooth":"instant";n.scrollIntoView({behavior:e,block:"start"})}}},87:(e,t,n)=>{n.d(t,{Qp:()=>l,VA:()=>s,sW:()=>a,w1:()=>i});var o=n(537),r=n(273);function a(e,t=e.config.entity,n=e.config.icon){const r=t?.split(".")[0],a=(0,o.D$)(e,"device_class",t),i=(0,o.D$)(e,"icon",t),s=n,l=(0,o.Gu)(e,t),c={alarm_control_panel:"mdi:shield",alert:"mdi:alert",automation:"mdi:playlist-play",binary_sensor:function(){const n="off"===l;switch((0,o.D$)(e,"device_class",t)){case"battery":return n?"mdi:battery":"mdi:battery-outline";case"battery_charging":return n?"mdi:battery":"mdi:battery-charging";case"cold":return n?"mdi:thermometer":"mdi:snowflake";case"connectivity":return n?"mdi:server-network-off":"mdi:server-network";case"door":return n?"mdi:door-closed":"mdi:door-open";case"garage_door":return n?"mdi:garage":"mdi:garage-open";case"heat":return n?"mdi:thermometer":"mdi:fire";case"light":return n?"mdi:brightness-5":"mdi:brightness-7";case"lock":return n?"mdi:lock":"mdi:lock-open";case"moisture":return n?"mdi:water-off":"mdi:water";case"motion":return n?"mdi:motion-sensor-off":"mdi:motion-sensor";case"occupancy":case"presence":return n?"mdi:home-outline":"mdi:home";case"opening":return n?"mdi:square":"mdi:square-outline";case"plug":case"power":return n?"mdi:power-plug-off":"mdi:power-plug";case"running":return n?"mdi:stop":"mdi:play";case"safety":case"tamper":return n?"mdi:check-circle":"mdi:alert-circle";case"smoke":return n?"mdi:check-circle":"mdi:smoke";case"sound":return n?"mdi:music-note-off":"mdi:music-note";case"update":return n?"mdi:package":"mdi:package-up";case"vibration":return n?"mdi:crop-portrait":"mdi:vibrate";case"window":return n?"mdi:window-closed":"mdi:window-open";default:return n?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}}(),calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",cover:function(){const n="closed"!==l;switch((0,o.D$)(e,"device_class",t)){case"awning":return n?"mdi:awning-outline":"mdi:awning";case"blind":return n?"mdi:blinds-open":"mdi:blinds";case"curtain":return n?"mdi:curtains":"mdi:curtains-closed";case"damper":case"shutter":default:return n?"mdi:window-shutter-open":"mdi:window-shutter";case"door":return n?"mdi:door-open":"mdi:door-closed";case"garage":return n?"mdi:garage-open":"mdi:garage";case"gate":return n?"mdi:gate-open":"mdi:gate";case"shade":return n?"mdi:roller-shade":"mdi:roller-shade-closed";case"window":return n?"mdi:window-open":"mdi:window-closed"}}(),device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",lock:"mdi:lock",mailbox:"mdi:mailbox",media_player:"mdi:speaker",mower:"mdi:robot-mower",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:file-document",sensor:function(){switch((0,o.D$)(e,"device_class",t)){case"battery":return 100==l?"mdi:battery":l>=90?"mdi:battery-90":l>=80?"mdi:battery-80":l>=70?"mdi:battery-70":l>=60?"mdi:battery-60":l>=50?"mdi:battery-50":l>=40?"mdi:battery-40":l>=30?"mdi:battery-30":l>=20?"mdi:battery-20":l>=10?"mdi:battery-10":"mdi:battery-alert";case"humidity":return"mdi:water-percent";case"illuminance":return"mdi:brightness-5";case"temperature":return"mdi:thermometer";case"pressure":return"mdi:gauge";case"power":return"mdi:flash";case"signal_strength":return"mdi:wifi";case"energy":return"mdi:lightning-bolt";default:return"mdi:eye"}}(),simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:function(n=(0,o.Gu)(e,t)){switch(n){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}(),weblink:"mdi:open-in-new"};return s||i||(c[r]?c[r]:c[a]?c[a]:"")}function i(e){switch(e){case"cloudy":default:return"mdi:weather-cloudy";case"partlycloudy":return"mdi:weather-partly-cloudy";case"rainy":return"mdi:weather-rainy";case"snowy":return"mdi:weather-snowy";case"sunny":return"mdi:weather-sunny";case"clear-night":return"mdi:weather-night";case"fog":return"mdi:weather-fog";case"hail":return"mdi:weather-hail";case"lightning":return"mdi:weather-lightning";case"lightning-rainy":return"mdi:weather-lightning-rainy";case"pouring":return"mdi:weather-pouring";case"windy":return"mdi:weather-windy";case"windy-variant":return"mdi:weather-windy-variant";case"exceptional":return"mdi:alert-circle-outline"}}function s(e,t=e.config.entity,n=1){const{card_type:a,use_accent_color:i}=e.config,s=(0,o.D$)(e,"rgb_color",t),l=(0,o.GM)("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))")?n-.2:n,c=t===e.config.entity&&(0,o.D$)(e,"unit_of_measurement",t)?.includes("°"),d=t===e.config.entity&&e._hass.states[t]?.state?.match(/\d+/);if(!t||c||d)return"var(--bubble-icon-color)";if((0,o.md)(e,"light")&&!i?"button"===a?e.card.classList.add("is-light"):"pop-up"===a&&e.elements.headerContainer.classList.add("is-light"):"button"===a?e.card.classList.remove("is-light"):"pop-up"===a&&e.elements.headerContainer.classList.remove("is-light"),!t.startsWith("light.")||i)return"var(--bubble-accent-color, var(--bubble-default-color))";const u=(0,o.f9)([225,225,210],l);if(!s)return`var(--bubble-light-color, rgba(${u.join(", ")}))`;const p=(0,o.f9)(s,l);return(0,r.qd)(s)?`var(--bubble-light-color, rgba(${u.join(", ")}))`:`var(--bubble-light-color, rgba(${p.join(", ")}))`}function l(e,t=e.config.entity){if(e.config.force_icon)return"";const n=(0,o.D$)(e,"entity_picture_local",t)||(0,o.D$)(e,"entity_picture",t);return n?e._hass.hassUrl(n):""}},784:(e,t,n)=>{n.d(t,{Ki:()=>g,SF:()=>w,nO:()=>h,sq:()=>u,wv:()=>p});var o=n(537),r=n(87),a=n(198),i=n(76),s=n(382);let l=null,c=!1,d=null,u=new Map;async function p(e){return c&&l?l:d||(d=(async()=>{const t=await y(["/local/bubble/bubble-modules.yaml","/hacsfiles/Bubble-Card/bubble-modules.yaml","/local/community/Bubble-Card/bubble-modules.yaml"]),n=e?._hass?await async function(e){const t=e.states["sensor.bubble_card_modules"];if(!t)return{};if(!t.attributes?.modules)return{};const n={};let o=0;try{o=Object.keys(t.attributes.modules).length,Object.values(t.attributes.modules).forEach((e=>{try{if(!e.yaml&&(e.code||e.description))return void(n[e.id]=e);if(!e.yaml)return}catch(t){console.error(`❌ YAML parsing error for module ${e.id}:`,t),"string"==typeof e.yaml?console.error("Problematic YAML content:",e.yaml.substring(0,100)+"..."):console.error("Problematic YAML content type:",typeof e.yaml)}}))}catch(e){console.error("Error while processing modules from text entity:",e)}return n}(e._hass):{};return u.clear(),t&&Object.keys(t).forEach((e=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&u.set(e,"yaml")})),n&&Object.keys(n).forEach((e=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&u.set(e,"entity")})),l={...t,...n},g.clear(),Object.entries(l).forEach((([e,t])=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&g.set(e,t)})),c=!0,l})(),d)}function h(e){e.config?.card_type&&!e.stylesYAML&&(e.stylesYAML=c&&l?Promise.resolve(l):p(e))}document.addEventListener("yaml-modules-updated",(()=>{c=!1,l=null,d=null,window.dispatchEvent(new CustomEvent("bubble-card-modules-changed"))})),window.addEventListener("bubble-card-module-updated",(e=>{e.detail&&e.detail.moduleId&&e.detail.moduleData&&(g.set(e.detail.moduleId,e.detail.moduleData),u.has(e.detail.moduleId)||u.set(e.detail.moduleId,"editor"),window.dispatchEvent(new CustomEvent("bubble-card-modules-changed")))}));const b=new s.ZU("!include",{kind:"scalar",resolve:function(e){return"string"==typeof e},construct:function(e){const t=new XMLHttpRequest;if(t.open("GET",`/local/bubble/${e}`,!1),t.send(null),200!==t.status)return console.error(`Error including the file /local/bubble/${e}: HTTP status ${t.status}`),null;try{return s.Hh(t.responseText,{schema:m})}catch(t){return console.error(`Error parsing the included YAML file (/local/bubble/${e}):`,t),null}}}),m=s.my.extend([b]);let g=new Map,f=new Map;const _=new Map,y=async e=>{for(const t of e){const e=t+`?v=${Date.now()}`;try{const n=await fetch(e,{cache:"no-store"});if(!n.ok){window.bubbleYamlWarning=!0;continue}const o=await n.text();let r;return r=v(o),!g.size&&r&&Object.entries(r).forEach((([e,t])=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&g.set(e,t)})),f.set(t,r),r}catch(t){console.warn(`Error fetching 'bubble-modules.yaml' from ${e}:`,t),window.bubbleYamlWarning=!0}}return null},v=e=>{if(!e||"string"!=typeof e)return null;try{return s.Hh(e,{schema:m})}catch(e){return console.error("YAML parsing error:",e),null}},w=async(e,t=e.card)=>{const n=t,o=e.config.modules??e.config.style_templates??"default",r=e.config.styles;if(void 0===e.cardLoaded&&(e.lastEvaluatedStyles="",e.initialLoad=!0,!e._moduleChangeListenerAdded)){const n=()=>{e.lastEvaluatedStyles="",e.stylesYAML=null,g.forEach(((t,n)=>{e._processedSchemas?.[n]&&delete e._processedSchemas[n]})),w(e,t)};window.addEventListener("bubble-card-modules-changed",n),window.addEventListener("bubble-card-module-updated",n),e._moduleChangeListenerAdded=!0,e._moduleChangeHandler=n}e.initialLoad&&(n.style.display="none");const a=function(e,t){if(!e.styleElement){const n=document.createElement("style");n.id="bubble-styles",t.appendChild(n),e.styleElement=n}return e.styleElement}(e,t);try{let t={};g.size>0?g.forEach(((e,n)=>{t[n]=e})):t=await e.stylesYAML||{};let i="";Array.isArray(o)&&(i=o.map((e=>{let n=t[e]??"";return"object"==typeof n&&""===n.code||""===n?"{}":"object"==typeof n&&n.code?n.code:n})).join("\n"));const s=`${x(e,i)}\n${x(e,r)}`.trim();s!==e.lastEvaluatedStyles&&(a.textContent=s,e.lastEvaluatedStyles=s),e.initialLoad&&(n.style.display="",e.initialLoad=!1,e.cardLoaded=!0)}catch(e){console.error("Error applying styles:",e)}};function x(e,t=""){if(!t)return"";const n=["innerText","textContent","innerHTML"];["state","name"].forEach((o=>{n.map((e=>`card.querySelector('.bubble-${o}').${e} =`)).some((e=>t.includes(e)))&&!e.elements[o].templateDetected&&(e.elements[o].templateDetected=!0)}));try{let n=_.get(t);n||(n=Function("hass","entity","state","icon","subButtonState","subButtonIcon","getWeatherIcon","card","name","checkConditionsMet",`return \`${t}\`;`),_.set(t,n));const l="pop-up"===e.config.card_type?e.popUp:e.card,c=(s=n.call(e,e._hass,e.config.entity,(0,o.Gu)(e),e.elements.icon,(0,a.AQ)(e),e.subButtonIcon,r.w1,l,l.name,i.XH),s.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\s+/g," ").replace(/\s*([{};,])\s*/g,"$1").replace(/([a-zA-Z0-9_-]+)\s*:\s*;/g,"").replace(/undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g,"").replace(/[^{};]+\s*{\s*}/g,"").replace(/,(?=\s*[}\n])/g,"").split("\n").filter((e=>e.includes("{")||e.includes("}")||e.includes(":")||e.trim().match(/['"]{2}/g)||e.includes("${")||e.match(/^@supports|^@media|^@keyframes|^@layer/))).join("\n").match(/(@[^{]*?\{(?:[^{}]*?\{[^{}]*?\})*?[^{}]*?\}|[^{}]*?\{[^{}]*?\})/g)?.join("\n")||"");return e.editor&&k(""),c}catch(t){return e.editor&&requestAnimationFrame((()=>k(t.message))),console.error(`Bubble Card - Template error from a ${e.config.card_type} card: ${t.message}`),""}var s}function k(e){window.dispatchEvent(new CustomEvent("bubble-card-error",{detail:e}))}},273:(e,t,n)=>{n.d(t,{$i:()=>s,Bz:()=>i,X:()=>l,qd:()=>r});var o=n(537);function r(e,t=40){if(Array.isArray(e)&&3===e.length){for(let t=0;t<3;t++)if(e[t]<0||e[t]>255)return;return e.every((e=>Math.abs(e-255)<=t))}}let a;function i(e,t,n=1){if(e.startsWith("#"))if(4===e.length){let o=Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n),r=Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n),i=Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n);a="rgba("+o+", "+r+", "+i+", "+t+")"}else{let o=Math.min(255,parseInt(e.slice(1,3),16)*n),r=Math.min(255,parseInt(e.slice(3,5),16)*n),i=Math.min(255,parseInt(e.slice(5,7),16)*n);a="rgba("+o+", "+r+", "+i+", "+t+")"}else if(e.startsWith("rgb")){let o=e.match(/\d+/g);a="rgba("+Math.min(255,o[0]*n)+", "+Math.min(255,o[1]*n)+", "+Math.min(255,o[2]*n)+", "+t+")"}else if(e.startsWith("var(--")){let o=e.slice(4,-1),r=window.getComputedStyle(document.documentElement).getPropertyValue(o);(r.startsWith("#")||r.startsWith("rgb"))&&(a=i(r,t,n))}return a}function s(e=!0){const t=(0,o.qL)("var(--primary-background-color, #ffffff)");let n=(0,o.E2)(t)||(0,o.rY)(t)||[255,255,255];const r=[0,145,255].map(((e,t)=>Math.round(.7*e+.3*n[t]))),a=`rgb(${r[0]}, ${r[1]}, ${r[2]})`;return e&&document.documentElement.style.setProperty("--bubble-default-color",a),a}function l(){s();const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&("style"===t.attributeName||"class"===t.attributeName)){s();break}})),t=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&("style"===t.attributeName||"class"===t.attributeName||"data-theme"===t.attributeName)){s();break}}));e.observe(document.body,{attributes:!0,attributeFilter:["style","class"]}),t.observe(document.documentElement,{attributes:!0,attributeFilter:["style","class","data-theme"]}),window.addEventListener("load",(()=>s())),"function"==typeof window.addEventListener&&window.addEventListener("hass-theme-updated",(()=>{setTimeout((()=>s()),100)}))}},491:(e,t,n)=>{n.d(t,{VR:()=>s,Xs:()=>p,dN:()=>l,pd:()=>u});var o=n(537);function r(){window.isScrolling=!0,setTimeout((()=>{window.isScrolling=!1}),300)}window.isScrolling=!1,document.addEventListener("scroll",r,{passive:!0});const a=new WeakMap,i=new Set;function s(e,t,n){setTimeout((()=>{const o=new Event("hass-action",{bubbles:!0,composed:!0}),r={...t};!r.entity_id&&this?.config?.entity&&(r.entity_id=this.config.entity),"tap"===n||"double_tap"===n||"hold"===n?o.detail={config:r,action:n}:(e.modifiedConfig={...r,tap_action:{...r[n]}},delete e.modifiedConfig[n],o.detail={config:e.modifiedConfig,action:"tap"}),e.dispatchEvent(o)}),10)}function l(e,t,n,r={}){e.classList.add("bubble-action");const a=t?.tap_action||r?.tap_action||{action:"none"},i=t?.double_tap_action||r?.double_tap_action||{action:"none"},s=t?.hold_action||r?.hold_action||{action:"none"};e.dataset.entity=t?.entity||n,e.dataset.tapAction=JSON.stringify(a),e.dataset.doubleTapAction=JSON.stringify(i),e.dataset.holdAction=JSON.stringify(s);const l="none"!==a.action||"none"!==i.action||"none"!==s.action;return l&&(e.classList.add("bubble-action-enabled"),e.haRipple=(0,o.n)("ha-ripple"),e.appendChild(e.haRipple)),{tap_action:a,double_tap_action:i,hold_action:s,has_action:l}}document.body.addEventListener("pointerdown",(function(e){if(window.isScrolling)return;const t=e.composedPath().find((e=>e.classList?.contains("bubble-action")));if(!t)return;e.cancelable&&e.preventDefault();const n={tap_action:JSON.parse(t.dataset.tapAction),double_tap_action:JSON.parse(t.dataset.doubleTapAction),hold_action:JSON.parse(t.dataset.holdAction),entity:t.dataset.entity};if(!a.has(t)){const e=new c(t,n,d);a.set(t,e),i.add(e)}const o=a.get(t);o.handleStart(e);const r=()=>{t.removeEventListener("pointerup",s),t.removeEventListener("pointercancel",s),document.removeEventListener("pointerup",s),document.removeEventListener("scroll",l),i.delete(o)},s=e=>{o.handleEnd(e),r()},l=()=>{o.handleScroll(),r()};t.addEventListener("pointerup",s,{once:!0}),t.addEventListener("pointercancel",s,{once:!0}),document.addEventListener("pointerup",s,{once:!0}),document.addEventListener("scroll",l,{once:!0})}),{passive:!0});class c{constructor(e,t,n){this.element=e,this.config=t,this.sendActionEvent=n,this.tapTimeout=null,this.holdTimeout=null,this.startX=0,this.startY=0,this.holdFired=!1,this.pointerMoveListener=this.detectScrollLikeMove.bind(this),this.isDisconnected=!1,this.hasMoved=!1}cleanup(){this.isDisconnected=!0,clearTimeout(this.tapTimeout),clearTimeout(this.holdTimeout),document.removeEventListener("pointermove",this.pointerMoveListener),this.tapTimeout=null,this.holdTimeout=null}handleStart(e){window.isScrolling||this.isDisconnected||(e.cancelable&&e.preventDefault(),this.startX=e.clientX,this.startY=e.clientY,this.holdFired=!1,this.hasMoved=!1,document.addEventListener("pointermove",this.pointerMoveListener),this.holdTimeout=setTimeout((()=>{"none"===(this.config.hold_action||{action:"none"}).action||window.isScrolling||this.hasMoved||(this.sendActionEvent(this.element,this.config,"hold"),this.holdFired=!0)}),400))}detectScrollLikeMove(e){const t=Math.abs(e.clientX-this.startX),n=Math.abs(e.clientY-this.startY);(t>5||n>5)&&(this.hasMoved=!0,r(),clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener))}handleEnd(e){if(window.isScrolling||this.isDisconnected||this.hasMoved)return;if(e.cancelable&&e.preventDefault(),clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener),this.holdFired)return;const t=Date.now(),n=this.config.double_tap_action||{action:"none"},o=this.config.tap_action||{action:"none"};this.lastTap&&t-this.lastTap<200&&"none"!==n.action?(clearTimeout(this.tapTimeout),this.sendActionEvent(this.element,this.config,"double_tap")):"none"!==o.action&&("none"!==n.action?this.tapTimeout=setTimeout((()=>{this.sendActionEvent(this.element,this.config,"tap")}),200):setTimeout((()=>{this.sendActionEvent(this.element,this.config,"tap")}),50)),this.lastTap=t}handleScroll(){this.hasMoved=!0,clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener)}}function d(e,t,n){const o=t.tap_action||{action:"more-info"},r=t.double_tap_action||{action:"none"},a=t.hold_action||{action:"none"},i=t.entity||this.config?.entity,l=e=>e.service&&"entity"===e.target?.entity_id&&i?{...e,target:{...e.target,entity_id:i}}:e,c=l(o),d=l(r),u=l(a);let p;switch(n){case"tap":default:p=c;break;case"double_tap":p=d;break;case"hold":p=u}s(e,{entity:i,tap_action:c,double_tap_action:d,hold_action:u},n)}function u(e,t){e.addEventListener("pointerup",(e=>{e.cancelable&&e.preventDefault(),(0,o.jp)("selection")}))}function p(){for(const e of i)e.cleanup();i.clear()}},537:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$C:()=>isStateOn,D$:()=>getAttribute,E2:()=>hexToRgb,GM:()=>isColorLight,Gu:()=>getState,JK:()=>setLayout,Nl:()=>applyScrollingEffect,f9:()=>adjustColor,jp:()=>forwardHaptic,mG:()=>getName,md:()=>isEntityType,n:()=>createElement,nF:()=>throttle,qL:()=>resolveCssVariable,qo:()=>toggleBodyScroll,r6:()=>formatDateTime,rC:()=>fireEvent,rY:()=>rgbStringToRgb});var _style_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(273);const fireEvent=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const r=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return r.detail=n,e.dispatchEvent(r),r},forwardHaptic=e=>{fireEvent(window,"haptic",e)},navigate=(e,t,n=!1)=>{n?history.replaceState(null,"",t):history.pushState(null,"",t),fireEvent(window,"location-changed",{replace:n})},colorCache=new Map;function resolveCssVariable(e){let t=e;const n=getComputedStyle(document.body);for(;t&&t.startsWith("var(");){const e=t.match(/var\((--[^,]+),?\s*(.*)?\)/);if(!e)break;const[,o,r]=e;t=n.getPropertyValue(o).trim()||r&&r.trim()||""}return t}function hexToRgb(e){const t=e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function rgbStringToRgb(e){const t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);return t?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]:null}function calculateLuminance(e,t,n){return(.2126*e+.7152*t+.0722*n)/255}function isColorLight(e,t=.5){const n=resolveCssVariable(e);if(!n)return!1;if(colorCache.has(n))return colorCache.get(n);let o=hexToRgb(n)||rgbStringToRgb(n);if(!o)return colorCache.set(n,!1),!1;const r=calculateLuminance(...o)>t;return colorCache.set(n,r),r}function adjustColor(e,t){return e.map((e=>Math.min(255,Math.round(e*t))))}function getName(e){const t=e.config.name,n=getAttribute(e,"friendly_name");return e.name||t||n||""}function getState(e,t=e.config.entity){return e._hass.states[t]?.state??""}function getAttribute(context,attribute,entity=context.config.entity){return attribute?attribute.includes(" ")?eval(`context._hass.states['${entity}']?.attributes['${attribute}']`)??"":eval(`context._hass.states['${entity}']?.attributes.${attribute}`)??"":""}function isEntityType(e,t,n){return void 0===n&&(n=e?.config?.entity),n&&"string"==typeof n&&n.startsWith(t+".")||!1}function isStateOn(e,t=e.config.entity){const n=getState(e,t).toLowerCase(),o=getAttribute(e,"unit_of_measurement",t)?.includes("°"),r=Number(n);return!!(["on","open","opening","closing","cleaning","true","home","playing","paused","locked","occupied","available","running","active","connected","online","mowing","starting","heat","cool","dry","heat_cool","fan_only","auto","alarm"].includes(n)||r||o)}function createElement(e,t=""){const n=document.createElement(e);return""!==t&&t.split(" ").forEach((e=>{n.classList.add(e)})),n}function debounce(e,t){let n;return function(...o){clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}function applyScrollingEffect(e,t,n){const{scrolling_effect:o=!0}=e.config;if(o){if(t.previousText!==n&&(t.previousText=n,t.innerHTML=n,t.style="",t.removeAttribute("data-animated"),requestAnimationFrame((()=>{setTimeout((()=>{r(),setTimeout(r,300)}),50)})),!t.eventAdded)){const e=debounce((()=>{t.innerHTML=n,r()}),500);window.addEventListener("resize",e),t.eventAdded=!0}}else applyNonScrollingStyle(t,n);function r(){if(t.isConnected&&t.scrollWidth>t.clientWidth){const e='<span class="bubble-scroll-separator"> | </span>',o=`<span>${n+e+n+e}</span>`;t.innerHTML=`<div class="scrolling-container">${o}</div>`,t.setAttribute("data-animated","true");const r=t.querySelector(".scrolling-container span");requestAnimationFrame((()=>{if(r&&r.scrollWidth>0){const e=16,t=r.scrollWidth/2,n=Math.max(1,t/e);r.style.animationDuration=`${n.toFixed(2)}s`}})),"IntersectionObserver"in window&&(window.bubbleScrollObserver||(window.bubbleScrollObserver=new IntersectionObserver((e=>{e.forEach((e=>{const t=e.target.querySelector(".scrolling-container span");t&&(t.style.animationPlayState=e.isIntersecting?"running":"paused")}))}),{threshold:.1})),window.bubbleScrollObserver.observe(t))}}}function applyNonScrollingStyle(e,t){e.innerHTML=t,e.previousText=t,Object.assign(e.style,{whiteSpace:"normal",display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical",textOverflow:"ellipsis"})}function formatDateTime(e,t){if(!e)return"";const n=new Date(e),o=new Date;let r,a,i=Math.floor((o-n)/1e3);return isNaN(i)?"":(i<60?(r="second",a=i+1):i<3600?(r="minute",a=Math.floor(i/60)):i<86400?(r="hour",a=Math.floor(i/3600)):(r="day",a=Math.floor(i/86400)),new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(-a,r))}let cachedHomeAssistant=null,cachedMain=null,cachedDrawer=null,cachedHuiRoot=null,isCached=!1;function setLayout(e){if(!isCached){if(cachedHomeAssistant=document.querySelector("body > home-assistant"),!cachedHomeAssistant)return;if(cachedMain=cachedHomeAssistant.shadowRoot?.querySelector("home-assistant-main"),!cachedMain||!cachedMain.shadowRoot)return;if(cachedDrawer=cachedMain.shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace"),!cachedDrawer||!cachedDrawer.shadowRoot)return;if(cachedHuiRoot=cachedDrawer.shadowRoot.querySelector("hui-root"),!cachedHuiRoot||!cachedHuiRoot.shadowRoot)return;isCached=!0}if(!cachedHuiRoot.isConnected)return void(isCached=!1);const t=cachedHuiRoot.shadowRoot.querySelector("#view > hui-view > hui-masonry-view");window.isSectionView=!t;const n=window.isSectionView?"large":"normal",o=e.config.card_layout??n;if(e.previousLayout===o)return;e.previousLayout=o;const r="large"===o||"large-2-rows"===o||"large-sub-buttons-grid"===o,a="large-2-rows"===o,i="large-sub-buttons-grid"===o;if(e.content.classList.toggle("large",r),e.content.classList.toggle("rows-2",a),e.content.classList.toggle("sub-buttons-grid",i),e.elements.mainContainer&&(e.config.rows||e.config.grid_options?.rows)){if("auto"===e.config.rows||"auto"===e.config.grid_options?.rows)return;e.elements.mainContainer.style.setProperty("--row-size",e.config.rows||e.config.grid_options?.rows)}}function throttle(e,t=300){let n,o,r=new Date(0);return(...a)=>{o=a;const i=Date.now()-r;i>=t?(r=Date.now(),e(...o)):n||(n=setTimeout((()=>{n=void 0,r=Date.now(),e(...o)}),t-i))}}let scrollY=0;function injectNoScrollStyles(){if(document.getElementById("no-scroll-styles"))return;const e=document.createElement("style");e.id="no-scroll-styles",e.textContent="\n        body.no-scroll {\n            overflow: hidden;\n            position: fixed;\n            width: 100%;\n            touch-action: none;\n            left: 0;\n        }\n    ",document.head.appendChild(e)}function toggleBodyScroll(e){injectNoScrollStyles(),e?(scrollY=window.scrollY,document.body.style.top=`-${scrollY}px`,document.body.classList.add("no-scroll")):(window.scrollTo(0,scrollY),document.body.style.top="",document.body.classList.remove("no-scroll"))}},76:(e,t,n)=>{function o(e,t){try{if(e.states[t])return e.states[t]?.state}catch{}}function r(e,t){const n=e.entity_id||e.entity,r=n&&t.states[n]?t.states[n]:null,i=r?e.attribute&&r.attributes?r.attributes[e.attribute]:r.state:"unavailable";let s=e.state??e.state_not;if(Array.isArray(s)){const e=s.map((e=>o(t,e))).filter((e=>void 0!==e));s=[...s,...e]}else if("string"==typeof s){const e=o(t,s);s=[s],e&&s.push(e)}return null!=e.state?a(s).includes(i):null!=e.state_not&&!a(s).includes(i)}function a(e){return void 0===e||Array.isArray(e)?e:[e]}function i(e,t){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return!!(n=e).media_query&&matchMedia(n.media_query).matches;case"user":return function(e,t){return!(!e.users||!t.user?.id)&&e.users.includes(t.user.id)}(e,t);case"numeric_state":return function(e,t){const n=e.entity_id||e.entity,r=(n?t.states[n]:void 0)?.state;let a=e.above,i=e.below;"string"==typeof a&&(a=o(t,a)??a),"string"==typeof i&&(i=o(t,i)??i);const s=Number(r),l=Number(a),c=Number(i);return!isNaN(s)&&(null==e.above||isNaN(l)||l<s)&&(null==e.below||isNaN(c)||c>s)}(e,t);case"and":return function(e,t){return!e.conditions||i(e.conditions,t)}(e,t);case"or":return function(e,t){return!e.conditions||e.conditions.some((e=>i([e],t)))}(e,t);default:return r(e,t)}var n;return r(e,t)}))}function s(e){return null!=(e.entity_id||e.entity)&&(null!=e.state||null!=e.state_not)}function l(e){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return null!=e.media_query;case"user":return null!=e.users;case"numeric_state":return function(e){return null!=(e.entity_id||e.entity)&&(null!=e.above||null!=e.below)}(e);case"and":case"or":return function(e){return null!=e.conditions}(e);default:return s(e)}return s(e)}))}n.d(t,{XH:()=>i,db:()=>l,eC:()=>a})},382:(e,t,n)=>{function o(e){return null==e}n.d(t,{Ay:()=>gt,Hh:()=>lt,ZU:()=>nt,my:()=>st});var r={isNothing:o,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:o(e)?[]:[e]},repeat:function(e,t){var n,o="";for(n=0;n<t;n+=1)o+=e;return o},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var n,o,r,a;if(t)for(n=0,o=(a=Object.keys(t)).length;n<o;n+=1)e[r=a[n]]=t[r];return e}};function a(e,t){var n="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+="\n\n"+e.mark.snippet),o+" "+n):o}function i(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=a(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i.prototype.toString=function(e){return this.name+": "+a(this,e)};var s=i;function l(e,t,n,o,r){var a="",i="",s=Math.floor(r/2)-1;return o-t>s&&(t=o-s+(a=" ... ").length),n-o>s&&(n=o+s-(i=" ...").length),{str:a+e.slice(t,n).replace(/\t/g,"→")+i,pos:o-t+a.length}}function c(e,t){return r.repeat(" ",t-e.length)+e}var d=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],u=["scalar","sequence","mapping"],p=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===d.indexOf(t))throw new s('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach((function(n){e[n].forEach((function(e){t[String(e)]=n}))})),t}(t.styleAliases||null),-1===u.indexOf(this.kind))throw new s('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function h(e,t){var n=[];return e[t].forEach((function(e){var t=n.length;n.forEach((function(n,o){n.tag===e.tag&&n.kind===e.kind&&n.multi===e.multi&&(t=o)})),n[t]=e})),n}function b(e){return this.extend(e)}b.prototype.extend=function(e){var t=[],n=[];if(e instanceof p)n.push(e);else if(Array.isArray(e))n=n.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new s("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(n=n.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof p))throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new s("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new s("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),n.forEach((function(e){if(!(e instanceof p))throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var o=Object.create(b.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(n),o.compiledImplicit=h(o,"implicit"),o.compiledExplicit=h(o,"explicit"),o.compiledTypeMap=function(){var e,t,n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function o(e){e.multi?(n.multi[e.kind].push(e),n.multi.fallback.push(e)):n[e.kind][e.tag]=n.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(o);return n}(o.compiledImplicit,o.compiledExplicit),o};var m=b,g=new p("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),f=new p("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),_=new p("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),y=new m({explicit:[g,f,_]}),v=new p("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),w=new p("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function x(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function k(e){return 48<=e&&e<=55}function C(e){return 48<=e&&e<=57}var $=new p("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n=e.length,o=0,r=!1;if(!n)return!1;if("-"!==(t=e[o])&&"+"!==t||(t=e[++o]),"0"===t){if(o+1===n)return!0;if("b"===(t=e[++o])){for(o++;o<n;o++)if("_"!==(t=e[o])){if("0"!==t&&"1"!==t)return!1;r=!0}return r&&"_"!==t}if("x"===t){for(o++;o<n;o++)if("_"!==(t=e[o])){if(!x(e.charCodeAt(o)))return!1;r=!0}return r&&"_"!==t}if("o"===t){for(o++;o<n;o++)if("_"!==(t=e[o])){if(!k(e.charCodeAt(o)))return!1;r=!0}return r&&"_"!==t}}if("_"===t)return!1;for(;o<n;o++)if("_"!==(t=e[o])){if(!C(e.charCodeAt(o)))return!1;r=!0}return!(!r||"_"===t)},construct:function(e){var t,n=e,o=1;if(-1!==n.indexOf("_")&&(n=n.replace(/_/g,"")),"-"!==(t=n[0])&&"+"!==t||("-"===t&&(o=-1),t=(n=n.slice(1))[0]),"0"===n)return 0;if("0"===t){if("b"===n[1])return o*parseInt(n.slice(2),2);if("x"===n[1])return o*parseInt(n.slice(2),16);if("o"===n[1])return o*parseInt(n.slice(2),8)}return o*parseInt(n,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!r.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),S=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),A=/^[-+]?[0-9]+e/,E=new p("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!S.test(e)||"_"===e[e.length-1])},construct:function(e){var t,n;return n="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:n*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||r.isNegativeZero(e))},represent:function(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(r.isNegativeZero(e))return"-0.0";return n=e.toString(10),A.test(n)?n.replace("e",".e"):n},defaultStyle:"lowercase"}),M=y.extend({implicit:[v,w,$,E]}),T=M,L=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),O=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),I=new p("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==L.exec(e)||null!==O.exec(e))},construct:function(e){var t,n,o,r,a,i,s,l,c=0,d=null;if(null===(t=L.exec(e))&&(t=O.exec(e)),null===t)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,o,r));if(a=+t[4],i=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(d=-d)),l=new Date(Date.UTC(n,o,r,a,i,s,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(e){return e.toISOString()}}),B=new p("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r",P=new p("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n,o=0,r=e.length,a=j;for(n=0;n<r;n++)if(!((t=a.indexOf(e.charAt(n)))>64)){if(t<0)return!1;o+=6}return o%8==0},construct:function(e){var t,n,o=e.replace(/[\r\n=]/g,""),r=o.length,a=j,i=0,s=[];for(t=0;t<r;t++)t%4==0&&t&&(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)),i=i<<6|a.indexOf(o.charAt(t));return 0==(n=r%4*6)?(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)):18===n?(s.push(i>>10&255),s.push(i>>2&255)):12===n&&s.push(i>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,n,o="",r=0,a=e.length,i=j;for(t=0;t<a;t++)t%3==0&&t&&(o+=i[r>>18&63],o+=i[r>>12&63],o+=i[r>>6&63],o+=i[63&r]),r=(r<<8)+e[t];return 0==(n=a%3)?(o+=i[r>>18&63],o+=i[r>>12&63],o+=i[r>>6&63],o+=i[63&r]):2===n?(o+=i[r>>10&63],o+=i[r>>4&63],o+=i[r<<2&63],o+=i[64]):1===n&&(o+=i[r>>2&63],o+=i[r<<4&63],o+=i[64],o+=i[64]),o}}),U=Object.prototype.hasOwnProperty,D=Object.prototype.toString,V=new p("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,o,r,a,i=[],s=e;for(t=0,n=s.length;t<n;t+=1){if(o=s[t],a=!1,"[object Object]"!==D.call(o))return!1;for(r in o)if(U.call(o,r)){if(a)return!1;a=!0}if(!a)return!1;if(-1!==i.indexOf(r))return!1;i.push(r)}return!0},construct:function(e){return null!==e?e:[]}}),z=Object.prototype.toString,N=new p("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,o,r,a,i=e;for(a=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(o=i[t],"[object Object]"!==z.call(o))return!1;if(1!==(r=Object.keys(o)).length)return!1;a[t]=[r[0],o[r[0]]]}return!0},construct:function(e){if(null===e)return[];var t,n,o,r,a,i=e;for(a=new Array(i.length),t=0,n=i.length;t<n;t+=1)o=i[t],r=Object.keys(o),a[t]=[r[0],o[r[0]]];return a}}),F=Object.prototype.hasOwnProperty,H=new p("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,n=e;for(t in n)if(F.call(n,t)&&null!==n[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),q=T.extend({implicit:[I,B],explicit:[P,V,N,H]}),R=Object.prototype.hasOwnProperty,Y=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,W=/[\x85\u2028\u2029]/,G=/[,\[\]\{\}]/,K=/^(?:!|!!|![a-z\-]+!)$/i,X=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function J(e){return Object.prototype.toString.call(e)}function Z(e){return 10===e||13===e}function Q(e){return 9===e||32===e}function ee(e){return 9===e||32===e||10===e||13===e}function te(e){return 44===e||91===e||93===e||123===e||125===e}function ne(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function oe(e){return 120===e?2:117===e?4:85===e?8:0}function re(e){return 48<=e&&e<=57?e-48:-1}function ae(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function ie(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var se=new Array(256),le=new Array(256),ce=0;ce<256;ce++)se[ce]=ae(ce)?1:0,le[ce]=ae(ce);function de(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||q,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function ue(e,t){var n={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return n.snippet=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var n,o=/\r?\n|\r|\0/g,a=[0],i=[],s=-1;n=o.exec(e.buffer);)i.push(n.index),a.push(n.index+n[0].length),e.position<=n.index&&s<0&&(s=a.length-2);s<0&&(s=a.length-1);var d,u,p="",h=Math.min(e.line+t.linesAfter,i.length).toString().length,b=t.maxLength-(t.indent+h+3);for(d=1;d<=t.linesBefore&&!(s-d<0);d++)u=l(e.buffer,a[s-d],i[s-d],e.position-(a[s]-a[s-d]),b),p=r.repeat(" ",t.indent)+c((e.line-d+1).toString(),h)+" | "+u.str+"\n"+p;for(u=l(e.buffer,a[s],i[s],e.position,b),p+=r.repeat(" ",t.indent)+c((e.line+1).toString(),h)+" | "+u.str+"\n",p+=r.repeat("-",t.indent+h+3+u.pos)+"^\n",d=1;d<=t.linesAfter&&!(s+d>=i.length);d++)u=l(e.buffer,a[s+d],i[s+d],e.position-(a[s]-a[s+d]),b),p+=r.repeat(" ",t.indent)+c((e.line+d+1).toString(),h)+" | "+u.str+"\n";return p.replace(/\n$/,"")}(n),new s(t,n)}function pe(e,t){throw ue(e,t)}function he(e,t){e.onWarning&&e.onWarning.call(null,ue(e,t))}var be={YAML:function(e,t,n){var o,r,a;null!==e.version&&pe(e,"duplication of %YAML directive"),1!==n.length&&pe(e,"YAML directive accepts exactly one argument"),null===(o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&pe(e,"ill-formed argument of the YAML directive"),r=parseInt(o[1],10),a=parseInt(o[2],10),1!==r&&pe(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=a<2,1!==a&&2!==a&&he(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var o,r;2!==n.length&&pe(e,"TAG directive accepts exactly two arguments"),o=n[0],r=n[1],K.test(o)||pe(e,"ill-formed tag handle (first argument) of the TAG directive"),R.call(e.tagMap,o)&&pe(e,'there is a previously declared suffix for "'+o+'" tag handle'),X.test(r)||pe(e,"ill-formed tag prefix (second argument) of the TAG directive");try{r=decodeURIComponent(r)}catch(t){pe(e,"tag prefix is malformed: "+r)}e.tagMap[o]=r}};function me(e,t,n,o){var r,a,i,s;if(t<n){if(s=e.input.slice(t,n),o)for(r=0,a=s.length;r<a;r+=1)9===(i=s.charCodeAt(r))||32<=i&&i<=1114111||pe(e,"expected valid JSON character");else Y.test(s)&&pe(e,"the stream contains non-printable characters");e.result+=s}}function ge(e,t,n,o){var a,i,s,l;for(r.isObject(n)||pe(e,"cannot merge mappings; the provided source object is unacceptable"),s=0,l=(a=Object.keys(n)).length;s<l;s+=1)i=a[s],R.call(t,i)||(t[i]=n[i],o[i]=!0)}function fe(e,t,n,o,r,a,i,s,l){var c,d;if(Array.isArray(r))for(c=0,d=(r=Array.prototype.slice.call(r)).length;c<d;c+=1)Array.isArray(r[c])&&pe(e,"nested arrays are not supported inside keys"),"object"==typeof r&&"[object Object]"===J(r[c])&&(r[c]="[object Object]");if("object"==typeof r&&"[object Object]"===J(r)&&(r="[object Object]"),r=String(r),null===t&&(t={}),"tag:yaml.org,2002:merge"===o)if(Array.isArray(a))for(c=0,d=a.length;c<d;c+=1)ge(e,t,a[c],n);else ge(e,t,a,n);else e.json||R.call(n,r)||!R.call(t,r)||(e.line=i||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,pe(e,"duplicated mapping key")),"__proto__"===r?Object.defineProperty(t,r,{configurable:!0,enumerable:!0,writable:!0,value:a}):t[r]=a,delete n[r];return t}function _e(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):pe(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ye(e,t,n){for(var o=0,r=e.input.charCodeAt(e.position);0!==r;){for(;Q(r);)9===r&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&35===r)do{r=e.input.charCodeAt(++e.position)}while(10!==r&&13!==r&&0!==r);if(!Z(r))break;for(_e(e),r=e.input.charCodeAt(e.position),o++,e.lineIndent=0;32===r;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return-1!==n&&0!==o&&e.lineIndent<n&&he(e,"deficient indentation"),o}function ve(e){var t,n=e.position;return!(45!==(t=e.input.charCodeAt(n))&&46!==t||t!==e.input.charCodeAt(n+1)||t!==e.input.charCodeAt(n+2)||(n+=3,0!==(t=e.input.charCodeAt(n))&&!ee(t)))}function we(e,t){1===t?e.result+=" ":t>1&&(e.result+=r.repeat("\n",t-1))}function xe(e,t){var n,o,r=e.tag,a=e.anchor,i=[],s=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),o=e.input.charCodeAt(e.position);0!==o&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,pe(e,"tab characters must not be used in indentation")),45===o)&&ee(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,ye(e,!0,-1)&&e.lineIndent<=t)i.push(null),o=e.input.charCodeAt(e.position);else if(n=e.line,$e(e,t,3,!1,!0),i.push(e.result),ye(e,!0,-1),o=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==o)pe(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=r,e.anchor=a,e.kind="sequence",e.result=i,!0)}function ke(e){var t,n,o,r,a=!1,i=!1;if(33!==(r=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&pe(e,"duplication of a tag property"),60===(r=e.input.charCodeAt(++e.position))?(a=!0,r=e.input.charCodeAt(++e.position)):33===r?(i=!0,n="!!",r=e.input.charCodeAt(++e.position)):n="!",t=e.position,a){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&62!==r);e.position<e.length?(o=e.input.slice(t,e.position),r=e.input.charCodeAt(++e.position)):pe(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==r&&!ee(r);)33===r&&(i?pe(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),K.test(n)||pe(e,"named tag handle cannot contain such characters"),i=!0,t=e.position+1)),r=e.input.charCodeAt(++e.position);o=e.input.slice(t,e.position),G.test(o)&&pe(e,"tag suffix cannot contain flow indicator characters")}o&&!X.test(o)&&pe(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch(t){pe(e,"tag name is malformed: "+o)}return a?e.tag=o:R.call(e.tagMap,n)?e.tag=e.tagMap[n]+o:"!"===n?e.tag="!"+o:"!!"===n?e.tag="tag:yaml.org,2002:"+o:pe(e,'undeclared tag handle "'+n+'"'),!0}function Ce(e){var t,n;if(38!==(n=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&pe(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!ee(n)&&!te(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&pe(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function $e(e,t,n,o,a){var i,s,l,c,d,u,p,h,b,m=1,g=!1,f=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,i=s=l=4===n||3===n,o&&ye(e,!0,-1)&&(g=!0,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)),1===m)for(;ke(e)||Ce(e);)ye(e,!0,-1)?(g=!0,l=i,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)):l=!1;if(l&&(l=g||a),1!==m&&4!==n||(h=1===n||2===n?t:t+1,b=e.position-e.lineStart,1===m?l&&(xe(e,b)||function(e,t,n){var o,r,a,i,s,l,c,d=e.tag,u=e.anchor,p={},h=Object.create(null),b=null,m=null,g=null,f=!1,_=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=p),c=e.input.charCodeAt(e.position);0!==c;){if(f||-1===e.firstTabInLine||(e.position=e.firstTabInLine,pe(e,"tab characters must not be used in indentation")),o=e.input.charCodeAt(e.position+1),a=e.line,63!==c&&58!==c||!ee(o)){if(i=e.line,s=e.lineStart,l=e.position,!$e(e,n,2,!1,!0))break;if(e.line===a){for(c=e.input.charCodeAt(e.position);Q(c);)c=e.input.charCodeAt(++e.position);if(58===c)ee(c=e.input.charCodeAt(++e.position))||pe(e,"a whitespace character is expected after the key-value separator within a block mapping"),f&&(fe(e,p,h,b,m,null,i,s,l),b=m=g=null),_=!0,f=!1,r=!1,b=e.tag,m=e.result;else{if(!_)return e.tag=d,e.anchor=u,!0;pe(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!_)return e.tag=d,e.anchor=u,!0;pe(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(f&&(fe(e,p,h,b,m,null,i,s,l),b=m=g=null),_=!0,f=!0,r=!0):f?(f=!1,r=!0):pe(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=o;if((e.line===a||e.lineIndent>t)&&(f&&(i=e.line,s=e.lineStart,l=e.position),$e(e,t,4,!0,r)&&(f?m=e.result:g=e.result),f||(fe(e,p,h,b,m,g,i,s,l),b=m=g=null),ye(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>t)&&0!==c)pe(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return f&&fe(e,p,h,b,m,null,i,s,l),_&&(e.tag=d,e.anchor=u,e.kind="mapping",e.result=p),_}(e,b,h))||function(e,t){var n,o,r,a,i,s,l,c,d,u,p,h,b=!0,m=e.tag,g=e.anchor,f=Object.create(null);if(91===(h=e.input.charCodeAt(e.position)))i=93,c=!1,a=[];else{if(123!==h)return!1;i=125,c=!0,a={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),h=e.input.charCodeAt(++e.position);0!==h;){if(ye(e,!0,t),(h=e.input.charCodeAt(e.position))===i)return e.position++,e.tag=m,e.anchor=g,e.kind=c?"mapping":"sequence",e.result=a,!0;b?44===h&&pe(e,"expected the node content, but found ','"):pe(e,"missed comma between flow collection entries"),p=null,s=l=!1,63===h&&ee(e.input.charCodeAt(e.position+1))&&(s=l=!0,e.position++,ye(e,!0,t)),n=e.line,o=e.lineStart,r=e.position,$e(e,t,1,!1,!0),u=e.tag,d=e.result,ye(e,!0,t),h=e.input.charCodeAt(e.position),!l&&e.line!==n||58!==h||(s=!0,h=e.input.charCodeAt(++e.position),ye(e,!0,t),$e(e,t,1,!1,!0),p=e.result),c?fe(e,a,f,u,d,p,n,o,r):s?a.push(fe(e,null,f,u,d,p,n,o,r)):a.push(d),ye(e,!0,t),44===(h=e.input.charCodeAt(e.position))?(b=!0,h=e.input.charCodeAt(++e.position)):b=!1}pe(e,"unexpected end of the stream within a flow collection")}(e,h)?f=!0:(s&&function(e,t){var n,o,a,i,s=1,l=!1,c=!1,d=t,u=0,p=!1;if(124===(i=e.input.charCodeAt(e.position)))o=!1;else{if(62!==i)return!1;o=!0}for(e.kind="scalar",e.result="";0!==i;)if(43===(i=e.input.charCodeAt(++e.position))||45===i)1===s?s=43===i?3:2:pe(e,"repeat of a chomping mode identifier");else{if(!((a=re(i))>=0))break;0===a?pe(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):c?pe(e,"repeat of an indentation width identifier"):(d=t+a-1,c=!0)}if(Q(i)){do{i=e.input.charCodeAt(++e.position)}while(Q(i));if(35===i)do{i=e.input.charCodeAt(++e.position)}while(!Z(i)&&0!==i)}for(;0!==i;){for(_e(e),e.lineIndent=0,i=e.input.charCodeAt(e.position);(!c||e.lineIndent<d)&&32===i;)e.lineIndent++,i=e.input.charCodeAt(++e.position);if(!c&&e.lineIndent>d&&(d=e.lineIndent),Z(i))u++;else{if(e.lineIndent<d){3===s?e.result+=r.repeat("\n",l?1+u:u):1===s&&l&&(e.result+="\n");break}for(o?Q(i)?(p=!0,e.result+=r.repeat("\n",l?1+u:u)):p?(p=!1,e.result+=r.repeat("\n",u+1)):0===u?l&&(e.result+=" "):e.result+=r.repeat("\n",u):e.result+=r.repeat("\n",l?1+u:u),l=!0,c=!0,u=0,n=e.position;!Z(i)&&0!==i;)i=e.input.charCodeAt(++e.position);me(e,n,e.position,!1)}}return!0}(e,h)||function(e,t){var n,o,r;if(39!==(n=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,o=r=e.position;0!==(n=e.input.charCodeAt(e.position));)if(39===n){if(me(e,o,e.position,!0),39!==(n=e.input.charCodeAt(++e.position)))return!0;o=e.position,e.position++,r=e.position}else Z(n)?(me(e,o,r,!0),we(e,ye(e,!1,t)),o=r=e.position):e.position===e.lineStart&&ve(e)?pe(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);pe(e,"unexpected end of the stream within a single quoted scalar")}(e,h)||function(e,t){var n,o,r,a,i,s;if(34!==(s=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=o=e.position;0!==(s=e.input.charCodeAt(e.position));){if(34===s)return me(e,n,e.position,!0),e.position++,!0;if(92===s){if(me(e,n,e.position,!0),Z(s=e.input.charCodeAt(++e.position)))ye(e,!1,t);else if(s<256&&se[s])e.result+=le[s],e.position++;else if((i=oe(s))>0){for(r=i,a=0;r>0;r--)(i=ne(s=e.input.charCodeAt(++e.position)))>=0?a=(a<<4)+i:pe(e,"expected hexadecimal character");e.result+=ie(a),e.position++}else pe(e,"unknown escape sequence");n=o=e.position}else Z(s)?(me(e,n,o,!0),we(e,ye(e,!1,t)),n=o=e.position):e.position===e.lineStart&&ve(e)?pe(e,"unexpected end of the document within a double quoted scalar"):(e.position++,o=e.position)}pe(e,"unexpected end of the stream within a double quoted scalar")}(e,h)?f=!0:function(e){var t,n,o;if(42!==(o=e.input.charCodeAt(e.position)))return!1;for(o=e.input.charCodeAt(++e.position),t=e.position;0!==o&&!ee(o)&&!te(o);)o=e.input.charCodeAt(++e.position);return e.position===t&&pe(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),R.call(e.anchorMap,n)||pe(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],ye(e,!0,-1),!0}(e)?(f=!0,null===e.tag&&null===e.anchor||pe(e,"alias node should not have any properties")):function(e,t,n){var o,r,a,i,s,l,c,d,u=e.kind,p=e.result;if(ee(d=e.input.charCodeAt(e.position))||te(d)||35===d||38===d||42===d||33===d||124===d||62===d||39===d||34===d||37===d||64===d||96===d)return!1;if((63===d||45===d)&&(ee(o=e.input.charCodeAt(e.position+1))||n&&te(o)))return!1;for(e.kind="scalar",e.result="",r=a=e.position,i=!1;0!==d;){if(58===d){if(ee(o=e.input.charCodeAt(e.position+1))||n&&te(o))break}else if(35===d){if(ee(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&ve(e)||n&&te(d))break;if(Z(d)){if(s=e.line,l=e.lineStart,c=e.lineIndent,ye(e,!1,-1),e.lineIndent>=t){i=!0,d=e.input.charCodeAt(e.position);continue}e.position=a,e.line=s,e.lineStart=l,e.lineIndent=c;break}}i&&(me(e,r,a,!1),we(e,e.line-s),r=a=e.position,i=!1),Q(d)||(a=e.position+1),d=e.input.charCodeAt(++e.position)}return me(e,r,a,!1),!!e.result||(e.kind=u,e.result=p,!1)}(e,h,1===n)&&(f=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===m&&(f=l&&xe(e,b))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&pe(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),c=0,d=e.implicitTypes.length;c<d;c+=1)if((p=e.implicitTypes[c]).resolve(e.result)){e.result=p.construct(e.result),e.tag=p.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(R.call(e.typeMap[e.kind||"fallback"],e.tag))p=e.typeMap[e.kind||"fallback"][e.tag];else for(p=null,c=0,d=(u=e.typeMap.multi[e.kind||"fallback"]).length;c<d;c+=1)if(e.tag.slice(0,u[c].tag.length)===u[c].tag){p=u[c];break}p||pe(e,"unknown tag !<"+e.tag+">"),null!==e.result&&p.kind!==e.kind&&pe(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+p.kind+'", not "'+e.kind+'"'),p.resolve(e.result,e.tag)?(e.result=p.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):pe(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||f}function Se(e){var t,n,o,r,a=e.position,i=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(r=e.input.charCodeAt(e.position))&&(ye(e,!0,-1),r=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==r));){for(i=!0,r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!ee(r);)r=e.input.charCodeAt(++e.position);for(o=[],(n=e.input.slice(t,e.position)).length<1&&pe(e,"directive name must not be less than one character in length");0!==r;){for(;Q(r);)r=e.input.charCodeAt(++e.position);if(35===r){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&!Z(r));break}if(Z(r))break;for(t=e.position;0!==r&&!ee(r);)r=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}0!==r&&_e(e),R.call(be,n)?be[n](e,n,o):he(e,'unknown document directive "'+n+'"')}ye(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,ye(e,!0,-1)):i&&pe(e,"directives end mark is expected"),$e(e,e.lineIndent-1,4,!1,!0),ye(e,!0,-1),e.checkLineBreaks&&W.test(e.input.slice(a,e.position))&&he(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&ve(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,ye(e,!0,-1)):e.position<e.length-1&&pe(e,"end of the stream or a document separator is expected")}function Ae(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var n=new de(e,t),o=e.indexOf("\0");for(-1!==o&&(n.position=o,pe(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)Se(n);return n.documents}var Ee=function(e,t,n){null!==t&&"object"==typeof t&&void 0===n&&(n=t,t=null);var o=Ae(e,n);if("function"!=typeof t)return o;for(var r=0,a=o.length;r<a;r+=1)t(o[r])},Me=function(e,t){var n=Ae(e,t);if(0!==n.length){if(1===n.length)return n[0];throw new s("expected a single document in the stream, but found more")}},Te=Object.prototype.toString,Le=Object.prototype.hasOwnProperty,Oe=65279,Ie={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Be=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],je=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Pe(e){var t,n,o;if(t=e.toString(16).toUpperCase(),e<=255)n="x",o=2;else if(e<=65535)n="u",o=4;else{if(!(e<=4294967295))throw new s("code point within a string may not be greater than 0xFFFFFFFF");n="U",o=8}return"\\"+n+r.repeat("0",o-t.length)+t}function Ue(e){this.schema=e.schema||q,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=r.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var n,o,r,a,i,s,l;if(null===t)return{};for(n={},r=0,a=(o=Object.keys(t)).length;r<a;r+=1)i=o[r],s=String(t[i]),"!!"===i.slice(0,2)&&(i="tag:yaml.org,2002:"+i.slice(2)),(l=e.compiledTypeMap.fallback[i])&&Le.call(l.styleAliases,s)&&(s=l.styleAliases[s]),n[i]=s;return n}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function De(e,t){for(var n,o=r.repeat(" ",t),a=0,i=-1,s="",l=e.length;a<l;)-1===(i=e.indexOf("\n",a))?(n=e.slice(a),a=l):(n=e.slice(a,i+1),a=i+1),n.length&&"\n"!==n&&(s+=o),s+=n;return s}function Ve(e,t){return"\n"+r.repeat(" ",e.indent*t)}function ze(e){return 32===e||9===e}function Ne(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==Oe||65536<=e&&e<=1114111}function Fe(e){return Ne(e)&&e!==Oe&&13!==e&&10!==e}function He(e,t,n){var o=Fe(e),r=o&&!ze(e);return(n?o:o&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!r)||Fe(t)&&!ze(t)&&35===e||58===t&&r}function qe(e,t){var n,o=e.charCodeAt(t);return o>=55296&&o<=56319&&t+1<e.length&&(n=e.charCodeAt(t+1))>=56320&&n<=57343?1024*(o-55296)+n-56320+65536:o}function Re(e){return/^\n* /.test(e)}function Ye(e,t,n,o,r){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==Be.indexOf(t)||je.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var a=e.indent*Math.max(1,n),i=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),l=o||e.flowLevel>-1&&n>=e.flowLevel;switch(function(e,t,n,o,r,a,i,s){var l,c=0,d=null,u=!1,p=!1,h=-1!==o,b=-1,m=function(e){return Ne(e)&&e!==Oe&&!ze(e)&&45!==e&&63!==e&&58!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&35!==e&&38!==e&&42!==e&&33!==e&&124!==e&&61!==e&&62!==e&&39!==e&&34!==e&&37!==e&&64!==e&&96!==e}(qe(e,0))&&function(e){return!ze(e)&&58!==e}(qe(e,e.length-1));if(t||i)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!Ne(c=qe(e,l)))return 5;m=m&&He(c,d,s),d=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if(10===(c=qe(e,l)))u=!0,h&&(p=p||l-b-1>o&&" "!==e[b+1],b=l);else if(!Ne(c))return 5;m=m&&He(c,d,s),d=c}p=p||h&&l-b-1>o&&" "!==e[b+1]}return u||p?n>9&&Re(e)?5:i?2===a?5:2:p?4:3:!m||i||r(e)?2===a?5:2:1}(t,l,e.indent,i,(function(t){return function(e,t){var n,o;for(n=0,o=e.implicitTypes.length;n<o;n+=1)if(e.implicitTypes[n].resolve(t))return!0;return!1}(e,t)}),e.quotingType,e.forceQuotes&&!o,r)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+We(t,e.indent)+Ge(De(t,a));case 4:return">"+We(t,e.indent)+Ge(De(function(e,t){for(var n,o,r,a=/(\n+)([^\n]*)/g,i=(r=-1!==(r=e.indexOf("\n"))?r:e.length,a.lastIndex=r,Ke(e.slice(0,r),t)),s="\n"===e[0]||" "===e[0];o=a.exec(e);){var l=o[1],c=o[2];n=" "===c[0],i+=l+(s||n||""===c?"":"\n")+Ke(c,t),s=n}return i}(t,i),a));case 5:return'"'+function(e){for(var t,n="",o=0,r=0;r<e.length;o>=65536?r+=2:r++)o=qe(e,r),!(t=Ie[o])&&Ne(o)?(n+=e[r],o>=65536&&(n+=e[r+1])):n+=t||Pe(o);return n}(t)+'"';default:throw new s("impossible error: invalid scalar style")}}()}function We(e,t){var n=Re(e)?String(t):"",o="\n"===e[e.length-1];return n+(!o||"\n"!==e[e.length-2]&&"\n"!==e?o?"":"-":"+")+"\n"}function Ge(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function Ke(e,t){if(""===e||" "===e[0])return e;for(var n,o,r=/ [^ ]/g,a=0,i=0,s=0,l="";n=r.exec(e);)(s=n.index)-a>t&&(o=i>a?i:s,l+="\n"+e.slice(a,o),a=o+1),i=s;return l+="\n",e.length-a>t&&i>a?l+=e.slice(a,i)+"\n"+e.slice(i+1):l+=e.slice(a),l.slice(1)}function Xe(e,t,n,o){var r,a,i,s="",l=e.tag;for(r=0,a=n.length;r<a;r+=1)i=n[r],e.replacer&&(i=e.replacer.call(n,String(r),i)),(Ze(e,t+1,i,!0,!0,!1,!0)||void 0===i&&Ze(e,t+1,null,!0,!0,!1,!0))&&(o&&""===s||(s+=Ve(e,t)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function Je(e,t,n){var o,r,a,i,l,c;for(a=0,i=(r=n?e.explicitTypes:e.implicitTypes).length;a<i;a+=1)if(((l=r[a]).instanceOf||l.predicate)&&(!l.instanceOf||"object"==typeof t&&t instanceof l.instanceOf)&&(!l.predicate||l.predicate(t))){if(n?l.multi&&l.representName?e.tag=l.representName(t):e.tag=l.tag:e.tag="?",l.represent){if(c=e.styleMap[l.tag]||l.defaultStyle,"[object Function]"===Te.call(l.represent))o=l.represent(t,c);else{if(!Le.call(l.represent,c))throw new s("!<"+l.tag+'> tag resolver accepts not "'+c+'" style');o=l.represent[c](t,c)}e.dump=o}return!0}return!1}function Ze(e,t,n,o,r,a,i){e.tag=null,e.dump=n,Je(e,n,!1)||Je(e,n,!0);var l,c=Te.call(e.dump),d=o;o&&(o=e.flowLevel<0||e.flowLevel>t);var u,p,h="[object Object]"===c||"[object Array]"===c;if(h&&(p=-1!==(u=e.duplicates.indexOf(n))),(null!==e.tag&&"?"!==e.tag||p||2!==e.indent&&t>0)&&(r=!1),p&&e.usedDuplicates[u])e.dump="*ref_"+u;else{if(h&&p&&!e.usedDuplicates[u]&&(e.usedDuplicates[u]=!0),"[object Object]"===c)o&&0!==Object.keys(e.dump).length?(function(e,t,n,o){var r,a,i,l,c,d,u="",p=e.tag,h=Object.keys(n);if(!0===e.sortKeys)h.sort();else if("function"==typeof e.sortKeys)h.sort(e.sortKeys);else if(e.sortKeys)throw new s("sortKeys must be a boolean or a function");for(r=0,a=h.length;r<a;r+=1)d="",o&&""===u||(d+=Ve(e,t)),l=n[i=h[r]],e.replacer&&(l=e.replacer.call(n,i,l)),Ze(e,t+1,i,!0,!0,!0)&&((c=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?d+="?":d+="? "),d+=e.dump,c&&(d+=Ve(e,t)),Ze(e,t+1,l,!0,c)&&(e.dump&&10===e.dump.charCodeAt(0)?d+=":":d+=": ",u+=d+=e.dump));e.tag=p,e.dump=u||"{}"}(e,t,e.dump,r),p&&(e.dump="&ref_"+u+e.dump)):(function(e,t,n){var o,r,a,i,s,l="",c=e.tag,d=Object.keys(n);for(o=0,r=d.length;o<r;o+=1)s="",""!==l&&(s+=", "),e.condenseFlow&&(s+='"'),i=n[a=d[o]],e.replacer&&(i=e.replacer.call(n,a,i)),Ze(e,t,a,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Ze(e,t,i,!1,!1)&&(l+=s+=e.dump));e.tag=c,e.dump="{"+l+"}"}(e,t,e.dump),p&&(e.dump="&ref_"+u+" "+e.dump));else if("[object Array]"===c)o&&0!==e.dump.length?(e.noArrayIndent&&!i&&t>0?Xe(e,t-1,e.dump,r):Xe(e,t,e.dump,r),p&&(e.dump="&ref_"+u+e.dump)):(function(e,t,n){var o,r,a,i="",s=e.tag;for(o=0,r=n.length;o<r;o+=1)a=n[o],e.replacer&&(a=e.replacer.call(n,String(o),a)),(Ze(e,t,a,!1,!1)||void 0===a&&Ze(e,t,null,!1,!1))&&(""!==i&&(i+=","+(e.condenseFlow?"":" ")),i+=e.dump);e.tag=s,e.dump="["+i+"]"}(e,t,e.dump),p&&(e.dump="&ref_"+u+" "+e.dump));else{if("[object String]"!==c){if("[object Undefined]"===c)return!1;if(e.skipInvalid)return!1;throw new s("unacceptable kind of an object to dump "+c)}"?"!==e.tag&&Ye(e,e.dump,t,a,d)}null!==e.tag&&"?"!==e.tag&&(l=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),l="!"===e.tag[0]?"!"+l:"tag:yaml.org,2002:"===l.slice(0,18)?"!!"+l.slice(18):"!<"+l+">",e.dump=l+" "+e.dump)}return!0}function Qe(e,t){var n,o,r=[],a=[];for(et(e,r,a),n=0,o=a.length;n<o;n+=1)t.duplicates.push(r[a[n]]);t.usedDuplicates=new Array(o)}function et(e,t,n){var o,r,a;if(null!==e&&"object"==typeof e)if(-1!==(r=t.indexOf(e)))-1===n.indexOf(r)&&n.push(r);else if(t.push(e),Array.isArray(e))for(r=0,a=e.length;r<a;r+=1)et(e[r],t,n);else for(r=0,a=(o=Object.keys(e)).length;r<a;r+=1)et(e[o[r]],t,n)}function tt(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var nt=p,ot=m,rt=y,at=M,it=T,st=q,lt=Me,ct=Ee,dt=function(e,t){var n=new Ue(t=t||{});n.noRefs||Qe(e,n);var o=e;return n.replacer&&(o=n.replacer.call({"":o},"",o)),Ze(n,0,o,!0,!0)?n.dump+"\n":""},ut=s,pt={binary:P,float:E,map:_,null:v,pairs:N,set:H,timestamp:I,bool:w,int:$,merge:B,omap:V,seq:f,str:g},ht=tt("safeLoad","load"),bt=tt("safeLoadAll","loadAll"),mt=tt("safeDump","dump");const gt={Type:nt,Schema:ot,FAILSAFE_SCHEMA:rt,JSON_SCHEMA:at,CORE_SCHEMA:it,DEFAULT_SCHEMA:st,load:lt,loadAll:ct,dump:dt,YAMLException:ut,types:pt,safeLoad:ht,safeLoadAll:bt,safeDump:mt}}},__webpack_module_cache__={},leafPrototypes,getProto;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}getProto=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var n=Object.create(null);__webpack_require__.r(n);var o={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var r=2&t&&e;"object"==typeof r&&!~leafPrototypes.indexOf(r);r=getProto(r))Object.getOwnPropertyNames(r).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,__webpack_require__.d(n,o),n},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};let version="v3.0.0-beta.5";function initializeContent(e){if(!e.content){let t=e.shadowRoot||e.attachShadow({mode:"open"}),n=document.createElement("ha-card");n.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let o=document.createElement("div");o.className="card-content",o.style.padding="0",n.appendChild(o),t.appendChild(n),e.card=n,e.content=o}}const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(e,t,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let t=this.o;const n=this.t;if(e&&void 0===t){const e=void 0!==n&&1===n.length;e&&(t=o.get(n)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(n,t))}return t}toString(){return this.cssText}}const r=e=>new n("string"==typeof e?e:e+"",void 0,s),i=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new n(o,e,s)},S=(n,o)=>{if(e)n.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of o){const o=document.createElement("style"),r=t.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=e.cssText,n.appendChild(o)}},c=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return r(t)})(e):e,{is:reactive_element_i,defineProperty:reactive_element_e,getOwnPropertyDescriptor:reactive_element_r,getOwnPropertyNames:h,getOwnPropertySymbols:reactive_element_o,getPrototypeOf:reactive_element_n}=Object,a=globalThis,reactive_element_c=a.trustedTypes,l=reactive_element_c?reactive_element_c.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(e,t)=>e,u={toAttribute(e,t){switch(t){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},f=(e,t)=>!reactive_element_i(e,t),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&reactive_element_e(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:r}=reactive_element_r(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const a=o?.call(this);r.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const e=reactive_element_n(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const e=this.properties,t=[...h(e),...reactive_element_o(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:u).toAttribute(t,n.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:u;this._$Em=o,this[o]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??f)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,p?.({ReactiveElement:b}),(a.reactiveElementVersions??=[]).push("2.0.4");const lit_html_t=globalThis,lit_html_i=lit_html_t.trustedTypes,lit_html_s=lit_html_i?lit_html_i.createPolicy("lit-html",{createHTML:e=>e}):void 0,lit_html_e="$lit$",lit_html_h=`lit$${Math.random().toFixed(9).slice(2)}$`,lit_html_o="?"+lit_html_h,lit_html_n=`<${lit_html_o}>`,lit_html_r=document,lit_html_l=()=>lit_html_r.createComment(""),lit_html_c=e=>null===e||"object"!=typeof e&&"function"!=typeof e,lit_html_a=Array.isArray,lit_html_u=e=>lit_html_a(e)||"function"==typeof e?.[Symbol.iterator],lit_html_d="[ \t\n\f\r]",lit_html_f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${lit_html_d}(?:([^\\s"'>=/]+)(${lit_html_d}*=${lit_html_d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),lit_html_p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,lit_html_y=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),x=lit_html_y(1),lit_html_b=lit_html_y(2),w=lit_html_y(3),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=lit_html_r.createTreeWalker(lit_html_r,129);function P(e,t){if(!lit_html_a(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==lit_html_s?lit_html_s.createHTML(t):t}const V=(e,t)=>{const n=e.length-1,o=[];let r,a=2===t?"<svg>":3===t?"<math>":"",i=lit_html_f;for(let t=0;t<n;t++){const n=e[t];let s,l,c=-1,d=0;for(;d<n.length&&(i.lastIndex=d,l=i.exec(n),null!==l);)d=i.lastIndex,i===lit_html_f?"!--"===l[1]?i=v:void 0!==l[1]?i=_:void 0!==l[2]?($.test(l[2])&&(r=RegExp("</"+l[2],"g")),i=m):void 0!==l[3]&&(i=m):i===m?">"===l[0]?(i=r??lit_html_f,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,s=l[1],i=void 0===l[3]?m:'"'===l[3]?g:lit_html_p):i===g||i===lit_html_p?i=m:i===v||i===_?i=lit_html_f:(i=m,r=void 0);const u=i===m&&e[t+1].startsWith("/>")?" ":"";a+=i===lit_html_f?n+lit_html_n:c>=0?(o.push(s),n.slice(0,c)+lit_html_e+n.slice(c)+lit_html_h+u):n+lit_html_h+(-2===c?t:u)}return[P(e,a+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class N{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,a=0;const i=e.length-1,s=this.parts,[l,c]=V(e,t);if(this.el=N.createElement(l,n),C.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=C.nextNode())&&s.length<i;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(lit_html_e)){const t=c[a++],n=o.getAttribute(e).split(lit_html_h),i=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:i[2],strings:n,ctor:"."===i[1]?H:"?"===i[1]?I:"@"===i[1]?L:k}),o.removeAttribute(e)}else e.startsWith(lit_html_h)&&(s.push({type:6,index:r}),o.removeAttribute(e));if($.test(o.tagName)){const e=o.textContent.split(lit_html_h),t=e.length-1;if(t>0){o.textContent=lit_html_i?lit_html_i.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],lit_html_l()),C.nextNode(),s.push({type:2,index:++r});o.append(e[t],lit_html_l())}}}else if(8===o.nodeType)if(o.data===lit_html_o)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(lit_html_h,e+1));)s.push({type:7,index:r}),e+=lit_html_h.length-1}r++}}static createElement(e,t){const n=lit_html_r.createElement("template");return n.innerHTML=e,n}}function lit_html_S(e,t,n=e,o){if(t===T)return t;let r=void 0!==o?n._$Co?.[o]:n._$Cl;const a=lit_html_c(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=r:n._$Cl=r),void 0!==r&&(t=lit_html_S(e,r._$AS(e,t.values),r,o)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??lit_html_r).importNode(t,!0);C.currentNode=o;let r=C.nextNode(),a=0,i=0,s=n[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new R(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new z(r,this,e)),this._$AV.push(t),s=n[++i]}a!==s?.index&&(r=C.nextNode(),a++)}return C.currentNode=lit_html_r,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lit_html_S(this,e,t),lit_html_c(e)?e===E||null==e||""===e?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==T&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):lit_html_u(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&lit_html_c(this._$AH)?this._$AA.nextSibling.data=e:this.T(lit_html_r.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=N.createElement(P(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new M(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new N(e)),t}k(e){lit_html_a(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new R(this.O(lit_html_l()),this.O(lit_html_l()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}_$AI(e,t=this,n,o){const r=this.strings;let a=!1;if(void 0===r)e=lit_html_S(this,e,t,0),a=!lit_html_c(e)||e!==this._$AH&&e!==T,a&&(this._$AH=e);else{const o=e;let i,s;for(e=r[0],i=0;i<r.length-1;i++)s=lit_html_S(this,o[n+i],t,i),s===T&&(s=this._$AH[i]),a||=!lit_html_c(s)||s!==this._$AH[i],s===E?e=E:e!==E&&(e+=(s??"")+r[i+1]),this._$AH[i]=s}a&&!o&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}}class L extends k{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=lit_html_S(this,e,t,0)??E)===T)return;const n=this._$AH,o=e===E&&n!==E||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==E&&(n===E||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){lit_html_S(this,e)}}const Z={M:lit_html_e,P:lit_html_h,A:lit_html_o,C:1,L:V,R:M,D:lit_html_u,V:lit_html_S,I:R,H:k,N:I,U:L,B:H,F:z},j=lit_html_t.litHtmlPolyfillSupport;j?.(N,R),(lit_html_t.litHtmlVersions??=[]).push("3.2.1");const B=(e,t,n)=>{const o=n?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=n?.renderBefore??null;o._$litPart$=r=new R(t.insertBefore(lit_html_l(),e),e,void 0,n??{})}return r._$AI(e),r};class lit_element_r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=B(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const lit_element_i=globalThis.litElementPolyfillSupport;lit_element_i?.({LitElement:lit_element_r});const lit_element_o={_$AK:(e,t,n)=>{e._$AK(t,n)},_$AL:e=>e._$AL};(globalThis.litElementVersions??=[]).push("4.1.1");var style=__webpack_require__(273),utils=__webpack_require__(537),tap_actions=__webpack_require__(491);const popupState={hashRecentlyAdded:!1,scrollY:0,currentHash:null,hashChangeProtection:!1,isAnimating:!1,animationDuration:300,activePopups:new Set,entityTriggeredPopup:null},dialogNode=new Set(["HA-DIALOG","HA-MORE-INFO-DIALOG","HA-DIALOG-DATE-PICKER"]);function clickOutside(e,t){(t.config.close_by_clicking_outside??1)&&(e.composedPath().find((e=>!(!e.classList&&!e.nodeName)&&(e.classList?.contains("bubble-pop-up")||dialogNode.has(e.nodeName))))||removeHash())}function resetCloseTimeout(e){e.config.auto_close&&e.closeTimeout&&(clearTimeout(e.closeTimeout),e.closeTimeout=setTimeout(removeHash,e.config.auto_close))}function removeHash(){popupState.hashRecentlyAdded||!location.hash||popupState.hashChangeProtection||setTimeout((()=>{if(popupState.hashChangeProtection)return;const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))}),50)}function addHash(e){popupState.hashChangeProtection=!0;const t=e.startsWith("#")?window.location.href.split("#")[0]+e:e;history.pushState(null,"",t),window.dispatchEvent(new Event("location-changed")),setTimeout((()=>{popupState.hashChangeProtection=!1}),200)}function hideContent(e,t){e.config.background_update?e.popUp.style.display="none":e.editor||(e.hideContentTimeout=setTimeout((()=>{const{sectionRow:t,sectionRowContainer:n}=e;"hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!0,t.style.display="none",n?.classList.contains("card")&&(n.style.display="none"))}),t))}function displayContent(e){if(e.config.background_update)return void(e.popUp.style.display="");const{sectionRow:t,sectionRowContainer:n,popUp:o}=e;o.style.transform="","hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!1,t.style.display="",n?.classList.contains("card")&&(n.style.display=""))}function toggleBackdrop(e,t){const{showBackdrop:n,hideBackdrop:o}=getBackdrop(e);t?n():o()}function appendPopup(e,t){e.config.background_update||(t?e.verticalStack.appendChild(e.popUp):t||e.config.background_update||e.verticalStack.contains(e.popUp)&&e.verticalStack.removeChild(e.popUp))}function updatePopupClass(e,t){popupState.isAnimating=!0,requestAnimationFrame((()=>{e.classList.toggle("is-popup-opened",t),e.classList.toggle("is-popup-closed",!t),setTimeout((()=>{popupState.isAnimating=!1}),popupState.animationDuration)}))}function updateListeners(e,t){if(e.boundClickOutside||(e.boundClickOutside=t=>clickOutside(t,e)),e.resetCloseTimeout||(e.resetCloseTimeout=()=>resetCloseTimeout(e)),!e.touchHandlersInitialized){const{handleTouchStart:t,handleTouchMove:n,handleTouchEnd:o}=createTouchHandlers(e);e.handleTouchStart=t,e.handleTouchMove=n,e.handleTouchEnd=o,e.touchHandlersInitialized=!0}t&&!e.editor?(e.listenersAdded||(e.config.auto_close&&(e.popUp.addEventListener("touchstart",e.resetCloseTimeout,{passive:!0}),e.popUp.addEventListener("click",e.resetCloseTimeout,{passive:!0})),e.popUp&&(e.handleTouchStart&&e.popUp.addEventListener("touchstart",e.handleTouchStart,{passive:!0}),e.handleTouchMove&&e.popUp.addEventListener("touchmove",e.handleTouchMove,{passive:!1}),e.handleTouchEnd&&e.popUp.addEventListener("touchend",e.handleTouchEnd,{passive:!0}),e.handleHeaderTouchMove&&e.elements?.header&&e.elements.header.addEventListener("touchmove",e.handleHeaderTouchMove,{passive:!0}),e.handleHeaderTouchEnd&&e.elements?.header&&e.elements.header.addEventListener("touchend",e.handleHeaderTouchEnd,{passive:!0}),e.closeOnEscape&&window.addEventListener("keydown",e.closeOnEscape,{passive:!0}),e.config.close_on_click&&e.popUp.addEventListener("click",removeHash,{passive:!0})),e.listenersAdded=!0),e.clickOutsideListenerAdded||(window.addEventListener("click",e.boundClickOutside,{passive:!0}),e.clickOutsideListenerAdded=!0)):(e.listenersAdded&&((0,utils.qo)(!1),e.config.auto_close&&(e.popUp.removeEventListener("touchstart",e.resetCloseTimeout),e.popUp.removeEventListener("click",e.resetCloseTimeout)),e.popUp&&(e.handleTouchStart&&e.popUp.removeEventListener("touchstart",e.handleTouchStart),e.handleTouchMove&&e.popUp.removeEventListener("touchmove",e.handleTouchMove),e.handleTouchEnd&&e.popUp.removeEventListener("touchend",e.handleTouchEnd),e.handleHeaderTouchMove&&e.elements?.header&&e.elements.header.removeEventListener("touchmove",e.handleHeaderTouchMove),e.handleHeaderTouchEnd&&e.elements?.header&&e.elements.header.removeEventListener("touchend",e.handleHeaderTouchEnd),e.closeOnEscape&&window.removeEventListener("keydown",e.closeOnEscape),e.config.close_on_click&&e.popUp.removeEventListener("click",removeHash)),e.listenersAdded=!1),e.clickOutsideListenerAdded&&(window.removeEventListener("click",e.boundClickOutside),e.clickOutsideListenerAdded=!1))}function clearAllTimeouts(e){["hideContentTimeout","removeDomTimeout","closeTimeout"].forEach((t=>{e[t]&&(clearTimeout(e[t]),e[t]=null)}))}function closeAllPopupsExcept(e){const t=new Set(popupState.activePopups);for(const n of t)n!==e&&closePopup(n,!0)}function openPopup(e){if(e.popUp.classList.contains("is-popup-opened"))return;if(popupState.activePopups.size>0&&popupState.entityTriggeredPopup)return;clearAllTimeouts(e);const{popUp:t}=e;e.verticalStack.contains(t)||appendPopup(e,!0),popupState.activePopups.add(e),requestAnimationFrame((()=>{toggleBackdrop(e,!0),updatePopupClass(t,!0),displayContent(e),updateListeners(e,!0),e.config.auto_close>0&&(e.closeTimeout=setTimeout((()=>{removeHash(),closePopup(e)}),e.config.auto_close)),(0,utils.qo)(!0),e.config.open_action&&(0,tap_actions.VR)(e.popUp,e.config,"open_action")}))}function closePopup(e,t=!1){(e.popUp.classList.contains("is-popup-opened")||t)&&(clearAllTimeouts(e),popupState.activePopups.delete(e),popupState.entityTriggeredPopup===e&&(popupState.entityTriggeredPopup=null),updatePopupClass(e.popUp,!1),toggleBackdrop(e,!1),e.removeDomTimeout=setTimeout((()=>{appendPopup(e,!1),hideContent(e,0)}),popupState.animationDuration),updateListeners(e,!1),(0,utils.qo)(!1),e.config.close_action&&(0,tap_actions.VR)(e,e.config,"close_action"))}function onUrlChange(e){return()=>{if(e.config.hash===location.hash){if(popupState.entityTriggeredPopup)return;if(popupState.hashRecentlyAdded=!0,popupState.currentHash=location.hash,popupState.hashChangeProtection=!0,popupState.entityTriggeredPopup)return void(popupState.hashChangeProtection=!1);closeAllPopupsExcept(e),setTimeout((()=>{popupState.hashRecentlyAdded=!1,setTimeout((()=>{popupState.hashChangeProtection=!1}),100)}),100),requestAnimationFrame((()=>{openPopup(e)}))}else requestAnimationFrame((()=>{e.config.hash&&e.config.hash!==location.hash&&closePopup(e)}))}}function onEditorChange(e){const{hideBackdrop:t}=getBackdrop(e),n=e.detectedEditor;e.editor||n?(t(),clearTimeout(e.removeDomTimeout),n||setupVisibilityObserver(e)):e.observer&&(e.observer.disconnect(),e.observer=null)}function setupVisibilityObserver(e){if(e.observer&&(e.observer.disconnect(),e.observer=null),e.sectionRow){const t=new IntersectionObserver((t=>{t.forEach((t=>{const n=e.editor||e.detectedEditor;t.isIntersecting&&!e.verticalStack.contains(e.popUp)&&n&&e.verticalStack.appendChild(e.popUp)}))}),{rootMargin:"100px",threshold:.01});t.observe(e.sectionRow),e.observer=t}}function cleanupContext(e){e.observer&&(e.observer.disconnect(),e.observer=null),clearAllTimeouts(e),updateListeners(e,!1),popupState.activePopups.delete(e),popupState.entityTriggeredPopup===e&&(popupState.entityTriggeredPopup=null),e.popUp&&e.popUp.parentNode&&!e.config.background_update&&e.popUp.parentNode.removeChild(e.popUp),e.elements&&(e.elements=null)}function createTouchHandlers(e){if(!e.handleTouchStart){let t=0,n=0,o=!1;e.handleTouchStart=e=>{t=e.touches[0].clientY,n=t,o=!1},e.handleTouchMove=r=>{if(1!==r.touches.length)return;n=r.touches[0].clientY;const a=n-t;Math.abs(a)>10&&(o=!0,a>0&&(e.popUp.style.transform=`translateY(${a}px)`,r.preventDefault()))},e.handleTouchEnd=r=>{o&&(n-t>100?removeHash():e.popUp.style.transform="",o=!1)}}return{handleTouchStart:e.handleTouchStart,handleTouchMove:e.handleTouchMove,handleTouchEnd:e.handleTouchEnd}}const styles_namespaceObject=".bubble-pop-up-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    margin-top: -50px;\r\n    max-width: 100%;\r\n    padding-top: 40px;\r\n    padding-bottom: 80px;\r\n    grid-gap: var(--bubble-pop-up-gap, 14px);\r\n    gap: var(--bubble-pop-up-gap, 14px);\r\n    column-gap: var(--bubble-pop-up-gap, 14px);\r\n    --grid-gap: var(--bubble-pop-up-gap, 14px);\r\n    --vertical-stack-card-gap: var(--bubble-pop-up-gap, 14px);\r\n    --horizontal-stack-card-gap: var(--bubble-pop-up-gap, 14px);\r\n    --stack-card-gap: var(--bubble-pop-up-gap, 14px);\r\n    --row-size: 1;\r\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\r\n    scrollbar-width: none; /* for Firefox */\r\n    overflow-y: auto; \r\n    overflow-x: hidden; \r\n    grid-auto-rows: min-content;\r\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\r\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\r\n    padding: 18px 18px calc(140px + var(--custom-height-offset-mobile)) 18px;\r\n}\r\n\r\n.bubble-pop-up-container > * {\r\n    flex-shrink: 0 !important;\r\n}\r\n\r\n.bubble-pop-up.card-content {\r\n    width: 100% !important;\r\n    padding: 0 !important;\r\n}\r\n\r\n.bubble-pop-up {\r\n    transition: transform 0.3s ease;\r\n    position: fixed;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\r\n    box-sizing: border-box;\r\n    margin-left: var(--custom-margin);\r\n    left: 7px;\r\n    z-index: 5 !important;\r\n    bottom: calc(-56px - var(--custom-height-offset-mobile));\r\n}\r\n\r\n.bubble-pop-up-background {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    top: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\r\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\r\n    backdrop-filter: var(--custom-popup-filter);\r\n    -webkit-backdrop-filter: var(--custom-popup-filter);\r\n    border: var(--bubble-pop-up-border, var(--bubble-border, none));\r\n}\r\n\r\n.bubble-pop-up-container::-webkit-scrollbar {\r\n    display: none; /* for Chrome, Safari, and Opera */\r\n}\r\n\r\n.is-popup-opened {\r\n    box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));\r\n}\r\n\r\n.is-popup-closed { \r\n    transform: translateY(100%);\r\n    box-shadow: none !important;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .bubble-pop-up {\r\n        margin-left: 0 !important;\r\n        min-width: var(--desktop-width, 540px);\r\n        max-width: var(--desktop-width, 540px);\r\n        left: calc(50% - (var(--desktop-width, 540px) / 2));\r\n    }\r\n    .bubble-pop-up-container {\r\n        padding: 18px 18px calc(140px + var(--custom-height-offset-desktop)) 18px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .bubble-pop-up {\r\n      bottom: calc(-56px - var(--custom-height-offset-desktop));\r\n      left: calc(var(--mdc-drawer-width, 0px) / 2 + 50% - (var(--desktop-width, 540px) / 2));\r\n    }\r\n}\r\n\r\n.bubble-pop-up.editor {\r\n    transition: none !important;\r\n    position: relative !important;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100% !important;\r\n    backdrop-filter: none !important;\r\n    display: flex !important;\r\n    transform: none !important;\r\n    height: auto !important;\r\n    min-width: auto;\r\n    z-index: 0 !important;\r\n}\r\n\r\n.bubble-header-container {\r\n    display: inline-flex;\r\n    height: 50px;\r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: 3;\r\n    padding: 18px 18px 22px;\r\n    position: sticky;\r\n    top: 0;\r\n    background: none !important;\r\n    overflow: visible;\r\n}\r\n\r\n.bubble-header {\r\n    display: inline-flex;\r\n    flex-grow: 1;\r\n    margin-right: 14px;\r\n    color: var(--primary-text-color);\r\n}\r\n\r\n.bubble-name {\r\n    font-size: 14px;\r\n    font-weight: heavy;\r\n}\r\n\r\n.bubble-close-button {\r\n    display: flex;\r\n    position: relative;\r\n    height: 50px;\r\n    width: 50px;\r\n    border: var(--bubble-pop-up-close-button-border, var(--bubble-pop-up-border, var(--bubble-border, none)));\r\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px));\r\n    z-index: 1;\r\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\r\n    color: var(--primary-text-color);\r\n    flex-shrink: 0;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    transition: all 0.3s ease;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.bubble-close-icon {\r\n    --mdc-icon-size: 24px;\r\n    color: var(--primary-text-color);\r\n    line-height: normal;\r\n}\r\n\r\n.bubble-button-card-container {\r\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\r\n}\r\n\r\n.bubble-pop-up-container.editor-cropped {\r\n    height: 122px !important;\r\n    mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;\r\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;   \r\n}\r\n\r\n.bubble-pop-up.editor > .bubble-pop-up-container {\r\n    padding-bottom: 18px !important;\r\n    mask-image: none;\r\n    -webkit-mask-image: none;  \r\n    overflow: hidden;  \r\n}\r\n\r\n.editor .bubble-pop-up-background {\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: -1;\r\n    display: flex;\r\n    position: absolute;\r\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\r\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) !important;\r\n    backdrop-filter: none;\r\n    -webkit-backdrop-filter: none;\r\n}\r\n\r\n.no-header .bubble-header-container {\r\n    visibility: hidden !important;\r\n    height: 0px !important;\r\n    opacity: 0 !important;\r\n}\r\n\r\n.no-header .bubble-pop-up-container {\r\n    padding-top: 4px !important;\r\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\r\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\r\n}\r\n\r\n.large .bubble-header-container {\r\n  height: calc( var(--row-height,56px) * var(--row-size,1) + var(--row-gap,8px) * ( var(--row-size,1) - 1 ));\r\n}\r\n\r\n.large .bubble-close-button {\r\n    height: var(--row-height,56px);\r\n    width: var(--row-height,56px);\r\n    --mdc-icon-size: 28px !important;\r\n}",backdrop_namespaceObject=".bubble-backdrop {\r\n  position: fixed;\r\n  background-color: var(--bubble-backdrop-background-color);\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 4;\r\n  opacity: 0;\r\n  transition: opacity 0.3s;\r\n  transition-delay: .1s;\r\n  display: flex;\r\n  backdrop-filter: var(--custom-backdrop-filter);\r\n  -webkit-backdrop-filter: var(--custom-backdrop-filter);\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.bubble-backdrop.is-visible {\r\n  opacity: 1;\r\n}\r\n\r\n.bubble-backdrop.is-hidden {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n";let backdrop,hideBackdrop=!1,startTouchY,lastTouchY,themeColorBackground;const colorScheme=window.matchMedia("(prefers-color-scheme: dark)"),backdropStyle=(0,utils.n)("style");function updateBackdropColor(){themeColorBackground=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color"),document.body.style.setProperty("--bubble-backdrop-background-color",(0,style.Bz)(themeColorBackground,.8,.6))}function getBackdrop(e){const t=e.config.hide_backdrop??!1;if(backdrop)return backdrop;backdropStyle.innerHTML=backdrop_namespaceObject,document.head.appendChild(backdropStyle);const n=(0,utils.n)("style");document.head.appendChild(n);const o=(0,utils.n)("div","bubble-backdrop backdrop is-hidden");return t&&(o.style.display="none",o.style.pointerEvents="none"),document.body.appendChild(o),o.style.setProperty("--custom-backdrop-filter",`blur(${e.config.backdrop_blur??0}px)`),backdrop={hideBackdrop:function(){o.classList.add("is-hidden"),o.classList.remove("is-visible")},showBackdrop:function(){requestAnimationFrame((()=>{o.classList.add("is-visible"),o.classList.remove("is-hidden")}))},backdropElement:o,backdropCustomStyle:n},backdrop}function createHeader(e){e.elements={closeIcon:(0,utils.n)("ha-icon","bubble-close-icon"),closeButton:(0,utils.n)("div","bubble-close-button close-pop-up"),buttonContainer:(0,utils.n)("div","bubble-button-container"),header:(0,utils.n)("div","bubble-header")};const t=(0,utils.n)("div","bubble-feedback-container"),n=(0,utils.n)("div","bubble-feedback-element feedback-element");t.appendChild(n),e.elements.closeButton.appendChild(t),e.elements.closeIcon.icon="mdi:close",e.elements.closeButton.appendChild(e.elements.closeIcon),e.elements.closeButton.feedback=n,e.elements.closeButton.addEventListener("click",(()=>{removeHash(),(0,utils.jp)("selection")})),e.elements.closeButton.haRipple=(0,utils.n)("ha-ripple"),e.elements.closeButton.appendChild(e.elements.closeButton.haRipple),(0,tap_actions.pd)(e.elements.closeButton,e.elements.closeButton.feedback);const o=e.popUp?.querySelector(".bubble-header-container");o?Object.assign(e.elements,{headerContainer:o,closeIcon:o.querySelector(".bubble-close-icon"),closeButton:o.querySelector(".bubble-close-button"),buttonContainer:o.querySelector(".bubble-button-container"),header:o.querySelector(".bubble-header")}):(e.elements.headerContainer=(0,utils.n)("div","bubble-header-container"),e.elements.headerContainer.setAttribute("id","header-container"),e.elements.headerContainer.appendChild(e.elements.header),e.elements.headerContainer.appendChild(e.elements.closeButton),e.elements.header.appendChild(e.elements.buttonContainer)),e.handleTouchStart=e=>{startTouchY=e.touches[0].clientY},e.handleHeaderTouchMove=t=>{const n=t.touches[0].clientY-startTouchY;n>0&&(e.popUp.style.transform=`translateY(${n}px)`)},e.handleHeaderTouchEnd=t=>{const n=t.changedTouches[0].clientY-startTouchY;n>50?(e.popUp.style.transform=`translateY(calc(${n}px + (100% - ${n}px)))`,removeHash()):e.popUp.style.transform=""}}function createStructure(e){try{e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=styles_namespaceObject;let t,n=e.popUp.querySelector("style");e.stylesAdded&&n?e.elements.customStyle=n:(e.elements.customStyle=(0,utils.n)("style"),e.popUp.appendChild(e.elements.customStyle),e.popUp.appendChild(e.elements.style),e.stylesAdded=!0);const o=e.config.bg_opacity??88;function r(){t=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color");const n=e.config.bg_color?e.config.bg_color:t,r=(0,style.Bz)(n,o/100,1.02);e.popUp.style.setProperty("--bubble-pop-up-background-color",r)}colorScheme.addEventListener("change",(()=>{r()}),{passive:!0}),r(),e.popUp.style.setProperty("--desktop-width",e.config.width_desktop??"540px"),e.closeOnEscape=t=>{"Escape"===t.key&&e.config.hash===location.hash&&removeHash()};let a=e.config.slide_to_close_distance??400;e.handleTouchMove=e=>{e.touches[0].clientY-startTouchY>a&&e.touches[0].clientY>lastTouchY&&removeHash(),lastTouchY=e.touches[0].clientY};const i=e.popUp.querySelector(".bubble-pop-up-container");if(null===i){e.elements.popUpContainer=(0,utils.n)("div"),e.elements.popUpContainer.classList.add("bubble-pop-up-container");let s=e.popUp.firstChild;for(;s;)e.elements.popUpContainer.appendChild(s),s=e.popUp.firstChild}else e.elements.popUpContainer=i;e.popUpBackground=(0,utils.n)("div","bubble-pop-up-background"),e.popUp.appendChild(e.popUpBackground),e.popUp.appendChild(e.elements.headerContainer),e.popUp.appendChild(e.elements.popUpContainer),e.config.hash!==location.hash&&hideContent(e,0),window.dispatchEvent(new Event("location-changed"))}catch(l){console.error(l)}}function prepareStructure(e){try{if(e.cardType="pop-up",e.verticalStack=e.getRootNode(),e.sectionRow=e.verticalStack.host.parentElement,e.sectionRowContainer=e.sectionRow?.parentElement,e.popUp=e.verticalStack.querySelector("#root"),!e.popUp)throw new Error("Vertical stack not found, don't panic, it will be added automatically to your pop-up.");e.popUp.classList.add("bubble-pop-up","pop-up","is-popup-closed"),e.cardTitle=e.verticalStack.querySelector(".card-header"),e.editor||e.config.background_update||e.verticalStack.removeChild(e.popUp),e.elements={},getBackdrop(e),e.cardTitle&&(e.cardTitle.style.display="none"),hideBackdrop=hideBackdrop||(e.config.hide_backdrop??!0),e.popUp.style.setProperty("--custom-height-offset-desktop",e.config.margin_top_desktop??"0px"),e.popUp.style.setProperty("--custom-height-offset-mobile",e.config.margin_top_mobile??"0px"),e.popUp.style.setProperty("--custom-margin",`-${e.config.margin??"7px"}`),e.popUp.style.setProperty("--custom-popup-filter",e.config.backdrop_blur&&"0"!==e.config.backdrop_blur?"none":`blur(${e.config.bg_blur??10}px)`),e.popUp.style.setProperty("--custom-shadow-opacity",(e.config.shadow_opacity??0)/100);const t=onUrlChange(e);window.addEventListener("location-changed",t),window.addEventListener("popstate",t),window.popUpError=!1}catch(t){if(console.warn(t),!window.popUpError){window.popUpError=!0;const t=(0,utils.n)("div","bubble-error-text"),n=x`
        <ha-alert 
          alert-type="error"
          .title=${"You need to define a unique hash for this pop-up"}
        >
          <p>Once created and saved, this pop-up will be <b>hidden by default</b> and <b>can be opened by targeting its hash</b>. You can trigger it using <a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">any card</a> that supports the <code>navigate</code> <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">action</a> (check the example), or with the included <a href="https://github.com/Clooos/Bubble-Card#horizontal-buttons-stack" target="_blank" rel="noopener noreferrer">horizontal buttons stack</a> card.</p>
        </ha-alert>
      `;B(n,t),e.content.appendChild(t)}}}colorScheme.addEventListener("change",updateBackdropColor),updateBackdropColor();var validate_condition=__webpack_require__(76),style_processor=__webpack_require__(784);function changeEditor(e){if(!e.verticalStack)return;const{popUp:t,sectionRow:n,sectionRowContainer:o,elements:r}=e,a=t?.classList,i=t?.classList.contains("is-popup-opened"),s="hui-card"===n?.tagName.toLowerCase(),l=e.editor||e.detectedEditor,c=e.previousEditorState;e.detectedEditor&&!e.dialogClosedListenerAdded&&(window.addEventListener("dialog-closed",(()=>{r?.popUpContainer&&r.popUpContainer.classList.add("editor-cropped")}),{once:!0}),e.dialogClosedListenerAdded=!0),!i&&s&&o&&o.classList.contains("card")&&l&&"none"===o.style.display&&(o.style.display=""),l?(a?.contains("editor")||((0,utils.qo)(!1),a&&(a.remove("is-popup-opened"),a.add("is-popup-closed","editor")),!e.detectedEditor&&r?.popUpContainer&&r.popUpContainer.classList.add("editor-cropped")),e.editorAccess=!0):a?.contains("editor")&&(a.remove("editor"),r?.popUpContainer&&r.popUpContainer.classList.remove("editor-cropped"),e.observer&&(e.observer.disconnect(),e.observer=null),e.verticalStack.contains(e.popUp)&&closePopup(e,!0),e.editorAccess=!1,e.dialogClosedListenerAdded=!1,e.previousEditorState=l),e.editor&&!e.detectedEditor&&l!==c&&l&&(onEditorChange(e),e.previousEditorState=l)}function changeStyle(e){const{backdropCustomStyle:t}=getBackdrop(e);(0,style_processor.SF)(e,e.popUp),(0,style_processor.SF)(e,t);const n=e.config.card_layout??"large",o="large"===n||"large-2-rows"===n,r="large-2-rows"===n;o!==e.popUp.classList.contains("large")&&e.popUp.classList.toggle("large",o),r!==e.popUp.classList.contains("rows-2")&&e.popUp.classList.toggle("rows-2",r);const a=e.config.show_header??!0;e.popUp.classList.contains("no-header")===a&&e.popUp.classList.toggle("no-header",!a)}function changeTriggered(e){const t=e.config.trigger,n=e.config.trigger_close??!0;if(t){const o=!e.hasPageLoaded;e.hasPageLoaded=!0;const r=(0,validate_condition.eC)(t);if(0===r.length)return void(e.previousTrigger=!1);if((0,validate_condition.db)(r)){const t=(0,validate_condition.XH)(r,e._hass);if(t===e.previousTrigger)return;e.config.hash===location.hash?t||o||!n||removeHash():t&&addHash(e.config.hash),e.previousTrigger=t}}else{let t=e.config.trigger_entity??"";if(""===t)return;let n=e.config.trigger_state??"",o=e.config.trigger_close??!1,r=e._hass.states[t]?.state;if(!t)return;if(!n)return;if(e.oldTriggerEntityState===r)return;const a=!e.hasPageLoaded;e.hasPageLoaded=!0,e.config.hash===location.hash?o&&n!==r&&(a||removeHash()):r===n&&addHash(e.config.hash),e.oldTriggerEntityState=r}}var icon=__webpack_require__(87);function getClimateColor(e){let t="";const n=e._hass.states[e.config.entity],o=n.attributes.hvac_action,r=n.state,a="heating"===o||"heat"===r&&e.config.state_color,i="cooling"===o||"cool"===r&&e.config.state_color,s="off"!==r&&"unknown"!==r;switch(r){case"fan_only":t="var(--bubble-state-climate-fan-only-color, var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color))))";break;case"dry":t="var(--bubble-state-climate-dry-color, var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color))))";break;default:t=i?"var(--bubble-state-climate-cool-color, var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color))))":a?"var(--bubble-state-climate-heat-color, var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color))))":s&&e.config.state_color?"auto"===r?"var(--bubble-state-climate-auto-color, var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color))))":"heat_cool"===r?"var(--bubble-state-climate-heat-cool-color, var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color))))":"var(--bubble-climate-accent-color, var(--bubble-accent-color, var(--accent-color)))":""}return t}function changeState(e){const t=e.config?.entity,n=e.card,o=e._hass.states[t],r=(0,utils.D$)(e,e.config.attribute,t),a=o?.last_changed,i=o?.last_updated,s="state"===e.config.button_type,l=e.config.show_name??!0,c=e.config.show_icon??!0,d=e.config.show_state??s,u=e.config.show_attribute??s,p=e.config.show_last_changed??!1,h=e.config.show_last_updated??!1,b=e.config.scrolling_effect??!0,m=e.previousConfig||{};if(e.previousState===o&&e.previousAttribute===r&&e.previousLastChanged===a&&e.previousLastUpdated===i&&m.showName===l&&m.showIcon===c&&m.showState===d&&m.showAttribute===u&&m.showLastChanged===p&&m.showLastUpdated===h&&m.scrollingEffect===b)return;let g=o&&d?e._hass.formatEntityState(o):"",f="",_="",y="",v="";function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}if(u&&r)if(e.config.attribute.includes("forecast")){const t="°C"===e._hass.config.unit_system.temperature,n="km"===e._hass.config.unit_system.length;f=e.config.attribute.includes("temperature")?o&&r?parseFloat(r).toFixed(1).replace(/\.0$/,"")+(t?" °C":" °F"):"":e.config.attribute.includes("humidity")?o&&r?parseFloat(r).toFixed(0)+" %":"":e.config.attribute.includes("precipitation")?o&&r?parseFloat(r).toFixed(1).replace(/\.0$/,"")+" mm":"":e.config.attribute.includes("wind_speed")?o&&r?parseFloat(r).toFixed(1).replace(/\.0$/,"")+(n?" km/h":" mph"):"":o?r:""}else f=o?e.config.attribute.includes("[")?r:e._hass.formatEntityAttributeValue(o,e.config.attribute)??r:"";p&&o&&(_=o?w((0,utils.r6)(a,e._hass.locale.language)):""),h&&o&&(y=o?w((0,utils.r6)(i,e._hass.locale.language)):""),v=[g,f,_,y].filter(Boolean).join(" • "),e.elements.name.classList.toggle("hidden",!l),e.elements.iconContainer.classList.toggle("hidden",!c),e.elements.nameContainer.classList.toggle("name-without-icon",!c),e.elements.state.classList.toggle("state-without-name",(d||p||h||u)&&!l),e.elements.state.classList.toggle("display-state",d||p||h||u),e.elements.state.classList.toggle("hidden",!(d||p||h||u)),(0,utils.Nl)(e,e.elements.state,v),t===e.config.entity&&"state"!==e.config.button_type&&!o?.attributes?.unit_of_measurement?.includes("°")&&o&&((0,utils.$C)(e,t)?n.classList.contains("is-on")||(n.classList.remove("is-off"),n.classList.add("is-on")):n.classList.contains("is-off")||(n.classList.remove("is-on"),n.classList.add("is-off"))),e.previousState=o,e.previousAttribute=r,e.previousConfig={showName:l,showIcon:c,showState:d,showAttribute:u,showLastChanged:p,showLastUpdated:h,scrollingEffect:b}}function changeIcon(e){const t=(0,utils.md)(e),n=e.config.card_type,o=e.config.button_type,r=(0,utils.$C)(e),a=(0,icon.sW)(e),i=(0,icon.Qp)(e),s=e.config.use_accent_color,l=e.elements.iconContainer?.style.color,c=e.elements.image?.style.backgroundImage,d=e.elements.icon?.icon,u=e.elements.icon?.style.display,p=e.elements.image?.style.display,h="name"===o||"pop-up"===n&&!o;let b="inherit";if(r&&((0,utils.md)(e,"light")&&!s||!h?b=`var(--bubble-icon-color, ${(0,icon.VA)(e)})`:"climate"===t&&(b=getClimateColor(e))),e.elements.iconContainer&&("inherit"!==b?l!==b&&(e.elements.iconContainer.style.color=b):""!==l&&(e.elements.iconContainer.style.color="")),""!==i){const t=`url(${i})`;c!==t&&(e.elements.image.style.backgroundImage=t),"none"!==u&&(e.elements.icon.style.display="none"),""!==p&&(e.elements.image.style.display="")}else""!==a?(d!==a&&(e.elements.icon.icon=a),e.elements.icon.style.color!==b&&(e.elements.icon.style.color=b),""!==u&&(e.elements.icon.style.display=""),"none"!==p&&(e.elements.image.style.display="none")):("none"!==u&&(e.elements.icon.style.display="none"),"none"!==p&&(e.elements.image.style.display="none"));e.elements.icon?.getAttribute("icon")!==e.elements.icon?.icon&&e.elements.icon.setAttribute("icon",e.elements.icon.icon)}function changeName(e,t=!0){const n="name"!==e.config.button_type?(0,utils.mG)(e):e.config.name;n!==e.previousName&&e.elements.name&&(e.elements.name.innerText=n,e.previousName=n,t&&(0,utils.Nl)(e,e.elements.name,n))}function changeStatus(e){"unavailable"===(0,utils.Gu)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable")}function changes_updateListeners(e,t){t&&!e.editor?e.listenersAdded||("slider"===e.config.button_type&&e.elements.slider.addEventListener("click",e.handleSliderClick,{passive:!0}),e.listenersAdded=!0):t||e.listenersAdded&&"slider"===e.config.button_type&&e.elements.slider.removeEventListener("click",e.handleSliderClick,{passive:!0})}var changes=__webpack_require__(198);function getButtonType(e){let t=e.config.button_type;return"custom"===t&&(console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"'),t=""),e.config.entity?t||"switch":t||"name"}function readOnlySlider(e){const t=e.config.entity;return(0,utils.md)(e,"sensor",t)&&"%"===(0,utils.D$)(e,"unit_of_measurement",t)}const pendingValues=new Map,throttleDelay=16;let lastRenderTime=0,pendingRaf=null;function requestAnimationFrameThrottle(e){pendingRaf&&cancelAnimationFrame(pendingRaf),!lastRenderTime||Date.now()-lastRenderTime>=throttleDelay?(lastRenderTime=Date.now(),e()):pendingRaf=requestAnimationFrame((()=>{lastRenderTime=Date.now(),e()}))}function getAdjustedPercentage(e,t){if(!e.config.step&&!e._hass.states[e.config.entity]?.attributes?.step)return t;const n=e.config.step??e._hass.states[e.config.entity]?.attributes?.step??1;let o=t;if(void 0!==e.sliderMinValue||void 0!==e.sliderMaxValue){const r=e.sliderMinValue??0,a=e.sliderMaxValue??100;o=(getAdjustedValue(r+t/100*(a-r),n)-r)/(a-r)*100}else o=getAdjustedValue(t,n);return Math.max(0,Math.min(100,o))}function onSliderChange(e,t,n=!1){const o=e.elements.rangeSlider.getBoundingClientRect();let r=Math.max(0,Math.min(100,(t-o.left)/o.width*100));return n&&(r=getAdjustedPercentage(e,r)),(0,utils.md)(e,"climate",e.config.entity)?(pendingValues.set(e.config.entity,{percentage:r,timestamp:Date.now()}),e.elements.rangeFill.style.transform=`translateX(${r}%)`,r):(pendingValues.set(e.config.entity,{percentage:r,timestamp:Date.now()}),e.elements.rangeFill.style.transform=`translateX(${r}%)`,(0,utils.md)(e,"media_player",e.config.entity)&&e.elements.rangeValue&&(e.elements.rangeValue.innerText=`${Math.round(r)}%`),r)}const valueCache=new Map,cacheDuration=100;function getCachedValue(e,t){const n=valueCache.get(e),o=Date.now();if(n&&o-n.timestamp<cacheDuration)return n.value;const r=t();return valueCache.set(e,{value:r,timestamp:o}),r}function calculateRangePercentage(e,t,n){return 100*(e-t)/(n-t)}function adjustToRange(e,t,n){return e>=t&&e<=n?(e-t)/(n-t)*100:e<t?0:100}function getCurrentValue(e,t,n){const o=pendingValues.get(t),r=e._hass.states[t];if(o){if(new Date(r.last_changed).getTime()<o.timestamp)return o.percentage;pendingValues.delete(t)}switch(n){case"light":return 100*(0,utils.D$)(e,"brightness",t)/255;case"media_player":{const n=(0,utils.D$)(e,"volume_level",t);return null!=n?100*n:0}case"cover":{const n=(0,utils.D$)(e,"current_position",t);return null!=n?n:0}case"input_number":case"number":{const n=(0,utils.D$)(e,"min",t),o=(0,utils.D$)(e,"max",t);return calculateRangePercentage((0,utils.Gu)(e,t),n,o)}case"fan":return(0,utils.$C)(e,t)?(0,utils.D$)(e,"percentage",t):0;case"climate":if((0,utils.$C)(e,t)){let n=(0,utils.D$)(e,"min_temp",t),o=(0,utils.D$)(e,"max_temp",t);void 0!==e.config.min_value&&(n=parseFloat(e.config.min_value)),void 0!==e.config.max_value&&(o=parseFloat(e.config.max_value));const r=(0,utils.D$)(e,"temperature",t);return void 0===r||void 0===n||void 0===o?0:calculateRangePercentage(Math.max(n,Math.min(o,r)),n,o)}return 0;default:return void 0!==e.config.min_value&&void 0!==e.config.max_value?calculateRangePercentage(parseFloat((0,utils.Gu)(e,t)),parseFloat(e.config.min_value),parseFloat(e.config.max_value)):0}}function updateSlider(e,t=e.elements.rangeFill,n=e.config.entity){if(e.dragging)return;const o=n?.split(".")[0];let r=0;if(pendingRaf&&(cancelAnimationFrame(pendingRaf),pendingRaf=null),r="sensor"===o&&"%"===(0,utils.D$)(e,"unit_of_measurement",n)?(0,utils.Gu)(e,n):getCurrentValue(e,n,o),"media_player"===o&&e.elements.rangeValue){(0,utils.Gu)(e,n);const t=(0,utils.D$)(e,"volume_level",n),o=null!=t?Math.round(100*t):0;e.elements.rangeValue.innerText=`${o}%`}if("climate"===o&&e.elements.rangeValue){if(!(0,utils.$C)(e,n))return e.elements.rangeValue.innerText="0%",r=0,void(t.style.transform="translateX(0%)");{const o=(0,utils.D$)(e,"temperature",n),a="°C"===e._hass.config.unit_system.temperature;let i=(0,utils.D$)(e,"min_temp",n),s=(0,utils.D$)(e,"max_temp",n);if(void 0!==e.config.min_value&&(i=parseFloat(e.config.min_value)),void 0!==e.config.max_value&&(s=parseFloat(e.config.max_value)),void 0!==o&&void 0!==i&&void 0!==s)return r=calculateRangePercentage(Math.max(i,Math.min(s,o)),i,s),e.elements.rangeValue.innerText=o.toFixed(1).replace(/\.0$/,"")+(a?"°C":"°F"),void(t.style.transform=`translateX(${Math.round(r)}%)`);e.elements.rangeValue.innerText=o?o.toFixed(1).replace(/\.0$/,"")+(a?"°C":"°F"):"0%"}}t.style.transform=`translateX(${Math.round(r)}%)`}function getAdjustedValue(e,t){return Math.round(e/t)*t}function updateEntity(e,t){const n=e._hass.states[e.config.entity],o=e.config.entity.split(".")[0];let r=t;if(void 0!==e.sliderMinValue||void 0!==e.sliderMaxValue){const n=e.sliderMinValue??0;r=n+t/100*((e.sliderMaxValue??100)-n)}switch(e.config.step&&(r=getAdjustedValue(r,e.config.step)),o){case"light":{const t=Math.min(100,Math.max(0,r)),n=Math.round(255*t/100),o=e.config.light_transition,a=""===e.config.light_transition_time||isNaN(e.config.light_transition_time)?500:e.config.light_transition_time;e._hass.callService("light","turn_on",{entity_id:e.config.entity,brightness:n,...o&&{transition:a/1e3}});break}case"media_player":{const t=e.config.step??.01,n=getAdjustedValue(Math.min(1,Math.max(0,r/100)),t);e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:n.toFixed(2)});break}case"cover":{const t=e.config.step??1,n=getAdjustedValue(Math.min(100,Math.max(0,Math.round(r))),t);e._hass.callService("cover","set_cover_position",{entity_id:e.config.entity,position:n});break}case"input_number":{const t=n.attributes.min??0,o=getAdjustedValue(((n.attributes.max??100)-t)*r/100+t,e.config.step??(0,utils.D$)(e,"step")??1);e._hass.callService("input_number","set_value",{entity_id:e.config.entity,value:o});break}case"fan":{const t=e.config.step??n.attributes.percentage_step??1,o=getAdjustedValue(Math.min(100,Math.max(0,Math.round(r))),t);e._hass.callService("fan","set_percentage",{entity_id:e.config.entity,percentage:o});break}case"climate":{let o=n.attributes.min_temp??0,r=n.attributes.max_temp??1e4;void 0!==e.config.min_value&&(o=parseFloat(e.config.min_value)),void 0!==e.config.max_value&&(r=parseFloat(e.config.max_value));const a="°C"===e._hass.config.unit_system.temperature,i=e.config.step??(n.attributes.target_temp_step?n.attributes.target_temp_step:a?.5:1),s=parseFloat(getAdjustedValue(o+t/100*(r-o),i).toFixed(1)),l=Math.max(o,Math.min(r,s));(0,utils.$C)(e,e.config.entity)?e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:l}):e._hass.callService("climate","turn_on",{entity_id:e.config.entity}).then((()=>{e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:l})})).catch((t=>{console.error("Error turning on climate entity:",t),e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:l})}));break}case"number":{const t=n.attributes.min??0,o=getAdjustedValue(((n.attributes.max??100)-t)*r/100+t,e.config.step??n.attributes.step??1);e._hass.callService("number","set_value",{entity_id:e.config.entity,value:o});break}}}function changeButton(e){const t=e.config.card_type,n=getButtonType(e),o=(0,utils.md)(e,"light"),r=(0,utils.$C)(e),a=(0,icon.VA)(e),i="button"===t?e.card.style.getPropertyValue("--bubble-button-background-color"):e.popUp.style.getPropertyValue("--bubble-button-background-color"),s=e.elements.background.style.opacity;let l="",c="";const d=e.config.use_accent_color;"switch"===n&&r?a&&o&&!d?(l=(0,icon.VA)(e),c=".5"):(l="var(--bubble-button-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))",c="1"):(l="rgba(0, 0, 0, 0)",c=".5"),"slider"===n&&(r&&(e.elements.rangeFill.style.backgroundColor=o&&!d?(0,icon.VA)(e):"var(--bubble-button-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))"),updateSlider(e)),i!==l&&("button"===t?e.card.style.setProperty("--bubble-button-background-color",l):"pop-up"===t&&e.popUp.style.setProperty("--bubble-button-background-color",l)),s!==c&&(e.elements.background.style.opacity=c)}function changes_changeStatus(e){const t=(0,utils.Gu)(e),n=e.config.card_type;"unavailable"===t?"button"===n?e.card.classList.add("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.add("is-unavailable"):"button"===n?e.card.classList.remove("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.remove("is-unavailable")}function changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e)}const slider_styles_namespaceObject=".bubble-range-fill {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    left: -100%;\r\n    transition: all .3s;\r\n    z-index: 0;\r\n    background-color: var(--bubble-accent-color, var(--bubble-default-color));\r\n}\r\n\r\n.is-light .bubble-range-fill {\r\n    background-color: var(--bubble-light-color, rgb(225, 225, 210));\r\n}\r\n\r\n.is-dragging .bubble-range-fill {\r\n    transition: none !important;\r\n}\r\n\r\n.is-light .bubble-range-fill {\r\n    opacity: 0.5;\r\n}\r\n\r\n.bubble-range-value {\r\n    position: absolute;\r\n    right: 14px;\r\n}\r\n\r\n.is-unavailable .bubble-range-slider {\r\n    cursor: not-allowed;\r\n}\r\n\r\n.slider-appear-animation {\r\n    transition: none;\r\n    animation: sliderAppear 0.2s ease-in-out;\r\n    transform-origin: center;\r\n}\r\n\r\n@keyframes sliderAppear {\r\n    0% {\r\n        transform: scale(0.96);\r\n        opacity: 0.8;\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n}";function createSliderStructure(e,t={}){const n={...defaultOptions,targetElement:e.elements.mainContainer,insertBefore:e.elements.cardWrapper,sliderLiveUpdate:e.config.slider_live_update,holdToSlide:!1,readOnlySlider:!1,styles:slider_styles_namespaceObject,...t};if("climate"===e.config.entity?.split(".")[0]?(e.sliderMinValue=void 0,e.sliderMaxValue=void 0):(e.sliderMinValue=e.config.min_value??e.config.min_volume??0,e.sliderMaxValue=e.config.max_value??e.config.max_volume??100),e.elements.rangeFill=(0,utils.n)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,utils.n)("div","bubble-range-slider range-slider"),n.styles){const t=(0,utils.n)("style");t.textContent=n.styles,e.elements.rangeSlider.appendChild(t)}function o(e,t,n){return 100*(e-t)/(n-t)}function r(){let t=0;const n=e.config.entity,r=n?.split(".")[0];if("sensor"===r&&"%"===(0,utils.D$)(e,"unit_of_measurement",n))return(0,utils.Gu)(e,n);switch(r){case"light":t=100*(0,utils.D$)(e,"brightness",n)/255;break;case"media_player":(0,utils.$C)(e,n)&&(t=100*(0,utils.D$)(e,"volume_level",n));break;case"cover":{const o=(0,utils.D$)(e,"current_position",n);t=null!=o?o:0;break}case"input_number":case"number":{const r=(0,utils.D$)(e,"min",n),a=(0,utils.D$)(e,"max",n);t=o((0,utils.Gu)(e,n),r,a);break}case"fan":(0,utils.$C)(e,n)&&(t=(0,utils.D$)(e,"percentage",n));break;case"climate":if((0,utils.$C)(e,n)){let r=(0,utils.D$)(e,"min_temp",n),a=(0,utils.D$)(e,"max_temp",n);void 0!==e.config.min_value&&(r=parseFloat(e.config.min_value)),void 0!==e.config.max_value&&(a=parseFloat(e.config.max_value));const i=(0,utils.D$)(e,"temperature",n);t=void 0===i||void 0===r||void 0===a?0:o(Math.max(r,Math.min(a,i)),r,a)}break;default:void 0!==e.config.min_value&&void 0!==e.config.max_value&&(t=o((0,utils.Gu)(e,n),parseFloat(e.config.min_value),parseFloat(e.config.max_value)))}return t}function a(t){if((0,utils.md)(e,"climate",e.config.entity))return t;if(void 0!==e.sliderMinValue||void 0!==e.sliderMaxValue){const n=void 0!==e.sliderMinValue?e.sliderMinValue:0,o=void 0!==e.sliderMaxValue?e.sliderMaxValue:100;let r;return t>=n&&t<=o?r=(t-n)/(o-n)*100:t<n?r=0:t>o&&(r=100),r}return t}function i(t){if(!e.elements.rangeValue)return;const n=e.config.entity?.split(".")[0];switch(n){case"climate":if((0,utils.$C)(e,e.config.entity)){let n=(0,utils.D$)(e,"min_temp",e.config.entity),o=(0,utils.D$)(e,"max_temp",e.config.entity);void 0!==e.config.min_value&&(n=parseFloat(e.config.min_value)),void 0!==e.config.max_value&&(o=parseFloat(e.config.max_value));const r=(o-n)*t/100+n,a="°C"===e._hass.config.unit_system.temperature,i=e.config.step||(0,utils.D$)(e,"target_temp_step",e.config.entity)||(a?.5:1),s=Math.round(r/i)*i;e.elements.rangeValue.innerText=s.toFixed(1).replace(/\.0$/,"")+(a?"°C":"°F")}break;case"number":case"input_number":const n=(0,utils.D$)(e,"min",e.config.entity),o=n+t/100*((0,utils.D$)(e,"max",e.config.entity)-n),r=e.config.step||(0,utils.D$)(e,"step",e.config.entity)||1,a=Math.round(o/r)*r,i=(0,utils.D$)(e,"unit_of_measurement",e.config.entity)||"";e.elements.rangeValue.innerText=a.toFixed(1).replace(/\.0$/,"")+(i?` ${i}`:"");break;default:if(void 0!==e.sliderMinValue||void 0!==e.sliderMaxValue){const n=void 0!==e.sliderMinValue?e.sliderMinValue:0,o=n+t/100*((void 0!==e.sliderMaxValue?e.sliderMaxValue:100)-n);if(e.config.step){const t=Math.round(o/e.config.step)*e.config.step;e.elements.rangeValue.innerText=t.toFixed(1).replace(/\.0$/,"")+"%"}else e.elements.rangeValue.innerText=Math.round(o)+"%"}else if(e.config.step){const n=Math.round(t/e.config.step)*e.config.step;e.elements.rangeValue.innerText=n.toFixed(1).replace(/\.0$/,"")+"%"}else e.elements.rangeValue.innerText=Math.round(t)+"%"}}if(n.withValueDisplay){e.elements.rangeValue=(0,utils.n)("div","bubble-range-value"),e.elements.rangeSlider.appendChild(e.elements.rangeValue);const t=a(r());(0,utils.md)(e,"climate",e.config.entity)?((0,utils.$C)(e,e.config.entity)?i(t):e.elements.rangeValue.innerText="0%",e.elements.rangeFill.style.transform=`translateX(${t}%)`,e.elements.rangeValue.style.display=""):(i(t),e.elements.rangeValue.style.display="",e.elements.rangeFill.style.transform=`translateX(${t}%)`)}else{const t=a(r());e.elements.rangeFill.style.transform=`translateX(${t}%)`}e.elements.rangeSlider.appendChild(e.elements.rangeFill),n.insertBefore&&n.targetElement.contains(n.insertBefore)?n.targetElement.insertBefore(e.elements.rangeSlider,n.insertBefore):n.targetElement.appendChild(e.elements.rangeSlider),n.targetElement&&(n.targetElement.style.cursor="ew-resize");let s=0,l=null;function c(t){if(t.stopPropagation(),t.target.closest(".bubble-action"))return;window.isScrolling=!0;const o=t.pageX||(t.touches?t.touches[0].pageX:0),r=onSliderChange(e,o);((0,utils.md)(e,"climate",e.config.entity)||n.sliderLiveUpdate)&&h(e,r),i(r)}function d(t){t.stopPropagation(),l&&clearTimeout(l);const o=t.pageX||(t.touches?t.touches[0].pageX:0),r=onSliderChange(e,o,!0);Math.abs(o-s)>5&&(t.preventDefault(),t.stopImmediatePropagation()),n.targetElement.classList.remove("is-dragging"),n.targetElement.removeEventListener("pointermove",c),window.removeEventListener("pointerup",d),(0,utils.md)(e,"climate",e.config.entity)&&!(0,utils.$C)(e,e.config.entity)?e._hass.callService("climate","turn_on",{entity_id:e.config.entity}).then((()=>{h(e,r)})).catch((e=>{console.error("Error turning on climate entity:",e)})):h(e,r),(0,utils.jp)("selection"),i(r),n.targetElement.querySelectorAll("*").forEach((t=>{t!==e.elements.rangeFill&&t!==e.elements.rangeSlider&&n.holdToSlide&&!e.config.tap_to_slide&&(t.style.transition="opacity 0.3s ease-in-out",t.style.pointerEvents=null,t.style.opacity=null,e.elements.rangeValue&&(e.elements.rangeValue.style.display="none"))})),l=setTimeout((()=>{e&&(e.dragging=!1,window.isScrolling=!1)}),100)}function u(t){e.elements.rangeValue||(e.elements.rangeValue=(0,utils.n)("div","bubble-range-value"),e.elements.rangeSlider.appendChild(e.elements.rangeValue),i(t)),e.elements.rangeValue.style.display=""}const p=(()=>{const t=e.config.entity;if(!t)return!0;const n=t?.split(".")[0];return"sensor"===n||!["light","media_player","cover","input_number","number","fan","climate"].includes(n)})();if(e.config.read_only_slider||p)return;if(!n.holdToSlide||n.readOnlySlider||e.config.tap_to_slide)n.readOnlySlider||n.targetElement.addEventListener("pointerdown",(t=>{const o=t.target.closest(".bubble-action"),r=t.target.closest(".bubble-sub-button")?.hasAttribute("no-slide");r||o&&'{"action":"none"}'!==o.getAttribute("data-hold-action")||t.target.closest(".bubble-sub-button")||(n.targetElement.setPointerCapture(t.pointerId),e.card&&e.card.classList.contains("is-unavailable")||(e.dragging=!0,window.isScrolling=!0,s=t.pageX||(t.touches?t.touches[0].pageX:0),n.targetElement.classList.add("is-dragging"),n.targetElement.addEventListener("pointermove",c),window.addEventListener("pointerup",d)))}));else{let t;const o=200;let r=!1;n.targetElement.addEventListener("pointerdown",(a=>{const l=a.target.closest(".bubble-action"),p=a.target.closest(".bubble-sub-button")?.hasAttribute("no-slide");p||l&&'{"action":"none"}'!==l.getAttribute("data-hold-action")||(r=!1,t=setTimeout((()=>{r=!0,function(t){if(n.targetElement.setPointerCapture(t.pointerId),e.card&&e.card.classList.contains("is-unavailable"))return;e.dragging=!0,window.isScrolling=!0,s=t.pageX||(t.touches?t.touches[0].pageX:0);let o=0;(0,utils.md)(e,"climate")&&!(0,utils.$C)(e,e.config.entity)?(o=0,e.elements.rangeFill.style.transform=`translateX(${o}%)`):o=onSliderChange(e,s),u(o),i(o),n.sliderLiveUpdate&&h(e,o),n.targetElement.classList.add("slider-appear-animation"),(0,utils.jp)("selection"),n.targetElement.querySelectorAll("*").forEach((t=>{t!==e.elements.rangeFill&&t!==e.elements.rangeSlider&&t!==e.elements.rangeValue&&(t.style.transition="opacity 0.3s ease-in-out",t.style.pointerEvents="none",t.style.opacity="0",u(o))})),setTimeout((()=>{n.targetElement.classList.remove("slider-appear-animation")}),300),n.targetElement.classList.add("is-dragging"),n.targetElement.addEventListener("pointermove",c),window.addEventListener("pointerup",d),window.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation()}),{capture:!0,once:!0})}(a)}),o))})),n.targetElement.addEventListener("pointerup",(e=>{clearTimeout(t)})),n.targetElement.addEventListener("pointercancel",(()=>{clearTimeout(t),r=!1}))}const h=(0,utils.nF)(updateEntity,200)}const defaultOptions={targetElement:null,insertBefore:null,sliderLiveUpdate:!1,withValueDisplay:!1,initialValue:null};var create=__webpack_require__(207);function handleSubButtons(e,t={}){const n=createSubButtonStructure(e,t);return e.config.sub_button&&updateSubButtons(e,e.config.sub_button),n}const base_card_styles_namespaceObject="/* 'card-type' in CSS variables is replaced with the real card type \r\n   in card-structure.js for easier maintenance */\r\n\r\n* {\r\n    -webkit-tap-highlight-color: transparent !important;\r\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\r\n    scrollbar-width: none; /* for Firefox */\r\n\r\n    -webkit-user-select: none; /* Safari */\r\n    -ms-user-select: none; /* IE 10 and IE 11 */\r\n    user-select: none; /* Standard syntax */\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n    display: none; /* for Chrome, Safari, and Opera */\r\n}\r\n\r\nha-card {\r\n    background: none;\r\n    opacity: 1;\r\n}\r\n\r\n/* Styles for text scrolling animation */\r\n.scrolling-container {\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    mask-image: linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent);\r\n    -webkit-mask-image: linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent);\r\n    overflow: hidden;\r\n}\r\n\r\n.scrolling-container span {\r\n    display: inline-block;\r\n    animation-name: bubble-scroll;\r\n    animation-timing-function: linear;\r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n.bubble-scroll-separator {\r\n    opacity: .3;\r\n    margin: 0 6px 0 8px;\r\n}\r\n\r\n@keyframes bubble-scroll {\r\n    from { transform: translateX(0); }\r\n    to { transform: translateX(-50%); }\r\n}\r\n/* End of scrolling styles */\r\n\r\n.bubble-container {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: var(--bubble-card-type-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\r\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    box-shadow: var(--bubble-card-type-box-shadow, var(--bubble-box-shadow, none));\r\n    overflow: scroll;\r\n    touch-action: pan-y;\r\n    border: var(--bubble-card-type-border, var(--bubble-border, none));\r\n    box-sizing: border-box;\r\n}\r\n\r\n.bubble-wrapper {\r\n    display: flex;\r\n    position: absolute;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    transition: all 1.5s;\r\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: rgba(0,0,0,0);\r\n    overflow: visible;\r\n}\r\n\r\n.bubble-content-container {\r\n    display: contents;\r\n    flex-grow: 1;\r\n    overflow: hidden;\r\n}\r\n\r\n.bubble-buttons-container {\r\n    --icon-primary-color: var(--primary-text-color);\r\n    display: flex;\r\n    margin-right: 8px;\r\n    gap: 4px;\r\n    /* z-index: 1; */\r\n}\r\n\r\n.bubble-background {\r\n    display: flex;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    transition: background-color 1.5s;\r\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%);\r\n    mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%);\r\n}\r\n\r\n.bubble-icon-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    min-width: 38px;\r\n    min-height: 38px;\r\n    margin: 6px;\r\n    border-radius: var(--bubble-card-type-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\r\n    background-color: var(--bubble-card-type-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n    overflow: hidden;\r\n    position: relative;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.bubble-icon-feedback-container {\r\n    border-radius: var(--bubble-card-type-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\r\n    overflow: hidden !important;\r\n}\r\n\r\n.is-off .bubble-main-icon {\r\n    opacity: 0.6;\r\n}\r\n\r\n.is-on .bubble-main-icon {\r\n  filter: brightness(1.1);\r\n  opacity: 1;\r\n}\r\n\r\n.bubble-entity-picture {\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n}\r\n\r\n.bubble-name,\r\n.bubble-state {\r\n    display: flex;\r\n    position: relative;\r\n    white-space: nowrap;\r\n}\r\n\r\n.bubble-name-container {\r\n    display: flex;\r\n    line-height: 18px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    flex-grow: 1;\r\n    margin: 0 16px 0 4px;\r\n    pointer-events: none;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.bubble-name {\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n}\r\n\r\n.bubble-state {\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    opacity: 0.7;\r\n}\r\n\r\n.is-unavailable .bubble-wrapper {\r\n    cursor: not-allowed;\r\n}\r\n\r\n.is-unavailable {\r\n    opacity: 0.5;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n.state-without-name {\r\n    opacity: 1;\r\n    font-size: 14px;\r\n}\r\n\r\n.name-without-icon {\r\n    margin-left: 16px;\r\n}\r\n\r\n.display-state {\r\n    display: flex;\r\n}\r\n\r\n.bubble-action-enabled {\r\n    cursor: pointer;\r\n}\r\n\r\n.large .bubble-container {\r\n    height: calc( var(--row-height,56px) * var(--row-size,1) + var(--row-gap,8px) * ( var(--row-size,1) - 1 ));\r\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n}\r\n\r\n.large .bubble-icon-container {\r\n    --mdc-icon-size: 24px;\r\n    min-width: 42px;\r\n    min-height: 42px;\r\n    margin-left: 8px;\r\n}",processedStylesCache={};function createBaseStructure(e,t={}){e.elements=e.elements||{};const n={...base_card_defaultOptions,appendTo:e.content,iconDefaultActions:{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}},buttonDefaultActions:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}},baseCardStyles:base_card_styles_namespaceObject,...t};let o,r;n.withMainContainer&&(e.elements.mainContainer=(0,utils.n)("div",`bubble-${n.type}-container bubble-container`)),n.withBaseElements&&(e.elements.cardWrapper=(0,utils.n)("div",`bubble-${n.type} bubble-wrapper`),e.elements.contentContainer=(0,utils.n)("div","bubble-content-container"),e.elements.buttonsContainer=(0,utils.n)("div","bubble-buttons-container"),e.elements.iconContainer=(0,utils.n)("div","bubble-main-icon-container bubble-icon-container icon-container"),e.elements.icon=(0,utils.n)("ha-icon","bubble-main-icon bubble-icon icon"),e.elements.image=(0,utils.n)("div","bubble-entity-picture entity-picture"),e.elements.nameContainer=(0,utils.n)("div","bubble-name-container name-container"),e.elements.name=(0,utils.n)("div","bubble-name name"),e.elements.state=(0,utils.n)("div","bubble-state state"),e.elements.iconContainer.append(e.elements.icon,n.withImage?e.elements.image:null),e.elements.nameContainer.append(e.elements.name,n.withState?e.elements.state:null),e.elements.contentContainer.append(e.elements.iconContainer,e.elements.nameContainer),e.elements.cardWrapper.append(e.elements.contentContainer,e.elements.buttonsContainer),n.withBackground&&(e.elements.background=(0,utils.n)("div","bubble-background"),e.elements.cardWrapper.prepend(e.elements.background)),e.elements.mainContainer.appendChild(e.elements.cardWrapper),n.withSlider&&createSliderStructure(e,{holdToSlide:n.holdToSlide,readOnlySlider:n.readOnlySlider})),n.styles&&(processedStylesCache[n.type]||(processedStylesCache[n.type]=n.baseCardStyles.replace(/card-type/g,n.type)),e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=processedStylesCache[n.type]+n.styles,e.elements.mainContainer.appendChild(e.elements.style)),n.withCustomStyle&&(e.elements.customStyle=(0,utils.n)("style"),e.elements.mainContainer.appendChild(e.elements.customStyle)),n.withSubButtons&&((0,create.g)(e,{container:n.appendTo,appendTo:e.elements.cardWrapper??e.elements.mainContainer,before:!1}),e.elements.buttonsContainer&&e.elements.cardWrapper.appendChild(e.elements.buttonsContainer)),!0===n.iconActions?o=n.iconDefaultActions:"object"==typeof n.iconActions&&(o=n.iconActions),!0===n.buttonActions?r=n.buttonDefaultActions:"object"==typeof n.buttonActions&&(r=n.buttonActions);let a={has_action:!1};e.elements.iconContainer&&(a=(0,tap_actions.dN)(e.elements.iconContainer,e.config,e.config.entity,o));let i={has_action:!1};return!1!==n.buttonActions&&e.elements.background&&(i=(0,tap_actions.dN)(e.elements.background,e.config.button_action,e.config.entity,r)),a.has_action&&e.elements.iconContainer&&(e.elements.iconFeedbackContainer=(0,utils.n)("div","bubble-icon-feedback-container bubble-feedback-container"),e.elements.iconContainer.appendChild(e.elements.iconFeedbackContainer),e.elements.iconFeedback=(0,utils.n)("div","bubble-icon-feedback bubble-feedback-element feedback-element"),e.elements.iconFeedback.style.display="none",e.elements.iconFeedbackContainer.appendChild(e.elements.iconFeedback),(0,tap_actions.pd)(e.elements.iconContainer,e.elements.iconFeedback)),n.withFeedback&&i.has_action&&e.elements.background&&(e.elements.feedbackContainer=(0,utils.n)("div","bubble-feedback-container feedback-container"),e.elements.feedback=(0,utils.n)("div","bubble-feedback-element feedback-element"),e.elements.feedback.style.display="none",e.elements.feedbackContainer.append(e.elements.feedback),e.elements.cardWrapper.append(e.elements.feedbackContainer),(0,tap_actions.pd)(e.elements.background,e.elements.feedback)),n.appendTo===e.content?e.content.appendChild(e.elements.mainContainer):n.appendTo.appendChild(e.elements.mainContainer),e.elements}const base_card_defaultOptions={type:"base",appendTo:null,baseCardStyles:null,styles:"",withMainContainer:!0,withBaseElements:!0,withFeedback:!0,withImage:!0,withSlider:!1,holdToSlide:!1,readOnlySlider:!1,withCustomStyle:!0,withState:!0,withBackground:!0,withSubButtons:!1,iconActions:!0,buttonActions:!1},button_styles_namespaceObject=".bubble-range-slider {\r\n    display: flex;\r\n    position: absolute;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    cursor: ew-resize;\r\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2))) / 1.1);\r\n    overflow: hidden;\r\n    mask-image: radial-gradient(white, black);\r\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\r\n}\r\n\r\n.bubble-background {\r\n    background-color: var(--bubble-button-background-color);\r\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2))) / 1.1 );\r\n}\r\n\r\n.bubble-buttons-container {\r\n    display: contents;\r\n}";function create_createStructure(e,t=e.container){const n="button",o=getButtonType(e),r="slider"===o,a={};a.slider={icon:!0,button:{tap_action:{action:(0,utils.md)(e,"sensor")?"more-info":"toggle"},double_tap_action:{action:"none"},hold_action:{action:"none"}}},a.switch={icon:!0,button:{tap_action:{action:"toggle"},double_tap_action:{action:"none"},hold_action:{action:"more-info"}}},a.state={icon:{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"more-info"}},button:{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"more-info"}}},a.name={icon:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}},button:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}}};const i=createBaseStructure(e,{type:n,appendTo:t,styles:button_styles_namespaceObject,withSlider:r,holdToSlide:r,readOnlySlider:readOnlySlider(e),withFeedback:!e.config.tap_to_slide,withSubButtons:!0,iconActions:a[o]?.icon,buttonActions:!e.config.tap_to_slide&&a[o]?.button});i.background.classList.add("bubble-button-background"),i.mainContainer.classList.add("bubble-button-card-container"),i.cardWrapper.classList.add("bubble-button-card"),t!==e.container?e.buttonType=o:e.cardType=n}function handleButton(e,t=e.content){const n=getButtonType(e);"button"!==e.cardType&&e.buttonType!==n&&create_createStructure(e,t),"name"!==n&&(changes_changeStatus(e),changeButton(e)),changeIcon(e),changeName(e),changeState(e),(0,changes.Kr)(e),"pop-up"!==e.cardType&&changes_changeStyle(e)}async function handlePopUp(e){if("pop-up"!==e.cardType){if(e.getRootNode()instanceof ShadowRoot==0)return;prepareStructure(e),createHeader(e),createStructure(e)}else e.popUp&&e.elements&&((e.config.hash===location.hash||e.editor||e.config!==e.previousConfig)&&((e.config.entity||e.config.name)&&handleButton(e,e.elements.header),requestAnimationFrame((()=>{changeStyle(e)})),e.previousConfig=e.config),e.editor||requestAnimationFrame((()=>{changeTriggered(e)})),changeEditor(e))}const horizontal_buttons_stack_styles_namespaceObject="@keyframes from-bottom {\r\n    0% { transform: translate(-50%, 100px); }\r\n    26% { transform: translate(-50%, -8px); }\r\n    46% { transform: translate(-50%, 1px); }\r\n    62% { transform: translate(-50%, -2px); }\r\n    70% { transform: translate(-50%, 0); }\r\n    100% { transform: translate(-50%, 0); }\r\n}\r\n@keyframes pulse {\r\n    0% { filter: brightness(0.7); }\r\n    100% { filter: brightness(1.3); }\r\n}\r\nha-card {\r\n    border-radius: 0;\r\n}\r\n.horizontal-buttons-stack-card {\r\n    bottom: 16px;\r\n    height: 51px;\r\n    margin-top: 0;\r\n    position: fixed;\r\n    width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\r\n    left: calc(var(--mdc-drawer-width, 0px) + 4px);\r\n    z-index: 6; /* Higher value hide the more-info panel */\r\n}\r\n@media only screen and (max-width: 870px) {\r\n    .horizontal-buttons-stack-card {\r\n        width: calc(100% - 16px);\r\n        left: 8px;\r\n    }\r\n\r\n    .horizontal-buttons-stack-card::before {\r\n        left: -10px;\r\n    }\r\n}\r\n.horizontal-buttons-stack-card::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: -32px;\r\n    display: none;\r\n    background: linear-gradient(0deg, var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--primary-background-color)))) 50%, transparent);\r\n    width: 200%;\r\n    height: 100px;\r\n    pointer-events: none;\r\n}\r\n.has-gradient.horizontal-buttons-stack-card::before {\r\n    display: block;\r\n}\r\n\r\n.card-content {\r\n    width: calc(100% + 36px);\r\n    padding: 0 !important;\r\n    max-width: calc(var(--desktop-width) - 8px);\r\n    box-sizing: border-box;\r\n    overflow: scroll;\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n    -webkit-mask-image: linear-gradient(\r\n        90deg,\r\n        #000000 0%,\r\n        #000000 calc(0% + 28px),\r\n        #000000 calc(100% - 28px),\r\n        transparent 100%\r\n    );\r\n}\r\n.is-scrollable.card-content {\r\n    padding: 0 !important;\r\n    width: 100%;\r\n}\r\n.is-scrolled.card-content {\r\n    padding: 0 !important;\r\n    width: 100%;\r\n    -webkit-mask-image: linear-gradient(\r\n        90deg,\r\n        transparent 0%,\r\n        #000000 calc(0% + 28px),\r\n        #000000 calc(100% - 28px),\r\n        transparent 100%\r\n    );\r\n}\r\n.is-maxed-scroll.card-content {\r\n    -webkit-mask-image: linear-gradient(\r\n        90deg,\r\n        transparent 0%,\r\n        #000000 calc(0% + 28px),\r\n        #000000 calc(100% - 28px),\r\n        #000000 100%\r\n    );\r\n}\r\n.card-content::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.bubble-horizontal-buttons-stack-card-container {\r\n    height: 51px;\r\n    position: relative;\r\n    margin: auto;\r\n}\r\n\r\n.bubble-button {\r\n    align-items: center;\r\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\r\n    color: var(--primary-text-color);\r\n    cursor: pointer;\r\n    display: inline-flex;\r\n    height: 50px;\r\n    left: 0;\r\n    padding: 0 16px;\r\n    position: absolute;\r\n    white-space: nowrap;\r\n    z-index: 1;\r\n    transition: transform 1s;\r\n    box-sizing: border-box;\r\n}\r\n.bubble-button.highlight {\r\n    animation: pulse 1.4s infinite alternate;\r\n}\r\n.bubble-background-color {\r\n    border: 1px solid var(--primary-text-color);\r\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    transition: background-color 1s;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n.bubble-background {\r\n    opacity: 0.8;\r\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box !important;\r\n    position: absolute;\r\n    left: 0;\r\n    z-index: 0;\r\n    background-color: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\r\n}\r\n.bubble-icon {\r\n    height: 24px;\r\n    width: 24px;\r\n    z-index: 2;\r\n}\r\n.bubble-icon + .bubble-name {\r\n    margin-left: 8px;\r\n    z-index: 2;\r\n}\r\n\r\n.horizontal-buttons-stack-card.editor {\r\n    position: relative;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n.horizontal-buttons-stack-card.editor::before {\r\n    background: none;\r\n}\r\n";let isOpen=!1;const BUTTON_MARGIN=12;function createButton(e,t){const n=e.config[`${t}_name`]??"",o=e.config[`${t}_icon`]??"",r=e.config[`${t}_pir_sensor`],a=e.config[`${t}_link`],i=e.config[`${t}_entity`];isOpen=isOpen||location.hash===a;const s=(0,utils.n)("ha-icon","bubble-icon icon");s.icon=o;const l=(0,utils.n)("div","bubble-name name");l.innerText=n;const c=(0,utils.n)("div","bubble-background-color background-color"),d=(0,utils.n)("div","bubble-background background"),u=(0,utils.n)("div",`bubble-button bubble-button-${t} button ${a.substring(1)}`);let p=localStorage.getItem(`bubbleButtonWidth-${a}`);return u.style.width=`${p}px`,u.appendChild(s),u.appendChild(l),u.appendChild(c),u.appendChild(d),u.addEventListener("click",(()=>{location.hash!==a&&(isOpen=!1),isOpen?removeHash():addHash(a),isOpen=!isOpen,(0,utils.jp)("light")})),u.icon=s,u.name=l,u.backgroundColor=c,u.background=d,u.pirSensor=r,u.lightEntity=i,u.link=a,u.index=t,u.haRipple=(0,utils.n)("ha-ripple"),u.appendChild(u.haRipple),window.addEventListener("location-changed",(function(){e.config.highlight_current_view&&(location.pathname===a||location.hash===a?u.classList.add("highlight"):u.classList.remove("highlight"))})),e.elements.buttons.push(u),u}function horizontal_buttons_stack_create_createStructure(e){e.elements={},e.elements.buttons=[],e.elements.cardContainer=(0,utils.n)("div","bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container");let t=1;for(;e.config[t+"_link"];)e.elements.cardContainer.appendChild(createButton(e,t)),t++;e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=horizontal_buttons_stack_styles_namespaceObject,e.elements.customStyle=(0,utils.n)("style"),e.card.classList.add("horizontal-buttons-stack-card"),e.card.style.marginLeft=e.config.margin??"",e.config.hide_gradient||e.card.classList.add("has-gradient"),e.card.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.elements.cardContainer.appendChild(e.elements.style),e.elements.cardContainer.appendChild(e.elements.customStyle),e.content.appendChild(e.elements.cardContainer),e.content.addEventListener("scroll",(()=>{e.content.scrollLeft>0?e.content.classList.add("is-scrolled"):e.content.classList.remove("is-scrolled"),e.content.scrollWidth-BUTTON_MARGIN<e.content.offsetWidth+e.content.scrollLeft?e.content.classList.add("is-maxed-scroll"):e.content.classList.remove("is-maxed-scroll")})),(e.config.rise_animation??1)&&(e.content.style.animation="from-bottom .6s forwards",setTimeout((()=>{e.content.style.animation="none"}),1500));let n=e.card.parentNode.host;n?.parentElement&&!e.editor&&"hui-card"===n?.parentElement?.tagName.toLowerCase()&&(n.parentElement.style.padding="0 0 80px"),e.cardType="horizontal-buttons-stack"}const changes_BUTTON_MARGIN=12;function sortButtons(e){if(!e.config.auto_order)return;const t=e._hass.states;e.elements.buttons.sort(((e,n)=>{if(!t[e.pirSensor])return 1;if(!t[n.pirSensor])return-1;const o=t[e.pirSensor]?.last_updated,r=t[n.pirSensor]?.last_updated;return"on"===t[e.pirSensor]?.state&&"on"===t[n.pirSensor]?.state?o>r?-1:o===r?0:1:"on"===t[e.pirSensor]?.state?-1:"on"===t[n.pirSensor]?.state?1:o>r?-1:o===r?0:1}))}function placeButtons(e){let t=0;for(let n=0;n<e.elements.buttons.length;++n){let o=localStorage.getItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`);e.elements.buttons[n].style.width="";const r=e.elements.buttons[n].offsetWidth;e.elements.buttons[n].style.width=`${r}px`,r>0&&(o=r,localStorage.setItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`,`${r}`)),null!==o&&(e.elements.buttons[n].style.transform=`translateX(${t}px)`,e.elements.buttons[n].style.width="",t+=+o+changes_BUTTON_MARGIN)}e.elements.cardContainer.style.width=`${t}px`}function changes_changeEditor(e){e.editor||e.detectedEditor?(e.elements.cardContainer.classList.add("editor"),e.card.classList.add("editor")):(e.elements.cardContainer.classList.remove("editor"),e.card.classList.remove("editor"))}function changeLight(e){e.elements.buttons.forEach((t=>{const n=e._hass.states[t.lightEntity],o=n?.attributes.rgb_color,r=n?.state;if(o){const e=(0,style.qd)(o)?"rgba(255, 220, 200, 0.5)":`rgba(${o}, 0.5)`;t.backgroundColor.style.backgroundColor=e,t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"}else"on"==r?(t.backgroundColor.style.backgroundColor="rgba(255, 255, 255, 0.5)",t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"):(t.backgroundColor.style.backgroundColor="rgba(0, 0, 0, 0)",t.backgroundColor.style.borderColor="var(--primary-text-color)")}))}function changeConfig(e){e.elements.buttons.forEach((t=>{const n=t.index,o=e.config[`${n}_name`]??"",r=e.config[`${n}_icon`]??"",a=e.config[`${n}_pir_sensor`],i=e.config[`${n}_link`],s=e.config[`${n}_entity`];t.pirSensor=a,t.lightEntity=s,t.link=i,o?(t.name.innerText=o,t.name.style.display=""):t.name.style.display="none",r?(t.icon.icon=r,t.icon.style.display=""):t.icon.style.display="none",void 0===i&&(t.remove(),e.elements.buttons=e.elements.buttons.filter((e=>e!==t)),e.elements.buttons.forEach(((e,t)=>{e.index=t+1})))}));let t=e.elements.buttons.length+1;for(;void 0!==e.config[`${t}_link`];){if(!e.elements.buttons.find((e=>e.index===t))){const n=createButton(e,t);e.elements.buttons.push(n)}t++}}function horizontal_buttons_stack_changes_changeStatus(e){e.content.scrollWidth>=e.content.offsetWidth?e.content.classList.add("is-scrollable"):e.content.classList.remove("is-scrollable")}function horizontal_buttons_stack_changes_changeStyle(e){(0,style_processor.SF)(e)}function handleHorizontalButtonsStack(e){"horizontal-buttons-stack"!==e.cardType&&horizontal_buttons_stack_create_createStructure(e),horizontal_buttons_stack_changes_changeStyle(e),sortButtons(e),changeConfig(e),changes_changeEditor(e),placeButtons(e),changeLight(e),horizontal_buttons_stack_changes_changeStatus(e)}const separator_styles_namespaceObject=".bubble-container {\r\n    display: flex;\r\n    background: none;\r\n    align-items: center;\r\n    height: 40px;\r\n    overflow: visible;\r\n    --bubble-separator-border: none;\r\n}\r\n.bubble-icon {\r\n    display: inline-flex;\r\n    height: auto;\r\n    width: auto;\r\n    margin: 0 22px 0 8px;\r\n}\r\n.bubble-name {\r\n    margin: 0 30px 0 0;\r\n    font-size: 16px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.bubble-name:empty {\r\n    display: none;\r\n}\r\n\r\n.bubble-line {\r\n    border-radius: 6px;\r\n    margin-right: 14px;\r\n    opacity: 0.6;\r\n    flex-grow: 1;\r\n    height: 6px;\r\n    background-color: var(--bubble-line-background-color, var(--ha-card-background-color, var(--secondary-background-color)));\r\n}\r\n\r\n.bubble-sub-button-container {\r\n    margin-left: 8px;\r\n}\r\n\r\n.rows-2 .bubble-sub-button-container {\r\n    margin-left: 14px;\r\n}\r\n\r\n.large .bubble-container {\r\n    height: 44px;\r\n}";function separator_create_createStructure(e){const t="separator";e.elements={},e.elements.mainContainer=(0,utils.n)("div","bubble-container bubble-separator separator-container"),e.elements.icon=(0,utils.n)("ha-icon","bubble-icon"),e.elements.name=(0,utils.n)("h4","bubble-name"),e.elements.line=(0,utils.n)("div","bubble-line"),e.elements.mainContainer.appendChild(e.elements.icon),e.elements.mainContainer.appendChild(e.elements.name),e.elements.mainContainer.appendChild(e.elements.line),createBaseStructure(e,{type:t,styles:separator_styles_namespaceObject,withMainContainer:!1,withBaseElements:!1,withSubButtons:!0,iconActions:!1,buttonActions:!1}),e.cardType=t}function changes_changeIcon(e){e.elements.icon.icon=(0,icon.sW)(e),""===e.elements.icon.icon&&""===e.elements.icon.style.margin?(e.elements.icon.style.margin="0px 8px",e.elements.icon.style.width="0px"):""!==e.elements.icon.icon&&"0px 8px"===e.elements.icon.style.margin&&(e.elements.icon.style.margin="",e.elements.icon.style.width="")}function changes_changeName(e){const t=getName(e);t!==e.elements.name.innerText&&(e.elements.name.innerText=t)}function separator_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e)}function handleSeparator(e){"separator"!==e.cardType&&separator_create_createStructure(e),changes_changeIcon(e),changeName(e,!1),(0,changes.Kr)(e),separator_changes_changeStyle(e)}const coverEntityFeature={OPEN:1,CLOSE:2,STOP:8};function supportsFeature(e,t){return supportsFeatureFromAttributes(e.attributes,t)}function supportsFeatureFromAttributes(e,t){return!!(e&&void 0!==e.supported_features&&e.supported_features&t)}function isFullyOpen(e){return void 0!==e.attributes.current_position?100===e.attributes.current_position:"open"===e.state}function isFullyClosed(e){return void 0!==e.attributes.current_position?0===e.attributes.current_position:"closed"===e.state}function changeCoverIcons(e){const t=e._hass.states[e.config.entity],{current_position:n,assumed_state:o}=t.attributes,r=supportsFeature(t,coverEntityFeature.OPEN),a=supportsFeature(t,coverEntityFeature.CLOSE),i=supportsFeature(t,coverEntityFeature.STOP),s=isFullyOpen(t),l=isFullyClosed(t),c="curtain"===(0,utils.D$)(e,"device_class");e.elements.icon.icon=s?(0,icon.sW)(e,e.config.entity,e.config.icon_open):(0,icon.sW)(e,e.config.entity,e.config.icon_close);const d=e.config.icon_up||(c?"mdi:arrow-expand-horizontal":"mdi:arrow-up"),u=e.config.icon_down||(c?"mdi:arrow-collapse-horizontal":"mdi:arrow-down");e.elements.buttonOpen.icon.setAttribute("icon",d),e.elements.buttonClose.icon.setAttribute("icon",u),void 0!==n?(s?e.elements.buttonOpen.classList.add("disabled"):r&&e.elements.buttonOpen.classList.remove("disabled"),l?e.elements.buttonClose.classList.add("disabled"):a&&e.elements.buttonClose.classList.remove("disabled")):(e.elements.buttonOpen.classList.remove("disabled"),e.elements.buttonClose.classList.remove("disabled")),e.elements.buttonStop.style.display=i?"":"none"}function cover_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e)}const cover_styles_namespaceObject=".bubble-cover-button {\r\n    display: flex;\r\n    position: relative;\r\n    height: 36px;\r\n    width: 36px;\r\n    border-radius: var(--bubble-cover-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: var(--bubble-cover-button-background-color);\r\n    cursor: pointer;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    transition: all 0.3s ease;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.bubble-cover-button-icon {\r\n    --mdc-icon-size: 20px;\r\n    color: var(--primary-text-color);\r\n    line-height: normal;\r\n}\r\n\r\n.bubble-buttons-container {\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.bubble-button.disabled {\r\n    opacity: 0.3 !important;\r\n    pointer-events: none !important;\r\n    cursor: none !important;\r\n}\r\n\r\n.large .bubble-cover-button-icon {\r\n    --mdc-icon-size: 24px;\r\n}";function cover_create_createStructure(e){const t="cover",n=createBaseStructure(e,{type:t,styles:cover_styles_namespaceObject,withSubButtons:!0,iconActions:!0,buttonActions:!0});function o(e,t){const n=(0,utils.n)("div",`bubble-cover-button ${t}`),o=(0,utils.n)("ha-icon","bubble-cover-button-icon");o.setAttribute("icon",e);const r=(0,utils.n)("div","bubble-feedback-container"),a=(0,utils.n)("div","bubble-feedback-element feedback-element");return r.appendChild(a),n.appendChild(r),n.appendChild(o),n.icon=o,n.feedback=a,n.haRipple=(0,utils.n)("ha-ripple"),n.appendChild(n.haRipple),n}n.buttonsContainer.classList.add("bubble-buttons","buttons-container"),n.buttonOpen=o("mdi:arrow-up","bubble-button bubble-open button open"),n.buttonStop=o("mdi:stop","bubble-button bubble-stop button stop"),n.buttonClose=o("mdi:arrow-down","bubble-button bubble-close button close"),n.buttonsContainer.append(n.buttonOpen,n.buttonStop,n.buttonClose),n.buttonOpen.addEventListener("click",(()=>{(0,utils.jp)("selection");const t=e.config.open_service??"cover.open_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),n.buttonStop.addEventListener("click",(()=>{(0,utils.jp)("selection");const t=e.config.stop_service??"cover.stop_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),n.buttonClose.addEventListener("click",(()=>{(0,utils.jp)("selection");const t=e.config.close_service??"cover.close_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),e.cardType=t}function handleCover(e){"cover"!==e.cardType&&cover_create_createStructure(e),changeStatus(e),changeIcon(e),changeName(e),changeState(e),changeCoverIcons(e),(0,changes.Kr)(e),cover_changes_changeStyle(e)}const empty_column_styles_namespaceObject=".empty-column {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n";function empty_column_create_createStructure(e){e.elements={},e.elements.emptyColumnCard=(0,utils.n)("div","bubble-empty-column empty-column"),e.elements.style=(0,utils.n)("style"),e.elements.style.innerText=empty_column_styles_namespaceObject,e.elements.customStyle=(0,utils.n)("style"),e.content.innerHTML="",e.content.appendChild(e.elements.emptyColumnCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="empty-column"}function handleEmptyColumn(e){"empty-column"!==e.cardType&&empty_column_create_createStructure(e)}const en_namespaceObject=JSON.parse('{"cards":{"calendar":{"busy":"Busy","all_day":"All day"}},"editor":{"calendar":{"entity":"Entity","color":"Color","limit":"Limit","list_of_calendars":"List of calendars","show_end":"Show end time","show_progress":"Show progress","text_scrolling":"Text scrolling effect","name":"Calendar","new_calendar":"Add another calendar","remove_calendar":"Remove this calendar","settings":"Calendar settings"}}}');var translations_en_namespaceObject=__webpack_require__.t(en_namespaceObject,2);const fr_namespaceObject=JSON.parse('{"cards":{"calendar":{"busy":"Occupé","all_day":"Journée"}},"editor":{"calendar":{"entity":"Entité","color":"Couleur","limit":"Limite","list_of_calendars":"Liste des calendriers","show_end":"Voir l\'heure de fin","show_progress":"Voir la progression","text_scrolling":"Effet de défilement du texte","name":"Calendrier","new_calendar":"Ajouter un autre calendrier","remove_calendar":"Supprimer ce calendrier","settings":"Paramètres du calendrier"}}}');var translations_fr_namespaceObject=__webpack_require__.t(fr_namespaceObject,2);const de_namespaceObject=JSON.parse('{"cards":{"calendar":{"busy":"Beschäftigt","all_day":"Ganztags"}},"editor":{"calendar":{"entity":"Entität","color":"Farbe","limit":"Anzeigelimit","list_of_calendars":"Kalenderliste","show_end":"Endzeitpunkt anzeigen","show_progress":"Fortschritt anzeigen","text_scrolling":"Lauftext","name":"Kalender","new_calendar":"Kalender hinzufügen","remove_calendar":"Kalender entfernen","settings":"Kalendereinstellungen"}}}');var translations_de_namespaceObject=__webpack_require__.t(de_namespaceObject,2);const zh_cn_namespaceObject=JSON.parse('{"cards":{"calendar":{"busy":"忙碌","all_day":"全天"}},"editor":{"calendar":{"entity":"实体","color":"颜色","limit":"限制","list_of_calendars":"日历列表","show_end":"显示结束时间","show_progress":"显示进度","text_scrolling":"文字滚动效果","name":"日历","new_calendar":"添加另一个日历","remove_calendar":"删除此日历","settings":"日历设置"}}}');var translations_zh_cn_namespaceObject=__webpack_require__.t(zh_cn_namespaceObject,2);const languages={en:translations_en_namespaceObject,fr:translations_fr_namespaceObject,de:translations_de_namespaceObject,"zh-Hans":translations_zh_cn_namespaceObject},DEFAULT_LANG="en";function getCurrentLocale(e){return e?.locale.language??DEFAULT_LANG}function dotStringReducer(e,t){return e[t]}function getTranslatedString(e,t){try{const n=languages[t];return e.split(".").reduce(dotStringReducer,n)}catch{return}}function setupTranslation(e){return function(t){const n=getCurrentLocale(e),o=getTranslatedString(t,n);if(console.log(n,o),o)return o;return getTranslatedString(t,DEFAULT_LANG)||t}}function hashCode(e){return Array.from(e).reduce(((e,t)=>t.charCodeAt(0)+((e<<5)-e)),0)}function intToRGB(e){const t=(16777215&e).toString(16).toUpperCase();return"#"+"00000".substring(0,6-t.length)+t}function dateDiffInMinutes(e,t){return Math.floor((t-e)/6e4)}async function changeEventList(e){const t=e.config.days??7,n=`start=${(new Date).toISOString()}&end=${new Date((new Date).getTime()+864e5*t).toISOString()}`,o=e.config.entities.map((async t=>{const o=`calendars/${t.entity}?${n}`;return(await e._hass.callApi("get",o)).map((e=>({...e,entity:t})))})),r=await Promise.all(o);e.events=r.flat().sort(((e,t)=>new Date(e.start.date??e.start.dateTime).getTime()-new Date(t.start.date??t.start.dateTime).getTime())).slice(0,e.config.limit??void 0)}async function changeEvents(e){const t=setupTranslation(e._hass),n=e.events.reduce(((e,t)=>{const n=t.start.date??t.start.dateTime.split("T")[0];return e[n]||(e[n]=[]),e[n].push(t),e}),{});if(0===Object.keys(n).length){const e=(new Date).toISOString().split("T")[0];n[e]=[{start:{date:e},end:{date:e},summary:"No events",entity:{color:"transparent"}}]}e.elements.calendarCardContent.innerHTML="",Object.keys(n).sort().forEach((o=>{const r=new Date(o),a=new Date,i=document.createElement("div"),s=e._hass.locale.language;i.classList.add("bubble-day-number"),i.innerHTML=`${r.getDate()}`;const l=document.createElement("div");l.classList.add("bubble-day-month"),l.innerHTML=r.toLocaleString(s,{month:"short"});const c=document.createElement("div");c.classList.add("bubble-day-chip"),c.appendChild(i),c.appendChild(l),r.getDate()===a.getDate()&&r.getMonth()===a.getMonth()&&c.classList.add("is-active");const d=document.createElement("div");d.classList.add("bubble-day-events"),n[o].forEach((n=>{const o=document.createElement("div");o.classList.add("bubble-event-time"),o.innerHTML=n.start.date?t("cards.calendar.all_day"):new Date(n.start.dateTime).toLocaleTimeString(s,{hour:"numeric",minute:"numeric"}),n.start.date||!0!==e.config.show_end||(o.innerHTML+=` – ${new Date(n.end.dateTime).toLocaleTimeString(s,{hour:"numeric",minute:"numeric"})}`);const r=document.createElement("div");r.classList.add("bubble-event-name");const a=n.summary||t("cards.calendar.busy");(0,utils.Nl)(e,r,a);const i=document.createElement("div");i.classList.add("bubble-event-color"),i.style.backgroundColor=n.entity.color?`var(--${n.entity.color}-color)`:intToRGB(hashCode(n.entity.entity)),"transparent"===n.entity.color&&(i.style.display="none");const l=document.createElement("div");l.classList.add("bubble-event"),l.appendChild(i),l.appendChild(o),l.appendChild(r),(0,tap_actions.dN)(l,{...e.config,entity:n.entity.entity});const c=new Date,u=new Date(n.start.dateTime??n.start.date),p=new Date(n.end.dateTime??n.end.date),h="var(--bubble-event-accent-color, var(--bubble-accent-color, var(--accent-color)))";if(!0===e.config.show_progress&&n.start.date&&u<c)l.style.setProperty("--bubble-event-background-color",h);else if(!0===e.config.show_progress&&n.start.dateTime&&u<c){const e=dateDiffInMinutes(u,p),t=100*dateDiffInMinutes(u,c)/e;l.style.setProperty("--bubble-event-background-image",`linear-gradient(to right, ${h} ${t}%, transparent ${t}%)`)}d.appendChild(l)}));const u=document.createElement("div");u.classList.add("bubble-day-wrapper"),u.appendChild(c),u.appendChild(d),e.elements.calendarCardContent.appendChild(u),e.elements.mainContainer.scrollHeight>e.elements.mainContainer.offsetHeight&&e.content.classList.add("is-overflowing")}))}function calendar_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e)}const calendar_styles_namespaceObject='.bubble-container {\r\n  height: var(--bubble-calendar-height, 56px);\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n.card-content::after {\r\n  border-radius: 0 0 var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px)) var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\r\n  content: "";\r\n  display: flex;\r\n  height: 32px;\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n  pointer-events: none;\r\n  transition: opacity .2s, transform .2s;\r\n  background: -webkit-linear-gradient(0deg, var(--bubble-calendar-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color)))), transparent 14px);\r\n  background: -moz-linear-gradient(0deg, var(--bubble-calendar-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color)))), transparent 14px);\r\n  background: linear-gradient(0deg, var(--bubble-calendar-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color)))), transparent 14px);\r\n  z-index: 1;\r\n}\r\n.bubble-calendar-content {\r\n  flex-grow: 1;\r\n  min-width: 0;\r\n}\r\n.bubble-sub-button-container {\r\n  flex-shrink: 0;\r\n  position: sticky !important;\r\n  top: 0;\r\n}\r\n.bubble-day-wrapper {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  width: 100%;\r\n  gap: 8px;\r\n  padding: 7px 16px 7px 8px;\r\n  position: relative;\r\n}\r\n.bubble-day-wrapper + .bubble-day-wrapper::before {\r\n  content: "";\r\n  position: absolute;\r\n  top: -1px;\r\n  left: 62px;\r\n  right: 16px;\r\n  height: 2px;\r\n  background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n}\r\n.bubble-day-chip {\r\n  display: flex;\r\n  flex-grow: 0;\r\n  flex-shrink: 0;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 42px;\r\n  height: 42px;\r\n  border-radius: var(--bubble-button-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\r\n  background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n  position: relative;\r\n}\r\n.bubble-day-number {\r\n  font-size: 24px;\r\n  line-height: 20px;\r\n  font-weight: 600;\r\n  opacity: 0.6;\r\n}\r\n.is-active .bubble-day-number {\r\n  filter: brightness(1.1);\r\n  opacity: 1;\r\n}\r\n.bubble-day-month {\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  font-weight: 400;\r\n  opacity: 0.6;\r\n}\r\n.is-active .bubble-day-month {\r\n  filter: brightness(1.1);\r\n  opacity: 1;\r\n}\r\n.bubble-day-events {\r\n  width: 100%;\r\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\r\n  min-width: 0;\r\n}\r\n.bubble-event {\r\n  background-color: var(--bubble-event-background-color);\r\n  background-image: var(--bubble-event-background-image);\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  padding-right: 6px;\r\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\r\n}\r\n.bubble-event-time {\r\n  font-size: 12px;\r\n  line-height: 21px;\r\n  font-weight: 400;\r\n  white-space: nowrap;\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n  opacity: 0.7;\r\n}\r\n.bubble-event-color {\r\n  height: 12px;\r\n  width: 12px;\r\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n}\r\n.bubble-event-name {\r\n  font-size: 13px;\r\n  line-height: 21px;\r\n  font-weight: 600;\r\n  max-width: 100%;\r\n  min-width: 0;\r\n  flex-shrink: 1;\r\n  flex-grow: 1;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n';function calendar_create_createStructure(e){const t="calendar",n=createBaseStructure(e,{type:t,styles:calendar_styles_namespaceObject,withBaseElements:!1,withSubButtons:!0,iconActions:!1,buttonActions:!1});n.calendarCardContent=(0,utils.n)("div","bubble-calendar-content"),n.mainContainer.style.setProperty("--bubble-calendar-height",56*(e.config.rows??1)+"px"),n.mainContainer.prepend(n.calendarCardContent),e.cardType=t}function handleCalendar(e){"calendar"!==e.cardType&&calendar_create_createStructure(e);const t=JSON.stringify(e.config.entities.map((t=>e._hass.states[t.entity])));e.cacheKey!==t&&(e.cacheKey=t,setTimeout((()=>{e.cacheKey=""}),9e5),changeEventList(e).then((()=>{changeEvents(e)}))),calendar_changes_changeStyle(e),(0,changes.Kr)(e)}function changeBackground(e){const t=(0,utils.$C)(e),n=(0,icon.Qp)(e),o=e.config.cover_background,r=e.elements.background.style.backgroundImage;if(o&&t&&n){const t="url("+n+")";r!==t&&(e.elements.background.style.backgroundImage=t)}else""!==r&&(e.elements.background.style.backgroundImage="")}function changeMediaInfo(e){const t=(0,utils.D$)(e,"media_title"),n=(0,utils.D$)(e,"media_artist"),o=t+n;o!==e.previousMediaState&&(e.elements.artist.style.display=""===n?"none":"flex",e.previousMediaState=o,(0,utils.Nl)(e,e.elements.title,t),(0,utils.Nl)(e,e.elements.artist,n))}function changeDisplayedInfo(e){(0,utils.D$)(e,"media_title");const t=""===(0,utils.D$)(e,"media_artist");e.elements.mediaInfoContainer.style.display=t?"none":"",e.elements.nameContainer.style.display=t?"":"none"}function changeSlider(e){e.elements.rangeFill&&updateSlider(e)}function changePlayPauseIcon(e){const t="playing"===(0,utils.Gu)(e),n=e.elements.playPauseButton.clicked;t?e.elements.playPauseButton.icon.setAttribute("icon",n?"mdi:play":"mdi:pause"):e.elements.playPauseButton.icon.setAttribute("icon",n?"mdi:pause":"mdi:play"),e.elements.playPauseButton.clicked=!1}function changePowerIcon(e){const t=(0,utils.Gu)(e),n="off"!==t&&"unknown"!==t;e.elements.powerButton.icon.style.color=n?"var(--accent-color)":""}function changeVolumeIcon(e){const t=e.elements.volumeButton.isHidden,n=t?"1":"0",o=t?"mdi:volume-high":"mdi:close";e.elements.volumeButton.icon.setAttribute("icon",o),e.elements.mediaInfoContainer.style.opacity=n,e.elements.nameContainer.style.opacity=n,e.elements.subButtonContainer&&(e.elements.subButtonContainer.style.opacity=n),e.elements.previousButton.style.opacity=n,e.elements.nextButton.style.opacity=n,e.elements.powerButton.style.opacity=n,e.elements.volumeButton.isHidden=!t}function changeMuteIcon(e){const t=1==(0,utils.D$)(e,"is_volume_muted");e.elements.muteButton.clicked,"var(--primary-text-color)"!==e.elements.muteButton.icon.style.color&&(e.elements.muteButton.icon.style.color="var(--primary-text-color)"),t?e.elements.muteButton.icon.setAttribute("icon","mdi:volume-off"):e.elements.muteButton.icon.setAttribute("icon","mdi:volume-high"),e.elements.muteButton.clicked=!1}function updateVolumeSliderPosition(e){let t=50,n=146;e.content.classList.contains("large")&&(t=58,n=160);const o=(0,utils.Gu)(e),r="off"!==o&&"unknown"!==o;(e.config.hide?.play_pause_button||!e.editor&&!r)&&(e.content.classList.contains("large")?n-=42:n-=36),e.elements.cardWrapper.style.setProperty("--volume-slider-left-offset",`${t}px`),e.elements.cardWrapper.style.setProperty("--volume-slider-width-calc",`calc(100% - ${n}px)`)}function media_player_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e);const t=(0,utils.Gu)(e),n="off"!==t&&"unknown"!==t,o=e.config.hide?.power_button&&e.config.hide?.previous_button&&e.config.hide?.next_button&&e.config.hide?.volume_button&&e.config.hide?.play_pause_button;(!n&&e.config.hide?.power_button||o)&&"none"!==e.elements.buttonsContainer.style.display?e.elements.buttonsContainer.classList.add("hidden"):o&&e.config.hide?.power_button||!e.elements.buttonsContainer.classList.contains("hidden")||e.elements.buttonsContainer.classList.remove("hidden"),e.config.hide?.power_button&&"none"!==e.elements.powerButton.style.display?e.elements.powerButton.classList.add("hidden"):!e.config.hide?.power_button&&e.elements.powerButton.classList.contains("hidden")&&e.elements.powerButton.classList.remove("hidden"),!e.config.hide?.previous_button&&(e.editor||n)||"none"===e.elements.previousButton.style.display?!e.config.hide?.previous_button&&(e.editor||n)&&e.elements.previousButton.classList.contains("hidden")&&e.elements.previousButton.classList.remove("hidden"):e.elements.previousButton.classList.add("hidden"),!e.config.hide?.next_button&&(e.editor||n)||"none"===e.elements.nextButton.style.display?!e.config.hide?.next_button&&(e.editor||n)&&e.elements.nextButton.classList.contains("hidden")&&e.elements.nextButton.classList.remove("hidden"):e.elements.nextButton.classList.add("hidden"),!e.config.hide?.volume_button&&(e.editor||n)||"none"===e.elements.volumeButton.style.display?!e.config.hide?.volume_button&&(e.editor||n)&&e.elements.volumeButton.classList.contains("hidden")&&e.elements.volumeButton.classList.remove("hidden"):e.elements.volumeButton.classList.add("hidden"),!e.config.hide?.play_pause_button&&(e.editor||n)||"none"===e.elements.playPauseButton.style.display?!e.config.hide?.play_pause_button&&(e.editor||n)&&e.elements.playPauseButton.classList.contains("hidden")&&e.elements.playPauseButton.classList.remove("hidden"):e.elements.playPauseButton.classList.add("hidden"),updateVolumeSliderPosition(e)}const media_player_styles_namespaceObject=".bubble-media-button {\r\n    display: flex;\r\n    position: relative;\r\n    height: 36px;\r\n    width: 36px;\r\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: var(--bubble-media-player-button-background-color);\r\n    cursor: pointer;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    transition: all 0.3s ease;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.bubble-button-container {\r\n    align-items: center;\r\n    gap: 8px;\r\n  }\r\n\r\n.bubble-media-button-icon {\r\n    --mdc-icon-size: 20px;\r\n    color: var(--primary-text-color);\r\n    line-height: normal;\r\n}\r\n\r\n.bubble-play-pause-button {\r\n    background-color: var(--bubble-accent-color, var(--bubble-default-color));\r\n}\r\n\r\n.bubble-play-pause-button .bubble-media-button-icon {\r\n    color: var(--bubble-media-player-play-pause-icon-color, var(--bubble-button-active-icon-color, var(--primary-background-color, white)));\r\n}\r\n\r\n.bubble-play-pause-button:not(.large) {\r\n    height: 36px;\r\n    width: 36px;\r\n}\r\n\r\n.bubble-volume-slider {\r\n    position: absolute;\r\n    height: 38px;\r\n    width: var(--bubble-volume-slider-width-calc, var(--volume-slider-width-calc, calc(100% - 150px)));\r\n    left: var(--bubble-volume-slider-left-offset, var(--volume-slider-left-offset, 56px));\r\n    overflow: hidden;\r\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    z-index: 1;\r\n    background-color: var(--bubble-media-player-slider-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n    opacity: 1;\r\n    transition: opacity .2s, transform .2s;\r\n    transform: translateX(0);\r\n}\r\n\r\n.bubble-range-value {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    height: 38px;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    opacity: 0.8;\r\n    z-index: 1;\r\n}\r\n\r\n.bubble-mute-button {\r\n    opacity: 1;\r\n    transition: opacity .2s, transform .2s;\r\n    transform: translateX(0);\r\n}\r\n\r\n.is-hidden {\r\n    opacity: 0 !important;\r\n    pointer-events: none;\r\n    transform: translateX(14px);\r\n}\r\n\r\n.bubble-range-fill {\r\n    background-color: var(--bubble-accent-color, var(--bubble-default-color));\r\n}\r\n\r\n.bubble-mute-button {\r\n    display: flex;\r\n    position: absolute;\r\n    height: 38px;\r\n    width: 38px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.bubble-media-info-container {\r\n    display: flex;\r\n    line-height: 14px;\r\n    font-size: 12px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    flex-grow: 1;\r\n    margin: 0 16px 0 4px;\r\n    pointer-events: none;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.bubble-title,\r\n.bubble-artist {\r\n    display: flex;\r\n    margin: 2px 0;\r\n    position: relative;\r\n    white-space: nowrap;\r\n}\r\n\r\n.bubble-title {\r\n    font-weight: 600;\r\n}\r\n\r\n.bubble-background {\r\n    background-size: cover;\r\n    background-position: center;\r\n    filter: blur(50px);\r\n    opacity: 0.5;\r\n}\r\n\r\n@media screen and (max-width: 250px) {\r\n    .bubble-previous-button {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 206px) {\r\n    .bubble-next-button {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 160px) {\r\n    .bubble-volume-button {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.large .bubble-mute-button {\r\n  height: 42px;\r\n  width: 42px;\r\n}\r\n\r\n.large .bubble-volume-slider {\r\n  height: 42px;\r\n  border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n  left: var(--volume-slider-left-offset, 60px);\r\n  width: var(--volume-slider-width-calc, calc(100% - 164px));\r\n}\r\n\r\n.large .bubble-range-value {\r\n  place-items: center;\r\n  height: 42px;\r\n}\r\n\r\n.large .bubble-play-pause-button {\r\n  height: 42px;\r\n  width: 42px;\r\n}";function media_player_create_createStructure(e){const t="media-player",n=createBaseStructure(e,{type:t,styles:media_player_styles_namespaceObject,iconActions:!0,buttonActions:!0,withSubButtons:!0});function o(e,t){const n=(0,utils.n)("div",`bubble-media-button ${t}`),o=(0,utils.n)("ha-icon","bubble-media-button-icon");o.setAttribute("icon",e);const r=(0,utils.n)("div","bubble-feedback-container"),a=(0,utils.n)("div","bubble-feedback-element feedback-element");return r.appendChild(a),n.appendChild(r),n.appendChild(o),n.icon=o,n.feedback=a,n.haRipple=(0,utils.n)("ha-ripple"),n.appendChild(n.haRipple),n}n.mediaInfoContainer=(0,utils.n)("div","bubble-media-info-container"),n.playPauseButton=o("mdi:play","bubble-play-pause-button"),n.previousButton=o("mdi:skip-previous","bubble-previous-button"),n.nextButton=o("mdi:skip-next","bubble-next-button"),n.volumeButton=o("mdi:volume-high","bubble-volume-button"),n.powerButton=o("mdi:power","bubble-power-button"),n.muteButton=o("mdi:volume-off","bubble-mute-button is-hidden"),n.title=(0,utils.n)("div","bubble-title"),n.artist=(0,utils.n)("div","bubble-artist"),n.background.classList.add("bubble-cover-background"),n.buttonsContainer.classList.add("bubble-button-container"),n.iconContainer.appendChild(n.muteButton),n.mediaInfoContainer.append(n.title,n.artist),n.contentContainer.append(n.mediaInfoContainer),n.buttonsContainer.append(n.powerButton,n.previousButton,n.nextButton,n.volumeButton,n.playPauseButton),n.volumeSliderContainer=(0,utils.n)("div","bubble-volume-slider is-hidden"),createSliderStructure(e,{targetElement:n.volumeSliderContainer,sliderLiveUpdate:!1,withValueDisplay:!0,holdToSlide:!1}),n.cardWrapper.appendChild(n.volumeSliderContainer),n.volumeButton.addEventListener("click",(()=>{n.volumeSliderContainer.classList.toggle("is-hidden"),n.muteButton.classList.toggle("is-hidden"),n.icon.classList.toggle("is-hidden"),n.image.classList.toggle("is-hidden"),changeVolumeIcon(e)})),(0,tap_actions.pd)(n.volumeButton,n.volumeButton.feedback),n.powerButton.addEventListener("click",(()=>{const t=(0,utils.Gu)(e),n="off"!==t&&"unknown"!==t;e._hass.callService("media_player",n?"turn_off":"turn_on",{entity_id:e.config.entity})})),(0,tap_actions.pd)(n.powerButton,n.powerButton.feedback),n.muteButton.addEventListener("pointerdown",(t=>{t.stopPropagation();const o=!0===(0,utils.D$)(e,"is_volume_muted");e._hass.callService("media_player","volume_mute",{entity_id:e.config.entity,is_volume_muted:!o}),n.muteButton.clicked=!0})),(0,tap_actions.pd)(n.muteButton,n.muteButton.feedback),n.previousButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_previous_track",{entity_id:e.config.entity})})),(0,tap_actions.pd)(n.previousButton,n.previousButton.feedback),n.nextButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_next_track",{entity_id:e.config.entity})})),(0,tap_actions.pd)(n.nextButton,n.nextButton.feedback),n.playPauseButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_play_pause",{entity_id:e.config.entity}),n.playPauseButton.clicked=!0})),(0,tap_actions.pd)(n.playPauseButton,n.playPauseButton.feedback),n.mainContainer.addEventListener("click",(()=>(0,utils.jp)("selection"))),e.cardType=t}function handleMediaPlayer(e){"media-player"!==e.cardType&&media_player_create_createStructure(e),changeStatus(e),changeName(e),changeMediaInfo(e),changeDisplayedInfo(e),changeIcon(e),changeBackground(e),changeState(e),changeSlider(e),changePlayPauseIcon(e),changeMuteIcon(e),changePowerIcon(e),(0,changes.Kr)(e),media_player_changes_changeStyle(e)}var dropdown=__webpack_require__(352),dropdown_changes=__webpack_require__(26);function select_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e)}const select_styles_namespaceObject='.bubble-container {\r\n    border: solid 2px transparent;\r\n    overflow: inherit;\r\n    transition: border 0.3s ease;\r\n}\r\n\r\n.bubble-container::after {\r\n    content: "";\r\n    position: absolute;\r\n    top: -2px;\r\n    left: -2px;\r\n    width: calc(100% + 2px);\r\n    height: calc(100% + 2px);\r\n    border: var(--bubble-border);\r\n    pointer-events: none;\r\n    border-radius: var(--bubble-border-radius);\r\n}\r\n\r\n.bubble-background {\r\n    cursor: pointer;\r\n}\r\n\r\n.bubble-icon-container {\r\n    padding-left: 0px;\r\n    margin: 6px;\r\n}\r\n\r\n.large .bubble-icon-container {\r\n    margin-left: 6px;\r\n}';function select_create_createStructure(e){createBaseStructure(e,{type:"select",styles:select_styles_namespaceObject,withFeedback:!0,withSubButtons:!0,withIconActions:!0}).mainContainer.classList.add("bubble-select-card-container"),e.cardType="select"}function handleSelect(e){e.cardType,"select"!==e.cardType&&(select_create_createStructure(e),(0,dropdown.F)(e),(0,dropdown.X)(e)),(0,dropdown_changes.O)(e,e.elements,e.config.entity,e.config),changeStatus(e),changeIcon(e),changeName(e),changeState(e),(0,changes.Kr)(e),select_changes_changeStyle(e)}function changeTemperature(e){const t=(0,utils.D$)(e,"temperature");""===t?e.elements.temperatureContainer?.classList.add("hidden"):e.elements.temperatureContainer?.classList.remove("hidden"),t!==e.previousTemp&&(e.previousTemp=t,e.elements.tempDisplay&&(e.elements.tempDisplay.innerText=parseFloat(t).toFixed(1)))}function changeTargetTempLow(e){const t=(0,utils.D$)(e,"target_temp_low"),n=e.config.hide_target_temp_low;""===t?e.elements.targetTemperatureContainer?.classList.add("hidden"):e.elements.targetTemperatureContainer?.classList.remove("hidden"),n?e.elements.lowTempContainer?.classList.add("hidden"):e.elements.lowTempContainer?.classList.remove("hidden"),t!==e.previousTargetTempLow&&(e.previousTargetTempLow=t,e.elements.lowTempDisplay&&(e.elements.lowTempDisplay.innerText=parseFloat(t).toFixed(1)))}function changeTargetTempHigh(e){const t=(0,utils.D$)(e,"target_temp_high");e.config.hide_target_temp_high?e.elements.highTempContainer?.classList.add("hidden"):e.elements.highTempContainer?.classList.remove("hidden"),t!==e.previousTargetTempHigh&&(e.previousTargetTempHigh=t,e.elements.highTempDisplay&&(e.elements.highTempDisplay.innerText=parseFloat(t).toFixed(1)))}function climate_changes_changeStyle(e){(0,utils.JK)(e),(0,style_processor.SF)(e);const t=(0,utils.Gu)(e);e.previousState!==t&&(e.previousState=t,e.elements.background.style.backgroundColor=`var(--bubble-climate-background-color, ${getClimateColor(e)})`),e.config.card_layout,e.elements.hvacModeDropdown}const climate_styles_namespaceObject=".bubble-temperature-container, .bubble-low-temp-container, .bubble-high-temp-container {\r\n    display: inline-flex;\r\n    position: relative;\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: auto;\r\n    height: 36px;\r\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: var(--bubble-climate-button-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))));\r\n}\r\n\r\n.bubble-low-temp-container {\r\n    color: var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)));\r\n}\r\n\r\n.bubble-high-temp-container {\r\n    color: var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)));\r\n}\r\n\r\n.bubble-target-temperature-container {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.bubble-climate-minus-button,\r\n.bubble-climate-plus-button {\r\n    display: flex;\r\n    position: relative;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    width: 36px;\r\n    height: 36px;\r\n    vertical-align: middle;\r\n    font-size: 18px;\r\n    color: var(--primary-text-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.bubble-climate-minus-button-icon,\r\n.bubble-climate-plus-button-icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    --mdc-icon-size: 16px;\r\n}\r\n\r\n@keyframes tap-warning {\r\n    10%, 90% { transform: translateX(-1px); }\r\n    20%, 80% { transform: translateX(1px); }\r\n    30%, 50%, 70% { transform: translateX(-2px); }\r\n    40%, 60% { transform: translateX(2px); }\r\n}";function climate_create_createStructure(e){const t="climate",n=createBaseStructure(e,{type:t,styles:climate_styles_namespaceObject,withSubButtons:!0,iconActions:!0,buttonActions:!0});function o(t,o,a){const i=(0,utils.n)("div","bubble-climate-minus-button"),s=(0,utils.n)("div","bubble-climate-plus-button"),l=(0,utils.n)("ha-icon","bubble-climate-minus-button-icon");l.setAttribute("icon","mdi:minus"),i.appendChild(l),(0,tap_actions.pd)(i);const c=(0,utils.n)("ha-icon","bubble-climate-plus-button-icon");let d,u;c.setAttribute("icon","mdi:plus"),s.appendChild(c),(0,tap_actions.pd)(s),"temperature"===o?(n.tempDisplay=(0,utils.n)("div","bubble-temperature-display"),d=n.tempDisplay):"target_temp_low"===o?(n.lowTempDisplay=(0,utils.n)("div","bubble-low-temperature-display"),d=n.lowTempDisplay):"target_temp_high"===o&&(n.highTempDisplay=(0,utils.n)("div","bubble-high-temperature-display"),d=n.highTempDisplay),t.appendChild(i),t.appendChild(d),t.appendChild(s);let p=parseFloat((0,utils.D$)(e,o))||0,h=p;function b(){const t=parseFloat((0,utils.D$)(e,o))||0;t!==h&&(p=t,h=t)}function m(){b();const t={entity_id:e.config.entity};"target_temp_low"===o?(t.target_temp_low=p,t.target_temp_high=(0,utils.D$)(e,"target_temp_high")):"target_temp_high"===o?(t.target_temp_high=p,t.target_temp_low=(0,utils.D$)(e,"target_temp_low")):t[o]=p,e._hass.callService("climate","set_temperature",t)}function g(t){b();const a=e.config.min_temp??(void 0!==r.attributes.min_temp?r.attributes.min_temp:0),i=e.config.max_temp??(void 0!==r.attributes.max_temp?r.attributes.max_temp:1e3);let s=parseFloat((p+t).toFixed(1));if(s=Math.min(i,Math.max(a,s)),s<a?s=a:s>i&&(s=i),s!==p)p=s,function(e){"temperature"===o?n.tempDisplay.innerText=e.toFixed(1):"target_temp_low"===o?n.lowTempDisplay.innerText=e.toFixed(1):"target_temp_high"===o&&(n.highTempDisplay.innerText=e.toFixed(1))}(p),clearTimeout(u),u=setTimeout(m,700);else{(0,utils.jp)("failure");const t=e.elements.mainContainer;t.style.animation="tap-warning 0.4s cubic-bezier(.36,.07,.19,.97) both",setTimeout((()=>{t.style.animation=""}),500)}}i.addEventListener("click",(()=>g(-a))),s.addEventListener("click",(()=>g(a)))}n.temperatureContainer=(0,utils.n)("div","bubble-temperature-container"),n.targetTemperatureContainer=(0,utils.n)("div","bubble-target-temperature-container"),n.background.classList.add("bubble-color-background"),n.buttonsContainer.append(n.temperatureContainer,n.targetTemperatureContainer);const r=e._hass.states[e.config.entity],a="°C"===e._hass.config.unit_system.temperature,i=e.config.step??(r.attributes.target_temp_step?r.attributes.target_temp_step:a?.5:1),s=void 0!==r?.attributes?.target_temp_low,l=void 0!==r?.attributes?.target_temp_high;void 0!==r?.attributes?.temperature&&o(n.temperatureContainer,"temperature",i),(s||l)&&(s&&(n.lowTempContainer=(0,utils.n)("div","bubble-low-temp-container"),o(n.lowTempContainer,"target_temp_low",i),n.targetTemperatureContainer.appendChild(n.lowTempContainer)),l&&(n.highTempContainer=(0,utils.n)("div","bubble-high-temp-container"),o(n.highTempContainer,"target_temp_high",i),n.targetTemperatureContainer.appendChild(n.highTempContainer))),e.cardType=t}function handleClimate(e){"climate"!==e.cardType&&climate_create_createStructure(e),changeStatus(e),changeName(e),changeIcon(e),changeState(e),changeTemperature(e),changeTargetTempLow(e),changeTargetTempHigh(e),(0,changes.Kr)(e),climate_changes_changeStyle(e)}function isReadOnlyEntity(e){const t=e._config.entity;if(!t)return!0;const n=t.split(".")[0];return"sensor"===n||!["light","media_player","cover","input_number","number","fan","climate"].includes(n)}function makeButtonSliderPanel(e){return void 0===e._disableEntityFilter&&(e._disableEntityFilter=!1),x`
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
    `}function getButtonList(){return[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}]}function renderButtonEditor(e){let t={};"slider"!==e._config.button_type||e._disableEntityFilter||(t={filter:[{domain:["light","media_player","cover","input_number","number","climate","fan"]},{domain:"sensor",device_class:"battery"}]});const n="pop-up"===e._config.card_type;let o=e._config.button_action||"";e._config.button_type||(e._config.button_type=n?"name":"switch");let r=e._config.button_type;return x`
        <div class="card-config">
            ${n?"":e.makeDropdown("Card type","card_type",e.cardTypeList)}
            ${e.makeDropdown("Button type","button_type",getButtonList())}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"slider"!==r?"Entity (toggle)":"Entity (See text below for supported entities)",selector:{entity:t}}]}   
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
    `}function editor_getButtonList(){return[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text",value:"name"}]}function findSuitableEntities(e,t="light",n=2){const o=[];return e&&e.states?(Object.keys(e.states).forEach((r=>{if(!(o.length>=n)&&r.startsWith(t+".")){let t=!1;"brightness"in e.states[r].attributes&&(t=!0),o.push({entity:r,supportsBrightness:t})}})),o):o}function updateUIForVerticalStack(e,t){if(!e.shadowRoot)return;const n=e.shadowRoot.querySelector("#vertical-stack-alert-container");n&&(n.style.display=t?"block":"none");const o=e.shadowRoot.querySelector(".icon-button ha-icon");o&&(o.icon=t?"mdi:content-save":"mdi:plus");const r=e.shadowRoot.querySelector("#button-text");r&&(r.textContent=t?"Update Hash":"Create Pop-up");const a=e.shadowRoot.querySelector("#include-example");a&&(a.disabled=t);const i=e.shadowRoot.querySelector(".mdc-form-field .mdc-label");i&&(i.textContent="Include example configuration"+(t?" (disabled because pop-up is already in a vertical stack)":""))}function createPopUpConfig(e,t){try{const t=!window.popUpError,n=e.shadowRoot.querySelector("#include-example")?.checked||!1;let o="#pop-up-name";const r=e.shadowRoot.querySelector("#hash-input");if(r&&r.value&&(o=r.value),t)return e._config.hash=o,(0,utils.rC)(e,"config-changed",{config:e._config}),void console.info("Pop-up already in a vertical stack. Hash updated. Note that manually creating a vertical stack is no longer required.");if(n){const t=findSuitableEntities(e.hass);e._config={type:"vertical-stack",cards:[{type:"custom:bubble-card",card_type:"pop-up",name:"Living room",icon:"mdi:sofa-outline",hash:o},{type:"custom:bubble-card",card_type:"separator",name:"Lights (example)",icon:"mdi:lightbulb-outline"},{type:"horizontal-stack",cards:t.length>0?t.map((e=>({type:"custom:bubble-card",card_type:"button",button_type:e.supportsBrightness?"slider":"switch",entity:e.entity,show_state:!0}))):[{type:"custom:bubble-card",card_type:"button",button_type:"name",name:"Floor lamp",icon:"mdi:floor-lamp-outline"}]}]}}else e._config={type:"vertical-stack",cards:[{type:"custom:bubble-card",card_type:"pop-up",hash:o}]};(0,utils.rC)(e,"config-changed",{config:e._config})}catch(n){console.error("Error creating pop-up:",n),e._config=t,e._config.hash=e.shadowRoot.querySelector("#hash-input")?.value||"#pop-up-name",(0,utils.rC)(e,"config-changed",{config:e._config})}}function renderPopUpEditor(e){const t=e._config?.trigger??[];if(e._config.button_action,2===Object.keys(e._config).length&&"pop-up"===e._config.card_type){const t={...e._config};let n=!1;return setTimeout((()=>{n=!window.popUpError,updateUIForVerticalStack(e,n)}),0),e.createPopUpConfig=()=>createPopUpConfig(e,t),x`
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
    `}function renderSelectEditor(e){const t=e._config.entity,n=(t?.startsWith("input_select")||t?.startsWith("select")||e._config.select_attribute,e.hass.states[t]?.attributes),o=e._selectable_attributes.some((e=>n?.[e])),r=Object.keys(e.hass.states[t]?.attributes||{}).map((n=>{let o=e.hass.states[t];return{label:e.hass.formatEntityAttributeName(o,n),value:n}})).filter((t=>e._selectable_attributes.includes(t.value)));return x`
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
                        .items="${r}"
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
    `}const computeLabel=e=>e.title||e.label;class HaCalendarEntitySelector extends lit_element_r{getSchema(e){const t=setupTranslation(this.hass);return[{type:"expandable",name:"",title:e?this.hass.states[e].attributes.friendly_name||e:t("editor.calendar.new_calendar"),schema:[{name:"entity",title:t("editor.calendar.entity"),selector:{entity:{domain:["calendar"]}}},{name:"color",title:t("editor.calendar.color"),selector:{ui_color:{}}}]}]}static properties={hass:{},value:{type:Array},label:{}};constructor(){super(),this.value=[]}render(){const e=setupTranslation(this.hass),t=e=>()=>{const t=[...this.value||[]];t.splice(e,1),this.valueChanged({detail:{value:t}})},n=this.value??[];return x`
      <ha-expansion-panel outlined style="--expansion-panel-summary-padding: 0 8px;">
        <h4 slot="header" style="display: flex; align-items: center; margin: 10px 0;">
          <ha-icon icon="mdi:calendar" style="margin: 8px;"></ha-icon>
          &nbsp;${e("editor.calendar.list_of_calendars")}
        </h4>
        <div class="content"> 
          ${n.map(((n,o)=>x`
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
            `))}
          <ha-button @click=${()=>{const e=[...this.value||[]];e.push({entity:"",color:""}),this.valueChanged({detail:{value:e}})}} style="margin: 12px 4px 14px 4px;">
            <ha-icon icon="mdi:calendar-plus"></ha-icon>&nbsp;
            ${e("editor.calendar.new_calendar")}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}valueChanged(e){const t=e.detail.value.map((e=>{const t=e.entity?intToRGB(hashCode(e.entity)):"";return{entity:e.entity,color:e.color||t}}));(0,utils.rC)(this,"value-changed",{value:t},void 0)}}function renderCalendarEditor(e){const t=setupTranslation(e.hass);return x`
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
                      .schema=${[{name:"limit",label:t("editor.calendar.limit"),title:t("editor.calendar.limit"),selector:{number:{step:1,min:1}}},{name:"show_end",label:t("editor.calendar.show_end"),title:t("editor.calendar.show_end"),selector:{boolean:{}}},{name:"show_progress",label:t("editor.calendar.show_progress"),title:t("editor.calendar.show_progress"),selector:{boolean:{}}},{name:"scrolling_effect",label:t("editor.calendar.text_scrolling"),title:t("editor.calendar.text_scrolling"),selector:{boolean:{}},default:!0}]}   
                      .computeLabel=${e._computeLabelCallback}
                      @value-changed=${e._valueChanged}
                    ></ha-form>
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
    `}function makeSubButtonPanel(e){const t=e._config?.sub_button?.map(((t,n)=>{if(!t)return;const o="sub_button."+n+".",r=t.entity??e._config.entity,a=r?.startsWith("input_select")||r?.startsWith("select")||t.select_attribute,i=e.hass.states[r]?.attributes,s=e._selectable_attributes.some((e=>i?.[e])),l=Object.keys(e.hass.states[r]?.attributes||{}).map((t=>{let n=e.hass.states[r];return{label:e.hass.formatEntityAttributeName(n,t),value:t}})).filter((t=>e._selectable_attributes.includes(t.value))),c=t.visibility??[];return x`
            <ha-expansion-panel outlined>
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
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                            <ha-icon icon="mdi:cog"></ha-icon>
                            Button settings
                        </h4>
                        <div class="content"> 
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
                            ${e.makeShowState(t,o,"sub_button",n)}
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined style="${a?"opacity: 0.5; pointer-events: none;":""}">
                        <h4 slot="header">
                            <ha-icon icon="mdi:gesture-tap"></ha-icon>
                            Tap action on button
                        </h4>
                        <div class="content">
                            ${e.makeActionPanel("Tap action",t,"more-info","sub_button",n)}
                            ${e.makeActionPanel("Double tap action",t,"none","sub_button",n)}
                            ${e.makeActionPanel("Hold action",t,"none","sub_button",n)}
                        </div>
                    </ha-expansion-panel>
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                            <ha-icon icon="mdi:eye"></ha-icon>
                        Visibility
                        </h4>
                        <div class="content">
                            <ha-card-conditions-editor
                                .hass=${e.hass}
                                .conditions=${c}
                                @value-changed=${t=>e._conditionChanged(t,n,"sub_button")}
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
    `}customElements.define("ha-selector-calendar_entity",HaCalendarEntitySelector);var modules_utils=__webpack_require__(395),parser=__webpack_require__(571),cache=__webpack_require__(404),js_yaml=__webpack_require__(382);async function installOrUpdateModule(e,t){try{let n="";if(t.yamlContent&&""!==t.yamlContent.trim()?n=t.yamlContent:t.description&&""!==t.description.trim()&&(n=t.description),!n)throw new Error("No YAML content found for this module");const o=(0,parser.oV)(n)||t.id,r=(0,parser.tF)(n,o,{title:t.name,defaultCreator:t.creator});let a=n;try{const e=js_yaml.Ay.load(n);if(e&&"object"==typeof e){const r=Object.keys(e);if(1===r.length){const n=r[0],i=e[n];if(i&&"object"==typeof i)if(i[o]){t.moduleLink&&"object"==typeof i[o]&&(i[o].link=t.moduleLink);const e={};e[o]=i[o],a=js_yaml.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})}else if(n===o&&Object.keys(i).some((e=>"object"==typeof i[e]&&i[e].name&&i[e].code))){const e={};Object.entries(i).forEach((([t,n])=>{"object"==typeof n&&"unsupported"!==t&&"editor"!==t&&n.name||(e[t]=n)})),t.moduleLink&&(e.link=t.moduleLink),e.code&&"string"==typeof e.code&&(e.code=e.code.replace(/\n/g,"\n      "));const n={};n[o]=e,a=js_yaml.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}else if(n===o)t.moduleLink&&!e[o].link&&(e[o].link=t.moduleLink),a=js_yaml.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1});else{t.moduleLink&&(i.link=t.moduleLink);const e={};e[o]=i,a=js_yaml.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}}else{t.moduleLink&&(e.link=t.moduleLink);const n={};n[o]=e,a=js_yaml.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}a=a.replace(/code: \|/g,"code: |").replace(/description: \|/g,"description: |").replace(/(\|\n)(\s+)/g,((e,t,n)=>t+"      "));try{const e=js_yaml.Ay.load(a);e&&e[o]||console.warn("Warning: YAML formatting may have issues")}catch(e){console.warn("Error validating formatted YAML:",e),a=n}}}catch(e){console.warn("Error processing YAML structure:",e)}const i={id:o,yaml:a};try{const e=JSON.parse(localStorage.getItem("bubble-card-modules")||"{}");e[o]=i,localStorage.setItem("bubble-card-modules",JSON.stringify(e))}catch(e){console.warn("localStorage storage error:",e)}style_processor.Ki.set(o,r),document.dispatchEvent(new CustomEvent("yaml-modules-updated"));try{const n=e.hass.auth.data.access_token;if(!n)throw new Error("Authentication token not available");const s=window.location.origin,l="sensor.bubble_card_modules";if(!(e.hass&&e.hass.states&&e.hass.states[l]))return(0,cache.q)(e,"Persistent storage not configured - module saved locally only","warning"),{success:!0,storage:"local_only",reason:"missing_entity",message:"The persistent storage entity is not configured. Please check the setup instructions in the Module tab."};let c={};try{const e=await fetch(`${s}/api/states/${l}`,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"}});if(e.ok){const t=await e.json();if(t.attributes&&t.attributes.modules)c=t.attributes.modules;else if(t.attributes&&t.attributes.module_data){const e=t.attributes.module_data;e&&e.id&&(c[e.id]=e)}}}catch(e){console.warn("Unable to load existing modules:",e)}c[o]=i;try{const e=js_yaml.Ay.load(a);if(e&&e[o]){const n=e[o];c[o]={id:o,...n,name:r.name||n.name,version:r.version||n.version,description:r.description||n.description,creator:r.creator||n.creator||r.author,link:t.moduleLink||r.link||n.link}}else c[o]={id:o,...r}}catch(e){console.warn("Error parsing module YAML for storage:",e),c[o]={id:o,name:r.name,version:r.version,description:r.description,creator:r.creator}}try{await fetch(`${s}/api/events/bubble_card_update_modules`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({modules:c,last_updated:(new Date).toISOString()})})}catch(e){console.warn("Unable to send event, trying to update state directly:",e);const t=await fetch(`${s}/api/states/${l}`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({state:"saved",attributes:{friendly_name:"Bubble Card Modules",modules:c,last_updated:(new Date).toISOString()}})});if(!t.ok)throw new Error(`Update error (${t.status}): ${t.statusText}`)}return(0,cache.q)(e,"Module installed successfully"),(0,utils.rC)(e,"config-changed",{config:e._config}),e.requestUpdate(),{success:!0}}catch(t){return console.error("REST API not available or error:",t),(0,cache.q)(e,"Module saved locally only","warning"),{success:!0,storage:"local_only"}}}catch(t){throw console.error("Installation error:",t),(0,cache.q)(e,"Installation error: "+t.message,"error"),t}}async function installManualModule(e,t,n){try{if(!t||""===t.trim())throw new Error("No YAML content provided");if(n)try{const{extractYamlFromMarkdown:e}=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,571)),o=e("```yaml\n"+t+"\n```",n);o&&o!==t&&(t=o)}catch(e){console.warn("Could not add link directly to YAML:",e)}const o={yamlContent:t,description:t,moduleLink:n};return await installOrUpdateModule(e,o)}catch(t){throw console.error("Manual module installation error:",t),(0,cache.q)(e,"Installation error: "+t.message,"error"),t}}function makeModuleStore(e){const t=e.hass&&e.hass.states&&e.hass.states["sensor.bubble_card_modules"];if(void 0===e._storeShowOnlyCompatible&&(e._storeShowOnlyCompatible=!0),void 0===e._rankingInfoDismissed)try{e._rankingInfoDismissed="true"===localStorage.getItem("bubble-card-ranking-info-dismissed")}catch(t){e._rankingInfoDismissed=!1}if(e._dismissRankingInfo=()=>{e._rankingInfoDismissed=!0;try{localStorage.setItem("bubble-card-ranking-info-dismissed","true")}catch(e){console.warn("Failed to save ranking info dismiss state to localStorage",e)}e.requestUpdate()},!t)return x`
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
    `:([...new Set(e._storeModules.filter((e=>e.type)).map((e=>e.type.toLowerCase())))].sort(),void 0===e._zoomedImage&&(e._zoomedImage=null),e._toggleImageZoom=t=>{e._zoomedImage===t?e._zoomedImage=null:e._zoomedImage=t,e.requestUpdate()},x`
    <div class="module-store">
      <div class="store-header">
        <div class="store-header-top">
          <div class="store-header-title">
            <ha-icon icon="mdi:puzzle-plus-outline"></ha-icon>
            <span>Module Store</span>
          </div>
          <div 
            class="store-refresh-button" 
            @click=${()=>_fetchModuleStore(e)}
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
                  padding: 0 8px;"
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
        ${_getFilteredStoreModules(e).map((t=>{const n=_isModuleInstalled(t.id),o=_isModuleInstalledViaYaml(t.id),r=_hasModuleUpdate(t.id,t.version),a=e._config.card_type??"";let i=!0;return i=t.supportedCards&&Array.isArray(t.supportedCards)&&t.supportedCards.length>0?t.supportedCards.includes(a):!t.unsupportedCards||!t.unsupportedCards.includes(a),x`
            <div class="store-module-card">
              <div class="store-module-header ${i?"":"warning"}">
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
                    ${i?"":x`<span class="bubble-badge incompatible-badge">Incompatible</span>`}
                    ${r?x`<span class="bubble-badge update-badge">Update available</span>`:""}
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
                      ${r?x`
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
          `}))}
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
  `)}function _getFilteredStoreModules(e){if(!e._storeModules)return[];let t=[...e._storeModules];if(e._storeSearchQuery){const n=e._storeSearchQuery.toLowerCase();t=t.filter((e=>e.name&&e.name.toLowerCase().includes(n)||e.description&&e.description.toLowerCase().includes(n)||e.creator&&e.creator.toLowerCase().includes(n)||e.type&&e.type.toLowerCase().includes(n)))}if(e._storeShowOnlyCompatible){const n=e._config.card_type??"";t=t.filter((e=>e.supportedCards&&Array.isArray(e.supportedCards)?e.supportedCards.includes(n):!e.unsupportedCards||!e.unsupportedCards.includes(n)))}return e._storeSelectedType&&"all"!==e._storeSelectedType&&(t=t.filter((t=>t.type&&t.type.toLowerCase()===e._storeSelectedType.toLowerCase()))),t=sortModulesByRelevance(t),t}function sortModulesByRelevance(e){return e&&Array.isArray(e)?e.map((e=>{let t=0,n=!1,o=!1;if(e.comments&&(t+=Math.min(e.comments,8),n=!0),e.reactions?.total_count&&(t+=5*e.reactions.total_count,n=!0),e.reactions?.heart&&(t+=10*e.reactions.total_count,n=!0),e.createdAt){const n=new Date(e.createdAt),r=(new Date-n)/864e5;r<=7?(t+=30,o=!0):r<=30?(t+=15,o=!0):r<=90&&(t+=5)}if(e.updated_at){const n=new Date(e.updated_at),r=(new Date-n)/864e5;r<=7?(t+=25,o=!0):r<=30?(t+=15,o=!0):r<=90&&(t+=8)}return n||o||(t-=30),n&&o&&(t+=20),"Clooos"===e.creator&&(t+=40),_isNewModule(e)&&(t+=150),{...e,relevanceScore:t}})).sort(((e,t)=>t.relevanceScore-e.relevanceScore)):[]}function _isNewModule(e){if(!e.createdAt)return!1;const t=new Date(e.createdAt);return(new Date-t)/864e5<=14}function _isModuleInstalled(e){return style_processor.Ki.has(e)}function _isModuleInstalledViaYaml(e){if(!_isModuleInstalled(e))return!1;if(style_processor.sq.has(e))return"yaml"===style_processor.sq.get(e);try{return!JSON.parse(localStorage.getItem("bubble-card-modules")||"{}")[e]}catch(e){return console.warn("Error checking module installation source:",e),!1}}function checkModuleUpdates(){const e=Array.from(style_processor.Ki.keys()),t=[];let n=0;const o=(0,cache.getCachedModuleData)();return o&&o.modules&&o.modules.length?(e.forEach((e=>{const r=o.modules.find((t=>t.id===e));r&&_hasModuleUpdate(e,r.version)&&(n++,t.push({id:e,name:r.name||style_processor.Ki.get(e).name||e,currentVersion:style_processor.Ki.get(e).version||"0",newVersion:r.version}))})),{hasUpdates:n>0,updateCount:n,modules:t}):{hasUpdates:!1,updateCount:0,modules:[]}}function _hasModuleUpdate(e,t){if(!_isModuleInstalled(e)||!t)return!1;const n=(style_processor.Ki.get(e)||{}).version||"0";return(0,modules_utils._O)(t,n)>0}function _requiresManualInstallation(e){if(!e||!e.yamlContent)return!0;const t=e.yamlContent.trim();if(!t)return!0;try{const e=js_yaml.Ay.load(t);if(!e||"object"!=typeof e)return!0;const n=Object.keys(e);if(n.length>1){let t=0;for(const o of n){const n=e[o];n&&"object"==typeof n&&(n.name||n.code)&&t++}if(t>1)return!0}if(1===n.length){const t=e[n[0]];if(t&&"object"==typeof t){const e=Object.keys(t);let n=0;for(const o of e){const e=t[o];e&&"object"==typeof e&&(e.name||e.code)&&n++}if(n>1)return!0}}if(1===n.length){const t=e[n[0]];if(!t||"object"!=typeof t)return!0;if(!t.name||!t.code)return!0}}catch(e){return console.warn("Error checking module YAML compatibility:",e),!0}return!1}async function _fetchModuleStore(e,t=!1){if(e._isApiCallInProgress)return;let n=!1;if(!t){e._isLoadingStore=!0,e._storeError=null,e._loadingProgress=5,e._loadingStatus="Checking API limits",e.requestUpdate();let t=setInterval((()=>{if(!e._isLoadingStore)return void clearInterval(t);const n=e._loadingProgress||0;let o=0;n<40?o=2.5*Math.random():n<60?o=1.5*Math.random():n<75?o=.8*Math.random():n<90&&(o=.3*Math.random()),n<90&&(e._loadingProgress=n+o,e.requestUpdate())}),200);e._progressInterval=t}try{const o=await fetch("https://api.github.com/rate_limit",{method:"GET",headers:{Accept:"application/vnd.github.v3+json","X-GitHub-Api-Version":"2022-11-28"}});if(t||(e._loadingStatus="Analyzing API response",e._loadingProgress=Math.min(e._loadingProgress+5,30),e.requestUpdate()),o.ok){(await o.json()).resources.core.remaining<=1&&(console.warn("⚠️ API limit reached, using cache instead"),n=!0)}else n=!0,console.warn("⚠️ Could not check API rate limit, using cooldown logic")}catch(e){console.error("Error checking rate limit:",e),n=!0}if(t||(e._loadingStatus="Processing API data",e._loadingProgress=Math.min(e._loadingProgress+5,40),e.requestUpdate()),n){const n=localStorage.getItem("bubble-card-api-failure-timestamp");if(n){const o=parseInt(n),r=18e5;if(Date.now()-o<r){const{getCachedModuleData:n}=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,404)),o=n();return o&&!e._storeModules&&(e._storeModules=o.modules,e._isLoadingStore=!1,e.requestUpdate()),void(t||(e._loadingStatus="Loading from cache",e._loadingProgress=60,e.requestUpdate()))}localStorage.removeItem("bubble-card-api-failure-timestamp")}}else if(n){const{getCachedModuleData:n}=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,404)),o=n();o&&!e._storeModules&&(e._storeModules=o.modules,e._isLoadingStore=!1,e.requestUpdate()),t||(e._loadingStatus="Loading from cache",e._loadingProgress=60,e.requestUpdate())}e._isApiCallInProgress=!0;try{let n=[],o=1,r=!0;for(t||(e._loadingStatus="Downloading module data",e._loadingProgress=50,e.requestUpdate());r;){const a=await fetch(`https://api.github.com/repos/Clooos/Bubble-Card/discussions?per_page=100&page=${o}`,{method:"GET",headers:{Accept:"application/vnd.github.v3+json","X-GitHub-Api-Version":"2022-11-28"}});if(t||(e._loadingStatus=`Processing page ${o}`,e._loadingProgress=Math.min(50+5*o,80),e.requestUpdate()),!a.ok)throw console.error("❌ REST API Error:",a.status,a.statusText),localStorage.setItem("bubble-card-api-failure-timestamp",Date.now().toString()),new Error(`REST API Error: ${a.status}`);const i=await a.json();0===i.length?r=!1:(n=[...n,...i],o++),a.headers.get("x-ratelimit-remaining")<=5&&(console.warn("⚠️ API limit approaching, stopping pagination"),r=!1)}t||(e._loadingStatus="Filtering modules",e._loadingProgress=85,e.requestUpdate());const a=n.filter((e=>{const t=e.category?.name;return"Share your Modules"===t})),i=(0,parser.N5)(a);t||(e._loadingStatus="Saving to cache",e._loadingProgress=95,e.requestUpdate());const{saveCachedModuleData:s}=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,404));s(i),t||(await new Promise((e=>setTimeout(e,300))),e._loadingProgress=100,e._loadingStatus="Complete",e.requestUpdate()),t&&e._storeModules||(e._storeModules=i,e._isLoadingStore=!1,e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null),e.requestUpdate())}catch(n){if(console.error("Error loading modules:",n),!t){e._loadingStatus="Error - Loading from cache",e._loadingProgress=85,e.requestUpdate();const{getCachedModuleData:t}=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,404)),o=t();o?(await new Promise((e=>setTimeout(e,300))),e._storeModules=o.modules,e._isLoadingStore=!1,e._loadingProgress=100,e._loadingStatus="Loaded from cache",e.requestUpdate()):(e._storeError=n.message,e._isLoadingStore=!1,e.requestUpdate()),e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null)}}finally{e._isApiCallInProgress=!1,t||e.requestUpdate()}}function generateYamlExport(e){try{const t={},n={...e};return delete n.id,n.editor_raw&&delete n.editor_raw,n.supported&&n.unsupported&&delete n.unsupported,t[e.id]=n,js_yaml.Ay.dump(t,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})}catch(e){return console.error("Error generating YAML export:",e),"# Error generating YAML export"}}function generateGitHubExport(e){try{const t={...e};t.editor_raw&&delete t.editor_raw,t.supported&&t.unsupported&&delete t.unsupported;const{id:n,name:o,version:r,creator:a,description:i,code:s,editor:l,supported:c=[]}=t;let d=`# ${o}\n\n`;if(d+=`**Version:** ${r}  \n`,d+=`**Creator:** ${a}\n\n`,c&&c.length>0&&(d+="> [!IMPORTANT] \n",d+="> **Supported cards:**\n",c.forEach((e=>{d+=`>  - ${e.replace(/-/g," ").replace(/\b\w/g,(e=>e.toUpperCase()))}\n`})),d+="\n"),i&&(d+=`${i}\n`,d+="Configure this module via the editor or in YAML, for example:\n\n"),d+="```yaml\n",d+=`${n}: \n`,l&&Array.isArray(l)&&l.length>0){const e=l[0];e&&e.name&&(d+=`    ${e.name}: YOUR_VALUE\n`)}else d+="    # Your configuration here\n";if(d+="```\n\n",d+="---\n\n",d+="<details>\n\n",d+="<summary><b>🧩 Get this Module</b></summary>\n\n",d+="<br>\n\n",d+="> To use this module, simply copy and paste the following configuration into your `/www/bubble/bubble-modules.yaml` file.\n\n",d+="```yaml\n",d+=`${n}:\n`,d+=`    name: "${o}"\n`,d+=`    version: "${r}"\n`,d+=`    creator: "${a}"\n`,d+='    link: "https://github.com/Clooos/Bubble-Card/discussions/XXXX"\n\n',c&&c.length>0&&(d+="    supported:\n",c.forEach((e=>{d+=`        - ${e}\n`})),d+="\n"),d+="    description: |\n",i){const e=i.split("\n").map((e=>`        ${e}`)).join("\n");if(d+=`${e}\n`,d+="        <br><br>\n",d+="        <code-block><pre>\n",d+=`        ${n}: \n`,l&&Array.isArray(l)&&l.length>0){const e=l[0];e&&e.name?d+=`            ${e.name}: YOUR_VALUE\n`:d+="            # Your configuration here\n"}else d+="            # Your configuration here\n";d+="        </pre></code-block>\n\n"}if(d+="    code: |\n",s){const e=s.split("\n").map((e=>`        ${e}`)).join("\n");d+=`${e}\n\n`}else d+="        # Your code here\n\n";if(l){const e="object"==typeof l?js_yaml.Ay.dump(l,{indent:2}):l;d+="    editor:\n";const t=e.split("\n").map((e=>`      ${e}`)).join("\n");d+=`${t}`,d+="\n```"}else d+="```";return d+="\n\n</details>\n\n",d+="---\n\n",d+="### Screenshot:\n\n",d+="Important: The first screenshot here will be used on the Module Store, so please provide one.\n",d}catch(e){return console.error("Error generating GitHub export:",e),"# Error generating GitHub export format"}}function copyToClipboard(e,t,n,o){try{const r=document.createElement("textarea");r.value=t,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),(0,cache.q)(e,n,"success"),"function"==typeof o&&o(t)}catch(n){console.error("Fallback clipboard copy failed:",n),(0,cache.q)(e,"Could not copy to clipboard. Please copy manually from the preview below.","error"),"function"==typeof o&&o(t)}}function downloadModuleAsYaml(e,t,n){try{const o=generateYamlExport(t),r=new Blob([o],{type:"text/yaml"}),a=URL.createObjectURL(r),i=document.createElement("a");return i.href=a,i.download=`${t.id}.yaml`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(a),(0,cache.q)(e,"Module downloaded as YAML file!","success"),"function"==typeof n&&n(o),!0}catch(t){return console.error("Error downloading module:",t),(0,cache.q)(e,"Error downloading module: "+t.message,"error"),!1}}function updateModuleInConfig(e,t,n=null){e._config&&e._config.modules&&(n&&n!==t&&(e._config.modules=e._config.modules.filter((e=>e!==n))),e._config.modules.includes(t)||e._config.modules.push(t),e._previousModuleId=t)}function refreshStyles(e){e.lastEvaluatedStyles="",e.stylesYAML=null,e.handleCustomStyles&&e.card&&e.handleCustomStyles(e,e.card),e.requestUpdate()}function broadcastModuleUpdate(e,t){window.dispatchEvent(new CustomEvent("bubble-card-module-updated",{detail:{moduleId:e,moduleData:t}}))}function setHAEditorButtonsDisabled(e){try{const t=document.querySelector("body > home-assistant")?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot?.querySelector("ha-dialog > div:nth-child(4)");t&&(t.style.display=e?"none":"")}catch(e){}}function renderModuleEditorForm(e){if(!e._editingModule)return setHAEditorButtonsDisabled(!1),x``;setHAEditorButtonsDisabled(!0);const t=!!_isModuleInstalledViaYaml&&_isModuleInstalledViaYaml(e._editingModule.id),n=t=>{const n=e.shadowRoot?.querySelector("#export-preview-content");if(n){n.textContent=t;const o=e.shadowRoot?.querySelector(".export-preview ha-expansion-panel");o&&!o.expanded&&(o.expanded=!0);const r=e.shadowRoot?.querySelector(".export-preview");r&&(r.style.animation="none",setTimeout((()=>{r.style.animation="highlight 1s ease"}),10))}};return x`
    <div class="module-editor-form">
        <div class="form-content">
          <h3>
            <ha-icon style="margin: 8px;" icon="${e._showNewModuleForm?"mdi:puzzle-plus-outline":"mdi:puzzle-edit-outline"}"></ha-icon>
            ${e._showNewModuleForm?"Create new Module":"Edit Module"}
          </h3>
          
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
          
          <ha-textarea
            style="height: 120px;"
            label="Description (supports HTML/inline CSS)"
            .value=${e._editingModule.description||""}
            @input=${t=>{e._editingModule.description=t.target.value}}
            ?disabled=${t}
          ></ha-textarea>
          
          <ha-textfield
            label="Creator"
            .value=${e._editingModule.creator||""}
            @input=${t=>{e._editingModule.creator=t.target.value}}
            ?disabled=${t}
          ></ha-textfield>
          
          <ha-expansion-panel .header=${"Supported cards"}>
            <div>
              ${renderSupportedCardCheckboxes(e,t)}
            </div>
          </ha-expansion-panel>
          
          <h4>
            <ha-icon icon="mdi:code-json"></ha-icon>
            Code (CSS/JS template)
          </h4>
          <div class="css-editor-container">
            <ha-code-editor
              class="${t?"disabled":""}"
              mode="yaml"
              .value=${e._editingModule.code||""}
              @value-changed=${n=>(n=>{if(!e._editingModule||!e._config||t)return;const o=e._editingModule.id;if(!e._originalModuleState){const t=style_processor.Ki.get(o);t&&(e._originalModuleState=JSON.parse(JSON.stringify(t)))}e._editingModule.code=n,e.stylesYAML&&(e.stylesYAML=null);const r={...style_processor.Ki.get(o)||{},code:n,id:o};style_processor.Ki.set(o,r);const a=e.shadowRoot?.querySelector(".css-editor-container");a&&(a.classList.add("applying-styles"),setTimeout((()=>{a.classList.remove("applying-styles")}),300)),updateModuleInConfig(e,o,e._previousModuleId),refreshStyles(e),broadcastModuleUpdate(o,r)})(n.detail.value)}
              class="code-editor"
            ></ha-code-editor>
          </div>
          <span class="helper-text">
            More information and examples about the CSS and JS template possibilities can be found in the <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#styling" target="_blank">Styling and Templates documentation</a>. Tip: You can enlarge the editor by clicking on the panel title (Bubble Card configuration).
          </span>

          ${e.createErrorConsole(e)}
          
          <h4>
            <ha-icon icon="mdi:form-select"></ha-icon>
            Optional: Editor schema (YAML)
          </h4>
          <div class="editor-schema-container">
            <ha-code-editor
              class="${t?"disabled":""}"
              mode="yaml"
              .value=${e._editingModule.editor_raw||("object"==typeof e._editingModule.editor?js_yaml.Ay.dump(e._editingModule.editor):e._editingModule.editor||"")}
              @value-changed=${n=>{e._editingModule.editor_raw=n.detail.value,clearTimeout(e._editorSchemaDebounce),e._editorSchemaDebounce=setTimeout((()=>{try{const o=js_yaml.Ay.load(n.detail.value);null!==o&&"object"==typeof o&&((n=>{if(e._editingModule&&e._config&&!t)try{const t=e._editingModule.id;if(!e._originalModuleState){const n=style_processor.Ki.get(t);n&&(e._originalModuleState=JSON.parse(JSON.stringify(n)))}const o=e._editingModule.editor_raw;e._editingModule.editor=n,o&&(e._editingModule.editor_raw=o);const r=style_processor.Ki.get(t);if(r){const o={...r,editor:n};style_processor.Ki.set(t,o),e._schemaCache&&delete e._schemaCache[t],e._processedSchemas&&delete e._processedSchemas[t],e.requestUpdate(),setTimeout((()=>{(0,utils.rC)(e,"editor-refresh",{}),e.requestUpdate()}),50)}}catch(e){console.warn("Error applying live editor schema:",e)}})(o),e._yamlErrorMessage&&(e._yamlErrorMessage=null,e.requestUpdate()))}catch(t){console.warn("Invalid YAML for editor schema:",t),e._editingModule.editor=e._editingModule.editor_raw||n.detail.value,e._yamlErrorMessage=t.message,e.requestUpdate()}}),100)}}
              class="code-editor"
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

          <ha-expansion-panel>
            <h4 slot="header">
                <ha-icon
                icon="mdi:export"
                ></ha-icon>
                Export Module
            </h4>
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
                        <strong>Edit the description</strong> (if needed), <strong>the example</strong> (for YAML users), and remember to <strong>include at least one screenshot</strong> for the Module Store.</strong></p>
                        <p><strong>Your Module becomes available right after that</strong> (after a Store refresh), so double-check that everything is correctly written and the Module is working as expected. You can of course edit/update the Module after it is shared.</p>
                      </div>
                    </div>
                </div>
            </div>
          </ha-expansion-panel>
          
          <div class="module-editor-buttons-container">
            <button class="icon-button" style="flex: 1;" @click=${()=>{if(!e._showNewModuleForm&&e._editingModule){const t=e._editingModule.id;resetModuleChanges(e,t)}else if(e._showNewModuleForm&&e._editingModule){const t=e._editingModule.id;e._config&&e._config.modules&&t&&(e._config.modules=e._config.modules.filter((e=>e!==t)),(0,utils.rC)(e,"config-changed",{config:e._config}),style_processor.Ki.has(t)&&style_processor.Ki.delete(t),refreshStyles(e))}e._editingModule=null,e._showNewModuleForm=!1,e._previousModuleId=null,setHAEditorButtonsDisabled(!1),e.requestUpdate(),setTimeout((()=>(0,modules_utils.XY)(e)),0)}}>
              <ha-icon icon="mdi:close"></ha-icon>
              Cancel
            </button>
            
            <button class="icon-button ${t?"disabled":""}" style="flex: 1;" @click=${()=>{saveModule(e,e._editingModule),setTimeout((()=>(0,modules_utils.XY)(e)),0)}}>
              <ha-icon icon="mdi:content-save"></ha-icon>
              Save Module
            </button>
          </div>
        </div>
    </div>
  `}function renderSupportedCardCheckboxes(e,t=!1){const n=[{id:"button",name:"Button"},{id:"calendar",name:"Calendar"},{id:"climate",name:"Climate"},{id:"cover",name:"Cover"},{id:"horizontal-buttons-stack",name:"Horizontal buttons stack"},{id:"media-player",name:"Media player"},{id:"pop-up",name:"Pop-up"},{id:"select",name:"Select"},{id:"separator",name:"Separator"}];return e._editingModule.supported||(e._editingModule.supported=[],e._editingModule.unsupported&&e._editingModule.unsupported.length>0?e._editingModule.supported=n.map((e=>e.id)).filter((t=>!e._editingModule.unsupported.includes(t))):e._editingModule.supported=n.map((e=>e.id))),x`
    <div class="checkbox-grid">
      ${n.map((n=>x`
        <ha-formfield label="${n.name}">
          <ha-checkbox
            .checked=${e._editingModule.supported.includes(n.id)}
            @change=${o=>{t||(o.target.checked?e._editingModule.supported.includes(n.id)||e._editingModule.supported.push(n.id):e._editingModule.supported=e._editingModule.supported.filter((e=>e!==n.id)),e.requestUpdate())}}
            ?disabled=${t}
          ></ha-checkbox>
        </ha-formfield>
      `))}
    </div>
    <div class="helper-text">
      Select the card types that this module supports.
    </div>
  `}async function saveModule(e,t){try{const n=t.id,o=e._config.modules&&e._config.modules.includes(n);if(t.editor_raw&&"string"==typeof t.editor_raw)try{const e=js_yaml.Ay.load(t.editor_raw);null!==e&&"object"==typeof e&&(t.editor=e)}catch(e){console.warn("Couldn't parse editor schema during save, using fallback:",e)}t.editor_raw&&delete t.editor_raw,t.supported&&t.unsupported&&delete t.unsupported;const r="sensor.bubble_card_modules",a=e.hass&&e.hass.states&&e.hass.states[r],i={},s={...t};delete s.id,i[t.id]=s;const l=js_yaml.Ay.dump(i,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}),c={id:t.id,yaml:l};try{let e={};const n=localStorage.getItem("bubble-card-modules");if(n&&""!==n.trim())try{e=JSON.parse(n)}catch(e){console.warn("Error parsing stored modules, resetting storage:",e)}e&&"object"==typeof e||(e={}),e[t.id]=c,localStorage.setItem("bubble-card-modules",JSON.stringify(e)),console.info("Module saved locally in localStorage")}catch(e){console.warn("localStorage storage error:",e)}const d=(0,parser.tF)(l,t.id,{title:t.name,defaultCreator:t.creator});document.dispatchEvent(new CustomEvent("yaml-modules-updated")),style_processor.Ki.delete(t.id),style_processor.Ki.set(t.id,d),a&&await saveModuleToHomeAssistant(e,r,t),broadcastModuleUpdate(n,d),e.stylesYAML=null,o&&refreshStyles(e),e._editingModule=null,e._showNewModuleForm=!1,forceUIRefresh(e),setHAEditorButtonsDisabled(!1)}catch(e){console.error("Error saving module:",e)}}async function saveModuleToHomeAssistant(e,t,n){try{const o=e.hass.auth.data.access_token;if(!o)throw new Error("Authentication token not available");const r=window.location.origin,a=await fetch(`${r}/api/states/${t}`,{headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"}});if(a.ok){const t=await a.json();let o={};if(t.attributes&&t.attributes.modules)try{o="string"==typeof t.attributes.modules?JSON.parse(t.attributes.modules):t.attributes.modules}catch(e){console.warn("Error parsing modules from Home Assistant:",e)}o&&"object"==typeof o||(o={}),o[n.id]={id:n.id,name:n.name,version:n.version,creator:n.creator,description:n.description,code:n.code,editor:n.editor,supported:n.supported||[],...n.supported?{}:{unsupported:n.unsupported||[]}},e.hass.callWS({type:"fire_event",event_type:"bubble_card_update_modules",event_data:{modules:o,last_updated:(new Date).toISOString()}}).catch((e=>{console.error("Error firing event:",e)}))}}catch(e){console.error("Error saving module to Home Assistant:",e)}}function forceUIRefresh(e){e._processedSchemas&&(e._processedSchemas={}),e._selectedModuleTab=0,"function"==typeof e._getProcessedSchema&&(e._schemaCache?Object.keys(e._schemaCache).forEach((t=>{delete e._schemaCache[t]})):e._schemaCache={}),e.lastEvaluatedStyles="",e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),(0,utils.rC)(e,"editor-refresh",{}),e.requestUpdate(),setTimeout((()=>{e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),e.requestUpdate(),setTimeout((()=>{if(e._config){const t={...e._config};e.stylesYAML&&(e.stylesYAML=null,document.dispatchEvent(new CustomEvent("yaml-modules-updated"))),(0,utils.rC)(e,"config-changed",{config:t}),e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card)}e.requestUpdate()}),100)}),50)}function editModule(e,t){e._originalModuleState=null;const n=style_processor.Ki.get(t);n?(e._editingModule={id:t,...n},setHAEditorButtonsDisabled(!0),e._editingModule.code||(e._editingModule.code=""),e._editingModule.editor&&"string"==typeof e._editingModule.editor&&(e._editingModule.editorReference=e._editingModule.editor,e._editingModule.editor=[]),"object"==typeof e._editingModule.editor?e._editingModule.editor_raw=js_yaml.Ay.dump(e._editingModule.editor):e._editingModule.editor_raw=e._editingModule.editor||"",e.requestUpdate(),setTimeout((()=>(0,modules_utils.XY)(e)),0)):console.error(`Module ${t} not found`)}async function deleteModule(e,t){const n="sensor.bubble_card_modules",o=e.hass&&e.hass.states&&e.hass.states[n];if(confirm(`Are you sure you want to delete module "${t}"?`))try{let r={};const a=localStorage.getItem("bubble-card-modules");if(a&&""!==a.trim())try{r=JSON.parse(a)}catch(e){console.warn("Error parsing stored modules during deletion:",e)}r&&"object"==typeof r||(r={}),delete r[t],localStorage.setItem("bubble-card-modules",JSON.stringify(r)),style_processor.Ki.delete(t),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),o&&await updateHomeAssistantModules(e,n,t),e._config&&e._config.modules&&(e._config.modules=e._config.modules.filter((e=>e!==t)),(0,utils.rC)(e,"config-changed",{config:e._config}),refreshStyles(e)),forceUIRefresh(e),setHAEditorButtonsDisabled(!1)}catch(e){console.error("Error deleting module:",e)}}async function updateHomeAssistantModules(e,t,n){try{const o=e.hass.auth.data.access_token;if(!o)throw new Error("Authentication token not available");const r=window.location.origin,a=await fetch(`${r}/api/states/${t}`,{headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"}});if(a.ok){const t=await a.json();let o={};if(t.attributes&&t.attributes.modules)try{o="string"==typeof t.attributes.modules?JSON.parse(t.attributes.modules):t.attributes.modules}catch(e){console.warn("Error parsing modules from Home Assistant:",e)}o&&"object"==typeof o||(o={}),delete o[n],e.hass.callWS({type:"fire_event",event_type:"bubble_card_update_modules",event_data:{modules:o,last_updated:(new Date).toISOString()}}).catch((e=>{console.error("Error firing event:",e)}))}}catch(e){console.error("Error updating Home Assistant entity:",e)}}function initModuleEditor(e){if(!e._editingModuleInitialized){e._editingModule=null,e._showNewModuleForm=!1,e._showManualImportForm=!1,e._manualYamlContent="",e._exportContent=null,e._exportType=null,e._exportStep=0,e._schemaCache={},e._processedSchemas={},e._originalModuleState=null,e._previousModuleId=null,e._generateUniqueModuleId=(e="my_module")=>{if(!style_processor.Ki.has(e))return e;let t=1,n=`${e}_${t}`;for(;style_processor.Ki.has(n);)t++,n=`${e}_${t}`;return n};const t=e._generateUniqueModuleId("my_module");e._newModuleTemplate={id:t,name:"My Module",description:"",creator:"",version:"1.0",supported:["button","calendar","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator"],code:"",editor:""},e._editingModuleInitialized=!0}}function resetModuleChanges(e,t){if(!t)return;let n;e._originalModuleState?(n=e._originalModuleState,e._originalModuleState=null):n=style_processor.Ki.get(t),n&&(e.lastEvaluatedStyles="",e.stylesYAML=null,style_processor.Ki.set(t,{...n}),e._schemaCache&&delete e._schemaCache[t],e._processedSchemas&&delete e._processedSchemas[t],e.handleCustomStyles&&e.handleCustomStyles(e,e.card),broadcastModuleUpdate(t,n),setTimeout((()=>{if(e._config){const t={...e._config};(0,utils.rC)(e,"config-changed",{config:t})}e.requestUpdate()}),50))}function makeModulesEditor(e){e._modulesLoaded||(0,style_processor.wv)(e).then((()=>{e._modulesLoaded=!0,e.requestUpdate()}));const t=e.hass&&e.hass.states&&e.hass.states["sensor.bubble_card_modules"];e._config.modules||(e._config.modules=e._config.style_templates||["default"],delete e._config.style_templates,(0,utils.rC)(e,"config-changed",{config:e._config}),e.requestUpdate()),initModuleEditor(e),e._workingModuleConfigs||(e._workingModuleConfigs={}),e._modulesLoaded&&!style_processor.Ki.has("default")&&t&&installManualModule(e,"default:\n  name: Default\n  version: ''\n  description: Empty and enabled by default. Add your custom styles and/or JS templates here to apply them to all cards by pressing the <ha-icon icon=\"mdi:pencil\"></ha-icon> button above.\n  code: ''\n  ").then((()=>{console.info("Default module created automatically"),e.requestUpdate()})).catch((e=>{console.error("Error creating default module:",e)}));const n=checkModuleUpdates(),o=t=>{const n=t.target,o=n.configValue;n.checked?e._config.modules.includes(o)||(e._config.modules=[...e._config.modules,o]):e._config.modules=e._config.modules.filter((e=>e!==o)),(0,utils.rC)(e,"config-changed",{config:e._config}),e.requestUpdate()};return e._config.modules||e._config.style_templates,x`
    <ha-expansion-panel outlined>
      <h4 slot="header">
        <ha-icon icon="mdi:puzzle"></ha-icon>
        Modules
        ${n.hasUpdates&&t?x`
          <span class="bubble-badge update-badge" style="margin-left: 8px; font-size: 0.8em; vertical-align: middle;">
            <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
            ${n.updateCount} update${n.updateCount>1?"s":""} available
          </span>
        `:""}
      </h4>
      <div class="content">

        ${t?"":x`
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
        
        <ha-tabs
            .selected=${e._selectedModuleTab||0}
            @selected-changed=${t=>{e._selectedModuleTab=t.detail.value,e.requestUpdate(),requestAnimationFrame((()=>{(0,modules_utils.XY)(e,!1)}))}}>
          <paper-tab>
            <ha-icon icon="mdi:puzzle-heart-outline" style="margin-right: 8px;"></ha-icon>
            My Modules
          </paper-tab>
          <paper-tab class="${t?"":"disabled"}">
            <ha-icon icon="mdi:puzzle-plus-outline" style="margin-right: 8px;"></ha-icon>
            Module Store
          </paper-tab>
        </ha-tabs>

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
            ${Array.from(style_processor.Ki.keys()).sort(((e,t)=>"default"===e?-1:"default"===t?1:0)).map((r=>{const{name:a,description:i,formSchema:s,supportedCards:l,unsupportedCard:c,creator:d,moduleLink:u,moduleVersion:p}=(0,modules_utils.a7)(r),h=e._config.modules?.includes(r),b=e._config[r];void 0===e._workingModuleConfigs[r]&&(e._workingModuleConfigs[r]=structuredClone(b??{}));const m=e._workingModuleConfigs[r],g=e._config.card_type??"";let f=!1;f=l&&Array.isArray(l)&&l.length>0?!l.includes(g):c.includes(g);const _=s&&s.length>0?e._getProcessedSchema(r,s,b):[],y=n.modules.some((e=>e.id===r))&&t,v=y?n.modules.find((e=>e.id===r)):null;return x`
                <ha-expansion-panel outlined class="${f?"disabled":""}">
                  <h4 slot="header">
                    <ha-icon
                      icon="${h?"mdi:puzzle-check":"mdi:puzzle-outline"}"
                      style="${h?"opacity: 1; color: var(--info-color) !important;":"opacity: 0.3;"}"
                    ></ha-icon>
                    ${a}
                    ${y?x`
                      <span class="bubble-badge update-badge" style="margin-left: 8px; font-size: 0.8em; vertical-align: middle;">
                        <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                        Update: ${v.newVersion}
                      </span>
                    `:""}
                  </h4>
                  <div class="content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <ha-formfield class="apply-module-button" .label=${"Apply to this card"}>
                        <ha-switch
                          aria-label="Apply to this card"
                          .checked=${h}
                          .configValue=${r}
                          @change=${o}
                        ></ha-switch>
                      </ha-formfield>
                      
                      <!-- Module Action Buttons -->
                      <div class="module-actions">
                        ${y?x`
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
                        <button class="icon-button" @click=${()=>editModule(e,r)} title="Edit Module">
                          <ha-icon icon="mdi:pencil"></ha-icon>
                        </button>
                        ${_isModuleInstalledViaYaml&&_isModuleInstalledViaYaml(r)||"default"===r?"":x`
                            <button class="icon-button" @click=${()=>deleteModule(e,r)} title="Delete Module">
                              <ha-icon icon="mdi:delete"></ha-icon>
                            </button>
                          `}
                      </div>
                    </div>
                    <hr>

                    <!-- Form init to fix conditional selectors -->
                    <ha-form
                      style="display: none"
                      .hass=${e.hass}
                      .schema=${[{selector:{entity:{domain:["input_number"]}}}]}
                    ></ha-form>

                    ${s.length>0?x`
                        <h4 class="${h?"":"disabled"}">
                          <ha-icon icon="mdi:cog"></ha-icon>
                          Configuration
                        </h4>
                        <ha-form
                          class="${h?"":"disabled"}"
                          .hass=${e.hass}
                          .data=${m}
                          .schema=${_}
                          .computeLabel=${e._computeLabelCallback}
                          .disabled=${!h}
                          @value-changed=${t=>e._valueChangedInHaForm(t,r,s)}
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

                    ${d||u||p?x`
                        <h4 class="version module-version">
                          ${d?`Created by ${d}`:""}
                          <span class="version-number">
                            ${u?x`<a href="${u}" target="_blank" rel="noopener noreferrer">Module link</a> • `:""}
                            ${p||""}
                          </span>
                        </h4>
                        `:""}
                  </div>
                </ha-expansion-panel>
              `}))}
            ${e.createErrorConsole(e)}
          `}

          <hr>
          ${e._showNewModuleForm||e._editingModule||!t?"":x`
          <div class="module-editor-buttons-container" style="display: flex;">
            <button class="icon-button" style="flex: 1;" @click=${()=>{e._showNewModuleForm=!0,e._showManualImportForm=!1,e._generateUniqueModuleId&&(e._newModuleTemplate.id=e._generateUniqueModuleId("my_module")),e._editingModule={...e._newModuleTemplate},e._config.modules||(e._config.modules=e._config.style_templates||["default"]),e._config.modules.includes(e._editingModule.id)||(e._config.modules=[...e._config.modules,e._editingModule.id],(0,utils.rC)(e,"config-changed",{config:e._config})),e.requestUpdate(),setTimeout((()=>(0,modules_utils.XY)(e)),0)}}>
              <ha-icon icon="mdi:puzzle-plus"></ha-icon>
              Create new Module
            </button>
            
            <button class="icon-button" style="flex: 1;" @click=${()=>{e._showManualImportForm=!0,e._showNewModuleForm=!1,e._manualYamlContent="",e.requestUpdate(),setTimeout((()=>(0,modules_utils.XY)(e)),0)}}>
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
  `}const editor_styles_namespaceObject='div {\r\n  display: grid;\r\n  grid-gap: 12px;\r\n}\r\n\r\nha-combo-box[label="Card type"]::after {\r\n  content: "";\r\n  position: relative;\r\n  background-color: var(--background-color, var(--secondary-background-color));\r\n  display: block;\r\n  width: 100%;\r\n  height: 1px;\r\n  top: 12px;\r\n  margin-bottom: 12px !important;\r\n  opacity: 0.6;\r\n}\r\n\r\n#add-button {\r\n  margin: 0 0 14px 0;\r\n  color: var(--text-primary-color);\r\n  width: 100%;\r\n  height: 32px;\r\n  border-radius: 16px;\r\n  border: none;\r\n  background-color: var(--accent-color);\r\n  cursor: pointer;\r\n}\r\n\r\np {\r\n  margin-bottom: 4px;\r\n}\r\n\r\nul {\r\n  margin: 0px 14px !important;\r\n  padding-left: 0px !important;\r\n}\r\n\r\nha-icon, a, p, button, h4 {\r\n  color: var(--primary-text-color) !important;\r\n}\r\n\r\nhr {\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 1px;\r\n  border: none;\r\n  background-color: var(--outline-color);\r\n  margin: 8px 0 0 0;\r\n}\r\n\r\ncode, code-block {\r\n  background: rgba(0,120,180,0.3);\r\n  color: var(--primary-text-color);\r\n  background-blend-mode: darken;\r\n  padding: 1px 3px;\r\n  border-radius: 6px;\r\n  font-size: 13px;\r\n}\r\n\r\ncode-block {\r\n  display: grid;\r\n  width: 100%;\r\n  padding: 0;\r\n  max-height: 285px;\r\n  overflow: auto;\r\n}\r\n\r\ncode-block pre {\r\n  white-space: pre;\r\n  overflow: auto;\r\n  margin: 8px;\r\n}\r\n\r\ncode-block.with-i pre {\r\n  white-space: pre-line;\r\n  overflow: auto;\r\n  margin: 8px;\r\n}\r\n\r\ncode-block.with-i pre > i {\r\n  white-space: pre;\r\n  font-style: normal;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  margin: 14px 0;\r\n}\r\n\r\nimg.example {\r\n  padding: 32px;\r\n  box-sizing: border-box;\r\n  background: rgba(0, 120, 180, 0.8);\r\n  border-radius: 6px;\r\n}\r\n\r\n.button-header {\r\n  height: auto;\r\n  width: 100%;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  margin: 0 8px;\r\n}\r\n\r\n.button-number {\r\n  display: inline-flex;\r\n  width: auto;\r\n}\r\n\r\n.remove-button {\r\n  display: inline-flex;\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  text-align: center;\r\n  line-height: 24px;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n}\r\n\r\n.content {\r\n  margin: 12px 4px 14px 4px;\r\n}\r\n\r\nh4 > ha-icon {\r\n  margin: 8px 12px 8px 8px;\r\n}\r\n\r\nha-expansion-panel h4:not(.version) {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 10px 0;\r\n}\r\n\r\nha-form {\r\n  --expansion-panel-summary-padding: 2px 14px;\r\n}\r\n\r\nha-textfield {\r\n  width: 100%;\r\n}\r\n\r\nh3 {\r\n  margin: 4px 0;\r\n}\r\n\r\n.code-editor {\r\n  overflow: scroll;\r\n}\r\n\r\n.icon-button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  padding: 8px 16px;\r\n  background: rgba(0,120,180,0.5);\r\n  border: none;\r\n  cursor: pointer;\r\n  margin: 0;\r\n  border-radius: 32px;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.icon-button:hover {\r\n  background: rgba(0,120,180,0.7);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.icon-button:active {\r\n  background: rgba(0,120,180,0.9);\r\n}\r\n\r\n.icon-button.header {\r\n  background: none;\r\n  padding: 0;\r\n  margin: 0 4px;\r\n}\r\n\r\n.button-container {\r\n  display: flex;\r\n  margin-left: auto !important;\r\n}\r\n\r\nha-card-conditions-editor {\r\n  margin-top: -12px;\r\n}\r\n\r\n.disabled {\r\n  opacity: 0.5; \r\n  pointer-events: none;\r\n}\r\n\r\n.version {\r\n  font-size: 12px !important;\r\n  color: #fff;\r\n  background: rgba(0,0,0,0.1);\r\n  padding: 8px 16px;\r\n  border-radius: 32px;\r\n}\r\n\r\n.module-version {\r\n  margin: 0;\r\n}\r\n\r\n.version-number {\r\n  font-size: 10px;\r\n  background: rgba(0,120,180,1);\r\n  padding: 0px 8px;\r\n  border-radius: 12px;\r\n  margin-right: -6px;\r\n  float: right;\r\n  color: white;\r\n}\r\n\r\n.version-number a {\r\n  color: white !important;\r\n}\r\n\r\n.bubble-info-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.bubble-section-title {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin-bottom: -6px !important;\r\n  color: var(--primary-text-color) !important;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  padding-left: 4px;\r\n}\r\n\r\n.bubble-section-title ha-icon {\r\n  color: var(--info-color) !important;\r\n  margin: 8px 8px 8px 0;\r\n  line-height: normal !important;\r\n}\r\n\r\n.bubble-section-title::before {\r\n  content: "";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 3px;\r\n  background: var(--primary-color);\r\n  border-radius: 2px;\r\n}\r\n\r\n.bubble-info {\r\n  padding: 0 0 14px;\r\n  position: relative;\r\n}\r\n\r\n.bubble-info .content {\r\n  margin: 0;\r\n  padding: 0 18px;\r\n}\r\n\r\n.bubble-info::before {\r\n  content: "";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: var(--info-color);\r\n  border-radius: 4px;\r\n  opacity: 0.12;\r\n  pointer-events: none;\r\n}\r\n\r\n.bubble-info.warning::before {\r\n  background-color: var(--warning-color);\r\n  opacity: 0.15;\r\n}\r\n\r\n.bubble-info.warning .bubble-section-title::before {\r\n  background: var(--warning-color);\r\n}\r\n\r\n.bubble-info.warning .bubble-section-title ha-icon {\r\n  color: var(--warning-color) !important;\r\n}\r\n\r\n.bubble-info.error::before {\r\n  background-color: var(--error-color);\r\n  opacity: 0.15;\r\n}\r\n\r\n.bubble-info.error .bubble-section-title::before {\r\n  background: var(--error-color);\r\n}\r\n\r\n.bubble-info.error .bubble-section-title ha-icon {\r\n  color: var(--error-color) !important;\r\n}\r\n\r\n.bubble-info h4 {\r\n  margin: 8px 0 0 0;\r\n  padding: 0 18px;\r\n}\r\n\r\n.bubble-info p {\r\n  margin: 0;\r\n}\r\n\r\n.bubble-info * {\r\n  z-index: 1;\r\n}\r\n\r\n.bubble-section-title + p {\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n\r\n.bubble-badges {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n  margin: 4px 0;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.bubble-badge {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  padding: 4px 10px;\r\n  text-decoration: none;\r\n  font-size: 13px;\r\n  transition: all 0.2s ease;\r\n  box-shadow: none;\r\n  height: 26px;\r\n  border: none;\r\n  position: relative;\r\n  border-radius: 18px;\r\n  white-space: nowrap;\r\n  background-color: var(--mdc-text-field-disabled-line-color);\r\n}\r\n\r\n.bubble-badge:hover {\r\n  transform: translateY(-1px);\r\n  background: rgba(0, 120, 180, 0.5);\r\n}\r\n\r\n.bubble-badge ha-icon {\r\n  color: var(--primary-text-color) !important;\r\n  --mdc-icon-size: 16px;\r\n  line-height: normal;\r\n}\r\n\r\n.paypal-icon, .bmc-icon, .patreon-icon {\r\n  width: 15px;\r\n  height: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.paypal-icon svg, .bmc-icon svg, .patreon-icon svg {\r\n  width: 100%;\r\n  height: 100%;\r\n  fill: var(--primary-text-color);\r\n}\r\n\r\n.bubble-thank-you {\r\n  margin: 0 !important;\r\n  padding: 8px !important;\r\n  opacity: 0.8;\r\n}\r\n\r\n.creator-message {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.creator-message a {\r\n  display: flex;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.creator-message a:hover {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.creator-avatar {\r\n  min-width: 42px;\r\n  height: 42px;\r\n  border-radius: 50%;\r\n  margin: 0;\r\n}\r\n\r\nul.icon-list {\r\n  list-style-type: none;\r\n  padding-left: 0 !important;\r\n  margin-left: 0 !important;\r\n}\r\n\r\nul.icon-list li {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 6px;\r\n  line-height: 24px;\r\n}\r\n\r\nul.icon-list li ha-icon {\r\n  min-width: 24px;\r\n  margin-right: 8px;\r\n  --mdc-icon-size: 18px;\r\n}',modules_styles_namespaceObject=':root {\r\n  --rgb-primary-color: 3, 169, 244;\r\n  --rgb-info-color: 33, 150, 243;\r\n  --rgb-warning-color: 255, 152, 0;\r\n  --rgb-error-color: 244, 67, 54;\r\n  --rgb-success-color: 76, 175, 80;\r\n}\r\n\r\n/* Module Store Styles */\r\n.module-store {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  position: relative;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.store-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  margin-bottom: 16px;\r\n  background-color: var(--card-background-color);\r\n  border-radius: 16px;\r\n  padding: 16px;\r\n  border: 1px solid var(--divider-color);\r\n  box-shadow: var(--shadow-elevation-1dp);\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.store-header-top {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.store-header-title {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.store-header-title ha-icon {\r\n  color: var(--info-color) !important;\r\n}\r\n\r\n.store-refresh-button {\r\n  color: var(--primary-text-color);\r\n  border-radius: 50%;\r\n  width: 36px;\r\n  height: 36px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  box-shadow: var(--shadow-elevation-1dp);\r\n}\r\n\r\n.store-refresh-button:hover {\r\n  transform: rotate(180deg);\r\n  box-shadow: var(--shadow-elevation-2dp);\r\n}\r\n\r\n.store-search {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  border-radius: 32px;\r\n  overflow: hidden;\r\n}\r\n\r\n.store-search ha-textfield {\r\n  flex-grow: 1;\r\n}\r\n\r\n.store-filters {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 12px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.store-filter-type {\r\n  flex-grow: 1;\r\n  min-width: 180px;\r\n}\r\n\r\n.store-modules {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.store-module-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 16px;\r\n  border: 1px solid var(--divider-color);\r\n  overflow: hidden;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  background-color: var(--card-background-color);\r\n  box-shadow: var(--shadow-elevation-1dp);\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.store-module-card:hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: var(--shadow-elevation-3dp);\r\n}\r\n\r\n.store-module-header {\r\n  position: relative;\r\n  padding: 16px 16px 0 0;\r\n  margin: 0;\r\n  border-radius: 0;\r\n  border-bottom: 1px solid var(--divider-color);\r\n}\r\n\r\n.store-module-header::before {\r\n  content: "";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: var(--info-color);\r\n  border-radius: 0;\r\n  opacity: 0.12;\r\n  pointer-events: none;\r\n}\r\n\r\n.store-module-header.warning::before {\r\n  background-color: var(--warning-color);\r\n  opacity: 0.15;\r\n}\r\n\r\n.store-module-header .bubble-section-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  padding-left: 0;\r\n  margin-bottom: 0px !important;\r\n  position: relative;\r\n}\r\n\r\n.store-module-header .bubble-section-title::before {\r\n  content: "";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 3px;\r\n  background: var(--primary-color);\r\n  border-radius: 0 2px 2px 0;\r\n}\r\n\r\n.store-module-header.warning .bubble-section-title::before {\r\n  background: var(--warning-color);\r\n}\r\n\r\n.store-module-header .bubble-section-title ha-icon {\r\n  margin: 0 0 0 19px;\r\n  color: var(--info-color) !important;\r\n}\r\n\r\n.store-module-header.warning .bubble-section-title ha-icon {\r\n  color: var(--warning-color) !important;\r\n}\r\n\r\n.store-module-header h3 {\r\n  margin: 0;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n\r\n.store-module-meta {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 0 4px 18px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.store-module-badges {\r\n  margin: 0;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.store-module-author {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  font-size: 14px;\r\n  color: var(--secondary-text-color);\r\n}\r\n\r\n.author-avatar {\r\n  width: 24px;\r\n  height: 24px;\r\n  border-radius: 50%;\r\n  margin: 0;\r\n  border: 1px solid rgba(0,0,0,0.1);\r\n}\r\n\r\n.store-module-content {\r\n  padding: 0 16px;\r\n  background-color: var(--card-background-color);\r\n  grid-gap: 8px;\r\n}\r\n\r\n.module-description {\r\n  margin: 0 0 -4px;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n}\r\n\r\n.module-preview-image {\r\n  border-radius: 12px;\r\n  max-height: 220px;\r\n  width: 100%;\r\n  object-fit: contain;\r\n  background-color: var(--secondary-background-color);\r\n  margin: 0;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.module-preview-container {\r\n  position: relative;\r\n  margin-top: 8px;\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n}\r\n\r\n.module-preview-zoom-btn {\r\n  position: absolute;\r\n  bottom: 8px;\r\n  right: 8px;\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 50%;\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n  transition: all 0.2s ease;\r\n  z-index: 5;\r\n  box-shadow: 0 2px 5px rgba(0,0,0,0.2);\r\n}\r\n\r\n.module-preview-zoom-btn:hover {\r\n  opacity: 1;\r\n  transform: scale(1.1);\r\n}\r\n\r\n.module-preview-zoom-btn ha-icon {\r\n  color: white !important;\r\n  --mdc-icon-size: 20px;\r\n}\r\n\r\n.module-preview-fullscreen {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  z-index: 999;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: zoom-out;\r\n}\r\n\r\n.module-preview-fullscreen img {\r\n  max-width: 90%;\r\n  max-height: 90%;\r\n  object-fit: contain;\r\n  margin: 0;\r\n  border-radius: 6px;\r\n}\r\n\r\n.compatibility-warning {\r\n  margin-top: -8px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.compatibility-warning ha-icon {\r\n  color: var(--warning-color) !important;\r\n}\r\n\r\n.store-module-actions {\r\n  margin: 12px 0 12px;\r\n  justify-content: flex-start;\r\n  border-top: 1px solid var(--divider-color);\r\n  padding-top: 12px;\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n.store-module-card.incompatible .store-module-actions {\r\n  opacity: 0.8;\r\n}\r\n\r\n.bubble-badge.install-button {\r\n  background-color: rgba(33, 150, 243, 0.7);\r\n  color: var(--primary-color);\r\n  font-weight: 500;\r\n  transition: all 0.2s ease;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  cursor: pointer;\r\n}\r\n\r\n.bubble-badge.install-button span {\r\n  color: var(--primary-text-color);\r\n  font-weight: 500;\r\n  transition: color 0.2s ease;\r\n}\r\n\r\n.bubble-badge.install-button ha-icon {\r\n  transition: color 0.2s ease;\r\n}\r\n\r\n.bubble-badge.install-button:hover {\r\n  transform: translateY(-1px);\r\n  background-color: rgba(33, 150, 243, 0.9);\r\n}\r\n\r\n.bubble-badge.install-button:hover span,\r\n.bubble-badge.install-button:hover ha-icon {\r\n  color: white !important;\r\n}\r\n\r\n.bubble-badge.update-button {\r\n  background-color: rgb(0, 220, 80);\r\n  font-weight: 500;\r\n  transition: all 0.2s ease;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  cursor: pointer;\r\n  color: rgba(0, 0, 0, 0.8) !important;\r\n}\r\n\r\n.bubble-badge.update-button ha-icon {\r\n  color: rgba(0, 0, 0, 0.8) !important;\r\n}\r\n\r\n.bubble-badge.update-button:hover {\r\n  transform: translateY(-1px);\r\n  background-color: rgb(0, 180, 60);\r\n}\r\n\r\n.bubble-badge.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n.bubble-badge.installed-button {\r\n  background-color: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\r\n  color: var(--success-color, var(--primary-color));\r\n  opacity: 0.8;\r\n  cursor: default;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n}\r\n\r\n.bubble-badge.installed-button span {\r\n  color: var(--primary-text-color);\r\n  font-weight: 500;\r\n}\r\n\r\n.bubble-badge.installed-button:hover {\r\n  transform: none;\r\n  background: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\r\n}\r\n\r\n.bubble-badge.link-button {\r\n  background-color: rgba(0, 0, 0, 0.06);\r\n  color: var(--secondary-text-color);\r\n  transition: all 0.2s ease;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n}\r\n\r\n.bubble-badge.link-button:hover {\r\n  background-color: rgba(0, 0, 0, 0.12);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.bubble-badge.update-badge {\r\n  background-color: rgb(0, 220, 80);\r\n  font-weight: 500;\r\n  font-size: 11px;\r\n  padding: 2px 8px;\r\n  height: 20px;\r\n  margin-left: auto !important;\r\n  color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.bubble-badge.update-badge ha-icon {\r\n  color: rgba(0, 0, 0, 0.8) !important;\r\n}\r\n\r\n.bubble-badge.update-badge:hover {\r\n  transform: none;\r\n}\r\n\r\n.bubble-badge.version-badge {\r\n  background-color: rgba(0, 0, 0, 0.08);\r\n  color: var(--primary-text-color);\r\n  font-weight: 500;\r\n  font-size: 11px;\r\n  padding: 2px 8px;\r\n  height: 20px;\r\n}\r\n\r\n.bubble-badge.incompatible-badge {\r\n  background-color: rgba(var(--rgb-warning-color), 0.12);\r\n  color: var(--warning-color);\r\n  font-weight: 500;\r\n  font-size: 11px;\r\n  padding: 2px 8px;\r\n  height: 20px;\r\n}\r\n\r\n.bubble-badge.incompatible-badge::before {\r\n  background-color: var(--warning-color);\r\n  opacity: 0.3;\r\n}\r\n\r\n.bubble-badge.new-badge {\r\n  background-color: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\r\n  color: var(--primary-text-color);\r\n  font-weight: 500;\r\n  font-size: 11px;\r\n  padding: 2px 8px;\r\n  height: 20px;\r\n}\r\n\r\n.bubble-badge.new-badge::before {\r\n  background-color: var(--success-color, #28a745);\r\n  opacity: 0.2;\r\n}\r\n\r\n.bubble-badge.yaml-badge {\r\n  background-color: rgba(255, 167, 38, 0.45);\r\n  color: var(--primary-text-color);\r\n  font-weight: 700;\r\n  font-size: 11px;\r\n  padding: 2px 8px;\r\n  height: 20px;\r\n}\r\n\r\n.bubble-badge.yaml-badge::before {\r\n  background-color: #ff9800;\r\n  opacity: 0.5;\r\n}\r\n\r\n.version-container {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: auto;\r\n  gap: 8px;\r\n}\r\n\r\n/* Material tabs */\r\nha-tabs {\r\n  margin-bottom: 16px;\r\n  --primary-tab-color: var(--primary-color);\r\n  --secondary-tab-color: var(--secondary-text-color);\r\n  border-bottom: 1px solid var(--divider-color);\r\n  top: 0;\r\n  position: sticky;\r\n  background-color: var(--card-background-color);\r\n  z-index: 6;\r\n  padding-top: 16px;\r\n  margin-top: -24px;\r\n  top: -40px;\r\n}\r\n\r\n.module-editor-top-marker {\r\n  display: flex;\r\n  position: relative;\r\n  top: 0;\r\n}\r\n\r\npaper-tab {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-width: 120px;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  transition: all 0.3s ease;\r\n  position: relative;\r\n  color: var(--secondary-tab-color);\r\n  padding: 0 16px;\r\n  opacity: 0.8;\r\n}\r\n\r\npaper-tab[aria-selected="true"] {\r\n  color: var(--primary-text-color);\r\n  opacity: 1;\r\n}\r\n\r\npaper-tab ha-icon {\r\n  margin-right: 8px;\r\n  color: var(--secondary-tab-color);\r\n}\r\n\r\npaper-tab[aria-selected="true"] ha-icon {\r\n  color: var(--primary-tab-color) !important;\r\n}\r\n\r\npaper-tab::after {\r\n  content: \'\';\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 3px;\r\n  background-color: var(--primary-tab-color);\r\n  transition: all 0.3s ease;\r\n  transform: translateX(-50%);\r\n  border-radius: 3px 3px 0 0;\r\n  opacity: 0;\r\n}\r\n\r\npaper-tab[aria-selected="true"]::after {\r\n  width: 80%;\r\n  opacity: 1;\r\n}\r\n\r\npaper-tab:hover {\r\n  background-color: rgba(var(--rgb-primary-color), 0.05);\r\n}\r\n\r\n/* Tab ripple effect */\r\npaper-ripple {\r\n  color: var(--primary-tab-color);\r\n  opacity: 0.1;\r\n}\r\n\r\n#tabs {\r\n  border-radius: 8px 8px 0 0;\r\n  overflow: hidden;\r\n  background-color: var(--card-background-color);\r\n  box-shadow: var(--shadow-elevation-1dp);\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  paper-tab {\r\n    min-width: auto;\r\n    padding: 0 12px;\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n.bubble-badge.hoverable {\r\n  cursor: pointer !important;\r\n  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.bubble-badge.hoverable:active {\r\n  transform: translateY(0);\r\n}\r\n\r\n/* Back to top button */\r\n.back-to-top-button {\r\n  position: sticky;\r\n  bottom: 0px;\r\n  right: 20px;\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 50%;\r\n  background-color: var(--primary-color);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  box-shadow: 0 2px 6px rgba(0,0,0,0.3);\r\n  transition: all 0.2s ease;\r\n  z-index: 10;\r\n  margin-left: auto;\r\n  margin-top: 16px;\r\n}\r\n\r\n.back-to-top-button:hover {\r\n  transform: translateY(-4px);\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.3);\r\n}\r\n\r\n.back-to-top-button:active {\r\n  transform: translateY(0);\r\n  box-shadow: 0 1px 3px rgba(0,0,0,0.3);\r\n}\r\n\r\n.back-to-top-button ha-icon {\r\n  color: white !important;\r\n  --mdc-icon-size: 22px;\r\n}\r\n\r\n.store-loading {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 42px;\r\n  gap: 24px;\r\n  position: relative;\r\n  background-color: var(--card-background-color);\r\n  border-radius: 16px;\r\n  border: 1px solid var(--divider-color);\r\n  box-shadow: var(--shadow-elevation-1dp);\r\n  overflow: hidden;\r\n}\r\n\r\n.bubble-loading-icon {\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.icon-center-wrapper {\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 6px;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 2;\r\n}\r\n\r\n.bubble-loading-icon ha-icon {\r\n  --mdc-icon-size: 26px;\r\n  color: var(--primary-color);\r\n  opacity: 0.9;\r\n  animation: pulseAnimation 3s ease-in-out infinite;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bubble-loading-orbit {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px dashed rgba(var(--rgb-primary-color), 0.2);\r\n  border-radius: 50%;\r\n  animation: orbitRotation 8s linear infinite;\r\n}\r\n\r\n.bubble-loading-satellite {\r\n  position: absolute;\r\n  width: 12px;\r\n  height: 12px;\r\n  background-color: var(--info-color);\r\n  border-radius: 50%;\r\n  top: -6px;\r\n  left: calc(50% - 6px);\r\n  box-shadow: 0 0 10px rgba(var(--rgb-info-color), 0.7);\r\n  animation: pulseAnimation 2s ease-in-out infinite;\r\n  transform-origin: center center;\r\n}\r\n\r\n.bubble-progress-container {\r\n  width: 100%;\r\n  max-width: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  position: relative;\r\n}\r\n\r\n.bubble-progress-track {\r\n  height: 10px;\r\n  background-color: rgba(var(--rgb-primary-color), 0.12);\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  backdrop-filter: blur(4px);\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n  transition: all 0.3s ease;\r\n  transform: translateZ(0);\r\n  contain: paint;\r\n}\r\n\r\n.bubble-progress-bar {\r\n  background: var(--info-color);\r\n  border-radius: 10px;\r\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\r\n  min-width: 10px;\r\n}\r\n\r\n.bubble-progress-glow {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.bubble-progress-percentage {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 14px;\r\n  color: var(--primary-text-color);\r\n}\r\n\r\n.bubble-progress-text {\r\n  font-weight: 500;\r\n}\r\n\r\n.bubble-progress-value {\r\n  font-weight: 600;\r\n  color: var(--primary-color);\r\n  font-variant-numeric: tabular-nums;\r\n}\r\n\r\n.bubble-progress-dots {\r\n  display: flex;\r\n  gap: 4px;\r\n}\r\n\r\n.bubble-progress-dots .dot {\r\n  width: 6px;\r\n  height: 6px;\r\n  border-radius: 50%;\r\n  background-color: var(--primary-color);\r\n  opacity: 0.5;\r\n}\r\n\r\n.bubble-progress-dots .dot:nth-child(1) {\r\n  animation: dotAnimation 1.4s ease-in-out infinite;\r\n}\r\n\r\n.bubble-progress-dots .dot:nth-child(2) {\r\n  animation: dotAnimation 1.4s ease-in-out 0.2s infinite;\r\n}\r\n\r\n.bubble-progress-dots .dot:nth-child(3) {\r\n  animation: dotAnimation 1.4s ease-in-out 0.4s infinite;\r\n}\r\n\r\n@keyframes orbitRotation {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes pulseAnimation {\r\n  0%, 100% {\r\n    transform: scale(1);\r\n    opacity: 0.9;\r\n  }\r\n  50% {\r\n    transform: scale(1.1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes glowAnimation {\r\n  0% {\r\n    --x: 0%;\r\n    opacity: 0.5;\r\n  }\r\n  50% {\r\n    --x: 100%;\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    --x: 0%;\r\n    opacity: 0.5;\r\n  }\r\n}\r\n\r\n@keyframes dotAnimation {\r\n  0%, 100% {\r\n    transform: translateY(0);\r\n    opacity: 0.5;\r\n  }\r\n  50% {\r\n    transform: translateY(-4px);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Styles for the supported cards selector */\r\n.checkbox-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 12px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .checkbox-grid {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n/* Module Editor Styles */\r\n.module-actions {\r\n  display: flex;\r\n  gap: 8px;\r\n  margin-left: auto;\r\n}\r\n\r\n.module-editor-form .card-content {\r\n  display: grid;\r\n  grid-gap: 16px;\r\n  padding: 0;\r\n}\r\n\r\n.module-editor-form h3 {\r\n  margin: 8px 0;\r\n  color: var(--primary-text-color);\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n}\r\n\r\n.module-editor-form h4:not(.bubble-section-title) {\r\n  margin: 0 !important;\r\n  font-size: 16px;\r\n}\r\n\r\n.module-editor-form ha-code-editor {\r\n  max-height: 600px;\r\n  border: 1px solid var(--divider-color);\r\n  border-radius: 4px;\r\n}\r\n\r\n.module-editor-form ha-textarea {\r\n  width: 100%;\r\n}\r\n\r\n.module-actions .icon-button {\r\n  width: 36px;\r\n  height: 36px;\r\n  border-radius: 18px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0;\r\n}\r\n\r\n.module-actions .icon-button {\r\n  background: none;\r\n}\r\n\r\n.module-actions .icon-button ha-icon {\r\n  --mdc-icon-size: 18px;\r\n}\r\n\r\n.css-editor-container, .editor-schema-container {\r\n  position: relative;\r\n  margin-bottom: 8px;\r\n  overflow: auto;\r\n}\r\n\r\n.css-editor-container ha-code-editor {\r\n  max-height: 500px;\r\n  height: auto; \r\n  max-width: 100%;\r\n  border: 1px solid var(--divider-color);\r\n  border-radius: 4px;\r\n  overflow: auto;\r\n}\r\n\r\n.form-preview {\r\n  border: 1px solid var(--divider-color);\r\n  border-radius: 8px;\r\n  padding: 16px;\r\n}\r\n\r\n.form-preview h4 {\r\n  margin-top: 0;\r\n  margin-bottom: 16px;\r\n  color: var(--primary-color);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.form-preview-container {\r\n  padding: 8px;\r\n  border-radius: 4px;\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    opacity: 0.7;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n\r\n.export-section {\r\n  margin-top: 12px;\r\n}\r\n\r\n.export-buttons {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 12px;\r\n  margin-top: 8px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.export-buttons .icon-button {\r\n  flex: 1;\r\n  min-width: 160px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px 16px;\r\n}\r\n\r\n.export-preview {\r\n  margin-top: 12px;\r\n  padding: 8px;\r\n  border: 1px solid var(--divider-color);\r\n  border-radius: 8px;\r\n  max-height: 300px;\r\n  overflow: auto;\r\n  background: var(--secondary-background-color);\r\n}\r\n\r\n.export-preview pre {\r\n  margin: 0;\r\n  white-space: pre-wrap;\r\n  font-family: monospace;\r\n  font-size: 12px;\r\n  line-height: 1.4;\r\n  padding: 8px;\r\n}\r\n\r\nha-expansion-panel {\r\n  --input-fill-color: none;\r\n}\r\n\r\n@keyframes highlight {\r\n  0% { background-color: rgba(var(--rgb-primary-color), 0.2); }\r\n  100% { background-color: var(--secondary-background-color); }\r\n}\r\n\r\n.helper-text {\r\n  display: block;\r\n  color: var(--secondary-text-color);\r\n  font-size: 12px;\r\n  margin-top: -4px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.helper-text a {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.helper-text a:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.bubble-info > div {\r\n  --mdc-icon-size: 18px;\r\n}\r\n\r\nha-formfield.apply-module-button {\r\n  height: 40px;\r\n  border-radius: 32px;\r\n  padding: 0 16px;\r\n  background-color: rgba(0, 0, 0, 0.1);;\r\n}\r\n\r\n.module-editor-buttons-container {\r\n  display: flex; \r\n  gap: 8px; \r\n  justify-content: flex-end;\r\n  position: sticky;\r\n  bottom: -24px;\r\n  background-color: var(--card-background-color);\r\n  padding: 8px 0;\r\n  z-index: 1;\r\n}';class BubbleCardEditor extends lit_element_r{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config?.card_type||""}get _button_type(){return this._config?.button_type||("pop-up"===this._config?.card_type?"":"switch")}get _entity(){return this._config?.entity||""}get _selectable_attributes(){return["source_list","sound_mode_list","hvac_modes","fan_modes","swing_modes","preset_modes","effect_list"]}render(){if(!this.hass)return x``;const e=setupTranslation(this.hass),t=document.querySelector("body > home-assistant"),n=t?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot?.querySelector("ha-dialog > div.content > div.element-preview");if(n?.style&&"sticky"!==n.style.position&&(n.style.position="sticky",n.style.top="0",n.style.height="calc(100vh - 224px)",n.style.overflowY="auto"),!this.listsUpdated){const t=e=>({label:e,value:e});this.inputSelectList={states:{},locale:this.hass.locale,localize:this.hass.localize,entities:this.hass.entities},Object.keys(this.hass.states).filter((e=>{const t=this.hass.states[e],n=e.substr(0,e.indexOf(".")),o="input_select"===n||"select"===n,r=this._selectable_attributes.some((e=>t.attributes?.[e]));return o||r})).map(t).forEach((e=>{const t=e.label||e,n=this.hass.states[t];n&&(this.inputSelectList.states[t]=n)})),this.attributeList=Object.keys(this.hass.states[this._entity]?.attributes||{}).map((e=>{let t=this.hass.states[this._entity];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})),this.cardTypeList=[{label:"Button (Switch, slider, ...)",value:"button"},{label:e("editor.calendar.name"),value:"calendar"},{label:"Cover",value:"cover"},{label:"Climate",value:"climate"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Media player",value:"media-player"},{label:"Pop-up",value:"pop-up"},{label:"Select",value:"select"},{label:"Separator",value:"separator"}],this.listsUpdated=!0}const o=this.cardTypeList;switch(this.buttonTypeList,this._config?.card_type){case"pop-up":return renderPopUpEditor(this);case"button":return renderButtonEditor(this);case"separator":return renderSeparatorEditor(this);case"horizontal-buttons-stack":return renderHorButtonStackEditor(this);case"cover":return renderCoverEditor(this);case"media-player":return renderMediaPlayerEditor(this);case"empty-column":return renderEmptyColumnEditor(this);case"select":return renderSelectEditor(this);case"climate":return renderClimateEditor(this);case"calendar":return renderCalendarEditor(this);case void 0:return x`
                    <div class="card-config">
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                You need to add a card type first
                            </h4>
                        </div>
                        ${this.makeDropdown("Card type","card_type",o)}
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
            ${n?x`
                <ha-textfield
                    label="Rows"
                    type="number"
                    inputMode="numeric"
                    min="0"
                    step="0.1"
                    .value="${this._config.rows||this._config.grid_options?.rows||t}"
                    .configValue="${"rows"}"
                    @input="${this._valueChanged}"
                ></ha-textfield>
            `:""}
        `}makeShowState(e=this._config,t="",n=!1,o){const r=e?.entity??this._config.entity??"",a="name"===this._config.button_type,i=r?.startsWith("input_select")||r?.startsWith("select")||e.select_attribute,s=Object.keys(this.hass.states[r]?.attributes||{}).map((e=>{let t=this.hass.states[r];return{label:this.hass.formatEntityAttributeName(t,e),value:e}}));return x`
            ${"sub_button"!==n?x`
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
            `:""}
            ${"sub_button"===n?x`
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
            `:""}
            ${"sub_button"===n&&(e?.show_background??1)?x`
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
            `:""}
            ${"sub_button"===n&&(e?.state_background??1)&&r.startsWith("light")?x`
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
            `:""}
            ${"sub_button"!==n&&r.startsWith("light")?x`
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
            `:""}
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
            ${"sub_button"!==n?x`
                <ha-formfield .label="Prioritize icon over entity picture">
                    <ha-switch
                        aria-label="Prioritize icon over entity picture"
                        .checked=${e?.force_icon??!1}
                        .configValue="${t+"force_icon"}"
                        .disabled="${a}"
                        @change="${n?e=>this._arrayValueChange(o,{force_icon:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Prioritize icon over entity picture</label> 
                    </div>
                </ha-formfield>
            `:""}
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
                    .disabled="${a&&"sub_button"!==n}"
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
                    .disabled="${a&&"sub_button"!==n}"
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
                    .disabled="${a&&"sub_button"!==n}"
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
                    .disabled="${a&&"sub_button"!==n}"
                    @change="${n?e=>this._arrayValueChange(o,{show_attribute:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show attribute</label> 
                </div>
            </ha-formfield>
            ${e?.show_attribute?x`
                <div class="ha-combo-box">
                    <ha-combo-box
                        label="Attribute to show"
                        .value="${e?.attribute}"
                        .configValue="${t+"attribute"}"
                        .items="${s}"
                        .disabled="${a}"
                        @value-changed="${n?e=>this._arrayValueChange(o,{attribute:e.detail.value},n):this._valueChanged}"
                    ></ha-combo-box>
                </div>
            `:""}
            ${"sub_button"===n&&i?x`
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
          `}makeActionPanel(e,t=this._config,n,o,r=this._config){const a="Tap action"===e?"mdi:gesture-tap":"Double tap action"===e?"mdi:gesture-double-tap":"Hold action"===e?"mdi:gesture-tap-hold":"mdi:gesture-tap",i="Tap action"===e?"tap_action":"Double tap action"===e?"double_tap_action":"Hold action"===e?"hold_action":"Open action"===e?"open_action":"close_action";let s;try{s="Tap action"===e?t.tap_action:"Double tap action"===e?t.double_tap_action:"Hold action"===e?t.hold_action:"Open action"===e?t.open_action:t.close_action}catch{}const l=t===this._config;return n||(n=l&&"Tap action"===e?"name"!==this._config.button_type?"more-info":"none":l?"none":""),x`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="${a}"></ha-icon>
                    ${e}
                </h4>
                <div class="content"> 
                    <ha-form
                        .hass=${this.hass}
                        .data=${t}
                        .configValue="${(o?o+".":"")+(parseInt(r)==r?r+".":"")+i}" 
                        .schema=${[{name:i,label:e,selector:{ui_action:{default_action:n}}}]}  
                        .computeLabel=${this._computeLabelCallback}
                        @value-changed=${e=>this._ActionChanged(e,o,r)}
                    ></ha-form>
                </div>
                ${"call-service"===s?.action||"perform-action"===s?.action?x`
                    <ha-formfield .label="Use default entity">
                        <ha-switch
                            aria-label="Use default entity"
                            .configValue="${(o?o+".":"")+(parseInt(r)==r?r+".":"")+i+".default_entity"}" 
                            .checked=${"entity"===s?.target?.entity_id}
                             @change=${this._updateActionsEntity}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Use default entity</label> 
                        </div>
                    </ha-formfield>
                `:""}
            </ha-expansion-panel>
        `}makeSubButtonPanel(){return makeSubButtonPanel(this)}makeVersion(){return x`
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
                    Custom styles & JS templates
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
        `}createErrorConsole(e=this){return e._errorListener||(e._errorListener=t=>{e.errorMessage=t.detail,e.requestUpdate()},window.addEventListener("bubble-card-error",e._errorListener)),x`
            <div class="bubble-info error" 
                style="display: ${e.errorMessage?"":"none"}">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Error in JS template
                </h4>
                <div class="content">
                    <p>${e.errorMessage}</p>
                </div>
            </div>
        `}_getProcessedSchema(e,t,n){if(this._processedSchemas&&this._processedSchemas[e])return this._processedSchemas[e];const o=structuredClone(t),r=this._updateAttributeSelectors(o,n,e);return this._processedSchemas={...this._processedSchemas,[e]:r},r}_valueChangedInHaForm(e,t,n){let o=e.detail.value;if(o&&"object"==typeof o&&!Array.isArray(o)){const e=Object.keys(o);e.length>0&&e.every((e=>!isNaN(parseInt(e,10))))&&(o=e.sort(((e,t)=>parseInt(e,10)-parseInt(t,10))).map((e=>o[e])))}this._workingModuleConfigs&&(this._workingModuleConfigs[t]=o);const r=this._cleanEmpty(o,t),a=structuredClone(n),i=this._updateAttributeSelectors(a,r,t);this._processedSchemas={...this._processedSchemas,[t]:i},(0,utils.rC)(this,"config-changed",{config:{...this._config,[t]:r}})}_cleanEmpty(e,t){if(Array.isArray(e))return e.map((e=>this._cleanEmpty(e,void 0))).filter((e=>!this._isEmpty(e)));if(e&&"object"==typeof e){const t={};return Object.keys(e).forEach((n=>{const o=this._cleanEmpty(e[n],n);this._isEmpty(o)||(t[n]=o)})),Object.keys(t).length>0?t:void 0}return"string"!=typeof e||""!==e||"state"===t?e:void 0}_isEmpty(e){return null==e||(Array.isArray(e)?0===e.length:"object"==typeof e&&0===Object.keys(e).length)}_updateAttributeSelectors=(e,t,n=void 0)=>e.map((e=>{e.selector&&e.selector.entity&&(n=t&&t.entity?t.entity:void 0),e.selector&&e.selector.attribute&&(e.selector.attribute.entity_id=n);const o=t&&t[e.name]?t[e.name]:t;return Array.isArray(e.schema)&&(e.schema=this._updateAttributeSelectors(e.schema,o,n)),e}));makeModulesEditor(){return makeModulesEditor(this)}makeModuleStore(){return makeModuleStore(this)}_valueChanged(e){const t=e.target,n=e.detail;let o,r;if("HA-SWITCH"===t.tagName?o=t.checked:void 0!==t.value&&(o="string"==typeof t.value?t.value.replace(",","."):t.value),"string"!=typeof o||!o.endsWith(".")&&"-"!==o){try{r={...this._config};const{configValue:a,checked:i}=t;if(a){const i=a.split(".");if(i.length>1){let a=r,s="";for(let e=0;e<i.length-1;e++){const t=i[e];s=s?`${s}.${t}`:t,a[t]||(a[t]={}),a[t]={...a[t]},a=a[t]}const l=i[i.length-1];"input"===e.type?a[l]=o:n&&a[l]!==n.value?a[l]=n.value:"HA-SWITCH"===t.tagName&&(a[l]=o)}else{const a=i[0];"input"===e.type?r[a]=o:n&&r[a]!==n.value?r[a]=n.value:"HA-SWITCH"===t.tagName&&(r[a]=o)}}else r=n.value;this._config=r}catch(e){if(console.error("Erreur lors de la mise à jour de la configuration:",e),configValue&&n){const e={...this._config};e[configValue]=n.value,r=e}else{if(!n)return;r=n.value}}(0,utils.rC)(this,"config-changed",{config:r})}}_arrayValueChange(e,t,n){if(this._config.sub_button&&!this.subButtonJustAdded)return this.subButtonJustAdded=!0,void setTimeout((()=>this._arrayValueChange(e,t,n)),10);this._config[n]=this._config[n]||[];let o=[...this._config[n]];o[e]=o[e]||{},o[e]={...o[e],...t},this._config[n]=o,(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}_ActionChanged(e,t,n){var o=!1;try{"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id[0]&&(o=!0)}catch{}try{"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id&&(o=!0)}catch{}if(o&&(e.detail.value[e.currentTarget.__schema[0].name].action="call-service",null!=e.detail.value[e.currentTarget.__schema[0].name].perform_action&&(e.detail.value[e.currentTarget.__schema[0].name].service=""+e.detail.value[e.currentTarget.__schema[0].name].perform_action,delete e.detail.value[e.currentTarget.__schema[0].name].perform_action)),"button_action"===t){var r=!!this._config[t],a=null!=e.detail.value[e.currentTarget.__schema[0].name];(r||a)&&(this._config[t]=e.detail.value)}else if(t){this._config[t]=this._config[t]||[];let o=[...this._config[t]];o[n]=e.detail.value,this._config[t]=o}else this._config=e.detail.value;(0,utils.rC)(this,"config-changed",{config:this._config})}_updateActionsEntity(e){let t=JSON.parse(JSON.stringify(this._config));const n=e.target.configValue.split(".");let o=0;for(o=0;o<n.length-2;o++)t=t[n[o]]?t[n[o]]:{};e.target.checked?t[n[o]].target={entity_id:"entity"}:"entity"===t[n[o]].target?.entity_id&&(t[n[o]].target={});var r={value:t},a={__schema:[{name:n[n.length-2]}]},i={...e,detail:r,currentTarget:a};this._ActionChanged(i,n.length>2?n[0]:null,n.length>3?n[1]:null)}_computeLabelCallback=e=>e.label;_conditionChanged(e,t,n){if(e.stopPropagation(),n){this._config[n]=this._config[n]||[];let o=[...this._config[n]];o[t]=o[t]||{};const r=e.detail.value;o[t]={...o[t],visibility:r},this._config[n]=o}else if("pop-up"===this._config.card_type){const t=e.detail.value;this._config={...this._config,trigger:t}}(0,utils.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return i`
        ${r(editor_styles_namespaceObject+modules_styles_namespaceObject)}
    `}}customElements.define("bubble-card-editor",BubbleCardEditor);let themeWatcherInitialized=!1;class BubbleCard extends HTMLElement{editor=!1;isConnected=!1;connectedCallback(){this.isConnected=!0,(0,style_processor.nO)(this),themeWatcherInitialized?(0,style.$i)():((0,style.X)(),themeWatcherInitialized=!0),this._hass&&this.updateBubbleCard()}disconnectedCallback(){this.isConnected=!1,(0,tap_actions.Xs)(),"pop-up"===this.config.card_type&&updateListeners(this,!1)}get detectedEditor(){if(this.editor)return"hui-dialog-edit-card"===window.history?.state?.dialog}set editMode(e){this.editor!==e&&(this.editor=e,"pop-up"!==this.config.card_type&&"horizontal-buttons-stack"!==this.config.card_type||this.updateBubbleCard())}set hass(e){initializeContent(this),this._hass=e;const t="pop-up"===this.config.card_type;(!this.editor&&(this.isConnected||t)||this.detectedEditor)&&this.updateBubbleCard()}updateBubbleCard(){switch(this.config.card_type){case"pop-up":handlePopUp(this);break;case"button":handleButton(this);break;case"separator":handleSeparator(this);break;case"cover":handleCover(this);break;case"empty-column":handleEmptyColumn(this);break;case"horizontal-buttons-stack":handleHorizontalButtonsStack(this);break;case"calendar":handleCalendar(this);break;case"media-player":handleMediaPlayer(this);break;case"select":handleSelect(this);break;case"climate":handleClimate(this)}}setConfig(e){if(e.error)throw new Error(e.error);if(!e.card_type)throw new Error("You need to define a card type");if("pop-up"===e.card_type){if(e.hash&&e.button_type&&"name"!==e.button_type&&!e.entity&&e.modules)throw new Error("You need to define an entity")}else if("horizontal-buttons-stack"===e.card_type){var t={};for(var n in e)if(n.match(/^\d+_icon$/)){var o=n.replace("_icon","_link");if(void 0===e[o])throw new Error("You need to define "+o);if(t[e[o]])throw new Error("You can't use "+e[o]+" twice");t[e[o]]=!0}}else if(["button","cover","climate","select","media-player"].includes(e.card_type)){if(!e.entity&&"name"!==e.button_type)throw new Error("You need to define an entity")}else if("calendar"===e.card_type&&!e.entities)throw new Error("You need to define an entity list");if("select"===e.card_type&&e.entity&&!e.select_attribute&&!e.entity?.startsWith("input_select")&&!e.entity?.startsWith("select"))throw new Error('"Select menu (from attributes)" missing');if(window.entityError)throw new Error("You need to define a valid entity");this.config=e}getCardSize(){switch(this.config.card_type){case"pop-up":return-1e5;case"button":case"separator":case"empty-column":case"calendar":case"media-player":case"select":case"climate":return 1;case"cover":return 2;case"horizontal-buttons-stack":return 0}}getGridOptions(){const e=this.config.columns;let t={columns:e?3*e:12,rows:this.config.rows??"auto"};switch(this.config.card_type){case"horizontal-buttons-stack":t={rows:1.3};break;case"separator":t={rows:.8}}return t}static getConfigElement(){return document.createElement("bubble-card-editor")}getLayoutOptions(){let e=1;"pop-up"===this.config.card_type?e=0:"horizontal-buttons-stack"===this.config.card_type?e=1:["cover"].includes(this.config.card_type)&&(e=2);let t=4;return"pop-up"===this.config.card_type?t=0:"horizontal-buttons-stack"===this.config.card_type&&(t=4),{grid_columns:this.config.columns??t,grid_rows:this.config.rows??e}}}customElements.define("bubble-card",BubbleCard),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch.",documentationURL:"https://github.com/Clooos/Bubble-Card/"}),console.info(`%c Bubble Card %c ${version} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})();
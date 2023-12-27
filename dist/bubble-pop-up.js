(()=>{"use strict";var __webpack_modules__={946:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>getIconStyles,IU:()=>createIcon,L2:()=>addStyles,_k:()=>convertToRGBA,mk:()=>getIconColor,wW:()=>isColorCloseToWhite});const addStyles=function(hass,context,styles,customStyles,state,entityId,stateChanged,path="",element=context.content){const customStylesEval=customStyles?eval("`"+customStyles+"`"):"";let styleAddedKey=styles+"Added";if(!context[styleAddedKey]||context.previousStyle!==customStylesEval||stateChanged||context.previousConfig!==context.config){if(!context[styleAddedKey]){if(context.styleElement=element.querySelector("style"),!context.styleElement){context.styleElement=document.createElement("style");const e=path?element.querySelector(path):element;e?.appendChild(context.styleElement)}context[styleAddedKey]=!0}context.styleElement.innerHTML!==customStylesEval+styles&&(context.styleElement.innerHTML=customStylesEval+styles),context.previousStyle=customStylesEval,context.previousConfig=context.config}};function createIcon(e,t,n,o,i){let a=e._hass,r=!(!t||!a.states[t].attributes)&&a.states[t].attributes;e.imageUrl=!!r.entity_picture&&r.entity_picture,updateIcon(e,a,t,n,o),i||setInterval((()=>{a=e._hass,t&&a.states[t]&&(e.currentEntityPicture=a.states[t].attributes.entity_picture,e.currentEntityPicture!==e.previousEntityPicture&&(e.imageUrl=e.currentEntityPicture,updateIcon(e,a,t,n,o),e.previousEntityPicture=e.currentEntityPicture))}),1e3)}function updateIcon(e,t,n,o,i){for(;i.firstChild;)i.removeChild(i.firstChild);let a=e.config.icon&&e.config.icon.includes("/")?e.config.icon:e.imageUrl?e.imageUrl:"";if(a&&(r=t.states[n].state,n.startsWith("media_player.")&&!["off","unknown","idle",void 0].includes(r)||!n.startsWith("media_player."))){const e=document.createElement("div");e.setAttribute("class","entity-picture"),e.setAttribute("alt","Icon"),i&&(i.appendChild(e),i.style.background="center / cover no-repeat url("+a+"), var(--card-background-color,var(--ha-card-background))")}else{const e=document.createElement("ha-icon");e.setAttribute("icon",o),e.setAttribute("class","icon"),i&&i.appendChild(e)}var r}function isColorCloseToWhite(e){let t=[220,220,190];for(let n=0;n<3;n++)if(e[n]<t[n])return!1;return!0}function convertToRGBA(e,t,n=1){let o="";if(e.startsWith("#"))o=4===e.length?"rgba("+Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n)+", "+t+")":"rgba("+Math.min(255,parseInt(e.slice(1,3),16)*n)+", "+Math.min(255,parseInt(e.slice(3,5),16)*n)+", "+Math.min(255,parseInt(e.slice(5,7),16)*n)+", "+t+")";else if(e.startsWith("rgb")){let i=e.match(/\d+/g);e.includes("rgba"),o="rgba("+Math.min(255,i[0]*n)+", "+Math.min(255,i[1]*n)+", "+Math.min(255,i[2]*n)+", "+t+")"}return o}function getIconColor(e,t,n,o,i){let a,r,s;return t&&t.startsWith("light.")?(a=(i=e.states[t].attributes.rgb_color)?o(i)?"rgba(255,220,200,0.5)":`rgba(${i}, 0.5)`:n?"rgba(255,220,200, 0.5)":"rgba(255, 255, 255, 0.5)",r=i?o(i)?"rgb(255,220,200)":`rgb(${i})`:n?"rgba(255,220,200, 1)":"rgba(255, 255, 255, 1)",s=i?o(i)?"none":"brightness(1.1)":"none"):(a="var(--accent-color)",s="brightness(1.1)"),{iconColorOpacity:a,iconColor:r,iconFilter:s}}function getIconStyles(e,t,n,o){return`\n    .icon-container {\n        position: relative;\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        z-index: 1;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        cursor: pointer !important;\n        background-color: var(--card-background-color,var(--ha-card-background));\n    }\n    \n    .icon-container::after {\n        content: '';\n        position: absolute;\n        display: block;\n        opacity: ${e.startsWith("light.")?"0.2":"0"};\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        border-radius: 50%;\n        background-color: ${t?n||"var(--accent-color)":"var(--card-background-color,var(--ha-card-background))"};\n    }\n    \n    .icon {\n        display: flex;\n        width: 22px; \n        color: ${t?n||"var(--accent-color)":"inherit"} !important;\n        opacity: ${t?"1":e?"0.6":"1"};\n        filter: ${t?n?o:"brightness(1.1)":"inherit"};\n    }\n    \n    .entity-picture {\n        display: flex;\n        height: 38px;\n        width: 38px;\n        border-radius: 100%;\n    }\n    `}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{var e="v1.6.0-beta.3";const t=function(){try{return document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("div")}catch(e){return}}();var n=__webpack_require__(946);const o=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const i=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=n,e.dispatchEvent(i),i},i=e=>{o(window,"haptic",e)},a=(e,t,n=!1)=>{n?history.replaceState(null,"",t):history.pushState(null,"",t),o(window,"location-changed",{replace:n})};function r(e,t,n){const o={entity:t.entity,tap_action:{action:"more-info"},double_tap_action:{action:"toggle"},hold_action:{action:"toggle"}},i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={config:o,action:n},e.dispatchEvent(i)}let s,l,c,d,p;function h(e,t,o,i){let a=t.styles?t.styles:"",r=t.entity&&o.states[t.entity]?t.entity:"",p=!t.icon&&r?o.states[r].attributes.icon||o.states[r].attributes.entity_picture||"":t.icon||"",h=t.name?t.name:r?o.states[r].attributes.friendly_name:"",u=t.width_desktop||"540px",g=u?u.match(/(\d+)(\D+)/):"",b=t.is_sidebar_hidden||!1,_=r?o.states[r].state:"";!function(e,t,n){e.hasState=t.states[n],e.hasState&&(e.newState=[e.hasState.state,e.hasState.attributes.rgb_color],e.oldState&&e.newState[0]===e.oldState[0]&&e.newState[1]===e.oldState[1]?e.stateChanged=!1:(e.oldState=e.newState,e.stateChanged=!0),e.stateChanged)}(e,o,r);let m=e.stateChanged,f=["on","open","cleaning","true","home","playing"].includes(_)||0!==Number(_)&&!isNaN(Number(_)),y=void 0===t.rise_animation||t.rise_animation,w=t.margin?"0"!==t.margin?t.margin:"0px":"7px",v=void 0!==t.bg_opacity?t.bg_opacity:"88",x=void 0!==t.shadow_opacity?t.shadow_opacity:"0",k=void 0!==t.bg_blur?t.bg_blur:"10",{iconColorOpacity:S,iconColor:$,iconFilter:C}=(0,n.mk)(o,r,f,n.wW),E=(0,n.G)(r,f,$,C),I=getComputedStyle(document.body),T=I.getPropertyValue("--ha-card-background")||I.getPropertyValue("--card-background-color"),O=t.bg_color?t.bg_color:T;if(O&&(!e.color||O!==e.color)){const t=1.02;l=(0,n._k)(O,v/100,t),document.body.style.setProperty("--bubble-pop-up-background",l),e.color=O,window.color=O}return{customStyles:a,entityId:r,icon:p,name:h,widthDesktop:u,widthDesktopDivided:g,isSidebarHidden:b,state:_,stateChanged:m,stateOn:f,formatedState:d,riseAnimation:y,marginCenter:w,popUpOpen:s,rgbaColor:l,rgbColor:c,bgOpacity:v,shadowOpacity:x,bgBlur:k,iconColorOpacity:S,iconColor:$,iconFilter:C,iconStyles:E,haStyle:I,themeBgColor:T,color:O}}function u(e){const t=e._hass,s=e.editor,l=e.config;if(!t)return;let c,d,{customStyles:p,entityId:u,icon:g,name:b,widthDesktop:_,widthDesktopDivided:m,isSidebarHidden:f,state:y,stateChanged:w,stateOn:v,formatedState:x,riseAnimation:k,marginCenter:S,popUpOpen:$,rgbaColor:C,rgbColor:E,bgOpacity:I,shadowOpacity:T,bgBlur:O,iconColorOpacity:A,iconColor:L,iconFilter:M,iconStyles:V,haStyle:U,themeBgColor:q,color:D}=h(e,l,t),z=l.auto_close||!1,P=l.hash,R=l.trigger_entity?l.trigger_entity:"",W=l.trigger_state?l.trigger_state:"",B=!!l.trigger_close&&l.trigger_close;if(e.errorTriggered)return;e.initStyleAdded||e.popUp||s||(e.card.style.marginTop="4000px",e.initStyleAdded=!0);setTimeout((()=>{let a=e.getRootNode().querySelector("#root");if(a&&(!e.popUp||w||s&&!e.editorModeAdded)){e.popUp=a,(()=>{let a,h,k=e.popUp,E=l.text||"",I=l.state,A=l.margin_top_mobile&&"0"!==l.margin_top_mobile?l.margin_top_mobile:"0px",L=l.margin_top_desktop&&"0"!==l.margin_top_desktop?l.margin_top_desktop:"0px",M=l.entity?"flex":"none";if(y=I&&t.states[I]?t.states[I].state:"",x=I?t.formatEntityState(t.states[I]):"",e.headerAdded){if(u){const t=e.content.querySelector("#header-container .icon-container"),o=e.content.querySelector("#header-container h2"),i=e.content.querySelector("#header-container p"),a=e.content.querySelector("#header-container .power-button");t.innerHTML="",(0,n.IU)(e,u,g,t,s),o.textContent=b,i.textContent=x,a.setAttribute("style",`display: ${M};`)}}else{const t=document.createElement("div");t.setAttribute("id","header-container");const a=document.createElement("div");t.appendChild(a);const c=document.createElement("div");c.setAttribute("class","icon-container"),a.appendChild(c),(0,n.IU)(e,u,g,c,s),function(e,t,n,o){t.tap_action,t.double_tap_action,t.hold_action;let i,a,s=!1,l=0,c=0,d=0,p=0;e.addEventListener("mousedown",(()=>{d=Date.now(),a=setTimeout((()=>{r(e,t,"hold")}),300)}),{passive:!0}),e.addEventListener("mouseup",(()=>{clearTimeout(a),p=Date.now(),p-d<300&&(c++,1===c&&setTimeout((()=>{1===c?r(e,t,"tap"):(r(e,t,"double_tap"),o("success")),c=0}),300)),d=0,p=0}),{passive:!0}),e.addEventListener("touchstart",(n=>{s=!0,s&&o("light"),d=Date.now(),a=setTimeout((()=>{r(e,t,"hold")}),300),"touchstart"!==n.type&&n.preventDefault()}),{passive:!0}),e.addEventListener("touchend",(function(n){let o=(new Date).getTime(),s=o-l;clearTimeout(a),s<500&&s>0?(clearTimeout(i),r(e,t,"double_tap")):i=setTimeout((function(){r(e,t,"tap")}),300),l=o}),{passive:!0}),e.addEventListener("mouseout",(()=>{clearTimeout(a)}),{passive:!0}),e.addEventListener("touchcancel",(()=>{clearTimeout(a)}),{passive:!0})}(c,l,0,i);const d=document.createElement("h2");d.textContent=b,a.appendChild(d);const p=document.createElement("p");p.textContent=x,a.appendChild(p);const h=document.createElement("ha-icon");h.setAttribute("class","power-button"),h.setAttribute("icon","mdi:power"),h.setAttribute("style",`display: ${M};`),a.appendChild(h);const _=document.createElement("button");_.setAttribute("class","close-pop-up"),_.onclick=function(){history.replaceState(null,null,location.href.split("#")[0]),o(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+P,!0)},t.appendChild(_);const m=document.createElement("ha-icon");m.setAttribute("icon","mdi:close"),_.appendChild(m),e.content.appendChild(t),e.header=a,e.headerAdded=!0}function U(){!function(e,t){e.callService("homeassistant","toggle",{entity_id:t})}(t,u)}function q(e){"Escape"===e.key&&($=P+!1,history.replaceState(null,null,location.href.split("#")[0]),o(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+P,!0))}function R(e){window.hash===P&&j(),c=e.touches[0].clientY,d=c}function W(e){e.touches[0].clientY-c>300&&e.touches[0].clientY>d&&($=P+!1,history.replaceState(null,null,location.href.split("#")[0]),o(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+P,!0)),d=e.touches[0].clientY}if(e.eventAdded||s||(window["checkHashRef_"+P]=function(){s||(window.hash=location.hash.split("?")[0],window.hash===P?(k.classList.remove("close-pop-up"),k.classList.add("open-pop-up"),setTimeout((function(){B.querySelector(".power-button").addEventListener("click",U,{passive:!0}),window.addEventListener("keydown",q,{passive:!0}),k.addEventListener("touchstart",R,{passive:!0}),k.addEventListener("touchmove",W,{passive:!0}),$=P+!0,document.body.style.overflow="hidden",setTimeout((()=>{window.justOpened=!0}),10),H(k,!1),j()}),0)):k.classList.contains("open-pop-up")&&(k.classList.remove("open-pop-up"),k.classList.add("close-pop-up"),setTimeout((function(){B.querySelector(".power-button").removeEventListener("click",U),window.removeEventListener("keydown",q),k.removeEventListener("touchstart",R),k.removeEventListener("touchmove",W),$=P+!1,document.body.style.overflow="",window.justOpened=!1,clearTimeout(a)}),0),setTimeout((function(){H(k,!0)}),320)))},window.addEventListener("urlChanged",window["checkHashRef_"+P],{passive:!0}),window.addEventListener("click",(function(e){if(window.hash===P&&j(),!window.justOpened)return;const t=e.composedPath();!t||t.some((e=>"HA-MORE-INFO-DIALOG"===e.nodeName))||t.some((e=>"root"===e.id&&!e.classList.contains("close-pop-up")))||$!==P+!0||setTimeout((function(){window.hash===P&&($=P+!1,history.replaceState(null,null,location.href.split("#")[0]),o(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+P,!0))}),10)}),{passive:!0}),e.eventAdded=!0),u){const o=t.states[u].attributes.rgb_color;e.rgbColor=o?(0,n.wW)(o)?"rgb(255,220,200)":`rgb(${o})`:v?u.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"rgba(255, 255, 255, 1",e.rgbColorOpacity=o?(0,n.wW)(o)?"rgba(255,220,200, 0.5)":`rgba(${o}, 0.5)`:u&&v?u.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"var(--background-color,var(--secondary-background-color))",h=(0,n._k)(D,0),e.iconFilter=o?(0,n.wW)(o)?"none":"brightness(1.1)":"none"}else h=(0,n._k)(D,0);let B=e.content;function H(e,t){for(var n=e.querySelectorAll("video"),o=0;o<n.length;o++){var i=n[o]&&n[o].currentTime>0&&!n[o].paused&&!n[o].ended&&n[o].readyState>n[o].HAVE_CURRENT_DATA;t&&i?n[o].pause():t||i||(n[o].play(),n[o].currentTime>0&&(n[o].currentTime=1e4))}var a=e.querySelectorAll("*");for(o=0;o<a.length;o++)a[o].shadowRoot&&H(a[o].shadowRoot,t)}function j(){clearTimeout(a),z>0&&(a=setTimeout(F,z))}function F(){history.replaceState(null,null,location.href.split("#")[0]),o(window,"location-changed",!0)}const N=`                    \n            ha-card {\n                margin-top: 0 !important;\n                background: none !important;\n                border: none !important;\n            }\n            .card-content {\n                width: 100% !important;\n                padding: 0 !important;\n            }\n            #root {\n            \ttransition: transform .36s !important;\n                position: fixed !important;\n                margin: 0 -${S}; /* 7px */\n                width: 100%;\n                ${l.bg_color||l.bg_opacity?"--bubble-pop-up-background-custom: "+C:""};\n                background-color: var(--bubble-pop-up-background-custom, var(--bubble-pop-up-background));\n                box-shadow: 0px 0px 50px rgba(0,0,0,${T/100});\n                backdrop-filter: blur(${O}px);\n                -webkit-backdrop-filter: blur(${O}px);\n                border-radius: 42px;\n                box-sizing: border-box;\n                top: calc(120% + ${A} + var(--header-height));\n                grid-gap: 12px !important;\n                gap: 12px !important;\n                grid-auto-rows: min-content;\n                padding: 18px 18px 220px 18px !important;\n                height: 100% !important;\n                -ms-overflow-style: none; /* for Internet Explorer, Edge */\n                scrollbar-width: none; /* for Firefox */\n                overflow-y: auto; \n                overflow-x: hidden; \n                z-index: 1 !important; /* Higher value hide the more-info panel */\n                /* For older Safari but not working with Firefox */\n                /* display: grid !important; */  \n            }\n            #root.hidden {\n            \tdisplay: none !important;\n            }\n            #root > :first-child::after {\n                content: '';\n                display: block;\n                position: sticky;\n                top: 0;\n                left: -50px;\n                margin: -70px 0 -36px -36px;\n                overflow: visible;\n                width: 200%;\n                height: 100px;\n                background: linear-gradient(0deg, ${h} 0%, ${C} 80%);\n                z-index: 0;\n            } \n            #root::-webkit-scrollbar {\n                display: none; /* for Chrome, Safari, and Opera */\n            }\n            #root > :first-child {\n                position: sticky;\n                top: 0;\n                z-index: 1;\n                background: none !important;\n                overflow: visible;\n            }\n            #root.open-pop-up {\n                will-change: transform, backdrop-filter;\n                transform: translateY(-120%);\n            }\n            #root.open-pop-up > * {\n              /* Block child items to overflow and if they do clip them */\n              /*max-width: calc(100vw - 38px);*/\n              max-width: 100% !important;\n              /*overflow-x: clip;*/\n            }\n            #root.close-pop-up { \n                transform: translateY(-20%);\n                box-shadow: none;\n                backdrop-filter: none !important;\n            }\n            @media only screen and (min-width: 600px) {\n                #root {\n                    top: calc(120% + ${L} + var(--header-height));\n                    width: calc(${_}${"%"!==m[2]||f?"":" - var(--mdc-drawer-width)"}) !important;\n                    left: calc(50% - ${m[1]/2}${m[2]});\n                    margin: 0 !important;\n                }\n            }  \n            @media only screen and (min-width: 870px) {\n                #root {\n                    left: calc(50% - ${m[1]/2}${m[2]} + ${f?"0px":"var(--mdc-drawer-width) "+("%"===m[2]?"":"/ 2")});\n                }\n            }  \n            #root.editor {\n                position: inherit !important;\n                width: 100% !important;\n                padding: 18px !important;\n                backdrop-filter: none !important;\n            }\n        `,Y=`\n            ${V}\n\n            ha-card {\n                margin-top: 0 !important;\n            }\n            #header-container {\n                display: inline-flex;\n                ${g||b||u||y||E?"":"flex-direction: row-reverse;"}\n                height: 50px;\n                width: 100%;\n                margin: 0;\n                padding: 0;\n            }\n            #header-container > div {\n                display: ${g||b||u||y||E?"inline-flex":"none"};\n                align-items: center;\n                position: relative;\n                padding-right: 6px;\n                z-index: 1;\n                flex-grow: 1;\n                background-color: ${u?e.rgbColorOpacity:"var(--background-color,var(--secondary-background-color))"};\n                transition: background 1s;\n                border-radius: 25px;\n                margin-right: 14px;\n                backdrop-filter: blur(14px);\n                -webkit-backdrop-filter: blur(14px);\n            }\n            #header-container h2 {\n                display: inline-flex;\n                margin: 0 18px 0 0;\n                padding: 4px;\n                z-index: 1;\n                font-size: 18px;\n            }\n            #header-container p {\n                display: inline-flex;\n                font-size: 16px;\n                min-width: fit-content ;\n            }\n            .power-button {\n                cursor: pointer; \n                flex-grow: inherit; \n                width: 24px;\n                height: 24px;\n                border-radius: 12px;\n                margin: 0 10px;\n                background: none !important;\n                justify-content: flex-end;\n                background-color: var(--background-color,var(--secondary-background-color));\n            }\n            .close-pop-up {\n                height: 50px;\n                width: 50px;\n                border: none;\n                border-radius: 50%;\n                z-index: 1;\n                background: var(--background-color,var(--secondary-background-color));\n                color: var(--primary-text-color);\n                flex-shrink: 0;\n                cursor: pointer;\n            }\n        `;e.popUpStyleAdded||((0,n.L2)(t,e,N,p,y,u,"","",k),e.popUpStyleAdded=!0),(0,n.L2)(t,e,Y,p,y,u,w)})();const h=new Event("popUpInitialized");window.dispatchEvent(h),s&&e.popUp&&!e.editorModeAdded&&(e.popUp.classList.add("editor"),e.popUp.classList.remove("close-pop-up","open-pop-up"),e.editorModeAdded=!0)}else!s&&e.popUp&&e.editorModeAdded&&(e.popUp.classList.remove("editor"),e.editorModeAdded=!1)}),0),setTimeout((()=>{if(e.popUp&&R&&w){null===localStorage.getItem("previousTriggerState_"+P)&&localStorage.setItem("previousTriggerState_"+P,""),null===localStorage.getItem("isManuallyClosed_"+P)&&localStorage.setItem("isManuallyClosed_"+P,"false"),null===localStorage.getItem("isTriggered_"+P)&&localStorage.setItem("isTriggered_"+P,"false");let n=localStorage.getItem("previousTriggerState_"+P),i="true"===localStorage.getItem("isManuallyClosed_"+P),r="true"===localStorage.getItem("isTriggered_"+P);t.states[R].state!==W||null!==n||r||(a(0,P),r=!0,localStorage.setItem("isTriggered_"+P,r)),t.states[R].state!==n&&(i=!1,localStorage.setItem("previousTriggerState_"+P,t.states[R].state),localStorage.setItem("isManuallyClosed_"+P,i)),t.states[R].state!==W||i?t.states[R].state!==W&&B&&e.popUp.classList.contains("open-pop-up")&&r&&!i&&(history.replaceState(null,null,location.href.split("#")[0]),o(window,"location-changed",!0),$=P+!1,r=!1,i=!0,localStorage.setItem("isManuallyClosed_"+P,i),localStorage.setItem("isTriggered_"+P,r)):(a(0,P),r=!0,localStorage.setItem("isTriggered_"+P,r))}}),0)}new MutationObserver(((t,n)=>{if(customElements.get("ha-panel-lovelace")){const t=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),i=t.prototype.html,a=t.prototype.css;class r extends t{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _text(){return this._config.text||""}get _hash(){return this._config.hash||"#pop-up-name"}get _trigger_entity(){return this._config.trigger_entity||""}get _trigger_state(){return this._config.trigger_state||""}get _trigger_close(){return this._config.trigger_close||!1}get _margin(){return this._config.margin||"7px"}get _margin_top_mobile(){return this._config.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config.margin_top_desktop||"0px"}get _width_desktop(){return this._config.width_desktop||"540px"}get _bg_color(){return this._config.bg_color||window.color}get _bg_opacity(){return void 0!==this._config.bg_opacity?this._config.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config.bg_blur?this._config.bg_blur:"14"}get _shadow_opacity(){return void 0!==this._config.shadow_opacity?this._config.shadow_opacity:"0"}get _is_sidebar_hidden(){return this._config.is_sidebar_hidden||!1}get _auto_close(){return this._config.auto_close||""}get _back_open(){return this._config.back_open||!1}render(){if(!this.hass)return i``;if(!this.listsUpdated){const e=e=>({label:e,value:e});this.allEntitiesList=Object.keys(this.hass.states).map(e),this.listsUpdated=!0}const e=this.allEntitiesList;return this.lightList,this.cardTypeList,this.buttonTypeList,i`
                    <div class="card-config">
                        <h3>Pop-up 
                            <span style="
                                font-size: 10px !important;
                                color: #fff;
                                background: rgb(0,140,90);
                                padding: 2px 6px;
                                border-radius: 8px;
                            ">
                                👍 Optimized mode
                            </span>
                        </h3>
                        <ha-alert alert-type="info">This card allows you to convert any vertical stack into a pop-up. Each pop-up can be opened by targeting its link (e.g. '#pop-up-name'), with navigation_path or with the horizontal buttons stack that is included.<br><b>It must be placed within a vertical-stack card at the top most position to function properly. The pop-up will be hidden by default until you open it.</b></ha-alert>
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
                            .value="${this._auto_close}"
                            .configValue="${"auto_close"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
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
                        <div style="display: inline-flex;">
                            <ha-textfield
                                label="Optional - Background opacity"
                                .value="${this._bg_opacity}"
                                .configValue="${"bg_opacity"}"
                                @input="${this._valueChanged}"
                                style="width: 50%;"
                            ></ha-textfield>
                            <ha-slider
                              .value="${this._bg_opacity}"
                              .configValue="${"bg_opacity"}"
                              .min='0'
                              .max='100'
                              @change=${this._valueChanged}
                              style="width: 50%;"
                            ></ha-slider>
                        </div>
                        <div style="display: inline-flex;">
                            <ha-textfield
                                label="Optional - Background blur"
                                .value="${this._bg_blur}"
                                .configValue="${"bg_blur"}"
                                @input="${this._valueChanged}"
                                style="width: 50%;"
                            ></ha-textfield>
                            <ha-slider
                              .value="${this._bg_blur}"
                              .configValue="${"bg_blur"}"
                              .min='0'
                              .max='100'
                              @change=${this._valueChanged}
                              style="width: 50%;"
                            ></ha-slider>
                        </div>
                        <div style="display: inline-flex;">
                            <ha-textfield
                                label="Optional - Shadow opacity"
                                .value="${this._shadow_opacity}"
                                .configValue="${"shadow_opacity"}"
                                @input="${this._valueChanged}"
                                style="width: 50%;"
                            ></ha-textfield>
                            <ha-slider
                              .value="${this._shadow_opacity}"
                              .configValue="${"shadow_opacity"}"
                              .min='0'
                              .max='100'
                              @change=${this._valueChanged}
                              style="width: 50%;"
                            ></ha-slider>
                        </div>
                        <ha-alert alert-type="info">You can't set a value to 0 with the sliders for now, just change it to 0 in the text field if you need to.</ha-alert>
                        ${this.makeVersion()}
                  </div>
                `}makeDropdown(e,t,n){return this.hass,e.includes("icon")||e.includes("Icon")?i`
                        <div>
                            <ha-icon-picker
                                label="${e}"
                                .value="${this["_"+t]}"
                                .configValue="${t}"
                                item-label-path="label"
                                item-value-path="value"
                                @value-changed="${this._valueChanged}"
                            ></ha-icon-picker>
                        </div>
                    `:i`
                    <div>
                        <ha-combo-box
                            label="${e}"
                            .value="${this["_"+t]}"
                            .configValue="${t}"
                            .items="${n}"
                            @value-changed="${this._valueChanged}"
                        ></ha-combo-box>
                    </div>
                  `}makeVersion(){return i`
                    <h4 style="
                        font-size: 12px !important;
                        color: #fff;
                        background: rgba(0,0,0,0.1);
                        padding: 8px 16px;
                        border-radius: 32px;
                    ">
                        Bubble Card - Pop-up 
                        <span style="
                            font-size: 10px;
                            background: rgba(0,120,180,1);
                            padding: 0px 8px;
                            border-radius: 12px;
                            margin-right: -6px;
                            float: right;
                        ">
                            ${e}
                        </span>
                    </h4>
                `}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target,n=e.detail;t.configValue&&("ha-switch"===t.type?this._config={...this._config,[t.configValue]:t.checked}:this._config={...this._config,[t.configValue]:void 0===t.checked&&n.value?t.checked||n.value:t.value||t.checked}),o(this,"config-changed",{config:this._config})}static get styles(){return a`
              div {
                display: grid;
                grid-gap: 12px;
              }
            `}}customElements.define("bubble-pop-up-editor",r),n.disconnect()}})).observe(document,{childList:!0,subtree:!0}),function(){if(!window.eventAdded){const e=new Event("urlChanged");function t(){let t=0;window.dispatchEvent(e);const n=setInterval((()=>{t<10?(window.dispatchEvent(e),t++):clearInterval(n)}),1e3)}window.popUpInitialized=!1,["location-changed","connection-status"].forEach((e=>{window.addEventListener(e,t)}),{passive:!0});const n=()=>{window.dispatchEvent(e),window.addEventListener("popstate",t,{passive:!0})};window.addEventListener("popUpInitialized",n,{passive:!0}),window.eventAdded=!0}}();class g extends HTMLElement{set hass(e){var n;this._hass=e,p=function(){if(t)return t.classList.contains("edit-mode")}(),this.editor=p,(n=this).content||(n.attachShadow({mode:"open"}),n.shadowRoot.innerHTML='\n            <ha-card style="background: none; border: none; box-shadow: none; border-radius: 16px;">\n                <div class="card-content" style="padding: 0;">\n                </div>\n            </ha-card>\n        ',n.card=n.shadowRoot.querySelector("ha-card"),n.content=n.shadowRoot.querySelector("div")),u(this)}setConfig(e){if(!e.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.");this.config=e}getCardSize(){return-1e4}static getConfigElement(){return document.createElement("bubble-pop-up-editor")}}new MutationObserver(((e,t)=>{customElements.get("ha-panel-lovelace")&&(customElements.define("bubble-pop-up",g),t.disconnect())})).observe(document,{childList:!0,subtree:!0}),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-pop-up",name:"Bubble Pop-up",preview:!1,description:"Just add it in a vertical-stack first."}),console.info(`%c Bubble Card - Pop-up %c ${e} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})()})();
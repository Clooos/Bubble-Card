(()=>{"use strict";var __webpack_modules__={946:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>getIconStyles,IU:()=>createIcon,L2:()=>addStyles,_k:()=>convertToRGBA,mk:()=>getIconColor,wW:()=>isColorCloseToWhite});const addStyles=function(hass,context,styles,customStyles,state,entityId,stateChanged,path="",element=context.content){const customStylesEval=customStyles?eval("`"+customStyles+"`"):"";let styleAddedKey=styles+"Added";if(!context[styleAddedKey]||context.previousStyle!==customStylesEval||stateChanged||context.previousConfig!==context.config){if(!context[styleAddedKey]){if(context.styleElement=element.querySelector("style"),!context.styleElement){context.styleElement=document.createElement("style");const t=path?element.querySelector(path):element;t?.appendChild(context.styleElement)}context[styleAddedKey]=!0}context.styleElement.innerHTML!==customStylesEval+styles&&(context.styleElement.innerHTML=customStylesEval+styles),context.previousStyle=customStylesEval,context.previousConfig=context.config}};function createIcon(t,e,n,o,i){let a=t._hass,r=!(!e||!a.states[e].attributes)&&a.states[e].attributes;t.imageUrl=!!r.entity_picture&&r.entity_picture,updateIcon(t,a,e,n,o),i||setInterval((()=>{a=t._hass,e&&a.states[e]&&(t.currentEntityPicture=a.states[e].attributes.entity_picture,t.currentEntityPicture!==t.previousEntityPicture&&(t.imageUrl=t.currentEntityPicture,updateIcon(t,a,e,n,o),t.previousEntityPicture=t.currentEntityPicture))}),1e3)}function updateIcon(t,e,n,o,i){for(;i.firstChild;)i.removeChild(i.firstChild);let a=t.config.icon&&t.config.icon.includes("/")?t.config.icon:t.imageUrl?t.imageUrl:"";if(a&&(r=e.states[n].state,n.startsWith("media_player.")&&!["off","unknown","idle",void 0].includes(r)||!n.startsWith("media_player."))){const t=document.createElement("div");t.setAttribute("class","entity-picture"),t.setAttribute("alt","Icon"),i&&(i.appendChild(t),i.style.background="center / cover no-repeat url("+a+"), var(--card-background-color,var(--ha-card-background))")}else{const t=document.createElement("ha-icon");t.setAttribute("icon",o),t.setAttribute("class","icon"),i&&i.appendChild(t)}var r}function isColorCloseToWhite(t){let e=[220,220,190];for(let n=0;n<3;n++)if(t[n]<e[n])return!1;return!0}function convertToRGBA(t,e,n=1){let o="";if(t.startsWith("#"))o=4===t.length?"rgba("+Math.min(255,parseInt(t.charAt(1).repeat(2),16)*n)+", "+Math.min(255,parseInt(t.charAt(2).repeat(2),16)*n)+", "+Math.min(255,parseInt(t.charAt(3).repeat(2),16)*n)+", "+e+")":"rgba("+Math.min(255,parseInt(t.slice(1,3),16)*n)+", "+Math.min(255,parseInt(t.slice(3,5),16)*n)+", "+Math.min(255,parseInt(t.slice(5,7),16)*n)+", "+e+")";else if(t.startsWith("rgb")){let i=t.match(/\d+/g);t.includes("rgba"),o="rgba("+Math.min(255,i[0]*n)+", "+Math.min(255,i[1]*n)+", "+Math.min(255,i[2]*n)+", "+e+")"}return o}function getIconColor(t,e,n,o,i){let a,r,s;return e&&e.startsWith("light.")?(a=(i=t.states[e].attributes.rgb_color)?o(i)?"rgba(255,220,200,0.5)":`rgba(${i}, 0.5)`:n?"rgba(255,220,200, 0.5)":"rgba(255, 255, 255, 0.5)",r=i?o(i)?"rgb(255,220,200)":`rgb(${i})`:n?"rgba(255,220,200, 1)":"rgba(255, 255, 255, 1)",s=i?o(i)?"none":"brightness(1.1)":"none"):(a="var(--accent-color)",s="brightness(1.1)"),{iconColorOpacity:a,iconColor:r,iconFilter:s}}function getIconStyles(t,e,n,o){return`\n    .icon-container {\n        position: relative;\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        z-index: 1;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        cursor: pointer !important;\n        background-color: var(--card-background-color,var(--ha-card-background));\n    }\n    \n    .icon-container::after {\n        content: '';\n        position: absolute;\n        display: block;\n        opacity: ${t.startsWith("light.")?"0.2":"0"};\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        border-radius: 50%;\n        background-color: ${e?n||"var(--accent-color)":"var(--card-background-color,var(--ha-card-background))"};\n    }\n    \n    .icon {\n        display: flex;\n        width: 22px; \n        color: ${e?n||"var(--accent-color)":"inherit"} !important;\n        opacity: ${e?"1":t?"0.6":"1"};\n        filter: ${e?n?o:"brightness(1.1)":"inherit"};\n    }\n    \n    .entity-picture {\n        display: flex;\n        height: 38px;\n        width: 38px;\n        border-radius: 100%;\n    }\n    `}}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(t,e)=>{for(var n in e)__webpack_require__.o(e,n)&&!__webpack_require__.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var __webpack_exports__={};(()=>{var t="v1.6.0-beta.3";const e=function(){try{return document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("div")}catch(t){return}}();function n(){if(e)return e.classList.contains("edit-mode")}var o=__webpack_require__(946);const i=(t,e,n,o)=>{o=o||{},n=null==n?{}:n;const i=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=n,t.dispatchEvent(i),i},a=t=>{i(window,"haptic",t)},r=(t,e,n=!1)=>{n?history.replaceState(null,"",e):history.pushState(null,"",e),i(window,"location-changed",{replace:n})};function s(t,e){t.callService("homeassistant","toggle",{entity_id:e})}function l(t,e,n){const o={entity:e.entity,tap_action:{action:"more-info"},double_tap_action:{action:"toggle"},hold_action:{action:"toggle"}},i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={config:o,action:n},t.dispatchEvent(i)}function c(t,e,n,o){e.tap_action,e.double_tap_action,e.hold_action;let i,a,r=!1,s=0,c=0,d=0,p=0;t.addEventListener("mousedown",(()=>{d=Date.now(),a=setTimeout((()=>{l(t,e,"hold")}),300)}),{passive:!0}),t.addEventListener("mouseup",(()=>{clearTimeout(a),p=Date.now(),p-d<300&&(c++,1===c&&setTimeout((()=>{1===c?l(t,e,"tap"):(l(t,e,"double_tap"),o("success")),c=0}),300)),d=0,p=0}),{passive:!0}),t.addEventListener("touchstart",(n=>{r=!0,r&&o("light"),d=Date.now(),a=setTimeout((()=>{l(t,e,"hold")}),300),"touchstart"!==n.type&&n.preventDefault()}),{passive:!0}),t.addEventListener("touchend",(function(n){let o=(new Date).getTime(),r=o-s;clearTimeout(a),r<500&&r>0?(clearTimeout(i),l(t,e,"double_tap")):i=setTimeout((function(){l(t,e,"tap")}),300),s=o}),{passive:!0}),t.addEventListener("mouseout",(()=>{clearTimeout(a)}),{passive:!0}),t.addEventListener("touchcancel",(()=>{clearTimeout(a)}),{passive:!0})}let d,p,h,u;function g(t,e,n,i){let a=e.styles?e.styles:"",r=e.entity&&n.states[e.entity]?e.entity:"",s=!e.icon&&r?n.states[r].attributes.icon||n.states[r].attributes.entity_picture||"":e.icon||"",l=e.name?e.name:r?n.states[r].attributes.friendly_name:"",c=e.width_desktop||"540px",g=c?c.match(/(\d+)(\D+)/):"",m=e.is_sidebar_hidden||!1,b=r?n.states[r].state:"";!function(t,e,n){t.hasState=e.states[n],t.hasState&&(t.newState=[t.hasState.state,t.hasState.attributes.rgb_color],t.oldState&&t.newState[0]===t.oldState[0]&&t.newState[1]===t.oldState[1]?t.stateChanged=!1:(t.oldState=t.newState,t.stateChanged=!0),t.stateChanged)}(t,n,r);let f=t.stateChanged,_=["on","open","cleaning","true","home","playing"].includes(b)||0!==Number(b)&&!isNaN(Number(b)),v=void 0===e.rise_animation||e.rise_animation,y=e.margin?"0"!==e.margin?e.margin:"0px":"7px",w=void 0!==e.bg_opacity?e.bg_opacity:"88",x=void 0!==e.shadow_opacity?e.shadow_opacity:"0",k=void 0!==e.bg_blur?e.bg_blur:"10",{iconColorOpacity:C,iconColor:$,iconFilter:S}=(0,o.mk)(n,r,_,o.wW),E=(0,o.G)(r,_,$,S),O=getComputedStyle(document.body),L=O.getPropertyValue("--ha-card-background")||O.getPropertyValue("--card-background-color"),A=e.bg_color?e.bg_color:L;if(A&&(!t.color||A!==t.color)){const e=1.02;p=(0,o._k)(A,w/100,e),document.body.style.setProperty("--bubble-pop-up-background",p),t.color=A,window.color=A}return{customStyles:a,entityId:r,icon:s,name:l,widthDesktop:c,widthDesktopDivided:g,isSidebarHidden:m,state:b,stateChanged:f,stateOn:_,formatedState:u,riseAnimation:v,marginCenter:y,popUpOpen:d,rgbaColor:p,rgbColor:h,bgOpacity:w,shadowOpacity:x,bgBlur:k,iconColorOpacity:C,iconColor:$,iconFilter:S,iconStyles:E,haStyle:O,themeBgColor:L,color:A}}function m(t){const e=t._hass,n=t.editor,l=t.config;if(!e)return;let d,p,{customStyles:h,entityId:u,icon:m,name:b,widthDesktop:f,widthDesktopDivided:_,isSidebarHidden:v,state:y,stateChanged:w,stateOn:x,formatedState:k,riseAnimation:C,marginCenter:$,popUpOpen:S,rgbaColor:E,rgbColor:O,bgOpacity:L,shadowOpacity:A,bgBlur:I,iconColorOpacity:T,iconColor:V,iconFilter:D,iconStyles:M,haStyle:z,themeBgColor:B,color:q}=g(t,l,e),H=l.auto_close||!1,U=l.hash,Y=l.trigger_entity?l.trigger_entity:"",W=l.trigger_state?l.trigger_state:"",F=!!l.trigger_close&&l.trigger_close;if(t.errorTriggered)return;t.initStyleAdded||t.popUp||n||(t.card.style.marginTop="4000px",t.initStyleAdded=!0);setTimeout((()=>{let r=t.getRootNode().querySelector("#root");if(r&&(!t.popUp||w||n&&!t.editorModeAdded)){t.popUp=r,(()=>{let r,g,C=t.popUp,O=l.text||"",L=l.state,T=l.margin_top_mobile&&"0"!==l.margin_top_mobile?l.margin_top_mobile:"0px",V=l.margin_top_desktop&&"0"!==l.margin_top_desktop?l.margin_top_desktop:"0px",D=l.entity?"flex":"none";if(y=L&&e.states[L]?e.states[L].state:"",k=L?e.formatEntityState(e.states[L]):"",t.headerAdded){if(u){const e=t.content.querySelector("#header-container .icon-container"),i=t.content.querySelector("#header-container h2"),a=t.content.querySelector("#header-container p"),r=t.content.querySelector("#header-container .power-button");e.innerHTML="",(0,o.IU)(t,u,m,e,n),i.textContent=b,a.textContent=k,r.setAttribute("style",`display: ${D};`)}}else{const e=document.createElement("div");e.setAttribute("id","header-container");const r=document.createElement("div");e.appendChild(r);const s=document.createElement("div");s.setAttribute("class","icon-container"),r.appendChild(s),(0,o.IU)(t,u,m,s,n),c(s,l,0,a);const d=document.createElement("h2");d.textContent=b,r.appendChild(d);const p=document.createElement("p");p.textContent=k,r.appendChild(p);const h=document.createElement("ha-icon");h.setAttribute("class","power-button"),h.setAttribute("icon","mdi:power"),h.setAttribute("style",`display: ${D};`),r.appendChild(h);const g=document.createElement("button");g.setAttribute("class","close-pop-up"),g.onclick=function(){history.replaceState(null,null,location.href.split("#")[0]),i(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+U,!0)},e.appendChild(g);const f=document.createElement("ha-icon");f.setAttribute("icon","mdi:close"),g.appendChild(f),t.content.appendChild(e),t.header=r,t.headerAdded=!0}function z(){s(e,u)}function B(t){"Escape"===t.key&&(S=U+!1,history.replaceState(null,null,location.href.split("#")[0]),i(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+U,!0))}function Y(t){window.hash===U&&R(),d=t.touches[0].clientY,p=d}function W(t){t.touches[0].clientY-d>300&&t.touches[0].clientY>p&&(S=U+!1,history.replaceState(null,null,location.href.split("#")[0]),i(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+U,!0)),p=t.touches[0].clientY}if(t.eventAdded||n||(window["checkHashRef_"+U]=function(){n||(window.hash=location.hash.split("?")[0],window.hash===U?(C.classList.remove("close-pop-up"),C.classList.add("open-pop-up"),setTimeout((function(){F.querySelector(".power-button").addEventListener("click",z,{passive:!0}),window.addEventListener("keydown",B,{passive:!0}),C.addEventListener("touchstart",Y,{passive:!0}),C.addEventListener("touchmove",W,{passive:!0}),S=U+!0,document.body.style.overflow="hidden",setTimeout((()=>{window.justOpened=!0}),10),P(C,!1),R()}),0)):C.classList.contains("open-pop-up")&&(C.classList.remove("open-pop-up"),C.classList.add("close-pop-up"),setTimeout((function(){F.querySelector(".power-button").removeEventListener("click",z),window.removeEventListener("keydown",B),C.removeEventListener("touchstart",Y),C.removeEventListener("touchmove",W),S=U+!1,document.body.style.overflow="",window.justOpened=!1,clearTimeout(r)}),0),setTimeout((function(){P(C,!0)}),320)))},window.addEventListener("urlChanged",window["checkHashRef_"+U],{passive:!0}),window.addEventListener("click",(function(t){if(window.hash===U&&R(),!window.justOpened)return;const e=t.composedPath();!e||e.some((t=>"HA-MORE-INFO-DIALOG"===t.nodeName))||e.some((t=>"root"===t.id&&!t.classList.contains("close-pop-up")))||S!==U+!0||setTimeout((function(){window.hash===U&&(S=U+!1,history.replaceState(null,null,location.href.split("#")[0]),i(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+U,!0))}),10)}),{passive:!0}),t.eventAdded=!0),u){const n=e.states[u].attributes.rgb_color;t.rgbColor=n?(0,o.wW)(n)?"rgb(255,220,200)":`rgb(${n})`:x?u.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"rgba(255, 255, 255, 1",t.rgbColorOpacity=n?(0,o.wW)(n)?"rgba(255,220,200, 0.5)":`rgba(${n}, 0.5)`:u&&x?u.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"var(--background-color,var(--secondary-background-color))",g=(0,o._k)(q,0),t.iconFilter=n?(0,o.wW)(n)?"none":"brightness(1.1)":"none"}else g=(0,o._k)(q,0);let F=t.content;function P(t,e){for(var n=t.querySelectorAll("video"),o=0;o<n.length;o++){var i=n[o]&&n[o].currentTime>0&&!n[o].paused&&!n[o].ended&&n[o].readyState>n[o].HAVE_CURRENT_DATA;e&&i?n[o].pause():e||i||(n[o].play(),n[o].currentTime>0&&(n[o].currentTime=1e4))}var a=t.querySelectorAll("*");for(o=0;o<a.length;o++)a[o].shadowRoot&&P(a[o].shadowRoot,e)}function R(){clearTimeout(r),H>0&&(r=setTimeout(j,H))}function j(){history.replaceState(null,null,location.href.split("#")[0]),i(window,"location-changed",!0)}const X=`                    \n            ha-card {\n                margin-top: 0 !important;\n                background: none !important;\n                border: none !important;\n            }\n            .card-content {\n                width: 100% !important;\n                padding: 0 !important;\n            }\n            #root {\n            \ttransition: transform .36s !important;\n                position: fixed !important;\n                margin: 0 -${$}; /* 7px */\n                width: 100%;\n                ${l.bg_color||l.bg_opacity?"--bubble-pop-up-background-custom: "+E:""};\n                background-color: var(--bubble-pop-up-background-custom, var(--bubble-pop-up-background));\n                box-shadow: 0px 0px 50px rgba(0,0,0,${A/100});\n                backdrop-filter: blur(${I}px);\n                -webkit-backdrop-filter: blur(${I}px);\n                border-radius: 42px;\n                box-sizing: border-box;\n                top: calc(120% + ${T} + var(--header-height));\n                grid-gap: 12px !important;\n                gap: 12px !important;\n                grid-auto-rows: min-content;\n                padding: 18px 18px 220px 18px !important;\n                height: 100% !important;\n                -ms-overflow-style: none; /* for Internet Explorer, Edge */\n                scrollbar-width: none; /* for Firefox */\n                overflow-y: auto; \n                overflow-x: hidden; \n                z-index: 1 !important; /* Higher value hide the more-info panel */\n                /* For older Safari but not working with Firefox */\n                /* display: grid !important; */  \n            }\n            #root.hidden {\n            \tdisplay: none !important;\n            }\n            #root > :first-child::after {\n                content: '';\n                display: block;\n                position: sticky;\n                top: 0;\n                left: -50px;\n                margin: -70px 0 -36px -36px;\n                overflow: visible;\n                width: 200%;\n                height: 100px;\n                background: linear-gradient(0deg, ${g} 0%, ${E} 80%);\n                z-index: 0;\n            } \n            #root::-webkit-scrollbar {\n                display: none; /* for Chrome, Safari, and Opera */\n            }\n            #root > :first-child {\n                position: sticky;\n                top: 0;\n                z-index: 1;\n                background: none !important;\n                overflow: visible;\n            }\n            #root.open-pop-up {\n                will-change: transform, backdrop-filter;\n                transform: translateY(-120%);\n            }\n            #root.open-pop-up > * {\n              /* Block child items to overflow and if they do clip them */\n              /*max-width: calc(100vw - 38px);*/\n              max-width: 100% !important;\n              /*overflow-x: clip;*/\n            }\n            #root.close-pop-up { \n                transform: translateY(-20%);\n                box-shadow: none;\n                backdrop-filter: none !important;\n            }\n            @media only screen and (min-width: 600px) {\n                #root {\n                    top: calc(120% + ${V} + var(--header-height));\n                    width: calc(${f}${"%"!==_[2]||v?"":" - var(--mdc-drawer-width)"}) !important;\n                    left: calc(50% - ${_[1]/2}${_[2]});\n                    margin: 0 !important;\n                }\n            }  \n            @media only screen and (min-width: 870px) {\n                #root {\n                    left: calc(50% - ${_[1]/2}${_[2]} + ${v?"0px":"var(--mdc-drawer-width) "+("%"===_[2]?"":"/ 2")});\n                }\n            }  \n            #root.editor {\n                position: inherit !important;\n                width: 100% !important;\n                padding: 18px !important;\n                backdrop-filter: none !important;\n            }\n        `,N=`\n            ${M}\n\n            ha-card {\n                margin-top: 0 !important;\n            }\n            #header-container {\n                display: inline-flex;\n                ${m||b||u||y||O?"":"flex-direction: row-reverse;"}\n                height: 50px;\n                width: 100%;\n                margin: 0;\n                padding: 0;\n            }\n            #header-container > div {\n                display: ${m||b||u||y||O?"inline-flex":"none"};\n                align-items: center;\n                position: relative;\n                padding-right: 6px;\n                z-index: 1;\n                flex-grow: 1;\n                background-color: ${u?t.rgbColorOpacity:"var(--background-color,var(--secondary-background-color))"};\n                transition: background 1s;\n                border-radius: 25px;\n                margin-right: 14px;\n                backdrop-filter: blur(14px);\n                -webkit-backdrop-filter: blur(14px);\n            }\n            #header-container h2 {\n                display: inline-flex;\n                margin: 0 18px 0 0;\n                padding: 4px;\n                z-index: 1;\n                font-size: 18px;\n            }\n            #header-container p {\n                display: inline-flex;\n                font-size: 16px;\n                min-width: fit-content ;\n            }\n            .power-button {\n                cursor: pointer; \n                flex-grow: inherit; \n                width: 24px;\n                height: 24px;\n                border-radius: 12px;\n                margin: 0 10px;\n                background: none !important;\n                justify-content: flex-end;\n                background-color: var(--background-color,var(--secondary-background-color));\n            }\n            .close-pop-up {\n                height: 50px;\n                width: 50px;\n                border: none;\n                border-radius: 50%;\n                z-index: 1;\n                background: var(--background-color,var(--secondary-background-color));\n                color: var(--primary-text-color);\n                flex-shrink: 0;\n                cursor: pointer;\n            }\n        `;t.popUpStyleAdded||((0,o.L2)(e,t,X,h,y,u,"","",C),t.popUpStyleAdded=!0),(0,o.L2)(e,t,N,h,y,u,w)})();const g=new Event("popUpInitialized");window.dispatchEvent(g),n&&t.popUp&&!t.editorModeAdded&&(t.popUp.classList.add("editor"),t.popUp.classList.remove("close-pop-up","open-pop-up"),t.editorModeAdded=!0)}else!n&&t.popUp&&t.editorModeAdded&&(t.popUp.classList.remove("editor"),t.editorModeAdded=!1)}),0),setTimeout((()=>{if(t.popUp&&Y&&w){null===localStorage.getItem("previousTriggerState_"+U)&&localStorage.setItem("previousTriggerState_"+U,""),null===localStorage.getItem("isManuallyClosed_"+U)&&localStorage.setItem("isManuallyClosed_"+U,"false"),null===localStorage.getItem("isTriggered_"+U)&&localStorage.setItem("isTriggered_"+U,"false");let n=localStorage.getItem("previousTriggerState_"+U),o="true"===localStorage.getItem("isManuallyClosed_"+U),a="true"===localStorage.getItem("isTriggered_"+U);e.states[Y].state!==W||null!==n||a||(r(0,U),a=!0,localStorage.setItem("isTriggered_"+U,a)),e.states[Y].state!==n&&(o=!1,localStorage.setItem("previousTriggerState_"+U,e.states[Y].state),localStorage.setItem("isManuallyClosed_"+U,o)),e.states[Y].state!==W||o?e.states[Y].state!==W&&F&&t.popUp.classList.contains("open-pop-up")&&a&&!o&&(history.replaceState(null,null,location.href.split("#")[0]),i(window,"location-changed",!0),S=U+!1,a=!1,o=!0,localStorage.setItem("isManuallyClosed_"+U,o),localStorage.setItem("isTriggered_"+U,a)):(r(0,U),a=!0,localStorage.setItem("isTriggered_"+U,a))}}),0)}const b=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),f=b.prototype.html,_=b.prototype.css;let v;!function(){if(!window.eventAdded){const t=new Event("urlChanged");function e(){let e=0;window.dispatchEvent(t);const n=setInterval((()=>{e<10?(window.dispatchEvent(t),e++):clearInterval(n)}),1e3)}window.popUpInitialized=!1,["location-changed","connection-status"].forEach((t=>{window.addEventListener(t,e)}),{passive:!0});const n=()=>{window.dispatchEvent(t),window.addEventListener("popstate",e,{passive:!0})};window.addEventListener("popUpInitialized",n,{passive:!0}),window.eventAdded=!0}}();class y extends HTMLElement{set hass(e){var i;switch(this._hass=e,v=n(),this.editor=v,async function(e){if(!window.resourcesChecked){window.resourcesChecked=!0;let n=t;const o=localStorage.getItem("version");customElements.get("bubble-pop-up"),o!==n&&(localStorage.setItem("version",n),location.reload());let i=(await e.callWS({type:"lovelace/resources"})).find((t=>t.url.includes("bubble-pop-up.js")));i&&await e.callWS({type:"lovelace/resources/delete",resource_id:i.id})}}(e),(i=this).content||(i.attachShadow({mode:"open"}),i.shadowRoot.innerHTML='\n            <ha-card style="background: none; border: none; box-shadow: none; border-radius: 16px;">\n                <div class="card-content" style="padding: 0;">\n                </div>\n            </ha-card>\n        ',i.card=i.shadowRoot.querySelector("ha-card"),i.content=i.shadowRoot.querySelector("div")),this.config.card_type){case"pop-up":m(this);break;case"horizontal-buttons-stack":!function(t){const e=t._hass;let i,{customStyles:s,entityId:l,icon:c,name:d,widthDesktop:p,widthDesktopDivided:h,isSidebarHidden:u,state:m,stateChanged:b,stateOn:f,riseAnimation:_,marginCenter:v,popUpOpen:y,rgbaColor:w,rgbColor:x,bgOpacity:k,shadowOpacity:C,bgBlur:$,iconColorOpacity:S,iconColor:E,iconFilter:O,iconStyles:L,haStyle:A,themeBgColor:I,color:T}=g(t,t.config,e);if(setInterval((()=>{i=n(),i&&!t.editorModeAdded?(t.buttonsContainer.classList.add("editor"),t.card.classList.add("editor"),t.editorModeAdded=!0):!i&&t.editorModeAdded&&(t.buttonsContainer.classList.remove("editor"),t.card.classList.remove("editor"),t.editorModeAdded=!1)}),100),!t.buttonsAdded){const e=document.createElement("div");e.classList.add("horizontal-buttons-stack-container"),t.content.appendChild(e),t.buttonsContainer=e}const V=(t,n,i)=>{if(e.states[n].attributes.rgb_color){const i=e.states[n].attributes.rgb_color,a=(0,o.wW)(i)?"rgba(255,220,200, 0.5)":`rgba(${i}, 0.5)`;t.style.backgroundColor=a,t.style.border="1px solid rgba(0,0,0,0)"}else e.states[n].attributes.rgb_color||"on"!=e.states[n].state?(t.style.backgroundColor="rgba(0,0,0,0)",t.style.border="1px solid var(--primary-text-color)"):(t.style.backgroundColor="rgba(255,255,255,0.5)",t.style.border="1px solid rgba(0,0,0,0)")};let D=[],M=1;for(;t.config[M+"_link"];){const e=M+"_",n=t.config[e+"name"]||"",o=t.config[e+"pir_sensor"];c=t.config[e+"icon"]||"";const i=t.config[e+"link"],a=t.config[e+"entity"];D.push({button:n,pirSensor:o,icon:c,link:i,lightEntity:a}),M++}if(t.config.auto_order&&D.sort(((t,n)=>t.pirSensor&&n.pirSensor?"on"===e.states[t.pirSensor].state&&"on"===e.states[n.pirSensor].state?e.states[t.pirSensor].last_updated<e.states[n.pirSensor].last_updated?1:-1:"on"===e.states[t.pirSensor].state?-1:"on"===e.states[n.pirSensor].state||e.states[t.pirSensor].last_updated<e.states[n.pirSensor].last_updated?1:-1:t.pirSensor?n.pirSensor?void 0:-1:1)),!t.buttonsAdded||i){if(t.card.classList.add("horizontal-buttons-stack"),i&&t.buttonsContainer)for(;t.buttonsContainer.firstChild;)t.buttonsContainer.removeChild(t.buttonsContainer.firstChild);const e={};D.forEach((n=>{const o=((e,n,o)=>{const i=document.createElement("button");return i.setAttribute("class",`button ${n.substring(1)}`),i.innerHTML=`\n            ${""!==o?`<ha-icon icon="${o}" class="icon" style="${""!==e?"margin-right: 8px;":""}"></ha-icon>`:""}\n            ${""!==e?`<p class="name">${e}</p>`:""}\n        `,i.hasListener||(i.addEventListener("click",(t=>{y=location.hash+!0,localStorage.getItem("isManuallyClosed_"+n),y!==n+!0?(r(0,n),y=n+!0):(history.replaceState(null,null,location.href.split("#")[0]),y=n+!1),t.stopPropagation(),a("light")}),{passive:!0}),window.addEventListener("urlChanged",(function(){t.config.highlightCurrentview&&(location.pathname===n||location.hash===n?i.classList.add("highlight"):i.classList.remove("highlight"))}),{passive:!0}),i.hasListener=!0),i})(n.button,n.link,n.icon);e[n.link]=o,t.buttonsContainer.appendChild(o)})),t.buttonsAdded=!0,t.buttons=e}let z=0;!function(t){if(t.buttonsUpdated)return;let e=[];for(let n of D)t.buttons[n.link]&&(e.push(localStorage.getItem(`buttonWidth-${n.link}`)),e.push(localStorage.getItem(`buttonContent-${n.link}`)));Promise.all(e).then((e=>{let n=0;for(let o of D){let a=t.buttons[o.link];if(a){let r=e[n],s=e[n+1];n+=2,r&&"0"!==r&&s===a.innerHTML&&!i||(r=a.offsetWidth,localStorage.setItem(`buttonWidth-${o.link}`,r),localStorage.setItem(`buttonContent-${o.link}`,a.innerHTML),t.previousConfig=t.config),a.style.transform=`translateX(${z}px)`,z+=parseInt(r)+12}o.lightEntity&&V(a,o.lightEntity,o.link)}t.buttonsAdded=!0}))}(t);const B=`\n        ha-card {\n            border-radius: 0;\n        }\n        .horizontal-buttons-stack {\n            width: 100%;\n            margin-top: 0 !important;\n            background: none !important;\n            position: fixed;\n            height: 51px;\n            bottom: 16px;\n            left: ${v};\n            z-index: 1 !important; /* Higher value hide the more-info panel */\n        }\n        @keyframes from-bottom {\n            0% {transform: translateY(200px);}\n            20% {transform: translateY(200px);}\n            46% {transform: translateY(-8px);}\n            56% {transform: translateY(1px);}\n            62% {transform: translateY(-2px);}\n            70% {transform: translateY(0);}\n            100% {transform: translateY(0);}\n        }\n        .horizontal-buttons-stack-container {\n            width: max-content;\n            position: relative;\n            height: 51px;\n        }\n        .button {\n            display: inline-flex;\n            position: absolute;\n            box-sizing: border-box !important;\n            border: 1px solid var(--primary-text-color);\n            align-items: center;\n            height: 50px;\n            line-height: 16px;\n            white-space: nowrap;\n            width: auto;\n            border-radius: 25px;\n            z-index: 1;\n            padding: 0 16px;\n            background: none;\n            transition: background-color 1s, border 1s, transform 1s;\n            color: var(--primary-text-color);\n        }\n        .highlight {\n            animation: pulse 1.4s infinite alternate;\n        }\n        @keyframes pulse {\n            0% {\n                filter: brightness(0.7);\n            }\n            100% {\n                filter: brightness(1.3);\n            }\n        }\n        .icon {\n            height: 24px;\n        }\n        .card-content {\n            width: calc(100% + 18px);\n            box-sizing: border-box !important;\n            margin: 0 -36px !important;\n            padding: 0 36px !important;\n            overflow: scroll !important;\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n            -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 1) calc(0% + 28px), rgba(0, 0, 0, 1) calc(100% - 28px), transparent 100%);\n            /* mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%); */\n            /* -webkit-mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%); */\n        }\n        .horizontal-buttons-stack::before {\n            content: '';\n            position: absolute;\n            top: -32px;\n            left: -100%;\n            display: block;\n            background: linear-gradient(0deg, var(--background-color, var(--primary-background-color)) 50%, rgba(79, 69, 87, 0));\n            width: 200%;\n            height: 100px;\n        }\n        .card-content::-webkit-scrollbar {\n            display: none;\n        }\n        @media only screen and (min-width: 600px) {\n            .card-content {\n                position: fixed;\n                width: ${p} !important;\n                left: calc(50% - ${h[1]/2}${h[2]});\n                margin-left: -13px !important;\n                padding: 0 26px !important;\n            }\n        }\n        @media only screen and (min-width: 870px) {\n            .card-content {\n                position: fixed;\n                width: calc(${p}${"%"!==h[2]||u?"":" - var(--mdc-drawer-width)"}) !important;\n                left: calc(50% - ${h[1]/2}${h[2]} + ${!0===u?"0px":"var(--mdc-drawer-width) "+("%"===h[2]?"":"/ 2")});\n                margin-left: -13px !important;\n                padding: 0 26px !important;\n            }\n        }\n        .horizontal-buttons-stack.editor {\n            position: relative;\n            bottom: 0;\n            left: 0;\n            overflow: hidden;\n        }\n        .horizontal-buttons-stack.editor::before {\n            top: -32px;\n            left: -100%;\n            background: none;\n            width: 100%;\n            height: 0;\n        }\n        .horizontal-buttons-stack-container.editor > .button {\n            transition: background-color 0s, border 0s, transform 0s;\n        }\n        .horizontal-buttons-stack-container.editor {\n            margin-left: 1px;\n        }\n        .horizontal-buttons-stack.editor > .card-content {\n            position: relative;\n            width: calc(100% + 26px) !important;\n            left: -26px;\n            margin: 0 !important;\n            padding: 0;\n        }\n    `;!window.hasAnimated&&_&&(t.content.style.animation="from-bottom 1.3s forwards",window.hasAnimated=!0,setTimeout((()=>{t.content.style.animation="none"}),1500)),(0,o.L2)(e,t,B,s)}(this);break;case"button":!function(t){const e=t._hass,n=t.editor;let{customStyles:i,entityId:r,icon:l,name:d,widthDesktop:p,widthDesktopDivided:h,isSidebarHidden:u,state:m,stateChanged:b,stateOn:f,formatedState:_,riseAnimation:v,marginCenter:y,popUpOpen:w,rgbaColor:x,rgbColor:k,bgOpacity:C,shadowOpacity:$,bgBlur:S,iconColorOpacity:E,iconColor:O,iconFilter:L,iconStyles:A,haStyle:I,themeBgColor:T,color:V}=g(t,t.config,e);_=r&&(b||n)?e.formatEntityState(e.states[r]):"";const D=t.config.button_type||"switch",M=!!t.config.show_state&&t.config.show_state;let z=r?e.states[r].attributes.brightness||0:"",B=r?e.states[r].attributes.volume_level||0:"",q=!1,H=z,U=B,Y=0,W=0,F=0,P=!1,R=null;if(!t.buttonAdded){const e=document.createElement("div");e.setAttribute("class","button-container"),t.content.appendChild(e)}const j=document.createElement("div");j.setAttribute("class","icon-container"),t.iconContainer=j;const X=document.createElement("div");X.setAttribute("class","name-container");const N=document.createElement("div");N.setAttribute("class","switch-button");const G=document.createElement("div");G.setAttribute("class","range-slider");const K=document.createElement("div");if(K.setAttribute("class","range-fill"),!t.buttonContainer||n){if(n&&t.buttonContainer){for(;t.buttonContainer.firstChild;)t.buttonContainer.removeChild(t.buttonContainer.firstChild);t.eventAdded=!1,t.wasEditing=!0}t.buttonContainer=t.content.querySelector(".button-container"),"slider"!==D||t.buttonAdded&&!n?("switch"===D||"custom"===D||n)&&(t.buttonContainer.appendChild(N),N.appendChild(j),N.appendChild(X),t.switchButton=t.content.querySelector(".switch-button")):(t.buttonContainer.appendChild(G),G.appendChild(j),G.appendChild(X),G.appendChild(K),t.rangeFill=t.content.querySelector(".range-fill")),(0,o.IU)(t,r,l,j,n),X.innerHTML=`\n            <p class="name">${d}</p>\n            ${M?`<p class="state">${_}</p>`:""}\n        `,t.buttonAdded=!0}function Z(t){a("success");let e=t.querySelector(".feedback-element");e||(e=document.createElement("div"),e.setAttribute("class","feedback-element"),t.appendChild(e)),e.style.animation="tap-feedback .5s",setTimeout((()=>{e.style.animation="none",t.removeChild(e)}),500)}function J(t){Y=t.pageX||(t.touches?t.touches[0].pageX:0),W=t.pageY||(t.touches?t.touches[0].pageY:0),F=G.value,t.target!==j&&t.target!==j.querySelector("ha-icon")&&(q=!0,document.addEventListener("mouseup",tt,{passive:!0}),document.addEventListener("touchend",tt,{passive:!0}),document.addEventListener("mousemove",Q,{passive:!0}),document.addEventListener("touchmove",Q,{passive:!0}),R=setTimeout((()=>{ot(t.pageX||t.touches[0].pageX),et(),R=null}),200))}function Q(t){const e=t.pageX||(t.touches?t.touches[0].pageX:0),n=t.pageY||(t.touches?t.touches[0].pageY:0);Math.abs(n-W)>Math.abs(e-Y)?(clearTimeout(R),tt()):(document.removeEventListener("mousemove",Q),document.removeEventListener("touchmove",Q),document.addEventListener("mousemove",nt,{passive:!0}),document.addEventListener("touchmove",nt,{passive:!0}))}function tt(){q=!1,P=!1,et(),document.removeEventListener("mouseup",tt),document.removeEventListener("touchend",tt),document.removeEventListener("mousemove",nt),document.removeEventListener("touchmove",nt)}function et(){r.startsWith("light.")?(z=H,e.callService("light","turn_on",{entity_id:r,brightness:z})):r.startsWith("media_player.")&&(B=U,e.callService("media_player","volume_set",{entity_id:r,volume_level:B}))}function nt(t){const e=t.pageX||(t.touches?t.touches[0].pageX:0),n=t.pageY||(t.touches?t.touches[0].pageY:0);q&&Math.abs(e-Y)>10?(a("light"),ot(e)):q&&Math.abs(n-W)>10&&(q=!1,G.value=F)}function ot(t){const e=G.getBoundingClientRect(),n=Math.min(Math.max(t-e.left,0),e.width)/e.width;r.startsWith("light.")?H=Math.round(255*n):r.startsWith("media_player.")&&(U=n),K.style.transition="none",K.style.transform=`translateX(${100*n}%)`}M&&_&&(t.content.querySelector(".state").textContent=_),t.eventAdded||"switch"!==D?t.eventAdded||"slider"!==D?t.eventAdded||"custom"!==D||(N.addEventListener("click",(()=>Z(t.switchButton)),{passive:!0}),c(j,t.config,0,a),t.eventAdded=!0):(G.addEventListener("mousedown",J,{passive:!0}),G.addEventListener("touchstart",J,{passive:!0}),c(j,t.config,0,a),t.eventAdded=!0):(N.addEventListener("click",(()=>Z(t.switchButton)),{passive:!0}),N.addEventListener("click",(function(t){t.target!==j&&t.target!==j.querySelector("ha-icon")&&s(e,r)}),{passive:!0}),c(j,t.config,0,a),t.eventAdded=!0),t.isDragging||"slider"!==D||(t.rangeFill.style.transition="all .3s",r.startsWith("light.")?t.rangeFill.style.transform=`translateX(${z/255*100}%)`:r.startsWith("media_player.")&&(t.rangeFill.style.transform=`translateX(${100*B}%)`));const it=`\n        ha-card {\n            margin-top: 0 !important;\n            background: none !important;\n            opacity: ${"unavailable"!==m?"1":"0.5"};\n        }\n        \n        .button-container {\n            position: relative;\n            width: 100%;\n            height: 50px;\n            z-index: 0;\n            background-color: var(--background-color-2,var(--secondary-background-color));\n            border-radius: 25px;\n            mask-image: radial-gradient(white, black);\n            -webkit-mask-image: radial-gradient(white, black);\n            -webkit-backface-visibility: hidden;\n            -moz-backface-visibility: hidden;\n            -webkit-transform: translateZ(0);\n            overflow: hidden;\n        }\n        \n        .switch-button,\n        .range-slider {\n            display: inline-flex;\n            position: absolute;\n            height: 100%;\n            width: 100%;\n            transition: background-color 1.5s;\n            background-color: ${f&&["switch","custom"].includes(D)?"var(--accent-color)":"rgba(0,0,0,0)"};\n        }\n\n        .range-fill {\n            z-index: -1;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            background-color: ${E};\n            width: 100%;\n            left: -100%;\n        }\n        \n        .switch-button {\n            cursor: pointer !important;\n        }\n        \n        .range-slider {\n            cursor: ew-resize;\n        }\n        \n        .name-container {\n            position: relative;\n            display: ${M?"block":"inline-flex"};\n            margin-left: 4px;\n            z-index: 1;\n            font-weight: 600;\n            align-items: center;\n            line-height: ${M?"4px":"16px"};\n            padding-right: 16px;\n        }\n        \n        .state {\n            font-size: 12px;\n            opacity: 0.7;\n        }\n        \n        .feedback-element {\n            position: absolute;\n            top: 0;\n            left: 0;\n            opacity: 0;\n            width: 100%;\n            height: 100%;\n            background-color: rgb(0,0,0);\n        }\n        \n        @keyframes tap-feedback {\n            0% {transform: translateX(-100%); opacity: 0;}\n            64% {transform: translateX(0); opacity: 0.1;}\n            100% {transform: translateX(100%); opacity: 0;}\n        }\n\n        ${A}\n    `;(0,o.L2)(e,t,it,i,m,r,b)}(this);break;case"separator":!function(t){const e=t._hass,n=t.editor,i=t.config;let{customStyles:a,entityId:r,icon:s,name:l,widthDesktop:c,widthDesktopDivided:d,isSidebarHidden:p,state:h,stateChanged:u,stateOn:m,formatedState:b,riseAnimation:f,marginCenter:_,popUpOpen:v,rgbaColor:y,rgbColor:w,bgOpacity:x,shadowOpacity:k,bgBlur:C,iconColorOpacity:$,iconColor:S,iconFilter:E,iconStyles:O,haStyle:L,themeBgColor:A,color:I}=g(t,i,e);if(!t.separatorAdded||n){if(n&&t.separatorContainer)for(;t.separatorContainer.firstChild;)t.separatorContainer.removeChild(t.separatorContainer.firstChild);t.separatorAdded||(t.separatorContainer=document.createElement("div"),t.separatorContainer.setAttribute("class","separator-container")),t.separatorContainer.innerHTML=`\n            <div>\n                <ha-icon icon="${s}"></ha-icon>\n                <h4>${l}</h4>\n            </div>\n            <div></div>\n        `,t.content.appendChild(t.separatorContainer),t.separatorAdded=!0}(0,o.L2)(e,t,"\n        .separator-container {\n            display: inline-flex;\n            width: 100%;\n            margin-top: 12px;\n        }\n        .separator-container div:first-child {\n            display: inline-flex;\n            max-width: calc(100% - 38px);\n        }\n        .separator-container div ha-icon {\n            display: inline-flex;\n            height: 24px;\n            width: 24px;\n            margin: 0 22px 0 8px;\n            transform: translateY(-2px);\n        }\n        .separator-container div h4 {\n            display: inline-flex;\n            margin: 0 20px 0 0;\n            font-size: 16px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        .separator-container div:last-child {\n            display: inline-flex; \n            border-radius: 6px; \n            opacity: 0.5; \n            margin-left: 10px; \n            flex-grow: 1; \n            height: 6px; \n            align-self: center; \n            background-color: var(--background-color,var(--secondary-background-color));\n        }\n    ",a)}(this);break;case"cover":!function(t){const e=t._hass,n=t.editor,i=t.config;let{customStyles:r,entityId:s,icon:l,name:d,widthDesktop:p,widthDesktopDivided:h,isSidebarHidden:u,state:m,stateChanged:b,stateOn:f,formatedState:_,riseAnimation:v,marginCenter:y,popUpOpen:w,rgbaColor:x,rgbColor:k,bgOpacity:C,shadowOpacity:$,bgBlur:S,iconColorOpacity:E,iconColor:O,iconFilter:L,iconStyles:A,haStyle:I,themeBgColor:T,color:V}=g(t,i,e);const D=i.icon_open?i.icon_open:"mdi:window-shutter-open",M=i.icon_close?i.icon_close:"mdi:window-shutter",z=i.open_service?i.open_service:"cover.open_cover",B=i.close_service?i.close_service:"cover.close_cover",q=i.stop_service?i.stop_service:"cover.stop_cover",H=i.icon_up?i.icon_up:"mdi:arrow-up",U=i.icon_down?i.icon_down:"mdi:arrow-down",Y=!!t.config.show_state&&t.config.show_state;if(l="open"===e.states[i.entity].state?D:M,_=b?e.formatEntityState(e.states[s]):_||"",!t.coverAdded||n){if(n&&t.coverContainer)for(;t.coverContainer.firstChild;)t.coverContainer.removeChild(t.coverContainer.firstChild);t.coverContainer=document.createElement("div"),t.coverContainer.setAttribute("class","cover-container"),t.coverContainer.innerHTML=`\n            <div class="header-container">\n                <div class="icon-container">\n                </div>\n                <div class="name-container">\n                    <p class="name">${d}</p>\n                    <p class="state"></p>\n                </div>\n            </div>\n            <div class="buttons-container">\n                <button class="button open">\n                    <ha-icon icon="${H}"></ha-icon>\n                </button>\n                <button class="button stop">\n                    <ha-icon icon="mdi:stop"></ha-icon>\n                </button>\n                <button class="button close">\n                    <ha-icon icon="${U}"></ha-icon>\n                </button>\n            </div>\n        `,t.content.appendChild(t.coverContainer);const o=t.coverContainer.querySelector(".open"),r=t.coverContainer.querySelector(".stop"),l=t.coverContainer.querySelector(".close");o.addEventListener("click",(()=>{e.callService(z.split(".")[0],z.split(".")[1],{entity_id:s})}),{passive:!0}),r.addEventListener("click",(()=>{e.callService(q.split(".")[0],q.split(".")[1],{entity_id:s})}),{passive:!0}),l.addEventListener("click",(()=>{e.callService(B.split(".")[0],B.split(".")[1],{entity_id:s})}),{passive:!0}),t.iconContainer=t.content.querySelector(".icon-container"),c(t.iconContainer,i,0,a),t.coverAdded=!0}t.iconContainer&&(b||n)&&(t.iconContainer.innerHTML=`<ha-icon icon="${l}" class="icon"></ha-icon>`,t.content.querySelector(".state").textContent=Y?_:""),(0,o.L2)(e,t,"\n        ha-card {\n            margin-top: 0 !important;\n            background: none !important;\n        }\n        \n        .header-container {\n            display: flex;\n            align-items: center;\n            margin-bottom: 10px;\n        }\n        \n        .cover-container {\n            display: grid;\n        }\n        \n        .icon-container {\n            display: flex;\n            margin: 0 !important;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            /*z-index: 1;*/\n            width: 48px;\n            height: 48px;\n            margin: 6px;\n            border-radius: 50%;\n            background-color: var(--card-background-color,var(--ha-card-background));\n            border: 6px solid var(--background-color-2,var(--secondary-background-color));\n            box-sizing: border-box;\n        }\n        \n        .name-container {\n            font-weight: 600;\n            margin-left: 10px;\n            line-height: 4px;\n        }\n        \n        .buttons-container {\n            display: grid;\n            align-self: center;\n            grid-auto-flow: column;\n            grid-gap: 18px;             \n        }\n        \n        .state {\n            font-size: 12px;\n            opacity: 0.7;\n        }\n        \n        ha-icon {\n            display: flex; \n            height: 24px; \n            width: 24px; \n            color: var(--primary-text-color);\n        }\n        \n        .button {\n            display: flex;\n            background: var(--background-color-2,var(--secondary-background-color));\n            height: 42px;\n            border-radius: 32px;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            border: none;\n        }\n    ",r,m,s)}(this);break;case"empty-column":!function(t){if(!t.emptyCollumnAdded){const e=document.createElement("div");e.setAttribute("class","empty-column"),e.innerHTML='\n            <div style="display: flex; width: 100%;"></div>\n        ',t.content.appendChild(e),t.emptyColumnAdded=!0}}(this)}}setConfig(t){if("pop-up"===t.card_type){if(!t.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.")}else if("horizontal-buttons-stack"===t.card_type){var e={};for(var n in t)if(n.match(/^\d+_icon$/)){var o=n.replace("_icon","_link");if(void 0===t[o])throw new Error("You need to define "+o);if(e[t[o]])throw new Error("You can't use "+t[o]+" twice");e[t[o]]=!0}}else if(("button"===t.card_type||"cover"===t.card_type)&&!t.entity)throw new Error("You need to define an entity");if(window.entityError)throw new Error("You need to define a valid entity");this.config=t}getCardSize(){return-1e4}static getConfigElement(){return document.createElement("bubble-card-editor")}}customElements.define("bubble-card",y),customElements.define("bubble-card-editor",class extends b{setConfig(t){this._config={...t}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config.card_type||""}get _button_type(){return this._config.button_type||"switch"}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _text(){return this._config.text||""}get _hash(){return this._config.hash||"#pop-up-name"}get _trigger_entity(){return this._config.trigger_entity||""}get _trigger_state(){return this._config.trigger_state||""}get _trigger_close(){return this._config.trigger_close||!1}get _margin(){return this._config.margin||"7px"}get _margin_top_mobile(){return this._config.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config.margin_top_desktop||"0px"}get _width_desktop(){return this._config.width_desktop||"540px"}get _bg_color(){return this._config.bg_color||window.color}get _bg_opacity(){return void 0!==this._config.bg_opacity?this._config.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config.bg_blur?this._config.bg_blur:"14"}get _shadow_opacity(){return void 0!==this._config.shadow_opacity?this._config.shadow_opacity:"0"}get _is_sidebar_hidden(){return this._config.is_sidebar_hidden||!1}get _rise_animation(){return void 0===this._config.rise_animation||this._config.rise_animation}get _auto_close(){return this._config.auto_close||""}get _back_open(){return this._config.back_open||!1}get _icon_open(){return this._config.icon_open||""}get _icon_close(){return this._config.icon_close||""}get _open_service(){return this._config.open_service||"cover.open_cover"}get _close_service(){return this._config.open_service||"cover.close_cover"}get _stop_service(){return this._config.open_service||"cover.stop_cover"}get _auto_order(){return this._config.auto_order||!1}get _highlightCurrentview(){return this._config.highlightCurrentview||!1}get _show_state(){return this._config.show_state||!1}render(){if(!this.hass)return f``;if(!this.listsUpdated){const t=t=>({label:t,value:t});this.allEntitiesList=Object.keys(this.hass.states).map(t),this.lightList=Object.keys(this.hass.states).filter((t=>"light"===t.substr(0,t.indexOf(".")))).map(t),this.sensorList=Object.keys(this.hass.states).filter((t=>"sensor"===t.substr(0,t.indexOf(".")))).map(t),this.binarySensorList=Object.keys(this.hass.states).filter((t=>"binary_sensor"===t.substr(0,t.indexOf(".")))).map(t),this.coverList=Object.keys(this.hass.states).filter((t=>"cover"===t.substr(0,t.indexOf(".")))).map(t),this.cardTypeList=[{label:"Button",value:"button"},{label:"Cover",value:"cover"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Pop-up",value:"pop-up"},{label:"Separator",value:"separator"}],this.buttonTypeList=[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"}],this.listsUpdated=!0}const e=this.allEntitiesList,n=(this.lightList,this.sensorList,this.coverList),o=this.cardTypeList,i=this.buttonTypeList;if("pop-up"===this._config.card_type)return f`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <h3>Pop-up 
                        <span style="
                            font-size: 10px !important;
                            color: #fff;
                            background: rgb(0,90,140);
                            padding: 2px 6px;
                            border-radius: 8px;
                        ">
                            Regular mode
                        </span>
                    </h3>
                    <ha-alert alert-type="info">This card allows you to convert any vertical stack into a pop-up. Each pop-up can be opened by targeting its link (e.g. '#pop-up-name'), with navigation_path or with the horizontal buttons stack that is included.<br><b>It must be placed within a vertical-stack card at the top most position to function properly. The pop-up will be hidden by default until you open it.</b><br><br><a href="https://github.com/Clooos/Bubble-Card#pop-up-optimization">How to get the optimized mode?</a></ha-alert>
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
                    <ha-alert alert-type="info">Set ‘Background blur’ to 0 if your pop-up animations are rendering at low FPS.</ha-alert>
                    <ha-alert alert-type="info">You can't set a value to 0 with the sliders for now, just change it to 0 in the text field if you need to.</ha-alert>
                    ${this.makeVersion()}
              </div>
            `;if("button"===this._config.card_type)return f`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <h3>Button</h3>
                    <ha-alert alert-type="info">This card can be a slider or a button, allowing you to toggle your entities, control the brightness of your lights and the volume of your media players. To access color / control of an entity, simply tap on the icon.</ha-alert>
                    ${this.makeDropdown("slider"!==this._button_type?"Entity (toggle)":"Entity (light or media_player)","entity",e)}
                     <ha-formfield .label="Optional - Show entity state">
                        <ha-switch
                            aria-label="Optional - Show entity state"
                            .checked=${this._show_state}
                            .configValue="${"show_state"}"
                            @change=${this._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Show entity state</label> 
                        </div>
                    </ha-formfield>
                    ${this.makeDropdown("Button type","button_type",i)}
                    <ha-textfield
                        label="Optional - Name"
                        .value="${this._name}"
                        .configValue="${"name"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    ${this.makeDropdown("Optional - Icon","icon")}
                    ${this.makeVersion()}
                </div>
            `;if("separator"===this._config.card_type)return f`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <h3>Separator</h3>
                    <ha-alert alert-type="info">This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...</ha-alert>
                    <ha-textfield
                        label="Name"
                        .value="${this._name}"
                        .configValue="${"name"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    ${this.makeDropdown("Icon","icon")}
                    ${this.makeVersion()}
              </div>
            `;if("horizontal-buttons-stack"===this._config.card_type){if(!this.buttonAdded&&this.shadowRoot.querySelector("#add-button")){this.buttonAdded=!0;const t=this.shadowRoot.querySelector("#add-button");for(this.buttonIndex=0;this._config[this.buttonIndex+1+"_link"];)this.buttonIndex++;t.addEventListener("click",(()=>{this.buttonIndex++;const e=t.style.opacity,n=t.innerText;t.style.opacity="0.6",t.style.transition="opacity 1s",t.innerText="Loading...",setTimeout((()=>{t.style.opacity=e,t.innerText=n}),5e3)}),{passive:!0})}return f`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <h3>Horizontal buttons stack</h3>
                    <ha-alert alert-type="info">This card is the companion to the pop-up card, allowing you to open the corresponding pop-ups. It also allows you to open any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.<br><br>Please note that this card may take some time to load in edit mode.</ha-alert>
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
                    <div id="buttons-container">
                        ${this.makeButton()}
                    </div>
                    <button id="add-button">Add Button</button>
                    <h3>Styling options</h3>
                    <ha-textfield
                        label="Optional - Margin (fix centering on some themes) (e.g. 13px)"
                        .value="${this._margin}"
                        .configValue="${"margin"}"
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
                            aria-label="Toggle "Highlight current view"
                            .checked=${this._highlightCurrentview}
                            .configValue="${"highlightCurrentview"}"
                            @change=${this._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Highlight current hash / view</label> 
                        </div>
                    </ha-formfield>
                    ${this.makeVersion()}
                </div>
            `}return"cover"===this._config.card_type?f`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <h3>Cover</h3>
                    <ha-alert alert-type="info">This card allows you to control your covers.</ha-alert>
                    ${this.makeDropdown("Entity","entity",n)}
                    <ha-formfield .label="Optional - Show entity state">
                        <ha-switch
                            aria-label="Optional - Show entity state"
                            .checked=${this._show_state}
                            .configValue="${"show_state"}"
                            @change=${this._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Show entity state</label> 
                        </div>
                    </ha-formfield>
                    <ha-textfield
                        label="Optional - Name"
                        .value="${this._name||""}"
                        .configValue="${"name"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Open service (cover.open_cover by default)"
                        .value="${this._open_service}"
                        .configValue="${"open_service"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Stop service (cover.stop_cover by default)"
                        .value="${this._stop_service}"
                        .configValue="${"stop_service"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Close service (cover.close_cover by default)"
                        .value="${this._close_service}"
                        .configValue="${"close_service"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    ${this.makeDropdown("Optional - Open icon","icon_open")}
                    ${this.makeDropdown("Optional - Closed icon","icon_close")}
                    <h3>Styling options</h3>
                    ${this.makeDropdown("Optional - Arrow down icon","icon_down")}
                    ${this.makeDropdown("Optional - Arrow up icon","icon_up")}
                    ${this.makeVersion()}
                </div>
            `:"empty-column"===this._config.card_type?f`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <h3>Empty column</h3>
                    <ha-alert alert-type="info">Just an empty card to fill any empty column.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `:this._config.card_type?void 0:f`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <ha-alert alert-type="info">You need to add a card type first.</ha-alert>
                    <img style="width: 100%" src="https://user-images.githubusercontent.com/36499953/268039672-6dd13476-42c5-427c-a4d8-ad4981fc2db7.gif">
                    <p>The <b>Bubble Card ${t}</b> changelog is available <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${t}"><b>here</b></a>.
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
            `}makeDropdown(t,e,n){return this.hass,t.includes("icon")||t.includes("Icon")?f`
                <div>
                    <ha-icon-picker
                        label="${t}"
                        .value="${this["_"+e]}"
                        .configValue="${e}"
                        item-label-path="label"
                        item-value-path="value"
                        @value-changed="${this._valueChanged}"
                    ></ha-icon-picker>
                </div>
            `:f`
            <div>
                <ha-combo-box
                    label="${t}"
                    .value="${this["_"+e]}"
                    .configValue="${e}"
                    .items="${n}"
                    @value-changed="${this._valueChanged}"
                ></ha-combo-box>
            </div>
          `}makeButton(){let t=[];for(let e=1;e<=this.buttonIndex;e++)t.push(f`
                <div class="${e}_button">
                    <div class="button-header">
                        <ha-icon class="remove-button" icon="mdi:close" @click=${()=>this.removeButton(e)}></ha-icon>
                        <span class="button-number">Button ${e}</span>
                    </div>
                    <ha-textfield
                        label="Link / Hash to pop-up (e.g. #kitchen)"
                        .value="${this._config[e+"_link"]||""}"
                        .configValue="${e}_link"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Name"
                        .value="${this._config[e+"_name"]||""}"
                        .configValue="${e}_name"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    <ha-icon-picker
                        label="Optional - Icon"
                        .value="${this._config[e+"_icon"]||""}"
                        .configValue="${e}_icon"
                        item-label-path="label"
                        item-value-path="value"
                        @value-changed="${this._valueChanged}"
                    ></ha-icon-picker>
                    <ha-combo-box
                        label="Optional - Light / Light group (For background color)"
                        .value="${this._config[e+"_entity"]||""}"
                        .configValue="${e}_entity"
                        .items="${this.allEntitiesList}"
                        @value-changed="${this._valueChanged}"
                    ></ha-combo-box>
                    <ha-combo-box
                        label="Optional - Presence / Occupancy sensor (For button auto order)"
                        .value="${this._config[e+"_pir_sensor"]||""}"
                        .configValue="${e}_pir_sensor"
                        .disabled=${!this._config.auto_order}
                        .items="${this.binarySensorList}"
                        @value-changed="${this._valueChanged}"
                    ></ha-combo-box>
                </div>
            `);return t}makeVersion(){return f`
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
                    ${t}
                </span>
            </h4>
        `}removeButton(t){delete this._config[t+"_name"],delete this._config[t+"_icon"],delete this._config[t+"_link"],delete this._config[t+"_entity"],delete this._config[t+"_pir_sensor"];for(let e=t;e<this.buttonIndex;e++)this._config[e+"_name"]=this._config[e+1+"_name"],this._config[e+"_icon"]=this._config[e+1+"_icon"],this._config[e+"_link"]=this._config[e+1+"_link"],this._config[e+"_entity"]=this._config[e+1+"_entity"],this._config[e+"_pir_sensor"]=this._config[e+1+"_pir_sensor"];delete this._config[this.buttonIndex+"_name"],delete this._config[this.buttonIndex+"_icon"],delete this._config[this.buttonIndex+"_link"],delete this._config[this.buttonIndex+"_entity"],delete this._config[this.buttonIndex+"_pir_sensor"],this.buttonIndex--,i(this,"config-changed",{config:this._config})}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,n=t.detail;e.configValue&&("ha-switch"===e.type?this._config={...this._config,[e.configValue]:e.checked}:this._config={...this._config,[e.configValue]:void 0===e.checked&&n.value?e.checked||n.value:e.value||e.checked}),i(this,"config-changed",{config:this._config})}static get styles(){return _`
          div {
            display: grid;
            grid-gap: 12px;
          }
          #add-button, #clear-cache {
            margin-top: 12px;
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
          .button-header {
            height: auto;
            width: 100%;
            display: inline-flex;
            align-items: center;

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
        `}}),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch."}),console.info(`%c Bubble Card %c ${t} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})()})();
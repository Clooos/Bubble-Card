(()=>{"use strict";var __webpack_modules__={946:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>getIconStyles,IU:()=>createIcon,L2:()=>addStyles,_k:()=>convertToRGBA,mk:()=>getIconColor,wW:()=>isColorCloseToWhite});const addStyles=function(hass,context,styles,customStyles,state,entityId,stateChanged,path="",element=context.content){const customStylesEval=customStyles?eval("`"+customStyles+"`"):"";let styleAddedKey=styles+"Added";if(!context[styleAddedKey]||context.previousStyle!==customStylesEval||stateChanged||context.previousConfig!==context.config){if(!context[styleAddedKey]){if(context.styleElement=element.querySelector("style"),!context.styleElement){context.styleElement=document.createElement("style");const e=path?element.querySelector(path):element;e?.appendChild(context.styleElement)}context[styleAddedKey]=!0}context.styleElement.innerHTML!==customStylesEval+styles&&(context.styleElement.innerHTML=customStylesEval+styles),context.previousStyle=customStylesEval,context.previousConfig=context.config}};function createIcon(e,t,n,o,i){let a=e._hass,r=!(!t||!a.states[t].attributes)&&a.states[t].attributes;e.imageUrl=!!r.entity_picture&&r.entity_picture,updateIcon(e,a,t,n,o),i||setInterval((()=>{a=e._hass,t&&a.states[t]&&(e.currentEntityPicture=a.states[t].attributes.entity_picture,e.currentEntityPicture!==e.previousEntityPicture&&(e.imageUrl=e.currentEntityPicture,updateIcon(e,a,t,n,o),e.previousEntityPicture=e.currentEntityPicture))}),1e3)}function updateIcon(e,t,n,o,i){for(;i.firstChild;)i.removeChild(i.firstChild);let a=e.config.icon&&e.config.icon.includes("/")?e.config.icon:e.imageUrl?e.imageUrl:"";if(a&&(r=t.states[n].state,n.startsWith("media_player.")&&!["off","unknown","idle",void 0].includes(r)||!n.startsWith("media_player."))){const e=document.createElement("div");e.setAttribute("class","entity-picture"),e.setAttribute("alt","Icon"),i&&(i.appendChild(e),i.style.background="center / cover no-repeat url("+a+"), var(--card-background-color,var(--ha-card-background))")}else{const e=document.createElement("ha-icon");e.setAttribute("icon",o),e.setAttribute("class","icon"),i&&i.appendChild(e)}var r}function isColorCloseToWhite(e){let t=[220,220,190];for(let n=0;n<3;n++)if(e[n]<t[n])return!1;return!0}function convertToRGBA(e,t,n=1){let o="";if(e.startsWith("#"))o=4===e.length?"rgba("+Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n)+", "+t+")":"rgba("+Math.min(255,parseInt(e.slice(1,3),16)*n)+", "+Math.min(255,parseInt(e.slice(3,5),16)*n)+", "+Math.min(255,parseInt(e.slice(5,7),16)*n)+", "+t+")";else if(e.startsWith("rgb")){let i=e.match(/\d+/g);e.includes("rgba"),o="rgba("+Math.min(255,i[0]*n)+", "+Math.min(255,i[1]*n)+", "+Math.min(255,i[2]*n)+", "+t+")"}return o}function getIconColor(e,t,n,o,i){let a,r,s;return t&&t.startsWith("light.")?(a=(i=e.states[t].attributes.rgb_color)?o(i)?"rgba(255,220,200,0.5)":`rgba(${i}, 0.5)`:n?"rgba(255,220,200, 0.5)":"rgba(255, 255, 255, 0.5)",r=i?o(i)?"rgb(255,220,200)":`rgb(${i})`:n?"rgba(255,220,200, 1)":"rgba(255, 255, 255, 1)",s=i?o(i)?"none":"brightness(1.1)":"none"):(a="var(--accent-color)",s="brightness(1.1)"),{iconColorOpacity:a,iconColor:r,iconFilter:s}}function getIconStyles(e,t,n,o){return`\n    .icon-container {\n        position: relative;\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        z-index: 1;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        cursor: pointer !important;\n        background-color: var(--card-background-color,var(--ha-card-background));\n    }\n    \n    .icon-container::after {\n        content: '';\n        position: absolute;\n        display: block;\n        opacity: ${e.startsWith("light.")?"0.2":"0"};\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        border-radius: 50%;\n        background-color: ${t?n||"var(--accent-color)":"var(--card-background-color,var(--ha-card-background))"};\n    }\n    \n    .icon {\n        display: flex;\n        width: 22px; \n        color: ${t?n||"var(--accent-color)":"inherit"} !important;\n        opacity: ${t?"1":e?"0.6":"1"};\n        filter: ${t?n?o:"brightness(1.1)":"inherit"};\n    }\n    \n    .entity-picture {\n        display: flex;\n        height: 38px;\n        width: 38px;\n        border-radius: 100%;\n    }\n    `}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{var e="v1.6.0-beta.2",t=__webpack_require__(946);const n=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const i=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=n,e.dispatchEvent(i),i},o=e=>{n(window,"haptic",e)},i=(e,t,o=!1)=>{o?history.replaceState(null,"",t):history.pushState(null,"",t),n(window,"location-changed",{replace:o})};function a(e,t,n){const o={entity:t.entity,tap_action:{action:"more-info"},double_tap_action:{action:"toggle"},hold_action:{action:"toggle"}},i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={config:o,action:n},e.dispatchEvent(i)}let r,s,l,c,d;function p(e,n,o,i){let a=n.styles?n.styles:"",d=n.entity&&o.states[n.entity]?n.entity:"",p=!n.icon&&n.entity?o.states[d].attributes.icon||o.states[d].attributes.entity_picture||"":n.icon||"",h=n.name?n.name:n.entity?o.states[d].attributes.friendly_name:"",u=n.width_desktop||"540px",g=u?u.match(/(\d+)(\D+)/):"",b=n.is_sidebar_hidden||!1,_=d?o.states[d].state:"";!function(e,t,n){e.hasState=t.states[n],e.hasState&&(e.newState=[e.hasState.state,e.hasState.attributes.rgb_color],e.oldState&&e.newState[0]===e.oldState[0]&&e.newState[1]===e.oldState[1]?e.stateChanged=!1:(e.oldState=e.newState,e.stateChanged=!0),e.stateChanged)}(e,o,d);let m=e.stateChanged,f=["on","open","cleaning","true","home","playing"].includes(_)||0!==Number(_)&&!isNaN(Number(_)),y=void 0===n.rise_animation||n.rise_animation,v=n.margin?"0"!==n.margin?n.margin:"0px":"7px",w=void 0!==n.bg_opacity?n.bg_opacity:"88",x=void 0!==n.shadow_opacity?n.shadow_opacity:"0",k=void 0!==n.bg_blur?n.bg_blur:"10",{iconColorOpacity:$,iconColor:S,iconFilter:C}=(0,t.mk)(o,d,f,t.wW),E=(0,t.G)(d,f,S,C),O=getComputedStyle(document.body),I=O.getPropertyValue("--ha-card-background")||O.getPropertyValue("--card-background-color"),L=n.bg_color?n.bg_color:I;if(L&&(!e.color||L!==e.color)){const n=1.02;s=(0,t._k)(L,w/100,n),document.body.style.setProperty("--bubble-pop-up-background",s),e.color=L,window.color=L}return{customStyles:a,entityId:d,icon:p,name:h,widthDesktop:u,widthDesktopDivided:g,isSidebarHidden:b,state:_,stateChanged:m,stateOn:f,formatedState:c,riseAnimation:y,marginCenter:v,popUpOpen:r,rgbaColor:s,rgbColor:l,bgOpacity:w,shadowOpacity:x,bgBlur:k,iconColorOpacity:$,iconColor:S,iconFilter:C,iconStyles:E,haStyle:O,themeBgColor:I,color:L}}function h(e){const n=e._hass,r=e.editor,s=e.config;if(!n)return;let l,c,{customStyles:d,entityId:h,icon:u,name:g,widthDesktop:b,widthDesktopDivided:_,isSidebarHidden:m,state:f,stateChanged:y,stateOn:v,formatedState:w,riseAnimation:x,marginCenter:k,popUpOpen:$,rgbaColor:S,rgbColor:C,bgOpacity:E,shadowOpacity:O,bgBlur:I,iconColorOpacity:L,iconColor:T,iconFilter:A,iconStyles:V,haStyle:M,themeBgColor:q,color:U}=p(e,s,n),B=s.auto_close||!1,z=s.hash,D=s.trigger_entity?s.trigger_entity:"",P=s.trigger_state?s.trigger_state:"",j=!!s.trigger_close&&s.trigger_close;if(e.errorTriggered)return;e.initStyleAdded||e.popUp||r||(e.card.style.marginTop="4000px",e.initStyleAdded=!0);if(setTimeout((()=>{let i=e.getRootNode().querySelector("#root");if(i&&(!e.popUp||y||r&&!e.editorModeAdded)){e.popUp=i,(()=>{let i,p,x=e.popUp,C=s.text||"",E=s.state,L=s.margin_top_mobile&&"0"!==s.margin_top_mobile?s.margin_top_mobile:"0px",T=s.margin_top_desktop&&"0"!==s.margin_top_desktop?s.margin_top_desktop:"0px",A=s.entity?"flex":"none";if(f=E?n.states[E].state:"",w=E?n.formatEntityState(n.states[E]):"",e.headerAdded){if(h){const n=e.content.querySelector("#header-container .icon-container"),o=e.content.querySelector("#header-container h2"),i=e.content.querySelector("#header-container p"),a=e.content.querySelector("#header-container .power-button");n.innerHTML="",(0,t.IU)(e,h,u,n,r),o.textContent=g,i.textContent=w,a.setAttribute("style",`display: ${A};`)}}else{const n=document.createElement("div");n.setAttribute("id","header-container");const i=document.createElement("div");n.appendChild(i);const l=document.createElement("div");l.setAttribute("class","icon-container"),i.appendChild(l),(0,t.IU)(e,h,u,l,r),function(e,t,n,o){t.tap_action,t.double_tap_action,t.hold_action;let i,r=0,s=0,l=0;e.addEventListener("mousedown",(()=>{s=Date.now(),i=setTimeout((()=>{a(e,t,"hold")}),300)}),{passive:!0}),e.addEventListener("mouseup",(()=>{clearTimeout(i),l=Date.now(),l-s<300&&(r++,1===r&&setTimeout((()=>{1===r?a(e,t,"tap"):(a(e,t,"double_tap"),o("success")),r=0}),300)),s=0,l=0}),{passive:!0}),e.addEventListener("touchstart",(n=>{o("light"),s=Date.now(),i=setTimeout((()=>{a(e,t,"hold")}),300),n.preventDefault()}),{passive:!0}),e.addEventListener("touchend",(n=>{clearTimeout(i),l=Date.now(),l-s<300&&(r++,1===r&&setTimeout((()=>{a(e,t,1===r?"tap":"double_tap"),r=0}),300)),s=0,l=0,n.preventDefault()}),{passive:!0}),e.addEventListener("mouseout",(()=>{clearTimeout(i)}),{passive:!0}),e.addEventListener("touchcancel",(()=>{clearTimeout(i)}),{passive:!0})}(l,s,0,o);const c=document.createElement("h2");c.textContent=g,i.appendChild(c);const d=document.createElement("p");d.textContent=w,i.appendChild(d);const p=document.createElement("ha-icon");p.setAttribute("class","power-button"),p.setAttribute("icon","mdi:power"),p.setAttribute("style",`display: ${A};`),i.appendChild(p);const b=document.createElement("button");b.setAttribute("class","close-pop-up"),b.onclick=function(){history.replaceState(null,null,location.href.split("#")[0]),localStorage.setItem("isManuallyClosed_"+z,!0)},n.appendChild(b);const _=document.createElement("ha-icon");_.setAttribute("icon","mdi:close"),b.appendChild(_),e.content.appendChild(n),e.header=i,e.headerAdded=!0}function M(){!function(e,t){e.callService("homeassistant","toggle",{entity_id:t})}(n,h)}function q(e){"Escape"===e.key&&($=z+!1,history.replaceState(null,null,location.href.split("#")[0]),localStorage.setItem("isManuallyClosed_"+z,!0))}function D(e){window.hash===z&&R(),l=e.touches[0].clientY,c=l}function P(e){e.touches[0].clientY-l>300&&e.touches[0].clientY>c&&($=z+!1,history.replaceState(null,null,location.href.split("#")[0]),$=z+!1,localStorage.setItem("isManuallyClosed_"+z,!0)),c=e.touches[0].clientY}if(e.eventAdded||r||(window["checkHashRef_"+z]=function(){r||(window.hash=location.hash.split("?")[0],window.hash===z?setTimeout((function(){x.classList.remove("close-pop-up"),x.classList.add("open-pop-up"),j.querySelector(".power-button").addEventListener("click",M,{passive:!0}),window.addEventListener("keydown",q,{passive:!0}),x.addEventListener("touchstart",D,{passive:!0}),x.addEventListener("touchmove",P,{passive:!0}),$=z+!0,document.body.style.overflow="hidden",setTimeout((()=>{window.justOpened=!0}),10),W(x,!1),R()}),0):x.classList.contains("open-pop-up")&&(setTimeout((function(){x.classList.remove("open-pop-up"),x.classList.add("close-pop-up"),j.querySelector(".power-button").removeEventListener("click",M),window.removeEventListener("keydown",q),x.removeEventListener("touchstart",D),x.removeEventListener("touchmove",P),$=z+!1,document.body.style.overflow="",window.justOpened=!1,clearTimeout(i)}),0),setTimeout((function(){W(x,!0)}),320)))},window.addEventListener("urlChanged",window["checkHashRef_"+z],{passive:!0}),window.addEventListener("click",(function(e){if(location.hash===z&&R(),!window.justOpened)return;const t=e.composedPath();!t||t.some((e=>"HA-MORE-INFO-DIALOG"===e.nodeName))||t.some((e=>"root"===e.id&&!e.classList.contains("close-pop-up")))||$!==z+!0||setTimeout((function(){location.hash===z&&($=z+!1,history.replaceState(null,null,location.href.split("#")[0]),localStorage.setItem("isManuallyClosed_"+z,!0))}),0)}),{passive:!0}),e.eventAdded=!0),h){const o=n.states[h].attributes.rgb_color;e.rgbColor=o?(0,t.wW)(o)?"rgb(255,220,200)":`rgb(${o})`:v?h.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"rgba(255, 255, 255, 1",e.rgbColorOpacity=o?(0,t.wW)(o)?"rgba(255,220,200, 0.5)":`rgba(${o}, 0.5)`:h&&v?h.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"var(--background-color,var(--secondary-background-color))",p=(0,t._k)(U,0),e.iconFilter=o?(0,t.wW)(o)?"none":"brightness(1.1)":"none"}else p=(0,t._k)(U,0);let j=e.content;function W(e,t){for(var n=e.querySelectorAll("video"),o=0;o<n.length;o++){var i=n[o]&&n[o].currentTime>0&&!n[o].paused&&!n[o].ended&&n[o].readyState>n[o].HAVE_CURRENT_DATA;t&&i?n[o].pause():t||i||(n[o].play(),n[o].currentTime>0&&(n[o].currentTime=1e4))}var a=e.querySelectorAll("*");for(o=0;o<a.length;o++)a[o].shadowRoot&&W(a[o].shadowRoot,t)}function R(){clearTimeout(i),B>0&&(i=setTimeout(H,B))}function H(){history.replaceState(null,null,location.href.split("#")[0])}const F=`                    \n            ha-card {\n                margin-top: 0 !important;\n                background: none !important;\n                border: none !important;\n            }\n            .card-content {\n                width: 100% !important;\n                padding: 0 !important;\n            }\n            #root {\n                transition: all 1s !important;\n                position: fixed !important;\n                margin: 0 -${k}; /* 7px */\n                width: 100%;\n                ${s.bg_color||s.bg_opacity?"--bubble-pop-up-background-custom: "+S:""};\n                background-color: var(--bubble-pop-up-background-custom, var(--bubble-pop-up-background));\n                box-shadow: 0px 0px 50px rgba(0,0,0,${O/100});\n                backdrop-filter: blur(${I}px);\n                -webkit-backdrop-filter: blur(${I}px);\n                border-radius: 42px;\n                box-sizing: border-box;\n                top: calc(120% + ${L} + var(--header-height));\n                grid-gap: 12px !important;\n                gap: 12px !important;\n                grid-auto-rows: min-content;\n                padding: 18px 18px 220px 18px !important;\n                height: 100% !important;\n                -ms-overflow-style: none; /* for Internet Explorer, Edge */\n                scrollbar-width: none; /* for Firefox */\n                overflow-y: auto; \n                overflow-x: hidden; \n                z-index: 1 !important; /* Higher value hide the more-info panel */\n                /* For older Safari but not working with Firefox */\n                /* display: grid !important; */  \n            }\n            #root.hidden {\n            \tdisplay: none !important;\n            }\n            #root > :first-child::after {\n                content: '';\n                display: block;\n                position: sticky;\n                top: 0;\n                left: -50px;\n                margin: -70px 0 -36px -36px;\n                overflow: visible;\n                width: 200%;\n                height: 100px;\n                background: linear-gradient(0deg, ${p} 0%, ${S} 80%);\n                z-index: 0;\n            } \n            #root::-webkit-scrollbar {\n                display: none; /* for Chrome, Safari, and Opera */\n            }\n            #root > :first-child {\n                position: sticky;\n                top: 0;\n                z-index: 1;\n                background: none !important;\n                overflow: visible;\n            }\n            #root.open-pop-up {\n                /*will-change: transform;*/\n                transform: translateY(-120%);\n                transition: transform .36s !important;\n            }\n            #root.open-pop-up > * {\n              /* Block child items to overflow and if they do clip them */\n              /*max-width: calc(100vw - 38px);*/\n              max-width: 100% !important;\n              /*overflow-x: clip;*/\n            }\n            #root.close-pop-up { \n                transform: translateY(-20%);\n                transition: transform .4s !important;\n                box-shadow: none;\n            }\n            @media only screen and (min-width: 600px) {\n                #root {\n                    top: calc(120% + ${T} + var(--header-height));\n                    width: calc(${b}${"%"!==_[2]||m?"":" - var(--mdc-drawer-width)"}) !important;\n                    left: calc(50% - ${_[1]/2}${_[2]});\n                    margin: 0 !important;\n                }\n            }  \n            @media only screen and (min-width: 870px) {\n                #root {\n                    left: calc(50% - ${_[1]/2}${_[2]} + ${m?"0px":"var(--mdc-drawer-width) "+("%"===_[2]?"":"/ 2")});\n                }\n            }  \n            #root.editor {\n                position: inherit !important;\n                width: 100% !important;\n                padding: 18px !important;\n            }\n        `,N=`\n            ${V}\n\n            ha-card {\n                margin-top: 0 !important;\n            }\n            #header-container {\n                display: inline-flex;\n                ${u||g||h||f||C?"":"flex-direction: row-reverse;"}\n                height: 50px;\n                width: 100%;\n                margin: 0;\n                padding: 0;\n            }\n            #header-container > div {\n                display: ${u||g||h||f||C?"inline-flex":"none"};\n                align-items: center;\n                position: relative;\n                padding-right: 6px;\n                z-index: 1;\n                flex-grow: 1;\n                background-color: ${h?e.rgbColorOpacity:"var(--background-color,var(--secondary-background-color))"};\n                transition: background 1s;\n                border-radius: 25px;\n                margin-right: 14px;\n                backdrop-filter: blur(14px);\n                -webkit-backdrop-filter: blur(14px);\n            }\n            #header-container h2 {\n                display: inline-flex;\n                margin: 0 18px 0 0;\n                padding: 4px;\n                z-index: 1;\n                font-size: 18px;\n            }\n            #header-container p {\n                display: inline-flex;\n                font-size: 16px;\n                min-width: fit-content ;\n            }\n            .power-button {\n                cursor: pointer; \n                flex-grow: inherit; \n                width: 24px;\n                height: 24px;\n                border-radius: 12px;\n                margin: 0 10px;\n                background: none !important;\n                justify-content: flex-end;\n                background-color: var(--background-color,var(--secondary-background-color));\n            }\n            .close-pop-up {\n                height: 50px;\n                width: 50px;\n                border: none;\n                border-radius: 50%;\n                z-index: 1;\n                background: var(--background-color,var(--secondary-background-color));\n                color: var(--primary-text-color);\n                flex-shrink: 0;\n                cursor: pointer;\n            }\n        `;e.popUpStyleAdded||((0,t.L2)(n,e,F,d,f,h,"","",x),e.popUpStyleAdded=!0),(0,t.L2)(n,e,N,d,f,h,y)})();const p=new Event("popUpInitialized");window.dispatchEvent(p),r&&(e.popUp.classList.add("editor"),e.editorModeAdded=!0)}else!r&&e.popUp&&(e.popUp.classList.remove("editor"),e.editorModeAdded=!1)}),0),e.popUp&&D&&y){null===localStorage.getItem("previousTriggerState_"+z)&&localStorage.setItem("previousTriggerState_"+z,""),null===localStorage.getItem("isManuallyClosed_"+z)&&localStorage.setItem("isManuallyClosed_"+z,"false"),null===localStorage.getItem("isTriggered_"+z)&&localStorage.setItem("isTriggered_"+z,"false");let t=localStorage.getItem("previousTriggerState_"+z),o="true"===localStorage.getItem("isManuallyClosed_"+z),a="true"===localStorage.getItem("isTriggered_"+z);n.states[D].state!==P||null!==t||a||(i(0,z),a=!0,localStorage.setItem("isTriggered_"+z,a)),n.states[D].state!==t&&(o=!1,localStorage.setItem("previousTriggerState_"+z,n.states[D].state),localStorage.setItem("isManuallyClosed_"+z,o)),n.states[D].state!==P||o?n.states[D].state!==P&&j&&e.popUp.classList.contains("open-pop-up")&&a&&!o&&(history.replaceState(null,null,location.href.split("#")[0]),$=z+!1,a=!1,o=!0,localStorage.setItem("isManuallyClosed_"+z,o),localStorage.setItem("isTriggered_"+z,a)):(i(0,z),a=!0,localStorage.setItem("isTriggered_"+z,a))}}new MutationObserver(((t,o)=>{if(customElements.get("ha-panel-lovelace")){const t=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),i=t.prototype.html,a=t.prototype.css;class r extends t{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _text(){return this._config.text||""}get _hash(){return this._config.hash||"#pop-up-name"}get _trigger_entity(){return this._config.trigger_entity||""}get _trigger_state(){return this._config.trigger_state||""}get _trigger_close(){return this._config.trigger_close||!1}get _margin(){return this._config.margin||"7px"}get _margin_top_mobile(){return this._config.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config.margin_top_desktop||"0px"}get _width_desktop(){return this._config.width_desktop||"540px"}get _bg_color(){return this._config.bg_color||window.color}get _bg_opacity(){return void 0!==this._config.bg_opacity?this._config.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config.bg_blur?this._config.bg_blur:"14"}get _shadow_opacity(){return void 0!==this._config.shadow_opacity?this._config.shadow_opacity:"0"}get _is_sidebar_hidden(){return this._config.is_sidebar_hidden||!1}get _auto_close(){return this._config.auto_close||""}get _back_open(){return this._config.back_open||!1}render(){if(!this.hass)return i``;if(!this.listsUpdated){const e=e=>({label:e,value:e});this.allEntitiesList=Object.keys(this.hass.states).map(e),this.lightList=Object.keys(this.hass.states).filter((e=>"light"===e.substr(0,e.indexOf(".")))).map(e),this.sensorList=Object.keys(this.hass.states).filter((e=>"sensor"===e.substr(0,e.indexOf(".")))).map(e),this.binarySensorList=Object.keys(this.hass.states).filter((e=>"binary_sensor"===e.substr(0,e.indexOf(".")))).map(e),this.coverList=Object.keys(this.hass.states).filter((e=>"cover"===e.substr(0,e.indexOf(".")))).map(e),this.cardTypeList=[{label:"Button",value:"button"},{label:"Cover",value:"cover"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Pop-up",value:"pop-up"},{label:"Separator",value:"separator"}],this.buttonTypeList=[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"}],this.listsUpdated=!0}const e=this.allEntitiesList;return this.lightList,this.sensorList,this.coverList,this.cardTypeList,this.buttonTypeList,i`
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
                        <h3>Advanced settings</h3>
                        <ha-formfield .label="Optional - Back button/event support">
                            <ha-switch
                                aria-label="Optional - Back button/event support"
                                .checked=${this._back_open?this._back_open:window.backOpen}
                                .configValue="${"back_open"}"
                                @change=${this._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Back button/event support</label> 
                            </div>
                        </ha-formfield>
                        <ha-alert alert-type="info"><b>Back button/event support</b> : This allow you to navigate through your pop-ups history when you press the back button of your browser. <b>This setting can be applied only once, you don't need to change it in all pop-ups. If it's not working just turn it on for each pop-ups.</b></ha-alert>
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
                  `}makeButton(){let e=[];for(let t=1;t<=this.buttonIndex;t++)e.push(i`
                        <div class="${t}_button">
                            <div class="button-header">
                                <ha-icon class="remove-button" icon="mdi:close" @click=${()=>this.removeButton(t)}></ha-icon>
                                <span class="button-number">Button ${t}</span>
                            </div>
                            <ha-textfield
                                label="Link / Hash to pop-up (e.g. #kitchen)"
                                .value="${this._config[t+"_link"]||""}"
                                .configValue="${t}_link"
                                @input="${this._valueChanged}"
                                style="width: 100%;"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Name"
                                .value="${this._config[t+"_name"]||""}"
                                .configValue="${t}_name"
                                @input="${this._valueChanged}"
                                style="width: 100%;"
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
                                .items="${this.binarySensorList}"
                                @value-changed="${this._valueChanged}"
                            ></ha-combo-box>
                        </div>
                    `);return e}makeVersion(){return i`
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
                `}removeButton(e){delete this._config[e+"_name"],delete this._config[e+"_icon"],delete this._config[e+"_link"],delete this._config[e+"_entity"],delete this._config[e+"_pir_sensor"];for(let t=e;t<this.buttonIndex;t++)this._config[t+"_name"]=this._config[t+1+"_name"],this._config[t+"_icon"]=this._config[t+1+"_icon"],this._config[t+"_link"]=this._config[t+1+"_link"],this._config[t+"_entity"]=this._config[t+1+"_entity"],this._config[t+"_pir_sensor"]=this._config[t+1+"_pir_sensor"];delete this._config[this.buttonIndex+"_name"],delete this._config[this.buttonIndex+"_icon"],delete this._config[this.buttonIndex+"_link"],delete this._config[this.buttonIndex+"_entity"],delete this._config[this.buttonIndex+"_pir_sensor"],this.buttonIndex--,n(this,"config-changed",{config:this._config})}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target,o=e.detail;t.configValue&&("ha-switch"===t.type?this._config={...this._config,[t.configValue]:t.checked}:this._config={...this._config,[t.configValue]:void 0===t.checked&&o.value?t.checked||o.value:t.value||t.checked}),n(this,"config-changed",{config:this._config})}static get styles(){return a`
              div {
                display: grid;
                grid-gap: 12px;
              }
              #add-button {
                height: 32px;
                border-radius: 16px;
                border: none;
                background-color: var(--accent-color);
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
            `}}customElements.define("bubble-pop-up-editor",r),o.disconnect()}})).observe(document,{childList:!0,subtree:!0}),function(){if(!window.eventAdded){const e=new Event("urlChanged");function t(){let t=0;window.dispatchEvent(e);const n=setInterval((()=>{t<10?(window.dispatchEvent(e),t++):clearInterval(n)}),1e3)}window.popUpInitialized=!1,["click","mousedown","touchstart","focus","location-changed","connection-status"].forEach((e=>{window.addEventListener(e,t)}),{passive:!0});const n=()=>{window.dispatchEvent(e),window.addEventListener("popstate",t,{passive:!0})};window.addEventListener("popUpInitialized",n,{passive:!0}),window.eventAdded=!0}}();class u extends HTMLElement{set hass(e){var t;this._hass=e,d=document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("div").classList.contains("edit-mode"),this.editor=d,async function(e){if(!window.resourcesChecked){window.resourcesChecked=!0;let t=(await e.callWS({type:"lovelace/resources"})).find((e=>e.url.includes("bubble-pop-up.js")));t&&await e.callWS({type:"lovelace/resources/delete",resource_id:t.id})}}(e),(t=this).content||(t.attachShadow({mode:"open"}),t.shadowRoot.innerHTML='\n            <ha-card style="background: none; border: none; box-shadow: none;">\n                <div class="card-content" style="padding: 0;">\n                </div>\n            </ha-card>\n        ',t.card=t.shadowRoot.querySelector("ha-card"),t.content=t.shadowRoot.querySelector("div")),h(this)}setConfig(e){if(!e.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.");this.config=e}getCardSize(){return-1e4}static getConfigElement(){return document.createElement("bubble-pop-up-editor")}}new MutationObserver(((e,t)=>{customElements.get("ha-panel-lovelace")&&(customElements.define("bubble-pop-up",u),t.disconnect())})).observe(document,{childList:!0,subtree:!0}),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-pop-up",name:"Bubble Pop-up",preview:!1,description:"Just add it in a vertical-stack first."}),console.info(`%c Bubble Card - Pop-up %c ${e} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})()})();
(()=>{"use strict";var __webpack_modules__={946:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>getIconStyles,IU:()=>createIcon,L2:()=>addStyles,_k:()=>convertToRGBA,mk:()=>getIconColor,wW:()=>isColorCloseToWhite});let timeouts={},idCounter=0;const addStyles=function(hass,context,styles,customStyles,state,entityId,stateChanged,path="",element=context.content){const id=idCounter++,key=id+styles,executeStyles=()=>{const customStylesEval=customStyles?eval("`"+customStyles+"`"):"";let styleAddedKey=styles+"Added";if(!context[styleAddedKey]||context.previousStyle!==customStylesEval||stateChanged||context.previousConfig!==context.config){if(!context[styleAddedKey]){if(context.styleElement=element.querySelector("style"),!context.styleElement){context.styleElement=document.createElement("style");const e=path?element.querySelector(path):element;e?.appendChild(context.styleElement)}context[styleAddedKey]=!0}const e=document.createElement("style");e.innerHTML=customStylesEval+styles,context.styleElement.parentNode.insertBefore(e,context.styleElement.nextSibling),context.styleElement.parentNode.removeChild(context.styleElement),context.styleElement=e,context.previousStyle=customStylesEval,context.previousConfig=context.config}};timeouts[key]?clearTimeout(timeouts[key]):executeStyles(),timeouts[key]=setTimeout(executeStyles,500)};function createIcon(e,t,n,o,i){let a=e._hass,r=!(!t||!a.states[t].attributes)&&a.states[t].attributes;e.imageUrl=!!r.entity_picture&&r.entity_picture,updateIcon(e,a,t,n,o),i||setInterval((()=>{a=e._hass,t&&a.states[t]&&(e.currentEntityPicture=a.states[t].attributes.entity_picture,e.currentEntityPicture!==e.previousEntityPicture&&(e.imageUrl=e.currentEntityPicture,updateIcon(e,a,t,n,o),e.previousEntityPicture=e.currentEntityPicture))}),1e3)}function updateIcon(e,t,n,o,i){for(;i.firstChild;)i.removeChild(i.firstChild);let a=e.config.icon&&e.config.icon.includes("/")?e.config.icon:e.imageUrl?e.imageUrl:"";if(a&&(r=t.states[n].state,n.startsWith("media_player.")&&!["off","unknown","idle",void 0].includes(r)||!n.startsWith("media_player."))){const e=document.createElement("div");e.setAttribute("class","entity-picture"),e.setAttribute("alt","Icon"),i&&(i.appendChild(e),i.style.background="center / cover no-repeat url("+a+"), var(--card-background-color,var(--ha-card-background))")}else{const e=document.createElement("ha-icon");e.setAttribute("icon",o),e.setAttribute("class","icon"),i&&i.appendChild(e)}var r}function isColorCloseToWhite(e){let t=[220,220,190];for(let n=0;n<3;n++)if(e[n]<t[n])return!1;return!0}function convertToRGBA(e,t,n=1){let o="";if(e.startsWith("#"))o=4===e.length?"rgba("+Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n)+", "+t+")":"rgba("+Math.min(255,parseInt(e.slice(1,3),16)*n)+", "+Math.min(255,parseInt(e.slice(3,5),16)*n)+", "+Math.min(255,parseInt(e.slice(5,7),16)*n)+", "+t+")";else if(e.startsWith("rgb")){let i=e.match(/\d+/g);e.includes("rgba"),o="rgba("+Math.min(255,i[0]*n)+", "+Math.min(255,i[1]*n)+", "+Math.min(255,i[2]*n)+", "+t+")"}return o}function getIconColor(e,t,n,o,i){let a,r,s;return t&&t.startsWith("light.")?(a=(i=e.states[t].attributes.rgb_color)?o(i)?"rgba(255,220,200,0.5)":`rgba(${i}, 0.5)`:n?"rgba(255,220,200, 0.5)":"rgba(255, 255, 255, 0.5)",r=i?o(i)?"rgb(255,220,200)":`rgb(${i})`:n?"rgba(255,220,200, 1)":"rgba(255, 255, 255, 1)",s=i?o(i)?"none":"brightness(1.1)":"none"):(a="var(--accent-color)",s="brightness(1.1)"),{iconColorOpacity:a,iconColor:r,iconFilter:s}}function getIconStyles(e,t,n,o){return`\n    .icon-container {\n        position: relative;\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        z-index: 1;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        cursor: pointer !important;\n        background-color: var(--card-background-color,var(--ha-card-background));\n    }\n    \n    .icon-container::after {\n        content: '';\n        position: absolute;\n        display: block;\n        opacity: ${e.startsWith("light.")?"0.2":"0"};\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        border-radius: 50%;\n        background-color: ${t?n||"var(--accent-color)":"var(--card-background-color,var(--ha-card-background))"};\n    }\n    \n    .icon {\n        display: flex;\n        width: 22px; \n        color: ${t?n||"var(--accent-color)":"inherit"} !important;\n        opacity: ${t?"1":e?"0.6":"1"};\n        filter: ${t?n?o:"brightness(1.1)":"inherit"};\n    }\n    \n    .entity-picture {\n        display: flex;\n        height: 38px;\n        width: 38px;\n        border-radius: 100%;\n    }\n    `}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{let e="v1.6.0-beta.5";var t=__webpack_require__(946);const n=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const i=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=n,e.dispatchEvent(i),i},o=e=>{n(window,"haptic",e)},i=300;let a,r,s,l,c,d=null,p=0,u=0;function h(e,t,n){const o=Date.now();if("tap"===n&&o-u<i)return;if(d===n&&o-p<i)return;let a={entity:t.entity,tap_action:t.tap_action||{action:"more-info"},double_tap_action:t.double_tap_action||{action:"toggle"},hold_action:t.hold_action||{action:"toggle"}};console.log("Action =",n,"Action config =",a),setTimeout((()=>{const t=new Event("hass-action",{bubbles:!0,composed:!0});t.detail={config:a,action:n},e.dispatchEvent(t)}),1),d=n,p=o,"double_tap"===n&&(u=o)}function g(e,n,o,i){let c=n.styles?n.styles:"",d=n.entity&&o.states[n.entity]?n.entity:"",p=!n.icon&&d?o.states[d].attributes.icon||o.states[d].attributes.entity_picture||"":n.icon||"",u=n.name?n.name:d?o.states[d].attributes.friendly_name:"",h=n.width_desktop||"540px",g=h?h.match(/(\d+)(\D+)/):"",b=n.is_sidebar_hidden||!1,m=d?o.states[d].state:"";!function(e,t,n){e.hasState=t.states[n],e.hasState&&(e.newState=[e.hasState.state,e.hasState.attributes.rgb_color],e.oldState&&e.newState[0]===e.oldState[0]&&e.newState[1]===e.oldState[1]?e.stateChanged=!1:(e.oldState=e.newState,e.stateChanged=!0),e.stateChanged)}(e,o,d);let _=e.stateChanged,f=["on","open","cleaning","true","home","playing"].includes(m)||0!==Number(m)&&!isNaN(Number(m)),y=void 0===n.rise_animation||n.rise_animation,v=n.margin?"0"!==n.margin?n.margin:"0px":"7px",w=void 0!==n.bg_opacity?n.bg_opacity:"88",x=void 0!==n.shadow_opacity?n.shadow_opacity:"0",k=void 0!==n.bg_blur?n.bg_blur:"10",{iconColorOpacity:C,iconColor:$,iconFilter:E}=(0,t.mk)(o,d,f,t.wW),S=(0,t.G)(d,f,$,E),O=getComputedStyle(document.body),A=O.getPropertyValue("--ha-card-background")||O.getPropertyValue("--card-background-color"),I=n.bg_color?n.bg_color:A;if(I&&(!e.color||I!==e.color)){const n=1.02;r=(0,t._k)(I,w/100,n),document.body.style.setProperty("--bubble-pop-up-background",r),e.color=I,window.color=I}return{customStyles:c,entityId:d,icon:p,name:u,widthDesktop:h,widthDesktopDivided:g,isSidebarHidden:b,state:m,stateChanged:_,stateOn:f,formatedState:l,riseAnimation:y,marginCenter:v,popUpOpen:a,rgbaColor:r,rgbColor:s,bgOpacity:w,shadowOpacity:x,bgBlur:k,iconColorOpacity:C,iconColor:$,iconFilter:E,iconStyles:S,haStyle:O,themeBgColor:A,color:I}}function b(e){const a=e._hass,r=e.editor,s=e.config;if(!a)return;let l,c,d,p,{customStyles:u,entityId:b,icon:m,name:_,widthDesktop:f,widthDesktopDivided:y,isSidebarHidden:v,state:w,stateChanged:x,stateOn:k,formatedState:C,riseAnimation:$,marginCenter:E,popUpOpen:S,rgbaColor:O,rgbColor:A,bgOpacity:I,shadowOpacity:L,bgBlur:T,iconColorOpacity:U,iconColor:M,iconFilter:V,iconStyles:q,haStyle:D,themeBgColor:z,color:P}=g(e,s,a),B=s.auto_close||!1,R=s.hash,W=(s.trigger_entity&&s.trigger_entity,s.trigger_state&&s.trigger_state,!!s.trigger_close&&s.trigger_close,s.entity?"flex":"none"),F=s.text||"",N=s.state,H=s.margin_top_mobile&&"0"!==s.margin_top_mobile?s.margin_top_mobile:"0px",j=s.margin_top_desktop&&"0"!==s.margin_top_desktop?s.margin_top_desktop:"0px";if(w=N&&a.states[N]?a.states[N].state:"",e.errorTriggered)return;function Y(e){if(window.hash===R&&G(),!window.justOpened)return;const t=e.composedPath();!t||t.some((e=>"HA-MORE-INFO-DIALOG"===e.nodeName))||t.some((e=>"root"===e.id&&!e.classList.contains("close-pop-up")))||S!==R+!0||setTimeout((function(){window.hash===R&&document.body.contains(e.target)&&(S=R+!1,history.replaceState(null,null,location.href.split("#")[0]),n(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+R,!0))}),0)}function G(){clearTimeout(d),B>0&&(d=setTimeout(K,B))}function K(){history.replaceState(null,null,location.href.split("#")[0]),n(window,"location-changed",!0)}function J(){!function(e,t){e.callService("homeassistant","toggle",{entity_id:t})}(a,b)}function X(e){"Escape"===e.key&&(S=R+!1,history.replaceState(null,null,location.href.split("#")[0]),n(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+R,!0))}function Q(e){window.hash===R&&G(),l=e.touches[0].clientY,c=l}function Z(e){e.touches[0].clientY-l>300&&e.touches[0].clientY>c&&(S=R+!1,history.replaceState(null,null,location.href.split("#")[0]),n(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+R,!0)),c=e.touches[0].clientY}function ee(){r||(window.hash=location.hash.split("?")[0],window.hash===R?(window.removeEventListener("click",Y),e.popUp.classList.remove("close-pop-up"),e.popUp.classList.add("open-pop-up"),e.content.querySelector(".power-button").addEventListener("click",J,{passive:!0}),window.addEventListener("keydown",X,{passive:!0}),e.popUp.addEventListener("touchstart",Q,{passive:!0}),e.popUp.addEventListener("touchmove",Z,{passive:!0}),S=R+!0,document.body.style.overflow="hidden",setTimeout((()=>{window.justOpened=!0}),10),te(e.popUp,!1),G(),setTimeout((function(){window.addEventListener("click",Y,{passive:!0})}),10)):e.popUp.classList.contains("open-pop-up")&&(e.popUp.classList.remove("open-pop-up"),e.popUp.classList.add("close-pop-up"),e.content.querySelector(".power-button").removeEventListener("click",J),window.removeEventListener("keydown",X),e.popUp.removeEventListener("touchstart",Q),e.popUp.removeEventListener("touchmove",Z),S=R+!1,document.body.style.overflow="",window.justOpened=!1,clearTimeout(d),setTimeout((function(){te(e.popUp,!0)}),320)))}function te(e,t){for(var n=e.querySelectorAll("video"),o=0;o<n.length;o++){var i=n[o]&&n[o].currentTime>0&&!n[o].paused&&!n[o].ended&&n[o].readyState>n[o].HAVE_CURRENT_DATA;t&&i?n[o].pause():t||i||(n[o].play(),n[o].currentTime>0&&(n[o].currentTime=1e4))}var a=e.querySelectorAll("*");for(o=0;o<a.length;o++)a[o].shadowRoot&&te(a[o].shadowRoot,t)}function ne(){let l=e.popUp;C=N?a.formatEntityState(a.states[N]):"",e.headerAdded?b&&(e.iconContainer.innerHTML="",(0,t.IU)(e,b,m,e.iconContainer,r),e.h2.textContent=_,e.p.textContent=C,e.haIcon2.setAttribute("style",`display: ${W};`)):(e.headerContainer=document.createElement("div"),e.headerContainer.setAttribute("id","header-container"),e.div=document.createElement("div"),e.headerContainer.appendChild(e.div),e.iconContainer=document.createElement("div"),e.iconContainer.setAttribute("class","icon-container"),e.div.appendChild(e.iconContainer),(0,t.IU)(e,b,m,e.iconContainer,r),function(e,t,n,o){t.tap_action,t.double_tap_action,t.hold_action;let a,r,s=!1,l=0,c=0,d=0,p=0;e.addEventListener("mousedown",(()=>{d=Date.now(),r=setTimeout((()=>{h(e,t,"hold")}),i)}),{passive:!0}),e.addEventListener("mouseup",(()=>{clearTimeout(r),p=Date.now(),p-d<i&&(c++,1===c&&setTimeout((()=>{1===c?h(e,t,"tap"):(h(e,t,"double_tap"),o("success")),c=0}),i)),d=0,p=0}),{passive:!0}),e.addEventListener("touchstart",(n=>{s=!0,s&&o("light"),d=Date.now(),r=setTimeout((()=>{h(e,t,"hold")}),i)}),{passive:!0}),e.addEventListener("touchend",(function(n){let o=(new Date).getTime(),s=o-l;clearTimeout(r),s<i&&s>0?(clearTimeout(a),h(e,t,"double_tap")):a=setTimeout((function(){h(e,t,"tap")}),i),l=o}),{passive:!0}),e.addEventListener("mouseout",(()=>{clearTimeout(r)}),{passive:!0}),e.addEventListener("touchcancel",(()=>{clearTimeout(r)}),{passive:!0})}(e.iconContainer,s,0,o),e.h2=document.createElement("h2"),e.h2.textContent=_,e.div.appendChild(e.h2),e.p=document.createElement("p"),e.p.textContent=C,e.div.appendChild(e.p),e.haIcon2=document.createElement("ha-icon"),e.haIcon2.setAttribute("class","power-button"),e.haIcon2.setAttribute("icon","mdi:power"),e.haIcon2.setAttribute("style",`display: ${W};`),e.div.appendChild(e.haIcon2),e.button=document.createElement("button"),e.button.setAttribute("class","close-pop-up"),e.button.onclick=function(){history.replaceState(null,null,location.href.split("#")[0]),n(window,"location-changed",!0),localStorage.setItem("isManuallyClosed_"+R,!0)},e.headerContainer.appendChild(e.button),e.haIcon3=document.createElement("ha-icon"),e.haIcon3.setAttribute("icon","mdi:close"),e.button.appendChild(e.haIcon3),e.content.appendChild(e.headerContainer),e.header=e.div,e.headerAdded=!0),function(){if(b){const n=a.states[b].attributes.rgb_color;e.rgbColor=n?(0,t.wW)(n)?"rgb(255,220,200)":`rgb(${n})`:k?b.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"rgba(255, 255, 255, 1",e.rgbColorOpacity=n?(0,t.wW)(n)?"rgba(255,220,200, 0.5)":`rgba(${n}, 0.5)`:b&&k?b.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"var(--background-color,var(--secondary-background-color))",p=(0,t._k)(P,0),e.iconFilter=n?(0,t.wW)(n)?"none":"brightness(1.1)":"none"}else p=(0,t._k)(P,0)}(),e.eventAdded||r||(window["checkHashRef_"+R]=ee,window.addEventListener("urlChanged",window["checkHashRef_"+R],{passive:!0}),window.addEventListener("click",Y,{passive:!0}),e.eventAdded=!0);const c=`                    \n            ha-card {\n                margin-top: 0 !important;\n                background: none !important;\n                border: none !important;\n            }\n            .card-content {\n                width: 100% !important;\n                padding: 0 !important;\n            }\n            #root {\n            \ttransition: transform .36s !important;\n                position: fixed !important;\n                margin: 0 -${E}; /* 7px */\n                width: 100%;\n                ${s.bg_color||s.bg_opacity?"--bubble-pop-up-background-custom: "+O:""};\n                background-color: var(--bubble-pop-up-background-custom, var(--bubble-pop-up-background));\n                box-shadow: 0px 0px 50px rgba(0,0,0,${L/100});\n                backdrop-filter: blur(${T}px);\n                -webkit-backdrop-filter: blur(${T}px);\n                border-radius: 42px;\n                box-sizing: border-box;\n                top: calc(120% + ${H} + var(--header-height));\n                grid-gap: 12px !important;\n                gap: 12px !important;\n                grid-auto-rows: min-content;\n                padding: 18px 18px 220px 18px !important;\n                height: 100% !important;\n                -ms-overflow-style: none; /* for Internet Explorer, Edge */\n                scrollbar-width: none; /* for Firefox */\n                overflow-y: auto; \n                overflow-x: hidden; \n                z-index: 1 !important; /* Higher value hide the more-info panel */\n                /* For older Safari but not working with Firefox */\n                /* display: grid !important; */  \n            }\n            #root.hidden {\n            \tdisplay: none !important;\n            }\n            #root > :first-child::after {\n                content: '';\n                display: block;\n                position: sticky;\n                top: 0;\n                left: -50px;\n                margin: -70px 0 -36px -36px;\n                overflow: visible;\n                width: 200%;\n                height: 100px;\n                background: linear-gradient(0deg, ${p} 0%, ${O} 80%);\n                z-index: 0;\n            } \n            #root::-webkit-scrollbar {\n                display: none; /* for Chrome, Safari, and Opera */\n            }\n            #root > :first-child {\n                position: sticky;\n                top: 0;\n                z-index: 1;\n                background: none !important;\n                overflow: visible;\n            }\n            #root.open-pop-up {\n                will-change: transform, backdrop-filter;\n                transform: translateY(-120%);\n            }\n            #root.open-pop-up > * {\n              /* Block child items to overflow and if they do clip them */\n              /*max-width: calc(100vw - 38px);*/\n              max-width: 100% !important;\n              /*overflow-x: clip;*/\n            }\n            #root.close-pop-up { \n                transform: translateY(-20%);\n                box-shadow: none;\n            }\n            #root.hide-pop-up { \n            \tdisplay: none !important;\n                backdrop-filter: none !important;\n            }\n            @media only screen and (min-width: 600px) {\n                #root {\n                    top: calc(120% + ${j} + var(--header-height));\n                    width: calc(${f}${"%"!==y[2]||v?"":" - var(--mdc-drawer-width)"}) !important;\n                    left: calc(50% - ${y[1]/2}${y[2]});\n                    margin: 0 !important;\n                }\n            }  \n            @media only screen and (min-width: 870px) {\n                #root {\n                    left: calc(50% - ${y[1]/2}${y[2]} + ${v?"0px":"var(--mdc-drawer-width) "+("%"===y[2]?"":"/ 2")});\n                }\n            }  \n            #root.editor {\n                position: inherit !important;\n                width: 100% !important;\n                padding: 18px !important;\n                backdrop-filter: none !important;\n            }\n        `,d=`\n            ${q}\n\n            ha-card {\n                margin-top: 0 !important;\n            }\n            #header-container {\n                display: inline-flex;\n                ${m||_||b||w||F?"":"flex-direction: row-reverse;"}\n                height: 50px;\n                width: 100%;\n                margin: 0;\n                padding: 0;\n            }\n            #header-container > div {\n                display: ${m||_||b||w||F?"inline-flex":"none"};\n                align-items: center;\n                position: relative;\n                padding-right: 6px;\n                z-index: 1;\n                flex-grow: 1;\n                background-color: ${b?e.rgbColorOpacity:"var(--background-color,var(--secondary-background-color))"};\n                transition: background 1s;\n                border-radius: 25px;\n                margin-right: 14px;\n                backdrop-filter: blur(14px);\n                -webkit-backdrop-filter: blur(14px);\n            }\n            #header-container h2 {\n                display: inline-flex;\n                margin: 0 18px 0 0;\n                padding: 4px;\n                z-index: 1;\n                font-size: 18px;\n            }\n            #header-container p {\n                display: inline-flex;\n                font-size: 16px;\n                min-width: fit-content ;\n            }\n            .power-button {\n                cursor: pointer; \n                flex-grow: inherit; \n                width: 24px;\n                height: 24px;\n                border-radius: 12px;\n                margin: 0 10px;\n                background: none !important;\n                justify-content: flex-end;\n                background-color: var(--background-color,var(--secondary-background-color));\n            }\n            .close-pop-up {\n                height: 50px;\n                width: 50px;\n                border: none;\n                border-radius: 50%;\n                z-index: 1;\n                background: var(--background-color,var(--secondary-background-color));\n                color: var(--primary-text-color);\n                flex-shrink: 0;\n                cursor: pointer;\n            }\n        `;(0,t.L2)(a,e,c,u,w,b,"","",l),(0,t.L2)(a,e,d,u,w,b,x)}e.initStyleAdded||e.popUp||r||(e.card.style.marginTop="4000px",e.initStyleAdded=!0);const oe=setTimeout((()=>{if(e.element||(e.element=e.getRootNode().querySelector("#root")),e.element&&(!e.popUp||x||r&&!e.editorModeAdded)){if(e.popUp=e.element,r&&e.popUp&&!e.editorModeAdded)return e.popUp.classList.add("editor"),e.popUp.classList.remove("close-pop-up","open-pop-up","hide-pop-up"),e.editorModeAdded=!0,void ne();ne(),clearTimeout(oe);const t=new Event("popUpInitialized");window.dispatchEvent(t)}else!r&&e.popUp&&e.editorModeAdded&&(e.popUp.classList.remove("editor"),e.editorModeAdded=!1)}),0)}new MutationObserver(((t,o)=>{if(customElements.get("ha-panel-lovelace")){const t=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),i=t.prototype.html,a=t.prototype.css;class r extends t{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _text(){return this._config.text||""}get _hash(){return this._config.hash||"#pop-up-name"}get _trigger_entity(){return this._config.trigger_entity||""}get _trigger_state(){return this._config.trigger_state||""}get _trigger_close(){return this._config.trigger_close||!1}get _margin(){return this._config.margin||"7px"}get _margin_top_mobile(){return this._config.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config.margin_top_desktop||"0px"}get _width_desktop(){return this._config.width_desktop||"540px"}get _bg_color(){return this._config.bg_color||window.color}get _bg_opacity(){return void 0!==this._config.bg_opacity?this._config.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config.bg_blur?this._config.bg_blur:"14"}get _shadow_opacity(){return void 0!==this._config.shadow_opacity?this._config.shadow_opacity:"0"}get _is_sidebar_hidden(){return this._config.is_sidebar_hidden||!1}get _auto_close(){return this._config.auto_close||""}get _back_open(){return this._config.back_open||!1}render(){if(!this.hass)return i``;if(!this.listsUpdated){const e=e=>({label:e,value:e});this.allEntitiesList=Object.keys(this.hass.states).map(e),this.listsUpdated=!0}const e=this.allEntitiesList;return this.lightList,this.cardTypeList,this.buttonTypeList,i`
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
                            type="number"
                            inputMode="numeric"
                            min="0"
                            step="1000"
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
                        <ha-textfield
                            label="Optional - Background opacity (0-100 range)"
                            type="number"
                            inputMode="numeric"
                            min="0"
                            max="100"
                            .value="${this._bg_opacity}"
                            .configValue="${"bg_opacity"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Background blur (0-100 range)"
                            type="number"
                            inputMode="numeric"
                            min="0"
                            max="100"
                            .value="${this._bg_blur}"
                            .configValue="${"bg_blur"}"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
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
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-alert alert-type="info">Set ‘Background blur’ to 0 if your pop-up animations are rendering at low FPS.</ha-alert>
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
                `}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target,o=e.detail;let i,a="string"==typeof t.value?t.value.replace(",","."):t.value;("string"!=typeof a||!a.endsWith(".")&&"-"!==a)&&(t.configValue&&("ha-switch"===t.type?i=t.checked:(""!==a&&(!isNaN(parseFloat(a))&&isFinite(a)?(i=parseFloat(a),isNaN(i)&&(i=void 0)):i=a),i=void 0!==i?i:void 0===t.checked&&o.value?t.checked||o.value:t.value||t.checked),this._config[t.configValue]!==i&&(this._config={...this._config,[t.configValue]:i},n(this,"config-changed",{config:this._config}))),"HA-COMBO-BOX"===t.tagName&&(o.value?this._config={...this._config,[t.configValue]:o.value}:this._config={...this._config,[t.configValue]:void 0},n(this,"config-changed",{config:this._config})))}static get styles(){return a`
              div {
                display: grid;
                grid-gap: 12px;
              }
            `}}customElements.define("bubble-pop-up-editor",r),o.disconnect()}})).observe(document,{childList:!0,subtree:!0}),function(){if(!window.eventAdded){const e=new Event("urlChanged");function t(){let t=0;window.dispatchEvent(e);const n=setInterval((()=>{t<10?(window.dispatchEvent(e),t++):clearInterval(n)}),1e3)}window.popUpInitialized=!1,["location-changed","connection-status"].forEach((e=>{window.addEventListener(e,t)}),{passive:!0});const n=()=>{window.dispatchEvent(e),window.addEventListener("popstate",t,{passive:!0})};window.addEventListener("popUpInitialized",n,{passive:!0}),window.eventAdded=!0}}();class m extends HTMLElement{set hass(e){var t;this._hass=e,c=function(){const e=function(){try{return document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("div")}catch(e){return}}();if(e)return e.classList.contains("edit-mode")}(),this.editor=c,(t=this).content||(t.attachShadow({mode:"open"}),t.shadowRoot.innerHTML='\n            <ha-card style="background: none; border: none; box-shadow: none; border-radius: 16px;">\n                <div class="card-content" style="padding: 0;">\n                </div>\n            </ha-card>\n        ',t.card=t.shadowRoot.querySelector("ha-card"),t.content=t.shadowRoot.querySelector("div")),b(this)}setConfig(e){if(!e.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.");this.config=e}getCardSize(){return-1e4}static getConfigElement(){return document.createElement("bubble-pop-up-editor")}}new MutationObserver(((e,t)=>{customElements.get("ha-panel-lovelace")&&(customElements.define("bubble-pop-up",m),t.disconnect())})).observe(document,{childList:!0,subtree:!0}),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-pop-up",name:"Bubble Pop-up",preview:!1,description:"Just add it in a vertical-stack first."}),console.info(`%c Bubble Card - Pop-up %c ${e} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})()})();
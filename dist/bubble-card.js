(()=>{"use strict";var __webpack_modules__={946:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>getIconStyles,IU:()=>createIcon,L2:()=>addStyles,_k:()=>convertToRGBA,mk:()=>getIconColor,wW:()=>isColorCloseToWhite});const addStyles=function(hass,context,styles,customStyles,state,entityId,stateChanged,path="",element=context.content){const customStylesEval=customStyles?eval("`"+customStyles+"`"):"";let styleAddedKey=styles+"Added";if(!context[styleAddedKey]||context.previousStyle!==customStylesEval||stateChanged||context.previousConfig!==context.config){if(!context[styleAddedKey]){if(context.styleElement=element.querySelector("style"),!context.styleElement){context.styleElement=document.createElement("style");const t=path?element.querySelector(path):element;t?.appendChild(context.styleElement)}context[styleAddedKey]=!0}context.styleElement.innerHTML!==customStylesEval+styles&&(context.styleElement.innerHTML=customStylesEval+styles),context.previousStyle=customStylesEval,context.previousConfig=context.config}};function createIcon(t,e,n,o,i,a){let r=!(!n||!e.states[n].attributes)&&e.states[n].attributes;t.imageUrl=!!r.entity_picture&&r.entity_picture,updateIcon(t,e,n,o,i),a||e.connection.subscribeEvents((a=>{a.data.entity_id===n&&a.data.old_state&&a.data.old_state.attributes.entity_picture!==a.data.new_state.attributes.entity_picture&&(t.imageUrl=a.data.new_state.attributes.entity_picture,updateIcon(t,e,n,o,i))}),"state_changed")}function updateIcon(t,e,n,o,i){for(;i.firstChild;)i.removeChild(i.firstChild);let a=t.config.icon&&t.config.icon.includes("/")?t.config.icon:t.imageUrl?t.imageUrl:"";if(a&&(r=e.states[n].state,n.startsWith("media_player.")&&!["off","unknown","idle",void 0].includes(r)||!n.startsWith("media_player."))){const t=document.createElement("div");t.setAttribute("class","entity-picture"),t.setAttribute("alt","Icon"),i&&(i.appendChild(t),i.style.background="center / cover no-repeat url("+a+"), var(--card-background-color,var(--ha-card-background))")}else{const t=document.createElement("ha-icon");t.setAttribute("icon",o),t.setAttribute("class","icon"),i&&i.appendChild(t)}var r}function isColorCloseToWhite(t){let e=[220,220,190];for(let n=0;n<3;n++)if(t[n]<e[n])return!1;return!0}function convertToRGBA(t,e,n=1){let o="";if(t.startsWith("#"))o=4===t.length?"rgba("+Math.min(255,parseInt(t.charAt(1).repeat(2),16)*n)+", "+Math.min(255,parseInt(t.charAt(2).repeat(2),16)*n)+", "+Math.min(255,parseInt(t.charAt(3).repeat(2),16)*n)+", "+e+")":"rgba("+Math.min(255,parseInt(t.slice(1,3),16)*n)+", "+Math.min(255,parseInt(t.slice(3,5),16)*n)+", "+Math.min(255,parseInt(t.slice(5,7),16)*n)+", "+e+")";else if(t.startsWith("rgb")){let i=t.match(/\d+/g);t.includes("rgba"),o="rgba("+Math.min(255,i[0]*n)+", "+Math.min(255,i[1]*n)+", "+Math.min(255,i[2]*n)+", "+e+")"}return o}function getIconColor(t,e,n,o,i){let a,r,s;return e&&e.startsWith("light.")?(a=(i=t.states[e].attributes.rgb_color)?o(i)?"rgba(255,220,200,0.5)":`rgba(${i}, 0.5)`:n?"rgba(255,220,200, 0.5)":"rgba(255, 255, 255, 0.5)",r=i?o(i)?"rgb(255,220,200)":`rgb(${i})`:n?"rgba(255,220,200, 1)":"rgba(255, 255, 255, 1)",s=i?o(i)?"none":"brightness(1.1)":"none"):(a="var(--accent-color)",s="brightness(1.1)"),{iconColorOpacity:a,iconColor:r,iconFilter:s}}function getIconStyles(t,e,n,o){return`\n    .icon-container {\n        position: relative;\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        z-index: 1;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        cursor: pointer !important;\n        background-color: var(--card-background-color,var(--ha-card-background));\n    }\n    \n    .icon-container::after {\n        content: '';\n        position: absolute;\n        display: block;\n        opacity: ${t.startsWith("light.")?"0.2":"0"};\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        border-radius: 50%;\n        background-color: ${e?n||"var(--accent-color)":"var(--card-background-color,var(--ha-card-background))"};\n    }\n    \n    .icon {\n        display: flex;\n        width: 22px; \n        color: ${e?n||"var(--accent-color)":"inherit"} !important;\n        opacity: ${e?"1":t?"0.6":"1"};\n        filter: ${e?n?o:"brightness(1.1)":"inherit"};\n    }\n    \n    .entity-picture {\n        display: flex;\n        height: 38px;\n        width: 38px;\n        border-radius: 100%;\n    }\n    `}}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(t,e)=>{for(var n in e)__webpack_require__.o(e,n)&&!__webpack_require__.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var __webpack_exports__={};(()=>{var t="v1.6.0-beta.1",e=__webpack_require__(946);const n=(t,e,n,o)=>{o=o||{},n=null==n?{}:n;const i=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=n,t.dispatchEvent(i),i},o=t=>{n(window,"haptic",t)},i=(t,e,o=!1)=>{o?history.replaceState(null,"",e):history.pushState(null,"",e),n(window,"location-changed",{replace:o})};function a(t,e){t.callService("homeassistant","toggle",{entity_id:e})}function r(t,e,n){const o={entity:e.entity,tap_action:{action:"more-info"},double_tap_action:{action:"toggle"},hold_action:{action:"toggle"}},i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={config:o,action:n},t.dispatchEvent(i)}function s(t,e,n,o){e.tap_action,e.double_tap_action,e.hold_action;let i,a=0,s=0,l=0;t.addEventListener("mousedown",(()=>{s=Date.now(),i=setTimeout((()=>{r(t,e,"hold")}),300)})),t.addEventListener("mouseup",(()=>{clearTimeout(i),l=Date.now(),l-s<300&&(a++,1===a&&setTimeout((()=>{1===a?r(t,e,"tap"):(r(t,e,"double_tap"),o("success")),a=0}),300)),s=0,l=0})),t.addEventListener("touchstart",(n=>{o("light"),s=Date.now(),i=setTimeout((()=>{r(t,e,"hold")}),300),n.preventDefault()})),t.addEventListener("touchend",(n=>{clearTimeout(i),l=Date.now(),l-s<300&&(a++,1===a&&setTimeout((()=>{r(t,e,1===a?"tap":"double_tap"),a=0}),300)),s=0,l=0,n.preventDefault()})),t.addEventListener("mouseout",(()=>{clearTimeout(i)})),t.addEventListener("touchcancel",(()=>{clearTimeout(i)}))}let l,c,d,h;function p(t,n,o,i){let a=n.styles?n.styles:"",r=n.entity&&o.states[n.entity]?n.entity:"",s=!n.icon&&n.entity?o.states[r].attributes.icon||o.states[r].attributes.entity_picture||"":n.icon||"",p=n.name?n.name:n.entity?o.states[r].attributes.friendly_name:"",u=n.width_desktop||"540px",g=u?u.match(/(\d+)(\D+)/):"",m=n.is_sidebar_hidden||!1,b=r?o.states[r].state:"";!function(t,e,n){t.hasState=e.states[n],t.hasState&&(t.newState=[t.hasState.state,t.hasState.attributes.rgb_color],t.oldState&&t.newState[0]===t.oldState[0]&&t.newState[1]===t.oldState[1]?t.stateChanged=!1:(t.oldState=t.newState,t.stateChanged=!0),t.stateChanged)}(t,o,r);let f=t.stateChanged,_=["on","open","cleaning","true","home","playing"].includes(b)||0!==Number(b)&&!isNaN(Number(b)),v=void 0===n.rise_animation||n.rise_animation,y=n.margin?"0"!==n.margin?n.margin:"0px":"7px",w=void 0!==n.bg_opacity?n.bg_opacity:"88",x=void 0!==n.shadow_opacity?n.shadow_opacity:"0",k=void 0!==n.bg_blur?n.bg_blur:"10",{iconColorOpacity:C,iconColor:$,iconFilter:S}=(0,e.mk)(o,r,_,e.wW),E=(0,e.G)(r,_,$,S),O=getComputedStyle(document.body),L=O.getPropertyValue("--ha-card-background")||O.getPropertyValue("--card-background-color"),A=n.bg_color?n.bg_color:L;if(A&&(!t.color||A!==t.color)){const n=1.02;c=(0,e._k)(A,w/100,n),t.color=A,window.color=A}return{customStyles:a,entityId:r,icon:s,name:p,widthDesktop:u,widthDesktopDivided:g,isSidebarHidden:m,state:b,stateChanged:f,stateOn:_,formatedState:h,riseAnimation:v,marginCenter:y,popUpOpen:l,rgbaColor:c,rgbColor:d,bgOpacity:w,shadowOpacity:x,bgBlur:k,iconColorOpacity:C,iconColor:$,iconFilter:S,iconStyles:E,haStyle:O,themeBgColor:L,color:A}}const u=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),g=u.prototype.html,m=u.prototype.css;let b;!function(){if(!window.eventAdded){const t=new Event("urlChanged");function e(){let e=0;window.dispatchEvent(t);const n=setInterval((()=>{e<10?(window.dispatchEvent(t),e++):clearInterval(n)}),1e3)}window.popUpInitialized=!1,["click","mousedown","touchstart","focus","location-changed","connection-status"].forEach((t=>{window.addEventListener(t,e)}),{passive:!0});const n=()=>{window.dispatchEvent(t),window.addEventListener("popstate",e,{passive:!0})};window.addEventListener("popUpInitialized",n,{passive:!0}),window.eventAdded=!0}}();class f extends HTMLElement{set hass(t){var n;switch(this._hass=t,this.editor=b,(n=this).content||(n.attachShadow({mode:"open"}),n.shadowRoot.innerHTML='\n            <ha-card style="background: none; border: none; box-shadow: none;">\n                <div class="card-content" style="padding: 0;">\n                </div>\n            </ha-card>\n        ',n.card=n.shadowRoot.querySelector("ha-card"),n.content=n.shadowRoot.querySelector("div")),async function(t){if(window.editorElement)t=window.editorElement.classList.contains("edit-mode");else{const t=new Promise((t=>{t(document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("div"))}));window.editorElement=await t}return t}(b).then((t=>{b=t})),this.config.card_type){case"pop-up":!function(t){const n=t._hass,r=t.editor,l=t.config;if(!n)return;let c,d,{customStyles:h,entityId:u,icon:g,name:m,widthDesktop:b,widthDesktopDivided:f,isSidebarHidden:_,state:v,stateChanged:y,stateOn:w,formatedState:x,riseAnimation:k,marginCenter:C,popUpOpen:$,rgbaColor:S,rgbColor:E,bgOpacity:O,shadowOpacity:L,bgBlur:A,iconColorOpacity:I,iconColor:T,iconFilter:V,iconStyles:D,haStyle:z,themeBgColor:M,color:B}=p(t,l,n),q=l.auto_close||!1,U=l.hash,H=l.trigger_entity?l.trigger_entity:"",Y=l.trigger_state?l.trigger_state:"",F=!!l.trigger_close&&l.trigger_close;if(t.errorTriggered)return;t.initStyleAdded||t.host||r||(t.card.style.marginTop="4000px",t.initStyleAdded=!0);const R=()=>{if(t.host){if(!t.popUp&&(t.verticalStack=t.getRootNode(),t.popUp=t.verticalStack.querySelector("#root"),!window.popUpInitialized&&t.popUp)){if(l.back_open?localStorage.setItem("backOpen",!0):localStorage.setItem("backOpen",!1),"true"===localStorage.getItem("backOpen")){window.backOpen=!0;const G=new Event("popUpInitialized");setTimeout((()=>{window.dispatchEvent(G)}),0)}else window.backOpen=!1,$=U+!1,history.replaceState(null,null,location.href.split("#")[0]);window.popUpInitialized=!0}const i=t.popUp,p=(t.verticalStack,l.text||""),k=l.state;x=k?n.formatEntityState(n.states[k]):x||"";const E=l.margin_top_mobile&&"0"!==l.margin_top_mobile?l.margin_top_mobile:"0px",O=l.margin_top_desktop&&"0"!==l.margin_top_desktop?l.margin_top_desktop:"0px",I=l.entity?"flex":"none";let T,V;if(v=k?n.states[k].state:"",t.headerAdded){if(u){const K=t.content.querySelector("#header-container .icon-container"),Z=t.content.querySelector("#header-container h2"),J=t.content.querySelector("#header-container p"),Q=t.content.querySelector("#header-container .power-button");K.innerHTML="",(0,e.IU)(t,n,u,g,K,r),Z.textContent=m,J.textContent=x,Q.setAttribute("style",`display: ${I};`)}}else{const tt=document.createElement("div");tt.setAttribute("id","header-container");const et=document.createElement("div");tt.appendChild(et);const nt=document.createElement("div");nt.setAttribute("class","icon-container"),et.appendChild(nt),(0,e.IU)(t,n,u,g,nt,r),s(nt,l,0,o);const ot=document.createElement("h2");ot.textContent=m,et.appendChild(ot);const it=document.createElement("p");it.textContent=x,et.appendChild(it);const at=document.createElement("ha-icon");at.setAttribute("class","power-button"),at.setAttribute("icon","mdi:power"),at.setAttribute("style",`display: ${I};`),et.appendChild(at);const rt=document.createElement("button");rt.setAttribute("class","close-pop-up"),rt.onclick=function(){history.replaceState(null,null,location.href.split("#")[0]),localStorage.setItem("isManuallyClosed_"+U,!0)},tt.appendChild(rt);const st=document.createElement("ha-icon");st.setAttribute("icon","mdi:close"),rt.appendChild(st),t.content.appendChild(tt),t.header=et,t.headerAdded=!0}function z(){a(n,u)}function M(t){"Escape"===t.key&&($=U+!1,history.replaceState(null,null,location.href.split("#")[0]),localStorage.setItem("isManuallyClosed_"+U,!0))}function H(t){window.hash===U&&j(),c=t.touches[0].clientY,d=c}function Y(t){t.touches[0].clientY-c>300&&t.touches[0].clientY>d&&($=U+!1,history.replaceState(null,null,location.href.split("#")[0]),$=U+!1,localStorage.setItem("isManuallyClosed_"+U,!0)),d=t.touches[0].clientY}if(t.eventAdded||r||(window["checkHashRef_"+U]=F,window.addEventListener("urlChanged",window["checkHashRef_"+U],{passive:!0}),window.addEventListener("click",(function(t){if(location.hash===U&&j(),!window.justOpened)return;const e=t.composedPath();!e||e.some((t=>"HA-MORE-INFO-DIALOG"===t.nodeName))||e.some((t=>"root"===t.id&&!t.classList.contains("close-pop-up")))||$!==U+!0||setTimeout((function(){location.hash===U&&($=U+!1,history.replaceState(null,null,location.href.split("#")[0]),localStorage.setItem("isManuallyClosed_"+U,!0))}),2)}),{passive:!0}),t.eventAdded=!0),u){const lt=n.states[u].attributes.rgb_color;t.rgbColor=lt?(0,e.wW)(lt)?"rgb(255,220,200)":`rgb(${lt})`:w?u.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"rgba(255, 255, 255, 1",t.rgbColorOpacity=lt?(0,e.wW)(lt)?"rgba(255,220,200, 0.5)":`rgba(${lt}, 0.5)`:u&&w?u.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"var(--background-color,var(--secondary-background-color))",V=(0,e._k)(B,0),t.iconFilter=lt?(0,e.wW)(lt)?"none":"brightness(1.1)":"none"}else V=(0,e._k)(B,0);function F(){r||(window.hash=location.hash.split("?")[0],window.hash===U?(setTimeout((function(){i.classList.remove("close-pop-up"),i.classList.add("open-pop-up"),R.querySelector(".power-button").addEventListener("click",z,{passive:!0}),window.addEventListener("keydown",M,{passive:!0}),i.addEventListener("touchstart",H,{passive:!0}),i.addEventListener("touchmove",Y,{passive:!0}),$=U+!0,document.body.style.overflow="hidden",setTimeout((()=>{window.justOpened=!0}),10),j()}),0),setTimeout((function(){W(i,!1)}),0)):i.classList.contains("open-pop-up")&&(setTimeout((function(){i.classList.remove("open-pop-up"),i.classList.add("close-pop-up"),R.querySelector(".power-button").removeEventListener("click",z),window.removeEventListener("keydown",M),i.removeEventListener("touchstart",H),i.removeEventListener("touchmove",Y),$=U+!1,document.body.style.overflow="",window.justOpened=!1,clearTimeout(T)}),0),setTimeout((function(){W(i,!0)}),320)))}let R=t.content;function W(t,e){for(var n=t.querySelectorAll("video"),o=0;o<n.length;o++){var i=n[o]&&n[o].currentTime>0&&!n[o].paused&&!n[o].ended&&n[o].readyState>n[o].HAVE_CURRENT_DATA;e&&i?n[o].pause():e||i||(n[o].play(),n[o].currentTime>0&&(n[o].currentTime=1e4))}var a=t.querySelectorAll("*");for(o=0;o<a.length;o++)a[o].shadowRoot&&W(a[o].shadowRoot,e)}function j(){clearTimeout(T),q>0&&(T=setTimeout(P,q))}function P(){history.replaceState(null,null,location.href.split("#")[0])}r&&!t.editorModeAdded&&(console.log(U),i.classList.add("editor"),i.classList.remove("open-pop-up"),i.classList.remove("close-pop-up"),t.editorModeAdded=!0);const X=`                    \n\t            ha-card {\n\t                margin-top: 0 !important;\n\t                background: none !important;\n\t                border: none !important;\n\t            }\n\t            .card-content {\n\t                width: 100% !important;\n\t                padding: 0 !important;\n\t            }\n\t            #root {\n\t                transition: all 1s !important;\n\t                position: fixed !important;\n\t                margin: 0 -${C}; /* 7px */\n\t                width: 100%;\n\t                background-color: ${S};\n\t                box-shadow: 0px 0px 50px rgba(0,0,0,${L/100});\n\t                backdrop-filter: blur(${A}px);\n\t                -webkit-backdrop-filter: blur(${A}px);\n\t                border-radius: 42px;\n\t                box-sizing: border-box;\n\t                top: calc(120% + ${E} + var(--header-height));\n\t                grid-gap: 12px !important;\n\t                gap: 12px !important;\n\t                grid-auto-rows: min-content;\n\t                padding: 18px 18px 220px 18px !important;\n\t                height: 100% !important;\n\t                -ms-overflow-style: none; /* for Internet Explorer, Edge */\n\t                scrollbar-width: none; /* for Firefox */\n\t                overflow-y: auto; \n\t                overflow-x: hidden; \n\t                z-index: 1 !important; /* Higher value hide the more-info panel */\n\t                /* For older Safari but not working with Firefox */\n\t                /* display: grid !important; */  \n\t            }\n\t            #root.hidden {\n\t            \tdisplay: none !important;\n\t            }\n\t            #root > :first-child::after {\n\t                content: '';\n\t                display: block;\n\t                position: sticky;\n\t                top: 0;\n\t                left: -50px;\n\t                margin: -70px 0 -36px -36px;\n\t                overflow: visible;\n\t                width: 200%;\n\t                height: 100px;\n\t                background: linear-gradient(0deg, ${V} 0%, ${S} 80%);\n\t                z-index: 0;\n\t            } \n\t            #root::-webkit-scrollbar {\n\t                display: none; /* for Chrome, Safari, and Opera */\n\t            }\n\t            #root > :first-child {\n\t                position: sticky;\n\t                top: 0;\n\t                z-index: 1;\n\t                background: none !important;\n\t                overflow: visible;\n\t            }\n\t            #root.open-pop-up {\n\t                /*will-change: transform;*/\n\t                transform: translateY(-120%);\n\t                transition: transform .36s !important;\n\t            }\n\t            #root.open-pop-up > * {\n\t              /* Block child items to overflow and if they do clip them */\n\t              /*max-width: calc(100vw - 38px);*/\n\t              max-width: 100% !important;\n\t              /*overflow-x: clip;*/\n\t            }\n\t            #root.close-pop-up { \n\t                transform: translateY(-20%);\n\t                transition: transform .4s !important;\n\t                box-shadow: none;\n\t            }\n\t            @media only screen and (min-width: 600px) {\n\t                #root {\n\t                    top: calc(120% + ${O} + var(--header-height));\n\t                    width: calc(${b}${"%"!==f[2]||_?"":" - var(--mdc-drawer-width)"}) !important;\n\t                    left: calc(50% - ${f[1]/2}${f[2]});\n\t                    margin: 0 !important;\n\t                }\n\t            }  \n\t            @media only screen and (min-width: 870px) {\n\t                #root {\n\t                    left: calc(50% - ${f[1]/2}${f[2]} + ${_?"0px":"var(--mdc-drawer-width) "+("%"===f[2]?"":"/ 2")});\n\t                }\n\t            }  \n\t            #root.editor {\n\t                position: inherit !important;\n\t                width: 100% !important;\n\t                padding: 18px !important;\n\t            }\n\t        `,N=`\n\t            ${D}\n\n\t            ha-card {\n\t                margin-top: 0 !important;\n\t            }\n\t            #header-container {\n\t                display: inline-flex;\n\t                ${g||m||u||v||p?"":"flex-direction: row-reverse;"}\n\t                height: 50px;\n\t                width: 100%;\n\t                margin: 0;\n\t                padding: 0;\n\t            }\n\t            #header-container > div {\n\t                display: ${g||m||u||v||p?"inline-flex":"none"};\n\t                align-items: center;\n\t                position: relative;\n\t                padding-right: 6px;\n\t                z-index: 1;\n\t                flex-grow: 1;\n\t                background-color: ${u?t.rgbColorOpacity:"var(--background-color,var(--secondary-background-color))"};\n\t                transition: background 1s;\n\t                border-radius: 25px;\n\t                margin-right: 14px;\n\t                backdrop-filter: blur(14px);\n\t                -webkit-backdrop-filter: blur(14px);\n\t            }\n\t            #header-container h2 {\n\t                display: inline-flex;\n\t                margin: 0 18px 0 0;\n\t                padding: 4px;\n\t                z-index: 1;\n\t                font-size: 18px;\n\t            }\n\t            #header-container p {\n\t                display: inline-flex;\n\t                font-size: 16px;\n\t                min-width: fit-content ;\n\t            }\n\t            .power-button {\n\t                cursor: pointer; \n\t                flex-grow: inherit; \n\t                width: 24px;\n\t                height: 24px;\n\t                border-radius: 12px;\n\t                margin: 0 10px;\n\t                background: none !important;\n\t                justify-content: flex-end;\n\t                background-color: var(--background-color,var(--secondary-background-color));\n\t            }\n\t            .close-pop-up {\n\t                height: 50px;\n\t                width: 50px;\n\t                border: none;\n\t                border-radius: 50%;\n\t                z-index: 1;\n\t                background: var(--background-color,var(--secondary-background-color));\n\t                color: var(--primary-text-color);\n\t                flex-shrink: 0;\n\t                cursor: pointer;\n\t            }\n\t        `;setTimeout((()=>{(0,e.L2)(n,t,N,h,v,u,y),(0,e.L2)(n,t,X,h,v,u,t.bgColorChanged,"",i)}),0)}else t.host=t.getRootNode().host};if(t.popUp&&S&&S!==t.oldBgColor&&location.hash===U?(t.oldBgColor=S,t.bgColorChanged=!0):t.bgColorChanged=!1,t.popUpAdded)!r&&t.wasEditing&&(y||t.bgColorChanged)?(R(),t.wasEditing=!1):(U===window.hash&&(y||t.bgColorChanged)||r&&!t.editorModeAdded)&&(R(),r&&(t.wasEditing=!0));else{t.popUpAdded=!0;let e=setInterval((()=>{R(),t.popUp&&clearInterval(e)}),0);setTimeout((()=>{if(!t.popUp)throw t.errorTriggered=!0,clearInterval(e),new Error("Pop-up card must be placed inside a vertical_stack! If it's already the case, please ignore this error 🍻")}),6e3)}if(!r&&t.popUp&&t.editorModeAdded&&(t.popUp.classList.remove("editor"),t.editorModeAdded=!1),t.popUp&&H&&y){null===localStorage.getItem("previousTriggerState_"+U)&&localStorage.setItem("previousTriggerState_"+U,""),null===localStorage.getItem("isManuallyClosed_"+U)&&localStorage.setItem("isManuallyClosed_"+U,"false"),null===localStorage.getItem("isTriggered_"+U)&&localStorage.setItem("isTriggered_"+U,"false");let e=localStorage.getItem("previousTriggerState_"+U),o="true"===localStorage.getItem("isManuallyClosed_"+U),a="true"===localStorage.getItem("isTriggered_"+U);n.states[H].state!==Y||null!==e||a||(i(0,U),a=!0,localStorage.setItem("isTriggered_"+U,a)),n.states[H].state!==e&&(o=!1,localStorage.setItem("previousTriggerState_"+U,n.states[H].state),localStorage.setItem("isManuallyClosed_"+U,o)),n.states[H].state!==Y||o?n.states[H].state!==Y&&F&&t.popUp.classList.contains("open-pop-up")&&a&&!o&&(history.replaceState(null,null,location.href.split("#")[0]),$=U+!1,a=!1,o=!0,localStorage.setItem("isManuallyClosed_"+U,o),localStorage.setItem("isTriggered_"+U,a)):(i(0,U),a=!0,localStorage.setItem("isTriggered_"+U,a))}}(this);break;case"horizontal-buttons-stack":!function(t){const n=t._hass,a=t.editor;let{customStyles:r,entityId:s,icon:l,name:c,widthDesktop:d,widthDesktopDivided:h,isSidebarHidden:u,state:g,stateChanged:m,stateOn:b,riseAnimation:f,marginCenter:_,popUpOpen:v,rgbaColor:y,rgbColor:w,bgOpacity:x,shadowOpacity:k,bgBlur:C,iconColorOpacity:$,iconColor:S,iconFilter:E,iconStyles:O,haStyle:L,themeBgColor:A,color:I}=p(t,t.config,n);if(!t.buttonsAdded){const e=document.createElement("div");e.classList.add("horizontal-buttons-stack-container"),t.content.appendChild(e),t.buttonsContainer=e}const T=(t,o,i)=>{if(n.states[o].attributes.rgb_color){const i=n.states[o].attributes.rgb_color,a=(0,e.wW)(i)?"rgba(255,220,200, 0.5)":`rgba(${i}, 0.5)`;t.style.backgroundColor=a,t.style.border="1px solid rgba(0,0,0,0)"}else n.states[o].attributes.rgb_color||"on"!=n.states[o].state?(t.style.backgroundColor="rgba(0,0,0,0)",t.style.border="1px solid var(--primary-text-color)"):(t.style.backgroundColor="rgba(255,255,255,0.5)",t.style.border="1px solid rgba(0,0,0,0)")};let V=[],D=1;for(;t.config[D+"_link"];){const e=D+"_",n=t.config[e+"name"]||"",o=t.config[e+"pir_sensor"];l=t.config[e+"icon"]||"";const i=t.config[e+"link"],a=t.config[e+"entity"];V.push({button:n,pirSensor:o,icon:l,link:i,lightEntity:a}),D++}if(t.config.auto_order&&V.sort(((t,e)=>t.pirSensor&&e.pirSensor?"on"===n.states[t.pirSensor].state&&"on"===n.states[e.pirSensor].state?n.states[t.pirSensor].last_updated<n.states[e.pirSensor].last_updated?1:-1:"on"===n.states[t.pirSensor].state?-1:"on"===n.states[e.pirSensor].state||n.states[t.pirSensor].last_updated<n.states[e.pirSensor].last_updated?1:-1:t.pirSensor?e.pirSensor?void 0:-1:1)),!t.buttonsAdded||a){if(t.card.classList.add("horizontal-buttons-stack"),a&&t.buttonsContainer){for(;t.buttonsContainer.firstChild;)t.buttonsContainer.removeChild(t.buttonsContainer.firstChild);localStorage.setItem("editorMode",!0)}else localStorage.setItem("editorMode",!1);const e={};V.forEach((n=>{const a=((e,n,a)=>{const r=document.createElement("button");return r.setAttribute("class",`button ${n.substring(1)}`),r.innerHTML=`\n            ${""!==a?`<ha-icon icon="${a}" class="icon" style="${""!==e?"margin-right: 8px;":""}"></ha-icon>`:""}\n            ${""!==e?`<p class="name">${e}</p>`:""}\n        `,r.hasListener||(r.addEventListener("click",(t=>{t.stopPropagation(),o("light"),v=location.hash+!0,localStorage.getItem("isManuallyClosed_"+n),v!==n+!0?(i(0,n),v=n+!0):(history.replaceState(null,null,location.href.split("#")[0]),v=n+!1)}),{passive:!0}),window.addEventListener("urlChanged",(function(){t.config.highlightCurrentview&&(location.pathname===n||location.hash===n?r.classList.add("highlight"):r.classList.remove("highlight"))}),{passive:!0}),r.hasListener=!0),r})(n.button,n.link,n.icon);e[n.link]=a,t.buttonsContainer.appendChild(a)})),t.buttonsAdded=!0,t.buttons=e}let z=0;!async function(t){if(t.buttonsUpdated)return;let e=[];for(let n of V)t.buttons[n.link]&&(e.push(localStorage.getItem(`buttonWidth-${n.link}`)),e.push(localStorage.getItem(`buttonContent-${n.link}`)));let n=await Promise.all(e),o=0;for(let e of V){let i=t.buttons[e.link];if(i){let r=n[o],s=n[o+1];o+=2,r&&"0"!==r&&s===i.innerHTML&&!a||(r=i.offsetWidth,await localStorage.setItem(`buttonWidth-${e.link}`,r),await localStorage.setItem(`buttonContent-${e.link}`,i.innerHTML),t.previousConfig=t.config),i.style.transform=`translateX(${z}px)`,z+=parseInt(r)+12}e.lightEntity&&T(i,e.lightEntity,e.link)}t.buttonsAdded=!0}(t);const M=`\n        ha-card {\n            border-radius: 0;\n        }\n        .horizontal-buttons-stack {\n            width: 100%;\n            margin-top: 0 !important;\n            background: none !important;\n            position: fixed;\n            height: 51px;\n            bottom: 16px;\n            left: ${_};\n            z-index: 1 !important; /* Higher value hide the more-info panel */\n        }\n        @keyframes from-bottom {\n            0% {transform: translateY(200px);}\n            20% {transform: translateY(200px);}\n            46% {transform: translateY(-8px);}\n            56% {transform: translateY(1px);}\n            62% {transform: translateY(-2px);}\n            70% {transform: translateY(0);}\n            100% {transform: translateY(0);}\n        }\n        .horizontal-buttons-stack-container {\n            width: max-content;\n            position: relative;\n            height: 51px;\n        }\n        .button {\n            display: inline-flex;\n            position: absolute;\n            box-sizing: border-box !important;\n            border: 1px solid var(--primary-text-color);\n            align-items: center;\n            height: 50px;\n            line-height: 16px;\n            white-space: nowrap;\n            width: auto;\n            border-radius: 25px;\n            z-index: 1;\n            padding: 0 16px;\n            background: none;\n            transition: background-color 1s, border 1s, transform 1s;\n            color: var(--primary-text-color);\n        }\n        .highlight {\n            animation: pulse 1.4s infinite alternate;\n        }\n        @keyframes pulse {\n            0% {\n                filter: brightness(0.7);\n            }\n            100% {\n                filter: brightness(1.3);\n            }\n        }\n        .icon {\n            height: 24px;\n        }\n        .card-content {\n            width: calc(100% + 18px);\n            box-sizing: border-box !important;\n            margin: 0 -36px !important;\n            padding: 0 36px !important;\n            overflow: scroll !important;\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n            -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 1) calc(0% + 28px), rgba(0, 0, 0, 1) calc(100% - 28px), transparent 100%);\n            /* mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%); */\n            /* -webkit-mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%); */\n        }\n        .horizontal-buttons-stack::before {\n            content: '';\n            position: absolute;\n            top: -32px;\n            left: -100%;\n            display: block;\n            background: linear-gradient(0deg, var(--background-color, var(--primary-background-color)) 50%, rgba(79, 69, 87, 0));\n            width: 200%;\n            height: 100px;\n        }\n        .card-content::-webkit-scrollbar {\n            display: none;\n        }\n        @media only screen and (min-width: 600px) {\n            .card-content {\n                position: fixed;\n                width: ${d} !important;\n                left: calc(50% - ${h[1]/2}${h[2]});\n                margin-left: -13px !important;\n                padding: 0 26px !important;\n            }\n        }\n        @media only screen and (min-width: 870px) {\n            .card-content {\n                position: fixed;\n                width: calc(${d}${"%"!==h[2]||u?"":" - var(--mdc-drawer-width)"}) !important;\n                left: calc(50% - ${h[1]/2}${h[2]} + ${!0===u?"0px":"var(--mdc-drawer-width) "+("%"===h[2]?"":"/ 2")});\n                margin-left: -13px !important;\n                padding: 0 26px !important;\n            }\n        }\n        .horizontal-buttons-stack.editor {\n            position: relative;\n            bottom: 0;\n            left: 0;\n            overflow: hidden;\n        }\n        .horizontal-buttons-stack.editor::before {\n            top: -32px;\n            left: -100%;\n            background: none;\n            width: 100%;\n            height: 0;\n        }\n        .horizontal-buttons-stack-container.editor > .button {\n            transition: background-color 0s, border 0s, transform 0s;\n        }\n        .horizontal-buttons-stack-container.editor {\n            margin-left: 1px;\n        }\n        .horizontal-buttons-stack.editor > .card-content {\n            position: relative;\n            width: calc(100% + 26px) !important;\n            left: -26px;\n            margin: 0 !important;\n            padding: 0;\n        }\n    `;!window.hasAnimated&&f&&(t.content.style.animation="from-bottom 1.3s forwards",window.hasAnimated=!0,setTimeout((()=>{t.content.style.animation="none"}),1500)),(0,e.L2)(n,t,M,r),a?(t.buttonsContainer.classList.add("editor"),t.card.classList.add("editor")):(t.buttonsContainer.classList.remove("editor"),t.card.classList.remove("editor"))}(this);break;case"button":!function(t){const n=t._hass,i=t.editor;let{customStyles:r,entityId:l,icon:c,name:d,widthDesktop:h,widthDesktopDivided:u,isSidebarHidden:g,state:m,stateChanged:b,stateOn:f,formatedState:_,riseAnimation:v,marginCenter:y,popUpOpen:w,rgbaColor:x,rgbColor:k,bgOpacity:C,shadowOpacity:$,bgBlur:S,iconColorOpacity:E,iconColor:O,iconFilter:L,iconStyles:A,haStyle:I,themeBgColor:T,color:V}=p(t,t.config,n);_=b||i?n.formatEntityState(n.states[l]):_||"";const D=t.config.button_type||"switch",z=!!t.config.show_state&&t.config.show_state;let M=l?n.states[l].attributes.brightness||0:"",B=l?n.states[l].attributes.volume_level||0:"",q=!1,U=M,H=B,Y=0,F=0,R=0,W=!1,j=null;if(!t.buttonAdded){const e=document.createElement("div");e.setAttribute("class","button-container"),t.content.appendChild(e)}const P=document.createElement("div");P.setAttribute("class","icon-container"),t.iconContainer=P;const X=document.createElement("div");X.setAttribute("class","name-container");const N=document.createElement("div");N.setAttribute("class","switch-button");const G=document.createElement("div");G.setAttribute("class","range-slider");const K=document.createElement("div");if(K.setAttribute("class","range-fill"),!t.buttonContainer||i){if(i&&t.buttonContainer){for(;t.buttonContainer.firstChild;)t.buttonContainer.removeChild(t.buttonContainer.firstChild);t.eventAdded=!1,t.wasEditing=!0}t.buttonContainer=t.content.querySelector(".button-container"),"slider"!==D||t.buttonAdded&&!i?("switch"===D||"custom"===D||i)&&(t.buttonContainer.appendChild(N),N.appendChild(P),N.appendChild(X),t.switchButton=t.content.querySelector(".switch-button")):(t.buttonContainer.appendChild(G),G.appendChild(P),G.appendChild(X),G.appendChild(K),t.rangeFill=t.content.querySelector(".range-fill")),(0,e.IU)(t,n,l,c,P,i),X.innerHTML=`\n            <p class="name">${d}</p>\n            ${z?`<p class="state">${_}</p>`:""}\n        `,t.buttonAdded=!0}function Z(t){o("success");let e=t.querySelector(".feedback-element");e||(e=document.createElement("div"),e.setAttribute("class","feedback-element"),t.appendChild(e)),e.style.animation="tap-feedback .5s",setTimeout((()=>{e.style.animation="none",t.removeChild(e)}),500)}function J(t){Y=t.pageX||(t.touches?t.touches[0].pageX:0),F=t.pageY||(t.touches?t.touches[0].pageY:0),R=G.value,t.target!==P&&t.target!==P.querySelector("ha-icon")&&(q=!0,document.addEventListener("mouseup",tt,{passive:!0}),document.addEventListener("touchend",tt,{passive:!0}),document.addEventListener("mousemove",Q,{passive:!0}),document.addEventListener("touchmove",Q,{passive:!0}),j=setTimeout((()=>{ot(t.pageX||t.touches[0].pageX),et(),j=null}),200))}function Q(t){const e=t.pageX||(t.touches?t.touches[0].pageX:0),n=t.pageY||(t.touches?t.touches[0].pageY:0);Math.abs(n-F)>Math.abs(e-Y)?(clearTimeout(j),tt()):(document.removeEventListener("mousemove",Q),document.removeEventListener("touchmove",Q),document.addEventListener("mousemove",nt,{passive:!0}),document.addEventListener("touchmove",nt,{passive:!0}))}function tt(){q=!1,W=!1,et(),document.removeEventListener("mouseup",tt),document.removeEventListener("touchend",tt),document.removeEventListener("mousemove",nt),document.removeEventListener("touchmove",nt)}function et(){l.startsWith("light.")?(M=U,n.callService("light","turn_on",{entity_id:l,brightness:M})):l.startsWith("media_player.")&&(B=H,n.callService("media_player","volume_set",{entity_id:l,volume_level:B}))}function nt(t){const e=t.pageX||(t.touches?t.touches[0].pageX:0),n=t.pageY||(t.touches?t.touches[0].pageY:0);q&&Math.abs(e-Y)>10?(o("light"),ot(e)):q&&Math.abs(n-F)>10&&(q=!1,G.value=R)}function ot(t){const e=G.getBoundingClientRect(),n=Math.min(Math.max(t-e.left,0),e.width)/e.width;l.startsWith("light.")?U=Math.round(255*n):l.startsWith("media_player.")&&(H=n),K.style.transition="none",K.style.transform=`translateX(${100*n}%)`}z&&_&&(t.content.querySelector(".state").textContent=_),t.eventAdded||"switch"!==D?t.eventAdded||"slider"!==D?t.eventAdded||"custom"!==D||(N.addEventListener("click",(()=>Z(t.switchButton)),{passive:!0}),s(P,t.config,0,o),t.eventAdded=!0):(G.addEventListener("mousedown",J,{passive:!0}),G.addEventListener("touchstart",J,{passive:!0}),s(P,t.config,0,o),t.eventAdded=!0):(N.addEventListener("click",(()=>Z(t.switchButton)),{passive:!0}),N.addEventListener("click",(function(t){t.target!==P&&t.target!==P.querySelector("ha-icon")&&a(n,l)}),{passive:!0}),s(P,t.config,0,o),t.eventAdded=!0),t.isDragging||"slider"!==D||(t.rangeFill.style.transition="all .3s",l.startsWith("light.")?t.rangeFill.style.transform=`translateX(${M/255*100}%)`:l.startsWith("media_player.")&&(t.rangeFill.style.transform=`translateX(${100*B}%)`));const it=`\n        ha-card {\n            margin-top: 0 !important;\n            background: none !important;\n            opacity: ${"unavailable"!==m?"1":"0.5"};\n        }\n        \n        .button-container {\n            position: relative;\n            width: 100%;\n            height: 50px;\n            z-index: 0;\n            background-color: var(--background-color-2,var(--secondary-background-color));\n            border-radius: 25px;\n            mask-image: radial-gradient(white, black);\n            -webkit-mask-image: radial-gradient(white, black);\n            -webkit-backface-visibility: hidden;\n            -moz-backface-visibility: hidden;\n            -webkit-transform: translateZ(0);\n            overflow: hidden;\n        }\n        \n        .switch-button,\n        .range-slider {\n            display: inline-flex;\n            position: absolute;\n            height: 100%;\n            width: 100%;\n            transition: background-color 1.5s;\n            background-color: ${f&&["switch","custom"].includes(D)?"var(--accent-color)":"rgba(0,0,0,0)"};\n        }\n\n        .range-fill {\n            z-index: -1;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            background-color: ${E};\n            width: 100%;\n            left: -100%;\n        }\n        \n        .switch-button {\n            cursor: pointer !important;\n        }\n        \n        .range-slider {\n            cursor: ew-resize;\n        }\n        \n        .name-container {\n            position: relative;\n            display: ${z?"block":"inline-flex"};\n            margin-left: 4px;\n            z-index: 1;\n            font-weight: 600;\n            align-items: center;\n            line-height: ${z?"4px":"16px"};\n            padding-right: 16px;\n        }\n        \n        .state {\n            font-size: 12px;\n            opacity: 0.7;\n        }\n        \n        .feedback-element {\n            position: absolute;\n            top: 0;\n            left: 0;\n            opacity: 0;\n            width: 100%;\n            height: 100%;\n            background-color: rgb(0,0,0);\n        }\n        \n        @keyframes tap-feedback {\n            0% {transform: translateX(-100%); opacity: 0;}\n            64% {transform: translateX(0); opacity: 0.1;}\n            100% {transform: translateX(100%); opacity: 0;}\n        }\n\n        ${A}\n    `;(0,e.L2)(n,t,it,r,m,l,b)}(this);break;case"separator":!function(t){const n=t._hass,o=t.editor,i=t.config;let{customStyles:a,entityId:r,icon:s,name:l,widthDesktop:c,widthDesktopDivided:d,isSidebarHidden:h,state:u,stateChanged:g,stateOn:m,formatedState:b,riseAnimation:f,marginCenter:_,popUpOpen:v,rgbaColor:y,rgbColor:w,bgOpacity:x,shadowOpacity:k,bgBlur:C,iconColorOpacity:$,iconColor:S,iconFilter:E,iconStyles:O,haStyle:L,themeBgColor:A,color:I}=p(t,i,n);if(!t.separatorAdded||o){if(o&&t.separatorContainer)for(;t.separatorContainer.firstChild;)t.separatorContainer.removeChild(t.separatorContainer.firstChild);t.separatorAdded||(t.separatorContainer=document.createElement("div"),t.separatorContainer.setAttribute("class","separator-container")),t.separatorContainer.innerHTML=`\n            <div>\n                <ha-icon icon="${s}"></ha-icon>\n                <h4>${l}</h4>\n            </div>\n            <div></div>\n        `,t.content.appendChild(t.separatorContainer),t.separatorAdded=!0}(0,e.L2)(n,t,"\n        .separator-container {\n            display: inline-flex;\n            width: 100%;\n            margin-top: 12px;\n        }\n        .separator-container div:first-child {\n            display: inline-flex;\n            max-width: calc(100% - 38px);\n        }\n        .separator-container div ha-icon {\n            display: inline-flex;\n            height: 24px;\n            width: 24px;\n            margin: 0 22px 0 8px;\n            transform: translateY(-2px);\n        }\n        .separator-container div h4 {\n            display: inline-flex;\n            margin: 0 20px 0 0;\n            font-size: 16px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        .separator-container div:last-child {\n            display: inline-flex; \n            border-radius: 6px; \n            opacity: 0.5; \n            margin-left: 10px; \n            flex-grow: 1; \n            height: 6px; \n            align-self: center; \n            background-color: var(--background-color,var(--secondary-background-color));\n        }\n    ",a)}(this);break;case"cover":!function(t){const n=t._hass,i=t.editor,a=t.config;let{customStyles:r,entityId:l,icon:c,name:d,widthDesktop:h,widthDesktopDivided:u,isSidebarHidden:g,state:m,stateChanged:b,stateOn:f,formatedState:_,riseAnimation:v,marginCenter:y,popUpOpen:w,rgbaColor:x,rgbColor:k,bgOpacity:C,shadowOpacity:$,bgBlur:S,iconColorOpacity:E,iconColor:O,iconFilter:L,iconStyles:A,haStyle:I,themeBgColor:T,color:V}=p(t,a,n);const D=a.icon_open?a.icon_open:"mdi:window-shutter-open",z=a.icon_close?a.icon_close:"mdi:window-shutter",M=a.open_service?a.open_service:"cover.open_cover",B=a.close_service?a.close_service:"cover.close_cover",q=a.stop_service?a.stop_service:"cover.stop_cover",U=a.icon_up?a.icon_up:"mdi:arrow-up",H=a.icon_down?a.icon_down:"mdi:arrow-down",Y=!!t.config.show_state&&t.config.show_state;if(c="open"===n.states[a.entity].state?D:z,_=b?n.formatEntityState(n.states[l]):_||"",!t.coverAdded||i){if(i&&t.coverContainer)for(;t.coverContainer.firstChild;)t.coverContainer.removeChild(t.coverContainer.firstChild);t.coverContainer=document.createElement("div"),t.coverContainer.setAttribute("class","cover-container"),t.coverContainer.innerHTML=`\n            <div class="header-container">\n                <div class="icon-container">\n                </div>\n                <div class="name-container">\n                    <p class="name">${d}</p>\n                    <p class="state"></p>\n                </div>\n            </div>\n            <div class="buttons-container">\n                <button class="button open">\n                    <ha-icon icon="${U}"></ha-icon>\n                </button>\n                <button class="button stop">\n                    <ha-icon icon="mdi:stop"></ha-icon>\n                </button>\n                <button class="button close">\n                    <ha-icon icon="${H}"></ha-icon>\n                </button>\n            </div>\n        `,t.content.appendChild(t.coverContainer);const e=t.coverContainer.querySelector(".open"),r=t.coverContainer.querySelector(".stop"),c=t.coverContainer.querySelector(".close");e.addEventListener("click",(()=>{n.callService(M.split(".")[0],M.split(".")[1],{entity_id:l})}),{passive:!0}),r.addEventListener("click",(()=>{n.callService(q.split(".")[0],q.split(".")[1],{entity_id:l})}),{passive:!0}),c.addEventListener("click",(()=>{n.callService(B.split(".")[0],B.split(".")[1],{entity_id:l})}),{passive:!0}),t.iconContainer=t.content.querySelector(".icon-container"),s(t.iconContainer,a,0,o),t.coverAdded=!0}t.iconContainer&&(b||i)&&(t.iconContainer.innerHTML=`<ha-icon icon="${c}" class="icon"></ha-icon>`,t.content.querySelector(".state").textContent=Y?_:""),(0,e.L2)(n,t,"\n        ha-card {\n            margin-top: 0 !important;\n            background: none !important;\n        }\n        \n        .header-container {\n            display: flex;\n            align-items: center;\n            margin-bottom: 10px;\n        }\n        \n        .cover-container {\n            display: grid;\n        }\n        \n        .icon-container {\n            display: flex;\n            margin: 0 !important;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            /*z-index: 1;*/\n            width: 48px;\n            height: 48px;\n            margin: 6px;\n            border-radius: 50%;\n            background-color: var(--card-background-color,var(--ha-card-background));\n            border: 6px solid var(--background-color-2,var(--secondary-background-color));\n            box-sizing: border-box;\n        }\n        \n        .name-container {\n            font-weight: 600;\n            margin-left: 10px;\n            line-height: 4px;\n        }\n        \n        .buttons-container {\n            display: grid;\n            align-self: center;\n            grid-auto-flow: column;\n            grid-gap: 18px;             \n        }\n        \n        .state {\n            font-size: 12px;\n            opacity: 0.7;\n        }\n        \n        ha-icon {\n            display: flex; \n            height: 24px; \n            width: 24px; \n            color: var(--primary-text-color);\n        }\n        \n        .button {\n            display: flex;\n            background: var(--background-color-2,var(--secondary-background-color));\n            height: 42px;\n            border-radius: 32px;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            border: none;\n        }\n    ",r,m,l)}(this);break;case"empty-column":!function(t){if(!t.emptyCollumnAdded){const e=document.createElement("div");e.setAttribute("class","empty-column"),e.innerHTML='\n            <div style="display: flex; width: 100%;"></div>\n        ',t.content.appendChild(e),t.emptyColumnAdded=!0}}(this)}}setConfig(t){if("pop-up"===t.card_type){if(!t.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.")}else if("horizontal-buttons-stack"===t.card_type){var e={};for(var n in t)if(n.match(/^\d+_icon$/)){var o=n.replace("_icon","_link");if(void 0===t[o])throw new Error("You need to define "+o);if(e[t[o]])throw new Error("You can't use "+t[o]+" twice");e[t[o]]=!0}}else if(("button"===t.card_type||"cover"===t.card_type)&&!t.entity)throw new Error("You need to define an entity");if(window.entityError)throw new Error("You need to define a valid entity");this.config=t}getCardSize(){return-1e4}static getConfigElement(){return document.createElement("bubble-card-editor")}}customElements.define("bubble-card",f),customElements.define("bubble-card-editor",class extends u{setConfig(t){this._config={...t}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config.card_type||""}get _button_type(){return this._config.button_type||"switch"}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _text(){return this._config.text||""}get _hash(){return this._config.hash||"#pop-up-name"}get _trigger_entity(){return this._config.trigger_entity||""}get _trigger_state(){return this._config.trigger_state||""}get _trigger_close(){return this._config.trigger_close||!1}get _margin(){return this._config.margin||"7px"}get _margin_top_mobile(){return this._config.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config.margin_top_desktop||"0px"}get _width_desktop(){return this._config.width_desktop||"540px"}get _bg_color(){return this._config.bg_color||window.color}get _bg_opacity(){return void 0!==this._config.bg_opacity?this._config.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config.bg_blur?this._config.bg_blur:"14"}get _shadow_opacity(){return void 0!==this._config.shadow_opacity?this._config.shadow_opacity:"0"}get _is_sidebar_hidden(){return this._config.is_sidebar_hidden||!1}get _rise_animation(){return void 0===this._config.rise_animation||this._config.rise_animation}get _auto_close(){return this._config.auto_close||""}get _back_open(){return this._config.back_open||!1}get _icon_open(){return this._config.icon_open||""}get _icon_close(){return this._config.icon_close||""}get _open_service(){return this._config.open_service||"cover.open_cover"}get _close_service(){return this._config.open_service||"cover.close_cover"}get _stop_service(){return this._config.open_service||"cover.stop_cover"}get _auto_order(){return this._config.auto_order||!1}get _highlightCurrentview(){return this._config.highlightCurrentview||!1}get _show_state(){return this._config.show_state||!1}render(){if(!this.hass)return g``;if(!this.listsUpdated){const t=t=>({label:t,value:t});this.allEntitiesList=Object.keys(this.hass.states).map(t),this.lightList=Object.keys(this.hass.states).filter((t=>"light"===t.substr(0,t.indexOf(".")))).map(t),this.sensorList=Object.keys(this.hass.states).filter((t=>"sensor"===t.substr(0,t.indexOf(".")))).map(t),this.binarySensorList=Object.keys(this.hass.states).filter((t=>"binary_sensor"===t.substr(0,t.indexOf(".")))).map(t),this.coverList=Object.keys(this.hass.states).filter((t=>"cover"===t.substr(0,t.indexOf(".")))).map(t),this.cardTypeList=[{label:"Button",value:"button"},{label:"Cover",value:"cover"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Pop-up",value:"pop-up"},{label:"Separator",value:"separator"}],this.buttonTypeList=[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"}],this.listsUpdated=!0}const t=this.allEntitiesList,e=(this.lightList,this.sensorList,this.coverList),n=this.cardTypeList,o=this.buttonTypeList;if("pop-up"===this._config.card_type)return g`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    <h3>Pop-up 
                        <span style="
                            font-size: 10px !important;
                            background: rgb(0,90,140);
                            padding: 2px 6px;
                            border-radius: 8px;
                        ">
                            Regular mode
                        </span>
                    </h3>
                    <ha-alert alert-type="info">This card allows you to convert any vertical stack into a pop-up. Each pop-up can be opened by targeting its link (e.g. '#pop-up-name'), with navigation_path or with the horizontal buttons stack that is included.<br><b>It must be placed within a vertical-stack card at the top most position to function properly. The pop-up will be hidden by default until you open it.</b><br><br><a href="https://github.com/Clooos/Bubble-Card#pop-up-optimization" style="color: var(--primary-text-color)">How to get the optimized mode?</a></ha-alert>
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
                    ${this.makeDropdown("Optional - Entity to toggle (e.g. room light group)","entity",t)}
                    ${this.makeDropdown("Optional - Entity state to display (e.g. room temperature)","state",t)}
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
                    ${this.makeDropdown("Optional - Entity to open the pop-up based on its state","trigger_entity",t)}
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
            `;if("button"===this._config.card_type)return g`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    <h3>Button</h3>
                    <ha-alert alert-type="info">This card can be a slider or a button, allowing you to toggle your entities, control the brightness of your lights and the volume of your media players. To access color / control of an entity, simply tap on the icon.</ha-alert>
                    ${this.makeDropdown("slider"!==this._button_type?"Entity (toggle)":"Entity (light or media_player)","entity",t)}
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
                    ${this.makeDropdown("Button type","button_type",o)}
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
            `;if("separator"===this._config.card_type)return g`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
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
            `;if("horizontal-buttons-stack"===this._config.card_type){if(!this.buttonAdded&&this.shadowRoot.querySelector("#add-button")){const t=this.shadowRoot.querySelector("#add-button");for(this.buttonIndex=0;this._config[this.buttonIndex+1+"_link"];)this.buttonIndex++;t.addEventListener("click",(()=>{this.buttonIndex++;const e=t.style.opacity,n=t.innerText;t.style.opacity="0.6",t.style.transition="opacity 1s",t.innerText="Loading...",setTimeout((()=>{t.style.opacity=e,t.innerText=n}),5e3)}),{passive:!0}),this.buttonAdded=!0}return g`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
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
            `}return"cover"===this._config.card_type?g`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    <h3>Cover</h3>
                    <ha-alert alert-type="info">This card allows you to control your covers.</ha-alert>
                    ${this.makeDropdown("Entity","entity",e)}
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
            `:"empty-column"===this._config.card_type?g`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    <h3>Empty column</h3>
                    <ha-alert alert-type="info">Just an empty card to fill any empty column.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `:this._config.card_type?void 0:g`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",n)}
                    <ha-alert alert-type="info">You need to add a card type first.</ha-alert>
                    <img style="width: 100%" src="https://user-images.githubusercontent.com/36499953/268039672-6dd13476-42c5-427c-a4d8-ad4981fc2db7.gif">
                    <p>Almost everything is available in the GUI editor, but in the YAML editor you can add your own <b>custom styles</b>, create <b>custom buttons</b> or modify the <b>tap actions</b> of all cards. You can find more details on my GitHub page.</p>
                    <a href="https://github.com/Clooos/Bubble-Card"><img src="https://img.shields.io/badge/GitHub-Documentation-blue?logo=github"></a>
                    <p>And if you like my project and want to support me, please consider making a donation. Any amount is welcome and very much appreciated! 🍻</p>
                    <div style="display: inline-block;">
                        <a href="https://www.buymeacoffee.com/clooos"><img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?logo=buy-me-a-coffee"></a> 
                        <a href="https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR"><img src="https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal"></img></a>
                    </div>
                    ${this.makeVersion()}
                </div>
            `}makeDropdown(t,e,n){return this.hass,t.includes("icon")||t.includes("Icon")?g`
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
            `:g`
            <div>
                <ha-combo-box
                    label="${t}"
                    .value="${this["_"+e]}"
                    .configValue="${e}"
                    .items="${n}"
                    @value-changed="${this._valueChanged}"
                ></ha-combo-box>
            </div>
          `}makeButton(){let t=[];for(let e=1;e<=this.buttonIndex;e++)t.push(g`
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
            `);return t}makeVersion(){return g`
            <h4 style="
                font-size: 12px !important;
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
        `}removeButton(t){delete this._config[t+"_name"],delete this._config[t+"_icon"],delete this._config[t+"_link"],delete this._config[t+"_entity"],delete this._config[t+"_pir_sensor"];for(let e=t;e<this.buttonIndex;e++)this._config[e+"_name"]=this._config[e+1+"_name"],this._config[e+"_icon"]=this._config[e+1+"_icon"],this._config[e+"_link"]=this._config[e+1+"_link"],this._config[e+"_entity"]=this._config[e+1+"_entity"],this._config[e+"_pir_sensor"]=this._config[e+1+"_pir_sensor"];delete this._config[this.buttonIndex+"_name"],delete this._config[this.buttonIndex+"_icon"],delete this._config[this.buttonIndex+"_link"],delete this._config[this.buttonIndex+"_entity"],delete this._config[this.buttonIndex+"_pir_sensor"],this.buttonIndex--,n(this,"config-changed",{config:this._config})}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,o=t.detail;e.configValue&&("ha-switch"===e.type?this._config={...this._config,[e.configValue]:e.checked}:this._config={...this._config,[e.configValue]:void 0===e.checked&&o.value?e.checked||o.value:e.value||e.checked}),n(this,"config-changed",{config:this._config})}static get styles(){return m`
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
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch."}),console.info(`%c Bubble Card %c ${t} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})()})();
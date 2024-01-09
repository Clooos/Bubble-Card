(()=>{"use strict";var __webpack_modules__={946:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>getIconStyles,IU:()=>createIcon,L2:()=>addStyles,_k:()=>convertToRGBA,mk:()=>getIconColor,wW:()=>isColorCloseToWhite});let timeouts={},idCounter=0;const addStyles=function(hass,context,styles,customStyles,state,entityId,stateChanged,path="",element=context.content){const id=idCounter++,key=id+styles,executeStyles=()=>{const customStylesEval=customStyles?eval("`"+customStyles+"`"):"";let styleAddedKey=styles+"Added";if(!context[styleAddedKey]||context.previousStyle!==customStylesEval||stateChanged||context.previousConfig!==context.config){if(!context[styleAddedKey]){if(context.styleElement=element.querySelector("style"),!context.styleElement){context.styleElement=document.createElement("style");const e=path?element.querySelector(path):element;e?.appendChild(context.styleElement)}context[styleAddedKey]=!0}const e=document.createElement("style");e.innerHTML=customStylesEval+styles,context.styleElement.parentNode.insertBefore(e,context.styleElement.nextSibling),context.styleElement.parentNode.removeChild(context.styleElement),context.styleElement=e,context.previousStyle=customStylesEval,context.previousConfig=context.config}};timeouts[key]?clearTimeout(timeouts[key]):executeStyles(),timeouts[key]=setTimeout(executeStyles,500)};function createIcon(e,t,n,o,i){let a=e._hass,r=!(!t||!a.states[t].attributes)&&a.states[t].attributes;e.imageUrl=!!r.entity_picture&&r.entity_picture,updateIcon(e,a,t,n,o),i||setInterval((()=>{a=e._hass,t&&a.states[t]&&(e.currentEntityPicture=a.states[t].attributes.entity_picture,e.currentEntityPicture!==e.previousEntityPicture&&(e.imageUrl=e.currentEntityPicture,updateIcon(e,a,t,n,o),e.previousEntityPicture=e.currentEntityPicture))}),1e3)}function updateIcon(e,t,n,o,i){for(;i.firstChild;)i.removeChild(i.firstChild);let a=e.config.icon&&e.config.icon.includes("/")?e.config.icon:e.imageUrl?e.imageUrl:"";if(a&&(r=t.states[n].state,n.startsWith("media_player.")&&!["off","unknown","idle",void 0].includes(r)||!n.startsWith("media_player."))){const e=document.createElement("div");e.setAttribute("class","entity-picture"),e.setAttribute("alt","Icon"),i&&(i.appendChild(e),i.style.background="center / cover no-repeat url("+a+"), var(--card-background-color,var(--ha-card-background))")}else{const e=document.createElement("ha-icon");e.setAttribute("icon",o),e.setAttribute("class","icon"),i&&i.appendChild(e)}var r}function isColorCloseToWhite(e){let t=[220,220,190];for(let n=0;n<3;n++)if(e[n]<t[n])return!1;return!0}function convertToRGBA(e,t,n=1){let o="";if(e.startsWith("#"))o=4===e.length?"rgba("+Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n)+", "+t+")":"rgba("+Math.min(255,parseInt(e.slice(1,3),16)*n)+", "+Math.min(255,parseInt(e.slice(3,5),16)*n)+", "+Math.min(255,parseInt(e.slice(5,7),16)*n)+", "+t+")";else if(e.startsWith("rgb")){let i=e.match(/\d+/g);e.includes("rgba"),o="rgba("+Math.min(255,i[0]*n)+", "+Math.min(255,i[1]*n)+", "+Math.min(255,i[2]*n)+", "+t+")"}return o}function getIconColor(e,t,n,o,i){let a,r,s;return t&&t.startsWith("light.")?(a=(i=e.states[t].attributes.rgb_color)?o(i)?"rgba(255,220,200,0.5)":`rgba(${i}, 0.5)`:n?"rgba(255,220,200, 0.5)":"rgba(255, 255, 255, 0.5)",r=i?o(i)?"rgb(255,220,200)":`rgb(${i})`:n?"rgba(255,220,200, 1)":"rgba(255, 255, 255, 1)",s=i?o(i)?"none":"brightness(1.1)":"none"):(a="var(--accent-color)",s="brightness(1.1)"),{iconColorOpacity:a,iconColor:r,iconFilter:s}}function getIconStyles(e,t,n,o){return`\n    .icon-container {\n        position: relative;\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        justify-content: center;\n        z-index: 1;\n        min-width: 38px;\n        min-height: 38px;\n        margin: 6px;\n        border-radius: 50%;\n        cursor: pointer !important;\n        background-color: var(--card-background-color,var(--ha-card-background));\n    }\n    \n    .icon-container::after {\n        content: '';\n        position: absolute;\n        display: block;\n        opacity: ${e.startsWith("light.")?"0.2":"0"};\n        width: 100%;\n        height: 100%;\n        transition: all 1s;\n        border-radius: 50%;\n        background-color: ${t?n||"var(--accent-color)":"var(--card-background-color,var(--ha-card-background))"};\n    }\n    \n    .icon {\n        display: flex;\n        width: 22px; \n        color: ${t?n||"var(--accent-color)":"inherit"} !important;\n        opacity: ${t?"1":e?"0.6":"1"};\n        filter: ${t?n?o:"brightness(1.1)":"inherit"};\n    }\n    \n    .entity-picture {\n        display: flex;\n        height: 38px;\n        width: 38px;\n        border-radius: 100%;\n    }\n    `}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{let e="v1.6.4";const t=new Event("urlChanged");function n(){const e=function(){try{return document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("div")}catch(e){return}}();if(e)return e.classList.contains("edit-mode")}var o=__webpack_require__(946);const i=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const i=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=n,e.dispatchEvent(i),i},a=e=>{i(window,"haptic",e)},r=(e,t,n=!1)=>{n?history.replaceState(null,"",t):history.pushState(null,"",t),i(window,"location-changed",{replace:n})};function s(e,t){e.callService("homeassistant","toggle",{entity_id:t})}const l=300;let c,d,p,h,u,g,m=null,b=0,f=0;class _{constructor(e,t,n){this.element=e,this.config=t,this.sendActionEvent=n,this.holdDuration=300,this.holdTimeout=null,this.tapTimeout=null,this.lastTap=0,this.holdTriggered=!1}handleStart(){this.holdTriggered=!1,this.holdTimeout=setTimeout((()=>{this.sendActionEvent(this.element,this.config,"hold"),this.holdTriggered=!0}),this.holdDuration)}handleEnd(e){clearTimeout(this.holdTimeout);let t=(new Date).getTime(),n=t-this.lastTap;n<this.holdDuration&&n>0?(clearTimeout(this.tapTimeout),this.sendActionEvent(this.element,this.config,"double_tap")):this.holdTriggered||(this.tapTimeout=setTimeout((()=>{this.sendActionEvent(this.element,this.config,"tap")}),this.holdDuration)),this.lastTap=t,this.holdTriggered=!1}handleCancel(){clearTimeout(this.holdTimeout),this.holdTriggered=!1}}function v(e,t,n){const o=Date.now();if("tap"===n&&o-f<l)return;if(m===n&&o-b<l)return;let i={entity:t.entity,tap_action:t.tap_action||{action:"more-info"},double_tap_action:t.double_tap_action||{action:"toggle"},hold_action:t.hold_action||{action:"toggle"}};console.log("Action =",n,"Action config =",i),setTimeout((()=>{const t=new Event("hass-action",{bubbles:!0,composed:!0});t.detail={config:i,action:n},e.dispatchEvent(t)}),1),m=n,b=o,"double_tap"===n&&(f=o)}function y(e,t,n,o){let i=new _(e,t,v);"ontouchstart"in window?(e.addEventListener("touchstart",i.handleStart.bind(i),{passive:!0}),e.addEventListener("touchend",(e=>i.handleEnd(e)),{passive:!0}),e.addEventListener("touchcancel",i.handleCancel.bind(i),{passive:!0})):(e.addEventListener("mousedown",i.handleStart.bind(i),{passive:!0}),e.addEventListener("mouseup",(e=>i.handleEnd(e)),{passive:!0}),e.addEventListener("mouseout",i.handleCancel.bind(i),{passive:!0}))}function w(e,t,n,i){let a=t.styles?t.styles:"",r=t.entity&&n.states[t.entity]?t.entity:"",s=!t.icon&&r?n.states[r].attributes.icon||n.states[r].attributes.entity_picture||"":t.icon||"",l=t.name?t.name:r?n.states[r].attributes.friendly_name:"",u=t.width_desktop||"540px",g=u?u.match(/(\d+)(\D+)/):"",m=t.is_sidebar_hidden||!1,b=r?n.states[r].state:"";!function(e,t,n){e.hasState=t.states[n],e.hasState&&(e.newState=[e.hasState.state,e.hasState.attributes.rgb_color],e.oldState&&e.newState[0]===e.oldState[0]&&e.newState[1]===e.oldState[1]?e.stateChanged=!1:(e.oldState=e.newState,e.stateChanged=!0),e.stateChanged)}(e,n,r);let f=e.stateChanged,_=["on","open","cleaning","true","home","playing"].includes(b)||0!==Number(b)&&!isNaN(Number(b)),v=void 0===t.rise_animation||t.rise_animation,y=t.margin?"0"!==t.margin?t.margin:"0px":"7px",w=void 0!==t.bg_opacity?t.bg_opacity:"88",x=void 0!==t.shadow_opacity?t.shadow_opacity:"0",k=void 0!==t.bg_blur?t.bg_blur:"10",{iconColorOpacity:C,iconColor:$,iconFilter:S}=(0,o.mk)(n,r,_,o.wW),E=(0,o.G)(r,_,$,S),O=getComputedStyle(document.body),A=O.getPropertyValue("--ha-card-background")||O.getPropertyValue("--card-background-color"),L=t.bg_color?t.bg_color:A;if(L&&(!e.color||L!==e.color)){const t=1.02;d=(0,o._k)(L,w/100,t),document.body.style.setProperty("--bubble-pop-up-background",d),e.color=L,window.color=L}return{customStyles:a,entityId:r,icon:s,name:l,widthDesktop:u,widthDesktopDivided:g,isSidebarHidden:m,state:b,stateChanged:f,stateOn:_,formatedState:h,riseAnimation:v,marginCenter:y,popUpOpen:c,rgbaColor:d,rgbColor:p,bgOpacity:w,shadowOpacity:x,bgBlur:k,iconColorOpacity:C,iconColor:$,iconFilter:S,iconStyles:E,haStyle:O,themeBgColor:A,color:L}}function x(e){const t=e._hass;let{customStyles:s,entityId:l,icon:c,name:d,widthDesktop:p,widthDesktopDivided:h,isSidebarHidden:u,state:m,stateChanged:b,stateOn:f,riseAnimation:_,marginCenter:v,popUpOpen:y,rgbaColor:x,rgbColor:k,bgOpacity:C,shadowOpacity:$,bgBlur:S,iconColorOpacity:E,iconColor:O,iconFilter:A,iconStyles:L,haStyle:I,themeBgColor:T,color:D}=w(e,e.config,t);setInterval((()=>{g=n(),g&&!e.editorModeAdded?(e.buttonsContainer.classList.add("editor"),e.card.classList.add("editor"),e.editorModeAdded=!0):!g&&e.editorModeAdded&&(e.buttonsContainer.classList.remove("editor"),e.card.classList.remove("editor"),e.editorModeAdded=!1)}),100);if(!e.buttonsAdded){const t=document.createElement("div");t.classList.add("horizontal-buttons-stack-container"),e.content.appendChild(t),e.buttonsContainer=t}const V=(e,n,i)=>{if(t.states[n].attributes.rgb_color){const i=t.states[n].attributes.rgb_color,a=(0,o.wW)(i)?"rgba(255,220,200, 0.5)":`rgba(${i}, 0.5)`;e.style.backgroundColor=a,e.style.border="1px solid rgba(0,0,0,0)"}else t.states[n].attributes.rgb_color||"on"!=t.states[n].state?(e.style.backgroundColor="rgba(0,0,0,0)",e.style.border="1px solid var(--primary-text-color)"):(e.style.backgroundColor="rgba(255,255,255,0.5)",e.style.border="1px solid rgba(0,0,0,0)")};let M=[],z=1;for(;e.config[z+"_link"];){const t=z+"_",n=e.config[t+"name"]||"",o=e.config[t+"pir_sensor"];c=e.config[t+"icon"]||"";const i=e.config[t+"link"],a=e.config[t+"entity"];M.push({button:n,pirSensor:o,icon:c,link:i,lightEntity:a}),z++}if(e.config.auto_order&&M.sort(((e,n)=>e.pirSensor&&n.pirSensor?"on"===t.states[e.pirSensor].state&&"on"===t.states[n.pirSensor].state?t.states[e.pirSensor].last_updated<t.states[n.pirSensor].last_updated?1:-1:"on"===t.states[e.pirSensor].state?-1:"on"===t.states[n.pirSensor].state||t.states[e.pirSensor].last_updated<t.states[n.pirSensor].last_updated?1:-1:e.pirSensor?n.pirSensor?void 0:-1:1)),!e.buttonsAdded||g){if(e.card.classList.add("horizontal-buttons-stack"),g&&e.buttonsContainer)for(;e.buttonsContainer.firstChild;)e.buttonsContainer.removeChild(e.buttonsContainer.firstChild);const t={};M.forEach((n=>{const o=((t,n,o)=>{const s=document.createElement("button");return s.setAttribute("class",`button ${n.substring(1)}`),s.innerHTML=`\n            ${""!==o?`<ha-icon icon="${o}" class="icon" style="${""!==t?"margin-right: 8px;":""}"></ha-icon>`:""}\n            ${""!==t?`<p class="name">${t}</p>`:""}\n        `,s.hasListener||(s.addEventListener("click",(e=>{y=location.hash+!0,y!==n+!0?(r(0,n),y=n+!0):(history.replaceState(null,null,location.href.split("#")[0]),i(window,"location-changed",!0),y=n+!1),a("light")}),{passive:!0}),window.addEventListener("urlChanged",(()=>{e.config.highlight_current_view&&(location.pathname===n||location.hash===n?s.classList.add("highlight"):s.classList.remove("highlight"))}),{passive:!0}),s.hasListener=!0),s})(n.button,n.link,n.icon);t[n.link]=o,e.buttonsContainer.appendChild(o)})),e.buttonsAdded=!0,e.buttons=t}let B=0;!function(e){if(e.buttonsUpdated&&!g)return;let t=[];for(let n of M)e.buttons[n.link]&&(t.push(localStorage.getItem(`buttonWidth-${n.link}`)),t.push(localStorage.getItem(`buttonContent-${n.link}`)));Promise.all(t).then((t=>{let n=0;for(let o of M){let i=e.buttons[o.link];if(i){let a=t[n],r=t[n+1];n+=2,a&&"0"!==a&&r===i.innerHTML&&!g||(a=i.offsetWidth,localStorage.setItem(`buttonWidth-${o.link}`,a),localStorage.setItem(`buttonContent-${o.link}`,i.innerHTML),e.previousConfig=e.config),i.style.transform=`translateX(${B}px)`,B+=parseInt(a)+12}o.lightEntity&&V(i,o.lightEntity,o.link)}e.buttonsAdded=!0}))}(e);const U=`\n        ha-card {\n            border-radius: 0;\n        }\n        .horizontal-buttons-stack {\n            width: 100%;\n            margin-top: 0 !important;\n            background: none !important;\n            position: fixed;\n            height: 51px;\n            bottom: 16px;\n            left: ${v};\n            z-index: 1 !important; /* Higher value hide the more-info panel */\n        }\n        @keyframes from-bottom {\n            0% {transform: translateY(200px);}\n            20% {transform: translateY(200px);}\n            46% {transform: translateY(-8px);}\n            56% {transform: translateY(1px);}\n            62% {transform: translateY(-2px);}\n            70% {transform: translateY(0);}\n            100% {transform: translateY(0);}\n        }\n        .horizontal-buttons-stack-container {\n            width: max-content;\n            position: relative;\n            height: 51px;\n        }\n        .button {\n            display: inline-flex;\n            position: absolute;\n            box-sizing: border-box !important;\n            border: 1px solid var(--primary-text-color);\n            align-items: center;\n            height: 50px;\n            line-height: 16px;\n            white-space: nowrap;\n            width: auto;\n            border-radius: 25px;\n            z-index: 1;\n            padding: 0 16px;\n            background: none;\n            transition: background-color 1s, border 1s, transform 1s;\n            color: var(--primary-text-color);\n        }\n        .highlight {\n            animation: pulse 1.4s infinite alternate;\n        }\n        @keyframes pulse {\n            0% {\n                filter: brightness(0.7);\n            }\n            100% {\n                filter: brightness(1.3);\n            }\n        }\n        .icon {\n            height: 24px;\n        }\n        .card-content {\n            width: calc(100% + 18px);\n            box-sizing: border-box !important;\n            margin: 0 -36px !important;\n            padding: 0 36px !important;\n            overflow: scroll !important;\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n            -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 1) calc(0% + 28px), rgba(0, 0, 0, 1) calc(100% - 28px), transparent 100%);\n            /* mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%); */\n            /* -webkit-mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%); */\n        }\n        .horizontal-buttons-stack::before {\n            content: '';\n            position: absolute;\n            top: -32px;\n            left: -100%;\n            display: block;\n            background: linear-gradient(0deg, var(--background-color, var(--primary-background-color)) 50%, rgba(79, 69, 87, 0));\n            width: 200%;\n            height: 100px;\n        }\n        .card-content::-webkit-scrollbar {\n            display: none;\n        }\n        @media only screen and (min-width: 600px) {\n            .card-content {\n                position: fixed;\n                width: ${p} !important;\n                left: calc(50% - ${h[1]/2}${h[2]});\n                margin-left: -13px !important;\n                padding: 0 26px !important;\n            }\n        }\n        @media only screen and (min-width: 870px) {\n            .card-content {\n                position: fixed;\n                width: calc(${p}${"%"!==h[2]||u?"":" - var(--mdc-drawer-width)"}) !important;\n                left: calc(50% - ${h[1]/2}${h[2]} + ${!0===u?"0px":"var(--mdc-drawer-width) "+("%"===h[2]?"":"/ 2")});\n                margin-left: -13px !important;\n                padding: 0 26px !important;\n            }\n        }\n        .horizontal-buttons-stack.editor {\n            position: relative;\n            bottom: 0;\n            left: 0;\n            overflow: hidden;\n        }\n        .horizontal-buttons-stack.editor::before {\n            top: -32px;\n            left: -100%;\n            background: none;\n            width: 100%;\n            height: 0;\n        }\n        .horizontal-buttons-stack-container.editor > .button {\n            transition: background-color 0s, border 0s, transform 0s;\n        }\n        .horizontal-buttons-stack-container.editor {\n            margin-left: 1px;\n        }\n        .horizontal-buttons-stack.editor > .card-content {\n            position: relative;\n            width: calc(100% + 26px) !important;\n            left: -26px;\n            margin: 0 !important;\n            padding: 0;\n        }\n    `;!window.hasAnimated&&_&&(e.content.style.animation="from-bottom 1.3s forwards",window.hasAnimated=!0,setTimeout((()=>{e.content.style.animation="none"}),1500)),(0,o.L2)(t,e,U,s)}const k=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),C=k.prototype.html,$=k.prototype.css;let S;!function(){if(!window.eventAdded){function e(){let e=0;const n=setInterval((()=>{e<10?(window.dispatchEvent(t),e++):clearInterval(n)}),100)}window.eventAdded=!0,window.popUpInitialized=!1,["location-changed","connection-status","popstate"].forEach((t=>{window.addEventListener(t,e)}),{passive:!0});const n=()=>{window.dispatchEvent(t)};window.addEventListener("popUpInitialized",n,{passive:!0})}}();class E extends HTMLElement{set hass(e){var t;switch(this._hass=e,S=n(),this.editor=S,async function(e){if(!window.resourcesChecked){window.resourcesChecked=!0;try{let t=(await e.callWS({type:"lovelace/resources"})).find((e=>e.url.includes("bubble-pop-up.js")));async function n(e){let t=await e.callWS({type:"lovelace/resources"}),n=t.findIndex((e=>e.url.includes("bubble-card.js"))),o=null;if(-1!==n&&0!==n){o=t.splice(n,1)[0];for(let n of t)await e.callWS({type:"lovelace/resources/delete",resource_id:n.id});o&&-1===(await e.callWS({type:"lovelace/resources"})).findIndex((e=>e.url.includes("bubble-card.js")))&&await e.callWS({type:"lovelace/resources/create",res_type:o.type,url:o.url});for(let n of t)await e.callWS({type:"lovelace/resources/create",res_type:n.type,url:n.url})}}t&&await e.callWS({type:"lovelace/resources/delete",resource_id:t.id}),n(e)}catch(o){throw o}}}(e),(t=this).content||(t.attachShadow({mode:"open"}),t.shadowRoot.innerHTML='\n            <ha-card style="background: none; border: none; box-shadow: none; border-radius: 16px;">\n                <div class="card-content" style="padding: 0;">\n                </div>\n            </ha-card>\n        ',t.card=t.shadowRoot.querySelector("ha-card"),t.content=t.shadowRoot.querySelector("div")),this.config.card_type){case"pop-up":!function(e){const t=e._hass,n=e.editor,a=e.config;if(!t)return;let l,c,d,p,{customStyles:h,entityId:g,icon:m,name:b,widthDesktop:f,widthDesktopDivided:_,isSidebarHidden:v,state:x,stateChanged:k,stateOn:C,formatedState:$,riseAnimation:S,marginCenter:E,popUpOpen:O,rgbaColor:A,rgbColor:L,bgOpacity:I,shadowOpacity:T,bgBlur:D,iconColorOpacity:V,iconColor:M,iconFilter:z,iconStyles:B,haStyle:U,themeBgColor:q,color:H}=w(e,a,t),W=a.auto_close||!1,F=a.hash,Y=a.trigger_entity?a.trigger_entity:"",R=a.trigger_state?a.trigger_state:"",P=!!a.trigger_close&&a.trigger_close,N=a.entity?"flex":"none",j=a.text||"",X=a.state,G=a.close_on_click||!1,K=a.margin_top_mobile&&"0"!==a.margin_top_mobile?a.margin_top_mobile:"0px",Z=a.margin_top_desktop&&"0"!==a.margin_top_desktop?a.margin_top_desktop:"0px";if(x=X&&t.states[X]?t.states[X].state:"",e.errorTriggered)return;function J(){history.replaceState(null,null,location.href.split("#")[0]),i(window,"location-changed",!0)}function Q(e){window.hash===F&&ee();const t=e.composedPath();!t||t.some((e=>"HA-MORE-INFO-DIALOG"===e.nodeName))||t.some((e=>"root"===e.id&&!e.classList.contains("close-pop-up")))||setTimeout((function(){window.hash===F&&(J(),localStorage.setItem("isManuallyClosed_"+F,!0))}),100)}function ee(){clearTimeout(d),W>0&&(d=setTimeout(J,W))}function te(){s(t,g)}function ne(e){"Escape"===e.key&&(J(),localStorage.setItem("isManuallyClosed_"+F,!0))}function oe(e){window.hash===F&&ee(),l=e.touches[0].clientY,c=l}function ie(e){e.touches[0].clientY-l>300&&e.touches[0].clientY>c&&(J(),localStorage.setItem("isManuallyClosed_"+F,!0)),c=e.touches[0].clientY}function ae(){n||(window.hash=location.hash.split("?")[0],window.hash===F&&O!==F+!0?(e.popUp.classList.remove("close-pop-up"),e.popUp.classList.add("open-pop-up"),e.content.querySelector(".power-button").addEventListener("click",te,{passive:!0}),window.addEventListener("keydown",ne,{passive:!0}),e.popUp.addEventListener("touchstart",oe,{passive:!0}),e.popUp.addEventListener("touchmove",ie,{passive:!0}),document.body.style.overflow="hidden",re(e.popUp,!1),ee(),G&&(e.popUp.addEventListener("mouseup",J,{passive:!0}),e.popUp.addEventListener("touchend",J,{passive:!0})),O=F+!0,setTimeout((function(){window.addEventListener("click",Q,{passive:!0})}),10)):window.hash!==F&&O!==F+!1&&(e.popUp.classList.remove("open-pop-up"),e.popUp.classList.add("close-pop-up"),e.content.querySelector(".power-button").removeEventListener("click",te),window.removeEventListener("keydown",ne),window.removeEventListener("click",Q),e.popUp.removeEventListener("touchstart",oe),e.popUp.removeEventListener("touchmove",ie),document.body.style.overflow="",clearTimeout(d),G&&(e.popUp.removeEventListener("mouseup",J),e.popUp.removeEventListener("touchend",J)),O=F+!1,setTimeout((function(){re(e.popUp,!0)}),320)))}function re(e,t){for(var n=e.querySelectorAll("video"),o=0;o<n.length;o++){var i=n[o]&&n[o].currentTime>0&&!n[o].paused&&!n[o].ended&&n[o].readyState>n[o].HAVE_CURRENT_DATA;t&&i?n[o].pause():t||i||(n[o].play(),n[o].currentTime>0&&(n[o].currentTime=1e4))}var a=e.querySelectorAll("*");for(o=0;o<a.length;o++)a[o].shadowRoot&&re(a[o].shadowRoot,t)}function se(){let i=e.popUp;$=X?t.formatEntityState(t.states[X]):"",e.headerAdded?g&&(e.iconContainer.innerHTML="",(0,o.IU)(e,g,m,e.iconContainer,n),e.h2.textContent=b,e.p.textContent=$,e.haIcon2.setAttribute("style",`display: ${N};`)):(e.headerContainer=document.createElement("div"),e.headerContainer.setAttribute("id","header-container"),e.div=document.createElement("div"),e.headerContainer.appendChild(e.div),e.iconContainer=document.createElement("div"),e.iconContainer.setAttribute("class","icon-container"),e.div.appendChild(e.iconContainer),(0,o.IU)(e,g,m,e.iconContainer,n),y(e.iconContainer,a),e.h2=document.createElement("h2"),e.h2.textContent=b,e.div.appendChild(e.h2),e.p=document.createElement("p"),e.p.textContent=$,e.div.appendChild(e.p),e.haIcon2=document.createElement("ha-icon"),e.haIcon2.setAttribute("class","power-button"),e.haIcon2.setAttribute("icon","mdi:power"),e.haIcon2.setAttribute("style",`display: ${N};`),e.div.appendChild(e.haIcon2),e.button=document.createElement("button"),e.button.setAttribute("class","close-pop-up"),e.button.onclick=function(){J(),localStorage.setItem("isManuallyClosed_"+F,!0)},e.headerContainer.appendChild(e.button),e.haIcon3=document.createElement("ha-icon"),e.haIcon3.setAttribute("icon","mdi:close"),e.button.appendChild(e.haIcon3),e.content.appendChild(e.headerContainer),e.header=e.div,e.headerAdded=!0),function(){if(g){const n=t.states[g].attributes.rgb_color;e.rgbColor=n?(0,o.wW)(n)?"rgb(255,220,200)":`rgb(${n})`:C?g.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"rgba(255, 255, 255, 1",e.rgbColorOpacity=n?(0,o.wW)(n)?"rgba(255,220,200, 0.5)":`rgba(${n}, 0.5)`:g&&C?g.startsWith("light.")?"rgba(255,220,200, 0.5)":"var(--accent-color)":"var(--background-color,var(--secondary-background-color))",p=(0,o._k)(H,0),e.iconFilter=n?(0,o.wW)(n)?"none":"brightness(1.1)":"none"}else p=(0,o._k)(H,0)}(),e.eventAdded||n?e.eventAdded&&n&&(window.removeEventListener("urlChanged",window["checkHashRef_"+F]),e.eventAdded=!1):(window["checkHashRef_"+F]=ae,window.addEventListener("urlChanged",window["checkHashRef_"+F],{passive:!0}),e.eventAdded=!0);const r=`                    \n            ha-card {\n                margin-top: 0 !important;\n                background: none !important;\n                border: none !important;\n            }\n            .card-content {\n                width: 100% !important;\n                padding: 0 !important;\n            }\n            #root {\n            \ttransition: transform .36s !important;\n                position: fixed !important;\n                margin: 0 -${E}; /* 7px */\n                width: 100%;\n                ${a.bg_color||a.bg_opacity?"--bubble-pop-up-background-custom: "+A:""};\n                background-color: var(--bubble-pop-up-background-custom, var(--bubble-pop-up-background));\n                box-shadow: 0px 0px 50px rgba(0,0,0,${T/100});\n                backdrop-filter: blur(${D}px);\n                -webkit-backdrop-filter: blur(${D}px);\n                border-radius: 42px;\n                box-sizing: border-box;\n                top: calc(120% + ${K} + var(--header-height));\n                grid-gap: 12px !important;\n                gap: 12px !important;\n                grid-auto-rows: min-content;\n                padding: 18px 18px 220px 18px !important;\n                height: 100% !important;\n                -ms-overflow-style: none; /* for Internet Explorer, Edge */\n                scrollbar-width: none; /* for Firefox */\n                overflow-y: auto; \n                overflow-x: hidden; \n                z-index: 1 !important; /* Higher value hide the more-info panel */\n                /* For older Safari but not working with Firefox */\n                /* display: grid !important; */  \n            }\n            #root.hidden {\n            \tdisplay: none !important;\n            }\n            #root > :first-child::after {\n                content: '';\n                display: block;\n                position: sticky;\n                top: 0;\n                left: -50px;\n                margin: -70px 0 -36px -36px;\n                overflow: visible;\n                width: 200%;\n                height: 100px;\n                background: linear-gradient(0deg, ${p} 0%, ${A} 80%);\n                z-index: 0;\n            } \n            #root::-webkit-scrollbar {\n                display: none; /* for Chrome, Safari, and Opera */\n            }\n            #root > :first-child {\n                position: sticky;\n                top: 0;\n                z-index: 1;\n                background: none !important;\n                overflow: visible;\n            }\n            #root.open-pop-up {\n                transform: translateY(-120%);\n            }\n            #root.open-pop-up > * {\n              /* Block child items to overflow and if they do clip them */\n              /*max-width: calc(100vw - 38px);*/\n              max-width: 100% !important;\n              /*overflow-x: clip;*/\n            }\n            #root.close-pop-up { \n                transform: translateY(-20%);\n                box-shadow: none;\n            }\n            @media only screen and (min-width: 600px) {\n                #root {\n                    top: calc(120% + ${Z} + var(--header-height));\n                    width: calc(${f}${"%"!==_[2]||v?"":" - var(--mdc-drawer-width)"}) !important;\n                    left: calc(50% - ${_[1]/2}${_[2]});\n                    margin: 0 !important;\n                }\n            }  \n            @media only screen and (min-width: 870px) {\n                #root {\n                    left: calc(50% - ${_[1]/2}${_[2]} + ${v?"0px":"var(--mdc-drawer-width) "+("%"===_[2]?"":"/ 2")});\n                }\n            }  \n            #root.editor {\n                position: inherit !important;\n                width: 100% !important;\n                padding: 18px !important;\n                backdrop-filter: none !important;\n            }\n        `,s=`\n            ${B}\n\n            ha-card {\n                margin-top: 0 !important;\n            }\n            #header-container {\n                display: inline-flex;\n                ${m||b||g||x||j?"":"flex-direction: row-reverse;"}\n                height: 50px;\n                width: 100%;\n                margin: 0;\n                padding: 0;\n            }\n            #header-container > div {\n                display: ${m||b||g||x||j?"inline-flex":"none"};\n                align-items: center;\n                position: relative;\n                padding-right: 6px;\n                z-index: 1;\n                flex-grow: 1;\n                background-color: ${g?e.rgbColorOpacity:"var(--background-color,var(--secondary-background-color))"};\n                transition: background 1s;\n                border-radius: 25px;\n                margin-right: 14px;\n                backdrop-filter: blur(14px);\n                -webkit-backdrop-filter: blur(14px);\n            }\n            #header-container h2 {\n                display: inline-flex;\n                margin: 0 18px 0 0;\n                padding: 4px;\n                z-index: 1;\n                font-size: 18px;\n            }\n            #header-container p {\n                display: inline-flex;\n                font-size: 16px;\n                min-width: fit-content ;\n            }\n            .power-button {\n                cursor: pointer; \n                flex-grow: inherit; \n                width: 24px;\n                height: 24px;\n                border-radius: 12px;\n                margin: 0 10px;\n                background: none !important;\n                justify-content: flex-end;\n                background-color: var(--background-color,var(--secondary-background-color));\n            }\n            .close-pop-up {\n                height: 50px;\n                width: 50px;\n                border: none;\n                border-radius: 50%;\n                z-index: 1;\n                background: var(--background-color,var(--secondary-background-color));\n                color: var(--primary-text-color);\n                flex-shrink: 0;\n                cursor: pointer;\n            }\n        `;(0,o.L2)(t,e,r,h,x,g,"","",i),(0,o.L2)(t,e,s,h,x,g,k)}e.initStyleAdded||e.popUp||n||(e.card.style.marginTop="4000px",e.initStyleAdded=!0);const le=setTimeout((()=>{const t=new Event("popUpInitialized");e.element||(e.element=e.getRootNode().querySelector("#root")),e.element&&(!e.popUp||k||n&&!e.editorModeAdded)?(e.popUp=e.element,n&&e.popUp&&!e.editorModeAdded?(e.popUp.classList.add("editor"),e.popUp.classList.remove("close-pop-up","open-pop-up"),se(),e.editorModeAdded=!0):se(),clearTimeout(le),window.dispatchEvent(t)):!n&&e.popUp&&e.editorModeAdded&&(e.popUp.classList.remove("editor"),se(),e.editorModeAdded=!1)}),0);e.popUp&&Y&&function(t){if(!t||t===u)return;u=t,null===localStorage.getItem("previousTriggerState_"+F)&&localStorage.setItem("previousTriggerState_"+F,""),null===localStorage.getItem("isManuallyClosed_"+F)&&localStorage.setItem("isManuallyClosed_"+F,"false"),null===localStorage.getItem("isTriggered_"+F)&&localStorage.setItem("isTriggered_"+F,"false");let n=localStorage.getItem("previousTriggerState_"+F),o="true"===localStorage.getItem("isManuallyClosed_"+F),i="true"===localStorage.getItem("isTriggered_"+F);t!==R||null!==n||i||(r(0,F),i=!0,localStorage.setItem("isTriggered_"+F,i)),t!==n&&(o=!1,localStorage.setItem("previousTriggerState_"+F,t),localStorage.setItem("isManuallyClosed_"+F,o)),t!==R||o?t!==R&&P&&e.popUp.classList.contains("open-pop-up")&&i&&!o&&(J(),i=!1,o=!0,localStorage.setItem("isManuallyClosed_"+F,o),localStorage.setItem("isTriggered_"+F,i)):(r(0,F),i=!0,localStorage.setItem("isTriggered_"+F,i))}(t.states[Y].state)}(this);break;case"horizontal-buttons-stack":x(this);break;case"button":!function(e){const t=e._hass,n=e.editor;let{customStyles:i,entityId:r,icon:l,name:c,widthDesktop:d,widthDesktopDivided:p,isSidebarHidden:h,state:u,stateChanged:g,stateOn:m,formatedState:b,riseAnimation:f,marginCenter:_,popUpOpen:v,rgbaColor:x,rgbColor:k,bgOpacity:C,shadowOpacity:$,bgBlur:S,iconColorOpacity:E,iconColor:O,iconFilter:A,iconStyles:L,haStyle:I,themeBgColor:T,color:D}=w(e,e.config,t);b=r&&(g||n)?t.formatEntityState(t.states[r]):"";let V=e.config.button_type||"switch",M=!!e.config.show_state&&e.config.show_state,z=r?t.states[r].attributes.brightness||0:"",B=r?t.states[r].attributes.volume_level||0:"",U=!1,q=z,H=B,W=0,F=0,Y=0,R=!1,P=null;if(e.config.service_on,e.config.service_off,!e.buttonAdded){const t=document.createElement("div");t.setAttribute("class","button-container"),e.content.appendChild(t)}const N=document.createElement("div");N.setAttribute("class","icon-container"),e.iconContainer=N;const j=document.createElement("div");j.setAttribute("class","name-container");const X=document.createElement("div");X.setAttribute("class","switch-button");const G=document.createElement("div");G.setAttribute("class","range-slider");const K=document.createElement("div");if(K.setAttribute("class","range-fill"),!e.buttonContainer||n){if(n&&e.buttonContainer){for(;e.buttonContainer.firstChild;)e.buttonContainer.removeChild(e.buttonContainer.firstChild);e.eventAdded=!1,e.wasEditing=!0}e.buttonContainer=e.content.querySelector(".button-container"),"slider"!==V||e.buttonAdded&&!n?("switch"===V||"custom"===V||n)&&(e.buttonContainer.appendChild(X),X.appendChild(N),X.appendChild(j),e.switchButton=e.content.querySelector(".switch-button")):(e.buttonContainer.appendChild(G),G.appendChild(N),G.appendChild(j),G.appendChild(K),e.rangeFill=e.content.querySelector(".range-fill")),(0,o.IU)(e,r,l,N,n),j.innerHTML=`\n            <p class="name">${c}</p>\n            ${M?`<p class="state">${b}</p>`:""}\n        `,e.buttonAdded=!0}function Z(e){a("success");let t=e.querySelector(".feedback-element");t||(t=document.createElement("div"),t.setAttribute("class","feedback-element"),e.appendChild(t)),t.style.animation="tap-feedback .5s",setTimeout((()=>{t.style.animation="none",e.removeChild(t)}),500)}function J(e){W=e.pageX||(e.touches?e.touches[0].pageX:0),F=e.pageY||(e.touches?e.touches[0].pageY:0),Y=G.value,e.target!==N&&e.target!==N.querySelector("ha-icon")&&(U=!0,document.addEventListener("mouseup",ee,{passive:!0}),document.addEventListener("touchend",ee,{passive:!0}),document.addEventListener("mousemove",Q,{passive:!0}),document.addEventListener("touchmove",Q,{passive:!0}),P=setTimeout((()=>{oe(e.pageX||e.touches[0].pageX),te(),P=null}),200))}function Q(e){const t=e.pageX||(e.touches?e.touches[0].pageX:0),n=e.pageY||(e.touches?e.touches[0].pageY:0);Math.abs(n-F)>Math.abs(t-W)?(clearTimeout(P),ee()):(document.removeEventListener("mousemove",Q),document.removeEventListener("touchmove",Q),document.addEventListener("mousemove",ne,{passive:!0}),document.addEventListener("touchmove",ne,{passive:!0}))}function ee(){U=!1,R=!1,te(),document.removeEventListener("mouseup",ee),document.removeEventListener("touchend",ee),document.removeEventListener("mousemove",ne),document.removeEventListener("touchmove",ne)}function te(){r.startsWith("light.")?(z=q,t.callService("light","turn_on",{entity_id:r,brightness:z})):r.startsWith("media_player.")&&(B=H,t.callService("media_player","volume_set",{entity_id:r,volume_level:B}))}function ne(e){const t=e.pageX||(e.touches?e.touches[0].pageX:0),n=e.pageY||(e.touches?e.touches[0].pageY:0);U&&Math.abs(t-W)>10?(a("light"),oe(t)):U&&Math.abs(n-F)>10&&(U=!1,G.value=Y)}function oe(e){const t=G.getBoundingClientRect(),n=Math.min(Math.max(e-t.left,0),t.width)/t.width;r.startsWith("light.")?q=Math.round(255*n):r.startsWith("media_player.")&&(H=n),K.style.transition="none",K.style.transform=`translateX(${100*n}%)`}M&&b&&(e.content.querySelector(".state").textContent=b),e.eventAdded||"switch"!==V?e.eventAdded||"slider"!==V?e.eventAdded||"custom"!==V||(X.addEventListener("click",(()=>Z(e.switchButton)),{passive:!0}),y(X,e.config),e.eventAdded=!0):(G.addEventListener("mousedown",J,{passive:!0}),G.addEventListener("touchstart",J,{passive:!0}),y(N,e.config),e.eventAdded=!0):(X.addEventListener("click",(()=>Z(e.switchButton)),{passive:!0}),X.addEventListener("click",(function(e){e.target!==N&&e.target!==N.querySelector("ha-icon")&&s(t,r)}),{passive:!0}),y(N,e.config),e.eventAdded=!0),e.isDragging||"slider"!==V||(e.rangeFill.style.transition="all .3s",r.startsWith("light.")?e.rangeFill.style.transform=`translateX(${z/255*100}%)`:r.startsWith("media_player.")&&(e.rangeFill.style.transform=`translateX(${100*B}%)`));const ie=`\n        ha-card {\n            margin-top: 0 !important;\n            background: none !important;\n            opacity: ${"unavailable"!==u?"1":"0.5"};\n        }\n        \n        .button-container {\n            position: relative;\n            width: 100%;\n            height: 50px;\n            z-index: 0;\n            background-color: var(--background-color-2,var(--secondary-background-color));\n            border-radius: 25px;\n            mask-image: radial-gradient(white, black);\n            -webkit-mask-image: radial-gradient(white, black);\n            -webkit-backface-visibility: hidden;\n            -moz-backface-visibility: hidden;\n            -webkit-transform: translateZ(0);\n            overflow: hidden;\n        }\n        \n        .switch-button,\n        .range-slider {\n            display: inline-flex;\n            position: absolute;\n            height: 100%;\n            width: 100%;\n            transition: background-color 1.5s;\n            background-color: ${m&&["switch","custom"].includes(V)?"var(--accent-color)":"rgba(0,0,0,0)"};\n        }\n\n        .range-fill {\n            z-index: -1;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            background-color: ${E};\n            width: 100%;\n            left: -100%;\n        }\n        \n        .switch-button {\n            cursor: pointer !important;\n        }\n        \n        .range-slider {\n            cursor: ew-resize;\n        }\n        \n        .name-container {\n            position: relative;\n            display: ${M?"block":"inline-flex"};\n            margin-left: 4px;\n            z-index: 1;\n            font-weight: 600;\n            align-items: center;\n            line-height: ${M?"4px":"16px"};\n            padding-right: 16px;\n        }\n        \n        .state {\n            font-size: 12px;\n            opacity: 0.7;\n        }\n        \n        .feedback-element {\n            position: absolute;\n            top: 0;\n            left: 0;\n            opacity: 0;\n            width: 100%;\n            height: 100%;\n            background-color: rgb(0,0,0);\n        }\n        \n        @keyframes tap-feedback {\n            0% {transform: translateX(-100%); opacity: 0;}\n            64% {transform: translateX(0); opacity: 0.1;}\n            100% {transform: translateX(100%); opacity: 0;}\n        }\n\n        ${L}\n    `;(0,o.L2)(t,e,ie,i,u,r,g)}(this);break;case"separator":!function(e){const t=e._hass,n=e.editor,i=e.config;let{customStyles:a,entityId:r,icon:s,name:l,widthDesktop:c,widthDesktopDivided:d,isSidebarHidden:p,state:h,stateChanged:u,stateOn:g,formatedState:m,riseAnimation:b,marginCenter:f,popUpOpen:_,rgbaColor:v,rgbColor:y,bgOpacity:x,shadowOpacity:k,bgBlur:C,iconColorOpacity:$,iconColor:S,iconFilter:E,iconStyles:O,haStyle:A,themeBgColor:L,color:I}=w(e,i,t);if(!e.separatorAdded||n){if(n&&e.separatorContainer)for(;e.separatorContainer.firstChild;)e.separatorContainer.removeChild(e.separatorContainer.firstChild);e.separatorAdded||(e.separatorContainer=document.createElement("div"),e.separatorContainer.setAttribute("class","separator-container")),e.separatorContainer.innerHTML=`\n            <div>\n                <ha-icon icon="${s}"></ha-icon>\n                <h4>${l}</h4>\n            </div>\n            <div></div>\n        `,e.content.appendChild(e.separatorContainer),e.separatorAdded=!0}(0,o.L2)(t,e,"\n        .separator-container {\n            display: inline-flex;\n            width: 100%;\n            margin-top: 12px;\n        }\n        .separator-container div:first-child {\n            display: inline-flex;\n            max-width: calc(100% - 38px);\n        }\n        .separator-container div ha-icon {\n            display: inline-flex;\n            height: 24px;\n            width: 24px;\n            margin: 0 22px 0 8px;\n            transform: translateY(-2px);\n        }\n        .separator-container div h4 {\n            display: inline-flex;\n            margin: 0 20px 0 0;\n            font-size: 16px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        .separator-container div:last-child {\n            display: inline-flex; \n            border-radius: 6px; \n            opacity: 0.5; \n            margin-left: 10px; \n            flex-grow: 1; \n            height: 6px; \n            align-self: center; \n            background-color: var(--background-color,var(--secondary-background-color));\n        }\n    ",a)}(this);break;case"cover":!function(e){const t=e._hass,n=e.editor,i=e.config;let{customStyles:a,entityId:r,icon:s,name:l,widthDesktop:c,widthDesktopDivided:d,isSidebarHidden:p,state:h,stateChanged:u,stateOn:g,formatedState:m,riseAnimation:b,marginCenter:f,popUpOpen:_,rgbaColor:v,rgbColor:x,bgOpacity:k,shadowOpacity:C,bgBlur:$,iconColorOpacity:S,iconColor:E,iconFilter:O,iconStyles:A,haStyle:L,themeBgColor:I,color:T}=w(e,i,t);const D=i.icon_open?i.icon_open:"mdi:window-shutter-open",V=i.icon_close?i.icon_close:"mdi:window-shutter",M=i.open_service?i.open_service:"cover.open_cover",z=i.close_service?i.close_service:"cover.close_cover",B=i.stop_service?i.stop_service:"cover.stop_cover",U=i.icon_up?i.icon_up:"mdi:arrow-up",q=i.icon_down?i.icon_down:"mdi:arrow-down",H=!!e.config.show_state&&e.config.show_state;if(s="open"===t.states[i.entity].state?D:V,m=u?t.formatEntityState(t.states[r]):m||"",!e.coverAdded||n){if(n&&e.coverContainer)for(;e.coverContainer.firstChild;)e.coverContainer.removeChild(e.coverContainer.firstChild);e.coverContainer=document.createElement("div"),e.coverContainer.setAttribute("class","cover-container"),e.coverContainer.innerHTML=`\n            <div class="header-container">\n                <div class="icon-container">\n                </div>\n                <div class="name-container">\n                    <p class="name">${l}</p>\n                    <p class="state"></p>\n                </div>\n            </div>\n            <div class="buttons-container">\n                <button class="button open">\n                    <ha-icon icon="${U}"></ha-icon>\n                </button>\n                <button class="button stop">\n                    <ha-icon icon="mdi:stop"></ha-icon>\n                </button>\n                <button class="button close">\n                    <ha-icon icon="${q}"></ha-icon>\n                </button>\n            </div>\n        `,e.content.appendChild(e.coverContainer);const o=e.coverContainer.querySelector(".open"),a=e.coverContainer.querySelector(".stop"),s=e.coverContainer.querySelector(".close");o.addEventListener("click",(()=>{t.callService(M.split(".")[0],M.split(".")[1],{entity_id:r})}),{passive:!0}),a.addEventListener("click",(()=>{t.callService(B.split(".")[0],B.split(".")[1],{entity_id:r})}),{passive:!0}),s.addEventListener("click",(()=>{t.callService(z.split(".")[0],z.split(".")[1],{entity_id:r})}),{passive:!0}),e.iconContainer=e.content.querySelector(".icon-container"),y(e.iconContainer,i),e.coverAdded=!0}e.iconContainer&&(u||n)&&(e.iconContainer.innerHTML=`<ha-icon icon="${s}" class="icon"></ha-icon>`,e.content.querySelector(".state").textContent=H?m:""),(0,o.L2)(t,e,"\n        ha-card {\n            margin-top: 0 !important;\n            background: none !important;\n        }\n        \n        .header-container {\n            display: flex;\n            align-items: center;\n            margin-bottom: 10px;\n        }\n        \n        .cover-container {\n            display: grid;\n        }\n        \n        .icon-container {\n            display: flex;\n            margin: 0 !important;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            /*z-index: 1;*/\n            width: 48px;\n            height: 48px;\n            margin: 6px;\n            border-radius: 50%;\n            background-color: var(--card-background-color,var(--ha-card-background));\n            border: 6px solid var(--background-color-2,var(--secondary-background-color));\n            box-sizing: border-box;\n        }\n        \n        .name-container {\n            font-weight: 600;\n            margin-left: 10px;\n            line-height: 4px;\n        }\n        \n        .buttons-container {\n            display: grid;\n            align-self: center;\n            grid-auto-flow: column;\n            grid-gap: 18px;             \n        }\n        \n        .state {\n            font-size: 12px;\n            opacity: 0.7;\n        }\n        \n        ha-icon {\n            display: flex; \n            height: 24px; \n            width: 24px; \n            color: var(--primary-text-color);\n        }\n        \n        .button {\n            display: flex;\n            background: var(--background-color-2,var(--secondary-background-color));\n            height: 42px;\n            border-radius: 32px;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            border: none;\n        }\n    ",a,h,r)}(this);break;case"empty-column":!function(e){if(!e.emptyCollumnAdded){const t=document.createElement("div");t.setAttribute("class","empty-column"),t.innerHTML='\n            <div style="display: flex; width: 100%;"></div>\n        ',e.content.appendChild(t),e.emptyColumnAdded=!0}}(this)}window.columnFix||(window.columnFix=this.config.column_fix)}setConfig(e){if("pop-up"===e.card_type){if(!e.hash)throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.")}else if("horizontal-buttons-stack"===e.card_type){var t={};for(var n in e)if(n.match(/^\d+_icon$/)){var o=n.replace("_icon","_link");if(void 0===e[o])throw new Error("You need to define "+o);if(t[e[o]])throw new Error("You can't use "+e[o]+" twice");t[e[o]]=!0}}else if(("button"===e.card_type||"cover"===e.card_type)&&!e.entity)throw new Error("You need to define an entity");if(window.entityError)throw new Error("You need to define a valid entity");this.config=e}getCardSize(){return window.columnFix?0:-1}static getConfigElement(){return document.createElement("bubble-card-editor")}}customElements.define("bubble-card",E),customElements.define("bubble-card-editor",class extends k{setConfig(e){this._config={...e}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config.card_type||""}get _button_type(){return this._config.button_type||"switch"}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _text(){return this._config.text||""}get _hash(){return this._config.hash||"#pop-up-name"}get _trigger_entity(){return this._config.trigger_entity||""}get _trigger_state(){return this._config.trigger_state||""}get _trigger_close(){return this._config.trigger_close||!1}get _margin(){return this._config.margin||"7px"}get _margin_top_mobile(){return this._config.margin_top_mobile||"0px"}get _margin_top_desktop(){return this._config.margin_top_desktop||"0px"}get _width_desktop(){return this._config.width_desktop||"540px"}get _bg_color(){return this._config.bg_color||window.color}get _bg_opacity(){return void 0!==this._config.bg_opacity?this._config.bg_opacity:"88"}get _bg_blur(){return void 0!==this._config.bg_blur?this._config.bg_blur:"14"}get _shadow_opacity(){return void 0!==this._config.shadow_opacity?this._config.shadow_opacity:"0"}get _is_sidebar_hidden(){return this._config.is_sidebar_hidden||!1}get _rise_animation(){return void 0===this._config.rise_animation||this._config.rise_animation}get _auto_close(){return this._config.auto_close||""}get _close_on_click(){return this._config.close_on_click||!1}get _icon_open(){return this._config.icon_open||""}get _icon_close(){return this._config.icon_close||""}get _open_service(){return this._config.open_service||"cover.open_cover"}get _close_service(){return this._config.open_service||"cover.close_cover"}get _stop_service(){return this._config.open_service||"cover.stop_cover"}get _auto_order(){return this._config.auto_order||!1}get _highlightCurrentview(){return this._config.highlight_current_view||!1}get _show_state(){return this._config.show_state||!1}render(){if(!this.hass)return C``;if(!this.listsUpdated){const e=e=>({label:e,value:e});this.allEntitiesList=Object.keys(this.hass.states).map(e),this.lightList=Object.keys(this.hass.states).filter((e=>"light"===e.substr(0,e.indexOf(".")))).map(e),this.sensorList=Object.keys(this.hass.states).filter((e=>"sensor"===e.substr(0,e.indexOf(".")))).map(e),this.binarySensorList=Object.keys(this.hass.states).filter((e=>"binary_sensor"===e.substr(0,e.indexOf(".")))).map(e),this.coverList=Object.keys(this.hass.states).filter((e=>"cover"===e.substr(0,e.indexOf(".")))).map(e),this.cardTypeList=[{label:"Button",value:"button"},{label:"Cover",value:"cover"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Pop-up",value:"pop-up"},{label:"Separator",value:"separator"}],this.buttonTypeList=[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"}],this.listsUpdated=!0}const t=this.allEntitiesList,n=(this.lightList,this.sensorList,this.coverList),o=this.cardTypeList,i=this.buttonTypeList;if("pop-up"===this._config.card_type)return C`
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
                    <ha-alert alert-type="info">This card allows you to convert any vertical stack into a pop-up. Each pop-up can be opened by targeting its link (e.g. '#pop-up-name'), with navigation_path or with the horizontal buttons stack that is included.<br><b>It must be placed within a vertical-stack card at the top most position to function properly. The pop-up will be hidden by default until you open it.</b><br><br><a style="color: #fff" href="https://github.com/Clooos/Bubble-Card#pop-up-optimization">How to get the optimized mode?</a></ha-alert>
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
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="1000"
                        .value="${this._auto_close}"
                        .configValue="${"auto_close"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
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
            `;if("button"===this._config.card_type)return C`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
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
            `;if("separator"===this._config.card_type)return C`
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
            `;if("horizontal-buttons-stack"===this._config.card_type){if(!this.buttonAdded&&this.shadowRoot.querySelector("#add-button")){this.buttonAdded=!0;const e=this.shadowRoot.querySelector("#add-button");for(this.buttonIndex=0;this._config[this.buttonIndex+1+"_link"];)this.buttonIndex++;e.addEventListener("click",(()=>{this.buttonIndex++;const t=e.style.opacity,n=e.innerText;e.style.opacity="0.6",e.style.transition="opacity 1s",e.innerText="Loading...",setTimeout((()=>{e.style.opacity=t,e.innerText=n}),5e3)}),{passive:!0})}return C`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <h3>Horizontal buttons stack</h3>
                    <ha-alert alert-type="info">This card is the companion to the pop-up card, allowing you to open the corresponding pop-ups. It also allows you to open any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.<br><br><b>Please note that this card may take some time to load in edit mode.</b></ha-alert>
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
                            .configValue="${"highlight_current_view"}"
                            @change=${this._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Highlight current hash / view</label> 
                        </div>
                    </ha-formfield>
                    ${this.makeVersion()}
                </div>
            `}return"cover"===this._config.card_type?C`
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
            `:"empty-column"===this._config.card_type?C`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <h3>Empty column</h3>
                    <ha-alert alert-type="info">Just an empty card to fill any empty column.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `:this._config.card_type?void 0:C`
                <div class="card-config">
                    ${this.makeDropdown("Card type","card_type",o)}
                    <ha-alert alert-type="info">You need to add a card type first.</ha-alert>
                    <img style="width: 100%" src="https://user-images.githubusercontent.com/36499953/268039672-6dd13476-42c5-427c-a4d8-ad4981fc2db7.gif">
                    <p>The <b>Bubble Card ${e}</b> changelog is available <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${e}"><b>here</b></a>.
                    <br/><br/><ha-alert alert-type="info"><b>Column fix</b>: If you experience some issues with your dashboard layout, such as empty columns or misaligned cards. You can apply a fix that restores the behavior of the previous versions by adding <code>column_fix: true</code> in YAML to the <b>first</b> Bubble Card on your dashboard. Then refresh the page.</ha-alert>
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
            `}makeDropdown(e,t,n){return this.hass,e.includes("icon")||e.includes("Icon")?C`
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
            `:C`
            <div>
                <ha-combo-box
                    label="${e}"
                    .value="${this["_"+t]}"
                    .configValue="${t}"
                    .items="${n}"
                    @value-changed="${this._valueChanged}"
                ></ha-combo-box>
            </div>
          `}makeButton(){let e=[];for(let t=1;t<=this.buttonIndex;t++)e.push(C`
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
            `);return e}makeVersion(){return C`
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
                    ${e}
                </span>
            </h4>
        `}removeButton(e){delete this._config[e+"_name"],delete this._config[e+"_icon"],delete this._config[e+"_link"],delete this._config[e+"_entity"],delete this._config[e+"_pir_sensor"];for(let t=e;t<this.buttonIndex;t++)this._config[t+"_name"]=this._config[t+1+"_name"],this._config[t+"_icon"]=this._config[t+1+"_icon"],this._config[t+"_link"]=this._config[t+1+"_link"],this._config[t+"_entity"]=this._config[t+1+"_entity"],this._config[t+"_pir_sensor"]=this._config[t+1+"_pir_sensor"];delete this._config[this.buttonIndex+"_name"],delete this._config[this.buttonIndex+"_icon"],delete this._config[this.buttonIndex+"_link"],delete this._config[this.buttonIndex+"_entity"],delete this._config[this.buttonIndex+"_pir_sensor"],this.buttonIndex--,i(this,"config-changed",{config:this._config})}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target,n=e.detail;let o,a="string"==typeof t.value?t.value.replace(",","."):t.value;("string"!=typeof a||!a.endsWith(".")&&"-"!==a)&&(t.configValue&&("ha-switch"===t.type?o=t.checked:(""!==a&&(!isNaN(parseFloat(a))&&isFinite(a)?(o=parseFloat(a),isNaN(o)&&(o=void 0)):o=a),o=void 0!==o?o:void 0===t.checked&&n.value?t.checked||n.value:t.value||t.checked),this._config[t.configValue]!==o&&(this._config={...this._config,[t.configValue]:o},i(this,"config-changed",{config:this._config}))),"HA-COMBO-BOX"===t.tagName&&n.value&&(this._config={...this._config,[t.configValue]:n.value},i(this,"config-changed",{config:this._config})))}static get styles(){return $`
          div {
            display: grid;
            grid-gap: 12px;
          }
          #add-button {
            margin-top: 12px;
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
        `}}),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch."}),console.info(`%c Bubble Card %c ${e} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})()})();
var version = 'v1.5.3';

let editor;
let entityStates = {};
let stateChanged = true;
let lastCall = { entityId: null, stateChanged: null, timestamp: null };

class BubblePopUp extends HTMLElement {
    constructor() {
        super();
        if (!window.eventAdded) {
            // 'urlChanged' custom event
            const pushState = history.pushState;
            window.popUpInitialized = false;
            
            history.pushState = function () {
                pushState.apply(history, arguments);
                window.dispatchEvent(new Event('pushstate'));
            };
    
            const replaceState = history.replaceState;
            history.replaceState = function () {
                replaceState.apply(history, arguments);
                window.dispatchEvent(new Event('replacestate'));
            };
    
            ['pushstate', 'replacestate', 'click', 'popstate', 'mousedown', 'touchstart'].forEach((eventType) => {
                window.addEventListener(eventType, urlChanged);
            }, { passive: true });
    
            const event = new Event('urlChanged');
    
            function urlChanged() {
                const newUrl = window.location.href;
                if (newUrl !== this.currentUrl) {
                    window.dispatchEvent(event);
                    this.currentUrl = newUrl;
                }
            }
            
            // Check url when pop-ups are initialized
            const popUpInitialized = () => {
                window.dispatchEvent(event);
                window.addEventListener('popstate', urlChanged, { passive: true });
            };
            
            window.addEventListener('popUpInitialized', popUpInitialized, { passive: true });
            
            window.eventAdded = true;
        }
    }

    set hass(hass) {
        // Initialize the content if it's not there yet.
        if (!this.content) {
            this.attachShadow({
                mode: 'open'
            });
            this.shadowRoot.innerHTML = `
                <ha-card style="background: none; border: none; box-shadow: none;">
                    <div class="card-content" style="padding: 0;">
                    </div>
                </ha-card>
            `;
            this.card = this.shadowRoot.querySelector("ha-card");
            this.content = this.shadowRoot.querySelector("div");

            const editorElementPromise = new Promise((resolve) => {
                resolve(document.querySelector("body > home-assistant")
                  .shadowRoot.querySelector("home-assistant-main")
                  .shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace")
                  .shadowRoot.querySelector("hui-root")
                  .shadowRoot.querySelector("div"));
            });
    
            editorElementPromise.then((editorElement) => {
                this.editorElement = editorElement;
            });
        }
        
        let customStyles = !this.config.styles ? '' : this.config.styles;
        let entityId = this.config.entity && hass.states[this.config.entity] ? this.config.entity : ''; //&& hass.states[this.config.entity]
        let icon = !this.config.icon && this.config.entity ? hass.states[entityId].attributes.icon || hass.states[entityId].attributes.entity_picture || '' : this.config.icon || '';
        let name = this.config.name ? this.config.name : this.config.entity ? hass.states[entityId].attributes.friendly_name : '';
        let widthDesktop = this.config.width_desktop || '540px';
        let widthDesktopDivided = widthDesktop ? widthDesktop.match(/(\d+)(\D+)/) : '';
        let shadowOpacity = this.config.shadow_opacity !== undefined ? this.config.shadow_opacity : '0';
        let bgBlur = this.config.bg_blur !== undefined ? this.config.bg_blur : '10';
        let isSidebarHidden = this.config.is_sidebar_hidden || false;
        let state = entityId ? hass.states[entityId].state : '';
        let stateOn = ['on', 'open', 'cleaning', 'true', 'home', 'playing'].includes(state) || (Number(state) !== 0 && !isNaN(Number(state)));
        let formatedState;
        let autoClose = this.config.auto_close || false;
        let riseAnimation = this.config.rise_animation !== undefined ? this.config.rise_animation : true;
        let marginCenter = this.config.margin 
            ? (this.config.margin !== '0' ? this.config.margin : '0px')
            : '7px';
        let popUpHash = this.config.hash;
        let popUpOpen;
        let startTouchY;
        let lastTouchY;
        let triggerEntity = this.config.trigger_entity ? this.config.trigger_entity : '';
        let triggerState = this.config.trigger_state ? this.config.trigger_state : '';
        let triggerClose = this.config.trigger_close ? this.config.trigger_close : false;
        let stateEntity = this.config.state;
    
        // Check for edit mode
        this.editorElement ? editor = this.editorElement.classList.contains('edit-mode') : false;

        function toggleEntity(entityId) {
            hass.callService('homeassistant', 'toggle', {
                entity_id: entityId
            });
        }

        const addStyles = function(context, styles, customStyles, state, entityId, stateChangedVar, path = '', element = context.content) {
            const customStylesEval = customStyles ? eval('`' + customStyles + '`') : '';
            let styleAddedKey = styles + 'Added'; // Add 'Added' at the end of the styles value
        
            // Check if the style has changed
            if (!context[styleAddedKey] || context.previousStyle !== customStylesEval || stateChangedVar || context.previousConfig !== context.config) {
                if (!context[styleAddedKey]) {
                    // Check if the style element already exists
                    if (editor && !element) {
                        return;
                    }
                    context.styleElement = element.querySelector('style'); //context.content
                    if (!context.styleElement) {
                        // If not, create a new style element
                        context.styleElement = document.createElement('style');
                        const parentElement = (path ? element.querySelector(path) : element);
                        parentElement?.appendChild(context.styleElement);
                    }
                    context[styleAddedKey] = true;
                }
                
                // Update the content of the existing style element only if styles have changed
                if (context.styleElement.innerHTML !== customStylesEval + styles) {
                    context.styleElement.innerHTML = customStylesEval + styles;
                }
                
                context.previousStyle = customStylesEval; // Store the current style
                context.previousConfig = context.config; // Store the current config
            }      
        }

        const forwardHaptic = hapticType => {
          fireEvent(window, "haptic", hapticType)
        }
        
        const navigate = (_node, path, replace = false) => {
          if (replace) {
            history.replaceState(null, "", path)
          } else {
            history.pushState(null, "", path)
          }
          fireEvent(window, "location-changed", {
            replace
          })
        }
        
        // Tap actions inspired from https://github.com/custom-cards/custom-card-helpers

        const handleActionConfig = (node, hass, config, actionConfig) => {
          if (
            actionConfig.confirmation &&
            (!actionConfig.confirmation.exemptions ||
              !actionConfig.confirmation.exemptions.some(e => e.user === hass.user.id))
          ) {
            forwardHaptic("warning")
        
            if (
              !confirm(
                actionConfig.confirmation.text ||
                  `Are you sure you want to ${actionConfig.action}?`
              )
            ) {
              return
            }
          }
        
          switch (actionConfig.action) {
            case "more-info":
              if (this.config.entity || this.config.camera_image) {
                fireEvent(node, "hass-more-info", {
                  entityId: this.config.entity ? this.config.entity : this.config.camera_image
                })
              }
              break
            case "navigate":
              if (actionConfig.navigation_path) {
                navigate(node, actionConfig.navigation_path)
              }
              break
            case "url":
              if (actionConfig.url_path) {
                window.open(actionConfig.url_path)
              }
              break
            case "toggle":
              if (this.config.entity) {
                toggleEntity(this.config.entity)
                forwardHaptic("success")
              }
              break
            case "call-service": {
              if (!actionConfig.service) {
                forwardHaptic("failure")
                return
              }
              const [domain, service] = actionConfig.service.split(".", 2)
              hass.callService(
                domain,
                service,
                actionConfig.service_data,
                actionConfig.target
              )
              forwardHaptic("success")
              break
            }
            case "fire-dom-event": {
              fireEvent(node, "ll-custom", actionConfig)
            }
          }
        }
        
        const handleAction = (node, hass, config, action) => {
          let actionConfig
        
          if (action === "double_tap" && this.config.double_tap_action) {
            actionConfig = this.config.double_tap_action
          } else if (action === "hold" && this.config.hold_action) {
            actionConfig = this.config.hold_action
          } else if (action === "tap" && this.config.tap_action) {
            actionConfig = this.config.tap_action
          } else if (action === "double_tap" && !this.config.double_tap_action) {
            actionConfig = {
              action: "toggle"
            }
          } else if (action === "hold" && !this.config.hold_action) {
            actionConfig = {
              action: "more-info"
            }
          } else if (action === "tap" && !this.config.tap_action) {
            actionConfig = {
              action: "more-info"
            }
          }
        
          handleActionConfig(node, hass, config, actionConfig)
        }
        
        const addAction = (function() {
            let clickTimeout;
            let lastClickTime;
        
            return function(eventType, actionType, element, self) {
                element.addEventListener(eventType, () => { 
                    const currentTime = new Date().getTime();
                    const timeDiff = currentTime - (lastClickTime || 0);
        
                    if (eventType === 'click') {
                        if (timeDiff < 250) { // Double click detected
                            clearTimeout(clickTimeout);
                            handleAction(self, hass, {}, 'double_tap');
                        } else { // Single click detected
                            clickTimeout = setTimeout(() => {
                                handleAction(self, hass, {}, 'tap');
                            }, 250);
                        }
                    } else {
                        handleAction(self, hass, {},'hold');
                    }
        
                    lastClickTime = currentTime;
                }, { passive: true });
            };
        })();
        
        function addActions(self, element) {
            addAction('click', 'tap', element, self);
            addAction('contextmenu', 'hold', element, self);
        }
        
        if (entityId) {
            const entityAttributes = !hass.states[entityId].attributes ? false : hass.states[entityId].attributes;
            this.newPictureUrl = !entityAttributes.entity_picture ? false : entityAttributes.entity_picture;
        }

        function createIcon(context, hass, entityId, icon, iconContainer) {
            updateIcon(context, hass, entityId, icon, iconContainer);
        }

        function updateIcon(context, hass, entityId, icon, iconContainer) {
            while (iconContainer.firstChild) {
                iconContainer.removeChild(iconContainer.firstChild);
            }

            if (context.newPictureUrl && !context.config.icon) {
                const img = document.createElement("img");
                img.setAttribute("src", context.newPictureUrl);
                img.setAttribute("class", "entity-picture");
                img.setAttribute("alt", "Icon");
                if (iconContainer) {
                    iconContainer.appendChild(img);
                }
            } else {
                const haIcon = document.createElement("ha-icon");
                haIcon.setAttribute("icon", icon);
                haIcon.setAttribute("class", "icon");
                if (iconContainer) {
                    iconContainer.appendChild(haIcon);
                }
            }
        }

        function isColorCloseToWhite(rgbColor) {
            let whiteThreshold = [220, 220, 190];
            for(let i = 0; i < 3; i++) {
                if(rgbColor[i] < whiteThreshold[i]) {
                    return false;
                }
            }
            return true;
        }

        // Get CSS variable value or YAML variable and add opacity
        let haStyle;
        let themeBgColor;
        haStyle = haStyle || getComputedStyle(document.body);
        themeBgColor = themeBgColor || haStyle.getPropertyValue('--ha-card-background') || haStyle.getPropertyValue('--card-background-color');
        let color = this.config.bg_color ? this.config.bg_color : themeBgColor;
        let bgOpacity = this.config.bg_opacity !== undefined ? this.config.bg_opacity : '88';
        
        function convertToRGBA(color, opacity) {
            let rgbaColor = '';
            if (color.startsWith('#')) {
                let r = parseInt(color.slice(1, 3), 16),
                    g = parseInt(color.slice(3, 5), 16),
                    b = parseInt(color.slice(5, 7), 16);
                rgbaColor = "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
            } else if (color.startsWith('rgb')) {
                let rgbValues = color.match(/\d+/g);
                rgbaColor = "rgba(" + rgbValues[0] + ", " + rgbValues[1] + ", " + rgbValues[2] + ", " + opacity + ")";
            }
            return rgbaColor;
        }
        
        let rgbaColor;
        if (!rgbaColor || editor) {
            rgbaColor = convertToRGBA(color, (bgOpacity / 100));
            window.color = color;
        }
        
        let oldState;
        let currentState = entityId && stateEntity 
            ? hass.states[entityId].state + hass.states[stateEntity].state
            : entityId
                ? hass.states[entityId].state
                : stateEntity
                    ? hass.states[stateEntity].state
                    : '';
        
        if (currentState !== oldState) {
            oldState = currentState;
            stateChanged = true
            
            setTimeout(() => {
                stateChanged = false
            }, 0);
        }

        if (this.errorTriggered) {
            return;
        }
        
        if (!this.initStyleAdded && !this.host && !editor) {
            // Hide vertical stack content before initialization
            this.card.style.marginTop = '4000px';
            this.initStyleAdded = true;
        }

        const createPopUp = () => {
            if (!this.host) {
                this.host = this.getRootNode().host;
            } else {
                if (!this.popUp) {
                    this.verticalStack = this.getRootNode();
                    this.popUp = this.verticalStack.querySelector('#root');
                    
                    // Remove vertical stack content from the DOM
                    if (this.verticalStack.contains(this.popUp)) {
                        this.verticalStack.removeChild(this.popUp);
                    }
                    
                    if (!window.popUpInitialized && this.popUp) {
                        const backOpen = this.config.back_open || false;
                        backOpen ? localStorage.setItem('backOpen', true) : localStorage.setItem('backOpen', false);
                        const backOpenState = localStorage.getItem('backOpen') === 'true';

                        if (backOpenState) {
                            window.backOpen = true;
                            const event = new Event('popUpInitialized');
                            setTimeout(() => {
                                window.dispatchEvent(event);
                            }, 100);
                        } else {
                            window.backOpen = false;
                            popUpOpen = popUpHash + false;
                            history.replaceState(null, null, location.href.split('#')[0]);
                        }
                        
                        window.popUpInitialized = true;
                    }
                }
                
                const popUp = this.popUp;
                const verticalStack = this.verticalStack;
                const text = this.config.text || '';
                const stateEntityId = this.config.state;
                formatedState = stateEntityId ? hass.formatEntityState(hass.states[stateEntityId]) + ' ' + text : text;
                const marginTopMobile = this.config.margin_top_mobile 
                    ? (this.config.margin_top_mobile !== '0' ? this.config.margin_top_mobile : '0px')
                    : '0px';
                const marginTopDesktop = this.config.margin_top_desktop 
                    ? (this.config.margin_top_desktop !== '0' ? this.config.margin_top_desktop : '0px')
                    : '0px';
                const displayPowerButton = this.config.entity ? 'flex' : 'none';
                state = stateEntityId ? hass.states[stateEntityId].state : '';
                let closeTimeout;
                let rgbaBgColor;

                if (!this.headerAdded) {
                    const headerContainer = document.createElement("div");
                    headerContainer.setAttribute("id", "header-container");
                
                    const div = document.createElement("div");
                    headerContainer.appendChild(div);
                
                    const iconContainer = document.createElement("div");
                    iconContainer.setAttribute("class", "header-icon");
                    div.appendChild(iconContainer);

                    createIcon(this, hass, entityId, icon, iconContainer);
                    addActions(this, iconContainer);
    
                    const h2 = document.createElement("h2");
                    h2.textContent = name;
                    div.appendChild(h2);
    
                    const p = document.createElement("p");
                    p.textContent = formatedState;
                    div.appendChild(p);
    
                    const haIcon2 = document.createElement("ha-icon");
                    haIcon2.setAttribute("class", "power-button");
                    haIcon2.setAttribute("icon", "mdi:power");
                    haIcon2.setAttribute("style", `display: ${displayPowerButton};`);
                    div.appendChild(haIcon2);
    
                    const button = document.createElement("button");
                    button.setAttribute("class", "close-pop-up");
                    button.onclick = function() { history.replaceState(null, null, location.href.split('#')[0]); localStorage.setItem('isManuallyClosed_' + popUpHash, true); }; 
                    headerContainer.appendChild(button);
    
                    const haIcon3 = document.createElement("ha-icon");
                    haIcon3.setAttribute("icon", "mdi:close");
                    button.appendChild(haIcon3);
    
                    this.content.appendChild(headerContainer);
                    this.header = div;
    
                    this.headerAdded = true;
                } else if (entityId) {
                    const iconContainer = this.content.querySelector("#header-container .header-icon");
                    const h2 = this.content.querySelector("#header-container h2");
                    const p = this.content.querySelector("#header-container p");
                    const haIcon2 = this.content.querySelector("#header-container .power-button");
                    
                    iconContainer.innerHTML = ''; // Clear the container
                    createIcon(this, hass, entityId, icon, iconContainer);
    
                    h2.textContent = name;
                    p.textContent = formatedState;
                    haIcon2.setAttribute("style", `display: ${displayPowerButton};`);
                }
                
                if (!this.eventAdded && !editor) {
                    window['checkHashRef_' + popUpHash] = checkHash;
                    window.addEventListener('urlChanged', window['checkHashRef_' + popUpHash], { passive: true });
                    window.addEventListener('click', function(e) {
                        // Reset auto close
                        location.hash === popUpHash && resetAutoClose();
                        
                        if (!window.justOpened) {
                            return;
                        }
                        
                        const target = e.composedPath();
                        
                        if (target && 
                            !target.some(el => el.nodeName === 'HA-MORE-INFO-DIALOG') && 
                            !target.some(el => el.id === 'root' && !el.classList.contains('close-pop-up')) &&
                            popUpOpen === popUpHash + true) {
                                popUpOpen = popUpHash + false;
                                history.replaceState(null, null, location.href.split('#')[0]);
                                localStorage.setItem('isManuallyClosed_' + popUpHash, true)
                        }
                    }, { passive: true });
    
                    this.eventAdded = true;
                }
        
                function urlChangedHandler() {
                  window['checkHashRef_' + popUpHash];
                }
                
                function powerButtonClickHandler() {
                    toggleEntity(entityId);
                }
                
                function windowClickHandler(e) {
                    // Reset auto close
                    if (window.hash === popUpHash) {
                        resetAutoClose();
                    }
                
                    if (!window.justOpened) {
                        return;
                    }
                
                    const target = e.composedPath();
                
                    if (target && 
                        !target.some(el => el.nodeName === 'HA-MORE-INFO-DIALOG') && 
                        !target.some(el => el.id === 'root' && !el.classList.contains('close-pop-up')) &&
                        popUpOpen === popUpHash + true) {
                            popUpOpen = popUpHash + false;
                            history.replaceState(null, null, location.href.split('#')[0]);
                            localStorage.setItem('isManuallyClosed_' + popUpHash, true)
                    }
                }
                
                function windowKeydownHandler(e) {
                    if (e.key === 'Escape') {
                        popUpOpen = popUpHash + false;
                        history.replaceState(null, null, location.href.split('#')[0]);
                        localStorage.setItem('isManuallyClosed_' + popUpHash, true)
                    }
                }
                
                function popUpTouchstartHandler(event) {
                    // Reset auto close
                    if (window.hash === popUpHash) {
                        resetAutoClose();
                    }
                
                    // Record the Y position of the finger at the start of the touch
                    startTouchY = event.touches[0].clientY;
                    lastTouchY = startTouchY;
                }
                
                function popUpTouchmoveHandler(event) {
                    // Calculate the distance the finger has traveled
                    let touchMoveDistance = event.touches[0].clientY - startTouchY;
                
                    // If the distance is positive (i.e., the finger is moving downward) and exceeds a certain threshold, close the pop-up
                    if (touchMoveDistance > 300 && event.touches[0].clientY > lastTouchY) {
                        popUpOpen = popUpHash + false;
                        history.replaceState(null, null, location.href.split('#')[0]);
                        popUpOpen = popUpHash + false;
                        localStorage.setItem('isManuallyClosed_' + popUpHash, true)
                    }
                    
                    // Update the Y position of the last touch
                    lastTouchY = event.touches[0].clientY;
                }
                
                if (entityId) {
                    const rgbColor = hass.states[entityId].attributes.rgb_color;
                    this.rgbColor = rgbColor 
                        ? (!isColorCloseToWhite(rgbColor) ? `rgb(${rgbColor})` : 'rgb(255,220,200)')
                        : (stateOn 
                        ? (entityId.startsWith("light.") ? 'rgba(255,220,200, 0.5)' : 'var(--accent-color)') 
                        : 'rgba(255, 255, 255, 1');
                    this.rgbColorOpacity = rgbColor
                        ? (!isColorCloseToWhite(rgbColor) ? `rgba(${rgbColor}, 0.5)` : 'rgba(255,220,200, 0.5)')
                        : (entityId && stateOn 
                            ? (entityId.startsWith("light.") ? 'rgba(255,220,200, 0.5)' : 'var(--accent-color)') 
                            : 'var(--background-color,var(--secondary-background-color))');
                    rgbaBgColor = convertToRGBA(color, 0);
                    this.iconFilter = rgbColor ? 
                        (!isColorCloseToWhite(rgbColor) ? 'brightness(1.1)' : 'none') :
                        'none';
                }
                
                function checkHash() {
                    if (!editor) {
                        window.hash = location.hash.split('?')[0];

                        // Open on hash change
                        if (window.hash === popUpHash) {
                            openPopUp();
                        // Close on back button from browser
                        } else if (popUp.classList.contains('open-pop-up')) {
                            closePopUp();
                        }
                    }
                };
                
                let content = this.content;
                
                function openPopUp() {
                    if (popUp) {
                        verticalStack.appendChild(popUp);
                    }
                    setTimeout(function() {
                        popUp.classList.remove('close-pop-up');
                        popUp.classList.add('open-pop-up');
                        content.querySelector('.power-button').addEventListener('click', powerButtonClickHandler, { passive: true });
                        window.addEventListener('keydown', windowKeydownHandler, { passive: true });
                        popUp.addEventListener('touchstart', popUpTouchstartHandler, { passive: true });
                        popUp.addEventListener('touchmove', popUpTouchmoveHandler, { passive: true });
                        popUpOpen = popUpHash + true;
                        setTimeout(() => { window.justOpened = true; }, 10);
                        resetAutoClose();
                    }, 0);
                }
                
                function closePopUp() {
                    popUp.classList.remove('open-pop-up');
                    popUp.classList.add('close-pop-up');
                    content.querySelector('.power-button').removeEventListener('click', powerButtonClickHandler);
                    window.removeEventListener('keydown', windowKeydownHandler);
                    popUp.removeEventListener('touchstart', popUpTouchstartHandler);
                    popUp.removeEventListener('touchmove', popUpTouchmoveHandler);
                    popUpOpen = popUpHash + false;
                    window.justOpened = false;
                    clearTimeout(closeTimeout);
                    
                    setTimeout(function() {
                        if (verticalStack.contains(popUp)) {
                            verticalStack.removeChild(popUp);
                        }
                    }, 320);
                }
                
                function resetAutoClose() {
                    // Clear any existing timeout
                    clearTimeout(closeTimeout);
                    // Start autoclose if enabled
                    if(autoClose > 0) {
                        closeTimeout = setTimeout(autoClosePopUp, autoClose);
                    }
                }
    
                function autoClosePopUp(){
                    history.replaceState(null, null, location.href.split('#')[0]);
                }
                
                const popUpStyles = `
                    ha-card {
                        margin-top: 0 !important;
                        background: none !important;
                        border: none !important;
                    }
                    .card-content {
                        width: 100% !important;
                        padding: 0 !important;
                    }
                    #root {
                        transition: all 1s !important;
                        position: fixed !important;
                        margin: 0 -${marginCenter}; /* 7px */
                        width: 100%;
                        background-color: ${rgbaColor};
                        box-shadow: 0px 0px 50px rgba(0,0,0,${shadowOpacity / 100});
                        backdrop-filter: blur(${bgBlur}px);
                        -webkit-backdrop-filter: blur(${bgBlur}px);
                        border-radius: 42px;
                        box-sizing: border-box;
                        top: calc(120% + ${marginTopMobile} + var(--header-height));
                        grid-gap: 12px !important;
                        gap: 12px !important;
                        grid-auto-rows: min-content;
                        padding: 18px 18px 220px 18px !important;
                        height: 100% !important;
                        -ms-overflow-style: none; /* for Internet Explorer, Edge */
                        scrollbar-width: none; /* for Firefox */
                        overflow-y: auto; 
                        overflow-x: hidden; 
                        z-index: 1 !important; /* Higher value hide the more-info panel */
                        /* For older Safari but not working with Firefox */
                        /* display: grid !important; */  
                    }
                    #root > bubble-pop-up:first-child::after {
                        content: '';
                        display: block;
                        position: sticky;
                        top: 0;
                        left: -50px;
                        margin: -70px 0 -36px -36px;
                        overflow: visible;
                        width: 200%;
                        height: 100px;
                        background: linear-gradient(0deg, ${rgbaBgColor} 0%, ${rgbaColor} 80%);
                        z-index: 0;
                    } 
                    #root::-webkit-scrollbar {
                        display: none; /* for Chrome, Safari, and Opera */
                    }
                    #root > bubble-pop-up:first-child {
                        position: sticky;
                        top: 0;
                        z-index: 1;
                        background: none !important;
                        overflow: visible;
                    }
                    #root.open-pop-up {
                        /*will-change: transform;*/
                        transform: translateY(-120%);
                        transition: transform .4s !important;
                    }
                    #root.open-pop-up > * {
                      /* Block child items to overflow and if they do clip them */
                      /*max-width: calc(100vw - 38px);*/
                      max-width: 100% !important;
                      overflow-x: clip;
                    }
                    #root.close-pop-up { 
                        transform: translateY(-20%);
                        transition: transform .4s !important;
                        box-shadow: none;
                    }
                    @media only screen and (min-width: 768px) {
                        #root {
                            top: calc(120% + ${marginTopDesktop} + var(--header-height));
                            width: calc(${widthDesktop}${widthDesktopDivided[2] === '%' && !isSidebarHidden ? ' - var(--mdc-drawer-width)' : ''}) !important;
                            left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]});
                            margin: 0 !important;
                        }
                    }  
                    @media only screen and (min-width: 870px) {
                        #root {
                            left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]} + ${isSidebarHidden ? '0px' : `var(--mdc-drawer-width) ${widthDesktopDivided[2] === '%' ? '' : '/ 2'}`});
                        }
                    }  
                    #root.editor {
                        position: inherit !important;
                        width: 100% !important;
                        padding: 18px !important;
                    }
                `;
                
                const headerStyles = `
                    ha-card {
                        margin-top: 0 !important;
                    }
                    #header-container {
                        display: inline-flex;
                        ${!icon && !name && !entityId && !state && !text ? 'flex-direction: row-reverse;' : ''}
                        width: 100%;
                        margin: 0;
                        padding: 0;
                    }
                    #header-container > div {
                        display: ${!icon && !name && !entityId && !state && !text ? 'none' : 'inline-flex'};
                        align-items: center;
                        position: relative;
                        padding: 6px;
                        z-index: 1;
                        flex-grow: 1;
                        background-color: ${entityId ? this.rgbColorOpacity : 'var(--background-color,var(--secondary-background-color))'};
                        transition: background 1s;
                        border-radius: 25px;
                        margin-right: 14px;
                        backdrop-filter: blur(14px);
                        -webkit-backdrop-filter: blur(14px);
                    }
                    .header-icon {
                        display: inline-flex;
                        min-width: 38px;
                        min-height: 38px;
                        background-color: var(--card-background-color,var(--ha-card-background));
                        border-radius: 100%;
                        margin: 0 10px 0 0;
                        cursor: ${!this.config.entity && !this.config.double_tap_action && !this.config.tap_action && !this.config.hold_action ? 'default' : 'pointer'}; 
                        flex-wrap: wrap;
                        align-content: center;
                        justify-content: center;
                        overflow: hidden;
                    }
                    .header-icon > ha-icon {
                        color: ${stateOn ? (this.rgbColor ? this.rgbColor : 'var(--accent-color)') : 'inherit'};
                        opacity: ${stateOn ? '1' : '0.6'};
                        filter: ${this.iconFilter};
                    }
                    .header-icon::after {
                        content: '';
                        position: absolute;
                        width: 38px;
                        height: 38px;
                        display: block;
                        opacity: 0.2;
                        transition: background-color 1s;
                        border-radius: 50%;
                        background-color: ${stateOn ? (this.rgbColor ? this.rgbColor : 'var(--accent-color)') : 'var(--card-background-color,var(--ha-card-background))'};
                    }
                    .entity-picture {
                        height: calc(100% + 16px);
                        width: calc(100% + 16px);
                    }
                    #header-container h2 {
                        display: inline-flex;
                        margin: 0 18px 0 0;
                        /*line-height: 0px;*/
                        z-index: 1;
                        font-size: 20px;
                    }
                    #header-container p {
                        display: inline-flex;
                        line-height: 0px;
                        font-size: 16px;
                        min-width: fit-content ;
                    }
                    .power-button {
                        cursor: pointer; 
                        flex-grow: inherit; 
                        width: 24px;
                        height: 24px;
                        border-radius: 12px;
                        margin: 0 10px;
                        background: none !important;
                        justify-content: flex-end;
                        background-color: var(--background-color,var(--secondary-background-color));
                    }
                    .close-pop-up {
                        height: 50px;
                        width: 50px;
                        border: none;
                        border-radius: 50%;
                        z-index: 1;
                        background: var(--background-color,var(--secondary-background-color));
                        color: var(--primary-text-color);
                        flex-shrink: 0;
                        cursor: pointer;
                    }
                `;
                                        
                addStyles(this, popUpStyles, customStyles, state, entityId, '', '', popUp);
                addStyles(this, headerStyles, customStyles, state, entityId, stateChanged);
                
                if (editor && !this.editorModeAdded) {
                    if (!popUp) {
                        return;
                    }
                    verticalStack.appendChild(popUp);
                    popUp.classList.add('editor');
                    popUp.classList.remove('open-pop-up');
                    popUp.classList.remove('close-pop-up');
                    this.editorModeAdded = true;
                } else if (!editor && this.editorModeAdded) {
                    popUp.classList.remove('editor');
                    if (verticalStack.contains(popUp)) {
                        verticalStack.removeChild(popUp);
                    }
                    this.editorModeAdded = false;
                }
            }
        }

        // Initialize pop-up card
        
        if (!this.popUpAdded) {
            this.popUpAdded = true;
            let initPopUp = setInterval(() => {
                createPopUp();
                if (this.popUp) {
                    clearInterval(initPopUp);
                }
            }, 100);
        
            setTimeout(() => {
                if (!this.popUp) {
                    this.errorTriggered = true;
                    clearInterval(initPopUp);
                    throw new Error("Pop-up card must be placed inside a vertical_stack! If it's already the case, please ignore this error 🍻");
                }
            }, 6000);
        } else if (!editor && this.wasEditing && stateChanged) {
            createPopUp();
            this.wasEditing = false;
        } else if ((popUpHash === window.hash && stateChanged) || (editor && !this.editorModeAdded)) {
            createPopUp();
            if (editor) { 
                this.wasEditing = true;
            }
        }

        if (this.popUp && triggerEntity && stateChanged) {
            if (localStorage.getItem('previousTriggerState_' + popUpHash) === null) {
                localStorage.setItem('previousTriggerState_' + popUpHash, '');
            }
            if (localStorage.getItem('isManuallyClosed_' + popUpHash) === null) {
                localStorage.setItem('isManuallyClosed_' + popUpHash, 'false');
            }
            if (localStorage.getItem('isTriggered_' + popUpHash) === null) {
                localStorage.setItem('isTriggered_' + popUpHash, 'false');
            }                        

            let previousTriggerState = localStorage.getItem('previousTriggerState_' + popUpHash);
            let isManuallyClosed = localStorage.getItem('isManuallyClosed_' + popUpHash) === 'true';
            let isTriggered = localStorage.getItem('isTriggered_' + popUpHash) === 'true';
        
            if (hass.states[triggerEntity].state === triggerState && previousTriggerState === null && !isTriggered) {
                navigate('', popUpHash);
                isTriggered = true;
                localStorage.setItem('isTriggered_' + popUpHash, isTriggered);
            }
        
            if (hass.states[triggerEntity].state !== previousTriggerState) {
                isManuallyClosed = false;
                localStorage.setItem('previousTriggerState_' + popUpHash, hass.states[triggerEntity].state);
                localStorage.setItem('isManuallyClosed_' + popUpHash, isManuallyClosed);
            }
            
            if (hass.states[triggerEntity].state === triggerState && !isManuallyClosed) {
                navigate('', popUpHash);
                isTriggered = true;
                localStorage.setItem('isTriggered_' + popUpHash, isTriggered);
            } else if (hass.states[triggerEntity].state !== triggerState && triggerClose && this.popUp.classList.contains('open-pop-up') && isTriggered && !isManuallyClosed) {
                history.replaceState(null, null, location.href.split('#')[0]);
                popUpOpen = popUpHash + false;
                isTriggered = false;
                isManuallyClosed = true;
                localStorage.setItem('isManuallyClosed_' + popUpHash, isManuallyClosed);
                localStorage.setItem('isTriggered_' + popUpHash, isTriggered);
            }
        }
    }

    setConfig(config) {
        if (config.card_type === 'pop-up') {
            if (!config.hash) {
                throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.");
            }
        }
        this.config = config;
    }

    getCardSize() {
        return 0;
    }

    static getConfigElement() {
        return document.createElement("bubble-pop-up-editor");
    }
}

let checkElementInterval = setInterval(function() {
    customElements.define("bubble-pop-up", BubblePopUp);

    if (customElements.get("bubble-pop-up")) {
        clearInterval(checkElementInterval);
    }
}, 50);

console.info(
    `%c Bubble Card - Pop-up %c ${version} `,
    'background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
    'background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)'
);

// Editor GUI ///////////////////////////////////////////////////////////////////////////////////

const fireEvent = (node, type, detail, options) => {
    options = options || {};
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed,
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};

customElements.get("ha-switch");

const waitForElement = async () => {
    while (!customElements.get("ha-panel-lovelace")) {
        await new Promise(resolve => setTimeout(resolve, 300));
    }
    const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
    const html = LitElement.prototype.html;
    const css = LitElement.prototype.css;
        
    class BubblePopUpEditor extends LitElement {
        setConfig(config) {
            this._config = {
                ...config
            };
        }
    
        static get properties() {
            return {
                hass: {},
                _config: {}
            };
        }
    
        get _entity() {
            return this._config.entity || '';
        }
    
        get _name() {
            return this._config.name || '';
        }
    
        get _icon() {
            return this._config.icon || '';
        }
    
        get _state() {
            return this._config.state || '';
        }
    
        get _text() {
            return this._config.text || '';
        }
    
        get _hash() {
            return this._config.hash || '#pop-up-name';
        }
        
        get _trigger_entity() {
            return this._config.trigger_entity || '';
        }
        
        get _trigger_state() {
            return this._config.trigger_state || '';
        }
        
        get _trigger_close() {
            return this._config.trigger_close || false;
        }
        
        get _margin() {
            return this._config.margin || '7px';
        }
    
        get _margin_top_mobile() {
            return this._config.margin_top_mobile || '0px';
        }
    
        get _margin_top_desktop() {
            return this._config.margin_top_desktop || '0px';
        }
    
        get _width_desktop() {
            return this._config.width_desktop || '540px';
        }
        
        get _bg_color() {
            return this._config.bg_color ||  window.color;
        }
        
        get _bg_opacity() {
            return this._config.bg_opacity !== undefined ? this._config.bg_opacity : '88';
        }
        
        get _bg_blur() {
            return this._config.bg_blur !== undefined ? this._config.bg_blur : '14';
        }
        
        get _shadow_opacity() {
            return this._config.shadow_opacity !== undefined ? this._config.shadow_opacity : '0';
        }
    
        get _is_sidebar_hidden() {
            return this._config.is_sidebar_hidden || false;
        }
        
        get _auto_close() {
            return this._config.auto_close || '';
        }
        
        get _back_open() {
            return this._config.back_open || false;
        }
    
        render() {
            if (!this.hass) {
                return html``;
            }
    
            if (!this.listsUpdated) {
                const formateList = item => ({
                    label: item,
                    value: item
                });
    
                this.allEntitiesList = Object.keys(this.hass.states).map(formateList);
    
                this.lightList = Object.keys(this.hass.states).filter(
                    (eid) => eid.substr(0, eid.indexOf(".")) === "light"
                ).map(formateList);
    
                this.sensorList = Object.keys(this.hass.states).filter(
                    (eid) => eid.substr(0, eid.indexOf(".")) === "sensor"
                ).map(formateList);
                
                this.binarySensorList = Object.keys(this.hass.states).filter(
                    (eid) => eid.substr(0, eid.indexOf(".")) === "binary_sensor"
                ).map(formateList);
    
                this.coverList = Object.keys(this.hass.states).filter(
                    (eid) => eid.substr(0, eid.indexOf(".")) === "cover"
                ).map(formateList);
    
                this.cardTypeList = [{
                        'label': 'Button',
                        'value': 'button'
                    },
                    {
                        'label': 'Cover',
                        'value': 'cover'
                    },
                    {
                        'label': 'Empty column',
                        'value': 'empty-column'
                    },
                    {
                        'label': 'Horizontal buttons stack',
                        'value': 'horizontal-buttons-stack'
                    },
                    {
                        'label': 'Pop-up',
                        'value': 'pop-up'
                    },
                    {
                        'label': 'Separator',
                        'value': 'separator'
                    }
                ];
    
                this.buttonTypeList = [{
                        'label': 'Switch',
                        'value': 'switch'
                    },
                    {
                        'label': 'Slider',
                        'value': 'slider'
                    }
                ];
    
                this.listsUpdated = true;
            }
    
            const allEntitiesList = this.allEntitiesList;
            const lightList = this.lightList;
            const sensorList = this.sensorList;
            const coverList = this.coverList;
            const cardTypeList = this.cardTypeList;
            const buttonTypeList = this.buttonTypeList;
    
            return html`
                <div class="card-config">
                    <h3>Pop-up 
                        <span style="
                            font-size: 10px !important;
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
                    ${this.makeDropdown("Optional - Icon", "icon")}
                    ${this.makeDropdown("Optional - Entity to toggle (e.g. room light group)", "entity", allEntitiesList)}
                    ${this.makeDropdown("Optional - Entity state to display (e.g. room temperature)", "state", allEntitiesList)}
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
                    ${this.makeDropdown("Optional - Entity to open the pop-up based on its state", "trigger_entity", allEntitiesList)}
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
                            .checked=${this._back_open ? this._back_open : window.backOpen}
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
            `;
        }
    
        makeDropdown(label, configValue, items) {
            const hass = this.hass;
    
            if (label.includes('icon') || label.includes('Icon')) {
                return html`
                    <div>
                        <ha-icon-picker
                            label="${label}"
                            .value="${this['_' + configValue]}"
                            .configValue="${configValue}"
                            item-label-path="label"
                            item-value-path="value"
                            @value-changed="${this._valueChanged}"
                        ></ha-icon-picker>
                    </div>
                `;
            } else {
                return html`
                <div>
                    <ha-combo-box
                        label="${label}"
                        .value="${this['_' + configValue]}"
                        .configValue="${configValue}"
                        .items="${items}"
                        @value-changed="${this._valueChanged}"
                    ></ha-combo-box>
                </div>
              `;
            }
        }
    
        makeButton() {
            let buttons = [];
    
            for (let i = 1; i <= this.buttonIndex; i++) {
                buttons.push(html`
                    <div class="${i}_button">
                        <div class="button-header">
                            <ha-icon class="remove-button" icon="mdi:close" @click=${() => this.removeButton(i)}></ha-icon>
                            <span class="button-number">Button ${i}</span>
                        </div>
                        <ha-textfield
                            label="Link / Hash to pop-up (e.g. #kitchen)"
                            .value="${this._config[i + '_link'] || ''}"
                            .configValue="${i}_link"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Name"
                            .value="${this._config[i + '_name'] || ''}"
                            .configValue="${i}_name"
                            @input="${this._valueChanged}"
                            style="width: 100%;"
                        ></ha-textfield>
                        <ha-icon-picker
                            label="Optional - Icon"
                            .value="${this._config[i + '_icon'] || ''}"
                            .configValue="${i}_icon"
                            item-label-path="label"
                            item-value-path="value"
                            @value-changed="${this._valueChanged}"
                        ></ha-icon-picker>
                        <ha-combo-box
                            label="Optional - Light / Light group (For background color)"
                            .value="${this._config[i + '_entity'] || ''}"
                            .configValue="${i}_entity"
                            .items="${this.allEntitiesList}"
                            @value-changed="${this._valueChanged}"
                        ></ha-combo-box>
                        <ha-combo-box
                            label="Optional - Presence / Occupancy sensor (For button auto order)"
                            .value="${this._config[i + '_pir_sensor'] || ''}"
                            .configValue="${i}_pir_sensor"
                            .disabled=${!this._config.auto_order}
                            .items="${this.binarySensorList}"
                            @value-changed="${this._valueChanged}"
                        ></ha-combo-box>
                    </div>
                `);
            }
            return buttons;
        }
        
        makeVersion() {
            return html`
                <h4 style="
                    font-size: 12px !important;
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
                        ${version}
                    </span>
                </h4>
            `;
        }
    
        removeButton(index) {
            // Removing button fields
            delete this._config[index + '_name'];
            delete this._config[index + '_icon'];
            delete this._config[index + '_link'];
            delete this._config[index + '_entity'];
            delete this._config[index + '_pir_sensor'];
        
            // Updating indexes of following buttons
            for (let i = index; i < this.buttonIndex; i++) {
                this._config[i + '_name'] = this._config[(i + 1) + '_name'];
                this._config[i + '_icon'] = this._config[(i + 1) + '_icon'];
                this._config[i + '_link'] = this._config[(i + 1) + '_link'];
                this._config[i + '_entity'] = this._config[(i + 1) + '_entity'];
                this._config[i + '_pir_sensor'] = this._config[(i + 1) + '_pir_sensor'];
            }
        
            // Removing fields of the last button
            delete this._config[this.buttonIndex + '_name'];
            delete this._config[this.buttonIndex + '_icon'];
            delete this._config[this.buttonIndex + '_link'];
            delete this._config[this.buttonIndex + '_entity'];
            delete this._config[this.buttonIndex + '_pir_sensor'];
        
            // Updating index of the last button
            this.buttonIndex--;
        
            fireEvent(this, "config-changed", {
                config: this._config
            });
        }
        
        // Working for sliders (setting to 0) but add more issues, to be fixed
        // _valueChanged(ev) {
        //     if (!this._config || !this.hass) {
        //         return;
        //     }
        //     const target = ev.target;
        //     const detail = ev.detail;
        //     if (target.configValue) {
        //         this._config = {
        //             ...this._config,
        //             [target.configValue]: target.value !== undefined ? target.value : (target.checked !== undefined ? target.checked : detail.value),
        //         }
        //     }
        //     fireEvent(this, "config-changed", {
        //         config: this._config
        //     });
        // }
        
        _valueChanged(ev) {
            if (!this._config || !this.hass) {
                return;
            }
            const target = ev.target;
            const detail = ev.detail;
            if (target.configValue) {
                if (target.type === 'ha-switch') {
                    this._config = {
                        ...this._config,
                        [target.configValue]: target.checked,
                    }
                } else {
                    this._config = {
                        ...this._config,
                        [target.configValue]: target.checked !== undefined || !detail.value ? target.value || target.checked : target.checked || detail.value,
                    }
                }
            }
            fireEvent(this, "config-changed", {
                config: this._config
            });
        }
    
        static get styles() {
            return css`
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
        `;
        }
    }
    customElements.define('bubble-pop-up-editor', BubblePopUpEditor);
};

waitForElement().catch(console.error);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "bubble-pop-up",
    name: "Bubble Pop-up",
    preview: false,
    description: "Just add it in a vertical-stack first."
});

var version = 'v0.0.1-beta.9';

class BubbleCard extends HTMLElement {
    constructor() {
        super();
        // 'urlChanged' custom event
        const pushState = history.pushState;
        history.pushState = function () {
            pushState.apply(history, arguments);
            window.dispatchEvent(new Event('pushstate'));
        };

        const replaceState = history.replaceState;
        history.replaceState = function () {
            replaceState.apply(history, arguments);
            window.dispatchEvent(new Event('replacestate'));
        };

        ['popstate', 'pushstate', 'replacestate', 'mousedown', 'touchstart'].forEach((eventType) => {
            window.addEventListener(eventType, urlChanged);
        });

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
            setTimeout(() => {
                window.removeEventListener('popUpInitialized', popUpInitialized);
            }, 1000);
        };
        
        window.addEventListener('popUpInitialized', popUpInitialized);
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
        }

        if (window.location.search !== "?edit=1") {
            this.editor = false;
        } else {
            this.editor = true;
        }

        function toggleEntity(entityId) {
            hass.callService('homeassistant', 'toggle', {
                entity_id: entityId
            });
        }
        
        const addStyles = function(context, styles, customStyles, state, entityId, path = '', element = context.content) {
            const customStylesEval = customStyles ? eval('`' + customStyles + '`') : '';
            let styleAddedKey = styles + 'Added'; // Add 'Added' at the end of the styles value
            
            // Check if the style has changed
            if (!context[styleAddedKey] || context.previousStyle !== customStylesEval) {
                if (!context[styleAddedKey]) {
                    // Check if the style element already exists
                    context.styleElement = context.content.querySelector('style');
                    if (!context.styleElement) {
                        // If not, create a new style element
                        context.styleElement = document.createElement('style');
                        const parentElement = path ? context.content.querySelector(path) : element;
                        parentElement.appendChild(context.styleElement);
                    }
                    context[styleAddedKey] = true;
                }
                // Update the content of the existing style element
                context.styleElement.innerHTML = customStylesEval + styles;
                context.previousStyle = customStylesEval; // Store the current style
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
                });
            };
        })();
        
        function addActions(self, element) {
            addAction('click', 'tap', element, self);
            addAction('contextmenu', 'hold', element, self);
        }
        
        const customStyles = !this.config.styles ? '' : this.config.styles;
        
        let entityId = this.config.entity ? this.config.entity : '';
        let icon = !this.config.icon && this.config.entity ? hass.states[entityId].attributes.icon || hass.states[entityId].attributes.entity_picture || '' : this.config.icon || '';
        let name = this.config.name ? this.config.name : this.config.entity ? hass.states[entityId].attributes.friendly_name : '';
        let widthDesktop = this.config.width_desktop || '540px';
        let widthDesktopDivided = widthDesktop ? widthDesktop.match(/(\d+)(\D+)/) : '';
        let isSidebarHidden = this.config.is_sidebar_hidden || false;
        let state = this.config.state ? hass.states[this.config.state].state : '';
        let formatedState;

        switch (this.config.card_type) {
            // Initialize pop-up card
            case 'pop-up':
                if (!this.getRootNode().host) {
                    // Hide vertical stack content before initialization
                    if (this.editor !== true) {
                        this.card.style.marginTop = '2000px';
                    }
                } else {
                    if (!this.popUp) {
                        this.card.style.marginTop = '0';
                        this.popUp = this.getRootNode().querySelector('#root');
                        const event = new Event('popUpInitialized');
                        window.dispatchEvent(event);
                    }

                    const popUpHash = this.config.hash;
                    const popUp = this.popUp;
                    const text = this.config.text || '';
                    const triggerEntity = this.config.trigger_entity ? this.config.trigger_entity : '';
                    const triggerState = this.config.trigger_state ? this.config.trigger_state : '';
                    const triggerClose = this.config.trigger_close ? this.config.trigger_close : false;
                    formatedState = this.config.state ? hass.formatEntityState(hass.states[this.config.state]) + ' ' + text : text;
                    const marginTopMobile = this.config.margin_top_mobile 
                        ? (this.config.margin_top_mobile !== '0' ? this.config.margin_top_mobile : '0px')
                        : '0px';
                    const marginTopDesktop = this.config.margin_top_desktop 
                        ? (this.config.margin_top_desktop !== '0' ? this.config.margin_top_desktop : '0px')
                        : '0px';
                    const displayPowerButton = this.config.entity ? 'flex' : 'none';
        
                    if (!this.headerAdded) {
                        const headerContainer = document.createElement("div");
                        headerContainer.setAttribute("id", "header-container");
                    
                        const div = document.createElement("div");
                        headerContainer.appendChild(div);
                    
                        const iconContainer = document.createElement("div");
                        iconContainer.setAttribute("class", "header-icon");
                        div.appendChild(iconContainer);
                    
                        if (hass && hass.states && hass.states[entityId] && hass.states[entityId].attributes.entity_picture && !this.config.icon) {
                            const img = document.createElement("img");
                            img.setAttribute("src", hass.states[entityId].attributes.entity_picture);
                            img.setAttribute("class", "entity-picture");
                            img.setAttribute("alt", "Icon");
                            iconContainer.appendChild(img);
                        } else {
                            const haIcon = document.createElement("ha-icon");
                            haIcon.setAttribute("icon", icon);
                            haIcon.setAttribute("class", "icon");
                            iconContainer.appendChild(haIcon);
                        }
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
                    } else if (this.headerAdded) {
                        const iconContainer = this.content.querySelector("#header-container .header-icon");
                        iconContainer.innerHTML = ''; // Clear the container
                    
                        if (hass && hass.states && hass.states[entityId] && hass.states[entityId].attributes.entity_picture && !this.config.icon) {
                            const img = document.createElement("img");
                            img.setAttribute("src", hass.states[entityId].attributes.entity_picture);
                            img.setAttribute("class", "entity-picture");
                            img.setAttribute("alt", "Icon");
                            iconContainer.appendChild(img);
                        } else {
                            const haIcon = document.createElement("ha-icon");
                            haIcon.setAttribute("icon", icon);
                            haIcon.setAttribute("class", "icon");
                            iconContainer.appendChild(haIcon);
                        }
        
                        const h2 = this.content.querySelector("#header-container h2");
                        h2.textContent = name;
        
                        const p = this.content.querySelector("#header-container p");
                        p.textContent = formatedState;
        
                        const haIcon2 = this.content.querySelector("#header-container .power-button");
                        haIcon2.setAttribute("style", `display: ${displayPowerButton};`);
                    }
        
                    if (!this.eventAdded) {
                        window['checkHashRef_' + popUpHash] = checkHash;
                        window.addEventListener('urlChanged', window['checkHashRef_' + popUpHash]);
        
                        this.content.querySelector('.power-button').addEventListener('click', () => {
                            toggleEntity(entityId);
                        });
                        
                        window.addEventListener('mousedown', function(e) {
                            if (location.hash === popUpHash && 
                                !e.composedPath().some(el => el.nodeName === 'HA-MORE-INFO-DIALOG') && 
                                !e.composedPath().some(el => el.id === 'root' && !el.classList.contains('close-pop-up'))) {
                                    history.replaceState(null, null, location.href.split('#')[0]);
                                    localStorage.setItem('isManuallyClosed_' + popUpHash, true)
                            }
                        });
                        
                        window.addEventListener('keydown', function(event) {
                            if (event.key === 'Escape') {
                                history.replaceState(null, null, location.href.split('#')[0]);
                                localStorage.setItem('isManuallyClosed_' + popUpHash, true)
                            }
                        });
                        
                        // Slide down to close pop-up
                        
                        let startTouchY;
                        let lastTouchY;
                        
                        popUp.addEventListener('touchstart', function(event) {
                            // Record the Y position of the finger at the start of the touch
                            startTouchY = event.touches[0].clientY;
                            lastTouchY = startTouchY;
                        });
                        
                        popUp.addEventListener('touchmove', function(event) {
                            // Calculate the distance the finger has traveled
                            let touchMoveDistance = event.touches[0].clientY - startTouchY;
                        
                            // If the distance is positive (i.e., the finger is moving downward) and exceeds a certain threshold, close the pop-up
                            if (touchMoveDistance > 300 && event.touches[0].clientY > lastTouchY) {
                                history.replaceState(null, null, location.href.split('#')[0]);
                                localStorage.setItem('isManuallyClosed_' + popUpHash, true)
                            }
                        
                            // Update the Y position of the last touch
                            lastTouchY = event.touches[0].clientY;
                        });
        
                        this.eventAdded = true;
                    }
                    
                    if (triggerEntity) {
                        let previousTriggerState = localStorage.getItem('previousTriggerState_' + popUpHash);
                        let isManuallyClosed = localStorage.getItem('isManuallyClosed_' + popUpHash) === 'true';
                        let isTriggered = localStorage.getItem('isTriggered_' + popUpHash) === 'true';
                    
                        if (hass.states[triggerEntity].state === triggerState && previousTriggerState === null || !isTriggered) {
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
                        } else if (triggerClose && popUp.classList.contains('open-pop-up') && isTriggered && !isManuallyClosed) {
                            history.replaceState(null, null, location.href.split('#')[0]);
                            isTriggered = false;
                            isManuallyClosed = true;
                            localStorage.setItem('isManuallyClosed_' + popUpHash, isManuallyClosed);
                            localStorage.setItem('isTriggered_' + popUpHash, isTriggered);
                        }
                    }
                    
                    if (entityId !== '') {
                        const rgbColor = hass.states[entityId].attributes.rgb_color;
                        const rgbColorOpacity = rgbColor  
                            ? `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.5)` 
                            : hass.states[entityId].state !== ('off' || 'closed' || 'paused' || 'false')
                            ? `var(--accent-color)`
                            : `var(--background-color,var(--secondary-background-color))`;
                        this.header.style.backgroundColor = rgbColorOpacity;
                    } 
                    
                    function checkHash() {
                        if (!this.editor) {
                            let hash = location.hash.split('?')[0];
            
                            // Open on hash change
                            if (hash === popUpHash) {
                                openPopUp();
                            // Close on back button from browser
                            } else if (popUp.classList.contains('open-pop-up')) {
                                closePopUp();
                            }
                        }
                    };
                    
                    function openPopUp() {
                        popUp.classList.remove('close-pop-up');
                        popUp.classList.add('open-pop-up');
                    }
                    
                    function closePopUp() {
                        popUp.classList.remove('open-pop-up');
                        popUp.classList.add('close-pop-up');
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
                            position: fixed !important;
                            margin: 0 -7px;
                            width: 100%;
                            background-color: var(--ha-card-background,var(--card-background-color));
                            border-radius: 42px;
                            box-sizing: border-box;
                            top: calc(100% + ${marginTopMobile} + var(--header-height));
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
                        #root > bubble-card:first-child::after {
                            content: '';
                            display: block;
                            position: sticky;
                            top: 0;
                            left: -50px;
                            margin: -70px 0 -35px 0;
                            width: 200%;
                            height: 100px;
                            background: linear-gradient(0deg, rgba(79, 69, 87, 0) 0%, var(--ha-card-background,var(--card-background-color)) 80%);
                            z-index: 0;
                        }
                        #root::-webkit-scrollbar {
                            display: none; /* for Chrome, Safari, and Opera */
                        }
                        #root > bubble-card:first-child {
                            position: sticky;
                            top: 0;
                            z-index: 1;
                            background: none !important;
                        }
                        #root.open-pop-up {
                            transform: translateY(-100%);
                            transition: transform .4s !important;
                        }
                        #root.open-pop-up > * {
                          /* Block child items to overflow and if they do clip them */
                          /*max-width: calc(100vw - 38px);*/
                          max-width: 100% !important;
                          overflow-x: clip;
                        }
                        #root.close-pop-up { 
                            transform: translateY(0%);
                            transition: transform .4s !important;
                            /* animation: hide 1s forwards; */
                        }
                        @media only screen and (min-width: 768px) {
                            #root {
                                top: calc(100% + ${marginTopDesktop} + var(--header-height));
                                left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]});
                                margin: 0 !important;
                            }
                        }  
                        @media only screen and (min-width: 870px) {
                            #root {
                                top: calc(100% + ${marginTopDesktop} + var(--header-height));
                                width: calc(${widthDesktop}${widthDesktopDivided[2] === '%' ? ' - var(--mdc-drawer-width)' : ''}) !important;
                                left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]} + ${isSidebarHidden === true ? '0px' : `var(--mdc-drawer-width) ${widthDesktopDivided[2] === '%' ? '' : '/ 2'}`});
                                margin: 0 !important;
                            }
                        }  
                        #root.editor {
                            position: inherit !important;
                            width: 100% !important;
                            padding: 18px !important;
                        }
                    `;
                    
                    const headerStyles = `
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
                            background-color: var(--background-color,var(--secondary-background-color));
                            transition: background 1s;
                            border-radius: 25px;
                            margin-right: 14px;
                        }
                        .header-icon {
                            display: inline-flex;
                            width: 22px;
                            height: 22px;
                            padding: 8px;
                            background-color: var(--card-background-color,var(--ha-card-background));
                            border-radius: 100%;
                            margin: 0 10px 0 0;
                            cursor: ${!this.config.entity && !this.config.double_tap_action && !this.config.tap_action && !this.config.hold_action ? 'default' : 'pointer'}; 
                            flex-wrap: wrap;
                            align-content: center;
                            justify-content: center;
                            overflow: hidden;
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
                    
                    addStyles(this, popUpStyles, customStyles, state, entityId, '', popUp);
                    addStyles(this, headerStyles, customStyles, state, entityId);
                    
                    if (this.editor === true) {
                        popUp.classList.add('editor');
                        popUp.classList.remove('open-pop-up');
                        popUp.classList.remove('close-pop-up');
                    } else {
                        popUp.classList.remove('editor');
                    }
                }
                break;

            // Initialize horizontal buttons stack
            case 'horizontal-buttons-stack' : 
                const createButton = (button, link, icon) => {
                    const buttonElement = document.createElement("button");
                    buttonElement.onclick = function() { navigate('', link); }; 
                    buttonElement.setAttribute("class", "button");
                    buttonElement.innerHTML = `
                        ${icon !== '' ? `<ha-icon icon="${icon}" class="icon" style="${button !== '' ? `margin-right: 8px;` : ''}"></ha-icon>` : ''}
                        ${button !== '' ? `<p class="name">${button}</p>` : ''}
                    `;
                    return buttonElement;
                };
    
                const updateButtonStyle = (buttonElement, lightEntity) => {
                    if (hass.states[lightEntity].attributes.rgb_color) {
                        const rgbColor = hass.states[lightEntity].attributes.rgb_color;
                        const rgbColorOpacity = `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.5)`;
                        buttonElement.style.backgroundColor = rgbColorOpacity;
                        buttonElement.style.border = '1px solid rgba(0,0,0,0)';
                    } else if (!hass.states[lightEntity].attributes.rgb_color && hass.states[lightEntity].state == 'on') {
                        buttonElement.style.backgroundColor = 'rgba(255,255,255,0.5)';
                        buttonElement.style.border = '1px solid rgba(0,0,0,0)';
                    } else {
                        buttonElement.style.backgroundColor = 'rgba(0,0,0,0)';
                        buttonElement.style.border = '1px solid var(--primary-text-color)';
                    }
                };
    
                if (!this.buttonsAdded) {
                    const buttonsContainer = document.createElement("div");
                    buttonsContainer.setAttribute("class", "horizontal-buttons-stack-container");
                    this.content.appendChild(buttonsContainer);
                    this.buttonsContainer = buttonsContainer;
                }
    
                const updateButtonsOrder = () => {
                    let buttonsList = [];
                    let i = 1;
                    while (this.config[i + '_link']) {
                        const prefix = i + '_';
                        const button = this.config[prefix + 'name'] || '';
                        const pirSensor = this.config[prefix + 'pir_sensor'];
                        icon = this.config[prefix + 'icon'] || '';
                        const link = this.config[prefix + 'link'];
                        const lightEntity = this.config[prefix + 'entity'];
                        buttonsList.push({
                            button,
                            pirSensor,
                            icon,
                            link,
                            lightEntity
                        });
                        i++;
                    }
                    
                    if (this.config.auto_order) {
                        buttonsList.sort((a, b) => {
                            // Check if both PIR sensors are defined
                            if (a.pirSensor && b.pirSensor) {
                                // Check if the PIR sensor state is "on" for both buttons
                                if (hass.states[a.pirSensor].state === "on" && hass.states[b.pirSensor].state === "on") {
                                    let aTime = hass.states[a.pirSensor].last_updated;
                                    let bTime = hass.states[b.pirSensor].last_updated;
                                    return aTime < bTime ? 1 : -1;
                                }
                                // If only a.pirSensor is "on", place a before b
                                else if (hass.states[a.pirSensor].state === "on") {
                                    return -1;
                                }
                                // If only b.pirSensor is "on", place b before a
                                else if (hass.states[b.pirSensor].state === "on") {
                                    return 1;
                                }
                                // If neither PIR sensor is "on", arrangement based only on the state of last updated even if off
                                let aTime = hass.states[a.pirSensor].last_updated;
                                let bTime = hass.states[b.pirSensor].last_updated;
                                return aTime < bTime ? 1 : -1;
                            }
                            // If a.pirSensor is not defined, place a after b
                            else if (!a.pirSensor) {
                                return 1;
                            }
                            // If b.pirSensor is not defined, place b after a
                            else if (!b.pirSensor) {
                                return -1;
                            }
                        });
                    }
    
                    if (!this.buttonsAdded || this.editor) {
                        this.card.classList.add('horizontal-buttons-stack');
    
                        // Fix for editor mode
                        if (this.editor && this.buttonsContainer) { 
                            while (this.buttonsContainer.firstChild) {
                                this.buttonsContainer.removeChild(this.buttonsContainer.firstChild);
                            }
                            localStorage.setItem('editorMode', true);
                        } else {
                            localStorage.setItem('editorMode', false);
                        }
                        // End of fix
                    
                        const buttons = {};
                        buttonsList.forEach(button => {
                            const buttonElement = createButton(button.button, button.link, button.icon);
                            // Store the button element using its link as key
                            buttons[button.link] = buttonElement;
                            this.buttonsContainer.appendChild(buttonElement);
                        });
                        this.buttonsAdded = true;
                        this.buttons = buttons;
                    }
                    
                    if (this.editor) {
                        localStorage.setItem('justExitedEditor', false);
                    } else if (localStorage.getItem('justExitedEditor') === 'false') {
                        localStorage.setItem('justExitedEditor', true);
                    }
                    
                    let currentPosition = 0;
                    let margin = 12;
                    const justExitedEditor = localStorage.getItem('editorMode') === 'true' && !this.editor;
                    
                    buttonsList.forEach((button, index) => {
                        let buttonElement = this.buttons[button.link];
                        if (buttonElement) {
                            let buttonWidth = localStorage.getItem(`buttonWidth-${button.link}`);
                            let buttonContent = localStorage.getItem(`buttonContent-${button.link}`);
                            if (!buttonWidth || buttonWidth === '0' || buttonContent !== buttonElement.innerHTML || this.editor || justExitedEditor) {
                                buttonWidth = buttonElement.offsetWidth;
                                localStorage.setItem(`buttonWidth-${button.link}`, buttonWidth);
                                localStorage.setItem(`buttonContent-${button.link}`, buttonElement.innerHTML);
                                if (this.editor) {
                                    margin = 36; // Recalculate margin for editor mode
                                } else if (justExitedEditor) {
                                    margin = 12; // Recalculate margin for regular mode
                                }
                            }
                            buttonElement.style.transform = `translateX(${currentPosition}px)`;
                            currentPosition += parseInt(buttonWidth) + margin;
                        }
                        if (button.lightEntity) {
                            updateButtonStyle(buttonElement, button.lightEntity);
                        }
                    });
                }
    
                updateButtonsOrder();
    
                const horizontalButtonsStackStyles = `
                    ha-card {
                        border-radius: 0;
                    }
                    .horizontal-buttons-stack {
                        width: 100%;
                        margin-top: 0 !important;
                        background: none !important;
                        position: fixed;
                        height: 51px;
                        bottom: 16px;
                        left: 7px;
                        /* transform: translateY(200px); */
                        /* animation: from-bottom 1.3s forwards; */
                        z-index: 1 !important; /* Higher value hide the more-info panel */
                    }
                    @keyframes from-bottom {
                        0% {transform: translateY(200px);}
                        20% {transform: translateY(200px);}
                        46% {transform: translateY(-8px);}
                        56% {transform: translateY(1px);}
                        62% {transform: translateY(-2px);}
                        70% {transform: translateY(0);}
                        100% {transform: translateY(0);}
                    }
                    .horizontal-buttons-stack-container {
                        width: max-content;
                        position: relative;
                        height: 51px;
                    }
                    .button {
                        display: flex;
                        position: absolute;
                        /* box-sizing: border-box; */
                        border: 1px solid var(--primary-text-color);
                        align-items: center;
                        height: 50px;
                        white-space: nowrap;
                        width: auto;
                        border-radius: 25px;
                        z-index: 1;
                        padding: 16px;
                        background: none;
                        transition: background-color 1s, border 1s, transform 1s;
                        color: var(--primary-text-color);
                    }
                    .icon {
                        height: 24px;
                    }
                    .card-content {
                        width: calc(100% + 18px);
                        box-sizing: border-box;
                        margin: 0 -36px !important;
                        padding: 0 36px !important;
                        overflow: scroll !important;
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                        -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 1) calc(0% + 28px), rgba(0, 0, 0, 1) calc(100% - 28px), transparent 100%);
                        /* mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%); */
                        /* -webkit-mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%); */
                    }
                    .horizontal-buttons-stack::before {
                        content: '';
                        position: absolute;
                        top: -32px;
                        left: -100%;
                        display: block;
                        background: linear-gradient(0deg, var(--background-color, var(--primary-background-color)) 50%, rgba(79, 69, 87, 0));
                        width: 200%;
                        height: 100px;
                    }
                    .card-content::-webkit-scrollbar {
                        display: none;
                    }
                    @media only screen and (min-width: 768px) {
                        .card-content {
                            position: fixed;
                            width: ${widthDesktop} !important;
                            left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]});
                            margin-left: -13px !important;
                            padding: 0 26px !important;
                        }
                    }
                    @media only screen and (min-width: 870px) {
                        .card-content {
                            position: fixed;
                            width: calc(${widthDesktop}${widthDesktopDivided[2] === '%' ? ' - var(--mdc-drawer-width)' : ''}) !important;
                            left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]} + ${isSidebarHidden === true ? '0px' : `var(--mdc-drawer-width) ${widthDesktopDivided[2] === '%' ? '' : '/ 2'}`});
                            margin-left: -13px !important;
                            padding: 0 26px !important;
                        }
                    }
                    
                    .horizontal-buttons-stack.editor {
                        position: relative;
                        bottom: 0;
                        left: 0;
                        overflow: hidden;
                    }
                    
                    .horizontal-buttons-stack.editor::before {
                        top: -32px;
                        left: -100%;
                        background: none;
                        width: 100%;
                        height: 0;
                    }
                    
                    .horizontal-buttons-stack-container.editor > .button {
                        transition: background-color 0s, border 0s, transform 0s;
                    }
                    
                    .horizontal-buttons-stack-container.editor {
                        margin-left: 1px;
                    }
                    
                    .horizontal-buttons-stack.editor > .card-content {
                        position: relative;
                        width: calc(100% + 26px) !important;
                        left: -26px;
                        margin: 0 !important;
                        padding: 0;
                    }
                `;
    
                addStyles(this, horizontalButtonsStackStyles, customStyles);
                
                if (this.editor) {
                    this.buttonsContainer.classList.add('editor');
                    this.card.classList.add('editor');
                } else {
                    this.buttonsContainer.classList.remove('editor');
                    this.card.classList.remove('editor');
                }
            break;

            // Initialize button
            case 'button' :
                if (!this.buttonAdded) {
                    const buttonContainer = document.createElement("div");
                    buttonContainer.setAttribute("class", "button-container");
                    this.content.appendChild(buttonContainer);
                }
    
                //const name = !this.config.name ? hass.states[entityId].attributes.friendly_name || '' : this.config.name;
                const buttonType = this.config.button_type || 'switch';
                formatedState = hass.formatEntityState(hass.states[entityId]);
                const showState = !this.config.show_state ? false : this.config.show_state;
                let currentBrightness = !entityId ? '' : hass.states[entityId].attributes.brightness || 0;
                let currentVolume = !entityId ? '' : hass.states[entityId].attributes.volume_level || 0;
                let isDragging = false;
                let brightness = currentBrightness;
                let volume = currentVolume;
                let startX = 0;
                let startY = 0;
                let startValue = 0;
                let movingVertically = false;
                let timeoutId = null;
    
                const iconContainer = document.createElement('div');
                iconContainer.setAttribute('class', 'icon-container');
                this.iconContainer = iconContainer;
    
                const nameContainer = document.createElement('div');
                nameContainer.setAttribute('class', 'name-container');
    
                const switchButton = document.createElement('div');
                switchButton.setAttribute('class', 'switch-button');
    
                const rangeSlider = document.createElement('div');
                rangeSlider.setAttribute('class', 'range-slider');
    
                const rangeFill = document.createElement('div');
    
                rangeFill.setAttribute('class', 'range-fill');
                if (entityId && entityId.startsWith("light.") && buttonType === 'slider') {
                    rangeFill.style.transform = `translateX(${(currentBrightness / 255) * 100}%)`;
                } else if (entityId && entityId.startsWith("media_player.") && buttonType === 'slider') {
                    rangeFill.style.transform = `translateX(${currentVolume * 100}%)`;
                }
                
                if (!this.buttonContainer || this.editor) {
                    // Fix for editor mode
                    if (this.editor && this.buttonContainer) { 
                        while (this.buttonContainer.firstChild) {
                            this.buttonContainer.removeChild(this.buttonContainer.firstChild);
                        }
                        this.eventAdded = false;
                    }
                    // End of fix
                
                    this.buttonContainer = this.content.querySelector(".button-container");
                
                    if (buttonType === 'slider' && (!this.buttonAdded || this.editor)) {
                        this.buttonContainer.appendChild(rangeSlider);
                        rangeSlider.appendChild(iconContainer);
                        rangeSlider.appendChild(nameContainer);
                        rangeSlider.appendChild(rangeFill);
                        this.rangeFill = this.content.querySelector(".range-fill");
                    } else if (buttonType === 'switch' || buttonType === 'custom' || this.editor) {
                        this.buttonContainer.appendChild(switchButton);
                        switchButton.appendChild(iconContainer);
                        switchButton.appendChild(nameContainer);
                        this.switchButton = this.content.querySelector(".switch-button");
                    }
                    
                    if ((hass.states[entityId].attributes.entity_picture || icon.startsWith("/api/image/")) && !this.config.icon) {
                        iconContainer.innerHTML = `<img class="entity-picture" src="${icon}" alt="Icon" />`;
                    } else {
                        iconContainer.innerHTML = `<ha-icon icon="${icon}" class="icon"></ha-icon>`;
                    }
                    
                    nameContainer.innerHTML = `
                        <p class="name">${name}</p>
                        ${!showState ? '' : `<p class="state">${formatedState}</p>`}
                    `; 
                
                    this.buttonAdded = true;
                }
    
                if (showState) {
                    this.content.querySelector(".state").textContent = formatedState;
                }
    
                function tapFeedback(content) {
                    let feedbackElement = content.querySelector('.feedback-element');
                    if (!feedbackElement) {
                        feedbackElement = document.createElement('div');
                        feedbackElement.setAttribute('class', 'feedback-element');
                        content.appendChild(feedbackElement);
                    }
    
                    feedbackElement.style.animation = 'tap-feedback .5s';
                    setTimeout(() => {
                        feedbackElement.style.animation = 'none';
                        content.removeChild(feedbackElement);
                    }, 500);
                }
                
                function handleStart(e) {
                    startX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
                    startY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
                    startValue = rangeSlider.value;
                    if (e.target !== iconContainer.querySelector('ha-icon')) {
                        isDragging = true;
                        document.addEventListener('mouseup', handleEnd);
                        document.addEventListener('touchend', handleEnd);
                        document.addEventListener('mousemove', checkVerticalScroll);
                        document.addEventListener('touchmove', checkVerticalScroll);
                
                        // Add a delay before activating the slider
                        timeoutId = setTimeout(() => {
                            updateRange(e.pageX || e.touches[0].pageX);
                            updateEntity();
                            timeoutId = null; // Reset timeoutId once the delay has elapsed
                        }, 200);
                    }
                }
                
                function checkVerticalScroll(e) {
                    const x = e.pageX || (e.touches ? e.touches[0].pageX : 0);
                    const y = e.pageY || (e.touches ? e.touches[0].pageY : 0);
                    if (Math.abs(y - startY) > Math.abs(x - startX)) {
                        clearTimeout(timeoutId); // Cancel the activation of the slider if vertical scrolling is detected
                        handleEnd();
                    } else {
                        document.removeEventListener('mousemove', checkVerticalScroll);
                        document.removeEventListener('touchmove', checkVerticalScroll);
                        document.addEventListener('mousemove', handleMove);
                        document.addEventListener('touchmove', handleMove);
                    }
                }
    
                function handleEnd() {
                    isDragging = false;
                    movingVertically = false;
                    updateEntity();
                    document.removeEventListener('mouseup', handleEnd);
                    document.removeEventListener('touchend', handleEnd);
                    document.removeEventListener('mousemove', handleMove);
                    document.removeEventListener('touchmove', handleMove);
                }
                
                function updateEntity() {
                    if (entityId.startsWith("light.")) {
                        currentBrightness = brightness;
                        hass.callService('light', 'turn_on', {
                            entity_id: entityId,
                            brightness: currentBrightness
                        });
                    } else if (currentVolume !== volume && entityId.startsWith("media_player.")) {
                        currentVolume = volume;
                        hass.callService('media_player', 'volume_set', {
                            entity_id: entityId,
                            volume_level: currentVolume
                        });
                    }
                }
                
                function handleMove(e) {
                    const x = e.pageX || (e.touches ? e.touches[0].pageX : 0);
                    const y = e.pageY || (e.touches ? e.touches[0].pageY : 0);
                    // Check if the movement is large enough to be considered a slide
                    if (isDragging && Math.abs(x - startX) > 10) {
                        updateRange(x);
                    } else if (isDragging && Math.abs(y - startY) > 10) { // If the movement is primarily vertical
                        isDragging = false; // Stop the slide
                        rangeSlider.value = startValue; // Reset to initial value
                    }
                }
    
                if (!this.eventAdded && buttonType === 'switch') {
                    switchButton.addEventListener('click', () => tapFeedback(this.switchButton));
                    switchButton.addEventListener('click', function(e) {
                        if (!e.target.closest('ha-icon')) {
                            toggleEntity(entityId);
                        }
                    });
                    addActions(this, this.iconContainer);
                    this.eventAdded = true;
                } else if (!this.eventAdded && buttonType === 'slider') {
                    rangeSlider.addEventListener('mousedown', handleStart);
                    rangeSlider.addEventListener('touchstart', handleStart);
                    addActions(this, this.iconContainer);
                    this.eventAdded = true;
                } else if (!this.eventAdded && buttonType === 'custom') {
                    switchButton.addEventListener('click', () => tapFeedback(this.switchButton));
                    addActions(this, this.switchButton);
                    this.eventAdded = true;
                }
    
                if (!this.isDragging && buttonType === 'slider') {
                    this.rangeFill.style.transition = 'all .2s';
                    if (entityId.startsWith("light.")) {
                        this.rangeFill.style.transform = `translateX(${(currentBrightness / 255) * 100}%)`;
                    } else if (entityId.startsWith("media_player.")) {
                        this.rangeFill.style.transform = `translateX(${currentVolume * 100}%)`;
                    }
                }
    
                function updateStyle(state, content) {
                    content.buttonContainer.style.opacity = state !== 'unavailable' ? '1' : '0.5';
                    if (['switch', 'custom'].includes(buttonType)) {
                        const backgroundColor = ['on', 'open', 'cleaning', 'true', 'home', 'playing'].includes(state) ? 'var(--accent-color)' : 'rgba(0,0,0,0)';
                        content.switchButton.style.backgroundColor = backgroundColor;
                    }
                }
    
                updateStyle(state, this);
    
                function updateRange(x) {
                    const rect = rangeSlider.getBoundingClientRect();
                    const position = Math.min(Math.max(x - rect.left, 0), rect.width);
                    const percentage = position / rect.width;
                    if (entityId.startsWith("light.")) {
                        brightness = Math.round(percentage * 255);
                    } else if (entityId.startsWith("media_player.")) {
                        volume = percentage;
                    }
    
                    rangeFill.style.transition = 'none';
                    rangeFill.style.transform = `translateX(${percentage * 100}%)`;
                }
    
                if (buttonType === 'slider') {
                    if (entityId.startsWith("light.")) {
                        const rgbColor = hass.states[entityId].attributes.rgb_color;
                        const rgbColorOpacity = rgbColor ? `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.5)` : `rgba(255, 255, 255, 0.5)`;
                        //rangeFill.style.backgroundColor = rgbColorOpacity;
                        this.rangeFill.style.backgroundColor = rgbColorOpacity;
                    } else {
                        this.rangeFill.style.backgroundColor = `var(--accent-color)`;
                    }
                }
    
                const buttonStyles = `
                    ha-card {
                        margin-top: 0 !important;
                        background: none !important;
                    }
                    
                    .button-container {
                        position: relative;
                        width: 100%;
                        height: 50px;
                        z-index: 0;
                        background-color: var(--background-color-2,var(--secondary-background-color));
                        border-radius: 25px;
                        mask-image: radial-gradient(white, black);
                        -webkit-mask-image: radial-gradient(white, black);
                        -webkit-backface-visibility: hidden;
                        -moz-backface-visibility: hidden;
                        -webkit-transform: translateZ(0);
                        overflow: hidden;
                    }
                    
                    .switch-button,
                    .range-slider {
                        display: inline-flex;
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        transition: background-color 1.5s;
                    }
            
                    .range-fill {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                    }
                    
                    .switch-button {
                        cursor: pointer !important;
                    }
                    
                    .range-slider {
                        cursor: ew-resize;
                    }
                    
                    .range-fill {
                        z-index: 0;
                        width: 100%;
                        left: -100%;
                    }
                    
                    .icon-container {
                        position: absolute;
                        z-index: 1;
                        width: 38px;
                        height: 38px;
                        margin: 6px;
                        border-radius: 50%;
                        background-color: var(--card-background-color,var(--ha-card-background));
                        cursor: pointer !important;
                    }
                    
                    ha-icon {
                        display: flex;
                        position: absolute;
                        margin: inherit;
                        padding: 1px 2px;
                        width: 22px; 
                        height: 22px;
                    }
                    
                    .entity-picture {
                        height: inherit;
                        border-radius: 100%;
                    }
                    
                    .name-container {
                        position: relative;
                        display: ${!showState ? 'inline-flex' : 'block'};
                        margin-left: 58px;
                        z-index: 1;
                        font-weight: 600;
                        align-items: center;
                        line-height: ${!showState ? '16px' : '4px'};
                    }
                    
                    .state {
                        font-size: 12px;
                        opacity: 0.7;
                    }
                    
                    .feedback-element {
                        position: absolute;
                        top: 0;
                        left: 0;
                        opacity: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgb(0,0,0);
                    }
                    
                    @keyframes tap-feedback {
                        0% {transform: translateX(-100%); opacity: 0;}
                        64% {transform: translateX(0); opacity: 0.1;}
                        100% {transform: translateX(100%); opacity: 0;}
                    }
                `;
                
                addStyles(this, buttonStyles, customStyles, state, entityId);
                break;
    
            // Initialize separator
            case 'separator' :
                if (!this.separatorAdded || this.editor) {
                    // Fix for editor mode
                    if (this.editor && this.separatorContainer) { 
                        while (this.separatorContainer.firstChild) {
                            this.separatorContainer.removeChild(this.separatorContainer.firstChild);
                        }
                    }
                    // End of fix
                    
                    if (!this.separatorAdded) {
                        this.separatorContainer = document.createElement("div");
                        this.separatorContainer.setAttribute("class", "separator-container");
                    }
                    this.separatorContainer.innerHTML = `
                        <div>
                            <ha-icon icon="${icon}"></ha-icon>
                            <h4>${name}</h4>
                        </div>
                        <div></div>
                    `
                    this.content.appendChild(this.separatorContainer);
                    this.separatorAdded = true;
                }
                
                const separatorStyles = `
                    .separator-container {
                        display: inline-flex;
                        width: 100%;
                    }
                    .separator-container div:first-child {
                        display: inline-flex;
                        max-width: calc(100% - 38px);
                    }
                    .separator-container div ha-icon{
                        display: inline-flex;
                        height: 24px;
                        width: 24px;
                        margin: 0 20px 0 8px;
                        transform: translateY(-2px);
                    }
                    .separator-container div h4{
                        display: inline-flex;
                        margin: 0 20px 0 0;
                        font-size: 17px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .separator-container div:last-child{
                        display: inline-flex; 
                        border-radius: 6px; 
                        opacity: 0.3; 
                        margin-left: 10px; 
                        flex-grow: 1; 
                        height: 6px; 
                        align-self: center; 
                        background-color: var(--background-color,var(--secondary-background-color));
                `;
                
                addStyles(this, separatorStyles, customStyles);
                break;
    
            // Initialize cover card
            case 'cover' :
                const iconOpen = this.config.icon_open ? this.config.icon_open : 'mdi:window-shutter-open';
                const iconClosed = this.config.icon_close ? this.config.icon_close : 'mdi:window-shutter'
                const openCover = !this.config.open_service ? 'cover.open_cover' : this.config.open_service;
                const closeCover = !this.config.close_service ? 'cover.close_cover' : this.config.close_service;
                const stopCover = !this.config.stop_service ? 'cover.stop_cover' : this.config.stop_service;
                icon = hass.states[this.config.entity].state === 'open' ? iconOpen : iconClosed;
                formatedState = this.config.entity ? hass.formatEntityState(hass.states[this.config.entity]) : '';

    
                if (!this.coverAdded || this.editor) {
                    // Fix for editor mode
                    if (this.editor && this.coverContainer) { 
                        while (this.coverContainer.firstChild) {
                            this.coverContainer.removeChild(this.coverContainer.firstChild);
                        }
                    }
                    // End of fix
                    
                    this.coverContainer = document.createElement("div");
                    
                    this.coverContainer.setAttribute("class", "cover-container");
                    this.coverContainer.innerHTML = `
                        <div class="header-container">
                            <div class="icon-container">
                            </div>
                            <div class="name-container">
                                <p class="name">${name}</p>
                                <p class="state">${formatedState}</p>
                            </div>
                        </div>
                        <div class="buttons-container">
                            <button class="button open">
                                <ha-icon icon="mdi:arrow-up"></ha-icon>
                            </button>
                            <button class="button stop">
                                <ha-icon icon="mdi:stop"></ha-icon>
                            </button>
                            <button class="button close">
                                <ha-icon icon="mdi:arrow-down"></ha-icon>
                            </button>
                        </div>
                    `
                    this.content.appendChild(this.coverContainer);
                    
                    const openButton = this.coverContainer.querySelector('.open');
                    const stopButton = this.coverContainer.querySelector('.stop');
                    const closeButton = this.coverContainer.querySelector('.close');
    
                    openButton.addEventListener('click', () => {
                        hass.callService(openCover.split('.')[0], openCover.split('.')[1], {
                            entity_id: entityId
                        });
                    });
                    stopButton.addEventListener('click', () => {
                        hass.callService(stopCover.split('.')[0], stopCover.split('.')[1], {
                            entity_id: entityId
                        });
                    });
                    closeButton.addEventListener('click', () => {
                        hass.callService(closeCover.split('.')[0], closeCover.split('.')[1], {
                            entity_id: entityId
                        });
                    });
                    
                    this.iconContainer = this.content.querySelector('.icon-container');
                    addActions(this, this.iconContainer);

                    this.coverAdded = true;
                }
                
                if (this.iconContainer) {
                    this.iconContainer.innerHTML = `<ha-icon icon="${icon}" class="icon"></ha-icon>`;
                    this.content.querySelector(".state").textContent = formatedState;
                }
    
                const coverStyles = `
                    ha-card {
                        margin-top: 0 !important;
                        background: none !important;
                    }
                    
                    .header-container {
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                    }
                    
                    .cover-container {
                        display: grid;
                    }
                    
                    .icon-container {
                        display: flex;
                        margin: 0 !important;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        /*z-index: 1;*/
                        width: 48px;
                        height: 48px;
                        margin: 6px;
                        border-radius: 50%;
                        background-color: var(--card-background-color,var(--ha-card-background));
                        border: 6px solid var(--background-color-2,var(--secondary-background-color));
                        box-sizing: border-box;
                    }
                    
                    .name-container {
                        font-weight: 600;
                        margin-left: 10px;
                        line-height: 4px;
                    }
                    
                    .buttons-container {
                        display: grid;
                        align-self: center;
                        grid-auto-flow: column;
                        grid-gap: 18px;             
                    }
                    
                    .state {
                        font-size: 12px;
                        opacity: 0.7;
                    }
                    
                    ha-icon {
                        display: flex; 
                        height: 24px; 
                        width: 24px; 
                        color: var(--primary-text-color);
                    }
                    
                    .button {
                        display: flex;
                        background: var(--background-color-2,var(--secondary-background-color));
                        height: 42px;
                        border-radius: 32px;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border: none;
                    }
                `;
    
                addStyles(this, coverStyles, customStyles, state, entityId);
                break;
    
            // Intitalize empty card
            case 'empty-column' :
                if (!this.emptyCollumnAdded) {
                    const separatorContainer = document.createElement("div");
                    separatorContainer.setAttribute("class", "empty-column");
                    separatorContainer.innerHTML = `
                  <div style="display: flex; width: 100%;">
                  </div>
                  `
                    this.content.appendChild(separatorContainer);
                    this.emptyColumnAdded = true;
                }
                break;
        }
    }

    setConfig(config) {
        if (config.card_type === 'pop-up') {
            if (!config.hash) {
                throw new Error("You need to define an hash");
            }
        } else if (config.card_type === 'horizontal-buttons-stack') {
            var definedLinks = {};
            
            for (var key in config) {
              if (key.match(/^\d+_icon$/)) {
                var iconKey = key;
                var linkKey = key.replace('_icon', '_link');
            
                if (config[linkKey] === undefined) {
                    throw new Error("You need to define " + linkKey);
                }
            
                if (definedLinks[config[linkKey]]) {
                    throw new Error("You can't use " + config[linkKey] + " twice" );
                }
            
                definedLinks[config[linkKey]] = true;
              }
            }
        } else if (config.card_type === 'button' || config.card_type === 'cover') {
            if (!config.entity) {
                throw new Error("You need to define an entity");
            }
        }
        this.config = config;
    }

    getCardSize() {
        return 1;
    }

    static getConfigElement() {
        return document.createElement("bubble-card-editor");
    }
}

console.info(
    `%c Bubble Card %c ${version} `,
    'background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
    'background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)'
);

customElements.define("bubble-card", BubbleCard);

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

const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;
//const render = LitElement.prototype.render;

class BubbleCardEditor extends LitElement {
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

    get _card_type() {
        return this._config.card_type || '';
    }

    get _button_type() {
        return this._config.button_type || 'switch';
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

    get _margin_top_mobile() {
        return this._config.margin_top_mobile || '0px';
    }

    get _margin_top_desktop() {
        return this._config.margin_top_desktop || '0px';
    }

    get _width_desktop() {
        return this._config.width_desktop || '540px';
    }

    get _is_sidebar_hidden() {
        return this._config.is_sidebar_hidden || false;
    }

    get _icon_open() {
        return this._config.icon_open || '';
    }

    get _icon_close() {
        return this._config.icon_close || '';
    }

    get _open_service() {
        return this._config.open_service || 'cover.open_cover';
    }

    get _close_service() {
        return this._config.open_service || 'cover.close_cover';
    }

    get _stop_service() {
        return this._config.open_service || 'cover.stop_cover';
    }

    get _auto_order() {
        return this._config.auto_order || false;
    }
    
    get _show_state() {
        return this._config.show_state || false;
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

        if (this._config.card_type === 'pop-up') {
            return html`
                <div class="card-config">
                    ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                    <h3>Pop-up</h3>
                    <ha-alert alert-type="info">This card allows you to convert any vertical-stack into a pop-up. Each pop-up can be opened by targeting its link (e.g. '#pop-up-name'), with navigation_path or with the horizontal buttons stack that is included.<br><br>It must be placed within a vertical-stack card at the top most position to function properly. The pop-up will be hidden by default until you open it.</ha-alert>
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
                    <h3>Pop-up trigger</h3>
                    <ha-alert alert-type="info">This allows you to apen this pop-up based on the state of any entity, for example you can open a "Security" pop-up with a camera when a person is in front of your house. You can also create a toggle helper (input_boolean) and trigger its opening/closing in an automation.</ha-alert>
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
                    <ha-formfield .label="Optional - Fix when the sidebar hidden on desktop">
                        <ha-switch
                            aria-label="Optional - Fix when the sidebar hidden on desktop"
                            .checked=${this._is_sidebar_hidden}
                            .configValue="${"is_sidebar_hidden"}"
                            @change=${this._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Fix when the sidebar hidden on desktop</label> 
                        </div>
                    </ha-formfield>
                    ${this.makeVersion()}
              </div>
            `;
        } else if (this._config.card_type === 'button') {
            return html`
                <div class="card-config">
                    ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                    <h3>Button</h3>
                    <ha-alert alert-type="info">This card can be a slider or a button, allowing you to toggle your entities, control the brightness of your lights and the volume of your media players. To access color / control of an entity, simply tap on the icon.</ha-alert>
                    ${this.makeDropdown(this._button_type !== 'slider' ? "Entity (toggle)" : "Entity (light or media_player)", "entity", allEntitiesList)}
                    ${this.makeDropdown("Button type", "button_type", buttonTypeList)}
                    <ha-textfield
                        label="Optional - Name"
                        .value="${this._name}"
                        .configValue="${"name"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    ${this.makeDropdown("Optional - Icon", "icon")}
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
                    ${this.makeVersion()}
                </div>
            `;
        } else if (this._config.card_type === 'separator') {
            return html`
                <div class="card-config">
                    ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                    <h3>Separator</h3>
                    <ha-alert alert-type="info">This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...</ha-alert>
                    <ha-textfield
                        label="Name"
                        .value="${this._name}"
                        .configValue="${"name"}"
                        @input="${this._valueChanged}"
                        style="width: 100%;"
                    ></ha-textfield>
                    ${this.makeDropdown("Icon", "icon")}
                    ${this.makeVersion()}
              </div>
            `;
        } else if (this._config.card_type === 'horizontal-buttons-stack') {
            if (!this.buttonAdded && this.shadowRoot.querySelector("#add-button")) {
                const addButton = this.shadowRoot.querySelector("#add-button");

                this.buttonIndex = 0;

                while (this._config[(this.buttonIndex + 1) + '_link']) {
                    this.buttonIndex++;
                }
                
                addButton.addEventListener("click", () => {
                    this.buttonIndex++;
                    
                    const originalOpacity = addButton.style.opacity;
                    const originalText = addButton.innerText;
                
                    addButton.style.opacity = '0.6';
                    addButton.style.transition = 'opacity 1s';
                    addButton.innerText = "Loading...";
                
                    setTimeout(() => {
                        addButton.style.opacity = originalOpacity;
                        addButton.innerText = originalText;
                    }, 5000);
                });

                this.buttonAdded = true;
            }

            return html`
                <div class="card-config">
                    ${this.makeDropdown("Card type", "card_type", cardTypeList)}
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
                    ${this.makeVersion()}
                </div>
            `;
        } else if (this._config.card_type === 'cover') {
            return html`
                <div class="card-config">
                    ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                    <h3>Cover</h3>
                    <ha-alert alert-type="info">This card allows you to control your covers.</ha-alert>
                    ${this.makeDropdown("Entity", "entity", coverList)}
                    <ha-textfield
                        label="Optional - Name"
                        .value="${this._name || ''}"
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
                    ${this.makeDropdown("Optional - Open icon", "icon_open")}
                    ${this.makeDropdown("Optional - Closed icon", "icon_close")}
                    ${this.makeVersion()}
                </div>
            `;
        } else if (this._config.card_type === 'empty-column') {
            return html`
                <div class="card-config">
                    ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                    <h3>Empty column</h3>
                    <ha-alert alert-type="info">Just an empty card to fill any empty column.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `;
        } else if (!this._config.card_type) {
            return html`
                <div class="card-config">
                    ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                    <h3>Bubble Card</h3>
                    <ha-alert alert-type="info">You need to add a card type first.</ha-alert>
                    ${this.makeVersion()}
                </div>
            `;
        }
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
            <h4>Bubble Card <span style="font-size: 10px;">${version}</span></h4>
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

    _valueChanged(ev) {
        if (!this._config || !this.hass) {
            return;
        }
        const target = ev.target;
        const detail = ev.detail;
        if (target.configValue) {
            this._config = {
                ...this._config,
                [target.configValue]: target.checked !== undefined || !detail.value ? target.value || target.checked : target.checked || detail.value,
                //   target.checked !== undefined || ev.detail.value ? target.checked || ev.detail.value : target.value || ev.detail.value,
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

customElements.define('bubble-card-editor', BubbleCardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "bubble-card",
    name: "Bubble Card",
    preview: false,
    description: "A minimalist card collection with a nice pop-up touch."
});

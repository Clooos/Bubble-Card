class BubbleCard extends HTMLElement {
    set hass(hass) {
      // Initialize the content if it's not there yet.
      if (!this.content) {
        this.attachShadow({ mode: 'open' });  
        this.shadowRoot.innerHTML = `
          <ha-card style="background: none; border: none;">
            <div class="card-content" style="padding: 0;">
            </div>
          </ha-card>
        `;
        this.card = this.shadowRoot.querySelector("ha-card");
        this.content = this.shadowRoot.querySelector("div");
      }
          
      editorMode(this);
      
      function editorMode(t) {
          if (window.location.search !== "?edit=1") {
            t.editor = 'false';
          } else {
            t.editor = 'true';
          }
      }
      
      function toggleEntity(entity) {
          hass.callService('homeassistant','toggle', { entity_id: entity });
      }
      
      // Initialize pop-up card
      if (this.config.card_type === 'pop-up' && !this.getRootNode().host) {
          // Hide vertical stack content before initialization
          if (this.editor !== 'true') {
              this.card.style.marginTop = '2000px';
          }
      } 
      else if (this.config.card_type === 'pop-up') {
          if (!this.popUp) {
              this.card.style.marginTop = '0';
              this.popUp = this.getRootNode().querySelector('#root');
          }
  
          const popUpHash = this.config.hash;
          const popUp = this.popUp;
          const entityId = this.config.entity || '';
          const icon = this.config.icon || '';
          const name = this.config.name || '';
          const stateUnit = this.config.state_unit || '';
          const state = this.config.state ? hass.states[this.config.state].state + stateUnit : '';
          const marginTop = this.config.margin_top || '0px';
          const widthDesktop = this.config.width_desktop || '600px';
          const widthDesktopDivided = widthDesktop.match(/(\d+)(\D+)/);
          const displayPowerButton = this.config.entity ? 'flex' : 'none';
          
          if (!this.headerAdded) {
            const headerContainer = document.createElement("div");
            headerContainer.setAttribute("id", "header-container");
          
            const div = document.createElement("div");
            headerContainer.appendChild(div);
          
            const haIcon1 = document.createElement("ha-icon");
            haIcon1.setAttribute("class", "header-icon");
            haIcon1.setAttribute("icon", icon);
            div.appendChild(haIcon1);
          
            const h2 = document.createElement("h2");
            h2.textContent = name;
            div.appendChild(h2);
          
            const p = document.createElement("p");
            p.textContent = state;
            div.appendChild(p);
          
            const haIcon2 = document.createElement("ha-icon");
            haIcon2.setAttribute("class", "power-button");
            haIcon2.setAttribute("icon", "mdi:power");
            haIcon2.setAttribute("style", `display: ${displayPowerButton};`);
            div.appendChild(haIcon2);
          
            const button = document.createElement("button");
            button.setAttribute("class", "close-pop-up");
            button.setAttribute("onclick", "history.replaceState(null, null, location.href.split('#')[0]);");
            headerContainer.appendChild(button);
          
            const haIcon3 = document.createElement("ha-icon");
            haIcon3.setAttribute("icon", "mdi:close");
            button.appendChild(haIcon3);
          
            this.content.appendChild(headerContainer);
            
            this.headerAdded = true;
          } 
          
          if (this.headerAdded) {
              const haIcon1 = this.content.querySelector("#header-container .header-icon");
              haIcon1.setAttribute("icon", icon);
              
              const h2 = this.content.querySelector("#header-container h2");
              h2.textContent = name;
              
              const p = this.content.querySelector("#header-container p");
              p.textContent = state;
              
              const haIcon2 = this.content.querySelector("#header-container .power-button");
              haIcon2.setAttribute("style", `display: ${displayPowerButton};`);
          }
        
          if (!this.eventAdded) {
              ['click', 'touchend', 'popstate'].forEach((eventType) => {
                  if (window['checkHashRef_' + popUpHash]) {
                      window.removeEventListener(eventType, window['checkHashRef_' + popUpHash]);
                  }
                  window['checkHashRef_' + popUpHash] = checkHash;
                  window.addEventListener(eventType, window['checkHashRef_' + popUpHash]);
              });
              
              this.content.querySelector('.power-button').addEventListener('click', () => {
                  toggleEntity(entityId);
              });
  
              this.eventAdded = true;
          }
  
          function checkHash(event) {
              // Open on hash change
              if (location.hash === popUpHash) {
                openPopUp();
              // Close on back button from browser
              } else if (popUp.classList.contains('open-pop-up')) {
                closePopUp();
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
          
          if (!this.styleAdded && this.editor !== 'true') {
              const styleElement = document.createElement('style');
              const headerStyleElement = document.createElement('style');
              
              const styles = `
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
                      width: calc(100% - 38px);
                      background-color: var(--ha-card-background,var(--card-background-color));
                      border-radius: 42px;
                      top: calc(100% + ${marginTop} - 2px); /*136px*/
                      display: grid !important;
                      grid-gap: 12px !important;
                      gap: 12px !important;
                      grid-auto-rows: min-content;
                      padding: 18px 18px 200px 18px !important;
                      height: calc(100% - 220px) !important;
                      -ms-overflow-style: none; /* for Internet Explorer, Edge */
                      scrollbar-width: none; /* for Firefox */
                      overflow-y: auto; 
                      overflow-x: hidden; 
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
                      z-index: 5;
                      background: none !important;
                  }
                  #root.open-pop-up {
                      transform: translateY(-100%);
                      transition: transform .4s !important;
                  }
                  #root.close-pop-up { 
                      transform: translateY(0%);
                      transition: transform .4s !important;
                      /* animation: hide 1s forwards; */
                  }
                  @media only screen and (min-width: 768px) {
                      #root {
                          top: calc(100% + ${marginTop} + 54px);
                          width: calc(${widthDesktop} - 36px) !important;
                          left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]});
                          margin: 0 !important;
                      }
                  }  
                  @media only screen and (min-width: 870px) {
                      #root {
                          top: calc(100% + ${marginTop} + 54px);
                          width: calc(${widthDesktop} - 92px) !important; 
                          left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]} + 56px);
                          margin: 0 !important;
                      }
                  }    
              `;
              
              const headerStyles = `
                  #header-container {
                      display: inline-flex;
                      width: 100%;
                      margin: 0;
                      padding: 0;
                  }
                  #header-container > div {
                      display: inline-flex;
                      align-items: center;
                      position: relative;
                      padding: 6px;
                      z-index: 2;
                      flex-grow: 1;
                      background-color: var(--background-color,var(--secondary-background-color));
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
                  }
                  #header-container h2 {
                      display: inline-flex;
                      margin: 0 18px 0 0;
                      line-height: 0px;
                      z-index: 100;
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
                      background: none;
                      justify-content: flex-end;
                      background-color: var(--background-color,var(--secondary-background-color));
                  }
                  .close-pop-up {
                      height: 50px;
                      width: 50px;
                      border: none;
                      border-radius: 50%;
                      z-index: 2;
                      background: var(--background-color,var(--secondary-background-color));
                      color: var(--primary-text-color);
                  }
              `;
              
              styleElement.innerHTML = styles;
              headerStyleElement.innerHTML = headerStyles;
              popUp.appendChild(styleElement);
              this.content.appendChild(headerStyleElement);
              this.styleAdded = true;
          } else if (this.editor === 'true') {
              const styleElement = this.getRootNode().querySelector('#root').querySelector("style");
              if (styleElement) {
                  popUp.removeChild(styleElement);
              }
              popUp.style.backgroundColor = 'var(--ha-card-background,var(--card-background-color))';
              popUp.style.padding = '16px';
              popUp.style.borderRadius = '42px';
              popUp.style.gridGap = '12px';
              popUp.style.gap = '12px';
              
              const headerStyleElement = document.createElement('style');
              const headerStyles = `
                  #header-container {
                      display: inline-flex;
                      width: 100%;
                      margin: 0;
                      padding: 0;
                  }
                  #header-container > div {
                      display: inline-flex;
                      align-items: center;
                      position: relative;
                      padding: 6px;
                      z-index: 2;
                      flex-grow: 1;
                      background-color: var(--background-color,var(--secondary-background-color));
                      border-radius: 25px;
                      margin-right: 14px;
                      h2 {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      }
                  }
                  .header-icon {
                      display: inline-flex;
                      width: 22px;
                      height: 22px;
                      padding: 8px;
                      background-color: var(--card-background-color,var(--ha-card-background));
                      border-radius: 100%;
                      margin: 0 10px 0 0;
                  }
                  #header-container h2 {
                      display: inline-flex;
                      margin: 0 18px 0 0;
                      line-height: 0px;
                      z-index: 100;
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
                      background: none;
                      justify-content: flex-end;
                      background-color: var(--background-color,var(--secondary-background-color));
                  }
                  .close-pop-up {
                      height: 50px;
                      width: 50px;
                      border: none;
                      border-radius: 50%;
                      z-index: 2;
                      background-color: var(--background-color,var(--secondary-background-color));
                      color: var(--primary-text-color);
                  }
              `;
              
              headerStyleElement.innerHTML = headerStyles;
              this.content.appendChild(headerStyleElement);
              
              this.styleAdded = false;
          }
      }
      
      // Initialize horizontal buttons stack
      if (this.config.card_type === 'horizontal-buttons-stack') {
          const createButton = (button, link, icon) => {
            const buttonElement = document.createElement("button");
            buttonElement.setAttribute("onclick", `window.location.href='${link}';`);
            buttonElement.setAttribute("class", "button");
            buttonElement.innerHTML = `
              <ha-icon icon="${icon}" class="icon"></ha-icon><p>${button}</p>
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
          }
          
          const updateButtonsOrder = () => {
            let buttonsList = [];
            let i = 1;
            while (this.config[i + '_name']) {
              const prefix = i + '_';
              const button = this.config[prefix + 'name'];
              const pirSensor = this.config[prefix + 'pir_sensor'];
              const icon = this.config[prefix + 'icon'];
              const link = this.config[prefix + 'link'];
              const lightEntity = this.config[prefix + 'entity'];
              buttonsList.push({button, pirSensor, icon, link, lightEntity});
              i++;
            }
          
          //   if (this.config.auto_order) {
          //     buttonsList.sort((a, b) => {
          //       let aTime = hass.states[a.pirSensor].last_updated;
          //       let bTime = hass.states[b.pirSensor].last_updated;
          //       return aTime < bTime ? 1 : -1;
          //     });
          //   }
          
            if (this.config.auto_order) {
                buttonsList.sort((a, b) => {
                  // Vérifier si l'état du capteur PIR est "on" pour les deux boutons
                  if (hass.states[a.pirSensor].state === "on" && hass.states[b.pirSensor].state === "on") {
                    let aTime = hass.states[a.pirSensor].last_updated;
                    let bTime = hass.states[b.pirSensor].last_updated;
                    return aTime < bTime ? 1 : -1;
                  }
                  // Si seulement a.pirSensor est "on", placer a avant b
                  else if (hass.states[a.pirSensor].state === "on") {
                    return -1;
                  }
                  // Si seulement b.pirSensor est "on", placer b avant a
                  else if (hass.states[b.pirSensor].state === "on") {
                    return 1;
                  }
                  // Si aucun des capteurs PIR n'est "on", arrangement basé seulement sur l'état de last updated même si off
                  let aTime = hass.states[a.pirSensor].last_updated;
                  let bTime = hass.states[b.pirSensor].last_updated;
                  return aTime < bTime ? 1 : -1;
                });
            }
          
            if (!this.buttonsAdded) {
              const buttonsContainer = this.content.querySelector(".horizontal-buttons-stack-container");
              const buttons = {};
              buttonsList.forEach(button => {
                const buttonElement = createButton(button.button, button.link, button.icon);
                // Stocker l'élément de bouton en utilisant son lien comme clé
                buttons[button.link] = buttonElement;
                buttonsContainer.appendChild(buttonElement);
              });
              this.buttonsAdded = true;
              this.buttons = buttons;
            }
            
            let currentPosition = 0;
            const margin = 12;
            buttonsList.forEach((button, index) => {
              let buttonElement = this.buttons[button.link];
              if (buttonElement) {
                let buttonWidth = localStorage.getItem(`buttonWidth-${button.link}`);
                let buttonContent = localStorage.getItem(`buttonContent-${button.link}`);
                if (!buttonWidth || buttonWidth === '0' || buttonContent !== buttonElement.innerHTML || this.editor === 'true') {
                  buttonWidth = buttonElement.offsetWidth;
                  localStorage.setItem(`buttonWidth-${button.link}`, buttonWidth);
                  localStorage.setItem(`buttonContent-${button.link}`, buttonElement.innerHTML);
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
          
          if (!this.styleAdded) {
              const styleElement = document.createElement('style');
              const styles = `
                  .horizontal-buttons-stack {
                    width: 100%;
                    margin-top: 0 !important;
                    background: none !important;
                    position: fixed;
                    height: 51px;
                    bottom: 16px;
                    /* transform: translateY(200px); */
                    /* animation: from-bottom 1.3s forwards; */
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
                    box-sizing: border-box;
                    border: 1px solid var(--primary-text-color);
                    align-items: center;
                    height: 50px;
                    white-space: nowrap;
                    width: auto;
                    border-radius: 25px;
                    z-index: 2;
                    padding: 16px;
                    transition: background-color 1s, border 1s, transform 1s;
                    color: var(--primary-text-color);
                  }
                  .icon {
                    height: 24px;
                    margin-right: 8px;
                  }
                  .card-content {
                    width: 100%;
                    box-sizing: border-box;
                    margin: 0 -36px !important;
                    padding: 0 36px !important;
                    overflow: scroll !important;
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                    mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%);
                    -webkit-mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%);
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
                          width: 538px !important;
                          left: calc(50% - 246px);
                          padding: 0 26px !important;
                    }
                  }
                  @media only screen and (min-width: 870px) {
                    .card-content {
                          position: fixed;
                          width: 538px !important;
                          left: calc(50% - 218px);
                          padding: 0 26px !important;
                    }
                  }
              `;
              
              styleElement.innerHTML = styles;
              this.card.classList.add('horizontal-buttons-stack');
              this.content.querySelector(".horizontal-buttons-stack-container").appendChild(styleElement);
              this.styleAdded = true;
          } 
          
          if (this.editor === 'true') {
            if (!this.editorStyleAdded) {
              const styleElement = document.createElement('style');
              const styles = `
                  .horizontal-buttons-stack {
                    width: 100%;
                    margin-top: 0 !important;
                    background: none !important;
                    position: relative;
                    height: auto;
                    bottom: 0px;
                    overflow: hidden;
                  }
                  .horizontal-buttons-stack::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    background: none;
                    width: 100%;
                    height: 0;
                  }
                  .card-content {
                    width: 100% !important;
                  }
              `;
              styleElement.innerHTML = styles;
              this.card.appendChild(styleElement);
              this.editorStyleAdded = true;
            }
          } else if (this.card.querySelector("ha-card > style")) {
              const styleElement = this.card.querySelector("ha-card > style");
              this.card.removeChild(styleElement);
          }
      }
      
      // Initialize button
      if (this.config.card_type === 'button') {
          if (!this.buttonAdded) {
              const buttonContainer = document.createElement("div");
              buttonContainer.setAttribute("class", "button-container");
              this.content.appendChild(buttonContainer);
          }
          
          const entityId = this.config.entity;
          const icon = !this.config.icon ? hass.states[entityId].attributes.icon || '' : this.config.icon;//this.config.icon || !entityId ? this.config.icon || '' : (!this.config.icon ? hass.states[entityId].attributes.icon : '');
          const name =  !this.config.name ? hass.states[entityId].attributes.friendly_name || '' : this.config.name;
          const buttonType = this.config.button_type || 'switch';
          const state = !entityId ? '' : hass.states[entityId].state;
          let currentBrightness = !entityId ? '' : hass.states[entityId].attributes.brightness || 0;
          let currentVolume = !entityId ? '' : hass.states[entityId].attributes.volume_level || 0;
          
          const iconContainer = document.createElement('div');
          iconContainer.setAttribute('class', 'icon-container');
          
          const nameContainer = document.createElement('div');
          nameContainer.setAttribute('class', 'nameContainer');
          
          const switchButton = document.createElement('div');
          switchButton.setAttribute('class', 'switch-button');
          
          const rangeSlider = document.createElement('div');
          rangeSlider.setAttribute('class', 'range-slider');
          
          const rangeFill = document.createElement('div');
          
          rangeFill.setAttribute('class', 'range-fill');
          if (entityId && entityId.startsWith("light.") && buttonType === 'slider') {
              rangeFill.style.transform = `translateX(${(currentBrightness / 255) * 100}%)`;
          }
          else if (entityId && entityId.startsWith("media_player.") && buttonType === 'slider') {
              rangeFill.style.transform = `translateX(${currentVolume * 100}%)`;
          }
          
          if (!this.buttonAdded) {
              this.buttonContainer = this.content.querySelector(".button-container");
  
              if (buttonType === 'slider' && !this.buttonAdded) {
                  this.buttonContainer.appendChild(rangeSlider);
                  rangeSlider.appendChild(iconContainer);
                  rangeSlider.appendChild(nameContainer);
                  rangeSlider.appendChild(rangeFill);
                  this.rangeFill = this.content.querySelector(".range-fill");
              }             
              else if (buttonType === 'switch') {
                  this.buttonContainer.appendChild(switchButton);
                  switchButton.appendChild(iconContainer);
                  switchButton.appendChild(nameContainer);
                  this.switchButton = this.content.querySelector(".switch-button");
              }
              
              iconContainer.innerHTML = `<ha-icon icon="${icon}" class="icon"></ha-icon>`;
              nameContainer.innerHTML = `<p>${name}</p>`;
              
              this.buttonAdded = true;
          }
          
          let isDragging = false;
          let brightness = currentBrightness;
          let volume = currentVolume;
          
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
              if (e.target === iconContainer.querySelector('ha-icon')) {
                  iconContainer.addEventListener('mouseup', event => {
                      fireEvent(this, "hass-more-info", { entityId: entityId });
                  });
              } else {
                  isDragging = true;
                  updateRange(e.pageX || e.touches[0].pageX);
                  document.addEventListener('mouseup', handleEnd);
                  document.addEventListener('touchend', handleEnd);
                  document.addEventListener('mousemove', handleMove);
                  document.addEventListener('touchmove', handleMove);
              } 
          }
          
          function handleEnd() {
              isDragging = false;
              
              document.removeEventListener('mouseup', handleEnd);
              document.removeEventListener('touchend', handleEnd);
              document.removeEventListener('mousemove', handleMove);
              document.removeEventListener('touchmove', handleMove);
  
              if (currentBrightness !== brightness && entityId.startsWith("light.")) {
                  currentBrightness = brightness;
                  hass.callService('light', 'turn_on', {
                      entity_id: entityId,
                      brightness: currentBrightness
                  });
              }
              else if (currentVolume !== volume && entityId.startsWith("media_player.")) {
                  currentVolume = volume;
                  hass.callService('media_player', 'volume_set', {
                      entity_id: entityId,
                      volume_level: currentVolume
                  });
              }
          }
          
          function handleMove(e) {
              if (isDragging) {
                  updateRange(e.pageX || e.touches[0].pageX);
              }
          }
          
          if (!this.eventAdded && buttonType === 'switch') {
              switchButton.addEventListener('click', () => tapFeedback(this.switchButton));
              //switchButton.addEventListener('touchstart', () => tapFeedback(this.switchButton));
              switchButton.addEventListener('click', function(e) {
                  if (e.target.closest('ha-icon')) { //e.target === this.querySelector('ha-icon')
                      fireEvent(this, "hass-more-info", { entityId: entityId });
                  } else {
                      toggleEntity(entityId);
                  }
              });
              //switchButton.addEventListener('touchend', () => toggleEntity(entityId));
              this.eventAdded = true;
          }
          else if (!this.eventAdded && buttonType === 'slider') {
              rangeSlider.addEventListener('mousedown', handleStart);
              rangeSlider.addEventListener('touchstart', handleStart);
              this.eventAdded = true;
          }
          
          if (!isDragging && buttonType === 'slider') {
              this.rangeFill.style.transition = 'all .2s';
              if (entityId.startsWith("light.")) {
                  this.rangeFill.style.transform = `translateX(${(currentBrightness / 255) * 100}%)`;
              }
              else if (entityId.startsWith("media_player.")) {
                  this.rangeFill.style.transform = `translateX(${currentVolume * 100}%)`;
              }
          }
          
          function updateButtonStyle(state, content) {
              content.buttonContainer.style.opacity = state !== 'unavailable' ? '1' : '0.5';
              if (buttonType === 'switch') {
                  const backgroundColor = state === 'on' ? 'var(--accent-color)' : 'rgba(0,0,0,0)';
                  content.switchButton.style.backgroundColor = backgroundColor;
              }
          }
                  
          updateButtonStyle(state, this);
          
          function updateRange(x) {
              const rect = rangeSlider.getBoundingClientRect();
              const position = Math.min(Math.max(x - rect.left, 0), rect.width);
              const percentage = position / rect.width;
              if (entityId.startsWith("light.")) {
                  brightness = Math.round(percentage * 255);
              }
              else if (entityId.startsWith("media_player.")) {
                  volume = percentage;
              }
          
              rangeFill.style.transition = 'none';
              rangeFill.style.transform = `translateX(${percentage * 100}%)`;
          }
          
          if (buttonType === 'slider') {
              const rgbColor = hass.states[entityId].attributes.rgb_color;
              const rgbColorOpacity = rgbColor ? `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.5)` : `rgba(255, 255, 255, 0.5)`;
              rangeFill.style.backgroundColor = rgbColorOpacity;
              this.rangeFill.style.backgroundColor = rgbColorOpacity;
          }
          
          if (!this.styleAdded) {
              const styleElement = document.createElement('style');
              const styles = `
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
                  z-index: 1;
                  width: 100%;
                  left: -100%;
              }
              
              .icon-container {
                  position: absolute;
                  z-index: 2;
                  width: 38px;
                  height: 38px;
                  margin: 6px;
                  border-radius: 50%;
                  background-color: var(--card-background-color,var(--ha-card-background));
              }
              
              ha-icon {
                  display: flex;
                  position: absolute;
                  margin: inherit;
                  padding: 2px;
                  width: 22px; 
                  height: 22px;
                  cursor: pointer !important;
              }
              
              .nameContainer {
                  position: relative;
                  margin-left: 58px;
                  z-index: 2;
                  font-weight: 600;
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
              
              styleElement.innerHTML = styles;
              this.content.appendChild(styleElement);
              this.styleAdded = true;
          } 
          if (this.editor === 'true') {
            if (!this.editorStyleAdded) {
              this.content.style.border = '2px solid white !important';
              this.editorStyleAdded = true;
            }
          }
          // } else {
          //     this.content.style.border = 'none !important';
          //     //this.editorStyleAdded = false;
          // }
      }
      
      // Initialize separator
      if (this.config.card_type === 'separator') {
          const icon = !this.config.icon ? '' : this.config.icon;
          const name = !this.config.name ? '' : this.config.name;
          
          if (!this.separatorAdded) {
              const separatorContainer = document.createElement("div");
              separatorContainer.setAttribute("class", "separator-container");
              separatorContainer.style.display = 'flex';
              separatorContainer.innerHTML = `
                <div>
                  <ha-icon icon="${icon}" style="display: inline-block; height: 24px; width: 24px; margin: 0 20px 0 8px; transform: translateY(-2px);"></ha-icon>
                  <h4 style="display: inline-block; margin: 3px 20px 0 0; font-size: 17px;">${name}</h4>
                </div>
                <div style="display: flex; border-radius: 6px; opacity: 0.3; margin-left: 10px; flex-grow: 1; height: 6px; align-self: center; background-color: var(--background-color,var(--secondary-background-color));"></div>
                `
              this.content.appendChild(separatorContainer);
              this.separatorAdded = true;
          }
      }
      
      // Initialize cover card
      if (this.config.card_type === 'cover') {
          const entity = this.config.entity;
          const iconOpen = this.config.icon_open ? this.config.icon_open : 'mdi:window-shutter-open';
          const iconClosed = this.config.icon_close ? this.config.icon_close : 'mdi:window-shutter'
          const icon = hass.states[this.config.entity].state === 'open' ? iconOpen : iconClosed;
          const name = !this.config.name ? hass.states[entityId].attributes.friendly_name || '' : this.config.name;
          const openCover = !this.config.open_service ? 'cover.open_cover' : this.config.open_service;
          const closeCover = !this.config.close_service ? 'cover.close_cover' : this.config.close_service;
          const stopCover = !this.config.stop_service ? 'cover.stop_cover' : this.config.stop_service;
  
          
          if (!this.coverAdded) {
              const coverContainer = document.createElement("div");
              coverContainer.setAttribute("class", "cover-container");
              coverContainer.innerHTML = `
                <div class="header-container">
                  <div class="icon-container">
                  </div>
                  <p class="name">${name}</p>
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
                </div>`
              this.content.appendChild(coverContainer);
              
              const openButton = coverContainer.querySelector('.open');
              const stopButton = coverContainer.querySelector('.stop');
              const closeButton = coverContainer.querySelector('.close');
              
              openButton.addEventListener('click', () => {
                  hass.callService(openCover.split('.')[0], openCover.split('.')[1], { entity_id: entity });
              });
              stopButton.addEventListener('click', () => {
                  hass.callService(stopCover.split('.')[0], stopCover.split('.')[1], { entity_id: entity });
              });
              closeButton.addEventListener('click', () => {
                  hass.callService(closeCover.split('.')[0], closeCover.split('.')[1], { entity_id: entity });
              });
              
              this.content.querySelector('.icon-container').addEventListener('mouseup', event => {
                  fireEvent(this, "hass-more-info", { entityId: entity });
              });
              
              this.coverAdded = true;
          }
          
          this.content.querySelector('.icon-container').innerHTML = `<ha-icon icon="${icon}" class="icon"></ha-icon>`;
          
          if (!this.styleAdded) {
              const styleElement = document.createElement('style');
              const styles = `
              ha-card {
                  margin-top: 0 !important;
                  background: none !important;
              }
              
              .header-container {
                  display: flex;
                  align-items: center;
                  margin-bottom: 10px;
              }
              
              .name {
                  display: inline-block; 
                  margin-left: 10px;
                  font-weight: 600;
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
                  z-index: 2;
                  width: 48px;
                  height: 48px;
                  margin: 6px;
                  border-radius: 50%;
                  background-color: var(--card-background-color,var(--ha-card-background));
                  border: 6px solid var(--background-color-2,var(--secondary-background-color));
                  box-sizing: border-box;
              }
              
              .buttons-container {
                  display: grid;
                  align-self: center;
                  grid-auto-flow: column;
                  grid-gap: 18px;             
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
              
              styleElement.innerHTML = styles;
              this.content.appendChild(styleElement);
              this.styleAdded = true;
          } 
      }    
      
      // Intitalize empty card
      if (this.config.card_type === 'empty-column') {
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
      }
    }
  
    // The user supplied configuration. Throw an exception and Home Assistant
    // will render an error card.
    setConfig(config) {
      // if (!config.card_type) {
      //   throw new Error("You need to define a card type (card_type: pop-up)");
      // }
      if (config.card_type === 'pop-up') {
          //if (!config.entity) {
          //  throw new Error("You need to define an entity");
          //}
          if (!config.hash) {
            throw new Error("You need to define an hash");
          }
          if (!config.icon) {
            throw new Error("You need to define an icon");
          }
          // Need to put a condition
          //if (!config.room_temperature_sensor) {
          //  throw new Error("You need to define a temperature sensor");
          //}
          if (!config.name) {
            throw new Error("You need to define a name");
          }
      }
      this.config = config;
    }
    
  //   static getStubConfig() {
  //     // const firstLight = Object.keys(this.hass.states).find((eid) => eid.substr(0, eid.indexOf(".")) === "light");
  //     // console.log(firstLight);
  //     return { 
  //         card_type: 'pop-up', 
  //         name: 'Bubble Card',
  //         icon: 'mdi:heart',
  //         hash: '#######',
  //     }
  //   }
    
    getCardSize() {
      return 1;
    }
    
    static getConfigElement() {
      return document.createElement("bubble-card-editor");
    }
  }
  
  console.info(
      '%c Bubble Card %c 0.0.1 ',
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
      this._config = { ...config };
    }
  
    static get properties() {
      return { hass: {}, _config: {} };
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
    
    get _state_unit() {
      return this._config.state_unit || '';
    }
    
    get _hash() {
      return this._config.hash || '#pop-up-name';
    }
    
    get _margin_top() {
      return this._config.margin_top || '0px';
    }
    
    get _width_desktop() {
      return this._config.width_desktop || '600px';
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
  
    render() {
      if (!this.hass) {
        return html``;
      }
      
      const editorEvent = new CustomEvent("editor-event", { bubbles: true });
      document.dispatchEvent(editorEvent);
     
      const cardTypeList = [
          'button', 
          'cover',
          'empty-column',
          'horizontal-buttons-stack',
          'pop-up',
          'separator'
      ];
      
      const buttonTypeList = [
          'switch', 
          'slider'
      ];
      
      const allEntitiesList = Object.keys(this.hass.states);
  
      const lightList = Object.keys(this.hass.states).filter(
        (eid) => eid.substr(0, eid.indexOf(".")) === "light"
      );
      
      const sensorList = Object.keys(this.hass.states).filter(
        (eid) => eid.substr(0, eid.indexOf(".")) === "sensor"
      );
      
      const coverList = Object.keys(this.hass.states).filter(
        (eid) => eid.substr(0, eid.indexOf(".")) === "cover"
      );
      
      // console.log(document.querySelector("body > home-assistant").shadowRoot.querySelector("hui-dialog-edit-card").shadowRoot.querySelector("ha-dialog > div.content > div.element-preview > hui-card-preview"));
      
      // this.shadowRoot.querySelector("ha-card").style.border = '1px solid white !important';
      
      if (this._config.card_type === 'pop-up') {
          return html`
            <div class="card-config">
                ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                <ha-alert alert-type="info">This card allows you to convert any vertical-stack into a pop-up. Each pop-up can be opened by targeting its link (e.g. '#pop-up-name'), with navigation_path or with the horizontal buttons stack that is included.<br><br>It must be placed within a vertical-stack card at the top most position to function properly.</ha-alert>
                <ha-textfield
                  label="Hash (e.g. #kitchen)"
                  .value="${this._hash}"
                  .configValue="${"hash"}"
                  @input="${this._valueChanged}"
                  style="width: 100%;"
                ></ha-textfield>
                <ha-textfield
                  label="Name"
                  .value="${this._name}"
                  .configValue="${"name"}"
                  @input="${this._valueChanged}"
                  style="width: 100%;"
                ></ha-textfield>
                ${this.makeDropdown("Icon", "icon")}
                ${this.makeDropdown("Entity to toggle (e.g. room light group)", "entity", allEntitiesList)}
                ${this.makeDropdown("Entity state to display (e.g. room temperature)", "state", allEntitiesList)}
                <ha-textfield
                  label="Unit of measurement (e.g. °F, °C, %)"
                  .value="${this._state_unit}"
                  .configValue="${"state_unit"}"
                  @input="${this._valueChanged}"
                  style="width: 100%;"
                ></ha-textfield>
                <ha-textfield
                  label="Width on desktop (100% by default on mobile)"
                  .value="${this._width_desktop}"
                  .configValue="${"width_desktop"}"
                  @input="${this._valueChanged}"
                  style="width: 100%;"
                ></ha-textfield>
                <ha-textfield
                  label="Margin top (e.g. 50% for an half sized pop-up)"
                  .value="${this._margin_top}"
                  .configValue="${"margin_top"}"
                  @input="${this._valueChanged}"
                  style="width: 100%;"
                ></ha-textfield>
                ${this.makeVersion()}
            </div>
          `;
      } else if (this._config.card_type === 'button') {
          return html`
            <div class="card-config">
                ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                <ha-alert alert-type="info">This card can be a slider or a button, allowing you to toggle your entities, control the brightness of your lights and the volume of your media players. To access color / control of an entity, simply tap on the icon.</ha-alert>
                ${this.makeDropdown("Button type", "button_type", buttonTypeList)}
                <ha-textfield
                  label="Name"
                  .value="${this._name}"
                  .configValue="${"name"}"
                  @input="${this._valueChanged}"
                  style="width: 100%;"
                ></ha-textfield>
                ${this.makeDropdown("Icon", "icon")}
                ${this.makeDropdown(this._button_type !== 'slider' ? "Entity (toggle)" : "Entity (light or media_player)", "entity", allEntitiesList)}
                ${this.makeVersion()}
            </div>
          `;
      } else if (this._config.card_type === 'separator') {
          return html`
            <div class="card-config">
                ${this.makeDropdown("Card type", "card_type", cardTypeList)}
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
              
              while (this._config[(this.buttonIndex + 1) + '_name']) {
                  this.buttonIndex++;
              }
  
              addButton.addEventListener("click", () => {
                  this.buttonIndex++;
                  fireEvent(this, "config-changed", { config: this._config });
              });
          
              this.buttonAdded = true;
          }
          fireEvent(this, "config-changed", { config: this._config });
          
          return html`
              <div class="card-config">
                  ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                  <ha-alert alert-type="info">This card is the companion to the pop-up card, allowing you to open the corresponding pop-ups. It also allows you to open any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.<br><br>Please note that this card may take some time to load in edit mode.</ha-alert>
                  <ha-formfield .label="Auto order">
                      <ha-switch
                        aria-label="Toggle auto order"
                        .checked=${this._config.auto_order}
                        .value=${this._config.auto_order}"
                        .configValue="${"auto_order"}"
                        @change=${this._valueChanged}
                      ></ha-switch>
                      <div class="mdc-form-field">
                          <label class="mdc-label">Auto order (Presence/occupancy sensors needed)</label> 
                      </div>
                  </ha-formfield>
                  <div id="buttons-container">
                      ${this.makeButton()}
                  </div>
                  <button id="add-button">Add Button</button>
                  ${this.makeVersion()}
              </div>
          `;
      } else if (this._config.card_type === 'cover') {
          return html`
            <div class="card-config">
                ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                <ha-alert alert-type="info">This card allows you to...</ha-alert>
                ${this.makeDropdown("Entity", "entity", coverList)}
                <ha-textfield
                  label="Name"
                  .value="${this._name || ''}"
                  .configValue="${"name"}"
                  @input="${this._valueChanged}"
                  style="width: 100%;"
                ></ha-textfield>
                <ha-textfield
                  label="Open service (cover.open_cover by default)"
                  .value="${this._open_service}"
                  .configValue="${"open_service"}"
                  @input="${this._valueChanged}"
                  style="width: 100%;"
                ></ha-textfield>
                <ha-textfield
                  label="Stop service (cover.stop_cover by default)"
                  .value="${this._stop_service}"
                  .configValue="${"stop_service"}"
                  @input="${this._valueChanged}"
                  style="width: 100%;"
                ></ha-textfield>
                <ha-textfield
                  label="Close service (cover.close_cover by default)"
                  .value="${this._close_service}"
                  .configValue="${"close_service"}"
                  @input="${this._valueChanged}"
                  style="width: 100%;"
                ></ha-textfield>
                ${this.makeDropdown("Open icon", "icon_open")}
                ${this.makeDropdown("Closed icon", "icon_closed")}
                ${this.makeVersion()}
            </div>
          `;
      } else if (this._config.card_type === 'empty-column') {
          return html`
            <div class="card-config">
                ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                <ha-alert alert-type="info">Just an empty card to fill any empty column.</ha-alert>
                ${this.makeVersion()}
            </div>
          `;
      } else if (!this._config.card_type) {
          return html`
            <div class="card-config">
                ${this.makeDropdown("Card type", "card_type", cardTypeList)}
                <ha-alert alert-type="info">You need to add a card type first.</ha-alert>
                ${this.makeVersion()}
            </div>
          `;
      }
    }
  
      makeDropdown(label, configValue, items) {
        const formateList = item => ({icon: item, label: item, value: item}) ;
        const hass = this.hass;
  
        if (label === 'Icon' || label === 'Open icon' || label === 'Closed icon') {
            return html`
              <div>
                <ha-icon-picker
                  label="${label}"
                  .value="${this['_' + configValue]}"
                  .configValue="${configValue}"
                  item-label-path="label"
                  item-value-path="value"
                  @value-changed="${this._valueChanged}"
                >
                </ha-icon-picker>
              </div>
            `;   
        } else if (label === 'Entity' || label === 'Temperature sensor' || label === 'Light') { 
            return html`
              <div>
                <ha-combo-box
                  label="${label}"
                  .value="${this['_' + configValue]}"
                  .configValue="${configValue}"
                  .items="${items.map(formateList)}"
                  item-label-path="label"
                  item-value-path="value"
                  @value-changed="${this._valueChanged}"
                >
                </ha-combo-box>
              </div>
            `;      
        } else {
            return html`
              <div>
                <ha-combo-box
                  label="${label}"
                  .value="${this['_' + configValue]}"
                  .configValue="${configValue}"
                  .items="${items.map(formateList)}"
                  item-label-path="label"
                  item-value-path="value"
                  @value-changed="${this._valueChanged}"
                >
                </ha-combo-box>
              </div>
            `;       
        }
      }
      
      makeButton() {
          let buttons = [];
          const allEntitiesList = Object.keys(this.hass.states);
          const binarySensorList = Object.keys(this.hass.states).filter(
              (eid) => eid.substr(0, eid.indexOf(".")) === "binary_sensor"
          );
          const formateList = item => ({icon: item, label: item, value: item}) ;
  
          for (let i = 1; i <= this.buttonIndex; i++) {
              buttons.push(html`
                  <div class="${i}_button">
                      <div class="button-header">
                          <ha-icon class="remove-button" icon="mdi:close" @click=${() => this.removeButton(i)}></ha-icon>
                          <span class="button-number">Button ${i}</span>
                      </div>
                      <ha-textfield
                          label="Name"
                          .value="${this._config[i + '_name']}"
                          .configValue="${i}_name"
                          @input="${this._valueChanged}"
                          style="width: 100%;"
                      ></ha-textfield>
                      <ha-icon-picker
                          label="Icon"
                          .value="${this._config[i + '_icon']}"
                          .configValue="${i}_icon"
                          item-label-path="label"
                          item-value-path="value"
                          @value-changed="${this._valueChanged}"
                      ></ha-icon-picker>
                      <ha-textfield
                          label="Link / Hash to pop-up (e.g. #kitchen)"
                          .value="${this._config[i + '_link'] || ''}"
                          .configValue="${i}_link"
                          @input="${this._valueChanged}"
                          style="width: 100%;"
                      ></ha-textfield>
                      <ha-combo-box
                          label="Light / Light group (For background color)"
                          .value="${this._config[i + '_entity']}"
                          .configValue="${i}_entity"
                          .items="${allEntitiesList.map(formateList)}"
                          item-label-path="label"
                          item-value-path="value"
                          @value-changed="${this._valueChanged}"
                        >
                      </ha-combo-box>
                      <ha-combo-box
                          label="Presence / Occupancy sensor (For button auto order)"
                          .value="${this._config[i + '_pir_sensor']}"
                          .configValue="${i}_pir_sensor"
                          .disabled=${!this._config.auto_order}
                          .items="${binarySensorList.map(formateList)}"
                          item-label-path="label"
                          item-value-path="value"
                          @value-changed="${this._valueChanged}"
                        >
                      </ha-combo-box>
                  </div>
              `);
          }
          fireEvent(this, "config-changed", { config: this._config });
          return buttons;
      }
      makeVersion() {
        const version = "0.0.1";
        return html`
          <h4>Bubble Card <span style="font-size: 10px;">0.0.1</span></h4>
        `;
      }
  
    removeButton(index) {
      // Suppression des champs du bouton
      delete this._config[index + '_name'];
      delete this._config[index + '_icon'];
      delete this._config[index + '_link'];
      delete this._config[index + '_entity'];
      delete this._config[index + '_pir_sensor'];
  
      // Mise à jour des index des boutons suivants
      for (let i = index; i < this.buttonIndex; i++) {
          this._config[i + '_name'] = this._config[(i + 1) + '_name'];
          this._config[i + '_icon'] = this._config[(i + 1) + '_icon'];
          this._config[i + '_link'] = this._config[(i + 1) + '_link'];
          this._config[i + '_entity'] = this._config[(i + 1) + '_entity'];
          this._config[i + '_pir_sensor'] = this._config[(i + 1) + '_pir_sensor'];
      }
  
      // Suppression des champs du dernier bouton
      delete this._config[this.buttonIndex + '_name'];
      delete this._config[this.buttonIndex + '_icon'];
      delete this._config[this.buttonIndex + '_link'];
      delete this._config[this.buttonIndex + '_entity'];
      delete this._config[this.buttonIndex + '_pir_sensor'];
  
      // Mise à jour de l'index du dernier bouton
      this.buttonIndex--;
  
      fireEvent(this, "config-changed", { config: this._config });
    }
    
      _valueChanged(ev) {
        console.log("Value changed");
        if (!this._config || !this.hass) {
          return;
        }
        const target = ev.target;
      //   if (this[`_${target.configValue}`] === target.value) {
      //     return;
      //   }
        if (target.configValue) {
          // Affiche la valeur de this._config avant la mise à jour
          console.log("Before update:", this._config);
          // if (target.value === "") {
          //   delete this._config[target.configValue];
          // } else {
            this._config = {
              ...this._config,
              [target.configValue]:
                target.checked !== undefined || ev.detail.value ? target.checked || ev.detail.value : target.value || ev.detail.value,
          //   };
          }
          // Affiche la valeur de this._config après la mise à jour
          console.log("After update:", this._config);
        }
        fireEvent(this, "config-changed", { config: this._config });
      }
  
    
  //   _valueChanged(ev) {
  //     console.log("Value changed");
  //     if (!this._config || !this.hass) {
  //       return;
  //     }
  //     const target = ev.target;
  //     if (this[`_${target.configValue}`] === target.value) {
  //       return;
  //     } 
  //     if (target.configValue) {
  //       if (target.value === "") {
  //         delete this._config[target.configValue];
  //       } else {
  //         this._config = {
  //           ...this._config,
  //           [target.configValue]:
  //             target.checked !== undefined || ev.detail.value ? target.checked || ev.detail.value : target.value,
  //         };
  //       }
  //     }
  //     fireEvent(this, "config-changed", { config: this._config });
  //   }
  
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
      description: "A cards collection for Home Assistant with a nice pop-up touch.",
  });
  
  // FINAL BETA
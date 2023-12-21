import { 
    addStyles, 
    createIcon, 
    updateIcon, 
    isColorCloseToWhite,
    convertToRGBA,
    getIconColor,
    getIconStyles
} from '../tools/style.ts';
import { 
    initializeContent,
    checkEditor,
    checkResources
} from '../tools/init.ts';
import { 
    fireEvent,
    forwardHaptic,
    navigate,
    toggleEntity,
    hasStateChanged
} from '../tools/utils.ts';
import { addActions } from '../tools/tap-actions.ts';
import { getVariables } from '../var/cards.ts';

export function handlePopUp(context) {

    const hass = context._hass;
    const editor = context.editor;
    const config = context.config;

	if (!hass) { 
		return;
	}

    let {
		customStyles,
		entityId,
		icon,
		name,
		widthDesktop,
		widthDesktopDivided,
		isSidebarHidden,
		state,
		stateChanged,
		stateOn,
		formatedState,
		riseAnimation,
		marginCenter,
		popUpOpen,
		rgbaColor,
		rgbColor,
		bgOpacity,
		shadowOpacity,
		bgBlur,
		iconColorOpacity,
		iconColor,
		iconFilter,
		iconStyles,
		haStyle,
		themeBgColor,
		color,
    } = getVariables(context, config, hass, editor);

    let autoClose = config.auto_close || false;
    let popUpHash = config.hash;
    let triggerEntity = config.trigger_entity ? config.trigger_entity : '';
    let triggerState = config.trigger_state ? config.trigger_state : '';
    let triggerClose = config.trigger_close ? config.trigger_close : false;
    let startTouchY;
    let lastTouchY;

	if (context.errorTriggered) {
	    return;
	}

	if (!context.initStyleAdded && !context.popUp && !editor) {
	    // Hide vertical stack content before initialization
	    context.card.style.marginTop = '4000px';
	    context.initStyleAdded = true;
	}

	const createPopUp = () => {   
        let popUp = context.popUp;
        let text = config.text || '';
        let stateEntityId = config.state;
        let marginTopMobile = config.margin_top_mobile 
            ? (config.margin_top_mobile !== '0' ? config.margin_top_mobile : '0px')
            : '0px';
        let marginTopDesktop = config.margin_top_desktop 
            ? (config.margin_top_desktop !== '0' ? config.margin_top_desktop : '0px')
            : '0px';
        let displayPowerButton = config.entity ? 'flex' : 'none';
        state = stateEntityId ? hass.states[stateEntityId].state : '';
       	formatedState = stateEntityId ? hass.formatEntityState(hass.states[stateEntityId]) : '';
        let closeTimeout;
        let rgbaBgColor;

        if (!context.headerAdded) {
            const headerContainer = document.createElement("div");
            headerContainer.setAttribute("id", "header-container");
        
            const div = document.createElement("div");
            headerContainer.appendChild(div);
        
            const iconContainer = document.createElement("div");
            iconContainer.setAttribute("class", "icon-container");
            div.appendChild(iconContainer);

            createIcon(context, entityId, icon, iconContainer, editor);
            addActions(iconContainer, config, hass, forwardHaptic);

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

            context.content.appendChild(headerContainer);
            context.header = div;

            context.headerAdded = true;
        } else if (entityId) {
            const iconContainer = context.content.querySelector("#header-container .icon-container");
            const h2 = context.content.querySelector("#header-container h2");
            const p = context.content.querySelector("#header-container p");
            const haIcon2 = context.content.querySelector("#header-container .power-button");
            
            iconContainer.innerHTML = ''; // Clear the container
            createIcon(context, entityId, icon, iconContainer, editor);

            h2.textContent = name;
            p.textContent = formatedState;
            haIcon2.setAttribute("style", `display: ${displayPowerButton};`);
        }
        
        if (!context.eventAdded && !editor) {
            window['checkHashRef_' + popUpHash] = checkHash;
            window.addEventListener('urlChanged', window['checkHashRef_' + popUpHash], { passive: true });
			window.addEventListener('click', function(e) {
			    // Reset auto close
			    location.hash === popUpHash && resetAutoClose();
			    
			    if (!window.justOpened) {
			        return;
			    }
			    
			    const target = e.composedPath();
			    
			    if (
			    	target 
			    	&& !target.some(el => el.nodeName === 'HA-MORE-INFO-DIALOG') 
			    	&& !target.some(el => el.id === 'root' 
			    	&& !el.classList.contains('close-pop-up')) 
			    	&& popUpOpen === popUpHash + true
			    ){
		            setTimeout(function() {
		            	if (location.hash === popUpHash) {
			                popUpOpen = popUpHash + false;
			                history.replaceState(null, null, location.href.split('#')[0]);
			                localStorage.setItem('isManuallyClosed_' + popUpHash, true);
			            }
		            }, 0);
			    }
			}, { passive: true });

            context.eventAdded = true;
        }
        
        function powerButtonClickHandler() {
            toggleEntity(hass, entityId);
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
            context.rgbColor = rgbColor 
                ? (!isColorCloseToWhite(rgbColor) ? `rgb(${rgbColor})` : 'rgb(255,220,200)')
                : (stateOn 
                ? (entityId.startsWith("light.") ? 'rgba(255,220,200, 0.5)' : 'var(--accent-color)') 
                : 'rgba(255, 255, 255, 1');

            context.rgbColorOpacity = rgbColor
                ? (!isColorCloseToWhite(rgbColor) ? `rgba(${rgbColor}, 0.5)` : 'rgba(255,220,200, 0.5)')
                : (entityId && stateOn 
                    ? (entityId.startsWith("light.") ? 'rgba(255,220,200, 0.5)' : 'var(--accent-color)') 
                    : 'var(--background-color,var(--secondary-background-color))');

            rgbaBgColor = convertToRGBA(color, 0);

            context.iconFilter = rgbColor ? 
                (!isColorCloseToWhite(rgbColor) ? 'brightness(1.1)' : 'none') :
                'none';
        } else {
        	rgbaBgColor = convertToRGBA(color, 0);
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
        
        let content = context.content;

		function pauseVideos(root, pause) {
		    var videos = root.querySelectorAll('video');
		    for (var i=0; i<videos.length; i++){
		    	var isPlaying = videos[i] && videos[i].currentTime > 0 && !videos[i].paused && !videos[i].ended && videos[i].readyState > videos[i].HAVE_CURRENT_DATA;
		        if (pause && isPlaying) {
		            videos[i].pause();
		        } else if (!pause && !isPlaying) {
		            videos[i].play();
		            if (videos[i].currentTime > 0) {
		                videos[i].currentTime = 10000;
		            }
		        }
		    }

		    var nodes = root.querySelectorAll('*');
		    for(var i=0; i<nodes.length; i++){
		        if(nodes[i].shadowRoot){
		            pauseVideos(nodes[i].shadowRoot, pause);
		        }
		    }
		}
        
        function openPopUp() {	            
            setTimeout(function() {
                popUp.classList.remove('close-pop-up');
                popUp.classList.add('open-pop-up');
                content.querySelector('.power-button').addEventListener('click', powerButtonClickHandler, { passive: true });
                window.addEventListener('keydown', windowKeydownHandler, { passive: true });
                popUp.addEventListener('touchstart', popUpTouchstartHandler, { passive: true });
                popUp.addEventListener('touchmove', popUpTouchmoveHandler, { passive: true });
                popUpOpen = popUpHash + true;
                document.body.style.overflow = 'hidden'; // Fix scroll inside pop-ups only
                setTimeout(() => { window.justOpened = true; }, 10);
                pauseVideos(popUp, false);
                resetAutoClose();
            }, 0);
        }
        
        function closePopUp() {
        	setTimeout(function() {
	            popUp.classList.remove('open-pop-up');
	            popUp.classList.add('close-pop-up');
	            content.querySelector('.power-button').removeEventListener('click', powerButtonClickHandler);
	            window.removeEventListener('keydown', windowKeydownHandler);
	            popUp.removeEventListener('touchstart', popUpTouchstartHandler);
	            popUp.removeEventListener('touchmove', popUpTouchmoveHandler);
	            popUpOpen = popUpHash + false;
	            document.body.style.overflow = '';
	            window.justOpened = false;
	            clearTimeout(closeTimeout);
            }, 0);
            
            setTimeout(function() {
            	pauseVideos(popUp, true);
            }, 320);
        }
        
        function resetAutoClose() {
            // Clear any existing timeout
            clearTimeout(closeTimeout);
            // Start autoclose if enabled
            if (autoClose > 0) {
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
                ${config.bg_color || config.bg_opacity ? "--bubble-pop-up-background-custom: " + rgbaColor : ''};
                background-color: var(--bubble-pop-up-background-custom, var(--bubble-pop-up-background));
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
            #root.hidden {
            	display: none !important;
            }
            #root > :first-child::after {
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
            #root > :first-child {
                position: sticky;
                top: 0;
                z-index: 1;
                background: none !important;
                overflow: visible;
            }
            #root.open-pop-up {
                /*will-change: transform;*/
                transform: translateY(-120%);
                transition: transform .36s !important;
            }
            #root.open-pop-up > * {
              /* Block child items to overflow and if they do clip them */
              /*max-width: calc(100vw - 38px);*/
              max-width: 100% !important;
              /*overflow-x: clip;*/
            }
            #root.close-pop-up { 
                transform: translateY(-20%);
                transition: transform .4s !important;
                box-shadow: none;
            }
            @media only screen and (min-width: 600px) {
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
            ${iconStyles}

            ha-card {
                margin-top: 0 !important;
            }
            #header-container {
                display: inline-flex;
                ${!icon && !name && !entityId && !state && !text ? 'flex-direction: row-reverse;' : ''}
                height: 50px;
                width: 100%;
                margin: 0;
                padding: 0;
            }
            #header-container > div {
                display: ${!icon && !name && !entityId && !state && !text ? 'none' : 'inline-flex'};
                align-items: center;
                position: relative;
                padding-right: 6px;
                z-index: 1;
                flex-grow: 1;
                background-color: ${entityId ? context.rgbColorOpacity : 'var(--background-color,var(--secondary-background-color))'};
                transition: background 1s;
                border-radius: 25px;
                margin-right: 14px;
                backdrop-filter: blur(14px);
                -webkit-backdrop-filter: blur(14px);
            }
            #header-container h2 {
                display: inline-flex;
                margin: 0 18px 0 0;
                padding: 4px;
                z-index: 1;
                font-size: 18px;
            }
            #header-container p {
                display: inline-flex;
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

        if (!context.popUpStyleAdded) {
            addStyles(hass, context, popUpStyles, customStyles, state, entityId, '', '', popUp);
            context.popUpStyleAdded = true;
        }

        addStyles(hass, context, headerStyles, customStyles, state, entityId, stateChanged); 
	}

	// Initialize pop-up

	let initPopUp = setTimeout(() => {
	    let element = context.getRootNode().querySelector('#root');
	    if (
	    	element && 
	    	(
	    		!context.popUp 
	    		|| stateChanged 
	    		|| (editor && !context.editorModeAdded)
    		)
    	){
	        context.popUp = element;
	        createPopUp();
            const initEvent = new Event('popUpInitialized');
            window.dispatchEvent(initEvent);

            if (editor) {
            	context.popUp.classList.add('editor');
            	context.editorModeAdded = true;
            }
	    } else if (!editor && context.popUp) {
	    	context.popUp.classList.remove('editor');
	    	context.editorModeAdded = false;
	    }
	}, 0);

	// Pop-up triggers

	if (context.popUp && triggerEntity && stateChanged) {
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
	    } else if (hass.states[triggerEntity].state !== triggerState && triggerClose && context.popUp.classList.contains('open-pop-up') && isTriggered && !isManuallyClosed) {
	        history.replaceState(null, null, location.href.split('#')[0]);
	        popUpOpen = popUpHash + false;
	        isTriggered = false;
	        isManuallyClosed = true;
	        localStorage.setItem('isManuallyClosed_' + popUpHash, isManuallyClosed);
	        localStorage.setItem('isTriggered_' + popUpHash, isTriggered);
	    }
	}
}
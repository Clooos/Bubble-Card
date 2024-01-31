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

let oldTriggerEntityState;

export function handlePopUp(context) {

    const hass = context._hass;
    const editor = context.editor;
    const config = context.config;

    if (!hass) { 
        return;
    }

    if (context.errorTriggered) {
        return;
    }

    if (!context.initStyleAdded && !context.popUp && !editor) {
        // Hide vertical stack content before initialization
        context.card.style.marginTop = '4000px';
        context.initStyleAdded = true;
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
    let displayPowerButton = config.entity ? 'flex' : 'none';
    let text = config.text || '';
    let stateEntityId = config.state;
    let closeOnClick = config.close_on_click || false;
    let marginTopMobile = config.margin_top_mobile 
        ? (config.margin_top_mobile !== '0' ? config.margin_top_mobile : '0px')
        : '0px';
    let marginTopDesktop = config.margin_top_desktop 
        ? (config.margin_top_desktop !== '0' ? config.margin_top_desktop : '0px')
        : '0px';
    state = stateEntityId && hass.states[stateEntityId] ? hass.states[stateEntityId].state : '';
    let startTouchY;
    let lastTouchY;
    let closeTimeout;
    let rgbaBgColor;

    function removeHash() {
	    history.replaceState(null, null, location.href.split('#')[0]);
        fireEvent(window, "location-changed", true);
	}

	function createHeader() {
	    if (!context.headerAdded) {
	        context.headerContainer = document.createElement("div");
	        context.headerContainer.setAttribute("id", "header-container");

	        context.div = document.createElement("div");
	        context.headerContainer.appendChild(context.div);

	        context.iconContainer = document.createElement("div");
	        context.iconContainer.setAttribute("class", "icon-container");
	        context.div.appendChild(context.iconContainer);

	        createIcon(context, entityId, icon, context.iconContainer, editor);
	        addActions(context.iconContainer, config, hass, forwardHaptic);

	        context.h2 = document.createElement("h2");
	        context.h2.textContent = name;
	        context.div.appendChild(context.h2);

	        context.p = document.createElement("p");
	        context.p.textContent = formatedState;
	        context.div.appendChild(context.p);

	        context.haIcon2 = document.createElement("ha-icon");
	        context.haIcon2.setAttribute("class", "power-button");
	        context.haIcon2.setAttribute("icon", "mdi:power");
	        context.haIcon2.setAttribute("style", `display: ${displayPowerButton};`);
	        context.div.appendChild(context.haIcon2);

	        context.button = document.createElement("button");
	        context.button.setAttribute("class", "close-pop-up");
	        context.button.onclick = function() { 
	        	removeHash();
	            localStorage.setItem('isManuallyClosed_' + popUpHash, true);
	        }; 
	        context.headerContainer.appendChild(context.button);

	        context.haIcon3 = document.createElement("ha-icon");
	        context.haIcon3.setAttribute("icon", "mdi:close");
	        context.button.appendChild(context.haIcon3);

	        context.content.appendChild(context.headerContainer);
	        context.header = context.div;

	        context.headerAdded = true;
	    } else if (entityId) {
	        context.iconContainer.innerHTML = ''; // Clear the container
	        createIcon(context, entityId, icon, context.iconContainer, editor);

	        context.h2.textContent = name;
	        context.p.textContent = formatedState;
	        context.haIcon2.setAttribute("style", `display: ${displayPowerButton};`);
	    }
	}

	function closePopUpByClickingOutside(e) {
	    // Reset auto close
	    window.hash === popUpHash && resetAutoClose();

	    const target = e.composedPath();

	    if (
	        target 
	        && !target.some(el => el.nodeName === 'HA-MORE-INFO-DIALOG') 
	        && !target.some(el => el.id === 'root' 
	        && !el.classList.contains('close-pop-up'))
	    ){
	        const close = setTimeout(function() {
	            if (window.hash === popUpHash) { //&& !closeOnClick
					removeHash();
                    localStorage.setItem('isManuallyClosed_' + popUpHash, true);
	            } 
	        }, 100);
	    }
	}

    function resetAutoClose() {
        // Clear any existing timeout
        clearTimeout(closeTimeout);
        // Start autoclose if enabled
        if (autoClose > 0) {
            closeTimeout = setTimeout(removeHash, autoClose);
        }
    }

    function powerButtonClickHandler() {
        toggleEntity(hass, entityId);
    }

    function windowKeydownHandler(e) {
        if (e.key === 'Escape') {
			removeHash();
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
            removeHash();
            localStorage.setItem('isManuallyClosed_' + popUpHash, true)
        }

        // Update the Y position of the last touch
        lastTouchY = event.touches[0].clientY;
    }

    function updateColor() {
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
    }

    function checkHash() {
        if (!editor) {
            window.hash = location.hash.split('?')[0];

            // Open on hash change
            if (window.hash === popUpHash && popUpOpen !== popUpHash + true) {
                openPopUp();
            // Close on back button from browser
            } else if (window.hash !== popUpHash && popUpOpen !== popUpHash + false) {
                closePopUp();
            }
        }
    };

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
	    context.popUp.classList.remove('close-pop-up');
	    context.popUp.classList.add('open-pop-up');
	    context.content.querySelector('.power-button').addEventListener('click', powerButtonClickHandler, { passive: true });
	    window.addEventListener('keydown', windowKeydownHandler, { passive: true });
	    context.popUp.addEventListener('touchstart', popUpTouchstartHandler, { passive: true });
	    context.popUp.addEventListener('touchmove', popUpTouchmoveHandler, { passive: true });
	    document.body.style.overflow = 'hidden'; // Fix scroll inside pop-ups only
	    pauseVideos(context.popUp, false);
	    resetAutoClose();

        if (closeOnClick) {
            context.popUp.addEventListener('mouseup', removeHash, { passive: true });
            context.popUp.addEventListener('touchend', removeHash, { passive: true });
        }

        popUpOpen = popUpHash + true;

	    setTimeout(function() {
	    	window.addEventListener('click', closePopUpByClickingOutside, { passive: true });
	    }, 10); 
	}

	function closePopUp() {
	    context.popUp.classList.remove('open-pop-up');
	    context.popUp.classList.add('close-pop-up');
	    context.content.querySelector('.power-button').removeEventListener('click', powerButtonClickHandler); 
	    window.removeEventListener('keydown', windowKeydownHandler);
	    window.removeEventListener('click', closePopUpByClickingOutside);
	    context.popUp.removeEventListener('touchstart', popUpTouchstartHandler);
	    context.popUp.removeEventListener('touchmove', popUpTouchmoveHandler);
	    document.body.style.overflow = '';
	    clearTimeout(closeTimeout);

	   	if (closeOnClick) {
	        context.popUp.removeEventListener('mouseup', removeHash);
	        context.popUp.removeEventListener('touchend', removeHash);	
	    }

	   	popUpOpen = popUpHash + false;

	    setTimeout(function() {
	        pauseVideos(context.popUp, true);
	    }, 320);
	}

    function createPopUp() {   
        let popUp = context.popUp;
        formatedState = stateEntityId ? hass.formatEntityState(hass.states[stateEntityId]) : '';

        createHeader();
        updateColor();

        if (!context.eventAdded && !editor) {
            window['checkHashRef_' + popUpHash] = checkHash;
            window.addEventListener('urlChanged', window['checkHashRef_' + popUpHash], { passive: true });
            context.eventAdded = true;
        } else if (context.eventAdded && editor) {
        	window.removeEventListener('urlChanged', window['checkHashRef_' + popUpHash]);
        	context.eventAdded = false;
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
            	transition: transform .36s !important;
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
                transform: translateY(-120%);
            }
            #root.open-pop-up > * {
              /* Block child items to overflow and if they do clip them */
              /*max-width: calc(100vw - 38px);*/
              max-width: 100% !important;
              /*overflow-x: clip;*/
            }
            #root.close-pop-up { 
                transform: translateY(-20%);
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
                backdrop-filter: none !important;
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

        addStyles(hass, context, popUpStyles, customStyles, state, entityId, '', '', popUp);
        addStyles(hass, context, headerStyles, customStyles, state, entityId, stateChanged); 
    }

	// Initialize pop-up

	const initPopUp = setTimeout(() => {
		const initEvent = new Event('popUpInitialized');

	    if (!context.element) {
	    	context.element = context.getRootNode().querySelector('#root');
	    }

	    if (context.element && (
    		!context.popUp 
    		|| stateChanged 
    		|| (editor && !context.editorModeAdded)
		)){
	        context.popUp = context.element;

            if (editor && context.popUp && !context.editorModeAdded) {
            	context.popUp.classList.add('editor');
            	context.popUp.classList.remove('close-pop-up', 'open-pop-up');
            	createPopUp();
            	context.editorModeAdded = true;
            } else {
            	createPopUp();
            }

            clearTimeout(initPopUp);
           	window.dispatchEvent(initEvent);

	    } else if (!editor && context.popUp && context.editorModeAdded) {
	    	context.popUp.classList.remove('editor');
	    	createPopUp();
	    	context.editorModeAdded = false;
	    }
	}, 0);

    // Pop-up triggers

    function popUpTriggers(triggerEntityState) {
    	if (!triggerEntityState || triggerEntityState === oldTriggerEntityState) {
    		return;
    	}

    	oldTriggerEntityState = triggerEntityState;

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

        if (triggerEntityState === triggerState && previousTriggerState === null && !isTriggered) {
            navigate('', popUpHash);
            isTriggered = true;
            localStorage.setItem('isTriggered_' + popUpHash, isTriggered);
        }

        if (triggerEntityState !== previousTriggerState) {
            isManuallyClosed = false;
            localStorage.setItem('previousTriggerState_' + popUpHash, triggerEntityState);
            localStorage.setItem('isManuallyClosed_' + popUpHash, isManuallyClosed);
        }

        if (triggerEntityState === triggerState && !isManuallyClosed) {
            navigate('', popUpHash);
            isTriggered = true;
            localStorage.setItem('isTriggered_' + popUpHash, isTriggered);
        } else if (triggerEntityState !== triggerState && triggerClose && context.popUp.classList.contains('open-pop-up') && isTriggered && !isManuallyClosed) {
        	removeHash();
            isTriggered = false;
            isManuallyClosed = true;
            localStorage.setItem('isManuallyClosed_' + popUpHash, isManuallyClosed);
            localStorage.setItem('isTriggered_' + popUpHash, isTriggered);
        }
    }

    if (context.popUp && triggerEntity) {
    	const triggerEntityState = hass.states[triggerEntity].state;
		popUpTriggers(triggerEntityState);
	}
}
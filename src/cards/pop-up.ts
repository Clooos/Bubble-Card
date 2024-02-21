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
    fireEvent,
    forwardHaptic,
    navigate,
    toggleEntity,
    hasStateChanged
} from '../tools/utils.ts';
import { addActions } from '../tools/tap-actions.ts';
import { getVariables } from '../var/cards.ts';

let oldTriggerEntityState;
let storedElements = [];
let rgbaBgColor;
let startTouchY;
let lastTouchY;
let closeTimeout;
let rgbColorOpacity;
window.openPopups = 0;

export function handlePopUp(context) {

    const editor = context.editor;

    // Hide vertical stack content before initialization

    if (!context.initStyleAdded && !context.popUp && !editor) {
        context.card.style.marginTop = '4000px';
        context.initStyleAdded = true;
    }

    if (context.errorTriggered) {
        return;
    }

	// Initialize/refresh pop-up

    const hass = context._hass;
    const config = context.config;

	const initPopUp = setTimeout(() => {
	    if (!context.verticalStack) {
	    	context.verticalStack = context.getRootNode();
	    	clearTimeout(initPopUp);
	    } else {
	    	clearTimeout(initPopUp);
	    }

	    if (context.verticalStack && (
	    	!context.popUp
			|| stateChanged 
    		|| context.stateEntityChanged
    		|| (editor && !context.editorModeAdded)
		)){
			if (!context.popUp) {
				context.popUp = context.verticalStack.querySelector('#root');
	    		context.popUp.classList.add('pop-up', 'close-pop-up');
			}

            if (editor && !context.editorModeAdded) {
            	context.popUp.classList.add('editor');
            	context.popUp.classList.remove('close-pop-up', 'open-pop-up');
            	context.editorModeAdded = true;
            }

            createPopUp();

            const initEvent = new Event('popUpInitialized');
            setTimeout(() => {
           		window.dispatchEvent(initEvent);
           	}, 10);
	    } else if (!editor && context.popUp && context.editorModeAdded) {
	    	context.popUp.classList.remove('editor');
	    	createPopUp();
	    	context.editorModeAdded = false;
	    }
	}, 0);

    let {
        customStyles,
        entityId,
        icon,
        name,
        widthDesktop,
        widthDesktopDivided,
        isSidebarHidden,
        stateChanged,
        stateOn,
        marginCenter,
        popUpOpen,
        rgbaColor,
        rgbColor,
        shadowOpacity,
        bgBlur,
        iconStyles,
        themeBgColor,
        color
    } = getVariables(context, config, hass, editor);

    let formatedState;
    let autoClose = config.auto_close || false;
    let popUpHash = config.hash;
    let displayPowerButton = config.entity ? 'flex' : 'none';
    let text = config.text || '';
    let stateEntityId = config.state;
    let closeOnClick = config.close_on_click || false;
    let hideBackdrop = config.hide_backdrop || false;
    let hideCard = config.hide_card || '';
    if (!window.hideBackdrop && hideBackdrop) {
    	window.hideBackdrop = true;
    }
    let backgroundUpdate = context.config.background_update || false;
    let marginTopMobile = config.margin_top_mobile 
        ? (config.margin_top_mobile !== '0' ? config.margin_top_mobile : '0px')
        : '0px';
    let marginTopDesktop = config.margin_top_desktop 
        ? (config.margin_top_desktop !== '0' ? config.margin_top_desktop : '0px')
        : '0px';
    let state = stateEntityId && hass.states[stateEntityId] ? hass.states[stateEntityId].state : '';

    if (state) {
    	if (!context.stateEntityOld || context.stateEntityOld !== state) {
    		context.stateEntityOld = state;
    		context.stateEntityChanged = true;
    	} else {
    		context.stateEntityChanged = false;
    	}
    }

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
	        addActions(context.iconContainer, config);

	        context.h2 = document.createElement("h2");
	        context.h2.textContent = name;
	        context.div.appendChild(context.h2);

	        context.p = document.createElement("p");
	        context.p.textContent = formatedState + ' ' + text;
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
	    } else if (stateChanged || context.stateEntityChanged) {
	        context.iconContainer.innerHTML = ''; // Clear the container
	        createIcon(context, entityId, icon, context.iconContainer, editor);
	        context.h2.textContent = name;
	        context.p.textContent = formatedState + ' ' + text;
	        context.haIcon2.setAttribute("style", `display: ${displayPowerButton};`);
	    }
	}

	function closePopUpByClickingOutside(element) {
	    // Reset auto close
	    window.hash === popUpHash && resetAutoClose();

	    const target = element.composedPath();

	    if (
	        target 
	        && !target.some(el => el.nodeName === 'HA-MORE-INFO-DIALOG') 
	        && !target.some(el => el.nodeName === 'HA-DIALOG-DATE-PICKER') 
	        && !target.some(el => el.id === 'root' 
	        && !el.classList.contains('close-pop-up'))
	    ){
	        const close = setTimeout(function() {
	            if (window.hash === popUpHash) {
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

    function windowKeydownHandler(event) {
        if (event.key === 'Escape') {
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
            rgbColorOpacity = rgbColor
                ? (!isColorCloseToWhite(rgbColor) ? `rgba(${rgbColor}, 0.5)` : 'rgba(255,220,200, 0.5)')
                : (entityId && stateOn 
                    ? (entityId.startsWith("light.") ? 'rgba(255,220,200, 0.5)' : 'var(--accent-color)') 
                    : 'var(--background-color,var(--secondary-background-color))');
        }
    }

    function checkHash() {
        if (!editor && context.popUp) {
            window.hash = location.hash.split('?')[0];

            // Open on hash change
            if (
            	window.hash === popUpHash && 
            	popUpOpen !== popUpHash + true &&
            	!context.popUp.classList.contains('open-pop-up')
            ){
            	popUpOpen = popUpHash + true;
                openPopUp();
            // Close on hash change
            } else if (
            	window.hash !== popUpHash && 
            	popUpOpen !== popUpHash + false &&
            	context.popUp.classList.contains('open-pop-up')
            ){
            	popUpOpen = popUpHash + false;
                closePopUp();
            }
        }
    };

	function removePopUpContent(context, root, remove) {
	    if (backgroundUpdate) {
	        return;
	    }

	    if (!context.contentRemoved && remove && !editor) {
	        const popUpContent = root.querySelectorAll('*');
	        popUpContent.forEach((element) => {
	            context.contentRemoved = true;
	            storedElements.unshift({element: element, nextSibling: element.nextSibling, parent: element.parentNode});
	            element.parentNode.removeChild(element);
	        });
	    } else if (context.contentRemoved && !remove) {
	        storedElements.forEach((storedElement) => {
	            context.contentRemoved = false;
	            if (storedElement.parent.contains(storedElement.nextSibling)) {
	                storedElement.parent.insertBefore(storedElement.element, storedElement.nextSibling);
	            } else {
	                storedElement.parent.appendChild(storedElement.element);
	            }
	        });
	        storedElements = [];
	    }
	}

	function createBackdrop() {
		if (window.backdrop) {
			return window.backdrop;
		}

		const backdrop = document.createElement('div');
		backdrop.classList.add('backdrop','hidden');

		document.body.appendChild(backdrop);

		const style = document.createElement('style');
		style.innerHTML = `
			${customStyles}
		    .backdrop {
				background-color: ${convertToRGBA(themeBgColor, 0.7, 0.7)};
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 0;
				opacity: 0;
				transition: opacity 0.3s;
				display: flex;
		    }

		    .backdrop.visible {
				opacity: 1;
				backdrop-filter: blur(16px);
				-webkit-backdrop-filter: blur(16px);
		    }

		    .backdrop.hidden {
				opacity: 0;
				backdrop-filter: none;
				-webkit-backdrop-filter: none;
				pointer-events: none;
		    }
		  `;

	  	document.head.appendChild(style);

		function toggleBackdrop() {
			if (hideBackdrop) {
				if (!window.backdrop.hidden) {
					backdrop.style.pointerEvents = 'none';
					window.backdrop.hidden = true;
				}

				return;
			}

			if (window.openPopups === 1) {
				backdrop.classList.add('visible');
				backdrop.classList.remove('hidden');
			}

			if (window.openPopups === 0) {
				backdrop.classList.add('hidden');
				backdrop.classList.remove('visible');
			}
		}

		window.backdrop = {
			backdrop,
			toggleBackdrop,
		};

	  	return window.backdrop;
	}	

	const { backdrop, toggleBackdrop } = createBackdrop();

	// function openPopUp() {
	//     removePopUpContent(context, context.popUp, false);
	// 	window.openPopups++;
	// 	toggleBackdrop();
	// 	context.popUp.classList.remove('close-pop-up');
	// 	context.popUp.classList.add('open-pop-up');
	//     context.content.querySelector('.power-button').addEventListener('click', powerButtonClickHandler, { passive: true });
	//     window.addEventListener('keydown', windowKeydownHandler, { passive: true });
	//     context.popUp.addEventListener('touchstart', popUpTouchstartHandler, { passive: true });
	//     context.popUp.addEventListener('touchmove', popUpTouchmoveHandler, { passive: true });
	//     resetAutoClose();

	//     setTimeout(function() {
	//         if (closeOnClick) {
	//             context.popUp.addEventListener('mouseup', removeHash, { passive: true });
	//             context.popUp.addEventListener('touchend', removeHash, { passive: true });
	//         }
	//        	document.body.style.overflow = 'hidden'; // Fix scroll inside pop-ups only
	//     	window.addEventListener('click', closePopUpByClickingOutside, { passive: true });
	//     }, 10); 
	// }

	// function closePopUp() {
	// 	window.openPopups--;
	//     context.popUp.classList.remove('open-pop-up');
	//     context.popUp.classList.add('close-pop-up');
	// 	toggleBackdrop();
	//     context.content.querySelector('.power-button').removeEventListener('click', powerButtonClickHandler); 
	//     window.removeEventListener('keydown', windowKeydownHandler);
	//     window.removeEventListener('click', closePopUpByClickingOutside);
	//     context.popUp.removeEventListener('touchstart', popUpTouchstartHandler);
	//     context.popUp.removeEventListener('touchmove', popUpTouchmoveHandler);
	//     document.body.style.overflow = '';
	//     clearTimeout(closeTimeout);

	//    	if (closeOnClick) {
	//         context.popUp.removeEventListener('mouseup', removeHash);
	//         context.popUp.removeEventListener('touchend', removeHash);	
	//     }

	//     setTimeout(function() {
	//         removePopUpContent(context, context.popUp, true);
	//     }, 320);
	// }

	let removeContentTimeout;

	function openPopUp() {
	    clearTimeout(removeContentTimeout); // Annule le timeout précédent
	    removePopUpContent(context, context.popUp, false);
	    window.openPopups++;
	    toggleBackdrop();
	    context.popUp.classList.remove('close-pop-up');
	    context.popUp.classList.add('open-pop-up');
	    context.content.querySelector('.power-button').addEventListener('click', powerButtonClickHandler, { passive: true });
	    window.addEventListener('keydown', windowKeydownHandler, { passive: true });
	    context.popUp.addEventListener('touchstart', popUpTouchstartHandler, { passive: true });
	    context.popUp.addEventListener('touchmove', popUpTouchmoveHandler, { passive: true });
	    resetAutoClose();

	    setTimeout(function() {
	        if (closeOnClick) {
	            context.popUp.addEventListener('mouseup', removeHash, { passive: true });
	            context.popUp.addEventListener('touchend', removeHash, { passive: true });
	        }
	        document.body.style.overflow = 'hidden'; // Fix scroll inside pop-ups only
	        window.addEventListener('click', closePopUpByClickingOutside, { passive: true });
	    }, 10); 
	}

	function closePopUp() {
	    window.openPopups--;
	    context.popUp.classList.remove('open-pop-up');
	    context.popUp.classList.add('close-pop-up');
	    toggleBackdrop();
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

	    removeContentTimeout = setTimeout(function() {
	        removePopUpContent(context, context.popUp, true);
	    }, 320);
	}

    function createPopUp() {
        let popUp = context.popUp;
        formatedState = stateEntityId ? hass.formatEntityState(hass.states[stateEntityId]) : '';

        createHeader();
        updateColor();

        if (!context.eventAdded && !editor) {
        	removePopUpContent(context, context.popUp, true);
            window['checkHashRef_' + popUpHash] = checkHash;
            window.addEventListener('urlChanged', window['checkHashRef_' + popUpHash], { passive: true });
            context.eventAdded = true;
        } else if (context.eventAdded && editor) {
        	removePopUpContent(context, context.popUp, false);
        	window.removeEventListener('urlChanged', window['checkHashRef_' + popUpHash]);
        	toggleBackdrop();
        	context.eventAdded = false;
        }

        const popUpStyles = `                    
            .pop-up.card-content {
                width: 100% !important;
                padding: 0 !important;
            }
            .pop-up {
            	transition: transform .36s;
                position: fixed;
                margin: 0 -${marginCenter}; /* 7px */
                width: 100%;
                background-color: ${rgbaColor};
                border-radius: 42px;
                box-sizing: border-box;
                top: calc(120% + ${marginTopMobile} + var(--header-height));
                grid-gap: 12px;
                gap: 12px;
                grid-auto-rows: min-content;
                padding: 18px 18px 220px 18px;
                height: 100%;
                -ms-overflow-style: none; /* for Internet Explorer, Edge */
                scrollbar-width: none; /* for Firefox */
                overflow-y: auto; 
                overflow-x: hidden; 
                z-index: 1 !important; /* Higher value hide the more-info panel */
                /* For older Safari but not working with Firefox */
                /* display: grid !important; */  
            }
			.pop-up > :first-child::after {
			    content: '';
			    display: block;
			    position: sticky;
			    top: 0;
			    left: -50px;
			    margin: -70px 0 -36px -36px;
			    overflow: visible;
			    width: 200%;
			    height: 100px;
			    background: ${rgbaColor};
			    -webkit-mask-image: linear-gradient(0deg, transparent 0%, black 80%);
			    mask-image: linear-gradient(0deg, transparent 0%, black 80%);
			    z-index: 0;
			}
            .pop-up::-webkit-scrollbar {
                display: none; /* for Chrome, Safari, and Opera */
            }
            .pop-up > :first-child {
                position: sticky;
                top: 0;
                z-index: 1;
                background: none !important;
                overflow: visible;
            }
            .pop-up.open-pop-up {
                transform: translateY(-120%);
                box-shadow: 0px 0px 50px rgba(0,0,0,${shadowOpacity / 100});
                backdrop-filter: ${hideBackdrop || window.hideBackdrop ? 'blur(' + bgBlur + 'px)' : 'none'};
                -webkit-backdrop-filter: ${hideBackdrop || window.hideBackdrop ? 'blur(' + bgBlur + 'px)' : 'none'};
            }
            .pop-up.close-pop-up { 
                transform: translateY(-20%);
                box-shadow: none !important;
				backdrop-filter: none !important;
				-webkit-backdrop-filter: none !important;
            }
            @media only screen and (min-width: 600px) {
                .pop-up {
                    top: calc(120% + ${marginTopDesktop} + var(--header-height));
                    width: calc(${widthDesktop}${widthDesktopDivided[2] === '%' && !isSidebarHidden ? ' - var(--mdc-drawer-width)' : ''}) !important;
                    left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]});
                    margin: 0 !important;
                }
            }  
            @media only screen and (min-width: 870px) {
                .pop-up {
                    left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]} + ${isSidebarHidden ? '0px' : `var(--mdc-drawer-width) ${widthDesktopDivided[2] === '%' ? '' : '/ 2'}`});
                }
            }  
            .pop-up.editor {
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
                background-color: ${entityId ? rgbColorOpacity : 'var(--background-color,var(--secondary-background-color))'};
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

    // Pop-up triggers

    let triggerEntity = config.trigger_entity ? config.trigger_entity : '';
    let triggerState = config.trigger_state ? config.trigger_state : '';
    let triggerClose = config.trigger_close ? config.trigger_close : false;

    function popUpTriggers(oldTriggerEntityState, triggerEntityState) {
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
    	const triggerEntityState = hass.states[triggerEntity] ? hass.states[triggerEntity].state : undefined;

    	if (triggerEntityState) {
    		popUpTriggers(oldTriggerEntityState, triggerEntityState);
    	} else {
    		return;
    	}
	}
}
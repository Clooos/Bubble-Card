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

export function handleButton(context) {

    const hass = context._hass;
    const editor = context.editor;

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
    } = getVariables(context, context.config, hass, editor);

    formatedState = stateChanged || editor ? hass.formatEntityState(hass.states[entityId]) : formatedState || '';
    const buttonType = context.config.button_type || 'switch';
    const showState = !context.config.show_state ? false : context.config.show_state;
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

    if (!context.buttonAdded) {
        const buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("class", "button-container");
        context.content.appendChild(buttonContainer);
    }

    const iconContainer = document.createElement('div');
    iconContainer.setAttribute('class', 'icon-container');
    context.iconContainer = iconContainer;

    const nameContainer = document.createElement('div');
    nameContainer.setAttribute('class', 'name-container');

    const switchButton = document.createElement('div');
    switchButton.setAttribute('class', 'switch-button');

    const rangeSlider = document.createElement('div');
    rangeSlider.setAttribute('class', 'range-slider');

    const rangeFill = document.createElement('div');
    rangeFill.setAttribute('class', 'range-fill');
    
    if (!context.buttonContainer || editor) {
        // Fix for editor mode
        if (editor && context.buttonContainer) { 
            while (context.buttonContainer.firstChild) {
                context.buttonContainer.removeChild(context.buttonContainer.firstChild);
            }
            context.eventAdded = false;
            context.wasEditing = true;
        }
        // End of fix
    
        context.buttonContainer = context.content.querySelector(".button-container");
    
        if (buttonType === 'slider' && (!context.buttonAdded || editor)) {
            context.buttonContainer.appendChild(rangeSlider);
            rangeSlider.appendChild(iconContainer);
            rangeSlider.appendChild(nameContainer);
            rangeSlider.appendChild(rangeFill);
            context.rangeFill = context.content.querySelector(".range-fill");
        } else if (buttonType === 'switch' || buttonType === 'custom' || editor) {
            context.buttonContainer.appendChild(switchButton);
            switchButton.appendChild(iconContainer);
            switchButton.appendChild(nameContainer);
            context.switchButton = context.content.querySelector(".switch-button");
        }
        
        createIcon(context, entityId, icon, iconContainer, editor);
        nameContainer.innerHTML = `
            <p class="name">${name}</p>
            ${!showState ? '' : `<p class="state">${formatedState}</p>`}
        `; 
    
        context.buttonAdded = true;
    }

    if (showState && formatedState) {
        context.content.querySelector(".state").textContent = formatedState;
    }

    function tapFeedback(content) {
        forwardHaptic("success");
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
        if (e.target !== iconContainer && e.target !== iconContainer.querySelector('ha-icon')) {
            isDragging = true;
            document.addEventListener('mouseup', handleEnd, { passive: true });
            document.addEventListener('touchend', handleEnd, { passive: true });
            document.addEventListener('mousemove', checkVerticalScroll, { passive: true });
            document.addEventListener('touchmove', checkVerticalScroll, { passive: true });
    
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
            document.addEventListener('mousemove', handleMove, { passive: true });
            document.addEventListener('touchmove', handleMove, { passive: true });
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
        } else if (entityId.startsWith("media_player.")) { // && currentVolume !== volume
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
            forwardHaptic("light");
            updateRange(x);
        } else if (isDragging && Math.abs(y - startY) > 10) { // If the movement is primarily vertical
            isDragging = false; // Stop the slide
            rangeSlider.value = startValue; // Reset to initial value
        }
    }

    if (!context.eventAdded && buttonType === 'switch') {
        switchButton.addEventListener('click', () => tapFeedback(context.switchButton), { passive: true });
        switchButton.addEventListener('click', function(e) {
            if (e.target !== iconContainer && e.target !== iconContainer.querySelector('ha-icon')) {
                toggleEntity(hass, entityId);
            }
        }, { passive: true });
        addActions(iconContainer, context.config, hass, forwardHaptic);
        context.eventAdded = true;
    } else if (!context.eventAdded && buttonType === 'slider') {
        rangeSlider.addEventListener('mousedown', handleStart, { passive: true });
        rangeSlider.addEventListener('touchstart', handleStart, { passive: true });
        addActions(iconContainer, context.config, hass, forwardHaptic);
        context.eventAdded = true;
    } else if (!context.eventAdded && buttonType === 'custom') {
        switchButton.addEventListener('click', () => tapFeedback(context.switchButton), { passive: true });
        addActions(iconContainer, context.config, hass, forwardHaptic);
        context.eventAdded = true;
    }

    if (!context.isDragging && buttonType === 'slider') {
        context.rangeFill.style.transition = 'all .3s';
        if (entityId.startsWith("light.")) {
            context.rangeFill.style.transform = `translateX(${(currentBrightness / 255) * 100}%)`;
        } else if (entityId.startsWith("media_player.")) {
            context.rangeFill.style.transform = `translateX(${currentVolume * 100}%)`;
        }
    }

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
    
    const buttonStyles = `
        ha-card {
            margin-top: 0 !important;
            background: none !important;
            opacity: ${state !== 'unavailable' ? '1' : '0.5'};
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
            background-color: ${stateOn && ['switch', 'custom'].includes(buttonType) ? 'var(--accent-color)' : 'rgba(0,0,0,0)'};
        }

        .range-fill {
            z-index: -1;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            background-color: ${iconColorOpacity};
            width: 100%;
            left: -100%;
        }
        
        .switch-button {
            cursor: pointer !important;
        }
        
        .range-slider {
            cursor: ew-resize;
        }
        
        .name-container {
            position: relative;
            display: ${!showState ? 'inline-flex' : 'block'};
            margin-left: 4px;
            z-index: 1;
            font-weight: 600;
            align-items: center;
            line-height: ${!showState ? '16px' : '4px'};
            padding-right: 16px;
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

        ${iconStyles}
    `;
    
    addStyles(hass, context, buttonStyles, customStyles, state, entityId, stateChanged);
}
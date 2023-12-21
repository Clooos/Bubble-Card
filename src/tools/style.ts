export const addStyles = function(hass, context, styles, customStyles, state, entityId, stateChanged, path = '', element = context.content) {
    const customStylesEval = customStyles ? eval('`' + customStyles + '`') : '';
    let styleAddedKey = styles + 'Added'; // Add 'Added' at the end of the styles value

    // Check if the style has changed
    if (!context[styleAddedKey] || context.previousStyle !== customStylesEval || stateChanged || context.previousConfig !== context.config) {
        if (!context[styleAddedKey]) {
            // Check if the style element already exists
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

export function createIcon(context, entityId, icon, iconContainer, editor) {
    let hass = context._hass;

    let entityAttributes = !entityId || !hass.states[entityId].attributes ? false : hass.states[entityId].attributes;
    context.imageUrl = !entityAttributes.entity_picture ? false : entityAttributes.entity_picture;
    updateIcon(context, hass, entityId, icon, iconContainer);

    if (editor) {
        return;
    }

    setInterval(() => {
        hass = context._hass;
        if (entityId && hass.states[entityId]) {
            context.currentEntityPicture = hass.states[entityId].attributes.entity_picture;
            if (context.currentEntityPicture !== context.previousEntityPicture) {
                context.imageUrl = context.currentEntityPicture;
                updateIcon(context, hass, entityId, icon, iconContainer);
                context.previousEntityPicture = context.currentEntityPicture;
            }
        }
    }, 1000); // Check every second if the entity picture changed
}

export function updateIcon(context, hass, entityId, icon, iconContainer) {
    while (iconContainer.firstChild) {
        iconContainer.removeChild(iconContainer.firstChild);
    }

    let imageUrl = context.config.icon && context.config.icon.includes('/') 
        ? context.config.icon
        : context.imageUrl
            ? context.imageUrl
            : '';

    function isPlayerActive(state) {
        if (entityId.startsWith("media_player.")) {
            const inactiveStates = ['off', 'unknown', 'idle', undefined];
            return !inactiveStates.includes(state);
        } else {
            return false;
        }
    }

    if (imageUrl && (isPlayerActive(hass.states[entityId].state) || !entityId.startsWith("media_player."))) {
        const img = document.createElement("div");
        img.setAttribute("class", "entity-picture");
        img.setAttribute("alt", "Icon");
        if (iconContainer) {
            iconContainer.appendChild(img);
            iconContainer.style.background = "center / cover no-repeat url(" + imageUrl + "), var(--card-background-color,var(--ha-card-background))";
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

export function isColorCloseToWhite(rgbColor) {
    let whiteThreshold = [220, 220, 190];
    for(let i = 0; i < 3; i++) {
        if(rgbColor[i] < whiteThreshold[i]) {
            return false;
        }
    }
    return true;
}

export function convertToRGBA(color, opacity, lighten = 1) {
    let rgbaColor = '';
    if (color.startsWith('#')) {
        if (color.length === 4) {  // Short hexadecimal color
            let r = Math.min(255, parseInt(color.charAt(1).repeat(2), 16) * lighten),
                g = Math.min(255, parseInt(color.charAt(2).repeat(2), 16) * lighten),
                b = Math.min(255, parseInt(color.charAt(3).repeat(2), 16) * lighten);
            rgbaColor = "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
        } else {  // Regular hexadecimal color
            let r = Math.min(255, parseInt(color.slice(1, 3), 16) * lighten),
                g = Math.min(255, parseInt(color.slice(3, 5), 16) * lighten),
                b = Math.min(255, parseInt(color.slice(5, 7), 16) * lighten);
            rgbaColor = "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
        }
    } else if (color.startsWith('rgb')) {
        let rgbValues = color.match(/\d+/g);
        if (color.includes('rgba')) {  // Color is already in RGBA
            rgbaColor = "rgba(" + Math.min(255, rgbValues[0] * lighten) + ", " + Math.min(255, rgbValues[1] * lighten) + ", " + Math.min(255, rgbValues[2] * lighten) + ", " + opacity + ")";
        } else {  // Color is in RGB
            rgbaColor = "rgba(" + Math.min(255, rgbValues[0] * lighten) + ", " + Math.min(255, rgbValues[1] * lighten) + ", " + Math.min(255, rgbValues[2] * lighten) + ", " + opacity + ")";
        }
    }
    return rgbaColor;
}

export function getIconColor(hass, entityId, stateOn, isColorCloseToWhite, rgbColor) {
    let iconColorOpacity, iconColor, iconFilter;

    if (entityId && entityId.startsWith("light.")) {
        rgbColor = hass.states[entityId].attributes.rgb_color;
        iconColorOpacity = rgbColor 
            ? (!isColorCloseToWhite(rgbColor) ? `rgba(${rgbColor}, 0.5)` : 'rgba(255,220,200,0.5)')
            : (stateOn ? 'rgba(255,220,200, 0.5)' : `rgba(255, 255, 255, 0.5)`);
        iconColor = rgbColor 
            ? (!isColorCloseToWhite(rgbColor) ? `rgb(${rgbColor})` : 'rgb(255,220,200)')
            : (stateOn ? 'rgba(255,220,200, 1)' : 'rgba(255, 255, 255, 1)');
        iconFilter = rgbColor ? 
            (!isColorCloseToWhite(rgbColor) ? 'brightness(1.1)' : 'none') :
            'none';
    } else {
        iconColorOpacity = `var(--accent-color)`;
        iconFilter = 'brightness(1.1)';
    }

    return { iconColorOpacity, iconColor, iconFilter };
}

export function getIconStyles(entityId, stateOn, iconColor, iconFilter) {
    return `
    .icon-container {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        z-index: 1;
        min-width: 38px;
        min-height: 38px;
        margin: 6px;
        border-radius: 50%;
        cursor: pointer !important;
        background-color: var(--card-background-color,var(--ha-card-background));
    }
    
    .icon-container::after {
        content: '';
        position: absolute;
        display: block;
        opacity: ${entityId.startsWith("light.") ? '0.2' : '0'};
        width: 100%;
        height: 100%;
        transition: all 1s;
        border-radius: 50%;
        background-color: ${stateOn ? (iconColor ? iconColor : 'var(--accent-color)') : 'var(--card-background-color,var(--ha-card-background))'};
    }
    
    .icon {
        display: flex;
        width: 22px; 
        color: ${stateOn ? (iconColor ? iconColor : 'var(--accent-color)') : 'inherit'} !important;
        opacity: ${stateOn ? '1' : (entityId ? '0.6' : '1')};
        filter: ${stateOn ? (iconColor ? iconFilter : 'brightness(1.1)') : 'inherit'};
    }
    
    .entity-picture {
        display: flex;
        height: 38px;
        width: 38px;
        border-radius: 100%;
    }
    `;
}
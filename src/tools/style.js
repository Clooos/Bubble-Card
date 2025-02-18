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

export function isColorCloseToWhite(rgb, threshold = 40) {
    if (!Array.isArray(rgb) || rgb.length !== 3) {
        return;
    }

    for (let i = 0; i < 3; i++) {
        if (rgb[i] < 0 || rgb[i] > 255) {
            return;
        }
    }

    return rgb.every(value => Math.abs(value - 255) <= threshold);
}

let rgbaColor;

export function convertToRGBA(color, opacity, lighten = 1) {
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
        rgbaColor = "rgba(" + Math.min(255, rgbValues[0] * lighten) + ", " + Math.min(255, rgbValues[1] * lighten) + ", " + Math.min(255, rgbValues[2] * lighten) + ", " + opacity + ")";
    } else if (color.startsWith('var(--')) {
        // New code for CSS variables
        let cssVar = color.slice(4, -1);
        let computedColor = window.getComputedStyle(document.documentElement).getPropertyValue(cssVar);
        if (computedColor.startsWith('#') || computedColor.startsWith('rgb')) {
            rgbaColor = convertToRGBA(computedColor, opacity, lighten);
        }
    }
    return rgbaColor;
}
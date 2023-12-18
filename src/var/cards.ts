// Cards variables

import { 
    isColorCloseToWhite,
    convertToRGBA,
    getIconColor,
    getIconStyles
} from '../tools/style.ts';
import { hasStateChanged } from '../tools/utils.ts';

let popUpOpen;
let rgbaColor;
let rgbColor;
let formatedState;

export function getVariables(context, config, hass, editor) {
    let customStyles = !config.styles ? '' : config.styles;
    let entityId = config.entity && hass.states[config.entity] 
        ? config.entity 
        : '';
    let icon = !config.icon && config.entity 
        ? hass.states[entityId].attributes.icon || hass.states[entityId].attributes.entity_picture || ''
        : config.icon || '';
    let name = config.name 
        ? config.name 
        : config.entity 
            ? hass.states[entityId].attributes.friendly_name 
            : '';
    let widthDesktop = config.width_desktop || '540px';
    let widthDesktopDivided = widthDesktop ? widthDesktop.match(/(\d+)(\D+)/) : '';
    let isSidebarHidden = config.is_sidebar_hidden || false;
    let state = entityId ? hass.states[entityId].state : '';
    hasStateChanged(context, hass, entityId);
    let stateChanged = context.stateChanged;
    let stateOn = ['on', 'open', 'cleaning', 'true', 'home', 'playing'].includes(state) || (Number(state) !== 0 && !isNaN(Number(state)));
    let riseAnimation = config.rise_animation !== undefined ? config.rise_animation : true;
    let marginCenter = config.margin 
        ? (config.margin !== '0' ? config.margin : '0px')
        : '7px';
    let bgOpacity = config.bg_opacity !== undefined ? config.bg_opacity : '88';
    let shadowOpacity = config.shadow_opacity !== undefined ? config.shadow_opacity : '0';
    let bgBlur = config.bg_blur !== undefined ? config.bg_blur : '10';
    let { 
        iconColorOpacity, 
        iconColor, 
        iconFilter 
    } = getIconColor(hass, entityId, stateOn, isColorCloseToWhite);
    let iconStyles = getIconStyles(entityId, stateOn, iconColor, iconFilter);
    let haStyle = getComputedStyle(document.body);
    let themeBgColor = haStyle.getPropertyValue('--ha-card-background') || haStyle.getPropertyValue('--card-background-color');
    let color = config.bg_color ? config.bg_color : themeBgColor;
    if (color && (!context.color || color !== context.color)) {
        const lighten = 1.02;
        rgbaColor = convertToRGBA(color, (bgOpacity / 100), lighten);
        context.color = color;
        window.color = color;
    }

    return { customStyles, entityId, icon, name, widthDesktop, widthDesktopDivided, isSidebarHidden, state, stateChanged, stateOn, formatedState, riseAnimation, marginCenter, popUpOpen, rgbaColor, rgbColor, bgOpacity, shadowOpacity, bgBlur, iconColorOpacity, iconColor, iconFilter, iconStyles, haStyle, themeBgColor, color };
}

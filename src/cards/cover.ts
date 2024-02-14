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
    forwardHaptic,
    toggleEntity
} from '../tools/utils.ts';
import { addActions } from '../tools/tap-actions.ts';
import { getVariables } from '../var/cards.ts';

export function handleCover(context) {

    const hass = context._hass;
    const editor = context.editor;
    const config = context.config;

    let {
		customStyles,
		entityId,
		icon,
		name,
		state,
		stateChanged,
		stateOn,
		formatedState,
		iconStyles,
    } = getVariables(context, config, hass, editor);

    const iconOpen = config.icon_open ? config.icon_open : 'mdi:window-shutter-open';
    const iconClosed = config.icon_close ? config.icon_close : 'mdi:window-shutter'
    const openCover = !config.open_service ? 'cover.open_cover' : config.open_service;
    const closeCover = !config.close_service ? 'cover.close_cover' : config.close_service;
    const stopCover = !config.stop_service ? 'cover.stop_cover' : config.stop_service;
    const iconUp = config.icon_up ? config.icon_up : "mdi:arrow-up";
    const iconDown = config.icon_down ? config.icon_down : "mdi:arrow-down";
    const showState = !context.config.show_state ? false : context.config.show_state;
    icon = hass.states[config.entity].state === 'open' ? iconOpen : iconClosed;
    formatedState = stateChanged ? hass.formatEntityState(hass.states[entityId]) : formatedState || '';

    if (!context.coverAdded || editor) {
        // Fix for editor mode
        if (editor && context.coverContainer) { 
            while (context.coverContainer.firstChild) {
                context.coverContainer.removeChild(context.coverContainer.firstChild);
            }
        }
        // End of fix
        
        context.coverContainer = document.createElement("div");
        
        context.coverContainer.setAttribute("class", "cover-container");
        context.coverContainer.innerHTML = `
            <div class="header-container">
                <div class="icon-container">
                </div>
                <div class="name-container">
                    <p class="name">${name}</p>
                    <p class="state"></p>
                </div>
            </div>
            <div class="buttons-container">
                <button class="button open">
                    <ha-icon icon="${iconUp}"></ha-icon>
                </button>
                <button class="button stop">
                    <ha-icon icon="mdi:stop"></ha-icon>
                </button>
                <button class="button close">
                    <ha-icon icon="${iconDown}"></ha-icon>
                </button>
            </div>
        `
        context.content.appendChild(context.coverContainer);
        
        const openButton = context.coverContainer.querySelector('.open');
        const stopButton = context.coverContainer.querySelector('.stop');
        const closeButton = context.coverContainer.querySelector('.close');

        openButton.addEventListener('click', () => {
            hass.callService(openCover.split('.')[0], openCover.split('.')[1], {
                entity_id: entityId
            });
        }, { passive: true });
        stopButton.addEventListener('click', () => {
            hass.callService(stopCover.split('.')[0], stopCover.split('.')[1], {
                entity_id: entityId
            });
        }, { passive: true });
        closeButton.addEventListener('click', () => {
            hass.callService(closeCover.split('.')[0], closeCover.split('.')[1], {
                entity_id: entityId
            });
        }, { passive: true });
        
        context.iconContainer = context.content.querySelector('.icon-container');
        addActions(context.iconContainer, config, hass, forwardHaptic);

        context.coverAdded = true;
    }
    
    if (context.iconContainer && (stateChanged || editor)) {
        context.iconContainer.innerHTML = `<ha-icon icon="${icon}" class="icon"></ha-icon>`;
        context.content.querySelector(".state").textContent = showState ? formatedState : '';
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

    addStyles(hass, context, coverStyles, customStyles, state, entityId);
}
import { addStyles } from '../tools/style.ts';
import { getVariables } from '../var/cards.ts';

export function handleSeparator(context) {

    const hass = context._hass;
    const editor = context.editor;
    const config = context.config;

    let {
		customStyles,
		icon,
		name
    } = getVariables(context, config, hass, editor);

    if (!context.separatorAdded || editor) {
        // Fix for editor mode
        if (editor && context.separatorContainer) { 
            while (context.separatorContainer.firstChild) {
                context.separatorContainer.removeChild(context.separatorContainer.firstChild);
            }
        }
        // End of fix
        
        if (!context.separatorAdded) {
            context.separatorContainer = document.createElement("div");
            context.separatorContainer.setAttribute("class", "separator-container");
        }
        context.separatorContainer.innerHTML = `
            <div>
                <ha-icon icon="${icon}"></ha-icon>
                <h4>${name}</h4>
            </div>
            <div></div>
        `
        context.content.appendChild(context.separatorContainer);
        context.separatorAdded = true;
    }
    
    const separatorStyles = `
        .separator-container {
            display: inline-flex;
            width: 100%;
            margin-top: 12px;
        }
        .separator-container div:first-child {
            display: inline-flex;
            max-width: calc(100% - 38px);
        }
        .separator-container div ha-icon {
            display: inline-flex;
            height: 24px;
            width: 24px;
            margin: 0 22px 0 8px;
            transform: translateY(-2px);
        }
        .separator-container div h4 {
            display: inline-flex;
            margin: 0 20px 0 0;
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .separator-container div:last-child {
            display: inline-flex; 
            border-radius: 6px; 
            opacity: 0.5; 
            margin-left: 10px; 
            flex-grow: 1; 
            height: 6px; 
            align-self: center; 
            background-color: var(--background-color,var(--secondary-background-color));
        }
    `;
    
    addStyles(hass, context, separatorStyles, customStyles);
}
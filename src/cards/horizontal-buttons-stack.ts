import { 
    addStyles, 
    createIcon, 
    updateIcon, 
    isColorCloseToWhite,
    convertToRGBA
} from '../tools/style.ts';
import { checkEditor } from '../tools/init.ts';
import { 
    fireEvent,
    forwardHaptic,
    navigate
} from '../tools/utils.ts';
import { getVariables } from '../var/cards.ts';

let editor;

export function handleHorizontalButtonsStack(context) {

    const hass = context._hass;

    let {
        customStyles,
        icon,
        name,
        widthDesktop,
        widthDesktopDivided,
        isSidebarHidden,
        riseAnimation,
        marginCenter,
        popUpOpen
    } = getVariables(context, context.config, hass, editor);

    let editorMode = setInterval(() => {
        editor = checkEditor();

        if (editor && !context.editorModeAdded) {
            context.buttonsContainer.classList.add('editor');
            context.card.classList.add('editor');
            context.editorModeAdded = true;
        } else if (!editor && context.editorModeAdded) {
            context.buttonsContainer.classList.remove('editor');
            context.card.classList.remove('editor');
            context.editorModeAdded = false;
        }
    }, 100);

    let hideGradient = context.config.hide_gradient ? true : false;

    const createButton = (button, link, icon) => {
        const buttonElement = document.createElement("div");
        buttonElement.setAttribute("class", `button ${link.substring(1)}`);
        buttonElement.innerHTML = `
            ${icon !== '' ? `<ha-icon icon="${icon}" class="icon" style="${button !== '' ? `margin-right: 8px;` : ''}"></ha-icon>` : ''}
            ${button !== '' ? `<p class="name">${button}</p>` : ''}
            <div class="background"></div>
        `;

        const backgroundElement = document.createElement("div");
        backgroundElement.setAttribute("class", "color-background");
        buttonElement.appendChild(backgroundElement);
        buttonElement.background = backgroundElement;

        const handleClick = (event) => {
            popUpOpen = location.hash + true;
            if (popUpOpen !== link + true) {
                navigate('', link);
                popUpOpen = link + true;
            } else {
                history.replaceState(null, null, location.href.split('#')[0]);
                fireEvent(window, "location-changed", true);
                popUpOpen = link + false;
            }
            forwardHaptic("light");
        };

        const handleUrlChange = () => {
            highlightButton();
        };

        if (!buttonElement.hasListener) {
            buttonElement.addEventListener('click', handleClick, { passive: true });
            window.addEventListener('urlChanged', handleUrlChange, { passive: true });
            buttonElement.hasListener = true;
        }

        function highlightButton() {
            if (context.config.highlight_current_view) {
                const isShown = location.pathname === link || location.hash === link;
                if (isShown) {
                    buttonElement.classList.add("highlight");
                } else {
                    buttonElement.classList.remove("highlight");
                }
            }
        }
    
        return buttonElement;
    };
    
    if (!context.buttonsAdded) {
        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("horizontal-buttons-stack-container");
        context.content.appendChild(buttonsContainer);
        context.buttonsContainer = buttonsContainer;
    }
    
    const updateButtonStyle = (buttonElement, lightEntity) => {
        const backgroundElement = buttonElement.background;
        if (hass.states[lightEntity].attributes.rgb_color) {
            const rgbColor = hass.states[lightEntity].attributes.rgb_color;
            const rgbColorOpacity = (!isColorCloseToWhite(rgbColor) ? `rgba(${rgbColor}, 0.5)` : 'rgba(255,220,200, 0.5)')
            backgroundElement.style.backgroundColor = rgbColorOpacity;
            backgroundElement.style.border = '1px solid rgba(0,0,0,0)';
        } else if (!hass.states[lightEntity].attributes.rgb_color && hass.states[lightEntity].state == 'on') {
            backgroundElement.style.backgroundColor = 'rgba(255,255,255,0.5)';
            backgroundElement.style.border = '1px solid rgba(0,0,0,0)';          
        } else {
            backgroundElement.style.backgroundColor = 'rgba(0,0,0,0)';
            backgroundElement.style.border = '1px solid var(--primary-text-color)';
        }
    };

    let buttonsList = [];
    let i = 1;
    while (context.config[i + '_link']) {
        const prefix = i + '_';
        const button = context.config[prefix + 'name'] || '';
        const pirSensor = context.config[prefix + 'pir_sensor'];
        icon = context.config[prefix + 'icon'] || '';
        const link = context.config[prefix + 'link'];
        const lightEntity = context.config[prefix + 'entity'];
        buttonsList.push({
            button,
            pirSensor,
            icon,
            link,
            lightEntity
        });
        i++;
    }
    
    if (context.config.auto_order) {
        buttonsList.sort((a, b) => {
            // Check if both PIR sensors are defined
            if (a.pirSensor && b.pirSensor) {
                // Check if the PIR sensor state is "on" for both buttons
                if (hass.states[a.pirSensor].state === "on" && hass.states[b.pirSensor].state === "on") {
                    let aTime = hass.states[a.pirSensor].last_updated;
                    let bTime = hass.states[b.pirSensor].last_updated;
                    return aTime < bTime ? 1 : -1;
                }
                // If only a.pirSensor is "on", place a before b
                else if (hass.states[a.pirSensor].state === "on") {
                    return -1;
                }
                // If only b.pirSensor is "on", place b before a
                else if (hass.states[b.pirSensor].state === "on") {
                    return 1;
                }
                // If neither PIR sensor is "on", arrangement based only on the state of last updated even if off
                let aTime = hass.states[a.pirSensor].last_updated;
                let bTime = hass.states[b.pirSensor].last_updated;
                return aTime < bTime ? 1 : -1;
            }
            // If a.pirSensor is not defined, place a after b
            else if (!a.pirSensor) {
                return 1;
            }
            // If b.pirSensor is not defined, place b after a
            else if (!b.pirSensor) {
                return -1;
            }
        });
    }

    if (!context.buttonsAdded || editor) {
        context.card.classList.add('horizontal-buttons-stack');

        // Fix for editor mode
        if (editor && context.buttonsContainer) { 
            while (context.buttonsContainer.firstChild) {
                context.buttonsContainer.removeChild(context.buttonsContainer.firstChild);
            }
        }
        // End of fix
    
        const buttons = {};
        buttonsList.forEach(button => {
            const buttonElement = createButton(button.button, button.link, button.icon);
            // Store the button element using its link as key
            buttons[button.link] = buttonElement;
            context.buttonsContainer.appendChild(buttonElement);
        });
        context.buttonsAdded = true;
        context.buttons = buttons;
    }

    let currentPosition = 0;
    let buttonMargin = 12;

    function updateButtons(context) {
        let promises = [];
        for (let button of buttonsList) {
            let buttonElement = context.buttons[button.link];
            if (buttonElement) {
                promises.push(localStorage.getItem(`buttonWidth-${button.link}`));
                promises.push(localStorage.getItem(`buttonContent-${button.link}`));
            }
        }

        if (!context.previousConfig) {
            context.previousConfig = context.config;
        }

        Promise.all(promises).then(results => {
            let index = 0;
            for (let button of buttonsList) {
                let buttonElement = context.buttons[button.link];
                if (buttonElement) {
                    let buttonWidth = results[index];
                    let buttonContent = results[index + 1];
                    index += 2;
                    if (!buttonWidth || buttonWidth === '0' || editor) {
                        buttonWidth = buttonElement.offsetWidth;
                        localStorage.setItem(`buttonWidth-${button.link}`, buttonWidth);
                        localStorage.setItem(`buttonContent-${button.link}`, buttonElement.innerHTML);
                        context.previousConfig = context.config;
                    }

                    if (currentPosition !== buttonElement.previousPosition) {
                        buttonElement.style.transform = `translateX(${currentPosition}px)`;
                        buttonElement.previousPosition = currentPosition;
                    }
                    currentPosition += parseInt(buttonWidth) + buttonMargin;
                    
                } 
                if (button.lightEntity) {
                    updateButtonStyle(buttonElement, button.lightEntity, button.link);
                }
            }
        });
    }

    
    if (!context.buttonsUpdated || editor) {
        updateButtons(context);
        context.buttonsAdded = true;
    }

    const horizontalButtonsStackStyles = `
        ha-card {
            border-radius: 0;
        }
        .horizontal-buttons-stack {
            width: 100%;
            margin-top: 0 !important;
            /*background: none !important;*/
            position: fixed;
            height: 51px;
            bottom: 16px;
            left: ${marginCenter};
            z-index: 1 !important; /* Higher value hide the more-info panel */
        }
        @keyframes from-bottom {
            0% {transform: translateY(100px);}
            26% {transform: translateY(-8px);}
            46% {transform: translateY(1px);}
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
            display: inline-flex;
            position: absolute;
            box-sizing: border-box !important;
            /*border: 1px solid var(--primary-text-color);*/
            align-items: center;
            height: 50px;
            line-height: 16px;
            white-space: nowrap;
            width: auto;
            border-radius: 25px;
            z-index: 1;
            padding: 0 16px;
            color: var(--primary-text-color);
            transition: background-color 1s, border 1s, transform 1s;
        }
        .color-background {
            border-radius: 24px;
            width: 100%;
            height: 100%;
            box-sizing: border-box !important;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            border: 1px solid var(--primary-text-color);
            transition: background-color 1s, border 1s, transform 1s;
        }
        .background {
            opacity: 0.8;
            border-radius: 24px;
            width: 100%;
            height: 100%;
            box-sizing: border-box !important;
            position: absolute;
            left: 0;
            z-index: -2;
            background-color: var(--background-color,var(--primary-background-color));
        }
        .highlight {
            animation: pulse 1.4s infinite alternate;
        }
        @keyframes pulse {
            0% {
                filter: brightness(0.7);
            }
            100% {
                filter: brightness(1.3);
            }
        }
        .icon {
            height: 24px;
        }
        .card-content {
            width: calc(100% + 18px);
            box-sizing: border-box !important;
            margin: 0 -36px !important;
            padding: 0 36px !important;
            overflow: scroll !important;
            -ms-overflow-style: none;
            scrollbar-width: none;
            -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 1) calc(0% + 28px), rgba(0, 0, 0, 1) calc(100% - 28px), transparent 100%);
        }
        .horizontal-buttons-stack::before {
            content: '';
            position: absolute;
            top: -32px;
            left: -100%;
            display: ${hideGradient ? 'none' : 'block'};
            background: linear-gradient(0deg, var(--background-color, var(--primary-background-color)) 50%, rgba(79, 69, 87, 0));
            width: 200%;
            height: 100px;
        }
        .card-content::-webkit-scrollbar {
            display: none;
        }
        @media only screen and (min-width: 600px) {
            .card-content {
                position: fixed;
                width: ${widthDesktop} !important;
                left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]});
                margin-left: -13px !important;
                padding: 0 26px !important;
            }
        }
        @media only screen and (min-width: 870px) {
            .card-content {
                position: fixed;
                width: calc(${widthDesktop}${widthDesktopDivided[2] === '%' && !isSidebarHidden ? ' - var(--mdc-drawer-width)' : ''}) !important;
                left: calc(50% - ${widthDesktopDivided[1] / 2}${widthDesktopDivided[2]} + ${isSidebarHidden === true ? '0px' : `var(--mdc-drawer-width) ${widthDesktopDivided[2] === '%' ? '' : '/ 2'}`});
                margin-left: -13px !important;
                padding: 0 26px !important;
            }
        }
        .horizontal-buttons-stack.editor {
            position: relative;
            bottom: 0;
            left: 0;
            overflow: hidden;
        }
        .horizontal-buttons-stack.editor::before {
            background: none;
        }
        .horizontal-buttons-stack-container.editor > .button,
        .horizontal-buttons-stack-container.editor > .button > .color-background {
            transition: background-color 0s, border 0s, transform 0s !important;
        }
        .horizontal-buttons-stack-container.editor {
            margin-left: 1px;
        }
        .horizontal-buttons-stack.editor > .card-content {
            position: relative;
            width: calc(100% + 26px) !important;
            left: -26px;
            margin: 0 !important;
            padding: 0;
        }
    `;
    
    if (!window.hasAnimated && riseAnimation) {
        context.content.style.animation = 'from-bottom .6s forwards';
        window.hasAnimated = true;
        setTimeout(() => {
            context.content.style.animation = 'none';
        }, 1500);
    }

    addStyles(hass, context, horizontalButtonsStackStyles, customStyles);
}
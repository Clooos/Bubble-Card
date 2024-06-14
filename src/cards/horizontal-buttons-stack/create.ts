import { createElement, forwardHaptic } from "../../tools/utils.ts";
import { addHash, removeHash } from "../pop-up/helpers.ts";
import styles from "./styles.ts";

let isOpen = false;
const BUTTON_MARGIN = 12;

export function createButton(context, index) {
    const name = context.config[`${index}_name`] ?? '';
    const icon = context.config[`${index}_icon`] ?? '';
    const sensor = context.config[`${index}_pir_sensor`];
    const link = context.config[`${index}_link`];
    const entity = context.config[`${index}_entity`];
    isOpen = isOpen || location.hash === link;

    const iconElement = createElement('ha-icon', 'bubble-icon icon');
    iconElement.icon = icon;
    const nameElement = createElement('div', 'bubble-name name');
    nameElement.innerText = name;
    const backgroundColorElement = createElement('div', 'bubble-background-color background-color');
    const backgroundElement = createElement('div', 'bubble-background background');
    const button = createElement('div', `bubble-button bubble-button-${index} button ${link.substring(1)}`);
    let buttonWidth = localStorage.getItem(`bubbleButtonWidth-${link}`);
    button.style.width = `${buttonWidth}px`;

    button.appendChild(iconElement);
    button.appendChild(nameElement);
    button.appendChild(backgroundColorElement);
    button.appendChild(backgroundElement);
    button.addEventListener('click', () => {
        if (location.hash !== link) {
            isOpen = false;
        }

        if (isOpen) {
          removeHash()
        } else {
          addHash(link);
        }
        isOpen = !isOpen;

        forwardHaptic("light");
    });

    button.icon = iconElement;
    button.name = nameElement;
    button.backgroundColor = backgroundColorElement;
    button.background = backgroundElement;
    button.pirSensor = sensor;
    button.lightEntity = entity;
    button.link = link;
    button.index = index;

    function handleUrlChange() {
        if (!context.config.highlight_current_view) return;

        const isShown = location.pathname === link || location.hash === link;
        if (isShown) {
            button.classList.add("highlight");
        } else {
            button.classList.remove("highlight");
        }
    }

    window.addEventListener('location-changed', handleUrlChange);
    
    context.elements.buttons.push(button);

    return button;
}

export function createStructure(context) {
    context.elements = {};
    context.elements.buttons = [];
    context.elements.cardContainer = createElement('div', 'bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container');

    let index = 1;
    while (context.config[index + '_link']) {
        context.elements.cardContainer.appendChild(createButton(context, index))
        index++;
    }

    context.elements.style = createElement('style');
    context.elements.style.innerText = styles;
    context.elements.customStyle = createElement('style');

    context.card.classList.add('horizontal-buttons-stack-card');
    context.card.style.marginLeft = context.config.margin ?? '';
    if (!context.config.hide_gradient) {
      context.card.classList.add('has-gradient');
    }
    context.card.style.setProperty('--desktop-width', context.config.width_desktop ?? '500px');
    context.elements.cardContainer.appendChild(context.elements.style);
    context.elements.cardContainer.appendChild(context.elements.customStyle);
    context.content.appendChild(context.elements.cardContainer);

    context.content.addEventListener('scroll', () => {
        if (context.content.scrollLeft > 0) {
            context.content.classList.add('is-scrolled');
        } else {
            context.content.classList.remove('is-scrolled');
        }

        if (context.content.scrollWidth - BUTTON_MARGIN < context.content.offsetWidth + context.content.scrollLeft) {
            context.content.classList.add('is-maxed-scroll');
        } else {
            context.content.classList.remove('is-maxed-scroll');
        }
    });

    const riseAnimation = context.config.rise_animation ?? true;

    if (riseAnimation) {
        context.content.style.animation = 'from-bottom .6s forwards';
        setTimeout(() => {
            context.content.style.animation = 'none';
        }, 1500);
    }

    // Fix for the last cards that are hidden by the HBS
    let parentElement = context.card.parentNode.host;
    if (parentElement && !context.editor && parentElement.parentElement.tagName.toLowerCase() !== 'hui-card') {
        parentElement.style.padding = '0 0 80px';
    } else if (parentElement.parentElement && !context.editor && parentElement.parentElement.tagName.toLowerCase() === 'hui-card') {
        parentElement.parentElement.style.padding = '0 0 80px';
    }

    context.cardType = "horizontal-buttons-stack";
}
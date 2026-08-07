import { createElement, forwardHaptic, navigate } from "../../tools/utils.js";
import { isHaCardWrapper } from '../../tools/ha-boundary.js';
import { startContentInsetSync } from '../../tools/content-inset.js';
import { addHash, removeHash } from "../pop-up/helpers.js";
import { getStoredButtonWidth } from './button-width-storage.js';
import styles from "./styles.css";

let isOpen = false;
const BUTTON_MARGIN = 12;

function isPopupHashLink(link) {
    return typeof link === 'string' && link.startsWith('#');
}

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
    let buttonWidth = getStoredButtonWidth(link);
    button.style.width = `${buttonWidth}px`;

    button.appendChild(iconElement);
    button.appendChild(nameElement);
    button.appendChild(backgroundColorElement);
    button.appendChild(backgroundElement);
    button.addEventListener('click', () => {
                const currentLink = button.link;
                if (!currentLink) {
                        return;
                }

                if (!isPopupHashLink(currentLink)) {
                        navigate(button, currentLink);
            forwardHaptic("light");
            return;
        }

                if (location.hash !== currentLink) {
            isOpen = false;
        }

        if (isOpen) {
          removeHash()
        } else {
                    addHash(currentLink);
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

    button.haRipple = createElement('ha-ripple');
    button.appendChild(button.haRipple);

    function handleUrlChange() {
        if (!context.config.highlight_current_view) return;

        const currentLink = button.link;
        const isShown = location.pathname === currentLink || location.hash === currentLink;
        if (isShown) {
            button.classList.add("highlight");
        } else {
            button.classList.remove("highlight");
        }
    }

    window.addEventListener('location-changed', handleUrlChange);

    // createButton owns both sides of adding a button: the entry in
    // context.elements.buttons that placeButtons walks, and the node in the
    // card container. Callers only call it, so the list and the DOM can never
    // disagree. A caller that registered or appended on its own used to leave
    // the button listed twice and missing from the container.
    context.elements.buttons.push(button);
    context.elements.cardContainer.appendChild(button);

    return button;
}

export function createStructure(context) {
    context.elements = {};
    context.elements.buttons = [];
    context.elements.cardContainer = createElement('div', 'bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container');

    let index = 1;
    while (context.config[index + '_link']) {
        createButton(context, index);
        index++;
    }

    context.elements.style = createElement('style');
    context.elements.style.textContent = styles;
    context.elements.customStyle = createElement('style');

    context.card.classList.add('horizontal-buttons-stack-card');
    // The bar is position:fixed, so it offsets itself by where the dashboard
    // content starts. Start measuring that: a dashboard with a buttons stack
    // and no pop-up would otherwise never publish the value.
    startContentInsetSync();
    context.card.style.marginInlineStart = context.config.margin ?? '';
    if (!context.config.hide_gradient) {
      context.card.classList.add('has-gradient');
    }
    context.card.style.setProperty('--desktop-width', context.config.width_desktop ?? '500px');
    context.elements.cardContainer.appendChild(context.elements.style);
    context.elements.cardContainer.appendChild(context.elements.customStyle);
    context.content.appendChild(context.elements.cardContainer);

    context.content.addEventListener('scroll', () => {
        // scrollLeft goes negative in RTL, the magnitude works for both directions
        const scrolled = Math.abs(context.content.scrollLeft);
        if (scrolled > 0) {
            context.content.classList.add('is-scrolled');
        } else {
            context.content.classList.remove('is-scrolled');
        }

        if (context.content.scrollWidth - BUTTON_MARGIN < context.content.offsetWidth + scrolled) {
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
    if (parentElement?.parentElement && !context.editor && isHaCardWrapper(parentElement?.parentElement)) {
        parentElement.parentElement.style.padding = '0 0 80px';
    }

    context.cardType = "horizontal-buttons-stack";
}

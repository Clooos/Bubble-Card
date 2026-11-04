import { createElement, forwardHaptic, navigate } from "../../tools/utils.js";
import { isHaCardWrapper } from '../../tools/ha-boundary.js';
import { startContentInsetSync } from '../../tools/content-inset.js';
import { addHash, removeHash } from "../pop-up/helpers.js";
import { getStoredButtonWidth } from './button-width-storage.js';
import { resolveTemplate } from "../../tools/render-template.js";
import styles from "./styles.css";

let isOpen = false;
const BUTTON_MARGIN = 12;
// Pixels a mouse has to move with the button held before the press becomes a
// drag of the row instead of a click on the button under it.
const DRAG_START_SLOP = 6;

function isPopupHashLink(link) {
    return typeof link === 'string' && link.startsWith('#');
}

// The stack scrolls horizontally with its scrollbar hidden. A finger drags it,
// but a mouse has nothing to grab and its wheel scrolls the page, so on a
// desktop the buttons past the edge could not be reached (#2522). A mouse drag
// now scrolls the row like a finger does: a press that moves past the slop
// scrolls, and the click that ends it is swallowed so the button under the
// pointer does not open. Touch and pen keep the browser's own scrolling.
export function enableMouseDragScroll(scroller) {
    let pressed = false;
    let dragging = false;
    let swallowClick = false;
    let startX = 0;
    let startScrollLeft = 0;
    let pointerId = null;

    scroller.addEventListener('pointerdown', (event) => {
        if (event.pointerType !== 'mouse' || event.button !== 0) {
            return;
        }
        pressed = true;
        dragging = false;
        startX = event.clientX;
        startScrollLeft = scroller.scrollLeft;
        pointerId = event.pointerId;
    });

    scroller.addEventListener('pointermove', (event) => {
        if (!pressed) {
            return;
        }
        const deltaX = event.clientX - startX;
        if (!dragging && Math.abs(deltaX) > DRAG_START_SLOP) {
            dragging = true;
            // Keeps the drag going when the pointer leaves the bar
            try {
                scroller.setPointerCapture?.(pointerId);
            } catch (error) {
                // The pointer is already gone, the drag ends on its own
            }
            scroller.classList.add('is-dragging');
        }
        if (dragging) {
            // Moving the content with the pointer also holds in RTL, where
            // scrollLeft counts down from 0
            scroller.scrollLeft = startScrollLeft - deltaX;
            event.preventDefault();
        }
    });

    const endPress = () => {
        if (!pressed) {
            return;
        }
        pressed = false;
        if (dragging) {
            dragging = false;
            scroller.classList.remove('is-dragging');
            swallowClick = true;
            // A release outside the buttons fires no click, so the flag must
            // not wait for one and eat the next real click
            setTimeout(() => {
                swallowClick = false;
            }, 0);
        }
    };
    scroller.addEventListener('pointerup', endPress);
    scroller.addEventListener('pointercancel', endPress);

    // Capture phase, so the click is stopped before the button's own handler
    scroller.addEventListener('click', (event) => {
        if (swallowClick) {
            swallowClick = false;
            event.stopPropagation();
            event.preventDefault();
        }
    }, true);
}

export function createButton(context, index) {
    const name = resolveTemplate(context, context.config[`${index}_name`]) ?? '';
    const icon = resolveTemplate(context, context.config[`${index}_icon`]) ?? '';
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
    // The bar is fixed-positioned, so it offsets itself by where the dashboard
    // content starts. On the versions of Home Assistant that do not publish
    // that, a dashboard with a buttons stack and no pop-up would otherwise
    // never measure it.
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

    enableMouseDragScroll(context.content);

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

import { createElement } from "../../tools/utils.js";
import { callSelectService } from "./helpers.js";
import styles from "./styles.css";

export function createDropdownStructure(context, elements = context.elements, showArrow) {
    elements.dropdownContainer = createElement('div', 'bubble-dropdown-container');
    elements.dropdownSelect = createElement('ha-select', 'bubble-dropdown-select');
    elements.dropdownSelect.setAttribute('outlined', '');
    elements.dropdownArrow = createElement('ha-icon', 'bubble-dropdown-arrow');
    elements.dropdownArrow.setAttribute('icon', 'mdi:chevron-down');
    
    // Styles for shadowRoot
    elements.dropdownStyleElement = createElement('style');
    elements.dropdownCustomStyleElement = createElement('style');
    elements.dropdownStyleElement.textContent = styles;
    
    // Styles for container
    elements.dropdownContainerStyle = createElement('style');
    elements.dropdownContainerStyle.textContent = styles;

    elements.dropdownContainer.appendChild(elements.dropdownArrow);
    elements.dropdownContainer.appendChild(elements.dropdownContainerStyle);

    function addStyleWhenShadowRootAvailable() {
        if (elements.dropdownSelect.shadowRoot) {
            elements.dropdownSelect.shadowRoot.appendChild(elements.dropdownStyleElement);
            elements.dropdownSelect.shadowRoot.appendChild(elements.dropdownCustomStyleElement);
            if (elements !== context.elements) {
                elements.dropdownSelectStyleElement = createElement('style');
                elements.dropdownSelectStyleElement.textContent = styles;
                elements.dropdownSelect.shadowRoot.appendChild(elements.dropdownSelectStyleElement);
                elements.dropdownContainer.appendChild(elements.dropdownStyleElement);
                if (showArrow) elements.dropdownContainer.style.width = '24px';
                elements.dropdownArrow.style.height = '20px';
                elements.dropdownArrow.style.width = '20px';
                // elements.dropdownArrow.parentElement.parentElement.haRipple = createElement('ha-ripple');
                // elements.dropdownArrow.parentElement.parentElement.appendChild(elements.dropdownArrow.parentElement.parentElement.haRipple);
            }
        }
    }

    elements.dropdownSelect.updateComplete.then(() => {
        addStyleWhenShadowRootAvailable();
    });

    if (elements === context.elements) {
        elements.buttonsContainer.appendChild(elements.dropdownContainer);
    } else {
        elements.appendChild(elements.dropdownContainer);
    }
}

export function createDropdownActions(context, elements = context.elements, entity = context.config.entity, config = context.config) {
    const {
        dropdownArrow,
        dropdownSelect,
        mainContainer: defaultCard,
        background: defaultEventCaller
    } = elements;

    const card = elements === context.elements ? defaultCard : elements;
    const eventCaller = elements === context.elements ? defaultEventCaller : elements;

    // Create and append the inner border element
    elements.innerBorderElement = createElement('div');
    elements.innerBorderElement.classList.add('bubble-dropdown-inner-border');
    card.appendChild(elements.innerBorderElement);

    // Ensure the card can host an absolutely positioned child
    // Only set if it's static, to avoid overriding other position values.
    if (window.getComputedStyle(card).position === 'static') {
        card.style.position = 'relative';
    }

    card.haRipple = createElement('ha-ripple');
    if (elements === context.elements) {
        elements.background.appendChild(card.haRipple);
    } else {
        card.appendChild(card.haRipple);
    }

    if (elements !== context.elements) {
        // card.style.border = 'solid 2px rgba(0,0,0,0)'; // This line is removed
    }

    let isFirstOpen = true;

    const updateVisualStyles = () => {
        dropdownArrow.style.transform = 'rotate(180deg)';
        elements.dropdownArrow.style.background = 'var(--bubble-accent-color, var(--bubble-default-color))';
        // card.style.border = 'var(--bubble-select-border, solid 2px var(--bubble-accent-color, var(--bubble-default-color)))'; // Replaced by inner border logic
        if (elements.innerBorderElement) {
            elements.innerBorderElement.style.display = 'block';
        }
        if (context.elements && context.elements.mainContainer) {
            context.elements.mainContainer.style.overflow = 'visible';
        }
    };

    const handleFirstOpen = (open, close) => {
        isFirstOpen = false;
        dropdownArrow.style.transition = 'none';
        open();
        requestAnimationFrame(() => {
            close();
            setTimeout(() => {
                dropdownArrow.style.transition = '';
                updateVisualStyles();
                open();
            }, 140);
        });
    };

    const handleEventClick = (event) => {
        if (event.target.tagName.toLowerCase() === 'mwc-list-item') return;

        const menuElement = dropdownSelect.shadowRoot.querySelector('ha-menu.mdc-select__menu');

        if (!menuElement) {
            // Fallback to mwc-menu if ha-menu is not found
            const oldSelectMenu = dropdownSelect.shadowRoot.querySelector('mwc-menu');
            if (oldSelectMenu) {
                if (isFirstOpen) {
                    handleFirstOpen(
                        () => oldSelectMenu.setAttribute('open', ''),
                        () => oldSelectMenu.removeAttribute('open')
                    );
                } else if (!oldSelectMenu.hasAttribute('open')) {
                    oldSelectMenu.setAttribute('open', '');
                    updateVisualStyles();
                }
            }
            return;
        }

        if (typeof menuElement.open === 'boolean') {
            if (isFirstOpen) {
                handleFirstOpen(
                    () => menuElement.open = true,
                    () => menuElement.open = false
                );
            } else if (!menuElement.open) {
                menuElement.open = true;
                updateVisualStyles();
            }
        } else if (typeof menuElement.show === 'function') {
            const anchor = dropdownSelect.shadowRoot.querySelector('.mdc-select__anchor');
            const isCurrentlyOpen = anchor ? anchor.getAttribute('aria-expanded') === 'true' : false;
            
            if (isFirstOpen) {
                handleFirstOpen(
                    () => menuElement.show(),
                    () => menuElement.close()
                );
            } else if (!isCurrentlyOpen) {
                menuElement.show();
                updateVisualStyles();
            }
        }
    };

    const handleMenuClosed = (event) => {
        event.stopPropagation();

        dropdownArrow.style.transform = 'rotate(0deg)';
        // card.style.border = 'solid 2px rgba(0,0,0,0)'; // Replaced by inner border logic
        if (elements.innerBorderElement) {
            elements.innerBorderElement.style.display = 'none';
        }
        elements.dropdownArrow.style.background = '';
        if (context.elements && context.elements.mainContainer) {
            context.elements.mainContainer.style.overflow = '';
        }
    };

    const handleDropdownSelect = (event) => {
        const selectedOption = event.target.value;
        callSelectService(context, entity, selectedOption, config);
    };

    eventCaller.addEventListener('click', handleEventClick);
    dropdownSelect.addEventListener('closed', handleMenuClosed);
    elements.dropdownSelect.addEventListener('click', handleDropdownSelect);
}

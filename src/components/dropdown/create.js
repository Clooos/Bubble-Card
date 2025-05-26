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

    function fixMenuDisplay(menuElement) {
        menuElement.style.display = 'none';
        menuElement.setAttribute('open', '');
        setTimeout(() => {
            menuElement.removeAttribute('open');
            menuElement.style.display = '';
        }, 600); // Give time to the dropdown to be open
    }

    function addStyleWhenShadowRootAvailable() {
        if (elements.dropdownSelect.shadowRoot) {
            elements.dropdownSelect.shadowRoot.appendChild(elements.dropdownStyleElement);
            elements.dropdownSelect.shadowRoot.appendChild(elements.dropdownCustomStyleElement);
            const menuElement = elements.dropdownSelect.shadowRoot.querySelector('ha-menu.mdc-select__menu');
            fixMenuDisplay(menuElement);
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

    card.haRipple = createElement('ha-ripple');
    if (elements === context.elements) {
        elements.background.appendChild(card.haRipple);
    } else {
        card.appendChild(card.haRipple);
    }

    let isFirstOpen = true;

    const updateVisualStyles = () => {
        dropdownArrow.style.transform = 'rotate(180deg)';
        elements.dropdownArrow.style.background = 'var(--bubble-accent-color, var(--bubble-default-color))';
        if (elements.innerBorderElement) {
            elements.innerBorderElement.style.display = 'block';
        }
        if (context.elements && context.elements.mainContainer) {
            context.elements.mainContainer.style.overflow = 'visible';
        }
    };

    const handleEventClick = (event) => {
        if (event.target.tagName.toLowerCase() === 'mwc-list-item') return;

        const menuElement = dropdownSelect.shadowRoot.querySelector('ha-menu.mdc-select__menu');

        if (!menuElement) {
            // Fallback to mwc-menu if ha-menu is not found
            const oldSelectMenu = dropdownSelect.shadowRoot.querySelector('mwc-menu');
            if (oldSelectMenu) {
                oldSelectMenu.setAttribute('open', '');
                updateVisualStyles();
            }
            return;
        }
        // if (typeof menuElement.open === 'boolean') {
        //     console.log('open');
        //     menuElement.open = true;
        //     updateVisualStyles();
        // } else if (typeof menuElement.show === 'function') {
            // console.log('show');
            menuElement.show();
            updateVisualStyles();
        // }
    };

    const handleMenuClosed = (event) => {
        event.stopPropagation();

        dropdownArrow.style.transform = 'rotate(0deg)';
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

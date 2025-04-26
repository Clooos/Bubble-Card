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

    if (elements !== context.elements) {
        card.style.border = 'solid 2px rgba(0,0,0,0)';
    }

    let isFirstOpen = true;

    const handleEventClick = (event) => {
        if (event.target.tagName.toLowerCase() === 'mwc-list-item') return;

        const selectMenu = dropdownSelect.shadowRoot.querySelector('mwc-menu');

        if (!selectMenu.hasAttribute('open')) {
            dropdownArrow.style.transform = 'rotate(180deg)';
            elements.dropdownArrow.style.background = 'var(--bubble-accent-color, var(--bubble-default-color))';
            card.style.border = 'var(--bubble-select-border, solid 2px var(--bubble-accent-color, var(--bubble-default-color)))';
            context.elements.mainContainer.style.overflow = 'visible';
            selectMenu.setAttribute('open', '');
        }
    };

    const handleMenuClosed = (event) => {
        event.stopPropagation();
        event.preventDefault();

        dropdownArrow.style.transform = 'rotate(0deg)';
        card.style.border = 'solid 2px rgba(0,0,0,0)';
        elements.dropdownArrow.style.background = '';
        context.elements.mainContainer.style.overflow = '';
    };

    const handleDropdownSelect = (event) => {
        const selectedOption = event.target.value;
        callSelectService(context, entity, selectedOption, config);
    };

    eventCaller.addEventListener('click', handleEventClick);
    dropdownSelect.addEventListener('closed', handleMenuClosed);
    elements.dropdownSelect.addEventListener('click', handleDropdownSelect);
}

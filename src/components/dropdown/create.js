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
        if (!menuElement) return;

        // We listen for the 'opened' event to know when the component is ready.
        const onOpened = () => {
            setTimeout(() => {
                menuElement.removeAttribute('open');
                menuElement.style.display = '';
            }, 0);
        };

        menuElement.addEventListener('opened', onOpened, { once: true });

        menuElement.style.display = 'none';
        menuElement.setAttribute('open', '');
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

    const mainContainer = context.elements.mainContainer;
    if (mainContainer && typeof mainContainer.openDropdowns === 'undefined') {
        mainContainer.openDropdowns = 0;
    }

    let isMenuOpen = false;
    let pendingOpenTimer = null;
    let cancelNextOpenUntil = 0; // Timestamp until which we should not open (double-tap/hold guard)
    const isTopLevelCard = elements === context.elements;
    const hasDoubleTapAction = isTopLevelCard
        ? !!(config && config.button_action && config.button_action.double_tap_action && config.button_action.double_tap_action.action && config.button_action.double_tap_action.action !== 'none')
        : !!(config && config.double_tap_action && config.double_tap_action.action && config.double_tap_action.action !== 'none');

    const updateVisualStyles = () => {
        dropdownArrow.style.transform = 'rotate(180deg)';
        elements.dropdownArrow.style.background = 'var(--bubble-accent-color, var(--bubble-default-color))';
        if (elements.innerBorderElement) {
            elements.innerBorderElement.style.display = 'block';
        }
        if (context.elements && context.elements.mainContainer) {
            if (!isMenuOpen) {
                isMenuOpen = true;
                if (mainContainer) {
                    mainContainer.openDropdowns++;
                }
            }
            context.elements.mainContainer.style.overflow = 'visible';
        }
    };

    // Cancel any pending open if a double-tap or hold action is fired
    const cancelOnAction = (ev) => {
        const actionType = ev?.detail?.action;
        if (actionType !== 'double_tap' && actionType !== 'hold') return;
        // Only react if the action originated from the same clickable area (background or sub-button element)
        const path = (typeof ev.composedPath === 'function') ? ev.composedPath() : [];
        if (!path.includes(eventCaller)) return;
        if (pendingOpenTimer) {
            clearTimeout(pendingOpenTimer);
            pendingOpenTimer = null;
        }
        cancelNextOpenUntil = Date.now() + 300;
    };
    card.addEventListener('hass-action', cancelOnAction);

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

        // If menu is already open, let the click close it and do not schedule a reopen
        if (isMenuOpen) {
            if (pendingOpenTimer) {
                clearTimeout(pendingOpenTimer);
                pendingOpenTimer = null;
            }
            cancelNextOpenUntil = Date.now() + 200;
            return;
        }

        // If a double-tap/hold just happened, skip opening
        if (Date.now() < cancelNextOpenUntil) {
            return;
        }

        if (hasDoubleTapAction) {
            // Delay opening slightly to allow double-tap detection to cancel
            if (pendingOpenTimer) {
                clearTimeout(pendingOpenTimer);
                pendingOpenTimer = null;
            }
            pendingOpenTimer = setTimeout(() => {
                // Guard again in case an action fired during the delay
                if (Date.now() < cancelNextOpenUntil) {
                    pendingOpenTimer = null;
                    return;
                }
                menuElement.show();
                updateVisualStyles();
                pendingOpenTimer = null;
            }, 220);
        } else {
            // Open immediately if no double-tap action is configured
            menuElement.show();
            updateVisualStyles();
        }
    };

    const handleMenuClosed = (event) => {
        event.stopPropagation();

        dropdownArrow.style.transform = 'rotate(0deg)';
        if (elements.innerBorderElement) {
            elements.innerBorderElement.style.display = 'none';
        }
        elements.dropdownArrow.style.background = '';
        if (context.elements && context.elements.mainContainer) {
            if (isMenuOpen) {
                isMenuOpen = false;
                if (mainContainer) {
                    mainContainer.openDropdowns--;
                }
            }
            if (mainContainer && mainContainer.openDropdowns === 0) {
                context.elements.mainContainer.style.overflow = '';
            }
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

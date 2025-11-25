import { createElement } from "../../tools/utils.js";
import { callSelectService } from "./helpers.js";
import styles from "./styles.css";

export function createDropdownStructure(context, elements = context.elements, showArrow) {
    elements.dropdownContainer = elements.dropdownContainer || createElement('div', 'bubble-dropdown-container');
    elements.dropdownSelect = elements.dropdownSelect || createElement('ha-select', 'bubble-dropdown-select');
    elements.dropdownSelect.setAttribute('outlined', '');
    elements.dropdownArrow = elements.dropdownArrow || createElement('ha-icon', 'bubble-dropdown-arrow');
    elements.dropdownArrow.setAttribute('icon', 'mdi:chevron-down');

    // Styles for shadowRoot (attach only once per dropdown instance)
    elements.dropdownStyleElement = elements.dropdownStyleElement || createElement('style');
    elements.dropdownCustomStyleElement = elements.dropdownCustomStyleElement || createElement('style');
    if (!elements._dropdownShadowStylesInitialized) {
        elements.dropdownStyleElement.textContent = styles;
        elements._dropdownShadowStylesInitialized = true;
    }

    // Styles for container (attach only once per container)
    elements.dropdownContainerStyle = elements.dropdownContainerStyle || createElement('style');
    if (!elements._dropdownContainerStyleInitialized) {
        elements.dropdownContainerStyle.textContent = styles;
        elements._dropdownContainerStyleInitialized = true;
    }

    if (!elements.dropdownArrow.isConnected) {
        elements.dropdownContainer.appendChild(elements.dropdownArrow);
    }
    if (!elements.dropdownContainerStyle.isConnected) {
        elements.dropdownContainer.appendChild(elements.dropdownContainerStyle);
    }

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
            const root = elements.dropdownSelect.shadowRoot;
            if (elements.dropdownStyleElement && !elements.dropdownStyleElement.isConnected) {
                root.appendChild(elements.dropdownStyleElement);
            }
            if (elements.dropdownCustomStyleElement && !elements.dropdownCustomStyleElement.isConnected) {
                root.appendChild(elements.dropdownCustomStyleElement);
            }
            const menuElement = root.querySelector('ha-menu.mdc-select__menu');
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

    // Ensure previous listeners are cleaned up before re-attaching
    if (typeof elements.dropdownCleanup === 'function') {
        elements.dropdownCleanup();
    }

    // Create and append the inner border element only once
    if (!elements.innerBorderElement) {
        elements.innerBorderElement = createElement('div');
        elements.innerBorderElement.classList.add('bubble-dropdown-inner-border');
        card.appendChild(elements.innerBorderElement);
    } else if (!elements.innerBorderElement.isConnected) {
        card.appendChild(elements.innerBorderElement);
    }

    // Create ripple only if absent
    if (!card.haRipple) {
        card.haRipple = createElement('ha-ripple');
    }
    if (!card.haRipple.isConnected) {
        if (elements === context.elements) {
            elements.background.appendChild(card.haRipple);
        } else {
            card.appendChild(card.haRipple);
        }
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
    const abortController = new AbortController();
    const { signal } = abortController;

    card.addEventListener('hass-action', cancelOnAction, { signal });

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

    eventCaller.addEventListener('click', handleEventClick, { signal });
    dropdownSelect.addEventListener('closed', handleMenuClosed, { signal });
    elements.dropdownSelect.addEventListener('click', handleDropdownSelect, { signal });

    // Expose a cleanup function to remove listeners and timers
    elements.dropdownCleanup = () => {
        if (pendingOpenTimer) {
            clearTimeout(pendingOpenTimer);
            pendingOpenTimer = null;
        }
        abortController.abort();
        // Ensure visual state is reset when cleaning up
        if (elements.dropdownArrow) {
            elements.dropdownArrow.style.transform = 'rotate(0deg)';
            elements.dropdownArrow.style.background = '';
        }
        if (elements.innerBorderElement) {
            elements.innerBorderElement.style.display = 'none';
        }
        if (mainContainer && typeof mainContainer.openDropdowns === 'number' && isMenuOpen) {
            mainContainer.openDropdowns = Math.max(0, mainContainer.openDropdowns - 1);
            isMenuOpen = false;
        }
    };
}

export function destroyDropdown(contextOrElements) {
    const elements = contextOrElements?.elements ? contextOrElements.elements : contextOrElements;
    if (!elements) return;
    if (typeof elements.dropdownCleanup === 'function') {
        elements.dropdownCleanup();
    }
}

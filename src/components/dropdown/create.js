import { createElement } from "../../tools/utils.js";
import { callSelectService, isNewHaFrontend } from "./helpers.js";
import styles from "./styles.css";

const MENU_WIDTH = 200;
const MENU_OVERLAP = 40;

// Find the closest ancestor matching a selector, traversing shadow DOM boundaries.
function closestAcrossShadowDOM(element, selector) {
    let current = element;
    while (current) {
        const found = current.closest?.(selector);
        if (found) return found;
        const root = current.getRootNode?.();
        if (root instanceof ShadowRoot) {
            current = root.host;
        } else {
            break;
        }
    }
    return null;
}

// Check if the dropdown should open to the right instead of left (old HA only).
function shouldOpenRight(dropdownContainer) {
    if (!dropdownContainer) return false;

    const dropdownLeft = dropdownContainer.getBoundingClientRect().left;
    const popupContainer = closestAcrossShadowDOM(dropdownContainer, '.bubble-pop-up-container');

    if (!popupContainer) {
        return dropdownLeft < (MENU_WIDTH - MENU_OVERLAP);
    }

    const containerRect = popupContainer.getBoundingClientRect();
    const paddingLeft = parseFloat(getComputedStyle(popupContainer).paddingLeft) || 0;
    const availableSpace = dropdownLeft - containerRect.left - paddingLeft;

    return availableSpace < (MENU_WIDTH - MENU_OVERLAP);
}

// Apply or remove the open-right positioning class (old HA only).
function updateDropdownPosition(dropdownSelect, dropdownContainer) {
    if (!dropdownSelect?.shadowRoot || !dropdownContainer) return;

    const mdcSelect = dropdownSelect.shadowRoot.querySelector('.mdc-select');
    const openRight = shouldOpenRight(dropdownContainer);

    if (openRight) {
        mdcSelect?.classList.add('bubble-open-right');
        dropdownContainer.classList.add('bubble-open-right');
    } else {
        mdcSelect?.classList.remove('bubble-open-right');
        dropdownContainer.classList.remove('bubble-open-right');
    }
}

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

    // Force the mwc/ha-menu to render by briefly opening it (old HA workaround).
    function fixMenuDisplay(menuElement) {
        if (!menuElement) return;

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
            // fixMenuDisplay is only needed on old HA (new HA uses ha-dropdown which handles its own display)
            if (!isNewHaFrontend(context?._hass)) {
                const menuElement = root.querySelector('ha-menu.mdc-select__menu');
                fixMenuDisplay(menuElement);
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
    const newHa = isNewHaFrontend(context?._hass);

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
    let cancelNextOpenUntil = 0;
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
        // Re-enable pointer events so the open menu and its items are interactive
        if (newHa) {
            dropdownSelect.style.pointerEvents = 'auto';
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

    // Open the dropdown menu using the appropriate method for the current HA version.
    const openMenu = () => {
        if (newHa) {
            // New HA: ha-dropdown is opened by setting open = true (webawesome Dropdown API)
            const haDropdown = dropdownSelect.shadowRoot?.querySelector('ha-dropdown');
            if (haDropdown) haDropdown.open = true;
        } else {
            const menuElement = dropdownSelect.shadowRoot?.querySelector('ha-menu.mdc-select__menu');
            if (!menuElement) {
                // Fallback for even older HA versions using mwc-menu
                const oldSelectMenu = dropdownSelect.shadowRoot?.querySelector('mwc-menu');
                if (oldSelectMenu) {
                    updateDropdownPosition(dropdownSelect, elements.dropdownContainer);
                    oldSelectMenu.setAttribute('open', '');
                }
                return;
            }
            updateDropdownPosition(dropdownSelect, elements.dropdownContainer);
            menuElement.show();
        }
    };

    // Cancel any pending open if a double-tap or hold action is fired
    const cancelOnAction = (ev) => {
        const actionType = ev?.detail?.action;
        if (actionType !== 'double_tap' && actionType !== 'hold') return;
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

    // New HA: ha-select sits on top of bubble-background and intercepts pointer events.
    // Disable them when the menu is closed so hover and click reach the background (ha-ripple).
    if (newHa) {
        dropdownSelect.style.pointerEvents = 'none';
    }

    card.addEventListener('hass-action', cancelOnAction, { signal });

    const handleEventClick = (event) => {
        // Ignore clicks originating from list items (they handle their own selection)
        if (event.target.closest?.('mwc-list-item, ha-dropdown-item')) return;

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
                if (Date.now() < cancelNextOpenUntil) {
                    pendingOpenTimer = null;
                    return;
                }
                openMenu();
                updateVisualStyles();
                pendingOpenTimer = null;
            }, 220);
        } else {
            openMenu();
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
        // Disable pointer events again so hover/click reach bubble-background (ha-ripple)
        if (newHa) {
            dropdownSelect.style.pointerEvents = 'none';
        }
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
        // New HA fires a 'selected' custom event with detail.value; old HA relies on click with target.value
        const selectedOption = newHa ? event.detail?.value : event.target?.value;
        if (selectedOption !== undefined) {
            callSelectService(context, entity, selectedOption, config);
        }
    };

    eventCaller.addEventListener('click', handleEventClick, { signal });

    if (newHa) {
        // New HA: ha-select fires 'selected' when an item is chosen
        dropdownSelect.addEventListener('selected', handleDropdownSelect, { signal });
    } else {
        // Old HA: listen to 'closed' on ha-select and 'click' bubbling from mwc-list-item
        dropdownSelect.addEventListener('closed', handleMenuClosed, { signal });
        dropdownSelect.addEventListener('click', handleDropdownSelect, { signal });
    }

    // New HA: attach menu-close listener directly on the inner ha-dropdown after shadow DOM is ready
    let haDropdownAbort = null;
    let setupCancelled = false;

    if (newHa) {
        const setupInnerDropdownListener = () => {
            if (setupCancelled) return;
            const haDropdown = dropdownSelect.shadowRoot?.querySelector('ha-dropdown');
            if (!haDropdown) return;
            haDropdownAbort = new AbortController();
            const { signal } = haDropdownAbort;

            haDropdown.addEventListener('wa-after-hide', handleMenuClosed, { signal });
        };

        // If shadow DOM is already available (e.g. on re-render), set up immediately
        if (dropdownSelect.shadowRoot?.querySelector('ha-dropdown')) {
            setupInnerDropdownListener();
        } else {
            dropdownSelect.updateComplete?.then(setupInnerDropdownListener);
        }
    }

    // Expose a cleanup function to remove all listeners and timers
    elements.dropdownCleanup = () => {
        setupCancelled = true;
        if (pendingOpenTimer) {
            clearTimeout(pendingOpenTimer);
            pendingOpenTimer = null;
        }
        abortController.abort();
        haDropdownAbort?.abort();
        haDropdownAbort = null;
        if (elements.dropdownArrow) {
            elements.dropdownArrow.style.transform = 'rotate(0deg)';
            elements.dropdownArrow.style.background = '';
        }
        if (elements.innerBorderElement) {
            elements.innerBorderElement.style.display = 'none';
        }
        // Reset pointer-events to CSS-driven value
        if (newHa && dropdownSelect) {
            dropdownSelect.style.pointerEvents = '';
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

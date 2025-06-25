import { getBackdrop } from "./create.js";
import { callAction } from "../../tools/tap-actions.js";
import { toggleBodyScroll } from "../../tools/utils.js";

const popupState = {
  hashRecentlyAdded: false,
  scrollY: 0,
  currentHash: null,
  hashChangeProtection: false,
  isAnimating: false,
  animationDuration: 300, // Animation duration in ms
  activePopups: new Set(), // Track active popups
  entityTriggeredPopup: null // Reference to entity-triggered popup
};

const dialogNode = new Set(['HA-DIALOG', 'HA-MORE-INFO-DIALOG', 'HA-DIALOG-DATE-PICKER']);

export function clickOutside(event, context) {
    if (!(context.config.close_by_clicking_outside ?? true)) return;
    
    const targets = event.composedPath();
    const popupTarget = targets.find(target => {
        if (!target.classList && !target.nodeName) return false;
        return target.classList?.contains('bubble-pop-up') || 
               dialogNode.has(target.nodeName);
    });
    
    if (!popupTarget) removeHash();
}

function resetCloseTimeout(context) { 
    if(!context.config.auto_close || !context.closeTimeout) return;
    clearTimeout(context.closeTimeout);
    context.closeTimeout = setTimeout(removeHash, context.config.auto_close);
}

export function removeHash() {
    if (popupState.hashRecentlyAdded || !location.hash || popupState.hashChangeProtection) {
        return false;
    }
    
    setTimeout(() => {
        if (popupState.hashChangeProtection) {
            return;
        }
        
        const newURL = window.location.href.split('#')[0];
        history.replaceState(null, "", newURL);
        window.dispatchEvent(new Event('location-changed'));
    }, 50);
    
    return true;
}

export function addHash(hash) {
    popupState.hashChangeProtection = true;
    
    const newURL = hash.startsWith('#') ? window.location.href.split('#')[0] + hash : hash;
    history.pushState(null, "", newURL);
    window.dispatchEvent(new Event('location-changed'));
    
    setTimeout(() => {
        popupState.hashChangeProtection = false;
    }, 200);
}

export function hideContent(context, delay) {
    if (context.config.background_update) {
        context.popUp.style.display = 'none';
        return;
    } else if (context.editor) {
        return;
    }

    context.hideContentTimeout = setTimeout(() => {
        const { sectionRow, sectionRowContainer } = context;
        if (sectionRow?.tagName.toLowerCase() === 'hui-card') {
            sectionRow.hidden = true;
            sectionRow.style.display = "none";
            if (sectionRowContainer?.classList.contains('card')) {
                sectionRowContainer.style.display = "none";
            }
        }
    }, delay);
}

export function displayContent(context) {
    if (context.config.background_update) {
        context.popUp.style.display = '';
        return;
    }

    const { sectionRow, sectionRowContainer, popUp } = context;
    popUp.style.transform = '';
    if (sectionRow?.tagName.toLowerCase() === 'hui-card') {
        sectionRow.hidden = false;
        sectionRow.style.display = "";
        if (sectionRowContainer?.classList.contains('card')) {
            sectionRowContainer.style.display = "";
        }
    }
}

function toggleBackdrop(context, show) {
    const { showBackdrop, hideBackdrop } = getBackdrop(context);
    show ? showBackdrop() : hideBackdrop();
}

export function appendPopup(context, append) {
    if (context.config.background_update) return;

    if (append) {
        context.verticalStack.appendChild(context.popUp);
    } else if (!append && !context.config.background_update) {
        if (context.verticalStack.contains(context.popUp)) {
            context.verticalStack.removeChild(context.popUp);
        }
    }
}

function updatePopupClass(popUp, open) {
    // Set animation flag to prevent simultaneous animations
    popupState.isAnimating = true;
    
    requestAnimationFrame(() => {
        popUp.classList.toggle('is-popup-opened', open);
        popUp.classList.toggle('is-popup-closed', !open);
        
        // Clear animation flag after animation completes
        setTimeout(() => {
            popupState.isAnimating = false;
        }, popupState.animationDuration);
    });
}

export function updateListeners(context, add) {
    if (!context.boundClickOutside) {
        context.boundClickOutside = event => clickOutside(event, context);
    }

    if (!context.resetCloseTimeout) {
      context.resetCloseTimeout = () => resetCloseTimeout(context);
    }
    
    if (!context.touchHandlersInitialized) {
        const { handleTouchStart, handleTouchMove, handleTouchEnd } = createTouchHandlers(context);
        context.handleTouchStart = handleTouchStart;
        context.handleTouchMove = handleTouchMove;
        context.handleTouchEnd = handleTouchEnd;
        context.touchHandlersInitialized = true;
    }

    if (add && !context.editor) {
        if (!context.listenersAdded) {
            if (context.config.auto_close) {
                context.popUp.addEventListener('touchstart', context.resetCloseTimeout, { passive: true });
                context.popUp.addEventListener('click', context.resetCloseTimeout, { passive: true });
            }
            
            if (context.popUp) {
                if (context.handleTouchStart) {
                    context.popUp.addEventListener('touchstart', context.handleTouchStart, { passive: true });
                }
                if (context.handleTouchMove) {
                    context.popUp.addEventListener('touchmove', context.handleTouchMove, { passive: false });
                }
                if (context.handleTouchEnd) {
                    context.popUp.addEventListener('touchend', context.handleTouchEnd, { passive: true });
                }
                if (context.handleHeaderTouchMove && context.elements?.header) {
                    context.elements.header.addEventListener('touchmove', context.handleHeaderTouchMove, { passive: true });
                }
                if (context.handleHeaderTouchEnd && context.elements?.header) {
                    context.elements.header.addEventListener('touchend', context.handleHeaderTouchEnd, { passive: true });
                }
                if (context.closeOnEscape) {
                    window.addEventListener('keydown', context.closeOnEscape, { passive: true });
                }
                if (context.config.close_on_click) {
                    context.popUp.addEventListener('click', removeHash, { passive: true });
                    context.popUp.dataset.closeOnClick = 'true';
                } else {
                    delete context.popUp.dataset.closeOnClick;
                }
            }
            context.listenersAdded = true;
        }

        if (!context.clickOutsideListenerAdded) {
            window.addEventListener('click', context.boundClickOutside, { passive: true });
            context.clickOutsideListenerAdded = true;
        }
    } else {
        if (context.listenersAdded) {
            toggleBodyScroll(false);

            if (context.config.auto_close) {
                context.popUp.removeEventListener('touchstart', context.resetCloseTimeout);
                context.popUp.removeEventListener('click', context.resetCloseTimeout);
            }
            
            if (context.popUp) {
                if (context.handleTouchStart) {
                    context.popUp.removeEventListener('touchstart', context.handleTouchStart);
                }
                if (context.handleTouchMove) {
                    context.popUp.removeEventListener('touchmove', context.handleTouchMove);
                }
                if (context.handleTouchEnd) {
                    context.popUp.removeEventListener('touchend', context.handleTouchEnd);
                }
                if (context.handleHeaderTouchMove && context.elements?.header) {
                    context.elements.header.removeEventListener('touchmove', context.handleHeaderTouchMove);
                }
                if (context.handleHeaderTouchEnd && context.elements?.header) {
                    context.elements.header.removeEventListener('touchend', context.handleHeaderTouchEnd);
                }
                if (context.closeOnEscape) {
                    window.removeEventListener('keydown', context.closeOnEscape);
                }
                if (context.config.close_on_click) {
                    context.popUp.removeEventListener('click', removeHash);
                    delete context.popUp.dataset.closeOnClick;
                }
            }
            context.listenersAdded = false;
        }
        
        if (context.clickOutsideListenerAdded) {
            window.removeEventListener('click', context.boundClickOutside);
            context.clickOutsideListenerAdded = false;
        }
    }
}

function clearAllTimeouts(context) {
    ['hideContentTimeout', 'removeDomTimeout', 'closeTimeout'].forEach(timeout => {
        if (context[timeout]) {
            clearTimeout(context[timeout]);
            context[timeout] = null;
        }
    });
}

// Helper function to close all popups except the specified one
function closeAllPopupsExcept(exceptContext) {
    // Create a copy of the Set to iterate over, as closing modifies the original Set
    const popupsToClose = new Set(popupState.activePopups);
    for (const popupContext of popupsToClose) {
        if (popupContext !== exceptContext) {
            // Close the popup immediately and forcefully
            closePopup(popupContext, true);
        }
    }
}

export function openPopup(context) {
    // If popup is already open, return
    if (context.popUp.classList.contains('is-popup-opened')) return;
    
    // Check if another popup is active
    if (popupState.activePopups.size > 0) {
        // If this popup is triggered by entity state, close all other popups first
        if (popupState.entityTriggeredPopup) {
            return;
        }
    }

    clearAllTimeouts(context);
    
    // Save current scroll position
    popupState.scrollY = window.scrollY;
    
    const { popUp } = context;
    
    if (!context.verticalStack.contains(popUp)) {
        appendPopup(context, true);
    }

    // Add to active popups set
    popupState.activePopups.add(context);

    // Actions to perform at the very start of the opening process (synchronized with animation frame)
    requestAnimationFrame(() => {
        updatePopupClass(popUp, true);
        displayContent(context);
        toggleBackdrop(context, true);
        
        // Actions to perform after the main CSS animation is complete
        setTimeout(() => {
            // Check if the popup wasn't closed before this timeout executed
            if (!popUp.classList.contains('is-popup-opened') || !popupState.activePopups.has(context)) {
                return;
            }

            toggleBodyScroll(true);
            updateListeners(context, true);
            
            if (context.config.auto_close > 0) {
                if (context.closeTimeout) clearTimeout(context.closeTimeout); 
                context.closeTimeout = setTimeout(() => {
                    // Ensure context is still valid and popup is the one to close or hash matches
                    if (popupState.activePopups.has(context) && 
                        (context.config.hash === location.hash || !context.config.hash)) {
                         removeHash();
                    } else if (popupState.activePopups.has(context)) {
                         closePopup(context);
                    }
                }, context.config.auto_close);
            }
            
            if (context.config.open_action) {
                callAction(context.popUp, context.config, 'open_action');
            }
        }, popupState.animationDuration);
    });
}

export function closePopup(context, force = false) {
    if ((!context.popUp.classList.contains('is-popup-opened') && !force)) return;
    
    clearAllTimeouts(context);
    
    // Remove from active popups set
    popupState.activePopups.delete(context);
    
    // If this was an entity-triggered popup, clear the reference
    if (popupState.entityTriggeredPopup === context) {
        popupState.entityTriggeredPopup = null;
    }
    
    updatePopupClass(context.popUp, false);
    toggleBackdrop(context, false);

    // Use the shared animation duration constant
    context.removeDomTimeout = setTimeout(() => {
        appendPopup(context, false);
        hideContent(context, 0);
        
        // Restore scroll position
        if (popupState.scrollY !== undefined) {
            window.scrollTo(0, popupState.scrollY);
        }
    }, popupState.animationDuration);

    updateListeners(context, false);
    toggleBodyScroll(false);

    if (context.config.close_action) {
        callAction(context, context.config, 'close_action');
    }
}

export function onUrlChange(context) {
    return () => {
       if (context.config.hash === location.hash) {
            // If entity-triggered popup is active and this is hash-triggered, don't open
            if (popupState.entityTriggeredPopup) {
                return;
            }
            
            popupState.hashRecentlyAdded = true;
            popupState.currentHash = location.hash;
            
            // Enable protection during hash change handling
            popupState.hashChangeProtection = true;
            
            // Ensure only one popup is open. Close others before potentially opening this one.
            // Check for entity-triggered popup *before* closing others
            if (popupState.entityTriggeredPopup) {
                popupState.hashChangeProtection = false; // Release protection if we're not opening
                return; // Don't open hash popup if entity popup is active
            }

            // Now, close any other potentially open popups (e.g., another hash popup)
            closeAllPopupsExcept(context);
            
            setTimeout(() => {
                popupState.hashRecentlyAdded = false;
                // Keep protection for a bit longer than hashRecentlyAdded
                setTimeout(() => {
                    popupState.hashChangeProtection = false;
                }, 100);
            }, 100);

            requestAnimationFrame(() => {
                openPopup(context);
            });
        } else {
            requestAnimationFrame(() => {
                // Only close this popup if it's the one with the matching hash
                if (context.config.hash && context.config.hash !== location.hash) {
                    closePopup(context);
                }
            });
        }
    };
}

export function onEditorChange(context) {
    const { hideBackdrop } = getBackdrop(context);
    const detectedEditor = context.detectedEditor;
    const isEditorActive = context.editor || detectedEditor;

    if (isEditorActive) {
        hideBackdrop();
        clearTimeout(context.removeDomTimeout);

        if (!detectedEditor) {
            setupVisibilityObserver(context);
        }
    } else {
        if (context.observer) {
            context.observer.disconnect();
            context.observer = null;
        }
    }
}

function setupVisibilityObserver(context) {
    if (context.observer) {
        context.observer.disconnect();
        context.observer = null;
    }

    if (context.sectionRow) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const isEditorActive = context.editor || context.detectedEditor;
                if (entry.isIntersecting && !context.verticalStack.contains(context.popUp) && isEditorActive) {
                    context.verticalStack.appendChild(context.popUp);
                }
            });
        }, {
            rootMargin: '100px',
            threshold: 0.01
        });

        observer.observe(context.sectionRow);
        context.observer = observer;
    }
}

export function cleanupContext(context) {
    if (context.observer) {
        context.observer.disconnect();
        context.observer = null;
    }
    
    clearAllTimeouts(context);
    
    updateListeners(context, false);
    
    // Remove from active popups set
    popupState.activePopups.delete(context);
    
    // If this was an entity-triggered popup, clear the reference
    if (popupState.entityTriggeredPopup === context) {
        popupState.entityTriggeredPopup = null;
    }
    
    // Remove the URL change listener
    if (context.boundOnUrlChange) {
        window.removeEventListener('location-changed', context.boundOnUrlChange);
        window.removeEventListener('popstate', context.boundOnUrlChange);
        context.boundOnUrlChange = null;
    }
    
    // Clean up the colorScheme listener
    if (context.updatePopupColorListener) {
        const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
        colorScheme.removeEventListener('change', context.updatePopupColorListener);
        context.updatePopupColorListener = null;
    }
    
    if (context.popUp && context.popUp.parentNode && !context.config.background_update) {
        context.popUp.parentNode.removeChild(context.popUp);
    }
    
    if (context.elements) {
        context.elements = null;
    }
}

export function createTouchHandlers(context) {
    if (!context.handleTouchStart) {
        let startY = 0;
        let currentY = 0;
        let isDragging = false;
        
        context.handleTouchStart = (event) => {
            startY = event.touches[0].clientY;
            currentY = startY;
            isDragging = false;
        };
        
        context.handleTouchMove = (event) => {
            if (event.touches.length !== 1) return;
            
            currentY = event.touches[0].clientY;
            const deltaY = currentY - startY;
            
            if (Math.abs(deltaY) > 10) {
                isDragging = true;
                
                if (deltaY > 0) {
                    context.popUp.style.transform = `translateY(${deltaY}px)`;
                    event.preventDefault();
                }
            }
        };
        
        context.handleTouchEnd = (event) => {
            if (isDragging) {
                const deltaY = currentY - startY;
                
                if (deltaY > 100) {
                    removeHash();
                } else {
                    context.popUp.style.transform = '';
                }
                
                isDragging = false;
            }
        };
    }
    
    return {
        handleTouchStart: context.handleTouchStart,
        handleTouchMove: context.handleTouchMove,
        handleTouchEnd: context.handleTouchEnd
    };
}
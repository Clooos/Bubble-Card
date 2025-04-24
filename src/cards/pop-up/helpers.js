import { getBackdrop } from "./create.js";
import { callAction } from "../../tools/tap-actions.js";
import { toggleBodyScroll } from "../../tools/utils.js";

const dialogNode = new Set(['HA-DIALOG', 'HA-MORE-INFO-DIALOG', 'HA-DIALOG-DATE-PICKER']);

window.pendingHashChange = false;
window.activePopup = null;

window.popupRegistry = window.popupRegistry || {
  byDashboard: new Map(),
  currentDashboard: null
};

export function getDashboardPath() {
  return window.location.pathname;
}

export function registerPopup(context) {
  const dashboardPath = getDashboardPath();
  const popupHash = context.config.hash;
  
  if (!popupHash) return;
  
  // Initialize registry if it doesn't exist
  if (!window.popupRegistry.byDashboard.has(dashboardPath)) {
    window.popupRegistry.byDashboard.set(dashboardPath, new Map());
  }
  
  // Register this popup in the registry
  const dashboardPopups = window.popupRegistry.byDashboard.get(dashboardPath);
  dashboardPopups.set(popupHash, context);
  
  // Update current dashboard
  window.popupRegistry.currentDashboard = dashboardPath;
}

export function unregisterPopup(context) {
  const dashboardPath = getDashboardPath();
  const popupHash = context.config.hash;
  
  if (!popupHash || !window.popupRegistry.byDashboard.has(dashboardPath)) return;
  
  const dashboardPopups = window.popupRegistry.byDashboard.get(dashboardPath);
  dashboardPopups.delete(popupHash);
}

export function trackDashboardChange() {
  const currentPath = getDashboardPath();
  
  // If we've changed dashboard
  if (window.popupRegistry.currentDashboard !== currentPath) {
    // Close all pop-ups from the old dashboard
    if (window.popupRegistry.currentDashboard) {
      const oldDashboardPopups = window.popupRegistry.byDashboard.get(window.popupRegistry.currentDashboard);
      if (oldDashboardPopups) {
        oldDashboardPopups.forEach(context => {
          if (context.popUp.classList.contains('is-popup-opened')) {
            closePopup(context, true);
          }
        });
      }
    }
    
    window.popupRegistry.currentDashboard = currentPath;
  }
}

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
    if (!context.config.auto_close || !context.closeTimeout) return;

    clearTimeout(context.closeTimeout);
    context.closeTimeout = setTimeout(removeHash, context.config.auto_close);
}

export function removeHash() {
  if (!location.hash) return;
  
  const currentHash = location.hash;
  const dashboardPath = getDashboardPath();
  
  // Check if this hash is registered for this dashboard
  const dashboardPopups = window.popupRegistry.byDashboard.get(dashboardPath);
  const popupContext = dashboardPopups?.get(currentHash);
  
  if (popupContext) {
    // First visually close the popup
    closePopup(popupContext);
    
    // Then modify the URL
    const newURL = window.location.href.split('#')[0];
    history.pushState(null, "", newURL);
    window.dispatchEvent(new Event('location-changed'));
  } else {
    // Default behavior if not found in the registry
    const newURL = window.location.href.split('#')[0];
    history.pushState(null, "", newURL);
    window.dispatchEvent(new Event('location-changed'));
  }
}

export function addHash(hash) {
  if (!hash) return;
  
  const formattedHash = hash.startsWith('#') ? hash : `#${hash}`;
  
  // Close any active pop-up on this dashboard before opening a new one
  const dashboardPath = getDashboardPath();
  const dashboardPopups = window.popupRegistry.byDashboard.get(dashboardPath);
  
  if (dashboardPopups) {
    dashboardPopups.forEach((context, popupHash) => {
      if (popupHash !== formattedHash && context.popUp.classList.contains('is-popup-opened')) {
        closePopup(context);
      }
    });
  }
  
  // Modify the URL
  const newURL = window.location.href.split('#')[0] + formattedHash;
  history.pushState(null, "", newURL);
  window.dispatchEvent(new Event('location-changed'));
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
    requestAnimationFrame(() => {
        show ? showBackdrop() : hideBackdrop();
    });
}

export function appendPopup(context, append) {
    if (context.config.background_update) return;
    const action = append ? 'appendChild' : 'removeChild';

    if (append) {
        context.verticalStack.appendChild(context.popUp);
    } else if (context.verticalStack?.contains(context.popUp) && !context.config.background_update) {
        context.verticalStack.removeChild(context.popUp);
    }
}

function updatePopupClass(popUp, open) {
    requestAnimationFrame(() => {
        popUp.classList.toggle('is-popup-opened', open);
        popUp.classList.toggle('is-popup-closed', !open);
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

export function onUrlChange(context) {
  return () => {
    // Detect dashboard changes
    trackDashboardChange();
    
    // Then handle opening/closing based on the hash
    if (context.config.hash === location.hash) {
      requestAnimationFrame(() => {
        openPopup(context);
      });
    } else {
      requestAnimationFrame(() => {
        closePopup(context);
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
    // Clean up existing observer
    if (context.observer) {
        context.observer.disconnect();
        context.observer = null;
    }

    // Check if we're in editor mode
    if (context.sectionRow) {
        // Use a lighter observer with less sensitivity
        const observer = new IntersectionObserver((entries) => {
            // Limit the frequency of checks
            if (!context.observerThrottled) {
                context.observerThrottled = true;
                setTimeout(() => {
                    context.observerThrottled = false;
                }, 100); // Throttle to 100ms
                
                entries.forEach(entry => {
                    const isEditorActive = context.editor || context.detectedEditor;
                    if (entry.isIntersecting && !context.verticalStack.contains(context.popUp) && isEditorActive) {
                        context.verticalStack.appendChild(context.popUp);
                    }
                });
            }
        }, {
            rootMargin: '0px', // Reduce the margin
            threshold: 0.1 // Increase the threshold for fewer triggers
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
    
    // Unregister this popup
    unregisterPopup(context);
    
    // Clean up the active popup reference if necessary
    if (window.activePopup === context.popUp) {
        window.activePopup = null;
    }
    
    if (context.popUp && context.popUp.parentNode) {
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

export function openPopup(context) {
  if (context.popUp.classList.contains('is-popup-opened')) return;

  clearAllTimeouts(context);
  
  // Ensure the popup is registered
  registerPopup(context);
  
  // Close any other active pop-up on this dashboard
  const dashboardPath = getDashboardPath();
  const dashboardPopups = window.popupRegistry.byDashboard.get(dashboardPath);
  
  if (dashboardPopups) {
    dashboardPopups.forEach((otherContext, hash) => {
      if (otherContext !== context && otherContext.popUp.classList.contains('is-popup-opened')) {
        closePopup(otherContext, true);
      }
    });
  }
  
  // Set this popup as active
  window.activePopup = context.popUp;
  context.popUp._context = context;
  
  const { popUp } = context;
  
  if (!context.verticalStack.contains(popUp)) {
    appendPopup(context, true);
  }

  requestAnimationFrame(() => {
    toggleBackdrop(context, true);
    updatePopupClass(popUp, true);
    displayContent(context);
  });

  updateListeners(context, true);

  if (context.config.auto_close > 0) {
    context.closeTimeout = setTimeout(removeHash, context.config.auto_close);
  }

  toggleBodyScroll(true);

  if (context.config.open_action) {
    callAction(context.popUp, context.config, 'open_action');
  }
}

export function closePopup(context, force = false) {
    if (!context.popUp.classList.contains('is-popup-opened') && !force) return;
    
    clearAllTimeouts(context);
    
    // Clear the active popup reference if this is the active one
    if (window.activePopup === context.popUp) {
        window.activePopup = null;
    }
    
    updatePopupClass(context.popUp, false);
    toggleBackdrop(context, false);

    const animationDuration = 300;

    context.removeDomTimeout = setTimeout(() => {
        appendPopup(context, false);
        hideContent(context, 0);
    }, animationDuration);

    updateListeners(context, false);
    toggleBodyScroll(false);

    if (context.config.close_action) {
        callAction(context, context.config, 'close_action');
    }
}
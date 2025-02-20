import { getBackdrop } from "./create.js";
import { callAction } from "../../tools/tap-actions.js";
import { manageEvents } from './create.js';

let hashTimeout = null;
let hashRecentlyAdded = false;
let scrollY = 0;

export function clickOutside(event, context) {
    if (context.config.close_by_clicking_outside ?? true) {
      const targets = event.composedPath();
      const popupTarget = targets.find(target =>
          target.classList?.contains('bubble-pop-up') ||
          ['HA-DIALOG', 'HA-MORE-INFO-DIALOG', 'HA-DIALOG-DATE-PICKER'].includes(target.nodeName)
      );
      if (!popupTarget) removeHash();
    }
}

function resetCloseTimeout(context) { 
    if(!context.config.auto_close || !context.closeTimeout) return;
    // Clear current timeout and reset
    clearTimeout(context.closeTimeout);
    context.closeTimeout = setTimeout(removeHash, context.config.auto_close);
}

export function removeHash() {
    if (hashRecentlyAdded || !location.hash) return;
    setTimeout(() => {
        const newURL = window.location.href.split('#')[0];
        history.replaceState(null, "", newURL);
        window.dispatchEvent(new Event('location-changed'));
    }, 50);
}

export function addHash(hash) {
    const newURL = hash.startsWith('#') ? window.location.href.split('#')[0] + hash : hash;
    history.pushState(null, "", newURL);
    window.dispatchEvent(new Event('location-changed'));
}

export function hideContent(context, delay) {
    if (context.editor) return;
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
    const action = append ? 'appendChild' : 'removeChild';

    if (append) {
        context.verticalStack.appendChild(context.popUp);
    } else {
        context.verticalStack.removeChild(context.popUp);
    }
}

function updatePopupClass(popUp, open) {
    requestAnimationFrame(() => {
        popUp.classList.toggle('is-popup-opened', open);
        popUp.classList.toggle('is-popup-closed', !open);
    });
}

function updateListeners(context, add) {
    if (!context.boundClickOutside) {
        context.boundClickOutside = event => clickOutside(event, context);
    }

    if (!context.resetCloseTimeout) {
      context.resetCloseTimeout = () => {
        resetCloseTimeout(context);
      }
    }

    if (add) {
        if (!context.listenersAdded) {
            if (context.config.auto_close) {
                context.popUp.addEventListener('touchstart', context.resetCloseTimeout, { passive: true });
                context.popUp.addEventListener('click', context.resetCloseTimeout, { passive: true });
            }
            context.listenersAdded = true;
        }

        if (!context.clickOutsideListenerAdded) {
            window.addEventListener('click', context.boundClickOutside, { passive: true });
            context.clickOutsideListenerAdded = true;
        }
    } else {
        if (context.listenersAdded) {
            if (context.config.auto_close) {
                context.popUp.removeEventListener('touchstart', context.resetCloseTimeout);
                context.popUp.removeEventListener('click', context.resetCloseTimeout);
            }
            context.listenersAdded = false;
        }
        if (context.clickOutsideListenerAdded) {
            window.removeEventListener('click', context.boundClickOutside);
            context.clickOutsideListenerAdded = false;
        }
    }
}

function injectNoScrollStyles() {
    if (document.getElementById('no-scroll-styles')) return;

    const style = document.createElement('style');
    style.id = 'no-scroll-styles';
    style.textContent = `
        body.no-scroll {
            overflow: hidden;
            position: fixed;
            width: 100%;
            touch-action: none;
            left: 0;
        }
    `;

    document.head.appendChild(style);
}

export function toggleBodyScroll(disable) {
    injectNoScrollStyles();

    if (disable) {
        scrollY = window.scrollY;
        document.body.style.top = `-${scrollY}px`;
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
        window.scrollTo({ top: scrollY, behavior: 'instant' });
        setTimeout(() => {
            document.body.style.top = '';
        }, 0);
    }
}

function clearAllTimeouts(context) {
    ['hideContentTimeout', 'removeDomTimeout', 'closeTimeout'].forEach(timeout => clearTimeout(context[timeout]));
}

export function openPopup(context) {
    if (context.popUp.classList.contains('is-popup-opened')) return;

    clearAllTimeouts(context);
    appendPopup(context, true);

    requestAnimationFrame(() => {
        toggleBackdrop(context, true);
        updatePopupClass(context.popUp, true);
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

export function closePopup(context) {
     if (!context.popUp.classList.contains('is-popup-opened')) return;
    clearAllTimeouts(context);
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

export function onUrlChange(context) {
    return () => {
       if (context.config.hash === location.hash) {
            hashRecentlyAdded = true;
            setTimeout(() => {
                hashRecentlyAdded = false;
            }, 100);
            openPopup(context);
        } else {
            closePopup(context);
        }
    };
}

export function onEditorChange(context) {
    const { hideBackdrop } = getBackdrop(context);
    const host = context.verticalStack.host;
    const detectedEditor = context.detectedEditor;

    if (context.editor || detectedEditor) {
        hideBackdrop();
        clearTimeout(context.removeDomTimeout);

        if (!detectedEditor) {
            setupVisibilityObserver(context);
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
                if (entry.isIntersecting && !context.verticalStack.contains(context.popUp)) {
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
}
import { getBackdrop } from "./create.ts";
import { callAction } from "../../tools/tap-actions.ts";
import { manageEvents } from './create.ts';

let hashTimeout = null;
let hashRecentlyAdded = false;
let startTouchY;

function handleTouchStart(event) {
    startTouchY = event.touches[0].clientY;
}

function handleTouchMove(event, popUp) {
    const offset = event.touches[0].clientY - startTouchY;
    if (offset > 0) {
        requestAnimationFrame(() => {
            popUp.style.transform = `translateY(${offset}px)`;
        });
    }
}

function handleTouchEnd(event, popUp) {
    const offset = event.changedTouches[0].clientY - startTouchY;
    if (offset > 50) {
        removeHash();
    } else {
        popUp.style.transform = '';
    }
}

export function clickOutside(event) {
    const targets = event.composedPath();
    const popupTarget = targets.find(target => 
        target.classList?.contains('bubble-pop-up') ||
        ['HA-DIALOG', 'HA-MORE-INFO-DIALOG', 'HA-DIALOG-DATE-PICKER'].includes(target.nodeName)
    );
    if (!popupTarget) removeHash();
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
    requestAnimationFrame(() => {
        context.verticalStack[action](context.popUp);
    });
}

function updatePopupClass(popUp, open) {
    requestAnimationFrame(() => {
        popUp.classList.toggle('is-popup-opened', open);
        popUp.classList.toggle('is-popup-closed', !open);
    });
}

function updateListeners(context, add) {
    if (add) {
        if (!context.listenersAdded) {
            context.popUp.addEventListener('touchstart', context.resetCloseTimeout, { passive: true });
            context.listenersAdded = true;
        }

        if (!window.clickOutsideListenerAdded) {
            window.addEventListener('click', clickOutside, { passive: true });
            window.clickOutsideListenerAdded = true;
        }
    } else {
        if (context.listenersAdded) {
            context.popUp.removeEventListener('touchstart', context.resetCloseTimeout);
            context.listenersAdded = false;

            if (!location.hash && window.clickOutsideListenerAdded) {
                window.removeEventListener('click', clickOutside);
                window.clickOutsideListenerAdded = false;
            }
        }
    }
}

function toggleBodyOverflow(status) {
    document.body.style.overflow = status;
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

    toggleBodyOverflow('hidden');

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
    toggleBodyOverflow('');

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
    const detectedEditor = host?.closest('hui-card-preview');

    if (context.editor || detectedEditor) {
        hideBackdrop();
        clearTimeout(context.removeDomTimeout);

        if (!detectedEditor && !context.verticalStack.contains(context.popUp)) {
            context.verticalStack.appendChild(context.popUp);
        }
    }
}
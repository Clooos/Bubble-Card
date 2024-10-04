import { getBackdrop } from "./create.ts";
import { callAction } from "../../tools/tap-actions.ts";
import { manageEvents } from './create.ts';

let hashTimeout = null;
let hashRecentlyAdded = false;

function handleTouchStart(event, popUp) {
    startTouchY = event.touches[0].clientY;
}

function handleTouchMove(event, popUp) {
    const offset = event.touches[0].clientY - startTouchY;
    if (offset > 0) {
        popUp.style.transform = `translateY(${offset}px)`;
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
  const popupTarget = targets.find((target) => 
    target.classList?.contains('bubble-pop-up') ||
    ['HA-DIALOG', 'HA-MORE-INFO-DIALOG', 'HA-DIALOG-DATE-PICKER'].includes(target.nodeName)
  );

  if (popupTarget === undefined) {
    removeHash();
  }
}

export function removeHash() {
  setTimeout(() => {
    if (hashRecentlyAdded || !location.hash) return;
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
    let { sectionRow, sectionRowContainer } = context;
    if (sectionRow?.tagName.toLowerCase() === 'hui-card') {
      sectionRow.hidden = true;
      sectionRow.toggleAttribute("hidden", true);
      sectionRow.style.display = "none";
      if (sectionRowContainer?.classList.contains('card')) {
        sectionRowContainer.style.display = "none";
      }
    }
  }, delay);
}

export function displayContent(context) {
  let { sectionRow, sectionRowContainer, popUp } = context;
  popUp.style.transform = '';
  if (sectionRow?.tagName.toLowerCase() === 'hui-card') {
    sectionRow.hidden = false;
    sectionRow.style.display = "";
    if (sectionRowContainer?.classList.contains('card')) {
      sectionRowContainer.style.display = "";
    }
  }
}

function showBackdrop(context, show) {
  const { showBackdrop, hideBackdrop } = getBackdrop(context);
  if (show) {
    showBackdrop();
  } else {
    hideBackdrop();
  }
}

export function appendPopup(context, append) {
  if (context.config.background_update) return;
  if (append && context.popUp.parentNode !== context.verticalStack) {
    requestAnimationFrame(() => {
      context.verticalStack.appendChild(context.popUp);
    });
  } else if (!append) {
    context.removeDomTimeout = setTimeout(() => {
      if (context.popUp.parentNode === context.verticalStack) {
        requestAnimationFrame(() => {
          context.verticalStack.removeChild(context.popUp);
        });
      }
    }, 400);
  }
}

function updatePopupClass(context, open) {
  let popUp = context.popUp;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (open) {
        popUp.classList.replace('is-popup-closed', 'is-popup-opened');
      } else {
        popUp.classList.replace('is-popup-opened', 'is-popup-closed');
      }
    });
  });
}

function updateListeners(context, add) {
  let popUp = context.popUp;
  if (add) {
    if (!window.listenersAdded) {
      window.addEventListener('click', clickOutside, { passive: true });
      window.listenersAdded = true;
    }
    if (!context.touchListenerAdded) {
      popUp.addEventListener('touchstart', context.resetCloseTimeout, { passive: true });
      context.touchListenerAdded = true;  // New flag to track touch listener
    }
  } else {
    if (window.listenersAdded) {
      window.removeEventListener('click', clickOutside);
      window.listenersAdded = false;
    }
    if (context.touchListenerAdded) {
      popUp.removeEventListener('touchstart', context.resetCloseTimeout);
      context.touchListenerAdded = false;
    }
  }
}

function toggleBodyOverflow(disable) {
  if (disable) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function clearAllTimeouts(context) {
  clearTimeout(context.hideContentTimeout);
  clearTimeout(context.removeDomTimeout);
  clearTimeout(context.closeTimeout);
}

export function openPopup(context) {
  if (context.popUp.classList.contains('is-popup-opened')) return;
  clearAllTimeouts(context);
  showBackdrop(context, true);
  appendPopup(context, true);
  updatePopupClass(context, true);
  displayContent(context);
  updateListeners(context, true);

  if (context.config.auto_close > 0) {
    context.closeTimeout = setTimeout(() => removeHash(), context.config.auto_close);
  }

  toggleBodyOverflow(true);

  if (context.config.open_action) {
    callAction(context.popUp, context.config, 'open_action');
  }
}

export function closePopup(context) {
  if (!context.popUp.classList.contains('is-popup-opened')) return;
  clearAllTimeouts(context);
  updatePopupClass(context, false);
  showBackdrop(context, false);
  hideContent(context, 300);
  appendPopup(context, false);
  updateListeners(context, false);
  toggleBodyOverflow(false);

  if (context.config.close_action) {
    callAction(context, context.config, 'close_action');
  }
}

export function onUrlChange(context) {
  return function() {
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
  let verticalStack = context.verticalStack;

  const detectedEditor = 
    verticalStack.host?.closest('hui-card-preview') || 
    verticalStack.host?.closest('hui-card[preview][class]') || 
    verticalStack.host?.getRootNode().host?.closest('hui-section[preview][class]');

  if (context.editor || detectedEditor !== null) {
    hideBackdrop();
    window.clearTimeout(context.removeDomTimeout);
    const popUp = context.popUp;
    if (popUp.parentNode !== verticalStack) {
      verticalStack.appendChild(popUp);
    }
  }
}
import { getBackdrop } from "./create.ts";
import { callAction } from "../../tools/tap-actions.ts";

let hashTimeout = null;
let hashRecentlyAdded = false;

export function clickOutside(event) {
  //if (!location.hash) return;

  const targets = event.composedPath();
  const popupTarget = targets.find((target) => {
    return (
      (target.classList && target.classList.contains('bubble-pop-up')) ||
      target.nodeName === 'HA-DIALOG' ||
      target.nodeName === 'HA-MORE-INFO-DIALOG' ||
      target.nodeName === 'HA-DIALOG-DATE-PICKER'
    );
  });

  if (popupTarget === undefined) {
    removeHash();
  }
}

export function removeHash() {
  setTimeout(() => {
    if (hashRecentlyAdded) {
      return;
    }

    const newURL = window.location.href.split('#')[0];
    history.pushState(null, "", newURL);
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
      sectionRow.style.display = "none";

      if (sectionRowContainer?.classList.contains('card')) {
        sectionRowContainer.style.display = "none";
      }
    }
  }, delay);
}

function displayContent(context) {
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

function appendPopup(context, append) {
  let { popUp, verticalStack, removeDomTimeout } = context;

  if (append && popUp.parentNode !== verticalStack) {
    verticalStack.appendChild(context.popUp);
  } else if (!append) {
    removeDomTimeout = setTimeout(() => {
      if (popUp.parentNode === verticalStack) {
        verticalStack.removeChild(popUp);
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
    if (!window.listenersAdded && (context.config.close_by_clicking_outside ?? true)) {
      window.addEventListener('click', clickOutside);
      window.listenersAdded = true;
    }
    popUp.addEventListener('touchstart', context.resetCloseTimeout, { passive: true });
    if (context.config.close_on_click ?? false) {
      popUp.addEventListener('mouseup', removeHash, { once: true });
      popUp.addEventListener('touchend', removeHash, { once: true });
    }
  } else {
    popUp.removeEventListener('touchstart', context.resetCloseTimeout);
  }
}

export function openPopup(context) {
  if (context.popUp.classList.contains('is-popup-opened')) return;

  clearTimeout(context.hideContentTimeout);
  clearTimeout(context.removeDomTimeout);
  clearTimeout(context.closeTimeout);

  showBackdrop(context, true);
  appendPopup(context, true);
  displayContent(context);
  updatePopupClass(context, true);
  updateListeners(context, true)

  if (context.config.auto_close > 0) {
    context.closeTimeout = setTimeout(() => removeHash(), context.config.auto_close);
  }

  document.body.style.overflow = 'hidden';

  if (context.config.open_action) {
    callAction(context.popUp, context.config, 'open_action');
  }
}

export function closePopup(context) {
  if (!context.popUp.classList.contains('is-popup-opened')) return;

  clearTimeout(context.hideContentTimeout);
  clearTimeout(context.removeDomTimeout);
  clearTimeout(context.closeTimeout);

  updatePopupClass(context, false);
  showBackdrop(context, false);
  hideContent(context, 300);
  appendPopup(context, false);
  updateListeners(context, false)

  document.body.style.overflow = '';

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
      }, 500);
      openPopup(context);
    } else {
      closePopup(context);
    }
  }
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
import { getBackdrop } from "./create.ts";
import { callAction } from "../../tools/tap-actions.ts";

let hashTimeout = null;

export function clickOutside(event) {
  const targets = event.composedPath();
  const popupTarget = targets.find((target) => {
    return (
      (target.classList && target.classList.contains('bubble-pop-up')) ||
      target.nodeName === 'HA-MORE-INFO-DIALOG' ||
      target.nodeName === 'HA-DIALOG-DATE-PICKER'
    );
  });

  if (popupTarget === undefined) {
    removeHash();
  }
}

export function removeHash() {
  // Check if removeHash is executed too soon after addHash
  if (hashTimeout) return;

  const newURL = window.location.href.split('#')[0];
  history.replaceState(null, "", newURL);
  window.dispatchEvent(new Event('location-changed'));
}

export function addHash(hash) {  
  // Clear any existing timeout to reset the timer
  if (hashTimeout) {
    clearTimeout(hashTimeout);
    hashTimeout = null;
  }

  const newURL = hash.startsWith('#') ? window.location.href.split('#')[0] + hash : hash;
  history.pushState(null, "", newURL);
  window.dispatchEvent(new Event('location-changed'));

  // Set a timeout after addHash to prevent immediate removal
  hashTimeout = setTimeout(() => {
    hashTimeout = null;
  }, 10);
}

export function hideContent(context, delay) {
  if (context.editor) return;
  return new Promise((resolve) => {
    context.hideContentTimeout = setTimeout(() => {
      if (context.sectionRow?.tagName.toLowerCase() === 'hui-card') {
        context.sectionRow.hidden = true;
        context.sectionRow.style.display = "none";

        if (context.sectionRowContainer?.classList.contains('card')) {
          context.sectionRowContainer.style.display = "none";
        }
      }
      resolve();
    }, delay);
  });
}

function displayContent(context) {
  return new Promise((resolve) => {
    context.popUp.style.transform = '';

    if (context.sectionRow?.tagName.toLowerCase() === 'hui-card') {
      context.sectionRow.hidden = false;
      context.sectionRow.style.display = "";

      if (context.sectionRowContainer?.classList.contains('card')) {
        context.sectionRowContainer.style.display = "";
      }
    }
    resolve();
  });
}

function showBackdrop(context, show) {
  const { showBackdrop, hideBackdrop } = getBackdrop(context);
  return new Promise((resolve) => {
    if (show) {
      showBackdrop();
    } else {
      hideBackdrop();
    }
    resolve();
  });
}

function appendPopup(context, append) {
  return new Promise((resolve) => {
    if (append && context.popUp.parentNode !== context.verticalStack) {
      context.verticalStack.appendChild(context.popUp);
    } else if (!append) {
      context.removeDomTimeout = setTimeout(() => {
        if (context.popUp.parentNode === context.verticalStack) {
          context.verticalStack.removeChild(context.popUp);
        }
      }, 340);
    }
    resolve();
  });
}

function updatePopupClass(context, open) {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (open) {
          context.popUp.classList.replace('is-popup-closed', 'is-popup-opened');
        } else {
          context.popUp.classList.replace('is-popup-opened', 'is-popup-closed');
        }
        resolve();
      });
    });
  });
}

export async function openPopup(context) {
  if (context.popUp.classList.contains('is-popup-opened')) return;

  // Clear all existing timeouts before starting a new one
  clearTimeout(context.hideContentTimeout);
  clearTimeout(context.removeDomTimeout);
  clearTimeout(context.closeTimeout);

  await appendPopup(context, true);

  if (context.config.close_by_clicking_outside ?? true) {
    window.addEventListener('click', clickOutside, { passive: true });
  }

  document.body.style.overflow = 'hidden';

  await displayContent(context);
  await showBackdrop(context, true);
  await updatePopupClass(context, true);

  context.popUp.addEventListener('touchstart', context.resetCloseTimeout, { passive: true });

  if (context.config.close_on_click ?? false) {
    context.popUp.addEventListener('mouseup', removeHash, { passive: true });
    context.popUp.addEventListener('touchend', removeHash, { passive: true });
  }

  if (context.config.auto_close > 0) {
    context.closeTimeout = setTimeout(() => closePopup(context), context.config.auto_close);
  }

  if (context.config.open_action) {
    callAction(context.popUp, context.config, 'open_action');
  }
}

export async function closePopup(context) {
  if (!context.popUp.classList.contains('is-popup-opened')) return;

  document.body.style.overflow = '';

  // Clear existing timeouts
  clearTimeout(context.hideContentTimeout);
  clearTimeout(context.removeDomTimeout);
  clearTimeout(context.closeTimeout);

  updatePopupClass(context, false);
  showBackdrop(context, false);
  hideContent(context, 300);
  appendPopup(context, false);

  context.popUp.removeEventListener('touchstart', context.resetCloseTimeout);

  if (context.config.close_by_clicking_outside ?? true) {
    window.removeEventListener('click', clickOutside);
  }

  if (context.config.close_on_click ?? false) {
    context.popUp.removeEventListener('mouseup', removeHash);
    context.popUp.removeEventListener('touchend', removeHash);
  }

  if (context.config.close_action) {
    callAction(context, context.config, 'close_action');
  }
}

export function onUrlChange(context) {
  return function() {
    if (context.config.hash === location.hash) {
      openPopup(context);
    } else {
      closePopup(context);
    }
  }
}

export function onEditorChange(context) {
  const { hideBackdrop, showBackdrop } = getBackdrop(context);
  const detectedEditor = context.verticalStack.host?.closest('hui-card-preview') || context.verticalStack.host?.closest('hui-card[preview][class]') || context.verticalStack.host?.getRootNode().host?.closest('hui-section[preview][class]');

  if (context.editor || detectedEditor !== null) {
    hideBackdrop();
    window.clearTimeout(context.removeDomTimeout);
    if (context.popUp.parentNode !== context.verticalStack) {
      context.verticalStack.appendChild(context.popUp);
    }
  }
}
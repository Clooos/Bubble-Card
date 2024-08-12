import { getBackdrop } from "./create.ts";
import { callAction } from "../../tools/tap-actions.ts";

let popupCount = 0;

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
  const newURL = window.location.href.split('#')[0];

  history.replaceState(null, "", newURL);
  window.dispatchEvent(new Event('location-changed'));
}
export function addHash(hash) {
  const newURL = hash.startsWith('#') ? window.location.href.split('#')[0] + hash : hash;

  history.pushState(null, "", newURL);
  window.dispatchEvent(new Event('location-changed'));
}

export function closePopup(context) {
  const { hideBackdrop } = getBackdrop(context);

  if (context.popUp.classList.contains('is-popup-closed')) return;

  popupCount--;
  document.body.style.overflow = '';

  clearTimeout(context.hideContentTimeout);
  clearTimeout(context.removeDomTimeout);
  clearTimeout(context.closeTimeout);

  hideBackdrop();

  context.hideContentTimeout = setTimeout(() => {
    context.popUp.style.display = 'none';

    if (context.sectionRow?.tagName.toLowerCase() === 'hui-card') {
      context.sectionRow.hidden = true;
      context.sectionRow.style.display = "none";

      if (context.sectionRowContainer?.classList.contains('card')) {
        context.sectionRowContainer.style.display = "none";
      }
    }
  }, 300);

  context.popUp.removeEventListener('touchstart', context.resetCloseTimeout);

  if (context.config.close_by_clicking_outside ?? true) {
    window.removeEventListener('click', clickOutside);
  }

  if (context.config.close_on_click ?? false) {
    context.popUp.removeEventListener('mouseup', removeHash);
    context.popUp.removeEventListener('touchend', removeHash);
  }

  context.removeDomTimeout = setTimeout(() => {
    if (context.popUp.parentNode === context.verticalStack) {
      context.verticalStack.removeChild(context.popUp);
    }
  }, 320);

  context.popUp.classList.replace('is-popup-opened', 'is-popup-closed');

  if (context.config.close_action) {
    callAction(context, context.config, 'close_action');
  }
}

export function openPopup(context) {
  const { showBackdrop } = getBackdrop(context);

  if (context.popUp.classList.contains('is-popup-opened')) return;

  // Clear all existing timeouts before starting a new one
  clearTimeout(context.hideContentTimeout);
  clearTimeout(context.removeDomTimeout);
  clearTimeout(context.closeTimeout);

  popupCount++;
  showBackdrop();
  document.body.style.overflow = 'hidden';
  
  if (context.sectionRow?.tagName.toLowerCase() === 'hui-card') {
    context.sectionRow.hidden = false;
    context.sectionRow.style.display = "";

    if (context.sectionRowContainer?.classList.contains('card')) {
      context.sectionRowContainer.style.display = "";
    }
  }

  clearTimeout(context.removeDomTimeout);

  if (context.popUp.parentNode !== context.verticalStack) {
    context.verticalStack.appendChild(context.popUp);
  }
  
  context.popUp.addEventListener('touchstart', context.resetCloseTimeout, { passive: true });

  if (context.config.close_on_click ?? false) {
    context.popUp.addEventListener('mouseup', removeHash, { passive: true });
    context.popUp.addEventListener('touchend', removeHash, { passive: true });
  }

  context.popUp.style.display = '';

  requestAnimationFrame(() => {
    context.popUp.style.transform = '';
    
    requestAnimationFrame(() => {
      context.popUp.classList.replace('is-popup-closed', 'is-popup-opened')
    });

    if (context.config.close_by_clicking_outside ?? true) {
      window.addEventListener('click', clickOutside, { passive: true });
    }
  });

  if (context.config.auto_close > 0) {
    context.closeTimeout = setTimeout(() => closePopup(context), context.config.auto_close); // <- Adjusted to close correctly
  }

  if (context.config.open_action) {
    callAction(context.popUp, context.config, 'open_action');
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
  } else {
    if (context.config.hash === location.hash) {
      openPopup(context);
      showBackdrop();
    } else if (context.popUp.parentNode === context.verticalStack) {
      context.verticalStack.removeChild(context.popUp);
    }
  }
}
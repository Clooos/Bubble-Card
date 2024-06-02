import { getBackdrop } from "./create.ts";

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
  if (context.popUp.classList.contains('is-popup-opened') === false) {
    return;
  }

  popupCount--;
  document.body.style.overflow = '';
  context.popUp.classList.add('is-popup-closed');
  context.popUp.classList.remove('is-popup-opened');
  context.hideContentTimeout = setTimeout(function() {
    context.popUp.style.display = 'none';
  }, 380);
  context.resetCloseTimeout = () => {
    clearTimeout(context.closeTimeout);
  }
  context.popUp.removeEventListener('touchstart', context.resetCloseTimeout);

  if (context.config.close_by_clicking_outside ?? true) {
    window.removeEventListener('click', clickOutside);
  }

  const closeOnClick = context.config.close_on_click ?? false;
  if (closeOnClick) {
      context.popUp.removeEventListener('mouseup', removeHash);
      context.popUp.removeEventListener('touchend', removeHash);  
  }

  context.removeDomTimeout = window.setTimeout(() => {
    if (context.popUp.parentNode === context.verticalStack) {
      context.verticalStack.removeChild(context.popUp);
    }
  }, 360);
}
export function openPopup(context) {
  if (context.popUp.classList.contains('is-popup-opened')) {
    return;
  }

  context.popUp.classList.add('is-popup-opened');

  window.clearTimeout(context.removeDomTimeout);
  if (context.popUp.parentNode !== context.verticalStack) {
    context.verticalStack.appendChild(context.popUp);
  }
  popupCount++;
  clearTimeout(context.closeTimeout);
  clearTimeout(context.hideContentTimeout);
  document.body.style.overflow = 'hidden';
  context.popUp.style.display = '';
  context.popUp.style.transform = '';
  context.popUp.addEventListener('touchstart', context.resetCloseTimeout, { passive: true });

  const closeOnClick = context.config.close_on_click ?? false;
  if (closeOnClick) {
      context.popUp.addEventListener('mouseup', removeHash, { passive: true });
      context.popUp.addEventListener('touchend', removeHash, { passive: true });
  }

  requestAnimationFrame(() => {
    context.popUp.classList.remove('is-popup-closed');
    if (context.config.close_by_clicking_outside ?? true) {
      window.addEventListener('click', clickOutside, { passive: true });
    }
  });

  if (context.config.auto_close > 0) {
    context.closeTimeout = setTimeout(removeHash, context.config.auto_close);
  }
}
export function onUrlChange(context) {
  const { hideBackdrop, showBackdrop } = getBackdrop(context);

  return function() {
    if (context.config.hash === location.hash) {
      openPopup(context);
    } else {
      closePopup(context);
    }

    if (popupCount === 0 || context.editor) {
      hideBackdrop();
    } else {
      showBackdrop();
    }
  }
}
export function onEditorChange(context) {
  const { hideBackdrop, showBackdrop } = getBackdrop(context);
  const detectedEditor = context.verticalStack.host.closest('hui-card-preview');

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
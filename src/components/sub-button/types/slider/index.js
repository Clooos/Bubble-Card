import { createElement, isEntityType } from "../../../../tools/utils.js";
import { normalizeNameToClass } from "../../create.js";
import { createSliderStructure } from "../../../slider/index.js";
import { updateSlider } from "../../../slider/changes.js";
import { updateBackground, setupActions, buildDisplayedState, updateElementVisibility, updateIconClasses, applySubButtonScrollingEffect } from "../../utils.js";

// Build a normalized slider config from context and sub-button options
// This avoids duplicating merge logic between initial creation and updates
function buildSubSliderConfig(context, options) {
  return {
    entity: options.entity,
    ...(options.subButton?.min_value !== undefined ? { min_value: options.subButton.min_value } : {}),
    ...(options.subButton?.max_value !== undefined ? { max_value: options.subButton.max_value } : {}),
    ...(options.subButton?.step !== undefined ? { step: options.subButton.step } : {}),
    ...(options.subButton?.tap_to_slide !== undefined ? { tap_to_slide: options.subButton.tap_to_slide } : {}),
    ...(options.subButton?.relative_slide !== undefined ? { relative_slide: options.subButton.relative_slide } : {}),
    ...(options.subButton?.read_only_slider !== undefined ? { read_only_slider: options.subButton.read_only_slider } : {}),
    ...(options.subButton?.slider_live_update !== undefined ? { slider_live_update: options.subButton.slider_live_update } : {}),
    ...(options.subButton?.invert_slider_value !== undefined ? { invert_slider_value: options.subButton.invert_slider_value } : {}),
    ...(options.subButton?.slider_fill_orientation !== undefined ? { slider_fill_orientation: options.subButton.slider_fill_orientation } : {}),
    ...(options.subButton?.slider_value_position !== undefined ? { slider_value_position: options.subButton.slider_value_position } : {}),
    ...(options.subButton?.use_accent_color !== undefined ? { use_accent_color: options.subButton.use_accent_color } : {}),
    ...(options.subButton?.allow_light_slider_to_0 !== undefined ? { allow_light_slider_to_0: options.subButton.allow_light_slider_to_0 } : {}),
    ...(options.subButton?.light_transition !== undefined ? { light_transition: options.subButton.light_transition } : {}),
    ...(options.subButton?.light_transition_time !== undefined ? { light_transition_time: options.subButton.light_transition_time } : {}),
    ...(options.subButton?.light_slider_type !== undefined ? { light_slider_type: options.subButton.light_slider_type } : {}),
    ...(options.subButton?.hue_force_saturation !== undefined ? { hue_force_saturation: options.subButton.hue_force_saturation } : {}),
    ...(options.subButton?.hue_force_saturation_value !== undefined ? { hue_force_saturation_value: options.subButton.hue_force_saturation_value } : {}),
  };
}

function applySliderIdentityClasses(sliderContainer, options) {
  if (!sliderContainer || !options) return;
  const normalizedIndex = options.index != null ? String(options.index).replace(/_/g, '-') : null;
  const previousIndexClass = sliderContainer.dataset?.sliderIndexClass;
  if (normalizedIndex) {
    const desiredIndexClass = `bubble-sub-button-slider-${normalizedIndex}`;
    if (previousIndexClass && previousIndexClass !== desiredIndexClass) {
      sliderContainer.classList.remove(previousIndexClass);
    }
    sliderContainer.classList.add(desiredIndexClass);
    sliderContainer.dataset.sliderIndexClass = desiredIndexClass;
  } else if (previousIndexClass) {
    sliderContainer.classList.remove(previousIndexClass);
    delete sliderContainer.dataset.sliderIndexClass;
  }

  const nameClass = normalizeNameToClass(options.subButton?.name);
  const previousNameClass = sliderContainer.dataset?.sliderNameClass;
  if (previousNameClass && previousNameClass !== nameClass) {
    sliderContainer.classList.remove(previousNameClass);
  }
  if (nameClass) {
    sliderContainer.classList.add(nameClass);
    sliderContainer.dataset.sliderNameClass = nameClass;
  } else if (previousNameClass) {
    delete sliderContainer.dataset.sliderNameClass;
  }
}

// Block interactions outside of the sub-slider when it is open
function isEventInsideSlider(element, target) {
  return (
    (element.sliderWrapper && element.sliderWrapper.contains(target)) ||
    (element.sliderContainer && element.sliderContainer.contains(target)) ||
    (element.sliderCloseBtn && element.sliderCloseBtn.contains(target))
  );
}

function isEventInsideByPath(element, ev) {
  try {
    const path = typeof ev.composedPath === 'function' ? ev.composedPath() : [];
    if (!Array.isArray(path) || path.length === 0) return false;
    return (
      path.includes(element.sliderWrapper) ||
      path.includes(element.sliderContainer) ||
      path.includes(element.sliderCloseBtn)
    );
  } catch (_) {
    return false;
  }
}

function enableGlobalInteractionBlocker(context, element) {
  if (!element || element._globalBlockerAdded) return;
  const handler = (ev) => {
    if (!element.sliderOpen || element.sliderAlwaysVisible) return;
    const target = ev.target;
    const inside = isEventInsideSlider(element, target) || isEventInsideByPath(element, ev);
    const type = ev.type;

    // Track where the interaction started
    if (type === 'pointerdown' || type === 'touchstart' || type === 'mousedown') {
      element._blockerPointerDownInside = !!inside;
      if (!inside) {
        try { ev.preventDefault(); } catch (_) {}
        ev.stopPropagation();
        try { ev.stopImmediatePropagation(); } catch (_) {}
      }
      return; // Never close on initial down
    }

    // Close only on "end/click" if the interaction did not start inside and not dragging
    if (type === 'pointerup' || type === 'touchend' || type === 'mouseup' || type === 'click') {
      const startedInside = element._blockerPointerDownInside === true;
      const isDragging = !!(element.sliderContext && element.sliderContext.dragging);
      if (inside || startedInside || isDragging) return;
      try { ev.preventDefault(); } catch (_) {}
      ev.stopPropagation();
      try { ev.stopImmediatePropagation(); } catch (_) {}
      hideSubSlider(context, element);
      return;
    }
  };
  const events = ['pointerdown', 'pointerup', 'click', 'touchstart', 'touchend', 'mousedown', 'mouseup'];
  events.forEach(evt => document.addEventListener(evt, handler, true));
  element._globalBlockerAdded = true;
  element._globalBlockerHandler = handler;
  element._globalBlockerEvents = events;
}

function disableGlobalInteractionBlocker(element) {
  if (!element || !element._globalBlockerAdded || !element._globalBlockerHandler) return;
  try {
    (element._globalBlockerEvents || ['pointerdown', 'pointerup', 'click', 'touchstart', 'touchend', 'mousedown', 'mouseup'])
      .forEach(evt => document.removeEventListener(evt, element._globalBlockerHandler, true));
  } catch (_) {}
  try {
    delete element._globalBlockerHandler;
    delete element._globalBlockerEvents;
  } catch (_) {}
  element._globalBlockerAdded = false;
}

// Toggle visibility of slider overlays (close button) in one place
function updateOverlayVisibility(element, visible) {
  if (!element) return;
  if (element.sliderAlwaysVisible) return;
  if (element.sliderCloseBtn) {
    element.sliderCloseBtn.classList.toggle('is-hidden', !visible);
  }
}


// Restore default slider dimensions for bottom/group sliders
export function restoreDefaultSliderPosition(context) {
  if (context.elements && context.elements.cardWrapper) {
    // Remove inline CSS vars so CSS fallbacks apply (handles normal and .large layouts)
    try { context.elements.cardWrapper.style.removeProperty('--bubble-sub-slider-left-offset'); } catch (_) {}
    try { context.elements.cardWrapper.style.removeProperty('--bubble-sub-slider-width'); } catch (_) {}
  }
}

export function setCardElementsHidden(context, hidden) {
  const setHidden = (el) => {
    if (!el) return;
    el.classList.toggle('is-hidden', hidden);
  };
  setHidden(context.elements?.nameContainer);
  setHidden(context.elements?.iconContainer);
  setHidden(context.elements?.image);
  setHidden(context.elements?.buttonsContainer);
  if (context.elements?.subButtonContainer) {
    context.elements.subButtonContainer.style.opacity = hidden ? '0' : '';
    context.elements.subButtonContainer.style.pointerEvents = hidden ? 'none' : '';
  }
}

export function restoreCardElementsVisibility(context) {
  setCardElementsHidden(context, false);
}

export function showSubSlider(context, element) {
  if (!element.sliderWrapper) return;
  // If this sub-button belongs to a group, fade only that group's content
  const groupContainer = element._parentGroupContainer;
  if (groupContainer && groupContainer.classList) {
    groupContainer.classList.add('group-slider-open');
  } else {
    setCardElementsHidden(context, true);
  }
  element.sliderWrapper.classList.remove('is-hidden');
  element.sliderOpen = true;
  updateOverlayVisibility(element, true);
  // Ensure global interactions are blocked outside the slider
  enableGlobalInteractionBlocker(context, element);
}

export function hideSubSlider(context, element) {
  if (!element.sliderWrapper) return;
  element.sliderWrapper.classList.add('is-hidden');
  const groupContainer = element._parentGroupContainer;
  if (groupContainer && groupContainer.classList) {
    groupContainer.classList.remove('group-slider-open');
  } else {
    restoreCardElementsVisibility(context);
    // Always restore default slider dimensions when closing any card-level slider
    // This ensures bottom sliders get correct dimensions even after top slider was used
    restoreDefaultSliderPosition(context);
  }
  element.sliderOpen = false;
  updateOverlayVisibility(element, false);
  // Restore global interactions
  disableGlobalInteractionBlocker(element);
  try { element._blockerPointerDownInside = false; } catch (_) {}
}

export function ensureSliderForSubButton(context, element, options) {
  if (!element.sliderWrapper) {
    const sliderWrapper = createElement('div', 'bubble-sub-slider-wrapper is-hidden');
    const targetContainer = context.elements.cardWrapper || context.elements.mainContainer || context.content;
    targetContainer.appendChild(sliderWrapper);
    element.sliderWrapper = sliderWrapper;

    const sliderContainer = createElement('div', 'bubble-sub-button-slider');
    sliderWrapper.appendChild(sliderContainer);
    element.sliderContainer = sliderContainer;

    const closeBtn = createElement('div', 'bubble-sub-slider-close');
    const closeIcon = createElement('ha-icon');
    closeIcon.setAttribute('icon', 'mdi:close');
    try {
      closeBtn.haRipple = createElement('ha-ripple');
      closeBtn.appendChild(closeBtn.haRipple);
    } catch (_) {}
    closeBtn.appendChild(closeIcon);
    sliderWrapper.appendChild(closeBtn);
    element.sliderCloseBtn = closeBtn;

  }

  const stopPropagationEvents = ['pointerdown', 'pointermove', 'touchstart', 'touchmove', 'mousedown', 'mousemove', 'click'];
  if (!element._stopPropAdded && element.sliderContainer) {
    const stopProp = (ev) => ev.stopPropagation();
    stopPropagationEvents.forEach(evt => {
      element.sliderContainer.addEventListener(evt, stopProp, { passive: false });
    });
    element._stopPropAdded = true;
    element._stopPropHandler = stopProp;
  }

  if (!element.sliderContext) {
    const sliderContext = {
      _hass: context._hass,
      config: buildSubSliderConfig(context, options),
      elements: {
        mainContainer: element.sliderContainer,
        cardWrapper: context.elements.cardWrapper || context.elements.mainContainer || context.content
      },
      content: context.content,
      card: context.card
    };

    createSliderStructure(sliderContext, {
      targetElement: element.sliderContainer,
      sliderLiveUpdate: !!options.subButton?.slider_live_update,
      withValueDisplay: true,
      persistentValueDisplay: true,
      holdToSlide: true,
      readOnlySlider: !!options.subButton?.read_only_slider
    });

    element.sliderContext = sliderContext;
  } else {
    element.sliderContext.config = buildSubSliderConfig(context, options);
  }

  if (options.alwaysVisible) {
    element.sliderAlwaysVisible = true;
    // Inline inside parent container
    const parentInline = options.groupContainer || context.elements.subButtonContainer;
    if (element.sliderWrapper.parentNode !== parentInline) {
      try { element.sliderWrapper.parentNode?.removeChild(element.sliderWrapper); } catch (_) {}
      parentInline.appendChild(element.sliderWrapper);
    }
    element.sliderWrapper.classList.add('inline');
    element.sliderContainer.classList.add('inline');
    // Make inline slider fill width when requested by layout
    if (options.subButton?.fill_width) {
      element.sliderWrapper.classList.add('fill-width');
      element.sliderContainer.classList.add('fill-width');
    } else {
      element.sliderWrapper.classList.remove('fill-width');
      element.sliderContainer.classList.remove('fill-width');
    }
    // Apply custom width when not filling width
    try {
      const widthVal = options.subButton?.width;
      if (!options.subButton?.fill_width && widthVal != null && widthVal !== '') {
        const widthNum = Number(widthVal);
        if (!Number.isNaN(widthNum) && widthNum > 0) {
          // Use px for main section, % for bottom section (consistent with other sub-buttons)
          const unit = (options.section === 'main') ? 'px' : '%';
          element.sliderWrapper.style.setProperty('width', `${widthNum}${unit}`);
          element.sliderWrapper.classList.add('has-custom-width');
          // Adjust slider container min-width to respect wrapper width
          // If custom width is smaller than default min-width, use custom width to prevent overflow
          if (element.sliderContainer) {
            element.sliderContainer.classList.add('has-custom-width');
            if (options.section === 'main') {
              // For main section (px), set CSS variable for min-width when width is small
              if (widthNum < 96) {
                element.sliderContainer.style.setProperty('--slider-container-min-width', `${widthNum}px`);
              } else {
                element.sliderContainer.style.removeProperty('--slider-container-min-width');
              }
            }
          }
        } else if (typeof widthVal === 'string') {
          element.sliderWrapper.style.setProperty('width', widthVal);
          element.sliderWrapper.classList.add('has-custom-width');
          // For string widths (including %), ensure container respects wrapper width
          if (element.sliderContainer) {
            element.sliderContainer.classList.add('has-custom-width');
          }
        }
      } else if (options.subButton?.fill_width) {
        element.sliderWrapper.style.removeProperty('width');
        element.sliderWrapper.classList.remove('has-custom-width');
        if (element.sliderContainer) {
          element.sliderContainer.classList.remove('has-custom-width');
          element.sliderContainer.style.removeProperty('--slider-container-min-width');
        }
      } else if (widthVal == null || widthVal === '') {
        element.sliderWrapper.style.removeProperty('width');
        element.sliderWrapper.classList.remove('has-custom-width');
        if (element.sliderContainer) {
          element.sliderContainer.classList.remove('has-custom-width');
          element.sliderContainer.style.removeProperty('--slider-container-min-width');
        }
      }
    } catch (_) {}
    // Apply custom height when always visible
    try {
      const heightVal = options.subButton?.custom_height;
      if (heightVal != null && heightVal !== '') {
        const heightNum = Number(heightVal);
        if (!Number.isNaN(heightNum) && heightNum > 0) {
          element.sliderWrapper.style.setProperty('--bubble-sub-slider-height', `${heightNum}px`);
          element.sliderWrapper.style.setProperty('height', `${heightNum}px`);
          if (element.sliderContainer) {
            element.sliderContainer.style.setProperty('height', `${heightNum}px`);
          }
        }
      } else {
        element.sliderWrapper.style.removeProperty('--bubble-sub-slider-height');
        element.sliderWrapper.style.removeProperty('height');
        if (element.sliderContainer) {
          element.sliderContainer.style.removeProperty('height');
        }
      }
    } catch (_) {}
    element.sliderWrapper.classList.remove('is-hidden');
    // Keep host visible but hide its content (icon/text) while inline slider is shown
    element.classList.add('inline-slider-host');
    element.sliderOpen = true;

    // Ensure host is not treated as an actionable button in always-visible mode
    try { element.classList.remove('bubble-action', 'bubble-action-enabled'); } catch (_) {}
    if (element.haRipple) {
      try { element.removeChild(element.haRipple); } catch (_) {}
      try { delete element.haRipple; } catch (_) {}
    }

    if (element.sliderCloseBtn) {
      element.sliderCloseBtn.style.display = 'none';
    }
    // Ensure no document-level listener remains when always visible
    if (element._outsideClickListenerAdded && element._outsideClickHandler) {
      try { document.removeEventListener('click', element._outsideClickHandler, false); } catch (_) {}
      try { delete element._outsideClickHandler; } catch (_) {}
      element._outsideClickListenerAdded = false;
    }
    // Ensure global blocker is disabled in always visible mode
    disableGlobalInteractionBlocker(element);
  } else {
    element.sliderAlwaysVisible = false;
    element.setAttribute('no-slide', '');
    // Restore host content visibility when leaving always-visible mode
    element.classList.remove('inline-slider-host');
    if (!element.sliderToggleAdded) {
      element.addEventListener('click', (ev) => {
        ev.stopPropagation();
        if (element.sliderOpen) {
          hideSubSlider(context, element);
        } else {
          showSubSlider(context, element);
        }
      });
      if (element.sliderCloseBtn) {
        const closeHandler = (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          try { ev.stopImmediatePropagation(); } catch (_) {}
          hideSubSlider(context, element);
        };
        // Ensure old listeners are not duplicated
        try {
          element.sliderCloseBtn.removeEventListener('click', element._closeHandler);
          element.sliderCloseBtn.removeEventListener('touchend', element._closeHandler);
        } catch (_) {}
        element.sliderCloseBtn.addEventListener('click', closeHandler);
        element.sliderCloseBtn.addEventListener('touchend', closeHandler);
        element.sliderCloseBtn.addEventListener('touchstart', (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
        }, { passive: false });
        element._closeHandler = closeHandler;
      }
      element.sliderToggleAdded = true;
    }
    // Attach overlay to card wrapper when requested (card-level),
    // otherwise attach to the owning group container when present
    const useCardOverlay = !!options.overlayAtCardLevel;
    const cardWrapperFallback = context.elements.cardWrapper || context.elements.mainContainer || context.content;
    const parentOverlay = useCardOverlay
      ? cardWrapperFallback
      : (options.groupContainer || cardWrapperFallback);
    if (element.sliderWrapper.parentNode !== parentOverlay) {
      try { element.sliderWrapper.parentNode?.removeChild(element.sliderWrapper); } catch (_) {}
      parentOverlay.appendChild(element.sliderWrapper);
    }
    element.sliderWrapper.classList.remove('inline');
    element.sliderContainer.classList.remove('inline');
    element.sliderWrapper.classList.remove('fill-width');
    element.sliderContainer.classList.remove('fill-width');
    // Store reference for show/hide logic
    // When overlay is at card level, treat as top-level (no group container)
    try { element._parentGroupContainer = useCardOverlay ? null : (options.groupContainer || null); } catch (_) {}
  }

  // Close on outside click (document-level). Avoid duplicates and ignore when always visible
  if (!options.alwaysVisible) {
    if (!element._outsideClickListenerAdded) {
      const outsideHandler = (ev) => {
        if (!element.sliderOpen || element.sliderAlwaysVisible) return;
        const target = ev.target;
        const inside = (element.sliderContainer && element.sliderContainer.contains(target)) || isEventInsideByPath(element, ev);
        const startedInside = element._blockerPointerDownInside === true;
        const isDragging = !!(element.sliderContext && element.sliderContext.dragging);
        // Ignore clicks within the slider or on the sub-button itself
        if (inside) return;
        if (element.contains && element.contains(target)) return;
        if (startedInside || isDragging) return;
        hideSubSlider(context, element);
      };
      document.addEventListener('click', outsideHandler, { passive: true });
      element._outsideClickListenerAdded = true;
      element._outsideClickHandler = outsideHandler;
    }
  } else if (element._outsideClickListenerAdded && element._outsideClickHandler) {
    // Defensive: if previously added but now alwaysVisible, remove it
    try { document.removeEventListener('click', element._outsideClickHandler, false); } catch (_) {}
    try { delete element._outsideClickHandler; } catch (_) {}
    element._outsideClickListenerAdded = false;
  }

  // Update close button vertical alignment depending on overlay level
  try {
    if (element.sliderCloseBtn) {
      if (options.overlayAtCardLevel) {
        element.sliderCloseBtn.classList.add('top-aligned');
      } else {
        element.sliderCloseBtn.classList.remove('top-aligned');
      }
    }
    if (element.sliderWrapper) {
      if (options.overlayAtCardLevel) {
        element.sliderWrapper.classList.add('top-aligned');
      } else {
        element.sliderWrapper.classList.remove('top-aligned');
      }
    }
  } catch (_) {}

  applySliderIdentityClasses(element.sliderContainer, options);
}

export function handleSliderSubButton(context, element, options) {
  const displayedState = buildDisplayedState(options, context, element);
  
  // Check if displayed state has changed to avoid unnecessary DOM updates
  const previousDisplayedState = element._previousDisplayedState;
  const previousState = element._previousState;
  const currentState = options.state?.state;
  const displayedStateChanged = previousDisplayedState !== displayedState;
  const entityStateChanged = previousState !== currentState;
  
  // Store current values for next comparison
  element._previousDisplayedState = displayedState;
  element._previousState = currentState;
  
  // Only update DOM if displayed state changed, entity state changed, or if this is the first update
  if (displayedStateChanged || entityStateChanged || previousDisplayedState === undefined) {
    updateBackground(element, options);
    setupActions(element, options);
    updateElementVisibility(element, options, displayedState);
    if (element.nameContainer) {
      applySubButtonScrollingEffect(context, element.nameContainer, displayedState, options.subButton);
    }
  }

  // Determine icon (defaults for color sliders)
  // For hue/saturation/white_temp: use explicit subButton.icon or color-specific default.
  // For brightness or undefined type: revert to previous behavior (use options.icon which may inherit entity icon).
  const sliderType = options.subButton?.light_slider_type ?? options.light_slider_type;
  let resolvedIcon;
  if (sliderType === 'hue') {
    resolvedIcon = options.subButton?.icon || 'mdi:palette';
  } else if (sliderType === 'saturation') {
    resolvedIcon = options.subButton?.icon || 'mdi:contrast-circle';
  } else if (sliderType === 'white_temp') {
    resolvedIcon = options.subButton?.icon || 'mdi:thermometer';
  } else {
    resolvedIcon = options.icon;
  }

  // Icon handling with defaults
  if (options.showIcon && resolvedIcon) {
    let iconElement = element.icon;
    if (!iconElement) {
      iconElement = document.createElement('ha-icon');
      iconElement.classList.add('bubble-sub-button-icon');
      iconElement.classList.add('show-icon');
      element.appendChild(iconElement);
      element.icon = iconElement;
    }
    if (iconElement.icon !== resolvedIcon) {
      iconElement.setAttribute('icon', resolvedIcon);
      try { iconElement.icon = resolvedIcon; } catch (_) {}
    }
    updateIconClasses(iconElement, displayedState);
  } else if (element.icon) {
    element.icon.classList.remove('show-icon');
    element.icon.classList.add('hidden');
  }
  if (element.icon?.getAttribute('icon') !== element.icon?.icon) {
    try { element.icon.icon = element.icon.getAttribute('icon'); } catch (_) {}
  }

  ensureSliderForSubButton(context, element, options);
  if (element.sliderContext) {
    element.sliderContext._hass = context._hass;
    // updateSlider calls updateSliderStyle which handles RGB color transitions via CSS variables
    updateSlider(element.sliderContext);
  }
}
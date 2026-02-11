import { getAttribute, isStateOn, isStateRequiringAttention, formatDateTime, createElement, getStateSurfaceColor, getState, isTimerEntity, timerTimeRemaining, computeDisplayTimer, startElementTimerInterval, stopElementTimerInterval, formatNumericValue, getTemperatureUnit } from "../../tools/utils.js";
import { applyScrollingEffect } from "../../tools/text-scrolling.js";
import { getIcon, getLightColorSignature, getImage } from "../../tools/icon.js";
import { addActions, addFeedback } from "../../tools/tap-actions.js";
import { checkConditionsMet, validateConditionalConfig, ensureArray } from "../../tools/validate-condition.js";

// Get entity picture for sub-button
// Returns empty if force_icon is set or if an icon is explicitly configured for the sub-button
// Only checks subButton.icon, not the parent card's icon
export function getSubButtonImage(context, subButton, entity) {
  if (subButton.force_icon || subButton.icon) return '';
  
  // Use getImage with ignoreConfigIcon=true to skip checking parent card's icon
  return getImage(context, entity, true);
}

// Returns a normalized set of options used by all sub-button types
export function getSubButtonOptions(context, subButton, index) {
  const entity = subButton.entity ?? context.config.entity;
  const implicitSelect = entity?.startsWith("input_select") || entity?.startsWith("select") || subButton.select_attribute;
  const explicitType = subButton.sub_button_type;
  const resolvedIsSelect = (explicitType !== undefined && explicitType !== null)
    ? explicitType === 'select'
    : implicitSelect;
  const resolvedSubButtonType = explicitType ?? (implicitSelect ? 'select' : 'default');

  return {
    index,
    entity,
    context,
    state: context._hass.states[entity],
    name: subButton.name ?? getAttribute(context, "friendly_name", entity) ?? '',
    attributeType: subButton.attribute ?? '',
    attribute: getAttribute(context, subButton.attribute ?? '', entity),
    isOn: isStateOn(context, entity),
    showName: subButton.show_name ?? false,
    showState: subButton.show_state ?? false,
    showAttribute: subButton.show_attribute ?? false,
    showLastChanged: subButton.show_last_changed ?? false,
    showLastUpdated: subButton.show_last_updated ?? false,
    showIcon: subButton.show_icon ?? true,
    showBackground: subButton.show_background ?? true,
    stateBackground: subButton.state_background ?? true,
    lightBackground: subButton.light_background ?? true,
    showArrow: subButton.show_arrow ?? true,
    // Respect explicit type first; fallback to implicit detection only when no explicit type
    isSelect: resolvedIsSelect,
    icon: getIcon(context, entity, subButton.icon ?? ''),
    image: getSubButtonImage(context, subButton, entity),
    subButtonType: resolvedSubButtonType,
    alwaysVisible: subButton.always_visible ?? false,
    // Pass the original subButton config for slider overrides
    subButton
  };
}

// Apply scrolling effect to sub-button text element
// Uses sub-button's scrolling_effect config, falling back to card's config
export function applySubButtonScrollingEffect(context, element, text, subButton) {
  if (!element || !text) return;
  
  // Create a temporary context with scrolling_effect from sub-button or card config
  const scrollingEffect = subButton?.scrolling_effect ?? context.config?.scrolling_effect ?? true;
  const tempContext = {
    ...context,
    config: {
      ...context.config,
      scrolling_effect: scrollingEffect
    }
  };
  
  applyScrollingEffect(tempContext, element, text);
}

// Build the text content for the sub-button state/name/attribute line
export function buildDisplayedState(options, context, element = null) {
  const { state, name, attribute, attributeType, showName, showState, showAttribute, showLastChanged, showLastUpdated, entity } = options;

  const parts = [];
  if (showName && name && name !== 'unknown') parts.push(name);
  if (state && showState && state.state !== 'unknown') {
    // Check if entity is a timer and format accordingly
    const isTimer = isTimerEntity(entity);
    if (isTimer) {
      const timeRemaining = timerTimeRemaining(state);
      const timerDisplay = computeDisplayTimer(context._hass, state, timeRemaining);
      if (timerDisplay) parts.push(timerDisplay);
      
      // Manage timer interval for active timers
      if (element && state.state === 'active') {
        startElementTimerInterval(element, context, entity, () => {
          // Force update by calling the sub-button handler again
          if (element.isConnected && context._hass?.states?.[entity]) {
            const currentState = context._hass.states[entity];
            if (currentState && currentState.state === 'active') {
              // Rebuild displayed state
              const updatedOptions = { ...options, state: currentState };
              const updatedDisplayedState = buildDisplayedState(updatedOptions, context, element);
              if (element.nameContainer) {
                applySubButtonScrollingEffect(context, element.nameContainer, updatedDisplayedState, options.subButton);
              }
            } else {
              stopElementTimerInterval(element);
            }
          } else {
            stopElementTimerInterval(element);
          }
        });
      } else if (element && isTimer) {
        stopElementTimerInterval(element);
      }
    } else {
      parts.push(context._hass.formatEntityState(state));
      // Stop timer interval if entity is no longer a timer
      if (element) {
        stopElementTimerInterval(element);
      }
    }
  } else if (element) {
    // Stop timer interval if state is not shown
    stopElementTimerInterval(element);
  }
  if (state && showLastChanged && state.last_changed !== 'unknown') parts.push(formatDateTime(state.last_changed, context._hass.locale.language));
  if (state && showLastUpdated && state.last_updated !== 'unknown') parts.push(formatDateTime(state.last_updated, context._hass.locale.language));
  if (state && showAttribute) {
    if (attributeType.includes('forecast')) {
      const isMetric = context._hass.config.unit_system.length === 'km';
      const locale = context._hass?.locale?.language || 'en-US';

      if (attributeType.includes('temperature') && attribute !== null && attribute !== undefined) {
        const tempValue = parseFloat(attribute);
        const unit = getTemperatureUnit(context._hass);
        const decimals = (tempValue === 0 || tempValue === 0.0) ? 0 : 1;
        parts.push(formatNumericValue(tempValue, decimals, unit, locale));
      } else if (attributeType.includes('humidity') && attribute !== null && attribute !== undefined) {
        parts.push(formatNumericValue(parseFloat(attribute), 0, '%', locale));
      } else if (attributeType.includes('precipitation') && attribute !== null && attribute !== undefined) {
        parts.push(formatNumericValue(parseFloat(attribute), 1, 'mm', locale));
      } else if (attributeType.includes('wind_speed') && attribute !== null && attribute !== undefined) {
        const unit = isMetric ? 'km/h' : 'mph';
        parts.push(formatNumericValue(parseFloat(attribute), 1, unit, locale));
      } else if (attribute !== null && attribute !== undefined && attribute !== 'unknown') {
        parts.push(attribute);
      }
    } else {
      const formattedAttribute = context._hass.formatEntityAttributeValue(state, attributeType);
      const rawAttribute = state.attributes?.[attributeType];
      const isZeroWithUnit = formattedAttribute &&
                            (typeof formattedAttribute === 'string') &&
                            formattedAttribute.trim().startsWith('0') &&
                            formattedAttribute.trim().length > 1;

      if ((attribute !== 0 && attribute !== 'unknown' && attribute != null) || isZeroWithUnit) {
        if (rawAttribute !== 'unknown' && rawAttribute != null) {
          parts.push(formattedAttribute ?? attribute);
        }
      }
    }
  }

  return parts.length ? parts.join(' · ').charAt(0).toUpperCase() + parts.join(' · ').slice(1) : '';
}

// Toggle element visibility based on content and whether it has an icon or is a dropdown
export function updateElementVisibility(element, options, displayedState) {
  const { showIcon, isSelect } = options;

  if (!element._hasVisibilityConditions) {
    const isHidden = !displayedState && !showIcon && !isSelect;
    element.classList.toggle('hidden', isHidden);
  }

  if (element.dropdownContainer) {
    element.dropdownContainer.classList.toggle('no-icon-select-container', !displayedState && !showIcon && isSelect);
    element.dropdownArrow.classList.toggle('no-icon-select-arrow', !displayedState && !showIcon && isSelect);
  }
}

// Update the background classes and dynamic light background color
// Uses same optimization pattern as changeIcon: compute new value, compare with current, update only if different
export function updateBackground(element, options) {
  const { showBackground, isOn, stateBackground, lightBackground, entity, context } = options;

  if (!showBackground) {
    if (element.classList.contains('background-on') || element.classList.contains('background-off')) {
      element.classList.remove('background-on', 'background-off');
    }
    if (element.style.getPropertyValue('--bubble-sub-button-light-background-color')) {
      element.style.removeProperty('--bubble-sub-button-light-background-color');
    }
    return;
  }

  // Compute new color signature to detect light color changes
  const currentColorSignature = getLightColorSignature(options.state, entity);
  const previousColorSignature = element._previousColorSignature;
  const colorChanged = previousColorSignature !== currentColorSignature;
  element._previousColorSignature = currentColorSignature;

  if (isOn && stateBackground) {
    const requiresAttention = isStateRequiringAttention(context, entity);
    let newColor;
    
    if (requiresAttention) {
      newColor = 'var(--red-color, var(--error-color))';
    } else {
      const cardType = context.config.card_type;
      const buttonType = context.config.button_type;
      
      // For slider cards, use the fill color for contrast instead of card background
      if (buttonType === 'slider') {
        // Get the computed background color of the slider fill to handle both custom property and CSS class cases
        let sliderFillColor = null;
        if (context.elements?.rangeFill) {
          try {
            sliderFillColor = getComputedStyle(context.elements.rangeFill).backgroundColor;
          } catch (_) {}
        }
        newColor = getStateSurfaceColor(context, entity, lightBackground, sliderFillColor, null);
      } else {
        const cardBackgroundColor = cardType === 'button'
          ? context.card?.style.getPropertyValue('--bubble-button-background-color')
          : context.popUp?.style.getPropertyValue('--bubble-button-background-color');
        
        newColor = getStateSurfaceColor(context, entity, lightBackground, cardBackgroundColor || null);
      }
    }

    // Only update DOM if color changed (like changeIcon pattern)
    const currentColor = element.style.getPropertyValue('--bubble-sub-button-light-background-color');
    if (currentColor !== newColor || colorChanged) {
      element.style.setProperty('--bubble-sub-button-light-background-color', newColor);
    }

    if (!element.classList.contains('background-on')) {
      element.classList.add('background-on');
      element.classList.remove('background-off');
    }
  } else {
    if (!element.classList.contains('background-off')) {
      element.classList.add('background-off');
      element.classList.remove('background-on');
    }
    if (element.style.getPropertyValue('--bubble-sub-button-light-background-color')) {
      element.style.removeProperty('--bubble-sub-button-light-background-color');
    }
  }
}

// Add action handlers and feedback to the sub-button
export function setupActions(element, options) {
  const { subButton, isSelect, entity } = options;
  const hasActions = subButton.tap_action?.action !== 'none' ||
                    subButton.double_tap_action?.action !== 'none' ||
                    subButton.hold_action?.action !== 'none';

  if (hasActions && !element.actionAdded) {
    const defaultActions = {
      tap_action: { action: !isSelect ? "more-info" : "none" },
      double_tap_action: { action: "none" },
      hold_action: { action: "none" }
    };

    if (options.subButtonType === 'slider' && !options.alwaysVisible) {
      const actionConfig = { ...subButton, tap_action: { action: "none" } };
      addActions(element, actionConfig, entity);
      element.setAttribute("no-slide", "");
    } else if (!isSelect) {
      addActions(element, subButton, entity, defaultActions);
    } else {
      // For dropdown sub-buttons, disable tap action on the handler side to keep single tap for opening the dropdown
      const actionConfig = { ...subButton, tap_action: { action: "none" } };
      addActions(element, actionConfig, entity);
      element.setAttribute("no-slide", "");
    }

    addFeedback(element, element.feedback);

    if (isSelect) {
      element.style.pointerEvents = "auto";
      element.style.cursor = "pointer";
    }

    element.actionAdded = true;
  }

  // Ensure ripple feedback on slider toggler even when no explicit actions are configured
  if (options.subButtonType === 'slider' && !options.alwaysVisible) {
    // Make sure we have an action handler target for global pointer listener
    element.classList.add('bubble-action');
    element.style.cursor = 'pointer';
    element.style.pointerEvents = 'auto';
    if (!element.haRipple) {
      try {
        element.haRipple = createElement('ha-ripple');
        element.appendChild(element.haRipple);
      } catch (_) {}
    }
  }
}

// Evaluate user-defined visibility conditions
export function handleVisibilityConditions(element, subButton, hass, context = null) {
  const conditions = subButton.visibility;
  const ensureVisibleAlwaysSlider = (isVisible) => {
    if (!element?.sliderAlwaysVisible || !element.sliderWrapper) return;
    if (isVisible) {
      element.sliderWrapper.style.removeProperty('display');
      element.sliderWrapper.removeAttribute('aria-hidden');
    } else {
      element.sliderWrapper.style.display = 'none';
      element.sliderWrapper.setAttribute('aria-hidden', 'true');
    }
  };
  const closeOpenedSlider = (isVisible) => {
    // Close slider if visibility becomes false and slider is currently open
    if (!isVisible && element.sliderOpen && !element.sliderAlwaysVisible && element.sliderWrapper && context) {
      // Hide the slider wrapper immediately
      element.sliderWrapper.classList.add('is-hidden');
      element.sliderOpen = false;
      
      // Hide close button overlay
      if (element.sliderCloseBtn) {
        element.sliderCloseBtn.classList.add('is-hidden');
      }
      
      // Clean up any group slider state
      const groupContainer = element._parentGroupContainer;
      if (groupContainer && groupContainer.classList) {
        groupContainer.classList.remove('group-slider-open');
      }
      
      // Restore card elements visibility if needed (non-group slider)
      if (!groupContainer && context.elements) {
        const setHidden = (el, hidden) => {
          if (!el) return;
          el.classList.toggle('is-hidden', hidden);
        };
        setHidden(context.elements?.nameContainer, false);
        setHidden(context.elements?.iconContainer, false);
        setHidden(context.elements?.image, false);
        setHidden(context.elements?.buttonsContainer, false);
        if (context.elements?.subButtonContainer) {
          context.elements.subButtonContainer.style.opacity = '';
          context.elements.subButtonContainer.style.pointerEvents = '';
        }
      }
      
      // Disable global interaction blocker
      if (element._globalBlockerAdded && element._globalBlockerHandler) {
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
      
      // Reset pointer down tracking
      try { element._blockerPointerDownInside = false; } catch (_) {}
    }
  };
  if (conditions != null) {
    element._hasVisibilityConditions = true;
    const conditionsArray = ensureArray(conditions);
    if (validateConditionalConfig(conditionsArray)) {
      const isVisible = checkConditionsMet(conditionsArray, hass);

      if (element._previousVisibilityState === undefined || element._previousVisibilityState !== isVisible) {
        element.classList.toggle('hidden', !isVisible);
        element._previousVisibilityState = isVisible;
        
        // Close opened slider if visibility becomes false
        closeOpenedSlider(isVisible);
      }
      ensureVisibleAlwaysSlider(isVisible);
    } else {
      ensureVisibleAlwaysSlider(true);
    }
  } else {
    element._hasVisibilityConditions = false;
    ensureVisibleAlwaysSlider(true);
  }
}

// Apply width styles to an element
export function applyWidthStyles(element, subButton, section = 'main', groupContainer = null) {
  try {
    const widthVal = subButton.width;
    if (!subButton.fill_width && widthVal != null && widthVal !== '') {
      const widthNum = Number(widthVal);
      if (!Number.isNaN(widthNum) && widthNum > 0) {
        // Check if group has Right/Left/Center alignment (non-fill alignment)
        let usePx = (section === 'main');
        if (section === 'bottom' && groupContainer) {
          // Check if group container has alignment classes for Right/Left/Center
          const hasNonFillAlignmentClass = groupContainer.classList.contains('alignment-start') ||
                                           groupContainer.classList.contains('alignment-end') ||
                                           groupContainer.classList.contains('alignment-center');
          if (hasNonFillAlignmentClass) {
            usePx = true;
          } else {
            // Fallback: check CSS custom property
            const justifyContent = groupContainer.style.getPropertyValue('--bubble-sub-button-group-justify-content');
            if (justifyContent) {
              const alignment = justifyContent.trim().toLowerCase();
              usePx = ['start', 'end', 'center'].includes(alignment);
            }
          }
        }
        const unit = usePx ? 'px' : '%';
        let finalWidth = `${widthNum}${unit}`;
        
        // Adjust width for percentage values in inline groups to account for gap
        if (unit === '%' && groupContainer && groupContainer.classList.contains('display-inline')) {
          const gap = 8; // Gap between buttons in pixels (from CSS)
          const totalButtonsWithWidth = parseInt(groupContainer.dataset.totalButtonsWithWidth || '0', 10);
          
          if (totalButtonsWithWidth > 0) {
            // Calculate gap share per button
            // For N buttons, there are (N-1) gaps between them
            // Each button should subtract its share: (N-1) * gap / N
            const gapSharePerButton = ((totalButtonsWithWidth - 1) * gap) / totalButtonsWithWidth;
            finalWidth = `calc(${widthNum}% - ${gapSharePerButton}px)`;
          }
        }
        
        element.style.width = finalWidth;
        element.style.flex = '0 0 auto';
      } else if (typeof widthVal === 'string') {
        // Handle string values like '50%', '10rem', etc.
        let finalWidth = widthVal;
        
        // Adjust width for percentage values in inline groups to account for gap
        if (widthVal.includes('%') && groupContainer && groupContainer.classList.contains('display-inline')) {
          const percentMatch = widthVal.match(/(\d+(?:\.\d+)?)%/);
          if (percentMatch) {
            const percentValue = parseFloat(percentMatch[1]);
            const gap = 8; // Gap between buttons in pixels
            const totalButtonsWithWidth = parseInt(groupContainer.dataset.totalButtonsWithWidth || '0', 10);
            
            if (totalButtonsWithWidth > 0) {
              // Calculate gap share per button
              // For N buttons, there are (N-1) gaps between them
              // Each button should subtract its share: (N-1) * gap / N
              const gapSharePerButton = ((totalButtonsWithWidth - 1) * gap) / totalButtonsWithWidth;
              finalWidth = `calc(${percentValue}% - ${gapSharePerButton}px)`;
            }
          }
        }
        
        element.style.width = finalWidth;
        element.style.flex = '0 0 auto';
      }
    } else if (subButton.fill_width) {
      element.style.removeProperty('width');
      element.style.removeProperty('flex');
    } else if (widthVal == null || widthVal === '') {
      element.style.removeProperty('width');
      element.style.removeProperty('flex');
    }
  } catch (_) {}
}

// Apply height styles to an element
export function applyHeightStyles(element, subButton) {
  try {
    const heightVal = subButton.custom_height;
    if (heightVal != null && heightVal !== '') {
      const heightNum = Number(heightVal);
      if (!Number.isNaN(heightNum) && heightNum > 0) {
        element.style.setProperty('--bubble-sub-button-height', `${heightNum}px`);
      }
    } else {
      element.style.removeProperty('--bubble-sub-button-height');
    }
  } catch (_) {}
}

// Apply fill-width class to an element
export function applyFillWidthClass(element, subButton) {
  if (!element || !element.classList) return;
  const shouldFill = !!subButton?.fill_width;
  element.classList.toggle('fill-width', shouldFill);
}


// Handle hide_when_parent_unavailable logic
export function handleHideWhenParentUnavailable(element, subButton, context) {
  const hideWhenParentUnavailable = subButton.hide_when_parent_unavailable ?? false;
  if (hideWhenParentUnavailable && context.config.entity && !context.detectedEditor) {
    if (getState(context, context.config.entity) === 'unavailable') {
      element.style.display = 'none';
      return true;
    } else if (element.style.display === 'none') {
      element.style.display = '';
    }
  }
  return false;
}

// Helpers to migrate and normalize sub-button configuration between
// the legacy inline array schema (v2.0.0 tov3.0.0) and the new sectioned schema
export function isNewSubButtonsSchema(raw) {
  return !!raw && !Array.isArray(raw) && (
    Array.isArray(raw.main) || Array.isArray(raw.bottom)
  );
}

// Convert an old inline array-based sub_button to the new schema.
// Old buttons remain buttons under `main`.
export function convertOldToNewSubButtons(raw) {
  // If raw is not an array, return empty schema to prevent forEach errors
  if (!Array.isArray(raw)) return { main: [], bottom: [] };

  const main = [];

  raw.forEach((item) => {
    if (!item) return;
    main.push({ ...item });
  });

  return { main, bottom: [] };
}

// Perform in-place upgrade on a config object to the new schema
export function ensureNewSubButtonsSchemaObject(config) {
  if (!config) return { main: [], bottom: [] };
  const raw = config.sub_button;
  if (isNewSubButtonsSchema(raw)) {
    return {
      main: Array.isArray(raw.main) ? [...raw.main] : [],
      bottom: Array.isArray(raw.bottom) ? [...raw.bottom] : []
    };
  }
  return convertOldToNewSubButtons(raw || []);
}


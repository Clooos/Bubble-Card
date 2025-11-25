import { getAttribute, isStateOn, isStateRequiringAttention, formatDateTime, createElement, getStateSurfaceColor, getState, isTimerEntity, timerTimeRemaining, computeDisplayTimer, startElementTimerInterval, stopElementTimerInterval, applyScrollingEffect } from "../../tools/utils.js";
import { getIcon } from "../../tools/icon.js";
import { addActions, addFeedback } from "../../tools/tap-actions.js";
import { checkConditionsMet, validateConditionalConfig, ensureArray } from "../../tools/validate-condition.js";

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
      const isCelcius = context._hass.config.unit_system.temperature === '°C';
      const isMetric = context._hass.config.unit_system.length === 'km';

      if (attributeType.includes('temperature') && attribute !== null && attribute !== undefined) {
        const tempValue = parseFloat(attribute);
        parts.push((tempValue === 0 || tempValue === 0.0 ? '0' : tempValue.toFixed(1).replace(/\.0$/, '')) + (isCelcius ? ' °C' : ' °F'));
      } else if (attributeType.includes('humidity') && attribute !== null && attribute !== undefined) {
        parts.push(parseFloat(attribute).toFixed(0) + ' %');
      } else if (attributeType.includes('precipitation') && attribute !== null && attribute !== undefined) {
        parts.push(parseFloat(attribute).toFixed(1).replace(/\.0$/, '') + ' mm');
      } else if (attributeType.includes('wind_speed') && attribute !== null && attribute !== undefined) {
        parts.push(parseFloat(attribute).toFixed(1).replace(/\.0$/, '') + (isMetric ? ' km/h' : ' mph'));
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
export function updateBackground(element, options) {
  const { showBackground, isOn, stateBackground, lightBackground, entity, context } = options;

  if (!showBackground) {
    element.classList.remove('background-on', 'background-off');
    element.style.removeProperty('--bubble-sub-button-light-background-color');
    return;
  }

  if (isOn && stateBackground) {
    const requiresAttention = isStateRequiringAttention(context, entity);
    
    // Use error color for states requiring attention (unlocked, error, etc.)
    if (requiresAttention) {
      element.style.setProperty('--bubble-sub-button-light-background-color', 'var(--red-color, var(--error-color))');
    } else {
      // Get card background color to check if it matches sub-button color
      // Only apply derivation if colors are similar
      const cardType = context.config.card_type;
      const cardBackgroundColor = cardType === 'button'
        ? context.card?.style.getPropertyValue('--bubble-button-background-color')
        : context.popUp?.style.getPropertyValue('--bubble-button-background-color');
      
      // Apply surface color derivation when state_background is enabled
      // light_background controls whether to use RGB light color or accent color
      const surfaceColor = getStateSurfaceColor(context, entity, lightBackground, cardBackgroundColor || null);
      element.style.setProperty('--bubble-sub-button-light-background-color', surfaceColor);
    }
    element.classList.add('background-on');
    element.classList.remove('background-off');
  } else {
    element.classList.add('background-off');
    element.classList.remove('background-on');
    // Remove the CSS variable when turning off
    element.style.removeProperty('--bubble-sub-button-light-background-color');
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
export function handleVisibilityConditions(element, subButton, hass) {
  const conditions = subButton.visibility;
  if (conditions != null) {
    element._hasVisibilityConditions = true;
    const conditionsArray = ensureArray(conditions);
    if (validateConditionalConfig(conditionsArray)) {
      const isVisible = checkConditionsMet(conditionsArray, hass);

      if (element._previousVisibilityState === undefined || element._previousVisibilityState !== isVisible) {
        element.classList.toggle('hidden', !isVisible);
        element._previousVisibilityState = isVisible;
      }
    }
  } else {
    element._hasVisibilityConditions = false;
  }
}

// Apply width styles to an element
export function applyWidthStyles(element, subButton, section = 'main') {
  try {
    const widthVal = subButton.width;
    if (!subButton.fill_width && widthVal != null && widthVal !== '') {
      const widthNum = Number(widthVal);
      if (!Number.isNaN(widthNum) && widthNum > 0) {
        const unit = (section === 'main') ? 'px' : '%';
        element.style.width = `${widthNum}${unit}`;
        element.style.flex = '0 0 auto';
      } else if (typeof widthVal === 'string') {
        element.style.width = widthVal;
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
  if (subButton.fill_width) {
    element.classList.add('fill-width');
  } else {
    element.classList.remove('fill-width');
  }
}

// Update icon classes based on displayed state
export function updateIconClasses(iconElement, displayedState) {
  if (!iconElement) return;
  iconElement.classList.remove('hidden');
  iconElement.classList.add('bubble-sub-button-icon', 'show-icon');
  iconElement.classList.toggle('icon-with-state', !!displayedState);
  iconElement.classList.toggle('icon-without-state', !displayedState);
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
  if (!Array.isArray(raw)) return raw || { main: [], bottom: [] };

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
      main: Array.isArray(raw.main) ? raw.main : [],
      bottom: Array.isArray(raw.bottom) ? raw.bottom : []
    };
  }
  return convertOldToNewSubButtons(raw || []);
}


import {
    formatDateTime,
    getState,
    getAttribute,
    isEntityType,
    isStateOn,
    getName,
    isTimerEntity,
    timerTimeRemaining,
    computeDisplayTimer,
    startTimerInterval,
    stopTimerInterval,
    hasTimerInterval,
    startRelativeTimeInterval,
    stopRelativeTimeInterval,
    relativeTimeRefreshDelay
} from '../../tools/utils.js';
import { resolveTemplate } from '../../tools/render-template.js';
import { resolveStateContent } from '../../tools/state-content.js';
import { renderStateLine, stateContentTimestamps, stateLineFormatting, stateLineFormattingChanged } from './state-line.js';
import { applyScrollingEffect } from '../../tools/text-scrolling.js';
import { getIcon, getImage, getIconColor } from '../../tools/icon.js';
import { getClimateColor } from '../../cards/climate/helpers.js';
import { isClimateCardDomain } from '../../cards/climate/domains.js';

function startTimerCountdown(context, entity) {
    startTimerInterval(context, entity, () => {
        // Force update by calling changeState again
        const currentState = context._hass.states[entity];
        if (currentState && currentState.state === 'active') {
            // Temporarily mark as changed to force update
            context.previousState = null;
            changeState(context);
        } else {
            stopTimerInterval(context);
        }
    });
}

// A disconnect (view switch, pop-up close/reopen) clears the countdown
// interval while the memoized comparison fields stay unchanged, so the render
// path below would never restart it and the visible countdown would freeze.
export function ensureTimerCountdown(context) {
    const entity = context.config?.entity;
    if (!entity || !isTimerEntity(entity)) return;
    if (!showsTimer(resolveStateContent(context.config, 'card', entity), entity)) return;
    if (context._hass?.states?.[entity]?.state !== 'active') return;
    if (hasTimerInterval(context)) return;
    startTimerCountdown(context, entity);
}

// Whether the line counts a running timer down, which takes a beat of its own.
function showsTimer(content, entity) {
    return !!content && isTimerEntity(entity) && (content.includes('state') || content.includes('remaining_time'));
}

export function changeState(context, force = false) {
    const entity = context.config?.entity;
    const card = context.card;
    const state = context._hass.states[entity];
    const lastChanged = state?.last_changed;
    const lastUpdated = state?.last_updated;

    const showName = context.config.show_name ?? true;
    const showIcon = context.config.show_icon ?? true;
    const scrollingEffect = context.config.scrolling_effect ?? true;
    // What the line is made of: state_content, or the old show keys, or the
    // Home Assistant default of the entity's domain on a state button.
    const content = resolveStateContent(context.config, 'card', entity);
    const contentKey = content ? content.join('') : '';
    const templateVersion = context._templateResultVersion || 0;

    const previousConfig = context.previousConfig || {};

    const configChanged = (
        previousConfig.config !== context.config ||
        context.previousState !== state ||
        context.previousLastChanged !== lastChanged ||
        context.previousLastUpdated !== lastUpdated ||
        previousConfig.showName !== showName ||
        previousConfig.showIcon !== showIcon ||
        previousConfig.contentKey !== contentKey ||
        previousConfig.templateVersion !== templateVersion ||
        previousConfig.scrollingEffect !== scrollingEffect ||
        stateLineFormattingChanged(previousConfig.formatting, context._hass, entity)
    );

    // The beat is armed before the guard below, because the guard exists for the
    // exact case the beat is for: nothing about the entity changed, so the card
    // has no other reason to come back and rewrite an ageing relative time.
    const timestamps = stateContentTimestamps(content, state, entity);
    if (timestamps.length > 0) {
        const delayFor = (dates) => Math.min(...dates.map((date) => relativeTimeRefreshDelay(date)));
        startRelativeTimeInterval(context, () => {
            // changeState reads context._hass unguarded, and a beat callback
            // that throws is caught by nobody.
            if (!context._hass) {
                return null;
            }
            changeState(context, true);
            // Read back rather than closed over: arming is idempotent, so this
            // callback outlives the values it was built with.
            const currentEntity = context.config.entity;
            const current = context._hass.states[currentEntity];
            const dates = stateContentTimestamps(resolveStateContent(context.config, 'card', currentEntity), current, currentEntity);
            return dates.length > 0 ? delayFor(dates) : null;
        }, delayFor(timestamps));
    } else {
        stopRelativeTimeInterval(context);
    }

    if (!configChanged && !force) {
        ensureTimerCountdown(context);
        return;
    }

    // A running timer counts down on its own beat while the line shows it.
    if (isTimerEntity(entity)) {
        if (state && state.state === 'active' && showsTimer(content, entity)) {
            startTimerCountdown(context, entity);
        } else {
            stopTimerInterval(context);
        }
    }

    const displayedState = renderStateLine(context, entity, content, { capitalizeTimes: true }).join(' • ');

    // The line is on screen when it has something to show, or when a style
    // template claimed it to write its own text into it.
    const visible = (!!content && content.length > 0) || !!context.elements.state.templateDetected;
    context.elements.name.classList.toggle('hidden', !showName);
    context.elements.iconContainer.classList.toggle('hidden', !showIcon);
    context.elements.nameContainer.classList.toggle('name-without-icon', !showIcon);
    context.elements.state.classList.toggle('state-without-name', visible && !showName);
    context.elements.state.classList.toggle('display-state', visible);
    context.elements.state.classList.toggle('hidden', !visible);

    applyScrollingEffect(context, context.elements.state, displayedState);

    // Update card class based on state
    const shouldUpdateClass = (
        entity === context.config.entity &&
        // Verify that the state is not a temperature
        !state?.attributes?.unit_of_measurement?.includes('°') &&
        state
    );
    if (shouldUpdateClass) {
        if (isStateOn(context, entity)) {
            if (!card.classList.contains('is-on')) {
                card.classList.remove('is-off');
                card.classList.add('is-on');
            }
        } else if (!card.classList.contains('is-off')) {
            card.classList.remove('is-on');
            card.classList.add('is-off');
        }
    }

    // Update previous values
    context.previousState = state;
    context.previousLastChanged = lastChanged;
    context.previousLastUpdated = lastUpdated;
    context.previousConfig = {
        config: context.config,
        showName,
        showIcon,
        contentKey,
        templateVersion,
        scrollingEffect,
        formatting: stateLineFormatting(context._hass, entity),
    };
}

export function changeIcon(context) {
    const cardType = context.config.card_type;
    const buttonType = context.config.button_type;
    const isOn = isStateOn(context);
    // Only the climate card colours its icon from the state of the entity, and
    // only there do the humidifier and the water heater join in: elsewhere a
    // button keeps the accent colour it has always had.
    const isClimate = isEntityType(context, 'climate') ||
        (cardType === 'climate' && isClimateCardDomain(context.config.entity));
    const newIcon = getIcon(context);
    const newImage = getImage(context);
    const currentIconColor = context.elements.iconContainer?.style.color;
    const currentImage = context.elements.image?.style.backgroundImage;
    const currentIcon = context.elements.icon?.icon;
    const currentIconDisplay = context.elements.icon?.style.display;
    const currentImageDisplay = context.elements.image?.style.display;
    const noColor = 
        buttonType === 'name' ||
        (cardType === 'pop-up' && !buttonType);

    let newIconColor = 'inherit';

    if (isOn && !noColor) {
        if (isClimate) {
            newIconColor = getClimateColor(context);
        } else {
            newIconColor = `var(--bubble-icon-color, ${getIconColor(context)})`;
        }
    }

    if (context.elements.iconContainer) {
        if (newIconColor !== 'inherit') {
            if (currentIconColor !== newIconColor) {
                context.elements.iconContainer.style.color = newIconColor;
            }
        } else if (currentIconColor !== '') {
            context.elements.iconContainer.style.color = '';
        }
    }

    if (newImage !== '') {
        const newBackgroundImage = `url(${newImage})`;
        if (currentImage !== newBackgroundImage) {
            context.elements.image.style.backgroundImage = newBackgroundImage;
        }
        if (currentIconDisplay !== 'none') {
            context.elements.icon.style.display = 'none';
        }
        if (currentImageDisplay !== '') {
            context.elements.image.style.display = '';
        }
    } else if (newIcon !== '') {
        if (currentIcon !== newIcon) {
            context.elements.icon.icon = newIcon;
        }
        if (context.elements.icon.style.color !== newIconColor) {
            context.elements.icon.style.color = newIconColor;
        }
        if (currentIconDisplay !== '') {
            context.elements.icon.style.display = '';
        }
        if (currentImageDisplay !== 'none') {
            context.elements.image.style.display = 'none';
        }
    } else {
        if (currentIconDisplay !== 'none') {
            context.elements.icon.style.display = 'none';
        }
        if (currentImageDisplay !== 'none') {
            context.elements.image.style.display = 'none';
        }
    }

    if (context.elements.icon?.getAttribute('icon') !== context.elements.icon?.icon) {
        context.elements.icon.setAttribute('icon', context.elements.icon.icon);
    }
}

export function changeName(context, textScrolling = true) {
    const buttonType = context.config.button_type;
    // The scrolling text writes markup, so a rendered template is escaped there.
    const name = (buttonType !== 'name'
        ? getName(context, textScrolling)
        : resolveTemplate(context, context.config.name, context.config.entity, textScrolling)) ?? '';
    
    if (!context.elements.name) return;
    
    if (textScrolling) {
        // Always call applyScrollingEffect, it handles its own optimization
        // and can detect when element needs animation restart after reconnection
        applyScrollingEffect(context, context.elements.name, name);
    } else if (name !== context.previousName) {
        context.elements.name.innerText = name;
    }
    
    context.previousName = name;
}

export function changeStatus(context) {
    const state = getState(context);

    if (state === 'unavailable') {
        context.card.classList.add('is-unavailable');
    } else {
        context.card.classList.remove('is-unavailable');
    }
}

export function updateListeners(context, add) {
    if (add && !context.editor) {
        if (!context.listenersAdded) {
        if (context.config.button_type === 'slider') {
            context.elements.slider.addEventListener('click', context.handleSliderClick, { passive: true });
        }
        context.listenersAdded = true;
        }
    } else if (!add) {
        if (context.listenersAdded) {
        if (context.config.button_type === 'slider') {
            context.elements.slider.removeEventListener('click', context.handleSliderClick, { passive: true });
        }
        }
    }
}

// Toggle `.fixed-top` on the bubble wrapper when bottom groups or main buttons are present
export function updateContentContainerFixedClass(context) {
  const cardWrapper = context?.elements?.cardWrapper;
  const subButtonContainer = context?.elements?.subButtonContainer;
  if (!cardWrapper && !subButtonContainer) return;

  const subButtons = context?.config?.sub_button;
  const mainButtonsPosition = context?.config?.main_buttons_position || 'default';
  let hasBottomGroup = false;
  let hasTopGroup = false;

  // Support both new and legacy schemas
  if (subButtons) {
    if (Array.isArray(subButtons)) {
      for (const item of subButtons) {
        if (item && Array.isArray(item.buttons)) {
          const pos = (item.position || 'top');
          if (pos === 'bottom') hasBottomGroup = true;
          else if (pos === 'top') hasTopGroup = true;
        }
        if (hasBottomGroup && hasTopGroup) break;
      }
    } else {
      const main = Array.isArray(subButtons.main) ? subButtons.main : [];
      const bottom = Array.isArray(subButtons.bottom) ? subButtons.bottom : [];
      for (const g of main) {
        if (g && Array.isArray(g.group)) { hasTopGroup = true; break; }
      }
      // Consider bottom non-group buttons as a bottom group for layout pinning
      for (const g of bottom) {
        if (g) {
          if (Array.isArray(g.group)) { hasBottomGroup = true; break; }
          hasBottomGroup = true; // any bottom item should pin top
          break;
        }
      }
    }
  }

  const hasBottomMainButtons = mainButtonsPosition === 'bottom';

  if (hasBottomGroup || hasBottomMainButtons) {
    // When any group is at the bottom or main buttons are at the bottom, pin elements to the top
    if (cardWrapper) cardWrapper.classList.add('fixed-top');
    if (subButtonContainer) subButtonContainer.classList.add('fixed-top');
  } else {
    // Remove fixed-top class when no bottom groups and no bottom main buttons
    if (cardWrapper) cardWrapper.classList.remove('fixed-top');
    if (subButtonContainer) subButtonContainer.classList.remove('fixed-top');
  }

  if (hasBottomMainButtons) {
    syncMainButtonsBottomClass(context);
  }
}

// Whether the main buttons show can only be told by the style, since a custom
// style or a module may hide them. Read in the middle of a build, the style
// was brought up to date once per card, in a pass of its own (six times before
// the slide of a 20 card pop-up). The read now waits for the next frame, where
// one pass serves every card waiting and costs nothing the frame would not
// have spent anyway. Every read happens before any write, so the batch never
// forces a second pass.
const pendingMainButtonsChecks = new Set();
let mainButtonsCheckFrame = null;

function mainButtonsMayShow(context) {
  const buttonsContainer = context?.elements?.buttonsContainer;
  return (context?.config?.main_buttons_position || 'default') === 'bottom' &&
    !!buttonsContainer &&
    !buttonsContainer.classList.contains('hidden') &&
    buttonsContainer.style.display !== 'none';
}

function runMainButtonsChecks() {
  mainButtonsCheckFrame = null;
  const contexts = [...pendingMainButtonsChecks];
  pendingMainButtonsChecks.clear();

  const shown = contexts.map((context) => {
    if (!mainButtonsMayShow(context)) return false;
    try {
      return getComputedStyle(context.elements.buttonsContainer).display !== 'none';
    } catch (_) {
      return true;
    }
  });

  contexts.forEach((context, index) => {
    context.elements?.bottomSubButtonContainer?.classList.toggle('with-main-buttons-bottom', shown[index]);
  });
}

export function syncMainButtonsBottomClass(context) {
  const bottomSubButtonContainer = context?.elements?.bottomSubButtonContainer;
  if (!bottomSubButtonContainer) return;

  if (!mainButtonsMayShow(context)) {
    pendingMainButtonsChecks.delete(context);
    bottomSubButtonContainer.classList.remove('with-main-buttons-bottom');
    return;
  }

  pendingMainButtonsChecks.add(context);
  if (mainButtonsCheckFrame !== null) return;

  if (typeof requestAnimationFrame === 'function') {
    mainButtonsCheckFrame = requestAnimationFrame(runMainButtonsChecks);
  } else {
    runMainButtonsChecks();
  }
}
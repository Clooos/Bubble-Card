import { createElement } from "../../tools/utils.js";
import { createSubButtonElement, normalizeNameToClass } from "./create.js";
import { updateContentContainerFixedClass } from "../base-card/index.js";
import { getSubButtonOptions, handleVisibilityConditions, applyFillWidthClass, applyWidthStyles, applyHeightStyles, handleHideWhenParentUnavailable, ensureNewSubButtonsSchemaObject, isNewSubButtonsSchema, convertOldToNewSubButtons } from "./utils.js";
import { handleDefaultSubButton } from "./types/default/index.js";
import { handleDropdownSubButton } from "./types/dropdown/index.js";
import { handleSliderSubButton } from "./types/slider/index.js";
import { updateSlider } from "../slider/changes.js";

export function updateSubButtons(context, subButtons) {
  if (!subButtons) return;

  // Resolve to sectioned schema
  let sectioned;
  if (Array.isArray(subButtons)) {
    sectioned = { main: subButtons, bottom: [] };
  } else if (isNewSubButtonsSchema(subButtons)) {
    sectioned = subButtons;
  } else {
    sectioned = convertOldToNewSubButtons(subButtons || []);
  }

  context.previousValues = context.previousValues || {};
  // Only consider real buttons (exclude inline groups)
  const mainButtons = (Array.isArray(sectioned.main) ? sectioned.main : []).filter(item => item && !Array.isArray(item.group));
  const previousMainButtons = [...(context.previousValues.mainSubButtons || [])];

  // Update main buttons first with contiguous indices (1..N)
  let visibleIndex = 1;
  (Array.isArray(sectioned.main) ? sectioned.main : []).forEach((subButton) => {
    if (!subButton || Array.isArray(subButton.group)) return; // skip groups here

    const options = getSubButtonOptions(context, subButton, visibleIndex);

    if (options.attributeType === 'fan_modes' && options.attribute == null) {
      let element = context.elements[options.index];
      if (!element) {
        const classes = [`bubble-sub-button`, `bubble-sub-button-${options.index}`];
        if (subButton?.name) {
          const nameClass = normalizeNameToClass(subButton.name);
          if (nameClass) {
            classes.push(`bubble-sub-button-name-${nameClass}`);
          }
        }
        element = createElement('div', classes.join(' '));
      }
      element.classList.add('hidden');
      visibleIndex++;
      return;
    }

    let element = context.elements[options.index];
    if (!element) {
      element = createSubButtonElement(context, options.index, options.isSelect, options.showArrow, options.entity, subButton);
    }

    if (handleHideWhenParentUnavailable(element, subButton, context)) {
      visibleIndex++;
      return;
    }

    updateSubButtonContent(context, element, { ...options, subButton, groupContainer: null, section: 'main' });
    handleVisibilityConditions(element, subButton, context._hass);
    visibleIndex++;
  });

  // Then update the group buttons (inline only)
  updateGroupButtons(context, sectioned);

  // Ensure content container is pinned appropriately based on group positions
  updateContentContainerFixedClass(context);
}

function updateSubButtonContent(context, element, options) {
  applyFillWidthClass(element, options.subButton);
  applyWidthStyles(element, options.subButton, options.section || 'main');
  applyHeightStyles(element, options.subButton);

  if (options.subButtonType === 'slider') {
    handleSliderSubButton(context, element, options);
  } else if (
    options.subButtonType === 'select' ||
    (!options.subButton?.sub_button_type && options.isSelect)
  ) {
    handleDropdownSubButton(context, element, options);
  } else {
    handleDefaultSubButton(context, element, options);
  }
}

export function getSubButtonsStates(context) {
  const sectioned = ensureNewSubButtonsSchemaObject(context.config);
  const main = Array.isArray(sectioned.main) ? sectioned.main : [];
  const bottom = Array.isArray(sectioned.bottom) ? sectioned.bottom : [];

  const states = [];
  
  // Get states from main sub-buttons
  main
    .filter(item => item && !Array.isArray(item.group))
    .forEach((subButton) => {
      const entity = subButton.entity ?? context.config.entity;
      states.push(context._hass.states[entity]);
    });
  
  // Get states from buttons in groups
  const allGroups = [
    ...main.filter(item => item && Array.isArray(item.group)).map(g => g.group),
    ...bottom.filter(item => item && Array.isArray(item.group)).map(g => g.group)
  ];
  allGroups.forEach((buttons) => {
      buttons.forEach((button) => {
        if (button) {
          const entity = button.entity ?? context.config.entity;
          states.push(context._hass.states[entity]);
        }
      });
    });

  return states;
}

function updateAllSliderSubButtons(context) {
  // Update main sub-button sliders
  if (context.elements) {
    Object.keys(context.elements).forEach(key => {
      const element = context.elements[key];
      if (element && element.sliderContext && element.sliderContext.config) {
        element.sliderContext._hass = context._hass;
        updateSlider(element.sliderContext);
      }
    });
  }

  // Update group sub-button sliders
  if (context.elements && context.elements.groups) {
    Object.values(context.elements.groups).forEach(group => {
      if (group.buttons) {
        Object.values(group.buttons).forEach(element => {
          if (element && element.sliderContext && element.sliderContext.config) {
            element.sliderContext._hass = context._hass;
            updateSlider(element.sliderContext);
          }
        });
      }
    });
  }
}

export function changeSubButtons(context, subButtons = context.config.sub_button) {
  updateAllSliderSubButtons(context);
  updateSubButtons(context, subButtons);
  initializesubButtonIcon(context);
}

function initializesubButtonIcon(context) {
  if (!Array.isArray(context.subButtonIcon)) {
    context.subButtonIcon = [];
  }

  const container = context.config.card_type === 'pop-up' ? context.popUp : context.content;
  
  // Main buttons
  container.querySelectorAll('.bubble-sub-button-icon').forEach((iconElement, index) => {
    context.subButtonIcon[index] = iconElement;
  });
  
  // Group buttons
  if (context.elements && context.elements.groups) {
    Object.values(context.elements.groups).forEach(group => {
      if (group.container) {
        const groupIcons = group.container.querySelectorAll('.bubble-sub-button-icon');
        groupIcons.forEach(iconElement => {
          context.subButtonIcon.push(iconElement);
        });
      }
    });
  }
}

// Handle updating buttons within groups
export function updateGroupButtons(context, sectionedArg) {
  context.elements.groups = context.elements.groups || {};
  context.previousValues = context.previousValues || {};
  context.previousValues.groupButtons = context.previousValues.groupButtons || {};

  // Build unified list of groups from sectioned schema
  let sectioned;
  if (Array.isArray(sectionedArg)) {
    sectioned = { main: sectionedArg, bottom: [] };
  } else if (sectionedArg && (Array.isArray(sectionedArg.main) || Array.isArray(sectionedArg.bottom))) {
    sectioned = sectionedArg;
  } else {
    sectioned = ensureNewSubButtonsSchemaObject(context.config);
  }

  // Count non-group buttons to calculate global index starting point
  const mainNonGroupButtons = (Array.isArray(sectioned.main) ? sectioned.main : [])
    .filter(item => item && !Array.isArray(item.group));
  const bottomNonGroupButtons = (Array.isArray(sectioned.bottom) ? sectioned.bottom : [])
    .filter(item => item && !Array.isArray(item.group));
  const totalNonGroupButtons = mainNonGroupButtons.length + bottomNonGroupButtons.length;
  
  // Start global index after non-group buttons (starting from 1)
  let globalIndex = totalNonGroupButtons + 1;

  const mainGroups = (Array.isArray(sectioned.main) ? sectioned.main : [])
    .map((item, idx) => ({ key: `g_main_${idx}`, position: 'top', item }))
    .filter(({ item }) => item && Array.isArray(item.group));
  const bottomGroups = (Array.isArray(sectioned.bottom) ? sectioned.bottom : [])
    .map((item, idx) => ({ key: `g_bottom_${idx}`, position: 'bottom', item }))
    .filter(({ item }) => item && Array.isArray(item.group));
  // Handle bottom non-group buttons: create individual groups when mixed with explicit groups
  const bottomExplicitGroups = (Array.isArray(sectioned.bottom) ? sectioned.bottom : []).filter(it => it && Array.isArray(it.group));
  
  let bottomNonGroupGroups = [];
  if (bottomNonGroupButtons.length > 0) {
    if (bottomExplicitGroups.length > 0) {
      // Mixed case: create individual groups for each non-group button to maintain YAML order
      bottomNonGroupButtons.forEach((item, idx) => {
        bottomNonGroupGroups.push({ 
          key: `g_bottom_individual_${idx}`, 
          position: 'bottom', 
          item: { group: [item], buttons_layout: 'inline' } 
        });
      });
    } else {
      // All individual buttons: use single auto group for efficiency
      bottomNonGroupGroups = [{ 
        key: 'g_bottom_auto', 
        position: 'bottom', 
        item: { group: bottomNonGroupButtons, buttons_layout: 'inline' } 
      }];
    }
  }

  const globalMainLayout = (context.config?.sub_button?.main_layout) ?? 'inline';
  const globalBottomLayout = (context.config?.sub_button?.bottom_layout) ?? 'inline';
  const inlineGroups = [...mainGroups, ...bottomGroups, ...bottomNonGroupGroups]
    .map(({ key, position, item }) => ({
      key,
      group: {
        buttons: item.group,
        position,
        justify_content: item.justify_content,
        group_layout: position === 'bottom' ? globalBottomLayout : globalMainLayout,
        display: item.buttons_layout
      }
    }));

  const allGroups = inlineGroups;

  allGroups.forEach(({ key, group }) => {
    if (!group || !Array.isArray(group.buttons)) return;

    if (!context.elements.groups[key]) {
      context.elements.groups[key] = { buttons: {} };
    }
    if (!context.previousValues.groupButtons[key]) {
      context.previousValues.groupButtons[key] = [];
    }

    const groupElementsObj = context.elements.groups[key];
    const groupContainer = groupElementsObj.container;
    if (!groupContainer) return;

    group.buttons.forEach((button, buttonIndex) => {
      if (!button) return;

      // Use global index starting from 1, with dashes instead of underscores
      const buttonIndexForClass = globalIndex;
      globalIndex++;

      // Keep buttonId for internal tracking, but use normalized index for CSS class
      const buttonId = `${key}_button_${buttonIndex}`;
      const options = getSubButtonOptions(context, button, buttonIndexForClass);

      let element = groupElementsObj.buttons ? groupElementsObj.buttons[buttonId] : null;
      if (!element) {
        element = createSubButtonElement(context, buttonIndexForClass, options.isSelect, options.showArrow, options.entity, button, groupContainer);
        if (!groupElementsObj.buttons) {
          groupElementsObj.buttons = {};
        }
        groupElementsObj.buttons[buttonId] = element;
      } else {
        // Update existing element classes if needed
        const normalizedIndex = String(buttonIndexForClass).replace(/_/g, '-');
        const expectedClass = `bubble-sub-button-${normalizedIndex}`;
        const currentClasses = Array.from(element.classList);
        const currentIndexClass = currentClasses.find(cls => cls.startsWith('bubble-sub-button-') && cls !== 'bubble-sub-button');
        
        if (currentIndexClass !== expectedClass) {
          // Remove old index class
          if (currentIndexClass) {
            element.classList.remove(currentIndexClass);
          }
          // Add new index class
          element.classList.add(expectedClass);
        }
        
        // Update name-based class if name is defined
        if (button?.name) {
          const nameClass = normalizeNameToClass(button.name);
          if (nameClass) {
            const expectedNameClass = `bubble-sub-button-name-${nameClass}`;
            const hasNameClass = currentClasses.some(cls => cls.startsWith('bubble-sub-button-name-'));
            if (!hasNameClass || !currentClasses.includes(expectedNameClass)) {
              // Remove all existing name classes
              currentClasses.forEach(cls => {
                if (cls.startsWith('bubble-sub-button-name-')) {
                  element.classList.remove(cls);
                }
              });
              // Add new name class
              element.classList.add(expectedNameClass);
            }
          }
        }
      }

      if (handleHideWhenParentUnavailable(element, button, context)) {
        return;
      }

      const overlayAtCardLevel = (group.position || 'top') === 'top' && button.sub_button_type === 'slider' && !button.always_visible;
      // Default bottom buttons (in any bottom group) to fill width, but allow user override
      const isBottomGroup = (group.position || 'top') === 'bottom';
      const subButtonWithAutoWidth = isBottomGroup
        ? { ...button, fill_width: (button.fill_width == null ? true : button.fill_width) }
        : button;
      const section = isBottomGroup ? 'bottom' : 'main';
      updateSubButtonContent(context, element, { ...options, subButton: subButtonWithAutoWidth, groupContainer, overlayAtCardLevel, section });
      handleVisibilityConditions(element, button, context._hass);
    });
  });
}

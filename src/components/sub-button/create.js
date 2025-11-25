import { createElement } from "../../tools/utils.js";
import { createDropdownStructure, createDropdownActions } from "../dropdown/index.js";
import { updateContentContainerFixedClass } from "../base-card/index.js";
import { ensureNewSubButtonsSchemaObject, applyFillWidthClass, applyWidthStyles, applyHeightStyles } from "./utils.js";
import styles from "./styles.css";

export function createSubButtonStructure(context, options = {}) {
  const {
    container = context.content,
    appendTo = container.firstChild?.firstChild,
    before = false
  } = options;

  context.elements = context.elements || {};
  context.elements.groups = context.elements.groups || {};

  const sectioned = ensureNewSubButtonsSchemaObject(context.config);
  const mainItems = Array.isArray(sectioned.main) ? sectioned.main : [];
  const bottomItems = Array.isArray(sectioned.bottom) ? sectioned.bottom : [];
  const globalMainLayout = (context.config?.sub_button?.main_layout) ?? 'inline';
  const globalBottomLayout = (context.config?.sub_button?.bottom_layout) ?? 'inline';

  // Create main container if it doesn't exist
  let subButtonContainer = context.elements.subButtonContainer;
  if (!subButtonContainer && (context.config.sub_button)) {
    subButtonContainer = createElement('div', 'bubble-sub-button-container');
    const style = createElement('style');
    style.textContent = styles;
    subButtonContainer.appendChild(style);

    if (before && appendTo) {
      appendTo.prepend(subButtonContainer);
    } else if (appendTo) {
      appendTo.appendChild(subButtonContainer);
    }
    context.elements.subButtonContainer = subButtonContainer;
    
    // Apply justify-content if specified
    if (context.config.sub_button_justify_content) {
      subButtonContainer.style.setProperty('--bubble-sub-button-justify-content', context.config.sub_button_justify_content);
    }
  }
  
  // Create bottom container if it doesn't exist
  let bottomSubButtonContainer = context.elements.bottomSubButtonContainer;
  if (!bottomSubButtonContainer && (bottomItems.length > 0)) {
    bottomSubButtonContainer = createElement('div', 'bubble-sub-button-bottom-container');
    const parent = context.elements.cardWrapper || appendTo;
    if (parent) {
      parent.appendChild(bottomSubButtonContainer);
    }
    context.elements.bottomSubButtonContainer = bottomSubButtonContainer;
  } else if (bottomSubButtonContainer && bottomItems.length === 0) {
    bottomSubButtonContainer.remove();
    delete context.elements.bottomSubButtonContainer;
  }

  // Update content container fixed position based on group placement
  updateContentContainerFixedClass(context);

  // Build group containers from sectioned config (inline groups)
  const mainGroups = mainItems
    .map((item, idx) => ({ key: `g_main_${idx}`, item, idx, position: 'top' }))
    .filter(({ item }) => item && Array.isArray(item.group));
  const bottomGroups = bottomItems
    .map((item, idx) => ({ key: `g_bottom_${idx}`, item, idx, position: 'bottom' }))
    .filter(({ item }) => item && Array.isArray(item.group));
  const inlineGroups = [...mainGroups, ...bottomGroups];

  // Handle bottom non-group buttons: create individual groups when mixed with explicit groups
  const bottomNonGroupItems = bottomItems.filter(item => item && !Array.isArray(item.group));
  const bottomExplicitGroups = bottomItems.filter(item => item && Array.isArray(item.group));
  
  if (bottomNonGroupItems.length > 0) {
    if (bottomExplicitGroups.length > 0) {
      // Mixed case: create individual groups for each non-group button to maintain YAML order
      bottomNonGroupItems.forEach((item, idx) => {
        inlineGroups.push({
          key: `g_bottom_individual_${idx}`,
          item: { group: [item], buttons_layout: 'inline' },
          idx: -1,
          position: 'bottom'
        });
      });
    } else {
      // All individual buttons: use single auto group for efficiency
      inlineGroups.push({
        key: 'g_bottom_auto',
        item: { group: bottomNonGroupItems, buttons_layout: 'inline' },
        idx: -1,
        position: 'bottom'
      });
    }
  }

  if (inlineGroups.length > 0) {
    // Clean up containers that no longer exist
    const validKeys = new Set(inlineGroups.map(({ key }) => key));
    Object.keys(context.elements.groups).forEach(key => {
      // Only manage inline-group keys here
      if (!key.startsWith('g_main_') && !key.startsWith('g_bottom_')) return;
      if (!validKeys.has(key) && context.elements.groups[key]?.container) {
        context.elements.groups[key].container.remove();
        delete context.elements.groups[key];
      }
    });

    // Ensure containers exist and are updated
    inlineGroups.forEach(({ item: group, key, position }) => {
      if (!context.elements.groups[key]) {
        context.elements.groups[key] = {};
      }

      if (!context.elements.groups[key].container) {
        const desiredLayout = position === 'bottom' ? globalBottomLayout : globalMainLayout;
        const groupContainer = createElement('div', `bubble-sub-button-group position-${position} display-${group.buttons_layout || 'inline'} group-layout-${desiredLayout}`);
        groupContainer.setAttribute('data-group-id', key);
        if (group.justify_content) {
          groupContainer.style.setProperty('--bubble-sub-button-group-justify-content', group.justify_content);
        }

        if (position === 'bottom') {
          if (bottomSubButtonContainer) {
            bottomSubButtonContainer.appendChild(groupContainer);
          }
        } else if (subButtonContainer) {
          subButtonContainer.appendChild(groupContainer);
        }

        context.elements.groups[key].container = groupContainer;
      } else {
        const groupContainer = context.elements.groups[key].container;
        const currentPositionClass = groupContainer.className.match(/position-(\w+)/);
        if (currentPositionClass && currentPositionClass[1] !== position) {
          groupContainer.classList.remove(`position-${currentPositionClass[1]}`);
          groupContainer.classList.add(`position-${position}`);
          
          // Move container if position changes
          if (position === 'bottom') {
            bottomSubButtonContainer?.appendChild(groupContainer);
          } else {
            subButtonContainer?.appendChild(groupContainer);
          }
        }
        const currentDisplayClass = groupContainer.className.match(/display-(\w+)/);
        if (currentDisplayClass && currentDisplayClass[1] !== (group.buttons_layout || 'inline')) {
          groupContainer.classList.remove(`display-${currentDisplayClass[1]}`);
          groupContainer.classList.add(`display-${group.buttons_layout || 'inline'}`);
        }
        const currentGroupLayoutClass = groupContainer.className.match(/group-layout-(\w+)/);
        const desiredGroupLayout = position === 'bottom' ? globalBottomLayout : globalMainLayout;
        if (currentGroupLayoutClass && currentGroupLayoutClass[1] !== desiredGroupLayout) {
          groupContainer.classList.remove(`group-layout-${currentGroupLayoutClass[1]}`);
          groupContainer.classList.add(`group-layout-${desiredGroupLayout}`);
        }
        groupContainer.style.setProperty('--bubble-sub-button-group-justify-content', group.justify_content || 'end');
      }
    });

    // Update groups layout classes after processing groups
    updateGroupsLayoutClasses(context, sectioned);
  }

  // Ensure final position class is correct after group processing
  updateContentContainerFixedClass(context);

  return subButtonContainer;
}

// Normalize name to valid CSS class
export function normalizeNameToClass(name) {
  if (!name || typeof name !== 'string') return null;
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function createSubButtonElement(context, index, isSelect, showArrow, entity, subButton, customContainer) {
  if (!context.elements.subButtonContainer && !customContainer) {
    createSubButtonStructure(context);
  }

  const normalizedIndex = String(index).replace(/_/g, '-');
  const classes = [`bubble-sub-button`, `bubble-sub-button-${normalizedIndex}`];
  
  // Add name-based class if name is defined
  if (subButton?.name) {
    const nameClass = normalizeNameToClass(subButton.name);
    if (nameClass) {
      classes.push(nameClass);
    }
  }
  
  const subButtonElement = createElement('div', classes.join(' '));
  subButtonElement.nameContainer = createElement('div', 'bubble-sub-button-name-container');
  subButtonElement.feedbackContainer = createElement('div', 'bubble-feedback-container');
  subButtonElement.feedback = createElement('div', 'bubble-feedback-element feedback-element');

  subButtonElement.appendChild(subButtonElement.feedbackContainer);
  subButtonElement.feedbackContainer.appendChild(subButtonElement.feedback);

  if (isSelect) {
    subButtonElement.classList.add('is-select');
    createDropdownStructure(context, subButtonElement, showArrow);
    subButtonElement.dropdownContainer.style.display = 'none';
    createDropdownActions(context, subButtonElement, entity, subButton);
  }

  // Apply layout options
  applyFillWidthClass(subButtonElement, subButton);
  
  // Apply custom width when not filling the available width
  // Note: Width unit (px vs %) is determined in changes.js based on section (main/bottom)
  // Default to 'main' section for initial creation, will be updated in changes.js
  applyWidthStyles(subButtonElement, subButton, 'main');
  
  applyHeightStyles(subButtonElement, subButton);
  
  if (subButton.content_layout) {
    subButtonElement.classList.add(`content-${subButton.content_layout}`);
  }

  subButtonElement.appendChild(subButtonElement.nameContainer);
  
  // If custom container is provided, append to it instead of default container
  if (customContainer) {
    customContainer.appendChild(subButtonElement);
  } else {
    context.elements.subButtonContainer.appendChild(subButtonElement);
    context.elements[index] = subButtonElement;
  }

  return subButtonElement;
}

// Add container-level classes based on groups layout requests (rows vs inline)
export function updateGroupsLayoutClasses(context, sectioned) {
  const bottomContainer = context?.elements?.bottomSubButtonContainer;
  const topContainer = context?.elements?.subButtonContainer;
  const mainLayout = (context.config?.sub_button?.main_layout) ?? 'inline';
  const bottomLayout = (context.config?.sub_button?.bottom_layout) ?? 'inline';
  if (bottomContainer) {
    bottomContainer.classList.remove('groups-layout-rows', 'groups-layout-inline');
    bottomContainer.classList.add(bottomLayout === 'rows' ? 'groups-layout-rows' : 'groups-layout-inline');
  }
  if (topContainer) {
    topContainer.classList.remove('groups-layout-rows', 'groups-layout-inline');
    topContainer.classList.add(mainLayout === 'rows' ? 'groups-layout-rows' : 'groups-layout-inline');
  }
}
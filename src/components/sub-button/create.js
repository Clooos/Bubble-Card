import { createElement } from "../../tools/utils.js";
import { createDropdownStructure, createDropdownActions } from "../dropdown/index.js";
import { updateContentContainerFixedClass } from "../base-card/index.js";
import { ensureNewSubButtonsSchemaObject, applyFillWidthClass, applyWidthStyles, applyHeightStyles } from "./utils.js";
import styles from "./styles.css";

const BOTTOM_ALIGNMENT_LANE_ORDER = {
  start: 1,
  center: 2,
  fill: 3,
  end: 4
};

const BOTTOM_ALIGNMENT_CLASS_PREFIX = 'alignment-';
const ALIGNMENT_LANE_CLASS = 'bubble-sub-button-alignment-lane';

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
    delete context.elements.bottomAlignmentLanes;
  }

  // Update content container fixed position based on group placement
  updateContentContainerFixedClass(context);

  if (bottomSubButtonContainer) {
    if (globalBottomLayout !== 'inline') {
      teardownBottomAlignmentLanes(context);
      updateBottomAlignmentLaneState(context, false);
    } else {
      context.elements.bottomAlignmentLanes = context.elements.bottomAlignmentLanes || {};
    }
  }

  // Build group containers from sectioned config (inline groups)
  const mainExplicitGroups = mainItems
    .map((item, idx) => ({ key: `g_main_${idx}`, item, idx, position: 'top' }))
    .filter(({ item }) => item && Array.isArray(item.group) && item.group.length > 0);
  const bottomGroups = bottomItems
    .map((item, idx) => ({ key: `g_bottom_${idx}`, item, idx, position: 'bottom' }))
    .filter(({ item }) => item && Array.isArray(item.group) && item.group.length > 0);
  const inlineGroups = [...mainExplicitGroups, ...bottomGroups];

  // Handle main non-group buttons: create auto group when using rows layout or when mixed with explicit groups
  const mainNonGroupItems = mainItems.filter(item => item && !Array.isArray(item.group));
  const hasMainExplicitGroups = mainExplicitGroups.length > 0;
  const needsMainAutoGroup = globalMainLayout === 'rows' || hasMainExplicitGroups || bottomItems.length > 0;
  
  if (mainNonGroupItems.length > 0 && needsMainAutoGroup) {
    // Always use single auto group to keep individual buttons on the same line
    inlineGroups.push({
      key: 'g_main_auto',
      item: { group: mainNonGroupItems, buttons_layout: 'inline' },
      idx: -1,
      position: 'top'
    });
  }

  // Handle bottom non-group buttons: create individual groups when mixed with explicit groups
  const bottomNonGroupItems = bottomItems.filter(item => item && !Array.isArray(item.group));
  const bottomExplicitGroups = bottomItems.filter(item => item && Array.isArray(item.group) && item.group.length > 0);
  
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
      // Only manage inline-group keys here (including auto groups)
      if (!key.startsWith('g_main_') && !key.startsWith('g_bottom_')) return;
      if (!validKeys.has(key) && context.elements.groups[key]?.container) {
        const containerToRemove = context.elements.groups[key].container;
        clearLaneFillRequirement(containerToRemove);
        containerToRemove.remove();
        delete context.elements.groups[key];
      }
    });

    // Ensure containers exist and are updated
    inlineGroups.forEach(({ item: group, key, position }) => {
      if (!context.elements.groups[key]) {
        context.elements.groups[key] = {};
      }

      const desiredLayout = position === 'bottom' ? globalBottomLayout : globalMainLayout;
      const nextAlignmentKey = position === 'bottom' ? normalizeBottomAlignment(group.justify_content) : null;
      const previousAlignmentKey = context.elements.groups[key].alignmentKey;

      if (!context.elements.groups[key].container) {
        const groupContainer = createElement('div', `bubble-sub-button-group position-${position} display-${group.buttons_layout || 'inline'} group-layout-${desiredLayout}`);
        groupContainer.setAttribute('data-group-id', key);
        if (group.justify_content) {
          groupContainer.style.setProperty('--bubble-sub-button-group-justify-content', group.justify_content);
        }
        if (position === 'bottom') {
          setGroupAlignmentClass(groupContainer, nextAlignmentKey);
        }

        appendGroupContainer(context, groupContainer, position, desiredLayout, nextAlignmentKey);
        context.elements.groups[key].container = groupContainer;
        context.elements.groups[key].alignmentKey = nextAlignmentKey;
      } else {
        const groupContainer = context.elements.groups[key].container;
        const currentPositionClass = groupContainer.className.match(/position-(\w+)/);
        if (currentPositionClass && currentPositionClass[1] !== position) {
          clearLaneFillRequirement(groupContainer);
          groupContainer.classList.remove(`position-${currentPositionClass[1]}`);
          groupContainer.classList.add(`position-${position}`);
        }
        const currentDisplayClass = groupContainer.className.match(/display-(\w+)/);
        if (currentDisplayClass && currentDisplayClass[1] !== (group.buttons_layout || 'inline')) {
          groupContainer.classList.remove(`display-${currentDisplayClass[1]}`);
          groupContainer.classList.add(`display-${group.buttons_layout || 'inline'}`);
        }
        const currentGroupLayoutClass = groupContainer.className.match(/group-layout-(\w+)/);
        if (currentGroupLayoutClass && currentGroupLayoutClass[1] !== desiredLayout) {
          groupContainer.classList.remove(`group-layout-${currentGroupLayoutClass[1]}`);
          groupContainer.classList.add(`group-layout-${desiredLayout}`);
        }
        groupContainer.style.setProperty('--bubble-sub-button-group-justify-content', group.justify_content || 'end');

        if (position === 'bottom' && previousAlignmentKey !== nextAlignmentKey) {
          setGroupAlignmentClass(groupContainer, nextAlignmentKey);
        }

        appendGroupContainer(context, groupContainer, position, desiredLayout, nextAlignmentKey);
        context.elements.groups[key].alignmentKey = nextAlignmentKey;
      }
    });

    if (bottomSubButtonContainer && globalBottomLayout === 'inline') {
      cleanupBottomAlignmentLanes(context);
      updateBottomAlignmentLaneState(context, true);
    }

    // Update groups layout classes after processing groups
    updateGroupsLayoutClasses(context, sectioned);
  }

  // Ensure final position class is correct after group processing
  updateContentContainerFixedClass(context);

  return subButtonContainer;
}

function appendGroupContainer(context, groupContainer, position, layout, alignmentKey) {
  if (position === 'bottom') {
    moveGroupToBottomParent(context, groupContainer, layout, alignmentKey);
    return;
  }
  const subButtonContainer = context.elements.subButtonContainer;
  if (subButtonContainer && groupContainer.parentElement !== subButtonContainer) {
    subButtonContainer.appendChild(groupContainer);
  }
}

function moveGroupToBottomParent(context, groupContainer, layout, alignmentKey) {
  const bottomSubButtonContainer = context.elements.bottomSubButtonContainer;
  if (!bottomSubButtonContainer) return;

  if (layout !== 'inline') {
    clearLaneFillRequirement(groupContainer);
    if (groupContainer.parentElement !== bottomSubButtonContainer) {
      bottomSubButtonContainer.appendChild(groupContainer);
    }
    return;
  }

  const laneKey = alignmentKey || 'fill';
  const lane = ensureBottomAlignmentLane(context, laneKey);
  if (lane && groupContainer.parentElement !== lane) {
    lane.appendChild(groupContainer);
  }
  setLaneFillRequirement(groupContainer, false);
}

function ensureBottomAlignmentLane(context, laneKey) {
  const container = context.elements.bottomSubButtonContainer;
  if (!container) return null;

  context.elements.bottomAlignmentLanes = context.elements.bottomAlignmentLanes || {};
  let lane = context.elements.bottomAlignmentLanes[laneKey];
  if (!lane) {
    lane = createElement('div', `bubble-sub-button-alignment-lane lane-${laneKey}`);
    lane.dataset.lane = laneKey;
    lane.style.order = `${BOTTOM_ALIGNMENT_LANE_ORDER[laneKey] ?? BOTTOM_ALIGNMENT_LANE_ORDER.fill}`;
    context.elements.bottomAlignmentLanes[laneKey] = lane;
    container.appendChild(lane);
  } else if (!lane.isConnected) {
    container.appendChild(lane);
  }
  return lane;
}

function cleanupBottomAlignmentLanes(context) {
  const lanes = context.elements.bottomAlignmentLanes;
  if (!lanes) return;
  Object.keys(lanes).forEach((laneKey) => {
    const lane = lanes[laneKey];
    if (!lane) return;
    if (lane.childElementCount === 0) {
      lane.remove();
      delete lanes[laneKey];
    }
  });
}

function teardownBottomAlignmentLanes(context) {
  const lanes = context.elements.bottomAlignmentLanes;
  const container = context.elements.bottomSubButtonContainer;
  if (!lanes || !container) return;
  Object.keys(lanes).forEach((laneKey) => {
    const lane = lanes[laneKey];
    if (!lane) return;
    while (lane.firstChild) {
      const child = lane.firstChild;
      clearLaneFillRequirement(child);
      container.appendChild(child);
    }
    lane.remove();
    delete lanes[laneKey];
  });
}

function normalizeBottomAlignment(value) {
  if (!value) return 'fill';
  const normalized = String(value).toLowerCase().trim();
  if (normalized === 'fill') return 'fill';
  if (['start', 'flex-start', 'left'].includes(normalized)) return 'start';
  if (['end', 'flex-end', 'right'].includes(normalized)) return 'end';
  if (normalized === 'center') return 'center';
  if (['space-between', 'space-around', 'space-evenly', 'stretch'].includes(normalized)) return 'fill';
  return 'fill';
}

function setGroupAlignmentClass(groupContainer, alignmentKey) {
  if (!groupContainer) return;
  ['start', 'center', 'fill', 'end'].forEach((key) => {
    groupContainer.classList.remove(`${BOTTOM_ALIGNMENT_CLASS_PREFIX}${key}`);
  });
  const resolvedAlignment = alignmentKey || 'fill';
  groupContainer.classList.add(`${BOTTOM_ALIGNMENT_CLASS_PREFIX}${resolvedAlignment}`);
}

function updateBottomAlignmentLaneState(context, inlineLayoutActive) {
  const container = context.elements.bottomSubButtonContainer;
  if (!container) return;
  const hasLanes = inlineLayoutActive && hasActiveBottomAlignmentLane(context);
  if (hasLanes) {
    container.classList.add('alignment-lanes-active');
  } else {
    container.classList.remove('alignment-lanes-active');
  }
}

function hasActiveBottomAlignmentLane(context) {
  const lanes = context.elements.bottomAlignmentLanes;
  if (!lanes) return false;
  return Object.keys(lanes).length > 0;
}

function getAlignmentLaneForGroup(groupContainer) {
  if (!groupContainer || !groupContainer.parentElement) return null;
  const parent = groupContainer.parentElement;
  return parent.classList && parent.classList.contains(ALIGNMENT_LANE_CLASS) ? parent : null;
}

function setLaneFillRequirement(groupContainer, shouldFill) {
  const lane = getAlignmentLaneForGroup(groupContainer);
  if (!lane) return;
  if (shouldFill === null) {
    try { delete groupContainer.dataset.laneNeedsFill; } catch (_) {}
  } else {
    groupContainer.dataset.laneNeedsFill = shouldFill ? 'true' : 'false';
  }
  updateLaneExpandClass(lane);
}

function clearLaneFillRequirement(groupContainer) {
  groupContainer?.classList?.remove('alignment-fill-auto');
  setLaneFillRequirement(groupContainer, null);
}

export function syncLaneFillStateForGroup(groupContainer) {
  const lane = getAlignmentLaneForGroup(groupContainer);
  if (!lane) return;
  const requiresFill =
    groupContainer.classList.contains(`${BOTTOM_ALIGNMENT_CLASS_PREFIX}fill`) ||
    !!groupContainer.querySelector('.bubble-sub-slider-wrapper.inline.fill-width, .bubble-sub-button-slider.inline.fill-width, .bubble-sub-button.fill-width');
  const alignmentAlreadyFill = groupContainer.classList.contains(`${BOTTOM_ALIGNMENT_CLASS_PREFIX}fill`);
  const shouldForceFillWidth = requiresFill && !alignmentAlreadyFill;
  groupContainer.classList.toggle('alignment-fill-auto', shouldForceFillWidth);
  groupContainer.dataset.laneNeedsFill = requiresFill ? 'true' : 'false';
  updateLaneExpandClass(lane);
}

function updateLaneExpandClass(lane) {
  if (!lane) return;
  const shouldExpand =
    lane.classList.contains('lane-fill') ||
    lane.classList.contains('lane-center') ||
    Array.from(lane.children || []).some(child => child?.dataset?.laneNeedsFill === 'true');
  if (shouldExpand) {
    lane.classList.add('lane-expand');
  } else {
    lane.classList.remove('lane-expand');
  }
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

export function createSubButtonElement(context, index, isSelect, showArrow, entity, subButton, customContainer, creationOptions = {}) {
  if (!context.elements.subButtonContainer && !customContainer) {
    createSubButtonStructure(context);
  }

  const { attachToDom = true } = creationOptions;
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
  // Pass customContainer as groupContainer if it's a group container
  const isGroupContainer = customContainer && customContainer.classList && customContainer.classList.contains('bubble-sub-button-group');
  applyWidthStyles(subButtonElement, subButton, 'main', isGroupContainer ? customContainer : null);
  
  applyHeightStyles(subButtonElement, subButton);
  
  if (subButton.content_layout) {
    subButtonElement.classList.add(`content-${subButton.content_layout}`);
  }

  subButtonElement.appendChild(subButtonElement.nameContainer);
  
  // If custom container is provided, append to it instead of default container
  if (customContainer) {
    if (attachToDom) {
      customContainer.appendChild(subButtonElement);
    }
  } else {
    if (attachToDom) {
      context.elements.subButtonContainer.appendChild(subButtonElement);
    }
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
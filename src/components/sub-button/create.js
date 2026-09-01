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
    // Keep container if tilt buttons are using it (cover card)
    const tiltNeedsBottom = context.config?.tilt_buttons === 'bottom';
    if (!tiltNeedsBottom) {
      bottomSubButtonContainer.remove();
      delete context.elements.bottomSubButtonContainer;
      delete context.elements.bottomAlignmentLanes;
    }
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

  // Build group containers from sectioned config (inline groups).
  // Each section is walked in declaration order so the list mirrors the YAML:
  // the containers are then inserted at that position instead of being pushed
  // to the end of their parent, which used to make a group appear wherever its
  // container happened to be created (#2517).
  const mainNonGroupItems = mainItems.filter(item => item && !Array.isArray(item.group));
  const hasMainExplicitGroups = mainItems.some(item => item && Array.isArray(item.group) && item.group.length > 0);
  const needsMainAutoGroup = globalMainLayout === 'rows' || hasMainExplicitGroups || bottomItems.length > 0;
  const wantsMainAutoGroup = mainNonGroupItems.length > 0 && needsMainAutoGroup;

  const inlineGroups = [];
  let mainAutoGroupAdded = false;

  mainItems.forEach((item, idx) => {
    if (!item) return;
    if (Array.isArray(item.group)) {
      if (item.group.length > 0) {
        inlineGroups.push({ key: `g_main_${idx}`, item, idx, position: 'top' });
      }
      return;
    }
    // Always use single auto group to keep individual buttons on the same line.
    // It takes the place of the first of them, which is where the editor puts
    // them too when it converts a mixed section (convertIndividualButtonsToGroup).
    if (wantsMainAutoGroup && !mainAutoGroupAdded) {
      mainAutoGroupAdded = true;
      inlineGroups.push({
        key: 'g_main_auto',
        item: { group: mainNonGroupItems, buttons_layout: 'inline' },
        idx: -1,
        position: 'top'
      });
    }
  });

  // Handle bottom non-group buttons: create individual groups when mixed with explicit groups
  const bottomNonGroupItems = bottomItems.filter(item => item && !Array.isArray(item.group));
  const hasBottomExplicitGroups = bottomItems.some(item => item && Array.isArray(item.group) && item.group.length > 0);
  let bottomAutoGroupAdded = false;
  let bottomIndividualIndex = 0;

  bottomItems.forEach((item, idx) => {
    if (!item) return;
    if (Array.isArray(item.group)) {
      if (item.group.length > 0) {
        inlineGroups.push({ key: `g_bottom_${idx}`, item, idx, position: 'bottom' });
      }
      return;
    }
    if (hasBottomExplicitGroups) {
      // Mixed case: create individual groups for each non-group button to maintain YAML order.
      // The key numbers the button within the non-group items, exactly as
      // updateGroupButtons does, so both sides address the same container.
      inlineGroups.push({
        key: `g_bottom_individual_${bottomIndividualIndex}`,
        item: { group: [item], buttons_layout: 'inline' },
        idx: -1,
        position: 'bottom'
      });
      bottomIndividualIndex++;
      return;
    }
    // All individual buttons: use single auto group for efficiency
    if (!bottomAutoGroupAdded) {
      bottomAutoGroupAdded = true;
      inlineGroups.push({
        key: 'g_bottom_auto',
        item: { group: bottomNonGroupItems, buttons_layout: 'inline' },
        idx: -1,
        position: 'bottom'
      });
    }
  });

  // Rank shared by both parents: each one only ever sees a subsequence of it
  const groupOrder = new Map(inlineGroups.map(({ key }, rank) => [key, rank]));

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

        placeGroupContainer(context, groupContainer, position, desiredLayout, nextAlignmentKey, key, groupOrder);
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

        placeGroupContainer(context, groupContainer, position, desiredLayout, nextAlignmentKey, key, groupOrder);
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

function placeGroupContainer(context, groupContainer, position, layout, alignmentKey, key, groupOrder) {
  if (position === 'bottom') {
    moveGroupToBottomParent(context, groupContainer, layout, alignmentKey, key, groupOrder);
    return;
  }
  insertGroupInParent(context.elements.subButtonContainer, groupContainer, key, groupOrder);
}

function moveGroupToBottomParent(context, groupContainer, layout, alignmentKey, key, groupOrder) {
  const bottomSubButtonContainer = context.elements.bottomSubButtonContainer;
  if (!bottomSubButtonContainer) return;

  if (layout !== 'inline') {
    clearLaneFillRequirement(groupContainer);
    insertGroupInParent(bottomSubButtonContainer, groupContainer, key, groupOrder);
    return;
  }

  const laneKey = alignmentKey || 'fill';
  const lane = ensureBottomAlignmentLane(context, laneKey);
  insertGroupInParent(lane, groupContainer, key, groupOrder);
  setLaneFillRequirement(groupContainer, false);
}

// A group belongs where its section declares it, not where its container
// happened to be created. Appending to the parent tied the on-screen order to
// the creation history: a container built later than its neighbours (a group
// whose buttons only exist under some conditions, or one re-created after a
// config change) landed last and shifted every row after it (#2517).
// The insertion point is the first sibling that outranks it, so an already
// well-placed container is left untouched.
function insertGroupInParent(parent, groupContainer, key, groupOrder) {
  if (!parent) return;

  const rank = groupOrder?.get(key);
  const children = Array.from(parent.children || []);
  let reference = null;

  if (rank != null) {
    reference = children.find((child) => {
      if (child === groupContainer) return false;
      const childKey = child.getAttribute?.('data-group-id');
      if (!childKey) return false;
      const childRank = groupOrder.get(childKey);
      return childRank != null && childRank > rank;
    }) ?? null;
  }

  if (groupContainer.parentElement === parent) {
    const currentIndex = children.indexOf(groupContainer);
    const referenceIndex = reference ? children.indexOf(reference) : children.length;
    if (referenceIndex === currentIndex + 1) return;
  }

  parent.insertBefore(groupContainer, reference);
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
  updateLaneVisibility(lane);
}

// A lane holding none but hidden groups still takes its share of the bottom
// row: it kept the gap of a row that has nothing left to show (#2241). Every
// group of a lane is synced in the same pass, so the last one settles the lane.
function updateLaneVisibility(lane) {
  if (!lane) return;
  const groups = Array.from(lane.children || []);
  const allHidden = groups.length === 0 || groups.every(group => group.classList?.contains('hidden'));
  lane.classList.toggle('hidden', allHidden);
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
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
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

  // Explicit stable class: unlike the name-based one it survives renames and
  // localized names (generated suggestions anchor their styles on it).
  if (subButton?.css_class) {
    const configuredClass = normalizeNameToClass(subButton.css_class);
    if (configuredClass) {
      classes.push(configuredClass);
    }
  }

  const subButtonElement = createElement('div', classes.join(' '));
  subButtonElement.nameContainer = createElement('div', 'bubble-sub-button-name-container');

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
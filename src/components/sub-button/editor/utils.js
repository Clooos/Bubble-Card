// Common sub-button editor utilities to be used in both individual sub-buttons and grouped buttons
import { html } from 'lit';
import { isReadOnlyEntityId } from '../../slider/helpers.js';
import { makeGenericSliderSettings } from '../../slider/editor.js';
import { getLazyLoadedPanelContent, renderDropdown } from '../../../editor/utils.js';
import { loadSubButtonClipboard } from './clipboard.js';

export function makeUnifiedSubButtonEditor(editor, button, index, path, updateValueFn, deleteFn, moveFn, copyFn, cutFn, options = {}) {
  const {
    panelKeyPrefix = 'sub_button',
    buttonTitle = `Button ${index + 1}${button.name ? ` - ${button.name}` : ''}`,
    arrayLength = null
  } = options;

  // Initialize expanded panel states if needed
  if (typeof editor._expandedPanelStates === 'undefined') {
    editor._expandedPanelStates = {};
  }

  const entity = button.entity ?? editor._config.entity;
  const isReadOnly = isReadOnlyEntityId(entity);
  const isSelect = entity?.startsWith("input_select") || entity?.startsWith("select") || button.select_attribute;
  
  // Auto-upgrade implicit select to explicit type for better control in editor
  if (!button.sub_button_type && isSelect) {
    try { setTimeout(() => updateValueFn({ sub_button_type: 'select' })); } catch (_) {}
  }
  
  const entityAttribute = editor.hass.states[entity]?.attributes;
  const hasSelectAttributeList = editor._selectable_attributes.some(attr => entityAttribute?.[attr]);
  const selectableAttributeList = Object.keys(editor.hass.states[entity]?.attributes || {}).map((attributeName) => {
    let state = editor.hass.states[entity];
    let formattedName = editor.hass.formatEntityAttributeName(state, attributeName);
    return { label: formattedName, value: attributeName };
  }).filter(attribute => editor._selectable_attributes.includes(attribute.value));
  const conditions = button.visibility ?? [];

  // Supported types based on entity capabilities
  const sliderSupported = !isReadOnly;
  const selectSupported = isSelect || hasSelectAttributeList;
  const typeItems = [
    { label: 'Default (button)', value: 'default' },
    ...(sliderSupported ? [{ label: 'Slider', value: 'slider' }] : []),
    ...(selectSupported ? [{ label: 'Dropdown / Select', value: 'select' }] : [])
  ];

  const mainPanelKey = `${panelKeyPrefix}_main_${index}`;
  const settingsPanelKey = `${panelKeyPrefix}_settings_${index}`;
  const actionsPanelKey = `${panelKeyPrefix}_actions_${index}`;
  const visibilityPanelKey = `${panelKeyPrefix}_visibility_${index}`;
  const layoutPanelKey = `${panelKeyPrefix}_layout_${index}`;
  const sliderTypePanelKey = `${panelKeyPrefix}_type_slider_${index}`;

  const isSliderWithAlwaysVisible = button.sub_button_type === 'slider' && button.always_visible;
  const disableActions = (button.sub_button_type === 'select' || (!button.sub_button_type && isSelect)) || isSliderWithAlwaysVisible;

  const isBottomSection = typeof path === 'string' && path.startsWith('sub_button.bottom');
  const effectiveFillWidth = (button.fill_width == null) ? (isBottomSection ? true : false) : button.fill_width;
  
  // Check if button is in a group with Right/Left/Center alignment
  let hasNonFillAlignment = false;
  if (typeof path === 'string' && path.includes('.group')) {
    // Parse path to extract section and group index: sub_button.bottom.0.group or sub_button.main.0.group
    const pathMatch = path.match(/^sub_button\.(main|bottom)\.(\d+)\.group$/);
    if (pathMatch) {
      const [, sectionKey, groupIndex] = pathMatch;
      const sectionedView = editor._config.sub_button;
      if (sectionedView && sectionedView[sectionKey]) {
        const group = sectionedView[sectionKey][parseInt(groupIndex, 10)];
        if (group && group.justify_content) {
          const alignment = group.justify_content.toLowerCase();
          // Check if alignment is Right (end), Left (start), or Center
          hasNonFillAlignment = ['end', 'start', 'center'].includes(alignment);
        }
      }
    }
  }

  const canMoveLeft = arrayLength !== null ? index > 0 : true;
  const canMoveRight = arrayLength !== null ? index < arrayLength - 1 : true;

  return html`
    <ha-expansion-panel 
      outlined
      @expanded-changed=${(e) => {
        editor._expandedPanelStates[mainPanelKey] = e.target.expanded;
        editor.requestUpdate();
      }}
    >
      <h4 slot="header">
        <ha-icon icon="mdi:border-radius"></ha-icon>
        ${buttonTitle}
        <div class="button-container" @click=${(e) => e.stopPropagation()} @mousedown=${(e) => e.stopPropagation()} @touchstart=${(e) => e.stopPropagation()}>
          ${renderDropdown({
            trigger: html`
              <mwc-icon-button slot="trigger" class="icon-button header" title="Options">
                <ha-icon style="display: flex" icon="mdi:dots-vertical"></ha-icon>
              </mwc-icon-button>
            `,
            items: [
              { 
                type: 'item',
                icon: 'mdi:arrow-left', 
                label: 'Move left',
                disabled: !canMoveLeft,
                onClick: (e) => { e.stopPropagation(); if (canMoveLeft) moveFn(-1); }
              },
              { 
                type: 'item',
                icon: 'mdi:arrow-right', 
                label: 'Move right',
                disabled: !canMoveRight,
                onClick: (e) => { e.stopPropagation(); if (canMoveRight) moveFn(1); }
              },
              { type: 'divider' },
              { 
                type: 'item',
                icon: 'mdi:content-copy', 
                label: 'Copy',
                onClick: (e) => { e.stopPropagation(); copyFn(e); }
              },
              { 
                type: 'item',
                icon: 'mdi:content-cut', 
                label: 'Cut',
                onClick: (e) => { e.stopPropagation(); cutFn(e); }
              },
              { type: 'divider' },
              { 
                type: 'item',
                icon: 'mdi:delete', 
                label: 'Delete',
                variant: 'danger',
                onClick: (e) => { e.stopPropagation(); deleteFn(e); }
              }
            ]
          })}
        </div>
      </h4>
      <div class="content">
        ${getLazyLoadedPanelContent(editor, mainPanelKey, !!editor._expandedPanelStates[mainPanelKey], () => html`
          <ha-expansion-panel 
            outlined
            @expanded-changed=${(e) => {
              editor._expandedPanelStates[settingsPanelKey] = e.target.expanded;
              editor.requestUpdate();
            }}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:cog"></ha-icon>
              Button settings
            </h4>
            <div class="content">
              ${getLazyLoadedPanelContent(editor, settingsPanelKey, !!editor._expandedPanelStates[settingsPanelKey], () => html` 
                <ha-form
                  .hass=${editor.hass}
                  .data=${button}
                  .schema=${[
                    { 
                      name: "entity",
                      label: "Optional - Entity (default to card entity)", 
                      selector: { entity: {} }
                    }
                  ]}   
                  .computeLabel=${editor._computeLabelCallback}
                  @value-changed=${(ev) => updateValueFn(ev.detail.value)}
                ></ha-form>
                <ha-form
                  .hass=${editor.hass}
                  .data=${{ sub_button_type: button.sub_button_type ?? 'default' }}
                  .schema=${[{
                      name: 'sub_button_type',
                      selector: {
                          select: {
                              options: typeItems,
                              mode: 'dropdown'
                          }
                      }
                  }]}
                  .computeLabel=${() => 'Sub-button type'}
                  @value-changed=${(ev) => updateValueFn({ sub_button_type: ev.detail.value.sub_button_type })}
                ></ha-form>
                ${button.sub_button_type === 'slider' ? html`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      Slider behavior
                    </h4>
                    <div class="content">
                      <p>By default, you need to tap the sub-button to reveal the slider. To make the slider always visible, enable the "Always show slider" option in the Layout section below.</p>
                    </div>
                  </div>
                ` : ''}
                ${(button.sub_button_type === 'select' || (!button.sub_button_type && isSelect)) && hasSelectAttributeList ? html`
                  <ha-form
                    .hass=${editor.hass}
                    .data=${{ select_attribute: button.select_attribute }}
                    .schema=${[{
                        name: 'select_attribute',
                        selector: {
                            select: {
                                options: selectableAttributeList,
                                mode: 'dropdown'
                            }
                        }
                    }]}
                    .computeLabel=${() => 'Optional - Select menu (from attributes)'}
                    @value-changed=${(ev) => updateValueFn({ select_attribute: ev.detail.value.select_attribute })}
                  ></ha-form>
                ` : ''}
                <div class="ha-textfield">
                  <ha-textfield
                    label="Optional - Name"
                    .value="${button.name ?? ''}"
                    @input="${(ev) => updateValueFn({ name: ev.target.value })}"
                  ></ha-textfield>
                </div>
                <div class="ha-icon-picker">
                  <ha-icon-picker
                    label="Optional - Icon"
                    .value="${button.icon}"
                    item-label-path="label"
                    item-value-path="value"
                    @value-changed="${(ev) => updateValueFn({ icon: ev.detail.value })}"
                  ></ha-icon-picker>
                </div>
              `)}
              ${editor.makeShowState(button, `${path}.${index}.`, path, index)}
            </div>
          </ha-expansion-panel>

          ${button.sub_button_type === 'slider' ? html`
            <ha-expansion-panel 
              outlined
              @expanded-changed=${(e) => {
                editor._expandedPanelStates[sliderTypePanelKey] = e.target.expanded;
                editor.requestUpdate();
              }}
            >
              <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Slider settings
              </h4>
              <div class="content">
                ${getLazyLoadedPanelContent(editor, sliderTypePanelKey, !!editor._expandedPanelStates[sliderTypePanelKey], () => html`
                  ${makeGenericSliderSettings({
                    hass: editor.hass,
                    data: button,
                    entity,
                    computeLabel: editor._computeLabelCallback,
                    onFormChange: (ev) => updateValueFn(ev.detail.value),
                    onToggleChange: (key, value) => updateValueFn({ [key]: value }),
                    isReadOnly,
                    forceValuePositionRight: !!(button.always_visible && button.show_button_info)
                  })}
                `)}
              </div>
            </ha-expansion-panel>
          ` : ''}

          <ha-expansion-panel 
            outlined 
            @expanded-changed=${(e) => {
              editor._expandedPanelStates[actionsPanelKey] = e.target.expanded;
              editor.requestUpdate();
            }}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:gesture-tap"></ha-icon>
              Tap action on button
            </h4>
            <div class="content">
              ${getLazyLoadedPanelContent(editor, actionsPanelKey, !!editor._expandedPanelStates[actionsPanelKey], () => html`
                ${isSliderWithAlwaysVisible ? html`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      Actions disabled
                    </h4>
                    <div class="content">
                      <p>Tap, double tap, and hold actions are disabled on this sub-button because "Always show slider" is enabled.</p>
                    </div>
                  </div>
                ` : ''}
                <div style="${disableActions ? 'opacity: 0.5; pointer-events: none;' : ''}">
                  ${editor.makeActionPanel("Tap action", button, 'more-info', path, index)}
                </div>
                <div style="${disableActions ? 'opacity: 0.5; pointer-events: none;' : ''}">
                  ${editor.makeActionPanel("Double tap action", button, 'none', path, index)}
                </div>
                <div style="${disableActions ? 'opacity: 0.5; pointer-events: none;' : ''}">
                  ${editor.makeActionPanel("Hold action", button, 'none', path, index)}
                </div>
              `)}
            </div>
          </ha-expansion-panel>

          <ha-expansion-panel 
            outlined
            @expanded-changed=${(e) => {
              editor._expandedPanelStates[visibilityPanelKey] = e.target.expanded;
              editor.requestUpdate();
            }}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:eye"></ha-icon>
              Visibility
            </h4>
            <div class="content">
              ${getLazyLoadedPanelContent(editor, visibilityPanelKey, !!editor._expandedPanelStates[visibilityPanelKey], () => html`
                <ha-formfield label="Hide when parent entity is unavailable">
                  <ha-switch
                    .checked=${button.hide_when_parent_unavailable ?? false}
                    @change=${(ev) => updateValueFn({ hide_when_parent_unavailable: ev.target.checked })}
                  ></ha-switch>
                </ha-formfield>
                <ha-card-conditions-editor
                  .hass=${editor.hass}
                  .conditions=${conditions}
                  @value-changed=${(ev) => updateValueFn({ visibility: ev.detail.value })}
                >
                </ha-card-conditions-editor>
                <ha-alert alert-type="info">
                  The sub-button will be shown when ALL conditions are fulfilled. If no conditions are set, the sub-button will always be shown.
                </ha-alert>
              `)}
            </div>
          </ha-expansion-panel>

          <ha-expansion-panel 
            outlined
            @expanded-changed=${(e) => {
              editor._expandedPanelStates[layoutPanelKey] = e.target.expanded;
              editor.requestUpdate();
            }}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:view-grid"></ha-icon>
              Layout
            </h4>
            <div class="content">
              ${getLazyLoadedPanelContent(editor, layoutPanelKey, !!editor._expandedPanelStates[layoutPanelKey], () => html`
                ${isBottomSection ? html`
                  <ha-formfield label="Fill available width">
                    <ha-switch
                      .checked=${effectiveFillWidth ?? true}
                      @change=${(ev) => updateValueFn({ fill_width: ev.target.checked })}
                    ></ha-switch>
                  </ha-formfield>
                ` : ''}
                ${button.sub_button_type === 'slider' ? html`
                  <ha-formfield label="Always show slider">
                    <ha-switch
                      .checked=${button.always_visible ?? false}
                      @change=${(ev) => updateValueFn({ always_visible: ev.target.checked })}
                    ></ha-switch>
                  </ha-formfield>
                ` : ''}
                ${button.sub_button_type === 'slider' && button.always_visible ? html`
                  <ha-formfield label="Show button info (Icon, name, state...)">
                    <ha-switch
                      .checked=${button.show_button_info ?? false}
                      @change=${(ev) => updateValueFn({ show_button_info: ev.target.checked })}
                    ></ha-switch>
                  </ha-formfield>
                ` : ''}
                <ha-textfield
                  label="${(isBottomSection && !hasNonFillAlignment) ? 'Custom button width (%)' : 'Custom button width (px)'}"
                  type="number"
                  min="${(isBottomSection && !hasNonFillAlignment) ? 0 : (button.sub_button_type === 'slider' && button.always_visible ? 68 : 36)}"
                  max="${(isBottomSection && !hasNonFillAlignment) ? 100 : 600}"
                  .value="${button.width ?? ''}"
                  .disabled=${effectiveFillWidth === true}
                  @input="${(ev) => {
                    const value = ev.target.value;
                    updateValueFn({ width: value === '' ? undefined : Number(value) });
                  }}"
                ></ha-textfield>
                <ha-textfield
                  label="Custom button height (px)"
                  type="number"
                  min="20"
                  max="600"
                  .value="${button.custom_height ?? ''}"
                  @input="${(ev) => {
                    const value = ev.target.value;
                    updateValueFn({ custom_height: value === '' ? undefined : Number(value) });
                  }}"
                ></ha-textfield>
                ${button.sub_button_type !== 'slider' || !button.always_visible ? html`
                  <ha-select
                    label="Content layout"
                    .value="${button.content_layout ?? 'icon-left'}"
                    @selected="${(ev) => updateValueFn({ content_layout: ev.target.value })}"
                    @closed="${(ev) => ev.stopPropagation()}"
                    fixedMenuPosition
                  >
                    <mwc-list-item value="icon-left">Icon on left (default)</mwc-list-item>
                    <mwc-list-item value="icon-top">Icon on top</mwc-list-item>
                    <mwc-list-item value="icon-bottom">Icon on bottom</mwc-list-item>
                    <mwc-list-item value="icon-right">Icon on right</mwc-list-item>
                  </ha-select>
                ` : ''}
              `)}
            </div>
          </ha-expansion-panel>
        `)}
      </div>
    </ha-expansion-panel>
  `;
}

// Common clipboard operations
export function createCopyHandler(editor, itemToCopy, saveFn) {
  return (event) => {
    event?.stopPropagation();
    if (!itemToCopy) return;
    try {
      editor._clipboardButton = JSON.parse(JSON.stringify(itemToCopy));
    } catch (_) {
      editor._clipboardButton = itemToCopy;
    }
    if (saveFn) saveFn(editor._clipboardButton);
    editor.requestUpdate();
  };
}

export function createCutHandler(editor, itemToCopy, removeFn, saveFn) {
  return (event) => {
    event?.stopPropagation();
    createCopyHandler(editor, itemToCopy, saveFn)(event);
    if (removeFn) removeFn(event);
  };
}

// Helper to find section key from array reference
function findSectionKey(editor, targetArray) {
  if (targetArray === editor._config.sub_button?.main) return 'main';
  if (targetArray === editor._config.sub_button?.bottom) return 'bottom';
  return null;
}

// Helper to safely update sub_button property
function updateSubButtonProperty(editor, sectionKey, updater) {
  try {
    editor._config.sub_button[sectionKey] = updater(editor._config.sub_button[sectionKey]);
  } catch (_) {
    // If sub_button is frozen, clone it
    try {
      editor._config.sub_button = { ...editor._config.sub_button, [sectionKey]: updater(editor._config.sub_button[sectionKey]) };
    } catch (__) {
      // If config itself is frozen, clone the entire config
      editor._config = { ...editor._config, sub_button: { ...editor._config.sub_button, [sectionKey]: updater(editor._config.sub_button[sectionKey]) } };
    }
  }
}

// Common remove operation
export function createRemoveHandler(editor, targetArray, index, onValueChanged) {
  return (event) => {
    event?.stopPropagation();
    const sectionKey = findSectionKey(editor, targetArray);
    if (!sectionKey) {
      // Fallback for non-section arrays
      const targetArrayCopy = [...targetArray];
      targetArrayCopy.splice(index, 1);
      if (onValueChanged) onValueChanged(editor);
      editor.requestUpdate();
      return;
    }
    // Use section update helper
    const targetArr = editor._config.sub_button[sectionKey];
    const targetArrayCopy = [...targetArr];
    targetArrayCopy.splice(index, 1);
    updateSubButtonProperty(editor, sectionKey, () => targetArrayCopy);
    if (onValueChanged) onValueChanged(editor);
    editor.requestUpdate();
  };
}

// Common move operation
export function createMoveHandler(editor, targetArray, index, onValueChanged) {
  return (direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= targetArray.length) return;
    const sectionKey = findSectionKey(editor, targetArray);
    if (!sectionKey) {
      // Fallback for non-section arrays
      const targetArrayCopy = [...targetArray];
      [targetArrayCopy[index], targetArrayCopy[newIndex]] = [targetArrayCopy[newIndex], targetArrayCopy[index]];
      if (onValueChanged) onValueChanged(editor);
      editor.requestUpdate();
      return;
    }
    // Use section update helper
    const targetArr = editor._config.sub_button[sectionKey];
    const targetArrayCopy = [...targetArr];
    [targetArrayCopy[index], targetArrayCopy[newIndex]] = [targetArrayCopy[newIndex], targetArrayCopy[index]];
    updateSubButtonProperty(editor, sectionKey, () => targetArrayCopy);
    if (onValueChanged) onValueChanged(editor);
    editor.requestUpdate();
  };
}

// Convert individual buttons to a group, preserving existing groups
export function convertIndividualButtonsToGroup(arr) {
  const individuals = arr.filter(item => item && !Array.isArray(item.group));
  if (individuals.length === 0) return [...arr];
  
  const groups = arr.filter(item => item && Array.isArray(item.group));
  return [
    { name: 'Automatically grouped', buttons_layout: 'inline', group: individuals },
    ...groups
  ];
}

// Common paste operation
export function createPasteHandler(editor, targetArray, onValueChanged, getClipboardFn) {
  return () => {
    const stored = editor._clipboardButton || (getClipboardFn ? getClipboardFn() : null);
    if (!stored) return;
    
    editor._clipboardButton = stored;
    const clone = JSON.parse(JSON.stringify(stored));
    const sectionKey = findSectionKey(editor, targetArray);
    const isPastingGroup = Array.isArray(clone.buttons) || Array.isArray(clone.group);
    
    const sourceArr = sectionKey ? editor._config.sub_button[sectionKey] : targetArray;
    let result = isPastingGroup ? convertIndividualButtonsToGroup(sourceArr) : [...sourceArr];
    
    if (isPastingGroup) {
      result.push({ 
        name: clone.name, 
        buttons_layout: clone.display || clone.buttons_layout || 'inline', 
        justify_content: clone.justify_content, 
        group: clone.buttons || clone.group || []
      });
    } else {
      result.push(clone);
    }
    
    if (sectionKey) {
      updateSubButtonProperty(editor, sectionKey, () => result);
    }
    if (onValueChanged) onValueChanged(editor);
    editor.requestUpdate();
  };
}

// Paste handler for buttons within a group
export function createGroupButtonPasteHandler(editor, targetArray, groupIndex, onValueChanged, getClipboardFn) {
  return () => {
    const stored = editor._clipboardButton || (getClipboardFn ? getClipboardFn() : null);
    if (!stored) return;
    editor._clipboardButton = stored;
    const sectionKey = findSectionKey(editor, targetArray);
    if (!sectionKey) return;
    // Use section update helper
    const targetArr = editor._config.sub_button[sectionKey];
    const targetArrayCopy = [...targetArr];
    const groupCopy = { ...targetArrayCopy[groupIndex] };
    if (!Array.isArray(groupCopy.group)) groupCopy.group = [];
    
    // Check if group has non-fill alignment in bottom section
    const hasNonFillAlignment = sectionKey === 'bottom' && groupCopy.justify_content && groupCopy.justify_content !== 'fill';
    
    const isGroup = Array.isArray(stored?.buttons) || Array.isArray(stored?.group);
    if (isGroup) {
      let copy = JSON.parse(JSON.stringify(stored.buttons || stored.group || []));
      // Apply fill_width: false to pasted buttons if group has non-fill alignment
      if (hasNonFillAlignment) {
        copy = copy.map(btn => btn ? { ...btn, fill_width: false } : btn);
      }
      groupCopy.group = [...groupCopy.group, ...copy];
    } else {
      let copy = JSON.parse(JSON.stringify(stored));
      // Apply fill_width: false to pasted button if group has non-fill alignment
      if (hasNonFillAlignment && copy) {
        copy.fill_width = false;
      }
      groupCopy.group = [...groupCopy.group, copy];
    }
    targetArrayCopy[groupIndex] = groupCopy;
    updateSubButtonProperty(editor, sectionKey, () => targetArrayCopy);
    if (onValueChanged) onValueChanged(editor);
    editor.requestUpdate();
  };
}

// Get paste button text
export function getPasteButtonText(editor, getClipboardFn) {
  const c = editor._clipboardButton || (getClipboardFn ? getClipboardFn() : null);
  return c ? `Paste "${c.name || 'sub-button'}"` : 'Paste';
}


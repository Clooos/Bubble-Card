import { html } from 'lit';
import { getLazyLoadedPanelContent } from '../../../editor/utils.js';
import { 
  makeUnifiedSubButtonEditor, 
  createCopyHandler, 
  createCutHandler, 
  createRemoveHandler, 
  createMoveHandler, 
  createPasteHandler,
  createGroupButtonPasteHandler,
  getPasteButtonText
} from './utils.js';
import { loadSubButtonClipboard, saveSubButtonClipboard } from './clipboard.js';
import { ensureNewSubButtonsSchemaObject, convertOldToNewSubButtons, isNewSubButtonsSchema } from '../utils.js';

// Ensure sub_button object/section arrays exist only when needed
function getOrInitSectionArray(editor, sectionKey) {
  // Block main section for sub-buttons card
  if (editor._config.card_type === 'sub-buttons' && sectionKey === 'main') {
    return [];
  }
  // If legacy array, migrate to sectioned shape on first write
  if (Array.isArray(editor._config.sub_button)) {
    const converted = convertOldToNewSubButtons(editor._config.sub_button);
    const minimal = {};
    if (Array.isArray(converted.main) && converted.main.length) minimal.main = converted.main.slice();
    if (Array.isArray(converted.bottom) && converted.bottom.length) minimal.bottom = converted.bottom.slice();
    try {
      editor._config.sub_button = minimal;
    } catch (_) {
      // If config is frozen/non-extensible, replace it with a cloned one
      editor._config = { ...editor._config, sub_button: minimal };
    }
  }
  if (!editor._config.sub_button) {
    try {
      editor._config.sub_button = {};
    } catch (_) {
      editor._config = { ...editor._config, sub_button: {} };
    }
  }
  if (!Array.isArray(editor._config.sub_button[sectionKey])) {
    try {
      editor._config.sub_button[sectionKey] = [];
    } catch (_) {
      // If sub_button is frozen, clone it
      try {
        editor._config.sub_button = { ...editor._config.sub_button, [sectionKey]: [] };
      } catch (__) {
        // If config itself is frozen, clone the entire config
        editor._config = { ...editor._config, sub_button: { ...editor._config.sub_button, [sectionKey]: [] } };
      }
    }
  }
  return editor._config.sub_button[sectionKey];
}

// Helper to safely update section array (clones to ensure extensibility)
function updateSectionArray(editor, sectionKey, updater, onValueChanged) {
  const targetArr = getOrInitSectionArray(editor, sectionKey);
  const targetArrCopy = updater([...targetArr]);
  // Clone sub_button object to ensure it is extensible
  try {
    editor._config.sub_button[sectionKey] = targetArrCopy;
  } catch (_) {
    // If sub_button is frozen, clone it
    try {
      editor._config.sub_button = { ...editor._config.sub_button, [sectionKey]: targetArrCopy };
    } catch (__) {
      // If config itself is frozen, clone the entire config
      editor._config = { ...editor._config, sub_button: { ...editor._config.sub_button, [sectionKey]: targetArrCopy } };
    }
  }
  if (onValueChanged) onValueChanged(editor);
  editor.requestUpdate();
}

// Helper to safely update a group within a section array
function updateGroupInSection(editor, sectionKey, groupIndex, updater, onValueChanged) {
  const targetArr = getOrInitSectionArray(editor, sectionKey);
  const targetArrCopy = [...targetArr];
  const groupCopy = { ...targetArrCopy[groupIndex] };
  const updatedGroup = updater(groupCopy);
  targetArrCopy[groupIndex] = updatedGroup;
  // Clone sub_button object to ensure it is extensible
  try {
    editor._config.sub_button[sectionKey] = targetArrCopy;
  } catch (_) {
    // If sub_button is frozen, clone it
    try {
      editor._config.sub_button = { ...editor._config.sub_button, [sectionKey]: targetArrCopy };
    } catch (__) {
      // If config itself is frozen, clone the entire config
      editor._config = { ...editor._config, sub_button: { ...editor._config.sub_button, [sectionKey]: targetArrCopy } };
    }
  }
  if (onValueChanged) onValueChanged(editor);
  editor.requestUpdate();
}

// Commit minimal sub_button to config: remove empty sections and drop the property when empty
function subButtonsValueChanged(editor) {
  const sb = editor._config.sub_button;
  const isSubButtonsCard = editor._config.card_type === 'sub-buttons';
  const hasAnyButtons = (arr) => Array.isArray(arr) && arr.some((item) => {
    if (!item) return false;
    if (Array.isArray(item.group)) {
      // Consider an empty group as a valid element so that newly added
      // groups are not discarded before the user adds buttons to them
      return true;
    }
    return true;
  });
  const hasMain = !isSubButtonsCard && hasAnyButtons(sb?.main);
  const hasBottom = hasAnyButtons(sb?.bottom);

  const hasGlobalLayouts = !!(sb && (typeof sb.main_layout !== 'undefined' || typeof sb.bottom_layout !== 'undefined'));
  if (!hasMain && !hasBottom && !hasGlobalLayouts) {
    try { delete editor._config.sub_button; } catch (_) {
      editor._config = { ...editor._config };
      delete editor._config.sub_button;
    }
    editor._valueChanged({ target: { configValue: 'sub_button', value: undefined } });
    return;
  }

  if (hasBottom) {
    editor._firstRowsComputation = true;
    // In section view, if card_layout is explicitly set to 'normal', remove it to use default 'large'
    const isSectionView = Boolean(window.isSectionView);
    const hasCardLayoutExplicitlyDefined = Object.prototype.hasOwnProperty.call(editor._config, 'card_layout');
    if (isSectionView && hasCardLayoutExplicitlyDefined && editor._config.card_layout === 'normal') {
      try {
        delete editor._config.card_layout;
      } catch (_) {
        const configCopy = { ...editor._config };
        delete configCopy.card_layout;
        editor._config = configCopy;
      }
      editor._valueChanged({ target: { configValue: 'card_layout', value: undefined } });
    }
  }

  const value = {};
  if (hasMain) value.main = (sb.main || []).filter(it => !!it);
  if (hasBottom) value.bottom = (sb.bottom || []).filter(it => !!it);
  if (sb && typeof sb.main_layout !== 'undefined' && !isSubButtonsCard) value.main_layout = sb.main_layout;
  if (sb && typeof sb.bottom_layout !== 'undefined') value.bottom_layout = sb.bottom_layout;
  editor._valueChanged({ target: { configValue: 'sub_button', value } });
}

function makeGroupEditor(editor, group, groupIndex, sectionKey) {
  const panelKey = `${sectionKey}_group_${groupIndex}`;
  const targetArr = sectionKey === 'main' ? editor._config.sub_button.main : editor._config.sub_button.bottom;

  const updateGroupValues = (values) => {
    updateGroupInSection(editor, sectionKey, groupIndex, (group) => {
      const next = { ...group };
      const groupButtons = Array.isArray(group.group) ? [...group.group] : [];
      const hasExplicitFill = groupButtons.some((b) => b && b.fill_width === true);
      // Map editor values to schema fields
      if (Object.prototype.hasOwnProperty.call(values, 'name')) next.name = values.name;
      // group_layout removed in favor of global layout controls
      if (Object.prototype.hasOwnProperty.call(values, 'buttons_layout')) next.buttons_layout = values.buttons_layout;
      if (Object.prototype.hasOwnProperty.call(values, 'justify_content')) {
        const requested = values.justify_content;
        // Map UI pseudo-value 'fill' to config (remove justify_content), otherwise set real CSS value
        if (requested === 'fill') {
          // Selecting Fill available width does not set a CSS justify; remove to use default
          if (Object.prototype.hasOwnProperty.call(next, 'justify_content')) delete next.justify_content;
          // Restore per-button fill behavior
          if (Array.isArray(groupButtons)) {
            for (let i = 0; i < groupButtons.length; i += 1) {
              const btn = groupButtons[i];
              if (!btn) continue;
              if (sectionKey === 'bottom') {
                // Bottom defaults to fill when undefined: remove explicit false
                if (btn.fill_width === false) {
                  const { fill_width, ...rest } = btn;
                  groupButtons[i] = { ...rest };
                }
              } else {
                // Top does not default to fill: explicitly enable fill_width
                if (btn.fill_width !== true) {
                  groupButtons[i] = { ...btn, fill_width: true };
                }
              }
            }
            next.group = groupButtons;
          }
        } else {
          // If any sub-button explicitly forces fill_width, ignore alignment change and keep UI locked to 'fill'
          if (hasExplicitFill) {
            // No-op: do not update justify_content; UI will recompute to 'fill' and be disabled
          } else {
            next.justify_content = requested;
            // Switching to a non-fill alignment disables fill width on all buttons in the group
            if (Array.isArray(groupButtons)) {
              for (let i = 0; i < groupButtons.length; i += 1) {
                const btn = groupButtons[i];
                if (!btn) continue;
                if (btn.fill_width !== false) {
                  groupButtons[i] = { ...btn, fill_width: false };
                }
              }
              next.group = groupButtons;
            }
          }
        }
      }
      return next;
    }, subButtonsValueChanged);
  };

  const groupToCopy = targetArr[groupIndex];
  const removeGroup = createRemoveHandler(editor, targetArr, groupIndex, subButtonsValueChanged);
  const moveGroup = createMoveHandler(editor, targetArr, groupIndex, subButtonsValueChanged);
  const copyGroup = createCopyHandler(editor, groupToCopy, saveSubButtonClipboard);
  const cutGroup = createCutHandler(editor, groupToCopy, removeGroup, saveSubButtonClipboard);
  
  const pasteGroupButton = createGroupButtonPasteHandler(editor, targetArr, groupIndex, subButtonsValueChanged, loadSubButtonClipboard);

  const canMoveUp = groupIndex > 0;
  const canMoveDown = groupIndex < targetArr.length - 1;

  return html`
    <ha-expansion-panel 
      outlined
      style="border-style: dashed;"
      @expanded-changed=${(e) => {
        editor._expandedPanelStates[panelKey] = e.target.expanded;
        editor.requestUpdate();
      }}
    >
      <h4 slot="header">
        <ha-icon icon="mdi:format-list-group"></ha-icon>
        ${group.name || `Group ${groupIndex + 1}`}
        <div class="button-container" @click=${(e) => e.stopPropagation()} @mousedown=${(e) => e.stopPropagation()} @touchstart=${(e) => e.stopPropagation()}>
          <ha-button-menu corner="BOTTOM_START" menuCorner="START" fixed @closed=${(e) => e.stopPropagation()} @click=${(e) => e.stopPropagation()}>
            <mwc-icon-button slot="trigger" class="icon-button header" title="Options">
              <ha-icon style="display: flex" icon="mdi:dots-vertical"></ha-icon>
            </mwc-icon-button>
            <mwc-list-item graphic="icon" ?disabled=${!canMoveUp} @click=${(e) => { e.stopPropagation(); if (canMoveUp) moveGroup(-1); }}>
              <ha-icon icon="mdi:arrow-up" slot="graphic"></ha-icon>
              Move up
            </mwc-list-item>
            <mwc-list-item graphic="icon" ?disabled=${!canMoveDown} @click=${(e) => { e.stopPropagation(); if (canMoveDown) moveGroup(1); }}>
              <ha-icon icon="mdi:arrow-down" slot="graphic"></ha-icon>
              Move down
            </mwc-list-item>
            <li divider role="separator"></li>
            <mwc-list-item graphic="icon" @click=${(e) => { e.stopPropagation(); copyGroup(e); }}>
              <ha-icon icon="mdi:content-copy" slot="graphic"></ha-icon>
              Copy group
            </mwc-list-item>
            <mwc-list-item graphic="icon" @click=${(e) => { e.stopPropagation(); cutGroup(e); }}>
              <ha-icon icon="mdi:content-cut" slot="graphic"></ha-icon>
              Cut group
            </mwc-list-item>
            <li divider role="separator"></li>
            <mwc-list-item graphic="icon" class="warning" @click=${(e) => { e.stopPropagation(); removeGroup(e); }}>
              <ha-icon icon="mdi:delete" slot="graphic"></ha-icon>
              Delete
            </mwc-list-item>
          </ha-button-menu>
        </div>
      </h4>
      <div class="content">
        ${getLazyLoadedPanelContent(editor, panelKey, !!editor._expandedPanelStates[panelKey], () => html`
          <ha-form
            .hass=${editor.hass}
            .data=${{ name: group.name ?? '' }}
            .schema=${[
              { name: 'name', label: 'Group name', selector: { text: {} } }
            ]}
            .computeLabel=${editor._computeLabelCallback}
            @value-changed=${(ev) => updateGroupValues(ev.detail.value)}
          ></ha-form>

          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:view-grid"></ha-icon>
              Group layout
            </h4>
            <div class="content">
              <ha-form
                .hass=${editor.hass}
                .data=${(() => {
                  const groupButtons = Array.isArray(group.group) ? group.group : [];
                  const hasExplicitFill = groupButtons.some((b) => b && b.fill_width === true);
                  const computedAlignment = hasExplicitFill ? 'fill' : (group.justify_content ?? 'fill');
                  return { buttons_layout: group.buttons_layout ?? 'inline', justify_content: computedAlignment };
                })()}
                .schema=${(() => {
                  const groupButtons = Array.isArray(group.group) ? group.group : [];
                  const hasExplicitFill = groupButtons.some((b) => b && b.fill_width === true);
                  let justifyContentOptions = [
                    { value: 'fill', label: 'Fill available width (default)' },
                    { value: 'end', label: 'Right' },
                    { value: 'start', label: 'Left' },
                    { value: 'center', label: 'Center' },
                    { value: 'space-between', label: 'Space between' },
                    { value: 'space-around', label: 'Space around' },
                    { value: 'space-evenly', label: 'Space evenly' }
                  ];

                  if (group.buttons_layout === 'column') {
                    justifyContentOptions = justifyContentOptions.filter(option =>
                      !['space-between', 'space-around', 'space-evenly'].includes(option.value)
                    );
                  }

                  const schema = [
                    {
                      name: 'buttons_layout',
                      label: 'Buttons layout',
                      selector: {
                        select: {
                          options: [
                            { value: 'inline', label: 'Inline' },
                            { value: 'column', label: 'Column' },
                          ],
                          mode: 'dropdown'
                        }
                      }
                    }
                  ];

                  // Show alignment selector only for bottom section groups
                  if (sectionKey === 'bottom') {
                    schema.push({
                      name: 'justify_content',
                      label: 'Button alignment',
                      selector: {
                        select: {
                          options: justifyContentOptions,
                          mode: 'dropdown'
                        }
                      },
                      disabled: hasExplicitFill
                    });
                  }

                  return schema;
                })()}
                .computeLabel=${editor._computeLabelCallback}
                @value-changed=${(ev) => updateGroupValues(ev.detail.value)}
              ></ha-form>
              ${(() => {
                if (sectionKey !== 'bottom') return '';
                const groupButtons = Array.isArray(group.group) ? group.group : [];
                const hasExplicitFill = groupButtons.some((b) => b && b.fill_width === true);
                return hasExplicitFill ? html`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      Button alignment locked by sub-button settings
                    </h4>
                    <div class="content">
                      <p>One or more sub-buttons explicitly enable "Fill available width". To change alignment, first disable "Fill available width" in those sub-buttons.</p>
                    </div>
                  </div>
                ` : '';
              })()}
            </div>
          </ha-expansion-panel>

          <h4 class="group-buttons-header">Group sub-buttons</h4>
          ${Array.isArray(group.group) ? group.group.map((button, buttonIndex) => {
            if (!button) return null;

            const updateButton = (values) => {
              updateGroupInSection(editor, sectionKey, groupIndex, (group) => {
                const groupCopy = { ...group };
                const nextButtons = Array.isArray(groupCopy.group) ? [...groupCopy.group] : [];
                nextButtons[buttonIndex] = { ...(nextButtons[buttonIndex] || {}), ...values };
                groupCopy.group = nextButtons;
                return groupCopy;
              }, subButtonsValueChanged);
            };

            const removeButton = (event) => {
              event?.stopPropagation();
              updateGroupInSection(editor, sectionKey, groupIndex, (group) => {
                const groupCopy = { ...group };
                const nextButtons = Array.isArray(groupCopy.group) ? [...groupCopy.group] : [];
                nextButtons.splice(buttonIndex, 1);
                groupCopy.group = nextButtons;
                return groupCopy;
              }, subButtonsValueChanged);
            };

            const moveButton = (direction) => {
              const targetIndex = buttonIndex + direction;
              const targetArr = getOrInitSectionArray(editor, sectionKey);
              const buttons = Array.isArray(targetArr[groupIndex]?.group) ? targetArr[groupIndex].group : [];
              if (targetIndex < 0 || targetIndex >= buttons.length) return;
              updateGroupInSection(editor, sectionKey, groupIndex, (group) => {
                const groupCopy = { ...group };
                const buttonsCopy = Array.isArray(groupCopy.group) ? [...groupCopy.group] : [];
                [buttonsCopy[buttonIndex], buttonsCopy[targetIndex]] = [buttonsCopy[targetIndex], buttonsCopy[buttonIndex]];
                groupCopy.group = buttonsCopy;
                return groupCopy;
              }, subButtonsValueChanged);
            };

            const btnToCopy = Array.isArray(group.group) ? group.group[buttonIndex] : null;
            const copyButton = createCopyHandler(editor, btnToCopy, saveSubButtonClipboard);
            const cutButton = createCutHandler(editor, btnToCopy, removeButton, saveSubButtonClipboard);

            const buttons = Array.isArray(group.group) ? group.group : [];
            const buttonsLength = buttons.length;

            return makeUnifiedSubButtonEditor(
              editor,
              button,
              buttonIndex,
              `sub_button.${sectionKey}.${groupIndex}.group`,
              updateButton,
              removeButton,
              moveButton,
              copyButton,
              cutButton,
              { panelKeyPrefix: `${sectionKey}_group_${groupIndex}_button`, buttonTitle: button.name || `Button ${buttonIndex + 1}`, arrayLength: buttonsLength }
            );
          }) : null}

          <div class="element-actions">
            <button class="icon-button paste-button no-bg ${!(editor._clipboardButton || loadSubButtonClipboard()) ? 'disabled' : ''}" @click=${pasteGroupButton}>
              <ha-icon icon="mdi:content-paste"></ha-icon>
              <span class="paste-button-text">
                ${getPasteButtonText(editor, loadSubButtonClipboard)}
              </span>
            </button>
            <button class="icon-button" @click=${() => {
              const newButton = { entity: editor._config.entity };
              updateGroupInSection(editor, sectionKey, groupIndex, (group) => {
                const groupCopy = { ...group };
                if (!Array.isArray(groupCopy.group)) groupCopy.group = [];
                groupCopy.group = [...groupCopy.group, newButton];
                return groupCopy;
              }, subButtonsValueChanged);
            }}>
              <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
              Add sub-button
            </button>
          </div>
        `)}
      </div>
    </ha-expansion-panel>
  `;
}

function makeSectionList(editor, sectionKey) {
  const sectionedView = ensureNewSubButtonsSchemaObject(editor._config);
  const items = Array.isArray(sectionedView?.[sectionKey]) ? sectionedView[sectionKey] : [];

  const addButton = () => {
    updateSectionArray(editor, sectionKey, (arr) => [...arr, { entity: editor._config.entity }], subButtonsValueChanged);
  };

  const addGroup = () => {
    updateSectionArray(editor, sectionKey, (arr) => {
      const arrCopy = [...arr];
      arrCopy.push({ name: `Group ${(arrCopy.filter(i => i && Array.isArray(i.group)).length + 1)}`, buttons_layout: 'inline', group: [] });
      return arrCopy;
    }, subButtonsValueChanged);
  };

  return html`
    ${items.map((item, index) => {
      if (!item) return null;
      // Group
      if (Array.isArray(item.group)) {
        return makeGroupEditor(editor, item, index, sectionKey);
      }

      // Single button
      const panelKey = `${sectionKey}_button_${index}`;
      const targetArr = sectionKey === 'main' ? editor._config.sub_button.main : editor._config.sub_button.bottom;
      
      const updateButton = (values) => {
        updateSectionArray(editor, sectionKey, (arr) => {
          const arrCopy = [...arr];
          arrCopy[index] = { ...(arrCopy[index] || {}), ...values };
          return arrCopy;
        }, subButtonsValueChanged);
      };
      const removeButton = createRemoveHandler(editor, targetArr, index, subButtonsValueChanged);
      const moveButton = createMoveHandler(editor, targetArr, index, subButtonsValueChanged);
      const buttonToCopy = targetArr[index];
      const copyButton = createCopyHandler(editor, buttonToCopy, saveSubButtonClipboard);
      const cutButton = createCutHandler(editor, buttonToCopy, removeButton, saveSubButtonClipboard);
      const targetArrLength = targetArr.length;
      return makeUnifiedSubButtonEditor(
        editor,
        item,
        index,
        `sub_button.${sectionKey}`,
        updateButton,
        removeButton,
        moveButton,
        copyButton,
        cutButton,
        { panelKeyPrefix: `${sectionKey}_button`, buttonTitle: `Button ${index + 1}${item.name ? ` - ${item.name}` : ''}`, arrayLength: targetArrLength }
      );
    })}

    <div class="element-actions">
      ${(() => {
        const targetArr = sectionKey === 'main' ? getOrInitSectionArray(editor, 'main') : getOrInitSectionArray(editor, 'bottom');
        const pasteSection = createPasteHandler(editor, targetArr, subButtonsValueChanged, loadSubButtonClipboard);
        return html`
          <button class="icon-button paste-button no-bg ${!(editor._clipboardButton || loadSubButtonClipboard()) ? 'disabled' : ''}" @click=${pasteSection}>
            <ha-icon icon="mdi:content-paste"></ha-icon>
            <span class="paste-button-text">
              ${getPasteButtonText(editor, loadSubButtonClipboard)}
            </span>
          </button>
        `;
      })()}
      <ha-button-menu corner="BOTTOM_START" menuCorner="START" fixed @closed=${(e) => e.stopPropagation()} @click=${(e) => e.stopPropagation()}>
        <button slot="trigger" class="icon-button add-menu-trigger">
          <ha-icon icon="mdi:plus"></ha-icon>
          Add
        </button>
        <mwc-list-item graphic="icon" @click=${() => { addButton(); }}>
          <ha-icon icon="mdi:shape-square-rounded-plus" slot="graphic"></ha-icon>
          Add sub-button
        </mwc-list-item>
        <mwc-list-item graphic="icon" @click=${() => { addGroup(); }}>
          <ha-icon icon="mdi:format-list-group-plus" slot="graphic"></ha-icon>
          Add group
        </mwc-list-item>
      </ha-button-menu>
    </div>
  `;
}

function makeLayoutForm(editor, sectionKey) {
  const layoutKey = `${sectionKey}_layout`;
  const layoutValue = editor._config?.sub_button?.[layoutKey] ?? 'inline';
  
  return html`
    <ha-form
      .hass=${editor.hass}
      .data=${{ [layoutKey]: layoutValue }}
      .schema=${[
        {
          name: layoutKey,
          label: 'Groups placement',
          selector: {
            select: {
              options: [
                { value: 'inline', label: 'Inline' },
                { value: 'rows', label: 'Rows (stack groups vertically)' }
              ],
              mode: 'dropdown'
            }
          }
        }
      ]}
      .computeLabel=${editor._computeLabelCallback}
      @value-changed=${(ev) => {
        const val = ev.detail?.value?.[layoutKey];
        if (!editor._config.sub_button) {
          try {
            editor._config.sub_button = {};
          } catch (_) {
            editor._config = { ...editor._config, sub_button: {} };
          }
        }
        // Clone sub_button object to ensure it is extensible
        try {
          editor._config.sub_button[layoutKey] = val;
        } catch (_) {
          // If sub_button is frozen, clone it
          try {
            editor._config.sub_button = { ...editor._config.sub_button, [layoutKey]: val };
          } catch (__) {
            // If config itself is frozen, clone the entire config
            editor._config = { ...editor._config, sub_button: { ...editor._config.sub_button, [layoutKey]: val } };
          }
        }
        subButtonsValueChanged(editor);
        editor.requestUpdate();
      }}
    ></ha-form>
  `;
}

function makeInfoSection() {
  return html`
    <div class="bubble-info">
      <h4 class="bubble-section-title">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        Sub-buttons
      </h4>
      <div class="content">
        <p>This editor allows you to add customized sub-buttons to your card. Sub-buttons support three types:</p>
        <ul class="icon-list">
          <li><ha-icon icon="mdi:gesture-tap"></ha-icon><p><b>Default (button)</b> - Standard button with tap actions</p></li>
          <li><ha-icon icon="mdi:tune-variant"></ha-icon><p><b>Slider</b> - Control or display numeric values (brightness, volume, temperature, etc.)</p></li>
          <li><ha-icon icon="mdi:form-dropdown"></ha-icon><p><b>Dropdown / Select</b> - Dropdown menu for selectable entities</p></li>
        </ul>
        <p>Use <b>Slider</b> sub-buttons to control light brightness, media player volume, or climate temperature. Use <b>Dropdown</b> sub-buttons to select media sources, HVAC modes, or light effects. Use <b>Default</b> buttons for simple on/off controls or custom actions.</p>
        <p>You can organize sub-buttons individually or group them together. Groups can be arranged inline (side by side) or in rows (stacked vertically), and buttons within groups can be displayed inline or in a column layout.</p>
      </div>
    </div>
  `;
}

export function makeSectionedSubButtonsPanel(editor) {
  // Migrate old config format to new schema format if needed
  // This ensures that editor._config.sub_button is always in the new format
  // before any update functions try to access .main or .bottom properties
  if (Array.isArray(editor._config.sub_button)) {
    const converted = convertOldToNewSubButtons(editor._config.sub_button);
    try {
      editor._config.sub_button = converted;
    } catch (_) {
      // If config is frozen/non-extensible, replace it with a cloned one
      editor._config = { ...editor._config, sub_button: converted };
    }
  } else if (!editor._config.sub_button || !isNewSubButtonsSchema(editor._config.sub_button)) {
    // Ensure sub_button exists and is in the new format
    const sectionedView = ensureNewSubButtonsSchemaObject(editor._config);
    try {
      editor._config.sub_button = sectionedView;
    } catch (_) {
      editor._config = { ...editor._config, sub_button: sectionedView };
    }
  }

  // Ensure we operate on the new schema
  const sectionedView = ensureNewSubButtonsSchemaObject(editor._config);

  if (typeof editor._expandedPanelStates === 'undefined') {
    editor._expandedPanelStates = {};
  }
  if (typeof editor._clipboardButton === 'undefined' || editor._clipboardButton === null) {
    editor._clipboardButton = loadSubButtonClipboard() || null;
  }

  const isSubButtonsCard = editor._config.card_type === 'sub-buttons';
  const isPopUpCard = editor._config.card_type === 'pop-up';
  const cardTypesWithMainButtons = ['cover', 'media-player', 'climate'];
  const hasMainButtons = cardTypesWithMainButtons.includes(editor._config.card_type);
  const mainButtonsPosition = editor._config.main_buttons_position || 'default';
  const mainButtonsAlignment = editor._config.main_buttons_alignment || 'end';
  const isMainButtonsBottom = mainButtonsPosition === 'bottom';
  const mainButtonsFullWidth = editor._config.main_buttons_full_width ?? (isMainButtonsBottom ? true : false);
  const isSectionView = Boolean(window.isSectionView);
  const isLargeConfigured = (editor._config.card_layout || '').includes('large');
  const hasCardLayoutExplicitlyDefined = Object.prototype.hasOwnProperty.call(editor._config, 'card_layout');
  const isNormalLayoutExplicitlySet = hasCardLayoutExplicitlyDefined && editor._config.card_layout === 'normal';
  const hasBottomConfigured = Array.isArray(sectionedView.bottom) && sectionedView.bottom.some(item => !!item);
  const hasRowsDefined = editor._config.rows !== undefined && editor._config.rows !== null && editor._config.rows !== '';
  const hasGridRowsDefined = editor._config.grid_options?.rows !== undefined && editor._config.grid_options?.rows !== null && editor._config.grid_options?.rows !== '';
  // Show warning only if rows are manually set (not auto-calculated)
  // grid_options.rows always blocks auto-calculation, so always show warning
  // rows blocks auto-calculation only if _rowsAutoMode is false (user-managed)
  const isRowsManuallySet = hasRowsDefined && editor._rowsAutoMode === false;
  const shouldShowRowsWarning = hasGridRowsDefined || isRowsManuallySet;

  return html`
    <ha-expansion-panel outlined>
      <h4 slot="header">
        <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
        Sub-buttons editor
      </h4>
      <div class="content">
        ${shouldShowRowsWarning ? html`
          <div class="bubble-info warning">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:alert-outline"></ha-icon>
              Rows configuration detected
            </h4>
            <div class="content">
              <p>The card height (rows) is explicitly set in your configuration. This will prevent automatic row adjustments when sub-buttons are added (for example, when adding bottom sub-buttons). To enable automatic row calculation, remove the <code>rows</code> or <code>grid_options.rows</code> setting from the editor or from your YAML configuration.</p>
            </div>
          </div>
        ` : ''}
        ${hasMainButtons ? html`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:circle-outline"></ha-icon>
              Card specific buttons
            </h4>
            <div class="content">
              <ha-combo-box
                  label="Main buttons position"
                  .value="${mainButtonsPosition}"
                  .configValue="${"main_buttons_position"}"
                  .items="${[
                      { label: 'Default', value: 'default' },
                      { label: 'Bottom (fixed)', value: 'bottom' }
                  ]}"
                  @value-changed="${editor._valueChanged}"
              ></ha-combo-box>
              ${editor._renderConditionalContent(isMainButtonsBottom, html`
                  <ha-formfield .label="Full width action buttons">
                      <ha-switch
                          aria-label="Full width action buttons"
                          .checked="${mainButtonsFullWidth}"
                          .configValue="${"main_buttons_full_width"}"
                          @change="${editor._valueChanged}"
                      ></ha-switch>
                      <div class="mdc-form-field">
                          <label class="mdc-label">Full width action buttons</label> 
                      </div>
                  </ha-formfield>
                  ${editor._renderConditionalContent(!mainButtonsFullWidth, html`
                      <ha-combo-box
                          label="Main buttons alignment"
                          .value="${mainButtonsAlignment}"
                          .configValue="${"main_buttons_alignment"}"
                          .items="${[
                              { label: 'Right (default)', value: 'end' },
                              { label: 'Center', value: 'center' },
                              { label: 'Left', value: 'start' },
                              { label: 'Space between', value: 'space-between' }
                          ]}"
                          @value-changed="${editor._valueChanged}"
                      ></ha-combo-box>
                  `)}
              `)}
            </div>
          </ha-expansion-panel>
        ` : ''}
        
        ${isPopUpCard ? html`
          ${makeLayoutForm(editor, 'main')}
          ${makeSectionList(editor, 'main')}
        ` : !isSubButtonsCard ? html`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
              Main sub-buttons (top)
            </h4>
            <div class="content">
              ${makeLayoutForm(editor, 'main')}
              ${makeSectionList(editor, 'main')}
            </div>
          </ha-expansion-panel>
        ` : ''}

        ${isSubButtonsCard ? html`
          ${makeLayoutForm(editor, 'bottom')}
          ${makeSectionList(editor, 'bottom')}
        ` : !isPopUpCard ? html`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:arrow-down-circle-outline"></ha-icon>
              Bottom sub-buttons
            </h4>
            <div class="content">
              ${makeLayoutForm(editor, 'bottom')}
              ${editor._renderConditionalContent(!isLargeConfigured && !hasBottomConfigured && (isNormalLayoutExplicitlySet || (!isSectionView && !hasCardLayoutExplicitlyDefined)), html`
                <div class="bubble-info warning">
                  <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    Bottom sub-buttons and layout
                  </h4>
                  <div class="content">
                    <p>Adding bottom sub-buttons will automatically switch this card to the "Large" layout (this is the new recommended layout). This notice will disappear once you add bottom sub-buttons.</p>
                  </div>
                </div>
              `)}
              ${makeSectionList(editor, 'bottom')}
            </div>
          </ha-expansion-panel>
        ` : ''}

        ${makeInfoSection()}
      </div>
    </ha-expansion-panel>
  `;
}



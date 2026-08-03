import { html } from 'lit';
import { getLazyLoadedPanelContent, renderDropdown, tTemplate } from '../../../editor/utils.js';
import setupTranslation from '../../../tools/localize.js';
import { 
  makeUnifiedSubButtonEditor, 
  createCopyHandler, 
  createCutHandler, 
  createRemoveHandler, 
  createMoveHandler, 
  createPasteHandler,
  createGroupButtonPasteHandler,
  getPasteButtonText,
  convertIndividualButtonsToGroup
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

// What an emptied sub-button list must leave in the config. Climate cards seed
// a default HVAC modes menu when they have no sub_button key at all, so they
// keep an explicit empty list: without it, emptying the list looks exactly like
// a brand new card and the menu comes back on every edit (#2176, #2456).
// Other card types keep dropping the key entirely.
export function getEmptySubButtonValue(cardType) {
  return cardType === 'climate' ? { main: [] } : undefined;
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
    const emptyValue = getEmptySubButtonValue(editor._config.card_type);
    try {
      if (emptyValue) editor._config.sub_button = emptyValue;
      else delete editor._config.sub_button;
    } catch (_) {
      editor._config = { ...editor._config };
      if (emptyValue) editor._config.sub_button = emptyValue;
      else delete editor._config.sub_button;
    }
    editor._valueChanged({ target: { configValue: 'sub_button', value: emptyValue } });
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
  const t = setupTranslation(editor.hass);
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
      // Only process justify_content for bottom section (selector is not shown for main)
      if (sectionKey === 'bottom' && Object.prototype.hasOwnProperty.call(values, 'justify_content')) {
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
        ${group.name || t('editor.sub_button.group_n').replace('{n}', groupIndex + 1)}
        <div class="button-container" @click=${(e) => e.stopPropagation()} @mousedown=${(e) => e.stopPropagation()} @touchstart=${(e) => e.stopPropagation()}>
          ${renderDropdown({
            trigger: html`
              <mwc-icon-button slot="trigger" class="icon-button header" title="${t('editor.common.options')}">
                <ha-icon style="display: flex" icon="mdi:dots-vertical"></ha-icon>
              </mwc-icon-button>
            `,
            items: [
              { 
                type: 'item',
                icon: 'mdi:arrow-up',
                label: t('editor.common.move_up'),
                disabled: !canMoveUp,
                onClick: (e) => { e.stopPropagation(); if (canMoveUp) moveGroup(-1); }
              },
              { 
                type: 'item',
                icon: 'mdi:arrow-down',
                label: t('editor.common.move_down'),
                disabled: !canMoveDown,
                onClick: (e) => { e.stopPropagation(); if (canMoveDown) moveGroup(1); }
              },
              { type: 'divider' },
              { 
                type: 'item',
                icon: 'mdi:content-copy',
                label: t('editor.sub_button.copy_group'),
                onClick: (e) => { e.stopPropagation(); copyGroup(e); }
              },
              { 
                type: 'item',
                icon: 'mdi:content-cut',
                label: t('editor.sub_button.cut_group'),
                onClick: (e) => { e.stopPropagation(); cutGroup(e); }
              },
              { type: 'divider' },
              { 
                type: 'item',
                icon: 'mdi:delete',
                label: t('editor.common.delete'),
                variant: 'danger',
                onClick: (e) => { e.stopPropagation(); removeGroup(e); }
              }
            ]
          })}
        </div>
      </h4>
      <div class="content">
        ${getLazyLoadedPanelContent(editor, panelKey, !!editor._expandedPanelStates[panelKey], () => html`
          <ha-form
            .hass=${editor.hass}
            .data=${{ name: group.name ?? '' }}
            .schema=${[
              { name: 'name', label: t('editor.sub_button.group_name'), selector: { text: {} } }
            ]}
            .computeLabel=${editor._computeLabelCallback}
            @value-changed=${(ev) => updateGroupValues(ev.detail.value)}
          ></ha-form>

          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:view-grid"></ha-icon>
              ${t('editor.sub_button.group_layout')}
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
                    { value: 'fill', label: t('editor.sub_button.fill_width') + t('editor.common.default_suffix') },
                    { value: 'end', label: t('editor.common.right') },
                    { value: 'start', label: t('editor.common.left') },
                    { value: 'center', label: t('editor.common.center') },
                    { value: 'space-between', label: t('editor.sub_button.space_between') },
                    { value: 'space-around', label: t('editor.sub_button.space_around') },
                    { value: 'space-evenly', label: t('editor.sub_button.space_evenly') }
                  ];

                  if (group.buttons_layout === 'column') {
                    justifyContentOptions = justifyContentOptions.filter(option =>
                      !['space-between', 'space-around', 'space-evenly'].includes(option.value)
                    );
                  }

                  const schema = [
                    {
                      name: 'buttons_layout',
                      label: t('editor.sub_button.buttons_layout'),
                      selector: {
                        select: {
                          options: [
                            { value: 'inline', label: t('editor.common.inline') },
                            { value: 'column', label: t('editor.sub_button.column') },
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
                      label: t('editor.sub_button.buttons_alignment'),
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
                      ${t('editor.sub_button.alignment_locked_title')}
                    </h4>
                    <div class="content">
                      <p>${t('editor.sub_button.alignment_locked_body')}</p>
                    </div>
                  </div>
                ` : '';
              })()}
            </div>
          </ha-expansion-panel>

          <h4 class="group-buttons-header">${t('editor.sub_button.group_sub_buttons')}</h4>
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
              { panelKeyPrefix: `${sectionKey}_group_${groupIndex}_button`, buttonTitle: button.name || t('editor.sub_button.button_n').replace('{n}', buttonIndex + 1), arrayLength: buttonsLength }
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
              updateGroupInSection(editor, sectionKey, groupIndex, (group) => {
                const groupCopy = { ...group };
                if (!Array.isArray(groupCopy.group)) groupCopy.group = [];
                // If group has a non-fill alignment in bottom section, new button should have fill_width: false
                const hasNonFillAlignment = sectionKey === 'bottom' && groupCopy.justify_content && groupCopy.justify_content !== 'fill';
                const newButton = hasNonFillAlignment
                  ? { entity: editor._config.entity, fill_width: false }
                  : { entity: editor._config.entity };
                groupCopy.group = [...groupCopy.group, newButton];
                return groupCopy;
              }, subButtonsValueChanged);
            }}>
              <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
              ${t('editor.sub_button.add_sub_button')}
            </button>
          </div>
        `)}
      </div>
    </ha-expansion-panel>
  `;
}

// Helper to check section state
function getSectionState(editor, sectionKey) {
  const sectionedView = ensureNewSubButtonsSchemaObject(editor._config);
  const items = Array.isArray(sectionedView?.[sectionKey]) ? sectionedView[sectionKey] : [];
  return {
    items,
    hasGroups: items.some(item => item && Array.isArray(item.group)),
    hasIndividualButtons: items.some(item => item && !Array.isArray(item.group))
  };
}

// Initialize and get dismiss state for groups info
function getGroupsInfoDismissState(editor, sectionKey) {
  const dismissKey = `bubble-card-groups-info-dismissed-${sectionKey}`;
  if (!editor._groupsInfoDismissed) editor._groupsInfoDismissed = {};
  if (editor._groupsInfoDismissed[sectionKey] === undefined) {
    try { editor._groupsInfoDismissed[sectionKey] = localStorage.getItem(dismissKey) === 'true'; } 
    catch (_) { editor._groupsInfoDismissed[sectionKey] = false; }
  }
  return {
    isDismissed: editor._groupsInfoDismissed[sectionKey],
    dismiss: () => {
      editor._groupsInfoDismissed[sectionKey] = true;
      try { localStorage.setItem(dismissKey, 'true'); } catch (_) {}
      editor.requestUpdate();
    }
  };
}

function makeSectionList(editor, sectionKey) {
  const t = setupTranslation(editor.hass);
  let { items, hasGroups, hasIndividualButtons } = getSectionState(editor, sectionKey);
  
  // Auto-migrate mixed configurations on editor load
  if (hasGroups && hasIndividualButtons) {
    items = convertIndividualButtonsToGroup(items, t);
    updateSectionArray(editor, sectionKey, () => items, subButtonsValueChanged);
  }
  
  const { isDismissed, dismiss } = getGroupsInfoDismissState(editor, sectionKey);

  const addButton = () => {
    updateSectionArray(editor, sectionKey, (arr) => [...arr, { entity: editor._config.entity }], subButtonsValueChanged);
  };

  const addGroup = () => {
    updateSectionArray(editor, sectionKey, (arr) => {
      const converted = convertIndividualButtonsToGroup(arr, t);
      const groupCount = converted.filter(i => i && Array.isArray(i.group)).length;
      return [...converted, { name: t('editor.sub_button.group_n').replace('{n}', groupCount + 1), buttons_layout: 'inline', group: [] }];
    }, subButtonsValueChanged);
  };

  return html`
    ${hasGroups && !isDismissed ? html`
      <div class="bubble-info">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${t('editor.sub_button.groups_mode_title')}
          <div class="bubble-info-dismiss bubble-badge" @click=${dismiss} title="${t('editor.common.dismiss')}"
            style="display: inline-flex; align-items: center; position: absolute; right: 16px; padding: 0 8px; cursor: pointer;">
            <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
            ${t('editor.common.dismiss')}
          </div>
        </h4>
        <div class="content">
          <p>${tTemplate(t('editor.sub_button.groups_mode_body'), { mode_bold: html`<b>${t('editor.sub_button.groups_mode_bold')}</b>` })}</p>
        </div>
      </div>
    ` : ''}
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
        { panelKeyPrefix: `${sectionKey}_button`, buttonTitle: `${t('editor.sub_button.button_n').replace('{n}', index + 1)}${item.name ? ` - ${item.name}` : ''}`, arrayLength: targetArrLength }
      );
    })}

    <div class="element-actions">
      ${(() => {
        // The section array is created when the user pastes, not while
        // rendering: rendering must leave the config alone (#2176, #2456)
        const pasteSection = () => {
          const targetArr = getOrInitSectionArray(editor, sectionKey);
          createPasteHandler(editor, targetArr, subButtonsValueChanged, loadSubButtonClipboard)();
        };
        return html`
          <button class="icon-button paste-button no-bg ${!(editor._clipboardButton || loadSubButtonClipboard()) ? 'disabled' : ''}" @click=${pasteSection}>
            <ha-icon icon="mdi:content-paste"></ha-icon>
            <span class="paste-button-text">
              ${getPasteButtonText(editor, loadSubButtonClipboard)}
            </span>
          </button>
        `;
      })()}
      ${hasGroups ? html`
        <button class="icon-button" @click=${() => { addGroup(); }}>
          <ha-icon icon="mdi:format-list-group-plus"></ha-icon>
          ${t('editor.sub_button.add_group')}
        </button>
      ` : renderDropdown({
        trigger: html`
          <button slot="trigger" class="icon-button add-menu-trigger">
            <ha-icon icon="mdi:plus"></ha-icon>
            ${t('editor.common.add')}
          </button>
        `,
        items: [
          { 
            type: 'item',
            icon: 'mdi:shape-square-rounded-plus',
            label: t('editor.sub_button.add_sub_button'),
            onClick: () => { addButton(); }
          },
          { 
            type: 'item',
            icon: 'mdi:format-list-group-plus',
            label: t('editor.sub_button.add_group'),
            onClick: () => { addGroup(); }
          }
        ]
      })}
    </div>
  `;
}

function makeLayoutForm(editor, sectionKey) {
  if (!getSectionState(editor, sectionKey).hasGroups) return '';

  const t = setupTranslation(editor.hass);
  const layoutKey = `${sectionKey}_layout`;
  const layoutValue = editor._config?.sub_button?.[layoutKey] ?? 'inline';
  
  return html`
    <ha-form
      .hass=${editor.hass}
      .data=${{ [layoutKey]: layoutValue }}
      .schema=${[
        {
          name: layoutKey,
          label: t('editor.sub_button.groups_placement'),
          selector: {
            select: {
              options: [
                { value: 'inline', label: t('editor.common.inline') },
                { value: 'rows', label: t('editor.sub_button.rows_stack') }
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

function makeInfoSection(t) {
  return html`
    <div class="bubble-info">
      <h4 class="bubble-section-title">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        ${t('editor.sub_button.panel_title')}
      </h4>
      <div class="content">
        <p>${t('editor.sub_button.info_body')}</p>
        <ul class="icon-list">
          <li><ha-icon icon="mdi:gesture-tap"></ha-icon><p><b>${t('editor.sub_button.type_default')}</b> - ${t('editor.sub_button.desc_default')}</p></li>
          <li><ha-icon icon="mdi:tune-variant"></ha-icon><p><b>${t('editor.button.type_slider')}</b> - ${t('editor.sub_button.desc_slider')}</p></li>
          <li><ha-icon icon="mdi:form-dropdown"></ha-icon><p><b>${t('editor.sub_button.type_dropdown')}</b> - ${t('editor.sub_button.desc_dropdown')}</p></li>
        </ul>
        <p>${tTemplate(t('editor.sub_button.info_usage'), {
          slider: html`<b>${t('editor.button.type_slider')}</b>`,
          dropdown: html`<b>${t('editor.sub_button.type_dropdown')}</b>`,
          default: html`<b>${t('editor.sub_button.type_default')}</b>`
        })}</p>
        <p>${t('editor.sub_button.info_organize')}</p>
      </div>
    </div>
  `;
}

export function makeSectionedSubButtonsPanel(editor) {
  const t = setupTranslation(editor.hass);
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
  } else if (editor._config.sub_button && !isNewSubButtonsSchema(editor._config.sub_button)) {
    // Normalize an existing sub_button to the new format. A missing one is left
    // missing: writing an empty schema here would make every card look like it
    // once had sub-buttons, which is how the climate card lost its way to tell
    // a new card from a list emptied on purpose (#2176, #2456). Section arrays
    // are created on demand by getOrInitSectionArray when the user adds one.
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
        ${t('editor.sub_button.editor_title')}
      </h4>
      <div class="content">
        ${shouldShowRowsWarning ? html`
          <div class="bubble-info warning">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:alert-outline"></ha-icon>
              ${t('editor.sub_button.rows_detected_title')}
            </h4>
            <div class="content">
              <p>${t('editor.sub_button.rows_detected_body')}</p>
              <button class="icon-button" @click="${editor._removeRowsOverrideAndRecalculate}">
                <ha-icon icon="mdi:autorenew"></ha-icon>
                ${t('editor.sub_button.remove_override')}
              </button>
            </div>
          </div>
        ` : ''}
        ${hasMainButtons ? html`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:circle-outline"></ha-icon>
              ${t('editor.sub_button.card_specific')}
            </h4>
            <div class="content">
              <ha-form
                  .hass=${editor.hass}
                  .data=${{ main_buttons_position: mainButtonsPosition }}
                  .schema=${[{
                      name: 'main_buttons_position',
                      selector: {
                          select: {
                              options: [
                                  { label: t('editor.common.default'), value: 'default' },
                                  { label: t('editor.sub_button.bottom_fixed'), value: 'bottom' }
                              ],
                              mode: 'dropdown'
                          }
                      }
                  }]}
                  .computeLabel=${() => t('editor.sub_button.main_position')}
                  @value-changed=${(ev) => {
                      editor._valueChanged({
                          target: { configValue: 'main_buttons_position' },
                          detail: { value: ev.detail.value.main_buttons_position }
                      });
                  }}
              ></ha-form>
              ${editor._renderConditionalContent(isMainButtonsBottom, html`
                  <ha-formfield>
                      <ha-switch
                          aria-label="${t('editor.sub_button.full_width_actions')}"
                          .checked="${mainButtonsFullWidth}"
                          .configValue="${"main_buttons_full_width"}"
                          @change="${editor._valueChanged}"
                      ></ha-switch>
                      <div class="mdc-form-field">
                          <label class="mdc-label">${t('editor.sub_button.full_width_actions')}</label>
                      </div>
                  </ha-formfield>
                  ${editor._renderConditionalContent(!mainButtonsFullWidth, html`
                      <ha-form
                          .hass=${editor.hass}
                          .data=${{ main_buttons_alignment: mainButtonsAlignment }}
                          .schema=${[{
                              name: 'main_buttons_alignment',
                              selector: {
                                  select: {
                                      options: [
                                          { label: t('editor.common.right') + t('editor.common.default_suffix'), value: 'end' },
                                          { label: t('editor.common.center'), value: 'center' },
                                          { label: t('editor.common.left'), value: 'start' },
                                          { label: t('editor.sub_button.space_between'), value: 'space-between' }
                                      ],
                                      mode: 'dropdown'
                                  }
                              }
                          }]}
                          .computeLabel=${() => t('editor.sub_button.main_alignment')}
                          @value-changed=${(ev) => {
                              editor._valueChanged({
                                  target: { configValue: 'main_buttons_alignment' },
                                  detail: { value: ev.detail.value.main_buttons_alignment }
                              });
                          }}
                      ></ha-form>
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
              ${t('editor.sub_button.main_top')}
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
              ${t('editor.sub_button.bottom')}
            </h4>
            <div class="content">
              ${makeLayoutForm(editor, 'bottom')}
              ${editor._renderConditionalContent(!isLargeConfigured && !hasBottomConfigured && (isNormalLayoutExplicitlySet || (!isSectionView && !hasCardLayoutExplicitlyDefined)), html`
                <div class="bubble-info warning">
                  <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    ${t('editor.sub_button.bottom_layout_title')}
                  </h4>
                  <div class="content">
                    <p>${t('editor.sub_button.bottom_layout_body')}</p>
                  </div>
                </div>
              `)}
              ${makeSectionList(editor, 'bottom')}
            </div>
          </ha-expansion-panel>
        ` : ''}

        ${makeInfoSection(t)}
      </div>
    </ha-expansion-panel>
  `;
}



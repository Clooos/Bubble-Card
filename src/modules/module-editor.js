import { html } from 'lit';
import { fireEvent } from '../tools/utils.js';
import { yamlKeysMap, moduleSourceMap } from './registry.js';
import { extractModuleMetadata } from './parser.js';
import jsyaml from 'js-yaml';
import { 
  generateYamlExport, 
  generateGitHubExport, 
  copyToClipboard,
  downloadModuleAsYaml
} from './export.js';
import { ensureBCTProviderAvailable, writeModuleYaml, deleteModuleFile } from './bct-provider.js';
import { _isModuleInstalledViaYaml } from './store.js';
import { scrollToModuleForm } from './utils.js';
import { getEntitySuggestion } from './suggestions.js';
import { getEntitySuggestion as getNativeEntitySuggestion } from '../tools/entity-suggestion.js';
import { tTemplate } from '../editor/utils.js';
import setupTranslation from '../tools/localize.js';

const SUGGESTIONS_DOCS_URL =
  'https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions';

// Helper functions
function updateModuleInConfig(context, moduleId, oldId = null) {
  if (!context._config || !context._config.modules) return;
  
  // Create a new array to avoid extensibility issues
  let modules = [...context._config.modules];
  
  // Remove old ID if needed
  if (oldId && oldId !== moduleId) {
    modules = modules.filter(id => id !== oldId);
  }
  
  // Add new ID if not already present
  if (!modules.includes(moduleId)) {
    modules = [...modules, moduleId];
  }
  
  // Update the config with the new array
  context._config.modules = modules;
  
  // Save current ID for tracking
  context._previousModuleId = moduleId;
  
  // Ensure the config is properly updated in the editor
  fireEvent(context, "config-changed", { config: context._config });
}

function refreshStyles(context) {
  // Reset style cache
  context.lastEvaluatedStyles = "";
  context.stylesYAML = null;
  
  if (context.handleCustomStyles && context.card) {
    context.handleCustomStyles(context, context.card);
  }
  
  context.requestUpdate();
}

function broadcastModuleUpdate(moduleId, moduleData) {
  window.dispatchEvent(new CustomEvent('bubble-card-module-updated', {
    detail: { moduleId, moduleData }
  }));
}

function setHAEditorButtonsDisabled(disabled) {
  try {
    // Target only the primary action (Save) in the HA dialog footer.
    // Avoid brittle positional selectors that can hide dialog content
    // when Home Assistant changes header/action slots.
    const dialogRoot = document.querySelector("home-assistant")
      ?.shadowRoot?.querySelector("hui-dialog-edit-card")
      ?.shadowRoot;

    if (!dialogRoot) {
      return;
    }

    const saveButtons = dialogRoot.querySelectorAll("ha-dialog-footer [slot='primaryAction']");
    if (saveButtons.length > 0) {
      saveButtons.forEach((button) => {
        if ("disabled" in button) {
          button.disabled = disabled;
        }
      });
      return;
    }

    // Legacy fallback for older dialog structures.
    const legacyActionsContainer = dialogRoot.querySelector("ha-dialog > div:nth-child(4)");
    if (legacyActionsContainer) {
      legacyActionsContainer.style.display = disabled ? 'none' : '';
    }
  } catch (error) {
    //console.error("Error accessing HA editor save button:", error);
  }
}

// Reads the `suggestions:` editor. Returns the value to store on the module,
// plus what the panel has to show: `error` is the message js-yaml refused the
// text with, `invalid` means it parsed into something that is not a rule list.
// suggestions.js accepts a single mapping as well as a list, but a scalar would
// be iterated as one rule and silently produce nothing.
export function parseSuggestionRules(raw) {
  if (typeof raw !== 'string' || !raw.trim()) return { rules: undefined, error: null, invalid: false };

  let parsed;
  try {
    parsed = jsyaml.load(raw);
  } catch (error) {
    return { rules: undefined, error: error.message, invalid: false };
  }

  if (parsed === null || parsed === undefined) return { rules: undefined, error: null, invalid: false };
  if (typeof parsed !== 'object') return { rules: undefined, error: null, invalid: true };
  return { rules: parsed, error: null, invalid: false };
}

// Compiles the `suggestions_code:` body with the exact signature and sandbox
// compileCodeHook uses in suggestions.js, so a body that does not even parse is
// caught here instead of being swallowed by the picker. Returns the syntax error
// message, or null when the body compiles or is empty.
export function validateSuggestionsCode(source) {
  if (typeof source !== 'string' || !source.trim()) return null;
  try {
    Function('hass', 'entity', 'stateObj', 'helpers', 'module', source);
    return null;
  } catch (error) {
    return error.message;
  }
}

// ---------------------------------------------------------------------------
// The suggestions preview draws the suggested CARDS, in Home Assistant's own
// editor preview column.
//
// A suggestion is a card configuration, so the only honest way to show what a
// rule produces is to build it. There is no room for that inside the panel, and
// the column next to it is showing the one card the author is not editing right
// now, so the panel borrows it behind a toggle.
//
// `div.element-preview` belongs to Home Assistant: its children are HIDDEN and
// put back, never removed. The dialog keeps that element for as long as it is
// open and its own Lit template owns those nodes, so a column this panel took
// over once has to come back untouched, whatever path the author leaves by.
// ---------------------------------------------------------------------------

// The mount lives in the dialog's shadow root, where none of Bubble Card's
// stylesheets reach, so everything it needs is inline. Home Assistant's own
// `hui-card` rule in that shadow root applies to the cards built here too,
// which is why they need no sizing of their own.
const PREVIEW_MOUNT_STYLE = 'display:block';

const PREVIEW_LABEL_STYLE = [
  'padding:8px 4px 0',
  'color:var(--ha-color-text-secondary,var(--secondary-text-color))',
  'font-family:var(--ha-font-family-body,inherit)',
  'font-size:var(--ha-font-size-s,12px)',
  'font-weight:var(--ha-font-weight-medium,500)',
  'overflow:hidden',
  'text-overflow:ellipsis',
  'white-space:nowrap',
].join(';');

const PREVIEW_EMPTY_STYLE = [
  'padding:24px 8px',
  'color:var(--ha-color-text-secondary,var(--secondary-text-color))',
  'font-family:var(--ha-font-family-body,inherit)',
  'font-size:var(--ha-font-size-m,14px)',
  'text-align:center',
].join(';');

// Built the way Home Assistant builds the previews of its own picker, and for
// the same reasons: `hui-card` is what resolves `custom:bubble-card`, forwards
// `preview` (and the `editMode` alias behind it) and re-renders the element
// when it is handed a new hass.
//
// These are NOT picker previews though, and nothing here pretends they are.
// isSuggestionPickerPreview walks for a `hui-suggestion*` host, finds
// `div.element-preview` inside hui-dialog-edit-card instead, and answers false,
// which is the right answer three times over. The hydration gate of
// lazy-preview.js exists because the picker attaches every suggestion of every
// provider in one pass and re-renders all of them on every state change; here
// one module's entries are built, bounded by its own quota, only while the
// toggle is on, and only when the author edits. preview-badge.js draws its chip
// in the picker and nowhere else, and a card editor is not the picker. And the
// gate would be actively wrong here: an author who flips the toggle wants the
// cards now, not once something scrolls.
//
// The one picker behaviour that IS wanted comes for free: a pop-up suggestion
// shows its real content, because isCardBeingEdited (editor-mode.js) answers
// true for anything under an `element-preview`, which is exactly where this
// mounts.
function createPreviewCard(config, hass) {
  try {
    const card = document.createElement('hui-card');
    card.hass = hass;
    card.layout = 'grid';
    card.preview = true;
    card.config = config;
    if (typeof card.load === 'function') card.load();
    return card;
  } catch (error) {
    console.warn('Bubble Card - Could not build an entity suggestion preview card:', error);
    return null;
  }
}

function renderPreviewEntries(state, entries, hass, emptyText) {
  state.mount.replaceChildren();
  state.cards = [];

  if (!entries.length) {
    // The column would otherwise go blank, and a blank column reads as a broken
    // toggle rather than as a module that has nothing to offer here.
    const empty = document.createElement('div');
    empty.setAttribute('style', PREVIEW_EMPTY_STYLE);
    empty.textContent = emptyText;
    state.mount.appendChild(empty);
    return;
  }

  for (const entry of entries) {
    const card = createPreviewCard(entry.config, hass);
    if (!card) continue;

    // The label is what the picker shows and what composeLabel builds, so an
    // author checking a rule has to be able to read it.
    const item = document.createElement('div');
    if (entry.label) {
      const label = document.createElement('div');
      label.setAttribute('style', PREVIEW_LABEL_STYLE);
      label.textContent = entry.label;
      item.appendChild(label);
    }
    item.appendChild(card);
    state.mount.appendChild(item);
    state.cards.push(card);
  }
}

// Takes the column over, or refreshes what it already holds. A dialog that is
// not there yet simply leaves the column alone until the next render pass.
function takeOverEditorPreview(context, hass, entries, key, emptyText) {
  let container = null;
  try {
    // The editor's own lookup, deliberately: a second deep query would be a
    // second thing to fix the day Home Assistant renames that column.
    container = typeof context._getEditorPreviewContainer === 'function'
      ? context._getEditorPreviewContainer()
      : null;
  } catch (_) {}
  if (!container) return;

  let state = context._suggestionsPreviewTakeover;
  if (state && state.container !== container) {
    // Another dialog, so the column the first one hid went with it.
    restoreSuggestionsPreview(context);
    state = null;
  }
  if (!state) {
    const mount = document.createElement('div');
    mount.setAttribute('style', PREVIEW_MOUNT_STYLE);
    state = { container, mount, hidden: new Map(), cards: [], key: null, hass: null, asserted: true };
    context._suggestionsPreviewTakeover = state;
  }
  // Read back by dropSuggestionsPreviewIfStale after the update completes.
  state.asserted = true;

  // Re-asserted on every pass rather than once: Home Assistant renders its own
  // nodes in there (the error spinner comes and goes), and one appearing behind
  // the takeover would draw over the cards.
  for (const child of [...(container.children ?? [])]) {
    if (child === state.mount || state.hidden.has(child)) continue;
    state.hidden.set(child, child.style?.display ?? '');
    try { child.style.display = 'none'; } catch (_) {}
  }
  if (state.mount.parentNode !== container) container.appendChild(state.mount);

  if (state.key !== key) {
    state.key = key;
    state.hass = hass;
    renderPreviewEntries(state, entries, hass, emptyText);
    return;
  }

  // Not a rebuild: the cards are built once per edit and then only handed the
  // newest hass, which the editor already throttles to one reference per
  // second. Rebuilding on a state change is exactly the picker's cost.
  if (state.hass !== hass) {
    state.hass = hass;
    for (const card of state.cards) {
      try { card.hass = hass; } catch (_) {}
    }
  }
}

// Gives the column back, exactly as it was found. Safe to call when there is
// nothing to give back, which is what the render pass does on every pass where
// the preview is off.
function restoreSuggestionsPreview(context) {
  const state = context?._suggestionsPreviewTakeover;
  if (!state) return;

  context._suggestionsPreviewTakeover = null;
  state.hidden.forEach((display, element) => {
    try {
      if (display) element.style.display = display;
      else element.style.removeProperty('display');
    } catch (_) {}
  });
  // The mount is the only node this ever created, and the only one it removes.
  try { state.mount.remove(); } catch (_) {}
}

// Ends the takeover AND switches the toggle off. For the paths that are not the
// panel's own (the module editor closing, the dialog changing card type, the
// editor being disconnected), because those re-render the form under new
// conditions and restoring the column alone would let it be taken straight
// back. Collapsing the panel deliberately does not go through here: reopening
// it should find the toggle where the author left it.
export function releaseSuggestionsPreview(context) {
  restoreSuggestionsPreview(context);
  if (context?._suggestionsDraft) context._suggestionsDraft.showInPreview = false;
}

// Called by the editor once its update has completed. The panel re-asserts the
// takeover from its own render pass, so a pass that did not assert it is a pass
// where the form is not rendered at all: the Store tab took over the modules
// editor, the manual import form replaced it, the card type changed to one
// whose editor offers no modules. None of those fires an event, and missing one
// would leave Home Assistant's preview hidden for the rest of the dialog's life.
export function dropSuggestionsPreviewIfStale(context) {
  const state = context?._suggestionsPreviewTakeover;
  if (!state) return;

  if (state.asserted) {
    state.asserted = false;
    return;
  }
  restoreSuggestionsPreview(context);
}

// Builds what the entity picker would offer for the module being edited.
//
// The real pipeline is run rather than a reimplementation of it, so the panel
// can never disagree with the picker: the quotas, the deduplication, the
// `supported:` filtering, the ${entity} substitution and the label composition
// all come from suggestions.js itself. getEntitySuggestion reads the registry
// synchronously, so the draft is installed in it for the duration of the call
// and every entry is put back exactly as it was.
//
// The other modules keep their registry entry, because helpers.hasModule has to
// stay honest about what is installed, but lose their own suggestion keys:
// their entries would otherwise show up in this module's preview. Native
// suggestions are always returned by getEntitySuggestion and are filtered out
// by config, which also drops a module entry that merely duplicates one, just
// like the picker would.
export function buildSuggestionsPreview(hass, entityId, moduleId, module) {
  if (!moduleId || !module || !hass?.states?.[entityId]) return [];

  const nativeConfigs = new Set();
  try {
    for (const native of getNativeEntitySuggestion(hass, entityId) || []) {
      try {
        nativeConfigs.add(JSON.stringify(native.config));
      } catch (_) {}
    }
  } catch (_) {}

  const snapshot = new Map(yamlKeysMap);
  try {
    yamlKeysMap.clear();
    for (const [id, entry] of snapshot) {
      if (id === moduleId) continue;
      if (entry && typeof entry === 'object' && (entry.suggestions || entry.suggestions_code)) {
        const { suggestions, suggestions_code, ...rest } = entry;
        yamlKeysMap.set(id, rest);
      } else {
        yamlKeysMap.set(id, entry);
      }
    }
    yamlKeysMap.set(moduleId, module);

    return (getEntitySuggestion(hass, entityId) || []).filter((entry) => {
      try {
        return !nativeConfigs.has(JSON.stringify(entry.config));
      } catch (_) {
        return true;
      }
    });
  } catch (error) {
    console.warn('Bubble Card - Could not build the entity suggestions preview:', error);
    return [];
  } finally {
    yamlKeysMap.clear();
    snapshot.forEach((entry, id) => yamlKeysMap.set(id, entry));
  }
}

// State of the entity suggestions panel, kept on the context and NOT on the
// module: generateYamlExport carries every unknown key through to the file, so
// a `suggestions_raw` sitting on the module would end up written into it. Keyed
// by the _editingModule object itself rather than by its id, which the creation
// form lets the user rename while typing, and which covers both entry points
// (editModule and the new module template of editor.js) without either of them
// having to reset anything.
function getSuggestionsDraft(context) {
  const module = context._editingModule;
  const draft = context._suggestionsDraft;
  if (draft && draft.module === module) return draft;

  const rules = module.suggestions;
  const seeded = {
    module,
    // Dumped only when the module really declares rules, an empty editor must
    // not open on the string "undefined".
    raw: rules === undefined || rules === null
      ? ''
      : (typeof rules === 'string' ? rules : jsyaml.dump(rules)),
    rules: rules === null ? undefined : rules,
    rulesError: null,
    rulesInvalid: false,
    // A saved module can already carry a body that does not parse, so the check
    // runs on the way in and not only on the next keystroke.
    codeError: validateSuggestionsCode(module.suggestions_code),
    expanded: false,
    // Off by default: the preview borrows the column that shows the card being
    // edited, so nothing takes it without the author asking.
    showInPreview: false,
    entity: typeof context._config?.entity === 'string' ? context._config.entity : '',
    previewKey: null,
    preview: [],
  };
  context._suggestionsDraft = seeded;
  return seeded;
}

// Renders the module editor form
export function renderModuleEditorForm(context) {
  const t = setupTranslation(context._hassRender ?? context.hass);

  if (!context._editingModule) {
    // Ensure the button is enabled if the editor is not shown
    setHAEditorButtonsDisabled(false);
    releaseSuggestionsPreview(context);
    return html``;
  }

  // Disable HA save button when module editor is active
  setHAEditorButtonsDisabled(true);

  // Check if module is from YAML file
  const isFromYamlFile = _isModuleInstalledViaYaml ? _isModuleInstalledViaYaml(context._editingModule.id) : false;

  // Determine if there are blocking errors (YAML schema parsing or template errors)
  const suggestions = getSuggestionsDraft(context);
  const hasYamlError = !!context._yamlErrorMessage;
  const hasTemplateError = typeof context.errorMessage === 'string' && context.errorMessage.trim().length > 0 && !!context._editingModule;
  // Writing a module whose suggestions cannot be read back is exactly what the
  // editor schema check prevents for `editor:`, so the same rule applies here.
  const hasSuggestionsError = !!(suggestions.rulesError || suggestions.rulesInvalid || suggestions.codeError);
  const hasBlockingErrors = hasYamlError || hasTemplateError || hasSuggestionsError;

  // Apply styles in real-time
  const applyLiveStyles = (newCssCode) => {
    if (!context._editingModule || !context._config || isFromYamlFile) return;
    
    const moduleId = context._editingModule.id;
    
    // Call the main editor's method to clear errors for this module
    if (typeof context._clearCurrentModuleError === 'function') {
        context._clearCurrentModuleError(moduleId);
    }
    
    // Save original module state if not already saved
    if (!context._originalModuleState) {
      const originalModule = yamlKeysMap.get(moduleId);
      if (originalModule) {
        context._originalModuleState = JSON.parse(JSON.stringify(originalModule));
      }
    }
    
    context._editingModule.code = newCssCode;

    // Debounce heavy updates to avoid thrashing while typing
    try { if (context._moduleCodeDebounce) { clearTimeout(context._moduleCodeDebounce); } } catch (_) {}
    context._moduleCodeDebounce = setTimeout(() => {
      // Reset style cache just-in-time
      if (context.stylesYAML) {
        context.stylesYAML = null;
      }

      // Update yamlKeysMap with the latest code
      const debouncedUpdatedModule = {
        ...yamlKeysMap.get(moduleId) || {},
        code: context._editingModule.code,
        id: moduleId
      };
      yamlKeysMap.set(moduleId, debouncedUpdatedModule);

      // Ensure module is enabled in configuration
      updateModuleInConfig(context, moduleId, context._previousModuleId);

      // Broadcast only once per keystroke burst
      broadcastModuleUpdate(moduleId, debouncedUpdatedModule);
    }, 140);
  };
  
  // Apply editor schema changes in real-time
  const applyLiveEditorSchema = (newEditorSchema) => {
    if (!context._editingModule || !context._config || isFromYamlFile) return;
    
    try {
      const moduleId = context._editingModule.id;
      
      // Save original state if not already saved
      if (!context._originalModuleState) {
        const originalModule = yamlKeysMap.get(moduleId);
        if (originalModule) {
          context._originalModuleState = JSON.parse(JSON.stringify(originalModule));
        }
      }
      
      // Update schema but don't overwrite the raw value
      const previousRaw = context._editingModule.editor_raw;
      context._editingModule.editor = newEditorSchema;
      if (previousRaw) {
        context._editingModule.editor_raw = previousRaw;
      }
      
      const originalModule = yamlKeysMap.get(moduleId);
      
      if (originalModule) {
        // Update module with new schema
        const updatedModule = {
          ...originalModule,
          editor: newEditorSchema
        };
        
        yamlKeysMap.set(moduleId, updatedModule);
        
        // Clear schema caches
        if (context._schemaCache) {
          delete context._schemaCache[moduleId];
        }
        
        if (context._processedSchemas) {
          delete context._processedSchemas[moduleId];
        }
        
        // Update UI
        context.requestUpdate();
        
        // Ensure everything is updated
        setTimeout(() => {
          fireEvent(context, "editor-refresh", {});
          context.requestUpdate();
        }, 50);
      }
    } catch (error) {
      console.warn("Error applying live editor schema:", error);
    }
  };

  // Read the `suggestions:` editor, on the same debounce as the editor schema
  // above and with the same raw retention, so a half-typed rule never rewrites
  // the text under the cursor. Nothing is applied to the registry live: unlike
  // a style or an editor schema, a suggestion rule is only ever read by the
  // entity picker, and an unsaved draft has no business showing up there.
  const applySuggestionRules = (newRules) => {
    if (isFromYamlFile) return;

    suggestions.raw = newRules;
    clearTimeout(context._suggestionRulesDebounce);
    context._suggestionRulesDebounce = setTimeout(() => {
      const parsed = parseSuggestionRules(newRules);
      suggestions.rulesError = parsed.error;
      suggestions.rulesInvalid = parsed.invalid;
      if (!parsed.error && !parsed.invalid) {
        suggestions.rules = parsed.rules;
        context._editingModule.suggestions = parsed.rules;
      }
      context.requestUpdate();
    }, 100);
  };

  // The `suggestions_code:` value is the string itself, so it goes straight to
  // the module and only its compilation is debounced.
  const applySuggestionsCode = (newCode) => {
    if (isFromYamlFile) return;

    context._editingModule.suggestions_code = newCode;
    clearTimeout(context._suggestionsCodeDebounce);
    context._suggestionsCodeDebounce = setTimeout(() => {
      suggestions.codeError = validateSuggestionsCode(newCode);
      context.requestUpdate();
    }, 100);
  };

  // Built only while the panel is open AND the preview is switched on, and
  // memoized on what the result depends on: the editor re-renders on every hass
  // tick, and running a module's code hook behind a collapsed panel would be
  // the cost lazy-preview.js exists to avoid. A state change alone does not
  // refresh the preview, editing does. Answers null when nothing should be
  // built at all, which is what hands the column back.
  const suggestionsPreview = () => {
    if (!suggestions.expanded || !suggestions.showInPreview) return null;

    const hass = context._hassRender ?? context.hass;
    // Without an entity there is nothing to suggest anything for, so the card
    // being edited keeps the column rather than being replaced by an apology.
    if (!hass?.states?.[suggestions.entity]) return null;

    const key = JSON.stringify([
      suggestions.entity,
      context._editingModule.id,
      context._editingModule.name,
      context._editingModule.supported ?? null,
      context._editingModule.unsupported ?? null,
      suggestions.raw,
      context._editingModule.suggestions_code ?? '',
    ]);
    if (suggestions.previewKey !== key) {
      suggestions.previewKey = key;
      suggestions.preview = buildSuggestionsPreview(
        hass,
        suggestions.entity,
        context._editingModule.id,
        { ...context._editingModule, suggestions: suggestions.rules },
      );
    }
    return suggestions.preview;
  };

  // Read back by the form, which renders the <pre> from it. Writing the export
  // into that node instead would eject the lit markers of the binding it holds,
  // and every later render of the editor would throw on a part that no longer
  // has a parent. Keyed by the module being edited, so the next one does not
  // open on the export of the previous one.
  const exportPreview = context._exportPreview && context._exportPreview.module === context._editingModule
    ? context._exportPreview.content
    : null;

  // Update export preview content
  const updateExportPreview = (content) => {
    context._exportPreview = { module: context._editingModule, content };
    context.requestUpdate();

    // The panel and the animation are read from the DOM the render just wrote,
    // so both wait for it rather than acting on the previous one.
    Promise.resolve(context.updateComplete).then(() => {
      // Expand the preview panel if not already expanded
      const previewPanel = context.shadowRoot?.querySelector('.export-preview ha-expansion-panel');
      if (previewPanel && !previewPanel.expanded) {
        previewPanel.expanded = true;
      }

      // Animate the preview
      const previewContainer = context.shadowRoot?.querySelector('.export-preview');
      if (previewContainer) {
        previewContainer.style.animation = 'none';
        setTimeout(() => {
          previewContainer.style.animation = 'highlight 1s ease';
        }, 10);
      }
    }).catch(() => {});
  };

  // Driven from the render pass rather than from the toggle alone, so the
  // takeover re-asserts itself if Home Assistant re-renders its column, and so
  // every condition that ends it (toggle off, panel collapsed, entity cleared)
  // gives the column back without needing its own handler.
  const previewEntries = suggestionsPreview();
  if (previewEntries) {
    takeOverEditorPreview(
      context,
      context._hassRender ?? context.hass,
      previewEntries,
      suggestions.previewKey,
      t('editor.module_editor.suggestions_preview_empty'),
    );
  } else {
    restoreSuggestionsPreview(context);
  }

  return html`
    <div class="module-editor-form">
        <div class="form-content">
          <h3>
            <ha-icon style="margin: 8px;" icon="${context._showNewModuleForm ? 'mdi:puzzle-plus-outline' : 'mdi:puzzle-edit-outline'}"></ha-icon>
            ${context._showNewModuleForm ? t('editor.module_editor.create_module') : context._editingModule.id === 'default' ? t('editor.module_editor.edit_default_module') : t('editor.module_editor.edit_module')}
          </h3>
          
          <div class="module-editor-not-default" style="display: ${context._editingModule.id === 'default' ? 'none' : ''}">
            ${isFromYamlFile ? html`
              <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                  <ha-icon icon="mdi:file-document-alert"></ha-icon>
                  ${t('editor.module_editor.readonly_title')}
                </h4>
                <div class="content">
                  <p>${tTemplate(t('editor.module_editor.readonly_body'), { file: html`<code>bubble-modules.yaml</code>` })}</p>
                </div>
              </div>
            ` : ''}
            
            <ha-form
              .hass=${context.hass}
              .data=${{ id: context._editingModule.id || '' }}
              .schema=${[{ name: 'id', selector: { text: {} } }]}
              .computeLabel=${() => t('editor.module_editor.module_id')}
              .disabled=${!context._showNewModuleForm || isFromYamlFile}
              @value-changed=${(ev) => {
                const oldId = context._editingModule.id;
                const newId = ev.detail.value.id;
                context._editingModule.id = newId;
                if (context._showNewModuleForm && context._config.modules) {
                  updateModuleInConfig(context, newId, oldId);
                  fireEvent(context, "config-changed", { config: context._config });
                }
              }}
            ></ha-form>
            <span class="helper-text">
              ${t('editor.module_editor.module_id_helper')}
            </span>
            
            <ha-form
              .hass=${context.hass}
              .data=${{ name: context._editingModule.name || '' }}
              .schema=${[{ name: 'name', selector: { text: {} } }]}
              .computeLabel=${() => t('editor.module_editor.module_name')}
              .disabled=${isFromYamlFile}
              @value-changed=${(ev) => { context._editingModule.name = ev.detail.value.name; }}
            ></ha-form>
            
            <ha-form
              .hass=${context.hass}
              .data=${{ version: context._editingModule.version || '1.0' }}
              .schema=${[{ name: 'version', selector: { text: {} } }]}
              .computeLabel=${() => t('editor.module_editor.version')}
              .disabled=${isFromYamlFile}
              @value-changed=${(ev) => { context._editingModule.version = ev.detail.value.version; }}
            ></ha-form>
            
            <ha-form
              .hass=${context.hass}
              .data=${{ creator: context._editingModule.creator || '' }}
              .schema=${[{ name: 'creator', selector: { text: {} } }]}
              .computeLabel=${() => t('editor.module_editor.creator')}
              .disabled=${isFromYamlFile}
              @value-changed=${(ev) => { context._editingModule.creator = ev.detail.value.creator; }}
            ></ha-form>
            
            <ha-expansion-panel 
              .header=${html`
                <ha-icon icon="mdi:filter-check-outline" style="margin-inline-end: 8px;"></ha-icon>
                ${t('editor.module_editor.supported_cards')}
              `}
              @expanded-changed=${(e) => e.stopPropagation()}
            >
              <div>
                ${renderSupportedCardCheckboxes(context, isFromYamlFile)}
              </div>
            </ha-expansion-panel>

            <ha-expansion-panel 
              .header=${html`
                <ha-icon icon="mdi:file-document-outline" style="margin-inline-end: 8px;"></ha-icon>
                ${t('editor.module_editor.description')}
              `}
              @expanded-changed=${(e) => e.stopPropagation()}
            >
              <div class="code-editor-container">
                <ha-code-editor
                  class="${isFromYamlFile ? 'disabled' : ''}"
                  mode="yaml"
                  .value=${context._editingModule.description || ''}
                  @value-changed=${(e) => { context._editingModule.description = e.detail.value; }}
                ></ha-code-editor>
              </div>
              <span class="helper-text">
                ${tTemplate(t('editor.module_editor.description_helper'), { bold: html`<b>${t('editor.module_editor.description_helper_bold')}</b>` })}
              </span>
            </ha-expansion-panel>
          </div>

          <ha-expansion-panel 
            .header=${html`
              <ha-icon icon="mdi:code-json" style="margin-inline-end: 8px;"></ha-icon>
              ${t('editor.module_editor.code_title')}
            `}
            @expanded-changed=${(e) => e.stopPropagation()}
          >
            <div class="code-editor-container">
              <ha-code-editor
                class="${isFromYamlFile ? 'disabled' : ''}"
                mode="yaml"
                .value=${context._editingModule.code || ''}
                @value-changed=${(e) => applyLiveStyles(e.detail.value)}
              ></ha-code-editor>
            </div>
            ${context.createErrorConsole(context)}
            <span class="helper-text">
              ${tTemplate(t('editor.module_editor.code_helper'), { link: html`<a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#styling" target="_blank">${t('editor.module_editor.styling_docs')}</a>` })}
            </span>
          </ha-expansion-panel>
          
          <ha-expansion-panel 
            style="display: ${context._editingModule.id === 'default' ? 'none' : ''}" 
            .header=${html`
              <ha-icon icon="mdi:form-select" style="margin-inline-end: 8px;"></ha-icon>
              ${t('editor.module_editor.editor_schema_title')}
            `}
            @expanded-changed=${(e) => e.stopPropagation()}
          >
            <div class="editor-schema-container">
              <ha-code-editor
                class="${isFromYamlFile ? 'disabled' : ''}"
                mode="yaml"
                .value=${context._editingModule.editor_raw || 
                  (typeof context._editingModule.editor === 'object' 
                    ? jsyaml.dump(context._editingModule.editor) 
                    : context._editingModule.editor || '')}
                @value-changed=${(e) => { 
                  // Save the raw value to prevent cursor loss
                  context._editingModule.editor_raw = e.detail.value;
                  
                  // Use a debounce to prevent parsing incomplete YAML
                  clearTimeout(context._editorSchemaDebounce);
                  context._editorSchemaDebounce = setTimeout(() => {
                    try {
                      const newSchema = jsyaml.load(e.detail.value);
                      // Only apply if it's a valid object and not null
                      if (newSchema !== null && typeof newSchema === 'object') {
                        applyLiveEditorSchema(newSchema);
                        // Clear any previous YAML error
                        if (context._yamlErrorMessage) {
                          context._yamlErrorMessage = null;
                          context.requestUpdate();
                        }
                      }
                    } catch (error) {
                      console.warn("Invalid YAML for editor schema:", error);
                      // Keep the raw value
                      context._editingModule.editor = context._editingModule.editor_raw || e.detail.value;
                      // Set the error message
                      context._yamlErrorMessage = error.message;
                      context.requestUpdate();
                    }
                  }, 100); // Wait 100ms after the last modification
                }}
              ></ha-code-editor>
            </div>
            <div class="bubble-info error" 
                style="display: ${!context._yamlErrorMessage ? 'none' : ''}">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    ${t('editor.module_editor.yaml_error_title')}
                </h4>
                <div class="content">
                    <pre style="margin: 0; white-space: pre-wrap; font-size: 12px;">${context._yamlErrorMessage ? context._yamlErrorMessage.charAt(0).toUpperCase() + context._yamlErrorMessage.slice(1) : ''}</pre>
                </div>
            </div>
            <span class="helper-text">
              ${tTemplate(t('editor.module_editor.editor_schema_helper'), { link: html`<a href="https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md" target="_blank">${t('editor.module_editor.schema_docs')}</a>` })}
            </span>

            ${context._editingModule.editor && Array.isArray(context._editingModule.editor) && context._editingModule.editor.length > 0 ? html`
              <div class="form-preview">
                <h4>${t('editor.module_editor.editor_preview')}</h4>
                <div class="form-preview-container">
                  <ha-form
                    .hass=${context.hass}
                    .data=${{}}
                    .schema=${context._editingModule.editor}
                    .computeLabel=${context._computeLabelCallback || (schema => schema.label || schema.name)}
                  ></ha-form>
                </div>
              </div>
            ` : ''}
          </ha-expansion-panel>

          <ha-expansion-panel
            style="display: ${context._editingModule.id === 'default' ? 'none' : ''}"
            .header=${html`
              <ha-icon icon="mdi:lightbulb-auto-outline" style="margin-inline-end: 8px;"></ha-icon>
              ${t('editor.module_editor.suggestions_title')}
            `}
            @expanded-changed=${(e) => {
              e.stopPropagation();
              suggestions.expanded = e.detail?.expanded === true;
              context.requestUpdate();
            }}
          >
            <h4 class="suggestions-field-title">${t('editor.module_editor.suggestions_rules')}</h4>
            <div class="editor-schema-container">
              <ha-code-editor
                class="${isFromYamlFile ? 'disabled' : ''}"
                mode="yaml"
                .value=${suggestions.raw}
                @value-changed=${(e) => applySuggestionRules(e.detail.value)}
              ></ha-code-editor>
            </div>
            <div class="bubble-info error"
                style="display: ${!suggestions.rulesError && !suggestions.rulesInvalid ? 'none' : ''}">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    ${t('editor.module_editor.suggestions_error_title')}
                </h4>
                <div class="content">
                    <pre style="margin: 0; white-space: pre-wrap; font-size: 12px;">${suggestions.rulesError
                      ? suggestions.rulesError.charAt(0).toUpperCase() + suggestions.rulesError.slice(1)
                      : (suggestions.rulesInvalid ? t('editor.module_editor.suggestions_rules_invalid') : '')}</pre>
                </div>
            </div>
            <span class="helper-text">
              ${tTemplate(t('editor.module_editor.suggestions_rules_helper'), { link: html`<a href="${SUGGESTIONS_DOCS_URL}" target="_blank">${t('editor.module_editor.suggestions_docs')}</a>` })}
            </span>

            <h4 class="suggestions-field-title">${t('editor.module_editor.suggestions_code')}</h4>
            <div class="editor-schema-container">
              <ha-code-editor
                class="${isFromYamlFile ? 'disabled' : ''}"
                mode="yaml"
                .value=${context._editingModule.suggestions_code || ''}
                @value-changed=${(e) => applySuggestionsCode(e.detail.value)}
              ></ha-code-editor>
            </div>
            <div class="bubble-info error"
                style="display: ${!suggestions.codeError ? 'none' : ''}">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    ${t('editor.module_editor.suggestions_error_title')}
                </h4>
                <div class="content">
                    <pre style="margin: 0; white-space: pre-wrap; font-size: 12px;">${suggestions.codeError ? suggestions.codeError.charAt(0).toUpperCase() + suggestions.codeError.slice(1) : ''}</pre>
                </div>
            </div>
            <span class="helper-text">
              ${tTemplate(t('editor.module_editor.suggestions_code_helper'), {
                args: html`<code>(hass, entity, stateObj, helpers, module)</code>`,
                link: html`<a href="${SUGGESTIONS_DOCS_URL}" target="_blank">${t('editor.module_editor.suggestions_docs')}</a>`
              })}
            </span>

            <div class="form-preview">
              <h4>${t('editor.module_editor.suggestions_preview')}</h4>
              <ha-formfield class="suggestions-preview-toggle">
                <ha-switch
                  aria-label="${t('editor.module_editor.suggestions_preview_toggle')}"
                  .checked=${suggestions.showInPreview}
                  @change=${(e) => {
                    suggestions.showInPreview = e.target.checked === true;
                    context.requestUpdate();
                  }}
                ></ha-switch>
                <div class="mdc-form-field">
                  <label class="mdc-label">${t('editor.module_editor.suggestions_preview_toggle')}</label>
                </div>
              </ha-formfield>
              <ha-entity-picker
                label="${t('editor.common.entity')}"
                .hass=${context._hassRender ?? context.hass}
                .value=${suggestions.entity}
                allow-custom-entity
                @value-changed=${(e) => {
                  suggestions.entity = e.detail.value || '';
                  context.requestUpdate();
                }}
              ></ha-entity-picker>
            </div>
          </ha-expansion-panel>

          ${(!isFromYamlFile && hasBlockingErrors) ? html`
            <div class="bubble-info warning" style="margin-top: 8px;">
              <h4 class="bubble-section-title">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                ${t('editor.module_editor.save_disabled_title')}
              </h4>
              <div class="content">
                <p style="margin: 0;">
                  ${hasYamlError ? t('editor.module_editor.fix_yaml_error') : ''}
                  ${hasYamlError && hasTemplateError ? html`<br>` : ''}
                  ${hasTemplateError ? t('editor.module_editor.fix_template_error') : ''}
                  ${(hasYamlError || hasTemplateError) && hasSuggestionsError ? html`<br>` : ''}
                  ${hasSuggestionsError ? t('editor.module_editor.fix_suggestions_error') : ''}
                </p>
              </div>
            </div>
          ` : ''}

          <hr>

          <ha-expansion-panel 
            .header=${html`
              <ha-icon icon="mdi:export" style="margin-inline-end: 8px;"></ha-icon>
              ${t('editor.module_editor.export_title')}
            `}
            @expanded-changed=${(e) => e.stopPropagation()}
          >
            <div class="content">
                <div class="export-section">
                    <div class="export-buttons">
                        <button class="icon-button" @click=${() => {
                        const yamlExport = generateYamlExport(context._editingModule);
                        copyToClipboard(context, yamlExport, t('editor.module_editor.yaml_copied'), updateExportPreview);
                        }}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        ${t('editor.module_editor.copy_yaml')}
                        </button>

                        <button class="icon-button" @click=${() => {
                        const githubExport = generateGitHubExport(context._editingModule);
                        copyToClipboard(context, githubExport, t('editor.module_editor.github_copied'), updateExportPreview);
                        }}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        ${t('editor.module_editor.copy_github')}
                        </button>

                        <button class="icon-button" @click=${() => {
                        downloadModuleAsYaml(context, context._editingModule, updateExportPreview);
                        }}>
                        <ha-icon icon="mdi:file-download"></ha-icon>
                        ${t('editor.module_editor.download_yaml')}
                        </button>
                    </div>
                    
                    <div class="export-preview">
                        <ha-expansion-panel
                          .header=${t('editor.module_editor.export_preview')}
                          @expanded-changed=${(e) => e.stopPropagation()}
                        >
                        <pre id="export-preview-content">${exportPreview ?? t('editor.module_editor.export_preview_hint')}</pre>
                        </ha-expansion-panel>
                    </div>

                    <div class="bubble-info">
                      <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        ${t('editor.module_editor.sharing_title')}
                      </h4>
                      <div class="content">
                        <p>${tTemplate(t('editor.module_editor.sharing_body1'), {
                          copy: html`<strong>${t('editor.module_editor.copy_github')}</strong>`,
                          category: html`<a href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules" target="_blank">Share your Modules</a>`,
                          edit_description: html`<strong>${t('editor.module_editor.sharing_edit_description')}</strong>`,
                          example: html`<strong>${t('editor.module_editor.sharing_example')}</strong>`,
                          screenshot: html`<strong>${t('editor.module_editor.sharing_screenshot')}</strong>`
                        })}</p>
                        <p>${tTemplate(t('editor.module_editor.sharing_body2'), {
                          available: html`<strong>${t('editor.module_editor.sharing_available')}</strong>`
                        })}</p>
                      </div>
                    </div>
                </div>
            </div>
          </ha-expansion-panel>
          
          <div class="module-editor-buttons-container">
            <button class="icon-button" style="flex: 1;" @click=${() => {
              try {
                // Restore original module if canceling edit
                if (!context._showNewModuleForm && context._editingModule) {
                  const moduleId = context._editingModule.id;
                  // Clear any lingering module errors on cancel
                  if (typeof context._clearCurrentModuleError === 'function') {
                    context._clearCurrentModuleError(moduleId);
                  }
                  resetModuleChanges(context, moduleId);
                } else if (context._showNewModuleForm && context._editingModule) {
                  // For new module creation cancellation
                  const moduleId = context._editingModule.id;
                  
                  // Remove temporary module from configuration
                  if (context._config && context._config.modules && moduleId) {
                    context._config.modules = context._config.modules.filter(id => id !== moduleId);
                    fireEvent(context, "config-changed", { config: context._config });
                    
                    // Remove from yamlKeysMap if present
                    if (yamlKeysMap.has(moduleId)) {
                      yamlKeysMap.delete(moduleId);
                    }
                    
                    refreshStyles(context);
                  }
                }
              } finally {
                // Reset editor state
                context._editingModule = null;
                context._showNewModuleForm = false;
                context._previousModuleId = null;
                // Hand the preview column back now rather than on the next
                // update: the form is gone from this render on.
                releaseSuggestionsPreview(context);
                context._suggestionsDraft = null;
                // Re-enable HA save button on cancel
                setHAEditorButtonsDisabled(false);
                context.requestUpdate();
                setTimeout(() => scrollToModuleForm(context), 0);
              }
            }}>
              <ha-icon icon="mdi:close"></ha-icon>
              ${t('editor.common.cancel')}
            </button>
            
            <button class="icon-button ${isFromYamlFile || hasBlockingErrors ? 'disabled' : ''}" ?disabled=${isFromYamlFile || hasBlockingErrors} style="flex: 1;" @click=${() => {              
              if (isFromYamlFile || hasBlockingErrors) { return; }
              // Clear any lingering module errors prior to saving
              if (typeof context._clearCurrentModuleError === 'function' && context._editingModule?.id) {
                context._clearCurrentModuleError(context._editingModule.id);
              }
              saveModule(context, context._editingModule);
              setTimeout(() => scrollToModuleForm(context), 0);
            }}>
              <ha-icon icon="mdi:content-save"></ha-icon>
              ${t('editor.module_editor.save_module')}
            </button>
          </div>
        </div>
    </div>
  `;
}

// Get available card types (exported for use in other modules)
export function getAvailableCardTypes() {
  return [
    { id: 'button', name: 'Button' }, 
    { id: 'calendar', name: 'Calendar' }, 
    { id: 'climate', name: 'Climate' }, 
    { id: 'cover', name: 'Cover' }, 
    { id: 'horizontal-buttons-stack', name: 'Horizontal buttons stack' }, 
    { id: 'media-player', name: 'Media player' }, 
    { id: 'pop-up', name: 'Pop-up' }, 
    { id: 'select', name: 'Select' }, 
    { id: 'separator', name: 'Separator' },
    { id: 'sub-buttons', name: 'Sub-buttons' }
  ];
}

// Function to render checkboxes for supported cards
function renderSupportedCardCheckboxes(context, isFromYamlFile = false) {
  const t = setupTranslation(context._hassRender ?? context.hass);
  const availableCardTypes = getAvailableCardTypes();
  const allCardIds = availableCardTypes.map(card => card.id);

  // Display labels only: getAvailableCardTypes() names stay in English because
  // the store parser matches them against GitHub discussion content.
  const cardTypeLabels = {
    'button': t('editor.module_editor.card_button'),
    'calendar': t('editor.module_editor.card_calendar'),
    'climate': t('editor.module_editor.card_climate'),
    'cover': t('editor.module_editor.card_cover'),
    'horizontal-buttons-stack': t('editor.module_editor.card_horizontal_buttons_stack'),
    'media-player': t('editor.module_editor.card_media_player'),
    'pop-up': t('editor.module_editor.card_pop_up'),
    'select': t('editor.module_editor.card_select'),
    'separator': t('editor.module_editor.card_separator'),
    'sub-buttons': t('editor.module_editor.card_sub_buttons'),
  };
  
  // Initialize supported array if not exists
  if (context._editingModule.supported === undefined) {
    // If module has legacy unsupported property, convert it to supported
    if (context._editingModule.unsupported && context._editingModule.unsupported.length > 0) {
      // All cards except those in unsupported are supported
      context._editingModule.supported = allCardIds
        .filter(id => !context._editingModule.unsupported.includes(id));
    } else {
      // Default: all cards are supported if no 'unsupported' array exists
      // Don't create supported property - it means all cards are supported
      // Set to undefined so it won't be included in exports
      context._editingModule.supported = undefined;
    }
  }
  
  // Check if all cards are selected (supported is undefined/null or contains all cards)
  const allCardsSelected = !context._editingModule.supported || 
    (Array.isArray(context._editingModule.supported) &&
     context._editingModule.supported.length === allCardIds.length &&
     allCardIds.every(id => context._editingModule.supported.includes(id)));
  
  return html`
    <div class="checkbox-grid">
      <ha-formfield label="${t('editor.module_editor.all_cards')}" style="grid-column: 1 / -1; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid var(--divider-color);">
        <ha-checkbox
          .checked=${allCardsSelected}
          @change=${(e) => {
            if (isFromYamlFile) return;
            if (e.target.checked) {
              // Remove supported to indicate all cards are supported
              delete context._editingModule.supported;
            } else {
              // Deselect all cards
              context._editingModule.supported = [];
            }
            context.requestUpdate();
          }}
          ?disabled=${isFromYamlFile}
        ></ha-checkbox>
      </ha-formfield>
      ${availableCardTypes.map(card => html`
        <ha-formfield label="${cardTypeLabels[card.id] ?? card.name}">
          <ha-checkbox
            .checked=${!context._editingModule.supported || context._editingModule.supported.includes(card.id)}
            @change=${(e) => {
              if (isFromYamlFile) return;
              // Ensure supported array exists when modifying individual cards
              if (!context._editingModule.supported) {
                context._editingModule.supported = allCardIds.slice();
              }
              if (e.target.checked) {
                if (!context._editingModule.supported.includes(card.id)) {
                  context._editingModule.supported.push(card.id);
                }
                // If all cards are now selected, remove supported to indicate all cards
                if (context._editingModule.supported.length === allCardIds.length &&
                    allCardIds.every(id => context._editingModule.supported.includes(id))) {
                  delete context._editingModule.supported;
                }
              } else {
                context._editingModule.supported = context._editingModule.supported.filter(
                  type => type !== card.id
                );
              }
              context.requestUpdate();
            }}
            ?disabled=${isFromYamlFile}
          ></ha-checkbox>
        </ha-formfield>
      `)}
    </div>
    <div class="helper-text">
      ${t('editor.module_editor.supported_helper')}
    </div>
  `;
}

// Save a module (create new or update existing)
export async function saveModule(context, moduleData) {
  try {
    const moduleId = moduleData.id;
    const wasModuleEnabled = context._config.modules && context._config.modules.includes(moduleId);
    
    // Preserve is_global from existing module before saving
    const existingModule = yamlKeysMap.get(moduleId);
    const wasGlobal = existingModule && existingModule.is_global === true;
    
    // Ensure we use the parsed version for saving
    if (moduleData.editor_raw && typeof moduleData.editor_raw === 'string') {
      try {
        const parsed = jsyaml.load(moduleData.editor_raw);
        if (parsed !== null && typeof parsed === 'object') {
          moduleData.editor = parsed;
        }
      } catch (e) {
        console.warn("Couldn't parse editor schema during save, using fallback:", e);
      }
    }
    
    // Remove the raw version before saving
    if (moduleData.editor_raw) {
      delete moduleData.editor_raw;
    }

    // Same guard as editor_raw above, for the `suggestions:` panel: it parses on
    // a debounce, so the last keystrokes may not have reached moduleData yet.
    // An empty editor resolves to undefined, which generateYamlExport drops.
    const suggestionsDraft = context?._suggestionsDraft;
    if (suggestionsDraft && suggestionsDraft.module === moduleData) {
      const parsed = parseSuggestionRules(suggestionsDraft.raw);
      if (!parsed.error && !parsed.invalid) {
        moduleData.suggestions = parsed.rules;
      }
    }
    
    // Remove unsupported if supported is present (for backward compatibility)
    if (moduleData.supported && moduleData.unsupported) {
      delete moduleData.unsupported;
    }
    
    // Remove supported if it contains all cards (for compatibility with older versions)
    const availableCardTypes = getAvailableCardTypes();
    const allCardIds = availableCardTypes.map(card => card.id);
    if (moduleData.supported && Array.isArray(moduleData.supported) &&
        moduleData.supported.length === allCardIds.length &&
        allCardIds.every(id => moduleData.supported.includes(id))) {
      delete moduleData.supported;
    }
    
    // Build a clean YAML string for persistence using only supported fields
    const { generateYamlExport } = await import('./export.js');
    const yamlContent = generateYamlExport(moduleData);
    
    // Extract metadata and update in yamlKeysMap
    const metadata = extractModuleMetadata(yamlContent, moduleData.id, {
      title: moduleData.name,
      defaultCreator: moduleData.creator
    });
    
    // Preserve is_global property if it was set before saving
    if (wasGlobal) {
      metadata.is_global = true;
    }
    
    // Signal modules have been updated
    document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
    
    // Update yamlKeysMap while preserving order
    const oldKeys = Array.from(yamlKeysMap.keys());
    const newMap = new Map();
    
    oldKeys.forEach(key => {
      if (key === moduleData.id) {
        newMap.set(moduleData.id, metadata);
      } else {
        newMap.set(key, yamlKeysMap.get(key));
      }
    });

    // If it's a new module, add it to the map
    if (!oldKeys.includes(moduleData.id)) {
        newMap.set(moduleData.id, metadata);
    }
    
    // Replace the old map with the new one
    yamlKeysMap.clear();
    newMap.forEach((value, key) => {
      yamlKeysMap.set(key, value);
    });
    
    // Mark this module as coming from the persistent entity (not YAML file)
    // Will be overridden below depending on storage provider
    
    // Ensure the module is added to the card's configuration
    if (context._config && context._config.modules) {
      if (!context._config.modules.includes(moduleId)) {
        context._config.modules.push(moduleId);
      }
      // Notify the editor of config changes
      fireEvent(context, "config-changed", { config: context._config });
    }
    
    // Persist using Bubble Card Tools files if available; otherwise keep changes local only (no entity writes)
    let savedViaFiles = false;
    try {
      const bctAvailable = await ensureBCTProviderAvailable(context.hass);
      if (bctAvailable) {
        // Persist to modules/<id>.yaml using the provider with the YAML string
        await writeModuleYaml(context.hass, moduleId, yamlContent);
        try { moduleSourceMap.set(moduleId, 'file'); } catch (e) {}
        // Notify the system to reload modules from files
        document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
        savedViaFiles = true;
      }
    } catch (e) {
      // Keep local-only if file save fails
      console.warn('File-based save failed; keeping changes local only:', e);
    }
    // No writes to the legacy entity; if files are unavailable, changes remain local-only
    if (!savedViaFiles) {
      try { moduleSourceMap.set(moduleId, 'editor'); } catch (e) {}
    }
    
    // Broadcast change to all cards
    broadcastModuleUpdate(moduleId, metadata);
    
    // Reset style cache
    context.stylesYAML = null;
    
    // Force refresh if module is currently used
    if (wasModuleEnabled) {
      refreshStyles(context);
    }
    
    // Reset editing state
    context._editingModule = null;
    context._showNewModuleForm = false;
    // Same as the cancel path: the form is gone, so is its hold on the
    // preview column.
    releaseSuggestionsPreview(context);
    context._suggestionsDraft = null;

    // Force UI refresh
    forceUIRefresh(context);
    
    // Re-enable HA save button after successful save
    setHAEditorButtonsDisabled(false);
    
  } catch (error) {
    console.error("Error saving module:", error);
  } finally {
    // Ensure HA editor buttons are re-enabled even if an error occurs
    setHAEditorButtonsDisabled(false);
  }
}

// No longer writing modules to Home Assistant; persistence is handled by Bubble Card Tools files.

// Function to force a complete UI refresh
function forceUIRefresh(context) {
  // Reset cached structures
  if (context._processedSchemas) {
    context._processedSchemas = {};
  }
  
  // Reset state variables
  context._selectedModuleTab = 0;
  
  // Force all cached forms to be rebuilt
  if (typeof context._getProcessedSchema === 'function') {
    if (!context._schemaCache) {
      context._schemaCache = {};
    } else {
      Object.keys(context._schemaCache).forEach(key => {
        delete context._schemaCache[key];
      });
    }
  }
  
  // Reset style cache
  context.lastEvaluatedStyles = "";
  
  // Apply styles
  if (context.card && typeof context.handleCustomStyles === 'function') {
    context.handleCustomStyles(context, context.card);
  }

  // Notify parent components
  fireEvent(context, 'editor-refresh', {});
  
  // Trigger updates
  context.requestUpdate();
  
  // Secondary update after delay
  setTimeout(() => {
    if (context.card && typeof context.handleCustomStyles === 'function') {
      context.handleCustomStyles(context, context.card);
    }
    
    context.requestUpdate();
    
    // If changes still not reflected, try more aggressive approach
    setTimeout(() => {
      if (context._config) {
        const config = {...context._config};
        
        // Reset style cache
        if (context.stylesYAML) {
          context.stylesYAML = null;
          document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
        }
        
        // Trigger config change
        fireEvent(context, "config-changed", { config: config });
        
        // Apply styles
        if (context.card && typeof context.handleCustomStyles === 'function') {
          context.handleCustomStyles(context, context.card);
        }
      }
      context.requestUpdate();
    }, 100);
  }, 50);
}

// Edit a module
export function editModule(context, moduleId) {
  // Reset original state
  context._originalModuleState = null;
  
  // Get module data
  const moduleData = yamlKeysMap.get(moduleId);
  
  if (!moduleData) {
    console.error(`Module ${moduleId} not found`);
    return;
  }
  
  // Set the editing module
  context._editingModule = {
    id: moduleId,
    ...moduleData
  };
  
  // Disable HA save button when starting edit
  setHAEditorButtonsDisabled(true);
  
  // Set default values if missing
  if (!context._editingModule.code) {
    context._editingModule.code = '';
  }
  
  if (context._editingModule.editor && typeof context._editingModule.editor === 'string') {
    context._editingModule.editorReference = context._editingModule.editor;
    context._editingModule.editor = [];
  }
  
  // Initialize editor_raw to preserve the raw YAML syntax
  if (typeof context._editingModule.editor === 'object') {
    context._editingModule.editor_raw = jsyaml.dump(context._editingModule.editor);
  } else {
    context._editingModule.editor_raw = context._editingModule.editor || '';
  }
  
  context.requestUpdate();
  
  setTimeout(() => scrollToModuleForm(context), 0);
}

// Delete a module
export async function deleteModule(context, moduleId) {
  const t = setupTranslation(context.hass);

  // Confirm deletion
  if (!confirm(t('editor.module_editor.delete_confirm').replace('{id}', moduleId))) {
    return;
  }
  
  try {
    // Remove from yamlKeysMap
    yamlKeysMap.delete(moduleId);
    // Remove source mapping
    try { moduleSourceMap.delete(moduleId); } catch (e) {}
    
    // Force refresh
    document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
    
    // Prefer deleting from Bubble Card Tools files; no legacy entity writes
    let deletedViaFiles = false;
    try {
      const bctAvailable = await ensureBCTProviderAvailable(context.hass);
      if (bctAvailable) {
        await deleteModuleFile(context.hass, moduleId);
        // Notify reload
        document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
        deletedViaFiles = true;
      }
    } catch (e) {
      console.warn('File-based deletion failed; keeping changes local only:', e);
    }
    // No writes to legacy entity
    
    // Remove module from current config
    if (context._config && context._config.modules) {
      context._config.modules = context._config.modules.filter(id => id !== moduleId);
      fireEvent(context, "config-changed", { config: context._config });
      refreshStyles(context);
    }
    
    // Force UI refresh
    forceUIRefresh(context);
    
    // Re-enable HA save button after successful deletion
    setHAEditorButtonsDisabled(false);
    
  } catch (error) {
    console.error("Error deleting module:", error);
  } finally {
    // Ensure HA editor buttons are re-enabled even if an error occurs
    setHAEditorButtonsDisabled(false);
  }
}

// No longer updating Home Assistant entity when deleting modules.

// Initialize module editor context
export function initModuleEditor(context) {
  if (!context._editingModuleInitialized) {
    context._editingModule = null;
    context._showNewModuleForm = false;
    context._showManualImportForm = false;
    context._manualYamlContent = '';
    context._exportContent = null;
    context._exportType = null;
    context._exportStep = 0;
    context._schemaCache = {};
    context._processedSchemas = {};
    context._originalModuleState = null;
    context._previousModuleId = null;
    context._suggestionsDraft = null;
    context._suggestionsPreviewTakeover = null;

    // Function to generate a unique module ID
    context._generateUniqueModuleId = (baseId = 'my_module') => {
      // If the base ID doesn't exist yet, return it as is
      if (!yamlKeysMap.has(baseId)) {
        return baseId;
      }
      
      // Otherwise, try to add a number suffix until a unique ID is found
      let counter = 1;
      let newId = `${baseId}_${counter}`;
      
      while (yamlKeysMap.has(newId)) {
        counter++;
        newId = `${baseId}_${counter}`;
      }
      
      return newId;
    };
    
    // Use the function to create a unique ID for the template
    const uniqueId = context._generateUniqueModuleId('my_module');
    
    context._newModuleTemplate = {
      id: uniqueId,
      name: 'My Module',
      description: '',
      creator: '',
      version: '1.0',
      // No supported property = all cards are supported (compatible with older versions)
      code: '',
      editor: '',
    };
    context._editingModuleInitialized = true;
  }
}

// Reset changes and restore original module state
function resetModuleChanges(context, moduleId) {
  if (!moduleId) return;
  
  // Use original saved state if exists, otherwise use from yamlKeysMap
  let originalModule;
  if (context._originalModuleState) {
    originalModule = context._originalModuleState;
    context._originalModuleState = null;
  } else {
    originalModule = yamlKeysMap.get(moduleId);
  }
  
  if (!originalModule) return;
  
  // Reset caches
  context.lastEvaluatedStyles = "";
  context.stylesYAML = null;
  
  // Replace modified module with original version
  yamlKeysMap.set(moduleId, { ...originalModule });
  
  // Clear schema caches
  if (context._schemaCache) {
    delete context._schemaCache[moduleId];
  }
  
  if (context._processedSchemas) {
    delete context._processedSchemas[moduleId];
  }
  
  // Apply styles and update UI
  if (context.handleCustomStyles) {
    context.handleCustomStyles(context, context.card);
  }
  
  // Notify other instances
  broadcastModuleUpdate(moduleId, originalModule);
  
  // Force complete refresh
  setTimeout(() => {
    if (context._config) {
      const tempConfig = { ...context._config };
      fireEvent(context, "config-changed", { config: tempConfig });
    }
    context.requestUpdate();
  }, 50);
} 
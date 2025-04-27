import { html } from 'lit';
import { fireEvent } from '../tools/utils.js';
import { yamlKeysMap } from '../tools/style-processor.js';
import { extractModuleMetadata } from './parser.js';
import jsyaml from 'js-yaml';
import { 
  generateYamlExport, 
  generateGitHubExport, 
  copyToClipboard,
  downloadModuleAsYaml
} from './export.js';
import { _isModuleInstalledViaYaml } from './store.js';
import { scrollToModuleForm } from './utils.js';

// Helper functions
function updateModuleInConfig(context, moduleId, oldId = null) {
  if (!context._config || !context._config.modules) return;
  
  // Remove old ID if needed
  if (oldId && oldId !== moduleId) {
    context._config.modules = context._config.modules.filter(id => id !== oldId);
  }
  
  // Add new ID if not already present
  if (!context._config.modules.includes(moduleId)) {
    context._config.modules.push(moduleId);
  }
  
  // Save current ID for tracking
  context._previousModuleId = moduleId;
}

function refreshStyles(context) {
  // Reset style cache
  context.lastEvaluatedStyles = "";
  context.stylesYAML = null;
  
  // Apply styles if possible
  if (context.handleCustomStyles && context.card) {
    context.handleCustomStyles(context, context.card);
  }
  
  // Force update
  context.requestUpdate();
}

function broadcastModuleUpdate(moduleId, moduleData) {
  window.dispatchEvent(new CustomEvent('bubble-card-module-updated', {
    detail: { moduleId, moduleData }
  }));
}

function setHAEditorSaveButtonDisabled(disabled) {
  try {
    // Path to the HA editor save button
    const saveButton = document.querySelector("body > home-assistant")
      ?.shadowRoot?.querySelector("hui-dialog-edit-card")
      ?.shadowRoot?.querySelector("ha-dialog > div:nth-child(4) > mwc-button:nth-child(2)");
    
    if (saveButton) {
      saveButton.style.display = disabled ? 'none' : '';
    }
  } catch (error) {
    //console.error("Error accessing HA editor save button:", error);
  }
}

// Renders the module editor form
export function renderModuleEditorForm(context) {
  if (!context._editingModule) {
    // Ensure the button is enabled if the editor is not shown
    setHAEditorSaveButtonDisabled(false); 
    return html``;
  }

  // Disable HA save button when module editor is active
  setHAEditorSaveButtonDisabled(true);

  // Check if module is from YAML file
  const isFromYamlFile = _isModuleInstalledViaYaml ? _isModuleInstalledViaYaml(context._editingModule.id) : false;

  // Apply styles in real-time
  const applyLiveStyles = (newCssCode) => {
    if (!context._editingModule || !context._config || isFromYamlFile) return;
    
    const moduleId = context._editingModule.id;
    
    // Save original module state if not already saved
    if (!context._originalModuleState) {
      const originalModule = yamlKeysMap.get(moduleId);
      if (originalModule) {
        context._originalModuleState = JSON.parse(JSON.stringify(originalModule));
      }
    }
    
    // Update code
    context._editingModule.code = newCssCode;
    
    // Reset style cache
    if (context.stylesYAML) {
      context.stylesYAML = null;
    }
    
    // Update yamlKeysMap
    const updatedModule = {
      ...yamlKeysMap.get(moduleId) || {},
      code: newCssCode,
      id: moduleId
    };
    yamlKeysMap.set(moduleId, updatedModule);
    
    // Add visual effect on editor
    const editorContainer = context.shadowRoot?.querySelector('.css-editor-container');
    if (editorContainer) {
      editorContainer.classList.add('applying-styles');
      setTimeout(() => {
        editorContainer.classList.remove('applying-styles');
      }, 300);
    }
    
    // Ensure module is enabled in configuration
    updateModuleInConfig(context, moduleId, context._previousModuleId);
    
    // Apply changes immediately
    refreshStyles(context);
    
    // Notify other card instances
    broadcastModuleUpdate(moduleId, updatedModule);
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

  // Update export preview content
  const updateExportPreview = (content) => {
    const previewContent = context.shadowRoot?.querySelector('#export-preview-content');
    if (previewContent) {
      previewContent.textContent = content;
      
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
    }
  };

  return html`
    <div class="module-editor-form">
        <div class="form-content">
          <h3>
            <ha-icon style="margin: 8px;" icon="${context._showNewModuleForm ? 'mdi:puzzle-plus-outline' : 'mdi:puzzle-edit-outline'}"></ha-icon>
            ${context._showNewModuleForm ? 'Create new Module' : 'Edit Module'}
          </h3>
          
          ${isFromYamlFile ? html`
            <div class="bubble-info warning">
              <h4 class="bubble-section-title">
                <ha-icon icon="mdi:file-document-alert"></ha-icon>
                Read-only Module
              </h4>
              <div class="content">
                <p>This Module is installed from a YAML file. You need to modify the <code>bubble-modules.yaml</code> 
                file directly, or remove it from your YAML file then import it here.</p>
              </div>
            </div>
          ` : ''}
          
          <ha-textfield
            label="Module ID"
            .value=${context._editingModule.id || ''}
            @input=${(e) => { 
              // Store old ID before changing
              const oldId = context._editingModule.id;
              
              // Update module ID
              context._editingModule.id = e.target.value; 
              
              // Update config modules list if creating new module
              if (context._showNewModuleForm && context._config.modules) {
                updateModuleInConfig(context, e.target.value, oldId);
                fireEvent(context, "config-changed", { config: context._config });
              }
            }}
            ?disabled=${!context._showNewModuleForm || isFromYamlFile}
          ></ha-textfield>
          <span class="helper-text">
            Must be unique and cannot be changed after the Module is created.
          </span>
          
          <ha-textfield
            label="Module Name"
            .value=${context._editingModule.name || ''}
            @input=${(e) => { context._editingModule.name = e.target.value; }}
            ?disabled=${isFromYamlFile}
          ></ha-textfield>
          
          <ha-textfield
            label="Version"
            .value=${context._editingModule.version || '1.0'}
            @input=${(e) => { context._editingModule.version = e.target.value; }}
            ?disabled=${isFromYamlFile}
          ></ha-textfield>
          
          <ha-textarea
            style="height: 120px;"
            label="Description (supports HTML/inline CSS)"
            .value=${context._editingModule.description || ''}
            @input=${(e) => { context._editingModule.description = e.target.value; }}
            ?disabled=${isFromYamlFile}
          ></ha-textarea>
          
          <ha-textfield
            label="Creator"
            .value=${context._editingModule.creator || ''}
            @input=${(e) => { context._editingModule.creator = e.target.value; }}
            ?disabled=${isFromYamlFile}
          ></ha-textfield>
          
          <ha-expansion-panel .header=${"Supported cards"}>
            <div>
              ${renderSupportedCardCheckboxes(context, isFromYamlFile)}
            </div>
          </ha-expansion-panel>
          
          <h4>
            <ha-icon icon="mdi:code-json"></ha-icon>
            Code (CSS/JS template)
          </h4>
          <div class="css-editor-container">
            <ha-code-editor
              class="${isFromYamlFile ? 'disabled' : ''}"
              mode="yaml"
              .value=${context._editingModule.code || ''}
              @value-changed=${(e) => applyLiveStyles(e.detail.value)}
              class="code-editor"
            ></ha-code-editor>
          </div>
          <span class="helper-text">
            More information and examples about the CSS and JS template possibilities can be found in the <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#styling" target="_blank">Styling and Templates documentation</a>. Tip: You can enlarge the editor by clicking on the panel title (Bubble Card configuration).
          </span>

          ${context.createErrorConsole(context)}
          
          <h4>
            <ha-icon icon="mdi:form-select"></ha-icon>
            Optional: Editor schema (YAML)
          </h4>
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
                }, 100); // Wait 1 second after the last modification
              }}
              class="code-editor"
            ></ha-code-editor>
          </div>
          <div class="bubble-info error" 
              style="display: ${!context._yamlErrorMessage ? 'none' : ''}">
              <h4 class="bubble-section-title">
                  <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                  Error in YAML schema
              </h4>
              <div class="content">
                  <pre style="margin: 0; white-space: pre-wrap; font-size: 12px;">${context._yamlErrorMessage ? context._yamlErrorMessage.charAt(0).toUpperCase() + context._yamlErrorMessage.slice(1) : ''}</pre>
              </div>
          </div>
          <span class="helper-text">
            This allows you to add a visual editor to your module. Learn about all available editor schema options in the <a href="https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md" target="_blank">editor schema documentation</a>.
          </span>
          
          ${context._editingModule.editor && Array.isArray(context._editingModule.editor) && context._editingModule.editor.length > 0 ? html`
            <div class="form-preview">
              <h4>Editor preview</h4>
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

          <ha-expansion-panel>
            <h4 slot="header">
                <ha-icon
                icon="mdi:export"
                ></ha-icon>
                Export Module
            </h4>
            <div class="content">
                <div class="export-section">
                    <div class="export-buttons">
                        <button class="icon-button" @click=${() => {
                        const yamlExport = generateYamlExport(context._editingModule);
                        copyToClipboard(context, yamlExport, "YAML format copied to clipboard!", updateExportPreview);
                        }}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        Copy YAML
                        </button>
                        
                        <button class="icon-button" @click=${() => {
                        const githubExport = generateGitHubExport(context._editingModule);
                        copyToClipboard(context, githubExport, "GitHub Discussion format copied to clipboard!", updateExportPreview);
                        }}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        Copy for GitHub
                        </button>
                        
                        <button class="icon-button" @click=${() => {
                        downloadModuleAsYaml(context, context._editingModule, updateExportPreview);
                        }}>
                        <ha-icon icon="mdi:file-download"></ha-icon>
                        Download YAML
                        </button>
                    </div>
                    
                    <div class="export-preview">
                        <ha-expansion-panel .header=${"Export preview"}>
                        <pre id="export-preview-content">Click on a button above to generate the preview</pre>
                        </ha-expansion-panel>
                    </div>

                    <div class="bubble-info">
                      <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Sharing your Module to the Store
                      </h4>
                      <div class="content">
                        <p>To share your Module to the Module Store, click on <strong>Copy for GitHub</strong> and paste the content in a new discussion in the
                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules" target="_blank">Share your Modules</a> category.
                        <strong>Edit the description</strong> (if needed), <strong>the example</strong> (for YAML users), and remember to <strong>include at least one screenshot</strong> for the Module Store.</strong></p>
                        <p><strong>Your Module becomes available right after that</strong> (after a Store refresh), so double-check that everything is correctly written and the Module is working as expected. You can of course edit/update the Module after it is shared.</p>
                      </div>
                    </div>
                </div>
            </div>
          </ha-expansion-panel>
          
          <div class="module-editor-buttons-container">
            <button class="icon-button" style="flex: 1;" @click=${() => {
              // Restore original module if canceling edit
              if (!context._showNewModuleForm && context._editingModule) {
                const moduleId = context._editingModule.id;
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
              
              // Reset editor state
              context._editingModule = null;
              context._showNewModuleForm = false;
              context._previousModuleId = null;
              // Re-enable HA save button on cancel
              setHAEditorSaveButtonDisabled(false); 
              context.requestUpdate();
              setTimeout(() => scrollToModuleForm(context), 0);
            }}>
              <ha-icon icon="mdi:close"></ha-icon>
              Cancel
            </button>
            
            <button class="icon-button ${isFromYamlFile ? 'disabled' : ''}" style="flex: 1;" @click=${() => {
              saveModule(context, context._editingModule);
              setTimeout(() => scrollToModuleForm(context), 0);
            }}>
              <ha-icon icon="mdi:content-save"></ha-icon>
              Save Module
            </button>
          </div>
        </div>
    </div>
  `;
}

// Function to render checkboxes for supported cards
function renderSupportedCardCheckboxes(context, isFromYamlFile = false) {
  // Map of available card types with friendly names
  const availableCardTypes = [
    { id: 'button', name: 'Button' }, 
    { id: 'calendar', name: 'Calendar' }, 
    { id: 'climate', name: 'Climate' }, 
    { id: 'cover', name: 'Cover' }, 
    { id: 'horizontal-buttons-stack', name: 'Horizontal buttons stack' }, 
    { id: 'media-player', name: 'Media player' }, 
    { id: 'pop-up', name: 'Pop-up' }, 
    { id: 'select', name: 'Select' }, 
    { id: 'separator', name: 'Separator' }
  ];
  
  // Initialize supported array if not exists
  if (!context._editingModule.supported) {
    context._editingModule.supported = [];
    
    // If module has legacy unsupported property, convert it to supported
    if (context._editingModule.unsupported && context._editingModule.unsupported.length > 0) {
      // All cards except those in unsupported are supported
      context._editingModule.supported = availableCardTypes
        .map(card => card.id)
        .filter(id => !context._editingModule.unsupported.includes(id));
    } else {
      // Default: all cards are supported if no 'unsupported' array exists
      context._editingModule.supported = availableCardTypes.map(card => card.id);
    }
  }
  
  return html`
    <div class="checkbox-grid">
      ${availableCardTypes.map(card => html`
        <ha-formfield label="${card.name}">
          <ha-checkbox
            .checked=${context._editingModule.supported.includes(card.id)}
            @change=${(e) => {
              if (isFromYamlFile) return;
              if (e.target.checked) {
                if (!context._editingModule.supported.includes(card.id)) {
                  context._editingModule.supported.push(card.id);
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
      Select the card types that this module supports.
    </div>
  `;
}

// Save a module (create new or update existing)
export async function saveModule(context, moduleData) {
  try {
    const moduleId = moduleData.id;
    const wasModuleEnabled = context._config.modules && context._config.modules.includes(moduleId);
    
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
    
    // Remove unsupported if supported is present (for backward compatibility)
    if (moduleData.supported && moduleData.unsupported) {
      delete moduleData.unsupported;
    }
    
    // Check if HA entity exists
    const entityId = 'sensor.bubble_card_modules';
    const entityExists = context.hass && context.hass.states && context.hass.states[entityId];

    // Create YAML structure
    const moduleObj = {};
    const moduleContent = { ...moduleData };
    
    // Remove id from internal structure as it becomes the key
    delete moduleContent.id;
    
    // Set the module object
    moduleObj[moduleData.id] = moduleContent;
    
    // Convert to YAML
    const yamlContent = jsyaml.dump(moduleObj, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      noCompatMode: true
    });
    
    // Create simplified module data for storage
    const simplifiedModuleData = {
      id: moduleData.id,
      yaml: yamlContent
    };
    
    // Save to localStorage
    try {
      let existingModules = {};
      const storedData = localStorage.getItem('bubble-card-modules');
      
      if (storedData && storedData.trim() !== '') {
        try {
          existingModules = JSON.parse(storedData);
        } catch (parseError) {
          console.warn("Error parsing stored modules, resetting storage:", parseError);
        }
      }
      
      if (!existingModules || typeof existingModules !== 'object') {
        existingModules = {};
      }
      
      existingModules[moduleData.id] = simplifiedModuleData;
      localStorage.setItem('bubble-card-modules', JSON.stringify(existingModules));
      console.info("Module saved locally in localStorage");
    } catch (storageError) {
      console.warn("localStorage storage error:", storageError);
    }
    
    // Extract metadata and update in yamlKeysMap
    const metadata = extractModuleMetadata(yamlContent, moduleData.id, {
      title: moduleData.name,
      defaultCreator: moduleData.creator
    });
    
    // Signal modules have been updated
    document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
    
    // Update yamlKeysMap
    yamlKeysMap.delete(moduleData.id);
    yamlKeysMap.set(moduleData.id, metadata);
    
    // Save to Home Assistant if entity exists
    if (entityExists) {
      await saveModuleToHomeAssistant(context, entityId, moduleData);
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

    // Force UI refresh
    forceUIRefresh(context);
    
    // Re-enable HA save button after successful save
    setHAEditorSaveButtonDisabled(false);
    
  } catch (error) {
    console.error("Error saving module:", error);
  }
}

// Save module to Home Assistant
async function saveModuleToHomeAssistant(context, entityId, moduleData) {
  try {
    const token = context.hass.auth.data.access_token;
    if (!token) {
      throw new Error("Authentication token not available");
    }
    
    const baseUrl = window.location.origin;
    
    const entityResponse = await fetch(`${baseUrl}/api/states/${entityId}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    
    if (entityResponse.ok) {
      const entityData = await entityResponse.json();
      let haModules = {};
      
      if (entityData.attributes && entityData.attributes.modules) {
        try {
          if (typeof entityData.attributes.modules === 'string') {
            haModules = JSON.parse(entityData.attributes.modules);
          } else {
            haModules = entityData.attributes.modules;
          }
        } catch (e) {
          console.warn("Error parsing modules from Home Assistant:", e);
        }
      }
      
      if (!haModules || typeof haModules !== 'object') {
        haModules = {};
      }
      
      // Special format for Home Assistant with direct content
      haModules[moduleData.id] = {
        id: moduleData.id,
        name: moduleData.name,
        version: moduleData.version,
        creator: moduleData.creator,
        description: moduleData.description,
        code: moduleData.code,
        editor: moduleData.editor,
        supported: moduleData.supported || [],
        // Maintain backward compatibility if necessary - only if supported doesn't exist
        ...(moduleData.supported ? {} : { unsupported: moduleData.unsupported || [] })
        // We only use specific properties to ensure that editor_raw is not included
      };
      
      // Send to Home Assistant
      context.hass.callWS({
        type: "fire_event",
        event_type: "bubble_card_update_modules",
        event_data: {
          modules: haModules,
          last_updated: new Date().toISOString()
        }
      }).catch(error => {
        console.error("Error firing event:", error);
      });
    }
  } catch (error) {
    console.error("Error saving module to Home Assistant:", error);
  }
}

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
  setHAEditorSaveButtonDisabled(true);
  
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
  // Check if HA entity exists
  const entityId = 'sensor.bubble_card_modules';
  const entityExists = context.hass && context.hass.states && context.hass.states[entityId];

  // Confirm deletion
  if (!confirm(`Are you sure you want to delete module "${moduleId}"?`)) {
    return;
  }
  
  try {
    // Remove from localStorage
    let existingModules = {};
    const storedData = localStorage.getItem('bubble-card-modules');
    
    if (storedData && storedData.trim() !== '') {
      try {
        existingModules = JSON.parse(storedData);
      } catch (parseError) {
        console.warn("Error parsing stored modules during deletion:", parseError);
      }
    }
    
    if (!existingModules || typeof existingModules !== 'object') {
      existingModules = {};
    }
    
    delete existingModules[moduleId];
    localStorage.setItem('bubble-card-modules', JSON.stringify(existingModules));
    
    // Remove from yamlKeysMap
    yamlKeysMap.delete(moduleId);
    
    // Force refresh
    document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
    
    // Update Home Assistant if entity exists
    if (entityExists) {
      await updateHomeAssistantModules(context, entityId, moduleId);
    }
    
    // Remove module from current config
    if (context._config && context._config.modules) {
      context._config.modules = context._config.modules.filter(id => id !== moduleId);
      fireEvent(context, "config-changed", { config: context._config });
      refreshStyles(context);
    }
    
    // Force UI refresh
    forceUIRefresh(context);
    
    // Re-enable HA save button after successful deletion
    setHAEditorSaveButtonDisabled(false);
    
  } catch (error) {
    console.error("Error deleting module:", error);
  }
}

// Update Home Assistant modules after deletion
async function updateHomeAssistantModules(context, entityId, moduleId) {
  try {
    const token = context.hass.auth.data.access_token;
    if (!token) {
      throw new Error("Authentication token not available");
    }
    
    const baseUrl = window.location.origin;
    
    const entityResponse = await fetch(`${baseUrl}/api/states/${entityId}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    
    if (entityResponse.ok) {
      const entityData = await entityResponse.json();
      let haModules = {};
      
      if (entityData.attributes && entityData.attributes.modules) {
        try {
          if (typeof entityData.attributes.modules === 'string') {
            haModules = JSON.parse(entityData.attributes.modules);
          } else {
            haModules = entityData.attributes.modules;
          }
        } catch (e) {
          console.warn("Error parsing modules from Home Assistant:", e);
        }
      }
      
      if (!haModules || typeof haModules !== 'object') {
        haModules = {};
      }
      
      // Remove module
      delete haModules[moduleId];
      
      // Update in Home Assistant
      context.hass.callWS({
        type: "fire_event",
        event_type: "bubble_card_update_modules",
        event_data: {
          modules: haModules,
          last_updated: new Date().toISOString()
        }
      }).catch(error => {
        console.error("Error firing event:", error);
      });
    }
  } catch (error) {
    console.error("Error updating Home Assistant entity:", error);
  }
}

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
      supported: ['button', 'calendar', 'climate', 'cover', 'horizontal-buttons-stack', 'media-player', 'pop-up', 'select', 'separator'],
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
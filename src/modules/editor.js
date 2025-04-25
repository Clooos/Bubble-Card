import { html } from 'lit';
import { fireEvent } from '../tools/utils.js';
import { yamlKeysMap, initializeModules } from '../tools/style-processor.js';
import { getTextFromMap } from './utils.js';
import { makeModuleStore } from './store.js';
import { 
  renderModuleEditorForm, 
  editModule, 
  deleteModule, 
  initModuleEditor 
} from './module-editor.js';
import { installManualModule } from './install.js';
import { checkModuleUpdates } from './store.js';
import { _isModuleInstalledViaYaml } from './store.js';
import { scrollToModuleForm } from './utils.js';

export function makeModulesEditor(context) {
  // Load modules if they haven't been loaded yet
  if (!context._modulesLoaded) {
    initializeModules(context).then(() => {
      context._modulesLoaded = true;
      context.requestUpdate();
    });
  }

  // Check if the sensor entity exists in Home Assistant
  const entityId = 'sensor.bubble_card_modules';
  const entityExists = context.hass && context.hass.states && context.hass.states[entityId];

  const resolvePath = (path, configData) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], configData);
  };

  // Add the 'default' key to the modules config to not have to enable it manually
  if (!context._config.modules) {
    // Ensure backward compatibility with betas
    context._config.modules = context._config.style_templates || ['default'];
    delete context._config.style_templates;

    fireEvent(context, "config-changed", { config: context._config });
    context.requestUpdate();
  }

  // Initialize module editor state
  initModuleEditor(context);

  // Check if the 'default' module exists, create it if it doesn't
  if (context._modulesLoaded && !yamlKeysMap.has('default') && entityExists) {
    // Create default module YAML content
    const defaultModuleYaml = `default:
  name: Default
  version: ''
  description: Empty and enabled by default. Add your custom styles and/or JS templates here to apply them to all cards by pressing the <ha-icon icon="mdi:pencil"></ha-icon> button above.
  code: '{}'
  `;
    
  // Install the default module
  installManualModule(context, defaultModuleYaml)
    .then(() => {
      console.info("Default module created automatically");
      context.requestUpdate();
    })
    .catch(error => {
      console.error("Error creating default module:", error);
    });
  }

  // Check for available module updates
  const moduleUpdates = checkModuleUpdates();

  const handleValueChanged = (event) => {
    const target = event.target;
    const value = target.configValue;
    const isChecked = target.checked;

    if (isChecked) {
      if (!context._config.modules.includes(value)) {
        context._config.modules = [...context._config.modules, value];
      }
    } else {
      context._config.modules = context._config.modules.filter((key) => key !== value);
    }

    fireEvent(context, "config-changed", { config: context._config });
    context.requestUpdate();
  };

  // Handler for manual module import
  const handleManualImport = async () => {
    try {
      const yamlContent = context._manualYamlContent;
      if (!yamlContent || yamlContent.trim() === '') {
        fireEvent(context, "bubble-card-error", { message: "No YAML content provided" });
        return;
      }
      
      await installManualModule(context, yamlContent);
      
      // Reset the form and close it
      context._showManualImportForm = false;
      context._manualYamlContent = '';
      context.requestUpdate();
    } catch (error) {
      console.error("Error installing manual module:", error);
    }
  };

  // Use "modules" as primary, fallback to "style_templates" for backward compatibility
  const modules = context._config.modules || context._config.style_templates || ['default'];

  return html`
    <ha-expansion-panel outlined>
      <h4 slot="header">
        <ha-icon icon="mdi:puzzle"></ha-icon>
        Modules
        ${moduleUpdates.hasUpdates && entityExists ? html`
          <span class="bubble-badge update-badge" style="margin-left: 8px; font-size: 0.8em; vertical-align: middle;">
            <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
            ${moduleUpdates.updateCount} update${moduleUpdates.updateCount > 1 ? 's' : ''} available
          </span>
        ` : ''}
      </h4>
      <div class="content">

        ${!entityExists ? html`
            <div class="bubble-info warning">
              <h4 class="bubble-section-title">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                Configuration required
              </h4>
              <div class="content">
                <p>The storage entity <code>sensor.bubble_card_modules</code> is not configured in your Home Assistant instance.</p>
                <hr />
                <p><b>To use the Module Store and the Module Editor, follow these steps:</b></p>

                <p>1. Add the following to your <code>configuration.yaml</code> file:</p>
                <code-block><pre>
# Storage for Bubble Card Modules
template:
  - trigger:
      - trigger: event
        event_type: bubble_card_update_modules
    sensor:
      - name: "Bubble Card Modules"
        state: "saved"
        icon: "mdi:puzzle"
        attributes:
          modules: "{{ trigger.event.data.modules }}"
          last_updated: "{{ trigger.event.data.last_updated }}"
                </pre></code-block>
                <p>2. Save the file and restart Home Assistant</p>
                <p>3. Enjoy the Module Store and the Module Editor!</p>
              </div>
            </div>
        ` : ''}

        <div id="module-editor-top-marker"></div>
        
        <ha-tabs
            .selected=${context._selectedModuleTab || 0}
            @selected-changed=${(e) => {
              context._selectedModuleTab = e.detail.value;
              context.requestUpdate();
              requestAnimationFrame(() => {
                scrollToModuleForm(context, false);
              });
            }}>
          <paper-tab>
            <ha-icon icon="mdi:puzzle-heart-outline" style="margin-right: 8px;"></ha-icon>
            My Modules
          </paper-tab>
          <paper-tab class="${!entityExists ? 'disabled' : ''}">
            <ha-icon icon="mdi:puzzle-plus-outline" style="margin-right: 8px;"></ha-icon>
            Module Store
          </paper-tab>
        </ha-tabs>

        ${context._selectedModuleTab === 0 ? html`
          ${context._showManualImportForm ? html`
            <div class="module-editor-form">
              <div class="card-content">
                <h3>
                    <ha-icon icon="mdi:code-json" style="margin: 8px;"></ha-icon>
                    Import Module from YAML
                </h3>
                <p style="margin-top: 0;">Paste the complete YAML code of the module:</p>
                
                <div class="css-editor-container" style="max-height: 500px; overflow: auto;">
                  <ha-code-editor
                    .value=${context._manualYamlContent || ''}
                    .mode=${'yaml'}
                    .autofocus=${true}
                    style="height: auto; max-width: 100%;"
                    @value-changed=${(e) => {
                      context._manualYamlContent = e.detail.value;
                    }}
                  ></ha-code-editor>
                </div>
                
                <div style="display: flex; gap: 8px; justify-content: flex-end;">
                  <button 
                    class="icon-button" 
                    style="flex: 1;"
                    @click=${() => {
                      context._showManualImportForm = false;
                      context.requestUpdate();
                    }}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                    Cancel
                  </button>
                  <button 
                    class="icon-button" 
                    style="flex: 1;"
                    @click=${handleManualImport}
                  >
                    <ha-icon icon="mdi:content-save"></ha-icon>
                    Import Module
                  </button>
                </div>
                <hr>
              </div>
            </div>
          ` : ''}

          ${context._showNewModuleForm || context._editingModule ? 
            renderModuleEditorForm(context) : 
            html`
            <!-- Installed Modules List -->
            ${Array.from(yamlKeysMap.keys()).sort((a, b) => {
              // Always put 'default' first
              if (a === 'default') return -1;
              if (b === 'default') return 1;
              // Keep the original order for other modules
              return 0;
            }).map((key) => {
              const {
                name: label,
                description,
                formSchema,
                supportedCards,
                unsupportedCard,
                creator,
                moduleLink,
                moduleVersion
              } = getTextFromMap(key);
              const isChecked = context._config.modules?.includes(key);
              
              // Use supportedCards if available, otherwise use unsupportedCards for backward compatibility
              const cardType = context._config.card_type ?? "";
              let unsupported = false;
              
              if (supportedCards && Array.isArray(supportedCards) && supportedCards.length > 0) {
                unsupported = !supportedCards.includes(cardType);
              } else {
                unsupported = unsupportedCard.includes(cardType);
              }
              
              const config = context._config[key];
              const processedFormSchema = (formSchema && formSchema.length > 0)
                ? context._getProcessedSchema(key, formSchema, config)
                : [];
              
              // Check if this module has an update
              const hasUpdate = moduleUpdates.modules.some(m => m.id === key) && entityExists;
              const moduleUpdate = hasUpdate ? moduleUpdates.modules.find(m => m.id === key) : null;

              return html`
                <ha-expansion-panel outlined class="${unsupported ? 'disabled' : ''}">
                  <h4 slot="header">
                    <ha-icon
                      icon="${isChecked ? 'mdi:puzzle-check' : 'mdi:puzzle-outline'}"
                      style="${isChecked ? 'opacity: 1; color: var(--info-color) !important;' : 'opacity: 0.3;'}"
                    ></ha-icon>
                    ${label}
                    ${hasUpdate ? html`
                      <span class="bubble-badge update-badge" style="margin-left: 8px; font-size: 0.8em; vertical-align: middle;">
                        <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                        Update: ${moduleUpdate.newVersion}
                      </span>
                    ` : ''}
                  </h4>
                  <div class="content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <ha-formfield class="apply-module-button" .label=${'Apply to this card'}>
                        <ha-switch
                          aria-label="Apply to this card"
                          .checked=${isChecked}
                          .configValue=${key}
                          @change=${handleValueChanged}
                        ></ha-switch>
                      </ha-formfield>
                      
                      <!-- Module Action Buttons -->
                      <div class="module-actions">
                        ${hasUpdate ? html`
                          <button 
                            class="icon-button update-button" 
                            style="margin: 0 24px;"
                            @click=${() => {
                              // Switch to store tab to update the module
                              context._selectedModuleTab = 1;
                              // Set search to module name for easy finding
                              context._storeSearchQuery = label;
                              context.requestUpdate();
                            }} 
                            title="Update Module"
                          >
                            <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                            Update
                          </button>
                        ` : ''}
                        <button class="icon-button" @click=${() => editModule(context, key)} title="Edit Module">
                          <ha-icon icon="mdi:pencil"></ha-icon>
                        </button>
                        ${(() => {
                          const isFromYamlFile = _isModuleInstalledViaYaml ? _isModuleInstalledViaYaml(key) : false;
                          // Do not display the delete button for YAML modules or the default module
                          return !isFromYamlFile && key !== 'default' ? html`
                            <button class="icon-button" @click=${() => deleteModule(context, key)} title="Delete Module">
                              <ha-icon icon="mdi:delete"></ha-icon>
                            </button>
                          ` : '';
                        })()}
                      </div>
                    </div>
                    <hr>

                    <!-- Form init to fix conditional selectors -->
                    <ha-form
                      style="display: none"
                      .hass=${context.hass}
                      .schema=${[{ selector: { entity: { domain: ["input_number"] }}}]}
                    ></ha-form>

                    ${formSchema.length > 0
                      ? html`
                        <h4 class="${!isChecked ? 'disabled' : ''}">
                          <ha-icon icon="mdi:cog"></ha-icon>
                          Configuration
                        </h4>
                        <ha-form
                          class="${!isChecked ? 'disabled' : ''}"
                          .hass=${context.hass}
                          .data=${config}
                          .schema=${processedFormSchema}
                          .computeLabel=${context._computeLabelCallback}
                          .disabled=${!isChecked}
                          @value-changed=${(e) =>
                            context._valueChangedInHaForm(e, key, formSchema)
                          }
                        ></ha-form>
                        <hr>
                      `
                      : ''}

                    <div class="bubble-info" style="display: ${!description ? 'none' : ''}">
                      <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                          About this module
                      </h4>
                      <div class="content">
                        ${html`<span .innerHTML=${description}></span>`}
                      </div>
                    </div>

                    ${creator || moduleLink || moduleVersion
                      ? html`
                        <h4 class="version module-version">
                          ${creator ? `Created by ${creator}` : ''}
                          <span class="version-number">
                            ${moduleLink ? html`<a href="${moduleLink}" target="_blank" rel="noopener noreferrer">Module link</a> • ` : ''}
                            ${moduleVersion || ''}
                          </span>
                        </h4>
                        `
                      : ''}
                  </div>
                </ha-expansion-panel>
              `;
            })}
            ${context.createErrorConsole(context)}
          `}

          <hr>
          ${!context._showNewModuleForm && !context._editingModule && entityExists ? html`
          <div class="module-editor-buttons-container" style="display: flex;">
            <button class="icon-button" style="flex: 1;" @click=${() => {
              context._showNewModuleForm = true;
              context._showManualImportForm = false;
              
              // Get a unique ID for the new module
              if (context._generateUniqueModuleId) {
                context._newModuleTemplate.id = context._generateUniqueModuleId('my_module');
              }
              
              context._editingModule = { ...context._newModuleTemplate };
              
              // Prepare modules in configuration if they don't exist
              if (!context._config.modules) {
                context._config.modules = context._config.style_templates || ['default'];
              }
              
              // Add temporarily the module to the list of active modules
              // We use the ID of the template to start, it will be updated if the user changes it
              if (!context._config.modules.includes(context._editingModule.id)) {
                context._config.modules = [...context._config.modules, context._editingModule.id];
                
                // Notify the change to apply styles in real-time
                fireEvent(context, "config-changed", { config: context._config });
              }
              
              context.requestUpdate();
              
              setTimeout(() => scrollToModuleForm(context), 0);
            }}>
              <ha-icon icon="mdi:puzzle-plus"></ha-icon>
              Create new Module
            </button>
            
            <button class="icon-button" style="flex: 1;" @click=${() => {
              context._showManualImportForm = true;
              context._showNewModuleForm = false;
              context._manualYamlContent = '';
              context.requestUpdate();
              
              setTimeout(() => scrollToModuleForm(context), 0);
            }}>
              <ha-icon icon="mdi:code-json"></ha-icon>
              Import from YAML
            </button>
          </div>
          ` : ''}
        ` : makeModuleStore(context)}

        <div class="bubble-info">
          <h4 class="bubble-section-title">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            Modules
          </h4>
          <div class="content">
            <p>Modules are really powerful and the best way to apply <a href="https://github.com/Clooos/Bubble-Card#styling" target="_blank" rel="noopener noreferrer">custom styles</a> and/or <a href="https://github.com/Clooos/Bubble-Card#templates" target="_blank" rel="noopener noreferrer">JS templates</a> to your cards, without having to copy/paste the same code over and over again.</p>
            <p>This makes it easy to change things like the styles of all your cards, and for advanced users, to modify or add features with a real editor.</p>
            <p><b>If coding isn't your thing</b>, you can also find and install modules made by the community in the <b>Module Store</b>.</p>
          </div>
        </div>
      </div>
    </ha-expansion-panel>
  `;
}
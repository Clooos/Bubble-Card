import { html } from 'lit';
import { fireEvent } from '../tools/utils.js';
import { yamlKeysMap, initializeModules } from './registry.js';
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
import { getLazyLoadedPanelContent, renderDropdown } from '../editor/utils.js';
import { ensureBCTProviderAvailable, isBCTAvailableSync, writeModuleYaml, getAllModulesLastModified } from './bct-provider.js';

// Storage sensor entity ID for Bubble Card modules
const MODULES_SENSOR_ENTITY_ID = 'sensor.bubble_card_modules';

// Ordered identifiers used for the module editor tabs
const MODULE_TAB_IDS = ['modules', 'store'];
const BCT_CHECK_RETRY_MS = 5000;
const FORCE_UNSUPPORTED_STORAGE_KEY = 'bubble-card-force-unsupported-modules';

// Function to detect if sl-tab-group is available in the current HA version
function isSlTabGroupAvailable() {
  return typeof customElements !== 'undefined' && 
         customElements.get('sl-tab-group') !== undefined;
}

// Detect if the new ha-tab-group component is available
function isHaTabGroupAvailable() {
  return typeof customElements !== 'undefined' &&
         customElements.get('ha-tab-group') !== undefined &&
         customElements.get('ha-tab-group-tab') !== undefined;
}

// Select the tab implementation the editor should render
function getTabImplementation() {
  // Prefer the new HA tabs when available
  if (isHaTabGroupAvailable()) {
    return 'ha-tab-group';
  }

  if (isSlTabGroupAvailable()) {
    return 'sl-tab-group';
  }

  return 'ha-tabs';
}

// Validate the storage entity used to persist modules
// This ensures the warning stays visible until the configuration is complete and usable
function getModulesStorageStatus(hass) {
  // Validate Home Assistant object
  const status = {
    entityFound: false,
    hasAttributes: false,
    hasModulesAttribute: false,
    modulesIsObject: false,
    hasLastUpdated: false,
    isReady: false,
  };

  if (!hass || !hass.states) {
    return status;
  }

  const entity = hass.states[MODULES_SENSOR_ENTITY_ID];

  if (!entity) {
    return status;
  }

  status.entityFound = true;

  const attributes = entity.attributes || {};
  status.hasAttributes = !!entity.attributes;

  if ('modules' in attributes) {
    status.hasModulesAttribute = true;
    status.modulesIsObject = attributes.modules !== null && typeof attributes.modules === 'object';
  }

  if ('last_updated' in attributes) {
    status.hasLastUpdated = typeof attributes.last_updated === 'string' && attributes.last_updated.length > 0;
  }

  status.isReady = status.entityFound && status.hasModulesAttribute && status.modulesIsObject && status.hasLastUpdated;

  return status;
}

export async function setModuleGlobalStatus(context, moduleId, isGlobal) {
  try {
    if (!context.hass) return false;

    // Use Bubble Card Tools file persistence; no writes to legacy entity
    const available = await ensureBCTProviderAvailable(context.hass);
    if (!available) {
      console.warn("Bubble Card Tools is required to change global status.");
      return false;
    }

    const current = yamlKeysMap.get(moduleId) || {};
    const updated = { ...current };
    if (isGlobal === true) {
      updated.is_global = true;
    } else {
      delete updated.is_global;
    }
    yamlKeysMap.set(moduleId, updated);

    // Persist to file
    await writeModuleYaml(context.hass, moduleId, updated);
    document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
    return true;
  } catch (error) {
    console.error("Error setting module global status:", error);
    return false;
  }
}

export function isModuleGlobal(moduleId, hass) {
  try {
    // Prefer file-based flag
    const local = yamlKeysMap.get(moduleId);
    if (local && typeof local === 'object' && local.is_global === true) return true;
    // If Bubble Card Tools is available (post-migration), do not use the legacy entity at all
    if (isBCTAvailableSync && isBCTAvailableSync()) return false;
    // Fallback to legacy entity attribute (read-only) when BCT is not available
    if (!hass || !hass.states || !hass.states[MODULES_SENSOR_ENTITY_ID]) return false;
    const entity = hass.states[MODULES_SENSOR_ENTITY_ID];
    if (!entity.attributes || !entity.attributes.modules) return false;
    const mod = entity.attributes.modules[moduleId];
    return mod && mod.is_global === true;
  } catch (error) {
    console.warn(`Error checking if module ${moduleId} is global:`, error);
    return false;
  }
}

export function shouldApplyModule(context, moduleId) {
  // Get the configured modules from the card config
  const configModules = context._config?.modules || [];
  
  // Convert to array if it's a string
  const modulesList = Array.isArray(configModules) ? configModules : [configModules];
  
  // Check if the module is explicitly excluded with !moduleId syntax
  if (modulesList.includes(`!${moduleId}`)) {
    return false;
  }
  
  // Check if the module is explicitly included in the card's config
  if (modulesList.includes(moduleId)) {
    return true;
  }
  
  // Check if it's a global module
  return isModuleGlobal(moduleId, context.hass);
}

function _getFilteredAndSortedModules(context) {
  if (!yamlKeysMap || yamlKeysMap.size === 0) return [];
  
  let modules = Array.from(yamlKeysMap.keys());
  
  // Filter by search query
  const searchQuery = context._myModulesSearchQuery;
  if (searchQuery && searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    modules = modules.filter(key => {
      const moduleData = getTextFromMap(key);
      const name = (moduleData.name || key).toLowerCase();
      const description = (moduleData.description || '').toLowerCase();
      const creator = (moduleData.creator || '').toLowerCase();
      return name.includes(query) || description.includes(query) || creator.includes(query);
    });
  }
  
  // Sort modules - load from localStorage or use 'default' as default
  if (!context._myModulesSortOrder) {
    try {
      const savedOrder = localStorage.getItem('bubble-card-modules-sort-order');
      context._myModulesSortOrder = savedOrder || 'default';
    } catch (e) {
      context._myModulesSortOrder = 'default';
    }
  }
  const sortOrder = context._myModulesSortOrder || 'default';
  
  // Load all timestamps once for performance (single cache access)
  const lastModifiedMap = getAllModulesLastModified();
  const getTimestamp = (moduleId) => {
    const lastModified = lastModifiedMap.get(moduleId);
    if (!lastModified) return 0;
    const timestamp = new Date(lastModified).getTime();
    return isNaN(timestamp) ? 0 : timestamp;
  };
  
  modules.sort((a, b) => {
    // Always put 'default' first regardless of sort order
    if (a === 'default') return -1;
    if (b === 'default') return 1;
    
    const moduleA = getTextFromMap(a);
    const moduleB = getTextFromMap(b);
    const isActiveA = shouldApplyModule(context, a);
    const isActiveB = shouldApplyModule(context, b);
    
    switch (sortOrder) {
      case 'alphabetical':
        return (moduleA.name || a).localeCompare(moduleB.name || b, undefined, { sensitivity: 'base' });
      
      case 'default':
        if (isActiveA !== isActiveB) {
          return isActiveA ? -1 : 1;
        }
        // Within active/inactive groups, sort by last modified (most recent first)
        const timestampA = getTimestamp(a);
        const timestampB = getTimestamp(b);
        if (timestampA !== timestampB && timestampA > 0 && timestampB > 0) {
          return timestampB - timestampA; // Most recent first
        }
        return (moduleA.name || a).localeCompare(moduleB.name || b, undefined, { sensitivity: 'base' });
      
      case 'recent-first':
        const recentTimestampA = getTimestamp(a);
        const recentTimestampB = getTimestamp(b);
        if (recentTimestampA !== recentTimestampB && recentTimestampA > 0 && recentTimestampB > 0) {
          return recentTimestampB - recentTimestampA; // Most recent first
        }
        // If no timestamp available, fall back to alphabetical
        return (moduleA.name || a).localeCompare(moduleB.name || b, undefined, { sensitivity: 'base' });
      
      default:
        // Fallback to default sort (active first)
        if (isActiveA !== isActiveB) {
          return isActiveA ? -1 : 1;
        }
        const fallbackTimestampA = getTimestamp(a);
        const fallbackTimestampB = getTimestamp(b);
        if (fallbackTimestampA !== fallbackTimestampB && fallbackTimestampA > 0 && fallbackTimestampB > 0) {
          return fallbackTimestampB - fallbackTimestampA;
        }
        return (moduleA.name || a).localeCompare(moduleB.name || b, undefined, { sensitivity: 'base' });
    }
  });
  
  return modules;
}

export function makeModulesEditor(context) {
  if (typeof context._selectedModuleTab === 'undefined') {
    context._selectedModuleTab = 0;
  }

  // Initialize state for expanded panels if it doesn't exist
  if (typeof context._expandedPanelStates === 'undefined') {
    context._expandedPanelStates = {};
  }

  // Initialize sort order from localStorage
  if (typeof context._myModulesSortOrder === 'undefined') {
    try {
      const savedOrder = localStorage.getItem('bubble-card-modules-sort-order');
      context._myModulesSortOrder = savedOrder || 'default';
    } catch (e) {
      context._myModulesSortOrder = 'default';
    }
  }

  // Ensure sort order is always defined
  const currentSortOrder = context._myModulesSortOrder || 'default';

  if (typeof context._forceUnsupportedModules === 'undefined') {
    try {
      const storedValue = localStorage.getItem(FORCE_UNSUPPORTED_STORAGE_KEY);
      context._forceUnsupportedModules = storedValue === 'true';
    } catch (err) {
      context._forceUnsupportedModules = false;
    }
  }

  const tabGroupId = "bubble-card-module-editor-tab-group";

  // Load modules if they haven't been loaded yet
  if (!context._modulesLoaded) {
    initializeModules(context).then(() => {
      context._modulesLoaded = true;
      // Do not consult legacy entity after migration/BCT availability
      // Legacy bootstrapping only if BCT is not available
      if (!isBCTAvailableSync || !isBCTAvailableSync()) {
        const storageStatusAfterInit = getModulesStorageStatus(context.hass);
        if (storageStatusAfterInit.isReady) {
          const modulesData = context.hass.states[MODULES_SENSOR_ENTITY_ID].attributes.modules;
          if (modulesData && modulesData.default && modulesData.default.is_global !== true) {
            setModuleGlobalStatus(context, 'default', true).then(success => {
              if (success) {
                document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
              } else {
                console.warn(`Failed to set module 'default' to global in ${MODULES_SENSOR_ENTITY_ID}.`);
              }
            });
          }
        }
      }
      context.requestUpdate();
    });
  }

  // Resolve Bubble Card Tools availability for persistence
  const bctAvailable = isBCTAvailableSync();

  if (context._bctRetryHandle && bctAvailable) {
    clearTimeout(context._bctRetryHandle);
    context._bctRetryHandle = null;
  }

  // Only trigger check if BCT is not available AND we haven't checked yet, or if check failed and retry delay expired
  if (context.hass && !bctAvailable && !context._bctCheckAttempted) {
    const now = Date.now();
    const lastCheck = context._lastBctCheckAt ?? 0;
    const elapsed = lastCheck ? now - lastCheck : Infinity;
    const withinThrottle = lastCheck && elapsed < BCT_CHECK_RETRY_MS;

    if (!context._bctCheckInFlight && !withinThrottle) {
      if (context._bctRetryHandle) {
        clearTimeout(context._bctRetryHandle);
        context._bctRetryHandle = null;
      }
      context._bctCheckInFlight = true;
      context._bctCheckAttempted = true;
      context._lastBctCheckAt = now;
      ensureBCTProviderAvailable(context.hass)
        .finally(() => {
          context._bctCheckInFlight = false;
          context.requestUpdate();
        });
    } else if (withinThrottle && !context._bctRetryHandle) {
      const waitMs = Math.max(50, BCT_CHECK_RETRY_MS - elapsed);
      context._bctRetryHandle = setTimeout(() => {
        context._bctRetryHandle = null;
        context.requestUpdate();
      }, waitMs);
    }
  } else if (context.hass && bctAvailable && !context._bctCheckAttempted) {
    // If BCT is available but we haven't marked as attempted, do a background check to confirm
    // This ensures the cache is properly initialized
    if (!context._bctCheckInFlight) {
      context._bctCheckInFlight = true;
      context._bctCheckAttempted = true;
      ensureBCTProviderAvailable(context.hass)
        .finally(() => {
          context._bctCheckInFlight = false;
          // Only update if status changed
          if (isBCTAvailableSync() !== bctAvailable) {
            context.requestUpdate();
          }
        });
    }
  }

  // No bootstrap of legacy sensor anymore

  const resolvePath = (path, configData) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], configData);
  };

  // Initialize module editor state
  initModuleEditor(context);

  // Ensure _workingModuleConfigs exists on context
  if (!context._workingModuleConfigs) {
    context._workingModuleConfigs = {};
  }

  // Check if the 'default' module exists, create it if it doesn't (files only)
  if (context._modulesLoaded && !yamlKeysMap.has('default') && bctAvailable) {
    // Create default module YAML content
    const defaultModuleYaml = `default:
  name: Default
  version: ''
  description: Empty and enabled by default. Add your custom styles and/or JS templates here to apply them to all cards by pressing the <ha-icon icon="mdi:pencil"></ha-icon> button above.
  code: ''
  is_global: true
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
    const moduleId = target.configValue;
    const switchToOn = target.checked;
    
    // Ensure context._config.modules is an array
    context._config.modules = Array.isArray(context._config.modules) ? context._config.modules : [];

    // Check if the module is global
    const moduleIsCurrentlyGlobal = isModuleGlobal(moduleId, context.hass);

    if (switchToOn) {
      // Turning "Apply to this card" ON
      // Remove any explicit exclusion `!moduleId`
      context._config.modules = context._config.modules.filter(item => item !== `!${moduleId}`);
      
      // If the module is NOT global, and not already in modules, add it explicitly
      if (!moduleIsCurrentlyGlobal) {
        if (!context._config.modules.includes(moduleId)) {
          context._config.modules = [...context._config.modules, moduleId];
        }
      }
      // If it IS global, we don't need to add it to _config.modules for it to be active.
      // Removing `!${moduleId}` ensures it's not actively excluded.
    } else {
      // Turning "Apply to this card" OFF
      if (moduleIsCurrentlyGlobal) {
        // If it's global and we're turning it off for this card, add explicit exclusion `!moduleId`
        if (!context._config.modules.includes(`!${moduleId}`)) {
          context._config.modules = [...context._config.modules, `!${moduleId}`];
        }
        // And remove any direct inclusion `moduleId` if it exists
        context._config.modules = context._config.modules.filter(item => item !== moduleId);
      } else {
        // Not global, just remove direct inclusion `moduleId`
        context._config.modules = context._config.modules.filter(item => item !== moduleId);
      }
    }

    // Track recently toggled module for smooth UX when sorting by "default"
    const sortOrder = context._myModulesSortOrder || 'default';
    const wasExpanded = context._expandedPanelStates?.[moduleId] === true;
    
    if (sortOrder === 'default') {
      context._recentlyToggledModuleId = moduleId;
      // Preserve expansion state for the toggled module
      if (wasExpanded) {
        context._expandedPanelStates = context._expandedPanelStates || {};
        context._expandedPanelStates[moduleId] = true;
      }
      // Clear the highlight after animation completes
      setTimeout(() => {
        context._recentlyToggledModuleId = null;
        context.requestUpdate();
      }, 2000);
    }

    fireEvent(context, "config-changed", { config: context._config });
    context.requestUpdate();
    
    // Scroll to the module after update if sorting by default
    if (sortOrder === 'default' && switchToOn) {
      // Use double requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const modulePanel = context.shadowRoot?.querySelector(`ha-expansion-panel[data-module-id="${moduleId}"]`);
          if (modulePanel) {
            // Restore expansion state if it was expanded
            if (wasExpanded && !modulePanel.expanded) {
              modulePanel.expanded = true;
            }
            
            // Check if element is already visible in viewport
            const rect = modulePanel.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            
            if (!isVisible) {
              modulePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });
    }
  };

  // Handler for toggling global module status
  const handleGlobalToggle = async (moduleId, desiredGlobalState) => {
    const success = await setModuleGlobalStatus(context, moduleId, desiredGlobalState);
    if (success) {
      if (desiredGlobalState === true) {
        // If making module global, remove any explicit local exclusion for this card
        context._config.modules = Array.isArray(context._config.modules) ? context._config.modules.filter(
          (item) => item !== `!${moduleId}`
        ) : [];
      }
      // If making it not global, its application to this card will be determined by `shouldApplyModule`
      // which re-evaluates on requestUpdate.

      fireEvent(context, "config-changed", { config: context._config });
      context.requestUpdate();
      // Adding a slight delay for the second update to allow HA state to propagate
      setTimeout(() => context.requestUpdate(), 100); 
    }
  };

  // Handler for tab change event
  const handleTabChange = (e) => {
    const tabVariant = getTabImplementation();
    let selectedTab;

    if (tabVariant === 'sl-tab-group') {
      const rawValue = e?.detail?.name ?? e?.target?.activeTab ?? e?.detail?.value;
      selectedTab = parseInt(rawValue, 10);
    } else if (tabVariant === 'ha-tab-group') {
      const detail = e?.detail ?? {};
      const eventTarget = detail.tab ?? detail.target ?? detail.item;
      const derivedPanel = eventTarget?.getAttribute ? eventTarget.getAttribute('panel') : undefined;
      const panel = detail.panel ?? detail.tabId ?? derivedPanel ?? detail.value ?? e?.target?.activePanel ?? e?.target?.activeTab;

      if (typeof panel === 'number') {
        selectedTab = panel;
      } else if (typeof panel === 'string') {
        const mappedIndex = MODULE_TAB_IDS.indexOf(panel);
        selectedTab = mappedIndex !== -1 ? mappedIndex : parseInt(panel, 10);
      }
    } else {
      selectedTab = e?.detail?.value ?? e?.target?.selected;
    }

    if (!Number.isFinite(selectedTab)) {
      selectedTab = 0;
    }

    context._selectedModuleTab = selectedTab;
    context.requestUpdate();
    requestAnimationFrame(() => {
      scrollToModuleForm(context, false);
    });
  };

  // Handler for manual module import
  const handleManualImport = async () => {
    try {
      const yamlContent = context._manualYamlContent;
      if (!yamlContent || yamlContent.trim() === '') {
        fireEvent(context, "bubble-card-error", { message: "No YAML content provided" });
        return;
      }
      
      const result = await installManualModule(context, yamlContent);
      
      // Reset the form and close it
      context._showManualImportForm = false;
      context._manualYamlContent = '';
      
      if (result && result.moduleId) {
        context._recentlyToggledModuleId = result.moduleId;
        
        setTimeout(() => {
          context._recentlyToggledModuleId = null;
          context.requestUpdate();
        }, 2000);
      }

      context.requestUpdate();
      
      if (result && result.moduleId) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const modulePanel = context.shadowRoot?.querySelector(`ha-expansion-panel[data-module-id="${result.moduleId}"]`);
            if (modulePanel) {
              modulePanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          });
        });
      }
    } catch (error) {
      console.error("Error installing manual module:", error);
    }
  };

  // Render the appropriate tab component based on availability
  const renderTabs = () => {
    const tabVariant = getTabImplementation();
    const selectedTab = context._selectedModuleTab || 0;
    const selectedPanel = MODULE_TAB_IDS[selectedTab] ?? selectedTab.toString();

    const handleHaTabNavClick = (panelId) => {
      const idx = MODULE_TAB_IDS.indexOf(panelId);
      context._selectedModuleTab = idx !== -1 ? idx : parseInt(panelId, 10) || 0;
      context.requestUpdate();
      requestAnimationFrame(() => scrollToModuleForm(context, false));
    };

    if (tabVariant === 'ha-tab-group') {
      return html`
        <ha-tab-group
          id="${tabGroupId}"
          .activePanel=${selectedPanel}
          @wa-tab-show=${handleTabChange}
          @active-panel-changed=${handleTabChange}
          >
          <ha-tab-group-tab
            slot="nav"
            panel=${MODULE_TAB_IDS[0]}
            .active=${selectedPanel === MODULE_TAB_IDS[0]}
            @click=${() => handleHaTabNavClick(MODULE_TAB_IDS[0])}
          >
            <ha-icon icon="mdi:puzzle-heart-outline" style="margin-right: 8px;"></ha-icon>
            My Modules
          </ha-tab-group-tab>
            <ha-tab-group-tab
            slot="nav"
            panel=${MODULE_TAB_IDS[1]}
              .active=${selectedPanel === MODULE_TAB_IDS[1]}
              ?disabled=${!bctAvailable}
            @click=${() => handleHaTabNavClick(MODULE_TAB_IDS[1])}
          >
            <ha-icon icon="mdi:puzzle-plus-outline" style="margin-right: 8px;"></ha-icon>
            Module Store
          </ha-tab-group-tab>
        </ha-tab-group>
      `;
    }

    if (tabVariant === 'sl-tab-group') {
      return html`
        <sl-tab-group
          id="${tabGroupId}"
          .selected=${selectedTab.toString()}
          @sl-tab-show=${handleTabChange}
        >
          <sl-tab slot="nav" panel="0">
            <ha-icon icon="mdi:puzzle-heart-outline" style="color: inherit !important; margin-right: 8px;"></ha-icon>
            My Modules
          </sl-tab>
          <sl-tab slot="nav" panel="1" ?disabled=${!bctAvailable}>
            <ha-icon icon="mdi:puzzle-plus-outline" style="color: inherit !important; margin-right: 8px;"></ha-icon>
            Module Store
          </sl-tab>
          <sl-tab-panel name="0"></sl-tab-panel>
          <sl-tab-panel name="1"></sl-tab-panel>
        </sl-tab-group>
      `;
    }

    return html`
      <ha-tabs
        .selected=${selectedTab}
        @selected-changed=${handleTabChange}
      >
        <paper-tab>
          <ha-icon icon="mdi:puzzle-heart-outline" style="margin-right: 8px;"></ha-icon>
          My Modules
        </paper-tab>
        <paper-tab class="${!bctAvailable ? 'disabled' : ''}" ?disabled=${!bctAvailable}>
          <ha-icon icon="mdi:puzzle-plus-outline" style="margin-right: 8px;"></ha-icon>
          Module Store
        </paper-tab>
      </ha-tabs>
    `;
  };

  const templateResult = html`
    <ha-expansion-panel outlined>
      <h4 slot="header">
        <ha-icon icon="mdi:puzzle"></ha-icon>
        Modules
        ${moduleUpdates.hasUpdates && bctAvailable ? html`
          <span class="bubble-badge update-badge" style="margin-left: 8px; font-size: 0.8em; vertical-align: middle; z-index: 7;">
            <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
            ${moduleUpdates.updateCount} update${moduleUpdates.updateCount > 1 ? 's' : ''} available
          </span>
        ` : ''}
      </h4>
      <div class="content" style="margin: -8px 4px 14px 4px;">
        ${!bctAvailable ? html`
            <div class="bubble-info warning">
              <h4 class="bubble-section-title">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                Bubble Card Tools required
              </h4>
              <div class="content">
                ${ (yamlKeysMap && yamlKeysMap.size > 0) || (context.hass && context.hass.states && context.hass.states[MODULES_SENSOR_ENTITY_ID]) ? html`
                  <p><b>Since v3.1.0, to install, edit or delete modules, and to use the Module Store, please install <a href="https://github.com/Clooos/Bubble-Card-Tools" target="_blank" rel="noopener noreferrer">Bubble Card Tools</a> (everything is explained there).</b></p>
                  <p>Your existing modules will be automatically migrated once Bubble Card Tools is installed.</p>
                ` : html`
                  <p><b>No modules detected yet.</b> To create and manage modules and to use the Module Store, please install <a href="https://github.com/Clooos/Bubble-Card-Tools" target="_blank" rel="noopener noreferrer">Bubble Card Tools</a> (everything is explained there).</p>
                `}
              </div>
            </div>
        ` : ''}

        <div id="module-editor-top-marker"></div>
        
        ${renderTabs()}

        ${context._selectedModuleTab === 0 || !bctAvailable ? html`
          ${context._showManualImportForm ? html`
            <div class="module-editor-form">
              <div class="card-content">
                <h3>
                    <ha-icon icon="mdi:code-json" style="margin: 8px;"></ha-icon>
                    Import Module from YAML
                </h3>
                <p style="margin-top: 0;">Paste the complete YAML code of the module:</p>
                
                <div class="css-editor-container">
                  <ha-code-editor
                    .value=${context._manualYamlContent || ''}
                    .mode=${'yaml'}
                    .autofocus=${true}
                    @value-changed=${(e) => {
                      context._manualYamlContent = e.detail.value;
                    }}
                  ></ha-code-editor>
                </div>
                
                <div class="module-editor-buttons-container">
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
              </div>
            </div>
          ` : (context._showNewModuleForm || context._editingModule ? 
            renderModuleEditorForm(context) : 
            html`
            <!-- Search and Sort Controls -->
            <div class="my-modules-controls">
              <div class="my-modules-top-row">
                <div class="my-modules-search">
                  <ha-textfield
                    label="Search modules"
                    icon
                    .value=${context._myModulesSearchQuery || ''}
                    @input=${(e) => {
                      context._myModulesSearchQuery = e.target.value;
                      context.requestUpdate();
                    }}
                  >
                    <slot name="prefix" slot="leadingIcon">
                      <ha-icon slot="prefix" icon="mdi:magnify"></ha-icon>
                    </slot>
                  </ha-textfield>
                </div>
                <div class="my-modules-sort-menu">
                  ${renderDropdown({
                    trigger: html`
                      <mwc-icon-button slot="trigger" class="icon-button header sort-trigger" title="Sort modules">
                        <ha-icon icon="mdi:sort"></ha-icon>
                      </mwc-icon-button>
                    `,
                    items: [
                      { 
                        type: 'checkbox',
                        icon: 'mdi:check-circle', 
                        label: 'Active and recent first',
                        checked: currentSortOrder === 'default',
                        onClick: (e) => {
                          e.stopPropagation();
                          context._myModulesSortOrder = 'default';
                          try {
                            localStorage.setItem('bubble-card-modules-sort-order', 'default');
                          } catch (err) {}
                          context.requestUpdate();
                        }
                      },
                      { 
                        type: 'checkbox',
                        icon: 'mdi:sort-alphabetical-ascending', 
                        label: 'Alphabetical',
                        checked: currentSortOrder === 'alphabetical',
                        onClick: (e) => {
                          e.stopPropagation();
                          context._myModulesSortOrder = 'alphabetical';
                          try {
                            localStorage.setItem('bubble-card-modules-sort-order', 'alphabetical');
                          } catch (err) {}
                          context.requestUpdate();
                        }
                      },
                      { 
                        type: 'checkbox',
                        icon: 'mdi:clock-outline', 
                        label: 'Recent first',
                        checked: currentSortOrder === 'recent-first',
                        onClick: (e) => {
                          e.stopPropagation();
                          context._myModulesSortOrder = 'recent-first';
                          try {
                            localStorage.setItem('bubble-card-modules-sort-order', 'recent-first');
                          } catch (err) {}
                          context.requestUpdate();
                        }
                      }
                    ]
                  })}
                </div>
              </div>
              <ha-formfield label="Enable unsupported modules">
                <ha-switch
                  .checked=${!!context._forceUnsupportedModules}
                  @change=${(e) => {
                    const nextValue = e.target.checked;
                    context._forceUnsupportedModules = nextValue;
                    try {
                      localStorage.setItem(FORCE_UNSUPPORTED_STORAGE_KEY, nextValue ? 'true' : 'false');
                    } catch (err) {}
                    context.requestUpdate();
                  }}
                ></ha-switch>
              </ha-formfield>
              ${context._forceUnsupportedModules ? html`
                <div class="bubble-info warning unsupported-modules-warning">
                  <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Use carefully
                  </h4>
                  <div class="content">
                    <p>Some modules may work despite being marked as unsupported, while others can fail entirely.</p>
                  </div>
                </div>
              ` : ''}
            </div>
            
            <!-- Installed Modules List -->
            ${_getFilteredAndSortedModules(context).map((key) => {
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
              
              // Check if the module should be applied to this card
              const isChecked = shouldApplyModule(context, key);
              
              // Check if the module is global
              const isGlobal = isModuleGlobal(key, context.hass);

              // Determine if the "All cards" button should be disabled and its text/title
              const hasEditor = formSchema && formSchema.length > 0;
              const isDefaultModule = key === 'default';
              const allCardsDisabled = isDefaultModule || hasEditor;
              let allCardsButtonText = "All cards";
              
              // Get the current configuration for the module key
              const currentConfig = context._config[key];

              // Ensure a working copy exists for this key, create if not
              if (context._workingModuleConfigs[key] === undefined) {
                  context._workingModuleConfigs[key] = structuredClone(currentConfig ?? {});
              }
              // Retrieve the working copy (this reference should be stable across edits from this form)
              const workingConfig = context._workingModuleConfigs[key];

              // Use supportedCards if available, otherwise use unsupportedCards for backward compatibility
              const cardType = context._config.card_type ?? "";
              let unsupported = false;
              
              if (supportedCards && Array.isArray(supportedCards) && supportedCards.length > 0) {
                unsupported = !supportedCards.includes(cardType);
              } else {
                unsupported = unsupportedCard.includes(cardType);
              }
              
              const forceUnsupportedModules = context._forceUnsupportedModules === true;
              const shouldShowDisabledState = unsupported && !forceUnsupportedModules && !isChecked && !isGlobal && !isDefaultModule;
              
              // Get processed schema based on the *current* config for dependency evaluation
              const processedFormSchema = (formSchema && formSchema.length > 0)
                ? context._getProcessedSchema(key, formSchema, workingConfig) // Schema depends on WORKING config
                : [];
              
              // Check if this module has an update
              const hasUpdate = moduleUpdates.modules.some(m => m.id === key) && bctAvailable;
              const moduleUpdate = hasUpdate ? moduleUpdates.modules.find(m => m.id === key) : null;

              const isRecentlyToggled = context._recentlyToggledModuleId === key;
              
              return html`
                <ha-expansion-panel 
                  outlined 
                  class="${shouldShowDisabledState ? 'disabled' : ''} ${isRecentlyToggled ? 'recently-toggled' : ''}"
                  data-module-id="${key}"
                  .expanded=${!!context._expandedPanelStates[key]}
                  @expanded-changed=${(e) => {
                    // Only handle events from this panel, not from nested expandables
                    if (e.target.getAttribute('data-module-id') === key) {
                      context._expandedPanelStates[key] = e.target.expanded;
                      context.requestUpdate();
                    }
                  }}
                >
                  <h4 slot="header">
                    <ha-icon
                      icon="${isChecked ? 'mdi:puzzle-check' : 'mdi:puzzle-outline'}"
                      style="${isChecked ? 'opacity: 1; color: var(--info-color) !important;' : 'opacity: 0.3;'}"
                    ></ha-icon>
                    ${label}
                    <span class="module-badges" style="display: inline-flex; margin-left: auto;">
                      ${hasUpdate ? html`
                        <span class="bubble-badge update-badge">
                          <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                          Update: ${moduleUpdate.newVersion}
                        </span>
                      ` : ''}
                      ${isGlobal ? html`
                        <span class="bubble-badge update-badge global-badge">
                          <ha-icon icon="mdi:cards-outline" style="color: var(--primary-text-color) !important;"></ha-icon>
                        </span>
                      ` : ''}
                    </span>
                  </h4>
                  <div class="content" style="margin-top: 4px;">
                    ${getLazyLoadedPanelContent(context, key, !!context._expandedPanelStates[key], () => html`
                      <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="module-toggles-container">
                          <span class="module-toggles-label">
                            APPLY TO
                          </span>
                          <div class="module-toggles">
                            <button 
                              class="bubble-badge toggle-badge ${isChecked ? 'install-button' : 'link-button'}"
                              style="${key === 'default' && isChecked ? 'cursor: default;' : ''} cursor: pointer;"
                              @click=${() => {
                                const toggleEvent = { 
                                  target: { 
                                    checked: !isChecked, 
                                    configValue: key 
                                  } 
                                };
                                handleValueChanged(toggleEvent);
                              }}
                            >
                              <ha-icon icon="mdi:card-outline"></ha-icon>
                              <span>This card</span>
                            </button>
                            
                            <button 
                              class="bubble-badge toggle-badge ${isGlobal && !hasEditor ? 'update-button' : 'link-button'} ${allCardsDisabled || !bctAvailable ? 'disabled' : ''}"
                              style="cursor: pointer; ${allCardsDisabled || !bctAvailable ? 'opacity: 0.7; cursor: default;' : ''}"
                              @click=${() => {
                                if (!allCardsDisabled) {
                                  handleGlobalToggle(key, !isGlobal);
                                }
                              }}
                              ?disabled=${allCardsDisabled || !bctAvailable}
                            >
                              <ha-icon icon="mdi:cards-outline"></ha-icon>
                              <span>${allCardsButtonText}</span>
                            </button>
                            ${allCardsDisabled && !isDefaultModule ? html`
                              <button 
                                class="bubble-badge toggle-badge"
                                style="padding: 4px;"
                                @click=${(e) => {
                                  e.stopPropagation();
                                  context._helpModuleId = context._helpModuleId === key ? null : key;
                                  context.requestUpdate();
                                }}
                                title="Show help"
                              >
                                <ha-icon icon="mdi:help"></ha-icon>
                              </button>
                            ` : ''}
                          </div>
                        </div>
                        
                        <!-- Module Action Buttons -->
                        <div class="module-actions">
                          ${hasUpdate ? html`
                            <button 
                              class="icon-button update-button" 
                              style="margin: 0 24px;"
                              @click=${() => {
                                // Switch to store tab to update the module
                                context._selectedModuleTab = 1;
                                context._storeSearchQuery = label;
                                context.requestUpdate();
                              }} 
                              title="Update Module"
                            >
                              <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                              Update
                            </button>
                          ` : ''}
                          <button class="icon-button ${!bctAvailable ? 'disabled' : ''}" @click=${() => editModule(context, key)} title="Edit Module">
                            <ha-icon icon="mdi:pencil"></ha-icon>
                          </button>
                          ${(() => {
                            const isFromYamlFile = _isModuleInstalledViaYaml ? _isModuleInstalledViaYaml(key) : false;
                            // Do not display the delete button for YAML modules or the default module
                            return !isFromYamlFile && key !== 'default' ? html`
                              <button class="icon-button ${!bctAvailable ? 'disabled' : ''}" @click=${() => deleteModule(context, key)} title="Delete Module">
                                <ha-icon icon="mdi:delete"></ha-icon>
                              </button>
                            ` : '';
                          })()}
                        </div>
                      </div>
                      <hr>

                      ${context._helpModuleId === key ? html`
                        <div class="bubble-info">
                          <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Why "All cards" is disabled?
                          </h4>
                          <div class="content">
                            <p>Modules with custom editors cannot be applied globally. This feature is reserved for modules that only apply styles.</p>
                          </div>
                        </div>
                      ` : ''}

                      ${formSchema.length > 0
                        ? html`
                          <h4 class="${!isChecked ? 'disabled' : ''}">
                            <ha-icon icon="mdi:cog"></ha-icon>
                            Configuration
                          </h4>
                          <ha-form
                            class="${!isChecked ? 'disabled' : ''}"
                            .hass=${context.hass}
                            .data=${workingConfig}
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
                    `)}
                  </div>
                </ha-expansion-panel>
              `;
            })}
            
            ${_getFilteredAndSortedModules(context).length === 0 ? html`
              <div class="bubble-info">
                <h4 class="bubble-section-title">
                  <ha-icon icon="mdi:information-outline"></ha-icon>
                  No modules found
                </h4>
                <div class="content">
                  <p>No modules match your search criteria. Try modifying your search or sort order.</p>
                </div>
              </div>
            ` : ''}
          `)}

          <hr>
          ${!context._showNewModuleForm && !context._showManualImportForm && !context._editingModule && bctAvailable ? html`
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
                // No longer add 'default' module by default since it's applied globally
                context._config.modules = context._config.style_templates || [];
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

  const tabVariant = getTabImplementation();

  if (tabVariant === 'sl-tab-group') {
    requestAnimationFrame(() => {
      const tabGroupElement = context.shadowRoot?.getElementById(tabGroupId);
      if (tabGroupElement && typeof tabGroupElement.show === 'function') {
        const panelToShow = context._selectedModuleTab !== undefined ? context._selectedModuleTab.toString() : '0';
        tabGroupElement.show(panelToShow);
      }
    });
  } else if (tabVariant === 'ha-tab-group') {
    requestAnimationFrame(() => {
      const tabGroupElement = context.shadowRoot?.getElementById(tabGroupId);
      if (!tabGroupElement) {
        return;
      }

      const panelToShow = MODULE_TAB_IDS[context._selectedModuleTab ?? 0] ?? (context._selectedModuleTab ?? 0).toString();

      if ('activePanel' in tabGroupElement) {
        tabGroupElement.activePanel = panelToShow;
      }

      // Fallback attribute for builds that rely on attributes instead of properties
      tabGroupElement.setAttribute('active-panel', panelToShow);
    });
  }

  return templateResult;
}

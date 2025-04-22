import { html } from 'lit';
import { yamlKeysMap, moduleSourceMap } from '../tools/style-processor.js';
import { _formatModuleDescription, _getIconForType, _compareVersions, scrollToModuleForm } from './utils.js';
import { parseDiscussionsREST } from './parser.js';
import { getCachedModuleData } from './cache.js';
import { installOrUpdateModule } from './install.js';
import jsyaml from 'js-yaml';

export function makeModuleStore(context) {
  // Check if the persistent entity exists
  const entityId = 'sensor.bubble_card_modules';
  const entityExists = context.hass && context.hass.states && context.hass.states[entityId];
  
  // Initialize store settings if not already set
  if (context._storeShowOnlyCompatible === undefined) {
    context._storeShowOnlyCompatible = true; // Set to true by default
  }
  
  // If entity doesn't exist, show setup instructions instead of the store
  if (!entityExists) {
    return html`
      <div class="bubble-info warning">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          Configuration required
        </h4>
        <div class="content">
          <p>The storage entity <code>sensor.bubble_card_modules</code> is not configured in your Home Assistant instance.</p>
          <hr />
          <p><b>To use the Module store, follow these steps:</b></p>

          <p>1. Add the following to your <code>configuration.yaml</code> file:</p>
          <code-block><pre>
# Storage for Bubble Card Modules
template:
  - trigger:
      - platform: event
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
          <p>3. Enjoy the Module store!</p>
        </div>
      </div>
    `;
  }

  // Continue with existing code for when the entity exists
  if (!context._storeModules) {
    // Check if data is in localStorage
    const cachedData = getCachedModuleData();
    if (cachedData) {
      // Use cached data
      context._storeModules = cachedData.modules;
      context._isLoadingStore = false;

      // Always check expiration and refresh if needed regardless of previous API failures
      // This will now check the actual rate limit before making API calls
      const now = Date.now();
      if (cachedData.expiration < now + 3600000) { // 1 hour before expiration
        _fetchModuleStore(context, true);
      }
    } else {
      // No cache, load from GitHub
      context._isLoadingStore = true;
      _fetchModuleStore(context);
    }
  }

  if (context._isLoadingStore) {
    // Calculate progress percentage width based on current progress
    const progressWidth = context._loadingProgress || 0;
    const loadingText = context._loadingStatus || "Loading modules";
    
    return html`
      <div class="store-loading">
        <div class="bubble-loading-icon">
          <div class="icon-center-wrapper">
            <ha-icon icon="mdi:puzzle"></ha-icon>
          </div>
          <div class="bubble-loading-orbit">
            <div class="bubble-loading-satellite"></div>
          </div>
        </div>
        <div class="bubble-progress-container">
          <div class="bubble-progress-track">
            <div class="bubble-progress-bar" style="width: ${progressWidth}%">
              <div class="bubble-progress-glow"></div>
            </div>
          </div>
          <div class="bubble-progress-percentage">
            <span class="bubble-progress-text">${loadingText}</span>
            <span class="bubble-progress-value">${Math.round(progressWidth)}%</span>
          </div>
        </div>
      </div>
    `;
  }

  if (context._storeError) {
    return html`
      <div class="bubble-info error">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          Loading error
        </h4>
        <div class="content">
          <p>Could not load modules from GitHub: ${context._storeError}</p>
          <mwc-button @click=${() => _fetchModuleStore(context)}>
            <ha-icon icon="mdi:refresh" style="margin-right: 8px;"></ha-icon>
            Retry
          </mwc-button>
        </div>
      </div>
    `;
  }

  // Extract unique module types for the filter
  const moduleTypes = [...new Set(
    context._storeModules
      .filter(module => module.type)
      .map(module => module.type.toLowerCase())
  )].sort();

  // Add a state property for the currently zoomed image
  if (context._zoomedImage === undefined) {
    context._zoomedImage = null;
  }
  
  // Add a function to handle zooming in/out
  context._toggleImageZoom = (imageUrl) => {
    if (context._zoomedImage === imageUrl) {
      context._zoomedImage = null;
    } else {
      context._zoomedImage = imageUrl;
    }
    context.requestUpdate();
  };

  // Return the store UI
  return html`
    <div class="module-store">
      <div class="store-header">
        <div class="store-header-top">
          <div class="store-header-title">
            <ha-icon icon="mdi:puzzle-plus-outline"></ha-icon>
            <span>Module Store</span>
          </div>
          <div 
            class="store-refresh-button" 
            @click=${() => _fetchModuleStore(context)}
            title="Refresh module list"
          >
            <ha-icon icon="mdi:refresh"></ha-icon>
          </div>
        </div>
        <div class="store-search">
          <ha-textfield
            label="Search for a module"
            icon
            .value=${context._storeSearchQuery || ''}
            @input=${(e) => {
              context._storeSearchQuery = e.target.value;
              context.requestUpdate();
            }}
          >
            <slot name="prefix" slot="leadingIcon">
              <ha-icon slot="prefix" icon="mdi:magnify"></ha-icon>
            </slot>
          </ha-textfield>
        </div>
        <div class="store-filters">

          <ha-formfield label="Show only modules compatible with this card">
            <ha-switch
              .checked=${context._storeShowOnlyCompatible ?? true}
              @change=${(e) => {
                context._storeShowOnlyCompatible = e.target.checked;
                context.requestUpdate();
              }}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>

      <div class="store-modules">
        ${_getFilteredStoreModules(context).map(module => {
          const isInstalled = _isModuleInstalled(module.id);
          const isInstalledViaYaml = _isModuleInstalledViaYaml(module.id);
          const hasUpdate = _hasModuleUpdate(module.id, module.version);
          
          // Use supportedCards if available, otherwise use unsupportedCards for backward compatibility
          const cardType = context._config.card_type ?? "";
          let isCompatible = true;
          
          if (module.supportedCards && Array.isArray(module.supportedCards) && module.supportedCards.length > 0) {
            isCompatible = module.supportedCards.includes(cardType);
          } else {
            isCompatible = !module.unsupportedCards || !module.unsupportedCards.includes(cardType);
          }

          return html`
            <div class="store-module-card">
              <div class="store-module-header ${!isCompatible ? 'warning' : ''}">
                <div class="bubble-section-title">
                  <ha-icon icon="mdi:puzzle"></ha-icon>
                  <h3>${module.name}</h3>
                </div>

                <div class="store-module-meta">
                  <div class="store-module-author">
                    ${module.userAvatar ? html`
                      <img src="${module.userAvatar}" alt="${module.creator || 'Anonymous'}" class="author-avatar">
                    ` : ''}
                    <span>by ${module.creator || 'Anonymous'}</span>
                  </div>
                  <div class="version-container">
                    ${_isNewModule(module) ? html`<span class="bubble-badge new-badge"><ha-icon icon="mdi:bell-outline"></ha-icon> New</span>` : ''}
                    ${!isCompatible ? html`<span class="bubble-badge incompatible-badge">Incompatible</span>` : ''}
                    ${hasUpdate ? html`<span class="bubble-badge update-badge">Update available</span>` : ''}
                    ${isInstalledViaYaml ? html`<span class="bubble-badge yaml-badge">YAML</span>` : ''}
                    <span class="bubble-badge version-badge">${module.version || ''}</span>
                  </div>
                </div>

                <div class="store-module-badges bubble-badges">
                </div>
              </div>

              <div class="store-module-content">
                <div class="store-module-description">
                  ${module.description ? html`
                    <p class="module-description" .innerHTML=${_formatModuleDescription(module.description)}></p>
                  ` : html`
                    <p><em>No description</em></p>
                  `}
                  ${module.imageUrl ? html`
                    <div class="module-preview-container">
                      <img src="${module.imageUrl}" alt="${module.name}" class="module-preview-image">
                      <div class="module-preview-zoom-btn" @click=${(e) => { e.stopPropagation(); context._toggleImageZoom(module.imageUrl); }}>
                        <ha-icon icon="mdi:magnify"></ha-icon>
                      </div>
                    </div>
                  ` : ''}
                </div>

                <div class="store-module-actions bubble-badges">
                  ${isInstalled
                    ? html`
                      ${hasUpdate 
                        ? html`
                          ${_requiresManualInstallation(module)
                            ? html`
                              <a 
                                href="${module.moduleLink}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bubble-badge update-button hoverable"
                                style="cursor: pointer;"
                              >
                                <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                                <span>Update (Manual install)</span>
                              </a>
                            `
                            : html`
                              <div 
                                @click=${() => installOrUpdateModule(context, module)}
                                class="bubble-badge update-button hoverable"
                                style="cursor: pointer;"
                              >
                                <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                                <span>Update</span>
                              </div>
                            `
                          }
                        ` 
                        : html`
                          <div class="bubble-badge installed-button">
                            <ha-icon icon="mdi:check"></ha-icon>
                            <span>${isInstalledViaYaml ? 'Installed via YAML' : 'Installed'}</span>
                          </div>
                        `
                      }
                    ` 
                    : html`
                      ${_requiresManualInstallation(module)
                        ? html`
                          <a
                            href="${module.moduleLink}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bubble-badge install-button hoverable"
                            style="cursor: pointer;"
                          >
                            <ha-icon icon="mdi:github"></ha-icon>
                            <span>Manual install</span>
                          </a>
                        `
                        : html`
                          <div
                            @click=${() => installOrUpdateModule(context, module)}
                            class="bubble-badge install-button hoverable"
                            style="cursor: pointer;"
                          >
                            <ha-icon icon="mdi:download"></ha-icon>
                            <span>Install</span>
                          </div>
                        `
                      }
                    `}
                  <a
                    href="${module.moduleLink}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bubble-badge link-button"
                  >
                    <ha-icon icon="mdi:github"></ha-icon>
                    More info / Issue report
                  </a>
                </div>
              </div>
            </div>
          `;
        })}
      </div>

      ${_getFilteredStoreModules(context).length === 0 ? html`
        <div class="bubble-info">
          <h4 class="bubble-section-title">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            No modules found
          </h4>
          <div class="content">
            <p>No modules match your search criteria. Try modifying your search or filters.</p>
          </div>
        </div>
      ` : ''}
      
      <div class="back-to-top-button" @click=${() => scrollToModuleForm(context)}>
        <ha-icon icon="mdi:arrow-up"></ha-icon>
      </div>
    </div>

    ${context._zoomedImage ? html`
      <div class="module-preview-fullscreen" @click=${() => context._toggleImageZoom(null)}>
        <img src="${context._zoomedImage}" alt="Fullscreen preview">
      </div>
    ` : ''}
  `;
}

function _getFilteredStoreModules(context) {
  if (!context._storeModules) return [];

  let filteredModules = [...context._storeModules];

  // Filter by search
  if (context._storeSearchQuery) {
    const query = context._storeSearchQuery.toLowerCase();
    filteredModules = filteredModules.filter(module =>
      (module.name && module.name.toLowerCase().includes(query)) ||
      (module.description && module.description.toLowerCase().includes(query)) ||
      (module.creator && module.creator.toLowerCase().includes(query)) ||
      (module.type && module.type.toLowerCase().includes(query))
    );
  }

  // Filter by compatibility
  if (context._storeShowOnlyCompatible) {
    const cardType = context._config.card_type ?? "";
    
    filteredModules = filteredModules.filter(module => {
      // First check if the module has supported cards
      if (module.supportedCards && Array.isArray(module.supportedCards)) {
        return module.supportedCards.includes(cardType);
      }
      // Backward compatibility - if the module still uses unsupportedCards
      const isCompatible = !module.unsupportedCards || !module.unsupportedCards.includes(cardType);
      return isCompatible;
    });
  }

  // Filter by module type if selected
  if (context._storeSelectedType && context._storeSelectedType !== 'all') {
    filteredModules = filteredModules.filter(module =>
      module.type && module.type.toLowerCase() === context._storeSelectedType.toLowerCase()
    );
  }

  // Sort modules using the sorting function
  filteredModules = sortModulesByRelevance(filteredModules);

  return filteredModules;
}

function sortModulesByRelevance(modules) {
  if (!modules || !Array.isArray(modules)) return [];
  
  // Calculate a score for each module
  const modulesWithScore = modules.map(module => {
    // Initialize base score
    let score = 0;
    
    // Track if module has any popularity or freshness
    let hasPopularity = false;
    let hasFreshness = false;
    
    // Popularity factors
    
    // 1. Number of comments (discussion engagement)
    if (module.comments) {
      score += Math.min(module.comments, 8); // Max 8 points from comments (8 comments)
      hasPopularity = true;
    }
    
    // 2. Reactions (hearts, +1, etc.)
    if (module.reactions?.total_count) {
      score += module.reactions.total_count * 5; // Max 40 points from reactions (10 reactions)
      hasPopularity = true;
    }
    
    // Specifically value heart reactions more
    if (module.reactions?.heart) {
      score += module.reactions.total_count * 10; // Max 15 extra points from hearts (5 hearts)
      hasPopularity = true;
    }
    
    // Freshness factors
    
    // 3. Creation date (newer modules get more points)
    if (module.createdAt) {
      const creationDate = new Date(module.createdAt);
      const now = new Date();
      const ageInDays = (now - creationDate) / (1000 * 60 * 60 * 24);
      
      // Newer modules get more points (max 30 points for modules created in the last 7 days)
      if (ageInDays <= 7) {
        score += 30;
        hasFreshness = true;
      } else if (ageInDays <= 30) {
        score += 15;
        hasFreshness = true;
      } else if (ageInDays <= 90) {
        score += 5;
      }
    }
    
    // 4. Update date (recently updated modules get more points)
    if (module.updated_at) {
      const updateDate = new Date(module.updated_at);
      const now = new Date();
      const lastUpdateInDays = (now - updateDate) / (1000 * 60 * 60 * 24);
      
      // Recently updated modules get more points (max 25 points for updates in the last 7 days)
      if (lastUpdateInDays <= 7) {
        score += 25;
        hasFreshness = true;
      } else if (lastUpdateInDays <= 30) {
        score += 15;
        hasFreshness = true;
      } else if (lastUpdateInDays <= 90) {
        score += 8;
      }
    }
    
    // Penalty for modules that have neither popularity nor freshness
    if (!hasPopularity && !hasFreshness) {
      score -= 30; // Apply a significant penalty
    }
    
    // Bonus for modules that have both popularity and freshness
    if (hasPopularity && hasFreshness) {
      score += 20; // Bonus for modules that are both popular and fresh
    }

    // Bonus for modules created by great contributors
    if (module.creator === 'Clooos') {
      score += 40; // Well deserved
    }

    // Make sure new modules always appear at the top regardless of other factors
    const isNew = _isNewModule(module);
    if (isNew) {
      score += 150; // Ensure new modules always bubble to the top
    }
    
    return { ...module, relevanceScore: score };
  });
  
  // Sort by score, higher scores first
  return modulesWithScore.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

function _isNewModule(module) {
  if (!module.createdAt) return false;
  
  const creationDate = new Date(module.createdAt);
  const now = new Date();
  const ageInDays = (now - creationDate) / (1000 * 60 * 60 * 24);
  
  // Consider modules created within the last 14 days as new
  return ageInDays <= 14;
}

function _isModuleInstalled(moduleId) {
  // Check if the module is installed by looking in yamlKeysMap
  return yamlKeysMap.has(moduleId);
}

// Exported for use in other modules
export function _isModuleInstalledViaYaml(moduleId) {
  // Check if the module is installed
  if (!_isModuleInstalled(moduleId)) return false;
  
  // Check first with moduleSourceMap if the module comes from the YAML file
  if (moduleSourceMap.has(moduleId)) {
    return moduleSourceMap.get(moduleId) === 'yaml';
  }
  
  // Fallback to the old method (check if it's not in localStorage)
  try {
    const storedModules = JSON.parse(localStorage.getItem('bubble-card-modules') || '{}');
    return !storedModules[moduleId]; // Return true if NOT in localStorage (meaning it was installed via yaml)
  } catch (error) {
    console.warn("Error checking module installation source:", error);
    return false;
  }
}

/**
 * Check if any installed modules have updates available
 * @returns {Object} Object containing information about updates
 */
export function checkModuleUpdates() {
  // Get all installed modules
  const installedModules = Array.from(yamlKeysMap.keys());
  const updates = [];
  let updateCount = 0;
  
  // Get modules from store cache
  const cachedData = getCachedModuleData();
  if (!cachedData || !cachedData.modules || !cachedData.modules.length) {
    return { hasUpdates: false, updateCount: 0, modules: [] };
  }
  
  // Check each installed module
  installedModules.forEach(moduleId => {
    // Find module in store
    const storeModule = cachedData.modules.find(m => m.id === moduleId);
    if (storeModule && _hasModuleUpdate(moduleId, storeModule.version)) {
      updateCount++;
      updates.push({
        id: moduleId,
        name: storeModule.name || yamlKeysMap.get(moduleId).name || moduleId,
        currentVersion: yamlKeysMap.get(moduleId).version || '0',
        newVersion: storeModule.version
      });
    }
  });
  
  return {
    hasUpdates: updateCount > 0,
    updateCount,
    modules: updates
  };
}

function _hasModuleUpdate(moduleId, storeVersion) {
  if (!_isModuleInstalled(moduleId) || !storeVersion) return false;

  const installedModule = yamlKeysMap.get(moduleId) || {};
  const installedVersion = installedModule.version || '0';

  // Compare versions
  return _compareVersions(storeVersion, installedVersion) > 0;
}

// Detect if a module has incompatible YAML that requires manual installation
function _requiresManualInstallation(module) {
  if (!module || !module.yamlContent) return true; // If no YAML, manual installation required
  
  const yamlContent = module.yamlContent.trim();
  if (!yamlContent) return true;
  
  try {
    // Try to parse the YAML
    const parsedYaml = jsyaml.load(yamlContent);
    
    if (!parsedYaml || typeof parsedYaml !== 'object') {
      return true; // Invalid YAML
    }
    
    const keys = Object.keys(parsedYaml);
    
    // If the YAML contains multiple modules at the root
    if (keys.length > 1) {
      let moduleCount = 0;
      for (const key of keys) {
        const obj = parsedYaml[key];
        if (obj && typeof obj === 'object' && (obj.name || obj.code)) {
          moduleCount++;
        }
      }
      
      if (moduleCount > 1) {
        return true; // Multiple modules in the same YAML
      }
    }
    
    // Checking for nested modules
    if (keys.length === 1) {
      const mainKey = keys[0];
      const mainObj = parsedYaml[mainKey];
      
      if (mainObj && typeof mainObj === 'object') {
        // Check if the main object has a module structure and contains other modules
        const nestedKeys = Object.keys(mainObj);
        
        let nestedModuleCount = 0;
        for (const key of nestedKeys) {
          const obj = mainObj[key];
          if (obj && typeof obj === 'object' && (obj.name || obj.code)) {
            nestedModuleCount++;
          }
        }
        
        if (nestedModuleCount > 1) {
          return true; // Multiple nested modules
        }
      }
    }
    
    // Check if the YAML is incomplete or doesn't contain required attributes
    if (keys.length === 1) {
      const mainKey = keys[0];
      const mainObj = parsedYaml[mainKey];
      
      if (!mainObj || typeof mainObj !== 'object') {
        return true;
      }
      
      // A valid module must have at least a name and code
      if (!mainObj.name || !mainObj.code) {
        return true;
      }
    }
  } catch (error) {
    console.warn("Error checking module YAML compatibility:", error);
    return true; // If we can't parse the YAML, manual installation required
  }
  
  return false;
}

export async function _fetchModuleStore(context, isBackgroundFetch = false) {
  // Check if an API call is already in progress
  if (context._isApiCallInProgress) {
    return;
  }

  // First, check GitHub API rate limit status
  let useCache = false;
  
  if (!isBackgroundFetch) {
    context._isLoadingStore = true;
    context._storeError = null;
    context._loadingProgress = 5;
    context._loadingStatus = "Checking API limits";
    context.requestUpdate();
    
    // Start progress animation
    let progressInterval = setInterval(() => {
      if (!context._isLoadingStore) {
        clearInterval(progressInterval);
        return;
      }
      
      // Increment at a slower rate as we get closer to 85%
      const currentProgress = context._loadingProgress || 0;
      let increment = 0;
      
      if (currentProgress < 40) {
        increment = Math.random() * 2.5;
      } else if (currentProgress < 60) {
        increment = Math.random() * 1.5;
      } else if (currentProgress < 75) {
        increment = Math.random() * 0.8;
      } else if (currentProgress < 90) {
        increment = Math.random() * 0.3;
      }
      
      if (currentProgress < 90) {
        context._loadingProgress = currentProgress + increment;
        context.requestUpdate();
      }
    }, 200);
    
    // Store interval reference to clear later
    context._progressInterval = progressInterval;
  }

  try {
    const rateResponse = await fetch('https://api.github.com/rate_limit', {
      method: "GET",
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    if (!isBackgroundFetch) {
      context._loadingStatus = "Analyzing API response";
      context._loadingProgress = Math.min(context._loadingProgress + 5, 30);
      context.requestUpdate();
    }

    if (rateResponse.ok) {
      const rateData = await rateResponse.json();
      const remaining = rateData.resources.core.remaining;
      
      // Only use cache if we're actually out of API calls
      if (remaining <= 1) { // Keep 1 call as buffer
        console.warn("⚠️ API limit reached, using cache instead");
        useCache = true;
      }
    } else {
      // If we can't check rate limit, fall back to cooldown logic
      useCache = true;
      console.warn("⚠️ Could not check API rate limit, using cooldown logic");
    }
  } catch (error) {
    console.error("Error checking rate limit:", error);
    useCache = true;
  }

  // Update loading status
  if (!isBackgroundFetch) {
    context._loadingStatus = "Processing API data";
    context._loadingProgress = Math.min(context._loadingProgress + 5, 40);
    context.requestUpdate();
  }

  // Check if we're in cooldown after an API failure, only if we couldn't check rate limit
  if (useCache) {
    const lastApiFailure = localStorage.getItem('bubble-card-api-failure-timestamp');
    if (lastApiFailure) {
      const failureTime = parseInt(lastApiFailure);
      const cooldownPeriod = 30 * 60 * 1000; // 30 minutes
      
      if (Date.now() - failureTime < cooldownPeriod) {
        
        // Use cache if available
        const { getCachedModuleData } = await import('./cache.js');
        const cachedData = getCachedModuleData();
        if (cachedData && !context._storeModules) {
          context._storeModules = cachedData.modules;
          context._isLoadingStore = false;
          context.requestUpdate();
        }
        
        // Update loading status for using cache
        if (!isBackgroundFetch) {
          context._loadingStatus = "Loading from cache";
          context._loadingProgress = 60;
          context.requestUpdate();
        }
        
        return;
      } else {
        // Cooldown finished, we can retry
        localStorage.removeItem('bubble-card-api-failure-timestamp');
      }
    }
  } else if (useCache) {
    // If we need to use cache due to rate limit, return cached data
    const { getCachedModuleData } = await import('./cache.js');
    const cachedData = getCachedModuleData();
    if (cachedData && !context._storeModules) {
      context._storeModules = cachedData.modules;
      context._isLoadingStore = false;
      context.requestUpdate();
    }
    
    // Update loading status for using cache
    if (!isBackgroundFetch) {
      context._loadingStatus = "Loading from cache";
      context._loadingProgress = 60;
      context.requestUpdate();
    }
  }

  context._isApiCallInProgress = true;

  try {
    // Retrieve all discussions with pagination
    let allDiscussions = [];
    let page = 1;
    let hasMorePages = true;

    if (!isBackgroundFetch) {
      context._loadingStatus = "Downloading module data";
      context._loadingProgress = 50;
      context.requestUpdate();
    }

    while (hasMorePages) {
      const restResponse = await fetch(`https://api.github.com/repos/Clooos/Bubble-Card/discussions?per_page=100&page=${page}`, {
        method: "GET",
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });

      if (!isBackgroundFetch) {
        context._loadingStatus = `Processing page ${page}`;
        // Gradually increase progress as pages load
        context._loadingProgress = Math.min(50 + (page * 5), 80);
        context.requestUpdate();
      }

      if (!restResponse.ok) {
        console.error("❌ REST API Error:", restResponse.status, restResponse.statusText);
        
        // Save failure timestamp for cooldown
        localStorage.setItem('bubble-card-api-failure-timestamp', Date.now().toString());
        
        throw new Error(`REST API Error: ${restResponse.status}`);
      }

      const discussionsData = await restResponse.json();

      if (discussionsData.length === 0) {
        hasMorePages = false;
      } else {
        allDiscussions = [...allDiscussions, ...discussionsData];
        page++;
      }

      // Check remaining API limit
      const remainingRequests = restResponse.headers.get('x-ratelimit-remaining');

      // If approaching API limit, stop pagination but don't trigger cooldown
      if (remainingRequests <= 5) {
        console.warn("⚠️ API limit approaching, stopping pagination");
        hasMorePages = false;
      }
    }


    // Update loading status
    if (!isBackgroundFetch) {
      context._loadingStatus = "Filtering modules";
      context._loadingProgress = 85;
      context.requestUpdate();
    }

    // Filter discussions to keep only those in the "Share your Modules" category
    const moduleDiscussions = allDiscussions.filter(discussion => {
      const categoryName = discussion.category?.name;
      // Check for exact category match
      return categoryName === "Share your Modules";
    });


    // Parse discussions to extract module information
    const parsedModules = parseDiscussionsREST(moduleDiscussions);

    // Update loading status
    if (!isBackgroundFetch) {
      context._loadingStatus = "Saving to cache";
      context._loadingProgress = 95;
      context.requestUpdate();
    }

    // Save to cache
    const { saveCachedModuleData } = await import('./cache.js');
    saveCachedModuleData(parsedModules);

    // Make sure we reach 100% at the end
    if (!isBackgroundFetch) {
      // Short pause to show progress at 95% before reaching 100%
      await new Promise(resolve => setTimeout(resolve, 300));
      context._loadingProgress = 100;
      context._loadingStatus = "Complete";
      context.requestUpdate();
    }

    // Update displayed data
    if (!isBackgroundFetch || !context._storeModules) {
      context._storeModules = parsedModules;
      context._isLoadingStore = false;
      
      // Clear interval if it exists
      if (context._progressInterval) {
        clearInterval(context._progressInterval);
        context._progressInterval = null;
      }
      
      context.requestUpdate();
    }
  } catch (error) {
    console.error("Error loading modules:", error);

    // In case of error, use cached data if available
    if (!isBackgroundFetch) {
      context._loadingStatus = "Error - Loading from cache";
      context._loadingProgress = 85;
      context.requestUpdate();
      
      const { getCachedModuleData } = await import('./cache.js');
      const cachedData = getCachedModuleData();
      if (cachedData) {
        
        // Courte pause avant 100% pour rendre le changement visible
        await new Promise(resolve => setTimeout(resolve, 300));
        
        context._storeModules = cachedData.modules;
        context._isLoadingStore = false;
        context._loadingProgress = 100;
        context._loadingStatus = "Loaded from cache";
        context.requestUpdate();
      } else {
        context._storeError = error.message;
        context._isLoadingStore = false;
        context.requestUpdate();
      }
      
      // Clear interval if it exists
      if (context._progressInterval) {
        clearInterval(context._progressInterval);
        context._progressInterval = null;
      }
    }
  } finally {
    context._isApiCallInProgress = false;
    if (!isBackgroundFetch) {
      context.requestUpdate();
    }
  }
}
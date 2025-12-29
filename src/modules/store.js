import { html } from 'lit';
import { yamlKeysMap, moduleSourceMap } from './registry.js';
import { _formatModuleDescription, _getIconForType, _compareVersions, scrollToModuleForm } from './utils.js';
import { parseDiscussionsREST } from './parser.js';
import { getCachedModuleData, saveCachedModuleData } from './cache.js';
import { installOrUpdateModule } from './install.js';
import jsyaml from 'js-yaml';
import { ensureBCTProviderAvailable, isBCTAvailableSync } from './bct-provider.js';

const BCT_CHECK_RETRY_MS = 5000;
const RATE_LIMIT_WARNING_STORAGE_KEY = 'bubble-card-rate-limit-warning';

function _persistRateLimitWarning(resetTimeMs) {
  try {
    const resetTime = typeof resetTimeMs === 'number' && Number.isFinite(resetTimeMs)
      ? resetTimeMs
      : (Date.now() + 3600000);
    localStorage.setItem(RATE_LIMIT_WARNING_STORAGE_KEY, JSON.stringify({ resetTime }));
  } catch (e) {
    console.warn('Failed to persist rate limit warning to localStorage', e);
  }
}

function _clearPersistedRateLimitWarning() {
  try {
    localStorage.removeItem(RATE_LIMIT_WARNING_STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to clear rate limit warning from localStorage', e);
  }
}

function _readPersistedRateLimitWarning() {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_WARNING_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return parsed;
  } catch (e) {
    return null;
  }
}

export function makeModuleStore(context) {
  // Check if the persistent entity exists
  const entityId = 'sensor.bubble_card_modules';
  const entityExists = context.hass && context.hass.states && context.hass.states[entityId];
  
  // Initialize store settings if not already set
  if (context._storeShowOnlyCompatible === undefined) {
    context._storeShowOnlyCompatible = true; // Set to true by default
  }
  
  // Check if ranking info has been dismissed
  if (context._rankingInfoDismissed === undefined) {
    try {
      context._rankingInfoDismissed = localStorage.getItem('bubble-card-ranking-info-dismissed') === 'true';
    } catch (e) {
      context._rankingInfoDismissed = false;
    }
  }

  // Restore rate limit warning across reloads (only while reset time is in the future)
  if (context._rateLimitWarning === undefined) {
    const persisted = _readPersistedRateLimitWarning();
    const resetTime = persisted?.resetTime;
    if (typeof resetTime === 'number' && resetTime > Date.now()) {
      context._rateLimitWarning = true;
      context._rateLimitResetTime = resetTime;
    } else {
      context._rateLimitWarning = false;
      if (persisted) _clearPersistedRateLimitWarning();
    }
  }
  
  // Function to dismiss ranking info
  context._dismissRankingInfo = () => {
    context._rankingInfoDismissed = true;
    try {
      localStorage.setItem('bubble-card-ranking-info-dismissed', 'true');
    } catch (e) {
      console.warn('Failed to save ranking info dismiss state to localStorage', e);
    }
    context.requestUpdate();
  };
  
  // Gate the store on Bubble Card Tools availability, replacing legacy sensor instructions
  const bctAvailable = isBCTAvailableSync();

  if (context._storeBctRetryHandle && bctAvailable) {
    clearTimeout(context._storeBctRetryHandle);
    context._storeBctRetryHandle = null;
  }

  // Only trigger check if BCT is not available AND we haven't checked yet, or if check failed and retry delay expired
  if (context.hass && !bctAvailable && !context._storeBctCheckAttempted) {
    const now = Date.now();
    const lastCheck = context._storeLastBctCheckAt ?? 0;
    const elapsed = lastCheck ? now - lastCheck : Infinity;
    const withinThrottle = lastCheck && elapsed < BCT_CHECK_RETRY_MS;

    if (!context._storeBctCheckInFlight && !withinThrottle) {
      if (context._storeBctRetryHandle) {
        clearTimeout(context._storeBctRetryHandle);
        context._storeBctRetryHandle = null;
      }
      context._storeBctCheckInFlight = true;
      context._storeBctCheckAttempted = true;
      context._storeLastBctCheckAt = now;
      ensureBCTProviderAvailable(context.hass)
        .finally(() => {
          context._storeBctCheckInFlight = false;
          context.requestUpdate();
        });
    } else if (withinThrottle && !context._storeBctRetryHandle) {
      const waitMs = Math.max(50, BCT_CHECK_RETRY_MS - elapsed);
      context._storeBctRetryHandle = setTimeout(() => {
        context._storeBctRetryHandle = null;
        context.requestUpdate();
      }, waitMs);
    }
  } else if (context.hass && bctAvailable && !context._storeBctCheckAttempted) {
    // If BCT is available but we haven't marked as attempted, do a background check to confirm
    // This ensures the cache is properly initialized
    if (!context._storeBctCheckInFlight) {
      context._storeBctCheckInFlight = true;
      context._storeBctCheckAttempted = true;
      ensureBCTProviderAvailable(context.hass)
        .finally(() => {
          context._storeBctCheckInFlight = false;
          // Only update if status changed
          if (isBCTAvailableSync() !== bctAvailable) {
            context.requestUpdate();
          }
        });
    }
  }

  if (!bctAvailable) {
    const hasAnyModules = (yamlKeysMap && yamlKeysMap.size > 0) || entityExists;
    return html`
      <div class="bubble-info warning">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          Bubble Card Tools required
        </h4>
        <div class="content">
          ${hasAnyModules ? html`
            <p><b>To use the Module Store and to install/edit modules, install <code>Bubble Card Tools</code>.</b></p>
            <p>Existing modules will still be read from legacy sources for compatibility.</p>
          ` : html`
            <p><b>No modules detected yet.</b> To install or edit modules and use the Module Store, install <code>Bubble Card Tools</code>.</p>
          `}
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

      // SWR: refresh silently if stale (>6h) or near expiry (<1h)
      const now = Date.now();
      const lastFetchedAt = cachedData.lastFetchedAt || (cachedData.expiration ? cachedData.expiration - 86400000 : 0);
      const isStale = now - lastFetchedAt > 21600000; // 6 hours
      const isNearExpiry = cachedData.expiration < now + 3600000; // 1 hour
      if (isStale || isNearExpiry) {
        _fetchModuleStore(context, true);
      }
    } else {
      // No cache, load from GitHub
      context._isLoadingStore = true;
      _fetchModuleStore(context);
    }
  }

  // Set up a periodic background refresh every 6 hours
  if (!context._storeAutoRefreshTimer) {
    // Store an interval id on the context to avoid multiple timers
    context._storeAutoRefreshTimer = setInterval(() => {
      // Fire background refresh; built-in guard prevents overlapping calls
      _fetchModuleStore(context, true);
    }, 21600000);
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
            @click=${() => {
              // Reset the API call in progress flag to ensure refresh works
              context._isApiCallInProgress = false;
              _fetchModuleStore(context, false);
            }}
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

      ${!context._rankingInfoDismissed ? html`
        <div class="bubble-info info">
          <div class="bubble-info-header">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:information-outline"></ha-icon>
              How modules are ranked
              <div class="bubble-info-dismiss bubble-badge" @click=${context._dismissRankingInfo} title="Dismiss" 
                style="
                  display: inline-flex;
                  align-items: center;
                  position: absolute;
                  right: 16px;
                  padding: 0 8px;
                  cursor: pointer;"
              >
                <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
                Dismiss
              </div>
            </h4>
          </div>
          <div class="content">
            <p>Due to a limitation in GitHub's API, only top-level reactions like ❤️ 👍 🚀 on the main discussion post are counted for popularity, along with other factors like recent activity, number of comments, updates...</p>
            <p><b>Click the "More info" button and show some love there if you find a module useful!</b></p>
          </div>
        </div>
      ` : ''}

      ${context._rateLimitWarning ? html`
        <div class="bubble-info warning">
          <div class="bubble-info-header">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:alert-outline"></ha-icon>
              API rate limit reached
              <div class="bubble-info-dismiss bubble-badge" @click=${() => { context._rateLimitWarning = false; _clearPersistedRateLimitWarning(); context.requestUpdate(); }} title="Dismiss" 
                style="
                  display: inline-flex;
                  align-items: center;
                  position: absolute;
                  right: 16px;
                  padding: 0 8px;
                  cursor: pointer;"
              >
                <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
                Dismiss
              </div>
            </h4>
          </div>
          <div class="content">
            <p>GitHub API rate limit was reached. The module list is loaded from cache. ${
              context._rateLimitResetTime 
                ? `Please try again in ${_formatTimeRemaining(context._rateLimitResetTime)}.`
                : 'Please try again later.'
            }</p>
          </div>
        </div>
      ` : ''}

      <div class="store-modules">
        ${_getFilteredStoreModules(context).map(module => {
          const isInstalled = _isModuleInstalled(module.id);
          const isInstalledViaYaml = _isModuleInstalledViaYaml(module.id);
          const hasUpdate = _hasModuleUpdate(module.id, module.version);
          
          // Use supportedCards if available, otherwise use unsupportedCards for backward compatibility
          const cardType = context._config.card_type ?? "";
          let isCompatible = true;
          
          if (Array.isArray(module.supportedCards)) {
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

function _formatTimeRemaining(resetTimestamp) {
  const now = Date.now();
  const diff = resetTimestamp - now;
  
  if (diff <= 0) return 'now';
  
  const minutes = Math.ceil(diff / 60000);
  
  if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  }
  
  return `${hours} hour${hours > 1 ? 's' : ''} and ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`;
}

function _getFilteredStoreModules(context) {
  if (!context._storeModules) return [];

  let filteredModules = [...context._storeModules];
  
  // Blacklist with reasons (hidden unless already installed, can still be installed manually)
  // The main reason is modules that compete too much with my Patreon modules, as I need this financial support to maintain the project.
  const storeBlacklist = new Map([
    ['smart_icons'], // Competes with "Conditional icon badges" from my Patreon, and covers the same features (even if it is more advanced), sorry!
  ]);
  
  // Apply blacklist
  filteredModules = filteredModules.filter(module => {
    const id = module && module.id;
    if (!id) return true;
    if (!storeBlacklist.has(id)) return true;
    return _isModuleInstalled(id);
  });

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
      score += module.reactions.total_count * 5; // 5 points per reaction
      hasPopularity = true;
    }
    
    // Specifically value heart reactions more
    if (module.reactions?.heart) {
      score += module.reactions.total_count * 10; // 10 points per heart
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
      score += 100; // Well deserved
    }

    // Make sure new modules always appear at the top regardless of other factors
    const isNew = _isNewModule(module);
    if (isNew) {
      score += 10000; // Ensure new modules always bubble to the top
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

  // Force reset any previous API call in progress state
  context._isApiCallInProgress = true;

  // Determine if this is a manual refresh (direct click on refresh button)
  const isManualRefresh = !isBackgroundFetch && context._storeModules !== undefined;

  if (!isBackgroundFetch) {
    context._isLoadingStore = true;
    context._storeError = null;
    context._loadingProgress = 5;
    context._loadingStatus = "Connecting to GitHub";
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
    // Check cooldown from previous API failures
    if (!isManualRefresh) {
      const lastApiFailure = localStorage.getItem('bubble-card-api-failure-timestamp');
      if (lastApiFailure) {
        const failureTime = parseInt(lastApiFailure);
        const cooldownPeriod = 30 * 60 * 1000; // 30 minutes
        
        if (Date.now() - failureTime < cooldownPeriod) {
          // Use cache if available during cooldown
          const cachedData = getCachedModuleData();
          if (cachedData && !context._storeModules) {
            context._storeModules = cachedData.modules;
            context._isLoadingStore = false;
            context.requestUpdate();
          }
          
          if (!isBackgroundFetch) {
            context._loadingStatus = "Loading from cache";
            context._loadingProgress = 100;
            context.requestUpdate();
            
            if (context._progressInterval) {
              clearInterval(context._progressInterval);
              context._progressInterval = null;
            }
          }
          
          context._isApiCallInProgress = false;
          return;
        } else {
          // Cooldown finished, we can retry
          localStorage.removeItem('bubble-card-api-failure-timestamp');
        }
      }
    }

    // Retrieve all discussions with pagination
    let allDiscussions = [];
    let page = 1;
    let hasMorePages = true;
    let rateLimitReached = false;

    if (!isBackgroundFetch) {
      context._loadingStatus = "Downloading module data";
      context._loadingProgress = Math.max(context._loadingProgress, 50);
      context.requestUpdate();
    }

    while (hasMorePages) {
      let restResponse;
      let retryCount = 0;
      const maxRetries = 2;
      
      while (retryCount <= maxRetries) {
        try {
          restResponse = await fetch(`https://api.github.com/repos/Clooos/Bubble-Card/discussions?per_page=100&page=${page}`, {
            method: "GET",
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'X-GitHub-Api-Version': '2022-11-28'
            }
          });
          
          // If successful or client error (4xx), break retry loop
          if (restResponse.ok || (restResponse.status >= 400 && restResponse.status < 500)) {
            break;
          }
          
          // Server error (5xx), retry after delay
          if (retryCount < maxRetries) {
            console.warn(`⚠️ Server error ${restResponse.status} on page ${page}, retrying in ${(retryCount + 1) * 500}ms...`);
            await new Promise(resolve => setTimeout(resolve, (retryCount + 1) * 500));
            retryCount++;
          } else {
            break;
          }
        } catch (networkError) {
          // Network error (CORS, timeout, connection refused, etc.)
          if (retryCount < maxRetries) {
            console.warn(`⚠️ Network error on page ${page}, retrying in ${(retryCount + 1) * 500}ms...`);
            await new Promise(resolve => setTimeout(resolve, (retryCount + 1) * 500));
            retryCount++;
          } else {
            console.warn(`⚠️ Network error on page ${page} after ${maxRetries} retries:`, networkError.message);
            
            if (allDiscussions.length > 0) {
              // We have data from previous pages, use it
              console.warn(`Using ${allDiscussions.length} discussions from previous pages`);
              rateLimitReached = true;
              hasMorePages = false;
              restResponse = null;
              break;
            }
            // No data at all, rethrow to trigger cache fallback
            throw networkError;
          }
        }
      }
      
      // Skip processing if we're using partial data
      if (!restResponse) {
        continue;
      }

      if (!isBackgroundFetch) {
        context._loadingStatus = `Processing page ${page}`;
        // Gradually increase progress as pages load
        context._loadingProgress = Math.max(context._loadingProgress, Math.min(50 + (page * 5), 80));
        context.requestUpdate();
      }

      if (!restResponse.ok) {
        // If we are rate-limited, persist the warning so it survives reloads
        const remainingHeader = restResponse.headers.get('x-ratelimit-remaining');
        const resetHeader = restResponse.headers.get('x-ratelimit-reset');
        const remaining = remainingHeader !== null ? Number(remainingHeader) : null;
        const resetTimeMs = resetHeader ? (parseInt(resetHeader, 10) * 1000) : null;
        if (restResponse.status === 403 && remaining === 0) {
          if (resetTimeMs) context._rateLimitResetTime = resetTimeMs;
          context._rateLimitWarning = true;
          _persistRateLimitWarning(context._rateLimitResetTime);
        }
        
        // If we have data from previous pages and it's a server error (5xx), use what we have
        if (allDiscussions.length > 0 && restResponse.status >= 500) {
          console.warn(`⚠️ Server error on page ${page}, using ${allDiscussions.length} discussions from previous pages`);
          rateLimitReached = true;
          hasMorePages = false;
          continue;
        }
        
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
        
        // Add delay between requests to avoid 504 Gateway Timeout
        if (hasMorePages) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      // Check remaining API limit
      const remainingRequests = restResponse.headers.get('x-ratelimit-remaining');
      const rateLimitReset = restResponse.headers.get('x-ratelimit-reset');

      // If approaching API limit, stop pagination but don't trigger cooldown
      if (remainingRequests <= 5) {
        console.warn("⚠️ API limit approaching, stopping pagination");
        rateLimitReached = true;
        hasMorePages = false;
        
        // Store reset timestamp for display
        if (rateLimitReset) {
          context._rateLimitResetTime = parseInt(rateLimitReset) * 1000;
        }
      }
    }


    // Update loading status
    if (!isBackgroundFetch) {
      context._loadingStatus = "Filtering modules";
      context._loadingProgress = Math.max(context._loadingProgress, 85);
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

    // Check if we have enough data or if rate limit stopped us early
    const existingCache = getCachedModuleData();
    const hasEnoughData = parsedModules.length > 0;
    const shouldPreserveCache = rateLimitReached && existingCache && existingCache.modules && 
                                 existingCache.modules.length > parsedModules.length;

    // If rate limit was reached and cache has more data, preserve it
    if (shouldPreserveCache) {
      console.warn("⚠️ Rate limit reached with incomplete data, preserving existing cache");
      
      context._rateLimitWarning = true;
      _persistRateLimitWarning(context._rateLimitResetTime);
      if (!isBackgroundFetch) {
        context._loadingStatus = "Rate limit reached - Using cached data";
        context._loadingProgress = Math.max(context._loadingProgress, 95);
        context.requestUpdate();
      }

      // Use cached data instead
      await new Promise(resolve => setTimeout(resolve, 300));
      
      if (!isBackgroundFetch) {
        context._loadingProgress = 100;
        context._loadingStatus = "Loaded from cache (API limit reached)";
        context.requestUpdate();
      }

      context._storeModules = existingCache.modules;
      context._isLoadingStore = false;
      
      if (context._progressInterval) {
        clearInterval(context._progressInterval);
        context._progressInterval = null;
      }
      
      context.requestUpdate();
      return;
    }

    // Clear rate limit warning if we got good data
    context._rateLimitWarning = false;
    _clearPersistedRateLimitWarning();

    // Update loading status
    if (!isBackgroundFetch) {
      context._loadingStatus = "Saving to cache";
      context._loadingProgress = Math.max(context._loadingProgress, 95);
      context.requestUpdate();
    }

    // Save to cache only if we have data
    if (hasEnoughData) {
      saveCachedModuleData(parsedModules);
    }

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
      context._storeModules = hasEnoughData ? parsedModules : (existingCache?.modules || []);
      context._isLoadingStore = false;
      
      // Clear interval if it exists
      if (context._progressInterval) {
        clearInterval(context._progressInterval);
        context._progressInterval = null;
      }
      
      context.requestUpdate();
    }

    // For background fetches, also refresh UI to reflect new data
    if (isBackgroundFetch && context._storeModules && hasEnoughData) {
      context._storeModules = parsedModules;
      context.requestUpdate();
    }
  } catch (error) {
    console.error("Error loading modules:", error);

    // In case of error, use cached data if available
    if (!isBackgroundFetch) {
      context._loadingStatus = "Error - Loading from cache";
      context._loadingProgress = Math.max(context._loadingProgress, 85);
      context.requestUpdate();
      
      const cachedData = getCachedModuleData();
      if (cachedData) {
        
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
    // Always reset API call in progress, even if there's an error
    context._isApiCallInProgress = false;
    if (!isBackgroundFetch) {
      context.requestUpdate();
    }
  }
}
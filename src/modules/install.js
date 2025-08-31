import { yamlKeysMap, moduleSourceMap } from '../tools/style-processor.js';
import { fireToast } from './cache.js';
import { extractFirstKeyFromYaml, extractYamlFromMarkdown, extractModuleMetadata } from './parser.js';
import { fireEvent } from '../tools/utils.js';
import jsyaml from 'js-yaml';

// Broadcast a focused module update event so listeners can refresh fast
function broadcastModuleUpdate(moduleId, moduleData) {
  try {
    window.dispatchEvent(new CustomEvent('bubble-card-module-updated', {
      detail: { moduleId, moduleData }
    }));
  } catch (e) {
    // noop
  }
}

// Force a complete UI refresh of the editor similar to the editor save flow
function forceEditorUIRefresh(context) {
  try {
    if (context._processedSchemas) {
      context._processedSchemas = {};
    }
    if (!context._schemaCache) {
      context._schemaCache = {};
    } else {
      Object.keys(context._schemaCache).forEach(key => {
        delete context._schemaCache[key];
      });
    }

    context.lastEvaluatedStyles = "";

    if (context.card && typeof context.handleCustomStyles === 'function') {
      context.handleCustomStyles(context, context.card);
    }

    // Notify parent components and trigger updates
    fireEvent(context, 'editor-refresh', {});
    context.requestUpdate();

    // Secondary update after a short delay
    setTimeout(() => {
      if (context.card && typeof context.handleCustomStyles === 'function') {
        context.handleCustomStyles(context, context.card);
      }
      context.requestUpdate();

      // More aggressive fallback if still not reflected
      setTimeout(() => {
        if (context._config) {
          const config = { ...context._config };

          if (context.stylesYAML) {
            context.stylesYAML = null;
            document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
          }

          fireEvent(context, "config-changed", { config });

          if (context.card && typeof context.handleCustomStyles === 'function') {
            context.handleCustomStyles(context, context.card);
          }
        }
        context.requestUpdate();
      }, 100);
    }, 50);
  } catch (e) {
    // noop
  }
}

export async function installOrUpdateModule(context, module) {
  try {
    let yamlContent = "";

    // First check if the module has a yamlContent property
    if (module.yamlContent && module.yamlContent.trim() !== "") {
      yamlContent = module.yamlContent;
    } else if (module.description && module.description.trim() !== "") {
      yamlContent = module.description;
    }

    if (!yamlContent) {
      throw new Error("No YAML content found for this module");
    }

    // Extract the first key of the YAML to use it as ID
    const yamlFirstKey = extractFirstKeyFromYaml(yamlContent);
    const moduleId = yamlFirstKey || module.id;
    const moduleMetadata = extractModuleMetadata(yamlContent, moduleId, {
      // Use module data if available
      title: module.name,
      defaultCreator: module.creator
    });

    // Ensure the YAML maintains proper structure with module ID as root key
    // Fix for incorrect YAML structure in modules
    let formattedYamlContent = yamlContent;
    try {
      const parsedYaml = jsyaml.load(yamlContent);
      
      // Check if the YAML is valid and is an object
      if (parsedYaml && typeof parsedYaml === 'object') {
        // Analyze the structure to determine the correct approach
        const keys = Object.keys(parsedYaml);
        
        if (keys.length === 1) {
          const mainKey = keys[0];
          const mainObj = parsedYaml[mainKey];
          
          // If the module content is a nested object with multiple modules, extract only the one we want
          if (mainObj && typeof mainObj === 'object') {
            // Look for a nested key that matches our moduleId
            if (mainObj[moduleId]) {
              // Add the GitHub URL to the module if available
              // This ensures the original discussion URL is stored with the module
              if (module.moduleLink && typeof mainObj[moduleId] === 'object') {
                mainObj[moduleId].link = module.moduleLink;
              }
              // Extract only the specific module we want to install
              const cleanModule = {};
              cleanModule[moduleId] = mainObj[moduleId];
              formattedYamlContent = jsyaml.dump(cleanModule, {
                indent: 2,
                lineWidth: -1,
                noRefs: true,
                noCompatMode: true
              });
            }
            // If we have a structure where the YAML already has the right key but contains nested modules
            else if (mainKey === moduleId && Object.keys(mainObj).some(k => 
                typeof mainObj[k] === 'object' && 
                mainObj[k].name && 
                mainObj[k].code)) {
              
              // Extract only the direct properties of this module (non-objects or objects that look like metadata)
              const directProps = {};
              Object.entries(mainObj).forEach(([key, value]) => {
                if (typeof value !== 'object' || 
                    key === 'unsupported' || 
                    key === 'editor' ||
                    !value.name) {
                  directProps[key] = value;
                }
              });
              
              // Add the GitHub URL to ensure it's preserved in the YAML
              if (module.moduleLink) {
                directProps.link = module.moduleLink;
              }
              
              // Special handling for code blocks to preserve their formatting
              if (directProps.code && typeof directProps.code === 'string') {
                // Ensure code blocks have consistent indentation
                directProps.code = directProps.code.replace(/\n/g, '\n      ');
              }
              
              // Create a clean structure with just this module
              const cleanModule = {};
              cleanModule[moduleId] = directProps;
              formattedYamlContent = jsyaml.dump(cleanModule, {
                indent: 2,
                lineWidth: -1,
                noRefs: true,
                noCompatMode: true,
                flowLevel: -1
              });
            }
            // If the module already has correct structure
            else if (mainKey === moduleId) {
              // Add the GitHub URL to the module root object
              if (module.moduleLink && !parsedYaml[moduleId].link) {
                parsedYaml[moduleId].link = module.moduleLink;
              }
              // Keep the existing structure but ensure it's properly formatted
              formattedYamlContent = jsyaml.dump(parsedYaml, {
                indent: 2,
                lineWidth: -1,
                noRefs: true,
                noCompatMode: true,
                flowLevel: -1
              });
            }
            // Module exists at the root level but with a different key
            else {
              // Add the GitHub URL to the properties
              if (module.moduleLink) {
                mainObj.link = module.moduleLink;
              }
              const restructuredYaml = {};
              restructuredYaml[moduleId] = mainObj;
              formattedYamlContent = jsyaml.dump(restructuredYaml, {
                indent: 2,
                lineWidth: -1,
                noRefs: true,
                noCompatMode: true,
                flowLevel: -1
              });
            }
          }
        }
        // If the YAML has a flat structure (no main key)
        else {
          // Add the GitHub URL to the YAML properties
          if (module.moduleLink) {
            parsedYaml.link = module.moduleLink;
          }
          const restructuredYaml = {};
          restructuredYaml[moduleId] = parsedYaml;
          formattedYamlContent = jsyaml.dump(restructuredYaml, {
            indent: 2,
            lineWidth: -1,
            noRefs: true,
            noCompatMode: true,
            flowLevel: -1
          });
        }
        
        // Manual post-processing to improve multi-line formatting
        formattedYamlContent = formattedYamlContent
          // Fix for pipe syntax (|) in YAML to preserve multi-line content
          .replace(/code: \|/g, 'code: |')
          .replace(/description: \|/g, 'description: |')
          // Ensure consistent indentation for multi-line content
          .replace(/(\|\n)(\s+)/g, (match, pipe, indent) => {
            // We want consistent 6-space indentation (2 for the property + 4 for the content)
            return pipe + '      ';
          });
          
        // Verify the YAML can be parsed back correctly
        try {
          const testParse = jsyaml.load(formattedYamlContent);
          if (!testParse || !testParse[moduleId]) {
            console.warn("Warning: YAML formatting may have issues");
          }
        } catch (parseError) {
          console.warn("Error validating formatted YAML:", parseError);
          // Fallback to original content if our formatting broke the YAML
          formattedYamlContent = yamlContent;
        }
      }
    } catch (yamlError) {
      console.warn("Error processing YAML structure:", yamlError);
    }

    // Optimized format for storage that preserves the proper YAML structure
    // Ensure the YAML maintains its hierarchical structure with module ID as the root key
    // This fixes the issue with modules being stored incorrectly
    const simplifiedModuleData = {
      id: moduleId,
      yaml: formattedYamlContent
    };


    // Add to yamlKeysMap so it appears as installed
    yamlKeysMap.set(moduleId, moduleMetadata);
    // Mark this module as coming from the persistent entity (not YAML file)
    try { moduleSourceMap.set(moduleId, 'entity'); } catch (e) {}

    // Force a refresh of components that use yamlKeysMap
    document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
    // Also broadcast a targeted module update for faster listeners
    broadcastModuleUpdate(moduleId, moduleMetadata);

    // Save module in Home Assistant
    try {
      const entityId = "sensor.bubble_card_modules";

      // Check if the entity exists in Home Assistant
      const entityExists = context.hass && context.hass.states && context.hass.states[entityId];
      if (!entityExists) {
        fireToast(context, "Persistent storage not configured - module saved locally only", "warning");
        
        // Proactively refresh editor UI and styles so changes appear immediately
        forceEditorUIRefresh(context);
        return { 
          success: true, 
          storage: "local_only",
          reason: "missing_entity",
          message: "The persistent storage entity is not configured. Please check the setup instructions in the Module tab."
        };
      }

      let existingModules = {};

      try {
        // Try to retrieve the current state of the entity using HA helper (manages auth/refresh)
        const entityData = await context.hass.callApi("get", `states/${entityId}`);

        // Retrieve the module collection
        if (entityData && entityData.attributes && entityData.attributes.modules) {
          existingModules = entityData.attributes.modules;
        }
        // If we have the format with a single module_data
        else if (entityData && entityData.attributes && entityData.attributes.module_data) {
          const singleModule = entityData.attributes.module_data;
          if (singleModule && singleModule.id) {
            existingModules[singleModule.id] = singleModule;
          }
        }
      } catch (loadError) {
        console.warn("Unable to load existing modules:", loadError);
      }

      // Add the new module to the collection
      existingModules[moduleId] = simplifiedModuleData;

      // Parse YAML content to get direct module data for storage
      try {
        const parsedModuleData = jsyaml.load(formattedYamlContent);
        if (parsedModuleData && parsedModuleData[moduleId]) {
          // Store the complete parsed YAML structure
          const moduleData = parsedModuleData[moduleId];

          // Store the parsed module data directly instead of the YAML string
          existingModules[moduleId] = {
            id: moduleId,
            // Store actual module data with proper structure
            ...moduleData,
            // Also store complete metadata for reference
            name: moduleMetadata.name || moduleData.name,
            version: moduleMetadata.version || moduleData.version,
            description: moduleMetadata.description || moduleData.description,
            creator: moduleMetadata.creator || moduleData.creator || moduleMetadata.author,
            // Store the GitHub URL from the module object - this ensures we always have the correct URL
            link: module.moduleLink || moduleMetadata.link || moduleData.link
          };
          // If this is the default module, ensure is_global is true
          if (moduleId === 'default') {
            existingModules[moduleId].is_global = true;
          }
        } else {
          // If we couldn't parse the module data, use all metadata we've extracted
          existingModules[moduleId] = {
            id: moduleId,
            ...moduleMetadata
          };
          // If this is the default module, ensure is_global is true
          if (moduleId === 'default') {
            existingModules[moduleId].is_global = true;
          }
        }
      } catch (parseError) {
        console.warn("Error parsing module YAML for storage:", parseError);
        // Fallback to simplified format if parsing fails
        existingModules[moduleId] = {
          id: moduleId,
          name: moduleMetadata.name,
          version: moduleMetadata.version,
          description: moduleMetadata.description,
          creator: moduleMetadata.creator
        };
        // If this is the default module, ensure is_global is true
        if (moduleId === 'default') {
          existingModules[moduleId].is_global = true;
        }
      }

      // Update using an event for the trigger template sensor
      try {
        await context.hass.callApi("post", "events/bubble_card_update_modules", {
          modules: existingModules,
          last_updated: new Date().toISOString()
        });
      } catch (eventError) {
        console.warn("Unable to send event, trying to update state directly:", eventError);
        
        // Fallback: try to update the state directly
        await context.hass.callApi("post", `states/${entityId}`, {
          state: "saved",
          attributes: {
            friendly_name: "Bubble Card Modules",
            modules: existingModules,
            last_updated: new Date().toISOString()
          }
        });
      }

      fireToast(context, "Module installed successfully");
      fireEvent(context, "config-changed", { config: context._config });

      // Ensure UI and styles reflect changes immediately
      forceEditorUIRefresh(context);

      context.requestUpdate();

      return { success: true };
    } catch (apiError) {
      console.error("REST API not available or error:", apiError);
      fireToast(context, "Module saved locally only", "warning");
      // Ensure UI refresh even if HA persistence failed
      forceEditorUIRefresh(context);
      return { success: true, storage: "local_only" };
    }
  } catch (err) {
    console.error("Installation error:", err);
    fireToast(context, "Installation error: " + err.message, "error");
    throw err;
  }
}

export async function installManualModule(context, yamlContent, moduleLink) {
  try {
    if (!yamlContent || yamlContent.trim() === '') {
      throw new Error("No YAML content provided");
    }

    // If we have a moduleLink, try to add it directly to the YAML before creating the module
    if (moduleLink) {
      try {
        // Use the parser function to add the link
        const { extractYamlFromMarkdown } = await import('./parser.js');
        // Wrap YAML in code block format for the extractYamlFromMarkdown function
        const wrappedYaml = "```yaml\n" + yamlContent + "\n```";
        // Extract and modify the YAML
        const modifiedYaml = extractYamlFromMarkdown(wrappedYaml, moduleLink);
        if (modifiedYaml && modifiedYaml !== yamlContent) {
          yamlContent = modifiedYaml;
        }
      } catch (error) {
        console.warn("Could not add link directly to YAML:", error);
      }
    }

    // Create a mock module object for processing
    const mockModule = {
      yamlContent: yamlContent,
      description: yamlContent, // Add the description with the same content to avoid the error
      moduleLink: moduleLink // Pass the GitHub URL to be included in the module YAML
    };

    // Use the existing installOrUpdateModule function to process the YAML
    return await installOrUpdateModule(context, mockModule);
  } catch (error) {
    console.error("Manual module installation error:", error);
    fireToast(context, "Installation error: " + error.message, "error");
    throw error;
  }
} 
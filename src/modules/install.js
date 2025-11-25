import { yamlKeysMap, moduleSourceMap } from './registry.js';
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

    const formattedYaml = formattedYamlContent;

    // Add to yamlKeysMap so it appears as installed
    yamlKeysMap.set(moduleId, moduleMetadata);
    // Mark this module as coming from the persistent entity (not YAML file)
    try { moduleSourceMap.set(moduleId, 'entity'); } catch (e) {}

    // Force a refresh of components that use yamlKeysMap
    document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
    // Also broadcast a targeted module update for faster listeners
    broadcastModuleUpdate(moduleId, moduleMetadata);

    // Persist via Bubble Card Tools file backend only (no entity writes)
    try {
      const bct = await import('./bct-provider.js');
      const bctAvailable = await bct.ensureBCTProviderAvailable(context.hass);
      if (bctAvailable) {
        // Persist to modules/<id>.yaml using the provider with the final YAML string
        await bct.writeModuleYaml(context.hass, moduleId, formattedYaml);
        document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
        fireToast(context, "Module installed successfully");
      } else {
        fireToast(context, "Install Bubble Card Tools to save modules persistently", "warning");
      }

      fireEvent(context, "config-changed", { config: context._config });
      forceEditorUIRefresh(context);
      context.requestUpdate();
      return { success: true };
    } catch (apiError) {
      console.error("Persistence error:", apiError);
      fireToast(context, "Module saved locally only", "warning");
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
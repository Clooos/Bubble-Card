import jsyaml from 'js-yaml';
import { _slugify, _cleanMarkdown } from './utils.js';

export function extractFirstKeyFromYaml(yamlContent) {
  if (!yamlContent) return null;

  try {
    // Method 1: Parse YAML and retrieve the first key
    const parsedYaml = jsyaml.load(yamlContent);
    if (parsedYaml && typeof parsedYaml === 'object') {
      const keys = Object.keys(parsedYaml);
      if (keys.length > 0) {
        if (parsedYaml[keys[0]]?.name) {
          return keys[0];
        }
        for (const key of keys) {
          if (parsedYaml[key]?.name) {
            return key;
          }
        }
        return keys[0];
      }
    }
  } catch (parseError) {
    console.warn("Error during YAML parsing for key extraction:", parseError);
  }

  try {
    // Method 2: Regular expression to find the first key (more robust)
    // Searches for a string at the beginning of a line followed by : or space(s) then :
    const keyRegex = /^([a-zA-Z0-9_-]+)(?:\s*:|:)/m;
    const match = yamlContent.match(keyRegex);
    if (match && match[1]) {
      return match[1];
    }
  } catch (regexError) {
    console.warn("Error during key extraction by regex:", regexError);
  }

  return null;
}

export function extractYamlFromMarkdown(markdown, moduleLink = null) {
  if (!markdown) return "";

  const yamlCodeBlockRegex = /```(?:yaml|yml)\s+([\s\S]*?)```/g;
  const matches = [...markdown.matchAll(yamlCodeBlockRegex)];

  if (matches.length > 0) {
    for (const match of matches) {
      let yamlContent = match[1].trim();
      
      // Preserve the original YAML structure
      try {
        const parsed = jsyaml.load(yamlContent);
        if (parsed && typeof parsed === 'object') {
          const firstKey = Object.keys(parsed)[0];
          
          // Check if this is a valid module YAML
          if (parsed[firstKey]?.name || 
              parsed[firstKey]?.code || 
              parsed[firstKey]?.description || 
              parsed[firstKey]?.version) {
              
            // Add GitHub URL to the YAML if provided
            if (moduleLink && typeof parsed[firstKey] === 'object' && !parsed[firstKey].link) {
              // Add the link to the parsed object
              parsed[firstKey].link = moduleLink;
              
              // Reformat the YAML with the new link
              yamlContent = jsyaml.dump(parsed, {
                indent: 2,
                lineWidth: -1,
                noRefs: true,
                noCompatMode: true
              });
            }
            
            // Return the modified YAML
            return yamlContent;
          }
        }
      } catch (e) {}
    }
    
    // If no valid module is found, use the first intact block
    let firstBlock = matches[0][1].trim();
    
    // Try to add the link to a raw YAML block
    if (moduleLink) {
      try {
        const parsed = jsyaml.load(firstBlock);
        if (parsed && typeof parsed === 'object') {
          const firstKey = Object.keys(parsed)[0];
          
          if (firstKey && typeof parsed[firstKey] === 'object' && !parsed[firstKey].link) {
            parsed[firstKey].link = moduleLink;
            
            // Reformat the YAML with the new link
            firstBlock = jsyaml.dump(parsed, {
              indent: 2,
              lineWidth: -1,
              noRefs: true,
              noCompatMode: true
            });
          }
        }
      } catch (e) {}
    }
    
    return firstBlock;
  }

  // Alternative search: generic code blocks
  const codeBlockRegex = /```\s*([\s\S]*?)```/g;
  const genericMatches = [...markdown.matchAll(codeBlockRegex)];

  if (genericMatches.length > 0) {
    // Use the longest block
    let bestMatch = "";
    for (const match of genericMatches) {
      const content = match[1].trim();
      if (content.length > bestMatch.length) {
        bestMatch = content;
      }
    }
    
    // Try to add the link to the best match
    if (moduleLink && bestMatch) {
      try {
        const parsed = jsyaml.load(bestMatch);
        if (parsed && typeof parsed === 'object') {
          const firstKey = Object.keys(parsed)[0];
          
          if (firstKey && typeof parsed[firstKey] === 'object' && !parsed[firstKey].link) {
            parsed[firstKey].link = moduleLink;
            
            // Reformat the YAML with the new link
            bestMatch = jsyaml.dump(parsed, {
              indent: 2,
              lineWidth: -1,
              noRefs: true,
              noCompatMode: true
            });
          }
        }
      } catch (e) {}
    }
    
    return bestMatch;
  }

  return "";
}

// Parse GitHub discussions into module data
export function parseDiscussionsREST(discussions) {
    if (!discussions || !Array.isArray(discussions)) {
      return [];
    }
  
    // Process discussions directly without making additional requests
    return discussions
      .filter(discussion => discussion && discussion.title)
      .map(discussion => {
        try {
          // Retrieve module ID from title or generate ID based on discussion number
          const titleMatch = discussion.title.match(/\[(.*?)\]/);
          let moduleId = titleMatch ? _slugify(titleMatch[1]) : `discussion-${discussion.number}`;
          let yamlContent = "";
          let moduleLink = discussion.html_url;
  
          // If we have access to the discussion body from the REST API
          if (discussion.body) {
            // Extract YAML from markdown body and add the GitHub URL
            yamlContent = extractYamlFromMarkdown(discussion.body, moduleLink);
            
            // If YAML is found, extract module name if available
            if (yamlContent) {
              const yamlFirstKey = extractFirstKeyFromYaml(yamlContent);
              if (yamlFirstKey) {
                moduleId = yamlFirstKey; // Use YAML key as module ID
              }
            }
          }
  
          // Extract all metadata in a single function
          const metadata = extractModuleMetadata(yamlContent, moduleId, {
            bodyText: discussion.body,
            title: discussion.title,
            defaultCreator: discussion.user?.login || ""
          });
  
          // Build the final module object
          return {
            id: metadata.id,
            name: metadata.name,
            description: metadata.description,
            creator: metadata.creator,
            version: metadata.version,
            moduleLink: discussion.html_url,
            type: metadata.type,
            imageUrl: metadata.imageUrl,
            supportedCards: Array.isArray(metadata.supported) 
              ? metadata.supported 
              : (metadata.supported ? [metadata.supported] : []),
            unsupportedCards: Array.isArray(metadata.unsupported) 
              ? metadata.unsupported 
              : (metadata.unsupported ? [metadata.unsupported] : []),
            createdAt: discussion.created_at,
            updated_at: discussion.updated_at,
            userAvatar: discussion.user?.avatar_url,
            comments: discussion.comments,
            reactions: discussion.reactions,
            yamlContent
          };
        } catch (error) {
          console.error(`Error parsing discussion #${discussion.number}:`, error);
          // In case of error, return a minimal object
          return {
            id: `discussion-${discussion.number}`,
            name: discussion.title || `Discussion #${discussion.number}`,
            description: "Error parsing the discussion",
            creator: discussion.user?.login || "",
            version: "",
            moduleLink: discussion.html_url,
            type: "",
            supportedCards: [],
            unsupportedCards: [],
            createdAt: discussion.created_at,
            updated_at: discussion.updated_at,
            userAvatar: discussion.user?.avatar_url,
            comments: discussion.comments,
            reactions: discussion.reactions,
          };
        }
      })
      .filter(module => module.id && module.name); // Keep only modules with ID and name
  } 

export function extractModuleMetadata(yamlContent, moduleId, options = {}) {
  const { bodyText, title, defaultCreator } = options;
  
  // Metadata initialization with default values
  let metadata = {
    id: moduleId,
    name: moduleId,
    version: "1.0",
    author: "",
    description: "",
    type: "Module",
    editor: [],     // for formSchema
    supported: ['button', 'climate', 'cover', 'horizontal-buttons-stack', 'media-player', 'pop-up', 'select', 'separator'], // default supported cards
    unsupported: [], // for backward compatibility
    creator: defaultCreator || "",
    link: "",       // for moduleLink
    imageUrl: "",   // for image URL
    yaml: yamlContent // Store the original YAML
  };

  // Flags to track which properties were set from YAML
  const yamlSetProperties = {
    name: false, version: false, author: false, creator: false,
    description: false, type: false, link: false, supported: false, unsupported: false,
    editor: false, code: false, imageUrl: false
  };

  // Utility function to apply a property from an object
  const applyProperty = (obj, sourceKey, targetKey = sourceKey, altKeys = []) => {
    if (obj[sourceKey] !== undefined) {
      metadata[targetKey] = obj[sourceKey];
      yamlSetProperties[targetKey] = true;
      return true;
    }
    
    // Check alternative keys
    for (const altKey of altKeys) {
      if (obj[altKey] !== undefined && !yamlSetProperties[targetKey]) {
        metadata[targetKey] = obj[altKey];
        yamlSetProperties[targetKey] = true;
        return true;
      }
    }
    
    return false;
  };

  // Process descriptions with different formats
  const processDescription = (desc) => {
    if (typeof desc === 'string') {
      return desc;
    } else if (Array.isArray(desc)) {
      return desc.join('\n');
    } else if (typeof desc === 'object') {
      return JSON.stringify(desc);
    }
    return "";
  };

  // YAML parsing - highest priority source for all metadata
  if (yamlContent) {
    try {
      const parsedYaml = jsyaml.load(yamlContent);

      if (parsedYaml && typeof parsedYaml === 'object') {
        // Analyze YAML structure
        if (Object.keys(parsedYaml).length === 1) {
          // Structure with a main key (ex: module_name: { ... })
          const mainKey = Object.keys(parsedYaml)[0];
          const mainObj = parsedYaml[mainKey];

          // Use the main key name as ID if not defined
          if (metadata.id === moduleId) {
            metadata.id = mainKey;
          }

          // Process the main object if it exists
          if (mainObj && typeof mainObj === 'object') {
            // Direct properties
            applyProperty(mainObj, 'name');
            applyProperty(mainObj, 'version');
            applyProperty(mainObj, 'author');
            applyProperty(mainObj, 'type');
            applyProperty(mainObj, 'code');
            applyProperty(mainObj, 'editor');
            applyProperty(mainObj, 'link');
            applyProperty(mainObj, 'creator');
            
            // Properties with alternative names
            applyProperty(mainObj, 'form_schema', 'editor');
            applyProperty(mainObj, 'supported', 'supported');
            applyProperty(mainObj, 'unsupported', 'unsupported', ['unsupported_card']);
            
            // Handle backward compatibility - if unsupported is set but supported is not
            if (mainObj.unsupported && !mainObj.supported && !yamlSetProperties.supported) {
              // All cards except those in unsupported are supported
              const allCards = ['button', 'climate', 'cover', 'horizontal-buttons-stack', 'media-player', 'pop-up', 'select', 'separator'];
              metadata.supported = allCards.filter(id => !mainObj.unsupported.includes(id));
              yamlSetProperties.supported = true;
            }
            
            // Special treatment for description
            if (mainObj.description !== undefined) {
              metadata.description = processDescription(mainObj.description);
              yamlSetProperties.description = true;
            }
            
            // Check info section
            if (mainObj.info && typeof mainObj.info === 'object') {
              applyProperty(mainObj.info, 'name');
              applyProperty(mainObj.info, 'version');
              applyProperty(mainObj.info, 'author');
              applyProperty(mainObj.info, 'type');
              applyProperty(mainObj.info, 'creator');
              applyProperty(mainObj.info, 'link');
              
              if (mainObj.info.description !== undefined && !yamlSetProperties.description) {
                metadata.description = processDescription(mainObj.info.description);
                yamlSetProperties.description = true;
              }
            }
          }
        } else {
          // Flat structure (properties directly at the root)
          applyProperty(parsedYaml, 'name');
          applyProperty(parsedYaml, 'version');
          applyProperty(parsedYaml, 'author');
          applyProperty(parsedYaml, 'type');
          applyProperty(parsedYaml, 'code');
          applyProperty(parsedYaml, 'editor');
          applyProperty(parsedYaml, 'link');
          applyProperty(parsedYaml, 'creator');
          
          // Properties with alternative names
          applyProperty(parsedYaml, 'form_schema', 'editor');
          applyProperty(parsedYaml, 'supported', 'supported');
          applyProperty(parsedYaml, 'unsupported', 'unsupported', ['unsupported_card']);
          
          // Handle backward compatibility - if unsupported is set but supported is not
          if (parsedYaml.unsupported && !parsedYaml.supported && !yamlSetProperties.supported) {
            // All cards except those in unsupported are supported
            const allCards = ['button', 'climate', 'cover', 'horizontal-buttons-stack', 'media-player', 'pop-up', 'select', 'separator'];
            metadata.supported = allCards.filter(id => !parsedYaml.unsupported.includes(id));
            yamlSetProperties.supported = true;
          }
          
          // Special treatment for description
          if (parsedYaml.description !== undefined) {
            metadata.description = processDescription(parsedYaml.description);
            yamlSetProperties.description = true;
          }
        }

        // Look for formSchema if not already defined
        if (!yamlSetProperties.editor && (!metadata.editor || !metadata.editor.length)) {
          const yamlString = JSON.stringify(parsedYaml);
          if (yamlString.includes('"type":') && yamlString.includes('"name":')) {
            // For structures with a main key
            if (Object.keys(parsedYaml).length === 1) {
              const mainKey = Object.keys(parsedYaml)[0];
              const mainObj = parsedYaml[mainKey];

              if (mainObj && typeof mainObj === 'object') {
                const formSchemaKeys = Object.keys(mainObj).filter(key =>
                  typeof mainObj[key] === 'object' &&
                  (mainObj[key].type || mainObj[key].name || mainObj[key].field)
                );

                if (formSchemaKeys.length > 0) {
                  metadata.editor = formSchemaKeys.map(key => ({
                    name: key,
                    type: mainObj[key].type || 'input',
                    ...mainObj[key]
                  }));
                  yamlSetProperties.editor = true;
                }
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("Error during YAML analysis:", error);
    }
  }

  // Synchronize author and creator
  if (!metadata.author && metadata.creator) {
    metadata.author = metadata.creator;
  } else if (!metadata.creator && metadata.author) {
    metadata.creator = metadata.author;
  }

  // Extract additional information from Markdown text if not present in YAML
  if (bodyText) {
    // Version extraction
    if (!yamlSetProperties.version) {
      const versionPatterns = [
        /\*\*Version:\*\*\s*(v?[\d\.]+)/i,
        /\|\s*(?:Version|v):\s*(v?[\d\.]+)\s*\|/i,
        /version\s+(v?[\d\.]+)/i
      ];
      
      for (const pattern of versionPatterns) {
        const match = bodyText.match(pattern);
        if (match && match[1]) {
          metadata.version = match[1];
          break;
        }
      }
    }

    // Description extraction
    if (!yamlSetProperties.description && !metadata.description) {
      const descriptionMatch = bodyText.match(/\*\*Description\s*:\*\*\s*(.*?)(?=\n\s*\*\*|\n\s*#|$)/is);
      if (descriptionMatch && descriptionMatch[1]) {
        metadata.description = _cleanMarkdown(descriptionMatch[1].trim());
      } else {
        // Fallback: first meaningful paragraph
        const cleanedText = _cleanMarkdown(bodyText);
        const paragraphs = cleanedText.split(/\n{2,}/);
        for (const paragraph of paragraphs) {
          const trimmedParagraph = paragraph.trim();
          if (trimmedParagraph &&
              !trimmedParagraph.startsWith('#') &&
              !trimmedParagraph.match(/^[a-z_]+\s*:/i) &&
              trimmedParagraph.length > 15) {
            metadata.description = trimmedParagraph;
            break;
          }
        }
      }
    }

    // Supported cards extraction
    if (!yamlSetProperties.supported && metadata.supported.length === 0) {
      const supportedMatch = bodyText.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*\[(.*?)\]/i);
      if (supportedMatch) {
        metadata.supported = supportedMatch[1]
          .split(",")
          .map(card => card.trim().replace(/['"]/g, ""));
      }
    }

    // Creator extraction
    if (!yamlSetProperties.creator && (!metadata.creator || metadata.creator === defaultCreator)) {
      const creatorMatch = bodyText.match(/\*\*Creator\s*:\*\*\s*\[?([^\]\n\r]+)(?:\]|\n|$)/i);
      if (creatorMatch) {
        metadata.creator = creatorMatch[1].trim();
        if (!metadata.author) metadata.author = metadata.creator;
      }
    }

    // Image URL extraction
    if (!yamlSetProperties.imageUrl && !metadata.imageUrl) {
      // Look in specific sections first
      const sections = {
        "Screenshot": bodyText.match(/Screenshot:([^#]*?)(?=#|\n\s*\n\s*\*\*|$)/is)?.[1] || "",
        "GetThisModule": bodyText.match(/Get this Module([^#]*?)(?=#|\n\s*\n\s*\*\*|$)/is)?.[1] || ""
      };
      
      // Patterns to find images
      const imagePatterns = [
        { regex: /!\[.*?\]\((https:\/\/[^)]+)\)/g, isGlobal: true },
        { regex: /<img[^>]*src=["'](https:\/\/[^"']+)["'][^>]*>/i, isGlobal: false },
        { regex: /src="(https:\/\/github\.com\/user-attachments\/assets\/[^"]+)"/i, isGlobal: false }
      ];
      
      // Look in priority sections
      for (const section of Object.values(sections)) {
        if (!section) continue;
        
        for (const pattern of imagePatterns) {
          if (pattern.isGlobal) {
            const matches = [...section.matchAll(pattern.regex)];
            if (matches.length > 0) {
              metadata.imageUrl = matches[0][1];
              break;
            }
          } else {
            const match = section.match(pattern.regex);
            if (match) {
              metadata.imageUrl = match[1];
              break;
            }
          }
        }
        
        if (metadata.imageUrl) break;
      }
      
      // If no image was found, search the entire text
      if (!metadata.imageUrl) {
        const imageMatches = [...bodyText.matchAll(/!\[.*?\]\((https:\/\/[^)]+)\)/g)];
        if (imageMatches.length > 0) {
          // Prioritize user-uploaded images
          const userUploadedImages = imageMatches.filter(match => 
            match[1].includes('user-images.githubusercontent.com') || 
            match[1].includes('github.com/user-attachments')
          );
          
          metadata.imageUrl = userUploadedImages.length > 0 
            ? userUploadedImages[0][1] 
            : imageMatches[0][1];
        } else {
          // Try HTML tags
          const imgTagMatch = bodyText.match(/<img[^>]*src=["'](https:\/\/[^"']+)["'][^>]*>/i);
          if (imgTagMatch) {
            metadata.imageUrl = imgTagMatch[1];
          }
        }
      }
    }
  }

  // Extract from GitHub title
  if (title) {
    // Type from title
    if (!yamlSetProperties.type) {
      const typeMatch = title.match(/\[(.*?) Module\]/i);
      if (typeMatch) metadata.type = typeMatch[1].toLowerCase();
    }

    // Version from title
    if (!yamlSetProperties.version && metadata.version === "1.0") {
      const versionMatch = title.match(/(v?[\d\.]+)/);
      if (versionMatch) {
        metadata.version = versionMatch[1];
      }
    }

    // Name from title
    if (!yamlSetProperties.name) {
      let name = title.replace(/\[.*?\]\s*/, "").trim();
      name = name.replace(/\s*-\s*v?[\d\.]+$/, "").trim();
      metadata.name = name;
    }
  }

  return metadata;
}
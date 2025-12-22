import jsyaml from 'js-yaml';
import { _slugify, _cleanMarkdown } from './utils.js';
import { getAvailableCardTypes } from './module-editor.js';

// Helper function to normalize card names to IDs
function normalizeCardNameToId(cardName) {
  if (!cardName || typeof cardName !== 'string') return null;
  
  const normalized = cardName.trim().toLowerCase().replace(/['"]/g, '');
  const availableCards = getAvailableCardTypes();
  
  // First try exact match (case-insensitive)
  const exactMatch = availableCards.find(card => 
    card.id.toLowerCase() === normalized || 
    card.name.toLowerCase() === normalized
  );
  if (exactMatch) return exactMatch.id;
  
  // Try matching by normalizing spaces and special chars
  const normalizedId = normalized.replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const normalizedMatch = availableCards.find(card => 
    card.id.replace(/-/g, '') === normalizedId.replace(/-/g, '') ||
    card.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === normalizedId
  );
  if (normalizedMatch) return normalizedMatch.id;
  
  // Return the normalized string as-is if no match found (might be a valid ID)
  return normalized;
}

function parseSupportedCardsFromText(text) {
  if (!text || typeof text !== 'string') return [];

  const availableCards = getAvailableCardTypes();
  const cardsByPriority = [...availableCards].sort((a, b) => {
    const aLen = (a?.name || a?.id || '').length;
    const bLen = (b?.name || b?.id || '').length;
    return bLen - aLen;
  });

  // Keep the parsing constrained to the supported-cards value itself.
  let remaining = text.trim();
  remaining = remaining.replace(/^[\[\(\{]\s*/, '').replace(/\s*[\]\)\}]\s*$/, '');
  remaining = remaining.split('|')[0] || remaining;
  remaining = remaining.split('**')[0] || remaining;

  const results = [];

  const isBoundary = (ch) => {
    if (!ch) return true;
    return /\s|,|;|\||\/|&|\+|\]|\)|\}/.test(ch);
  };

  const matchAtStart = (input, candidate) => {
    if (!candidate) return null;
    const trimmed = input.trimStart();
    const lower = trimmed.toLowerCase();
    const candLower = candidate.toLowerCase();
    if (!lower.startsWith(candLower)) return null;
    const nextCh = lower[candLower.length];
    if (!isBoundary(nextCh)) return null;
    const leadingTrimmed = input.length - trimmed.length;
    return { length: leadingTrimmed + candLower.length };
  };

  for (let i = 0; i < 10; i++) {
    let matched = null;
    let matchedCard = null;

    // Remove bullets/markers between items.
    remaining = remaining.replace(/^\s*(?:-|\*|•)\s*/g, '');

    for (const card of cardsByPriority) {
      const byName = matchAtStart(remaining, card.name);
      const byId = matchAtStart(remaining, card.id);
      matched = byName || byId;
      if (matched) {
        matchedCard = card;
        break;
      }
    }

    if (!matched || !matchedCard) break;

    if (!results.includes(matchedCard.id)) results.push(matchedCard.id);

    remaining = remaining.slice(matched.length);
    remaining = remaining.replace(/^\s*(?:,|;|\||\/|&|\+|\band\b|\bor\b)\s*/i, '');
    if (!remaining.trim()) break;
  }

  return results;
}

function extractSupportedCardsFromMarkdownBody(bodyText) {
  if (!bodyText || typeof bodyText !== 'string') return null;

  const lines = bodyText.split(/\r?\n/);

  const isAllSupportedValue = (value) => {
    if (!value || typeof value !== 'string') return false;
    const v = value.trim();
    // Accept "All", "All cards"
    return /^all(?:\s+cards?)?\b/i.test(v);
  };

  const cleanLine = (line) => (line || '').replace(/^\s*>\s*/g, '').trim();

  const isSectionBoundary = (line) => {
    const l = cleanLine(line);
    if (!l) return false;
    if (/^\[!\w+\]/.test(l)) return true; // GitHub admonitions: [!IMPORTANT], [!NOTE], ...
    if (/^#{1,6}\s+/.test(l)) return true; // headings
    if (/^\*\*[^*]+:\*\*/.test(l)) return true; // new metadata line
    return false;
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const l = cleanLine(raw);
    if (!l) continue;
    if (/unsupported\s*cards?/i.test(l)) continue;

    // Match both "**Supported cards:**" and "Supported cards:"
    const headerMatch = l.match(/(?:\*\*)?\s*supported\s*(?:cards|card)?\s*:\s*(?:\*\*)?\s*(.*)$/i);
    if (!headerMatch) continue;

    const inlineValue = (headerMatch[1] || '').trim();
    if (inlineValue) {
      if (isAllSupportedValue(inlineValue)) return undefined; // undefined means "all supported"
      const parsedInline = parseSupportedCardsFromText(inlineValue);
      if (parsedInline.length) return parsedInline;

      const fallbackInline = inlineValue
        .split(',')
        .map((c) => normalizeCardNameToId(c.trim()))
        .filter(Boolean);
      if (fallbackInline.length) return [...new Set(fallbackInline)];
    }

    // Multi-line format:
    // **Supported cards:**
    // - Button
    // - Pop-up
    const listItems = [];
    for (let j = i + 1; j < lines.length; j++) {
      const nextRaw = lines[j];
      const next = cleanLine(nextRaw);

      if (!next) {
        if (listItems.length) break;
        continue;
      }
      if (/^\[!\w+\]/.test(next)) continue;
      if (isSectionBoundary(nextRaw) && listItems.length) break;

      const bulletMatch = next.match(/^(?:-|\*|•)\s+(.+)$/);
      if (bulletMatch) {
        listItems.push(bulletMatch[1].trim());
        continue;
      }

      // If we already collected bullets, stop at the first non-bullet line.
      if (listItems.length) break;

      // Otherwise treat the next meaningful line as the supported-cards value.
      if (isAllSupportedValue(next)) return undefined;
      const parsedNextLine = parseSupportedCardsFromText(next);
      if (parsedNextLine.length) return parsedNextLine;

      const fallbackNextLine = next
        .split(',')
        .map((c) => normalizeCardNameToId(c.trim()))
        .filter(Boolean);
      if (fallbackNextLine.length) return [...new Set(fallbackNextLine)];
      break;
    }

    if (listItems.length) {
      if (listItems.some((item) => isAllSupportedValue(item))) return undefined;
      const parsedFromBullets = listItems
        .map((item) => parseSupportedCardsFromText(item))
        .flat()
        .filter(Boolean);
      if (parsedFromBullets.length) return [...new Set(parsedFromBullets)];

      const fallbackFromBullets = listItems
        .map((c) => normalizeCardNameToId(c.trim()))
        .filter(Boolean);
      if (fallbackFromBullets.length) return [...new Set(fallbackFromBullets)];
    }

    // Keep scanning in case there is another supported-cards block.
  }

  // Return null to indicate "not found".
  return null;
}

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
            supportedCards: metadata.supported === undefined 
              ? undefined 
              : (Array.isArray(metadata.supported) 
                  ? metadata.supported 
                  : (metadata.supported ? [metadata.supported] : [])),
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
    supported: ['button', 'climate', 'cover', 'horizontal-buttons-stack', 'media-player', 'pop-up', 'select', 'separator', 'sub-buttons'], // default supported cards
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
    editor: false, code: false, imageUrl: false, is_global: false
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
            applyProperty(mainObj, 'is_global');
            
            // Properties with alternative names
            applyProperty(mainObj, 'form_schema', 'editor');
            applyProperty(mainObj, 'supported', 'supported', ['supported_card', 'supported_cards']);
            applyProperty(mainObj, 'unsupported', 'unsupported', ['unsupported_card', 'unsupported_cards']);
            
            // Handle backward compatibility - if unsupported is set but supported is not
            if (mainObj.unsupported && !mainObj.supported && !yamlSetProperties.supported) {
              // All cards except those in unsupported are supported
              const allCards = ['button', 'climate', 'cover', 'horizontal-buttons-stack', 'media-player', 'pop-up', 'select', 'separator', 'sub-buttons'];
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
              applyProperty(mainObj.info, 'supported', 'supported', ['supported_card', 'supported_cards']);
              applyProperty(mainObj.info, 'unsupported', 'unsupported', ['unsupported_card', 'unsupported_cards']);
              
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
          applyProperty(parsedYaml, 'is_global');
          
          // Properties with alternative names
          applyProperty(parsedYaml, 'form_schema', 'editor');
          applyProperty(parsedYaml, 'supported', 'supported', ['supported_card', 'supported_cards']);
          applyProperty(parsedYaml, 'unsupported', 'unsupported', ['unsupported_card', 'unsupported_cards']);
          
          // Handle backward compatibility - if unsupported is set but supported is not
          if (parsedYaml.unsupported && !parsedYaml.supported && !yamlSetProperties.supported) {
            // All cards except those in unsupported are supported
            const allCards = ['button', 'climate', 'cover', 'horizontal-buttons-stack', 'media-player', 'pop-up', 'select', 'separator', 'sub-buttons'];
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
    if (!yamlSetProperties.supported) {
      const supportedFromBody = extractSupportedCardsFromMarkdownBody(bodyText);
      if (supportedFromBody === undefined) {
        // undefined indicates "all cards supported"
        metadata.supported = undefined;
        yamlSetProperties.supported = true;
      } else if (Array.isArray(supportedFromBody) && supportedFromBody.length > 0) {
        metadata.supported = supportedFromBody;
        yamlSetProperties.supported = true;
      }

      if (!yamlSetProperties.supported) {
      // Check for "All" or "all cards" first
      const allMatch = bodyText.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*(?:-\s*)?(?:All|all\s+cards?)/i);
      if (allMatch) {
        // Set to undefined to indicate all cards are supported
        metadata.supported = undefined;
        yamlSetProperties.supported = true;
      } else {
        // Check for list format [card1, card2]
        const supportedMatch = bodyText.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*\[(.*?)\]/i);
        if (supportedMatch) {
          const parsedFromList = supportedMatch[1]
            .split(",")
            .map(card => normalizeCardNameToId(card.trim()))
            .filter(card => card && card.length > 0);
          if (parsedFromList.length > 0) {
            metadata.supported = parsedFromList;
            yamlSetProperties.supported = true;
          }
        } else {
          // Check for single card format without brackets: "Supported cards: Button"
          const singleCardMatch = bodyText.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*([^\n\r]+?)(?=\||\n|$)/i);
          if (singleCardMatch) {
            const cardText = singleCardMatch[1].trim();
            // Only process if it's not "All" or "all cards" (already handled above)
            if (!/^(?:All|all\s+cards?)$/i.test(cardText)) {
              const parsedFromStart = parseSupportedCardsFromText(cardText);
              if (parsedFromStart.length > 0) {
                metadata.supported = parsedFromStart;
                yamlSetProperties.supported = true;
              } else {
                const parsedFallback = cardText
                  .split(",")
                  .map(card => normalizeCardNameToId(card.trim()))
                  .filter(card => card && card.length > 0);
                if (parsedFallback.length > 0) {
                  metadata.supported = parsedFallback;
                  yamlSetProperties.supported = true;
                }
              }
            }
          }
        }
      }
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
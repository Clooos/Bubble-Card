import { yamlKeysMap } from './registry.js';

// Gets text data from the yamlKeysMap for a module key
export function getTextFromMap(key) {
  const value = yamlKeysMap.get(key) || {};

  let name = value.name || key;
  let description = value.description || '';
  let formSchema = value.editor || [];
  let supportedCards = value.supported || [];
  let unsupportedCard = value.unsupported || [];
  let creator = value.creator || value.author || '';
  let moduleLink = value.link || '';
  let moduleVersion = value.version || '';

  if (typeof formSchema === 'string') {
    formSchema = yamlKeysMap.get(formSchema)?.editor || [];
  }

  if (!Array.isArray(formSchema)) {
    formSchema = [formSchema];
  }

  if (!Array.isArray(supportedCards)) {
    supportedCards = [supportedCards];
  }

  if (!Array.isArray(unsupportedCard)) {
    unsupportedCard = [unsupportedCard];
  }

  // Handle backward compatibility
  if (unsupportedCard.length > 0 && supportedCards.length === 0) {
    const allCards = ['button', 'climate', 'cover', 'horizontal-buttons-stack', 'media-player', 'pop-up', 'select', 'separator'];
    supportedCards = allCards.filter(id => !unsupportedCard.includes(id));
  }

  return { name, description, formSchema, supportedCards, unsupportedCard, moduleVersion, creator, moduleLink };
}

// Formats a module description to be more readable
export function _formatModuleDescription(description) {
  if (!description) return "No description available";

  try {
    // 1. Search directly after "Description:" if present
    const descriptionPattern = /Description:\s*([^\n]+)/i;
    const descMatch = description.match(descriptionPattern);
    if (descMatch && descMatch[1]) {
      const directDesc = _cleanMarkdown(descMatch[1].trim());
      if (directDesc && directDesc.length > 5) {
        return getFirstSentence(directDesc);
      }
    }

    // 2. Search in YAML format
    // 2.1 First check for multiline descriptions with pipe symbol (|)
    const yamlMultilinePattern = /description:\s*\|([\s\S]*?)(?=\n\s*\w+:|$)/i;
    const yamlMultilineMatch = description.match(yamlMultilinePattern);
    if (yamlMultilineMatch && yamlMultilineMatch[1]) {
      // Extract the first line or paragraph from multiline description
      const multilineContent = yamlMultilineMatch[1].trim();
      const firstParagraph = multilineContent.split(/\n{2,}/)[0].trim();
      if (firstParagraph && firstParagraph.length > 5) {
        const cleanedDesc = _cleanMarkdown(firstParagraph);
        return getFirstSentence(cleanedDesc);
      }
    }

    // 2.2 Check for simple quoted descriptions
    const yamlDescPattern = /description:\s*["']([^"']+)["']/i;
    const yamlMatch = description.match(yamlDescPattern);
    if (yamlMatch && yamlMatch[1]) {
      const yamlDesc = _cleanMarkdown(yamlMatch[1].trim());
      if (yamlDesc && yamlDesc.length > 5) {
        return getFirstSentence(yamlDesc);
      }
    }

    // 2.3 Simple description case
    const simpleDescPattern = /description:\s*([^\n\r]+)/i;
    const simpleMatch = description.match(simpleDescPattern);
    if (simpleMatch && simpleMatch[1]) {
      const simpleDesc = _cleanMarkdown(simpleMatch[1].trim());
      if (simpleDesc && simpleDesc.length > 5) {
        return getFirstSentence(simpleDesc);
      }
    }

    // 3. Extract description by analyzing the standard template structure
    const lines = description.split('\n');
    let foundMetadata = false;
    let descriptionLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Ignore empty lines
      if (!line) continue;

      // Detect the end of the metadata section
      if (line.includes('Supported cards:') ||
        line.match(/^Version:/i) ||
        line.match(/^Creator:/i) ||
        line.match(/^ID:/i)) {
        foundMetadata = true;
        continue;
      }

      // Once past metadata, search for the first descriptive line
      if (foundMetadata) {
        // Ignore technical text and Markdown formats
        if (line.startsWith('```') ||
          line.startsWith('#') ||
          line.startsWith('-') ||
          line.startsWith('>') ||
          line.includes('yaml') ||
          line.match(/^\s*[a-z_]+:/i)) {
          continue;
        }

        // Potentially descriptive line found
        if (line.length > 10 &&
          !line.includes('Supported')) {
          descriptionLines.push(line);

          // If we already have a substantial description, stop
          if (descriptionLines.join(' ').length > 40) {
            break;
          }
        }
      }
    }

    if (descriptionLines.length > 0) {
      const finalDesc = _cleanMarkdown(descriptionLines.join(' ').trim());
      return getFirstSentence(finalDesc);
    }

    // 4. If the description is already a simple string, return it directly
    if (typeof description === 'string' && !description.includes('description:')) {
      return getFirstSentence(_cleanMarkdown(description));
    }

    // If everything fails, return a default message
    return "No description available";
  } catch (error) {
    console.warn("Error during description formatting:", error);
    return "No description available";
  }
}

// Helper function to extract the first sentence
function getFirstSentence(text) {
  if (!text) return text;
  
  // Clean the text for analysis
  const cleanText = text.trim();
  
  // Function to check if we found a sentence delimiter
  const isDelimiter = (index, type) => index >= 0 && (bestIndex === -1 || index < bestIndex);
  
  // Search for the first occurrence of different delimiters
  let bestIndex = -1;
  let delimiterType = null;
  
  // 1. Standard punctuation (. ! ?)
  const punctIndex = cleanText.search(/[.!?]\s/);
  if (isDelimiter(punctIndex, 'punct')) {
    bestIndex = punctIndex + 1; // +1 to include the punctuation
    delimiterType = 'punct';
  }
  
  // 2. Common HTML tags that indicate separation
  const tagIndex = cleanText.search(/<br|<\/p>|<p\s|<div|<\/div|<\/a>/i);
  if (isDelimiter(tagIndex, 'html')) {
    bestIndex = tagIndex;
    delimiterType = 'html';
  }
  
  // 3. Standard line breaks
  const lineBreakIndex = cleanText.search(/\n|\r\n/);
  if (isDelimiter(lineBreakIndex, 'break')) {
    bestIndex = lineBreakIndex;
    delimiterType = 'break';
  }
  
  // If a delimiter was found, extract up to that point
  if (bestIndex >= 0) {
    let firstPart = cleanText.substring(0, bestIndex).trim();
    
    // Check if we have a reasonable text (avoid fragments that are too short)
    if (firstPart.length < 5 && cleanText.length > 30) {
      // If the first segment is too short, get more text
      const nextBreak = cleanText.substring(bestIndex + 1).search(/[.!?]|\n|<br/i);
      if (nextBreak > 0) {
        firstPart = cleanText.substring(0, bestIndex + 1 + nextBreak).trim();
      }
    }
    
    // Clean potential HTML tags (keep only text)
    firstPart = firstPart.replace(/<[^>]*>/g, '').trim();
    
    // Add a period if needed (unless it's already the delimiter)
    if (delimiterType === 'punct') {
      return firstPart; // The period is already included
    } else {
      return firstPart.endsWith('.') ? firstPart : firstPart + '.';
    }
  }
  
  // Case where no delimiter is found - return all cleaned text
  const finalText = cleanText.replace(/<[^>]*>/g, '').trim();
  return finalText.endsWith('.') ? finalText : finalText + '.';
}

export function _cleanMarkdown(text) {
  if (!text) return "";

  return text
    .replace(/\*\*(.*?)\*\*/g, "$1") // Bold
    .replace(/\*(.*?)\*/g, "$1")     // Italic
    .replace(/`(.*?)`/g, "$1")       // Inline code
    .replace(/~~(.*?)~~/g, "$1")     // Strikethrough
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Links
    .replace(/<\/?[^>]+(>|$)/g, "")   // HTML tags
    .replace(/^#+\s+/gm, "")         // Headers
    .replace(/\n{3,}/g, "\n\n")      // Remove multiple spaces
    .trim();
}

export function _slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word characters
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function _compareVersions(v1, v2) {
  // Simple version comparison like 2025.03.15 > 2025.03.10
  if (!v1 || !v2) return 0;

  const v1Parts = v1.split('.').map(Number);
  const v2Parts = v2.split('.').map(Number);

  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const part1 = v1Parts[i] || 0;
    const part2 = v2Parts[i] || 0;

    if (part1 > part2) return 1;
    if (part1 < part2) return -1;
  }

  return 0; // Versions are identical
}

export function scrollToModuleForm(context, isSmooth = true) {
  const moduleForm = context.shadowRoot.getElementById('module-editor-top-marker');
  
  if (moduleForm) {
    const behavior = isSmooth ? 'smooth' : 'instant';
    moduleForm.scrollIntoView({ behavior: behavior, block: 'start' });
  }
} 
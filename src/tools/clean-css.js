const CLEAN_CSS_CACHE_LIMIT = 600;
const cleanCSSCache = new Map(); // LRU cache (Map preserves insertion order)

// Precompiled regex patterns
const RE_BLOCK_COMMENTS = /\/\*[\s\S]*?\*\//g;
const RE_MULTI_WHITESPACE = /\s+/g;
const RE_SPACE_AROUND_SEPARATORS = /\s*([{};,])\s*/g;
const RE_EMPTY_DECLARATION = /([a-zA-Z0-9_-]+)\s*:\s*;/g;
const RE_UNDEFINED_OUTSIDE_QUOTES = /undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g;
const RE_EMPTY_BLOCK = /[^{};]+\s*{\s*}/g;
const RE_TRAILING_COMMA = /,(?=\s*[}\n])/g;
const RE_BLOCKS_OR_AT_RULES = /(@[^{}]*?\{(?:[^{}]*?\{[^{}]*?\})*?[^{}]*?\}|[^{}]*?\{[^{}]*?\})/g;

// Optimized regex patterns for line checks
const RE_LINE_TRAILING_COMMA = /,\s*(\/\*.*\*\/)?$/;
const RE_START_SELECTOR = /^[.:#&\[*]/;
const RE_COMBINATOR = /^[>+~]/;
const RE_TAG_SELECTOR = /^[a-zA-Z][a-zA-Z0-9-_]*$/;
const RE_PSEUDO = /::?[a-zA-Z_-][a-zA-Z0-9_-]*/;
const RE_GROUPING = /^[()\[\]]+,?$/;

function storeCached(key, value) {
  cleanCSSCache.set(key, value);
  if (cleanCSSCache.size > CLEAN_CSS_CACHE_LIMIT) {
    cleanCSSCache.delete(cleanCSSCache.keys().next().value);
  }
  return value;
}

export function cleanCSS(css) {
  // Fast-path for non-strings or empty strings
  if (!css || typeof css !== "string") return "";

  // LRU cache lookup
  if (cleanCSSCache.has(css)) {
    const cached = cleanCSSCache.get(css);
    // refresh recency
    cleanCSSCache.delete(css);
    cleanCSSCache.set(css, cached);
    return cached;
  }

  let result = css;

  // Apply inexpensive guards before heavier regex passes
  if (result.includes("/*")) result = result.replace(RE_BLOCK_COMMENTS, "");

  // Short-circuit: if there are no CSS blocks at all, the final extraction will
  // return "" anyway — skip all remaining work.
  if (!result.includes("{")) {
    return storeCached(css, "");
  }

  if (result.includes("\n")) {
    let nestingLevel = 0;
    const filteredLines = [];
    const lines = result.split("\n");

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        
        // Skip empty lines immediately
        if (!trimmed) continue;

        // Efficient brace counting
        let openBraces = 0;
        let closeBraces = 0;
        
        // Count braces using a simple loop to avoid regex overhead on every line
        for (let j = 0; j < line.length; j++) {
            if (line[j] === '{') openBraces++;
            else if (line[j] === '}') closeBraces++;
        }

        let shouldKeep = nestingLevel > 0;

        // If we are not in a block, we need to check if the line looks like valid CSS
        if (!shouldKeep) {
            shouldKeep = 
                openBraces > 0 ||
                closeBraces > 0 ||
                trimmed.startsWith("@") ||
                trimmed.startsWith("--") ||
                RE_LINE_TRAILING_COMMA.test(trimmed) ||
                RE_START_SELECTOR.test(trimmed) || 
                RE_COMBINATOR.test(trimmed) ||
                RE_TAG_SELECTOR.test(trimmed) ||
                RE_PSEUDO.test(trimmed) ||
                RE_GROUPING.test(trimmed);
        }

        if (shouldKeep) {
            filteredLines.push(line);
        }

        nestingLevel += openBraces - closeBraces;
        if (nestingLevel < 0) {
            nestingLevel = 0;
        }
    }

    result = filteredLines.join("\n");
  }

  // Whitespace normalization is cheap; do it unconditionally
  result = result.replace(RE_MULTI_WHITESPACE, " ");
  result = result.replace(RE_SPACE_AROUND_SEPARATORS, "$1");
  if (result.includes(":;") || result.includes(": ")) result = result.replace(RE_EMPTY_DECLARATION, "");
  if (result.includes("undefined")) result = result.replace(RE_UNDEFINED_OUTSIDE_QUOTES, "");
  if (result.includes("{")) result = result.replace(RE_EMPTY_BLOCK, "");
  if (result.includes(",")) result = result.replace(RE_TRAILING_COMMA, "");

  // Keep only well-formed blocks and at-rules
  const matched = result.match(RE_BLOCKS_OR_AT_RULES);
  result = matched ? matched.join("\n") : "";

  return storeCached(css, result);
}

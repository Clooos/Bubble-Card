// js-yaml is ~43 KB minified and is only ever reached from an async path:
// registry's loadYAML and the legacy-module migration both await before they
// parse. It is loaded on demand so a dashboard that has no legacy YAML module
// never pays for it. Call ensureYamlLoaded() before parseYamlWithIncludes().
let YAML = null;
let yamlPromise = null;

export function ensureYamlLoaded() {
  if (YAML) return Promise.resolve(YAML);
  if (!yamlPromise) {
    yamlPromise = import(/* webpackChunkName: "yaml" */ 'js-yaml').then((mod) => {
      YAML = mod;
      return YAML;
    });
  }
  return yamlPromise;
}

export function isYamlLoaded() {
  return YAML !== null;
}

const LEGACY_MODULES_BASE_PATH = '/local/bubble/';

function sanitizeIncludePath(path) {
  if (!path || typeof path !== 'string') return '';
  return path.trim().replace(/^\.\/+/, '').replace(/^\/+/, '');
}

function fetchIncludeContent(relativePath) {
  if (typeof XMLHttpRequest === 'undefined') {
    console.warn('Bubble Card - XMLHttpRequest is unavailable, skipping !include resolution.');
    return null;
  }

  const sanitizedPath = sanitizeIncludePath(relativePath);
  if (!sanitizedPath) return null;

  const url = `${LEGACY_MODULES_BASE_PATH}${sanitizedPath}`;
  try {
    const request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);
    if (request.status === 200) {
      return request.responseText;
    }
    console.error(`Bubble Card - Unable to resolve !include (${url}): HTTP ${request.status}`);
  } catch (error) {
    console.error(`Bubble Card - Error while loading included YAML (${url}):`, error);
  }
  return null;
}

let includeSchema = null;

export function getYamlIncludeSchema() {
  if (includeSchema) return includeSchema;

  const includeType = new YAML.Type('!include', {
    kind: 'scalar',
    resolve: (data) => typeof data === 'string' && data.trim().length > 0,
    construct: (data) => {
      const fileContent = fetchIncludeContent(data);
      if (!fileContent || !fileContent.trim()) {
        return null;
      }

      try {
        return YAML.load(fileContent, { schema: getYamlIncludeSchema() });
      } catch (error) {
        console.error(`Bubble Card - Error parsing included YAML (${data}):`, error);
        return null;
      }
    },
  });

  includeSchema = YAML.DEFAULT_SCHEMA.extend([includeType]);
  return includeSchema;
}

export function parseYamlWithIncludes(yamlString) {
  if (!yamlString || typeof yamlString !== 'string') return null;
  if (!YAML) {
    // Only reachable if a caller skipped ensureYamlLoaded(); the parse stays
    // synchronous so !include resolution can keep using a blocking request.
    console.error('Bubble Card - YAML parser was used before it finished loading.');
    return null;
  }
  try {
    return YAML.load(yamlString, { schema: getYamlIncludeSchema() });
  } catch (error) {
    console.error('Bubble Card - YAML parsing error:', error);
    return null;
  }
}



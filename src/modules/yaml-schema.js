import * as YAML from 'js-yaml';

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
  try {
    return YAML.load(yamlString, { schema: getYamlIncludeSchema() });
  } catch (error) {
    console.error('Bubble Card - YAML parsing error:', error);
    return null;
  }
}



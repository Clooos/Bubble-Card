function getValueFromEntityId(hass,value){
  try{
    if (hass.states[value]) {
    return hass.states[value]?.state;
  }}
  catch{}
  return undefined;
}

function checkStateCondition(condition, hass) {
  const entityId = condition.entity_id || condition.entity;
  const entity = entityId && hass.states[entityId] ? hass.states[entityId] : null;
  const current = entity
    ? condition.attribute && entity.attributes
      ? entity.attributes[condition.attribute]
      : entity.state
    : "unavailable";

  let value = condition.state ?? condition.state_not;

  if (Array.isArray(value)) {
    const entityValues = value
      .map((v) => getValueFromEntityId(hass, v))
      .filter((v) => v !== undefined);
    value = [...value, ...entityValues];
  } else if (typeof value === "string") {
    const entityValue = getValueFromEntityId(hass, value);
    value = [value];
    if (entityValue) {
      value.push(entityValue);
    }
  }

  if (condition.state != null) {
    return ensureArray(value).includes(current);
  } else if (condition.state_not != null) {
    return !ensureArray(value).includes(current);
  }

  return false;
}

export function ensureArray(value) {
  if (value === undefined || Array.isArray(value)) {
    return value;
  }
  return [value];
}

function normalizeEntityIds(entityId) {
  if (Array.isArray(entityId)) {
    return entityId.filter(Boolean);
  }
  return entityId ? [entityId] : [];
}

function evaluateTemplate(template, hass, variables = {}) {
  if (!template || typeof template !== "string") {
    return undefined;
  }

  // Extract inner expression when wrapped in {{ }}
  const match = template.trim().match(/^{{(.*)}}$/s);
  let expr = (match ? match[1] : template).trim();

  // Basic Jinja → JS translations
  expr = expr
    .replace(/\band\b/gi, "&&")
    .replace(/\bor\b/gi, "||")
    .replace(/\bnot\b/gi, "!")
    .replace(/\bnone\b/gi, "null")
    .replace(/\bTrue\b/g, "true")
    .replace(/\bFalse\b/g, "false");

  // Simple filter rewrites
  expr = expr.replace(/state_attr\(([^)]+)\)\s*\|\s*int\(([^)]*)\)/gi, "__INT__(state_attr($1), $2)");
  expr = expr.replace(/state_attr\(([^)]+)\)\s*\|\s*int\b/gi, "__INT__(state_attr($1))");
  expr = expr.replace(/state_attr\(([^)]+)\)\s*\|\s*float\(([^)]*)\)/gi, "__FLOAT__(state_attr($1), $2)");
  expr = expr.replace(/state_attr\(([^)]+)\)\s*\|\s*float\b/gi, "__FLOAT__(state_attr($1))");
  expr = expr.replace(/state_attr\(([^)]+)\)\s*\|\s*lower\b/gi, "__LOWER__(state_attr($1))");
  expr = expr.replace(/state_attr\(([^)]+)\)\s*\|\s*upper\b/gi, "__UPPER__(state_attr($1))");

  // Generic pipe handling for int/float/lower/upper on any expression (best-effort)
  expr = expr.replace(/([^)>\s|]+)\s*\|\s*int\(([^)]*)\)/gi, "__INT__($1, $2)");
  expr = expr.replace(/([^)>\s|]+)\s*\|\s*int\b/gi, "__INT__($1)");
  expr = expr.replace(/([^)>\s|]+)\s*\|\s*float\(([^)]*)\)/gi, "__FLOAT__($1, $2)");
  expr = expr.replace(/([^)>\s|]+)\s*\|\s*float\b/gi, "__FLOAT__($1)");
  expr = expr.replace(/([^)>\s|]+)\s*\|\s*lower\b/gi, "__LOWER__($1)");
  expr = expr.replace(/([^)>\s|]+)\s*\|\s*upper\b/gi, "__UPPER__($1)");

  const ctx = {
    ...variables,
    state_attr: (entityId, attribute) =>
      hass?.states?.[entityId]?.attributes?.[attribute],
    states: (entityId) => hass?.states?.[entityId]?.state,
    is_state: (entityId, value) => hass?.states?.[entityId]?.state === value,
    is_state_attr: (entityId, attribute, value) =>
      hass?.states?.[entityId]?.attributes?.[attribute] === value,
    __INT__: (value, defaultValue = 0) => {
      const n = parseInt(value, 10);
      return Number.isNaN(n) ? defaultValue : n;
    },
    __FLOAT__: (value, defaultValue = 0) => {
      const n = parseFloat(value);
      return Number.isNaN(n) ? defaultValue : n;
    },
    __LOWER__: (value) =>
      typeof value === "string" ? value.toLowerCase() : value,
    __UPPER__: (value) =>
      typeof value === "string" ? value.toUpperCase() : value,
  };

  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function(
      "__CTX__",
      `with (__CTX__) { return (${expr}); }`
    );
    return fn(ctx);
  } catch {
    return undefined;
  }
}

function renderTemplateValue(valueTemplate, hass, variables = {}) {
  if (!valueTemplate) {
    return undefined;
  }

  if (typeof hass.renderTemplate === "function") {
    try {
      const result = hass.renderTemplate(valueTemplate, { variables });
      if (!(result instanceof Promise)) {
        return result;
      }
    } catch {
      // Fall back to local evaluation
    }
  }

  return evaluateTemplate(valueTemplate, hass, variables);
}

function checkStateNumericCondition(condition,hass) {
  const entityIds = normalizeEntityIds(condition.entity_id || condition.entity);

  if (!entityIds.length) {
    return false;
  }

  let above = condition.above;
  let below = condition.below;

  // Handle entity_id, UI should be updated for conditionnal card (filters does not have UI for now)
  if (typeof above === "string") {
    above = getValueFromEntityId(hass, above) ?? above;
  }
  if (typeof below === "string") {
    below = getValueFromEntityId(hass, below) ?? below;
  }

  const numericAbove = Number(above);
  const numericBelow = Number(below);

  return entityIds.some((id) => {
    const entity = hass.states[id];
    if (!entity) {
      return false;
    }

    let state = condition.attribute && entity.attributes
      ? entity.attributes[condition.attribute]
      : entity.state;

    if (condition.value_template) {
      const rendered = renderTemplateValue(condition.value_template, hass, {
        value: state,
        entity,
        entity_id: id,
      });
      if (rendered !== undefined) {
        state = rendered;
      }
    }

    const numericState = Number(state);

    if (isNaN(numericState)) {
      return false;
    }

    return (
      (condition.above == null ||
        isNaN(numericAbove) ||
        numericAbove < numericState) &&
      (condition.below == null ||
        isNaN(numericBelow) ||
        numericBelow > numericState)
    );
  });
}

function checkScreenCondition(condition) {
  return condition.media_query
    ? matchMedia(condition.media_query).matches
    : false;
}

function checkUserCondition(condition, hass) {
  return condition.users && hass.user?.id
    ? condition.users.includes(hass.user.id)
    : false;
}

function checkAndCondition(condition, hass) {
  if (!condition.conditions) return true;
  return checkConditionsMet(condition.conditions, hass);
}

function checkOrCondition(condition, hass) {
  if (!condition.conditions) return true;
  return condition.conditions.some((c) => checkConditionsMet([c], hass));
}

// Add NOT condition support: passes if all embedded conditions are not true.
function checkNotCondition(condition, hass) {
  if (!condition.conditions) return true;
  return !condition.conditions.some((c) => checkConditionsMet([c], hass));
}

// Evaluate Jinja template condition using hass.renderTemplate when available
function checkTemplateCondition(condition, hass) {
  if (!condition.value_template) {
    return false;
  }

  try {
    const result = renderTemplateValue(condition.value_template, hass);
    // Accept truthy/non-empty values as pass
    return result === true || result === "true" || result === 1 || result === "1" || result === "True";
  } catch {
    return false;
  }
}

export function checkConditionsMet(conditions,hass) {
  return conditions.every((c) => {
    // Ignore disabled conditions, they behave as if removed
    if (c && c.enabled === false) {
      return true;
    }
    if ("condition" in c) {
      switch (c.condition) {
        case "screen":
          return checkScreenCondition(c);
        case "user":
          return checkUserCondition(c, hass);
        case "numeric_state":
          return checkStateNumericCondition(c, hass);
        case "template":
          return checkTemplateCondition(c, hass);
        case "and":
          return checkAndCondition(c, hass);
        case "or":
          return checkOrCondition(c, hass);
        case "not":
          return checkNotCondition(c, hass);
        default:
          return checkStateCondition(c, hass);
      }
    }
    return checkStateCondition(c, hass);
  });
}

export function extractConditionEntityIds(conditions) {
  const entityIds = new Set([]);
  for (const condition of conditions) {
    if (condition.condition === "numeric_state") {
      if (
        typeof condition.above === "string" &&
        isValidEntityId(condition.above)
      ) {
        entityIds.add(condition.above);
      }
      if (
        typeof condition.below === "string" &&
        isValidEntityId(condition.below)
      ) {
        entityIds.add(condition.below);
      }
    } else if (condition.condition === "state") {
      [
        ...(ensureArray(condition.state) ?? []),
        ...(ensureArray(condition.state_not) ?? []),
      ].forEach((state) => {
        if (!!state && isValidEntityId(state)) {
          entityIds.add(state);
        }
      });
    } else if ("conditions" in condition && condition.conditions) {
      return new Set([
        ...entityIds,
        ...extractConditionEntityIds(condition.conditions),
      ]);
    }
  }
  return entityIds;
}

function validateStateCondition(condition) {
  const entityId = condition.entity_id || condition.entity;
  return (
    entityId != null &&
    (condition.state != null || condition.state_not != null)
  );
}

function validateScreenCondition(condition) {
  return condition.media_query != null;
}

function validateUserCondition(condition) {
  return condition.users != null;
}

function validateAndCondition(condition) {
  return condition.conditions != null;
}

function validateOrCondition(condition) {
  return condition.conditions != null;
}

// Validate NOT condition
function validateNotCondition(condition) {
  return condition.conditions != null;
}

function validateTemplateCondition(condition) {
  return condition.value_template != null;
}

function validateNumericStateCondition(condition) {
  const entityId = condition.entity_id || condition.entity;
  const hasEntity = Array.isArray(entityId)
    ? entityId.length > 0
    : entityId != null;
  return (
    hasEntity &&
    (condition.above != null || condition.below != null)
  );
}

export function validateConditionalConfig(conditions){
  return conditions.every((c) => {
    // Disabled conditions are considered valid (as if removed)
    if (c && c.enabled === false) {
      return true;
    }
    if ("condition" in c) {
      switch (c.condition) {
        case "screen":
          return validateScreenCondition(c);
        case "user":
          return validateUserCondition(c);
        case "numeric_state":
          return validateNumericStateCondition(c);
        case "template":
          return validateTemplateCondition(c);
        case "and":
          return validateAndCondition(c);
        case "or":
          return validateOrCondition(c);
        case "not":
          return validateNotCondition(c);
        default:
          return validateStateCondition(c);
      }
    }
    return validateStateCondition(c);
  });
}

export function addEntityToCondition(condition,  entityId) {
  if ("conditions" in condition && condition.conditions) {
    return {
      ...condition,
      conditions: condition.conditions.map((c) =>
        addEntityToCondition(c, entityId)
      ),
    };
  }

  if (
    condition.condition === "state" ||
    condition.condition === "numeric_state"
  ) {
    return {
      ...condition,
      entity: entityId,
    };
  }
  return condition;
}

const validEntityId = /^(\w+)\.(\w+)$/;

export const isValidEntityId = (entityId) =>
  validEntityId.test(entityId);
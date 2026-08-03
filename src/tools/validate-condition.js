import { getRenderedTemplate } from "./render-template.js";
import {
  checkPlatformCondition,
  extractPlatformConditionEntityIds,
  getLocalParts,
  getPlatformCondition,
  validatePlatformCondition,
} from "./ha-conditions.js";

// Condition types Home Assistant knows but Bubble Card cannot evaluate get
// reported once each, instead of quietly reading as false on every render.
const warnedConditionTypes = new Set();

function warnUnsupportedCondition(type) {
  if (warnedConditionTypes.has(type)) return;
  warnedConditionTypes.add(type);
  console.warn(
    `Bubble Card - Unsupported condition type "${type}", it will always evaluate to false. `
    + "Please report it so it can be added: https://github.com/Clooos/Bubble-Card/issues",
  );
}

// The former catch-all routed every unknown type to a state comparison, so a
// condition still shaped like one keeps working while the type is reported.
function isStateShapedCondition(condition) {
  const entityId = condition.entity_id || condition.entity;
  return entityId != null && (condition.state != null || condition.state_not != null);
}

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
    return matchesStateValue(value, current);
  } else if (condition.state_not != null) {
    return !matchesStateValue(value, current);
  }

  return false;
}

// Attributes hold raw values where the YAML holds strings, so compare both
// forms instead of only the raw one.
function matchesStateValue(values, current) {
  const list = ensureArray(values) ?? [];
  return list.includes(current) || (current != null && list.includes(String(current)));
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
      const rendered = getRenderedTemplate(hass, condition.value_template, {
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

const WEEKDAYS_SHORT = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function parseTimeToSeconds(value) {
  if (typeof value !== "string" || value === "") return null;
  const parts = value.split(":");
  if (parts.length < 2 || parts.length > 3) return null;
  if (!parts.every((part) => /^\d+$/.test(part))) return null;
  const [hours, minutes, seconds = "0"] = parts;
  const total = Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
  return Number.isNaN(total) ? null : total;
}

function checkTimeCondition(condition, hass) {
  const now = getLocalParts(hass);

  if (condition.weekdays?.length && !condition.weekdays.includes(now.weekday)) {
    return false;
  }

  const after = parseTimeToSeconds(condition.after);
  const before = parseTimeToSeconds(condition.before);

  if (after === null && before === null) return true;
  if (after !== null && before !== null) {
    return before < after
      // Crosses midnight, for example 22:00 to 06:00
      ? now.seconds >= after || now.seconds <= before
      : now.seconds >= after && now.seconds <= before;
  }
  return after !== null ? now.seconds >= after : now.seconds <= before;
}

// The person entity of the logged in user, the one the location condition reads
function getUserPersonState(hass) {
  if (!hass?.user?.id || !hass.states) return undefined;
  return Object.values(hass.states).find(
    (stateObj) => stateObj.entity_id.startsWith("person.")
      && stateObj.attributes?.user_id === hass.user.id,
  );
}

function checkLocationCondition(condition, hass) {
  const stateObj = getUserPersonState(hass);
  return stateObj ? condition.locations?.includes(stateObj.state) === true : false;
}

// Bubble Card is never the one laying out the view columns, so this condition
// can only be neutral, like Home Assistant is without a column context.
function checkViewColumnsCondition() {
  return true;
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

  const result = getRenderedTemplate(hass, condition.value_template);
  // Accept truthy/non-empty values as pass
  return result === true || result === "true" || result === 1 || result === "1" || result === "True";
}

export function checkConditionsMet(conditions,hass) {
  return conditions.every((c) => {
    // Ignore disabled conditions, they behave as if removed
    if (c && c.enabled === false) {
      return true;
    }
    if ("condition" in c) {
      switch (c.condition) {
        case "state":
          return checkStateCondition(c, hass);
        case "screen":
          return checkScreenCondition(c);
        case "user":
          return checkUserCondition(c, hass);
        case "time":
          return checkTimeCondition(c, hass);
        case "location":
          return checkLocationCondition(c, hass);
        case "view_columns":
          return checkViewColumnsCondition();
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
          return checkUnknownCondition(c, hass);
      }
    }
    // Legacy conditional card condition, without a condition key
    return checkStateCondition(c, hass);
  });
}

function checkUnknownCondition(condition, hass) {
  const platformCondition = getPlatformCondition(condition.condition);
  if (platformCondition) {
    return checkPlatformCondition(platformCondition, condition, hass);
  }

  warnUnsupportedCondition(condition.condition);
  return isStateShapedCondition(condition) ? checkStateCondition(condition, hass) : false;
}

// Entity ids a set of conditions depends on, so a change on any of them
// re-evaluates the conditions. `hass` is optional and only needed to expand
// device, area, floor and label targets of the Home Assistant conditions.
export function extractConditionEntityIds(conditions, hass) {
  const entityIds = new Set([]);
  for (const condition of conditions) {
    if (!condition) continue;

    for (const entityId of ensureArray(condition.entity_id ?? condition.entity) ?? []) {
      if (typeof entityId === "string" && isValidEntityId(entityId)) {
        entityIds.add(entityId);
      }
    }

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
    } else if (condition.condition === "state" || !("condition" in condition)) {
      [
        ...(ensureArray(condition.state) ?? []),
        ...(ensureArray(condition.state_not) ?? []),
      ].forEach((state) => {
        if (!!state && isValidEntityId(state)) {
          entityIds.add(state);
        }
      });
    } else if (condition.condition === "location") {
      const personState = getUserPersonState(hass);
      if (personState) entityIds.add(personState.entity_id);
    } else {
      const platformCondition = getPlatformCondition(condition.condition);
      if (platformCondition) {
        extractPlatformConditionEntityIds(platformCondition, condition, hass, entityIds);
      }
    }

    // Nested and/or/not conditions, walked without cutting the loop short
    if (condition.conditions) {
      for (const entityId of extractConditionEntityIds(condition.conditions, hass)) {
        entityIds.add(entityId);
      }
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

function validateTimeCondition(condition) {
  const hasAfter = condition.after != null && condition.after !== "";
  const hasBefore = condition.before != null && condition.before !== "";
  const hasWeekdays = condition.weekdays != null && condition.weekdays.length > 0;

  if (!hasAfter && !hasBefore && !hasWeekdays) return false;
  if (hasWeekdays && !condition.weekdays.every((day) => WEEKDAYS_SHORT.includes(day))) {
    return false;
  }
  if (hasAfter && parseTimeToSeconds(condition.after) === null) return false;
  if (hasBefore && parseTimeToSeconds(condition.before) === null) return false;
  // An identical after and before describes a zero length interval
  return !hasAfter || !hasBefore || condition.after !== condition.before;
}

function validateLocationCondition(condition) {
  return condition.locations != null;
}

function validateViewColumnsCondition(condition) {
  return condition.min != null || condition.max != null;
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
        case "state":
          return validateStateCondition(c);
        case "screen":
          return validateScreenCondition(c);
        case "user":
          return validateUserCondition(c);
        case "time":
          return validateTimeCondition(c);
        case "location":
          return validateLocationCondition(c);
        case "view_columns":
          return validateViewColumnsCondition(c);
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
          return validateUnknownCondition(c);
      }
    }
    return validateStateCondition(c);
  });
}

function validateUnknownCondition(condition) {
  const platformCondition = getPlatformCondition(condition.condition);
  if (platformCondition) {
    return validatePlatformCondition(platformCondition, condition);
  }

  warnUnsupportedCondition(condition.condition);
  return validateStateCondition(condition);
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
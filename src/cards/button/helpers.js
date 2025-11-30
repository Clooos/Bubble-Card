import { isEntityType, getAttribute, getState } from "../../tools/utils.js";

const compiledActiveCache = new Map();

export function getButtonType(context) {
  let buttonType = context.config.button_type;

  if (buttonType === 'custom') {
    console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"');
    buttonType = '';
  }

  if (context.config.entity) {
      return buttonType || 'switch';
  } else {
      return buttonType || 'name';
  }
}

export function readOnlySlider(context) {
  const entity = context.config.entity;
  const readOnlySlider =
    isEntityType(context, "sensor", entity) && getAttribute(context, "unit_of_measurement", entity) === "%";

  return readOnlySlider;
}

export function evaluateActiveState(context) {
  if (!context.config.active) {
    return null;
  }

  try {
    let compiledFunction = compiledActiveCache.get(context.config.active);
    if (!compiledFunction) {
      compiledFunction = Function(
        "hass",
        "entity",
        "state",
        `return ${context.config.active};`
      );
      compiledActiveCache.set(context.config.active, compiledFunction);
      if (compiledActiveCache.size > 100) {
        const oldestKey = compiledActiveCache.keys().next().value;
        compiledActiveCache.delete(oldestKey);
      }
    }

    const result = compiledFunction(
      context._hass,
      context.config.entity,
      getState(context)
    );
    return Boolean(result);
  } catch (error) {
    console.error('Error evaluating active expression:', error);
    return null;
  }
}

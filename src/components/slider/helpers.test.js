import { beforeAll, describe, expect, jest, test } from '@jest/globals';

// helpers.js only reaches outside itself for tools/utils.js. Mocking it keeps this
// suite away from the base-card CSS import, which Jest cannot parse.
jest.unstable_mockModule('../../tools/utils.js', () => ({
  getAttribute: (context, attribute, entityId) =>
    context?._hass?.states?.[entityId]?.attributes?.[attribute],
  getState: (context, entityId) => context?._hass?.states?.[entityId]?.state,
  isStateOn: () => true,
  formatNumericValue: (value, decimals, unit) =>
    `${Number(value).toFixed(decimals ?? 0)}${unit ? ` ${unit}` : ''}`,
  getTemperatureUnit: () => '°C',
  isDocumentRTL: () => false,
  // Not used here, but helpers.js pulls in sub-button/outline.js, which imports it
  // from the same module: a mock missing it breaks the whole import chain.
  getStyleGeneration: () => 0
}));

let formatDisplayValue;

beforeAll(async () => {
  ({ formatDisplayValue } = await import('./helpers.js'));
});

// A number entity whose bounds change at runtime. Ovens do this per cooking
// program; climate entities do it per mode.
function makeContext({ min, max, step = 1, cachedMin, cachedMax, cachedStep = 1 }) {
  return {
    config: { entity: 'number.oven_setpoint' },
    _hass: {
      locale: { language: 'en-US' },
      states: {
        'number.oven_setpoint': {
          entity_id: 'number.oven_setpoint',
          state: '100',
          attributes: { min, max, step, unit_of_measurement: '°C' }
        }
      }
    },
    // Snapshot taken by createSlider() when the element was built.
    sliderMinValue: cachedMin,
    sliderMaxValue: cachedMax,
    sliderStep: cachedStep
  };
}

// A climate entity, whose min_temp/max_temp follow the HVAC mode and can therefore
// move while the user still has a finger on the slider.
function makeClimateContext({ minTemp, maxTemp }) {
  return {
    config: { entity: 'climate.living_room' },
    _hass: {
      locale: { language: 'en-US' },
      config: { unit_system: { temperature: '°C' } },
      states: {
        'climate.living_room': {
          entity_id: 'climate.living_room',
          state: 'heat',
          attributes: {
            min_temp: minTemp,
            max_temp: maxTemp,
            temperature: 23,
            target_temp_step: 0.5
          }
        }
      }
    },
    // Snapshot taken when the slider was built, left on the initial range.
    sliderMinValue: minTemp,
    sliderMaxValue: maxTemp,
    sliderStep: 0.5
  };
}

const numeric = (formatted) => parseFloat(String(formatted).replace(/[^\d.-]/g, ''));

describe('formatDisplayValue', () => {
  test('maps the drag percentage against the entity current range', () => {
    const context = makeContext({ min: 50, max: 250, cachedMin: 50, cachedMax: 250 });

    expect(numeric(formatDisplayValue(context, 100))).toBe(250);
    expect(numeric(formatDisplayValue(context, 0))).toBe(50);
    expect(numeric(formatDisplayValue(context, 50))).toBe(150);
  });

  test('follows the entity when its bounds change after the slider was created', () => {
    // Built while the entity allowed 50-250, then the entity narrowed to 30-100.
    // The cached snapshot is deliberately left stale.
    const context = makeContext({ min: 30, max: 100, cachedMin: 50, cachedMax: 250 });

    expect(numeric(formatDisplayValue(context, 100))).toBe(100);
    expect(numeric(formatDisplayValue(context, 0))).toBe(30);
  });

  test('still honours an explicit min_value/max_value from the config', () => {
    // createSlider() caches the config values here too, so this guards against a
    // regression rather than reproducing the bug.
    const context = makeContext({ min: 30, max: 100, cachedMin: 0, cachedMax: 500 });
    context.config.min_value = 0;
    context.config.max_value = 500;

    expect(numeric(formatDisplayValue(context, 100))).toBe(500);
    expect(numeric(formatDisplayValue(context, 0))).toBe(0);
  });

  test('falls back to the cached range when the entity has no state', () => {
    const context = makeContext({ min: 30, max: 100, cachedMin: 50, cachedMax: 250 });
    context._hass.states = {};

    expect(numeric(formatDisplayValue(context, 100))).toBe(250);
  });

  test('the displayed value moves under a stationary finger when the bounds change mid-drag', () => {
    // Both calls pass the same percentage, so the finger has not moved. Only the
    // entity's own range changes in between, the way a climate does when its HVAC
    // mode switches. Reading the range live is what makes the number jump: this
    // pins the behaviour, it does not endorse it.
    const context = makeClimateContext({ minTemp: 16, maxTemp: 30 });

    expect(numeric(formatDisplayValue(context, 50))).toBe(23);

    const state = context._hass.states['climate.living_room'];
    state.attributes.min_temp = 7;
    state.attributes.max_temp = 35;

    // Same 50%, now read against 7-35 instead of 16-30.
    expect(numeric(formatDisplayValue(context, 50))).toBe(21);
  });
});

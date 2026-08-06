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
  getTemperatureUnit: () => '°C'
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
});

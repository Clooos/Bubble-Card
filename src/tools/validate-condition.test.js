import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

import {
    checkConditionsMet,
    extractConditionEntityIds,
    validateConditionalConfig,
} from './validate-condition.js';
import { PLATFORM_CONDITIONS } from './ha-conditions.js';

function makeState(entityId, state, attributes = {}, extra = {}) {
    return {
        entity_id: entityId,
        state,
        attributes,
        last_changed: '2026-08-03T10:00:00.000Z',
        last_updated: '2026-08-03T10:00:00.000Z',
        ...extra,
    };
}

function makeHass(states = {}, extra = {}) {
    return {
        states,
        config: { time_zone: 'UTC', unit_system: { temperature: '°C' } },
        locale: { time_zone: 'server' },
        ...extra,
    };
}

describe('checkConditionsMet - Home Assistant platform conditions', () => {
    let consoleWarnSpy;

    beforeEach(() => {
        consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleWarnSpy.mockRestore();
        jest.useRealTimers();
    });

    // Issue #2540: these two used to fall through to a state comparison and
    // silently return false.
    test('evaluates sun.is_up and sun.is_set from the sun entity', () => {
        const up = makeHass({ 'sun.sun': makeState('sun.sun', 'above_horizon', { rising: true, elevation: 12 }) });
        const down = makeHass({ 'sun.sun': makeState('sun.sun', 'below_horizon', { rising: false, elevation: -20 }) });

        expect(checkConditionsMet([{ condition: 'sun.is_up' }], up)).toBe(true);
        expect(checkConditionsMet([{ condition: 'sun.is_set' }], up)).toBe(false);
        expect(checkConditionsMet([{ condition: 'sun.is_up' }], down)).toBe(false);
        expect(checkConditionsMet([{ condition: 'sun.is_set' }], down)).toBe(true);
        expect(checkConditionsMet([{ condition: 'sun.is_ascending' }], up)).toBe(true);
        expect(checkConditionsMet([{ condition: 'sun.is_descending' }], up)).toBe(false);
        expect(checkConditionsMet([{ condition: 'sun.is_night' }], down)).toBe(true);
        expect(checkConditionsMet([{ condition: 'sun.is_night' }], up)).toBe(false);
        expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    test('evaluates sun.elevation against its threshold', () => {
        const hass = makeHass({ 'sun.sun': makeState('sun.sun', 'above_horizon', { elevation: 12 }) });

        expect(checkConditionsMet([{
            condition: 'sun.elevation',
            options: { threshold: { type: 'above', value: { number: 10 } } },
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            condition: 'sun.elevation',
            options: { threshold: { type: 'above', value: { number: 20 } } },
        }], hass)).toBe(false);
    });

    test('evaluates sun twilight bands', () => {
        const hass = makeHass({ 'sun.sun': makeState('sun.sun', 'below_horizon', { rising: true, elevation: -4 }) });

        expect(checkConditionsMet([{ condition: 'sun.is_morning_twilight' }], hass)).toBe(true);
        expect(checkConditionsMet([{ condition: 'sun.is_evening_twilight' }], hass)).toBe(false);
        expect(checkConditionsMet([{
            condition: 'sun.is_morning_twilight',
            options: { type: 'nautical' },
        }], hass)).toBe(false);
    });

    test('evaluates select.is_option_selected', () => {
        const hass = makeHass({ 'select.mode': makeState('select.mode', 'Eco') });
        const condition = {
            condition: 'select.is_option_selected',
            target: { entity_id: 'select.mode' },
            options: { option: ['Eco', 'Boost'] },
        };

        expect(checkConditionsMet([condition], hass)).toBe(true);
        expect(checkConditionsMet([{
            ...condition,
            options: { option: ['Boost'] },
        }], hass)).toBe(false);
    });

    test('evaluates a simple state condition on several domains', () => {
        const hass = makeHass({
            'light.kitchen': makeState('light.kitchen', 'on'),
            'input_boolean.guest': makeState('input_boolean.guest', 'off'),
        });

        expect(checkConditionsMet([{
            condition: 'light.is_on',
            target: { entity_id: 'light.kitchen' },
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            condition: 'switch.is_off',
            target: { entity_id: 'input_boolean.guest' },
        }], hass)).toBe(true);
    });

    test('filters targets on their domain and device class', () => {
        const hass = makeHass({
            'binary_sensor.hallway': makeState('binary_sensor.hallway', 'on', { device_class: 'motion' }),
            'binary_sensor.door': makeState('binary_sensor.door', 'on', { device_class: 'door' }),
        });

        expect(checkConditionsMet([{
            condition: 'motion.is_detected',
            target: { entity_id: 'binary_sensor.hallway' },
        }], hass)).toBe(true);
        // The wrong device class is not part of the target, so nothing matches
        expect(checkConditionsMet([{
            condition: 'motion.is_detected',
            target: { entity_id: 'binary_sensor.door' },
        }], hass)).toBe(false);
    });

    test('reads the cover family from the is_closed attribute and binary sensors', () => {
        const hass = makeHass({
            'cover.front': makeState('cover.front', 'open', { device_class: 'door', is_closed: false }),
            'binary_sensor.back': makeState('binary_sensor.back', 'off', { device_class: 'door' }),
        });

        expect(checkConditionsMet([{
            condition: 'door.is_open',
            target: { entity_id: 'cover.front' },
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            condition: 'door.is_closed',
            target: { entity_id: 'binary_sensor.back' },
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            condition: 'door.is_open',
            target: { entity_id: 'binary_sensor.back' },
        }], hass)).toBe(false);
    });

    test('honours the any and all behaviors', () => {
        const hass = makeHass({
            'light.a': makeState('light.a', 'on'),
            'light.b': makeState('light.b', 'off'),
        });
        const target = { entity_id: ['light.a', 'light.b'] };

        expect(checkConditionsMet([{ condition: 'light.is_on', target }], hass)).toBe(true);
        expect(checkConditionsMet([{
            condition: 'light.is_on',
            target,
            options: { behavior: 'all' },
        }], hass)).toBe(false);
    });

    test('skips unavailable entities', () => {
        const hass = makeHass({ 'light.a': makeState('light.a', 'unavailable') });

        expect(checkConditionsMet([{
            condition: 'light.is_on',
            target: { entity_id: 'light.a' },
        }], hass)).toBe(false);
    });

    test('honours the for duration', () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2026-08-03T10:01:00.000Z'));
        const hass = makeHass({ 'light.a': makeState('light.a', 'on') });

        expect(checkConditionsMet([{
            condition: 'light.is_on',
            target: { entity_id: 'light.a' },
            options: { for: '00:00:30' },
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            condition: 'light.is_on',
            target: { entity_id: 'light.a' },
            options: { for: '00:05:00' },
        }], hass)).toBe(false);
    });

    test('compares numeric thresholds, including against another entity', () => {
        const hass = makeHass({
            'sensor.power': makeState('sensor.power', '1500', { device_class: 'power', unit_of_measurement: 'W' }),
            'input_number.limit': makeState('input_number.limit', '2000'),
        });
        const base = { condition: 'power.is_value', target: { entity_id: 'sensor.power' } };

        expect(checkConditionsMet([{
            ...base,
            options: { threshold: { type: 'above', value: { number: 1000 } } },
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            ...base,
            options: { threshold: { type: 'below', value: { entity: 'input_number.limit' } } },
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            ...base,
            options: { threshold: { type: 'between', value_min: { number: 0 }, value_max: { number: 1000 } } },
        }], hass)).toBe(false);
        expect(checkConditionsMet([{
            ...base,
            options: { threshold: { type: 'outside', value_min: { number: 0 }, value_max: { number: 1000 } } },
        }], hass)).toBe(true);
        // A kilowatt threshold is converted before the comparison
        expect(checkConditionsMet([{
            ...base,
            options: { threshold: { type: 'above', value: { number: 2, unit_of_measurement: 'kW' } } },
        }], hass)).toBe(false);
    });

    test('converts temperatures to a common unit', () => {
        const hass = makeHass({
            'sensor.outside': makeState('sensor.outside', '68', {
                device_class: 'temperature',
                unit_of_measurement: '°F',
            }),
        });

        expect(checkConditionsMet([{
            condition: 'temperature.is_value',
            target: { entity_id: 'sensor.outside' },
            options: { threshold: { type: 'above', value: { number: 19 } } },
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            condition: 'temperature.is_value',
            target: { entity_id: 'sensor.outside' },
            options: { threshold: { type: 'above', value: { number: 21 } } },
        }], hass)).toBe(false);
    });

    test('scales the light brightness to a percentage', () => {
        const hass = makeHass({ 'light.a': makeState('light.a', 'on', { brightness: 255 }) });

        expect(checkConditionsMet([{
            condition: 'light.is_brightness',
            target: { entity_id: 'light.a' },
            options: { threshold: { type: 'above', value: { number: 99 } } },
        }], hass)).toBe(true);
    });

    test('expands device and area targets from the registries', () => {
        const hass = makeHass(
            {
                'light.kitchen': makeState('light.kitchen', 'on'),
                'light.garage': makeState('light.garage', 'off'),
            },
            {
                entities: {
                    'light.kitchen': { entity_id: 'light.kitchen', device_id: 'dev1', area_id: null },
                    'light.garage': { entity_id: 'light.garage', device_id: 'dev2', area_id: null },
                },
                devices: { dev1: { area_id: 'kitchen' }, dev2: { area_id: 'garage' } },
                areas: { kitchen: { area_id: 'kitchen', floor_id: 'ground' } },
            },
        );

        expect(checkConditionsMet([{
            condition: 'light.is_on',
            target: { area_id: 'kitchen' },
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            condition: 'light.is_on',
            target: { device_id: 'dev2' },
        }], hass)).toBe(false);
    });

    test('re-expands an indirect target when the registries change', () => {
        const target = { area_id: 'kitchen' };
        const condition = { condition: 'light.is_on', target };
        const states = {
            'light.kitchen': makeState('light.kitchen', 'on'),
            'light.garage': makeState('light.garage', 'off'),
        };
        const areas = { kitchen: { area_id: 'kitchen' } };
        const devices = { dev1: { area_id: 'garage' } };
        const hass = makeHass(states, {
            entities: { 'light.kitchen': { entity_id: 'light.kitchen', area_id: 'kitchen' } },
            devices,
            areas,
        });

        expect(checkConditionsMet([condition], hass)).toBe(true);

        // A registry update must not be served from the memoized expansion
        const moved = makeHass(states, {
            entities: { 'light.garage': { entity_id: 'light.garage', area_id: 'kitchen' } },
            devices,
            areas,
        });
        expect(checkConditionsMet([condition], moved)).toBe(false);
    });

    test('evaluates the moon phases like astral does', () => {
        jest.useFakeTimers();
        const hass = makeHass();

        // 2026-01-03 is a full moon, 2026-01-01 is still waxing gibbous
        jest.setSystemTime(new Date('2026-01-03T12:00:00.000Z'));
        expect(checkConditionsMet([{ condition: 'moon.is_phase', options: { phase: 'full_moon' } }], hass)).toBe(true);
        expect(checkConditionsMet([{ condition: 'moon.is_waxing' }], hass)).toBe(true);

        jest.setSystemTime(new Date('2026-01-01T12:00:00.000Z'));
        expect(checkConditionsMet([{ condition: 'moon.is_phase', options: { phase: 'waxing_gibbous' } }], hass)).toBe(true);
        expect(checkConditionsMet([{ condition: 'moon.is_phase', options: { phase: 'full_moon' } }], hass)).toBe(false);

        jest.setSystemTime(new Date('2026-01-16T12:00:00.000Z'));
        expect(checkConditionsMet([{ condition: 'moon.is_waning' }], hass)).toBe(true);
        expect(checkConditionsMet([{ condition: 'moon.is_waxing' }], hass)).toBe(false);
    });

    test('evaluates the legacy sun condition from the next sun events', () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2026-08-03T05:00:00.000Z'));
        // Sunrise still ahead today, sunset behind us since next_setting is tomorrow
        const hass = makeHass({
            'sun.sun': makeState('sun.sun', 'below_horizon', {
                next_rising: '2026-08-03T06:00:00.000Z',
                next_setting: '2026-08-04T20:00:00.000Z',
            }),
        });

        expect(checkConditionsMet([{ condition: 'sun', before: 'sunrise' }], hass)).toBe(true);
        expect(checkConditionsMet([{ condition: 'sun', after: 'sunrise' }], hass)).toBe(false);
        // An offset pushes the sunrise past the current time
        expect(checkConditionsMet([{
            condition: 'sun',
            before: 'sunrise',
            before_offset: '-01:30:00',
        }], hass)).toBe(false);
        // before sunrise or after sunset, the dark hours around midnight
        expect(checkConditionsMet([{ condition: 'sun', before: 'sunrise', after: 'sunset' }], hass)).toBe(true);
    });

    test('evaluates the legacy zone condition from coordinates', () => {
        const hass = makeHass({
            'zone.home': makeState('zone.home', '1', { latitude: 48.8584, longitude: 2.2945, radius: 100 }),
            'device_tracker.near': makeState('device_tracker.near', 'home', {
                latitude: 48.8585, longitude: 2.2946,
            }),
            'device_tracker.far': makeState('device_tracker.far', 'not_home', {
                latitude: 48.87, longitude: 2.31,
            }),
        });

        expect(checkConditionsMet([{
            condition: 'zone',
            entity_id: 'device_tracker.near',
            zone: 'zone.home',
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            condition: 'zone',
            entity_id: 'device_tracker.far',
            zone: 'zone.home',
        }], hass)).toBe(false);
        // Every entity must be in at least one of the zones
        expect(checkConditionsMet([{
            condition: 'zone',
            entity_id: ['device_tracker.near', 'device_tracker.far'],
            zone: 'zone.home',
        }], hass)).toBe(false);
    });

    test('evaluates the zone occupancy conditions', () => {
        const hass = makeHass({ 'zone.home': makeState('zone.home', '2') });

        expect(checkConditionsMet([{
            condition: 'zone.occupancy_is_detected',
            options: { zone: 'zone.home' },
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            condition: 'zone.occupancy_is_not_detected',
            options: { zone: 'zone.home' },
        }], hass)).toBe(false);
    });

    test('evaluates zone membership from the in_zones attribute', () => {
        const hass = makeHass({
            'person.alice': makeState('person.alice', 'home', { in_zones: ['zone.home'] }),
        });

        expect(checkConditionsMet([{
            condition: 'zone.in_zone',
            target: { entity_id: 'person.alice' },
            options: { zone: 'zone.home' },
        }], hass)).toBe(true);
        expect(checkConditionsMet([{
            condition: 'zone.not_in_zone',
            target: { entity_id: 'person.alice' },
            options: { zone: 'zone.office' },
        }], hass)).toBe(true);
    });
});

describe('the Home Assistant condition registry', () => {
    // The count matches the conditions Home Assistant 2026.7 declares across its
    // 41 integrations. Bump it deliberately when new ones are ported.
    test('covers every condition type of Home Assistant', () => {
        expect(Object.keys(PLATFORM_CONDITIONS)).toHaveLength(151);
    });

    test('declares a usable entry for every type', () => {
        for (const [type, entry] of Object.entries(PLATFORM_CONDITIONS)) {
            expect([type, entry.kind]).toEqual([type, expect.stringMatching(/^(state|numeric|singleton)$/)]);
            if (entry.kind === 'singleton') {
                expect([type, typeof entry.check]).toEqual([type, 'function']);
            } else {
                expect([type, Object.keys(entry.specs).length > 0]).toEqual([type, true]);
            }
        }
    });

    // Every type must be reachable, a key that no longer matches Home Assistant
    // would silently fall back to the unsupported path
    test('routes every type away from the unsupported fallback', () => {
        const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
        const hass = makeHass();

        for (const type of Object.keys(PLATFORM_CONDITIONS)) {
            expect([type, typeof checkConditionsMet([{ condition: type }], hass)]).toEqual([type, 'boolean']);
        }

        expect(warn).not.toHaveBeenCalled();
        warn.mockRestore();
    });
});

describe('checkConditionsMet - unknown condition types', () => {
    let consoleWarnSpy;

    beforeEach(() => {
        consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleWarnSpy.mockRestore();
    });

    test('warns once per unknown type instead of failing silently', async () => {
        // A fresh module registry, the warning is only emitted once per type
        jest.resetModules();
        const { checkConditionsMet: check } = await import('./validate-condition.js');
        const hass = makeHass();

        expect(check([{ condition: 'not_a_real.condition' }], hass)).toBe(false);
        expect(check([{ condition: 'not_a_real.condition' }], hass)).toBe(false);

        expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
        expect(consoleWarnSpy.mock.calls[0][0]).toContain('not_a_real.condition');
    });

    test('still evaluates an unknown type shaped like a state condition', () => {
        const hass = makeHass({ 'light.a': makeState('light.a', 'on') });

        expect(checkConditionsMet([{
            condition: 'legacy_typo',
            entity: 'light.a',
            state: 'on',
        }], hass)).toBe(true);
    });
});

describe('checkConditionsMet - Lovelace conditions', () => {
    test('evaluates the time condition in the Home Assistant time zone', () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2026-08-03T14:30:00.000Z')); // a Monday
        const hass = makeHass();

        expect(checkConditionsMet([{ condition: 'time', after: '14:00:00', before: '15:00:00' }], hass)).toBe(true);
        expect(checkConditionsMet([{ condition: 'time', after: '15:00:00', before: '16:00:00' }], hass)).toBe(false);
        // Interval crossing midnight
        expect(checkConditionsMet([{ condition: 'time', after: '22:00:00', before: '06:00:00' }], hass)).toBe(false);
        expect(checkConditionsMet([{ condition: 'time', weekdays: ['mon'] }], hass)).toBe(true);
        expect(checkConditionsMet([{ condition: 'time', weekdays: ['sat', 'sun'] }], hass)).toBe(false);
        jest.useRealTimers();
    });

    test('evaluates the location condition against the person of the user', () => {
        const hass = makeHass(
            { 'person.alice': makeState('person.alice', 'home', { user_id: 'user-1' }) },
            { user: { id: 'user-1' } },
        );

        expect(checkConditionsMet([{ condition: 'location', locations: ['home'] }], hass)).toBe(true);
        expect(checkConditionsMet([{ condition: 'location', locations: ['not_home'] }], hass)).toBe(false);
    });

    test('keeps the legacy and explicit state conditions working', () => {
        const hass = makeHass({
            'light.a': makeState('light.a', 'on', { brightness: 128 }),
        });

        expect(checkConditionsMet([{ entity: 'light.a', state: 'on' }], hass)).toBe(true);
        expect(checkConditionsMet([{ condition: 'state', entity: 'light.a', state: 'on' }], hass)).toBe(true);
        expect(checkConditionsMet([{ condition: 'state', entity: 'light.a', state_not: 'off' }], hass)).toBe(true);
        // A numeric attribute compared against its string form
        expect(checkConditionsMet([{
            condition: 'state',
            entity: 'light.a',
            attribute: 'brightness',
            state: '128',
        }], hass)).toBe(true);
    });
});

describe('extractConditionEntityIds', () => {
    test('collects the entity of state and numeric_state conditions', () => {
        const ids = extractConditionEntityIds([
            { condition: 'state', entity: 'light.a', state: 'on' },
            { condition: 'numeric_state', entity: 'sensor.b', above: 'input_number.limit' },
        ]);

        expect([...ids].sort()).toEqual(['input_number.limit', 'light.a', 'sensor.b']);
    });

    test('collects the entities of the Home Assistant platform conditions', () => {
        const hass = makeHass();

        expect([...extractConditionEntityIds([{ condition: 'sun.is_up' }], hass)]).toEqual(['sun.sun']);
        expect([...extractConditionEntityIds([{
            condition: 'select.is_option_selected',
            target: { entity_id: 'select.mode' },
            options: { option: ['Eco'] },
        }], hass)]).toEqual(['select.mode']);
        expect([...extractConditionEntityIds([{
            condition: 'zone.in_zone',
            target: { entity_id: 'person.alice' },
            options: { zone: 'zone.home' },
        }], hass)].sort()).toEqual(['person.alice', 'zone.home']);
    });

    test('collects the entity a numeric threshold is compared against', () => {
        const ids = extractConditionEntityIds([{
            condition: 'power.is_value',
            target: { entity_id: 'sensor.power' },
            options: { threshold: { type: 'below', value: { entity: 'input_number.limit' } } },
        }], makeHass());

        expect([...ids].sort()).toEqual(['input_number.limit', 'sensor.power']);
    });

    test('walks every condition of a list, nested ones included', () => {
        const ids = extractConditionEntityIds([
            {
                condition: 'or',
                conditions: [
                    { condition: 'state', entity: 'light.a', state: 'on' },
                    { condition: 'sun.is_up' },
                ],
            },
            { condition: 'state', entity: 'light.b', state: 'on' },
        ], makeHass());

        expect([...ids].sort()).toEqual(['light.a', 'light.b', 'sun.sun']);
    });
});

describe('validateConditionalConfig', () => {
    let consoleWarnSpy;

    beforeEach(() => {
        consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleWarnSpy.mockRestore();
    });

    test('accepts the Home Assistant platform conditions', () => {
        expect(validateConditionalConfig([{ condition: 'sun.is_up' }])).toBe(true);
        expect(validateConditionalConfig([{
            condition: 'select.is_option_selected',
            target: { entity_id: 'select.mode' },
            options: { option: ['Eco'] },
        }])).toBe(true);
        expect(validateConditionalConfig([{
            condition: 'light.is_on',
            target: { area_id: 'kitchen' },
        }])).toBe(true);
    });

    test('rejects platform conditions missing their target or options', () => {
        expect(validateConditionalConfig([{ condition: 'select.is_option_selected' }])).toBe(false);
        expect(validateConditionalConfig([{
            condition: 'select.is_option_selected',
            target: { entity_id: 'select.mode' },
        }])).toBe(false);
        expect(validateConditionalConfig([{
            condition: 'power.is_value',
            target: { entity_id: 'sensor.power' },
        }])).toBe(false);
    });

    test('accepts the time, location and view_columns conditions', () => {
        expect(validateConditionalConfig([{ condition: 'time', after: '08:00:00' }])).toBe(true);
        expect(validateConditionalConfig([{ condition: 'time', weekdays: ['mon'] }])).toBe(true);
        expect(validateConditionalConfig([{ condition: 'time' }])).toBe(false);
        expect(validateConditionalConfig([{ condition: 'time', after: '08:00', before: '08:00' }])).toBe(false);
        expect(validateConditionalConfig([{ condition: 'time', weekdays: ['funday'] }])).toBe(false);
        expect(validateConditionalConfig([{ condition: 'location', locations: ['home'] }])).toBe(true);
        expect(validateConditionalConfig([{ condition: 'view_columns', min: 2 }])).toBe(true);
    });

    test('keeps disabled conditions valid and met', () => {
        const hass = makeHass();
        const conditions = [{ condition: 'sun.is_up', enabled: false }];

        expect(validateConditionalConfig(conditions)).toBe(true);
        expect(checkConditionsMet(conditions, hass)).toBe(true);
    });
});

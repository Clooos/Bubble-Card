import { describe, expect, test } from '@jest/globals';
import en from '../../translations/editor/en.json';

const { CLIMATE_CARD_DOMAINS, getClimateDomainConfig, isClimateCardDomain } = await import('./domains.js');

function translationValue(key) {
    return key.split('.').reduce((node, part) => node?.[part], en);
}

describe('climate card domains', () => {
    test('covers the three domains the card drives', () => {
        expect(CLIMATE_CARD_DOMAINS).toEqual(['climate', 'water_heater', 'humidifier']);
    });

    test('a thermostat sets a temperature through its own domain', () => {
        const config = getClimateDomainConfig('climate.living_room');

        expect(config).toMatchObject({
            domain: 'climate',
            setService: 'set_temperature',
            target: 'temperature',
            modesAttribute: 'hvac_modes',
            minAttribute: 'min_temp',
            maxAttribute: 'max_temp',
            stepAttribute: 'target_temp_step',
        });
        // No unit and no step of its own: both follow the Home Assistant
        // temperature unit, which only the card knows.
        expect(config.unit).toBeUndefined();
        expect(config.step).toBeUndefined();
    });

    test('a humidifier sets a whole percentage of humidity', () => {
        expect(getClimateDomainConfig('humidifier.bedroom')).toMatchObject({
            domain: 'humidifier',
            setService: 'set_humidity',
            target: 'humidity',
            modesAttribute: 'available_modes',
            minAttribute: 'min_humidity',
            maxAttribute: 'max_humidity',
            stepAttribute: 'target_humidity_step',
            fallbackMin: 0,
            fallbackMax: 100,
            unit: '%',
            step: 1,
        });
    });

    test('a water heater is a thermostat whose modes are its states', () => {
        expect(getClimateDomainConfig('water_heater.boiler')).toMatchObject({
            domain: 'water_heater',
            setService: 'set_temperature',
            target: 'temperature',
            modesAttribute: 'operation_list',
        });
    });

    test('anything else keeps the climate behaviour it has always had', () => {
        const climate = getClimateDomainConfig('climate.living_room');

        expect(getClimateDomainConfig('sensor.temperature')).toBe(climate);
        expect(getClimateDomainConfig('')).toBe(climate);
        expect(getClimateDomainConfig(undefined)).toBe(climate);
        expect(getClimateDomainConfig(null)).toBe(climate);
        expect(getClimateDomainConfig({})).toBe(climate);
    });

    test('only the three domains are recognised as the card own', () => {
        expect(isClimateCardDomain('climate.living_room')).toBe(true);
        expect(isClimateCardDomain('humidifier.bedroom')).toBe(true);
        expect(isClimateCardDomain('water_heater.boiler')).toBe(true);
        expect(isClimateCardDomain('switch.kettle')).toBe(false);
        expect(isClimateCardDomain(undefined)).toBe(false);
    });

    test('every label the editor reads from a domain exists in en.json', () => {
        for (const domain of CLIMATE_CARD_DOMAINS) {
            const config = getClimateDomainConfig(`${domain}.entity`);
            for (const key of [config.minLabelKey, config.maxLabelKey, config.hideLabelKey, config.menuNameKey]) {
                expect(typeof translationValue(key)).toBe('string');
            }
        }
    });
});

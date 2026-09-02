// The climate card drives three domains that share the same shape: one target
// value with plus and minus, a background colour that follows the state, and a
// menu of modes. Everything that tells them apart is gathered here, so the card
// itself never looks at the domain. Anything else falls back to climate, which
// is what every card written before this existed relies on (#2384, #936, #2060).
//
// Kept free of imports on purpose: the editor and the base card read the domain
// list without pulling the card's rendering helpers, and their tests mock the
// tools this file would otherwise reach through.
const DOMAIN_CONFIGS = {
    climate: {
        domain: 'climate',
        setService: 'set_temperature',
        target: 'temperature',
        minAttribute: 'min_temp',
        maxAttribute: 'max_temp',
        stepAttribute: 'target_temp_step',
        modesAttribute: 'hvac_modes',
        fallbackMin: 0,
        fallbackMax: 1000,
        minLabelKey: 'editor.climate.min_temp',
        maxLabelKey: 'editor.climate.max_temp',
        hideLabelKey: 'editor.climate.hide_temp_control',
        menuNameKey: 'editor.climate.hvac_menu_name',
    },
    water_heater: {
        domain: 'water_heater',
        setService: 'set_temperature',
        target: 'temperature',
        minAttribute: 'min_temp',
        maxAttribute: 'max_temp',
        stepAttribute: 'target_temp_step',
        modesAttribute: 'operation_list',
        fallbackMin: 0,
        fallbackMax: 1000,
        minLabelKey: 'editor.climate.min_temp',
        maxLabelKey: 'editor.climate.max_temp',
        hideLabelKey: 'editor.climate.hide_temp_control',
        menuNameKey: 'editor.climate.operation_menu_name',
    },
    humidifier: {
        domain: 'humidifier',
        setService: 'set_humidity',
        target: 'humidity',
        minAttribute: 'min_humidity',
        maxAttribute: 'max_humidity',
        stepAttribute: 'target_humidity_step',
        modesAttribute: 'available_modes',
        fallbackMin: 0,
        fallbackMax: 100,
        // A humidity is a whole number of percents, never a temperature.
        unit: '%',
        step: 1,
        minLabelKey: 'editor.climate.min_humidity',
        maxLabelKey: 'editor.climate.max_humidity',
        hideLabelKey: 'editor.climate.hide_humidity_control',
        menuNameKey: 'editor.climate.mode_menu_name',
    },
};

export const CLIMATE_CARD_DOMAINS = Object.keys(DOMAIN_CONFIGS);

function domainOf(entity) {
    return typeof entity === 'string' ? entity.split('.')[0] : '';
}

export function getClimateDomainConfig(entity) {
    return DOMAIN_CONFIGS[domainOf(entity)] ?? DOMAIN_CONFIGS.climate;
}

export function isClimateCardDomain(entity) {
    return domainOf(entity) in DOMAIN_CONFIGS;
}

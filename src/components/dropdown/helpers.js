export function getTranslatedAttribute(context, state, attribute, option) {
    function formatString(string) {
      const formattedString = string.replace(/_/g, ' ');
      return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
    }

    switch (attribute) {
        case 'fan_modes':
            return context._hass.formatEntityAttributeValue(state, "fan_mode", option);
        case 'hvac_modes':
            return context._hass.formatEntityState(state, option);
        case 'swing_modes':
            return context._hass.formatEntityAttributeValue(state, "swing_mode", option);
        case 'preset_modes':
            return context._hass.formatEntityAttributeValue(state, "preset_mode", option);
        default:
            return formatString(context._hass.formatEntityState(state, option)) ?? formatString(option);
    }
}

export function getSelectedAttribute(state, attribute) {
    switch (attribute) {
        case 'fan_modes':
            return state.attributes.fan_mode || null;
        case 'swing_modes':
            return state.attributes.swing_mode || null;
        case 'preset_modes':
            return state.attributes.preset_mode || null;
        case 'effect_list':
            return state.attributes.effect || null;
        case 'source_list':
            return state.attributes.source || null;
        case 'sound_mode_list':
            return state.attributes.sound_mode || null;
        default:
            return state.state;
    }
}

export function getHvacModeIcon(option) {
    switch (option) {
        case 'auto':
            return 'mdi:thermostat-auto';
        case 'cool':
            return 'mdi:snowflake';
        case 'heat':
            return 'mdi:fire';
        case 'heat_cool':
            return 'mdi:sun-snowflake-variant';
        case 'dry':
            return 'mdi:water-percent';
        case 'fan_only':
            return 'mdi:fan';
        case 'off':
            return 'mdi:power';
        default:
            return 'mdi:fan';
    }
}

export function getOptionIcon(context, state, attribute, option) {
    let icon;

    switch (attribute) {
        case 'hvac_modes':
            icon = document.createElement('ha-icon');
            icon.slot = 'graphic';
            icon.icon = getHvacModeIcon(option);
            break;
        case 'fan_modes':
            if (!state.attributes.fan_modes) return null;
            icon = document.createElement('ha-attribute-icon');
            icon.slot = 'graphic';
            icon.attribute = 'fan_mode';
            icon.attributeValue = option;
            icon.hass = context._hass;
            icon.stateObj = state;
            break;
        case 'swing_modes':
            icon = document.createElement('ha-attribute-icon');
            icon.slot = 'graphic';
            icon.attribute = 'swing_mode';
            icon.attributeValue = option;
            icon.hass = context._hass;
            icon.stateObj = state;
            break;
        case 'preset_modes':
            icon = document.createElement('ha-attribute-icon');
            icon.slot = 'graphic';
            icon.attribute = 'preset_mode';
            icon.attributeValue = option;
            icon.hass = context._hass;
            icon.stateObj = state;
            break;
        default:
            icon = false;
            break;
    }
    return icon;
}

export function callSelectService(context, entity, selectedOption, config) {
    const entityType = entity?.split('.')[0];

    switch (entityType) {
        case 'input_select':
            context._hass.callService('input_select', 'select_option', {
                entity_id: entity,
                option: selectedOption
            });
            break;

        case 'select':
            context._hass.callService('select', 'select_option', {
                entity_id: entity,
                option: selectedOption
            });
            break;

        case 'climate':
            switch (config.select_attribute) {
                case 'hvac_modes':
                    context._hass.callService('climate', 'set_hvac_mode', {
                        entity_id: entity,
                        hvac_mode: selectedOption
                    });
                    break;
                case 'fan_modes':
                    context._hass.callService('climate', 'set_fan_mode', {
                        entity_id: entity,
                        fan_mode: selectedOption
                    });
                    break;
                case 'swing_modes':
                    context._hass.callService('climate', 'set_swing_mode', {
                        entity_id: entity,
                        swing_mode: selectedOption
                    });
                    break;
                case 'preset_modes':
                    context._hass.callService('climate', 'set_preset_mode', {
                        entity_id: entity,
                        preset_mode: selectedOption
                    });
                    break;
            }
            break;

        case 'fan':
            switch (config.select_attribute) {
                case 'preset_modes':
                    context._hass.callService('fan', 'set_preset_mode', {
                        entity_id: entity,
                        preset_mode: selectedOption
                    });
                    break;
            }
            break;

        case 'light':
            switch (config.select_attribute) {
                case 'effect_list':
                    context._hass.callService('light', 'turn_on', {
                        entity_id: entity,
                        effect: selectedOption
                    });
                    break;
            }
            break;

        case 'media_player':
            switch (config.select_attribute) {
                case 'source_list':
                    context._hass.callService('media_player', 'select_source', {
                        entity_id: entity,
                        source: selectedOption
                    });
                    break;
                case 'sound_mode_list':
                    context._hass.callService('media_player', 'select_sound_mode', {
                        entity_id: entity,
                        sound_mode: selectedOption
                    });
                    break;
            }
            break;

        default:
            console.warn(`Unsupported entity type: ${entityType}`);
    }
}
import { isHomeAssistantVersionAtLeast } from "../../tools/utils.js";
import { ALARM_MODES, needsAlarmCode, formatAlarmMode } from "./alarm.js";

const NEW_HA_DROPDOWN_MIN_VERSION = '2026.3.0';

// Detect if the new HA frontend is active.
// Primary signal: Home Assistant version (>= 2026.3.0).
// Fallback: feature detection only when version is not available yet.
export function isNewHaFrontend(hass) {
    if (hass?.config?.version) {
        return isHomeAssistantVersionAtLeast(hass, NEW_HA_DROPDOWN_MIN_VERSION);
    }
    return !!customElements.get('ha-picker-field');
}

export function getTranslatedAttribute(context, state, attribute, option) {
    function formatString(string) {
      const formattedString = string.replace(/_/g, ' ');
      return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
    }

    switch (attribute) {
        case 'fan_modes':
            return context._hass.formatEntityAttributeValue(state, "fan_mode", option);
        case 'hvac_modes':
        // A water heater carries its operation in the state itself, the way a
        // thermostat carries its HVAC mode.
        case 'operation_list':
            return context._hass.formatEntityState(state, option);
        case 'available_modes':
            return context._hass.formatEntityAttributeValue(state, "mode", option);
        case 'swing_modes':
            return context._hass.formatEntityAttributeValue(state, "swing_mode", option);
        case 'swing_horizontal_modes':
            return context._hass.formatEntityAttributeValue(state, "swing_horizontal_mode", option);
        case 'preset_modes':
            return context._hass.formatEntityAttributeValue(state, "preset_mode", option);
        case 'fan_speed_list':
            return context._hass.formatEntityAttributeValue(state, "fan_speed", option);
        // more-info-remote.ts reads its activities through this name.
        case 'activity_list':
            return context._hass.formatEntityAttributeValue(state, "activity", option);
        case 'direction':
            return context._hass.formatEntityAttributeValue(state, "direction", option);
        // The short names of hui-alarm-modes-card-feature.ts, Home, Away, Night.
        case 'alarm_modes':
            return formatAlarmMode(context._hass, state, option);
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
        case 'swing_horizontal_modes':
            return state.attributes.swing_horizontal_mode || null;
        case 'preset_modes':
            return state.attributes.preset_mode || null;
        case 'available_modes':
            return state.attributes.mode || null;
        case 'effect_list':
            return state.attributes.effect || null;
        case 'source_list':
            return state.attributes.source || null;
        case 'sound_mode_list':
            return state.attributes.sound_mode || null;
        case 'fan_speed_list':
            return state.attributes.fan_speed || null;
        case 'activity_list':
            return state.attributes.current_activity || null;
        case 'direction':
            return state.attributes.direction || null;
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
        case 'swing_horizontal_modes':
            icon = document.createElement('ha-attribute-icon');
            icon.slot = 'graphic';
            icon.attribute = 'swing_horizontal_mode';
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
        case 'available_modes':
            icon = document.createElement('ha-attribute-icon');
            icon.slot = 'graphic';
            icon.attribute = 'mode';
            icon.attributeValue = option;
            icon.hass = context._hass;
            icon.stateObj = state;
            break;
        case 'operation_list':
            icon = document.createElement('ha-attribute-icon');
            icon.slot = 'graphic';
            icon.attribute = 'operation_mode';
            icon.attributeValue = option;
            icon.hass = context._hass;
            icon.stateObj = state;
            break;
        case 'direction':
            icon = document.createElement('ha-attribute-icon');
            icon.slot = 'graphic';
            icon.attribute = 'direction';
            icon.attributeValue = option;
            icon.hass = context._hass;
            icon.stateObj = state;
            break;
        case 'alarm_modes':
            if (!ALARM_MODES[option]) return null;
            icon = document.createElement('ha-icon');
            icon.slot = 'graphic';
            icon.icon = ALARM_MODES[option].icon;
            break;
        default:
            icon = false;
            break;
    }
    return icon;
}

// Arms or disarms a panel. The promise is what tells a keypad whether Home
// Assistant took the code.
export function callAlarmMode(context, entity, mode, code) {
    const service = ALARM_MODES[mode]?.service;
    if (!service) return Promise.resolve();
    const data = { entity_id: entity };
    if (code !== undefined) data.code = code;
    return Promise.resolve(context._hass.callService('alarm_control_panel', service, data));
}

export function callSelectService(context, entity, selectedOption, config) {
    const entityType = entity?.split('.')[0];

    switch (entityType) {
        case 'alarm_control_panel':
            // A mode that wants a code is never sent from here. The dropdown asks
            // for the code first and sends both itself.
            if (config.select_attribute === 'alarm_modes'
                && !needsAlarmCode(context._hass.states[entity], selectedOption)) {
                callAlarmMode(context, entity, selectedOption).catch(() => {});
            }
            break;

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
                case 'swing_horizontal_modes':
                    context._hass.callService('climate', 'set_swing_horizontal_mode', {
                        entity_id: entity,
                        swing_horizontal_mode: selectedOption
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

        case 'humidifier':
            switch (config.select_attribute) {
                case 'available_modes':
                    context._hass.callService('humidifier', 'set_mode', {
                        entity_id: entity,
                        mode: selectedOption
                    });
                    break;
            }
            break;

        case 'water_heater':
            switch (config.select_attribute) {
                case 'operation_list':
                    context._hass.callService('water_heater', 'set_operation_mode', {
                        entity_id: entity,
                        operation_mode: selectedOption
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
                case 'direction':
                    context._hass.callService('fan', 'set_direction', {
                        entity_id: entity,
                        direction: selectedOption
                    });
                    break;
            }
            break;

        case 'vacuum':
            switch (config.select_attribute) {
                case 'fan_speed_list':
                    context._hass.callService('vacuum', 'set_fan_speed', {
                        entity_id: entity,
                        fan_speed: selectedOption
                    });
                    break;
            }
            break;

        // A remote starts an activity by being turned on with it.
        case 'remote':
            switch (config.select_attribute) {
                case 'activity_list':
                    context._hass.callService('remote', 'turn_on', {
                        entity_id: entity,
                        activity: selectedOption
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
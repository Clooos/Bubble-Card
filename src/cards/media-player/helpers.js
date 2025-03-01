import { 
    throttle, 
    getAttribute,
    isEntityType
} from "../../tools/utils.js";

export function updateEntity(context, value) {
    if (isEntityType(context, "media_player")) {
        context._hass.callService('media_player', 'volume_set', {
            entity_id: context.config.entity,
            volume_level: (value / 100).toFixed(2)
        });
    }
};

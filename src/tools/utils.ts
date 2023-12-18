export function hasStateChanged(context, hass, entityId) {
    context.hasState = hass.states[entityId];
    if (context.hasState) {
        context.newState = [context.hasState.state, context.hasState.attributes.rgb_color];
        if (!context.oldState || context.newState[0] !== context.oldState[0] || context.newState[1] !== context.oldState[1]) {
            context.oldState = context.newState;
            context.stateChanged = true;
        } else {
            context.stateChanged = false;
        }
        
        return context.stateChanged;
    }
}

export const fireEvent = (node, type, detail, options) => {
    options = options || {};
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed,
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};

export const forwardHaptic = hapticType => {
    fireEvent(window, "haptic", hapticType)
}

export const navigate = (_node, path, replace = false) => {
    if (replace) {
        history.replaceState(null, "", path)
    } else {
        history.pushState(null, "", path)
    }
    fireEvent(window, "location-changed", {
        replace
    })
}

export function toggleEntity(hass, entityId) {
    hass.callService('homeassistant', 'toggle', {
        entity_id: entityId
    });
}








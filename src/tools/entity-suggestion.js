const DEDICATED_CARD_TYPE = {
  cover: "cover",
  climate: "climate",
  media_player: "media-player",
  select: "select",
  input_select: "select",
  calendar: "calendar",
};

const DEDICATED_CARD_LABELS = {
  cover: "Cover",
  climate: "Climate",
  "media-player": "Media player",
  select: "Select",
  calendar: "Calendar",
};

const TOGGLE_DOMAINS = new Set([
  "light", "switch", "fan", "input_boolean", "lock", "siren", "remote",
  "humidifier", "vacuum", "lawn_mower", "script", "scene", "automation",
  "cover", "climate", "media_player",
]);

const STATE_DOMAINS = new Set([
  "sensor", "binary_sensor",
]);

const SLIDER_DOMAINS = new Set([
  "light", "media_player", "cover", "input_number", "number", "climate", "fan",
]);

const bubbleCard = (config) => ({ type: "custom:bubble-card", ...config });

export function getEntitySuggestion(hass, entityId) {
  if (!hass.states[entityId]) return null;
  const domain = entityId.split(".")[0];

  const suggestions = [];

  const dedicated = DEDICATED_CARD_TYPE[domain];
  if (dedicated) {
    const config = dedicated === "calendar"
      ? bubbleCard({ card_type: "calendar", entities: [{ entity: entityId }] })
      : bubbleCard({ card_type: dedicated, entity: entityId });
    suggestions.push({ label: DEDICATED_CARD_LABELS[dedicated], config });
  }

  if (TOGGLE_DOMAINS.has(domain)) {
    suggestions.push({ label: "Button", config: bubbleCard({ card_type: "button", entity: entityId }) });
  } else if (STATE_DOMAINS.has(domain)) {
    suggestions.push({ label: "Button", config: bubbleCard({ card_type: "button", entity: entityId, button_type: "state" }) });
  }

  if (SLIDER_DOMAINS.has(domain)) {
    suggestions.push({ label: "Slider", config: bubbleCard({ card_type: "button", entity: entityId, button_type: "slider" }) });
  }

  return suggestions.length ? suggestions : null;
}

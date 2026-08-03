// Client side port of the Home Assistant platform conditions, the `domain.name`
// ones (`sun.is_up`, `select.is_option_selected`, ...) that the native condition
// builder offers on top of the Lovelace conditions handled in
// validate-condition.js. Mirrors homeassistant/helpers/condition.py
// (EntityStateConditionBase / EntityNumericalConditionBase) and the
// homeassistant/components/*/condition.py registries as of HA 2026.7.
//
// Home Assistant evaluates these server side, so a few of them cannot be ported:
// anything needing astral maths (sun elevation bands are read from `sun.sun`
// instead), the moon ephemeris, or recorder history. `for:` durations are
// approximated from last_changed / last_updated, without the recorder priming
// pass, so a condition that was already true before the entity last changed can
// read as shorter than Home Assistant would report.

const UNAVAILABLE_STATES = new Set(["unavailable", "unknown"]);

const ANY = "any";

// Elevation bands in degrees, from homeassistant/components/sun/const.py
const ELEVATION_HORIZON = -0.833;
const ELEVATION_CIVIL = -6;
const ELEVATION_NAUTICAL = -12;
const ELEVATION_ASTRONOMICAL = -18;

const TWILIGHT_BANDS = {
  any: [ELEVATION_ASTRONOMICAL, ELEVATION_HORIZON],
  civil: [ELEVATION_CIVIL, ELEVATION_HORIZON],
  nautical: [ELEVATION_NAUTICAL, ELEVATION_CIVIL],
  astronomical: [ELEVATION_ASTRONOMICAL, ELEVATION_NAUTICAL],
};

const SUN_ENTITY_ID = "sun.sun";

function toArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function getDomain(entityId) {
  const index = entityId.indexOf(".");
  return index === -1 ? "" : entityId.slice(0, index);
}

// Local time -----------------------------------------------------------------

// One formatter per time zone, conditions are re-evaluated on every state update
const localPartsFormatters = new Map();

function getLocalPartsFormatter(timeZone) {
  const key = timeZone ?? "";
  let formatter = localPartsFormatters.get(key);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone || undefined,
      hour12: false,
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    localPartsFormatters.set(key, formatter);
  }
  return formatter;
}

// Date and time as Home Assistant sees them, the equivalent of dt_util.now():
// its own time zone when the user profile asks for the server one, the browser
// time zone otherwise.
export function getLocalParts(hass, date = new Date()) {
  const timeZone = hass?.locale?.time_zone === "server" ? hass?.config?.time_zone : undefined;
  const parts = {};
  for (const part of getLocalPartsFormatter(timeZone).formatToParts(date)) {
    parts[part.type] = part.value;
  }
  // Some locales format midnight as hour 24
  const hours = Number(parts.hour) % 24;
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    weekday: String(parts.weekday).toLowerCase(),
    seconds: hours * 3600 + Number(parts.minute) * 60 + Number(parts.second),
  };
}

function isSameLocalDay(hass, a, b) {
  const first = getLocalParts(hass, new Date(a));
  const second = getLocalParts(hass, new Date(b));
  return first.year === second.year && first.month === second.month && first.day === second.day;
}

// Moon phase -----------------------------------------------------------------

const mod360 = (value) => ((value % 360) + 360) % 360;

// Julian day at the start of a date, from astral.julian.julianday
function julianDay(year, month, day) {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const a = Math.trunc(y / 100);
  const b = 2 - a + Math.trunc(a / 4);
  return Math.trunc(365.25 * (y + 4716)) + Math.trunc(30.6001 * (m + 1)) + day + b - 1524.5;
}

// Moon phase as a 0 to 27.99 number, ported from astral.moon.phase, the
// implementation Home Assistant relies on. 0 is the new moon, 14 the full moon.
function moonPhaseValue(hass) {
  const { year, month, day } = getLocalParts(hass);
  const jd = julianDay(year, month, day);
  const dt = ((jd - 2382148) ** 2) / (41048480 * 86400);
  const t = (jd + dt - 2451545.0) / 36525;
  const t2 = t * t;
  const t3 = t2 * t;

  const toRadians = Math.PI / 180;
  const d = mod360(297.85 + 445267.1115 * t - 0.0016300 * t2 + t3 / 545868) * toRadians;
  const m = mod360(357.53 + 35999.0503 * t) * toRadians;
  const m1 = mod360(134.96 + 477198.8676 * t + 0.0089970 * t2 + t3 / 69699) * toRadians;

  const elongation = Math.trunc(mod360(
    d / toRadians
    + 6.29 * Math.sin(m1)
    - 2.10 * Math.sin(m)
    + 1.27 * Math.sin(2 * d - m1)
    + 0.66 * Math.sin(2 * d),
  ));
  const phase = ((elongation + 6.43) / 360) * 28;
  return phase >= 28 ? phase - 28 : phase;
}

// The eight phases, with the same boundaries as homeassistant/components/moon
function moonPhaseName(value) {
  if (value < 0.5 || value > 27.5) return "new_moon";
  if (value < 6.5) return "waxing_crescent";
  if (value < 7.5) return "first_quarter";
  if (value < 13.5) return "waxing_gibbous";
  if (value < 14.5) return "full_moon";
  if (value < 20.5) return "waning_gibbous";
  if (value < 21.5) return "last_quarter";
  return "waning_crescent";
}

// Zone membership ------------------------------------------------------------

const EARTH_RADIUS_M = 6371008.8;

function haversineDistance(lat1, lon1, lat2, lon2) {
  const toRadians = Math.PI / 180;
  const deltaLat = (lat2 - lat1) * toRadians;
  const deltaLon = (lon2 - lon1) * toRadians;
  const a = Math.sin(deltaLat / 2) ** 2
    + Math.cos(lat1 * toRadians) * Math.cos(lat2 * toRadians) * Math.sin(deltaLon / 2) ** 2;
  return 2 * EARTH_RADIUS_M * Math.asin(Math.sqrt(a));
}

function isInZone(hass, zoneEntityId, entityId) {
  const zoneObj = hass?.states?.[zoneEntityId];
  const stateObj = hass?.states?.[entityId];
  if (!zoneObj || zoneObj.state === "unavailable") return false;
  if (!stateObj || UNAVAILABLE_STATES.has(stateObj.state)) return false;

  // An entity reporting its zones is trusted over recomputing from coordinates
  const inZones = stateObj.attributes?.in_zones;
  if (inZones !== undefined && inZones !== null) {
    return toArray(inZones).includes(zoneEntityId);
  }

  const { latitude, longitude, gps_accuracy: accuracy = 0 } = stateObj.attributes ?? {};
  const { latitude: zoneLat, longitude: zoneLon, radius } = zoneObj.attributes ?? {};
  if (latitude == null || longitude == null || zoneLat == null || zoneLon == null || radius == null) {
    return false;
  }
  return haversineDistance(zoneLat, zoneLon, latitude, longitude) - accuracy < radius;
}

// Home Assistant converts every numeric threshold to a base unit before
// comparing. Only the families actually used by the ported conditions are
// covered; temperature needs an offset so it is handled apart.
const UNIT_FACTORS = {
  power: { W: 1, mW: 0.001, kW: 1000, MW: 1e6, GW: 1e9, TW: 1e12, "BTU/h": 0.29307108 },
  density: { "µg/m³": 1, "mg/m³": 1000, "g/m³": 1e6, "µg/ft³": 35.3146667 },
  ratio: { ppb: 1, ppm: 1000, "%": 1e7 },
};

function convertToBaseUnit(value, unit, family) {
  if (family === "temperature") {
    if (unit === "°C" || unit === undefined || unit === null) return value;
    if (unit === "°F") return (value - 32) / 1.8;
    if (unit === "K") return value - 273.15;
    return null;
  }
  const factors = UNIT_FACTORS[family];
  if (!factors) return null;
  // An unset unit means the value is already expressed in the base unit
  if (unit === undefined || unit === null) return value;
  const factor = factors[unit];
  return factor === undefined ? null : value * factor;
}

// Target resolution ---------------------------------------------------------

// Expanding a device, area, floor or label target means walking the entity
// registry, and conditions are re-evaluated on every state update, so the
// expansion is memoized on the target until the registries themselves change.
const expandedTargets = new WeakMap();

// Expand a Home Assistant target into entity ids. Device, area, floor and label
// targets need the registries carried by `hass`, so they resolve only when those
// are available; entity targets always work.
function resolveTargetEntityIds(target, hass) {
  const direct = toArray(target?.entity_id);
  const deviceIds = new Set(toArray(target?.device_id));
  const areaIds = new Set(toArray(target?.area_id));
  const floorIds = new Set(toArray(target?.floor_id));
  const labelIds = new Set(toArray(target?.label_id));

  if (!deviceIds.size && !areaIds.size && !floorIds.size && !labelIds.size) {
    return direct;
  }
  if (!hass?.entities) return direct;

  const cached = expandedTargets.get(target);
  if (cached
    && cached.entities === hass.entities
    && cached.devices === hass.devices
    && cached.areas === hass.areas) {
    return cached.result;
  }

  if (floorIds.size && hass.areas) {
    for (const area of Object.values(hass.areas)) {
      if (area?.floor_id && floorIds.has(area.floor_id)) areaIds.add(area.area_id);
    }
  }
  if (labelIds.size) {
    if (hass.areas) {
      for (const area of Object.values(hass.areas)) {
        if (area?.labels?.some((label) => labelIds.has(label))) areaIds.add(area.area_id);
      }
    }
    if (hass.devices) {
      for (const [deviceId, device] of Object.entries(hass.devices)) {
        if (device?.labels?.some((label) => labelIds.has(label))) deviceIds.add(deviceId);
      }
    }
  }

  const entityIds = new Set(direct);
  for (const entry of Object.values(hass.entities)) {
    if (!entry?.entity_id || entityIds.has(entry.entity_id)) continue;
    // Indirect targets only pull in primary entities, like Home Assistant does
    if (entry.entity_category) continue;
    if (labelIds.size && entry.labels?.some((label) => labelIds.has(label))) {
      entityIds.add(entry.entity_id);
      continue;
    }
    if (entry.device_id && deviceIds.has(entry.device_id)) {
      entityIds.add(entry.entity_id);
      continue;
    }
    // An entity overrides the area of its device when it defines its own
    const areaId = entry.area_id ?? hass.devices?.[entry.device_id]?.area_id;
    if (areaId && areaIds.has(areaId)) entityIds.add(entry.entity_id);
  }

  const result = [...entityIds];
  expandedTargets.set(target, {
    entities: hass.entities,
    devices: hass.devices,
    areas: hass.areas,
    result,
  });
  return result;
}

// Value extraction ----------------------------------------------------------

function getTrackedValue(spec, stateObj) {
  return spec.attr ? stateObj.attributes?.[spec.attr] : stateObj.state;
}

// Durations accept "HH:MM:SS", a seconds count or a duration object. Sun
// offsets can be negative, so the leading sign is handled apart, "-00:30:00"
// would otherwise lose it on the zeroed hours.
function parseDurationMs(value) {
  if (value === undefined || value === null || value === "") return 0;
  if (typeof value === "number") return value * 1000;
  if (typeof value === "object") {
    const { hours = 0, minutes = 0, seconds = 0, milliseconds = 0, days = 0 } = value;
    return ((((days * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000) + milliseconds;
  }
  const text = String(value).trim();
  const sign = text.startsWith("-") ? -1 : 1;
  const parts = text.replace(/^[+-]/, "").split(":").map(Number);
  if (parts.some((part) => Number.isNaN(part))) return 0;
  const [hours = 0, minutes = 0, seconds = 0] = parts;
  return sign * ((hours * 60 + minutes) * 60 + seconds) * 1000;
}

function isStableFor(stateObj, spec, durationMs) {
  if (!durationMs) return true;
  // Without the recorder we can only anchor on the state object itself:
  // last_updated when the condition reads an attribute, last_changed otherwise
  const anchor = spec.attr ? stateObj.last_updated : stateObj.last_changed;
  const time = anchor ? Date.parse(anchor) : NaN;
  if (Number.isNaN(time)) return false;
  return Date.now() - time >= durationMs;
}

function resolveThresholdValue(part, entry, hass) {
  if (!part) return null;
  if (part.number !== undefined && part.number !== null) {
    const number = Number(part.number);
    if (Number.isNaN(number)) return null;
    return entry.family ? convertToBaseUnit(number, part.unit_of_measurement, entry.family) : number;
  }
  const stateObj = hass?.states?.[part.entity];
  if (!stateObj) return null;
  const unit = stateObj.attributes?.unit_of_measurement;
  const number = Number(stateObj.state);
  if (Number.isNaN(number)) return null;
  if (entry.family) return convertToBaseUnit(number, unit, entry.family);
  // Without conversion Home Assistant requires the source entity to already use
  // the expected unit
  if (entry.unit !== undefined && unit !== entry.unit) return null;
  return number;
}

function getNumericValue(entry, spec, stateObj, hass) {
  let raw;
  if (spec.attr) {
    raw = stateObj.attributes?.[spec.attr];
  } else {
    if (!entry.family && entry.unit !== undefined
      && stateObj.attributes?.unit_of_measurement !== entry.unit) {
      return null;
    }
    raw = stateObj.state;
  }
  if (raw === undefined || raw === null || raw === "") return null;
  let value = Number(raw);
  if (Number.isNaN(value)) return null;
  if (entry.scale) value = entry.scale(value);
  if (entry.family) {
    const unit = entry.entityUnit ? entry.entityUnit(hass) : stateObj.attributes?.unit_of_measurement;
    value = convertToBaseUnit(value, unit, entry.family);
  }
  return value === null || Number.isNaN(value) ? null : value;
}

function checkNumericThreshold(entry, condition, hass, stateObj, spec) {
  const value = getNumericValue(entry, spec, stateObj, hass);
  if (value === null) return false;

  const threshold = condition.options?.threshold ?? {};
  if (threshold.type === "above") {
    const limit = resolveThresholdValue(threshold.value, entry, hass);
    return limit !== null && value > limit;
  }
  if (threshold.type === "below") {
    const limit = resolveThresholdValue(threshold.value, entry, hass);
    return limit !== null && value < limit;
  }
  const lower = resolveThresholdValue(threshold.value_min, entry, hass);
  const upper = resolveThresholdValue(threshold.value_max, entry, hass);
  if (lower === null || upper === null) return false;
  const between = lower <= value && value <= upper;
  return threshold.type === "outside" ? !between : between;
}

function matchState(entry, condition, hass, stateObj, spec) {
  const value = getTrackedValue(spec, stateObj);
  if (entry.match) return entry.match(value, stateObj, condition, hass);
  // The cover family carries the expected value on the domain spec, since a
  // cover reads it from an attribute where a binary sensor reads the state
  if ("value" in spec) return value === spec.value;
  const states = entry.optionKey
    ? toArray(condition.options?.[entry.optionKey])
    : entry.states;
  return states.includes(value);
}

// Registry ------------------------------------------------------------------

// `specs` lists the entity domains a condition accepts. `attr` reads a state
// attribute instead of the state, `deviceClass` restricts which entities
// qualify, `value` is the per-domain expected value of the cover family.
const covers = (deviceClasses, open) => {
  const specs = {};
  for (const [domain, deviceClass] of Object.entries(deviceClasses)) {
    specs[domain] = domain === "cover"
      ? { deviceClass, attr: "is_closed", value: !open }
      : { deviceClass, value: open ? "on" : "off" };
  }
  return { kind: "state", specs };
};

const binary = (domain, deviceClass, state) => ({
  kind: "state",
  specs: { [domain]: { deviceClass } },
  states: [state],
});

const state = (specs, states, extra) => ({ kind: "state", specs, states: toArray(states), ...extra });
const numeric = (specs, extra) => ({ kind: "numeric", specs, ...extra });

const sunState = (check) => ({ kind: "singleton", entityIds: [SUN_ENTITY_ID], check });

const readSun = (hass) => hass?.states?.[SUN_ENTITY_ID];

const twilight = (rising) => sunState((condition, hass) => {
  const stateObj = readSun(hass);
  if (!stateObj) return false;
  const band = TWILIGHT_BANDS[condition.options?.type ?? ANY] ?? TWILIGHT_BANDS[ANY];
  const elevation = Number(stateObj.attributes?.elevation);
  if (Number.isNaN(elevation)) return false;
  return stateObj.attributes?.rising === rising
    && elevation >= band[0] && elevation <= band[1];
});

const zoneMembership = (inZone) => state(
  { person: { attr: "in_zones" }, device_tracker: { attr: "in_zones" } },
  [],
  {
    match: (value, stateObj, condition) => {
      const zone = condition.options?.zone;
      const inZones = toArray(value);
      return inZone === inZones.includes(zone);
    },
  },
);

const zoneOccupancy = (occupied) => state({ zone: {} }, [], {
  // The zone occupancy conditions target the zone picked in the options
  fixedTarget: (condition) => toArray(condition.options?.zone),
  match: (value) => {
    const count = Number.parseInt(value, 10);
    if (Number.isNaN(count)) return false;
    return occupied ? count >= 1 : count === 0;
  },
});

const HVAC_ON_MODES = ["auto", "cool", "dry", "fan_only", "heat", "heat_cool"];
const MEDIA_ON_STATES = ["buffering", "idle", "on", "paused", "playing"];
const MEDIA_NOT_PLAYING_STATES = ["buffering", "idle", "off", "on", "paused"];
const ALARM_ARMED_STATES = [
  "armed_away", "armed_custom_bypass", "armed_home", "armed_night", "armed_vacation",
];

const isMuted = (stateObj) =>
  stateObj.attributes?.is_volume_muted === true || stateObj.attributes?.volume_level === 0;

const hasVolumeAttributes = (stateObj) =>
  stateObj.attributes?.is_volume_muted !== undefined
  || stateObj.attributes?.volume_level !== undefined;

const mediaMuted = (muted) => state({ media_player: {} }, [], {
  include: hasVolumeAttributes,
  match: (value, stateObj) => hasVolumeAttributes(stateObj) && isMuted(stateObj) === muted,
});

const systemTemperatureUnit = (hass) => hass?.config?.unit_system?.temperature ?? "°C";

// Home Assistant reads today's sunrise and sunset from astral. `sun.sun` only
// publishes the next occurrence, so it is today's when it has not happened yet,
// and one day earlier once it has. Sunrise and sunset drift by a few minutes a
// day, which is the error on a past event.
function getSunEventTime(hass, event) {
  const attribute = event === "sunrise" ? "next_rising" : "next_setting";
  const next = Date.parse(readSun(hass)?.attributes?.[attribute] ?? "");
  if (Number.isNaN(next)) return null;
  const now = Date.now();
  return isSameLocalDay(hass, next, now) ? next : next - 86400000;
}

// The legacy `condition: sun`, kept for hand written YAML. The condition builder
// offers the sun.* conditions instead.
function checkLegacySunCondition(condition, hass) {
  const options = condition.options ?? condition;
  const before = options.before;
  const after = options.after;
  if (!before && !after) return false;

  const now = Date.now();
  const beforeTime = before ? getSunEventTime(hass, before) : null;
  const afterTime = after ? getSunEventTime(hass, after) : null;
  if ((before && beforeTime === null) || (after && afterTime === null)) return false;

  const beforeLimit = beforeTime === null ? null : beforeTime + parseDurationMs(options.before_offset);
  const afterLimit = afterTime === null ? null : afterTime + parseDurationMs(options.after_offset);

  // "before: sunrise" with "after: sunset" describes the dark hours around
  // midnight, so it reads as an or, not as the usual and of the two bounds
  if (before === "sunrise" && after === "sunset") {
    return now < beforeLimit || now > afterLimit;
  }
  if (beforeLimit !== null && now > beforeLimit) return false;
  if (afterLimit !== null && now < afterLimit) return false;
  return true;
}

const legacyZoneEntityIds = (condition) => {
  const options = condition.options ?? condition;
  return [...toArray(options.entity_id), ...toArray(options.zone)];
};

export const PLATFORM_CONDITIONS = {
  // Alarm control panel. Home Assistant additionally filters the specific
  // armed modes on supported_features, which the state alone cannot tell.
  "alarm_control_panel.is_armed": state({ alarm_control_panel: {} }, ALARM_ARMED_STATES),
  "alarm_control_panel.is_armed_away": state({ alarm_control_panel: {} }, "armed_away"),
  "alarm_control_panel.is_armed_home": state({ alarm_control_panel: {} }, "armed_home"),
  "alarm_control_panel.is_armed_night": state({ alarm_control_panel: {} }, "armed_night"),
  "alarm_control_panel.is_armed_vacation": state({ alarm_control_panel: {} }, "armed_vacation"),
  "alarm_control_panel.is_disarmed": state({ alarm_control_panel: {} }, "disarmed"),
  "alarm_control_panel.is_triggered": state({ alarm_control_panel: {} }, "triggered"),

  // Air quality
  "air_quality.is_gas_detected": binary("binary_sensor", "gas", "on"),
  "air_quality.is_gas_cleared": binary("binary_sensor", "gas", "off"),
  "air_quality.is_co_detected": binary("binary_sensor", "carbon_monoxide", "on"),
  "air_quality.is_co_cleared": binary("binary_sensor", "carbon_monoxide", "off"),
  "air_quality.is_smoke_detected": binary("binary_sensor", "smoke", "on"),
  "air_quality.is_smoke_cleared": binary("binary_sensor", "smoke", "off"),
  "air_quality.is_co_value": numeric({ sensor: { deviceClass: "carbon_monoxide" } }, { family: "density" }),
  "air_quality.is_ozone_value": numeric({ sensor: { deviceClass: "ozone" } }, { family: "density" }),
  "air_quality.is_voc_value": numeric({ sensor: { deviceClass: "volatile_organic_compounds" } }, { family: "density" }),
  "air_quality.is_voc_ratio_value": numeric({ sensor: { deviceClass: "volatile_organic_compounds_parts" } }, { family: "ratio" }),
  "air_quality.is_no_value": numeric({ sensor: { deviceClass: "nitrogen_monoxide" } }, { family: "density" }),
  "air_quality.is_no2_value": numeric({ sensor: { deviceClass: "nitrogen_dioxide" } }, { family: "density" }),
  "air_quality.is_so2_value": numeric({ sensor: { deviceClass: "sulphur_dioxide" } }, { family: "density" }),
  "air_quality.is_co2_value": numeric({ sensor: { deviceClass: "carbon_dioxide" } }, { unit: "ppm" }),
  "air_quality.is_pm1_value": numeric({ sensor: { deviceClass: "pm1" } }, { unit: "µg/m³" }),
  "air_quality.is_pm25_value": numeric({ sensor: { deviceClass: "pm25" } }, { unit: "µg/m³" }),
  "air_quality.is_pm4_value": numeric({ sensor: { deviceClass: "pm4" } }, { unit: "µg/m³" }),
  "air_quality.is_pm10_value": numeric({ sensor: { deviceClass: "pm10" } }, { unit: "µg/m³" }),
  "air_quality.is_n2o_value": numeric({ sensor: { deviceClass: "nitrous_oxide" } }, { unit: "µg/m³" }),

  // Assist satellite
  "assist_satellite.is_idle": state({ assist_satellite: {} }, "idle"),
  "assist_satellite.is_listening": state({ assist_satellite: {} }, "listening"),
  "assist_satellite.is_processing": state({ assist_satellite: {} }, "processing"),
  "assist_satellite.is_responding": state({ assist_satellite: {} }, "responding"),

  // Battery
  "battery.is_low": binary("binary_sensor", "battery", "on"),
  "battery.is_not_low": binary("binary_sensor", "battery", "off"),
  "battery.is_charging": binary("binary_sensor", "battery_charging", "on"),
  "battery.is_not_charging": binary("binary_sensor", "battery_charging", "off"),
  "battery.is_level": numeric({ sensor: { deviceClass: "battery" } }, { unit: "%" }),

  // Calendar
  "calendar.is_event_active": state({ calendar: {} }, "on"),

  // Climate
  "climate.is_hvac_mode": state({ climate: {} }, [], { optionKey: "hvac_mode" }),
  "climate.is_off": state({ climate: {} }, "off"),
  "climate.is_on": state({ climate: {} }, HVAC_ON_MODES),
  "climate.is_cooling": state({ climate: { attr: "hvac_action" } }, "cooling"),
  "climate.is_drying": state({ climate: { attr: "hvac_action" } }, "drying"),
  "climate.is_heating": state({ climate: { attr: "hvac_action" } }, "heating"),
  "climate.is_target_humidity": numeric({ climate: { attr: "humidity" } }, { unit: "%", requireValue: true }),
  "climate.is_target_temperature": numeric({ climate: { attr: "temperature" } }, {
    family: "temperature",
    requireValue: true,
    // Climate entities always publish temperatures in the system unit
    entityUnit: systemTemperatureUnit,
  }),

  // Counter
  "counter.is_value": numeric({ counter: {} }),

  // Cover families
  "cover.awning_is_open": covers({ cover: "awning" }, true),
  "cover.awning_is_closed": covers({ cover: "awning" }, false),
  "cover.blind_is_open": covers({ cover: "blind" }, true),
  "cover.blind_is_closed": covers({ cover: "blind" }, false),
  "cover.curtain_is_open": covers({ cover: "curtain" }, true),
  "cover.curtain_is_closed": covers({ cover: "curtain" }, false),
  "cover.shade_is_open": covers({ cover: "shade" }, true),
  "cover.shade_is_closed": covers({ cover: "shade" }, false),
  "cover.shutter_is_open": covers({ cover: "shutter" }, true),
  "cover.shutter_is_closed": covers({ cover: "shutter" }, false),
  "door.is_open": covers({ cover: "door", binary_sensor: "door" }, true),
  "door.is_closed": covers({ cover: "door", binary_sensor: "door" }, false),
  "garage_door.is_open": covers({ cover: "garage", binary_sensor: "garage_door" }, true),
  "garage_door.is_closed": covers({ cover: "garage", binary_sensor: "garage_door" }, false),
  "gate.is_open": covers({ cover: "gate" }, true),
  "gate.is_closed": covers({ cover: "gate" }, false),
  "window.is_open": covers({ cover: "window", binary_sensor: "window" }, true),
  "window.is_closed": covers({ cover: "window", binary_sensor: "window" }, false),

  // Fan
  "fan.is_off": state({ fan: {} }, "off"),
  "fan.is_on": state({ fan: {} }, "on"),

  // Humidifier
  "humidifier.is_off": state({ humidifier: {} }, "off"),
  "humidifier.is_on": state({ humidifier: {} }, "on"),
  "humidifier.is_drying": state({ humidifier: { attr: "action" } }, "drying"),
  "humidifier.is_humidifying": state({ humidifier: { attr: "action" } }, "humidifying"),
  "humidifier.is_mode": state({ humidifier: { attr: "mode" } }, [], { optionKey: "mode" }),
  "humidifier.is_target_humidity": numeric({ humidifier: { attr: "humidity" } }, { unit: "%", requireValue: true }),

  // Humidity
  "humidity.is_value": numeric({
    climate: { attr: "current_humidity" },
    humidifier: { attr: "current_humidity" },
    sensor: { deviceClass: "humidity" },
    weather: { attr: "humidity" },
  }, { unit: "%", requireValue: true }),

  // Illuminance
  "illuminance.is_detected": binary("binary_sensor", "light", "on"),
  "illuminance.is_not_detected": binary("binary_sensor", "light", "off"),
  "illuminance.is_value": numeric({ sensor: { deviceClass: "illuminance" } }, { unit: "lx" }),

  // Lawn mower
  "lawn_mower.is_docked": state({ lawn_mower: {} }, "docked"),
  "lawn_mower.is_encountering_an_error": state({ lawn_mower: {} }, "error"),
  "lawn_mower.is_mowing": state({ lawn_mower: {} }, "mowing"),
  "lawn_mower.is_paused": state({ lawn_mower: {} }, "paused"),
  "lawn_mower.is_returning": state({ lawn_mower: {} }, "returning"),

  // Light
  "light.is_off": state({ light: {} }, "off"),
  "light.is_on": state({ light: {} }, "on"),
  "light.is_brightness": numeric({ light: { attr: "brightness" } }, {
    unit: "%",
    // Home Assistant compares the 0-255 brightness as a percentage
    scale: (value) => (value / 255) * 100,
  }),

  // Lock
  "lock.is_jammed": state({ lock: {} }, "jammed"),
  "lock.is_locked": state({ lock: {} }, "locked"),
  "lock.is_open": state({ lock: {} }, "open"),
  "lock.is_unlocked": state({ lock: {} }, "unlocked"),

  // Media player
  "media_player.is_muted": mediaMuted(true),
  "media_player.is_unmuted": mediaMuted(false),
  "media_player.is_not_playing": state({ media_player: {} }, MEDIA_NOT_PLAYING_STATES),
  "media_player.is_off": state({ media_player: {} }, "off"),
  "media_player.is_on": state({ media_player: {} }, MEDIA_ON_STATES),
  "media_player.is_paused": state({ media_player: {} }, "paused"),
  "media_player.is_playing": state({ media_player: {} }, "playing"),
  "media_player.is_volume": numeric({ media_player: { attr: "volume_level" } }, {
    unit: "%",
    requireValue: true,
    scale: (value) => value * 100,
  }),

  // Moisture
  "moisture.is_detected": binary("binary_sensor", "moisture", "on"),
  "moisture.is_not_detected": binary("binary_sensor", "moisture", "off"),
  "moisture.is_value": numeric({ sensor: { deviceClass: "moisture" } }, { unit: "%" }),

  // Motion, occupancy, vibration
  "motion.is_detected": binary("binary_sensor", "motion", "on"),
  "motion.is_not_detected": binary("binary_sensor", "motion", "off"),
  "occupancy.is_detected": binary("binary_sensor", "occupancy", "on"),
  "occupancy.is_not_detected": binary("binary_sensor", "occupancy", "off"),
  "vibration.is_detected": binary("binary_sensor", "vibration", "on"),
  "vibration.is_not_detected": binary("binary_sensor", "vibration", "off"),

  // Power
  "power.is_value": numeric({ sensor: { deviceClass: "power" } }, { family: "power" }),

  // Remote, schedule, siren, switch, update
  "remote.is_off": state({ remote: {} }, "off"),
  "remote.is_on": state({ remote: {} }, "on"),
  "schedule.is_off": state({ schedule: {} }, "off"),
  "schedule.is_on": state({ schedule: {} }, "on"),
  "siren.is_off": state({ siren: {} }, "off"),
  "siren.is_on": state({ siren: {} }, "on"),
  "switch.is_off": state({ switch: {}, input_boolean: {} }, "off"),
  "switch.is_on": state({ switch: {}, input_boolean: {} }, "on"),
  "update.is_available": state({ update: {} }, "on"),
  "update.is_not_available": state({ update: {} }, "off"),

  // Select
  "select.is_option_selected": state({ select: {}, input_select: {} }, [], { optionKey: "option" }),

  // Sun. The sun is a singleton, so these read `sun.sun` instead of a target.
  "sun.is_up": sunState((condition, hass) => readSun(hass)?.state === "above_horizon"),
  "sun.is_set": sunState((condition, hass) => readSun(hass)?.state === "below_horizon"),
  "sun.is_ascending": sunState((condition, hass) => readSun(hass)?.attributes?.rising === true),
  "sun.is_descending": sunState((condition, hass) => readSun(hass)?.attributes?.rising === false),
  "sun.is_night": sunState((condition, hass) => {
    const elevation = Number(readSun(hass)?.attributes?.elevation);
    return !Number.isNaN(elevation) && elevation <= ELEVATION_ASTRONOMICAL;
  }),
  "sun.is_morning_twilight": twilight(true),
  "sun.is_evening_twilight": twilight(false),
  "sun.elevation": numeric({ sun: { attr: "elevation" } }, {
    fixedTarget: () => [SUN_ENTITY_ID],
  }),

  // Moon, computed like Home Assistant does, from astral
  "moon.is_phase": {
    kind: "singleton",
    validate: (condition) => (condition.options?.phase ?? condition.phase) != null,
    check: (condition, hass) =>
      moonPhaseName(moonPhaseValue(hass)) === (condition.options?.phase ?? condition.phase),
  },
  "moon.is_waxing": { kind: "singleton", check: (condition, hass) => moonPhaseValue(hass) < 14 },
  "moon.is_waning": { kind: "singleton", check: (condition, hass) => moonPhaseValue(hass) >= 14 },

  // Legacy conditions, not offered by the condition builder but still valid in
  // hand written YAML
  sun: {
    kind: "singleton",
    entityIds: [SUN_ENTITY_ID],
    validate: (condition) => {
      const options = condition.options ?? condition;
      return options.before != null || options.after != null;
    },
    check: checkLegacySunCondition,
  },
  zone: {
    kind: "singleton",
    entityIds: legacyZoneEntityIds,
    validate: (condition) => {
      const options = condition.options ?? condition;
      return toArray(options.entity_id).length > 0 && toArray(options.zone).length > 0;
    },
    check: (condition, hass) => {
      const options = condition.options ?? condition;
      const entityIds = toArray(options.entity_id);
      const zones = toArray(options.zone);
      if (!entityIds.length || !zones.length) return false;
      return entityIds.every((entityId) => zones.some((zone) => isInZone(hass, zone, entityId)));
    },
  },

  // Temperature
  "temperature.is_value": numeric({
    climate: { attr: "current_temperature" },
    sensor: { deviceClass: "temperature" },
    water_heater: { attr: "current_temperature" },
    weather: { attr: "temperature" },
  }, { family: "temperature", requireValue: true }),

  // Text
  "text.is_equal_to": state({ text: {}, input_text: {} }, [], {
    match: (value, stateObj, condition) => value === condition.options?.value,
  }),

  // Timer
  "timer.is_active": state({ timer: {} }, "active"),
  "timer.is_paused": state({ timer: {} }, "paused"),
  "timer.is_idle": state({ timer: {} }, "idle"),

  // To-do
  "todo.all_completed": state({ todo: {} }, "0"),
  "todo.incomplete": numeric({ todo: {} }),

  // Vacuum
  "vacuum.is_cleaning": state({ vacuum: {} }, "cleaning"),
  "vacuum.is_docked": state({ vacuum: {} }, "docked"),
  "vacuum.is_encountering_an_error": state({ vacuum: {} }, "error"),
  "vacuum.is_paused": state({ vacuum: {} }, "paused"),
  "vacuum.is_returning": state({ vacuum: {} }, "returning"),

  // Valve
  "valve.is_open": state({ valve: { attr: "is_closed", value: false } }, []),
  "valve.is_closed": state({ valve: { attr: "is_closed", value: true } }, []),

  // Water heater
  "water_heater.is_off": state({ water_heater: {} }, "off"),
  "water_heater.is_on": state({ water_heater: {} }, [], {
    match: (value) => value !== "off",
  }),
  "water_heater.is_operation_mode": state({ water_heater: {} }, [], {
    optionKey: "operation_mode",
  }),
  "water_heater.is_target_temperature": numeric({ water_heater: { attr: "temperature" } }, {
    family: "temperature",
    requireValue: true,
    entityUnit: systemTemperatureUnit,
  }),

  // Zone
  "zone.in_zone": zoneMembership(true),
  "zone.not_in_zone": zoneMembership(false),
  "zone.occupancy_is_detected": zoneOccupancy(true),
  "zone.occupancy_is_not_detected": zoneOccupancy(false),
};

// The option each condition reads its expected values from, used by validation
const OPTION_REQUIREMENTS = {
  "climate.is_hvac_mode": "hvac_mode",
  "humidifier.is_mode": "mode",
  "select.is_option_selected": "option",
  "text.is_equal_to": "value",
  "water_heater.is_operation_mode": "operation_mode",
  "zone.in_zone": "zone",
  "zone.not_in_zone": "zone",
  "zone.occupancy_is_detected": "zone",
  "zone.occupancy_is_not_detected": "zone",
};

export function getPlatformCondition(type) {
  return typeof type === "string" ? PLATFORM_CONDITIONS[type] : undefined;
}

function collectStates(entry, condition, hass) {
  const entityIds = entry.fixedTarget
    ? entry.fixedTarget(condition)
    : resolveTargetEntityIds(condition.target ?? condition, hass);

  const states = [];
  for (const entityId of entityIds) {
    const spec = entry.specs[getDomain(entityId)];
    if (!spec) continue;
    const stateObj = hass?.states?.[entityId];
    if (!stateObj || UNAVAILABLE_STATES.has(stateObj.state)) continue;
    if (spec.deviceClass !== undefined && stateObj.attributes?.device_class !== spec.deviceClass) continue;
    if (entry.include && !entry.include(stateObj)) continue;
    if (entry.requireValue && getTrackedValue(spec, stateObj) == null) continue;
    states.push([stateObj, spec]);
  }
  return states;
}

export function checkPlatformCondition(entry, condition, hass) {
  if (entry.kind === "singleton") return entry.check(condition, hass) === true;

  const states = collectStates(entry, condition, hass);
  const durationMs = parseDurationMs(condition.options?.for);
  const isMet = ([stateObj, spec]) =>
    (entry.kind === "numeric"
      ? checkNumericThreshold(entry, condition, hass, stateObj, spec)
      : matchState(entry, condition, hass, stateObj, spec))
    && isStableFor(stateObj, spec, durationMs);

  // Home Assistant defaults to the "any" behavior, where an empty target never
  // matches, while "all" over an empty target is vacuously true
  return (condition.options?.behavior ?? ANY) === "all"
    ? states.every(isMet)
    : states.some(isMet);
}

export function validatePlatformCondition(entry, condition) {
  if (entry.kind === "singleton") return entry.validate ? entry.validate(condition) : true;

  const optionKey = OPTION_REQUIREMENTS[condition.condition];
  if (optionKey && toArray(condition.options?.[optionKey]).length === 0) return false;

  if (entry.kind === "numeric") {
    const threshold = condition.options?.threshold;
    if (!threshold) return false;
    if (threshold.type === "above" || threshold.type === "below") {
      if (!threshold.value) return false;
    } else if (!threshold.value_min || !threshold.value_max) {
      return false;
    }
  }

  if (entry.fixedTarget) return entry.fixedTarget(condition).length > 0;
  const target = condition.target ?? condition;
  return Boolean(
    toArray(target.entity_id).length
    || toArray(target.device_id).length
    || toArray(target.area_id).length
    || toArray(target.floor_id).length
    || toArray(target.label_id).length,
  );
}

// Entity ids a platform condition depends on, so that a change on any of them
// re-evaluates the condition.
export function extractPlatformConditionEntityIds(entry, condition, hass, entityIds) {
  if (entry.kind === "singleton") {
    const sources = typeof entry.entityIds === "function"
      ? entry.entityIds(condition)
      : entry.entityIds ?? [];
    for (const entityId of sources) entityIds.add(entityId);
    return;
  }

  const targets = entry.fixedTarget
    ? entry.fixedTarget(condition)
    : resolveTargetEntityIds(condition.target ?? condition, hass);
  for (const entityId of targets) entityIds.add(entityId);

  // A numeric threshold can be compared against another entity's state
  const threshold = condition.options?.threshold;
  for (const part of [threshold?.value, threshold?.value_min, threshold?.value_max]) {
    if (part?.entity) entityIds.add(part.entity);
  }
  for (const zone of toArray(condition.options?.zone)) entityIds.add(zone);
}

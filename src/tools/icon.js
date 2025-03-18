import { getAttribute, getState, isColorLight, isEntityType, adjustColor } from "./utils.js";
import { isColorCloseToWhite } from "./style.js";

export function getIcon(context, entity = context.config.entity, icon = context.config.icon) {
    const entityType = entity?.split('.')[0];
    const deviceClassType = getAttribute(context, "device_class", entity);
    const entityIcon = getAttribute(context, "icon", entity);
    const configIcon = icon;
    const state = getState(context, entity);

    function coverIcon() {
      const open = state !== "closed";
      const coverType = getAttribute(context, 'device_class', entity);

      switch (coverType) {
        case 'awning':
          return open ? "mdi:awning-outline" : "mdi:awning";
        case "blind":
          return open ? "mdi:blinds-open" : "mdi:blinds";
        case 'curtain':
          return open ? "mdi:curtains" : "mdi:curtains-closed";
        case 'damper':
          return open ? "mdi:window-shutter-open" : "mdi:window-shutter"; // To be defined
        case "door":
          return open ? "mdi:door-open" : "mdi:door-closed";
        case "garage":
          return open ? "mdi:garage-open" : "mdi:garage";
        case 'gate':
          return open ? "mdi:gate-open" : "mdi:gate";
        case 'shade':
          return open ? "mdi:roller-shade" : "mdi:roller-shade-closed";
        case "shutter":
          return open ? "mdi:window-shutter-open" : "mdi:window-shutter";
        case "window":
          return open ? "mdi:window-open" : "mdi:window-closed";
        default:
          return open ? "mdi:window-shutter-open" : "mdi:window-shutter";
      }
    }

    function binarySensorIcon() {
      const isOff = state === "off";
      const binarySensorType = getAttribute(context, 'device_class', entity);

      switch (binarySensorType) {
        case "battery":
          return isOff ? "mdi:battery" : "mdi:battery-outline";
        case "battery_charging":
          return isOff ? "mdi:battery" : "mdi:battery-charging";
        case "cold":
          return isOff ? "mdi:thermometer" : "mdi:snowflake";
        case "connectivity":
          return isOff ? "mdi:server-network-off" : "mdi:server-network";
        case "door":
          return isOff ? "mdi:door-closed" : "mdi:door-open";
        case "garage_door":
          return isOff ? "mdi:garage" : "mdi:garage-open";
        case "heat":
          return isOff ? "mdi:thermometer" : "mdi:fire";
        case "light":
          return isOff ? "mdi:brightness-5" : "mdi:brightness-7";
        case "lock":
          return isOff ? "mdi:lock" : "mdi:lock-open";
        case "moisture":
          return isOff ? "mdi:water-off" : "mdi:water";
        case "motion":
          return isOff ? "mdi:motion-sensor-off" : "mdi:motion-sensor";
        case "occupancy":
          return isOff ? "mdi:home-outline" : "mdi:home";
        case "opening":
          return isOff ? "mdi:square" : "mdi:square-outline";
        case "plug":
          return isOff ? "mdi:power-plug-off" : "mdi:power-plug";
        case "power":
          return isOff ? "mdi:power-plug-off" : "mdi:power-plug";
        case "presence":
          return isOff ? "mdi:home-outline" : "mdi:home";
        case "running":
          return isOff ? "mdi:stop" : "mdi:play";
        case "safety":
          return isOff ? "mdi:check-circle" : "mdi:alert-circle";
        case "smoke":
          return isOff ? "mdi:check-circle" : "mdi:smoke";
        case "sound":
          return isOff ? "mdi:music-note-off" : "mdi:music-note";
        case "tamper":
          return isOff ? "mdi:check-circle" : "mdi:alert-circle";
        case "update":
          return isOff ? "mdi:package" : "mdi:package-up";
        case "vibration":
          return isOff ? "mdi:crop-portrait" : "mdi:vibrate";
        case "window":
          return isOff ? "mdi:window-closed" : "mdi:window-open";
        default:
          return isOff ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
      }
    }

    function sensorIcon() {
      const isOff = state === "off";
      const sensorType = getAttribute(context, 'device_class', entity);

      switch (sensorType) {
        case "battery":
            if (state == 100) {
                return "mdi:battery";
            } else if (state >= 90) {
                return "mdi:battery-90";
            } else if (state >= 80) {
                return "mdi:battery-80";
            } else if (state >= 70) {
                return "mdi:battery-70";
            } else if (state >= 60) {
                return "mdi:battery-60";
            } else if (state >= 50) {
                return "mdi:battery-50";
            } else if (state >= 40) {
                return "mdi:battery-40";
            } else if (state >= 30) {
                return "mdi:battery-30";
            } else if (state >= 20) {
                return "mdi:battery-20";
            } else if (state >= 10) {
                return "mdi:battery-10";
            } else {
                return "mdi:battery-alert";
            }
        case "humidity": return "mdi:water-percent";
        case "illuminance": return "mdi:brightness-5";
        case "temperature": return "mdi:thermometer";
        case "pressure": return "mdi:gauge";
        case "power": return "mdi:flash";
        case "signal_strength": return "mdi:wifi";
        case "energy": return "mdi:lightning-bolt";
        default: return "mdi:eye";
      }
    }

    function weatherIcon(weatherType = getState(context, entity)) {
      switch (weatherType) {
        case 'cloudy':
          return "mdi:weather-cloudy";
        case 'partlycloudy':
          return "mdi:weather-partly-cloudy";
        case 'rainy':
          return "mdi:weather-rainy";
        case 'snowy':
          return "mdi:weather-snowy";
        case 'sunny':
          return "mdi:weather-sunny";
        case 'clear-night':
          return "mdi:weather-night";
        case 'fog':
          return "mdi:weather-fog";
        case 'hail':
          return "mdi:weather-hail";
        case 'lightning':
          return "mdi:weather-lightning";
        case 'lightning-rainy':
          return "mdi:weather-lightning-rainy";
        case 'pouring':
          return "mdi:weather-pouring";
        case 'windy':
          return "mdi:weather-windy";
        case 'windy-variant':
          return "mdi:weather-windy-variant";
        case 'exceptional':
          return "mdi:alert-circle-outline";
        default:
          return "mdi:weather-cloudy";
      }
    }

    const defaultIcons = {
        alarm_control_panel: 'mdi:shield',
        alert: "mdi:alert",
        automation: "mdi:playlist-play",
        binary_sensor: binarySensorIcon(),
        calendar: "mdi:calendar",
        camera: "mdi:video",
        climate: "mdi:thermostat",
        configurator: "mdi:settings",
        conversation: "mdi:text-to-speech",
        cover: coverIcon(),
        device_tracker: "mdi:account",
        fan: "mdi:fan",
        group: "mdi:google-circles-communities",
        history_graph: "mdi:chart-line",
        homeassistant: "mdi:home-assistant",
        homekit: "mdi:home-automation",
        image_processing: "mdi:image-filter-frames",
        input_boolean: "mdi:drawing",
        input_datetime: "mdi:calendar-clock",
        input_number: "mdi:ray-vertex",
        input_select: "mdi:format-list-bulleted",
        input_text: "mdi:textbox",
        light: "mdi:lightbulb",
        lock: 'mdi:lock',
        mailbox: "mdi:mailbox",
        media_player: 'mdi:speaker',
        mower: "mdi:robot-mower",
        notify: "mdi:comment-alert",
        person: "mdi:account",
        plant: "mdi:flower",
        proximity: "mdi:apple-safari",
        remote: "mdi:remote",
        scene: "mdi:palette",
        script: "mdi:file-document",
        sensor: sensorIcon(),
        simple_alarm: "mdi:bell",
        sun: "mdi:white-balance-sunny",
        switch: "mdi:flash",
        timer: "mdi:timer",
        updater: "mdi:cloud-upload",
        vacuum: "mdi:robot-vacuum",
        water_heater: "mdi:thermometer",
        weather: weatherIcon(),
        weblink: "mdi:open-in-new"
    };

    if (configIcon) return configIcon;
    if (entityIcon) return entityIcon;
    if (defaultIcons[entityType]) return defaultIcons[entityType];
    if (defaultIcons[deviceClassType]) return defaultIcons[deviceClassType];

    return '';
}

export function getWeatherIcon(weatherType) {
    switch (weatherType) {
        case 'cloudy':
          return "mdi:weather-cloudy";
        case 'partlycloudy':
          return "mdi:weather-partly-cloudy";
        case 'rainy':
          return "mdi:weather-rainy";
        case 'snowy':
          return "mdi:weather-snowy";
        case 'sunny':
          return "mdi:weather-sunny";
        case 'clear-night':
          return "mdi:weather-night";
        case 'fog':
          return "mdi:weather-fog";
        case 'hail':
          return "mdi:weather-hail";
        case 'lightning':
          return "mdi:weather-lightning";
        case 'lightning-rainy':
          return "mdi:weather-lightning-rainy";
        case 'pouring':
          return "mdi:weather-pouring";
        case 'windy':
          return "mdi:weather-windy";
        case 'windy-variant':
          return "mdi:weather-windy-variant";
        case 'exceptional':
          return "mdi:alert-circle-outline";
        default:
          return "mdi:weather-cloudy";
    }
}

export function getIconColor(context, entity = context.config.entity, brightness = 1) {
    const { card_type: cardType, use_accent_color: useAccentColor } = context.config;
    const defaultColor = `var(--bubble-icon-color)`;
    const accentColor = `var(--bubble-accent-color, var(--accent-color))`;
    const entityRgbColor = getAttribute(context, "rgb_color", entity);
    const isThemeLight = isColorLight('var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))');

    const adjustedBrightness = isThemeLight ? brightness - 0.2 : brightness;
    const isTemperature = entity === context.config.entity && getAttribute(context, "unit_of_measurement", entity)?.includes('°');
    const containsNumber = entity === context.config.entity && context._hass.states[entity]?.state?.match(/\d+/);

    if (!entity || isTemperature || containsNumber) return defaultColor;

    if (isEntityType(context, "light") && !useAccentColor) {
        if (cardType === 'button') {
            context.card.classList.add('is-light');
        } else if (cardType === 'pop-up') {
            context.elements.headerContainer.classList.add('is-light');
        }
    } else {
        if (cardType === 'button') {
            context.card.classList.remove('is-light');
        } else if (cardType === 'pop-up') {
            context.elements.headerContainer.classList.remove('is-light');
        }
    }

    if (!entity.startsWith("light.") || useAccentColor) return accentColor;

    const defaultLightColor = [225, 225, 210];
    const adjustedDefaultLightColor = adjustColor(defaultLightColor, adjustedBrightness);

    if (!entityRgbColor) {
      return `var(--bubble-light-color, rgba(${adjustedDefaultLightColor.join(', ')}))`;
    }

    const adjustedColor = adjustColor(entityRgbColor, adjustedBrightness);
    return isColorCloseToWhite(entityRgbColor) ?
        `var(--bubble-light-color, rgba(${adjustedDefaultLightColor.join(', ')}))` :
        `var(--bubble-light-color, rgba(${adjustedColor.join(', ')}))`;
}

export function getImage(context, entity = context.config.entity) {
    if (context.config.force_icon) return '';

    const entityPicture =
      getAttribute(context, "entity_picture_local", entity) ||
      getAttribute(context, "entity_picture", entity);

    if (!entityPicture) return '';

    let imageUrl = context._hass.hassUrl(entityPicture);

    return imageUrl;
}
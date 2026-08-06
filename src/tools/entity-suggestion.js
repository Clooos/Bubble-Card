import setupTranslation, { ensureEditorTranslations } from './localize.js';

// Suggestions offered by the Home Assistant entity card picker through the
// `getEntitySuggestion` entry of `window.customCards` (HA 2026.6+). Every
// recipe below is a configuration validated on the Compare view of the
// bc-suggestions test dashboard: only the entity id is parameterized, the
// rest ships exactly as validated there. Labels are only set on the extra
// variants, the base suggestion is displayed under the card name alone.

const TILE_GRID_OPTIONS = { rows: '1.656', columns: 6 };

// Shared by every recipe that surfaces a value through the `.highlight`
// sub-button: enlarges its text so the value reads as the tile's content.
const HIGHLIGHT_STYLES =
  '.highlight .bubble-sub-button-name-container,\n' +
  '.highlight .scrolling-container,\n' +
  '.highlight .scrolling-container span {\n' +
  '  font-size: var(--bubble-sub-button-highlight-font-size, 20px) !important;\n' +
  '  font-weight: var(--bubble-sub-button-highlight-font-weight, 300) !important;\n' +
  '  white-space: nowrap !important;\n' +
  '  overflow: hidden !important;\n' +
  '}';

const moreInfoSubButton = (extra = {}) => ({
  ...extra,
  name: 'More info',
  icon: 'mdi:chevron-right',
  show_background: false,
  state_background: false,
  fill_width: false,
});

const controlsRow = (group, extra = {}) => ({ name: 'Controls', ...extra, group });

const bottomControls = (group, extra = {}) => ({ bottom: [controlsRow(group, extra)] });

const tile = (config) => ({
  type: 'custom:bubble-card',
  card_type: 'button',
  ...config,
  grid_options: { ...TILE_GRID_OPTIONS },
});

const performAction = (action, entityId) => ({
  action: 'perform-action',
  perform_action: action,
  target: { entity_id: entityId },
});

const stateCondition = (entityId, state) => [{ entity: entityId, condition: 'state', ...state }];

// The value shown big inside the tile (state or attribute), see HIGHLIGHT_STYLES.
const highlightSubButton = (extra = {}) => ({
  name: 'Highlight',
  ...extra,
  show_icon: false,
  ...(extra.attribute ? { show_attribute: true } : { show_state: true }),
  show_background: false,
  fill_width: false,
  hide_when_parent_unavailable: true,
});

// Keeps space-between rows balanced when a middle element is wanted empty.
const spacerSubButton = () => ({
  name: ' ',
  show_name: true,
  show_icon: false,
  show_background: false,
  fill_width: false,
  tap_action: { action: 'none' },
});

const toggleTile = (entityId) =>
  tile({
    entity: entityId,
    sub_button: bottomControls([
      {
        name: 'Power',
        icon: 'mdi:power',
        state_background: false,
        tap_action: { action: 'toggle' },
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(),
    ]),
  });

const brightnessSlider = () => ({
  sub_button_type: 'slider',
  name: 'Brightness',
  show_background: false,
  always_visible: true,
  light_background: false,
  hide_when_parent_unavailable: true,
});

const brightnessTile = (entityId) =>
  tile({
    entity: entityId,
    sub_button: bottomControls([brightnessSlider(), moreInfoSubButton()]),
  });

const colorTempTile = (entityId) =>
  tile({
    entity: entityId,
    sub_button: bottomControls([
      brightnessSlider(),
      {
        sub_button_type: 'slider',
        name: 'Color temperature',
        icon: 'mdi:thermometer',
        show_background: false,
        state_background: false,
        fill_width: false,
        use_accent_color: true,
        light_slider_type: 'white_temp',
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(),
    ]),
  });

const effectsTile = (entityId) =>
  tile({
    entity: entityId,
    sub_button: bottomControls([
      {
        sub_button_type: 'select',
        name: 'Effect',
        show_attribute: true,
        attribute: 'effect',
        show_arrow: false,
        select_attribute: 'effect_list',
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(),
    ]),
  });

const fanSpeedTile = (entityId) =>
  tile({
    entity: entityId,
    sub_button: bottomControls([
      {
        sub_button_type: 'slider',
        name: 'Speed',
        show_background: false,
        always_visible: true,
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(),
    ]),
  });

const coverCard = (entityId, { position }) => ({
  type: 'custom:bubble-card',
  card_type: 'cover',
  entity: entityId,
  main_buttons_position: 'bottom',
  ...(position
    ? {
        sub_button: {
          main: [
            {
              name: 'Extra',
              group: [
                {
                  sub_button_type: 'slider',
                  name: 'Position',
                  icon: 'mdi:arrow-up-down',
                  show_background: false,
                  state_background: false,
                  use_accent_color: true,
                  hide_when_parent_unavailable: true,
                },
              ],
            },
          ],
        },
      }
    : {}),
  grid_options: { ...TILE_GRID_OPTIONS },
});

const coverTiltCard = (entityId) => ({
  type: 'custom:bubble-card',
  card_type: 'cover',
  entity: entityId,
  main_buttons_position: 'bottom',
  tilt_buttons: 'hidden',
  sub_button: {
    main: [
      {
        name: 'Extra',
        group: [
          {
            sub_button_type: 'slider',
            name: 'Tilt',
            icon: 'mdi:angle-acute',
            show_background: false,
            state_background: false,
            use_accent_color: true,
            cover_slider_type: 'tilt_position',
            hide_when_parent_unavailable: true,
          },
        ],
      },
    ],
  },
  grid_options: { ...TILE_GRID_OPTIONS },
});

const climateTile = (entityId, modeSelect) =>
  tile({
    entity: entityId,
    show_state: false,
    show_attribute: true,
    attribute: 'temperature',
    sub_button: bottomControls([
      { sub_button_type: 'select', ...modeSelect, show_arrow: false, hide_when_parent_unavailable: true },
      moreInfoSubButton(),
    ]),
  });

const mediaPlayerCard = (entityId) => ({
  type: 'custom:bubble-card',
  card_type: 'media-player',
  entity: entityId,
  show_state: true,
  cover_background: true,
  main_buttons_position: 'bottom',
  main_buttons_full_width: true,
  hide: { next_button: true, power_button: true, previous_button: true },
  sub_button: bottomControls(
    [
      moreInfoSubButton({
        visibility: stateCondition(entityId, {
          state: ['off', 'unavailable', 'unknown', 'idle', 'standby'],
        }),
      }),
    ],
    { justify_content: 'flex-end' },
  ),
  grid_options: { ...TILE_GRID_OPTIONS },
});

const mediaPlayerSourceCard = (entityId) => ({
  type: 'custom:bubble-card',
  card_type: 'media-player',
  entity: entityId,
  show_state: true,
  cover_background: true,
  hide: {
    next_button: true,
    play_pause_button: true,
    power_button: true,
    previous_button: true,
    volume_button: true,
  },
  sub_button: bottomControls([
    {
      sub_button_type: 'select',
      name: 'Source',
      show_icon: false,
      show_attribute: true,
      attribute: 'source',
      show_arrow: false,
      select_attribute: 'source_list',
      hide_when_parent_unavailable: true,
    },
    moreInfoSubButton(),
  ]),
  grid_options: { ...TILE_GRID_OPTIONS },
});

const numberTile = (entityId) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    sub_button: bottomControls([
      {
        sub_button_type: 'slider',
        name: 'Value',
        show_background: false,
        always_visible: true,
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(),
    ]),
  });

const selectTile = (entityId) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    sub_button: bottomControls([
      {
        sub_button_type: 'select',
        name: 'Options',
        show_state: true,
        show_arrow: false,
        select_attribute: 'options',
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton({ sub_button_type: 'default' }),
    ]),
  });

const actionTile = (entityId, name, action) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    sub_button: bottomControls([
      {
        name,
        icon: 'mdi:play',
        state_background: false,
        tap_action: performAction(action, entityId),
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(),
    ]),
  });

// Vacuums and lawn mowers share the same three contextual actions, only the
// service names and active state differ.
const roverTile = (entityId, { start, activeState, dock }) =>
  tile({
    entity: entityId,
    button_type: 'state',
    ...(start.batteryLevel !== undefined ? { attribute: 'battery_level' } : {}),
    sub_button: bottomControls([
      {
        name: start.name,
        icon: 'mdi:play',
        tap_action: performAction(start.action, entityId),
        visibility: stateCondition(entityId, { state_not: activeState }),
        hide_when_parent_unavailable: true,
      },
      {
        name: 'Pause',
        icon: 'mdi:pause',
        tap_action: performAction(start.pauseAction, entityId),
        visibility: stateCondition(entityId, { state: activeState }),
        hide_when_parent_unavailable: true,
      },
      {
        name: 'Dock',
        icon: 'mdi:home-import-outline',
        tap_action: performAction(dock, entityId),
        visibility: stateCondition(entityId, { state_not: 'docked' }),
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(),
    ]),
  });

const timerTile = (entityId) =>
  tile({
    entity: entityId,
    button_type: 'state',
    sub_button: bottomControls([
      {
        name: 'Start',
        icon: 'mdi:play',
        tap_action: performAction('timer.start', entityId),
        visibility: stateCondition(entityId, { state_not: 'active' }),
        hide_when_parent_unavailable: true,
      },
      {
        name: 'Cancel',
        icon: 'mdi:stop',
        tap_action: performAction('timer.cancel', entityId),
        visibility: stateCondition(entityId, { state: 'active' }),
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(),
    ]),
  });

const updateTile = (entityId) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    sub_button: bottomControls([
      {
        name: 'Install',
        icon: 'mdi:download',
        state_background: false,
        tap_action: performAction('update.install', entityId),
        visibility: stateCondition(entityId, { state: 'on' }),
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(),
    ]),
  });

const stateTile = (entityId) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    show_last_changed: false,
    sub_button: bottomControls([highlightSubButton(), moreInfoSubButton()], {
      justify_content: 'space-between',
    }),
    styles: HIGHLIGHT_STYLES,
  });

const lastChangedTile = (entityId) =>
  tile({
    entity: entityId,
    show_last_changed: true,
    tap_action: { action: 'more-info' },
    sub_button: bottomControls(
      [highlightSubButton(), spacerSubButton(), moreInfoSubButton()],
      { justify_content: 'space-between' },
    ),
    styles: HIGHLIGHT_STYLES,
  });

const textTile = (entityId, { spacer } = {}) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    sub_button: bottomControls(
      spacer
        ? [highlightSubButton(), spacerSubButton(), moreInfoSubButton()]
        : [highlightSubButton(), moreInfoSubButton()],
      { justify_content: 'space-between' },
    ),
    styles: HIGHLIGHT_STYLES,
  });

const weatherTile = (entityId, { humidity }) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    show_last_changed: false,
    sub_button: {
      ...bottomControls(
        [
          highlightSubButton({ icon: 'mdi:thermometer', attribute: 'temperature' }),
          moreInfoSubButton(),
        ],
        { justify_content: 'space-between' },
      ),
      ...(humidity
        ? {
            main: [
              {
                name: 'Extra',
                group: [
                  {
                    name: 'Humidity',
                    icon: 'mdi:water-percent',
                    show_attribute: true,
                    attribute: 'humidity',
                    show_background: false,
                    hide_when_parent_unavailable: true,
                  },
                ],
              },
            ],
          }
        : {}),
    },
    styles: HIGHLIGHT_STYLES,
  });

const lockTile = (entityId) =>
  tile({
    entity: entityId,
    tap_action: { action: 'more-info' },
    sub_button: bottomControls([
      {
        name: 'Lock',
        icon: 'mdi:lock',
        tap_action: performAction('lock.lock', entityId),
        visibility: stateCondition(entityId, { state: 'unlocked' }),
        hide_when_parent_unavailable: true,
      },
      {
        name: 'Unlock',
        icon: 'mdi:lock-open-variant',
        tap_action: performAction('lock.unlock', entityId),
        visibility: stateCondition(entityId, { state: 'locked' }),
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(),
    ]),
  });

const calendarCard = (entityId) => ({
  type: 'custom:bubble-card',
  card_type: 'calendar',
  entities: [{ entity: entityId }],
  rows: 1,
  days: 7,
  limit: 10,
  event_action: {
    tap_action: { action: 'more-info' },
    double_tap_action: { action: 'none' },
    hold_action: { action: 'none' },
  },
  grid_options: { ...TILE_GRID_OPTIONS },
});

// Feature bits, straight from the Home Assistant entity components.
const FAN_SUPPORTS_SET_SPEED = 1;
const COVER_SUPPORTS_SET_POSITION = 4;
const COVER_SUPPORTS_SET_TILT_POSITION = 128;
const UPDATE_SUPPORTS_INSTALL = 1;

const supportsFeature = (stateObj, bit) => ((stateObj.attributes.supported_features || 0) & bit) !== 0;

const lightSupportsBrightness = (stateObj) => {
  const modes = stateObj.attributes.supported_color_modes || [];
  return modes.some((mode) => mode !== 'onoff' && mode !== 'unknown');
};

const DOMAIN_BUILDERS = {
  light: (entityId, stateObj, t) => {
    const suggestions = [
      { config: lightSupportsBrightness(stateObj) ? brightnessTile(entityId) : toggleTile(entityId) },
    ];
    const modes = stateObj.attributes.supported_color_modes || [];
    if (modes.includes('color_temp')) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.color_temperature'),
        config: colorTempTile(entityId),
      });
    }
    if (stateObj.attributes.effect_list?.length) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.effect'),
        config: effectsTile(entityId),
      });
    }
    return suggestions;
  },
  switch: (entityId) => [{ config: toggleTile(entityId) }],
  input_boolean: (entityId) => [{ config: toggleTile(entityId) }],
  automation: (entityId) => [{ config: toggleTile(entityId) }],
  remote: (entityId) => [{ config: toggleTile(entityId) }],
  siren: (entityId) => [{ config: toggleTile(entityId) }],
  humidifier: (entityId) => [{ config: toggleTile(entityId) }],
  fan: (entityId, stateObj) => [
    { config: supportsFeature(stateObj, FAN_SUPPORTS_SET_SPEED) ? fanSpeedTile(entityId) : toggleTile(entityId) },
  ],
  cover: (entityId, stateObj, t) => {
    const suggestions = [
      { config: coverCard(entityId, { position: supportsFeature(stateObj, COVER_SUPPORTS_SET_POSITION) }) },
    ];
    if (supportsFeature(stateObj, COVER_SUPPORTS_SET_TILT_POSITION)) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.tilt_position'),
        config: coverTiltCard(entityId),
      });
    }
    return suggestions;
  },
  climate: (entityId, stateObj, t) => {
    const suggestions = [
      {
        config: climateTile(entityId, {
          name: 'Mode',
          show_state: true,
          select_attribute: 'hvac_modes',
        }),
      },
    ];
    if (stateObj.attributes.preset_modes?.length) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.preset_mode'),
        config: climateTile(entityId, {
          name: 'Preset',
          show_attribute: true,
          attribute: 'preset_mode',
          select_attribute: 'preset_modes',
        }),
      });
    }
    return suggestions;
  },
  media_player: (entityId, stateObj, t) => {
    const suggestions = [{ config: mediaPlayerCard(entityId) }];
    if (stateObj.attributes.source_list?.length) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.source'),
        config: mediaPlayerSourceCard(entityId),
      });
    }
    return suggestions;
  },
  input_number: (entityId) => [{ config: numberTile(entityId) }],
  number: (entityId) => [{ config: numberTile(entityId) }],
  input_select: (entityId) => [{ config: selectTile(entityId) }],
  select: (entityId) => [{ config: selectTile(entityId) }],
  scene: (entityId) => [{ config: actionTile(entityId, 'Activate', 'scene.turn_on') }],
  script: (entityId) => [{ config: actionTile(entityId, 'Activate', 'script.turn_on') }],
  button: (entityId) => [{ config: actionTile(entityId, 'Press', 'button.press') }],
  input_button: (entityId) => [{ config: actionTile(entityId, 'Press', 'input_button.press') }],
  vacuum: (entityId, stateObj) => [
    {
      config: roverTile(entityId, {
        start: {
          name: 'Start',
          action: 'vacuum.start',
          pauseAction: 'vacuum.pause',
          batteryLevel: stateObj.attributes.battery_level,
        },
        activeState: 'cleaning',
        dock: 'vacuum.return_to_base',
      }),
    },
  ],
  lawn_mower: (entityId, stateObj) => [
    {
      config: roverTile(entityId, {
        start: {
          name: 'Mow',
          action: 'lawn_mower.start_mowing',
          pauseAction: 'lawn_mower.pause',
          batteryLevel: stateObj.attributes.battery_level,
        },
        activeState: 'mowing',
        dock: 'lawn_mower.dock',
      }),
    },
  ],
  timer: (entityId) => [{ config: timerTile(entityId) }],
  update: (entityId, stateObj) => [
    { config: supportsFeature(stateObj, UPDATE_SUPPORTS_INSTALL) ? updateTile(entityId) : stateTile(entityId) },
  ],
  sensor: (entityId) => [{ config: stateTile(entityId) }],
  binary_sensor: (entityId) => [{ config: lastChangedTile(entityId) }],
  person: (entityId) => [{ config: lastChangedTile(entityId) }],
  device_tracker: (entityId) => [{ config: lastChangedTile(entityId) }],
  input_text: (entityId) => [{ config: textTile(entityId, { spacer: true }) }],
  input_datetime: (entityId) => [{ config: textTile(entityId) }],
  todo: (entityId) => [{ config: textTile(entityId) }],
  weather: (entityId, stateObj, t) => {
    const suggestions = [{ config: weatherTile(entityId, { humidity: false }) }];
    if (stateObj.attributes.humidity !== undefined) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.humidity'),
        config: weatherTile(entityId, { humidity: true }),
      });
    }
    return suggestions;
  },
  lock: (entityId) => [{ config: lockTile(entityId) }],
  calendar: (entityId) => [{ config: calendarCard(entityId) }],
};

export function getEntitySuggestion(hass, entityId) {
  const stateObj = hass?.states?.[entityId];
  if (!stateObj) return null;

  const builder = DOMAIN_BUILDERS[entityId.split('.')[0]];
  if (!builder) return null;

  ensureEditorTranslations(hass);
  const suggestions = builder(entityId, stateObj, setupTranslation(hass));
  return suggestions.length ? suggestions : null;
}

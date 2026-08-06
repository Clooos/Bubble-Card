import setupTranslation, { ensureEditorTranslations } from './localize.js';

// Suggestions offered by the Home Assistant entity card picker through the
// `getEntitySuggestion` entry of `window.customCards` (HA 2026.6+). Every
// tile recipe below is a configuration validated on the Compare view of the
// bc-suggestions test dashboard: only the entity id is parameterized and the
// embedded sub-button names are localized, the rest ships as validated.
//
// Each domain returns, in order: the validated tile (no label), its gated
// variants (labeled), then the classic suggestions of the original picker
// (dedicated card, Button, Slider). Classic entries carry `classic: true` so
// the module layer can skip them when twinning (`extends: native`); the flag
// is stripped before the list reaches Home Assistant.

const TILE_GRID_OPTIONS = { rows: '1.656', columns: 6 };

// Shared by every recipe that surfaces a value through the `highlight`
// sub-button: enlarges its text so the value reads as the tile's content.
// The class is anchored by `css_class`, never by the localized name.
const HIGHLIGHT_STYLES =
  '.highlight .bubble-sub-button-name-container,\n' +
  '.highlight .scrolling-container,\n' +
  '.highlight .scrolling-container span {\n' +
  '  font-size: var(--bubble-sub-button-highlight-font-size, 20px) !important;\n' +
  '  font-weight: var(--bubble-sub-button-highlight-font-weight, 300) !important;\n' +
  '  white-space: nowrap !important;\n' +
  '  overflow: hidden !important;\n' +
  '}';

const moreInfoSubButton = (t, extra = {}) => ({
  ...extra,
  name: t('editor.card_picker.suggestions.more_info'),
  icon: 'mdi:chevron-right',
  show_background: false,
  state_background: false,
  fill_width: false,
});

const controlsRow = (t, group, extra = {}) => ({
  name: t('editor.card_picker.suggestions.controls'),
  ...extra,
  group,
});

const bottomControls = (t, group, extra = {}) => ({ bottom: [controlsRow(t, group, extra)] });

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

// The value shown big inside the tile (state or attribute), see
// HIGHLIGHT_STYLES. `css_class` keeps the styles bound whatever the language.
const highlightSubButton = (name, extra = {}) => ({
  name,
  css_class: 'highlight',
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

const toggleTile = (entityId, t) =>
  tile({
    entity: entityId,
    sub_button: bottomControls(t, [
      {
        name: t('editor.card_picker.suggestions.toggle'),
        icon: 'mdi:power',
        state_background: false,
        tap_action: { action: 'toggle' },
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(t),
    ]),
  });

const brightnessSlider = (t) => ({
  sub_button_type: 'slider',
  name: t('editor.slider.mode_brightness'),
  show_background: false,
  always_visible: true,
  light_background: false,
  hide_when_parent_unavailable: true,
});

const brightnessTile = (entityId, t) =>
  tile({
    entity: entityId,
    sub_button: bottomControls(t, [brightnessSlider(t), moreInfoSubButton(t)]),
  });

const colorTempTile = (entityId, t) =>
  tile({
    entity: entityId,
    sub_button: bottomControls(t, [
      brightnessSlider(t),
      {
        sub_button_type: 'slider',
        name: t('editor.card_picker.suggestions.color_temperature'),
        icon: 'mdi:thermometer',
        show_background: false,
        state_background: false,
        fill_width: false,
        use_accent_color: true,
        light_slider_type: 'white_temp',
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(t),
    ]),
  });

const effectsTile = (entityId, t) =>
  tile({
    entity: entityId,
    sub_button: bottomControls(t, [
      {
        sub_button_type: 'select',
        name: t('editor.card_picker.suggestions.effect'),
        show_attribute: true,
        attribute: 'effect',
        show_arrow: false,
        select_attribute: 'effect_list',
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(t),
    ]),
  });

const fanSpeedTile = (entityId, t) =>
  tile({
    entity: entityId,
    sub_button: bottomControls(t, [
      {
        sub_button_type: 'slider',
        name: t('editor.card_picker.suggestions.fan_speed'),
        show_background: false,
        always_visible: true,
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(t),
    ]),
  });

const coverCard = (entityId, t, { position }) => ({
  type: 'custom:bubble-card',
  card_type: 'cover',
  entity: entityId,
  main_buttons_position: 'bottom',
  ...(position
    ? {
        sub_button: {
          main: [
            {
              name: t('editor.slider.cover_position'),
              group: [
                {
                  sub_button_type: 'slider',
                  name: t('editor.slider.cover_position'),
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

const coverTiltCard = (entityId, t) => ({
  type: 'custom:bubble-card',
  card_type: 'cover',
  entity: entityId,
  main_buttons_position: 'bottom',
  tilt_buttons: 'hidden',
  sub_button: {
    main: [
      {
        name: t('editor.card_picker.suggestions.tilt_position'),
        group: [
          {
            sub_button_type: 'slider',
            name: t('editor.card_picker.suggestions.tilt_position'),
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

const climateTile = (entityId, t, modeSelect) =>
  tile({
    entity: entityId,
    show_state: false,
    show_attribute: true,
    attribute: 'temperature',
    sub_button: bottomControls(t, [
      { sub_button_type: 'select', ...modeSelect, show_arrow: false, hide_when_parent_unavailable: true },
      moreInfoSubButton(t),
    ]),
  });

const mediaPlayerCard = (entityId, t) => ({
  type: 'custom:bubble-card',
  card_type: 'media-player',
  entity: entityId,
  show_state: true,
  cover_background: true,
  main_buttons_position: 'bottom',
  main_buttons_full_width: true,
  hide: { next_button: true, power_button: true, previous_button: true },
  sub_button: bottomControls(
    t,
    [
      moreInfoSubButton(t, {
        visibility: stateCondition(entityId, {
          state: ['off', 'unavailable', 'unknown', 'idle', 'standby'],
        }),
      }),
    ],
    { justify_content: 'flex-end' },
  ),
  grid_options: { ...TILE_GRID_OPTIONS },
});

const mediaPlayerSourceCard = (entityId, t) => ({
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
  sub_button: bottomControls(t, [
    {
      sub_button_type: 'select',
      name: t('editor.card_picker.suggestions.source'),
      show_icon: false,
      show_attribute: true,
      attribute: 'source',
      show_arrow: false,
      select_attribute: 'source_list',
      hide_when_parent_unavailable: true,
    },
    moreInfoSubButton(t),
  ]),
  grid_options: { ...TILE_GRID_OPTIONS },
});

const numberTile = (entityId, t) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    sub_button: bottomControls(t, [
      {
        sub_button_type: 'slider',
        name: t('editor.button.type_slider'),
        show_background: false,
        always_visible: true,
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(t),
    ]),
  });

const selectTile = (entityId, t) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    sub_button: bottomControls(t, [
      {
        sub_button_type: 'select',
        name: t('editor.common.options'),
        show_state: true,
        show_arrow: false,
        select_attribute: 'options',
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(t, { sub_button_type: 'default' }),
    ]),
  });

const actionTile = (entityId, t, nameKey, action) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    sub_button: bottomControls(t, [
      {
        name: t(nameKey),
        icon: 'mdi:play',
        state_background: false,
        tap_action: performAction(action, entityId),
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(t),
    ]),
  });

// Vacuums and lawn mowers share the same three contextual actions, only the
// service names and active state differ.
const roverTile = (entityId, t, { start, activeState, dock }) =>
  tile({
    entity: entityId,
    button_type: 'state',
    ...(start.batteryLevel !== undefined ? { attribute: 'battery_level' } : {}),
    sub_button: bottomControls(t, [
      {
        name: t(start.nameKey),
        icon: 'mdi:play',
        tap_action: performAction(start.action, entityId),
        visibility: stateCondition(entityId, { state_not: activeState }),
        hide_when_parent_unavailable: true,
      },
      {
        name: t('editor.card_picker.suggestions.pause'),
        icon: 'mdi:pause',
        tap_action: performAction(start.pauseAction, entityId),
        visibility: stateCondition(entityId, { state: activeState }),
        hide_when_parent_unavailable: true,
      },
      {
        name: t('editor.card_picker.suggestions.dock'),
        icon: 'mdi:home-import-outline',
        tap_action: performAction(dock, entityId),
        visibility: stateCondition(entityId, { state_not: 'docked' }),
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(t),
    ]),
  });

const timerTile = (entityId, t) =>
  tile({
    entity: entityId,
    button_type: 'state',
    sub_button: bottomControls(t, [
      {
        name: t('editor.card_picker.suggestions.start'),
        icon: 'mdi:play',
        tap_action: performAction('timer.start', entityId),
        visibility: stateCondition(entityId, { state_not: 'active' }),
        hide_when_parent_unavailable: true,
      },
      {
        name: t('editor.card_picker.suggestions.cancel'),
        icon: 'mdi:stop',
        tap_action: performAction('timer.cancel', entityId),
        visibility: stateCondition(entityId, { state: 'active' }),
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(t),
    ]),
  });

const updateTile = (entityId, t) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    sub_button: bottomControls(t, [
      {
        name: t('editor.card_picker.suggestions.install'),
        icon: 'mdi:download',
        state_background: false,
        tap_action: performAction('update.install', entityId),
        visibility: stateCondition(entityId, { state: 'on' }),
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(t),
    ]),
  });

const stateTile = (entityId, t) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    show_last_changed: false,
    sub_button: bottomControls(
      t,
      [highlightSubButton(t('editor.card_picker.suggestions.state')), moreInfoSubButton(t)],
      { justify_content: 'space-between' },
    ),
    styles: HIGHLIGHT_STYLES,
  });

const lastChangedTile = (entityId, t) =>
  tile({
    entity: entityId,
    show_last_changed: true,
    tap_action: { action: 'more-info' },
    sub_button: bottomControls(
      t,
      [
        highlightSubButton(t('editor.card_picker.suggestions.state')),
        spacerSubButton(),
        moreInfoSubButton(t),
      ],
      { justify_content: 'space-between' },
    ),
    styles: HIGHLIGHT_STYLES,
  });

const textTile = (entityId, t, { spacer } = {}) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    sub_button: bottomControls(
      t,
      spacer
        ? [highlightSubButton(t('editor.card_picker.suggestions.state')), spacerSubButton(), moreInfoSubButton(t)]
        : [highlightSubButton(t('editor.card_picker.suggestions.state')), moreInfoSubButton(t)],
      { justify_content: 'space-between' },
    ),
    styles: HIGHLIGHT_STYLES,
  });

const weatherTile = (entityId, t, { humidity }) =>
  tile({
    entity: entityId,
    button_type: 'state',
    show_state: false,
    show_last_changed: false,
    sub_button: {
      ...bottomControls(
        t,
        [
          highlightSubButton(t('editor.card_picker.suggestions.temperature'), {
            icon: 'mdi:thermometer',
            attribute: 'temperature',
          }),
          moreInfoSubButton(t),
        ],
        { justify_content: 'space-between' },
      ),
      ...(humidity
        ? {
            main: [
              {
                name: t('editor.card_picker.suggestions.humidity'),
                group: [
                  {
                    name: t('editor.card_picker.suggestions.humidity'),
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

const lockTile = (entityId, t) =>
  tile({
    entity: entityId,
    tap_action: { action: 'more-info' },
    sub_button: bottomControls(t, [
      {
        name: t('editor.card_picker.suggestions.lock'),
        icon: 'mdi:lock',
        tap_action: performAction('lock.lock', entityId),
        visibility: stateCondition(entityId, { state: 'unlocked' }),
        hide_when_parent_unavailable: true,
      },
      {
        name: t('editor.card_picker.suggestions.unlock'),
        icon: 'mdi:lock-open-variant',
        tap_action: performAction('lock.unlock', entityId),
        visibility: stateCondition(entityId, { state: 'locked' }),
        hide_when_parent_unavailable: true,
      },
      moreInfoSubButton(t),
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

// The suggestions of the original picker, kept alongside the tile recipes:
// the dedicated card of the domain, the plain Button and the plain Slider.
const CLASSIC_DEDICATED = {
  cover: { labelKey: 'editor.module_editor.card_cover', config: (entityId) => ({ card_type: 'cover', entity: entityId }) },
  climate: { labelKey: 'editor.module_editor.card_climate', config: (entityId) => ({ card_type: 'climate', entity: entityId }) },
  media_player: { labelKey: 'editor.module_editor.card_media_player', config: (entityId) => ({ card_type: 'media-player', entity: entityId }) },
  select: { labelKey: 'editor.module_editor.card_select', config: (entityId) => ({ card_type: 'select', entity: entityId }) },
  input_select: { labelKey: 'editor.module_editor.card_select', config: (entityId) => ({ card_type: 'select', entity: entityId }) },
  calendar: { labelKey: 'editor.module_editor.card_calendar', config: (entityId) => ({ card_type: 'calendar', entities: [{ entity: entityId }] }) },
};

const CLASSIC_TOGGLE_DOMAINS = new Set([
  'light', 'switch', 'fan', 'input_boolean', 'lock', 'siren', 'remote',
  'humidifier', 'vacuum', 'lawn_mower', 'script', 'scene', 'automation',
  'cover', 'climate', 'media_player',
]);

const CLASSIC_STATE_DOMAINS = new Set(['sensor', 'binary_sensor']);

const CLASSIC_SLIDER_DOMAINS = new Set([
  'light', 'media_player', 'cover', 'input_number', 'number', 'climate', 'fan',
]);

// Half width like the tiles, the height stays natural.
const CLASSIC_GRID_OPTIONS = { columns: 6 };

function classicSuggestions(entityId, domain, t) {
  const suggestions = [];

  const dedicated = CLASSIC_DEDICATED[domain];
  if (dedicated) {
    suggestions.push({
      label: t(dedicated.labelKey),
      classic: true,
      config: {
        type: 'custom:bubble-card',
        ...dedicated.config(entityId),
        grid_options: { ...CLASSIC_GRID_OPTIONS },
      },
    });
  }

  if (CLASSIC_TOGGLE_DOMAINS.has(domain)) {
    suggestions.push({
      label: t('editor.module_editor.card_button'),
      classic: true,
      config: {
        type: 'custom:bubble-card',
        card_type: 'button',
        entity: entityId,
        grid_options: { ...CLASSIC_GRID_OPTIONS },
      },
    });
  } else if (CLASSIC_STATE_DOMAINS.has(domain)) {
    suggestions.push({
      label: t('editor.module_editor.card_button'),
      classic: true,
      config: {
        type: 'custom:bubble-card',
        card_type: 'button',
        entity: entityId,
        button_type: 'state',
        grid_options: { ...CLASSIC_GRID_OPTIONS },
      },
    });
  }

  if (CLASSIC_SLIDER_DOMAINS.has(domain)) {
    suggestions.push({
      label: t('editor.button.type_slider'),
      classic: true,
      config: {
        type: 'custom:bubble-card',
        card_type: 'button',
        entity: entityId,
        button_type: 'slider',
        grid_options: { ...CLASSIC_GRID_OPTIONS },
      },
    });
  }

  return suggestions;
}

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
      { config: lightSupportsBrightness(stateObj) ? brightnessTile(entityId, t) : toggleTile(entityId, t) },
    ];
    const modes = stateObj.attributes.supported_color_modes || [];
    if (modes.includes('color_temp')) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.color_temperature'),
        config: colorTempTile(entityId, t),
      });
    }
    if (stateObj.attributes.effect_list?.length) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.effect'),
        config: effectsTile(entityId, t),
      });
    }
    return suggestions;
  },
  switch: (entityId, stateObj, t) => [{ config: toggleTile(entityId, t) }],
  input_boolean: (entityId, stateObj, t) => [{ config: toggleTile(entityId, t) }],
  automation: (entityId, stateObj, t) => [{ config: toggleTile(entityId, t) }],
  remote: (entityId, stateObj, t) => [{ config: toggleTile(entityId, t) }],
  siren: (entityId, stateObj, t) => [{ config: toggleTile(entityId, t) }],
  humidifier: (entityId, stateObj, t) => [{ config: toggleTile(entityId, t) }],
  fan: (entityId, stateObj, t) => [
    { config: supportsFeature(stateObj, FAN_SUPPORTS_SET_SPEED) ? fanSpeedTile(entityId, t) : toggleTile(entityId, t) },
  ],
  cover: (entityId, stateObj, t) => {
    const suggestions = [
      { config: coverCard(entityId, t, { position: supportsFeature(stateObj, COVER_SUPPORTS_SET_POSITION) }) },
    ];
    if (supportsFeature(stateObj, COVER_SUPPORTS_SET_TILT_POSITION)) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.tilt_position'),
        config: coverTiltCard(entityId, t),
      });
    }
    return suggestions;
  },
  climate: (entityId, stateObj, t) => {
    const suggestions = [
      {
        config: climateTile(entityId, t, {
          name: t('editor.card_picker.suggestions.mode'),
          show_state: true,
          select_attribute: 'hvac_modes',
        }),
      },
    ];
    if (stateObj.attributes.preset_modes?.length) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.preset_mode'),
        config: climateTile(entityId, t, {
          name: t('editor.card_picker.suggestions.preset_mode'),
          show_attribute: true,
          attribute: 'preset_mode',
          select_attribute: 'preset_modes',
        }),
      });
    }
    return suggestions;
  },
  media_player: (entityId, stateObj, t) => {
    const suggestions = [{ config: mediaPlayerCard(entityId, t) }];
    if (stateObj.attributes.source_list?.length) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.source'),
        config: mediaPlayerSourceCard(entityId, t),
      });
    }
    return suggestions;
  },
  input_number: (entityId, stateObj, t) => [{ config: numberTile(entityId, t) }],
  number: (entityId, stateObj, t) => [{ config: numberTile(entityId, t) }],
  input_select: (entityId, stateObj, t) => [{ config: selectTile(entityId, t) }],
  select: (entityId, stateObj, t) => [{ config: selectTile(entityId, t) }],
  scene: (entityId, stateObj, t) => [
    { config: actionTile(entityId, t, 'editor.card_picker.suggestions.activate', 'scene.turn_on') },
  ],
  script: (entityId, stateObj, t) => [
    { config: actionTile(entityId, t, 'editor.card_picker.suggestions.activate', 'script.turn_on') },
  ],
  button: (entityId, stateObj, t) => [
    { config: actionTile(entityId, t, 'editor.card_picker.suggestions.press', 'button.press') },
  ],
  input_button: (entityId, stateObj, t) => [
    { config: actionTile(entityId, t, 'editor.card_picker.suggestions.press', 'input_button.press') },
  ],
  vacuum: (entityId, stateObj, t) => [
    {
      config: roverTile(entityId, t, {
        start: {
          nameKey: 'editor.card_picker.suggestions.start',
          action: 'vacuum.start',
          pauseAction: 'vacuum.pause',
          batteryLevel: stateObj.attributes.battery_level,
        },
        activeState: 'cleaning',
        dock: 'vacuum.return_to_base',
      }),
    },
  ],
  lawn_mower: (entityId, stateObj, t) => [
    {
      config: roverTile(entityId, t, {
        start: {
          nameKey: 'editor.card_picker.suggestions.start_mowing',
          action: 'lawn_mower.start_mowing',
          pauseAction: 'lawn_mower.pause',
          batteryLevel: stateObj.attributes.battery_level,
        },
        activeState: 'mowing',
        dock: 'lawn_mower.dock',
      }),
    },
  ],
  timer: (entityId, stateObj, t) => [{ config: timerTile(entityId, t) }],
  update: (entityId, stateObj, t) => [
    { config: supportsFeature(stateObj, UPDATE_SUPPORTS_INSTALL) ? updateTile(entityId, t) : stateTile(entityId, t) },
  ],
  sensor: (entityId, stateObj, t) => [{ config: stateTile(entityId, t) }],
  binary_sensor: (entityId, stateObj, t) => [{ config: lastChangedTile(entityId, t) }],
  person: (entityId, stateObj, t) => [{ config: lastChangedTile(entityId, t) }],
  device_tracker: (entityId, stateObj, t) => [{ config: lastChangedTile(entityId, t) }],
  input_text: (entityId, stateObj, t) => [{ config: textTile(entityId, t, { spacer: true }) }],
  input_datetime: (entityId, stateObj, t) => [{ config: textTile(entityId, t) }],
  todo: (entityId, stateObj, t) => [{ config: textTile(entityId, t) }],
  weather: (entityId, stateObj, t) => {
    const suggestions = [{ config: weatherTile(entityId, t, { humidity: false }) }];
    if (stateObj.attributes.humidity !== undefined) {
      suggestions.push({
        label: t('editor.card_picker.suggestions.humidity'),
        config: weatherTile(entityId, t, { humidity: true }),
      });
    }
    return suggestions;
  },
  lock: (entityId, stateObj, t) => [{ config: lockTile(entityId, t) }],
  calendar: (entityId) => [{ config: calendarCard(entityId) }],
};

export function getEntitySuggestion(hass, entityId) {
  const stateObj = hass?.states?.[entityId];
  if (!stateObj) return null;

  const domain = entityId.split('.')[0];
  const builder = DOMAIN_BUILDERS[domain];

  ensureEditorTranslations(hass);
  const t = setupTranslation(hass);

  const suggestions = [
    ...(builder ? builder(entityId, stateObj, t) : []),
    ...classicSuggestions(entityId, domain, t),
  ];
  return suggestions.length ? suggestions : null;
}

// Which of the three looks a pop-up wears. Kept free of imports on purpose: the
// backdrop is a singleton that helpers.js already depends on, so it cannot
// import helpers back, and every other consumer gets the answer without pulling
// the whole runtime along.
export const POPUP_STYLE_BUBBLE = 'bubble';
export const POPUP_STYLE_CLASSIC = 'classic';
// Classic reproduces the header of Home Assistant's more info dialog. This one
// reproduces the whole dialog: its geometry, its surface and its header.
export const POPUP_STYLE_HOME_ASSISTANT = 'home-assistant';

export function getPopupStyle(config) {
    if (config?.popup_style === POPUP_STYLE_CLASSIC) return POPUP_STYLE_CLASSIC;
    if (config?.popup_style === POPUP_STYLE_HOME_ASSISTANT) return POPUP_STYLE_HOME_ASSISTANT;
    return POPUP_STYLE_BUBBLE;
}

export function isHomeAssistantStyle(config) {
    return getPopupStyle(config) === POPUP_STYLE_HOME_ASSISTANT;
}

// Both styles wear the Home Assistant header, so both answer to it.
export function hasClassicHeader(config) {
    const style = getPopupStyle(config);
    return style === POPUP_STYLE_CLASSIC || style === POPUP_STYLE_HOME_ASSISTANT;
}

// What a styling option is worth when the config leaves it out. The Home
// Assistant style changes three of them, and both the card and the editor read
// this table: the editor has to show what the pop-up actually does, and a
// number written twice is a number that drifts.
const BUBBLE_STYLE_DEFAULTS = {
    bg_opacity: 88,
    bg_blur: 10,
    // The surface of a Bubble pop-up is lightened by a couple of percent.
    bg_lightness: 1.02,
    width_desktop: '540px',
    shadow_opacity: 0,
};

const HOME_ASSISTANT_STYLE_DEFAULTS = {
    // ha-bottom-sheet.ts paints --ha-dialog-surface-background flat and leaves
    // its surface filter at none, on the value itself and not a step above it.
    bg_opacity: 100,
    bg_blur: 0,
    bg_lightness: 1,
    // ha-dialog.ts:345 sizes wa-dialog from --ha-dialog-width-md.
    width_desktop: 'var(--ha-dialog-width-md, 580px)',
    // The dialog comes with its shadow, so the option starts where that shadow
    // is, and fades it out as it goes down rather than being a switch.
    shadow_opacity: 100,
};

// What the editor should show in a field the user has not filled in. The width
// is the one place the two differ: the card wants the token, a text field wants
// a number someone can read and edit.
const HOME_ASSISTANT_STYLE_DISPLAY = {
    width_desktop: '580px',
};

export function getPopupStyleDefault(config, key) {
    if (!isHomeAssistantStyle(config)) return BUBBLE_STYLE_DEFAULTS[key];
    return HOME_ASSISTANT_STYLE_DEFAULTS[key];
}

export function getPopupStyleDisplayDefault(config, key) {
    if (!isHomeAssistantStyle(config)) return BUBBLE_STYLE_DEFAULTS[key];
    return HOME_ASSISTANT_STYLE_DISPLAY[key] ?? HOME_ASSISTANT_STYLE_DEFAULTS[key];
}

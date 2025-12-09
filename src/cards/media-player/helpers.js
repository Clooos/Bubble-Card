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

// Media player feature bit masks aligned with Home Assistant
// See: MediaPlayerEntityFeature docs
const SUPPORT_PAUSE = 1;
const SUPPORT_STOP = 4096;
const SUPPORT_PLAY = 16384;
const SUPPORT_VOLUME_SET = 4;
const SUPPORT_VOLUME_MUTE = 8;
const SUPPORT_PREVIOUS_TRACK = 16;
const SUPPORT_NEXT_TRACK = 32;
const SUPPORT_TURN_ON = 128;
const SUPPORT_TURN_OFF = 256;
const SUPPORT_PLAY_MEDIA = 512;
const SUPPORT_VOLUME_STEP = 1024;
const SUPPORT_SELECT_SOURCE = 2048;
const SUPPORT_SELECT_SOUND_MODE = 65536;

function getSupportedFeatures(context) {
    const raw = getAttribute(context, "supported_features");
    const num = Number(raw);
    return Number.isFinite(num) ? num : 0;
}

function hasFeature(features, featureMask) {
    return (features & featureMask) !== 0;
}

// Compute the appropriate playback UI and action based on entity state and supported features.
// Returns an object with the desired icon and the service to call on tap.
export function hasMediaControl(context) {
    const state = (context?._hass?.states?.[context?.config?.entity]?.state) ?? '';
    return state === 'playing' || state === 'paused' || state === 'unknown' || state === 'on';
}

export function computePlaybackControl(context) {
    const state = (context?._hass?.states?.[context?.config?.entity]?.state) ?? '';
    const features = getSupportedFeatures(context);

    const canPause = hasFeature(features, SUPPORT_PAUSE);
    const canStop = hasFeature(features, SUPPORT_STOP);
    const canPlay = hasFeature(features, SUPPORT_PLAY);

    // When currently playing, prefer pause; if pause not supported but stop is, show stop
    if (state === 'playing') {
        if (canPause) {
            return { icon: 'mdi:pause', service: 'media_pause' };
        }
        if (canStop) {
            return { icon: 'mdi:stop', service: 'media_stop' };
        }
        // Fallback to toggle if neither pause nor stop explicitly supported
        return { icon: 'mdi:pause', service: 'media_play_pause' };
    }

    // In paused/idle/off/other states, prefer play if supported
    if (canPlay) {
        return { icon: 'mdi:play', service: 'media_play' };
    }

    // Fallback to toggle when play is not explicitly supported
    return { icon: 'mdi:play', service: 'media_play_pause' };
}

// Report support for individual controls based on supported_features.
export function getMediaControlsSupport(context) {
    const features = getSupportedFeatures(context);
    return {
        canPrevious: hasFeature(features, SUPPORT_PREVIOUS_TRACK),
        canNext: hasFeature(features, SUPPORT_NEXT_TRACK),
        canPlay: hasFeature(features, SUPPORT_PLAY),
        canPause: hasFeature(features, SUPPORT_PAUSE),
        canStop: hasFeature(features, SUPPORT_STOP),
        canTurnOn: hasFeature(features, SUPPORT_TURN_ON),
        canTurnOff: hasFeature(features, SUPPORT_TURN_OFF),
        canVolumeSet: hasFeature(features, SUPPORT_VOLUME_SET),
        canVolumeStep: hasFeature(features, SUPPORT_VOLUME_STEP),
        canMute: hasFeature(features, SUPPORT_VOLUME_MUTE),
        canPlayMedia: hasFeature(features, SUPPORT_PLAY_MEDIA),
        canSelectSource: hasFeature(features, SUPPORT_SELECT_SOURCE),
        canSelectSoundMode: hasFeature(features, SUPPORT_SELECT_SOUND_MODE)
    };
}

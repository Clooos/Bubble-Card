import { 
    getState,
    getAttribute,
    isStateOn,
    isEntityType,
    setLayout
} from '../../tools/utils.js';
import { applyScrollingEffect } from '../../tools/text-scrolling.js';
import { updateContentContainerFixedClass } from '../../components/base-card/changes.js';
import { computePlaybackControl, getMediaControlsSupport, hasMediaControl, computeMediaDescription } from './helpers.js';
import { getIcon, getImage, getIconColor } from '../../tools/icon.js';
import { updateSlider } from '../../components/slider/changes.js';
import { handleCustomStyles } from '../../tools/style-processor.js';
import { getClimateColor } from '../climate/helpers.js';

const MEDIA_COVER_RESET_STATES = new Set(['off', 'unavailable', 'unknown', 'standby']);
const IDLE_COVER_FADEOUT_DELAY = 2000;

export function changeBackground(context) {
    const background = context.elements.background;
    if (!background) return;

    const coverState = evaluateCoverState(context);
    const coverBackgroundEnabled = Boolean(context.config.cover_background);
    const coverUrl = coverBackgroundEnabled ? coverState.resolvedUrl : '';

    if (!coverBackgroundEnabled) {
        if (coverState.backgroundDisplayedUrl) {
            const layers = ensureCoverLayers(context, 'background');
            if (layers) {
                crossfadeTo(layers, '');
            }
            coverState.backgroundDisplayedUrl = '';
        }
        return;
    }

    if (coverUrl && coverUrl !== coverState.backgroundDisplayedUrl) {
        const layers = ensureCoverLayers(context, 'background');
        if (layers) {
            crossfadeTo(layers, coverUrl);
            coverState.backgroundDisplayedUrl = coverUrl;
        }
    } else if (!coverUrl && coverState.backgroundDisplayedUrl) {
        const layers = ensureCoverLayers(context, 'background');
        if (layers) {
            crossfadeTo(layers, '');
        }
        coverState.backgroundDisplayedUrl = '';
    }
}

export function changeMediaIcon(context) {
    const iconElement = context.elements.icon;
    const imageElement = context.elements.image;
    const iconContainer = context.elements.iconContainer;

    if (!iconElement || !iconContainer) return;

    const cardType = context.config.card_type;
    const buttonType = context.config.button_type;
    const useAccentColor = context.config.use_accent_color;
    const entityType = isEntityType(context);
    const isOn = isStateOn(context);

    const coverState = evaluateCoverState(context);
    const hasCover = Boolean(coverState.resolvedUrl) && Boolean(imageElement);
    const newIcon = getIcon(context);
    const currentIcon = iconElement.icon;
    const noColor = buttonType === 'name' || (cardType === 'pop-up' && !buttonType);

    let newIconColor = 'inherit';

    if (isOn) {
        if ((isEntityType(context, "light") && !useAccentColor) || !noColor) {
            newIconColor = `var(--bubble-icon-color, ${getIconColor(context)})`;
        } else if (entityType === 'climate') {
            newIconColor = getClimateColor(context);
        }
    }

    const currentIconContainerColor = iconContainer.style.color;
    if (newIconColor !== 'inherit') {
        if (currentIconContainerColor !== newIconColor) {
            iconContainer.style.color = newIconColor;
        }
    } else if (currentIconContainerColor !== '') {
        iconContainer.style.color = '';
    }

    if (newIcon && currentIcon !== newIcon) {
        iconElement.icon = newIcon;
    }

    if (iconElement.style.color !== newIconColor) {
        iconElement.style.color = newIconColor;
    }

    const showIconOnly = () => {
        if (imageElement) {
            const layers = ensureCoverLayers(context, 'icon');
            if (layers && coverState.iconDisplayedUrl) {
                crossfadeTo(layers, '', () => {
                    if (imageElement) imageElement.style.display = 'none';
                });
            } else {
                if (imageElement) imageElement.style.display = 'none';
            }
        }
        if (iconElement) iconElement.style.display = '';
        coverState.iconDisplayedUrl = '';
    };

    if (hasCover) {
        const layers = ensureCoverLayers(context, 'icon');
        if (layers) {
            if (coverState.resolvedUrl !== coverState.iconDisplayedUrl) {
                if (iconElement) iconElement.style.display = '';
                if (imageElement) imageElement.style.display = '';
                crossfadeTo(layers, coverState.resolvedUrl);
                coverState.iconDisplayedUrl = coverState.resolvedUrl;
            } else {
                if (iconElement) iconElement.style.display = '';
                if (imageElement) imageElement.style.display = '';
            }
        } else {
            showIconOnly();
        }
    } else {
        showIconOnly();
    }

    if (iconElement.getAttribute('icon') !== iconElement.icon) {
        iconElement.setAttribute('icon', iconElement.icon);
    }
}

export function changeMediaInfo(context) {
    const title = getAttribute(context, "media_title");
    // Not `media_artist`: what belongs on that line depends on what is playing.
    const artist = computeMediaDescription(context);
    const mediaState = title + artist;

    if (mediaState !== context.previousMediaState) {
        if (artist === '') {
            context.elements.artist.style.display = 'none';
        } else {
            context.elements.artist.style.display = 'flex';
        }
        
        context.previousMediaState = mediaState;
    }

    // Always call applyScrollingEffect, it handles its own optimization
    // and can detect when element needs animation restart after reconnection
    applyScrollingEffect(context, context.elements.title, title);
    applyScrollingEffect(context, context.elements.artist, artist);
}

export function changeDisplayedInfo(context) {
    const normalize = (value) => value === undefined || value === null ? '' : String(value).trim();
    const title = normalize(getAttribute(context, "media_title"));
    // Without the app name: whether the block is worth showing is not the same
    // question as what to write in it.
    const artist = computeMediaDescription(context, { withApp: false });
    const source = normalize(getAttribute(context, "source"));
    const isTitleSourceOnly = title !== '' && source !== '' && title === source;
    const noMediaInfo = (title + artist) === '' || isTitleSourceOnly;
    const showIcon = context.config.show_icon ?? true;
    const state = getState(context);
    const isIdle = state === 'idle';

    context.elements.mediaInfoContainer.style.display = (noMediaInfo || isIdle) ? 'none' : '';
    context.elements.nameContainer.style.display = (noMediaInfo || isIdle) ? '' : 'none';
    context.elements.mediaInfoContainer.classList.toggle('name-without-icon', !showIcon);
}

export function changeSlider(context) {
    if (!context.elements.rangeFill) return;

    updateSlider(context);
}

export function changePlayPauseIcon(context) {
    const { icon } = computePlaybackControl(context);
    context.elements.playPauseButton.icon.setAttribute("icon", icon);
    context.elements.playPauseButton.clicked = false;
}

export function changePowerIcon(context) {
    const state = getState(context);
    const isOn = state !== "off" && state !== "unknown";

    if (!isOn) {
        context.elements.powerButton.icon.style.color = "";
    } else {
        context.elements.powerButton.icon.style.color = "var(--accent-color)";
    }
}

export function changeVolumeIcon(context) {
    const isBottomFixed = context.elements.buttonsContainer?.classList.contains('bottom-fixed');
    
    // In bottom mode, don't change volume button icon or hide other elements
    if (isBottomFixed) {
        return;
    }
    
    const isSliderOpen = !context.elements.volumeSliderWrapper.classList.contains('is-hidden');
    const newOpacity = isSliderOpen ? '0' : '1';

    context.elements.mediaInfoContainer.style.opacity = newOpacity;
    context.elements.nameContainer.style.opacity = newOpacity;
    if (context.elements.subButtonContainer) context.elements.subButtonContainer.style.opacity = newOpacity;
    context.elements.playPauseButton.style.opacity = newOpacity;
    context.elements.previousButton.style.opacity = newOpacity;
    context.elements.nextButton.style.opacity = newOpacity;
    context.elements.powerButton.style.opacity = newOpacity;
    context.elements.volumeButton.style.opacity = newOpacity;
    if (context.elements.inlineMuteButton) context.elements.inlineMuteButton.style.opacity = newOpacity;
    if (context.elements.volumeDownButton) context.elements.volumeDownButton.style.opacity = newOpacity;
    if (context.elements.volumeUpButton) context.elements.volumeUpButton.style.opacity = newOpacity;
    if (context.elements.iconContainer) context.elements.iconContainer.style.opacity = newOpacity;
}

export function changeMuteIcon(context) {
    const isVolumeMuted = getAttribute(context, "is_volume_muted") == true;
    
    if (context.elements.muteButton.icon.style.color !== "var(--primary-text-color)") {
        context.elements.muteButton.icon.style.color = "var(--primary-text-color)";
    }

    if (isVolumeMuted) {
        context.elements.muteButton.icon.setAttribute("icon", "mdi:volume-off");
    } else {
        context.elements.muteButton.icon.setAttribute("icon", "mdi:volume-high");
    }

    context.elements.muteButton.clicked = false;

    // Update slider mute button icon as well
    if (context.elements.volumeSliderMuteButton) {
        if (context.elements.volumeSliderMuteButton.icon.style.color !== "var(--primary-text-color)") {
            context.elements.volumeSliderMuteButton.icon.style.color = "var(--primary-text-color)";
        }

        if (isVolumeMuted) {
            context.elements.volumeSliderMuteButton.icon.setAttribute("icon", "mdi:volume-off");
        } else {
            context.elements.volumeSliderMuteButton.icon.setAttribute("icon", "mdi:volume-high");
        }

        context.elements.volumeSliderMuteButton.clicked = false;
    }

    // Update inline mute button icon when step controls or mute-only controls are used
    if (context.elements.inlineMuteButton) {
        if (context.elements.inlineMuteButton.icon.style.color !== "var(--primary-text-color)") {
            context.elements.inlineMuteButton.icon.style.color = "var(--primary-text-color)";
        }

        if (isVolumeMuted) {
            context.elements.inlineMuteButton.icon.setAttribute("icon", "mdi:volume-off");
        } else {
            context.elements.inlineMuteButton.icon.setAttribute("icon", "mdi:volume-high");
        }

        context.elements.inlineMuteButton.clicked = false;
    }
}

function getMediaCoverState(context) {
    if (!context._mediaCoverState) {
        context._mediaCoverState = {
            cachedUrl: '',
            resolvedUrl: '',
            iconDisplayedUrl: '',
            backgroundDisplayedUrl: '',
            idleTimeout: null,
            lastState: '',
            lastFingerprint: ''
        };
    }
    return context._mediaCoverState;
}

export function evaluateCoverState(context) {
    const coverState = getMediaCoverState(context);
    const forceIcon = Boolean(context.config.force_icon);
    let rawCover = forceIcon ? '' : (getImage(context) || '');
    const entityState = (getState(context) || '').toLowerCase();

    // Media content fingerprint identifying the currently playing media. Used both
    // as a cache-busting parameter (proxy URLs may stay identical across different
    // media, e.g. Apple TV) and to detect a real track change.
    //
    // Three attribute reads, twice per pass, on every media player of a dashboard:
    // only worth taking when there is a cover to fingerprint or a cached one this
    // could drop. A player sitting with no art and nothing cached pays nothing.
    const fingerprint = rawCover || coverState.cachedUrl
        ? (getAttribute(context, "media_content_id") || '')
            + (getAttribute(context, "media_title") || '')
            + (getAttribute(context, "media_artist") || '')
        : '';

    // Append the fingerprint as a cache-busting parameter so the same content
    // produces the same hash, avoiding unnecessary re-fetches.
    if (rawCover && fingerprint) {
        let h = 0;
        for (let i = 0; i < fingerprint.length; i++) {
            h = ((h << 5) - h) + fingerprint.charCodeAt(i);
            h |= 0;
        }
        const sep = rawCover.includes('?') ? '&' : '?';
        rawCover = `${rawCover}${sep}v=${Math.abs(h).toString(36)}`;
    }
    const shouldReset = forceIcon || MEDIA_COVER_RESET_STATES.has(entityState);
    const isIdle = entityState === 'idle';

    // A different track is now playing but it has no cover art: drop the cached
    // cover so the previous album art doesn't linger in the background.
    const mediaChangedWithoutCover = !rawCover && !isIdle
        && fingerprint !== '' && fingerprint !== coverState.lastFingerprint;
    coverState.lastFingerprint = fingerprint;

    if (coverState.lastState !== entityState) {
        if (coverState.idleTimeout) {
            clearTimeout(coverState.idleTimeout);
            coverState.idleTimeout = null;
        }

        if (isIdle && coverState.cachedUrl) {
            coverState.idleTimeout = setTimeout(() => {
                coverState.cachedUrl = '';
                coverState.resolvedUrl = '';
                fadeOutCovers(context);
            }, IDLE_COVER_FADEOUT_DELAY);
        }
        coverState.lastState = entityState;
    }

    if (rawCover && rawCover !== coverState.cachedUrl) {
        if (coverState.idleTimeout) {
            clearTimeout(coverState.idleTimeout);
            coverState.idleTimeout = null;
        }
        coverState.cachedUrl = rawCover;
    } else if ((shouldReset || mediaChangedWithoutCover) && !rawCover && coverState.cachedUrl) {
        if (coverState.idleTimeout) {
            clearTimeout(coverState.idleTimeout);
            coverState.idleTimeout = null;
        }
        coverState.cachedUrl = '';
    }

    if (!isIdle || rawCover) {
        coverState.resolvedUrl = rawCover || (shouldReset ? '' : coverState.cachedUrl);
    } else {
        coverState.resolvedUrl = coverState.cachedUrl;
    }

    return coverState;
}

function ensureCoverLayers(context, scope) {
    context._mediaCoverLayers = context._mediaCoverLayers || {};
    if (context._mediaCoverLayers[scope]) {
        return context._mediaCoverLayers[scope];
    }

    const container = scope === 'icon' ? context.elements?.image : context.elements?.background;
    if (!container) return null;

    container.style.backgroundImage = '';
    container.classList.add(scope === 'icon' ? 'bubble-cover-icon-crossfade' : 'bubble-cover-background-crossfade');

    const baseClass = scope === 'icon'
        ? 'bubble-cover-crossfade-layer bubble-cover-crossfade-layer--icon'
        : 'bubble-cover-crossfade-layer bubble-cover-crossfade-layer--background';

    const primaryLayer = document.createElement('div');
    primaryLayer.className = `${baseClass} is-visible`;
    const secondaryLayer = document.createElement('div');
    secondaryLayer.className = baseClass;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.append(primaryLayer, secondaryLayer);

    const layerState = {
        container,
        layers: [primaryLayer, secondaryLayer],
        visibleIndex: 0,
        currentValue: ''
    };

    context._mediaCoverLayers[scope] = layerState;
    return layerState;
}

function fadeOutCovers(context) {
    const coverState = getMediaCoverState(context);
    
    if (coverState.iconDisplayedUrl) {
        const iconLayers = ensureCoverLayers(context, 'icon');
        if (iconLayers && iconLayers.currentValue) {
            if (context.elements.icon) {
                context.elements.icon.style.display = '';
            }
            if (context.elements.image) {
                context.elements.image.style.display = '';
            }
            crossfadeTo(iconLayers, '', () => {
                coverState.iconDisplayedUrl = '';
                if (context.elements.image) {
                    context.elements.image.style.display = 'none';
                }
            });
        } else {
            coverState.iconDisplayedUrl = '';
            if (context.elements.icon) {
                context.elements.icon.style.display = '';
            }
            if (context.elements.image) {
                context.elements.image.style.display = 'none';
            }
        }
    }
    
    if (coverState.backgroundDisplayedUrl) {
        const backgroundLayers = ensureCoverLayers(context, 'background');
        if (backgroundLayers && backgroundLayers.currentValue) {
            crossfadeTo(backgroundLayers, '', () => {
                coverState.backgroundDisplayedUrl = '';
            });
        } else {
            coverState.backgroundDisplayedUrl = '';
        }
    }
}

// Exported: the Bubble Dashboard module reuses this exact crossfade for its
// media card cover layers (two layers, image preloaded before the fade).
// The cover crossfade: two layers, one fade at a time.
//
// Rewritten because the previous version raced with itself. It started a fade,
// swapped `visibleIndex` only 50 ms later at commit time, and left the
// preload asynchronous in between — so a call arriving in that window could
// not tell which layer was free, recycled the one still on screen, and wrote
// an image onto it at whatever opacity it had reached. A card re-evaluates on
// every hass update, and a playing player emits many per second, so a single
// track change went through that window a dozen times and the result differed
// from one skip to the next.
//
// The rules here are deliberately few:
//   - `target` is where we are heading. Asking again for it does nothing,
//     which is what stops a fade being restarted on every update.
//   - one fade runs at a time. A request arriving mid-fade is QUEUED, never
//     started on top, so no layer is ever recycled while it is visible and no
//     transition is ever interrupted.
//   - only the LAST queued request survives: holding "next" costs one extra
//     fade, not one per press.
//   - `visibleIndex` flips when the fade STARTS, so the next request always
//     sees the correct back layer.
const COVER_FADE_MS = 2000; // matches the transition in styles.css
// How long after a fade STARTS its incoming layer is still faint enough that
// replacing its image passes unnoticed. Home Assistant often reports a track
// change as TWO pictures a moment apart (a first url, then the resolved one),
// and queueing the second ran a whole extra fade right after the first — the
// short second transition, with the icon showing through its dip. Inside this
// window the two are treated as what they are: one change.
const COVER_SWAP_WINDOW_MS = 350;

// evaluateCoverState appends a fingerprint of the playing media to every cover
// url as `v=…` (media_content_id + title + artist). Two urls carrying the SAME
// fingerprint are the same artwork for the same track, however different the
// rest looks: an integration commonly reissues a picture in another form a
// beat later — measured here, `http://api.deezer.com/2.0/album/X/image` at
// 641 ms then `https://api.deezer.com/album/X/image` at 2200 ms, same album.
// Fading again for that is what showed as a second, shorter transition just
// after the first, with the icon surfacing through its dip.
const coverFingerprint = (url) => {
    const match = /[?&]v=([^&]*)/.exec(url || '');
    return match ? match[1] : null;
};

const sameCover = (a, b) => {
    if (a === b) return true;
    const fa = coverFingerprint(a);
    return fa !== null && fa === coverFingerprint(b);
};

function paintLayer(layer, url) {
    if (url) {
        layer.style.backgroundImage = `url(${url})`;
        layer.classList.remove('is-empty');
    } else {
        layer.style.backgroundImage = '';
        layer.classList.add('is-empty');
    }
}

function beginFade(layerState, url, onComplete) {
    const token = (layerState.fadeToken || 0) + 1;
    layerState.fadeToken = token;

    const paint = () => {
        if (layerState.fadeToken !== token) return;
        const frontIndex = layerState.visibleIndex;
        const backIndex = frontIndex === 0 ? 1 : 0;
        const back = layerState.layers[backIndex];
        const front = layerState.layers[frontIndex];
        paintLayer(back, url);

        // One frame, so the layer just painted has a value to animate FROM.
        // Setting the class in the same frame swaps it in with no fade at all.
        requestAnimationFrame(() => {
            if (layerState.fadeToken !== token) return;
            back.classList.add('is-visible');
            front.classList.remove('is-visible');
            layerState.visibleIndex = backIndex;
            layerState.currentValue = url;
            layerState.fading = true;
            layerState.fadeStartedAt = Date.now();

            clearTimeout(layerState.fadeTimer);
            layerState.fadeTimer = setTimeout(() => {
                layerState.fading = false;
                if (onComplete) onComplete();
                const next = layerState.queued;
                layerState.queued = null;
                if (!next) return;
                if (next.url === layerState.currentValue) {
                    if (next.onComplete) next.onComplete();
                    return;
                }
                beginFade(layerState, next.url, next.onComplete);
            }, COVER_FADE_MS);
        });
    };

    if (!url) {
        paint();
        return;
    }

    // Preloaded, so the fade never reveals a blank layer.
    const img = new Image();
    img.onload = paint;
    img.onerror = () => {
        if (layerState.fadeToken !== token) return;
        // Unreachable: forget it as a destination so a later attempt retries.
        layerState.target = layerState.currentValue;
        if (onComplete) onComplete();
    };
    img.src = url;
}

// Replaces the image on the layer currently fading IN, leaving both
// transitions untouched. Only ever called while that layer is still faint.
function swapIncoming(layerState, url, onComplete) {
    const token = (layerState.swapToken || 0) + 1;
    layerState.swapToken = token;

    const apply = () => {
        if (layerState.swapToken !== token || layerState.target !== url) return;
        paintLayer(layerState.layers[layerState.visibleIndex], url);
        layerState.currentValue = url;
        if (onComplete) onComplete();
    };

    if (!url) {
        apply();
        return;
    }
    const img = new Image();
    img.onload = apply;
    img.onerror = () => {
        if (layerState.swapToken !== token) return;
        layerState.target = layerState.currentValue;
        if (onComplete) onComplete();
    };
    img.src = url;
}

export function crossfadeTo(layerState, imageUrl, onComplete) {
    if (!layerState) return;
    const url = imageUrl || '';

    // Already showing it, or already fading towards it. Same artwork under
    // another url counts: what is on screen is already right, so it is only
    // recorded, never faded to again.
    if (sameCover(layerState.target, url)) {
        layerState.target = url;
        if (onComplete) onComplete();
        return;
    }
    layerState.target = url;

    if (layerState.fading) {
        // Still at the very start of the fade: swap the image the incoming
        // layer carries instead of running a second fade after this one.
        if (Date.now() - (layerState.fadeStartedAt || 0) < COVER_SWAP_WINDOW_MS) {
            swapIncoming(layerState, url, onComplete);
            return;
        }
        layerState.queued = { url, onComplete };
        return;
    }

    beginFade(layerState, url, onComplete);
}

export function changeStyle(context) {
    setLayout(context);
    handleCustomStyles(context);

    const state = getState(context);
    const isOn = state !== "off" && state !== "unknown";
    const isPlaying = state === 'playing';
    const isPaused = state === 'paused';
    const isIdle = state === 'idle';
    const hasControl = hasMediaControl(context);
    const support = getMediaControlsSupport(context);

    // Determine visibility based on config and supported features
    const showPower = !context.config.hide?.power_button && (support.canTurnOn || support.canTurnOff);
    // Previous/Next visible when features exist and entity is controllable (or in editor)
    const showPrevious = !context.config.hide?.previous_button && support.canPrevious && (context.editor || hasControl);
    const showNext = !context.config.hide?.next_button && support.canNext && (context.editor || hasControl);
    // Volume/Mute available whenever features exist and entity is controllable; editor always shows
    const showVolume = !context.config.hide?.volume_button && (support.canVolumeSet || support.canVolumeStep || support.canMute) && (context.editor || hasControl || isOn);
    // Play/Pause/Stop visible when controllable; fallback to toggle if features missing
    const showPlayPause = !context.config.hide?.play_pause_button && (context.editor || hasControl || isOn || isIdle || isPaused || isPlaying);

    const allButtonsHidden = !(showPower || showPrevious || showNext || showVolume || showPlayPause);

    // Hide or show the buttons container - Make sure it's always visible if power button is needed
    if (((!isOn && context.config.hide?.power_button) || allButtonsHidden) && context.elements.buttonsContainer.style.display !== 'none') {
        context.elements.buttonsContainer.classList.add('hidden');
        updateContentContainerFixedClass(context);
    } else if ((!allButtonsHidden || !context.config.hide?.power_button) && context.elements.buttonsContainer.classList.contains('hidden')) {
        context.elements.buttonsContainer.classList.remove('hidden');
        updateContentContainerFixedClass(context);
    }

    if (!showPower && context.elements.powerButton.style.display !== 'none') {
        context.elements.powerButton.classList.add('hidden');
    } else if (showPower && context.elements.powerButton.classList.contains('hidden')) {
        context.elements.powerButton.classList.remove('hidden');
    }

    if (!showPrevious && context.elements.previousButton.style.display !== 'none') {
        context.elements.previousButton.classList.add('hidden');
    } else if (showPrevious && context.elements.previousButton.classList.contains('hidden')) {
        context.elements.previousButton.classList.remove('hidden');
    }

    if (!showNext && context.elements.nextButton.style.display !== 'none') {
        context.elements.nextButton.classList.add('hidden');
    } else if (showNext && context.elements.nextButton.classList.contains('hidden')) {
        context.elements.nextButton.classList.remove('hidden');
    }

    // Volume slider vs inline step/mute buttons: show the slider drawer button when
    // volume_set is supported and either a numeric volume_level is available or
    // volume_step is not supported (or in the editor when neither step nor mute is
    // supported). When canUseVolumeSlider is false, replace the volume drawer button
    // directly in buttonsContainer with inline volumeDownButton, volumeUpButton, and/or
    // inlineMuteButton matching the main media player buttons.
    const rawVolumeLevel = getAttribute(context, "volume_level");
    const hasVolumeLevel = rawVolumeLevel !== undefined && rawVolumeLevel !== null && rawVolumeLevel !== '' && Number.isFinite(Number(rawVolumeLevel));
    const canUseVolumeSlider = support.canVolumeSet && (hasVolumeLevel || !support.canVolumeStep);
    const showVolumeButton = showVolume && (canUseVolumeSlider || (!support.canVolumeStep && !support.canMute && Boolean(context.editor)));
    const showVolumeStepButtons = showVolume && !canUseVolumeSlider && support.canVolumeStep;
    const showInlineMuteButton = showVolume && !canUseVolumeSlider && support.canMute;

    if (!showVolumeButton && context.elements.volumeButton.style.display !== 'none') {
        context.elements.volumeButton.classList.add('hidden');
    } else if (showVolumeButton && context.elements.volumeButton.classList.contains('hidden')) {
        context.elements.volumeButton.classList.remove('hidden');
    }

    if (context.elements.volumeDownButton) {
        context.elements.volumeDownButton.classList.toggle('hidden', !showVolumeStepButtons);
    }
    if (context.elements.volumeUpButton) {
        context.elements.volumeUpButton.classList.toggle('hidden', !showVolumeStepButtons);
    }
    if (context.elements.inlineMuteButton) {
        context.elements.inlineMuteButton.classList.toggle('hidden', !showInlineMuteButton);
    }

    // If the volume slider drawer was open when switching to inline controls, close it
    if (!showVolumeButton && context.elements.volumeSliderWrapper && !context.elements.volumeSliderWrapper.classList.contains('is-hidden')) {
        context.elements.volumeSliderWrapper.classList.add('is-hidden');
        if (context.elements.buttonsContainer?.classList.contains('bottom-fixed')) {
            context.elements.buttonsContainer.classList.remove('is-hidden');
        } else {
            if (context.elements.muteButton) context.elements.muteButton.classList.add('is-hidden');
            changeVolumeIcon(context);
        }
    }

    if (!showPlayPause && context.elements.playPauseButton.style.display !== 'none') {
        context.elements.playPauseButton.classList.add('hidden');
    } else if (showPlayPause && context.elements.playPauseButton.classList.contains('hidden')) {
        context.elements.playPauseButton.classList.remove('hidden');
    }

    // Slider mute buttons availability mirrors volume slider + mute support
    const showSliderMute = showVolume && canUseVolumeSlider && support.canMute;
    if (context.elements.muteButton) {
        if (!showSliderMute && context.elements.muteButton.style.display !== 'none') {
            context.elements.muteButton.classList.add('hidden');
        } else if (showSliderMute && context.elements.muteButton.classList.contains('hidden')) {
            context.elements.muteButton.classList.remove('hidden');
        }
    }

    if (context.elements.volumeSliderMuteButton) {
        if (!showSliderMute && context.elements.volumeSliderMuteButton.style.display !== 'none') {
            context.elements.volumeSliderMuteButton.classList.add('hidden');
        } else if (showSliderMute && context.elements.volumeSliderMuteButton.classList.contains('hidden')) {
            context.elements.volumeSliderMuteButton.classList.remove('hidden');
        }
    }
}
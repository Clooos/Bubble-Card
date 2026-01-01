import { 
    applyScrollingEffect,
    getState,
    getAttribute,
    isStateOn,
    isEntityType,
    setLayout
} from '../../tools/utils.js';
import { updateContentContainerFixedClass } from '../../components/base-card/changes.js';
import { computePlaybackControl, getMediaControlsSupport, hasMediaControl } from './helpers.js';
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
    const artist = getAttribute(context, "media_artist");
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
    const artist = normalize(getAttribute(context, "media_artist"));
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
}

function getMediaCoverState(context) {
    if (!context._mediaCoverState) {
        context._mediaCoverState = {
            cachedUrl: '',
            resolvedUrl: '',
            iconDisplayedUrl: '',
            backgroundDisplayedUrl: '',
            idleTimeout: null,
            lastState: ''
        };
    }
    return context._mediaCoverState;
}

function evaluateCoverState(context) {
    const coverState = getMediaCoverState(context);
    const forceIcon = Boolean(context.config.force_icon);
    const rawCover = forceIcon ? '' : (getImage(context) || '');
    const entityState = (getState(context) || '').toLowerCase();
    const shouldReset = forceIcon || MEDIA_COVER_RESET_STATES.has(entityState);
    const isIdle = entityState === 'idle';

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
    } else if (shouldReset && !rawCover && coverState.cachedUrl) {
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

function crossfadeTo(layerState, imageUrl, onComplete) {
    if (!layerState) return;
    if (layerState.currentValue === imageUrl) {
        if (onComplete) onComplete();
        return;
    }

    const nextIndex = layerState.visibleIndex === 0 ? 1 : 0;
    const currentLayer = layerState.layers[layerState.visibleIndex];
    const nextLayer = layerState.layers[nextIndex];

    const startTransition = () => {
        nextLayer.classList.add('is-visible');
        if (typeof requestAnimationFrame === 'function') {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    currentLayer.classList.remove('is-visible');
                    layerState.visibleIndex = nextIndex;
                    layerState.currentValue = imageUrl;
                    if (onComplete) {
                        setTimeout(onComplete, 1000);
                    }
                }, 50);
            });
        } else {
            setTimeout(() => {
                currentLayer.classList.remove('is-visible');
                layerState.visibleIndex = nextIndex;
                layerState.currentValue = imageUrl;
                if (onComplete) {
                    setTimeout(onComplete, 1000);
                }
            }, 50);
        }
    };

    if (imageUrl) {
        const normalized = `url(${imageUrl})`;
        const isAlreadySet = nextLayer.style.backgroundImage === normalized;
        
        if (!isAlreadySet) {
            const img = new Image();
            img.onload = () => {
                nextLayer.style.backgroundImage = normalized;
                nextLayer.classList.remove('is-empty');
                startTransition();
            };
            img.onerror = () => {
                nextLayer.style.backgroundImage = '';
                nextLayer.classList.add('is-empty');
                layerState.currentValue = '';
                if (onComplete) onComplete();
            };
            img.src = imageUrl;
        } else {
            nextLayer.classList.remove('is-empty');
            startTransition();
        }
    } else {
        nextLayer.style.backgroundImage = '';
        nextLayer.classList.add('is-empty');
        startTransition();
    }
}

function updateVolumeSliderPosition(context) {
    // For normal layout
    let leftOffset = 50;
    let totalWidth = 146;
    
    // For large layout
    if (context.content.classList.contains('large')) {
        leftOffset = 58;
        totalWidth = 160;
    }

    // Check if the play/pause button is hidden
    const state = getState(context);
    const isOn = state !== "off" && state !== "unknown";

    if (context.config.hide?.play_pause_button || (!context.editor && !isOn)) {
        // For large layout
        if (context.content.classList.contains('large')) {
            totalWidth -= 42;
        } 
        // For normal layout
        else {
            totalWidth -= 36;
        }
    }

    context.elements.cardWrapper.style.setProperty('--volume-slider-left-offset', `${leftOffset}px`);
    context.elements.cardWrapper.style.setProperty('--volume-slider-width-calc', `calc(100% - ${totalWidth}px)`);
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

    if (!showVolume && context.elements.volumeButton.style.display !== 'none') {
        context.elements.volumeButton.classList.add('hidden');
    } else if (showVolume && context.elements.volumeButton.classList.contains('hidden')) {
        context.elements.volumeButton.classList.remove('hidden');
    }

    if (!showPlayPause && context.elements.playPauseButton.style.display !== 'none') {
        context.elements.playPauseButton.classList.add('hidden');
    } else if (showPlayPause && context.elements.playPauseButton.classList.contains('hidden')) {
        context.elements.playPauseButton.classList.remove('hidden');
    }

    // Mute button availability mirrors volume mute support
    if (context.elements.muteButton) {
        if (!(showVolume && support.canMute) && context.elements.muteButton.style.display !== 'none') {
            context.elements.muteButton.classList.add('hidden');
        } else if ((showVolume && support.canMute) && context.elements.muteButton.classList.contains('hidden')) {
            context.elements.muteButton.classList.remove('hidden');
        }
    }
    
    updateVolumeSliderPosition(context);
}
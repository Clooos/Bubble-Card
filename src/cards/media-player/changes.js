import { 
    applyScrollingEffect,
    getState,
    getAttribute,
    isStateOn,
    setLayout
} from '../../tools/utils.js';
import { computePlaybackControl, getMediaControlsSupport } from './helpers.js';
import { getImage } from '../../tools/icon.js';
import { updateSlider } from '../../components/slider/changes.js';
import { handleCustomStyles } from '../../tools/style-processor.js';

export function changeBackground(context) {
    const isOn = isStateOn(context);
    const newMediaCover = getImage(context);
    const coverBackground = context.config.cover_background;
    const currentCoverBackground = context.elements.background.style.backgroundImage;

    if (coverBackground && isOn && newMediaCover) {
        const newBackgroundImage = 'url(' + newMediaCover + ')';
        if (currentCoverBackground !== newBackgroundImage) {
            context.elements.background.style.backgroundImage = newBackgroundImage;
        }
    } else {
        if (currentCoverBackground !== '') {
            context.elements.background.style.backgroundImage = '';
        }
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

        applyScrollingEffect(context, context.elements.title, title);
        applyScrollingEffect(context, context.elements.artist, artist);
    }
}

export function changeDisplayedInfo(context) {
    const title = getAttribute(context, "media_title");
    const artist = getAttribute(context, "media_artist");
    const noMediaInfo = (title, artist) === '';

    context.elements.mediaInfoContainer.style.display = noMediaInfo ? 'none' : '';
    context.elements.nameContainer.style.display = noMediaInfo ? '' : 'none';
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
    const isHidden = context.elements.volumeButton.isHidden;
    const newOpacity = isHidden ? '1' : '0';
    const newIcon = isHidden ? "mdi:volume-high" : "mdi:close";

    context.elements.volumeButton.icon.setAttribute("icon", newIcon);
    context.elements.mediaInfoContainer.style.opacity = newOpacity;
    context.elements.nameContainer.style.opacity = newOpacity;
    if (context.elements.subButtonContainer) context.elements.subButtonContainer.style.opacity = newOpacity;
    context.elements.previousButton.style.opacity = newOpacity;
    context.elements.nextButton.style.opacity = newOpacity;
    context.elements.powerButton.style.opacity = newOpacity;
    
    context.elements.volumeButton.isHidden = !isHidden;
}

export function changeMuteIcon(context) {
    const isVolumeMuted = getAttribute(context, "is_volume_muted") == true;
    const clicked = context.elements.muteButton.clicked;
    
    if (context.elements.muteButton.icon.style.color !== "var(--primary-text-color)") {
        context.elements.muteButton.icon.style.color = "var(--primary-text-color)";
    }

    if (isVolumeMuted) {
        context.elements.muteButton.icon.setAttribute("icon", "mdi:volume-off");
    } else {
        context.elements.muteButton.icon.setAttribute("icon", "mdi:volume-high");
    }

    context.elements.muteButton.clicked = false;
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
    const support = getMediaControlsSupport(context);

    // Determine visibility based on config and supported features
    const showPower = !context.config.hide?.power_button && (support.canTurnOn || support.canTurnOff);
    // Previous/Next: show only when actively engaged (playing/paused), not idle
    const showPrevious = !context.config.hide?.previous_button && support.canPrevious && (context.editor || (isPlaying || isPaused));
    const showNext = !context.config.hide?.next_button && support.canNext && (context.editor || (isPlaying || isPaused));
    // Volume/Mute: allowed while device is on
    const showVolume = !context.config.hide?.volume_button && (support.canVolumeSet || support.canVolumeStep || support.canMute) && (context.editor || isOn);
    // Play/Pause/Stop visibility mirrors HA: when playing -> need pause/stop; when paused/idle -> need play
    const showPlayPause = !context.config.hide?.play_pause_button && (
        context.editor || (
            (isOn && isPlaying && (support.canPause || support.canStop)) ||
            (isOn && (isPaused || isIdle) && support.canPlay)
        )
    );

    const allButtonsHidden = !(showPower || showPrevious || showNext || showVolume || showPlayPause);

    // Hide or show the buttons container - Make sure it's always visible if power button is needed
    if (((!isOn && context.config.hide?.power_button) || allButtonsHidden) && context.elements.buttonsContainer.style.display !== 'none') {
        context.elements.buttonsContainer.classList.add('hidden');
    } else if ((!allButtonsHidden || !context.config.hide?.power_button) && context.elements.buttonsContainer.classList.contains('hidden')) {
        context.elements.buttonsContainer.classList.remove('hidden');
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
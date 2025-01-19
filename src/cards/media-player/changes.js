import { initializesubButtonIcon } from '../../tools/global-changes.js';
import { 
    applyScrollingEffect,
    getBrightness,
    getIcon,
    getIconColor,
    getImage,
    getName,
    getState,
    getAttribute,
    isEntityType,
    isStateOn,
    getWeatherIcon,
    setLayout
} from '../../tools/utils.js';

export function changeIcon(context) {
    const isOn = isStateOn(context);
    const newIcon = getIcon(context);
    const newImage = getImage(context);

    const currentImage = context.elements.image.style.backgroundImage;
    const currentIcon = context.elements.icon.icon;
    const currentIconColor = context.elements.icon.style.color;

    if (newImage !== '') {
        const newBackgroundImage = 'url(' + newImage + ')';
        if (currentImage !== newBackgroundImage) {
            context.elements.image.style.backgroundImage = newBackgroundImage;
        }
        if (context.elements.icon.style.display !== 'none') {
            context.elements.icon.style.display = 'none';
        }
        if (context.elements.image.style.display !== '') {
            context.elements.image.style.display = '';
        }
    } else if (newIcon !== '') {
        if (currentIcon !== newIcon) {
            context.elements.icon.icon = newIcon;
        }
        const newColor = isOn ? 'var(--accent-color)' : 'inherit';
        if (currentIconColor !== newColor) {
            context.elements.icon.style.color = newColor;
        }
        if (context.elements.icon.style.display !== '') {
            context.elements.icon.style.display = '';
        }
        if (context.elements.image.style.display !== 'none') {
            context.elements.image.style.display = 'none';
        }
    } else {
        if (context.elements.icon.style.display !== 'none') {
            context.elements.icon.style.display = 'none';
        }
        if (context.elements.image.style.display !== 'none') {
            context.elements.image.style.display = 'none';
        }
    }
}

export function changeBackground(context) {
    const isOn = isStateOn(context);
    const newMediaCover = getImage(context);
    const coverBackground = context.config.cover_background;
    const currentCoverBackground = context.elements.coverBackground.style.backgroundImage;

    if (coverBackground && isOn && newMediaCover) {
        const newBackgroundImage = 'url(' + newMediaCover + ')';
        if (currentCoverBackground !== newBackgroundImage) {
            context.elements.coverBackground.style.backgroundImage = newBackgroundImage;
        }
    } else {
        if (currentCoverBackground !== '') {
            context.elements.coverBackground.style.backgroundImage = '';
        }
    }
}

export function changeName(context) {
    if (context.config.styles?.includes("card.querySelector('.bubble-name').innerText")) return;
    const name = getName(context);
    if (name !== context.previousName) {
        context.elements.name.innerText = name;
        context.previousName = name;
        applyScrollingEffect(context, context.elements.name, name);
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
    if (isEntityType(context, "media_player") && context.dragging === false && context.elements.rangeFill) {
        const percentage = 100 * getAttribute(context, "volume_level");
        context.elements.rangeFill.style.transform =`translateX(${percentage}%)`;
    }
}

export function changeStatus(context) {
    const state = getState(context);

    if (state === 'unavailable') {
        context.card.classList.add('is-unavailable');
    } else {
        context.card.classList.remove('is-unavailable');
    }

    if (isStateOn(context)) {
        context.card.classList.add('is-on');
    } else {
        context.card.classList.remove('is-on');
    }
}

export function changePlayPauseIcon(context) {
    const isPlaying = getState(context) === 'playing';
    const clicked = context.elements.playPauseButton.clicked;

    if (isPlaying) {
        context.elements.playPauseButton.setAttribute("icon", clicked ? "mdi:play" : "mdi:pause");
    } else {
        context.elements.playPauseButton.setAttribute("icon", clicked ? "mdi:pause" : "mdi:play");
    }

    context.elements.playPauseButton.clicked = false;
}

export function changePowerIcon(context) {
    const isOn = isStateOn(context);

    if (!isOn) {
        context.elements.powerButton.style.color = "";
    } else {
        context.elements.powerButton.style.color = "var(--accent-color)";
    }
}

export function changeVolumeIcon(context) {
    const isHidden = context.elements.volumeButton.isHidden;
    const newOpacity = isHidden ? '1' : '0';
    const newIcon = isHidden ? "mdi:volume-high" : "mdi:close";

    context.elements.volumeButton.setAttribute("icon", newIcon);
    context.elements.mediaInfoContainer.style.opacity = newOpacity;
    context.elements.nameContainer.style.opacity = newOpacity;
    if (context.elements.subButtonContainer) context.elements.subButtonContainer.style.opacity = newOpacity;
    context.elements.previousButton.style.opacity = newOpacity;
    context.elements.nextButton.style.opacity = newOpacity;
    context.elements.powerButton.style.opacity = newOpacity;
    
    context.elements.volumeButton.isHidden = !isHidden;
}

export function changeMuteIcon(context) {
    const isVolumeMuted = getAttribute(context, "is_volume_muted") === true;
    const clicked = context.elements.muteButton.clicked;

    if (isVolumeMuted) {
        context.elements.muteButton.style.color = clicked ? "" : "var(--accent-color)";
    } else {
        context.elements.muteButton.style.color = clicked ? "var(--accent-color)" : "";
    }

    context.elements.muteButton.clicked = false;
}

export function changeStyle(context) {
    initializesubButtonIcon(context);
    setLayout(context);

    const state = getState(context);
    const isOn = state !== "off" && state !== "unknown";

    if (context.config.hide?.power_button && context.elements.powerButton.style.display !== 'none') {
        context.elements.powerButton.style.display = 'none';
    } else if (!context.config.hide?.power_button && context.elements.powerButton.style.display === 'none') {
        context.elements.powerButton.style.display = '';
    }

    if ((context.config.hide?.previous_button || (!context.editor && !isOn)) && context.elements.previousButton.style.display !== 'none') {
        context.elements.previousButton.style.display = 'none';
    } else if (!(context.config.hide?.previous_button || (!context.editor && !isOn)) && context.elements.previousButton.style.display === 'none') {
        context.elements.previousButton.style.display = '';
    }

    if ((context.config.hide?.next_button || (!context.editor && !isOn)) && context.elements.nextButton.style.display !== 'none') {
        context.elements.nextButton.style.display = 'none';
    } else if (!(context.config.hide?.next_button || (!context.editor && !isOn)) && context.elements.nextButton.style.display === 'none') {
        context.elements.nextButton.style.display = '';
    }

    if ((context.config.hide?.volume_button || (!context.editor && !isOn)) && context.elements.volumeButton.style.display !== 'none') {
        context.elements.volumeButton.style.display = 'none';
    } else if (!(context.config.hide?.volume_button || (!context.editor && !isOn)) && context.elements.volumeButton.style.display === 'none') {
        context.elements.volumeButton.style.display = '';
    }

    if ((context.config.hide?.play_pause_button || (!context.editor && !isOn)) && context.elements.playPauseButton.style.display !== 'none') {
        context.elements.playPauseButton.style.display = 'none';
    } else if (!(context.config.hide?.play_pause_button || (!context.editor && !isOn)) && context.elements.playPauseButton.style.display === 'none') {
        context.elements.playPauseButton.style.display = '';
    }

    if (!context.config.styles) return;

    let customStyle = '';

    try {
        customStyle = context.config.styles
            ? Function('hass', 'entity', 'state', 'icon', 'subButtonIcon', 'getWeatherIcon', 'card', `return \`${context.config.styles}\`;`)
              (context._hass, context.config.entity, state, context.elements.icon, context.subButtonIcon, getWeatherIcon, context.card)
            : '';
    } catch (error) {
        throw new Error(`Error in generating media player custom templates: ${error.message}`);
    }

    if (context.elements.customStyle) {
        context.elements.customStyle.innerText = customStyle;
    }
}
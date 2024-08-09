import { initializesubButtonIcon } from '../../tools/global-changes.ts';
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
} from '../../tools/utils.ts';

export function changeIcon(context) {
    const isOn = isStateOn(context);
    const icon = getIcon(context);
    const image = getImage(context);

    if (image !== '') {
        context.elements.image.style.backgroundImage = 'url(' + image + ')';
        context.elements.icon.style.display = 'none';
        context.elements.image.style.display = '';
    } else if (icon !== '') {
        context.elements.icon.icon = icon;
        context.elements.icon.style.color = isOn ? 'var(--accent-color)' : 'inherit';
        context.elements.icon.style.display = '';
        context.elements.image.style.display = 'none';
    } else {
        context.elements.icon.style.display = 'none';
        context.elements.image.style.display = 'none';
    }
}

export function changeName(context) {
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
    if (context.elements.volumeButton.isHidden) {
        context.elements.volumeButton.setAttribute("icon", "mdi:volume-high");
        context.elements.mediaInfoContainer.style.opacity = '1';
        context.elements.nameContainer.style.opacity = '1';
        context.elements.volumeButton.isHidden = false;
    } else {
        context.elements.volumeButton.setAttribute("icon", "mdi:close");
        context.elements.mediaInfoContainer.style.opacity = '0';
        context.elements.nameContainer.style.opacity = '0';
        context.elements.volumeButton.isHidden = true;
    }
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
    const isOn = state !== "off" && state !== "undefined";

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
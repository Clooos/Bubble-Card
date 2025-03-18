import { createBaseStructure } from "../../components/base-card/index.js";
import { addActions, addFeedback } from "../../tools/tap-actions.js";
import { createElement, toggleEntity, getAttribute, isStateOn, forwardHaptic } from "../../tools/utils.js";
import { onSliderChange } from "./helpers.js";
import { createSliderStructure } from "../../components/slider/index.js";
import { changeVolumeIcon } from "./changes.js";
import styles from "./styles.css";

let volumeLevel = 0;

export function createStructure(context) {
    const cardType = 'media-player';

    const elements = createBaseStructure(context, {
        type: cardType,
        styles: styles,
        iconActions: false,
        buttonActions: true,
        withSubButtons: true,
    });

    elements.mediaInfoContainer = createElement('div', 'bubble-media-info-container');
    elements.playPauseButton = createElement('ha-icon', 'bubble-play-pause-button');
    elements.previousButton = createElement('ha-icon', 'bubble-previous-button');
    elements.previousButton.setAttribute("icon", "mdi:skip-previous");
    elements.nextButton = createElement('ha-icon', 'bubble-next-button');
    elements.nextButton.setAttribute("icon", "mdi:skip-next");
    elements.volumeButton = createElement('ha-icon', 'bubble-volume-button');
    elements.volumeButton.setAttribute("icon", "mdi:volume-high");
    elements.powerButton = createElement('ha-icon', 'bubble-power-button');
    elements.powerButton.setAttribute("icon", "mdi:power-standby");
    elements.muteButton = createElement('ha-icon', 'bubble-mute-button is-hidden');
    elements.muteButton.setAttribute("icon", "mdi:volume-off");
    elements.title = createElement('div', 'bubble-title');
    elements.artist = createElement('div', 'bubble-artist');

    // Add backward compatibility
    elements.background.classList.add('bubble-cover-background');
    elements.buttonsContainer.classList.add('bubble-button-container');

    elements.iconContainer.appendChild(elements.muteButton);
    elements.mediaInfoContainer.append(elements.title, elements.artist);
    elements.contentContainer.append(elements.mediaInfoContainer);
    elements.buttonsContainer.append(
        elements.powerButton,
        elements.previousButton,
        elements.nextButton,
        elements.volumeButton,
        elements.playPauseButton
    );

    addActions(elements.icon, context.config, context.config.entity);
    addActions(elements.image, context.config, context.config.entity);

    elements.volumeSliderContainer = createElement('div', 'bubble-volume-slider is-hidden');
    createSliderStructure(context, {
        targetElement: elements.volumeSliderContainer,
        sliderLiveUpdate: false,
        withValueDisplay: true,
        holdToSlide: false
    });

    elements.cardWrapper.appendChild(elements.volumeSliderContainer);

    elements.volumeButton.addEventListener('click', () => {
        elements.volumeSliderContainer.classList.toggle('is-hidden');
        elements.muteButton.classList.toggle('is-hidden');
        elements.icon.classList.toggle('is-hidden');
        elements.image.classList.toggle('is-hidden');
        changeVolumeIcon(context);
    });

    elements.powerButton.addEventListener('click', () => {
        const isOn = isStateOn(context);
        context._hass.callService('media_player', isOn ? 'turn_off' : 'turn_on', {
            entity_id: context.config.entity
        });
    });

    elements.muteButton.addEventListener('click', () => {
        const isVolumeMuted = getAttribute(context, "is_volume_muted") === true;
        context._hass.callService('media_player', 'volume_mute', {
            entity_id: context.config.entity,
            is_volume_muted: !isVolumeMuted
        });
        elements.muteButton.clicked = true;
    });

    elements.previousButton.addEventListener('click', () => {
        context._hass.callService('media_player', 'media_previous_track', {
            entity_id: context.config.entity
        });
    });

    elements.nextButton.addEventListener('click', () => {
        context._hass.callService('media_player', 'media_next_track', {
            entity_id: context.config.entity
        });
    });

    elements.playPauseButton.addEventListener('click', () => {
        context._hass.callService('media_player', 'media_play_pause', {
            entity_id: context.config.entity
        });
        elements.playPauseButton.clicked = true;
    });

    elements.mainContainer.addEventListener('click', () => forwardHaptic("selection"));

    context.cardType = cardType;
}
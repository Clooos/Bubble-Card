import { createBaseStructure } from "../../components/base-card/index.js";
import { createElement, getAttribute, getState, forwardHaptic } from "../../tools/utils.js";
import { createSliderStructure } from "../../components/slider/index.js";
import { changeVolumeIcon } from "./changes.js";
import { addFeedback } from "../../tools/tap-actions.js";
import styles from "./styles.css";

export function createStructure(context) {
    const cardType = 'media-player';

    const elements = createBaseStructure(context, {
        type: cardType,
        styles: styles,
        iconActions: true,
        buttonActions: true,
        withSubButtons: true,
    });

    elements.mediaInfoContainer = createElement('div', 'bubble-media-info-container');
    
    function createMediaButton(iconName, className) {
        const button = createElement('div', `bubble-media-button ${className}`);
        const icon = createElement('ha-icon', 'bubble-media-button-icon');
        icon.setAttribute("icon", iconName);
        
        const feedbackContainer = createElement('div', 'bubble-feedback-container');
        const feedback = createElement('div', 'bubble-feedback-element feedback-element');
        
        feedbackContainer.appendChild(feedback);
        button.appendChild(feedbackContainer);
        button.appendChild(icon);
        
        button.icon = icon;
        button.feedback = feedback;
        
        return button;
    }
    
    elements.playPauseButton = createMediaButton("mdi:play", 'bubble-play-pause-button');
    elements.previousButton = createMediaButton("mdi:skip-previous", 'bubble-previous-button');
    elements.nextButton = createMediaButton("mdi:skip-next", 'bubble-next-button');
    elements.volumeButton = createMediaButton("mdi:volume-high", 'bubble-volume-button');
    elements.powerButton = createMediaButton("mdi:power", 'bubble-power-button');
    elements.muteButton = createMediaButton("mdi:volume-off", 'bubble-mute-button is-hidden');
    
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
    addFeedback(elements.volumeButton, elements.volumeButton.feedback);

    elements.powerButton.addEventListener('click', () => {
        const state = getState(context);
        const isOn = state !== "off" && state !== "unknown";
        context._hass.callService('media_player', isOn ? 'turn_off' : 'turn_on', {
            entity_id: context.config.entity
        });
    });
    addFeedback(elements.powerButton, elements.powerButton.feedback);

    elements.muteButton.addEventListener('pointerdown', (event) => {
        event.stopPropagation();
        const isVolumeMuted = getAttribute(context, "is_volume_muted") === true;
        context._hass.callService('media_player', 'volume_mute', {
            entity_id: context.config.entity,
            is_volume_muted: !isVolumeMuted
        });
        elements.muteButton.clicked = true;
    });
    addFeedback(elements.muteButton, elements.muteButton.feedback);

    elements.previousButton.addEventListener('click', () => {
        context._hass.callService('media_player', 'media_previous_track', {
            entity_id: context.config.entity
        });
    });
    addFeedback(elements.previousButton, elements.previousButton.feedback);

    elements.nextButton.addEventListener('click', () => {
        context._hass.callService('media_player', 'media_next_track', {
            entity_id: context.config.entity
        });
    });
    addFeedback(elements.nextButton, elements.nextButton.feedback);

    elements.playPauseButton.addEventListener('click', () => {
        context._hass.callService('media_player', 'media_play_pause', {
            entity_id: context.config.entity
        });
        elements.playPauseButton.clicked = true;
    });
    addFeedback(elements.playPauseButton, elements.playPauseButton.feedback);

    elements.mainContainer.addEventListener('click', () => forwardHaptic("selection"));

    context.cardType = cardType;
}
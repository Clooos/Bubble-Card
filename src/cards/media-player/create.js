import { createBaseStructure } from "../../components/base-card/index.js";
import { createElement, getAttribute, getState, forwardHaptic } from "../../tools/utils.js";
import { createSliderStructure } from "../../components/slider/index.js";
import { changeVolumeIcon } from "./changes.js";
import { computePlaybackControl } from "./helpers.js";
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

        button.haRipple = createElement('ha-ripple');
        button.appendChild(button.haRipple);
        
        return button;
    }
    
    elements.playPauseButton = createMediaButton("mdi:play", 'bubble-play-pause-button');
    elements.previousButton = createMediaButton("mdi:skip-previous", 'bubble-previous-button');
    elements.nextButton = createMediaButton("mdi:skip-next", 'bubble-next-button');
    elements.volumeButton = createMediaButton("mdi:volume-high", 'bubble-volume-button');
    elements.powerButton = createMediaButton("mdi:power", 'bubble-power-button');
    elements.muteButton = createMediaButton("mdi:volume-off", 'bubble-mute-button is-hidden');
    elements.volumeSliderMuteButton = createMediaButton("mdi:volume-high", 'bubble-volume-slider-mute-button');
    elements.volumeSliderCloseButton = createMediaButton("mdi:close", 'bubble-volume-slider-close-button');
    
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

    // Create wrapper for volume slider with mute and close buttons
    elements.volumeSliderWrapper = createElement('div', 'bubble-volume-slider-wrapper is-hidden');
    
    elements.volumeSliderContainer = createElement('div', 'bubble-volume-slider');
    createSliderStructure(context, {
        targetElement: elements.volumeSliderContainer,
        sliderLiveUpdate: false,
        withValueDisplay: true,
        holdToSlide: false
    });

    elements.volumeSliderWrapper.appendChild(elements.volumeSliderMuteButton);
    elements.volumeSliderWrapper.appendChild(elements.volumeSliderContainer);
    elements.volumeSliderWrapper.appendChild(elements.volumeSliderCloseButton);
    elements.cardWrapper.appendChild(elements.volumeSliderWrapper);

    // Prevent clicks inside the slider from bubbling up (so outside handler doesn't close it)
    if (!elements._volumeStopPropAdded) {
        const stop = (ev) => ev.stopPropagation();
        ['pointerdown', 'pointermove', 'touchstart', 'touchmove', 'mousedown', 'mousemove', 'click'].forEach(evt => {
            elements.volumeSliderWrapper.addEventListener(evt, stop, { passive: false });
        });
        elements._volumeStopPropAdded = true;
    }

    // Helper to close the volume slider from anywhere
    function closeVolumeSlider() {
        if (elements.volumeSliderWrapper.classList.contains('is-hidden')) return;
        const isBottomFixed = elements.buttonsContainer?.classList.contains('bottom-fixed');
        
        elements.volumeSliderWrapper.classList.add('is-hidden');
        
        if (isBottomFixed) {
            // In bottom mode, only show buttons container
            elements.buttonsContainer.classList.remove('is-hidden');
        } else {
            // In normal mode, restore icon/image and mute button
            elements.muteButton.classList.add('is-hidden');
            changeVolumeIcon(context);
        }
    }

    elements.volumeButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const isBottomFixed = elements.buttonsContainer?.classList.contains('bottom-fixed');
        
        elements.volumeSliderWrapper.classList.toggle('is-hidden');
        
        if (isBottomFixed) {
            // In bottom mode, only hide buttons container
            elements.buttonsContainer.classList.toggle('is-hidden');
        } else {
            // In normal mode, toggle mute button and update opacity of other elements
            elements.muteButton.classList.toggle('is-hidden');
            changeVolumeIcon(context);
        }
    });
    addFeedback(elements.volumeButton, elements.volumeButton.feedback);

    // Close volume slider when clicking outside
    if (!elements._volumeOutsideListenerAdded) {
        const outsideHandler = (ev) => {
            if (elements.volumeSliderWrapper.classList.contains('is-hidden')) return;
            const target = ev.target;
            if (elements.volumeSliderWrapper.contains(target)) return;
            if (elements.volumeButton && elements.volumeButton.contains(target)) return;
            closeVolumeSlider();
        };
        document.addEventListener('click', outsideHandler, { passive: true });
        elements._volumeOutsideListenerAdded = true;
        elements._volumeOutsideHandler = outsideHandler;
    }

    elements.powerButton.addEventListener('click', () => {
        const state = getState(context);
        const isOn = state !== "off" && state !== "unknown";
        context._hass.callService('media_player', isOn ? 'turn_off' : 'turn_on', {
            entity_id: context.config.entity
        });
    });
    addFeedback(elements.powerButton, elements.powerButton.feedback);

    // Setup mute button event handlers (original position)
    const setupMuteButtonEvents = (button) => {
        button.addEventListener('pointerdown', (event) => {
            event.stopPropagation();
            const isVolumeMuted = getAttribute(context, "is_volume_muted") === true;
            context._hass.callService('media_player', 'volume_mute', {
                entity_id: context.config.entity,
                is_volume_muted: !isVolumeMuted
            });
            button.clicked = true;
        });

        // Avoid propagation on all touch events
        ['click', 'touchstart', 'touchend', 'pointerup', 'pointercancel'].forEach(eventType => {
            button.addEventListener(eventType, (event) => {
                event.stopPropagation();
            });
        });
        addFeedback(button, button.feedback);
    };
    
    setupMuteButtonEvents(elements.muteButton);
    setupMuteButtonEvents(elements.volumeSliderMuteButton);

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
        const { service } = computePlaybackControl(context);
        context._hass.callService('media_player', service, {
            entity_id: context.config.entity
        });
        elements.playPauseButton.clicked = true;
    });
    addFeedback(elements.playPauseButton, elements.playPauseButton.feedback);

    // Setup close button event handler
    elements.volumeSliderCloseButton.addEventListener('click', (event) => {
        event.stopPropagation();
        closeVolumeSlider();
    });
    addFeedback(elements.volumeSliderCloseButton, elements.volumeSliderCloseButton.feedback);

    elements.mainContainer.addEventListener('click', () => forwardHaptic("selection"));

    context.cardType = cardType;
}
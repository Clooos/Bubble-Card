import { addActions, addFeedback } from "../../tools/tap-actions.ts";
import { createElement, toggleEntity, getAttribute, isStateOn, forwardHaptic } from "../../tools/utils.ts";
import { onSliderChange } from "./helpers.ts";
import { changeVolumeIcon } from "./changes.ts";
import styles from "./styles.ts";

export function createStructure(context) {
    context.dragging = false;

    context.elements = {};
    context.elements.mediaPlayerContainer = createElement('div', 'bubble-media-player-container');
    context.elements.mediaPlayerCard = createElement('div', 'bubble-media-player');
    context.elements.mediaInfoContainer = createElement('div', 'bubble-media-info-container');
    context.elements.nameContainer = createElement('div', 'bubble-name-container');
    context.elements.buttonContainer = createElement('div', 'bubble-button-container');
    context.elements.iconContainer = createElement('div', 'bubble-icon-container');
    context.elements.playPauseButton = createElement('ha-icon', 'bubble-play-pause-button');
    context.elements.previousButton = createElement('ha-icon', 'bubble-previous-button');
    context.elements.previousButton.setAttribute("icon", "mdi:skip-previous");
    context.elements.nextButton = createElement('ha-icon', 'bubble-next-button');
    context.elements.nextButton.setAttribute("icon", "mdi:skip-next");
    context.elements.volumeButton = createElement('ha-icon', 'bubble-volume-button');
    context.elements.volumeButton.setAttribute("icon", "mdi:volume-high");
    context.elements.powerButton = createElement('ha-icon', 'bubble-power-button');
    context.elements.powerButton.setAttribute("icon", "mdi:power-standby");
    context.elements.muteButton = createElement('ha-icon', 'bubble-mute-button is-hidden');
    context.elements.muteButton.setAttribute("icon", "mdi:volume-off");
    context.elements.title = createElement('div', 'bubble-title');
    context.elements.artist = createElement('div', 'bubble-artist');
    context.elements.name = createElement('div', 'bubble-name');
    context.elements.state = createElement('div', 'bubble-state');
    context.elements.icon = createElement('ha-icon', 'bubble-icon');
    context.elements.image = createElement('div', 'bubble-entity-picture');
    context.elements.style = createElement('style');
    context.elements.customStyle = createElement('style');

    context.elements.style.innerText = styles;

    context.elements.iconContainer.appendChild(context.elements.icon);
    context.elements.iconContainer.appendChild(context.elements.image);
    context.elements.iconContainer.appendChild(context.elements.muteButton);

    context.elements.nameContainer.appendChild(context.elements.name);
    context.elements.nameContainer.appendChild(context.elements.state);

    context.elements.mediaInfoContainer.appendChild(context.elements.title);
    context.elements.mediaInfoContainer.appendChild(context.elements.artist);

    context.elements.buttonContainer.appendChild(context.elements.powerButton);
    context.elements.buttonContainer.appendChild(context.elements.previousButton);
    context.elements.buttonContainer.appendChild(context.elements.nextButton);
    context.elements.buttonContainer.appendChild(context.elements.volumeButton);
    context.elements.buttonContainer.appendChild(context.elements.playPauseButton);

    context.elements.mediaPlayerCard.appendChild(context.elements.iconContainer);
    context.elements.mediaPlayerCard.appendChild(context.elements.mediaInfoContainer);
    context.elements.mediaPlayerCard.appendChild(context.elements.nameContainer);
    context.elements.mediaPlayerCard.appendChild(context.elements.buttonContainer);

    context.content.innerHTML = '';

    context.content.appendChild(context.elements.mediaPlayerContainer);
    context.content.appendChild(context.elements.style);
    context.content.appendChild(context.elements.customStyle);

    context.elements.mediaPlayerContainer.appendChild(context.elements.mediaPlayerCard);

    addActions(context.elements.icon, context.config, context.config.entity);
    addActions(context.elements.image, context.config, context.config.entity);

    // Volume slider

    context.elements.volumeSliderContainer = createElement('div', 'bubble-volume-slider is-hidden');
    createSlider(context, context.elements.volumeSliderContainer);
    context.elements.mediaPlayerCard.appendChild(context.elements.volumeSliderContainer);

    context.elements.volumeButton.addEventListener('click', () => {
        context.elements.volumeSliderContainer.classList.toggle('is-hidden');
        context.elements.muteButton.classList.toggle('is-hidden');
        context.elements.icon.classList.toggle('is-hidden');
        context.elements.image.classList.toggle('is-hidden');
        changeVolumeIcon(context);
    });

    // Power button event

    context.elements.powerButton.addEventListener('click', () => {
        const isOn = isStateOn(context);

        context._hass.callService('media_player', isOn ? 'turn_off' : 'turn_on', {
            entity_id: context.config.entity
        });
    });

    // Mute button event

    context.elements.muteButton.addEventListener('click', () => {
        const isVolumeMuted = getAttribute(context, "is_volume_muted") === true;

        context._hass.callService('media_player', 'volume_mute', {
            entity_id: context.config.entity,
            is_volume_muted: isVolumeMuted ? false : true
        });

        context.elements.muteButton.clicked = true;
    });

    // Previous button event

    context.elements.previousButton.addEventListener('click', () => {
        context._hass.callService('media_player', 'media_previous_track', {
            entity_id: context.config.entity
        });
    });

    // Next button event

    context.elements.nextButton.addEventListener('click', () => {
        context._hass.callService('media_player', 'media_next_track', {
            entity_id: context.config.entity
        });
    });

    // Play button event

    context.elements.playPauseButton.addEventListener('click', () => {
        context._hass.callService('media_player', 'media_play_pause', {
            entity_id: context.config.entity
        });

        context.elements.playPauseButton.clicked = true;
    });

    context.elements.mediaPlayerContainer.addEventListener('click', () => forwardHaptic("selection"));

    context.cardType = `media-player`;
}

function createSlider(context, sliderContainer) {
    let initialX = 0;
    let volumeLevel = Math.round(getAttribute(context, 'volume_level') * 100) + '%';

    context.elements.rangeFill = createElement('div', 'bubble-range-fill range-fill');
    context.elements.rangeSlider = createElement('div', 'bubble-range-slider range-slider');
    context.elements.rangeValue = createElement('div', 'bubble-range-value');
    context.elements.rangeSlider.appendChild(context.elements.rangeValue);
    context.elements.rangeSlider.appendChild(context.elements.rangeFill);
    sliderContainer.appendChild(context.elements.rangeSlider);

    sliderContainer.addEventListener('pointercancel', onPointerCancel);
    sliderContainer.addEventListener('pointerdown', (e) => {
        sliderContainer.setPointerCapture(e.pointerId);

        if (context.card.classList.contains('is-unavailable')) {
            return;
        }

        context.dragging = true;
        initialX = e.pageX || (e.touches ? e.touches[0].pageX : 0);

        sliderContainer.classList.add('is-dragging');
        sliderContainer.addEventListener('pointermove', onPointerMove);
        sliderContainer.addEventListener('pointerup', onPointerUp);
    });

    function onPointerCancel() {
        context.dragging = false;

        sliderContainer.classList.remove('is-dragging');
        sliderContainer.removeEventListener('pointermove', onPointerMove);
        sliderContainer.removeEventListener('pointerup', onPointerUp);
    }

    function onPointerMove(e) {
        e.stopPropagation();

        const moveX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
        if (Math.abs(initialX-moveX) > 10) {
          onSliderChange(context, moveX, true);
        }

        const rect = context.elements.rangeSlider.getBoundingClientRect();
        const percentage = 100 * (moveX - rect.left) / rect.width;
        const rangedPercentage = Math.min(100, Math.max(0, percentage));
        context.elements.rangeValue.innerText = Math.round(rangedPercentage) + '%';
    }

    function onPointerUp(e) {
        e.stopPropagation();

        context.dragging = false;

        const moveX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
        onSliderChange(context, moveX);

        sliderContainer.classList.remove('is-dragging');
        sliderContainer.removeEventListener('pointermove', onPointerMove);
        sliderContainer.removeEventListener('pointerup', onPointerUp);

        const rect = context.elements.rangeSlider.getBoundingClientRect();
        const percentage = 100 * (moveX - rect.left) / rect.width;
        const rangedPercentage = Math.min(100, Math.max(0, percentage));
        context.elements.rangeValue.innerText = Math.round(rangedPercentage) + '%';
    }

    context.elements.rangeValue.innerText = volumeLevel;
}

export default `
    * {
        -webkit-tap-highlight-color: transparent !important;
    }

    ha-card {
        margin-top: 0;
        background: none;
        opacity: 1;
    }
    .is-unavailable {
        opacity: 0.5;
    }

    .bubble-media-player-container {
        position: relative;
        width: 100%;
        height: 50px;
        background-color: var(--background-color-2,var(--secondary-background-color));
        border-radius: 25px;
        overflow: visible;
        touch-action: pan-y;
    }

    .bubble-media-player {
        display: flex;
        position: absolute;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        transition: background-color 1.5s;
        background-color: rgba(0,0,0,0);
    }

    .bubble-button-container {
        display: inline-grid;
        grid-auto-flow: column;
        gap: 10px;
        align-self: center;
        margin-right: 8px;
    }

    .bubble-play-pause-button,
    .bubble-previous-button,
    .bubble-next-button,
    .bubble-volume-button,
    .bubble-power-button {
        background: none;
        border: none;
        cursor: pointer;
        border-radius: 100%;
        padding: 6px;
        height: 24px;
        width: 24px;
        transition: background 0.3s ease;
        align-self: center;
    }

    .bubble-play-pause-button {
        background-color: var(--accent-color);
    }

    .bubble-volume-slider {
        position: absolute;
        width: calc(100% - 150px);
        height: 38px;
        left: 50px;
        overflow: hidden;
        border-radius: 20px;
        z-index: 1;
        background-color: var(--card-background-color, var(--ha-card-background));
        opacity: 1;
        transition: opacity .2s, transform .2s;
        transform: translateX(0);
    }

    .bubble-range-value {
        display: flex;
        justify-content: flex-end;
        height: 38px;
        align-items: center;
        padding-right: 14px;
        font-size: 12px;
        opacity: 0.8;
    }

    .bubble-mute-button {
        opacity: 1;
        transition: opacity .2s, transform .2s;
        transform: translateX(0);
    }

    .is-hidden {
        opacity: 0 !important;
        pointer-events: none;
        transform: translateX(14px);
    }

    .bubble-range-fill {
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        left: -100%;
        transition: all .3s;
        background-color: var(--accent-color);
    }

    .is-dragging .bubble-range-fill {
        transition: none;
    }

    .is-light .bubble-range-fill {
        opacity: 0.5;
    }

    .is-unavailable .bubble-button-card {
        cursor: not-allowed;
    }

    .bubble-range-slider {
        cursor: ew-resize;
    }
    .is-unavailable .bubble-range-slider {
        cursor: not-allowed;
    }

    .bubble-icon-container {
        display: flex;
        flex-wrap: wrap;
        width: 38px;
        height: 38px;
        min-width: 38px;
        min-height: 38px;
        align-items: center;
        justify-content: center;
        margin: 6px;
        border-radius: 50%;
        background-color: var(--card-background-color, var(--ha-card-background));
        overflow: hidden;
        z-index: 1;
        position: relative;
        cursor: pointer;
        pointer-events: auto;
    }

    .bubble-icon {
        opacity: 0.6;
    }

    .is-on .bubble-icon {
      filter: brightness(1.1);
      opacity: 1;
    }

    .bubble-icon,
    .bubble-mute-button {
        display: flex;
        position: absolute;
        height: 38px;
        width: 38px;
        justify-content: center;
        align-items: center;
    }

    .bubble-entity-picture {
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 100%;
        position: absolute;
    }

    .bubble-media-info-container {
        display: flex;
        line-height: 14px;
        font-size: 12px;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        margin-left: 4px;
        pointer-events: none;
        position: relative;
        overflow: hidden;
    }

    .bubble-title,
    .bubble-name,
    .bubble-state,
    .bubble-artist {
        display: flex;
        margin: 2px 0;
        position: relative;
        white-space: nowrap;
    }

    .bubble-title {
        font-weight: 600;
    }

    .bubble-name-container {
        display: flex;
        line-height: 1em;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        font-weight: 600;
        margin-left: 4px;
        pointer-events: none;
        position: relative;
        overflow: hidden;
    }

    .bubble-name {
        font-size: 13px;
        margin: 2px 0;
    }

    .bubble-state {
        font-size: 12px;
        opacity: 0.7;
        margin: 2px 0;
        font-weight: normal;
    }

    .bubble-sub-button-container {
        right: 0 !important;
    }

    @media screen and (max-width: 250px) {
        .bubble-previous-button {
            display: none;
        }
    }

    @media screen and (max-width: 206px) {
        .bubble-next-button {
            display: none;
        }
    }

    @media screen and (max-width: 160px) {
        .bubble-volume-button {
            display: none;
        }
    }

    @keyframes tap-feedback {
        0% {transform: translateX(-100%); opacity: 0;}
        64% {transform: translateX(0); opacity: 0.1;}
        100% {transform: translateX(100%); opacity: 0;}
    }

    .large .bubble-media-player-container {
      height: 56px;
      border-radius: 32px;
    }

    .large .bubble-icon-container {
      --mdc-icon-size: 24px;
      min-width: 42px !important;
      min-height: 42px !important;
      margin-left: 8px;
    }
    
    .large .bubble-play-pause-button {
      display: flex;
      height: 42px;
      width: 42px;
      padding: 0;
      align-items: center;
      justify-content: center;
    }

    .large .bubble-volume-slider {
      height: 42px;
      border-radius: 24px;
      left: 60px;
      width: calc(100% - 174px);
    }

    .large .bubble-range-value {
      place-items: center;
      height: 42px;
    }

    .large .bubble-button-container {
      align-items: center;
      gap: 14px;
    }

    .rows-2 .bubble-sub-button-container {
      flex-direction: column;
      gap: 4px !important;
      display: grid !important;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, minmax(auto, max-content));
      grid-auto-flow: column;
      width: auto;
    }

    .rows-2 .bubble-sub-button {
      height: 20px !important;
    }
`;
export default `
    * {
        -webkit-tap-highlight-color: transparent !important;
    }

    ha-card {
        margin-top: 0;
        background: none;
        opacity: 1;
        overflow: visible !important;
    }
    .is-unavailable {
        opacity: 0.5;
    }

    .bubble-media-player-container {
        position: relative;
        width: 100%;
        height: 50px;
        background-color: var(--bubble-media-player-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        touch-action: pan-y;
        border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));
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
        border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, 32px));
        padding: 6px;
        height: 24px;
        width: 24px;
        transition: background 0.3s ease;
        align-self: center;
    }

    .bubble-play-pause-button {
        background-color: var(--bubble-accent-color, var(--accent-color));
    }

    .bubble-volume-slider {
        position: absolute;
        width: calc(100% - 150px);
        height: 38px;
        left: 50px;
        overflow: hidden;
        border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));
        z-index: 1;
        background-color: var(--bubble-media-player-slider-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));
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
        border-radius: var(--bubble-media-player-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));
        background-color: var(--bubble-media-player-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));;
        overflow: hidden;
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

    .bubble-background-container {
        display: flex;
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));
        overflow: hidden;
    }

    .bubble-cover-background {
        display: flex;
        position: absolute;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: 50%;
        filter: blur(50px);
        opacity: 0.5;
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

    .large .bubble-media-player-container{
      display: flex;
      height: calc( var(--row-height) * var(--row-size) + var(--row-gap) * ( var(--row-size) - 1 ));
    }

    .large .bubble-media-player{
      --line-height: 18px;
      --gap-to-edge: 7px;
      display: grid;
      gap: 4px;
      grid-template-areas:
      'i n c a1 a2 a3 a4 a5' 'b b b b b b b b' !important;
      grid-template-columns: var(--row-height,56px) 1fr auto auto auto auto auto auto;
      grid-template-rows: var(--row-height,56px) 1fr;
      border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));
      justify-self: start;
      justify-items: start;
      align-self: center;
      align-items: center;
    }
    .large.bubble-empty-sub-buttons .bubble-media-player{
        grid-template-rows: 1fr 0;
        align-content: center;
    }

    .large .bubble-media-player-container .bubble-icon-container {
      --mdc-icon-size: 24px;
      min-width: 42px !important;
      height: 42px !important;
      grid-area: i;
      margin-left: 6px;
    }
    
    .large .bubble-media-player-container .bubble-button-container{
        grid-area: a1;
        display: contents;
    }
    
   .large .bubble-media-player-container .bubble-power-button{
      grid-area: a1;
   }

   .large .bubble-media-player-container .bubble-previous-button{
      grid-area: a2;
   }

   .large .bubble-media-player-container .bubble-next-button{
      grid-area: a3;
   }

   .large .bubble-media-player-container .bubble-volume-button{
      grid-area: a4;
   }

    .large .bubble-media-player-container  .bubble-play-pause-button {
      display: flex;
      height: 42px;
      width: 42px;
      padding: 0;
      grid-area: a5;
      align-items: center;
      justify-content: center;
      margin: var(--gap-to-edge,7px) var(--gap-to-edge,7px) var(--gap-to-edge,7px) 0;
    }

    .large .bubble-media-player-container .bubble-volume-slider {
      height: 80%;
      border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 32px));
      position: relative;
      left: 0px;
      width: calc(100%);
      grid-column-start: 2;
      grid-column-end: 7;
      grid-row-start: 1;
      grid-row-end: 1;

    }

    .large .bubble-media-player-container .bubble-range-value {
      place-items: center;
      height: 42px;
    }
      
    .large .bubble-media-player-container .bubble-name-container {
      justify-content: flex-start;
      grid-area: n;
      overflow: hidden;
      margin: 0px;
      max-width: calc(100% - 2 * var(--gap-to-edge,7px));

    }

    .large .bubble-media-player-container .bubble-sub-button-container {
      grid-area: c;
      max-width: 100%;
      height: 36px;
      flex-wrap: wrap-reverse;
      row-gap: 4px;
      align-self: center;
      align-content: center;
    }

    .large.bubble-multi-row .bubble-media-player-container .bubble-sub-button-container {
        max-height: 100%;
        height: auto;
        grid-area: b;
        flex-wrap: wrap;
        justify-self: center;
        align-self: center;
        justify-content: center;
        align-content: start;
        justify-items: center;
        padding-bottom: 7px;
    }
    
    .rows-2 .bubble-media-player-container .bubble-sub-button-container {
      flex-direction: column;
      gap: 4px !important;
      display: grid !important;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, minmax(auto, max-content));
      grid-auto-flow: column;
      align-self: center;
      width: auto;
    }

    .rows-2 .bubble-media-player-container .bubble-sub-button-container .bubble-sub-button {
      height: 20px !important;
    }
`;
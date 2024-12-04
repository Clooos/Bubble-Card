export default `
    * {
        -webkit-tap-highlight-color: transparent !important;
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
    }
    *::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
    ha-card {
        margin-top: 0;
        background: none;
        opacity: 1;
    }
    .is-unavailable {
        opacity: 0.5;
    }

    .bubble-button-card-container {
        position: relative;
        width: 100%;
        height: 50px;
        background-color: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));
        overflow: scroll;
        touch-action: pan-y;
    }

    .bubble-button-card,
    .bubble-range-slider,
    .bubble-button-background {
        display: flex;
        position: absolute;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        transition: background-color 1.5s;
    }
    .bubble-button-background {
        background-color: var(--bubble-button-background-color);
        opacity: .5;
        border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));
    }
    .bubble-range-fill {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        left: -100%;
        transition: all .3s;
        z-index: 0;
    }
    .is-dragging .bubble-range-fill {
        transition: none;
    }
    .is-light .bubble-range-fill {
        opacity: 0.5;
    }
    .is-unavailable .bubble-button-card,
    .is-unavailable .bubble-range-slider {
        cursor: not-allowed;
    }
    .bubble-range-slider {
        cursor: ew-resize;
        border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));
        overflow: hidden;
        mask-image: radial-gradient(white, black);
        -webkit-mask-image: -webkit-radial-gradient(white, black);
    }
    .bubble-icon-container {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        min-width: 38px;
        min-height: 38px;
        margin: 6px;
        border-radius: var(--bubble-button-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));
        background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));
        #overflow: hidden; #have to disable for subbutton functions. 
        position: relative;
        cursor: pointer;
    }

    .bubble-icon {
        display: flex;
        opacity: 0.6;
    }

    .is-on .bubble-icon {
      filter: brightness(1.1);
      opacity: 1;
    }

    .bubble-entity-picture {
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 100%;
        position: absolute;
    }

    .bubble-name,
    .bubble-state {
        display: flex;
        position: relative;
        white-space: nowrap;
    }

    .bubble-name-container {
        display: flex;
        line-height: 18px;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        margin: 0 16px 0 4px;
        pointer-events: none;
        position: relative;
        overflow: hidden;
    }

    .bubble-name {
        font-size: 13px;
        font-weight: 600;
    }

    .bubble-state {
        font-size: 12px;
        font-weight: normal;
        opacity: 0.7;
    }

    .bubble-feedback-element {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0,0,0);
        pointer-events: none;
    }

    @keyframes tap-feedback {
        0% {transform: translateX(-100%); opacity: 0;}
        64% {transform: translateX(0); opacity: 0.1;}
        100% {transform: translateX(100%); opacity: 0;}
    }

    .large .bubble-button-card{
        --line-height: 18px;
        --name-container-width: calc(100% - var(--row-height,56px) * 1 - var(--row-height,56px) * var(--number-subButtons,1));
        display: grid;
        grid-template-areas:
        'i n c' 'b b b' !important;
        grid-template-columns: var(--row-height,56px) 1fr auto auto;
        grid-template-rows: var(--row-height,56px) 1fr;
        justify-self: start;
        justify-items: start;
        align-self: center;
        align-items: center;
    }



    .large .bubble-button-card-container {
      height: calc( var(--row-height) * var(--row-size) + var(--row-gap) * ( var(--row-size) - 1 ));
      border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 32px));
    }

    .large .bubble-button-card .bubble-icon-container {
      --mdc-icon-size: 24px;
      min-width: 42px !important;
      max-height: 42px !important;
      grid-area: i;
      margin-left: 6px;
    }
    
    .large .bubble-button-card .bubble-sub-button .bubble-dropdown-container{
        display: flex !important;
    }
    
    .large .bubble-button-card .bubble-name-container {
      justify-content: flex-start;
      grid-area: n;
      overflow: hidden;
      max-width: 100% !important;
      #padding-top: calc(var(--row-height,56) / 2 - var(--line-height,18));
    }

    .large .bubble-button-card .bubble-sub-button-container {
        grid-area: c;
        max-width: 100%;
        height: 36px;
        flex-wrap: wrap-reverse;
        row-gap: 4px;
        align-content: end;
        justify-self: end;
    }

    .large .bubble-button-card .bubble-sub-button-container.expanded {
        max-height: calc(100%);
        height: auto !important;
        grid-area: b;
        overflow: hidden;
        flex-wrap: wrap;
        align-content: start;
        align-self: end;
        justify-items: center;
        justify-content: end;
        justify-self: center;
        padding-bottom: 7px;
    }

    .rows-2 .bubble-button-card .bubble-sub-button-container {
      flex-direction: column;
      gap: 4px !important;
      display: grid !important;
      grid-template-columns: repeat(2, min-content);
      grid-template-rows: repeat(2, 1fr);
      grid-auto-flow: column;
      width: auto;
      padding-right: 14px;
    }

    .rows-2 .bubble-button-card .bubble-sub-button {
      height: 20px !important;
    }
`;
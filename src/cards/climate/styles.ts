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

    .bubble-climate-container {
        position: relative;
        width: 100%;
        height: 50px;
        background-color: var(--bubble-climate-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));
        overflow: visible;
        touch-action: pan-y;
    }

    .bubble-climate {
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
        align-items: center;
        margin-right: 8px;
    }

    .bubble-temperature-container, .bubble-low-temp-container, .bubble-high-temp-container {
        display: inline-flex;
        position: relative;
        font-size: 12px;
        white-space: nowrap;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 100%;
        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 32px));
        background-color: var(--bubble-climate-button-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))));
    }

    .bubble-low-temp-container {
        color: var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)));
    }

    .bubble-high-temp-container {
        color: var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)));
    }

    .bubble-target-temperature-container {
        display: flex;
        gap: 10px;
    }

    .bubble-climate-minus-button,
    .bubble-climate-plus-button {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 36px;
        height: 36px;
        vertical-align: middle;
        font-size: 18px;
        color: var(--primary-text-color);
        cursor: pointer;
    }

    .bubble-climate-minus-button-icon,
    .bubble-climate-plus-button-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        --mdc-icon-size: 16px;
    }

    .bubble-feedback-container {
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 50%));
        overflow: hidden;
        pointer-events: none;
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

    .bubble-color-background {
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: inherit;
        opacity: 0.7;
        transition: background-color 2s ease;
    }

    .is-unavailable .bubble-climate {
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
        border-radius: var(--bubble-climate-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));
        background-color: var(--bubble-climate-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));
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

    .bubble-icon {
        display: flex;
        position: absolute;
        height: 38px;
        width: 38px;
        justify-content: center;
        align-items: center;
        transition: all 2s;
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
        margin: 2px 0;
        position: relative;
        white-space: nowrap;
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

    .hidden {
        display: none !important;
    }

    @keyframes tap-feedback {
        0% {transform: translateX(-100%); opacity: 0;}
        64% {transform: translateX(0); opacity: 0.1;}
        100% {transform: translateX(100%); opacity: 0;}
    }

    .large .bubble-climate{
        --line-height: 18px;
        --gap-to-edge: 7px;
        display: grid;
        gap: 4px;
        grid-template-areas:
        'i n c a' 'b b b b' !important;
        grid-template-columns: var(--row-height,56px) 1fr auto auto;
        grid-template-rows: var(--row-height,56px) 1fr;
        justify-self: start;
        justify-items: start;
        align-self: center;
        align-items: center;
    }
    .large.bubble-empty-sub-buttons .bubble-media-player{
        grid-template-rows: 1fr 0;
        align-content: center;
    }

    .large .bubble-climate-container {
      height: calc( var(--row-height,56px) * var(--row-size,1) + var(--row-gap,8px) * ( var(--row-size,1) - 1 ));
    }

    .large .bubble-climate .bubble-icon-container {
      --mdc-icon-size: 24px;
      width: calc(var(--row-height,56px) - 14px);
      height: calc(var(--row-height,56px) - 14px);
      grid-area: i;
      margin: 7px;
    }
    
    .large .bubble-climate .bubble-button-container{
        grid-area: a;
        display: contents !important;
    }


    .large.AlternativeLayout.bubble-multi-row .bubble-climate .bubble-button-container {
        grid-area: b;
        height: calc(100% - 7px);
        width: 100%;
        display: flex !important;
        row-gap: 4px;
        flex-wrap: wrap;
        align-self: center;
        justify-self: center;
        justify-content: center;
        align-items: center;
        justify-items: center;
        padding-bottom: 7px;
        overflow: hidden;
    }
    
    .large .bubble-climate .bubble-temperature-container{
        grid-area: a;
        height: calc(var(--row-height,56px) - 20px);
        width: auto;
        justify-self: center;

    }
    
    .large .bubble-climate .bubble-name-container {
        justify-content: flex-start;
        grid-area: n;
        overflow: hidden;
        margin: 0px;
        max-width: 100%;
    }

    .large .bubble-climate .bubble-sub-button-container {
        grid-area: c;
        max-width: 100%;
        height: 36px;
        flex-wrap: wrap-reverse;
        row-gap: 4px;
        align-self: center;
        align-content: center;
    }

    .large .bubble-climate .bubble-sub-button-container.expanded {
        max-height: 100%;
        height: auto;
        max-width: calc(100% - 2 * var(--gap-to-edge,7px));
        grid-area: b;
        flex-wrap: wrap;
        justify-self: center;
        align-self: center;
        justify-content: center;
        align-content: start;
        justify-items: center;
        padding-bottom: 7px;
    }

    .large.AlternativeLayout.bubble-multi-row .bubble-climate .bubble-sub-button-container{
        padding-bottom: 0px;   
        display: contents;
    }

    .rows-2 .bubble-climate .bubble-sub-button-container {
      flex-direction: column;
      gap: 4px !important;
      display: grid !important;
      grid-template-columns: repeat(2, min-content);
      grid-template-rows: repeat(2, 1fr);
      grid-auto-flow: column;
      align-self: center;
      width: auto;
    }

    .rows-2 .bubble-climate .bubble-sub-button {
      height: 20px !important;
    }
`;

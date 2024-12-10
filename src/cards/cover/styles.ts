export default `
    * {
        -webkit-tap-highlight-color: transparent !important;
    }
    ha-card {
        margin-top: 0 !important;
        background: none !important;
    }

    .bubble-cover-card-container {
        display: grid;
        gap: 10px;
        overflow: hidden;
    }

    .bubble-header {
        display: flex;
        align-items: center;
    }

    .bubble-icon-container {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        min-width: 38px;
        min-height: 38px;
        border-radius: var(--bubble-cover-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));
        background-color: var(--bubble-cover-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));
        border: 6px solid var(--bubble-cover-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        cursor: pointer;
    }

    .bubble-name-container {
        display: flex;
        line-height: 1em;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        font-weight: 600;
        margin-left: 4px;
        margin-right: 16px;
        pointer-events: none;
        position: relative;
        overflow: hidden;
    }

    .bubble-name {
        font-size: 13px;
        margin: 2px 0;
        white-space: nowrap;
        display: flex;
        position: relative;
        overflow: hidden;
    }

    .bubble-state {
        font-size: 12px;
        opacity: 0.7;
        margin: 2px 0;
        font-weight: normal;
        white-space: nowrap;
        display: flex;
        position: relative;
        overflow: hidden;
    }

    .bubble-buttons {
        display: grid;
        align-self: center;
        grid-auto-flow: column;
        grid-gap: 18px;
    }

    .bubble-icon {
        display: flex; 
        height: 24px; 
        width: 24px; 
        color: var(--primary-text-color);
    }

    .bubble-button.disabled {
        opacity: 0.3 !important;
        pointer-events: none !important;
        cursor: none !important;
    }

    .bubble-button {
        display: flex;
        background: var(--bubble-cover-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        height: 42px;
        border-radius: var(--bubble-cover-border-radius, var(--bubble-border-radius, 32px));
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
    }      
    
    .large .bubble-cover-card-container {
      height: calc( var(--row-height,56px) * var(--row-size,1) + var(--row-gap,8px) * ( var(--row-size,1) - 1 ));
      background: var(--bubble-cover-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
      border-radius: var(--bubble-cover-border-radius, var(--bubble-border-radius, 32px));
      
      
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
    .large.bubble-empty-sub-buttons .bubble-cover-card-container{
        grid-template-rows: 1fr 0;
        align-content: center;
    }

    .large .bubble-cover-card-container .bubble-buttons .bubble-icon {
      color: var(--primary-text-color) !important;
      opacity: 1;
    }
    
    .large .bubble-cover-card-container .bubble-header {
      display: contents;
      height: var(--row-height,56);
      width: 100%;
    }

    .large .bubble-cover-card-container .bubble-header .bubble-icon-container {
      --mdc-icon-size: 24px;
      min-width: 42px !important;
      min-height: 42px !important;
      grid-area: i;
      margin-left: 6px;
    }

    .large .bubble-cover-card-container .bubble-buttons {
      display: flex;
      position: relative;
      align-self: center;
      padding-right: var(--line-height,18px);
      grid-gap: var(--line-height,18px);
      grid-area: a;
    }

    .large .bubble-cover-card-container .bubble-name-container {
      justify-content: flex-start;
      grid-area: n;
      overflow: hidden;
      margin: 0px;
      max-width: calc(100% - 2 * var(--gap-to-edge,7px));
    }
    

    .large .bubble-cover-card-container .bubble-sub-button-container {
      grid-area: c;
        max-width: 100%;
        height: 36px;
        flex-wrap: wrap-reverse;
        row-gap: 4px;
        align-self: center;
        align-content: center;
    }
    
    .large.bubble-multi-row .bubble-cover-card-container .bubble-sub-button-container {
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
    
    .rows-2 .bubble-cover-card-container .bubble-sub-button-container {
      flex-direction: column;
      gap: 4px !important;
      display: grid !important;
      grid-template-columns: repeat(2, min-content);
      grid-template-rows: repeat(2, 1fr);
      grid-auto-flow: column;
      align-self: center;
      width: auto;
      padding-right: 7px;
    }

    .rows-2 .bubble-cover-card-container .bubble-sub-button {
      height: 20px !important;
    }
`
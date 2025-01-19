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
        box-shadow: var(--bubble-cover-box-shadow, var(--bubble-button-box-shadow, var(--bubble-box-shadow, none)));
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
    }

    .large .bubble-cover-card-container {
      height: 56px;
      display: flex;
      background: var(--bubble-cover-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
      border-radius: var(--bubble-cover-border-radius, var(--bubble-border-radius, 32px));
      box-shadow: var(--bubble-cover-box-shadow, var(--bubble-button-box-shadow, var(--bubble-box-shadow, none)));
    }

    .large .bubble-buttons .bubble-icon {
      color: var(--primary-text-color) !important;
      opacity: 1;
    }

    .large .bubble-header-container {
        height: 56px;
    }

    .large .bubble-header {
        width: 100%;
    }

    .large .bubble-icon-container {
      --mdc-icon-size: 24px;
      min-width: 42px !important;
      min-height: 42px !important;
      align-content: center;
      border: none;
      margin: 8px 6px 8px 8px;
    }

    .large .bubble-icon {
      align-items: center;
    }

    .large .bubble-buttons {
      display: flex;
      position: relative;
      right: 18px;
      align-self: center;
      grid-gap: 18px;
    }

    .large .bubble-button,
    .large .bubble-sub-button {
      box-shadow: none;
    }

    .large .bubble-sub-button-container {
      margin-right: 14px;
    }

    .rows-2 .bubble-sub-button-container {
      flex-direction: column;
      gap: 4px !important;
      display: grid !important;
      grid-template-columns: repeat(1, min-content);
      grid-template-rows: repeat(2, 1fr);
      grid-auto-flow: column;
      width: auto;
    }

    .rows-2 .bubble-sub-button {
      height: 20px !important;
    }
`
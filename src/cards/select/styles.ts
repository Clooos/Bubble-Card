export default `
    * {
        -webkit-tap-highlight-color: transparent !important;
    }
    ha-card {
        margin-top: 0;
        background: none;
        opacity: 1;
    }
    mwc-list-item {
        border-radius: 24px;
        margin: 0 8px;
    }
    mwc-list-item[selected] {
        color: var(--primary-text-color) !important;
        background-color: var(--accent-color);
    }
    ha-select {
        --mdc-shape-medium: 30px;
        --mdc-shape-large: 30px;
        --mdc-shape-small: 64px;
        --mdc-menu-max-width: min-content;
        --mdc-menu-min-width: 150px;
        --mdc-select-max-width: min-content;
        --mdc-select-outlined-hover-border-color: transparent;
        --mdc-select-outlined-idle-border-color: transparent;
        --mdc-theme-primary: transparent;
    }
    .mdc-select {
        color: transparent !important;
        width: 150px !important;
        position: absolute !important;
        pointer-events: none;
        right: -4px;
        top: -5px;
    }
    .mdc-menu, mwc-list, .mdc-list-item {
        pointer-events: auto;
    }
    .mdc-select__dropdown-icon {
        display: none !important;
    }
    .mdc-select__selected-text {
        color: transparent !important;
    }
    .mdc-select__anchor {
        width: 100%;
        pointer-events: none;
    }
    .bubble-dropdown-container {
        display: flex;
        width: auto;
        height: 100%;
        align-items: center;
    }
    .bubble-dropdown-arrow {
        display: flex;
        position: absolute;
        background: var(--card-background-color, var(--ha-card-background));
        height: 36px;
        width: 36px;
        right: 6px;
        pointer-events: none;
        border-radius: 20px;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s;
        pointer-events: none;
    }
    .bubble-dropdown-select {
        width: 42px;
    }
    .is-unavailable {
        opacity: 0.5;
    }
    .bubble-select-card-container {
        position: relative;
        width: 100%;
        height: 50px;
        background-color: var(--background-color-2,var(--secondary-background-color));
        border-radius: 32px;
        touch-action: pan-y;
        box-sizing: border-box;
        border: solid 2px transparent;
        transition: all 0.15s;
        cursor: pointer;
    }
    .bubble-select-card,
    .bubble-select-background {
        display: flex;
        position: absolute;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        transition: background-color 1.5s;
    }
    .bubble-select-background {
        background-color: var(--bubble-select-background-color);
        opacity: .5;
        overflow: hidden !important;
        border-radius: 25px;
    }
    .is-unavailable .bubble-select-card {
        cursor: not-allowed;
    }
    .bubble-icon-container {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        min-width: 38px;
        min-height: 38px;
        margin: 6px;
        border-radius: 50%;
        background-color: var(--card-background-color, var(--ha-card-background));
        overflow: hidden;
        position: relative;
        cursor: pointer;
    }
    .bubble-icon-container::after {
        content: '';
        background-color: currentColor;
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        transition: all 1s;
        left: 0;
        right: 0;
        opacity: 0;
        pointer-events: none;
    }

    .bubble-icon {
        display: flex;
        opacity: 0.6;
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

    .large .bubble-select-card-container {
      height: 56px;
      border-radius: 32px;
    }

    .large .bubble-icon-container {
      --mdc-icon-size: 24px;
      min-width: 42px !important;
      min-height: 42px !important;
      margin-left: 6px;
    }

    .rows-2 .bubble-sub-button-container {
      flex-direction: column;
      gap: 4px !important;
      display: grid !important;
      grid-template-columns: repeat(2, min-content);
      grid-template-rows: repeat(2, 1fr);
      grid-auto-flow: column;
      width: auto;
    }

    .rows-2 .bubble-sub-button {
      height: 20px !important;
    }
`;
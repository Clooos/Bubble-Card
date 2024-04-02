export default `
    ha-card {
        margin-top: 0 !important;
        background: none !important;
    }

    .bubble-cover-card-container {
        display: grid;
        gap: 10px;
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
        border-radius: 50%;
        background-color: var(--card-background-color, var(--ha-card-background));
        border: 6px solid var(--background-color-2, var(--secondary-background-color));
        cursor: pointer;
    }

    .bubble-name-container {
        display: flex;
        line-height: 1em;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        font-weight: 600;
        margin-left: 10px;
        margin-right: 16px;
        pointer-events: none;
        position: relative;
    }

    .bubble-name {
        margin: 2px 0;
    }

    .bubble-state {
        font-size: 12px;
        opacity: 0.7;
        margin: 2px 0;
        font-weight: normal;
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

    .bubble-button {
        display: flex;
        background: var(--background-color-2, var(--secondary-background-color));
        height: 42px;
        border-radius: 32px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
    }
`
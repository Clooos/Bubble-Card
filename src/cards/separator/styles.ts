export default `
    .bubble-separator {
        display: flex;
        width: 100%;
        
        align-items: center;
        z-index: 1;
    }
    .bubble-icon {
        display: inline-flex;
        height: auto;
        width: auto;
        margin: 0 22px 0 8px;
    }
    .bubble-name {
        margin: 0 30px 0 0;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .bubble-name:empty {
        display: none;
    }
    .bubble-line {
        border-radius: 6px;
        opacity: 0.5;
        flex-grow: 1;
        height: 6px;
        background-color: var(--background-color, var(--secondary-background-color));
        margin-right: 14px;
    }
    .bubble-sub-button-container {
        margin: 0 8px;
        right: 0 !important;
    }

    .large .bubble-separator {
        height: 56px;
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
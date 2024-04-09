export default `
    .bubble-separator {
        display: flex;
        width: 100%;
        padding: 4px 0;
        align-items: center;
    }
    .bubble-icon {
        display: inline-flex;
        height: 24px;
        width: 24px;
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
    }
`;
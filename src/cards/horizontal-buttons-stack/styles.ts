export default `
    @keyframes from-bottom {
        0% { transform: translate(-50%, 100px); }
        26% { transform: translate(-50%, -8px); }
        46% { transform: translate(-50%, 1px); }
        62% { transform: translate(-50%, -2px); }
        70% { transform: translate(-50%, 0); }
        100% { transform: translate(-50%, 0); }
    }
    @keyframes pulse {
        0% { filter: brightness(0.7); }
        100% { filter: brightness(1.3); }
    }
    ha-card {
        border-radius: 0;
    }
    .horizontal-buttons-stack-card {
        bottom: 16px;
        height: 51px;
        margin-top: 0;
        position: fixed;
        width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);
        left: calc(var(--mdc-drawer-width, 0px) + 4px);
        z-index: 6; /* Higher value hide the more-info panel */
    }
    @media only screen and (max-width: 870px) {
        .horizontal-buttons-stack-card {
            width: calc(100% - 16px);
            left: 8px;
        }

        .horizontal-buttons-stack-card::before {
            left: -10px;
        }
    }
    .horizontal-buttons-stack-card::before {
        content: '';
        position: absolute;
        top: -32px;
        display: none;
        background: linear-gradient(0deg, var(--background-color, var(--primary-background-color)) 50%, rgba(79, 69, 87, 0));
        width: 200%;
        height: 100px;
        pointer-events: none;
    }
    .has-gradient.horizontal-buttons-stack-card::before {
        display: block;
    }

    .card-content {
        width: calc(100% + 36px);
        padding: 0 !important;
        max-width: calc(var(--desktop-width) - 8px);
        box-sizing: border-box;
        overflow: scroll;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        -ms-overflow-style: none;
        scrollbar-width: none;
        -webkit-mask-image: linear-gradient(
            90deg,
            #000000 0%,
            #000000 calc(0% + 28px),
            #000000 calc(100% - 28px),
            transparent 100%
        );
    }
    .is-scrollable.card-content {
        padding: 0 !important;
        width: 100%;
    }
    .is-scrolled.card-content {
        padding: 0 !important;
        width: 100%;
        -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000000 calc(0% + 28px),
            #000000 calc(100% - 28px),
            transparent 100%
        );
    }
    .is-maxed-scroll.card-content {
        -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000000 calc(0% + 28px),
            #000000 calc(100% - 28px),
            #000000 100%
        );
    }
    .card-content::-webkit-scrollbar {
        display: none;
    }

    .bubble-horizontal-buttons-stack-card-container {
        height: 51px;
        position: relative;
        margin: auto;
    }

    .bubble-button {
        align-items: center;
        border-radius: 25px;
        color: var(--primary-text-color);
        cursor: pointer;
        display: inline-flex;
        height: 50px;
        left: 0;
        padding: 0 16px;
        position: absolute;
        white-space: nowrap;
        z-index: 1;
        transition: transform 1s;
        box-sizing: border-box;
    }
    .bubble-button.highlight {
        animation: pulse 1.4s infinite alternate;
    }
    .bubble-background-color {
        border: 1px solid var(--primary-text-color);
        border-radius: 24px;
        box-sizing: border-box;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transition: background-color 1s;
        width: 100%;
        z-index: -1;
    }
    .bubble-background {
        opacity: 0.8;
        border-radius: 24px;
        width: 100%;
        height: 100%;
        box-sizing: border-box !important;
        position: absolute;
        left: 0;
        z-index: -2;
        background-color: var(--background-color,var(--primary-background-color));
    }
    .bubble-icon {
        height: 24px;
        width: 24px;
    }
    .bubble-icon + .bubble-name {
        margin-left: 8px;
    }


    .horizontal-buttons-stack-card.editor {
        position: relative;
        width: 100%;
        left: 0;
        bottom: 0;
    }
    .horizontal-buttons-stack-card.editor::before {
        background: none;
    }

`;
// export default `
//     ha-card {
//         margin-top: 0;
//         background: none;
//         opacity: 1;
//     }
//     .is-unavailable {
//         opacity: 0.5;
//     }

//     .bubble-button-card-container {
//         position: relative;
//         width: 100%;
//         height: 50px;
//         background-color: var(--background-color-2,var(--secondary-background-color));
//         border-radius: 25px;
//         mask-image: radial-gradient(white, black);
//         -webkit-transform: translateZ(0);
//         overflow: hidden;
//         touch-action: pan-y;
//     }

//     .bubble-button-card,
//     .bubble-range-slider {
//         display: flex;
//         position: absolute;
//         justify-content: space-between;
//         align-items: center;
//         height: 100%;
//         width: 100%;
//         transition: background-color 1.5s;
//         background-color: rgba(0,0,0,0);
//     }

//     .bubble-range-fill {
//         z-index: -1;
//         position: absolute;
//         top: 0;
//         bottom: 0;
//         left: 0;
//         width: 100%;
//         left: -100%;
//         transition: all .3s;
//     }
//     .is-dragging .bubble-range-fill {
//         transition: none;
//     }
//     .is-light .bubble-range-fill {
//         opacity: 0.5;
//     }

//     .bubble-button-card {
//         cursor: pointer;
//     }
//     .is-unavailable .bubble-button-card {
//         cursor: not-allowed;
//     }

//     .bubble-range-slider {
//         cursor: ew-resize;
//     }
//     .is-unavailable .bubble-range-slider {
//         cursor: not-allowed;
//     }

//     .bubble-icon-container {
//         display: flex;
//         flex-wrap: wrap;
//         align-content: center;
//         justify-content: center;
//         min-width: 38px;
//         min-height: 38px;
//         margin: 6px;
//         border-radius: 50%;
//         background-color: var(--card-background-color, var(--ha-card-background));
//         overflow: hidden;
//         z-index: 1;
//         position: relative;
//         cursor: pointer;
//     }
//     .bubble-icon-container::after {
//         content: '';
//         background-color: currentColor;
//         position: absolute;
//         display: block;
//         width: 100%;
//         height: 100%;
//         transition: all 1s;
//         left: 0;
//         right: 0;
//         opacity: 0;
//     }
//     .is-light.is-on .bubble-icon-container::after {
//         opacity: 0.2;
//     }
//     .is-unavailable.is-light .bubble-icon-container::after {
//         opacity: 0;
//     }

//     .bubble-icon {
//         display: flex;
//         opacity: 0.6;
//     }

//     .is-on .bubble-icon {
//       filter: brightness(1.1);
//       opacity: 1;
//     }

//     .bubble-entity-picture {
//         background-size: cover;
//         background-position: center;
//         height: 100%;
//         width: 100%;
//         position: absolute;
//     }

//     .bubble-name-container {
//         display: flex;
//         line-height: 1em;
//         flex-direction: column;
//         justify-content: center;
//         flex-grow: 1;
//         font-weight: 600;
//         margin-left: 4px;
//         margin-right: 16px;
//         pointer-events: none;
//         position: relative;
//         overflow: hidden;
//     }

//     .bubble-name {
//         margin: 2px 0;
//         white-space: nowrap;
//         display: flex;
//         position: relative;
//     }

//     .bubble-state {
//         font-size: 12px;
//         opacity: 0.7;
//         margin: 2px 0;
//         font-weight: normal;
//         white-space: nowrap;
//         display: flex;
//         position: relative;
//     }

//     .bubble-feedback-element {
//         position: absolute;
//         top: 0;
//         left: 0;
//         opacity: 0;
//         width: 100%;
//         height: 100%;
//         background-color: rgb(0,0,0);
//     }

//     @keyframes tap-feedback {
//         0% {transform: translateX(-100%); opacity: 0;}
//         64% {transform: translateX(0); opacity: 0.1;}
//         100% {transform: translateX(100%); opacity: 0;}
//     }
// `;

export default `
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
        background-color: var(--background-color-2,var(--secondary-background-color));
        border-radius: 25px;
        mask-image: radial-gradient(white, black);
        -webkit-transform: translateZ(0);
        overflow: hidden;
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
        background-color: rgba(0,0,0,0);
    }
    .bubble-button-background {
        opacity: .5;
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
    }
    .is-dragging .bubble-range-fill {
        transition: none;
    }
    .is-light .bubble-range-fill,
    .bubble-button-background {
        opacity: 0.5;
    }

    .bubble-button-card {
        cursor: pointer;
    }
    .is-unavailable .bubble-button-card,
    .is-unavailable .bubble-range-slider {
        cursor: not-allowed;
    }
    .bubble-range-slider {
        cursor: ew-resize;
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
        z-index: 1;
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
    }
    .is-light.is-on .bubble-icon-container::after {
        opacity: 0.2;
    }
    .is-unavailable.is-light .bubble-icon-container::after {
        opacity: 0;
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

    .bubble-name-container {
        display: flex;
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
        margin: 2px 0;
        white-space: nowrap;
        display: flex;
        position: relative;
    }

    .bubble-state {
        font-size: 12px;
        opacity: 0.7;
        margin: 2px 0;
        font-weight: normal;
        white-space: nowrap;
        display: flex;
        position: relative;
    }

    .bubble-feedback-element {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0,0,0);
    }

    @keyframes tap-feedback {
        0% {transform: translateX(-100%); opacity: 0;}
        64% {transform: translateX(0); opacity: 0.1;}
        100% {transform: translateX(100%); opacity: 0;}
    }
`;
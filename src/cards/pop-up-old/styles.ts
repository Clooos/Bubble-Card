export default `
  .pop-up.card-content {
      width: 100% !important;
      padding: 0 !important;
  }
  .pop-up {
      transition: transform .36s;
      position: fixed;
      width: 100%;
      max-width: 100%;
      border-radius: 42px 42px 0 0;
      box-sizing: border-box;
      margin-left: var(--custom-margin);
      grid-auto-rows: min-content;
      padding: 18px 18px 90px 18px;
      height: calc(100% - var(--custom-height-offset-mobile) - var(--header-height)) !important;
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: auto; 
      overflow-x: hidden; 
      z-index: 6 !important;
      bottom: 0;
      left: calc(var(--mdc-drawer-width) / 2 + 50% - (var(--desktop-width) / 2));
      grid-gap: 14px !important;
      gap: 14px !important;
      column-gap: 14px !important;
      --grid-gap: 14px;
      --vertical-stack-card-gap: 14px;
      --horizontal-stack-card-gap: 14px;
      --stack-card-gap: 14px;
  }
  .pop-up::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
  }
  .pop-up > :first-child {
      position: sticky;
      top: 0;
      z-index: 1;
      background: none !important;
      overflow: visible;
  }
  .is-popup-opened {
      transform: translateY(0);
      box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));
      backdrop-filter: var(--custom-popup-filter);
      -webkit-backdrop-filter: var(--custom-popup-filter);
  }
  .is-popup-closed { 
      transform: translateY(100%) !important;
      box-shadow: none !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
  }
  @media only screen and (min-width: 600px) {
      .pop-up {
          margin: 0 !important;
          min-width: var(--desktop-width);
          width: calc(var(--mobile-width) - var(--mdc-drawer-width)) !important;
          height: calc(100% - var(--custom-height-offset-desktop) - var(--header-height)) !important;
          left: calc(50% - (var(--desktop-width) / 2));
      }
  }
  @media only screen and (min-width: 870px) {
      .pop-up {
        left: calc(var(--mdc-drawer-width) / 2 + 50% - (var(--desktop-width) / 2));
      }
      .is-sidebar-hidden.pop-up {
        width: var(--desktop-width) !important;
      }
  }
  .pop-up.editor {
      position: inherit !important;
      width: 100% !important;
      padding: 18px !important;
      backdrop-filter: none !important;
      display: block !important;
      transform: none !important;
      height: auto !important;
      min-width: auto;
      border-radius: 42px;
  }
`;

export const headerStyles = `
  ha-card {
      margin-top: 0 !important;
  }
  .bubble-header-container {
      display: inline-flex;
      height: 50px;
      width: 100%;
      margin: 0;
      padding: 0;
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
    height: 22px;
    width: 22px;
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
  }
  .bubble-header {
      align-items: center;
      display: inline-flex;
      position: relative;
      padding-right: 6px;
      z-index: 1;
      flex-grow: 1;
      transition: background 1s;
      border-radius: 25px;
      margin-right: 14px;
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
  }
  .bubble-name {
      display: inline-flex;
      margin: 0 18px 0 0;
      padding: 4px;
      z-index: 1;
      font-size: 18px;
  }
  .bubble-state {
      display: inline-flex;
      font-size: 16px;
      min-width: fit-content;
      flex-grow: 1;
  }
  .bubble-power-button {
      cursor: pointer;
      width: 24px;
      height: 24px;
      border-radius: 12px;
      margin: 0 10px;
      background: none !important;
      justify-content: flex-end;
      background-color: var(--background-color,var(--secondary-background-color));
  }
  .bubble-close-button {
      height: 50px;
      width: 50px;
      border: none;
      border-radius: 50%;
      z-index: 1;
      background: var(--background-color,var(--secondary-background-color));
      color: var(--primary-text-color);
      flex-shrink: 0;
      cursor: pointer;
  }
`;

export const backdropStyles = `
  .bubble-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
  }

  .bubble-backdrop.is-visible {
    opacity: 1;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .bubble-backdrop.is-hidden {
    opacity: 0;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    pointer-events: none;
  }
`
export default `
  .bubble-pop-up-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin-top: -50px;
      max-width: 100%;
      padding-top: 40px;
      padding-bottom: 80px;
      grid-gap: 14px;
      gap: 14px;
      column-gap: 14px;
      --grid-gap: 14px;
      --vertical-stack-card-gap: 14px;
      --horizontal-stack-card-gap: 14px;
      --stack-card-gap: 14px;
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: auto; 
      overflow-x: hidden; 
      grid-auto-rows: min-content;
      mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%);
      -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%);
      padding: 18px 18px calc(140px + var(--custom-height-offset-mobile)) 18px;
  }
  .bubble-pop-up-container > * {
      flex-shrink: 0 !important;
  }
  .bubble-pop-up.card-content {
      width: 100% !important;
      padding: 0 !important;
  }
  .bubble-pop-up {
      transition: transform 0.3s ease;
      background-color: var(--bubble-pop-up-background-color);
      position: fixed;
      width: 100%;
      max-width: 100%;
      border-radius: 42px 42px 0 0;
      box-sizing: border-box;
      margin-left: var(--custom-margin);
      left: 7px;
      z-index: 5 !important;
      bottom: calc(-56px - var(--custom-height-offset-mobile));
      backdrop-filter: var(--custom-popup-filter);
      -webkit-backdrop-filter: var(--custom-popup-filter);
  }
  .bubble-pop-up-container::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
  }
  .is-popup-opened {
      box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));
  }
  .is-popup-closed { 
      transform: translateY(100%) !important;
      box-shadow: none !important;
  }

  @media only screen and (min-width: 600px) {
      .bubble-pop-up {
          margin-left: 0 !important;
          bottom: calc(-56px - var(--custom-height-offset-desktop));
          min-width: var(--desktop-width, 540px);
          max-width: var(--desktop-width, 540px);
          left: calc(50% - (var(--desktop-width, 540px) / 2));
      }
      .bubble-pop-up-container {
          padding: 18px 18px calc(140px + var(--custom-height-offset-desktop)) 18px;
      }
  }
  @media only screen and (min-width: 768px) {
      .bubble-pop-up {
        left: calc(var(--mdc-drawer-width, 0px) / 2 + 50% - (var(--desktop-width, 540px) / 2));
      }
  }
  .bubble-pop-up.editor {
      position: inherit !important;
      width: 100% !important;
      backdrop-filter: none !important;
      display: flex !important;
      transform: none !important;
      height: auto !important;
      min-width: auto;
      border-radius: 42px;
  }
  .bubble-header-container {
      display: inline-flex;
      height: 50px;
      margin: 0;
      padding: 0;
      z-index: 3;
      padding: 18px 18px 22px;
      position: sticky;
      top: 0;
      background: none !important;
      overflow: visible;
  }
  .bubble-header {
      display: inline-flex;
      flex-grow: 1;
      margin-right: 14px;
      color: var(--primary-text-color);
  }
  .bubble-name {
      font-size: 14px;
      font-weight: heavy;
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
  .bubble-button-card-container {
      background: var(--background-color,var(--secondary-background-color));
  }
  .bubble-pop-up-container.editor-cropped {
      height: 122px !important;
      mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;
      -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%) !important;   
  }
  .bubble-pop-up.editor > .bubble-pop-up-container {
      padding-bottom: 18px !important;
      mask-image: none;
      -webkit-mask-image: none;    
  }

  .no-header .bubble-header-container {
      visibility: hidden !important;
      height: 0px !important;
  }
  .no-header .bubble-pop-up-container {
      padding-top: 4px !important;
      mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;
      -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;
  }

  .large .bubble-button-card-container {
    height: 56px;
    border-radius: 32px;
  }
  .large .bubble-pop-up-container {
      margin-top: -36px;
  }
  .large .bubble-icon-container {
    --mdc-icon-size: 24px;
    min-width: 42px !important;
    min-height: 42px !important;
    margin-left: 8px;
  }
  .large .bubble-close-button {
      height: 56px;
      width: 56px;
      border: none;
      border-radius: 50%;
      z-index: 1;
      --mdc-icon-size: 28px !important;
  }

  .rows-2 .bubble-sub-button-container {
    flex-direction: column;
    gap: 4px !important;
    display: grid !important;
    grid-template-columns: repeat(2, min-content);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;
    width: auto;
    padding-right: 14px;
  }
  .rows-2 .bubble-sub-button {
    height: 20px !important;
  }
`;

export const backdropStyles = `
  .bubble-backdrop {
    position: fixed;
    background-color: var(--bubble-backdrop-background-color);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    opacity: 0;
    transition: opacity 0.3s;
    transition-delay: .1s;
    display: flex;
    backdrop-filter: var(--custom-backdrop-filter);
    -webkit-backdrop-filter: var(--custom-backdrop-filter);
  }

  .bubble-backdrop.is-visible {
    opacity: 1;
  }

  .bubble-backdrop.is-hidden {
    opacity: 0;
    pointer-events: none;
  }
`
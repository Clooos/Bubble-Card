import { version } from './var/version.ts';
import { addUrlListener } from './tools/url-listener.ts';
import { initializeContent } from './tools/init.ts';
import { handlePopUp } from './cards/pop-up.ts';
import { handleHorizontalButtonsStack } from './cards/horizontal-buttons-stack.ts';
import { handleButton } from './cards/button.ts';
import { handleSeparator } from './cards/separator.ts';
import { handleCover } from './cards/cover.ts';
import { handleEmptyColumn } from './cards/empty-column.ts';
import BubbleCardEditor from './editor/bubble-card-editor.ts';

class BubbleCard extends HTMLElement {
    editor = false;

    connectedCallback() {
        window.addEventListener('focus', this.updateOnFocus);
        addUrlListener();
    }

    disconnectedCallback() {
        window.removeEventListener('focus', this.updateOnFocus);
    }

    updateOnFocus = () => {
        // Fix entities not updating after coming back to the HA Companion app
        this.hass = this._hass;
    }

    set editMode(editMode) {
        this.editor = editMode;

        if (this._hass)
            this.updateBubbleCard();
    }

    set hass(hass) {

        initializeContent(this);

        this._hass = hass;

        this.updateBubbleCard();

        if (!window.columnFix) {
            window.columnFix = this.config.column_fix
        }
    }

    updateBubbleCard() {
        switch (this.config.card_type) {

            // Initialize pop-up card
            case 'pop-up':
                handlePopUp(this);
                break;

            // Initialize button
            case 'button' :
                handleButton(this);
                break;

            // Initialize separator
            case 'separator' :
                handleSeparator(this);
                break;

            // Initialize cover card
            case 'cover' :
                handleCover(this);
                break;

            // Intitalize empty card
            case 'empty-column' :
                handleEmptyColumn(this);
                break;

            // Initialize horizontal buttons stack
            case 'horizontal-buttons-stack' :
                handleHorizontalButtonsStack(this);
                break;
        }
    }

    setConfig(config) {
        if (config.card_type === 'pop-up') {
            if (!config.hash) {
                throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.");
            }
        } else if (config.card_type === 'horizontal-buttons-stack') {
            var definedLinks = {};
            
            for (var key in config) {
              if (key.match(/^\d+_icon$/)) {
                var iconKey = key;
                var linkKey = key.replace('_icon', '_link');
            
                if (config[linkKey] === undefined) {
                    throw new Error("You need to define " + linkKey);
                }
            
                if (definedLinks[config[linkKey]]) {
                    throw new Error("You can't use " + config[linkKey] + " twice" );
                }
            
                definedLinks[config[linkKey]] = true;
              }
            }
        } else if (config.card_type === 'button' || config.card_type === 'cover' || config.card_type === 'state') {
            if (!config.entity) {
                throw new Error("You need to define an entity");
            }
        }
        
        if (window.entityError) {
            throw new Error("You need to define a valid entity");
        }
        
        this.config = config;
    }

    getCardSize() {
      // Fix the empty columns caused by the pop-ups on the dashboard
      // Check the value of window.columnFix
      if (window.columnFix === "true") {
        // Return 0 if it is "true"
        return 0;
      } else if (typeof window.columnFix === "number") {
        // Return the number if it is a number
        return window.columnFix;
      } else {
        // Return -10 otherwise
        return -10;
      }
    }

    static getConfigElement() {
        return document.createElement("bubble-card-editor");
    }
}

customElements.define("bubble-card", BubbleCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "bubble-card",
    name: "Bubble Card",
    preview: false,
    description: "A minimalist card collection with a nice pop-up touch."
});

console.info(
    `%c Bubble Card %c ${version} `,
    'background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
    'background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)'
);
import { version } from './var/version.ts';
import { addUrlListener } from './tools/url-listener.ts';
import { initializeContent, checkEditor, checkResources } from './tools/init.ts';
import { handlePopUp } from './cards/pop-up.ts';
import { bubblePopUpEditor } from './editor/bubble-pop-up-editor.ts';

let editor;
addUrlListener();

class BubblePopUp extends HTMLElement {
    
    set hass(hass) {

        this._hass = hass;
        
        editor = checkEditor();
        this.editor = editor;

        checkResources(hass);

        initializeContent(this);

        // Initialize pop-up card
        handlePopUp(this);
    }

    setConfig(config) {
        if (!config.hash) {
            throw new Error("You need to define an hash. Please note that this card must be placed inside a vertical_stack to work as a pop-up.");
        }
        this.config = config;
    }

    getCardSize() {
        // Fix the empty columns caused by the pop-ups on the dashboard
        return -10000;
    }

    static getConfigElement() {
        return document.createElement("bubble-pop-up-editor");
    }
}

let customElementObserver = new MutationObserver((mutationsList, observer) => {
    if (customElements.get("ha-panel-lovelace")) {
        customElements.define("bubble-pop-up", BubblePopUp);
        observer.disconnect();
    }
});

customElementObserver.observe(document, { childList: true, subtree: true });

window.customCards = window.customCards || [];
window.customCards.push({
    type: "bubble-pop-up",
    name: "Bubble Pop-up",
    preview: false,
    description: "Just add it in a vertical-stack first."
});

console.info(
    `%c Bubble Card - Pop-up %c ${version} `,
    'background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
    'background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)'
);
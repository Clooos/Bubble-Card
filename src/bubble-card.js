import { version } from './var/version.js';
import { initializeContent } from './tools/init.js';
import { handlePopUp } from './cards/pop-up/index.js';
import { updateListeners as updatePopupListeners } from './cards/pop-up/helpers.js';
import { cleanupTapActions } from './tools/tap-actions';
import { handleHorizontalButtonsStack } from './cards/horizontal-buttons-stack/index.js';
import { handleButton } from './cards/button/index.js';
import { handleSeparator } from './cards/separator/index.js';
import { handleCover } from './cards/cover/index.js';
import { handleEmptyColumn } from './cards/empty-column/index.js';
import { handleCalendar } from './cards/calendar/index.js';
import { handleMediaPlayer } from './cards/media-player/index.js';
import { handleSelect } from './cards/select/index.js';
import { handleClimate } from './cards/climate/index.js';
import { preloadYAMLStyles } from './tools/style-processor.js';
import { createBubbleDefaultColor, initBubbleColorThemeWatcher } from './tools/style.js';
import BubbleCardEditor from './editor/bubble-card-editor.js';

let themeWatcherInitialized = false;

class BubbleCard extends HTMLElement {
    editor = false;
    isConnected = false;
    _editorUpdateTimeout = null;

    connectedCallback() {
        this.isConnected = true;
        preloadYAMLStyles(this);

        if (!themeWatcherInitialized) {
            initBubbleColorThemeWatcher();
            themeWatcherInitialized = true;
        } else {
            createBubbleDefaultColor();
        }

        if (this._hass) {
            this.updateBubbleCard();
        }
    }

    disconnectedCallback() {
        this.isConnected = false;
        cleanupTapActions();
        clearTimeout(this._editorUpdateTimeout);

        switch (this.config.card_type) {
            case 'pop-up':
                updatePopupListeners(this, false);
                break;
        }
    }

    get detectedEditor() {
        if (this.editor) {
            return window.history?.state?.dialog === "hui-dialog-edit-card";
        }
        return false;
    }

    set editMode(editMode) {
        if (this.editor === editMode) {
            return;
        }
        this.editor = editMode;

        if (this.config.card_type === 'pop-up' || this.config.card_type === 'horizontal-buttons-stack') {
            this.updateBubbleCard();
        }
    }

    _scheduleEditorUpdate() {
        clearTimeout(this._editorUpdateTimeout);
        this._editorUpdateTimeout = setTimeout(() => {
            if (this.isConnected && this.detectedEditor) {
                this.updateBubbleCard();
            }
        }, 300);
    }

    set hass(hass) {
        initializeContent(this);
        this._hass = hass;

        const isPopUp = this.config.card_type === 'pop-up';

        if (this.detectedEditor) {
            this._scheduleEditorUpdate();
        } else if (!this.editor && (this.isConnected || isPopUp)) {
            this.updateBubbleCard();
        }
    }

    updateBubbleCard() {
        if (!this.isConnected && this.config.card_type !== 'pop-up') {
            return;
        }
        
        switch (this.config.card_type) {
            case 'pop-up':
                handlePopUp(this);
                break;
            case 'button' :
                handleButton(this);
                break;
            case 'separator' :
                handleSeparator(this);
                break;
            case 'cover' :
                handleCover(this);
                break;
            case 'empty-column' :
                handleEmptyColumn(this);
                break;
            case 'horizontal-buttons-stack' :
                handleHorizontalButtonsStack(this);
                break;
            case 'calendar' :
                handleCalendar(this);
                break;
            case 'media-player' :
                handleMediaPlayer(this);
                break;
            case 'select' :
                handleSelect(this);
                break;
            case 'climate' :
                handleClimate(this);
                break;
        }
    }

    setConfig(config) {
        if (config.error) {
            throw new Error(config.error);
        }

        if (!config.card_type) {
            throw new Error("You need to define a card type");
        }

        if (config.card_type === 'pop-up') {
            if (config.hash && config.button_type && config.button_type !== 'name' && !config.entity && config.modules) {
                throw new Error("You need to define an entity");
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
        } else if (['button', 'cover', 'climate', 'select', 'media-player'].includes(config.card_type)) {
            if (!config.entity && config.button_type !== 'name') {
                throw new Error("You need to define an entity");
            }

        } else if (config.card_type === 'calendar') {
            if (!config.entities) {
                throw new Error("You need to define an entity list");
            }
        }

        if (config.card_type === 'select' && config.entity && !config.select_attribute) {
            const isSelectEntity = config.entity?.startsWith("input_select") || config.entity?.startsWith("select");
            if (!isSelectEntity) {
                throw new Error('"Select menu (from attributes)" missing');
            }
        }

        if (window.entityError) {
            throw new Error("You need to define a valid entity");
        }

        this.config = config;
    }

    getCardSize() {
        switch (this.config.card_type) {
            case 'pop-up':
                return -100000;
            case 'button':
                return 1;
            case 'separator':
                return 1;
            case 'cover':
                return 2;
            case 'empty-column':
                return 1;
            case 'horizontal-buttons-stack':
                return 0;
            case 'calendar':
                return 1;
            case 'media-player':
                return 1;
            case 'select':
                return 1;
            case 'climate':
                return 1;
        }
    }

    getGridOptions() {
        const currentColumns = this.config.columns;
        const convertedColumns = currentColumns ? currentColumns * 3 : 12;
        const convertedRows = this.config.rows ?? 'auto';
        let LovelaceGridOptions = { columns: convertedColumns, rows: convertedRows };

        switch (this.config.card_type) {
            case 'horizontal-buttons-stack':
                LovelaceGridOptions = { rows: 1.3 };
                break;
            case 'separator':
                LovelaceGridOptions = { rows: 0.8 };
                break;
        }
        return LovelaceGridOptions;
    }

    static getConfigElement() {
        return document.createElement("bubble-card-editor");
    }

    getLayoutOptions() {
        let  defaultRows = 1;
        if (this.config.card_type === 'pop-up') {
            defaultRows = 0;
        } else if (this.config.card_type === 'horizontal-buttons-stack') {
            defaultRows = 1;
        } else if (['cover'].includes(this.config.card_type)) {
            defaultRows = 2;
        }

        let  defaultColumns = 4;
        if (this.config.card_type === 'pop-up') {
            defaultColumns = 0;
        } else if (this.config.card_type === 'horizontal-buttons-stack') {
            defaultColumns = 4;
        }

        return {
            grid_columns: this.config.columns ?? defaultColumns,
            grid_rows: this.config.rows ?? defaultRows,
        }
    }
}

customElements.define("bubble-card", BubbleCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "bubble-card",
    name: "Bubble Card",
    preview: false,
    description: "A minimalist card collection with a nice pop-up touch.",
    documentationURL: "https://github.com/Clooos/Bubble-Card/"
});

console.info(
    `%c Bubble Card %c ${version} `,
    'background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
    'background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)'
);
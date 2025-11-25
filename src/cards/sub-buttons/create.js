import { createBaseStructure } from "../../components/base-card/index.js";
import styles from "./styles.css";

export function createStructure(context, appendTo = context.container) {
    const cardType = 'sub-buttons';

    const elements = createBaseStructure(context, {
        type: cardType,
        appendTo: appendTo,
        styles: styles,
        withBaseElements: false,
        withBackground: true,
        withFeedback: false,
        withSubButtons: true,
    });

    if (context.config.hide_main_background) {
        elements.mainContainer.classList.add('no-background');
    }

    if (context.config.menu_style) {
        elements.subButtonContainer.classList.add('menu-style');
    }

    if (context.config.menu_style && context.config.labels_below) {
        elements.subButtonContainer.classList.add('labels-below');
    }
  
    if (context.config.space_between_buttons) {
        elements.subButtonContainer.classList.add('space-between-buttons');
    }
  
    if (context.config.hide_button_labels) {
        elements.subButtonContainer.classList.add('hide-labels');
    }
  
    if (context.config.compact_mode) {
        elements.subButtonContainer.classList.add('compact-mode');
    }

    if (context.config.footer_mode) {
        context.card.classList.add('footer-mode');
        
        if (context.config.footer_full_width) {
            context.card.classList.add('footer-full-width');
        } else if (context.config.footer_width) {
            context.card.style.setProperty('--bubble-footer-width', `${context.config.footer_width}px`);
        }
        
        const bottomOffset = context.config.footer_bottom_offset || 16;
        context.card.style.setProperty('--bubble-footer-bottom', `${bottomOffset}px`);
    }

    // Fix for the last cards that are hidden in footer mode
    if (context.config.footer_mode && !context.editor) {
        context.cardContainer = context.card.parentNode.host?.parentNode?.parentNode;
        let haContainer = context.cardContainer?.parentNode;
        if (context.cardContainer.classList.contains('card')) {
            context.cardContainer.style.position = 'absolute';
        }
    }

    context.cardType = cardType;
}

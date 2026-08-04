import { createBaseStructure } from "../../components/base-card/index.js";
import { startContentInsetSync } from "../../tools/content-inset.js";
import { isInsidePopupShell } from "../../tools/popup-dom.js";
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

        // The footer is position:fixed, so it offsets itself by where the
        // dashboard content starts. Start measuring that: a dashboard with a
        // footer and no pop-up would otherwise never publish the value.
        startContentInsetSync();

        if (context.config.footer_full_width) {
            context.card.classList.add('footer-full-width');
        } else if (context.config.footer_width) {
            context.card.style.setProperty('--bubble-footer-width', `${context.config.footer_width}px`);
        }
        
        const bottomOffset = context.config.footer_bottom_offset || 16;
        context.card.style.setProperty('--bubble-footer-bottom', `${bottomOffset}px`);
    }

    // Fix for the last cards that are hidden in footer mode. The target is the
    // Home Assistant dashboard cell hosting the card: taking it out of the flow
    // is what frees the space the fixed footer no longer occupies. Inside a
    // pop-up the very same `.card` lookup lands on the pop-up's own card
    // wrapper, and collapsing that one to zero width makes the pop-up treat the
    // card as off-screen content, which freezes its hass updates (#2528).
    if (context.config.footer_mode && !context.editor && !isInsidePopupShell(context.card)) {
        context.cardContainer = context.card.parentNode?.host?.parentNode?.parentNode;
        if (context.cardContainer?.classList.contains('card')) {
            context.cardContainer.style.position = 'absolute';
        }
    }

    context.cardType = cardType;
}

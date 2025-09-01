import { createBaseStructure } from "../../components/base-card/index.js";
import styles from "./styles.css";

export function createStructure(context) {
    // Force-disable single tap on the card background for select card
    // to keep single tap dedicated to opening the dropdown
    try {
        const existing = context.config?.button_action || {};
        context.config.button_action = {
            ...existing,
            tap_action: { action: "none" }
        };
    } catch (e) {}

    const elements = createBaseStructure(context, {
        type: 'select',
        styles: styles,
        withFeedback: true,
        withSubButtons: true,
        withIconActions: true,
        // Enable button actions on the card background so double-tap/hold can be configured
        buttonActions: true,
    });

    elements.mainContainer.classList.add('bubble-select-card-container');

    context.cardType = 'select';
}
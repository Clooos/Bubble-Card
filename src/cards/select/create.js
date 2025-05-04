import { createBaseStructure } from "../../components/base-card/index.js";
import styles from "./styles.css";

export function createStructure(context) {
    const elements = createBaseStructure(context, {
        type: 'select',
        styles: styles,
        withFeedback: true,
        withSubButtons: true,
        withIconActions: true,
    });

    elements.mainContainer.classList.add('bubble-select-card-container');

    context.cardType = 'select';
}
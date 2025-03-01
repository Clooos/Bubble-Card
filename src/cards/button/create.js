import { createBaseStructure } from "../../components/base-card/index.js";
import { getButtonType } from "./helpers.js";
import styles from "./styles.css";

export function createStructure(context, appendTo = context.container) {
    const cardType = 'button';
    const buttonType = getButtonType(context);
    const isSlider = buttonType === 'slider';
    const actions = {};

    actions['switch'] = {
        icon: true,
        button: {
            tap_action: { action: "toggle" },
            double_tap_action: { action: "toggle" },
            hold_action: { action: "more-info" }
        }
    };

    actions['state'] = {
        icon: {
            tap_action: { action: "more-info" },
            double_tap_action: { action: "more-info" },
            hold_action: { action: "more-info" }
        },
        button: {
            tap_action: { action: "more-info" },
            double_tap_action: { action: "more-info" },
            hold_action: { action: "more-info" }
        }
    };

    actions['name'] = {
        button: {
            tap_action: { action: "none" },
            double_tap_action: { action: "none" },
            hold_action: { action: "none" }
        },
        icon: {
            tap_action: { action: "none" },
            double_tap_action: { action: "none" },
            hold_action: { action: "none" }
        }
    };

    const elements = createBaseStructure(context, {
        type: cardType,
        appendTo: appendTo,
        styles: styles,
        withSlider: isSlider,
        withFeedback: !isSlider,
        withSubButtons: true,
        iconActions: !isSlider ? actions[buttonType]?.icon : true,
        buttonActions: !isSlider ? actions[buttonType]?.button : false,
    });

    // Add backward compatibility
    elements.background.classList.add('bubble-button-background');
    elements.mainContainer.classList.add('bubble-button-card-container');
    elements.cardWrapper.classList.add('bubble-button-card');

    if (appendTo !== context.container) {
        context.buttonType = buttonType;
    } else {
        context.cardType = cardType;
    }
}

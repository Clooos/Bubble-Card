import { createBaseStructure } from "../../components/base-card/index.js";
import { isEntityType } from "../../tools/utils.js";
import { getButtonType, readOnlySlider } from "./helpers.js";
import styles from "./styles.css";

export function createStructure(context, appendTo = context.container) {
    const cardType = 'button';
    const buttonType = getButtonType(context);
    const isSlider = buttonType === 'slider';
    const actions = {};

    actions['slider'] = {
        icon: true,
        button: {
            tap_action: { action: isEntityType(context, "sensor") ? "more-info" : "toggle" },
            double_tap_action: { action: "none" },
            hold_action: { action: "none" }
        }
    };

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
        holdToSlide: isSlider,
        readOnlySlider: readOnlySlider(context),
        withFeedback: !context.config.tap_to_slide,
        withSubButtons: true,
        iconActions: actions[buttonType]?.icon,
        buttonActions: 
            !context.config.tap_to_slide 
                ? actions[buttonType]?.button 
                : false,
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

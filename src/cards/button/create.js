import { createBaseStructure } from "../../components/base-card/index.js";
import { isEntityType } from "../../tools/utils.js";
import { getButtonType, readOnlySlider } from "./helpers.js";
import styles from "./styles.css";

const defaultIconActions = {
    tap_action: { action: "more-info" },
    double_tap_action: { action: "none" },
    hold_action: { action: "toggle" }
};

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
            double_tap_action: { action: "none" },
            hold_action: { action: "more-info" }
        }
    };

    actions['state'] = {
        icon: {
            tap_action: { action: "more-info" },
            double_tap_action: { action: "none" },
            hold_action: { action: "more-info" }
        },
        button: {
            tap_action: { action: "more-info" },
            double_tap_action: { action: "none" },
            hold_action: { action: "more-info" }
        }
    };

    actions['name'] = {
        icon: {
            tap_action: { action: "none" },
            double_tap_action: { action: "none" },
            hold_action: { action: "none" }
        },
        button: {
            tap_action: { action: "none" },
            double_tap_action: { action: "none" },
            hold_action: { action: "none" }
        }
    };

    // Determine the correct default actions to pass based on buttonType
    let iconDefaults;
    if (actions[buttonType]?.icon === true) {
        iconDefaults = defaultIconActions;
    } else if (typeof actions[buttonType]?.icon === 'object') {
        iconDefaults = actions[buttonType]?.icon;
    } else {
        iconDefaults = { tap_action: { action: "none" }, double_tap_action: { action: "none" }, hold_action: { action: "none" } }; // Default to none if not specified
    }

    let buttonDefaults;
    if (actions[buttonType]?.button) {
        buttonDefaults = actions[buttonType]?.button;
    } else {
        buttonDefaults = { tap_action: { action: "none" }, double_tap_action: { action: "none" }, hold_action: { action: "none" } }; // Default to none if not specified
    }

    const elements = createBaseStructure(context, {
        type: cardType,
        appendTo: appendTo,
        styles: styles,
        withSlider: isSlider,
        holdToSlide: isSlider,
        readOnlySlider: readOnlySlider(context),
        withFeedback: !context.config.tap_to_slide,
        withSubButtons: true,
        iconActions: iconDefaults,
        buttonActions:
            !context.config.tap_to_slide
                ? buttonDefaults
                : false, // Keep false if tap_to_slide is enabled
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

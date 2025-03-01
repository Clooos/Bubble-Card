import { createElement } from "../../tools/utils.js";
import { addActions, addFeedback } from "../../tools/tap-actions.js";
import { createSliderStructure } from "../slider/index.js";
import { createSubButtonStructure } from "../sub-button/index.js";
import { defaultOptions } from "./index.js";
import styles from "./styles.css";

const processedStylesCache = {};

export function createBaseStructure(context, config = {}) {
    context.elements = context.elements || {};
    
    const options = { 
        ...defaultOptions, 
        appendTo: context.content,
        baseCardStyles: styles,
        ...config 
    };

    if (options.withBaseElements) {
        context.elements.mainContainer = createElement('div', `bubble-${options.type}-container bubble-container`);
        context.elements.cardWrapper = createElement('div', `bubble-${options.type} bubble-wrapper`);
        context.elements.contentContainer = createElement('div', 'bubble-content-container');
        context.elements.buttonsContainer = createElement('div', 'bubble-buttons-container');

        context.elements.iconContainer = createElement('div', 'bubble-icon-container icon-container');
        context.elements.icon = createElement('ha-icon', 'bubble-main-icon bubble-icon icon');
        context.elements.image = createElement('div', 'bubble-entity-picture entity-picture');
        
        context.elements.nameContainer = createElement('div', 'bubble-name-container name-container');
        context.elements.name = createElement('div', 'bubble-name name');
        context.elements.state = createElement('div', 'bubble-state state');

        context.elements.iconContainer.append(
            context.elements.icon,
            options.withImage ? context.elements.image : null
        );
    
        context.elements.nameContainer.append(
            context.elements.name,
            options.withState ? context.elements.state : null
        );
    
        context.elements.contentContainer.append(
            context.elements.iconContainer,
            context.elements.nameContainer
        );
    
        context.elements.cardWrapper.append(
            context.elements.contentContainer, 
            context.elements.buttonsContainer
        );

        if (options.withBackground) {
            context.elements.background = createElement('div', 'bubble-background');
            context.elements.cardWrapper.prepend(context.elements.background);
        }
    
        if (options.withFeedback) {
            context.elements.feedbackContainer = createElement('div', 'bubble-feedback-container feedback-container');
            context.elements.feedback = createElement('div', 'bubble-feedback-element feedback-element');
            context.elements.feedback.style.display = 'none';
            context.elements.feedbackContainer.append(context.elements.feedback);
            context.elements.cardWrapper.append(context.elements.feedbackContainer);
            addFeedback(context.elements.background, context.elements.feedback);    
        }
    
        context.elements.mainContainer.appendChild(context.elements.cardWrapper);
    
        if (options.withSlider) {
            createSliderStructure(context);
        }
    }

    if (options.styles) {
      if (!processedStylesCache[options.type]) {
        // Replace 'card-type' in CSS variables with the real card type
        processedStylesCache[options.type] = options.baseCardStyles.replace(/card-type/g, options.type);
      }

      context.elements.style = createElement('style');
      context.elements.style.innerText = processedStylesCache[options.type] + options.styles;
      context.elements.mainContainer.appendChild(context.elements.style);
    }
    
    if (options.withCustomStyle) {
        context.elements.customStyle = createElement('style');
        context.elements.mainContainer.appendChild(context.elements.customStyle);
    }

    if (options.withSubButtons) {
        createSubButtonStructure(context, {
          container: options.appendTo,
          appendTo: context.elements.cardWrapper ?? context.elements.mainContainer,
          before: false
        });
        
        if (context.elements.buttonsContainer) {
            context.elements.cardWrapper.appendChild(context.elements.buttonsContainer);
        }
    }

    if (options.iconActions === true) {
        addActions(context.elements.iconContainer, context.config, context.config.entity);
    } else if (options.iconActions !== undefined && options.iconActions !== false) {
        addActions(context.elements.iconContainer, context.config, context.config.entity, options.iconActions);
    }

    if (options.buttonActions === true) {
        addActions(context.elements.background, context.config.button_action, context.config.entity);
    } else if (options.buttonActions !== undefined && options.buttonActions !== false) {
        addActions(context.elements.background, context.config.button_action, context.config.entity, options.buttonActions);
    }

    if (options.appendTo === context.content) {
        context.content.appendChild(context.elements.mainContainer);
    } else {
        options.appendTo.appendChild(context.elements.mainContainer);
    }

    return context.elements;
}
import { 
  setLayout
} from '../../tools/utils.js';
import { handleCustomStyles } from '../../tools/style-processor.js';

const DEFAULT_BOTTOM_OFFSET = 16;
const DEFAULT_PADDING_EXTRA = 16;

function getCardContainer(context) {
    return context.cardContainer || context.card.parentNode?.host?.parentNode?.parentNode;
}

function getHomeAssistantContainer(cardContainer) {
    const homeAssistant = document.querySelector("body > home-assistant");
    if (!homeAssistant?.shadowRoot) return cardContainer?.parentNode;

    const main = homeAssistant.shadowRoot.querySelector("home-assistant-main");
    if (!main?.shadowRoot) return cardContainer?.parentNode;

    const drawer = main.shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace");
    if (!drawer?.shadowRoot) return cardContainer?.parentNode;

    const root = drawer.shadowRoot.querySelector("hui-root");
    if (!root?.shadowRoot) return cardContainer?.parentNode;

    const sectionsView = root.shadowRoot.querySelector("#view > hui-view > hui-sections-view");
    return sectionsView || cardContainer?.parentNode;
}

function updateFooterPadding(card, container, context) {
    const measureCard = () => {
        const cardHeight = Number(card.offsetHeight || card.getBoundingClientRect().height) || 0;
        const bottomOffset = Number(context?.config?.footer_bottom_offset) || DEFAULT_BOTTOM_OFFSET;
        const padding = cardHeight + bottomOffset + DEFAULT_PADDING_EXTRA;
        
        container.style.paddingBottom = `${padding}px`;
    };

    requestAnimationFrame(() => {
        requestAnimationFrame(measureCard);
    });
}

function updateFooterBottomOffset(context) {
    const bottomOffset = context.config.footer_bottom_offset || DEFAULT_BOTTOM_OFFSET;
    context.card.style.setProperty('--bubble-footer-bottom', `${bottomOffset}px`);
}

function applyFooterPadding(context) {
    const cardContainer = getCardContainer(context);
    const haContainer = getHomeAssistantContainer(cardContainer);

    if (haContainer) {
        updateFooterPadding(context.card, haContainer, context);
    }
}

function setCardContainerPosition(context, position) {
    const cardContainer = getCardContainer(context);
    if (cardContainer?.classList.contains('card')) {
        cardContainer.style.position = position;
        context.cardContainer = cardContainer;
    }
}

function applyFooterModePositioning(context) {
    const cardContainer = getCardContainer(context);
    
    if (!cardContainer || cardContainer.style.position === '') {
        setCardContainerPosition(context, 'absolute');
    }
}

function resetCardContainerPosition(context) {
    if (context.cardContainer) {
        context.cardContainer.style.position = '';
    }
}

export function changeStyle(context) {
    setLayout(context);
    handleCustomStyles(context);
    
    if (context.config.footer_mode) {
        updateFooterBottomOffset(context);
        
        if (!context.editor) {
            applyFooterPadding(context);
        }
    }
}

export function changeEditor(context) {
    const detectedEditor = context.editor || context.detectedEditor;
    const hasEditorClass = context.card.classList.contains('editor');

    if (detectedEditor) {
        if (!hasEditorClass) {
            resetCardContainerPosition(context);
            context.card.classList.add('editor');
        }
        return;
    }

    if (hasEditorClass) {
        context.card.classList.remove('editor');
        
        if (context.config.footer_mode) {
            applyFooterModePositioning(context);
        } else {
            resetCardContainerPosition(context);
        }
    }
}
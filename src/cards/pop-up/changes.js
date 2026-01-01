import { getBackdrop } from "./create.js";
import { addHash, onEditorChange, removeHash, appendPopup, hideContent } from "./helpers.js";
import { checkConditionsMet, validateConditionalConfig, ensureArray } from '../../tools/validate-condition.js';
import { handleCustomStyles } from '../../tools/style-processor.js';
import { toggleBodyScroll, setLayout, createElement } from "../../tools/utils.js";

function isCardBeingEdited(context) {
    if (!context.editor && !context.detectedEditor) return false;
    
    const previewTags = ['hui-card-preview', 'hui-section-preview', 'element-preview'];
    
    try {
        let el = context.popUp;
        while (el) {
            if (el.tagName && previewTags.includes(el.tagName.toLowerCase())) return true;
            if (el.classList?.contains('element-preview')) return true;
            
            if (el.parentNode) {
                el = el.parentNode;
            } else if (el.getRootNode() instanceof ShadowRoot) {
                el = el.getRootNode().host;
            } else {
                break;
            }
        }
    } catch (e) {}
    
    return false;
}

function createEditorPlaceholder(context) {
    const placeholder = createElement('div', 'bubble-editor-placeholder');
    
    const icon = createElement('ha-icon');
    icon.icon = 'mdi:information-outline';
    
    const info = createElement('div', 'bubble-editor-placeholder-info');
    
    const hashText = createElement('div', 'bubble-editor-placeholder-hash');
    hashText.textContent = context.config.hash || 'No hash defined';
    
    const hint = createElement('div', 'bubble-editor-placeholder-hint');
    hint.textContent = 'Content hidden in edit mode for performance';
    
    info.appendChild(hashText);
    info.appendChild(hint);
    placeholder.appendChild(icon);
    placeholder.appendChild(info);
    
    return placeholder;
}

// Store pop-up content outside the DOM to prevent CPU usage from streams/heavy cards
function storePopUpContent(context) {
    if (!context.elements?.popUpContainer || context.storedContent) return;
    
    const container = context.elements.popUpContainer;
    const fragment = document.createDocumentFragment();
    
    const childrenToMove = [...container.children].filter(c => c.tagName !== 'STYLE');
    childrenToMove.forEach(child => fragment.appendChild(child));
    
    context.storedContent = fragment;
    container.appendChild(createEditorPlaceholder(context));
    container.classList.add('has-placeholder');
}

// Restore pop-up content back to the DOM
function restorePopUpContent(context) {
    if (!context.elements?.popUpContainer || !context.storedContent) return;
    
    const container = context.elements.popUpContainer;
    container.classList.remove('has-placeholder');
    container.querySelector('.bubble-editor-placeholder')?.remove();
    container.appendChild(context.storedContent);
    context.storedContent = null;
}

export function changeEditor(context) {
    if (!context.verticalStack || !context.popUp) return;

    const { popUp, sectionRow, sectionRowContainer, elements, config } = context;
    const isHAEditorModeActive = context.editor || context.detectedEditor;
    const isInPreview = isCardBeingEdited(context);
    const isCard = sectionRow?.tagName?.toLowerCase() === 'hui-card';

    // Generate unique instance ID for tracking newly created popups
    context.bubbleInstanceId = context.bubbleInstanceId || Math.random().toString(36).slice(2, 15);

    window.bubbleNewlyCreatedInstances = window.bubbleNewlyCreatedInstances || new Set();

    const isNewlyCreated = window.bubbleNewlyCreatedInstances.has(context.bubbleInstanceId) ||
                           (window.bubbleNewlyCreatedHashes?.has(config.hash) && isInPreview);

    if (isNewlyCreated && isInPreview) {
        window.bubbleNewlyCreatedInstances.add(context.bubbleInstanceId);
    }

    // Make sure popup container is visible when entering editor mode from dashboard
    if (isHAEditorModeActive && isCard && sectionRowContainer) {
        if (sectionRowContainer.style.display === "none") {
            sectionRowContainer.style.display = '';
            sectionRowContainer.style.position = '';
        }
    }

    if (isHAEditorModeActive) {
        if (!context.editorAccess) {
            toggleBodyScroll(false);
            popUp.classList.remove('is-popup-opened');
            popUp.classList.add('is-popup-closed', 'editor');
            elements?.content?.classList.add('popup-content-in-editor-mode');
            
            // Ensure popup is in the DOM when entering editor mode
            appendPopup(context, true);
            
            context.editorAccess = true;
            onEditorChange(context);
        }

        // Global listener to reset visibility states when editor dialog closes
        if (!window.bubbleDialogListenerAdded) {
            window.addEventListener("dialog-closed", () => {
                setTimeout(() => {
                    window.bubbleNewlyCreatedInstances?.clear();
                    window.bubbleNewlyCreatedHashes?.clear();
                    window.dispatchEvent(new Event('location-changed'));
                }, 100);
            }, { capture: true });
            window.bubbleDialogListenerAdded = true;
        }

        // Show content only if in preview or newly created instance
        if (isInPreview || isNewlyCreated) {
            restorePopUpContent(context);
        } else {
            storePopUpContent(context);
        }
    } else if (context.editorAccess) {
        elements?.content?.classList.remove('popup-content-in-editor-mode');
        restorePopUpContent(context);

        if (context.observer) {
            context.observer.disconnect();
            context.observer = null;
        }
        
        const popUpHash = config.hash ? (config.hash.startsWith('#') ? config.hash : '#' + config.hash) : '';

        if (popUpHash && location.hash === popUpHash) {
            popUp.classList.remove('editor', 'is-popup-closed');
            popUp.classList.add('is-popup-opened');
            toggleBodyScroll(true);
        } else {
            appendPopup(context, false);
            hideContent(context, 0);
            popUp.classList.remove('editor');
        }
        
        context.editorAccess = false;
    }
}

export function changeStyle(context) {
    const { backdropCustomStyle, updateBackdropStyles } = getBackdrop(context);

    setLayout(context, context.popUp);

    handleCustomStyles(context, context.popUp);
    // Backdrop styles are applied asynchronously to avoid blocking open animation
    if (typeof updateBackdropStyles === 'function') {
        updateBackdropStyles();
    } else {
        // Fallback for older contexts
        requestAnimationFrame(() => handleCustomStyles(context, backdropCustomStyle));
    }

    const showHeader = context.config.show_header ?? true;
    if (context.popUp.classList.contains('no-header') === showHeader) {
        context.popUp.classList.toggle('no-header', !showHeader);
    }
}

export function changeTriggered(context) {
    const triggerConditions = context.config.trigger;
    const triggerClose = context.config.trigger_close ?? true;

    if (triggerConditions) {
        const isInitialLoad = !context.hasPageLoaded;
        context.hasPageLoaded = true;

        const triggerConditions_array = ensureArray(triggerConditions);
        if (triggerConditions_array.length === 0) {
            context.previousTrigger = false;
            return;
        }

        if (validateConditionalConfig(triggerConditions_array)){
            const trigger = checkConditionsMet(triggerConditions_array,context._hass);

            if (trigger === context.previousTrigger) return;

            if (context.config.hash === location.hash) {
                if (!trigger && !isInitialLoad && triggerClose) {
                    removeHash();
                }
            } else {
                if (trigger) {
                    addHash(context.config.hash);
                }
            }  

            context.previousTrigger = trigger;          
        }
    } else {
        let triggerEntity = context.config.trigger_entity ?? '';

        if (triggerEntity === '') return;

        let triggerState = context.config.trigger_state ?? '';
        let triggerClose = context.config.trigger_close ?? false;
        let triggerEntityState = context._hass.states[triggerEntity]?.state;

        if (!triggerEntity) return;
        if (!triggerState) return;
        if (context.oldTriggerEntityState === triggerEntityState) return;

        const isInitialLoad = !context.hasPageLoaded;
        context.hasPageLoaded = true;

        if (context.config.hash === location.hash) {
            if (triggerClose && triggerState !== triggerEntityState) {
                if (!isInitialLoad) {
                    removeHash();
                }
            }
        } else {
            if (triggerEntityState === triggerState) {
                addHash(context.config.hash);
            }
        }

        context.oldTriggerEntityState = triggerEntityState;        
    }
}


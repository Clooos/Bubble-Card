import { getBackdrop } from "./create.js";
import { addHash, onEditorChange, removeHash, appendPopup, hideContent } from "./helpers.js";
import { checkConditionsMet, validateConditionalConfig, ensureArray } from '../../tools/validate-condition.js';
import { handleCustomStyles } from '../../tools/style-processor.js';
import { toggleBodyScroll, setLayout, createElement } from "../../tools/utils.js";

function isCardBeingEdited(context) {
    if (!context.detectedEditor) return false;
    
    try {
        // Check if this card is inside the editor preview
        let el = context.popUp;
        while (el) {
            if (el.tagName && el.tagName.toLowerCase() === 'hui-card-preview') return true;
            if (el.classList && el.classList.contains('element-preview')) return true;
            
            // Handle Shadow DOM
            if (el.parentNode) {
                el = el.parentNode;
            } else if (el.getRootNode() instanceof ShadowRoot) {
                el = el.getRootNode().host;
            } else {
                break;
            }
        }
        
        // Alternative check via root node
        const root = context.getRootNode();
        if (root instanceof ShadowRoot && root.host) {
             let host = root.host;
             while (host) {
                 if (host.tagName && host.tagName.toLowerCase() === 'hui-card-preview') return true;
                 host = host.parentElement || (host.getRootNode() instanceof ShadowRoot ? host.getRootNode().host : null);
             }
        }
    } catch (e) {
        console.error("Error checking editor status:", e);
    }
    
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
    if (!context.elements?.popUpContainer) return;
    if (context.storedContent) return; // Already stored
    
    const container = context.elements.popUpContainer;
    const fragment = document.createDocumentFragment();
    
    // Collect children to move, but KEEP <style> elements in the DOM
    const childrenToMove = [];
    for (const child of container.children) {
        if (child.tagName !== 'STYLE') {
            childrenToMove.push(child);
        }
    }
    
    // Move non-style children to the fragment (removes them from DOM)
    for (const child of childrenToMove) {
        fragment.appendChild(child);
    }
    
    context.storedContent = fragment;
    
    // Add placeholder
    const placeholder = createEditorPlaceholder(context);
    container.appendChild(placeholder);
    
    // Ensure container has some height/style to show background
    container.classList.add('has-placeholder');
}

// Restore pop-up content back to the DOM
function restorePopUpContent(context) {
    if (!context.elements?.popUpContainer) return;
    if (!context.storedContent) return; // Nothing to restore
    
    const container = context.elements.popUpContainer;
    
    // Remove placeholder class
    container.classList.remove('has-placeholder');
    
    // Remove placeholder
    const placeholder = container.querySelector('.bubble-editor-placeholder');
    if (placeholder) {
        placeholder.remove();
    }
    
    // Restore all children from the fragment
    container.appendChild(context.storedContent);
    context.storedContent = null;
}

export function changeEditor(context) {
    if (!context.verticalStack || !context.popUp) return;

    const { popUp, sectionRow, sectionRowContainer, elements, config } = context;
    const popUpClasses = popUp.classList;
    const isCard = sectionRow?.tagName.toLowerCase() === 'hui-card';
    const isHAEditorModeActive = context.editor || context.detectedEditor;

    if (context.detectedEditor && !context.dialogClosedListenerAdded) {
        window.addEventListener("dialog-closed", () => {
            // Only apply editor cropping and store content if this card was never actively edited
            // This prevents cropping/placeholder when closing more-info dialogs from the preview
            if (!context.wasBeingEdited && !isCardBeingEdited(context)) {
                if (elements?.popUpContainer) {
                    elements.popUpContainer.classList.add('editor-cropped');
                }
                storePopUpContent(context);
            }
            // Reset flag to allow re-adding listener for future dialog closes
            context.dialogClosedListenerAdded = false;
        }, { once: true });
        context.dialogClosedListenerAdded = true;
    } else if (!context.detectedEditor && context.dialogClosedListenerAdded) {
        context.dialogClosedListenerAdded = false;
    }

    const isPopUpEffectivelyOpened = popUpClasses.contains('is-popup-opened') && !popUpClasses.contains('editor');
    if (!isPopUpEffectivelyOpened && isCard && sectionRowContainer) {
        if (sectionRowContainer.classList.contains('card') && isHAEditorModeActive && sectionRowContainer.style.display === "none") {
            sectionRowContainer.style.display = '';
            // Restore normal position in editor mode
            sectionRowContainer.style.position = '';
        }
    }

    if (isHAEditorModeActive) {
        if (!context.editorAccess) {
            toggleBodyScroll(false);
            
            popUpClasses.remove('is-popup-opened');
            popUpClasses.add('is-popup-closed', 'editor');

            if (elements?.content) {
                elements.content.classList.add('popup-content-in-editor-mode');
            }

            if (!context.detectedEditor && elements?.popUpContainer) {
                elements.popUpContainer.classList.add('editor-cropped');
            }
            
            context.editorAccess = true;
            onEditorChange(context);
        }
        
        // Handle content visibility based on detectedEditor state
        // Use a persistent flag to remember if this card was being edited
        // This prevents placeholder from appearing when dialogs temporarily change DOM state
        if (isCardBeingEdited(context)) {
            context.wasBeingEdited = true;
            restorePopUpContent(context);
        } else if (!context.wasBeingEdited) {
            // Only store content if this card was never actively edited in this session
            storePopUpContent(context);
        }
    } else {
        if (context.editorAccess) {
            // Reset the "was being edited" flag when leaving editor mode
            context.wasBeingEdited = false;
            
            if (elements?.popUpContainer) {
                elements.popUpContainer.classList.remove('editor-cropped');
            }

            if (elements?.content) {
                elements.content.classList.remove('popup-content-in-editor-mode');
            }
            
            // Restore content when leaving editor mode
            restorePopUpContent(context);

            if (context.observer) {
                context.observer.disconnect();
                context.observer = null;
            }
            
            const currentHash = location.hash;
            const popUpHash = config.hash ? (config.hash.startsWith('#') ? config.hash : '#' + config.hash) : '';

            if (popUpHash && currentHash === popUpHash) {
                // Pop-up should be open, remove editor class and show it
                popUpClasses.remove('editor');
                popUpClasses.remove('is-popup-closed');
                popUpClasses.add('is-popup-opened');
                toggleBodyScroll(true);
            } else {
                // Pop-up should be closed, remove from DOM without animation
                // Keep editor class until after DOM removal to prevent animation
                appendPopup(context, false);
                hideContent(context, 0);
                popUpClasses.remove('editor');
            }
            
            context.editorAccess = false;
        }
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

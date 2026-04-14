import { getBackdrop } from './backdrop.js';
import { handlePopUpCards, setStandalonePopUpCardsActive } from './cards/index.js';
import { keepPopupHostMounted, restorePopupHostLayout } from './helpers.js';
import { isLegacyPopUpConfig } from './migration.js';
import { appendLegacyPopup, hideLegacyPopupContent } from './legacy.js';
import { createElement, toggleBodyScroll } from '../../tools/utils.js';

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
    const isLegacyPopUp = isLegacyPopUpConfig(context.config);

    const icon = createElement('ha-icon');
    icon.icon = 'mdi:information-outline';

    const info = createElement('div', 'bubble-editor-placeholder-info');
    const header = createElement('div', 'bubble-editor-placeholder-header');

    const hashText = createElement('div', 'bubble-editor-placeholder-hash');
    hashText.textContent = context.config.hash || 'No hash defined';
    header.appendChild(hashText);

    if (isLegacyPopUp) {
        const badge = createElement('span', 'bubble-badge bubble-editor-placeholder-badge');
        const badgeIcon = createElement('ha-icon');
        badgeIcon.icon = 'mdi:swap-horizontal-bold';
        badge.appendChild(badgeIcon);
        badge.appendChild(document.createTextNode('Migration available'));
        badge.title = 'Migration available';
        header.appendChild(badge);
    }

    const hint = createElement('div', 'bubble-editor-placeholder-hint');
    hint.textContent = 'Content hidden in edit mode for performance';

    info.appendChild(header);
    info.appendChild(hint);
    placeholder.appendChild(icon);
    placeholder.appendChild(info);

    return placeholder;
}

function showEditorPlaceholder(context) {
    const container = context.elements?.popUpContainer;
    if (!container) return;

    if (!container.querySelector('.bubble-editor-placeholder')) {
        container.appendChild(createEditorPlaceholder(context));
    }

    container.classList.add('has-placeholder');
}

function hideEditorPlaceholder(context) {
    const container = context.elements?.popUpContainer;
    if (!container) return;

    container.classList.remove('has-placeholder');
    container.querySelector('.bubble-editor-placeholder')?.remove();
}

function storePopupEditorContent(context) {
    if (context.isStandalonePopUp) {
        showEditorPlaceholder(context);
        return;
    }

    if (!context.elements?.popUpContainer || context.storedContent) return;

    const container = context.elements.popUpContainer;
    const fragment = document.createDocumentFragment();
    const childrenToMove = [...container.children].filter(child => child.tagName !== 'STYLE');

    childrenToMove.forEach(child => fragment.appendChild(child));

    context.storedContent = fragment;
    showEditorPlaceholder(context);
}

function restorePopupEditorContent(context) {
    if (context.isStandalonePopUp) {
        hideEditorPlaceholder(context);
        return;
    }

    if (!context.elements?.popUpContainer || !context.storedContent) return;

    const container = context.elements.popUpContainer;
    hideEditorPlaceholder(context);
    container.appendChild(context.storedContent);
    context.storedContent = null;
}

function setupLegacyVisibilityObserver(context) {
    if (context.observer) {
        context.observer.disconnect();
        context.observer = null;
    }

    if (context.sectionRow) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const isEditorActive = context.editor || context.detectedEditor;
                if (entry.isIntersecting && !context.isStandalonePopUp && !context.verticalStack.contains(context.popUp) && isEditorActive) {
                    context.verticalStack.appendChild(context.popUp);
                }
            });
        }, {
            rootMargin: '100px',
            threshold: 0.01
        });

        observer.observe(context.sectionRow);
        context.observer = observer;
    }
}

export function onEditorChange(context) {
    const { hideBackdrop } = getBackdrop(context);
    const detectedEditor = context.detectedEditor;
    const isEditorActive = context.editor || detectedEditor;

    if (isEditorActive) {
        hideBackdrop();
        clearTimeout(context.removeDomTimeout);

        if (!detectedEditor) {
            setupLegacyVisibilityObserver(context);
        }
        return;
    }

    if (context.observer) {
        context.observer.disconnect();
        context.observer = null;
    }
}

export function changeEditor(context) {
    if ((!context.verticalStack && !context.isStandalonePopUp) || !context.popUp) return false;

    const isHAEditorModeActive = context.editor || context.detectedEditor;
    let handledStandaloneCards = false;

    if (!isHAEditorModeActive && !context.editorAccess) {
        return handledStandaloneCards;
    }

    const { popUp, sectionRow, sectionRowContainer, elements, config } = context;
    const isInPreview = isCardBeingEdited(context);
    const isCard = sectionRow?.tagName?.toLowerCase() === 'hui-card';

    context.bubbleInstanceId = context.bubbleInstanceId || Math.random().toString(36).slice(2, 15);

    window.bubbleNewlyCreatedInstances = window.bubbleNewlyCreatedInstances || new Set();

    const isNewlyCreated = window.bubbleNewlyCreatedInstances.has(context.bubbleInstanceId) ||
        (window.bubbleNewlyCreatedHashes?.has(config.hash) && isInPreview);

    if (isNewlyCreated && isInPreview) {
        window.bubbleNewlyCreatedInstances.add(context.bubbleInstanceId);
    }

    if (isHAEditorModeActive && isCard && sectionRowContainer) {
        restorePopupHostLayout(context);
    }

    if (isHAEditorModeActive) {
        if (!context.editorAccess) {
            clearTimeout(context.hideContentTimeout);
            context.hideContentTimeout = null;

            toggleBodyScroll(false);
            popUp.classList.remove('is-popup-opened');
            popUp.classList.add('is-popup-closed', 'editor');
            popUp.style.display = '';
            popUp.style.visibility = '';
            elements?.content?.classList.add('popup-content-in-editor-mode');

            appendLegacyPopup(context, true);

            context.editorAccess = true;
            onEditorChange(context);
        }

        if (!window.__bubblePopupEditorDialogListenerAdded) {
            window.addEventListener('dialog-closed', () => {
                setTimeout(() => {
                    window.bubbleNewlyCreatedInstances?.clear();
                    window.bubbleNewlyCreatedHashes?.clear();
                    window.dispatchEvent(new Event('location-changed'));
                }, 100);
            }, { capture: true });
            window.__bubblePopupEditorDialogListenerAdded = true;
        }

        const keepContentMounted = isInPreview || isNewlyCreated;

        if (context.isStandalonePopUp) {
            setStandalonePopUpCardsActive(context, keepContentMounted);
            if (keepContentMounted) {
                restorePopupEditorContent(context);
            } else {
                storePopupEditorContent(context);
            }
            handlePopUpCards(context);
            handledStandaloneCards = true;
        } else if (keepContentMounted) {
            restorePopupEditorContent(context);
        } else {
            storePopupEditorContent(context);
        }

        return handledStandaloneCards;
    }

    if (context.editorAccess) {
        elements?.content?.classList.remove('popup-content-in-editor-mode');
        restorePopupEditorContent(context);

        if (context.observer) {
            context.observer.disconnect();
            context.observer = null;
        }

        const popUpHash = config.hash ? (config.hash.startsWith('#') ? config.hash : `#${config.hash}`) : '';

        if (context.isStandalonePopUp) {
            const shouldKeepCardsMounted = popUpHash ? location.hash === popUpHash : popUp.classList.contains('is-popup-opened');
            setStandalonePopUpCardsActive(context, shouldKeepCardsMounted);
            handlePopUpCards(context);
            handledStandaloneCards = true;
        }

        if (popUpHash && location.hash === popUpHash) {
            popUp.classList.remove('editor', 'is-popup-closed');
            popUp.classList.add('is-popup-opened');
            toggleBodyScroll(true);
        } else {
            popUp.classList.remove('editor');

            if (context.isStandalonePopUp) {
                popUp.style.display = '';
                popUp.style.visibility = '';
                keepPopupHostMounted(context);
            } else {
                appendLegacyPopup(context, false);
                hideLegacyPopupContent(context, 0);
            }
        }

        context.editorAccess = false;
    }

    return handledStandaloneCards;
}
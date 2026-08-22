import { getBackdrop } from './backdrop.js';
import setupTranslation, { getGlobalHass, ensureEditorTranslations } from '../../tools/localize.js';
import { isHaCardWrapper } from '../../tools/ha-boundary.js';
import { handlePopUpCards, setStandalonePopUpCardsActive } from './cards/index.js';
import { restorePopupHostLayout, suspendPopupHostLayout } from './helpers.js';
import { isLegacyPopUpConfig } from './migration.js';
import { appendLegacyPopup, hideLegacyPopupContent } from './legacy.js';
import { createElement, toggleBodyScroll } from '../../tools/utils.js';
import { isSuggestionPickerPreview } from '../../tools/lazy-preview.js';

function isCardBeingEdited(context) {
    if (!context.editor && !context.detectedEditor) return false;

    // The suggestion picker is a preview too, and the one that most needs the
    // real content: it is where a user decides whether to add the pop-up at all.
    // Home Assistant even truncates a preview's `cards` to six and offers a
    // "+ N more" badge for the rest, which only makes sense if they render.
    // Its wrapper is hui-suggestion-card, none of the tags below.
    if (isSuggestionPickerPreview(context)) return true;

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

    const hass = context._hass ?? getGlobalHass();
    // Dashboard edit mode can show this placeholder before any editor dialog
    // opened, so the dictionary fetch must be triggered from here too; its
    // arrival fires bubble-card-language-changed, which rebuilds this DOM.
    ensureEditorTranslations(hass);
    const t = setupTranslation(hass);

    const hashText = createElement('div', 'bubble-editor-placeholder-hash');
    hashText.textContent = context.config.hash || t('editor.placeholder.no_hash');
    header.appendChild(hashText);

    if (isLegacyPopUp) {
        const badge = createElement('span', 'bubble-badge bubble-editor-placeholder-badge');
        const badgeIcon = createElement('ha-icon');
        badgeIcon.icon = 'mdi:swap-horizontal-bold';
        badge.appendChild(badgeIcon);
        badge.appendChild(document.createTextNode(t('editor.migration.notice_available')));
        badge.title = t('editor.migration.notice_available');
        header.appendChild(badge);
    }

    const hint = createElement('div', 'bubble-editor-placeholder-hint');
    hint.textContent = t('editor.placeholder.hidden_content');

    info.appendChild(header);
    info.appendChild(hint);
    placeholder.appendChild(icon);
    placeholder.appendChild(info);

    return placeholder;
}

function showEditorPlaceholder(context) {
    const container = context.elements?.popUpContainer;
    if (!container) return;

    // Rebuilt on every pass: its text follows the active language, which can
    // change after the first render (switch flip, dictionary arriving).
    container.querySelector('.bubble-editor-placeholder')?.remove();
    container.appendChild(createEditorPlaceholder(context));

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
    const isCard = isHaCardWrapper(sectionRow);

    context.bubbleInstanceId = context.bubbleInstanceId || Math.random().toString(36).slice(2, 15);

    window.bubbleNewlyCreatedInstances = window.bubbleNewlyCreatedInstances || new Set();

    const isNewlyCreated = window.bubbleNewlyCreatedInstances.has(context.bubbleInstanceId) ||
        (window.bubbleNewlyCreatedHashes?.has(config.hash) && isInPreview);

    if (isNewlyCreated && isInPreview) {
        window.bubbleNewlyCreatedInstances.add(context.bubbleInstanceId);
    }

    // A closed pop-up collapses its hui-card wrapper with an inline display,
    // and entering edit mode has to give it back or the placeholder is built
    // inside a hidden ancestor and never shows. This used to wait for
    // `sectionRowContainer`, which only a sections view has, so a masonry view
    // never restored anything and the placeholder appeared only after a reload
    // straight into edit mode. applyPopupHostLayout already deals with the row
    // and the container separately, so there is nothing to wait for.
    if (isHAEditorModeActive && isCard) {
        restorePopupHostLayout(context);
    }

    if (isHAEditorModeActive) {
        // Re-attach popup shell to DOM if it was detached on close.
        // Without this, the placeholder is created inside a detached shell and never visible.
        if (context._standalonePopUpParent && context.popUp && !context.popUp.parentNode) {
            context._standalonePopUpParent.appendChild(context.popUp);
        }
        context._standalonePopUpParent = null;

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
                // Detach popup shell from DOM when leaving editor, same as
                // closeStandalonePopup — keeps shadow-root empty while closed.
                if (context.popUp?.parentNode) {
                    context._standalonePopUpParent = context.popUp.parentNode;
                    context.popUp.parentNode.removeChild(context.popUp);
                }
                // Always suspend host layout to hide the hui-card wrapper.
                // Shell detachment (shadow DOM) and host layout suspension (light DOM)
                // are independent — detaching the shell does not hide sectionRow.
                suspendPopupHostLayout(context);
            } else {
                appendLegacyPopup(context, false);
                hideLegacyPopupContent(context, 0);
            }
        }

        context.editorAccess = false;
    }

    return handledStandaloneCards;
}
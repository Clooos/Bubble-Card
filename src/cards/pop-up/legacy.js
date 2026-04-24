export function hideLegacyPopupContent(context, delay) {
    if (context.config.background_update) {
        context.popUp.style.display = 'none';
        return;
    }

    if (context.editor) {
        return;
    }

    context.hideContentTimeout = setTimeout(() => {
        const { sectionRow, sectionRowContainer } = context;

        if (sectionRow?.tagName?.toLowerCase() === 'hui-card') {
            sectionRow.hidden = true;
            sectionRow.style.display = 'none';

            if (sectionRowContainer?.classList.contains('card')) {
                sectionRowContainer.style.display = 'none';
                sectionRowContainer.style.position = '';
            }
        }
    }, delay);
}

export function displayLegacyPopupContent(context) {
    if (context.config.background_update) {
        context.popUp.style.display = '';
        return;
    }

    const { popUp } = context;
    popUp.style.transform = '';
    popUp.style.visibility = '';

    const { sectionRow, sectionRowContainer } = context;
    if (sectionRow?.tagName?.toLowerCase() === 'hui-card') {
        sectionRow.hidden = false;
        sectionRow.style.display = '';

        if (sectionRowContainer?.classList.contains('card')) {
            sectionRowContainer.style.display = '';
            sectionRowContainer.style.position = 'absolute';
        }
    }
}

export function appendLegacyPopup(context, append) {
    if (context.config.background_update || context.isStandalonePopUp || !context.verticalStack) {
        return;
    }

    if (append) {
        if (!context.verticalStack.contains(context.popUp)) {
            context.verticalStack.appendChild(context.popUp);
        }
        return;
    }

    if (context.verticalStack.contains(context.popUp)) {
        context.verticalStack.removeChild(context.popUp);
    }
}
function keepLegacyHostMounted(context) {
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

export function hideLegacyPopupContent(context, delay) {
    if (context.config.background_update) {
        context.popUp.style.display = 'none';
        return;
    }

    if (context.editor) {
        return;
    }

    context.hideContentTimeout = setTimeout(() => {
        context.popUp.style.transform = '';
        context.popUp.style.visibility = 'hidden';
        keepLegacyHostMounted(context);
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
    keepLegacyHostMounted(context);
}

export function appendLegacyPopup(context, append) {
    if (!append || context.config.background_update || context.isStandalonePopUp || !context.verticalStack) {
        return;
    }

    if (!context.verticalStack.contains(context.popUp)) {
        context.verticalStack.appendChild(context.popUp);
    }
}
import { createEditorCardStructure } from './create.js';
import { createEditorActions } from './helpers.js';

export function createEditorCardElements(context, cards, options) {
    const actions = createEditorActions(context, options.rebuildCards);

    createEditorCardStructure(context, cards, {
        createCard: options.createCard,
        applyCardWrapperLayout: options.applyCardWrapperLayout,
        bindCardLayoutUpdates: options.bindCardLayoutUpdates,
        actions,
    });
}
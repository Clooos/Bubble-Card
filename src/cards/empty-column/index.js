import { createStructure } from './create.js';

export function handleEmptyColumn(context) {
    if (context.cardType !== "empty-column") {
        createStructure(context);
    }
}

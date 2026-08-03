import { createStructure } from './create.js';
import { changeHeight } from './changes.js';

export function handleEmptyColumn(context) {
    if (context.cardType !== "empty-column") {
        createStructure(context);
    }

    changeHeight(context);
}

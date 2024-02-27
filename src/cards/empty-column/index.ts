import { createStructure } from './create.ts';

export function handleEmptyColumn(context) {
    if (context.cardType !== "empty-column") {
        createStructure(context);
    }
}

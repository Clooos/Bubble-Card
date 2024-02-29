import { changeEditor, changeLight, changeStatus, changeStyle, placeButtons, sortButtons } from './changes.ts';
import { createStructure } from './create.ts';

export function handleHorizontalButtonsStack(context) {
    if (context.cardType !== "horizontal-buttons-stack") {
        createStructure(context);
    }

    setTimeout(() => {
      sortButtons(context);
      placeButtons(context);
      changeEditor(context);
      changeLight(context);
      changeStatus(context);
      changeStyle(context);
    });
}

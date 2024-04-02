import {
  changeIcon,
  changeName,
  changeState,
  changeStyle,
} from './changes.ts'
import { createStructure } from './create.ts';

export function handleCover(context) {
    if (context.cardType !== "cover") {
        createStructure(context);
    }

    changeIcon(context);
    changeName(context);
    changeState(context);
    changeStyle(context);
}

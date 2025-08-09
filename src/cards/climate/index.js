import { changeState, changeIcon, changeName, changeStatus } from "../../components/base-card/changes.js";
import { changeSubButtons } from "../../components/sub-button/changes.js";
import {
  changeCoverIcons,
  changeStyle,
} from './changes.js'
import { createStructure } from './create.js';

export function handleCover(context) {
    if (context.cardType !== "cover") {
        createStructure(context);
    }

    changeStatus(context);
    changeIcon(context);
    changeName(context);
    changeState(context);
    changeCoverIcons(context);
    changeSubButtons(context);
    changeStyle(context);
}

import { changeState, changeIcon, changeName, changeStatus } from "../../components/base-card/changes.js";
import { changeSubButtons } from "../../components/sub-button/changes.js";
import {
    changeTemperature,
    changeTargetTempLow,
    changeTargetTempHigh,
    changeStyle
} from './changes.js';
import { createStructure } from './create.js';

export function handleClimate(context) {
    if (context.cardType !== 'climate') {
        createStructure(context);
    }

    changeStatus(context);
    changeName(context);
    changeIcon(context);
    changeState(context);
    changeTemperature(context);
    changeTargetTempLow(context);
    changeTargetTempHigh(context);
    changeSubButtons(context);
    changeStyle(context);
}

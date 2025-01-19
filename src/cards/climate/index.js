import { changeState, changeSubButtonState } from "../../tools/global-changes.js";
import {
    changeStatus,
    changeName,
    changeTemperature,
    changeTargetTempLow,
    changeTargetTempHigh,
    changeDisplayedInfo,
    changeIcon,
    changeSlider,
    changeStyle
} from './changes.js';
import {
    createStructure
} from './create.js';

export function handleClimate(context) {
    if (context.cardType !== `climate`) {
        createStructure(context);
    }

    changeStatus(context);
    changeName(context);
    changeIcon(context);
    changeState(context);
    changeTemperature(context);
    changeTargetTempLow(context);
    changeTargetTempHigh(context);
    changeSubButtonState(context, context.content, context.elements.buttonContainer, true);
    changeStyle(context);
}

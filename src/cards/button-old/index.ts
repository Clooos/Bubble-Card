import { changeState, changeSubButtonState } from "../../tools/global-changes.ts";
import {
    changeStatus,
    changeButton,
    changeName,
    changeIcon,
    changeSlider,
    changeStyle
} from './changes.ts'
import { getButtonType } from './helpers.ts';
import {
    createCustomStructure,
    createSliderStructure,
    createStateStructure,
    createStructure,
    createSwitchStructure
} from './create.ts';

export function handleButton(context, cardContainer) {
    const buttonType = getButtonType(context);

    if (!context.cardType) {
        if (!cardContainer) {
            createStructure(context, cardContainer);
        }

        if (buttonType === 'switch') {
            createSwitchStructure(context);
        } else if (buttonType === 'slider') {
            createSliderStructure(context);
        } else if (buttonType === 'state') {
            createStateStructure(context);
        } else if (buttonType === 'custom') {
            createCustomStructure(context);
        }
    }

    changeStatus(context);
    changeButton(context);
    changeName(context);
    changeIcon(context);
    changeState(context);
    changeSlider(context);
    changeSubButtonState(context)
    changeStyle(context);
}

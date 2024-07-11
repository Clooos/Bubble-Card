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
    createNameStructure,
    createSliderStructure,
    createStateStructure,
    createStructure,
    createSwitchStructure
} from './create.ts';

export function handleButton(context, container = context.content, appendTo = container) {
    const buttonType = getButtonType(context);
    if (context.cardType !== `button-${buttonType}` && context.buttonType !== buttonType) {
        createStructure(context, container, appendTo);

        if (buttonType === 'switch') {
            createSwitchStructure(context);
        } else if (buttonType === 'slider') {
            createSliderStructure(context);
        } else if (buttonType === 'state') {
            createStateStructure(context);
        } else if (buttonType === 'name') {
            createNameStructure(context);
        }
    }

    if (buttonType !== 'name') {
        changeStatus(context);
        changeButton(context);
        changeSlider(context);
    }

    changeIcon(context);
    changeName(context);
    changeState(context);
    changeSubButtonState(context, container, context.elements.buttonCard);
    if (context.cardType !== 'pop-up') changeStyle(context);
}
import { changeState, changeIcon, changeName } from "../../components/base-card/changes.js";
import { changeSubButtons } from "../../components/sub-button/changes.js";
import {
    changeStatus,
    changeButton,
    changeSlider,
    changeStyle
} from './changes.js'
import { getButtonType } from './helpers.js';
import { createStructure } from './create.js';

export function handleButton(context, appendTo = context.content) {
    const buttonType = getButtonType(context);
    if (context.cardType !== `button` && context.buttonType !== buttonType) {
        createStructure(context, appendTo);
    }

    if (buttonType !== 'name') {
        changeStatus(context);
        changeButton(context);
    }

    changeSlider(context);
    changeIcon(context);
    changeName(context);
    changeState(context);
    changeSubButtons(context);
    if (context.cardType !== 'pop-up') changeStyle(context);
}
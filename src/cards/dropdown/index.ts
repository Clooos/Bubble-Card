import { changeState, changeSubButtonState } from "../../tools/global-changes.ts";
import {
    changeStatus,
    changeName,
    changeIcon,
    changeStyle
} from './changes.ts'
import {
    createStructure,
    createDropdownActions
} from './create.ts';

export function handleSelect(context) {
    const cardType = context.cardType;

    if (context.cardType !== "select") {
        createStructure(context);
        createDropdownActions(context);
    }

    changeStatus(context);
    changeIcon(context);
    changeName(context);
    changeState(context);
    changeSubButtonState(context, context.content, context.elements.dropdownContainer, true);
    changeStyle(context);
}
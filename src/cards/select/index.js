import { changeState, changeSubButtonState } from "../../tools/global-changes.js";
import {
    changeStatus,
    changeName,
    changeIcon,
    changeStyle,
    changeDropdownList
} from './changes.js'
import {
    createStructure,
    createDropdownStructure,
    createDropdownActions
} from './create.js';

export function handleSelect(context) {
    const cardType = context.cardType;

    if (context.cardType !== "select") {
        createStructure(context);
        createDropdownStructure(context);
        createDropdownActions(context);
    }

    changeDropdownList(context, context.elements, context.config.entity, context.config);
    changeStatus(context);
    changeIcon(context);
    changeName(context);
    changeState(context);
    changeSubButtonState(context, context.content, context.elements.dropdownContainer, true);
    changeStyle(context);
}
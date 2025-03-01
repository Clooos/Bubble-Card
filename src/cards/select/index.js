import { changeState, changeIcon, changeName, changeStatus } from "../../components/base-card/changes.js";
import { changeSubButtons } from "../../components/sub-button/changes.js";
import { createDropdownStructure, createDropdownActions } from "../../components/dropdown/index.js";
import { changeDropdownList } from "../../components/dropdown/changes.js";
import { changeStyle } from './changes.js'
import { createStructure } from './create.js';

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
    changeSubButtons(context);
    changeStyle(context);
}
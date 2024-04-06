import { changeEditor, changeIcon, changeLight, changeName, changeState, changeStatus, changeStyle, changeTriggered } from './changes.ts';
import { createHeader, createStructure, prepareStructure } from './create.ts';
import { configChanged } from "../../tools/utils.ts";
import { handleButton } from "../../cards/button/index.ts";
import { getButtonType } from "../../cards/button/helpers.ts";

export async function handlePopUp(context) {
  if (context.cardType !== "pop-up") {
      if ((context.getRootNode() instanceof ShadowRoot) === false) {
        // The card is not added in the DOM
        return;
      }
      prepareStructure(context);
      createStructure(context);
      createHeader(context);
  } else if (context.config.entity || context.config.name) {
      const buttonType = getButtonType(context);
      const state = context._hass.states[context.config.entity];
      if (buttonType === 'name' || state !== context.previousState) {
          handleButton(context, context.elements.buttonContainer, context.elements.header);
          context.previousState = state;
      }
  }

  if (
      context.cardType !== "pop-up" || 
      context.popUp.classList.contains('is-popup-opened') ||
      configChanged(context, context.popUp)
  ){
      changeStyle(context);
  }

  changeTriggered(context);
  changeEditor(context);
}

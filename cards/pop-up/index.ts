import { changeEditor, changeIcon, changeLight, changeName, changeState, changeStatus, changeStyle, changeTriggered } from './changes.ts';
import { createHeader, createStructure, prepareStructure } from './create.ts';
import { configChanged } from "../../tools/utils.ts";

export async function handlePopUp(context) {
  if (context.cardType !== "pop-up") {
      if ((context.getRootNode() instanceof ShadowRoot) === false) {
        // The card is not added in the DOM
        return;
      }
      prepareStructure(context);
      createStructure(context);
      createHeader(context);
  }

  if (
      context.cardType !== "pop-up" || 
      context.popUp.classList.contains('is-popup-opened') ||
      configChanged(context, context.popUp)
  ){
      changeIcon(context);
      changeLight(context);
      changeName(context);
      changeStatus(context);
      changeStyle(context);
  }

  changeTriggered(context);
  changeEditor(context);
}

import { changeState, changeSubButtonState } from "../../tools/global-changes.ts";
import { changeEditor, changeLight, changeStyle, changeTriggered } from './changes.ts';
import { 
    changeStatus,
    changeButton,
    changeName,
    changeIcon,
    changeSlider
} from '../button/changes.ts';
import { createHeader, createStructure, prepareStructure } from './create.ts';
import {
    createStructure as createButtonStructure,
    createCustomStructure,
    createSliderStructure,
    createStateStructure,
    createSwitchStructure
} from '../button/create.ts';
import { handleButton } from '../button/index.ts';
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

      //createButtonStructure(context, context.popUp);

      // const buttonType = getButtonType(context);
      // createSwitchStructure(context, context.popUp);

      // if (buttonType) {
      //     //createStructure(context);
      //     console.log(buttonType)

      //     if (buttonType === 'switch') {
      //         createSwitchStructure(context, context.popUp);
      //     } else if (buttonType === 'slider') {
      //         createSliderStructure(context, context.popUp);
      //     } else if (buttonType ==='state') {
      //         createStateStructure(context, context.popUp);
      //     } else if (buttonType ==='custom') {
      //         createCustomStructure(context, context.popUp);
      //     }
      // }
  }

  
      handleButton(context, context.popUp);
  

  if (
      context.cardType !== "pop-up" || 
      context.popUp.classList.contains('is-popup-opened') ||
      configChanged(context, context.popUp)
  ){
      //changeButton(context, context.popUp);
      //changeIcon(context);
      //changeLight(context);
      //changeName(context);
      //changeState(context);
      //changeStatus(context);
      changeStyle(context);
  }

  changeTriggered(context);
  changeEditor(context);
}

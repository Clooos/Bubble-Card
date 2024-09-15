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
      createHeader(context);
      if (context.config.entity || context.config.name) {
          handleButton(context, context.elements.buttonContainer, context.elements.header);
      }
      createStructure(context);
      changeStyle(context);
  }

  if (
      context.popUp.classList.contains('is-popup-opened') ||
      configChanged(context, context.popUp)
  ){
      if (context.config.entity || context.config.name) {
          handleButton(context, context.elements.buttonContainer, context.elements.header);
      }

      changeStyle(context);
  }

  changeTriggered(context);
  changeEditor(context);
}

// TESTS

// import { changeEditor, changeIcon, changeLight, changeName, changeState, changeStatus, changeStyle, changeTriggered } from './changes.ts';
// import { createHeader, createStructure, prepareStructure, manageEvents } from './create.ts';
// import { handleButton } from "../../cards/button/index.ts";
// import { getButtonType } from "../../cards/button/helpers.ts";

// export async function handlePopUp(context) {
//   if (context.cardType !== "pop-up") {
//       if ((context.getRootNode() instanceof ShadowRoot) === false) {
//         // The card is not added in the DOM
//         return;
//       }
//       prepareStructure(context);
//       createHeader(context);
//       if (
//           (context.config.show_header ?? true) && 
//           (context.config.entity || context.config.name)
//       ){
//           handleButton(context, context.elements.buttonContainer, context.elements.header);
//       }
//       createStructure(context);
//       manageEvents(context);
//       changeStyle(context);
//   }

//   if (context.config.hash === location.hash){
//       if (
//           (context.config.show_header ?? true) && 
//           (context.config.entity || context.config.name)
//       ){
//           handleButton(context, context.elements.buttonContainer, context.elements.header);
//       }

//       changeStyle(context);
//       //console.log(context.isConnected, context.config.hash, context.popUp)
//   } else {

//   }

//   //manageEvents(context);
//   changeTriggered(context);
//   changeEditor(context);
// }
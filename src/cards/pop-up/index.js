import { changeEditor, changeIcon, changeLight, changeName, changeState, changeStatus, changeStyle, changeTriggered } from './changes.js';
import { createHeader, createStructure, prepareStructure } from './create.js';
import { configChanged } from "../../tools/utils.js";
import { handleButton } from "../../cards/button/index.js";
import { getButtonType } from "../../cards/button/helpers.js";

export async function handlePopUp(context) {
  if (context.cardType !== "pop-up") {
      if ((context.getRootNode() instanceof ShadowRoot) === false) {
        // The card is not added in the DOM
        return;
      }

      prepareStructure(context);
      createHeader(context);
      createStructure(context);
  } else if (context.popUp && context.elements) {
      if ((context.config.hash === location.hash || context.editor) || context.config !== context.previousConfig) {
          changeStyle(context);

          if (context.config.entity || context.config.name) {
              handleButton(context, context.elements.header);
          }

          context.previousConfig = context.config;
      }

      if (!context.editor) {
          changeTriggered(context);
      }
      
      changeEditor(context);
  }
}
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
      createStructure(context);
  } else if (context.elements) {
      if (context.config.hash === location.hash || context.config !== context.previousConfig) {
          if (context.config.entity || context.config.name) {
              handleButton(context, context.elements.buttonContainer, context.elements.header);
          }

          requestAnimationFrame(() => {
            changeStyle(context);
          });

          context.previousConfig = context.config;
      }

      if (!context.editor) {
          changeTriggered(context);
      }
      
      changeEditor(context);
  }
}
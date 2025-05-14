import { changeEditor, changeStyle, changeTriggered } from './changes.js';
import { createHeader, createStructure, prepareStructure } from './create.js';
import { handleButton } from "../../cards/button/index.js";

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
      if (context.config.hash === location.hash || context.editor) {
          if (context.config.entity || context.config.name) {
              handleButton(context, context.elements.header);
          }

          requestAnimationFrame(() => {
              changeStyle(context);
          });
      }

      if (!context.editor) {
          requestAnimationFrame(() => {
              changeTriggered(context);
          });
      }
      
      changeEditor(context);
  }
}
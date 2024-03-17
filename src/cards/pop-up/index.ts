import { changeEditor, changeIcon, changeLight, changeName, changeState, changeStatus, changeStyle, changeTriggered } from './changes.ts';
import { createHeader, createStructure, prepareStructure } from './create.ts';

export async function handlePopUp(context) {
  if (context.cardType !== "pop-up") {
      prepareStructure(context);
      createStructure(context);
      createHeader(context);
  }

  changeEditor(context);
  changeIcon(context);
  changeLight(context);
  changeName(context);
  changeState(context);
  changeStatus(context);
  changeStyle(context);
  changeTriggered(context);
}

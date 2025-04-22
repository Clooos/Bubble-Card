export { createSubButtonStructure } from './create.js';
export { updateSubButtons } from './changes.js';

export function handleSubButtons(context, options = {}) {
  const subButtonContainer = createSubButtonStructure(context, options);
  if (context.config.sub_button) {
    updateSubButtons(context, context.config.sub_button);
  }
  return subButtonContainer;
}
import { setLayout } from '../../tools/utils.js';
import { handleCustomStyles } from '../../tools/style-processor.js';

export function changeStyle(context) {
  setLayout(context);
  handleCustomStyles(context);
}

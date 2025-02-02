import { changeEventList, changeEvents } from './changes.js'
import { changeSubButtons } from "../../components/sub-button/changes.js";
import { createStructure } from './create.js';
import { changeStyle } from './changes.js'

export function handleCalendar(context) {
  if (context.cardType !== `calendar`) {
    createStructure(context);
  }

  const cacheKey = JSON.stringify(context.config.entities.map(e => context._hass.states[e.entity])); 

  if (context.cacheKey !== cacheKey) {
    context.cacheKey = cacheKey;

    // Force refresh every 15 minutes
    setTimeout(() => {
      context.cacheKey = '';
    }, 1000 * 60 * 15);

    changeEventList(context).then(() => {
      changeEvents(context);
    });
  }

  changeStyle(context);
  changeSubButtons(context);
}
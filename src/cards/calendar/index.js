import { updateCalendarSubscriptions } from './subscriptions.js';
import { changeEventList, changeEvents } from './changes.js'
import { changeSubButtons } from "../../components/sub-button/changes.js";
import { createStructure } from './create.js';
import { changeStyle } from './changes.js'

async function refreshCalendar(context, isCurrent = () => true) {
  const request = context._calendarRequest = (context._calendarRequest || 0) + 1;
  const snapshot = { config: context.config, _hass: context._hass };
  await changeEventList(snapshot);
  if (context._calendarRequest === request && context.isConnected !== false && isCurrent()) {
    context.events = snapshot.events;
    changeEvents(context);
  }
}

export function handleCalendar(context) {
  if (context.cardType !== `calendar`) {
    createStructure(context);
  }

  updateCalendarSubscriptions(context, (isCurrent) => refreshCalendar(context, isCurrent));

  const cacheKey = JSON.stringify(context.config.entities.map(e => context._hass?.states?.[e.entity])); 

  if (context.cacheKey !== cacheKey) {
    context.cacheKey = cacheKey;

    // Force refresh every 15 minutes
    clearTimeout(context._calendarRefreshTimer);
    context._calendarRefreshTimer = setTimeout(() => {
      context.cacheKey = '';
    }, 1000 * 60 * 15);

    refreshCalendar(context);
  }

  changeStyle(context);
  changeSubButtons(context);
}
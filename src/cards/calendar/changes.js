import { setLayout, applyScrollingEffect } from "../../tools/utils.js";
import { handleCustomStyles } from '../../tools/style-processor.js';
import setupTranslation from "../../tools/localize.js";
import { addActions } from "../../tools/tap-actions.js";
import { hashCode, intToRGB } from "./helpers.js";

function dateDiffInMinutes(a, b) {
  const MS_PER_MINUTES = 1000 * 60;

  return Math.floor((b - a) / MS_PER_MINUTES);
}

function parseEventDateTime(event) {
  if (event.date) {
    const parts = event.date.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }

  return new Date(event.dateTime);
}

const getEventDateKey = (eventStart) => {
  const d = parseEventDateTime(eventStart);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const dayOfMonth = d.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${dayOfMonth}`;
};

export async function changeEventList(context) {
  const daysOfEvents = context.config.days ?? 7;

  const start = new Date().toISOString();
  const end = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * daysOfEvents).toISOString();
  const params = `start=${start}&end=${end}`;

  const promises = context.config.entities.map(async (entity) => {
    const url = `calendars/${entity.entity}?${params}`;
    const events = await context._hass.callApi("get", url);

    return events.map(e => ({...e, entity}));
  });

  const events = await Promise.all(promises);

  context.events = events.flat()
    .sort((a, b) => {
      const dateA = parseEventDateTime(a.start);
      const dateB = parseEventDateTime(b.start);

      const isAllDayA = a.start.date !== undefined;
      const isAllDayB = b.start.date !== undefined;

      if (isAllDayA && !isAllDayB) {
        return -1;
      }
      if (!isAllDayA && isAllDayB) {
        return 1;
      }

      return dateA.getTime() - dateB.getTime();
    })
    .slice(0, context.config.limit ?? undefined);
}

export async function changeEvents(context) {
  const t = setupTranslation(context._hass);
  const eventsGroupedByDay = context.events.reduce((acc, event) => {
    const dayKey = getEventDateKey(event.start);
    if (!acc[dayKey]) {
      acc[dayKey] = [];
    }
    acc[dayKey].push(event);
    return acc;
  }, {});

  if (Object.keys(eventsGroupedByDay).length === 0) {
    const today = new Date().toISOString().split('T')[0];
    eventsGroupedByDay[today] = [{
      start: { date: today },
      end: { date: today },
      summary: 'No events',
      entity: { color: 'transparent' }
    }];
  }

  context.elements.calendarCardContent.innerHTML = '';

  Object.keys(eventsGroupedByDay).sort().forEach((day) => {
    const eventDay = parseEventDateTime({date: day});
    const today = new Date();
    const dayNumber = document.createElement('div');
    const getCurrentLocale = context._hass.locale.language;
    dayNumber.classList.add('bubble-day-number');
    dayNumber.innerHTML = `${eventDay.getDate()}`;

    const dayMonth = document.createElement('div');
    dayMonth.classList.add('bubble-day-month');
    dayMonth.innerHTML = eventDay.toLocaleString(getCurrentLocale, { month: 'short' });

    const dayChip = document.createElement('div');
    dayChip.classList.add('bubble-day-chip');
    dayChip.appendChild(dayNumber);
    dayChip.appendChild(dayMonth);
    if (eventDay.getDate() === today.getDate() && eventDay.getMonth() === today.getMonth()) {
      dayChip.classList.add('is-active');
    }

    const dayEvents = document.createElement('div');
    dayEvents.classList.add('bubble-day-events');

    eventsGroupedByDay[day].forEach((event) => {
      const isAllDay = event.start.date !== undefined;
      const now = new Date();
      const eventStart = parseEventDateTime(event.start);
      const eventEnd = parseEventDateTime(event.end);

      const eventTime = document.createElement('div');
      eventTime.classList.add('bubble-event-time');
      eventTime.innerHTML = isAllDay ? t("cards.calendar.all_day") : eventStart.toLocaleTimeString(getCurrentLocale, { hour: 'numeric', minute: 'numeric' });
      if (!isAllDay && context.config.show_end === true) {
        eventTime.innerHTML += ` – ${eventEnd.toLocaleTimeString(getCurrentLocale, { hour: 'numeric', minute: 'numeric' })}`;
      }

      const eventName = document.createElement('div');
      eventName.classList.add('bubble-event-name');
      
      const eventText = event.summary || t("cards.calendar.busy");
      applyScrollingEffect(context, eventName, eventText);

      const eventColor = document.createElement('div');
      eventColor.classList.add('bubble-event-color');
      eventColor.style.backgroundColor = event.entity.color
        ? event.entity.color.startsWith('#')
          ? event.entity.color
          : `var(--${event.entity.color}-color)`
        : intToRGB(hashCode(event.entity.entity));
      if (event.entity.color === 'transparent') {
        eventColor.style.display = 'none';
      }

      const eventLine = document.createElement('div');
      eventLine.classList.add('bubble-event');
      eventLine.appendChild(eventColor);
      eventLine.appendChild(eventTime);
      eventLine.appendChild(eventName);
      addActions(eventLine, { ...context.config, entity: event.entity.entity });

      const activeColor = 'var(--bubble-event-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))';

      if (context.config.show_progress === true && isAllDay && eventStart < now) {
        eventLine.style.setProperty('--bubble-event-background-color', activeColor);
      } else if (context.config.show_progress === true && !isAllDay && eventStart < now) {
        const durationDiff = dateDiffInMinutes(eventStart, eventEnd);
        const startDiff = dateDiffInMinutes(eventStart, now);
        const percentage = 100 * startDiff / durationDiff;

        eventLine.style.setProperty('--bubble-event-background-image', `linear-gradient(to right, ${activeColor} ${percentage}%, transparent ${percentage}%)`);
      }
      
      dayEvents.appendChild(eventLine);
    });

    const dayWrapper = document.createElement('div');
    dayWrapper.classList.add('bubble-day-wrapper');
    dayWrapper.appendChild(dayChip);
    dayWrapper.appendChild(dayEvents);

    context.elements.calendarCardContent.appendChild(dayWrapper);

    if (context.elements.mainContainer.scrollHeight > context.elements.mainContainer.offsetHeight) {
      context.content.classList.add('is-overflowing');
    }
  });

}

export function changeStyle(context) {
    setLayout(context);
    handleCustomStyles(context);
}
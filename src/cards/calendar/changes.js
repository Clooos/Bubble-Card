import { createElement, setLayout, applyScrollingEffect } from "../../tools/utils.js";
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

  const fragment = new DocumentFragment();

  Object.keys(eventsGroupedByDay).sort().forEach((day) => {
    const eventDay = parseEventDateTime({date: day});
    const today = new Date();
    const dayNumber = createElement('div', 'bubble-day-number');
    const getCurrentLocale = context._hass.locale.language;
    dayNumber.innerHTML = `${eventDay.getDate()}`;

    const dayMonth = createElement('div', 'bubble-day-month');
    dayMonth.innerHTML = eventDay.toLocaleString(getCurrentLocale, { month: 'short' });

    const dayChip = createElement('div', 'bubble-day-chip');
    dayChip.appendChild(dayNumber);
    dayChip.appendChild(dayMonth);
    if (eventDay.getDate() === today.getDate() && eventDay.getMonth() === today.getMonth()) {
      dayChip.classList.add('is-active');
    }
    
    addActions(dayChip, { 
      ...context.config, 
    }, null);

    const dayEvents = createElement('div', 'bubble-day-events');

    eventsGroupedByDay[day].forEach((event) => {
      const isAllDay = event.start.date !== undefined;
      const now = new Date();
      const eventStart = parseEventDateTime(event.start);
      const eventEnd = parseEventDateTime(event.end);

      const eventTime = createElement('div', 'bubble-event-time');
      eventTime.innerHTML = isAllDay ? t("cards.calendar.all_day") : eventStart.toLocaleTimeString(getCurrentLocale, { hour: 'numeric', minute: 'numeric' });
      if (!isAllDay && context.config.show_end === true) {
        eventTime.innerHTML += ` – ${eventEnd.toLocaleTimeString(getCurrentLocale, { hour: 'numeric', minute: 'numeric' })}`;
      }

      const eventNameWrapper = createElement('div', 'bubble-event-name-wrapper');
      const eventName = createElement('div', 'bubble-event-name');

      const eventText = event.summary || t("cards.calendar.busy");
      applyScrollingEffect(context, eventName, eventText);
      eventName.innerHTML = eventText;
      eventNameWrapper.appendChild(eventName);

      const eventColor = createElement('div', 'bubble-event-color');
      eventColor.style.backgroundColor = event.entity.color
        ? event.entity.color.startsWith('#')
          ? event.entity.color
          : `var(--${event.entity.color}-color)`
        : intToRGB(hashCode(event.entity.entity));
      if (event.entity.color === 'transparent') {
        eventColor.style.display = 'none';
      }

      if (context.config.show_place === true && event.location !== null) {
        const eventPlace = createElement('div', 'bubble-event-place');
        eventPlace.innerHTML = event.location;

        applyScrollingEffect(context, eventPlace, event.location);

        eventNameWrapper.appendChild(eventPlace);
      }

      const eventLine = createElement('div', 'bubble-event');
      eventLine.appendChild(eventColor);
      eventLine.appendChild(eventTime);
      eventLine.appendChild(eventNameWrapper);

      addActions(
        eventLine, 
        context.config.event_action,
        event.entity.entity,
        {
          tap_action: { action: "none" },
          double_tap_action: { action: "none" },
          hold_action: { action: "none" }
        }
      );

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

    const dayWrapper = createElement('div', 'bubble-day-wrapper');
    dayWrapper.appendChild(dayChip);
    dayWrapper.appendChild(dayEvents);

    fragment.appendChild(dayWrapper);

    if (context.elements.mainContainer.scrollHeight > context.elements.mainContainer.offsetHeight) {
      context.content.classList.add('is-overflowing');
    }
  });

  context.elements.calendarCardContent.innerHTML = '';
  context.elements.calendarCardContent.appendChild(fragment);
}

export function changeStyle(context) {
    setLayout(context);
    handleCustomStyles(context);
}
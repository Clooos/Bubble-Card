export function hashCode(str) {
  return Array.from(str).reduce(
    (hash, letter) => letter.charCodeAt(0) + ((hash << 5) - hash),
    0
  );
}

export function intToRGB(i) {
  const c = (i & 0x00ffffff).toString(16).toUpperCase();

  return "#" + "00000".substring(0, 6 - c.length) + c;
}

export function getDayKey(date) {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const dayOfMonth = date.getDate().toString().padStart(2, '0');
  return `${date.getFullYear()}-${month}-${dayOfMonth}`;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Built from the calendar fields so daylight saving shifts never move the boundary
function nextDay(day) {
  return new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
}

function dayBoundary(day, isAllDay) {
  return isAllDay ? { date: getDayKey(day) } : { dateTime: day.toISOString() };
}

export function parseEventDateTime(event) {
  if (event.date) {
    const parts = event.date.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }

  return new Date(event.dateTime);
}

/**
 * Splits every event covering more than one day into one occurrence per day it
 * covers, the way Home Assistant's own calendar does. Each occurrence carries
 * the start and the end of its own day, so sorting, filtering and rendering all
 * reason about the day at hand instead of the whole span.
 *
 * The day range follows the same rules as Home Assistant:
 * - an all-day end date is exclusive (a holiday from the 1st to the 3rd ends on
 *   the 4th at midnight), so the 4th gets no occurrence
 * - a timed event ending exactly at midnight stays on the day it started
 * - the range is clamped to the displayed window, so an event lasting a year
 *   never produces more occurrences than there are days on screen
 *
 * Single-day events are passed through untouched.
 */
export function expandMultiDayEvents(events, windowStart, windowEnd) {
  const windowFirstDay = startOfDay(windowStart);
  const windowLastDay = startOfDay(windowEnd);
  const occurrences = [];

  events.forEach((event) => {
    const start = event.start ? parseEventDateTime(event.start) : null;
    const end = event.end ? parseEventDateTime(event.end) : null;

    if (!start || !end || isNaN(start.getTime()) || isNaN(end.getTime())) {
      occurrences.push(event);
      return;
    }

    const isAllDay = event.start.date !== undefined;
    const firstDay = startOfDay(start);
    // Both an exclusive all-day end and a timed end landing on midnight belong
    // to the day before, so the last covered day is the one holding end - 1ms
    const lastDay = startOfDay(new Date(end.getTime() - 1));

    if (lastDay <= firstDay) {
      occurrences.push(event);
      return;
    }

    const from = firstDay < windowFirstDay ? windowFirstDay : firstDay;
    const to = lastDay > windowLastDay ? windowLastDay : lastDay;

    for (let day = from; day <= to; day = nextDay(day)) {
      const isFirstDay = day.getTime() === firstDay.getTime();
      const isLastDay = day.getTime() === lastDay.getTime();

      occurrences.push({
        ...event,
        start: isFirstDay ? event.start : dayBoundary(day, isAllDay),
        end: isLastDay ? event.end : dayBoundary(nextDay(day), isAllDay),
        isMultiDay: true,
        isFirstDay,
        isLastDay
      });
    }
  });

  return occurrences;
}

export function sortEvents(a, b) {
  const dateA = parseEventDateTime(a.start);
  const dateB = parseEventDateTime(b.start);

  // First, compare dates (year, month, day only - ignore time)
  const dayA = new Date(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
  const dayB = new Date(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());

  const dateDiff = dayA.getTime() - dayB.getTime();

  // If events are on different dates, sort by date
  if (dateDiff !== 0) {
    return dateDiff;
  }

  // Events are on the same date - now sort by all-day vs timed
  const isAllDayA = a.start.date !== undefined;
  const isAllDayB = b.start.date !== undefined;

  // Within the same date: all-day events come first
  if (isAllDayA && !isAllDayB) {
    return -1;  // All-day A comes before timed B
  }
  if (!isAllDayA && isAllDayB) {
    return 1;   // Timed A comes after all-day B
  }

  // Both are same type (both all-day or both timed)
  // For timed events, sort by actual time
  if (!isAllDayA && !isAllDayB) {
    return dateA.getTime() - dateB.getTime();
  }

  // Both are all-day events on same date - maintain original order
  return 0;
}

/**
 * Backs `show_started_events: false`. Must run after expandMultiDayEvents so it
 * judges the occurrence of the day and not the whole span: a week of holiday
 * then only loses the day currently under way and keeps the days to come.
 */
export function filterStartedEvents(events, now) {
  return events.filter(event => {
    const eventStart = parseEventDateTime(event.start);
    const eventEnd = parseEventDateTime(event.end);
    // Hide events that have already started but not yet ended
    return !(eventStart < now && eventEnd > now);
  });
}

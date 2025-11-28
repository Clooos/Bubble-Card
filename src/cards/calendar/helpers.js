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

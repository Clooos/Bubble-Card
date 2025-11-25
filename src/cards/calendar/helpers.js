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
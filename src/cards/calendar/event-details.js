import { fireEvent } from "../../tools/utils.js";

const FULL_CALENDAR = 'ha-full-calendar';
const LOAD_TIMEOUT = 10000;

let fullCalendarLoad = null;

// An event as Home Assistant's own calendar hands it to its dialog, built from
// what the REST API answered. A day of a multi-day event carries the dates of
// that day alone, so the event it was cut from is the one that is described.
export function toEventData(event) {
  const source = event.sourceEvent ?? event;
  const date = (value) => (typeof value === 'string' ? value : value?.dateTime ?? value?.date);

  return {
    summary: source.summary,
    dtstart: date(source.start),
    dtend: date(source.end),
    description: source.description ?? undefined,
    location: source.location ?? undefined,
    uid: source.uid ?? undefined,
    recurrence_id: source.recurrence_id ?? undefined,
    rrule: source.rrule ?? undefined,
  };
}

// Whether an action is the more-info of the calendar itself, which on an event
// means the event. One aimed at another entity keeps its own target.
export function isEventMoreInfo(actionEvent, entityId) {
  const { config, action } = actionEvent?.detail ?? {};
  const actionConfig = config?.[`${action}_action`];
  if (actionConfig?.action !== 'more-info') return false;

  const target = actionConfig.entity ?? actionConfig.entity_id;
  return !target || target === entityId;
}

// Home Assistant loads its calendar, and the event dialog with it, the first
// time one of its calendar cards is created. Asking its card helpers for one
// is the way a custom card has to get them.
function loadFullCalendar(entityId) {
  const defined = customElements.get(FULL_CALENDAR);
  if (defined) return Promise.resolve(defined);

  if (!fullCalendarLoad) {
    fullCalendarLoad = (async () => {
      const helpers = await window.loadCardHelpers();
      helpers.createCardElement({ type: 'calendar', entities: [entityId] });
      await Promise.race([
        customElements.whenDefined(FULL_CALENDAR),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), LOAD_TIMEOUT)),
      ]);
      return customElements.get(FULL_CALENDAR);
    })();
    // A load that failed is tried again at the next press.
    fullCalendarLoad.catch(() => { fullCalendarLoad = null; });
  }

  return fullCalendarLoad;
}

// Opens the dialog Home Assistant's calendar opens on an event, with its
// description, its place and, where the calendar allows it, Edit and Delete.
// Home Assistant only reaches that dialog from the click handler of its
// calendar, so the handler is borrowed, with the three things it reads. On a
// version where it is gone or no longer opens anything, the press ends on the
// calendar's more-info, as it did before.
export async function showEventDetails(context, event, origin, color, onChanged) {
  const entityId = event.entity.entity;
  const from = () => (origin?.isConnected ? origin : context.card ?? origin);

  try {
    const fullCalendar = await loadFullCalendar(entityId);
    const onEventClick = fullCalendar?.prototype?._handleEventClick;
    if (typeof onEventClick !== 'function') throw new Error('no event handler');

    let opened = false;
    onEventClick.call(
      {
        hass: context._hass,
        dispatchEvent: (dialogEvent) => {
          opened = dialogEvent?.type === 'show-dialog';
          return from().dispatchEvent(dialogEvent);
        },
        _fireViewChanged: () => onChanged?.(),
      },
      {
        event: {
          // Home Assistant 2026.11 reads the colour of the calendar from `color`,
          // the versions before from `backgroundColor`.
          color,
          backgroundColor: color,
          extendedProps: { calendar: entityId, eventData: toEventData(event) },
        },
      }
    );
    if (!opened) throw new Error('no dialog');
  } catch (_) {
    fireEvent(from(), 'hass-more-info', { entityId });
  }
}

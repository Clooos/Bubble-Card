// The calendar's next-event state can stay unchanged when later events are edited.
// Subscribe to the event list as well, retaining REST/state refreshes on older HA.
const subscriptions = new WeakMap();

function releaseSubscription(unsubscribe) {
  try {
    Promise.resolve(unsubscribe()).catch(() => {});
  } catch {
    // A closed socket must not prevent the remaining subscriptions from closing.
  }
}

function release(context) {
  context._calendarRequest = (context._calendarRequest || 0) + 1;
  clearTimeout(context._calendarRefreshTimer);
  context.cacheKey = '';
  const previous = subscriptions.get(context);
  if (!previous) return;
  subscriptions.delete(context);
  previous.unsubscribers.forEach(releaseSubscription);
}

export function cleanupCalendarSubscriptions(context) {
  // Every card comes through here when it leaves the page or takes a new
  // config, and only a calendar has anything to put away.
  if (!subscriptions.has(context) && context.cardType !== 'calendar') return;
  release(context);
}

export function updateCalendarSubscriptions(context, refresh) {
  const connection = context._hass?.connection;
  if (!connection?.subscribeMessage) return;
  const now = new Date();
  // The window opens at midnight, as the one of Home Assistant's own calendar
  // card does. Its server answers every subscriber of one range from a single
  // fetch, and a window opened at the current second is shared with nobody.
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  const end = new Date(now);
  end.setDate(end.getDate() + Math.max(1, context.config.days ?? 7) - 1);
  end.setHours(23, 59, 59, 999);
  const entities = [...new Set(context.config.entities.map(({ entity }) => entity))];
  const key = JSON.stringify([entities, end.toISOString()]);
  const previous = subscriptions.get(context);
  if (previous?.key === key && previous.connection === connection) return;
  release(context);

  const state = { key, connection, unsubscribers: [], refreshing: false, pending: false };
  subscriptions.set(context, state);
  const isCurrent = () => subscriptions.get(context) === state;
  const changed = async () => {
    if (!isCurrent()) return;
    if (state.refreshing) {
      state.pending = true;
      return;
    }
    state.refreshing = true;
    try {
      do {
        state.pending = false;
        await refresh(isCurrent);
      } while (state.pending && isCurrent());
    } catch (error) {
      console.warn('Bubble Card - Could not refresh calendar events:', error);
    } finally {
      state.refreshing = false;
    }
  };

  entities.forEach((entity_id) => {
    // Home Assistant sends the list again each time the calendar writes its
    // state, once a minute for a polled one. The first list only repeats what
    // the card has just loaded, and a list equal to the one before brings
    // nothing to show, so neither is worth a fetch and a redraw.
    let last;
    const pushed = (message) => {
      const list = JSON.stringify(message?.events ?? null);
      const isNews = last !== undefined && list !== last;
      last = list;
      if (isNews) return changed();
    };
    Promise.resolve().then(() => connection.subscribeMessage(pushed, {
      type: 'calendar/event/subscribe', entity_id,
      start: start.toISOString(), end: end.toISOString(),
    })).then((unsubscribe) => {
      // The card may have left the DOM while HA accepted the subscription.
      if (isCurrent()) state.unsubscribers.push(unsubscribe);
      else releaseSubscription(unsubscribe);
    }).catch(() => {
      // Older HA versions do not implement calendar/event/subscribe. The
      // existing state-based/periodic REST refresh remains available.
    });
  });
}

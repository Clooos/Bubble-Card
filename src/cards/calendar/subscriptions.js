// The calendar's next-event state can stay unchanged when later events are edited.
// Subscribe to the event list as well, retaining REST/state refreshes on older HA.
const subscriptions = new WeakMap();

export function cleanupCalendarSubscriptions(context) {
  context._calendarRequest = (context._calendarRequest || 0) + 1;
  clearTimeout(context._calendarRefreshTimer);
  context.cacheKey = '';
  const previous = subscriptions.get(context);
  if (!previous) return;
  subscriptions.delete(context);
  previous.unsubscribers.forEach((unsubscribe) => unsubscribe());
}

export function updateCalendarSubscriptions(context, refresh) {
  const connection = context._hass?.connection;
  if (!connection?.subscribeMessage) return;
  const now = new Date();
  const end = new Date(now);
  end.setDate(end.getDate() + Math.max(1, context.config.days ?? 7) - 1);
  end.setHours(23, 59, 59, 999);
  const entities = [...new Set(context.config.entities.map(({ entity }) => entity))];
  const key = JSON.stringify([entities, end.toISOString()]);
  const previous = subscriptions.get(context);
  if (previous?.key === key && previous.connection === connection) return;
  cleanupCalendarSubscriptions(context);

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
    Promise.resolve().then(() => connection.subscribeMessage(changed, {
      type: 'calendar/event/subscribe', entity_id,
      start: now.toISOString(), end: end.toISOString(),
    })).then((unsubscribe) => {
      // The card may have left the DOM while HA accepted the subscription.
      if (isCurrent()) state.unsubscribers.push(unsubscribe);
      else unsubscribe();
    }).catch(() => {
      // Older HA versions do not implement calendar/event/subscribe. The
      // existing state-based/periodic REST refresh remains available.
    });
  });
}

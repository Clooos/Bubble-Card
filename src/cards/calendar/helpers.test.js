import { describe, test, expect } from '@jest/globals';
import { parseEventDateTime, sortEvents, filterStartedEvents, expandMultiDayEvents, getDayKey } from './helpers.js';

describe('parseEventDateTime', () => {
  test('should parse all-day event with date property', () => {
    const event = {
      date: '2024-12-25'
    };
    
    const result = parseEventDateTime(event);
    
    expect(result).toBeInstanceOf(Date);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(11); // December is month 11 (0-indexed)
    expect(result.getDate()).toBe(25);
  });

  test('should parse timed event with dateTime property', () => {
    const event = {
      dateTime: '2024-12-25T14:30:00'
    };
    
    const result = parseEventDateTime(event);
    
    expect(result).toBeInstanceOf(Date);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(11);
    expect(result.getDate()).toBe(25);
    expect(result.getHours()).toBe(14);
    expect(result.getMinutes()).toBe(30);
  });
});

describe('sortEvents', () => {
  describe('events on different dates', () => {
    test('should sort events chronologically by date', () => {
      const laterEvent = { start: { dateTime: '2024-12-26T10:00:00' } };
      const earlierEvent = { start: { dateTime: '2024-12-25T10:00:00' } };
      
      const events = [laterEvent, earlierEvent];
      events.sort(sortEvents);
      
      expect(events).toEqual([earlierEvent, laterEvent]);
    });

    test('should sort all-day events on different dates chronologically', () => {
      const laterEvent = { start: { date: '2024-12-26' } };
      const earlierEvent = { start: { date: '2024-12-25' } };
      
      const events = [laterEvent, earlierEvent];
      events.sort(sortEvents);
      
      expect(events).toEqual([earlierEvent, laterEvent]);
    });

    test('should sort mixed event types on different dates chronologically', () => {
      const laterAllDay = { start: { date: '2024-12-26' } };
      const earlierTimed = { start: { dateTime: '2024-12-25T23:59:00' } };
      
      const events = [laterAllDay, earlierTimed];
      events.sort(sortEvents);
      
      expect(events).toEqual([earlierTimed, laterAllDay]);
    });
  });

  describe('events on the same date', () => {
    test('should place all-day events before timed events', () => {
      const allDayEvent = { start: { date: '2024-12-25' } };
      const timedEvent = { start: { dateTime: '2024-12-25T10:00:00' } };
      
      const events = [timedEvent, allDayEvent];
      events.sort(sortEvents);
      
      expect(events).toEqual([allDayEvent, timedEvent]);
    });

    test('should place all-day events before early morning timed events', () => {
      const allDayEvent = { start: { date: '2024-12-25' } };
      const earlyMorningEvent = { start: { dateTime: '2024-12-25T00:01:00' } };
      
      const events = [earlyMorningEvent, allDayEvent];
      events.sort(sortEvents);
      
      expect(events).toEqual([allDayEvent, earlyMorningEvent]);
    });

    test('should place all-day events before late night timed events', () => {
      const allDayEvent = { start: { date: '2024-12-25' } };
      const lateNightEvent = { start: { dateTime: '2024-12-25T23:59:00' } };
      
      const events = [lateNightEvent, allDayEvent];
      events.sort(sortEvents);
      
      expect(events).toEqual([allDayEvent, lateNightEvent]);
    });
  });

  describe('timed events on the same date', () => {
    test('should sort timed events by time on same date', () => {
      const earlyEvent = { start: { dateTime: '2024-12-25T09:00:00' } };
      const lateEvent = { start: { dateTime: '2024-12-25T15:00:00' } };
      
      const events = [lateEvent, earlyEvent];
      events.sort(sortEvents);
      
      expect(events).toEqual([earlyEvent, lateEvent]);
    });

    test('should sort events with different times correctly', () => {
      const midnight = { start: { dateTime: '2024-12-25T00:00:00' } };
      const noon = { start: { dateTime: '2024-12-25T12:00:00' } };
      const almostMidnight = { start: { dateTime: '2024-12-25T23:59:59' } };
      
      const events = [almostMidnight, noon, midnight];
      events.sort(sortEvents);
      
      expect(events).toEqual([midnight, noon, almostMidnight]);
    });

    test('should handle events with same time', () => {
      const event1 = { start: { dateTime: '2024-12-25T10:00:00' } };
      const event2 = { start: { dateTime: '2024-12-25T10:00:00' } };
      
      const events = [event1, event2];
      events.sort(sortEvents);
      
      expect(events).toEqual([event1, event2]);
    });
  });

  describe('all-day events on the same date', () => {
    test('should maintain stable order for multiple all-day events on same date', () => {
      const allDay1 = { start: { date: '2024-12-25' } };
      const allDay2 = { start: { date: '2024-12-25' } };
      
      const events = [allDay1, allDay2];
      events.sort(sortEvents);
      
      expect(events).toEqual([allDay1, allDay2]);
    });
  });

  describe('edge cases', () => {
    test('should handle events across year boundary', () => {
      const newYearEvent = { start: { dateTime: '2025-01-01T00:00:00' } };
      const newYearEveEvent = { start: { dateTime: '2024-12-31T23:59:00' } };
      
      const events = [newYearEvent, newYearEveEvent];
      events.sort(sortEvents);
      
      expect(events).toEqual([newYearEveEvent, newYearEvent]);
    });

    test('should handle events across month boundary', () => {
      const firstOfMonth = { start: { date: '2024-12-01' } };
      const lastOfPreviousMonth = { start: { date: '2024-11-30' } };
      
      const events = [firstOfMonth, lastOfPreviousMonth];
      events.sort(sortEvents);
      
      expect(events).toEqual([lastOfPreviousMonth, firstOfMonth]);
    });

    test('should handle leap year dates', () => {
      const leapDay = { start: { date: '2024-02-29' } };
      const dayBefore = { start: { date: '2024-02-28' } };
      const dayAfter = { start: { date: '2024-03-01' } };
      
      const events = [dayAfter, leapDay, dayBefore];
      events.sort(sortEvents);
      
      expect(events).toEqual([dayBefore, leapDay, dayAfter]);
    });
  });

  describe('realistic scenarios', () => {
    test('should correctly order a mixed list of events', () => {
      const christmasEve = { start: { dateTime: '2024-12-24T20:00:00' }, summary: 'Christmas Eve dinner' };
      const christmasDay = { start: { date: '2024-12-25' }, summary: 'Christmas Day' };
      const morningCoffee = { start: { dateTime: '2024-12-25T09:00:00' }, summary: 'Morning coffee' };
      const afternoonMeeting = { start: { dateTime: '2024-12-25T15:00:00' }, summary: 'Afternoon meeting' };
      const boxingDay = { start: { date: '2024-12-26' }, summary: 'Boxing Day' };
      
      const events = [afternoonMeeting, christmasDay, morningCoffee, boxingDay, christmasEve];
      events.sort(sortEvents);
      
      expect(events).toEqual([christmasEve, christmasDay, morningCoffee, afternoonMeeting, boxingDay]);
    });

    test('should handle multiple all-day and timed events on same date', () => {
      const lunch = { start: { dateTime: '2024-12-25T14:00:00' }, summary: 'Lunch' };
      const holiday1 = { start: { date: '2024-12-25' }, summary: 'Holiday 1' };
      const breakfast = { start: { dateTime: '2024-12-25T10:00:00' }, summary: 'Breakfast' };
      const holiday2 = { start: { date: '2024-12-25' }, summary: 'Holiday 2' };
      const dinner = { start: { dateTime: '2024-12-25T18:00:00' }, summary: 'Dinner' };
      
      const events = [lunch, holiday1, breakfast, holiday2, dinner];
      events.sort(sortEvents);

      expect(events).toEqual([holiday1, holiday2, breakfast, lunch, dinner]);
    });
  });
});

describe('expandMultiDayEvents', () => {
  // A week wide enough to hold every span used below
  const windowStart = new Date('2024-12-23T09:30:00');
  const windowEnd = new Date('2024-12-29T23:59:59.999');

  const daysOf = (occurrences) => occurrences.map(o => getDayKey(parseEventDateTime(o.start)));

  describe('all-day events', () => {
    test('should leave a single-day all-day event untouched', () => {
      const event = { start: { date: '2024-12-25' }, end: { date: '2024-12-26' }, summary: 'Christmas' };

      const result = expandMultiDayEvents([event], windowStart, windowEnd);

      expect(result).toEqual([event]);
      expect(result[0]).toBe(event);
    });

    test('should treat the all-day end date as exclusive', () => {
      // A holiday from the 25th to the 27th ends on the 28th at midnight
      const holiday = { start: { date: '2024-12-25' }, end: { date: '2024-12-28' }, summary: 'Holiday' };

      const result = expandMultiDayEvents([holiday], windowStart, windowEnd);

      expect(daysOf(result)).toEqual(['2024-12-25', '2024-12-26', '2024-12-27']);
      expect(result.every(o => o.summary === 'Holiday')).toBe(true);
    });

    test('should give each occurrence the boundaries of its own day', () => {
      const holiday = { start: { date: '2024-12-25' }, end: { date: '2024-12-28' } };

      const result = expandMultiDayEvents([holiday], windowStart, windowEnd);

      expect(result.map(o => [o.start, o.end])).toEqual([
        [{ date: '2024-12-25' }, { date: '2024-12-26' }],
        [{ date: '2024-12-26' }, { date: '2024-12-27' }],
        [{ date: '2024-12-27' }, { date: '2024-12-28' }],
      ]);
    });

    test('should flag the first and the last day of the span', () => {
      const holiday = { start: { date: '2024-12-25' }, end: { date: '2024-12-28' } };

      const result = expandMultiDayEvents([holiday], windowStart, windowEnd);

      expect(result.map(o => [o.isMultiDay, o.isFirstDay, o.isLastDay])).toEqual([
        [true, true, false],
        [true, false, false],
        [true, false, true],
      ]);
    });

    test('should keep a malformed all-day event with an end before its start', () => {
      const event = { start: { date: '2024-12-25' }, end: { date: '2024-12-25' } };

      const result = expandMultiDayEvents([event], windowStart, windowEnd);

      expect(result).toEqual([event]);
    });
  });

  describe('timed events', () => {
    test('should leave a same-day timed event untouched', () => {
      const event = { start: { dateTime: '2024-12-25T10:00:00' }, end: { dateTime: '2024-12-25T11:00:00' } };

      const result = expandMultiDayEvents([event], windowStart, windowEnd);

      expect(result).toEqual([event]);
      expect(result[0]).toBe(event);
    });

    test('should keep an event ending exactly at midnight on its starting day', () => {
      const event = { start: { dateTime: '2024-12-25T22:00:00' }, end: { dateTime: '2024-12-26T00:00:00' } };

      const result = expandMultiDayEvents([event], windowStart, windowEnd);

      expect(result).toEqual([event]);
    });

    test('should split an event crossing midnight over both days', () => {
      const event = { start: { dateTime: '2024-12-25T22:00:00' }, end: { dateTime: '2024-12-26T02:00:00' } };

      const result = expandMultiDayEvents([event], windowStart, windowEnd);

      expect(daysOf(result)).toEqual(['2024-12-25', '2024-12-26']);
      expect(result[0].start).toEqual({ dateTime: '2024-12-25T22:00:00' });
      expect(parseEventDateTime(result[0].end)).toEqual(new Date(2024, 11, 26));
      expect(parseEventDateTime(result[1].start)).toEqual(new Date(2024, 11, 26));
      expect(result[1].end).toEqual({ dateTime: '2024-12-26T02:00:00' });
    });

    test('should give a middle day the full midnight to midnight span', () => {
      const event = { start: { dateTime: '2024-12-25T22:00:00' }, end: { dateTime: '2024-12-27T02:00:00' } };

      const result = expandMultiDayEvents([event], windowStart, windowEnd);

      expect(daysOf(result)).toEqual(['2024-12-25', '2024-12-26', '2024-12-27']);
      expect(parseEventDateTime(result[1].start)).toEqual(new Date(2024, 11, 26));
      expect(parseEventDateTime(result[1].end)).toEqual(new Date(2024, 11, 27));
      expect([result[1].isFirstDay, result[1].isLastDay]).toEqual([false, false]);
    });
  });

  describe('window boundaries', () => {
    test('should drop the days before the start of the window', () => {
      // Already under way when the card is rendered, like a holiday started last week
      const holiday = { start: { date: '2024-12-20' }, end: { date: '2024-12-26' } };

      const result = expandMultiDayEvents([holiday], windowStart, windowEnd);

      expect(daysOf(result)).toEqual(['2024-12-23', '2024-12-24', '2024-12-25']);
      expect(result[0].isFirstDay).toBe(false);
    });

    test('should drop the days after the end of the window', () => {
      const holiday = { start: { date: '2024-12-28' }, end: { date: '2025-01-06' } };

      const result = expandMultiDayEvents([holiday], windowStart, windowEnd);

      expect(daysOf(result)).toEqual(['2024-12-28', '2024-12-29']);
      expect(result[result.length - 1].isLastDay).toBe(false);
    });

    test('should never produce more occurrences than there are days on screen', () => {
      const wholeYear = { start: { date: '2024-01-01' }, end: { date: '2025-01-01' } };

      const result = expandMultiDayEvents([wholeYear], windowStart, windowEnd);

      expect(result).toHaveLength(7);
    });

    test('should produce a single occurrence for a one day window', () => {
      const holiday = { start: { date: '2024-12-20' }, end: { date: '2024-12-31' } };
      const singleDayEnd = new Date('2024-12-23T23:59:59.999');

      const result = expandMultiDayEvents([holiday], windowStart, singleDayEnd);

      expect(daysOf(result)).toEqual(['2024-12-23']);
    });
  });

  describe('robustness', () => {
    test('should pass an event with no end through untouched', () => {
      const event = { start: { date: '2024-12-25' } };

      expect(expandMultiDayEvents([event], windowStart, windowEnd)).toEqual([event]);
    });

    test('should pass an event with an unparsable date through untouched', () => {
      const event = { start: { dateTime: 'not a date' }, end: { dateTime: 'not a date either' } };

      expect(expandMultiDayEvents([event], windowStart, windowEnd)).toEqual([event]);
    });

    test('should return an empty array when given no events', () => {
      expect(expandMultiDayEvents([], windowStart, windowEnd)).toEqual([]);
    });

    test('should keep every other property of the source event', () => {
      const holiday = {
        start: { date: '2024-12-25' },
        end: { date: '2024-12-27' },
        summary: 'Holiday',
        location: 'Somewhere',
        entity: { entity: 'calendar.personal', color: 'blue' },
      };

      const result = expandMultiDayEvents([holiday], windowStart, windowEnd);

      expect(result).toHaveLength(2);
      expect(result[1]).toMatchObject({
        summary: 'Holiday',
        location: 'Somewhere',
        entity: { entity: 'calendar.personal', color: 'blue' },
      });
    });
  });

  describe('sorting expanded occurrences', () => {
    test('should place each occurrence on its own day, all-day ones first', () => {
      const holiday = { start: { date: '2024-12-25' }, end: { date: '2024-12-28' }, summary: 'Holiday' };
      const meeting = { start: { dateTime: '2024-12-26T09:00:00' }, end: { dateTime: '2024-12-26T10:00:00' }, summary: 'Meeting' };
      const dinner = { start: { dateTime: '2024-12-25T20:00:00' }, end: { dateTime: '2024-12-25T22:00:00' }, summary: 'Dinner' };

      const result = expandMultiDayEvents([meeting, holiday, dinner], windowStart, windowEnd).sort(sortEvents);

      expect(result.map(o => [getDayKey(parseEventDateTime(o.start)), o.summary])).toEqual([
        ['2024-12-25', 'Holiday'],
        ['2024-12-25', 'Dinner'],
        ['2024-12-26', 'Holiday'],
        ['2024-12-26', 'Meeting'],
        ['2024-12-27', 'Holiday'],
      ]);
    });

    test('should place the midnight part of a crossing event before the timed ones', () => {
      const overnight = { start: { dateTime: '2024-12-25T22:00:00' }, end: { dateTime: '2024-12-26T02:00:00' }, summary: 'Overnight' };
      const breakfast = { start: { dateTime: '2024-12-26T08:00:00' }, end: { dateTime: '2024-12-26T09:00:00' }, summary: 'Breakfast' };

      const result = expandMultiDayEvents([breakfast, overnight], windowStart, windowEnd).sort(sortEvents);

      expect(result.map(o => o.summary)).toEqual(['Overnight', 'Overnight', 'Breakfast']);
    });
  });
});

describe('expandMultiDayEvents then filterStartedEvents', () => {
  // The card runs the expansion first so show_started_events judges the day
  // at hand and not the whole span
  const windowStart = new Date('2024-12-25T12:00:00');
  const windowEnd = new Date('2024-12-31T23:59:59.999');

  test('should only hide the day under way of a running multi-day event', () => {
    const holiday = { start: { date: '2024-12-23' }, end: { date: '2024-12-29' }, summary: 'Holiday' };

    const expanded = expandMultiDayEvents([holiday], windowStart, windowEnd);
    const result = filterStartedEvents(expanded, windowStart);

    expect(result.map(o => getDayKey(parseEventDateTime(o.start)))).toEqual([
      '2024-12-26',
      '2024-12-27',
      '2024-12-28',
    ]);
  });

  test('should keep every day of a multi-day event that has not started yet', () => {
    const holiday = { start: { date: '2024-12-27' }, end: { date: '2024-12-30' } };

    const expanded = expandMultiDayEvents([holiday], windowStart, windowEnd);
    const result = filterStartedEvents(expanded, windowStart);

    expect(result).toHaveLength(3);
  });
});

describe('filterStartedEvents', () => {
  const now = new Date('2024-12-25T12:00:00');

  test('should keep events that have not started yet', () => {
    const futureEvent = {
      start: { dateTime: '2024-12-25T14:00:00' },
      end: { dateTime: '2024-12-25T15:00:00' },
    };

    const result = filterStartedEvents([futureEvent], now);
    expect(result).toEqual([futureEvent]);
  });

  test('should keep events that have already ended', () => {
    const pastEvent = {
      start: { dateTime: '2024-12-25T09:00:00' },
      end: { dateTime: '2024-12-25T10:00:00' },
    };

    const result = filterStartedEvents([pastEvent], now);
    expect(result).toEqual([pastEvent]);
  });

  test('should remove events that are currently in progress', () => {
    const inProgressEvent = {
      start: { dateTime: '2024-12-25T11:00:00' },
      end: { dateTime: '2024-12-25T13:00:00' },
    };

    const result = filterStartedEvents([inProgressEvent], now);
    expect(result).toEqual([]);
  });

  test('should keep all-day events for a future date', () => {
    const tomorrowAllDay = {
      start: { date: '2024-12-26' },
      end: { date: '2024-12-27' },
    };

    const result = filterStartedEvents([tomorrowAllDay], now);
    expect(result).toEqual([tomorrowAllDay]);
  });

  test('should remove an in-progress all-day event', () => {
    const todayAllDay = {
      start: { date: '2024-12-25' },
      end: { date: '2024-12-26' },
    };

    const result = filterStartedEvents([todayAllDay], now);
    expect(result).toEqual([]);
  });

  test('should return an empty array when given no events', () => {
    const result = filterStartedEvents([], now);
    expect(result).toEqual([]);
  });

  test('should filter only in-progress events from a mixed list', () => {
    const past = {
      start: { dateTime: '2024-12-25T08:00:00' },
      end: { dateTime: '2024-12-25T09:00:00' },
    };
    const inProgress = {
      start: { dateTime: '2024-12-25T11:00:00' },
      end: { dateTime: '2024-12-25T13:00:00' },
    };
    const future = {
      start: { dateTime: '2024-12-25T15:00:00' },
      end: { dateTime: '2024-12-25T16:00:00' },
    };

    const result = filterStartedEvents([past, inProgress, future], now);
    expect(result).toEqual([past, future]);
  });
});

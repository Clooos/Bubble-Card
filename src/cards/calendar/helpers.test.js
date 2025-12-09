import { describe, test, expect } from '@jest/globals';
import { parseEventDateTime, sortEvents } from './helpers.js';

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

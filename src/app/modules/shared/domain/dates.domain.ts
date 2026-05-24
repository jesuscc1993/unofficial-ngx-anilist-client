import { GroupedDayDiff } from '../types/date.types';

const DAYS_IN_MONTH = 365 / 12;
const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = MS_IN_SECOND * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;
const MS_IN_WEEK = MS_IN_DAY * 7;
const MS_IN_MONTH = MS_IN_DAY * DAYS_IN_MONTH;

export const subtractDates = (date1: Date, date2: Date) => {
  return date1.getTime() - date2.getTime();
};

export const formatGroupedDiff = (diff: number): GroupedDayDiff => {
  let remainder = diff;

  const months = Math.floor(remainder / MS_IN_MONTH);
  remainder %= MS_IN_MONTH;

  const weeks = Math.floor(remainder / MS_IN_WEEK);
  remainder %= MS_IN_WEEK;

  const days = Math.floor(remainder / MS_IN_DAY);
  remainder %= MS_IN_DAY;

  const hours = Math.floor(remainder / MS_IN_HOUR);
  remainder %= MS_IN_HOUR;

  const minutes = Math.floor(remainder / MS_IN_MINUTE);
  remainder %= MS_IN_MINUTE;

  const seconds = Math.floor(remainder / MS_IN_SECOND);
  remainder %= MS_IN_SECOND;

  const milliseconds = remainder;

  return { months, weeks, days, hours, minutes, seconds, milliseconds };
};

const MS_IN_DAY = 1000 * 60 * 60 * 24;

export function subtractDates(date1: Date, date2: Date) {
  return date1.getTime() - date2.getTime();
}

export function subtractDays(date1: Date, date2: Date) {
  return Math.ceil(subtractDates(date1, date2) / MS_IN_DAY);
}

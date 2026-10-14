export const StoragePrefixes = {
  RecentlyFinished: 'recentlyFinished',
  RecentlyUpdated: 'recentlyUpdated',
  RelatedMedia: 'relatedMedia',
};

export const StorageKeys = {
  AccessToken: 'accessToken',
  CountryIn: 'countryIn',
  CountryNotIn: 'countryNotIn',
  EntryStatusIn: 'entryStatusIn',
  EntryStatusNotIn: 'entryStatusNotIn',
  FormatIn: 'formatIn',
  FormatNotIn: 'formatNotIn',
  MediaStatusIn: 'mediaStatusIn',
  MediaStatusNotIn: 'mediaStatusNotIn',
  ScoreGreaterThan: 'scoreGreaterThan',
  ScoreSmallerThan: 'scoreSmallerThan',
  SortBy: 'sortBy',
  UserData: 'user',
};

const getPrefixedKey = (prefix: string, key: string): string => {
  return `${prefix}_${key}`;
};

const getItem = <T>(key: string, fallback?: T): T | undefined => {
  const rawValue = localStorage.getItem(key);
  return rawValue ? JSON.parse(rawValue) : fallback;
};

const setItem = <T>(key: string, value: T): void => {
  const isSet =
    !(Array.isArray(value) && value.length === 0) &&
    value !== undefined &&
    value !== null;

  if (isSet) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    removeItem(key);
  }
};

const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

const clear = () => {
  return localStorage.clear();
};

export const storageService = {
  getPrefixedKey,
  getItem,
  setItem,
  removeItem,
  clear,
};

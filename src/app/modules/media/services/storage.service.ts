export const StoragePrefixes = {
  RecentlyFinished: 'recentlyFinished',
  RecentlyUpdated: 'recentlyUpdated',
  RelatedMedia: 'relatedMedia',
};

export const StorageKeys = {
  AccessToken: 'accessToken',
  Country: 'country',
  EntryStatus: 'entryStatus',
  Format: 'format',
  MediaStatus: 'mediaStatus',
  ScoreGreaterThan: 'scoreGreaterThan',
  ScoreSmallerThan: 'scoreSmallerThan',
  Sort: 'sort',
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
  if (value !== undefined) {
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

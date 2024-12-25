const getItem = <T>(key: string, fallback = undefined): T | undefined => {
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

export const StorageKeys = {
  AccessToken: 'accessToken',
  RecentlyFinished: {
    Country: 'recentlyFinished_country',
    Format: 'recentlyFinished_format',
    Sort: 'recentlyFinished_sort',
  },
  RecentlyUpdated: {
    Format: 'recentlyUpdated_format',
    Status: 'recentlyUpdated_status',
  },
  RelatedMedia: {
    Format: 'relatedMedia_format',
    Score: 'relatedMedia_score',
    Sort: 'relatedMedia_sort',
  },
  UserData: 'user',
};

export const storageService = {
  getItem,
  setItem,
  removeItem,
  clear,
};

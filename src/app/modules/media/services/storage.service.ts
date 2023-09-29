const getItem = <T>(key: string, fallback = undefined): T | undefined => {
  const rawValue = localStorage.getItem(key);
  return rawValue ? JSON.parse(rawValue) : fallback;
};

const setItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
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
    Format: 'recentlyFinished_format',
    Sort: 'recentlyFinished_sort',
  },
  RecentlyUpdated: {
    Format: 'recentlyUpdated_format',
    Status: 'recentlyUpdated_status',
  },
  RelatedMedia: {
    Format: 'relatedMedia_format',
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

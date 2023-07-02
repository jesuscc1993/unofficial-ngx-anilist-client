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
  RecentlyFinished: {
    Format: 'RecentlyFinishedFormat',
    Sort: 'RecentlyFinishedSort',
  },
  RecentlyUpdated: {
    Format: 'RecentlyUpdatedFormat',
    Status: 'RecentlyUpdatedStatus',
  },
  RelatedMedia: {
    Format: 'RelatedMediaFormat',
    Sort: 'RelatedMediaSort',
  },
};

export const storageService = {
  getItem,
  setItem,
  removeItem,
  clear,
};

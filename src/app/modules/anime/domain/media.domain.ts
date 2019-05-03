import { Sort } from '@angular/material';

import { FuzzyDate } from '../../shared/types/anilist/dataTypes.types';
import { ListEntriesByStatus, ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media } from '../../shared/types/anilist/media.types';
import { MediaSort } from '../../shared/types/anilist/mediaSort.types';

export const getFormattedMediaDuration = (media: Media): string => {
  return media.duration < 60 ? `${media.duration}m` : `${Math.floor(media.duration / 60)}h ${media.duration % 60}m`;
};

export const fuzzyDateToDate = ({ year, month, day }: FuzzyDate) => {
  return new Date(year, month, day);
};

export const getDateScalarFromYear = (year: number): number => {
  return year * 10000;
};

export const getMediaSortFromSort = (sort: Sort): MediaSort => {
  const directionSuffix = sort.direction === 'desc' ? '_DESC' : '';
  return <MediaSort>(sort.active.replace(/-/g, '_').toUpperCase() + directionSuffix);
};

export const getListEntriesByStatus = (listEntries: ListEntry[]) => {
  return listEntries.reduce(
    (listEntriesByStatus, listEntry) => ({
      ...listEntriesByStatus,
      [listEntry.status]: [...(listEntriesByStatus[listEntry.status] || []), listEntry],
    }),
    {} as ListEntriesByStatus
  );
};

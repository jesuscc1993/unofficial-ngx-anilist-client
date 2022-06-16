import { Sort } from '@angular/material/sort';

import { FuzzyDate } from '../../shared/types/anilist/dataTypes.types';
import { ListEntriesByStatus, ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media, MediaSort } from '../../shared/types/anilist/media.types';

export const getFormattedMediaDuration = (media: Media) => {
  return media.duration < 60
    ? `${media.duration}m`
    : `${Math.floor(media.duration / 60)}h ${media.duration % 60}m`;
};

export const fuzzyDateToDate = ({ year, month, day }: FuzzyDate) => {
  return new Date(year, month, day);
};

export const getFormattedFuzzyDate = (fuzzyDatemedia: FuzzyDate) => {
  const date = fuzzyDateToDate(fuzzyDatemedia);
  return `${date.getFullYear()}.${pad(date.getMonth() + 1, 2)}.${pad(
    date.getDate(),
    2
  )}`;
};

export const getSanitizedMediaDescription = (media: Media) => {
  return media.description.replace(/h\d+>/g, 'strong>');
};

export const pad = (
  value: number | string,
  length: number = 2,
  character: string = '0'
) => {
  return String(value).padStart(length, character);
};

export const getDateScalarFromYear = (year: number) => {
  return year * 10000;
};

export const getMediaSortFromSort = (sort: Sort) => {
  const directionSuffix = sort.direction === 'desc' ? '_DESC' : '';
  return (sort.active.replace(/-/g, '_').toUpperCase() +
    directionSuffix) as MediaSort;
};

export const getListEntriesByStatus = (listEntries: ListEntry[]) => {
  return listEntries.reduce(
    (listEntriesByStatus, listEntry) => ({
      ...listEntriesByStatus,
      [listEntry.status]: [
        ...(listEntriesByStatus[listEntry.status] || []),
        listEntry,
      ],
    }),
    {} as ListEntriesByStatus
  );
};

export const sortListEntriesByMediaEndDate = (listEntries: ListEntry[]) => {
  return listEntries.sort(({ media: a }, { media: b }) =>
    fuzzyDateToDate(a.endDate) > fuzzyDateToDate(b.endDate) ? -1 : 1
  );
};

export const sortListEntriesByMediaScore = (listEntries: ListEntry[]) => {
  return listEntries.sort(({ media: a }, { media: b }) =>
    a.averageScore > b.averageScore ? -1 : 1
  );
};

export const sortListEntriesByMediaTitle = (listEntries: ListEntry[]) => {
  return listEntries.sort(({ media: a }, { media: b }) =>
    a.title.romaji
      .toLowerCase()
      .localeCompare(b.title.romaji.toLowerCase(), 'en', {
        sensitivity: 'base',
      })
  );
};

import { Sort } from '@angular/material/sort';

import { FuzzyDate } from '../../shared/types/anilist/dataTypes.types';
import { ListEntriesByStatus, ListEntry } from '../../shared/types/anilist/listEntry.types';
import { Media, MediaFormat, MediaSort } from '../../shared/types/anilist/media.types';

export const getFormattedMediaDuration = (media: Media) => {
  return media.duration < 60
    ? `${media.duration}m`
    : `${Math.floor(media.duration / 60)}h ${media.duration % 60}m`;
};

export const fuzzyDateToDate = ({ year, month, day }: FuzzyDate) => {
  return new Date(year, month, day);
};

export const getFormattedFuzzyDate = (fuzzyDate: FuzzyDate) => {
  let date = '-';
  if (fuzzyDate.year) date = `${fuzzyDate.year}`;
  if (fuzzyDate.month) date += `.${pad(fuzzyDate.month, 2)}`;
  if (fuzzyDate.day) date += `.${pad(fuzzyDate.day, 2)}`;
  return date;
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

export const getFormatLiteral = (mediaFormat: MediaFormat) => {
  return `media.formatValues.${mediaFormat}`;
};

export const getSortLiteral = (mediaSort: MediaSort) => {
  return `media.sortValues.${mediaSort}`;
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

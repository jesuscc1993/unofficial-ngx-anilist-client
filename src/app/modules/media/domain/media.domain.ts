import { ElementRef } from '@angular/core';
import { Sort } from '@angular/material/sort';

import {
  gridCardWidth,
  gridSpacing,
} from '../../shared/constants/media.constants';
import {
  CoverImage,
  CoverImageSize,
  FuzzyDate,
} from '../../shared/types/anilist/dataTypes.types';
import {
  ListEntriesByStatus,
  ListEntry,
} from '../../shared/types/anilist/listEntry.types';
import {
  Anime,
  Manga,
  Media,
  MediaCountry,
  MediaFormat,
  MediaSort,
  MediaType,
} from '../../shared/types/anilist/media.types';

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

export const getCountryLiteral = (country: MediaCountry) => {
  return `country.${country}`;
};

export const getFormatLiteral = (mediaFormat: MediaFormat) => {
  return `media.formatValues.${mediaFormat}`;
};

export const getSortLiteral = (mediaSort: MediaSort) => {
  return `media.sortValues.${mediaSort}`;
};

export const getSourceLiteral = (mediaSource: string) => {
  return `media.sourceValues.${mediaSource}`;
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

export const getMediaTypeProgressLiteral = (mediaType: MediaType) => {
  return isAnime(mediaType) ? 'media.episodes' : 'media.chapters';
};

export const getMediaProgress = (media: Media) => {
  return isAnime(media) ? (media as Anime).episodes : (media as Manga).chapters;
};

export const isAnime = (payload: Media | MediaType) => {
  return getMediaPayloadType(payload) === MediaType.ANIME;
};

export const isManga = (payload: Media | MediaType) => {
  return getMediaPayloadType(payload) === MediaType.MANGA;
};

export const getSizedCoverImage = (
  coverImage: CoverImage | undefined = undefined,
  size = CoverImageSize.Medium
) => {
  return coverImage?.medium
    ? coverImage.medium.replace(/\/(small|medium|large)\//, `/${size}/`)
    : undefined;
};

export const getMediaTypePrefixedStorageKey = (
  key: string,
  mediaType: MediaType
) => {
  return `${mediaType.toLowerCase()}_${key}`;
};

export const getColCount = (elementRef: ElementRef<any>) => {
  return elementRef
    ? Math.floor(
        elementRef.nativeElement.offsetWidth / (gridCardWidth + gridSpacing)
      )
    : undefined;
};

const getMediaPayloadType = (payload: Media | MediaType) => {
  return typeof payload === 'object' ? payload.type : payload;
};

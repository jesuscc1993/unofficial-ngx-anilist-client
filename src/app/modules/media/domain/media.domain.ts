import { ElementRef } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { animeFormats } from '../../anime/constants/anime.constants';
import { mangaFormats } from '../../manga/constants/manga.constants';
import { listEntryStatuses } from '../../shared/constants/listEntry.constants';
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
  MediaStatus,
  MediaType,
} from '../../shared/types/anilist/media.types';

export const fuzzyDateToDate = (fuzzyDate?: FuzzyDate) => {
  const { year, month, day } = fuzzyDate || {};
  return year && month && day ? new Date(year, month - 1, day) : undefined;
};

export const getFormattedFuzzyDate = (fuzzyDate?: FuzzyDate) => {
  const { year, month, day } = fuzzyDate || {};
  let date = '-';
  if (year) date = `${year}`;
  if (month) date += `.${pad(month, 2)}`;
  if (day) date += `.${pad(day, 2)}`;
  return date;
};

export const getFormattedMediaYearRange = ({ startDate, endDate }: Media) => {
  const startYear = startDate?.year ?? '';
  const endYear = endDate?.year ?? '';

  return endYear && endYear !== startYear
    ? `${startYear}\n—\n${endYear}`
    : startYear;
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

export const getMediaFormats = (mediaType: MediaType) => {
  return isAnime(mediaType) ? animeFormats : mangaFormats;
};

export const getMediaFormatsForListEntries = (
  listEntries: ListEntry[],
  mediaType: MediaType
) => {
  return getMediaFormats(mediaType).filter(
    (format) => !!listEntries.find((entry) => entry.media.format === format)
  );
};

export const getMediaStatusesForListEntries = (listEntries: ListEntry[]) => {
  return listEntryStatuses.filter(
    (status) => !!listEntries.find((entry) => entry.status === status)
  );
};

export const getMediaSortFromSort = (sort: Sort) => {
  const directionSuffix = sort.direction === 'desc' ? '_DESC' : '';
  return (sort.active.replace(/-/g, '_').toUpperCase() +
    directionSuffix) as MediaSort;
};

export const getMediaTitle = (media: Media) => {
  return (
    (media.countryOfOrigin !== MediaCountry.JP && media.title.english) ||
    media.title.romaji
  );
};

export const getListEntriesByStatus = (listEntries: ListEntry[]) => {
  return listEntries.reduce(
    (listEntriesByStatus, listEntry) => ({
      ...listEntriesByStatus,
      [listEntry.status as string]: [
        ...(listEntriesByStatus[listEntry.status] || []),
        listEntry,
      ],
    }),
    {} as ListEntriesByStatus
  );
};

export const sortListEntriesByMediaEndDate = (listEntries: ListEntry[]) => {
  return listEntries.sort(
    ({ media: { endDate: a } }, { media: { endDate: b } }) =>
      fuzzyDateToDate(a)! > fuzzyDateToDate(b)! ? -1 : 1
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

export const isMediaFinished = (media: Media) => {
  return (
    media.status === MediaStatus.FINISHED ||
    media.status === MediaStatus.CANCELLED
  );
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
  return `${mediaType?.toLowerCase()}_${key}`;
};

export const getMediaKey = (mediaType: MediaType, suffix: string) => {
  return `${mediaType?.toLowerCase()}.${suffix}`;
};

export const toMediaType = (text: string): MediaType => {
  return text.toUpperCase() as MediaType;
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

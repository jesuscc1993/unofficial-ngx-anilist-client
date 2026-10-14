import { ElementRef } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { animeFormats } from '../../anime/constants/anime.constants';
import { mangaFormats } from '../../manga/constants/manga.constants';
import { listEntryStatuses } from '../../shared/constants/listEntry.constants';
import {
  gridCardWidth,
  gridSpacing,
  localizedMediaType,
} from '../../shared/constants/media.constants';
import {
  CoverImage,
  CoverImageSize,
  FuzzyDate,
} from '../../shared/types/anilist/dataTypes.types';
import {
  ListEntriesByStatus,
  ListEntry,
  ListEntryStatus,
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
import { MediaColumn } from '../../shared/types/media.types';
import { SortDirection } from '../../shared/types/mui.types';

export const fuzzyDateToDate = (fuzzyDate?: FuzzyDate) => {
  const { year, month, day } = fuzzyDate || {};
  return year && month ? new Date(year, month - 1, day || 0) : undefined;
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

export const getScoreColor = (score: number) => {
  if (score >= 80) return 'green';
  if (score >= 70) return 'lime';
  if (score >= 60) return 'yellow';
  if (score >= 50) return 'orange';
  return 'red';
};

export const pad = (value: number | string, length = 2, character = '0') => {
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
  let mediaSort: MediaSort;

  // very dirty, but couldn't think of a better way to do this
  if (sort.active === MediaColumn.Date) {
    mediaSort =
      sort.direction === SortDirection.Descending
        ? MediaSort.END_DATE_DESC
        : MediaSort.START_DATE;
  } else {
    const directionSuffix =
      sort.direction === SortDirection.Descending ? '_DESC' : '';

    mediaSort = (sort.active.replace(/-/g, '_').toUpperCase() +
      directionSuffix) as MediaSort;
  }

  return mediaSort;
};

export const getMediaTitle = (media: Media) => {
  return (
    (media.countryOfOrigin !== MediaCountry.JP && media.title.english) ||
    media.title.romaji
  );
};

export const getLocalizedMediaType = (
  mediaType: MediaType,
  country?: MediaCountry
) => {
  return localizedMediaType[mediaType]?.[country ?? MediaCountry.JP];
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
  return listEntries.slice().sort(({ media: a }, { media: b }) => {
    const dateA = fuzzyDateToDate(a.endDate);
    const dateB = fuzzyDateToDate(b.endDate);
    return dateA && dateB
      ? +dateB - +dateA
      : !dateA && !dateB
        ? 0
        : !dateA
          ? 1
          : -1;
  });
};

export const sortListEntriesByMediaScore = (listEntries: ListEntry[]) => {
  return listEntries.slice().sort(({ media: a }, { media: b }) => {
    return (b.averageScore ?? 0) - (a.averageScore ?? 0);
  });
};

export const sortListEntriesByMediaTitle = (listEntries: ListEntry[]) => {
  return listEntries.slice().sort(({ media: a }, { media: b }) => {
    const titleA = a.title.romaji;
    const titleB = b.title.romaji;
    return titleA.localeCompare(titleB, 'en', { sensitivity: 'base' });
  });
};

const sortFunctionByMediaSort: Partial<
  Record<MediaSort, (listEntries: ListEntry[]) => ListEntry[]>
> = {
  [MediaSort.END_DATE_DESC]: sortListEntriesByMediaEndDate,
  [MediaSort.SCORE_DESC]: sortListEntriesByMediaScore,
  [MediaSort.TITLE_ROMAJI]: sortListEntriesByMediaTitle,
};

export const getSortFunctionByMediaSort = (mediaSort?: MediaSort) => {
  return mediaSort ? sortFunctionByMediaSort[mediaSort] : undefined;
};

export const getMediaTypeProgressLiteral = (mediaType: MediaType) => {
  return isAnime(mediaType) ? 'media.episodes' : 'media.chapters';
};

export const getMediaLength = (media: Media) => {
  return isAnime(media) ? (media as Anime).episodes : (media as Manga).chapters;
};

export const hasScore = (media: Media) => {
  return media.averageScore || media.meanScore || media.modeScore;
};

export const isAnime = (payload: Media | MediaType) => {
  const mediaType = getMediaPayloadType(payload);
  if (!mediaType) {
    throw new Error('Unable to determine media type from payload');
  }
  return mediaType === MediaType.ANIME;
};

export const isManga = (payload: Media | MediaType) => {
  const mediaType = getMediaPayloadType(payload);
  if (!mediaType) {
    throw new Error('Unable to determine media type from payload');
  }
  return mediaType === MediaType.MANGA;
};

export const isMediaFinished = (media: Media) => {
  return (
    media.status === MediaStatus.FINISHED ||
    media.status === MediaStatus.CANCELLED
  );
};

export const matchesCountryInFilter = (
  entry: ListEntry,
  countryIn?: MediaCountry[]
) => {
  return (
    !countryIn?.length ||
    (entry.media.countryOfOrigin &&
      countryIn.includes(entry.media.countryOfOrigin))
  );
};

export const matchesCountryNotInFilter = (
  entry: ListEntry,
  countryNotIn?: MediaCountry[]
) => {
  return (
    !entry.media.countryOfOrigin ||
    !countryNotIn?.length ||
    !countryNotIn.includes(entry.media.countryOfOrigin)
  );
};

export const matchesFormatInFilter = (
  entry: ListEntry,
  formatIn?: MediaFormat[]
) => {
  return (
    !formatIn?.length ||
    (entry.media.format && formatIn.includes(entry.media.format))
  );
};

export const matchesFormatNotInFilter = (
  entry: ListEntry,
  formatNotIn?: MediaFormat[]
) => {
  return !formatNotIn?.length || !formatNotIn.includes(entry.media.format);
};

export const matchesMediaStatusInFilter = (
  entry: ListEntry,
  mediaStatusIn?: MediaStatus[]
) => {
  return (
    !mediaStatusIn?.length ||
    (entry.media.status && mediaStatusIn.includes(entry.media.status))
  );
};

export const matchesMediaStatusNotInFilter = (
  entry: ListEntry,
  mediaStatusNotIn?: MediaStatus[]
) => {
  return (
    !mediaStatusNotIn?.length || !mediaStatusNotIn.includes(entry.media.status)
  );
};

export const matchesScoreGreaterThanInFilter = (
  entry: ListEntry,
  scoreGreaterThan?: number
) => {
  const score =
    entry.media.averageScore ?? entry.media.meanScore ?? entry.media.modeScore;
  return (
    scoreGreaterThan === undefined ||
    scoreGreaterThan === null ||
    (score !== undefined && score !== null && score >= scoreGreaterThan)
  );
};

export const matchesScoreSmallerThanFilter = (
  entry: ListEntry,
  scoreSmallerThan?: number
) => {
  const score =
    entry.media.averageScore ?? entry.media.meanScore ?? entry.media.modeScore;
  return (
    scoreSmallerThan === undefined ||
    scoreSmallerThan === null ||
    (score !== undefined && score !== null && score < scoreSmallerThan)
  );
};

export const matchesStatusInFilter = (
  entry: ListEntry,
  entryStatusIn?: ListEntryStatus[]
) => {
  return !entryStatusIn?.length || entryStatusIn.includes(entry.status);
};

export const matchesStatusNotInFilter = (
  entry: ListEntry,
  entryStatusNotIn?: ListEntryStatus[]
) => {
  return !entryStatusNotIn?.length || !entryStatusNotIn.includes(entry.status);
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

export const getColCount = (elementRef: ElementRef<HTMLElement>) => {
  return elementRef
    ? Math.floor(
        (elementRef.nativeElement.offsetWidth + gridSpacing) /
          (gridCardWidth + gridSpacing)
      )
    : undefined;
};

const getMediaPayloadType = (payload: Media | MediaType) => {
  return typeof payload === 'object' ? payload.type : payload;
};

import { Sort } from '@angular/material';

import { EnumMap } from '../../enumMap.types';

export class MediaSort extends EnumMap {
  static TITLE_ROMAJI = 'TITLE_ROMAJI';
  static TITLE_ROMAJI_DESC = 'TITLE_ROMAJI_DESC';
  static FORMAT = 'FORMAT';
  static FORMAT_DESC = 'FORMAT_DESC';
  static START_DATE = 'START_DATE';
  static START_DATE_DESC = 'START_DATE_DESC';
  static SCORE = 'SCORE';
  static SCORE_DESC = 'SCORE_DESC';
  static EPISODES = 'EPISODES';
  static EPISODES_DESC = 'EPISODES_DESC';
  static UPDATED_TIME = 'UPDATED_TIME';
  static UPDATED_TIME_DESC = 'UPDATED_TIME_DESC';
  static END_DATE = 'END_DATE';
  static END_DATE_DESC = 'END_DATE_DESC';

  static LIST = [
    { label: 'Title (asc)', value: 'TITLE_ROMAJI' },
    { label: 'Title (desc)', value: 'TITLE_ROMAJI_DESC' },
    { label: 'Format (asc)', value: 'FORMAT' },
    { label: 'Format (desc)', value: 'FORMAT_DESC' },
    { label: 'Year (asc)', value: 'START_DATE' },
    { label: 'Year (desc)', value: 'START_DATE_DESC' },
    { label: 'Score (asc)', value: 'SCORE' },
    { label: 'Score (desc)', value: 'SCORE_DESC' },
    { label: 'Episodes (asc)', value: 'EPISODES' },
    { label: 'Episodes (desc)', value: 'EPISODES_DESC' },
    { label: 'Time updated (asc)', value: 'UPDATED_TIME' },
    { label: 'Time updated (desc)', value: 'UPDATED_TIME_DESC' },
    { label: 'Date ended (asc)', value: 'END_DATE' },
    { label: 'Date ended (desc)', value: 'END_DATE_DESC' },
  ];

  constructor(value: string) {
    super(value, MediaSort.LIST, true);
  }

  static fromSort(sort: Sort): MediaSort {
    let sortKey = sort.active.replace(/-/g, '_');
    if (sort.direction === 'desc') {
      sortKey += `_${sort.direction}`;
    }
    return new MediaSort(sortKey);
  }
}

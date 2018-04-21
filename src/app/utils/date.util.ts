import { Injectable } from '@angular/core';
import { FuzzyDate } from '../models/anilist/dataTypes';

@Injectable()
export class DateUtil {

  constructor(

  ) {

  }

  public static dateFromFuzzyDate(fuzzyDate: FuzzyDate): Date {
    return new Date(`${fuzzyDate.year || '1970'}-${fuzzyDate.month || '01'}-${fuzzyDate.day || '01'}`);
  }

  public static timeFromFuzzyDate(fuzzyDate: FuzzyDate): number {
    return this.dateFromFuzzyDate(fuzzyDate).getTime();
  }

}

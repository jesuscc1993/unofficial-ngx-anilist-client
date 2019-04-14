import { Component } from '@angular/core';
import { filter, tap } from 'rxjs/operators';

import { MediaStore } from '../../../shared/store/media.store';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';

@Component({
  selector: 'mt-recently-updated-list-entries',
  templateUrl: './mt-recently-updated-list-entries.component.html',
  styleUrls: ['./mt-recently-updated-list-entries.component.scss'],
})
export class MtRecentlyUpdatedListEntriesComponent {
  listEntries: ListEntry[];
  ready: boolean;

  constructor(private mediaStore: MediaStore) {
    this.mediaStore
      .asObservable()
      .pipe(
        filter(({ animeListEntries }) => !!animeListEntries),
        tap(({ animeListEntries }) => {
          this.listEntries = animeListEntries.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1));
          this.ready = true;
        })
      )
      .subscribe();
  }
}

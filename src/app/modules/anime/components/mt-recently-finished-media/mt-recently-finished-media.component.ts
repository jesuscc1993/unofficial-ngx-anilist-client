import { Component } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';

import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { MediaFormat, mediaFormats } from '../../../shared/types/anilist/media.types';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'mt-recently-finished-media',
  templateUrl: './mt-recently-finished-media.component.html',
  styleUrls: ['./mt-recently-finished-media.component.scss'],
})
export class MtRecentlyFinishedMediaComponent extends WithObservableOnDestroy {
  private listEntries: ListEntry[];
  filteredEntries: ListEntry[];

  mediaFormats: MediaFormat[];
  selectedFormats: MediaFormat[] = [];

  loading: boolean = true;

  constructor(private animeService: AnimeService) {
    super();

    this.animeService
      .getPendingMediaByEndDate()
      .pipe(
        takeUntil(this.destroyed$),
        tap(animeListEntries => {
          this.listEntries = animeListEntries;
          this.mediaFormats = mediaFormats.filter(
            format => !!animeListEntries.find(entry => entry.media.format === format)
          );
          this.filterEntries();
          this.loading = false;
        })
      )
      .subscribe();
  }

  selectedFormatChanged(selectedFormats: MediaFormat[]) {
    this.selectedFormats = selectedFormats;
    this.filterEntries();
  }

  private filterEntries() {
    this.filteredEntries = this.selectedFormats.length
      ? this.listEntries.filter(entry => this.selectedFormats.includes(entry.media.format))
      : this.listEntries;
  }
}

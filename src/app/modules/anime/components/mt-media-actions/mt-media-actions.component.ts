import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil, tap } from 'rxjs/operators';

import { defaultModalOptions } from '../../../../app.constants';
import {
  WithObservableOnDestroy,
} from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { AuthService } from '../../../shared/services/auth.service';
import { ToastService } from '../../../shared/services/toast.service';
import { AuthStore } from '../../../shared/store/auth.store';
import { ListEntry } from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import { User } from '../../../shared/types/anilist/user.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import { AnimeService } from '../../services/anime.service';
import { MtListEntryFormModalComponent } from '../modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component';
import { MtMediaDetailModalComponent } from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-media-actions',
  templateUrl: './mt-media-actions.component.html',
  styleUrls: ['./mt-media-actions.component.scss'],
})
export class MtMediaActionsComponent extends WithObservableOnDestroy implements OnInit {
  @Input() listEntry?: ListEntry;
  @Input() media: Media;
  @Input() origin?: ModalOrigin;
  @Input() viewEnabled: boolean = true;
  @Input() editEnabled: boolean = true;

  user: User;

  constructor(
    private dialog: MatDialog,
    private translateService: TranslateService,
    private animeService: AnimeService,
    private authService: AuthService,
    private authStore: AuthStore,
    private toastService: ToastService
  ) {
    super();

    this.user = this.authStore.getUser();

    this.authService.userChange
      .pipe(
        takeUntil(this.destroyed$),
        tap(user => (this.user = user))
      )
      .subscribe();
  }

  ngOnInit() {
    if (this.media && this.media.mediaListEntry && !this.listEntry) {
      this.listEntry = this.media.mediaListEntry;
    }
    if (this.listEntry) {
      this.listEntry = { ...this.listEntry, media: this.media };
    }
  }

  doOpenDetailModal() {
    this.dialog.open(MtMediaDetailModalComponent, {
      ...defaultModalOptions,
      maxWidth: '800px',
      data: {
        origin: this.origin || 'view',
        media: this.media,
      },
    });
  }

  doOpenEditionModal() {
    this.dialog.open(MtListEntryFormModalComponent, {
      ...defaultModalOptions,
      data: {
        origin: this.origin || 'edit',
        listEntry: { ...this.listEntry, media: this.media },
        media: this.media,
      },
    });
  }

  doToggleFavourite() {
    this.animeService
      .toggleFavouriteAnimeListEntry(this.listEntry)
      .pipe(
        tap(listEntryId => {
          const success: boolean = listEntryId !== undefined;
          if (success) {
            this.toastService.showToast(
              this.translateService.instant('listEntry.favouriteToggle.success', {
                mediaTitle: this.listEntry.media.title.romaji,
              })
            );
          }
        })
      )
      .subscribe();
  }

  doDeleteEntry() {
    this.animeService
      .deleteAnimeListEntry(this.listEntry)
      .pipe(
        tap(deletedListEntry => {
          const success: boolean = deletedListEntry.deleted === true;
          if (success) {
            this.toastService.showToast(
              this.translateService.instant('listEntry.deletion.success', {
                mediaTitle: this.listEntry.media.title.romaji,
              })
            );

            this.listEntry = undefined;
          }
        })
      )
      .subscribe();
  }

  doOpenOnAniList() {
    window.open(`https://anilist.co/anime/${this.media.id}`);
  }

  isUpdateAvailable(): boolean {
    return !!this.listEntry && !!this.user;
  }
}

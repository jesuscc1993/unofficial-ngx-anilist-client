import { takeUntil, tap } from 'rxjs/operators';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  defaultMediumModalOptions,
  defaultModalOptions,
} from '../../../../app.constants';
import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { AuthCommands } from '../../../shared/commands/auth.commands';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { AuthStore } from '../../../shared/store/auth.store';
import {
  ListEntry,
  ListEntryStatus,
} from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import { User } from '../../../shared/types/anilist/user.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import { MtListEntryFormModalComponent } from '../modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component';
import { MtMediaDetailModalComponent } from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-media-actions',
  templateUrl: './mt-media-actions.component.html',
  styleUrls: ['./mt-media-actions.component.scss'],
})
export class MtMediaActionsComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  @Input() listMode = true;
  @Input() editEnabled = true;
  @Input() listEntry?: ListEntry;
  @Input() media: Media;
  @Input() origin?: ModalOrigin;
  @Input() viewEnabled = true;
  @Output() onListEntryChanges: EventEmitter<ListEntry>;

  user: User;

  constructor(
    private dialog: MatDialog,
    private animeCommands: AnimeCommands,
    private authCommands: AuthCommands,
    private authStore: AuthStore
  ) {
    super();

    this.user = this.authStore.getUser();

    this.authCommands
      .onUserChange()
      .pipe(
        tap((user) => (this.user = user)),
        takeUntil(this.destroyed$)
      )
      .subscribe();

    this.onListEntryChanges = new EventEmitter();
  }

  ngOnInit() {
    if (this.media && this.media.mediaListEntry && !this.listEntry) {
      this.listEntry = this.media.mediaListEntry;
    }
    if (this.listEntry) {
      this.listEntry = { ...this.listEntry, media: this.media };
    }
  }

  openDetailModal() {
    this.dialog.open(MtMediaDetailModalComponent, {
      ...defaultModalOptions,
      data: {
        origin: this.origin || ModalOrigin.View,
        media: this.media,
      },
    });
  }

  setAsPlanning() {
    this.animeCommands
      .saveMediaWithStatus(this.media, ListEntryStatus.PLANNING)
      .pipe(
        tap((savedListEntry) => {
          const success = savedListEntry.id !== undefined;
          if (success) {
            this.setListEntry(savedListEntry);
          }
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  openEditionModal() {
    this.dialog.open(MtListEntryFormModalComponent, {
      ...defaultMediumModalOptions,
      data: {
        origin: this.origin || 'edit',
        listEntry: { ...this.listEntry, media: this.media },
        media: this.media,
      },
    });
  }

  toggleFavorite() {
    this.animeCommands.toggleFavorite(this.user, this.media).subscribe();
  }

  deleteEntry() {
    this.animeCommands
      .deleteListEntry(this.listEntry)
      .pipe(
        tap((success) => {
          if (success) {
            this.setListEntry(undefined);
          }
        })
      )
      .subscribe();
  }

  openOnAniList() {
    window.open(
      `https://anilist.co/${this.media.type.toLowerCase()}/${this.media.id}`
    );
  }

  searchImages() {
    window.open(
      `https://duckduckgo.com/?iax=images&ia=images&q=${
        this.media.title.romaji
      }+${this.media.type.toLowerCase()}`
    );
  }

  isUpdateAvailable(): boolean {
    return !!this.listEntry && !!this.user;
  }

  private setListEntry(listEntry: ListEntry) {
    this.media = { ...this.media, mediaListEntry: listEntry };
    this.listEntry = { ...listEntry, media: this.media };
    this.onListEntryChanges.emit(this.listEntry);
  }
}

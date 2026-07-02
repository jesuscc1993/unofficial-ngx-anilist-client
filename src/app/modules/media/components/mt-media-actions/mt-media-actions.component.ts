import { takeUntil, tap } from 'rxjs/operators';

import { Location } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import {
  largeModalOptions,
  mediumModalOptions,
} from '../../../../app.constants';
import { AnimeCommands } from '../../../anime/commands/anime.commands';
import { MangaCommands } from '../../../manga/commands/manga.commands';
import { AuthCommands } from '../../../shared/commands/auth.commands';
import { WithObservableOnDestroy } from '../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component';
import { mediaDetailUrl } from '../../../shared/constants/navigation.constants';
import { AuthStore } from '../../../shared/store/auth.store';
import {
  ListEntry,
  ListEntryStatus,
} from '../../../shared/types/anilist/listEntry.types';
import { Media } from '../../../shared/types/anilist/media.types';
import { User } from '../../../shared/types/anilist/user.types';
import { ModalOrigin } from '../../../shared/types/modal.types';
import { MediaCommands } from '../../commands/media.commands.interface';
import {
  getLocalizedMediaType,
  getMediaTitle,
  isAnime,
} from '../../domain/media.domain';
import { MtListEntryFormModalComponent } from '../modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component';
import { MtMediaDetailModalComponent } from '../modals/mt-media-detail-modal/mt-media-detail-modal.component';

@Component({
  selector: 'mt-media-actions',
  templateUrl: './mt-media-actions.component.html',
  styleUrls: ['./mt-media-actions.component.scss'],
  standalone: false,
})
export class MtMediaActionsComponent
  extends WithObservableOnDestroy
  implements OnInit
{
  private animeCommands = inject(AnimeCommands);
  private authCommands = inject(AuthCommands);
  private authStore = inject(AuthStore);
  private dialog = inject(MatDialog);
  private location = inject(Location);
  private mangaCommands = inject(MangaCommands);
  private router = inject(Router);

  @Input() additionalInfoEnabled = true;
  @Input() editEnabled = true;
  @Input() fullDetailEnabled = true;
  @Input() listEntry?: ListEntry;
  @Input() listMode = true;
  @Input() media!: Media;
  @Input() origin?: ModalOrigin;

  @Output() onListEntryChanges: EventEmitter<ListEntry>;

  mediaCommands!: MediaCommands;

  user?: User;

  constructor() {
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
    if (isAnime(this.media)) {
      this.mediaCommands = this.animeCommands;
    } else {
      this.mediaCommands = this.mangaCommands;
    }

    if (this.media && this.media.mediaListEntry && !this.listEntry) {
      this.listEntry = this.media.mediaListEntry;
    }
    if (this.listEntry) {
      this.listEntry = { ...this.listEntry, media: this.media };
    }
  }

  openDetailModal() {
    this.dialog.open(MtMediaDetailModalComponent, {
      ...largeModalOptions,
      data: {
        origin: this.origin || ModalOrigin.View,
        media: this.media,
      },
    });
  }

  setAsPlanning() {
    this.mediaCommands
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
      ...mediumModalOptions,
      data: {
        origin: this.origin || 'edit',
        listEntry: { ...this.listEntry, media: this.media },
        media: this.media,
      },
    });
  }

  toggleFavourite() {
    if (this.user) {
      this.mediaCommands.toggleFavourite(this.user, this.media).subscribe();
    }
  }

  deleteEntry() {
    if (this.listEntry) {
      this.mediaCommands
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
  }

  getAniListUrl(): string {
    return `https://anilist.co/${this.media.type.toLowerCase()}/${this.media.id}`;
  }

  getFullDetailUrl(): string {
    const urlTree = this.router.createUrlTree([
      mediaDetailUrl
        .replace(':mediaType', this.media.type.toLowerCase())
        .replace(':mediaId', this.media.id.toString()),
    ]);
    const serializedUrl = this.router.serializeUrl(urlTree);
    return this.location.prepareExternalUrl(serializedUrl);
  }

  getImageSearchUrl(): string {
    const mediaTitle = getMediaTitle(this.media);
    const mediaType = getLocalizedMediaType(
      this.media.type,
      this.media.countryOfOrigin
    );

    return `https://duckduckgo.com/?iax=images&ia=images&q=${mediaTitle}+${mediaType}`;
  }

  isUpdateAvailable(): boolean {
    return !!this.listEntry && !!this.user;
  }

  private setListEntry(listEntry?: ListEntry) {
    this.media = { ...this.media, mediaListEntry: listEntry };

    this.listEntry = listEntry
      ? { ...listEntry, media: this.media }
      : undefined;

    this.onListEntryChanges.emit(this.listEntry);
  }
}

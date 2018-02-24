import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Media } from '../../models/anilist/media';
import { ListEntryFormModalComponent } from '../list-entry-form-modal/list-entry-form-modal.component';

@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.scss']
})
export class CoverImageComponent {
  @Input() media: Media;

  userListUrl: string = '/user-list';

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {

  }

  viewOnAniList(): void {
    window.open(`https://anilist.co/anime/${this.media.id}`);
  }

  saveToList(): void {
    this.dialog.open(ListEntryFormModalComponent, {
      width: '100vw',
      maxWidth: '480px',
      data: { media: this.media }

    }).afterClosed().subscribe(listEntry => {
      this.showSavedToast(`Updated list entry for "${listEntry.media.title.romaji}"`);
      this.navigateToUserList();
    });
  }

  private showSavedToast(message: string): void {
    this.matSnackBar.open(message, undefined, {
      duration: 1000,
    });
  }

  private navigateToUserList(): void {
    this.router.navigate([this.userListUrl], {
      queryParams: {
        time: new Date().getTime()
      }
    });
  }

}

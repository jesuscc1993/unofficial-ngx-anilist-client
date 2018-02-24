import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Media } from '../../models/anilist/media';
import { ListEntryFormModalComponent } from '../list-entry-form-modal/list-entry-form-modal.component';
import { MatDialogRef } from '@angular/material/dialog/typings/dialog-ref';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.scss']
})
export class CoverImageComponent implements OnInit {
  @Input() media: Media;

  userListUrl: string = '/user-list';

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  viewOnAniList(): void {
    window.open(`https://anilist.co/anime/${this.media.id}`);
  }

  saveToList(): void {
    this.dialog.open(ListEntryFormModalComponent, {
      width: '100vw',
      maxWidth: '480px',
      data: { media: this.media }

    }).afterClosed().subscribe(result => {
      this.router.navigate([this.userListUrl], {
        queryParams: {
          time: new Date().getTime()
        }
      });
    });
  }

}

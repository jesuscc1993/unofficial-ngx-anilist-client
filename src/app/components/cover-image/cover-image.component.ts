import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Media } from '../../models/anilist/media';
import { ListEntryFormModalComponent } from '../list-entry-form-modal/list-entry-form-modal.component';
import { MatDialogRef } from '@angular/material/dialog/typings/dialog-ref';

@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.scss']
})
export class CoverImageComponent implements OnInit {
  @Input() media: Media;
  @Input() mode: string;

  constructor(
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {

  }

  viewOnAniList(): void {
    window.open(`https://anilist.co/anime/${this.media.id}`);
  }

  addToList(): void {
    let formModal: MatDialogRef<ListEntryFormModalComponent> = this.dialog.open(ListEntryFormModalComponent, {
      width: '100vw',
      maxWidth: '768px',
      data: { media: this.media }
    });

    formModal.afterClosed().subscribe(result => {

    });
  }

}

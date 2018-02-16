import { Component, Input, OnInit } from '@angular/core';
import { Media } from "../../models/anilist/media";
import { Anime } from "../../models/anilist/anime";

@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.scss']
})
export class CoverImageComponent implements OnInit {
  @Input() media: Media;

  constructor() {

  }

  ngOnInit(): void {

  }

  private viewOnAniList(anime: Anime): void {
    location.href = `https://anilist.co/anime/${anime.id}`;
  }

}

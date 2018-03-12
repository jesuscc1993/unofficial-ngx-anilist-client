import { Component, Input } from '@angular/core';
import { Anime } from '../../models/anilist/anime';

@Component({
  selector: 'app-anime-info',
  templateUrl: './anime-info.component.html',
  styleUrls: ['./anime-info.component.scss']
})
export class AnimeInfoComponent {
  @Input() anime: Anime;
  @Input() generalInfoOnly?: boolean;

  constructor(

  ) {

  }

}

import { Component, Input } from '@angular/core';

import { Media } from '../../../shared/types/anilist/media.types';

@Component({
  selector: 'mt-media-country-flag',
  templateUrl: './mt-media-country-flag.component.html',
  styleUrls: ['./mt-media-country-flag.component.scss'],
})
export class MtMediaCountryFlagComponent {
  @Input() media: Media;

  getImage(): string {
    return `/assets/pictures/vectorial/flags/${this.media.countryOfOrigin.toLowerCase()}.svg`;
  }
}

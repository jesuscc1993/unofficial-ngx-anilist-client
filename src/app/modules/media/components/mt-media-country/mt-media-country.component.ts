import { Component, Input } from '@angular/core';

import { Media } from '../../../shared/types/anilist/media.types';

@Component({
  selector: 'mt-media-country',
  templateUrl: './mt-media-country.component.html',
  styleUrls: ['./mt-media-country.component.scss'],
})
export class MtMediaCountryComponent {
  @Input() media: Media;
}

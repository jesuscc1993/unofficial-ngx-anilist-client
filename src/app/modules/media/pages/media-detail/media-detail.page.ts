import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { getTypedRouteParams } from '../../../shared/domain/navigation.domain';
import { Media, MediaType } from '../../../shared/types/anilist/media.types';
import { MediaCommands } from '../../commands/media.commands';
import { toMediaType } from '../../domain/media.domain';

@Component({
  templateUrl: './media-detail.page.html',
  styleUrls: ['./media-detail.page.scss'],
})
export class MediaDetailPage {
  media: Media;
  mediaCommands: MediaCommands;
  mediaId: number;
  mediaType: MediaType;

  errorGotten: boolean;
  searching: boolean;

  constructor(private activatedRoute: ActivatedRoute) {
    const { mediaId, mediaType } = getTypedRouteParams<MediaDetailPageParams>(
      this.activatedRoute
    );
    this.mediaId = mediaId;
    this.mediaType = toMediaType(mediaType);
  }
}

type MediaDetailPageParams = { mediaId: number; mediaType: MediaType };

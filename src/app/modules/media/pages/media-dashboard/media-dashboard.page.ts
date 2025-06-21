import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MediaType } from '../../../shared/types/anilist/media.types';

@Component({
  selector: 'mt-media-dashboard',
  templateUrl: './media-dashboard.page.html',
  styleUrls: ['./media-dashboard.page.scss'],
})
export class MtMediaDashboardComponent implements OnInit {
  @Input() mediaType: MediaType;

  showLeftColumn = true;
  showCenterColumn = true;
  showRightColumn = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const column = params['column'];
      this.showLeftColumn = !column || column === 'left';
      this.showCenterColumn = !column || column === 'center';
      this.showRightColumn = !column || column === 'right';
    });
  }
}

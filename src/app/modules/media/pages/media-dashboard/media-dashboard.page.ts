import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MediaType } from '../../../shared/types/anilist/media.types';

@Component({
  selector: 'mt-media-dashboard',
  templateUrl: './media-dashboard.page.html',
  styleUrls: ['./media-dashboard.page.scss'],
  standalone: false,
})
export class MtMediaDashboardComponent implements OnInit {
  private route = inject(ActivatedRoute);

  @Input() mediaType!: MediaType;

  showLeftColumn = true;
  showCenterColumn = true;
  showRightColumn = true;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const column = params['column'];
      this.showLeftColumn = !column || column === 'left';
      this.showCenterColumn = !column || column === 'center';
      this.showRightColumn = !column || column === 'right';
    });
  }
}

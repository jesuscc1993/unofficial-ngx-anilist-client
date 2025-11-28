import { Component, Input, OnInit } from '@angular/core';

import { GenreStats } from '../../../shared/types/anilist/genreStats.types';

@Component({
    selector: 'mt-genres-overview',
    templateUrl: './mt-genres-overview.component.html',
    styleUrls: ['./mt-genres-overview.component.scss'],
    standalone: false
})
export class MtGenresOverviewComponent implements OnInit {
  @Input() genreStatsList: GenreStats[];

  maxColumnCount = 5;
  minColumnWidth = 160;

  constructor() {}

  ngOnInit() {
    this.calculateStatistics();
  }

  getColumnCount(): number {
    const columnCount = window.screen.width / this.minColumnWidth;
    return Math.floor(
      columnCount < this.maxColumnCount ? columnCount : this.maxColumnCount
    );
  }

  private calculateStatistics() {
    let totalCount = 0;

    this.genreStatsList.forEach((genreStats: GenreStats) => {
      totalCount += genreStats.amount;
    });

    this.genreStatsList.forEach((genreStats: GenreStats) => {
      genreStats.percentage = Math.round(
        (genreStats.amount * 100) / totalCount
      );
    });
  }
}

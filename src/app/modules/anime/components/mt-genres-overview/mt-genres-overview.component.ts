import { Component, Input, OnInit } from '@angular/core';

import { GenreStats } from '../../../shared/types/anilist/genreStats.types';

@Component({
  selector: 'mt-genres-overview',
  templateUrl: './mt-genres-overview.component.html',
  styleUrls: ['./mt-genres-overview.component.scss'],
})
export class MtGenresOverviewComponent implements OnInit {
  @Input() genreStatsList: GenreStats[];

  maxColumnCount: number = 5;
  minColumnWidth: number = 160;

  constructor() {}

  ngOnInit() {
    this.calculateStatistics();
  }

  private calculateStatistics() {
    let totalCount: number = 0;

    this.genreStatsList.forEach((genreStats: GenreStats) => {
      totalCount += genreStats.amount;
    });

    this.genreStatsList.forEach((genreStats: GenreStats) => {
      genreStats.percentage = Math.round((genreStats.amount * 100) / totalCount);
    });
  }

  getColumnCount(): number {
    const columnCount: number = window.screen.width / this.minColumnWidth;
    return Math.floor(columnCount < this.maxColumnCount ? columnCount : this.maxColumnCount);
  }
}

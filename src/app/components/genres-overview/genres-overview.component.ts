import { Component, Input, OnInit } from '@angular/core';
import { GenreStats } from '../../models/anilist/genreStats';

@Component({
  selector: 'app-genres-overview',
  templateUrl: './genres-overview.component.html',
  styleUrls: ['./genres-overview.component.scss']
})
export class GenresOverviewComponent implements OnInit {
  @Input() genreStatsList: GenreStats[];

  maxColumnCount: number = 5;
  minColumnWidth: number = 160;

  constructor(

  ) {

  }

  ngOnInit(): void {
    this.calculateStatistics();
  }

  private calculateStatistics(): void {
    let totalCount: number = 0;

    this.genreStatsList.forEach((genreStats: GenreStats) => {
      totalCount += genreStats.amount;
    });

    this.genreStatsList.forEach((genreStats: GenreStats) => {
      genreStats.percentage = Math.round(genreStats.amount * 100 / totalCount);
    });
  }

  getColumnCount(): number {
    const columnCount: number = window.screen.width / this.minColumnWidth;
    return Math.floor(columnCount < this.maxColumnCount ? columnCount : this.maxColumnCount);
  }

}

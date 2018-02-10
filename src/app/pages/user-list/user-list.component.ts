import { Component, OnInit } from '@angular/core';
import { User } from "../../models/anilist/user";
import { AnimeService } from "../../providers/anime.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  user: User;
  statusLists: any;

  constructor(
    private animeService: AnimeService
  ) {
    this.user = this.animeService.getUser();

    if (this.user) {
      this.animeService.getList(this.user).subscribe((response) => {
        this.statusLists = response;
      });
    }
  }

  ngOnInit(): void {

  }

  getListAsString(): string {
    return JSON.stringify(this.statusLists, undefined, 2);
  }

}

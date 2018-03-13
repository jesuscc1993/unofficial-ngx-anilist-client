# angular-material-demo

## Description
Anime management client demo built in [Angular](https://angular.io/) 5 and [Angular Material](https://material.angular.io/).

## Features

### Search
* Filters (stored and read from the url parameters)
* Anime list entries listing with the most common info

### User list
* Filters (name and status only; use search for additional filtering)
* Anime list entries listing with the most common info
* Live reload on update (unless manually disabled)

### Anime list entry
* Modal with additional entry data (and redirection to the anime detail)
* Add, update and remove to own list features (requires to be logged in through AniList)
* Mark favourites feature

### Anime detail
* Presents all the data from the anime list entry and the entry modal and more in the same place

## Requirements
* Local installation of [Angular-CLI](https://cli.angular.io/) for compilation
* Access to [AniList's public API](https://anilist.gitbooks.io/anilist-apiv2-docs/) for data retrieval and perspiration
* [Environment file](http://tattoocoder.com/angular-cli-using-the-environment-option/) with the ID of an [AniList API v2 Client](https://anilist.co/settings/developer) pointing to http://localhost:4200/login on redirection

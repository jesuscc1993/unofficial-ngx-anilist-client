# Unofficial AniList Client

Anime management client demo built in [Angular](https://angular.io/) 7 and [Angular Material](https://material.angular.io/).

<br/>

## Pages

### Search

Allows for paginated searching of anime series in a table format.

Filters<sup>1</sup> can be used to refine the search. They also are stored on the URL and retrieved when loading.

<sup>1</sup> title, aired before, aired after, scored above, scored below, genres, formats, statuses and on list

### User list

Allows for paginated searching of the anime series on the logged user's list.

Allows filtering by title and watching status.

It additionally displays some statistics at the page's bottom and features live reload unless disabled.

### Anime detail

Presents all the data relevant to an anime<sup>1</sup> in a single page.

\* Includes all the information displayed on the table entry and the additional info modal.

<br/>

## Main components

### Anime table entry

Displays the most basic anime information<sup>1</sup> in a single row.

Different background colors<sup>2</sup> are used based for entries already on the user's list.

<sup>1</sup> cover, title, format, year, genres, average score and episode count

<sup>2</sup> blue for planned, orange for unfinished and red for dropped.

\* Used on the search and user's list pages' tables.

### Additional info modal

Presents additional anime information<sup>1</sup> not present on the table entries.

<sup>1</sup> description, airing status, studio and tags

\* Accessible from the anime actions dropdown.

### Entry form modal

Allows the creation of a new user list anime entry or the modification of an existing one.

\* Accessible from the anime actions dropdown.

### Anime actions dropdown

Provides multiple actions to be done with an anime

- Add entry<sup>1</sup>
- Update entry<sup>2</sup>
- Favourite anime<sup>2</sup>
- Delete entry<sup>2</sup>
- Display the additional info modal.
- External link to the anime on AniList.

<sup>1</sup> Only available when logged in and the entry is not on the logged user's list

<sup>2</sup> Only available when logged in and the entry is on the logged user's list

\* Accessible from the anime table entry and additional info modal components and the anime detail page.

<br/>

## Requirements

- Local installation of [Angular CLI](https://cli.angular.io) for compilation
- Access to [AniList's public API](https://anilist.gitbooks.io/anilist-apiv2-docs/) for data retrieval and perspiration
- [Environment file](http://tattoocoder.com/angular-cli-using-the-environment-option/) with the ID of an [AniList API v2 Client](https://anilist.co/settings/developer) pointing to http://localhost:4200/login on redirection

<br/>

## Links

- [Live demo](https://jesuscc1993.github.io/unofficial-ng5-anilist-client/anime-search)

## TODO

- Translate mat-paginator
- Add language selection
- Fix ngx-translate on gh-pages (add translations root to environments file)
- Implement store for listEntries
- Get rid of EnumMaps
- Group recent list updates by status

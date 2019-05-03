# Unofficial AniList Client

Anime management client demo built in [Angular](https://angular.io/) 7 and [Angular Material](https://material.angular.io/).

<br/>

## Pages

### Search

Allows for paginated searching of anime series in a table format.

Filters<sup>1</sup> can be used to refine the search. They also are stored on the URL and retrieved when loading.

<sup>1</sup> title, aired before, aired after, scored above, scored below, genres, formats, statuses and on list

### Dashboard

Currently shows three sidebars:

- Recently updated list entries, with optional grouping by status (multiple selection available)
- Media related to added entries, with optional grouping by format (multiple selection available)
- Added media that recently finished airing, with optional grouping by format (multiple selection available)

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

<sup>2</sup>
<span style="color: #4caf50">completed</span>,
<span style="color: #f44336">dropped</span>,
<span style="color: #f06292">paused</span>,
<span style="color: #ff9800">planning</span>,
<span style="color: #2196f3">repeating</span> and
<span style="color: #ff9800">watching</span>.

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

- [Live demo](https://jesuscc1993.github.io/unofficial-ngx-anilist-client/anime-search)

## TODO

- Add sort to dashboard lists
- Add favourites to store and mark favorited entries
- Add language selection
- Update anime search and related media components when updating entries on their results

# Unofficial AniList Client

Anime management client demo built in [Angular](https://angular.io/) 14 and [Angular Material](https://material.angular.io/).

## Pages

\* Separate anime and manga pages exist for each of these sections.

### Search

Allows for paginated searching of media in a table format.

Filters<sup>1</sup> can be used to refine the search. They also are stored on the URL and retrieved when loading.

<sup>1</sup> title, aired before, aired after, scored above, scored below, genres, formats, statuses and on list

### Dashboard

Currently shows three sidebars:

- Recently updated list entries, with optional grouping by status (multiple selection available)
- Media related to added entries, with optional grouping by format (multiple selection available)
  - Doesn't load by default because it requires a lot of queries.
- Added media that recently finished airing, with optional grouping by format (multiple selection available)

### User list

Allows for paginated searching of the media on the logged user's list.

Allows filtering by title and watching status.

It additionally displays some statistics at the page's bottom and features live reload unless disabled.

### Media detail

Presents all the data relevant to a media<sup>1</sup> in a single page.

\* Includes all the information displayed on the table entry and the additional info modal.

<br/>

## Main components

### Media table entry

Displays the most basic media information<sup>1</sup> in a single row.

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

Presents additional media information<sup>1</sup> not present on the table entries.

<sup>1</sup> description, airing status, studio and tags

\* Accessible from the media actions dropdown.

### Entry form modal

Allows the creation of a new user list media entry or the modification of an existing one.

\* Accessible from the media actions dropdown.

### Media actions dropdown

Provides multiple actions to be done with an media

- Add entry<sup>1</sup>
- Update entry<sup>2</sup>
- Favorite media<sup>2</sup>
- Delete entry<sup>2</sup>
- Display the additional info modal.
- External link to the media on AniList.

<sup>1</sup> Only available when logged in and the entry is not on the logged user's list

<sup>2</sup> Only available when logged in and the entry is on the logged user's list

\* Accessible from the media table entry and additional info modal components and the media detail page.

<br/>

## Requirements

- Local installation of [Angular CLI](https://cli.angular.io) for compilation
- Access to [AniList's public API](https://anilist.gitbooks.io/anilist-apiv2-docs/) for data retrieval and perspiration
- [Environment file](http://tattoocoder.com/angular-cli-using-the-environment-option/) with the ID of an [AniList API v2 Client](https://anilist.co/settings/developer) pointing to http://localhost:4200/login on redirection

<br/>

## Links

- [Live demo](https://jesuscc1993.github.io/unofficial-ngx-anilist-client/)

## TODO

- Extract common login from anima/manga to media (specially for components and pages)
- Add language selection
- Do NOT reset pagination on list changes (reset only on filter changes)
- Move tags to the store

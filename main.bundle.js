webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api/anime/anime-api.queries.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return genresQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return userQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return searchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return listQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return relatedMediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listMediaIdsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updatedEntriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return finishedAiringMediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listFavouritesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return saveListEntryQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteListEntryQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return toggleFavouriteEntryQuery; });
var filterTypes = {};
var filterMappings = {};
/* filters */
filterTypes.page = "\n  $page: Int,\n  $perPage: Int,\n";
filterMappings.page = "\n  page: $page,\n  perPage: $perPage,\n";
filterTypes.mediaCollection = "\n  $mediaType: MediaType,\n  $sort: [MediaListSort],\n  $userId: Int!,\n";
filterMappings.mediaCollection = "\n  sort: $sort,\n  type: $mediaType,\n  userId: $userId,\n";
filterTypes.media = "\n  $mediaType: MediaType,\n  $sort: [MediaSort],\n  $adultContent: Boolean,\n  $averageScore_greater: Int,\n  $averageScore_lesser: Int,\n  $genre_in: [String],\n  $genre_not_in: [String],\n  $format_in: [MediaFormat],\n  $format_not_in: [MediaFormat],\n  $status_in: [MediaStatus],\n  $status_not_in: [MediaStatus],\n  $search: String,\n  $startDate_greater: FuzzyDateInt,\n  $startDate_lesser: FuzzyDateInt,\n  $status: MediaStatus,\n  $id: Int,\n  $idIn: [Int],\n  $idNotIn: [Int],\n  $onList: Boolean,\n";
filterMappings.media = "\n  sort: $sort,\n  type: $mediaType,\n  isAdult: $adultContent,\n  averageScore_greater: $averageScore_greater,\n  averageScore_lesser: $averageScore_lesser,\n  genre_in: $genre_in,\n  genre_not_in: $genre_not_in,\n  format_in: $format_in,\n  format_not_in: $format_not_in,\n  status_in: $status_in,\n  status_not_in: $status_not_in,\n  search: $search,\n  startDate_greater: $startDate_greater,\n  startDate_lesser: $startDate_lesser,\n  status: $status,\n  id: $id,\n  id_in: $idIn,\n  id_not_in: $idNotIn,\n  onList: $onList,\n";
/* fields */
var pageInfoFields = "\n  currentPage\n  hasNextPage\n  lastPage\n  perPage\n  total\n";
var listAnimeFields = "\n  averageScore\n  coverImage {\n    large\n    medium\n  }\n  description\n  duration\n  episodes\n  format\n  genres\n  id\n  startDate {\n    year\n  }\n  status\n  studios(isMain: true) {\n    nodes {\n      name\n    }\n  }\n  tags {\n    description\n    isMediaSpoiler\n    name\n  }\n  title {\n    romaji\n  }\n";
var searchAnimeFields = listAnimeFields + "\n  mediaListEntry {\n    id\n    scoreRaw: score (\n      format: POINT_100\n    )\n    status\n  }\n";
var listEntryFields = "\n  id\n  media {\n    " + listAnimeFields + "\n  }\n  scoreRaw: score (\n    format: POINT_100\n  )\n  status\n  updatedAt\n";
/* queries */
var genresQuery = "\n  {\n    GenreCollection\n  }\n";
var userQuery = "\n  {\n    Viewer {\n      avatar {\n        large\n      }\n      id\n      name\n      options {\n        displayAdultContent\n      }\n      stats {\n        favouredGenresOverview {\n          amount\n          genre\n          meanScore\n          timeWatched\n        }\n        watchedTime\n      }\n    }\n  }\n";
var searchQuery = "\n  query (\n    " + filterTypes.media + "\n    " + filterTypes.page + "\n  ) {\n    Page (\n      " + filterMappings.page + "\n    ) {\n      pageInfo {\n        " + pageInfoFields + "\n      }\n      media (\n        " + filterMappings.media + "\n      ) {\n        " + searchAnimeFields + "\n      }\n    }\n  }\n";
var listQuery = "\n  query (\n    " + filterTypes.mediaCollection + "\n  ) {\n    MediaListCollection (\n      " + filterMappings.mediaCollection + "\n    ) {\n      lists {\n        entries {\n          " + listEntryFields + "\n        }\n      }\n    }\n  }\n";
var relatedMediaQuery = "\n  query (\n    " + filterTypes.mediaCollection + "\n  ) {\n    MediaListCollection (\n      " + filterMappings.mediaCollection + "\n    ) {\n      lists {\n        entries {\n          status\n          media {\n            relations {\n              nodes {\n                " + listAnimeFields + "\n              }\n            }\n          }\n        }\n      }\n";
var listMediaIdsQuery = "\n  query (\n    " + filterTypes.mediaCollection + "\n  ) {\n    MediaListCollection (\n      " + filterMappings.mediaCollection + "\n    ) {\n      lists {\n        entries {\n          status\n          media {\n            id\n          }\n        }\n      }\n    }\n  }\n";
var updatedEntriesQuery = "\n  query (\n    " + filterTypes.mediaCollection + "\n    " + filterTypes.page + "\n  ) {\n    Page (\n      " + filterMappings.page + "\n    ) {\n      pageInfo {\n        " + pageInfoFields + "\n      }\n      mediaList (\n        " + filterMappings.mediaCollection + "\n      ) {\n        " + listEntryFields + "\n      }\n    }\n  }\n";
var finishedAiringMediaQuery = "\n  query (\n    " + filterTypes.media + "\n    " + filterTypes.page + "\n  ) {\n    Page (\n      " + filterMappings.page + "\n    ) {\n      pageInfo {\n        " + pageInfoFields + "\n      }\n      media (\n        " + filterMappings.media + "\n      ) {\n        " + listAnimeFields + "\n\n        mediaListEntry {\n          " + listEntryFields + "\n        }\n      }\n    }\n  }\n";
var listFavouritesQuery = "\n  query (\n    $userId: Int!,\n    $page: Int\n  ) {\n    User (\n      id: $userId\n    ) {\n      favourites {\n        anime (\n          page: $page\n        ) {\n          nodes {\n            id\n          }\n          pageInfo {\n            " + pageInfoFields + "\n          }\n        }\n      }\n    }\n  }\n";
var saveListEntryQuery = "\n  mutation (\n    $mediaId: Int,\n    $scoreRaw: Int,\n    $status: MediaListStatus\n  ) {\n    SaveMediaListEntry (\n      mediaId: $mediaId,\n      scoreRaw: $scoreRaw,\n      status: $status\n    ) {\n      id\n      status\n    }\n  }\n";
var deleteListEntryQuery = "\n  mutation (\n    $id: Int\n  ) {\n    DeleteMediaListEntry (id: $id) {\n      deleted\n    }\n  }\n";
var toggleFavouriteEntryQuery = "\n  mutation (\n    $animeId: Int\n  ) {\n    ToggleFavourite (\n      animeId: $animeId\n    ) {\n      anime {\n        nodes {\n          id\n          title {\n            userPreferred\n          }\n        }\n      }\n    }\n  }\n";


/***/ }),

/***/ "../../../../../src/app/api/anime/anime.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimeApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_anime_domain_anime_domain__ = __webpack_require__("../../../../../src/app/modules/anime/domain/anime.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_auth_store__ = __webpack_require__("../../../../../src/app/store/auth.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__types_anilist_enums_mediaSorts__ = __webpack_require__("../../../../../src/app/types/anilist/enums/mediaSorts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api__ = __webpack_require__("../../../../../src/app/api/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__anime_api_queries__ = __webpack_require__("../../../../../src/app/api/anime/anime-api.queries.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AnimeApi = (function (_super) {
    __extends(AnimeApi, _super);
    function AnimeApi(httpClient, authStore) {
        var _this = _super.call(this, httpClient, authStore) || this;
        _this.httpClient = httpClient;
        _this.authStore = authStore;
        return _this;
    }
    AnimeApi.prototype.queryAnimeGenres = function () {
        var _this = this;
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_8__anime_api_queries__["c" /* genresQuery */]).map(function (response) { return _this.getResponseData(response).GenreCollection; });
    };
    AnimeApi.prototype.queryAnimeSearch = function (query, pageInfo) {
        var _this = this;
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_8__anime_api_queries__["i" /* searchQuery */], {
            variables: Object(__WEBPACK_IMPORTED_MODULE_4__modules_anime_domain_anime_domain__["d" /* mapQueryFilters */])(query, {
                mediaType: 'ANIME',
                adultContent: query.adultContent || false,
                onList: query.onList,
                sort: query.sort || __WEBPACK_IMPORTED_MODULE_6__types_anilist_enums_mediaSorts__["a" /* MediaSort */].TITLE_ROMAJI,
                page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
                perPage: pageInfo ? pageInfo.perPage || 10 : 1,
            }),
        }).map(function (response) {
            var responseData = _this.getResponseData(response).Page;
            if (responseData) {
                responseData.media.map(function (anime) { return Object(__WEBPACK_IMPORTED_MODULE_4__modules_anime_domain_anime_domain__["b" /* getParsedAnime */])(anime); });
            }
            return responseData;
        });
    };
    AnimeApi.prototype.queryAnimeList = function (user) {
        var _this = this;
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_8__anime_api_queries__["f" /* listQuery */], {
            variables: {
                mediaType: 'ANIME',
                userId: user.id,
                sort: __WEBPACK_IMPORTED_MODULE_6__types_anilist_enums_mediaSorts__["a" /* MediaSort */].SCORE_DESC,
            },
        }).map(function (response) {
            var listEntriesByStatus = {};
            var listMediaDto = _this.getResponseData(response);
            if (listMediaDto) {
                listMediaDto.MediaListCollection.lists.forEach(function (list) {
                    var status = list.entries[0].status;
                    list.entries.forEach(function (listEntry) {
                        listEntriesByStatus[status] = (listEntriesByStatus[status] || []).concat([Object(__WEBPACK_IMPORTED_MODULE_4__modules_anime_domain_anime_domain__["c" /* getParsedListEntry */])(listEntry)]);
                    });
                });
            }
            return listEntriesByStatus;
        });
    };
    AnimeApi.prototype.queryAnimeListMediaIdsByStatus = function (user) {
        var _this = this;
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_8__anime_api_queries__["e" /* listMediaIdsQuery */], {
            variables: {
                mediaType: 'ANIME',
                userId: user.id,
            },
        }).map(function (response) {
            var listMediaIdsByStatus = {};
            var listMediaDto = _this.getResponseData(response);
            if (listMediaDto) {
                listMediaDto.MediaListCollection.lists.forEach(function (list) {
                    var status = list.entries[0].status;
                    list.entries.forEach(function (listEntry) {
                        listMediaIdsByStatus[status] = (listMediaIdsByStatus[status] || []).concat([listEntry.media.id]);
                    });
                });
            }
            return listMediaIdsByStatus;
        });
    };
    AnimeApi.prototype.queryRecentlyUpdatedAnime = function (user, pageInfo) {
        var _this = this;
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_8__anime_api_queries__["k" /* updatedEntriesQuery */], {
            variables: {
                mediaType: 'ANIME',
                userId: user.id,
                sort: __WEBPACK_IMPORTED_MODULE_6__types_anilist_enums_mediaSorts__["a" /* MediaSort */].UPDATED_TIME_DESC,
                page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
                perPage: pageInfo ? pageInfo.perPage || 10 : 1,
            },
        }).map(function (response) {
            var listEntriesDto = _this.getResponseData(response);
            if (listEntriesDto) {
                listEntriesDto.Page.mediaList.map(function (listEntry) { return Object(__WEBPACK_IMPORTED_MODULE_4__modules_anime_domain_anime_domain__["c" /* getParsedListEntry */])(listEntry); });
            }
            return listEntriesDto && listEntriesDto.Page;
        });
    };
    AnimeApi.prototype.queryRecentlyFinishedAiringAnime = function (query, pageInfo) {
        var _this = this;
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_8__anime_api_queries__["b" /* finishedAiringMediaQuery */], {
            variables: Object(__WEBPACK_IMPORTED_MODULE_4__modules_anime_domain_anime_domain__["d" /* mapQueryFilters */])(query, {
                mediaType: 'ANIME',
                status: 'FINISHED',
                sort: 'END_DATE_DESC',
                onList: true,
                idIn: query && query.idIn,
                idtIn: query && query.idNotIn,
                page: pageInfo ? (pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1) : 1,
                perPage: pageInfo ? pageInfo.perPage || 10 : 1,
            }),
        }).map(function (response) {
            var listEntriesDto = _this.getResponseData(response);
            if (listEntriesDto) {
                listEntriesDto.Page.media.map(function (media) { return Object(__WEBPACK_IMPORTED_MODULE_4__modules_anime_domain_anime_domain__["b" /* getParsedAnime */])(media); });
            }
            return listEntriesDto && listEntriesDto.Page;
        });
    };
    AnimeApi.prototype.queryRelatedAnimeMedia = function (user) {
        var _this = this;
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_8__anime_api_queries__["g" /* relatedMediaQuery */], {
            variables: {
                mediaType: 'ANIME',
                userId: user.id,
            },
        }).map(function (response) {
            var mediaList = [];
            var listMediaDto = _this.getResponseData(response);
            if (listMediaDto) {
                listMediaDto.MediaListCollection.lists.forEach(function (list) {
                    list.entries.forEach(function (listEntry) {
                        mediaList = mediaList.concat([listEntry.media]);
                    });
                });
            }
            return mediaList;
        });
    };
    AnimeApi.prototype.queryAnimeListFavourites = function (user, callback) {
        this.queryFavouritesResultsPage({
            userId: user.id,
            page: 0,
        }, [], callback);
    };
    AnimeApi.prototype.queryFavouritesResultsPage = function (options, favourites, callback) {
        var _this = this;
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_8__anime_api_queries__["d" /* listFavouritesQuery */], {
            variables: options,
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (response) {
            var results = [];
            var responseData = _this.getResponseData(response);
            if (responseData && responseData.User && responseData.User.favourites && responseData.User.favourites.anime) {
                var favouritesData = responseData.User.favourites.anime;
                results = favouritesData.nodes;
                favourites = favourites.concat(results);
                if (favouritesData.pageInfo.hasNextPage) {
                    options.page++;
                    _this.queryFavouritesResultsPage(options, favourites, callback);
                }
                else {
                    callback(favourites);
                }
            }
        }))
            .subscribe();
    };
    AnimeApi.prototype.queryAnimeListFavouriteIDs = function (user, callback) {
        this.queryAnimeListFavourites(user, function (listFavourites) {
            var favouriteIDs = [];
            listFavourites.forEach(function (media) {
                favouriteIDs.push(media.id);
            });
            callback(favouriteIDs);
        });
    };
    AnimeApi.prototype.saveAnimeListEntry = function (listEntry) {
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_8__anime_api_queries__["h" /* saveListEntryQuery */], {
            variables: {
                status: listEntry.status || 'COMPLETED',
                mediaId: listEntry.media.id,
                scoreRaw: listEntry.scoreRaw,
            },
        });
    };
    AnimeApi.prototype.deleteAnimeListEntry = function (listEntry) {
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_8__anime_api_queries__["a" /* deleteListEntryQuery */], {
            variables: {
                id: listEntry.id,
            },
        });
    };
    AnimeApi.prototype.toggleAnimeFavouriteEntry = function (listEntry) {
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_8__anime_api_queries__["j" /* toggleFavouriteEntryQuery */], {
            variables: {
                animeId: listEntry.media.id,
            },
        });
    };
    AnimeApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__store_auth_store__["a" /* AuthStore */]])
    ], AnimeApi);
    return AnimeApi;
}(__WEBPACK_IMPORTED_MODULE_7__api__["a" /* AniListApi */]));



/***/ }),

/***/ "../../../../../src/app/api/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AniListApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");




var AniListApi = (function () {
    function AniListApi(httpClient, authStore) {
        this.httpClient = httpClient;
        this.authStore = authStore;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__app_constants__["e" /* apiUrl */];
    }
    AniListApi.prototype.getRequestOptions = function () {
        var accessToken = this.authStore.getAccessToken();
        return { headers: accessToken ? { Authorization: "Bearer " + accessToken } : {} };
    };
    AniListApi.prototype.postRequest = function (query, options) {
        return this.httpClient
            .post(this.apiUrl, {
            query: query,
            variables: options && options.variables,
        }, this.getRequestOptions())
            .pipe(this.mapObjectErrorToStringError());
    };
    AniListApi.prototype.isValidResponse = function (response) {
        return !!this.getResponseData(response);
    };
    AniListApi.prototype.getResponseData = function (response) {
        return !!response && response.data;
    };
    AniListApi.prototype.mapObjectErrorToStringError = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_throw__["a" /* _throw */])(JSON.stringify(error, undefined, 2)); });
    };
    return AniListApi;
}());



/***/ }),

/***/ "../../../../../src/app/api/auth/auth.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_auth_store__ = __webpack_require__("../../../../../src/app/store/auth.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anime_anime_api_queries__ = __webpack_require__("../../../../../src/app/api/anime/anime-api.queries.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api__ = __webpack_require__("../../../../../src/app/api/api.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthApi = (function (_super) {
    __extends(AuthApi, _super);
    function AuthApi(httpClient, authStore) {
        var _this = _super.call(this, httpClient, authStore) || this;
        _this.httpClient = httpClient;
        _this.authStore = authStore;
        return _this;
    }
    AuthApi.prototype.queryUser = function () {
        var _this = this;
        return this.postRequest(__WEBPACK_IMPORTED_MODULE_4__anime_anime_api_queries__["l" /* userQuery */]).map(function (response) {
            var listEntriesDto = _this.getResponseData(response);
            return listEntriesDto && listEntriesDto.Viewer;
        });
    };
    AuthApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__store_auth_store__["a" /* AuthStore */]])
    ], AuthApi);
    return AuthApi;
}(__WEBPACK_IMPORTED_MODULE_5__api__["a" /* AniListApi */]));



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mt-header></mt-header>\n\n<div class=\"content-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n\n<mt-footer></mt-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return apiLoginUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return apiTokenPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return accessTokenCookieKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return userCookieKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dashboardUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return animeSearchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return userListUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return rootUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return defaultModalOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var apiUrl = 'https://graphql.anilist.co';
var apiLoginUrl = "https://anilist.co/api/v2/oauth/authorize?client_id=" + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].anilist_client_id + "&response_type=token";
var apiTokenPrefix = '#access_token=';
var accessTokenCookieKey = 'accessToken';
var userCookieKey = 'user';
var dashboardUrl = '/dashboard';
var animeSearchUrl = '/anime-search';
var userListUrl = '/user-anime-list';
var rootUrl = animeSearchUrl;
var defaultModalOptions = {
    minWidth: '480px',
    width: 'auto',
    maxWidth: '672px',
};


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_anime_anime_api__ = __webpack_require__("../../../../../src/app/api/anime/anime.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_auth_auth_api__ = __webpack_require__("../../../../../src/app/api/auth/auth.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_anime_anime_module__ = __webpack_require__("../../../../../src/app/modules/anime/anime.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_shared_shared_module__ = __webpack_require__("../../../../../src/app/modules/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_anime_detail_anime_detail_component__ = __webpack_require__("../../../../../src/app/pages/anime-detail/anime-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_anime_search_anime_search_component__ = __webpack_require__("../../../../../src/app/pages/anime-search/anime-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_anime_list_user_anime_list_component__ = __webpack_require__("../../../../../src/app/pages/user-anime-list/user-anime-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_anime_service__ = __webpack_require__("../../../../../src/app/services/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_auth_store__ = __webpack_require__("../../../../../src/app/store/auth.store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', redirectTo: '/anime-search', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__["a" /* LoginPageComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard_component__["a" /* DashboardPageComponent */] },
    { path: 'anime-search', component: __WEBPACK_IMPORTED_MODULE_8__pages_anime_search_anime_search_component__["a" /* AnimeSearchPageComponent */] },
    { path: 'anime-detail/:id', component: __WEBPACK_IMPORTED_MODULE_7__pages_anime_detail_anime_detail_component__["a" /* AnimeDetailPageComponent */] },
    { path: 'user-anime-list', component: __WEBPACK_IMPORTED_MODULE_12__pages_user_anime_list_user_anime_list_component__["a" /* UserAnimeListPageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundPageComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard_component__["a" /* DashboardPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_anime_search_anime_search_component__["a" /* AnimeSearchPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_anime_detail_anime_detail_component__["a" /* AnimeDetailPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_user_anime_list_user_anime_list_component__["a" /* UserAnimeListPageComponent */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_6__modules_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_5__modules_anime_anime_module__["a" /* AnimeModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_anime_service__["a" /* AnimeService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__api_anime_anime_api__["a" /* AnimeApi */], __WEBPACK_IMPORTED_MODULE_3__api_auth_auth_api__["a" /* AuthApi */], __WEBPACK_IMPORTED_MODULE_15__store_auth_store__["a" /* AuthStore */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/anime.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/modules/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_modals_mt_list_entry_form_modal_mt_list_entry_form_modal_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modals_mt_media_detail_modal_mt_media_detail_modal_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mt_anime_info_mt_anime_info_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_mt_cover_media_mt_cover_media_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_mt_genres_overview_mt_genres_overview_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mt_list_related_media_mt_list_related_media_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_mt_media_actions_mt_media_actions_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_mt_recently_finished_media_by_format_mt_recently_finished_media_by_format_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_mt_recently_finished_media_mt_recently_finished_media_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_mt_recently_updated_list_entries_mt_recently_updated_list_entries_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_mt_search_results_table_mt_search_results_table_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_mt_user_anime_list_table_mt_user_anime_list_table_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var declarations = [
    __WEBPACK_IMPORTED_MODULE_4__components_mt_anime_info_mt_anime_info_component__["a" /* MtAnimeInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_mt_cover_media_mt_cover_media_component__["a" /* MtCoverMediaComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_mt_genres_overview_mt_genres_overview_component__["a" /* MtGenresOverviewComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components_modals_mt_list_entry_form_modal_mt_list_entry_form_modal_component__["a" /* MtListEntryFormModalComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_mt_list_related_media_mt_list_related_media_component__["a" /* MtListRelatedMediaComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_mt_media_actions_mt_media_actions_component__["a" /* MtMediaActionsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_modals_mt_media_detail_modal_mt_media_detail_modal_component__["a" /* MtMediaDetailModalComponent */],
    __WEBPACK_IMPORTED_MODULE_9__components_mt_recently_finished_media_by_format_mt_recently_finished_media_by_format_component__["a" /* MtRecentlyFinishedMediaByFormatComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components_mt_recently_finished_media_mt_recently_finished_media_component__["a" /* MtRecentlyFinishedMediaComponent */],
    __WEBPACK_IMPORTED_MODULE_11__components_mt_recently_updated_list_entries_mt_recently_updated_list_entries_component__["a" /* MtRecentlyUpdatedListEntriesComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_mt_search_results_table_mt_search_results_table_component__["a" /* MtSearchResultsTableComponent */],
    __WEBPACK_IMPORTED_MODULE_13__components_mt_user_anime_list_table_mt_user_anime_list_table_component__["a" /* MtUserAnimeListTableComponent */],
];
var AnimeModule = (function () {
    function AnimeModule() {
    }
    AnimeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: declarations,
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
            exports: declarations,
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__components_modals_mt_list_entry_form_modal_mt_list_entry_form_modal_component__["a" /* MtListEntryFormModalComponent */], __WEBPACK_IMPORTED_MODULE_3__components_modals_mt_media_detail_modal_mt_media_detail_modal_component__["a" /* MtMediaDetailModalComponent */]],
        })
    ], AnimeModule);
    return AnimeModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<mt-modal>\n  <mt-modal-header (onClosePressed)=\"this.dismiss()\">\n    {{ media.title.romaji }}\n  </mt-modal-header>\n\n  <form [formGroup]=\"listEntryForm\" (ngSubmit)=\"saveEntry()\">\n    <mt-modal-content>\n      <!-- status -->\n      <div class=\"form-group\">\n        <mat-form-field>\n          <mat-select placeholder=\"Status\" formControlName=\"status\">\n            <mat-option *ngFor=\"let status of liestEntryStatusList\" [value]=\"status.value\">\n              {{ status.label }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <!-- score -->\n      <div class=\"form-group\">\n        <mat-form-field class=\"score-input\">\n          <mat-label>Score</mat-label>\n          <input\n            matInput\n            type=\"number\"\n            min=\"0\"\n            max=\"10\"\n            step=\".1\"\n            [placeholder]=\"listEntry ? listEntry.scoreRaw / 10 : 5\"\n            formControlName=\"score\"\n          />\n        </mat-form-field>\n        / 10\n      </div>\n\n      <!--<mat-slider min=\"0\" max=\"10\" value=\"5\" step=\"0.5\" tickInterval=\"2\" class=\"full-width no-padding\"></mat-slider>-->\n\n      <!--<span *ngIf=\"listEntry !== undefined\">-->\n      <!--<button mat-raised-button color=\"warn\" class=\"margin-right-s square-button\" (click)=\"deleteEntry($event)\">-->\n      <!--<fa-icon name=\"trash\" class=\"baseline\"></fa-icon>-->\n      <!--</button>-->\n      <!--</span>-->\n    </mt-modal-content>\n\n    <mat-divider></mat-divider>\n\n    <mt-modal-footer>\n      <span class=\"float-right\">\n        <button\n          mat-raised-button\n          color=\"accent\"\n          class=\"margin-right-xs\"\n          [disabled]=\"!listEntryForm.valid || !isSubmitEnabled()\"\n        >\n          <fa-icon name=\"save\" class=\"baseline margin-right-xxxs\"></fa-icon>\n          Submit\n        </button>\n\n        <button mat-raised-button class=\"float-right\" (click)=\"dismiss($event)\">\n          <fa-icon name=\"times\" class=\"baseline margin-right-xxxs\"></fa-icon>\n          Cancel\n        </button>\n      </span>\n    </mt-modal-footer>\n  </form>\n</mt-modal>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n.content .form-group {\n  margin: auto; }\n\n.content mat-form-field {\n  width: 100%; }\n  .content mat-form-field.score-input {\n    width: 72px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtListEntryFormModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_anime_service__ = __webpack_require__("../../../../../src/app/services/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types_anilist_enums_listEntryStatus__ = __webpack_require__("../../../../../src/app/types/anilist/enums/listEntryStatus.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var MtListEntryFormModalComponent = (function () {
    function MtListEntryFormModalComponent(animeService, formBuilder, dialogRef, data) {
        this.animeService = animeService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.liestEntryStatusList = __WEBPACK_IMPORTED_MODULE_5__types_anilist_enums_listEntryStatus__["a" /* listEntryStatusValues */];
        this.listEntry = data.listEntry;
        this.media = data.media;
        if (this.listEntry) {
            this.originalEntry = __assign({}, this.listEntry);
        }
        this.listEntryForm = this.formBuilder.group({
            status: [
                this.originalEntry && this.originalEntry.status ? this.originalEntry.status : 'COMPLETED',
                [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            ],
            score: [
                this.originalEntry && this.originalEntry.scoreRaw && this.originalEntry.scoreRaw / 10,
                [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].max(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(0)],
            ],
        });
    }
    MtListEntryFormModalComponent.prototype.saveEntry = function () {
        var _this = this;
        var entryToSave = this.getFormEntry();
        this.animeService
            .saveAnimeListEntry(entryToSave)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (response) {
            var success = response.data.SaveMediaListEntry.id !== undefined;
            if (success) {
                if (_this.listEntry) {
                    _this.listEntry.scoreRaw = entryToSave.scoreRaw;
                    _this.listEntry.status = entryToSave.status;
                }
                _this.dialogRef.close(_this.listEntry);
            }
        }))
            .subscribe();
    };
    MtListEntryFormModalComponent.prototype.deleteEntry = function (event) {
        var _this = this;
        this.preventDefault(event);
        this.animeService
            .deleteAnimeListEntry(this.listEntry)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (response) {
            var success = response.data.DeleteMediaListEntry.deleted === true;
            if (success) {
                _this.dialogRef.close({
                    deletedEntry: _this.listEntry,
                });
            }
        }))
            .subscribe();
    };
    MtListEntryFormModalComponent.prototype.dismiss = function (event) {
        this.preventDefault(event);
        this.dialogRef.close();
    };
    MtListEntryFormModalComponent.prototype.isSubmitEnabled = function () {
        return !this.originalEntry || this.getFormEntry() !== this.originalEntry;
    };
    MtListEntryFormModalComponent.prototype.getFormEntry = function () {
        return {
            media: this.media,
            scoreRaw: this.listEntryForm.value.score * 10,
            status: this.listEntryForm.value.status,
        };
    };
    MtListEntryFormModalComponent.prototype.preventDefault = function (event) {
        if (event) {
            event.preventDefault();
        }
    };
    MtListEntryFormModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-list-entry-form-modal',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.scss")],
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_anime_service__["a" /* AnimeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */], Object])
    ], MtListEntryFormModalComponent);
    return MtListEntryFormModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<mt-modal>\n  <mt-modal-header (onClosePressed)=\"this.dismiss()\">\n    <mt-media-actions *ngIf=\"media\" [media]=\"media\" [fromModal]=\"true\" class=\"inline-block margin-right-xxxs\">\n    </mt-media-actions>\n\n    {{ media.title.romaji }}\n  </mt-modal-header>\n\n  <mt-modal-content>\n    <mt-anime-info *ngIf=\"media\" [anime]=\"media\" [generalInfoOnly]=\"true\"> </mt-anime-info>\n  </mt-modal-content>\n\n  <mt-modal-footer>\n    <button mat-raised-button color=\"accent\" (click)=\"goToDetail()\">\n      <fa-icon name=\"newspaper\" class=\"baseline margin-right-xxxs\"></fa-icon>\n      Open full detail\n    </button>\n  </mt-modal-footer>\n</mt-modal>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtMediaDetailModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MtMediaDetailModalComponent = (function () {
    function MtMediaDetailModalComponent(dialogRef, router, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
        this.media = data.media;
    }
    MtMediaDetailModalComponent.prototype.dismiss = function () {
        this.dialogRef.close();
    };
    MtMediaDetailModalComponent.prototype.goToDetail = function () {
        this.router.navigate(['anime-detail/', this.media.id]);
        this.dismiss();
    };
    MtMediaDetailModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-media-detail-modal',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.scss")],
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], Object])
    ], MtMediaDetailModalComponent);
    return MtMediaDetailModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"anime\" [class.general-info-only]=\"generalInfoOnly\">\n  <div [class.row]=\"showAsColumns\">\n    <!-- left column -->\n    <div class=\"column left\">\n      <img [src]=\"anime.coverImage?.large\" class=\"cover\" />\n\n      <div *ngIf=\"anime.description\">\n        <h4 class=\"no-margin-top margin-bottom-xxs\">\n          Description:\n        </h4>\n\n        <div [innerHTML]=\"anime.description\"></div>\n      </div>\n    </div>\n\n    <!-- right column -->\n    <div class=\"column right\">\n      <p *ngIf=\"!generalInfoOnly && anime.format\" class=\"property-value-pair flex-box\">\n        <strong class=\"property\">\n          Format:\n        </strong>\n\n        <span class=\"value\">\n          {{ anime.format }}\n        </span>\n      </p>\n\n      <p *ngIf=\"!generalInfoOnly && anime.episodes\" class=\"property-value-pair flex-box\">\n        <strong class=\"property\">\n          Episodes:\n        </strong>\n\n        <span class=\"value\">\n          {{ anime.episodes }}\n        </span>\n      </p>\n\n      <p *ngIf=\"!generalInfoOnly && anime.duration\" class=\"property-value-pair flex-box\">\n        <strong class=\"property\">\n          Duration:\n        </strong>\n\n        <span class=\"value\">\n          {{ getFormattedMediaDuration(anime) }}\n        </span>\n      </p>\n\n      <p *ngIf=\"!generalInfoOnly && anime.startDate.year\" class=\"property-value-pair flex-box\">\n        <strong class=\"property\">\n          Year:\n        </strong>\n\n        <span class=\"value\">\n          {{ anime.startDate.year }}\n        </span>\n      </p>\n\n      <p *ngIf=\"!generalInfoOnly && anime.format?.length\" class=\"property-value-pair flex-box\">\n        <strong class=\"property\">\n          Format:\n        </strong>\n\n        <span class=\"value\">\n          {{ anime.format }}\n        </span>\n      </p>\n\n      <p *ngIf=\"anime.status?.length\" class=\"property-value-pair flex-box\">\n        <strong class=\"property\">\n          Status:\n        </strong>\n\n        <span class=\"value\">\n          {{ anime.status }}\n        </span>\n      </p>\n\n      <p *ngIf=\"anime.studios?.nodes?.length\" class=\"property-value-pair flex-box\">\n        <strong class=\"property\">\n          Studio:\n        </strong>\n\n        <span class=\"value\">\n          {{ anime.studios.nodes[0].name }}\n        </span>\n      </p>\n\n      <p *ngIf=\"!generalInfoOnly && anime.averageScore\" class=\"property-value-pair flex-box\">\n        <strong class=\"property\">\n          Score:\n        </strong>\n\n        <span class=\"value\"> {{ anime.averageScore / 10 }}/10 </span>\n      </p>\n    </div>\n  </div>\n\n  <!-- below columns -->\n  <p *ngIf=\"!generalInfoOnly && anime.genres?.length\" class=\"property-value-pair flex-box no-margin-bottom\">\n    <strong class=\"property\">\n      Genres:\n    </strong>\n\n    <span class=\"value\">\n      <span *ngFor=\"let genre of anime.genres\">\n        <mat-chip class=\"rounded\">{{ genre }}</mat-chip>\n      </span>\n    </span>\n  </p>\n\n  <p *ngIf=\"anime.tags?.length\" class=\"property-value-pair flex-box no-margin-bottom\">\n    <strong class=\"property\">\n      Tags:\n    </strong>\n\n    <span class=\"value\">\n      <span *ngFor=\"let tag of anime.tags\">\n        <span *ngIf=\"!tag.isMediaSpoiler\">\n          <mat-chip [title]=\"tag.description\">{{ tag.name }}</mat-chip>\n        </span>\n      </span>\n    </span>\n  </p>\n\n  <!-- float fix -->\n  <div></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\nimg.cover {\n  width: 160px;\n  max-width: 33vw;\n  margin-right: 12px;\n  float: left; }\n\n.general-info-only .property-value-pair .property {\n  min-width: 64px !important; }\n\n@media (min-width: 1024px) {\n  .row {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: start;\n        align-items: start; }\n    .row .column {\n      display: inline-block; }\n      .row .column.left {\n        width: calc(100% - 192px);\n        padding-right: 16px;\n        border-right: 1px solid lightgray; }\n      .row .column.right {\n        width: 192px;\n        padding-left: 16px; }\n        .row .column.right .property-value-pair:first-child {\n          margin-top: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtAnimeInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_anilist_anime_types__ = __webpack_require__("../../../../../src/app/types/anilist/anime.types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_anime_domain__ = __webpack_require__("../../../../../src/app/modules/anime/domain/anime.domain.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MtAnimeInfoComponent = (function () {
    function MtAnimeInfoComponent() {
    }
    MtAnimeInfoComponent.prototype.getFormattedMediaDuration = function (media) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__domain_anime_domain__["a" /* getFormattedMediaDuration */])(media);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__types_anilist_anime_types__["a" /* Anime */])
    ], MtAnimeInfoComponent.prototype, "anime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MtAnimeInfoComponent.prototype, "showAsColumns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MtAnimeInfoComponent.prototype, "generalInfoOnly", void 0);
    MtAnimeInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-anime-info',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.scss")],
        })
    ], MtAnimeInfoComponent);
    return MtAnimeInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"media\" (click)=\"showDetail()\" class=\"clickable\">\n  <div [style.background-image]=\"'url(' + media.coverImage.medium + ')'\" class=\"cover\">\n    <div class=\"backdrop\">\n      <div class=\"full-width\">\n        <div *ngIf=\"media.title\">\n          {{ media.title.romaji }}\n        </div>\n\n        <div *ngIf=\"media.averageScore\">({{ media.averageScore / 10 }})</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n.cover {\n  width: 100px;\n  height: 138px;\n  background-position: center center;\n  background-size: cover; }\n  .cover:hover .backdrop {\n    opacity: 1; }\n  .cover:not(:hover) .backdrop {\n    opacity: 0; }\n  .cover .backdrop {\n    font-size: 12px;\n    padding: 4px;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    transition: 0.2s;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    text-align: center;\n    pointer-events: none;\n    background: rgba(0, 0, 0, 0.5);\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtCoverMediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_anilist_media_types__ = __webpack_require__("../../../../../src/app/types/anilist/media.types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_mt_media_detail_modal_mt_media_detail_modal_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MtCoverMediaComponent = (function () {
    function MtCoverMediaComponent(dialog) {
        this.dialog = dialog;
    }
    MtCoverMediaComponent.prototype.ngOnInit = function () {
        if (!this.media && this.listEntry) {
            this.media = this.listEntry.media;
            delete this.listEntry.media;
            this.media.mediaListEntry = this.listEntry;
        }
    };
    MtCoverMediaComponent.prototype.showDetail = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__modals_mt_media_detail_modal_mt_media_detail_modal_component__["a" /* MtMediaDetailModalComponent */], __assign({}, __WEBPACK_IMPORTED_MODULE_2__app_constants__["g" /* defaultModalOptions */], { maxWidth: '800px', data: {
                media: this.media,
            } }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MtCoverMediaComponent.prototype, "listEntry", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__types_anilist_media_types__["a" /* Media */])
    ], MtCoverMediaComponent.prototype, "media", void 0);
    MtCoverMediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-cover-media',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */]])
    ], MtCoverMediaComponent);
    return MtCoverMediaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  Genres Overview\n</h3>\n\n<mat-grid-list *ngIf=\"(genreStatsList?.length | sort: 'amount')\" [cols]=\"getColumnCount()\" rowHeight=\"32px\">\n  <mat-grid-tile\n    *ngFor=\"let genreStats of genreStatsList\"\n    [matTooltip]=\"genreStats.amount + ' entries'\"\n    matTooltipPosition=\"above\"\n  >\n    {{ genreStats.genre }} ({{ genreStats.percentage }}%)\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-tile {\n  cursor: default; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtGenresOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MtGenresOverviewComponent = (function () {
    function MtGenresOverviewComponent() {
        this.maxColumnCount = 5;
        this.minColumnWidth = 160;
    }
    MtGenresOverviewComponent.prototype.ngOnInit = function () {
        this.calculateStatistics();
    };
    MtGenresOverviewComponent.prototype.calculateStatistics = function () {
        var totalCount = 0;
        this.genreStatsList.forEach(function (genreStats) {
            totalCount += genreStats.amount;
        });
        this.genreStatsList.forEach(function (genreStats) {
            genreStats.percentage = Math.round((genreStats.amount * 100) / totalCount);
        });
    };
    MtGenresOverviewComponent.prototype.getColumnCount = function () {
        var columnCount = window.screen.width / this.minColumnWidth;
        return Math.floor(columnCount < this.maxColumnCount ? columnCount : this.maxColumnCount);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MtGenresOverviewComponent.prototype, "genreStatsList", void 0);
    MtGenresOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-genres-overview',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], MtGenresOverviewComponent);
    return MtGenresOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"composite compact\">\n  <div class=\"header\">\n    <h4 class=\"no-margin\">\n      Media related to what you have watched\n    </h4>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <div class=\"content\">\n    <mat-spinner *ngIf=\"!ready\" mode=\"indeterminate\" class=\"margin-auto\"></mat-spinner>\n\n    <div *ngIf=\"mediaList?.length\" class=\"cover-media-grid\">\n      <mt-cover-media *ngFor=\"let media of mediaList\" [media]=\"media\"></mt-cover-media>\n    </div>\n\n    <mat-card *ngIf=\"error\" class=\"error\">\n      <h4>\n        <fa-icon name=\"exclamation-circle\" class=\"margin-right-xxs\"></fa-icon>\n        {{ error }}\n      </h4>\n    </mat-card>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtListRelatedMediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_anime_service__ = __webpack_require__("../../../../../src/app/services/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_auth_store__ = __webpack_require__("../../../../../src/app/store/auth.store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MtListRelatedMediaComponent = (function () {
    function MtListRelatedMediaComponent(animeService, authStore) {
        var _this = this;
        this.animeService = animeService;
        this.authStore = authStore;
        this.maxEntries = 20;
        this.animeService
            .getRelatedAnimeMedia(this.authStore.getUser())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (relatedMediaList) {
            _this.mediaList = relatedMediaList;
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) {
            _this.error = error;
            _this.ready = true;
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])();
        }))
            .subscribe();
    }
    MtListRelatedMediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-list-related-media',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_anime_service__["a" /* AnimeService */], __WEBPACK_IMPORTED_MODULE_4__store_auth_store__["a" /* AuthStore */]])
    ], MtListRelatedMediaComponent);
    return MtListRelatedMediaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.html":
/***/ (function(module, exports) {

module.exports = "<fa-icon name=\"bars\" class=\"menu-toggle clickable\" [matMenuTriggerFor]=\"entryMenu\"></fa-icon>\n\n<mat-menu #entryMenu=\"matMenu\">\n  <mt-menu-action (onPress)=\"saveToList()\" disabled=\"{{ !user }}\" icon=\"{{ isUpdateAvailable() ? 'pen' : 'plus' }}\">\n    {{ isUpdateAvailable() ? 'Update entry' : 'Add to list' }}\n  </mt-menu-action>\n\n  <div *ngIf=\"isUpdateAvailable()\">\n    <mt-menu-action (onPress)=\"toggleFavourite()\" icon=\"star\">\n      Toggle favourite\n    </mt-menu-action>\n  </div>\n\n  <div *ngIf=\"isUpdateAvailable()\">\n    <mt-menu-action (onPress)=\"deleteEntry()\" icon=\"trash\">\n      Delete from list\n    </mt-menu-action>\n  </div>\n\n  <div *ngIf=\"media && !fromModal\">\n    <mt-menu-action (onPress)=\"showDetail()\" icon=\"id-card\">\n      Additional info\n    </mt-menu-action>\n  </div>\n\n  <mt-menu-action (onPress)=\"viewOnAniList()\" icon=\"external-link-alt\">\n    View on AniList\n  </mt-menu-action>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  overflow: visible; }\n\n.action-icon {\n  min-width: 24px;\n  display: inline-block;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtMediaActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_anime_service__ = __webpack_require__("../../../../../src/app/services/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_auth_store__ = __webpack_require__("../../../../../src/app/store/auth.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__types_anilist_media_types__ = __webpack_require__("../../../../../src/app/types/anilist/media.types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_components_with_observable_on_destroy_with_observable_on_destroy_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_mt_list_entry_form_modal_mt_list_entry_form_modal_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals_mt_media_detail_modal_mt_media_detail_modal_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MtMediaActionsComponent = (function (_super) {
    __extends(MtMediaActionsComponent, _super);
    function MtMediaActionsComponent(dialog, matSnackBar, animeService, authService, authStore) {
        var _this = _super.call(this) || this;
        _this.dialog = dialog;
        _this.matSnackBar = matSnackBar;
        _this.animeService = animeService;
        _this.authService = authService;
        _this.authStore = authStore;
        _this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.user = _this.authStore.getUser();
        _this.authService.userChange
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* takeUntil */])(_this.destroyed$), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (user) {
            _this.user = user;
        }))
            .subscribe();
        return _this;
    }
    MtMediaActionsComponent.prototype.ngOnInit = function () {
        if (this.media && this.media.mediaListEntry && !this.listEntry) {
            this.listEntry = this.media.mediaListEntry;
        }
    };
    MtMediaActionsComponent.prototype.saveToList = function () {
        var _this = this;
        this.showFormModal()
            .afterClosed()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (result) {
            if (result) {
                if (result.savedEntry) {
                    _this.showSavedEntryToast(result.savedEntry);
                }
                if (result.deletedEntry) {
                    _this.showDeletedEntryToast(result.deletedEntry);
                }
                _this.onUpdate.emit(result.savedEntry || result.deletedEntry);
            }
        }))
            .subscribe();
    };
    MtMediaActionsComponent.prototype.toggleFavourite = function () {
        var _this = this;
        var targetEntry = this.getListEntry();
        this.animeService
            .toggleFavouriteAnimeListEntry(targetEntry)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (response) {
            var success = response.data.ToggleFavourite !== undefined;
            if (success) {
                _this.showToggledFavouriteToast(targetEntry);
                _this.onUpdate.emit(targetEntry);
            }
        }))
            .subscribe();
    };
    MtMediaActionsComponent.prototype.deleteEntry = function () {
        var _this = this;
        var targetEntry = this.getListEntry();
        this.animeService
            .deleteAnimeListEntry(targetEntry)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (response) {
            var success = response.data.DeleteMediaListEntry.deleted === true;
            if (success) {
                _this.showDeletedEntryToast(targetEntry);
                _this.onUpdate.emit(targetEntry);
            }
        }))
            .subscribe();
    };
    MtMediaActionsComponent.prototype.showDetail = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__modals_mt_media_detail_modal_mt_media_detail_modal_component__["a" /* MtMediaDetailModalComponent */], __assign({}, __WEBPACK_IMPORTED_MODULE_3__app_constants__["g" /* defaultModalOptions */], { maxWidth: '800px', data: {
                media: this.media,
            } }));
    };
    MtMediaActionsComponent.prototype.viewOnAniList = function () {
        window.open("https://anilist.co/anime/" + this.media.id);
    };
    MtMediaActionsComponent.prototype.isUpdateAvailable = function () {
        return !!this.listEntry && !!this.user;
    };
    MtMediaActionsComponent.prototype.getListEntry = function () {
        var mediaCopy = __assign({}, this.media);
        mediaCopy.mediaListEntry = undefined;
        var listEntryCopy = __assign({}, this.listEntry);
        listEntryCopy.media = mediaCopy;
        return listEntryCopy;
    };
    MtMediaActionsComponent.prototype.showFormModal = function () {
        return this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__modals_mt_list_entry_form_modal_mt_list_entry_form_modal_component__["a" /* MtListEntryFormModalComponent */], __assign({}, __WEBPACK_IMPORTED_MODULE_3__app_constants__["g" /* defaultModalOptions */], { data: {
                listEntry: this.listEntry,
                media: this.media,
            } }));
    };
    MtMediaActionsComponent.prototype.showSavedEntryToast = function (listEntry) {
        this.showToast("Updated list entry for \"" + listEntry.media.title.romaji + "\"");
    };
    MtMediaActionsComponent.prototype.showToggledFavouriteToast = function (listEntry) {
        this.showToast("Toggled entry \"" + listEntry.media.title.romaji + "\" as favourite");
    };
    MtMediaActionsComponent.prototype.showDeletedEntryToast = function (listEntry) {
        this.showToast("Deleted list entry for \"" + listEntry.media.title.romaji + "\"");
    };
    MtMediaActionsComponent.prototype.showToast = function (message) {
        this.matSnackBar.open(message, undefined, {
            duration: 10000,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MtMediaActionsComponent.prototype, "listEntry", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__types_anilist_media_types__["a" /* Media */])
    ], MtMediaActionsComponent.prototype, "media", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MtMediaActionsComponent.prototype, "fromModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], MtMediaActionsComponent.prototype, "onUpdate", void 0);
    MtMediaActionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-media-actions',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__services_anime_service__["a" /* AnimeService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__store_auth_store__["a" /* AuthStore */]])
    ], MtMediaActionsComponent);
    return MtMediaActionsComponent;
}(__WEBPACK_IMPORTED_MODULE_8__shared_components_with_observable_on_destroy_with_observable_on_destroy_component__["a" /* WithObservableOnDestroy */]));



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!ready\" mode=\"indeterminate\" class=\"margin-auto\"></mat-spinner>\n\n<div *ngIf=\"mediaList?.length\" class=\"cover-media-grid\">\n  <mt-cover-media *ngFor=\"let media of mediaList\" [media]=\"media\"></mt-cover-media>\n</div>\n\n<mat-paginator\n  *ngIf=\"pagination\"\n  [length]=\"pagination.total\"\n  [pageSize]=\"pagination.perPage\"\n  (page)=\"changePage($event)\"\n  class=\"basic negative-bottom-margin\"\n>\n</mat-paginator>\n\n<mat-card *ngIf=\"error\" class=\"error\">\n  <h4>\n    <fa-icon name=\"exclamation-circle\" class=\"margin-right-xxs\"></fa-icon>\n    {{ error }}\n  </h4>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtRecentlyFinishedMediaByFormatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_anime_service__ = __webpack_require__("../../../../../src/app/services/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_auth_store__ = __webpack_require__("../../../../../src/app/store/auth.store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MtRecentlyFinishedMediaByFormatComponent = (function () {
    function MtRecentlyFinishedMediaByFormatComponent(animeService, authStore) {
        var _this = this;
        this.animeService = animeService;
        this.authStore = authStore;
        this.maxEntries = 16;
        this.whitelistedIds = [];
        this.animeService
            .getAnimeListMediaIdsByStatus(this.authStore.getUser())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (listMediaIdsByStatus) {
            _this.whitelistedIds = (listMediaIdsByStatus.CURRENT || []).concat((listMediaIdsByStatus.PLANNING || []));
            _this.getRecentlyFinishedAiring();
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.onError(error)); }))
            .subscribe();
    }
    MtRecentlyFinishedMediaByFormatComponent.prototype.changePage = function (pageEvent) {
        this.pagination.pageIndex = pageEvent.pageIndex + 1;
        this.getRecentlyFinishedAiring();
    };
    MtRecentlyFinishedMediaByFormatComponent.prototype.getRecentlyFinishedAiring = function () {
        var _this = this;
        this.animeService
            .getRecentlyFinishedAiringAnime({
            idIn: this.whitelistedIds,
            format_in: this.formatIn,
            format_not_in: this.formatNotIn,
        }, {
            perPage: this.maxEntries,
            pageIndex: this.pagination && this.pagination.pageIndex,
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (response) {
            _this.mediaList = response.media;
            _this.pagination = response.pageInfo;
            _this.ready = true;
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.onError(error)); }))
            .subscribe();
    };
    MtRecentlyFinishedMediaByFormatComponent.prototype.onError = function (error) {
        this.error = error;
        this.ready = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MtRecentlyFinishedMediaByFormatComponent.prototype, "formatIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MtRecentlyFinishedMediaByFormatComponent.prototype, "formatNotIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MtRecentlyFinishedMediaByFormatComponent.prototype, "title", void 0);
    MtRecentlyFinishedMediaByFormatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-recently-finished-media-by-format',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_anime_service__["a" /* AnimeService */], __WEBPACK_IMPORTED_MODULE_4__store_auth_store__["a" /* AuthStore */]])
    ], MtRecentlyFinishedMediaByFormatComponent);
    return MtRecentlyFinishedMediaByFormatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"composite compact\">\n  <div class=\"tab-group\">\n    <div class=\"header\">\n      <h4 class=\"no-margin\">\n        Finished airing\n      </h4>\n    </div>\n\n    <div\n      *ngFor=\"let tab of tabs\"\n      class=\"header tab {{ tab === activeTab ? 'active' : 'clickable' }}\"\n      (click)=\"activateTab(tab)\"\n    >\n      <h4 class=\"no-margin\">\n        {{ tab.label }}\n      </h4>\n    </div>\n  </div>\n\n  <div *ngFor=\"let tab of tabs\" [hidden]=\"tab !== activeTab\" class=\"content\">\n    <mt-recently-finished-media-by-format [formatIn]=\"tab.formatIn\" [formatNotIn]=\"tab.formatNotIn\">\n    </mt-recently-finished-media-by-format>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtRecentlyFinishedMediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MtRecentlyFinishedMediaComponent = (function () {
    function MtRecentlyFinishedMediaComponent() {
        this.tabs = [
            {
                label: 'Series',
                formatIn: ['TV'],
            },
            {
                label: 'Movies',
                formatIn: ['MOVIE'],
            },
            {
                label: 'Other',
                formatNotIn: ['TV', 'MOVIE'],
            },
        ];
        this.activeTab = this.tabs[0];
    }
    MtRecentlyFinishedMediaComponent.prototype.activateTab = function (tab) {
        this.activeTab = tab;
    };
    MtRecentlyFinishedMediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-recently-finished-media',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], MtRecentlyFinishedMediaComponent);
    return MtRecentlyFinishedMediaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"composite compact\">\n  <div class=\"header\">\n    <h4 class=\"no-margin\">\n      Your latest list updates\n    </h4>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <div class=\"content\">\n    <mat-spinner *ngIf=\"!ready\" mode=\"indeterminate\" class=\"margin-auto\"></mat-spinner>\n\n    <div *ngIf=\"listEntries?.length\" class=\"cover-media-grid\">\n      <mt-cover-media *ngFor=\"let entry of listEntries\" [listEntry]=\"entry\"></mt-cover-media>\n    </div>\n\n    <mat-paginator\n      *ngIf=\"pagination\"\n      [length]=\"pagination.total\"\n      [pageSize]=\"pagination.perPage\"\n      (page)=\"changePage($event)\"\n      class=\"basic negative-bottom-margin\"\n    >\n    </mat-paginator>\n\n    <mat-card *ngIf=\"error\" class=\"error\">\n      <h4>\n        <fa-icon name=\"exclamation-circle\" class=\"margin-right-xxs\"></fa-icon>\n        {{ error }}\n      </h4>\n    </mat-card>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtRecentlyUpdatedListEntriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_anime_service__ = __webpack_require__("../../../../../src/app/services/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_auth_store__ = __webpack_require__("../../../../../src/app/store/auth.store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MtRecentlyUpdatedListEntriesComponent = (function () {
    function MtRecentlyUpdatedListEntriesComponent(animeService, authService, authStore) {
        this.animeService = animeService;
        this.authService = authService;
        this.authStore = authStore;
        this.maxEntries = 16;
        this.user = this.authStore.getUser();
        this.getRecentlyUpdatedAnime();
    }
    MtRecentlyUpdatedListEntriesComponent.prototype.changePage = function (pageEvent) {
        this.pagination.pageIndex = pageEvent.pageIndex + 1;
        this.getRecentlyUpdatedAnime();
    };
    MtRecentlyUpdatedListEntriesComponent.prototype.getRecentlyUpdatedAnime = function () {
        var _this = this;
        if (this.user) {
            this.animeService
                .getRecentlyUpdatedAnime(this.user, {
                perPage: this.maxEntries,
                pageIndex: this.pagination && this.pagination.pageIndex,
            })
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["c" /* tap */])(function (response) {
                _this.listEntries = response.mediaList;
                _this.pagination = response.pageInfo;
                _this.ready = true;
            }, function (error) {
                _this.error = error;
                _this.ready = true;
            }))
                .subscribe();
        }
    };
    MtRecentlyUpdatedListEntriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-recently-updated-list-entries',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_anime_service__["a" /* AnimeService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__store_auth_store__["a" /* AuthStore */]])
    ], MtRecentlyUpdatedListEntriesComponent);
    return MtRecentlyUpdatedListEntriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table\n  #table\n  [dataSource]=\"dataSource\"\n  [hidden]=\"!dataSource?.data?.length\"\n  class=\"series-table\"\n  matSort\n  (matSortChange)=\"sortBy($event)\"\n>\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      <mt-media-actions [media]=\"anime\"></mt-media-actions>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"cover-image\">\n    <mat-header-cell *matHeaderCellDef>\n      Cover\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      <img [src]=\"anime.coverImage.medium\" class=\"cover\" />\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title-romaji\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>\n      Title\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      <span class=\"title\">\n        {{ anime.title.romaji }}\n      </span>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"format\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>\n      Format\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      {{ anime.format }}\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"start-date\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header start=\"desc\">\n      Year\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      {{ anime.startDate.year }}\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"genres\">\n    <mat-header-cell *matHeaderCellDef>\n      Genres\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      <mat-list>\n        <mat-list-item *ngFor=\"let genre of anime.genres\">\n          <mat-chip class=\"rounded\">{{ genre }}</mat-chip>\n        </mat-list-item>\n      </mat-list>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"score\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header start=\"desc\">\n      Score\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\"> {{ anime.averageScore / 10 }}/10 </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"episodes\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header start=\"desc\">\n      Episodes\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      {{ anime.episodes }}\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"tableRows\"></mat-header-row>\n  <mat-row\n    *matRowDef=\"let anime; columns: tableRows\"\n    [class.completed]=\"anime?.mediaListEntry?.status === 'COMPLETED'\"\n    [class.dropped]=\"anime?.mediaListEntry?.status === 'DROPPED'\"\n    [class.paused]=\"anime?.mediaListEntry?.status === 'PAUSED'\"\n    [class.planned]=\"anime?.mediaListEntry?.status === 'PLANNING'\"\n    [class.repeating]=\"anime?.mediaListEntry?.status === 'REPEATING'\"\n    [class.watching]=\"anime?.mediaListEntry?.status === 'CURRENT'\"\n  >\n  </mat-row>\n</mat-table>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtSearchResultsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_anilist_enums_mediaSorts__ = __webpack_require__("../../../../../src/app/types/anilist/enums/mediaSorts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MtSearchResultsTableComponent = (function () {
    function MtSearchResultsTableComponent() {
        this.onSortChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.tableRows = [
            'actions',
            'cover-image',
            'title-romaji',
            'format',
            'start-date',
            'genres',
            'score',
            'episodes',
        ];
    }
    MtSearchResultsTableComponent.prototype.ngOnInit = function () { };
    MtSearchResultsTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.tableData.currentValue !== changes.tableData.previousValue) {
            this.initializeDataSource();
        }
    };
    MtSearchResultsTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    MtSearchResultsTableComponent.prototype.sortBy = function (sort) {
        this.onSortChange.emit(__WEBPACK_IMPORTED_MODULE_2__types_anilist_enums_mediaSorts__["a" /* MediaSort */].fromSort(sort));
    };
    MtSearchResultsTableComponent.prototype.initializeDataSource = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](this.tableData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MtSearchResultsTableComponent.prototype, "tableData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], MtSearchResultsTableComponent.prototype, "onSortChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSort */])
    ], MtSearchResultsTableComponent.prototype, "sort", void 0);
    MtSearchResultsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-search-results-table',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], MtSearchResultsTableComponent);
    return MtSearchResultsTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 [id]=\"tableStatus.value\" class=\"capitalize no-margin-bottom margin-top-xxs vertical-padding-xs\">\n  {{ tableStatus.label }}\n</h3>\n\n<mat-card class=\"no-padding\">\n  <mat-table\n    #table\n    [dataSource]=\"dataSource\"\n    [hidden]=\"!dataSource || dataSource.data.length < 1\"\n    matSort\n    class=\"series-table\"\n  >\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n      <mat-cell *matCellDef=\"let entry\">\n        <mt-media-actions [listEntry]=\"entry\" [media]=\"entry.media\" (onUpdate)=\"onUpdate($event)\"> </mt-media-actions>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"cover-image\">\n      <mat-header-cell *matHeaderCellDef>\n        Cover\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let entry\">\n        <img [src]=\"entry.media.coverImage.medium\" class=\"cover\" />\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"title-romaji\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>\n        Title\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let entry\">\n        <span class=\"title\">\n          {{ entry.media.title.romaji }}\n        </span>\n        <span *ngIf=\"favouriteIDs?.indexOf(entry.media.id) >= 0\">\n          <fa-icon name=\"heart\" class=\"favourite\"></fa-icon>\n        </span>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"format\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>\n        Format\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let entry\">\n        {{ entry.media.format }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"start-date\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header start=\"desc\">\n        Year\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let entry\">\n        {{ entry.media.startDate.year }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"genres\">\n      <mat-header-cell *matHeaderCellDef>\n        Genres\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let entry\">\n        <mat-list>\n          <mat-list-item *ngFor=\"let genre of entry.media.genres\">\n            <mat-chip class=\"rounded\">{{ genre }}</mat-chip>\n          </mat-list-item>\n        </mat-list>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"score\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header start=\"desc\">\n        Score\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let entry\"> {{ entry.scoreRaw / 10 }}/10 </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"episodes\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header start=\"desc\">\n        Episodes\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let entry\">\n        {{ entry.media.episodes }}\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"tableRows\"></mat-header-row>\n    <mat-row *matRowDef=\"let entry; columns: tableRows\"></mat-row>\n  </mat-table>\n\n  <mat-paginator\n    #paginator\n    [pageSize]=\"10\"\n    [pageSizeOptions]=\"[5, 10, 25, 50, 75, 100, 250, 500, 750, 1000]\"\n    [showFirstLastButtons]=\"true\"\n    (page)=\"onPageChange()\"\n  >\n  </mat-paginator>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.favourite {\n  padding: 3px 0 0;\n  color: #e91e63; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtUserAnimeListTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_generic_util__ = __webpack_require__("../../../../../src/app/utils/generic.util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MtUserAnimeListTableComponent = (function () {
    function MtUserAnimeListTableComponent(elementRef) {
        this.elementRef = elementRef;
        this.onEntryUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.tableRows = [
            'actions',
            'cover-image',
            'title-romaji',
            'format',
            'start-date',
            'genres',
            'score',
            'episodes',
        ];
    }
    MtUserAnimeListTableComponent.prototype.ngAfterViewInit = function () {
        // TODO: Fix ExpressionChangedAfterItHasBeenCheckedError
        this.initializeDataSource();
        this.bindChildComponents();
    };
    MtUserAnimeListTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.dataSource && changes.filter) {
            this.dataSource.filter = changes.filter.currentValue;
        }
    };
    MtUserAnimeListTableComponent.prototype.onUpdate = function (listEntry) {
        this.onEntryUpdate.emit(listEntry);
    };
    MtUserAnimeListTableComponent.prototype.initializeDataSource = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](this.tableData);
    };
    MtUserAnimeListTableComponent.prototype.bindChildComponents = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = function (listEntry, property) {
            var anime = listEntry.media;
            return {
                'title-romaji': anime.title.romaji.toLowerCase(),
                format: anime.format.toLowerCase(),
                'start-date': +anime.startDate.year,
                genres: anime.genres.length ? anime.genres[0] : '',
                score: +listEntry.scoreRaw,
                episodes: +anime.episodes,
            }[property];
        };
        this.dataSource.filterPredicate = function (listEntry, filter) {
            return (listEntry.media.title.romaji
                .trim()
                .toLowerCase()
                .indexOf(filter.trim().toLowerCase()) >= 0);
        };
    };
    MtUserAnimeListTableComponent.prototype.onPageChange = function () {
        __WEBPACK_IMPORTED_MODULE_2__utils_generic_util__["a" /* GenericUtil */].scrollToRef(this.elementRef);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MtUserAnimeListTableComponent.prototype, "tableStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MtUserAnimeListTableComponent.prototype, "tableData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MtUserAnimeListTableComponent.prototype, "favouriteIDs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MtUserAnimeListTableComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], MtUserAnimeListTableComponent.prototype, "onEntryUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSort */])
    ], MtUserAnimeListTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginator */])
    ], MtUserAnimeListTableComponent.prototype, "paginator", void 0);
    MtUserAnimeListTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-user-anime-list-table',
            template: __webpack_require__("../../../../../src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], MtUserAnimeListTableComponent);
    return MtUserAnimeListTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/anime/domain/anime.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mapQueryFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getParsedAnime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getParsedListEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFormattedMediaDuration; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var fallbackCover = 'assets/pictures/non-vectorial/no-cover-available.png';
var searchFilters = [
    'id',
    'search',
    'startDate_greater',
    'startDate_lesser',
    'averageScore_greater',
    'averageScore_lesser',
    'genre_in',
    'genre_not_in',
    'format_in',
    'format_not_in',
    'status_in',
    'status_not_in',
];
var mapQueryFilters = function (query, options) {
    var mappedFilters = __assign({}, options);
    searchFilters.forEach(function (filter) {
        if (query[filter] && query[filter].length !== 0) {
            mappedFilters[filter] = query[filter];
        }
    });
    return mappedFilters;
};
var getParsedAnime = function (anime) {
    var parsedAnime = __assign({}, anime);
    if (parsedAnime) {
        if (parsedAnime.coverImage &&
            parsedAnime.coverImage.medium === 'https://cdn.anilist.co/img/dir/anime/med/noimg.jpg') {
            parsedAnime.coverImage.medium = fallbackCover;
        }
        if (parsedAnime.mediaListEntry) {
            getParsedListEntry(parsedAnime.mediaListEntry);
        }
    }
    return parsedAnime;
};
var getParsedListEntry = function (listEntry) {
    var parsedListEntry = __assign({}, listEntry);
    if (parsedListEntry) {
        if (parsedListEntry.media) {
            getParsedAnime(parsedListEntry.media);
        }
    }
    return parsedListEntry;
};
var getFormattedMediaDuration = function (media) {
    return media.duration < 60 ? media.duration + "m" : Math.floor(media.duration / 60) + "h " + media.duration % 60 + "m";
};


/***/ }),

/***/ "../../../../../src/app/modules/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var modules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDividerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatPaginatorModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSliderModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSortModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTooltipModule */]
];
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: modules,
            exports: modules
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/fa-icon/fa-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<i [ngClass]=\"[type || 'fas', 'fa-' + name, class || '']\"></i>\n"

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/fa-icon/fa-icon.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/fa-icon/fa-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaIconComponent = (function () {
    function FaIconComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FaIconComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FaIconComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FaIconComponent.prototype, "class", void 0);
    FaIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fa-icon',
            template: __webpack_require__("../../../../../src/app/modules/shared/components/fa-icon/fa-icon.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/components/fa-icon/fa-icon.component.scss")],
        })
    ], FaIconComponent);
    return FaIconComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n:host > .content {\n  -ms-flex: 1;\n      flex: 1;\n  max-height: calc(100vh - 70px - 84px - 1px * 2);\n  overflow-y: auto;\n  box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtModalContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MtModalContentComponent = (function () {
    function MtModalContentComponent() {
    }
    MtModalContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-modal-content',
            template: __webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.scss")],
        })
    ], MtModalContentComponent);
    return MtModalContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\n\n<div class=\"footer no-vertical-padding\">\n  <div class=\"full-width text-center\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n:host > .footer {\n  height: 84px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtModalFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MtModalFooterComponent = (function () {
    function MtModalFooterComponent() {
    }
    MtModalFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-modal-footer',
            template: __webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.scss")],
        })
    ], MtModalFooterComponent);
    return MtModalFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header no-vertical-padding no-margin\">\n  <div class=\"title\">\n    <h3 class=\"no-margin\">\n      <ng-content></ng-content>\n    </h3>\n  </div>\n\n  <fa-icon name=\"times\" class=\"clickable\" (click)=\"onClosePressed.emit()\"></fa-icon>\n</div>\n\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n:host > .header {\n  height: 70px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n  :host > .header > .title {\n    -ms-flex: 1;\n        flex: 1;\n    padding-right: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtModalHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MtModalHeaderComponent = (function () {
    function MtModalHeaderComponent() {
        this.onClosePressed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], MtModalHeaderComponent.prototype, "onClosePressed", void 0);
    MtModalHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-modal-header',
            template: __webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.scss")],
        })
    ], MtModalHeaderComponent);
    return MtModalHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal/mt-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"composite\">\n  <ng-content></ng-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal/mt-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/modal/mt-modal/mt-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MtModalComponent = (function () {
    function MtModalComponent() {
    }
    MtModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-modal',
            template: __webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal/mt-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal/mt-modal.component.scss")],
        })
    ], MtModalComponent);
    return MtModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/mt-footer/mt-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <div class=\"text-center\">\n    <div>\n      About\n    </div>\n\n    <div class=\"links-wrapper\">\n      <a [href]=\"gitHubProjectUrl\"><fa-icon type=\"fab\" name=\"github\"></fa-icon> GitHub repository </a>\n    </div>\n\n    <div class=\"about-anilist margin-top-xxs\">Powered by the <mat-icon svgIcon=\"anilist\"></mat-icon> AniList API</div>\n  </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/mt-footer/mt-footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\nmat-toolbar {\n  display: block;\n  height: auto;\n  padding: 16px;\n  font-size: 14px;\n  line-height: 21px; }\n  mat-toolbar .about-anilist {\n    color: #444; }\n    mat-toolbar .about-anilist .mat-icon[svgIcon='anilist'] {\n      height: 12px;\n      width: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/mt-footer/mt-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MtFooterComponent = (function () {
    function MtFooterComponent(iconRegistry, sanitizer) {
        this.gitHubProjectUrl = 'https://github.com/jesuscc1993/unofficial-ng5-anilist-client';
        iconRegistry.addSvgIcon('anilist', sanitizer.bypassSecurityTrustResourceUrl('assets/pictures/vectorial/icons/anilist.svg'));
    }
    MtFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-footer',
            template: __webpack_require__("../../../../../src/app/modules/shared/components/mt-footer/mt-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/components/mt-footer/mt-footer.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], MtFooterComponent);
    return MtFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/mt-header/mt-header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <div>\n    <span class=\"hide-below-s\">\n      Anime management client\n    </span>\n  </div>\n\n  <div class=\"centered-content section-links\" *ngIf=\"user\">\n    <a [routerLink]=\"animeSearchUrl\" [class.active]=\"onAnimeSearch\">\n      <fa-icon name=\"search\" class=\"section-icon\"></fa-icon>\n      <span class=\"small\">\n        Anime search\n      </span>\n    </a>\n    <a [routerLink]=\"dashboardUrl\" [class.active]=\"onDashboard\">\n      <fa-icon name=\"columns\" class=\"section-icon\"></fa-icon>\n      <span class=\"small\">\n        Dashboard\n      </span>\n    </a>\n    <a [routerLink]=\"userListUrl\" [class.active]=\"onUserList\">\n      <fa-icon name=\"th-list\" class=\"section-icon\"></fa-icon>\n      <span class=\"small\">\n        User's list\n      </span>\n    </a>\n  </div>\n\n  <!-- logged in -->\n  <div *ngIf=\"user\" class=\"flex-box center\">\n    <span class=\"padding-right-xs clickable hide-below-s\" [matMenuTriggerFor]=\"userMenu\">\n      {{ user.name }}\n    </span>\n    <img class=\"avatar clickable hide-below-s\" [src]=\"user.avatar.large\" [matMenuTriggerFor]=\"userMenu\" />\n\n    <a class=\"clickable show-below-s\" [matMenuTriggerFor]=\"userMenu\">\n      <fa-icon name=\"bars\"></fa-icon>\n    </a>\n\n    <mat-menu #userMenu=\"matMenu\">\n      <mt-menu-action (onPress)=\"navigateToAnilistProfile()\" icon=\"external-link-alt\">\n        View profile\n      </mt-menu-action>\n\n      <mt-menu-action (onPress)=\"logOut()\" icon=\"door-open\">\n        Log out\n      </mt-menu-action>\n    </mat-menu>\n  </div>\n\n  <!-- not logged in -->\n  <div *ngIf=\"!user\" class=\"flex-box center\">\n    <a *ngIf=\"loginAvailable\" [href]=\"apiLoginUrl\">\n      <span class=\"hide-below-s\">\n        Log in with AniList\n      </span>\n      <fa-icon name=\"sign-in-alt\"></fa-icon>\n    </a>\n  </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/mt-header/mt-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\nmat-toolbar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  position: relative;\n  height: 64px;\n  padding: 0 24px; }\n  mat-toolbar > * {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex: 1;\n        flex: 1;\n    height: 100%; }\n    mat-toolbar > *:first-child {\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n    mat-toolbar > *:not(:first-child):not(:last-child) {\n      -ms-flex-pack: center;\n          justify-content: center; }\n    mat-toolbar > *:last-child {\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  mat-toolbar .centered-content {\n    text-align: center; }\n  mat-toolbar .section-links a {\n    width: 96px;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    box-sizing: border-box;\n    border-top-width: 4px;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    height: 100%;\n    transition: 0.2s;\n    font-size: 0;\n    padding: 4px 0; }\n    mat-toolbar .section-links a > * {\n      font-size: initial; }\n    mat-toolbar .section-links a .section-icon {\n      font-size: 28px;\n      padding: 2px 0; }\n    mat-toolbar .section-links a.active {\n      border-bottom-width: 4px;\n      border-bottom-style: solid;\n      pointer-events: none; }\n    mat-toolbar .section-links a .small {\n      display: block;\n      font-size: 12px;\n      line-height: 12px; }\n  mat-toolbar img.avatar {\n    max-width: 64px;\n    max-height: 100%;\n    width: auto;\n    height: auto; }\n\n.action-icon {\n  min-width: 24px;\n  display: inline-block;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/mt-header/mt-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_auth_store__ = __webpack_require__("../../../../../src/app/store/auth.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__with_observable_on_destroy_with_observable_on_destroy_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MtHeaderComponent = (function (_super) {
    __extends(MtHeaderComponent, _super);
    function MtHeaderComponent(router, authService, authStore) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.authService = authService;
        _this.authStore = authStore;
        _this.apiLoginUrl = __WEBPACK_IMPORTED_MODULE_4__app_constants__["c" /* apiLoginUrl */];
        _this.dashboardUrl = __WEBPACK_IMPORTED_MODULE_4__app_constants__["f" /* dashboardUrl */];
        _this.animeSearchUrl = __WEBPACK_IMPORTED_MODULE_4__app_constants__["b" /* animeSearchUrl */];
        _this.userListUrl = __WEBPACK_IMPORTED_MODULE_4__app_constants__["j" /* userListUrl */];
        if (location.href.indexOf(__WEBPACK_IMPORTED_MODULE_4__app_constants__["d" /* apiTokenPrefix */]) >= 0) {
            var locationParts = location.href.split('&')[0].split(__WEBPACK_IMPORTED_MODULE_4__app_constants__["d" /* apiTokenPrefix */]);
            history.replaceState({}, 'Login success', locationParts[0]);
            _this.authService.logIn(locationParts[1]);
            _this.navigateToHomePage(true);
        }
        _this.loginAvailable = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].anilist_client_id >= 0;
        _this.user = _this.authStore.getUser();
        _this.router.events
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function () {
            _this.onRoot = location.href.indexOf(__WEBPACK_IMPORTED_MODULE_4__app_constants__["h" /* rootUrl */]) >= 0;
            _this.onDashboard = location.href.indexOf(__WEBPACK_IMPORTED_MODULE_4__app_constants__["f" /* dashboardUrl */]) >= 0;
            _this.onAnimeSearch = location.href.indexOf(__WEBPACK_IMPORTED_MODULE_4__app_constants__["b" /* animeSearchUrl */]) >= 0;
            _this.onUserList = location.href.indexOf(__WEBPACK_IMPORTED_MODULE_4__app_constants__["j" /* userListUrl */]) >= 0;
        }))
            .subscribe();
        _this.authService.userChange
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* takeUntil */])(_this.destroyed$), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (user) {
            _this.user = user;
        }))
            .subscribe();
        return _this;
    }
    MtHeaderComponent.prototype.navigateToAnilistProfile = function () {
        window.open("https://anilist.co/user/" + this.user.name);
    };
    MtHeaderComponent.prototype.navigateToUserList = function (replaceUrl) {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__app_constants__["j" /* userListUrl */]], {
            replaceUrl: replaceUrl,
        });
    };
    MtHeaderComponent.prototype.navigateToHomePage = function (replaceUrl) {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__app_constants__["h" /* rootUrl */]], {
            replaceUrl: replaceUrl,
        });
    };
    MtHeaderComponent.prototype.logOut = function () {
        this.authService.logOut();
        this.user = undefined;
        this.loginAvailable = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].anilist_client_id >= 0;
        this.navigateToHomePage();
    };
    MtHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-header',
            template: __webpack_require__("../../../../../src/app/modules/shared/components/mt-header/mt-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/components/mt-header/mt-header.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__store_auth_store__["a" /* AuthStore */]])
    ], MtHeaderComponent);
    return MtHeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_7__with_observable_on_destroy_with_observable_on_destroy_component__["a" /* WithObservableOnDestroy */]));



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-menu-item (click)=\"onPress.emit()\" [disabled]=\"disabled === true\">\n  <fa-icon [name]=\"icon\"></fa-icon>\n  <ng-content></ng-content>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\nfa-icon {\n  min-width: 24px;\n  display: inline-block;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtMenuActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MtMenuActionComponent = (function () {
    function MtMenuActionComponent() {
        this.onPress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MtMenuActionComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MtMenuActionComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], MtMenuActionComponent.prototype, "onPress", void 0);
    MtMenuActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-menu-action',
            template: __webpack_require__("../../../../../src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.scss")],
        })
    ], MtMenuActionComponent);
    return MtMenuActionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithObservableOnDestroy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");

var WithObservableOnDestroy = (function () {
    function WithObservableOnDestroy() {
        this.destroyedSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.destroyed$ = this.destroyedSubject.asObservable();
    }
    WithObservableOnDestroy.prototype.ngOnDestroy = function () {
        this.destroyedSubject.next();
    };
    return WithObservableOnDestroy;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/pipes/sort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, field, desc) {
        var direction = desc ? -1 : 1;
        if (array && array.length) {
            array.sort(function (a, b) {
                if (a[field] < b[field]) {
                    return -1 * direction;
                }
                else if (a[field] > b[field]) {
                    return 1 * direction;
                }
                else {
                    return 0;
                }
            });
        }
        return array;
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_material_module__ = __webpack_require__("../../../../../src/app/modules/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_fa_icon_fa_icon_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/fa-icon/fa-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_modal_mt_modal_content_mt_modal_content_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_modal_mt_modal_footer_mt_modal_footer_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_modal_mt_modal_header_mt_modal_header_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_modal_mt_modal_mt_modal_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/modal/mt-modal/mt-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_mt_footer_mt_footer_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/mt-footer/mt-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_mt_header_mt_header_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/mt-header/mt-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_mt_menu_action_mt_menu_action_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_sort__ = __webpack_require__("../../../../../src/app/modules/shared/pipes/sort.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var declarations = [
    __WEBPACK_IMPORTED_MODULE_8__components_fa_icon_fa_icon_component__["a" /* FaIconComponent */],
    __WEBPACK_IMPORTED_MODULE_13__components_mt_footer_mt_footer_component__["a" /* MtFooterComponent */],
    __WEBPACK_IMPORTED_MODULE_14__components_mt_header_mt_header_component__["a" /* MtHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components_mt_menu_action_mt_menu_action_component__["a" /* MtMenuActionComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_modal_mt_modal_mt_modal_component__["a" /* MtModalComponent */],
    __WEBPACK_IMPORTED_MODULE_9__components_modal_mt_modal_content_mt_modal_content_component__["a" /* MtModalContentComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components_modal_mt_modal_footer_mt_modal_footer_component__["a" /* MtModalFooterComponent */],
    __WEBPACK_IMPORTED_MODULE_11__components_modal_mt_modal_header_mt_modal_header_component__["a" /* MtModalHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_16__pipes_sort__["a" /* SortPipe */],
];
var imports = [
    __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
    __WEBPACK_IMPORTED_MODULE_7__material_material_module__["a" /* MaterialModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */],
];
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: declarations,
            imports: imports,
            exports: declarations.concat(imports),
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/anime-detail/anime-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"narrow-page\">\n\n  <mat-progress-bar *ngIf=\"searching\" mode=\"indeterminate\"></mat-progress-bar>\n\n  <mat-card class=\"composite\">\n\n    <div *ngIf=\"anime\">\n\n      <div class=\"header\">\n        <h3 class=\"no-margin\">\n          {{ anime.title.romaji }}\n        </h3>\n      </div>\n\n      <mat-divider></mat-divider>\n\n      <div class=\"content\">\n\n        <mt-anime-info\n          *ngIf=\"anime\"\n          [anime]=\"anime\"\n          [showAsColumns]=\"true\">\n        </mt-anime-info>\n\n      </div>\n\n    </div>\n\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/anime-detail/anime-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/anime-detail/anime-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimeDetailPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_anime_service__ = __webpack_require__("../../../../../src/app/services/anime.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnimeDetailPageComponent = (function () {
    function AnimeDetailPageComponent(activatedRoute, animeService) {
        this.activatedRoute = activatedRoute;
        this.animeService = animeService;
        var animeId = this.activatedRoute.snapshot.params.id;
        if (animeId && animeId > 0) {
            this.getEntry(animeId);
        }
    }
    AnimeDetailPageComponent.prototype.getEntry = function (animeId) {
        var _this = this;
        this.searching = true;
        this.errorGotten = false;
        this.animeService
            .searchAnime({ id: animeId })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (response) {
            _this.anime = response.media.length > 0 && response.media[0];
            _this.searching = false;
        }, function () {
            _this.errorGotten = true;
            _this.searching = false;
        }))
            .subscribe();
    };
    AnimeDetailPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-anime-detail',
            template: __webpack_require__("../../../../../src/app/pages/anime-detail/anime-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/anime-detail/anime-detail.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_anime_service__["a" /* AnimeService */]])
    ], AnimeDetailPageComponent);
    return AnimeDetailPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/anime-search/anime-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"narrow-page\">\n  <mat-card *ngIf=\"!user\" class=\"warning margin-bottom-xs\">\n    <h4>\n      <fa-icon name=\"exclamation-circle\" class=\"margin-right-xxs\"></fa-icon>\n      You are not logged in. Search will be available but most other features will not.\n    </h4>\n  </mat-card>\n\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n    <mat-card class=\"text-center\">\n      <h1>\n        <label for=\"searchInput\">\n          Anime search\n        </label>\n      </h1>\n\n      <div class=\"form-group\">\n        <mat-form-field class=\"medium display-block margin-auto\">\n          <input id=\"searchInput\" matInput placeholder=\"Anime title\" formControlName=\"search\" />\n        </mat-form-field>\n      </div>\n\n      <!--<mat-form-field id=\"yearInput\">-->\n      <!--<input matInput [matDatepicker]=\"startDatePicker\" placeholder=\"Year\" disabled>-->\n      <!--<mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>-->\n      <!--<mat-datepicker #startDatePicker disabled=\"false\" startView=\"year\"></mat-datepicker>-->\n      <!--</mat-form-field>-->\n\n      <mat-expansion-panel class=\"mat-elevation-z padding-bottom-s search-filters\">\n        <mat-expansion-panel-header>\n          Advanced filters\n        </mat-expansion-panel-header>\n\n        <mat-divider></mat-divider>\n\n        <div class=\"vertical-padding-xs\">\n          <!-- air date -->\n          <div class=\"form-group two-rows\">\n            <mat-form-field>\n              <input\n                matInput\n                type=\"number\"\n                placeholder=\"Aired after year\"\n                formControlName=\"startDate_greater\"\n                [min]=\"minYear\"\n                [max]=\"maxYear\"\n              />\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n                matInput\n                type=\"number\"\n                placeholder=\"Aired before year\"\n                formControlName=\"startDate_lesser\"\n                [min]=\"minYear\"\n                [max]=\"maxYear\"\n              />\n            </mat-form-field>\n          </div>\n\n          <!-- score -->\n          <div class=\"form-group two-rows\">\n            <mat-form-field>\n              <input\n                matInput\n                type=\"number\"\n                placeholder=\"Scored above\"\n                formControlName=\"averageScore_greater\"\n                min=\"0\"\n                max=\"10\"\n                step=\".1\"\n              />\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n                matInput\n                type=\"number\"\n                placeholder=\"Scored below\"\n                formControlName=\"averageScore_lesser\"\n                min=\"0\"\n                max=\"10\"\n                step=\".1\"\n              />\n            </mat-form-field>\n          </div>\n\n          <!-- genre -->\n          <div class=\"form-group two-rows\">\n            <mat-form-field>\n              <mat-select placeholder=\"Genre in...\" formControlName=\"genre_in\" multiple>\n                <mat-option *ngFor=\"let genre of mediaGenres\" [value]=\"genre\">\n                  {{ genre }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field>\n              <mat-select placeholder=\"Genre not in...\" formControlName=\"genre_not_in\" multiple>\n                <mat-option *ngFor=\"let genre of mediaGenres\" [value]=\"genre\">\n                  {{ genre }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n\n          <!-- format -->\n          <div class=\"form-group two-rows\">\n            <mat-form-field>\n              <mat-select placeholder=\"Format in...\" #formatInput formControlName=\"format_in\" multiple>\n                <mat-option *ngFor=\"let mediaFormat of mediaFormats\" [value]=\"mediaFormat.value\">\n                  {{ mediaFormat.label }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field>\n              <mat-select placeholder=\"Format not in...\" #formatInput formControlName=\"format_not_in\" multiple>\n                <mat-option *ngFor=\"let mediaFormat of mediaFormats\" [value]=\"mediaFormat.value\">\n                  {{ mediaFormat.label }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n\n          <!-- status -->\n          <div class=\"form-group two-rows\">\n            <mat-form-field>\n              <mat-select placeholder=\"Status in...\" #formatInput formControlName=\"status_in\" multiple>\n                <mat-option *ngFor=\"let mediaStatus of mediaStatuses\" [value]=\"mediaStatus.value\">\n                  {{ mediaStatus.label }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field>\n              <mat-select placeholder=\"Status not in...\" #formatInput formControlName=\"status_not_in\" multiple>\n                <mat-option *ngFor=\"let mediaStatus of mediaStatuses\" [value]=\"mediaStatus.value\">\n                  {{ mediaStatus.label }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n\n          <!-- on list -->\n          <div class=\"form-group\">\n            <mat-form-field>\n              <mat-select placeholder=\"On list?\" formControlName=\"onList\">\n                <mat-option *ngFor=\"let option of onListOptions\" [value]=\"option.value\">\n                  {{ option.label }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"text-center padding-bottom-xs\">\n          <button mat-raised-button type=\"button\" (click)=\"clearFilters($event)\">\n            Clear filters\n          </button>\n        </div>\n\n        <mat-divider></mat-divider>\n      </mat-expansion-panel>\n\n      <div class=\"text-center\">\n        <button mat-raised-button color=\"accent\" [disabled]=\"!searchForm.valid\">\n          <fa-icon name=\"search baseline\" class=\"margin-right-xxxs\"></fa-icon>\n          Search\n        </button>\n      </div>\n    </mat-card>\n\n    <mat-progress-bar *ngIf=\"searching\" mode=\"indeterminate\"></mat-progress-bar>\n    <div *ngIf=\"!searching\" class=\"progress-placeholder\"></div>\n\n    <mat-card *ngIf=\"error\" class=\"error\">\n      <h4>\n        <fa-icon name=\"exclamation-circle\" class=\"margin-right-xxs\"></fa-icon>\n        {{ error }}\n      </h4>\n    </mat-card>\n\n    <mat-card *ngIf=\"noResults\" class=\"info\">\n      <h4>\n        <fa-icon name=\"info-circle\" class=\"margin-right-xxs\"></fa-icon>\n        No results found\n      </h4>\n    </mat-card>\n\n    <mat-card *ngIf=\"animeList && animeList.length > 0\" class=\"no-padding\">\n      <mt-search-results-table [tableData]=\"animeList\" (onSortChange)=\"sortBy($event)\"> </mt-search-results-table>\n\n      <mat-paginator\n        [length]=\"pagination.total\"\n        [pageSize]=\"pagination.perPage\"\n        [pageIndex]=\"pagination.pageIndex\"\n        [pageSizeOptions]=\"[5, 10, 25, 50]\"\n        (page)=\"changePage($event)\"\n      >\n      </mat-paginator>\n    </mat-card>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/anime-search/anime-search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\nmat-form-field {\n  width: 100%; }\n\n#searchInput {\n  font-size: 16px;\n  line-height: 24px; }\n\n.form-group {\n  max-width: 640px;\n  margin: auto; }\n  @media (min-width: 481px) {\n    .form-group.two-rows > * {\n      max-width: calc(50% - 16px); }\n      .form-group.two-rows > *:first-child {\n        float: left; }\n      .form-group.two-rows > *:last-child {\n        float: right; } }\n\n.progress-placeholder {\n  height: 5px; }\n\nmat-card:not(:first-of-type) {\n  margin-top: 24px; }\n\nmat-expansion-panel-header {\n  padding: 0 8px; }\n\n@media (max-width: 480px) {\n  button {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/anime-search/anime-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimeSearchPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_anime_components_mt_search_results_table_mt_search_results_table_component__ = __webpack_require__("../../../../../src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_shared_components_with_observable_on_destroy_with_observable_on_destroy_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_anime_service__ = __webpack_require__("../../../../../src/app/services/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_auth_store__ = __webpack_require__("../../../../../src/app/store/auth.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__types_anilist_enums_mediaFormats__ = __webpack_require__("../../../../../src/app/types/anilist/enums/mediaFormats.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__types_anilist_enums_mediaStatus__ = __webpack_require__("../../../../../src/app/types/anilist/enums/mediaStatus.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__types_anilist_enums_onListOptions__ = __webpack_require__("../../../../../src/app/types/anilist/enums/onListOptions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_generic_util__ = __webpack_require__("../../../../../src/app/utils/generic.util.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AnimeSearchPageComponent = (function (_super) {
    __extends(AnimeSearchPageComponent, _super);
    function AnimeSearchPageComponent(router, activatedRoute, animeService, authService, authStore, formBuilder) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.animeService = animeService;
        _this.authService = authService;
        _this.authStore = authStore;
        _this.formBuilder = formBuilder;
        _this.mediaFormats = __WEBPACK_IMPORTED_MODULE_11__types_anilist_enums_mediaFormats__["a" /* mediaFormatValues */];
        _this.mediaStatuses = __WEBPACK_IMPORTED_MODULE_12__types_anilist_enums_mediaStatus__["a" /* mediaStatusValues */];
        _this.onListOptions = __WEBPACK_IMPORTED_MODULE_13__types_anilist_enums_onListOptions__["a" /* OnListOptions */].LIST;
        _this.minYear = 1900;
        _this.maxYear = new Date().getFullYear() + 1;
        _this.user = _this.authStore.getUser();
        _this.setupForm();
        _this.animeService
            .getAnimeGenres()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (mediaGenres) { return (_this.mediaGenres = mediaGenres); }))
            .subscribe();
        _this.authService.userChange
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* takeUntil */])(_this.destroyed$), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (user) {
            _this.user = user;
        }))
            .subscribe();
        return _this;
    }
    AnimeSearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var queryParams = this.activatedRoute.snapshot.queryParams;
        var fieldKeys = Object.keys(queryParams);
        if (fieldKeys.length) {
            Object.keys(queryParams).forEach(function (fieldKey) {
                var field = _this.searchForm.controls[fieldKey];
                var value = JSON.parse(queryParams[fieldKey]);
                if (field && __WEBPACK_IMPORTED_MODULE_14__utils_generic_util__["a" /* GenericUtil */].isSet(value)) {
                    field.setValue(value);
                }
            });
            this.sort = queryParams.sort ? JSON.parse(queryParams.sort) : this.sort;
            this.expansionPanel.open();
            this.search();
        }
    };
    AnimeSearchPageComponent.prototype.clearFilters = function (event) {
        this.preventDefault(event);
        this.setupForm();
        this.updateQueryParams();
    };
    AnimeSearchPageComponent.prototype.sortBy = function (mediaSort) {
        this.sort = mediaSort && mediaSort.value;
        this.search();
    };
    AnimeSearchPageComponent.prototype.preventDefault = function (event) {
        if (event) {
            event.preventDefault();
        }
    };
    AnimeSearchPageComponent.prototype.setupForm = function () {
        this.searchForm = this.formBuilder.group({
            search: [''],
            startDate_greater: [undefined, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(this.minYear), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].max(this.maxYear)]],
            startDate_lesser: [undefined, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(this.minYear), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].max(this.maxYear)]],
            averageScore_greater: [undefined, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].max(10)]],
            averageScore_lesser: [undefined, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].max(10)]],
            genre_in: [[]],
            genre_not_in: [[]],
            format_in: [[]],
            format_not_in: [[]],
            status_in: [[]],
            status_not_in: [[]],
            onList: [undefined],
        });
    };
    AnimeSearchPageComponent.prototype.search = function (page, perPage) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_14__utils_generic_util__["a" /* GenericUtil */].scrollToRef(this.resultsTable);
        this.updateQueryParams();
        this.searching = true;
        this.error = undefined;
        var filters = this.searchForm.value;
        var query = {
            search: filters.search,
            genre_in: filters.genre_in,
            genre_not_in: filters.genre_not_in,
            format_in: filters.format_in,
            format_not_in: filters.format_not_in,
            status_in: filters.status_in,
            status_not_in: filters.status_not_in,
            onList: filters.onList,
            sort: this.sort,
        };
        if (filters.startDate_lesser) {
            query.startDate_lesser = this.getDateScalarFromYear(filters.startDate_lesser);
        }
        if (filters.startDate_greater) {
            query.startDate_greater = this.getDateScalarFromYear(filters.startDate_greater - 1) + 1231;
        }
        if (filters.averageScore_greater) {
            query.averageScore_greater = filters.averageScore_greater * 10;
        }
        if (filters.averageScore_lesser) {
            query.averageScore_lesser = filters.averageScore_lesser * 10;
        }
        var pageInfo = {
            pageIndex: page,
            perPage: perPage,
        };
        this.animeService
            .searchAnime(query, pageInfo)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (response) {
            _this.noResults = response.media.length < 1;
            _this.animeList = response.media;
            _this.pagination = response.pageInfo;
            _this.pagination.pageIndex = response.pageInfo.currentPage - 1;
            _this.searching = false;
        }, function (error) {
            _this.error = error;
            _this.noResults = false;
            _this.searching = false;
        }))
            .subscribe();
    };
    AnimeSearchPageComponent.prototype.getDateScalarFromYear = function (year) {
        return year * 10000;
    };
    AnimeSearchPageComponent.prototype.updateQueryParams = function () {
        var queryParams = {
            sort: JSON.stringify(this.sort),
        };
        var filters = this.searchForm.value;
        Object.keys(filters).forEach(function (fieldKey) {
            var field = filters[fieldKey];
            if (__WEBPACK_IMPORTED_MODULE_14__utils_generic_util__["a" /* GenericUtil */].isSet(field) && field.length !== 0) {
                queryParams[fieldKey] = JSON.stringify(field);
            }
        });
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__app_constants__["b" /* animeSearchUrl */]], { queryParams: queryParams });
    };
    AnimeSearchPageComponent.prototype.changePage = function (pageEvent) {
        this.search(pageEvent.pageIndex + 1, pageEvent.pageSize);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatExpansionPanel */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatExpansionPanel */])
    ], AnimeSearchPageComponent.prototype, "expansionPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__modules_anime_components_mt_search_results_table_mt_search_results_table_component__["a" /* MtSearchResultsTableComponent */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AnimeSearchPageComponent.prototype, "resultsTable", void 0);
    AnimeSearchPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-anime-search',
            template: __webpack_require__("../../../../../src/app/pages/anime-search/anime-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/anime-search/anime-search.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_8__services_anime_service__["a" /* AnimeService */],
            __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__store_auth_store__["a" /* AuthStore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], AnimeSearchPageComponent);
    return AnimeSearchPageComponent;
}(__WEBPACK_IMPORTED_MODULE_7__modules_shared_components_with_observable_on_destroy_with_observable_on_destroy_component__["a" /* WithObservableOnDestroy */]));



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns-wrapper\">\n  <div class=\"column left-sidebar\">\n    <mt-recently-updated-list-entries></mt-recently-updated-list-entries>\n  </div>\n  <div class=\"column main-content\">\n    <mat-card class=\"warning\">\n      <h4>\n        <fa-icon name=\"exclamation-triangle\" class=\"margin-right-xxs\"></fa-icon>\n        Work In Progress\n      </h4>\n    </mat-card>\n    <!--<mt-list-related-media></mt-list-related-media>-->\n  </div>\n  <div class=\"column right-sidebar\">\n    <mt-recently-finished-media></mt-recently-finished-media>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n.columns-wrapper {\n  font-size: 0; }\n  .columns-wrapper > * {\n    font-size: initial; }\n  .columns-wrapper .column {\n    padding: 0 6px;\n    vertical-align: top;\n    display: inline-block;\n    box-sizing: border-box; }\n    .columns-wrapper .column.left-sidebar {\n      width: 440px;\n      padding-left: 0; }\n    .columns-wrapper .column.main-content {\n      width: calc(100% - 880px); }\n    .columns-wrapper .column.right-sidebar {\n      width: 440px;\n      padding-right: 0; }\n    @media (max-width: 1360px) {\n      .columns-wrapper .column {\n        padding: 6px 0;\n        width: 100% !important; }\n        .columns-wrapper .column.left-sidebar, .columns-wrapper .column.right-sidebar {\n          float: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardPageComponent = (function () {
    function DashboardPageComponent() {
    }
    DashboardPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"narrow-page\">\n\n  <mat-card>\n    <div class=\"text-center vertical-padding-m\">\n      <h2>\n        <a [href]=apiLoginUrl>Log in with AniList</a>\n      </h2>\n    </div>\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPageComponent = (function () {
    function LoginPageComponent() {
        this.apiLoginUrl = __WEBPACK_IMPORTED_MODULE_1__app_constants__["c" /* apiLoginUrl */];
    }
    LoginPageComponent.prototype.ngOnInit = function () { };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"inline-block text-center\">\n  <fa-icon name=\"exclamation-circle\" class=\"fa-5x\"></fa-icon>\n  <h1>\n    Error 404\n  </h1>\n  <h2>\n    Page not found\n  </h2>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundPageComponent = (function () {
    function PageNotFoundPageComponent() {
    }
    PageNotFoundPageComponent.prototype.ngOnInit = function () { };
    PageNotFoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-page-not-found',
            template: __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundPageComponent);
    return PageNotFoundPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/user-anime-list/user-anime-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"narrow-page\">\n  <mat-card *ngIf=\"!user\" class=\"alert warning\">\n    <h4>\n      <fa-icon name=\"exclamation-circle\" class=\"margin-right-xxs\"></fa-icon>\n      You are not logged in.\n    </h4>\n  </mat-card>\n\n  <mat-spinner *ngIf=\"user && !ready\" mode=\"indeterminate\" class=\"full-page\"></mat-spinner>\n\n  <div *ngIf=\"user && ready && !errorGotten\">\n    <div *ngIf=\"statuses && statuses.length\">\n      <mat-card class=\"table-filter\">\n        <mat-form-field class=\"full-width\">\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter by name\" />\n        </mat-form-field>\n      </mat-card>\n\n      <mat-card class=\"margin-top-s\">\n        <h3>\n          Show / Go to\n        </h3>\n\n        <div class=\"statuses-wrapper\">\n          <span *ngFor=\"let status of statuses\" class=\"status-wrapper\">\n            <div *ngIf=\"hasDataOfStatus(status.value)\">\n              <mat-checkbox [(ngModel)]=\"status.shown\">\n                <span class=\"capitalize\">\n                  {{ status.value.toLowerCase() }}\n                </span>\n              </mat-checkbox>\n\n              <a href=\"{{ '/user-anime-list#' + status.value }}\" class=\"go-to-link\">\n                <fa-icon name=\"arrow-down\" class=\"vertically-centered\"></fa-icon>\n              </a>\n            </div>\n          </span>\n        </div>\n      </mat-card>\n\n      <div *ngFor=\"let status of statuses\">\n        <div *ngIf=\"status.shown && hasDataOfStatus(status.value)\" class=\"status-table-wrapper\">\n          <mt-user-anime-list-table\n            [tableStatus]=\"status\"\n            [tableData]=\"statusObjects[status.value]\"\n            [favouriteIDs]=\"favouriteIDs\"\n            [filter]=\"filter\"\n            (onEntryUpdate)=\"onEntryUpdate($event)\"\n          >\n          </mt-user-anime-list-table>\n        </div>\n      </div>\n\n      <div class=\"padding-top-xs padding-bottom-m\">\n        <h3>\n          Settings\n        </h3>\n\n        <mat-slide-toggle [checked]=\"reloadOnUpdate\" (change)=\"reloadOnUpdate = !reloadOnUpdate\">\n          Reload on update\n        </mat-slide-toggle>\n      </div>\n\n      <mt-genres-overview [genreStatsList]=\"user.stats.favouredGenresOverview\"> </mt-genres-overview>\n    </div>\n\n    <mat-card *ngIf=\"ready && !error && (!statuses || !statuses.length)\">\n      <h4>\n        <fa-icon name=\"exclamation-circle\" class=\"margin-right-xxs\"></fa-icon>\n        You haven't added any entries yet.\n      </h4>\n    </mat-card>\n  </div>\n\n  <mat-card *ngIf=\"error\" class=\"error\">\n    <h4>\n      <fa-icon name=\"exclamation-circle\" class=\"margin-right-xxs\"></fa-icon>\n      {{ error }}\n    </h4>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/user-anime-list/user-anime-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n.table-filter {\n  padding-top: 8px !important;\n  padding-bottom: 0 !important; }\n\n.statuses-wrapper mat-checkbox {\n  display: inline-block;\n  vertical-align: text-bottom; }\n\n.statuses-wrapper .status-wrapper {\n  margin-right: 16px;\n  display: inline-block;\n  min-width: 104px; }\n  .statuses-wrapper .status-wrapper .go-to-link {\n    height: 24px;\n    display: inline-block;\n    vertical-align: top; }\n\n.status-table-wrapper:not(:last-of-type) {\n  margin-bottom: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user-anime-list/user-anime-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAnimeListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_anime_service__ = __webpack_require__("../../../../../src/app/services/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_auth_store__ = __webpack_require__("../../../../../src/app/store/auth.store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserAnimeListPageComponent = (function () {
    function UserAnimeListPageComponent(router, animeService, authStore) {
        this.router = router;
        this.animeService = animeService;
        this.authStore = authStore;
        this.reloadOnUpdate = true;
        this.user = this.authStore.getUser();
        this.loggedIn = this.user !== undefined;
        if (!this.loggedIn) {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__app_constants__["h" /* rootUrl */]]);
        }
        this.updateListData();
    }
    UserAnimeListPageComponent.prototype.getUserList = function () {
        var _this = this;
        if (this.user) {
            this.animeService
                .getAnimeList(this.user)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (response) {
                _this.statusObjects = response;
                _this.statuses = Object.keys(response)
                    .sort()
                    .map(function (status) { return ({
                    value: status,
                    shown: true,
                }); });
                _this.ready = true;
            }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) {
                _this.error = error;
                _this.ready = true;
                return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])();
            }))
                .subscribe();
        }
    };
    UserAnimeListPageComponent.prototype.getListFavouriteIDs = function () {
        var _this = this;
        if (this.user) {
            this.animeService.getAnimeListFavouriteIDs(this.user, function (favouriteIDs) {
                _this.favouriteIDs = favouriteIDs;
            });
        }
    };
    UserAnimeListPageComponent.prototype.hasDataOfStatus = function (status) {
        return this.statusObjects && this.statusObjects[status] && this.statusObjects[status].length > 0;
    };
    UserAnimeListPageComponent.prototype.applyFilter = function (filterValue) {
        this.filter = filterValue.trim().toLowerCase();
    };
    UserAnimeListPageComponent.prototype.getListAsString = function () {
        return JSON.stringify(this.statusObjects, undefined, 2);
    };
    UserAnimeListPageComponent.prototype.onEntryUpdate = function (listEntry) {
        if (this.reloadOnUpdate) {
            this.updateListData();
        }
    };
    UserAnimeListPageComponent.prototype.updateListData = function () {
        this.statusObjects = undefined;
        this.statuses = undefined;
        this.favouriteIDs = undefined;
        this.ready = false;
        this.getUserList();
        this.getListFavouriteIDs();
    };
    UserAnimeListPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-user-anime-list',
            template: __webpack_require__("../../../../../src/app/pages/user-anime-list/user-anime-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/user-anime-list/user-anime-list.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_anime_service__["a" /* AnimeService */], __WEBPACK_IMPORTED_MODULE_6__store_auth_store__["a" /* AuthStore */]])
    ], UserAnimeListPageComponent);
    return UserAnimeListPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/anime.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_anime_anime_api__ = __webpack_require__("../../../../../src/app/api/anime/anime.api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnimeService = (function () {
    function AnimeService(animeApi) {
        this.animeApi = animeApi;
    }
    AnimeService.prototype.getAnimeGenres = function () {
        return this.animeApi.queryAnimeGenres();
    };
    AnimeService.prototype.searchAnime = function (query, pageInfo) {
        return this.animeApi.queryAnimeSearch(query, pageInfo);
    };
    AnimeService.prototype.getAnimeList = function (user) {
        return this.animeApi.queryAnimeList(user);
    };
    AnimeService.prototype.getAnimeListMediaIdsByStatus = function (user) {
        return this.animeApi.queryAnimeListMediaIdsByStatus(user);
    };
    AnimeService.prototype.getRecentlyUpdatedAnime = function (user, pageInfo) {
        return this.animeApi.queryRecentlyUpdatedAnime(user, pageInfo);
    };
    AnimeService.prototype.getRecentlyFinishedAiringAnime = function (query, pageInfo) {
        return this.animeApi.queryRecentlyFinishedAiringAnime(query, pageInfo);
    };
    AnimeService.prototype.getRelatedAnimeMedia = function (user) {
        return this.animeApi.queryRelatedAnimeMedia(user);
    };
    AnimeService.prototype.getAnimeListFavourites = function (user, callback) {
        return this.animeApi.queryAnimeListFavourites(user, callback);
    };
    AnimeService.prototype.getAnimeListFavouriteIDs = function (user, callback) {
        return this.animeApi.queryAnimeListFavouriteIDs(user, callback);
    };
    AnimeService.prototype.saveAnimeListEntry = function (listEntry) {
        return this.animeApi.saveAnimeListEntry(listEntry);
    };
    AnimeService.prototype.deleteAnimeListEntry = function (listEntry) {
        return this.animeApi.deleteAnimeListEntry(listEntry);
    };
    AnimeService.prototype.toggleFavouriteAnimeListEntry = function (listEntry) {
        return this.animeApi.toggleAnimeFavouriteEntry(listEntry);
    };
    AnimeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_anime_anime_api__["a" /* AnimeApi */]])
    ], AnimeService);
    return AnimeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_auth_auth_api__ = __webpack_require__("../../../../../src/app/api/auth/auth.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_auth_store__ = __webpack_require__("../../../../../src/app/store/auth.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_local_storage_util__ = __webpack_require__("../../../../../src/app/utils/local-storage.util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = (function () {
    function AuthService(authApi, authStore) {
        this.authApi = authApi;
        this.authStore = authStore;
        this.userChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.getAccessToken();
        this.getUser();
    }
    AuthService.prototype.logIn = function (accessToken) {
        var _this = this;
        this.setAccessToken(accessToken);
        this.authApi
            .queryUser()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (user) {
            _this.setUser(user);
            _this.userChange.next(user);
        }))
            .subscribe();
    };
    AuthService.prototype.logOut = function () {
        this.removeAccessToken();
        this.removeUser();
        this.userChange.next();
    };
    AuthService.prototype.setAccessToken = function (accessToken) {
        this.authStore.setAccessToken(accessToken);
        __WEBPACK_IMPORTED_MODULE_7__utils_local_storage_util__["a" /* LocalStorage */].setString(__WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* accessTokenCookieKey */], accessToken);
    };
    AuthService.prototype.getAccessToken = function () {
        var accessToken = __WEBPACK_IMPORTED_MODULE_7__utils_local_storage_util__["a" /* LocalStorage */].getString(__WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* accessTokenCookieKey */]);
        this.authStore.setAccessToken(accessToken);
    };
    AuthService.prototype.removeAccessToken = function () {
        this.authStore.removeAccessToken();
        __WEBPACK_IMPORTED_MODULE_7__utils_local_storage_util__["a" /* LocalStorage */].remove(__WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* accessTokenCookieKey */]);
    };
    AuthService.prototype.setUser = function (user) {
        this.authStore.setUser(user);
        __WEBPACK_IMPORTED_MODULE_7__utils_local_storage_util__["a" /* LocalStorage */].setObject(__WEBPACK_IMPORTED_MODULE_5__app_constants__["i" /* userCookieKey */], user);
    };
    AuthService.prototype.getUser = function () {
        var user = __WEBPACK_IMPORTED_MODULE_7__utils_local_storage_util__["a" /* LocalStorage */].getObject(__WEBPACK_IMPORTED_MODULE_5__app_constants__["i" /* userCookieKey */]);
        this.authStore.setUser(user);
    };
    AuthService.prototype.removeUser = function () {
        this.authStore.removeUser();
        __WEBPACK_IMPORTED_MODULE_7__utils_local_storage_util__["a" /* LocalStorage */].remove(__WEBPACK_IMPORTED_MODULE_5__app_constants__["i" /* userCookieKey */]);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_auth_auth_api__["a" /* AuthApi */], __WEBPACK_IMPORTED_MODULE_6__store_auth_store__["a" /* AuthStore */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/store/auth.store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthStore = (function () {
    function AuthStore() {
        this.state = {};
    }
    AuthStore.prototype.setAccessToken = function (accessToken) {
        this.state = __assign({}, this.state, { accessToken: accessToken });
    };
    AuthStore.prototype.getAccessToken = function () {
        return this.state.accessToken;
    };
    AuthStore.prototype.removeAccessToken = function () {
        this.state = __assign({}, this.state, { accessToken: undefined });
    };
    AuthStore.prototype.setUser = function (user) {
        this.state = __assign({}, this.state, { user: user });
    };
    AuthStore.prototype.getUser = function () {
        return this.state.user;
    };
    AuthStore.prototype.removeUser = function () {
        this.state = __assign({}, this.state, { user: undefined });
    };
    AuthStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], AuthStore);
    return AuthStore;
}());



/***/ }),

/***/ "../../../../../src/app/types/anilist/anime.types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Anime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_types__ = __webpack_require__("../../../../../src/app/types/anilist/media.types.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Anime = (function (_super) {
    __extends(Anime, _super);
    function Anime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Anime;
}(__WEBPACK_IMPORTED_MODULE_0__media_types__["a" /* Media */]));



/***/ }),

/***/ "../../../../../src/app/types/anilist/enums/listEntryStatus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listEntryStatusValues; });
var listEntryStatusValues = [
    { label: 'Completed', value: 'COMPLETED' },
    { label: 'Dropped', value: 'DROPPED' },
    { label: 'Paused', value: 'PAUSED' },
    { label: 'Planned', value: 'PLANNING' },
    { label: 'Repeating', value: 'REPEATING' },
    { label: 'Watching', value: 'CURRENT' },
];


/***/ }),

/***/ "../../../../../src/app/types/anilist/enums/mediaFormats.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mediaFormatValues; });
var mediaFormatValues = [
    { label: 'Movie', value: 'MOVIE' },
    { label: 'Music', value: 'MUSIC' },
    { label: 'ONA', value: 'ONA' },
    { label: 'OVA', value: 'OVA' },
    { label: 'Special', value: 'SPECIAL' },
    { label: 'TV short', value: 'TV_SHORT' },
    { label: 'TV', value: 'TV' },
];


/***/ }),

/***/ "../../../../../src/app/types/anilist/enums/mediaSorts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaSort; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enumMap_types__ = __webpack_require__("../../../../../src/app/types/enumMap.types.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MediaSort = (function (_super) {
    __extends(MediaSort, _super);
    function MediaSort(value) {
        return _super.call(this, value, MediaSort.LIST, true) || this;
    }
    MediaSort.fromSort = function (sort) {
        var sortKey = sort.active.replace(/-/g, '_');
        if (sort.direction === 'desc') {
            sortKey += "_" + sort.direction;
        }
        return new MediaSort(sortKey);
    };
    MediaSort.TITLE_ROMAJI = 'TITLE_ROMAJI';
    MediaSort.TITLE_ROMAJI_DESC = 'TITLE_ROMAJI_DESC';
    MediaSort.FORMAT = 'FORMAT';
    MediaSort.FORMAT_DESC = 'FORMAT_DESC';
    MediaSort.START_DATE = 'START_DATE';
    MediaSort.START_DATE_DESC = 'START_DATE_DESC';
    MediaSort.SCORE = 'SCORE';
    MediaSort.SCORE_DESC = 'SCORE_DESC';
    MediaSort.EPISODES = 'EPISODES';
    MediaSort.EPISODES_DESC = 'EPISODES_DESC';
    MediaSort.UPDATED_TIME = 'UPDATED_TIME';
    MediaSort.UPDATED_TIME_DESC = 'UPDATED_TIME_DESC';
    MediaSort.END_DATE = 'END_DATE';
    MediaSort.END_DATE_DESC = 'END_DATE_DESC';
    MediaSort.LIST = [
        { label: 'Title (asc)', value: 'TITLE_ROMAJI' },
        { label: 'Title (desc)', value: 'TITLE_ROMAJI_DESC' },
        { label: 'Format (asc)', value: 'FORMAT' },
        { label: 'Format (desc)', value: 'FORMAT_DESC' },
        { label: 'Year (asc)', value: 'START_DATE' },
        { label: 'Year (desc)', value: 'START_DATE_DESC' },
        { label: 'Score (asc)', value: 'SCORE' },
        { label: 'Score (desc)', value: 'SCORE_DESC' },
        { label: 'Episodes (asc)', value: 'EPISODES' },
        { label: 'Episodes (desc)', value: 'EPISODES_DESC' },
        { label: 'Time updated (asc)', value: 'UPDATED_TIME' },
        { label: 'Time updated (desc)', value: 'UPDATED_TIME_DESC' },
        { label: 'Date ended (asc)', value: 'END_DATE' },
        { label: 'Date ended (desc)', value: 'END_DATE_DESC' }
    ];
    return MediaSort;
}(__WEBPACK_IMPORTED_MODULE_0__enumMap_types__["a" /* EnumMap */]));



/***/ }),

/***/ "../../../../../src/app/types/anilist/enums/mediaStatus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mediaStatusValues; });
var mediaStatusValues = [
    { label: 'Finished', value: 'FINISHED' },
    { label: 'Airing', value: 'RELEASING' },
    { label: 'Unaired', value: 'NOT_YET_RELEASED' },
    { label: 'Cancelled', value: 'CANCELLED' },
];


/***/ }),

/***/ "../../../../../src/app/types/anilist/enums/onListOptions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnListOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enumMap_types__ = __webpack_require__("../../../../../src/app/types/enumMap.types.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var OnListOptions = (function (_super) {
    __extends(OnListOptions, _super);
    function OnListOptions(value) {
        return _super.call(this, value, OnListOptions.LIST, true) || this;
    }
    OnListOptions.LIST = [
        { label: 'Not on list', value: false },
        { label: 'On list only', value: true },
        { label: 'Both', value: undefined },
    ];
    return OnListOptions;
}(__WEBPACK_IMPORTED_MODULE_0__enumMap_types__["a" /* EnumMap */]));



/***/ }),

/***/ "../../../../../src/app/types/anilist/media.types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Media; });
var Media = (function () {
    function Media() {
    }
    return Media;
}());



/***/ }),

/***/ "../../../../../src/app/types/enumMap.types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumMap; });
var EnumMap = (function () {
    function EnumMap(value, mapping, ignoreCase) {
        return mapping.find(function (mediaType) {
            return ignoreCase ? mediaType.value.toLowerCase() === value.toLowerCase() : mediaType.value === value;
        });
    }
    return EnumMap;
}());



/***/ }),

/***/ "../../../../../src/app/utils/generic.util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GenericUtil = (function () {
    function GenericUtil() {
    }
    GenericUtil.isSet = function (variable) {
        return variable !== undefined && variable !== null;
    };
    GenericUtil.scrollTo = function (element) {
        if (element) {
            element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    };
    GenericUtil.scrollToRef = function (elementRef) {
        if (elementRef && elementRef.nativeElement) {
            this.scrollTo(elementRef.nativeElement);
        }
    };
    GenericUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], GenericUtil);
    return GenericUtil;
}());



/***/ }),

/***/ "../../../../../src/app/utils/local-storage.util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
var LocalStorage = (function () {
    function LocalStorage() {
    }
    LocalStorage.setString = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorage.getString = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorage.remove = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorage.setObject = function (key, json) {
        localStorage.setItem(key, JSON.stringify(json));
    };
    LocalStorage.getObject = function (key) {
        var jsonString = localStorage.getItem(key);
        return jsonString && JSON.parse(jsonString);
    };
    return LocalStorage;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `envi ronment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    anilist_client_id: 1364,
    production: false,
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map